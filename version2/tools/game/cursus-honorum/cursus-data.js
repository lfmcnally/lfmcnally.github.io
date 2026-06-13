// ============================================================
// CURSUS HONORUM — the content for "The Senate House" learning tool
// ============================================================
// Accurate to the late Roman Republic (post-Sullan settlement,
// c. 80–50 BC: Lex Villia Annalis + Sulla's reforms). Each office
// is a magistrate you meet in the Curia. Ages are the customary
// MINIMUM ages for a patrician holding office "suo anno".
//
// No DOM dependencies — Node-testable. The engine reads window.CursusData.

const CursusData = (function () {
    'use strict';

    // Toga / appearance presets for the magistrate figures.
    // praetexta = white toga with a purple border (curule magistrates);
    // pura = plain white toga; pulla = dark (mourning/plebeian working);
    // candida = bright whitened toga (candidates); picta = purple+gold.
    const T = {
        pura:      { toga: 0xf0ece0, stripe: 0x9c2f2f, skin: 0xe0b088, hair: 0x3a2a1a },
        praetexta: { toga: 0xf4f0e6, stripe: 0x7a1f2b, border: true, skin: 0xdca87a, hair: 0x4a3526 },
        consul:    { toga: 0xf8f5ec, stripe: 0x7a1f2b, border: true, skin: 0xd9a06b, hair: 0xb8b2a6 },
        censor:    { toga: 0xeae6da, stripe: 0x6e1f1f, border: true, skin: 0xcf9b6a, hair: 0xcfcabb },
        plebs:     { toga: 0xcabfa6, stripe: 0x4a5a3a, skin: 0xc98e5a, hair: 0x2e2018 },
        elder:     { toga: 0xf2eee2, stripe: 0x7a1f2b, border: true, skin: 0xcf9b6a, hair: 0xe6e2d6 },
        dictator:  { toga: 0xe8ddc0, stripe: 0x8a6a1a, border: true, skin: 0xc98e5a, hair: 0x2a2018 },
    };

    // The ladder, in order. `rung` 1..5 are the cursus proper;
    // extras (tribune, censor, dictator) sit beside it.
    const OFFICES = [
        {
            id: 'elder', rung: 0, look: 'elder',
            name: 'Appius the Elder', office: 'Princeps Senatus',
            officeEn: 'Leader of the Senate',
            tag: 'Your guide',
            x: 0, z: 11, ry: Math.PI,
            intro: [
                { t: 'salve, young one! Welcome to the <b>Curia</b> — the Senate House of Rome. I am <b>Appius</b>, <em>princeps senatus</em>, the first man called to speak here. Sixty years I have climbed the ladder of honours; let me show you how it works.' },
                { t: 'Every Roman who seeks power must climb the <b>cursus honorum</b> — the “course of honours.” You cannot leap to the top. You begin at the bottom and rise, office by office, each in its proper year.' },
                { t: 'Three rules govern us all. <b>Annuity</b>: every office lasts but <em>one year</em>. <b>Collegiality</b>: each office is shared by two or more men, so one may check another. And <b>age</b>: you may not stand for an office until you are old enough.' },
                { t: 'Ask me whatever you wish — then go and meet the magistrates around this hall. Begin with the <b>quaestor</b>, by the treasury on your left.' },
                { choice: [
                    { label: 'What are the rungs of the ladder?', say: [
                        { t: 'In order: <b>quaestor</b>, then <b>aedile</b> (or, for a plebeian, <b>tribune</b>), then <b>praetor</b>, and at the summit, <b>consul</b>. Beyond even that lies the <b>censor</b>. Speak to each in turn — they stand around this hall.' },
                    ]},
                    { label: 'What is <em>SPQR</em>?', say: [
                        { t: '<b>Senatus Populusque Romanus</b> — “the Senate and the People of Rome.” The Senate advises; the People, in their assemblies, elect and vote. Together they are Rome. You will see those four letters on every standard and stone.' },
                    ]},
                    { label: 'What does “<em>suo anno</em>” mean?', say: [
                        { t: '“In his own year” — to win each office at the <em>earliest legal age</em>, never failing, never waiting. To do so is the mark of a great man. Cicero managed it. Few others did.' },
                    ]},
                    { label: 'What is a “<em>novus homo</em>”?', say: [
                        { t: 'A “new man” — the first of his family ever to reach the consulship. Most consuls are sons of consuls. To rise from nothing, like Marius or Cicero, is a rare and glorious thing.' },
                    ]},
                    { label: '(Thank him and go explore)', leave: true },
                ], loop: true},
            ],
            done: 'You have met them all — quaestor to censor. You understand the cursus honorum now. Go, and may your own year always be your own.',
        },
        {
            id: 'quaestor', rung: 1, look: 'pura',
            name: 'Gaius', office: 'Quaestor', officeEn: 'Treasury Officer',
            age: 30, number: 20, term: 'one year',
            x: -16, z: -2, ry: 1.4,
            facts: {
                age: 'You must be <b>30</b> years old to stand as quaestor — the first rung. Many serve ten years in the army first.',
                duties: 'I guard the <b>treasury</b> (the <em>aerarium</em>) and keep the accounts — or I serve a general or governor as his paymaster in the provinces.',
                number: 'There are <b>twenty</b> of us, so Rome and her provinces are never without a paymaster.',
                power: 'I hold no <em>imperium</em> — no power to command armies. But holding this office wins me something precious: a <b>seat in the Senate for life</b>.',
                next: 'After my year, I may aim for the <b>aedileship</b> — or, in a few years, leap straight to <b>praetor</b>.',
            },
            intro: [
                { t: 'salve! I am <b>Gaius</b>, <em>quaestor</em> of this year. Mine is the <b>first step</b> of the cursus honorum — the lowest office, but the one that opens every door above.' },
                { t: 'Count the coins, watch the treasury, keep every account honest. Dull work, perhaps — but win this office and I become a <b>senator for life</b>. That is the prize.' },
            ],
        },
        {
            id: 'aedile', rung: 2, look: 'praetexta',
            name: 'Marcus', office: 'Aedilis', officeEn: 'Magistrate of the City',
            age: 36, number: 4, term: 'one year',
            x: -16, z: -16, ry: 1.4,
            facts: {
                age: 'You must be <b>36</b> to stand as aedile. This step is <em>optional</em> — but skip it at your peril.',
                duties: 'I care for the <b>city itself</b>: the streets, the markets, the water, the grain supply — and above all, the great public <b>games</b> (<em>ludi</em>).',
                number: 'We are <b>four</b>: two <em>plebeian</em> aediles and two <em>curule</em> aediles, who sit on the ivory chair.',
                power: 'No imperium here either. My power is <b>popularity</b>. Stage magnificent games and the people will remember your name when you stand for praetor.',
                next: 'The games can ruin a man — I may go bankrupt paying for gladiators and beasts! But if Rome loves me, the <b>praetorship</b> is next.',
            },
            intro: [
                { t: 'salve! <b>Marcus</b>, <em>aedilis</em>. The <b>second rung</b> — though you may skip it if you dare.' },
                { t: 'I keep the city running and I throw the <b>games</b>. A wise man spends a fortune here to buy the people\'s love — for their votes lift you to the praetorship. An expensive friendship, the Roman crowd!' },
            ],
        },
        {
            id: 'tribune', rung: 2, look: 'plebs', side: true,
            name: 'Lucius', office: 'Tribunus Plebis', officeEn: 'Tribune of the Plebs',
            age: null, number: 10, term: 'one year',
            x: 2, z: 15.5, ry: Math.PI,
            facts: {
                age: 'There is no fixed age — but you must be a <b>plebeian</b>. No patrician may ever hold this office. It stands <em>beside</em> the ladder, not on it.',
                duties: 'I protect the common people. I can summon the people\'s assembly and propose laws directly to them.',
                number: 'We are <b>ten</b>, elected by the plebeians. I sit here by the <b>door</b> of the Curia — for a tribune must always be within reach of the people.',
                power: 'My greatest power is the <b>veto</b> (<em>intercessio</em>) — a single word, “<em>veto</em>,” “I forbid,” and I can halt a law, a magistrate, even the Senate itself! And I am <b>sacrosanct</b>: to lay a hand on me is death.',
                next: 'For a plebeian, this office is the great step toward the <b>praetorship</b> and beyond — a path around the patricians\' ladder.',
            },
            intro: [
                { t: 'Psst — over here, by the door. I am <b>Lucius</b>, <em>tribunus plebis</em>. I may not cross the threshold and sit with the senators, so I listen from here.' },
                { t: 'I am not truly on the cursus honorum — I stand <em>beside</em> it. But do not mistake me for weak. With one word — “<em>veto</em>” — I can stop the mightiest consul cold. And no man may touch me and live.' },
            ],
        },
        {
            id: 'praetor', rung: 3, look: 'praetexta', lictors: 6,
            name: 'Quintus', office: 'Praetor', officeEn: 'Judge & Commander',
            age: 39, number: 8, term: 'one year',
            x: 16, z: -16, ry: -1.4,
            facts: {
                age: 'You must be <b>39</b> to stand as praetor — the <b>fourth rung</b>, and the first that truly grants power.',
                duties: 'I am Rome\'s chief <b>judge</b>. The <em>praetor urbanus</em> judges cases between citizens; the <em>praetor peregrinus</em>, cases involving foreigners.',
                number: 'We are <b>eight</b>. When the consuls are away at war, a praetor may govern Rome itself.',
                power: 'At last — <b>imperium!</b> The power to command armies and enforce the law. See my <b>six lictors</b>, each shouldering the <em>fasces</em>? They mark a man who may command.',
                next: 'After my year I may govern a province as <b>propraetor</b> — and then reach for the highest office of all: the <b>consulship</b>.',
            },
            intro: [
                { t: 'salve. <b>Quintus</b>, <em>praetor</em>. Note the six attendants behind me — those are my <b>lictors</b>. They carry the <em>fasces</em>, and they mark me as a man who holds <b>imperium</b>: the right to command.' },
                { t: 'The <b>fourth rung</b>. I sit in judgement over Rome and, in war, I lead her legions. One step now remains above me.' },
            ],
        },
        {
            id: 'consul', rung: 4, look: 'consul', lictors: 12,
            name: 'Aulus', office: 'Consul', officeEn: 'Head of State',
            age: 42, number: 2, term: 'one year',
            x: 0, z: -19, ry: 0,
            onDais: true,
            facts: {
                age: 'You must be <b>42</b> to stand as consul — the <b>summit</b> of the cursus honorum.',
                duties: 'I am the head of the Roman state. I command her greatest armies, preside over this Senate, and propose the most important laws.',
                number: 'There are only <b>two</b> of us, ruling together. Each consul may <b>veto</b> the other — so no one man becomes a king. We loathed kings.',
                power: 'I hold the highest <b>imperium</b>. <b>Twelve lictors</b> walk before me. And the year itself bears our names — Romans say “in the consulship of so-and-so” to mark the date.',
                next: 'There is nothing higher in the ordinary ladder. After my year, I may govern a great province as <b>proconsul</b> — or one day stand for <b>censor</b>, the most honoured office of all.',
            },
            intro: [
                { t: 'You stand before the <b>consul</b>. I am <b>Aulus</b>. Twelve lictors attend me; the year bears my name. I am the <b>summit</b> of the cursus honorum.' },
                { t: 'But mark this well: I do not rule alone. There are <b>two</b> consuls, and my colleague may <em>veto</em> my every act, as I may his. Rome would sooner share power than suffer a king again.' },
            ],
        },
        {
            id: 'censor', rung: 5, look: 'censor',
            name: 'Servius', office: 'Censor', officeEn: 'Guardian of the Census & Morals',
            age: 'ex-consul', number: 2, term: 'eighteen months, every five years',
            x: 16, z: -2, ry: -1.4,
            facts: {
                age: 'There is no age — only an honour. Only a man who has <b>already been consul</b> may be chosen censor. It is the <b>crown of a career</b>.',
                duties: 'Every five years I conduct the <b>census</b> — counting the citizens and ranking them by wealth. I also award the great public contracts.',
                number: 'We are <b>two</b>, elected every five years, and we hold office for only <b>eighteen months</b>.',
                power: 'I hold no imperium and no lictors — yet I am the most <b>feared</b> of all. I guard public morals: I can <b>strike a senator from this very house</b> for disgrace, or demote a citizen. My judgement is the <em>regimen morum</em>.',
                next: 'There is nothing above the censorship. To be chosen censor is to be told: Rome trusts your character above every other man\'s.',
            },
            intro: [
                { t: 'I am <b>Servius</b>, <em>censor</em>. I have already been consul; this office is given only to such men. It is the most honoured of all — the true summit of a Roman life.' },
                { t: 'I carry no lictors, command no army. And yet senators grow pale when I pass. For every five years I count Rome\'s citizens — and I judge her <b>morals</b>. I can cast a man from this Senate with a stroke of my pen.' },
            ],
        },
        {
            id: 'dictator', rung: 6, look: 'dictator', side: true, lictors: 0,
            name: 'the Dictator', office: 'Dictator', officeEn: 'Master in Crisis',
            age: null, number: 1, term: 'six months (maximum)',
            x: -7, z: -20, ry: 0.5,
            shadow: true,
            facts: {
                age: 'No age, no election. In a <b>dire emergency</b>, the Senate asks a consul to name a single man as <b>dictator</b>. I am extraordinary — outside the ladder entirely.',
                duties: 'I am given <b>supreme power</b> to save Rome from disaster — a war, a revolt, a crisis no ordinary magistrate can master.',
                number: 'There is but <b>one</b> dictator, and I name a deputy: the <em>magister equitum</em>, “Master of the Horse.”',
                power: 'My power answers to no veto. <b>Twenty-four lictors</b> attend me — twice the consul\'s. But here is the genius of it: I must <b>lay down my power within six months</b>. Rome trusts a sword only if it is sheathed quickly.',
                next: 'When the crisis passes, I step down — and become an ordinary citizen once more. Those who refused to step down… well. Ask the ghost of Caesar about that.',
            },
            intro: [
                { t: '…You found me. Most do not look in the shadows. I am the <b>dictator</b> — not a rung of the ladder, but a sword drawn only in Rome\'s darkest hour.' },
                { t: 'When disaster looms, the Senate grants <b>one man</b> total power for <b>six months</b> — no veto, no colleague, twenty-four lictors. And then he must give it all back. That last part… is the hard part.' },
            ],
        },
    ];

    // Exhibits — examinable objects that teach concepts, not people.
    const EXHIBITS = [
        {
            id: 'fasces', name: 'The Fasces', x: 3, z: 5.5,
            lines: [
                { who: 'The Fasces', t: 'A bundle of <b>wooden rods</b> tied around an <b>axe</b>, carried on a lictor\'s shoulder.' },
                { who: 'The Fasces', t: 'They are the symbol of <b>imperium</b> — the magistrate\'s power to <em>punish</em> (the rods) and to <em>execute</em> (the axe). The more lictors a man has, the greater his power: a praetor has 6, a consul 12, a dictator 24.' },
            ],
        },
        {
            id: 'ladder', name: 'The Ladder Diagram', x: -3, z: 5.5,
            lines: [
                { who: 'A Marble Tablet', t: 'Carved into the marble, the <b>cursus honorum</b>:' },
                { who: 'A Marble Tablet', t: '① <b>QVAESTOR</b> — age 30 — finance<br>② <b>AEDILIS</b> — age 36 — city &amp; games<br>③ <b>PRAETOR</b> — age 39 — justice &amp; <em>imperium</em><br>④ <b>CONSVL</b> — age 42 — head of state<br>★ <b>CENSOR</b> — ex-consuls only — census &amp; morals' },
                { who: 'A Marble Tablet', t: 'Beside the ladder: the <b>TRIBVNVS PLEBIS</b> (plebeians only, the veto) and, in emergencies, the <b>DICTATOR</b>.' },
            ],
        },
    ];

    return { T, OFFICES, EXHIBITS };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = CursusData;
if (typeof window !== 'undefined') window.CursusData = CursusData;
