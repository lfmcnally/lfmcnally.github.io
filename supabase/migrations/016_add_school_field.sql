-- Add school field to users table for teachers
-- This allows tracking which schools are using the site

ALTER TABLE users ADD COLUMN IF NOT EXISTS school TEXT;

-- Create an index on school for efficient querying by admins
CREATE INDEX IF NOT EXISTS idx_users_school ON users(school) WHERE school IS NOT NULL;

-- Update RLS policy to allow teachers to update their own school field
-- (This should already be covered by existing policies that allow users to update their own row)
