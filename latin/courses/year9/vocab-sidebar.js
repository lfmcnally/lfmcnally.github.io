// Vocabulary Sidebar Functionality
// Save this as: latin/courses/year9/vocab-sidebar.js

// Vocabulary Sidebar Functions
let vocabSidebarOpen = localStorage.getItem('vocabSidebarOpen') === 'true';
let currentChapter = 1; // Default - will be overridden by lesson

// Function to set the current chapter (call this from each lesson)
function setCurrentChapter(chapter) {
    currentChapter = chapter;
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
    
    let filteredVocab = vocabularyData || [];
    
    // Filter by chapter
    if (chapter !== 'all') {
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
}

// Initialize vocabulary sidebar when DOM is loaded
function initVocabEvents() {
    console.log('Initializing vocabulary sidebar...');
    
    // Check if vocabularyData is loaded
    if (typeof vocabularyData === 'undefined') {
        console.error('vocabularyData not loaded - check vocabulary-data.js path');
        // Create fallback data for testing
        window.vocabularyData = [
            {latin: "ad", english: "to, towards, at", info: "+ accusative - preposition", chapter: 1},
            {latin: "aedifico", english: "build", info: "aedificare, aedificavi, aedificatus - verb 1", chapter: 1},
            {latin: "ambulo", english: "walk", info: "ambulare, ambulavi - verb 1", chapter: 1}
        ];
        console.log('Using fallback vocabulary data');
    } else {
        console.log('vocabularyData loaded successfully:', vocabularyData.length, 'words');
    }
    
    // Initialize vocab sidebar
    initVocabSidebar();
    
    // Toggle button
    const toggleBtn = document.getElementById('vocabToggle');
    if (toggleBtn) {
        console.log('Toggle button found');
        toggleBtn.addEventListener('click', function() {
            console.log('Vocab toggle clicked');
            toggleVocabSidebar();
        });
    } else {
        console.error('Toggle button not found');
    }
    
    const closBtn = document.getElementById('closeSidebar');
    if (closBtn) {
        closBtn.addEventListener('click', toggleVocabSidebar);
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
                console.log('V key pressed');
                toggleVocabSidebar();
            }
        }
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVocabEvents);
} else {
    initVocabEvents();
}
