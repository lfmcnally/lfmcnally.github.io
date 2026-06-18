-- 066_bank_access_lock.sql
-- ===========================================================================
-- Interim access lock (pre-launch). Until billing is live, the bank should be
-- visible only to ENTITLED accounts: admins, plus anyone granted access via the
-- Plans & access screen (users.can_self_serve_bank). Today only admins have the
-- flag, so this is effectively admin-only; gifting the flag lets specific people
-- (or a pilot school's teachers) in.
--
-- Exception: a student who has an OPEN class assignment for a test keeps read
-- access to THAT test (and its questions) so the assign→take flow still works
-- for a class a (gifted) teacher set work to.
--
-- At launch, relax `can_self_serve_bank()` here to the real subscription check.
-- Writes stay admin-only via the existing "Admins manage …" policies.
-- ===========================================================================

-- helper: tests assigned (open) to one of my classes
-- (uses existing my_v2_class_ids(); see migrations 053/062)

-- ── courses ────────────────────────────────────────────────
DROP POLICY IF EXISTS "Anyone reads bank courses" ON bank_courses;
DROP POLICY IF EXISTS "Entitled read bank courses" ON bank_courses;
CREATE POLICY "Entitled read bank courses"
ON bank_courses FOR SELECT TO authenticated
USING (public.can_self_serve_bank() OR public.is_admin());

-- ── topics ─────────────────────────────────────────────────
DROP POLICY IF EXISTS "Anyone reads bank topics" ON bank_topics;
DROP POLICY IF EXISTS "Entitled read bank topics" ON bank_topics;
CREATE POLICY "Entitled read bank topics"
ON bank_topics FOR SELECT TO authenticated
USING (public.can_self_serve_bank() OR public.is_admin());

-- ── assessments (published only; entitled OR assigned to my class) ──
DROP POLICY IF EXISTS "Anyone reads published assessments" ON bank_assessments;
DROP POLICY IF EXISTS "Entitled read published assessments" ON bank_assessments;
CREATE POLICY "Entitled read published assessments"
ON bank_assessments FOR SELECT TO authenticated
USING (
  public.is_admin()
  OR (status = 'published' AND (
       public.can_self_serve_bank()
       OR id IN (SELECT assessment_id FROM bank_class_assignments
                  WHERE status = 'open' AND class_id IN (SELECT my_v2_class_ids()))
     ))
);

-- ── questions (same visibility as their assessment) ─────────
DROP POLICY IF EXISTS "Anyone reads questions of published assessments" ON bank_assessment_questions;
DROP POLICY IF EXISTS "Entitled read published questions" ON bank_assessment_questions;
CREATE POLICY "Entitled read published questions"
ON bank_assessment_questions FOR SELECT TO authenticated
USING (
  public.is_admin()
  OR assessment_id IN (
       SELECT id FROM bank_assessments WHERE status = 'published' AND (
         public.can_self_serve_bank()
         OR id IN (SELECT assessment_id FROM bank_class_assignments
                    WHERE status = 'open' AND class_id IN (SELECT my_v2_class_ids()))
       )
  )
);

-- ── assignments: only ENTITLED teachers may create/manage ───
DROP POLICY IF EXISTS "Teachers manage their class bank assignments" ON bank_class_assignments;
DROP POLICY IF EXISTS "Entitled teachers manage class bank assignments" ON bank_class_assignments;
CREATE POLICY "Entitled teachers manage class bank assignments"
ON bank_class_assignments FOR ALL TO authenticated
USING      (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
            AND (public.can_self_serve_bank() OR public.is_admin()))
WITH CHECK (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
            AND (public.can_self_serve_bank() OR public.is_admin()));
-- (students keep their existing read policy "Students read their class bank assignments")
