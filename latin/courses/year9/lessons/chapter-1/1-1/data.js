// Lesson 1.1: Introduction to Latin - Data File

const lessonData = {
    // Welcome Section
    welcome: {
        content: [
            "Welcome to your Latin adventure! You're about to learn a language that has shaped our world for over 2,000 years.",
            "You might be wondering: 'Why learn a dead language?' Well, here's a secret – Latin isn't dead at all! It's everywhere around us, hiding in plain sight.",
            "By the end of this course, you'll be able to read real Roman stories, understand where English words come from, and even speak the language of ancient Rome!"
        ]
    },

    // What is Latin
    whatIsLatin: {
        points: [
            {
                title: "The Language of Rome",
                content: "Latin was the language spoken by the ancient Romans. From a small city in Italy, it spread across Europe, Africa, and Asia as the Roman Empire grew."
            },
            {
                title: "Mother of Languages",
                content: "Latin is the parent of Italian, Spanish, French, Portuguese, and Romanian. These are called 'Romance languages' – not because they're romantic, but because they come from Rome!"
            },
            {
                title: "Still Alive Today",
                content: "While no one speaks Latin as their native language anymore, it's still used in science, medicine, law, and the Catholic Church. Every species of plant and animal has a Latin name!"
            }
        ]
    },

    // Timeline
    timeline: [
        {
            period: "753 BCE",
            title: "Rome Founded",
            description: "Legend says Rome was founded by Romulus and Remus, twin brothers raised by a wolf!"
        },
        {
            period: "100 BCE - 100 CE",
            title: "Golden Age",
            description: "Writers like Julius Caesar, Cicero, and Virgil wrote in Latin. This is the Latin we'll learn!"
        },
        {
            period: "476 CE",
            title: "Fall of Rome",
            description: "The Western Roman Empire ended, but Latin lived on in the Church and schools."
        },
        {
            period: "500-1500 CE",
            title: "Medieval Latin",
            description: "Latin was THE language of education, science, and international communication in Europe."
        },
        {
            period: "Today",
            title: "Modern Latin",
            description: "Latin is studied by millions of students worldwide and still used in many fields!"
        }
    ],

    // Why Learn Latin
    whyLearnLatin: [
        {
            icon: "🧠",
            title: "Boost Your English",
            content: "60% of English words come from Latin! Learning Latin will supercharge your vocabulary."
        },
        {
            icon: "📚",
            title: "Ace Your Exams",
            content: "Students who study Latin score higher on verbal tests and pick up other languages faster."
        },
        {
            icon: "🏛️",
            title: "Time Travel",
            content: "Read the actual words of Julius Caesar, discover Roman graffiti from Pompeii, and explore ancient stories."
        },
        {
            icon: "💡",
            title: "Think Like a Detective",
            content: "Latin is like a puzzle – you'll develop logical thinking and problem-solving skills."
        },
        {
            icon: "🌍",
            title: "Understand Your World",
            content: "From Harry Potter spells to scientific names, Latin helps you decode the world around you."
        },
        {
            icon: "🎓",
            title: "Stand Out",
            content: "Latin looks impressive on university applications and opens doors to careers in law, medicine, and more."
        }
    ],

    // Latin Around Us (interactive)
    latinExamples: [
        {
            english: "video games",
            latin: "video = 'I see' in Latin",
            explanation: "Every time you play a video game, you're using Latin!"
        },
        {
            english: "campus",
            latin: "campus = 'field' in Latin",
            explanation: "Romans used this word for any flat field. Now it means school grounds!"
        },
        {
            english: "et cetera (etc.)",
            latin: "et cetera = 'and the rest'",
            explanation: "We use this Latin phrase all the time when making lists!"
        },
        {
            english: "versus (vs.)",
            latin: "versus = 'turned against'",
            explanation: "Used in every sports match and competition!"
        },
        {
            english: "alias",
            latin: "alias = 'otherwise'",
            explanation: "A different name someone uses – spies and superheroes love this Latin word!"
        },
        {
            english: "vice versa",
            latin: "vice versa = 'the position turned'",
            explanation: "When something works both ways, we use this Latin phrase!"
        }
    ],

    // Fun Facts
    funFacts: [
        {
            emoji: "🏟️",
            fact: "The Colosseum in Rome could hold 50,000 spectators – about the same as a modern football stadium!"
        },
        {
            emoji: "📝",
            fact: "Romans wrote curse tablets called 'defixiones' – basically ancient hate mail to their enemies!"
        },
        {
            emoji: "🍕",
            fact: "Romans loved fast food! They had ancient versions of takeaway shops called 'thermopolia'."
        },
        {
            emoji: "👑",
            fact: "Julius Caesar was kidnapped by pirates as a young man. He joked with them, then came back and had them all executed!"
        },
        {
            emoji: "🐺",
            fact: "The Romans believed they were descended from Mars, the god of war, through Romulus and Remus."
        },
        {
            emoji: "📖",
            fact: "Some Roman books were 30 meters long! They were written on scrolls you had to unroll as you read."
        }
    ],

    // Journey Content
    journey: {
        content: [
            "Over the next few weeks, you'll learn to read and write Latin just like a Roman student would have 2,000 years ago.",
            "We'll start with simple words and sentences, then build up to reading real Roman stories about gladiators, emperors, and everyday life.",
            "Don't worry about making mistakes – even Romans made spelling errors! Archaeologists have found plenty of ancient typos.",
            "Get ready to discover a world of mythology, history, and adventure. Roma aeterna est – Rome is eternal!"
        ]
    },

    // First Words
    firstWords: [
        {
            latin: "salve",
            pronunciation: "SAL-way",
            meaning: "hello (to one person)"
        },
        {
            latin: "vale",
            pronunciation: "WAH-lay",
            meaning: "goodbye (to one person)"
        },
        {
            latin: "gratias",
            pronunciation: "GRAH-tee-as",
            meaning: "thanks"
        },
        {
            latin: "ita",
            pronunciation: "EE-tah",
            meaning: "yes"
        },
        {
            latin: "minime",
            pronunciation: "MIN-ih-may",
            meaning: "no"
        },
        {
            latin: "quid est?",
            pronunciation: "kwid est",
            meaning: "what is it?"
        }
    ],

    // Study Checklist
    checklist: [
        "Read about what Latin is",
        "Explore the timeline",
        "Discover why we learn Latin",
        "Find Latin words around you",
        "Learn your first 6 Latin words",
        "Practice saying 'salve' (hello)!"
    ],

    // Quick Facts
    quickFacts: {
        facts: [
            "🌍 Latin was spoken across 3 continents",
            "📚 Latin has only 5 vowels: a, e, i, o, u",
            "🎭 Romans spoke Latin for over 1,000 years",
            "✍️ Latin has no articles (the/a/an)",
            "🔤 The Latin alphabet has no J, U, or W",
            "📖 Latin word order is flexible"
        ]
    }
};

// Function to load all data into the HTML
function loadLessonData() {
    // Load Welcome Content
    const welcomeContent = document.getElementById('welcome-content');
    if (welcomeContent) {
        welcomeContent.innerHTML = lessonData.welcome.content.map(para => 
            `<p>${para}</p>`
        ).join('');
    }

    // Load What is Latin
    const whatIsLatin = document.getElementById('what-is-latin');
    if (whatIsLatin) {
        whatIsLatin.innerHTML = lessonData.whatIsLatin.points.map(point => `
            <div class="info-card">
                <h4>${point.title}</h4>
                <p>${point.content}</p>
            </div>
        `).join('');
    }

    // Load Timeline
    const timeline = document.getElementById('timeline');
    if (timeline) {
        timeline.innerHTML = lessonData.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="timeline-period">${item.period}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-description">${item.description}</div>
                </div>
            </div>
        `).join('');
    }

    // Load Why Learn Latin
    const reasonsGrid = document.getElementById('reasons-grid');
    if (reasonsGrid) {
        reasonsGrid.innerHTML = lessonData.whyLearnLatin.map(reason => `
            <div class="reason-card">
                <div class="reason-icon">${reason.icon}</div>
                <h4>${reason.title}</h4>
                <p>${reason.content}</p>
            </div>
        `).join('');
    }

    // Load Latin Examples (interactive)
    const latinExamples = document.getElementById('latin-examples');
    if (latinExamples) {
        latinExamples.innerHTML = lessonData.latinExamples.map((example, index) => `
            <div class="example-card" onclick="revealLatinOrigin(${index})">
                <div class="example-english">${example.english}</div>
                <div class="example-reveal" id="reveal-${index}" style="display: none;">
                    <div class="example-latin">${example.latin}</div>
                    <div class="example-explanation">${example.explanation}</div>
                </div>
                <div class="example-hint" id="hint-${index}">Click to reveal</div>
            </div>
        `).join('');
    }

    // Load Fun Facts
    const factsGrid = document.getElementById('facts-grid');
    if (factsGrid) {
        factsGrid.innerHTML = lessonData.funFacts.map(item => `
            <div class="fact-card">
                <div class="fact-emoji">${item.emoji}</div>
                <p>${item.fact}</p>
            </div>
        `).join('');
    }

    // Load Journey Content
    const journeyContent = document.getElementById('journey-content');
    if (journeyContent) {
        journeyContent.innerHTML = lessonData.journey.content.map(para => 
            `<p>${para}</p>`
        ).join('');
    }

    // Load First Words
    const firstWords = document.getElementById('first-words');
    if (firstWords) {
        firstWords.innerHTML = lessonData.firstWords.map(word => `
            <div class="word-card">
                <div class="word-latin">${word.latin}</div>
                <div class="word-pronunciation">${word.pronunciation}</div>
                <div class="word-meaning">${word.meaning}</div>
            </div>
        `).join('');
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

    // Load Quick Facts
    const quickFacts = document.getElementById('quick-facts-content');
    if (quickFacts) {
        quickFacts.innerHTML = lessonData.quickFacts.facts.map(fact => 
            `<p style="margin: 0.5rem 0;">${fact}</p>`
        ).join('');
    }
}

// Function to reveal Latin origin
function revealLatinOrigin(index) {
    const reveal = document.getElementById(`reveal-${index}`);
    const hint = document.getElementById(`hint-${index}`);
    
    if (reveal.style.display === 'none') {
        reveal.style.display = 'block';
        hint.style.display = 'none';
    } else {
        reveal.style.display = 'none';
        hint.style.display = 'block';
    }
}
