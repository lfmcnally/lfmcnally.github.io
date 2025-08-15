// Analysis data for Tacitus Annals 14.4 interactive text
const textData = {
    "placuit-decision": {
        title: "placuit",
        translation: "was decided upon",
        device: "Euphemistic Opening",
        description: "The passive 'placuit' (it pleased/was decided) continues the bureaucratic tone from the previous chapter - murder as administrative decision.",
        effect: "Makes matricide sound like a committee resolution rather than ultimate evil."
    },
    
    "sollertia-ingenuity": {
        title: "sollertia",
        translation: "ingenuity",
        device: "Perverse Praise",
        description: "'Sollertia' suggests cleverness and skill - murder becomes opportunity for creative problem-solving.",
        effect: "Transforms atrocity into achievement - celebrating the craft of killing mother."
    },
    
    "tempore-iuta": {
        title: "tempore etiam iuta",
        translation: "helped also by timing",
        device: "Fortuitous Circumstance",
        description: "The timing of the festival is presented as helpful coincidence, though likely deliberately chosen.",
        effect: "Makes murder seem fated - even time itself conspires in the matricide."
    },
    
    "quinquatruum-festival": {
        title: "Quinquatruum festos dies",
        translation: "festival days of Quinquatrus",
        device: "Religious Context",
        description: "The Quinquatrus was Minerva's festival (March 19-23) - using religious celebration as cover for murder.",
        effect: "Perverts sacred time into criminal opportunity - holy days become unholy."
    },
    
    "baiae-location": {
        title: "Baias",
        translation: "at Baiae",
        device: "Geographic Trap",
        description: "Baiae was Rome's pleasure resort, known for luxury and loose morals - the perfect place for 'accidents'.",
        effect: "Location provides both plausible setting for death and symbolic corruption."
    },
    
    "elicit-lures": {
        title: "elicit",
        translation: "entices",
        device: "Predatory Verb",
        description: "'Elicere' means to lure out, entice - Agrippina is prey being drawn from safety.",
        effect: "Makes Nero the hunter and Agrippina the unsuspecting quarry."
    },
    
    "ferendas-placandum": {
        title: "ferendas parentium iracundias",
        translation: "parents' anger must be endured",
        device: "False Filial Piety",
        description: "Nero pretends to accept parental anger as something children must bear - performing the dutiful son.",
        effect: "Uses proper Roman values as mask for ultimate violation of those values."
    },
    
    "dictitans-repeated": {
        title: "dictitans",
        translation: "repeatedly saying",
        device: "Frequentative Verb",
        description: "The frequentative form shows repetition - Nero keeps saying this to make it believable.",
        effect: "Shows the persistence of deception - lies repeated until they seem true."
    },
    
    "rumorem-reconciliationis": {
        title: "rumorem reconciliationis",
        translation: "rumour of reconciliation",
        device: "Manufactured Narrative",
        description: "The false story is carefully crafted - public opinion being manipulated before the crime.",
        effect: "Shows concern for reputation management - the cover story precedes the crime."
    },
    
    "facili-credulitate": {
        title: "facili feminarum credulitate",
        translation: "easy credulity of women",
        device: "Misogynistic Generalisation",
        description: "Tacitus inserts Roman prejudice about women's supposed weakness for believing good news.",
        effect: "Shifts some blame to Agrippina - she's partially responsible for believing lies."
    },
    
    "gaudia-joys": {
        title: "gaudia",
        translation: "joyful things",
        device: "Ironic Hope",
        description: "Agrippina's hope for 'joys' (reconciliation) leads her to death - optimism becomes vulnerability.",
        effect: "Makes hope itself dangerous - wanting happiness delivers destruction."
    },
    
    "venientem-participle": {
        title: "venientem",
        translation: "coming",
        device: "Present Participle",
        description: "The accusative participle shows Agrippina in motion toward her doom - actively approaching death.",
        effect: "Creates dramatic irony - we watch her walking into the trap."
    },
    
    "obvius-meeting": {
        title: "obvius",
        translation: "meeting",
        device: "Staged Encounter",
        description: "'Obvius' suggests going out to meet someone - Nero performs the eager, welcoming son.",
        effect: "The greeting becomes part of the trap - affection as bait."
    },
    
    "antio-journey": {
        title: "Antio",
        translation: "from Antium",
        device: "Journey Marker",
        description: "Antium (modern Anzio) was about 35 miles from Baiae - a significant journey into danger.",
        effect: "The distance travelled shows Agrippina's trust - she comes far to meet death."
    },
    
    "manu-complexu": {
        title: "manu et complexu",
        translation: "with hand and embrace",
        device: "Physical Escalation",
        description: "The progression from hand to embrace shows increasing physical intimacy as manipulation.",
        effect: "Physical affection becomes weapon - touch transformed into treachery."
    },
    
    "baulos-villa": {
        title: "Baulos",
        translation: "to Bauli",
        device: "Specific Location",
        description: "Bauli was a specific villa between Misenum and Baiae - the exact murder location identified.",
        effect: "Documentary precision makes the account feel historically real and immediate."
    },
    
    "geographical-detail": {
        title: "promunturium Misenum inter et Baianum lacum",
        translation: "between Cape Misenum and the Baian lake",
        device: "Geographic Precision",
        description: "Exact topographical details create a map of murder - the reader can visualise the trap's location.",
        effect: "Transforms landscape into crime scene - geography becomes complicit."
    },
    
    "flexo-mari": {
        title: "flexo mari",
        translation: "by the curved sea",
        device: "Curved Danger",
        description: "The 'bent' or 'curved' sea suggests something twisted, not straight - even nature seems crooked here.",
        effect: "The very shape of the coast seems sinister - curved like the plot itself."
    },
    
    "adluitur-washed": {
        title: "adluitur",
        translation: "is washed",
        device: "Passive Present",
        description: "The present tense makes the location vivid - we can hear the waves that will soon kill.",
        effect: "The washing waves foreshadow how the sea will 'wash away' Agrippina."
    },
    
    "stabat-ominous": {
        title: "stabat",
        translation: "stood",
        device: "Ominous Positioning",
        description: "The ship 'stood' waiting - the imperfect suggests continuous, patient readiness for murder.",
        effect: "Makes the ship seem predatory - standing ready to strike."
    },
    
    "ornatior-elaborate": {
        title: "ornatior",
        translation: "more elaborate",
        device: "Deceptive Luxury",
        description: "The comparative 'more ornate' suggests special honour - luxury as camouflage for death trap.",
        effect: "Shows how flattery disarms suspicion - the fancier the gift, the less suspected."
    },
    
    "tamquam-pretence": {
        title: "tamquam",
        translation: "as if",
        device: "Modal Particle",
        description: "'Tamquam' signals pretence - what follows is false appearance, not reality.",
        effect: "Tacitus continually reminds us everything is performance, nothing genuine."
    },
    
    "honori-matris": {
        title: "honori matris",
        translation: "as honour to mother",
        device: "Dative of Purpose",
        description: "The dative suggests the ship exists specifically to honour her - purpose-built flattery.",
        effect: "Makes murder weapon seem like gift - death disguised as distinction."
    },
    
    "quippe-explanation": {
        title: "quippe",
        translation: "for indeed",
        device: "Explanatory Particle",
        description: "'Quippe' introduces explanation for why the fancy ship wouldn't seem suspicious.",
        effect: "Shows Nero's psychological calculation - he knows her habits and expectations."
    },
    
    "triremi-classiariorum": {
        title: "triremi et classiariorum remigio",
        translation: "trireme with marine rowers",
        device: "Military Precedent",
        description: "Agrippina normally travelled with military escort - proper imperial protocol.",
        effect: "The upgrade to luxury from military transport seems like promotion, not peril."
    },
    
    "epulas-banquet": {
        title: "epulas",
        translation: "banquet",
        device: "Feast Before Death",
        description: "The banquet becomes the last supper - final meal before attempted murder.",
        effect: "Perverts hospitality into homicide - the host plans to kill his guest."
    },
    
    "ut-occultando": {
        title: "ut occultando facinori",
        translation: "so that for hiding the crime",
        device: "Purpose Clause",
        description: "The purpose clause explicitly states criminal intent - darkness needed to hide murder.",
        effect: "Shows premeditation - even the timing calculated for concealment."
    },
    
    "nox-darkness": {
        title: "nox",
        translation: "night",
        device: "Darkness as Accomplice",
        description: "Night becomes co-conspirator - darkness will hide what daylight would reveal.",
        effect: "Makes nature complicit - time of day enlisted in evil."
    },
    
    "constitit-known": {
        title: "constitit",
        translation: "it was established",
        device: "Historical Certainty",
        description: "Tacitus claims this as established fact - the informer definitely existed.",
        effect: "Adds documentary authority whilst showing intelligence networks were active."
    },
    
    "proditorem-informer": {
        title: "proditorem",
        translation: "informer",
        device: "Failed Warning",
        description: "Someone betrayed the plot to Agrippina - she had intelligence but ignored it.",
        effect: "Makes her death partly her fault - she was warned but came anyway."
    },
    
    "auditis-insidiis": {
        title: "auditis insidiis",
        translation: "when the plot was heard",
        device: "Ablative Absolute",
        description: "The ablative absolute shows she definitely heard about the plot - information received.",
        effect: "Removes excuse of ignorance - she knew danger existed but proceeded."
    },
    
    "an-crederet": {
        title: "an crederet ambiguam",
        translation: "uncertain whether to believe",
        device: "Psychological Uncertainty",
        description: "Her uncertainty about believing shows internal conflict - suspicious but hopeful.",
        effect: "Captures the tragedy - wanting to believe in son despite evidence of evil."
    },
    
    "gestamine-sellae": {
        title: "gestamine sellae",
        translation: "by sedan chair conveyance",
        device: "Alternative Transport",
        description: "Choosing land transport over sea suggests some caution - avoiding the prepared ship.",
        effect: "Shows she's not completely naive - takes precautions even while attending."
    },
    
    "blandimentum-flattery": {
        title: "blandimentum",
        translation: "flattery",
        device: "Seductive Deception",
        description: "'Blandimentum' is coaxing, flattery - soft words that disarm hard suspicions.",
        effect: "Shows how emotional manipulation overcomes rational caution."
    },
    
    "sublevavit-alleviated": {
        title: "sublevavit",
        translation: "alleviated",
        device: "Lifted Weight",
        description: "The verb means to lift up, lighten - flattery literally lightens the weight of fear.",
        effect: "Makes fear seem like burden that can be removed by kind words."
    },
    
    "comiter-graciously": {
        title: "comiter",
        translation: "graciously",
        device: "Courteous Reception",
        description: "The adverb emphasises warm, friendly reception - perfect host behaviour.",
        effect: "The graciousness makes the planned murder more monstrous."
    },
    
    "superque-ipsum": {
        title: "superque ipsum",
        translation: "above himself",
        device: "Hierarchical Honour",
        description: "Seating her above him at table was supreme honour - mother elevated above emperor son.",
        effect: "Maximum honour precedes maximum dishonour - highest seat before lowest deed."
    },
    
    "pluribus-sermonibus": {
        title: "pluribus sermonibus",
        translation: "with many conversations",
        device: "Conversational Variety",
        description: "Multiple conversations suggest extended, varied interaction - not brief or perfunctory.",
        effect: "Shows Nero's sustained performance - maintaining deception over time."
    },
    
    "modo-variatio": {
        title: "modo familiaritate iuvenili",
        translation: "now with youthful intimacy",
        device: "Variatio",
        description: "The 'modo...rursus' structure shows Nero varying his approach - informal then formal.",
        effect: "Psychological disorientation through inconsistency - keeps Agrippina off-balance."
    },
    
    "rursus-adductus": {
        title: "rursus adductus",
        translation: "then again serious",
        device: "Tonal Shift",
        description: "'Adductus' means drawn tight, serious - shifting from casual to grave conversation.",
        effect: "The alternation between modes prevents her from reading his true intent."
    },
    
    "quasi-seria": {
        title: "quasi seria consociaret",
        translation: "as if sharing serious matters",
        device: "False Confidence",
        description: "'Quasi' (as if) signals pretence - he acts like he's sharing state secrets.",
        effect: "Makes her feel trusted and important - consultation as manipulation."
    },
    
    "tracto-longum": {
        title: "tracto in longum convictu",
        translation: "banquet dragged out at length",
        device: "Temporal Extension",
        description: "Deliberately prolonging the dinner to ensure maximum darkness for the crime.",
        effect: "Time itself weaponised - every moment calculated for murder."
    },
    
    "artius-haerens": {
        title: "artius oculis et pectori haerens",
        translation: "clinging closely to eyes and breast",
        device: "Physical Clinging",
        description: "The comparative 'artius' (more closely) with 'haerens' (clinging) shows desperate physical contact.",
        effect: "The clinging seems simultaneously calculated and compulsive - performance or emotion?"
    },
    
    "sive-alternatives": {
        title: "sive...seu",
        translation: "whether...or",
        device: "Alternative Motivations",
        description: "Tacitus presents two explanations for Nero's behaviour without choosing - ambiguity preserved.",
        effect: "Refuses simple interpretation - even Tacitus cannot determine truth from performance."
    },
    
    "periturae-matris": {
        title: "periturae matris",
        translation: "of his doomed mother",
        device: "Future Participle",
        description: "The future participle shows she's already doomed - death is certain, just not yet accomplished.",
        effect: "Creates tragic irony - she's already dead in Nero's mind while still living."
    },
    
    "supremus-aspectus": {
        title: "supremus aspectus",
        translation: "final sight",
        device: "Last Look",
        description: "'Supremus' (highest, last) with 'aspectus' (sight, look) - the final visual connection.",
        effect: "Emphasises finality - this is the last time son will see mother alive."
    },
    
    "quamvis-ferum": {
        title: "quamvis ferum animum",
        translation: "however savage his mind",
        device: "Concessive Qualification",
        description: "'Quamvis' with subjunctive suggests even savage minds might feel something when killing mother.",
        effect: "Suggests even monsters have moments of humanity - or at least hesitation."
    }
};
