// Shared tracking sidebar for Classicalia v2.
//
// One source of truth for the navy app-shell sidebar across every tracking
// page (teacher classes, student progress, assessment bank, to-do, weekly
// tests, do-now). Drop an <aside> into the page's .app flex container:
//
//   <aside class="sidebar" data-tracking-nav
//          data-role="teacher|student|auto"   // who the nav is for
//          data-active="classes"               // current page key (highlights)
//          data-seed="384"                      // starfield seed (optional)
//          data-context-id="classTabs"          // id for the page's list (opt)
//          data-context-class="class-tabs"      // wrapper class (opt)
//          data-context-label="Classes"         // section heading (opt)
//          data-context-add="btnCreateClass"    // id for a "+" button (opt)
//          data-context-search="classFilter">   // id for a search input (opt)
//   </aside>
//
// The component renders the logo, role-aware primary nav, the optional
// contextual list container (which the page's own JS still fills by id), and
// the account menu. Starfield + account menu are initialised here so order of
// the other <script> tags doesn't matter.

(function () {
  const I = {
    progress: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 4-5"/></svg>',
    todo:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l2 2 4-4"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg>',
    bank:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l2-3h6l2 3h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/></svg>',
    weekly:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h9l5 5v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5M8 13h7M8 17h5"/></svg>',
    classes:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M17 6a3 3 0 0 1 0 6M16 20a6 6 0 0 0-3-5"/></svg>',
    donow:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
    tools:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/></svg>',
    admin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg>'
  };

  const TOOLS = { key: 'tools', label: 'Tools', href: '/version2/tools/', icon: I.tools };
  const ADMIN = { key: 'admin', label: 'Admin', href: '/version2/admin/', icon: I.admin };

  const NAV = {
    student: [
      { key: 'progress', label: 'Progress',        href: '/version2/tracking/dashboard.html',        icon: I.progress },
      { key: 'todo',     label: 'To-do',           href: '/version2/tracking/todo.html',             icon: I.todo },
      { key: 'bank',     label: 'Assessment bank', href: '/version2/tracking/bank.html',             icon: I.bank },
      { key: 'weekly',   label: 'Weekly tests',    href: '/version2/tracking/weekly-test-take.html', icon: I.weekly },
      TOOLS
    ],
    teacher: [
      { key: 'classes',  label: 'Classes',         href: '/version2/tracking/teacher.html',          icon: I.classes },
      { key: 'bank',     label: 'Assessment bank', href: '/version2/tracking/bank.html',             icon: I.bank },
      { key: 'weekly',   label: 'Weekly tests',    href: '/version2/tracking/weekly-test.html',      icon: I.weekly },
      { key: 'donow',    label: 'Do Now',          href: '/version2/tracking/do-now.html',           icon: I.donow },
      TOOLS
    ]
  };

  function primaryHtml(role, active, isAdmin) {
    let items = (NAV[role] || NAV.student).slice();
    if (isAdmin) items = items.concat([ADMIN]);
    return items.map(it =>
      `<a class="tnav-item${it.key === active ? ' active' : ''}" href="${it.href}">${it.icon}<span>${it.label}</span></a>`
    ).join('');
  }

  function build(aside) {
    if (aside.dataset.tnavBuilt) return;
    aside.dataset.tnavBuilt = '1';
    const role     = aside.dataset.role || 'student';
    const active   = aside.dataset.active || '';
    const seed     = parseInt(aside.dataset.seed || '384', 10);
    const ctxId    = aside.dataset.contextId;
    const ctxClass = aside.dataset.contextClass || 'class-tabs';
    const ctxLabel = aside.dataset.contextLabel || '';
    const ctxAdd   = aside.dataset.contextAdd;
    const ctxSrch  = aside.dataset.contextSearch;

    let context = '';
    if (ctxId) {
      context += `<div class="side-section">${ctxLabel}${ctxAdd ? `<button id="${ctxAdd}" type="button" title="Create">+</button>` : ''}</div>`;
      if (ctxSrch) context += `<div class="side-search"><input id="${ctxSrch}" type="text" placeholder="Search…" autocomplete="off"></div>`;
      context += `<nav class="side-context"><div class="${ctxClass}" id="${ctxId}"></div></nav>`;
    } else {
      context = '<div style="flex:1"></div>';
    }

    aside.innerHTML = `
      <canvas class="side-sky"></canvas>
      <a class="side-logo" href="/version2/">Classicalia</a>
      <div class="tnav" data-tnav-primary>${primaryHtml(role === 'auto' ? 'student' : role, active)}</div>
      ${context}`;

    // Starfield: init the canvas ourselves so we don't depend on script order
    // (and so auto-init doesn't double-run it — note: no data-starfield here).
    const canvas = aside.querySelector('.side-sky');
    function sky() {
      if (!window.Starfield || !canvas) return;
      const inst = window.Starfield.create(canvas, { seed: seed, nodeRegion: 0.8 });
      let t;
      window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => inst && inst.resize && inst.resize(), 150); });
    }
    if (window.Starfield) sky();
    else window.addEventListener('DOMContentLoaded', sky);

    // Resolve the signed-in user's role (for "auto" pages like the bank) and
    // admin status, then re-render the primary nav — adding the Admin link for
    // admins. This keeps every working link in the dashboard sidebar.
    applyFlags(aside, role, active);
  }

  async function applyFlags(aside, declaredRole, active) {
    let role = declaredRole === 'auto' ? 'student' : declaredRole;
    let isAdmin = false;
    try {
      const sb = window.supabase;
      if (sb) {
        const { data: { user } } = await sb.auth.getUser();
        if (user) {
          const { data } = await sb.from('users').select('role, is_admin').eq('id', user.id).maybeSingle();
          if (data) {
            if (declaredRole === 'auto') role = data.role === 'teacher' ? 'teacher' : 'student';
            isAdmin = !!data.is_admin;
          }
        }
      }
    } catch (e) { /* leave the base nav as rendered */ }
    if (declaredRole === 'auto' || isAdmin) {
      const slot = aside.querySelector('[data-tnav-primary]');
      if (slot) slot.innerHTML = primaryHtml(role, active, isAdmin);
    }
  }

  function init() { document.querySelectorAll('[data-tracking-nav]').forEach(build); }
  // Run now (when included inline right after the <aside>, this builds the
  // sidebar before the page's own script wires up #classTabs etc.) and again
  // at DOMContentLoaded as a fallback. build() is idempotent.
  init();
  document.addEventListener('DOMContentLoaded', init);

  window.TrackingNav = { init };
})();
