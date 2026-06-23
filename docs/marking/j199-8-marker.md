# OCR GCSE Classical Civilisation — 8-marker (`essay` mark style)

Reference for the `essay` marking style used by `mark-answer` / `mark-test`.
Source of truth for the prompt is the department house structure for the
J199/11 (Myth and Religion) 8-mark detailed response.

## The question
- Two per paper (one in Section A, one in Section B).
- Weighted **4 AO1 (knowledge) + 4 AO2 (analysis/evaluation) = 8 marks**.
- Awarded **holistically** against OCR's four-level grid — not as a points tally.
- Always source-led: the printed source **must** be used (a short quotation, or a
  named feature of a visual source). Own-knowledge-only answers are capped.

### OCR level grid (paraphrased)
- **Level 4 (7–8):** consistently accurate, detailed knowledge from the source
  *and* wider own knowledge; very good understanding of context; well-argued, a
  range of well-selected evidence, with critical analysis and evaluation.
- **Level 3 (5–6):** accurate knowledge using source and own knowledge; focused,
  a range of evidence; relevant analysis and evaluation; good context.
- **Level 2 (3–4):** mostly accurate but limited knowledge; general engagement,
  limited evidence; some analysis; some context.
- **Level 1 (1–2):** limited knowledge, may use the source only; little
  explanation; isolated analysis; limited context.
- **0:** nothing worthy of credit.

## The house structure (how the grid is operationalised)
A Level 4 answer is three short sections, ~250–300 words, ~10–12 minutes:
- **Section 1** — three AO1+AO2 pairs (agree / "from source").
- **Section 2** — three AO1+AO2 pairs (disagree / "from own knowledge").
- **Conclusion** — 1–2 sentences with a judgement.

One **pair** = one *fact* (AO1) + one sentence of *analysis* tying it to the
question (AO2: "this suggests / which means / because…"). ~30 words.

The marker treats these as a detection checklist:
- **AO1** = distinct, accurate facts (named figure, source feature, quoted
  phrase, event, date). ~six in a strong answer, from source **and** own knowledge.
- **AO2** = each fact followed by analysis tied to the question. Narration
  without analysis earns AO1 only.
- **Source** = a quotation (<15 words) or a named visual feature. Mandatory.
- **Conclusion** = commits (evaluative) or synthesises (in what ways).

## Two stem families
- **Evaluative** ("how far / to what extent / who is more…"): argue **both
  sides**, then a committed conclusion.
- **"In what ways…"**: distinct ways **from the source** + **from own
  knowledge**. **Counter-arguments score nothing here** — arguing the opposite
  case misreads the stem (OCR examiner warning, 2022).

## Accuracy / grounding
Credit only facts accurate for OCR Myth and Religion *as taught on the
Classicalia revision pages*. The per-question **indicative content** (drawn from
those revision pages) is the canonical creditworthy list; other accurate,
on-spec own-knowledge facts are also credited. Vague, irrelevant or wrong claims
are not. Teacher override remains the backstop for borderline AO2 judgements.

## Data the marker is given (essay_scheme JSONB)
```json
{
  "stem_type": "evaluative" | "in_what_ways",
  "source": "the printed source text, or a description of a visual source",
  "indicative": ["creditworthy fact / point from the revision pages", "..."]
}
```
Plus the question prompt, the student's answer, and optional `marking_notes`.

## Notes
- 8 marks fits the existing 1–10 question cap. The 15-marker (a later build)
  will need that cap widened and a bigger AO1/AO2 grid.
- Essay answers run ~250–300 words (~1600–1900 chars), so essay tests should set
  the per-test answer-length cap above the 1200 default.
