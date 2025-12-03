-- Migration: Fix class_members RLS without recursion
-- The previous approach caused infinite recursion

-- First, drop any problematic policies
DROP POLICY IF EXISTS "Students can view classmates" ON class_members;

-- For class_members, we need a simple non-recursive policy
-- Students should be able to see all members of classes they're in
-- But we can't reference class_members in its own policy

-- Option 1: Allow all authenticated users to see class_members
-- This is safe because class_members only contains (class_id, student_id) pairs
-- The actual sensitive data (names, emails) is protected by users table RLS
CREATE POLICY "Authenticated users can view class memberships"
ON class_members FOR SELECT
TO authenticated
USING (true);

-- The users table RLS still protects the actual profile data
-- Only classmates can see each other's profiles via the users policy
