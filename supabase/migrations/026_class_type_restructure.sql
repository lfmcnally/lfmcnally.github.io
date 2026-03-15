-- ============================================
-- CLASS TYPE RESTRUCTURE
-- ============================================
-- Previously, class types were broad categories: 'latin', 'greek', 'classics', 'prep-latin'.
-- This migration splits them into more specific types that distinguish between
-- exam levels (Prep, GCSE, A Level) and subject areas, enabling the app to
-- serve level-appropriate content (e.g. different vocabulary lists, exam formats).
--
-- New valid types:
--   latin-prep    (formerly prep-latin)
--   latin-gcse    (formerly latin, unless name suggests A Level)
--   latin-alevel  (formerly latin, when name suggests A Level)
--   greek-gcse    (formerly greek, unless name suggests A Level)
--   greek-alevel  (formerly greek, when name suggests A Level)
--   civ-gcse      (formerly classics, unless name suggests A Level)
--   civ-alevel    (formerly classics, when name suggests A Level)

-- ============================================
-- 1. Remap existing class types
-- ============================================

-- Direct rename: prep-latin → latin-prep
UPDATE classes SET type = 'latin-prep' WHERE type = 'prep-latin';

-- Latin: promote to A Level if the class name contains A Level / sixth form indicators
UPDATE classes SET type = 'latin-alevel'
WHERE type = 'latin'
AND (
    lower(name) LIKE '%a level%' OR lower(name) LIKE '%a-level%' OR lower(name) LIKE '%alevel%'
    OR lower(name) LIKE '%year 12%' OR lower(name) LIKE '%year 13%'
    OR lower(name) LIKE '%yr 12%' OR lower(name) LIKE '%yr 13%'
    OR lower(name) LIKE '%sixth form%' OR lower(name) LIKE '%upper sixth%' OR lower(name) LIKE '%lower sixth%'
);

-- Remaining Latin classes default to GCSE
UPDATE classes SET type = 'latin-gcse' WHERE type = 'latin';

-- Greek: same A Level detection pattern
UPDATE classes SET type = 'greek-alevel'
WHERE type = 'greek'
AND (
    lower(name) LIKE '%a level%' OR lower(name) LIKE '%a-level%' OR lower(name) LIKE '%alevel%'
    OR lower(name) LIKE '%year 12%' OR lower(name) LIKE '%year 13%'
    OR lower(name) LIKE '%yr 12%' OR lower(name) LIKE '%yr 13%'
    OR lower(name) LIKE '%sixth form%' OR lower(name) LIKE '%upper sixth%' OR lower(name) LIKE '%lower sixth%'
);

-- Remaining Greek classes default to GCSE
UPDATE classes SET type = 'greek-gcse' WHERE type = 'greek';

-- Classics → Civilisation: same A Level detection pattern
UPDATE classes SET type = 'civ-alevel'
WHERE type = 'classics'
AND (
    lower(name) LIKE '%a level%' OR lower(name) LIKE '%a-level%' OR lower(name) LIKE '%alevel%'
    OR lower(name) LIKE '%year 12%' OR lower(name) LIKE '%year 13%'
    OR lower(name) LIKE '%yr 12%' OR lower(name) LIKE '%yr 13%'
    OR lower(name) LIKE '%sixth form%' OR lower(name) LIKE '%upper sixth%' OR lower(name) LIKE '%lower sixth%'
);

-- Remaining Classics classes default to GCSE
UPDATE classes SET type = 'civ-gcse' WHERE type = 'classics';

-- ============================================
-- 2. Enforce valid types with a CHECK constraint
-- ============================================
-- This prevents any future inserts/updates from using the old type values.
ALTER TABLE classes ADD CONSTRAINT classes_type_check
CHECK (type IN ('latin-prep', 'latin-gcse', 'latin-alevel', 'greek-gcse', 'greek-alevel', 'civ-gcse', 'civ-alevel'));

-- ============================================
-- 3. Add course column to content_test_attempts
-- ============================================
-- Civilisation classes can study different courses (e.g. 'myth', 'politics').
-- This column allows filtering test attempts by course within a civ class.
ALTER TABLE content_test_attempts ADD COLUMN IF NOT EXISTS course TEXT;
