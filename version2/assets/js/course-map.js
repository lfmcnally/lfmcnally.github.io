// Single source of truth for v2 course types.
//
// Each entry: {
//   type:      v2_classes.type value (also the key used in users.tracked_courses)
//   label:     human-readable name shown in tabs and the profile picker
//   vocabList: the vocab_list / bkt-store key in vocab_bkt rows
//   bodyId:    id of the <div> in dashboard.html that renders this course's
//              progress (null = not yet wired, treated as "coming soon")
//   weakSpotsUrl: the tester link that starts a session on the student's
//              weakest and overdue items (used for "Test my weak spots")
// }
//
// "shipped" is derived: a course is shipped iff bodyId is non-null. Adding a
// new course means: ship the body block in dashboard.html, then set bodyId
// here. The profile picker, dashboard tab strip, and teacher dashboard all
// read from the same list.

(function () {
  const V = '/version2/tools/vocab/', Q = '/version2/tools/quiz/';
  const COURSE_TYPES = [
    { type: 'latin-gcse',   label: 'GCSE Latin',                vocabList: 'latin-gcse',        bodyId: 'course-vocab',   weakSpotsUrl: V + 'latinvocabtester.html?list=gcse&auto=1' },
    { type: 'civ-gcse',     label: 'Myth & Religion',           vocabList: 'civ-myth-religion', bodyId: 'course-myth',    weakSpotsUrl: Q + 'myth-and-religion.html?mode=review' },
    { type: 'civ-homeric',  label: 'The Homeric World',         vocabList: 'civ-homeric-world', bodyId: 'course-homeric', weakSpotsUrl: Q + 'the-homeric-world.html?mode=review' },
    { type: 'latin-prep',   label: 'KS3 Latin',                 vocabList: 'latin-suburani',    bodyId: 'course-vocab',   weakSpotsUrl: V + 'latinvocabtester.html?list=suburani&auto=1' },
    { type: 'latin-alevel', label: 'A-Level Latin',             vocabList: 'latin-alevel',      bodyId: 'course-vocab',   weakSpotsUrl: V + 'latinvocabtester.html?list=alevel&auto=1' },
    { type: 'greek-gcse',   label: 'GCSE Greek',                vocabList: 'greek-gcse',        bodyId: 'course-vocab',   weakSpotsUrl: V + 'greekvocabtester.html?auto=1' },
    { type: 'greek-alevel', label: 'A-Level Greek',             vocabList: 'greek-alevel',      bodyId: 'course-vocab',   weakSpotsUrl: V + 'greekvocabtester.html?list=alevel&auto=1' },
    { type: 'civ-alevel',   label: 'A-Level Civ. — The Odyssey', vocabList: 'civ-odyssey',     bodyId: 'course-odyssey', weakSpotsUrl: '/version2/subjects/classical-civilisation/the-odyssey/tester.html?mode=review' }
  ];

  const byType = new Map(COURSE_TYPES.map(c => [c.type, c]));

  function get(type) { return byType.get(type) || null; }
  function isShipped(type) { const c = byType.get(type); return !!(c && c.bodyId); }
  function vocabListFor(type) { const c = byType.get(type); return c ? c.vocabList : null; }
  function labelFor(type) { const c = byType.get(type); return c ? c.label : type; }
  function bodyIdFor(type) { const c = byType.get(type); return c ? c.bodyId : null; }
  // The weak-spots link, narrowed to what the student chose on their progress
  // page in this browser: a chapter range for vocab courses, a topic range
  // for content courses. With no choice saved it tests the whole course.
  function weakSpotsUrlFor(type) {
    const c = byType.get(type);
    if (!c || !c.weakSpotsUrl) return null;
    let url = c.weakSpotsUrl;
    try {
      const scope = JSON.parse(localStorage.getItem('classicalia.scope.' + type) || 'null');
      if (scope && Number.isFinite(scope.from) && Number.isFinite(scope.to)) {
        url += '&from=' + scope.from + '&to=' + scope.to;
      }
      const topics = JSON.parse(localStorage.getItem('classicalia.topicRange.' + type) || 'null');
      if (topics && topics.from) {
        url += '&topic=' + encodeURIComponent(topics.from);
        if (topics.to && topics.to !== topics.from) url += '&to=' + encodeURIComponent(topics.to);
      }
    } catch (_e) { /* storage unavailable: whole course */ }
    return url;
  }

  // Subset that has a wired-up dashboard body block. Used by the profile
  // picker to decide which entries are tickable vs. "coming soon".
  function shipped() { return COURSE_TYPES.filter(c => c.bodyId); }

  // Subset shown on the profile picker as disabled "coming soon" chips.
  // Empty while every catalogued course is shipped — the picker simply
  // renders no chips then, and fills again as new courses are added.
  function comingSoon() { return COURSE_TYPES.filter(c => !c.bodyId); }

  // Back-compat shape for code that previously inlined `SUBJECT_VOCAB_LIST`.
  const SUBJECT_VOCAB_LIST = Object.fromEntries(
    COURSE_TYPES.filter(c => c.vocabList).map(c => [c.type, c.vocabList])
  );

  // ── Course dashboard ──
  // What each course's dashboard (tracking/dashboard.html, drawn by
  // course-dashboard.js) shows besides progress:
  //   spec:     exam board line under the course name
  //   subject:  the public subject page for this course
  //   kind:     'vocab' (word lists by chapter/set) or 'quiz' (Civ question bank)
  //   noun:     what a vocab course's groups are called (Chapter / Set)
  //   doNow:    { url, lists } — the Do Now link and the vocab_list(s) whose
  //             get_my_do_now result says whether one is set right now
  //   practise: the tools offered in the Practise section
  //   revise:   course index pages whose lesson lists make up the Revise section.
  //             Each page is read live, so new lessons show up by themselves.
  const S = '/version2/subjects/', G = '/version2/tools/grammar/';
  const LATIN_GRAMMAR = [
    { title: 'Noun endings', desc: 'Fill in the noun tables until they’re automatic.', href: G + 'noun-endings.html' },
    { title: 'Verb endings', desc: 'Every tense, person and voice.', href: G + 'verb-endings.html' }
  ];
  const PRACTICE_TEST = { title: 'Practice test', desc: 'Build a short test for yourself from any list and have it marked.', href: '/version2/tools/practice-test.html' };
  const quizPractise = (base) => [
    { title: 'Work through in order', desc: 'Go through a topic from the start, adding new questions as you go.', href: base + '?mode=learn' },
    { title: 'Pick a topic', desc: 'Choose the topics and lessons you want to be quizzed on.', href: base }
  ];
  const HUB = {
    'latin-gcse': {
      spec: 'OCR GCSE · J282', subject: S + 'latin/#gcse', kind: 'vocab', noun: 'Chapter',
      doNow: { url: V + 'latinvocabtester.html?mode=donow', lists: ['latin-gcse', 'latin-suburani'] },
      practise: [
        { title: 'Choose your own words', desc: 'Pick chapters, direction and question type yourself.', href: V + 'latinvocabtester.html?list=gcse' },
        ...LATIN_GRAMMAR,
        { title: 'Latin Quest', desc: 'Explore a Roman town and answer the townsfolk’s vocab questions.', href: '/version2/tools/game/latin-quest/' },
        PRACTICE_TEST
      ],
      revise: [
        { index: S + 'latin/literature/gcse/cupid-and-psyche/', title: 'Cupid & Psyche', sub: 'Prose Literature B · Apuleius, Metamorphoses' },
        { index: S + 'latin/literature/gcse/aeneid-2/', title: 'The Wooden Horse & Laocoön', sub: 'Verse Literature B · Virgil, Aeneid II' },
        { index: S + 'latin/literature/gcse/baucis-et-philemon/', title: 'Baucis et Philemon & otium', sub: 'Verse Literature A · Ovid' }
      ]
    },
    'latin-prep': {
      spec: 'KS3 · Suburani', subject: S + 'latin/', kind: 'vocab', noun: 'Chapter',
      doNow: { url: V + 'latinvocabtester.html?mode=donow', lists: ['latin-suburani', 'latin-gcse'] },
      practise: [
        { title: 'Choose your own words', desc: 'Pick chapters, direction and question type yourself.', href: V + 'latinvocabtester.html?list=suburani' },
        ...LATIN_GRAMMAR,
        PRACTICE_TEST
      ],
      revise: []
    },
    'latin-alevel': {
      spec: 'OCR A-Level · H443', subject: S + 'latin/#alevel', kind: 'vocab', noun: 'Set',
      practise: [
        { title: 'Choose your own words', desc: 'Pick sets, direction and question type yourself.', href: V + 'latinvocabtester.html?list=alevel' },
        ...LATIN_GRAMMAR,
        PRACTICE_TEST
      ],
      revise: [
        { index: S + 'latin/literature/alevel/nepos-hannibal/', title: 'Nepos, Life of Hannibal', sub: 'Prose Literature · Group 1' },
        { index: S + 'latin/literature/alevel/aeneid-4/', title: 'Virgil, Aeneid 4', sub: 'Verse Literature · Group 3' }
      ]
    },
    'greek-gcse': {
      spec: 'OCR GCSE · J292', subject: S + 'greek/#gcse', kind: 'vocab', noun: 'Chapter',
      practise: [
        { title: 'Choose your own words', desc: 'Pick chapters, direction and question type yourself.', href: V + 'greekvocabtester.html' },
        PRACTICE_TEST
      ],
      revise: []
    },
    'greek-alevel': {
      spec: 'OCR A-Level · H444', subject: S + 'greek/#alevel', kind: 'vocab', noun: 'Set',
      practise: [
        { title: 'Choose your own words', desc: 'Pick sets, direction and question type yourself.', href: V + 'greekvocabtester.html?list=alevel' },
        PRACTICE_TEST
      ],
      revise: []
    },
    'civ-gcse': {
      spec: 'OCR GCSE · J199/11', subject: S + 'classical-civilisation/myth-and-religion/', kind: 'quiz',
      doNow: { url: Q + 'myth-and-religion.html?mode=donow', lists: ['civ-myth-religion'] },
      practise: quizPractise(Q + 'myth-and-religion.html'),
      revise: [{ index: S + 'classical-civilisation/myth-and-religion/', title: 'Myth and Religion' }]
    },
    'civ-homeric': {
      spec: 'OCR GCSE · J199/21', subject: S + 'classical-civilisation/the-homeric-world/', kind: 'quiz',
      doNow: { url: Q + 'the-homeric-world.html?mode=donow', lists: ['civ-homeric-world'] },
      practise: quizPractise(Q + 'the-homeric-world.html'),
      revise: [{ index: S + 'classical-civilisation/the-homeric-world/', title: 'The Homeric World' }]
    },
    'civ-alevel': {
      spec: 'OCR A-Level · H408', subject: S + 'classical-civilisation/#alevel', kind: 'quiz',
      doNow: { url: S + 'classical-civilisation/the-odyssey/tester.html?mode=donow', lists: ['civ-odyssey'] },
      practise: [
        { title: 'Work through in order', desc: 'Go through a book from the start, adding new questions as you go.', href: S + 'classical-civilisation/the-odyssey/tester.html?mode=learn' },
        { title: 'Explain it', desc: 'Longer “explain” questions to practise developing a point.', href: S + 'classical-civilisation/the-odyssey/tester.html?mode=explain' },
        { title: 'Pick a topic', desc: 'Choose the books and topics you want to be quizzed on.', href: S + 'classical-civilisation/the-odyssey/tester.html' }
      ],
      revise: [
        { index: S + 'classical-civilisation/the-odyssey/', title: 'The Odyssey' },
        { index: S + 'classical-civilisation/greek-art/', title: 'Greek Art' },
        { index: S + 'classical-civilisation/greek-religion/', title: 'Greek Religion' },
        { index: S + 'classical-civilisation/politics-of-the-late-republic/', title: 'Politics of the Late Republic' }
      ]
    }
  };
  function hubFor(type) { return HUB[type] || null; }
  // The student dashboard for a course; tab 'revise' or 'practise' opens
  // that section, anything else the Overview.
  function hubUrl(type, tab) {
    return '/version2/tracking/dashboard.html?course=' + encodeURIComponent(type) +
      (tab === 'revise' || tab === 'practise' ? '#' + tab : '');
  }

  // The courses a signed-in student studies: what they ticked on their
  // profile (users.tracked_courses) plus the type of every class they're in.
  // Same rule the progress page has always used. Signed out → [].
  async function resolveMyCourses(userId) {
    if (!userId || !window.supabase) return [];
    const types = new Set();
    try {
      const { data, error } = await window.supabase.from('users').select('tracked_courses').eq('id', userId).maybeSingle();
      if (!error) ((data && data.tracked_courses) || []).forEach(t => types.add(t));
    } catch (_e) { /* column missing: classes only */ }
    try {
      const { data: rows } = await window.supabase.from('v2_class_members').select('v2_classes(type)').eq('student_id', userId);
      (rows || []).forEach(r => { if (r.v2_classes && r.v2_classes.type) types.add(r.v2_classes.type); });
    } catch (_e) { /* not in a class */ }
    return Array.from(types).filter(t => byType.has(t));
  }
  // First course that has a progress page, else the first course.
  function defaultCourse(types) {
    return (types || []).find(t => isShipped(t)) || (types || [])[0] || null;
  }

  // Copy the student's saved ranges (users.course_ranges) into this browser so
  // weakSpotsUrlFor() uses them, and fall back to "chapter 1 up to where the
  // class has reached" for vocab courses with nothing saved. Returns
  // { [type]: { from, to } | null } for the given types.
  async function loadRanges(userId, types) {
    const out = {};
    if (!userId || !window.supabase) return out;
    let ranges = {}, reached = {};
    try {
      const { data } = await window.supabase.from('users').select('course_ranges').eq('id', userId).maybeSingle();
      ranges = (data && data.course_ranges) || {};
    } catch (_e) { /* column missing */ }
    try {
      const { data: mem } = await window.supabase.from('v2_class_members').select('v2_classes(type, grammar_chapter)').eq('student_id', userId);
      (mem || []).forEach(m => { const c = m.v2_classes; if (c && c.type && c.grammar_chapter > (reached[c.type] || 0)) reached[c.type] = c.grammar_chapter; });
    } catch (_e) { /* no classes */ }
    for (const type of types || []) {
      const hub = HUB[type];
      const key = (hub && hub.kind === 'vocab' ? 'classicalia.scope.' : 'classicalia.topicRange.') + type;
      let r = ranges[type] || null;
      if (r) { try { localStorage.setItem(key, JSON.stringify(r)); } catch (_e) { /* not stored */ } }
      if (!r) { try { r = JSON.parse(localStorage.getItem(key) || 'null'); } catch (_e) { r = null; } }
      if (!r && hub && hub.kind === 'vocab' && reached[type] > 0) {
        r = { from: 1, to: reached[type] };
        try { localStorage.setItem(key, JSON.stringify(r)); } catch (_e) { /* not stored */ }
      }
      out[type] = r;
    }
    return out;
  }
  // "Chapters 1–6", "Set 3", "Your chosen topics" or "The whole course".
  function rangeLabel(type, r) {
    const hub = HUB[type];
    if (!r) return 'The whole course';
    if (hub && hub.kind === 'vocab' && Number.isFinite(r.from) && Number.isFinite(r.to)) {
      return r.from === r.to ? hub.noun + ' ' + r.from : hub.noun + 's ' + r.from + '–' + r.to;
    }
    return 'Your chosen topics';
  }

  // The lesson a student last opened in each course, written by
  // lesson-page.js. Keyed by the course page's path.
  function lastLessons() {
    try { return JSON.parse(localStorage.getItem('classicalia.lastLesson') || '{}') || {}; } catch (_e) { return {}; }
  }

  window.ClassicaliaCourseMap = {
    COURSE_TYPES,
    SUBJECT_VOCAB_LIST,
    get, isShipped, vocabListFor, labelFor, bodyIdFor, weakSpotsUrlFor, shipped, comingSoon,
    hubFor, hubUrl, resolveMyCourses, defaultCourse, loadRanges, rangeLabel, lastLessons
  };
})();
