// Lesson 2.1: The Genitive Case - Data File

const lessonData = {
    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "Beyond Nominative and Accusative",
                content: "Sentences would get rather boring if the only noun cases were <strong>nominative</strong> and <strong>accusative</strong>. In addition to these, there are three other main cases:"
            },
            {
                title: "The Three Additional Cases:",
                points: [
                    "<strong>genitive</strong> used to show possession e.g. the house <em>of the girl</em>",
                    "<strong>dative</strong> translated <em>to</em> or <em>for</em> e.g. I give the book <em>to the master</em>",
                    "<strong>ablative</strong> translated <em>by</em>, <em>with</em> or <em>from</em> e.g. we fight <em>with swords</em>"
                ]
            },
            {
                title: "The Genitive Case",
                content: "The genitive case is used to demonstrate <strong>possession</strong>. It is the <strong>possessor</strong> that goes into the genitive, not the thing they possess (e.g. in the phrase 'the house of the master', the master goes into the genitive)."
            },
            {
                title: "Etymology",
                content: "The term genitive is linked to the word <em>genesis</em> (origin). You might think of things that are owned by somebody as (in a sense) originating from them."
            }
        ]
    },

    // First Declension (puella) - now including genitive
    firstDeclension: {
        noun: "puella",
        meaning: "girl",
        type: "1st Declension (feminine)",
        cases: [
            {
                caseName: "Nominative Singular",
                latin: "puella",
                english: "the girl (subject)",
                usage: "puella ambulat (the girl walks)"
            },
            {
                caseName: "Accusative Singular",
                latin: "puellam",
                english: "the girl (object)",
                usage: "puellam video (I see the girl)"
            },
            {
                caseName: "Genitive Singular",
                latin: "puellae",
                english: "of the girl / the girl's",
                usage: "villa puellae (the girl's house)",
                highlight: true
            },
            {
                caseName: "Nominative Plural",
                latin: "puellae",
                english: "the girls (subject)",
                usage: "puellae ambulant (the girls walk)"
            },
            {
                caseName: "Accusative Plural",
                latin: "puellas",
                english: "the girls (object)",
                usage: "puellas video (I see the girls)"
            },
            {
                caseName: "Genitive Plural",
                latin: "puellarum",
                english: "of the girls / the girls'",
                usage: "villa puellarum (the girls' house)",
                highlight: true
            }
        ]
    },

    // Second Declension (dominus) - now including genitive
    secondDeclension: {
        noun: "dominus",
        meaning: "master",
        type: "2nd Declension (masculine)",
        cases: [
            {
                caseName: "Nominative Singular",
                latin: "dominus",
                english: "the master (subject)",
                usage: "dominus ambulat (the master walks)"
            },
            {
                caseName: "Accusative Singular",
                latin: "dominum",
                english: "the master (object)",
                usage: "dominum video (I see the master)"
            },
            {
                caseName: "Genitive Singular",
                latin: "domini",
                english: "of the master / the master's",
                usage: "villa domini (the master's house)",
                highlight: true
            },
            {
                caseName: "Nominative Plural",
                latin: "domini",
                english: "the masters (subject)",
                usage: "domini ambulant (the masters walk)"
            },
            {
                caseName: "Accusative Plural",
                latin: "dominos",
                english: "the masters (object)",
                usage: "dominos video (I see the masters)"
            },
            {
                caseName: "Genitive Plural",
                latin: "dominorum",
                english: "of the masters / the masters'",
                usage: "villa dominorum (the masters' house)",
                highlight: true
            }
        ]
    },

    // Translation Examples
    translationExamples: [
        {
            latin: "villam amicorum amamus.",
            method1: {
                title: "Method 1: Using 'of'",
                translation: "We like the house of the friends.",
                note: "More formal-sounding"
            },
            method2: {
                title: "Method 2: Using 's",
                translation: "We like the friends' house.",
                note: "More natural-sounding"
            }
        }
    ],

    // Example Sentences
    examples: [
        {
            latin: "servus domini non laborat.",
            english: "The slave of the master is not working. / The master's slave is not working.",
            explanation: "The verb <em>laborat</em> is singular, so you know that the subject must be singular. The subject must be <em>servus</em>, so <em>domini</em> must be genitive singular (not nominative plural)."
        },
        {
            latin: "gladius domini novus est.",
            english: "The master's sword is new.",
            explanation: "<em>domini</em> is genitive singular showing possession"
        },
        {
            latin: "villa puellarum magna est.",
            english: "The girls' house is big.",
            explanation: "<em>puellarum</em> is genitive plural showing possession"
        },
        {
            latin: "amicos dominorum amamus.",
            english: "We love the masters' friends.",
            explanation: "<em>dominorum</em> is genitive plural, <em>amicos</em> is accusative plural (object)"
        }
    ],

    // Textbook Exercises
    exercises: [
        {
            number: "Exercise 3.1",
            description: "Identify genitive case nouns in sentences"
        },
        {
            number: "Exercise 3.2",
            description: "Translate sentences using the genitive case"
        },
        {
            number: "Exercise 3.3",
            description: "Complete sentences with correct genitive endings"
        }
    ],

    // Grammar Tips
    grammarTips: {
        title: "Key Points About the Genitive:",
        points: [
            "<strong>Watch Out!</strong> In both <em>puella</em> and <em>dominus</em> the genitive singular and the nominative plural are identical",
            "<em>puell-ae</em> could be genitive singular OR nominative plural",
            "<em>domin-i</em> could be genitive singular OR nominative plural",
            "Use context clues (especially the verb) to work out which one you're dealing with!",
            "The genitive noun tends to come immediately after the thing possessed: <em>gladius domini</em> (the master's sword)",
            "Note how <em>puella</em> continues to use <strong>-a-</strong> in its endings",
            "Note how the genitive plurals are very similar, but use different vowels: <strong>-arum / -orum</strong>"
        ]
    },

    // Study Checklist
    checklist: [
        "Read about the three additional Latin cases",
        "Learn what the genitive case is used for",
        "Study the genitive endings for puella",
        "Study the genitive endings for dominus",
        "Learn the two ways to translate the genitive",
        "Practice identifying ambiguous endings using context",
        "Complete Exercise 3.1",
        "Complete Exercise 3.2",
        "Complete Exercise 3.3"
    ],

    // Quick Reference
    quickReference: {
        title: "Genitive Case Endings:",
        firstDeclension: [
            "Singular: -ae (e.g. puellae)",
            "Plural: -arum (e.g. puellarum)"
        ],
        secondDeclension: [
            "Singular: -i (e.g. domini)", 
            "Plural: -orum (e.g. dominorum)"
        ],
        note: "When a noun is listed in a wordlist, the genitive singular is given too: puella, -ae f (girl); dominus, -i m (master). This tells you which declension the noun belongs to!"
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
            if (section.content) {
                html += `<p><strong>${section.title}:</strong> ${section.content}</p>`;
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

    // Load First Declension Cases
    const firstDeclDiv = document.getElementById('first-declension-cases');
    if (firstDeclDiv) {
        firstDeclDiv.innerHTML = lessonData.firstDeclension.cases.map(caseItem => `
            <div class="case-card ${caseItem.highlight ? 'genitive-highlight' : ''}">
                <div class="case-label">${caseItem.caseName}</div>
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
            <div class="case-card ${caseItem.highlight ? 'genitive-highlight' : ''}">
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
                <div class="translation-methods">
                    <div class="translation-method" onclick="toggleMethod(this)">
                        <div class="method-title">${ex.method1.title}</div>
                        <div class="method-translation hidden">${ex.method1.translation}</div>
                        <div class="method-note hidden">${ex.method1.note}</div>
                    </div>
                    <div class="translation-method" onclick="toggleMethod(this)">
                        <div class="method-title">${ex.method2.title}</div>
                        <div class="method-translation hidden">${ex.method2.translation}</div>
                        <div class="method-note hidden">${ex.method2.note}</div>
                    </div>
                </div>
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
        quickRef.innerHTML = `
            <p><strong>${lessonData.quickReference.title}</strong></p>
            <p style="margin-top: 0.5rem;"><strong>1st Declension:</strong><br>${lessonData.quickReference.firstDeclension.join('<br>')}</p>
            <p style="margin-top: 0.5rem;"><strong>2nd Declension:</strong><br>${lessonData.quickReference.secondDeclension.join('<br>')}</p>
            <p style="margin-top: 1rem;">${lessonData.quickReference.note}</p>
        `;
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

// Function to toggle translation methods
function toggleMethod(methodElement) {
    const translation = methodElement.querySelector('.method-translation');
    const note = methodElement.querySelector('.method-note');
    
    translation.classList.toggle('hidden');
    note.classList.toggle('hidden');
}
