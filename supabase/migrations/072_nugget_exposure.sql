-- 072_nugget_exposure.sql
-- Turn the nugget events into an exposure log so we can show grammar CONFIDENCE
-- (correct ÷ seen), not just error counts. The marker now records one event per
-- concept a translation TESTS, with correct = true/false. Existing rows were all
-- errors, so backfill correct = false.
ALTER TABLE student_nugget_events ADD COLUMN IF NOT EXISTS correct BOOLEAN;
UPDATE student_nugget_events SET correct = false WHERE correct IS NULL;
