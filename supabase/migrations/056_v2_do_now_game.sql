-- ============================================
-- Do Now: Game Mode ("Gold Rush") — XP + chests
-- ============================================
-- Layers a Blooket-style game on top of the existing per-class Do Now.
-- A teacher launches game mode for the class's current Do Now; students answer
-- in the game page, earn XP, and every few correct answers open a random chest
-- whose effects can help or hurt — including effects that touch OTHER players
-- (swap totals, steal from the leader). Those cross-player effects can't be
-- done with normal RLS (a student may not write a classmate's row), so they run
-- in SECURITY DEFINER RPCs that are authoritative about which effect fires.
--
-- Builds on v2_classes / v2_class_members (040), v2_do_now (042), and the
-- my_v2_class_ids() helper (040).

-- ──────────────────────────────────────────────────────────
-- 1. Game state on the existing Do Now row
-- ──────────────────────────────────────────────────────────
ALTER TABLE v2_do_now ADD COLUMN IF NOT EXISTS game_active     BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE v2_do_now ADD COLUMN IF NOT EXISTS game_started_at TIMESTAMPTZ;

-- ──────────────────────────────────────────────────────────
-- 2. Per-student score table (one row per student per class)
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS v2_do_now_game (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id     UUID NOT NULL REFERENCES v2_classes(id) ON DELETE CASCADE,
    student_id   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    display_name TEXT,
    xp           INTEGER NOT NULL DEFAULT 0,
    joined_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (class_id, student_id)
);
CREATE INDEX IF NOT EXISTS idx_v2_do_now_game_class ON v2_do_now_game (class_id);

ALTER TABLE v2_do_now_game ENABLE ROW LEVEL SECURITY;

-- Students read every row for their classes (the live leaderboard).
DROP POLICY IF EXISTS "Students read game scores for their classes" ON v2_do_now_game;
CREATE POLICY "Students read game scores for their classes"
ON v2_do_now_game FOR SELECT TO authenticated
USING (class_id IN (SELECT my_v2_class_ids()));

-- Students may create / update only their OWN row (earning XP on their own).
DROP POLICY IF EXISTS "Students insert their own game score" ON v2_do_now_game;
CREATE POLICY "Students insert their own game score"
ON v2_do_now_game FOR INSERT TO authenticated
WITH CHECK (student_id = auth.uid() AND class_id IN (SELECT my_v2_class_ids()));

DROP POLICY IF EXISTS "Students update their own game score" ON v2_do_now_game;
CREATE POLICY "Students update their own game score"
ON v2_do_now_game FOR UPDATE TO authenticated
USING (student_id = auth.uid()) WITH CHECK (student_id = auth.uid());

-- Teachers manage scores for classes they own (read live + reset on launch).
DROP POLICY IF EXISTS "Teachers manage game scores for their classes" ON v2_do_now_game;
CREATE POLICY "Teachers manage game scores for their classes"
ON v2_do_now_game FOR ALL TO authenticated
USING      (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()))
WITH CHECK (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()));

-- Live leaderboard needs realtime change events.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'v2_do_now_game'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE v2_do_now_game;
  END IF;
END $$;

-- ──────────────────────────────────────────────────────────
-- 3. Helpers (internal)
-- ──────────────────────────────────────────────────────────
-- Is the caller a member of this class, and is a game live for it?
CREATE OR REPLACE FUNCTION _dng_can_play(p_class_id UUID)
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM v2_class_members WHERE class_id = p_class_id AND student_id = auth.uid())
     AND EXISTS (SELECT 1 FROM v2_do_now WHERE class_id = p_class_id AND game_active = TRUE);
$$;

-- ──────────────────────────────────────────────────────────
-- 4. Student RPC — "is a game running for me?"
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION get_my_do_now_game()
RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
DECLARE v RECORD;
BEGIN
  SELECT dn.class_id, c.name AS class_name, dn.vocab_list, dn.topic_id,
         dn.subtopics, dn.game_started_at
    INTO v
    FROM v2_do_now dn
    JOIN v2_classes c ON c.id = dn.class_id
   WHERE dn.game_active = TRUE
     AND dn.class_id IN (SELECT class_id FROM v2_class_members WHERE student_id = auth.uid())
   ORDER BY dn.game_started_at DESC NULLS LAST
   LIMIT 1;

  IF NOT FOUND THEN RETURN jsonb_build_object('ok', false); END IF;

  RETURN jsonb_build_object(
    'ok', true, 'class_id', v.class_id, 'class_name', v.class_name,
    'vocab_list', v.vocab_list, 'topic_id', v.topic_id, 'subtopics', v.subtopics,
    'game_started_at', v.game_started_at
  );
END;
$$;
GRANT EXECUTE ON FUNCTION get_my_do_now_game() TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 5. Student RPC — join (idempotent; keeps XP if already in)
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION do_now_game_join(p_class_id UUID)
RETURNS JSONB
LANGUAGE plpgsql VOLATILE SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_name TEXT; v_xp INTEGER;
BEGIN
  IF NOT _dng_can_play(p_class_id) THEN RETURN jsonb_build_object('ok', false, 'reason', 'no_game'); END IF;
  SELECT COALESCE(full_name, email, 'Player') INTO v_name FROM users WHERE id = auth.uid();
  INSERT INTO v2_do_now_game (class_id, student_id, display_name, xp)
  VALUES (p_class_id, auth.uid(), v_name, 0)
  ON CONFLICT (class_id, student_id) DO UPDATE SET display_name = EXCLUDED.display_name
  RETURNING xp INTO v_xp;
  RETURN jsonb_build_object('ok', true, 'xp', v_xp);
END;
$$;
GRANT EXECUTE ON FUNCTION do_now_game_join(UUID) TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 6. Student RPC — earn XP for a correct answer (clamped)
-- ──────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION do_now_game_earn(p_class_id UUID, p_xp INTEGER)
RETURNS JSONB
LANGUAGE plpgsql VOLATILE SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_xp INTEGER; v_add INTEGER;
BEGIN
  IF NOT _dng_can_play(p_class_id) THEN RETURN jsonb_build_object('ok', false, 'reason', 'no_game'); END IF;
  v_add := GREATEST(0, LEAST(p_xp, 500));   -- clamp to a sane per-answer range
  UPDATE v2_do_now_game SET xp = xp + v_add, updated_at = NOW()
   WHERE class_id = p_class_id AND student_id = auth.uid()
   RETURNING xp INTO v_xp;
  IF NOT FOUND THEN
    INSERT INTO v2_do_now_game (class_id, student_id, display_name, xp)
    VALUES (p_class_id, auth.uid(), (SELECT COALESCE(full_name, email, 'Player') FROM users WHERE id = auth.uid()), v_add)
    RETURNING xp INTO v_xp;
  END IF;
  RETURN jsonb_build_object('ok', true, 'xp', v_xp);
END;
$$;
GRANT EXECUTE ON FUNCTION do_now_game_earn(UUID, INTEGER) TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 7. Student RPC — open a chest (server picks the effect)
-- ──────────────────────────────────────────────────────────
-- Returns { ok, effect, delta, target_name, your_xp }. Cross-player effects
-- (swap, steal) fall back to a small bonus when the caller is alone.
CREATE OR REPLACE FUNCTION do_now_game_open_chest(p_class_id UUID)
RETURNS JSONB
LANGUAGE plpgsql VOLATILE SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  r           DOUBLE PRECISION := random();
  v_effect    TEXT;
  v_my_xp     INTEGER;
  v_delta     INTEGER := 0;
  v_target    RECORD;
  v_target_nm TEXT := NULL;
  v_amount    INTEGER;
BEGIN
  IF NOT _dng_can_play(p_class_id) THEN RETURN jsonb_build_object('ok', false, 'reason', 'no_game'); END IF;

  -- Ensure the caller has a row.
  INSERT INTO v2_do_now_game (class_id, student_id, display_name, xp)
  VALUES (p_class_id, auth.uid(), (SELECT COALESCE(full_name, email, 'Player') FROM users WHERE id = auth.uid()), 0)
  ON CONFLICT (class_id, student_id) DO NOTHING;

  SELECT xp INTO v_my_xp FROM v2_do_now_game WHERE class_id = p_class_id AND student_id = auth.uid();

  -- Weighted pick (cumulative): empty .18 | bonus_s .22 | bonus_m .16 |
  -- jackpot .06 | lose .16 | multiplier .08 | swap .08 | steal .06
  IF    r < 0.18 THEN v_effect := 'empty';
  ELSIF r < 0.40 THEN v_effect := 'bonus_s';
  ELSIF r < 0.56 THEN v_effect := 'bonus_m';
  ELSIF r < 0.62 THEN v_effect := 'jackpot';
  ELSIF r < 0.78 THEN v_effect := 'lose';
  ELSIF r < 0.86 THEN v_effect := 'multiplier';
  ELSIF r < 0.94 THEN v_effect := 'swap';
  ELSE                v_effect := 'steal';
  END IF;

  IF v_effect = 'empty' THEN
    v_delta := 0;

  ELSIF v_effect = 'bonus_s' THEN
    v_delta := 150;

  ELSIF v_effect = 'bonus_m' THEN
    v_delta := 350;

  ELSIF v_effect = 'jackpot' THEN
    v_delta := 800;

  ELSIF v_effect = 'lose' THEN
    v_delta := -LEAST(300, v_my_xp);

  ELSIF v_effect = 'multiplier' THEN
    v_delta := v_my_xp;   -- doubling = +current

  ELSIF v_effect = 'swap' THEN
    SELECT student_id, xp, display_name INTO v_target
      FROM v2_do_now_game
     WHERE class_id = p_class_id AND student_id <> auth.uid()
     ORDER BY random() LIMIT 1;
    IF NOT FOUND THEN
      v_effect := 'bonus_s'; v_delta := 150;
    ELSE
      v_target_nm := v_target.display_name;
      v_delta := v_target.xp - v_my_xp;   -- my new total = target.xp
      UPDATE v2_do_now_game SET xp = v_my_xp, updated_at = NOW()
        WHERE class_id = p_class_id AND student_id = v_target.student_id;
    END IF;

  ELSIF v_effect = 'steal' THEN
    SELECT student_id, xp, display_name INTO v_target
      FROM v2_do_now_game
     WHERE class_id = p_class_id AND student_id <> auth.uid()
     ORDER BY xp DESC LIMIT 1;
    IF NOT FOUND OR v_target.xp <= 0 THEN
      v_effect := 'bonus_s'; v_delta := 150;
    ELSE
      v_target_nm := v_target.display_name;
      v_amount := FLOOR(v_target.xp * 0.25)::INTEGER;
      v_delta := v_amount;
      UPDATE v2_do_now_game SET xp = GREATEST(0, xp - v_amount), updated_at = NOW()
        WHERE class_id = p_class_id AND student_id = v_target.student_id;
    END IF;
  END IF;

  UPDATE v2_do_now_game SET xp = GREATEST(0, xp + v_delta), updated_at = NOW()
    WHERE class_id = p_class_id AND student_id = auth.uid()
    RETURNING xp INTO v_my_xp;

  RETURN jsonb_build_object('ok', true, 'effect', v_effect, 'delta', v_delta,
                            'target_name', v_target_nm, 'your_xp', v_my_xp);
END;
$$;
GRANT EXECUTE ON FUNCTION do_now_game_open_chest(UUID) TO authenticated;

COMMENT ON TABLE v2_do_now_game IS
'Per-student XP for Do Now game mode (Gold Rush). One row per (class, student). Earned via do_now_game_earn(); chests applied server-side by do_now_game_open_chest().';
