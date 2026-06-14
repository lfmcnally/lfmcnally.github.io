-- 058_weekly_tests.sql
-- ===========================================================================
-- Weekly Test: teacher-authored short-answer tests with AI auto-marking.
--
-- Design: WEEKLY_TEST_PLAN.md. Key security properties:
--   * Mark schemes live in their OWN table (weekly_test_mark_schemes) that
--     students can NEVER read — the mark-answer Edge Function reads it with the
--     service role. Students only see prompt / marks / image.
--   * Students have NO write path to weekly_test_answers — every marking write
--     happens in the Edge Function under the service role, so a student can't
--     forge a mark or spend the API budget directly.
--   * Cost caps (attempts, answer length, monthly budget) are enforced by the
--     function against columns/tables defined here.
--
-- Reuses the v2 class model + SECURITY DEFINER helpers from 040:
--   my_v2_class_ids()  -> class ids the caller (student) belongs to
--   my_v2_students()   -> student ids the caller (teacher) may see
-- FKs reference users(id) (the profile table extending auth.users), per 040.
-- ===========================================================================

-- ──────────────────────────────────────────────────────────
-- 1. Tables
-- ──────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS weekly_tests (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_id  UUID NOT NULL REFERENCES users(id)      ON DELETE CASCADE,
    class_id    UUID NOT NULL REFERENCES v2_classes(id) ON DELETE CASCADE,
    title       TEXT NOT NULL,
    status      TEXT NOT NULL DEFAULT 'draft'
                  CHECK (status IN ('draft','open','closed')),
    due_at      TIMESTAMPTZ,
    -- cost caps (enforced by the mark-answer function)
    max_attempts_per_question INT NOT NULL DEFAULT 1
                  CHECK (max_attempts_per_question BETWEEN 1 AND 5),
    max_answer_chars          INT NOT NULL DEFAULT 1200
                  CHECK (max_answer_chars BETWEEN 100 AND 4000),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_weekly_tests_teacher ON weekly_tests (teacher_id, created_at);
CREATE INDEX IF NOT EXISTS idx_weekly_tests_class   ON weekly_tests (class_id, status);

CREATE TABLE IF NOT EXISTS weekly_test_questions (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    test_id     UUID NOT NULL REFERENCES weekly_tests(id) ON DELETE CASCADE,
    position    INT  NOT NULL DEFAULT 0,
    prompt      TEXT NOT NULL,
    marks       INT  NOT NULL CHECK (marks BETWEEN 1 AND 10),
    image_path  TEXT,                                   -- Storage object path OR a site-relative path
    mark_with_image BOOLEAN NOT NULL DEFAULT false,     -- also send the image to the model (vision)
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_weekly_test_questions_test ON weekly_test_questions (test_id, position);

-- PRIVATE — never exposed to students. Teacher + service role only.
CREATE TABLE IF NOT EXISTS weekly_test_mark_schemes (
    question_id   UUID PRIMARY KEY REFERENCES weekly_test_questions(id) ON DELETE CASCADE,
    scheme_points JSONB NOT NULL DEFAULT '[]'::jsonb,   -- [{ "text": "winged sandals", "marks": 1 }, ...]
    model_answer  TEXT,
    marking_notes TEXT,
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS weekly_test_submissions (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    test_id       UUID NOT NULL REFERENCES weekly_tests(id) ON DELETE CASCADE,
    student_id    UUID NOT NULL REFERENCES users(id)        ON DELETE CASCADE,
    started_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    submitted_at  TIMESTAMPTZ,
    total_awarded INT,
    total_marks   INT,
    UNIQUE (test_id, student_id)
);
CREATE INDEX IF NOT EXISTS idx_weekly_test_submissions_test ON weekly_test_submissions (test_id);

-- One row per (submission, question). Written ONLY by the Edge Function (service
-- role) + teacher overrides. Students never INSERT/UPDATE here.
CREATE TABLE IF NOT EXISTS weekly_test_answers (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    submission_id UUID NOT NULL REFERENCES weekly_test_submissions(id) ON DELETE CASCADE,
    question_id   UUID NOT NULL REFERENCES weekly_test_questions(id)   ON DELETE CASCADE,
    answer_text   TEXT NOT NULL,
    ai_marks      INT,
    ai_max        INT,
    ai_matched    JSONB,
    ai_rationale  TEXT,
    final_marks   INT,                                   -- defaults to ai_marks; teacher can override
    marked_by     TEXT NOT NULL DEFAULT 'ai' CHECK (marked_by IN ('ai','teacher')),
    attempts      INT  NOT NULL DEFAULT 0,               -- per-question attempt cap
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (submission_id, question_id)
);

-- Usage ledger: one row per model call with REAL token counts. Powers the
-- monthly budget cap and the teacher usage view.
CREATE TABLE IF NOT EXISTS weekly_test_marking_usage (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    test_id       UUID REFERENCES weekly_tests(id)   ON DELETE SET NULL,
    student_id    UUID REFERENCES users(id)          ON DELETE SET NULL,
    question_id   UUID REFERENCES weekly_test_questions(id) ON DELETE SET NULL,
    model         TEXT NOT NULL,
    input_tokens  INT  NOT NULL DEFAULT 0,
    output_tokens INT  NOT NULL DEFAULT 0,
    cost_micros   BIGINT NOT NULL DEFAULT 0,            -- estimated micro-pounds
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_wt_usage_teacher_time ON weekly_test_marking_usage (teacher_id, created_at);
CREATE INDEX IF NOT EXISTS idx_wt_usage_student_time ON weekly_test_marking_usage (student_id, created_at);

-- Per-teacher budget; the function refuses to call the model once exceeded.
CREATE TABLE IF NOT EXISTS weekly_test_budget (
    teacher_id              UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    monthly_cost_cap_micros BIGINT NOT NULL DEFAULT 5000000,     -- £5 / month
    monthly_call_cap        INT    NOT NULL DEFAULT 5000,
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ──────────────────────────────────────────────────────────
-- 2. RLS
-- ──────────────────────────────────────────────────────────
ALTER TABLE weekly_tests              ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_test_questions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_test_mark_schemes  ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_test_submissions   ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_test_answers       ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_test_marking_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_test_budget        ENABLE ROW LEVEL SECURITY;

-- weekly_tests ----------------------------------------------------------------
DROP POLICY IF EXISTS "Teachers manage their weekly tests" ON weekly_tests;
CREATE POLICY "Teachers manage their weekly tests"
ON weekly_tests FOR ALL TO authenticated
USING (teacher_id = auth.uid()) WITH CHECK (teacher_id = auth.uid());

DROP POLICY IF EXISTS "Students read their class weekly tests" ON weekly_tests;
CREATE POLICY "Students read their class weekly tests"
ON weekly_tests FOR SELECT TO authenticated
USING (status IN ('open','closed') AND class_id IN (SELECT my_v2_class_ids()));

-- weekly_test_questions -------------------------------------------------------
DROP POLICY IF EXISTS "Teachers manage their questions" ON weekly_test_questions;
CREATE POLICY "Teachers manage their questions"
ON weekly_test_questions FOR ALL TO authenticated
USING      (test_id IN (SELECT id FROM weekly_tests WHERE teacher_id = auth.uid()))
WITH CHECK (test_id IN (SELECT id FROM weekly_tests WHERE teacher_id = auth.uid()));

DROP POLICY IF EXISTS "Students read questions of their class tests" ON weekly_test_questions;
CREATE POLICY "Students read questions of their class tests"
ON weekly_test_questions FOR SELECT TO authenticated
USING (test_id IN (
    SELECT id FROM weekly_tests
     WHERE status IN ('open','closed') AND class_id IN (SELECT my_v2_class_ids())
));

-- weekly_test_mark_schemes — teacher only (NO student policy at all) -----------
DROP POLICY IF EXISTS "Teachers manage their mark schemes" ON weekly_test_mark_schemes;
CREATE POLICY "Teachers manage their mark schemes"
ON weekly_test_mark_schemes FOR ALL TO authenticated
USING (question_id IN (
    SELECT q.id FROM weekly_test_questions q
      JOIN weekly_tests t ON t.id = q.test_id
     WHERE t.teacher_id = auth.uid()
))
WITH CHECK (question_id IN (
    SELECT q.id FROM weekly_test_questions q
      JOIN weekly_tests t ON t.id = q.test_id
     WHERE t.teacher_id = auth.uid()
));

-- weekly_test_submissions -----------------------------------------------------
DROP POLICY IF EXISTS "Students own their submissions" ON weekly_test_submissions;
CREATE POLICY "Students own their submissions"
ON weekly_test_submissions FOR ALL TO authenticated
USING (student_id = auth.uid()) WITH CHECK (student_id = auth.uid());

DROP POLICY IF EXISTS "Teachers read submissions of their students" ON weekly_test_submissions;
CREATE POLICY "Teachers read submissions of their students"
ON weekly_test_submissions FOR SELECT TO authenticated
USING (student_id IN (SELECT my_v2_students()));

-- weekly_test_answers — students read own; teachers read+override; no student write
DROP POLICY IF EXISTS "Students read their own answers" ON weekly_test_answers;
CREATE POLICY "Students read their own answers"
ON weekly_test_answers FOR SELECT TO authenticated
USING (submission_id IN (
    SELECT id FROM weekly_test_submissions WHERE student_id = auth.uid()
));

DROP POLICY IF EXISTS "Teachers read their students answers" ON weekly_test_answers;
CREATE POLICY "Teachers read their students answers"
ON weekly_test_answers FOR SELECT TO authenticated
USING (submission_id IN (
    SELECT id FROM weekly_test_submissions WHERE student_id IN (SELECT my_v2_students())
));

DROP POLICY IF EXISTS "Teachers override marks" ON weekly_test_answers;
CREATE POLICY "Teachers override marks"
ON weekly_test_answers FOR UPDATE TO authenticated
USING (submission_id IN (
    SELECT id FROM weekly_test_submissions WHERE student_id IN (SELECT my_v2_students())
))
WITH CHECK (submission_id IN (
    SELECT id FROM weekly_test_submissions WHERE student_id IN (SELECT my_v2_students())
));

-- weekly_test_marking_usage — teacher reads own only --------------------------
DROP POLICY IF EXISTS "Teachers read their usage" ON weekly_test_marking_usage;
CREATE POLICY "Teachers read their usage"
ON weekly_test_marking_usage FOR SELECT TO authenticated
USING (teacher_id = auth.uid());

-- weekly_test_budget — teacher manages own ------------------------------------
DROP POLICY IF EXISTS "Teachers manage their budget" ON weekly_test_budget;
CREATE POLICY "Teachers manage their budget"
ON weekly_test_budget FOR ALL TO authenticated
USING (teacher_id = auth.uid()) WITH CHECK (teacher_id = auth.uid());

-- (No service-role policies needed: the service key bypasses RLS, which is how
--  the mark-answer function reads schemes and writes answers/usage.)

-- ──────────────────────────────────────────────────────────
-- 3. Storage bucket for source images
-- ──────────────────────────────────────────────────────────
INSERT INTO storage.buckets (id, name, public)
VALUES ('weekly-test-images', 'weekly-test-images', true)
ON CONFLICT (id) DO NOTHING;

-- Public read (exam source images aren't secret; keeps the student page simple)
DROP POLICY IF EXISTS "wt images public read" ON storage.objects;
CREATE POLICY "wt images public read"
ON storage.objects FOR SELECT
USING (bucket_id = 'weekly-test-images');

-- Authenticated teachers may upload only into their own "{uid}/..." folder
DROP POLICY IF EXISTS "wt images owner write" ON storage.objects;
CREATE POLICY "wt images owner write"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
    bucket_id = 'weekly-test-images'
    AND (storage.foldername(name))[1] = auth.uid()::text
);

DROP POLICY IF EXISTS "wt images owner delete" ON storage.objects;
CREATE POLICY "wt images owner delete"
ON storage.objects FOR DELETE TO authenticated
USING (
    bucket_id = 'weekly-test-images'
    AND (storage.foldername(name))[1] = auth.uid()::text
);

COMMENT ON TABLE weekly_tests IS 'Teacher-authored weekly short-answer tests (AI-marked). See WEEKLY_TEST_PLAN.md.';
COMMENT ON TABLE weekly_test_mark_schemes IS 'PRIVATE mark schemes — read server-side only by the mark-answer Edge Function. Never exposed to students.';
