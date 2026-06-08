-- ============================================
-- Weekly goals — "answer N questions this week"
-- ============================================
-- A lightweight engagement target. Two independent goals:
--   • users.weekly_goal      — a student's personal target
--   • v2_classes.weekly_goal — a class target a teacher sets for everyone
--
-- The metric is "questions answered this week", computed live from
-- vocab_sessions (SUM(answered) since the start of the current week), so no
-- counters, baselines or snapshots are stored — just the target number. NULL
-- means "no goal set".
--
-- RLS is already in place for both writes:
--   • students update their own users row (migration 010)
--   • teachers manage their own v2_classes (migration 040), and students can
--     read classes they belong to (migration 040), so they can see the class
--     goal.

ALTER TABLE users
    ADD COLUMN IF NOT EXISTS weekly_goal INTEGER
    CHECK (weekly_goal IS NULL OR (weekly_goal > 0 AND weekly_goal <= 100000));

ALTER TABLE v2_classes
    ADD COLUMN IF NOT EXISTS weekly_goal INTEGER
    CHECK (weekly_goal IS NULL OR (weekly_goal > 0 AND weekly_goal <= 100000));

COMMENT ON COLUMN users.weekly_goal IS
'Personal weekly target: number of questions to answer this week (NULL = none). Progress is computed from vocab_sessions.';
COMMENT ON COLUMN v2_classes.weekly_goal IS
'Class weekly target the teacher sets for every member: questions answered this week (NULL = none).';
