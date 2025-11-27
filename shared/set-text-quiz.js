// Set Text Quiz Logic with Progress Tracking
// Handles quiz flow, answer checking, and saves progress to Supabase

let supabaseClient;
let currentUser = null;
let taskId = null;

// Quiz state
let textInfo = null;
let sectionData = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = 0;
let selectedAnswer = null;
let showingFeedback = false;

// DOM elements
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const sectionSelector = document.getElementById('sectionSelector');
const quizInterface = document.getElementById('quizInterface');
const completionScreen = document.getElementById('completionScreen');

// Initialise
document.addEventListener('DOMContentLoaded', async function() {
    try {
        console.log('Set text quiz initialising...');
        
        // Init Supabase
        if (typeof SUPABASE_URL === 'undefined' || typeof SUPABASE_ANON_KEY === 'undefined') {
            throw new Error('Supabase config not loaded - check config.js path');
        }
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase initialised');
        
        // Check auth
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            currentUser = session.user;
        }
        
        // Get URL params
        const urlParams = new URLSearchParams(window.location.search);
        const textId = urlParams.get('text') || 'messalina';
        const sectionNum = urlParams.get('section');
        taskId = urlParams.get('task_id');
        
        console.log('Loading text:', textId, 'section:', sectionNum);
        
        // Load text info
        textInfo = getTextInfo(textId);
        if (!textInfo) {
            showError('Text not found: ' + textId + '. Check that messalina-info.js is loaded.');
            return;
        }
        console.log('Text info loaded:', textInfo.title);
        
        if (sectionNum) {
            // Load specific section
            await loadSection(textId, parseInt(sectionNum));
        } else {
            // Show section selector
            showSectionSelector();
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

// Load section data dynamically
async function loadSection(textId, sectionNum) {
    try {
        console.log('Loading section file:', `../data/literature/${textId}-section-${sectionNum}.js`);
        
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
            showError('Section data variable not found. Check messalina-section-' + sectionNum + '.js');
            return;
        }
        console.log('Section data loaded:', sectionData.title);
        
        // Prepare questions (shuffle)
        prepareQuestions();
        console.log('Questions prepared:', questions.length);
        
        // Show quiz
        showQuiz();
        
        // Show tracking indicator if logged in
        if (currentUser) {
            document.getElementById('trackingIndicator').style.display = 'flex';
            document.getElementById('trackingIndicator').classList.add('active');
        }
        
    } catch (error) {
        console.error('Error loading section:', error);
        showError('Failed to load section: ' + error.message);
    }
}

// Get section data variable
function getSectionData(textId, sectionNum) {
    switch(textId) {
        case 'messalina':
            if (sectionNum === 1 && typeof messalinaSection1 !== 'undefined') {
                return messalinaSection1;
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

// Show section selector
function showSectionSelector() {
    loadingState.style.display = 'none';
    sectionSelector.style.display = 'block';
    
    document.getElementById('textTitle').textContent = textInfo.title;
    document.getElementById('textAuthor').textContent = `${textInfo.author} • ${textInfo.source}`;
    
    const grid = document.getElementById('sectionGrid');
    grid.innerHTML = textInfo.sections.map(s => `
        <div class="section-card" onclick="loadSection('${textInfo.id}', ${s.section})">
            <div class="section-card-title">Section ${s.section}</div>
            <div class="section-card-lines">Lines ${s.lines}</div>
            <div style="font-size: 0.85rem; color: #374151; margin-top: 0.5rem;">${s.title}</div>
        </div>
    `).join('');
}

// Show quiz interface
function showQuiz() {
    loadingState.style.display = 'none';
    sectionSelector.style.display = 'none';
    quizInterface.style.display = 'block';
    
    // Set header info
    document.getElementById('quizTitle').textContent = textInfo.title;
    document.getElementById('sectionNum').textContent = sectionData.section;
    document.getElementById('sectionTitle').textContent = sectionData.title;
    document.getElementById('linesInfo').textContent = `Lines ${sectionData.lines}`;
    document.getElementById('fullLatinText').textContent = sectionData.latinText;
    document.getElementById('totalQ').textContent = questions.length;
    
    // Display first question
    displayQuestion();
    
    // Set up event listeners
    document.getElementById('checkBtn').addEventListener('click', checkAnswer);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
}

// Display current question
function displayQuestion() {
    const q = questions[currentQuestionIndex];
    
    // Update progress
    document.getElementById('currentQ').textContent = currentQuestionIndex + 1;
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
    
    // Set Latin text
    document.getElementById('latinText').textContent = q.latin;
    
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
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('checkBtn').style.display = 'block';
    document.getElementById('checkBtn').disabled = true;
    document.getElementById('nextBtn').style.display = 'none';
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
    document.getElementById('percentage').textContent = answered > 0 ? Math.round((score / answered) * 100) : 0;
    
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
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
        feedback.innerHTML = `✓ ${q.correctFeedback}`;
    } else {
        feedback.innerHTML = `✗ ${q.shuffledOptions[selectedAnswer].feedback}`;
    }
    
    // Show next button
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'block';
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
    quizInterface.style.display = 'none';
    completionScreen.style.display = 'block';
    
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
    document.getElementById('completionMessage').textContent = message;
    
    // Save progress to database
    if (currentUser) {
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
    document.getElementById('percentage').textContent = '0';
    
    completionScreen.style.display = 'none';
    quizInterface.style.display = 'block';
    
    displayQuestion();
}

// Go back to section selector
function goBack() {
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
