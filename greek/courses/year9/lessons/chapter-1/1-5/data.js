// Lesson 1.5: Nominative and Accusative - Data File

const lessonData = {
    // Lesson Information
    lessonInfo: {
        title: "Nouns (First and Second Declension): Nominative and Accusative",
        subtitle: "Learning the subject and object cases"
    },

    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "What are cases?",
                content: "In Greek (like Latin), nouns change their endings to show their role in a sentence. These different forms are called 'cases'."
            },
            {
                title: "The two cases we're learning:",
                points: [
                    "<strong>Nominative</strong> = the subject (who/what does the action)",
                    "<strong>Accusative</strong> = the object (who/what receives the action)",
                    "Example: 'The slave guards the gate' - 'slave' is nominative, 'gate' is accusative"
                ]
            },
            {
                title: "How it works:",
                points: [
                    "Take the <strong>stem</strong> (which stays the same)",
                    "Add different <strong>endings</strong> to show the case",
                    "The ending tells us whether the noun is the subject or object",
                    "Hyphens help us see where the stem ends and the ending begins"
                ]
            },
            {
                title: "Declensions:",
                content: "'Declension' refers to the group a noun belongs to and the way its endings change. The first declension is mostly feminine nouns, whilst the second declension is mostly masculine."
            }
        ]
    },

    // Singular Forms
    singularForms: {
        firstDeclension: {
            noun: "τιμή",
            meaning: "honour",
            stem: "τιμ-",
            nominative: {
                form: "τιμ-ή",
                explanation: "subject form"
            },
            accusative: {
                form: "τιμ-ήν",
                explanation: "object form"
            }
        },
        secondDeclension: {
            noun: "λόγος",
            meaning: "word",
            meaningNote: "(also reason, story)",
            stem: "λογ-",
            nominative: {
                form: "λογ-ος",
                explanation: "subject form"
            },
            accusative: {
                form: "λογ-ον",
                explanation: "object form"
            }
        }
    },

    // Plural Forms
    pluralForms: {
        firstDeclension: {
            noun: "τιμή",
            meaning: "honour",
            stem: "τιμ-",
            nominative: {
                form: "τιμ-αί",
                explanation: "subjects form"
            },
            accusative: {
                form: "τιμ-άς",
                explanation: "objects form"
            }
        },
        secondDeclension: {
            noun: "λόγος",
            meaning: "word",
            meaningNote: "(also reason, story)",
            stem: "λογ-",
            nominative: {
                form: "λογ-οι",
                explanation: "subjects form"
            },
            accusative: {
                form: "λογ-ους",
                explanation: "objects form"
            }
        }
    },

    // Definite Article
    definiteArticle: {
        singular: {
            masculine: {
                nominative: "ὁ",
                accusative: "τον"
            },
            feminine: {
                nominative: "ἡ",
                accusative: "την"
            }
        },
        plural: {
            masculine: {
                nominative: "οἱ",
                accusative: "τους"
            },
            feminine: {
                nominative: "αἱ",
                accusative: "τάς"
            }
        },
        note: "This is the word for <em>the</em>. Latin has no equivalent, but in Greek it is very important. If there is no article, translate <em>a</em>: e.g. ὁ δουλος = <em>the slave</em>, δουλος = <em>a slave</em>."
    },

    // Key Points
    keyPoints: [
        "As with verbs, it is important to distinguish the <strong>stem</strong> (which stays the same) from the <strong>ending</strong> (which changes). Again hyphens are used initially.",
        "'Declension' refers to the group a noun belongs to and the way its endings change. As in Latin, the nominative case is used for the subject of a verb and the accusative for the object.",
        "These nouns roughly correspond to ones like <em>puella</em> and <em>servus</em>. Notice that <strong>-ν</strong> is the characteristic ending for the accusative singular, as <em>-m</em> is in Latin.",
        "Notice the similarity to the noun endings in the definite article. Again <strong>-ν</strong> marks the accusative."
    ],

    // Common Nouns - First Declension (like τιμή)
    commonNounsFirst: [
        { greek: "βοή", meaning: "shout" },
        { greek: "βουλή", meaning: "plan, also council" },
        { greek: "γῆ", meaning: "earth" },
        { greek: "εἰρηνη", meaning: "peace" },
        { greek: "ἐπιστολή", meaning: "letter" },
        { greek: "κορη", meaning: "girl" },
        { greek: "κωμη", meaning: "village" },
        { greek: "νικη", meaning: "victory" },
        { greek: "πυλη", meaning: "gate" },
        { greek: "φωνή", meaning: "voice" }
    ],

    // Common Nouns - Second Declension (like λόγος)
    commonNounsSecond: [
        { greek: "ἀγγελος", meaning: "messenger" },
        { greek: "διδασκαλος", meaning: "teacher" },
        { greek: "δουλος", meaning: "slave" },
        { greek: "θεος", meaning: "god" },
        { greek: "ἱππος", meaning: "horse" },
        { greek: "ξενος", meaning: "stranger, foreigner" },
        { greek: "ποταμος", meaning: "river" },
        { greek: "στρατηγος*", meaning: "general, commander" },
        { greek: "στρατος", meaning: "army" },
        { greek: "συμμαχος", meaning: "ally" }
    ],

    // Note about στρατηγος
    etymologyNote: "* made up of στρατος + ἀγω, hence literally <em>army leader</em>",

    // Word Order
    wordOrder: {
        title: "Word Order",
        explanation: "This is much more flexible than in Latin. The verb need not come at the end, though it can."
    },

    // Grammar Tips
    grammarTips: {
        title: "Remember the Endings:",
        singular: [
            { declension: "First (fem.)", nominative: "-ή", accusative: "-ήν" },
            { declension: "Second (masc.)", nominative: "-ος", accusative: "-ον" }
        ],
        plural: [
            { declension: "First (fem.)", nominative: "-αί", accusative: "-άς" },
            { declension: "Second (masc.)", nominative: "-οι", accusative: "-ους" }
        ],
        note: "The key is recognising the stem and the ending separately. The ending tells you the case and number."
    },

    // Translation Practice
    translationPractice: [
        { greek: "ὁ δουλος", english: "the slave", case: "nom. sing." },
        { greek: "τον δουλον", english: "the slave (object)", case: "acc. sing." },
        { greek: "ἡ κωμη", english: "the village", case: "nom. sing." },
        { greek: "την κωμην", english: "the village (object)", case: "acc. sing." },
        { greek: "οἱ ἱπποι", english: "the horses", case: "nom. pl." },
        { greek: "τους ἱππους", english: "the horses (object)", case: "acc. pl." },
        { greek: "αἱ πυλαι", english: "the gates", case: "nom. pl." },
        { greek: "τάς πυλάς", english: "the gates (object)", case: "acc. pl." }
    ],

    // Study Checklist
    checklist: [
        "Read the grammar explanation",
        "Study singular forms (first & second declension)",
        "Study plural forms (first & second declension)",
        "Learn the definite article",
        "Practise the 10 common first declension nouns",
        "Practise the 10 common second declension nouns",
        "Try the translation practice",
        "Understand word order flexibility"
    ],

    // Quick Reference
    quickReference: {
        title: "Quick Pattern:",
        patterns: [
            "Singular: -ή → -ήν (first) / -ος → -ον (second)",
            "Plural: -αί → -άς (first) / -οι → -ους (second)",
            "Look for -ν in accusative forms!"
        ]
    },

    // Summary Points
    summaryPoints: [
        "Greek nouns change endings to show their role (case)",
        "Nominative = subject, Accusative = object",
        "First declension is mostly feminine, second is mostly masculine",
        "-ν is the key marker for accusative forms",
        "The definite article matches the noun's gender, case and number",
        "Word order in Greek is flexible (unlike Latin)",
        "Always distinguish stem from ending"
    ]
};

// Function to load all lesson data
function loadLessonData() {
    loadGrammarExplanation();
    loadSingularForms();
    loadPluralForms();
    loadDefiniteArticle();
    loadKeyPoints();
    loadCommonNouns();
    loadWordOrder();
    loadTranslationPractice();
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

// Load Singular Forms
function loadSingularForms() {
    const singularContent = document.getElementById('singular-forms-content');
    if (singularContent) {
        const first = lessonData.singularForms.firstDeclension;
        const second = lessonData.singularForms.secondDeclension;
        
        singularContent.innerHTML = `
            <div class="declension-column">
                <div class="declension-header">First Declension Feminine</div>
                <div class="declension-example">
                    <div class="example-word">${first.noun} = ${first.meaning}</div>
                </div>
                <div class="case-grid">
                    <div class="case-card">
                        <div class="case-label">nominative</div>
                        <div class="case-form">${first.nominative.form}</div>
                    </div>
                    <div class="case-card">
                        <div class="case-label">accusative</div>
                        <div class="case-form">${first.accusative.form}</div>
                    </div>
                </div>
            </div>
            <div class="declension-column">
                <div class="declension-header">Second Declension Masculine</div>
                <div class="declension-example">
                    <div class="example-word">${second.noun} = ${second.meaning}</div>
                    <div class="example-note">${second.meaningNote}</div>
                </div>
                <div class="case-grid">
                    <div class="case-card">
                        <div class="case-label">nominative</div>
                        <div class="case-form">${second.nominative.form}</div>
                    </div>
                    <div class="case-card">
                        <div class="case-label">accusative</div>
                        <div class="case-form">${second.accusative.form}</div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Load Plural Forms
function loadPluralForms() {
    const pluralContent = document.getElementById('plural-forms-content');
    if (pluralContent) {
        const first = lessonData.pluralForms.firstDeclension;
        const second = lessonData.pluralForms.secondDeclension;
        
        pluralContent.innerHTML = `
            <div class="declension-column">
                <div class="declension-header">First Declension Feminine</div>
                <div class="declension-example">
                    <div class="example-word">${first.noun} = ${first.meaning}</div>
                </div>
                <div class="case-grid">
                    <div class="case-card">
                        <div class="case-label">nominative</div>
                        <div class="case-form">${first.nominative.form}</div>
                    </div>
                    <div class="case-card">
                        <div class="case-label">accusative</div>
                        <div class="case-form">${first.accusative.form}</div>
                    </div>
                </div>
            </div>
            <div class="declension-column">
                <div class="declension-header">Second Declension Masculine</div>
                <div class="declension-example">
                    <div class="example-word">${second.noun} = ${second.meaning}</div>
                    <div class="example-note">${second.meaningNote}</div>
                </div>
                <div class="case-grid">
                    <div class="case-card">
                        <div class="case-label">nominative</div>
                        <div class="case-form">${second.nominative.form}</div>
                    </div>
                    <div class="case-card">
                        <div class="case-label">accusative</div>
                        <div class="case-form">${second.accusative.form}</div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Load Definite Article
function loadDefiniteArticle() {
    const articleContent = document.getElementById('definite-article-content');
    if (articleContent) {
        const sing = lessonData.definiteArticle.singular;
        const plur = lessonData.definiteArticle.plural;
        
        articleContent.innerHTML = `
            <div class="article-note">${lessonData.definiteArticle.note}</div>
            <div class="article-tables">
                <div class="article-section">
                    <h4>Singular</h4>
                    <div class="article-gender">
                        <div class="gender-label">Masculine</div>
                        <div class="article-forms">
                            <span><em>nom.</em> ${sing.masculine.nominative}</span>
                            <span><em>acc.</em> ${sing.masculine.accusative}</span>
                        </div>
                    </div>
                    <div class="article-gender">
                        <div class="gender-label">Feminine</div>
                        <div class="article-forms">
                            <span><em>nom.</em> ${sing.feminine.nominative}</span>
                            <span><em>acc.</em> ${sing.feminine.accusative}</span>
                        </div>
                    </div>
                </div>
                <div class="article-section">
                    <h4>Plural</h4>
                    <div class="article-gender">
                        <div class="gender-label">Masculine</div>
                        <div class="article-forms">
                            <span><em>nom.</em> ${plur.masculine.nominative}</span>
                            <span><em>acc.</em> ${plur.masculine.accusative}</span>
                        </div>
                    </div>
                    <div class="article-gender">
                        <div class="gender-label">Feminine</div>
                        <div class="article-forms">
                            <span><em>nom.</em> ${plur.feminine.nominative}</span>
                            <span><em>acc.</em> ${plur.feminine.accusative}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Load Key Points
function loadKeyPoints() {
    const keyPointsDiv = document.getElementById('key-points-content');
    if (keyPointsDiv) {
        let html = '<ul>';
        lessonData.keyPoints.forEach(point => {
            html += `<li>${point}</li>`;
        });
        html += '</ul>';
        keyPointsDiv.innerHTML = html;
    }
}

// Load Common Nouns
function loadCommonNouns() {
    const firstList = document.getElementById('common-nouns-first-list');
    if (firstList) {
        firstList.innerHTML = lessonData.commonNounsFirst.map((noun, index) => `
            <div class="common-noun-item">
                <div class="noun-number">${index + 1}</div>
                <div class="noun-greek">${noun.greek}</div>
                <div class="noun-meaning">${noun.meaning}</div>
            </div>
        `).join('');
    }

    const secondList = document.getElementById('common-nouns-second-list');
    if (secondList) {
        secondList.innerHTML = lessonData.commonNounsSecond.map((noun, index) => `
            <div class="common-noun-item">
                <div class="noun-number">${index + 1}</div>
                <div class="noun-greek">${noun.greek}</div>
                <div class="noun-meaning">${noun.meaning}</div>
            </div>
        `).join('');
    }

    const etymologyNote = document.getElementById('etymology-note');
    if (etymologyNote) {
        etymologyNote.innerHTML = lessonData.etymologyNote;
    }
}

// Load Word Order
function loadWordOrder() {
    const wordOrderDiv = document.getElementById('word-order-content');
    if (wordOrderDiv) {
        wordOrderDiv.innerHTML = `
            <h4>${lessonData.wordOrder.title}</h4>
            <p>${lessonData.wordOrder.explanation}</p>
        `;
    }
}

// Load Translation Practice
function loadTranslationPractice() {
    const practiceGrid = document.getElementById('translation-grid');
    if (practiceGrid) {
        practiceGrid.innerHTML = lessonData.translationPractice.map((item, index) => `
            <div class="translation-card" onclick="toggleTranslation(${index})">
                <div class="translation-greek">${item.greek}</div>
                <div class="translation-answer" id="trans-${index}" style="display: none;">
                    <div class="translation-english">${item.english}</div>
                    <div class="translation-case">${item.case}</div>
                </div>
                <div class="translation-hint" id="trans-hint-${index}">Click to translate</div>
            </div>
        `).join('');
    }
}

// Load Grammar Tips
function loadGrammarTips() {
    const tipsContent = document.getElementById('grammar-tips-content');
    if (tipsContent) {
        let html = `<p><strong>${lessonData.grammarTips.title}</strong></p>`;
        html += '<div class="tips-grid">';
        html += '<div class="tips-section"><h5>Singular</h5><ul>';
        lessonData.grammarTips.singular.forEach(item => {
            html += `<li><strong>${item.declension}:</strong> nom. ${item.nominative}, acc. ${item.accusative}</li>`;
        });
        html += '</ul></div>';
        html += '<div class="tips-section"><h5>Plural</h5><ul>';
        lessonData.grammarTips.plural.forEach(item => {
            html += `<li><strong>${item.declension}:</strong> nom. ${item.nominative}, acc. ${item.accusative}</li>`;
        });
        html += '</ul></div></div>';
        html += `<p style="margin-top: 1rem;">${lessonData.grammarTips.note}</p>`;
        tipsContent.innerHTML = html;
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
        let html = `<p><strong>${lessonData.quickReference.title}</strong></p><ul>`;
        lessonData.quickReference.patterns.forEach(pattern => {
            html += `<li>${pattern}</li>`;
        });
        html += '</ul>';
        quickRef.innerHTML = html;
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

// Function to toggle translation visibility
function toggleTranslation(index) {
    const translation = document.getElementById(`trans-${index}`);
    const hint = document.getElementById(`trans-hint-${index}`);
    
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
    console.log(`${itemId} checked: ${checked}`);
}

// Set current chapter
function setCurrentChapter(chapter) {
    window.currentChapter = chapter;
}
