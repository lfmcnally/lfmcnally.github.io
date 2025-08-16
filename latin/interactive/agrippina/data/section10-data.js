// Analysis data for Tacitus Annals 14.10 interactive text
const textData = {
    "perfecto-demum": {
        title: "perfecto demum scelere",
        translation: "crime finally completed",
        device: "Delayed Realisation",
        description: "'Demum' (only then) emphasises that understanding comes after action - deed precedes comprehension.",
        effect: "Shows how evil can be committed before it's understood - action outpaces moral processing."
    },
    
    "magnitudo-enormity": {
        title: "magnitudo",
        translation: "enormity",
        device: "Abstract Noun",
        description: "The 'magnitude' suggests both size and moral weight of the crime.",
        effect: "Single word captures the overwhelming nature of matricide - too big to grasp immediately."
    },
    
    "intellecta-realised": {
        title: "intellecta est",
        translation: "was understood",
        device: "Passive Recognition",
        description: "Passive voice suggests understanding forced upon him rather than actively achieved.",
        effect: "Nero as victim of his own crime's magnitude - overwhelmed by what he's done."
    },
    
    "modo-saepius": {
        title: "modo...saepius",
        translation: "sometimes...more often",
        device: "Alternating States",
        description: "Contrasts moments of stupor with frequent panic - unstable mental state.",
        effect: "Shows complete psychological breakdown - no consistent response possible."
    },
    
    "mentis-inops": {
        title: "mentis inops",
        translation: "bereft of mind",
        device: "Mental Vacancy",
        description: "Genitive with 'inops' shows complete mental emptiness - reason gone.",
        effect: "Matricide destroys the matricide's mind - crime consumes criminal."
    },
    
    "tamquam-exitium": {
        title: "tamquam exitium adlaturam",
        translation: "as if bringing destruction",
        device: "Fearful Expectation",
        description: "'Tamquam' with future participle shows dawn imagined as bringing doom.",
        effect: "Light becomes threat not relief - day will expose night's crime."
    },
    
    "auctore-burro": {
        title: "auctore Burro",
        translation: "at Burrus's instigation",
        device: "Ablative of Agent",
        description: "Burrus as 'auctor' (originator) of the false narrative - orchestrating the lie.",
        effect: "Military authority creates official fiction - power shapes truth."
    },
    
    "prima-adulatio": {
        title: "prima centurionum tribunorumque adulatio",
        translation: "first flattery of centurions and tribunes",
        device: "Orchestrated Response",
        description: "Military officers provide first wave of false congratulations.",
        effect: "Hierarchy of lies - military endorsement legitimises murder."
    },
    
    "prensantium-gratantium": {
        title: "prensantium manum gratantiumque",
        translation: "grasping hand and congratulating",
        device: "Physical Performance",
        description: "Present participles show ongoing physical gestures of false celebration.",
        effect: "Bodies perform lie - handshakes and congratulations create false reality."
    },
    
    "discrimen-matris": {
        title: "discrimen improvisum et matris facinus",
        translation: "unforeseen danger and mother's crime",
        device: "Inverted Reality",
        description: "Makes Nero victim of 'unexpected danger' and Agrippina the criminal.",
        effect: "Complete reversal - murderer becomes victim, victim becomes criminal."
    },
    
    "adire-templa": {
        title: "adire templa",
        translation: "approached temples",
        device: "Religious Endorsement",
        description: "Friends visit temples to give thanks - involving gods in the lie.",
        effect: "Divine sanction sought for matricide - gods enlisted in cover-up."
    },
    
    "coepto-exemplo": {
        title: "coepto exemplo",
        translation: "example having been started",
        device: "Contagion of Lies",
        description: "Ablative absolute shows how false behaviour spreads once begun.",
        effect: "Lies become epidemic - one false act triggers cascade."
    },
    
    "proxima-municipia": {
        title: "proxima Campaniae municipia",
        translation: "nearest Campanian towns",
        device: "Geographic Spread",
        description: "Nearby towns join false celebrations - lie radiates outward.",
        effect: "Entire region enlisted in fiction - geography of deception."
    },
    
    "victimis-sacrifices": {
        title: "victimis",
        translation: "with sacrificial victims",
        device: "Religious Ritual",
        description: "Animal sacrifices offer thanks for Nero's 'escape' - blood seals lie.",
        effect: "Sacred rituals perverted - holy acts sanctify unholy crime."
    },
    
    "laetitiam-joy": {
        title: "laetitiam testari",
        translation: "to witness joy",
        device: "Performed Emotion",
        description: "Public joy must be demonstrated and witnessed - emotion as spectacle.",
        effect: "Happiness becomes mandatory performance - grief forbidden."
    },
    
    "diversa-simulatione": {
        title: "diversa simulatione",
        translation: "with opposite pretence",
        device: "Counter-Performance",
        description: "Nero performs grief while others perform joy - layered deceptions.",
        effect: "Multiple false realities - everyone acting, no one sincere."
    },
    
    "maestus-sorrowful": {
        title: "maestus",
        translation: "sorrowful",
        device: "Feigned Grief",
        description: "Nero acts sad about the death he caused - murderer mourning victim.",
        effect: "Ultimate hypocrisy - killer's tears for his victim."
    },
    
    "quasi-incolumitati": {
        title: "quasi incolumitati suae infensus",
        translation: "as if hostile to his own safety",
        device: "Performed Self-Hatred",
        description: "'Quasi' signals pretence - acting angry about surviving.",
        effect: "Wishes he'd died instead - performing noble sentiment after ignoble act."
    },
    
    "inlacrimans-weeping": {
        title: "inlacrimans",
        translation: "weeping",
        device: "Present Participle",
        description: "Ongoing tears for mother he murdered - continuous performance.",
        effect: "Crocodile tears - physical display of unfelt emotion."
    },
    
    "ut-hominum": {
        title: "ut hominum vultus",
        translation: "as human faces",
        device: "Simile",
        description: "Faces can change expression but places cannot - landscape holds truth.",
        effect: "Nature won't lie like humans - geography witnesses honestly."
    },
    
    "facies-appearance": {
        title: "locorum facies",
        translation: "appearance of places",
        device: "Permanent Witness",
        description: "Places maintain their appearance - cannot be altered like expressions.",
        effect: "Crime scene remains constant - eternal reminder of guilt."
    },
    
    "obversabatur-aspectus": {
        title: "obversabaturque...gravis aspectus",
        translation: "grievous sight kept appearing",
        device: "Haunting Presence",
        description: "Imperfect suggests continuous haunting - scene won't leave mind.",
        effect: "Landscape becomes psychological torture - memory embedded in place."
    },
    
    "sonitum-tubae": {
        title: "sonitum tubae",
        translation: "sound of trumpet",
        device: "Supernatural Element",
        description: "Ghostly trumpet sounds from hills - military or funeral association.",
        effect: "Dead mother's spirit seems to sound alarm - supernatural justice."
    },
    
    "audiri-supernatural": {
        title: "planctusque...audiri",
        translation: "groaning to be heard",
        device: "Passive Infinitive",
        description: "Passive construction makes sounds exist independently - not imagined but heard.",
        effect: "Supernatural becomes natural - ghosts as fact not fear."
    },
    
    "neapolim-escape": {
        title: "Neapolim",
        translation: "to Naples",
        device: "Geographic Flight",
        description: "Flees to Greek city - escaping Roman scene of crime.",
        effect: "Physical distance sought from psychological trauma - running from memory."
    },
    
    "summa-gist": {
        title: "summa",
        translation: "gist",
        device: "Documentary Summary",
        description: "Reduces complex lie to simple summary - official version crystallised.",
        effect: "Truth simplified to lie - complexity reduced to false clarity."
    },
    
    "repertum-ferro": {
        title: "repertum cum ferro",
        translation: "discovered with sword",
        device: "Planted Evidence",
        description: "References the staged scene with Agerinus - false proof cited as fact.",
        effect: "Fabricated evidence becomes historical record - lie becomes truth."
    },
    
    "percussorem-assassin": {
        title: "percussorem",
        translation: "assassin",
        device: "False Accusation",
        description: "Agerinus transformed from messenger to assassin in official account.",
        effect: "Innocent becomes guilty - truth inverted in documentation."
    },
    
    "agerinum-scapegoat": {
        title: "Agerinum",
        translation: "Agerinus",
        device: "Named Scapegoat",
        description: "Freedman messenger becomes official assassin - specific person blamed.",
        effect: "Individual sacrifice to protect emperor - one man's reputation destroyed."
    },
    
    "conscientia-guilt": {
        title: "conscientia",
        translation: "from guilt",
        device: "Projected Guilt",
        description: "Agrippina's supposed guilt for failed plot - Nero's guilt transferred.",
        effect: "Psychological projection - murderer's guilt attributed to victim."
    },
    
    "luisse-poenas": {
        title: "luisse eam poenas",
        translation: "she paid penalty",
        device: "Legal Language",
        description: "Makes murder sound like legal justice - execution not assassination.",
        effect: "Murder transformed into justice - crime becomes punishment."
    },
    
    "quasi-paravisset": {
        title: "quasi scelus paravisset",
        translation: "as if she had prepared crime",
        device: "False Causation",
        description: "'Quasi' with pluperfect subjunctive creates false prior plot.",
        effect: "Invents crime to justify murder - retroactive justification."
    },
    
    "nocturnal-alternation": {
        title: "modo per silentium...saepius pavore",
        translation: "now in silence...often in fear",
        device: "Psychological Oscillation",
        description: "Swings between catatonia and panic - no stable mental state.",
        effect: "Mind broken by matricide - cannot find equilibrium."
    },
    
    "military-validation": {
        title: "centurionum tribunorumque",
        translation: "of centurions and tribunes",
        device: "Hierarchical Endorsement",
        description: "Military ranks provide false validation - institutional support.",
        effect: "Army complicit in lie - military might endorses matricide."
    },
    
    "religious-perversion": {
        title: "adire templa",
        translation: "visit temples",
        device: "Sacred Contamination",
        description: "Holy places used to sanctify unholy act - religion corrupted.",
        effect: "Gods made accomplices - divine approval manufactured."
    },
    
    "geographic-conscience": {
        title: "maris illius et litorum",
        translation: "of that sea and shores",
        device: "Demonstrative Emphasis",
        description: "'Illius' (that) makes specific sea and shore accusatory - particular place of crime.",
        effect: "Specific geography becomes conscience - exact location holds exact memory."
    },
    
    "supernatural-sounds": {
        title: "sonitum...planctusque",
        translation: "sound...and groaning",
        device: "Auditory Haunting",
        description: "Multiple supernatural sounds - trumpet and groaning - military and mournful.",
        effect: "Dead mother seems to announce crime and mourn - ghost as witness."
    },
    
    "official-fiction": {
        title: "litterasque ad senatum",
        translation: "letter to Senate",
        device: "Documentary Lie",
        description: "Official communication creates historical record - lie becomes archive.",
        effect: "False narrative becomes permanent record - history written by murderer."
    },
    
    "victim-criminal": {
        title: "matris facinus",
        translation: "mother's crime",
        device: "Complete Inversion",
        description: "Genitive makes Agrippina the criminal - total reversal of truth.",
        effect: "Ultimate gaslighting - victim posthumously criminalised."
    },
    
    "performance-cascade": {
        title: "amici...municipia",
        translation: "friends...towns",
        device: "Expanding Deception",
        description: "Lie spreads from friends to towns - widening circles of falsehood.",
        effect: "Deception becomes social contagion - entire society performs lie."
    },
    
    "dawn-as-doom": {
        title: "lucem...tamquam exitium",
        translation: "daylight as if destruction",
        device: "Light as Threat",
        description: "Dawn imagined as bringing doom - light exposes darkness.",
        effect: "Natural cycle becomes threat - sunrise as judgment day."
    }
};
