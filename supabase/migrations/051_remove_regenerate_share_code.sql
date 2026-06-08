-- ============================================
-- Remove the share-code regeneration RPC
-- ============================================
-- Regenerating a share code (migration 038) caused more harm than good: a
-- student who regenerates silently invalidates the code their teacher and
-- friends used to link to them. Existing class memberships and friendships
-- survive (they're keyed by user id, not the code), but it's a confusing
-- footgun with no real upside — codes aren't secret enough to be worth
-- rotating. The profile UI no longer offers it; this drops the function so a
-- crafted client can't call it either. Codes are still assigned automatically
-- on signup and are unique; this only removes the manual rotate.

DROP FUNCTION IF EXISTS regenerate_share_code();
