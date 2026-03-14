-- ============================================
-- QUESTION BANKS - Per-user question bank storage
-- ============================================
-- Stores all question bank data (courses > topics > question sets)
-- as a JSONB blob per user, synced from the starter template tool.

CREATE TABLE IF NOT EXISTS question_banks (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    data JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE question_banks ENABLE ROW LEVEL SECURITY;

-- Users can only read/write their own question banks
CREATE POLICY "Users can view own question banks"
    ON question_banks FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own question banks"
    ON question_banks FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own question banks"
    ON question_banks FOR UPDATE
    USING (auth.uid() = user_id);

-- Auto-update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_question_banks_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER question_banks_updated
    BEFORE UPDATE ON question_banks
    FOR EACH ROW
    EXECUTE FUNCTION update_question_banks_timestamp();
