// Supabase Edge Function: mark-answer
// ---------------------------------------------------------------------------
// Marks one student short-answer against the teacher's mark scheme with Claude,
// releases the mark live, and logs token usage. See WEEKLY_TEST_PLAN.md.
//
// This function is the ONLY thing that ever reads a mark scheme or calls the
// Anthropic API, and the only writer of weekly_test_answers. Students POST their
// answer with their Supabase JWT; the function:
//   1. verifies the JWT and that the caller owns the submission,
//   2. checks the test is open + in-window, and the answer length cap,
//   3. enforces the per-question attempt cap, the per-teacher monthly budget,
//      and a per-student rate limit  (cost controls),
//   4. reads the mark scheme with the service role,
//   5. marks with Claude (structured JSON output),
//   6. writes the answer row + a usage-ledger row (real token counts).
//
// Secrets / env:
//   ANTHROPIC_API_KEY  - the marking key (supabase secrets set ANTHROPIC_API_KEY=…)
//   MARK_MODEL         - optional; defaults to claude-sonnet-4-6
//   SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY - platform-injected

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

// £ per 1,000,000 tokens (input/output). $ figures used as £ → a conservative
// (slightly high) estimate, which makes the budget cap safe. cost_micros (micro-
// pounds) = input*inRate + output*outRate.
const PRICING: Record<string, { in: number; out: number }> = {
  "claude-sonnet-4-6": { in: 3, out: 15 },
  "claude-haiku-4-5":  { in: 1, out: 5 },
  "claude-opus-4-8":   { in: 5, out: 25 },
};

const MODEL = Deno.env.get("MARK_MODEL") ?? "claude-sonnet-4-6";
const MAX_OUTPUT_TOKENS = 512;             // hard output ceiling per call
const RATE_PER_HOUR = 60;                  // per-student marking calls / hour
const DEBOUNCE_MS = 3000;                  // min gap between a student's calls

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

// OCR GCSE Classical Civilisation (J199/11) 8-marker, marked holistically on
// OCR's 4-level grid (4 AO1 + 4 AO2), operationalised by the department house
// structure. See docs/marking/j199-8-marker.md.
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
    "ACCURACY: credit only facts that are accurate for OCR Myth and Religion as taught on the revision pages. Treat the " +
    "indicative content provided as the canonical creditworthy material, but also credit other accurate, on-spec facts the " +
    "student brings. Do NOT credit vague, irrelevant or factually wrong claims, and never invent credit for content not in the answer.\n\n" +
    "Award marks_awarded (0–8) and the matching level (0–4). List the accurate facts you credited in 'ao1_credited' and the " +
    "analytical links that landed in 'ao2_credited'; set 'source_used' and 'conclusion'. In 'missing', name the one or two " +
    "things that would move the answer up a level. Write 'rationale' as TWO or THREE sentences spoken directly TO the student " +
    "('you') in a warm, specific coaching voice: what landed, then the most useful next step. Do not restate the mark total " +
    "or refer to 'the student'.";
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
  required: ["marks_awarded", "level", "ao1_credited", "ao2_credited", "source_used", "conclusion", "missing", "rationale"],
  properties: {
    marks_awarded: { type: "integer", description: "0–8." },
    level:         { type: "integer", description: "OCR level 0–4." },
    ao1_credited:  { type: "array", items: { type: "string" }, description: "Accurate facts the student used (AO1)." },
    ao2_credited:  { type: "array", items: { type: "string" }, description: "Analytical links that tied a fact to the question (AO2)." },
    source_used:   { type: "boolean", description: "Did the answer quote or name a feature of the printed source?" },
    conclusion:    { type: "boolean", description: "Is there a judgement/synthesis at the end?" },
    missing:       { type: "array", items: { type: "string" }, description: "One or two things that would move the answer up a level." },
    rationale:     { type: "string", description: "Two to three sentences of feedback addressed to the student as 'you'." },
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  try {
    // -- 1. Auth ------------------------------------------------------------
    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader.startsWith("Bearer ")) return json({ error: "missing bearer token" }, 401);

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const userClient = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData?.user) return json({ error: "not signed in" }, 401);
    const uid = userData.user.id;

    // Privileged client — reads schemes, writes answers/usage. Bypasses RLS.
    const svc = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    // -- 2. Payload ---------------------------------------------------------
    let payload: { submission_id?: string; question_id?: string; answer_text?: string };
    try { payload = await req.json(); } catch { return json({ error: "invalid JSON" }, 400); }
    const submissionId = (payload.submission_id ?? "").trim();
    const questionId = (payload.question_id ?? "").trim();
    const answerText = (payload.answer_text ?? "").trim();
    if (!submissionId || !questionId) return json({ error: "missing submission_id / question_id" }, 400);
    if (!answerText) return json({ error: "empty answer" }, 400);

    // -- 3. Ownership + window ---------------------------------------------
    const { data: sub } = await svc
      .from("weekly_test_submissions")
      .select("id, test_id, student_id")
      .eq("id", submissionId).maybeSingle();
    if (!sub || sub.student_id !== uid) return json({ error: "not your submission" }, 403);

    const { data: test } = await svc
      .from("weekly_tests")
      .select("id, teacher_id, class_id, status, due_at, max_attempts_per_question, max_answer_chars")
      .eq("id", sub.test_id).maybeSingle();
    if (!test) return json({ error: "test not found" }, 404);
    if (test.status !== "open") return json({ error: "test is not open" }, 403);
    if (test.due_at && Date.parse(test.due_at) < Date.now()) return json({ error: "past the due date" }, 403);

    if (answerText.length > test.max_answer_chars) {
      return json({ error: `answer too long (max ${test.max_answer_chars} characters)` }, 400);
    }

    // Subject (Latin / Greek / Classical Civilisation) drives the marking voice.
    const { data: cls } = await svc.from("v2_classes").select("type").eq("id", test.class_id).maybeSingle();
    const subject = subjectFor(cls?.type);

    const { data: question } = await svc
      .from("weekly_test_questions")
      .select("id, test_id, prompt, marks, mark_style")
      .eq("id", questionId).maybeSingle();
    if (!question || question.test_id !== test.id) return json({ error: "question not in this test" }, 400);

    // -- 4. Attempt cap -----------------------------------------------------
    const { data: existing } = await svc
      .from("weekly_test_answers")
      .select("id, attempts, final_marks, ai_rationale")
      .eq("submission_id", submissionId).eq("question_id", questionId).maybeSingle();
    const attempts = existing?.attempts ?? 0;
    if (attempts >= test.max_attempts_per_question) {
      return json({
        capped: true, attempts_left: 0,
        marks: existing?.final_marks ?? null, max: question.marks,
        rationale: existing?.ai_rationale ?? null,
      });
    }

    // -- 5. Budget cap (per teacher, this calendar month) -------------------
    const monthStart = new Date();
    monthStart.setUTCDate(1); monthStart.setUTCHours(0, 0, 0, 0);
    const { data: budgetRow } = await svc
      .from("weekly_test_budget")
      .select("monthly_cost_cap_micros, monthly_call_cap")
      .eq("teacher_id", test.teacher_id).maybeSingle();
    const costCap = budgetRow?.monthly_cost_cap_micros ?? 5000000; // £5 default
    const callCap = budgetRow?.monthly_call_cap ?? 5000;
    const { data: monthUsage } = await svc
      .from("weekly_test_marking_usage")
      .select("cost_micros")
      .eq("teacher_id", test.teacher_id)
      .gte("created_at", monthStart.toISOString());
    const spent = (monthUsage ?? []).reduce((s, r) => s + Number(r.cost_micros || 0), 0);
    if (spent >= costCap || (monthUsage?.length ?? 0) >= callCap) {
      return json({ paused: true, message: "Marking is paused for now — your teacher will mark this." });
    }

    // -- 6. Per-student rate limit -----------------------------------------
    const { data: recent } = await svc
      .from("weekly_test_marking_usage")
      .select("created_at")
      .eq("student_id", uid)
      .gte("created_at", new Date(Date.now() - 3600_000).toISOString())
      .order("created_at", { ascending: false }).limit(RATE_PER_HOUR + 1);
    if ((recent?.length ?? 0) >= RATE_PER_HOUR) return json({ error: "too many requests this hour" }, 429);
    if (recent?.[0] && Date.now() - Date.parse(recent[0].created_at) < DEBOUNCE_MS) {
      return json({ error: "slow down a moment" }, 429);
    }

    // -- 7. Read the mark scheme (service role only) -----------------------
    const { data: scheme } = await svc
      .from("weekly_test_mark_schemes")
      .select("scheme_points, model_answer, marking_notes, essay_scheme")
      .eq("question_id", questionId).maybeSingle();

    // -- 8. Mark with Claude (structured JSON output) ----------------------
    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) return json({ error: "marking is not configured" }, 500);

    const style = question.mark_style ?? "points";
    const translation = style === "translation";
    const essay = style === "essay";
    const essayScheme = (essay && scheme?.essay_scheme && typeof scheme.essay_scheme === "object")
      ? scheme.essay_scheme as { stem_type?: string; source?: string; indicative?: unknown } : {};
    const stemType = essayScheme.stem_type === "in_what_ways" ? "in_what_ways" : "evaluative";
    let userText: string;
    if (essay) {
      const indicative: string[] = Array.isArray(essayScheme.indicative) ? (essayScheme.indicative as unknown[]).map((s) => String(s)).filter(Boolean) : [];
      const indicBullets = indicative.map((s) => `- ${s}`).join("\n") || "- (none supplied — judge accuracy from OCR Myth & Religion taught content)";
      userText =
        `8-mark question (4 AO1 + 4 AO2 = 8 marks): ${question.prompt}\n\n` +
        (essayScheme.source ? `Printed source the student must use:\n"""${essayScheme.source}"""\n\n` : "Printed source: (none supplied)\n\n") +
        `Indicative content — creditworthy facts (from the revision pages):\n${indicBullets}\n` +
        (scheme?.marking_notes ? `\nMarking notes: ${scheme.marking_notes}\n` : "") +
        `\nStudent answer:\n"""${answerText}"""`;
    } else if (translation) {
      userText =
        `Sentence to translate from ${subject} into English (max ${question.marks} marks):\n${question.prompt}\n\n` +
        (scheme?.model_answer ? `Correct translation: ${scheme.model_answer}\n` : "Correct translation: (not supplied — judge from the original)\n") +
        (scheme?.marking_notes ? `Marking notes: ${scheme.marking_notes}\n` : "") +
        `\nStudent's English translation:\n"""${answerText}"""`;
    } else {
      const points: Array<{ text?: string; marks?: number }> = Array.isArray(scheme?.scheme_points) ? scheme!.scheme_points : [];
      const schemeBullets = points
        .map((p) => `- ${p.text ?? ""}${p.marks ? ` (${p.marks} mark${p.marks > 1 ? "s" : ""})` : ""}`)
        .join("\n") || "- (no points listed)";
      userText =
        `Question (max ${question.marks} marks): ${question.prompt}\n\n` +
        `Mark scheme — creditworthy points:\n${schemeBullets}\n` +
        (scheme?.model_answer ? `\nModel answer: ${scheme.model_answer}\n` : "") +
        (scheme?.marking_notes ? `Marking notes: ${scheme.marking_notes}\n` : "") +
        `\nStudent answer:\n"""${answerText}"""`;
    }

    const anthRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: essay ? 900 : MAX_OUTPUT_TOKENS,
        system: essay ? ESSAY_SYSTEM(stemType) : translation ? TRANSLATION_SYSTEM(subject) : POINTS_SYSTEM(subject),
        messages: [{ role: "user", content: [{ type: "text", text: userText }] }],
        output_config: { format: { type: "json_schema", schema: essay ? ESSAY_SCHEMA : translation ? TRANSLATION_SCHEMA : POINTS_SCHEMA } },
      }),
    });

    const anth = await anthRes.json().catch(() => null);
    const usage = anth?.usage ?? { input_tokens: 0, output_tokens: 0 };

    // Always log spend if tokens were consumed (keeps the budget cap honest).
    const price = PRICING[MODEL] ?? PRICING["claude-sonnet-4-6"];
    const costMicros = Math.round((usage.input_tokens || 0) * price.in + (usage.output_tokens || 0) * price.out);
    await svc.from("weekly_test_marking_usage").insert({
      teacher_id: test.teacher_id, test_id: test.id, student_id: uid, question_id: questionId,
      model: MODEL, input_tokens: usage.input_tokens || 0, output_tokens: usage.output_tokens || 0,
      cost_micros: costMicros,
    });

    if (!anthRes.ok || anth?.stop_reason === "refusal") {
      return json({ error: "marking unavailable, please try again" }, 502);
    }
    const textBlock = (anth.content || []).find((b: { type: string }) => b.type === "text");
    let parsed: { marks_awarded?: number; matched_points?: string[]; minor_errors?: string[]; serious_errors?: string[];
      ao1_credited?: string[]; ao2_credited?: string[]; source_used?: boolean; conclusion?: boolean; missing?: string[]; rationale?: string };
    try { parsed = JSON.parse(textBlock?.text ?? "{}"); } catch { return json({ error: "could not parse marks" }, 502); }

    // Clamp to the question's range as a guard.
    const marks = Math.max(0, Math.min(question.marks, Math.round(Number(parsed.marks_awarded ?? 0))));
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
    const rationale = String(parsed.rationale ?? "").slice(0, 800);

    // -- 9. Write the answer (service role; live release) -------------------
    await svc.from("weekly_test_answers").upsert({
      submission_id: submissionId, question_id: questionId, answer_text: answerText,
      ai_marks: marks, ai_max: question.marks, ai_matched: matched, ai_rationale: rationale,
      final_marks: marks, marked_by: "ai", attempts: attempts + 1, updated_at: new Date().toISOString(),
    }, { onConflict: "submission_id,question_id" });

    return json({
      marks, max: question.marks, rationale, matched,
      attempts_left: test.max_attempts_per_question - attempts - 1,
    });
  } catch (e) {
    return json({ error: "unexpected error", detail: String(e) }, 500);
  }
});
