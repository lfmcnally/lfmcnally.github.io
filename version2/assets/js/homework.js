// Homework runs for Classicalia v2.
//
// A homework link carries ?hw=<assignment id>. The practice page (vocab
// tester or Civ quiz) calls ClassicaliaHomework.load() on boot; when it
// returns an assignment, the page narrows its pool to the assignment's scope,
// calls begin(keys) as the session starts, questionShown() whenever a question
// appears and answer() whenever one is marked. This module then keeps a
// homework_attempts row (timing + counts) and a homework_answers row per
// answer, which the teacher's homework breakdown reads (migration 082).
//
// Prep homework (target_kind 'prep', migration 083) is a bar to fill: every
// item has to be answered correctly `reps` times, a wrong answer knocks it
// back one, and for vocab the last `typed_reps` must be typed. While a prep run
// is going, the page asks pickPrep() which item comes next and mustType()
// whether to ask it by typing. Levels carry over between sittings: load()
// rebuilds them from the student's earlier answers.
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

  // What the student has to do, in words.
  function targetText(a) {
    if (a.target_kind === 'prep') {
      const n = a.reps || 5, t = typedNeeded(a);
      return 'get every ' + (a.scope_kind === 'topic' ? 'question' : 'word') + ' right ' + n + ' times' +
        (t ? ' (' + (t >= n ? 'all' : t) + ' typed)' : '');
    }
    return a.target_pct + '% ' + (a.target_kind === 'secure' ? 'secure' : 'attempted');
  }

  // How many of each item's reps must be typed (vocab only; Civ answers are
  // self-marked, so typing can't be checked). The typed reps are the last ones.
  function typedNeeded(a) {
    const c = courseFor(a.vocab_list);
    if (c && c.civ) return 0;
    const reps = a.reps || 5;
    return Math.min(reps, a.typed_reps == null ? 2 : a.typed_reps);
  }

  // ── prep levels ──
  // Replays answers (oldest first) into a level per item.
  function prepLevels(a, answers, start) {
    const reps = a.reps || 5, typedFrom = reps - typedNeeded(a);
    const lv = new Map(start || []);
    for (const r of answers) {
      const cur = lv.get(r.item_key) || 0;
      if (r.correct) {
        // The last typed_reps only count when typed.
        if (cur >= typedFrom && r.mode !== 'type') continue;
        lv.set(r.item_key, Math.min(reps, cur + 1));
      } else {
        lv.set(r.item_key, Math.max(0, cur - 1));
      }
    }
    return lv;
  }
  function prepPct(a, keys, lv) {
    const reps = a.reps || 5;
    if (!keys.length) return 0;
    let sum = 0;
    for (const k of keys) sum += Math.min(reps, lv.get(k) || 0);
    return Math.floor(sum / (keys.length * reps) * 100);
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

  // Live progress against the target. Prep homework reads the bar saved on the
  // student's latest attempt; the others read their own BKT state.
  async function progress(a) {
    await ensureData(a.vocab_list);
    const items = scopeItems(a);
    if (a.target_kind === 'prep') {
      let pct = 0;
      try {
        const { data } = await window.supabase.from('homework_attempts')
          .select('progress_pct, last_answer_at').eq('assignment_id', a.id)
          .order('last_answer_at', { ascending: false, nullsFirst: false }).limit(1);
        pct = (data && data[0] && data[0].progress_pct) | 0;
      } catch (_) {}
      return { pct, total: items.length, met: pct, done: pct >= 100, label: pct + '% of the bar' };
    }
    if (!items.length) return { pct: 0, total: 0, met: 0, done: false, label: '0/0' };
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
    return { pct, total: items.length, met, done: pct >= a.target_pct, label: met + '/' + items.length };
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
  let levels = new Map();   // prep: item → level, carried over from earlier sittings
  let keys = [];            // prep: the items in this run
  let recent = [];          // prep: last few items asked, to space repeats
  let celebrated = false;

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
      if (data.target_kind === 'prep') {
        const { data: ans } = await window.supabase.from('homework_answers')
          .select('item_key, correct, mode, answered_at')
          .eq('assignment_id', id).eq('student_id', userId)
          .order('answered_at', { ascending: true }).limit(10000);
        levels = prepLevels(data, ans || []);
      }
      return data;
    } catch (_e) { return null; }
  }

  function begin(itemKeys) {
    if (!assignment) return;
    keys = (itemKeys || []).map(String);
    celebrated = isPrep() && prepPct(assignment, keys, levels) >= 100;
    flush();
    attempt = { id: uuid(), started: new Date().toISOString(), answered: 0, correct: 0, activeMs: 0, created: false };
    shownAt = Date.now();
    updateBar();
  }

  function questionShown() { shownAt = Date.now(); }

  function isPrep() { return !!assignment && assignment.target_kind === 'prep'; }
  function level(k) { return levels.get(String(k)) || 0; }

  // Prep: the next item to ask, from `items` (whatever the page uses), keyed
  // by keyOf. Weighted towards the emptiest items, never one of the last few
  // asked while there's a choice. Once the bar is full it keeps practising.
  function pickPrep(items, keyOf) {
    const reps = assignment.reps || 5;
    let pool = items.filter(x => level(keyOf(x)) < reps);
    if (!pool.length) pool = items.slice();
    const gap = Math.min(3, pool.length - 1);
    const spaced = pool.filter(x => !recent.slice(-gap).includes(String(keyOf(x))));
    if (spaced.length) pool = spaced;
    const w = pool.map(x => Math.pow(reps - Math.min(reps, level(keyOf(x))) + 1, 2));
    let r = Math.random() * w.reduce((t, v) => t + v, 0);
    for (let i = 0; i < pool.length; i++) { r -= w[i]; if (r <= 0) return pool[i]; }
    return pool[pool.length - 1];
  }
  // Prep, vocab only: the last typed_reps of each word have to be typed.
  function mustType(k) {
    if (!isPrep()) return false;
    const t = typedNeeded(assignment);
    return t > 0 && level(k) >= (assignment.reps || 5) - t;
  }

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
    if (isPrep()) {
      const k = String(item);
      levels = prepLevels(assignment, [{ item_key: k, correct: !!correct, mode: mode }], levels);
      recent.push(k); if (recent.length > 5) recent.shift();
      updateBar();
    }
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
      const row = {
        id: a.id,
        assignment_id: assignment.id,
        student_id: userId,
        started_at: a.started,
        last_answer_at: new Date().toISOString(),
        answered: a.answered,
        correct: a.correct,
        active_seconds: Math.round(a.activeMs / 1000)
      };
      if (isPrep()) row.progress_pct = prepPct(assignment, keys, levels);
      const { error: aErr } = await window.supabase.from('homework_attempts').upsert(row);
      if (aErr) {
        // A missing table or column won't fix itself; anything else retries.
        if (/does not exist|schema cache|could not find/i.test(aErr.message || '')) disabled = true;
        else pending.unshift(...rows);
        saveStatus(false, aErr.message);
        console.warn('[homework] could not save attempt', aErr);
        return;
      }
      a.created = true;
      if (rows.length) {
        const { error: rErr } = await window.supabase.from('homework_answers').insert(rows);
        if (rErr) { pending.unshift(...rows); saveStatus(false, rErr.message); console.warn('[homework] could not save answers', rErr); return; }
      }
      saveStatus(true);
    } catch (_e) {
      pending.unshift(...rows);
      saveStatus(false, 'no connection');
    } finally {
      writing = false;
      if (pending.length && !flushTimer && !disabled) flushTimer = setTimeout(flush, 4000);
    }
  }

  // A banner for the top of the practice page: what the homework is, whether
  // answers are saving and, for prep homework, the bar to fill.
  function bannerHtml(a) {
    const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const d = dueInfo(a);
    let html = '<strong>Homework</strong> &middot; ' + esc(scopeLabel(a)) +
      ' &middot; ' + esc(targetText(a)) + (a.due_date ? ' &middot; ' + esc(d.text) : '') +
      (a.note ? ' &middot; ' + esc(a.note) : '') +
      ' <span class="hw-save" style="font-size:12px;opacity:.75;"></span>';
    if (a.target_kind === 'prep') {
      html += '<div style="display:flex;align-items:center;gap:10px;margin-top:10px;">' +
        '<div style="flex:1;height:12px;background:rgba(14,30,63,.12);border-radius:7px;overflow:hidden;">' +
        '<div class="hwp-fill" style="height:100%;width:0;background:#1A6FFF;border-radius:7px;transition:width .4s ease;"></div></div>' +
        '<b class="hwp-pct" style="min-width:42px;text-align:right;">0%</b></div>' +
        '<div class="hwp-msg" style="font-size:12px;margin-top:6px;opacity:.8;"></div>';
    }
    return html;
  }

  function updateBar() {
    if (!isPrep()) return;
    const pct = prepPct(assignment, keys, levels);
    const reps = assignment.reps || 5;
    const full = keys.filter(k => level(k) >= reps).length;
    document.querySelectorAll('.hwp-fill').forEach(el => {
      el.style.width = pct + '%';
      el.style.background = pct >= 100 ? '#059669' : '#1A6FFF';
    });
    document.querySelectorAll('.hwp-pct').forEach(el => { el.textContent = pct + '%'; });
    const msg = pct >= 100
      ? 'Homework complete ✓ You’ve filled the bar. You can stop here or keep practising.'
      : full + ' of ' + keys.length + ' done. Each one needs ' + reps + ' correct answers' +
        typedMsg() + '; a wrong answer knocks it back one.';
    document.querySelectorAll('.hwp-msg').forEach(el => { el.textContent = msg; });
    if (pct >= 100 && !celebrated) { celebrated = true; flush(); }
  }
  function typedMsg() {
    const t = typedNeeded(assignment), n = assignment.reps || 5;
    if (!t) return '';
    return t >= n ? ', all typed' : ' (the last ' + (t === 1 ? 'one' : t) + ' typed)';
  }

  function saveStatus(ok, msg) {
    document.querySelectorAll('.hw-save').forEach(el => {
      el.textContent = ok ? '· saved' : '· not saving: ' + (msg || 'error');
      el.style.color = ok ? '' : '#b91c1c';
      el.style.opacity = ok ? '.75' : '1';
    });
  }

  window.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('pagehide', flush);

  window.ClassicaliaHomework = {
    COURSES, courseFor, practiseHref, scopeLabel, dueInfo, restrict, bannerHtml, targetText,
    ensureData, scopeItems, progress, loadMine, prepLevels, prepPct, typedNeeded,
    load, begin, questionShown, answer, flush, isPrep, pickPrep, mustType, level,
    get active() { return assignment; }
  };
})();
