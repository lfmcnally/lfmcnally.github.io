-- Migration: Add XP and Profile Customization System
-- Run this SQL in your Supabase SQL Editor to enable the XP/emoji/tag system

-- ============================================
-- 1. ADD XP FIELDS TO USERS TABLE
-- ============================================

-- Add XP and profile customization columns to users
ALTER TABLE users ADD COLUMN IF NOT EXISTS xp INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS total_xp_earned INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS selected_emoji TEXT DEFAULT NULL;
ALTER TABLE users ADD COLUMN IF NOT EXISTS selected_tag TEXT DEFAULT NULL;

-- Create index for XP leaderboards
CREATE INDEX IF NOT EXISTS idx_users_xp ON users(xp DESC);
CREATE INDEX IF NOT EXISTS idx_users_total_xp ON users(total_xp_earned DESC);

-- ============================================
-- 2. CREATE EMOJI UNLOCKS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS emoji_unlocks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    emoji TEXT NOT NULL,
    unlocked_at TIMESTAMPTZ DEFAULT NOW(),
    unlock_source TEXT DEFAULT 'level', -- 'level', 'purchase', 'achievement', 'season'
    UNIQUE(user_id, emoji)
);

CREATE INDEX IF NOT EXISTS idx_emoji_unlocks_user ON emoji_unlocks(user_id);

-- Enable RLS
ALTER TABLE emoji_unlocks ENABLE ROW LEVEL SECURITY;

-- Users can view their own unlocks
CREATE POLICY "Users can view own emoji unlocks"
ON emoji_unlocks FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Users can insert their own unlocks (via XP system)
CREATE POLICY "Users can unlock emojis"
ON emoji_unlocks FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

GRANT ALL ON emoji_unlocks TO authenticated;

-- ============================================
-- 3. CREATE TAG PURCHASES TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS tag_purchases (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    tag_id TEXT NOT NULL,
    xp_cost INTEGER NOT NULL DEFAULT 0,
    purchased_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, tag_id)
);

CREATE INDEX IF NOT EXISTS idx_tag_purchases_user ON tag_purchases(user_id);

-- Enable RLS
ALTER TABLE tag_purchases ENABLE ROW LEVEL SECURITY;

-- Users can view their own purchases
CREATE POLICY "Users can view own tag purchases"
ON tag_purchases FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Users can purchase tags
CREATE POLICY "Users can purchase tags"
ON tag_purchases FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

GRANT ALL ON tag_purchases TO authenticated;

-- ============================================
-- 4. CREATE XP TRANSACTIONS LOG
-- ============================================

CREATE TABLE IF NOT EXISTS xp_transactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount INTEGER NOT NULL, -- positive = earned, negative = spent
    reason TEXT NOT NULL, -- 'practice_time', 'word_mastered', 'streak_bonus', 'tag_purchase', etc.
    reference_id UUID, -- optional: task_attempt_id, etc.
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_xp_transactions_user ON xp_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_xp_transactions_created ON xp_transactions(created_at DESC);

-- Enable RLS
ALTER TABLE xp_transactions ENABLE ROW LEVEL SECURITY;

-- Users can view their own transactions
CREATE POLICY "Users can view own XP transactions"
ON xp_transactions FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Users can create transactions (via XP system)
CREATE POLICY "Users can create XP transactions"
ON xp_transactions FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

GRANT ALL ON xp_transactions TO authenticated;

-- ============================================
-- 5. COMMENTS FOR DOCUMENTATION
-- ============================================

COMMENT ON COLUMN users.xp IS 'Current spendable XP balance (decreases when spent on tags)';
COMMENT ON COLUMN users.total_xp_earned IS 'Lifetime XP earned (never decreases, used for level calculation)';
COMMENT ON COLUMN users.selected_emoji IS 'Currently selected profile emoji (must be unlocked)';
COMMENT ON COLUMN users.selected_tag IS 'Currently selected profile tag (must be purchased)';

COMMENT ON TABLE emoji_unlocks IS 'Tracks which emojis each user has unlocked';
COMMENT ON TABLE tag_purchases IS 'Tracks which tags each user has purchased with XP';
COMMENT ON TABLE xp_transactions IS 'Audit log of all XP earned and spent';
