// OCR GCSE Latin — Grammar Gym dataset (chapter-based)
// ----------------------------------------------------------------------------
// Grammar is organised by chapter, mirroring the vocab tester: each chapter
// introduces one or more grammar *points* (e.g. "purpose clauses"), and each
// point is the BKT-tracked unit — it shows up as one square on the chapter's
// mastery map and carries its own confidence. Questions are tagged with the
// point they train; answering one updates that point's confidence.
//
// >>> CHAPTER NUMBERS ARE PROVISIONAL. <<<
// This starter ships Chapter 7 = purpose clauses (per the teacher's example).
// The full chapter→grammar mapping needs confirming before the rest is authored.
//
// Question types:
//   translate  — type an English translation (lenient match + self-mark reveal)
//   parse      — a form + scaffolded dropdowns (tense / mood / person / number)
//   chooseForm — pick the correct word to complete a sentence (single MC)
//   selectAll  — pick every item matching the prompt (multi-select grid)
//   identify   — a full sentence; click the token matching the described role
//   contextMC  — a full sentence + one multiple-choice question about it
//
// Macrons are written in full; the tester strips them before comparing.

const LATIN_GRAMMAR_GCSE = {
  course: 'OCR GCSE Latin (J282)',

  chapters: [
    { n: 7, label: 'Chapter 7' }
  ],

  // The BKT-tracked items. Each belongs to a chapter.
  points: [
    { id: 'ch7-purpose', chapter: 7, label: 'Purpose clauses (ut / nē + subjunctive)' }
  ],

  // Dropdown option sets referenced by parse questions.
  fieldSets: {
    tense:  ['present', 'imperfect', 'future', 'perfect', 'pluperfect'],
    mood:   ['indicative', 'subjunctive', 'imperative'],
    person: ['1st', '2nd', '3rd'],
    number: ['singular', 'plural']
  },

  questions: [
    // ── TRANSLATE (Latin → English) ────────────────────────────────────────
    { type: 'translate', point: 'ch7-purpose', latin: 'servus fūgit ut poenam vītāret.',
      answers: [
        'the slave fled in order to avoid punishment',
        'the slave fled so that he might avoid punishment',
        'the slave fled to avoid punishment',
        'the slave ran away in order to avoid punishment',
        'the slave ran away to avoid punishment'
      ],
      note: 'Past main verb (fūgit) → imperfect subjunctive (vītāret). "ut + subjunctive" = "in order to / so that he might".' },
    { type: 'translate', point: 'ch7-purpose', latin: 'puella vēnit ut mātrem vidēret.',
      answers: [
        'the girl came in order to see her mother',
        'the girl came so that she might see her mother',
        'the girl came to see her mother'
      ],
      note: 'vidēret is imperfect subjunctive after the past main verb vēnit.' },
    { type: 'translate', point: 'ch7-purpose', latin: 'celeriter cucurrit nē caperētur.',
      answers: [
        'he ran quickly in order not to be captured',
        'he ran quickly so that he might not be captured',
        'she ran quickly in order not to be captured',
        'she ran quickly so that she might not be captured'
      ],
      note: 'Negative purpose uses nē, not ut. caperētur is imperfect subjunctive passive.' },
    { type: 'translate', point: 'ch7-purpose', latin: 'labōrat ut pecūniam habeat.',
      answers: [
        'he works in order to have money',
        'he works so that he may have money',
        'she works in order to have money',
        'she works so that she may have money',
        'he works to have money',
        'she works to have money'
      ],
      note: 'Present main verb (labōrat) → present subjunctive (habeat): "so that he may have".' },
    { type: 'translate', point: 'ch7-purpose', latin: 'mīlitēs pugnāvērunt ut urbem servārent.',
      answers: [
        'the soldiers fought in order to save the city',
        'the soldiers fought so that they might save the city',
        'the soldiers fought to save the city'
      ],
      note: 'Plural subject → -rent (3rd person plural imperfect subjunctive).' },
    { type: 'translate', point: 'ch7-purpose', latin: 'fugiunt nē capiantur.',
      answers: [
        'they flee in order not to be captured',
        'they flee so that they may not be captured',
        'they are fleeing in order not to be captured',
        'they run away so that they may not be captured'
      ],
      note: 'Present main verb → present subjunctive (capiantur), passive: "so that they may not be captured".' },

    // ── PARSE the subjunctive verb (scaffolded dropdowns) ──────────────────
    { type: 'parse', point: 'ch7-purpose', prompt: 'Parse the verb of the purpose clause', form: 'vidēret',
      fields: [['tense','imperfect'],['mood','subjunctive'],['person','3rd'],['number','singular']],
      note: 'Imperfect subjunctive active, 3rd singular — used after a past main verb.' },
    { type: 'parse', point: 'ch7-purpose', prompt: 'Parse the verb of the purpose clause', form: 'servārent',
      fields: [['tense','imperfect'],['mood','subjunctive'],['person','3rd'],['number','plural']],
      note: 'Imperfect subjunctive active, 3rd plural (-rent).' },
    { type: 'parse', point: 'ch7-purpose', prompt: 'Parse the verb of the purpose clause', form: 'habeat',
      fields: [['tense','present'],['mood','subjunctive'],['person','3rd'],['number','singular']],
      note: 'Present subjunctive — used when the main verb is present or future.' },

    // ── CHOOSE THE FORM (single MC) ────────────────────────────────────────
    { type: 'chooseForm', point: 'ch7-purpose',
      prompt: 'vēnit ___ rēgem vidēret. (he came in order to see the king)',
      options: ['ut', 'nē', 'cum', 'quod'], answer: 'ut',
      note: 'Positive purpose ("in order to") is introduced by ut.' },
    { type: 'chooseForm', point: 'ch7-purpose',
      prompt: 'tacuit ___ audīrētur. (he was silent so that he would NOT be heard)',
      options: ['nē', 'ut', 'et', 'sī'], answer: 'nē',
      note: 'Negative purpose ("so that... not") is introduced by nē.' },
    { type: 'chooseForm', point: 'ch7-purpose',
      prompt: 'fūgit ut effugere ___. (he fled so that he might escape)',
      options: ['posset', 'poterat', 'potest', 'poterit'], answer: 'posset',
      note: 'A purpose clause needs the SUBJUNCTIVE (posset), not the indicative.' },

    // ── SELECT ALL the purpose clauses ─────────────────────────────────────
    { type: 'selectAll', point: 'ch7-purpose', prompt: 'Select every clause that expresses purpose',
      choices: [
        { text: 'ut rēgem vidēret', correct: true },
        { text: 'ut rēgem vīdit', correct: false },
        { text: 'nē hostēs venīrent', correct: true },
        { text: 'tam fortis ut omnēs superāret', correct: false },
        { text: 'ut urbem caperent', correct: true },
        { text: 'dīcit sē venīre', correct: false }
      ],
      note: 'Purpose = ut/nē + SUBJUNCTIVE. "ut + indicative" (vīdit) = "when/as"; tam...ut = result; acc.+inf. = indirect statement.' },

    // ── IDENTIFY in a sentence (click the token) ───────────────────────────
    { type: 'identify', point: 'ch7-purpose', prompt: 'Click the verb in the subjunctive',
      tokens: ['mīles', 'pugnāvit', 'ut', 'urbem', 'servāret*'],
      note: 'servāret is the imperfect subjunctive — the verb of the purpose clause.' },
    { type: 'identify', point: 'ch7-purpose', prompt: 'Click the word that introduces the purpose clause',
      tokens: ['cucurrit', 'ut*', 'fugeret'],
      note: 'ut introduces the (positive) purpose clause.' },
    { type: 'identify', point: 'ch7-purpose', prompt: 'Click the word that makes this purpose clause negative',
      tokens: ['tacuit', 'nē*', 'audīrētur'],
      note: 'nē = "so that... not" / "in order not to".' },

    // ── CONTEXT MC (a question about the whole sentence) ───────────────────
    { type: 'contextMC', point: 'ch7-purpose', sentence: 'vēnit ut rēgem vidēret.',
      prompt: 'Why is vidēret in the IMPERFECT subjunctive?',
      options: [
        'because the main verb (vēnit) is in a past tense',
        'because the main verb is present',
        'because it is a question',
        'because it is passive'
      ],
      answer: 'because the main verb (vēnit) is in a past tense',
      note: 'Sequence of tenses: a past main verb takes the imperfect subjunctive in the purpose clause.' },
    { type: 'contextMC', point: 'ch7-purpose', sentence: 'tam celeriter cucurrit ut effugeret.',
      prompt: 'What does the ut-clause express here?',
      options: ['result', 'purpose', 'time', 'cause'],
      answer: 'result',
      note: 'Watch out: tam/ita/sīc + ut + subjunctive signals RESULT ("so quickly THAT..."), not purpose.' },
    { type: 'contextMC', point: 'ch7-purpose', sentence: 'puerī tacent ut magistrum audiant.',
      prompt: 'What construction is ut magistrum audiant?',
      options: ['purpose clause', 'result clause', 'indirect statement', 'relative clause'],
      answer: 'purpose clause',
      note: 'ut + subjunctive with no tam/ita signal = purpose: "so that they may hear the teacher".' }
  ]
};

window.LATIN_GRAMMAR_GCSE = LATIN_GRAMMAR_GCSE;
