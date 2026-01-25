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
    // ========== CHAPTER 1 TEMPLATES (Present tense only, nominative/accusative) ==========

    {
        id: "ch1_life_in_villa",
        title: "Life in the Villa",
        theme: "daily_life",
        maxChapter: 1,
        introduction: "A Roman family begins their day.",
        gloss: { "familia": "family" },
        sentences: [
            {
                template: "familia Romana in villa habitat.",
                translation: "a Roman family lives in the villa.",
                grammar: ["present_active"],
                gloss: { "familia": "family" },
                slots: {}
            },
            {
                template: "dominus servos vocat.",
                translation: "the master calls the slaves.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "servi cibum parant.",
                translation: "the slaves prepare food.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "ancillae aquam portant.",
                translation: "the slave-girls carry water.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "dominus cenam consumit.",
                translation: "the master eats dinner.",
                grammar: ["present_active"],
                gloss: { "consumit": "eats" },
                slots: {}
            },
            {
                template: "dominus laetus est.",
                translation: "the master is happy.",
                grammar: ["present_active"],
                slots: {}
            }
        ]
    },

    {
        id: "ch1_at_the_market",
        title: "At the Market",
        theme: "daily_life",
        maxChapter: 1,
        introduction: "A slave goes shopping at the market.",
        sentences: [
            {
                template: "servus ad forum ambulat.",
                translation: "the slave walks to the forum.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "multi Romani in foro sunt.",
                translation: "many Romans are in the forum.",
                grammar: ["present_active"],
                gloss: { "Romani": "Romans" },
                slots: {}
            },
            {
                template: "servus cibum spectat.",
                translation: "the slave looks at the food.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "mercator cibum vendit.",
                translation: "the merchant sells the food.",
                grammar: ["present_active"],
                gloss: { "mercator": "merchant", "vendit": "sells" },
                slots: {}
            },
            {
                template: "servus pecuniam dat.",
                translation: "the slave gives money.",
                grammar: ["present_active"],
                gloss: { "pecuniam": "money" },
                slots: {}
            },
            {
                template: "servus cibum ad villam portat.",
                translation: "the slave carries the food to the villa.",
                grammar: ["present_active"],
                slots: {}
            }
        ]
    },

    {
        id: "ch1_master_and_slave",
        title: "The Master and the Slave",
        theme: "daily_life",
        maxChapter: 1,
        introduction: "A master gives orders to his slave.",
        sentences: [
            {
                template: "dominus in villa sedet.",
                translation: "the master sits in the villa.",
                grammar: ["present_active"],
                gloss: { "sedet": "sits" },
                slots: {}
            },
            {
                template: "servus in horto laborat.",
                translation: "the slave works in the garden.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "dominus servum vocat.",
                translation: "the master calls the slave.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "'servus,' inquit, 'vinum porta!'",
                translation: "'slave,' he says, 'carry the wine!'",
                grammar: ["present_active"],
                gloss: { "inquit": "he says" },
                slots: {}
            },
            {
                template: "servus vinum portat.",
                translation: "the slave carries the wine.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "dominus vinum bibit.",
                translation: "the master drinks the wine.",
                grammar: ["present_active"],
                gloss: { "bibit": "drinks" },
                slots: {}
            }
        ]
    },

    {
        id: "ch1_in_the_garden",
        title: "In the Garden",
        theme: "daily_life",
        maxChapter: 1,
        introduction: "Children play in the garden.",
        gloss: { "liberi": "children" },
        sentences: [
            {
                template: "puella et puer in horto sunt.",
                translation: "a girl and a boy are in the garden.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "puella flores spectat.",
                translation: "the girl looks at the flowers.",
                grammar: ["present_active"],
                gloss: { "flores": "flowers" },
                slots: {}
            },
            {
                template: "puer per hortum currit.",
                translation: "the boy runs through the garden.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "canis puerum sequitur.",
                translation: "a dog follows the boy.",
                grammar: ["present_active"],
                gloss: { "sequitur": "follows" },
                slots: {}
            },
            {
                template: "puella ridet.",
                translation: "the girl laughs.",
                grammar: ["present_active"],
                gloss: { "ridet": "laughs" },
                slots: {}
            },
            {
                template: "liberi laeti sunt.",
                translation: "the children are happy.",
                grammar: ["present_active"],
                gloss: { "liberi": "children" },
                slots: {}
            }
        ]
    },

    {
        id: "ch1_the_messenger",
        title: "The Messenger",
        theme: "daily_life",
        maxChapter: 1,
        introduction: "A messenger brings news to the villa.",
        sentences: [
            {
                template: "nuntius ad villam festinat.",
                translation: "a messenger hurries to the villa.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "nuntius epistulam portat.",
                translation: "the messenger carries a letter.",
                grammar: ["present_active"],
                gloss: { "epistulam": "letter" },
                slots: {}
            },
            {
                template: "servus ianuam aperit.",
                translation: "the slave opens the door.",
                grammar: ["present_active"],
                gloss: { "ianuam": "door", "aperit": "opens" },
                slots: {}
            },
            {
                template: "nuntius villam intrat.",
                translation: "the messenger enters the villa.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "nuntius domino epistulam dat.",
                translation: "the messenger gives the letter to the master.",
                grammar: ["present_active"],
                gloss: { "epistulam": "letter" },
                slots: {}
            },
            {
                template: "dominus epistulam legit.",
                translation: "the master reads the letter.",
                grammar: ["present_active"],
                gloss: { "epistulam": "letter", "legit": "reads" },
                slots: {}
            }
        ]
    },

    // ========== CHAPTER 2 TEMPLATES (+ all cases, infinitives) ==========

    {
        id: "ch2_the_gift",
        title: "The Gift",
        theme: "daily_life",
        maxChapter: 2,
        introduction: "A father gives a gift to his son.",
        gloss: { "donum": "gift" },
        sentences: [
            {
                template: "pater filium amat.",
                translation: "the father loves his son.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "pater filio donum dare vult.",
                translation: "the father wants to give a gift to his son.",
                grammar: ["present_active", "infinitive", "dative"],
                gloss: { "donum": "gift" },
                slots: {}
            },
            {
                template: "pater ad tabernam ambulat.",
                translation: "the father walks to the shop.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "mercator gladios habet.",
                translation: "the merchant has swords.",
                grammar: ["present_active"],
                gloss: { "mercator": "merchant" },
                slots: {}
            },
            {
                template: "pater gladium emit.",
                translation: "the father buys a sword.",
                grammar: ["present_active"],
                gloss: { "emit": "buys" },
                slots: {}
            },
            {
                template: "pater filio gladium dat.",
                translation: "the father gives the sword to his son.",
                grammar: ["present_active", "dative"],
                slots: {}
            },
            {
                template: "filius laetissimus est!",
                translation: "the son is very happy!",
                grammar: ["present_active"],
                slots: {}
            }
        ]
    },

    {
        id: "ch2_at_the_temple",
        title: "At the Temple",
        theme: "religious",
        maxChapter: 2,
        introduction: "Romans visit the temple to pray.",
        sentences: [
            {
                template: "Romani ad templum ambulant.",
                translation: "the Romans walk to the temple.",
                grammar: ["present_active"],
                gloss: { "Romani": "Romans" },
                slots: {}
            },
            {
                template: "in templo sacerdos stat.",
                translation: "a priest stands in the temple.",
                grammar: ["present_active"],
                gloss: { "sacerdos": "priest", "stat": "stands" },
                slots: {}
            },
            {
                template: "Romani deis dona dare volunt.",
                translation: "the Romans want to give gifts to the gods.",
                grammar: ["present_active", "infinitive", "dative"],
                gloss: { "Romani": "Romans", "deis": "to the gods", "dona": "gifts" },
                slots: {}
            },
            {
                template: "femina deae vinum offert.",
                translation: "the woman offers wine to the goddess.",
                grammar: ["present_active", "dative"],
                gloss: { "deae": "to the goddess", "offert": "offers" },
                slots: {}
            },
            {
                template: "vir deo pecuniam dat.",
                translation: "the man gives money to the god.",
                grammar: ["present_active", "dative"],
                gloss: { "deo": "to the god", "pecuniam": "money" },
                slots: {}
            },
            {
                template: "sacerdos pro Romanis orat.",
                translation: "the priest prays for the Romans.",
                grammar: ["present_active"],
                gloss: { "sacerdos": "priest", "orat": "prays", "Romanis": "Romans" },
                slots: {}
            }
        ]
    },

    {
        id: "ch2_the_teacher",
        title: "The Teacher",
        theme: "daily_life",
        maxChapter: 2,
        introduction: "A teacher instructs his students.",
        sentences: [
            {
                template: "magister in ludo pueros docet.",
                translation: "the teacher teaches the boys in the school.",
                grammar: ["present_active"],
                gloss: { "ludo": "school", "docet": "teaches" },
                slots: {}
            },
            {
                template: "pueri discere volunt.",
                translation: "the boys want to learn.",
                grammar: ["present_active", "infinitive"],
                gloss: { "discere": "to learn" },
                slots: {}
            },
            {
                template: "magister pueris libros dat.",
                translation: "the teacher gives books to the boys.",
                grammar: ["present_active", "dative"],
                gloss: { "libros": "books" },
                slots: {}
            },
            {
                template: "pueri libros legunt.",
                translation: "the boys read the books.",
                grammar: ["present_active"],
                gloss: { "libros": "books", "legunt": "read" },
                slots: {}
            },
            {
                template: "unus puer non laborat.",
                translation: "one boy does not work.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "magister iratus est.",
                translation: "the teacher is angry.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "magister puerum verberat.",
                translation: "the teacher beats the boy.",
                grammar: ["present_active"],
                gloss: { "verberat": "beats" },
                slots: {}
            }
        ]
    },

    {
        id: "ch2_the_feast",
        title: "The Feast",
        theme: "daily_life",
        maxChapter: 2,
        introduction: "A wealthy Roman hosts a feast.",
        sentences: [
            {
                template: "dominus amicos ad cenam invitat.",
                translation: "the master invites his friends to dinner.",
                grammar: ["present_active"],
                gloss: { "invitat": "invites" },
                slots: {}
            },
            {
                template: "amici ad villam veniunt.",
                translation: "the friends come to the villa.",
                grammar: ["present_active"],
                slots: {}
            },
            {
                template: "servi cenam optimam parant.",
                translation: "the slaves prepare an excellent dinner.",
                grammar: ["present_active"],
                gloss: { "optimam": "excellent" },
                slots: {}
            },
            {
                template: "servi domino cibum ferunt.",
                translation: "the slaves bring food to the master.",
                grammar: ["present_active", "dative"],
                slots: {}
            },
            {
                template: "amici cibum et vinum consumunt.",
                translation: "the friends eat food and drink wine.",
                grammar: ["present_active"],
                gloss: { "consumunt": "eat/drink" },
                slots: {}
            },
            {
                template: "poeta fabulam narrat.",
                translation: "a poet tells a story.",
                grammar: ["present_active"],
                gloss: { "poeta": "poet", "fabulam": "story" },
                slots: {}
            },
            {
                template: "omnes laeti sunt.",
                translation: "everyone is happy.",
                grammar: ["present_active"],
                slots: {}
            }
        ]
    },

    {
        id: "ch2_the_letter",
        title: "The Letter",
        theme: "daily_life",
        maxChapter: 2,
        introduction: "A man writes and sends a letter.",
        sentences: [
            {
                template: "Marcus epistulam scribere vult.",
                translation: "Marcus wants to write a letter.",
                grammar: ["present_active", "infinitive"],
                gloss: { "Marcus": "Marcus (a Roman name)", "epistulam": "letter" },
                slots: {}
            },
            {
                template: "Marcus calamum et tabulam capit.",
                translation: "Marcus takes a pen and a writing-tablet.",
                grammar: ["present_active"],
                gloss: { "Marcus": "Marcus (a Roman name)", "calamum": "pen", "tabulam": "writing-tablet" },
                slots: {}
            },
            {
                template: "Marcus amico epistulam scribit.",
                translation: "Marcus writes a letter to his friend.",
                grammar: ["present_active", "dative"],
                gloss: { "Marcus": "Marcus (a Roman name)", "epistulam": "letter" },
                slots: {}
            },
            {
                template: "Marcus servum vocat.",
                translation: "Marcus calls the slave.",
                grammar: ["present_active"],
                gloss: { "Marcus": "Marcus (a Roman name)" },
                slots: {}
            },
            {
                template: "'servo,' inquit, 'epistulam ad amicum fer.'",
                translation: "'slave,' he says, 'take the letter to my friend.'",
                grammar: ["present_active"],
                gloss: { "inquit": "he says", "epistulam": "letter" },
                slots: {}
            },
            {
                template: "servus epistulam ad amicum fert.",
                translation: "the slave takes the letter to the friend.",
                grammar: ["present_active"],
                gloss: { "epistulam": "letter" },
                slots: {}
            }
        ]
    },

    // ========== EXISTING TEMPLATE (Chapter 2) ==========
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

    // ========== CHAPTER 3 TEMPLATES (+ Imperfect tense, imperatives) ==========

    {
        id: "ch3_the_storm",
        title: "The Storm",
        theme: "daily_life",
        maxChapter: 3,
        introduction: "A terrible storm hits the town.",
        sentences: [
            {
                template: "olim tempestas saeva in urbe erat.",
                translation: "once there was a fierce storm in the city.",
                grammar: ["imperfect"],
                gloss: { "tempestas": "storm", "saeva": "fierce" },
                slots: {}
            },
            {
                template: "venti per vias flabantur.",
                translation: "winds were blowing through the streets.",
                grammar: ["imperfect"],
                gloss: { "venti": "winds", "flabantur": "were blowing" },
                slots: {}
            },
            {
                template: "cives perterriti erant.",
                translation: "the citizens were terrified.",
                grammar: ["imperfect"],
                gloss: { "cives": "citizens" },
                slots: {}
            },
            {
                template: "pueri in via ludebant.",
                translation: "boys were playing in the street.",
                grammar: ["imperfect"],
                gloss: { "ludebant": "were playing" },
                slots: {}
            },
            {
                template: "mater clamavit: 'pueri, domum venite!'",
                translation: "the mother shouted: 'boys, come home!'",
                grammar: ["perfect", "imperative"],
                gloss: { "venite": "come! (plural)" },
                slots: {}
            },
            {
                template: "pueri celeriter ad villam cucurrerunt.",
                translation: "the boys quickly ran to the villa.",
                grammar: ["perfect"],
                gloss: { "cucurrerunt": "ran" },
                slots: {}
            }
        ]
    },

    {
        id: "ch3_the_guard",
        title: "The Guard",
        theme: "military",
        maxChapter: 3,
        introduction: "A guard watches over the city at night.",
        sentences: [
            {
                template: "vigil portas urbis custodiebat.",
                translation: "a guard was watching over the city gates.",
                grammar: ["imperfect"],
                gloss: { "vigil": "guard", "portas": "gates", "custodiebat": "was watching over" },
                slots: {}
            },
            {
                template: "nox obscura erat.",
                translation: "the night was dark.",
                grammar: ["imperfect"],
                gloss: { "obscura": "dark" },
                slots: {}
            },
            {
                template: "vigil fessus erat sed manebat.",
                translation: "the guard was tired but was staying.",
                grammar: ["imperfect"],
                gloss: { "vigil": "guard" },
                slots: {}
            },
            {
                template: "subito sonum audivit.",
                translation: "suddenly he heard a sound.",
                grammar: ["perfect"],
                gloss: { "sonum": "sound" },
                slots: {}
            },
            {
                template: "'quis ibi est?' clamavit.",
                translation: "'who is there?' he shouted.",
                grammar: ["perfect", "direct_questions"],
                gloss: { "quis": "who" },
                slots: {}
            },
            {
                template: "sed nemo respondit.",
                translation: "but nobody replied.",
                grammar: ["perfect"],
                gloss: { "nemo": "nobody" },
                slots: {}
            }
        ]
    },

    {
        id: "ch3_old_mans_story",
        title: "The Old Man's Story",
        theme: "historical",
        maxChapter: 3,
        introduction: "An old man tells stories of the past.",
        sentences: [
            {
                template: "senex in horto sedebat.",
                translation: "the old man was sitting in the garden.",
                grammar: ["imperfect"],
                gloss: { "sedebat": "was sitting" },
                slots: {}
            },
            {
                template: "pueri eum audiebant.",
                translation: "the boys were listening to him.",
                grammar: ["imperfect"],
                slots: {}
            },
            {
                template: "'olim,' inquit, 'iuvenis eram.'",
                translation: "'once,' he said, 'I was a young man.'",
                grammar: ["imperfect"],
                gloss: { "inquit": "he said" },
                slots: {}
            },
            {
                template: "'in exercitu Romano militabam.'",
                translation: "'I was serving in the Roman army.'",
                grammar: ["imperfect"],
                gloss: { "exercitu": "army", "militabam": "I was serving as a soldier" },
                slots: {}
            },
            {
                template: "'contra barbaros fortiter pugnabamus.'",
                translation: "'we were fighting bravely against the barbarians.'",
                grammar: ["imperfect"],
                gloss: { "barbaros": "barbarians" },
                slots: {}
            },
            {
                template: "pueri de bello plura audire volebant.",
                translation: "the boys wanted to hear more about the war.",
                grammar: ["imperfect", "infinitive"],
                gloss: { "bello": "war", "plura": "more" },
                slots: {}
            }
        ]
    },

    {
        id: "ch3_lost_child",
        title: "The Lost Child",
        theme: "daily_life",
        maxChapter: 3,
        introduction: "A mother searches for her lost child.",
        sentences: [
            {
                template: "mater filium suum quaerebat.",
                translation: "the mother was looking for her son.",
                grammar: ["imperfect"],
                gloss: { "quaerebat": "was looking for" },
                slots: {}
            },
            {
                template: "puer in horto ludebat.",
                translation: "the boy was playing in the garden.",
                grammar: ["imperfect"],
                gloss: { "ludebat": "was playing" },
                slots: {}
            },
            {
                template: "mater anxia per viam ambulabat.",
                translation: "the anxious mother was walking through the street.",
                grammar: ["imperfect"],
                gloss: { "anxia": "anxious" },
                slots: {}
            },
            {
                template: "'ubi est filius meus?' clamabat.",
                translation: "'where is my son?' she was shouting.",
                grammar: ["imperfect", "direct_questions"],
                slots: {}
            },
            {
                template: "tandem puerum in foro invenit.",
                translation: "at last she found the boy in the forum.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "'noli effugere!' inquit mater.",
                translation: "'don't run away!' said the mother.",
                grammar: ["imperative"],
                gloss: { "noli": "don't!", "inquit": "said" },
                slots: {}
            }
        ]
    },

    {
        id: "ch3_building_work",
        title: "Building Work",
        theme: "daily_life",
        maxChapter: 3,
        introduction: "Workers build a new house.",
        sentences: [
            {
                template: "fabri villam novam aedificabant.",
                translation: "craftsmen were building a new villa.",
                grammar: ["imperfect"],
                gloss: { "fabri": "craftsmen", "aedificabant": "were building" },
                slots: {}
            },
            {
                template: "alii lapides portabant.",
                translation: "some were carrying stones.",
                grammar: ["imperfect"],
                gloss: { "alii": "some", "lapides": "stones" },
                slots: {}
            },
            {
                template: "alii muros faciebant.",
                translation: "others were making walls.",
                grammar: ["imperfect"],
                gloss: { "alii": "others", "muros": "walls" },
                slots: {}
            },
            {
                template: "dominus spectabat et clamabat.",
                translation: "the master was watching and shouting.",
                grammar: ["imperfect"],
                slots: {}
            },
            {
                template: "'celerius laborate!' inquit.",
                translation: "'work faster!' he said.",
                grammar: ["imperative"],
                gloss: { "celerius": "faster", "inquit": "he said" },
                slots: {}
            },
            {
                template: "fabri igitur celeriter laboraverunt.",
                translation: "the craftsmen therefore worked quickly.",
                grammar: ["perfect"],
                gloss: { "fabri": "craftsmen" },
                slots: {}
            }
        ]
    },

    // ========== CHAPTER 4 TEMPLATES (+ Perfect tense, 3rd declension) ==========

    {
        id: "ch4_the_theft",
        title: "The Theft",
        theme: "daily_life",
        maxChapter: 4,
        introduction: "A thief steals from a shop.",
        sentences: [
            {
                template: "fur nocte ad tabernam venit.",
                translation: "a thief came to the shop at night.",
                grammar: ["perfect"],
                gloss: { "fur": "thief" },
                slots: {}
            },
            {
                template: "fur ianuam aperuit.",
                translation: "the thief opened the door.",
                grammar: ["perfect"],
                gloss: { "fur": "thief", "ianuam": "door", "aperuit": "opened" },
                slots: {}
            },
            {
                template: "pecuniam cepit.",
                translation: "he took the money.",
                grammar: ["perfect"],
                gloss: { "pecuniam": "money" },
                slots: {}
            },
            {
                template: "sed canis furem audivit.",
                translation: "but a dog heard the thief.",
                grammar: ["perfect"],
                gloss: { "fur": "thief" },
                slots: {}
            },
            {
                template: "canis vehementer latravit.",
                translation: "the dog barked fiercely.",
                grammar: ["perfect"],
                gloss: { "vehementer": "fiercely", "latravit": "barked" },
                slots: {}
            },
            {
                template: "dominus e lecto surrexit et furem comprehendit.",
                translation: "the master got up from his bed and seized the thief.",
                grammar: ["perfect"],
                gloss: { "lecto": "bed", "surrexit": "got up", "comprehendit": "seized", "furem": "thief" },
                slots: {}
            }
        ]
    },

    {
        id: "ch4_the_journey",
        title: "The Journey",
        theme: "travel",
        maxChapter: 4,
        introduction: "Travellers make a journey.",
        sentences: [
            {
                template: "Marcus et pater iter longum fecerunt.",
                translation: "Marcus and his father made a long journey.",
                grammar: ["perfect"],
                gloss: { "Marcus": "Marcus (a Roman name)", "fecerunt": "made" },
                slots: {}
            },
            {
                template: "mane e villa discesserunt.",
                translation: "in the morning they departed from the villa.",
                grammar: ["perfect"],
                gloss: { "mane": "in the morning", "discesserunt": "departed" },
                slots: {}
            },
            {
                template: "per silvas ambulabant.",
                translation: "they were walking through the forests.",
                grammar: ["imperfect"],
                gloss: { "silvas": "forests" },
                slots: {}
            },
            {
                template: "subito vocem audiverunt.",
                translation: "suddenly they heard a voice.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "vir e silva venit.",
                translation: "a man came from the forest.",
                grammar: ["perfect"],
                gloss: { "silva": "forest" },
                slots: {}
            },
            {
                template: "'salve!' inquit. 'quo itis?'",
                translation: "'hello!' he said. 'where are you going?'",
                grammar: ["perfect", "direct_questions"],
                gloss: { "salve": "hello", "inquit": "he said", "quo": "where to" },
                slots: {}
            }
        ]
    },

    {
        id: "ch4_the_hunt",
        title: "The Hunt",
        theme: "daily_life",
        maxChapter: 4,
        introduction: "Romans go hunting.",
        sentences: [
            {
                template: "iuvenes in silvam ierunt.",
                translation: "the young men went into the forest.",
                grammar: ["perfect"],
                gloss: { "iuvenes": "young men", "silvam": "forest", "ierunt": "went" },
                slots: {}
            },
            {
                template: "canes cervum invenerunt.",
                translation: "the dogs found a deer.",
                grammar: ["perfect"],
                gloss: { "cervum": "deer", "invenerunt": "found" },
                slots: {}
            },
            {
                template: "cervus celeriter fugiebat.",
                translation: "the deer was fleeing quickly.",
                grammar: ["imperfect"],
                gloss: { "cervus": "deer", "fugiebat": "was fleeing" },
                slots: {}
            },
            {
                template: "iuvenes cervum per silvam secuti sunt.",
                translation: "the young men followed the deer through the forest.",
                grammar: ["perfect"],
                gloss: { "iuvenes": "young men", "cervum": "deer", "silvam": "forest", "secuti sunt": "followed" },
                slots: {}
            },
            {
                template: "unus iuvenum hastam iecit.",
                translation: "one of the young men threw a spear.",
                grammar: ["perfect"],
                gloss: { "iuvenum": "of the young men", "hastam": "spear", "iecit": "threw" },
                slots: {}
            },
            {
                template: "cervum necavit.",
                translation: "he killed the deer.",
                grammar: ["perfect"],
                gloss: { "cervum": "deer", "necavit": "killed" },
                slots: {}
            }
        ]
    },

    {
        id: "ch4_kings_command",
        title: "The King's Command",
        theme: "historical",
        maxChapter: 4,
        introduction: "A king gives orders to his people.",
        sentences: [
            {
                template: "rex potens in regia sedebat.",
                translation: "the powerful king was sitting in the palace.",
                grammar: ["imperfect"],
                gloss: { "potens": "powerful", "regia": "palace", "sedebat": "was sitting" },
                slots: {}
            },
            {
                template: "nuntius ad regem venit.",
                translation: "a messenger came to the king.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "'domine,' inquit, 'hostes adsunt!'",
                translation: "'master,' he said, 'the enemy are here!'",
                grammar: ["perfect"],
                gloss: { "inquit": "he said", "adsunt": "are here" },
                slots: {}
            },
            {
                template: "rex milites suos vocavit.",
                translation: "the king called his soldiers.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "'ite,' inquit, 'et hostes vincite!'",
                translation: "'go,' he said, 'and defeat the enemy!'",
                grammar: ["imperative"],
                gloss: { "ite": "go!", "inquit": "he said", "vincite": "defeat!" },
                slots: {}
            },
            {
                template: "milites pro rege fortiter pugnaverunt.",
                translation: "the soldiers fought bravely for the king.",
                grammar: ["perfect"],
                gloss: { "pugnaverunt": "fought" },
                slots: {}
            }
        ]
    },

    {
        id: "ch4_the_race",
        title: "The Race",
        theme: "daily_life",
        maxChapter: 4,
        introduction: "Young men compete in a race.",
        sentences: [
            {
                template: "multi iuvenes in foro convenerunt.",
                translation: "many young men gathered in the forum.",
                grammar: ["perfect"],
                gloss: { "iuvenes": "young men", "convenerunt": "gathered" },
                slots: {}
            },
            {
                template: "cursorem optimum eligere volebant.",
                translation: "they wanted to choose the best runner.",
                grammar: ["imperfect", "infinitive"],
                gloss: { "cursorem": "runner", "optimum": "best", "eligere": "to choose" },
                slots: {}
            },
            {
                template: "senex signum dedit.",
                translation: "an old man gave the signal.",
                grammar: ["perfect"],
                gloss: { "signum": "signal" },
                slots: {}
            },
            {
                template: "omnes celeriter cucurrerunt.",
                translation: "everyone ran quickly.",
                grammar: ["perfect"],
                gloss: { "cucurrerunt": "ran" },
                slots: {}
            },
            {
                template: "unus iuvenis ceteros superavit.",
                translation: "one young man beat the others.",
                grammar: ["perfect"],
                gloss: { "iuvenis": "young man", "ceteros": "the others" },
                slots: {}
            },
            {
                template: "cives eum laudaverunt et praemium ei dederunt.",
                translation: "the citizens praised him and gave him a prize.",
                grammar: ["perfect"],
                gloss: { "cives": "citizens", "praemium": "prize", "dederunt": "gave" },
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

    // ========== CHAPTER 5 TEMPLATES (+ Future tense, pronouns) ==========

    {
        id: "ch5_the_prophecy",
        title: "The Prophecy",
        theme: "mythology",
        maxChapter: 5,
        introduction: "A prophet foretells the future.",
        sentences: [
            {
                template: "vates ad templum venit.",
                translation: "a prophet came to the temple.",
                grammar: ["perfect"],
                gloss: { "vates": "prophet" },
                slots: {}
            },
            {
                template: "cives eum audiverunt.",
                translation: "the citizens heard him.",
                grammar: ["perfect"],
                gloss: { "cives": "citizens" },
                slots: {}
            },
            {
                template: "'Romani,' inquit, 'hostes mox venient.'",
                translation: "'Romans,' he said, 'the enemy will soon come.'",
                grammar: ["future"],
                gloss: { "Romani": "Romans", "inquit": "he said", "venient": "will come" },
                slots: {}
            },
            {
                template: "'vos contra eos pugnabitis.'",
                translation: "'you will fight against them.'",
                grammar: ["future"],
                gloss: { "pugnabitis": "you will fight" },
                slots: {}
            },
            {
                template: "'si fortes eritis, hostes vincetis.'",
                translation: "'if you are brave, you will defeat the enemy.'",
                grammar: ["future"],
                gloss: { "eritis": "you will be", "vincetis": "you will defeat" },
                slots: {}
            },
            {
                template: "cives verbis vatis crediderunt.",
                translation: "the citizens believed the words of the prophet.",
                grammar: ["perfect"],
                gloss: { "cives": "citizens", "vatis": "of the prophet", "crediderunt": "believed" },
                slots: {}
            }
        ]
    },

    {
        id: "ch5_the_promise",
        title: "The Promise",
        theme: "daily_life",
        maxChapter: 5,
        introduction: "A man makes a promise to his family.",
        sentences: [
            {
                template: "pater ad bellum ire debebat.",
                translation: "the father had to go to war.",
                grammar: ["imperfect", "infinitive"],
                gloss: { "bellum": "war" },
                slots: {}
            },
            {
                template: "mater et liberi tristes erant.",
                translation: "the mother and children were sad.",
                grammar: ["imperfect"],
                gloss: { "liberi": "children" },
                slots: {}
            },
            {
                template: "'noli timere,' inquit pater.",
                translation: "'don't be afraid,' said the father.",
                grammar: ["imperative"],
                gloss: { "noli": "don't", "inquit": "said" },
                slots: {}
            },
            {
                template: "'ad vos reveniam.'",
                translation: "'I will return to you.'",
                grammar: ["future"],
                gloss: { "reveniam": "I will return" },
                slots: {}
            },
            {
                template: "'dona multa vobis feram.'",
                translation: "'I will bring many gifts for you.'",
                grammar: ["future"],
                gloss: { "dona": "gifts", "feram": "I will bring" },
                slots: {}
            },
            {
                template: "liberi patrem amplexati sunt.",
                translation: "the children embraced their father.",
                grammar: ["perfect"],
                gloss: { "liberi": "children", "amplexati sunt": "embraced" },
                slots: {}
            }
        ]
    },

    {
        id: "ch5_the_warning",
        title: "The Warning",
        theme: "military",
        maxChapter: 5,
        introduction: "A messenger brings a warning.",
        sentences: [
            {
                template: "nuntius ad urbem celeriter venit.",
                translation: "a messenger quickly came to the city.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "'cives,' inquit, 'periculum magnum imminet!'",
                translation: "'citizens,' he said, 'great danger threatens!'",
                grammar: ["present_active"],
                gloss: { "cives": "citizens", "inquit": "he said", "imminet": "threatens" },
                slots: {}
            },
            {
                template: "'hostes cras urbem oppugnabunt.'",
                translation: "'the enemy will attack the city tomorrow.'",
                grammar: ["future"],
                gloss: { "cras": "tomorrow", "oppugnabunt": "will attack" },
                slots: {}
            },
            {
                template: "'portas claudere debetis.'",
                translation: "'you must close the gates.'",
                grammar: ["present_active", "infinitive"],
                gloss: { "portas": "gates", "claudere": "to close" },
                slots: {}
            },
            {
                template: "cives statim se paraverunt.",
                translation: "the citizens immediately prepared themselves.",
                grammar: ["perfect"],
                gloss: { "cives": "citizens", "paraverunt": "prepared" },
                slots: {}
            },
            {
                template: "milites in muris stabunt et urbem defendant.",
                translation: "soldiers will stand on the walls and will defend the city.",
                grammar: ["future"],
                gloss: { "muris": "walls", "stabunt": "will stand", "defendant": "will defend" },
                slots: {}
            }
        ]
    },

    {
        id: "ch5_the_plan",
        title: "The Plan",
        theme: "travel",
        maxChapter: 5,
        introduction: "Friends plan an adventure.",
        sentences: [
            {
                template: "amici in horto sedebant.",
                translation: "friends were sitting in the garden.",
                grammar: ["imperfect"],
                gloss: { "sedebant": "were sitting" },
                slots: {}
            },
            {
                template: "'quid cras faciemus?' rogavit Marcus.",
                translation: "'what shall we do tomorrow?' asked Marcus.",
                grammar: ["future", "direct_questions"],
                gloss: { "cras": "tomorrow", "faciemus": "shall we do", "Marcus": "Marcus (a Roman name)" },
                slots: {}
            },
            {
                template: "'ad mare ibimus!' respondit Gaius.",
                translation: "'we will go to the sea!' replied Gaius.",
                grammar: ["future"],
                gloss: { "ibimus": "we will go", "Gaius": "Gaius (a Roman name)" },
                slots: {}
            },
            {
                template: "'pisces capiemus et in litore cenabimus.'",
                translation: "'we will catch fish and dine on the shore.'",
                grammar: ["future"],
                gloss: { "pisces": "fish", "capiemus": "we will catch", "litore": "shore", "cenabimus": "we will dine" },
                slots: {}
            },
            {
                template: "'ego cibum feram,' inquit Marcus.",
                translation: "'I will bring food,' said Marcus.",
                grammar: ["future"],
                gloss: { "feram": "I will bring", "Marcus": "Marcus (a Roman name)", "inquit": "said" },
                slots: {}
            },
            {
                template: "amici laeti consilium ceperunt.",
                translation: "the happy friends made their plan.",
                grammar: ["perfect"],
                gloss: { "consilium": "plan", "ceperunt": "made" },
                slots: {}
            }
        ]
    },

    {
        id: "ch5_tomorrows_battle",
        title: "Tomorrow's Battle",
        theme: "military",
        maxChapter: 5,
        introduction: "Soldiers prepare for battle.",
        sentences: [
            {
                template: "milites in castris se parabant.",
                translation: "soldiers were preparing themselves in the camp.",
                grammar: ["imperfect"],
                gloss: { "castris": "camp" },
                slots: {}
            },
            {
                template: "dux ad milites venit.",
                translation: "the general came to the soldiers.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "'milites,' inquit, 'cras pugnabimus.'",
                translation: "'soldiers,' he said, 'we will fight tomorrow.'",
                grammar: ["future"],
                gloss: { "inquit": "he said", "cras": "tomorrow", "pugnabimus": "we will fight" },
                slots: {}
            },
            {
                template: "'hostes fortes sunt, sed nos fortiores sumus.'",
                translation: "'the enemy are strong, but we are stronger.'",
                grammar: ["present_active"],
                gloss: { "fortiores": "stronger" },
                slots: {}
            },
            {
                template: "'victoriam reportabimus!'",
                translation: "'we will win victory!'",
                grammar: ["future"],
                gloss: { "victoriam": "victory", "reportabimus": "we will win" },
                slots: {}
            },
            {
                template: "milites ducem laudaverunt.",
                translation: "the soldiers praised the general.",
                grammar: ["perfect"],
                gloss: { "laudaverunt": "praised" },
                slots: {}
            }
        ]
    },

    // ========== CHAPTER 6 TEMPLATES (+ Pluperfect, relative clauses) ==========

    {
        id: "ch6_the_revenge",
        title: "The Revenge",
        theme: "mythology",
        maxChapter: 6,
        introduction: "A man seeks revenge for his brother's death.",
        sentences: [
            {
                template: "Quintus fratrem habebat quem valde amabat.",
                translation: "Quintus had a brother whom he loved greatly.",
                grammar: ["imperfect", "relative_clauses"],
                gloss: { "Quintus": "Quintus (a Roman name)", "quem": "whom", "valde": "greatly" },
                slots: {}
            },
            {
                template: "sed hostis fratrem necaverat.",
                translation: "but an enemy had killed his brother.",
                grammar: ["pluperfect"],
                gloss: { "hostis": "enemy", "necaverat": "had killed" },
                slots: {}
            },
            {
                template: "Quintus hostem qui fratrem necaverat quaerebat.",
                translation: "Quintus was looking for the enemy who had killed his brother.",
                grammar: ["imperfect", "relative_clauses", "pluperfect"],
                gloss: { "Quintus": "Quintus (a Roman name)", "qui": "who", "quaerebat": "was looking for" },
                slots: {}
            },
            {
                template: "ubi hostem invenit, gladium strinxit.",
                translation: "when he found the enemy, he drew his sword.",
                grammar: ["perfect", "ubi_postquam"],
                gloss: { "strinxit": "drew" },
                slots: {}
            },
            {
                template: "'tu fratrem meum necavisti,' inquit.",
                translation: "'you killed my brother,' he said.",
                grammar: ["perfect"],
                gloss: { "necavisti": "you killed", "inquit": "he said" },
                slots: {}
            },
            {
                template: "Quintus hostem vicit et fratrem ultus est.",
                translation: "Quintus defeated the enemy and avenged his brother.",
                grammar: ["perfect"],
                gloss: { "Quintus": "Quintus (a Roman name)", "ultus est": "avenged" },
                slots: {}
            }
        ]
    },

    {
        id: "ch6_the_rescue",
        title: "The Rescue",
        theme: "military",
        maxChapter: 6,
        introduction: "Soldiers rescue their comrades.",
        sentences: [
            {
                template: "milites Romani ab hostibus capti erant.",
                translation: "Roman soldiers had been captured by the enemy.",
                grammar: ["pluperfect_passive"],
                gloss: { "capti erant": "had been captured" },
                slots: {}
            },
            {
                template: "dux qui eos servare volebat consilium cepit.",
                translation: "the general who wanted to save them made a plan.",
                grammar: ["imperfect", "relative_clauses"],
                gloss: { "qui": "who", "consilium": "plan" },
                slots: {}
            },
            {
                template: "nocte milites ad castra hostium processerunt.",
                translation: "at night the soldiers advanced to the enemy's camp.",
                grammar: ["perfect"],
                gloss: { "castra": "camp", "processerunt": "advanced" },
                slots: {}
            },
            {
                template: "postquam custodes necaverunt, captivos liberaverunt.",
                translation: "after they killed the guards, they freed the prisoners.",
                grammar: ["perfect", "ubi_postquam"],
                gloss: { "custodes": "guards", "captivos": "prisoners", "liberaverunt": "freed" },
                slots: {}
            },
            {
                template: "captivi qui diu in vinculis fuerant gratias egerunt.",
                translation: "the prisoners who had been in chains for a long time gave thanks.",
                grammar: ["pluperfect", "relative_clauses"],
                gloss: { "captivi": "prisoners", "qui": "who", "vinculis": "chains", "fuerant": "had been", "gratias egerunt": "gave thanks" },
                slots: {}
            },
            {
                template: "omnes incolumes ad castra redierunt.",
                translation: "everyone returned safely to the camp.",
                grammar: ["perfect"],
                gloss: { "incolumes": "safely/unharmed", "redierunt": "returned", "castra": "camp" },
                slots: {}
            }
        ]
    },

    {
        id: "ch6_the_inheritance",
        title: "The Inheritance",
        theme: "daily_life",
        maxChapter: 6,
        introduction: "A wealthy man dies and leaves his fortune.",
        sentences: [
            {
                template: "vir dives qui in magna villa habitabat mortuus est.",
                translation: "a wealthy man who lived in a large villa died.",
                grammar: ["perfect", "relative_clauses"],
                gloss: { "dives": "wealthy", "qui": "who", "mortuus est": "died" },
                slots: {}
            },
            {
                template: "testamentum quod scripserat lecturom est.",
                translation: "the will which he had written was read.",
                grammar: ["pluperfect", "relative_clauses", "perfect_passive"],
                gloss: { "testamentum": "will", "quod": "which", "scripserat": "had written", "lectum est": "was read" },
                slots: {}
            },
            {
                template: "filiis pecuniam multam reliquerat.",
                translation: "he had left a lot of money to his sons.",
                grammar: ["pluperfect"],
                gloss: { "pecuniam": "money", "reliquerat": "had left" },
                slots: {}
            },
            {
                template: "servis quos bene tractaverat libertatem dedit.",
                translation: "he gave freedom to the slaves whom he had treated well.",
                grammar: ["perfect", "relative_clauses", "pluperfect"],
                gloss: { "quos": "whom", "tractaverat": "had treated", "libertatem": "freedom" },
                slots: {}
            },
            {
                template: "omnes eum laudaverunt.",
                translation: "everyone praised him.",
                grammar: ["perfect"],
                slots: {}
            },
            {
                template: "funus magnificum ei fecerunt.",
                translation: "they held a magnificent funeral for him.",
                grammar: ["perfect"],
                gloss: { "funus": "funeral", "magnificum": "magnificent", "fecerunt": "held" },
                slots: {}
            }
        ]
    },

    {
        id: "ch6_the_traitor",
        title: "The Traitor",
        theme: "historical",
        maxChapter: 6,
        introduction: "A traitor is discovered and punished.",
        sentences: [
            {
                template: "civis quidam urbem hostibus tradiderat.",
                translation: "a certain citizen had betrayed the city to the enemy.",
                grammar: ["pluperfect"],
                gloss: { "civis": "citizen", "quidam": "a certain", "tradiderat": "had betrayed" },
                slots: {}
            },
            {
                template: "postquam hoc cognitum est, cives irati erant.",
                translation: "after this was discovered, the citizens were angry.",
                grammar: ["perfect_passive", "ubi_postquam", "imperfect"],
                gloss: { "cognitum est": "was discovered", "cives": "citizens" },
                slots: {}
            },
            {
                template: "proditorem qui urbem tradiderat quaerebant.",
                translation: "they were looking for the traitor who had betrayed the city.",
                grammar: ["imperfect", "relative_clauses", "pluperfect"],
                gloss: { "proditorem": "traitor", "qui": "who", "quaerebant": "were looking for" },
                slots: {}
            },
            {
                template: "ubi eum invenerunt, ad forum duxerunt.",
                translation: "when they found him, they led him to the forum.",
                grammar: ["perfect", "ubi_postquam"],
                slots: {}
            },
            {
                template: "iudex eum morte damnavit.",
                translation: "the judge condemned him to death.",
                grammar: ["perfect"],
                gloss: { "iudex": "judge", "morte": "to death", "damnavit": "condemned" },
                slots: {}
            },
            {
                template: "sic proditores Romani puniebantur.",
                translation: "thus Roman traitors were punished.",
                grammar: ["imperfect_passive"],
                gloss: { "sic": "thus", "proditores": "traitors", "puniebantur": "were punished" },
                slots: {}
            }
        ]
    },

    {
        id: "ch6_the_letter_changed",
        title: "The Letter That Changed Everything",
        theme: "daily_life",
        maxChapter: 6,
        introduction: "A letter brings unexpected news.",
        sentences: [
            {
                template: "Marcus epistulam quam diu exspectaverat tandem accepit.",
                translation: "Marcus finally received the letter which he had awaited for a long time.",
                grammar: ["perfect", "relative_clauses", "pluperfect"],
                gloss: { "Marcus": "Marcus (a Roman name)", "epistulam": "letter", "quam": "which", "exspectaverat": "had awaited", "accepit": "received" },
                slots: {}
            },
            {
                template: "epistulam a patre qui in Graecia erat missam esse cognovit.",
                translation: "he learned that the letter had been sent by his father who was in Greece.",
                grammar: ["perfect", "relative_clauses"],
                gloss: { "epistulam": "letter", "Graecia": "Greece", "missam esse": "had been sent", "cognovit": "learned" },
                slots: {}
            },
            {
                template: "pater multas res novas narravit.",
                translation: "his father told many new things.",
                grammar: ["perfect"],
                gloss: { "res": "things", "narravit": "told" },
                slots: {}
            },
            {
                template: "postquam epistulam legit, Marcus lacrimas effudit.",
                translation: "after he read the letter, Marcus shed tears.",
                grammar: ["perfect", "ubi_postquam"],
                gloss: { "Marcus": "Marcus (a Roman name)", "epistulam": "letter", "lacrimas": "tears", "effudit": "shed" },
                slots: {}
            },
            {
                template: "pater qui aegrotaverat iam melius se habebat.",
                translation: "his father who had been ill was now feeling better.",
                grammar: ["pluperfect", "relative_clauses", "imperfect"],
                gloss: { "qui": "who", "aegrotaverat": "had been ill", "melius": "better", "se habebat": "was feeling" },
                slots: {}
            },
            {
                template: "Marcus dis gratias egit.",
                translation: "Marcus gave thanks to the gods.",
                grammar: ["perfect"],
                gloss: { "Marcus": "Marcus (a Roman name)", "dis": "to the gods", "gratias egit": "gave thanks" },
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

    // ========== CHAPTER 7 TEMPLATES (+ Passive voice, participles, comparatives) ==========

    {
        id: "ch7_the_captured_city",
        title: "The Captured City",
        theme: "military",
        maxChapter: 7,
        introduction: "A city is captured by the enemy.",
        sentences: [
            {
                template: "urbs a militibus oppugnabatur.",
                translation: "the city was being attacked by soldiers.",
                grammar: ["present_passive"],
                gloss: { "oppugnabatur": "was being attacked" },
                slots: {}
            },
            {
                template: "cives perterriti ad templa fugiebant.",
                translation: "terrified citizens were fleeing to the temples.",
                grammar: ["imperfect"],
                gloss: { "cives": "citizens" },
                slots: {}
            },
            {
                template: "tandem portae fractae sunt.",
                translation: "at last the gates were broken.",
                grammar: ["perfect_passive"],
                gloss: { "portae": "gates", "fractae sunt": "were broken" },
                slots: {}
            },
            {
                template: "milites urbem intrantes omnia delebant.",
                translation: "soldiers entering the city were destroying everything.",
                grammar: ["imperfect", "present_participle"],
                gloss: { "intrantes": "entering", "delebant": "were destroying" },
                slots: {}
            },
            {
                template: "multi cives capti sunt.",
                translation: "many citizens were captured.",
                grammar: ["perfect_passive"],
                gloss: { "cives": "citizens", "capti sunt": "were captured" },
                slots: {}
            },
            {
                template: "urbs deleta est.",
                translation: "the city was destroyed.",
                grammar: ["perfect_passive"],
                gloss: { "deleta est": "was destroyed" },
                slots: {}
            }
        ]
    },

    {
        id: "ch7_the_statue",
        title: "The Statue",
        theme: "daily_life",
        maxChapter: 7,
        introduction: "A beautiful statue is made for the emperor.",
        sentences: [
            {
                template: "artifex statuas pulcherrimas faciebat.",
                translation: "the craftsman used to make very beautiful statues.",
                grammar: ["imperfect"],
                gloss: { "artifex": "craftsman", "statuas": "statues", "pulcherrimas": "very beautiful" },
                slots: {}
            },
            {
                template: "ab imperatore vocatus est.",
                translation: "he was summoned by the emperor.",
                grammar: ["perfect_passive"],
                gloss: { "imperatore": "emperor", "vocatus est": "was summoned" },
                slots: {}
            },
            {
                template: "'statua imperatoris facienda est,' inquit dux.",
                translation: "'a statue of the emperor must be made,' said the general.",
                grammar: ["present_passive"],
                gloss: { "imperatoris": "of the emperor", "facienda est": "must be made", "inquit": "said" },
                slots: {}
            },
            {
                template: "artifex statuam maiorem quam ceteras fecit.",
                translation: "the craftsman made a statue larger than the others.",
                grammar: ["perfect", "comparative"],
                gloss: { "artifex": "craftsman", "statuam": "statue", "maiorem": "larger", "ceteras": "the others" },
                slots: {}
            },
            {
                template: "statua in foro posita est.",
                translation: "the statue was placed in the forum.",
                grammar: ["perfect_passive"],
                gloss: { "statua": "statue", "posita est": "was placed" },
                slots: {}
            },
            {
                template: "omnes statuam admirantes laudaverunt.",
                translation: "everyone admiring the statue praised it.",
                grammar: ["perfect", "present_participle"],
                gloss: { "admirantes": "admiring", "statuam": "statue" },
                slots: {}
            }
        ]
    },

    {
        id: "ch7_the_accused",
        title: "The Accused",
        theme: "daily_life",
        maxChapter: 7,
        introduction: "A man is accused of a crime.",
        sentences: [
            {
                template: "vir criminis accusatus est.",
                translation: "a man was accused of a crime.",
                grammar: ["perfect_passive"],
                gloss: { "criminis": "of a crime", "accusatus est": "was accused" },
                slots: {}
            },
            {
                template: "ad forum ductus est.",
                translation: "he was led to the forum.",
                grammar: ["perfect_passive"],
                gloss: { "ductus est": "was led" },
                slots: {}
            },
            {
                template: "multi testes contra eum locuti sunt.",
                translation: "many witnesses spoke against him.",
                grammar: ["perfect"],
                gloss: { "testes": "witnesses", "locuti sunt": "spoke" },
                slots: {}
            },
            {
                template: "sed amici eius dicebant eum innocentem esse.",
                translation: "but his friends were saying that he was innocent.",
                grammar: ["imperfect", "indirect_statement"],
                gloss: { "innocentem": "innocent" },
                slots: {}
            },
            {
                template: "iudex cautior quam ceteri erat.",
                translation: "the judge was more careful than the others.",
                grammar: ["imperfect", "comparative"],
                gloss: { "iudex": "judge", "cautior": "more careful", "ceteri": "the others" },
                slots: {}
            },
            {
                template: "vir liberatus est.",
                translation: "the man was freed.",
                grammar: ["perfect_passive"],
                gloss: { "liberatus est": "was freed" },
                slots: {}
            }
        ]
    },

    {
        id: "ch7_the_wounded_hero",
        title: "The Wounded Hero",
        theme: "mythology",
        maxChapter: 7,
        introduction: "A hero is wounded in battle but survives.",
        sentences: [
            {
                template: "Achilles, heros fortissimus, in proelio pugnabat.",
                translation: "Achilles, a very brave hero, was fighting in battle.",
                grammar: ["imperfect"],
                gloss: { "Achilles": "Achilles (a Greek hero)", "heros": "hero", "fortissimus": "very brave", "proelio": "battle" },
                slots: {}
            },
            {
                template: "sagitta a Paride missa eum vulneravit.",
                translation: "an arrow sent by Paris wounded him.",
                grammar: ["perfect", "perfect_passive_participle"],
                gloss: { "sagitta": "arrow", "Paride": "Paris (a Trojan prince)", "missa": "sent", "vulneravit": "wounded" },
                slots: {}
            },
            {
                template: "heros vulneratus cecidit.",
                translation: "the wounded hero fell.",
                grammar: ["perfect", "perfect_passive_participle"],
                gloss: { "heros": "hero", "vulneratus": "wounded", "cecidit": "fell" },
                slots: {}
            },
            {
                template: "comites eum portantes e proelio tulerunt.",
                translation: "companions carrying him took him from the battle.",
                grammar: ["perfect", "present_participle"],
                gloss: { "comites": "companions", "portantes": "carrying", "proelio": "battle", "tulerunt": "took" },
                slots: {}
            },
            {
                template: "medicus vulnera curavit.",
                translation: "the doctor treated his wounds.",
                grammar: ["perfect"],
                gloss: { "medicus": "doctor", "vulnera": "wounds", "curavit": "treated" },
                slots: {}
            },
            {
                template: "heros fortior quam mors erat.",
                translation: "the hero was stronger than death.",
                grammar: ["imperfect", "comparative"],
                gloss: { "heros": "hero", "fortior": "stronger", "mors": "death" },
                slots: {}
            }
        ]
    },

    {
        id: "ch7_the_burning_temple",
        title: "The Burning Temple",
        theme: "historical",
        maxChapter: 7,
        introduction: "A temple is destroyed by fire.",
        sentences: [
            {
                template: "templum a fulmine ictum est.",
                translation: "the temple was struck by lightning.",
                grammar: ["perfect_passive"],
                gloss: { "fulmine": "lightning", "ictum est": "was struck" },
                slots: {}
            },
            {
                template: "flammae templum consumentes videbantur.",
                translation: "flames consuming the temple were seen.",
                grammar: ["imperfect_passive", "present_participle"],
                gloss: { "flammae": "flames", "consumentes": "consuming", "videbantur": "were seen" },
                slots: {}
            },
            {
                template: "cives aquam portantes ad templum cucurrerunt.",
                translation: "citizens carrying water ran to the temple.",
                grammar: ["perfect", "present_participle"],
                gloss: { "cives": "citizens", "portantes": "carrying", "cucurrerunt": "ran" },
                slots: {}
            },
            {
                template: "sed ignis maior quam aqua erat.",
                translation: "but the fire was greater than the water.",
                grammar: ["imperfect", "comparative"],
                gloss: { "ignis": "fire", "maior": "greater" },
                slots: {}
            },
            {
                template: "templum deletum est.",
                translation: "the temple was destroyed.",
                grammar: ["perfect_passive"],
                gloss: { "deletum est": "was destroyed" },
                slots: {}
            },
            {
                template: "sacerdotes de deis iratis monuerunt.",
                translation: "the priests warned about the angry gods.",
                grammar: ["perfect"],
                gloss: { "sacerdotes": "priests", "deis": "gods", "monuerunt": "warned" },
                slots: {}
            }
        ]
    },

    // ========== CHAPTER 8 TEMPLATES (+ Ablative absolute, conditionals) ==========

    {
        id: "ch8_the_siege",
        title: "The Siege",
        theme: "military",
        maxChapter: 8,
        introduction: "A city is besieged by the enemy.",
        sentences: [
            {
                template: "hostibus urbem obsidentibus, cives fame laborabant.",
                translation: "with the enemy besieging the city, the citizens were suffering from hunger.",
                grammar: ["ablative_absolute", "imperfect"],
                gloss: { "obsidentibus": "besieging", "cives": "citizens", "fame": "from hunger" },
                slots: {}
            },
            {
                template: "cibus iam consumptus erat.",
                translation: "food had already been consumed.",
                grammar: ["pluperfect_passive"],
                gloss: { "consumptus erat": "had been consumed" },
                slots: {}
            },
            {
                template: "'si auxilium non venerit, moriemur,' dixerunt cives.",
                translation: "'if help does not come, we will die,' said the citizens.",
                grammar: ["future", "conditional"],
                gloss: { "auxilium": "help", "venerit": "comes", "moriemur": "we will die", "cives": "citizens" },
                slots: {}
            },
            {
                template: "ponte fracto, hostes transire non poterant.",
                translation: "with the bridge broken, the enemy were not able to cross.",
                grammar: ["ablative_absolute", "imperfect"],
                gloss: { "ponte": "bridge", "fracto": "broken", "transire": "to cross" },
                slots: {}
            },
            {
                template: "tandem auxilia Romana advenerunt.",
                translation: "at last Roman reinforcements arrived.",
                grammar: ["perfect"],
                gloss: { "auxilia": "reinforcements", "Romana": "Roman" },
                slots: {}
            },
            {
                template: "hostibus victis, urbs servata est.",
                translation: "with the enemy defeated, the city was saved.",
                grammar: ["ablative_absolute", "perfect_passive"],
                gloss: { "victis": "defeated", "servata est": "was saved" },
                slots: {}
            }
        ]
    },

    {
        id: "ch8_the_escape",
        title: "The Escape",
        theme: "military",
        maxChapter: 8,
        introduction: "Prisoners plan and execute an escape.",
        sentences: [
            {
                template: "captivi in carcere tenebantur.",
                translation: "prisoners were being held in the prison.",
                grammar: ["imperfect_passive"],
                gloss: { "captivi": "prisoners", "carcere": "prison", "tenebantur": "were being held" },
                slots: {}
            },
            {
                template: "si custodes dormiverint, effugere possimus,' inquit unus.",
                translation: "'if the guards sleep, we may be able to escape,' said one.",
                grammar: ["conditional"],
                gloss: { "custodes": "guards", "dormiverint": "sleep", "effugere": "to escape", "possimus": "we may be able", "inquit": "said" },
                slots: {}
            },
            {
                template: "nocte adveniente, captivi consilium ceperunt.",
                translation: "with night arriving, the prisoners made a plan.",
                grammar: ["ablative_absolute", "perfect"],
                gloss: { "adveniente": "arriving", "captivi": "prisoners", "consilium": "plan" },
                slots: {}
            },
            {
                template: "custodibus superatis, captivi effugerunt.",
                translation: "with the guards overcome, the prisoners escaped.",
                grammar: ["ablative_absolute", "perfect"],
                gloss: { "custodibus": "guards", "superatis": "overcome", "captivi": "prisoners" },
                slots: {}
            },
            {
                template: "per silvas currentes, libertatem petebant.",
                translation: "running through the forests, they were seeking freedom.",
                grammar: ["imperfect", "present_participle"],
                gloss: { "silvas": "forests", "currentes": "running", "libertatem": "freedom", "petebant": "were seeking" },
                slots: {}
            },
            {
                template: "tandem ad amicos pervenerunt.",
                translation: "at last they reached their friends.",
                grammar: ["perfect"],
                gloss: { "pervenerunt": "reached" },
                slots: {}
            }
        ]
    },

    {
        id: "ch8_if_gods_will",
        title: "If the Gods Will",
        theme: "mythology",
        maxChapter: 8,
        introduction: "A general prays for victory.",
        sentences: [
            {
                template: "dux ante proelium ad templum ivit.",
                translation: "the general went to the temple before the battle.",
                grammar: ["perfect"],
                gloss: { "proelium": "battle" },
                slots: {}
            },
            {
                template: "genibus flexis, deos oravit.",
                translation: "with his knees bent, he prayed to the gods.",
                grammar: ["ablative_absolute", "perfect"],
                gloss: { "genibus": "knees", "flexis": "bent", "oravit": "prayed" },
                slots: {}
            },
            {
                template: "'si nobis favebitis,' inquit, 'victoriam reportabimus.'",
                translation: "'if you favor us,' he said, 'we will win victory.'",
                grammar: ["conditional", "future"],
                gloss: { "favebitis": "you favor", "inquit": "he said", "victoriam": "victory", "reportabimus": "we will win" },
                slots: {}
            },
            {
                template: "'si vincimus, templum novum vobis aedificabo.'",
                translation: "'if we win, I will build a new temple for you.'",
                grammar: ["conditional", "future"],
                gloss: { "vincimus": "we win", "aedificabo": "I will build" },
                slots: {}
            },
            {
                template: "precibus factis, dux ad exercitum rediit.",
                translation: "with his prayers made, the general returned to the army.",
                grammar: ["ablative_absolute", "perfect"],
                gloss: { "precibus": "prayers", "factis": "made", "exercitum": "army", "rediit": "returned" },
                slots: {}
            },
            {
                template: "di duci et exercitui faverunt.",
                translation: "the gods favored the general and his army.",
                grammar: ["perfect"],
                gloss: { "di": "gods", "faverunt": "favored", "exercitui": "army" },
                slots: {}
            }
        ]
    },

    {
        id: "ch8_the_treaty",
        title: "The Treaty",
        theme: "historical",
        maxChapter: 8,
        introduction: "Two nations make peace.",
        sentences: [
            {
                template: "bello confecto, reges pacem facere voluerunt.",
                translation: "with the war finished, the kings wanted to make peace.",
                grammar: ["ablative_absolute", "imperfect", "infinitive"],
                gloss: { "bello": "war", "confecto": "finished", "pacem": "peace" },
                slots: {}
            },
            {
                template: "legati ab utroque rege missi sunt.",
                translation: "ambassadors were sent by each king.",
                grammar: ["perfect_passive"],
                gloss: { "legati": "ambassadors", "utroque": "each", "missi sunt": "were sent" },
                slots: {}
            },
            {
                template: "condicionibus pactis, foedus scriptum est.",
                translation: "with terms agreed, a treaty was written.",
                grammar: ["ablative_absolute", "perfect_passive"],
                gloss: { "condicionibus": "terms", "pactis": "agreed", "foedus": "treaty", "scriptum est": "was written" },
                slots: {}
            },
            {
                template: "'si foedus violaveritis, bellum renovabitur,' dixit rex.",
                translation: "'if you violate the treaty, war will be renewed,' said the king.",
                grammar: ["conditional", "future_passive"],
                gloss: { "foedus": "treaty", "violaveritis": "you violate", "bellum": "war", "renovabitur": "will be renewed" },
                slots: {}
            },
            {
                template: "obsides dati sunt.",
                translation: "hostages were given.",
                grammar: ["perfect_passive"],
                gloss: { "obsides": "hostages", "dati sunt": "were given" },
                slots: {}
            },
            {
                template: "pace facta, omnes laeti domum redierunt.",
                translation: "with peace made, everyone happily returned home.",
                grammar: ["ablative_absolute", "perfect"],
                gloss: { "pace": "peace", "facta": "made", "redierunt": "returned" },
                slots: {}
            }
        ]
    },

    {
        id: "ch8_the_decision",
        title: "The Decision",
        theme: "daily_life",
        maxChapter: 8,
        introduction: "A father faces a difficult choice.",
        sentences: [
            {
                template: "pater gravem rem cogitabat.",
                translation: "the father was thinking about a serious matter.",
                grammar: ["imperfect"],
                gloss: { "gravem": "serious", "rem": "matter", "cogitabat": "was thinking about" },
                slots: {}
            },
            {
                template: "'si Romam ibo,' inquit, 'familiam relinquam.'",
                translation: "'if I go to Rome,' he said, 'I will leave my family.'",
                grammar: ["conditional", "future"],
                gloss: { "Romam": "Rome", "inquit": "he said", "relinquam": "I will leave" },
                slots: {}
            },
            {
                template: "'si autem manebo, pecuniam non habebimus.'",
                translation: "'but if I stay, we will not have money.'",
                grammar: ["conditional", "future"],
                gloss: { "autem": "but", "manebo": "I stay", "pecuniam": "money" },
                slots: {}
            },
            {
                template: "uxore audita, consilium cepit.",
                translation: "having listened to his wife, he made a decision.",
                grammar: ["ablative_absolute", "perfect"],
                gloss: { "uxore": "wife", "audita": "listened to", "consilium": "decision" },
                slots: {}
            },
            {
                template: "'si tu mecum venies,' dixit, 'Romam ibimus.'",
                translation: "'if you come with me,' he said, 'we will go to Rome.'",
                grammar: ["conditional", "future"],
                gloss: { "mecum": "with me", "Romam": "Rome", "ibimus": "we will go" },
                slots: {}
            },
            {
                template: "tota familia profecta est.",
                translation: "the whole family set out.",
                grammar: ["perfect"],
                gloss: { "tota": "whole", "profecta est": "set out" },
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
    },

    // ========== CHAPTER 9 TEMPLATES (+ Deponent verbs, indirect statement) ==========

    {
        id: "ch9_the_embassy",
        title: "The Embassy",
        theme: "historical",
        maxChapter: 9,
        introduction: "Ambassadors try to make peace.",
        sentences: [
            {
                template: "legati a senatu ad hostes missi sunt.",
                translation: "ambassadors were sent by the senate to the enemy.",
                grammar: ["perfect_passive"],
                gloss: { "legati": "ambassadors", "senatu": "senate", "missi sunt": "were sent" },
                slots: {}
            },
            {
                template: "legati iter difficile secuti sunt.",
                translation: "the ambassadors followed a difficult route.",
                grammar: ["perfect", "deponent"],
                gloss: { "legati": "ambassadors", "secuti sunt": "followed" },
                slots: {}
            },
            {
                template: "regem hostilem alloqui conati sunt.",
                translation: "they tried to address the hostile king.",
                grammar: ["perfect", "deponent", "infinitive"],
                gloss: { "hostilem": "hostile", "alloqui": "to address", "conati sunt": "tried" },
                slots: {}
            },
            {
                template: "legati dixerunt Romanos pacem velle.",
                translation: "the ambassadors said that the Romans wanted peace.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "legati": "ambassadors", "Romanos": "Romans", "pacem": "peace", "velle": "to want" },
                slots: {}
            },
            {
                template: "rex respondit se pacem non accepturum esse.",
                translation: "the king replied that he would not accept peace.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "accepturum esse": "would accept" },
                slots: {}
            },
            {
                template: "legati tristes Romam regressi sunt.",
                translation: "the ambassadors sadly returned to Rome.",
                grammar: ["perfect", "deponent"],
                gloss: { "legati": "ambassadors", "Romam": "Rome", "regressi sunt": "returned" },
                slots: {}
            }
        ]
    },

    {
        id: "ch9_the_messengers_report",
        title: "The Messenger's Report",
        theme: "military",
        maxChapter: 9,
        introduction: "A messenger brings news of the battle.",
        sentences: [
            {
                template: "nuntius ad ducem properavit.",
                translation: "the messenger hurried to the general.",
                grammar: ["perfect"],
                gloss: { "properavit": "hurried" },
                slots: {}
            },
            {
                template: "'domine,' inquit, 'nuntium grave fero.'",
                translation: "'master,' he said, 'I bring serious news.'",
                grammar: ["present_active"],
                gloss: { "inquit": "he said", "nuntium": "news", "grave": "serious" },
                slots: {}
            },
            {
                template: "nuntius dixit hostes castra nostra oppugnare.",
                translation: "the messenger said that the enemy were attacking our camp.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "castra": "camp", "oppugnare": "were attacking" },
                slots: {}
            },
            {
                template: "addidit milites nostros fortiter resistere.",
                translation: "he added that our soldiers were resisting bravely.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "addidit": "he added", "resistere": "were resisting" },
                slots: {}
            },
            {
                template: "dux credidit victoriam possibilem esse.",
                translation: "the general believed that victory was possible.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "credidit": "believed", "victoriam": "victory", "possibilem": "possible" },
                slots: {}
            },
            {
                template: "statim cum exercitu profectus est.",
                translation: "he immediately set out with the army.",
                grammar: ["perfect", "deponent"],
                gloss: { "exercitu": "army", "profectus est": "set out" },
                slots: {}
            }
        ]
    },

    {
        id: "ch9_the_follower",
        title: "The Loyal Follower",
        theme: "mythology",
        maxChapter: 9,
        introduction: "A loyal companion follows his hero.",
        sentences: [
            {
                template: "comes heroem per multa pericula secutus est.",
                translation: "the companion followed the hero through many dangers.",
                grammar: ["perfect", "deponent"],
                gloss: { "comes": "companion", "heroem": "hero", "pericula": "dangers", "secutus est": "followed" },
                slots: {}
            },
            {
                template: "semper credebat heroem esse invictum.",
                translation: "he always believed that the hero was unconquered.",
                grammar: ["imperfect", "indirect_statement"],
                gloss: { "credebat": "believed", "heroem": "hero", "invictum": "unconquered" },
                slots: {}
            },
            {
                template: "cum heros mortuus est, comes valde doluit.",
                translation: "when the hero died, the companion grieved greatly.",
                grammar: ["perfect"],
                gloss: { "heros": "hero", "mortuus est": "died", "comes": "companion", "doluit": "grieved", "valde": "greatly" },
                slots: {}
            },
            {
                template: "comes putavit se quoque moriturum esse.",
                translation: "the companion thought that he too would die.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "comes": "companion", "putavit": "thought", "moriturum esse": "would die" },
                slots: {}
            },
            {
                template: "sed dei eum servare conati sunt.",
                translation: "but the gods tried to save him.",
                grammar: ["perfect", "deponent", "infinitive"],
                gloss: { "dei": "gods", "conati sunt": "tried" },
                slots: {}
            },
            {
                template: "comes tandem novam vitam adeptus est.",
                translation: "the companion finally obtained a new life.",
                grammar: ["perfect", "deponent"],
                gloss: { "comes": "companion", "vitam": "life", "adeptus est": "obtained" },
                slots: {}
            }
        ]
    },

    {
        id: "ch9_the_confession",
        title: "The Confession",
        theme: "daily_life",
        maxChapter: 9,
        introduction: "A man confesses to a crime.",
        sentences: [
            {
                template: "vir ad iudicem adductus est.",
                translation: "the man was brought to the judge.",
                grammar: ["perfect_passive"],
                gloss: { "iudicem": "judge", "adductus est": "was brought" },
                slots: {}
            },
            {
                template: "iudex rogavit num vir pecuniam cepisset.",
                translation: "the judge asked whether the man had taken the money.",
                grammar: ["perfect", "indirect_question"],
                gloss: { "iudex": "judge", "num": "whether", "pecuniam": "money", "cepisset": "had taken" },
                slots: {}
            },
            {
                template: "vir primo negavit se pecuniam cepisse.",
                translation: "the man first denied that he had taken the money.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "primo": "first", "negavit": "denied", "pecuniam": "money", "cepisse": "had taken" },
                slots: {}
            },
            {
                template: "sed testes dixerunt eum mentiri.",
                translation: "but witnesses said that he was lying.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "testes": "witnesses", "mentiri": "was lying" },
                slots: {}
            },
            {
                template: "tandem vir confessus est se pecuniam cepisse.",
                translation: "at last the man confessed that he had taken the money.",
                grammar: ["perfect", "deponent", "indirect_statement"],
                gloss: { "confessus est": "confessed", "pecuniam": "money", "cepisse": "had taken" },
                slots: {}
            },
            {
                template: "iudex eum punire constituit.",
                translation: "the judge decided to punish him.",
                grammar: ["perfect", "infinitive"],
                gloss: { "iudex": "judge", "punire": "to punish", "constituit": "decided" },
                slots: {}
            }
        ]
    },

    {
        id: "ch9_the_speech",
        title: "The Speech",
        theme: "historical",
        maxChapter: 9,
        introduction: "A famous orator addresses the senate.",
        sentences: [
            {
                template: "orator clarus in senatu locutus est.",
                translation: "a famous orator spoke in the senate.",
                grammar: ["perfect", "deponent"],
                gloss: { "orator": "orator", "clarus": "famous", "senatu": "senate", "locutus est": "spoke" },
                slots: {}
            },
            {
                template: "senatores eum attente audiebant.",
                translation: "the senators were listening to him attentively.",
                grammar: ["imperfect"],
                gloss: { "senatores": "senators", "attente": "attentively" },
                slots: {}
            },
            {
                template: "orator dixit rem publicam in periculo esse.",
                translation: "the orator said that the state was in danger.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "orator": "orator", "rem publicam": "state", "periculo": "danger" },
                slots: {}
            },
            {
                template: "addidit hostes adventuros esse.",
                translation: "he added that the enemy would arrive.",
                grammar: ["perfect", "indirect_statement"],
                gloss: { "addidit": "he added", "adventuros esse": "would arrive" },
                slots: {}
            },
            {
                template: "sperabat senatores se audituros esse.",
                translation: "he hoped that the senators would listen to him.",
                grammar: ["imperfect", "indirect_statement"],
                gloss: { "sperabat": "he hoped", "senatores": "senators", "audituros esse": "would listen" },
                slots: {}
            },
            {
                template: "senatores oratorem laudaverunt et consilium ceperunt.",
                translation: "the senators praised the orator and made a plan.",
                grammar: ["perfect"],
                gloss: { "senatores": "senators", "oratorem": "orator", "consilium": "plan" },
                slots: {}
            }
        ]
    },

    // ========== CHAPTER 10 TEMPLATES (+ Purpose/result clauses, subjunctive) ==========

    {
        id: "ch10_the_conspiracy",
        title: "The Conspiracy",
        theme: "historical",
        maxChapter: 10,
        introduction: "Conspirators plot against the state.",
        sentences: [
            {
                template: "coniurati clam convenerunt ut rem publicam everterent.",
                translation: "the conspirators secretly met in order to overthrow the state.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "coniurati": "conspirators", "clam": "secretly", "convenerunt": "met", "rem publicam": "state", "everterent": "to overthrow" },
                slots: {}
            },
            {
                template: "constituerunt ut consulem necarent.",
                translation: "they decided to kill the consul.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "constituerunt": "decided", "consulem": "consul", "necarent": "to kill" },
                slots: {}
            },
            {
                template: "unus ex coniuratis ad consulem ivit ut eum moneret.",
                translation: "one of the conspirators went to the consul to warn him.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "coniuratis": "conspirators", "consulem": "consul", "moneret": "to warn" },
                slots: {}
            },
            {
                template: "consul timebat ne coniurati se necarent.",
                translation: "the consul feared that the conspirators might kill him.",
                grammar: ["imperfect", "purpose_clauses"],
                gloss: { "consul": "consul", "timebat": "feared", "ne": "lest/that", "coniurati": "conspirators", "necarent": "might kill" },
                slots: {}
            },
            {
                template: "milites misit qui coniuratos caperent.",
                translation: "he sent soldiers to capture the conspirators.",
                grammar: ["perfect", "purpose_clauses", "relative_clauses"],
                gloss: { "coniuratos": "conspirators", "caperent": "to capture" },
                slots: {}
            },
            {
                template: "coniurati capti et puniti sunt.",
                translation: "the conspirators were captured and punished.",
                grammar: ["perfect_passive"],
                gloss: { "coniurati": "conspirators", "capti": "captured", "puniti sunt": "were punished" },
                slots: {}
            }
        ]
    },

    {
        id: "ch10_the_oracle",
        title: "The Oracle",
        theme: "mythology",
        maxChapter: 10,
        introduction: "A king consults the oracle.",
        sentences: [
            {
                template: "rex ad oraculum ivit ut de futuro cognosceret.",
                translation: "the king went to the oracle in order to learn about the future.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "oraculum": "oracle", "futuro": "future", "cognosceret": "to learn" },
                slots: {}
            },
            {
                template: "sacerdos eum monuit ne bellum gereret.",
                translation: "the priest warned him not to wage war.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "sacerdos": "priest", "monuit": "warned", "ne": "not to", "bellum": "war", "gereret": "to wage" },
                slots: {}
            },
            {
                template: "'si trans flumen ibis,' inquit, 'magnum regnum delebis.'",
                translation: "'if you cross the river,' he said, 'you will destroy a great kingdom.'",
                grammar: ["future", "conditional"],
                gloss: { "trans": "across", "flumen": "river", "inquit": "he said", "regnum": "kingdom", "delebis": "you will destroy" },
                slots: {}
            },
            {
                template: "rex tam superbus erat ut verba non intellegeret.",
                translation: "the king was so proud that he did not understand the words.",
                grammar: ["imperfect", "result_clauses"],
                gloss: { "superbus": "proud", "verba": "words", "intellegeret": "understand" },
                slots: {}
            },
            {
                template: "putabat se regnum hostium deleturum esse.",
                translation: "he thought that he would destroy the kingdom of the enemy.",
                grammar: ["imperfect", "indirect_statement"],
                gloss: { "putabat": "thought", "regnum": "kingdom", "deleturum esse": "would destroy" },
                slots: {}
            },
            {
                template: "sed suum regnum, non hostium, deletum est.",
                translation: "but his own kingdom, not the enemy's, was destroyed.",
                grammar: ["perfect_passive"],
                gloss: { "suum": "his own", "regnum": "kingdom", "deletum est": "was destroyed" },
                slots: {}
            }
        ]
    },

    {
        id: "ch10_the_generals_plan",
        title: "The General's Plan",
        theme: "military",
        maxChapter: 10,
        introduction: "A general devises a cunning plan.",
        sentences: [
            {
                template: "dux milites convocavit ut consilium exponeret.",
                translation: "the general summoned the soldiers in order to explain his plan.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "convocavit": "summoned", "consilium": "plan", "exponeret": "to explain" },
                slots: {}
            },
            {
                template: "'nocte proficiscemur,' inquit, 'ut hostes decipiaimus.'",
                translation: "'we will set out at night,' he said, 'in order to deceive the enemy.'",
                grammar: ["future", "purpose_clauses"],
                gloss: { "proficiscemur": "we will set out", "inquit": "he said", "decipiaimus": "to deceive" },
                slots: {}
            },
            {
                template: "milites tam alacres erant ut statim paraverint.",
                translation: "the soldiers were so eager that they prepared immediately.",
                grammar: ["imperfect", "result_clauses"],
                gloss: { "alacres": "eager", "paraverint": "prepared" },
                slots: {}
            },
            {
                template: "dux rogavit ut omnes in silentio manerent.",
                translation: "the general asked that everyone remain in silence.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "silentio": "silence", "manerent": "remain" },
                slots: {}
            },
            {
                template: "hostes tam securin erant ut nihil sentirent.",
                translation: "the enemy were so unaware that they noticed nothing.",
                grammar: ["imperfect", "result_clauses"],
                gloss: { "securi": "unaware", "sentirent": "noticed" },
                slots: {}
            },
            {
                template: "milites Romani hostes oppugnaverunt et vicerunt.",
                translation: "the Roman soldiers attacked and defeated the enemy.",
                grammar: ["perfect"],
                gloss: { "oppugnaverunt": "attacked", "vicerunt": "defeated" },
                slots: {}
            }
        ]
    },

    {
        id: "ch10_so_brave_that",
        title: "So Brave That...",
        theme: "military",
        maxChapter: 10,
        introduction: "A soldier shows extraordinary courage.",
        sentences: [
            {
                template: "miles Romanus tam fortis erat ut solus pugnaret.",
                translation: "the Roman soldier was so brave that he fought alone.",
                grammar: ["imperfect", "result_clauses"],
                gloss: { "fortis": "brave", "solus": "alone", "pugnaret": "fought" },
                slots: {}
            },
            {
                template: "hostes eum interficere conabantur ut ceteros terrerent.",
                translation: "the enemy were trying to kill him in order to terrify the others.",
                grammar: ["imperfect", "deponent", "purpose_clauses"],
                gloss: { "interficere": "to kill", "conabantur": "were trying", "ceteros": "the others", "terrerent": "to terrify" },
                slots: {}
            },
            {
                template: "sed miles tanta virtute pugnabat ut nemo eum vinceret.",
                translation: "but the soldier was fighting with such courage that no one defeated him.",
                grammar: ["imperfect", "result_clauses"],
                gloss: { "tanta": "such", "virtute": "courage", "nemo": "no one", "vinceret": "defeated" },
                slots: {}
            },
            {
                template: "comites eius venerunt ut eum adiuvarent.",
                translation: "his companions came in order to help him.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "comites": "companions", "adiuvarent": "to help" },
                slots: {}
            },
            {
                template: "hostes tantum timorem habebant ut fugerent.",
                translation: "the enemy had such great fear that they fled.",
                grammar: ["imperfect", "result_clauses"],
                gloss: { "tantum": "such great", "timorem": "fear", "fugerent": "fled" },
                slots: {}
            },
            {
                template: "imperator militem laudavit et coronam ei dedit.",
                translation: "the emperor praised the soldier and gave him a crown.",
                grammar: ["perfect"],
                gloss: { "imperator": "emperor", "coronam": "crown" },
                slots: {}
            }
        ]
    },

    {
        id: "ch10_the_quest",
        title: "The Quest",
        theme: "mythology",
        maxChapter: 10,
        introduction: "A hero sets out on a quest.",
        sentences: [
            {
                template: "heros profectus est ut thesaurum inveniret.",
                translation: "the hero set out in order to find the treasure.",
                grammar: ["perfect", "deponent", "purpose_clauses"],
                gloss: { "heros": "hero", "profectus est": "set out", "thesaurum": "treasure", "inveniret": "to find" },
                slots: {}
            },
            {
                template: "via tam difficilis erat ut multi perierint.",
                translation: "the road was so difficult that many perished.",
                grammar: ["imperfect", "result_clauses"],
                gloss: { "difficilis": "difficult", "perierint": "perished" },
                slots: {}
            },
            {
                template: "heros timebat ne monstrum eum necaret.",
                translation: "the hero feared that the monster might kill him.",
                grammar: ["imperfect", "purpose_clauses"],
                gloss: { "heros": "hero", "timebat": "feared", "ne": "lest/that", "monstrum": "monster", "necaret": "might kill" },
                slots: {}
            },
            {
                template: "gladium cepit ut se defenderet.",
                translation: "he took his sword in order to defend himself.",
                grammar: ["perfect", "purpose_clauses"],
                gloss: { "gladium": "sword", "defenderet": "to defend" },
                slots: {}
            },
            {
                template: "monstrum tam terribile erat ut heros paene fugerit.",
                translation: "the monster was so terrible that the hero almost fled.",
                grammar: ["imperfect", "result_clauses"],
                gloss: { "monstrum": "monster", "terribile": "terrible", "heros": "hero", "paene": "almost", "fugerit": "fled" },
                slots: {}
            },
            {
                template: "tandem, monstro victo, thesaurum cepit.",
                translation: "at last, with the monster defeated, he took the treasure.",
                grammar: ["perfect", "ablative_absolute"],
                gloss: { "monstro": "monster", "victo": "defeated", "thesaurum": "treasure" },
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
