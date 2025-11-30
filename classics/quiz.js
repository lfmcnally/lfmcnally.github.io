// Classics Quiz Logic with Progress Tracking
// Handles quiz flow, answer checking, and saves progress to Supabase

let currentUser = null;
let taskId = null;

// Current selection state
let currentCourse = null;
let currentTopic = null;
let currentSubtopic = null;

// Quiz state
let courseInfo = null;
let topicInfo = null;
let subtopicData = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = 0;
let selectedAnswer = null;
let showingFeedback = false;

// Answer tracking
let currentAttemptNumber = 1;
let answersToSave = [];

// Available courses
const availableCourses = [
    {
        id: 'politics',
        title: 'Politics of the Late Republic',
        subtitle: 'OCR Classical Civilisation',
        icon: '🏛️',
        topics: 6,
        description: 'Explore the political structures, key figures, and events that shaped the final century of the Roman Republic.'
    }
];

// DOM elements
const courseSelector = document.getElementById('courseSelector');
const topicSelector = document.getElementById('topicSelector');
const subtopicSelector = document.getElementById('subtopicSelector');
const quizInterface = document.getElementById('quizInterface');
const completionScreen = document.getElementById('completionScreen');

// Check tracking status (non-blocking)
async function checkTrackingStatus() {
    const indicator = document.getElementById('trackingIndicator');
    const trackingText = indicator ? indicator.querySelector('span') : null;

    if (!indicator || !trackingText) return;

    if (typeof supabase === 'undefined') {
        indicator.classList.add('not-tracking');
        indicator.classList.add('active');
        trackingText.textContent = 'Progress tracking unavailable';
        return;
    }

    try {
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            currentUser = user;
            indicator.classList.remove('not-tracking');
            indicator.classList.add('active');

            const urlParams = new URLSearchParams(window.location.search);
            const taskIdParam = urlParams.get('task_id');

            if (taskIdParam) {
                taskId = taskIdParam;
                trackingText.textContent = '📋 Assigned task — progress will be recorded';
            } else {
                trackingText.textContent = '✓ Logged in — your progress will be tracked';
            }
        } else {
            indicator.classList.add('not-tracking');
            indicator.classList.add('active');
            trackingText.innerHTML = 'Log in to track progress — <a href="/auth/login.html">Sign in</a>';
        }
    } catch (err) {
        console.error('Error checking tracking status:', err);
        indicator.classList.add('not-tracking');
        indicator.classList.add('active');
        trackingText.textContent = 'Progress tracking unavailable';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Check auth in background
        checkTrackingStatus();

        // Check URL params for direct navigation
        const urlParams = new URLSearchParams(window.location.search);
        const courseParam = urlParams.get('course');
        const topicParam = urlParams.get('topic');
        const subtopicParam = urlParams.get('subtopic');
        taskId = urlParams.get('task_id');

        if (courseParam && topicParam && subtopicParam) {
            // Direct link to subtopic
            await loadCourse(courseParam);
            await loadTopic(topicParam);
            await startQuiz(subtopicParam);
        } else if (courseParam && topicParam) {
            // Direct link to topic
            await loadCourse(courseParam);
            await loadTopic(topicParam);
            showSubtopicSelector();
        } else if (courseParam) {
            // Direct link to course
            await loadCourse(courseParam);
            showTopicSelector();
        } else {
            // Show course selector
            showCourseSelector();
        }
    } catch (err) {
        console.error('Error initializing:', err);
        showCourseSelector();
    }
});

// Show course selector
function showCourseSelector() {
    courseSelector.style.display = 'grid';
    topicSelector.style.display = 'none';
    subtopicSelector.style.display = 'none';
    quizInterface.style.display = 'none';
    completionScreen.style.display = 'none';

    const grid = document.getElementById('courseGrid');
    grid.innerHTML = availableCourses.map(course => `
        <div class="selection-card" onclick="selectCourse('${course.id}')">
            <div class="selection-card-icon">${course.icon}</div>
            <div class="selection-card-title">${course.title}</div>
            <div class="selection-card-subtitle">${course.subtitle}</div>
            <div class="selection-card-meta">${course.topics} topics</div>
        </div>
    `).join('');
}

// Select course
async function selectCourse(courseId) {
    await loadCourse(courseId);
    showTopicSelector();
}

// Load course data
async function loadCourse(courseId) {
    currentCourse = courseId;

    // Load course info dynamically
    const script = document.createElement('script');
    script.src = `data/${courseId}/${courseId}-info.js`;

    await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    // Get the loaded info (uses naming convention: politicsInfo, etc.)
    const varName = courseId.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()) + 'Info';
    courseInfo = window[varName];
}

// Show topic selector
function showTopicSelector() {
    courseSelector.style.display = 'none';
    topicSelector.style.display = 'grid';
    subtopicSelector.style.display = 'none';
    quizInterface.style.display = 'none';
    completionScreen.style.display = 'none';

    document.getElementById('topicSelectorTitle').textContent = courseInfo.title;
    document.getElementById('courseInfo').innerHTML = `
        <h4>About This Course</h4>
        <p>${courseInfo.description || ''}</p>
        <p><strong>Author/Period:</strong> ${courseInfo.period || ''}</p>
    `;

    const grid = document.getElementById('topicGrid');
    grid.innerHTML = courseInfo.topics.map(topic => `
        <div class="selection-card" onclick="selectTopic('${topic.id}')">
            <div class="selection-card-icon">${topic.icon || '📖'}</div>
            <div class="selection-card-title">${topic.title}</div>
            <div class="selection-card-subtitle">${topic.subtitle || ''}</div>
            <div class="selection-card-meta">${topic.subtopics} subtopics</div>
        </div>
    `).join('');
}

// Select topic
async function selectTopic(topicId) {
    await loadTopic(topicId);
    showSubtopicSelector();
}

// Load topic data
async function loadTopic(topicId) {
    currentTopic = topicId;

    // Load topic info
    const script = document.createElement('script');
    script.src = `data/${currentCourse}/${topicId}-info.js`;

    await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    // Get the loaded info
    const varName = topicId.replace(/-/g, '').replace(/([0-9]+)/g, '$1') + 'Info';
    // Try different naming patterns
    topicInfo = window[varName] || window[topicId.replace(/-/g, '') + 'Info'] || window['topic' + topicId.split('-')[0].replace('topic', '') + 'Info'];
}

// Show subtopic selector
function showSubtopicSelector() {
    courseSelector.style.display = 'none';
    topicSelector.style.display = 'none';
    subtopicSelector.style.display = 'grid';
    quizInterface.style.display = 'none';
    completionScreen.style.display = 'none';

    document.getElementById('subtopicSelectorTitle').textContent = topicInfo.title;
    document.getElementById('topicInfo').innerHTML = `
        <h4>About This Topic</h4>
        <p>${topicInfo.description || ''}</p>
        <p><strong>Key themes:</strong> ${topicInfo.themes || ''}</p>
    `;

    const grid = document.getElementById('subtopicGrid');
    grid.innerHTML = topicInfo.subtopics.map(subtopic => `
        <button class="subtopic-btn" onclick="startQuiz('${subtopic.id}')">
            <div class="subtopic-btn-number">${subtopic.number}</div>
            <div class="subtopic-btn-title">${subtopic.title}</div>
        </button>
    `).join('');
}

// Start quiz
async function startQuiz(subtopicId) {
    currentSubtopic = subtopicId;

    // Load subtopic data
    const script = document.createElement('script');
    script.src = `data/${currentCourse}/${currentTopic}-${subtopicId}.js`;

    await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    // Get loaded data (naming: topic1Subtopic1, etc.)
    const varName = currentTopic.replace(/-/g, '') + 'Subtopic' + subtopicId.replace(/-/g, '');
    subtopicData = window[varName] || window[currentTopic.replace(/-/g, '') + subtopicId.replace(/-/g, '')];

    if (!subtopicData || !subtopicData.questions) {
        alert('Could not load quiz data');
        showSubtopicSelector();
        return;
    }

    // Get attempt number if user is logged in
    if (currentUser) {
        await getAttemptNumber();
    }

    // Initialize quiz
    questions = [...subtopicData.questions];
    shuffleArray(questions);

    currentQuestionIndex = 0;
    score = 0;
    answered = 0;
    answersToSave = [];

    // Show quiz interface
    courseSelector.style.display = 'none';
    topicSelector.style.display = 'none';
    subtopicSelector.style.display = 'none';
    quizInterface.style.display = 'grid';
    completionScreen.style.display = 'none';

    document.getElementById('quizTitle').textContent = subtopicData.title;
    document.getElementById('currentScore').textContent = '0';

    showQuestion();
}

// Get attempt number for tracking
async function getAttemptNumber() {
    if (!currentUser || typeof supabase === 'undefined') return;

    try {
        const { data, error } = await supabase
            .from('classics_quiz_progress')
            .select('attempts')
            .eq('student_id', currentUser.id)
            .eq('course_id', currentCourse)
            .eq('topic_id', currentTopic)
            .eq('subtopic_id', currentSubtopic)
            .order('attempts', { ascending: false })
            .limit(1);

        if (data && data.length > 0) {
            currentAttemptNumber = data[0].attempts + 1;
        } else {
            currentAttemptNumber = 1;
        }
    } catch (err) {
        console.error('Error getting attempt number:', err);
        currentAttemptNumber = 1;
    }
}

// Show current question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showCompletion();
        return;
    }

    const question = questions[currentQuestionIndex];

    // Update progress
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('questionCounter').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById('questionTopic').textContent = question.topic || subtopicData.title;
    document.getElementById('questionText').textContent = question.question;

    // Render options
    const container = document.getElementById('optionsContainer');

    if (question.type === 'multiple-choice' || !question.type) {
        const options = question.choices || question.options;
        const shuffledIndices = options.map((_, i) => i);
        shuffleArray(shuffledIndices);

        container.innerHTML = shuffledIndices.map((originalIndex, displayIndex) => {
            const option = options[originalIndex];
            const text = typeof option === 'string' ? option : option.text;
            return `
                <button class="option-btn" data-index="${originalIndex}" onclick="selectOption(this, ${originalIndex})">
                    ${text}
                </button>
            `;
        }).join('');
    }

    // Reset state
    selectedAnswer = null;
    showingFeedback = false;
    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('continueBtn').classList.remove('show');
}

// Select an option
function selectOption(button, index) {
    if (showingFeedback) return;

    // Clear previous selection
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));

    // Select this option
    button.classList.add('selected');
    selectedAnswer = index;

    // Check answer
    checkAnswer();
}

// Check the answer
function checkAnswer() {
    if (selectedAnswer === null) return;

    showingFeedback = true;
    answered++;

    const question = questions[currentQuestionIndex];
    const options = question.choices || question.options;
    let isCorrect = false;
    let correctIndex = 0;

    // Determine correct answer
    if (question.correct !== undefined) {
        correctIndex = question.correct;
        isCorrect = selectedAnswer === correctIndex;
    } else if (options[0].correct !== undefined) {
        correctIndex = options.findIndex(opt => opt.correct);
        isCorrect = selectedAnswer === correctIndex;
    }

    if (isCorrect) {
        score++;
        document.getElementById('currentScore').textContent = score;
    }

    // Show correct/incorrect styling
    document.querySelectorAll('.option-btn').forEach(btn => {
        const idx = parseInt(btn.dataset.index);
        if (idx === correctIndex) {
            btn.classList.add('correct');
        } else if (idx === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    const feedbackText = question.explanation ||
        (isCorrect ? 'Correct!' : `The correct answer was: ${typeof options[correctIndex] === 'string' ? options[correctIndex] : options[correctIndex].text}`);

    feedback.textContent = feedbackText;
    feedback.classList.remove('correct', 'incorrect');
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');

    // Show continue button
    document.getElementById('continueBtn').classList.add('show');

    // Track answer
    if (currentUser) {
        answersToSave.push({
            question_index: currentQuestionIndex,
            question_text: question.question,
            selected_answer: selectedAnswer,
            correct_answer: correctIndex,
            is_correct: isCorrect
        });
    }
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Show completion screen
async function showCompletion() {
    quizInterface.style.display = 'none';
    completionScreen.style.display = 'block';

    const percentage = Math.round((score / questions.length) * 100);

    let icon, title, message;
    if (percentage >= 90) {
        icon = '🏆';
        title = 'Outstanding!';
        message = 'Exceptional knowledge of this topic!';
    } else if (percentage >= 70) {
        icon = '⭐';
        title = 'Well Done!';
        message = 'Good understanding of the material.';
    } else if (percentage >= 50) {
        icon = '📚';
        title = 'Good Effort!';
        message = 'Keep studying to improve your score.';
    } else {
        icon = '💪';
        title = 'Keep Going!';
        message = 'Review the material and try again.';
    }

    document.getElementById('completionIcon').textContent = icon;
    document.getElementById('completionTitle').textContent = title;
    document.getElementById('completionScore').textContent = `${percentage}%`;
    document.getElementById('completionMessage').textContent = `${message} You got ${score} out of ${questions.length} correct.`;

    // Save progress
    if (currentUser) {
        await saveProgress(percentage);
    }
}

// Save progress to Supabase
async function saveProgress(percentage) {
    if (!currentUser || typeof supabase === 'undefined') return;

    try {
        // Save quiz progress
        const { error: progressError } = await supabase
            .from('classics_quiz_progress')
            .insert({
                student_id: currentUser.id,
                course_id: currentCourse,
                topic_id: currentTopic,
                subtopic_id: currentSubtopic,
                questions_correct: score,
                questions_total: questions.length,
                score_percentage: percentage,
                attempts: currentAttemptNumber,
                task_id: taskId || null,
                completed_at: new Date().toISOString()
            });

        if (progressError) {
            console.error('Error saving progress:', progressError);
        }

        // Save individual answers
        if (answersToSave.length > 0) {
            const answersWithMeta = answersToSave.map(answer => ({
                ...answer,
                student_id: currentUser.id,
                course_id: currentCourse,
                topic_id: currentTopic,
                subtopic_id: currentSubtopic,
                attempt_number: currentAttemptNumber
            }));

            const { error: answersError } = await supabase
                .from('classics_quiz_answers')
                .insert(answersWithMeta);

            if (answersError) {
                console.error('Error saving answers:', answersError);
            }
        }

        // Update task if this was assigned
        if (taskId) {
            await supabase
                .from('assigned_tasks')
                .update({
                    status: 'completed',
                    completed_at: new Date().toISOString(),
                    score: percentage
                })
                .eq('id', taskId);
        }
    } catch (err) {
        console.error('Error saving progress:', err);
    }
}

// Retry quiz
function retryQuiz() {
    startQuiz(currentSubtopic);
}

// Exit quiz
function exitQuiz() {
    showSubtopicSelector();
}

// Utility: shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
