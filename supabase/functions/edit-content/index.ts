// Supabase Edge Function: edit-content
// ---------------------------------------------------------------------------
// Commit-broker for the on-page admin editor (/version2/assets/js/page-editor.js).
//
// Flow: an admin edits text on a content page → the browser POSTs
//   { path, edits: [{ oldText, newText }] }
// with their Supabase JWT. This function:
//   1. verifies the JWT and re-checks is_admin() server-side (the real gate),
//   2. fetches the target file from GitHub,
//   3. replaces each oldText with newText (each must match exactly once),
//   4. commits the result straight to the default branch.
//
// Secrets to set (supabase secrets set ...):
//   GH_TOKEN   — fine-grained PAT with "Contents: Read and write" on the repo
//   GH_REPO    — "lfmcnally/lfmcnally.github.io"
//   GH_BRANCH  — "main" (optional; defaults to main)
// SUPABASE_URL and SUPABASE_ANON_KEY are injected by the platform.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const GH_API = "https://api.github.com";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

// Only allow editing site content files — never workflows, config, etc.
function pathAllowed(p: string): boolean {
  if (!p || p.includes("..") || p.startsWith("/")) return false;
  return /^version2\/[A-Za-z0-9/_.-]+\.html$/.test(p);
}

function b64ToText(b64: string): string {
  const bin = atob(b64.replace(/\n/g, ""));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function textToB64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

function countOccurrences(haystack: string, needle: string): number {
  if (!needle) return 0;
  let n = 0, i = 0;
  while ((i = haystack.indexOf(needle, i)) !== -1) {
    n++;
    i += needle.length;
  }
  return n;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// The browser's innerHTML decodes non-ASCII HTML entities to their literal
// characters (e.g. the source's `&mdash;` arrives as "—"), while the source
// file often keeps the entity form. For locating a snippet we let each such
// character match either form. (We don't touch &amp;/&lt;/&gt;, which the DOM
// keeps encoded, so they already line up.)
const ENTITY_ALTS: Record<string, string> = {
  "—": "(?:—|&mdash;)",
  "–": "(?:–|&ndash;)",
  "·": "(?:·|&middot;)",
  "…": "(?:…|&hellip;)",
  "←": "(?:←|&larr;)",
  "→": "(?:→|&rarr;)",
  "“": "(?:“|&ldquo;)",
  "”": "(?:”|&rdquo;)",
  "‘": "(?:‘|&lsquo;)",
  "’": "(?:’|&rsquo;)",
  "×": "(?:×|&times;)",
  "°": "(?:°|&deg;)",
  " ": "(?:\\s|&nbsp;)",
};

function tolerantPattern(old: string): string {
  // Escape regex metacharacters, then relax whitespace runs and entity chars.
  let pat = escapeRegex(old).replace(/\s+/g, "\\s+");
  for (const [ch, alt] of Object.entries(ENTITY_ALTS)) {
    pat = pat.split(ch).join(alt);
  }
  return pat;
}

// Try an exact literal match first (the common case); fall back to a
// whitespace- and entity-tolerant match so minor serialization differences
// between the rendered DOM and the source file don't block an otherwise
// unambiguous edit. A function replacer is used so "$" in the new text is
// never treated as a regex backreference.
function applyEdit(
  content: string,
  oldText: string,
  newText: string,
): { ok: true; content: string } | { ok: false; reason: string } {
  const old = oldText.trim();
  if (!old) return { ok: false, reason: "empty original text" };

  const exact = countOccurrences(content, old);
  if (exact === 1) {
    return { ok: true, content: content.replace(old, () => newText) };
  }
  if (exact > 1) return { ok: false, reason: "text appears more than once" };

  const re = new RegExp(tolerantPattern(old), "g");
  const matches = content.match(re);
  if (!matches) return { ok: false, reason: "text not found in file" };
  if (matches.length > 1) return { ok: false, reason: "text appears more than once" };
  return { ok: true, content: content.replace(re, () => newText) };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  // ── 1. Auth: verify JWT + admin ────────────────────────────────────────
  const authHeader = req.headers.get("Authorization") ?? "";
  if (!authHeader.startsWith("Bearer ")) {
    return json({ error: "missing bearer token" }, 401);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );

  const { data: userData, error: userErr } = await supabase.auth.getUser();
  if (userErr || !userData?.user) return json({ error: "not signed in" }, 401);

  const { data: isAdmin, error: adminErr } = await supabase.rpc("is_admin");
  if (adminErr) return json({ error: "admin check failed" }, 500);
  if (isAdmin !== true) return json({ error: "not authorised" }, 403);

  // ── 2. Validate payload ────────────────────────────────────────────────
  let payload: { path?: string; edits?: { oldText: string; newText: string }[] };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "invalid JSON" }, 400);
  }

  const path = (payload.path ?? "").trim();
  const edits = Array.isArray(payload.edits) ? payload.edits : [];
  if (!pathAllowed(path)) return json({ error: "path not allowed" }, 400);
  if (!edits.length) return json({ error: "no edits supplied" }, 400);
  if (edits.length > 50) return json({ error: "too many edits" }, 400);

  const repo = Deno.env.get("GH_REPO")!;
  const branch = Deno.env.get("GH_BRANCH") ?? "main";
  const token = Deno.env.get("GH_TOKEN")!;
  const ghHeaders = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "classicalia-page-editor",
  };

  // ── 3. Fetch the file ──────────────────────────────────────────────────
  const fileUrl = `${GH_API}/repos/${repo}/contents/${path}?ref=${branch}`;
  const getRes = await fetch(fileUrl, { headers: ghHeaders });
  if (getRes.status === 404) return json({ error: "file not found" }, 404);
  if (!getRes.ok) {
    return json({ error: `github read failed (${getRes.status})` }, 502);
  }
  const fileJson = await getRes.json();
  let content = b64ToText(fileJson.content);
  const sha = fileJson.sha;

  // ── 4. Apply edits ─────────────────────────────────────────────────────
  const failures: { index: number; reason: string }[] = [];
  edits.forEach((e, i) => {
    const result = applyEdit(content, e.oldText, e.newText);
    if (result.ok) content = result.content;
    else failures.push({ index: i, reason: result.reason });
  });

  if (failures.length) {
    // Nothing is committed unless every edit applies cleanly.
    return json(
      { error: "some edits could not be located", failures },
      422,
    );
  }

  // ── 5. Commit ──────────────────────────────────────────────────────────
  const putRes = await fetch(`${GH_API}/repos/${repo}/contents/${path}`, {
    method: "PUT",
    headers: { ...ghHeaders, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `Edit content: ${path}\n\nUpdated via the admin page editor.`,
      content: textToB64(content),
      sha,
      branch,
    }),
  });

  if (!putRes.ok) {
    const detail = await putRes.text();
    return json({ error: `github commit failed (${putRes.status})`, detail }, 502);
  }

  const putJson = await putRes.json();
  return json({
    ok: true,
    commit: putJson.commit?.sha ?? null,
    applied: edits.length,
  });
});
