// Single source of truth for v2 course types.
//
// Each entry: {
//   type:      v2_classes.type value (also the key used in users.tracked_courses)
//   label:     human-readable name shown in tabs and the profile picker
//   vocabList: the vocab_list / bkt-store key in vocab_bkt rows
//   bodyId:    id of the <div> in dashboard.html that renders this course's
//              progress (null = not yet wired, treated as "coming soon")
// }
//
// "shipped" is derived: a course is shipped iff bodyId is non-null. Adding a
// new course means: ship the body block in dashboard.html, then set bodyId
// here. The profile picker, dashboard tab strip, and teacher dashboard all
// read from the same list.

(function () {
  const COURSE_TYPES = [
    { type: 'latin-gcse',   label: 'GCSE Latin',                vocabList: 'latin-gcse',        bodyId: 'course-vocab' },
    { type: 'civ-gcse',     label: 'Myth & Religion',           vocabList: 'civ-myth-religion', bodyId: 'course-myth'  },
    { type: 'latin-prep',   label: 'KS3 Latin',                 vocabList: 'latin-suburani',    bodyId: 'course-vocab' },
    { type: 'latin-alevel', label: 'A-Level Latin',             vocabList: 'latin-alevel',      bodyId: null },
    { type: 'greek-gcse',   label: 'GCSE Greek',                vocabList: 'greek-gcse',        bodyId: 'course-vocab' },
    { type: 'greek-alevel', label: 'A-Level Greek',             vocabList: 'greek-alevel',      bodyId: null },
    { type: 'civ-alevel',   label: 'A-Level Classical Civ.',    vocabList: null,                bodyId: null }
  ];

  const byType = new Map(COURSE_TYPES.map(c => [c.type, c]));

  function get(type) { return byType.get(type) || null; }
  function isShipped(type) { const c = byType.get(type); return !!(c && c.bodyId); }
  function vocabListFor(type) { const c = byType.get(type); return c ? c.vocabList : null; }
  function labelFor(type) { const c = byType.get(type); return c ? c.label : type; }
  function bodyIdFor(type) { const c = byType.get(type); return c ? c.bodyId : null; }

  // Subset that has a wired-up dashboard body block. Used by the profile
  // picker to decide which entries are tickable vs. "coming soon".
  function shipped() { return COURSE_TYPES.filter(c => c.bodyId); }

  // Subset shown on the profile picker as disabled "coming soon" chips.
  function comingSoon() { return COURSE_TYPES.filter(c => !c.bodyId); }

  // Back-compat shape for code that previously inlined `SUBJECT_VOCAB_LIST`.
  const SUBJECT_VOCAB_LIST = Object.fromEntries(
    COURSE_TYPES.filter(c => c.vocabList).map(c => [c.type, c.vocabList])
  );

  window.ClassicaliaCourseMap = {
    COURSE_TYPES,
    SUBJECT_VOCAB_LIST,
    get, isShipped, vocabListFor, labelFor, bodyIdFor, shipped, comingSoon
  };
})();
