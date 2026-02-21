-- ============================================
-- PLANNER DATA - Per-user lesson planner storage
-- ============================================
-- Stores all planner data (lessons, rosters, behaviour, notes, events, term periods, colours)
-- as a JSONB blob per user, synced from the browser planner.

CREATE TABLE IF NOT EXISTS planner_data (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    data JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE planner_data ENABLE ROW LEVEL SECURITY;

-- Users can only read/write their own planner data
CREATE POLICY "Users can view own planner data"
    ON planner_data FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own planner data"
    ON planner_data FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own planner data"
    ON planner_data FOR UPDATE
    USING (auth.uid() = user_id);

-- Auto-update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_planner_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER planner_data_updated
    BEFORE UPDATE ON planner_data
    FOR EACH ROW
    EXECUTE FUNCTION update_planner_timestamp();
