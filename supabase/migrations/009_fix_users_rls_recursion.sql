-- Migration: Fix infinite recursion in users RLS policy
-- Issue: The users SELECT policy queries class_members/classes, which can cause
-- infinite recursion when Postgres evaluates policies during UPDATE operations
-- Solution: Use SECURITY DEFINER functions that bypass RLS for membership checks

-- Step 1: Create helper function to get classmate IDs (bypasses RLS)
CREATE OR REPLACE FUNCTION get_classmate_ids(user_id UUID)
RETURNS SETOF UUID
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
    SELECT DISTINCT cm2.student_id
    FROM class_members cm1
    JOIN class_members cm2 ON cm1.class_id = cm2.class_id
    WHERE cm1.student_id = user_id;
$$;

-- Step 2: Create helper function to get student IDs for a teacher (bypasses RLS)
CREATE OR REPLACE FUNCTION get_teacher_student_ids(teacher_id UUID)
RETURNS SETOF UUID
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
    SELECT DISTINCT cm.student_id
    FROM classes c
    JOIN class_members cm ON cm.class_id = c.id
    WHERE c.teacher_id = teacher_id;
$$;

-- Step 3: Drop existing problematic policy
DROP POLICY IF EXISTS "Users can view profiles for leaderboards" ON users;
DROP POLICY IF EXISTS "Users can view own profile" ON users;
DROP POLICY IF EXISTS "Users can view classmates profiles" ON users;

-- Step 4: Create new SELECT policy using the helper functions
CREATE POLICY "Users can view profiles"
ON users FOR SELECT
TO authenticated
USING (
    id = auth.uid()
    OR id IN (SELECT get_classmate_ids(auth.uid()))
    OR id IN (SELECT get_teacher_student_ids(auth.uid()))
);

-- Step 5: Ensure UPDATE policy exists and is simple (no subqueries)
DROP POLICY IF EXISTS "Users can update own profile" ON users;

CREATE POLICY "Users can update own profile"
ON users FOR UPDATE
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Grant execute on the functions to authenticated users
GRANT EXECUTE ON FUNCTION get_classmate_ids(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION get_teacher_student_ids(UUID) TO authenticated;
