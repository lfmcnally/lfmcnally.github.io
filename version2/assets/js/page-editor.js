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

  // What can be edited: text-bearing blocks inside the content areas below. A
  // block may contain inline formatting (highlighted keywords, bold, links) —
  // but NOT block-level children — and must not live in an excluded zone.
  const CONTENT_ROOTS = [
    ".rev-main", ".header-inner",                         // revision pages
    ".hero-inner", ".curtain-inner", ".tiles-inner", ".types-inner", // v2 index
  ].join(",");
  const EDITABLE_SELECTOR = [
    "p", "li", "h1", "h2", "h3", "h4", "h5", "h6",
    "blockquote", "figcaption", "td", "th", "dd", "dt", "caption",
    // revision pages
    ".rev-title", ".rev-label", ".rev-lead", ".rev-note",
    ".header-title", ".header-deck", ".header-eyebrow",
    ".entry-def", ".analysis", ".explain-q", ".explain-label",
    ".term", ".term-gloss",
    // v2 index
    ".hero-eyebrow", ".hero-title", ".hero-deck", ".hero-subtitle",
    ".hero-by", ".hero-legacy-note",
    ".curtain-kicker", ".curtain-title", ".curtain-creds-head", ".cred-text",
    ".curtain-stat-n", ".curtain-stat-l",
    ".tile-title", ".tile-body", ".tile-cta",
    ".type-title", ".type-body", ".type-n",
  ].join(",");

  // Inline tags allowed inside an editable block (and kept on save). Anything
  // else as a descendant means the element is a structural container → skip it.
  const INLINE_OK = new Set([
    "SPAN", "A", "B", "STRONG", "I", "EM", "U", "SUP", "SUB",
    "BR", "WBR", "CODE", "MARK", "ABBR", "SMALL",
  ]);
  // Never edit inside these (nav, flashcards, generated widgets, etc.).
  const EXCLUDE_ZONE = ".rev-sidebar, nav, footer, .fc-wrap, .fc, script, style, [contenteditable]";

  let sb = null;
  let editing = false;
  const tracked = new Map(); // el -> original innerHTML

  // ── helpers ──────────────────────────────────────────────────────────
  // Can this element be edited? It must hold text, sit outside excluded
  // zones, and contain only inline (formatting) descendants — no nested
  // block-level structure that wouldn't map cleanly back to the source.
  function isEditable(el) {
    if (el.closest(EXCLUDE_ZONE)) return false;
    if (el.closest("a, button")) return false;
    if (!el.textContent.trim()) return false;
    const kids = el.querySelectorAll("*");
    for (let i = 0; i < kids.length; i++) {
      if (!INLINE_OK.has(kids[i].tagName)) return false;
    }
    return true;
  }

  // Produce clean HTML to write back: keep only whitelisted inline tags and a
  // minimal set of attributes (class, and href on links). This means a stray
  // paste or editor-inserted markup can never reach the source file.
  function sanitizeInline(el) {
    const clone = el.cloneNode(true);
    // Unwrap any non-whitelisted elements (repeat until none remain).
    let changed = true;
    while (changed) {
      changed = false;
      const all = clone.querySelectorAll("*");
      for (let i = 0; i < all.length; i++) {
        const node = all[i];
        if (!INLINE_OK.has(node.tagName)) {
          node.replaceWith(...node.childNodes);
          changed = true;
          break;
        }
      }
    }
    // Strip attributes down to the safe set.
    clone.querySelectorAll("*").forEach((node) => {
      Array.prototype.slice.call(node.attributes).forEach((a) => {
        const keep =
          a.name === "class" ||
          (node.tagName === "A" && a.name === "href");
        if (!keep) node.removeAttribute(a.name);
      });
    });
    return clone.innerHTML;
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
    const client = window.supabase.createClient(
      `https://${PROJECT_REF}.supabase.co`,
      ANON_KEY,
    );
    // Expose the instantiated client the way supabase-client.js would, so the
    // shared account menu (which reads window.supabase) works on these pages.
    window.supabaseClient = client;
    window.supabase = client;
    return client;
  }

  // Revision pages have a hard-coded "Sign in" CTA and never load the account
  // system, so the nav shows "Sign in" even when logged in. Since we already
  // have a Supabase client + signed-in user here, mount the shared account menu
  // in place of that CTA — for any signed-in user, not just admins.
  async function fixNavForSignedIn() {
    const cta = document.querySelector(".nav .nav-cta, .nav-links .nav-cta");
    if (!cta || cta.dataset.peAccount === "1") return;
    cta.dataset.peAccount = "1";
    const slot = document.createElement("div");
    slot.setAttribute("data-account-menu", "");
    cta.replaceWith(slot);
    try {
      if (!window.AccountMenu) {
        await loadScript("/version2/assets/js/account-menu.js");
      }
      if (window.AccountMenu && window.AccountMenu.mount) {
        window.AccountMenu.mount(slot);
      }
    } catch (_) { /* leave the slot empty rather than break the nav */ }
  }

  // ── boot ─────────────────────────────────────────────────────────────
  async function boot() {
    try {
      sb = await getClient();
      const { data: { user } } = await sb.auth.getUser();
      if (!user) return;                 // stale token / not really signed in
      fixNavForSignedIn();               // show account menu for any signed-in user
      const { data: isAdmin, error } = await sb.rpc("is_admin");
      if (error || isAdmin !== true) return;
      injectUI();                        // edit button only for admins
    } catch (_) {
      /* never break the page for a content editor */
    }
  }

  // ── UI ───────────────────────────────────────────────────────────────
  // The trigger lives inside the page's top nav (styled to match it). The only
  // floating element is a small status toast shown while saving. Falls back to
  // a discreet fixed control if a nav can't be found.
  function injectUI() {
    const style = document.createElement("style");
    style.textContent = `
      #pe-ctrl{display:inline-flex;gap:8px;align-items:center;margin-left:10px;
        font-family:'DM Sans',system-ui,sans-serif;vertical-align:middle;}
      .pe-nav-btn{font-family:'DM Sans',system-ui,sans-serif;font-size:12.5px;font-weight:600;
        padding:6px 13px;border-radius:999px;cursor:pointer;line-height:1;letter-spacing:.01em;
        border:1px solid rgba(255,255,255,.32);background:rgba(255,255,255,.1);color:#fff;
        transition:background .12s,border-color .12s;}
      .pe-nav-btn:hover{background:rgba(255,255,255,.2);}
      .pe-nav-btn.primary{background:#1A6FFF;border-color:#1A6FFF;}
      .pe-nav-btn.primary:hover{background:#3b82ff;border-color:#3b82ff;}
      /* fallback when mounted on the body rather than a nav */
      #pe-ctrl.pe-floating{position:fixed;right:18px;bottom:18px;z-index:99999;margin:0;
        background:#0E1E3F;padding:8px 10px;border-radius:999px;box-shadow:0 6px 20px rgba(14,30,63,.25);}
      #pe-toast{position:fixed;right:18px;bottom:18px;z-index:100000;display:none;max-width:300px;
        font-family:'DM Sans',system-ui,sans-serif;font-size:12.5px;font-weight:600;
        background:#0E1E3F;color:#fff;padding:9px 14px;border-radius:10px;
        box-shadow:0 8px 24px rgba(14,30,63,.28);}
      #pe-toast.show{display:block;}
      #pe-toast.err{background:#b91c1c;} #pe-toast.ok{background:#16a34a;}
      [data-pe-editable]{outline:1.5px dashed rgba(26,111,255,.45);outline-offset:2px;border-radius:3px;
        transition:outline-color .1s;cursor:text;}
      [data-pe-editable]:hover{outline-color:#1A6FFF;}
      [data-pe-editable]:focus{outline:2px solid #1A6FFF;background:rgba(26,111,255,.05);}
    `;
    document.head.appendChild(style);

    const ctrl = document.createElement("span");
    ctrl.id = "pe-ctrl";
    const navMount = document.querySelector(".nav .nav-links") ||
      document.querySelector(".nav-links") || document.querySelector(".nav");
    if (navMount) {
      navMount.appendChild(ctrl);
    } else {
      ctrl.classList.add("pe-floating");
      document.body.appendChild(ctrl);
    }

    const toast = document.createElement("div");
    toast.id = "pe-toast";
    document.body.appendChild(toast);

    setBarIdle();
  }

  function setBarEditing() {
    document.getElementById("pe-ctrl").innerHTML = `
      <button type="button" class="pe-nav-btn" id="pe-cancel">Cancel</button>
      <button type="button" class="pe-nav-btn primary" id="pe-save">Save changes</button>`;
    document.getElementById("pe-cancel").addEventListener("click", () => exitEdit(true));
    document.getElementById("pe-save").addEventListener("click", save);
    status("Click any text to edit, then Save.");
  }

  function setBarIdle() {
    document.getElementById("pe-ctrl").innerHTML =
      `<button type="button" class="pe-nav-btn" id="pe-toggle">&#9998; Edit page</button>`;
    document.getElementById("pe-toggle").addEventListener("click", enterEdit);
    status("");
  }

  function status(msg, kind) {
    const el = document.getElementById("pe-toast");
    if (!el) return;
    el.textContent = msg || "";
    el.className = (msg ? "show" : "") + (kind ? " " + kind : "");
  }

  // ── edit mode ────────────────────────────────────────────────────────
  function enterEdit() {
    if (editing) return;
    editing = true;
    tracked.clear();

    // Collect candidates, then drop any nested inside another candidate so we
    // never make both a block and its inner span separately editable.
    const candidates = [];
    document.querySelectorAll(CONTENT_ROOTS).forEach((root) => {
      root.querySelectorAll(EDITABLE_SELECTOR).forEach((el) => {
        if (isEditable(el)) candidates.push(el);
      });
    });
    const candidateSet = new Set(candidates);
    candidates.forEach((el) => {
      let p = el.parentElement;
      while (p) {
        if (candidateSet.has(p)) return; // an ancestor is editable → skip this
        p = p.parentElement;
      }
      if (tracked.has(el)) return;
      tracked.set(el, el.innerHTML);
      el.setAttribute("data-pe-editable", "1");
      el.setAttribute("contenteditable", "true");
      el.setAttribute("spellcheck", "true");
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
      // Keep inline formatting (highlighted keywords, bold, links) but strip
      // anything outside the whitelist so the source stays clean.
      const newHTML = sanitizeInline(el);
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
        changedEls.forEach((el) => tracked.set(el, sanitizeInline(el)));
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
