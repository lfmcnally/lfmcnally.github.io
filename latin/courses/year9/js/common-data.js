// Common Data for Year 9 Latin Course - Shared across all lessons

const commonData = {
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

// Function to load all common data
function loadCommonData() {
    loadNavigationLinks();
    loadModalContent();
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
