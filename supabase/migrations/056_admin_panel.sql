-- ============================================
-- ADMIN PANEL — backend for /version2/admin/
-- ============================================
-- Gives site admins (e.g. lawrencefmcnally@gmail.com) a secure way to view and
-- manage every account, school, role and signup date.
--
-- Because the site is a static front-end using the *public* anon key, every
-- privileged operation below is a SECURITY DEFINER function that re-checks the
-- caller is an admin server-side. The front-end gate is UX only; this is the
-- real boundary. Signup date and last-active come from auth.users, which the
-- anon key cannot read directly — so we surface them through these functions.

-- --------------------------------------------
-- 0. Ensure the is_admin flag exists
-- --------------------------------------------
-- Several earlier migrations already assume users.is_admin; make sure it's
-- present so this migration is safe to run on any instance.
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_users_is_admin ON users(is_admin) WHERE is_admin = true;

-- --------------------------------------------
-- 1. Non-recursive is_admin() helper
-- --------------------------------------------
-- SECURITY DEFINER so it reads users without triggering users' own RLS
-- policies (avoids the recursion that migrations 009/010 had to untangle).
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE((SELECT is_admin FROM public.users WHERE id = auth.uid()), false);
$$;

GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;

-- --------------------------------------------
-- 2. Grant admin to the site owner
-- --------------------------------------------
-- Idempotent: matches on the email stored in auth.users so it works even if
-- public.users.email is blank/unsynced.
UPDATE public.users u
SET is_admin = true
FROM auth.users a
WHERE a.id = u.id
  AND lower(a.email) = 'lawrencefmcnally@gmail.com';

-- --------------------------------------------
-- 3. Aggregate overview for the dashboard cards
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public.admin_overview()
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result JSONB;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  SELECT jsonb_build_object(
    'total_users',    (SELECT count(*) FROM public.users),
    'teachers',       (SELECT count(*) FROM public.users WHERE role = 'teacher'),
    'students',       (SELECT count(*) FROM public.users WHERE role = 'student' OR role IS NULL),
    'admins',         (SELECT count(*) FROM public.users WHERE is_admin = true),
    'schools',        (SELECT count(DISTINCT nullif(btrim(school), '')) FROM public.users WHERE school IS NOT NULL),
    'classes',        (SELECT count(*) FROM public.v2_classes),
    'signups_today',  (SELECT count(*) FROM auth.users WHERE created_at >= date_trunc('day', now())),
    'signups_7d',     (SELECT count(*) FROM auth.users WHERE created_at >= now() - interval '7 days'),
    'signups_30d',    (SELECT count(*) FROM auth.users WHERE created_at >= now() - interval '30 days')
  )
  INTO result;

  RETURN result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.admin_overview() TO authenticated;

-- --------------------------------------------
-- 4. Full account list (joined with auth.users)
-- --------------------------------------------
-- Returns one row per account with the authoritative email, signup date and
-- last-active timestamp from auth.users.
CREATE OR REPLACE FUNCTION public.admin_list_users()
RETURNS TABLE (
  id              UUID,
  full_name       TEXT,
  email           TEXT,
  role            TEXT,
  school          TEXT,
  is_admin        BOOLEAN,
  xp              INTEGER,
  total_xp_earned INTEGER,
  avatar_color    TEXT,
  created_at      TIMESTAMPTZ,
  last_sign_in_at TIMESTAMPTZ
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  RETURN QUERY
  SELECT
    u.id,
    u.full_name,
    COALESCE(NULLIF(u.email, ''), a.email)::TEXT AS email,
    u.role,
    u.school,
    COALESCE(u.is_admin, false) AS is_admin,
    COALESCE(u.xp, 0) AS xp,
    COALESCE(u.total_xp_earned, 0) AS total_xp_earned,
    u.avatar_color,
    a.created_at,
    a.last_sign_in_at
  FROM public.users u
  LEFT JOIN auth.users a ON a.id = u.id
  ORDER BY a.created_at DESC NULLS LAST;
END;
$$;

GRANT EXECUTE ON FUNCTION public.admin_list_users() TO authenticated;

-- --------------------------------------------
-- 5. Edit an account
-- --------------------------------------------
-- NULL arguments mean "leave unchanged", so the front-end can send partial
-- updates. Role is validated. An admin cannot strip their own admin flag here
-- (prevents accidental self-lockout — use SQL if ever truly needed).
CREATE OR REPLACE FUNCTION public.admin_update_user(
  target_id     UUID,
  new_full_name TEXT    DEFAULT NULL,
  new_role      TEXT    DEFAULT NULL,
  new_school    TEXT    DEFAULT NULL,
  new_is_admin  BOOLEAN DEFAULT NULL,
  new_xp        INTEGER DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  IF new_role IS NOT NULL AND new_role NOT IN ('student', 'teacher') THEN
    RAISE EXCEPTION 'invalid role: %', new_role;
  END IF;

  IF new_is_admin IS NOT NULL AND new_is_admin = false AND target_id = auth.uid() THEN
    RAISE EXCEPTION 'you cannot remove your own admin access';
  END IF;

  UPDATE public.users
  SET
    full_name = COALESCE(new_full_name, full_name),
    role      = COALESCE(new_role, role),
    -- allow clearing the school by sending an empty string
    school    = CASE WHEN new_school IS NULL THEN school
                     WHEN btrim(new_school) = '' THEN NULL
                     ELSE btrim(new_school) END,
    is_admin  = COALESCE(new_is_admin, is_admin),
    xp        = COALESCE(new_xp, xp)
  WHERE id = target_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'no such user: %', target_id;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION public.admin_update_user(UUID, TEXT, TEXT, TEXT, BOOLEAN, INTEGER) TO authenticated;

-- --------------------------------------------
-- 6. Delete an account
-- --------------------------------------------
-- Deletes the auth.users row; public.users and all dependent rows cascade via
-- their ON DELETE CASCADE foreign keys. An admin cannot delete themselves.
CREATE OR REPLACE FUNCTION public.admin_delete_user(target_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  IF target_id = auth.uid() THEN
    RAISE EXCEPTION 'you cannot delete your own account from here';
  END IF;

  DELETE FROM auth.users WHERE id = target_id;

  -- Belt and braces in case the profile row isn't cascaded from auth.users.
  DELETE FROM public.users WHERE id = target_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.admin_delete_user(UUID) TO authenticated;

-- --------------------------------------------
-- 7. Optional table-level admin policies on users
-- --------------------------------------------
-- The RPCs above are the primary interface, but these let an admin read/update
-- any profile row directly too (e.g. for future tooling). Uses is_admin() so
-- there's no recursive subquery on users.
DROP POLICY IF EXISTS "Admins can update any user" ON users;  -- replaces the recursive version from 012
CREATE POLICY "Admins can update any user"
ON users FOR UPDATE
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admins can delete users" ON users;
CREATE POLICY "Admins can delete users"
ON users FOR DELETE
TO authenticated
USING (public.is_admin());
