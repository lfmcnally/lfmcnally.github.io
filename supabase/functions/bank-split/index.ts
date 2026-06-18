// Supabase Edge Function: bank-split
// ---------------------------------------------------------------------------
// Authoring helper: take a Latin/Greek passage and split it into sentence-sized
// translation questions (~5 marks each), each with an accurate English answer
// key — so the author doesn't have to chunk and translate by hand.
// Admin-only (assessment permission). Returns { chunks: [{ source, english }] }.
//
// Request (author JWT): POST { text, subject }   subject ∈ 'latin' | 'greek' | ...
// Secrets/env: ANTHROPIC_API_KEY + platform SUPABASE_URL / *_ANON_KEY / *_SERVICE_ROLE_KEY.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
}
const MODEL = Deno.env.get("MARK_MODEL") ?? "claude-sonnet-4-6";

function subjectName(s?: string | null): string {
  const t = (s || "").toLowerCase();
  if (t.startsWith("greek")) return "Classical Greek";
  return "Latin";
}

const SCHEMA = {
  type: "object", additionalProperties: false, required: ["chunks"],
  properties: {
    chunks: {
      type: "array",
      items: {
        type: "object", additionalProperties: false, required: ["source", "english"],
        properties: {
          source:  { type: "string", description: "The original-language text of this chunk, verbatim from the passage." },
          english: { type: "string", description: "An accurate, natural English translation of this chunk." },
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

    const { data: prof } = await svc.from("users").select("can_manage_bank, is_admin").eq("id", uid).maybeSingle();
    if (!prof?.can_manage_bank && !prof?.is_admin) return json({ error: "needs assessment permission" }, 403);

    let payload: { text?: string; subject?: string };
    try { payload = await req.json(); } catch { return json({ error: "invalid JSON" }, 400); }
    const text = String(payload.text ?? "").trim().slice(0, 6000);
    if (!text) return json({ error: "no text" }, 400);
    const subject = subjectName(payload.subject);

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) return json({ error: "not configured" }, 500);

    const system =
      `You are an experienced ${subject} teacher building a GCSE translation assessment. ` +
      `Split the passage into chunks, each suitable as a single translation question worth about 5 marks — ` +
      `typically ONE sentence, or a self-contained clause of comparable length and difficulty. ` +
      `Cover the WHOLE passage IN ORDER, with no overlaps and nothing omitted. For each chunk give the ` +
      `original ${subject} text exactly as it appears in the passage, and an accurate, natural English ` +
      `translation. Keep chunks of roughly even length and difficulty.`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL, max_tokens: 3000, system,
        messages: [{ role: "user", content: [{ type: "text", text }] }],
        output_config: { format: { type: "json_schema", schema: SCHEMA } },
      }),
    });
    const anth = await res.json().catch(() => null);
    if (!res.ok || anth?.stop_reason === "refusal") return json({ error: "could not split" }, 502);
    const block = (anth.content || []).find((b: { type: string }) => b.type === "text");
    let chunks: Array<{ source: string; english: string }> = [];
    try { chunks = (JSON.parse(block?.text ?? "{}").chunks || []); } catch { chunks = []; }
    chunks = chunks
      .map((c) => ({ source: String(c.source ?? "").trim(), english: String(c.english ?? "").trim() }))
      .filter((c) => c.source)
      .slice(0, 25);
    if (!chunks.length) return json({ error: "no chunks" }, 502);
    return json({ chunks });
  } catch (e) {
    return json({ error: "unexpected error", detail: String(e) }, 500);
  }
});
