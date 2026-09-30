-- ============================================
-- Optional title for homework / tasks
-- ============================================
-- A teacher can name what they set ("Today's Do Now", "Test prep"). When it's
-- left blank the pages fall back to the automatic label built from the scope
-- ("GCSE Latin · Chapter 2 · 12 words").

ALTER TABLE v2_assignments ADD COLUMN IF NOT EXISTS title TEXT
    CHECK (title IS NULL OR char_length(title) <= 80);

COMMENT ON COLUMN v2_assignments.title IS
'Optional teacher-given name. NULL = use the automatic label from the scope.';
