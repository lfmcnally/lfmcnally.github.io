// Lesson 1.5: Nominative and Accusative - Data File (Simplified)

const lessonData = {
    // Lesson Information
    lessonInfo: {
        title: "Nouns: Nominative and Accusative Cases",
        subtitle: "Learning the subject and object forms"
    },

    // Introduction
    introduction: {
        title: "What are cases?",
        content: "In Greek, nouns change their endings to show their role in a sentence. The <strong>nominative</strong> is used for the subject (who does the action), and the <strong>accusative</strong> is used for the object (who receives the action)."
    },

    // The Definite Article - First thing to teach
    definiteArticle: {
        title: "The Definite Article",
        explanation: "This is the word for <em>the</em>. Greek uses it much more than English does. If there is no article, translate as <em>a</em>.",
        examples: "ὁ δουλος = <em>the slave</em>, but δουλος = <em>a slave</em>",
        forms: {
            masculine: {
                singular: { nom: "ὁ", acc: "τον" },
                plural: { nom: "οἱ", acc: "τους" }
            },
            feminine: {
                singular: { nom: "ἡ", acc: "την" },
                plural: { nom: "αἱ", acc: "τάς" }
            }
        },
        note: "Notice that <strong>-ν</strong> appears in the accusative forms (like Latin's <em>-m</em>)."
    },

    // Noun Endings - Second thing to teach
    nounEndings: {
        title: "Noun Endings",
        explanation: "Greek nouns have a <strong>stem</strong> (which stays the same) and an <strong>ending</strong> (which changes). We use hyphens to show where they join.",
        declensions: {
            first: {
                title: "First Declension (Feminine)",
                example: "τιμή = honour",
                stem: "τιμ-",
                singular: { nom: "-ή", acc: "-ήν" },
                plural: { nom: "-αί", acc: "-άς" }
            },
            second: {
                title: "Second Declension (Masculine)",
                example: "λόγος = word",
                stem: "λογ-",
                singular: { nom: "-ος", acc: "-ον" },
                plural: { nom: "-οι", acc: "-ους" }
            }
        },
        keyPoint: "The accusative always has <strong>-ν</strong> in the singular, and <strong>-ς</strong> or <strong>-ους</strong> in the plural."
    },

    // Practice Examples - for working through together
    practiceExamples: [
        // Singular examples
        {
            greek: "ὁ δουλος",
            english: "the slave",
            breakdown: "ὁ (masc. nom. sing.) + δουλος (nom. sing.)",
            case: "nominative",
            number: "singular",
            type: "subject"
        },
        {
            greek: "τον δουλον",
            english: "the slave",
            breakdown: "τον (masc. acc. sing.) + δουλον (acc. sing.)",
            case: "accusative",
            number: "singular",
            type: "object"
        },
        {
            greek: "ἡ κωμη",
            english: "the village",
            breakdown: "ἡ (fem. nom. sing.) + κωμη (nom. sing.)",
            case: "nominative",
            number: "singular",
            type: "subject"
        },
        {
            greek: "την κωμην",
            english: "the village",
            breakdown: "την (fem. acc. sing.) + κωμην (acc. sing.)",
            case: "accusative",
            number: "singular",
            type: "object"
        },
        // Plural examples
        {
            greek: "οἱ ἱπποι",
            english: "the horses",
            breakdown: "οἱ (masc. nom. pl.) + ἱπποι (nom. pl.)",
            case: "nominative",
            number: "plural",
            type: "subjects"
        },
        {
            greek: "τους ἱππους",
            english: "the horses",
            breakdown: "τους (masc. acc. pl.) + ἱππους (acc. pl.)",
            case: "accusative",
            number: "plural",
            type: "objects"
        },
        {
            greek: "αἱ πυλαι",
            english: "the gates",
            breakdown: "αἱ (fem. nom. pl.) + πυλαι (nom. pl.)",
            case: "nominative",
            number: "plural",
            type: "subjects"
        },
        {
            greek: "τάς πυλάς",
            english: "the gates",
            breakdown: "τάς (fem. acc. pl.) + πυλάς (acc. pl.)",
            case: "accusative",
            number: "plural",
            type: "objects"
        }
    ],

    // Common Vocabulary
    vocabulary: {
        first: [
            { greek: "ἡ κωμη", meaning: "the village" },
            { greek: "ἡ κορη", meaning: "the girl" },
            { greek: "ἡ πυλη", meaning: "the gate" },
            { greek: "ἡ φωνή", meaning: "the voice" },
            { greek: "ἡ νικη", meaning: "the victory" }
        ],
        second: [
            { greek: "ὁ δουλος", meaning: "the slave" },
            { greek: "ὁ ἱππος", meaning: "the horse" },
            { greek: "ὁ λόγος", meaning: "the word" },
            { greek: "ὁ θεος", meaning: "the god" },
            { greek: "ὁ ἀγγελος", meaning: "the messenger" }
        ]
    },

    // Quick Reference
    quickReference: {
        patterns: [
            "Nominative = subject (does the action)",
            "Accusative = object (receives the action)",
            "Look for -ν in accusative forms!",
            "Article matches the noun's gender, case and number"
        ]
    }
};

// Function to load all lesson data
function loadLessonData() {
    loadIntroduction();
    loadDefiniteArticle();
    loadNounEndings();
    loadPracticeExamples();
    loadVocabulary();
    loadQuickReference();
}

// Load Introduction
function loadIntroduction() {
    const introDiv = document.getElementById('introduction-content');
    if (introDiv) {
        introDiv.innerHTML = `
            <h3>${lessonData.introduction.title}</h3>
            <p>${lessonData.introduction.content}</p>
        `;
    }
}

// Load Definite Article
function loadDefiniteArticle() {
    const articleDiv = document.getElementById('article-content');
    if (articleDiv) {
        const art = lessonData.definiteArticle;
        articleDiv.innerHTML = `
            <p class="article-explanation">${art.explanation}</p>
            <p class="article-examples">${art.examples}</p>
            
            <div class="article-tables">
                <div class="article-table">
                    <h4>Masculine</h4>
                    <table>
                        <tr>
                            <th></th>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                        <tr>
                            <td class="case-label">Nominative</td>
                            <td class="greek-form">${art.forms.masculine.singular.nom}</td>
                            <td class="greek-form">${art.forms.masculine.plural.nom}</td>
                        </tr>
                        <tr>
                            <td class="case-label">Accusative</td>
                            <td class="greek-form">${art.forms.masculine.singular.acc}</td>
                            <td class="greek-form">${art.forms.masculine.plural.acc}</td>
                        </tr>
                    </table>
                </div>
                
                <div class="article-table">
                    <h4>Feminine</h4>
                    <table>
                        <tr>
                            <th></th>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                        <tr>
                            <td class="case-label">Nominative</td>
                            <td class="greek-form">${art.forms.feminine.singular.nom}</td>
                            <td class="greek-form">${art.forms.feminine.plural.nom}</td>
                        </tr>
                        <tr>
                            <td class="case-label">Accusative</td>
                            <td class="greek-form">${art.forms.feminine.singular.acc}</td>
                            <td class="greek-form">${art.forms.feminine.plural.acc}</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <p class="article-note">${art.note}</p>
        `;
    }
}

// Load Noun Endings
function loadNounEndings() {
    const endingsDiv = document.getElementById('endings-content');
    if (endingsDiv) {
        const endings = lessonData.nounEndings;
        const first = endings.declensions.first;
        const second = endings.declensions.second;
        
        endingsDiv.innerHTML = `
            <p class="endings-explanation">${endings.explanation}</p>
            
            <div class="endings-grid">
                <div class="endings-box">
                    <h4>${first.title}</h4>
                    <p class="example">${first.example}</p>
                    <table>
                        <tr>
                            <th></th>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                        <tr>
                            <td class="case-label">Nominative</td>
                            <td class="ending-form">${first.stem}${first.singular.nom}</td>
                            <td class="ending-form">${first.stem}${first.plural.nom}</td>
                        </tr>
                        <tr>
                            <td class="case-label">Accusative</td>
                            <td class="ending-form">${first.stem}${first.singular.acc}</td>
                            <td class="ending-form">${first.stem}${first.plural.acc}</td>
                        </tr>
                    </table>
                </div>
                
                <div class="endings-box">
                    <h4>${second.title}</h4>
                    <p class="example">${second.example}</p>
                    <table>
                        <tr>
                            <th></th>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                        <tr>
                            <td class="case-label">Nominative</td>
                            <td class="ending-form">${second.stem}${second.singular.nom}</td>
                            <td class="ending-form">${second.stem}${second.plural.nom}</td>
                        </tr>
                        <tr>
                            <td class="case-label">Accusative</td>
                            <td class="ending-form">${second.stem}${second.singular.acc}</td>
                            <td class="ending-form">${second.stem}${second.plural.acc}</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <p class="key-point">${endings.keyPoint}</p>
        `;
    }
}

// Load Practice Examples
function loadPracticeExamples() {
    const practiceDiv = document.getElementById('practice-content');
    if (practiceDiv) {
        practiceDiv.innerHTML = lessonData.practiceExamples.map((item, index) => `
            <div class="practice-card" onclick="togglePractice(${index})">
                <div class="practice-greek">${item.greek}</div>
                <div class="practice-answer" id="practice-${index}" style="display: none;">
                    <div class="practice-english">${item.english}</div>
                    <div class="practice-breakdown">${item.breakdown}</div>
                    <div class="practice-info">${item.case} ${item.number} (${item.type})</div>
                </div>
                <div class="practice-hint" id="practice-hint-${index}">Click to reveal</div>
            </div>
        `).join('');
    }
}

// Load Vocabulary
function loadVocabulary() {
    const vocabDiv = document.getElementById('vocabulary-content');
    if (vocabDiv) {
        vocabDiv.innerHTML = `
            <div class="vocab-column">
                <h4>First Declension (Feminine)</h4>
                ${lessonData.vocabulary.first.map(word => `
                    <div class="vocab-item">
                        <span class="vocab-greek">${word.greek}</span>
                        <span class="vocab-meaning">${word.meaning}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="vocab-column">
                <h4>Second Declension (Masculine)</h4>
                ${lessonData.vocabulary.second.map(word => `
                    <div class="vocab-item">
                        <span class="vocab-greek">${word.greek}</span>
                        <span class="vocab-meaning">${word.meaning}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Load Quick Reference
function loadQuickReference() {
    const quickRef = document.getElementById('quick-reference-content');
    if (quickRef) {
        quickRef.innerHTML = `
            <ul>
                ${lessonData.quickReference.patterns.map(pattern => `<li>${pattern}</li>`).join('')}
            </ul>
        `;
    }
}

// Toggle practice answer visibility
function togglePractice(index) {
    const answer = document.getElementById(`practice-${index}`);
    const hint = document.getElementById(`practice-hint-${index}`);
    
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        hint.style.display = 'none';
    } else {
        answer.style.display = 'none';
        hint.style.display = 'block';
    }
}

// Set current chapter
function setCurrentChapter(chapter) {
    window.currentChapter = chapter;
}
