// Lesson 1.2: Present Tense - Data File

const lessonData = {
    // Verb Information
    verb: {
        infinitive: "portō",
        meaning: "to carry, to bear",
        conjugation: "First (-āre)",
        stem: "port-",
        tense: "Present"
    },

    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "What are verbs?",
                content: "Verbs are action words - they tell us what someone or something is doing. In English, we say \"I carry\", \"you carry\", \"she carries\"."
            },
            {
                title: "Latin verbs change their endings!",
                content: "In Latin, we don't need to say \"I\", \"you\", or \"she\" because the ending of the verb tells us who is doing the action."
            },
            {
                title: "How it works:",
                points: [
                    "Take the stem <strong>port-</strong> (which carries the meaning \"carry\")",
                    "Add different endings to show <em>who</em> is doing the carrying",
                    "For example: <strong>port</strong> + <strong>ō</strong> = portō (I carry)",
                    "Note: For the other 5 persons, we add the vowel <strong>a</strong> before the ending"
                ]
            },
            {
                title: "One Latin word = Several English words:",
                content: "The Latin present tense is flexible! <em>Portō</em> can mean \"I carry\", \"I am carrying\", or \"I do carry\" - all from just one word!"
            }
        ]
    },

    // Conjugations
    conjugations: {
        singular: [
            {
                person: "1st Person",
                latin: "portō",
                english: "I carry / I am carrying"
            },
            {
                person: "2nd Person",
                latin: "portās",
                english: "you carry / you are carrying"
            },
            {
                person: "3rd Person",
                latin: "portat",
                english: "he/she/it carries"
            }
        ],
        plural: [
            {
                person: "1st Person",
                latin: "portāmus",
                english: "we carry / we are carrying"
            },
            {
                person: "2nd Person",
                latin: "portātis",
                english: "you (pl.) carry"
            },
            {
                person: "3rd Person",
                latin: "portant",
                english: "they carry / they are carrying"
            }
        ]
    },

    // Textbook Exercises
    exercises: [
        {
            number: "Exercise 1.4",
            description: "Practice identifying verb endings and their meanings"
        },
        {
            number: "Exercise 1.5",
            description: "Translate sentences using first conjugation verbs"
        },
        {
            number: "Exercise 1.6",
            description: "Complete the verb forms and match them to their English translations"
        }
    ],

    // Grammar Tips
    grammarTips: {
        title: "Remember the Present Tense Endings for First Conjugation Verbs:",
        endings: [
            { ending: "-ō", meaning: "I" },
            { ending: "-ās", meaning: "you (singular)" },
            { ending: "-at", meaning: "he/she/it" },
            { ending: "-āmus", meaning: "we" },
            { ending: "-ātis", meaning: "you (plural)" },
            { ending: "-ant", meaning: "they" }
        ],
        note: "The present tense in Latin can express both simple present (\"I carry\") and present continuous (\"I am carrying\") in English."
    },

    // Study Checklist
    checklist: [
        "Read the grammar explanation",
        "Study the conjugation table",
        "Complete Exercise 1.4",
        "Complete Exercise 1.5",
        "Complete Exercise 1.6"
    ],

    // Quick Reference
    quickReference: {
        title: "Other 1st Conjugation Verbs:",
        verbs: ["amō (love)", "laudō (praise)", "vocō (call)", "spectō (watch)", "laborō (work)"],
        note: "All follow the same pattern as portō!"
    },

    // Navigation Links
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

    // Modal Content
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

    // Load Verb Info
    const verbInfo = document.getElementById('verb-info');
    if (verbInfo) {
        verbInfo.innerHTML = `
            <div class="verb-detail">
                <div class="verb-detail-label">Conjugation</div>
                <div class="verb-detail-value">${lessonData.verb.conjugation}</div>
            </div>
            <div class="verb-detail">
                <div class="verb-detail-label">Stem</div>
                <div class="verb-detail-value">${lessonData.verb.stem}</div>
            </div>
            <div class="verb-detail">
                <div class="verb-detail-label">Tense</div>
                <div class="verb-detail-value">${lessonData.verb.tense}</div>
            </div>
        `;
    }

    // Load Conjugations
    const singularDiv = document.getElementById('singular-conjugations');
    if (singularDiv) {
        singularDiv.innerHTML = lessonData.conjugations.singular.map(conj => `
            <div class="conjugation-card">
                <div class="person-label">${conj.person}</div>
                <div class="latin-form">${conj.latin}</div>
                <div class="english-translation">${conj.english}</div>
            </div>
        `).join('');
    }

    const pluralDiv = document.getElementById('plural-conjugations');
    if (pluralDiv) {
        pluralDiv.innerHTML = lessonData.conjugations.plural.map(conj => `
            <div class="conjugation-card">
                <div class="person-label">${conj.person}</div>
                <div class="latin-form">${conj.latin}</div>
                <div class="english-translation">${conj.english}</div>
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
        lessonData.grammarTips.endings.forEach(ending => {
            tipsHtml += `<li><strong>${ending.ending}</strong> = ${ending.meaning}</li>`;
        });
        tipsHtml += `</ul><p style="margin-top: 1rem;">${lessonData.grammarTips.note}</p>`;
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
            <p style="margin-top: 0.5rem;">${lessonData.quickReference.verbs.join(', ')}</p>
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
