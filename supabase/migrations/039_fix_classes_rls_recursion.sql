-- ============================================
-- Fix infinite RLS recursion introduced in migration 038
-- ============================================
-- The "Students can read classes they belong to" policy on `classes`
-- had a subquery against `class_members`. That triggered RLS on
-- `class_members`, which already has a teacher-side policy that
-- subqueries against `classes` — and we were back. Postgres returned
-- 500 on any SELECT touching vocab_bkt (because its RLS has a
-- teacher-side policy that joins classes and class_members, so the
-- planner ends up walking the same recursive chain).
--
-- Fix: replace the recursive policy with one that uses a
-- SECURITY DEFINER function. The function runs with elevated
-- privileges, bypassing RLS on the lookup, so the cycle is broken.

DROP POLICY IF EXISTS "Students can read classes they belong to" ON classes;

CREATE OR REPLACE FUNCTION my_class_ids() RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT class_id FROM class_members WHERE student_id = auth.uid();
$$;

GRANT EXECUTE ON FUNCTION my_class_ids() TO authenticated;

CREATE POLICY "Students can read classes they belong to"
ON classes FOR SELECT
TO authenticated
USING (id IN (SELECT my_class_ids()));

COMMENT ON FUNCTION my_class_ids() IS
'Returns the class IDs the current user is a member of, bypassing RLS to avoid recursion when used inside policies on `classes`.';
