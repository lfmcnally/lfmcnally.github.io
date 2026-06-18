-- 076_teacher_read_nugget_events.sql
-- Let a teacher read the grammar-concept ("nugget") events of students in
-- classes they own, so the class overview can show class-wide grammar
-- confidence. Mirrors the vocab_bkt teacher-read policy, but on the v2 tables.
-- Students still only read their own (policy from migration 070); this only
-- ADDS teacher visibility.
DROP POLICY IF EXISTS "Teachers read nugget events for their class members" ON student_nugget_events;
CREATE POLICY "Teachers read nugget events for their class members"
ON student_nugget_events FOR SELECT TO authenticated
USING (
  student_id IN (
    SELECT cm.student_id
    FROM v2_classes c
    JOIN v2_class_members cm ON cm.class_id = c.id
    WHERE c.teacher_id = auth.uid()
  )
);
