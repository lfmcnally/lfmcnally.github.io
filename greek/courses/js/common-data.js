// Common Data for Year 9 Greek Course - Shared across all lessons

const commonData = {
    // Navigation Links
    navigation: {
        additionalSites: [
            { text: "Perseus Digital Library", url: "https://www.perseus.tufts.edu/" },
            { text: "Logeion Greek Dictionary", url: "https://logeion.uchicago.edu/" },
            { text: "Ancient Greek Tutorial", url: "https://www.ancientgreektutorial.com/" },
            { text: "The Owl", url: "https://sites.google.com/view/theowlclassics/home" }
        ],
        teachingResources: [
            { text: "Cambridge Greek Course", url: "https://www.cambridgescp.com/" },
            { text: "Hands Up Education", url: "https://www.hands-up-education.org/" },
            { text: "Classics Library", url: "https://www.theclassicslibrary.com/" },
            { text: "Massolit Classics", url: "https://www.massolit.io/subjects/classics/landing" },
            { text: "Classical Association", url: "https://www.classicalassociation.org/" }
        ],
        specifications: [
            { text: "OCR A Level Greek", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/classical-greek-h044-h444-from-2016/" },
            { text: "OCR GCSE Greek", url: "https://www.ocr.org.uk/qualifications/gcse/classical-greek-j292-from-2016/" },
            { text: "OCR A Level Classics", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/classical-civilisation-h008-h408-from-2017/" },
            { text: "OCR GCSE Classics", url: "https://www.ocr.org.uk/qualifications/gcse/classical-civilisation-j199-from-2017/" },
            { text: "Eduqas GCSE Greek", url: "https://www.eduqas.co.uk/qualifications/classical-greek-gcse/" },
            { text: "Eduqas A Level Greek", url: "https://www.eduqas.co.uk/qualifications/classical-greek-as-a-level/" }
        ]
    },

    // Greek Alphabet Data
    alphabet: {
        letters: [
            { upper: 'Α', lower: 'α', name: 'Alpha', sound: 'a' },
            { upper: 'Β', lower: 'β', name: 'Beta', sound: 'b' },
            { upper: 'Γ', lower: 'γ', name: 'Gamma', sound: 'g' },
            { upper: 'Δ', lower: 'δ', name: 'Delta', sound: 'd' },
            { upper: 'Ε', lower: 'ε', name: 'Epsilon', sound: 'e (short)' },
            { upper: 'Ζ', lower: 'ζ', name: 'Zeta', sound: 'zd/z' },
            { upper: 'Η', lower: 'η', name: 'Eta', sound: 'e (long)' },
            { upper: 'Θ', lower: 'θ', name: 'Theta', sound: 'th' },
            { upper: 'Ι', lower: 'ι', name: 'Iota', sound: 'i' },
            { upper: 'Κ', lower: 'κ', name: 'Kappa', sound: 'k' },
            { upper: 'Λ', lower: 'λ', name: 'Lambda', sound: 'l' },
            { upper: 'Μ', lower: 'μ', name: 'Mu', sound: 'm' },
            { upper: 'Ν', lower: 'ν', name: 'Nu', sound: 'n' },
            { upper: 'Ξ', lower: 'ξ', name: 'Xi', sound: 'x/ks' },
            { upper: 'Ο', lower: 'ο', name: 'Omicron', sound: 'o (short)' },
            { upper: 'Π', lower: 'π', name: 'Pi', sound: 'p' },
            { upper: 'Ρ', lower: 'ρ', name: 'Rho', sound: 'r' },
            { upper: 'Σ', lower: 'σ/ς', name: 'Sigma', sound: 's' },
            { upper: 'Τ', lower: 'τ', name: 'Tau', sound: 't' },
            { upper: 'Υ', lower: 'υ', name: 'Upsilon', sound: 'u/y' },
            { upper: 'Φ', lower: 'φ', name: 'Phi', sound: 'ph/f' },
            { upper: 'Χ', lower: 'χ', name: 'Chi', sound: 'ch/kh' },
            { upper: 'Ψ', lower: 'ψ', name: 'Psi', sound: 'ps' },
            { upper: 'Ω', lower: 'ω', name: 'Omega', sound: 'o (long)' }
        ],
        diphthongs: [
            { greek: 'αι', sound: 'ai (as in aisle)' },
            { greek: 'ει', sound: 'ei (as in day)' },
            { greek: 'οι', sound: 'oi (as in oil)' },
            { greek: 'υι', sound: 'ui' },
            { greek: 'αυ', sound: 'au (as in house)' },
            { greek: 'ευ', sound: 'eu' },
            { greek: 'ου', sound: 'ou (as in soup)' },
            { greek: 'ηυ', sound: 'eu (long)' }
        ],
        breathings: [
            { type: 'Smooth', symbol: '᾿', description: 'No aspiration' },
            { type: 'Rough', symbol: '῾', description: 'Aspirated (h-sound)' }
        ],
        accents: [
            { type: 'Acute', symbol: '´', description: 'Rising pitch' },
            { type: 'Grave', symbol: '`', description: 'Falling pitch' },
            { type: 'Circumflex', symbol: '῀', description: 'Rising-falling pitch' }
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

// Function to load navigation links
function loadNavigationLinks() {
    // Load Additional Sites
    const additionalSites = document.getElementById('additional-sites-links');
    if (additionalSites) {
        additionalSites.innerHTML = commonData.navigation.additionalSites.map(link => 
            `<a href="${link.url}" target="_blank" class="nav-link">${link.text}</a>`
        ).join('');
    }

    // Load Teaching Resources
    const teachingResources = document.getElementById('teaching-resources-links');
    if (teachingResources) {
        teachingResources.innerHTML = commonData.navigation.teachingResources.map(link => 
            `<a href="${link.url}" target="_blank" class="nav-link">${link.text}</a>`
        ).join('');
    }

    // Load Specifications
    const specifications = document.getElementById('specifications-links');
    if (specifications) {
        specifications.innerHTML = commonData.navigation.specifications.map(link => 
            `<a href="${link.url}" target="_blank" class="nav-link">${link.text}</a>`
        ).join('');
    }
}

// Function to load modal content
function loadModalContent() {
    // Load Modal Text
    const modalText = document.getElementById('modal-text-content');
    if (modalText) {
        modalText.innerHTML = commonData.modalContent.text.map(paragraph => 
            `<p>${paragraph}</p>`
        ).join('');
    }

    // Load Contact Items
    const contactItems = document.getElementById('contact-items');
    if (contactItems) {
        contactItems.innerHTML = commonData.modalContent.contacts.map(contact => `
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

// Function to load Greek alphabet
function loadAlphabet() {
    const alphabetGrid = document.getElementById('alphabet-grid');
    if (alphabetGrid) {
        alphabetGrid.innerHTML = commonData.alphabet.letters.map(letter => `
            <div class="letter-card" onclick="playLetterSound('${letter.name}')">
                <span class="greek-letter">${letter.upper} ${letter.lower}</span>
                <div class="letter-name">${letter.name}</div>
                <div class="letter-sound">${letter.sound}</div>
            </div>
        `).join('');
    }
}

// Function to load diphthongs
function loadDiphthongs() {
    const diphthongsList = document.getElementById('diphthongs-list');
    if (diphthongsList) {
        diphthongsList.innerHTML = commonData.alphabet.diphthongs.map(diphthong => `
            <div class="diphthong-item">
                <span class="greek-text">${diphthong.greek}</span> - 
                <span class="sound-description">${diphthong.sound}</span>
            </div>
        `).join('');
    }
}

// Function to load all common data
function loadCommonData() {
    loadNavigationLinks();
    loadModalContent();
    loadAlphabet();
    loadDiphthongs();
    populateChapterFilter();
}

// Function to populate chapter filter dropdown
function populateChapterFilter() {
    const chapterFilter = document.getElementById('chapterFilter');
    if (chapterFilter && typeof vocabularyData !== 'undefined') {
        // Get unique chapter numbers from vocabulary data
        const chapters = [...new Set(vocabularyData.map(word => word.chapter))].sort((a, b) => a - b);
        
        // Build options HTML
        let optionsHTML = '';
        chapters.forEach(chapter => {
            optionsHTML += `<option value="${chapter}">Chapter ${chapter}</option>`;
        });
        optionsHTML += '<option value="all">All Chapters</option>';
        
        // Set the HTML
        chapterFilter.innerHTML = optionsHTML;
        
        // Set the current chapter if it's been set
        if (typeof currentChapter !== 'undefined') {
            chapterFilter.value = currentChapter;
        }
    }
}

// Modal control functions
function showInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
}

// Navigation function
function navigateToLesson(lessonNumber) {
    window.location.href = `../${lessonNumber}/index.html`;
}

// Toggle "Do now" button
function markAsDoingNow(index) {
    const button = document.getElementById(`do-now-${index}`);
    
    // Toggle the active state
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.textContent = 'Do now';
    } else {
        button.classList.add('active');
        button.textContent = 'Doing now';
    }
}

// Greek-specific functions
function playLetterSound(letterName) {
    // Placeholder for audio playback functionality
    console.log(`Playing sound for ${letterName}`);
    // In a real implementation, you'd have audio files for each letter
}

// Function to check Greek exercise answers
function checkGreekAnswer(exerciseId, userAnswer, correctAnswer) {
    const feedback = document.getElementById(`feedback-${exerciseId}`);
    const normalizedUser = userAnswer.trim().toLowerCase();
    const normalizedCorrect = correctAnswer.toLowerCase();
    
    if (normalizedUser === normalizedCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'εὖγε! (Well done!)';
        return true;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `οὔ. The correct answer is: ${correctAnswer}`;
        return false;
    }
}

// Function to toggle vocabulary sidebar
function toggleVocabSidebar() {
    const sidebar = document.getElementById('vocab-sidebar');
    const toggle = document.getElementById('vocab-toggle');
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        toggle.classList.remove('hidden');
    } else {
        sidebar.classList.add('open');
        toggle.classList.add('hidden');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCommonData();
});
