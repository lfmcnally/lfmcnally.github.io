-- 067_bank_manage_permission.sql
-- ===========================================================================
-- Adds a per-admin "assessment permission" (users.can_manage_bank) and makes it
-- the gate for AUTHORING and full (draft-included) viewing of the bank. Final
-- pre-launch access model — supersedes the admin branch of 066:
--
--   • Author + view everything (incl. drafts)  → can_manage_bank  ("assessment permission")
--   • View/practise published                  → can_self_serve_bank (gifted in Plans & access)
--   • View a single test                       → a student with an OPEN assignment to it
--
-- Existing admins are seeded with the permission so nothing breaks; revoke it
-- per-admin in Plans & access. At launch, swap can_self_serve_bank() for the
-- real subscription check. Run after 066 (or on its own — it is self-sufficient).
-- ===========================================================================

-- 1. permission column + helper -------------------------------------------------
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS can_manage_bank BOOLEAN NOT NULL DEFAULT false;
UPDATE public.users SET can_manage_bank = true WHERE is_admin = true AND can_manage_bank = false;

CREATE OR REPLACE FUNCTION public.can_manage_bank()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT COALESCE((SELECT can_manage_bank FROM public.users WHERE id = auth.uid()), false); $$;
GRANT EXECUTE ON FUNCTION public.can_manage_bank() TO authenticated;

-- 2. authoring (write + draft read) → permission holders only -------------------
DROP POLICY IF EXISTS "Admins manage bank courses" ON bank_courses;
CREATE POLICY "Managers author bank courses" ON bank_courses FOR ALL TO authenticated
USING (public.can_manage_bank()) WITH CHECK (public.can_manage_bank());

DROP POLICY IF EXISTS "Admins manage bank topics" ON bank_topics;
CREATE POLICY "Managers author bank topics" ON bank_topics FOR ALL TO authenticated
USING (public.can_manage_bank()) WITH CHECK (public.can_manage_bank());

DROP POLICY IF EXISTS "Admins manage assessments" ON bank_assessments;
CREATE POLICY "Managers author assessments" ON bank_assessments FOR ALL TO authenticated
USING (public.can_manage_bank()) WITH CHECK (public.can_manage_bank());

DROP POLICY IF EXISTS "Admins manage assessment questions" ON bank_assessment_questions;
CREATE POLICY "Managers author assessment questions" ON bank_assessment_questions FOR ALL TO authenticated
USING (public.can_manage_bank()) WITH CHECK (public.can_manage_bank());

DROP POLICY IF EXISTS "Admins manage assessment mark schemes" ON bank_assessment_mark_schemes;
CREATE POLICY "Managers author assessment mark schemes" ON bank_assessment_mark_schemes FOR ALL TO authenticated
USING (public.can_manage_bank()) WITH CHECK (public.can_manage_bank());

-- 3. viewing (read) gates — supersede 061 + 066 --------------------------------
DROP POLICY IF EXISTS "Anyone reads bank courses" ON bank_courses;
DROP POLICY IF EXISTS "Entitled read bank courses" ON bank_courses;
CREATE POLICY "Entitled read bank courses" ON bank_courses FOR SELECT TO authenticated
USING (public.can_manage_bank() OR public.can_self_serve_bank());

DROP POLICY IF EXISTS "Anyone reads bank topics" ON bank_topics;
DROP POLICY IF EXISTS "Entitled read bank topics" ON bank_topics;
CREATE POLICY "Entitled read bank topics" ON bank_topics FOR SELECT TO authenticated
USING (public.can_manage_bank() OR public.can_self_serve_bank());

DROP POLICY IF EXISTS "Anyone reads published assessments" ON bank_assessments;
DROP POLICY IF EXISTS "Entitled read published assessments" ON bank_assessments;
CREATE POLICY "Entitled read published assessments" ON bank_assessments FOR SELECT TO authenticated
USING (
  public.can_manage_bank()
  OR (status = 'published' AND (
       public.can_self_serve_bank()
       OR id IN (SELECT assessment_id FROM bank_class_assignments
                  WHERE status = 'open' AND class_id IN (SELECT my_v2_class_ids()))
     ))
);

DROP POLICY IF EXISTS "Anyone reads questions of published assessments" ON bank_assessment_questions;
DROP POLICY IF EXISTS "Entitled read published questions" ON bank_assessment_questions;
CREATE POLICY "Entitled read published questions" ON bank_assessment_questions FOR SELECT TO authenticated
USING (
  public.can_manage_bank()
  OR assessment_id IN (
       SELECT id FROM bank_assessments WHERE status = 'published' AND (
         public.can_self_serve_bank()
         OR id IN (SELECT assessment_id FROM bank_class_assignments
                    WHERE status = 'open' AND class_id IN (SELECT my_v2_class_ids()))
       )
  )
);

-- 4. assignment creation → permission holders or gifted teachers ---------------
DROP POLICY IF EXISTS "Teachers manage their class bank assignments" ON bank_class_assignments;
DROP POLICY IF EXISTS "Entitled teachers manage class bank assignments" ON bank_class_assignments;
CREATE POLICY "Entitled teachers manage class bank assignments"
ON bank_class_assignments FOR ALL TO authenticated
USING      (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
            AND (public.can_manage_bank() OR public.can_self_serve_bank()))
WITH CHECK (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
            AND (public.can_manage_bank() OR public.can_self_serve_bank()));

COMMENT ON COLUMN public.users.can_manage_bank IS 'Assessment permission: author + view the resource bank (incl. drafts). Granted in Plans & access.';
