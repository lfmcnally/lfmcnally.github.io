-- Migration: Fix task_attempts RLS for leaderboard time display
-- Issue: Students can only see their own task_attempts, so leaderboard shows 0 time for classmates
-- Solution: Allow students to view task_attempts for classmates in the same class

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Students can view own attempts" ON task_attempts;

-- Create new SELECT policy that allows viewing classmates' attempts
-- This is needed for the leaderboard to show accurate practice time
CREATE POLICY "Students can view own and classmates attempts"
ON task_attempts FOR SELECT
TO authenticated
USING (
    -- User can always see their own attempts
    student_id = auth.uid()
    OR
    -- User can see attempts from classmates (students in the same class)
    student_id IN (
        SELECT cm2.student_id
        FROM class_members cm1
        JOIN class_members cm2 ON cm1.class_id = cm2.class_id
        WHERE cm1.student_id = auth.uid()
    )
    OR
    -- Teachers can see attempts from students in their classes
    student_id IN (
        SELECT cm.student_id
        FROM classes c
        JOIN class_members cm ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
);

-- Note: INSERT and UPDATE policies remain unchanged - students can only modify their own attempts
