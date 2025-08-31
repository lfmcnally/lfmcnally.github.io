// Vocabulary Sidebar functionality for Greek Year 9 Course

// Initialize vocabulary sidebar
document.addEventListener('DOMContentLoaded', function() {
    initializeVocabSidebar();
});

function initializeVocabSidebar() {
    const sidebar = document.getElementById('vocabSidebar');
    const toggleBtn = document.getElementById('vocabToggle');
    const closeBtn = document.getElementById('closeSidebar');
    const searchInput = document.getElementById('vocabSearch');
    const chapterFilter = document.getElementById('chapterFilter');
    const vocabList = document.getElementById('vocabList');
    
    // Toggle sidebar visibility
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.add('open');
            toggleBtn.classList.add('hidden');
        });
    }
    
    // Close sidebar
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('open');
            toggleBtn.classList.remove('hidden');
        });
    }
    
    // Add keyboard shortcut (press 'v' to toggle)
    document.addEventListener('keydown', function(e) {
        // Check if 'v' key is pressed and no input is focused
        if (e.key === 'v' || e.key === 'V') {
            // Don't trigger if user is typing in an input field
            const activeElement = document.activeElement;
            const isInputField = activeElement.tagName === 'INPUT' || 
                                activeElement.tagName === 'TEXTAREA' || 
                                activeElement.contentEditable === 'true';
            
            if (!isInputField) {
                e.preventDefault();
                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    toggleBtn.classList.remove('hidden');
                } else {
                    sidebar.classList.add('open');
                    toggleBtn.classList.add('hidden');
                }
            }
        }
    });
    
    // Load vocabulary data
    loadVocabulary();
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterVocabulary();
        });
    }
    
    // Chapter filter
    if (chapterFilter) {
        chapterFilter.addEventListener('change', function() {
            filterVocabulary();
        });
    }
}

// Load vocabulary items
function loadVocabulary() {
    const vocabList = document.getElementById('vocabList');
    if (!vocabList) return;
    
    // Check if Greek vocabulary data exists
    if (typeof greekVocabularyData === 'undefined') {
        vocabList.innerHTML = '<p style="padding: 1rem; color: #666;">No vocabulary data available.</p>';
        return;
    }
    
    // Clear existing content
    vocabList.innerHTML = '';
    
    // Add vocabulary items
    greekVocabularyData.forEach(item => {
        const vocabItem = createVocabItem(item);
        vocabList.appendChild(vocabItem);
    });
}

// Create vocabulary item element
function createVocabItem(item) {
    const div = document.createElement('div');
    div.className = 'vocab-item';
    div.dataset.chapter = item.chapter || '';
    div.dataset.searchText = `${item.greek} ${item.english} ${item.info || ''}`.toLowerCase();
    
    div.innerHTML = `
        <div class="vocab-top-line">
            <span class="vocab-greek">${item.greek}</span>
            ${item.info ? `<span class="vocab-info">${item.info}</span>` : ''}
            ${item.chapter ? `<span class="vocab-chapter">Ch. ${item.chapter}</span>` : ''}
        </div>
        <div class="vocab-english">${item.english}</div>
    `;
    
    return div;
}

// Filter vocabulary based on search and chapter
function filterVocabulary() {
    const searchInput = document.getElementById('vocabSearch');
    const chapterFilter = document.getElementById('chapterFilter');
    const vocabItems = document.querySelectorAll('.vocab-item');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedChapter = chapterFilter ? chapterFilter.value : 'all';
    
    vocabItems.forEach(item => {
        const matchesSearch = !searchTerm || item.dataset.searchText.includes(searchTerm);
        const matchesChapter = selectedChapter === 'all' || item.dataset.chapter === selectedChapter;
        
        if (matchesSearch && matchesChapter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Set current chapter (called from lesson pages)
function setCurrentChapter(chapter) {
    // Store current chapter
    window.currentChapter = chapter;
    
    // Update chapter filter if it exists
    const chapterFilter = document.getElementById('chapterFilter');
    if (chapterFilter) {
        // Wait for common data to load and populate the filter
        setTimeout(() => {
            if (chapterFilter.querySelector(`option[value="${chapter}"]`)) {
                chapterFilter.value = chapter;
                filterVocabulary();
            }
        }, 100);
    }
}
