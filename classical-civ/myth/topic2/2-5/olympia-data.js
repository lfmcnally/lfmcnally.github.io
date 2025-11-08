// Lesson 2.5: Heracles at Olympia - Enhanced Data File

const olympiaData = {
    // Analysis criteria details
    analysisCriteria: {
        space: {
            title: "Use of Space",
            number: 1,
            intro: "How well does the sculptor fill the rectangular frame? Metopes are awkward shapes - wider than they are tall - so skilled sculptors had to work cleverly to make dynamic, engaging compositions.",
            goodPoints: [
                "Dynamic diagonal lines drawing the eye across the scene",
                "Overlapping figures creating depth",
                "Figures at different heights (kneeling, standing, leaping)",
                "Bodies twisted or bent to fill corners naturally",
                "Strong focal point that attracts attention"
            ],
            poorPoints: [
                "Static, symmetrical composition with no movement",
                "Large empty areas with no purpose",
                "Figures awkwardly crammed into corners",
                "All figures at the same height (flat, boring)",
                "No clear focal point - eye doesn't know where to look"
            ],
            example: {
                title: "Comparing the Nemean Lion",
                good: "Heracles and the lion form a powerful diagonal from bottom left to top right. The hero's body twists dynamically, with one leg bent (creating varied heights) whilst his arms wrap around the lion's neck. The lion's mane fills the top corner naturally, whilst its hindquarters occupy the lower space. The viewer's eye is drawn to the central point where Heracles applies the stranglehold. Every part of the frame is purposefully filled.",
                poor: "Heracles and the lion stand facing each other symmetrically in the centre, leaving large empty spaces in the corners. Both figures are the same height with no overlapping, creating a flat, static image. The eye doesn't know where to focus as everything is equally important (or unimportant). The rectangular frame feels awkward and unfilled, with wasted space above and beside the figures."
            }
        },
        recognisability: {
            title: "Recognisability",
            number: 2,
            intro: "Can viewers immediately identify which labour is being shown? Ancient Greeks viewing these metopes needed to recognise the scene instantly, even from ground level looking up at the temple.",
            goodPoints: [
                "Unique attributes (lion's mane, Hydra's multiple heads, golden antlers)",
                "The climactic moment of the story chosen",
                "Clear gestures and body language showing action",
                "Key objects visible (club, lion skin, bow)",
                "Supporting characters included (Iolaus, Athena, Atlas)"
            ],
            poorPoints: [
                "Generic monsters with no distinctive features",
                "Wrong moment chosen (aftermath rather than action)",
                "Too many similar-looking figures",
                "Identifying objects missing or damaged",
                "Could be confused with different labour or myth"
            ],
            example: {
                title: "The Hydra Metope",
                good: "The Hydra is instantly identifiable through its multiple heads - no other monster shares this feature. The inclusion of Iolaus with fire is the key detail that confirms this is specifically the Lernaean Hydra (where cauterising the necks was essential). Heracles' club and lion skin are clearly visible, confirming his identity. Anyone familiar with Greek myth would recognise this scene immediately.",
                poor: "A metope showing Heracles fighting a generic serpent-like creature could represent many different myths. Without distinctive features like multiple heads or the presence of Iolaus, viewers might confuse it with Python, the Colchian dragon, or other serpent monsters. The lack of identifying details makes instant recognition impossible."
            }
        },
        realism: {
            title: "Realism vs. Idealisation",
            number: 3,
            intro: "How realistic is the sculpture? Classical Greek art aimed for idealised human forms - perfect anatomy, heroic proportions, but also believable poses and natural movement.",
            goodPoints: [
                "Accurate human anatomy (muscles, joints, proportions)",
                "Believable weight distribution and balance",
                "Natural, possible body positions",
                "Convincing expressions showing emotion",
                "Realistic interaction between figures"
            ],
            poorPoints: [
                "Impossible poses that defy physics",
                "Awkward, stiff body positions",
                "Incorrect anatomy or proportions",
                "No sense of weight or gravity",
                "Figures not actually touching or interacting convincingly"
            ],
            example: {
                title: "Balancing Realism and Myth",
                good: "The human figures show accurate musculature and believable poses - Heracles' weight is convincingly shifted onto his forward leg as he swings the club. His anatomy follows real human proportions (though idealised to heroic perfection). The sculptor balances realism (human anatomy) with mythological requirements (impossible monsters), creating a scene that feels both believable and supernatural.",
                poor: "Heracles stands in an impossible position with his weight distributed unrealistically. His muscles are exaggerated to cartoonish proportions that don't follow actual human anatomy. The pose looks stiff and staged rather than capturing a moment of dynamic action. Even accounting for idealisation, the figure simply doesn't look believable."
            }
        }
    },

    // Metope arrangements
    westMetopes: [1, 2, 6, 7, 3, 9],
    eastMetopes: [4, 8, 10, 11, 12, 5],

    // Detailed metope information
    metopeDetails: {
        1: {
            title: "The Nemean Lion",
            location: "Nemea, northeast Peloponnese",
            description: "This metope shows the climactic moment when Heracles strangles the invulnerable lion with his bare hands. The sculpture captures the intense physical struggle, with Heracles' muscles straining as he applies the fatal chokehold.",
            analysis: "The artist emphasised Heracles' divine strength through exaggerated musculature and the lion's massive size. This was placed prominently as it represented the beginning of Heracles' heroic transformation - the moment he gained his iconic lion-skin cloak.",
            keyFeatures: [
                "Lion with distinctive thick mane",
                "Heracles wrestling with bare hands (no weapons)",
                "Stranglehold/chokehold position",
                "No lion skin yet (this is where he obtains it)",
                "Intense close combat composition"
            ]
        },
        2: {
            title: "The Lernaean Hydra",
            location: "Lake Lerna, near Argos",
            description: "The metope depicts Heracles wielding his club whilst Iolaus tends the fire used to cauterise the Hydra's necks. Multiple serpentine heads writhe around the hero, showing the creature's regenerative horror.",
            analysis: "This sculpture teaches that even heroes need help - a humble lesson for competitive athletes. The collaborative nature of this labour made it controversial when Eurystheus discounted it, showing that teamwork could be seen as weakness by some.",
            keyFeatures: [
                "Multiple serpentine heads (the Hydra's unique feature)",
                "Iolaus present with fire/torch",
                "Heracles wielding his club",
                "Serpentine necks filling upper space",
                "Two human figures working together"
            ]
        },
        3: {
            title: "Ceryneian Hind",
            location: "Ceryneia, Achaea",
            description: "Unlike the violent monster-slaying scenes, this metope shows Heracles gently carrying the sacred deer. The hind's golden antlers are carefully rendered, emphasising its divine nature and beauty.",
            analysis: "This labour required patience and restraint rather than violence - important virtues for athletes who needed self-control. The peaceful resolution shows wisdom triumphing over brute force, demonstrating that true heroism knows when not to use violence.",
            keyFeatures: [
                "Golden antlers on a deer/hind",
                "Gentle, carrying pose (not violent)",
                "Graceful, peaceful composition",
                "Sacred animal, clearly alive and unharmed",
                "Elegant curves and natural movement"
            ]
        },
        4: {
            title: "Erymanthian Boar",
            location: "Mount Erymanthus, Arcadia",
            description: "Heracles is shown wrestling the massive boar in deep snow, his powerful frame contrasted against the beast's tusked fury. The sculpture captures the moment of the hero's victory through superior technique.",
            analysis: "The snowy mountain setting adds environmental challenge to physical contest - like athletes competing in harsh conditions. The boar's capture alive showed mastery over nature rather than simple destruction.",
            keyFeatures: [
                "Large boar with prominent tusks",
                "Wrestling/capture position (taken alive)",
                "Mountain setting implied",
                "Powerful, muscular composition",
                "Physical struggle between man and beast"
            ]
        },
        5: {
            title: "Augean Stables",
            location: "Elis, western Peloponnese",
            description: "This unique metope shows Heracles redirecting river water through the stables. Rather than depicting muscle, it celebrates intelligence and engineering - the mind conquering what strength alone could not.",
            analysis: "Placed at Olympia (in Elis), this labour had special local significance. It demonstrated that cleverness could achieve what seemed impossible - inspiring athletes to use strategy as well as strength. The location made this particularly meaningful to Olympic visitors.",
            keyFeatures: [
                "Water/river being redirected",
                "No monster or animal opponent",
                "Engineering/problem-solving scene",
                "Heracles using intelligence not strength",
                "Unique non-combat composition"
            ]
        },
        6: {
            title: "Stymphalian Birds",
            location: "Lake Stymphalia, Arcadia",
            description: "Heracles is shown with the bronze castanets given by Athena, driving the man-eating birds from their marsh. The sculptor depicted the birds in mid-flight, creating dynamic movement across the stone.",
            analysis: "Divine assistance through Athena's gift taught that the gods favour those who earn their help through previous deeds. Athletes understood they needed divine blessing alongside training to achieve Olympic glory.",
            keyFeatures: [
                "Multiple birds in flight",
                "Bronze castanets/noisemakers",
                "Athena may be present (divine assistance)",
                "Birds with threatening appearance",
                "Dynamic upward movement"
            ]
        },
        7: {
            title: "Cretan Bull",
            location: "Crete",
            description: "The metope captures Heracles wrestling the fire-breathing bull, his lion-skin cloak flowing behind him. The bull's divine power is shown through its imposing size and fierce expression.",
            analysis: "This labour marked Heracles' expansion beyond the Peloponnese. For Olympic visitors from across Greece, it showed heroism had no geographic limits - the games truly were Panhellenic, uniting all Greeks.",
            keyFeatures: [
                "Large, powerful bull",
                "Heracles wearing lion-skin cloak",
                "Wrestling/capture position",
                "Dynamic diagonal composition",
                "Bull rearing or in aggressive pose"
            ]
        },
        8: {
            title: "Mares of Diomedes",
            location: "Thrace",
            description: "A tragic scene showing the aftermath of the horses' rampage, with Heracles mourning his friend Abderus. The man-eating mares are depicted with wild eyes and bared teeth, emphasising their unnatural savagery.",
            analysis: "This metope introduced the theme of heroic loss - even success can carry tragic cost. Athletes learnt that victory sometimes requires painful sacrifice, and that remembering fallen companions honours their memory.",
            keyFeatures: [
                "Multiple horses with savage appearance",
                "Wild eyes and bared teeth",
                "Heracles with mournful expression",
                "Possible presence of Abderus",
                "Darker, tragic tone"
            ]
        },
        9: {
            title: "Belt of Hippolyta",
            location: "Themiscyra, land of the Amazons",
            description: "The sculpture shows the climactic battle with the Amazons, Heracles fighting the warrior queen whilst her army charges. The dynamic composition emphasises the chaos of battle and Hera's cruel interference.",
            analysis: "This labour warned against trusting appearances - what seemed like diplomacy became warfare through divine manipulation. Athletes learnt to expect unexpected challenges and that divine will could overturn human plans.",
            keyFeatures: [
                "Female warriors (Amazons)",
                "Hippolyta with distinctive belt",
                "Battle/combat scene with multiple figures",
                "Crowded, chaotic composition",
                "Both male and female fighters"
            ]
        },
        10: {
            title: "Cattle of Geryon",
            location: "Erytheia, far western edge of the world",
            description: "Heracles faces the three-bodied monster Geryon whilst driving the red cattle. The sculptor showed all three of Geryon's bodies to emphasise the creature's supernatural nature and the labour's difficulty.",
            analysis: "Reaching the edge of the world, Heracles established the Pillars of Heracles (Gibraltar). This labour showed heroism expanding the boundaries of the known world - like Olympic competition spreading Greek culture to distant lands.",
            keyFeatures: [
                "Three-bodied Geryon (three torsos/heads)",
                "Red cattle present",
                "Monster with multiple forms",
                "Western location implied",
                "Unique triple-bodied composition"
            ]
        },
        11: {
            title: "Apples of the Hesperides",
            location: "Garden of the Hesperides, far west",
            description: "The famous scene of Atlas returning with the golden apples whilst Heracles holds up the sky. The sculptor captured the moment of Atlas's attempted deception and Heracles' patient endurance.",
            analysis: "Literally supporting the heavens proved Heracles had divine-level strength. The clever trick with Atlas showed that even heroes must use wit against superior opponents - brain over brawn was a lesson for all competitors.",
            keyFeatures: [
                "Atlas holding golden apples",
                "Heracles supporting the sky/celestial sphere",
                "Role reversal between hero and Titan",
                "Golden apples clearly visible",
                "Weight-bearing pose of Heracles"
            ]
        },
        12: {
            title: "Cerberus",
            location: "The Underworld",
            description: "The final metope shows Heracles emerging from the Underworld with the three-headed Cerberus. The hell-hound is subdued but still fearsome, whilst Heracles appears calm and victorious.",
            analysis: "Conquering death itself was the ultimate heroic achievement. For athletes at Olympia, this represented the pinnacle of human achievement - victory over the impossible through divine favour and personal excellence. It promised that such feats could elevate mortals to divine status.",
            keyFeatures: [
                "Three-headed dog (Cerberus)",
                "Underworld setting implied",
                "Dog on leash/chain (subdued)",
                "Heracles leading rather than fighting",
                "Calm, victorious composition"
            ]
        }
    },

    // Olympic founding myths
    olympicFacts: [
        {
            icon: '🏃',
            title: 'The Sacred Grove',
            description: 'After completing his labours, Heracles established the Olympic Games at Olympia to honour his father Zeus. He marked out the sacred Altis grove and established the stadium where competitions would take place.'
        },
        {
            icon: '📏',
            title: 'The Stadium',
            description: 'Heracles measured out the original stadium length - 600 feet - by placing one foot in front of the other. This is why a stadium (stadion) became a standard Greek measurement of approximately 192 metres.'
        },
        {
            icon: '🌿',
            title: 'The Sacred Olive',
            description: 'Heracles brought the wild olive from the land of the Hyperboreans to Olympia. Winners received crowns made from its branches - the most prestigious prize in the Greek world, worth more than gold.'
        },
        {
            icon: '🏆',
            title: 'The First Competition',
            description: 'Heracles challenged his four brothers to a race and crowned the winner with an olive wreath, establishing the tradition of athletic competition in honour of the gods. Victory brought divine favour, not material wealth.'
        }
    ],

    exitQuestions: [
        {
            question: 'Why were the twelve labours of Heracles depicted on the Temple of Zeus at Olympia?',
            answer: 'Heracles was the legendary founder of the Olympic Games. His labours represented a journey from sin (killing his family) to redemption through suffering and perseverance - the perfect message for athletes seeking glory through struggle. The progression from local to cosmic challenges mirrored the athlete\'s journey to excellence.'
        },
        {
            question: 'How were the metopes arranged between the east and west porches? What narrative did this create?',
            answer: 'The west porch showed labours involving divine animals and monsters (Lion, Hydra, Hind, Birds, Bull, Amazons), whilst the east porch displayed human opponents and distant challenges (Boar, Horses, Geryon, Apples, Cerberus, Stables). This created a narrative from beast to man, from local to cosmic, showing progressive difficulty.'
        },
        {
            question: 'What are the three key criteria for analysing a metope effectively?',
            answer: 'The three criteria are: (1) Use of Space - how well the sculptor fills the rectangular frame with dynamic composition, varied heights, and overlapping figures; (2) Recognisability - whether viewers can instantly identify the labour through unique attributes, climactic moments, and clear gestures; (3) Realism - how believably the sculptor renders human anatomy and poses whilst balancing idealisation with natural movement.'
        },
        {
            question: 'What role did Heracles play in the founding of the Olympic Games according to myth?',
            answer: 'Heracles established the games to honour Zeus after completing his labours. He marked out the sacred Altis grove, measured the stadium by pacing 600 feet, brought the sacred olive from the Hyperboreans for victory crowns, and held the first competition amongst his brothers.'
        },
        {
            question: 'Why was the Augean Stables metope particularly significant at Olympia?',
            answer: 'It had special local significance because the stables were in Elis, the region containing Olympia. The labour showed intelligence triumphing over impossible tasks - inspiring athletes to use strategy alongside strength. It celebrated the local area\'s connection to Heracles\' heroic achievements.'
        },
        {
            question: 'What message did the metopes send to athletes competing at Olympia?',
            answer: 'The metopes taught that excellence requires: strength (Lion), teamwork (Hydra), patience (Hind), intelligence (Stables), divine favour (Birds), and perseverance through sacrifice (Horses). The final labour (Cerberus) promised that such achievements could elevate mortals to divine status - the ultimate athletic aspiration.'
        }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMetopes();
    initializeOlympicFacts();
    initializeExitQuestions();
    initializeLabourIdentifier();
});

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            showSection(this.getAttribute('data-section'));
        });
    });

    const navButtons = document.querySelectorAll('.nav-btn[data-goto]');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection(this.getAttribute('data-goto'));
        });
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Metopes
function initializeMetopes() {
    const westContainer = document.getElementById('west-metopes');
    const eastContainer = document.getElementById('east-metopes');
    
    if (westContainer) {
        westContainer.innerHTML = olympiaData.westMetopes.map(num => `
            <div class="metope" onclick="showMetopeModal(${num})">
                <img src="../../images/labour${num}.jpg" alt="Labour ${num} metope" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;">
            </div>
        `).join('');
    }
    
    if (eastContainer) {
        eastContainer.innerHTML = olympiaData.eastMetopes.map(num => `
            <div class="metope" onclick="showMetopeModal(${num})">
                <img src="../../images/labour${num}.jpg" alt="Labour ${num} metope" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;">
            </div>
        `).join('');
    }
}

function showMetopeModal(labourNum) {
    const metope = olympiaData.metopeDetails[labourNum];
    const modal = document.getElementById('metopeModal');
    const modalContent = document.getElementById('metopeModalContent');
    
    if (metope && modal && modalContent) {
        modalContent.innerHTML = `
            <h2 class="metope-detail-title">Labour ${labourNum}: ${metope.title}</h2>
            <div class="metope-detail-location">📍 ${metope.location}</div>
            
            <img src="../../images/labour${labourNum}.jpg" alt="${metope.title} metope detail" style="width: 100%; max-width: 450px; height: auto; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); margin: 2rem auto; display: block;">
            
            <div class="metope-detail-text">
                <h4>The Sculpture</h4>
                <p>${metope.description}</p>
            </div>
            
            <div class="metope-analysis">
                <h4>Why This Labour at Olympia?</h4>
                <p>${metope.analysis}</p>
            </div>
        `;
        modal.classList.add('active');
    }
}

function closeMetopeModal() {
    const modal = document.getElementById('metopeModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Olympic Facts
function initializeOlympicFacts() {
    const container = document.getElementById('olympic-facts');
    if (!container) return;
    
    container.innerHTML = olympiaData.olympicFacts.map(fact => `
        <div class="olympic-fact">
            <div class="olympic-icon">${fact.icon}</div>
            <div class="olympic-title">${fact.title}</div>
            <div class="olympic-description">${fact.description}</div>
        </div>
    `).join('');
}

// Exit Questions
let currentQuestion = 0;

function initializeExitQuestions() {
    loadExitQuestion();
    
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const revealBtn = document.getElementById('revealAnswer');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadExitQuestion();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentQuestion < olympiaData.exitQuestions.length - 1) {
                currentQuestion++;
                loadExitQuestion();
            }
        });
    }
    
    if (revealBtn) {
        revealBtn.addEventListener('click', function() {
            const answerEl = document.getElementById('questionAnswer');
            if (answerEl && !answerEl.classList.contains('visible')) {
                answerEl.classList.add('visible');
                this.textContent = '✓ Answer Revealed';
                this.classList.add('revealed');
            }
        });
    }
}

function loadExitQuestion() {
    const question = olympiaData.exitQuestions[currentQuestion];
    const questionNumberEl = document.getElementById('questionNumber');
    const questionTextEl = document.getElementById('questionText');
    const questionAnswerEl = document.getElementById('questionAnswer');
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const revealBtn = document.getElementById('revealAnswer');
    
    if (questionNumberEl) questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${olympiaData.exitQuestions.length}`;
    if (questionTextEl) questionTextEl.textContent = question.question;
    if (questionAnswerEl) {
        questionAnswerEl.textContent = question.answer;
        questionAnswerEl.classList.remove('visible');
    }
    
    if (prevBtn) prevBtn.disabled = currentQuestion === 0;
    if (nextBtn) nextBtn.disabled = currentQuestion === olympiaData.exitQuestions.length - 1;
    
    if (revealBtn) {
        revealBtn.textContent = 'Reveal Answer';
        revealBtn.classList.remove('revealed');
    }
}

// Analysis Modal Functions
function showAnalysisModal(criterionKey) {
    const criterion = olympiaData.analysisCriteria[criterionKey];
    const modal = document.getElementById('analysisModal');
    const modalContent = document.getElementById('analysisModalContent');
    
    if (criterion && modal && modalContent) {
        modalContent.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div class="criterion-number" style="display: inline-flex; background: #0ea5e9; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem;">${criterion.number}</div>
                <h2 style="color: #0066ff; margin: 0; font-size: 1.8rem;">${criterion.title}</h2>
            </div>
            
            <p style="font-size: 1.05rem; line-height: 1.7; color: #4b5563; margin-bottom: 2rem;">
                ${criterion.intro}
            </p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
                <div style="background: #dcfce7; border: 2px solid #16a34a; border-radius: 12px; padding: 1.5rem;">
                    <h4 style="color: #15803d; margin-bottom: 1rem; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.5px;">✓ Good Use</h4>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        ${criterion.goodPoints.map(point => `
                            <li style="padding: 0.5rem 0; color: #166534; font-size: 0.95rem; position: relative; padding-left: 1.5rem;">
                                <span style="position: absolute; left: 0; color: #10b981; font-weight: 700;">✓</span>
                                ${point}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div style="background: #fee2e2; border: 2px solid #dc2626; border-radius: 12px; padding: 1.5rem;">
                    <h4 style="color: #991b1b; margin-bottom: 1rem; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.5px;">✗ Poor Use</h4>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        ${criterion.poorPoints.map(point => `
                            <li style="padding: 0.5rem 0; color: #991b1b; font-size: 0.95rem; position: relative; padding-left: 1.5rem;">
                                <span style="position: absolute; left: 0; color: #ef4444; font-weight: 700;">✗</span>
                                ${point}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            
            <div style="background: #fefce8; border: 2px solid #eab308; border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
                <h4 style="color: #854d0e; margin-bottom: 1.5rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">💡</span>
                    ${criterion.example.title}
                </h4>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <h5 style="color: #15803d; margin-bottom: 0.75rem; font-size: 0.9rem; text-transform: uppercase;">✓ Effective Example</h5>
                        <p style="color: #713f12; line-height: 1.6; font-size: 0.95rem;">${criterion.example.good}</p>
                    </div>
                    <div>
                        <h5 style="color: #991b1b; margin-bottom: 0.75rem; font-size: 0.9rem; text-transform: uppercase;">✗ Weak Example</h5>
                        <p style="color: #713f12; line-height: 1.6; font-size: 0.95rem;">${criterion.example.poor}</p>
                    </div>
                </div>
            </div>
        `;
        modal.classList.add('active');
    }
}

function closeAnalysisModal() {
    const modal = document.getElementById('analysisModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Model Answer Toggle
function toggleModelAnswer() {
    const modelAnswer = document.getElementById('modelAnswer');
    const btnText = document.getElementById('modelAnswerBtnText');
    
    if (modelAnswer && btnText) {
        if (modelAnswer.classList.contains('visible')) {
            modelAnswer.classList.remove('visible');
            btnText.textContent = 'Show Model Answer';
        } else {
            modelAnswer.classList.add('visible');
            btnText.textContent = 'Hide Model Answer';
        }
    }
}

// Labour Identifier Functions
let availableLabours = [];
let currentLabourIndex = 0;
let viewedLaboursCount = 0;

function initializeLabourIdentifier() {
    // Create array of all labour numbers (1-12)
    availableLabours = Array.from({length: 12}, (_, i) => i + 1);
    shuffleArray(availableLabours);
    currentLabourIndex = 0;
    viewedLaboursCount = 0;
    loadLabour();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadLabour() {
    const labourNum = availableLabours[currentLabourIndex];
    const labour = olympiaData.metopeDetails[labourNum];
    
    const imageEl = document.getElementById('identifierImage');
    const answerEl = document.getElementById('identifierAnswer');
    const revealBtn = document.getElementById('revealLabourBtn');
    const counterEl = document.getElementById('labourCounter');
    
    if (imageEl) {
        imageEl.src = `../../images/labour${labourNum}.jpg`;
        imageEl.alt = 'Mystery labour metope';
    }
    
    if (answerEl) {
        answerEl.classList.remove('visible');
    }
    
    if (revealBtn) {
        revealBtn.disabled = false;
        revealBtn.textContent = 'Reveal Answer';
    }
    
    if (counterEl) {
        counterEl.textContent = `${viewedLaboursCount} / 12`;
    }
}

function revealLabour() {
    const labourNum = availableLabours[currentLabourIndex];
    const labour = olympiaData.metopeDetails[labourNum];
    
    const answerEl = document.getElementById('identifierAnswer');
    const numberEl = document.getElementById('answerLabourNumber');
    const titleEl = document.getElementById('answerLabourTitle');
    const locationEl = document.getElementById('answerLabourLocation');
    const featuresEl = document.getElementById('answerKeyFeatures');
    const revealBtn = document.getElementById('revealLabourBtn');
    
    if (numberEl) numberEl.textContent = `Labour ${labourNum}`;
    if (titleEl) titleEl.textContent = labour.title;
    if (locationEl) locationEl.textContent = `📍 ${labour.location}`;
    
    if (featuresEl && labour.keyFeatures) {
        featuresEl.innerHTML = labour.keyFeatures.map(feature => 
            `<li>${feature}</li>`
        ).join('');
    }
    
    if (answerEl) {
        answerEl.classList.add('visible');
    }
    
    if (revealBtn) {
        revealBtn.disabled = true;
        revealBtn.textContent = '✓ Answer Revealed';
    }
    
    // Increment viewed count only on first reveal of this labour
    if (!answerEl.dataset.counted) {
        viewedLaboursCount++;
        answerEl.dataset.counted = 'true';
        const counterEl = document.getElementById('labourCounter');
        if (counterEl) {
            counterEl.textContent = `${viewedLaboursCount} / 12`;
        }
    }
}

function nextLabour() {
    currentLabourIndex++;
    
    // If we've gone through all 12, reshuffle and start over
    if (currentLabourIndex >= availableLabours.length) {
        shuffleArray(availableLabours);
        currentLabourIndex = 0;
        viewedLaboursCount = 0;
    }
    
    loadLabour();
    
    // Remove the counted flag
    const answerEl = document.getElementById('identifierAnswer');
    if (answerEl) {
        delete answerEl.dataset.counted;
    }
}

// Update window click handler to close both modals
window.onclick = function(event) {
    const metopeModal = document.getElementById('metopeModal');
    const analysisModal = document.getElementById('analysisModal');
    
    if (event.target === metopeModal) {
        closeMetopeModal();
    }
    if (event.target === analysisModal) {
        closeAnalysisModal();
    }
}
