// Classicalia — shared shell.
//
// One definition of the site header and footer, rendered into
//   <div data-shell="header" data-active="latin|greek|civ|tools|teach"></div>
//   <div data-shell="footer"></div>
// on every page. Signed-out visitors get the links plus Sign in / Get
// started. If a Supabase session is stored in this browser the shell loads
// the client (only then: anonymous visitors pay nothing), reads the profile
// and swaps in "My courses" / "My classes" and an account menu.
//
// Pair with /version2/assets/css/shell.css.

(function () {
  'use strict';

  var WORDMARK = '/version2/assets/images/classicalia-wordmark.png';
  var WORDMARK_NAVY = '/version2/assets/images/classicalia-wordmark-navy.png';
  var NAV = [
    { key: 'latin', label: 'Latin', href: '/version2/subjects/latin/' },
    { key: 'greek', label: 'Greek', href: '/version2/subjects/greek/' },
    { key: 'civ',   label: 'Classical Civilisation', href: '/version2/subjects/classical-civilisation/' },
    { key: 'tools', label: 'Tools', href: '/version2/tools/' },
    { key: 'teach', label: 'For teachers', href: '/version2/#teach' }
  ];
  var FOOT = [
    { label: 'Latin', href: '/version2/subjects/latin/' },
    { label: 'Greek', href: '/version2/subjects/greek/' },
    { label: 'Classical Civilisation', href: '/version2/subjects/classical-civilisation/' },
    { label: 'Tools', href: '/version2/tools/' },
    { label: 'Contact', href: 'mailto:lawrence@classicalia.co.uk' },
    { label: 'Support Classicalia', href: 'https://buymeacoffee.com/lfmcnally', cls: 'cx-support', ext: true }
  ];
  var URLS = {
    signin: '/auth/login.html', register: '/auth/register.html', home: '/version2/',
    dashboard: '/version2/tracking/dashboard.html', teacher: '/version2/tracking/teacher.html',
    profile: '/version2/profile.html', courses: '/version2/profile.html#courses',
    friends: '/version2/friends.html', admin: '/version2/admin/'
  };
  var PROJECT_REF = 'kqdnqaqqhpdryzoqvdac';
  var TOKEN_KEY = 'sb-' + PROJECT_REF + '-auth-token';
  var SUPABASE_CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  var SUPABASE_CLIENT = '/version2/assets/js/supabase-client.js';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function initials(name) {
    return String(name || '?').split(/[\s@.]+/).filter(Boolean).slice(0, 2).map(function (s) { return s[0].toUpperCase(); }).join('') || '?';
  }
  function textOn(hex) {
    var m = /^#([0-9a-fA-F]{6})$/.exec(hex || '');
    if (!m) return '#ffffff';
    var n = parseInt(m[1], 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    var lin = function (c) { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    var L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    return (1.05 / (L + 0.05)) >= ((L + 0.05) / 0.0695) ? '#ffffff' : '#1c2540';
  }

  // ── header ──
  function renderHeader(slot) {
    var active = slot.getAttribute('data-active') || '';
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === active ? ' class="on"' : '') + '>' + n.label + '</a>';
    }).join('');
    var menuLinks = NAV.map(function (n) { return '<a href="' + n.href + '">' + n.label + '</a>'; }).join('');
    slot.innerHTML =
      '<div class="cx-top"><div class="cx-top-inner">' +
        '<a class="cx-logo" href="' + URLS.home + '" aria-label="Classicalia home"><img src="' + WORDMARK + '" alt="Classicalia"></a>' +
        '<nav class="cx-nav" aria-label="Primary">' + links + '</nav>' +
        '<div class="cx-right" data-cx-right>' +
          '<a class="cx-signin" href="' + URLS.signin + '">Sign in</a>' +
          '<a class="cx-start" href="' + URLS.register + '">Get started</a>' +
          '<button class="cx-burger" type="button" aria-expanded="false" aria-controls="cx-menu">Menu</button>' +
        '</div>' +
      '</div>' +
      '<div class="cx-menu" id="cx-menu">' + menuLinks +
        '<a href="' + URLS.signin + '" data-cx-menu-signin>Sign in</a>' +
      '</div></div>';

    var burger = slot.querySelector('.cx-burger'), menu = slot.querySelector('.cx-menu');
    burger.addEventListener('click', function () {
      var open = menu.hasAttribute('data-open');
      if (open) { menu.removeAttribute('data-open'); } else { menu.setAttribute('data-open', ''); }
      burger.setAttribute('aria-expanded', String(!open));
    });
    slot.classList.add('cx-shell-header');
  }

  // ── footer ──
  function renderFooter(slot) {
    var links = FOOT.map(function (f) {
      return '<a href="' + f.href + '"' + (f.cls ? ' class="' + f.cls + '"' : '') + (f.ext ? ' target="_blank" rel="noopener"' : '') + '>' + f.label + '</a>';
    }).join('');
    slot.innerHTML =
      '<footer class="cx-foot"><div class="cx-foot-inner">' +
        '<a href="' + URLS.home + '" aria-label="Classicalia home"><img src="' + WORDMARK_NAVY + '" alt="Classicalia"></a>' +
        '<span>Free for every student. Written by a Classics teacher.</span>' +
        '<nav aria-label="Footer">' + links + '</nav>' +
      '</div></footer>';
  }

  // ── signed-in state ──
  function hasStoredSession() {
    try { return !!localStorage.getItem(TOKEN_KEY); } catch (_) { return false; }
  }
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        if (existing.dataset.cxLoaded || existing.readyState === 'complete') return resolve();
        existing.addEventListener('load', function () { resolve(); });
        existing.addEventListener('error', reject);
        return;
      }
      var s = document.createElement('script');
      s.src = src; s.async = false;
      s.onload = function () { s.dataset.cxLoaded = '1'; resolve(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  function getClient() {
    if (window.supabase && window.supabase.auth) return Promise.resolve(window.supabase);
    if (window.supabaseClient && window.supabaseClient.auth) return Promise.resolve(window.supabaseClient);
    var chain = (window.supabase && window.supabase.createClient) ? Promise.resolve() : loadScript(SUPABASE_CDN);
    return chain.then(function () { return loadScript(SUPABASE_CLIENT); }).then(function () {
      return (window.supabase && window.supabase.auth) ? window.supabase : null;
    });
  }

  function renderAccount(slot, info) {
    var right = slot.querySelector('[data-cx-right]');
    if (!right) return;
    var isTeacher = info.role === 'teacher';
    var name = info.name || info.email || 'Account';
    var style = info.color ? ' style="background:' + esc(info.color) + ';color:' + textOn(info.color) + '"' : '';
    right.innerHTML =
      '<a class="cx-switch" href="' + (isTeacher ? URLS.teacher : URLS.dashboard) + '">' + (isTeacher ? 'My classes' : 'My courses') + ' &#9662;</a>' +
      '<div class="cx-acct">' +
        '<button class="cx-avatar" type="button" aria-haspopup="menu" aria-expanded="false"' + style + '>' + esc(initials(name)) + '</button>' +
        '<div class="cx-pop" role="menu" hidden>' +
          '<div class="cx-pop-head"><div class="cx-pop-name">' + esc(name) + '</div><div class="cx-pop-email">' + esc(info.email || '') + '</div></div>' +
          (isTeacher
            ? '<a href="' + URLS.teacher + '">My classes</a>'
            : '<a href="' + URLS.dashboard + '">My courses</a><a href="' + URLS.courses + '">Choose courses</a><a href="' + URLS.friends + '">Friends</a>') +
          '<a href="' + URLS.profile + '">My profile</a>' +
          (info.isAdmin ? '<a href="' + URLS.admin + '">Admin panel</a>' : '') +
          '<button type="button" class="cx-signout" data-cx-signout>Sign out</button>' +
        '</div>' +
      '</div>' +
      '<button class="cx-burger" type="button" aria-expanded="false" aria-controls="cx-menu">Menu</button>';

    var menuSignin = slot.querySelector('[data-cx-menu-signin]');
    if (menuSignin) {
      menuSignin.textContent = isTeacher ? 'My classes' : 'My courses';
      menuSignin.href = isTeacher ? URLS.teacher : URLS.dashboard;
    }
    var burger = right.querySelector('.cx-burger'), menu = slot.querySelector('.cx-menu');
    burger.addEventListener('click', function () {
      var open = menu.hasAttribute('data-open');
      if (open) { menu.removeAttribute('data-open'); } else { menu.setAttribute('data-open', ''); }
      burger.setAttribute('aria-expanded', String(!open));
    });

    var trigger = right.querySelector('.cx-avatar'), pop = right.querySelector('.cx-pop');
    function close() { pop.hidden = true; trigger.setAttribute('aria-expanded', 'false'); }
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !pop.hidden; if (open) close(); else { pop.hidden = false; trigger.setAttribute('aria-expanded', 'true'); }
    });
    document.addEventListener('click', function (e) { if (!right.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    right.querySelector('[data-cx-signout]').addEventListener('click', function () {
      var b = this; b.disabled = true; b.textContent = 'Signing out…';
      Promise.resolve(info.client.auth.signOut()).catch(function () {}).then(function () { window.location.href = URLS.home; });
    });
  }

  function reflectSession(slot) {
    if (!hasStoredSession() && !(window.supabase && window.supabase.auth)) return;
    getClient().then(function (client) {
      if (!client) return;
      return client.auth.getUser().then(function (res) {
        var user = res && res.data && res.data.user;
        if (!user) return;
        var info = { client: client, email: user.email, name: user.email, role: 'student', isAdmin: false, color: null };
        return client.from('users').select('full_name, role, is_admin, avatar_color').eq('id', user.id).maybeSingle()
          .then(function (r) {
            var p = r && r.data;
            if (p) {
              if (p.full_name) info.name = p.full_name;
              if (p.role) info.role = p.role;
              if (p.is_admin) info.isAdmin = true;
              if (p.avatar_color && /^#[0-9A-Fa-f]{6}$/.test(p.avatar_color)) info.color = p.avatar_color;
            }
          }, function () {})
          .then(function () { renderAccount(slot, info); window.dispatchEvent(new CustomEvent('classicalia:shell-user', { detail: { user: user, role: info.role, isAdmin: info.isAdmin } })); });
      });
    }).catch(function () { /* leave the signed-out header */ });
  }

  function init() {
    var header = document.querySelector('[data-shell="header"]');
    var footer = document.querySelector('[data-shell="footer"]');
    if (header && !header.dataset.cxDone) { header.dataset.cxDone = '1'; renderHeader(header); reflectSession(header); }
    if (footer && !footer.dataset.cxDone) { footer.dataset.cxDone = '1'; renderFooter(footer); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.ClassicaliaShell = { init: init };
})();
