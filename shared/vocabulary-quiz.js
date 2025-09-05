// Quiz variables
let currentTestWords = [];
let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = 0;

// Shared setup variables (used by both practice setup and quiz)
let selectedChapter = null;
let fromIndex = null;
let toIndex = null;

// Spaced repetition variables
let incorrectWords = []; // Words that were answered incorrectly
let reviewQueue = []; // Queue for words to be reviewed
let questionsUntilReview = 3; // Number of questions between reviews
let questionsSinceLastReview = 0;

// Practice mode - initialized from the setup panel
function initializePractice(practiceWords, chapter, fromIdx, toIdx) {
    selectedChapter = chapter;
    fromIndex = fromIdx;
    toIndex = toIdx;
    
    // Shuffle the words for practice
    currentTestWords = [...practiceWords];
    shuffleArray(currentTestWords);
    
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    incorrectWords = [];
    reviewQueue = [];
    questionsSinceLastReview = 0;
    
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

function loadQuestion() {
    // Check if we should show a review question instead
    if (shouldShowReviewQuestion()) {
        loadReviewQuestion();
        return;
    }
    
    // Check if we've finished all questions
    if (currentQuestionIndex >= currentTestWords.length) {
        // If there are still words in review queue, continue with reviews only
        if (reviewQueue.length > 0) {
            loadReviewQuestion();
            return;
        } else {
            showCompletion();
            return;
        }
    }
    
    const word = currentTestWords[currentQuestionIndex];
    document.getElementById('latin-word').textContent = word.latin;
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

function shouldShowReviewQuestion() {
    return reviewQueue.length > 0 && 
           questionsSinceLastReview >= questionsUntilReview && 
           currentQuestionIndex < currentTestWords.length;
}

function loadReviewQuestion() {
    if (reviewQueue.length === 0) return;
    
    // Get the next review word
    const reviewWord = reviewQueue.shift();
    
    document.getElementById('latin-word').textContent = reviewWord.latin;
    document.getElementById('word-info').textContent = reviewWord.info + ' (Review)';
    document.getElementById('answer-input').value = '';
    
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    feedback.className = 'feedback';
    
    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.remove('hidden');
    
    // Store that this is a review question
    reviewWord.isReview = true;
    
    // Set the current word to the review word temporarily
    currentTestWords.reviewWord = reviewWord;
    
    updateDisplay();
    document.getElementById('answer-input').focus();
    
    questionsSinceLastReview = 0;
}

function getCurrentWord() {
    // Check if we're showing a review question
    if (currentTestWords.reviewWord && currentTestWords.reviewWord.isReview) {
        return currentTestWords.reviewWord;
    }
    return currentTestWords[currentQuestionIndex];
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
    
    const isReviewQuestion = word.isReview;
    
    if (isCorrect) {
        let feedbackText = `<strong>Correct!</strong> ✓<br><small>"${word.latin}" = "${word.english}"</small>`;
        if (isReviewQuestion) {
            feedbackText += '<br><em>Great! You remembered this one!</em>';
        }
        feedback.innerHTML = feedbackText;
        feedback.className = 'feedback feedback-correct';
        score++;
    } else {
        let feedbackText = `<strong>Incorrect</strong> ✗<br>You wrote: "<em>${userAnswer}</em>"<br>Correct: "<strong>${word.english}</strong>"`;
        feedback.innerHTML = feedbackText;
        feedback.className = 'feedback feedback-incorrect';
        
        // Add to incorrect words for review (only if not already a review question)
        if (!isReviewQuestion) {
            addWordForReview(word);
            feedbackText += '<br><em>Don\'t worry - you\'ll see this word again soon!</em>';
            feedback.innerHTML = feedbackText;
        } else {
            // If it's a review question and still incorrect, add it back to the review queue
            addWordForReview(word);
            feedbackText += '<br><em>Added back to review - keep practising!</em>';
            feedback.innerHTML = feedbackText;
        }
    }
    
    questionsAnswered++;
    questionsSinceLastReview++;
    
    // Clear the review word marker
    if (isReviewQuestion) {
        delete currentTestWords.reviewWord;
    }
    
    updateDisplay();
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

function addWordForReview(word) {
    // Don't add duplicates to the review queue
    const isAlreadyInQueue = reviewQueue.some(reviewWord => reviewWord.latin === word.latin);
    const isAlreadyInIncorrect = incorrectWords.some(incorrectWord => incorrectWord.latin === word.latin);
    
    if (!isAlreadyInQueue) {
        // Add to review queue (will appear in a few questions)
        reviewQueue.push({...word, isReview: true});
    }
    
    if (!isAlreadyInIncorrect) {
        incorrectWords.push({...word});
    }
}

function nextQuestion() {
    // Only increment question index if we weren't showing a review question
    if (!getCurrentWord().isReview) {
        currentQuestionIndex++;
    }
    
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
        message = "Keep studying! Practice makes perfect! 💪";
    }
    
    const chapterWords = vocabularyData.filter(word => word.chapter == selectedChapter);
    const fromWord = chapterWords[fromIndex].latin;
    const toWord = chapterWords[toIndex].latin;
    
    let reviewMessage = '';
    if (incorrectWords.length > 0) {
        reviewMessage = `<br><small>You reviewed ${incorrectWords.length} word(s) that needed extra practice.</small>`;
    }
    
    document.getElementById('final-message').innerHTML = `
        Final Score: ${score}/${totalQuestions} (${percentage}%)
        <br>${message}
        <br><small>Range: Chapter ${selectedChapter} (${fromWord} to ${toWord})</small>
        ${reviewMessage}
        <br><br><button class="btn" onclick="resetPractice()" style="margin-top: 1rem;">New Practice Session</button>
    `;
    document.getElementById('completion-message').classList.remove('hidden');
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

function resetPractice() {
    // Show setup panel, hide quiz area
    document.getElementById('setupPanel').style.display = 'block';
    document.getElementById('quizArea').classList.remove('active');
    document.getElementById('completion-message').classList.add('hidden');
    
    // Reset all variables
    currentTestWords = [];
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    incorrectWords = [];
    reviewQueue = [];
    questionsSinceLastReview = 0;
}

function revealAnswer() {
    const word = getCurrentWord();
    const feedback = document.getElementById('feedback');
    
    let feedbackText = `<strong>Answer:</strong> "${word.english}"`;
    if (word.isReview) {
        feedbackText += '<br><em>This was a review question - try to remember it next time!</em>';
        // Add it back to review queue since they needed to reveal it
        addWordForReview(word);
    }
    
    feedback.innerHTML = feedbackText;
    feedback.className = 'feedback feedback-revealed';
    
    questionsSinceLastReview++;
    
    // Clear the review word marker
    if (word.isReview) {
        delete currentTestWords.reviewWord;
    }
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
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
});
