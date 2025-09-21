// Lesson 1.4: Present Tense - Data File

const lessonData = {
    // Verb Information
    verb: {
        infinitive: "παύω",
        meaning: "to stop",
        stem: "παυ-",
        tense: "Present",
        note: "Compare English 'pause'"
    },

    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "What are verbs?",
                content: "Verbs are action words - they tell us what someone or something is doing. In English, we say \"I stop\", \"you stop\", \"she stops\"."
            },
            {
                title: "Greek verbs change their endings!",
                content: "In Greek, we don't need to say \"I\", \"you\", or \"she\" because the ending of the verb tells us who is doing the action."
            },
            {
                title: "How it works:",
                points: [
                    "Take the stem <strong>παυ-</strong> (which carries the meaning \"stop\")",
                    "Add different endings to show <em>who</em> is doing the stopping",
                    "For example: <strong>παυ</strong> + <strong>ω</strong> = παύω (I stop)",
                    "Note: The accent mark shows which syllable to stress"
                ]
            },
            {
                title: "One Greek word = Several English words:",
                content: "The Greek present tense is flexible! <em>παύω</em> can mean \"I stop\", \"I am stopping\", or \"I do stop\" - all from just one word!"
            }
        ]
    },

    // Conjugations
    conjugations: {
        singular: [
            {
                person: "1st Person",
                greek: "παύω",
                english: "I stop / I am stopping"
            },
            {
                person: "2nd Person",
                greek: "παύεις",
                english: "you stop / you are stopping"
            },
            {
                person: "3rd Person",
                greek: "παύει",
                english: "he/she/it stops"
            }
        ],
        plural: [
            {
                person: "1st Person",
                greek: "παύομεν",
                english: "we stop / we are stopping"
            },
            {
                person: "2nd Person",
                greek: "παύετε",
                english: "you (pl.) stop"
            },
            {
                person: "3rd Person",
                greek: "παύουσι(ν)",
                english: "they stop / they are stopping"
            }
        ]
    },

    // Additional note about movable nu
    movableNu: {
        title: "The Movable Nu",
        explanation: "The ν in παύουσι(ν) is called 'movable nu' - it's added to make pronunciation easier if the next word starts with a vowel, or if this is the last word in the sentence."
    },

    // Common verbs from textbook
    commonVerbs: [
        { greek: "ἄγω", meaning: "I lead" },
        { greek: "ἀκούω", meaning: "I hear" },
        { greek: "βαίνω", meaning: "I go" },
        { greek: "γράφω", meaning: "I write" },
        { greek: "διδάσκω", meaning: "I teach" },
        { greek: "διώκω", meaning: "I chase" },
        { greek: "ἔχω", meaning: "I have" },
        { greek: "τρέχω", meaning: "I run" },
        { greek: "φέρω", meaning: "I carry, I bring" },
        { greek: "φυλάσσω", meaning: "I guard" }
    ],

    // Interactive Verb Practice
    verbPractice: [
        {
            greek: "γράφει",
            english: "he/she writes",
            person: "3rd singular"
        },
        {
            greek: "ἀκούομεν",
            english: "we hear",
            person: "1st plural"
        },
        {
            greek: "τρέχουσι",
            english: "they run",
            person: "3rd plural"
        },
        {
            greek: "διδάσκεις",
            english: "you teach",
            person: "2nd singular"
        },
        {
            greek: "φέρετε",
            english: "you (pl.) carry",
            person: "2nd plural"
        },
        {
            greek: "ἔχω",
            english: "I have",
            person: "1st singular"
        }
    ],

    // Grammar comparison with Latin
    comparison: {
        title: "Similarities to Latin endings",
        note: "Greek verb endings are similar to Latin: -ω/-ο, -εις/-ς, -ει/-τ, -ομεν/-μυς, -ετε/-τις, -ουσι/-ντ. Only the third persons seem unrelated (and even here the plural -ουσι seems to have replaced an original form -οντι, which has changed first to -ουσι and eventually to -ουσι)."
    },

    // Grammar Tips
    grammarTips: {
        title: "Remember the Present Tense Endings:",
        endings: [
            { ending: "-ω", meaning: "I" },
            { ending: "-εις", meaning: "you (singular)" },
            { ending: "-ει", meaning: "he/she/it" },
            { ending: "-ομεν", meaning: "we" },
            { ending: "-ετε", meaning: "you (plural)" },
            { ending: "-ουσι(ν)", meaning: "they" }
        ],
        note: "The vast majority of Greek verbs follow this pattern. There is just one main conjugation."
    },

    // Study Checklist
    checklist: [
        "Read the grammar explanation",
        "Study the conjugation table",
        "Learn the 10 common verbs",
        "Practice the verb recognition",
        "Understand movable nu",
        "Compare with Latin endings"
    ],

    // Quick Reference
    quickReference: {
        title: "The Pattern:",
        pattern: "παυ- + ω/εις/ει/ομεν/ετε/ουσι(ν)",
        note: "All Greek verbs follow this same pattern - just change the stem!"
    },

    // Summary points
    summaryPoints: [
        "Greek verbs change endings to show who does the action",
        "The stem (παυ-) carries the meaning",
        "The ending tells us the person (I, you, he/she/it, we, you pl., they)",
        "Movable nu (ν) is added for easier pronunciation",
        "Most Greek verbs follow this same pattern",
        "Similar to Latin verb endings"
    ]
};

// Function to load all lesson data
function loadLessonData() {
    loadGrammarExplanation();
    loadVerbInfo();
    loadConjugations();
    loadMovableNu();
    loadCommonVerbs();
    loadVerbPractice();
    loadComparison();
    loadGrammarTips();
    loadProgressChecklist();
    loadQuickReference();
    loadSummary();
}

// Load Grammar Explanation
function loadGrammarExplanation() {
    const grammarContent = document.getElementById('grammar-explanation-content');
    if (grammarContent) {
        let html = '';
        lessonData.grammarExplanation.sections.forEach(section => {
            if (section.content) {
                html += `<p><strong>${section.title}</strong> ${section.content}</p>`;
            } else if (section.points) {
                html += `<p><strong>${section.title}</strong></p><ul>`;
                section.points.forEach(point => {
                    html += `<li>${point}</li>`;
                });
                html += '</ul>';
            }
        });
        grammarContent.innerHTML = html;
    }
}

// Load Verb Info
function loadVerbInfo() {
    const verbInfo = document.getElementById('verb-info');
    if (verbInfo) {
        verbInfo.innerHTML = `
            <div class="verb-detail">
                <div class="verb-detail-label">Stem</div>
                <div class="verb-detail-value">${lessonData.verb.stem}</div>
            </div>
            <div class="verb-detail">
                <div class="verb-detail-label">Tense</div>
                <div class="verb-detail-value">${lessonData.verb.tense}</div>
            </div>
            <div class="verb-detail">
                <div class="verb-detail-label">Note</div>
                <div class="verb-detail-value">${lessonData.verb.note}</div>
            </div>
        `;
    }
}

// Load Conjugations
function loadConjugations() {
    const singularDiv = document.getElementById('singular-conjugations');
    if (singularDiv) {
        singularDiv.innerHTML = lessonData.conjugations.singular.map(conj => `
            <div class="conjugation-card">
                <div class="person-label">${conj.person}</div>
                <div class="greek-form">${conj.greek}</div>
                <div class="english-translation">${conj.english}</div>
            </div>
        `).join('');
    }

    const pluralDiv = document.getElementById('plural-conjugations');
    if (pluralDiv) {
        pluralDiv.innerHTML = lessonData.conjugations.plural.map(conj => `
            <div class="conjugation-card">
                <div class="person-label">${conj.person}</div>
                <div class="greek-form">${conj.greek}</div>
                <div class="english-translation">${conj.english}</div>
            </div>
        `).join('');
    }
}

// Load Movable Nu explanation
function loadMovableNu() {
    const movableNuDiv = document.getElementById('movable-nu-content');
    if (movableNuDiv) {
        movableNuDiv.innerHTML = `
            <h4>${lessonData.movableNu.title}</h4>
            <p>${lessonData.movableNu.explanation}</p>
        `;
    }
}

// Load Common Verbs
function loadCommonVerbs() {
    const verbsList = document.getElementById('common-verbs-list');
    if (verbsList) {
        verbsList.innerHTML = lessonData.commonVerbs.map((verb, index) => `
            <div class="common-verb-item">
                <div class="verb-number">${index + 1}</div>
                <div class="verb-greek">${verb.greek}</div>
                <div class="verb-meaning">${verb.meaning}</div>
            </div>
        `).join('');
    }
}

// Load Verb Practice Grid
function loadVerbPractice() {
    const verbGrid = document.getElementById('verb-grid');
    if (verbGrid) {
        verbGrid.innerHTML = lessonData.verbPractice.map((verb, index) => `
            <div class="verb-card" onclick="toggleVerbTranslation(${index})">
                <div class="verb-greek">${verb.greek}</div>
                <div class="verb-translation" id="verb-${index}" style="display: none;">
                    <div class="verb-english">${verb.english}</div>
                    <div class="verb-person">${verb.person}</div>
                </div>
                <div class="verb-hint" id="verb-hint-${index}">Click to translate</div>
            </div>
        `).join('');
    }
}

// Load Comparison
function loadComparison() {
    const comparisonDiv = document.getElementById('comparison-content');
    if (comparisonDiv) {
        comparisonDiv.innerHTML = `
            <h4>${lessonData.comparison.title}</h4>
            <p>${lessonData.comparison.note}</p>
        `;
    }
}

// Load Grammar Tips
function loadGrammarTips() {
    const tipsContent = document.getElementById('grammar-tips-content');
    if (tipsContent) {
        let tipsHtml = `<p><strong>${lessonData.grammarTips.title}</strong></p><ul>`;
        lessonData.grammarTips.endings.forEach(ending => {
            tipsHtml += `<li><strong>${ending.ending}</strong> = ${ending.meaning}</li>`;
        });
        tipsHtml += `</ul><p style="margin-top: 1rem;">${lessonData.grammarTips.note}</p>`;
        tipsContent.innerHTML = tipsHtml;
    }
}

// Load Progress Checklist
function loadProgressChecklist() {
    const checklist = document.getElementById('progress-checklist');
    if (checklist) {
        checklist.innerHTML = lessonData.checklist.map((item, index) => `
            <div class="checklist-row">
                <div class="checklist-item">
                    <input type="checkbox" id="check-${index}" onchange="updateProgress('check-${index}', this.checked)">
                    <label for="check-${index}">${item}</label>
                </div>
                <button class="do-now-btn" id="do-now-${index}" onclick="markAsDoingNow(${index})">Do now</button>
            </div>
        `).join('');
    }
}

// Load Quick Reference
function loadQuickReference() {
    const quickRef = document.getElementById('quick-reference-content');
    if (quickRef) {
        quickRef.innerHTML = `
            <p><strong>${lessonData.quickReference.title}</strong></p>
            <p style="margin-top: 0.5rem; font-family: 'GFS Neohellenic', serif; color: #0066ff;">${lessonData.quickReference.pattern}</p>
            <p style="margin-top: 1rem;">${lessonData.quickReference.note}</p>
        `;
    }
}

// Load Summary
function loadSummary() {
    const summary = document.getElementById('summary-content');
    if (summary) {
        summary.innerHTML = `
            <ul>
                ${lessonData.summaryPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
        `;
    }
}

// Function to toggle verb translation visibility
function toggleVerbTranslation(index) {
    const translation = document.getElementById(`verb-${index}`);
    const hint = document.getElementById(`verb-hint-${index}`);
    
    if (translation.style.display === 'none') {
        translation.style.display = 'block';
        hint.style.display = 'none';
    } else {
        translation.style.display = 'none';
        hint.style.display = 'block';
    }
}

// Update progress
function updateProgress(itemId, checked) {
    // Progress tracking logic can be added here
    console.log(`${itemId} checked: ${checked}`);
}

// Set current chapter
function setCurrentChapter(chapter) {
    window.currentChapter = chapter;
}
