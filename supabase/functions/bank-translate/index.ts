// Supabase Edge Function: bank-translate
// ---------------------------------------------------------------------------
// Authoring helper: translate a Latin/Greek passage into accurate English for
// a translation question's answer key, so the author doesn't have to type it.
// Admin-only (assessment permission). Returns { translation }.
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
    const text = String(payload.text ?? "").trim().slice(0, 1200);
    if (!text) return json({ error: "no text" }, 400);
    const subject = subjectName(payload.subject);

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) return json({ error: "translation is not configured" }, 500);

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL, max_tokens: 400,
        system: `You are an expert ${subject} teacher writing an answer key. Translate the ${subject} into clear, natural, accurate English suitable as the model translation for a GCSE mark scheme. Reply with ONLY the English translation — no quotation marks, no notes, no preamble.`,
        messages: [{ role: "user", content: [{ type: "text", text }] }],
      }),
    });
    const anth = await res.json().catch(() => null);
    if (!res.ok || anth?.stop_reason === "refusal") return json({ error: "could not translate" }, 502);
    const block = (anth.content || []).find((b: { type: string }) => b.type === "text");
    const translation = String(block?.text ?? "").trim();
    if (!translation) return json({ error: "empty translation" }, 502);
    return json({ translation });
  } catch (e) {
    return json({ error: "unexpected error", detail: String(e) }, 500);
  }
});
