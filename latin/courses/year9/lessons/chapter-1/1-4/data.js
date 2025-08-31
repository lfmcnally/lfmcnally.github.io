// Lesson 1.4: Nominative & Accusative Plural - Data File

const lessonData = {
    // Grammar Explanation
    grammarExplanation: {
        sections: [
            {
                title: "From One to Many",
                content: "In the last lesson, we learned about singular nouns (one person or thing). Now we'll learn about plural nouns (more than one). Just like in English, Latin nouns change their form to show plural."
            },
            {
                title: "The Pattern Continues",
                content: "The good news is that nominative and accusative still work the same way! Nominative is still the <strong>subject</strong> (who's doing the action), and accusative is still the <strong>direct object</strong> (who's receiving the action)."
            },
            {
                title: "New Endings for Plural",
                content: "Each declension has its own special plural endings. Once you learn these patterns, you can make ANY 1st or 2nd declension noun plural!"
            },
            {
                title: "Watch out for:",
                points: [
                    "1st declension: The nominative plural ending <strong>-ae</strong> looks like the genitive singular (we'll learn genitive later)",
                    "2nd declension: The nominative plural <strong>-i</strong> is nice and short",
                    "Both declensions use different endings for accusative plural",
                    "The meaning stays the same - just more than one!"
                ]
            }
        ]
    },

    // Comparison Table
    comparison: {
        firstDeclension: {
            title: "1st Declension: puella",
            cases: [
                {
                    caseName: "Nominative",
                    singular: "puella",
                    plural: "puellae",
                    change: "-a → -ae"
                },
                {
                    caseName: "Accusative",
                    singular: "puellam",
                    plural: "puellas",
                    change: "-am → -as"
                }
            ]
        },
        secondDeclension: {
            title: "2nd Declension: dominus",
            cases: [
                {
                    caseName: "Nominative",
                    singular: "dominus",
                    plural: "domini",
                    change: "-us → -i"
                },
                {
                    caseName: "Accusative",
                    singular: "dominum",
                    plural: "dominos",
                    change: "-um → -os"
                }
            ]
        }
    },

    // First Declension (puella)
    firstDeclension: {
        cases: [
            {
                caseName: "Nom. Singular",
                latin: "puella",
                english: "the girl (subject)",
                number: "singular"
            },
            {
                caseName: "Acc. Singular",
                latin: "puellam",
                english: "the girl (object)",
                number: "singular"
            },
            {
                caseName: "Nom. Plural",
                latin: "puellae",
                english: "the girls (subject)",
                number: "plural"
            },
            {
                caseName: "Acc. Plural",
                latin: "puellas",
                english: "the girls (object)",
                number: "plural"
            }
        ]
    },

    // Second Declension (dominus)
    secondDeclension: {
        cases: [
            {
                caseName: "Nom. Singular",
                latin: "dominus",
                english: "the master (subject)",
                number: "singular"
            },
            {
                caseName: "Acc. Singular",
                latin: "dominum",
                english: "the master (object)",
                number: "singular"
            },
            {
                caseName: "Nom. Plural",
                latin: "domini",
                english: "the masters (subject)",
                number: "plural"
            },
            {
                caseName: "Acc. Plural",
                latin: "dominos",
                english: "the masters (object)",
                number: "plural"
            }
        ]
    },

    // Example Sentences
    examples: [
        {
            latin: "puellae ambulant.",
            english: "The girls walk.",
            explanation: "puellae is nominative plural (subject)"
        },
        {
            latin: "domini puellas vident.",
            english: "The masters see the girls.",
            explanation: "domini is nom. plural (subject), puellas is acc. plural (object)"
        },
        {
            latin: "puella dominos amat.",
            english: "The girl loves the masters.",
            explanation: "puella is nom. singular (subject), dominos is acc. plural (object)"
        },
        {
            latin: "puellae dominum spectant.",
            english: "The girls watch the master.",
            explanation: "puellae is nom. plural (subject), dominum is acc. singular (object)"
        },
        {
            latin: "dominos video.",
            english: "I see the masters.",
            explanation: "dominos is accusative plural (object) - remember the subject 'I' is in the verb!"
        }
    ],

    // Textbook Exercises
    exercises: [
        {
            number: "Exercise 2.4",
            description: "Identify singular and plural nouns in sentences"
        },
        {
            number: "Exercise 2.5",
            description: "Change singular nouns to plural and translate"
        },
        {
            number: "Exercise 2.6",
            description: "Translate sentences with mixed singular and plural nouns"
        }
    ],

    // Grammar Tips
    grammarTips: {
        title: "Summary of All Endings So Far:",
        sections: [
            {
                heading: "1st Declension (like puella):",
                points: [
                    "Nom. Sing: -a | Nom. Plural: -ae",
                    "Acc. Sing: -am | Acc. Plural: -as"
                ]
            },
            {
                heading: "2nd Declension (like dominus):",
                points: [
                    "Nom. Sing: -us | Nom. Plural: -i",
                    "Acc. Sing: -um | Acc. Plural: -os"
                ]
            },
            {
                heading: "Remember:",
                points: [
                    "Nominative = subject (doing the action)",
                    "Accusative = object (receiving the action)",
                    "Singular = one | Plural = more than one",
                    "Look at the ending to work out both the case AND the number!"
                ]
            }
        ]
    },

    // Study Checklist
    checklist: [
        "Review singular forms from lesson 1.3",
        "Learn the new plural endings",
        "Study the comparison table",
        "Read through all example sentences",
        "Complete Exercise 2.4",
        "Complete Exercise 2.5",
        "Complete Exercise 2.6",
        "Test yourself on all 8 forms (4 for each noun)"
    ],

    // Quick Reference
    quickReference: {
        title: "Plural Patterns:",
        content: [
            {
                type: "1st Declension Plurals",
                examples: "puellae (girls), feminae (women), aquae (waters), terrae (lands)"
            },
            {
                type: "2nd Declension Plurals",
                examples: "domini (masters), servi (slaves), filii (sons), dei (gods)"
            },
            {
                type: "Quick Tip",
                examples: "If it ends in -ae or -i, it's nominative plural. If it ends in -as or -os, it's accusative plural!"
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

    // Load Comparison Table
    const comparisonTable = document.getElementById('comparison-table');
    if (comparisonTable) {
        let html = '<div class="comparison-grid">';
        
        // First Declension
        html += '<div class="comparison-column">';
        html += `<h4 class="comparison-header">${lessonData.comparison.firstDeclension.title}</h4>`;
        lessonData.comparison.firstDeclension.cases.forEach(caseItem => {
            html += `
                <div class="comparison-row">
                    <div class="comparison-case">${caseItem.caseName}</div>
                    <div class="comparison-forms">
                        <span class="form-singular">${caseItem.singular}</span>
                        <span class="arrow">→</span>
                        <span class="form-plural">${caseItem.plural}</span>
                    </div>
                    <div class="comparison-change">${caseItem.change}</div>
                </div>
            `;
        });
        html += '</div>';
        
        // Second Declension
        html += '<div class="comparison-column">';
        html += `<h4 class="comparison-header">${lessonData.comparison.secondDeclension.title}</h4>`;
        lessonData.comparison.secondDeclension.cases.forEach(caseItem => {
            html += `
                <div class="comparison-row">
                    <div class="comparison-case">${caseItem.caseName}</div>
                    <div class="comparison-forms">
                        <span class="form-singular">${caseItem.singular}</span>
                        <span class="arrow">→</span>
                        <span class="form-plural">${caseItem.plural}</span>
                    </div>
                    <div class="comparison-change">${caseItem.change}</div>
                </div>
            `;
        });
        html += '</div>';
        
        html += '</div>';
        comparisonTable.innerHTML = html;
    }

    // Load First Declension Cases
    const firstDeclDiv = document.getElementById('first-declension-cases');
    if (firstDeclDiv) {
        firstDeclDiv.innerHTML = lessonData.firstDeclension.cases.map(caseItem => `
            <div class="case-card ${caseItem.number}">
                <div class="case-label">${caseItem.caseName}</div>
                <div class="latin-form">${caseItem.latin}</div>
                <div class="english-translation">${caseItem.english}</div>
            </div>
        `).join('');
    }

    // Load Second Declension Cases
    const secondDeclDiv = document.getElementById('second-declension-cases');
    if (secondDeclDiv) {
        secondDeclDiv.innerHTML = lessonData.secondDeclension.cases.map(caseItem => `
            <div class="case-card ${caseItem.number}">
                <div class="case-label">${caseItem.caseName}</div>
                <div class="latin-form">${caseItem.latin}</div>
                <div class="english-translation">${caseItem.english}</div>
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
        let tipsHtml = `<p><strong>${lessonData.grammarTips.title}</strong></p>`;
        lessonData.grammarTips.sections.forEach(section => {
            tipsHtml += `<p style="margin-top: 1rem;"><strong>${section.heading}</strong></p><ul>`;
            section.points.forEach(point => {
                tipsHtml += `<li>${point}</li>`;
            });
            tipsHtml += '</ul>';
        });
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
            refHtml += `<p style="margin-top: 0.75rem;"><strong>${item.type}:</strong><br>${item.examples}</p>`;
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
