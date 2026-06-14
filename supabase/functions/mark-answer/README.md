# mark-answer

Edge Function that marks one student short-answer against the teacher's mark
scheme with Claude, releases the mark live, and logs token usage. Part of the
Weekly Test feature — see `WEEKLY_TEST_PLAN.md` and migration
`058_weekly_tests.sql`.

It is the **only** code that reads a mark scheme or calls the Anthropic API, and
the only writer of `weekly_test_answers`. Students never see schemes or write
marks directly.

## Request

`POST /functions/v1/mark-answer` with the student's Supabase JWT:

```json
{ "submission_id": "...", "question_id": "...", "answer_text": "..." }
```

Returns `{ marks, max, rationale, matched, attempts_left }`, or one of:
`{ capped: true }` (no attempts left), `{ paused: true }` (monthly budget
reached), or an error.

## Cost controls (enforced here)

- per-question **attempt cap** (`weekly_tests.max_attempts_per_question`)
- **answer length** cap (`weekly_tests.max_answer_chars`) + `max_tokens: 512`
- **open-window** gating (test open, before `due_at`, caller owns submission)
- per-teacher **monthly budget** (`weekly_test_budget`, default £5) — pauses
  marking when the logged spend (`weekly_test_marking_usage`) exceeds the cap
- per-student **rate limit** (≤60/hour, ≥3 s apart)

The usage ledger stores real `input_tokens`/`output_tokens` from each response and
an estimated `cost_micros` (micro-pounds).

## Deploy

```bash
supabase db push                                  # creates tables, RLS, storage bucket
supabase functions deploy mark-answer
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
# optional: choose a cheaper model
supabase secrets set MARK_MODEL=claude-haiku-4-5  # default is claude-sonnet-4-6
```

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are injected
by the platform.

**Also set a monthly spend limit on your Anthropic workspace** (console.anthropic.com)
as a hard backstop independent of this app.

## Models

`MARK_MODEL` may be `claude-sonnet-4-6` (default), `claude-haiku-4-5` (~⅓ the
cost), or `claude-opus-4-8`. All support the structured-JSON output this function
relies on.
