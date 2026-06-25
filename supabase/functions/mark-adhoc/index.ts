// Supabase Edge Function: mark-adhoc
// ---------------------------------------------------------------------------
// Ad-hoc "quick mark" for TEACHERS. Mark a single question + answer typed in
// on the spot — e.g. transcribing a handwritten answer a student handed you —
// without creating a test, a class assignment or a submission. Nothing is
// persisted except the usage-ledger row (so the teacher's monthly budget still
// applies); the mark is returned to the caller and shown in the UI.
//
// It reuses the SAME marking styles as mark-answer / mark-test:
//   points      — credit creditworthy scheme points
//   translation — OCR holistic /5 sense grid (Latin/Greek)
//   essay       — OCR GCSE Classical Civ 8-marker, 4-level grid (4 AO1 + 4 AO2)
//
// Request (teacher JWT):
//   POST {
//     subject?: "Latin" | "Classical Greek" | "Classical Civilisation",
//     mark_style: "points" | "translation" | "essay",
//     marks: number,
//     prompt: string,
//     answer_text: string,
//     scheme?: { scheme_points?, model_answer?, marking_notes?, essay_scheme? }
//   }
// Returns: { marks, max, level?, source_used?, conclusion?, matched, rationale, cost_micros }
//          or { paused, message } when over the monthly budget.
//
// Secrets/env: ANTHROPIC_API_KEY, optional MARK_MODEL (default claude-sonnet-4-6),
// plus the platform-injected SUPABASE_URL / SUPABASE_ANON_KEY / SERVICE_ROLE_KEY.
//
// NOTE: the prompt/schema definitions below are intentionally a copy of those in
// mark-answer / mark-test. A future cleanup could lift them into a shared module
// (_shared/marking.ts) so the three functions can't drift.

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
const MAX_ANSWER_CHARS = 6000;     // generous — teachers may transcribe a full essay

function subjectFor(s?: string | null): string {
  const t = (s || "").toLowerCase();
  if (t.startsWith("latin")) return "Latin";
  if (t.startsWith("greek") || t.includes("greek")) return "Classical Greek";
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

const ESSAY_SYSTEM = (stemType: string) => {
  const inWhatWays = stemType === "in_what_ways";
  return "You are an OCR GCSE Classical Civilisation examiner marking ONE 8-mark extended response from the " +
    "Myth and Religion paper (J199/11). It is worth 4 AO1 (knowledge) + 4 AO2 (analysis and evaluation) = 8 marks, " +
    "awarded HOLISTICALLY against OCR's four-level grid:\n" +
    "Level 4 (7–8): consistently accurate, detailed knowledge from BOTH the source AND wider own knowledge; very good " +
    "understanding of context; a well-argued response with a range of well-selected evidence, critical analysis and evaluation.\n" +
    "Level 3 (5–6): accurate knowledge using source and own knowledge; a focused response with a range of evidence; relevant " +
    "analysis and evaluation; good understanding of context.\n" +
    "Level 2 (3–4): mostly accurate but limited knowledge; engages generally with limited evidence; some analysis; some context.\n" +
    "Level 1 (1–2): limited knowledge, may use the source only; little explanation; isolated analysis; limited context.\n" +
    "0: nothing worthy of credit.\n\n" +
    "Use the department house structure as your checklist for what each level looks like:\n" +
    "• AO1 = distinct, ACCURATE facts (a named figure, a feature of the source, a quoted phrase, an event, a date). A strong " +
    "answer gives about six, drawn from BOTH the source and wider knowledge.\n" +
    "• AO2 = each fact followed by analysis that ties it to the question ('this suggests / shows / means that…'). Facts " +
    "narrated without analysis earn AO1 only.\n" +
    "• SOURCE: the answer must use the printed source — a short quotation or a named feature. An answer using own knowledge " +
    "only is capped (an OCR examiner requirement).\n" +
    "• CONCLUSION: a short judgement. " +
    (inWhatWays
      ? "For this 'in what ways' stem it synthesises the most significant way(s).\n\n" +
        "STEM: this is an 'IN WHAT WAYS' question. Reward distinct ways drawn FROM THE SOURCE and FROM OWN KNOWLEDGE. " +
        "Do NOT reward counter-arguments — a student arguing the opposite case has misread the question (an OCR examiner " +
        "warning), so give such material no credit.\n\n"
      : "For this evaluative stem it must commit to one side and say why it outweighs.\n\n" +
        "STEM: this is an EVALUATIVE question ('how far / to what extent / who is more…'). Reward genuine argument on BOTH " +
        "sides plus a committed conclusion.\n\n") +
    "WEIGHTING: AO2 (analysis) is half the marks. An answer that mainly NARRATES accurate facts with little analysis tying them " +
    "to the question should not exceed Level 2 (4 marks), however wide its knowledge; reserve Levels 3–4 for answers where most " +
    "points are genuinely analysed against the question. Give NO credit for vague generalisations, or for 'there is no evidence / " +
    "we don't know' filler that makes no point.\n\n" +
    "PREFERRED STRUCTURE (use ONLY to inform your structure feedback): a full-mark answer typically makes about THREE AO1+AO2 " +
    "pairs on one side, THREE on the other, then a short CONCLUSION that weighs the two sides and commits to one. Comment briefly " +
    "on how the answer compares and whether that weighing conclusion is present. IMPORTANT: this is only ONE effective shape — do " +
    "NOT lower the mark for an answer that reaches the same range of accurate, well-analysed evidence through a different structure. " +
    "Mark on the quality, accuracy and analysis of the content, never on conformity to this template.\n\n" +
    "ACCURACY: credit only facts that are accurate for OCR Myth and Religion as taught on the revision pages. Treat the " +
    "indicative content provided as the canonical creditworthy material, but also credit other accurate, on-spec facts the " +
    "student brings. List every factually WRONG or inaccurate claim in 'inaccuracies' (give the claim and a brief correction); " +
    "wrong facts are never credited and, where they materially undermine the answer, hold the level down. Use [] if there are none. " +
    "Never invent credit for content not in the answer.\n\n" +
    "Award marks_awarded (0–8) and the matching level (0–4). List the accurate facts you credited in 'ao1_credited', the " +
    "analytical links that landed in 'ao2_credited', and any factual errors in 'inaccuracies'; set 'source_used' and 'conclusion'. " +
    "In 'missing', name the one or two things that would move the answer up a level. Write 'rationale' as THREE or FOUR sentences " +
    "spoken directly TO the student ('you') in a warm, specific coaching voice: what landed, a brief word on structure (the " +
    "agree/disagree balance and the conclusion), then the most useful next step. Do not restate the mark total or refer to 'the student'.";
};

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
const ESSAY_SCHEMA = {
  type: "object", additionalProperties: false,
  required: ["marks_awarded", "level", "ao1_credited", "ao2_credited", "inaccuracies", "source_used", "conclusion", "missing", "rationale"],
  properties: {
    marks_awarded: { type: "integer", description: "0–8." },
    level:         { type: "integer", description: "OCR level 0–4." },
    ao1_credited:  { type: "array", items: { type: "string" } },
    ao2_credited:  { type: "array", items: { type: "string" } },
    inaccuracies:  { type: "array", items: { type: "string" }, description: "Factually wrong/inaccurate claims: the claim + a brief correction. [] if none." },
    source_used:   { type: "boolean" },
    conclusion:    { type: "boolean" },
    missing:       { type: "array", items: { type: "string" } },
    rationale:     { type: "string", description: "Two to three sentences of feedback addressed to the student as 'you'." },
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  try {
    // -- 1. Auth — teachers only -------------------------------------------
    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader.startsWith("Bearer ")) return json({ error: "missing bearer token" }, 401);
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const userClient = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: authHeader } } });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData?.user) return json({ error: "not signed in" }, 401);
    const uid = userData.user.id;

    const svc = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data: profile } = await svc.from("users").select("role").eq("id", uid).maybeSingle();
    if (profile?.role !== "teacher") return json({ error: "teachers only" }, 403);

    // -- 2. Payload ---------------------------------------------------------
    let payload: {
      subject?: string; mark_style?: string; marks?: number; prompt?: string; answer_text?: string;
      scheme?: { scheme_points?: unknown; model_answer?: string; marking_notes?: string; essay_scheme?: { stem_type?: string; source?: string; indicative?: unknown } };
    };
    try { payload = await req.json(); } catch { return json({ error: "invalid JSON" }, 400); }

    const style = ["points", "translation", "essay"].includes(payload.mark_style ?? "") ? payload.mark_style! : "points";
    const subject = subjectFor(payload.subject);
    const prompt = (payload.prompt ?? "").trim();
    const answerText = (payload.answer_text ?? "").trim().slice(0, MAX_ANSWER_CHARS);
    const maxMarks = Math.max(1, Math.min(30, Math.round(Number(payload.marks ?? (style === "essay" ? 8 : style === "translation" ? 5 : 1)))));
    if (!prompt) return json({ error: "missing question" }, 400);
    if (!answerText) return json({ error: "empty answer" }, 400);
    const scheme = payload.scheme ?? {};

    // -- 3. Budget cap (per teacher, this calendar month) -------------------
    const monthStart = new Date();
    monthStart.setUTCDate(1); monthStart.setUTCHours(0, 0, 0, 0);
    const { data: budgetRow } = await svc.from("weekly_test_budget").select("monthly_cost_cap_micros, monthly_call_cap").eq("teacher_id", uid).maybeSingle();
    const costCap = budgetRow?.monthly_cost_cap_micros ?? 5000000; // £5 default
    const callCap = budgetRow?.monthly_call_cap ?? 5000;
    const { data: monthUsage } = await svc.from("weekly_test_marking_usage").select("cost_micros").eq("teacher_id", uid).gte("created_at", monthStart.toISOString());
    const spent = (monthUsage ?? []).reduce((s, r) => s + Number(r.cost_micros || 0), 0);
    if (spent >= costCap || (monthUsage?.length ?? 0) >= callCap) {
      return json({ paused: true, message: "You've reached this month's marking budget — raise it on the Weekly tests → Usage tab." });
    }

    // -- 4. Build the prompt ------------------------------------------------
    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) return json({ error: "marking is not configured" }, 500);

    const essay = style === "essay";
    const translation = style === "translation";
    const essayScheme: { stem_type?: string; source?: string; indicative?: unknown } =
      (essay && scheme.essay_scheme && typeof scheme.essay_scheme === "object") ? scheme.essay_scheme : {};
    const stemType = essayScheme.stem_type === "in_what_ways" ? "in_what_ways" : "evaluative";

    let userText: string;
    if (essay) {
      const indicative: string[] = Array.isArray(essayScheme.indicative) ? (essayScheme.indicative as unknown[]).map((s) => String(s)).filter(Boolean) : [];
      const indicBullets = indicative.map((s) => `- ${s}`).join("\n") || "- (none supplied — judge accuracy from OCR Myth & Religion taught content)";
      userText =
        `8-mark question (4 AO1 + 4 AO2 = 8 marks): ${prompt}\n\n` +
        (essayScheme.source ? `Printed source the student must use:\n"""${essayScheme.source}"""\n\n` : "Printed source: (none supplied)\n\n") +
        `Indicative content — creditworthy facts (from the revision pages):\n${indicBullets}\n` +
        (scheme.marking_notes ? `\nMarking notes: ${scheme.marking_notes}\n` : "") +
        `\nStudent answer:\n"""${answerText}"""`;
    } else if (translation) {
      userText =
        `Sentence to translate from ${subject} into English (max ${maxMarks} marks):\n${prompt}\n\n` +
        (scheme.model_answer ? `Correct translation: ${scheme.model_answer}\n` : "Correct translation: (not supplied — judge from the original)\n") +
        (scheme.marking_notes ? `Marking notes: ${scheme.marking_notes}\n` : "") +
        `\nStudent's English translation:\n"""${answerText}"""`;
    } else {
      const points: Array<{ text?: string; marks?: number }> = Array.isArray(scheme.scheme_points) ? scheme.scheme_points as [] : [];
      const bullets = points.map((p) => `- ${p.text ?? ""}${p.marks ? ` (${p.marks} mark${p.marks > 1 ? "s" : ""})` : ""}`).join("\n") || "- (no points listed)";
      userText =
        `Question (max ${maxMarks} marks): ${prompt}\n\n` +
        `Mark scheme — creditworthy points:\n${bullets}\n` +
        (scheme.model_answer ? `\nModel answer: ${scheme.model_answer}\n` : "") +
        (scheme.marking_notes ? `Marking notes: ${scheme.marking_notes}\n` : "") +
        `\nStudent answer:\n"""${answerText}"""`;
    }

    const system = essay ? ESSAY_SYSTEM(stemType) : translation ? TRANSLATION_SYSTEM(subject) : POINTS_SYSTEM(subject);
    const schema = essay ? ESSAY_SCHEMA : translation ? TRANSLATION_SCHEMA : POINTS_SCHEMA;

    // -- 5. Mark with Claude ------------------------------------------------
    const anthRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL, max_tokens: essay ? 900 : MAX_OUTPUT_TOKENS, system,
        messages: [{ role: "user", content: [{ type: "text", text: userText }] }],
        output_config: { format: { type: "json_schema", schema } },
      }),
    });
    const anth = await anthRes.json().catch(() => null);
    const usage = anth?.usage ?? { input_tokens: 0, output_tokens: 0 };
    const price = PRICING[MODEL] ?? PRICING["claude-sonnet-4-6"];
    const costMicros = Math.round((usage.input_tokens || 0) * price.in + (usage.output_tokens || 0) * price.out);
    await svc.from("weekly_test_marking_usage").insert({
      teacher_id: uid, test_id: null, student_id: null, question_id: null,
      model: MODEL, input_tokens: usage.input_tokens || 0, output_tokens: usage.output_tokens || 0, cost_micros: costMicros,
    });

    if (!anthRes.ok || anth?.stop_reason === "refusal") return json({ error: "marking unavailable, please try again" }, 502);
    const block = (anth.content || []).find((b: { type: string }) => b.type === "text");
    let parsed: {
      marks_awarded?: number; level?: number; matched_points?: string[]; minor_errors?: string[]; serious_errors?: string[];
      ao1_credited?: string[]; ao2_credited?: string[]; inaccuracies?: string[]; source_used?: boolean; conclusion?: boolean; missing?: string[]; rationale?: string;
    };
    try { parsed = JSON.parse(block?.text ?? "{}"); } catch { return json({ error: "could not parse marks" }, 502); }

    const marks = Math.max(0, Math.min(maxMarks, Math.round(Number(parsed.marks_awarded ?? 0))));
    const arr = (v: unknown) => (Array.isArray(v) ? v as string[] : []);
    const matched = essay
      ? [...arr(parsed.ao1_credited).map((p) => `AO1: ${p}`),
         ...arr(parsed.ao2_credited).map((p) => `AO2: ${p}`),
         ...(parsed.source_used ? [] : ["missing: a reference to the source"]),
         ...(parsed.conclusion ? [] : ["missing: a concluding judgement"]),
         ...arr(parsed.missing).map((m) => `next: ${m}`)]
      : translation
      ? [...arr(parsed.serious_errors).map((e) => `serious: ${e}`),
         ...arr(parsed.minor_errors).map((e) => `minor: ${e}`)]
      : arr(parsed.matched_points);

    return json({
      marks, max: maxMarks,
      level: essay ? Math.max(0, Math.min(4, Math.round(Number(parsed.level ?? 0)))) : undefined,
      source_used: essay ? !!parsed.source_used : undefined,
      conclusion: essay ? !!parsed.conclusion : undefined,
      inaccuracies: essay ? arr(parsed.inaccuracies) : undefined,
      matched, rationale: String(parsed.rationale ?? "").slice(0, 800),
      cost_micros: costMicros,
    });
  } catch (e) {
    return json({ error: "unexpected error", detail: String(e) }, 500);
  }
});
