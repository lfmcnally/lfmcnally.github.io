-- 064_bank_levels_subtopics.sql
-- ===========================================================================
-- Resource bank — deepen the hierarchy so tests live under a proper structure:
--   Subject  ->  Level (GCSE / A-Level / KS3)  ->  Module  ->  Topic  ->  Subtopic
--
-- Two additive changes, both backward-compatible:
--   1. bank_courses gains `level` (a course = a "module" within a subject+level).
--      Existing rows backfill to 'gcse'.
--   2. bank_topics gains a self-referencing `parent_id`: NULL = a top-level
--      topic, set = a subtopic of that topic. A subtopic carries the same
--      course_id as its parent.
--
-- bank_assessments.topic_id already points at bank_topics(id), so a test can
-- now attach to a whole topic (parent_id IS NULL) OR a single subtopic with no
-- further schema change. See RESOURCE_BANK_AND_TIERS_PLAN.md.
-- ===========================================================================

-- 1. Level on the module ----------------------------------------------------
ALTER TABLE bank_courses
  ADD COLUMN IF NOT EXISTS level TEXT NOT NULL DEFAULT 'gcse'
  CHECK (level IN ('gcse','alevel','ks3'));

CREATE INDEX IF NOT EXISTS idx_bank_courses_subject_level
  ON bank_courses (subject, level, position);

-- 2. Subtopics via a self-reference on bank_topics --------------------------
ALTER TABLE bank_topics
  ADD COLUMN IF NOT EXISTS parent_id UUID REFERENCES bank_topics(id) ON DELETE CASCADE;

CREATE INDEX IF NOT EXISTS idx_bank_topics_parent ON bank_topics (parent_id);

-- A topic cannot be its own parent (guards an obvious data error).
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'bank_topics_not_self_parent') THEN
    ALTER TABLE bank_topics
      ADD CONSTRAINT bank_topics_not_self_parent CHECK (parent_id IS NULL OR parent_id <> id);
  END IF;
END $$;

COMMENT ON COLUMN bank_courses.level IS 'gcse | alevel | ks3 — the second grouping under a subject.';
COMMENT ON COLUMN bank_topics.parent_id IS 'NULL = top-level topic; set = subtopic of that topic (same course_id).';
