// Supabase Edge Function: generate-practice
// ---------------------------------------------------------------------------
// Phase 3 of the grammar-chapters plan. Generates per-nugget Latin translation
// practice that stays inside a student's chapter window on BOTH axes:
//   • vocabulary — only words met by their chapter (client sends the allowed
//     headwords from latin-gcse.js, already tagged chapter 1-10);
//   • grammar    — only constructs from current + previous chapters (nuggets
//     with chapter <= N, read here from grammar_nuggets).
//
// This first cut RETURNS sentences only (no DB writes, no flow changes) so the
// generation quality can be judged before persistence + the take/mark flow are
// wired. A light monthly £ cap (shared with marking) guards cost.
//
// Request (student JWT):
//   POST { nugget_code, chapter, count?, vocab: [{ latin, english }] }
// Returns:
//   { nugget, chapter, sentences: [{ latin, english }] }  |  { error } | { paused }
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

    let payload: { nugget_code?: string; chapter?: number; count?: number; vocab?: Array<{ latin?: string; english?: string }> };
    try { payload = await req.json(); } catch { return json({ error: "invalid JSON" }, 400); }

    const nuggetCode = String(payload.nugget_code ?? "").trim();
    const chapter = Math.max(1, Math.min(10, Math.round(Number(payload.chapter ?? 0))));
    const count = Math.max(1, Math.min(MAX_COUNT, Math.round(Number(payload.count ?? 6))));
    if (!nuggetCode) return json({ error: "missing nugget_code" }, 400);
    if (!chapter)    return json({ error: "missing or invalid chapter" }, 400);

    const vocab = (Array.isArray(payload.vocab) ? payload.vocab : [])
      .map((v) => ({ latin: String(v.latin ?? "").trim(), english: String(v.english ?? "").trim() }))
      .filter((v) => v.latin)
      .slice(0, MAX_VOCAB);
    if (vocab.length < 10) return json({ error: "too little vocabulary supplied for this chapter" }, 400);

    // Allowed grammar = nuggets up to this chapter; target = the focus nugget.
    const { data: nugs } = await svc.from("grammar_nuggets")
      .select("title, code, chapter").eq("subject", "latin").eq("level", "gcse").lte("chapter", chapter).order("position");
    const allowed = (nugs || []).filter((n) => (n.chapter ?? 0) > 0).map((n) => n.title);
    const target = (nugs || []).find((n) => n.code === nuggetCode);
    if (!target) return json({ error: "that concept isn't available at this chapter yet" }, 400);

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
    const userText =
      `TARGET construction to test: ${target.title}\n\n` +
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
    const sentences = (Array.isArray(parsed.sentences) ? parsed.sentences : [])
      .map((s) => ({ latin: String(s.latin ?? "").trim(), english: String(s.english ?? "").trim() }))
      .filter((s) => s.latin && s.english)
      .slice(0, count);
    if (!sentences.length) return json({ error: "no sentences generated" }, 502);

    return json({ nugget: target.title, nugget_code: nuggetCode, chapter, sentences });
  } catch (e) {
    return json({ error: "unexpected error", detail: String(e) }, 500);
  }
});
