# Classicalia — Product Overhaul & Navigation Redesign

> **Status:** design plan (no app code changed by this document).
> **Purpose:** the single, authoritative plan for turning Classicalia v2 from
> "a good website with lots of add‑ons bolted on" into one coherent product that
> can be shipped as a finished thing.
> **Supersedes / consolidates:** `TRACKING_OVERHAUL_PLAN.md`,
> `TRACKING_REFACTOR_PLAN.md`, `PROGRESS_TRACKING_REDESIGN.md`,
> `RESOURCE_BANK_AND_TIERS_PLAN.md`, `WEEKLY_TEST_PLAN.md`,
> `GRAMMAR_CHAPTERS_PLAN.md`, `DATABASE_MIGRATION_PLAN.md`. Those remain valid as
> *implementation detail* for their own features; this document is the layer
> above them — the product shape they all have to serve.

---

## 0. Working assumptions (redirect any of these)

Three product decisions steer everything below. They are stated as defaults so
the plan is concrete; change any and the relevant section flexes.

1. **Deliverable:** this document — a target design + phased roadmap — *before*
   rebuilding navigation in code.
2. **Navigation model:** for a **signed‑in** user, merge the two worlds into one
   **course‑centric workspace**. The marketing homepage stays as the **front
   door for logged‑out visitors** only.
3. **Positioning:** **free core + optional paid school extras.** All learning and
   personal tracking stays free for everyone; the assessment **bank** and
   **AI weekly‑test marking** are an optional school add‑on, cleanly walled off
   so a free user never bumps into a paywall mid‑task.

---

## 1. Diagnosis — why it feels like "100 menus"

Classicalia v2 is really **two separate products wearing one logo**, plus a set
of features that each grew their own navigation.

### 1.1 Two disconnected worlds

| | "The Site" (Learn) | "The App" (Track & Assess) |
|---|---|---|
| Shell | Top nav bar (`version2/index.html`, subject pages) | Left sidebar app shell (`assets/js/tracking-nav.js`) |
| Nav items | Latin · Greek · Class. Civ. · Tools · About | Progress · To‑do · Bank · Weekly tests · Do Now · Quick mark · Practice |
| Entry | Homepage → subject landing → set text / lesson | Account menu → dashboard |
| Feel | Polished, content‑led | Functional, dense |

The two shells **do not link into each other**. A signed‑in student who is
reading a Latin set text sees the marketing nav — Latin/Greek/About — and has
**no way to reach their own progress, to‑do, or a practice drill** without going
up to the account‑menu dropdown and jumping into the "app". Learning and
tracking are on opposite sides of a wall. *That wall is the core complaint.*

### 1.2 Five overlapping "assessment" surfaces

A student is offered at least five different things that all feel like
"an assessment", with no taxonomy to tell them apart:

| Surface | File | What it really is | Authored where |
|---|---|---|---|
| **Assessment bank** | `tracking/bank.html` | Reusable, pre‑authored Q&A sets | `admin/bank.html` |
| **Weekly test** | `tracking/weekly-test-take.html` | Periodic marked test, due date | `tracking/weekly-test.html` |
| **Practice** | `tracking/practice.html` | AI‑generated drill for one concept | (generated on the fly) |
| **Do Now** | `tracking/do-now.html` + vocab tester | Live, ephemeral classroom vocab race | inline in `do-now.html` |
| **Quick mark** | `tracking/quick-mark.html` | Teacher spot‑marks one answer (not saved) | n/a |

Four separate **authoring** flows; five separate **student** entry points; no
shared vocabulary of "quiz vs homework vs drill". A teacher asking "where do I
make a one‑off class quiz?" has no obvious answer (bank? weekly test?).

### 1.3 Tools reachable three ways, each partial

The same tools appear in **three** navigation contexts, each showing a different
subset:

- Subject landing pages inject a **"Tools" group** (Do Now, vocab tester) at the
  top of the exam catalogue — e.g. `subjects/latin/index.html:57‑71`.
- The **Tools hub** (`tools/index.html`) lists a *different* subset — and omits
  the grammar gym, Gold Rush, and the Greek quizzes that exist on disk.
- The **tracking sidebar** has its own "Tools" link.

Integration is inconsistent: the vocab tester is deeply wired into Do Now and
the `vocab_sessions` leaderboard, while the grammar gym, myth quiz, Cursus
Honorum and Latin Quest are fully standalone, and **Gold Rush is invisible** —
it only exists as a projection mode inside Do Now.

### 1.4 Three different navigation paradigms for the same job

The subject areas don't even agree with each other (mapped in detail below):

- **Latin & Greek:** one long flat landing page (400+ lines) with **50+ dead
  `href="#"` "Coming soon" links**, no cross‑text navigation.
- **Classical Civilisation:** a tidy hierarchy — subject → course → lesson — with
  an accordion + search. Clearly the better pattern.
- **`course-map.js`:** a *third*, separate registry that decides what counts as
  "shipped" for the tracking dashboard — unrelated to either nav.

Broken footers (`href="#"`), a permanently dead **About** link, and set‑text
"module tabs" that don't link to their siblings round it out.

### 1.5 The latent spine we already have

The cure is already half‑built: **`tracked_courses`** (`profile.html`,
migration `044`). A student ticks the courses they study — *no teacher required*
— and the dashboard is built from that. This is the natural organising spine for
the whole product. Today it's buried in a profile card and drives one page.

### 1.6 The meta‑signal

There are **eight** overlapping `*_PLAN.md` files at the repo root and a large
**un‑migrated v1 pile** (`latin/` 165 files, `classical-civ/` 267, `greek/`,
`dashboard/`, `tools/`, plus `index2.html…index5.html`, `index-old/new/backup`,
`old.html`). The documentation sprawl and the file sprawl mirror the product
sprawl. Consolidating the product means consolidating these too.

---

## 2. The product we actually want

**One product, organised around the student's courses, with one persistent
navigation that adapts to who is looking.**

### 2.1 One mental model: *Course → four verbs*

Every course a student takes exposes exactly four things. This is the entire
information architecture a student needs to hold in their head:

```
  A COURSE  (e.g. "GCSE Latin")
    ├── Learn      the content: lessons, set texts, revision, reading
    ├── Practise   self‑serve drills: vocab, grammar, AI practice, games
    ├── Assess     things that get marked: tests, bank assessments, Do Now
    └── Progress   how I'm doing: mastery, scores, what's due, streaks
```

Four verbs. Not fifteen sidebar links. Whatever new feature gets built later, it
must slot under one of these four — that rule alone stops the sprawl returning.

### 2.2 One mental model for teachers: *Class → Teach*

Teachers get the mirror of the same spine, collapsed into one surface:

```
  A CLASS
    ├── Roster & progress   who's in it, how they're doing (the quadrant)
    ├── Assign              one "create" flow → test | bank | Do Now | reading
    └── Mark                marking queue (weekly tests, bank, quick‑mark)
```

The five assessment authoring flows collapse into **one "Assign" action** that
asks *what kind* (see §4).

### 2.3 One navigation shell for the whole product

Retire the site‑vs‑app split. There is **one shell** with **one nav**, which
renders differently by state — but it is the same component, the same place, on
every page:

- **Logged out:** the marketing homepage is the front door. Nav = `Latin ·
  Greek · Class. Civ. · Tools · About · Sign in`. Subject pages are browsable by
  anyone (SEO + "try before you sign up").
- **Logged in (student):** nav becomes the **workspace**. Left rail =
  `Home (My courses) · Learn · Practise · Assess · Progress · Friends`, with the
  active course as context. Browsing a Latin set text now happens **inside** the
  workspace, so Progress / To‑do / Practise are always one click away. The wall
  is gone.
- **Logged in (teacher):** rail = `Classes · Assign · Mark · Bank · Tools`,
  plus Admin for admins.

Same logo, same shell, same position — the *contents* adapt. `tracking-nav.js`
and the marketing nav merge into **one** `app-shell.js`.

---

## 3. Target information architecture (the site map)

```
LOGGED OUT ─ front door
  /                         marketing homepage (keep; it's good)
  /subjects/{subject}/      browsable catalogue (unified hierarchy — see §5)
  /tools/                   tools hub (unified — see §6)
  /about                    real About page (kill the dead href="#")
  /auth/*                   sign in / register

LOGGED IN ─ workspace (student)          [one shell: app-shell.js]
  /home                     "My courses" — the new default landing.
                            One card per tracked course, each showing:
                            next due item · % mastery · continue‑where‑you‑left‑off.
                            + "Add a course" (the tracked_courses picker, promoted
                            out of Profile) and "Join a class with a code".

  /course/{id}/learn        course hub → the content (set texts, lessons, reading)
  /course/{id}/practise     drills for this course (vocab, grammar, AI, games)
  /course/{id}/assess       tests + bank + Do Now for this course
  /course/{id}/progress     mastery, scores, activity, what's due (this course)

  /progress                 all‑courses roll‑up (today's global dashboard)
  /todo                     unified "what's due" across courses (keep; it's good)
  /friends, /profile        social + account

LOGGED IN ─ workspace (teacher)
  /classes                  class list + roster + the interventions quadrant
  /assign                   ONE create flow → test | bank | Do Now | reading
  /mark                     unified marking queue (weekly + bank + quick‑mark)
  /bank                     browse/assign bank assessments
  /tools                    classroom tools (visualiser, Do Now console)

ADMIN
  /admin                    accounts, bank authoring, nuggets, plans (unchanged
                            location; reached only via the account menu)
```

Key moves in this map:

- **`/home` = "My courses"** is the new signed‑in landing, replacing the jump to
  a dense dashboard. It is the `tracked_courses` spine made visible.
- **Content lives *under* a course** (`/course/{id}/learn`), so a student in a
  set text is inside their workspace, not stranded on the marketing site.
- **`/progress` and `/todo` stay** as the cross‑course roll‑ups — they're the
  parts of the current app that already work well.
- **URLs are illustrative**, not a routing mandate — the static‑site reality
  (GitHub Pages, per‑page HTML) means these are *page groupings*, not a SPA.

---

## 4. Untangling the five assessment surfaces

Collapse five confusing things into **one concept with three student‑facing
types**, plus one teacher utility. Everything a student can be given to do is an
**Assessment** with a `mode`:

| Mode | Was | For the student | Marked how | Persisted |
|---|---|---|---|---|
| **Drill** | Do Now, vocab tester | Fast recall reps; optional live/competitive | Auto | Mastery only |
| **Practice** | Practice (AI) | Unlimited self‑serve targeted practice | AI, formative | Light log |
| **Test** | Weekly test **+** Bank | A marked piece of work with a due date | AI + teacher override | Full record |

- **"Weekly test" and "Bank" are the same thing** to a student — a marked test.
  The only real difference is provenance (teacher‑authored vs pulled from the
  catalogue). Merge them into one **Test** surface for students; keep "author
  your own vs assign from bank" as a choice on the *teacher* side only.
- **Do Now becomes the live mode of a Drill**, and **Gold Rush becomes a display
  option of Do Now** — not separate menu items.
- **Quick mark is not a student surface at all** — it's a teacher tool. It moves
  into `/mark` as "mark a one‑off answer" and leaves the student vocabulary
  entirely.

**Teacher side — one "Assign" flow.** Replace four authoring entry points with a
single `/assign` action:

```
  Assign  ▸  What kind?
             ├─ Test        → author questions OR pick from the bank → due date
             ├─ Do Now      → pick class + topic range → go live
             └─ Reading     → pick a lesson/set text → due date
```

Result: a student sees **Learn / Practise / Assess** (three verbs, clear
meanings); a teacher sees **one create button**. The word "assessment" finally
means one thing.

---

## 5. Unifying the subject/content navigation

Adopt the **Classical Civilisation hierarchy everywhere** — it already works:

```
  Subject  →  Course (exam component)  →  Unit/Topic  →  Lesson / Set‑text section
```

Concrete changes:

1. **Latin & Greek landing pages** move from one flat 400‑line page to the
   subject → course → lesson hierarchy, with the same **accordion + search**
   Class. Civ. uses. A student lands on "GCSE Latin", not on the entire OCR spec
   for two exam cycles at once.
2. **Honest "coming soon".** Don't render 50 dead `href="#"` rows. Show only what
   exists; put forthcoming content behind a single, collapsed "Planned" section
   (or a "notify me" affordance), driven by the same **`course-map.js` shipped
   flag** that already governs the dashboard — one source of truth for "is this
   real yet", shared by content nav *and* tracking.
3. **Cross‑navigation that works.** Set‑text "module tabs" and course tabs link
   to their live siblings (kill the sibling `href="#"`s). Fix the footer once, in
   the shared shell, so it's correct on every page.
4. **A real `/about` page** — retire the sitewide dead About link.
5. **Reuse the good engine.** `classroom.js` (parallel text, hover glossing,
   presentation mode) is genuinely good; make it the standard reader for *all*
   set texts and, where useful, revision lessons — not just the two live Latin
   texts.

---

## 6. Unifying tools

One tools model, surfaced in exactly the right places:

- **One catalogue** (`/tools/`) that lists *everything* real — including the
  grammar gym, myth quiz, and games currently missing from it. Nothing that
  exists on disk is unreachable.
- **Tools appear contextually** under each course's **Practise** verb, filtered
  to that course (Latin course → Latin vocab tester, noun/verb endings, Latin
  Quest). No more "Tools" group awkwardly injected into an exam catalogue.
- **Collapse the sub‑variants:** Gold Rush = a Do Now display mode, not a menu
  item; noun/verb‑endings sit *inside* the grammar gym.
- **Classroom vs study tools are labelled as such** — the visualiser and the
  live Do Now console are teacher/classroom tools; vocab/grammar drills and games
  are student study tools. Same hub, two clear shelves.

---

## 7. Positioning — free core + optional paid extras

Reconcile the homepage's "free forever, no paywalls" with the
`RESOURCE_BANK_AND_TIERS_PLAN.md` work:

- **Always free, for everyone:** all learning content, all study tools, personal
  progress tracking, self‑serve courses via `tracked_courses`, Practice drills,
  student‑taken tests.
- **Optional paid (schools):** the curated **assessment bank** and **AI
  weekly‑test marking at scale** — i.e. the parts with a real per‑use cost
  (LLM marking) or curation cost. These live behind the teacher's `/assign` and
  `/bank`, entitlement‑gated per the existing `subscriptions` schema (migration
  `063`).
- **The rule:** a *free, logged‑in student never hits a wall mid‑task.* Paywalls
  only ever appear on **teacher** provisioning actions, never on a student doing
  their work. This keeps the "free for all" promise literally true for the
  people the promise is aimed at.

---

## 8. Roadmap to ship

Sequenced so each phase is independently shippable and de‑risks the next. Phases
1–3 remove the "feels separate" problem; 4–6 finish and polish for launch.

### Phase 1 — One shell (the load‑bearing change)
- Merge `tracking-nav.js` + the marketing nav into one `app-shell.js` that
  renders logged‑out / student / teacher variants.
- Put it on **every** page (subjects, tools, tracking) so navigation is
  identical everywhere and the site‑vs‑app wall disappears.
- Add the persistent "active course" context to the student rail.
- *Ship criterion:* from any set‑text page, a signed‑in student can reach
  Progress / To‑do / Practise in one click.

### Phase 2 — `/home` = "My courses"
- Promote the `tracked_courses` picker out of Profile into a first‑class **Home**
  (course cards: next due · mastery · continue). Add "Join a class with a code".
- Make Home the post‑login landing.
- *Ship criterion:* login lands on courses, not a dense dashboard; adding a
  course is one click from Home.

### Phase 3 — Assessment taxonomy (§4)
- Introduce the **Drill / Practice / Test** vocabulary in the UI.
- Merge student "weekly test" + "bank" into one **Assess** surface; fold Do Now
  into Drill; move Quick mark into the teacher `/mark`.
- Build the single teacher **`/assign`** flow.
- *Ship criterion:* a student sees three assessment types with clear meanings; a
  teacher creates any assessment from one button.

### Phase 4 — Content hierarchy (§5)
- Migrate Latin & Greek landings to subject→course→lesson + accordion/search.
- Wire nav to the `course-map.js` shipped flag; hide/collapse unbuilt content;
  fix footers, module tabs, and add a real `/about`.
- Standardise on `classroom.js` as the set‑text reader.

### Phase 5 — Tools consolidation (§6)
- One complete `/tools` catalogue; contextual **Practise** per course; collapse
  Gold Rush / endings sub‑tools.

### Phase 6 — Data & cleanup (folds in the existing tracking plans)
- Execute the `student_id` standardisation (`DATABASE_MIGRATION_PLAN.md`) and the
  tracker consolidation (`TRACKING_OVERHAUL_PLAN.md`: merge
  `spaced-repetition.js`→`task-tracker.js`, single idle threshold, analytics in
  one place).
- Entitlement gating for the paid extras (migration `063`); Stripe if pursuing.
- **Repo hygiene:** delete `index2–5.html`, `index-old/new/backup.html`, and
  retire/park the v1 piles (`latin/`, `greek/`, `classical-civ/`, `dashboard/`,
  `tools/`) behind `old.html` or migrate their live content into `version2`.
- **Docs:** archive the eight superseded `*_PLAN.md` files under a `docs/archive/`
  folder, leaving this document + the feature‑level specs they still inform.

---

## 9. Definition of "done / shippable"

The product is finished when:

1. There is **one navigation shell** on every page; no page feels like a
   different site.
2. A signed‑in student's **default landing is their courses**, and from any
   learning page their progress and next task are one click away.
3. Every feature answers to **one of the four verbs** (Learn / Practise / Assess
   / Progress); there is no orphan menu item.
4. "Assessment" **means one thing**, with three clearly‑labelled modes.
5. **Nothing real is unreachable** and **nothing fake is linked** — no dead
   `href="#"`, no missing‑from‑hub tools.
6. Free users never meet a paywall; paid extras are teacher‑only and clearly
   separated.
7. The repo contains **one homepage**, **one set of plans**, and no stranded v1
   duplicates.

---

## 10. Open questions for you

- **Deliverable/scope:** happy for this to stay a plan first, or want me to start
  Phase 1 (the one‑shell merge) on this branch now?
- **Nav model:** confirm the unified course‑centric workspace (vs. keeping two
  consistent‑but‑separate zones).
- **Free vs paid:** confirm free‑core + paid‑school‑extras (vs. everything free,
  or paid‑central).
- **v1 content:** migrate the live bits of `latin/` `greek/` `classical-civ/`
  into v2, or formally freeze them behind `old.html` and move on?
