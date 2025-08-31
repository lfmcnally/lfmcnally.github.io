// Lesson 1.3: Nominative & Accusative Singular - Data File

const lessonData = {
    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "What are cases?",
                content: "In Latin, nouns change their endings to show their job in the sentence. These different forms are called 'cases'. Today we'll learn two important cases."
            },
            {
                title: "The Nominative Case",
                content: "The nominative case is used for the <strong>subject</strong> of the sentence - the person or thing doing the action. In English, this is the noun that comes before the verb."
            },
            {
                title: "The Accusative Case", 
                content: "The accusative case is used for the <strong>direct object</strong> - the person or thing receiving the action. In English, this is the noun that comes after the verb."
            },
            {
                title: "How to spot them:",
                points: [
                    "Ask 'Who is doing the action?' → That's nominative",
                    "Ask 'Who or what is receiving the action?' → That's accusative",
                    "Example: 'The girl sees the master' - 'girl' is nominative (doing the seeing), 'master' is accusative (being seen)"
                ]
            }
        ]
    },

    // First Declension (puella)
    firstDeclension: {
        noun: "puella",
        meaning: "girl",
        type: "1st Declension (feminine)",
        cases: [
            {
                caseName: "Nominative",
                latin: "puella",
                english: "the girl (subject)",
                usage: "<b>The girl</b> walks"
            },
            {
                caseName: "Accusative",
                latin: "puellam",
                english: "the girl (object)",
                usage: "I see <b>the girl</b>"
            }
        ]
    },

    // Second Declension (dominus)
    secondDeclension: {
        noun: "dominus",
        meaning: "master",
        type: "2nd Declension (masculine)",
        cases: [
            {
                caseName: "Nominative",
                latin: "dominus",
                english: "the master (subject)",
                usage: "<b>The master</b> walks"
            },
            {
                caseName: "Accusative",
                latin: "dominum",
                english: "the master (object)",
                usage: "I see <b>the master</b>"
            }
        ]
    },

    // Example Sentences
    examples: [
        {
            latin: "puella ambulat.",
            english: "The girl walks.",
            explanation: "puella is nominative (subject)"
        },
        {
            latin: "dominus puellam videt.",
            english: "The master sees the girl.",
            explanation: "dominus is nominative (subject), puellam is accusative (object)"
        },
        {
            latin: "puella dominum amat.",
            english: "The girl loves the master.",
            explanation: "puella is nominative (subject), dominum is accusative (object)"
        },
        {
            latin: "dominum video.",
            english: "I see the master.",
            explanation: "dominum is accusative (object) - the subject 'I' is in the verb ending"
        }
    ],

    // Textbook Exercises
    exercises: [
        {
            number: "Exercise 2.1",
            description: "Identify nominative and accusative nouns in sentences"
        },
        {
            number: "Exercise 2.2",
            description: "Translate sentences using 1st and 2nd declension nouns"
        },
        {
            number: "Exercise 2.3",
            description: "Complete the correct case endings"
        }
    ],

    // Grammar Tips
    grammarTips: {
        title: "Remember these endings:",
        points: [
            "<strong>1st Declension:</strong> Nominative = -a, Accusative = -am",
            "<strong>2nd Declension:</strong> Nominative = -us, Accusative = -um",
            "The nominative does the action, the accusative receives it",
            "Word order in Latin is flexible - cases tell you who's doing what!",
            "If there's no separate subject word, look at the verb ending (e.g., 'video' = 'I see')"
        ]
    },

    // Study Checklist
    checklist: [
        "Read the grammar explanation",
        "Study the case endings for puella",
        "Study the case endings for dominus",
        "Read through the example sentences",
        "Complete Exercise 2.1",
        "Complete Exercise 2.2",
        "Complete Exercise 2.3"
    ],

    // Quick Reference
    quickReference: {
        title: "Other common nouns:",
        firstDeclension: ["femina (woman)", "aqua (water)", "terra (land)", "vita (life)", "Roma (Rome)"],
        secondDeclension: ["servus (slave)", "filius (son)", "deus (god)", "annus (year)", "bellum (war - neuter)"],
        note: "All 1st declension nouns follow puella's pattern, all 2nd declension masculines follow dominus!"
    },

    // Navigation Links (same as lesson 1-2)
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

    // Modal Content (same as lesson 1-2)
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

    // Load First Declension Cases
    const firstDeclDiv = document.getElementById('first-declension-cases');
    if (firstDeclDiv) {
        firstDeclDiv.innerHTML = lessonData.firstDeclension.cases.map(caseItem => `
            <div class="case-card">
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
            <div class="case-card">
                <div class="case-label">${caseItem.caseName}</div>
                <div class="latin-form">${caseItem.latin}</div>
                <div class="english-translation">${caseItem.english}</div>
                <div class="usage-example">${caseItem.usage}</div>
            </div>
        `).join('');
    }

    // Load Example Sentences
    const examplesList = document.getElementById('examples-list');
    if (examplesList) {
        examplesList.innerHTML = lessonData.examples.map(ex => `
            <div class="example-item">
                <div class="example-latin">${ex.latin}</div>
                <div class="example-english">${ex.english}</div>
                <div class="example-explanation">${ex.explanation}</div>
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
            <p style="margin-top: 0.5rem;"><strong>1st Declension:</strong><br>${lessonData.quickReference.firstDeclension.join(', ')}</p>
            <p style="margin-top: 0.5rem;"><strong>2nd Declension:</strong><br>${lessonData.quickReference.secondDeclension.join(', ')}</p>
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
