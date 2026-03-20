const topics = [
  {
    id: 0,
    title: 'Introduction: Getting Started',
    stage: 'Introduction',
    units: [
      { title: 'Latin alphabet, pronunciation and word order', detail: 'Video lesson · Introduction' },
      { title: 'Latin in English: derivations and abbreviations', detail: 'Video lesson · Vocabulary' },
    ],
  },
  {
    id: 1,
    title: 'Chapter 1: First Steps',
    stage: 'Stage 1 — Year 9',
    units: [
      { title: 'Unit 1: Verbs', detail: 'Present tense: 1st conjugation, all persons' },
      { title: 'Unit 2: Negatives and conjunctions', detail: 'non, et, sed, quod, igitur, -ne, nec/neque' },
      { title: 'Unit 3: Subjects', detail: 'Nominative singular: 1st declension' },
      { title: 'Unit 4: Objects', detail: 'Accusative singular: 1st declension' },
      { title: 'Passage: The Sailor\'s Wife', detail: 'Domestic life · 1st declension · present tense' },
      { title: 'Unit 5: More than one', detail: 'Nominative and accusative plural: 1st declension' },
      { title: 'Unit 6: Being', detail: 'sum: present tense; est, sunt' },
      { title: 'Passage: A Goddess and a Girl', detail: 'Mythology · dea, ancilla, puella, ira' },
    ],
  },
  {
    id: 2,
    title: 'Chapter 2: Building Sentences',
    stage: 'Stage 1 — Year 9',
    units: [
      { title: 'Unit 7: Prepositions (1)', detail: 'Prepositions with accusative only' },
      { title: 'Unit 8: Numbers', detail: 'Cardinal numerals; unus, duo, tres paradigms' },
      { title: 'Unit 9: Questions and commands', detail: 'Direct questions; imperatives; vocative' },
      { title: 'Passage: Romulus and Remus', detail: 'Roman history · founding of Rome · present tense for drama' },
      { title: 'Unit 10: The past (1)', detail: 'Imperfect tense: 1st conjugation only' },
      { title: 'Unit 11: The past (2)', detail: 'Perfect tense: 1st conjugation; principal parts' },
      { title: 'Passage: The Sabine Women', detail: 'Roman history · past tense now available' },
    ],
  },
  {
    id: 3,
    title: 'Chapter 3: Expanding',
    stage: 'Stage 1 — Year 9',
    units: [
      { title: 'Unit 12: possum and the infinitive', detail: 'possum present; present infinitive' },
      { title: 'Unit 13: Irregular verbs (1)', detail: 'eo, volo, nolo, fero: present tense' },
      { title: 'Unit 14: New nouns (1)', detail: '2nd declension masculine: nom. and acc. sg. and pl.' },
      { title: 'Unit 15: New nouns (2)', detail: 'vir, puer, liber; 2nd declension neuter; neuter rule' },
      { title: 'Passage: A Day in the Forum', detail: 'Roman life · forum, amicus, cibus, vinum, servus' },
      { title: 'Unit 16: New verbs (1)', detail: '2nd conjugation: present, imperfect, perfect' },
      { title: 'Unit 17: New verbs (2)', detail: '3rd and 4th conjugation: present, imperfect, perfect' },
      { title: 'Passage: Cerberus and the Underworld', detail: 'Mythology · periculum, auxilium, consilium, deus' },
    ],
  },
  {
    id: 4,
    title: 'Chapter 4: The Full Case System',
    stage: 'Stage 1 — Year 9',
    units: [
      { title: 'Unit 18: Prepositions (2) and the ablative', detail: 'Ablative sg. and pl.: 1st and 2nd declension' },
      { title: 'Unit 19: The ablative without prepositions', detail: 'Ablative of means, manner, accompaniment' },
      { title: 'Unit 20: Time expressions', detail: 'Accusative for duration; ablative for time when' },
      { title: 'Passage: Horatius at the Bridge', detail: 'Roman history · vir, gladius, arma, periculum' },
      { title: 'Unit 21: Genitive', detail: 'Genitive sg. and pl.: 1st and 2nd declension' },
      { title: 'Unit 22: Dative', detail: 'Dative sg. and pl.: 1st and 2nd declension' },
      { title: 'Passage: Psyche and the Tasks', detail: 'Mythology · dative constructions natural' },
    ],
  },
  {
    id: 5,
    title: 'Chapter 5: Describing',
    stage: 'Stage 1 — Year 9',
    units: [
      { title: 'Unit 23: Adjectives (1)', detail: '1st/2nd declension adjectives; agreement in nom. and acc.' },
      { title: 'Unit 24: Adjectives (2)', detail: 'Full 2-1-2 paradigm: agreement in all cases' },
      { title: 'Passage: The Wooden Horse of Troy', detail: 'Mythology · adjectives make narrative vivid' },
      { title: 'Unit 25: Adverbs', detail: 'Formation from adjectives; irregular adverbs' },
      { title: 'Passage: A Roman Slave\'s Life', detail: 'Roman life · bonus dominus, misera vita, magna spes' },
    ],
  },
  {
    id: 6,
    title: 'Chapter 6: More Tenses',
    stage: 'Stage 2 — Year 10',
    units: [
      { title: 'Unit 26: sum and possum: remaining tenses', detail: 'Imperfect, future, perfect, pluperfect of sum and possum' },
      { title: 'Unit 27: Irregular verbs (2)', detail: 'eo, volo, nolo, fero: all remaining tenses; malo' },
      { title: 'Passage: The Prophecy of Delphi', detail: 'Mythology · future tense for prophecy; pluperfect for backstory' },
      { title: 'Unit 28: The future', detail: 'Future tense: all conjugations' },
      { title: 'Unit 29: The pluperfect', detail: 'Pluperfect tense: all conjugations' },
      { title: 'Passage: Caesar crosses the Rubicon', detail: 'Roman history · future and pluperfect drive the narrative' },
    ],
  },
  {
    id: 7,
    title: 'Chapter 7: Pronouns',
    stage: 'Stage 2 — Year 10',
    units: [
      { title: 'Unit 30: Pronouns (1)', detail: 'ego, tu, nos, vos; is, ea, id; se, suus' },
      { title: 'Unit 31: Pronouns (2)', detail: 'hic, ille, ipse, idem' },
      { title: 'Passage: Dido and Aeneas', detail: 'Mythology · dialogue and pronouns throughout' },
    ],
  },
  {
    id: 8,
    title: 'Chapter 8: The Third Declension',
    stage: 'Stage 2 — Year 10',
    units: [
      { title: 'Unit 32: 3rd declension (1)', detail: 'Nom. and acc. sg. and pl.; consonant stems' },
      { title: 'Unit 33: 3rd declension (2)', detail: 'All cases; i-stems; 3rd declension neuter' },
      { title: 'Passage: Hannibal crosses the Alps', detail: 'Roman history · miles, dux, mons, iter, tempestas' },
      { title: 'Unit 34: 3rd declension (3)', detail: '4th and 5th declension for recognition; domus, dies, res' },
      { title: 'Unit 35: Relative clauses', detail: 'qui, quae, quod; interrogative quis; quidam' },
      { title: 'Passage: Medea and Jason', detail: 'Mythology · amor, mors, ira; relative clauses natural' },
    ],
  },
  {
    id: 9,
    title: 'Chapter 9: Adjectives and Comparison',
    stage: 'Stage 2 — Year 10',
    units: [
      { title: 'Unit 36: Adjectives (2)', detail: '3rd declension adjectives: formation and declension' },
      { title: 'Unit 37: Comparatives', detail: 'Formation; quam + same case; ablative of comparison' },
      { title: 'Unit 38: Superlatives', detail: 'Formation; irregular superlatives; quam + superlative' },
      { title: 'Passage: Alexander the Great', detail: 'History · comparatives and superlatives throughout' },
    ],
  },
  {
    id: 10,
    title: 'Chapter 10: The Passive and Participles',
    stage: 'Stage 2 — Year 10',
    units: [
      { title: 'Unit 39: Passive voice (1)', detail: 'Present and imperfect passive: all conjugations' },
      { title: 'Unit 40: Passive voice (2)', detail: 'Future passive: all conjugations' },
      { title: 'Unit 41: Passive voice (3)', detail: 'Perfect and pluperfect passive; perfect passive participle' },
      { title: 'Passage: The Sack of Carthage', detail: 'Roman history · largely passive voice throughout' },
      { title: 'Unit 42: Participles (1)', detail: 'Present active participle: formation, declension, uses' },
      { title: 'Unit 43: Participles (2)', detail: 'Perfect passive participle; future active participle' },
      { title: 'Unit 44: Ablative absolute (1)', detail: 'Noun/pronoun + perfect passive participle' },
      { title: 'Unit 45: Ablative absolute (2)', detail: 'With present participle; with noun + adjective/noun' },
      { title: 'Passage: Orpheus and Eurydice', detail: 'Mythology · participles and ablative absolute throughout' },
    ],
  },
  {
    id: 11,
    title: 'Chapter 11: Deponents and Indirect Statement',
    stage: 'Stage 3 — Year 11',
    units: [
      { title: 'Unit 46: Deponents', detail: 'Deponent verbs: all tenses; semi-deponents' },
      { title: 'Unit 47: Perfect active participle', detail: 'Formation and uses; deponent perfect active participles' },
      { title: 'Unit 48: Indirect statement (1)', detail: 'Accusative + infinitive; present and perfect infinitive' },
      { title: 'Unit 49: Indirect statement (2)', detail: 'Passive infinitives; future active infinitive; inquit' },
      { title: 'Passage: Cicero and Catiline', detail: 'Roman history · reported speech throughout' },
    ],
  },
  {
    id: 12,
    title: 'Chapter 12: The Subjunctive',
    stage: 'Stage 3 — Year 11',
    units: [
      { title: 'Unit 50: The subjunctive: formation', detail: 'Imperfect and pluperfect subjunctive: all conjugations' },
      { title: 'Unit 51: Purpose clauses', detail: 'ut/ne + imperfect subjunctive; qui + subjunctive' },
      { title: 'Unit 52: Result clauses', detail: 'ut + result; tam, talis, tantus, tot' },
      { title: 'Unit 53: cum clauses', detail: 'Temporal cum + subjunctive; causal cum + subjunctive' },
      { title: 'Passage: Mucius Scaevola', detail: 'Roman history · purpose, result and cum clauses natural' },
    ],
  },
  {
    id: 13,
    title: 'Chapter 13: Further Constructions',
    stage: 'Stage 3 — Year 11',
    units: [
      { title: 'Unit 54: Indirect questions', detail: '-ne, num, nonne' },
      { title: 'Unit 55: Indirect commands', detail: 'iubeo, impero, rogo, hortor, moneo + subjunctive' },
      { title: 'Unit 56: Fear clauses', detail: 'timeo ne/ut; vereor' },
      { title: 'Unit 57: Temporal clauses', detail: 'postquam, ubi, simulac, dum + indicative/subjunctive' },
      { title: 'Unit 58: Concessive and causal clauses', detail: 'quamquam, causal cum, quod, quamvis' },
      { title: 'Unit 59: Conditionals', detail: 'Open + indicative; remote + imperfect/pluperfect subjunctive' },
      { title: 'Unit 60: Gerundive', detail: 'Gerundive of purpose; ad + gerundive; causa + gerundive' },
      { title: 'Passage: The Trial of Socrates', detail: 'History · all further constructions embedded' },
      { title: 'Passage: Boudicca\'s Revolt', detail: 'Roman history · dramatic course finale' },
    ],
  },
  {
    id: 14,
    title: 'Chapter 14: Consolidation',
    stage: 'Stage 3 — Year 11',
    units: [
      { title: 'Unit 61: Pronouns (3)', detail: 'aliquis, quisque, nemo, nihil, nonnulli, alter, alius' },
      { title: 'Unit 62: Prefixes and compound verbs', detail: 'Common prefixes; how they alter meaning' },
      { title: 'Unit 63: Complex sentences', detail: 'Connecting relative; translation strategies; revision' },
      { title: 'Unseen practice passages', detail: 'Exam-style unseens using all grammar and vocabulary' },
    ],
  },
];

const main = document.getElementById('topicList');
const sideNav = document.getElementById('sideTopicNav');

function getStageClass(id) {
  if (id === 0) return 'stage-intro';
  if (id <= 5) return 'stage-1';
  if (id <= 10) return 'stage-2';
  return 'stage-3';
}

topics.forEach((topic, ti) => {
  const card = document.createElement('div');
  card.className = 'topic-card';
  card.id = 'topic' + topic.id;
  const unitCount = topic.units.length;
  const stageClass = getStageClass(topic.id);

  let unitNum = 0;
  const unitsHtml = topic.units.map((u, ui) => {
    const isPassage = u.title.startsWith('Passage:');
    if (!isPassage) unitNum++;
    const numDisplay = isPassage ? '\u{1F4DC}' : unitNum;
    const passageClass = isPassage ? ' passage' : '';
    return `
      <a class="unit-item${passageClass}" href="#" data-topic="${topic.id}" data-unit="${ui + 1}">
        <div class="unit-num">${numDisplay}</div>
        <div class="unit-body">
          <div class="unit-title">${u.title}</div>
          <div class="unit-detail">${u.detail}</div>
        </div>
        <span class="unit-status s-locked">Not started</span>
        <span class="unit-arrow">\u2192</span>
      </a>
    `;
  }).join('');

  card.innerHTML = `
    <div class="topic-head" onclick="toggleTopic(${topic.id})">
      <div class="topic-num">${topic.id}</div>
      <div class="topic-info">
        <div class="topic-title">${topic.title}</div>
        <div class="topic-meta">
          <span class="stage-tag ${stageClass}">${topic.stage}</span>
          <span class="topic-meta-item">${unitCount} units</span>
          <span class="topic-meta-item">~${unitCount * 15} min</span>
        </div>
        <div class="topic-prog">
          <div class="topic-prog-track">
            <div class="topic-prog-fill" style="width:0%"></div>
          </div>
          <span class="topic-prog-label">0 / ${unitCount}</span>
        </div>
      </div>
      <div class="topic-chevron">\u25BE</div>
    </div>
    <div class="topic-body">
      <div class="unit-list">
        ${unitsHtml}
      </div>
    </div>
  `;
  main.appendChild(card);

  const sideItem = document.createElement('a');
  sideItem.className = 'side-topic';
  sideItem.href = '#topic' + topic.id;
  sideItem.innerHTML = `
    <div class="side-topic-num">${topic.id}</div>
    ${topic.title}
  `;
  sideItem.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('topic' + topic.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  sideNav.appendChild(sideItem);
});

function toggleTopic(id) {
  const card = document.getElementById('topic' + id);
  card.classList.toggle('open');
}

function updateSideNav() {
  const cards = document.querySelectorAll('.topic-card');
  const sideLinks = document.querySelectorAll('.side-topic');
  let activeIdx = 0;
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= 200) activeIdx = i;
  });
  sideLinks.forEach((link, i) => {
    link.classList.toggle('st-active', i === activeIdx);
  });
}
window.addEventListener('scroll', updateSideNav, { passive: true });
updateSideNav();
