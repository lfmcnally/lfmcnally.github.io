-- ============================================
-- users.tracked_courses
-- ============================================
-- Lets a student pick which courses appear on their tracking dashboard
-- without needing to be in a teacher's class. The dashboard tab strip is
-- the union of this list and the course types implied by the student's
-- v2_class_members rows, so being added to a class still surfaces the
-- right tab automatically.
--
-- No new RLS policy needed — migration 010 already allows authenticated
-- users to UPDATE their own row (id = auth.uid()).
--
-- Safe to run more than once.

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS tracked_courses TEXT[] NOT NULL DEFAULT '{}';
