-- ============================================
-- Separate v2 (BKT/SR-based) classes from legacy v1 classes
-- ============================================
-- The new BKT + spaced-repetition tracking system needs its own class
-- and membership tables, distinct from the v1 `classes` / `class_members`
-- that drive the older streak-style word_mastery dashboards. Mixing them
-- would let a v1 class linkage silently expose the wrong tracking data
-- (or hide it). This migration:
--
--   1. Reverts the v1-table RLS additions made by migrations 038/039
--      (they assumed v2 was riding on v1's tables — wrong choice).
--   2. Creates v2_classes + v2_class_members for the new system.
--   3. Rewrites the teacher-side vocab_bkt RLS policy to use the new
--      tables, with a SECURITY DEFINER helper to avoid the kind of
--      recursion 038/039 hit.
--   4. Rewrites add_student_to_class_by_code() to operate on the new
--      tables.
--
-- v1 classes and v1 class_members are not touched — they keep working
-- exactly as they did for v1 dashboards.

-- ──────────────────────────────────────────────────────────
-- 1. Revert v1-table additions from migrations 038 and 039
-- ──────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Students can read classes they belong to" ON classes;
DROP POLICY IF EXISTS "Students can leave their own classes" ON class_members;
DROP FUNCTION IF EXISTS my_class_ids();

-- ──────────────────────────────────────────────────────────
-- 2. New tables
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS v2_classes (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_id  UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name        TEXT NOT NULL CHECK (length(name) > 0),
    type        TEXT NOT NULL CHECK (type IN (
                    'latin-prep','latin-gcse','latin-alevel',
                    'greek-gcse','greek-alevel',
                    'civ-gcse','civ-alevel'
                )),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_v2_classes_teacher
    ON v2_classes (teacher_id, created_at);

CREATE TABLE IF NOT EXISTS v2_class_members (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id   UUID NOT NULL REFERENCES v2_classes(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id)      ON DELETE CASCADE,
    added_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (class_id, student_id)
);

CREATE INDEX IF NOT EXISTS idx_v2_class_members_class
    ON v2_class_members (class_id);
CREATE INDEX IF NOT EXISTS idx_v2_class_members_student
    ON v2_class_members (student_id);

-- ──────────────────────────────────────────────────────────
-- 3. SECURITY DEFINER helpers (bypass RLS to avoid recursion)
-- ──────────────────────────────────────────────────────────

-- Class IDs the current user is a member of
CREATE OR REPLACE FUNCTION my_v2_class_ids() RETURNS SETOF UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
    SELECT class_id FROM v2_class_members WHERE student_id = auth.uid();
$$;

-- Student IDs the current user (as teacher) is allowed to see
CREATE OR REPLACE FUNCTION my_v2_students() RETURNS SETOF UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
    SELECT vcm.student_id
      FROM v2_class_members vcm
      JOIN v2_classes vc ON vc.id = vcm.class_id
     WHERE vc.teacher_id = auth.uid();
$$;

GRANT EXECUTE ON FUNCTION my_v2_class_ids() TO authenticated;
GRANT EXECUTE ON FUNCTION my_v2_students() TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 4. RLS — v2_classes
-- ──────────────────────────────────────────────────────────
ALTER TABLE v2_classes ENABLE ROW LEVEL SECURITY;

-- Teacher: full control over their own classes
DROP POLICY IF EXISTS "Teachers manage their v2 classes" ON v2_classes;
CREATE POLICY "Teachers manage their v2 classes"
ON v2_classes FOR ALL
TO authenticated
USING      (teacher_id = auth.uid())
WITH CHECK (teacher_id = auth.uid());

-- Student: can read classes they're a member of (for the profile page)
DROP POLICY IF EXISTS "Students read v2 classes they belong to" ON v2_classes;
CREATE POLICY "Students read v2 classes they belong to"
ON v2_classes FOR SELECT
TO authenticated
USING (id IN (SELECT my_v2_class_ids()));

-- ──────────────────────────────────────────────────────────
-- 5. RLS — v2_class_members
-- ──────────────────────────────────────────────────────────
ALTER TABLE v2_class_members ENABLE ROW LEVEL SECURITY;

-- Teacher: read/insert/delete members of their own classes
DROP POLICY IF EXISTS "Teachers read v2 class members" ON v2_class_members;
CREATE POLICY "Teachers read v2 class members"
ON v2_class_members FOR SELECT
TO authenticated
USING (
    class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
);

DROP POLICY IF EXISTS "Teachers add v2 class members" ON v2_class_members;
CREATE POLICY "Teachers add v2 class members"
ON v2_class_members FOR INSERT
TO authenticated
WITH CHECK (
    class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
);

DROP POLICY IF EXISTS "Teachers remove v2 class members" ON v2_class_members;
CREATE POLICY "Teachers remove v2 class members"
ON v2_class_members FOR DELETE
TO authenticated
USING (
    class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
);

-- Student: read their own rows (so the profile page can list "teachers
-- who can see me") and delete them (revoke access)
DROP POLICY IF EXISTS "Students read their own v2 memberships" ON v2_class_members;
CREATE POLICY "Students read their own v2 memberships"
ON v2_class_members FOR SELECT
TO authenticated
USING (student_id = auth.uid());

DROP POLICY IF EXISTS "Students leave their own v2 memberships" ON v2_class_members;
CREATE POLICY "Students leave their own v2 memberships"
ON v2_class_members FOR DELETE
TO authenticated
USING (student_id = auth.uid());

-- ──────────────────────────────────────────────────────────
-- 6. vocab_bkt teacher RLS — switch from v1 tables to v2 tables
-- ──────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Teachers read BKT for their class members" ON vocab_bkt;

CREATE POLICY "Teachers read BKT for their v2 class members"
ON vocab_bkt FOR SELECT
TO authenticated
USING (student_id IN (SELECT my_v2_students()));

-- ──────────────────────────────────────────────────────────
-- 7. Rewrite the add-by-code RPC to operate on v2 tables
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION add_student_to_class_by_code(
    p_class_id UUID,
    p_code     TEXT
) RETURNS JSONB
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_caller_id  UUID := auth.uid();
    v_teacher_id UUID;
    v_normalised TEXT;
    v_student    RECORD;
BEGIN
    IF v_caller_id IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'not_signed_in');
    END IF;

    SELECT teacher_id INTO v_teacher_id FROM v2_classes WHERE id = p_class_id;
    IF v_teacher_id IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'class_not_found');
    END IF;
    IF v_teacher_id <> v_caller_id THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'not_your_class');
    END IF;

    v_normalised := upper(regexp_replace(coalesce(p_code, ''), '\s+', '', 'g'));
    IF v_normalised = '' THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'empty_code');
    END IF;

    SELECT id, full_name, email
        INTO v_student
        FROM users
       WHERE share_code = v_normalised
         AND role = 'student';

    IF v_student.id IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'code_not_found');
    END IF;

    INSERT INTO v2_class_members (class_id, student_id)
    VALUES (p_class_id, v_student.id)
    ON CONFLICT DO NOTHING;

    RETURN jsonb_build_object(
        'ok',           true,
        'student_id',   v_student.id,
        'student_name', v_student.full_name,
        'student_email', v_student.email
    );
END;
$$;

GRANT EXECUTE ON FUNCTION add_student_to_class_by_code(UUID, TEXT) TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 8. Comments
-- ──────────────────────────────────────────────────────────
COMMENT ON TABLE v2_classes IS
'Classes for the v2 BKT/SR tracking system. Independent of the v1 `classes` table — v1 keeps working unchanged.';
COMMENT ON TABLE v2_class_members IS
'Membership rows for v2_classes. Created via add_student_to_class_by_code() RPC from share codes.';
