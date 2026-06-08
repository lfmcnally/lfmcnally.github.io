-- ============================================
-- Do Now archive — saved leaderboards
-- ============================================
-- A live Do Now leaderboard is computed from vocab_sessions and nothing was
-- ever persisted, so pressing Stop discarded the result. This table stores a
-- snapshot of the leaderboard when the teacher stops a Do Now, so they can
-- revisit "how did 10B do on Monday".
--
-- results is a JSONB array of { name, answered, correct, acc } rows — frozen at
-- save time, so it doesn't depend on session rows sticking around.

CREATE TABLE IF NOT EXISTS v2_do_now_archive (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id      UUID NOT NULL REFERENCES v2_classes(id) ON DELETE CASCADE,
    vocab_list    TEXT NOT NULL,
    topic_id      TEXT,
    subtopics     JSONB,
    started_at    TIMESTAMPTZ,                 -- when the Do Now was set
    saved_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    results       JSONB NOT NULL DEFAULT '[]'::jsonb,
    student_count INTEGER NOT NULL DEFAULT 0,
    total_answered INTEGER NOT NULL DEFAULT 0,
    total_correct  INTEGER NOT NULL DEFAULT 0,
    created_by    UUID REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_v2_do_now_archive_class
    ON v2_do_now_archive (class_id, saved_at DESC);

ALTER TABLE v2_do_now_archive ENABLE ROW LEVEL SECURITY;

-- Teachers: full control over archives for classes they own.
DROP POLICY IF EXISTS "Teachers manage do now archive for their classes" ON v2_do_now_archive;
CREATE POLICY "Teachers manage do now archive for their classes"
ON v2_do_now_archive FOR ALL
TO authenticated
USING      (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()))
WITH CHECK (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()));

COMMENT ON TABLE v2_do_now_archive IS
'Snapshots of Do Now leaderboards, saved when a teacher stops a Do Now. results is a frozen JSONB array of per-student {name, answered, correct, acc}.';
