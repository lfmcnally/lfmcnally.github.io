-- ============================================
-- Fix the co-teacher policies so adding a co-teacher works again
-- ============================================
-- Migration 001 gave `class_teachers` a SELECT policy whose USING clause
-- subqueries `class_teachers` itself ("or the user is a co-teacher of this
-- class"). That subquery re-triggers RLS on the same table, so Postgres
-- rejects every read of the table with
--   42P17: infinite recursion detected in policy for relation "class_teachers"
-- which takes out the co-teacher list in class settings AND the co-taught
-- half of the teacher dashboard's class list.
--
-- Fix: same pattern as migration 039 — do the lookup in a SECURITY DEFINER
-- function, which runs with RLS bypassed and breaks the cycle.
--
-- While we're here: a co-teacher also needs to be able to READ the class
-- row itself, otherwise `class_teachers -> classes(*)` comes back empty and
-- the class never appears in their sidebar.

CREATE OR REPLACE FUNCTION my_coteaching_class_ids() RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT class_id FROM class_teachers WHERE teacher_id = auth.uid();
$$;

GRANT EXECUTE ON FUNCTION my_coteaching_class_ids() TO authenticated;

COMMENT ON FUNCTION my_coteaching_class_ids() IS
'Returns the class IDs the current user co-teaches, bypassing RLS to avoid recursion when used inside policies on `class_teachers`.';

-- ── class_teachers: non-recursive SELECT ───
DROP POLICY IF EXISTS "Teachers can view co-teachers of their classes" ON class_teachers;

CREATE POLICY "Teachers can view co-teachers of their classes"
ON class_teachers FOR SELECT
TO authenticated
USING (
    -- The row is the user's own co-teaching entry
    teacher_id = auth.uid()
    OR
    -- The user owns the class
    EXISTS (
        SELECT 1 FROM classes
        WHERE classes.id = class_teachers.class_id
        AND classes.teacher_id = auth.uid()
    )
    OR
    -- The user co-teaches the class (resolved without re-entering RLS)
    class_id IN (SELECT my_coteaching_class_ids())
);

-- ── classes: let co-teachers read the classes they co-teach ───
DROP POLICY IF EXISTS "Co-teachers can read classes they co-teach" ON classes;

CREATE POLICY "Co-teachers can read classes they co-teach"
ON classes FOR SELECT
TO authenticated
USING (id IN (SELECT my_coteaching_class_ids()));
