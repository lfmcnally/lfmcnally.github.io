-- Add vocab schedule columns to classes table
-- Teachers set a start date and deadline for students to learn all vocabulary words

ALTER TABLE classes ADD COLUMN IF NOT EXISTS vocab_start_date DATE;
ALTER TABLE classes ADD COLUMN IF NOT EXISTS vocab_deadline DATE;

-- Index for efficient querying of classes with active vocab schedules
CREATE INDEX IF NOT EXISTS idx_classes_vocab_deadline ON classes (vocab_deadline) WHERE vocab_deadline IS NOT NULL;
