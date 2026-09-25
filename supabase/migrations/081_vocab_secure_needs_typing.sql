-- ============================================
-- Secure vocabulary now needs typed answers
-- ============================================
-- The v2 vocab testers used to let multiple-choice answers count towards
-- the three correct days a word needs to be Secure. From now on only typed
-- answers count, so every word that is Secure today was (at least partly)
-- earned by multiple choice.
--
-- Drop those words back one step to Building: keep p_know, reset the
-- day count and the review schedule. The student then has to type the word
-- correctly on three different days to make it Secure again.
--
-- Only the vocab tester lists are touched (not quiz or grammar lists). The
-- date guard keeps the migration safe to re-run: a word could not have been
-- typed right on three different days before 2026-09-27. The testers apply
-- the same rule to each student's browser copy when it next loads.

UPDATE vocab_bkt
   SET distinct_correct_days = 0,
       last_correct_date     = NULL,
       next_review_at        = NULL,
       review_interval_days  = NULL
 WHERE vocab_list IN ('latin-gcse', 'latin-alevel', 'latin-suburani',
                      'greek-gcse', 'greek-alevel')
   AND p_know >= 0.95
   AND distinct_correct_days >= 3
   AND (last_correct_date IS NULL OR last_correct_date < DATE '2026-09-27');
