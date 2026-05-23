-- ============================================
-- User share codes — teacher-driven class enrolment
-- ============================================
-- Each user gets a short, unguessable share_code on their profile. To let a
-- teacher see their progress, the student gives the teacher their code, and
-- the teacher pastes it into the "Add students" form on their class. The
-- student never has to "join" anything — the code is the consent.
--
-- This migration:
--   1. Adds users.share_code (UNIQUE, NOT NULL after backfill)
--   2. Provides generate_share_code() — random ABCD-1234 format, no
--      confusable chars (I, O, S, Z, 0, 1)
--   3. Backfills codes for existing users
--   4. Adds a BEFORE INSERT trigger so new users get a code automatically
--   5. Exposes two SECURITY DEFINER RPCs:
--        regenerate_share_code()         — student rotates their own code
--        add_student_to_class_by_code()  — teacher adds a student
--   6. Tightens RLS:
--        - students can SELECT classes they're a member of (to list their
--          teachers on the profile page)
--        - students can DELETE their own class_members rows (revoke access)

-- ──────────────────────────────────────────────────────────
-- 1. share_code column
-- ──────────────────────────────────────────────────────────
ALTER TABLE users
    ADD COLUMN IF NOT EXISTS share_code TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_share_code
    ON users (share_code) WHERE share_code IS NOT NULL;

-- ──────────────────────────────────────────────────────────
-- 2. Code generator. ABCD-1234 — 22 letters × 8 digits each position,
--    giving ~22^4 × 8^4 ≈ 1 billion combinations. Skips visually confusable
--    characters (I, O, S, Z, 0, 1) so codes read cleanly aloud.
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION generate_share_code() RETURNS TEXT
LANGUAGE plpgsql VOLATILE AS $$
DECLARE
    letters CONSTANT TEXT := 'ABCDEFGHJKLMNPQRTUVWXY';  -- 22 chars, no I O S Z
    digits  CONSTANT TEXT := '23456789';                -- 8 chars, no 0 1
    out_code TEXT := '';
    i INT;
BEGIN
    FOR i IN 1..4 LOOP
        out_code := out_code || substr(letters, floor(random() * length(letters))::int + 1, 1);
    END LOOP;
    out_code := out_code || '-';
    FOR i IN 1..4 LOOP
        out_code := out_code || substr(digits, floor(random() * length(digits))::int + 1, 1);
    END LOOP;
    RETURN out_code;
END;
$$;

CREATE OR REPLACE FUNCTION generate_unique_share_code() RETURNS TEXT
LANGUAGE plpgsql VOLATILE AS $$
DECLARE
    candidate TEXT;
    attempts INT := 0;
BEGIN
    LOOP
        candidate := generate_share_code();
        IF NOT EXISTS (SELECT 1 FROM users WHERE share_code = candidate) THEN
            RETURN candidate;
        END IF;
        attempts := attempts + 1;
        IF attempts > 100 THEN
            RAISE EXCEPTION 'Could not generate a unique share code after 100 attempts';
        END IF;
    END LOOP;
END;
$$;

-- ──────────────────────────────────────────────────────────
-- 3. Backfill existing users
-- ──────────────────────────────────────────────────────────
DO $$
DECLARE
    u RECORD;
BEGIN
    FOR u IN SELECT id FROM users WHERE share_code IS NULL LOOP
        UPDATE users SET share_code = generate_unique_share_code() WHERE id = u.id;
    END LOOP;
END $$;

ALTER TABLE users ALTER COLUMN share_code SET NOT NULL;

-- ──────────────────────────────────────────────────────────
-- 4. Auto-assign on insert
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION assign_share_code_on_insert() RETURNS TRIGGER
LANGUAGE plpgsql AS $$
BEGIN
    IF NEW.share_code IS NULL OR NEW.share_code = '' THEN
        NEW.share_code := generate_unique_share_code();
    END IF;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS users_assign_share_code ON users;
CREATE TRIGGER users_assign_share_code
BEFORE INSERT ON users
FOR EACH ROW
EXECUTE FUNCTION assign_share_code_on_insert();

-- ──────────────────────────────────────────────────────────
-- 5. RPC: regenerate the current user's code (rotates if leaked)
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION regenerate_share_code() RETURNS TEXT
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    new_code TEXT;
BEGIN
    IF auth.uid() IS NULL THEN
        RAISE EXCEPTION 'Must be signed in';
    END IF;
    new_code := generate_unique_share_code();
    UPDATE users SET share_code = new_code WHERE id = auth.uid();
    RETURN new_code;
END;
$$;

GRANT EXECUTE ON FUNCTION regenerate_share_code() TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 6. RPC: teacher adds a student to a class via code.
-- Returns a JSONB result so the UI can show "Added X" or a clean error.
-- Caller must own the class; otherwise nothing happens. Code lookup is
-- case-insensitive and ignores whitespace, so students can quote their
-- code however they like.
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

    -- Caller must own the class
    SELECT teacher_id INTO v_teacher_id FROM classes WHERE id = p_class_id;
    IF v_teacher_id IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'class_not_found');
    END IF;
    IF v_teacher_id <> v_caller_id THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'not_your_class');
    END IF;

    -- Normalise the supplied code (uppercase, strip whitespace)
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

    -- Insert (or no-op if already a member)
    INSERT INTO class_members (class_id, student_id)
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
-- 7. RLS so students can list/leave their classes
-- ──────────────────────────────────────────────────────────

-- Students can read classes they're a member of (for the profile page's
-- "teachers who can see your progress" list).
DROP POLICY IF EXISTS "Students can read classes they belong to" ON classes;
CREATE POLICY "Students can read classes they belong to"
ON classes FOR SELECT
TO authenticated
USING (
    id IN (
        SELECT class_id FROM class_members WHERE student_id = auth.uid()
    )
);

-- Students can remove themselves from a class (revoke a teacher's access).
DROP POLICY IF EXISTS "Students can leave their own classes" ON class_members;
CREATE POLICY "Students can leave their own classes"
ON class_members FOR DELETE
TO authenticated
USING (student_id = auth.uid());

-- ──────────────────────────────────────────────────────────
-- 8. Comments
-- ──────────────────────────────────────────────────────────
COMMENT ON COLUMN users.share_code IS
'Short, unguessable ABCD-1234 code. Students give this to teachers to enrol on a class. Rotatable via regenerate_share_code().';

COMMENT ON FUNCTION add_student_to_class_by_code(UUID, TEXT) IS
'Teacher-side: enrol a student in one of your own classes by their share_code. Returns {ok, student_id?, student_name?, reason?}.';
