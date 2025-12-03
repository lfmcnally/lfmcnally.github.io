-- Migration: Comprehensive RLS fix for XP system and leaderboards
-- This ensures all necessary policies exist for:
-- 1. Users viewing classmates' profiles (for leaderboard)
-- 2. Users updating their own XP
-- 3. Users creating task_attempts
-- 4. Users viewing their own task_attempts

-- ============================================
-- USERS TABLE POLICIES
-- ============================================

-- Drop any existing policies to start fresh
DROP POLICY IF EXISTS "Users can view own profile" ON users;
DROP POLICY IF EXISTS "Users can view classmates profiles" ON users;
DROP POLICY IF EXISTS "Users can view profiles for leaderboards" ON users;
DROP POLICY IF EXISTS "Users can update own profile" ON users;

-- SELECT policy: View own profile and classmates' profiles
CREATE POLICY "Users can view profiles for leaderboards"
ON users FOR SELECT
TO authenticated
USING (
    id = auth.uid()
    OR
    id IN (
        SELECT cm2.student_id
        FROM class_members cm1
        JOIN class_members cm2 ON cm1.class_id = cm2.class_id
        WHERE cm1.student_id = auth.uid()
    )
    OR
    id IN (
        SELECT cm.student_id
        FROM classes c
        JOIN class_members cm ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
);

-- UPDATE policy: Users can update their own profile (needed for XP)
CREATE POLICY "Users can update own profile"
ON users FOR UPDATE
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- ============================================
-- TASK_ATTEMPTS TABLE POLICIES
-- ============================================

-- Check if RLS is enabled, if not enable it
ALTER TABLE task_attempts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can view own attempts" ON task_attempts;
DROP POLICY IF EXISTS "Users can create own attempts" ON task_attempts;
DROP POLICY IF EXISTS "Users can update own attempts" ON task_attempts;
DROP POLICY IF EXISTS "Students can view own attempts" ON task_attempts;
DROP POLICY IF EXISTS "Students can create attempts" ON task_attempts;
DROP POLICY IF EXISTS "Students can update own attempts" ON task_attempts;

-- SELECT: Users can view their own attempts
CREATE POLICY "Students can view own attempts"
ON task_attempts FOR SELECT
TO authenticated
USING (student_id = auth.uid());

-- INSERT: Users can create attempts for themselves
CREATE POLICY "Students can create attempts"
ON task_attempts FOR INSERT
TO authenticated
WITH CHECK (student_id = auth.uid());

-- UPDATE: Users can update their own attempts
CREATE POLICY "Students can update own attempts"
ON task_attempts FOR UPDATE
TO authenticated
USING (student_id = auth.uid())
WITH CHECK (student_id = auth.uid());

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_class_members_class_student
ON class_members(class_id, student_id);

CREATE INDEX IF NOT EXISTS idx_task_attempts_student
ON task_attempts(student_id);
