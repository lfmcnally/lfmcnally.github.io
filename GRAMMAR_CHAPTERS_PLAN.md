# Grammar chapters — gating assessments by what's been taught

> Status: **design note only** (no code yet). Captures the agreed model so we
> can build it later. Companion to `WEEKLY_TEST_PLAN.md` and the nugget work in
> migrations `070`–`073`.

## The problem

We want a set of practice assessments per grammar **nugget** (Imperfect tense,
Ablative case, Purpose clause…). But a translation sentence is never "about"
one grammar point — it drags in everything. A Year 9 who has only met simple
sentences should not be asked to practise *nominatives* inside a sentence that
also contains a *purpose clause* they won't be taught until Year 10.

## The key reframe — two different tags on a sentence

Conflating these is the trap. Keep them separate:

1. **Tests** — the target nugget(s) the sentence is meant to practise / measure.
   We already extract this in `mark-test` via the `tested` codes.
2. **Contains** — every grammar construct a student must *already* know to
   translate it. This is the real gate.

> **Gating rule:** a student may attempt a sentence **iff every construct it
> _contains_ has already been taught.** Difficulty is set by what a sentence
> contains, not by what it tests.

## Curriculum: "Latin to GCSE" (Taylor), Books 1 & 2

One fixed scheme of work, so the model is simple: a single ordered list of
chapters (Book 1 ch. 1…N, Book 2 continuing). No multi-textbook branching for
now — if we ever add CLC/Suburani, the same shape repeats per scheme.

## Data model (proposed)

Nuggets stay as the reusable, scheme-agnostic taxonomy (`grammar_nuggets`,
keyed by `subject`/`level`). The chapter ordering is scheme-specific, so it
lives in its **own mapping**, not as a column on the nugget:

- **`grammar_schemes`** — one row per scheme. Seed: `latin-to-gcse` (Books 1 & 2).
- **`scheme_chapters`** — ordered chapters for a scheme:
  `(scheme_id, book INT, chapter INT, label TEXT, position INT)`.
  `position` is the cumulative teaching order across both books (the number we
  actually compare against).
- **`nugget_chapter`** — when each construct is *introduced* in the scheme:
  `(scheme_id, nugget_id, introduced_position INT)`. The one laborious step,
  done once. Nuggets with no entry (e.g. the "Common slips": vocabulary, number,
  word omitted) are treated as **always available** — they're not chapter-gated.

Assessment side — record both tags, derive the ceiling:

- **`assessment_nuggets`** — `(assessment_id, nugget_id, role)` where
  `role ∈ ('tests','contains')`. `tests ⊆ contains`.
- **`bank_assessments.grammar_ceiling`** — cached
  `max(introduced_position)` over the assessment's `contains` nuggets (chapter
  the latest grammar lands in). Single integer → cheap to filter on.

Student / class position:

- **Class** has a "currently at" pointer: `(scheme_id, position)` — e.g. "we're
  up to Book 1 ch. 12". Set by the teacher; advances over the year.
- **Self-serve students** pick their own level (same pointer on the user).

## Gating query

> Show assessment to a student iff `grammar_ceiling <= student_position`
> (or the assessment has no gated `contains` nuggets at all).

For per-nugget practice: "practise the ablative" =
`assessment_nuggets.role='tests' AND nugget='ablative' AND grammar_ceiling <= student_position`.
Same nugget yields Year-9-appropriate vs Year-11-appropriate sentences purely
because their `contains` set differs.

## Authoring — how the ceiling gets set without hand-auditing every sentence

This is what makes it tractable. Reuse the tagging we already do, but for
**all** grammar present, not just errors:

1. On author / auto-translate, send the Latin sentence + the nugget list to the
   model and ask it to return every construct from the list that the sentence
   **contains**.
2. Map each to its `introduced_position`; `grammar_ceiling = max(...)`.
3. Surface it in the authoring UI as a suggested chapter the author can confirm
   or override (e.g. "This sentence reaches **Book 2 ch. 21** — Ablative
   absolute. OK?").

So "assessments use all grammar" stops being a blocker: we *measure* the grammar
each sentence pulls in and file it at exactly that level.

## How it surfaces to students

- The grammar-confidence bars on the dashboard deep-link each nugget to
  "practise this at your level" (filtered by the gate above).
- "Concepts to revise" likewise links to gated practice, so a struggling
  student is never thrown a sentence above their chapter.

## Edge cases / notes

- **Common-slip nuggets** (vocabulary, number, person, omission) are not
  chapter-gated — they apply at every level.
- **Ceiling must be recomputed** if `nugget_chapter` mappings change; keep the
  cached `grammar_ceiling` refreshable (a backfill function).
- The model's `contains` tagging needs author confirmation at first — treat it
  as a suggestion, not gospel, until we trust it.

## Suggested phasing (when we build)

1. **Schema + seed**: `grammar_schemes`, `scheme_chapters`, `nugget_chapter`,
   `assessment_nuggets`, `bank_assessments.grammar_ceiling`. Seed the Latin to
   GCSE chapter list and map the existing ~50 nuggets to chapters (once).
2. **Class / student position** pointer + the gating query on the bank list.
3. **AI `contains` tagging** in the authoring flow + author confirm/override.
4. **Per-nugget practice** entry points from the dashboard bars.
