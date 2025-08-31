// Lesson 1.1: Introduction to Ancient Greek - Data

const lessonData = {
    // Welcome content
    welcome: `
        <p>Welcome to your journey into Ancient Greek! You're about to learn one of the most influential languages in human history.</p>
        <p>Greek is the language of Homer's epic poems, Plato's philosophy, the New Testament, and countless scientific and mathematical discoveries. It's a language that has shaped how we think, speak, and understand the world today.</p>
        <p>In this course, you'll learn to read and understand Ancient Greek, starting with the alphabet and building up to reading real ancient texts. Let's begin this exciting adventure!</p>
    `,

    // What is Greek content
    whatIsGreek: `
        <p><strong>Ancient Greek</strong> was the language spoken and written in Greece from around 1500 BCE to 600 CE. It's actually a family of related dialects, including:</p>
        <ul>
            <li><strong>Homeric Greek</strong> - the language of the Iliad and Odyssey</li>
            <li><strong>Attic Greek</strong> - spoken in Athens, the dialect of most classical literature</li>
            <li><strong>Koine Greek</strong> - the common language of the Hellenistic world and the New Testament</li>
            <li><strong>Ionic, Doric, and Aeolic</strong> - other regional dialects</li>
        </ul>
        <p>We'll focus primarily on Attic Greek, the dialect of classical Athens during its golden age (5th-4th centuries BCE).</p>
    `,

    // Timeline data
    timeline: [
        {
            period: "1500-1100 BCE",
            title: "Mycenaean Period",
            description: "Earliest form of Greek written in Linear B script"
        },
        {
            period: "800-500 BCE",
            title: "Archaic Period",
            description: "Homer composes the Iliad and Odyssey; Greek alphabet developed"
        },
        {
            period: "500-323 BCE",
            title: "Classical Period",
            description: "Golden Age of Athens; works of Plato, Sophocles, Herodotus"
        },
        {
            period: "323-31 BCE",
            title: "Hellenistic Period",
            description: "Greek becomes international language; Koine Greek develops"
        },
        {
            period: "31 BCE-600 CE",
            title: "Roman & Byzantine",
            description: "Greek remains language of learning; New Testament written"
        },
        {
            period: "Today",
            title: "Modern Legacy",
            description: "Modern Greek spoken by 13 million; Ancient Greek still studied worldwide"
        }
    ],

    // Why learn Greek
    reasons: [
        {
            icon: "📚",
            title: "Read Original Texts",
            description: "Access Homer, Plato, Aristotle, and the New Testament in their original language"
        },
        {
            icon: "🧠",
            title: "Understand Our Language",
            description: "Over 150,000 English words come from Greek, especially in science and medicine"
        },
        {
            icon: "🎭",
            title: "Drama & Literature",
            description: "Experience Greek tragedies and comedies as they were meant to be understood"
        },
        {
            icon: "🏛️",
            title: "Philosophy & Democracy",
            description: "Explore the birthplace of Western philosophy and democratic ideals"
        },
        {
            icon: "🔬",
            title: "Scientific Terminology",
            description: "Nearly all scientific terms use Greek roots - biology, physics, psychology"
        },
        {
            icon: "💭",
            title: "Critical Thinking",
            description: "Greek's complex grammar enhances analytical and logical thinking skills"
        }
    ],

    // Greek examples in English
    examples: [
        {
            english: "Democracy",
            greek: "δημοκρατία",
            explanation: "From δῆμος (demos - people) + κράτος (kratos - power/rule)"
        },
        {
            english: "Philosophy",
            greek: "φιλοσοφία",
            explanation: "From φίλος (philos - love) + σοφία (sophia - wisdom)"
        },
        {
            english: "Telephone",
            greek: "τῆλε + φωνή",
            explanation: "From τῆλε (tele - far) + φωνή (phone - voice)"
        },
        {
            english: "Dinosaur",
            greek: "δεινός + σαῦρος",
            explanation: "From δεινός (deinos - terrible) + σαῦρος (sauros - lizard)"
        },
        {
            english: "Astronomy",
            greek: "ἀστρονομία",
            explanation: "From ἄστρον (astron - star) + νόμος (nomos - law)"
        },
        {
            english: "Pandemic",
            greek: "πανδημία",
            explanation: "From πᾶν (pan - all) + δῆμος (demos - people)"
        }
    ],

    // Fun facts
    facts: [
        {
            emoji: "🔤",
            fact: "The word 'alphabet' comes from the first two Greek letters: alpha (Α) and beta (Β)"
        },
        {
            emoji: "🎓",
            fact: "Most UK universities' mottos are in Latin or Greek - Oxford's is in Latin, Cambridge's has Greek!"
        },
        {
            emoji: "🏃",
            fact: "The word 'marathon' comes from the Greek town Μαραθών, site of a famous battle"
        },
        {
            emoji: "🌊",
            fact: "The Greeks had different words for different types of love - including φιλία (friendship) and ἀγάπη (unconditional love)"
        },
        {
            emoji: "📖",
            fact: "The Iliad and Odyssey, among the oldest works of Western literature, contain over 27,000 lines of Greek poetry"
        },
        {
            emoji: "🗣️",
            fact: "Ancient Greek is a 'pitch accent' language - the pitch of your voice changed word meanings!"
        }
    ],

    // Journey content
    journey: `
        <p>Over the coming lessons, you'll:</p>
        <ol>
            <li>Master the Greek alphabet and pronunciation</li>
            <li>Learn essential vocabulary and grammar</li>
            <li>Read simple Greek sentences and stories</li>
            <li>Explore Greek culture and history</li>
            <li>Build towards reading authentic ancient texts</li>
        </ol>
        <p>Don't worry if it seems challenging at first - every expert was once a beginner. The Greek alphabet might look unfamiliar now, but you'll be reading it confidently in just a few lessons!</p>
    `,

    // First words
    firstWords: [
        {
            greek: "χαῖρε",
            transliteration: "chaire",
            meaning: "hello/goodbye (singular)",
            literal: "rejoice!"
        },
        {
            greek: "ναί",
            transliteration: "nai",
            meaning: "yes",
            literal: "indeed"
        },
        {
            greek: "οὔ",
            transliteration: "ou",
            meaning: "no",
            literal: "not"
        },
        {
            greek: "καί",
            transliteration: "kai",
            meaning: "and",
            literal: "also, even"
        },
        {
            greek: "ὁ, ἡ, τό",
            transliteration: "ho, he, to",
            meaning: "the (m., f., n.)",
            literal: "the definite article"
        },
        {
            greek: "εἰμί",
            transliteration: "eimi",
            meaning: "I am",
            literal: "to be (1st person)"
        }
    ],

    // Study checklist
    checklist: [
        { id: 1, text: "Read the welcome message", checked: false },
        { id: 2, text: "Explore the timeline", checked: false },
        { id: 3, text: "Learn why Greek matters", checked: false },
        { id: 4, text: "Discover Greek in English", checked: false },
        { id: 5, text: "Memorise first words", checked: false },
        { id: 6, text: "Ready for the alphabet!", checked: false }
    ],

    // Quick facts
    quickFacts: `
        <p><strong>Language Family:</strong> Indo-European → Hellenic</p>
        <p><strong>Writing System:</strong> Greek alphabet (24 letters)</p>
        <p><strong>Direction:</strong> Left to right</p>
        <p><strong>First Written:</strong> ~1450 BCE (Linear B)</p>
        <p><strong>Alphabet Developed:</strong> ~800 BCE</p>
        <p><strong>Modern Speakers:</strong> 13 million (Modern Greek)</p>
    `
};

// Function to load all lesson data
function loadLessonData() {
    // Load welcome content
    const welcomeContent = document.getElementById('welcome-content');
    if (welcomeContent) {
        welcomeContent.innerHTML = lessonData.welcome;
    }

    // Load what is Greek
    const whatIsGreek = document.getElementById('what-is-greek');
    if (whatIsGreek) {
        whatIsGreek.innerHTML = lessonData.whatIsGreek;
    }

    // Load timeline
    const timeline = document.getElementById('timeline');
    if (timeline) {
        timeline.innerHTML = lessonData.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-period">${item.period}</div>
                <div class="timeline-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Load reasons
    const reasonsGrid = document.getElementById('reasons-grid');
    if (reasonsGrid) {
        reasonsGrid.innerHTML = lessonData.reasons.map(reason => `
            <div class="reason-card">
                <div class="reason-icon">${reason.icon}</div>
                <h4>${reason.title}</h4>
                <p>${reason.description}</p>
            </div>
        `).join('');
    }

    // Load Greek examples
    const greekExamples = document.getElementById('greek-examples');
    if (greekExamples) {
        greekExamples.innerHTML = lessonData.examples.map((example, index) => `
            <div class="example-card" onclick="flipCard(this)">
                <div class="card-front">
                    <div class="example-english">${example.english}</div>
                    <div class="example-prompt">Click to reveal Greek origin</div>
                </div>
                <div class="card-back">
                    <div class="example-greek">${example.greek}</div>
                    <div class="example-explanation">${example.explanation}</div>
                </div>
            </div>
        `).join('');
    }

    // Load fun facts
    const factsGrid = document.getElementById('facts-grid');
    if (factsGrid) {
        factsGrid.innerHTML = lessonData.facts.map(fact => `
            <div class="fact-card">
                <div class="fact-emoji">${fact.emoji}</div>
                <p>${fact.fact}</p>
            </div>
        `).join('');
    }

    // Load journey content
    const journeyContent = document.getElementById('journey-content');
    if (journeyContent) {
        journeyContent.innerHTML = lessonData.journey;
    }

    // Load first words
    const firstWords = document.getElementById('first-words');
    if (firstWords) {
        firstWords.innerHTML = lessonData.firstWords.map(word => `
            <div class="word-card">
                <div class="greek-word">${word.greek}</div>
                <div class="transliteration">${word.transliteration}</div>
                <div class="word-meaning">${word.meaning}</div>
                <div class="word-literal">"${word.literal}"</div>
            </div>
        `).join('');
    }

    // Load checklist
    const studyChecklist = document.getElementById('study-checklist');
    if (studyChecklist) {
        studyChecklist.innerHTML = lessonData.checklist.map((item, index) => `
            <div class="checklist-row">
                <div class="checklist-item">
                    <input type="checkbox" id="check-${item.id}" ${item.checked ? 'checked' : ''}>
                    <label for="check-${item.id}">${item.text}</label>
                </div>
            </div>
        `).join('');
    }

    // Load quick facts
    const quickFacts = document.getElementById('quick-facts-content');
    if (quickFacts) {
        quickFacts.innerHTML = lessonData.quickFacts;
    }
}

// Function to flip example cards
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Function to set current chapter
function setCurrentChapter(chapter) {
    window.currentChapter = chapter;
}
