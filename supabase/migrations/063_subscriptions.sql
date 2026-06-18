-- 063_subscriptions.sql
-- ===========================================================================
-- Resource bank — Phase 5 (schema + gating, Stripe deferred): the paid tiers.
-- Design: RESOURCE_BANK_AND_TIERS_PLAN.md §4.
--
-- One credit = one whole assessment taken (consumed when a submission is marked).
-- An account is either an ORGANISATION (a school — its teachers share one weekly
-- allowance) or a USER (the personal/student tier — their own allowance).
--
-- This migration creates the entitlement layer and a small reference table of
-- placeholder plans. The actual Stripe Checkout/webhook lands later; until an
-- ACTIVE subscription exists for an account, mark-test is PERMISSIVE (no credit
-- ceiling) so current flows are unaffected. Credit counting is a separate meter
-- from the token-cost ledger (weekly_test_marking_usage) — credits are what the
-- customer buys; cost_micros is the COGS you watch.
-- ===========================================================================

-- ──────────────────────────────────────────────────────────
-- 1. Organisations (schools) and their teachers
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS organisations (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name       TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS org_members (
    org_id  UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id)         ON DELETE CASCADE,
    role    TEXT NOT NULL DEFAULT 'teacher' CHECK (role IN ('owner','teacher')),
    PRIMARY KEY (org_id, user_id)
);
CREATE INDEX IF NOT EXISTS idx_org_members_user ON org_members (user_id);

-- ──────────────────────────────────────────────────────────
-- 2. Reference plans (placeholder pricing — editable)
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS subscription_plans (
    tier               TEXT PRIMARY KEY,            -- 'school' | 'personal'
    label              TEXT NOT NULL,
    period             TEXT NOT NULL DEFAULT 'week' CHECK (period IN ('week','month')),
    credits_per_period INT  NOT NULL DEFAULT 0,
    price_pence        INT  NOT NULL DEFAULT 0,     -- display only for now
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);
INSERT INTO subscription_plans (tier, label, period, credits_per_period, price_pence) VALUES
  ('school',   'School',   'week', 50, 0),
  ('personal', 'Personal', 'week', 10, 0)
ON CONFLICT (tier) DO NOTHING;

-- ──────────────────────────────────────────────────────────
-- 3. Subscriptions — one active per account (org OR user)
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS subscriptions (
    id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_kind           TEXT NOT NULL CHECK (account_kind IN ('org','user')),
    org_id                 UUID REFERENCES organisations(id) ON DELETE CASCADE,
    user_id                UUID REFERENCES users(id)         ON DELETE CASCADE,
    tier                   TEXT NOT NULL REFERENCES subscription_plans(tier),
    status                 TEXT NOT NULL DEFAULT 'inactive'
                             CHECK (status IN ('active','past_due','canceled','inactive')),
    credits_per_period     INT  NOT NULL DEFAULT 0,
    period                 TEXT NOT NULL DEFAULT 'week' CHECK (period IN ('week','month')),
    current_period_start   TIMESTAMPTZ,
    stripe_customer_id     TEXT,
    stripe_subscription_id TEXT,
    updated_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
    CHECK ((account_kind = 'org'  AND org_id  IS NOT NULL AND user_id IS NULL)
        OR (account_kind = 'user' AND user_id IS NOT NULL AND org_id  IS NULL))
);
-- At most one ACTIVE subscription per account.
CREATE UNIQUE INDEX IF NOT EXISTS uq_sub_active_org  ON subscriptions (org_id)  WHERE status = 'active' AND org_id  IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS uq_sub_active_user ON subscriptions (user_id) WHERE status = 'active' AND user_id IS NOT NULL;

-- ──────────────────────────────────────────────────────────
-- 4. Credit ledger — append-only; one -1 row per assessment marked
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS credit_ledger (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_kind  TEXT NOT NULL CHECK (account_kind IN ('org','user')),
    account_id    UUID NOT NULL,                   -- org_id or user_id
    submission_id UUID REFERENCES weekly_test_submissions(id) ON DELETE SET NULL,
    delta         INT  NOT NULL,                   -- -1 per assessment; +N for grants/refunds
    reason        TEXT NOT NULL,                   -- 'assessment' | 'grant' | 'refund' | 'admin'
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_credit_ledger_account ON credit_ledger (account_kind, account_id, created_at);
-- One debit per submission (guards accidental double-charge on re-mark).
CREATE UNIQUE INDEX IF NOT EXISTS uq_credit_ledger_submission
    ON credit_ledger (submission_id) WHERE submission_id IS NOT NULL AND reason = 'assessment';

-- ──────────────────────────────────────────────────────────
-- 5. RLS — accounts read their own; all writes go through the service role
-- ──────────────────────────────────────────────────────────
ALTER TABLE organisations      ENABLE ROW LEVEL SECURITY;
ALTER TABLE org_members        ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions      ENABLE ROW LEVEL SECURITY;
ALTER TABLE credit_ledger      ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Members read their org" ON organisations;
CREATE POLICY "Members read their org"
ON organisations FOR SELECT TO authenticated
USING (id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid()) OR public.is_admin());

DROP POLICY IF EXISTS "Admins manage orgs" ON organisations;
CREATE POLICY "Admins manage orgs"
ON organisations FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Users read their org memberships" ON org_members;
CREATE POLICY "Users read their org memberships"
ON org_members FOR SELECT TO authenticated
USING (user_id = auth.uid() OR public.is_admin());

DROP POLICY IF EXISTS "Admins manage org members" ON org_members;
CREATE POLICY "Admins manage org members"
ON org_members FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Anyone reads plans" ON subscription_plans;
CREATE POLICY "Anyone reads plans"
ON subscription_plans FOR SELECT TO authenticated
USING (true);

DROP POLICY IF EXISTS "Admins manage plans" ON subscription_plans;
CREATE POLICY "Admins manage plans"
ON subscription_plans FOR ALL TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Subscriptions: account owner reads their own (org member or the user); writes
-- are service-role only (the future Stripe webhook) — no client write policy.
DROP POLICY IF EXISTS "Accounts read their subscription" ON subscriptions;
CREATE POLICY "Accounts read their subscription"
ON subscriptions FOR SELECT TO authenticated
USING (
    (account_kind = 'user' AND user_id = auth.uid())
    OR (account_kind = 'org' AND org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid()))
    OR public.is_admin()
);

-- Credit ledger: account owner reads their own; writes are service-role only.
DROP POLICY IF EXISTS "Accounts read their credit ledger" ON credit_ledger;
CREATE POLICY "Accounts read their credit ledger"
ON credit_ledger FOR SELECT TO authenticated
USING (
    (account_kind = 'user' AND account_id = auth.uid())
    OR (account_kind = 'org' AND account_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid()))
    OR public.is_admin()
);

COMMENT ON TABLE subscriptions IS 'Per-account paid plan (org=school / user=personal). One credit = one assessment. Until status=active, mark-test is permissive. See RESOURCE_BANK_AND_TIERS_PLAN.md.';
COMMENT ON TABLE credit_ledger IS 'Append-only credit usage. -1 per assessment marked; balance = credits_per_period + Σ delta this period.';
