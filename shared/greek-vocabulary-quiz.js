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

// Tricky word tracking
let currentWordTrickyStatus = false; // Track if current word is marked as tricky

// ========== LENIENT ANSWER CHECKING ==========

// Calculate Levenshtein distance (edit distance) between two strings
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }
    return dp[m][n];
}

// Normalize text for comparison (remove dashes, extra spaces, parenthetical content)
function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[-–—]/g, ' ')      // Replace dashes with spaces
        .replace(/\s+/g, ' ')         // Collapse multiple spaces
        .replace(/['']/g, "'")        // Normalize apostrophes
        .trim();
}

// Remove all spaces and dashes for very lenient comparison
function removeSpacesAndDashes(text) {
    return text.toLowerCase().replace(/[-–—\s]/g, '');
}

// Remove common prefixes that students might omit
function removeCommonPrefixes(text) {
    return text
        .replace(/^(to |i |a |an |the )/, '')
        .replace(/^(he\/she\/it |he |she |it )/, '')
        .replace(/^(we |you |they )/, '')
        .trim();
}

// Check if two answers are close enough (allowing for typos)
function isCloseMatch(userAnswer, correctAnswer, maxDistance = 1) {
    // Exact match
    if (userAnswer === correctAnswer) return true;
    
    // Allow 1 typo for words 4+ characters, 2 typos for words 8+ characters
    const allowedDistance = correctAnswer.length >= 8 ? 2 : (correctAnswer.length >= 4 ? 1 : 0);
    const distance = levenshteinDistance(userAnswer, correctAnswer);
    
    return distance <= Math.min(maxDistance, allowedDistance);
}

// Main answer checking function
function isAnswerCorrect(userAnswer, correctAnswer) {
    const userNorm = normalizeText(userAnswer);
    const correctNorm = normalizeText(correctAnswer);
    
    // Split by commas, semicolons, or slashes to get all acceptable answers
    const acceptableAnswers = correctNorm
        .split(/[,;\/]/)
        .map(a => a.trim())
        .filter(a => a.length > 0);
    
    // Also add the full answer as an option
    acceptableAnswers.push(correctNorm);
    
    for (const acceptable of acceptableAnswers) {
        // Remove parenthetical content for comparison
        // e.g., "(he/she/it) is" becomes "is"
        const withoutParens = acceptable.replace(/\([^)]*\)/g, '').trim().replace(/\s+/g, ' ');
        
        // Try various comparisons
        const variations = [
            acceptable,
            withoutParens,
            removeCommonPrefixes(acceptable),
            removeCommonPrefixes(withoutParens)
        ];
        
        const userVariations = [
            userNorm,
            removeCommonPrefixes(userNorm)
        ];
        
        for (const correctVar of variations) {
            if (!correctVar) continue;
            
            for (const userVar of userVariations) {
                // Exact match
                if (userVar === correctVar) return true;
                
                // Close match (allow typos)
                if (isCloseMatch(userVar, correctVar)) return true;
                
                // No-space comparison (e.g., "slavegirl" vs "slave girl")
                if (removeSpacesAndDashes(userVar) === removeSpacesAndDashes(correctVar)) return true;
                
                // Check if user typed just one key word from a multi-word answer
                const correctWords = correctVar.split(' ').filter(w => w.length > 2);
                for (const word of correctWords) {
                    if (isCloseMatch(userVar, word)) return true;
                }
            }
        }
    }
    
    return false;
}

// ========== END LENIENT ANSWER CHECKING ==========

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

    // Check if this word is marked as tricky
    checkTrickyStatus(word.greek);
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
    
    // Check if answer is correct using lenient matching
    const isCorrect = isAnswerCorrect(userAnswerLower, correctAnswer);
    
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
        // Try to get the range text - handle different vocab data sources
        try {
            // Try different vocab data sources
            const vocabData = (typeof vocabularyData !== 'undefined') ? vocabularyData :
                              (typeof suburaniVocabularyData !== 'undefined') ? suburaniVocabularyData :
                              (typeof greekVocabularyData !== 'undefined') ? greekVocabularyData : null;
            
            if (vocabData && fromIndex !== null && toIndex !== null) {
                const chapterWords = vocabData.filter(word => word.chapter == selectedChapter);
                const wordProp = chapterWords[0]?.greek ? 'greek' : 'latin';
                const fromWord = chapterWords[fromIndex]?.[wordProp] || '';
                const toWord = chapterWords[toIndex]?.[wordProp] || '';
                if (fromWord && toWord) {
                    rangeText = `<br><small>Range: Chapter ${selectedChapter} (${fromWord} to ${toWord})</small>`;
                }
            }
        } catch (e) {
            // Silently fail - range text is optional
            console.log('Could not generate range text:', e);
        }
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

// Toggle tricky status for current word
async function toggleTricky() {
    const word = getCurrentWord();
    if (!word) return;

    const trickyBtn = document.getElementById('tricky-btn');
    if (trickyBtn) {
        trickyBtn.disabled = true;
        trickyBtn.textContent = '...';
    }

    try {
        let result;
        // For Greek, use word.greek as the identifier (stored as word_latin in DB for consistency)
        const wordKey = word.greek;

        if (typeof taskTracker !== 'undefined' && taskTracker.userId) {
            result = await taskTracker.toggleTricky(wordKey);
        } else if (typeof spacedRepetition !== 'undefined') {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const language = (typeof taskTracker !== 'undefined') ? taskTracker.language : 'greek';
                result = await spacedRepetition.toggleTrickyByWord(user.id, wordKey, language);
            }
        }

        if (result && result.success) {
            currentWordTrickyStatus = result.isTricky;
            updateTrickyButton();
            console.log(`Word "${wordKey}" marked as ${result.isTricky ? 'tricky' : 'not tricky'}`);
        } else {
            console.error('Failed to toggle tricky status:', result?.error);
        }
    } catch (err) {
        console.error('Error toggling tricky:', err);
    }

    if (trickyBtn) {
        trickyBtn.disabled = false;
        updateTrickyButton();
    }
}

// Update the tricky button appearance
function updateTrickyButton() {
    const trickyBtn = document.getElementById('tricky-btn');
    if (!trickyBtn) return;

    if (currentWordTrickyStatus) {
        trickyBtn.innerHTML = '⭐ Marked Tricky';
        trickyBtn.classList.add('tricky-active');
    } else {
        trickyBtn.innerHTML = '☆ Mark as Tricky';
        trickyBtn.classList.remove('tricky-active');
    }
}

// Check tricky status for current word
async function checkTrickyStatus(wordKey) {
    currentWordTrickyStatus = false;

    try {
        if (typeof taskTracker !== 'undefined' && taskTracker.userId) {
            currentWordTrickyStatus = await taskTracker.getTrickyStatus(wordKey);
        }
    } catch (err) {
        console.error('Error checking tricky status:', err);
    }

    updateTrickyButton();
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
