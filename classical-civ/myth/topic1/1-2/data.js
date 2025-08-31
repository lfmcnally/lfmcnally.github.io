// Gods data
const gods = {
    'zeus': {
        name: 'Zeus',
        romanName: 'Jupiter',
        domain: 'King of the Gods',
        title: 'King of the Gods, Ruler of the Sky',
        responsibilities: [
            'Supreme ruler of gods and mortals',
            'Controller of weather and storms',
            'Upholder of justice and oaths',
            'Protector of guests and strangers',
            'Father of many gods and heroes'
        ],
        symbols: [
            'Lightning bolt (primary weapon)',
            'Eagle (sacred animal)',
            'Sceptre (symbol of kingship)',
            'Oak tree (sacred plant)',
            'Aegis (protective shield)'
        ],
        appearance: 'Mature, bearded man with a powerful physique. Often shown seated on a throne or standing with a thunderbolt. Wears a crown or wreath.',
        romanDifferences: 'As Jupiter, he was more closely associated with Roman state power and military victory. Jupiter Optimus Maximus (Best and Greatest) was the supreme protector of Rome.',
        image: 'images/zeus.jpg'
    },
    'hera': {
        name: 'Hera',
        romanName: 'Juno',
        domain: 'Marriage & Family',
        title: 'Queen of the Gods, Goddess of Marriage',
        responsibilities: [
            'Marriage and married women',
            'Childbirth and family',
            'Protector of women',
            'Legitimacy of children',
            'Queenly power and authority'
        ],
        symbols: [
            'Peacock (sacred bird)',
            'Diadem (crown)',
            'Sceptre (royal authority)',
            'Pomegranate (fertility)',
            'Cuckoo (Zeus courted her as one)'
        ],
        appearance: 'Mature, beautiful woman with a majestic bearing. Often veiled as a married woman. Wears a crown or diadem. Sometimes shown with a peacock.',
        romanDifferences: 'As Juno, she had additional roles as protector of the Roman state and was part of the Capitoline Triad with Jupiter and Minerva. Juno Moneta warned Romans of danger.',
        image: 'images/hera.jpg'
    },
    'poseidon': {
        name: 'Poseidon',
        romanName: 'Neptune',
        domain: 'God of the Sea',
        title: 'God of the Sea, Earth-Shaker',
        responsibilities: [
            'All bodies of water',
            'Earthquakes',
            'Horses and horse-racing',
            'Navigation and sailors',
            'Storms at sea'
        ],
        symbols: [
            'Trident (three-pronged spear)',
            'Dolphin (sacred animal)',
            'Horse (he created them)',
            'Bull (sacrificial animal)',
            'Fish and sea creatures'
        ],
        appearance: 'Mature, bearded man similar to Zeus but with wilder hair suggesting sea foam. Often shown with his trident, sometimes riding a chariot pulled by sea-horses.',
        romanDifferences: 'Neptune was less prominent in Roman religion than Poseidon was to the Greeks, as Romans were initially less maritime. Later became important as Roman naval power grew.',
        image: 'images/poseidon.jpg'
    },
    'demeter': {
        name: 'Demeter',
        romanName: 'Ceres',
        domain: 'Harvest & Agriculture',
        title: 'Goddess of Agriculture and the Harvest',
        responsibilities: [
            'Grain and agriculture',
            'Fertility of the earth',
            'The harvest',
            'Sacred law and order',
            'The cycle of life and death'
        ],
        symbols: [
            'Wheat sheaves or grain',
            'Cornucopia (horn of plenty)',
            'Torch (searching for Persephone)',
            'Poppy (grows in wheat fields)',
            'Serpent (earth fertility)'
        ],
        appearance: 'Mature woman, often veiled, holding wheat sheaves or a torch. Sometimes shown with her daughter Persephone. Wears a crown of grain.',
        romanDifferences: 'As Ceres, she was especially important to the Roman plebs (common people). The Cerealia festival and grain distributions (from which we get "cereal") were central to Roman life.',
        image: 'images/demeter.jpg'
    },
    'athena': {
        name: 'Athena',
        romanName: 'Minerva',
        domain: 'Wisdom & War',
        title: 'Goddess of Wisdom and Strategic Warfare',
        responsibilities: [
            'Wisdom and intelligence',
            'Strategic warfare',
            'Crafts, especially weaving',
            'Protection of cities',
            'Justice and law'
        ],
        symbols: [
            'Owl (wisdom)',
            'Aegis with Gorgon head',
            'Olive tree (gift to Athens)',
            'Spear and shield',
            'Helmet'
        ],
        appearance: 'Young woman in full armour, including helmet, spear, and shield. Often shown with an owl. The aegis (breastplate) bears the head of Medusa.',
        romanDifferences: 'Minerva was part of the Capitoline Triad and had stronger associations with crafts and guilds. Less emphasis on warfare than Greek Athena.',
        image: 'images/athena.jpg'
    },
    'apollo': {
        name: 'Apollo',
        romanName: 'Apollo',
        domain: 'Music & Prophecy',
        title: 'God of Music, Prophecy, and the Sun',
        responsibilities: [
            'Music and poetry',
            'Prophecy and oracles',
            'Healing and disease',
            'Archery',
            'The sun (later periods)',
            'Youth and beauty'
        ],
        symbols: [
            'Lyre (musical instrument)',
            'Laurel wreath and tree',
            'Bow and arrows',
            'Raven (prophecy)',
            'Python (snake he killed)'
        ],
        appearance: 'Eternally youthful, beardless, beautiful young man. Often shown with a lyre or bow. Wears a laurel wreath. Sometimes depicted with sun rays.',
        romanDifferences: 'Apollo kept his Greek name in Rome. Romans especially valued his role as a healing god and bringer of prophecy. Augustus made Apollo his patron deity.',
        image: 'images/apollo.jpg'
    },
    'artemis': {
        name: 'Artemis',
        romanName: 'Diana',
        domain: 'Hunt & Moon',
        title: 'Goddess of the Hunt and the Moon',
        responsibilities: [
            'Hunting and wild animals',
            'The moon',
            'Virginity and young women',
            'Childbirth (paradoxically)',
            'Protection of children'
        ],
        symbols: [
            'Bow and arrows',
            'Deer or stag',
            'Crescent moon',
            'Hunting dog',
            'Cypress tree'
        ],
        appearance: 'Young woman in a short tunic suitable for hunting. Carries a bow and quiver of arrows. Often accompanied by deer or hunting dogs. Sometimes shown with a crescent moon.',
        romanDifferences: 'Diana had stronger lunar associations than Artemis and absorbed traits from Italian goddesses. Her shrine at Lake Nemi was especially important.',
        image: 'images/artemis.jpg'
    },
    'aphrodite': {
        name: 'Aphrodite',
        romanName: 'Venus',
        domain: 'Love & Beauty',
        title: 'Goddess of Love and Beauty',
        responsibilities: [
            'Love and sexual desire',
            'Beauty and pleasure',
            'Procreation',
            'Seafaring (born from sea foam)',
            'Gardens'
        ],
        symbols: [
            'Dove (sacred bird)',
            'Rose (sacred flower)',
            'Seashell (birth from sea)',
            'Mirror (beauty)',
            'Myrtle tree'
        ],
        appearance: 'Beautiful woman, often nude or partially draped. Sometimes shown rising from the sea or with her son Eros/Cupid. Accompanied by doves.',
        romanDifferences: 'As Venus, she was the mother of Aeneas and thus ancestress of the Roman people. Julius Caesar claimed descent from Venus Genetrix (Venus the Mother).',
        image: 'images/aphrodite.jpg'
    },
    'ares': {
        name: 'Ares',
        romanName: 'Mars',
        domain: 'War & Violence',
        title: 'God of War',
        responsibilities: [
            'War and violence',
            'Courage in battle',
            'Military might',
            'Raw fighting spirit',
            'Civil order (Roman)'
        ],
        symbols: [
            'Spear and shield',
            'Helmet',
            'Sword',
            'Vulture and dog',
            'Burning torch'
        ],
        appearance: 'Young or mature warrior in full armour. Carries weapons and shield. Often shown with a helmet. Sometimes accompanied by his sons Fear and Panic.',
        romanDifferences: 'Mars was far more respected than Ares. Father of Romulus and Remus, he was a protector of Rome and agriculture. March (Martius) was named after him.',
        image: 'images/ares.jpg'
    },
    'hephaestus': {
        name: 'Hephaestus',
        romanName: 'Vulcan',
        domain: 'Forge & Fire',
        title: 'God of Fire and the Forge',
        responsibilities: [
            'Metalworking and craftsmen',
            'Fire and volcanoes',
            'Technology and invention',
            'Creating divine weapons',
            'Masonry and sculpture'
        ],
        symbols: [
            'Hammer and tongs',
            'Anvil',
            'Donkey (rides one)',
            'Crane (sacred bird)',
            'Volcano'
        ],
        appearance: 'Bearded man with a powerful upper body but lame legs. Often shown at his forge or seated. Sometimes depicted with a crutch or riding a donkey.',
        romanDifferences: 'As Vulcan, associated more strongly with destructive fire and volcanoes. The Vulcanalia festival aimed to prevent fires during the hot summer months.',
        image: 'images/hephaestus.jpg'
    },
    'hermes': {
        name: 'Hermes',
        romanName: 'Mercury',
        domain: 'Messenger & Trade',
        title: 'Messenger God, Guide of Souls',
        responsibilities: [
            'Messages between gods and mortals',
            'Trade and commerce',
            'Thieves and cunning',
            'Guiding souls to underworld',
            'Travel and boundaries'
        ],
        symbols: [
            'Caduceus (winged staff with snakes)',
            'Winged sandals (talaria)',
            'Winged cap (petasos)',
            'Tortoise (made first lyre from shell)',
            'Ram'
        ],
        appearance: 'Young, athletic man with winged sandals and cap. Carries the caduceus. Sometimes shown as a traveller with a cloak.',
        romanDifferences: 'Mercury was especially important for Roman commerce and trade. His temple near the Circus Maximus was a center of commercial activity.',
        image: 'images/hermes.jpg'
    },
    'hestia': {
        name: 'Hestia',
        romanName: 'Vesta',
        domain: 'Hearth & Home',
        title: 'Goddess of the Hearth',
        responsibilities: [
            'The hearth fire',
            'Home and family',
            'Domestic life',
            'State hearth',
            'Sacred flame'
        ],
        symbols: [
            'Hearth fire',
            'Kettle or cooking pot',
            'Veil (modesty)',
            'Key (household)',
            'Circle (hearth shape)'
        ],
        appearance: 'Modestly veiled woman, often seated. Rarely depicted in art as she was non-anthropomorphic in nature. Sometimes shown tending a flame.',
        romanDifferences: 'Vesta was far more prominent in Roman state religion. The Vestal Virgins maintained her eternal flame, crucial for Rome\'s survival.',
        image: 'images/hestia.jpg'
    },
    'dionysus': {
        name: 'Dionysus',
        romanName: 'Bacchus',
        domain: 'Wine & Theatre',
        title: 'God of Wine, Theatre, and Ecstasy',
        responsibilities: [
            'Wine and viticulture',
            'Theatre and drama',
            'Religious ecstasy',
            'Fertility',
            'Madness and liberation'
        ],
        symbols: [
            'Thyrsus (pine-cone staff)',
            'Grapevine and ivy',
            'Wine cup (kantharos)',
            'Leopard or panther',
            'Theatre masks'
        ],
        appearance: 'Young, effeminate man with long hair, often wreathed in ivy or vine leaves. Sometimes shown with satyrs and maenads. Can appear drunk or ecstatic.',
        romanDifferences: 'Initially resisted as foreign. The Bacchanalia were suppressed in 186 BC as threatening to Roman order. Later accepted but closely regulated.',
        image: 'images/dionysus.jpg'
    },
    'hades': {
        name: 'Hades',
        romanName: 'Pluto',
        domain: 'Underworld',
        title: 'Lord of the Underworld',
        responsibilities: [
            'The dead and underworld',
            'Funeral rites',
            'Hidden wealth of earth',
            'Justice for the dead',
            'Oaths and curses'
        ],
        symbols: [
            'Cerberus (three-headed dog)',
            'Cornucopia (earth\'s wealth)',
            'Cypress tree (death)',
            'Key (locks underworld)',
            'Bident (two-pronged fork)'
        ],
        appearance: 'Dark, bearded man similar to Zeus but more severe. Often shown with Persephone. Sometimes holds a cornucopia showing earth\'s hidden wealth.',
        romanDifferences: 'As Pluto (wealth), Romans emphasised his role as giver of earth\'s riches more than Greeks did. Often conflated with Dis Pater, an earlier Roman underworld god.',
        image: 'images/hades.jpg'
    }
};

// Comparison table data
const comparisonData = [
    { greek: 'Zeus', roman: 'Jupiter', responsibilities: 'King of gods, sky, justice', symbols: 'Eagle, lightning bolt, sceptre' },
    { greek: 'Hera', roman: 'Juno', responsibilities: 'Marriage, women, childbirth', symbols: 'Peacock, diadem, sceptre' },
    { greek: 'Poseidon', roman: 'Neptune', responsibilities: 'Sea, earthquakes, horses', symbols: 'Trident, dolphin, horse' },
    { greek: 'Demeter', roman: 'Ceres', responsibilities: 'Agriculture, harvest, nature', symbols: 'Wheat, cornucopia, torch' },
    { greek: 'Athena', roman: 'Minerva', responsibilities: 'Wisdom, warfare, crafts', symbols: 'Owl, aegis, olive tree' },
    { greek: 'Apollo', roman: 'Apollo', responsibilities: 'Music, prophecy, sun, healing', symbols: 'Lyre, laurel, bow and arrow' },
    { greek: 'Artemis', roman: 'Diana', responsibilities: 'Hunt, moon, childbirth', symbols: 'Bow and arrow, deer, moon' },
    { greek: 'Aphrodite', roman: 'Venus', responsibilities: 'Love, beauty, pleasure', symbols: 'Dove, rose, shell, mirror' },
    { greek: 'Ares', roman: 'Mars', responsibilities: 'War, violence, courage', symbols: 'Spear, shield, helmet, vulture' },
    { greek: 'Hephaestus', roman: 'Vulcan', responsibilities: 'Fire, metalworking, volcanoes', symbols: 'Hammer, anvil, tongs' },
    { greek: 'Hermes', roman: 'Mercury', responsibilities: 'Messages, trade, thieves, travel', symbols: 'Caduceus, winged sandals, cap' },
    { greek: 'Hestia', roman: 'Vesta', responsibilities: 'Hearth, home, family', symbols: 'Hearth fire, kettle, veil' },
    { greek: 'Dionysus', roman: 'Bacchus', responsibilities: 'Wine, theatre, festivity, madness', symbols: 'Thyrsus, vine, wine cup' },
    { greek: 'Hades', roman: 'Pluto', responsibilities: 'Underworld, dead, wealth', symbols: 'Cerberus, cornucopia, cypress' }
];

// Epithets data
const epithets = [
    { name: 'Zeus Xenios', meaning: 'Protector of guests and hospitality' },
    { name: 'Athena Nike', meaning: 'Athena as bringer of victory' },
    { name: 'Apollo Pythios', meaning: 'Apollo of Delphi (from slaying Python)' },
    { name: 'Artemis Agrotera', meaning: 'Artemis of the wild lands' },
    { name: 'Aphrodite Urania', meaning: 'Heavenly/spiritual love' },
    { name: 'Dionysus Eleutherios', meaning: 'Dionysus the liberator' }
];

// Definitions data
const definitions = {
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
    'bacchanalia': {
        term: 'Bacchanalia',
        definition: 'Wild, ecstatic festivals in honour of Bacchus/Dionysus involving wine, dancing, and ritual frenzy.',
        context: 'The Roman Senate banned the Bacchanalia in 186 BC, fearing they promoted immorality and conspiracy. This shows Roman anxiety about foreign cults and loss of control.'
    }
};

// Concepts data
const concepts = {
    'syncretism': {
        concept: 'Religious Syncretism',
        explanation: 'The blending of different religious traditions to create new forms of worship.',
        importance: 'Romans didn\'t simply copy Greek gods but merged them with existing Italian deities. This created subtle differences - Mars was more respected than Ares, Diana absorbed local goddess traits. Understanding syncretism explains why the "same" god could be quite different in each culture.'
    }
};

// Initialize the page when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializeGodsGrid();
    initializeComparisonTable();
    initializeEpithets();
    setupInteractiveContent();
});

// Create gods grid
function initializeGodsGrid() {
    const godsGrid = document.getElementById('gods-grid');
    const godOrder = ['zeus', 'hera', 'poseidon', 'demeter', 'athena', 'apollo', 'artemis', 
                      'aphrodite', 'ares', 'hephaestus', 'hermes', 'hestia', 'dionysus', 'hades'];
    
    godOrder.forEach(godId => {
        const god = gods[godId];
        const godCard = document.createElement('div');
        godCard.className = 'god-card';
        godCard.onclick = () => showGodDetails(godId);
        
        godCard.innerHTML = `
            <div class="god-image">Image: ${god.name}</div>
            <div class="god-name">${god.name}</div>
            <div class="god-domain">${god.domain}</div>
        `;
        
        godsGrid.appendChild(godCard);
    });
}

// Create comparison table
function initializeComparisonTable() {
    const tableContainer = document.getElementById('comparison-table');
    
    const table = document.createElement('table');
    
    // Create header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Greek Name</th>
            <th>Roman Name</th>
            <th>Key Responsibilities</th>
            <th>Main Symbols</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Create body
    const tbody = document.createElement('tbody');
    comparisonData.forEach(god => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="greek-name">${god.greek}</td>
            <td class="roman-name">${god.roman}</td>
            <td>${god.responsibilities}</td>
            <td>${god.symbols}</td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    
    tableContainer.appendChild(table);
}

// Create epithets grid
function initializeEpithets() {
    const epithetsGrid = document.getElementById('epithets-grid');
    
    epithets.forEach(epithet => {
        const epithetCard = document.createElement('div');
        epithetCard.className = 'epithet-card';
        
        epithetCard.innerHTML = `
            <div class="epithet-name">${epithet.name}</div>
            <div class="epithet-meaning">${epithet.meaning}</div>
        `;
        
        epithetsGrid.appendChild(epithetCard);
    });
}

// Show god details
function showGodDetails(godId) {
    // Remove active class from all cards
    document.querySelectorAll('.god-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to clicked card
    event.currentTarget.classList.add('active');
    
    const god = gods[godId];
    const detailsContainer = document.getElementById('god-details');
    
    const detailsHTML = `
        <div class="god-details-content active">
            <h3>${god.name} / ${god.romanName}</h3>
            <p><em>${god.title}</em></p>
            
            <div class="god-info-grid">
                <div class="god-info-section">
                    <h4>Responsibilities</h4>
                    <ul>
                        ${god.responsibilities.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="god-info-section">
                    <h4>Symbols & Attributes</h4>
                    <ul>
                        ${god.symbols.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="god-info-section" style="margin-top: 1rem;">
                <h4>Appearance in Art</h4>
                <p>${god.appearance}</p>
            </div>
            
            <div class="god-info-section" style="margin-top: 1rem;">
                <h4>Greek vs Roman</h4>
                <p>${god.romanDifferences}</p>
            </div>
        </div>
    `;
    
    detailsContainer.innerHTML = detailsHTML;
}

// Setup interactive content
function setupInteractiveContent() {
    // Key terms are handled by onclick attributes in HTML
    // Key concepts are handled by onclick attributes in HTML
}

// Show definition
function showDefinition(termId) {
    if (definitions[termId]) {
        const def = definitions[termId];
        showInfoPanel('Key Term', `
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #667eea;">
                <h4>${def.term}</h4>
                <p><strong>Definition:</strong> ${def.definition}</p>
                <p><strong>Historical Context:</strong> ${def.context}</p>
            </div>
        `);
    }
}

// Show concept explanation
function showConceptExplanation(conceptId) {
    if (concepts[conceptId]) {
        const concept = concepts[conceptId];
        showInfoPanel('Key Concept', `
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #28a745;">
                <h4>${concept.concept}</h4>
                <p><strong>Explanation
