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

---

## Chapter mapping (first pass)

Source: *Latin to GCSE* (Taylor) contents — **Book 1 = chapters 1–6, Book 2 =
chapters 7–10**. `position` = the cumulative chapter number (1–10), which is what
the gate compares against. A nugget is filed at the chapter where it is **first
introduced** (earliest, since the gate is cumulative).

| Nugget (code) | Title | Ch. |
|---|---|---|
| present | Present tense | 1 |
| imperfect | Imperfect tense | 3 |
| perfect | Perfect tense | 4 |
| future | Future tense | 5 |
| pluperfect | Pluperfect tense | 6 |
| infinitive | Infinitives | 2 |
| imperative | Imperatives | 3 |
| passive | Passive voice | 7 |
| participle-present | Present participle | 7 |
| participle-perfect | Perfect (passive) participle | 7 |
| participle-future | Future participle | 8 |
| deponent | Deponent verbs | 9 |
| subjunctive | Subjunctive mood | 10 |
| gerundive | Gerundive | 10 |
| nominative | Nominative (subject) | 1 |
| accusative | Accusative (object) | 1 |
| genitive | Genitive | 2 |
| dative | Dative | 2 |
| ablative | Ablative | 2 |
| vocative | Vocative | 3 |
| prepositions-case | Cases taken by prepositions | 1 (acc) / 2 (abl) |
| time-expressions | Expressions of time | 2 (how long) / 4 (when) / 6 (within) |
| declensions | Noun declension recognition | 1 (1st/2nd) / 4 (3rd) / 10 (4th/5th) |
| adjective-agreement | Adjective agreement | 3 |
| adverbs | Adverbs | 3 (time) / 5 (formation) |
| comparative | Comparative adjectives/adverbs | 7 |
| superlative | Superlative adjectives/adverbs | 7 |
| pronouns | Pronouns & pronominal adjectives | 4 (personal) / 5 (is, se) / 7 (hic, ille) / 8 (ipse, idem) |
| relative-clause | Relative clause | 6 |
| concessive-clause | Concessive clause (quamquam) | 6 |
| causal-clause | Causal clause (quod / cum) | 6 (quod) / 10 (cum) |
| temporal-clause | Temporal clause | 6 (ubi, postquam) / 10 (dum) |
| direct-commands | Direct commands | 3 |
| direct-questions | Direct questions | 4 |
| conditional-clause | Conditional clause | 8 |
| ablative-absolute | Ablative absolute | 8 |
| prohibitions | Prohibitions (noli / nolite) | 8 |
| indirect-statement | Indirect statement | 9 |
| purpose-clause | Purpose clause (ut / ne) | 10 |
| result-clause | Result clause | 10 |
| indirect-command | Indirect command | 10 |
| indirect-question | Indirect question | 10 |
| fearing-clause | Fearing clause (timeo + ne) | 10 |
| gerundive-purpose | Gerundive of purpose (ad + gerundive) | 10 |

**Stragglers to confirm** (no distinct contents heading in ch.1–10):
- `irregular-verbs` (volo/nolo/malo, fero) → **ch.8** ("More irregular verbs");
  sum ch.1, possum ch.3, eo ch.6 (see split below).
- `ablative-comparison` (ablative of comparison) → likely **ch.7** alongside the
  comparatives — confirm.
- `special-case` (cases taken by verbs/adjectives, e.g. dative with *credo* /
  ablative with *utor*) → no standalone heading; enters via vocabulary/usage.
  Confirm a chapter or treat as always-available.

**Always-available (not chapter-gated):** the Common-slip nuggets —
`subject-object`, `number`, `person`, `vocabulary`, `omission`.

Books 1 & 2 between them cover all ten chapters, so this map is **complete** once
the three stragglers above are confirmed — no further contents needed.

## Proposed nugget adjustments (from the contents)

These came out of the contents pages; worth deciding before we seed:

- **Split `irregular-verbs`** — currently one nugget for "sum, eo, volo, fero…",
  but they enter far apart: `sum` ch.1, `possum` ch.3, `eo` ch.6,
  volo/nolo/malo & fero ch.8. As one nugget it'd have to gate at ch.1, which is
  wrong for *eo*/*fero*. Suggest splitting into **sum & compounds** (ch.1),
  **possum** (ch.3), **eo** (ch.6), **volo/nolo/malo, fero** (ch.8).
- **Split `pronouns`** — it spans ch.4–8. Suggest **personal & reflexive
  pronouns** (ego/tu/nos/vos/se, ch.4–5) and **demonstratives** (is, hic, ille,
  ipse, idem, ch.5–8). Keeps the gate honest (a ch.5 student shouldn't get
  *ipse*).
- **Add `numerals`** (ch.6) — currently no nugget; numbers do appear in
  translation.
- **Add `principal-parts` / `conjugation-recognition`?** — probably *not* a
  translation nugget (it's a learning skill, not a sentence feature). Leave out.
- **Connectives** (for/therefore/however, ch.5; linking words) — minor; fold
  into vocabulary rather than a new nugget.
- Note `causal-clause` currently bundles **cum** with **quod**, but *cum* +
  subjunctive (ch.10) is later and broader (temporal/causal). Could leave bundled
  and gate at the earliest (quod, ch.6), or split `cum-clause` out at ch.10.
