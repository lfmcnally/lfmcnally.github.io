-- Migration: Whiteboard Strokes Persistence
-- Stores individual strokes so students who join late or refresh
-- get the full canvas state, and strokes survive broadcast failures.

CREATE TABLE IF NOT EXISTS whiteboard_strokes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id UUID NOT NULL REFERENCES whiteboard_sessions(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    stroke_data JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_whiteboard_strokes_session ON whiteboard_strokes(session_id, created_at);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================
ALTER TABLE whiteboard_strokes ENABLE ROW LEVEL SECURITY;

-- Anyone in the session (teacher or class member) can view strokes
CREATE POLICY "Session participants can view strokes"
ON whiteboard_strokes FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM whiteboard_sessions ws
        WHERE ws.id = whiteboard_strokes.session_id
        AND (
            ws.teacher_id = auth.uid()
            OR EXISTS (
                SELECT 1 FROM class_members cm
                WHERE cm.class_id = ws.class_id
                AND cm.student_id = auth.uid()
            )
        )
    )
);

-- Users can insert their own strokes
CREATE POLICY "Users can insert own strokes"
ON whiteboard_strokes FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

-- Teachers can delete strokes in their sessions (for clear board)
CREATE POLICY "Teachers can delete strokes in own sessions"
ON whiteboard_strokes FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM whiteboard_sessions ws
        WHERE ws.id = whiteboard_strokes.session_id
        AND ws.teacher_id = auth.uid()
    )
);

-- Users can delete their own strokes (for undo)
CREATE POLICY "Users can delete own strokes"
ON whiteboard_strokes FOR DELETE
TO authenticated
USING (user_id = auth.uid());

GRANT ALL ON whiteboard_strokes TO authenticated;
