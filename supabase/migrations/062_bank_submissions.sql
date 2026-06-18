-- 062_bank_submissions.sql
-- ===========================================================================
-- Resource bank — Phase 3: make submissions sourceable from the bank, and add
-- the teacher "assign to class" link. Design: RESOURCE_BANK_AND_TIERS_PLAN.md §2b–2c.
--
-- A weekly_test_submission can now come from one of three sources:
--   'legacy_test' — a teacher's weekly_tests row (unchanged; the default)
--   'assignment'  — a bank assessment a teacher assigned to a class
--   'self_serve'  — a bank assessment a student takes solo (personal flow)
--
-- The marking Edge Function (mark-test) resolves the source and reads the
-- questions/schemes from either weekly_test_* (legacy) or bank_* (assignment /
-- self_serve). The marking body, cost ledger and structured output are unchanged.
--
-- Entitlement note: until the subscription layer (Phase 5) lands, self-serve is
-- default-DENY and gated by users.can_self_serve_bank (granted to admins + the
-- owner here, exactly as 059 did for can_set_weekly_tests). This keeps free AI
-- marking from being open to every signed-in user while the flow is tested.
-- ===========================================================================

-- ──────────────────────────────────────────────────────────
-- 1. Teacher assigns a bank assessment to a class
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bank_class_assignments (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id      UUID NOT NULL REFERENCES v2_classes(id)     ON DELETE CASCADE,
    assessment_id UUID NOT NULL REFERENCES bank_assessments(id) ON DELETE CASCADE,
    teacher_id    UUID NOT NULL REFERENCES users(id)          ON DELETE CASCADE,
    status        TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open','closed')),
    due_at        TIMESTAMPTZ,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (class_id, assessment_id)
);
CREATE INDEX IF NOT EXISTS idx_bank_class_assignments_class ON bank_class_assignments (class_id, status);

ALTER TABLE bank_class_assignments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Teachers manage their class bank assignments" ON bank_class_assignments;
CREATE POLICY "Teachers manage their class bank assignments"
ON bank_class_assignments FOR ALL TO authenticated
USING      (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()))
WITH CHECK (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()));

DROP POLICY IF EXISTS "Students read their class bank assignments" ON bank_class_assignments;
CREATE POLICY "Students read their class bank assignments"
ON bank_class_assignments FOR SELECT TO authenticated
USING (status = 'open' AND class_id IN (SELECT my_v2_class_ids()));

-- ──────────────────────────────────────────────────────────
-- 2. Submissions can name a bank source
-- ──────────────────────────────────────────────────────────
ALTER TABLE weekly_test_submissions
    ALTER COLUMN test_id DROP NOT NULL,
    ADD COLUMN IF NOT EXISTS source_kind        TEXT NOT NULL DEFAULT 'legacy_test'
        CHECK (source_kind IN ('legacy_test','assignment','self_serve')),
    ADD COLUMN IF NOT EXISTS assignment_id      UUID REFERENCES bank_class_assignments(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS bank_assessment_id UUID REFERENCES bank_assessments(id)       ON DELETE CASCADE;

-- Exactly one source id is populated, matching source_kind.
ALTER TABLE weekly_test_submissions DROP CONSTRAINT IF EXISTS wt_sub_source_ck;
ALTER TABLE weekly_test_submissions ADD CONSTRAINT wt_sub_source_ck CHECK (
    (source_kind = 'legacy_test' AND test_id IS NOT NULL AND assignment_id IS NULL AND bank_assessment_id IS NULL) OR
    (source_kind = 'assignment'  AND assignment_id IS NOT NULL AND test_id IS NULL AND bank_assessment_id IS NULL) OR
    (source_kind = 'self_serve'  AND bank_assessment_id IS NOT NULL AND test_id IS NULL AND assignment_id IS NULL)
);

-- One submission per (assignment, student). Self-serve allows repeat attempts, so
-- only one IN-PROGRESS attempt is constrained (a fresh attempt starts after submit).
CREATE UNIQUE INDEX IF NOT EXISTS uq_wt_sub_assignment_student
    ON weekly_test_submissions (assignment_id, student_id) WHERE assignment_id IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS uq_wt_sub_selfserve_open
    ON weekly_test_submissions (bank_assessment_id, student_id)
    WHERE bank_assessment_id IS NOT NULL AND submitted_at IS NULL;

-- ──────────────────────────────────────────────────────────
-- 3. Answers: question_id may now reference bank_assessment_questions
-- ──────────────────────────────────────────────────────────
-- Two FKs can't both bind one column, so drop the hard FK to weekly_test_questions
-- and tag the source; the Edge Function validates membership.
ALTER TABLE weekly_test_answers
    DROP CONSTRAINT IF EXISTS weekly_test_answers_question_id_fkey,
    ADD COLUMN IF NOT EXISTS question_source TEXT NOT NULL DEFAULT 'weekly_test'
        CHECK (question_source IN ('weekly_test','bank'));

-- ──────────────────────────────────────────────────────────
-- 4. Usage ledger: support bank sources (no teacher for self-serve)
-- ──────────────────────────────────────────────────────────
ALTER TABLE weekly_test_marking_usage
    ALTER COLUMN teacher_id DROP NOT NULL,
    ADD COLUMN IF NOT EXISTS bank_assessment_id UUID REFERENCES bank_assessments(id) ON DELETE SET NULL;

-- ──────────────────────────────────────────────────────────
-- 5. Self-serve access flag (default-deny; replaced by subscriptions in Phase 5)
-- ──────────────────────────────────────────────────────────
ALTER TABLE public.users
    ADD COLUMN IF NOT EXISTS can_self_serve_bank BOOLEAN NOT NULL DEFAULT false;

CREATE OR REPLACE FUNCTION public.can_self_serve_bank()
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT COALESCE((SELECT can_self_serve_bank FROM public.users WHERE id = auth.uid()), false);
$$;
GRANT EXECUTE ON FUNCTION public.can_self_serve_bank() TO authenticated;

-- Grant to admins + the owner so the flow is testable on day one.
UPDATE public.users SET can_self_serve_bank = true WHERE is_admin = true;
UPDATE public.users u SET can_self_serve_bank = true
  FROM auth.users a
 WHERE a.id = u.id AND lower(a.email) = 'lawrencefmcnally@gmail.com';

COMMENT ON COLUMN weekly_test_submissions.source_kind IS
'Where this submission came from: legacy_test (weekly_tests) | assignment (bank→class) | self_serve (bank solo). See RESOURCE_BANK_AND_TIERS_PLAN.md.';
