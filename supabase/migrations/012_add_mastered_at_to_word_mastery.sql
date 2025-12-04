-- ============================================
-- Add mastered_at column to word_mastery
-- ============================================
-- This tracks when a word was FIRST mastered, so we only award
-- the mastery bonus once per word (prevents gaming the system)

ALTER TABLE word_mastery
ADD COLUMN IF NOT EXISTS mastered_at TIMESTAMPTZ DEFAULT NULL;

-- Add index for efficient queries on mastered words
CREATE INDEX IF NOT EXISTS idx_word_mastery_mastered_at
ON word_mastery(student_id, mastered_at)
WHERE mastered_at IS NOT NULL;

COMMENT ON COLUMN word_mastery.mastered_at IS
'Timestamp when word was first mastered (3+ correct, >70% accuracy). NULL means never mastered. Only set once - mastery bonus is one-time per word.';
