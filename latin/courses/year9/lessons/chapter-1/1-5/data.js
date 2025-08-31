// Lesson 1.5: The Verb 'to be' (sum) - Data File

const lessonData = {
    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "The Most Important Verb",
                content: "'To be' is the most common verb in almost every language. In English, we say 'I am', 'you are', 'he is' - notice how it changes completely! Latin does the same thing."
            },
            {
                title: "Why is 'sum' special?",
                content: "Unlike regular verbs (like porto), sum doesn't follow any pattern we've learned. It's completely irregular - but don't worry, it's so common that you'll learn it quickly!"
            },
            {
                title: "What does 'to be' mean?",
                content: "The verb 'sum' tells us that something exists or describes what something is. It's like an equals sign: 'puella est' = 'the girl is' or 'there is a girl'."
            },
            {
                title: "Using 'sum' in sentences:",
                points: [
                    "'Sum' often links two things together: 'Marcus est dominus' = 'Marcus is the master'",
                    "It can show existence: 'sunt puellae' = 'there are girls'",
                    "It describes qualities: 'Roma est magna' = 'Rome is great'",
                    "No direct object! 'Sum' never takes an accusative - everything stays nominative"
                ]
            }
        ]
    },

    // Conjugation
    conjugation: {
        singular: [
            {
                person: "1st Person",
                latin: "sum",
                english: "I am",
                note: "Just 3 letters!"
            },
            {
                person: "2nd Person",
                latin: "es",
                english: "you are",
                note: "Even shorter - 2 letters!"
            },
            {
                person: "3rd Person",
                latin: "est",
                english: "he/she/it is OR there is",
                note: "Like English 'is'"
            }
        ],
        plural: [
            {
                person: "1st Person",
                latin: "sumus",
                english: "we are",
                note: "Starts like 'sum'"
            },
            {
                person: "2nd Person",
                latin: "estis",
                english: "you (pl.) are",
                note: "Starts like 'est'"
            },
            {
                person: "3rd Person",
                latin: "sunt",
                english: "they are OR there are",
                note: "Back to 's' sound"
            }
        ]
    },

    // Usage Examples
    usage: [
        {
            type: "Identity",
            icon: "👤",
            example: "ego sum Marcus",
            translation: "I am Marcus",
            explanation: "Stating who someone is"
        },
        {
            type: "Location",
            icon: "📍",
            example: "puellae sunt in horto",
            translation: "the girls are in the garden",
            explanation: "Showing where something is"
        },
        {
            type: "Description",
            icon: "✨",
            example: "dominus est iratus",
            translation: "the master is angry",
            explanation: "Describing a quality or state"
        },
        {
            type: "Existence",
            icon: "💫",
            example: "sunt multi servi",
            translation: "there are many slaves",
            explanation: "Saying something exists"
        }
    ],

   // Example Sentences (interactive)
    examples: [
        {
            latin: "dominus sum.",
            english: "I am the master.",
            explanation: "sum = 1st person singular, dominus stays nominative"
        },
        {
            latin: "clamo.",
            english: "I shout.",
            explanation: "clamo = 1st person singular of clamare (regular verb for comparison)"
        },
        {
            latin: "ancilla pugnat.",
            english: "The slave-girl fights.",
            explanation: "pugnat = 3rd person singular, ancilla is nominative"
        },
        {
            latin: "puella dea est.",
            english: "The girl is a goddess.",
            explanation: "est = 3rd person singular, both puella and dea stay nominative"
        },
        {
            latin: "dominus et servus pugnant, sed amici sunt.",
            english: "The master and slave fight, but they are friends.",
            explanation: "pugnant = 3rd person plural (regular verb), sunt = 3rd person plural of sum"
        },
        {
            latin: "servi sunt et laborant.",
            english: "There are slaves and they work.",
            explanation: "sunt = 'there are' (showing existence), laborant = 3rd person plural"
        }
    ],

    // Common Phrases
    phrases: [
        {
            latin: "quis es?",
            english: "who are you?",
            usage: "Asking identity"
        },
        {
            latin: "ubi est?",
            english: "where is (it)?",
            usage: "Asking location"
        },
        {
            latin: "quot sunt?",
            english: "how many are there?",
            usage: "Asking quantity"
        },
        {
            latin: "quid est?",
            english: "what is it?",
            usage: "Asking for identification"
        },
        {
            latin: "non sum",
            english: "I am not",
            usage: "Negation"
        },
        {
            latin: "ecce sunt!",
            english: "look, there are!",
            usage: "Pointing out"
        }
    ],

    // Textbook Exercises
    exercises: [
        {
            number: "Exercise 3.1",
            description: "Practice conjugating sum in all persons"
        },
        {
            number: "Exercise 3.2",
            description: "Translate sentences using sum with nominative nouns"
        },
        {
            number: "Exercise 3.3",
            description: "Complete sentences with the correct form of sum"
        }
    ],

    // Grammar Tips
    grammarTips: {
        title: "Remember about 'sum':",
        points: [
            "🚫 No pattern: Sum doesn't follow -o, -s, -t, -mus, -tis, -nt like regular verbs",
            "📝 Memorise: These 6 forms are so common, you'll know them by heart soon",
            "🔄 No object: Sum never has an accusative object - everything stays nominative",
            "➡️ Linking: Sum links the subject to a description or identity",
            "❓ Questions: Often used in questions - 'quis es?' (who are you?)",
            "✨ Super common: You'll see sum in almost every Latin text you read!"
        ]
    },

    // Study Checklist
    checklist: [
        "Memorise all 6 forms of sum",
        "Understand why sum is irregular",
        "Practice the example sentences",
        "Learn the common question phrases",
        "Complete Exercise 3.1",
        "Complete Exercise 3.2",
        "Complete Exercise 3.3",
        "Test yourself on sum vs regular verbs"
    ],

    // Quick Reference
    quickReference: {
        title: "Sum at a Glance:",
        content: [
            {
                heading: "Singular:",
                items: "sum (I am) • es (you are) • est (he/she/it is)"
            },
            {
                heading: "Plural:",
                items: "sumus (we are) • estis (you are) • sunt (they are)"
            },
            {
                heading: "Remember:",
                items: "No pattern! Just memorise these 6 forms."
            },
            {
                heading: "Never forget:",
                items: "Everything with sum stays NOMINATIVE!"
            }
        ]
    }
};

// Function to load all data into the HTML
function loadLessonData() {
    // Load Grammar Explanation
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

    // Load Singular Forms
    const singularDiv = document.getElementById('singular-forms');
    if (singularDiv) {
        singularDiv.innerHTML = lessonData.conjugation.singular.map(form => `
            <div class="sum-card">
                <div class="person-label">${form.person}</div>
                <div class="latin-form-large">${form.latin}</div>
                <div class="english-translation">${form.english}</div>
                <div class="form-note">${form.note}</div>
            </div>
        `).join('');
    }

    // Load Plural Forms
    const pluralDiv = document.getElementById('plural-forms');
    if (pluralDiv) {
        pluralDiv.innerHTML = lessonData.conjugation.plural.map(form => `
            <div class="sum-card">
                <div class="person-label">${form.person}</div>
                <div class="latin-form-large">${form.latin}</div>
                <div class="english-translation">${form.english}</div>
                <div class="form-note">${form.note}</div>
            </div>
        `).join('');
    }

    // Load Usage Examples
    const usageGrid = document.getElementById('usage-grid');
    if (usageGrid) {
        usageGrid.innerHTML = lessonData.usage.map(use => `
            <div class="usage-card">
                <div class="usage-icon">${use.icon}</div>
                <div class="usage-type">${use.type}</div>
                <div class="usage-example">${use.example}</div>
                <div class="usage-translation">${use.translation}</div>
                <div class="usage-explanation">${use.explanation}</div>
            </div>
        `).join('');
    }

    // Load Example Sentences (interactive)
    const examplesList = document.getElementById('examples-list');
    if (examplesList) {
        examplesList.innerHTML = lessonData.examples.map((ex, index) => `
            <div class="example-item" onclick="toggleTranslation(${index})">
                <div class="example-latin">${ex.latin}</div>
                <div class="example-content" id="example-${index}" style="display: none;">
                    <div class="example-english">${ex.english}</div>
                    <div class="example-explanation">${ex.explanation}</div>
                </div>
                <div class="click-hint" id="hint-${index}">Click to reveal translation</div>
            </div>
        `).join('');
    }

    // Load Common Phrases
    const phrasesGrid = document.getElementById('phrases-grid');
    if (phrasesGrid) {
        phrasesGrid.innerHTML = lessonData.phrases.map(phrase => `
            <div class="phrase-card">
                <div class="phrase-latin">${phrase.latin}</div>
                <div class="phrase-english">${phrase.english}</div>
                <div class="phrase-usage">${phrase.usage}</div>
            </div>
        `).join('');
    }

    // Load Exercises
    const exerciseList = document.getElementById('exercise-list');
    if (exerciseList) {
        exerciseList.innerHTML = lessonData.exercises.map(ex => `
            <div class="exercise-reference">
                <div class="exercise-number">${ex.number}</div>
                <div class="exercise-description">${ex.description}</div>
            </div>
        `).join('');
    }

    // Load Grammar Tips
    const tipsContent = document.getElementById('grammar-tips-content');
    if (tipsContent) {
        let tipsHtml = `<p><strong>${lessonData.grammarTips.title}</strong></p><ul style="list-style: none;">`;
        lessonData.grammarTips.points.forEach(point => {
            tipsHtml += `<li style="margin-bottom: 0.5rem;">${point}</li>`;
        });
        tipsHtml += '</ul>';
        tipsContent.innerHTML = tipsHtml;
    }

    // Load Study Checklist
    const checklist = document.getElementById('study-checklist');
    if (checklist) {
        checklist.innerHTML = lessonData.checklist.map((item, index) => `
            <div class="checklist-row">
                <label class="checklist-item">
                    <input type="checkbox"> ${item}
                </label>
                <button class="do-now-btn" id="do-now-${index}" onclick="markAsDoingNow(${index})">Do now</button>
            </div>
        `).join('');
    }

    // Load Quick Reference
    const quickRef = document.getElementById('quick-reference-content');
    if (quickRef) {
        let refHtml = `<p><strong>${lessonData.quickReference.title}</strong></p>`;
        lessonData.quickReference.content.forEach(item => {
            refHtml += `<p style="margin-top: 0.75rem;"><strong>${item.heading}</strong><br>${item.items}</p>`;
        });
        quickRef.innerHTML = refHtml;
    }
}

// Function to toggle translation visibility
function toggleTranslation(index) {
    const content = document.getElementById(`example-${index}`);
    const hint = document.getElementById(`hint-${index}`);
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        hint.style.display = 'none';
    } else {
        content.style.display = 'none';
        hint.style.display = 'block';
    }
}
