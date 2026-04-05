-- Add vocab_chapter_limit to classes
-- When set, mastery tracking only counts words up to this chapter.
-- e.g. Year 7 prep might be chapters 1-6, Year 8 chapters 1-10.
ALTER TABLE classes ADD COLUMN IF NOT EXISTS vocab_chapter_limit INTEGER DEFAULT NULL;

COMMENT ON COLUMN classes.vocab_chapter_limit IS 'Max chapter for vocab mastery tracking. NULL = use full list.';
