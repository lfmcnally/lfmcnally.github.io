-- Migration: Vocab Revision System
-- Adds spaced repetition, tricky word marking, and academic level tracking

-- Add academic level to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS academic_level TEXT DEFAULT NULL;
COMMENT ON COLUMN users.academic_level IS 'Student academic level: prep, gcse, or a-level. Affects which vocabulary lists are relevant.';

-- Add spaced repetition and tricky word fields to word_mastery
ALTER TABLE word_mastery
ADD COLUMN IF NOT EXISTS is_tricky BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS next_review_at TIMESTAMPTZ DEFAULT NULL,
ADD COLUMN IF NOT EXISTS review_interval_days INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS review_count INTEGER DEFAULT 0;

-- Index for efficient due-for-review queries
CREATE INDEX IF NOT EXISTS idx_word_mastery_next_review
ON word_mastery(student_id, next_review_at)
WHERE next_review_at IS NOT NULL;

-- Index for tricky words queries
CREATE INDEX IF NOT EXISTS idx_word_mastery_tricky
ON word_mastery(student_id, is_tricky)
WHERE is_tricky = TRUE;

-- Comments for documentation
COMMENT ON COLUMN word_mastery.is_tricky IS 'Explicitly marked as tricky by student (not calculated from accuracy)';
COMMENT ON COLUMN word_mastery.next_review_at IS 'When this word is due for spaced repetition review';
COMMENT ON COLUMN word_mastery.review_interval_days IS 'Current interval in days between reviews (1, 3, 7, 14, 30, 60, 120)';
COMMENT ON COLUMN word_mastery.review_count IS 'Number of successful spaced repetition reviews completed';

-- Grant necessary permissions for the new columns (if using RLS)
-- The existing RLS policies on word_mastery should cover these new columns automatically
