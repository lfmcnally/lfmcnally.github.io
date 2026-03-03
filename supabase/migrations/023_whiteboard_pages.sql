-- Add total_pages column to whiteboard_sessions for multi-page support
ALTER TABLE whiteboard_sessions ADD COLUMN IF NOT EXISTS total_pages INTEGER DEFAULT 1 NOT NULL;
