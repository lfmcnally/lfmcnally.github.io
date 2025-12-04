-- Migration: Add backgrounds and borders customization system
-- Adds tables for tracking unlocked backgrounds and borders

-- ============================================
-- 1. ADD COLUMNS TO USERS TABLE
-- ============================================
ALTER TABLE users ADD COLUMN IF NOT EXISTS selected_background TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS selected_border TEXT;

-- ============================================
-- 2. CREATE BACKGROUND_UNLOCKS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS background_unlocks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    background_id TEXT NOT NULL,
    unlocked_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, background_id)
);

ALTER TABLE background_unlocks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own background unlocks" ON background_unlocks;
DROP POLICY IF EXISTS "Users can unlock backgrounds" ON background_unlocks;

CREATE POLICY "Users can view own background unlocks"
ON background_unlocks FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can unlock backgrounds"
ON background_unlocks FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

GRANT ALL ON background_unlocks TO authenticated;

-- ============================================
-- 3. CREATE BORDER_UNLOCKS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS border_unlocks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    border_id TEXT NOT NULL,
    unlocked_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, border_id)
);

ALTER TABLE border_unlocks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own border unlocks" ON border_unlocks;
DROP POLICY IF EXISTS "Users can unlock borders" ON border_unlocks;

CREATE POLICY "Users can view own border unlocks"
ON border_unlocks FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can unlock borders"
ON border_unlocks FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

GRANT ALL ON border_unlocks TO authenticated;
