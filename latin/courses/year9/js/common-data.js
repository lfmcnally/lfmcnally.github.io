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

// Vocabulary Sidebar Functions
let vocabSidebarOpen = localStorage.getItem('vocabSidebarOpen') === 'true';
let currentChapter = 1; // Default - will be overridden by lesson

// Function to set the current chapter (call this from each lesson)
function setCurrentChapter(chapter) {
    currentChapter = chapter;
    // Update the chapter filter if it exists
    const chapterFilter = document.getElementById('chapterFilter');
    if (chapterFilter) {
        chapterFilter.value = chapter;
    }
}

function initVocabSidebar() {
    const sidebar = document.getElementById('vocabSidebar');
    const toggle = document.getElementById('vocabToggle');
    
    // Set initial state
    if (vocabSidebarOpen) {
        sidebar.classList.add('open');
        toggle.classList.add('hidden');
    }
    
    loadVocabulary(currentChapter);
}

function toggleVocabSidebar() {
    const sidebar = document.getElementById('vocabSidebar');
    const toggle = document.getElementById('vocabToggle');
    
    vocabSidebarOpen = !vocabSidebarOpen;
    localStorage.setItem('vocabSidebarOpen', vocabSidebarOpen);
    
    if (vocabSidebarOpen) {
        sidebar.classList.add('open');
        toggle.classList.add('hidden');
    } else {
        sidebar.classList.remove('open');
        toggle.classList.remove('hidden');
    }
}

function loadVocabulary(chapter = 'all') {
    const vocabList = document.getElementById('vocabList');
    const searchInput = document.getElementById('vocabSearch');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    // Check if vocabularyData exists
    if (typeof vocabularyData === 'undefined') {
        vocabList.innerHTML = '<p style="padding: 1rem; color: #666;">Vocabulary data not loaded.</p>';
        return;
    }
    
    let filteredVocab = vocabularyData || [];
    
    // Filter by chapter
    if (chapter !== 'all' && chapter !== '') {
        filteredVocab = filteredVocab.filter(word => word.chapter === parseInt(chapter));
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredVocab = filteredVocab.filter(word => 
            word.latin.toLowerCase().includes(searchTerm) || 
            word.english.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort by latin word
    filteredVocab.sort((a, b) => a.latin.localeCompare(b.latin));
    
    // Generate HTML
    vocabList.innerHTML = filteredVocab.map(word => `
        <div class="vocab-item">
            <div class="vocab-top-line">
                <span class="vocab-latin">${word.latin}</span>
                <span class="vocab-info">${word.info}</span>
                <span class="vocab-chapter">Ch. ${word.chapter}</span>
            </div>
            <div class="vocab-english">${word.english}</div>
        </div>
    `).join('');
    
    if (filteredVocab.length === 0) {
        vocabList.innerHTML = '<p style="padding: 1rem; color: #666;">No vocabulary found.</p>';
    }
}

// Initialize vocabulary sidebar events
function initVocabEvents() {
    // Initialize vocab sidebar
    initVocabSidebar();
    
    // Toggle button
    const toggleBtn = document.getElementById('vocabToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleVocabSidebar);
    }
    
    const closeBtn = document.getElementById('closeSidebar');
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleVocabSidebar);
    }
    
    // Search and filter
    const searchInput = document.getElementById('vocabSearch');
    const chapterFilter = document.getElementById('chapterFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const chapter = chapterFilter ? chapterFilter.value : currentChapter;
            loadVocabulary(chapter);
        });
    }
    
    if (chapterFilter) {
        chapterFilter.addEventListener('change', (e) => {
            loadVocabulary(e.target.value);
        });
    }
    
    // Keyboard shortcut (V key)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'v' || e.key === 'V') {
            if (!e.target.matches('input, textarea')) {
                e.preventDefault();
                toggleVocabSidebar();
            }
        }
    });
}
