-- ============================================
-- Add file_data column, drop file_path
-- ============================================
-- Store essay files as base64 data URLs directly in the database
-- instead of relying on Supabase Storage buckets.

ALTER TABLE essay_submissions ADD COLUMN IF NOT EXISTS file_data TEXT;
ALTER TABLE essay_submissions DROP COLUMN IF EXISTS file_path;
