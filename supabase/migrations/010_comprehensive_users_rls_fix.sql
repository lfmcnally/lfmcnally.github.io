-- Migration: Comprehensive fix for users table RLS
-- This completely resets the users table policies to avoid any recursion issues

-- Step 1: Drop ALL existing policies on users table
DO $$
DECLARE
    pol RECORD;
BEGIN
    FOR pol IN
        SELECT policyname
        FROM pg_policies
        WHERE tablename = 'users' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON users', pol.policyname);
        RAISE NOTICE 'Dropped policy: %', pol.policyname;
    END LOOP;
END $$;

-- Step 2: Create simple, non-recursive policies
-- For SELECT: Allow authenticated users to see all user profiles
-- This is safe because the users table only contains non-sensitive profile data
-- (name, emoji, tag, xp - no passwords, emails are in auth.users)
CREATE POLICY "Authenticated users can view profiles"
ON users FOR SELECT
TO authenticated
USING (true);

-- For UPDATE: Users can only update their own profile
CREATE POLICY "Users can update own profile"
ON users FOR UPDATE
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- For INSERT: Users can only insert their own profile (for new user creation)
CREATE POLICY "Users can insert own profile"
ON users FOR INSERT
TO authenticated
WITH CHECK (id = auth.uid());

-- Step 3: Drop the helper functions if they exist (no longer needed)
DROP FUNCTION IF EXISTS get_classmate_ids(UUID);
DROP FUNCTION IF EXISTS get_teacher_student_ids(UUID);

-- Step 4: Ensure RLS is enabled
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
