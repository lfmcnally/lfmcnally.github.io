-- ============================================
-- Add file_data column, drop file_path, add marked file + handback
-- ============================================
-- Store essay files as base64 data URLs directly in the database
-- instead of relying on Supabase Storage buckets.
-- Also adds marked/annotated file fields and a handed_back flag
-- so students can view their feedback.

ALTER TABLE essay_submissions ADD COLUMN IF NOT EXISTS file_data TEXT;
ALTER TABLE essay_submissions DROP COLUMN IF EXISTS file_path;

-- Marked/annotated version the teacher uploads for handback
ALTER TABLE essay_submissions ADD COLUMN IF NOT EXISTS marked_file_name TEXT;
ALTER TABLE essay_submissions ADD COLUMN IF NOT EXISTS marked_file_data TEXT;

-- Whether the essay has been handed back to the student
ALTER TABLE essay_submissions ADD COLUMN IF NOT EXISTS handed_back BOOLEAN NOT NULL DEFAULT FALSE;

-- Students can view essays that have been handed back to them
CREATE POLICY "Students can view handed-back essays"
    ON essay_submissions FOR SELECT
    USING (auth.uid() = student_id AND handed_back = TRUE);
