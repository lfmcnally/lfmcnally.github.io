-- ============================================
-- Raise the Data API "max rows" cap (1000 → 50000)
-- ============================================
-- PostgREST (the Supabase Data API) caps every read response at a fixed
-- number of rows — 1000 by default. This is a per-RESPONSE limit, not a
-- per-table one: a query simply stops returning rows once it hits the cap,
-- silently and with no error.
--
-- The teacher dashboard reads one row per (student, word) for a whole class at
-- once. With 466 GCSE Latin words, even a few active students exceed 1000 rows,
-- so the tail was dropped and those words rendered as "never attempted" even
-- though the student had practised them.
--
-- The dashboard now pages through results with .range() (see PR #591), so the
-- cap no longer breaks it. This migration raises the cap as well — belt and
-- suspenders: any read that matches up to 50000 rows returns in full, even if a
-- future code path forgets to paginate. A single class is students × words, so
-- 50000 comfortably covers any realistic class (e.g. 100 students × 466 ≈
-- 46,600) while still bounding the largest payload a single query can pull.
--
-- This mirrors the Dashboard control at Settings → API → Data API → "Max rows";
-- keeping it here makes the change reproducible and version-controlled. The
-- `authenticator` role is the one PostgREST connects as, so its per-role
-- `pgrst.db_max_rows` setting is what the API actually uses.

ALTER ROLE authenticator SET pgrst.db_max_rows TO '50000';

-- Ask PostgREST to reload its config immediately rather than on next restart.
NOTIFY pgrst, 'reload config';
