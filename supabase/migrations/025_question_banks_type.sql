-- ============================================
-- ADD bank_type TO question_banks
-- ============================================
-- Allows multiple bank types per user (e.g. 'donow' for Do Now questions,
-- 'vocab' for Cover Write Check vocabulary sets).

-- Drop old primary key (user_id only)
ALTER TABLE question_banks DROP CONSTRAINT question_banks_pkey;

-- Add bank_type column with default for backwards compatibility
ALTER TABLE question_banks ADD COLUMN bank_type TEXT NOT NULL DEFAULT 'donow';

-- Create new composite primary key
ALTER TABLE question_banks ADD PRIMARY KEY (user_id, bank_type);
