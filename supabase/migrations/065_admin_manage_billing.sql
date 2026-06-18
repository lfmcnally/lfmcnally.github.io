-- 065_admin_manage_billing.sql
-- ===========================================================================
-- Let admins manage the tier/billing tables from the admin UI — create or
-- activate subscriptions and grant credits (e.g. GIFTING comp access to someone
-- who isn't a paying member). The future Stripe webhook still writes via the
-- service role; these policies simply add an admin path alongside the existing
-- read-own policies (RLS policies are OR'd, so read-own still applies).
-- ===========================================================================

-- A note/marker so comps are identifiable (NULL stripe ids already imply comp).
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS note TEXT;

DROP POLICY IF EXISTS "Admins manage subscriptions" ON subscriptions;
CREATE POLICY "Admins manage subscriptions"
ON subscriptions FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admins manage credit ledger" ON credit_ledger;
CREATE POLICY "Admins manage credit ledger"
ON credit_ledger FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());
