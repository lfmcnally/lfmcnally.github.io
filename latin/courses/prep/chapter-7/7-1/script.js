// Lesson 7.1 amici - Main JavaScript

let currentBox = 1;
const totalBoxes = 11;
let vocabularyOpen = false;

// Initialize lesson on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeLesson();
    setupEventListeners();
});

function initializeLesson() {
    // Show only first box initially
    showCurrentBox();
    
    // Set up vocabulary click handlers
    setupVocabularyHandlers();
    
    // Update progress
    updateProgress();
}

function setupEventListeners() {
    // Vocabulary panel toggle
    document.getElementById('show-vocabulary').addEventListener('click', toggleVocabularyPanel);
    
    // Grammar highlighting
    document.getElementById('grammar-help').addEventListener('click', toggleGrammarHighlighting);
    
    // Fill-in-the-blank change handlers for Box 7
    const blanks = document.querySelectorAll('.fill-blank');
    blanks.forEach(blank => {
        blank.addEventListener('change', checkBlankAnswer);
    });
}

function showCurrentBox() {
    // Hide all boxes
    document.querySelectorAll('.story-box').forEach(box => {
        box.classList.remove('active');
        box.classList.add('completed');
    });
    
    // Show current box
    const currentBoxElement = document.getElementById(`box-${currentBox}`);
    if (currentBoxElement) {
        currentBoxElement.classList.add('active');
        currentBoxElement.classList.remove('completed');
        
        // Scroll to current box
        currentBoxElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
    
    // Show completed boxes with reduced opacity
    for (let i = 1; i < currentBox; i++) {
        const box = document.getElementById(`box-${i}`);
        if (box) {
            box.classList.add('completed');
        }
    }
}

function showNextBox() {
    if (currentBox < totalBoxes) {
        currentBox++;
        showCurrentBox();
        updateProgress();
    }
}

function updateProgress() {
    const progressFill = document.getElementById('story-progress');
    const currentBoxSpan = document.getElementById('current-box');
    
    const progressPercent = (currentBox / totalBoxes) * 100;
    progressFill.style.width = `${progressPercent}%`;
    currentBoxSpan.textContent = currentBox;
}

function setupVocabularyHandlers() {
    document.querySelectorAll('.vocab-word').forEach(word => {
        word.addEventListener('click', function() {
            const wordKey = this.getAttribute('data-word');
            showVocabularyDefinition(wordKey);
        });
        
        // Add hover effect
        word.addEventListener('mouseenter', function() {
            if (!vocabularyOpen) {
                showQuickDefinition(this);
            }
        });
        
        word.addEventListener('mouseleave', function() {
            hideQuickDefinition();
        });
    });
}

function showVocabularyDefinition(wordKey) {
    const vocab = vocabularyData[wordKey];
    if (!vocab) return;
    
    const vocabContent = document.getElementById('vocab-content');
    vocabContent.innerHTML = `
        <div class="vocab-entry">
            <div class="vocab-latin">${vocab.latin}</div>
            <div class="vocab-english">${vocab.english}</div>
            <div class="vocab-grammar">${vocab.grammar}</div>
        </div>
    `;
    
    openVocabularyPanel();
}

function showQuickDefinition(element) {
    const wordKey = element.getAttribute('data-word');
    const vocab = vocabularyData[wordKey];
    if (!vocab) return;
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'vocab-tooltip';
    tooltip.innerHTML = `
        <div class="tooltip-latin">${vocab.latin}</div>
        <div class="tooltip-english">${vocab.english}</div>
    `;
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.cssText = `
        position: fixed;
        top: ${rect.bottom + 10}px;
        left: ${rect.left}px;
        background: #333;
        color: white;
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.85rem;
        z-index: 1000;
        max-width: 200px;
    `;
    
    document.body.appendChild(tooltip);
}

function hideQuickDefinition() {
    const tooltip = document.querySelector('.vocab-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

function toggleVocabularyPanel() {
    const panel = document.getElementById('vocab-panel');
    
    if (vocabularyOpen) {
        closeVocabularyPanel();
    } else {
        openVocabularyPanel();
    }
}

function openVocabularyPanel() {
    const panel = document.getElementById('vocab-panel');
    panel.classList.add('open');
    vocabularyOpen = true;
    
    // Show all vocabulary
    if (!document.getElementById('vocab-content').innerHTML) {
        showAllVocabulary();
    }
}

function closeVocabularyPanel() {
    const panel = document.getElementById('vocab-panel');
    panel.classList.remove('open');
    vocabularyOpen = false;
}

function closeVocab() {
    closeVocabularyPanel();
}

function showAllVocabulary() {
    const vocabContent = document.getElementById('vocab-content');
    let html = '';
    
    Object.keys(vocabularyData).forEach(key => {
        const vocab = vocabularyData[key];
        html += `
            <div class="vocab-entry">
                <div class="vocab-latin">${vocab.latin}</div>
                <div class="vocab-english">${vocab.english}</div>
                <div class="vocab-grammar">${vocab.grammar}</div>
            </div>
        `;
    });
    
    vocabContent.innerHTML = html;
}

function toggleGrammarHighlighting() {
    const imperfectWords = document.querySelectorAll('.vocab-word.imperfect');
    const button = document.getElementById('grammar-help');
    
    if (button.textContent.includes('Grammar')) {
        // Highlight imperfect verbs
        imperfectWords.forEach(word => {
            word.style.background = '#fff3cd';
            word.style.borderBottom = '2px solid #ffc107';
        });
        button.innerHTML = '<span class="icon">⚡</span>Hide Grammar';
        
        // Show grammar explanation
        showGrammarExplanation();
    } else {
        // Remove highlighting
        imperfectWords.forEach(word => {
            word.style.background = '';
            word.style.borderBottom = '';
        });
        button.innerHTML = '<span class="icon">⚡</span>Grammar';
        
        // Hide grammar explanation
        hideGrammarExplanation();
    }
}

function showGrammarExplanation() {
    const explanation = document.createElement('div');
    explanation.id = 'grammar-explanation';
    explanation.className = 'feedback success';
    explanation.innerHTML = `
        <h4>Imperfect Tense Highlighted</h4>
        <p>The imperfect tense describes ongoing or repeated actions in the past. 
        Notice the endings: -bam (I was), -bas (you were), -bat (he/she was), -bamus (we were), -bant (they were)</p>
        <p><strong>Examples from the story:</strong></p>
        <ul>
            <li><em>erāmus</em> = "we were"</li>
            <li><em>pugnābam</em> = "I was fighting"</li>
            <li><em>aedificābāmus</em> = "we were building"</li>
        </ul>
    `;
    
    const container = document.querySelector('.story-container');
    container.insertBefore(explanation, container.firstChild);
}

function hideGrammarExplanation() {
    const explanation = document.getElementById('grammar-explanation');
    if (explanation) {
        explanation.remove();
    }
}

// Box 7 Interactive Fill-in Functions
function checkBlankAnswer() {
    const blankId = this.id;
    const selectedValue = this.value;
    const correctAnswer = fillAnswers[blankId];
    
    if (selectedValue === correctAnswer) {
        this.classList.add('correct');
        this.classList.remove('incorrect');
    } else if (selectedValue !== '') {
        this.classList.add('incorrect');
        this.classList.remove('correct');
    } else {
        this.classList.remove('correct', 'incorrect');
    }
}

function checkAnswers() {
    const blanks = document.querySelectorAll('.fill-blank');
    let allCorrect = true;
    
    blanks.forEach(blank => {
        const blankId = blank.id;
        const selectedValue = blank.value;
        const correctAnswer = fillAnswers[blankId];
        
        if (selectedValue === correctAnswer) {
            blank.classList.add('correct');
            blank.classList.remove('incorrect');
        } else {
            blank.classList.add('incorrect');
            blank.classList.remove('correct');
            allCorrect = false;
        }
    });
    
    const button = document.getElementById('check-answers');
    if (allCorrect) {
        button.textContent = 'Correct! Next →';
        button.onclick = showNextBox;
        button.classList.remove('control-btn');
        button.classList.add('next-btn');
        
        showFeedback('Great job! You correctly identified the objects the Romans built.', 'success');
    } else {
        showFeedback('Some answers are incorrect. Try again!', 'error');
    }
}

function showFeedback(message, type) {
    // Remove any existing feedback
    const existingFeedback = document.querySelector('.feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    const feedback = document.createElement('div');
    feedback.className = `feedback ${type}`;
    feedback.textContent = message;
    
    const box7 = document.getElementById('box-7');
    box7.appendChild(feedback);
}

// Comprehension Quiz Functions
function showComprehension() {
    const comprehensionSection = document.getElementById('comprehension');
    comprehensionSection.classList.remove('hidden');
    comprehensionSection.scrollIntoView({ behavior: 'smooth' });
}

function checkComprehension() {
    const form = document.forms[0] || document;
    let score = 0;
    let totalQuestions = 3;
    
    // Check each question
    Object.keys(quizAnswers).forEach(questionId => {
        const selectedAnswer = form.querySelector(`input[name="${questionId}"]:checked`);
        const questionBlock = form.querySelector(`input[name="${questionId}"]`).closest('.question-block');
        
        if (selectedAnswer && selectedAnswer.value === quizAnswers[questionId]) {
            score++;
            questionBlock.style.background = '#d4edda';
            questionBlock.style.border = '2px solid #28a745';
        } else {
            questionBlock.style.background = '#f8d7da';
            questionBlock.style.border = '2px solid #dc3545';
        }
    });
    
    // Show results
    const resultMessage = score === totalQuestions ? 
        `Perfect! You got all ${score}/${totalQuestions} questions correct! 🎉` :
        `You got ${score}/${totalQuestions} questions correct. Review the story and try again.`;
    
    const resultType = score === totalQuestions ? 'success' : 'error';
    
    const result = document.createElement('div');
    result.className = `feedback ${resultType}`;
    result.innerHTML = `<h4>Quiz Results</h4><p>${resultMessage}</p>`;
    
    const submitButton = document.querySelector('.submit-btn');
    submitButton.parentNode.insertBefore(result, submitButton.nextSibling);
    
    if (score === totalQuestions) {
        submitButton.style.display = 'none';
        
        // Add completion message and next lesson link
        const completion = document.createElement('div');
        completion.className = 'feedback success';
        completion.innerHTML = `
            <h4>Lesson Complete! 🏆</h4>
            <p>You've successfully completed lesson 7.1 "amici".</p>
            <p><a href="../7-2/index.html" style="color: #0066ff; font-weight: bold;">Continue to 7.2 "de Britannia" →</a></p>
        `;
        
        result.parentNode.insertBefore(completion, result.nextSibling);
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
        const nextBtn = document.querySelector('.story-box.active .next-btn');
        if (nextBtn && !nextBtn.disabled) {
            nextBtn.click();
        }
    }
    
    if (event.key === 'Escape' && vocabularyOpen) {
        closeVocabularyPanel();
    }
});
