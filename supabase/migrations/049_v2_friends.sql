-- ============================================
-- Student friends — share codes between students to compare progress
-- ============================================
-- Students already have an unguessable share_code (migration 038) which they
-- give to a teacher to be enrolled on a class. This migration lets a student
-- give that same code to *another student* to become "friends" — a mutual,
-- consent-based link that lets each see the other's aggregate scores (secure
-- words, accuracy) on a comparison page. The code is the consent: you can only
-- friend someone whose code you've been given.
--
-- This migration:
--   1. Creates v2_friendships (canonical low/high pair, unique per pair)
--   2. RLS so each party can read/delete their own friendship rows
--   3. SECURITY DEFINER helper my_friend_ids()
--   4. RPCs:
--        add_friend_by_code(code)  — create a mutual friendship from a code
--        list_friends()            — names of your friends (no codes exposed)
--        remove_friend(friend_id)  — unfriend (either party may)
--        get_friend_scores()       — aggregate scores for you + your friends,
--                                    per vocab_list, for the comparison view.
--                                    Returns only aggregates — never another
--                                    student's per-word data.
--
-- Friendships are deliberately separate from classes: a friend is a peer, not
-- a teacher, and gets only coarse aggregates rather than the full per-word map
-- a teacher sees for their class members.

-- ──────────────────────────────────────────────────────────
-- 1. Table — canonical ordering (user_low < user_high) so a pair is unique
--    regardless of who added whom.
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS v2_friendships (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_low    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    user_high   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_by  UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (user_low < user_high),
    UNIQUE (user_low, user_high)
);

CREATE INDEX IF NOT EXISTS idx_v2_friendships_low  ON v2_friendships (user_low);
CREATE INDEX IF NOT EXISTS idx_v2_friendships_high ON v2_friendships (user_high);

-- ──────────────────────────────────────────────────────────
-- 2. RLS — each party can read and delete (revoke) their own friendships.
--    INSERT is intentionally NOT granted: the only way to create a friendship
--    is the add_friend_by_code() RPC, which proves the caller holds the
--    friend's share code (the consent).
-- ──────────────────────────────────────────────────────────
ALTER TABLE v2_friendships ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Read own friendships" ON v2_friendships;
CREATE POLICY "Read own friendships"
ON v2_friendships FOR SELECT
TO authenticated
USING (user_low = auth.uid() OR user_high = auth.uid());

DROP POLICY IF EXISTS "Delete own friendships" ON v2_friendships;
CREATE POLICY "Delete own friendships"
ON v2_friendships FOR DELETE
TO authenticated
USING (user_low = auth.uid() OR user_high = auth.uid());

-- ──────────────────────────────────────────────────────────
-- 3. Helper — the user ids of the caller's friends (the *other* side of each
--    of their friendship rows). SECURITY DEFINER so it can be used inside
--    other definer functions without tripping RLS recursion.
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION my_friend_ids() RETURNS SETOF UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
    SELECT user_high FROM v2_friendships WHERE user_low  = auth.uid()
    UNION
    SELECT user_low  FROM v2_friendships WHERE user_high = auth.uid();
$$;

GRANT EXECUTE ON FUNCTION my_friend_ids() TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 4. RPC: add a friend by their share code. Mutual on creation — both can
--    then see each other's scores. Code lookup is case-insensitive and
--    whitespace-tolerant, matching add_student_to_class_by_code().
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION add_friend_by_code(p_code TEXT) RETURNS JSONB
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_caller     UUID := auth.uid();
    v_normalised TEXT;
    v_friend     RECORD;
    v_low        UUID;
    v_high       UUID;
BEGIN
    IF v_caller IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'not_signed_in');
    END IF;

    v_normalised := upper(regexp_replace(coalesce(p_code, ''), '\s+', '', 'g'));
    IF v_normalised = '' THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'empty_code');
    END IF;

    SELECT id, full_name, email
        INTO v_friend
        FROM users
       WHERE share_code = v_normalised
         AND role = 'student';

    IF v_friend.id IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'code_not_found');
    END IF;

    IF v_friend.id = v_caller THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'self');
    END IF;

    IF v_caller < v_friend.id THEN
        v_low := v_caller;    v_high := v_friend.id;
    ELSE
        v_low := v_friend.id; v_high := v_caller;
    END IF;

    INSERT INTO v2_friendships (user_low, user_high, created_by)
    VALUES (v_low, v_high, v_caller)
    ON CONFLICT (user_low, user_high) DO NOTHING;

    RETURN jsonb_build_object(
        'ok',           true,
        'friend_id',    v_friend.id,
        'friend_name',  v_friend.full_name,
        'friend_email', v_friend.email
    );
END;
$$;

GRANT EXECUTE ON FUNCTION add_friend_by_code(TEXT) TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 5. RPC: list the caller's friends. Returns names only — never the friend's
--    own share code (which is theirs to give out, not yours).
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION list_friends() RETURNS TABLE (
    friend_id  UUID,
    full_name  TEXT,
    created_at TIMESTAMPTZ
)
LANGUAGE sql STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT u.id,
           u.full_name,
           f.created_at
      FROM v2_friendships f
      JOIN users u
        ON u.id = CASE WHEN f.user_low = auth.uid() THEN f.user_high ELSE f.user_low END
     WHERE f.user_low = auth.uid() OR f.user_high = auth.uid()
     ORDER BY u.full_name NULLS LAST;
$$;

GRANT EXECUTE ON FUNCTION list_friends() TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 6. RPC: remove a friend. Either party may do this. (The RLS DELETE policy
--    also allows it, but a single-arg RPC keeps the client simple and avoids
--    leaking the friendship row id.)
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION remove_friend(p_friend_id UUID) RETURNS JSONB
LANGUAGE plpgsql VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_caller UUID := auth.uid();
BEGIN
    IF v_caller IS NULL THEN
        RETURN jsonb_build_object('ok', false, 'reason', 'not_signed_in');
    END IF;

    DELETE FROM v2_friendships
     WHERE (user_low = v_caller AND user_high = p_friend_id)
        OR (user_high = v_caller AND user_low = p_friend_id);

    RETURN jsonb_build_object('ok', true);
END;
$$;

GRANT EXECUTE ON FUNCTION remove_friend(UUID) TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 7. RPC: aggregate scores for the caller + their friends, per vocab_list.
--    This is the heart of the comparison view. It returns ONLY aggregates
--    (secure count, words practised, trial/correct totals) so a friend never
--    sees another student's individual word-by-word data — unlike a teacher,
--    who does for their own class members.
--
--    "secure" mirrors the dashboard's definition: p_know >= 0.95 AND the word
--    has been answered correctly on at least 3 distinct days.
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION get_friend_scores() RETURNS TABLE (
    student_id      UUID,
    full_name       TEXT,
    is_self         BOOLEAN,
    vocab_list      TEXT,
    secure_count    BIGINT,
    words_practised BIGINT,
    total_trials    BIGINT,
    total_correct   BIGINT
)
LANGUAGE sql STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    WITH people AS (
        SELECT auth.uid() AS id
        UNION
        SELECT my_friend_ids()
    )
    SELECT b.student_id,
           u.full_name,
           (b.student_id = auth.uid()) AS is_self,
           b.vocab_list,
           COUNT(*) FILTER (
               WHERE b.p_know >= 0.95 AND COALESCE(b.distinct_correct_days, 0) >= 3
           )                                AS secure_count,
           COUNT(*) FILTER (WHERE b.trials > 0) AS words_practised,
           COALESCE(SUM(b.trials), 0)           AS total_trials,
           COALESCE(SUM(b.correct), 0)          AS total_correct
      FROM vocab_bkt b
      JOIN people p ON p.id = b.student_id
      JOIN users  u ON u.id = b.student_id
     GROUP BY b.student_id, u.full_name, b.vocab_list;
$$;

GRANT EXECUTE ON FUNCTION get_friend_scores() TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 8. Comments
-- ──────────────────────────────────────────────────────────
COMMENT ON TABLE v2_friendships IS
'Mutual student-to-student links created from share codes. Lets friends compare aggregate scores on the friends page. Separate from classes — a friend sees only coarse aggregates, never per-word data.';
COMMENT ON FUNCTION add_friend_by_code(TEXT) IS
'Create a mutual friendship from a friend''s share_code. Returns {ok, friend_id?, friend_name?, reason?}.';
COMMENT ON FUNCTION get_friend_scores() IS
'Aggregate scores (secure_count, words_practised, totals) per vocab_list for the caller and their friends. Aggregates only — no per-word leakage.';
