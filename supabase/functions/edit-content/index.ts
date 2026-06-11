// Supabase Edge Function: edit-content
// ---------------------------------------------------------------------------
// Commit-broker for the on-page admin editor (/version2/assets/js/page-editor.js).
//
// Flow: an admin edits text on a content page -> the browser POSTs
//   { path, edits: [{ oldText, newText }] }
// with their Supabase JWT. This function:
//   1. verifies the JWT and re-checks is_admin() server-side (the real gate),
//   2. fetches the target file from GitHub,
//   3. replaces each oldText with newText (each must match exactly once),
//   4. commits the result straight to the default branch.
//
// Secrets to set (supabase secrets set ...):
//   GH_TOKEN   - fine-grained PAT with "Contents: Read and write" on the repo
//   GH_REPO    - "lfmcnally/lfmcnally.github.io"
//   GH_BRANCH  - "main" (optional; defaults to main)
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

// Only allow editing site content files - never workflows, config, etc.
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

// Named HTML entities used across the site, mapped to the character the
// browser's innerHTML produces. Anything numeric (&#8212; / &#x2014;) is
// decoded too; unknown named entities are left as-is (and simply won't match,
// safely). The point is that the file's entity form (e.g. "&mdash;") and the
// browser's decoded form ("—") normalise to the same character.
const NAMED: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  mdash: "—", ndash: "–", minus: "−", hellip: "…",
  middot: "·", bull: "•",
  larr: "←", rarr: "→", uarr: "↑", darr: "↓", harr: "↔",
  ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’",
  laquo: "«", raquo: "»", times: "×", divide: "÷",
  deg: "°", plusmn: "±",
  frac12: "½", frac14: "¼", frac34: "¾",
  prime: "′", Prime: "″",
  copy: "©", reg: "®", trade: "™", sect: "§",
  para: "¶", dagger: "†", Dagger: "‡",
  euro: "€", pound: "£", cent: "¢", yen: "¥",
  eacute: "é", egrave: "è", ecirc: "ê", agrave: "à",
  acirc: "â", auml: "ä", ouml: "ö", uuml: "ü",
  iuml: "ï", ccedil: "ç", ntilde: "ñ", aelig: "æ",
  oelig: "œ", aacute: "á", iacute: "í", oacute: "ó",
  uacute: "ú", oslash: "ø", szlig: "ß",
  alpha: "α", beta: "β", gamma: "γ", delta: "δ",
  epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ",
  iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν",
  xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigma: "σ",
  tau: "τ", upsilon: "υ", phi: "φ", chi: "χ",
  psi: "ψ", omega: "ω",
};

function decodeEntity(name: string): string | null {
  if (name[0] === "#") {
    const code = (name[1] === "x" || name[1] === "X")
      ? parseInt(name.slice(2), 16)
      : parseInt(name.slice(1), 10);
    if (!isNaN(code)) {
      try { return String.fromCodePoint(code); } catch { return null; }
    }
    return null;
  }
  return Object.prototype.hasOwnProperty.call(NAMED, name) ? NAMED[name] : null;
}

// Normalise a string by decoding HTML entities and collapsing each run of
// whitespace to a single space, while recording for every normalised character
// the [start,end) range it came from in the original string. This lets us
// locate a snippet despite entity/whitespace differences and then replace the
// *exact* original bytes.
function normalizeWithMap(
  s: string,
): { norm: string; starts: number[]; ends: number[] } {
  const chars: string[] = [];
  const starts: number[] = [];
  const ends: number[] = [];
  const entRe = /^&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z][a-zA-Z0-9]*);/;
  const n = s.length;
  let i = 0;
  while (i < n) {
    const c = s[i];
    if (c === " " || c === "\t" || c === "\n" || c === "\r" || c === "\f") {
      let j = i + 1;
      while (j < n && /\s/.test(s[j])) j++;
      chars.push(" ");
      starts.push(i);
      ends.push(j);
      i = j;
      continue;
    }
    if (c === "&") {
      const m = s.slice(i, i + 40).match(entRe);
      if (m) {
        const dec = decodeEntity(m[1]);
        if (dec !== null) {
          const start = i, end = i + m[0].length;
          for (const ch of dec) {
            chars.push(ch);
            starts.push(start);
            ends.push(end);
          }
          i = end;
          continue;
        }
      }
    }
    chars.push(c);
    starts.push(i);
    ends.push(i + 1);
    i++;
  }
  return { norm: chars.join(""), starts, ends };
}

// Try an exact literal match first (the common, cheap case). Otherwise locate
// the snippet in normalised space (entity- and whitespace-tolerant) and map
// back to the original bytes. Requires an unambiguous single match either way,
// so an edit never lands in the wrong place.
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

  const { norm, starts, ends } = normalizeWithMap(content);
  const needle = normalizeWithMap(old).norm.trim();
  if (!needle) return { ok: false, reason: "empty original text" };

  let count = 0, first = -1, k = 0, idx: number;
  while ((idx = norm.indexOf(needle, k)) !== -1) {
    if (count === 0) first = idx;
    count++;
    k = idx + needle.length;
  }
  if (count === 0) return { ok: false, reason: "text not found in file" };
  if (count > 1) return { ok: false, reason: "text appears more than once" };

  const origStart = starts[first];
  const origEnd = ends[first + needle.length - 1];
  return {
    ok: true,
    content: content.slice(0, origStart) + newText + content.slice(origEnd),
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  // -- 1. Auth: verify JWT + admin ----------------------------------------
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

  // -- 2. Validate payload ------------------------------------------------
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

  // -- 3. Fetch the file --------------------------------------------------
  const fileUrl = `${GH_API}/repos/${repo}/contents/${path}?ref=${branch}`;
  const getRes = await fetch(fileUrl, { headers: ghHeaders });
  if (getRes.status === 404) return json({ error: "file not found" }, 404);
  if (!getRes.ok) {
    return json({ error: `github read failed (${getRes.status})` }, 502);
  }
  const fileJson = await getRes.json();
  let content = b64ToText(fileJson.content);
  const sha = fileJson.sha;

  // -- 4. Apply edits -----------------------------------------------------
  const failures: { index: number; reason: string }[] = [];
  edits.forEach((e, i) => {
    const result = applyEdit(content, e.oldText, e.newText);
    if (result.ok) content = result.content;
    else failures.push({ index: i, reason: result.reason });
  });

  if (failures.length) {
    // Nothing is committed unless every edit applies cleanly.
    return json({ error: "some edits could not be located", failures }, 422);
  }

  // -- 5. Commit ----------------------------------------------------------
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
