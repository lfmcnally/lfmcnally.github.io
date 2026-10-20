-- ============================================
-- Fix "new row violates row-level security policy for v2_class_teachers"
-- ============================================
-- Migration 081 wrote the co-teacher INSERT and DELETE policies with an
-- inline subquery:
--
--     class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid())
--
-- That subquery is itself subject to RLS on v2_classes. It only returns the
-- row if some policy grants the caller SELECT on it — owning the class is not
-- enough on its own. Where that read is not granted, the subquery comes back
-- empty and the WITH CHECK fails, so the owner cannot add a co-teacher to
-- their own class. Reproduced locally: the insert fails with exactly the
-- error above while the caller does own the class.
--
-- Same shape of bug as migration 079 fixed on the v1 tables, and 081 already
-- used a SECURITY DEFINER helper everywhere else. These two policies were the
-- ones left reading through RLS. Fix: give them a helper too, so the
-- ownership check is a fact about the data rather than a question about what
-- the caller happens to be allowed to read.
--
-- Safe to run more than once. Nothing is widened: the check is still "do I
-- own this class", just answered reliably.

CREATE OR REPLACE FUNCTION my_v2_owned_class_ids() RETURNS SETOF UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
    SELECT id FROM v2_classes WHERE teacher_id = auth.uid();
$$;

GRANT EXECUTE ON FUNCTION my_v2_owned_class_ids() TO authenticated;

COMMENT ON FUNCTION my_v2_owned_class_ids() IS
'Class IDs the current user owns outright. SECURITY DEFINER so an ownership check inside a policy does not depend on the caller also having SELECT on v2_classes.';

DROP POLICY IF EXISTS "Owners add v2 co-teachers" ON v2_class_teachers;
CREATE POLICY "Owners add v2 co-teachers"
ON v2_class_teachers FOR INSERT
TO authenticated
WITH CHECK (class_id IN (SELECT my_v2_owned_class_ids()));

DROP POLICY IF EXISTS "Owners remove v2 co-teachers" ON v2_class_teachers;
CREATE POLICY "Owners remove v2 co-teachers"
ON v2_class_teachers FOR DELETE
TO authenticated
USING (class_id IN (SELECT my_v2_owned_class_ids()));
