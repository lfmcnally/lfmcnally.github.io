-- 059_weekly_test_access.sql
-- ===========================================================================
-- Gate WHO can create weekly tests. There is a single shared ANTHROPIC_API_KEY
-- behind the marking, so every approved teacher's marking bills the same
-- account. This restricts test creation to an allowlist a site admin controls
-- from /version2/admin/ — "for now, just a Clifton thing".
--
--   users.can_set_weekly_tests   per-user allow flag (default false)
--   can_set_weekly_tests()       SECURITY DEFINER helper for RLS
--   weekly_tests teacher policy  now also requires the flag (real boundary)
--   admin_list_users / admin_update_user  extended so the admin panel can read
--                                          and toggle the flag
-- Admins + the site owner are granted the flag automatically.
-- ===========================================================================

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS can_set_weekly_tests BOOLEAN NOT NULL DEFAULT false;

-- Non-recursive helper (mirrors is_admin()).
CREATE OR REPLACE FUNCTION public.can_set_weekly_tests()
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT COALESCE((SELECT can_set_weekly_tests FROM public.users WHERE id = auth.uid()), false);
$$;
GRANT EXECUTE ON FUNCTION public.can_set_weekly_tests() TO authenticated;

-- Grant to all admins and the site owner so nobody is locked out on day one.
UPDATE public.users SET can_set_weekly_tests = true WHERE is_admin = true;
UPDATE public.users u SET can_set_weekly_tests = true
  FROM auth.users a
 WHERE a.id = u.id AND lower(a.email) = 'lawrencefmcnally@gmail.com';

-- Re-gate the teacher policy: own tests AND on the allowlist. (Students are
-- unaffected — their read policy doesn't touch the flag; they just take tests.)
DROP POLICY IF EXISTS "Teachers manage their weekly tests" ON public.weekly_tests;
CREATE POLICY "Teachers manage their weekly tests"
ON public.weekly_tests FOR ALL TO authenticated
USING      (teacher_id = auth.uid() AND public.can_set_weekly_tests())
WITH CHECK (teacher_id = auth.uid() AND public.can_set_weekly_tests());

-- --------------------------------------------------------------------------
-- Extend the admin RPCs to surface + toggle the flag.
-- --------------------------------------------------------------------------

-- admin_list_users: add can_set_weekly_tests to the returned row.
DROP FUNCTION IF EXISTS public.admin_list_users();
CREATE OR REPLACE FUNCTION public.admin_list_users()
RETURNS TABLE (
  id                   UUID,
  full_name            TEXT,
  email                TEXT,
  role                 TEXT,
  school               TEXT,
  is_admin             BOOLEAN,
  can_set_weekly_tests BOOLEAN,
  xp                   INTEGER,
  total_xp_earned      INTEGER,
  avatar_color         TEXT,
  created_at           TIMESTAMPTZ,
  last_sign_in_at      TIMESTAMPTZ
)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
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
    COALESCE(u.can_set_weekly_tests, false) AS can_set_weekly_tests,
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

-- admin_update_user: add new_can_set_weekly_tests (NULL = leave unchanged).
DROP FUNCTION IF EXISTS public.admin_update_user(UUID, TEXT, TEXT, TEXT, BOOLEAN, INTEGER);
CREATE OR REPLACE FUNCTION public.admin_update_user(
  target_id                UUID,
  new_full_name            TEXT    DEFAULT NULL,
  new_role                 TEXT    DEFAULT NULL,
  new_school               TEXT    DEFAULT NULL,
  new_is_admin             BOOLEAN DEFAULT NULL,
  new_xp                   INTEGER DEFAULT NULL,
  new_can_set_weekly_tests BOOLEAN DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
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
    school    = CASE WHEN new_school IS NULL THEN school
                     WHEN btrim(new_school) = '' THEN NULL
                     ELSE btrim(new_school) END,
    is_admin  = COALESCE(new_is_admin, is_admin),
    xp        = COALESCE(new_xp, xp),
    can_set_weekly_tests = COALESCE(new_can_set_weekly_tests, can_set_weekly_tests)
  WHERE id = target_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'no such user: %', target_id;
  END IF;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_update_user(UUID, TEXT, TEXT, TEXT, BOOLEAN, INTEGER, BOOLEAN) TO authenticated;
