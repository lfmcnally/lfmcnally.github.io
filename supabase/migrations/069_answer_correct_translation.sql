-- 069_answer_correct_translation.sql
-- ===========================================================================
-- Store the correct translation alongside a marked answer so the student's
-- report can show it (mark schemes themselves stay admin-only via RLS). The
-- mark-test function writes this for translation questions; students read it
-- through their own "Students read their own answers" policy.
-- ===========================================================================
ALTER TABLE weekly_test_answers ADD COLUMN IF NOT EXISTS ai_correct TEXT;
