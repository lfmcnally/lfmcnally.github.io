// Lesson 1.3: The Homeric Hymn to Demeter - Data File

const lessonData = {
    // Learning Objectives
    learningObjectives: {
        intro: "By the end of this section, you will understand:",
        objectives: [
            "The narrative progression of the Homeric Hymn to Demeter",
            "How this myth explains seasonal change and agricultural cycles", 
            "The religious significance for ancient Greeks and Romans",
            "Why this myth appears frequently in funerary art",
            "The literary techniques used to build emotional impact",
            "The cultural context of marriage, grief, and divine politics"
        ]
    },

    // Timeline Events
    timelineEvents: [
        {
            id: 'picking',
            icon: '🌺',
            title: 'Picking Flowers',
            subtitle: 'The fateful meadow',
            content: {
                title: 'The Innocent Beginning: Picking Flowers',
                description: 'Persephone plays with the daughters of Oceanus in a meadow, gathering roses, crocuses, violets, irises, and hyacinths. This idyllic scene represents innocence before catastrophe.',
                details: 'The narcissus appears - a supernatural flower with 100 blooms from a single root. Created by Earth at Zeus\'s command, it serves as bait for the unsuspecting maiden.',
                symbolism: 'The meadow represents the liminal space between childhood and adulthood, safety and danger. The extraordinary flower signals divine intervention - beauty concealing a trap.'
            }
        },
        {
            id: 'abduction',
            icon: '🌋',
            title: 'The Abduction',
            subtitle: 'Earth opens up',
            content: {
                title: 'The Violent Abduction',
                description: 'As Persephone reaches for the narcissus, the earth opens at the Plain of Nysa. Hades emerges with his immortal horses and golden chariot, seizing the screaming girl.',
                details: 'Her cries echo through mountains and seas, but only Hecate and Helios hear her. Zeus, receiving sacrifices in his temple, ignores his daughter\'s distress.',
                symbolism: 'This was no spontaneous act but a planned abduction with Zeus\'s approval, showing how patriarchal authority operated without maternal consent.'
            }
        },
        {
            id: 'search',
            icon: '🔥',
            title: 'Nine Days Search',
            subtitle: 'Demeter\'s torches',
            content: {
                title: 'Nine Days of Desperate Searching',
                description: 'Demeter tears her veil and cloak, transforming into a bird of prey searching over land and sea. For nine days she carries blazing torches, refusing food, drink, or bathing.',
                details: 'No god, mortal, or bird will tell her the truth. This silence represents divine complicity and fear of Zeus\'s authority. Demeter\'s grief manifests in complete rejection of divine normalcy.',
                symbolism: 'The nine-day search with torches became central to the Eleusinian Mysteries, where initiates recreated Demeter\'s desperate journey.'
            }
        },
        {
            id: 'helios',
            icon: '☀️',
            title: 'Truth Revealed',
            subtitle: 'Helios tells all',
            content: {
                title: 'The Truth from the All-Seeing Sun',
                description: 'On the tenth day, Hecate approaches with her own torch, admitting she heard but didn\'t see. Together they approach Helios, who sees everything from his solar chariot.',
                details: 'Helios reveals Zeus gave Persephone to Hades and advises acceptance: "It is not shameful to have Hades as a son-in-law." This response shows male solidarity in marriage arrangements, dismissing maternal grief.',
                symbolism: 'Learning of Zeus\'s betrayal transforms Demeter\'s grief into rage, leading to her withdrawal from Olympus.'
            }
        },
        {
            id: 'withdrawal',
            icon: '❄️',
            title: 'Divine Withdrawal',
            subtitle: 'Famine begins',
            content: {
                title: 'Divine Strike: The Great Famine',
                description: 'In rage at Zeus, Demeter abandons Olympus and divine society. Disguising herself as an old woman, she wanders among mortals until reaching Eleusis.',
                details: 'Her withdrawal causes crops to fail and humanity to starve. This threatens not just mortals but the gods themselves - without humans, there are no sacrifices to sustain divine power.',
                symbolism: 'Demeter demonstrates that even in a patriarchal system, maternal power over fertility could force the king of gods to negotiate.'
            }
        },
        {
            id: 'compromise',
            icon: '🌱',
            title: 'The Compromise',
            subtitle: 'Seasons created',
            content: {
                title: 'The Compromise: Birth of the Seasons',
                description: 'Though not in this excerpt, the myth concludes with Persephone\'s return. However, she has eaten pomegranate seeds in the underworld, binding her there for part of each year.',
                details: 'Zeus brokers a compromise: Persephone spends one-third of the year with Hades (winter), two-thirds with Demeter (spring/summer). This creates the agricultural cycle essential for human survival.',
                symbolism: 'The seasons weren\'t random but resulted from divine emotion and negotiation. Winter represents maternal grief; spring celebrates reunion. This gave meaning to agricultural anxiety and hope.'
            }
        }
    ],

    // Prescribed Text (Lines 1-104)
    prescribedText: [
        "I begin to sing of <span class=\"key-figure\" onclick=\"showFigureInfo('demeter')\">beautiful-haired Demeter</span>, holy goddess—of her and her delicate-ankled daughter whom <span class=\"key-figure\" onclick=\"showFigureInfo('hades')\">Hades</span> snatched away, her having been given to him by <span class=\"key-figure\" onclick=\"showFigureInfo('zeus')\">far-seeing Zeus the loud-thunderer</span>.",
        
        "She was playing apart from Demeter, lady of the <span class=\"key-term\" onclick=\"showDefinition('golden-sword')\">golden sword</span> and glorious fruits, with the deep-bosomed daughters of <span class=\"key-figure\" onclick=\"showFigureInfo('oceanus')\">Oceanus</span>. They were gathering flowers in a soft meadow; roses and crocuses and beautiful violets, irises also and hyacinths, and the <span class=\"key-term\" onclick=\"showDefinition('narcissus')\">narcissus</span>; which <span class=\"key-figure\" onclick=\"showFigureInfo('earth')\">Earth</span> made to grow at the will of Zeus and to please Hades, as a <span class=\"key-concept\" onclick=\"showConceptExplanation('divine-trap')\">snare for the bloom-like girl</span>.",
        
        "<span class=\"line-number\">[10]</span> A marvellous, radiant flower, it was a thing of wonder for both immortal gods and mortal men to see. From its root grew a hundred blooms, and it smelled most sweetly, so that all wide heaven above and the whole earth and the salty sea laughed for joy. The girl was amazed and reached out with both hands to take the lovely treat; but the earth with its wide roads opened up there in the <span class=\"key-place\" onclick=\"showPlaceInfo('nysa')\">Plain of Nysa</span>, and the lord Hades, the <span class=\"key-term\" onclick=\"showDefinition('son-of-cronos')\">Son of Cronos</span>, he who has <span class=\"key-concept\" onclick=\"showConceptExplanation('many-names')\">many names</span>, with his immortal horses, sprang out upon her.",
        
        "He seized her against her will on his golden chariot and carried her away as she wailed. <span class=\"line-number\">[20]</span> Then she cried out shrilly with her voice, calling upon her father, the Son of Cronos, the highest and the best. But not one of the immortal gods, nor one of the mortal humans, heard her voice, nor even did the rich fruit-bearing olive-trees. Only the light-hearted daughter of <span class=\"key-figure\" onclick=\"showFigureInfo('persaios')\">Persaios</span>, <span class=\"key-figure\" onclick=\"showFigureInfo('hecate')\">Hecate</span> with the bright head-band, heard the girl from her cave, and also lord <span class=\"key-figure\" onclick=\"showFigureInfo('helios')\">Helios</span>, Hyperion's bright son.",
        
        "They heard the maiden as she called to her father, the Son of Cronos: but he, all by himself, was seated far apart from the gods, inside a temple where many pray, receiving beautiful <span class=\"key-term\" onclick=\"showDefinition('sacrifices')\">sacrifices</span> from mortal humans. <span class=\"line-number\">[30]</span> She was being taken against her will, at the suggestion of Zeus, by her father's brother with his immortal horses; <span class=\"key-term\" onclick=\"showDefinition('ruler-of-many')\">Ruler of Many, Host of Many</span>, Cronos' many-named son.",
        
        "So long as both the earth and the starry sky could be seen by the goddess, and the strong-flowing, fish-filled sea, and the rays of the sun, she still hoped to see her dear mother and the tribe of the immortal gods. So during this time her great heart was soothed by hope, distressed as she was. … The peaks of the mountains and depths of the sea rang with her immortal voice: and her revered mother heard her.",
        
        "<span class=\"line-number\">[40]</span> A sharp pain seized her heart. She tore off the veil from her divine flowing hair with her own dear hands, hurled her dark cloak down from both her shoulders, and sped off searching like a <span class=\"key-concept\" onclick=\"showConceptExplanation('bird-of-prey')\">bird of prey</span> over land and sea. But no one would tell her the truth. Not one of the gods, nor one of the mortal humans, nor one of the birds of omen, messengers of the truth, came to her.",
        
        "Thereafter, for nine days the revered Demeter wandered over the earth, with <span class=\"key-term\" onclick=\"showDefinition('torches')\">blazing torches</span> in her hands. <span class=\"line-number\">[50]</span> In her grief not once did she take of <span class=\"key-term\" onclick=\"showDefinition('ambrosia')\">ambrosia and nectar</span>, sweet to drink, nor did she bathe her skin in water. But when the tenth bright dawn came upon her, Hecate came to her, with a torch in her hands. She came with a message, and told her story, saying this:",
        
        "\"Revered Demeter, bringer of the seasons, giver of splendid gifts, which one of the gods who dwell in heaven, or which one of the mortal humans seized Persephone and brought grief to your dear spirit? I heard the sounds, but did not see with my eyes who it was. I tell you everything truthfully and in haste.\"",
        
        "So spoke Hecate. She received no response from the daughter of beautiful-haired <span class=\"key-figure\" onclick=\"showFigureInfo('rhea')\">Rhea</span>, <span class=\"line-number\">[60]</span> instead she sped off with her, holding blazing torches in her hands. They came to Helios, the watchman of gods and men, stood in front of his horses and the divine goddess asked:",
        
        "\"Helios, respect me as a god to a goddess if ever with word or deed I have pleased your heart and spirit. The girl born to me, my sweet offspring, glorious in form – I heard her cries resounding through the barren air, as if she were suffering violence; though I did not see it with my own eyes. But you look down through the bright air on the whole world with your sunbeams. <span class=\"line-number\">[70]</span> Tell me the truth about my dear child, if you have seen her, what god or mortal man has taken her from me by force, against her will, and gone away.\"",
        
        "So she spoke. The son of Hyperion answered with these words: \"Daughter of beautiful haired Rhea, Lady Demeter, you shall know the truth; for I stand in great awe of you, and pity you as you grieve over your delicate-ankled daughter. No other of the immortal gods is to blame, only cloud-gathering Zeus who gave her to Hades, his own brother, to call his blushing bride. <span class=\"line-number\">[80]</span> Into the murky darkness he carried her off with his horses, as she screamed wildly. But, goddess, stop your great lamentation, you must not uselessly hold onto terrible anger. It is not shameful to have, of all the immortals, Hades Ruler of Many as a son-in-law; your own brother and kin. And as for honour, he got his third when the world was divided in the beginning, and dwells with those whose ruler he was destined by lot to be.\"",
        
        "So saying, he called to his horses. At his rebuke they swiftly drew the speeding chariot, like birds of prey. <span class=\"line-number\">[90]</span> A more terrible, more dreadful grief came upon Demeter's spirit. Therefore, in her anger at the son of Cronos of the dark clouds, she abandoned the assembly of the gods and high <span class=\"key-place\" onclick=\"showPlaceInfo('olympus')\">Olympus</span>. She went among the cities and rich fields of men, for a long time disguising her form. Not one of the men who saw her, recognised her, nor did any of the deep-girded women.",
        
        "Until, one day, she came to the house of skilful <span class=\"key-figure\" onclick=\"showFigureInfo('celeos')\">Celeos</span>, who was then ruler of fragrant <span class=\"key-place\" onclick=\"showPlaceInfo('eleusis')\">Eleusis</span>. She sat down near the road, her dear heart full of sorrow, at the well called <span class=\"key-place\" onclick=\"showPlaceInfo('parthenion')\">Parthenion</span> (the Virgin's Place), from which the people of the city drew water. <span class=\"line-number\">[100]</span> She sat in the shade—an olive tree had grown overhead—looking like an old woman, born long ago, cut off from childbearing and the gifts of garland-loving Aphrodite. Such are the nursemaids of the children of law-giving kings, and housekeepers in echoing halls."
    ],

    // Themes
    themes: [
        {
            id: 'power',
            title: 'Divine Power and Politics',
            description: 'Zeus\'s secret arrangement reveals the patriarchal structure of divine society',
            content: {
                title: 'The Politics of Olympus',
                text: 'The hymn reveals the patriarchal structure of divine society. Zeus arranges his daughter\'s marriage without consulting her mother, showing that even among gods, male authority dominates. Hades\'s epithet "Ruler of Many" emphasises his equal status with his brothers. Helios\'s response to Demeter is telling: he essentially says "don\'t complain, Hades is a good match." This reflects ancient Greek attitudes where women\'s feelings about marriage arrangements were secondary to political and social considerations. However, Demeter\'s power to destroy humanity through famine forces even Zeus to compromise, showing that maternal fury could challenge patriarchal authority - at least temporarily.'
            }
        },
        {
            id: 'grief',
            title: 'Maternal Grief and Rage', 
            description: 'Demeter\'s emotional journey from loss to devastating revenge',
            content: {
                title: 'The Power of a Mother\'s Grief',
                text: 'Demeter\'s grief follows recognisable stages: desperate searching, refusal of comfort (not eating ambrosia or bathing), disguise and withdrawal from divine society, and finally, devastating revenge through famine. Her transformation into a "bird of prey" searching for her daughter shows how grief can make us predatory and desperate. The nine days of searching with torches became part of the Eleusinian Mysteries ritual, where initiates recreated Demeter\'s search. The hymn validates maternal grief as a cosmic force capable of threatening the entire world order. Demeter\'s emotions literally change the earth itself.'
            }
        },
        {
            id: 'nature',
            title: 'Nature and Agriculture',
            description: 'The connection between divine emotions and natural cycles',
            content: {
                title: 'When Gods Control Nature',
                text: 'The hymn provides a theological explanation for the agricultural cycle. Demeter\'s grief causes the first winter, her joy brings spring. This transforms a natural phenomenon into a divine drama that humans can understand and relate to. The earth "laughing for joy" at the narcissus shows nature\'s participation in divine plots. Later, the earth\'s barrenness reflects Demeter\'s emotional state, suggesting that nature and divinity are inseparable. For ancient farmers, this myth made the anxious winter months meaningful: crops weren\'t failing due to random chance but because of a divine mother\'s grief, which would inevitably end with reunion and renewal.'
            }
        }
    ],

    // Definitions for interactive terms
    definitions: {
        'golden-sword': {
            term: 'Golden Sword',
            definition: 'An epithet for Demeter referring to the golden sickle used to harvest grain.',
            context: 'This emphasises Demeter\'s role as goddess of agriculture. The "sword" that cuts grain becomes ironic when she withdraws this power in grief.'
        },
        'narcissus': {
            term: 'Narcissus',
            definition: 'A fragrant flower, here described as supernaturally beautiful with 100 blooms.',
            context: 'The narcissus was created specifically as a trap. Its extraordinary nature (100 blooms from one root) signals divine intervention. The flower\'s beauty concealing danger becomes a metaphor for Persephone\'s fate.'
        },
        'son-of-cronos': {
            term: 'Son of Cronos',
            definition: 'An epithet used for Zeus, Hades, and Poseidon, the three brothers who divided the cosmos.',
            context: 'This reminds us that Hades has equal legitimacy with Zeus. Cronos\'s sons overthrew him and divided his realm by lot, making them all legitimate rulers.'
        },
        'sacrifices': {
            term: 'Sacrifices',
            definition: 'Offerings (usually animal) made to gods in exchange for favour.',
            context: 'Zeus receiving sacrifices while Persephone is abducted shows his detachment. Later, Demeter\'s famine threatens these sacrifices, forcing Zeus to act.'
        },
        'ruler-of-many': {
            term: 'Ruler of Many, Host of Many',
            definition: 'Epithets for Hades emphasising his dominion over all the dead.',
            context: 'These titles stress Hades\'s power and legitimacy. Everyone eventually becomes his subject, making him arguably the most powerful god in the long term.'
        },
        'torches': {
            term: 'Blazing Torches',
            definition: 'Torches Demeter carried during her nine-day search for Persephone.',
            context: 'The torches became central to the Eleusinian Mysteries, where initiates carried torches recreating Demeter\'s search. They symbolise seeking truth in darkness.'
        },
        'ambrosia': {
            term: 'Ambrosia and Nectar',
            definition: 'The food and drink of the gods that maintained their immortality.',
            context: 'Demeter\'s refusal to eat ambrosia shows grief so profound she rejects even divine sustenance. This parallels human mourning customs of fasting.'
        },
        'sarcophagi': {
            term: 'Sarcophagi',
            definition: 'Stone coffins, often decorated with mythological scenes.',
            context: 'The Persephone myth was popular on sarcophagi because it offered hope of return from death and Persephone\'s protection in the underworld.'
        },
        'eleusinian-mysteries': {
            term: 'Eleusinian Mysteries',
            definition: 'Secret religious rites held at Eleusis promising initiates a blessed afterlife.',
            context: 'The most important mystery cult in ancient Greece. Initiates believed they gained special knowledge from Demeter that ensured happiness after death. The secret was so well kept we still don\'t know exactly what happened in the ceremonies.'
        },
        'harpagmos': {
            term: 'Harpagmos',
            definition: 'Marriage by abduction, an archaic practice where brides were seized.',
            context: 'While shocking to modern readers, this was a recognised (if old-fashioned) form of marriage in ancient Greece. The myth reflects anxieties about young women\'s powerlessness in marriage arrangements.'
        }
    },

    // Figures information
    figures: {
        'demeter': {
            name: 'Demeter/Ceres',
            role: 'Goddess of agriculture, harvest, and nature',
            significance: 'Mother of Persephone, her grief causes the first winter. Her power over agriculture gives her leverage even against Zeus. Central to the Eleusinian Mysteries.'
        },
        'persephone': {
            name: 'Persephone/Proserpina',
            role: 'Daughter of Demeter, becomes Queen of the Underworld',
            significance: 'Her dual nature - maiden of spring and Queen of the Dead - makes her a liminal figure bridging life and death. Called "Kore" (maiden) before her abduction.'
        },
        'hades': {
            name: 'Hades/Pluto',
            role: 'Lord of the Underworld, brother of Zeus',
            significance: 'Often called by euphemisms like "Ruler of Many" because Greeks feared speaking his name. His abduction of Persephone was sanctioned by Zeus, making it legally legitimate if morally questionable.'
        },
        'zeus': {
            name: 'Zeus/Jupiter',
            role: 'King of the gods, father of Persephone',
            significance: 'Orchestrates the abduction without consulting Demeter, showing patriarchal authority. Must later compromise when Demeter\'s withdrawal threatens cosmic order.'
        },
        'helios': {
            name: 'Helios/Sol',
            role: 'God of the sun who sees everything',
            significance: 'The all-seeing sun god who reveals the truth to Demeter. His advice to accept the marriage reflects male perspectives on marriage arrangements.'
        },
        'hecate': {
            name: 'Hecate',
            role: 'Goddess of crossroads and magic',
            significance: 'Hears Persephone\'s cries from her cave. Becomes Persephone\'s companion, linking her to transitions and liminal spaces. Important in later mystery religions.'
        },
        'oceanus': {
            name: 'Oceanus',
            role: 'Titan god of the world-ocean',
            significance: 'His daughters (Oceanids) are Persephone\'s companions, showing her divine status. Their presence makes the abduction more shocking - it happens among friends.'
        },
        'earth': {
            name: 'Gaia/Earth',
            role: 'Primordial earth goddess',
            significance: 'Collaborates in the trap by growing the narcissus. The earth opening to swallow Persephone shows Gaia\'s complicity in the abduction.'
        },
        'rhea': {
            name: 'Rhea',
            role: 'Mother of Demeter, Zeus, and Hades',
            significance: 'Grandmother of Persephone. Later in the myth, she mediates between Demeter and Zeus, showing the importance of maternal figures in resolving the crisis.'
        },
        'celeos': {
            name: 'Celeos',
            role: 'King of Eleusis',
            significance: 'Receives disguised Demeter in his household. His family becomes central to the Eleusinian Mysteries. Shows the connection between myth and actual cult sites.'
        },
        'persaios': {
            name: 'Persaios/Perses',
            role: 'Titan, father of Hecate',
            significance: 'Hecate\'s parentage links her to the older generation of gods (Titans), giving her special knowledge and power over transitions.'
        }
    },

    // Places information
    places: {
        'nysa': {
            name: 'Plain of Nysa',
            description: 'Mythical location where Persephone was abducted.',
            significance: 'Various places claimed to be Nysa, showing how local communities connected themselves to this important myth. The name may mean "tree" or be related to Dionysus.'
        },
        'olympus': {
            name: 'Mount Olympus',
            description: 'Home of the twelve Olympian gods.',
            significance: 'Demeter\'s abandonment of Olympus shows her complete rejection of divine society. Her departure threatens the cosmic order maintained from Olympus.'
        },
        'eleusis': {
            name: 'Eleusis',
            description: 'City near Athens, site of the Eleusinian Mysteries.',
            significance: 'Where Demeter stayed in disguise and later established her mystery cult. The Eleusinian Mysteries became the most important religious rites in ancient Greece.'
        },
        'parthenion': {
            name: 'Parthenion (Virgin\'s Place)',
            description: 'Well in Eleusis where Demeter rested.',
            significance: 'The name "Virgin\'s Place" ironically reflects Persephone\'s lost maidenhood. Wells were liminal spaces connecting the upper and lower worlds, appropriate for Demeter\'s grief.'
        }
    },

    // Concepts
    concepts: {
        'divine-trap': {
            concept: 'Divine Deception',
            explanation: 'The narcissus is a trap created by Earth at Zeus\'s command to lure Persephone.',
            importance: 'Shows that even innocent beauty can be dangerous when gods plot. The collaboration between Zeus, Hades, and Earth against Persephone and Demeter reveals divine politics and gender dynamics.'
        },
        'many-names': {
            concept: 'Divine Epithets',
            explanation: 'Gods have multiple names and titles reflecting their various aspects and powers.',
            importance: 'Using euphemisms for Hades ("Ruler of Many", "Host of Many") shows religious fear. Greeks avoided his real name, believing it might attract his attention.'
        },
        'bird-of-prey': {
            concept: 'Transformation Imagery',
            explanation: 'Demeter becomes like a hunting bird in her desperate search.',
            importance: 'Shows how grief transforms even gods into something predatory and wild. The image of a mother as a bird of prey seeking her young is both protective and terrifying.'
        },
        'pomegranate': {
            concept: 'The Pomegranate Binding',
            explanation: 'Eating underworld food binds one to that realm permanently.',
            importance: 'The pomegranate seeds Persephone eats create the compromise: she must return to Hades for part of each year. This "accidental" eating may suggest acceptance of her role as Queen of the Dead.'
        }
    },

    // Primary Sources
    primarySources: [
        {
            text: "The peaks of the mountains and depths of the sea rang with her immortal voice: and her revered mother heard her.",
            citation: "Homeric Hymn to Demeter, lines 38-39"
        }
    ],

    // Significance content
    significanceCards: [
        {
            icon: '🌾',
            title: 'Agricultural Explanation',
            content: [
                'The myth explained the annual cycle of growth and dormancy that determined survival in agricultural societies. When Persephone descends to the underworld, Demeter\'s grief causes winter; her return brings spring\'s renewal.',
                'This wasn\'t just a story - it was essential knowledge that explained why crops failed in winter and returned in spring, giving meaning to the agricultural calendar that governed ancient life.'
            ]
        },
        {
            icon: '⚰️',
            title: 'Death and Afterlife',
            content: [
                'Persephone\'s dual role as both maiden of spring and Queen of the Dead made this myth especially important for funerary contexts. She represented the hope of renewal after death.',
                'The myth frequently appeared on sarcophagi because it offered comfort: just as Persephone returns from the underworld, perhaps the deceased might also find some form of continuation.'
            ]
        },
        {
            icon: '🏛️',
            title: 'The Eleusinian Mysteries',
            content: [
                'This hymn was central to the Eleusinian Mysteries, the most important religious cult in ancient Greece. Initiates believed they gained blessed afterlife through Demeter\'s secrets.',
                'The mysteries promised initiates a better fate after death, making Demeter and Persephone crucial figures for anyone concerned about their afterlife - which was everyone.'
            ]
        }
    ]
};

// Function to load lesson data into HTML
function loadLessonData() {
    // Load learning objectives
    loadLearningObjectives();
    
    // Load timeline
    loadTimeline();
    
    // Load prescribed text
    loadPrescribedText();
    
    // Load themes
    loadThemes();
    
    // Load significance content
    loadSignificanceContent();
    
    // Load analysis content
    loadAnalysisContent();
    
    // Load context content
    loadContextContent();
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

// Load Timeline
function loadTimeline() {
    const container = document.getElementById('timeline-container');
    if (container) {
        let html = `
            <div class="timeline-scroll">
                <div class="timeline-flow">
                    <div class="timeline-line"></div>
        `;
        
        lessonData.timelineEvents.forEach(event => {
            html += `
                <div class="timeline-event" onclick="showTimelineDetails('${event.id}')">
                    <span class="timeline-icon">${event.icon}</span>
                    <div class="timeline-dot"></div>
                    <div class="timeline-title">${event.title}</div>
                    <div class="timeline-subtitle">${event.subtitle}</div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    }
}

// Load Prescribed Text
function loadPrescribedText() {
    const container = document.getElementById('text-container');
    if (container) {
        let html = '';
        lessonData.prescribedText.forEach(paragraph => {
            html += `<p>${paragraph}</p>`;
        });
        container.innerHTML = html;
    }
}

// Load Themes
function loadThemes() {
    const container = document.getElementById('themes-grid');
    if (container) {
        container.innerHTML = lessonData.themes.map(theme => `
            <div class="theme-card" onclick="showThemeDetails('${theme.id}')">
                <div class="theme-title">${theme.title}</div>
                <div class="theme-description">${theme.description}</div>
            </div>
        `).join('');
    }
}

// Load Significance Content
function loadSignificanceContent() {
    const container = document.getElementById('significance-content');
    if (container) {
        let html = '<div class="significance-cards">';
        
        lessonData.significanceCards.forEach(card => {
            html += `
                <div class="significance-card">
                    <div class="significance-icon">${card.icon}</div>
                    <div class="significance-title">${card.title}</div>
                    ${card.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    }
}

// Load Analysis Content
function loadAnalysisContent() {
    const container = document.getElementById('analysis-content');
    if (container) {
        container.innerHTML = `
            <h4>The Power of Perspective</h4>
            <p>The hymn cleverly shifts perspective to build emotional impact. We experience the abduction through Persephone's terror, then shift to Demeter's maternal anguish. The narrative keeps Zeus distant and calculating, emphasising his role as architect of the crisis.</p>
            
            <h4>Divine Deception</h4>
            <p>The <span class="key-concept" onclick="showConceptExplanation('divine-trap')">narcissus trap</span> symbolises how beauty can conceal danger. Zeus and Hades collaborate to deceive an innocent girl, showing that even gods use trickery. The flower's extraordinary nature (100 blooms) signals divine intervention to the knowing audience.</p>
            
            <h4>Silence and Speech</h4>
            <p>The pattern of who speaks and who remains silent is significant. Persephone's cries go unheard by most; Demeter receives silence from those who know the truth; only <span class="key-figure" onclick="showFigureInfo('helios')">Helios</span>, who sees all, breaks the conspiracy of silence. This emphasises themes of powerlessness and hidden knowledge.</p>
            
            <div class="primary-source">
                "${lessonData.primarySources[0].text}"
                <div class="source-citation">— ${lessonData.primarySources[0].citation}</div>
            </div>
        `;
    }
}

// Load Context Content
function loadContextContent() {
    const container = document.getElementById('context-content');
    if (container) {
        container.innerHTML = `
            <h4>Marriage and Abduction</h4>
            <p>To modern readers, Hades's action seems like kidnapping and assault. However, in ancient Greek culture, marriage by abduction (<span class="key-term" onclick="showDefinition('harpagmos')">harpagmos</span>) was a recognised, if archaic, practice. The myth reflects anxieties about young women's powerlessness in marriage arrangements.</p>
            
            <h4>The Pomegranate Seed</h4>
            <p>Though not in this excerpt, the crucial <span class="key-concept" onclick="showConceptExplanation('pomegranate')">pomegranate seed</span> that binds Persephone to the underworld represents the irreversibility of certain transitions. Once she has "eaten the food of the dead," she cannot fully return to her former life - a powerful metaphor for the permanence of marriage and death.</p>
            
            <h4>Divine Justice and Compromise</h4>
            <p>The eventual compromise (Persephone spending part of the year in each realm) reflects Greek ideas about balance and reciprocity. Even Zeus must negotiate when faced with Demeter's devastating withdrawal. This shows that divine power has limits and that even gods must compromise.</p>
        `;
    }
}

// Interactive Functions
function showTimelineDetails(eventId) {
    const detailsDiv = document.getElementById('timeline-details');
    const event = lessonData.timelineEvents.find(e => e.id === eventId);
    
    if (event && detailsDiv) {
        detailsDiv.innerHTML = `
            <h4>${event.content.title}</h4>
            <p>${event.content.description}</p>
            <p><strong>Details:</strong> ${event.content.details}</p>
            <p><strong>Symbolism:</strong> ${event.content.symbolism}</p>
        `;
        detailsDiv.style.display = 'block';
        
        // Update active state
        document.querySelectorAll('.timeline-event').forEach(event => event.classList.remove('active'));
        event.target.closest('.timeline-event').classList.add('active');
    }
}

function showThemeDetails(themeId) {
    const detailsDiv = document.getElementById('theme-details');
    const theme = lessonData.themes.find(t => t.id === themeId);
    
    if (theme && detailsDiv) {
        detailsDiv.innerHTML = `
            <h4>${theme.content.title}</h4>
            <p>${theme.content.text}</p>
        `;
        detailsDiv.style.display = 'block';
        
        // Update active state
        document.querySelectorAll('.theme-card').forEach(card => card.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }
}

// Setup Interactive Content
function setupInteractiveContent() {
    // Interactive elements are handled by onclick attributes in the HTML
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

function showConceptExplanation(conceptId) {
    const concept = lessonData.concepts[conceptId];
    if (concept) {
        showInfoPanel('Key Concept', `
            <h4>${concept.concept}</h4>
            <p><strong>Explanation:</strong> ${concept.explanation}</p>
            <p><strong>Importance:</strong> ${concept.importance}</p>
        `);
    }
}

function showPlaceInfo(placeId) {
    const place = lessonData.places[placeId];
    if (place) {
        showInfoPanel('Sacred Place', `
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
            <h4 style="color: #0066ff; margin-bottom: 0.5rem;">${title}</h4>
            ${content}
        `;
    }
}

// Navigation function
function navigateToLesson(path) {
    window.location.href = path + '.html';
}
