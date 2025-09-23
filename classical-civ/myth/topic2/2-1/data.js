// Lesson 2.1: The Nature of Heroes - Data File

const lessonData = {
    // Learning Objectives
    learningObjectives: {
        intro: "By the end of this section, you will be able to:",
        objectives: [
            "Define what makes a hero in ancient mythology and how heroes differ from gods and mortals",
            "Explain the concept of kleos (glory) and its importance to heroic culture",
            "Understand divine parentage and the role of demigods in bridging mortal and divine realms",
            "Identify the characteristics that made heroes essential to ancient religion and culture",
            "Explain the process of apotheosis and its significance for exceptional heroes",
            "Analyze why heroes like Heracles achieved panhellenic status in the ancient world"
        ]
    },

    // Hierarchy Data
    hierarchy: [
        {
            id: 'gods',
            title: 'Immortal Gods',
            icon: '⚡',
            level: 'gods',
            description: 'Eternal, powerful, dwelling on Olympus or in their domains',
            examples: 'Zeus, Hera, Poseidon, Athena',
            characteristics: [
                'Immortal and eternal existence',
                'Supernatural powers over natural forces',
                'Perfect forms (usually) and ideal beauty',
                'Live on Mount Olympus or in their specific domains',
                'Can intervene in mortal affairs but remain fundamentally separate',
                'Worshipped through sacrifice and ritual'
            ],
            primarySource: {
                text: "The gods live easily and without cares, but mortals have many sufferings.",
                citation: "Homer, Iliad 24.525"
            }
        },
        {
            id: 'heroes',
            title: 'Heroes',
            icon: '⚔️',
            level: 'heroes',
            description: 'Exceptional mortals, often (but not always) of divine parentage, capable of great deeds',
            examples: 'Heracles (demigod), Odysseus (mortal), Achilles (demigod), Theseus',
            characteristics: [
                'Exceptional abilities beyond ordinary mortals',
                'Often (but not always) have divine parentage',
                'Mortal lifespan but capable of achieving immortal fame',
                'Bridge the gap between divine and mortal worlds',
                'Central to local and panhellenic religious practice',
                'Can achieve apotheosis (transformation into gods)'
            ],
            primarySource: {
                text: "The race of heroes, that godlike race of men who lived before our own upon the boundless earth.",
                citation: "Hesiod, Works and Days 156-158"
            }
        },
        {
            id: 'mortals',
            title: 'Ordinary Mortals',
            icon: '👥',
            level: 'mortals',
            description: 'Regular humans, limited lifespan, subject to fate',
            examples: 'Kings, warriors, citizens, slaves',
            characteristics: [
                'Limited lifespan and subject to death',
                'Vulnerable to disease, aging, and misfortune',
                'Dependent on gods for protection and success',
                'Can achieve limited fame through exceptional deeds',
                'Form communities and civilizations',
                'Seek to honor gods and heroes for divine favor'
            ],
            primarySource: {
                text: "We are all mortal and must expect to die; there is no man living who is immortal.",
                citation: "Sophocles, Ajax 473-474"
            }
        }
    ],

    // Hero Characteristics
    characteristics: [
        {
            id: 'divine-parentage',
            title: 'Divine Parentage',
            icon: '⭐',
            description: 'Most heroes were demigods - offspring of a god and mortal',
            details: 'Divine parentage granted heroes supernatural abilities whilst keeping them fundamentally mortal and relatable to humans. Heracles (Zeus & Alcmene), Achilles (Thetis & Peleus), Perseus (Zeus & Danaë).',
            examples: ['Heracles - son of Zeus and Alcmene', 'Achilles - son of Thetis and Peleus', 'Perseus - son of Zeus and Danaë']
        },
        {
            id: 'exceptional-abilities',
            title: 'Exceptional Abilities',
            icon: '💪',
            description: 'Strength, courage, or skills far beyond ordinary mortals',
            details: 'Heroes possessed abilities that set them apart from normal humans. These could be physical (Heracles\'s strength), intellectual (Odysseus\'s cunning), or moral (exceptional courage).',
            examples: ['Heracles - supernatural strength', 'Odysseus - exceptional cunning', 'Achilles - unmatched in battle']
        },
        {
            id: 'kleos',
            title: 'Kleos (Glory)',
            icon: '🏆',
            description: 'Undying fame achieved through great deeds',
            details: 'Kleos was immortal glory earned through heroic actions. Unlike mortals who fade from memory, heroes achieved lasting fame that granted them a form of immortality.',
            examples: ['Achilles chose short life with eternal glory', 'Heracles achieved kleos through his labours', 'Odysseus earned fame through his journey']
        },
        {
            id: 'suffering',
            title: 'Noble Suffering',
            icon: '⚖️',
            description: 'Endurance of great trials and hardships',
            details: 'Heroes distinguished themselves through how they faced suffering. Their nobility was shown not in avoiding hardship, but in bearing it with courage and honor.',
            examples: ['Heracles endured persecution by Hera', 'Odysseus suffered through 10-year journey', 'Achilles accepted early death for glory']
        },
        {
            id: 'religious-role',
            title: 'Religious Significance',
            icon: '🏛️',
            description: 'Central to local cults and religious practice',
            details: 'Heroes became objects of worship after death, with shrines, festivals, and rituals dedicated to them. They acted as intermediaries between mortals and gods.',
            examples: ['Local hero cults throughout Greece', 'Annual festivals honoring heroes', 'Shrines at supposed tomb sites']
        },
        {
            id: 'moral-complexity',
            title: 'Moral Complexity',
            icon: '🤔',
            description: 'Neither purely good nor evil, but deeply human',
            details: 'Heroes were not perfect moral exemplars but complex characters with flaws. This made them more relatable and their achievements more meaningful.',
            examples: ['Heracles had fits of rage', 'Achilles was driven by pride', 'Odysseus could be ruthless']
        }
    ],

    // Definitions for interactive terms
    definitions: {
        'heros': {
            term: 'Heros (ἥρως)',
            definition: 'The Greek word for hero, referring to exceptional mortals who achieved divine honor through great deeds.',
            context: 'This wasn\'t just someone brave - it was a specific religious category of being more than mortal but less than divine, worshipped at shrines and festivals.'
        },
        'demigod': {
            term: 'Demigod',
            definition: 'The offspring of a god and a mortal, possessing supernatural abilities while remaining fundamentally mortal.',
            context: 'Demigods like Heracles bridged the gap between human and divine, making the gods more accessible while showing mortals what they might achieve.'
        },
        'kleos': {
            term: 'Kleos (κλέος)',
            definition: 'Undying fame or glory achieved through exceptional deeds, granting heroes a form of immortality through memory.',
            context: 'Kleos was more valuable than life itself to heroes. Achilles chose a short life with eternal glory over a long, forgotten existence.'
        },
        'apotheosis': {
            term: 'Apotheosis',
            definition: 'The elevation of a mortal to divine status, the ultimate achievement for exceptional heroes.',
            context: 'Only the greatest heroes like Heracles achieved full godhood. This transformation proved that exceptional virtue could overcome even mortality.'
        },
        'panhellenic': {
            term: 'Panhellenic',
            definition: 'Relating to all Greeks; heroes with panhellenic status were worshipped throughout the Greek world.',
            context: 'While most heroes were local, figures like Heracles achieved universal Greek recognition, making them truly national figures.'
        },
        'hero-cult': {
            term: 'Hero Cult',
            definition: 'Religious worship of deceased heroes at their supposed burial sites, involving sacrifices and festivals.',
            context: 'Hero cults were distinct from god worship - they took place at tombs rather than temples and involved offerings to the dead rather than sky gods.'
        }
    },

    // Figures Data
    figures: {
        'heracles': {
            name: 'Heracles/Hercules',
            description: 'Son of Zeus and Alcmene, the greatest hero who achieved apotheosis.',
            context: 'Heracles represents the perfect heroic journey - from divine birth through trials to godhood. His Twelve Labours became the model for heroic achievement.'
        },
        'zeus': {
            name: 'Zeus',
            description: 'King of the gods and father of many heroes including Heracles.',
            context: 'Zeus\'s affairs with mortal women produced most of the great heroes, making him central to the heroic tradition.'
        },
        'alcmene': {
            name: 'Alcmene',
            description: 'Mortal woman of Thebes, mother of Heracles by Zeus.',
            context: 'Alcmene represents the mortal mothers of heroes - extraordinary women chosen by gods but remaining fundamentally human.'
        },
        'achilles': {
            name: 'Achilles',
            description: 'Greatest warrior of the Trojan War, son of Thetis and Peleus.',
            context: 'Achilles embodies the heroic choice between long life and eternal glory, choosing kleos over survival.'
        },
        'odysseus': {
            name: 'Odysseus',
            description: 'Hero of the Odyssey, famous for cunning and endurance rather than strength.',
            context: 'Odysseus shows that heroism comes in many forms - intellectual cunning and moral endurance could equal physical prowess.'
        },
        'hebe': {
            name: 'Hebe',
            description: 'Goddess of youth, wife of Heracles after his apotheosis.',
            context: 'Hebe\'s marriage to Heracles symbolized his complete transformation from mortal hero to immortal god.'
        }
    },

    // Places Data
    places: {
        'olympus': {
            name: 'Mount Olympus',
            description: 'Home of the gods and final destination for heroes who achieved apotheosis.',
            context: 'Olympus represented the ultimate goal for heroes - a place where mortal achievements could be rewarded with immortal status.'
        }
    },

    // Primary Sources
    primarySources: [
        {
            text: "The race of heroes, that godlike race of men who lived before our own upon the boundless earth... Some of them were destroyed by evil war and dread battle... but to the others father Zeus granted a life and dwelling place apart from men.",
            citation: "Hesiod, Works and Days 156-173"
        },
        {
            text: "Heracles has gone to the starry home of his father Zeus and of the other immortals, having completed his labours.",
            citation: "Pindar, Nemean 1.69-72"
        },
        {
            text: "The gods live easily and without cares, but mortals have many sufferings.",
            citation: "Homer, Iliad 24.525"
        }
    ]
};

// Function to load lesson data into HTML
function loadLessonData() {
    // Load learning objectives
    loadLearningObjectives();
    
    // Load hierarchy section
    loadHierarchySection();
    
    // Load characteristics section
    loadCharacteristicsSection();
    
    // Load content sections
    loadContentSections();
}

// Load Learning Objectives
function loadLearningObjectives() {
    const container = document.getElementById('learning-objectives');
    if (container) {
        let html = `<p>${lessonData.learningObjectives.intro}</p><ul>`;
        lessonData.learningObjectives.objectives.forEach(obj => {
            html += `<li>${obj}</li>`;
        });
        html += '</ul>';
        container.innerHTML = html;
    }
}

// Load Hierarchy Section
function loadHierarchySection() {
    const container = document.getElementById('hierarchy-levels');
    if (container) {
        container.innerHTML = lessonData.hierarchy.map(level => `
            <div class="hierarchy-level ${level.level}" onclick="showHierarchyDetails('${level.id}')">
                <span class="level-icon">${level.icon}</span>
                <div class="level-title">${level.title}</div>
                <div class="level-description">${level.description}</div>
                <div class="level-examples">Examples: ${level.examples}</div>
            </div>
        `).join('');
    }
}

// Load Characteristics Section  
function loadCharacteristicsSection() {
    const container = document.getElementById('characteristics-grid');
    if (container) {
        container.innerHTML = lessonData.characteristics.map(char => `
            <div class="characteristic-card" onclick="showCharacteristicDetails('${char.id}')">
                <div class="characteristic-icon">${char.icon}</div>
                <h4>${char.title}</h4>
                <p>${char.description}</p>
            </div>
        `).join('');
    }
}

// Load Content Sections
function loadContentSections() {
    // Load divine parentage content
    const parentageContainer = document.getElementById('divine-parentage-content');
    if (parentageContainer) {
        parentageContainer.innerHTML = `
            <p>Most heroes were <span class="key-term" onclick="showDefinition('demigod')">demigods</span> - the offspring of a god and a mortal. <span class="key-figure" onclick="showFigureInfo('heracles')">Heracles</span> was the son of <span class="key-figure" onclick="showFigureInfo('zeus')">Zeus</span> and the mortal woman <span class="key-figure" onclick="showFigureInfo('alcmene')">Alcmene</span>. This divine parentage granted heroes supernatural abilities whilst keeping them fundamentally mortal and thus relatable to ordinary humans.</p>
        `;
    }
    
    // Load kleos content
    const kleosContainer = document.getElementById('kleos-content');
    if (kleosContainer) {
        kleosContainer.innerHTML = `
            <p><span class="key-term" onclick="showDefinition('kleos')">Kleos</span> (κλέος) was the undying fame that heroes achieved through exceptional deeds. Unlike ordinary mortals whose names fade from memory, heroes gained a form of immortality through their legendary status.</p>
            
            <h4>The Choice of Achilles</h4>
            <p><span class="key-figure" onclick="showFigureInfo('achilles')">Achilles</span> faced the ultimate heroic choice: a long, peaceful life in obscurity or a short life with eternal glory. He chose kleos over longevity, demonstrating what mattered most to heroes.</p>
        `;
    }
    
    // Load apotheosis content
    const apotheosisContainer = document.getElementById('apotheosis-content');
    if (apotheosisContainer) {
        apotheosisContainer.innerHTML = `
            <p>The ultimate achievement for a hero was <span class="key-term" onclick="showDefinition('apotheosis')">apotheosis</span> - transformation into a god. This rare honour was granted to only the greatest heroes, marking their complete transcendence of mortality.</p>

            <h4>Examples of Deified Heroes</h4>
            <ul>
                <li><strong>Heracles/Hercules:</strong> Burned away his mortal parts on a pyre, ascended to Olympus</li>
                <li><strong>Asclepius:</strong> God of medicine, originally a mortal healer</li>
                <li><strong>The Dioscuri:</strong> Castor and Pollux, became constellation Gemini</li>
                <li><strong>Romulus:</strong> Rome's founder, became the god Quirinus</li>
            </ul>

            <p><span class="key-figure" onclick="showFigureInfo('heracles')">Heracles</span> represents the perfect example of apotheosis. After completing his labours and suffering a painful death, he was welcomed to <span class="key-place" onclick="showPlaceInfo('olympus')">Olympus</span>, married the goddess <span class="key-figure" onclick="showFigureInfo('hebe')">Hebe</span>, and became the god of strength and heroism.</p>
        `;
    }
}

// Interactive Functions
function showHierarchyDetails(levelId) {
    const level = lessonData.hierarchy.find(h => h.id === levelId);
    const detailsDiv = document.getElementById('hierarchy-details');
    
    if (level && detailsDiv) {
        // Update active state
        document.querySelectorAll('.hierarchy-level').forEach(l => l.classList.remove('active'));
        event.currentTarget.classList.add('active');
        
        detailsDiv.innerHTML = `
            <h4>${level.title}</h4>
            <p><strong>Characteristics:</strong></p>
            <ul>
                ${level.characteristics.map(char => `<li>${char}</li>`).join('')}
            </ul>
            <div class="primary-source">
                "${level.primarySource.text}"
                <div class="source-citation">— ${level.primarySource.citation}</div>
            </div>
        `;
        detailsDiv.style.display = 'block';
    }
}

function showCharacteristicDetails(charId) {
    const char = lessonData.characteristics.find(c => c.id === charId);
    const detailsDiv = document.getElementById('characteristic-details');
    
    if (char && detailsDiv) {
        // Update active state
        document.querySelectorAll('.characteristic-card').forEach(c => c.classList.remove('active'));
        event.currentTarget.classList.add('active');
        
        detailsDiv.innerHTML = `
            <h4>${char.icon} ${char.title}</h4>
            <p>${char.details}</p>
            <h5>Examples:</h5>
            <ul>
                ${char.examples.map(ex => `<li>${ex}</li>`).join('')}
            </ul>
        `;
        detailsDiv.style.display = 'block';
    }
}

function showDefinition(termId) {
    const def = lessonData.definitions[termId];
    if (def) {
        showInfoPanel('Key Term', `
            <h4>${def.term}</h4>
            <p><strong>Definition:</strong> ${def.definition}</p>
            <p><strong>Context:</strong> ${def.context}</p>
        `);
    }
}

function showFigureInfo(figureId) {
    const figure = lessonData.figures[figureId];
    if (figure) {
        showInfoPanel('Key Figure', `
            <h4>${figure.name}</h4>
            <p><strong>Description:</strong> ${figure.description}</p>
            <p><strong>Significance:</strong> ${figure.context}</p>
        `);
    }
}

function showPlaceInfo(placeId) {
    const place = lessonData.places[placeId];
    if (place) {
        showInfoPanel('Key Place', `
            <h4>${place.name}</h4>
            <p><strong>Description:</strong> ${place.description}</p>
            <p><strong>Significance:</strong> ${place.context}</p>
        `);
    }
}

function showInfoPanel(title, content) {
    const infoContent = document.getElementById('info-content');
    if (infoContent) {
        infoContent.innerHTML = `
            <h4 style="color: #dc3545; margin-bottom: 0.5rem;">${title}</h4>
            ${content}
        `;
    }
}

// Navigation function
function navigateToLesson(path) {
    window.location.href = path + '.html';
}
