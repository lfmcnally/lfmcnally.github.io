// Homework runs for Classicalia v2.
//
// A homework link carries ?hw=<assignment id>. The practice page (vocab
// tester or Civ quiz) calls ClassicaliaHomework.load() on boot; when it
// returns an assignment, the page narrows its pool to the assignment's scope,
// calls begin() as the session starts, questionShown() whenever a question
// appears and answer() whenever one is marked. This module then keeps a
// homework_attempts row (timing + counts) and a homework_answers row per
// answer, which the teacher's homework breakdown reads (migration 082).
//
// Shared helpers used by the student pages (dashboard, to-do, profile):
//   courseFor(list)       tester/quiz details for a vocab_list
//   practiseHref(a)       deep link that opens the homework straight away
//   scopeLabel(a)         "GCSE Latin · Chapters 3–4 · 12 words"
//   dueInfo(a)            { text, cls } for a due-date pill
(function () {
  const COURSES = {
    'latin-gcse':        { label: 'GCSE Latin',        base: '/version2/tools/vocab/latinvocabtester.html', list: 'gcse',     noun: 'Chapter' },
    'latin-alevel':      { label: 'A-Level Latin',     base: '/version2/tools/vocab/latinvocabtester.html', list: 'alevel',   noun: 'Set' },
    'latin-suburani':    { label: 'Suburani',          base: '/version2/tools/vocab/latinvocabtester.html', list: 'suburani', noun: 'Chapter' },
    'greek-gcse':        { label: 'GCSE Greek',        base: '/version2/tools/vocab/greekvocabtester.html', list: 'gcse',     noun: 'Chapter' },
    'greek-alevel':      { label: 'A-Level Greek',     base: '/version2/tools/vocab/greekvocabtester.html', list: 'alevel',   noun: 'Set' },
    'civ-myth-religion': { label: 'Myth & Religion',   base: '/version2/tools/quiz/myth-and-religion.html', civ: true },
    'civ-homeric-world': { label: 'The Homeric World', base: '/version2/tools/quiz/the-homeric-world.html', civ: true }
  };

  // Time on one question counts towards active time only up to this cap, so
  // a tab left open mid-question doesn't pad the total.
  const ACTIVE_CAP_MS = 90 * 1000;

  function courseFor(list) { return COURSES[list] || null; }

  function practiseHref(a) {
    const c = courseFor(a.vocab_list);
    if (!c) return '#';
    const q = [];
    if (c.civ) q.push('topic=' + encodeURIComponent(a.topic_id));
    else {
      q.push('list=' + c.list);
      if (a.chapter_from != null) q.push('from=' + a.chapter_from, 'to=' + a.chapter_to);
    }
    q.push('hw=' + encodeURIComponent(a.id));
    return c.base + '?' + q.join('&');
  }

  function scopeLabel(a) {
    const c = courseFor(a.vocab_list);
    let s = c ? c.label + ' · ' : '';
    if (a.scope_kind === 'topic') s += 'Topic ' + a.topic_id;
    else {
      const noun = (c && c.noun) || 'Chapter';
      s += a.chapter_to > a.chapter_from ? noun + 's ' + a.chapter_from + '–' + a.chapter_to : noun + ' ' + a.chapter_from;
    }
    if (Array.isArray(a.item_keys) && a.item_keys.length) {
      s += ' · ' + a.item_keys.length + (a.scope_kind === 'topic' ? ' question' : ' word') + (a.item_keys.length === 1 ? '' : 's');
    }
    return s;
  }

  function dueInfo(a) {
    if (!a.due_date) return { text: 'No due date', cls: '' };
    const due = new Date(a.due_date + 'T23:59:59');
    const days = Math.ceil((due - Date.now()) / 86400000);
    const nice = due.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
    if (days < 0) return { text: 'Overdue · ' + nice, cls: 'over' };
    if (days === 0) return { text: 'Due today', cls: 'soon' };
    if (days === 1) return { text: 'Due tomorrow', cls: 'soon' };
    return { text: 'Due ' + nice, cls: days <= 2 ? 'soon' : '' };
  }

  // Narrow a list of items to the assignment's hand-picked selection, if any.
  function restrict(items, keyOf, a) {
    if (!a || !Array.isArray(a.item_keys) || !a.item_keys.length) return items;
    const want = new Set(a.item_keys);
    return items.filter(x => want.has(keyOf(x)));
  }

  // ── scope + progress (student pages) ──
  // Where each list's items live. Vocab data files declare top-level consts,
  // which other scripts can read by name but not through window, hence the
  // typeof guards.
  const V = '/version2/tools/vocab/data/', Q = '/version2/tools/quiz/data/';
  const DATA = {
    'latin-gcse':     { src: [V + 'latin-gcse.js'],   field: 'latin', get: () => (typeof VOCAB_LATIN_GCSE   !== 'undefined' ? VOCAB_LATIN_GCSE   : null) },
    'latin-alevel':   { src: [V + 'latin-alevel.js'], field: 'latin', get: () => (typeof VOCAB_LATIN_ALEVEL !== 'undefined' ? VOCAB_LATIN_ALEVEL : null) },
    'latin-suburani': { src: [V + 'suburani.js'],     field: 'latin', get: () => (typeof VOCAB_SUBURANI     !== 'undefined' ? VOCAB_SUBURANI     : null) },
    'greek-gcse':     { src: [V + 'greek-gcse.js'],   field: 'greek', get: () => (typeof VOCAB_GREEK_GCSE   !== 'undefined' ? VOCAB_GREEK_GCSE   : null) },
    'greek-alevel':   { src: [V + 'greek-alevel.js'], field: 'greek', get: () => (typeof VOCAB_GREEK_ALEVEL !== 'undefined' ? VOCAB_GREEK_ALEVEL : null) },
    'civ-myth-religion': { src: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8'].map(n => Q + 'myth-' + n + '.js'),
                           topics: () => (window.CivQuiz && window.CivQuiz.topics) || null },
    'civ-homeric-world': { src: [Q + 'homeric-1.js'], topics: () => (window.HomericQuiz && window.HomericQuiz.topics) || null }
  };

  function loadScript(src) {
    return new Promise(resolve => {
      const el = document.createElement('script');
      el.src = src; el.onload = el.onerror = () => resolve();
      document.head.appendChild(el);
    });
  }
  // Load the data a list needs, unless the page already has it.
  async function ensureData(list) {
    const d = DATA[list];
    if (!d) return;
    const have = d.topics ? d.topics() : d.get();
    if (have && (!d.topics || have.some(t => t.list === list))) return;
    for (const src of d.src) await loadScript(src);
  }

  // Every item (headword / question id) the assignment covers.
  function scopeItems(a) {
    const d = DATA[a.vocab_list];
    if (!d) return [];
    let items = [];
    if (a.scope_kind === 'topic') {
      for (const t of (d.topics() || [])) {
        if (String(t.id) === String(a.topic_id) && (!t.list || t.list === a.vocab_list)) for (const q of t.questions) items.push(q.id);
      }
    } else {
      const seen = new Set();
      for (const e of (d.get() || [])) {
        const k = e[d.field];
        if (!(e.chapter > 0) || seen.has(k)) continue;
        seen.add(k);
        if (e.chapter >= a.chapter_from && e.chapter <= a.chapter_to) items.push(k);
      }
    }
    return restrict(items, k => k, a);
  }

  // Live progress against the target, from the student's own BKT state.
  async function progress(a) {
    await ensureData(a.vocab_list);
    const items = scopeItems(a);
    if (!items.length) return { pct: 0, total: 0, met: 0, done: false };
    let stored = new Map();
    try { const store = await window.ClassicaliaBKT.open({ vocabList: a.vocab_list }); stored = await store.loadAll(); } catch (_) {}
    let met = 0;
    for (const it of items) {
      const st = stored.get(it);
      if (!st) continue;
      if (a.target_kind === 'secure') { if (st.p_know >= 0.95 && (st.distinct_correct_days | 0) >= 3) met++; }
      else if ((st.trials | 0) > 0) met++;
    }
    const pct = Math.round(met / items.length * 100);
    return { pct, total: items.length, met, done: pct >= a.target_pct };
  }

  // The signed-in student's homework (only classes they're a member of, so a
  // teacher doesn't see the homework they set), each with its progress,
  // soonest due first.
  async function loadMine() {
    if (!window.supabase || !window.supabase.auth) return [];
    try {
      const { data: s } = await window.supabase.auth.getSession();
      const me = s && s.session && s.session.user ? s.session.user.id : null;
      if (!me) return [];
      const { data: mem } = await window.supabase.from('v2_class_members').select('class_id').eq('student_id', me);
      const ids = (mem || []).map(m => m.class_id);
      if (!ids.length) return [];
      const { data, error } = await window.supabase.from('v2_assignments').select('*').in('class_id', ids);
      if (error || !data) return [];
      data.sort((x, y) => (x.due_date || '9999') < (y.due_date || '9999') ? -1 : 1);
      const progs = await Promise.all(data.map(progress));
      return data.map((a, i) => ({ a, p: progs[i] }));
    } catch (_e) { return []; }
  }

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  // ── run state ──
  let assignment = null;
  let userId = null;
  let attempt = null;       // { id, started, answered, correct, activeMs, created }
  let shownAt = 0;
  let pending = [];         // answer rows not yet written
  let flushTimer = null;
  let writing = false;
  let disabled = false;     // tables missing (migration 082 not applied)

  async function load() {
    const id = new URLSearchParams(location.search).get('hw');
    if (!id || !window.supabase || !window.supabase.auth) return null;
    try {
      const { data: s } = await window.supabase.auth.getSession();
      userId = s && s.session && s.session.user ? s.session.user.id : null;
      if (!userId) return null;
      const { data, error } = await window.supabase.from('v2_assignments').select('*').eq('id', id).maybeSingle();
      if (error || !data) return null;
      assignment = data;
      return data;
    } catch (_e) { return null; }
  }

  function begin() {
    if (!assignment) return;
    flush();
    attempt = { id: uuid(), started: new Date().toISOString(), answered: 0, correct: 0, activeMs: 0, created: false };
    shownAt = Date.now();
  }

  function questionShown() { shownAt = Date.now(); }

  // item: headword or question id; response: what the student gave;
  // mode: 'mc' | 'type' | 'self'.
  function answer(item, correct, response, mode) {
    if (!assignment || !attempt || disabled) return;
    const ms = shownAt ? Math.max(0, Date.now() - shownAt) : null;
    attempt.answered++;
    if (correct) attempt.correct++;
    if (ms != null) attempt.activeMs += Math.min(ms, ACTIVE_CAP_MS);
    pending.push({
      attempt_id: attempt.id,
      assignment_id: assignment.id,
      student_id: userId,
      item_key: String(item),
      response: response == null ? null : String(response).slice(0, 500),
      correct: !!correct,
      mode: mode || null,
      ms: ms == null ? null : Math.min(ms, 2147483647),
      answered_at: new Date().toISOString()
    });
    shownAt = 0;
    if (!flushTimer) flushTimer = setTimeout(flush, 2000);
  }

  async function flush() {
    if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
    if (!attempt || !attempt.answered || writing || disabled) return;
    writing = true;
    const a = attempt;
    const rows = pending.splice(0);
    try {
      // The attempt row must exist before its answers (foreign key).
      const { error: aErr } = await window.supabase.from('homework_attempts').upsert({
        id: a.id,
        assignment_id: assignment.id,
        student_id: userId,
        started_at: a.started,
        last_answer_at: new Date().toISOString(),
        answered: a.answered,
        correct: a.correct,
        active_seconds: Math.round(a.activeMs / 1000)
      });
      if (aErr) {
        if (/homework_attempts|does not exist|schema cache/i.test(aErr.message || '')) disabled = true;
        else pending.unshift(...rows);
        return;
      }
      a.created = true;
      if (rows.length) {
        const { error: rErr } = await window.supabase.from('homework_answers').insert(rows);
        if (rErr) pending.unshift(...rows);
      }
    } catch (_e) {
      pending.unshift(...rows);
    } finally {
      writing = false;
      if (pending.length && !flushTimer && !disabled) flushTimer = setTimeout(flush, 4000);
    }
  }

  // A small banner for the top of the practice page.
  function bannerHtml(a) {
    const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const d = dueInfo(a);
    const target = a.target_pct + '% ' + (a.target_kind === 'secure' ? 'secure' : 'attempted');
    return '<strong>Homework</strong> &middot; ' + esc(scopeLabel(a)) +
      ' &middot; target ' + esc(target) + (a.due_date ? ' &middot; ' + esc(d.text) : '') +
      (a.note ? ' &middot; ' + esc(a.note) : '');
  }

  window.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('pagehide', flush);

  window.ClassicaliaHomework = {
    COURSES, courseFor, practiseHref, scopeLabel, dueInfo, restrict, bannerHtml,
    ensureData, scopeItems, progress, loadMine,
    load, begin, questionShown, answer, flush,
    get active() { return assignment; }
  };
})();
