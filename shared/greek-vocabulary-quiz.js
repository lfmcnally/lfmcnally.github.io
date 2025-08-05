// Greek Quiz variables
let currentTestWords = [];
let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = 0;
let selectedChapter = 'all';
let selectedLength = 10;

// Get words for specific chapter
function getWordsForChapter(chapter) {
    if (chapter === 'all') {
        return greekVocabularyData;
    }
    return greekVocabularyData.filter(word => word.chapter == chapter);
}

function updateDisplay() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentTestWords.length;
    document.getElementById('score').textContent = score;
    document.getElementById('answered').textContent = questionsAnswered;
    
    const percentage = questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : 0;
    document.getElementById('percentage').textContent = percentage;
    
    const progress = ((currentQuestionIndex + 1) / currentTestWords.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

function createNewTest() {
    const availableWords = getWordsForChapter(selectedChapter);
    
    if (availableWords.length === 0) {
        alert('No words available for the selected chapter.');
        return;
    }
    
    // Determine test length
    let testLength = selectedLength;
    if (selectedLength === 'all' || selectedLength > availableWords.length) {
        testLength = availableWords.length;
    }
    
    const shuffled = [...availableWords];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    currentTestWords = shuffled.slice(0, testLength);
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    
    // Hide completion message
    document.getElementById('completion-message').classList.add('hidden');
    
    // Update chapter info
    updateChapterInfo();
    
    loadQuestion();
}

function updateChapterInfo() {
    const infoDiv = document.getElementById('chapter-info');
    const detailsDiv = document.getElementById('chapter-details');
    
    if (selectedChapter === 'all') {
        infoDiv.classList.add('hidden');
    } else {
        const wordCount = getWordsForChapter(selectedChapter).length;
        detailsDiv.innerHTML = `<strong>Chapter ${selectedChapter}</strong><br>${wordCount} words available`;
        infoDiv.classList.remove('hidden');
    }
}

function loadQuestion() {
    const word = currentTestWords[currentQuestionIndex];
    document.getElementById('greek-word').textContent = word.greek;
    document.getElementById('word-info').textContent = word.info;
    document.getElementById('answer-input').value = '';
    
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    feedback.className = 'feedback';
    
    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.remove('hidden');
    
    updateDisplay();
    document.getElementById('answer-input').focus();
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim();
    
    // Check if answer is empty
    if (!userAnswer) {
        alert('Please enter an answer first!');
        return;
    }
    
    const word = currentTestWords[currentQuestionIndex];
    const correctAnswer = word.english.toLowerCase();
    const userAnswerLower = userAnswer.toLowerCase();
    
    const feedback = document.getElementById('feedback');
    
    // Split correct answer by commas and semicolons to handle multiple acceptable answers
    const correctParts = correctAnswer.split(/[,;]/).map(p => p.trim());
    let isCorrect = false;
    
    for (const correctPart of correctParts) {
        // Split each part by spaces to get individual words
        const correctWords = correctPart.split(/\s+/);
        const userWords = userAnswerLower.split(/\s+/);
        
        // Check if user answer exactly matches any correct part
        if (userAnswerLower === correctPart) {
            isCorrect = true;
            break;
        }
        
        // Check if user answer matches any individual word in the correct answer
        for (const correctWord of correctWords) {
            if (userWords.includes(correctWord)) {
                isCorrect = true;
                break;
            }
        }
        
        if (isCorrect) break;
    }
    
    if (isCorrect) {
        feedback.innerHTML = `<strong>Correct!</strong> ✓<br><small>"${word.greek}" = "${word.english}"</small>`;
        feedback.className = 'feedback feedback-correct';
        score++;
    } else {
        feedback.innerHTML = `<strong>Incorrect</strong> ✗<br>You wrote: "<em>${userAnswer}</em>"<br>Correct: "<strong>${word.english}</strong>"`;
        feedback.className = 'feedback feedback-incorrect';
    }
    
    questionsAnswered++;
    updateDisplay();
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentTestWords.length) {
        loadQuestion();
    } else {
        showCompletion();
    }
}

function showCompletion() {
    const percentage = Math.round((score / currentTestWords.length) * 100);
    let message = "";
    
    if (percentage >= 90) {
        message = "Outstanding! Excellent work! 🌟";
    } else if (percentage >= 80) {
        message = "Great job! Well done! 👏";
    } else if (percentage >= 70) {
        message = "Good effort! Keep practising! 📚";
    } else {
        message = "Keep studying! Practice makes perfect! 💪";
    }
    
    const chapterText = selectedChapter === 'all' ? 'all chapters' : `Chapter ${selectedChapter}`;
    
    document.getElementById('final-message').innerHTML = `Final Score: ${score}/${currentTestWords.length} (${percentage}%)<br>${message}<br><small>Test: ${chapterText}</small>`;
    document.getElementById('completion-message').classList.remove('hidden');
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

function revealAnswer() {
    const word = currentTestWords[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `<strong>Answer:</strong> "${word.english}"`;
    feedback.className = 'feedback feedback-revealed';
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    // Chapter button handlers
    document.querySelectorAll('.chapter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all chapter buttons
            document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update selected chapter
            selectedChapter = this.dataset.chapter;
            // Create new test
            createNewTest();
        });
    });
    
    // Length button handlers
    document.querySelectorAll('.length-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all length buttons
            document.querySelectorAll('.length-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update selected length
            selectedLength = this.dataset.length === 'all' ? 'all' : parseInt(this.dataset.length);
            // Create new test
            createNewTest();
        });
    });
    
    // Enter key support
    document.getElementById('answer-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const checkBtn = document.getElementById('check-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (!checkBtn.classList.contains('hidden')) {
                checkAnswer();
            } else if (!nextBtn.classList.contains('hidden')) {
                nextQuestion();
            }
        }
    });
    
    // Initialize
    createNewTest();
});
