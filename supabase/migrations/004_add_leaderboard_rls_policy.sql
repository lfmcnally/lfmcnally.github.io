-- Migration: Allow students to see classmates' profile info for leaderboards
-- This adds an RLS policy so users can see basic profile data of classmates

-- Allow authenticated users to see profile info of users in their classes
-- This is needed for leaderboards to show classmates' names, emojis, and tags

-- IMPORTANT: If you already have a SELECT policy on users, drop it first:
-- DROP POLICY IF EXISTS "Users can view own profile" ON users;

CREATE POLICY "Users can view classmates profiles"
ON users FOR SELECT
TO authenticated
USING (
    -- User can always see their own profile
    id = auth.uid()
    OR
    -- User can see profiles of students in the same class
    EXISTS (
        SELECT 1
        FROM class_members cm1
        WHERE cm1.student_id = auth.uid()
        AND EXISTS (
            SELECT 1 FROM class_members cm2
            WHERE cm2.student_id = users.id
            AND cm2.class_id = cm1.class_id
        )
    )
    OR
    -- Teachers can see profiles of students in their classes
    EXISTS (
        SELECT 1
        FROM classes c
        JOIN class_members cm ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
        AND cm.student_id = users.id
    )
);
