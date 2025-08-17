// Analysis data for Virgil Aeneid II.40-56 interactive text
const textData = {
    "primus-omnes": {
        title: "primus ibi ante omnes",
        translation: "first there before all",
        device: "Emphatic Position",
        description: "Triple emphasis on Laocoon's primacy - first in position, location, and precedence.",
        effect: "Establishes him as the sole voice of reason, isolated in his clarity."
    },
    
    "magna-caterva": {
        title: "magna comitante caterva",
        translation: "with great crowd accompanying",
        device: "Ablative Absolute",
        description: "The crowd follows but doesn't lead - passive accompaniment to active warning.",
        effect: "Shows public interest but not public wisdom - they watch but don't understand."
    },
    
    "laocoon-character": {
        title: "Laocoon",
        translation: "Laocoon",
        device: "Named Prophet",
        description: "Priest of Apollo/Neptune - religious authority speaking truth to power.",
        effect: "Divine representative ignored by those who claim piety - irony of disregarded holiness."
    },
    
    "ardens-passion": {
        title: "ardens",
        translation: "burning",
        device: "Metaphorical Fire",
        description: "Burning with prophetic passion - fire imagery for urgent truth.",
        effect: "Physical heat matches mental urgency - body and mind united in warning."
    },
    
    "summa-arce": {
        title: "summa decurrit ab arce",
        translation: "runs down from highest citadel",
        device: "Vertical Movement",
        description: "Descends from high to low - wisdom coming down to folly.",
        effect: "Physical descent mirrors futile attempt to lower truth to deluded masses."
    },
    
    "procul-distance": {
        title: "procul",
        translation: "from afar",
        device: "Vocal Distance",
        description: "Shouts while still distant - urgency can't wait for proximity.",
        effect: "Truth travels ahead of the speaker - warning outruns the warner."
    },
    
    "o-miseri": {
        title: "o miseri",
        translation: "o wretched ones",
        device: "Apostrophe with Pity",
        description: "Direct address with 'miseri' - they're wretched but don't know it.",
        effect: "Dramatic irony - the speaker knows their doom while they celebrate."
    },
    
    "quae-insania": {
        title: "quae tanta insania",
        translation: "what great madness",
        device: "Rhetorical Question",
        description: "First of five questions - incredulity at collective delusion.",
        effect: "Questions that expect no answer - truth speaking to deaf ears."
    },
    
    "cives-citizens": {
        title: "cives",
        translation: "citizens",
        device: "Political Address",
        description: "Appeals to civic identity - fellow citizens, not just Trojans.",
        effect: "Invokes shared responsibility - your city, your choice, your doom."
    },
    
    "creditis-questions": {
        title: "creditis avectos hostes",
        translation: "do you believe enemies departed",
        device: "Incredulous Questions",
        description: "Series of questions exposing logical absurdity of their belief.",
        effect: "Forces them to examine their assumptions - interrogation as illumination."
    },
    
    "ulla-dona": {
        title: "ulla putatis dona",
        translation: "do you think any gifts",
        device: "Emphatic Word Order",
        description: "'Ulla' (any) emphatically placed - no gift is trustworthy.",
        effect: "Universal suspicion required - not some gifts, but all gifts suspect."
    },
    
    "dona-danaum": {
        title: "dona carere dolis Danaum",
        translation: "gifts lack tricks of Greeks",
        device: "Alliteration",
        description: "Dona...dolis Danaum - alliterative connection between gifts and deception.",
        effect: "Sound links gift with trick - phonetically inseparable."
    },
    
    "sic-ulixes": {
        title: "sic notus Ulixes",
        translation: "is Ulysses known thus",
        device: "Sarcastic Question",
        description: "Appeals to common knowledge of Odysseus's trickery.",
        effect: "Even enemies acknowledge his cunning - how can you forget?"
    },
    
    "hoc-ligno": {
        title: "hoc inclusi ligno",
        translation: "enclosed in this wood",
        device: "Demonstrative Emphasis",
        description: "'Hoc' points at the horse - physical gesture in the grammar.",
        effect: "Makes threat immediate and tangible - THIS thing right here."
    },
    
    "occultantur-hidden": {
        title: "occultantur",
        translation: "are hidden",
        device: "Present Tense Threat",
        description: "Present tense for current danger - Greeks hiding right now.",
        effect: "Immediacy of threat - not future possibility but present reality."
    },
    
    "in-nostros": {
        title: "in nostros",
        translation: "against our",
        device: "Possessive Appeal",
        description: "'Nostros' emphasises shared ownership - our walls, our danger.",
        effect: "Personalises threat - not abstract walls but OUR walls."
    },
    
    "fabricata-machina": {
        title: "fabricata est machina",
        translation: "machine has been built",
        device: "Technical Language",
        description: "'Machina' - military engineering term for siege equipment.",
        effect: "Demystifies the horse - it's not art but artillery."
    },
    
    "inspectura-ventura": {
        title: "inspectura...venturaque",
        translation: "about to spy...about to come",
        device: "Future Participles",
        description: "Double future participles show imminent threat.",
        effect: "Future already in motion - destruction approaching inevitably."
    },
    
    "aliquis-error": {
        title: "aliquis latet error",
        translation: "some trick lies hidden",
        device: "Hidden Threat",
        description: "'Latet' (lies hidden) with 'error' (deception) - concealed danger.",
        effect: "Unknown unknowns - if not these tricks, then something worse."
    },
    
    "equo-ne": {
        title: "equo ne credite",
        translation: "do not trust the horse",
        device: "Negative Command",
        description: "Direct prohibition with emphatic 'ne' - absolute warning.",
        effect: "Clearest possible instruction - simple, direct, ignored."
    },
    
    "teucri-trojans": {
        title: "Teucri",
        translation: "Trojans",
        device: "Epic Name",
        description: "Formal epic name for Trojans - invoking their ancestor Teucer.",
        effect: "Appeals to ancestral identity - remember who you are."
    },
    
    "quidquid-est": {
        title: "quidquid id est",
        translation: "whatever it is",
        device: "Indefinite Emphasis",
        description: "Doesn't matter what exactly - all possibilities are bad.",
        effect: "Comprehensive suspicion - details irrelevant, danger certain."
    },
    
    "timeo-danaos": {
        title: "timeo Danaos et dona ferentes",
        translation: "I fear Greeks even bearing gifts",
        device: "Proverbial Wisdom",
        description: "The famous line - became proverbial across cultures.",
        effect: "Crystallises wisdom in memorable phrase - truth made portable."
    },
    
    "validis-viribus": {
        title: "validis ingentem viribus hastam",
        translation: "huge spear with mighty strength",
        device: "Emphatic Accumulation",
        description: "Three words for power - validis, ingentem, viribus - overwhelming force.",
        effect: "Physical proof matches verbal warning - actions support words."
    },
    
    "feri-curvam": {
        title: "feri curvam compagibus",
        translation: "beast's curved with beams",
        device: "Construction Details",
        description: "Notes the horse's construction - beams and joints, not solid wood.",
        effect: "Technical observation proves it's hollow - architectural evidence."
    },
    
    "alvum-belly": {
        title: "alvum",
        translation: "belly",
        device: "Anatomical Term",
        description: "Horse has a belly/womb - organic term for wooden construction.",
        effect: "Suggests pregnancy - the horse carries something inside."
    },
    
    "contorsit-hurled": {
        title: "contorsit",
        translation: "hurled",
        device: "Violent Verb",
        description: "Powerful twisting throw - maximum force applied.",
        effect: "Desperate violence of truth - trying to break through delusion."
    },
    
    "stetit-tremens": {
        title: "stetit illa tremens",
        translation: "it stood trembling",
        device: "Revealing Vibration",
        description: "The spear quivers, making the horse tremble - reveals hollowness.",
        effect: "Physical proof of emptiness - the horse shivers with hidden Greeks."
    },
    
    "utero-recusso": {
        title: "uteroque recusso",
        translation: "with womb struck back",
        device: "Womb Imagery",
        description: "'Uterus' for horse's interior - feminine/birth imagery.",
        effect: "Horse pregnant with death - will birth destruction."
    },
    
    "insonuere-cavae": {
        title: "insonuere cavae...cavernae",
        translation: "hollow caverns resounded",
        device: "Onomatopoeia",
        description: "Sound words - 'insonuere' echoes the groaning noise.",
        effect: "Reader hears the proof - hollow echo confirms Greeks inside."
    },
    
    "si-fata": {
        title: "si fata deum",
        translation: "if fates of gods",
        device: "Conditional Fate",
        description: "Counterfactual condition - but fate was already determined.",
        effect: "Divine determinism - gods had already decided Troy must fall."
    },
    
    "si-mens": {
        title: "si mens non laeva fuisset",
        translation: "if mind had not been perverse",
        device: "Mental Perversion",
        description: "'Laeva' (left/sinister) - minds turned wrong way.",
        effect: "Collective insanity - entire city choosing blindness."
    },
    
    "ferro-foedare": {
        title: "ferro Argolicas foedare latebras",
        translation: "defile Greek hiding places with iron",
        device: "Violent Revelation",
        description: "Iron would have exposed and destroyed the hidden Greeks.",
        effect: "Violence as truth - weapons would have revealed reality."
    },
    
    "troia-staret": {
        title: "Troiaque nunc staret",
        translation: "Troy would now stand",
        device: "Tragic Counterfactual",
        description: "Present contrary to fact - Troy should be standing now.",
        effect: "Heartbreaking alternative history - survival was possible."
    },
    
    "priami-maneres": {
        title: "Priamique arx alta maneres",
        translation: "Priam's high citadel would remain",
        device: "Direct Address",
        description: "Apostrophe to the citadel - speaking to destroyed city.",
        effect: "Addresses the dead - speaking to what no longer exists."
    },
    
    "rhetorical-cascade": {
        title: "creditis...putatis...notus",
        translation: "believe...think...known",
        device: "Question Series",
        description: "Five rhetorical questions building argumentative momentum.",
        effect: "Battering ram of logic - repeated blows against delusion."
    },
    
    "triple-aut": {
        title: "aut...aut...aut",
        translation: "either...or...or",
        device: "Triple Alternative",
        description: "Three possibilities, each deadly - no safe interpretation.",
        effect: "Comprehensive threat - every option means destruction."
    },
    
    "hollow-proof": {
        title: "cavae...cavernae",
        translation: "hollow caverns",
        device: "Emphatic Hollowness",
        description: "Repetition of hollow/cave sounds - acoustic evidence.",
        effect: "Undeniable proof ignored - ears hear what eyes won't see."
    },
    
    "physical-warning": {
        title: "hastam...contorsit",
        translation: "hurled spear",
        device: "Action as Argument",
        description: "When words fail, Laocoon tries physical demonstration.",
        effect: "Desperate pedagogy - teaching through violence when speech fails."
    },
    
    "divine-human": {
        title: "fata deum...mens",
        translation: "fates of gods...mind",
        device: "Double Causation",
        description: "Both divine fate and human folly cause Troy's fall.",
        effect: "Overdetermined doom - heaven and earth conspire in destruction."
    },
    
    "womb-weapon": {
        title: "uteroque...alvum",
        translation: "womb...belly",
        device: "Pregnancy Metaphor",
        description: "Horse as pregnant creature - carrying death inside.",
        effect: "Perverse birth - delivers death instead of life."
    },
    
    "famous-line": {
        title: "timeo Danaos",
        translation: "I fear Greeks",
        device: "Memorable Maxim",
        description: "Line that entered world literature - proverbial wisdom.",
        effect: "Truth crystallised - complex warning in simple phrase."
    },
    
    "burning-prophet": {
        title: "Laocoon ardens",
        translation: "Laocoon burning",
        device: "Prophetic Fire",
        description: "Burns with truth like prophet - divine inspiration as heat.",
        effect: "Cassandra-like figure - burning with truth no one believes."
    },
    
    "collective-madness": {
        title: "insania, cives",
        translation: "madness, citizens",
        device: "Political Insanity",
        description: "Entire citizenry gone mad - democracy of delusion.",
        effect: "Mass psychosis - whole city chooses suicide."
    }
};
