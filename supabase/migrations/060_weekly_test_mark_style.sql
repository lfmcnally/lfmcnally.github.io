-- 060_weekly_test_mark_style.sql
-- ===========================================================================
-- Per-question marking style for weekly tests.
--
--   'points'      (default) — credit the teacher's creditworthy scheme points,
--                             allowing synonyms/paraphrase. Suits Classical
--                             Civilisation answers and Latin/Greek comprehension.
--   'translation'           — OCR-style HOLISTIC band marking out of 5 against
--                             the model answer (the correct English), judging the
--                             proportion of sense communicated. For Latin/Greek
--                             "translate into English" questions (J282/J292 grid).
--
-- The marking Edge Functions (mark-answer, mark-test) branch on this column and
-- derive the subject (Latin / Greek / Classical Civilisation) from the class
-- type, so the AI is told exactly what it is marking.
-- ===========================================================================

ALTER TABLE public.weekly_test_questions
  ADD COLUMN IF NOT EXISTS mark_style TEXT NOT NULL DEFAULT 'points'
    CHECK (mark_style IN ('points', 'translation'));

COMMENT ON COLUMN public.weekly_test_questions.mark_style IS
  'How the AI marks this question: points = credit creditworthy scheme points; '
  'translation = OCR holistic band /5 against the model answer (Latin/Greek translation).';
