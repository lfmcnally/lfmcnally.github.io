// Lesson 1.2: The Gods and Their Iconography - Data File

const lessonData = {
    // Learning Objectives
    learningObjectives: {
        intro: "By the end of this section, you will be able to:",
        objectives: [
            "Identify all 14 Olympian gods (including Hades) in both their Greek and Roman forms",
            "Recognise their key symbols and attributes in ancient art",
            "Understand the differences between Greek and Roman interpretations of the same deities",
            "Explain the concept of iconography and its importance in ancient art",
            "Use epithets to specify particular aspects of gods",
            "Distinguish between the roles and characteristics of major deities"
        ]
    },

    // Gods Data
    gods: [
        {
            id: 'zeus',
            greek: 'Zeus',
            roman: 'Jupiter',
            domain: 'King of the Gods',
            responsibilities: ['Supreme ruler of gods and mortals', 'Controller of weather and storms', 'Upholder of justice and oaths', 'Protector of guests and strangers', 'Father of many gods and heroes'],
            symbols: ['Lightning bolt (primary weapon)', 'Eagle (sacred animal)', 'Sceptre (symbol of kingship)', 'Oak tree (sacred plant)', 'Aegis (protective shield)'],
            appearance: 'Mature, bearded man with a powerful physique. Often shown seated on a throne or standing with a thunderbolt. Wears a crown or wreath.',
            romanDifferences: 'As Jupiter, he was more closely associated with Roman state power and military victory. Jupiter Optimus Maximus (Best and Greatest) was the supreme protector of Rome.'
        },
        {
            id: 'hera',
            greek: 'Hera',
            roman: 'Juno',
            domain: 'Marriage & Family',
            responsibilities: ['Marriage and married women', 'Childbirth and family', 'Protector of women', 'Legitimacy of children', 'Queenly power and authority'],
            symbols: ['Peacock (sacred bird)', 'Diadem (crown)', 'Sceptre (royal authority)', 'Pomegranate (fertility)', 'Cuckoo (Zeus courted her as one)'],
            appearance: 'Mature, beautiful woman with a majestic bearing. Often veiled as a married woman. Wears a crown or diadem. Sometimes shown with a peacock.',
            romanDifferences: 'As Juno, she had additional roles as protector of the Roman state and was part of the Capitoline Triad with Jupiter and Minerva. Juno Moneta warned Romans of danger.'
        },
        {
            id: 'poseidon',
            greek: 'Poseidon',
            roman: 'Neptune',
            domain: 'God of the Sea',
            responsibilities: ['All bodies of water', 'Earthquakes', 'Horses and horse-racing', 'Navigation and sailors', 'Storms at sea'],
            symbols: ['Trident (three-pronged spear)', 'Dolphin (sacred animal)', 'Horse (he created them)', 'Bull (sacrificial animal)', 'Fish and sea creatures'],
            appearance: 'Mature, bearded man similar to Zeus but with wilder hair suggesting sea foam. Often shown with his trident, sometimes riding a chariot pulled by sea-horses.',
            romanDifferences: 'Neptune was less prominent in Roman religion than Poseidon was to the Greeks, as Romans were initially less maritime. Later became important as Roman naval power grew.'
        },
        {
            id: 'demeter',
            greek: 'Demeter',
            roman: 'Ceres',
            domain: 'Harvest & Agriculture',
            responsibilities: ['Grain and agriculture', 'Fertility of the earth', 'The harvest', 'Sacred law and order', 'The cycle of life and death'],
            symbols: ['Wheat sheaves or grain', 'Cornucopia (horn of plenty)', 'Torch (searching for Persephone)', 'Poppy (grows in wheat fields)', 'Serpent (earth fertility)'],
            appearance: 'Mature woman, often veiled, holding wheat sheaves or a torch. Sometimes shown with her daughter Persephone. Wears a crown of grain.',
            romanDifferences: 'As Ceres, she was especially important to the Roman plebs (common people). The Cerealia festival and grain distributions (from which we get "cereal") were central to Roman life.'
        },
        {
            id: 'athena',
            greek: 'Athena',
            roman: 'Minerva',
            domain: 'Wisdom & War',
            responsibilities: ['Wisdom and intelligence', 'Strategic warfare', 'Crafts, especially weaving', 'Protection of cities', 'Justice and law'],
            symbols: ['Owl (wisdom)', 'Aegis with Gorgon head', 'Olive tree (gift to Athens)', 'Spear and shield', 'Helmet'],
            appearance: 'Young woman in full armour, including helmet, spear, and shield. Often shown with an owl. The aegis (breastplate) bears the head of Medusa.',
            romanDifferences: 'Minerva was part of the Capitoline Triad and had stronger associations with crafts and guilds. Less emphasis on warfare than Greek Athena.'
        },
        {
            id: 'apollo',
            greek: 'Apollo',
            roman: 'Apollo',
            domain: 'Music & Prophecy',
            responsibilities: ['Music and poetry', 'Prophecy and oracles', 'Healing and disease', 'Archery', 'The sun (later periods)', 'Youth and beauty'],
            symbols: ['Lyre (musical instrument)', 'Laurel wreath and tree', 'Bow and arrows', 'Raven (prophecy)', 'Python (snake he killed)'],
            appearance: 'Eternally youthful, beardless, beautiful young man. Often shown with a lyre or bow. Wears a laurel wreath. Sometimes depicted with sun rays.',
            romanDifferences: 'Apollo kept his Greek name in Rome. Romans especially valued his role as a healing god and bringer of prophecy. Augustus made Apollo his patron deity.'
        },
        {
            id: 'artemis',
            greek: 'Artemis',
            roman: 'Diana',
            domain: 'Hunt & Moon',
            responsibilities: ['Hunting and wild animals', 'The moon', 'Virginity and young women', 'Childbirth (paradoxically)', 'Protection of children'],
            symbols: ['Bow and arrows', 'Deer or stag', 'Crescent moon', 'Hunting dog', 'Cypress tree'],
            appearance: 'Young woman in a short tunic suitable for hunting. Carries a bow and quiver of arrows. Often accompanied by deer or hunting dogs. Sometimes shown with a crescent moon.',
            romanDifferences: 'Diana had stronger lunar associations than Artemis and absorbed traits from Italian goddesses. Her shrine at Lake Nemi was especially important.'
        },
        {
            id: 'aphrodite',
            greek: 'Aphrodite',
            roman: 'Venus',
            domain: 'Love & Beauty',
            responsibilities: ['Love and sexual desire', 'Beauty and pleasure', 'Procreation', 'Seafaring (born from sea foam)', 'Gardens'],
            symbols: ['Dove (sacred bird)', 'Rose (sacred flower)', 'Seashell (birth from sea)', 'Mirror (beauty)', 'Myrtle tree'],
            appearance: 'Beautiful woman, often nude or partially draped. Sometimes shown rising from the sea or with her son Eros/Cupid. Accompanied by doves.',
            romanDifferences: 'As Venus, she was the mother of Aeneas and thus ancestress of the Roman people. Julius Caesar claimed descent from Venus Genetrix (Venus the Mother).'
        },
        {
            id: 'ares',
            greek: 'Ares',
            roman: 'Mars',
            domain: 'War & Violence',
            responsibilities: ['War and violence', 'Courage in battle', 'Military might', 'Raw fighting spirit', 'Civil order (Roman)'],
            symbols: ['Spear and shield', 'Helmet', 'Sword', 'Vulture and dog', 'Burning torch'],
            appearance: 'Young or mature warrior in full armour. Carries weapons and shield. Often shown with a helmet. Sometimes accompanied by his sons Fear and Panic.',
            romanDifferences: 'Mars was far more respected than Ares. Father of Romulus and Remus, he was a protector of Rome and agriculture. March (Martius) was named after him.'
        },
        {
            id: 'hephaestus',
            greek: 'Hephaestus',
            roman: 'Vulcan',
            domain: 'Forge & Fire',
            responsibilities: ['Metalworking and craftsmen', 'Fire and volcanoes', 'Technology and invention', 'Creating divine weapons', 'Masonry and sculpture'],
            symbols: ['Hammer and tongs', 'Anvil', 'Donkey (rides one)', 'Crane (sacred bird)', 'Volcano'],
            appearance: 'Bearded man with a powerful upper body but lame legs. Often shown at his forge or seated. Sometimes depicted with a crutch or riding a donkey.',
            romanDifferences: 'As Vulcan, associated more strongly with destructive fire and volcanoes. The Vulcanalia festival aimed to prevent fires during the hot summer months.'
        },
        {
            id: 'hermes',
            greek: 'Hermes',
            roman: 'Mercury',
            domain: 'Messenger & Trade',
            responsibilities: ['Messages between gods and mortals', 'Trade and commerce', 'Thieves and cunning', 'Guiding souls to underworld', 'Travel and boundaries'],
            symbols: ['Caduceus (winged staff with snakes)', 'Winged sandals (talaria)', 'Winged cap (petasos)', 'Tortoise (made first lyre from shell)', 'Ram'],
            appearance: 'Young, athletic man with winged sandals and cap. Carries the caduceus. Sometimes shown as a traveller with a cloak.',
            romanDifferences: 'Mercury was especially important for Roman commerce and trade. His temple near the Circus Maximus was a center of commercial activity.'
        },
        {
            id: 'hestia',
            greek: 'Hestia',
            roman: 'Vesta',
            domain: 'Hearth & Home',
            responsibilities: ['The hearth fire', 'Home and family', 'Domestic life', 'State hearth', 'Sacred flame'],
            symbols: ['Hearth fire', 'Kettle or cooking pot', 'Veil (modesty)', 'Key (household)', 'Circle (hearth shape)'],
            appearance: 'Modestly veiled woman, often seated. Rarely depicted in art as she was non-anthropomorphic in nature. Sometimes shown tending a flame.',
            romanDifferences: 'Vesta was far more prominent in Roman state religion. The Vestal Virgins maintained her eternal flame, crucial for Rome\'s survival.'
        },
        {
            id: 'dionysus',
            greek: 'Dionysus',
            roman: 'Bacchus',
            domain: 'Wine & Theatre',
            responsibilities: ['Wine and viticulture', 'Theatre and drama', 'Religious ecstasy', 'Fertility', 'Madness and liberation'],
            symbols: ['Thyrsus (pine-cone staff)', 'Grapevine and ivy', 'Wine cup (kantharos)', 'Leopard or panther', 'Theatre masks'],
            appearance: 'Young, effeminate man with long hair, often wreathed in ivy or vine leaves. Sometimes shown with satyrs and maenads. Can appear drunk or ecstatic.',
            romanDifferences: 'Initially resisted as foreign. The Bacchanalia were suppressed in 186 BC as threatening to Roman order. Later accepted but closely regulated.'
        },
        {
            id: 'hades',
            greek: 'Hades',
            roman: 'Pluto',
            domain: 'Underworld',
            responsibilities: ['The dead and underworld', 'Funeral rites', 'Hidden wealth of earth', 'Justice for the dead', 'Oaths and curses'],
            symbols: ['Cerberus (three-headed dog)', 'Cornucopia (earth\'s wealth)', 'Cypress tree (death)', 'Key (locks underworld)', 'Bident (two-pronged fork)'],
            appearance: 'Dark, bearded man similar to Zeus but more severe. Often shown with Persephone. Sometimes holds a cornucopia showing earth\'s hidden wealth.',
            romanDifferences: 'As Pluto (wealth), Romans emphasised his role as giver of earth\'s riches more than Greeks did. Often conflated with Dis Pater, an earlier Roman underworld god.'
        }
    ],

    // Epithets Data
    epithets: [
        { name: 'Zeus Xenios', meaning: 'Protector of guests and hospitality' },
        { name: 'Athena Nike', meaning: 'Athena as bringer of victory' },
        { name: 'Apollo Pythios', meaning: 'Apollo of Delphi (from slaying Python)' },
        { name: 'Artemis Agrotera', meaning: 'Artemis of the wild lands' },
        { name: 'Aphrodite Urania', meaning: 'Heavenly/spiritual love' },
        { name: 'Dionysus Eleutherios', meaning: 'Dionysus the liberator' }
    ],

    // Definitions for interactive terms
    definitions: {
        'iconography': {
            term: 'Iconography',
            definition: 'The visual symbols and attributes used to identify gods and heroes in ancient art.',
            context: 'Iconography was essential for identification in a largely illiterate society. A figure holding a trident was immediately recognisable as Poseidon/Neptune, even without labels.'
        },
        'epithets': {
            term: 'Epithets',
            definition: 'Additional names or phrases that specify a particular aspect or local version of a deity.',
            context: 'Epithets allowed worshippers to invoke the specific power they needed. Zeus Xenios protected guests, while Zeus Horkios oversaw oaths. Using the right epithet was crucial for effective prayer.'
        },
        'syncretism': {
            term: 'Religious Syncretism',
            definition: 'The blending of different religious traditions to create new forms of worship.',
            context: 'Romans didn\'t simply copy Greek gods but merged them with existing Italian deities. This created subtle differences - Mars was more respected than Ares, Diana absorbed local goddess traits.'
        },
        'bacchanalia': {
            term: 'Bacchanalia',
            definition: 'Wild, ecstatic festivals in honour of Bacchus/Dionysus involving wine, dancing, and ritual frenzy.',
            context: 'The Roman Senate banned the Bacchanalia in 186 BC, fearing they promoted immorality and conspiracy. This shows Roman anxiety about foreign cults and loss of control.'
        }
    },

    // Primary Sources
    primarySources: [
        {
            text: "The artists give to each god the symbols by which they may be known: to Zeus the thunderbolt, to Poseidon the trident, to Apollo the lyre.",
            citation: "Pausanias, Description of Greece 5.11.8"
        },
        {
            text: "The Romans have made the Greek gods more serious and dignified, as befits the rulers of the world.",
            citation: "Dionysius of Halicarnassus, Roman Antiquities 2.20"
        }
    ]
};

// Function to load lesson data into HTML
function loadLessonData() {
    // Load learning objectives
    loadLearningObjectives();
    
    // Load gods grid
    loadGodsGrid();
    
    // Load comparison content
    loadComparisonContent();
    
    // Load iconography content
    loadIconographyContent();
    
    // Load epithets content
    loadEpithetsContent();
    
    // Load differences content
    loadDifferencesContent();
    
    // Load art content
    loadArtContent();
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

// Load Gods Grid
function loadGodsGrid() {
    const container = document.getElementById('gods-grid');
    if (container) {
        container.innerHTML = lessonData.gods.map(god => `
            <div class="god-card" onclick="showGodDetails('${god.id}')">
                <img src="../../images/${god.id}.jpg" alt="${god.greek}" class="god-image">
                <h4>${god.greek}</h4>
                <div class="god-names">${god.greek} / ${god.roman}</div>
                <div class="god-domain">${god.domain}</div>
            </div>
        `).join('');
    }
}

// Load Comparison Content
function loadComparisonContent() {
    const container = document.getElementById('comparison-content');
    if (container) {
        container.innerHTML = `
            <p>When the Romans encountered Greek culture, they didn't simply copy the Greek gods - they <span class="key-concept" onclick="showConceptInfo('syncretism')">syncretised</span> them with their own existing deities. This process created subtle but important differences between Greek and Roman versions of the same gods.</p>
        `;
    }
    
    // Load comparison table
    const tableContainer = document.getElementById('comparison-table');
    if (tableContainer) {
        let html = `
            <table>
                <thead>
                    <tr>
                        <th>Greek Name</th>
                        <th>Roman Name</th>
                        <th>Key Responsibilities</th>
                        <th>Main Symbols</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        lessonData.gods.forEach(god => {
            html += `
                <tr>
                    <td class="greek-name">${god.greek}</td>
                    <td class="roman-name">${god.roman}</td>
                    <td>${god.responsibilities.slice(0, 2).join(', ')}</td>
                    <td>${god.symbols.slice(0, 2).join(', ')}</td>
                </tr>
            `;
        });
        
        html += '</tbody></table>';
        tableContainer.innerHTML = html;
    }
}

// Load Iconography Content
function loadIconographyContent() {
    const container = document.getElementById('iconography-content');
    if (container) {
        container.innerHTML = `
            <p>Ancient artists used consistent <span class="key-term" onclick="showDefinition('iconography')">iconographic symbols</span> to make gods instantly recognisable. These visual clues were essential in a world where many people couldn't read but needed to identify divine figures in temples, on pottery, and in public art.</p>
            
            <h4>Key Identification Principles</h4>
            <ul>
                <li><strong>Attributes:</strong> Objects associated with the god's power (Zeus's thunderbolt, Poseidon's trident)</li>
                <li><strong>Animals:</strong> Sacred creatures that accompanied gods (Athena's owl, Hera's peacock)</li>
                <li><strong>Clothing and appearance:</strong> Specific garments or physical features (Dionysus's ivy crown, Apollo's youthful beauty)</li>
                <li><strong>Context:</strong> Activities or settings that reveal identity (Hephaestus at a forge, Artemis hunting)</li>
            </ul>
            
            <div class="primary-source">
                "${lessonData.primarySources[0].text}"
                <div class="source-citation">— ${lessonData.primarySources[0].citation}</div>
            </div>
        `;
    }
}

// Load Epithets Content
function loadEpithetsContent() {
    const container = document.getElementById('epithets-content');
    if (container) {
        container.innerHTML = `
            <p><span class="key-term" onclick="showDefinition('epithets')">Epithets</span> were additional names that specified particular aspects or local versions of a god. Understanding epithets is crucial for interpreting ancient texts and religious practices.</p>
            
            <h4>Common Epithets and Their Meanings</h4>
        `;
    }
    
    // Load epithets grid
    const gridContainer = document.getElementById('epithets-grid');
    if (gridContainer) {
        gridContainer.innerHTML = lessonData.epithets.map(epithet => `
            <div class="epithet-card">
                <h4>${epithet.name}</h4>
                <p>${epithet.meaning}</p>
            </div>
        `).join('');
    }
}

// Load Differences Content
function loadDifferencesContent() {
    const container = document.getElementById('differences-content');
    if (container) {
        container.innerHTML = `
            <p>While the Romans adopted Greek gods, they often emphasised different aspects based on their cultural values. Understanding these differences helps explain variations in ancient art and literature.</p>
            
            <h4>Key Differences</h4>
            <ul>
                <li><strong>Mars vs Ares:</strong> The Greeks saw Ares as brutal and chaotic, often mocked in myths. Romans honoured Mars as a noble protector, father of Romulus and defender of the state.</li>
                <li><strong>Minerva vs Athena:</strong> While both were wisdom goddesses, Minerva had stronger associations with crafts and trade guilds in Rome, reflecting Roman commercial interests.</li>
                <li><strong>Diana vs Artemis:</strong> Diana absorbed attributes from local Italian goddesses, becoming more associated with the moon and women's mysteries than her Greek counterpart.</li>
                <li><strong>Bacchus vs Dionysus:</strong> Romans initially resisted Dionysian worship as foreign and dangerous, leading to the suppression of <span class="key-term" onclick="showDefinition('bacchanalia')">Bacchanalia</span> in 186 BC.</li>
            </ul>
            
            <div class="primary-source">
                "${lessonData.primarySources[1].text}"
                <div class="source-citation">— ${lessonData.primarySources[1].citation}</div>
            </div>
        `;
    }
}

// Load Art Content
function loadArtContent() {
    const container = document.getElementById('art-content');
    if (container) {
        container.innerHTML = `
            <p>Gods appeared everywhere in ancient art - painted on pottery, carved in temple pediments, cast in bronze statues, and struck on coins. Each medium had its own conventions for divine representation.</p>
            
            <h4>Common Artistic Conventions</h4>
            <ul>
                <li><strong>Scale:</strong> Gods often appeared larger than mortals in the same scene</li>
                <li><strong>Ideal beauty:</strong> Divine figures showed perfect proportions and ageless features (except Hephaestus)</li>
                <li><strong>Narrative scenes:</strong> Gods were shown in mythological episodes that revealed their nature</li>
                <li><strong>Cult statues:</strong> Temple statues showed gods in their most formal, powerful aspect</li>
            </ul>
            
            <p>The ability to identify gods in art was essential for understanding public monuments, temple decorations, and even everyday objects. This visual literacy was part of basic cultural knowledge in the ancient world.</p>
        `;
    }
}

// Interactive Functions
function showGodDetails(godId) {
    const detailsDiv = document.getElementById('gods-details');
    const god = lessonData.gods.find(g => g.id === godId);
    
    if (god && detailsDiv) {
        detailsDiv.innerHTML = `
            <h4>${god.greek} / ${god.roman}</h4>
            <p><em>${god.domain}</em></p>
            
            <div class="god-info-grid">
                <div class="god-info-section">
                    <h5>Responsibilities</h5>
                    <ul>
                        ${god.responsibilities.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="god-info-section">
                    <h5>Symbols & Attributes</h5>
                    <ul>
                        ${god.symbols.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="god-info-section" style="margin-top: 1rem;">
                <h5>Appearance in Art</h5>
                <p>${god.appearance}</p>
            </div>
            
            <div class="god-info-section" style="margin-top: 1rem;">
                <h5>Greek vs Roman</h5>
                <p>${god.romanDifferences}</p>
            </div>
        `;
        detailsDiv.style.display = 'block';
        
        // Update active state
        document.querySelectorAll('.god-card').forEach(card => card.classList.remove('active'));
        event.target.closest('.god-card').classList.add('active');
    }
}

// Setup Interactive Content
function setupInteractiveContent() {
    // Key terms and concepts are handled by onclick attributes in HTML
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

// Navigation function
function navigateToLesson(path) {
    window.location.href = path + '.html';
}
