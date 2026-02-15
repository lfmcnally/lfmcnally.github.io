-- Add weekly test day column to classes table
-- Teachers set which day of the week students take their vocab test (0=Sun, 1=Mon, ... 6=Sat)

ALTER TABLE classes ADD COLUMN IF NOT EXISTS vocab_test_day INTEGER;
