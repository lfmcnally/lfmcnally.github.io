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

  window.ClassicaliaCourseMap = {
    COURSE_TYPES,
    SUBJECT_VOCAB_LIST,
    get, isShipped, vocabListFor, labelFor, bodyIdFor, weakSpotsUrlFor, shipped, comingSoon
  };
})();
