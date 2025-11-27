// Set Text Quiz Logic with Progress Tracking
// Handles quiz flow, answer checking, and saves progress to Supabase

let supabaseClient;
let currentUser = null;
let taskId = null;

// Available texts
const availableTexts = [
    {
        id: 'messalina',
        title: 'Messalina',
        author: 'Tacitus',
        source: 'Annals XI',
        icon: '👑',
        sections: 9
    }
    // Add more texts here as they're created:
    // { id: 'aeneid-4', title: 'Aeneid Book 4', author: 'Virgil', icon: '⚔️', sections: 8 }
];

// Quiz state
let textInfo = null;
let sectionData = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = 0;
let selectedAnswer = null;
let showingFeedback = false;
let selectedSection = null;

// DOM elements - will be set after DOM loads
let loadingState, setupPanel, quizArea, completionMessage;

// Initialise
document.addEventListener('DOMContentLoaded', async function() {
    // Cache DOM elements
    loadingState = document.getElementById('loadingState');
    setupPanel = document.getElementById('setupPanel');
    quizArea = document.getElementById('quizArea');
    completionMessage = document.getElementById('completionMessage');
    
    try {
        console.log('Set text quiz initialising...');
        
        // Init Supabase
        if (typeof SUPABASE_URL === 'undefined' || typeof SUPABASE_ANON_KEY === 'undefined') {
            console.warn('Supabase config not loaded - progress won\'t be saved');
        } else {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('Supabase initialised');
            
            // Check auth
            const { data: { session } } = await supabaseClient.auth.getSession();
            if (session) {
                currentUser = session.user;
                updateTrackingStatus(true);
            }
        }
        
        // Get URL params
        const urlParams = new URLSearchParams(window.location.search);
        const textId = urlParams.get('text');
        const sectionNum = urlParams.get('section');
        taskId = urlParams.get('task_id');
        
        console.log('Loading text:', textId, 'section:', sectionNum);
        
        if (textId) {
            // Load specific text info
            textInfo = getTextInfo(textId);
            if (!textInfo) {
                showError('Text not found: ' + textId);
                return;
            }
            
            // Update header
            document.getElementById('headerTitle').textContent = textInfo.title;
            document.getElementById('headerSubtitle').textContent = `${textInfo.author} • ${textInfo.source}`;
            document.getElementById('headerMeta').textContent = `${textInfo.totalSections} sections to master`;
            document.getElementById('textDescription').textContent = `${textInfo.title} by ${textInfo.author} from ${textInfo.source}. Practice translation, style analysis, and comprehension.`;
            
            if (sectionNum) {
                // Load specific section directly
                selectedSection = parseInt(sectionNum);
                await startQuiz();
            } else {
                // Show section selector for this text
                showSectionSelector();
            }
        } else {
            // No text specified - show text selector
            showTextSelector();
        }
        
    } catch (error) {
        console.error('Initialisation error:', error);
        showError('Failed to initialise: ' + error.message);
    }
});

// Get text info based on ID
function getTextInfo(textId) {
    switch(textId) {
        case 'messalina':
            return typeof messalinaInfo !== 'undefined' ? messalinaInfo : null;
        // Add other texts here as needed
        default:
            return null;
    }
}

// Update tracking status display
function updateTrackingStatus(isTracking) {
    const statusDiv = document.getElementById('trackingStatus');
    if (isTracking) {
        statusDiv.innerHTML = `
            <div class="tracking-indicator">
                <div class="tracking-dot"></div>
                <span>Progress is being saved</span>
            </div>
        `;
    } else {
        statusDiv.innerHTML = `
            <div class="tracking-indicator not-tracking">
                <div class="tracking-dot"></div>
                <span>Log in to track your progress</span>
            </div>
        `;
    }
}

// Show text selector (landing page)
function showTextSelector() {
    loadingState.style.display = 'none';
    setupPanel.style.display = 'block';
    document.getElementById('textSelector').style.display = 'block';
    document.getElementById('sectionSelector').style.display = 'none';
    
    const grid = document.getElementById('textGrid');
    grid.innerHTML = availableTexts.map(t => `
        <div class="text-card" onclick="selectText('${t.id}')">
            <div class="text-card-icon">${t.icon}</div>
            <div class="text-card-title">${t.title}</div>
            <div class="text-card-author">${t.author}</div>
            <div class="text-card-meta">${t.sections} sections • ${t.source}</div>
        </div>
    `).join('');
}

// Select a text and show its sections
function selectText(textId) {
    textInfo = getTextInfo(textId);
    if (!textInfo) {
        showError('Text not found: ' + textId);
        return;
    }
    
    // Update header
    document.getElementById('headerTitle').textContent = textInfo.title;
    document.getElementById('headerSubtitle').textContent = `${textInfo.author} • ${textInfo.source}`;
    document.getElementById('headerMeta').textContent = `${textInfo.totalSections} sections to master`;
    document.getElementById('textDescription').textContent = `${textInfo.title} by ${textInfo.author} from ${textInfo.source}. Practice translation, style analysis, and comprehension.`;
    
    // Show section selector
    showSectionSelector();
}

// Show section selector
function showSectionSelector() {
    loadingState.style.display = 'none';
    setupPanel.style.display = 'block';
    document.getElementById('textSelector').style.display = 'none';
    document.getElementById('sectionSelector').style.display = 'block';
    
    const grid = document.getElementById('sectionGrid');
    grid.innerHTML = textInfo.sections.map(s => `
        <div class="section-card" data-section="${s.section}" onclick="selectSection(${s.section})">
            <div class="section-card-header">
                <span class="section-card-num">Section ${s.section}</span>
                <span class="section-card-lines">Lines ${s.lines}</span>
            </div>
            <div class="section-card-title">${s.title}</div>
        </div>
    `).join('');
    
    // Set up start button
    const startBtn = document.getElementById('startBtn');
    startBtn.disabled = true;
    startBtn.textContent = 'Select a section to begin';
    startBtn.onclick = startQuiz;
}

// Select a section
function selectSection(sectionNum) {
    selectedSection = sectionNum;
    
    // Update visual state
    document.querySelectorAll('.section-card').forEach(card => {
        card.classList.remove('selected');
        if (parseInt(card.dataset.section) === sectionNum) {
            card.classList.add('selected');
        }
    });
    
    // Enable start button
    const startBtn = document.getElementById('startBtn');
    startBtn.disabled = false;
    startBtn.textContent = `Start Section ${sectionNum}`;
}

// Start the quiz
async function startQuiz() {
    if (!selectedSection) return;
    
    try {
        // Show loading
        setupPanel.style.display = 'none';
        loadingState.style.display = 'block';
        
        // Load section data
        await loadSectionData(textInfo.id, selectedSection);
        
        // Prepare questions
        prepareQuestions();
        
        // Update full Latin text in sidebar
        document.getElementById('latinPanel').style.display = 'block';
        document.getElementById('fullLatinText').textContent = sectionData.latinText;
        
        // Show quiz
        loadingState.style.display = 'none';
        quizArea.classList.add('active');
        
        // Set total questions
        document.getElementById('totalQ').textContent = questions.length;
        
        // Display first question
        displayQuestion();
        
        // Set up event listeners
        document.getElementById('checkBtn').addEventListener('click', checkAnswer);
        document.getElementById('nextBtn').addEventListener('click', nextQuestion);
        
    } catch (error) {
        console.error('Error starting quiz:', error);
        showError('Failed to load section: ' + error.message);
    }
}

// Load section data dynamically
async function loadSectionData(textId, sectionNum) {
    console.log('Loading section file:', `../data/literature/${textId}-section-${sectionNum}.js`);
    
    // Check if already loaded
    const existingData = getSectionData(textId, sectionNum);
    if (existingData) {
        sectionData = existingData;
        console.log('Section data already loaded');
        return;
    }
    
    // Dynamically load the section file
    const script = document.createElement('script');
    script.src = `../data/literature/${textId}-section-${sectionNum}.js`;
    
    await new Promise((resolve, reject) => {
        script.onload = () => {
            console.log('Section script loaded successfully');
            resolve();
        };
        script.onerror = () => reject(new Error('Failed to load section data file'));
        document.head.appendChild(script);
    });
    
    // Get section data
    sectionData = getSectionData(textId, sectionNum);
    if (!sectionData) {
        throw new Error('Section data variable not found');
    }
    console.log('Section data loaded:', sectionData.title);
}

// Get section data variable
function getSectionData(textId, sectionNum) {
    switch(textId) {
        case 'messalina':
            if (sectionNum === 1 && typeof messalinaSection1 !== 'undefined') {
                return messalinaSection1;
            }
            if (sectionNum === 2 && typeof messalinaSection2 !== 'undefined') {
                return messalinaSection2;
            }
            if (sectionNum === 3 && typeof messalinaSection3 !== 'undefined') {
                return messalinaSection3;
            }
            if (sectionNum === 4 && typeof messalinaSection4 !== 'undefined') {
                return messalinaSection4;
            }
            // Add more sections as they're created
            break;
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

// Display current question
function displayQuestion() {
    const q = questions[currentQuestionIndex];
    
    // Update progress
    document.getElementById('currentQ').textContent = currentQuestionIndex + 1;
    document.getElementById('progressFill').style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // Set type badge
    const typeBadge = document.getElementById('typeBadge');
    typeBadge.className = 'question-type-badge ' + q.type;
    
    const typeLabels = {
        translation: '🔤 Translation',
        style: '✨ Style & Effect',
        comprehension: '📖 Comprehension'
    };
    typeBadge.textContent = typeLabels[q.type] || q.type;
    
    // Set Latin text
    document.getElementById('latinDisplay').textContent = q.latin;
    
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
    document.getElementById('feedbackBox').className = 'feedback-box';
    document.getElementById('feedbackBox').style.display = 'none';
    document.getElementById('checkBtn').classList.remove('hidden');
    document.getElementById('checkBtn').disabled = true;
    document.getElementById('nextBtn').classList.add('hidden');
}

// Select an option
function selectOption(index) {
    if (showingFeedback) return;
    
    selectedAnswer = index;
    
    // Update visual state
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) {
            btn.classList.add('selected');
        }
    });
    
    document.getElementById('checkBtn').disabled = false;
}

// Check the answer
function checkAnswer() {
    if (selectedAnswer === null) return;
    
    showingFeedback = true;
    answered++;
    
    const q = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === q.correctIndex;
    
    if (isCorrect) {
        score++;
    }
    
    // Update score display
    document.getElementById('score').textContent = score;
    document.getElementById('answered').textContent = answered;
    
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
    feedbackBox.style.display = 'block';
    
    if (isCorrect) {
        feedbackBox.className = 'feedback-box correct';
        feedbackBox.innerHTML = `✓ ${q.correctFeedback}`;
    } else {
        feedbackBox.className = 'feedback-box incorrect';
        feedbackBox.innerHTML = `✗ ${q.shuffledOptions[selectedAnswer].feedback}`;
    }
    
    // Show next button
    document.getElementById('checkBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('nextBtn').textContent = 
        currentQuestionIndex < questions.length - 1 ? 'Next Question →' : 'See Results';
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
    // Hide quiz content, show completion
    document.querySelector('.question-display').style.display = 'none';
    document.querySelector('.quiz-content').style.display = 'none';
    completionMessage.classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    
    document.getElementById('finalScore').textContent = percentage + '%';
    document.getElementById('finalCorrect').textContent = score;
    document.getElementById('finalTotal').textContent = questions.length;
    
    // Set message based on score
    let message = '';
    if (percentage >= 90) {
        message = 'Outstanding! Excellent knowledge of this section! 🌟';
    } else if (percentage >= 70) {
        message = 'Great work! You know this text well. 👏';
    } else if (percentage >= 50) {
        message = 'Good effort — keep reviewing! 📚';
    } else {
        message = 'Keep studying — you\'ll get there! 💪';
    }
    document.getElementById('completionFeedback').textContent = message;
    
    // Save progress to database
    if (currentUser && supabaseClient) {
        await saveProgress(percentage);
    }
}

// Save progress to Supabase
async function saveProgress(percentage) {
    try {
        // Check if record exists
        const { data: existing } = await supabaseClient
            .from('set_text_progress')
            .select('*')
            .eq('student_id', currentUser.id)
            .eq('text_id', textInfo.id)
            .eq('section_id', sectionData.section)
            .single();
        
        if (existing) {
            // Update existing record
            await supabaseClient
                .from('set_text_progress')
                .update({
                    attempts: existing.attempts + 1,
                    best_score: Math.max(existing.best_score, percentage),
                    last_attempt_at: new Date().toISOString()
                })
                .eq('id', existing.id);
        } else {
            // Insert new record
            await supabaseClient
                .from('set_text_progress')
                .insert({
                    student_id: currentUser.id,
                    text_id: textInfo.id,
                    section_id: sectionData.section,
                    best_score: percentage,
                    attempts: 1,
                    last_attempt_at: new Date().toISOString()
                });
        }
        
        // If this was an assigned task, also record the attempt
        if (taskId) {
            await supabaseClient
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
    
    // Re-shuffle questions
    prepareQuestions();
    
    // Reset UI
    document.getElementById('score').textContent = '0';
    document.getElementById('answered').textContent = '0';
    document.getElementById('progressFill').style.width = '0%';
    
    // Show quiz content again
    document.querySelector('.question-display').style.display = 'block';
    document.querySelector('.quiz-content').style.display = 'block';
    completionMessage.classList.add('hidden');
    
    displayQuestion();
}

// Go back to section selector (or text selector)
function goBack() {
    // Reset quiz state
    quizArea.classList.remove('active');
    document.querySelector('.question-display').style.display = 'block';
    document.querySelector('.quiz-content').style.display = 'block';
    completionMessage.classList.add('hidden');
    
    currentQuestionIndex = 0;
    score = 0;
    answered = 0;
    selectedSection = null;
    
    // Show section selector
    showSectionSelector();
}

// Show error
function showError(message) {
    loadingState.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: #991b1b;">
            <p style="font-size: 1.1rem; margin-bottom: 1rem;">⚠️ ${message}</p>
            <p style="color: #6b7280;">Check the browser console for more details.</p>
        </div>
    `;
}
