// On-page content editor for Classicalia v2 admins.
// ---------------------------------------------------------------------------
// Included on v2 content pages. For anonymous visitors it does *nothing* (it
// bails before loading Supabase by checking localStorage for a session), so it
// adds no cost to the public. For a signed-in admin it shows an "Edit page"
// button that makes prose blocks editable and saves changes back to the repo
// via the `edit-content` Supabase Edge Function (which re-checks admin
// server-side and commits straight to the default branch).
//
// Scope: v2 only. Edits text-only leaf elements (paragraphs, headings, list
// items, etc.) inside the main content area — not nav, not inline-marked-up
// blocks, not JS-generated widgets.

(function () {
  "use strict";

  const PROJECT_REF = "kqdnqaqqhpdryzoqvdac";
  const ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZG5xYXFxaHBkcnl6b3F2ZGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzYwNjYsImV4cCI6MjA3OTc1MjA2Nn0.TLrLDe8NpzNtyHrBjVKsTPAG4drErUW3dZ9zfrLhOeE";
  const FN_URL = `https://${PROJECT_REF}.supabase.co/functions/v1/edit-content`;
  const TOKEN_KEY = `sb-${PROJECT_REF}-auth-token`;

  // Only act on v2 pages, and never the admin/teacher tooling itself.
  const p = location.pathname;
  if (!p.startsWith("/version2/")) return;
  // No session stored → anonymous visitor → do nothing (zero overhead).
  if (!localStorage.getItem(TOKEN_KEY)) return;

  // What can be edited: leaf, text-only blocks inside the content area.
  const CONTENT_ROOTS = ".rev-main, .header-inner";
  const EDITABLE_SELECTOR = [
    "p", "li", "h1", "h2", "h3", "h4", "h5", "h6",
    "blockquote", "figcaption", "td", "th", "dd", "dt",
    ".rev-title", ".rev-label", ".rev-lead",
    ".header-title", ".header-deck", ".header-eyebrow",
  ].join(",");

  let sb = null;
  let editing = false;
  const tracked = new Map(); // el -> original innerHTML

  // ── helpers ──────────────────────────────────────────────────────────
  function encodeMinimal(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function filePath() {
    let path = location.pathname.replace(/^\//, "");
    if (path === "" || path.endsWith("/")) path += "index.html";
    return path;
  }

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = res;
      s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  async function getClient() {
    if (window.supabase && window.supabase.auth) return window.supabase;
    if (!window.supabase || !window.supabase.createClient) {
      await loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2");
    }
    return window.supabase.createClient(
      `https://${PROJECT_REF}.supabase.co`,
      ANON_KEY,
    );
  }

  // ── boot: only continue for signed-in admins ─────────────────────────
  async function boot() {
    try {
      sb = await getClient();
      const { data: { user } } = await sb.auth.getUser();
      if (!user) return;
      const { data: isAdmin, error } = await sb.rpc("is_admin");
      if (error || isAdmin !== true) return;
      injectUI();
    } catch (_) {
      /* never break the page for a content editor */
    }
  }

  // ── UI ───────────────────────────────────────────────────────────────
  function injectUI() {
    const style = document.createElement("style");
    style.textContent = `
      #pe-bar{position:fixed;right:18px;bottom:18px;z-index:99999;display:flex;gap:8px;align-items:center;
        font-family:'DM Sans',system-ui,sans-serif;}
      .pe-btn{font-size:13px;font-weight:600;padding:10px 16px;border-radius:999px;border:none;cursor:pointer;
        box-shadow:0 6px 20px rgba(14,30,63,.25);}
      .pe-edit{background:#1A6FFF;color:#fff;}
      .pe-save{background:#16a34a;color:#fff;}
      .pe-cancel{background:#fff;color:#1c2540;border:1px solid #d8dde8;}
      .pe-status{font-size:12px;font-weight:600;background:#0E1E3F;color:#fff;padding:7px 12px;border-radius:8px;
        box-shadow:0 6px 20px rgba(14,30,63,.25);max-width:280px;}
      .pe-status.err{background:#b91c1c;} .pe-status.ok{background:#16a34a;}
      [data-pe-editable]{outline:1.5px dashed rgba(26,111,255,.5);outline-offset:2px;border-radius:3px;
        transition:outline-color .1s;cursor:text;}
      [data-pe-editable]:hover{outline-color:#1A6FFF;}
      [data-pe-editable]:focus{outline:2px solid #1A6FFF;background:rgba(26,111,255,.05);}
    `;
    document.head.appendChild(style);

    const bar = document.createElement("div");
    bar.id = "pe-bar";
    bar.innerHTML = `<button type="button" class="pe-btn pe-edit" id="pe-toggle">&#9998; Edit page</button>`;
    document.body.appendChild(bar);
    document.getElementById("pe-toggle").addEventListener("click", enterEdit);
  }

  function setBarEditing() {
    document.getElementById("pe-bar").innerHTML = `
      <span class="pe-status" id="pe-status">Click any text to edit. Saving commits to the live site.</span>
      <button type="button" class="pe-btn pe-cancel" id="pe-cancel">Cancel</button>
      <button type="button" class="pe-btn pe-save" id="pe-save">Save changes</button>`;
    document.getElementById("pe-cancel").addEventListener("click", () => exitEdit(true));
    document.getElementById("pe-save").addEventListener("click", save);
  }

  function setBarIdle() {
    document.getElementById("pe-bar").innerHTML =
      `<button type="button" class="pe-btn pe-edit" id="pe-toggle">&#9998; Edit page</button>`;
    document.getElementById("pe-toggle").addEventListener("click", enterEdit);
  }

  function status(msg, kind) {
    const el = document.getElementById("pe-status");
    if (!el) return;
    el.textContent = msg;
    el.className = "pe-status" + (kind ? " " + kind : "");
  }

  // ── edit mode ────────────────────────────────────────────────────────
  function enterEdit() {
    if (editing) return;
    editing = true;
    tracked.clear();

    document.querySelectorAll(CONTENT_ROOTS).forEach((root) => {
      root.querySelectorAll(EDITABLE_SELECTOR).forEach((el) => {
        if (el.closest(".rev-sidebar, nav, footer")) return;
        if (el.querySelector("*")) return;          // leaf text only
        if (el.closest("a, button")) return;
        if (!el.textContent.trim()) return;
        if (tracked.has(el)) return;
        tracked.set(el, el.innerHTML);
        el.setAttribute("data-pe-editable", "1");
        el.setAttribute("contenteditable", "true");
        el.setAttribute("spellcheck", "true");
      });
    });

    setBarEditing();
  }

  function exitEdit(revert) {
    editing = false;
    tracked.forEach((originalHTML, el) => {
      if (revert) el.innerHTML = originalHTML;
      el.removeAttribute("data-pe-editable");
      el.removeAttribute("contenteditable");
      el.removeAttribute("spellcheck");
    });
    tracked.clear();
    setBarIdle();
  }

  // ── save ─────────────────────────────────────────────────────────────
  async function save() {
    const edits = [];
    const changedEls = [];
    tracked.forEach((originalHTML, el) => {
      // Only ever write back plain (re-encoded) text, so a stray paste can't
      // inject markup into the source file.
      const newHTML = encodeMinimal(el.textContent);
      if (newHTML !== originalHTML) {
        edits.push({ oldText: originalHTML, newText: newHTML });
        changedEls.push(el);
      }
    });

    if (!edits.length) {
      exitEdit(false);
      return;
    }

    status("Saving " + edits.length + " change" + (edits.length > 1 ? "s" : "") + "…");
    document.getElementById("pe-save").disabled = true;

    let token = "";
    try {
      const { data: { session } } = await sb.auth.getSession();
      token = session && session.access_token;
    } catch (_) { /* handled below */ }
    if (!token) { status("Your session expired — please sign in again.", "err"); return; }

    try {
      const res = await fetch(FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: ANON_KEY,
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ path: filePath(), edits }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        // Bank the new HTML as the baseline so a follow-up save diffs correctly.
        changedEls.forEach((el) => tracked.set(el, encodeMinimal(el.textContent)));
        status("Saved ✓ Live in ~1 min.", "ok");
        setTimeout(() => exitEdit(false), 1400);
      } else if (res.status === 422 && data.failures) {
        status(
          "Couldn't locate " + data.failures.length +
            " edit(s) in the source — those weren't saved. Try smaller edits.",
          "err",
        );
        document.getElementById("pe-save").disabled = false;
      } else {
        status(data.error || ("Save failed (" + res.status + ")"), "err");
        document.getElementById("pe-save").disabled = false;
      }
    } catch (e) {
      status("Network error — not saved.", "err");
      document.getElementById("pe-save").disabled = false;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
