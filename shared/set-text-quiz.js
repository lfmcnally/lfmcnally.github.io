// Set Text Quiz Logic with Progress Tracking and Answer Recording
// Handles quiz flow, answer checking, and saves progress + individual answers to Supabase

let supabase;
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

// DOM elements
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const sectionSelector = document.getElementById('sectionSelector');
const quizInterface = document.getElementById('quizInterface');
const completionScreen = document.getElementById('completionScreen');

// Initialise
document.addEventListener('DOMContentLoaded', async function() {
    // Init Supabase
    if (typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        
        // Check auth
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            currentUser = session.user;
        }
    }
    
    // Get URL params
    const urlParams = new URLSearchParams(window.location.search);
    currentText = urlParams.get('text') || 'messalina';
    const sectionNum = urlParams.get('section');
    taskId = urlParams.get('task_id');
    
    // Load text info
    textInfo = getTextInfo(currentText);
    if (!textInfo) {
        showError('Text not found: ' + currentText);
        return;
    }
    
    if (sectionNum) {
        currentSection = parseInt(sectionNum);
        await loadSection(currentText, currentSection);
    } else {
        // Show section selector
        await showSectionSelector();
    }
});

// Get text info based on ID
function getTextInfo(textId) {
    switch(textId) {
        case 'messalina':
            return typeof messalinaInfo !== 'undefined' ? messalinaInfo : null;
        case 'otium':
            return typeof otiumInfo !== 'undefined' ? otiumInfo : null;
        case 'baucis-philemon':
            return typeof baucisPhilemonInfo !== 'undefined' ? baucisPhilemonInfo : null;
        default:
            return null;
    }
}

// Get the next attempt number for this user/text/section
async function getNextAttemptNumber(textId, sectionNum) {
    if (!supabase || !currentUser) return 1;
    
    try {
        const { data, error } = await supabase
            .from('set_text_answers')
            .select('attempt_number')
            .eq('student_id', currentUser.id)
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
        // Get attempt number for tracking
        currentAttemptNumber = await getNextAttemptNumber(textId, sectionNum);
        answersToSave = [];
        
        // Dynamically load the section file
        const script = document.createElement('script');
        script.src = `../latin/data/literature/${textId}-section-${sectionNum}.js`;
        
        await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = () => reject(new Error('Failed to load section data'));
            document.head.appendChild(script);
        });
        
        // Get section data
        sectionData = getSectionData(textId, sectionNum);
        if (!sectionData) {
            showError('Section not found');
            return;
        }
        
        // Prepare questions (shuffle)
        prepareQuestions();
        
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

// Get section data variable - uses dynamic naming convention
function getSectionData(textId, sectionNum) {
    // Try the naming convention: textIdSection1, textIdSection2, etc.
    const varName = textId + 'Section' + sectionNum;
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

// Show section selector
async function showSectionSelector() {
    loadingState.style.display = 'none';
    sectionSelector.style.display = 'block';
    
    document.getElementById('textTitle').textContent = textInfo.title;
    document.getElementById('textAuthor').textContent = `${textInfo.author} • ${textInfo.source}`;
    
    // Load user's progress for each section if logged in
    let progressMap = {};
    if (currentUser && supabase) {
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
    grid.innerHTML = textInfo.sections.map(s => {
        const progress = progressMap[s.section];
        let progressHtml = '';
        if (progress) {
            progressHtml = `<div class="section-card-progress">✓ Best: ${progress.best_score}% (${progress.attempts} attempt${progress.attempts !== 1 ? 's' : ''})</div>`;
        }
        return `
            <div class="section-card" onclick="loadSection('${textInfo.id}', ${s.section})">
                <div class="section-card-title">Section ${s.section}</div>
                <div class="section-card-lines">Lines ${s.lines}</div>
                <div style="font-size: 0.85rem; color: #374151; margin-top: 0.5rem;">${s.title}</div>
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
    
    // Set Latin text (hide if comprehension with no latin)
    if (q.latin) {
        document.getElementById('latinText').textContent = q.latin;
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
    
    // Track this answer for saving later
    trackAnswer(q, selectedAnswer, isCorrect);
    
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
    
    // Save progress and answers to database
    if (currentUser && supabase) {
        await saveAnswersToDatabase();
        await saveProgress(percentage);
    }
}

// Save individual answers to database
async function saveAnswersToDatabase() {
    if (!supabase || !currentUser || answersToSave.length === 0) return;
    
    try {
        // Add student_id to each answer
        const answersWithUser = answersToSave.map(a => ({
            ...a,
            student_id: currentUser.id
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
    if (!supabase || !currentUser) return;
    
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
                    questions_total: questions.length,
                    completed_at: new Date().toISOString()
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
