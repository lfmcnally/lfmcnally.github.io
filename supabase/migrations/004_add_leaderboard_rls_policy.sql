-- Migration: Allow students to see classmates' profile info for leaderboards
-- This adds an RLS policy so users can see basic profile data of classmates

-- Allow authenticated users to see profile info of users in their classes
-- This is needed for leaderboards to show classmates' names, emojis, and tags

CREATE POLICY "Users can view classmates profiles"
ON users FOR SELECT
TO authenticated
USING (
    -- User can always see their own profile
    id = auth.uid()
    OR
    -- User can see profiles of students in the same class
    id IN (
        SELECT cm2.student_id
        FROM class_members cm1
        JOIN class_members cm2 ON cm1.class_id = cm2.class_id
        WHERE cm1.student_id = auth.uid()
    )
    OR
    -- Teachers can see profiles of students in their classes
    id IN (
        SELECT cm.student_id
        FROM class_members cm
        JOIN classes c ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
    OR
    -- Teachers can see profiles of co-teachers
    id IN (
        SELECT ct.teacher_id
        FROM class_teachers ct
        JOIN classes c ON ct.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
);

-- Note: If there's already a SELECT policy on users, you may need to drop it first:
-- DROP POLICY IF EXISTS "existing_policy_name" ON users;
