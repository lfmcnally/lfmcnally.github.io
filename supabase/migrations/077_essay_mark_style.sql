-- 077_essay_mark_style.sql
-- ===========================================================================
-- Adds the 'essay' marking style for OCR GCSE Classical Civilisation extended
-- responses, starting with the 8-marker (Myth and Religion, J199/11).
--
-- Unlike 'points' (a fixed creditworthy-point checklist) and 'translation' (the
-- holistic /5 sense grid), an 8-marker is marked against OCR's holistic 4-level
-- grid (4 AO1 + 4 AO2 = 8). The marker operationalises that grid with the
-- department "house structure": three AO1+AO2 pairs per side and a conclusion,
-- with a source reference woven in. See docs/marking/j199-8-marker.md.
--
-- The extra config an essay needs (stem family, the printed source, indicative
-- content drawn from the Myth & Religion revision pages) lives in a single
-- essay_scheme JSONB on the (service-role-only) mark-scheme tables:
--   {
--     "stem_type": "evaluative" | "in_what_ways",
--     "source": "the printed source text, or a description of a visual source",
--     "indicative": ["creditworthy fact / point", ...]   -- from revision pages
--   }
-- ===========================================================================

-- 1. Allow 'essay' as a marking style on both question tables. ----------------
ALTER TABLE public.weekly_test_questions
  DROP CONSTRAINT IF EXISTS weekly_test_questions_mark_style_check;
ALTER TABLE public.weekly_test_questions
  ADD CONSTRAINT weekly_test_questions_mark_style_check
    CHECK (mark_style IN ('points', 'translation', 'essay'));

ALTER TABLE public.bank_assessment_questions
  DROP CONSTRAINT IF EXISTS bank_assessment_questions_mark_style_check;
ALTER TABLE public.bank_assessment_questions
  ADD CONSTRAINT bank_assessment_questions_mark_style_check
    CHECK (mark_style IN ('points', 'translation', 'essay'));

-- 2. Per-question essay config on the private mark-scheme tables. -------------
ALTER TABLE public.weekly_test_mark_schemes
  ADD COLUMN IF NOT EXISTS essay_scheme JSONB;
ALTER TABLE public.bank_assessment_mark_schemes
  ADD COLUMN IF NOT EXISTS essay_scheme JSONB;

COMMENT ON COLUMN public.weekly_test_mark_schemes.essay_scheme IS
  'Essay (8-marker) config: { stem_type: evaluative|in_what_ways, source: text, '
  'indicative: [creditworthy facts from the revision pages] }. Null for non-essay questions.';
