-- 073_nugget_event_index.sql
-- The exposure upsert in mark-test uses onConflict =
-- "submission_id,question_id,nugget_id". PostgREST cannot resolve a conflict
-- target against a PARTIAL unique index, so the original
--   CREATE UNIQUE INDEX ... WHERE submission_id IS NOT NULL
-- made every upsert silently fail and NO nugget events were ever written
-- (the dashboard grammar grid stayed grey). submission_id is always present
-- for marked answers, so drop the WHERE and make the index plain.
DROP INDEX IF EXISTS uq_nugget_event;
CREATE UNIQUE INDEX IF NOT EXISTS uq_nugget_event
    ON student_nugget_events (submission_id, question_id, nugget_id);
