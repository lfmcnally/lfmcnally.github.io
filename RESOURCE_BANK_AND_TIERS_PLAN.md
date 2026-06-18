# Resource bank & paid tiers — design plan

Status: **design (pre-implementation)**. This is the agreed shape of the feature
that turns the weekly-test marking engine into a product with a **resource bank
of assessments** and **two paid tiers**. Nothing here is built yet. It builds
directly on the already-shipped weekly-test system (`WEEKLY_TEST_PLAN.md`,
migrations `058`–`060`, the `mark-test` / `mark-answer` Edge Functions).

## What it is

A **catalogue** of ready-made assessments, organised by **course → topic**, that:

- a **teacher** can browse and **assign to a class** (with a due date), on top of
  still authoring their own; and
- a **personal/student-tier** learner can **take on their own**, with no teacher
  and no class, choosing assessments by topic and getting the same live AI
  feedback.

Access is gated by a **subscription**: a **school plan** (an organisation with a
shared weekly credit allowance, used by its teachers) and a **personal plan** (an
individual's own weekly allowance). **One credit = one whole assessment taken**
(a finished submission), regardless of how many questions it has.

### Decisions captured
- **Credit unit:** **one whole assessment** = one credit, consumed when a
  submission is finalised (not per question, not per token). Simple to advertise
  ("your plan includes N assessments/week") and simple to meter.
- **Self-serve:** **yes** — assessments can exist independent of any class; a
  personal-tier student can take one solo, marked against **their own** credits.
  This is the biggest data-model consequence (see §2).
- **Authorship:** the bank is **curated/official (you) at launch** — one trusted
  library. Teacher-published assessments are a later addition (§9 Open/later), so
  there is **no moderation surface** to build now.
- **Marking engine is reused as-is.** The bank is a new *authoring/catalogue*
  layer in front of the existing `mark-test` pipeline; the model call, structured
  output, mark-style branching and token-cost ledger are unchanged.

### What you deploy vs what I build
I write & commit: the SQL migrations (catalogue + entitlement + submission
changes), the changes to `mark-test`, and the new UIs (bank browser, authoring
tool, self-serve take-page). **You** run (once per phase): `supabase db push`,
`supabase functions deploy mark-test`, and — for billing (last phase only) — set
up the Stripe product/prices and `supabase secrets set STRIPE_SECRET_KEY=… STRIPE_WEBHOOK_SECRET=…`.
I can't deploy, set secrets, or live-test the Supabase + Stripe path from here.

---

## 1. User flows

**You — author the bank** (curated)
1. Open the authoring tool → pick a **course** and **topic** (or add one).
2. Create an assessment: title, then questions (prompt, marks, optional image,
   mark-style `points`/`translation`) and a **mark scheme** — exactly the fields
   the marker already consumes.
3. **Publish** it into the bank. (Draft assessments are invisible to everyone but
   you.)

**Teacher — assign from the bank**
1. Browse the bank, filtered to their subject (from the class `type`).
2. Pick an assessment → **"Assign to class"** → choose class + due date.
3. Students in that class see it in their weekly-test list (today's take-page),
   marked live. Marking is billed to the **school's** credits.

**Student (personal tier) — self-serve**
1. Browse the bank by course/topic for their subject.
2. **Start** an assessment solo → answer → submit → get marks + per-question
   feedback + a printable summary. Marking is billed to **their own** credits.

**Anyone — the result**
- The take-page shows the total, per-question marks, and the AI's one-line
  feedback, then offers **"Download summary (PDF)"** (§7).

---

## 2. Data model

Three layers. The **catalogue** is new. The **submission** layer is the existing
`weekly_test_*` runtime, lightly extended so a submission can be sourced from a
class assignment *or* a bank assessment taken solo. The **entitlement** layer
(§4) is new.

> **Why reuse `weekly_test_submissions`/`_answers`/`_marking_usage` rather than
> fork them:** the entire marking pipeline — `mark-test`, the structured-output
> call, the `points`/`translation` branch, the token-cost ledger — already reads
> and writes those tables. Pointing a submission at a bank assessment instead of a
> teacher's `weekly_tests` row reuses 100% of that, at the cost of one resolver
> branch in the function (§5). Cloning a fresh `weekly_tests` row per self-serve
> student was the alternative and is rejected: it duplicates content, drifts from
> the canonical scheme, and pollutes teacher analytics.

### 2a. Catalogue (new) — the bank

```sql
-- migration: 0XX_resource_bank.sql   (number assigned at implementation time)

-- Course → topic taxonomy. Seeded from the site's existing subject structure
-- (version2/subjects/...). 'subject' mirrors v2_classes.type so the bank can be
-- filtered to a class's subject; exam_board is display-only for now.
create table bank_courses (
  id          uuid primary key default gen_random_uuid(),
  subject     text not null,            -- 'latin' | 'greek' | 'classical-civilisation'
  exam_board  text,                     -- e.g. 'OCR J199'  (display)
  title       text not null,            -- e.g. 'GCSE Myth & Religion'
  slug        text not null unique,
  position    int  not null default 0
);

create table bank_topics (
  id          uuid primary key default gen_random_uuid(),
  course_id   uuid not null references bank_courses(id) on delete cascade,
  title       text not null,            -- e.g. 'Death and burial'
  slug        text not null,
  position    int  not null default 0,
  unique (course_id, slug)
);

-- A bank assessment is the canonical, class-agnostic version of a weekly test.
-- Same shape of caps as weekly_tests so an assignment/self-serve run inherits
-- sensible defaults.
create table bank_assessments (
  id            uuid primary key default gen_random_uuid(),
  course_id     uuid not null references bank_courses(id) on delete restrict,
  topic_id      uuid references bank_topics(id) on delete set null,
  title         text not null,
  status        text not null default 'draft'
                  check (status in ('draft','published','archived')),
  origin        text not null default 'official'
                  check (origin in ('official','teacher')),   -- 'teacher' reserved for later
  created_by    uuid not null references users(id) on delete cascade,
  max_attempts_per_question int not null default 1 check (max_attempts_per_question between 1 and 5),
  max_answer_chars          int not null default 1200 check (max_answer_chars between 100 and 4000),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index on bank_assessments (course_id, topic_id, status);

-- Mirrors weekly_test_questions (so the marker reads identical fields).
create table bank_assessment_questions (
  id           uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references bank_assessments(id) on delete cascade,
  position     int  not null,
  prompt       text not null,
  marks        int  not null check (marks between 1 and 10),
  image_path   text,
  mark_style   text not null default 'points' check (mark_style in ('points','translation')),
  created_at   timestamptz not null default now()
);

-- PRIVATE: never exposed to students. Author + service role only — same rule as
-- weekly_test_mark_schemes.
create table bank_assessment_mark_schemes (
  question_id   uuid primary key references bank_assessment_questions(id) on delete cascade,
  scheme_points jsonb not null default '[]',   -- [{ "text": "...", "marks": 1 }, ...]
  model_answer  text,
  marking_notes text,
  updated_at    timestamptz not null default now()
);
```

### 2b. Assignment (new) — bank assessment → class

`v2_assignments` (migration 053) is vocab-homework-specific (scope = chapter
range / topic, target = % secure), so the bank needs its own small assignment
table. Same RLS spirit (teacher-owns-the-class).

```sql
create table bank_class_assignments (
  id            uuid primary key default gen_random_uuid(),
  class_id      uuid not null references v2_classes(id) on delete cascade,
  assessment_id uuid not null references bank_assessments(id) on delete cascade,
  teacher_id    uuid not null references users(id) on delete cascade,
  status        text not null default 'open' check (status in ('open','closed')),
  due_at        timestamptz,
  created_at    timestamptz not null default now(),
  unique (class_id, assessment_id)
);
create index on bank_class_assignments (class_id, status);
```

### 2c. Submission layer (extend existing)

```sql
-- migration: 0XX_bank_submissions.sql

-- A submission now names ONE source. Legacy weekly tests keep working (test_id);
-- new runs point at a class assignment or, for self-serve, the bank assessment
-- directly. Exactly one of the three id columns is set.
alter table weekly_test_submissions
  alter column test_id drop not null,
  add column source_kind   text not null default 'legacy_test'
       check (source_kind in ('legacy_test','assignment','self_serve')),
  add column assignment_id uuid references bank_class_assignments(id) on delete cascade,
  add column bank_assessment_id uuid references bank_assessments(id) on delete cascade;

-- Guard: the source_kind must match which id is populated.
alter table weekly_test_submissions add constraint wt_sub_source_ck check (
  (source_kind = 'legacy_test' and test_id is not null and assignment_id is null and bank_assessment_id is null) or
  (source_kind = 'assignment'  and assignment_id is not null and test_id is null) or
  (source_kind = 'self_serve'  and bank_assessment_id is not null and test_id is null and assignment_id is null)
);

-- weekly_test_answers.question_id can now reference EITHER weekly_test_questions
-- (legacy) or bank_assessment_questions. Two FKs can't both bind one column, so
-- drop the hard FK and tag the source; the function validates membership.
alter table weekly_test_answers
  drop constraint if exists weekly_test_answers_question_id_fkey,
  add column question_source text not null default 'weekly_test'
       check (question_source in ('weekly_test','bank'));
```

`weekly_test_marking_usage` is unchanged in shape — it keeps logging real token
cost per call as the **COGS** ledger (distinct from customer-facing credits, §4).

### 2d. RLS

Same patterns as the v2 tables (`my_v2_class_ids()`, `my_v2_students()`, the
`can_set_weekly_tests()` allowlist generalised to entitlement in §4).

| Table | Author / teacher | Student | Service role |
|---|---|---|---|
| `bank_courses`, `bank_topics` | author CRUD; everyone SELECT | SELECT all | full |
| `bank_assessments` | author CRUD; teacher SELECT `published` | SELECT `published` | full |
| `bank_assessment_questions` | author CRUD via assessment; teacher/student SELECT for `published` (**no scheme here**) | SELECT for `published` | full |
| `bank_assessment_mark_schemes` | author CRUD only | **none** | full |
| `bank_class_assignments` | teacher CRUD where `class_id` is theirs | SELECT where `class_id ∈ my_v2_class_ids()` | full |
| `weekly_test_submissions` | teacher SELECT where student ∈ `my_v2_students()` | CRUD own (`student_id = auth.uid()`) | full |

The decisive points are unchanged from the weekly-test design: **students never
read a mark scheme and never write `weekly_test_answers`** — all marking writes
happen in `mark-test` under the service role.

---

## 3. The course → topic taxonomy

The site already encodes a deep taxonomy under `version2/subjects/...` (e.g.
`classical-civilisation/war-and-warfare/7-1-the-fine-death`). The migration seeds
`bank_courses` / `bank_topics` from that structure so the authoring tool starts
populated, and the bank browser groups assessments the same way a student already
sees the subject site. `subject` on a course mirrors `v2_classes.type`, so the
teacher's bank view auto-filters to the class's subject and the marker derives the
same "Latin / Greek / Classical Civilisation" voice it does today.

---

## 4. Entitlement & credits (the paid tiers)

The existing system already gates test *creation* with an allowlist
(`users.can_set_weekly_tests` + `can_set_weekly_tests()`, migration 059) and meters
*real token cost* (`weekly_test_marking_usage` + `weekly_test_budget`). The paid
tiers **generalise the allowlist into subscriptions** and add a **customer-facing
credit counter** on top of the existing cost ledger.

> **Two separate meters, on purpose.** *Credits* (one per assessment) are what the
> customer buys and sees. *`cost_micros`* (real tokens) is what **you** watch to
> protect margin. Keeping both means a plan can be priced in round "assessments"
> while you still see true spend per school.

```sql
-- migration: 0XX_subscriptions.sql

-- A school. Its teachers draw from one shared allowance.
create table organisations (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  created_at timestamptz not null default now()
);
create table org_members (
  org_id  uuid not null references organisations(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  role    text not null default 'teacher' check (role in ('owner','teacher')),
  primary key (org_id, user_id)
);

-- One active subscription per account (an org OR a single user). credits_per_period
-- + period define the allowance; status comes from Stripe.
create table subscriptions (
  id                     uuid primary key default gen_random_uuid(),
  account_kind           text not null check (account_kind in ('org','user')),
  org_id                 uuid references organisations(id) on delete cascade,
  user_id                uuid references users(id) on delete cascade,
  tier                   text not null,                       -- 'school' | 'personal'
  status                 text not null default 'inactive'
                           check (status in ('active','past_due','canceled','inactive')),
  credits_per_period     int  not null default 0,
  period                 text not null default 'week' check (period in ('week','month')),
  current_period_start   timestamptz,
  stripe_customer_id     text,
  stripe_subscription_id text,
  updated_at             timestamptz not null default now(),
  check ((account_kind = 'org'  and org_id  is not null and user_id is null)
      or (account_kind = 'user' and user_id is not null and org_id  is null))
);

-- Append-only. One row per assessment consumed; balance = credits_per_period
-- (this period) − Σ debits this period. Mirrors the weekly_test_marking_usage idea.
create table credit_ledger (
  id            uuid primary key default gen_random_uuid(),
  account_kind  text not null check (account_kind in ('org','user')),
  account_id    uuid not null,                  -- org_id or user_id
  submission_id uuid references weekly_test_submissions(id) on delete set null,
  delta         int  not null,                  -- -1 per assessment taken; +N for grants/adjustments
  reason        text not null,                  -- 'assessment','grant','refund','admin'
  created_at    timestamptz not null default now()
);
create index on credit_ledger (account_kind, account_id, created_at);
```

**Resolving "who pays" for a submission:**
- `assignment` → the class's teacher → their `org_members.org_id` → the org's
  subscription (school credits).
- `self_serve` → the student's own `subscriptions` row (personal credits).

**Credit check & debit (once per submission, at submit):** because one credit =
one whole assessment, the check lives in `mark-test` (which already marks a whole
submission in one invocation). Before marking: resolve the account, require
`status='active'`, and require `Σ credits this period > Σ debits this period`; if
not, return `{ paused: true }` (the take-page already handles this) and don't
call the model. After a successful mark, insert one `credit_ledger` row
(`delta = -1`). The per-token `weekly_test_marking_usage` row is still written for
COGS, and the old per-teacher `weekly_test_budget` cap stays as a backstop.

---

## 5. `mark-test` changes (the only function touched)

Today `mark-test` reads the submission's `weekly_tests` row + questions + schemes
and marks each answer. The changes are additive:

1. **Resolve source** from `source_kind`: for `legacy_test` read `weekly_tests` /
   `weekly_test_questions` / `weekly_test_mark_schemes` (unchanged); for
   `assignment` / `self_serve` read `bank_assessments` / `bank_assessment_questions`
   / `bank_assessment_mark_schemes`. The fields are identical, so the marking body
   below the resolver is untouched.
2. **Subject voice:** `assignment` derives subject from the class `type` as now;
   `self_serve` derives it from `bank_courses.subject`.
3. **Entitlement + credit gate (§4)** before the first model call; **debit one
   credit** after success.
4. **Write answers** with `question_source` set appropriately.

`mark-answer` (the per-answer live path) is left for class flows; self-serve uses
the batch `mark-test` so the single credit maps cleanly to the single submission.

---

## 6. Cost & abuse controls

Everything from the weekly-test design still applies (attempt cap, answer-length
cap, `max_tokens`, per-student rate limit, the Anthropic Console spend backstop).
Layered on top:

- **Credits are a hard ceiling on volume** — an account can't trigger more
  assessments than it's bought this period.
- **`cost_micros` per account** lets you see if any single school is unusually
  expensive (e.g. very long answers) even within its credit allowance, and adjust
  pricing or caps.
- **Self-serve gating:** a self-serve submission requires an `active` personal
  subscription, so anonymous or lapsed users can't spend model calls.

---

## 7. UIs (all v2 / `classicalia.css`)

- **Authoring tool** — `version2/admin/bank.html` (you). Course/topic picker, an
  assessment list, and a question drawer modelled on the existing
  `weekly-test.html` builder (prompt, marks, image, mark-style, scheme points,
  model answer). Publish toggle. **AI-assisted draft** button (see §9) to speed
  bulk authoring.
- **Bank browser** — `version2/tracking/bank.html`. Course → topic tree filtered
  to subject; teacher sees **"Assign to class"**, personal student sees **"Take
  now"**. Reuses the card/`.class-tabs` patterns.
- **Take-page** — extend `version2/tracking/weekly-test-take.html` to also list
  self-serve/bank items and start a `self_serve` / `assignment` submission. The
  marking, report and feedback rendering already exist.
- **PDF summary** — a **"Download summary (PDF)"** button on the report. Simplest
  build: a print-stylesheet + `window.print()` on a clean report layout (no new
  backend, works offline). The report already has every field (title, per-question
  marks, answers, AI feedback, total) — this is layout only.

---

## 8. Phased implementation

Ordered so **content can be produced as early as possible** and **billing is
last** (it gates nothing until there's something worth paying for):

1. **Catalogue schema + taxonomy** (§2a–2d, §3) — tables, RLS, seed. *The
   foundation everything else is authored against; get it right once.*
2. **Authoring tool** (§7) incl. the AI-assisted draft button — because **you**
   author most of the bank, its speed determines whether there's enough content
   to justify charging.
3. **Self-serve + bank browser + PDF** (§2c, §5 resolver, §7) — students can take
   bank assessments solo and print a summary. *No billing yet — gate self-serve
   behind the `can_set_weekly_tests`-style allowlist during testing.*
4. **Bulk content** — author the assessments per course against the now-stable
   schema and fast tool.
5. **Billing & entitlements** (§4) — `organisations`/`subscriptions`/`credit_ledger`,
   the `mark-test` credit gate, Stripe Checkout + webhook → upsert `subscriptions`.
   Flip the gate from allowlist to subscription.

---

## 9. Open / later
- **Teacher-published assessments** (`origin='teacher'`) with visibility +
  light moderation — turns the bank from curated to community.
- **AI-assisted authoring** — a "draft questions + scheme for this topic" call
  (you edit before publishing) to multiply content throughput. Wired in phase 2.
- **Clone-to-edit** — let a teacher fork a bank assessment into an editable copy
  (vs today's reference-only assign).
- **Canonical-vs-clone drift** — because assignments reference the canonical bank
  assessment, fixing a scheme fixes it everywhere; if per-class edits are wanted,
  introduce clone-to-edit above with a `source_assessment_id` + version stamp.
- **Annual/seat pricing**, per-teacher sub-allowances within a school, and a
  teacher usage panel showing credits used vs the plan.
- **Tie self-serve completion into the existing XP / dashboard.**
