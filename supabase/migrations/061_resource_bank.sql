-- 061_resource_bank.sql
-- ===========================================================================
-- Resource bank — Phase 1: the catalogue (course → topic → assessment).
--
-- A curated, class-agnostic library of assessments that teachers can assign to
-- a class and personal-tier students can take solo. Design: RESOURCE_BANK_AND_TIERS_PLAN.md.
--
-- This migration creates ONLY the catalogue layer. The submission-layer changes
-- (sourcing a weekly_test_submission from a bank assessment) and the entitlement
-- layer (organisations / subscriptions / credits) land in later migrations.
--
-- Key security properties (mirroring weekly_test_*):
--   * Mark schemes live in their OWN table (bank_assessment_mark_schemes) that
--     students can NEVER read — the marking Edge Function reads it with the
--     service role. Students/teachers only see prompt / marks / image.
--   * Authoring is curated: only admins (the site owner) may write the bank.
--     Teachers and students get read access to PUBLISHED assessments only.
--
-- Reuses helpers from earlier migrations:
--   public.is_admin()  (056) — gates curated authoring.
-- FKs reference users(id) (the profile table extending auth.users), per 040.
-- ===========================================================================

-- ──────────────────────────────────────────────────────────
-- 1. Taxonomy
-- ──────────────────────────────────────────────────────────

-- Course → topic. 'subject' mirrors v2_classes.type so the bank can be filtered
-- to a class's subject and the marker derives the right voice. exam_board is
-- display-only for now.
CREATE TABLE IF NOT EXISTS bank_courses (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject    TEXT NOT NULL,                 -- 'latin' | 'greek' | 'classical-civilisation'
    exam_board TEXT,                          -- e.g. 'OCR Classical Civilisation' (display)
    title      TEXT NOT NULL,                 -- e.g. 'Myth and Religion'
    slug       TEXT NOT NULL UNIQUE,
    position   INT  NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_bank_courses_subject ON bank_courses (subject, position);

CREATE TABLE IF NOT EXISTS bank_topics (
    id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES bank_courses(id) ON DELETE CASCADE,
    title     TEXT NOT NULL,                  -- e.g. 'Death and burial'
    slug      TEXT NOT NULL,
    position  INT  NOT NULL DEFAULT 0,
    UNIQUE (course_id, slug)
);
CREATE INDEX IF NOT EXISTS idx_bank_topics_course ON bank_topics (course_id, position);

-- ──────────────────────────────────────────────────────────
-- 2. Assessments (canonical, class-agnostic)
-- ──────────────────────────────────────────────────────────

-- Same shape of caps as weekly_tests so an assignment / self-serve run inherits
-- sensible defaults.
CREATE TABLE IF NOT EXISTS bank_assessments (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id  UUID NOT NULL REFERENCES bank_courses(id) ON DELETE RESTRICT,
    topic_id   UUID REFERENCES bank_topics(id) ON DELETE SET NULL,
    title      TEXT NOT NULL,
    status     TEXT NOT NULL DEFAULT 'draft'
                 CHECK (status IN ('draft','published','archived')),
    origin     TEXT NOT NULL DEFAULT 'official'
                 CHECK (origin IN ('official','teacher')),   -- 'teacher' reserved for later
    created_by UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    max_attempts_per_question INT NOT NULL DEFAULT 1
                 CHECK (max_attempts_per_question BETWEEN 1 AND 5),
    max_answer_chars          INT NOT NULL DEFAULT 1200
                 CHECK (max_answer_chars BETWEEN 100 AND 4000),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_bank_assessments_course ON bank_assessments (course_id, topic_id, status);

-- Mirrors weekly_test_questions so the marker reads identical fields.
CREATE TABLE IF NOT EXISTS bank_assessment_questions (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL REFERENCES bank_assessments(id) ON DELETE CASCADE,
    position      INT  NOT NULL DEFAULT 0,
    prompt        TEXT NOT NULL,
    marks         INT  NOT NULL CHECK (marks BETWEEN 1 AND 10),
    image_path    TEXT,                                 -- Storage object path OR a site-relative path
    mark_style    TEXT NOT NULL DEFAULT 'points'
                    CHECK (mark_style IN ('points','translation')),
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_bank_assessment_questions_assessment
    ON bank_assessment_questions (assessment_id, position);

-- PRIVATE — never exposed to students. Author (admin) + service role only.
CREATE TABLE IF NOT EXISTS bank_assessment_mark_schemes (
    question_id   UUID PRIMARY KEY REFERENCES bank_assessment_questions(id) ON DELETE CASCADE,
    scheme_points JSONB NOT NULL DEFAULT '[]'::jsonb,   -- [{ "text": "...", "marks": 1 }, ...]
    model_answer  TEXT,
    marking_notes TEXT,
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ──────────────────────────────────────────────────────────
-- 3. RLS
-- ──────────────────────────────────────────────────────────
ALTER TABLE bank_courses                 ENABLE ROW LEVEL SECURITY;
ALTER TABLE bank_topics                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE bank_assessments             ENABLE ROW LEVEL SECURITY;
ALTER TABLE bank_assessment_questions    ENABLE ROW LEVEL SECURITY;
ALTER TABLE bank_assessment_mark_schemes ENABLE ROW LEVEL SECURITY;

-- bank_courses — everyone reads; admins author -------------------------------
DROP POLICY IF EXISTS "Anyone reads bank courses" ON bank_courses;
CREATE POLICY "Anyone reads bank courses"
ON bank_courses FOR SELECT TO authenticated
USING (true);

DROP POLICY IF EXISTS "Admins manage bank courses" ON bank_courses;
CREATE POLICY "Admins manage bank courses"
ON bank_courses FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- bank_topics — everyone reads; admins author --------------------------------
DROP POLICY IF EXISTS "Anyone reads bank topics" ON bank_topics;
CREATE POLICY "Anyone reads bank topics"
ON bank_topics FOR SELECT TO authenticated
USING (true);

DROP POLICY IF EXISTS "Admins manage bank topics" ON bank_topics;
CREATE POLICY "Admins manage bank topics"
ON bank_topics FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- bank_assessments — read PUBLISHED; admins author (any status) ---------------
DROP POLICY IF EXISTS "Anyone reads published assessments" ON bank_assessments;
CREATE POLICY "Anyone reads published assessments"
ON bank_assessments FOR SELECT TO authenticated
USING (status = 'published' OR public.is_admin());

DROP POLICY IF EXISTS "Admins manage assessments" ON bank_assessments;
CREATE POLICY "Admins manage assessments"
ON bank_assessments FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- bank_assessment_questions — read for published; admins author --------------
-- (NO mark scheme here; safe to expose to teachers + students for published.)
DROP POLICY IF EXISTS "Anyone reads questions of published assessments" ON bank_assessment_questions;
CREATE POLICY "Anyone reads questions of published assessments"
ON bank_assessment_questions FOR SELECT TO authenticated
USING (assessment_id IN (
    SELECT id FROM bank_assessments WHERE status = 'published'
) OR public.is_admin());

DROP POLICY IF EXISTS "Admins manage assessment questions" ON bank_assessment_questions;
CREATE POLICY "Admins manage assessment questions"
ON bank_assessment_questions FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- bank_assessment_mark_schemes — admins only (NO student/teacher policy) ------
-- The marking Edge Function reads these with the service role (bypasses RLS).
DROP POLICY IF EXISTS "Admins manage assessment mark schemes" ON bank_assessment_mark_schemes;
CREATE POLICY "Admins manage assessment mark schemes"
ON bank_assessment_mark_schemes FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- ──────────────────────────────────────────────────────────
-- 4. Seed the taxonomy from the site's existing subjects
-- ──────────────────────────────────────────────────────────
-- Courses only (topics + assessments are added from the authoring tool). Real
-- components from version2/subjects/. Idempotent on slug.
INSERT INTO bank_courses (subject, exam_board, title, slug, position) VALUES
  ('classical-civilisation', 'OCR Classical Civilisation', 'Myth and Religion',                 'cc-myth-and-religion',        10),
  ('classical-civilisation', 'OCR Classical Civilisation', 'The Homeric World',                 'cc-the-homeric-world',        20),
  ('classical-civilisation', 'OCR Classical Civilisation', 'Roman City Life',                   'cc-roman-city-life',          30),
  ('classical-civilisation', 'OCR Classical Civilisation', 'War and Warfare',                   'cc-war-and-warfare',          40),
  ('classical-civilisation', 'OCR Classical Civilisation', 'Greek Religion',                    'cc-greek-religion',           50),
  ('classical-civilisation', 'OCR Classical Civilisation', 'Greek Art',                         'cc-greek-art',                60),
  ('classical-civilisation', 'OCR Classical Civilisation', 'Politics of the Late Republic',     'cc-politics-late-republic',   70),
  ('latin',                  'OCR Latin (J282)',           'Latin Language',                    'latin-language',              10),
  ('latin',                  'OCR Latin (J282)',           'Latin Literature',                  'latin-literature',            20),
  ('greek',                  'OCR Classical Greek (J292)', 'Greek Language',                    'greek-language',              10)
ON CONFLICT (slug) DO NOTHING;

COMMENT ON TABLE bank_assessments IS 'Curated, class-agnostic assessments (the resource bank). See RESOURCE_BANK_AND_TIERS_PLAN.md.';
COMMENT ON TABLE bank_assessment_mark_schemes IS 'PRIVATE mark schemes — read server-side only by the marking Edge Function. Never exposed to students.';
