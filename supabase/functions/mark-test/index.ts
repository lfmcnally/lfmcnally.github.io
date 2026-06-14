// Supabase Edge Function: mark-test
// ---------------------------------------------------------------------------
// Marks an ENTIRE submission in one call and returns a per-question report.
// Used by the "submit at the end" student flow (one click → whole paper marked).
// Companion to mark-answer (which marks a single answer live). Same security and
// cost model; see WEEKLY_TEST_PLAN.md.
//
// Request (student JWT):
//   POST { submission_id, answers: [{ question_id, answer_text }, ...] }
// Returns:
//   { results: [{ question_id, status, marks, max, rationale }], total_awarded, total_marks, paused }
//   status ∈ 'marked' | 'blank' | 'paused' | 'error'
//
// Secrets/env: ANTHROPIC_API_KEY, optional MARK_MODEL (default claude-sonnet-4-6),
// plus the platform-injected SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
}

const PRICING: Record<string, { in: number; out: number }> = {
  "claude-sonnet-4-6": { in: 3, out: 15 },
  "claude-haiku-4-5":  { in: 1, out: 5 },
  "claude-opus-4-8":   { in: 5, out: 25 },
};
const MODEL = Deno.env.get("MARK_MODEL") ?? "claude-sonnet-4-6";
const MAX_OUTPUT_TOKENS = 512;
const MAX_QUESTIONS = 25;       // bound wall-time + cost per submission

// The class type tells us which subject (and so which marking voice) to use.
function subjectFor(t?: string | null): string {
  const s = (t || "").toLowerCase();
  if (s.startsWith("latin")) return "Latin";
  if (s.startsWith("greek")) return "Classical Greek";
  return "Classical Civilisation";
}

const POINTS_SYSTEM = (subject: string) =>
  `You are marking a GCSE ${subject} short answer against the teacher's ` +
  "mark scheme. Award whole marks only, between 0 and the maximum. Credit a point if the " +
  "student's answer conveys it, allowing synonyms, paraphrase and minor spelling slips — do " +
  "not require exact wording. Never award marks for anything not in the scheme. " +
  "Write the 'rationale' as ONE short sentence spoken directly TO the student (\"you\") — warm " +
  "and constructive: say what you credited and, if marks were lost, what to add next time. Do " +
  "not refer to \"the student\" in the third person, and do not restate the marks total.";

// OCR GCSE Latin/Greek (J282/J292) holistic translation grid.
const TRANSLATION_SYSTEM = (subject: string) =>
  `You are an OCR GCSE ${subject} examiner marking ONE sentence translated from ${subject} into ` +
  "English with the official holistic 5-mark grid. Judge the PROPORTION OF SENSE communicated " +
  "(who did what to whom), not word-by-word ticks, comparing the student's English with the correct " +
  "translation provided. Award a whole number from 0 to 5:\n" +
  "5 — perfectly accurate: no errors or omissions, or one inconsequential error.\n" +
  "4 — essentially correct, but two inconsequential errors, or one more serious error.\n" +
  "3 — overall meaning clear, but more serious errors or omissions.\n" +
  "2 — only part correct; the overall sense is lacking or unclear.\n" +
  "1 — no continuous sense; isolated knowledge of vocabulary only (at least two un-glossed words).\n" +
  "0 — nothing worthy of credit.\n" +
  "If the gist is communicated, score 3–5; if the basic sense is not understood, score 2 at most.\n" +
  "Treat as INCONSEQUENTIAL: number errors (singular/plural); minor tense slips (one past tense for " +
  "another); minor conjunctions/adverbs mistranslated or omitted; proper nouns left in the nominative; " +
  "wrong he/she subject pronoun; an adjective/adverb wrongly made superlative; a minor vocabulary error " +
  "that does not block the meaning.\n" +
  "Treat as MORE SERIOUS: vocabulary errors giving the wrong sense; errors of case; omitting a " +
  "meaning-bearing word; tense errors beyond minor ones (e.g. future for past); wrong constructions " +
  "(missed purpose clause, gerundive, ablative absolute); errors of voice; errors of person (except he/she).\n" +
  "A single word with several errors counts as at most one serious error. Never penalise the same " +
  "vocabulary error twice, or an error that is a knock-on consequence of an earlier one. Accept any " +
  "correct word order and any equally valid English rendering; do not penalise clumsy but accurate English.\n" +
  "List the band-defining issues in 'serious_errors' and 'minor_errors'. Write 'rationale' as ONE short " +
  "sentence spoken directly TO the student (\"you\"), naming what set the band; do not restate the mark.";

const POINTS_SCHEMA = {
  type: "object", additionalProperties: false,
  required: ["marks_awarded", "max_marks", "matched_points", "missing_points", "rationale"],
  properties: {
    marks_awarded:  { type: "integer" },
    max_marks:      { type: "integer" },
    matched_points: { type: "array", items: { type: "string" } },
    missing_points: { type: "array", items: { type: "string" } },
    rationale:      { type: "string", description: "One short sentence of feedback addressed to the student as 'you'." },
  },
};
const TRANSLATION_SCHEMA = {
  type: "object", additionalProperties: false,
  required: ["marks_awarded", "minor_errors", "serious_errors", "rationale"],
  properties: {
    marks_awarded:  { type: "integer", description: "Holistic band 0–5." },
    minor_errors:   { type: "array", items: { type: "string" } },
    serious_errors: { type: "array", items: { type: "string" } },
    rationale:      { type: "string", description: "One short sentence of feedback addressed to the student as 'you'." },
  },
};

// Mark one answer. Returns { marks, matched, rationale, usage } or { error, usage }.
async function markOne(apiKey: string, question: { prompt: string; marks: number },
  scheme: { scheme_points?: unknown; model_answer?: string; marking_notes?: string } | null,
  answerText: string, style: string, subject: string) {
  const translation = style === "translation";
  let userText: string;
  if (translation) {
    userText =
      `Sentence to translate from ${subject} into English (max ${question.marks} marks):\n${question.prompt}\n\n` +
      (scheme?.model_answer ? `Correct translation: ${scheme.model_answer}\n` : "Correct translation: (not supplied — judge from the original)\n") +
      (scheme?.marking_notes ? `Marking notes: ${scheme.marking_notes}\n` : "") +
      `\nStudent's English translation:\n"""${answerText}"""`;
  } else {
    const points: Array<{ text?: string; marks?: number }> = Array.isArray(scheme?.scheme_points) ? scheme!.scheme_points as [] : [];
    const bullets = points.map((p) => `- ${p.text ?? ""}${p.marks ? ` (${p.marks} mark${p.marks > 1 ? "s" : ""})` : ""}`).join("\n") || "- (no points listed)";
    userText =
      `Question (max ${question.marks} marks): ${question.prompt}\n\n` +
      `Mark scheme — creditworthy points:\n${bullets}\n` +
      (scheme?.model_answer ? `\nModel answer: ${scheme.model_answer}\n` : "") +
      (scheme?.marking_notes ? `Marking notes: ${scheme.marking_notes}\n` : "") +
      `\nStudent answer:\n"""${answerText}"""`;
  }
  const system = translation ? TRANSLATION_SYSTEM(subject) : POINTS_SYSTEM(subject);
  const schema = translation ? TRANSLATION_SCHEMA : POINTS_SCHEMA;

  let usage = { input_tokens: 0, output_tokens: 0 };
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL, max_tokens: MAX_OUTPUT_TOKENS, system,
        messages: [{ role: "user", content: [{ type: "text", text: userText }] }],
        output_config: { format: { type: "json_schema", schema } },
      }),
    });
    const anth = await res.json().catch(() => null);
    usage = anth?.usage ?? usage;
    if (!res.ok || anth?.stop_reason === "refusal") return { error: true, usage };
    const block = (anth.content || []).find((b: { type: string }) => b.type === "text");
    const parsed = JSON.parse(block?.text ?? "{}");
    const marks = Math.max(0, Math.min(question.marks, Math.round(Number(parsed.marks_awarded ?? 0))));
    const matched = translation
      ? [...(Array.isArray(parsed.serious_errors) ? parsed.serious_errors : []).map((e: string) => `serious: ${e}`),
         ...(Array.isArray(parsed.minor_errors) ? parsed.minor_errors : []).map((e: string) => `minor: ${e}`)]
      : (Array.isArray(parsed.matched_points) ? parsed.matched_points : []);
    return { marks, matched, rationale: String(parsed.rationale ?? "").slice(0, 800), usage };
  } catch (_e) {
    return { error: true, usage };
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader.startsWith("Bearer ")) return json({ error: "missing bearer token" }, 401);
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const userClient = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: authHeader } } });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData?.user) return json({ error: "not signed in" }, 401);
    const uid = userData.user.id;
    const svc = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false, autoRefreshToken: false } });

    let payload: { submission_id?: string; answers?: Array<{ question_id?: string; answer_text?: string }> };
    try { payload = await req.json(); } catch { return json({ error: "invalid JSON" }, 400); }
    const submissionId = (payload.submission_id ?? "").trim();
    if (!submissionId) return json({ error: "missing submission_id" }, 400);
    const submitted: Record<string, string> = {};
    (payload.answers || []).forEach((a) => { if (a.question_id) submitted[a.question_id] = String(a.answer_text ?? "").trim(); });

    const { data: sub } = await svc.from("weekly_test_submissions").select("id, test_id, student_id").eq("id", submissionId).maybeSingle();
    if (!sub || sub.student_id !== uid) return json({ error: "not your submission" }, 403);
    const { data: test } = await svc.from("weekly_tests")
      .select("id, teacher_id, class_id, status, due_at, max_attempts_per_question, max_answer_chars").eq("id", sub.test_id).maybeSingle();
    if (!test) return json({ error: "test not found" }, 404);
    if (test.status !== "open") return json({ error: "test is not open" }, 403);
    if (test.due_at && Date.parse(test.due_at) < Date.now()) return json({ error: "past the due date" }, 403);

    // Subject (Latin / Greek / Classical Civilisation) drives the marking voice.
    const { data: cls } = await svc.from("v2_classes").select("type").eq("id", test.class_id).maybeSingle();
    const subject = subjectFor(cls?.type);

    const { data: qs } = await svc.from("weekly_test_questions").select("id, prompt, marks, position, mark_style").eq("test_id", test.id).order("position");
    const questions = (qs || []).slice(0, MAX_QUESTIONS);
    const qids = questions.map((q) => q.id);
    const schemes: Record<string, { scheme_points?: unknown; model_answer?: string; marking_notes?: string }> = {};
    const existing: Record<string, { attempts: number; final_marks: number | null; ai_rationale: string | null }> = {};
    if (qids.length) {
      const { data: sc } = await svc.from("weekly_test_mark_schemes").select("question_id, scheme_points, model_answer, marking_notes").in("question_id", qids);
      (sc || []).forEach((s) => { schemes[s.question_id] = s; });
      const { data: ex } = await svc.from("weekly_test_answers").select("question_id, attempts, final_marks, ai_rationale").eq("submission_id", submissionId);
      (ex || []).forEach((a) => { existing[a.question_id] = a; });
    }

    // budget for the month
    const monthStart = new Date(); monthStart.setUTCDate(1); monthStart.setUTCHours(0, 0, 0, 0);
    const { data: budgetRow } = await svc.from("weekly_test_budget").select("monthly_cost_cap_micros").eq("teacher_id", test.teacher_id).maybeSingle();
    const costCap = budgetRow?.monthly_cost_cap_micros ?? 5000000;
    const { data: monthUsage } = await svc.from("weekly_test_marking_usage").select("cost_micros").eq("teacher_id", test.teacher_id).gte("created_at", monthStart.toISOString());
    let spent = (monthUsage ?? []).reduce((s, r) => s + Number(r.cost_micros || 0), 0);

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) return json({ error: "marking is not configured" }, 500);
    const price = PRICING[MODEL] ?? PRICING["claude-sonnet-4-6"];

    const results: Array<{ question_id: string; status: string; marks: number | null; max: number; rationale: string | null }> = [];
    let paused = false;

    for (const q of questions) {
      const at = (submitted[q.id] ?? "").slice(0, test.max_answer_chars);
      const prev = existing[q.id];
      if (!at) { results.push({ question_id: q.id, status: "blank", marks: 0, max: q.marks, rationale: null }); continue; }
      if (prev && prev.attempts >= test.max_attempts_per_question) {
        results.push({ question_id: q.id, status: "marked", marks: prev.final_marks ?? 0, max: q.marks, rationale: prev.ai_rationale }); continue;
      }
      if (spent >= costCap) { paused = true; results.push({ question_id: q.id, status: "paused", marks: null, max: q.marks, rationale: null }); continue; }

      const r = await markOne(apiKey, q, schemes[q.id] ?? null, at, q.mark_style ?? "points", subject);
      const cost = Math.round((r.usage.input_tokens || 0) * price.in + (r.usage.output_tokens || 0) * price.out);
      spent += cost;
      await svc.from("weekly_test_marking_usage").insert({
        teacher_id: test.teacher_id, test_id: test.id, student_id: uid, question_id: q.id,
        model: MODEL, input_tokens: r.usage.input_tokens || 0, output_tokens: r.usage.output_tokens || 0, cost_micros: cost,
      });
      if ("error" in r) { results.push({ question_id: q.id, status: "error", marks: null, max: q.marks, rationale: null }); continue; }
      await svc.from("weekly_test_answers").upsert({
        submission_id: submissionId, question_id: q.id, answer_text: at,
        ai_marks: r.marks, ai_max: q.marks, ai_matched: r.matched, ai_rationale: r.rationale,
        final_marks: r.marks, marked_by: "ai", attempts: (prev?.attempts ?? 0) + 1, updated_at: new Date().toISOString(),
      }, { onConflict: "submission_id,question_id" });
      results.push({ question_id: q.id, status: "marked", marks: r.marks, max: q.marks, rationale: r.rationale });
    }

    const totalMarks = questions.reduce((s, q) => s + q.marks, 0);
    const totalAwarded = results.reduce((s, r) => s + (r.marks || 0), 0);
    await svc.from("weekly_test_submissions").update({
      submitted_at: new Date().toISOString(), total_awarded: totalAwarded, total_marks: totalMarks,
    }).eq("id", submissionId);

    return json({ results, total_awarded: totalAwarded, total_marks: totalMarks, paused });
  } catch (e) {
    return json({ error: "unexpected error", detail: String(e) }, 500);
  }
});
