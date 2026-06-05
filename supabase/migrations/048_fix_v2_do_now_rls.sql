-- ──────────────────────────────────────────────────────────
-- 048_fix_v2_do_now_rls
--
-- Repair / re-assert the Row Level Security policies on v2_do_now.
-- A teacher setting a Do Now hit "new row violates row-level security
-- policy for table v2_do_now" — which happens if the teacher policy from
-- migration 042 was never applied or got dropped. This migration is
-- idempotent: safe to run even if the policies already exist.
--
-- (The companion client change also stops the Do Now / teacher pages from
-- listing classes the teacher only *belongs to*, so they can't try to write
-- a Do Now for a class they don't own.)
-- ──────────────────────────────────────────────────────────

ALTER TABLE v2_do_now ENABLE ROW LEVEL SECURITY;

-- Teacher: full control over the Do Now for classes they own.
DROP POLICY IF EXISTS "Teachers manage do now for their classes" ON v2_do_now;
CREATE POLICY "Teachers manage do now for their classes"
ON v2_do_now FOR ALL
TO authenticated
USING      (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()))
WITH CHECK (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()));

-- Student: read the Do Now for any class they belong to.
DROP POLICY IF EXISTS "Students read do now for their classes" ON v2_do_now;
CREATE POLICY "Students read do now for their classes"
ON v2_do_now FOR SELECT
TO authenticated
USING (class_id IN (SELECT my_v2_class_ids()));
