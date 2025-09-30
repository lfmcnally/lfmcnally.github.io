// Lesson 2.3: The Ablative Case - Data File

const lessonData = {
    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "The Ablative Case",
                content: "The ablative case is the last of the five main cases in Latin. It has a range of uses and meanings. When it appears <strong>by itself</strong> (without a preposition), it can mean <strong>by</strong>, <strong>with</strong>, or <strong>from</strong>."
            },
            {
                title: "Etymology",
                content: "The term <em>ablative</em> comes from part of a Latin verb meaning 'I take away'. This captures one important use of the ablative: expressing the idea of <strong>separation</strong> or <strong>taking away from</strong>."
            },
            {
                title: "Translation",
                content: "You will need to think carefully about which translation - <strong>by</strong>, <strong>with</strong>, or <strong>from</strong> - works best in context. For example: <em>servus nuntium gladio necat</em> = 'The slave kills the messenger <strong>with</strong> a sword.'"
            },
            {
                title: "With Prepositions",
                content: "More commonly, an ablative noun follows a preposition that takes the ablative case. We'll learn these prepositions in the next lesson!"
            }
        ]
    },

    // First Declension (puella) - now including ablative
    firstDeclension: {
        noun: "puella",
        meaning: "girl",
        type: "1st Decl (f)",
        cases: [
            {
                caseName: "Nominative Singular",
                latin: "puella",
                english: "the girl (subject)",
                usage: "puella ambulat<br>(the girl walks)"
            },
            {
                caseName: "Accusative Singular",
                latin: "puellam",
                english: "the girl (object)",
                usage: "puellam video<br>(I see the girl)"
            },
            {
                caseName: "Genitive Singular",
                latin: "puellae",
                english: "of the girl / the girl's",
                usage: "villa puellae<br>(the girl's house)"
            },
            {
                caseName: "Dative Singular",
                latin: "puellae",
                english: "to/for the girl",
                usage: "cibum puellae do<br>(I give food to the girl)"
            },
            {
                caseName: "Ablative Singular",
                latin: "puellā",
                english: "by/with/from the girl",
                usage: "cum puellā ambulo<br>(I walk with the girl)",
                highlight: true,
                note: "(long ā)"
            },
            {
                caseName: "Nominative Plural",
                latin: "puellae",
                english: "the girls (subject)",
                usage: "puellae ambulant<br>(the girls walk)"
            },
            {
                caseName: "Accusative Plural",
                latin: "puellas",
                english: "the girls (object)",
                usage: "puellas video<br>(I see the girls)"
            },
            {
                caseName: "Genitive Plural",
                latin: "puellarum",
                english: "of the girls / the girls'",
                usage: "villa puellarum<br>(the girls' house)"
            },
            {
                caseName: "Dative Plural",
                latin: "puellis",
                english: "to/for the girls",
                usage: "cibum puellis damus<br>(we give food to the girls)"
            },
            {
                caseName: "Ablative Plural",
                latin: "puellis",
                english: "by/with/from the girls",
                usage: "cum puellis ludo<br>(I play with the girls)",
                highlight: true
            }
        ]
    },

    // Second Declension (dominus) - now including ablative
    secondDeclension: {
        noun: "dominus",
        meaning: "master",
        type: "2nd Decl (m)",
        cases: [
            {
                caseName: "Nominative Singular",
                latin: "dominus",
                english: "the master (subject)",
                usage: "dominus ambulat<br>(the master walks)"
            },
            {
                caseName: "Accusative Singular",
                latin: "dominum",
                english: "the master (object)",
                usage: "dominum video<br>(I see the master)"
            },
            {
                caseName: "Genitive Singular",
                latin: "domini",
                english: "of the master / the master's",
                usage: "villa domini<br>(the master's house)"
            },
            {
                caseName: "Dative Singular",
                latin: "domino",
                english: "to/for the master",
                usage: "cibum domino paramus<br>(we prepare food for the master)"
            },
            {
                caseName: "Ablative Singular",
                latin: "domino",
                english: "by/with/from the master",
                usage: "cum domino laboro<br>(I work with the master)",
                highlight: true
            },
            {
                caseName: "Nominative Plural",
                latin: "domini",
                english: "the masters (subject)",
                usage: "domini ambulant<br>(the masters walk)"
            },
            {
                caseName: "Accusative Plural",
                latin: "dominos",
                english: "the masters (object)",
                usage: "dominos video<br>(I see the masters)"
            },
            {
                caseName: "Genitive Plural",
                latin: "dominorum",
                english: "of the masters / the masters'",
                usage: "villa dominorum<br>(the masters' house)"
            },
            {
                caseName: "Dative Plural",
                latin: "dominis",
                english: "to/for the masters",
                usage: "cibum dominis damus<br>(we give food to the masters)"
            },
            {
                caseName: "Ablative Plural",
                latin: "dominis",
                english: "by/with/from the masters",
                usage: "cum dominis ceno<br>(I dine with the masters)",
                highlight: true
            }
        ]
    },

    // Translation Examples
    translationExamples: [
        {
            latin: "servus dominum gladio necat.",
            meanings: [
                {
                    title: "WITH (instrument)",
                    translation: "The slave kills the master with a sword.",
                    explanation: "The ablative shows the instrument or tool used"
                },
            ]
        },
        {
            latin: "puella villa ambulat.",
            meanings: [
                {
                    title: "FROM (separation)",
                    translation: "The girl walks from the house.",
                    explanation: "The ablative shows movement away from something"
                }
            ]
        },
        {
            latin: "epistula puella scribitur.",
            meanings: [
                {
                    title: "BY (agent)",
                    translation: "The letter is written by the girl.",
                    explanation: "The ablative shows who performs the action"
                }
            ]
        }
    ],

    // Practice Exercises
    practiceExercises: [
        {
            id: 1,
            instruction: "Identify the ablative case ending",
            latin: "puella",
            question: "What is the ablative singular of puella?",
            answer: "puellā",
            hint: "remember the long ā"
        },
        {
            id: 2,
            instruction: "Identify the ablative case ending",
            latin: "dominus",
            question: "What is the ablative singular of dominus?",
            answer: "domino",
            hint: "same as dative singular"
        },
        {
            id: 3,
            instruction: "Choose the correct translation",
            latin: "servus gladio pugnat",
            question: "How should 'gladio' be translated?",
            answer: "with a sword",
            hint: "instrument = 'with'"
        },
        {
            id: 4,
            instruction: "Identify the case",
            latin: "puellis",
            question: "What cases could 'puellis' be?",
            answer: "dative or ablative plural",
            hint: "two cases share this ending"
        },
        {
            id: 5,
            instruction: "Complete the sentence",
            latin: "epistula _____ scribitur",
            question: "Fill in: 'The letter is written by the girl'",
            answer: "puellā",
            hint: "agent = ablative"
        },
        {
            id: 6,
            instruction: "Translate",
            latin: "cum amicis",
            question: "Translate 'cum amicis'",
            answer: "with friends",
            hint: "cum + ablative = with"
        }
    ],

    // Example Sentences
    examples: [
        {
            latin: "servus nuntium gladio necat.",
            english: "The slave kills the messenger with a sword.",
            explanation: "<em>gladio</em> is ablative singular (instrument - what is used to kill)"
        },
        {
            latin: "puella villa currit.",
            english: "The girl runs from the house.",
            explanation: "<em>villa</em> is ablative singular (separation - running away from)"
        },
        {
            latin: "epistula domino scribitur.",
            english: "The letter is written by the master.",
            explanation: "<em>domino</em> is ablative singular (agent - who does the writing)"
        },
        {
            latin: "puer cum amicis ludit.",
            english: "The boy plays with friends.",
            explanation: "<em>amicis</em> is ablative plural (accompaniment - playing together with)"
        },
        {
            latin: "servus mensa cibum parat.",
            english: "The slave prepares food on/at the table.",
            explanation: "<em>mensa</em> is ablative singular (place where - location)"
        },
        {
            latin: "puellae aqua lavantur.",
            english: "The girls wash (themselves) with water.",
            explanation: "<em>aqua</em> is ablative singular (means - what is used for washing)"
        }
    ],

    // Textbook Exercises
    exercises: [
        {
            number: "Exercise 5.1",
            description: "Identify ablative case nouns in sentences"
        },
        {
            number: "Exercise 5.2",
            description: "Choose between 'by', 'with', or 'from' translations"
        },
        {
            number: "Exercise 5.3",
            description: "Complete sentences with correct ablative endings"
        },
        {
            number: "Exercise 5.4",
            description: "Distinguish between dative and ablative uses"
        }
    ],

    // Grammar Tips
    grammarTips: {
        title: "Key Points About the Ablative:",
        points: [
            "<strong>Important!</strong> The -ā in the ablative singular of <em>puella</em> is pronounced LONG (puellā), while the -a in nominative singular is short",
            "For <em>dominus</em>, the dative and ablative singular are identical: both are <em>domino</em>",
            "The dative and ablative plural are always the same: <strong>-is</strong> for both declensions",
            "Context is crucial! Look at the verb to determine if a word ending in -is or -o is dative or ablative",
            "<strong>Translation tips:</strong><br>• WITH = instrument or accompaniment<br>• FROM = separation or source<br>• BY = agent (who does something)",
            "The ablative often appears with prepositions (which we'll learn next lesson!)",
            "Remember: All instances where a word could be several cases must be judged from context"
        ]
    },

    // Study Checklist
    checklist: [
        "Read about the ablative case and its meanings",
        "Learn the three basic translations: by, with, from",
        "Study the ablative endings for puella (note the long ā)",
        "Study the ablative endings for dominus",
        "Practise distinguishing dative from ablative",
        "Complete the practice exercises",
        "Review all five cases learned so far",
        "Complete Exercise 5.1",
        "Complete Exercise 5.2",
        "Complete Exercise 5.3",
        "Complete Exercise 5.4"
    ],

    // Quick Reference
    quickReference: {
        title: "Ablative Case Endings:",
        firstDeclension: [
            "Singular: -ā (long ā) (e.g. puellā)",
            "Plural: -is (e.g. puellis)"
        ],
        secondDeclension: [
            "Singular: -o (e.g. domino)", 
            "Plural: -is (e.g. dominis)"
        ],
        meanings: [
            "<strong>BY</strong> - agent/person doing something",
            "<strong>WITH</strong> - instrument/accompaniment",
            "<strong>FROM</strong> - separation/source"
        ],
        note: "Remember: Ablative plural -is is identical to dative plural for both declensions!"
    },

    // Navigation Links (same as other lessons)
    navigation: {
        additionalSites: [
            { text: "Perseus Digital Library", url: "https://www.perseus.tufts.edu/" },
            { text: "The Latin Library", url: "https://www.thelatinlibrary.com/" },
            { text: "Loeb Classical Library", url: "https://www.loebclassics.com/" },
            { text: "The Owl", url: "https://sites.google.com/view/theowlclassics/home" }
        ],
        teachingResources: [
            { text: "Cambridge Latin Course", url: "https://www.cambridgescp.com/" },
            { text: "Hands Up Education", url: "https://www.hands-up-education.org/" },
            { text: "Classics Library", url: "https://www.theclassicslibrary.com/" },
            { text: "Massolit Classics", url: "https://www.massolit.io/subjects/classics/landing" },
            { text: "Classical Association", url: "https://www.classicalassociation.org/" }
        ],
        specifications: [
            { text: "OCR A Level Latin", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/latin-h043-h443-from-2016/" },
            { text: "OCR A Level Greek", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/latin-h043-h443-from-2016/" },
            { text: "OCR A Level Classics", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/classical-civilisation-h008-h408-from-2017/" },
            { text: "OCR GCSE Latin", url: "https://www.ocr.org.uk/qualifications/gcse/latin-j282-from-2016/" },
            { text: "OCR GCSE Greek", url: "https://www.ocr.org.uk/qualifications/gcse/classical-greek-j292-from-2016/" },
            { text: "OCR GCSE Classics", url: "https://www.ocr.org.uk/qualifications/gcse/classical-civilisation-j199-from-2017/" }
        ]
    },

    // Modal Content (same as other lessons)
    modalContent: {
        text: [
            "Thank you for checking out Classicalia! I'm Lawrence and I teach Latin and Classics in Bristol.",
            "I have a BA in Ancient History from King's College London, a PGCE in Latin with Classics from the University of Cambridge and an MEd (Transforming Practice) from Darwin College, Cambridge. I am particularly interested in Tacitean studies and the history of memory in classical antiquity. In 2021 I won the Classical Association's 'Outstanding New Teacher' award.",
            "I also enjoy creating teacher guides and student workbooks. Please feel free to use my resources!",
            "If you have any feedback, thoughts or questions, please don't hesitate to get in touch!"
        ],
        contacts: [
            {
                icon: "🐦",
                label: "Follow me on Twitter",
                value: "@lfmcnally",
                url: "https://twitter.com/lfmcnally"
            },
            {
                icon: "🎵",
                label: "Follow me on TikTok",
                value: "@classicalcivilisation",
                url: "https://www.tiktok.com/@classicalcivilisation"
            },
            {
                icon: "💼",
                label: "Connect on LinkedIn",
                value: "Lawrence McNally",
                url: "https://www.linkedin.com/in/lawrence-mcnally-318651116/"
            },
            {
                icon: "☕",
                label: "Buy me a coffee",
                value: "@lfmcnally",
                url: "https://buymeacoffee.com/lfmcnally"
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
            html += `<p><strong>${section.title}:</strong> ${section.content}</p>`;
        });
        grammarContent.innerHTML = html;
    }

    // Load First Declension Cases
    const firstDeclDiv = document.getElementById('first-declension-cases');
    if (firstDeclDiv) {
        firstDeclDiv.innerHTML = lessonData.firstDeclension.cases.map(caseItem => `
            <div class="case-card ${caseItem.highlight ? 'ablative-highlight' : ''}">
                <div class="case-label">${caseItem.caseName} ${caseItem.note ? `<span class="case-note">${caseItem.note}</span>` : ''}</div>
                <div class="latin-form">${caseItem.latin}</div>
                <div class="english-translation">${caseItem.english}</div>
                <div class="usage-example">${caseItem.usage}</div>
            </div>
        `).join('');
    }

    // Load Second Declension Cases
    const secondDeclDiv = document.getElementById('second-declension-cases');
    if (secondDeclDiv) {
        secondDeclDiv.innerHTML = lessonData.secondDeclension.cases.map(caseItem => `
            <div class="case-card ${caseItem.highlight ? 'ablative-highlight' : ''}">
                <div class="case-label">${caseItem.caseName}</div>
                <div class="latin-form">${caseItem.latin}</div>
                <div class="english-translation">${caseItem.english}</div>
                <div class="usage-example">${caseItem.usage}</div>
            </div>
        `).join('');
    }

    // Load Translation Examples
    const translationDiv = document.getElementById('translation-examples');
    if (translationDiv) {
        translationDiv.innerHTML = lessonData.translationExamples.map(ex => `
            <div class="translation-example">
                <div class="latin-sentence">${ex.latin}</div>
                <div class="translation-meanings">
                    ${ex.meanings.map(meaning => `
                        <div class="meaning-card">
                            <div class="meaning-title">${meaning.title}</div>
                            <div class="meaning-translation">${meaning.translation}</div>
                            <div class="meaning-explanation">${meaning.explanation}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Load Practice Exercises
    const practiceDiv = document.getElementById('practice-exercises');
    if (practiceDiv) {
        practiceDiv.innerHTML = lessonData.practiceExercises.map(ex => `
            <div class="practice-card">
                <div class="practice-instruction">${ex.instruction}</div>
                <div class="practice-latin">${ex.latin}</div>
                <div class="practice-question">${ex.question}</div>
                <div class="practice-input-group">
                    <input type="text" 
                           id="answer-${ex.id}" 
                           class="practice-input"
                           data-correct="${ex.answer}"
                           data-hint="${ex.hint}"
                           placeholder="Type your answer...">
                    <button onclick="checkAnswer(${ex.id})" class="check-btn">Check</button>
                    <button onclick="showAnswer(${ex.id})" class="show-btn">Show</button>
                </div>
                <div id="feedback-${ex.id}" class="feedback"></div>
            </div>
        `).join('');
    }

    // Load Example Sentences
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
        let tipsHtml = `<p><strong>${lessonData.grammarTips.title}</strong></p><ul>`;
        lessonData.grammarTips.points.forEach(point => {
            tipsHtml += `<li>${point}</li>`;
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
        let refHtml = `
            <p><strong>${lessonData.quickReference.title}</strong></p>
            <p style="margin-top: 0.5rem;"><strong>1st Declension:</strong><br>${lessonData.quickReference.firstDeclension.join('<br>')}</p>
            <p style="margin-top: 0.5rem;"><strong>2nd Declension:</strong><br>${lessonData.quickReference.secondDeclension.join('<br>')}</p>
            <p style="margin-top: 1rem;"><strong>Meanings:</strong><br>${lessonData.quickReference.meanings.join('<br>')}</p>
            <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">${lessonData.quickReference.note}</p>
        `;
        quickRef.innerHTML = refHtml;
    }

    // Load Navigation Links
    const additionalSites = document.getElementById('additional-sites-links');
    if (additionalSites) {
        additionalSites.innerHTML = lessonData.navigation.additionalSites.map(link => 
            `<a href="${link.url}" target="_blank" class="nav-link">${link.text}</a>`
        ).join('');
    }

    const teachingResources = document.getElementById('teaching-resources-links');
    if (teachingResources) {
        teachingResources.innerHTML = lessonData.navigation.teachingResources.map(link => 
            `<a href="${link.url}" target="_blank" class="nav-link">${link.text}</a>`
        ).join('');
    }

    const specifications = document.getElementById('specifications-links');
    if (specifications) {
        specifications.innerHTML = lessonData.navigation.specifications.map(link => 
            `<a href="${link.url}" target="_blank" class="nav-link">${link.text}</a>`
        ).join('');
    }

    // Load Modal Content
    const modalText = document.getElementById('modal-text-content');
    if (modalText) {
        modalText.innerHTML = lessonData.modalContent.text.map(paragraph => 
            `<p>${paragraph}</p>`
        ).join('');
    }

    const contactItems = document.getElementById('contact-items');
    if (contactItems) {
        contactItems.innerHTML = lessonData.modalContent.contacts.map(contact => `
            <div class="contact-item">
                <a href="${contact.url}" target="_blank" rel="noopener noreferrer">
                    <div class="contact-icon">${contact.icon}</div>
                    <div class="contact-info">
                        <div class="contact-label">${contact.label}</div>
                        <div class="contact-value">${contact.value}</div>
                    </div>
                </a>
            </div>
        `).join('');
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
