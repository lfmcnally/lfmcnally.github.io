-- Migration: Allow admins to grant XP to students
-- Adds RLS policies for admin to update user XP and log transactions

-- ============================================
-- 1. ALLOW ADMINS TO UPDATE ANY USER'S XP
-- ============================================
-- Drop existing admin update policy if it exists
DROP POLICY IF EXISTS "Admins can update any user" ON users;

-- Create policy for admins to update any user
CREATE POLICY "Admins can update any user"
ON users FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM users
        WHERE id = auth.uid() AND is_admin = true
    )
)
WITH CHECK (
    EXISTS (
        SELECT 1 FROM users
        WHERE id = auth.uid() AND is_admin = true
    )
);

-- ============================================
-- 2. ALLOW ADMINS TO INSERT XP TRANSACTIONS FOR ANY USER
-- ============================================
DROP POLICY IF EXISTS "Admins can create XP transactions for any user" ON xp_transactions;

CREATE POLICY "Admins can create XP transactions for any user"
ON xp_transactions FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM users
        WHERE id = auth.uid() AND is_admin = true
    )
);
