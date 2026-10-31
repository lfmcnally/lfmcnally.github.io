// Classicalia site pulse — loaded on every page (see migration 087).
// ---------------------------------------------------------------------------
// One request per page load, for every visitor:
//   * counts the page view (signed in or anonymous; the server ignores bots
//     and admins' own browsing),
//   * records the visit for signed-in users (migration 086 activity log),
//   * shows any live announcement for this page or the whole site,
//   * applies a page lock set from admin mode.
// For site admins it then loads /shared/admin-mode.js, the on-page toolbar.
//
// No dependencies. It reads the Supabase session from localStorage and only
// loads supabase-js when a signed-in user's token has expired and the page
// has no Supabase client of its own to refresh it.

(function () {
  'use strict';
  if (window.ClassicaliaPulse) return;
  if (location.protocol !== 'https:' && location.protocol !== 'http:') return;

  var REF = 'kqdnqaqqhpdryzoqvdac';
  var API = 'https://' + REF + '.supabase.co';
  var ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZG5xYXFxaHBkcnl6b3F2ZGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzYwNjYsImV4cCI6MjA3OTc1MjA2Nn0.TLrLDe8NpzNtyHrBjVKsTPAG4drErUW3dZ9zfrLhOeE';
  var TOKEN_KEY = 'sb-' + REF + '-auth-token';
  var SUPABASE_CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  var VISITOR_VIEW_KEY = 'cl_admin_visitor_view';
  var DISMISSED_KEY = 'cl_dismissed_banners';

  var UA = navigator.userAgent || '';
  if (/bot|crawl|spider|slurp|lighthouse|headless/i.test(UA)) return;

  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v);
    } catch (e) { return null; }
  }

  // ── Session / token ──────────────────────────────────────────────
  function readSession() {
    try {
      var raw = localStorage.getItem(TOKEN_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (s && s.currentSession) s = s.currentSession;
      return s && s.access_token ? s : null;
    } catch (e) { return null; }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script');
      el.src = src; el.async = true;
      el.onload = resolve; el.onerror = reject;
      document.head.appendChild(el);
    });
  }

  var ownClient = null;
  function pageClient() {
    var c = window.supabaseClient;
    if (c && c.auth) return c;
    if (window.supabase && window.supabase.auth) return window.supabase;
    return null;
  }
  function anyClient() {
    var c = pageClient();
    if (c) return Promise.resolve(c);
    if (ownClient) return Promise.resolve(ownClient);
    var lib = (window.supabase && window.supabase.createClient) ? Promise.resolve() : loadScript(SUPABASE_CDN);
    return lib.then(function () {
      if (!ownClient) ownClient = window.supabase.createClient(API, ANON);
      return ownClient;
    });
  }

  // A usable access token for the signed-in user, or null for anonymous.
  function getToken() {
    var s = readSession();
    if (!s) return Promise.resolve(null);
    var msLeft = (s.expires_at || 0) * 1000 - Date.now();
    if (msLeft > 60000) return Promise.resolve(s.access_token);
    return anyClient()
      .then(function (c) { return c.auth.getSession(); })
      .then(function (r) { return r && r.data && r.data.session ? r.data.session.access_token : null; })
      .catch(function () { return null; });
  }

  function rpc(name, args, token) {
    return fetch(API + '/rest/v1/rpc/' + name, {
      method: 'POST',
      headers: {
        'apikey': ANON,
        'Authorization': 'Bearer ' + (token || ANON),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(args || {})
    }).then(function (res) {
      return res.text().then(function (txt) {
        var body = null;
        try { body = txt ? JSON.parse(txt) : null; } catch (e) { body = txt; }
        if (!res.ok) {
          var err = new Error((body && body.message) || ('HTTP ' + res.status));
          err.status = res.status;
          throw err;
        }
        return body;
      });
    });
  }

  // Authenticated call for admin-mode (always with the user's token).
  function adminRpc(name, args) {
    return getToken().then(function (t) {
      if (!t) throw new Error('Your session has expired. Sign in again.');
      return rpc(name, args, t);
    });
  }

  // ── Styles ───────────────────────────────────────────────────────
  var styled = false;
  function injectStyles() {
    if (styled) return; styled = true;
    var css = [
      '.clp-banners{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483000;display:flex;flex-direction:column;gap:8px;width:min(720px,calc(100vw - 32px));pointer-events:none;font-family:"DM Sans",system-ui,-apple-system,"Segoe UI",sans-serif;}',
      '.clp-banner{pointer-events:auto;display:flex;align-items:flex-start;gap:12px;padding:12px 14px 12px 16px;border-radius:10px;box-shadow:0 10px 30px rgba(14,30,63,.22);font-size:14px;line-height:1.45;color:#0e1e3f;background:#eef4ff;border:1px solid #c7d8ff;}',
      '.clp-banner.warning{background:#fff8e6;border-color:#f5d48a;}',
      '.clp-banner.success{background:#ecfdf3;border-color:#a7e3bf;}',
      '.clp-banner .clp-msg{flex:1;min-width:0;}',
      '.clp-banner .clp-title{font-weight:700;margin-right:6px;}',
      '.clp-banner a.clp-link{color:#1d4ed8;font-weight:600;margin-left:6px;white-space:nowrap;}',
      '.clp-banner .clp-x{flex-shrink:0;border:none;background:transparent;font-size:20px;line-height:1;cursor:pointer;color:#475569;padding:0 2px;}',
      '.clp-banner .clp-aud{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:rgba(14,30,63,.08);border-radius:8px;padding:1px 6px;margin-left:6px;vertical-align:1px;}',
      '.clp-lock{position:fixed;inset:0;z-index:2147483001;background:#f7f5f0;display:flex;align-items:center;justify-content:center;padding:24px;font-family:"DM Sans",system-ui,-apple-system,"Segoe UI",sans-serif;}',
      '.clp-lock-card{max-width:460px;text-align:center;background:#fff;border:1px solid #e3ded3;border-radius:14px;padding:36px 30px;box-shadow:0 12px 40px rgba(14,30,63,.08);color:#0e1e3f;}',
      '.clp-lock-card h1{font-family:Lora,Georgia,serif;font-style:italic;font-size:24px;margin:0 0 10px;}',
      '.clp-lock-card p{font-size:15px;line-height:1.6;color:#475569;margin:0 0 20px;}',
      '.clp-lock-card a{display:inline-block;background:#1d4ed8;color:#fff;text-decoration:none;font-weight:700;padding:10px 18px;border-radius:8px;font-size:14px;}',
      'html.clp-locked,html.clp-locked body{overflow:hidden !important;}'
    ].join('\n');
    var el = document.createElement('style');
    el.id = 'clp-styles';
    el.textContent = css;
    document.head.appendChild(el);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function safeUrl(u) {
    return (typeof u === 'string' && /^(https:\/\/|\/)/.test(u)) ? u : null;
  }

  // ── Banners ──────────────────────────────────────────────────────
  function dismissed() {
    try { return JSON.parse(store(DISMISSED_KEY) || '[]') || []; } catch (e) { return []; }
  }
  var AUD_LABEL = { signed_in: 'signed-in only', anon: 'signed-out only', students: 'students only', teachers: 'teachers only' };

  function renderBanners(list, opts) {
    opts = opts || {};
    var old = document.getElementById('clp-banners');
    if (old) old.remove();
    var gone = dismissed();
    var items = (list || []).filter(function (b) { return opts.ignoreDismissed || gone.indexOf(b.id) === -1; });
    if (!items.length) return;
    injectStyles();
    var wrap = document.createElement('div');
    wrap.className = 'clp-banners';
    wrap.id = 'clp-banners';
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', 'Announcements');
    items.forEach(function (b) {
      var el = document.createElement('div');
      el.className = 'clp-banner ' + (b.type === 'warning' || b.type === 'success' ? b.type : 'info');
      var link = safeUrl(b.link_url);
      el.innerHTML =
        '<div class="clp-msg">' +
          (b.title ? '<span class="clp-title">' + esc(b.title) + '</span>' : '') +
          esc(b.content) +
          (link ? '<a class="clp-link" href="' + esc(link) + '">' + esc(b.link_text || 'Find out more') + ' →</a>' : '') +
          (opts.showAudience && b.audience && b.audience !== 'all' ? '<span class="clp-aud">' + esc(AUD_LABEL[b.audience] || b.audience) + '</span>' : '') +
          (opts.showAudience && b.path ? '<span class="clp-aud">this page</span>' : '') +
        '</div>' +
        (b.dismissible !== false ? '<button class="clp-x" type="button" aria-label="Dismiss">×</button>' : '');
      var x = el.querySelector('.clp-x');
      if (x) x.addEventListener('click', function () {
        var g = dismissed();
        if (g.indexOf(b.id) === -1) g.push(b.id);
        store(DISMISSED_KEY, JSON.stringify(g.slice(-200)));
        el.remove();
        if (!wrap.children.length) wrap.remove();
      });
      wrap.appendChild(el);
    });
    (document.body || document.documentElement).appendChild(wrap);
  }

  // ── Lock screen ─────────────────────────────────────────────────
  function renderLock(lock) {
    var old = document.getElementById('clp-lock');
    if (old) old.remove();
    document.documentElement.classList.remove('clp-locked');
    if (!lock) return;
    injectStyles();
    var el = document.createElement('div');
    el.className = 'clp-lock';
    el.id = 'clp-lock';
    el.innerHTML =
      '<div class="clp-lock-card" role="alert">' +
        '<h1>This page is unavailable</h1>' +
        '<p>' + esc(lock.message || 'It’s being updated and will be back soon.') + '</p>' +
        '<a href="/version2/">Go to Classicalia</a>' +
      '</div>';
    (document.body || document.documentElement).appendChild(el);
    document.documentElement.classList.add('clp-locked');
  }

  // ── Main ────────────────────────────────────────────────────────
  var state = { data: null, token: null };

  function visitorView() { return store(VISITOR_VIEW_KEY) === '1'; }

  function apply() {
    var d = state.data || {};
    var asAdmin = d.admin && !visitorView();
    var banners = d.banners || [];
    if (d.admin && visitorView()) {
      // Show what a signed-out visitor would see.
      banners = banners.filter(function (b) { return b.audience === 'all' || b.audience === 'anon'; });
    }
    renderBanners(banners, { showAudience: asAdmin });
    renderLock(asAdmin ? null : d.lock);
    if (d.admin) loadAdminMode();
  }

  var adminLoading = false;
  function loadAdminMode() {
    if (window.ClassicaliaAdminMode) { window.ClassicaliaAdminMode.refresh(); return; }
    if (adminLoading) return;
    adminLoading = true;
    loadScript('/shared/admin-mode.js?v=1').catch(function () { adminLoading = false; });
  }

  function hit() {
    return getToken().then(function (token) {
      state.token = token;
      var args = { p_path: location.pathname, p_title: document.title || null, p_user_agent: UA };
      return rpc('page_hit', args, token).catch(function (err) {
        // A rejected token (e.g. signed out elsewhere): still count the view.
        if (token && (err.status === 401 || err.status === 403)) return rpc('page_hit', args, null);
        throw err;
      });
    }).then(function (data) {
      state.data = data || {};
      apply();
      return state.data;
    }).catch(function () { /* never break a page over analytics */ });
  }

  window.ClassicaliaPulse = {
    api: API,
    anonKey: ANON,
    getToken: getToken,
    rpc: adminRpc,
    state: state,
    esc: esc,
    reload: hit,
    apply: apply,
    visitorView: visitorView,
    setVisitorView: function (on) { store(VISITOR_VIEW_KEY, on ? '1' : null); apply(); }
  };

  function start() { setTimeout(hit, 0); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
