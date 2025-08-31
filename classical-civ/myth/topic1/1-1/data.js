// Lesson 1.1: Introduction to Ancient Religion - Data File

const lessonData = {
    // Learning Objectives
    learningObjectives: {
        intro: "By the end of this section, you will understand:",
        objectives: [
            "The fundamental differences between ancient polytheistic religion and modern monotheism",
            "The key terminology used to describe religious practices",
            "The transactional nature of the relationship between mortals and immortals",
            "The anthropomorphic nature of ancient gods and their human characteristics",
            "How ancient religion was communal rather than personal",
            "Why ritual action mattered more than belief or faith"
        ]
    },

    // Comparison Data
    comparisonData: {
        polytheism: {
            title: "Ancient Polytheism",
            features: [
                "Many gods with specific domains",
                "Transactional worship (do ut des)",
                "Communal rather than personal",
                "Focus on ritual action",
                "Gods are anthropomorphic",
                "No concept of sin or salvation"
            ],
            details: {
                title: "The Polytheistic Worldview",
                content: `Ancient Greeks and Romans lived in a world populated by hundreds of gods, each with specific powers and responsibilities. 
                This system offered flexibility - if one god didn't answer your prayers, you could try another. 
                It also explained the complexity and contradictions of life through the competing interests of different deities.`,
                keyPoints: [
                    "Specialisation: Each god had a specific domain (sea, war, love, etc.)",
                    "Hierarchy: Zeus/Jupiter ruled as king, but all gods had independent power",
                    "Local variations: Different cities might worship the same god differently",
                    "Syncretism: New gods could be absorbed from conquered peoples"
                ]
            }
        },
        monotheism: {
            title: "Modern Monotheism",
            features: [
                "One omnipotent God",
                "Worship based on faith and love",
                "Personal relationship with God",
                "Focus on belief and morality",
                "God as transcendent being",
                "Concepts of sin and redemption"
            ],
            details: {
                title: "The Monotheistic Revolution",
                content: `Modern monotheistic religions (Christianity, Islam, Judaism) represent a fundamental shift in religious thinking. 
                One omnipotent, omniscient God replaces the diverse pantheon. 
                This creates a unified moral system and a personal relationship between the individual and the divine.`,
                keyPoints: [
                    "Universal morality: One God means one set of moral laws",
                    "Personal salvation: Individual relationship with God matters",
                    "Sacred texts: Written scripture provides authoritative guidance",
                    "Exclusive worship: Other gods are false or demons"
                ]
            }
        }
    },

    // Transaction Steps
    transactionSteps: [
        {
            id: 'offering',
            title: '1. Offering',
            subtitle: 'Sacrifices, votive gifts, festivals',
            details: 'The worshipper provides something valuable - animal sacrifice (especially oxen for major requests), libations of wine, votive offerings, or funding for temples and festivals. The value of the offering often reflected the importance of the request.'
        },
        {
            id: 'prayer',
            title: '2. Prayer',
            subtitle: 'Specific request to appropriate deity',
            details: 'Prayers were formulaic and specific. The worshipper would invoke the god by name and epithets, remind them of past offerings, state the current offering, and make a clear request. Vague prayers were unlikely to be answered.'
        },
        {
            id: 'favour',
            title: '3. Divine Favour',
            subtitle: 'Gods grant request (or not)',
            details: 'Gods might grant the request, ignore it, or even punish presumption. Success reinforced the relationship; failure might mean trying a different god, making a better offering, or accepting divine will. There was no guarantee of response.'
        }
    ],

    // Key Terms
    keyTerms: [
        {
            term: 'Hiera (ἱερά)',
            definition: 'Greek term meaning "holy affairs" - the closest equivalent to our word "religion". It encompassed all sacred activities including sacrifices, festivals, and temple worship.',
            id: 'hiera'
        },
        {
            term: 'Religio',
            definition: 'Roman term meaning "the correct worship of the state gods". It emphasised proper ritual performance rather than personal belief or faith.',
            id: 'religio'
        },
        {
            term: 'Epithets',
            definition: 'Descriptive phrases added to gods\' names to specify their particular aspect or power, such as Athena Nike (Victory) or Zeus Xenios (protector of guests).',
            id: 'epithets'
        },
        {
            term: 'Pantheon',
            definition: 'The collective term for all gods worshipped by a culture. The Greek and Roman pantheons included hundreds of deities, from major Olympians to minor local gods.',
            id: 'pantheon'
        }
    ],

    // Key Differences
    keyDifferences: [
        {
            id: 'sin',
            title: 'No Sin or Salvation',
            subtitle: 'Click to explore the ancient view of morality and afterlife',
            details: {
                title: 'No Concept of Sin or Salvation',
                content: `Ancient religion lacked the Christian concepts of original sin, redemption, or eternal salvation. 
                The afterlife was generally seen as a shadowy existence in Hades, not a reward or punishment for earthly behaviour.
                Good and bad alike went to the same grey underworld, though a few exceptional heroes might reach the Elysian Fields. 
                This wasn't based on moral behaviour but on exceptional deeds or divine favour.
                Without concepts of sin and salvation, ancient religion focused on maintaining good relationships with the gods for earthly benefits rather than securing a blessed afterlife.`
            }
        },
        {
            id: 'dogma',
            title: 'Religion Without Dogma',
            subtitle: 'Click to learn about flexibility in ancient belief',
            details: {
                title: 'Religion Without Dogma',
                content: `There was no central religious authority, no sacred book like the Bible, and no fixed set of beliefs that all worshippers had to accept. 
                Different cities had different traditions about the gods.
                Myths varied from place to place - Athens told different stories about Athena than other cities. 
                This flexibility allowed Greek and Roman religion to absorb new gods and practices as their civilisations expanded.
                Without orthodoxy (correct belief), the focus was on orthopraxy (correct practice). 
                What mattered was performing rituals properly, not believing specific doctrines about the nature of divinity.`
            }
        },
        {
            id: 'civic',
            title: 'Civic and Political Religion',
            subtitle: 'Click to understand religion\'s role in public life',
            details: {
                title: 'Civic and Political Dimension',
                content: `Religion was inseparable from civic life. Religious festivals were state occasions that reinforced social cohesion and political authority. 
                Magistrates performed sacrifices on behalf of the community.
                Military campaigns began with taking the auspices (reading divine will through bird signs). 
                Political meetings opened with prayers. Treaties were sworn before the gods.
                This integration of religion and state would have seemed natural to ancient peoples but alien to modern secular societies. 
                There was no concept of separation between church and state - they were one and the same.`
            }
        }
    ],

    // Study Checklist
    studyChecklist: [
        "Understand polytheism vs monotheism",
        "Learn key terms: hiera, religio, pantheon, epithets",
        "Grasp the concept of 'do ut des' transactions",
        "Understand anthropomorphism in ancient gods",
        "Know why ritual mattered more than belief",
        "Recognise communal vs personal worship",
        "Understand the absence of sin/salvation concepts",
        "Learn about civic religion's role"
    ],

    // Definitions for interactive terms
    definitions: {
        'polytheism': {
            term: 'Polytheism',
            definition: 'The worship of multiple gods, each with different powers and responsibilities.',
            context: 'Ancient polytheism offered flexibility and explained life\'s contradictions through divine conflicts.'
        },
        'hiera': {
            term: 'Hiera (ἱερά)',
            definition: 'Greek term meaning "holy affairs" or "sacred matters".',
            context: 'The absence of a direct equivalent to our word "religion" shows how differently the Greeks conceptualised their relationship with the divine.'
        },
        'religio': {
            term: 'Religio',
            definition: 'Latin term meaning "the correct worship of the state gods".',
            context: 'For Romans, religio was about performing rituals correctly to maintain the pax deorum (peace with the gods).'
        },
        'pantheon': {
            term: 'Pantheon',
            definition: 'The collective term for all gods worshipped by a culture.',
            context: 'The Greek and Roman pantheons included major Olympian gods, minor deities, personified concepts, and local spirits.'
        },
        'epithets': {
            term: 'Epithets',
            definition: 'Additional names or phrases that specify a particular aspect or power of a god.',
            context: 'Epithets were crucial for effective prayer. Zeus Xenios protected guests, while Zeus Horkios oversaw oaths.'
        },
        'do-ut-des': {
            term: 'Do Ut Des',
            definition: 'Latin phrase meaning "I give so that you might give".',
            context: 'This principle governed ancient worship. Religion was transactional - offerings and sacrifices were investments expecting divine returns.'
        },
        'anthropomorphism': {
            term: 'Anthropomorphism',
            definition: 'The attribution of human form, emotions, and behaviours to gods.',
            context: 'Made gods relatable and understandable to worshippers. Gods\' human flaws explained why prayers might go unanswered.'
        }
    },

    // Figure Information
    figures: {
        'zeus': {
            name: 'Zeus/Jupiter',
            role: 'King of the gods, ruler of the sky',
            significance: 'The most powerful Olympian, Zeus maintained order among gods and mortals. Despite his authority, he was notorious for his many affairs with mortal women.'
        },
        'poseidon': {
            name: 'Poseidon/Neptune',
            role: 'God of the sea, earthquakes, and horses',
            significance: 'Brother of Zeus, ruler of the oceans. Sailors and sea-traders depended on his favour for safe voyages.'
        },
        'demeter': {
            name: 'Demeter/Ceres',
            role: 'Goddess of agriculture and the harvest',
            significance: 'Essential for agricultural societies, Demeter controlled crop growth. Her grief over losing Persephone explained the seasons.'
        },
        'apollo': {
            name: 'Apollo/Apollo',
            role: 'God of music, poetry, prophecy, and the sun',
            significance: 'One of the most complex Olympians, Apollo represented both creative arts and rational thought. His oracle at Delphi was the most important prophetic shrine.'
        },
        'athena': {
            name: 'Athena/Minerva',
            role: 'Goddess of wisdom, warfare, and crafts',
            significance: 'Born from Zeus\'s head fully grown and armed. Patron of Athens, she represented strategic warfare and intelligence.'
        }
    },

    // Primary Sources
    primarySources: [
        {
            text: "The race of gods is one thing, the race of men quite another... yet we have some likeness to the immortals, in our minds or in our nature.",
            citation: "Pindar, Nemean Odes 6.1-4"
        },
        {
            text: "If you make a vow to a god, do not delay in fulfilling it, for the god has no pleasure in fools.",
            citation: "Traditional Roman religious maxim"
        },
        {
            text: "Homer and Hesiod have attributed to the gods all things that among men are shameful and blameworthy - theft and adultery and mutual deception.",
            citation: "Xenophanes, Fragment 11 (6th century BC critique)"
        }
    ]
};

// Function to load lesson data into HTML
function loadLessonData() {
    // Load learning objectives
    loadLearningObjectives();
    
    // Load comparison grid
    loadComparisonGrid();
    
    // Load transaction flow
    loadTransactionFlow();
    
    // Load terms grid
    loadTermsGrid();
    
    // Load differences grid
    loadDifferencesGrid();
    
    // Load study checklist
    loadStudyChecklist();
    
    // Load main content sections
    loadConceptsContent();
    loadPracticesContent();
    loadAnthropomorphismContent();
    loadSummaryContent();
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

// Load Comparison Grid
function loadComparisonGrid() {
    const container = document.getElementById('comparison-grid');
    if (container) {
        container.innerHTML = `
            <div class="comparison-card" onclick="showComparisonDetails('polytheism')">
                <h3 class="comparison-title">${lessonData.comparisonData.polytheism.title}</h3>
                <ul class="comparison-features">
                    ${lessonData.comparisonData.polytheism.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="comparison-card" onclick="showComparisonDetails('monotheism')">
                <h3 class="comparison-title">${lessonData.comparisonData.monotheism.title}</h3>
                <ul class="comparison-features">
                    ${lessonData.comparisonData.monotheism.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        `;
    }
}

// Load Transaction Flow
function loadTransactionFlow() {
    const container = document.getElementById('transaction-flow');
    if (container) {
        let html = '';
        lessonData.transactionSteps.forEach((step, index) => {
            if (index > 0) html += '<div class="arrow">→</div>';
            html += `
                <div class="transaction-step" onclick="showTransactionDetails('${step.id}')">
                    <h4>${step.title}</h4>
                    <p>${step.subtitle}</p>
                </div>
            `;
        });
        container.innerHTML = html;
    }
}

// Load Terms Grid
function loadTermsGrid() {
    const container = document.getElementById('terms-grid');
    if (container) {
        container.innerHTML = lessonData.keyTerms.map(term => `
            <div class="term-card">
                <h4>${term.term}</h4>
                <p>${term.definition}</p>
            </div>
        `).join('');
    }
}

// Load Differences Grid
function loadDifferencesGrid() {
    const container = document.getElementById('differences-grid');
    if (container) {
        container.innerHTML = lessonData.keyDifferences.map(diff => `
            <div class="difference-card" onclick="showDifferenceDetails('${diff.id}')">
                <div class="difference-title">${diff.title}</div>
                <div class="difference-subtitle">${diff.subtitle}</div>
            </div>
        `).join('');
    }
}

// Load Study Checklist
function loadStudyChecklist() {
    const container = document.getElementById('study-checklist');
    if (container) {
        container.innerHTML = lessonData.studyChecklist.map((item, index) => `
            <div class="checklist-row">
                <label class="checklist-item">
                    <input type="checkbox"> ${item}
                </label>
                <button class="do-now-btn" id="do-now-${index}" onclick="markAsDoingNow(${index})">Do now</button>
            </div>
        `).join('');
    }
}

// Load Concepts Content
function loadConceptsContent() {
    const container = document.getElementById('concepts-content');
    if (container) {
        container.innerHTML = `
            <p>Ancient Greek and Roman religion was fundamentally different from modern Christianity. The Greeks and Romans were 
            <span class="key-term" data-definition="polytheism">polytheistic</span>, meaning they worshipped multiple gods rather than a single deity. 
            Interestingly, the Greeks didn't actually have a word for 'religion' as we understand it. Instead, they used 
            <span class="key-term" data-definition="hiera">hiera</span> meaning "holy affairs" and the Romans used 
            <span class="key-term" data-definition="religio">religio</span> meaning "the correct worship of the state gods".</p>
            
            <h4>The Nature of the Gods</h4>
            <p>The most striking aspect of ancient gods was their <span class="key-concept" data-concept="anthropomorphism">anthropomorphic</span> nature. 
            Unlike the abstract, perfect deity of monotheistic religions, Greek and Roman gods looked and behaved like humans. 
            They experienced human emotions - jealousy, anger, lust, pride - and displayed human weaknesses.</p>
            
            <div class="primary-source">
                "${lessonData.primarySources[0].text}"
                <div class="source-citation">— ${lessonData.primarySources[0].citation}</div>
            </div>
            
            <p>The collective term for all the gods together was the <span class="key-term" data-definition="pantheon">pantheon</span>. 
            Each god had specific responsibilities - <span class="key-figure" data-info="poseidon">Poseidon</span> controlled the sea, 
            <span class="key-figure" data-info="demeter">Demeter</span> governed agriculture, 
            <span class="key-figure" data-info="apollo">Apollo</span> presided over music and prophecy.</p>
        `;
    }
}

// Load Practices Content
function loadPracticesContent() {
    const container = document.getElementById('practices-content');
    if (container) {
        container.innerHTML = `
            <h4>Communal vs Private Worship</h4>
            <p>Unlike modern Christianity with its emphasis on personal prayer and individual salvation, ancient religion was primarily communal. 
            Sacrifices and offerings were made at temples and shrines, and festivals involved the whole city. 
            There was no concept of regular weekly worship like Sunday church services.</p>
            
            <h4>The Importance of Ritual Action</h4>
            <p>Greek and Roman religion was not about faith or belief in the modern sense. What mattered was performing the correct rituals in the proper way. 
            The phrase <span class="key-term" data-definition="do-ut-des">do ut des</span> ("I give so that you might give") perfectly captures this transactional approach.</p>
            
            <div class="primary-source">
                "${lessonData.primarySources[1].text}"
                <div class="source-citation">— ${lessonData.primarySources[1].citation}</div>
            </div>
            
            <h4>Choosing the Right God</h4>
            <p>With hundreds of gods available, choosing the right deity for your needs was crucial. 
            This specificity extended to <span class="key-term" data-definition="epithets">epithets</span> - additional names that specified which aspect of a god you were invoking. 
            <span class="key-figure" data-info="zeus">Zeus</span> had dozens of epithets: Zeus Xenios protected guests and strangers, Zeus Horkios oversaw oaths.</p>
        `;
    }
}

// Load Anthropomorphism Content
function loadAnthropomorphismContent() {
    const container = document.getElementById('anthropomorphism-content');
    if (container) {
        container.innerHTML = `
            <p>Perhaps the most distinctive feature of Greek and Roman gods was their anthropomorphic nature. 
            Unlike the transcendent, perfect God of Christianity, ancient deities had human forms, human emotions, and human flaws.</p>
            
            <h4>Divine Behaviour and Morality</h4>
            <p>The gods' behaviour often scandalised later Christian writers. 
            <span class="key-figure" data-info="zeus">Zeus/Jupiter</span> was a serial adulterer. 
            <span class="key-figure" data-info="apollo">Apollo</span> could be vindictive when his pride was wounded.</p>
            
            <p>This apparent immorality served several purposes:</p>
            <ul>
                <li>It made the gods more relatable and understandable to humans</li>
                <li>It explained the unpredictability of divine favour</li>
                <li>It reflected the complexities of human nature and society</li>
                <li>It provided entertaining stories that transmitted cultural values</li>
            </ul>
            
            <div class="primary-source">
                "${lessonData.primarySources[2].text}"
                <div class="source-citation">— ${lessonData.primarySources[2].citation}</div>
            </div>
        `;
    }
}

// Load Summary Content
function loadSummaryContent() {
    const container = document.getElementById('summary-content');
    if (container) {
        container.innerHTML = `
            <p>To understand Greek and Roman mythology and religion, we must set aside modern assumptions about what religion means. For the ancients:</p>
            <ul>
                <li>Religion was about action (ritual) not belief (faith)</li>
                <li>Gods were powerful but flawed beings, not moral exemplars</li>
                <li>Worship was transactional, not devotional</li>
                <li>Religious practice was communal and civic, not personal and private</li>
                <li>Multiple gods meant multiple options for divine assistance</li>
                <li>Success in life depended on maintaining good relationships with the gods</li>
            </ul>
            <p>This religious framework shaped every aspect of ancient life, from politics and warfare to agriculture and family life. 
            Understanding it is essential for making sense of ancient literature, art, and history.</p>
        `;
    }
}

// Interactive Functions
function showComparisonDetails(type) {
    const detailsDiv = document.getElementById('comparison-details');
    const data = lessonData.comparisonData[type];
    
    if (data && data.details) {
        detailsDiv.innerHTML = `
            <h4>${data.details.title}</h4>
            <p>${data.details.content}</p>
            <ul>
                ${data.details.keyPoints.map(point => `<li><strong>${point}</strong></li>`).join('')}
            </ul>
        `;
        detailsDiv.style.display = 'block';
        
        // Update active state
        document.querySelectorAll('.comparison-card').forEach(card => card.classList.remove('active'));
        event.target.closest('.comparison-card').classList.add('active');
    }
}

function showTransactionDetails(stepId) {
    const detailsDiv = document.getElementById('transaction-details');
    const step = lessonData.transactionSteps.find(s => s.id === stepId);
    
    if (step) {
        detailsDiv.innerHTML = `<strong>${step.title.split('. ')[1]}:</strong> ${step.details}`;
        detailsDiv.style.display = 'block';
        
        // Update active state
        document.querySelectorAll('.transaction-step').forEach(step => step.classList.remove('active'));
        event.target.closest('.transaction-step').classList.add('active');
    }
}

function showDifferenceDetails(diffId) {
    const detailsDiv = document.getElementById('difference-details');
    const diff = lessonData.keyDifferences.find(d => d.id === diffId);
    
    if (diff && diff.details) {
        detailsDiv.innerHTML = `
            <h4>${diff.details.title}</h4>
            <p>${diff.details.content}</p>
        `;
        detailsDiv.style.display = 'block';
        
        // Update active state
        document.querySelectorAll('.difference-card').forEach(card => card.classList.remove('active'));
        event.target.closest('.difference-card').classList.add('active');
    }
}

// Setup Interactive Content
function setupInteractiveContent() {
    // Key terms
    document.querySelectorAll('.key-term').forEach(term => {
        term.addEventListener('click', function() {
            const definition = this.dataset.definition;
            showDefinition(definition);
        });
    });

    // Historical figures
    document.querySelectorAll('.key-figure').forEach(figure => {
        figure.addEventListener('click', function() {
            const info = this.dataset.info;
            showFigureInfo(info);
        });
    });

    // Key concepts
    document.querySelectorAll('.key-concept').forEach(concept => {
        concept.addEventListener('click', function() {
            const conceptId = this.dataset.concept;
            showConceptInfo(conceptId);
        });
    });
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
    const fig = lessonData.figures[figureId];
    if (fig) {
        showInfoPanel('Divine Figure', `
            <h4>${fig.name}</h4>
            <p><strong>Role:</strong> ${fig.role}</p>
            <p><strong>Significance:</strong> ${fig.significance}</p>
        `);
    }
}

function showConceptInfo(conceptId) {
    const def = lessonData.definitions[conceptId];
    if (def) {
        showInfoPanel('Key Concept', `
            <h4>${def.term}</h4>
            <p><strong>Explanation:</strong> ${def.definition}</p>
            <p><strong>Importance:</strong> ${def.context}</p>
        `);
    }
}

function showInfoPanel(title, content) {
    const infoContent = document.getElementById('info-content');
    if (infoContent) {
        infoContent.innerHTML = `
            <h4 style="color: #0066ff; margin-bottom: 0.5rem;">${title}</h4>
            ${content}
        `;
    }
}
