-- ============================================================================
-- USER ACTIVITY LOG — who visits, when, how often (admin panel)
-- ============================================================================
-- Until now the only activity data was auth.users.last_sign_in_at: a single
-- timestamp that gets overwritten on every sign-in, and that never changes for
-- the (many) users who stay signed in for weeks. So the admin panel could not
-- say how often anyone came back.
--
-- This migration adds a durable, append-only activity log:
--
--   user_sessions   one row per visit (backfilled past logins count as visits
--                   too, with no page data). A "visit" is a run of page loads with
--                   no gap longer than 30 minutes. Each row records when it
--                   started, when it was last seen, how many pages were opened,
--                   and whether it began with a fresh password sign-in.
--
--   track_activity  called by every page (auth/config.js and
--                   version2/assets/js/supabase-client.js) once per page load.
--                   Extends the open visit or starts a new one. It detects a
--                   real sign-in server-side from the auth session in the
--                   user's token (a new sign-in = a new auth session), so it
--                   does not depend on flaky client auth events.
--
--   admin_activity        aggregate dashboard data (JSONB, so it is never
--                         clipped by the API's max-rows cap)
--   admin_user_activity   one user's history for the account drawer
--   admin_list_users      now also returns last seen / visit / login counts
--
-- Nothing in this log is ever deleted automatically.
-- History before this migration is backfilled from auth.audit_log_entries
-- (where Supabase kept it) and from each account's last_sign_in_at.
-- ============================================================================

-- --------------------------------------------
-- 1. Table
-- --------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_sessions (
  id            BIGSERIAL PRIMARY KEY,
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  started_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_seen_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  page_views    INTEGER NOT NULL DEFAULT 1,
  is_login      BOOLEAN NOT NULL DEFAULT false,   -- visit began with a fresh sign-in
  sign_in_at    TIMESTAMPTZ,                      -- auth.users.last_sign_in_at when recorded
  first_path    TEXT,
  last_path     TEXT,
  user_agent    TEXT,
  source        TEXT NOT NULL DEFAULT 'live'      -- 'live' | 'backfill'
);

CREATE INDEX IF NOT EXISTS idx_user_sessions_user_seen  ON public.user_sessions (user_id, last_seen_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_sessions_started    ON public.user_sessions (started_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_signin ON public.user_sessions (user_id, sign_in_at);

-- Locked down: no direct access for anyone. Writes go through track_activity,
-- reads through the admin_* functions (which check is_admin()).
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.user_sessions FROM anon, authenticated;

-- --------------------------------------------
-- 2. track_activity — called once per page load by signed-in users
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public.track_activity(
  p_path       TEXT DEFAULT NULL,
  p_user_agent TEXT DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid       UUID := auth.uid();
  v_sid       UUID;
  v_sign_in   TIMESTAMPTZ;
  v_new_login BOOLEAN;
  v_open_id   BIGINT;
  v_path      TEXT := left(nullif(btrim(p_path), ''), 300);
BEGIN
  IF v_uid IS NULL THEN
    RETURN;  -- signed-out visitors are not tracked here
  END IF;

  -- When did this browser actually sign in? Every sign-in creates a new auth
  -- session (its id is in the JWT); token refreshes keep the same one. So the
  -- auth session's created_at is the true login time.
  BEGIN
    v_sid := nullif(auth.jwt() ->> 'session_id', '')::uuid;
  EXCEPTION WHEN others THEN
    v_sid := NULL;
  END;
  IF v_sid IS NOT NULL THEN
    SELECT s.created_at INTO v_sign_in FROM auth.sessions s WHERE s.id = v_sid;
  END IF;
  IF v_sign_in IS NULL THEN
    SELECT a.last_sign_in_at INTO v_sign_in FROM auth.users a WHERE a.id = v_uid;
  END IF;

  -- A sign-in we have not recorded before = a real login. (The 2-minute window
  -- lets backfilled rows, stamped from last_sign_in_at, match the same login.)
  v_new_login := v_sign_in IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.user_sessions s
     WHERE s.user_id = v_uid
       AND s.sign_in_at BETWEEN v_sign_in - interval '2 minutes'
                            AND v_sign_in + interval '2 minutes'
  );

  -- Visit still open? (activity within the last 30 minutes)
  SELECT s.id INTO v_open_id
    FROM public.user_sessions s
   WHERE s.user_id = v_uid
     AND s.source = 'live'
     AND s.last_seen_at > now() - interval '30 minutes'
   ORDER BY s.last_seen_at DESC
   LIMIT 1;

  IF v_open_id IS NOT NULL AND NOT v_new_login THEN
    UPDATE public.user_sessions
       SET last_seen_at = now(),
           page_views   = page_views + 1,
           last_path    = COALESCE(v_path, last_path)
     WHERE id = v_open_id;
  ELSE
    INSERT INTO public.user_sessions
      (user_id, started_at, last_seen_at, page_views, is_login, sign_in_at, first_path, last_path, user_agent)
    VALUES
      (v_uid, now(), now(), 1, v_new_login,
       CASE WHEN v_new_login THEN v_sign_in END,
       v_path, v_path, left(p_user_agent, 300));
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.track_activity(TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.track_activity(TEXT, TEXT) TO authenticated;

-- --------------------------------------------
-- 3. Backfill earlier history
-- --------------------------------------------
-- (a) Supabase's auth audit log, where it still holds login events. Wrapped so
--     the migration still runs on projects where that table is absent/empty.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_sessions WHERE source = 'backfill') THEN
    INSERT INTO public.user_sessions
      (user_id, started_at, last_seen_at, page_views, is_login, sign_in_at, source)
    SELECT a.id, e.created_at, e.created_at, 0, true, e.created_at, 'backfill'
      FROM (
        SELECT CASE WHEN payload->>'actor_id' ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
                    THEN (payload->>'actor_id')::uuid END AS actor,
               created_at
          FROM auth.audit_log_entries
         WHERE payload->>'action' = 'login'
           AND created_at IS NOT NULL
      ) e
      JOIN auth.users a ON a.id = e.actor;
  END IF;
EXCEPTION WHEN others THEN
  RAISE NOTICE 'audit log backfill skipped: %', SQLERRM;
END;
$$;

-- (b) Every account's most recent sign-in, so nobody shows zero logins.
--     Uses sign_in_at = last_sign_in_at so track_activity won't count it twice.
INSERT INTO public.user_sessions
  (user_id, started_at, last_seen_at, page_views, is_login, sign_in_at, source)
SELECT a.id, a.last_sign_in_at, a.last_sign_in_at, 0, true, a.last_sign_in_at, 'backfill'
  FROM auth.users a
 WHERE a.last_sign_in_at IS NOT NULL
   AND NOT EXISTS (
     SELECT 1 FROM public.user_sessions s
      WHERE s.user_id = a.id
        AND s.started_at BETWEEN a.last_sign_in_at - interval '1 minute'
                             AND a.last_sign_in_at + interval '1 minute'
   );

-- --------------------------------------------
-- 4. admin_list_users — add activity columns
-- --------------------------------------------
-- Rows are ordered by (created_at, id) so the admin page can page through
-- them with .range() and never hit the 1000-row API cap.
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
  last_sign_in_at      TIMESTAMPTZ,
  last_seen_at         TIMESTAMPTZ,
  visits_total         INTEGER,
  visits_30d           INTEGER,
  logins_total         INTEGER,
  page_views_total     INTEGER
)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  RETURN QUERY
  WITH act AS (
    SELECT s.user_id,
           max(s.last_seen_at)                                              AS last_seen_at,
           count(*)::int                                                    AS visits_total,
           count(*) FILTER (WHERE s.started_at >= now() - interval '30 days')::int AS visits_30d,
           count(*) FILTER (WHERE s.is_login)::int                          AS logins_total,
           COALESCE(sum(s.page_views), 0)::int                              AS page_views_total
      FROM public.user_sessions s
     GROUP BY s.user_id
  )
  SELECT
    u.id,
    u.full_name,
    COALESCE(NULLIF(u.email, ''), a.email)::TEXT,
    u.role,
    u.school,
    COALESCE(u.is_admin, false),
    COALESCE(u.can_set_weekly_tests, false),
    COALESCE(u.xp, 0),
    COALESCE(u.total_xp_earned, 0),
    u.avatar_color,
    a.created_at,
    a.last_sign_in_at,
    GREATEST(act.last_seen_at, a.last_sign_in_at),
    COALESCE(act.visits_total, 0),
    COALESCE(act.visits_30d, 0),
    COALESCE(act.logins_total, 0),
    COALESCE(act.page_views_total, 0)
  FROM public.users u
  LEFT JOIN auth.users a ON a.id = u.id
  LEFT JOIN act ON act.user_id = u.id
  ORDER BY a.created_at DESC NULLS LAST, u.id;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_list_users() TO authenticated;

-- --------------------------------------------
-- 5. admin_activity — dashboard aggregates for the last p_days days
-- --------------------------------------------
-- Days, hours and weekdays are in UK time. Returns one JSONB value so it is
-- never truncated by the API row cap.
CREATE OR REPLACE FUNCTION public.admin_activity(p_days INTEGER DEFAULT 30)
RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  v_days  INTEGER := LEAST(GREATEST(COALESCE(p_days, 30), 1), 730);
  v_tz    TEXT := 'Europe/London';
  v_from  TIMESTAMPTZ;
  v_today DATE := (now() AT TIME ZONE 'Europe/London')::date;
  result  JSONB;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  v_from := ((v_today - (v_days - 1))::timestamp AT TIME ZONE v_tz);

  WITH s AS (
    SELECT * FROM public.user_sessions WHERE started_at >= v_from
  ),
  live AS (SELECT * FROM s WHERE source = 'live'),
  ppl AS (
    SELECT u.id, u.full_name, COALESCE(NULLIF(u.email,''), a.email)::text AS email,
           CASE WHEN u.is_admin THEN 'admin' ELSE COALESCE(u.role,'student') END AS role,
           nullif(btrim(u.school),'') AS school, u.avatar_color
      FROM public.users u LEFT JOIN auth.users a ON a.id = u.id
  )
  SELECT jsonb_build_object(
    'days', v_days,
    'tracking_since', (SELECT min(started_at) FROM public.user_sessions WHERE source = 'live'),

    'totals', jsonb_build_object(
      'active_users',   (SELECT count(DISTINCT user_id) FROM s),
      'visits',         (SELECT count(*) FROM s),
      'logins',         (SELECT count(*) FROM s WHERE is_login),
      'page_views',     (SELECT COALESCE(sum(page_views),0) FROM live),
      'avg_pages',      (SELECT round(avg(page_views)::numeric, 1) FROM live),
      'avg_minutes',    (SELECT round(avg(extract(epoch FROM last_seen_at - started_at) / 60)::numeric, 1)
                           FROM live WHERE page_views > 1),
      'active_today',   (SELECT count(DISTINCT user_id) FROM public.user_sessions
                          WHERE last_seen_at >= (v_today::timestamp AT TIME ZONE v_tz)),
      'active_7d',      (SELECT count(DISTINCT user_id) FROM public.user_sessions
                          WHERE last_seen_at >= now() - interval '7 days'),
      'active_30d',     (SELECT count(DISTINCT user_id) FROM public.user_sessions
                          WHERE last_seen_at >= now() - interval '30 days'),
      'returning',      (SELECT count(*) FROM (SELECT user_id FROM s GROUP BY user_id HAVING count(*) > 1) r),
      'never_seen',     (SELECT count(*) FROM public.users u
                          LEFT JOIN auth.users a ON a.id = u.id
                          WHERE a.last_sign_in_at IS NULL
                            AND NOT EXISTS (SELECT 1 FROM public.user_sessions x WHERE x.user_id = u.id))
    ),

    'daily', (
      SELECT COALESCE(jsonb_agg(jsonb_build_object(
               'day', d::date,
               'active', COALESCE(x.active, 0),
               'visits', COALESCE(x.visits, 0),
               'logins', COALESCE(x.logins, 0),
               'signups', COALESCE(su.n, 0)
             ) ORDER BY d), '[]'::jsonb)
        FROM generate_series(v_today - (v_days - 1), v_today, interval '1 day') d
        LEFT JOIN (
          SELECT (started_at AT TIME ZONE v_tz)::date AS day,
                 count(DISTINCT user_id) AS active,
                 count(*) AS visits,
                 count(*) FILTER (WHERE is_login) AS logins
            FROM s GROUP BY 1
        ) x ON x.day = d::date
        LEFT JOIN (
          SELECT (created_at AT TIME ZONE v_tz)::date AS day, count(*) AS n
            FROM auth.users WHERE created_at >= v_from GROUP BY 1
        ) su ON su.day = d::date
    ),

    'by_hour', (
      SELECT jsonb_agg(COALESCE(x.n, 0) ORDER BY h)
        FROM generate_series(0, 23) h
        LEFT JOIN (SELECT extract(hour FROM started_at AT TIME ZONE v_tz)::int AS hr, count(*) AS n
                     FROM s GROUP BY 1) x ON x.hr = h
    ),

    -- ISO weekday: index 0 = Monday … 6 = Sunday
    'by_weekday', (
      SELECT jsonb_agg(COALESCE(x.n, 0) ORDER BY w)
        FROM generate_series(1, 7) w
        LEFT JOIN (SELECT extract(isodow FROM started_at AT TIME ZONE v_tz)::int AS dw, count(*) AS n
                     FROM s GROUP BY 1) x ON x.dw = w
    ),

    'by_role', (
      SELECT COALESCE(jsonb_object_agg(role, n), '{}'::jsonb) FROM (
        SELECT p.role, count(DISTINCT s.user_id) AS n
          FROM s JOIN ppl p ON p.id = s.user_id GROUP BY p.role
      ) r
    ),

    'top_schools', (
      SELECT COALESCE(jsonb_agg(row_to_json(t) ORDER BY t.active DESC, t.visits DESC), '[]'::jsonb) FROM (
        SELECT p.school, count(DISTINCT s.user_id) AS active,
               count(*) AS visits
          FROM s JOIN ppl p ON p.id = s.user_id
         WHERE p.school IS NOT NULL
         GROUP BY p.school
         ORDER BY 2 DESC, 3 DESC
         LIMIT 15
      ) t
    ),

    'top_users', (
      SELECT COALESCE(jsonb_agg(row_to_json(t) ORDER BY t.visits DESC, t.page_views DESC), '[]'::jsonb) FROM (
        SELECT p.id, p.full_name, p.email, p.role, p.school, p.avatar_color,
               count(*) AS visits,
               count(*) FILTER (WHERE s.is_login) AS logins,
               COALESCE(sum(s.page_views), 0) AS page_views,
               count(DISTINCT (s.started_at AT TIME ZONE v_tz)::date) AS days_active,
               max(s.last_seen_at) AS last_seen_at
          FROM s JOIN ppl p ON p.id = s.user_id
         GROUP BY p.id, p.full_name, p.email, p.role, p.school, p.avatar_color
         ORDER BY visits DESC, page_views DESC
         LIMIT 50
      ) t
    ),

    'recent', (
      SELECT COALESCE(jsonb_agg(row_to_json(t) ORDER BY t.started_at DESC), '[]'::jsonb) FROM (
        SELECT p.id AS user_id, p.full_name, p.email, p.role, p.school, p.avatar_color,
               x.started_at, x.last_seen_at, x.page_views, x.is_login, x.first_path, x.last_path, x.source
          FROM public.user_sessions x JOIN ppl p ON p.id = x.user_id
         ORDER BY x.started_at DESC
         LIMIT 150
      ) t
    )
  ) INTO result;

  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_activity(INTEGER) TO authenticated;

-- --------------------------------------------
-- 6. admin_user_activity — one account's history
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public.admin_user_activity(target_id UUID)
RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  v_tz    TEXT := 'Europe/London';
  v_today DATE := (now() AT TIME ZONE 'Europe/London')::date;
  result  JSONB;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  SELECT jsonb_build_object(
    'visits_total', (SELECT count(*) FROM public.user_sessions WHERE user_id = target_id),
    'logins_total', (SELECT count(*) FROM public.user_sessions WHERE user_id = target_id AND is_login),
    'page_views',   (SELECT COALESCE(sum(page_views),0) FROM public.user_sessions WHERE user_id = target_id),
    'days_active',  (SELECT count(DISTINCT (started_at AT TIME ZONE v_tz)::date)
                       FROM public.user_sessions WHERE user_id = target_id),
    'first_seen',   (SELECT min(started_at) FROM public.user_sessions WHERE user_id = target_id),
    'daily', (
      SELECT jsonb_agg(COALESCE(x.n, 0) ORDER BY d)
        FROM generate_series(v_today - 89, v_today, interval '1 day') d
        LEFT JOIN (SELECT (started_at AT TIME ZONE v_tz)::date AS day, count(*) AS n
                     FROM public.user_sessions
                    WHERE user_id = target_id
                      AND started_at >= ((v_today - 89)::timestamp AT TIME ZONE v_tz)
                    GROUP BY 1) x ON x.day = d::date
    ),
    'sessions', (
      SELECT COALESCE(jsonb_agg(row_to_json(t) ORDER BY t.started_at DESC), '[]'::jsonb) FROM (
        SELECT started_at, last_seen_at, page_views, is_login, first_path, last_path, user_agent, source
          FROM public.user_sessions
         WHERE user_id = target_id
         ORDER BY started_at DESC
         LIMIT 100
      ) t
    )
  ) INTO result;

  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_user_activity(UUID) TO authenticated;
