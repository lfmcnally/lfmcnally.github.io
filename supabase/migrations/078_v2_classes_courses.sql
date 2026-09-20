-- ============================================
-- v2_classes.courses
-- ============================================
-- Lets a teacher say which courses a class actually studies, rather than
-- inferring it from the class type. A GCSE Classical Civilisation class
-- might cover Myth & Religion, the Homeric World, or both, and the teacher
-- dashboard shows a tab per assigned course so the same class can be
-- followed across all of them without creating a second class.
--
-- Values are vocab_list keys, matching vocab_bkt.vocab_list and
-- v2_do_now.vocab_list — e.g. '{civ-myth-religion,civ-homeric-world}'.
-- An empty array means "not set", and the dashboard falls back to the
-- courses implied by the class type, so existing classes keep working
-- untouched.
--
-- No new RLS policy needed — migration 040 already allows a teacher to
-- UPDATE their own v2_classes rows.
--
-- Safe to run more than once.

ALTER TABLE v2_classes
  ADD COLUMN IF NOT EXISTS courses TEXT[] NOT NULL DEFAULT '{}';
