// Lesson 1.6: Prepositions with the Accusative - Data File

const lessonData = {
    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "What are prepositions?",
                content: "Prepositions are little words that show relationships between things - like 'to', 'from', 'in', 'on'. In English, we say 'to the house' or 'around the garden'. Latin works the same way!"
            },
            {
                title: "Why do prepositions need the accusative?",
                content: "Some Latin prepositions always make the noun after them go into the accusative case. Think of it like this: the preposition is pushing or directing something, so it needs the 'action' case (accusative)."
            },
            {
                title: "The Pattern:",
                points: [
                    "Preposition + accusative noun = complete phrase",
                    "ad + villam = to the house",
                    "in + hortum = into the garden",
                    "The noun MUST be accusative after these prepositions"
                ]
            },
            {
                title: "Three Types of Movement:",
                points: [
                    "📍 Movement towards: ad (to), in (into)",
                    "🔄 Movement around: circum (around), per (through)",
                    "⚔️ Position/opposition: contra (against)"
                ]
            }
        ]
    },

    // Prepositions
    prepositions: [
        {
            latin: "ad",
            english: "to, towards",
            type: "movement",
            example: "ad villam",
            translation: "to the house",
            memory: "Think: ADvance towards"
        },
        {
            latin: "circum",
            english: "around",
            type: "movement",
            example: "circum hortum",
            translation: "around the garden",
            memory: "Think: CIRCUMference"
        },
        {
            latin: "contra",
            english: "against",
            type: "opposition",
            example: "contra dominum",
            translation: "against the master",
            memory: "Think: CONTRAry"
        },
        {
            latin: "in",
            english: "into",
            type: "movement",
            example: "in aquam",
            translation: "into the water",
            memory: "With accusative = INTO"
        },
        {
            latin: "per",
            english: "through, along",
            type: "movement",
            example: "per viam",
            translation: "through/along the road",
            memory: "Think: PERmeate"
        },
        {
            latin: "trans",
            english: "across",
            type: "movement",
            example: "trans fluvium",
            translation: "across the river",
            memory: "Think: TRANSport"
        }
    ],

    // Categories
    categories: [
        {
            title: "Movement Towards",
            icon: "→",
            prepositions: ["ad (to)", "in (into)"],
            explanation: "Shows direction - where something is going",
            color: "#4CAF50"
        },
        {
            title: "Movement Around/Through",
            icon: "↻",
            prepositions: ["circum (around)", "per (through)", "trans (across)"],
            explanation: "Shows path - how something moves",
            color: "#2196F3"
        },
        {
            title: "Opposition/Position",
            icon: "⚔",
            prepositions: ["contra (against)"],
            explanation: "Shows relationship - position relative to something",
            color: "#F44336"
        }
    ],

    // Example Sentences
    examples: [
        {
            latin: "puella ad villam ambulat.",
            english: "The girl walks to the house.",
            explanation: "ad + villam (accusative) = to the house"
        },
        {
            latin: "servus circum hortum currit.",
            english: "The slave runs around the garden.",
            explanation: "circum + hortum (accusative) = around the garden"
        },
        {
            latin: "dominus contra servum pugnat.",
            english: "The master fights against the slave.",
            explanation: "contra + servum (accusative) = against the slave"
        },
        {
            latin: "ancilla in aquam salit.",
            english: "The slave-girl jumps into the water.",
            explanation: "in + aquam (accusative) = into the water (movement)"
        },
        {
            latin: "pueri per viam ambulant.",
            english: "The boys walk along the road.",
            explanation: "per + viam (accusative) = along the road"
        },
        {
            latin: "nauta trans oceanum navigat.",
            english: "The sailor sails across the ocean.",
            explanation: "trans + oceanum (accusative) = across the ocean"
        },
        {
            latin: "femina ad forum festinat.",
            english: "The woman hurries to the forum.",
            explanation: "ad + forum (accusative neuter) = to the forum"
        },
        {
            latin: "milites per silvam iter faciunt.",
            english: "The soldiers march through the forest.",
            explanation: "per + silvam (accusative) = through the forest"
        }
    ],

    // Visual Scenarios
    visualScenarios: [
        {
            title: "🏠 The Journey Home",
            scenario: "servus ad villam ambulat",
            breakdown: [
                "servus (nom.) = the slave (subject)",
                "ad = to",
                "villam (acc.) = the house",
                "ambulat = walks"
            ],
            visual: "👤 → 🏠"
        },
        {
            title: "🌳 Around the Garden",
            scenario: "puella circum hortum currit",
            breakdown: [
                "puella (nom.) = the girl (subject)",
                "circum = around",
                "hortum (acc.) = the garden",
                "currit = runs"
            ],
            visual: "👧 ↻ 🌳"
        },
        {
            title: "⚔️ The Battle",
            scenario: "Romani contra hostes pugnant",
            breakdown: [
                "Romani (nom. pl.) = the Romans (subject)",
                "contra = against",
                "hostes (acc. pl.) = the enemies",
                "pugnant = fight"
            ],
            visual: "🛡️ ⚔️ 👥"
        }
    ],

    // Common Patterns
    patterns: [
        {
            pattern: "ad + place",
            meaning: "to/towards a place",
            examples: ["ad villam", "ad forum", "ad templum"],
            tip: "Shows destination"
        },
        {
            pattern: "in + accusative",
            meaning: "into (movement)",
            examples: ["in hortum", "in aquam", "in silvam"],
            tip: "Remember: in + acc = INTO (movement)"
        },
        {
            pattern: "per + place/thing",
            meaning: "through/along",
            examples: ["per viam", "per forum", "per noctem"],
            tip: "Shows the route taken"
        },
        {
            pattern: "circum + object",
            meaning: "around something",
            examples: ["circum urbem", "circum muros", "circum insulam"],
            tip: "Circular movement"
        }
    ],

    // Exercises
    exercises: [
        {
            number: "Exercise 4.1",
            description: "Identify prepositions and their objects"
        },
        {
            number: "Exercise 4.2",
            description: "Translate sentences with prepositions"
        },
        {
            number: "Exercise 4.3",
            description: "Choose the correct case after prepositions"
        },
        {
            number: "Exercise 4.4",
            description: "Complete sentences with appropriate prepositions"
        }
    ],

    // Grammar Tips
    grammarTips: {
        title: "Essential Preposition Rules:",
        points: [
            "📌 These six prepositions ALWAYS take the accusative",
            "🎯 The noun must be in accusative: -am (1st), -um (2nd)",
            "🔄 in + accusative = into (movement), in + ablative = in (position)",
            "💡 English word connections help: circumference, contradict, transport",
            "⚠️ Don't confuse: ad (to) is not the same as et (and)",
            "🏃 Most show movement or direction - think ACTION = ACCUSATIVE"
        ]
    },

    // Study Checklist
    checklist: [
        "Memorise all 6 prepositions",
        "Practice recognising accusative endings after prepositions",
        "Understand the three types of prepositions",
        "Complete Exercise 4.1",
        "Complete Exercise 4.2",
        "Complete Exercise 4.3",
        "Complete Exercise 4.4",
        "Review all Chapter 1 vocabulary",
        "Test yourself: translate 5 sentences with prepositions"
    ],

    // Quick Reference
    quickReference: {
        title: "Prepositions + Accusative:",
        content: [
            {
                heading: "The Six:",
                items: "ad (to) • circum (around) • contra (against) • in (into) • per (through) • trans (across)"
            },
            {
                heading: "Remember:",
                items: "These ALWAYS need accusative"
            },
            {
                heading: "Accusative endings:",
                items: "1st: -am (puellam) • 2nd: -um (dominum)"
            },
            {
                heading: "Think:",
                items: "Movement/Action = Accusative!"
            }
        ]
    }
};

// Function to load all data into the HTML
function loadLessonData() {
    // Load Grammar Explanation
    const grammarContent = document.getElementById('grammar-explanation-content');
    if (grammarContent) {
        let html = '';
        lessonData.grammarExplanation.sections.forEach(section => {
            if (section.content) {
                html += `<p><strong>${section.title}</strong> ${section.content}</p>`;
            } else if (section.points) {
                html += `<p><strong>${section.title}</strong></p><ul>`;
                section.points.forEach(point => {
                    html += `<li>${point}</li>`;
                });
                html += '</ul>';
            }
        });
        grammarContent.innerHTML = html;
    }

    // Load Prepositions Grid
    const prepositionsGrid = document.getElementById('prepositions-grid');
    if (prepositionsGrid) {
        prepositionsGrid.innerHTML = lessonData.prepositions.map(prep => `
            <div class="preposition-card">
                <div class="prep-latin">${prep.latin}</div>
                <div class="prep-english">${prep.english}</div>
                <div class="prep-example">
                    <span class="example-latin">${prep.example}</span>
                    <span class="example-english">${prep.translation}</span>
                </div>
                <div class="prep-memory">${prep.memory}</div>
            </div>
        `).join('');
    }

    // Load Categories
    const categoriesGrid = document.getElementById('categories-grid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = lessonData.categories.map(cat => `
            <div class="category-card" style="border-color: ${cat.color}20;">
                <div class="category-icon" style="color: ${cat.color}; font-size: 2rem;">${cat.icon}</div>
                <div class="category-title" style="color: ${cat.color};">${cat.title}</div>
                <div class="category-preps">${cat.prepositions.join(' • ')}</div>
                <div class="category-explanation">${cat.explanation}</div>
            </div>
        `).join('');
    }

    // Load Example Sentences
    const examplesList = document.getElementById('examples-list');
    if (examplesList) {
        examplesList.innerHTML = lessonData.examples.map((ex, index) => `
            <div class="example-item" onclick="toggleTranslation(${index})">
                <div class="example-latin">${ex.latin}</div>
                <div class="example-content" id="example-${index}" style="display: none;">
                    <div class="example-english">${ex.english}</div>
                    <div class="example-explanation">${ex.explanation}</div>
                </div>
                <div class="click-hint" id="hint-${index}">Click to reveal translation</div>
            </div>
        `).join('');
    }

    // Load Visual Scenarios
    const visualScenarios = document.getElementById('visual-scenarios');
    if (visualScenarios) {
        visualScenarios.innerHTML = lessonData.visualScenarios.map(scene => `
            <div class="scenario-card">
                <div class="scenario-title">${scene.title}</div>
                <div class="scenario-visual">${scene.visual}</div>
                <div class="scenario-latin">${scene.scenario}</div>
                <div class="scenario-breakdown">
                    ${scene.breakdown.map(line => `<div class="breakdown-line">${line}</div>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // Load Common Patterns
    const patternsGrid = document.getElementById('patterns-grid');
    if (patternsGrid) {
        patternsGrid.innerHTML = lessonData.patterns.map(pattern => `
            <div class="pattern-card">
                <div class="pattern-header">${pattern.pattern}</div>
                <div class="pattern-meaning">${pattern.meaning}</div>
                <div class="pattern-examples">
                    ${pattern.examples.map(ex => `<span class="pattern-example">${ex}</span>`).join(' • ')}
                </div>
                <div class="pattern-tip">💡 ${pattern.tip}</div>
            </div>
        `).join('');
    }

    // Load Exercises
    const exerciseList = document.getElementById('exercise-list');
    if (exerciseList) {
        exerciseList.innerHTML = lessonData.exercises.map(ex => `
            <div class="exercise-reference">
                <div class="exercise-number">${ex.number}</div>
                <div class="exercise-description">${ex.description}</div>
            </div>
        `).join('');
    }

    // Load Grammar Tips
    const tipsContent = document.getElementById('grammar-tips-content');
    if (tipsContent) {
        let tipsHtml = `<p><strong>${lessonData.grammarTips.title}</strong></p><ul style="list-style: none;">`;
        lessonData.grammarTips.points.forEach(point => {
            tipsHtml += `<li style="margin-bottom: 0.5rem;">${point}</li>`;
        });
        tipsHtml += '</ul>';
        tipsContent.innerHTML = tipsHtml;
    }

    // Load Study Checklist
    const checklist = document.getElementById('study-checklist');
    if (checklist) {
        checklist.innerHTML = lessonData.checklist.map((item, index) => `
            <div class="checklist-row">
                <label class="checklist-item">
                    <input type="checkbox"> ${item}
                </label>
                <button class="do-now-btn" id="do-now-${index}" onclick="markAsDoingNow(${index})">Do now</button>
            </div>
        `).join('');
    }

    // Load Quick Reference
    const quickRef = document.getElementById('quick-reference-content');
    if (quickRef) {
        let refHtml = `<p><strong>${lessonData.quickReference.title}</strong></p>`;
        lessonData.quickReference.content.forEach(item => {
            refHtml += `<p style="margin-top: 0.75rem;"><strong>${item.heading}</strong><br>${item.items}</p>`;
        });
        quickRef.innerHTML = refHtml;
    }
}

// Function to toggle translation visibility
function toggleTranslation(index) {
    const content = document.getElementById(`example-${index}`);
    const hint = document.getElementById(`hint-${index}`);
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        hint.style.display = 'none';
    } else {
        content.style.display = 'none';
        hint.style.display = 'block';
    }
}

// Function to mark checklist item as "doing now"
function markAsDoingNow(index) {
    const button = document.getElementById(`do-now-${index}`);
    const allButtons = document.querySelectorAll('.do-now-btn');
    
    // Remove active state from all buttons
    allButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.textContent = 'Do now';
    });
    
    // Toggle this button
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.textContent = 'Do now';
    } else {
        button.classList.add('active');
        button.textContent = 'Doing now!';
    }
}

// Navigation functions
function navigateToLesson(lesson) {
    window.location.href = `../${lesson}/index.html`;
}

// Modal functions
function showInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}
