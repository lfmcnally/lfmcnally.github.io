// Myth & Religion Quiz Logic
// Save this as: myth-quiz-logic.js

// Global variables
let currentMode = '';
let selectedSubtopics = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;
let draggedItem = null;

// Subtopic selection
function selectSubtopic(subtopic) {
    const option = document.querySelector(`[data-subtopic="${subtopic}"]`);
    
    if (option.classList.contains('selected')) {
        option.classList.remove('selected');
        selectedSubtopics = selectedSubtopics.filter(s => s !== subtopic);
    } else {
        option.classList.add('selected');
        selectedSubtopics.push(subtopic);
    }
}

// Start quiz function
function startQuiz(mode) {
    currentMode = mode;
    
    // Filter questions by selected subtopics if any are selected
    let questionsToUse = [...questionBank[currentMode]];
    if (selectedSubtopics.length > 0) {
        questionsToUse = questionsToUse.filter(q => {
            return selectedSubtopics.some(st => q.topic.includes(st));
        });
    }
    
    if (questionsToUse.length === 0) {
        alert('No questions found for selected subtopics. Please select at least one subtopic or choose "All Topics".');
        return;
    }
    
    currentQuestions = questionsToUse.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    document.getElementById('mode-selection-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    
    loadQuestion();
}

// Utility functions
function normaliseText(text) {
    return text.toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ');
}

function checkFlexibleAnswer(userInput, correctAnswers, acceptableVariations) {
    const normalised = normaliseText(userInput);
    
    // Check exact matches first
    for (let answer of correctAnswers) {
        if (normalised.includes(normaliseText(answer)) || normaliseText(answer).includes(normalised)) {
            return 'correct';
        }
    }
    
    // Check acceptable variations
    for (let variation of acceptableVariations) {
        if (normalised.includes(normaliseText(variation)) || normaliseText(variation).includes(normalised)) {
            return 'correct';
        }
    }
    
    // Partial credit for close matches
    for (let answer of [...correctAnswers, ...acceptableVariations]) {
        const words = normaliseText(answer).split(' ');
        const userWords = normalised.split(' ');
        const matchingWords = words.filter(word => userWords.some(userWord => 
            userWord.includes(word) || word.includes(userWord)
        ));
        
        if (matchingWords.length >= Math.ceil(words.length * 0.6)) {
            return 'partial';
        }
    }
    
    return 'incorrect';
}

// Load current question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('question-type').textContent = formatQuestionType(question.type);
    document.getElementById('question-topic').textContent = question.topic;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('progress-text').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    document.getElementById('progress-indicator').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    // Clear previous feedback
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('check-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    
    // Load answer area
    loadAnswerArea(question);
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
}

function formatQuestionType(type) {
    const types = {
        'multiple-choice': 'Multiple Choice',
        'text-flexible': 'Short Answer',
        'scenario': 'Scenario Analysis',
        'drag-drop': 'Drag and Drop',
        'gap-fill': 'Fill in the Gaps'
    };
    return types[type] || type;
}

// Load answer area based on question type
function loadAnswerArea(question) {
    const answerArea = document.getElementById('answer-area');
    
    switch(question.type) {
        case 'text-flexible':
            answerArea.innerHTML = `
                <input type="text" class="answer-input" id="text-answer" 
                       placeholder="Type your answer here..." autocomplete="off">
            `;
            setTimeout(() => document.getElementById('text-answer').focus(), 100);
            break;
            
        case 'multiple-choice':
        case 'scenario':
            answerArea.innerHTML = `
                <div class="multiple-choice" id="multiple-choice">
                    ${question.choices.map((choice, index) => `
                        <div class="choice-option" onclick="selectChoice(${index})" data-choice="${index}">
                            <div class="choice-letter">${String.fromCharCode(65 + index)}</div>
                            <div>${choice}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
            
        case 'drag-drop':
            const categories = Object.keys(question.categories);
            // Randomise the items array for each question
            const shuffledItems = [...question.items].sort(() => Math.random() - 0.5);
            answerArea.innerHTML = `
                <div class="drag-drop-container">
                    <div class="drag-instruction">Drag the items to the correct categories</div>
                    <div class="drag-items" id="drag-items">
                        ${shuffledItems.map(item => `
                            <div class="drag-item" draggable="true" data-item="${item}">${item}</div>
                        `).join('')}
                    </div>
                    <div class="drop-zones" id="drop-zones">
                        ${categories.map(category => `
                            <div class="drop-zone" data-category="${category}">
                                <div class="drop-zone-title">${category}</div>
                                <div class="dropped-items" id="dropped-${category.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}"></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            setupDragAndDrop();
            break;
            
        case 'gap-fill':
            let gapIndex = 0;
            const gapText = question.gapText.replace(/_+/g, () => {
                return `<input type="text" class="gap-input" data-gap="${gapIndex++}" autocomplete="off">`;
            });
            
            answerArea.innerHTML = `
                <div class="gap-fill-container">
                    ${gapText}
                </div>
            `;
            break;
    }
}

// Multiple choice selection
function selectChoice(index) {
    document.querySelectorAll('.choice-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-choice="${index}"]`).classList.add('selected');
}

// Drag and drop setup
function setupDragAndDrop() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dragItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
    });
}

function handleDragStart(e) {
    draggedItem = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.target.closest('.drop-zone').classList.add('drag-over');
}

function handleDragLeave(e) {
    if (!e.target.closest('.drop-zone').contains(e.relatedTarget)) {
        e.target.closest('.drop-zone').classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const dropZone = e.target.closest('.drop-zone');
    dropZone.classList.remove('drag-over');
    
    if (draggedItem) {
        const category = dropZone.dataset.category;
        const droppedItems = dropZone.querySelector('.dropped-items');
        
        // Create dropped item
        const droppedItem = document.createElement('div');
        droppedItem.className = 'dropped-item';
        droppedItem.textContent = draggedItem.dataset.item;
        droppedItem.dataset.item = draggedItem.dataset.item;
        droppedItem.dataset.category = category;
        
        droppedItems.appendChild(droppedItem);
        draggedItem.remove();
        draggedItem = null;
    }
}

// Check answer functionality
function checkAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    let userAnswer = null;
    let result = 'incorrect';
    
    switch(question.type) {
        case 'text-flexible':
            userAnswer = document.getElementById('text-answer').value;
            result = checkFlexibleAnswer(userAnswer, question.correctAnswers, question.acceptableVariations);
            break;
            
        case 'multiple-choice':
        case 'scenario':
            const selected = document.querySelector('.choice-option.selected');
            if (selected) {
                userAnswer = parseInt(selected.dataset.choice);
                result = userAnswer === question.correct ? 'correct' : 'incorrect';
            }
            break;
            
        case 'drag-drop':
            userAnswer = {};
            document.querySelectorAll('.dropped-item').forEach(item => {
                const category = item.dataset.category;
                const itemText = item.dataset.item;
                if (!userAnswer[category]) userAnswer[category] = [];
                userAnswer[category].push(itemText);
            });
            
            result = checkDragDropAnswer(userAnswer, question.categories);
            break;
            
        case 'gap-fill':
            userAnswer = [];
            document.querySelectorAll('.gap-input').forEach(input => {
                userAnswer.push(input.value);
            });
            
            result = checkGapFillAnswer(userAnswer, question.correctGaps, question.acceptableGaps);
            break;
    }
    
    // Store answer
    userAnswers[currentQuestionIndex] = {
        question: question,
        userAnswer: userAnswer,
        result: result
    };
    
    // Show feedback
    showFeedback(result, question.explanation);
    
    // Update UI
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
}

function checkDragDropAnswer(userAnswer, correctCategories) {
    let correct = 0;
    let total = 0;
    
    for (const [category, correctItems] of Object.entries(correctCategories)) {
        const userItems = userAnswer[category] || [];
        for (const item of correctItems) {
            total++;
            if (userItems.includes(item)) {
                correct++;
            }
        }
    }
    
    const percentage = correct / total;
    if (percentage >= 0.8) return 'correct';
    if (percentage >= 0.5) return 'partial';
    return 'incorrect';
}

function checkGapFillAnswer(userAnswers, correctGaps, acceptableGaps) {
    let correct = 0;
    
    for (let i = 0; i < userAnswers.length; i++) {
        const userAnswer = normaliseText(userAnswers[i]);
        const correctAnswer = normaliseText(correctGaps[i]);
        const acceptableAnswers = acceptableGaps[i].map(a => normaliseText(a));
        
        if (userAnswer === correctAnswer || acceptableAnswers.includes(userAnswer)) {
            correct++;
        }
    }
    
    const percentage = correct / userAnswers.length;
    if (percentage >= 0.8) return 'correct';
    if (percentage >= 0.5) return 'partial';
    return 'incorrect';
}

function showFeedback(result, explanation) {
    const feedback = document.getElementById('feedback');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    
    feedback.className = `feedback ${result}`;
    
    switch(result) {
        case 'correct':
            feedbackIcon.textContent = '✓';
            feedbackTitle.textContent = 'Correct!';
            break;
        case 'partial':
            feedbackIcon.textContent = '◐';
            feedbackTitle.textContent = 'Partially Correct';
            break;
        case 'incorrect':
            feedbackIcon.textContent = '✗';
            feedbackTitle.textContent = 'Incorrect';
            break;
    }
    
    feedbackExplanation.textContent = explanation;
    feedback.style.display = 'block';
}

// Navigation functions
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        
        // If we've already answered this question, show the feedback
        if (userAnswers[currentQuestionIndex]) {
            const answer = userAnswers[currentQuestionIndex];
            showFeedback(answer.result, answer.question.explanation);
            document.getElementById('check-btn').style.display = 'none';
            document.getElementById('next-btn').style.display = 'inline-block';
        }
    }
}

// Results functionality
function showResults() {
    const quizEndTime = Date.now();
    const completionTime = Math.round((quizEndTime - quizStartTime) / (1000 * 60));
    
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
    
    // Calculate scores
    let correct = 0;
    let incorrect = 0;
    let partial = 0;
    
    userAnswers.forEach(answer => {
        if (answer.result === 'correct') correct++;
        else if (answer.result === 'partial') partial++;
        else incorrect++;
    });
    
    const totalScore = Math.round((correct + partial * 0.5) / userAnswers.length * 100);
    
    // Update display
    document.getElementById('final-score').textContent = `${totalScore}%`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = incorrect;
    document.getElementById('partial-count').textContent = partial;
    document.getElementById('completion-time').textContent = completionTime;
    
    // Results message based on performance
    const resultsMessage = document.getElementById('results-message');
    if (totalScore >= 85) {
        resultsMessage.textContent = 'Excellent work! You\'re well-prepared for your GCSE assessment.';
    } else if (totalScore >= 70) {
        resultsMessage.textContent = 'Good progress! Review the areas where you lost marks.';
    } else if (totalScore >= 60) {
        resultsMessage.textContent = 'Getting there! Focus on reviewing the lesson content.';
    } else {
        resultsMessage.textContent = 'Keep practising! Revisit the lesson materials before your next attempt.';
    }
}

function restartQuiz() {
    currentMode = '';
    selectedSubtopics = [];
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = null;
    
    // Clear subtopic selections
    document.querySelectorAll('.subtopic-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('mode-selection-screen').style.display = 'block';
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (document.getElementById('question-screen').style.display === 'block') {
        if (event.key === 'Enter') {
            const checkBtn = document.getElementById('check-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (checkBtn.style.display !== 'none') {
                checkAnswer();
            } else if (nextBtn.style.display !== 'none') {
                nextQuestion();
            }
            event.preventDefault();
        }
        
        // Number keys for multiple choice
        if (event.key >= '1' && event.key <= '4') {
            const choiceIndex = parseInt(event.key) - 1;
            const choice = document.querySelector(`[data-choice="${choiceIndex}"]`);
            if (choice) {
                selectChoice(choiceIndex);
            }
        }
    }
});
