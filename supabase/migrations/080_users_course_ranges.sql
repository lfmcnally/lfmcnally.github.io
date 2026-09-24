-- ============================================
-- users.course_ranges
-- ============================================
-- The chapter (vocab courses) or topic (Class. Civ.) range each pupil has
-- chosen to be tested on, per course, so it follows them across devices:
--   { "latin-gcse": { "from": 1, "to": 2 },
--     "civ-gcse":   { "from": "1.1", "to": "1.3" } }
-- Until a pupil picks a range, the progress page falls back to their class's
-- "Class has reached" setting (v2_classes.grammar_chapter).
--
-- No new RLS policy needed: migration 010 already lets authenticated users
-- update their own row (id = auth.uid()).
--
-- Safe to run more than once.

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS course_ranges JSONB NOT NULL DEFAULT '{}'::jsonb;
