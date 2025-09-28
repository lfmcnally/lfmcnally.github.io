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

        // Additional comprehensive questions - God Identification Focus
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A statue shows a bearded man with a trident, surrounded by dolphins. Which god is this?',
            correctAnswers: ['poseidon', 'neptune'],
            acceptableVariations: ['poseidon', 'neptune', 'poseidon neptune'],
            explanation: 'The trident is Poseidon/Neptune\'s distinctive weapon, and dolphins are his sacred animals as god of the sea.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'You see a female figure with an owl perched on her shoulder and wearing a helmet. Which goddess is this?',
            correctAnswers: ['athena', 'minerva'],
            acceptableVariations: ['athena', 'minerva', 'athena minerva'],
            explanation: 'Athena/Minerva is identified by her owl (wisdom), helmet (warfare), and often carries a spear or aegis.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'An artwork shows a young man with wings on his sandals, holding a staff with two snakes wrapped around it. Who is this?',
            correctAnswers: ['hermes', 'mercury'],
            acceptableVariations: ['hermes', 'mercury', 'hermes mercury'],
            explanation: 'Hermes/Mercury is identified by his winged sandals, caduceus (staff with snakes), and role as messenger god.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A sculpture depicts a woman emerging from sea foam, surrounded by roses and doves. Which goddess is this?',
            correctAnswers: ['aphrodite', 'venus'],
            acceptableVariations: ['aphrodite', 'venus', 'aphrodite venus'],
            explanation: 'Aphrodite/Venus is associated with her birth from sea foam, roses (symbol of love), and doves (sacred birds).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'You see a figure with a bow and arrows, accompanied by a deer, with a crescent moon above her head. Who is this?',
            correctAnswers: ['artemis', 'diana'],
            acceptableVariations: ['artemis', 'diana', 'artemis diana'],
            explanation: 'Artemis/Diana is identified by her silver bow, deer (sacred animal), and crescent moon (as goddess of the hunt and moon).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A bearded figure sits on a throne holding a thunderbolt, with an eagle at his feet. Which god is this?',
            correctAnswers: ['zeus', 'jupiter'],
            acceptableVariations: ['zeus', 'jupiter', 'zeus jupiter'],
            explanation: 'Zeus/Jupiter, king of the gods, is identified by his thunderbolt weapon and the eagle as his sacred bird and symbol of divine authority.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'An image shows a muscular man in armour with a spear and shield, accompanied by a dog and vulture. Which god is this?',
            correctAnswers: ['ares', 'mars'],
            acceptableVariations: ['ares', 'mars', 'ares mars'],
            explanation: 'Ares/Mars is shown in military gear with weapons of war, dogs (representing the violence of battle), and vultures (scavengers of battlefields).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A figure holds a lyre and has laurel leaves in his hair, with a sun disk behind his head. Who is this?',
            correctAnswers: ['apollo'],
            acceptableVariations: ['apollo', 'apollo phoebus'],
            explanation: 'Apollo is identified by his lyre (music), laurel wreath (poetry), and solar imagery (as god of the sun, music, and prophecy).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A woman holds wheat sheaves and has poppies in her hair, standing next to a plough. Which goddess is this?',
            correctAnswers: ['demeter', 'ceres'],
            acceptableVariations: ['demeter', 'ceres', 'demeter ceres'],
            explanation: 'Demeter/Ceres is identified by wheat (grain harvest), poppies (grow in grain fields), and agricultural tools as goddess of agriculture.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A bearded man holds a hammer and tongs, with one leg appearing deformed. Which god is this?',
            correctAnswers: ['hephaestus', 'vulcan'],
            acceptableVariations: ['hephaestus', 'vulcan', 'hephaestus vulcan'],
            explanation: 'Hephaestus/Vulcan is identified by his smith\'s tools (hammer, tongs), his lameness from being thrown from Olympus, and association with metalwork and fire.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A crowned woman holds a pomegranate and keys, with her head veiled. Who is this?',
            correctAnswers: ['hera', 'juno'],
            acceptableVariations: ['hera', 'juno', 'hera juno'],
            explanation: 'Hera/Juno is identified by her crown (queen of gods), pomegranate (marriage fertility), veil (married status), and peacocks as sacred birds.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A young man holds grape vines and has ivy in his hair, with leopards nearby. Which god is this?',
            correctAnswers: ['dionysus', 'bacchus'],
            acceptableVariations: ['dionysus', 'bacchus', 'dionysus bacchus'],
            explanation: 'Dionysus/Bacchus is identified by grape vines (wine), ivy crown, thyrsus staff, and big cats like leopards in his wild retinue.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A dark figure sits on a throne made of bones, holding a key and a cornucopia. Who is this?',
            correctAnswers: ['hades', 'pluto'],
            acceptableVariations: ['hades', 'pluto', 'hades pluto'],
            explanation: 'Hades/Pluto is identified by his key (gatekeeper of the underworld), cornucopia (wealth from the earth), and dark, underworld imagery.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A woman tends a sacred fire with her head covered, holding a lamp. Which goddess is this?',
            correctAnswers: ['hestia', 'vesta'],
            acceptableVariations: ['hestia', 'vesta', 'hestia vesta'],
            explanation: 'Hestia/Vesta is identified by the sacred hearth fire, domestic imagery, and modest veiled appearance as goddess of home and hearth.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which symbols would help you identify Demeter/Ceres in ancient art?',
            choices: [
                'Wheat sheaves and poppies',
                'Roses and doves',
                'Owl and olive branch',
                'Bow and crescent moon'
            ],
            correct: 0,
            explanation: 'Demeter/Ceres is identified by wheat sheaves (grain harvest), poppies (grow in wheat fields), and other agricultural symbols.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'If you see a figure with a thyrsus staff covered in ivy and grape vines, this represents:',
            choices: [
                'Apollo - god of music',
                'Dionysus/Bacchus - god of wine',
                'Hermes/Mercury - messenger god',
                'Ares/Mars - god of war'
            ],
            correct: 1,
            explanation: 'The thyrsus (staff topped with pine cone, wrapped in ivy and grape vines) is the distinctive symbol of Dionysus/Bacchus, god of wine and revelry.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which combination of symbols specifically identifies Artemis/Diana?',
            choices: [
                'Lyre and sun rays',
                'Silver bow, deer, and crescent moon',
                'Trident and dolphins',
                'Thunderbolt and eagle'
            ],
            correct: 1,
            explanation: 'Artemis/Diana is identified by her silver bow (hunting), deer (sacred animal), and crescent moon (lunar goddess aspect).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What sacred animal is most commonly associated with Hera/Juno?',
            correctAnswers: ['peacock'],
            acceptableVariations: ['peacock', 'peacocks'],
            explanation: 'The peacock is Hera/Juno\'s sacred bird, with its beautiful tail feathers said to contain the eyes of Argus, whom she set to watch over Io.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What musical instrument is Apollo most commonly shown holding?',
            correctAnswers: ['lyre'],
            acceptableVariations: ['lyre', 'lira'],
            explanation: 'Apollo holds a lyre, symbolising his role as god of music, poetry, and the arts, as well as harmony and civilised culture.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What type of crown or wreath is Apollo typically shown wearing?',
            correctAnswers: ['laurel'],
            acceptableVariations: ['laurel', 'laurel wreath', 'laurel crown', 'bay leaves'],
            explanation: 'Apollo wears a laurel wreath, made from the bay tree that the nymph Daphne became when fleeing from him. Laurel became sacred to Apollo and symbolised victory and achievement.'
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
        },
        {
            type: 'drag-drop',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Match these symbols with the correct gods:',
            items: ['Caduceus', 'Aegis', 'Thyrsus', 'Cornucopia'],
            categories: {
                'Hermes/Mercury': ['Caduceus'],
                'Athena/Minerva': ['Aegis'],
                'Dionysus/Bacchus': ['Thyrsus'],
                'Hades/Pluto': ['Cornucopia']
            },
            explanation: 'Each god has distinctive symbols: caduceus (messenger staff), aegis (protective shield), thyrsus (wine staff), cornucopia (wealth from earth).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'A figure is shown with a helmet that has an owl perched on it and holds a spear. What other symbol would confirm this is Athena/Minerva?',
            correctAnswers: ['aegis', 'olive branch', 'shield'],
            acceptableVariations: ['aegis', 'olive branch', 'olive tree', 'shield with medusa', 'gorgon shield'],
            explanation: 'The aegis (shield with Medusa\'s head) or olive branch would confirm this is Athena/Minerva, goddess of wisdom and strategic warfare.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What bird is sacred to Zeus/Jupiter and often appears with him in art?',
            correctAnswers: ['eagle'],
            acceptableVariations: ['eagle', 'eagles'],
            explanation: 'The eagle is Zeus/Jupiter\'s sacred bird and symbol of divine authority, often shown carrying his thunderbolts or perched beside his throne.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which god is identified by a hammer, anvil, and fire imagery?',
            choices: [
                'Ares/Mars',
                'Hephaestus/Vulcan',
                'Apollo',
                'Hermes/Mercury'
            ],
            correct: 1,
            explanation: 'Hephaestus/Vulcan is the smith god, identified by metalworking tools like hammers and anvils, plus fire and forge imagery.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What flowers are most associated with Aphrodite/Venus?',
            correctAnswers: ['roses'],
            acceptableVariations: ['roses', 'rose'],
            explanation: 'Roses are sacred to Aphrodite/Venus as symbols of love and beauty, often shown growing where she walks or decorating her temples.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which big cats are often shown with Dionysus/Bacchus?',
            correctAnswers: ['leopards', 'panthers'],
            acceptableVariations: ['leopards', 'panthers', 'leopard', 'panther', 'big cats'],
            explanation: 'Leopards and panthers accompany Dionysus/Bacchus, representing the wild, untamed nature of wine and religious ecstasy.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What plant is sacred to Dionysus/Bacchus besides grapes?',
            correctAnswers: ['ivy'],
            acceptableVariations: ['ivy', 'ivy leaves'],
            explanation: 'Ivy is sacred to Dionysus/Bacchus and forms his crown, representing the god\'s connection to wild nature and his role in vegetation cycles.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'If you see a figure with a beard riding a chariot pulled by sea creatures, this is most likely:',
            choices: [
                'Zeus/Jupiter',
                'Poseidon/Neptune',
                'Hades/Pluto',
                'Apollo'
            ],
            correct: 1,
            explanation: 'Poseidon/Neptune is often shown in a chariot pulled by hippocampi (sea horses) or other marine creatures, emphasizing his dominion over the oceans.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What type of headwear identifies Hermes/Mercury?',
            correctAnswers: ['winged cap', 'petasos'],
            acceptableVariations: ['winged cap', 'winged hat', 'petasos', 'hat with wings'],
            explanation: 'Hermes/Mercury wears a petasos (winged cap) that enables swift travel as the messenger god, complementing his winged sandals.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which god carries a trident?',
            correctAnswers: ['poseidon', 'neptune'],
            acceptableVariations: ['poseidon', 'neptune', 'poseidon neptune'],
            explanation: 'Poseidon/Neptune carries a trident, his three-pronged weapon that can cause earthquakes and control the seas.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What weapon does Zeus/Jupiter carry?',
            correctAnswers: ['thunderbolt'],
            acceptableVariations: ['thunderbolt', 'lightning bolt', 'thunder bolt'],
            explanation: 'Zeus/Jupiter wields the thunderbolt as his primary weapon, forged by the Cyclopes.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which goddess is associated with owls?',
            correctAnswers: ['athena', 'minerva'],
            acceptableVariations: ['athena', 'minerva', 'athena minerva'],
            explanation: 'Athena/Minerva is associated with owls, symbols of wisdom and her sacred birds.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Which symbols identify Artemis/Diana?',
            choices: [
                'Bow and deer',
                'Hammer and anvil',
                'Grapes and ivy',
                'Roses and doves'
            ],
            correct: 0,
            explanation: 'Artemis/Diana is identified by her silver bow (hunting) and deer (sacred animals).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Describe three symbols that would help you identify Apollo in ancient art.',
            correctAnswers: ['lyre', 'laurel', 'sun'],
            acceptableVariations: ['lyre, laurel, sun rays', 'musical instrument, bay leaves, solar disk', 'lyre, bay wreath, sun'],
            explanation: 'Apollo is identified by his lyre (music), laurel wreath (poetry and victory), and solar imagery (sun god aspect).'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Why does Hephaestus/Vulcan often appear with a deformed leg in art?',
            choices: [
                'To show the dangers of metalworking',
                'Because he was thrown from Olympus by Zeus',
                'To represent the imperfection of mortal crafts',
                'It\'s a symbol of his humility'
            ],
            correct: 1,
            explanation: 'Hephaestus was thrown from Mount Olympus by Zeus (either at birth for being ugly, or later for defending Hera), which left him permanently lame.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'What is the aegis and which goddess carries it?',
            correctAnswers: ['protective shield athena'],
            acceptableVariations: ['shield with medusa head, athena', 'protective armor athena', 'breastplate with gorgon athena'],
            explanation: 'The aegis is Athena\'s protective shield or breastplate, often decorated with the head of Medusa, symbolising divine protection and terror to enemies.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'Match these animals with their associated gods:',
            items: ['Eagle', 'Owl', 'Deer', 'Peacock', 'Dolphin'],
            categories: {
                'Zeus/Jupiter': ['Eagle'],
                'Athena/Minerva': ['Owl'],
                'Artemis/Diana': ['Deer'],
                'Hera/Juno': ['Peacock'],
                'Poseidon/Neptune': ['Dolphin']
            },
            explanation: 'Sacred animals helped worshippers identify gods in art and showed aspects of divine power and personality.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2: Gods and Iconography',
            question: 'How can you tell the difference between Ares/Mars and other warrior gods in art?',
            correctAnswers: ['more brutal violent'],
            acceptableVariations: ['violent warfare symbols', 'dogs and vultures', 'savage battle imagery', 'destructive war aspects'],
            explanation: 'Ares/Mars represents the brutal, violent side of war (unlike Athena\'s strategic warfare), often shown with scavenging animals like dogs and vultures that feed on battlefields.'
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
