-- Migration: Fix leaderboard RLS policy for reliable classmate visibility
-- This migration improves the users table RLS policy to ensure classmates
-- can see each other's profile info on leaderboards

-- Step 1: Drop existing policies that might conflict
DROP POLICY IF EXISTS "Users can view own profile" ON users;
DROP POLICY IF EXISTS "Users can view classmates profiles" ON users;

-- Step 2: Create a single comprehensive SELECT policy
-- This policy allows users to see:
-- 1. Their own profile (always)
-- 2. Profiles of students in the same class
-- 3. Teachers can see their students' profiles
CREATE POLICY "Users can view profiles for leaderboards"
ON users FOR SELECT
TO authenticated
USING (
    -- User can always see their own profile
    id = auth.uid()
    OR
    -- User can see profiles of other students in their classes
    -- Using a single EXISTS with IN for better performance
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
        FROM classes c
        JOIN class_members cm ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
);

-- Add an index to optimize the classmates query if not exists
CREATE INDEX IF NOT EXISTS idx_class_members_class_student
ON class_members(class_id, student_id);
