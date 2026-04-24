-- Migration: add missing `type` column to tasks
--
-- Symptom: inserts into `tasks` fail with
--   { code: 'PGRST204',
--     message: "Could not find the 'type' column of 'tasks' in the schema cache" }
-- and SELECTs that list `type` explicitly (e.g. renderHwHist) return 400 too.
--
-- The app writes 'vocab', 'classics' or 'vocab-test' into this column and
-- reads it back in several places (e.g. dashboard/tracking.html
-- loadClass, renderHwHist, and the Homework icon choice on
-- dashboard/student-tracking.html). Add it as a nullable text column and
-- backfill existing rows from the content_path prefix.

ALTER TABLE tasks ADD COLUMN IF NOT EXISTS type text;

UPDATE tasks
SET type = CASE
    WHEN type IS NOT NULL THEN type
    WHEN content_path LIKE 'civ?%' THEN 'classics'
    WHEN content_path LIKE 'vocab?%' THEN 'vocab'
    WHEN content_path LIKE 'weak-items/%' THEN 'vocab'
    ELSE type
END;
