-- ============================================
-- SITE STATS — Self-hosted visit counter + user count
-- ============================================
-- Replaces the external counterapi.dev v1 dependency (deprecated / stale)
-- used by the homepage visit counter, and exposes a user-count RPC so the
-- homepage "users" pill doesn't need SELECT on the users table.

CREATE TABLE IF NOT EXISTS site_stats (
    key TEXT PRIMARY KEY,
    count BIGINT NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed row for the homepage visit counter.
-- Adjust this value via SQL if you want to preserve the prior displayed count, e.g.:
--   UPDATE site_stats SET count = 13000 WHERE key = 'visits';
INSERT INTO site_stats (key, count)
VALUES ('visits', 0)
ON CONFLICT (key) DO NOTHING;

ALTER TABLE site_stats ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon) can read stat totals
CREATE POLICY "Public can read site_stats"
ON site_stats FOR SELECT
TO anon, authenticated
USING (true);

GRANT SELECT ON site_stats TO anon, authenticated;

-- Increment a stat by 1 and return the new total.
-- SECURITY DEFINER so anonymous homepage visitors can call it without
-- needing direct UPDATE on the table.
CREATE OR REPLACE FUNCTION increment_site_stat(stat_key TEXT)
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    new_count BIGINT;
BEGIN
    INSERT INTO site_stats (key, count)
    VALUES (stat_key, 1)
    ON CONFLICT (key) DO UPDATE
        SET count = site_stats.count + 1,
            updated_at = NOW()
    RETURNING count INTO new_count;

    RETURN new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION increment_site_stat(TEXT) TO anon, authenticated;

-- Return the total number of registered users.
-- SECURITY DEFINER so anon can fetch the count without being granted
-- SELECT on the users table (which would leak user rows).
CREATE OR REPLACE FUNCTION get_user_count()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    total BIGINT;
BEGIN
    SELECT COUNT(*) INTO total FROM users;
    RETURN total;
END;
$$;

GRANT EXECUTE ON FUNCTION get_user_count() TO anon, authenticated;

COMMENT ON TABLE site_stats IS 'Aggregate counters displayed on the homepage (visits, etc).';
COMMENT ON FUNCTION increment_site_stat(TEXT) IS 'Atomically increments a site_stats row and returns the new count.';
COMMENT ON FUNCTION get_user_count() IS 'Returns the total registered user count for the homepage pill.';
