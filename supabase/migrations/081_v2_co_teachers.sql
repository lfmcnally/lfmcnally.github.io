-- ============================================
-- Co-teachers for v2 classes
-- ============================================
-- Migration 001 added co-teachers for the v1 `classes` tables, and 079 fixed
-- their RLS. But the live teacher dashboard is /version2/tracking/teacher.html,
-- which runs entirely on `v2_classes` / `v2_class_members` — and those never
-- had a co-teacher concept. This migration adds it.
--
-- Design: one new table (`v2_class_teachers`) plus a SECURITY DEFINER helper,
-- `my_v2_taught_class_ids()`, that returns classes the caller teaches whether
-- they own them or co-teach them. The existing teacher-side policies are then
-- rewritten in terms of that helper, so a co-teacher gets the same reach as
-- the owner over the day-to-day teaching tables.
--
-- Deliberately NOT shared with co-teachers (owner only):
--   * deleting the class
--   * adding or removing co-teachers
--   * changing who owns the class (enforced by a trigger, since an RLS
--     WITH CHECK cannot see the OLD row)
--
-- Safe to run more than once.

-- ──────────────────────────────────────────────────────────
-- 1. Table
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS v2_class_teachers (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id   UUID NOT NULL REFERENCES v2_classes(id) ON DELETE CASCADE,
    teacher_id UUID NOT NULL REFERENCES users(id)      ON DELETE CASCADE,
    added_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (class_id, teacher_id)
);

CREATE INDEX IF NOT EXISTS idx_v2_class_teachers_class
    ON v2_class_teachers (class_id);
CREATE INDEX IF NOT EXISTS idx_v2_class_teachers_teacher
    ON v2_class_teachers (teacher_id);

COMMENT ON TABLE v2_class_teachers IS
'Co-teachers of a v2 class. The owner stays in v2_classes.teacher_id; these are additional teachers who share the class.';

-- ──────────────────────────────────────────────────────────
-- 2. SECURITY DEFINER helpers
-- ──────────────────────────────────────────────────────────
-- Both bypass RLS, which is what stops a policy on v2_class_teachers (or on
-- v2_classes) from recursing into itself — the trap migration 039 and 079
-- had to dig the v1 tables out of.

CREATE OR REPLACE FUNCTION my_v2_coteach_class_ids() RETURNS SETOF UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
    SELECT class_id FROM v2_class_teachers WHERE teacher_id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION my_v2_taught_class_ids() RETURNS SETOF UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
    SELECT id       FROM v2_classes         WHERE teacher_id = auth.uid()
    UNION
    SELECT class_id FROM v2_class_teachers  WHERE teacher_id = auth.uid();
$$;

GRANT EXECUTE ON FUNCTION my_v2_coteach_class_ids() TO authenticated;
GRANT EXECUTE ON FUNCTION my_v2_taught_class_ids()  TO authenticated;

COMMENT ON FUNCTION my_v2_taught_class_ids() IS
'Class IDs the current user teaches, as owner or co-teacher. SECURITY DEFINER so it can be used inside policies without recursion.';

-- Every student the caller teaches — now counting co-taught classes.
-- This one redefinition is what gives co-teachers the tracking data:
-- vocab_bkt (040), vocab_sessions (041) and weekly test submissions (058)
-- all gate on it already.
CREATE OR REPLACE FUNCTION my_v2_students() RETURNS SETOF UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
    SELECT vcm.student_id
      FROM v2_class_members vcm
     WHERE vcm.class_id IN (
            SELECT id       FROM v2_classes        WHERE teacher_id = auth.uid()
            UNION
            SELECT class_id FROM v2_class_teachers WHERE teacher_id = auth.uid()
           );
$$;

-- ──────────────────────────────────────────────────────────
-- 3. RLS — v2_class_teachers
-- ──────────────────────────────────────────────────────────
ALTER TABLE v2_class_teachers ENABLE ROW LEVEL SECURITY;

-- Read: the class owner sees the whole list; a co-teacher sees their own row
-- and their colleagues on classes they co-teach.
DROP POLICY IF EXISTS "Teachers read v2 co-teachers" ON v2_class_teachers;
CREATE POLICY "Teachers read v2 co-teachers"
ON v2_class_teachers FOR SELECT
TO authenticated
USING (
    teacher_id = auth.uid()
    OR class_id IN (SELECT my_v2_taught_class_ids())
);

-- Write: owner only.
DROP POLICY IF EXISTS "Owners add v2 co-teachers" ON v2_class_teachers;
CREATE POLICY "Owners add v2 co-teachers"
ON v2_class_teachers FOR INSERT
TO authenticated
WITH CHECK (
    class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
);

DROP POLICY IF EXISTS "Owners remove v2 co-teachers" ON v2_class_teachers;
CREATE POLICY "Owners remove v2 co-teachers"
ON v2_class_teachers FOR DELETE
TO authenticated
USING (
    class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
);

GRANT ALL ON v2_class_teachers TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 4. v2_classes — co-teachers read and update, never reassign or delete
-- ──────────────────────────────────────────────────────────
-- The owner keeps the FOR ALL policy from 040. These add the co-teacher side.
DROP POLICY IF EXISTS "Co-teachers read v2 classes they teach" ON v2_classes;
CREATE POLICY "Co-teachers read v2 classes they teach"
ON v2_classes FOR SELECT
TO authenticated
USING (id IN (SELECT my_v2_coteach_class_ids()));

-- Weekly goal, grammar chapter and course selection are ordinary teaching
-- settings, so co-teachers get UPDATE. Ownership is protected by the trigger
-- below rather than by WITH CHECK, which cannot compare against the OLD row.
DROP POLICY IF EXISTS "Co-teachers update v2 classes they teach" ON v2_classes;
CREATE POLICY "Co-teachers update v2 classes they teach"
ON v2_classes FOR UPDATE
TO authenticated
USING      (id IN (SELECT my_v2_coteach_class_ids()))
WITH CHECK (id IN (SELECT my_v2_coteach_class_ids()));

CREATE OR REPLACE FUNCTION v2_classes_guard_owner() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
    -- auth.uid() is NULL for the service role and for SQL-editor work, which
    -- must stay able to move a class between teachers.
    IF auth.uid() IS NOT NULL
       AND NEW.teacher_id IS DISTINCT FROM OLD.teacher_id
       AND OLD.teacher_id IS DISTINCT FROM auth.uid() THEN
        RAISE EXCEPTION 'Only the class owner can transfer a class to another teacher';
    END IF;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_v2_classes_guard_owner ON v2_classes;
CREATE TRIGGER trg_v2_classes_guard_owner
BEFORE UPDATE ON v2_classes
FOR EACH ROW EXECUTE FUNCTION v2_classes_guard_owner();

COMMENT ON FUNCTION v2_classes_guard_owner() IS
'Stops a co-teacher reassigning v2_classes.teacher_id to themselves. RLS alone cannot express this, as WITH CHECK never sees the OLD row.';

-- ──────────────────────────────────────────────────────────
-- 5. v2_class_members — co-teachers manage the roll
-- ──────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Teachers read v2 class members" ON v2_class_members;
CREATE POLICY "Teachers read v2 class members"
ON v2_class_members FOR SELECT
TO authenticated
USING (class_id IN (SELECT my_v2_taught_class_ids()));

DROP POLICY IF EXISTS "Teachers add v2 class members" ON v2_class_members;
CREATE POLICY "Teachers add v2 class members"
ON v2_class_members FOR INSERT
TO authenticated
WITH CHECK (class_id IN (SELECT my_v2_taught_class_ids()));

DROP POLICY IF EXISTS "Teachers remove v2 class members" ON v2_class_members;
CREATE POLICY "Teachers remove v2 class members"
ON v2_class_members FOR DELETE
TO authenticated
USING (class_id IN (SELECT my_v2_taught_class_ids()));

-- ──────────────────────────────────────────────────────────
-- 6. The per-class teaching tables
-- ──────────────────────────────────────────────────────────
-- Each was "class_id IN (SELECT id FROM v2_classes WHERE teacher_id =
-- auth.uid())". Guarded by to_regclass so this migration still applies on a
-- database that hasn't run every optional feature migration.
DO $$
BEGIN
    IF to_regclass('public.v2_do_now') IS NOT NULL THEN
        DROP POLICY IF EXISTS "Teachers manage do now for their classes" ON v2_do_now;
        CREATE POLICY "Teachers manage do now for their classes"
        ON v2_do_now FOR ALL TO authenticated
        USING      (class_id IN (SELECT my_v2_taught_class_ids()))
        WITH CHECK (class_id IN (SELECT my_v2_taught_class_ids()));
    END IF;

    IF to_regclass('public.v2_do_now_archive') IS NOT NULL THEN
        DROP POLICY IF EXISTS "Teachers manage do now archive for their classes" ON v2_do_now_archive;
        CREATE POLICY "Teachers manage do now archive for their classes"
        ON v2_do_now_archive FOR ALL TO authenticated
        USING      (class_id IN (SELECT my_v2_taught_class_ids()))
        WITH CHECK (class_id IN (SELECT my_v2_taught_class_ids()));
    END IF;

    IF to_regclass('public.v2_do_now_game') IS NOT NULL THEN
        DROP POLICY IF EXISTS "Teachers manage game scores for their classes" ON v2_do_now_game;
        CREATE POLICY "Teachers manage game scores for their classes"
        ON v2_do_now_game FOR ALL TO authenticated
        USING      (class_id IN (SELECT my_v2_taught_class_ids()))
        WITH CHECK (class_id IN (SELECT my_v2_taught_class_ids()));
    END IF;

    IF to_regclass('public.v2_assignments') IS NOT NULL THEN
        DROP POLICY IF EXISTS "Teachers manage their class assignments" ON v2_assignments;
        CREATE POLICY "Teachers manage their class assignments"
        ON v2_assignments FOR ALL TO authenticated
        USING      (class_id IN (SELECT my_v2_taught_class_ids()))
        WITH CHECK (class_id IN (SELECT my_v2_taught_class_ids()));
    END IF;
END $$;

-- Resource-bank assignments keep their entitlement check from migration 067;
-- only the ownership half widens to co-teachers.
DO $$
BEGIN
    IF to_regclass('public.bank_class_assignments') IS NOT NULL
       AND to_regprocedure('public.can_manage_bank()') IS NOT NULL
       AND to_regprocedure('public.can_self_serve_bank()') IS NOT NULL THEN
        DROP POLICY IF EXISTS "Teachers manage their class bank assignments" ON bank_class_assignments;
        DROP POLICY IF EXISTS "Entitled teachers manage class bank assignments" ON bank_class_assignments;
        CREATE POLICY "Entitled teachers manage class bank assignments"
        ON bank_class_assignments FOR ALL TO authenticated
        USING      (class_id IN (SELECT my_v2_taught_class_ids())
                    AND (public.can_manage_bank() OR public.can_self_serve_bank()))
        WITH CHECK (class_id IN (SELECT my_v2_taught_class_ids())
                    AND (public.can_manage_bank() OR public.can_self_serve_bank()));
    END IF;
END $$;

-- ──────────────────────────────────────────────────────────
-- 7. Weekly tests — a co-teacher sees and runs the class's tests
-- ──────────────────────────────────────────────────────────
-- weekly_tests.teacher_id records who wrote the test; the class it belongs to
-- is what decides who may run it.
DO $$
BEGIN
    IF to_regclass('public.weekly_tests') IS NULL THEN RETURN; END IF;

    DROP POLICY IF EXISTS "Teachers manage their weekly tests" ON weekly_tests;
    CREATE POLICY "Teachers manage their weekly tests"
    ON weekly_tests FOR ALL TO authenticated
    USING      (teacher_id = auth.uid() OR class_id IN (SELECT my_v2_taught_class_ids()))
    WITH CHECK (teacher_id = auth.uid() OR class_id IN (SELECT my_v2_taught_class_ids()));

    DROP POLICY IF EXISTS "Teachers manage their questions" ON weekly_test_questions;
    CREATE POLICY "Teachers manage their questions"
    ON weekly_test_questions FOR ALL TO authenticated
    USING      (test_id IN (SELECT id FROM weekly_tests
                             WHERE teacher_id = auth.uid()
                                OR class_id IN (SELECT my_v2_taught_class_ids())))
    WITH CHECK (test_id IN (SELECT id FROM weekly_tests
                             WHERE teacher_id = auth.uid()
                                OR class_id IN (SELECT my_v2_taught_class_ids())));

    IF to_regclass('public.weekly_test_mark_schemes') IS NOT NULL THEN
        DROP POLICY IF EXISTS "Teachers manage their mark schemes" ON weekly_test_mark_schemes;
        CREATE POLICY "Teachers manage their mark schemes"
        ON weekly_test_mark_schemes FOR ALL TO authenticated
        USING (question_id IN (
            SELECT q.id FROM weekly_test_questions q
              JOIN weekly_tests t ON t.id = q.test_id
             WHERE t.teacher_id = auth.uid()
                OR t.class_id IN (SELECT my_v2_taught_class_ids())))
        WITH CHECK (question_id IN (
            SELECT q.id FROM weekly_test_questions q
              JOIN weekly_tests t ON t.id = q.test_id
             WHERE t.teacher_id = auth.uid()
                OR t.class_id IN (SELECT my_v2_taught_class_ids())));
    END IF;
END $$;

-- ──────────────────────────────────────────────────────────
-- 8. Grammar nugget events — same widening as vocab_bkt got via my_v2_students()
-- ──────────────────────────────────────────────────────────
DO $$
BEGIN
    IF to_regclass('public.student_nugget_events') IS NOT NULL THEN
        DROP POLICY IF EXISTS "Teachers read nugget events for their class members" ON student_nugget_events;
        CREATE POLICY "Teachers read nugget events for their class members"
        ON student_nugget_events FOR SELECT TO authenticated
        USING (student_id IN (SELECT my_v2_students()));
    END IF;
END $$;
