-- ============================================
-- Prep homework: how many of the reps must be typed
-- ============================================
-- Prep homework (083) asks for every word right `reps` times. This lets the
-- teacher decide how many of those have to be typed rather than multiple
-- choice, so a student can't fill the bar by clicking. The typed reps are the
-- last ones for each word: multiple choice first, then typing.
-- NULL keeps the original rule (the last two typed).

ALTER TABLE v2_assignments ADD COLUMN IF NOT EXISTS typed_reps INTEGER
    CHECK (typed_reps IS NULL OR typed_reps BETWEEN 0 AND 20);

COMMENT ON COLUMN v2_assignments.typed_reps IS
'Prep homework, vocab only: how many of each word''s reps must be typed (the last ones). NULL = 2.';
