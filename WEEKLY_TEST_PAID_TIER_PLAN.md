# Weekly Tests — Paid Teacher Tier & Authoring Improvements

Status: **design (plan only — nothing built yet).** Companion to `WEEKLY_TEST_PLAN.md`,
which describes the AI-marking system that already ships in v2
(`version2/tracking/weekly-test.html` + the `mark-answer` / `mark-test` Edge Functions +
`058_weekly_tests.sql`). This document layers two things on top of that working system:

1. **A paid teacher tier** — £50/year, self-serve sign-up, an *elevated teacher account*
   that can set tests, with a **weekly credit allowance** for AI marking, applied to the
   teacher's profile automatically on payment.
2. **Authoring improvements** — make tests faster to set up, easier to write, and
   reusable/storable across classes and weeks (the part that's clunky today).

The two are deliberately in one plan: the paywall is the moment a teacher is "activated,"
so it's also the natural place to fix onboarding and authoring friction.

---

## Where the current system stands (the starting point)

From the live code, today a teacher can only reach the builder if **both** are true
(`weekly-test.html` lines 128–134):

- `users.role === 'teacher'`, and
- `users.can_set_weekly_tests === true` — a flag that, per the gate copy, *"a site admin
  can switch on for your account in the admin panel."*

So **becoming a test-setter is a manual admin action today.** Spend is bounded by
`weekly_test_budget` (a **monthly £ cap** + call cap), enforced *inside* the marking
function and surfaced on the builder's "Usage & cost" tab. There is **no payment, no
subscription, and no concept of credits.**

The paid tier reuses almost all of this. The headline changes are small and contained:

| Concern | Today | After |
|---|---|---|
| Who can set tests | Admin manually flips `can_set_weekly_tests` | **Paying → auto-elevated** on Stripe webhook |
| Spend limit | Monthly **£** cap per teacher | Weekly **credit** allowance per teacher |
| Billing | none | Stripe annual subscription (£50/yr) |
| Account role | Admin sets `role='teacher'` | Set automatically on first successful payment |

---

# Part A — The paid teacher tier

## A1. What the teacher experiences

1. A user signs up / logs in normally (existing `/auth/` flow). They start as a normal
   account (student/none).
2. On a "**Become a teacher — £50/year**" call-to-action (on `weekly-test.html`'s gate
   screen and a new pricing page), they click **Upgrade**.
3. They're sent to **Stripe Checkout** (hosted by Stripe — no card data touches us).
4. On success, a **Stripe webhook** flips their account to an elevated teacher:
   `role='teacher'`, `can_set_weekly_tests=true`, and a subscription row with their
   weekly credit allowance. **This is the "automatically applied to their profile" step
   — done server-side, so it can't be spoofed from the browser.**
5. They land back on the builder, now unlocked, with a "**Credits this week: N**" meter.
6. AI marking spends credits; the meter refills every week. When credits run out for the
   week, marking pauses gracefully (students see *"your teacher will mark this"* — the
   exact fallback the function already implements for the budget cap).
7. Cancel/renew is handled by Stripe's customer portal; a lapsed subscription pauses
   marking and new-test publishing but never deletes anything.

This collapses the current two-step manual onboarding (admin sets role, admin flips
`can_set_weekly_tests`) into one self-serve purchase.

## A2. Data model — subscription + credits

A dedicated table keeps billing concerns separate from the existing telemetry table
(`weekly_test_budget` stays as the owner's cost backstop / reporting).

```sql
-- migration: 0XX_weekly_test_subscriptions.sql  (number assigned at build time)

create table weekly_test_subscriptions (
  teacher_id              uuid primary key references auth.users(id) on delete cascade,
  status                  text not null default 'inactive'
                            check (status in ('active','past_due','canceled','inactive')),
  stripe_customer_id      text,
  stripe_subscription_id  text,
  current_period_end      timestamptz,          -- from Stripe; when the paid year ends

  -- credits
  credits_per_week        int  not null default 600,   -- the weekly allowance (tunable)
  credits_used_this_week  int  not null default 0,
  week_resets_at          timestamptz not null default (now() + interval '7 days'),

  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);
-- RLS: teacher SELECT own; all writes via service role (webhook + marking function).
```

`is_admin` accounts (the site owner) **bypass** the paywall entirely. Existing teachers
who already have `can_set_weekly_tests=true` get **grandfathered** with a complimentary
`status='active'` row (a one-off backfill in the migration), so nobody loses access on
the day this ships.

## A3. Self-serve elevation flow (Stripe)

Two new Deno Edge Functions, mirroring the existing function pattern (verify the caller's
Supabase JWT; use a service-role client for privileged writes):

- **`create-checkout`** — `POST` from the upgrade button with the teacher's JWT. Creates
  (or reuses) a Stripe Customer for the user, opens a Checkout Session for the £50/year
  price, returns the Checkout URL. The browser redirects to it.
- **`stripe-webhook`** — Stripe → us. **The only place that grants access.** Verifies the
  Stripe signature, then on:
  - `checkout.session.completed` / `customer.subscription.created|updated` with an active
    status → upsert `weekly_test_subscriptions` (`status='active'`, store
    `stripe_customer_id`, `stripe_subscription_id`, `current_period_end`,
    `credits_per_week`), **and set `users.role='teacher'`, `users.can_set_weekly_tests=true`.**
  - `customer.subscription.deleted` / `past_due` → set `status` accordingly (this *pauses*
    marking but keeps the account and data).

A third small action (or a Stripe customer-portal link) lets teachers manage/cancel.

**Secrets to add (you set these once, like `ANTHROPIC_API_KEY` today):**
`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, and a `STRIPE_PRICE_ID` for the £50/yr price.

## A4. Credit model & economics (recommended)

**1 credit = 1 AI-marked answer (one model call).** This is the most transparent unit for
a teacher ("30 students × 10 questions = 300 credits for this test") and maps 1:1 to the
existing `weekly_test_marking_usage` ledger, so no new accounting is needed.

**Recommended defaults:** **600 credits/week**, resetting weekly, **no roll-over.** 600
comfortably covers one weekly test for a class of ~30 with a couple of attempts, or two
smaller classes.

**Make the economics comfortable by marking on Haiku 4.5 for the paid tier.** The current
default model is `claude-sonnet-4-6` (~£0.002/marking). Switching the paid-tier marking
path to **`claude-haiku-4-5`** (~£0.0007/marking — the plan already calls this a one-line
change) makes a year of heavy use cost a fraction of the £50:

| Scenario | Calls/yr | Sonnet 4.6 cost | Haiku 4.5 cost |
|---|---|---|---|
| 600 credits × 40 school weeks (worst case) | 24,000 | ~£48 | **~£17** |
| Realistic (1 class, ~300/wk, 36 wks) | ~10,800 | ~£22 | **~£8** |

On Haiku, even a teacher who maxes their allowance every week leaves a healthy margin on
£50 (Stripe takes ~£1.20 of that). Keep Sonnet/Opus available for **translation marking**
(the holistic /5 Latin–Greek path), which benefits more from the stronger model — i.e.
pick the model by `mark_style`, not globally. The weekly allowance is a single DB number,
so you can tune 600 up or down later without code changes.

> **The one product decision to lock before building:** the exact weekly number (600 is a
> recommendation) and whether translation marking counts as 1 credit or more (it's a
> bigger call). Defaults above are safe; adjust to taste.

## A5. Gating change in the marking functions

The marking functions (`mark-answer` / `mark-test`) already do an ordered set of checks
(auth → window → membership → length cap → attempt cap → **budget cap** → rate limit →
mark). The paid tier **swaps the budget-cap step** for a subscription+credits step:

```
... existing checks ...
6. Subscription & credits (was: monthly £ budget):
   sub := select * from weekly_test_subscriptions where teacher_id = test.teacher_id
   if is_admin(teacher) -> allow (no metering)
   if sub is null or sub.status != 'active' (or current_period_end passed)
        -> return { paused: true, reason: 'subscription' }   // builder shows "renew"
   if now() >= sub.week_resets_at:
        sub.credits_used_this_week = 0
        sub.week_resets_at = now() + 7 days                  // weekly refill
   credits_needed := 1   (or N for translation, if you choose)
   if sub.credits_used_this_week + credits_needed > sub.credits_per_week
        -> return { paused: true, reason: 'credits' }        // "out of credits this week"
   ... call Claude ...
   on success: sub.credits_used_this_week += credits_needed
               (still write weekly_test_marking_usage for owner cost reporting)
```

`mark-test` (batch) decrements per answer it marks and stops mid-batch if the weekly
allowance is exhausted, marking the rest as "teacher will mark." The student-facing
fallback already exists — we're only changing *why* it pauses.

## A6. Lapse, cancel, and grandfathering

- **Lapsed/canceled** (`status != 'active'` or period ended): builder still opens but shows
  a **renew banner**; **publishing new tests** and **AI marking** are blocked; existing
  data, results, and past tests remain fully visible. No destructive action ever.
- **Admins** bypass billing (the owner keeps full free access).
- **Existing teachers** are grandfathered to complimentary `active` in the migration
  backfill so the rollout is non-breaking.

## A7. New server pieces & secrets (summary)

- Edge functions: `create-checkout`, `stripe-webhook` (+ optional `billing-portal`).
- Migration: `weekly_test_subscriptions` (+ grandfather backfill) + RLS.
- Marking functions: replace budget step with subscription/credit step; select model by
  `mark_style` (Haiku for points, Sonnet/Opus for translation).
- Secrets: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID`.

## A8. UI changes

- **New pricing page** (`version2/.../pricing.html` or a section) — "£50/year, set marked
  weekly tests for your classes, N AI-marked answers/week," with the Upgrade button.
- **Gate screen** on `weekly-test.html` (currently the "ask an admin" message) becomes the
  **upgrade CTA** for non-subscribers.
- **Credits meter** in the builder header (replaces / sits beside the £ "Usage & cost"
  tab): "Credits this week: used / allowance," with the reset date.
- **Renew banner** when lapsed.

---

# Part B — Make authoring better (setup · ease · storing)

This is the "make it better than it currently is" half. Grounded in the current builder
(`weekly-test.html`), the friction is: every test starts empty, questions are added and
**saved one at a time** (a "Save question" button per card), mark schemes are typed
point-by-point, and a test is **bound to one `class_id`** with **no reuse and no library**.

Prioritised by impact ÷ effort:

## B1. Faster test creation (ease)

- **AI-drafted questions (the big one).** Add a "**Draft with AI**" box: the teacher pastes
  a source/passage or a topic + how many marks, and Claude returns draft questions **with
  creditworthy mark-scheme points pre-filled**, which the teacher then edits. This reuses
  the Anthropic key and infra already present, turns the slowest part of authoring
  (writing schemes) into editing, and is a natural premium perk. (Costs a few credits per
  generation — meter it the same way; or give a small separate authoring allowance.)
- **Bulk paste / "save all".** Let teachers paste several `prompt — marks` lines at once to
  create many questions in one go, and save the whole test with one button instead of
  per-card saves.
- **Student-view preview** — a "Preview as student" toggle so teachers see exactly what the
  class will get before publishing.

## B2. Reuse & storage (storing them)

- **Duplicate a test** ("Copy" → new draft) — the single biggest storage win and low
  effort: re-run last week's test, or branch a variant. Today there's no copy at all.
- **Assign/copy a test to another class.** Tests are pinned to one `class_id`; a "copy to
  class…" action (or many-to-many `weekly_test_classes`) lets one test serve all a
  teacher's groups without rebuilding.
- **Question bank / library** (the open item in `WEEKLY_TEST_PLAN.md` §10). Save questions
  + their schemes to a per-teacher bank; "Add from bank" when building. Sketch:
  ```sql
  create table weekly_test_question_bank (
    id uuid primary key default gen_random_uuid(),
    teacher_id uuid not null references auth.users(id) on delete cascade,
    prompt text not null, marks int not null,
    mark_style text not null default 'points',
    scheme_points jsonb not null default '[]', model_answer text, marking_notes text,
    image_path text, tags text[], created_at timestamptz not null default now()
  );
  ```
- **Reusable image picker.** Images currently re-upload per test; a picker over the
  teacher's existing `weekly-test-images` folder (and repo Class-Civ images) avoids
  re-uploading the same source.

## B3. Onboarding (setup)

- The paid flow (Part A) **already removes the manual admin step.** Complete it with a
  short post-purchase **"create your first class"** nudge — today the builder dead-ends with
  *"create one on the Classes page first"* (`weekly-test.html` line 138) if a new teacher
  has no class. A guided first-run (class → first test, optionally AI-drafted) makes the
  £50 feel immediately worth it.

## B4. Templates (ease)

- A few **starter templates** for common GCSE topics (a Civ source-question set, an OCR
  translation /5) so a teacher can go from zero to a ready-to-edit test in one click.

---

# Part C — Phasing

1. **Billing core** — `weekly_test_subscriptions` migration (+ grandfather backfill),
   `create-checkout` + `stripe-webhook`, auto-elevation. *(You deploy + set Stripe
   secrets; verify with a test-mode purchase.)*
2. **Credit gate** — swap the budget step in `mark-answer`/`mark-test` for the
   subscription/credit step; model-by-`mark_style`; builder credits meter + upgrade gate +
   renew banner. *(End-to-end: pay → unlocked → marking spends credits → weekly reset.)*
3. **Authoring quick wins** — duplicate test, copy-to-class, save-all/bulk paste, student
   preview. *(Pure UX; no new external services.)*
4. **AI-drafted questions** — the "Draft with AI" authoring assist (metered).
5. **Library & polish** — question bank, reusable image picker, templates, guided first-run.

Parts 1–2 deliver the paid tier; 3–5 are the "make it better" work and can ship
incrementally after.

---

# Part D — Deploy steps (you run once, like the existing function)

```bash
supabase db push                                  # subscriptions table + RLS + backfill
supabase functions deploy create-checkout stripe-webhook
supabase secrets set STRIPE_SECRET_KEY=sk_live_... \
                     STRIPE_WEBHOOK_SECRET=whsec_... \
                     STRIPE_PRICE_ID=price_...
# Stripe dashboard: create a £50/year recurring Product/Price; add the webhook endpoint
# (URL of the deployed stripe-webhook function) and copy its signing secret above.
```

I can't set secrets, create the Stripe product, or live-test the Stripe+Supabase path from
here — same shape as the original deploy: I write the migration, functions, and UI; you run
these once and we shake out the live path together.

---

# Part E — Decisions to confirm before build

1. **Weekly credit allowance** — recommend **600/week**; confirm or set your number.
2. **Marking model on the paid tier** — recommend **Haiku 4.5 for points, Sonnet/Opus for
   translation** (keeps margin healthy). Confirm.
3. **Does translation marking cost 1 credit or more?** (It's a bigger call; 1 is simplest.)
4. **AI-drafted questions** — in scope for v1, or a later add? Does drafting spend marking
   credits or a separate small authoring allowance?
5. **Pricing display** — flat £50/year only, or also surface a monthly equivalent?
