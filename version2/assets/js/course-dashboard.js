// Classicalia — student dashboard sections (tracking/dashboard.html).
//
// The dashboard shows one course at a time, all on one page. This script
// draws everything around the progress views that dashboard.html already
// renders:
//   • the course header and the "on this page" links
//   • Today: the live Do Now and the course's set work (beside the weekly goal)
//   • Revise: the course's lessons, read live from its index pages
//   • Practise: the course's other tools
// #revise and #practise in the address scroll to those sections. Clicking
// another course in the sidebar switches course in place.
//
// dashboard.html calls ClassicaliaCourseDash.setCourse(type) whenever the
// course it shows changes. Needs course-map.js, homework.js and Supabase.
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  let course = null, hub = null, userId = undefined;
  const todayCache = {};     // course type → { doNow, homework }
  const reviseCache = {};    // course type → [{ src, groups }]
  const openTopics = new Set();
  let reviseQuery = '';
  let otherWork = null;      // weekly tests + assessments (not tied to a course)

  const map = () => window.ClassicaliaCourseMap;
  const sb = () => window.supabase;

  // Old links used #revise / #practise; the sections are now on the page.
  function scrollToHash() {
    const h = location.hash.replace('#', '');
    const el = h === 'revise' || h === 'practise' ? $('cd-' + h) : null;
    if (el && !el.classList.contains('hidden')) el.scrollIntoView({ block: 'start' });
  }

  async function me() {
    if (userId !== undefined) return userId;
    try { const { data } = await sb().auth.getUser(); userId = data && data.user ? data.user.id : null; }
    catch (_e) { userId = null; }
    return userId;
  }

  // ── course + section switching ──
  function setCourse(type) {
    if (!map() || !type) return;
    const changed = type !== course;
    course = type;
    hub = map().hubFor(type) || { practise: [], revise: [] };
    if (changed) reviseQuery = '';
    renderHead();
    renderPractise();
    renderRevise();
    if (window.TrackingNav && window.TrackingNav.setActiveCourse) window.TrackingNav.setActiveCourse(type);
    loadToday();
  }

  function renderHead() {
    const head = $('cdHead');
    if (!head) return;
    head.classList.remove('hidden');
    $('cdEyebrow').textContent = hub.spec || '';
    $('cdTitle').textContent = map().labelFor(course);
    const subj = $('cdSubject');
    if (hub.subject) { subj.href = hub.subject; subj.classList.remove('hidden'); } else subj.classList.add('hidden');
    $('cdJump').classList.remove('hidden');
  }

  // Hide "on this page" links to sections this course doesn't have.
  function syncJump() {
    document.querySelectorAll('#cdJump [data-cd-jump]').forEach(a => {
      a.classList.toggle('hidden', $('cd-' + a.dataset.cdJump).classList.contains('hidden'));
    });
  }

  // ── Today: Do Now + set work ──
  async function loadToday() {
    if (!$('cdToday')) return;
    const uid = await me();
    if (!uid) { $('cdDoNow').classList.add('hidden'); $('cdWork').classList.add('hidden'); return; }
    const type = course;
    if (!todayCache[type]) {
      renderToday(null);
      const vocabList = map().vocabListFor(type);
      const HW = window.ClassicaliaHomework;
      const [doNow, homework] = await Promise.all([
        hub.doNow ? loadDoNow(hub.doNow.lists) : Promise.resolve(null),
        HW ? HW.loadMine().then(rows => rows.filter(r => r.a.vocab_list === vocabList)).catch(() => []) : Promise.resolve([])
      ]);
      todayCache[type] = { doNow, homework };
      if (otherWork === null) otherWork = await countOtherWork(uid);
    }
    if (type === course) renderToday(todayCache[type]);
  }

  async function loadDoNow(lists) {
    const found = await Promise.all(lists.map(async list => {
      try { const { data } = await sb().rpc('get_my_do_now', { p_vocab_list: list }); return data && data.ok ? data : null; }
      catch (_e) { return null; }
    }));
    return found.filter(Boolean).sort((a, b) => String(b.updated_at || '').localeCompare(String(a.updated_at || '')))[0] || false;
  }

  async function countOtherWork(uid) {
    try {
      const [wt, cls, asg] = await Promise.all([
        sb().from('weekly_tests').select('id').eq('status', 'open'),
        sb().from('v2_classes').select('id, teacher_id'),
        sb().from('bank_class_assignments').select('class_id').eq('status', 'open')
      ]);
      const mine = new Set((cls.data || []).filter(c => c.teacher_id !== uid).map(c => c.id));
      return (wt.data || []).length + (asg.data || []).filter(a => mine.has(a.class_id)).length;
    } catch (_e) { return 0; }
  }

  function renderToday(data) {
    const doBox = $('cdDoNow'), workBox = $('cdWork');
    doBox.classList.toggle('hidden', !hub.doNow);
    doBox.classList.toggle('live', !!(data && data.doNow));
    if (hub.doNow) {
      if (!data) doBox.innerHTML = '<div class="cd-kicker">Today’s Do Now</div><h2>Checking…</h2>';
      else if (data.doNow) {
        const d = data.doNow;
        doBox.innerHTML = `<div class="cd-kicker">Today’s Do Now</div>
          <h2>Ready to start</h2>
          <p>Set by your teacher${d.class_name ? ' for ' + esc(d.class_name) : ''}${d.topic_id ? ' · ' + esc(d.topic_id) : ''}.</p>
          <div class="cd-actions"><a class="cd-btn" href="${esc(hub.doNow.url)}">Start Do Now &rarr;</a></div>`;
      } else {
        doBox.innerHTML = `<div class="cd-kicker">Today’s Do Now</div>
          <h2>Nothing set yet</h2>
          <p>When your teacher starts one in class, it appears here.</p>
          <div class="cd-actions"><button type="button" class="cd-btn ghost" data-cd-recheck>Check again</button></div>`;
      }
    }
    let work;
    if (!data) work = '<p>Loading…</p>';
    else if (!data.homework.length) work = '<h2>All done</h2><p>Nothing set for this course right now.</p>';
    else {
      const HW = window.ClassicaliaHomework;
      const rows = data.homework.slice().sort((x, y) => (x.p.done === y.p.done ? 0 : x.p.done ? 1 : -1));
      work = '<div class="cd-work">' + rows.map(({ a, p }) => {
        const d = HW.dueInfo(a);
        return `<a class="cd-work-row" href="${esc(HW.practiseHref(a))}">
          <span class="cd-work-main"><span class="cd-work-title">${esc(HW.titleOf(a))}</span>
            <span class="cd-work-meta">${esc(HW.targetText(a))} · ${esc(p.label)}</span>
            <span class="cd-bar"><span style="width:${Math.min(100, p.pct)}%;${p.done ? 'background:#059669' : ''}"></span></span></span>
          <span class="cd-pill ${p.done ? 'done' : (d.cls ? 'soon' : '')}">${p.done ? 'Done' : esc(d.text)}</span></a>`;
      }).join('') + '</div>';
    }
    const other = otherWork ? `<div class="cd-note">Plus ${otherWork} weekly test${otherWork === 1 ? '' : 's'} or assessment${otherWork === 1 ? '' : 's'}. <a href="/version2/tracking/todo.html">See all</a></div>` : '';
    workBox.classList.remove('hidden');
    workBox.innerHTML = `<div class="cd-kicker">Set work <a href="/version2/tracking/todo.html">All set work</a></div>${work}${other}`;
  }

  // ── Practise ──
  // Columns that the tools fill exactly, so the last row has no gap:
  // 2 → 2, 3 → 3, 4 → 4 (2 × 2 on tablets), 6 → 3, 8 → 4.
  function toolColumns(n) {
    if (n <= 4) return n;
    if (n % 3 === 0) return 3;
    if (n % 4 === 0) return 4;
    return 3;
  }

  function renderPractise() {
    const box = $('cd-practise');
    if (!box) return;
    const tools = hub.practise || [];
    box.classList.toggle('hidden', !tools.length);
    box.innerHTML = tools.length ? `<h2 class="cd-section-title" id="cdPractiseTitle">More ways to practise</h2>
      <div class="cd-grid" style="--cd-cols:${toolColumns(tools.length)}">${tools.map(t => `
        <a class="cd-card cd-tool" href="${esc(t.href)}"><h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p>
          <span class="cd-go">Open &rarr;</span></a>`).join('')}</div>` : '';
    syncJump();
  }

  // ── Revise ──
  async function loadRevise(type) {
    const h = map().hubFor(type) || { revise: [] };
    const sources = await Promise.all((h.revise || []).map(async src => {
      try {
        const res = await fetch(src.index, { credentials: 'same-origin' });
        if (!res.ok) return null;
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        return { src, groups: parseIndex(doc, src) };
      } catch (_e) { return null; }
    }));
    reviseCache[type] = sources.filter(Boolean);
    if (type === course) { renderRevise(); scrollToHash(); }
  }

  function parseIndex(doc, src) {
    const base = new URL(src.index, location.origin);
    const lessonFrom = (a) => {
      const href = a.getAttribute('href') || '';
      if (!href || href.startsWith('#')) return null;
      const url = new URL(href, base);
      if (url.origin !== location.origin || !url.pathname.startsWith(base.pathname) || /tester\.html$/.test(url.pathname)) return null;
      const badge = a.querySelector('.type-badge');
      const n = badge && /^\d/.test(badge.textContent.trim()) ? badge.textContent.trim() : '';
      const titleEl = (a.querySelector('.row-title') || a).cloneNode(true);
      titleEl.querySelectorAll('.row-books, .mini-badge').forEach(x => x.remove());
      const title = titleEl.textContent.replace(/\s+/g, ' ').trim();
      const desc = (a.querySelector('.row-desc') || { textContent: '' }).textContent.replace(/\s+/g, ' ').trim();
      return { href: url.pathname + url.search, n, title, desc };
    };
    const groups = [];
    const items = doc.querySelectorAll('.accordion-item');
    if (items.length) {
      items.forEach((item, i) => {
        const lessons = Array.from(item.querySelectorAll('a.resource-row--link')).map(lessonFrom).filter(Boolean);
        if (!lessons.length) return;
        const num = (item.querySelector('.acc-n') || {}).textContent || '';
        const title = ((item.querySelector('.acc-title') || item.querySelector('.accordion-trigger') || {}).textContent || ('Topic ' + (i + 1))).replace(/\s+/g, ' ').trim();
        groups.push({ id: src.index + '#' + i, num: num.trim(), title, lessons });
      });
    } else {
      const lessons = Array.from(doc.querySelectorAll('a.resource-row--link')).map(lessonFrom).filter(Boolean);
      if (lessons.length) groups.push({ id: src.index, num: '', title: src.title, sub: src.sub || '', lessons });
    }
    // Pages that give every topic's page the same name ("Revision Page") are
    // named after their topic instead.
    const count = {};
    groups.forEach(g => g.lessons.forEach(l => { count[l.title] = (count[l.title] || 0) + 1; }));
    groups.forEach(g => g.lessons.forEach(l => {
      if (count[l.title] > 1 && !l.n && g.title && g.title !== l.title) {
        l.title = /revision/i.test(l.title) ? g.title : g.title + ' · ' + l.title;
        if (!l.n) l.n = g.num;
      }
    }));
    return groups;
  }

  function ago(t) {
    const days = Math.floor((Date.now() - t) / 86400000);
    if (days <= 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 7) return days + ' days ago';
    return new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  }

  function renderRevise() {
    const box = $('cd-revise');
    if (!box) return;
    const head = '<h2 class="cd-section-title" id="cdReviseTitle">Revise</h2>';
    box.classList.toggle('hidden', !(hub.revise && hub.revise.length));
    syncJump();
    if (!hub.revise || !hub.revise.length) { box.innerHTML = ''; return; }
    const sources = reviseCache[course];
    if (!sources) {
      box.innerHTML = head + '<p class="cd-empty">Loading lessons…</p>';
      loadRevise(course);
      return;
    }
    const hadFocus = document.activeElement && document.activeElement.id === 'cdSearch';
    const pos = hadFocus ? document.activeElement.selectionStart : null;
    const q = reviseQuery.trim().toLowerCase();
    const last = map().lastLessons();
    const lastHrefs = new Set(Object.values(last).map(l => l.href));
    const carry = hub.revise.map(r => last[new URL(r.index, location.origin).pathname]).filter(Boolean).sort((a, b) => (b.at || 0) - (a.at || 0))[0];
    const total = sources.reduce((n, s) => n + s.groups.reduce((m, g) => m + g.lessons.length, 0), 0);
    const multi = sources.length > 1;

    const body = sources.map(({ src, groups }) => {
      const shown = groups.map(g => ({ g, lessons: q ? g.lessons.filter(l => (l.n + ' ' + l.title + ' ' + l.desc + ' ' + g.title).toLowerCase().includes(q)) : g.lessons }))
        .filter(x => x.lessons.length);
      if (!shown.length) return '';
      const autoOpen = !multi && groups.length === 1;
      const html = shown.map(({ g, lessons }) => {
        const open = q || autoOpen || openTopics.has(g.id);
        return `<div class="cd-topic${open ? ' open' : ''}">
          <button class="cd-topic-head" type="button" data-cd-topic="${esc(g.id)}" aria-expanded="${open ? 'true' : 'false'}">
            ${g.num ? `<span class="cd-topic-num">${esc(g.num)}</span>` : ''}
            <span class="cd-topic-title">${esc(g.title)}<small>${g.sub ? esc(g.sub) + ' · ' : ''}${g.lessons.length} ${g.lessons.length === 1 ? 'page' : 'pages'}</small></span>
            <span class="cd-chev" aria-hidden="true">&rsaquo;</span>
          </button>
          ${open ? `<div class="cd-lessons">${lessons.map(l => `
            <a class="cd-lesson" href="${esc(l.href)}"><span class="cd-lesson-n">${esc(l.n)}</span>
              <span class="cd-lesson-t"><b>${esc(l.title)}</b>${l.desc ? `<span>${esc(l.desc)}</span>` : ''}</span>
              ${lastHrefs.has(l.href) ? '<span class="cd-chip">Last opened</span>' : ''}</a>`).join('')}</div>` : ''}
        </div>`;
      }).join('');
      return multi && groups.length > 1
        ? `<div class="cd-source"><span>${esc(src.title)}</span><a href="${esc(src.index)}">Course page</a></div>${html}`
        : html;
    }).join('');

    box.innerHTML = `${head}
      ${carry && !q ? `<a class="cd-carry" href="${esc(carry.href)}"><span class="cd-work-main"><span class="cd-work-title">Carry on: ${esc((carry.n ? carry.n + ' ' : '') + carry.title)}</span>
        <span class="cd-work-meta">${esc(carry.group || '')}${carry.at ? ' · opened ' + esc(ago(carry.at)) : ''}</span></span><span class="cd-go">Open &rarr;</span></a>` : ''}
      <label for="cdSearch" style="position:absolute;left:-9999px">Search lessons</label>
      <input class="cd-search" id="cdSearch" type="search" autocomplete="off" placeholder="Search ${total} pages, e.g. a name, a book or a line number" value="${esc(reviseQuery)}">
      ${body || `<p class="cd-empty">Nothing matches “${esc(reviseQuery)}”. Try a name, a book or a line number.</p>`}`;
    const input = $('cdSearch');
    input.addEventListener('input', () => { reviseQuery = input.value; renderRevise(); });
    if (hadFocus) { input.focus(); try { input.setSelectionRange(pos, pos); } catch (_e) { /* type=search */ } }
  }

  // ── level columns ──
  // On wide screens the confidence map sits beside a side column. Cap the
  // map at the side column's height (it scrolls inside its card) so the two
  // end level instead of leaving an empty patch under the shorter one.
  function balance() {
    document.querySelectorAll('#cd-overview .track-grid').forEach(grid => {
      const body = grid.querySelector('.wordmap-body');
      const side = grid.querySelector('.track-side');
      if (!body || !side) return;
      body.style.maxHeight = '';
      if (window.innerWidth <= 1100 || !grid.offsetParent) return;
      const card = body.closest('.wordmap-card');
      const chrome = card.offsetHeight - body.offsetHeight;
      // The side column is stretched to the row, so measure its cards.
      const cards = Array.from(side.children).filter(c => c.offsetParent);
      if (!cards.length) return;
      const natural = cards[cards.length - 1].getBoundingClientRect().bottom - cards[0].getBoundingClientRect().top;
      const room = natural - chrome;
      if (body.scrollHeight > room && room > 160) body.style.maxHeight = room + 'px';
    });
  }
  let balanceQueued = false;
  function queueBalance() {
    if (balanceQueued) return;
    balanceQueued = true;
    requestAnimationFrame(() => { balanceQueued = false; balance(); });
  }
  if (window.ResizeObserver) {
    const ro = new ResizeObserver(queueBalance);
    const watch = () => document.querySelectorAll('#cd-overview .track-side, #cd-overview .wordmap').forEach(el => {
      if (!el.dataset.cdWatched) { el.dataset.cdWatched = '1'; ro.observe(el); }
    });
    new MutationObserver(() => { watch(); queueBalance(); }).observe(document.documentElement, { childList: true, subtree: true });
    watch();
  }
  window.addEventListener('resize', queueBalance);

  // ── events ──
  document.addEventListener('click', e => {
    const topic = e.target.closest('[data-cd-topic]');
    if (topic) {
      const id = topic.dataset.cdTopic;
      openTopics.has(id) ? openTopics.delete(id) : openTopics.add(id);
      renderRevise();
      return;
    }
    if (e.target.closest('[data-cd-recheck]')) {
      delete todayCache[course];
      loadToday();
      return;
    }
    // Sidebar course links switch course in place on the dashboard.
    const link = e.target.closest('a.tnav-course');
    if (link && typeof window.showCourseBody === 'function' && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      history.pushState(null, '', map().hubUrl(link.dataset.course));
      window.showCourseBody(link.dataset.course);
      window.scrollTo(0, 0);
    }
  });
  window.addEventListener('hashchange', scrollToHash);
  window.addEventListener('popstate', () => {
    const t = new URLSearchParams(location.search).get('course');
    if (t && t !== course && typeof window.showCourseBody === 'function') window.showCourseBody(t);
  });

  window.ClassicaliaCourseDash = { setCourse };
})();
