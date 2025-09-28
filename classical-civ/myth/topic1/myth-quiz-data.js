// Myth & Religion Topic 1 Question Bank - The Gods
// Save this as: myth-quiz-data.js

const questionBank = {
    'comprehensive': [
        // Topic 1.1 - Ancient Religion
        {
            type: 'multiple-choice',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'What is the main difference between polytheism and monotheism?',
            choices: [
                'Polytheism worships many gods, monotheism worships one god',
                'Polytheism is older, monotheism is newer',
                'Polytheism uses temples, monotheism uses churches',
                'Polytheism is Greek, monotheism is Roman'
            ],
            correct: 0,
            explanation: 'Polytheism involves the worship of multiple gods (like the Greek and Roman pantheons), while monotheism involves belief in and worship of a single deity.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'What does the term "anthropomorphic" mean when describing the ancient gods?',
            correctAnswers: ['having human form', 'human-like'],
            acceptableVariations: ['having human form', 'human-like', 'human characteristics', 'human appearance', 'like humans', 'human shaped'],
            explanation: 'Anthropomorphic means "having human form" - the Greek and Roman gods were depicted as looking like humans, with human emotions, relationships, and physical appearances.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'Match these religious terms with their definitions:',
            items: ['Hiera', 'Religio', 'Epithets', 'Pantheon'],
            categories: {
                'Sacred things or rituals': ['Hiera'],
                'Religious duty or obligation': ['Religio'],
                'Descriptive titles for gods': ['Epithets'],
                'The collective group of gods': ['Pantheon']
            },
            explanation: 'These key terms help us understand how the Romans conceptualised their religious practices and divine relationships.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'How did ancient Romans view their relationship with the gods?',
            choices: [
                'As a personal emotional relationship based on love',
                'As a transactional relationship - do ut des (I give so that you give)',
                'As a relationship based on fear and submission',
                'As an intellectual philosophical exercise'
            ],
            correct: 1,
            explanation: 'Roman religion was largely transactional - "do ut des" (I give so that you give). Romans offered sacrifices, prayers, and rituals in exchange for divine favour and protection.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'What is the difference between communal and private religion in ancient Rome?',
            correctAnswers: ['communal public private personal'],
            acceptableVariations: ['communal was public, private was personal', 'communal for community, private for individuals', 'public vs personal worship', 'state religion vs household religion'],
            explanation: 'Communal religion involved public festivals, state ceremonies, and civic duties, while private religion included household worship, personal devotions, and family rituals.'
        },

        // Topic 1.2 - Gods and Iconography
        {
            type: 'drag-drop',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Match these Greek gods with their Roman names:',
            items: ['Zeus', 'Hera', 'Poseidon', 'Aphrodite', 'Ares'],
            categories: {
                'Jupiter': ['Zeus'],
                'Juno': ['Hera'],
                'Neptune': ['Poseidon'],
                'Venus': ['Aphrodite'],
                'Mars': ['Ares']
            },
            explanation: 'When the Romans adopted Greek gods, they gave them Roman names while keeping most of their characteristics and stories.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which symbols would help you identify Zeus/Jupiter in ancient art?',
            choices: [
                'Trident and horses',
                'Thunderbolt and eagle',
                'Bow and arrows with deer',
                'Caduceus and winged sandals'
            ],
            correct: 1,
            explanation: 'Zeus/Jupiter is typically shown with a thunderbolt (his weapon) and an eagle (his sacred bird), symbolising his role as king of the gods and controller of the sky.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Name three symbols commonly associated with Athena/Minerva.',
            correctAnswers: ['owl helmet olive'],
            acceptableVariations: ['owl, helmet, olive tree', 'shield, owl, olive branch', 'aegis, owl, helmet', 'spear, owl, olive'],
            explanation: 'Athena/Minerva is associated with the owl (wisdom), helmet/aegis (warfare), olive tree (her gift to Athens), and spear (strategic warfare).'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Why was Hades/Pluto included in the 14 Olympian gods despite not living on Mount Olympus?',
            choices: [
                'He was too powerful to exclude',
                'He was one of the three brothers who divided the cosmos',
                'The Romans specifically added him to the list',
                'He visited Olympus regularly for meetings'
            ],
            correct: 1,
            explanation: 'Hades/Pluto was one of the three brothers (with Zeus and Poseidon) who divided the cosmos after defeating the Titans, making him a major deity despite ruling the underworld.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Complete this passage about divine epithets:',
            gapText: 'Epithets were ___ titles that described specific aspects of a god. For example, Athena ___ meant "Athena of the city," while Apollo ___ referred to his role as a healer.',
            correctGaps: ['descriptive', 'Polias', 'Paean'],
            acceptableGaps: [
                ['descriptive', 'special'],
                ['Polias', 'polias'],
                ['Paean', 'paean']
            ],
            explanation: 'Epithets helped worshippers invoke specific aspects of divine power and showed the multifaceted nature of ancient gods.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which god is associated with the caduceus and winged sandals?',
            correctAnswers: ['hermes', 'mercury'],
            acceptableVariations: ['hermes', 'mercury', 'hermes mercury'],
            explanation: 'Hermes/Mercury, the messenger god, is identified by his caduceus (staff with snakes), winged sandals, and winged cap, symbolising his role as divine messenger and guide.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What domain did Demeter/Ceres primarily control?',
            choices: [
                'The sea and earthquakes',
                'War and courage',
                'Agriculture and the harvest',
                'Love and beauty'
            ],
            correct: 2,
            explanation: 'Demeter/Ceres was the goddess of agriculture, grain, and the harvest, making her essential for human survival and closely connected to seasonal cycles.'
        },

        // Topic 1.3 - Hymn to Demeter
        {
            type: 'text-flexible',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'Who abducted Persephone in the Homeric Hymn to Demeter?',
            correctAnswers: ['hades', 'pluto'],
            acceptableVariations: ['hades', 'pluto', 'hades pluto', 'the lord of the underworld'],
            explanation: 'Hades/Pluto, god of the underworld, abducted Persephone while she was picking flowers, taking her to be his queen in the realm of the dead.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'How does the Hymn to Demeter explain the changing seasons?',
            choices: [
                'The gods take turns controlling the weather',
                'Persephone spends part of the year in the underworld, part on earth',
                'Demeter travels to different parts of the world',
                'The earth rotates closer and further from the sun'
            ],
            correct: 1,
            explanation: 'When Persephone is in the underworld, Demeter grieves and the earth becomes barren (winter). When Persephone returns, Demeter rejoices and the earth blooms (spring/summer).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'What city did Demeter visit while searching for Persephone, and what did she establish there?',
            correctAnswers: ['eleusis mysteries'],
            acceptableVariations: ['eleusis, eleusinian mysteries', 'eleusis and the mysteries', 'eleusis, established mysteries', 'eleusis mystery religion'],
            explanation: 'Demeter came to Eleusis and established the Eleusinian Mysteries, secret religious rites that promised initiates a blessed afterlife.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'Why couldn\'t Persephone return permanently to the upper world?',
            choices: [
                'Zeus forbade it',
                'She had eaten pomegranate seeds in the underworld',
                'Hades refused to let her go',
                'She preferred life in the underworld'
            ],
            correct: 1,
            explanation: 'Because Persephone ate pomegranate seeds in the underworld, she was bound to spend part of each year there. Eating food from the underworld created an unbreakable connection.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'Match these characters with their roles in the Hymn to Demeter:',
            items: ['Demeter', 'Persephone', 'Hades', 'Helios', 'Hecate'],
            categories: {
                'The grieving mother': ['Demeter'],
                'The abducted daughter': ['Persephone'],
                'The abductor king': ['Hades'],
                'The all-seeing sun god': ['Helios'],
                'The goddess who heard cries': ['Hecate']
            },
            explanation: 'Each character plays a crucial role in the myth that explains both seasonal change and the establishment of important mystery religions.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'What does the Hymn to Demeter teach us about the relationship between gods and mortals?',
            correctAnswers: ['gods have emotions', 'gods affect human life'],
            acceptableVariations: ['gods have human emotions', 'gods can be grieving parents', 'divine actions affect mortals', 'gods have family relationships', 'gods care about their children'],
            explanation: 'The hymn shows gods as having deep emotions (Demeter\'s maternal grief), family relationships, and the power to dramatically affect human life through their personal experiences.'
        },

        // Additional comprehensive questions
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which pair correctly matches a god with their Roman name?',
            choices: [
                'Artemis - Diana',
                'Hermes - Apollo',
                'Dionysus - Bacchus',
                'Both A and C are correct'
            ],
            correct: 3,
            explanation: 'Both Artemis/Diana (goddess of the hunt) and Dionysus/Bacchus (god of wine) are correctly matched with their Roman equivalents.'
        },
        {
            type: 'scenario',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'A Roman family performs daily rituals at their household shrine, offering food and wine to their ancestors and household gods. Is this an example of communal or private religion?',
            choices: ['Communal religion', 'Private religion'],
            correct: 1,
            explanation: 'This is private religion - household worship performed by individual families for their personal protection and family wellbeing, rather than public civic ceremonies.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Name the Roman goddess of the hearth and home.',
            correctAnswers: ['vesta'],
            acceptableVariations: ['vesta', 'vestia'],
            explanation: 'Vesta (Greek: Hestia) was the goddess of the hearth, home, and domestic life. Her sacred flame was tended by the Vestal Virgins in Rome.'
        }
    ],

    'quick': [
        {
            type: 'multiple-choice',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'What does polytheism mean?',
            choices: [
                'Belief in one god',
                'Belief in many gods',
                'Belief in no gods',
                'Belief in nature spirits'
            ],
            correct: 1,
            explanation: 'Polytheism means belief in and worship of multiple gods, as practiced by the Greeks and Romans.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What is the Roman name for the Greek god Zeus?',
            correctAnswers: ['jupiter'],
            acceptableVariations: ['jupiter', 'jove'],
            explanation: 'Zeus, king of the Greek gods, was called Jupiter (or Jove) by the Romans.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which symbols identify Zeus/Jupiter?',
            choices: [
                'Thunderbolt and eagle',
                'Trident and horses',
                'Bow and deer',
                'Lyre and laurel'
            ],
            correct: 0,
            explanation: 'Zeus/Jupiter is identified by his thunderbolt weapon and the eagle as his sacred bird.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'Who abducted Persephone?',
            correctAnswers: ['hades'],
            acceptableVariations: ['hades', 'pluto'],
            explanation: 'Hades (Roman: Pluto), god of the underworld, abducted Persephone to be his queen.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'What do the seasons represent in the Hymn to Demeter?',
            choices: [
                'The gods\' changing moods',
                'Persephone\'s time in the underworld and on earth',
                'Different gods taking control',
                'The earth\'s distance from the sun'
            ],
            correct: 1,
            explanation: 'Winter occurs when Persephone is in the underworld with Hades; spring/summer when she returns to her mother Demeter.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'What does "anthropomorphic" mean?',
            correctAnswers: ['having human form'],
            acceptableVariations: ['having human form', 'human-like', 'human characteristics'],
            explanation: 'Anthropomorphic means having human form or characteristics - the Greek and Roman gods looked and acted like humans.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What is Athena/Minerva the goddess of?',
            choices: [
                'Love and beauty',
                'Wisdom and warfare',
                'The hunt and moon',
                'Agriculture and harvest'
            ],
            correct: 1,
            explanation: 'Athena/Minerva was the goddess of wisdom, strategic warfare, and crafts.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'Why couldn\'t Persephone leave the underworld permanently?',
            correctAnswers: ['ate pomegranate seeds'],
            acceptableVariations: ['ate pomegranate seeds', 'ate food in underworld', 'pomegranate', 'ate underworld food'],
            explanation: 'Eating pomegranate seeds in the underworld bound Persephone to spend part of each year there.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'What was the Roman approach to religion based on?',
            choices: [
                'Personal love for the gods',
                'Fear and submission',
                'Transaction - giving to receive',
                'Philosophical understanding'
            ],
            correct: 2,
            explanation: 'Roman religion was transactional - "do ut des" (I give so that you give) - offering worship in exchange for divine favour.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What is the Roman name for Aphrodite?',
            correctAnswers: ['venus'],
            acceptableVariations: ['venus'],
            explanation: 'Aphrodite, Greek goddess of love and beauty, was called Venus by the Romans.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'Where did Demeter establish the mystery religion?',
            choices: [
                'Athens',
                'Delphi',
                'Eleusis',
                'Olympia'
            ],
            correct: 2,
            explanation: 'Demeter established the Eleusinian Mysteries at Eleusis while searching for Persephone.'
        }
    ],

    'detailed': [
        {
            type: 'text-flexible',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'Explain what "do ut des" means and how it applied to Roman religion.',
            correctAnswers: ['I give so you give', 'transactional relationship'],
            acceptableVariations: ['I give so that you give', 'give and take', 'transactional worship', 'exchange relationship', 'reciprocal giving'],
            explanation: 'Do ut des means "I give so that you give" - Romans offered sacrifices, prayers, and rituals to the gods in exchange for protection, success, and favours. Religion was seen as a contract.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Complete this description of divine iconography:',
            gapText: 'In ancient art, ___ was shown with a thunderbolt and eagle, ___ carried a trident and was associated with horses, while ___ was depicted with an owl and olive branch.',
            correctGaps: ['Zeus', 'Poseidon', 'Athena'],
            acceptableGaps: [
                ['Zeus', 'Jupiter'],
                ['Poseidon', 'Neptune'],
                ['Athena', 'Minerva']
            ],
            explanation: 'Each god had distinctive symbols that made them easily recognisable in art and sculpture throughout the ancient world.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'What was the significance of the Eleusinian Mysteries established by Demeter?',
            choices: [
                'They taught agricultural techniques',
                'They promised initiates a blessed afterlife',
                'They explained the calendar system',
                'They trained priests for temple service'
            ],
            correct: 1,
            explanation: 'The Eleusinian Mysteries were secret religious rites that promised initiates a blessed afterlife, making them extremely popular throughout the ancient world.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'Name three key differences between ancient polytheistic religion and modern monotheistic religions.',
            correctAnswers: ['multiple gods', 'anthropomorphic', 'transactional'],
            acceptableVariations: ['many gods vs one god', 'gods have human form', 'sacrificial exchange system', 'communal public worship', 'no holy book'],
            explanation: 'Key differences include: multiple gods vs one, anthropomorphic deities, transactional worship (sacrifices for favours), emphasis on ritual rather than faith, and integration with civic life.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Match these gods with their primary domains:',
            items: ['Apollo', 'Artemis', 'Dionysus', 'Hephaestus', 'Hermes'],
            categories: {
                'Music and prophecy': ['Apollo'],
                'Hunt and moon': ['Artemis'],
                'Wine and theatre': ['Dionysus'],
                'Fire and metalwork': ['Hephaestus'],
                'Messages and trade': ['Hermes']
            },
            explanation: 'Each god controlled specific domains that reflected important aspects of ancient life and culture.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'How does Demeter\'s reaction to Persephone\'s abduction demonstrate the anthropomorphic nature of Greek gods?',
            choices: [
                'She uses magic powers to find her daughter',
                'She grieves like a human mother and neglects her duties',
                'She immediately seeks revenge on Hades',
                'She consults other gods for advice'
            ],
            correct: 1,
            explanation: 'Demeter\'s maternal grief, her withdrawal from divine duties, and her emotional journey mirror human parental responses, showing gods as having human-like emotions and relationships.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'Define "epithets" and give an example of how they were used for gods.',
            correctAnswers: ['descriptive titles', 'specific aspects'],
            acceptableVariations: ['descriptive titles for gods', 'names describing god aspects', 'special names', 'titles showing god roles'],
            explanation: 'Epithets were descriptive titles that highlighted specific aspects or roles of gods, like "Athena Polias" (Athena of the city) or "Apollo Paean" (Apollo the healer).'
        },
        {
            type: 'scenario',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'You see an ancient statue of a bearded man holding a trident with dolphins at his feet. Which god is this most likely to represent?',
            choices: ['Zeus/Jupiter', 'Poseidon/Neptune', 'Hades/Pluto', 'Apollo'],
            correct: 1,
            explanation: 'The trident is the distinctive weapon of Poseidon/Neptune, god of the sea, and dolphins are among his sacred animals.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'How does the Hymn to Demeter explain natural phenomena through divine narrative?',
            correctAnswers: ['seasons through myth', 'divine emotions affect nature'],
            acceptableVariations: ['seasons explained by gods', 'mother grief causes winter', 'divine emotions control nature', 'gods personal lives affect world'],
            explanation: 'The hymn explains seasonal cycles through Demeter\'s emotional state - her grief at losing Persephone causes winter and barrenness, while her joy at reunion brings spring and growth.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.1: Ancient Religion',
            question: 'What role did the pater familias play in Roman private religion?',
            choices: [
                'He attended public festivals only',
                'He led household worship and maintained family traditions',
                'He served as a priest in temples',
                'He had no religious responsibilities'
            ],
            correct: 1,
            explanation: 'The pater familias (male head of household) was responsible for leading household religious rituals, maintaining the family shrine, and ensuring proper worship of ancestors and household gods.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Complete this passage about the Roman pantheon:',
            gapText: 'When Romans encountered Greek gods, they often ___ them with their own deities or adopted them with new ___. This process of religious borrowing was called ___, meaning interpretation or translation of gods.',
            correctGaps: ['identified', 'names', 'interpretatio'],
            acceptableGaps: [
                ['identified', 'merged', 'combined'],
                ['names', 'titles', 'identities'],
                ['interpretatio', 'interpretatio romana']
            ],
            explanation: 'Interpretatio romana was the Roman practice of interpreting foreign gods through the lens of their own religion, either identifying them with existing Roman deities or adopting them with Roman names.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.3: Hymn to Demeter',
            question: 'Why was Demeter\'s role as goddess of agriculture so crucial for ancient societies?',
            correctAnswers: ['controlled food supply', 'survival depended on harvest'],
            acceptableVariations: ['controlled grain harvest', 'agriculture meant survival', 'food production essential', 'crop failure meant death', 'harvest determined life'],
            explanation: 'In agricultural societies, Demeter\'s control over grain and harvest literally meant the difference between life and death. Crop failure led to famine, making her favour essential for community survival.'
        }
    ]
};

// Load the question bank into the global scope
if (typeof window !== 'undefined') {
    window.questionBank = questionBank;
}
