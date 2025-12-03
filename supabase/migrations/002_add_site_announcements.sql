-- Migration: Add Site-Wide Announcements
-- Run this SQL in your Supabase SQL Editor to enable announcements

-- Create site_announcements table
CREATE TABLE IF NOT EXISTS site_announcements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    type TEXT DEFAULT 'info' CHECK (type IN ('info', 'warning', 'success')),
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for efficient querying of active announcements
CREATE INDEX IF NOT EXISTS idx_site_announcements_active
ON site_announcements(expires_at)
WHERE expires_at IS NULL OR expires_at > NOW();

-- Enable Row Level Security
ALTER TABLE site_announcements ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can read announcements
CREATE POLICY "Anyone can view announcements"
ON site_announcements FOR SELECT
TO authenticated
USING (true);

-- Policy: Only admins can create announcements
CREATE POLICY "Admins can create announcements"
ON site_announcements FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true)
);

-- Policy: Only admins can update announcements
CREATE POLICY "Admins can update announcements"
ON site_announcements FOR UPDATE
TO authenticated
USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true)
);

-- Policy: Only admins can delete announcements
CREATE POLICY "Admins can delete announcements"
ON site_announcements FOR DELETE
TO authenticated
USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true)
);

-- Grant access
GRANT ALL ON site_announcements TO authenticated;

-- Allow anonymous users to read announcements (for homepage)
CREATE POLICY "Public can view announcements"
ON site_announcements FOR SELECT
TO anon
USING (true);

GRANT SELECT ON site_announcements TO anon;

-- Comments
COMMENT ON TABLE site_announcements IS 'Site-wide announcements displayed on the homepage';
COMMENT ON COLUMN site_announcements.type IS 'Visual style: info (blue), warning (yellow), success (green)';
COMMENT ON COLUMN site_announcements.expires_at IS 'If set, announcement hidden after this time';
