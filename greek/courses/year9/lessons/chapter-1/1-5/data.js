// Lesson 1.5: Nominative and Accusative - Data File

let currentView = 'singular'; // Track which view is showing

const lessonData = {
    // Definite Article
    article: {
        singular: {
            masculine: { nom: "ὁ", acc: "τον" },
            feminine: { nom: "ἡ", acc: "την" }
        },
        plural: {
            masculine: { nom: "οἱ", acc: "τους" },
            feminine: { nom: "αἱ", acc: "τάς" }
        }
    },

    // Noun Endings (using stem + ending format)
    endings: {
        singular: {
            first: {
                title: "1st Declension (Feminine)",
                example: "τιμή = honour",
                stem: "τιμ-",
                nom: "-ή",
                acc: "-ήν"
            },
            second: {
                title: "2nd Declension (Masculine)",
                example: "λόγος = word",
                stem: "λογ-",
                nom: "-ος",
                acc: "-ον"
            }
        },
        plural: {
            first: {
                title: "1st Declension (Feminine)",
                example: "τιμή = honour",
                stem: "τιμ-",
                nom: "-αί",
                acc: "-άς"
            },
            second: {
                title: "2nd Declension (Masculine)",
                example: "λόγος = word",
                stem: "λογ-",
                nom: "-οι",
                acc: "-ους"
            }
        }
    },

    // Practice Examples
    practice: {
        singular: [
            { greek: "ὁ δουλος", english: "the slave", breakdown: "ὁ (masc. nom.) + δουλος (nom.)", role: "subject" },
            { greek: "τον δουλον", english: "the slave", breakdown: "τον (masc. acc.) + δουλον (acc.)", role: "object" },
            { greek: "ἡ κωμη", english: "the village", breakdown: "ἡ (fem. nom.) + κωμη (nom.)", role: "subject" },
            { greek: "την κωμην", english: "the village", breakdown: "την (fem. acc.) + κωμην (acc.)", role: "object" }
        ],
        plural: [
            { greek: "οἱ ἱπποι", english: "the horses", breakdown: "οἱ (masc. nom.) + ἱπποι (nom.)", role: "subjects" },
            { greek: "τους ἱππους", english: "the horses", breakdown: "τους (masc. acc.) + ἱππους (acc.)", role: "objects" },
            { greek: "αἱ πυλαι", english: "the gates", breakdown: "αἱ (fem. nom.) + πυλαι (nom.)", role: "subjects" },
            { greek: "τάς πυλάς", english: "the gates", breakdown: "τάς (fem. acc.) + πυλάς (acc.)", role: "objects" }
        ]
    },

    // Vocabulary
    vocabulary: {
        first: [
            { greek: "ἡ κωμη", meaning: "the village" },
            { greek: "ἡ κορη", meaning: "the girl" },
            { greek: "ἡ πυλη", meaning: "the gate" }
        ],
        second: [
            { greek: "ὁ δουλος", meaning: "the slave" },
            { greek: "ὁ ἱππος", meaning: "the horse" },
            { greek: "ὁ λόγος", meaning: "the word" }
        ]
    },

    // Quick Reference
    quickReference: {
        singular: [
            "Nominative = subject (does the action)",
            "Accusative = object (receives the action)",
            "Look for -ν in accusative forms!"
        ],
        plural: [
            "Nominative plural: -αί (1st) or -οι (2nd)",
            "Accusative plural: -άς (1st) or -ους (2nd)",
            "Article matches noun's gender and case"
        ]
    },

    // Translation Sentences
    translations: {
        singular: [
            { greek: "ὁ ἀγγελος τρεχει.", english: "The messenger runs." },
            { greek: "ὁ στρατηγος ἀγει τον στρατον.", english: "The general leads the army." },
            { greek: "ὁ ξενος φερει τον λογον.", english: "The stranger brings the word." },
            { greek: "διδασκω τον ἀγγελον.", english: "I teach the messenger." },
            { greek: "ὁ θεος φυλασσει την γην.", english: "The god guards the earth." },
            { greek: "ἀκουω τον λογον.", english: "I hear the word." }
        ],
        plural: [
            { greek: "οἱ ἀγγελοι τρεχουσι.", english: "The messengers run." },
            { greek: "οἱ στρατηγοι ἀγουσι τους στρατους.", english: "The generals lead the armies." },
            { greek: "οἱ ξενοι φερουσι τους λογους.", english: "The strangers bring the words." },
            { greek: "διδασκω τους ἀγγελους.", english: "I teach the messengers." },
            { greek: "οἱ θεοι φυλασσουσι τάς γάς.", english: "The gods guard the lands." },
            { greek: "ἀκουω τους λογους.", english: "I hear the words." }
        ]
    }
};

// Load all lesson content
function loadLessonData() {
    loadArticle();
    loadEndings();
    loadPractice();
    loadVocabulary();
    loadTranslations();
    loadQuickReference();
}

// Load Definite Article
function loadArticle() {
    const articleDiv = document.getElementById('article-content');
    if (!articleDiv) return;

    const data = currentView === 'singular' ? lessonData.article.singular : lessonData.article.plural;
    
    articleDiv.innerHTML = `
        <div class="article-table">
            <h4>Masculine</h4>
            <table>
                <tr>
                    <th>Nominative</th>
                    <th>Accusative</th>
                </tr>
                <tr>
                    <td class="greek-form">${data.masculine.nom}</td>
                    <td class="greek-form">${data.masculine.acc}</td>
                </tr>
            </table>
        </div>
        
        <div class="article-table">
            <h4>Feminine</h4>
            <table>
                <tr>
                    <th>Nominative</th>
                    <th>Accusative</th>
                </tr>
                <tr>
                    <td class="greek-form">${data.feminine.nom}</td>
                    <td class="greek-form">${data.feminine.acc}</td>
                </tr>
            </table>
        </div>
    `;
}

// Load Noun Endings
function loadEndings() {
    const endingsDiv = document.getElementById('endings-content');
    if (!endingsDiv) return;

    const data = currentView === 'singular' ? lessonData.endings.singular : lessonData.endings.plural;
    
    endingsDiv.innerHTML = `
        <div class="endings-box">
            <h4>${data.first.title}</h4>
            <p class="example">${data.first.example}</p>
            <table>
                <tr>
                    <th>Nominative</th>
                    <th>Accusative</th>
                </tr>
                <tr>
                    <td class="ending-form">${data.first.stem}${data.first.nom}</td>
                    <td class="ending-form">${data.first.stem}${data.first.acc}</td>
                </tr>
            </table>
        </div>
        
        <div class="endings-box">
            <h4>${data.second.title}</h4>
            <p class="example">${data.second.example}</p>
            <table>
                <tr>
                    <th>Nominative</th>
                    <th>Accusative</th>
                </tr>
                <tr>
                    <td class="ending-form">${data.second.stem}${data.second.nom}</td>
                    <td class="ending-form">${data.second.stem}${data.second.acc}</td>
                </tr>
            </table>
        </div>
    `;
}

// Load Practice Examples
function loadPractice() {
    const practiceDiv = document.getElementById('practice-content');
    if (!practiceDiv) return;

    const examples = currentView === 'singular' ? lessonData.practice.singular : lessonData.practice.plural;
    
    practiceDiv.innerHTML = examples.map((item, index) => `
        <div class="practice-card" onclick="togglePractice(${index})">
            <div class="practice-greek">${item.greek}</div>
            <div class="practice-answer" id="practice-${index}" style="display: none;">
                <div class="practice-english">${item.english}</div>
                <div class="practice-breakdown">${item.breakdown}</div>
                <div class="practice-info">${item.role}</div>
            </div>
            <div class="practice-hint" id="practice-hint-${index}">Click to reveal</div>
        </div>
    `).join('');
}

// Load Vocabulary
function loadVocabulary() {
    const vocabDiv = document.getElementById('vocabulary-content');
    if (!vocabDiv) return;
    
    vocabDiv.innerHTML = `
        <div class="vocab-column">
            <h4>1st Declension (Feminine)</h4>
            ${lessonData.vocabulary.first.map(word => `
                <div class="vocab-item">
                    <span class="vocab-greek">${word.greek}</span>
                    <span class="vocab-meaning">${word.meaning}</span>
                </div>
            `).join('')}
        </div>
        
        <div class="vocab-column">
            <h4>2nd Declension (Masculine)</h4>
            ${lessonData.vocabulary.second.map(word => `
                <div class="vocab-item">
                    <span class="vocab-greek">${word.greek}</span>
                    <span class="vocab-meaning">${word.meaning}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Load Quick Reference
function loadQuickReference() {
    const quickRefDiv = document.getElementById('quick-reference-content');
    if (!quickRefDiv) return;

    const points = currentView === 'singular' ? lessonData.quickReference.singular : lessonData.quickReference.plural;
    
    quickRefDiv.innerHTML = `
        <ul>
            ${points.map(point => `<li>${point}</li>`).join('')}
        </ul>
    `;
}

// Load Translation Sentences
function loadTranslations() {
    const translationsDiv = document.getElementById('translations-content');
    if (!translationsDiv) return;

    const sentences = currentView === 'singular' ? lessonData.translations.singular : lessonData.translations.plural;
    
    translationsDiv.innerHTML = sentences.map((item, index) => `
        <div class="translation-card" onclick="toggleTranslation(${index})">
            <div class="translation-greek">${item.greek}</div>
            <div class="translation-answer" id="translation-${index}" style="display: none;">
                <div class="translation-english">${item.english}</div>
            </div>
            <div class="translation-hint" id="translation-hint-${index}">Click to reveal</div>
        </div>
    `).join('');
}

// Toggle translation visibility
function toggleTranslation(index) {
    const answer = document.getElementById(`translation-${index}`);
    const hint = document.getElementById(`translation-hint-${index}`);
    
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        hint.style.display = 'none';
    } else {
        answer.style.display = 'none';
        hint.style.display = 'block';
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

// Switch to Singular view
function switchToSingular() {
    currentView = 'singular';
    updateToggleButtons();
    loadArticle();
    loadEndings();
    loadPractice();
    loadTranslations();
    loadQuickReference();
}

// Switch to Plural view
function switchToPlural() {
    currentView = 'plural';
    updateToggleButtons();
    loadArticle();
    loadEndings();
    loadPractice();
    loadTranslations();
    loadQuickReference();
}

// Update toggle button styles
function updateToggleButtons() {
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => {
        if ((currentView === 'singular' && btn.textContent === 'Singular') ||
            (currentView === 'plural' && btn.textContent === 'Plural')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Set current chapter
function setCurrentChapter(chapter) {
    window.currentChapter = chapter;
}
