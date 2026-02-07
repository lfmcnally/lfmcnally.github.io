-- Migration: Add a public function to get the total user count
-- This allows the homepage to display the user count without requiring authentication.
-- Uses SECURITY DEFINER to bypass RLS so anonymous visitors can see the count.

CREATE OR REPLACE FUNCTION get_user_count()
RETURNS INTEGER
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
    SELECT COUNT(*)::integer FROM users;
$$;

-- Allow anonymous users to call this function
GRANT EXECUTE ON FUNCTION get_user_count() TO anon;
GRANT EXECUTE ON FUNCTION get_user_count() TO authenticated;
