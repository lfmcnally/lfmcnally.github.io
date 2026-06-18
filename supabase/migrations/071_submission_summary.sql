-- 071_submission_summary.sql
-- Store an AI overall comment on a whole submission plus the consolidated list
-- of grammar concepts to work on, so the report can lead with overall feedback
-- (not just question-by-question). Written by mark-test; students read their own
-- submissions, so it's visible to them via existing policies.
ALTER TABLE weekly_test_submissions ADD COLUMN IF NOT EXISTS ai_summary TEXT;
ALTER TABLE weekly_test_submissions ADD COLUMN IF NOT EXISTS ai_focus   JSONB;
