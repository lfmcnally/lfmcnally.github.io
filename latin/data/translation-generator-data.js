// GCSE Latin Translation Generator Data
// Template-based system that generates varied passages using vocabulary lists

// ========== VOCABULARY BY CHAPTER ==========
// Based on OCR GCSE Latin Defined Vocabulary List

const vocabulary = {
    // NOUNS: { word: { stem, gen, gender, decl, meaning, meanings (array for variations) } }
    nouns: {
        // Chapter 1-2: Basic nouns
        puella: { stem: "puell", gen: "puellae", gender: "f", decl: 1, meaning: "girl", chapter: 1 },
        femina: { stem: "femin", gen: "feminae", gender: "f", decl: 1, meaning: "woman", chapter: 1 },
        ancilla: { stem: "ancill", gen: "ancillae", gender: "f", decl: 1, meaning: "slave-girl", chapter: 1 },
        filia: { stem: "fili", gen: "filiae", gender: "f", decl: 1, meaning: "daughter", chapter: 1 },
        via: { stem: "vi", gen: "viae", gender: "f", decl: 1, meaning: "road", meanings: ["road", "street", "way"], chapter: 1 },
        aqua: { stem: "aqu", gen: "aquae", gender: "f", decl: 1, meaning: "water", chapter: 1 },
        terra: { stem: "terr", gen: "terrae", gender: "f", decl: 1, meaning: "land", meanings: ["land", "ground", "earth"], chapter: 1 },
        villa: { stem: "vill", gen: "villae", gender: "f", decl: 1, meaning: "villa", meanings: ["villa", "house"], chapter: 1 },
        cena: { stem: "cen", gen: "cenae", gender: "f", decl: 1, meaning: "dinner", meanings: ["dinner", "meal"], chapter: 1 },
        taberna: { stem: "tabern", gen: "tabernae", gender: "f", decl: 1, meaning: "shop", meanings: ["shop", "inn"], chapter: 1 },

        servus: { stem: "serv", gen: "servi", gender: "m", decl: 2, meaning: "slave", chapter: 1 },
        dominus: { stem: "domin", gen: "domini", gender: "m", decl: 2, meaning: "master", meanings: ["master", "lord"], chapter: 1 },
        filius: { stem: "fili", gen: "filii", gender: "m", decl: 2, meaning: "son", chapter: 1 },
        amicus: { stem: "amic", gen: "amici", gender: "m", decl: 2, meaning: "friend", chapter: 1 },
        equus: { stem: "equ", gen: "equi", gender: "m", decl: 2, meaning: "horse", chapter: 1 },
        hortus: { stem: "hort", gen: "horti", gender: "m", decl: 2, meaning: "garden", chapter: 1 },
        cibus: { stem: "cib", gen: "cibi", gender: "m", decl: 2, meaning: "food", chapter: 1 },
        gladius: { stem: "gladi", gen: "gladii", gender: "m", decl: 2, meaning: "sword", chapter: 1 },
        nuntius: { stem: "nunti", gen: "nuntii", gender: "m", decl: 2, meaning: "messenger", meanings: ["messenger", "message"], chapter: 1 },

        templum: { stem: "templ", gen: "templi", gender: "n", decl: 2, meaning: "temple", chapter: 2 },
        forum: { stem: "for", gen: "fori", gender: "n", decl: 2, meaning: "forum", meanings: ["forum", "market place"], chapter: 2 },
        vinum: { stem: "vin", gen: "vini", gender: "n", decl: 2, meaning: "wine", chapter: 2 },
        periculum: { stem: "pericul", gen: "periculi", gender: "n", decl: 2, meaning: "danger", chapter: 2 },

        // Chapter 3-4: More nouns
        puer: { stem: "puer", gen: "pueri", gender: "m", decl: 2, meaning: "boy", chapter: 3 },
        vir: { stem: "vir", gen: "viri", gender: "m", decl: 2, meaning: "man", chapter: 3 },
        ager: { stem: "agr", gen: "agri", gender: "m", decl: 2, meaning: "field", chapter: 3 },
        magister: { stem: "magistr", gen: "magistri", gender: "m", decl: 2, meaning: "teacher", meanings: ["teacher", "master"], chapter: 3 },

        rex: { stem: "reg", gen: "regis", gender: "m", decl: 3, meaning: "king", chapter: 4 },
        dux: { stem: "duc", gen: "ducis", gender: "m", decl: 3, meaning: "leader", meanings: ["leader", "general"], chapter: 4 },
        miles: { stem: "milit", gen: "militis", gender: "m", decl: 3, meaning: "soldier", chapter: 4 },
        pater: { stem: "patr", gen: "patris", gender: "m", decl: 3, meaning: "father", chapter: 4 },
        mater: { stem: "matr", gen: "matris", gender: "f", decl: 3, meaning: "mother", chapter: 4 },
        frater: { stem: "fratr", gen: "fratris", gender: "m", decl: 3, meaning: "brother", chapter: 4 },
        soror: { stem: "soror", gen: "sororis", gender: "f", decl: 3, meaning: "sister", chapter: 4 },
        senex: { stem: "sen", gen: "senis", gender: "m", decl: 3, meaning: "old man", chapter: 4 },
        iuvenis: { stem: "iuven", gen: "iuvenis", gender: "m", decl: 3, meaning: "young man", chapter: 4 },
        canis: { stem: "can", gen: "canis", gender: "m", decl: 3, meaning: "dog", chapter: 4 },

        urbs: { stem: "urb", gen: "urbis", gender: "f", decl: 3, meaning: "city", chapter: 4 },
        nox: { stem: "noct", gen: "noctis", gender: "f", decl: 3, meaning: "night", chapter: 4 },
        vox: { stem: "voc", gen: "vocis", gender: "f", decl: 3, meaning: "voice", meanings: ["voice", "shout"], chapter: 4 },
        navis: { stem: "nav", gen: "navis", gender: "f", decl: 3, meaning: "ship", chapter: 4 },
        mors: { stem: "mort", gen: "mortis", gender: "f", decl: 3, meaning: "death", chapter: 4 },

        nomen: { stem: "nomin", gen: "nominis", gender: "n", decl: 3, meaning: "name", chapter: 4 },
        tempus: { stem: "tempor", gen: "temporis", gender: "n", decl: 3, meaning: "time", chapter: 4 },
        corpus: { stem: "corpor", gen: "corporis", gender: "n", decl: 3, meaning: "body", chapter: 4 },
        iter: { stem: "itiner", gen: "itineris", gender: "n", decl: 3, meaning: "journey", meanings: ["journey", "route"], chapter: 4 },

        // Chapter 5-6
        hostis: { stem: "host", gen: "hostis", gender: "m", decl: 3, meaning: "enemy", chapter: 5 },
        civis: { stem: "civ", gen: "civis", gender: "m", decl: 3, meaning: "citizen", chapter: 5 },
        mercator: { stem: "mercator", gen: "mercatoris", gender: "m", decl: 3, meaning: "merchant", chapter: 5 },
        imperator: { stem: "imperator", gen: "imperatoris", gender: "m", decl: 3, meaning: "emperor", meanings: ["emperor", "general"], chapter: 5 },

        flumen: { stem: "flumin", gen: "fluminis", gender: "n", decl: 3, meaning: "river", chapter: 5 },
        mare: { stem: "mar", gen: "maris", gender: "n", decl: 3, meaning: "sea", chapter: 5 },

        // Chapter 7+
        poeta: { stem: "poet", gen: "poetae", gender: "m", decl: 1, meaning: "poet", chapter: 7 },
        nauta: { stem: "naut", gen: "nautae", gender: "m", decl: 1, meaning: "sailor", chapter: 7 },
        agricola: { stem: "agricol", gen: "agricolae", gender: "m", decl: 1, meaning: "farmer", chapter: 7 }
    },

    // VERBS: { word: { stem, conj, meaning, meanings } }
    verbs: {
        // Chapter 1: 1st conjugation present
        ambulo: { stem: "ambul", conj: 1, meaning: "walk", meanings: ["walk", "walks"], chapter: 1 },
        amo: { stem: "am", conj: 1, meaning: "love", meanings: ["love", "loves", "like", "likes"], chapter: 1 },
        clamo: { stem: "clam", conj: 1, meaning: "shout", meanings: ["shout", "shouts", "cry", "cries"], chapter: 1 },
        laboro: { stem: "labor", conj: 1, meaning: "work", meanings: ["work", "works"], chapter: 1 },
        porto: { stem: "port", conj: 1, meaning: "carry", meanings: ["carry", "carries"], chapter: 1 },
        paro: { stem: "par", conj: 1, meaning: "prepare", meanings: ["prepare", "prepares"], chapter: 1 },
        specto: { stem: "spect", conj: 1, meaning: "watch", meanings: ["watch", "watches", "look at"], chapter: 1 },
        voco: { stem: "voc", conj: 1, meaning: "call", meanings: ["call", "calls"], chapter: 1 },
        intro: { stem: "intr", conj: 1, meaning: "enter", meanings: ["enter", "enters"], chapter: 1 },
        festino: { stem: "festin", conj: 1, meaning: "hurry", meanings: ["hurry", "hurries"], chapter: 1 },
        habito: { stem: "habit", conj: 1, meaning: "live", meanings: ["live", "lives", "dwell", "dwells"], chapter: 1 },
        narro: { stem: "narr", conj: 1, meaning: "tell", meanings: ["tell", "tells", "relate"], chapter: 1 },
        navigo: { stem: "navig", conj: 1, meaning: "sail", meanings: ["sail", "sails"], chapter: 1 },
        rogo: { stem: "rog", conj: 1, meaning: "ask", meanings: ["ask", "asks"], chapter: 1 },
        supero: { stem: "super", conj: 1, meaning: "overcome", meanings: ["overcome", "overcomes", "defeat", "defeats"], chapter: 1 },

        // Chapter 2: Other conjugations present
        habeo: { stem: "hab", conj: 2, meaning: "have", meanings: ["have", "has", "hold", "holds"], chapter: 2 },
        video: { stem: "vid", conj: 2, meaning: "see", meanings: ["see", "sees"], chapter: 2 },
        maneo: { stem: "man", conj: 2, meaning: "remain", meanings: ["remain", "remains", "stay", "stays"], chapter: 2 },
        teneo: { stem: "ten", conj: 2, meaning: "hold", meanings: ["hold", "holds"], chapter: 2 },
        timeo: { stem: "tim", conj: 2, meaning: "fear", meanings: ["fear", "fears", "am afraid", "is afraid"], chapter: 2 },
        terreo: { stem: "terr", conj: 2, meaning: "frighten", meanings: ["frighten", "frightens", "terrify"], chapter: 2 },
        respondeo: { stem: "respond", conj: 2, meaning: "reply", meanings: ["reply", "replies", "respond", "responds"], chapter: 2 },

        duco: { stem: "duc", conj: 3, meaning: "lead", meanings: ["lead", "leads"], chapter: 2 },
        dico: { stem: "dic", conj: 3, meaning: "say", meanings: ["say", "says", "speak"], chapter: 2 },
        scribo: { stem: "scrib", conj: 3, meaning: "write", meanings: ["write", "writes"], chapter: 2 },
        curro: { stem: "curr", conj: 3, meaning: "run", meanings: ["run", "runs"], chapter: 2 },
        pono: { stem: "pon", conj: 3, meaning: "put", meanings: ["put", "puts", "place", "places"], chapter: 2 },
        vinco: { stem: "vinc", conj: 3, meaning: "conquer", meanings: ["conquer", "conquers", "defeat", "defeats"], chapter: 2 },
        mitto: { stem: "mitt", conj: 3, meaning: "send", meanings: ["send", "sends"], chapter: 2 },
        rego: { stem: "reg", conj: 3, meaning: "rule", meanings: ["rule", "rules"], chapter: 2 },

        audio: { stem: "audi", conj: 4, meaning: "hear", meanings: ["hear", "hears", "listen to"], chapter: 2 },
        venio: { stem: "veni", conj: 4, meaning: "come", meanings: ["come", "comes"], chapter: 2 },
        dormio: { stem: "dormi", conj: 4, meaning: "sleep", meanings: ["sleep", "sleeps"], chapter: 2 },

        // Chapter 3: Imperfect tense verbs (same verbs, used in imperfect)
        // Chapter 4: Perfect tense verbs

        // Irregular verbs
        sum: { stem: "s", conj: 0, meaning: "be", meanings: ["am", "is", "are"], chapter: 1, irregular: true },
        do: { stem: "d", conj: 1, meaning: "give", meanings: ["give", "gives"], chapter: 2, irregular: true },
        eo: { stem: "e", conj: 0, meaning: "go", meanings: ["go", "goes"], chapter: 2, irregular: true },
        fero: { stem: "fer", conj: 3, meaning: "bring", meanings: ["bring", "brings", "carry", "carries"], chapter: 3, irregular: true },
        volo: { stem: "vol", conj: 0, meaning: "want", meanings: ["want", "wants", "wish", "wishes"], chapter: 3, irregular: true },
        possum: { stem: "poss", conj: 0, meaning: "be able", meanings: ["can", "am able", "is able"], chapter: 3, irregular: true },
        facio: { stem: "fac", conj: 3, meaning: "do", meanings: ["do", "does", "make", "makes"], chapter: 4, irregular: true },
        capio: { stem: "capi", conj: 3, meaning: "take", meanings: ["take", "takes", "capture", "captures"], chapter: 4, irregular: true }
    },

    // ADJECTIVES: { word: { stem, type, meaning } }
    // type: "212" for 2-1-2 (bonus-a-um), "3" for 3rd declension
    adjectives: {
        bonus: { stem: "bon", type: "212", meaning: "good", chapter: 1 },
        malus: { stem: "mal", type: "212", meaning: "bad", chapter: 1 },
        magnus: { stem: "magn", type: "212", meaning: "big", meanings: ["big", "large", "great"], chapter: 1 },
        parvus: { stem: "parv", type: "212", meaning: "small", meanings: ["small", "little"], chapter: 1 },
        laetus: { stem: "laet", type: "212", meaning: "happy", meanings: ["happy", "joyful"], chapter: 1 },
        iratus: { stem: "irat", type: "212", meaning: "angry", chapter: 1 },
        perterritus: { stem: "perterrit", type: "212", meaning: "terrified", meanings: ["terrified", "very frightened"], chapter: 1 },
        fessus: { stem: "fess", type: "212", meaning: "tired", chapter: 1 },
        novus: { stem: "nov", type: "212", meaning: "new", chapter: 1 },
        primus: { stem: "prim", type: "212", meaning: "first", chapter: 1 },
        pulcher: { stem: "pulchr", type: "212", meaning: "beautiful", meanings: ["beautiful", "handsome"], chapter: 1 },
        miser: { stem: "miser", type: "212", meaning: "miserable", meanings: ["miserable", "wretched", "unhappy"], chapter: 1 },
        multus: { stem: "mult", type: "212", meaning: "much", meanings: ["much", "many"], chapter: 1 },

        tristis: { stem: "trist", type: "3", meaning: "sad", chapter: 3 },
        fortis: { stem: "fort", type: "3", meaning: "brave", meanings: ["brave", "strong"], chapter: 3 },
        brevis: { stem: "brev", type: "3", meaning: "short", meanings: ["short", "brief"], chapter: 3 },
        gravis: { stem: "grav", type: "3", meaning: "heavy", meanings: ["heavy", "serious"], chapter: 3 },
        omnis: { stem: "omn", type: "3", meaning: "all", meanings: ["all", "every"], chapter: 3 },

        felix: { stem: "felic", type: "3cons", meaning: "lucky", meanings: ["lucky", "fortunate"], chapter: 5 },
        ingens: { stem: "ingent", type: "3cons", meaning: "huge", meanings: ["huge", "enormous"], chapter: 5 },
        sapiens: { stem: "sapient", type: "3cons", meaning: "wise", chapter: 5 }
    },

    // ADVERBS
    adverbs: {
        bene: { meaning: "well", chapter: 1 },
        male: { meaning: "badly", chapter: 1 },
        celeriter: { meaning: "quickly", chapter: 1 },
        lente: { meaning: "slowly", chapter: 1 },
        statim: { meaning: "immediately", meanings: ["immediately", "at once"], chapter: 1 },
        tandem: { meaning: "at last", meanings: ["at last", "finally"], chapter: 1 },
        subito: { meaning: "suddenly", chapter: 1 },
        semper: { meaning: "always", chapter: 1 },
        numquam: { meaning: "never", chapter: 1 },
        saepe: { meaning: "often", chapter: 1 },
        mox: { meaning: "soon", chapter: 1 },
        nunc: { meaning: "now", chapter: 1 },
        hodie: { meaning: "today", chapter: 1 },
        olim: { meaning: "once", meanings: ["once", "one day", "once upon a time"], chapter: 1 },
        tamen: { meaning: "however", chapter: 1 },
        igitur: { meaning: "therefore", chapter: 2 },
        itaque: { meaning: "and so", meanings: ["and so", "therefore"], chapter: 2 },
        deinde: { meaning: "then", meanings: ["then", "next"], chapter: 2 },
        interea: { meaning: "meanwhile", chapter: 3 },
        diu: { meaning: "for a long time", chapter: 3 },
        iam: { meaning: "now", meanings: ["now", "already"], chapter: 3 }
    },

    // Place words
    places: {
        Roma: { meaning: "Rome", chapter: 1 },
        forum: { meaning: "forum", meanings: ["forum", "market place"], chapter: 1 },
        hortus: { meaning: "garden", chapter: 1 },
        via: { meaning: "street", meanings: ["street", "road"], chapter: 1 },
        villa: { meaning: "villa", meanings: ["villa", "house"], chapter: 1 },
        taberna: { meaning: "shop", chapter: 1 },
        templum: { meaning: "temple", chapter: 2 },
        castra: { meaning: "camp", chapter: 4 },
        urbs: { meaning: "city", chapter: 4 },
        silva: { meaning: "forest", meanings: ["forest", "woods"], chapter: 3 },
        mons: { meaning: "mountain", chapter: 4 },
        flumen: { meaning: "river", chapter: 5 },
        mare: { meaning: "sea", chapter: 5 }
    }
};

// ========== STORY TEMPLATES ==========
// Each template has slots that get filled with vocabulary
// Slots: {PERSON}, {PERSON2}, {PLACE}, {OBJECT}, {ADJ}, {VERB}, etc.

const storyTemplates = [
    {
        id: "template_daily_shopping",
        title: "A Trip to the {PLACE}",
        theme: "daily_life",
        maxChapter: 2,
        introduction: "A {PERSON_DESC} goes to the {PLACE} in Rome.",
        sentences: [
            {
                template: "{PERSON} ad {PLACE_ACC} ambulat.",
                translation: "the {PERSON_ENG} walks to the {PLACE_ENG}.",
                grammar: ["present_active"],
                slots: {
                    PERSON: { type: "noun", filter: { chapter: 1 } },
                    PLACE: { type: "place", filter: { chapter: 2 } }
                }
            },
            {
                template: "{PERSON} {OBJECT_ACC} emere vult.",
                translation: "the {PERSON_ENG} wants to buy {OBJECT_ENG}.",
                grammar: ["present_active", "infinitive"],
                slots: {
                    OBJECT: { type: "noun", filter: { chapter: 1, gender: "m" } }
                }
            },
            {
                template: "mercator {PERSON_DAT} {OBJECT_ACC} ostendit.",
                translation: "the merchant shows the {OBJECT_ENG} to the {PERSON_ENG}.",
                grammar: ["present_active", "dative"],
                slots: {}
            },
            {
                template: "{PERSON} mercatori pecuniam dat.",
                translation: "the {PERSON_ENG} gives money to the merchant.",
                grammar: ["present_active", "dative"],
                slots: {}
            },
            {
                template: "{PERSON} {ADJ} domum redit.",
                translation: "the {ADJ_ENG} {PERSON_ENG} returns home.",
                grammar: ["present_active"],
                slots: {
                    ADJ: { type: "adjective", filter: { chapter: 1, positive: true } }
                }
            }
        ]
    },

    {
        id: "template_lazy_slave",
        title: "The {ADJ} Slave",
        theme: "daily_life",
        maxChapter: 3,
        introduction: "A master discovers his slave is not working.",
        sentences: [
            {
                template: "{PERSON} dominus Romanus erat.",
                translation: "{PERSON_ENG} was a Roman master.",
                grammar: ["imperfect"],
                slots: {
                    PERSON: { type: "name", filter: { male: true } }
                }
            },
            {
                template: "servus in {PLACE_ABL} laborare debebat.",
                translation: "the slave had to work in the {PLACE_ENG}.",
                grammar: ["imperfect", "infinitive"],
                slots: {
                    PLACE: { type: "place", filter: { chapter: 2 } }
                }
            },
            {
                template: "sed servus in {PLACE_ABL} dormiebat!",
                translation: "but the slave was sleeping in the {PLACE_ENG}!",
                grammar: ["imperfect"],
                slots: {}
            },
            {
                template: "dominus {ADJ} clamavit: 'cur non laboras, serve?'",
                translation: "the {ADJ_ENG} master shouted: 'why are you not working, slave?'",
                grammar: ["perfect", "direct_questions", "vocative"],
                slots: {
                    ADJ: { type: "adjective", filter: { meaning: "angry" } }
                }
            },
            {
                template: "servus perterritus statim surrexit.",
                translation: "the terrified slave immediately got up.",
                grammar: ["perfect"],
                slots: {}
            }
        ]
    },

    {
        id: "template_lost_animal",
        title: "The Lost {ANIMAL}",
        theme: "daily_life",
        maxChapter: 4,
        introduction: "A {PERSON_DESC} searches for a missing {ANIMAL_ENG}.",
        sentences: [
            {
                template: "{PERSON} {ANIMAL_ACC} habebat.",
                translation: "the {PERSON_ENG} had a {ANIMAL_ENG}.",
                grammar: ["imperfect"],
                slots: {
                    PERSON: { type: "noun", filter: { meaning: ["boy", "girl", "old man"] } },
                    ANIMAL: { type: "noun", filter: { meaning: ["dog", "horse"] } }
                }
            },
            {
                template: "{ANIMAL} e villa effugit.",
                translation: "the {ANIMAL_ENG} escaped from the house.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "{PERSON} {ADJ} {ANIMAL_ACC} quaerebat.",
                translation: "the {ADJ_ENG} {PERSON_ENG} was looking for the {ANIMAL_ENG}.",
                grammar: ["imperfect"],
                slots: {
                    ADJ: { type: "adjective", filter: { meaning: "sad" } }
                }
            },
            {
                template: "'ubi est {ANIMAL} meus?' clamavit.",
                translation: "'where is my {ANIMAL_ENG}?' he shouted.",
                grammar: ["perfect", "direct_questions"],
                slots: {}
            },
            {
                template: "tandem {ANIMAL_ACC} in {PLACE_ABL} invenit.",
                translation: "at last he found the {ANIMAL_ENG} in the {PLACE_ENG}.",
                grammar: ["perfect"],
                slots: {
                    PLACE: { type: "place", filter: { chapter: 2 } }
                }
            },
            {
                template: "{PERSON} laetissimus erat!",
                translation: "the {PERSON_ENG} was very happy!",
                grammar: ["imperfect", "superlatives"],
                slots: {}
            }
        ]
    },

    {
        id: "template_brave_soldier",
        title: "The {ADJ} Soldier",
        theme: "military",
        maxChapter: 4,
        introduction: "A soldier shows great courage in battle.",
        sentences: [
            {
                template: "milites Romani contra hostes pugnabant.",
                translation: "the Roman soldiers were fighting against the enemy.",
                grammar: ["imperfect"],
                slots: {}
            },
            {
                template: "unus miles {ADJ} erat.",
                translation: "one soldier was very {ADJ_ENG}.",
                grammar: ["imperfect"],
                slots: {
                    ADJ: { type: "adjective", filter: { meaning: "brave" } }
                }
            },
            {
                template: "hostes eum neccare volebant.",
                translation: "the enemy wanted to kill him.",
                grammar: ["imperfect", "infinitive"],
                slots: {}
            },
            {
                template: "sed miles fortiter pugnavit.",
                translation: "but the soldier fought bravely.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "tandem hostes victi sunt.",
                translation: "at last the enemy were defeated.",
                grammar: ["perfect_passive"],
                slots: {}
            },
            {
                template: "dux militem laudavit.",
                translation: "the general praised the soldier.",
                grammar: ["perfect"],
                slots: {}
            }
        ]
    },

    {
        id: "template_dinner_party",
        title: "The Dinner Party",
        theme: "daily_life",
        maxChapter: 6,
        introduction: "A wealthy Roman hosts a dinner party with unexpected events.",
        sentences: [
            {
                template: "{PERSON}, vir dives, amicos ad cenam invitaverat.",
                translation: "{PERSON_ENG}, a wealthy man, had invited friends to dinner.",
                grammar: ["pluperfect"],
                slots: {
                    PERSON: { type: "name", filter: { male: true } }
                }
            },
            {
                template: "servi cibum {ADJ_ACC} parabant.",
                translation: "the slaves were preparing {ADJ_ENG} food.",
                grammar: ["imperfect"],
                slots: {
                    ADJ: { type: "adjective", filter: { meaning: "good" } }
                }
            },
            {
                template: "ubi omnes amici advenerunt, {PERSON} eos in triclinium duxit.",
                translation: "when all the friends arrived, {PERSON_ENG} led them into the dining room.",
                grammar: ["perfect", "ubi_postquam"],
                slots: {}
            },
            {
                template: "cenam laeti consumebant.",
                translation: "they happily ate the dinner.",
                grammar: ["imperfect"],
                slots: {}
            },
            {
                template: "subito servus in triclinium cucurrit.",
                translation: "suddenly a slave ran into the dining room.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "'domine,' inquit, 'fur in horto visus est!'",
                translation: "'master,' he said, 'a thief has been seen in the garden!'",
                grammar: ["perfect_passive", "direct_speech"],
                slots: {}
            },
            {
                template: "omnes e triclinio festinaverunt.",
                translation: "everyone hurried out of the dining room.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "sed fur iam effugerat!",
                translation: "but the thief had already escaped!",
                grammar: ["pluperfect"],
                slots: {}
            }
        ]
    },

    {
        id: "template_journey",
        title: "The Journey to {DESTINATION}",
        theme: "travel",
        maxChapter: 5,
        introduction: "Travellers make a difficult journey.",
        sentences: [
            {
                template: "{PERSON} et amici iter longum faciebant.",
                translation: "{PERSON_ENG} and his friends were making a long journey.",
                grammar: ["imperfect"],
                slots: {
                    PERSON: { type: "name", filter: { male: true } }
                }
            },
            {
                template: "ad {PLACE_ACC} ire volebant.",
                translation: "they wanted to go to {PLACE_ENG}.",
                grammar: ["imperfect", "infinitive"],
                slots: {
                    PLACE: { type: "place", filter: { chapter: 4 } }
                }
            },
            {
                template: "via longa et difficilis erat.",
                translation: "the road was long and difficult.",
                grammar: ["imperfect"],
                slots: {}
            },
            {
                template: "mox omnes fessi erant.",
                translation: "soon everyone was tired.",
                grammar: ["imperfect"],
                slots: {}
            },
            {
                template: "'hic manere debemus,' dixit {PERSON}.",
                translation: "'we must stay here,' said {PERSON_ENG}.",
                grammar: ["present_active", "direct_speech"],
                slots: {}
            },
            {
                template: "itaque in villa parva dormierunt.",
                translation: "and so they slept in a small inn.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "postero die tandem advenerunt.",
                translation: "on the next day they finally arrived.",
                grammar: ["perfect"],
                slots: {}
            }
        ]
    },

    {
        id: "template_myth_hero",
        title: "{HERO} and the {MONSTER}",
        theme: "mythology",
        maxChapter: 8,
        introduction: "A hero faces a dangerous creature.",
        sentences: [
            {
                template: "olim {HERO} erat vir fortissimus.",
                translation: "once upon a time {HERO_ENG} was a very brave man.",
                grammar: ["imperfect", "superlatives"],
                slots: {
                    HERO: { type: "name", filter: { heroic: true } }
                }
            },
            {
                template: "{MONSTER} terribilis in silva habitabat.",
                translation: "a terrible {MONSTER_ENG} was living in the forest.",
                grammar: ["imperfect"],
                slots: {
                    MONSTER: { type: "creature" }
                }
            },
            {
                template: "multi cives ab eo necati erant.",
                translation: "many citizens had been killed by it.",
                grammar: ["pluperfect_passive"],
                slots: {}
            },
            {
                template: "{HERO} constituit {MONSTER_ACC} superare.",
                translation: "{HERO_ENG} decided to overcome the {MONSTER_ENG}.",
                grammar: ["perfect", "infinitive"],
                slots: {}
            },
            {
                template: "gladio rapto, ad silvam contendit.",
                translation: "having seized his sword, he hurried to the forest.",
                grammar: ["ablative_absolute", "perfect"],
                slots: {}
            },
            {
                template: "diu fortiter pugnabat.",
                translation: "for a long time he fought bravely.",
                grammar: ["imperfect"],
                slots: {}
            },
            {
                template: "tandem, {MONSTER_ABL} victo, domum rediit.",
                translation: "at last, with the {MONSTER_ENG} defeated, he returned home.",
                grammar: ["ablative_absolute", "perfect"],
                slots: {}
            },
            {
                template: "omnes cives eum laudaverunt.",
                translation: "all the citizens praised him.",
                grammar: ["perfect"],
                slots: {}
            }
        ]
    }
];

// Roman names for template slots
const romanNames = {
    male: ["Marcus", "Gaius", "Lucius", "Publius", "Quintus", "Titus", "Sextus", "Aulus"],
    female: ["Julia", "Claudia", "Cornelia", "Livia", "Aurelia", "Caecilia"],
    heroic: ["Hercules", "Perseus", "Theseus", "Aeneas", "Achilles"]
};

// Creatures for mythology templates
const creatures = {
    monsters: [
        { latin: "monstrum", english: "monster", gender: "n", decl: 2 },
        { latin: "serpens", english: "serpent", gender: "m", decl: 3 },
        { latin: "draco", english: "dragon", gender: "m", decl: 3 },
        { latin: "leo", english: "lion", gender: "m", decl: 3 }
    ]
};

// Grammar spotlight definitions
const grammarSpotlights = {
    imperfect: { name: "Imperfect tense", minChapter: 3, tags: ["imperfect"] },
    perfect: { name: "Perfect tense", minChapter: 4, tags: ["perfect"] },
    pluperfect: { name: "Pluperfect tense", minChapter: 6, tags: ["pluperfect"] },
    future: { name: "Future tense", minChapter: 5, tags: ["future"] },
    present_passive: { name: "Present passive", minChapter: 7, tags: ["present_passive"] },
    perfect_passive: { name: "Perfect passive", minChapter: 8, tags: ["perfect_passive"] },
    ablative_absolute: { name: "Ablative absolute", minChapter: 8, tags: ["ablative_absolute"] },
    purpose_clauses: { name: "Purpose clauses", minChapter: 10, tags: ["purpose_clauses"] },
    result_clauses: { name: "Result clauses", minChapter: 10, tags: ["result_clauses"] },
    indirect_statement: { name: "Indirect statement", minChapter: 9, tags: ["indirect_statement"] },
    relative_clauses: { name: "Relative clauses", minChapter: 6, tags: ["relative_clauses"] }
};

// Chapter grammar reference
const chapterGrammar = {
    1: { name: "Chapter 1", description: "Present tense, nominative & accusative" },
    2: { name: "Chapter 2", description: "All cases, all conjugations" },
    3: { name: "Chapter 3", description: "Imperfect tense, imperatives" },
    4: { name: "Chapter 4", description: "Perfect tense, 3rd declension" },
    5: { name: "Chapter 5", description: "Future tense, pronouns" },
    6: { name: "Chapter 6", description: "Pluperfect, relative clauses" },
    7: { name: "Chapter 7", description: "Passive voice, participles" },
    8: { name: "Chapter 8", description: "Ablative absolute, conditionals" },
    9: { name: "Chapter 9", description: "Deponent verbs, indirect statement" },
    10: { name: "Chapter 10", description: "Subjunctive, purpose/result clauses" }
};

// Export for browser
if (typeof window !== 'undefined') {
    window.vocabulary = vocabulary;
    window.storyTemplates = storyTemplates;
    window.romanNames = romanNames;
    window.creatures = creatures;
    window.grammarSpotlights = grammarSpotlights;
    window.chapterGrammar = chapterGrammar;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { vocabulary, storyTemplates, romanNames, creatures, grammarSpotlights, chapterGrammar };
}
