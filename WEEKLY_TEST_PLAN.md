# Weekly Test — design plan

Status: **design (pre-implementation)**. This document is the agreed shape of the
feature; implementation follows in phases (see end). Nothing here is built yet.

## What it is

A teacher authors a short **weekly test** (~10 questions, 1–3 marks each, some with
an image/source), assigns it to a class, students take it, **Claude auto-marks each
free-text answer against the teacher's mark scheme and shows the mark immediately**,
the teacher can override any mark, and the teacher gets **per-question and
per-student analytics**.

### Decisions captured
- **Marking flow:** AI marks are **released live** to the student on submit; the
  teacher can override afterwards.
- **Images:** a **Supabase Storage bucket** — teachers upload their own/unseen
  source images, and can also reference pictures already in the repo.
- **Marking model:** `claude-sonnet-4-6` (your Anthropic key, server-side).
- **Cost:** hard caps + usage tracking + an Anthropic-side backstop (see
  **§6 Cost controls** — this is load-bearing, designed in, not bolted on).

### What you deploy vs what I build
I write & commit: the SQL migration, the Edge Function, the Storage policy, and the
three UIs. **You** run (once): `supabase db push`,
`supabase functions deploy mark-answer`, `supabase secrets set ANTHROPIC_API_KEY=…`,
create the Storage bucket, and set a spend limit in the Anthropic Console.
I can't deploy or set secrets from here, and can't live-test the Supabase+LLM path —
we shake that out on your deploy.

---

## 1. User flows

**Teacher — build**
1. Pick a class → "New weekly test" → title + due date.
2. Add questions: prompt, marks (1–3), optional image (upload or pick a site image),
   and a **mark scheme** (the creditworthy points, e.g. for a Hermes source:
   `caduceus`, `winged sandals`, `petasos/winged cap`, `herald's role`). Optionally a
   model answer + marking notes.
3. Publish (status `open`). The mark scheme is **never** sent to students.

**Student — take**
1. Sees open tests for their class → opens one → answers each question (text box;
   image shown above the box where present).
2. On submit-per-answer, the answer goes to the `mark-answer` function, which marks it
   and returns the mark + a one-line "why" → shown immediately. A capped number of
   attempts per question (default 1).
3. Finish → submission marked complete; running total shown.

**Teacher — review & analyse**
- Per test: average % per question (spot the question everyone bombed), completion.
- Per student: every answer, the AI mark + rationale, when they did it; **override**
  any mark inline (final mark becomes teacher-set).

---

## 2. Data model

New, dedicated tables (existing `question_banks`/`tasks` don't fit per-question
free-text marking). Reuses `v2_classes`, `v2_class_members`, and the
`my_v2_students()` SECURITY DEFINER helper from `040_v2_classes_separate.sql`.

> **Key security split:** the **public** part of a question (prompt, marks, image) is
> student-readable; the **mark scheme / model answer** live in a **separate table**
> that students can never read. The Edge Function reads the scheme with the service
> role. This is what stops students from fetching the answers.

```sql
-- migration: 0XX_weekly_tests.sql   (number assigned at implementation time)

create table weekly_tests (
  id            uuid primary key default gen_random_uuid(),
  teacher_id    uuid not null references auth.users(id) on delete cascade,
  class_id      uuid not null references v2_classes(id) on delete cascade,
  title         text not null,
  status        text not null default 'draft'
                  check (status in ('draft','open','closed')),
  due_at        timestamptz,
  -- cost caps (see §6)
  max_attempts_per_question int not null default 1 check (max_attempts_per_question between 1 and 5),
  max_answer_chars          int not null default 1200 check (max_answer_chars between 100 and 4000),
  created_at    timestamptz not null default now()
);

create table weekly_test_questions (
  id          uuid primary key default gen_random_uuid(),
  test_id     uuid not null references weekly_tests(id) on delete cascade,
  position    int  not null,
  prompt      text not null,
  marks       int  not null check (marks between 1 and 10),
  image_path  text,          -- Storage object path OR a site-relative image path; nullable
  mark_with_image boolean not null default false,  -- pass the image to the model too (vision)
  created_at  timestamptz not null default now()
);

-- PRIVATE: never exposed to students. Teacher + service role only.
create table weekly_test_mark_schemes (
  question_id   uuid primary key references weekly_test_questions(id) on delete cascade,
  scheme_points jsonb not null default '[]',  -- [{ "text": "winged sandals", "marks": 1 }, ...]
  model_answer  text,
  marking_notes text,                          -- free instructions to the marker
  updated_at    timestamptz not null default now()
);

create table weekly_test_submissions (
  id            uuid primary key default gen_random_uuid(),
  test_id       uuid not null references weekly_tests(id) on delete cascade,
  student_id    uuid not null references auth.users(id) on delete cascade,
  started_at    timestamptz not null default now(),
  submitted_at  timestamptz,
  total_awarded int,
  total_marks   int,
  unique (test_id, student_id)
);

-- One row per (submission, question). Written ONLY by the Edge Function (service role)
-- + teacher overrides. Students never INSERT/UPDATE here — they POST to mark-answer.
create table weekly_test_answers (
  id            uuid primary key default gen_random_uuid(),
  submission_id uuid not null references weekly_test_submissions(id) on delete cascade,
  question_id   uuid not null references weekly_test_questions(id) on delete cascade,
  answer_text   text not null,
  ai_marks      int,
  ai_max        int,
  ai_matched    jsonb,         -- points the AI credited
  ai_rationale  text,
  final_marks   int,           -- defaults to ai_marks (live release); teacher can override
  marked_by     text not null default 'ai' check (marked_by in ('ai','teacher')),
  attempts      int  not null default 0,   -- enforces the per-question attempt cap (§6)
  updated_at    timestamptz not null default now(),
  unique (submission_id, question_id)
);

-- Usage ledger: one row per model call, with REAL token counts from the API response.
-- Powers the budget cap (§6) and the teacher usage view.
create table weekly_test_marking_usage (
  id            uuid primary key default gen_random_uuid(),
  teacher_id    uuid not null references auth.users(id) on delete cascade,
  test_id       uuid not null references weekly_tests(id) on delete cascade,
  student_id    uuid not null references auth.users(id) on delete cascade,
  question_id   uuid not null references weekly_test_questions(id) on delete cascade,
  model         text not null,
  input_tokens  int  not null,
  output_tokens int  not null,
  cost_micros   bigint not null,   -- estimated cost in micro-pounds, computed from tokens
  created_at    timestamptz not null default now()
);
create index on weekly_test_marking_usage (teacher_id, created_at);

-- Per-teacher budget. The function refuses to call the model once the month's
-- estimated spend (or call count) exceeds the cap.
create table weekly_test_budget (
  teacher_id            uuid primary key references auth.users(id) on delete cascade,
  monthly_cost_cap_micros bigint not null default 5000000,  -- £5/month default
  monthly_call_cap        int    not null default 5000,     -- belt + braces
  updated_at            timestamptz not null default now()
);
```

### 2a. RLS (Row-Level Security)

Pattern copied from existing v2 tables (teacher-owns / `my_v2_students()` / student
self). Verify the exact student-membership helper name at implementation
(`my_v2_students()` exists; confirm a `my_v2_class_ids()`-style helper for the student
side, or query `v2_class_members` via a SECURITY DEFINER function to avoid the RLS
recursion that `039_fix_classes_rls_recursion.sql` addressed).

| Table | Teacher | Student | Service role (Edge Fn) |
|---|---|---|---|
| `weekly_tests` | CRUD where `teacher_id = auth.uid()` | SELECT where `status='open'` and `class_id ∈ my classes` | full |
| `weekly_test_questions` | CRUD via test ownership | SELECT for open tests in my class (**no mark scheme here**) | full |
| `weekly_test_mark_schemes` | CRUD via test ownership | **none** | full |
| `weekly_test_submissions` | SELECT where `student_id ∈ my_v2_students()` | CRUD own (`student_id = auth.uid()`) | full |
| `weekly_test_answers` | SELECT + UPDATE(final_marks, marked_by) where student ∈ `my_v2_students()` | **SELECT own only** (writes go through the function) | full |
| `weekly_test_marking_usage` | SELECT own (`teacher_id = auth.uid()`) | none | full |
| `weekly_test_budget` | CRUD own | none | full |

The decisive point: **students have no write path to `weekly_test_answers` and no read
path to mark schemes.** All marking writes happen in the function under the service
role, so a student can't forge a mark or read the scheme.

---

## 3. Storage (images)

Bucket `weekly-test-images` (public read; authenticated write).
- **Read:** public — exam source images aren't secret, and public read keeps the
  student page simple (`<img src=…>`). (If you'd rather lock it down later, switch to
  signed URLs minted by the function.)
- **Write:** authenticated users only, into a teacher-scoped prefix
  `"{auth.uid()}/…"` so teachers can only write their own folder.
- Builder uploads via `supabase.storage.from('weekly-test-images').upload(...)`, stores
  the returned object path in `weekly_test_questions.image_path`.
- "Reuse a site image" just stores a repo-relative path (e.g.
  `/version2/subjects/classical-civilisation/greek-art/images/hermes.jpg`); the student
  page renders whichever it is.

Storage policy (created at deploy):
```sql
-- read
create policy "wt images public read" on storage.objects
  for select using (bucket_id = 'weekly-test-images');
-- write own folder
create policy "wt images teacher write" on storage.objects
  for insert with check (
    bucket_id = 'weekly-test-images'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
```

---

## 4. Marking Edge Function — `mark-answer`

Deno function (mirrors the existing `supabase/functions/edit-content` pattern: verify
the caller's Supabase JWT, plus a service-role client for privileged work). Holds
`ANTHROPIC_API_KEY` as a secret. **It is the only thing that ever sees a mark scheme or
calls Claude.**

**Request** (from the student page, with their JWT):
`POST /functions/v1/mark-answer  { submission_id, question_id, answer_text }`

**The function, in order:**
1. **Auth:** resolve the user from the JWT. Must be the owner of `submission_id`.
2. **Window:** the submission's test must be `status='open'` and not past `due_at`.
3. **Membership:** the student must be in the test's class.
4. **Answer cap:** reject if `answer_text` longer than `max_answer_chars` (bounds input
   tokens). Trim whitespace.
5. **Attempt cap:** read the answer row; if `attempts >= max_attempts_per_question`,
   return the existing mark with `attempts_left: 0` and **do not** call the model.
6. **Budget cap (§6):** sum this month's `cost_micros` (and call count) for the
   teacher; if over `weekly_test_budget`, return `{ paused: true }` and **do not** call
   the model. Student sees "Marking is paused — your teacher will mark this."
7. **Rate limit:** per-student debounce (≤1 call / 3 s, ≤60/hour) — reject bursts.
8. **Read scheme** (service role): the question's `marks`, `scheme_points`,
   `marking_notes`, `model_answer`, and (if `mark_with_image`) a signed image URL.
9. **Call Claude** (see 4a) with a tight `max_tokens` and structured JSON output.
10. **Write** the answer row (service role): `ai_marks/ai_max/ai_matched/ai_rationale`,
    `final_marks = ai_marks` (live release), `marked_by='ai'`, `attempts = attempts+1`.
    Insert a `weekly_test_marking_usage` row with the **real** token counts from the
    response `usage`.
11. **Return** `{ marks, max, rationale, attempts_left }` (never the scheme).

### 4a. The model call (`claude-sonnet-4-6`)

Raw `fetch` to `https://api.anthropic.com/v1/messages` (Deno), headers
`x-api-key`, `anthropic-version: 2023-06-01`. **Structured output** guarantees the
marks come back as data, not prose:

```ts
const body = {
  model: "claude-sonnet-4-6",
  max_tokens: 512,                  // hard ceiling on output tokens (cost cap)
  system:
    "You are marking a GCSE Classical Civilisation short answer against the teacher's " +
    "mark scheme. Award whole marks only, between 0 and the maximum. Credit a point if " +
    "the student's answer conveys it, allowing synonyms, paraphrase and minor spelling " +
    "slips — do not require exact wording. Never award marks for anything not in the " +
    "scheme. Be consistent and concise.",
  messages: [{
    role: "user",
    content: [
      // optional image block only when mark_with_image is set:
      // { type: "image", source: { type: "url", url: signedImageUrl } },
      { type: "text", text:
        `Question (max ${marks} marks): ${prompt}\n\n` +
        `Mark scheme — creditworthy points:\n${schemeBullets}\n` +
        (markingNotes ? `Notes: ${markingNotes}\n` : "") +
        `\nStudent answer:\n"""${answerText}"""` }
    ]
  }],
  output_config: { format: { type: "json_schema", schema: {
    type: "object",
    additionalProperties: false,
    required: ["marks_awarded","max_marks","matched_points","missing_points","rationale"],
    properties: {
      marks_awarded:  { type: "integer" },
      max_marks:      { type: "integer" },
      matched_points: { type: "array", items: { type: "string" } },
      missing_points: { type: "array", items: { type: "string" } },
      rationale:      { type: "string" }
    }
  }}}
};
```
The first text block of the response is valid JSON; clamp `marks_awarded` to
`0..marks` server-side as a guard. `usage.input_tokens` / `usage.output_tokens` feed
the ledger. (Vision is supported on Sonnet 4.6 if `mark_with_image` is on; default off
to keep it cheap and deterministic.)

---

## 5. Other server actions

- **Start submission:** student inserts a `weekly_test_submissions` row (RLS: own).
- **Finish/submit:** set `submitted_at`; recompute `total_awarded = Σ final_marks`,
  `total_marks = Σ question.marks` (trigger or a small `finalize` call).
- **Teacher override:** `update weekly_test_answers set final_marks=…, marked_by='teacher'`
  (RLS-allowed for the teacher), then recompute the submission total.

---

## 6. Cost controls & abuse prevention  ⟵ load-bearing

Layers, cheapest/strongest first. The first four make total spend **bounded and
predictable**; the last is the hard backstop.

1. **Per-question attempt cap** (`max_attempts_per_question`, default **1**). Total
   model calls per test ≈ `questions × students × attempts` — fully predictable. A
   class of 30 doing 10 questions once = 300 calls.
2. **Answer length cap** (`max_answer_chars`, default 1200 ≈ ~300 tokens) and
   **`max_tokens: 512`** output — bounds the cost of any single call.
3. **Gating** — authenticated, enrolled students only; only while the test is **open**
   and before `due_at`. No anonymous or out-of-window calls.
4. **Per-teacher monthly budget** (`weekly_test_budget`, default **£5/month** and
   5,000 calls). The function sums the `weekly_test_marking_usage` ledger before every
   call and **stops calling the model** once the cap is hit — students fall back to
   "your teacher will mark this", and the teacher sees the cap was reached. Adjustable
   per teacher.
5. **Per-student rate limit** — ≤1 call / 3 s and ≤60 / hour, to kill accidental
   resubmit loops.
6. **Anthropic Console spend limit (backstop you set).** Independently of this app,
   set a **monthly spend limit / budget alert** on your Anthropic workspace. If
   anything ever goes wrong in our code, this is the wall the bill hits. **Strongly
   recommended — belt and braces.**

**Worked cost** (`claude-sonnet-4-6`, $3/$15 per M tokens; ~£ at parity): a marking
call is ~600 input + ~150 output tokens ≈ **£0.002**. 30 students × 10 questions × 1
attempt = 300 calls ≈ **£0.65 per test**. The £5/month cap covers ~7–8 such tests
before pausing; raise it when you need to. Switching to `claude-haiku-4-5` later is a
one-line change (~⅓ the cost) if you want more headroom.

A teacher **usage panel** shows: this month's markings, estimated spend vs cap, and a
per-test breakdown — so there are no surprises.

---

## 7. UIs (all v2 / `classicalia.css`)

- **Builder** — `version2/tracking/weekly-test.html` (teacher). Class picker (your
  `.class-tabs`), a question list with add/edit drawer (modelled on `admin/index.html`
  drawer): prompt, marks, image upload/picker, mark-scheme point list, model answer.
  Publish toggle. A small "estimated cost of one full run" readout.
- **Student** — `version2/tools/quiz/weekly-test.html` (or under `tracking/`). Lists
  open tests; the take-page renders questions (image above the box), submits each
  answer to `mark-answer`, shows mark + rationale + attempts-left inline, then a final
  total.
- **Analytics** — folded into `version2/tracking/teacher.html`: a "Weekly tests" tab
  reusing the student-table + heatmap patterns — average % per question, completion,
  click a student to see answers/marks/AI-rationale/timestamps, inline override, CSV
  export (`exportClassCSV()` pattern), plus the usage/budget panel from §6.

---

## 8. Deployment steps (you run, once)

```bash
supabase db push                                   # creates the tables + RLS + storage policy
supabase functions deploy mark-answer              # deploys the Deno function
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...  # the marking key (server-side only)
# create the public 'weekly-test-images' bucket (dashboard or CLI)
# Anthropic Console: set a monthly spend limit on the workspace  ← cost backstop
```

---

## 9. Phased implementation

1. **Backend foundation** — the migration (tables + RLS + storage policy) and the
   `mark-answer` Edge Function incl. all of §6's caps + the usage ledger. *(You deploy;
   we verify with a tiny manual call.)*
2. **Teacher builder** — create/edit/publish tests, questions, mark schemes, image
   upload.
3. **Student take-page** — answer + live AI marks + attempts/budget handling.
4. **Teacher analytics + override + usage panel.**
5. **Polish** — CSV export, optional `mark_with_image` vision, optional Haiku switch,
   "Do Now"-style class launch.

---

## 10. Open / later
- Vision marking (`mark_with_image`) is wired but off by default — turn on per question
  if you want the model to verify against the actual picture.
- A picker for existing Class-Civ images (so "reuse a site image" is point-and-click).
- Question bank / reuse questions across weeks.
- Tie completion into the existing XP / dashboard if wanted.
