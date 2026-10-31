// Classicalia admin mode — the on-page admin toolbar.
// ---------------------------------------------------------------------------
// Loaded by /shared/site-pulse.js only when the server says the visitor is a
// site admin. Every action goes through admin_* RPCs (migration 087) that
// re-check is_admin() server-side, so this file grants nothing by itself.
//
//   This page  views today / 7 / 30 days, unique users, signed-out views,
//              rank among all pages, 30-day chart, top schools, your note
//   People     who is on this page now, and its top users this month
//   Controls   lock the page (with a message), private note, page or
//              site-wide banners (audience, expiry, link), visitor view

(function () {
  'use strict';
  var P = window.ClassicaliaPulse;
  if (!P || window.ClassicaliaAdminMode) return;
  var esc = P.esc;
  var OPEN_KEY = 'cl_admin_panel_open';
  var TAB_KEY = 'cl_admin_panel_tab';

  var stats = null;
  var loading = false;
  var tab = 'page';
  try { tab = localStorage.getItem(TAB_KEY) || 'page'; } catch (e) {}
  var pollTimer = null;

  // ── Styles ───────────────────────────────────────────────────────
  var css = [
    '.cla, .cla *{box-sizing:border-box;}',
    '.cla{font-family:"DM Sans",system-ui,-apple-system,"Segoe UI",sans-serif;color:#0e1e3f;font-size:13px;line-height:1.45;}',
    '.cla-launch{position:fixed;left:16px;bottom:16px;z-index:2147483002;display:flex;gap:6px;align-items:center;}',
    '.cla-pill{display:inline-flex;align-items:center;gap:7px;border:none;cursor:pointer;font:inherit;font-weight:700;font-size:12.5px;padding:8px 13px;border-radius:999px;background:#0e1e3f;color:#fff;box-shadow:0 6px 20px rgba(14,30,63,.3);}',
    '.cla-pill:hover{background:#1b2f5c;}',
    '.cla-pill.amber{background:#b45309;}',
    '.cla-pill.red{background:#b91c1c;}',
    '.cla-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.25);}',
    '.cla-dot.off{background:#94a3b8;box-shadow:none;}',
    '.cla-panel{position:fixed;top:0;right:0;height:100%;width:400px;max-width:100vw;background:#fbfaf7;z-index:2147483003;box-shadow:-12px 0 40px rgba(14,30,63,.25);display:flex;flex-direction:column;transform:translateX(105%);transition:transform .2s ease;}',
    '.cla-panel.open{transform:translateX(0);}',
    '.cla-head{background:#0e1e3f;color:#fff;padding:16px 18px 0;flex-shrink:0;}',
    '.cla-eyebrow{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#6ba0ff;font-weight:700;}',
    '.cla-title{font-family:Lora,Georgia,serif;font-style:italic;font-weight:700;font-size:18px;margin:4px 34px 2px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.cla-path{font-size:11.5px;color:#8fa8cc;word-break:break-all;margin-bottom:12px;}',
    '.cla-close{position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-size:18px;line-height:1;cursor:pointer;}',
    '.cla-tabs{display:flex;gap:2px;}',
    '.cla-tab{flex:1;border:none;background:transparent;color:#8fa8cc;font:inherit;font-weight:700;font-size:12px;padding:10px 6px;cursor:pointer;border-bottom:3px solid transparent;}',
    '.cla-tab.on{color:#fff;border-bottom-color:#6ba0ff;}',
    '.cla-body{flex:1;overflow-y:auto;padding:16px 18px 28px;}',
    '.cla-sec{margin-bottom:20px;}',
    '.cla-h{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;margin:0 0 8px;}',
    '.cla-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}',
    '.cla-tile{background:#fff;border:1px solid #e7e2d8;border-radius:8px;padding:9px 10px;}',
    '.cla-tile .n{font-family:Lora,Georgia,serif;font-style:italic;font-weight:700;font-size:20px;line-height:1.1;}',
    '.cla-tile .l{font-size:9.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b;margin-top:2px;}',
    '.cla-chart svg{display:block;width:100%;}',
    '.cla-chart .b{fill:#1d4ed8;}',
    '.cla-chart .b.we{opacity:.4;}',
    '.cla-chart text{font-size:9px;fill:#64748b;font-family:inherit;}',
    '.cla-list{background:#fff;border:1px solid #e7e2d8;border-radius:8px;overflow:hidden;}',
    '.cla-row{display:flex;align-items:center;gap:9px;padding:8px 11px;border-bottom:1px solid #f0ece4;text-decoration:none;color:inherit;}',
    '.cla-row:last-child{border-bottom:none;}',
    'a.cla-row:hover{background:#f5f8ff;}',
    '.cla-av{width:24px;height:24px;border-radius:50%;background:#0e1e3f;color:#fff;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.cla-main{flex:1;min-width:0;}',
    '.cla-name{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.cla-sub{font-size:11px;color:#64748b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.cla-num{font-size:12px;color:#64748b;white-space:nowrap;text-align:right;}',
    '.cla-empty{padding:12px;color:#64748b;font-size:12px;background:#fff;border:1px dashed #e0dacd;border-radius:8px;}',
    '.cla-note{background:#fff8e1;border:1px solid #f3dc94;border-radius:8px;padding:10px 12px;white-space:pre-wrap;font-size:12.5px;margin-bottom:16px;}',
    '.cla-note b{display:block;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#92400e;margin-bottom:3px;}',
    '.cla-card{background:#fff;border:1px solid #e7e2d8;border-radius:8px;padding:12px;}',
    '.cla-field{margin-bottom:10px;}',
    '.cla-field label{display:block;font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#64748b;margin-bottom:4px;}',
    '.cla-in{width:100%;font:inherit;font-size:13px;padding:8px 10px;border:1px solid #d9d3c7;border-radius:6px;background:#fff;color:#0e1e3f;}',
    'textarea.cla-in{min-height:70px;resize:vertical;}',
    '.cla-grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px;}',
    '.cla-btn{font:inherit;font-size:12.5px;font-weight:700;padding:8px 13px;border-radius:6px;border:1px solid #d9d3c7;background:#fff;color:#0e1e3f;cursor:pointer;}',
    '.cla-btn:hover{background:#f4f1ea;}',
    '.cla-btn.pri{background:#1d4ed8;border-color:#1d4ed8;color:#fff;}',
    '.cla-btn.pri:hover{background:#1e40af;}',
    '.cla-btn.dan{color:#b91c1c;border-color:#f0c5c5;}',
    '.cla-btn:disabled{opacity:.5;cursor:default;}',
    '.cla-btns{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}',
    '.cla-msg{font-size:12px;}',
    '.cla-msg.ok{color:#15803d;} .cla-msg.err{color:#b91c1c;}',
    '.cla-toggle{display:flex;align-items:center;justify-content:space-between;gap:10px;}',
    '.cla-toggle .t{font-weight:700;} .cla-toggle .s{font-size:11.5px;color:#64748b;}',
    '.cla-sw{position:relative;width:40px;height:22px;flex-shrink:0;}',
    '.cla-sw input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer;z-index:1;}',
    '.cla-sw span{position:absolute;inset:0;background:#cbd5e1;border-radius:999px;transition:.15s;}',
    '.cla-sw span::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:.15s;box-shadow:0 1px 3px rgba(0,0,0,.2);}',
    '.cla-sw input:checked + span{background:#b91c1c;}',
    '.cla-sw.blue input:checked + span{background:#1d4ed8;}',
    '.cla-sw input:checked + span::before{transform:translateX(18px);}',
    '.cla-sw input:focus-visible + span{outline:2px solid #1d4ed8;outline-offset:2px;}',
    '.cla-ban{border:1px solid #e7e2d8;border-radius:8px;padding:9px 11px;margin-bottom:8px;background:#fff;}',
    '.cla-ban .m{font-size:12.5px;}',
    '.cla-ban .meta{font-size:11px;color:#64748b;margin:3px 0 7px;}',
    '.cla-tag{display:inline-block;font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:1px 6px;border-radius:8px;background:#e9ecf1;color:#475569;margin-right:4px;}',
    '.cla-tag.live{background:#dcfce7;color:#166534;} .cla-tag.off{background:#f3f4f6;color:#6b7280;}',
    '.cla-links{display:flex;flex-direction:column;gap:6px;}',
    '.cla-links a{color:#1d4ed8;font-weight:600;text-decoration:none;font-size:12.5px;}',
    '.cla-loading{color:#64748b;padding:20px 0;text-align:center;}',
    '.cla-foot{font-size:11.5px;color:#64748b;line-height:1.5;}',
    '@media (max-width:520px){.cla-panel{width:100vw;}.cla-launch{left:10px;bottom:10px;}}'
  ].join('\n');
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  // ── Helpers ──────────────────────────────────────────────────────
  function initials(n) {
    return String(n || '?').split(/\s+/).filter(Boolean).slice(0, 2).map(function (s) { return s[0].toUpperCase(); }).join('') || '?';
  }
  function avatar(u) {
    var c = /^#[0-9A-Fa-f]{6}$/.test(u.avatar_color || '') ? u.avatar_color : '#0E1E3F';
    return '<span class="cla-av" style="background:' + c + '">' + esc(initials(u.full_name)) + '</span>';
  }
  function rel(ts) {
    if (!ts) return '';
    var m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
    if (m < 1) return 'just now';
    if (m < 60) return m + 'm ago';
    if (m < 1440) return Math.floor(m / 60) + 'h ago';
    return Math.floor(m / 1440) + 'd ago';
  }
  function fmtDate(ts) {
    return ts ? new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
  }
  function n(v) { return v == null ? '—' : Number(v).toLocaleString('en-GB'); }
  function userLink(u) { return '/version2/admin/?user=' + encodeURIComponent(u.user_id || u.id); }
  function pagePath() { return (P.state.data && P.state.data.path) || location.pathname; }

  // ── DOM ──────────────────────────────────────────────────────────
  var root = document.createElement('div');
  root.className = 'cla';
  root.innerHTML =
    '<div class="cla-launch" id="claLaunch"></div>' +
    '<aside class="cla-panel" id="claPanel" aria-label="Admin mode" aria-hidden="true">' +
      '<div class="cla-head">' +
        '<button class="cla-close" id="claClose" type="button" aria-label="Close admin mode">×</button>' +
        '<div class="cla-eyebrow">Admin mode</div>' +
        '<div class="cla-title" id="claTitle"></div>' +
        '<div class="cla-path" id="claPath"></div>' +
        '<div class="cla-tabs" role="tablist">' +
          '<button class="cla-tab" data-tab="page" role="tab">This page</button>' +
          '<button class="cla-tab" data-tab="people" role="tab">People</button>' +
          '<button class="cla-tab" data-tab="controls" role="tab">Controls</button>' +
        '</div>' +
      '</div>' +
      '<div class="cla-body" id="claBody"></div>' +
    '</aside>';
  document.body.appendChild(root);

  var panel = root.querySelector('#claPanel');
  var body = root.querySelector('#claBody');

  function isOpen() { return panel.classList.contains('open'); }
  function setOpen(on) {
    panel.classList.toggle('open', on);
    panel.setAttribute('aria-hidden', on ? 'false' : 'true');
    try { if (on) sessionStorage.setItem(OPEN_KEY, '1'); else sessionStorage.removeItem(OPEN_KEY); } catch (e) {}
    clearInterval(pollTimer);
    if (on) {
      load();
      pollTimer = setInterval(function () { if (!document.hidden) load(true); }, 60000);
    }
  }

  root.querySelector('#claClose').addEventListener('click', function () { setOpen(false); });
  root.querySelectorAll('.cla-tab').forEach(function (b) {
    b.addEventListener('click', function () {
      tab = b.dataset.tab;
      try { localStorage.setItem(TAB_KEY, tab); } catch (e) {}
      render();
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) setOpen(false);
    // Alt+Shift+A toggles the panel
    if (e.altKey && e.shiftKey && (e.key === 'A' || e.key === 'a' || e.code === 'KeyA')) {
      e.preventDefault();
      if (P.visitorView()) P.setVisitorView(false);
      setOpen(!isOpen());
    }
  });

  // ── Launcher ────────────────────────────────────────────────────
  function renderLauncher() {
    var el = root.querySelector('#claLaunch');
    if (P.visitorView()) {
      el.innerHTML = '<button class="cla-pill amber" id="claExitVisitor" type="button" title="You are seeing this page as a signed-out visitor">Visitor view · Exit</button>';
      el.querySelector('#claExitVisitor').addEventListener('click', function () { P.setVisitorView(false); });
      if (isOpen()) setOpen(false);
      return;
    }
    var here = stats && stats.here_now ? stats.here_now.length : null;
    var locked = !!(P.state.data && P.state.data.lock);
    el.innerHTML =
      '<button class="cla-pill" id="claOpen" type="button" title="Admin mode (Alt+Shift+A)">' +
        '<span class="cla-dot' + (here ? '' : ' off') + '"></span>Admin' +
        (here ? ' · ' + here + ' here' : '') +
      '</button>' +
      (locked ? '<button class="cla-pill red" id="claLocked" type="button" title="Visitors see a lock screen on this page">Locked</button>' : '');
    el.querySelector('#claOpen').addEventListener('click', function () { setOpen(!isOpen()); });
    var lk = el.querySelector('#claLocked');
    if (lk) lk.addEventListener('click', function () { tab = 'controls'; setOpen(true); render(); });
  }

  // ── Data ────────────────────────────────────────────────────────
  function load(quiet) {
    if (loading) return;
    loading = true;
    if (!quiet && !stats) body.innerHTML = '<div class="cla-loading">Loading…</div>';
    P.rpc('admin_page_stats', { p_path: pagePath() }).then(function (d) {
      stats = d || {};
      loading = false;
      renderLauncher();
      if (isOpen()) render();
    }).catch(function (err) {
      loading = false;
      if (isOpen()) body.innerHTML = '<div class="cla-empty">Couldn’t load page data: ' + esc(err.message) +
        (/does not exist|schema cache/i.test(err.message) ? '<br><br>Run migration <b>087_site_control.sql</b> in Supabase.' : '') + '</div>';
    });
  }

  // ── Render ──────────────────────────────────────────────────────
  function render() {
    root.querySelectorAll('.cla-tab').forEach(function (b) {
      var on = b.dataset.tab === tab;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    var page = (stats && stats.page) || {};
    root.querySelector('#claTitle').textContent = page.title || document.title || pagePath();
    root.querySelector('#claPath').textContent = pagePath();
    if (!stats) { body.innerHTML = '<div class="cla-loading">Loading…</div>'; return; }
    if (tab === 'people') renderPeople();
    else if (tab === 'controls') renderControls();
    else renderPage();
  }

  function chart(daily) {
    var W = 362, H = 96, pl = 22, pb = 14, pt = 4;
    var vals = (daily || []).map(function (d) { return d.views || 0; });
    var max = Math.max(1, Math.max.apply(null, vals));
    var slot = (W - pl) / Math.max(vals.length, 1);
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Views per day, last 30 days">';
    svg += '<text x="' + (pl - 4) + '" y="' + (pt + 8) + '" text-anchor="end">' + max + '</text>';
    svg += '<text x="' + (pl - 4) + '" y="' + (H - pb) + '" text-anchor="end">0</text>';
    svg += '<line x1="' + pl + '" x2="' + W + '" y1="' + (H - pb + 0.5) + '" y2="' + (H - pb + 0.5) + '" stroke="#e2ddd2"/>';
    (daily || []).forEach(function (d, i) {
      var v = d.views || 0, h = (v / max) * (H - pb - pt);
      var x = pl + i * slot + 1, w = Math.max(1, slot - 2);
      var dt = new Date(d.day + 'T12:00:00Z');
      var we = dt.getUTCDay() === 0 || dt.getUTCDay() === 6;
      var label = dt.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' });
      svg += '<g><title>' + esc(label + ': ' + v + ' views, ' + (d.users || 0) + ' signed-in users') + '</title>' +
        '<rect x="' + (pl + i * slot) + '" y="' + pt + '" width="' + slot + '" height="' + (H - pb - pt) + '" fill="transparent"/>' +
        (v ? '<rect class="b' + (we ? ' we' : '') + '" x="' + x + '" y="' + (H - pb - h) + '" width="' + w + '" height="' + h + '" rx="1.5"/>' : '') + '</g>';
      if (i % 7 === 0) svg += '<text x="' + (x + w / 2) + '" y="' + (H - 2) + '" text-anchor="middle">' + esc(dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })) + '</text>';
    });
    return svg + '</svg>';
  }

  function renderPage() {
    var s = stats, page = s.page || {};
    var html = '';
    if (page.admin_note) html += '<div class="cla-note"><b>Your note</b>' + esc(page.admin_note) + '</div>';
    html += '<div class="cla-sec"><div class="cla-tiles">' +
      tile(s.views_today, 'Today') + tile(s.views_7d, '7 days') + tile(s.views_30d, '30 days') +
      tile(s.users_30d, 'Users 30d') + tile(s.anon_30d, 'Signed-out 30d') +
      tile(s.views_30d ? '#' + s.rank_30d : '—', s.pages_30d ? 'Rank of ' + n(s.pages_30d) : 'Rank') +
      '</div></div>';
    html += '<div class="cla-sec"><div class="cla-h">Views per day · 30 days</div><div class="cla-chart">' + chart(s.daily) + '</div></div>';
    var schools = s.top_schools || [];
    html += '<div class="cla-sec"><div class="cla-h">Top schools · 30 days</div>' + (schools.length
      ? '<div class="cla-list">' + schools.map(function (r) {
          return '<div class="cla-row"><div class="cla-main"><div class="cla-name">' + esc(r.school) + '</div></div><div class="cla-num">' + n(r.users) + ' users · ' + n(r.views) + ' views</div></div>';
        }).join('') + '</div>'
      : '<div class="cla-empty">No signed-in visits from a school yet.</div>') + '</div>';
    html += '<div class="cla-sec cla-foot">' + n(s.views_all) + ' views in total' +
      (page.first_seen ? ' since ' + esc(fmtDate(page.first_seen)) : '') + '. Your own visits aren’t counted.</div>';
    body.innerHTML = html;
  }
  function tile(v, l) {
    return '<div class="cla-tile"><div class="n">' + (typeof v === 'string' ? esc(v) : n(v)) + '</div><div class="l">' + esc(l) + '</div></div>';
  }

  function personRow(u, right) {
    return '<a class="cla-row" href="' + esc(userLink(u)) + '" target="_blank" rel="noopener">' + avatar(u) +
      '<div class="cla-main"><div class="cla-name">' + esc(u.full_name || 'Unnamed') + '</div>' +
      '<div class="cla-sub">' + esc([u.role, u.school].filter(Boolean).join(' · ')) + '</div></div>' +
      '<div class="cla-num">' + right + '</div></a>';
  }

  function renderPeople() {
    var here = stats.here_now || [], top = stats.top_users || [];
    body.innerHTML =
      '<div class="cla-sec"><div class="cla-h">On this page now · last 10 minutes</div>' +
        (here.length ? '<div class="cla-list">' + here.map(function (u) { return personRow(u, esc(rel(u.last_at))); }).join('') + '</div>'
                     : '<div class="cla-empty">Nobody signed in has opened this page in the last 10 minutes.</div>') +
      '</div>' +
      '<div class="cla-sec"><div class="cla-h">Top users · 30 days</div>' +
        (top.length ? '<div class="cla-list">' + top.map(function (u) { return personRow(u, n(u.views) + ' views · ' + n(u.days) + 'd'); }).join('') + '</div>'
                    : '<div class="cla-empty">No signed-in visits in the last 30 days.</div>') +
      '</div>' +
      '<div class="cla-foot">Names open the account in the admin panel. Signed-out visitors are counted but can’t be named.</div>';
  }

  var AUD = { all: 'Everyone', signed_in: 'Signed-in users', anon: 'Signed-out visitors', students: 'Students', teachers: 'Teachers' };
  function bannerStatus(b) {
    if (!b.active) return 'off';
    if (b.expires_at && new Date(b.expires_at) <= new Date()) return 'expired';
    if (b.starts_at && new Date(b.starts_at) > new Date()) return 'scheduled';
    return 'live';
  }

  function renderControls() {
    var page = stats.page || {};
    var pageBanners = stats.banners || [];
    var siteBanners = ((P.state.data && P.state.data.banners) || []).filter(function (b) { return !b.path; });
    var isAdminPage = /^\/version2\/admin(\/|$)/.test(pagePath());

    var html = '';
    // Lock
    html += '<div class="cla-sec"><div class="cla-h">Lock this page</div><div class="cla-card">' +
      (isAdminPage ? '<div class="cla-sub">Admin pages can’t be locked.</div>' :
      '<div class="cla-toggle"><div><div class="t">Locked for visitors</div><div class="s">Everyone except admins sees a “page unavailable” screen.</div></div>' +
        '<label class="cla-sw"><input type="checkbox" id="claLock"' + (page.locked ? ' checked' : '') + ' aria-label="Lock this page"><span></span></label></div>' +
      '<div class="cla-field" style="margin-top:10px;"><label for="claLockMsg">Message shown</label>' +
        '<input class="cla-in" id="claLockMsg" maxlength="500" placeholder="It’s being updated and will be back soon." value="' + esc(page.lock_message || '') + '"></div>' +
      '<div class="cla-btns"><button class="cla-btn pri" id="claLockSave" type="button">Save</button><span class="cla-msg" id="claLockOut"></span></div>') +
      '</div></div>';

    // Note
    html += '<div class="cla-sec"><div class="cla-h">Private note</div><div class="cla-card">' +
      '<div class="cla-field"><textarea class="cla-in" id="claNote" maxlength="4000" placeholder="Only admins see this, at the top of this panel.">' + esc(page.admin_note || '') + '</textarea></div>' +
      '<div class="cla-btns"><button class="cla-btn pri" id="claNoteSave" type="button">Save note</button><span class="cla-msg" id="claNoteOut"></span></div>' +
      '</div></div>';

    // Banners
    var list = pageBanners.map(function (b) { return Object.assign({ scope: 'This page' }, b); })
      .concat(siteBanners.map(function (b) { return Object.assign({ scope: 'Whole site', active: true }, b); }));
    html += '<div class="cla-sec"><div class="cla-h">Banners showing here</div>' +
      (list.length ? list.map(function (b) {
        var stt = bannerStatus(b);
        return '<div class="cla-ban"><div class="m">' + (b.title ? '<b>' + esc(b.title) + '</b> ' : '') + esc(b.content) + '</div>' +
          '<div class="meta"><span class="cla-tag ' + (stt === 'live' ? 'live' : 'off') + '">' + esc(stt) + '</span>' +
            esc(b.scope + ' · ' + (AUD[b.audience] || 'Everyone') + (b.expires_at ? ' · ends ' + fmtDate(b.expires_at) : '')) + '</div>' +
          '<div class="cla-btns">' +
            (b.scope === 'This page'
              ? '<button class="cla-btn" data-ban-toggle="' + esc(b.id) + '" type="button">' + (b.active ? 'Turn off' : 'Turn on') + '</button>'
              : '') +
            '<button class="cla-btn dan" data-ban-del="' + esc(b.id) + '" type="button">Delete</button>' +
          '</div></div>';
      }).join('') : '<div class="cla-empty">No banners on this page.</div>') +
      '</div>';

    // New banner
    html += '<div class="cla-sec"><div class="cla-h">New banner</div><div class="cla-card">' +
      '<div class="cla-field"><label for="claBMsg">Message</label><textarea class="cla-in" id="claBMsg" maxlength="400" placeholder="e.g. The vocab tester is down for maintenance until 4pm."></textarea></div>' +
      '<div class="cla-grid2">' +
        '<div class="cla-field"><label for="claBWhere">Where</label><select class="cla-in" id="claBWhere"><option value="page">This page</option><option value="site">Whole site</option></select></div>' +
        '<div class="cla-field"><label for="claBWho">Who sees it</label><select class="cla-in" id="claBWho">' +
          Object.keys(AUD).map(function (k) { return '<option value="' + k + '">' + AUD[k] + '</option>'; }).join('') + '</select></div>' +
        '<div class="cla-field"><label for="claBType">Style</label><select class="cla-in" id="claBType"><option value="info">Info (blue)</option><option value="warning">Warning (amber)</option><option value="success">Good news (green)</option></select></div>' +
        '<div class="cla-field"><label for="claBEnds">Ends</label><select class="cla-in" id="claBEnds"><option value="">Never</option><option value="1">After 1 day</option><option value="7">After 1 week</option><option value="30">After 1 month</option></select></div>' +
      '</div>' +
      '<div class="cla-grid2">' +
        '<div class="cla-field"><label for="claBLink">Link (optional)</label><input class="cla-in" id="claBLink" placeholder="/version2/… or https://…"></div>' +
        '<div class="cla-field"><label for="claBLinkText">Link text</label><input class="cla-in" id="claBLinkText" placeholder="Find out more"></div>' +
      '</div>' +
      '<div class="cla-btns"><button class="cla-btn pri" id="claBSave" type="button">Publish banner</button><span class="cla-msg" id="claBOut"></span></div>' +
      '</div></div>';

    // View as visitor + links
    html += '<div class="cla-sec"><div class="cla-card"><div class="cla-toggle"><div><div class="t">Visitor view</div><div class="s">See this page, its banners and lock as a signed-out visitor would.</div></div>' +
      '<label class="cla-sw blue"><input type="checkbox" id="claVisitor" aria-label="Visitor view"><span></span></label></div></div></div>';
    html += '<div class="cla-sec cla-links">' +
      '<a href="/version2/admin/pages.html">Pages &amp; controls: all pages, banners and locks →</a>' +
      '<a href="/version2/admin/">Accounts &amp; activity →</a>' +
      '</div>';
    body.innerHTML = html;
    wireControls();
    restoreFlash();
  }

  var flash = {};   // id -> {text, kind, until}: confirmations that survive a re-render
  function say(id, text, kind) {
    flash[id] = { text: text, kind: kind, until: Date.now() + 4000 };
    var el = body.querySelector('#' + id);
    if (el) { el.textContent = text; el.className = 'cla-msg' + (kind ? ' ' + kind : ''); }
  }
  function restoreFlash() {
    Object.keys(flash).forEach(function (id) {
      var f = flash[id];
      if (Date.now() > f.until || f.kind !== 'ok') { delete flash[id]; return; }
      var el = body.querySelector('#' + id);
      if (el) { el.textContent = f.text; el.className = 'cla-msg ok'; }
    });
  }
  function busy(btn, on) { if (btn) btn.disabled = on; }

  // Re-fetch the page state (banners, lock) and this panel's data.
  function afterChange() {
    P.reload();
    loading = false;
    load(true);
  }

  function wireControls() {
    var lockBtn = body.querySelector('#claLockSave');
    if (lockBtn) lockBtn.addEventListener('click', function () {
      var locked = body.querySelector('#claLock').checked;
      busy(lockBtn, true); say('claLockOut', 'Saving…');
      P.rpc('admin_set_page', {
        p_path: pagePath(), p_locked: locked,
        p_lock_message: body.querySelector('#claLockMsg').value,
        p_title: document.title || null
      }).then(function () {
        say('claLockOut', locked ? 'Locked ✓' : 'Unlocked ✓', 'ok');
        afterChange();
      }).catch(function (e) { say('claLockOut', e.message, 'err'); })
        .then(function () { busy(lockBtn, false); });
    });

    var noteBtn = body.querySelector('#claNoteSave');
    noteBtn.addEventListener('click', function () {
      busy(noteBtn, true); say('claNoteOut', 'Saving…');
      P.rpc('admin_set_page', { p_path: pagePath(), p_note: body.querySelector('#claNote').value, p_title: document.title || null })
        .then(function () { say('claNoteOut', 'Saved ✓', 'ok'); afterChange(); })
        .catch(function (e) { say('claNoteOut', e.message, 'err'); })
        .then(function () { busy(noteBtn, false); });
    });

    body.querySelectorAll('[data-ban-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var b = (stats.banners || []).filter(function (x) { return x.id === btn.dataset.banToggle; })[0];
        if (!b) return;
        busy(btn, true);
        P.rpc('admin_save_announcement', {
          p_id: b.id, p_content: b.content, p_title: b.title || '', p_type: b.type, p_path: b.path,
          p_audience: b.audience, p_link_url: b.link_url, p_link_text: b.link_text,
          p_starts_at: b.starts_at, p_expires_at: b.expires_at, p_active: !b.active, p_dismissible: b.dismissible
        }).then(afterChange).catch(function (e) { alert(e.message); busy(btn, false); });
      });
    });
    body.querySelectorAll('[data-ban-del]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!confirm('Delete this banner for everyone?')) return;
        busy(btn, true);
        P.rpc('admin_delete_announcement', { p_id: btn.dataset.banDel })
          .then(afterChange).catch(function (e) { alert(e.message); busy(btn, false); });
      });
    });

    var bSave = body.querySelector('#claBSave');
    bSave.addEventListener('click', function () {
      var msg = body.querySelector('#claBMsg').value.trim();
      if (!msg) { say('claBOut', 'Write a message first.', 'err'); return; }
      var ends = body.querySelector('#claBEnds').value;
      var where = body.querySelector('#claBWhere').value;
      if (where === 'site' && !confirm('Publish this banner on every page of the site?')) return;
      busy(bSave, true); say('claBOut', 'Publishing…');
      P.rpc('admin_save_announcement', {
        p_id: null,
        p_content: msg,
        p_title: '',
        p_type: body.querySelector('#claBType').value,
        p_path: where === 'page' ? pagePath() : null,
        p_audience: body.querySelector('#claBWho').value,
        p_link_url: body.querySelector('#claBLink').value.trim() || null,
        p_link_text: body.querySelector('#claBLinkText').value.trim() || null,
        p_starts_at: null,
        p_expires_at: ends ? new Date(Date.now() + Number(ends) * 86400000).toISOString() : null,
        p_active: true,
        p_dismissible: true
      }).then(function () {
        say('claBOut', 'Published ✓', 'ok');
        afterChange();
      }).catch(function (e) { say('claBOut', e.message, 'err'); busy(bSave, false); });
    });

    body.querySelector('#claVisitor').addEventListener('change', function (e) {
      if (e.target.checked) P.setVisitorView(true);
    });
  }

  // ── Public hooks ─────────────────────────────────────────────────
  window.ClassicaliaAdminMode = {
    refresh: function () { renderLauncher(); if (isOpen() && stats) render(); },
    open: function (t) { if (t) tab = t; setOpen(true); }
  };

  renderLauncher();
  load(true);
  // Open straight away if the link asked for it (…#admin) or it was open on the last page.
  var wantOpen = location.hash === '#admin';
  if (wantOpen) {
    if (P.visitorView()) P.setVisitorView(false);
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  }
  try { if (sessionStorage.getItem(OPEN_KEY) === '1') wantOpen = true; } catch (e) {}
  if (wantOpen && !P.visitorView()) setOpen(true);
})();
