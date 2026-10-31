-- ============================================================================
-- SITE CONTROL — page analytics, announcements and page locks ("admin mode")
-- ============================================================================
-- Backs /shared/site-pulse.js (loaded on every page), /shared/admin-mode.js
-- (the on-page admin toolbar) and /version2/admin/pages.html.
--
--   page_hit()          one call per page load, for everyone (signed in or
--                       not). Counts the view, records the visit for signed-in
--                       users (via track_activity from migration 086) and
--                       returns the banners and lock state for that page.
--   site_pages          one row per page path: title, first/last seen, and
--                       admin settings (lock + message, private note).
--   page_views_daily    views per page per UK day (all visitors).
--   page_view_users     views per page per UK day per signed-in user: gives
--                       unique visitors, schools, and "who's here now".
--   site_announcements  (existing table, migration 002) gains a page path,
--                       audience, link, schedule and on/off switch. Until now
--                       nothing on the site displayed these.
--
-- Admins' own page views are not counted, and obvious bots are ignored.
-- Paths are normalised: query/hash dropped, "index.html" and ".html" removed,
-- so /latin/vocab.html and /latin/vocab count as the same page.
-- ============================================================================

-- --------------------------------------------
-- 0. Path normaliser
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public._norm_path(p TEXT)
RETURNS TEXT
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  v TEXT := split_part(split_part(COALESCE(p, ''), '?', 1), '#', 1);
BEGIN
  v := btrim(v);
  IF v = '' OR left(v, 1) <> '/' THEN
    RETURN NULL;
  END IF;
  v := regexp_replace(v, '/{2,}', '/', 'g');
  v := regexp_replace(v, '/index\.html?$', '/');
  v := regexp_replace(v, '\.html?$', '');
  RETURN left(v, 300);
END;
$$;

-- --------------------------------------------
-- 1. Tables
-- --------------------------------------------
CREATE TABLE IF NOT EXISTS public.site_pages (
  path                TEXT PRIMARY KEY,
  title               TEXT,
  first_seen          TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_seen           TIMESTAMPTZ NOT NULL DEFAULT now(),
  locked              BOOLEAN NOT NULL DEFAULT false,
  lock_message        TEXT,
  admin_note          TEXT,
  settings_updated_at TIMESTAMPTZ,
  settings_updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS public.page_views_daily (
  day         DATE NOT NULL,
  path        TEXT NOT NULL,
  views       INTEGER NOT NULL DEFAULT 0,
  anon_views  INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, path)
);
CREATE INDEX IF NOT EXISTS idx_pvd_path_day ON public.page_views_daily (path, day);

CREATE TABLE IF NOT EXISTS public.page_view_users (
  day       DATE NOT NULL,
  path      TEXT NOT NULL,
  user_id   UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  views     INTEGER NOT NULL DEFAULT 1,
  first_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (day, path, user_id)
);
CREATE INDEX IF NOT EXISTS idx_pvu_last_at   ON public.page_view_users (last_at DESC);
CREATE INDEX IF NOT EXISTS idx_pvu_path_day  ON public.page_view_users (path, day);
CREATE INDEX IF NOT EXISTS idx_pvu_user_day  ON public.page_view_users (user_id, day);

ALTER TABLE public.site_pages       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views_daily ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_view_users  ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.site_pages, public.page_views_daily, public.page_view_users FROM anon, authenticated;

-- Announcements: extend the existing table (migration 002). Created here too in
-- case 002 never fully ran (its partial index fails on current Postgres).
CREATE TABLE IF NOT EXISTS public.site_announcements (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title      TEXT NOT NULL DEFAULT '',
  content    TEXT NOT NULL,
  type       TEXT DEFAULT 'info' CHECK (type IN ('info', 'warning', 'success')),
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.site_announcements ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.site_announcements
  ADD COLUMN IF NOT EXISTS path        TEXT,                       -- NULL = whole site
  ADD COLUMN IF NOT EXISTS audience    TEXT NOT NULL DEFAULT 'all',
  ADD COLUMN IF NOT EXISTS active      BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS link_url    TEXT,
  ADD COLUMN IF NOT EXISTS link_text   TEXT,
  ADD COLUMN IF NOT EXISTS starts_at   TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS dismissible BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS created_by  UUID,
  ADD COLUMN IF NOT EXISTS updated_at  TIMESTAMPTZ;

DO $$
BEGIN
  ALTER TABLE public.site_announcements
    ADD CONSTRAINT site_announcements_audience_check
    CHECK (audience IN ('all', 'signed_in', 'anon', 'students', 'teachers'));
EXCEPTION WHEN duplicate_object THEN NULL;
END;
$$;

CREATE INDEX IF NOT EXISTS idx_site_announcements_path ON public.site_announcements (path);

-- --------------------------------------------
-- 2. page_hit — called by every page load
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public.page_hit(
  p_path       TEXT,
  p_title      TEXT DEFAULT NULL,
  p_user_agent TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_path  TEXT := public._norm_path(p_path);
  v_title TEXT := left(nullif(btrim(p_title), ''), 200);
  v_uid   UUID := auth.uid();
  v_admin BOOLEAN := false;
  v_role  TEXT := NULL;
  v_day   DATE := (now() AT TIME ZONE 'Europe/London')::date;
  v_bot   BOOLEAN := COALESCE(p_user_agent, '') ~* '(bot|crawl|spider|slurp|lighthouse|headless|preview|facebookexternalhit|embedly)';
  v_page  public.site_pages%ROWTYPE;
  v_banners JSONB;
BEGIN
  IF v_path IS NULL THEN
    RETURN '{}'::jsonb;
  END IF;

  IF v_uid IS NOT NULL THEN
    SELECT COALESCE(u.is_admin, false), COALESCE(u.role, 'student')
      INTO v_admin, v_role
      FROM public.users u WHERE u.id = v_uid;
    v_admin := COALESCE(v_admin, false);
  END IF;

  -- Page registry (written at most every 5 minutes per page, or on a new title).
  IF NOT v_bot THEN
    INSERT INTO public.site_pages AS sp (path, title)
    VALUES (v_path, v_title)
    ON CONFLICT (path) DO UPDATE
      SET last_seen = now(),
          title     = COALESCE(EXCLUDED.title, sp.title)
      WHERE sp.last_seen < now() - interval '5 minutes'
         OR (EXCLUDED.title IS NOT NULL AND sp.title IS DISTINCT FROM EXCLUDED.title);
  END IF;
  SELECT * INTO v_page FROM public.site_pages WHERE path = v_path;

  -- Count the view (not bots, not admins browsing their own site).
  IF NOT v_bot AND NOT v_admin THEN
    INSERT INTO public.page_views_daily AS d (day, path, views, anon_views)
    VALUES (v_day, v_path, 1, CASE WHEN v_uid IS NULL THEN 1 ELSE 0 END)
    ON CONFLICT (day, path) DO UPDATE
      SET views      = d.views + 1,
          anon_views = d.anon_views + EXCLUDED.anon_views;

    IF v_uid IS NOT NULL THEN
      INSERT INTO public.page_view_users AS pu (day, path, user_id)
      VALUES (v_day, v_path, v_uid)
      ON CONFLICT (day, path, user_id) DO UPDATE
        SET views = pu.views + 1, last_at = now();
    END IF;
  END IF;

  -- Visit log (migration 086) for every signed-in user.
  IF v_uid IS NOT NULL AND NOT v_bot THEN
    PERFORM public.track_activity(v_path, p_user_agent);
  END IF;

  -- Banners for this page. Admins see every live banner, whatever its audience.
  SELECT COALESCE(jsonb_agg(jsonb_build_object(
           'id', a.id, 'title', a.title, 'content', a.content, 'type', a.type,
           'link_url', a.link_url, 'link_text', a.link_text,
           'dismissible', a.dismissible, 'audience', a.audience, 'path', a.path
         ) ORDER BY (a.path IS NULL), a.created_at DESC), '[]'::jsonb)
    INTO v_banners
    FROM public.site_announcements a
   WHERE a.active
     AND (a.starts_at  IS NULL OR a.starts_at  <= now())
     AND (a.expires_at IS NULL OR a.expires_at >  now())
     AND (a.path IS NULL OR a.path = v_path)
     AND (
           v_admin
        OR a.audience = 'all'
        OR (a.audience = 'signed_in' AND v_uid IS NOT NULL)
        OR (a.audience = 'anon'      AND v_uid IS NULL)
        OR (a.audience = 'students'  AND v_uid IS NOT NULL AND v_role = 'student')
        OR (a.audience = 'teachers'  AND v_uid IS NOT NULL AND v_role = 'teacher')
     );

  RETURN jsonb_build_object(
    'path',    v_path,
    'admin',   v_admin,
    'banners', v_banners,
    'lock',    CASE WHEN COALESCE(v_page.locked, false)
                    THEN jsonb_build_object('message', v_page.lock_message)
                    ELSE NULL END
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.page_hit(TEXT, TEXT, TEXT) TO anon, authenticated;

-- --------------------------------------------
-- 3. admin_page_stats — the on-page admin toolbar
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public.admin_page_stats(p_path TEXT)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_path  TEXT := public._norm_path(p_path);
  v_tz    TEXT := 'Europe/London';
  v_today DATE := (now() AT TIME ZONE 'Europe/London')::date;
  v_30    INTEGER;
  result  JSONB;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  SELECT COALESCE(sum(views), 0) INTO v_30
    FROM public.page_views_daily WHERE path = v_path AND day > v_today - 30;

  SELECT jsonb_build_object(
    'path', v_path,
    'page', (SELECT to_jsonb(sp) - 'settings_updated_by' FROM public.site_pages sp WHERE sp.path = v_path),
    'views_today', (SELECT COALESCE(sum(views),0) FROM public.page_views_daily WHERE path = v_path AND day = v_today),
    'views_7d',    (SELECT COALESCE(sum(views),0) FROM public.page_views_daily WHERE path = v_path AND day > v_today - 7),
    'views_30d',   v_30,
    'anon_30d',    (SELECT COALESCE(sum(anon_views),0) FROM public.page_views_daily WHERE path = v_path AND day > v_today - 30),
    'views_all',   (SELECT COALESCE(sum(views),0) FROM public.page_views_daily WHERE path = v_path),
    'users_7d',    (SELECT count(DISTINCT user_id) FROM public.page_view_users WHERE path = v_path AND day > v_today - 7),
    'users_30d',   (SELECT count(DISTINCT user_id) FROM public.page_view_users WHERE path = v_path AND day > v_today - 30),
    'rank_30d',    (SELECT count(*) + 1 FROM (
                      SELECT path FROM public.page_views_daily WHERE day > v_today - 30
                       GROUP BY path HAVING sum(views) > v_30) r),
    'pages_30d',   (SELECT count(DISTINCT path) FROM public.page_views_daily WHERE day > v_today - 30),
    'daily', (
      SELECT jsonb_agg(jsonb_build_object('day', d::date, 'views', COALESCE(x.views,0), 'users', COALESCE(y.users,0)) ORDER BY d)
        FROM generate_series(v_today - 29, v_today, interval '1 day') d
        LEFT JOIN (SELECT day, sum(views) AS views FROM public.page_views_daily
                    WHERE path = v_path AND day > v_today - 30 GROUP BY day) x ON x.day = d::date
        LEFT JOIN (SELECT day, count(DISTINCT user_id) AS users FROM public.page_view_users
                    WHERE path = v_path AND day > v_today - 30 GROUP BY day) y ON y.day = d::date
    ),
    'here_now', (
      SELECT COALESCE(jsonb_agg(row_to_json(t) ORDER BY t.last_at DESC), '[]'::jsonb) FROM (
        SELECT pu.user_id, u.full_name, CASE WHEN u.is_admin THEN 'admin' ELSE COALESCE(u.role,'student') END AS role,
               nullif(btrim(u.school),'') AS school, u.avatar_color, max(pu.last_at) AS last_at
          FROM public.page_view_users pu JOIN public.users u ON u.id = pu.user_id
         WHERE pu.path = v_path AND pu.last_at > now() - interval '10 minutes'
         GROUP BY pu.user_id, u.full_name, u.is_admin, u.role, u.school, u.avatar_color
      ) t
    ),
    'top_schools', (
      SELECT COALESCE(jsonb_agg(row_to_json(t) ORDER BY t.users DESC, t.views DESC), '[]'::jsonb) FROM (
        SELECT nullif(btrim(u.school),'') AS school, count(DISTINCT pu.user_id) AS users, sum(pu.views) AS views
          FROM public.page_view_users pu JOIN public.users u ON u.id = pu.user_id
         WHERE pu.path = v_path AND pu.day > v_today - 30 AND nullif(btrim(u.school),'') IS NOT NULL
         GROUP BY 1 ORDER BY 2 DESC, 3 DESC LIMIT 8
      ) t
    ),
    'top_users', (
      SELECT COALESCE(jsonb_agg(row_to_json(t) ORDER BY t.views DESC), '[]'::jsonb) FROM (
        SELECT pu.user_id, u.full_name, CASE WHEN u.is_admin THEN 'admin' ELSE COALESCE(u.role,'student') END AS role,
               nullif(btrim(u.school),'') AS school, u.avatar_color,
               sum(pu.views) AS views, count(DISTINCT pu.day) AS days, max(pu.last_at) AS last_at
          FROM public.page_view_users pu JOIN public.users u ON u.id = pu.user_id
         WHERE pu.path = v_path AND pu.day > v_today - 30
         GROUP BY pu.user_id, u.full_name, u.is_admin, u.role, u.school, u.avatar_color
         ORDER BY views DESC LIMIT 15
      ) t
    ),
    'banners', (
      SELECT COALESCE(jsonb_agg(to_jsonb(a) ORDER BY a.created_at DESC), '[]'::jsonb)
        FROM public.site_announcements a
       WHERE a.path = v_path
    )
  ) INTO result;

  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_page_stats(TEXT) TO authenticated;

-- --------------------------------------------
-- 4. admin_top_pages — the "Pages & controls" table
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public.admin_top_pages(p_days INTEGER DEFAULT 30)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_days  INTEGER := LEAST(GREATEST(COALESCE(p_days, 30), 1), 730);
  v_today DATE := (now() AT TIME ZONE 'Europe/London')::date;
  v_from  DATE;
  v_prev  DATE;
  result  JSONB;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;
  v_from := v_today - (v_days - 1);
  v_prev := v_from - v_days;

  WITH cur AS (
    SELECT path, sum(views) AS views, sum(anon_views) AS anon_views
      FROM public.page_views_daily WHERE day >= v_from GROUP BY path
  ),
  prev AS (
    SELECT path, sum(views) AS views
      FROM public.page_views_daily WHERE day >= v_prev AND day < v_from GROUP BY path
  ),
  usr AS (
    SELECT path, count(DISTINCT user_id) AS users
      FROM public.page_view_users WHERE day >= v_from GROUP BY path
  ),
  pages AS (
    SELECT sp.path, sp.title, sp.first_seen, sp.last_seen, sp.locked, sp.admin_note,
           COALESCE(c.views, 0) AS views, COALESCE(c.anon_views, 0) AS anon_views,
           COALESCE(p.views, 0) AS prev_views, COALESCE(u.users, 0) AS users
      FROM public.site_pages sp
      LEFT JOIN cur  c ON c.path = sp.path
      LEFT JOIN prev p ON p.path = sp.path
      LEFT JOIN usr  u ON u.path = sp.path
  )
  SELECT jsonb_build_object(
    'days', v_days,
    'tracking_since', (SELECT min(day) FROM public.page_views_daily),
    'total_views', (SELECT COALESCE(sum(views),0) FROM cur),
    'total_anon',  (SELECT COALESCE(sum(anon_views),0) FROM cur),
    'pages', (SELECT COALESCE(jsonb_agg(row_to_json(x) ORDER BY x.views DESC, x.path), '[]'::jsonb) FROM pages x)
  ) INTO result;

  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_top_pages(INTEGER) TO authenticated;

-- --------------------------------------------
-- 5. admin_live_now — who is on the site right now
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public.admin_live_now(p_minutes INTEGER DEFAULT 10)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_mins INTEGER := LEAST(GREATEST(COALESCE(p_minutes, 10), 1), 120);
  result JSONB;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;

  SELECT COALESCE(jsonb_agg(row_to_json(t) ORDER BY t.last_at DESC), '[]'::jsonb) INTO result FROM (
    SELECT DISTINCT ON (pu.user_id)
           pu.user_id, u.full_name,
           CASE WHEN u.is_admin THEN 'admin' ELSE COALESCE(u.role,'student') END AS role,
           nullif(btrim(u.school),'') AS school, u.avatar_color,
           pu.path, sp.title, pu.last_at
      FROM public.page_view_users pu
      JOIN public.users u ON u.id = pu.user_id
      LEFT JOIN public.site_pages sp ON sp.path = pu.path
     WHERE pu.last_at > now() - make_interval(mins => v_mins)
     ORDER BY pu.user_id, pu.last_at DESC
  ) t;

  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_live_now(INTEGER) TO authenticated;

-- --------------------------------------------
-- 6. Page settings: lock, lock message, private note
-- --------------------------------------------
-- NULL = leave unchanged. An empty string clears a message or note.
CREATE OR REPLACE FUNCTION public.admin_set_page(
  p_path         TEXT,
  p_locked       BOOLEAN DEFAULT NULL,
  p_lock_message TEXT    DEFAULT NULL,
  p_note         TEXT    DEFAULT NULL,
  p_title        TEXT    DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_path TEXT := public._norm_path(p_path);
  v_row  public.site_pages%ROWTYPE;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;
  IF v_path IS NULL THEN
    RAISE EXCEPTION 'invalid page path';
  END IF;
  IF v_path ~ '^/version2/admin(/|$)' AND COALESCE(p_locked, false) THEN
    RAISE EXCEPTION 'admin pages cannot be locked';
  END IF;

  INSERT INTO public.site_pages (path, title) VALUES (v_path, left(nullif(btrim(p_title), ''), 200))
  ON CONFLICT (path) DO NOTHING;

  UPDATE public.site_pages
     SET locked       = COALESCE(p_locked, locked),
         lock_message = CASE WHEN p_lock_message IS NULL THEN lock_message
                             ELSE left(nullif(btrim(p_lock_message), ''), 500) END,
         admin_note   = CASE WHEN p_note IS NULL THEN admin_note
                             ELSE left(nullif(btrim(p_note), ''), 4000) END,
         settings_updated_at = now(),
         settings_updated_by = auth.uid()
   WHERE path = v_path
  RETURNING * INTO v_row;

  RETURN to_jsonb(v_row) - 'settings_updated_by';
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_set_page(TEXT, BOOLEAN, TEXT, TEXT, TEXT) TO authenticated;

-- --------------------------------------------
-- 7. Announcements
-- --------------------------------------------
CREATE OR REPLACE FUNCTION public.admin_save_announcement(
  p_id          UUID,
  p_content     TEXT,
  p_title       TEXT        DEFAULT '',
  p_type        TEXT        DEFAULT 'info',
  p_path        TEXT        DEFAULT NULL,
  p_audience    TEXT        DEFAULT 'all',
  p_link_url    TEXT        DEFAULT NULL,
  p_link_text   TEXT        DEFAULT NULL,
  p_starts_at   TIMESTAMPTZ DEFAULT NULL,
  p_expires_at  TIMESTAMPTZ DEFAULT NULL,
  p_active      BOOLEAN     DEFAULT true,
  p_dismissible BOOLEAN     DEFAULT true
)
RETURNS UUID
LANGUAGE plpgsql
VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_id   UUID;
  v_path TEXT := CASE WHEN nullif(btrim(p_path), '') IS NULL THEN NULL ELSE public._norm_path(p_path) END;
  v_link TEXT := nullif(btrim(p_link_url), '');
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;
  IF nullif(btrim(p_content), '') IS NULL THEN
    RAISE EXCEPTION 'the message cannot be empty';
  END IF;
  IF COALESCE(p_type, 'info') NOT IN ('info', 'warning', 'success') THEN
    RAISE EXCEPTION 'invalid type: %', p_type;
  END IF;
  IF COALESCE(p_audience, 'all') NOT IN ('all', 'signed_in', 'anon', 'students', 'teachers') THEN
    RAISE EXCEPTION 'invalid audience: %', p_audience;
  END IF;
  -- Links must be site-relative or https, so a banner can never run script.
  IF v_link IS NOT NULL AND v_link !~ '^(https://|/)' THEN
    RAISE EXCEPTION 'links must start with https:// or /';
  END IF;

  IF p_id IS NULL THEN
    INSERT INTO public.site_announcements
      (title, content, type, path, audience, link_url, link_text, starts_at, expires_at, active, dismissible, created_by, updated_at)
    VALUES
      (COALESCE(btrim(p_title), ''), btrim(p_content), COALESCE(p_type, 'info'), v_path, COALESCE(p_audience, 'all'),
       v_link, nullif(btrim(p_link_text), ''), p_starts_at, p_expires_at, COALESCE(p_active, true),
       COALESCE(p_dismissible, true), auth.uid(), now())
    RETURNING id INTO v_id;
  ELSE
    UPDATE public.site_announcements
       SET title = COALESCE(btrim(p_title), ''), content = btrim(p_content), type = COALESCE(p_type, 'info'),
           path = v_path, audience = COALESCE(p_audience, 'all'), link_url = v_link,
           link_text = nullif(btrim(p_link_text), ''), starts_at = p_starts_at, expires_at = p_expires_at,
           active = COALESCE(p_active, true), dismissible = COALESCE(p_dismissible, true), updated_at = now()
     WHERE id = p_id
    RETURNING id INTO v_id;
    IF v_id IS NULL THEN
      RAISE EXCEPTION 'no such announcement';
    END IF;
  END IF;

  RETURN v_id;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_save_announcement(UUID, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TIMESTAMPTZ, TIMESTAMPTZ, BOOLEAN, BOOLEAN) TO authenticated;

CREATE OR REPLACE FUNCTION public.admin_delete_announcement(p_id UUID)
RETURNS VOID
LANGUAGE plpgsql
VOLATILE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised' USING ERRCODE = '42501';
  END IF;
  DELETE FROM public.site_announcements WHERE id = p_id;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_delete_announcement(UUID) TO authenticated;

CREATE OR REPLACE FUNCTION public.admin_list_announcements()
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
  SELECT COALESCE(jsonb_agg(to_jsonb(a) || jsonb_build_object(
           'status', CASE
             WHEN NOT a.active THEN 'off'
             WHEN a.expires_at IS NOT NULL AND a.expires_at <= now() THEN 'expired'
             WHEN a.starts_at  IS NOT NULL AND a.starts_at  >  now() THEN 'scheduled'
             ELSE 'live' END,
           'page_title', (SELECT sp.title FROM public.site_pages sp WHERE sp.path = a.path)
         ) ORDER BY a.created_at DESC), '[]'::jsonb)
    INTO result
    FROM public.site_announcements a;
  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.admin_list_announcements() TO authenticated;
