// Lesson 2.1: The Genitive Case - Interactive Functions

// Track revealed endings
let revealedEndings = new Set();
let allRevealed = false;

// Reveal individual ending
function revealEnding(cell) {
    const ending = cell.querySelector('.ending');
    if (ending) {
        ending.classList.toggle('hidden');
        
        const cellData = cell.getAttribute('data-ending');
        if (ending.classList.contains('hidden')) {
            revealedEndings.delete(cellData);
        } else {
            revealedEndings.add(cellData);
        }
        
        updateRevealButton();
    }
}

// Toggle all endings
function toggleAllEndings() {
    const allEndings = document.querySelectorAll('.ending');
    const button = document.querySelector('.reveal-all-btn');
    
    if (allRevealed) {
        // Hide all
        allEndings.forEach(ending => ending.classList.add('hidden'));
        button.textContent = 'Reveal All Endings';
        allRevealed = false;
        revealedEndings.clear();
    } else {
        // Show all
        allEndings.forEach(ending => ending.classList.remove('hidden'));
        button.textContent = 'Hide All Endings';
        allRevealed = true;
        // Add all to revealed set
        document.querySelectorAll('.ending-cell').forEach(cell => {
            const cellData = cell.getAttribute('data-ending');
            if (cellData) revealedEndings.add(cellData);
        });
    }
}

// Update reveal button text based on current state
function updateRevealButton() {
    const totalEndings = document.querySelectorAll('.ending-cell').length;
    const button = document.querySelector('.reveal-all-btn');
    
    if (revealedEndings.size === totalEndings) {
        button.textContent = 'Hide All Endings';
        allRevealed = true;
    } else {
        button.textContent = 'Reveal All Endings';
        allRevealed = false;
    }
}

// Toggle translation examples
function toggleExample(card) {
    const details = card.querySelector('.translation-details');
    if (details) {
        details.classList.toggle('hidden');
        
        // Add visual feedback
        if (details.classList.contains('hidden')) {
            card.style.borderColor = '#e9ecef';
        } else {
            card.style.borderColor = '#0066ff';
        }
    }
}

// Toggle context analysis
function toggleContext(card) {
    const analysis = card.querySelector('.context-analysis');
    if (analysis) {
        analysis.classList.toggle('hidden');
        
        // Add visual feedback
        if (analysis.classList.contains('hidden')) {
            card.style.borderColor = '#e9ecef';
        } else {
            card.style.borderColor = '#28a745';
        }
    }
}

// Chapter 2 vocabulary data
const chapter2Vocabulary = {
    nouns: [
        {
            latin: "puella, -ae f",
            english: "girl",
            declension: "1st",
            notes: "familiar from Chapter 1"
        },
        {
            latin: "dominus, -i m",
            english: "master, lord",
            declension: "2nd",
            notes: "familiar from Chapter 1"
        },
        {
            latin: "villa, -ae f",
            english: "house, villa",
            declension: "1st",
            notes: "country house"
        },
        {
            latin: "servus, -i m",
            english: "slave",
            declension: "2nd",
            notes: "masculine"
        },
        {
            latin: "amicus, -i m",
            english: "friend",
            declension: "2nd",
            notes: "masculine friend"
        },
        {
            latin: "gladius, -i m",
            english: "sword",
            declension: "2nd",
            notes: "weapon"
        }
    ],
    verbs: [
        {
            latin: "amo, amare",
            english: "I love, like",
            conjugation: "1st",
            notes: "takes accusative object"
        },
        {
            latin: "laboro, laborare",
            english: "I work",
            conjugation: "1st",
            notes: "intransitive"
        }
    ],
    otherWords: [
        {
            latin: "non",
            english: "not",
            type: "adverb",
            notes: "negates verbs"
        }
    ]
};

// Initialize vocabulary sidebar when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Populate vocabulary sidebar if function exists
    if (typeof populateVocabSidebar === 'function') {
        populateVocabSidebar(chapter2Vocabulary);
    }
    
    // Add hover effects to interactive elements
    const clickableCells = document.querySelectorAll('.clickable');
    clickableCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e3f2fd';
        });
        
        cell.addEventListener('mouseleave', function() {
            if (!this.querySelector('.ending').classList.contains('hidden')) {
                this.style.backgroundColor = '';
            } else {
                this.style.backgroundColor = '';
            }
        });
    });
    
    // Add click sound effect (if available)
    const interactiveElements = document.querySelectorAll('.clickable, .translation-card, .context-card');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            // Could add sound effect here
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
});

// Helper function to get random example sentence
function getRandomExample() {
    const examples = [
        {
            latin: "villa domini magna est.",
            english: "The master's house is big."
        },
        {
            latin: "servus puellae laborat.",
            english: "The girl's slave is working."
        },
        {
            latin: "gladius amici novus est.",
            english: "The friend's sword is new."
        }
    ];
    
    return examples[Math.floor(Math.random() * examples.length)];
}

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        revealEnding,
        toggleAllEndings,
        toggleExample,
        toggleContext,
        chapter2Vocabulary
    };
}
