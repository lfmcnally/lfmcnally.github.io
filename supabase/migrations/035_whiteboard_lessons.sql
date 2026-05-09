-- Migration: Saved Whiteboard Lessons
-- Adds folder + lesson tables for the "Google Drive style" lesson browser.
-- This is distinct from migration 021 (live classroom whiteboard sessions).

-- ============================================
-- WHITEBOARD FOLDERS (nested folder tree per user)
-- ============================================
CREATE TABLE IF NOT EXISTS whiteboard_folders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES whiteboard_folders(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_wb_folders_user   ON whiteboard_folders(user_id);
CREATE INDEX IF NOT EXISTS idx_wb_folders_parent ON whiteboard_folders(parent_id);

-- ============================================
-- WHITEBOARD LESSONS (saved lesson documents)
-- ============================================
-- data is the full serialised page array (PDFs as base64 + blank-page strokes/images)
CREATE TABLE IF NOT EXISTS whiteboard_lessons (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    folder_id UUID REFERENCES whiteboard_folders(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    data JSONB NOT NULL,
    thumbnail TEXT, -- optional small data URL of first page
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_wb_lessons_user   ON whiteboard_lessons(user_id);
CREATE INDEX IF NOT EXISTS idx_wb_lessons_folder ON whiteboard_lessons(folder_id);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================
ALTER TABLE whiteboard_folders ENABLE ROW LEVEL SECURITY;
ALTER TABLE whiteboard_lessons ENABLE ROW LEVEL SECURITY;

-- Each user only sees / manages their own folders and lessons
CREATE POLICY "Users manage own whiteboard folders"
    ON whiteboard_folders FOR ALL TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users manage own whiteboard lessons"
    ON whiteboard_lessons FOR ALL TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

GRANT ALL ON whiteboard_folders TO authenticated;
GRANT ALL ON whiteboard_lessons TO authenticated;
