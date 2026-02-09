// Shared Quiz Engine for Politics Content Testers
// Fixes: answer shuffling, text leniency, drag-and-drop

// Global variables
let currentMode = '';
let selectedSubtopics = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;
let draggedItem = null;
let selectedDragItem = null; // For click-to-place fallback
let currentShuffleMap = null; // Maps shuffled index -> original index

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

// Start quiz
async function startQuiz(mode) {
    currentMode = mode;
    let questionsToUse = [...questionBank[currentMode]];
    if (selectedSubtopics.length > 0) {
        questionsToUse = questionsToUse.filter(q =>
            selectedSubtopics.some(st => q.topic.includes(st))
        );
    }
    if (questionsToUse.length === 0) {
        alert('No questions found for selected subtopics. Please select at least one subtopic or choose "All Topics".');
        return;
    }
    currentQuestions = questionsToUse.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();

    if (typeof taskTracker !== 'undefined') {
        taskTracker.setLanguage('classics');
        await taskTracker.start();
    }

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

    // Reject empty or very short answers (less than 2 characters)
    if (normalised.length < 2) {
        return 'incorrect';
    }

    // Check if user's input contains a correct answer (forward direction only)
    for (let answer of correctAnswers) {
        const normAnswer = normaliseText(answer);
        if (normalised === normAnswer || normalised.includes(normAnswer)) {
            return 'correct';
        }
    }

    // Check acceptable variations (forward direction only)
    for (let variation of acceptableVariations) {
        const normVariation = normaliseText(variation);
        if (normalised === normVariation || normalised.includes(normVariation)) {
            return 'correct';
        }
    }

    // Partial credit for word matching - require meaningful overlap
    for (let answer of [...correctAnswers, ...acceptableVariations]) {
        const words = normaliseText(answer).split(' ');
        const userWords = normalised.split(' ');

        // Only consider words of 3+ characters for matching
        const significantWords = words.filter(w => w.length >= 3);
        const significantUserWords = userWords.filter(w => w.length >= 3);

        if (significantWords.length === 0) continue;

        const matchingWords = significantWords.filter(word =>
            significantUserWords.some(userWord =>
                userWord === word || (userWord.length >= 4 && word.length >= 4 && (userWord.includes(word) || word.includes(userWord)))
            )
        );

        if (matchingWords.length >= Math.ceil(significantWords.length * 0.6)) {
            return 'partial';
        }
    }

    return 'incorrect';
}

// Shuffle an array and return the shuffle mapping
function shuffleChoices(choices, correctIndex) {
    const indices = choices.map((_, i) => i);
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const shuffledChoices = indices.map(i => choices[i]);
    const shuffledCorrectIndex = indices.indexOf(correctIndex);
    return { shuffledChoices, shuffledCorrectIndex, shuffleMap: indices };
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

    // Clear previous state
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('check-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    currentShuffleMap = null;
    selectedDragItem = null;

    loadAnswerArea(question);
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
        case 'scenario': {
            // Shuffle choices so correct answer isn't always in the same position
            const { shuffledChoices, shuffledCorrectIndex } = shuffleChoices(question.choices, question.correct);
            currentShuffleMap = shuffledCorrectIndex;

            answerArea.innerHTML = `
                <div class="multiple-choice" id="multiple-choice">
                    ${shuffledChoices.map((choice, index) => `
                        <div class="choice-option" onclick="selectChoice(${index})" data-choice="${index}">
                            <div class="choice-letter">${String.fromCharCode(65 + index)}</div>
                            <div>${choice}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
        }

        case 'drag-drop': {
            const categories = Object.keys(question.categories);
            // Shuffle the drag items so they're not in category order
            const shuffledItems = [...question.items].sort(() => Math.random() - 0.5);

            answerArea.innerHTML = `
                <div class="drag-drop-container">
                    <div class="drag-instruction">Drag items to the correct categories, or tap an item then tap a category</div>
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
        }

        case 'gap-fill': {
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
}

// Multiple choice selection
function selectChoice(index) {
    document.querySelectorAll('.choice-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-choice="${index}"]`).classList.add('selected');
}

// Drag and drop setup - with click fallback for touch devices
function setupDragAndDrop() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');

    dragItems.forEach(item => {
        // Desktop drag events
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        // Click/tap fallback
        item.addEventListener('click', handleItemClick);
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
        // Click/tap fallback - place selected item into this zone
        zone.addEventListener('click', handleZoneClick);
    });
}

function handleDragStart(e) {
    draggedItem = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.target.dataset.item);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    const zone = e.target.closest('.drop-zone');
    if (zone) zone.classList.add('drag-over');
}

function handleDragLeave(e) {
    const zone = e.target.closest('.drop-zone');
    if (zone && !zone.contains(e.relatedTarget)) {
        zone.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const dropZone = e.target.closest('.drop-zone');
    if (!dropZone) return;

    dropZone.classList.remove('drag-over');

    if (draggedItem) {
        placeItemInZone(draggedItem, dropZone);
        draggedItem = null;
    }
}

// Click/tap fallback handlers
function handleItemClick(e) {
    e.stopPropagation();
    // Clear previous selection
    document.querySelectorAll('.drag-item.selected-for-drop').forEach(el => {
        el.classList.remove('selected-for-drop');
    });
    selectedDragItem = e.target.closest('.drag-item');
    if (selectedDragItem) {
        selectedDragItem.classList.add('selected-for-drop');
    }
}

function handleZoneClick(e) {
    // Don't trigger if clicking a dropped item (those have their own handler)
    if (e.target.closest('.dropped-item')) return;

    if (selectedDragItem) {
        const dropZone = e.target.closest('.drop-zone');
        if (dropZone) {
            placeItemInZone(selectedDragItem, dropZone);
            selectedDragItem = null;
        }
    }
}

// Shared function to place a drag item into a drop zone
function placeItemInZone(item, dropZone) {
    const category = dropZone.dataset.category;
    const droppedItems = dropZone.querySelector('.dropped-items');

    const droppedItem = document.createElement('div');
    droppedItem.className = 'dropped-item';
    droppedItem.textContent = item.dataset.item;
    droppedItem.dataset.item = item.dataset.item;
    droppedItem.dataset.category = category;

    // Allow clicking dropped items to return them
    droppedItem.addEventListener('click', function(e) {
        e.stopPropagation();
        returnItemToSource(this);
    });
    droppedItem.style.cursor = 'pointer';
    droppedItem.title = 'Click to remove';

    droppedItems.appendChild(droppedItem);
    item.remove();
}

// Return a dropped item back to the source area
function returnItemToSource(droppedItem) {
    const dragItemsContainer = document.getElementById('drag-items');
    if (!dragItemsContainer) return;

    const newDragItem = document.createElement('div');
    newDragItem.className = 'drag-item';
    newDragItem.draggable = true;
    newDragItem.dataset.item = droppedItem.dataset.item;
    newDragItem.textContent = droppedItem.dataset.item;

    // Re-attach event listeners
    newDragItem.addEventListener('dragstart', handleDragStart);
    newDragItem.addEventListener('dragend', handleDragEnd);
    newDragItem.addEventListener('click', handleItemClick);

    dragItemsContainer.appendChild(newDragItem);
    droppedItem.remove();
}

// Check answer
function checkAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    let userAnswer = null;
    let result = 'incorrect';

    if (typeof taskTracker !== 'undefined') {
        taskTracker.recordActivity();
    }

    switch(question.type) {
        case 'text-flexible':
            userAnswer = document.getElementById('text-answer').value;
            result = checkFlexibleAnswer(userAnswer, question.correctAnswers, question.acceptableVariations);
            break;

        case 'multiple-choice':
        case 'scenario': {
            const selected = document.querySelector('.choice-option.selected');
            if (selected) {
                userAnswer = parseInt(selected.dataset.choice);
                // Compare against shuffled correct index
                result = userAnswer === currentShuffleMap ? 'correct' : 'incorrect';
            }
            break;
        }

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

    userAnswers[currentQuestionIndex] = {
        question: question,
        userAnswer: userAnswer,
        result: result
    };

    showFeedback(result, question.explanation);
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
            feedbackIcon.textContent = '\u2713';
            feedbackTitle.textContent = 'Correct!';
            break;
        case 'partial':
            feedbackIcon.textContent = '\u25D0';
            feedbackTitle.textContent = 'Partially Correct';
            break;
        case 'incorrect':
            feedbackIcon.textContent = '\u2717';
            feedbackTitle.textContent = 'Incorrect';
            break;
    }

    feedbackExplanation.textContent = explanation;
    feedback.style.display = 'block';
}

// Navigation
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

        if (userAnswers[currentQuestionIndex]) {
            const answer = userAnswers[currentQuestionIndex];
            showFeedback(answer.result, answer.question.explanation);
            document.getElementById('check-btn').style.display = 'none';
            document.getElementById('next-btn').style.display = 'inline-block';
        }
    }
}

// Results
async function showResults() {
    const quizEndTime = Date.now();
    const completionTime = Math.round((quizEndTime - quizStartTime) / (1000 * 60));

    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    let correct = 0;
    let incorrect = 0;
    let partial = 0;

    userAnswers.forEach(answer => {
        if (answer.result === 'correct') correct++;
        else if (answer.result === 'partial') partial++;
        else incorrect++;
    });

    const totalScore = Math.round((correct + partial * 0.5) / userAnswers.length * 100);

    if (typeof taskTracker !== 'undefined' && taskTracker.isTracking) {
        const totalQuestions = userAnswers.length;
        const correctAnswers = correct + Math.round(partial * 0.5);
        await taskTracker.complete(totalScore, totalQuestions, correctAnswers);
    }

    document.getElementById('final-score').textContent = `${totalScore}%`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = incorrect;
    document.getElementById('partial-count').textContent = partial;
    document.getElementById('completion-time').textContent = completionTime;

    const resultsMessage = document.getElementById('results-message');
    if (totalScore >= 85) {
        resultsMessage.textContent = "Excellent work! You're well-prepared for assessments.";
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
    selectedDragItem = null;

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
