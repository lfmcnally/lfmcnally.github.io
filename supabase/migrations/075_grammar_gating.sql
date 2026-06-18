-- 075_grammar_gating.sql
-- ===========================================================================
-- Phase 2 of the grammar-chapters plan (GRAMMAR_CHAPTERS_PLAN.md): the data
-- model for gating assessments by what's been taught, on the "Latin to GCSE"
-- (Taylor) scheme. Both the grammar nuggets (migration 074) and the GCSE
-- defined vocabulary (latin-gcse.js) are tagged with chapters 1-10, so a
-- sentence can be kept inside a student's window on BOTH axes — vocab they've
-- met and grammar from current + previous chapters.
--
-- All additive / nullable, so it's safe to apply before any UI uses it.
-- ===========================================================================

-- Where a class is up to in the scheme (teacher sets it; advances over the
-- year). 0 / NULL = not set → no gating for that class.
ALTER TABLE v2_classes ADD COLUMN IF NOT EXISTS grammar_chapter INT;
COMMENT ON COLUMN v2_classes.grammar_chapter IS
  'Latin to GCSE chapter (1-10) the class has reached. Gates which practice a student sees. NULL = ungated.';

-- A self-serve student's own level, when not driven by a class.
ALTER TABLE users ADD COLUMN IF NOT EXISTS grammar_chapter INT;
COMMENT ON COLUMN users.grammar_chapter IS
  'Self-serve learner''s current Latin to GCSE chapter (1-10). NULL = unset.';

-- The "grammar ceiling" of an assessment = the latest chapter among the
-- constructs/vocab it CONTAINS. A student at chapter N may attempt it iff
-- grammar_ceiling <= N. NULL = ungated (always available).
ALTER TABLE bank_assessments ADD COLUMN IF NOT EXISTS grammar_ceiling INT;
COMMENT ON COLUMN bank_assessments.grammar_ceiling IS
  'Latest Latin to GCSE chapter (1-10) the assessment requires. Student at chapter N sees it iff ceiling <= N. NULL = ungated.';

-- Is this an auto-generated per-nugget practice set? (vs a hand-authored test.)
ALTER TABLE bank_assessments ADD COLUMN IF NOT EXISTS is_practice BOOLEAN NOT NULL DEFAULT false;

-- Which nuggets an assessment TESTS (its focus) or merely CONTAINS (drives the
-- ceiling). tests ⊆ contains. Lets us answer "practise the ablative at my
-- level" = tests=ablative AND ceiling <= my chapter.
CREATE TABLE IF NOT EXISTS bank_assessment_nuggets (
    assessment_id UUID NOT NULL REFERENCES bank_assessments(id) ON DELETE CASCADE,
    nugget_id     UUID NOT NULL REFERENCES grammar_nuggets(id) ON DELETE CASCADE,
    role          TEXT NOT NULL DEFAULT 'contains' CHECK (role IN ('tests','contains')),
    PRIMARY KEY (assessment_id, nugget_id, role)
);
CREATE INDEX IF NOT EXISTS idx_assessment_nuggets_nugget ON bank_assessment_nuggets (nugget_id, role);

ALTER TABLE bank_assessment_nuggets ENABLE ROW LEVEL SECURITY;

-- Readable by anyone who can read the assessment (concept tags aren't
-- sensitive); managed by bank managers / the generator (service role bypasses).
DROP POLICY IF EXISTS "Anyone reads assessment nuggets" ON bank_assessment_nuggets;
CREATE POLICY "Anyone reads assessment nuggets" ON bank_assessment_nuggets
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Managers edit assessment nuggets" ON bank_assessment_nuggets;
CREATE POLICY "Managers edit assessment nuggets" ON bank_assessment_nuggets
  FOR ALL TO authenticated USING (public.can_manage_bank()) WITH CHECK (public.can_manage_bank());

COMMENT ON TABLE bank_assessment_nuggets IS
  'Maps an assessment to the grammar nuggets it tests / contains. Drives per-nugget practice and the grammar ceiling.';
