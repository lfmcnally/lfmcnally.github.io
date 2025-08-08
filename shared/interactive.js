// Interactive analysis functionality for all texts
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing interactive features...');
    // Add a small delay to ensure all scripts have loaded
    setTimeout(() => {
        positionNumbers();
        initializeInteractiveFeatures();
    }, 100);
});

// Position numbers relative to latin-text container
function positionNumbers() {
    const latinText = document.querySelector('.latin-text');
    if (!latinText) return;
    
    const latinTextRect = latinText.getBoundingClientRect();
    const numbers = document.querySelectorAll('.number');
    
    numbers.forEach(number => {
        const wordContainer = number.closest('.word-container');
        if (!wordContainer) return;
        
        const wordRect = wordContainer.getBoundingClientRect();
        
        // Position number above the word, relative to the latin-text container
        const leftPosition = wordRect.left + (wordRect.width / 2) - (number.offsetWidth / 2);
        const topPosition = wordRect.top - 25; // 25px above the word
        
        number.style.left = leftPosition + 'px';
        number.style.top = topPosition + 'px';
    });
}

// Call positioning function on window resize
window.addEventListener('resize', positionNumbers);

function initializeInteractiveFeatures() {
    console.log('Initializing interactive features...');
    
    const highlights = document.querySelectorAll('.highlight');
    const numbers = document.querySelectorAll('.number');
    
    console.log('Found highlights:', highlights.length);
    console.log('Found numbers:', numbers.length);
    
    // Handle style analysis highlights
    highlights.forEach(highlight => {
        highlight.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent bubbling to number
            console.log('Highlight clicked:', this.dataset.analysis);
            
            const analysisId = this.dataset.analysis;
            showStyleAnalysis(analysisId);
        });
    });
    
    // Handle vocabulary numbers
    numbers.forEach(number => {
        number.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent bubbling
            console.log('Number clicked:', this.dataset.vocab);
            
            const vocabId = this.dataset.vocab;
            showVocabulary(vocabId);
        });
    });
    
    // Load analysis data and create HTML
    loadAnalysisData();
}

function showStyleAnalysis(analysisId) {
    const panel = document.getElementById('analysis-panel');
    if (!panel) {
        console.error('Panel not found');
        return;
    }
    
    // Show the analysis panel
    panel.style.display = 'block';
    
    // Remove active class from all highlights and numbers
    document.querySelectorAll('.highlight').forEach(h => h.classList.remove('active'));
    document.querySelectorAll('.number').forEach(n => n.classList.remove('active'));
    
    // Add active class to clicked highlight
    document.querySelector(`[data-analysis="${analysisId}"]`).classList.add('active');
    
    // Hide all analysis content
    const analysisContents = document.querySelectorAll('.analysis-content');
    analysisContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected analysis
    const targetAnalysis = document.getElementById(analysisId);
    if (targetAnalysis) {
        targetAnalysis.classList.add('active');
        console.log('Showing style analysis for:', analysisId);
    } else {
        console.error('Analysis not found for:', analysisId);
    }
}

function showVocabulary(vocabId) {
    const panel = document.getElementById('analysis-panel');
    if (!panel) {
        console.error('Panel not found');
        return;
    }
    
    // Show the analysis panel
    panel.style.display = 'block';
    
    // Remove active class from all highlights and numbers
    document.querySelectorAll('.highlight').forEach(h => h.classList.remove('active'));
    document.querySelectorAll('.number').forEach(n => n.classList.remove('active'));
    
    // Add active class to clicked number
    document.querySelector(`[data-vocab="${vocabId}"]`).classList.add('active');
    
    // Hide all analysis content
    const analysisContents = document.querySelectorAll('.analysis-content');
    analysisContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show vocabulary
    const vocabContent = document.getElementById('vocab-content');
    if (vocabContent) {
        vocabContent.classList.add('active');
        
        // Update vocabulary content
        const vocabTitle = document.getElementById('vocab-title');
        const vocabTranslation = document.getElementById('vocab-translation');
        
        if (typeof vocabData !== 'undefined' && vocabData[vocabId]) {
            vocabTitle.textContent = vocabId.replace(/-/g, ' ');
            vocabTranslation.textContent = vocabData[vocabId];
        } else {
            vocabTitle.textContent = 'Vocabulary';
            vocabTranslation.textContent = 'Definition not found';
        }
        
        console.log('Showing vocabulary for:', vocabId);
    }
}

function loadAnalysisData() {
    console.log('Loading analysis data...');
    
    const panel = document.getElementById('analysis-panel');
    if (!panel) {
        console.error('Analysis panel not found');
        return;
    }
    
    // Check for any available data variable
    let sectionData = null;
    
    // Try the new generic name first, then fall back to specific names
    if (typeof textData !== 'undefined') {
        sectionData = textData;
        console.log('Using textData');
    } else if (typeof section1Data !== 'undefined') {
        sectionData = section1Data;
        console.log('Using section1Data');
    } else if (typeof section2Data !== 'undefined') {
        sectionData = section2Data;
        console.log('Using section2Data');
    }
    
    if (!sectionData) {
        console.error('No section data found');
        return;
    }
    
    console.log('Analysis data loaded, creating HTML...');
    console.log('Section data keys:', Object.keys(sectionData));
    
    // Create default message
    let html = '<div class="analysis-content active" id="default-message">';
    html += '<div class="analysis-title">Click on highlighted text or numbers</div>';
    html += '<p>Select any highlighted word or phrase for literary analysis, or click numbers above words for vocabulary.</p>';
    html += '</div>';
    
    // Create vocabulary content container
    html += '<div class="analysis-content" id="vocab-content">';
    html += '<div class="analysis-title">Vocabulary</div>';
    html += '<div class="vocab-word" id="vocab-title"></div>';
    html += '<div class="vocab-meaning" id="vocab-translation"></div>';
    html += '</div>';
    
    // Add all analysis items
    for (const id in sectionData) {
        const data = sectionData[id];
        html += '<div class="analysis-content" id="' + id + '">';
        html += '<div class="analysis-title">Literary Analysis</div>';
        html += '<div class="analysis-word">' + data.title + '</div>';
        html += '<div class="analysis-translation">' + data.translation + '</div>';
        html += '<div class="analysis-device">';
        html += '<div class="device-name">' + data.device + '</div>';
        html += data.description;
        html += '</div>';
        html += '<div class="analysis-effect">';
        html += '<div class="effect-title">Effect:</div>';
        html += data.effect;
        html += '</div>';
        html += '</div>';
    }
    
    panel.innerHTML = html;
    console.log('Analysis HTML created');
}

// Function to reveal translation (called by onclick in HTML)
function revealTranslation(element) {
    console.log('Revealing translation...');
    element.classList.remove('blurred');
    const content = element.querySelector('.translation-content');
    if (content) {
        content.style.filter = 'none';
        content.style.userSelect = 'auto';
    }
    // Remove the click handler to prevent re-clicking the background
    element.onclick = null;
}

// Function to hide translation
function hideTranslation(event, element) {
    event.stopPropagation(); // Prevent event bubbling
    console.log('Hiding translation...');
    element.classList.add('blurred');
    const content = element.querySelector('.translation-content');
    if (content) {
        content.style.filter = 'blur(3px)';
        content.style.userSelect = 'none';
    }
    // Restore the click handler
    element.onclick = function() { revealTranslation(element); };
}
