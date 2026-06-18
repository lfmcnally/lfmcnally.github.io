-- 068_admin_manage_budget.sql
-- ===========================================================================
-- Let admins set a per-account monthly SAFETY CAP (the COGS backstop) from the
-- Plans & access screen. The marking function now defaults self-serve accounts
-- to £10/month "unlimited practice"; a weekly_test_budget row overrides it for
-- a specific person. (Service role still bypasses RLS as before.)
-- ===========================================================================
DROP POLICY IF EXISTS "Admins manage budgets" ON weekly_test_budget;
CREATE POLICY "Admins manage budgets"
ON weekly_test_budget FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());
