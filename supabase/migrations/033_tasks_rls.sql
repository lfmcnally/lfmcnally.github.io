-- Migration: RLS policies for the `tasks` table
-- Symptom: teachers set homework but it does not appear in the "Homework" card
-- on tracking.html, and students never see it on their dashboard. Root cause
-- candidates:
--   1. RLS is enabled on `tasks` but no policies exist -> every operation
--      is denied (silent, because the tracking.html insert had no error
--      handling until this branch).
--   2. RLS is disabled and the insert succeeds, but the SELECT that
--      repopulates the Homework card after reload returns nothing because
--      the insert's `.select().single()` had already failed for another
--      reason (we now surface that error).
-- Either way, the missing policies need to exist so teachers can fully
-- manage their class's homework and students can read the tasks assigned
-- to classes they belong to.

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Teachers manage their class tasks" ON tasks;
DROP POLICY IF EXISTS "Students read tasks for their classes" ON tasks;
DROP POLICY IF EXISTS "Teachers can read their class tasks" ON tasks;
DROP POLICY IF EXISTS "Teachers can insert tasks for their classes" ON tasks;
DROP POLICY IF EXISTS "Teachers can update their class tasks" ON tasks;
DROP POLICY IF EXISTS "Teachers can delete their class tasks" ON tasks;

-- Teachers: full CRUD on tasks belonging to a class they own
CREATE POLICY "Teachers can read their class tasks"
ON tasks FOR SELECT
TO authenticated
USING (
    class_id IN (SELECT id FROM classes WHERE teacher_id = auth.uid())
    OR
    class_id IN (
        SELECT cm.class_id FROM class_members cm WHERE cm.student_id = auth.uid()
    )
);

CREATE POLICY "Teachers can insert tasks for their classes"
ON tasks FOR INSERT
TO authenticated
WITH CHECK (
    class_id IN (SELECT id FROM classes WHERE teacher_id = auth.uid())
);

CREATE POLICY "Teachers can update their class tasks"
ON tasks FOR UPDATE
TO authenticated
USING (
    class_id IN (SELECT id FROM classes WHERE teacher_id = auth.uid())
)
WITH CHECK (
    class_id IN (SELECT id FROM classes WHERE teacher_id = auth.uid())
);

CREATE POLICY "Teachers can delete their class tasks"
ON tasks FOR DELETE
TO authenticated
USING (
    class_id IN (SELECT id FROM classes WHERE teacher_id = auth.uid())
);

CREATE INDEX IF NOT EXISTS idx_tasks_class_id ON tasks(class_id);

-- Also: task_attempts SELECT currently only allows student_id = auth.uid()
-- (see migration 006). Teachers need to read attempts for students in their
-- classes so the "Homework" card on tracking.html can show completion state.
DROP POLICY IF EXISTS "Teachers can view class attempts" ON task_attempts;
CREATE POLICY "Teachers can view class attempts"
ON task_attempts FOR SELECT
TO authenticated
USING (
    student_id IN (
        SELECT cm.student_id
        FROM classes c
        JOIN class_members cm ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
);
