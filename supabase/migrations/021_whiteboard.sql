-- Migration: Live Whiteboard System
-- Creates tables for real-time whiteboard sessions per class

-- ============================================
-- WHITEBOARD SESSIONS
-- ============================================
CREATE TABLE IF NOT EXISTS whiteboard_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
    teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    is_active BOOLEAN DEFAULT true,
    is_frozen BOOLEAN DEFAULT false,
    allow_all_students BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_whiteboard_sessions_class ON whiteboard_sessions(class_id);
CREATE INDEX IF NOT EXISTS idx_whiteboard_sessions_active ON whiteboard_sessions(class_id, is_active);

-- ============================================
-- WHITEBOARD PERMISSIONS (per-student draw access)
-- ============================================
CREATE TABLE IF NOT EXISTS whiteboard_permissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id UUID NOT NULL REFERENCES whiteboard_sessions(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    can_draw BOOLEAN DEFAULT false,
    granted_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(session_id, student_id)
);

CREATE INDEX IF NOT EXISTS idx_whiteboard_permissions_session ON whiteboard_permissions(session_id);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================
ALTER TABLE whiteboard_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE whiteboard_permissions ENABLE ROW LEVEL SECURITY;

-- Sessions: Teachers can manage their own sessions
CREATE POLICY "Teachers can manage own sessions"
ON whiteboard_sessions FOR ALL
TO authenticated
USING (teacher_id = auth.uid())
WITH CHECK (teacher_id = auth.uid());

-- Sessions: Students can view active sessions for their classes
CREATE POLICY "Students can view active sessions for their classes"
ON whiteboard_sessions FOR SELECT
TO authenticated
USING (
    is_active = true
    AND EXISTS (
        SELECT 1 FROM class_members
        WHERE class_members.class_id = whiteboard_sessions.class_id
        AND class_members.student_id = auth.uid()
    )
);

-- Permissions: Teachers can manage permissions for their sessions
CREATE POLICY "Teachers can manage whiteboard permissions"
ON whiteboard_permissions FOR ALL
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM whiteboard_sessions
        WHERE whiteboard_sessions.id = whiteboard_permissions.session_id
        AND whiteboard_sessions.teacher_id = auth.uid()
    )
)
WITH CHECK (
    EXISTS (
        SELECT 1 FROM whiteboard_sessions
        WHERE whiteboard_sessions.id = whiteboard_permissions.session_id
        AND whiteboard_sessions.teacher_id = auth.uid()
    )
);

-- Permissions: Students can view their own permissions
CREATE POLICY "Students can view own whiteboard permissions"
ON whiteboard_permissions FOR SELECT
TO authenticated
USING (student_id = auth.uid());

-- Grant access
GRANT ALL ON whiteboard_sessions TO authenticated;
GRANT ALL ON whiteboard_permissions TO authenticated;
