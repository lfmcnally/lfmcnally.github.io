-- ============================================
-- Vocabulary practice sessions
-- ============================================
-- Until now the v2 system stored only per-word BKT state — there was no
-- record of *when* or *how often* a student practised, so the teacher
-- report could show attempts but not sessions. This table logs one row per
-- practice session (created lazily on the first answer, so abandoned
-- "started but never answered" sessions aren't counted).
--
-- A "session" = one run of the tester (clicking Start, or arriving via a
-- ?queue / ?auto link) during which at least one question is answered.

CREATE TABLE IF NOT EXISTS vocab_sessions (
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vocab_list     TEXT NOT NULL,
    started_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_answer_at TIMESTAMPTZ,
    answered       INTEGER NOT NULL DEFAULT 0 CHECK (answered >= 0),
    correct        INTEGER NOT NULL DEFAULT 0 CHECK (correct >= 0)
);

CREATE INDEX IF NOT EXISTS idx_vocab_sessions_student
    ON vocab_sessions (student_id, started_at DESC);

CREATE INDEX IF NOT EXISTS idx_vocab_sessions_student_list
    ON vocab_sessions (student_id, vocab_list);

ALTER TABLE vocab_sessions ENABLE ROW LEVEL SECURITY;

-- Students: full control over their own session rows
DROP POLICY IF EXISTS "Students manage their own sessions" ON vocab_sessions;
CREATE POLICY "Students manage their own sessions"
ON vocab_sessions FOR ALL
TO authenticated
USING      (student_id = auth.uid())
WITH CHECK (student_id = auth.uid());

-- Teachers: read sessions for students in their v2 classes
-- (my_v2_students() comes from migration 040 — SECURITY DEFINER, no recursion)
DROP POLICY IF EXISTS "Teachers read v2 student sessions" ON vocab_sessions;
CREATE POLICY "Teachers read v2 student sessions"
ON vocab_sessions FOR SELECT
TO authenticated
USING (student_id IN (SELECT my_v2_students()));

COMMENT ON TABLE vocab_sessions IS
'One row per vocabulary practice session (created on first answer). Powers "number of sessions" / "days practised" metrics on the teacher report.';
