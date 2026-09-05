# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Classicalia** (classicalia.co.uk) is a static educational site for Latin, Greek, and
Classical Civilisation, served from GitHub Pages out of `lfmcnally/lfmcnally.github.io`.
It is paired with a **Supabase** backend (Postgres + Auth + Storage + Edge Functions) that
provides accounts, classes, progress tracking, vocabulary mastery, and AI-marked tests.

There is **no site-wide build step or bundler** — the pages are hand-written HTML/CSS/vanilla
JS loaded directly by the browser, plus the Supabase JS client from a CDN. Deployment is
"git push to the default branch → GitHub Pages redeploys (~1 min)". `.nojekyll` disables
Jekyll processing; `CNAME` pins the custom domain.

The only sub-project with its own toolchain is `lesson-builder/` (see below).

## The v1 → v2 split (read this first)

The site is mid-migration from a legacy v1 to a redesigned **v2**, and both still ship.

- **`/version2/`** is the live site. The root `index.html` immediately redirects to
  `/version2/`. **New work belongs in `version2/` unless explicitly told otherwise.**
- The repo root is littered with legacy v1 pages and dead variants — `index2.html`,
  `index3.html`, `index-old.html`, `index-backup.html`, `old.html`, `why.html`,
  `symbols.html`, `soundboard.html`, etc. Treat these as legacy; do not assume changes
  there affect the live site.
- Top-level subject directories (`latin/`, `greek/`, `classics/`, `classical-civ/`,
  `english/`, `games/`, `whiteboard/`, `dashboard/`) and `shared/` are the **v1** codebase.
  `version2/` has its own parallel `assets/`, `tools/`, `subjects/`, and `tracking/`.

When asked to change something, confirm whether it lives in v1 or v2 by checking which
page is actually reachable from `/version2/` rather than editing a similarly-named legacy file.

## Layout (v2)

```
version2/
  index.html              # live home page
  profile.html            # account / course picker
  friends.html
  admin/index.html        # admin panel (gated by is_admin())
  assets/
    css/                  # classicalia.css, revision.css
    js/                   # shared v2 modules (see below)
    audio/               # lofi tracks + tracks.json
  subjects/               # revision content, one HTML file per topic
    latin/  greek/  classical-civilisation/<topic>/<sub-topic>/revision.html
  tools/                  # interactive learning tools
    vocab/   grammar/   quiz/   game/   visualiser.html
  tracking/               # dashboard.html, teacher.html, do-now.html,
                          # weekly-test.html, weekly-test-take.html
```

### Key v2 JS modules (`version2/assets/js/`)

- **`supabase-client.js`** — instantiates the Supabase client and assigns it to both
  `window.supabaseClient` and `window.supabase` (it *replaces* the CDN module reference).
  Must load **after** the supabase-js CDN script and **before** anything that calls `supabase.*`.
- **`account-menu.js`** — drop-in nav account menu. Add `<div data-account-menu></div>`;
  it auto-mounts (sign-in CTA for anon users, avatar dropdown for signed-in).
- **`course-map.js`** — single source of truth for v2 course types. Maps a
  `v2_classes.type` to its label, `vocabList` key, and dashboard `bodyId`. Update this when
  adding a course/subject.
- **`bkt-store.js`** — Bayesian Knowledge Tracing persistence for the vocab tester. Works
  signed-in (writes `vocab_bkt`, mirrors to localStorage) or anonymous (localStorage only).
- **`page-editor.js`** + **`edit-content` Edge Function** — on-page content editing for
  admins. The browser button is convenience only; the **real** auth boundary is the Edge
  Function re-checking `is_admin()` server-side before committing edits straight to the
  default branch. Anonymous visitors short-circuit before Supabase even loads.
- **`revision-lightbox.js`** — opt-in; turns `.rev-fig img` / `.detail-fig img` into
  click-to-enlarge. Harmless to pages that don't include it.

## Supabase backend (`supabase/`)

The frontend talks to a single shared Supabase project (URL + anon key are hard-coded in
`auth/config.js` and `version2/assets/js/supabase-client.js` — anon key is public by design;
security is enforced by **Row Level Security**, not by hiding the key).

- **`migrations/`** — sequentially numbered SQL (`NNN_description.sql`, currently up to
  `060_*`). This is the schema's source of truth. A large share of migrations are RLS
  fixes — **RLS is the load-bearing security model**, so when adding tables/columns, add
  the policies in the same migration and be wary of recursive policies (several past
  migrations exist purely to fix RLS recursion). Apply with `supabase db push`.
- **`seed/`** — demo data (e.g. `demo_latin_class.sql` + its teardown).
- **`functions/`** — Deno Edge Functions (TypeScript, imports via `https://esm.sh/...`):
  - **`mark-answer`** — marks one weekly-test short answer live with Claude, the *only*
    code that reads a mark scheme or calls the Anthropic API for live marking.
  - **`mark-test`** — marks a whole submission in one call (submit-at-end flow).
  - **`edit-content`** — commit-broker for `page-editor.js`; scope-locked to
    `version2/….html` paths.

### Marking model & cost controls

Marking uses the Anthropic API server-side (`MARK_MODEL`, default `claude-sonnet-4-6`).
Cost control is **designed in, not bolted on** — per-question attempt caps, answer-length
caps, `max_tokens` limits, open-window gating, a per-teacher monthly budget that *pauses*
marking, per-student rate limits, and a token-usage ledger. Preserve these when touching
marking code. Latin/Greek translation answers use an OCR-style holistic 5-mark grid;
other answers use a points-based scheme. See `WEEKLY_TEST_PLAN.md`.

## v1 shared modules (`shared/`)

The v1 tracking/learning system lives here as vanilla-JS modules included per-page:
`task-tracker.js`, `student-tracking.js`, `analytics-engine.js`, `spaced-repetition.js`,
`reading-tracker.js`, `xp-system.js`, `school-matcher.js`, vocabulary/quiz data and engines,
`navigation.js`, `styles.css`. Note the design docs flag **known duplication/inconsistency**
in this layer (e.g. word-mastery logic split across `task-tracker.js` and
`spaced-repetition.js`; mixed `user_id` vs `student_id` column naming). See the
`*_PLAN.md` / `*_REDESIGN.md` docs at the repo root for the intended direction before
extending v1 tracking.

## Auth (`auth/`)

`config.js` builds the Supabase client; `auth.js` provides shared helpers
(`getCurrentUser`, `getUserProfile`, `signUp`, …). Users have a `role`
(student/teacher) in the `users` table, and admin status via `is_admin()`.

## lesson-builder (the one real build)

`lesson-builder/` is a standalone **React 19 + TypeScript + Vite + Tailwind** app
(state via Zustand, drag-and-drop via @dnd-kit). It has its own `package.json`:

```bash
cd lesson-builder
npm install
npm run dev      # Vite dev server
npm run build    # tsc -b && vite build
npm run lint     # eslint
npm run preview
```

Its `dist/` and `node_modules/` are git-ignored.

## Working in this repo

- **No tests, linter, or build for the main site.** Verify changes by opening the relevant
  page in a browser (serve over `http://` so the Supabase client and module loads behave —
  e.g. `python3 -m http.server`). Do not invent build/test commands for the static site.
- **Edge Functions** deploy with `supabase functions deploy <name>`; **migrations** with
  `supabase db push`. These require the maintainer's linked Supabase CLI and secrets
  (`ANTHROPIC_API_KEY`, a GitHub PAT for `edit-content`) — you generally write the SQL/TS and
  the maintainer runs the deploy.
- **Match the surrounding style**: pages are dependency-light, framework-free, with heavy
  block comments. Keep new v2 pages consistent with existing ones (load the CDN supabase-js,
  then `supabase-client.js`, then page logic).
- The `*_PLAN.md`, `*_REDESIGN.md`, and `WEEKLY_TEST_PLAN.md` files at the repo root are
  living design documents — consult them for intent and database-naming decisions before
  large tracking/marking changes.
