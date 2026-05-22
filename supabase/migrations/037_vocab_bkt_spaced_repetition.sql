-- ============================================
-- Spaced-repetition + multi-session mastery for v2 vocab BKT
-- ============================================
-- Adds the columns needed to enforce two new rules:
--
--   1. A word can't be classified "secure" from a single cram session.
--      Mastery now requires p_know >= 0.95 AND distinct_correct_days >= 3
--      (i.e. correct answers on at least three different calendar days).
--
--   2. Once secure, a word gets a `next_review_at` date. Each successful
--      review at or after that date doubles the interval (7d → 14d → 30d
--      → 60d → 120d → 180d cap). A wrong answer while secure resets the
--      interval to 7 days and drops `distinct_correct_days` to 0, so the
--      student has to re-earn secure status.
--
-- Backfill is intentionally conservative: every existing row with any
-- correct attempts is treated as having ONE correct day so far, so
-- previously-"secure" words become "Building" in the new model until the
-- student demonstrates the day-spaced retention the new model demands.

ALTER TABLE vocab_bkt
    ADD COLUMN IF NOT EXISTS distinct_correct_days INTEGER NOT NULL DEFAULT 0
        CHECK (distinct_correct_days >= 0),
    ADD COLUMN IF NOT EXISTS last_correct_date     DATE,
    ADD COLUMN IF NOT EXISTS next_review_at        TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS review_interval_days  INTEGER
        CHECK (review_interval_days IS NULL OR review_interval_days > 0);

-- Conservative backfill: existing rows with at least one correct attempt
-- count as a single correct day. They'll need two more days of correct
-- answers to reach the new "Secure" status.
UPDATE vocab_bkt
   SET distinct_correct_days = 1,
       last_correct_date     = (last_seen_at AT TIME ZONE 'UTC')::date
 WHERE correct > 0
   AND distinct_correct_days = 0;

-- Index to speed up "what's due for review?" queries on the dashboard
CREATE INDEX IF NOT EXISTS idx_vocab_bkt_due
    ON vocab_bkt (student_id, next_review_at)
 WHERE next_review_at IS NOT NULL;

COMMENT ON COLUMN vocab_bkt.distinct_correct_days IS
'Count of distinct calendar days on which this word has been answered correctly. Resets to 0 if the student answers wrong while the word was Secure.';

COMMENT ON COLUMN vocab_bkt.last_correct_date IS
'Local calendar date of the most recent correct answer, used to decide whether to increment distinct_correct_days on the next correct answer.';

COMMENT ON COLUMN vocab_bkt.next_review_at IS
'When this word is next due for a spaced-repetition review. NULL means the word has not yet reached Secure status.';

COMMENT ON COLUMN vocab_bkt.review_interval_days IS
'Current SR interval in days. Doubles on each correct review at-or-after next_review_at, up to 180 days. Resets to 7 on a wrong answer while Secure.';
