-- ============================================
-- Fix assign_share_code_on_insert search_path bug
-- ============================================
-- The trigger from migration 038 calls generate_unique_share_code() without
-- a schema prefix. That worked at create time but broke later: any ALTER
-- TABLE on `users` invalidates the trigger's cached plan, and when the plan
-- is recompiled while running inside the SECURITY DEFINER handle_new_user
-- trigger (which is what Supabase Auth runs on signup), the search_path
-- doesn't include `public`, so the function lookup fails with:
--
--   ERROR: function generate_unique_share_code() does not exist
--
-- After which the signup transaction aborts and Supabase Auth returns the
-- generic "Database error saving new user" message to the client.
--
-- This migration recreates the trigger function with the call schema-
-- qualified (public.generate_unique_share_code) so the search_path is
-- irrelevant. Safe to re-run.

CREATE OR REPLACE FUNCTION public.assign_share_code_on_insert() RETURNS TRIGGER
LANGUAGE plpgsql AS $$
BEGIN
    IF NEW.share_code IS NULL OR NEW.share_code = '' THEN
        NEW.share_code := public.generate_unique_share_code();
    END IF;
    RETURN NEW;
END;
$$;
