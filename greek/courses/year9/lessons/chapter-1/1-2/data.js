// Lesson 1.2: The Greek Alphabet & Writing - Data

const lessonData = {
    // Greek Alphabet with detailed information
    alphabet: [
        { upper: 'Α', lower: 'α', name: 'Alpha', sound: 'a (as in father)', info: 'First letter, origin of "A". Used in phrases like "alpha and omega".' },
        { upper: 'Β', lower: 'β', name: 'Beta', sound: 'b', info: 'Second letter, origin of "B". Combined with Alpha gives us "alphabet".' },
        { upper: 'Γ', lower: 'γ', name: 'Gamma', sound: 'g (hard, as in go)', info: 'Origin of "C" and "G". Used in gamma rays.' },
        { upper: 'Δ', lower: 'δ', name: 'Delta', sound: 'd', info: 'Origin of "D". River deltas are named after this triangular letter.' },
        { upper: 'Ε', lower: 'ε', name: 'Epsilon', sound: 'e (short, as in pet)', info: 'Means "simple E". Origin of "E".' },
        { upper: 'Ζ', lower: 'ζ', name: 'Zeta', sound: 'zd or dz', info: 'Origin of "Z". Pronounced as a combination sound.' },
        { upper: 'Η', lower: 'η', name: 'Eta', sound: 'e (long, as in they)', info: 'Long E sound. Originally represented aspiration.' },
        { upper: 'Θ', lower: 'θ', name: 'Theta', sound: 'th (as in thin)', info: 'Used in mathematics (angles). No English equivalent letter.' },
        { upper: 'Ι', lower: 'ι', name: 'Iota', sound: 'i (as in machine)', info: 'Origin of "I". Smallest letter, hence "not one iota".' },
        { upper: 'Κ', lower: 'κ', name: 'Kappa', sound: 'k', info: 'Origin of "K". Used in the phrase "kappa moment".' },
        { upper: 'Λ', lower: 'λ', name: 'Lambda', sound: 'l', info: 'Origin of "L". Used as a symbol in physics (wavelength).' },
        { upper: 'Μ', lower: 'μ', name: 'Mu', sound: 'm', info: 'Origin of "M". Micro- prefix comes from this letter.' },
        { upper: 'Ν', lower: 'ν', name: 'Nu', sound: 'n', info: 'Origin of "N". Looks like English "v" but sounds like "n".' },
        { upper: 'Ξ', lower: 'ξ', name: 'Xi', sound: 'x or ks', info: 'Double consonant. Pronounced like "x" in "fox".' },
        { upper: 'Ο', lower: 'ο', name: 'Omicron', sound: 'o (short, as in pot)', info: 'Means "small O". Origin of "O".' },
        { upper: 'Π', lower: 'π', name: 'Pi', sound: 'p', info: 'Origin of "P". Famous in mathematics (3.14159...).' },
        { upper: 'Ρ', lower: 'ρ', name: 'Rho', sound: 'r (rolled)', info: 'Origin of "R". Looks like English "p" but sounds like "r".' },
        { upper: 'Σ', lower: 'σ/ς', name: 'Sigma', sound: 's', info: 'Origin of "S". Has special final form ς. Used in sum notation.' },
        { upper: 'Τ', lower: 'τ', name: 'Tau', sound: 't', info: 'Origin of "T". Used in physics for torque.' },
        { upper: 'Υ', lower: 'υ', name: 'Upsilon', sound: 'u/y (as in French u)', info: 'Origin of "U", "V", and "Y". Pronounced like German ü.' },
        { upper: 'Φ', lower: 'φ', name: 'Phi', sound: 'ph or f', info: 'Origin of "F". Used for golden ratio in mathematics.' },
        { upper: 'Χ', lower: 'χ', name: 'Chi', sound: 'ch (as in loch)', info: 'Guttural sound. Christ begins with Chi-Rho in Greek.' },
        { upper: 'Ψ', lower: 'ψ', name: 'Psi', sound: 'ps', info: 'Double consonant. Psychology symbol. Pronounced like "ps" in "lips".' },
        { upper: 'Ω', lower: 'ω', name: 'Omega', sound: 'o (long, as in home)', info: 'Means "great O". Last letter, hence "alpha and omega".' }
    ],

    // Practice words for transliteration
    transliterationWords: [
        { greek: 'λόγος', answer: 'logos', hint: 'word, reason' },
        { greek: 'θεός', answer: 'theos', hint: 'god' },
        { greek: 'ἄνθρωπος', answer: 'anthropos', hint: 'human' },
        { greek: 'φιλοσοφία', answer: 'philosophia', hint: 'philosophy' },
        { greek: 'κόσμος', answer: 'kosmos', hint: 'world, order' }
    ],

    // Progress checklist
    progressChecklist: [
        { id: 'learn-vowels', text: 'Learn the 7 vowels', checked: false },
        { id: 'learn-consonants', text: 'Learn the 17 consonants', checked: false },
        { id: 'practice-sigma', text: 'Understand sigma forms', checked: false },
        { id: 'practice-writing', text: 'Practice writing letters', checked: false },
        { id: 'complete-recognition', text: 'Complete recognition quiz', checked: false },
        { id: 'complete-transliteration', text: 'Complete transliteration', checked: false }
    ],

    // Quick reference content
    quickReference: `
        <p><strong>Vowels:</strong> α ε η ι ο υ ω</p>
        <p><strong>Consonants:</strong> β γ δ ζ θ κ λ μ ν ξ π ρ σ τ φ χ ψ</p>
        <p><strong>Double sounds:</strong> ξ (ks), ψ (ps), ζ (zd)</p>
        <p><strong>Look-alikes:</strong></p>
        <ul style="font-size: 0.85rem; color: #666;">
            <li>ρ looks like p but = r</li>
            <li>ν looks like v but = n</li>
            <li>η is not H but = long e</li>
        </ul>
    `,

    // Fun fact
    funFact: "The word 'alphabet' comes from the first two Greek letters: alpha (α) and beta (β). The Greeks adapted their alphabet from the Phoenicians around 800 BCE, but they made a revolutionary change - they added vowels! This made Greek the first true alphabet in history."
};

// Function to load all lesson data
function loadLessonData() {
    // Load alphabet grid
    loadAlphabetGrid();
    
    // Load transliteration exercises
    loadTransliterationExercises();
    
    // Load progress checklist
    loadProgressChecklist();
    
    // Load quick reference
    loadQuickReference();
    
    // Load fun fact
    loadFunFact();
    
    // Initialize recognition quiz
    initializeRecognitionQuiz();
}

// Load alphabet grid
function loadAlphabetGrid() {
    const grid = document.getElementById('alphabet-grid');
    if (grid) {
        grid.innerHTML = lessonData.alphabet.map(letter => `
            <div class="letter-card" onclick="showLetterDetail('${letter.name}')">
                <span class="greek-letter">${letter.upper} ${letter.lower}</span>
                <div class="letter-name">${letter.name}</div>
                <div class="letter-sound">${letter.sound}</div>
            </div>
        `).join('');
    }
}

// Show letter detail
function showLetterDetail(letterName) {
    const letter = lessonData.alphabet.find(l => l.name === letterName);
    if (!letter) return;
    
    const detail = document.getElementById('letter-detail');
    document.getElementById('detail-upper').textContent = letter.upper;
    document.getElementById('detail-lower').textContent = letter.lower;
    document.getElementById('detail-name').textContent = letter.name;
    document.getElementById('detail-sound').textContent = letter.sound;
    document.getElementById('detail-info').textContent = letter.info;
    
    detail.classList.remove('hidden');
    
    // Draw letter guides on canvases
    drawLetterGuide('uppercase-canvas', letter.upper);
    drawLetterGuide('lowercase-canvas', letter.lower);
}

// Close letter detail
function closeLetterDetail() {
    document.getElementById('letter-detail').classList.add('hidden');
}

// Draw letter guide (simplified - would need actual stroke data for real implementation)
function drawLetterGuide(canvasId, letter) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw guide lines
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(120, 30);
    ctx.moveTo(0, 90);
    ctx.lineTo(120, 90);
    ctx.stroke();
    
    // Draw letter
    ctx.font = '60px "Times New Roman", serif';
    ctx.fillStyle = '#0066ff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, 60, 60);
}

// Load transliteration exercises
function loadTransliterationExercises() {
    const container = document.getElementById('transliteration-exercises');
    if (container) {
        container.innerHTML = lessonData.transliterationWords.map((word, index) => `
            <div class="exercise-item">
                <span class="greek-word">${word.greek}</span>
                <span class="hint">(${word.hint})</span>
                <input type="text" id="trans-${index}" class="answer-input" placeholder="Type in English letters">
            </div>
        `).join('');
    }
}

// Check transliteration answers
function checkTransliteration() {
    let correct = 0;
    const total = lessonData.transliterationWords.length;
    
    lessonData.transliterationWords.forEach((word, index) => {
        const input = document.getElementById(`trans-${index}`);
        const userAnswer = input.value.toLowerCase().trim();
        
        if (userAnswer === word.answer) {
            input.style.borderColor = '#28a745';
            correct++;
        } else {
            input.style.borderColor = '#dc3545';
        }
    });
    
    const feedback = document.getElementById('transliteration-feedback');
    feedback.innerHTML = `You got ${correct} out of ${total} correct!`;
    if (correct === total) {
        feedback.innerHTML += ' εὖγε! (Well done!)';
        updateProgress('complete-transliteration', true);
    }
    feedback.classList.remove('hidden');
}

// Initialize recognition quiz
function initializeRecognitionQuiz() {
    const quiz = document.getElementById('recognition-quiz');
    if (!quiz) return;
    
    // Select 5 random letters for the quiz
    const randomLetters = [...lessonData.alphabet]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
    
    quiz.innerHTML = randomLetters.map((letter, index) => `
        <div class="quiz-item">
            <div class="quiz-letter">${Math.random() > 0.5 ? letter.upper : letter.lower}</div>
            <select id="recog-${index}" class="quiz-select">
                <option value="">Choose...</option>
                ${lessonData.alphabet.map(l => 
                    `<option value="${l.name}">${l.name}</option>`
                ).join('')}
            </select>
        </div>
    `).join('');
    
    // Store correct answers
    window.recognitionAnswers = randomLetters.map(l => l.name);
}

// Check recognition answers
function checkRecognition() {
    let correct = 0;
    const total = window.recognitionAnswers.length;
    
    window.recognitionAnswers.forEach((answer, index) => {
        const select = document.getElementById(`recog-${index}`);
        if (select.value === answer) {
            select.style.borderColor = '#28a745';
            correct++;
        } else {
            select.style.borderColor = '#dc3545';
        }
    });
    
    const feedback = document.getElementById('recognition-feedback');
    feedback.innerHTML = `You got ${correct} out of ${total} correct!`;
    if (correct === total) {
        feedback.innerHTML += ' πάνυ καλῶς! (Very well!)';
        updateProgress('complete-recognition', true);
    }
    feedback.classList.remove('hidden');
}

// Load progress checklist
function loadProgressChecklist() {
    const checklist = document.getElementById('progress-checklist');
    if (checklist) {
        checklist.innerHTML = lessonData.progressChecklist.map(item => `
            <div class="checklist-row">
                <div class="checklist-item">
                    <input type="checkbox" id="${item.id}" ${item.checked ? 'checked' : ''} 
                           onchange="updateProgress('${item.id}', this.checked)">
                    <label for="${item.id}">${item.text}</label>
                </div>
            </div>
        `).join('');
    }
}

// Update progress
function updateProgress(itemId, checked) {
    const item = lessonData.progressChecklist.find(i => i.id === itemId);
    if (item) {
        item.checked = checked;
    }
}

// Load quick reference
function loadQuickReference() {
    const ref = document.getElementById('quick-reference');
    if (ref) {
        ref.innerHTML = lessonData.quickReference;
    }
}

// Load fun fact
function loadFunFact() {
    const fact = document.getElementById('fun-fact');
    if (fact) {
        fact.textContent = lessonData.funFact;
    }
}

// Set current chapter
function setCurrentChapter(chapter) {
    window.currentChapter = chapter;
}
