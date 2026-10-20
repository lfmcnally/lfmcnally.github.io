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
    quick:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    classes:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M17 6a3 3 0 0 1 0 6M16 20a6 6 0 0 0-3-5"/></svg>',
    donow:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
    tools:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/></svg>',
    friends:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="2.4"/><circle cx="16" cy="9" r="2.4"/><path d="M3.5 19a4.5 4.5 0 0 1 9 0M11.5 19a4.5 4.5 0 0 1 9 0"/></svg>',
    course:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    admin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg>'
  };

  const TOOLS = { key: 'tools', label: 'Tools', href: '/version2/tools/', icon: I.tools };
  const ADMIN = { key: 'admin', label: 'Admin', href: '/version2/admin/', icon: I.admin };

  const NAV = {
    // Students get their courses (listed above these, see courseListHtml),
    // work set by a teacher (weekly tests and assigned assessments are listed
    // on To-do) and friends. Each course opens its hub, where progress is one
    // of the tabs.
    student: [
      { key: 'todo',     label: 'Set work',        href: '/version2/tracking/todo.html',             icon: I.todo },
      { key: 'friends',  label: 'Friends',         href: '/version2/friends.html',                   icon: I.friends }
    ],
    // Teachers: their classes, Do Now and the classroom tools. The assessment
    // bank, weekly tests and quick mark pages still work by URL but are kept
    // out of the menu.
    teacher: [
      { key: 'classes',  label: 'Classes',         href: '/version2/tracking/teacher.html',          icon: I.classes },
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

  // ── My courses (students) ──
  // The sidebar lists each course the student studies; each opens that
  // course's hub. The list is filled once the signed-in user is known.
  const COURSE_MAP_SRC = '/version2/assets/js/course-map.js';
  function withCourseMap() {
    if (window.ClassicaliaCourseMap) return Promise.resolve(window.ClassicaliaCourseMap);
    return new Promise(resolve => {
      let tag = document.querySelector('script[src="' + COURSE_MAP_SRC + '"]');
      if (!tag) { tag = document.createElement('script'); tag.src = COURSE_MAP_SRC; document.head.appendChild(tag); }
      tag.addEventListener('load', () => resolve(window.ClassicaliaCourseMap || null));
      tag.addEventListener('error', () => resolve(null));
    });
  }
  let activeCourse = null;
  function courseListHtml(types, map) {
    if (!types.length) {
      return '<div class="tnav-label">My courses</div>' +
        `<a class="tnav-item" href="/version2/tracking/dashboard.html">${I.course}<span>Choose your courses</span></a>`;
    }
    return '<div class="tnav-label">My courses</div>' + types.map(t =>
      `<a class="tnav-item tnav-course${t === activeCourse ? ' active' : ''}" data-course="${t}" href="${map.hubUrl(t)}">${I.course}<span>${map.labelFor(t)}</span></a>`
    ).join('');
  }
  async function fillCourses(aside, userId) {
    const slot = aside.querySelector('[data-tnav-courses]');
    if (!slot || !userId) return;
    const map = await withCourseMap();
    if (!map || !map.resolveMyCourses) return;
    const types = await map.resolveMyCourses(userId);
    if (!activeCourse && aside.dataset.courseActive === 'default') activeCourse = map.defaultCourse(types);
    slot.innerHTML = courseListHtml(types, map);
  }
  // Pages call this once they know which course they're showing.
  function setActiveCourse(type) {
    activeCourse = type;
    document.querySelectorAll('[data-tnav-courses] .tnav-course').forEach(a => a.classList.toggle('active', a.dataset.course === type));
  }

  // The Today / Practise / Revise / Progress strip at the top of a course.
  function courseTabs(el, type, active) {
    const map = window.ClassicaliaCourseMap;
    if (!el || !map || !type) return;
    const tabs = [['today', 'Today'], ['practise', 'Practise'], ['revise', 'Revise'], ['progress', 'Progress']];
    el.className = 'ctabs';
    el.setAttribute('aria-label', 'Course sections');
    el.innerHTML = tabs.map(([k, label]) =>
      `<a class="ctab${k === active ? ' active' : ''}" data-tab="${k}" href="${map.hubUrl(type, k)}"${k === active ? ' aria-current="page"' : ''}>${label}</a>`
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
    const ctxLink  = aside.dataset.contextLink;
    const ctxLinkLabel = aside.dataset.contextLinkLabel || 'Manage';
    if (active === 'course' || active === 'progress') {
      activeCourse = new URLSearchParams(location.search).get('course') || null;
      if (!activeCourse) aside.dataset.courseActive = 'default';
    }

    let context = '';
    if (ctxId) {
      const sideAction = ctxAdd
        ? `<button id="${ctxAdd}" type="button" title="Create">+</button>`
        : (ctxLink ? `<a class="side-section-link" href="${ctxLink}">${ctxLinkLabel}</a>` : '');
      context += `<div class="side-section">${ctxLabel}${sideAction}</div>`;
      if (ctxSrch) context += `<div class="side-search"><input id="${ctxSrch}" type="text" placeholder="Search…" autocomplete="off"></div>`;
      context += `<nav class="side-context"><div class="${ctxClass}" id="${ctxId}"></div></nav>`;
    } else {
      context = '<div style="flex:1"></div>';
    }

    // (New classes are created from the "+" beside the Classes list.)
    const createHtml = '';

    aside.innerHTML = `
      <canvas class="side-sky"></canvas>
      <a class="side-logo" href="/version2/">Classicalia</a>
      ${createHtml}
      ${role === 'teacher' ? '' : '<div class="tnav tnav-courses" data-tnav-courses></div>'}
      <div class="tnav" data-tnav-primary>${primaryHtml(role === 'auto' ? 'student' : role, active)}</div>
      ${context}
      <div class="side-foot"><div data-account-menu></div></div>`;

    // Wire the create popover (close on outside click).
    const cToggle = aside.querySelector('[data-create-toggle]');
    const cPop = aside.querySelector('[data-create-pop]');
    if (cToggle && cPop) {
      cToggle.addEventListener('click', e => { e.stopPropagation(); cPop.hidden = !cPop.hidden; });
      document.addEventListener('click', e => { const w = aside.querySelector('.side-create'); if (w && !w.contains(e.target)) cPop.hidden = true; });
    }

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
    let isAdmin = false, userId = null;
    try {
      const sb = window.supabase;
      if (sb) {
        const { data: { user } } = await sb.auth.getUser();
        if (user) {
          userId = user.id;
          const { data } = await sb.from('users').select('role, is_admin').eq('id', user.id).maybeSingle();
          if (data) {
            if (declaredRole === 'auto') role = data.role === 'teacher' ? 'teacher' : 'student';
            isAdmin = !!data.is_admin;
          }
        }
      }
    } catch (e) { /* leave the base nav as rendered */ }
    const courses = aside.querySelector('[data-tnav-courses]');
    if (courses) {
      if (role === 'teacher') courses.remove();
      else fillCourses(aside, userId);
    }
    if (declaredRole === 'auto' || isAdmin) {
      const slot = aside.querySelector('[data-tnav-primary]');
      if (slot) slot.innerHTML = primaryHtml(role, active, isAdmin);
    }
  }

  // The account menu now lives in the sidebar footer. Remove any stray
  // [data-account-menu] slots left in page top bars so it isn't duplicated,
  // then (re)mount the footer one.
  function consolidateAccount() {
    if (!document.querySelector('[data-tracking-nav]')) return;
    document.querySelectorAll('[data-account-menu]').forEach(slot => {
      if (!slot.closest('[data-tracking-nav]')) slot.remove();
    });
    if (window.AccountMenu) window.AccountMenu.mountAll();
  }

  function init() {
    document.querySelectorAll('[data-tracking-nav]').forEach(build);
    consolidateAccount();
  }
  // Run now (when included inline right after the <aside>, this builds the
  // sidebar before the page's own script wires up #classTabs etc.) and again
  // at DOMContentLoaded as a fallback. build()/consolidate are idempotent.
  init();
  document.addEventListener('DOMContentLoaded', init);

  window.TrackingNav = { init, setActiveCourse, courseTabs };
})();
