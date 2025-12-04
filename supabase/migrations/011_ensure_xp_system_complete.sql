-- Migration: Ensure XP system is fully set up and working
-- This combines everything needed for XP to work

-- ============================================
-- 1. ENSURE XP COLUMNS EXIST ON USERS TABLE
-- ============================================
ALTER TABLE users ADD COLUMN IF NOT EXISTS xp INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS total_xp_earned INTEGER DEFAULT 0;

-- ============================================
-- 2. ENSURE XP_TRANSACTIONS TABLE EXISTS
-- ============================================
CREATE TABLE IF NOT EXISTS xp_transactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount INTEGER NOT NULL,
    reason TEXT NOT NULL,
    reference_id UUID,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE xp_transactions ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies to ensure they're correct
DROP POLICY IF EXISTS "Users can view own XP transactions" ON xp_transactions;
DROP POLICY IF EXISTS "Users can create XP transactions" ON xp_transactions;

CREATE POLICY "Users can view own XP transactions"
ON xp_transactions FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can create XP transactions"
ON xp_transactions FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

GRANT ALL ON xp_transactions TO authenticated;

-- ============================================
-- 3. ENSURE TASK_ATTEMPTS RLS ALLOWS INSERT
-- ============================================
DROP POLICY IF EXISTS "Students can create attempts" ON task_attempts;

CREATE POLICY "Students can create attempts"
ON task_attempts FOR INSERT
TO authenticated
WITH CHECK (student_id = auth.uid());

-- Also ensure UPDATE works for saving progress
DROP POLICY IF EXISTS "Students can update own attempts" ON task_attempts;

CREATE POLICY "Students can update own attempts"
ON task_attempts FOR UPDATE
TO authenticated
USING (student_id = auth.uid())
WITH CHECK (student_id = auth.uid());

-- ============================================
-- 4. ENSURE WORD_MASTERY TABLE HAS RLS
-- ============================================
ALTER TABLE word_mastery ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Students can view own word mastery" ON word_mastery;
DROP POLICY IF EXISTS "Students can insert word mastery" ON word_mastery;
DROP POLICY IF EXISTS "Students can update word mastery" ON word_mastery;

CREATE POLICY "Students can view own word mastery"
ON word_mastery FOR SELECT
TO authenticated
USING (student_id = auth.uid());

CREATE POLICY "Students can insert word mastery"
ON word_mastery FOR INSERT
TO authenticated
WITH CHECK (student_id = auth.uid());

CREATE POLICY "Students can update word mastery"
ON word_mastery FOR UPDATE
TO authenticated
USING (student_id = auth.uid())
WITH CHECK (student_id = auth.uid());

GRANT ALL ON word_mastery TO authenticated;

-- ============================================
-- 5. ENSURE EMOJI_UNLOCKS TABLE EXISTS AND HAS RLS
-- ============================================
CREATE TABLE IF NOT EXISTS emoji_unlocks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    emoji TEXT NOT NULL,
    unlocked_at TIMESTAMPTZ DEFAULT NOW(),
    unlock_source TEXT DEFAULT 'level',
    UNIQUE(user_id, emoji)
);

ALTER TABLE emoji_unlocks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own emoji unlocks" ON emoji_unlocks;
DROP POLICY IF EXISTS "Users can unlock emojis" ON emoji_unlocks;

CREATE POLICY "Users can view own emoji unlocks"
ON emoji_unlocks FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can unlock emojis"
ON emoji_unlocks FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

GRANT ALL ON emoji_unlocks TO authenticated;

-- ============================================
-- 6. ENSURE TAG_PURCHASES TABLE EXISTS AND HAS RLS
-- ============================================
CREATE TABLE IF NOT EXISTS tag_purchases (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    tag_id TEXT NOT NULL,
    xp_cost INTEGER NOT NULL DEFAULT 0,
    purchased_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, tag_id)
);

ALTER TABLE tag_purchases ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own tag purchases" ON tag_purchases;
DROP POLICY IF EXISTS "Users can purchase tags" ON tag_purchases;

CREATE POLICY "Users can view own tag purchases"
ON tag_purchases FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can purchase tags"
ON tag_purchases FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

GRANT ALL ON tag_purchases TO authenticated;
