-- ──────────────────────────────────────────────────────────
-- 047_v2_classes_order_archive
--
-- Adds manual ordering + archiving to v2_classes so teachers can
-- organise their classes (reorder the dashboard tabs) and tuck old
-- classes away without deleting the data.
--
-- RLS: the existing "Teachers manage their v2 classes" FOR ALL policy
-- (migration 040) already covers UPDATE of these columns, so no new
-- policy is required.
-- ──────────────────────────────────────────────────────────

ALTER TABLE v2_classes ADD COLUMN IF NOT EXISTS position INTEGER;
ALTER TABLE v2_classes ADD COLUMN IF NOT EXISTS archived BOOLEAN NOT NULL DEFAULT FALSE;

-- Backfill position per teacher using the current creation order, so
-- existing classes keep their present ordering.
WITH ordered AS (
    SELECT id,
           ROW_NUMBER() OVER (PARTITION BY teacher_id ORDER BY created_at, id) AS rn
    FROM v2_classes
)
UPDATE v2_classes v
SET position = o.rn
FROM ordered o
WHERE v.id = o.id AND v.position IS NULL;

CREATE INDEX IF NOT EXISTS idx_v2_classes_teacher_position
    ON v2_classes (teacher_id, position);
