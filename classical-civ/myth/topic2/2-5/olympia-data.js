// Lesson 2.5: Heracles at Olympia - Enhanced Data File

const olympiaData = {
    // Metope arrangements
    westMetopes: [1, 2, 6, 7, 3, 9],
    eastMetopes: [4, 8, 10, 11, 12, 5],

    // Detailed metope information
    metopeDetails: {
        1: {
            title: "The Nemean Lion",
            location: "Nemea, northeast Peloponnese",
            description: "This metope shows the climactic moment when Heracles strangles the invulnerable lion with his bare hands. The sculpture captures the intense physical struggle, with Heracles' muscles straining as he applies the fatal chokehold.",
            analysis: "The artist emphasised Heracles' divine strength through exaggerated musculature and the lion's massive size. This was placed prominently as it represented the beginning of Heracles' heroic transformation - the moment he gained his iconic lion-skin cloak."
        },
        2: {
            title: "The Lernaean Hydra",
            location: "Lake Lerna, near Argos",
            description: "The metope depicts Heracles wielding his club whilst Iolaus tends the fire used to cauterise the Hydra's necks. Multiple serpentine heads writhe around the hero, showing the creature's regenerative horror.",
            analysis: "This sculpture teaches that even heroes need help - a humble lesson for competitive athletes. The collaborative nature of this labour made it controversial when Eurystheus discounted it, showing that teamwork could be seen as weakness by some."
        },
        3: {
            title: "Ceryneian Hind",
            location: "Ceryneia, Achaea",
            description: "Unlike the violent monster-slaying scenes, this metope shows Heracles gently carrying the sacred deer. The hind's golden antlers are carefully rendered, emphasising its divine nature and beauty.",
            analysis: "This labour required patience and restraint rather than violence - important virtues for athletes who needed self-control. The peaceful resolution shows wisdom triumphing over brute force, demonstrating that true heroism knows when not to use violence."
        },
        4: {
            title: "Erymanthian Boar",
            location: "Mount Erymanthus, Arcadia",
            description: "Heracles is shown wrestling the massive boar in deep snow, his powerful frame contrasted against the beast's tusked fury. The sculpture captures the moment of the hero's victory through superior technique.",
            analysis: "The snowy mountain setting adds environmental challenge to physical contest - like athletes competing in harsh conditions. The boar's capture alive showed mastery over nature rather than simple destruction."
        },
        5: {
            title: "Augean Stables",
            location: "Elis, western Peloponnese",
            description: "This unique metope shows Heracles redirecting river water through the stables. Rather than depicting muscle, it celebrates intelligence and engineering - the mind conquering what strength alone could not.",
            analysis: "Placed at Olympia (in Elis), this labour had special local significance. It demonstrated that cleverness could achieve what seemed impossible - inspiring athletes to use strategy as well as strength. The location made this particularly meaningful to Olympic visitors."
        },
        6: {
            title: "Stymphalian Birds",
            location: "Lake Stymphalia, Arcadia",
            description: "Heracles is shown with the bronze castanets given by Athena, driving the man-eating birds from their marsh. The sculptor depicted the birds in mid-flight, creating dynamic movement across the stone.",
            analysis: "Divine assistance through Athena's gift taught that the gods favour those who earn their help through previous deeds. Athletes understood they needed divine blessing alongside training to achieve Olympic glory."
        },
        7: {
            title: "Cretan Bull",
            location: "Crete",
            description: "The metope captures Heracles wrestling the fire-breathing bull, his lion-skin cloak flowing behind him. The bull's divine power is shown through its imposing size and fierce expression.",
            analysis: "This labour marked Heracles' expansion beyond the Peloponnese. For Olympic visitors from across Greece, it showed heroism had no geographic limits - the games truly were Panhellenic, uniting all Greeks."
        },
        8: {
            title: "Mares of Diomedes",
            location: "Thrace",
            description: "A tragic scene showing the aftermath of the horses' rampage, with Heracles mourning his friend Abderus. The man-eating mares are depicted with wild eyes and bared teeth, emphasising their unnatural savagery.",
            analysis: "This metope introduced the theme of heroic loss - even success can carry tragic cost. Athletes learnt that victory sometimes requires painful sacrifice, and that remembering fallen companions honours their memory."
        },
        9: {
            title: "Belt of Hippolyta",
            location: "Themiscyra, land of the Amazons",
            description: "The sculpture shows the climactic battle with the Amazons, Heracles fighting the warrior queen whilst her army charges. The dynamic composition emphasises the chaos of battle and Hera's cruel interference.",
            analysis: "This labour warned against trusting appearances - what seemed like diplomacy became warfare through divine manipulation. Athletes learnt to expect unexpected challenges and that divine will could overturn human plans."
        },
        10: {
            title: "Cattle of Geryon",
            location: "Erytheia, far western edge of the world",
            description: "Heracles faces the three-bodied monster Geryon whilst driving the red cattle. The sculptor showed all three of Geryon's bodies to emphasise the creature's supernatural nature and the labour's difficulty.",
            analysis: "Reaching the edge of the world, Heracles established the Pillars of Heracles (Gibraltar). This labour showed heroism expanding the boundaries of the known world - like Olympic competition spreading Greek culture to distant lands."
        },
        11: {
            title: "Apples of the Hesperides",
            location: "Garden of the Hesperides, far west",
            description: "The famous scene of Atlas returning with the golden apples whilst Heracles holds up the sky. The sculptor captured the moment of Atlas's attempted deception and Heracles' patient endurance.",
            analysis: "Literally supporting the heavens proved Heracles had divine-level strength. The clever trick with Atlas showed that even heroes must use wit against superior opponents - brain over brawn was a lesson for all competitors."
        },
        12: {
            title: "Cerberus",
            location: "The Underworld",
            description: "The final metope shows Heracles emerging from the Underworld with the three-headed Cerberus. The hell-hound is subdued but still fearsome, whilst Heracles appears calm and victorious.",
            analysis: "Conquering death itself was the ultimate heroic achievement. For athletes at Olympia, this represented the pinnacle of human achievement - victory over the impossible through divine favour and personal excellence. It promised that such feats could elevate mortals to divine status."
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

// Click outside modal to close
window.onclick = function(event) {
    const modal = document.getElementById('metopeModal');
    if (event.target === modal) {
        closeMetopeModal();
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
