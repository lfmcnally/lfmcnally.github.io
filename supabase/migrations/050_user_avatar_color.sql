-- ============================================
-- User avatar colour
-- ============================================
-- Students (and teachers) can pick a colour for their initials avatar. It
-- shows in the nav account menu and — the point of this migration — on the
-- friends leaderboard, where every avatar was previously the same navy.
--
-- The colour is just a presentation choice, so it's a plain nullable column on
-- users (NULL = use the default navy). Self-update already works via the
-- existing "Users can update own profile" policy (migration 010); the only
-- server-side work here is surfacing the colour to friends through the two
-- friend RPCs, which return aggregates a friend is allowed to see.

-- ──────────────────────────────────────────────────────────
-- 1. Column — a #RRGGBB hex string, or NULL for the default.
-- ──────────────────────────────────────────────────────────
ALTER TABLE users
    ADD COLUMN IF NOT EXISTS avatar_color TEXT
    CHECK (avatar_color IS NULL OR avatar_color ~ '^#[0-9A-Fa-f]{6}$');

COMMENT ON COLUMN users.avatar_color IS
'Optional hex colour (#RRGGBB) for the user''s initials avatar, shown in the nav and on the friends leaderboard. NULL = default.';

-- ──────────────────────────────────────────────────────────
-- 2. list_friends() — add avatar_color. RETURNS TABLE signature changes, so
--    the function must be dropped and recreated rather than replaced.
-- ──────────────────────────────────────────────────────────
DROP FUNCTION IF EXISTS list_friends();
CREATE FUNCTION list_friends() RETURNS TABLE (
    friend_id    UUID,
    full_name    TEXT,
    avatar_color TEXT,
    created_at   TIMESTAMPTZ
)
LANGUAGE sql STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT u.id,
           u.full_name,
           u.avatar_color,
           f.created_at
      FROM v2_friendships f
      JOIN users u
        ON u.id = CASE WHEN f.user_low = auth.uid() THEN f.user_high ELSE f.user_low END
     WHERE f.user_low = auth.uid() OR f.user_high = auth.uid()
     ORDER BY u.full_name NULLS LAST;
$$;

GRANT EXECUTE ON FUNCTION list_friends() TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 3. get_friend_scores() — add avatar_color alongside the per-person name.
-- ──────────────────────────────────────────────────────────
DROP FUNCTION IF EXISTS get_friend_scores();
CREATE FUNCTION get_friend_scores() RETURNS TABLE (
    student_id      UUID,
    full_name       TEXT,
    avatar_color    TEXT,
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
           u.avatar_color,
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
     GROUP BY b.student_id, u.full_name, u.avatar_color, b.vocab_list;
$$;

GRANT EXECUTE ON FUNCTION get_friend_scores() TO authenticated;
