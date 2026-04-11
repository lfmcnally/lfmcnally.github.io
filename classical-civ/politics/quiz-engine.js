// Flashcard Quiz Engine - Politics of the Late Republic
// Retrieval Practice with Self-Assessment

let selectedLessons = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let ratings = [];
let quizStartTime = null;

// Lesson selection
function toggleLesson(lesson) {
    const btn = document.querySelector(`[data-lesson="${lesson}"]`);
    if (selectedLessons.includes(lesson)) {
        selectedLessons = selectedLessons.filter(l => l !== lesson);
        btn.classList.remove('selected');
    } else {
        selectedLessons.push(lesson);
        btn.classList.add('selected');
    }
    updateStartButton();
}

function selectAllLessons() {
    const allBtns = document.querySelectorAll('.lesson-option');
    const allSelected = selectedLessons.length === allBtns.length;

    allBtns.forEach(btn => {
        const lesson = btn.getAttribute('data-lesson');
        if (allSelected) {
            btn.classList.remove('selected');
        } else {
            btn.classList.add('selected');
            if (!selectedLessons.includes(lesson)) {
                selectedLessons.push(lesson);
            }
        }
    });

    if (allSelected) selectedLessons = [];
    updateStartButton();
}

function updateStartButton() {
    const btn = document.getElementById('start-btn');
    if (btn) {
        btn.disabled = selectedLessons.length === 0;
        const count = getQuestionCount();
        btn.textContent = selectedLessons.length === 0
            ? 'Select at least one lesson'
            : `Start (${count} question${count !== 1 ? 's' : ''})`;
    }
}

function getQuestionCount() {
    let count = 0;
    for (const lesson of selectedLessons) {
        if (quizData[lesson]) {
            count += quizData[lesson].questions.length;
        }
    }
    return count;
}

// Start quiz
function startQuiz() {
    if (selectedLessons.length === 0) return;

    let questionsToUse = [];
    for (const lesson of selectedLessons) {
        if (quizData[lesson]) {
            questionsToUse.push(...quizData[lesson].questions.map(q => ({
                ...q,
                lesson: lesson,
                lessonTitle: quizData[lesson].title
            })));
        }
    }

    // Shuffle
    for (let i = questionsToUse.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsToUse[i], questionsToUse[j]] = [questionsToUse[j], questionsToUse[i]];
    }

    currentQuestions = questionsToUse;
    currentQuestionIndex = 0;
    ratings = [];
    quizStartTime = Date.now();

    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    document.getElementById('results-screen').style.display = 'none';

    loadQuestion();
}

// Load current question
function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const total = currentQuestions.length;

    // Progress
    document.getElementById('progress-text').textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
    document.getElementById('progress-bar-fill').style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('lesson-tag').textContent = `${q.lesson}: ${q.lessonTitle}`;

    // Question
    document.getElementById('question-text').textContent = q.question;

    // Reset answer area
    const answerInput = document.getElementById('answer-input');
    answerInput.value = '';
    answerInput.readOnly = false;
    answerInput.style.opacity = '1';
    answerInput.placeholder = 'Write your answer here before revealing the model answer...';

    // Reset buttons
    document.getElementById('reveal-btn').style.display = 'block';
    document.getElementById('model-answer-section').style.display = 'none';
    document.getElementById('rating-section').style.display = 'none';

    // Focus textarea
    answerInput.focus();

    // Scroll to top of question
    window.scrollTo({ top: document.getElementById('question-screen').offsetTop - 100, behavior: 'smooth' });
}

// Reveal model answer
function revealAnswer() {
    const q = currentQuestions[currentQuestionIndex];

    // Dim the textarea
    const answerInput = document.getElementById('answer-input');
    answerInput.readOnly = true;
    answerInput.style.opacity = '0.6';

    // Hide reveal button
    document.getElementById('reveal-btn').style.display = 'none';

    // Show model answer
    document.getElementById('model-answer-text').textContent = q.modelAnswer;

    // Build key points
    const keyPointsList = document.getElementById('key-points-list');
    keyPointsList.innerHTML = '';
    if (q.keyPoints && q.keyPoints.length > 0) {
        q.keyPoints.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            keyPointsList.appendChild(li);
        });
        document.getElementById('key-points-section').style.display = 'block';
    } else {
        document.getElementById('key-points-section').style.display = 'none';
    }

    document.getElementById('model-answer-section').style.display = 'block';

    // Show rating buttons
    document.getElementById('rating-section').style.display = 'flex';

    // Smooth scroll to model answer
    document.getElementById('model-answer-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Rate answer and move on
function rateAnswer(rating) {
    const q = currentQuestions[currentQuestionIndex];
    const userAnswer = document.getElementById('answer-input').value;

    ratings.push({
        question: q.question,
        modelAnswer: q.modelAnswer,
        keyPoints: q.keyPoints || [],
        userAnswer: userAnswer,
        rating: rating,
        lesson: q.lesson,
        lessonTitle: q.lessonTitle
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    const nailed = ratings.filter(r => r.rating === 'nailed').length;
    const mostly = ratings.filter(r => r.rating === 'mostly').length;
    const notReally = ratings.filter(r => r.rating === 'not-really').length;
    const total = ratings.length;

    const minutes = Math.max(1, Math.round((Date.now() - quizStartTime) / 60000));

    document.getElementById('result-nailed').textContent = nailed;
    document.getElementById('result-mostly').textContent = mostly;
    document.getElementById('result-not-really').textContent = notReally;
    document.getElementById('result-time').textContent = minutes;

    // Score message
    const score = total > 0 ? ((nailed + mostly * 0.5) / total) * 100 : 0;
    let message = '';
    if (score >= 85) message = 'Excellent recall! You know this content well. Keep it fresh with regular practice.';
    else if (score >= 70) message = 'Good knowledge overall. Focus your revision on the topics you marked "Not really".';
    else if (score >= 50) message = 'Decent foundation. Go back to the lessons for the areas you struggled with, then try again.';
    else message = 'This content needs more work. Re-read the lesson material and take notes before trying again.';

    document.getElementById('result-message').textContent = message;

    // Build review list
    buildReviewList();

    // Show/hide retry button
    const weakCount = mostly + notReally;
    const retryBtn = document.getElementById('retry-weak-btn');
    if (weakCount > 0) {
        retryBtn.style.display = 'inline-block';
        retryBtn.textContent = `Retry Weak Ones (${weakCount})`;
    } else {
        retryBtn.style.display = 'none';
    }
}

// Build review list in results
function buildReviewList() {
    const container = document.getElementById('review-list');
    container.innerHTML = '';

    // Group by rating
    const groups = [
        { label: 'Not Really', icon: '✗', class: 'not-really', items: ratings.filter(r => r.rating === 'not-really') },
        { label: 'Mostly', icon: '~', class: 'mostly', items: ratings.filter(r => r.rating === 'mostly') },
        { label: 'Nailed It', icon: '✓', class: 'nailed', items: ratings.filter(r => r.rating === 'nailed') }
    ];

    groups.forEach(group => {
        if (group.items.length === 0) return;

        const section = document.createElement('div');
        section.className = `review-group review-${group.class}`;

        const header = document.createElement('div');
        header.className = 'review-group-header';
        header.textContent = `${group.label} (${group.items.length})`;
        section.appendChild(header);

        group.items.forEach(item => {
            const row = document.createElement('div');
            row.className = 'review-item';

            const lessonTag = document.createElement('span');
            lessonTag.className = 'review-lesson-tag';
            lessonTag.textContent = item.lesson;

            const questionText = document.createElement('span');
            questionText.className = 'review-question-text';
            questionText.textContent = item.question;

            row.appendChild(lessonTag);
            row.appendChild(questionText);
            section.appendChild(row);
        });

        container.appendChild(section);
    });
}

// Restart quiz
function restartQuiz() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'block';
    selectedLessons = [];
    document.querySelectorAll('.lesson-option').forEach(btn => btn.classList.remove('selected'));
    updateStartButton();
}

// Retry weak answers
function retryWeak() {
    const weakRatings = ratings.filter(r => r.rating !== 'nailed');
    const weakQuestions = weakRatings.map(r => {
        return currentQuestions.find(q => q.question === r.question);
    }).filter(Boolean);

    if (weakQuestions.length === 0) return;

    // Shuffle
    for (let i = weakQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [weakQuestions[i], weakQuestions[j]] = [weakQuestions[j], weakQuestions[i]];
    }

    currentQuestions = weakQuestions;
    currentQuestionIndex = 0;
    ratings = [];
    quizStartTime = Date.now();

    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    loadQuestion();
}

// Keyboard shortcut: Enter to reveal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        const revealBtn = document.getElementById('reveal-btn');
        if (revealBtn && revealBtn.style.display !== 'none') {
            e.preventDefault();
            revealAnswer();
        }
    }
});
