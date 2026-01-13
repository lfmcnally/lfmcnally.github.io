-- Migration: Allow teachers to manage task_attempts for vocab tests
-- Issue: Teachers cannot save or delete scores for students because RLS only allows students to modify their own attempts
-- Solution: Add INSERT and DELETE policies for teachers

-- Drop existing INSERT policy for students (we'll recreate it combined with teacher access)
DROP POLICY IF EXISTS "Students can create attempts" ON task_attempts;

-- Create combined INSERT policy: students for themselves, teachers for their class students
CREATE POLICY "Students and teachers can create attempts"
ON task_attempts FOR INSERT
TO authenticated
WITH CHECK (
    -- Students can create attempts for themselves
    student_id = auth.uid()
    OR
    -- Teachers can create attempts for students in their classes
    student_id IN (
        SELECT cm.student_id
        FROM classes c
        JOIN class_members cm ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
);

-- Create DELETE policy for teachers (students should not delete attempts)
CREATE POLICY "Teachers can delete student attempts"
ON task_attempts FOR DELETE
TO authenticated
USING (
    -- Teachers can delete attempts for students in their classes
    student_id IN (
        SELECT cm.student_id
        FROM classes c
        JOIN class_members cm ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
);
