// Lesson 2-3: The Twelve Labours - Data File

const lessonData = {
    // Learning Objectives
    learningObjectives: {
        intro: "By the end of this section, you will understand:",
        objectives: [
            "The twelve labours and their significance in establishing Heracles as the greatest hero",
            "How Heracles overcame each challenge through strength, cleverness, and divine aid",
            "The representation of the labours on the Temple of Zeus at Olympia",
            "Heracles' role as founder of the Olympic Games",
            "The progression from local to cosmic challenges",
            "How the labours transformed personal tragedy into universal benefit"
        ]
    },

    // Labour Categories
    categories: [
        {
            id: 'monster',
            icon: '🦁',
            title: 'Monster Slaying',
            count: 'Labours 1, 2, 4, 6, 9, 11, 12'
        },
        {
            id: 'capture',
            icon: '🎯',
            title: 'Capture Missions',
            count: 'Labours 3, 7, 12'
        },
        {
            id: 'fetch',
            icon: '🏺',
            title: 'Fetch Quests',
            count: 'Labours 8, 9, 10, 11'
        }
    ],

    // Twelve Labours Data
    labours: [
        {
            number: 1,
            name: 'Nemean Lion',
            icon: '🦁',
            location: 'Nemea, Peloponnese',
            challenge: 'A lion with impenetrable skin that terrorised Nemea. No weapon could pierce its hide.',
            solution: 'Heracles strangled it with his bare hands after trapping it in its cave. He used the lion\'s own claws to skin it and wore the pelt as armour.',
            significance: 'Established Heracles\' superhuman strength and gained his iconic lion-skin cloak.',
            metope: 'west'
        },
        {
            number: 2,
            name: 'Lernaean Hydra',
            icon: '🐍',
            location: 'Lake Lerna, near Argos',
            challenge: 'A many-headed serpent that grew two heads for each one cut off. Its breath and blood were deadly poison.',
            solution: 'With help from his nephew Iolaus, who cauterised each neck stump, Heracles defeated it. He dipped his arrows in its poisonous blood.',
            significance: 'Discounted by Eurystheus for receiving help. The poisoned arrows would later cause his own death.',
            metope: 'west'
        },
        {
            number: 3,
            name: 'Ceryneian Hind',
            icon: '🦌',
            location: 'Ceryneia, Achaea',
            challenge: 'A sacred deer with golden antlers and bronze hooves, sacred to Artemis. It had to be captured alive without harm.',
            solution: 'Heracles pursued it for a full year, finally capturing it while it slept. He apologised to Artemis for the necessity.',
            significance: 'Showed patience and respect for the divine, not just brute strength.',
            metope: 'west'
        },
        {
            number: 4,
            name: 'Erymanthian Boar',
            icon: '🐗',
            location: 'Mount Erymanthus, Arcadia',
            challenge: 'A gigantic boar that ravaged the countryside. Had to be captured alive in winter conditions.',
            solution: 'Heracles chased it into deep snow where it couldn\'t move quickly, then bound it and carried it back to Eurystheus.',
            significance: 'Eurystheus was so frightened he hid in a bronze jar, showing the cowardice of Heracles\' taskmaster.',
            metope: 'east'
        },
        {
            number: 5,
            name: 'Augean Stables',
            icon: '🐄',
            location: 'Elis, western Peloponnese',
            challenge: '3000 immortal cattle had filled the stables with 30 years of dung. Had to be cleaned in a single day.',
            solution: 'Heracles diverted two rivers (Alpheus and Peneus) through the stables, washing them clean with the torrent.',
            significance: 'Discounted by Eurystheus because Augeas offered payment. Showed intelligence over strength.',
            metope: 'east'
        },
        {
            number: 6,
            name: 'Stymphalian Birds',
            icon: '🦅',
            location: 'Lake Stymphalia, Arcadia',
            challenge: 'Man-eating birds with bronze beaks, metallic feathers they could shoot like arrows, and toxic dung.',
            solution: 'Using bronze castanets from Athena, Heracles frightened them into flight, then shot them with his arrows.',
            significance: 'First labour requiring divine assistance (Athena\'s help), showing even heroes need the gods.',
            metope: 'west'
        },
        {
            number: 7,
            name: 'Cretan Bull',
            icon: '🐂',
            location: 'Crete',
            challenge: 'The bull that fathered the Minotaur, now running wild and breathing fire, destroying Cretan crops.',
            solution: 'Heracles wrestled it into submission and rode it across the sea back to Greece.',
            significance: 'First labour outside the Peloponnese, expanding the geographic scope of his heroism.',
            metope: 'west'
        },
        {
            number: 8,
            name: 'Mares of Diomedes',
            icon: '🐴',
            location: 'Thrace',
            challenge: 'Four horses fed human flesh by King Diomedes, making them savage and uncontrollable.',
            solution: 'Heracles fed Diomedes to his own horses, calming them, then drove them back to Eurystheus.',
            significance: 'Justice through poetic retribution. The death of his companion Abderus added tragic cost.',
            metope: 'east'
        },
        {
            number: 9,
            name: 'Belt of Hippolyta',
            icon: '⚔️',
            location: 'Themiscyra, land of Amazons',
            challenge: 'Retrieve the war belt of Hippolyta, Queen of the Amazons, as a gift for Eurystheus\' daughter.',
            solution: 'Initially diplomatic, but Hera disguised herself and turned the Amazons against him. Heracles had to fight and kill Hippolyta.',
            significance: 'Showed that even peaceful solutions could be sabotaged by divine interference.',
            metope: 'west'
        },
        {
            number: 10,
            name: 'Cattle of Geryon',
            icon: '🐄',
            location: 'Erytheia, far western edge',
            challenge: 'Steal the red cattle of Geryon, a three-bodied giant, from the edge of the world.',
            solution: 'Heracles travelled to the edge of the world, killed Geryon and his two-headed dog Orthrus, and drove the cattle back through Europe.',
            significance: 'Set up the Pillars of Heracles (Gibraltar) marking the edge of the world.',
            metope: 'east'
        },
        {
            number: 11,
            name: 'Apples of Hesperides',
            icon: '🍎',
            location: 'Garden of Hesperides, far west',
            challenge: 'Fetch golden apples from a garden guarded by the dragon Ladon and the Hesperides nymphs.',
            solution: 'Heracles held up the sky while Atlas fetched the apples, then tricked Atlas into taking the sky back.',
            significance: 'Literally supported the heavens, proving divine-level strength and cunning.',
            metope: 'east'
        },
        {
            number: 12,
            name: 'Cerberus',
            icon: '🐺',
            location: 'The Underworld',
            challenge: 'Bring back Cerberus, the three-headed guardian of the underworld, alive and without weapons.',
            solution: 'With Hermes and Athena\'s help, Heracles wrestled Cerberus into submission and brought him to Eurystheus, then returned him.',
            significance: 'Conquered death itself - the ultimate heroic achievement. Even Hades respected his strength.',
            metope: 'east'
        }
    ],

    // Metope Details for Modal
    metopeDetails: {
        1: {
            title: "The Nemean Lion",
            location: "Nemea, northeast Peloponnese",
            description: "This metope shows the climactic moment when Heracles strangles the invulnerable lion with his bare hands. The sculpture captures the intense physical struggle, with Heracles' muscles straining as he applies the fatal chokehold.",
            analysis: "The artist emphasized Heracles' divine strength through exaggerated musculature and the lion's massive size. This was placed prominently as it represented the beginning of Heracles' heroic transformation."
        },
        2: {
            title: "The Lernaean Hydra",
            location: "Lake Lerna, near Argos",
            description: "The metope depicts Heracles wielding his club while Iolaus tends the fire used to cauterize the Hydra's necks. Multiple serpentine heads writhe around the hero, showing the creature's regenerative horror.",
            analysis: "This sculpture teaches that even heroes need help - a humble lesson for competitive athletes. The collaborative nature of this labour made it controversial when Eurystheus discounted it."
        },
        3: {
            title: "Ceryneian Hind",
            location: "Ceryneia, Achaea",
            description: "Unlike the violent monster-slaying scenes, this metope shows Heracles gently carrying the sacred deer. The hind's golden antlers are carefully rendered, emphasizing its divine nature and beauty.",
            analysis: "This labour required patience and restraint rather than violence - important virtues for athletes who needed self-control. The peaceful resolution shows wisdom triumphing over brute force."
        },
        4: {
            title: "Erymanthian Boar",
            location: "Mount Erymanthus, Arcadia",
            description: "Heracles is shown wrestling the massive boar in deep snow, his powerful frame contrasted against the beast's tusked fury. The sculpture captures the moment of the hero's victory through superior technique.",
            analysis: "The snowy mountain setting adds environmental challenge to physical contest - like athletes competing in harsh conditions. The boar's capture alive showed mastery over nature."
        },
        5: {
            title: "Augean Stables",
            location: "Elis, western Peloponnese",
            description: "This unique metope shows Heracles redirecting river water through the stables. Rather than depicting muscle, it celebrates intelligence and engineering - the mind conquering what strength alone could not.",
            analysis: "Placed at Olympia (in Elis), this labour had special local significance. It demonstrated that cleverness could achieve what seemed impossible - inspiring athletes to use strategy as well as strength."
        },
        6: {
            title: "Stymphalian Birds",
            location: "Lake Stymphalia, Arcadia",
            description: "Heracles is shown with the bronze castanets given by Athena, driving the man-eating birds from their marsh. The sculptor depicted the birds in mid-flight, creating dynamic movement across the stone.",
            analysis: "Divine assistance through Athena's gift taught that the gods favor those who earn their help through previous deeds. Athletes understood they needed divine blessing alongside training."
        },
        7: {
            title: "Cretan Bull",
            location: "Crete",
            description: "The metope captures Heracles wrestling the fire-breathing bull, his lion-skin cloak flowing behind him. The bull's divine power is shown through its imposing size and fierce expression.",
            analysis: "This labour marked Heracles' expansion beyond the Peloponnese. For Olympic visitors from across Greece, it showed heroism had no geographic limits - the games truly were Panhellenic."
        },
        8: {
            title: "Mares of Diomedes",
            location: "Thrace",
            description: "A tragic scene showing the aftermath of the horses' rampage, with Heracles mourning his friend Abderus. The man-eating mares are depicted with wild eyes and bared teeth, emphasizing their unnatural savagery.",
            analysis: "This metope introduced the theme of heroic loss - even success can carry tragic cost. Athletes learned that victory sometimes requires painful sacrifice."
        },
        9: {
            title: "Belt of Hippolyta",
            location: "Themiscyra, land of the Amazons",
            description: "The sculpture shows the climactic battle with the Amazons, Heracles fighting the warrior queen while her army charges. The dynamic composition emphasizes the chaos of battle and Hera's cruel interference.",
            analysis: "This labour warned against trusting appearances - what seemed like diplomacy became warfare through divine manipulation. Athletes learned to expect unexpected challenges."
        },
        10: {
            title: "Cattle of Geryon",
            location: "Erytheia, far western edge of the world",
            description: "Heracles faces the three-bodied monster Geryon while driving the red cattle. The sculptor showed all three of Geryon's bodies to emphasize the creature's supernatural nature and the labour's difficulty.",
            analysis: "Reaching the edge of the world, Heracles established the Pillars of Heracles (Gibraltar). This labour showed heroism expanding the boundaries of the known world - like Olympic competition spreading Greek culture."
        },
        11: {
            title: "Apples of the Hesperides",
            location: "Garden of the Hesperides, far west",
            description: "The famous scene of Atlas returning with the golden apples while Heracles holds up the sky. The sculptor captured the moment of Atlas's attempted deception and Heracles' patient endurance.",
            analysis: "Literally supporting the heavens proved Heracles had divine-level strength. The clever trick with Atlas showed that even heroes must use wit against superior opponents - brain over brawn."
        },
        12: {
            title: "Cerberus",
            location: "The Underworld",
            description: "The final metope shows Heracles emerging from the Underworld with the three-headed Cerberus. The hellhound is subdued but still fearsome, while Heracles appears calm and victorious.",
            analysis: "Conquering death itself was the ultimate heroic achievement. For athletes at Olympia, this represented the pinnacle of human achievement - victory over the impossible through divine favor and personal excellence."
        }
    },

    // Temple Metopes
    westMetopes: [1, 2, 6, 7, 3, 9],
    eastMetopes: [4, 8, 10, 11, 12, 5],

    // Olympic Facts
    olympicFacts: [
        {
            icon: '🏃',
            title: 'The Sacred Grove',
            description: 'After completing his labours, Heracles established the Olympic Games at Olympia to honour his father Zeus. He marked out the sacred Altis grove and established the stadium.'
        },
        {
            icon: '📏',
            title: 'The Stadium',
            description: 'Heracles measured out the original stadium length - 600 feet - by placing one foot in front of the other. This is why a stadium (stadion) became a standard Greek measurement.'
        },
        {
            icon: '🌿',
            title: 'The Sacred Olive',
            description: 'Heracles brought the wild olive from the land of the Hyperboreans to Olympia. Winners received crowns made from its branches - the most prestigious prize in the Greek world.'
        },
        {
            icon: '🏆',
            title: 'The First Competition',
            description: 'Heracles challenged his four brothers to a race and crowned the winner with an olive wreath, establishing the tradition of athletic competition in honour of the gods.'
        }
    ],

    // Significance Themes
    significanceThemes: [
        {
            title: 'Personal Redemption',
            text: 'The labours transformed Heracles from a man guilty of killing his family into a purified hero. Each labour represented a step from guilt to redemption.'
        },
        {
            title: 'Civilising Force',
            text: 'By defeating monsters and clearing dangerous beasts, Heracles made the world safer for humanity. He represents civilisation triumphing over chaos.'
        },
        {
            title: 'Geographic Scope',
            text: 'The labours expanded from local Peloponnesian challenges to the edges of the earth and even the Underworld, showing universal heroism.'
        },
        {
            title: 'Divine Testing',
            text: 'Though initiated by Hera\'s hatred, the labours ultimately proved Heracles worthy of divinity. He earned his place among the gods.'
        }
    ],

    // Key Figures
    figures: {
        'hera': {
            name: 'Hera',
            role: 'Queen of the gods, persecutor of Heracles',
            significance: 'Her jealousy drove the entire narrative. The labours were both her punishment and ultimately the path to Heracles\' glory.'
        },
        'eurystheus': {
            name: 'King Eurystheus',
            role: 'Heracles\' cowardly taskmaster',
            significance: 'Heracles\' cousin who inherited the kingship meant for Heracles. His cowardice (hiding in a bronze jar) provided comic relief.'
        },
        'iolaus': {
            name: 'Iolaus',
            role: 'Heracles\' nephew and companion',
            significance: 'Helped with the Hydra by cauterising the necks. His assistance caused Eurystheus to discount this labour.'
        },
        'atlas': {
            name: 'Atlas',
            role: 'Titan who holds up the sky',
            significance: 'Heracles temporarily took his burden during the eleventh labour, literally supporting the heavens.'
        }
    },

    // Places
    places: {
        'delphi': {
            name: 'Oracle at Delphi',
            description: 'The most important oracle in ancient Greece.',
            significance: 'Where Heracles received the command to serve Eurystheus and perform the labours as penance.'
        },
        'nemea': {
            name: 'Nemea',
            description: 'Valley in the northeastern Peloponnese.',
            significance: 'Site of the first labour. Later hosted the Nemean Games, one of the four Panhellenic festivals.'
        },
        'olympia': {
            name: 'Olympia',
            description: 'Sanctuary of Zeus in the western Peloponnese.',
            significance: 'Where Heracles founded the Olympic Games. The Temple of Zeus displayed his labours in its metopes.'
        },
        'underworld': {
            name: 'The Underworld',
            description: 'Realm of the dead ruled by Hades.',
            significance: 'The ultimate destination - capturing Cerberus proved Heracles could conquer even death itself.'
        }
    }
};

// Load functions
function loadLessonData() {
    loadLearningObjectives();
    loadLabourCategories();
    loadLaboursTimeline();
    loadTempleMetopes();
    loadOlympicFacts();
    loadSignificanceThemes();
}

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

function loadLabourCategories() {
    const container = document.getElementById('labour-categories');
    if (container) {
        container.innerHTML = lessonData.categories.map(cat => `
            <div class="category-card">
                <div class="category-icon">${cat.icon}</div>
                <div class="category-title">${cat.title}</div>
                <div class="category-count">${cat.count}</div>
            </div>
        `).join('');
    }
}

function loadLaboursTimeline() {
    const container1to6 = document.getElementById('labours-1-6');
    const container7to12 = document.getElementById('labours-7-12');
    
    if (container1to6) {
        container1to6.innerHTML = lessonData.labours.slice(0, 6).map(labour => `
            <div class="timeline-labour" onclick="showLabourDetail(${labour.number})">
                <div class="timeline-labour-number">${labour.number}</div>
                <div class="timeline-labour-icon">${labour.icon}</div>
                <div class="timeline-labour-name">${labour.name}</div>
            </div>
        `).join('');
    }
    
    if (container7to12) {
        container7to12.innerHTML = lessonData.labours.slice(6, 12).map(labour => `
            <div class="timeline-labour" onclick="showLabourDetail(${labour.number})">
                <div class="timeline-labour-number">${labour.number}</div>
                <div class="timeline-labour-icon">${labour.icon}</div>
                <div class="timeline-labour-name">${labour.name}</div>
            </div>
        `).join('');
    }
}

function loadTempleMetopes() {
    const westContainer = document.getElementById('west-metopes');
    const eastContainer = document.getElementById('east-metopes');
    
    if (westContainer) {
        westContainer.innerHTML = lessonData.westMetopes.map(num => {
            const labour = lessonData.labours.find(l => l.number === num);
            return `
                <div class="metope" onclick="showMetopeModal(${num})" title="${labour.name}">
                    <img src="../../images/labour${num}.jpg" alt="${labour.name} metope" class="metope-image">
                    <div class="metope-tooltip">${labour.name}</div>
                </div>
            `;
        }).join('');
    }
    
    if (eastContainer) {
        eastContainer.innerHTML = lessonData.eastMetopes.map(num => {
            const labour = lessonData.labours.find(l => l.number === num);
            return `
                <div class="metope" onclick="showMetopeModal(${num})" title="${labour.name}">
                    <img src="../../images/labour${num}.jpg" alt="${labour.name} metope" class="metope-image">
                    <div class="metope-tooltip">${labour.name}</div>
                </div>
            `;
        }).join('');
    }
}

function loadOlympicFacts() {
    const container = document.getElementById('olympic-facts');
    if (container) {
        container.innerHTML = lessonData.olympicFacts.map(fact => `
            <div class="olympic-fact">
                <div class="olympic-icon">${fact.icon}</div>
                <div class="olympic-title">${fact.title}</div>
                <div class="olympic-description">${fact.description}</div>
            </div>
        `).join('');
    }
}

function loadSignificanceThemes() {
    const container = document.getElementById('significance-grid');
    if (container) {
        container.innerHTML = lessonData.significanceThemes.map(theme => `
            <div class="significance-card">
                <div class="significance-title">${theme.title}</div>
                <div class="significance-text">${theme.text}</div>
            </div>
        `).join('');
    }
}

// Interactive Functions
let exploredLabours = new Set();

function showLabourDetail(labourNum) {
    const labour = lessonData.labours.find(l => l.number === labourNum);
    const detailBox = document.getElementById('labour-detail-box');
    
    if (labour && detailBox) {
        // Mark as explored
        exploredLabours.add(labourNum);
        updateProgress();
        
        // Update active states
        document.querySelectorAll('.timeline-labour').forEach(el => {
            el.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        
        // Show detail with reveal buttons
        detailBox.innerHTML = `
            <div class="labour-detail-header">
                <div class="labour-detail-number">${labour.number}</div>
                <div class="labour-detail-info">
                    <h4>${labour.name}</h4>
                    <div class="labour-detail-location">📍 ${labour.location}</div>
                </div>
            </div>
            
            <div class="labour-detail-narrative">
                <p>${labour.significance}</p>
            </div>
            
            <button class="reveal-button" onclick="revealDifficulty(this)">
                Reveal Chief Difficulty ⬇
            </button>
            <div class="reveal-content difficulty">
                <div class="reveal-label">Chief Difficulty</div>
                <div>${labour.challenge}</div>
            </div>
            
            <button class="reveal-button" onclick="revealSolution(this)">
                Reveal How Heracles Succeeded ⬇
            </button>
            <div class="reveal-content solution">
                <div class="reveal-label">How Heracles Succeeded</div>
                <div>${labour.solution}</div>
            </div>
        `;
        detailBox.classList.add('active');
    }
}

function revealDifficulty(button) {
    button.classList.add('revealed');
    button.nextElementSibling.classList.add('revealed');
}

function revealSolution(button) {
    button.classList.add('revealed');
    button.nextElementSibling.classList.add('revealed');
}

function showMetopeModal(labourNum) {
    const metope = lessonData.metopeDetails[labourNum];
    const modal = document.getElementById('metopeModal');
    const modalContent = document.getElementById('metopeModalContent');
    
    if (metope && modal && modalContent) {
        modalContent.innerHTML = `
            <div class="metope-detail-header">
                <div class="metope-detail-number">${labourNum}</div>
                <div class="metope-detail-title">
                    <h3>${metope.title}</h3>
                    <div class="metope-detail-location">📍 ${metope.location}</div>
                </div>
            </div>
            
            <img src="../../images/labour${labourNum}.jpg" alt="${metope.title} metope detail" class="metope-image-large">
            
            <div class="metope-description">
                <h4>The Sculpture</h4>
                <p>${metope.description}</p>
            </div>
            
            <div class="metope-analysis">
                <h4>Why This Labour at Olympia?</h4>
                <p>${metope.analysis}</p>
            </div>
        `;
        modal.style.display = 'block';
    }
}

function closeMetopeModal() {
    document.getElementById('metopeModal').style.display = 'none';
}

function updateProgress() {
    const total = lessonData.labours.length;
    const explored = exploredLabours.size;
    const percentage = (explored / total) * 100;
    
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    if (progressText) {
        if (explored === 0) {
            progressText.textContent = 'Click on labours to explore';
        } else if (explored === total) {
            progressText.textContent = 'All labours explored! 🏆';
        } else {
            progressText.textContent = `${explored} of ${total} labours explored`;
        }
    }
}

// Figure and Place Functions
function showFigureInfo(figureId) {
    const figure = lessonData.figures[figureId];
    if (figure) {
        showInfoPanel('Key Figure', `
            <h4>${figure.name}</h4>
            <p><strong>Role:</strong> ${figure.role}</p>
            <p><strong>Significance:</strong> ${figure.significance}</p>
        `);
    }
}

function showPlaceInfo(placeId) {
    const place = lessonData.places[placeId];
    if (place) {
        showInfoPanel('Key Place', `
            <h4>${place.name}</h4>
            <p><strong>Description:</strong> ${place.description}</p>
            <p><strong>Significance:</strong> ${place.significance}</p>
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

// Navigation
function navigateToLesson(path) {
    window.location.href = path + '.html';
}

// Modal functions
function showInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Window click handler for modals
window.onclick = function(event) {
    const infoModal = document.getElementById('infoModal');
    const metopeModal = document.getElementById('metopeModal');
    
    if (event.target === infoModal) {
        closeInfoModal();
    }
    if (event.target === metopeModal) {
        closeMetopeModal();
    }
}
