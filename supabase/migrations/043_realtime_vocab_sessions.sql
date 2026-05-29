-- ============================================
-- Realtime on vocab_sessions
-- ============================================
-- The teacher's live Do Now leaderboard subscribes to changes on
-- vocab_sessions so it updates the instant a student answers, instead of
-- polling. This adds the table to Supabase's realtime publication.
--
-- Row-level security still applies to realtime: a teacher only receives
-- change events for sessions they're already allowed to read (their v2
-- class members, via the policy from migration 041). The client only uses
-- the event as a signal to re-fetch through that same RLS-scoped query.
--
-- Safe to run more than once — the DO block ignores "already a member".

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE vocab_sessions;
EXCEPTION WHEN OTHERS THEN
  -- already in the publication (or it's managed elsewhere) — nothing to do
  NULL;
END $$;
