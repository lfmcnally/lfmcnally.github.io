-- ============================================
-- Fix generate_unique_share_code search_path break
-- ============================================
-- Follow-up to 045. After schema-qualifying the outer trigger call,
-- signups still failed because generate_unique_share_code() itself calls
-- generate_share_code() and references the users table without schema
-- prefixes:
--
--   ERROR: function generate_share_code() does not exist
--
-- Same root cause as 045 — when the function plan recompiles inside
-- handle_new_user's SECURITY DEFINER context the search_path doesn't
-- include `public`. Recreates the function with the inner call and the
-- table reference both schema-qualified. Safe to re-run.

CREATE OR REPLACE FUNCTION public.generate_unique_share_code() RETURNS TEXT
LANGUAGE plpgsql VOLATILE AS $$
DECLARE
    candidate TEXT;
    attempts INT := 0;
BEGIN
    LOOP
        candidate := public.generate_share_code();
        IF NOT EXISTS (SELECT 1 FROM public.users WHERE share_code = candidate) THEN
            RETURN candidate;
        END IF;
        attempts := attempts + 1;
        IF attempts > 100 THEN
            RAISE EXCEPTION 'Could not generate a unique share code after 100 attempts';
        END IF;
    END LOOP;
END;
$$;
