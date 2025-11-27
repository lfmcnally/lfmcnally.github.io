// Quiz variables
let currentTestWords = [];
let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = 0;

// Shared setup variables (used by both practice setup and quiz)
let selectedChapter = null;
let fromIndex = null;
let toIndex = null;

// Mastery mode variables
const MASTERY_THRESHOLD = 2; // Number of times a word must be answered correctly
let wordMastery = {}; // Track correct count per word: { "greek_word": correctCount }
let masteredCount = 0; // How many words have been fully mastered
let totalWordsToMaster = 0; // Total words that need mastering

// Practice mode - initialized from the setup panel
function initializePractice(practiceWords, chapter, fromIdx, toIdx) {
    selectedChapter = chapter;
    fromIndex = fromIdx;
    toIndex = toIdx;
    
    // Set up words for practice
    currentTestWords = [...practiceWords];
    shuffleArray(currentTestWords);
    
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    
    // Initialize mastery tracking
    wordMastery = {};
    masteredCount = 0;
    totalWordsToMaster = practiceWords.length;
    
    for (const word of practiceWords) {
        wordMastery[word.greek] = 0;
    }
    
    // Hide completion message
    document.getElementById('completion-message').classList.add('hidden');
    
    loadQuestion();
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getUnmasteredWords() {
    // Return words that haven't reached mastery threshold yet
    return currentTestWords.filter(word => wordMastery[word.greek] < MASTERY_THRESHOLD);
}

function updateDisplay() {
    const unmasteredWords = getUnmasteredWords();
    
    document.getElementById('current-question').textContent = questionsAnswered + 1;
    document.getElementById('total-questions').textContent = '∞'; // Continuous until mastery
    document.getElementById('score').textContent = score;
    document.getElementById('answered').textContent = questionsAnswered;
    
    const percentage = questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : 0;
    document.getElementById('percentage').textContent = percentage;
    
    // Progress bar shows mastery progress
    const masteryProgress = (masteredCount / totalWordsToMaster) * 100;
    document.getElementById('progress-fill').style.width = masteryProgress + '%';
    
    // Update mastery display if element exists
    const masteryDisplay = document.getElementById('mastery-display');
    if (masteryDisplay) {
        masteryDisplay.textContent = `${masteredCount}/${totalWordsToMaster} words mastered`;
    }
}

function loadQuestion() {
    // Get words that still need practice
    const unmasteredWords = getUnmasteredWords();
    
    // Check if all words are mastered
    if (unmasteredWords.length === 0) {
        showCompletion();
        return;
    }
    
    // Pick a random unmastered word
    const randomIndex = Math.floor(Math.random() * unmasteredWords.length);
    const word = unmasteredWords[randomIndex];
    
    // Store current word for checking
    currentTestWords.currentWord = word;
    
    document.getElementById('greek-word').textContent = word.greek;
    
    // Show mastery progress for this word
    const currentMastery = wordMastery[word.greek];
    const masteryIndicator = currentMastery > 0 ? ` (${currentMastery}/${MASTERY_THRESHOLD} ✓)` : '';
    document.getElementById('word-info').textContent = word.info + masteryIndicator;
    
    document.getElementById('answer-input').value = '';
    
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    feedback.className = 'feedback';
    
    document.getElementById('check-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('reveal-btn').style.display = 'inline-block';
    
    updateDisplay();
    document.getElementById('answer-input').focus();
    
    // === TRACKING: Notify that a new word is displayed ===
    if (typeof window.onWordDisplayed === 'function') {
        window.onWordDisplayed(word);
    }
}

function getCurrentWord() {
    return currentTestWords.currentWord;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim();
    
    // Check if answer is empty
    if (!userAnswer) {
        alert('Please enter an answer first!');
        return;
    }
    
    const word = getCurrentWord();
    const correctAnswer = word.english.toLowerCase();
    const userAnswerLower = userAnswer.toLowerCase();
    
    const feedback = document.getElementById('feedback');
    
    // Split correct answer by commas to handle multiple acceptable answers
    const correctParts = correctAnswer.split(',').map(p => p.trim());
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
    
    // === TRACKING: Record the word answer ===
    if (typeof window.onWordAnswered === 'function') {
        window.onWordAnswered(word, isCorrect);
    }
    
    if (isCorrect) {
        // Increment mastery count
        wordMastery[word.greek]++;
        score++;
        
        const newMastery = wordMastery[word.greek];
        
        if (newMastery >= MASTERY_THRESHOLD) {
            // Word is now mastered!
            masteredCount++;
            feedback.innerHTML = `<strong>Correct!</strong> ✓ <span style="color: #059669; font-weight: bold;">MASTERED! 🌟</span><br><small>"${word.greek}" = "${word.english}"</small>`;
        } else {
            feedback.innerHTML = `<strong>Correct!</strong> ✓ (${newMastery}/${MASTERY_THRESHOLD} towards mastery)<br><small>"${word.greek}" = "${word.english}"</small>`;
        }
        feedback.className = 'feedback feedback-correct';
    } else {
        // Reset mastery count for this word
        const previousMastery = wordMastery[word.greek];
        wordMastery[word.greek] = 0;
        
        let resetMessage = '';
        if (previousMastery > 0) {
            resetMessage = `<br><em>Progress reset - you'll need to get this right ${MASTERY_THRESHOLD} times again.</em>`;
        }
        
        feedback.innerHTML = `<strong>Incorrect</strong> ✗<br>You wrote: "<em>${userAnswer}</em>"<br>Correct: "<strong>${word.english}</strong>"${resetMessage}`;
        feedback.className = 'feedback feedback-incorrect';
    }
    
    questionsAnswered++;
    
    updateDisplay();
    
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('reveal-btn').style.display = 'none';
}

function nextQuestion() {
    loadQuestion();
}

function showCompletion() {
    const totalQuestions = questionsAnswered;
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = "";
    
    if (percentage >= 90) {
        message = "Outstanding! Excellent work! 🌟";
    } else if (percentage >= 80) {
        message = "Great job! Well done! 👏";
    } else if (percentage >= 70) {
        message = "Good effort! Keep practising! 📚";
    } else {
        message = "You did it! Practice makes perfect! 💪";
    }
    
    let rangeText = '';
    if (selectedChapter === 'review') {
        rangeText = `<br><small>Review Mode: ${totalWordsToMaster} weak words</small>`;
    } else {
        const chapterWords = vocabularyData.filter(word => word.chapter == selectedChapter);
        const fromWord = chapterWords[fromIndex].latin;
        const toWord = chapterWords[toIndex].latin;
        rangeText = `<br><small>Range: Chapter ${selectedChapter} (${fromWord} to ${toWord})</small>`;
    }
    
    document.getElementById('final-message').innerHTML = `
        <strong>All ${totalWordsToMaster} words mastered!</strong> 🎉
        <br><br>Final Score: ${score}/${totalQuestions} (${percentage}%)
        <br>${message}
        ${rangeText}
        <br><small>Each word answered correctly ${MASTERY_THRESHOLD} times.</small>
        <br><br><button class="btn" onclick="resetPractice()" style="margin-top: 1rem;">New Practice Session</button>
    `;
    document.getElementById('completion-message').classList.remove('hidden');
    
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('reveal-btn').style.display = 'none';
    
    // Send results to task tracker (if tracking is active)
    if (typeof window.onPracticeComplete === 'function') {
        window.onPracticeComplete(percentage, totalQuestions, score);
    }
}

function resetPractice() {
    // If in review mode, go back to student dashboard
    if (selectedChapter === 'review') {
        window.location.href = '../dashboard/student.html';
        return;
    }
    
    // Show setup panel, hide quiz area
    document.getElementById('setupPanel').style.display = 'block';
    document.getElementById('quizArea').classList.remove('active');
    document.getElementById('completion-message').classList.add('hidden');
    
    // Reset all variables
    currentTestWords = [];
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    wordMastery = {};
    masteredCount = 0;
    totalWordsToMaster = 0;
}

function revealAnswer() {
    const word = getCurrentWord();
    const feedback = document.getElementById('feedback');
    
    // Reset mastery count since they needed help
    const previousMastery = wordMastery[word.greek];
    wordMastery[word.greek] = 0;
    
    let resetMessage = '';
    if (previousMastery > 0) {
        resetMessage = '<br><em>Progress reset - try to remember it next time!</em>';
    }
    
    feedback.innerHTML = `<strong>Answer:</strong> "${word.english}"${resetMessage}`;
    feedback.className = 'feedback feedback-revealed';
    
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('reveal-btn').style.display = 'none';
    
    // === TRACKING: Record as incorrect when revealed ===
    if (typeof window.onWordAnswered === 'function') {
        window.onWordAnswered(word, false);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Enter key support
    document.getElementById('answer-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const checkBtn = document.getElementById('check-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (checkBtn.style.display !== 'none') {
                checkAnswer();
            } else if (nextBtn.style.display !== 'none') {
                nextQuestion();
            }
        }
    });
});
