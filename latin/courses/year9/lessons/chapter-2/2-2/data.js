// Lesson 2.2: The Dative Case - Data File

const lessonData = {
    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "The Dative Case",
                content: "The dative case is used when a noun is the <strong>indirect object</strong>. The indirect object is a noun that is affected by the action of a sentence but is not the direct object of the verb:"
            },
            {
                title: "Example",
                content: "I give the money (direct object) <em>to the slave</em> (indirect object). In this example, money would be accusative (since it is on the receiving end of the verb) and slave would be dative."
            },
            {
                title: "Etymology",
                content: "The term dative comes from the Latin verb <em>do</em> (I give): one use of the dative is when one person gives a thing to someone else."
            },
            {
                title: "Translation",
                content: "The dative is usually translated with <strong>to</strong> or <strong>for</strong>."
            }
        ]
    },

    // First Declension (puella) - now including dative
    firstDeclension: {
        noun: "puella",
        meaning: "girl",
        type: "1st Decl (f)",
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
                usage: "villa puellae (the girl's house)"
            },
            {
                caseName: "Dative Singular",
                latin: "puellae",
                english: "to/for the girl",
                usage: "cibum puellae do (I give food to the girl)",
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
                usage: "villa puellarum (the girls' house)"
            },
            {
                caseName: "Dative Plural",
                latin: "puellis",
                english: "to/for the girls",
                usage: "cibum puellis damus (we give food to the girls)",
                highlight: true
            }
        ]
    },

    // Second Declension (dominus) - now including dative
    secondDeclension: {
        noun: "dominus",
        meaning: "master",
        type: "2nd Decl (m)",
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
                usage: "villa domini (the master's house)"
            },
            {
                caseName: "Dative Singular",
                latin: "domino",
                english: "to/for the master",
                usage: "cibum domino paramus (we prepare food for the master)",
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
                usage: "villa dominorum (the masters' house)"
            },
            {
                caseName: "Dative Plural",
                latin: "dominis",
                english: "to/for the masters",
                usage: "cibum dominis damus (we give food to the masters)",
                highlight: true
            }
        ]
    },

    // Translation Examples
    translationExamples: [
        {
            latin: "cibum domino paramus.",
            method1: {
                title: "Method 1: Using 'for'",
                translation: "We prepare the food for the master.",
                note: "Emphasizes benefit/purpose"
            },
            method2: {
                title: "Method 2: Using 'to'",
                translation: "We prepare the food to the master.",
                note: "Less common but grammatically correct"
            }
        },
        {
            latin: "pecuniam domino damus.",
            method1: {
                title: "Method 1: Indirect object first",
                translation: "We give the master money.",
                note: "Natural English word order"
            },
            method2: {
                title: "Method 2: Using 'to'",
                translation: "We give money to the master.",
                note: "Shows the dative relationship clearly"
            }
        }
    ],

    // New verb introduction
    newVerb: {
        verb: "do",
        meaning: "I give",
        conjugation: "1st conjugation (like porto)",
        forms: [
            { person: "1st singular", latin: "do", english: "I give" },
            { person: "2nd singular", latin: "das", english: "you give" },
            { person: "3rd singular", latin: "dat", english: "he/she/it gives" },
            { person: "1st plural", latin: "damus", english: "we give" },
            { person: "2nd plural", latin: "datis", english: "you (all) give" },
            { person: "3rd plural", latin: "dant", english: "they give" }
        ]
    },

    // Example Sentences
    examples: [
        {
            latin: "pecuniam domino damus.",
            english: "We give money to the master. / We give the master money.",
            explanation: "<em>pecuniam</em> is accusative (direct object), <em>domino</em> is dative (indirect object)"
        },
        {
            latin: "cibum puellis paramus.",
            english: "We prepare food for the girls.",
            explanation: "<em>cibum</em> is accusative (what is prepared), <em>puellis</em> is dative plural (who benefits)"
        },
        {
            latin: "librum amico do.",
            english: "I give a book to my friend.",
            explanation: "<em>librum</em> is accusative (what is given), <em>amico</em> is dative (who receives)"
        },
        {
            latin: "servus domino aquam portat.",
            english: "The slave carries water to the master.",
            explanation: "<em>servus</em> is nominative (subject), <em>domino</em> is dative (recipient), <em>aquam</em> is accusative (object)"
        },
        {
            latin: "magistra puellis fabulam narrat.",
            english: "The teacher tells a story to the girls.",
            explanation: "<em>magistra</em> is nominative (subject), <em>puellis</em> is dative plural (audience), <em>fabulam</em> is accusative (what is told)"
        }
    ],

    // Textbook Exercises
    exercises: [
        {
            number: "Exercise 4.1",
            description: "Identify dative case nouns in sentences"
        },
        {
            number: "Exercise 4.2",
            description: "Translate sentences using the dative case"
        },
        {
            number: "Exercise 4.3",
            description: "Complete sentences with correct dative endings"
        },
        {
            number: "Exercise 4.4",
            description: "Practice with the verb 'do' and indirect objects"
        }
    ],

    // Grammar Tips
    grammarTips: {
        title: "Key Points About the Dative:",
        points: [
            "<strong>Watch Out!</strong> For <em>puella</em>, the dative singular is identical to the genitive singular AND the nominative plural",
            "<em>puell-ae</em> could be genitive singular, dative singular, OR nominative plural",
            "<em>domin-i</em> could be genitive singular OR nominative plural (but NOT dative)",
            "The dative plural is the same for both declensions: <strong>-is</strong> (puellis, dominis)",
            "Special note: <em>dea</em> has an irregular dative plural <strong>deabus</strong> to distinguish it from <em>deus</em> (deis)",
            "The verb <em>do</em> (I give) follows the same pattern as <em>porto</em>: do, das, dat, damus, datis, dant",
            "In English, if you put the indirect object first, the word 'to' is omitted: 'We give the master money' = 'We give money to the master'"
        ]
    },

    // Study Checklist
    checklist: [
        "Read about the dative case and indirect objects",
        "Learn what the dative case is used for",
        "Study the dative endings for puella",
        "Study the dative endings for dominus",
        "Learn the two ways to translate the dative",
        "Learn the new verb 'do' (I give)",
        "Practice identifying ambiguous endings using context",
        "Complete Exercise 4.1",
        "Complete Exercise 4.2",
        "Complete Exercise 4.3",
        "Complete Exercise 4.4"
    ],

    // Quick Reference
    quickReference: {
        title: "Dative Case Endings:",
        firstDeclension: [
            "Singular: -ae (e.g. puellae)",
            "Plural: -is (e.g. puellis)"
        ],
        secondDeclension: [
            "Singular: -o (e.g. domino)", 
            "Plural: -is (e.g. dominis)"
        ],
        note: "Remember: The dative plural ending -is is the same for both declensions! Also remember the irregular form: dea → deabus (dative plural)."
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
            <div class="case-card ${caseItem.highlight ? 'dative-highlight' : ''}">
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
            <div class="case-card ${caseItem.highlight ? 'dative-highlight' : ''}">
                <div class="case-label">${caseItem.caseName}</div>
                <div class="latin-form">${caseItem.latin}</div>
                <div class="english-translation">${caseItem.english}</div>
                <div class="usage-example">${caseItem.usage}</div>
            </div>
        `).join('');
    }

    // Load New Verb Conjugation
    const verbSection = document.getElementById('new-verb-section');
    if (verbSection) {
        let verbHtml = `
            <h3 class="section-title">New Verb: ${lessonData.newVerb.verb} (${lessonData.newVerb.meaning})</h3>
            <p class="verb-note">${lessonData.newVerb.conjugation}</p>
            <div class="verb-grid">
        `;
        lessonData.newVerb.forms.forEach(form => {
            verbHtml += `
                <div class="verb-form">
                    <div class="verb-person">${form.person}</div>
                    <div class="verb-latin">${form.latin}</div>
                    <div class="verb-english">${form.english}</div>
                </div>
            `;
        });
        verbHtml += '</div>';
        verbSection.innerHTML = verbHtml;
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
