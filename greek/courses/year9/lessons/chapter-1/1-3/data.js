// Lesson 1.3: Breathings, Accents & Diphthongs - Data

const lessonData = {
    // Breathing marks data
    breathingMarks: [
        {
            type: 'Smooth Breathing',
            symbol: '᾽',
            description: 'Looks like an apostrophe. You pronounce the vowel normally - no extra sound.',
            examples: [
                { greek: 'ἀγαθός', pronunciation: '[a-ga-THOS]', meaning: 'good' },
                { greek: 'ἄνθρωπος', pronunciation: '[AN-thro-pos]', meaning: 'human, person' },
                { greek: 'εἰρήνη', pronunciation: '[ei-REE-nee]', meaning: 'peace' }
            ]
        },
        {
            type: 'Rough Breathing',
            symbol: '῾',
            description: 'Looks like a backwards apostrophe. Add an \'h\' sound before the vowel.',
            examples: [
                { greek: 'ἡμέρα', pronunciation: '[he-ME-ra]', meaning: 'day' },
                { greek: 'ὁ', pronunciation: '[ho]', meaning: 'the (masculine)' },
                { greek: 'ὑπό', pronunciation: '[hu-PO]', meaning: 'under, by' }
            ]
        }
    ],

    // Special cases
    specialCases: [
        {
            title: 'Rho (ρ) at the beginning of words',
            description: 'The letter ρ (rho) at the beginning of words always has rough breathing, even though it\'s a consonant!',
            examples: [
                { greek: 'ῥήτωρ', pronunciation: '[RHEE-tor]', meaning: 'speaker, orator' },
                { greek: 'ῥυθμός', pronunciation: '[rhuth-MOS]', meaning: 'rhythm' }
            ]
        },
        {
            title: 'Upsilon (υ) at the beginning',
            description: 'Words beginning with υ (upsilon) almost always have rough breathing.',
            examples: [
                { greek: 'ὑπό', pronunciation: '[hu-PO]', meaning: 'under, by' },
                { greek: 'υἱός', pronunciation: '[hui-OS]', meaning: 'son' }
            ]
        }
    ],

    // Accent marks
    accentMarks: [
        {
            type: 'Acute Accent',
            symbol: '´',
            description: 'The most common accent. Shows the stressed syllable with rising pitch.',
            examples: [
                { greek: 'σοφός', pronunciation: '[so-PHOS]', meaning: 'wise' },
                { greek: 'καλός', pronunciation: '[ka-LOS]', meaning: 'good, beautiful' }
            ]
        },
        {
            type: 'Grave Accent',
            symbol: '`',
            description: 'Used instead of acute when the word isn\'t at the end of a sentence.',
            examples: [
                { greek: 'σοφὸς ἀνήρ', pronunciation: '[so-PHOS a-NEER]', meaning: 'wise man' }
            ]
        },
        {
            type: 'Circumflex Accent',
            symbol: '῀',
            description: 'Shows a rising-then-falling pitch on long vowels.',
            examples: [
                { greek: 'σῶμα', pronunciation: '[SO-ma]', meaning: 'body' },
                { greek: 'πῶς', pronunciation: '[pos]', meaning: 'how?' }
            ]
        }
    ],

    // Diphthongs
    diphthongs: [
        { letters: 'αι', sound: '[ai] or [eye]', example: { greek: 'παῖς', meaning: 'child' }},
        { letters: 'ει', sound: '[ei] or [ay]', example: { greek: 'εἰμί', meaning: 'I am' }},
        { letters: 'οι', sound: '[oi] or [oy]', example: { greek: 'οἶκος', meaning: 'house' }},
        { letters: 'υι', sound: '[ui] or [wee]', example: { greek: 'υἱός', meaning: 'son' }},
        { letters: 'αυ', sound: '[au] or [ow]', example: { greek: 'αὐτός', meaning: 'self, same' }},
        { letters: 'ευ', sound: '[eu] or [ew]', example: { greek: 'εὖ', meaning: 'well' }},
        { letters: 'ου', sound: '[ou] or [oo]', example: { greek: 'οὐ', meaning: 'not' }}
    ],

    // Iota subscript info
    iotaSubscript: {
        explanation: 'Sometimes you\'ll see a tiny iota written underneath a vowel: ᾳ, ῃ, ῳ. This is called iota subscript.',
        history: 'In ancient times, these were pronounced as diphthongs (αι, ηι, ωι), but the iota sound was eventually lost.',
        examples: [
            { greek: 'τῇ ἡμέρᾳ', pronunciation: '[tee he-ME-ra]', meaning: 'on the day' },
            { greek: 'τῷ ἀνθρώπῳ', pronunciation: '[to an-THRO-po]', meaning: 'to/for the person' }
        ]
    },

    // Practice words
    practiceWords: [
        { greek: 'ἀρχή', pronunciation: '[ar-KHEE]', meaning: 'beginning, rule', notes: 'Notice the rough breathing on alpha and the accent on the final syllable' },
        { greek: 'εἰρήνη', pronunciation: '[ei-REE-nee]', meaning: 'peace', notes: 'Contains the diphthong ει' },
        { greek: 'οὐρανός', pronunciation: '[ou-ra-NOS]', meaning: 'heaven, sky', notes: 'Starts with the diphthong ου' },
        { greek: 'ὁ παῖς', pronunciation: '[ho PAIS]', meaning: 'the child', notes: 'Rough breathing on the article, diphthong αι in παῖς' },
        { greek: 'εὐδαιμονία', pronunciation: '[eu-dai-mo-NEE-a]', meaning: 'happiness', notes: 'Contains two diphthongs: ευ and αι' },
        { greek: 'ῥήτωρ', pronunciation: '[RHEE-tor]', meaning: 'speaker', notes: 'Rho with rough breathing at the beginning' }
    ],

    // Progress checklist
    progressChecklist: [
        { id: 'breathing-marks', text: 'Understand breathing marks', checked: false },
        { id: 'special-cases', text: 'Learn special cases (rho, upsilon)', checked: false },
        { id: 'accent-marks', text: 'Recognize accent marks', checked: false },
        { id: 'diphthongs', text: 'Master the 7 main diphthongs', checked: false },
        { id: 'iota-subscript', text: 'Understand iota subscript', checked: false },
        { id: 'practice-reading', text: 'Read practice words correctly', checked: false }
    ],

    // Quick reference
    quickReference: `
        <p><strong>Breathings:</strong> ᾽ = smooth (no h), ῾ = rough (add h)</p>
        <p><strong>Accents:</strong> ´ = acute, \` = grave, ῀ = circumflex</p>
        <p><strong>Diphthongs:</strong> αι, ει, οι, υι, αυ, ευ, ου</p>
        <p><strong>Remember:</strong> When in doubt, look for the breathing mark on vowels and stress the accented syllable.</p>
    `,

    // Study tips
    studyTips: `
        <ul>
            <li>🗣️ Practice breathing marks by putting your hand in front of your mouth - you should feel air with rough breathing</li>
            <li>🎵 Don't worry about pitch accent yet - just stress the syllable with the accent mark</li>
            <li>🔤 Diphthongs are your friends - they're actually easier than pronouncing two separate vowels</li>
            <li>👁️ Train your eye to spot breathing marks immediately - they're crucial for correct pronunciation</li>
            <li>📚 The most common diphthongs are ου [oo] and αι [eye] - master these first</li>
        </ul>
    `,

    // Summary points
    summaryPoints: [
        'Breathing marks: Every word starting with a vowel needs one',
        'Smooth ( ᾽ ): No extra sound',
        'Rough ( ῾ ): Add \'h\' sound',
        'Accents: Show which syllable to stress',
        'Diphthongs: Two vowels = one sound',
        'Common diphthongs: αι [ai], ει [ei], οι [oi], ου [ou], αυ [au], ευ [eu]',
        'Iota subscript: Ignore the tiny iota underneath'
    ]
};

// Function to load all lesson data
function loadLessonData() {
    loadBreathingMarks();
    loadSpecialCases();
    loadAccentMarks();
    loadDiphthongs();
    loadIotaContent();
    loadPracticeWords();
    loadProgressChecklist();
    loadQuickReference();
    loadStudyTips();
    loadSummary();
}

// Load breathing marks
function loadBreathingMarks() {
    const grid = document.getElementById('breathing-grid');
    if (grid) {
        grid.innerHTML = lessonData.breathingMarks.map(breathing => `
            <div class="breathing-card">
                <h4>${breathing.type} ( ${breathing.symbol} )</h4>
                <p>${breathing.description}</p>
                <div class="examples-list">
                    ${breathing.examples.map(ex => `
                        <div class="example-word">
                            <span class="greek-text">${ex.greek}</span>
                            <span class="pronunciation">${ex.pronunciation}</span>
                            <span class="meaning">${ex.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Load special cases
function loadSpecialCases() {
    const grid = document.getElementById('special-cases-grid');
    if (grid) {
        grid.innerHTML = lessonData.specialCases.map(caseItem => `
            <div class="special-card">
                <h4>${caseItem.title}</h4>
                <p>${caseItem.description}</p>
                <div class="examples-list">
                    ${caseItem.examples.map(ex => `
                        <div class="example-word">
                            <span class="greek-text">${ex.greek}</span>
                            <span class="pronunciation">${ex.pronunciation}</span>
                            <span class="meaning">${ex.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Load accent marks
function loadAccentMarks() {
    const grid = document.getElementById('accent-grid');
    if (grid) {
        grid.innerHTML = lessonData.accentMarks.map(accent => `
            <div class="accent-card">
                <h4>${accent.type} ( ${accent.symbol} )</h4>
                <p>${accent.description}</p>
                <div class="examples-list">
                    ${accent.examples.map(ex => `
                        <div class="example-word">
                            <span class="greek-text">${ex.greek}</span>
                            <span class="pronunciation">${ex.pronunciation}</span>
                            <span class="meaning">${ex.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Load diphthongs
function loadDiphthongs() {
    const grid = document.getElementById('diphthong-grid');
    if (grid) {
        grid.innerHTML = lessonData.diphthongs.map(diph => `
            <div class="diphthong-card">
                <div class="diphthong-letters">${diph.letters}</div>
                <div class="diphthong-sound">${diph.sound}</div>
                <div class="diphthong-example">
                    <span class="greek-text">${diph.example.greek}</span> = <span class="meaning">${diph.example.meaning}</span>
                </div>
            </div>
        `).join('');
    }
}

// Load iota subscript content
function loadIotaContent() {
    const content = document.getElementById('iota-content');
    if (content) {
        content.innerHTML = `
            <p>${lessonData.iotaSubscript.explanation}</p>
            <p>${lessonData.iotaSubscript.history}</p>
            <div class="examples-list">
                ${lessonData.iotaSubscript.examples.map(ex => `
                    <div class="example-word">
                        <span class="greek-text">${ex.greek}</span>
                        <span class="pronunciation">${ex.pronunciation}</span>
                        <span class="meaning">${ex.meaning}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Load practice words
function loadPracticeWords() {
    const grid = document.getElementById('practice-grid');
    if (grid) {
        grid.innerHTML = lessonData.practiceWords.map(word => `
            <div class="practice-word">
                <div class="greek-text">${word.greek}</div>
                <div class="pronunciation">${word.pronunciation}</div>
                <div class="meaning">${word.meaning}</div>
                <div class="notes">${word.notes}</div>
            </div>
        `).join('');
    }
}

// Load progress checklist
function loadProgressChecklist() {
    const checklist = document.getElementById('progress-checklist');
    if (checklist) {
        checklist.innerHTML = lessonData.progressChecklist.map(item => `
            <div class="checklist-row">
                <div class="checklist-item">
                    <input type="checkbox" id="${item.id}" ${item.checked ? 'checked' : ''} 
                           onchange="updateProgress('${item.id}', this.checked)">
                    <label for="${item.id}">${item.text}</label>
                </div>
            </div>
        `).join('');
    }
}

// Load quick reference
function loadQuickReference() {
    const ref = document.getElementById('quick-reference');
    if (ref) {
        ref.innerHTML = lessonData.quickReference;
    }
}

// Load study tips
function loadStudyTips() {
    const tips = document.getElementById('study-tips');
    if (tips) {
        tips.innerHTML = lessonData.studyTips;
    }
}

// Load summary
function loadSummary() {
    const summary = document.getElementById('summary-box');
    if (summary) {
        summary.innerHTML = `
            <ul>
                ${lessonData.summaryPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
        `;
    }
}

// Update progress
function updateProgress(itemId, checked) {
    const item = lessonData.progressChecklist.find(i => i.id === itemId);
    if (item) {
        item.checked = checked;
    }
}

// Set current chapter
function setCurrentChapter(chapter) {
    window.currentChapter = chapter;
}
