// Set Text Quiz Logic with Progress Tracking and Answer Recording
// Handles quiz flow, answer checking, and saves progress + individual answers to Supabase

// Note: supabase client is initialised in config.js
let currentUser = null;
let taskId = null;

// Current text/section identifiers
let currentText = null;
let currentSection = null;

// Quiz state
let textInfo = null;
let sectionData = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = 0;
let selectedAnswer = null;
let showingFeedback = false;

// Answer tracking
let currentAttemptNumber = 1;
let answersToSave = [];

// Available texts
const availableTexts = [
    {
        id: 'messalina',
        title: 'Messalina',
        author: 'Tacitus',
        source: 'Annals XI',
        icon: '👑',
        sections: 9
    },
    {
        id: 'baucis-philemon',
        title: 'Baucis and Philemon',
        author: 'Ovid',
        source: 'Metamorphoses VIII',
        icon: '🌳',
        sections: 6
    },
    {
        id: 'otium',
        title: 'Otium',
        author: 'Catullus',
        source: 'Poems 50 & 13',
        icon: '📜',
        sections: 3
    }
];

// DOM elements
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const textSelector = document.getElementById('textSelector');
const sectionSelector = document.getElementById('sectionSelector');
const quizInterface = document.getElementById('quizInterface');
const completionScreen = document.getElementById('completionScreen');

// Check tracking status (non-blocking, runs in background)
async function checkTrackingStatus() {
    const indicator = document.getElementById('trackingIndicator');
    const trackingText = indicator ? indicator.querySelector('span') : null;

    if (!indicator || !trackingText) return;

    if (typeof supabase === 'undefined') {
        indicator.classList.add('not-tracking');
        trackingText.textContent = 'Progress tracking unavailable';
        return;
    }

    try {
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            currentUser = user;
            indicator.classList.remove('not-tracking');
            indicator.classList.add('active');

            // Check if this is an assigned task
            const urlParams = new URLSearchParams(window.location.search);
            const taskIdParam = urlParams.get('task_id');

            if (taskIdParam) {
                trackingText.textContent = '📋 Assigned task — progress will be recorded';
            } else {
                trackingText.textContent = '✓ Logged in — your progress will be tracked';
            }
        } else {
            indicator.classList.add('not-tracking');
            indicator.classList.add('active');
            trackingText.innerHTML = 'Log in to track progress — <a href="/auth/login.html" style="color: #0066ff;">Sign in</a>';
        }
    } catch (err) {
        console.error('Error checking tracking status:', err);
        indicator.classList.add('not-tracking');
        trackingText.textContent = 'Progress tracking unavailable';
    }
}

// Review mode flag
let isReviewMode = false;
let reviewQuestions = [];

// Initialise
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Check auth in background (non-blocking)
        checkTrackingStatus();

        // Get URL params
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode');
        currentText = urlParams.get('text');
        const sectionNum = urlParams.get('section');
        taskId = urlParams.get('task_id');

        // Check for review mode
        if (mode === 'review') {
            isReviewMode = true;
            await startReviewMode();
            return;
        }

        // If no text specified, show text selector
        if (!currentText) {
            showTextSelector();
            return;
        }

        // Load text info
        textInfo = getTextInfo(currentText);
        if (!textInfo) {
            console.error('textInfo is null for:', currentText);
            console.error('messalinaInfo defined?', typeof messalinaInfo);
            showError('Text not found: ' + currentText + '. messalinaInfo is ' + (typeof messalinaInfo));
            return;
        }

        if (sectionNum) {
            currentSection = parseInt(sectionNum);
            await loadSection(currentText, currentSection);
        } else {
            // Show section selector
            await showSectionSelector();
        }
    } catch (err) {
        console.error('Initialization error:', err);
        showError('Failed to initialize: ' + err.message);
    }
});

// Get text info based on ID
function getTextInfo(textId) {
    switch(textId) {
        case 'messalina':
            return typeof messalinaInfo !== 'undefined' ? messalinaInfo : null;
        case 'baucis-philemon':
            return typeof baucisPhilemonInfo !== 'undefined' ? baucisPhilemonInfo : null;
        case 'otium':
            return typeof otiumInfo !== 'undefined' ? otiumInfo : null;
        default:
            return null;
    }
}

// GCSE texts (in order)
const gcseTexts = [
    {
        id: 'messalina',
        title: 'Messalina',
        author: 'Tacitus',
        source: 'Annals XI',
        icon: '👑',
        sections: 9,
        description: 'The scandalous fall of Empress Messalina — featuring Tacitus\'s trademark irony and devastating understatement.'
    },
    {
        id: 'baucis-philemon',
        title: 'Baucis and Philemon',
        author: 'Ovid',
        source: 'Metamorphoses VIII',
        icon: '🌳',
        sections: 6,
        description: 'The touching tale of an elderly couple\'s hospitality to the gods.',
        badge: 'new'
    },
    {
        id: 'otium',
        title: 'Otium',
        author: 'Catullus',
        source: 'Poems 50 & 13',
        icon: '📜',
        sections: 3,
        description: 'Catullus reflects on leisure, friendship, and the pleasures of poetry.'
    }
];

// A Level texts (coming soon)
const alevelTexts = [
    {
        id: 'death-of-claudius',
        title: 'The Death of Claudius',
        author: 'Tacitus',
        source: 'Annals XII',
        icon: '💀',
        description: 'The mysterious death of Emperor Claudius and the machinations of Agrippina.',
        comingSoon: true
    },
    {
        id: 'death-of-agrippina',
        title: 'The Death of Agrippina',
        author: 'Tacitus',
        source: 'Annals XIV',
        icon: '⚔️',
        description: 'Nero\'s assassination of his own mother — a chilling tale of imperial murder.',
        comingSoon: true
    }
];

// Show text selector (landing page - hub layout)
function showTextSelector() {
    loadingState.style.display = 'none';
    textSelector.style.display = 'block';
    sectionSelector.style.display = 'none';

    // Update header
    document.getElementById('headerTitle').textContent = 'Set Text Practice';
    document.getElementById('headerSubtitle').textContent = 'Practise translation, style, and comprehension questions';
    document.getElementById('headerAuthor').textContent = 'by Lawrence McNally';

    const grid = document.getElementById('textGrid');

    // Build GCSE section
    let html = `
        <div class="level-section">
            <div class="level-header">
                <h3>GCSE</h3>
                <span class="level-badge gcse">OCR Latin</span>
            </div>
            <div class="text-list">
    `;

    gcseTexts.forEach(t => {
        const badgeHtml = t.badge === 'new' ? '<span class="badge new">New</span>' : '';
        html += `
            <div class="text-card" onclick="selectText('${t.id}')">
                <div class="text-icon">${t.icon}</div>
                <div class="text-card-content">
                    <div class="text-card-header">
                        <h2 class="text-card-name">${t.title}</h2>
                        ${badgeHtml}
                    </div>
                    <div class="text-card-level">${t.author} • ${t.source}</div>
                    <p class="text-card-description">${t.description}</p>
                </div>
                <div class="text-stats">
                    <div class="stat-item">
                        <div class="stat-value">${t.sections}</div>
                        <div class="stat-label">Sections</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">15+</div>
                        <div class="stat-label">Questions</div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    // Build A Level section
    html += `
        <div class="level-section">
            <div class="level-header">
                <h3>A Level</h3>
                <span class="level-badge alevel">OCR Latin</span>
            </div>
            <div class="text-list">
    `;

    alevelTexts.forEach(t => {
        html += `
            <div class="text-card coming-soon">
                <div class="text-icon">${t.icon}</div>
                <div class="text-card-content">
                    <div class="text-card-header">
                        <h2 class="text-card-name">${t.title}</h2>
                        <span class="badge coming">Coming Soon</span>
                    </div>
                    <div class="text-card-level">${t.author} • ${t.source}</div>
                    <p class="text-card-description">${t.description}</p>
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    grid.innerHTML = html;
}

// Select a text and navigate to its sections
function selectText(textId) {
    window.location.href = `set-text-quiz.html?text=${textId}`;
}

// Start review mode - practice questions you got wrong
async function startReviewMode() {
    loadingState.style.display = 'block';
    textSelector.style.display = 'none';
    sectionSelector.style.display = 'none';

    // Check if logged in
    if (typeof supabase === 'undefined') {
        showError('Please log in to review your tricky questions.');
        return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        showError('Please log in to review your tricky questions.');
        return;
    }
    currentUser = user;

    try {
        // Get wrong answers from database
        const { data: wrongAnswers, error } = await supabase
            .from('set_text_answers')
            .select('*')
            .eq('user_id', user.id)
            .eq('is_correct', false)
            .order('created_at', { ascending: false });

        if (error) throw error;

        if (!wrongAnswers || wrongAnswers.length === 0) {
            loadingState.style.display = 'none';
            document.getElementById('content') || document.body.insertAdjacentHTML('beforeend', '<div id="content"></div>');
            const contentEl = document.getElementById('content') || document.querySelector('.container');
            contentEl.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem; background: white; border-radius: 12px; border: 1px solid #e5e7eb; margin-top: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                    <h2 style="color: #1f2937; margin-bottom: 0.5rem;">No Tricky Questions!</h2>
                    <p style="color: #6b7280; margin-bottom: 1.5rem;">You haven't got any questions wrong yet. Keep up the great work!</p>
                    <a href="set-text-quiz.html" style="display: inline-block; padding: 0.75rem 1.5rem; background: #0066ff; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">Continue Practising →</a>
                </div>
            `;
            return;
        }

        // Deduplicate - keep only the most recent wrong answer for each unique question
        const questionMap = new Map();
        wrongAnswers.forEach(answer => {
            const key = `${answer.text_id}-${answer.section_number}-${answer.question_text}`;
            if (!questionMap.has(key)) {
                questionMap.set(key, answer);
            }
        });
        reviewQuestions = Array.from(questionMap.values());

        // Shuffle review questions
        shuffleArray(reviewQuestions);

        // Convert to quiz format
        questions = reviewQuestions.map(answer => ({
            type: answer.question_type || 'comprehension',
            latin: answer.question_latin || '',
            question: answer.question_text,
            correctFeedback: 'Well done! You got it right this time.',
            // We'll create options from the stored correct answer
            options: [
                { text: answer.correct_option, correct: true },
                { text: answer.selected_option, correct: false, feedback: answer.feedback || 'This was your previous incorrect answer.' }
            ],
            // Store original info for display
            _originalText: answer.text_id,
            _originalSection: answer.section_number
        }));

        // Create shuffled options for each question
        questions.forEach(q => {
            q.shuffledOptions = [...q.options];
            shuffleArray(q.shuffledOptions);
            q.correctIndex = q.shuffledOptions.findIndex(opt => opt.correct);
        });

        // Reset quiz state
        currentQuestionIndex = 0;
        score = 0;
        answered = 0;
        selectedAnswer = null;
        showingFeedback = false;

        // Show quiz with review header
        showReviewQuiz();

    } catch (err) {
        console.error('Error loading review questions:', err);
        showError('Failed to load review questions: ' + err.message);
    }
}

// Show quiz interface for review mode
function showReviewQuiz() {
    loadingState.style.display = 'none';
    sectionSelector.style.display = 'none';
    quizInterface.style.display = 'block';

    // Set header info for review mode
    document.getElementById('headerTitle').textContent = '💪 Tricky Questions Review';
    document.getElementById('headerSubtitle').textContent = 'Practice questions you got wrong';
    document.getElementById('headerAuthor').textContent = `${questions.length} questions from across your set texts`;

    // Hide the Latin text panel as questions are from different sections
    const latinPanel = document.querySelector('.latin-panel');
    if (latinPanel) latinPanel.style.display = 'none';

    // Display first question
    displayQuestion();
}

// Get the next attempt number for this user/text/section
async function getNextAttemptNumber(textId, sectionNum) {
    if (typeof supabase === 'undefined' || !currentUser) return 1;
    
    try {
        const { data, error } = await supabase
            .from('set_text_answers')
            .select('attempt_number')
            .eq('user_id', currentUser.id)
            .eq('text_id', textId)
            .eq('section_number', sectionNum)
            .order('attempt_number', { ascending: false })
            .limit(1);
        
        if (error || !data || data.length === 0) return 1;
        return data[0].attempt_number + 1;
    } catch (err) {
        console.error('Error getting attempt number:', err);
        return 1;
    }
}

// Load section data dynamically
async function loadSection(textId, sectionNum) {
    try {
        // Show loading state
        loadingState.style.display = 'block';
        sectionSelector.style.display = 'none';
        quizInterface.style.display = 'none';
        
        // Get attempt number for tracking
        currentAttemptNumber = await getNextAttemptNumber(textId, sectionNum);
        answersToSave = [];
        
        // Check if section is already loaded
        // Convert textId to camelCase for variable name (e.g., 'baucis-philemon' -> 'baucisPhilemon')
        const camelCaseId = textId.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
        const varName = camelCaseId + 'Section' + sectionNum;
        if (typeof window[varName] === 'undefined') {
            // Dynamically load the section file
            const script = document.createElement('script');
            script.src = `../data/literature/${textId}-section-${sectionNum}.js`;
            
            await new Promise((resolve, reject) => {
                script.onload = resolve;
                script.onerror = () => reject(new Error(`Failed to load section data from ${script.src}`));
                document.head.appendChild(script);
            });
        }
        
        // Get section data
        sectionData = getSectionData(textId, sectionNum);
        if (!sectionData) {
            showError('Section not found: ' + varName);
            return;
        }
        
        // Prepare questions (shuffle)
        prepareQuestions();
        
        // Show quiz
        showQuiz();

    } catch (error) {
        console.error('Error loading section:', error);
        showError('Failed to load section: ' + error.message);
    }
}

// Get section data variable - uses dynamic naming convention
function getSectionData(textId, sectionNum) {
    // Convert textId to camelCase for variable name (e.g., 'baucis-philemon' -> 'baucisPhilemon')
    const camelCaseId = textId.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
    const varName = camelCaseId + 'Section' + sectionNum;
    if (typeof window[varName] !== 'undefined') {
        return window[varName];
    }
    return null;
}

// Prepare questions - shuffle order and shuffle options within each question
function prepareQuestions() {
    // Copy questions array
    questions = [...sectionData.questions];
    
    // Shuffle question order
    shuffleArray(questions);
    
    // Shuffle options within each question
    questions.forEach(q => {
        q.shuffledOptions = [...q.options];
        shuffleArray(q.shuffledOptions);
        q.correctIndex = q.shuffledOptions.findIndex(opt => opt.correct);
    });
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Section emojis for visual interest
const sectionEmojis = ['📖', '📜', '✨', '🏛️', '⚡', '🌟', '📚', '🎭', '🔥', '💫'];

// Show section selector (hub layout)
async function showSectionSelector() {
    loadingState.style.display = 'none';
    sectionSelector.style.display = 'block';

    // Update header
    document.getElementById('headerTitle').textContent = textInfo.title;
    document.getElementById('headerSubtitle').textContent = 'Select a section to practise';
    document.getElementById('headerAuthor').textContent = `${textInfo.author} • ${textInfo.source}`;

    // Update card header
    document.getElementById('sectionCardTitle').textContent = `${textInfo.title} Sections`;
    document.getElementById('sectionCardDescription').textContent =
        `${textInfo.sections.length} sections covering ${textInfo.source}. Each section includes translation, style, and comprehension questions.`;

    // Update sidebar about text
    const aboutTexts = {
        'messalina': 'From Tacitus\'s Annals Book XI. This passage describes the scandalous affair and eventual downfall of Empress Messalina, wife of Emperor Claudius. Tacitus\'s trademark irony and devastating understatement are on full display.',
        'baucis-philemon': 'From Ovid\'s Metamorphoses Book VIII. This touching tale describes an elderly couple who unknowingly offer hospitality to Jupiter and Mercury in disguise, and are rewarded for their piety.',
        'otium': 'Two poems by Catullus exploring themes of leisure, friendship, and the creative process. Poem 50 recalls a day of playful poetry with Calvus, while Poem 13 is a witty dinner invitation.'
    };
    document.getElementById('sectionSidebarAbout').textContent = aboutTexts[textInfo.id] || `A set text from ${textInfo.source}.`;

    // Load user's progress for each section if logged in
    let progressMap = {};
    if (currentUser && typeof supabase !== 'undefined') {
        try {
            const { data } = await supabase
                .from('set_text_progress')
                .select('section_id, best_score, attempts')
                .eq('student_id', currentUser.id)
                .eq('text_id', textInfo.id);

            if (data) {
                data.forEach(p => {
                    progressMap[p.section_id] = p;
                });
            }
        } catch (err) {
            console.error('Error loading progress:', err);
        }
    }

    const grid = document.getElementById('sectionGrid');
    grid.innerHTML = textInfo.sections.map((s, index) => {
        const progress = progressMap[s.section];
        const emoji = sectionEmojis[index % sectionEmojis.length];

        let progressHtml = '';
        if (progress) {
            progressHtml = `<div class="section-card-progress">✓ ${progress.best_score}%</div>`;
        } else {
            progressHtml = `<div class="section-card-progress not-started">Not started</div>`;
        }

        return `
            <div class="section-card" onclick="loadSection('${textInfo.id}', ${s.section})">
                <div class="section-icon">${emoji}</div>
                <div class="section-card-content">
                    <div class="section-card-header">
                        <h3 class="section-card-title">Section ${s.section}</h3>
                    </div>
                    <div class="section-card-lines">Lines ${s.lines}</div>
                    <p class="section-card-description">${s.title}</p>
                </div>
                <div class="section-stats">
                    <div class="stat-item">
                        <div class="stat-value">15+</div>
                        <div class="stat-label">Questions</div>
                    </div>
                </div>
                ${progressHtml}
            </div>
        `;
    }).join('');
}

// Show quiz interface
function showQuiz() {
    loadingState.style.display = 'none';
    sectionSelector.style.display = 'none';
    quizInterface.style.display = 'block';
    
    // Set header info
    document.getElementById('headerTitle').textContent = textInfo.title;
    document.getElementById('headerSubtitle').textContent = `Section ${sectionData.section}: ${sectionData.title}`;
    document.getElementById('headerAuthor').textContent = `Lines ${sectionData.lines} • ${questions.length} questions`;
    document.getElementById('fullLatinText').textContent = sectionData.latinText;
    
    // Display first question
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const q = questions[currentQuestionIndex];
    
    // Update progress
    document.getElementById('progressText').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById('scoreText').textContent = `${score} correct`;
    document.getElementById('progressFill').style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // Set type badge
    const typeBadge = document.getElementById('typeBadge');
    const latinQuote = document.getElementById('latinQuote');
    
    typeBadge.className = 'type-badge ' + q.type;
    latinQuote.className = 'latin-quote ' + q.type;
    
    const typeLabels = {
        translation: '🔤 Translation',
        style: '✨ Style & Effect',
        comprehension: '📖 Comprehension'
    };
    typeBadge.textContent = typeLabels[q.type] || q.type;
    
    // Set Latin text (hide if comprehension with no latin)
    if (q.latin) {
        document.getElementById('latinPhrase').textContent = q.latin;
        latinQuote.style.display = 'block';
    } else {
        latinQuote.style.display = 'none';
    }
    
    // Set question
    document.getElementById('questionText').textContent = q.question;
    
    // Set options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = q.shuffledOptions.map((opt, i) => `
        <button class="option-btn" data-index="${i}">
            <span class="option-letter">${String.fromCharCode(65 + i)}.</span>
            ${opt.text}
        </button>
    `).join('');
    
    // Add click handlers to options
    optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => selectOption(parseInt(btn.dataset.index)));
    });
    
    // Reset state
    selectedAnswer = null;
    showingFeedback = false;
    document.getElementById('feedbackBox').style.display = 'none';
    document.getElementById('feedbackBox').className = 'feedback-box';
    document.getElementById('nextBtn').classList.remove('show');
}

// Select an option - immediately checks answer
function selectOption(index) {
    if (showingFeedback) return;
    
    selectedAnswer = index;
    showingFeedback = true;
    answered++;
    
    const q = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === q.correctIndex;
    
    if (isCorrect) {
        score++;
    }
    
    // Track this answer for saving later
    trackAnswer(q, selectedAnswer, isCorrect);
    
    // Update progress display
    document.getElementById('scoreText').textContent = `${score} correct`;
    
    // Show correct/incorrect styling
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.disabled = true;
        if (q.shuffledOptions[i].correct) {
            btn.classList.add('correct');
        } else if (i === selectedAnswer) {
            btn.classList.add('incorrect');
        }
    });
    
    // Show feedback
    const feedbackBox = document.getElementById('feedbackBox');
    feedbackBox.className = 'feedback-box ' + (isCorrect ? 'correct' : 'incorrect');
    feedbackBox.style.display = 'block';
    
    if (isCorrect) {
        feedbackBox.innerHTML = `✓ ${q.correctFeedback}`;
    } else {
        feedbackBox.innerHTML = `✗ ${q.shuffledOptions[selectedAnswer].feedback}`;
    }
    
    // Show next button
    document.getElementById('nextBtn').classList.add('show');
    document.getElementById('nextBtn').textContent = 
        currentQuestionIndex < questions.length - 1 ? 'Next Question →' : 'See Results';
}

// Track answer for saving to database
function trackAnswer(question, selectedIndex, isCorrect) {
    const selectedOption = question.shuffledOptions[selectedIndex];
    const correctOption = question.shuffledOptions.find(o => o.correct);
    
    // Find original question index
    const originalIndex = sectionData.questions.findIndex(q => q.question === question.question);
    
    answersToSave.push({
        text_id: currentText,
        section_number: currentSection,
        question_index: originalIndex >= 0 ? originalIndex : currentQuestionIndex,
        question_type: question.type,
        question_latin: question.latin || '',
        question_text: question.question,
        selected_option: selectedOption.text,
        correct_option: correctOption.text,
        is_correct: isCorrect,
        feedback: isCorrect ? (question.correctFeedback || '') : (selectedOption.feedback || ''),
        attempt_number: currentAttemptNumber
    });
}

// Move to next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showCompletion();
    }
}

// Show completion screen
async function showCompletion() {
    quizInterface.style.display = 'none';
    completionScreen.style.display = 'block';

    const percentage = Math.round((score / questions.length) * 100);

    document.getElementById('finalScore').textContent = percentage + '%';
    document.getElementById('finalCorrect').textContent = score;
    document.getElementById('finalTotal').textContent = questions.length;

    // Set message based on score and mode
    let message = '';
    if (isReviewMode) {
        if (percentage >= 90) {
            message = 'Excellent! You\'ve mastered these tricky questions! 🌟';
        } else if (percentage >= 70) {
            message = 'Great improvement! Keep practising! 👏';
        } else if (percentage >= 50) {
            message = 'Getting better! Try again to improve. 📚';
        } else {
            message = 'Keep reviewing — you\'ll get there! 💪';
        }
    } else {
        if (percentage >= 90) {
            message = 'Outstanding! Excellent knowledge of this section! 🌟';
        } else if (percentage >= 70) {
            message = 'Great work! You know this text well. 👏';
        } else if (percentage >= 50) {
            message = 'Good effort — keep reviewing! 📚';
        } else {
            message = 'Keep studying — you\'ll get there! 💪';
        }
    }
    document.getElementById('completionMessage').textContent = message;

    // Save progress and answers to database (skip for review mode)
    if (!isReviewMode) {
        await saveAnswersToDatabase();
        await saveProgress(percentage);
    }
}

// Save individual answers to database
async function saveAnswersToDatabase() {
    if (typeof supabase === 'undefined' || !currentUser || answersToSave.length === 0) return;
    
    try {
        // Add user_id to each answer
        const answersWithUser = answersToSave.map(a => ({
            ...a,
            user_id: currentUser.id
        }));
        
        const { error } = await supabase
            .from('set_text_answers')
            .insert(answersWithUser);
        
        if (error) {
            console.error('Error saving answers:', error);
        } else {
            console.log(`Saved ${answersWithUser.length} answers to database`);
        }
    } catch (err) {
        console.error('Error saving answers:', err);
    }
}

// Save progress to Supabase
async function saveProgress(percentage) {
    if (typeof supabase === 'undefined' || !currentUser) return;
    
    try {
        // Check if record exists
        const { data: existing } = await supabase
            .from('set_text_progress')
            .select('*')
            .eq('student_id', currentUser.id)
            .eq('text_id', textInfo.id)
            .eq('section_id', sectionData.section)
            .single();
        
        if (existing) {
            // Update existing record
            await supabase
                .from('set_text_progress')
                .update({
                    attempts: existing.attempts + 1,
                    best_score: Math.max(existing.best_score, percentage),
                    questions_correct: score,
                    questions_total: questions.length,
                    completed_at: new Date().toISOString()
                })
                .eq('id', existing.id);
        } else {
            // Insert new record
            await supabase
                .from('set_text_progress')
                .insert({
                    student_id: currentUser.id,
                    text_id: textInfo.id,
                    section_id: sectionData.section,
                    best_score: percentage,
                    attempts: 1,
                    questions_correct: score,
                    questions_total: questions.length
                });
        }
        
        // If this was an assigned task, also record the attempt
        if (taskId) {
            await supabase
                .from('task_attempts')
                .insert({
                    task_id: taskId,
                    student_id: currentUser.id,
                    started_at: new Date().toISOString(),
                    completed_at: new Date().toISOString(),
                    score: percentage,
                    total_questions: questions.length,
                    correct_answers: score
                });
        }
        
        console.log('Progress saved successfully');
        
    } catch (error) {
        console.error('Error saving progress:', error);
    }
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = 0;
    selectedAnswer = null;
    showingFeedback = false;

    // Increment attempt number and reset answers array
    currentAttemptNumber++;
    answersToSave = [];

    // Re-shuffle questions
    if (isReviewMode) {
        // For review mode, re-shuffle the existing questions
        shuffleArray(questions);
        questions.forEach(q => {
            q.shuffledOptions = [...q.options];
            shuffleArray(q.shuffledOptions);
            q.correctIndex = q.shuffledOptions.findIndex(opt => opt.correct);
        });
    } else {
        prepareQuestions();
    }

    // Reset UI
    completionScreen.style.display = 'none';
    quizInterface.style.display = 'block';

    displayQuestion();
}

// Go back to section selector
function goBack() {
    if (isReviewMode) {
        // In review mode, go back to the review page
        window.location.href = 'set-text-review.html';
        return;
    }
    // Remove section param from URL and reload
    const url = new URL(window.location);
    url.searchParams.delete('section');
    url.searchParams.delete('task_id');
    window.location.href = url.toString();
}

// Show error
function showError(message) {
    loadingState.style.display = 'none';
    errorState.style.display = 'block';
    document.getElementById('errorMessage').textContent = message;
}
