// Supabase Edge Function: generate-practice
// ---------------------------------------------------------------------------
// Phase 3 of the grammar-chapters plan. Generates per-nugget Latin translation
// practice that stays inside a student's chapter window on BOTH axes:
//   • vocabulary — only words met by their chapter (client sends the allowed
//     headwords from latin-gcse.js, already tagged chapter 1-10);
//   • grammar    — only constructs from current + previous chapters (nuggets
//     with chapter <= N, read here from grammar_nuggets).
//
// It persists the result as an is_practice bank_assessment (+ questions, mark
// schemes, nugget tag) and opens a self_serve submission, so the existing
// take/mark/track flow is reused unchanged. A light monthly £ cap (shared with
// marking) guards cost.
//
// Entitled feature (no paid tier yet): open only to accounts granted bank
// access (or managers/admins) — enforced server-side. A stem-based guardrail
// drops generated sentences that drift outside the chapter's vocabulary window.
//
// Request (student JWT):
//   POST { nugget_code, chapter, count?, vocab: [{ latin, english, info }] }
// Returns:
//   { submission_id, assessment_id, title, nugget, chapter,
//     questions: [{ id, prompt, marks }] }  |  { error } | { paused } | { locked }
//
// Secrets/env: ANTHROPIC_API_KEY, optional GEN_MODEL (default claude-sonnet-4-6),
// plus the platform SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY.

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
const MODEL = Deno.env.get("GEN_MODEL") ?? "claude-sonnet-4-6";
const MAX_COUNT = 10;
const MAX_VOCAB = 600;          // hard bound on the headword list we accept

// ── Guardrail: keep generated sentences inside the vocabulary window ──────────
// Latin is inflected, so we match on lenient STEMS built from each allowed
// headword and (for verbs/nouns) its principal parts. A token is "known" if it
// shares a stem with something the student has met; sentences with an unknown
// content word are dropped. Biased lenient — better to let an odd word through
// than to reject good practice.
function stripMac(s: string): string { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
function buildStems(vocab: Array<{ latin: string; info?: string }>): string[] {
  const set = new Set<string>();
  const add = (raw: string) => { const w = stripMac(raw).replace(/[^a-z]/g, ""); if (w.length >= 3) set.add(w.length > 4 ? w.slice(0, w.length - 2) : w); };
  for (const v of vocab) {
    String(v.latin || "").split(/[,….\s]+/).forEach((p) => p && add(p));
    const info = String(v.info || "");
    const pp = info.split(/\s[-–]\s/)[0];                 // principal parts before the grammatical note
    if (pp && pp !== info) pp.split(/[,\s]+/).forEach((p) => p && add(p));
  }
  return [...set];
}
function sentenceInWindow(latin: string, stems: string[]): boolean {
  const toks = stripMac(latin).split(/[^a-z]+/).filter(Boolean);
  return toks.every((t) => t.length <= 2 || stems.some((s) => s.length >= 3 && (t.startsWith(s) || s.startsWith(t.slice(0, 4)))));
}

const SENTENCES_SCHEMA = {
  type: "object", additionalProperties: false,
  required: ["sentences"],
  properties: {
    sentences: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["latin", "english"],
        properties: {
          latin:   { type: "string", description: "The Latin sentence to translate." },
          english: { type: "string", description: "A natural, accurate English translation (the mark scheme answer)." },
        },
      },
    },
  },
};

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

    let payload: { nugget_code?: string; nugget_codes?: string[]; chapter?: number; count?: number; vocab?: Array<{ latin?: string; english?: string; info?: string }> };
    try { payload = await req.json(); } catch { return json({ error: "invalid JSON" }, 400); }

    // Single concept, or a mix (used by "practise my weak spots").
    const codes = Array.isArray(payload.nugget_codes) && payload.nugget_codes.length
      ? payload.nugget_codes.map((c) => String(c).trim()).filter(Boolean).slice(0, 6)
      : [String(payload.nugget_code ?? "").trim()].filter(Boolean);
    const chapter = Math.max(1, Math.min(10, Math.round(Number(payload.chapter ?? 0))));
    const count = Math.max(1, Math.min(MAX_COUNT, Math.round(Number(payload.count ?? 6))));
    if (!codes.length) return json({ error: "missing nugget_code" }, 400);
    if (!chapter)    return json({ error: "missing or invalid chapter" }, 400);

    const vocab = (Array.isArray(payload.vocab) ? payload.vocab : [])
      .map((v) => ({ latin: String(v.latin ?? "").trim(), english: String(v.english ?? "").trim(), info: String(v.info ?? "").trim() }))
      .filter((v) => v.latin)
      .slice(0, MAX_VOCAB);
    if (vocab.length < 10) return json({ error: "too little vocabulary supplied for this chapter" }, 400);

    // Access gate — grammar practice is an entitled feature (no paid tier yet),
    // open only to accounts granted bank access (or managers/admins). The UI
    // shows it greyed "coming soon" for everyone else; this enforces it server-side.
    const { data: ent } = await svc.from("users").select("can_self_serve_bank, can_manage_bank").eq("id", uid).maybeSingle();
    if (!ent?.can_self_serve_bank && !ent?.can_manage_bank) {
      return json({ locked: true, message: "Grammar practice isn't available on your account yet." });
    }

    // Allowed grammar = nuggets up to this chapter; target = the focus nugget.
    const { data: nugs } = await svc.from("grammar_nuggets")
      .select("id, title, code, chapter").eq("subject", "latin").eq("level", "gcse").lte("chapter", chapter).order("position");
    const allowed = (nugs || []).filter((n) => (n.chapter ?? 0) > 0).map((n) => n.title);
    const targets = codes.map((code) => (nugs || []).find((n) => n.code === code)).filter(Boolean) as Array<{ id: string; title: string; code: string; chapter: number }>;
    if (!targets.length) return json({ error: "that concept isn't available at this chapter yet" }, 400);
    const multi = targets.length > 1;
    const target = targets[0];

    // Cost guard — reuse the marking £ cap (student pays their own pool here).
    const monthStart = new Date(); monthStart.setUTCDate(1); monthStart.setUTCHours(0, 0, 0, 0);
    const { data: budgetRow } = await svc.from("weekly_test_budget").select("monthly_cost_cap_micros").eq("teacher_id", uid).maybeSingle();
    const costCap = budgetRow?.monthly_cost_cap_micros ?? 10000000;   // £10/mo default
    const { data: monthUsage } = await svc.from("weekly_test_marking_usage")
      .select("cost_micros").eq("student_id", uid).is("teacher_id", null).gte("created_at", monthStart.toISOString());
    const spent = (monthUsage ?? []).reduce((s, r) => s + Number(r.cost_micros || 0), 0);
    if (spent >= costCap) return json({ paused: true, message: "You've reached this month's practice budget — it resets on the 1st." });

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) return json({ error: "generation is not configured" }, 500);

    const vocabList = vocab.map((v) => `${v.latin} = ${v.english}`).join("\n");
    const system =
      `You are a Latin teacher writing translation practice for a GCSE student following "Latin to GCSE" (Taylor). ` +
      `You will be given a TARGET grammar construction, the COMPLETE list of vocabulary the student has met, and the list of grammar they have been taught. ` +
      `Write Latin-to-English practice sentences obeying ALL of these rules:\n` +
      `1. Every sentence MUST require the target construction to translate correctly.\n` +
      `2. Use ONLY vocabulary from the supplied list (any correct inflected form is fine; proper names already in the list are fine). Introduce NO other words.\n` +
      `3. Use ONLY grammar from the supplied "allowed grammar" list — nothing later in the course.\n` +
      `4. Keep sentences short (about 4-10 words) and natural classical Latin; vary them.\n` +
      `5. Give an accurate, natural English translation for each (this is the mark scheme answer).\n` +
      `Return ONLY the JSON.`;
    const targetText = multi
      ? `TARGET constructions — each sentence must require at least one of these (spread them across the set):\n${targets.map((t) => `- ${t.title}`).join("\n")}`
      : `TARGET construction to test: ${target.title}`;
    const userText =
      `${targetText}\n\n` +
      `Allowed grammar (current + earlier chapters):\n${allowed.map((t) => `- ${t}`).join("\n")}\n\n` +
      `Allowed vocabulary (latin = english):\n${vocabList}\n\n` +
      `Write ${count} practice sentences.`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL, max_tokens: 1400, system,
        messages: [{ role: "user", content: [{ type: "text", text: userText }] }],
        output_config: { format: { type: "json_schema", schema: SENTENCES_SCHEMA } },
      }),
    });
    const anth = await res.json().catch(() => null);
    const usage = anth?.usage ?? { input_tokens: 0, output_tokens: 0 };
    const price = PRICING[MODEL] ?? PRICING["claude-sonnet-4-6"];
    const cost = Math.round((usage.input_tokens || 0) * price.in + (usage.output_tokens || 0) * price.out);
    await svc.from("weekly_test_marking_usage").insert({
      teacher_id: null, test_id: null, bank_assessment_id: null, student_id: uid, question_id: null,
      model: MODEL, input_tokens: usage.input_tokens || 0, output_tokens: usage.output_tokens || 0, cost_micros: cost,
    });
    if (!res.ok || anth?.stop_reason === "refusal") return json({ error: "generation failed" }, 502);

    const block = (anth.content || []).find((b: { type: string }) => b.type === "text");
    let parsed: { sentences?: Array<{ latin?: string; english?: string }> } = {};
    try { parsed = JSON.parse(block?.text ?? "{}"); } catch { return json({ error: "could not parse generation" }, 502); }
    const raw = (Array.isArray(parsed.sentences) ? parsed.sentences : [])
      .map((s) => ({ latin: String(s.latin ?? "").trim(), english: String(s.english ?? "").trim() }))
      .filter((s) => s.latin && s.english);
    if (!raw.length) return json({ error: "no sentences generated" }, 502);

    // Guardrail: drop any sentence that drifts outside the vocab window. If that
    // would leave too few (likely over-strict matching), fall back to the raw set
    // rather than block the student.
    const stems = buildStems(vocab);
    const clean = raw.filter((s) => sentenceInWindow(s.latin, stems));
    const sentences = (clean.length >= 2 ? clean : raw).slice(0, count);
    if (!sentences.length) return json({ error: "no sentences generated" }, 502);

    // Persist as a takeable, is_practice assessment so the existing take/mark/
    // track flow is reused unchanged. One hidden "Practice" course holds them.
    let { data: course } = await svc.from("bank_courses").select("id").eq("slug", "latin-gcse-practice").maybeSingle();
    if (!course) {
      const ins = await svc.from("bank_courses")
        .insert({ subject: "latin", level: "gcse", title: "Practice", slug: "latin-gcse-practice", position: 9999 })
        .select("id").single();
      course = ins.data;
    }
    if (!course) return json({ error: "could not prepare practice" }, 500);

    const focusLabel = multi ? "your weak spots" : target.title;
    const title = `Practice: ${focusLabel} · chapter ${chapter}`;
    const { data: assess, error: aerr } = await svc.from("bank_assessments").insert({
      course_id: course.id, title, status: "published", origin: "official", created_by: uid,
      is_practice: true, grammar_ceiling: chapter,
    }).select("id").single();
    if (aerr || !assess) return json({ error: "could not save practice", detail: String(aerr?.message ?? "") }, 500);

    const qRows = sentences.map((s, i) => ({ assessment_id: assess.id, position: i + 1, prompt: s.latin, marks: 5, mark_style: "translation" }));
    const { data: qs, error: qerr } = await svc.from("bank_assessment_questions").insert(qRows).select("id, position").order("position");
    if (qerr || !qs || !qs.length) return json({ error: "could not save questions", detail: String(qerr?.message ?? "") }, 500);
    await svc.from("bank_assessment_mark_schemes").insert(qs.map((q) => ({ question_id: q.id, model_answer: sentences[q.position - 1].english })));
    await svc.from("bank_assessment_nuggets").insert(targets.map((t) => ({ assessment_id: assess.id, nugget_id: t.id, role: "tests" })));

    const { data: subRow } = await svc.from("weekly_test_submissions")
      .insert({ source_kind: "self_serve", bank_assessment_id: assess.id, student_id: uid }).select("id").single();

    return json({
      submission_id: subRow?.id, assessment_id: assess.id, title,
      nugget: focusLabel, nugget_code: target.code, chapter,
      questions: qs.map((q) => ({ id: q.id, prompt: sentences[q.position - 1].latin, marks: 5 })),
    });
  } catch (e) {
    return json({ error: "unexpected error", detail: String(e) }, 500);
  }
});
