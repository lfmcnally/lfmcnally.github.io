-- 061_weekly_test_teacher_rationale.sql
-- ===========================================================================
-- Let teachers override the AI's written feedback, not just the mark.
--
--   weekly_test_answers.teacher_rationale  — when set, this is the feedback the
--   student sees (in their report and downloadable summary) instead of the AI's
--   ai_rationale. NULL means "use the AI's feedback".
--
-- Row-level security is unchanged: a student can already read their own answer
-- rows, so they will see this column too (which is the point — it's their
-- feedback). Only the marking functions / teacher tools write it.
-- ===========================================================================

ALTER TABLE public.weekly_test_answers
  ADD COLUMN IF NOT EXISTS teacher_rationale TEXT;

COMMENT ON COLUMN public.weekly_test_answers.teacher_rationale IS
  'Teacher-edited feedback shown to the student in place of ai_rationale when set.';
