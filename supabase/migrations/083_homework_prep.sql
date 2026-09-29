-- ============================================
-- Homework "prep" target: fill the bar
-- ============================================
-- A new target kind for v2_assignments. Instead of "80% secure", every item in
-- the homework has to be answered correctly `reps` times (a wrong answer knocks
-- it back one). The last two reps of each word have to be typed. Progress is
-- the sum of each item's level over (items x reps), so the bar only fills when
-- every word has been worked properly, which takes real time.
--
-- Progress carries over between sittings: the tester rebuilds each item's
-- level from the student's homework_answers (082). Each attempt row also keeps
-- a snapshot of the overall bar (progress_pct), which is what the teacher's
-- list and the student pages read.

ALTER TABLE v2_assignments DROP CONSTRAINT IF EXISTS v2_assignments_target_kind_check;
ALTER TABLE v2_assignments ADD CONSTRAINT v2_assignments_target_kind_check
    CHECK (target_kind IN ('secure', 'attempted', 'prep'));

ALTER TABLE v2_assignments ADD COLUMN IF NOT EXISTS reps INTEGER
    CHECK (reps IS NULL OR reps BETWEEN 1 AND 20);

ALTER TABLE homework_attempts ADD COLUMN IF NOT EXISTS progress_pct INTEGER
    CHECK (progress_pct IS NULL OR progress_pct BETWEEN 0 AND 100);

COMMENT ON COLUMN v2_assignments.reps IS
'Prep homework only: correct answers each item needs to fill its part of the bar.';
COMMENT ON COLUMN homework_attempts.progress_pct IS
'Prep homework only: the student''s overall bar when this attempt last saved.';
