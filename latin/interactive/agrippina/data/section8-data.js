// Analysis data for Tacitus Annals 14.8 interactive text
const textData = {
    "vulgato-ablative": {
        title: "vulgato Agrippinae periculo",
        translation: "when Agrippina's danger became known",
        device: "Ablative Absolute",
        description: "The ablative absolute construction shows news spreading as context for crowd action.",
        effect: "Creates sense of information rippling through community - news as catalyst for action."
    },
    
    "quasi-casu": {
        title: "quasi casu evenisset",
        translation: "as if it happened by chance",
        device: "False Appearance",
        description: "'Quasi' signals the pretence - people initially believe it was an accident.",
        effect: "Shows successful deception initially - the cover story works at first."
    },
    
    "decurrere-rushing": {
        title: "decurrere",
        translation: "ran down",
        device: "Historic Infinitive",
        description: "The infinitive creates vivid immediacy - we see crowds rushing to shore.",
        effect: "Makes crowd movement urgent and spontaneous - genuine concern drives action."
    },
    
    "hi-tricolon": {
        title: "hi...hi...alii",
        translation: "some...others...others",
        device: "Tricolon with Anaphora",
        description: "Three groups doing different actions simultaneously - climbing, boarding, wading.",
        effect: "Creates cinematic scene of varied simultaneous actions - organised chaos."
    },
    
    "protendere-reaching": {
        title: "manus protendere",
        translation: "stretching out hands",
        device: "Gesture of Supplication",
        description: "Outstretched hands suggest prayer, pleading, or searching - multiple meanings.",
        effect: "Physical gesture embodies emotional state - desperation made visible."
    },
    
    "questibus-votis": {
        title: "questibus, votis, clamore",
        translation: "complaints, prayers, shouting",
        device: "Tricolon of Sounds",
        description: "Three types of vocalisation build cacophony - grief, hope, confusion.",
        effect: "Auditory chaos represents emotional turmoil - the shore becomes theatre of feeling."
    },
    
    "diversa-incerta": {
        title: "diversa rogitantium aut incerta respondentium",
        translation: "different questions or uncertain answers",
        device: "Antithesis",
        description: "Contrasts various questions with vague answers - communication breakdown.",
        effect: "Shows confusion and lack of information - rumour fills the vacuum of fact."
    },
    
    "compleri-filled": {
        title: "compleri",
        translation: "to be filled",
        device: "Passive Infinitive",
        description: "The passive suggests the shore is overwhelmed by sound and emotion.",
        effect: "The space itself becomes saturated with human feeling - no room for silence."
    },
    
    "adfluere-flocking": {
        title: "adfluere",
        translation: "flowed to",
        device: "Liquid Metaphor",
        description: "The verb suggests crowds flowing like water - continuous movement.",
        effect: "Makes crowd movement seem natural, inevitable - human tide responding to crisis."
    },
    
    "ingens-multitudo": {
        title: "ingens multitudo",
        translation: "huge crowd",
        device: "Scale Emphasis",
        description: "'Ingens' emphasises the massive scale of public response.",
        effect: "Shows Agrippina's continued popular support - the people still care."
    },
    
    "luminibus-torches": {
        title: "cum luminibus",
        translation: "with torches",
        device: "Visual Detail",
        description: "Torches provide practical light but also suggest ritual, funeral, or vigil.",
        effect: "Creates visual drama - points of light in darkness, hope in despair."
    },
    
    "incolumem-safe": {
        title: "incolumem",
        translation: "unharmed",
        device: "Key Revelation",
        description: "Single word transforms mood - she's alive and unhurt.",
        effect: "Moment of relief that will soon turn to horror - false hope."
    },
    
    "ut-gratandum": {
        title: "ut ad gratandum",
        translation: "as if to give thanks",
        device: "Purpose Expression with Gerund",
        description: "The gerund suggests formal thanksgiving - religious or civic celebration planned.",
        effect: "Shows public joy at survival - they want to celebrate, not mourn."
    },
    
    "aspectu-armati": {
        title: "aspectu armati et minitantis agminis",
        translation: "sight of armed and threatening column",
        device: "Military Menace",
        description: "Armed soldiers appear as 'threatening column' - military formation against civilians.",
        effect: "State violence crushes popular sentiment - power versus people."
    },
    
    "disiecti-scattered": {
        title: "disiecti",
        translation: "scattered",
        device: "Violent Dispersal",
        description: "The perfect passive participle shows crowds forcibly broken up.",
        effect: "Joy transforms to fear - celebration becomes flight."
    },
    
    "anicetus-executor": {
        title: "Anicetus",
        translation: "Anicetus",
        device: "Named Killer",
        description: "The freedman returns to complete his failed mission - persistent evil.",
        effect: "Personal responsibility identified - not anonymous violence but named murderer."
    },
    
    "statione-guards": {
        title: "statione",
        translation: "with guards",
        device: "Military Encirclement",
        description: "Technical military term for guard posts - professional operation.",
        effect: "Transforms home into prison - no escape possible."
    },
    
    "circumdat-surrounds": {
        title: "circumdat",
        translation: "surrounds",
        device: "Present Tense Immediacy",
        description: "Historic present makes the encirclement happening now.",
        effect: "We watch the trap closing - walls of soldiers sealing fate."
    },
    
    "refracta-ablative": {
        title: "refractaque ianua",
        translation: "door having been broken",
        device: "Ablative Absolute - Violence",
        description: "The broken door shows forced entry - no pretence of legality.",
        effect: "Physical violence against property precedes violence against person."
    },
    
    "abripit-violence": {
        title: "abripit",
        translation: "drags away",
        device: "Violent Verb",
        description: "'Abripere' suggests violent seizure - slaves torn from positions.",
        effect: "Brutality against servants shows what's coming for mistress."
    },
    
    "cubiculi-bedroom": {
        title: "cubiculi",
        translation: "bedroom",
        device: "Intimate Space",
        description: "The bedroom is most private space - final sanctuary violated.",
        effect: "No space remains safe - even most intimate refuge breached."
    },
    
    "pauci-ceteris": {
        title: "pauci...ceteris",
        translation: "few...the rest",
        device: "Contrast of Loyalty",
        description: "Few remain loyal while most flee - isolation through abandonment.",
        effect: "Shows how quickly support evaporates when death approaches."
    },
    
    "terrore-dread": {
        title: "terrore",
        translation: "terror",
        device: "Psychological State",
        description: "Terror paralyses the slaves - fear prevents loyalty.",
        effect: "Emotional contagion - terror spreads faster than loyalty holds."
    },
    
    "exterritis-terrified": {
        title: "exterritis",
        translation: "terrified out of their wits",
        device: "Intensified Fear",
        description: "Compound form of 'terrere' shows extreme terror - beyond normal fear.",
        effect: "Complete psychological breakdown - servants unable to function."
    },
    
    "modicum-lumen": {
        title: "modicum lumen",
        translation: "modest light",
        device: "Atmospheric Detail",
        description: "Dim lighting creates shadowy scene - hard to see clearly.",
        effect: "Physical darkness mirrors moral darkness - murder in shadows."
    },
    
    "una-solitude": {
        title: "una",
        translation: "one",
        device: "Numerical Isolation",
        description: "Single maid emphasises how alone Agrippina is.",
        effect: "From crowds to one - progressive abandonment visualised."
    },
    
    "magis-anxia": {
        title: "magis ac magis anxia",
        translation: "more and more anxious",
        device: "Progressive Intensification",
        description: "Repeated 'magis' shows anxiety building - crescendo of fear.",
        effect: "Internal tension mounting as external threats approach."
    },
    
    "agerinus-absent": {
        title: "ne Agerinus quidem",
        translation: "not even Agerinus",
        device: "Emphatic Negation",
        description: "'Ne...quidem' emphasises that even her messenger hasn't returned.",
        effect: "Last hope extinguished - if messenger doesn't return, he's captured or dead."
    },
    
    "aliam-fore": {
        title: "aliam fore laetae rei faciem",
        translation: "appearance of happy event would be different",
        device: "Elliptical Reasoning",
        description: "Agrippina's logical deduction - good news would look different than this.",
        effect: "Shows her intelligence reading signs - she knows death approaches."
    },
    
    "solitudinem-strepitus": {
        title: "solitudinem ac repentinos strepitus",
        translation: "solitude and sudden noises",
        device: "Ominous Combination",
        description: "Emptiness punctuated by sudden sounds - horror movie atmosphere.",
        effect: "Sensory details build dread - silence broken by violence."
    },
    
    "extremi-mali": {
        title: "extremi mali",
        translation: "ultimate evil",
        device: "Superlative Disaster",
        description: "'Extremus' marks this as the worst possible outcome.",
        effect: "She knows this is the end - maximum evil approaches."
    },
    
    "tu-quoque": {
        title: "tu quoque me deseris",
        translation: "you too desert me",
        device: "Direct Speech - Pathos",
        description: "Direct address to maid captures moment of total abandonment.",
        effect: "Plaintive question humanises Agrippina - even empress feels abandonment."
    },
    
    "prolocuta-speaking": {
        title: "prolocuta",
        translation: "having spoken",
        device: "Perfect Participle",
        description: "Marks her last words to the maid before facing killers.",
        effect: "Final human connection severed - now truly alone."
    },
    
    "trierarcho-centurione": {
        title: "trierarcho Herculeio et Obarito centurione",
        translation: "captain Herculeius and centurion Obaritus",
        device: "Named Killers",
        description: "Specific names and ranks of murderers - official naval execution squad.",
        effect: "Not anonymous violence but specific men with names and ranks."
    },
    
    "si-conditions": {
        title: "si ad visendum...sin facinus",
        translation: "if to visit...but if crime",
        device: "Conditional Alternatives",
        description: "Agrippina presents two possibilities - maintaining dignity through logic.",
        effect: "Even facing death, she speaks with authority and reason."
    },
    
    "refotam-recovered": {
        title: "refotam",
        translation: "recovered",
        device: "False Narrative",
        description: "She maintains fiction of recovery - still playing the game.",
        effect: "Desperate attempt to maintain pretence even when all know truth."
    },
    
    "facinus-crime": {
        title: "facinus",
        translation: "crime",
        device: "Legal Language",
        description: "Uses formal term for crime - making this legally significant.",
        effect: "Even in extremis, she speaks as accuser not victim."
    },
    
    "nihil-credere": {
        title: "nihil se de filio credere",
        translation: "she believes nothing about her son",
        device: "Maternal Denial",
        description: "Refuses to believe Nero ordered this - protecting son even now.",
        effect: "Final maternal act - shielding son from matricide accusation."
    },
    
    "imperatum-parricidium": {
        title: "non imperatum parricidium",
        translation: "murder not ordered",
        device: "Denial of Authority",
        description: "Denies Nero gave the order - maintains his innocence.",
        effect: "Last attempt to prevent son being labelled mother-killer."
    },
    
    "parricidium-matricide": {
        title: "parricidium",
        translation: "parent-murder",
        device: "Technical Term",
        description: "Uses the specific legal term for killing a parent - worst crime in Roman law.",
        effect: "Names the unnamed - this is matricide, the ultimate taboo."
    },
    
    "circumsistunt-surround": {
        title: "circumsistunt",
        translation: "they surround",
        device: "Military Formation",
        description: "Present tense shows killers taking positions around bed.",
        effect: "Bed becomes execution ground - nowhere to flee."
    },
    
    "percussores-assassins": {
        title: "percussores",
        translation: "assassins",
        device: "Professional Killers",
        description: "Technical term for professional killers - not soldiers but assassins.",
        effect: "Specialised murderers - trained for this specific task."
    },
    
    "fusti-club": {
        title: "fusti",
        translation: "with club",
        device: "Brutal Weapon",
        description: "Club is crude weapon - not honourable sword but thug's tool.",
        effect: "Degrading weapon choice - killed like criminal not aristocrat."
    },
    
    "adflixit-struck": {
        title: "adflixit",
        translation: "struck",
        device: "Perfect Violence",
        description: "Perfect tense makes the blow complete and certain.",
        effect: "First blow landed - violence begun, no turning back."
    },
    
    "destringenti-participle": {
        title: "destringenti",
        translation: "drawing sword",
        device: "Present Participle",
        description: "Participle shows ongoing action - sword being drawn for killing blow.",
        effect: "Slow motion moment - we see the sword emerging for death."
    },
    
    "protendens-offering": {
        title: "protendens uterum",
        translation: "offering her womb",
        device: "Defiant Gesture",
        description: "Active participle - she chooses to present her belly.",
        effect: "Transforms from victim to agent - controlling her own death."
    },
    
    "uterum-womb": {
        title: "uterum",
        translation: "womb",
        device: "Symbolic Target",
        description: "The womb that bore Nero becomes the target - source of life for death.",
        effect: "Makes murder into symbolic destruction of motherhood itself."
    },
    
    "ventrem-feri": {
        title: "ventrem feri",
        translation: "strike the belly",
        device: "Imperative Command",
        description: "Direct command to killers - she orders her own death's location.",
        effect: "Final act of control - commanding even her murderers."
    },
    
    "exclamavit-shouted": {
        title: "exclamavit",
        translation: "shouted",
        device: "Vocal Force",
        description: "Not quiet acceptance but shouted defiance - voice carries.",
        effect: "Ensures witnesses hear - her words will be remembered."
    },
    
    "multis-vulneribus": {
        title: "multis vulneribus",
        translation: "with many wounds",
        device: "Multiple Violence",
        description: "Many wounds suggest frenzied attack or shared guilt.",
        effect: "Overkill reveals either panic or ensuring shared responsibility."
    },
    
    "confecta-finished": {
        title: "confecta est",
        translation: "was finished off",
        device: "Passive Conclusion",
        description: "Passive voice with 'conficere' - she's completed, finished, ended.",
        effect: "Reduces human to task completed - mother becomes mission accomplished."
    }
};
