// GCSE Latin Translation Generator Data
// Based on "Latin to GCSE" by John Taylor (Books 1 & 2)
// Sentence bank for unseen translation practice

// Chapter grammar mapping - what grammar is introduced in each chapter
const chapterGrammar = {
    1: {
        name: "Chapter 1",
        grammar: ["present_active", "nominative", "accusative", "1st_declension", "2nd_declension", "sum_present", "prepositions_acc"],
        description: "Present tense, nominative & accusative, 1st/2nd declension"
    },
    2: {
        name: "Chapter 2",
        grammar: ["genitive", "dative", "ablative", "2nd_conj", "3rd_conj", "4th_conj", "2nd_neuter", "infinitive", "prepositions_abl"],
        description: "All cases, all conjugations, infinitive"
    },
    3: {
        name: "Chapter 3",
        grammar: ["imperfect", "possum", "adjectives_212", "imperatives", "vocative"],
        description: "Imperfect tense, possum, adjectives, imperatives"
    },
    4: {
        name: "Chapter 4",
        grammar: ["perfect", "3rd_declension", "3rd_neuter", "direct_questions", "ego_tu"],
        description: "Perfect tense, 3rd declension, direct questions"
    },
    5: {
        name: "Chapter 5",
        grammar: ["future", "adjectives_3rd", "is_ea_id", "se_reflexive", "suus", "nos_vos"],
        description: "Future tense, 3rd declension adjectives, pronouns"
    },
    6: {
        name: "Chapter 6",
        grammar: ["pluperfect", "relative_clauses", "ubi_postquam", "quod_quamquam", "eo", "numerals"],
        description: "Pluperfect, relative clauses, time clauses"
    },
    7: {
        name: "Chapter 7",
        grammar: ["present_passive", "imperfect_passive", "future_passive", "agent_instrument", "present_participle", "ppp", "hic_ille", "comparatives", "superlatives"],
        description: "Passive voice, participles, comparatives"
    },
    8: {
        name: "Chapter 8",
        grammar: ["perfect_passive", "pluperfect_passive", "ablative_absolute", "future_participle", "conditionals", "ipse_idem", "negative_commands"],
        description: "Perfect passive, ablative absolute, conditionals"
    },
    9: {
        name: "Chapter 9",
        grammar: ["deponent_verbs", "indirect_statement", "passive_infinitive", "perfect_infinitive", "future_infinitive", "semi_deponents"],
        description: "Deponent verbs, indirect statement"
    },
    10: {
        name: "Chapter 10",
        grammar: ["purpose_clauses", "result_clauses", "indirect_commands", "indirect_questions", "cum_clauses", "verbs_of_fearing", "imperfect_subjunctive", "pluperfect_subjunctive", "4th_5th_declension", "gerundive"],
        description: "Subjunctive uses, purpose/result clauses"
    }
};

// Grammar spotlight definitions - for targeted practice
const grammarSpotlights = {
    // Tenses
    imperfect: {
        name: "Imperfect tense",
        description: "Continuous or repeated past action",
        minChapter: 3,
        tags: ["imperfect"]
    },
    perfect: {
        name: "Perfect tense",
        description: "Completed past action",
        minChapter: 4,
        tags: ["perfect"]
    },
    pluperfect: {
        name: "Pluperfect tense",
        description: "Action completed before another past action",
        minChapter: 6,
        tags: ["pluperfect"]
    },
    future: {
        name: "Future tense",
        description: "Future action",
        minChapter: 5,
        tags: ["future"]
    },

    // Passive
    present_passive: {
        name: "Present passive",
        description: "Action being done to the subject (present)",
        minChapter: 7,
        tags: ["present_passive"]
    },
    perfect_passive: {
        name: "Perfect passive",
        description: "PPP + form of esse",
        minChapter: 8,
        tags: ["perfect_passive"]
    },

    // Participles
    present_participle: {
        name: "Present participle",
        description: "-ns/-ntis forms (doing/while doing)",
        minChapter: 7,
        tags: ["present_participle"]
    },
    ppp: {
        name: "Perfect passive participle",
        description: "PPP as adjective",
        minChapter: 7,
        tags: ["ppp"]
    },
    ablative_absolute: {
        name: "Ablative absolute",
        description: "Noun + participle in ablative",
        minChapter: 8,
        tags: ["ablative_absolute"]
    },

    // Subjunctive constructions
    purpose_clauses: {
        name: "Purpose clauses",
        description: "ut/ne + subjunctive (in order to/that)",
        minChapter: 10,
        tags: ["purpose_clauses"]
    },
    result_clauses: {
        name: "Result clauses",
        description: "tam/ita/tantus... ut + subjunctive",
        minChapter: 10,
        tags: ["result_clauses"]
    },
    indirect_commands: {
        name: "Indirect commands",
        description: "Verb of ordering + ut/ne + subjunctive",
        minChapter: 10,
        tags: ["indirect_commands"]
    },
    cum_clauses: {
        name: "Cum clauses",
        description: "cum + subjunctive (when/since/although)",
        minChapter: 10,
        tags: ["cum_clauses"]
    },
    indirect_questions: {
        name: "Indirect questions",
        description: "Question word + subjunctive",
        minChapter: 10,
        tags: ["indirect_questions"]
    },

    // Other
    relative_clauses: {
        name: "Relative clauses",
        description: "qui/quae/quod (who/which/that)",
        minChapter: 6,
        tags: ["relative_clauses"]
    },
    indirect_statement: {
        name: "Indirect statement",
        description: "Accusative + infinitive",
        minChapter: 9,
        tags: ["indirect_statement"]
    },
    deponent_verbs: {
        name: "Deponent verbs",
        description: "Passive form, active meaning",
        minChapter: 9,
        tags: ["deponent_verbs"]
    },
    comparatives: {
        name: "Comparatives & Superlatives",
        description: "-ior/-ius or quam comparisons",
        minChapter: 7,
        tags: ["comparatives", "superlatives"]
    }
};

// Sentence bank - pre-written Latin sentences with translations
// Each sentence tagged with: maxChapter, grammar tags, theme, acceptable translations
const sentenceBank = [
    // ========== CHAPTER 1 (Present tense, nom/acc, basic) ==========
    {
        id: "ch1_001",
        latin: "puella in horto ambulat.",
        maxChapter: 1,
        grammar: ["present_active", "nominative", "accusative"],
        theme: "daily_life",
        translations: [
            "the girl walks in the garden",
            "the girl is walking in the garden",
            "a girl walks in the garden",
            "a girl is walking in the garden"
        ],
        keyPhrases: ["girl", "walk", "garden"],
        hints: {
            puella: "puella, -ae (f) noun 1",
            horto: "hortus, -i (m) noun 2 - ablative",
            ambulat: "ambulare - present 3rd sing"
        }
    },
    {
        id: "ch1_002",
        latin: "servus cibum portat.",
        maxChapter: 1,
        grammar: ["present_active", "nominative", "accusative"],
        theme: "daily_life",
        translations: [
            "the slave carries the food",
            "the slave is carrying the food",
            "a slave carries food",
            "a slave is carrying food"
        ],
        keyPhrases: ["slave", "carr", "food"],
        hints: {
            servus: "servus, -i (m) noun 2",
            cibum: "cibus, -i (m) noun 2 - accusative",
            portat: "portare - present 3rd sing"
        }
    },
    {
        id: "ch1_003",
        latin: "dominus servum vocat.",
        maxChapter: 1,
        grammar: ["present_active", "nominative", "accusative"],
        theme: "daily_life",
        translations: [
            "the master calls the slave",
            "the master is calling the slave",
            "a master calls a slave"
        ],
        keyPhrases: ["master", "call", "slave"],
        hints: {
            dominus: "dominus, -i (m) noun 2",
            servum: "servus, -i (m) noun 2 - accusative",
            vocat: "vocare - present 3rd sing"
        }
    },
    {
        id: "ch1_004",
        latin: "femina epistulam scribit.",
        maxChapter: 1,
        grammar: ["present_active", "nominative", "accusative"],
        theme: "daily_life",
        translations: [
            "the woman writes a letter",
            "the woman is writing a letter",
            "a woman writes a letter"
        ],
        keyPhrases: ["woman", "writ", "letter"],
        hints: {
            femina: "femina, -ae (f) noun 1",
            epistulam: "epistula, -ae (f) noun 1 - accusative",
            scribit: "scribere - present 3rd sing"
        }
    },
    {
        id: "ch1_005",
        latin: "puer ad villam currit.",
        maxChapter: 1,
        grammar: ["present_active", "prepositions_acc"],
        theme: "daily_life",
        translations: [
            "the boy runs to the house",
            "the boy is running to the house",
            "a boy runs to the villa"
        ],
        keyPhrases: ["boy", "run", "house", "villa"],
        hints: {
            puer: "puer, pueri (m) noun 2",
            villam: "villa, -ae (f) noun 1 - accusative",
            currit: "currere - present 3rd sing"
        }
    },
    {
        id: "ch1_006",
        latin: "ancilla aquam fert.",
        maxChapter: 1,
        grammar: ["present_active", "nominative", "accusative"],
        theme: "daily_life",
        translations: [
            "the slave-girl carries water",
            "the slave-girl is carrying water",
            "the slavegirl brings water",
            "a slave girl carries the water"
        ],
        keyPhrases: ["slave", "girl", "water", "carr", "bring"],
        hints: {
            ancilla: "ancilla, -ae (f) noun 1",
            aquam: "aqua, -ae (f) noun 1 - accusative",
            fert: "ferre - present 3rd sing (irregular)"
        }
    },
    {
        id: "ch1_007",
        latin: "deus in templo habitat.",
        maxChapter: 1,
        grammar: ["present_active", "prepositions_abl"],
        theme: "mythology",
        translations: [
            "the god lives in the temple",
            "a god lives in the temple",
            "the god dwells in the temple"
        ],
        keyPhrases: ["god", "live", "dwell", "temple"],
        hints: {
            deus: "deus, -i (m) noun 2",
            templo: "templum, -i (n) noun 2 - ablative",
            habitat: "habitare - present 3rd sing"
        }
    },
    {
        id: "ch1_008",
        latin: "nauta per mare navigat.",
        maxChapter: 1,
        grammar: ["present_active", "prepositions_acc"],
        theme: "travel",
        translations: [
            "the sailor sails through the sea",
            "the sailor is sailing through the sea",
            "a sailor sails across the sea"
        ],
        keyPhrases: ["sailor", "sail", "sea"],
        hints: {
            nauta: "nauta, -ae (m) noun 1",
            mare: "mare, maris (n) noun 3 - accusative",
            navigat: "navigare - present 3rd sing"
        }
    },
    {
        id: "ch1_009",
        latin: "milites gladios habent.",
        maxChapter: 1,
        grammar: ["present_active", "nominative", "accusative"],
        theme: "military",
        translations: [
            "the soldiers have swords",
            "soldiers have swords",
            "the soldiers are holding swords"
        ],
        keyPhrases: ["soldier", "have", "sword"],
        hints: {
            milites: "miles, militis (m) noun 3 - nom plural",
            gladios: "gladius, -i (m) noun 2 - acc plural",
            habent: "habere - present 3rd plural"
        }
    },
    {
        id: "ch1_010",
        latin: "pueri in via clamant.",
        maxChapter: 1,
        grammar: ["present_active", "prepositions_abl"],
        theme: "daily_life",
        translations: [
            "the boys shout in the street",
            "the boys are shouting in the street",
            "boys shout in the road"
        ],
        keyPhrases: ["boy", "shout", "street", "road"],
        hints: {
            pueri: "puer, pueri (m) noun 2 - nom plural",
            via: "via, -ae (f) noun 1 - ablative",
            clamant: "clamare - present 3rd plural"
        }
    },

    // ========== CHAPTER 2 (All cases, all conjugations) ==========
    {
        id: "ch2_001",
        latin: "filius regis in horto dormit.",
        maxChapter: 2,
        grammar: ["present_active", "genitive"],
        theme: "mythology",
        translations: [
            "the son of the king sleeps in the garden",
            "the king's son sleeps in the garden",
            "the son of the king is sleeping in the garden"
        ],
        keyPhrases: ["son", "king", "sleep", "garden"],
        hints: {
            filius: "filius, -i (m) noun 2",
            regis: "rex, regis (m) noun 3 - genitive",
            dormit: "dormire - present 3rd sing"
        }
    },
    {
        id: "ch2_002",
        latin: "mercator pecuniam servo dat.",
        maxChapter: 2,
        grammar: ["present_active", "dative", "accusative"],
        theme: "daily_life",
        translations: [
            "the merchant gives money to the slave",
            "a merchant gives money to the slave",
            "the merchant is giving money to a slave"
        ],
        keyPhrases: ["merchant", "give", "money", "slave"],
        hints: {
            mercator: "mercator, -oris (m) noun 3",
            pecuniam: "pecunia, -ae (f) noun 1 - accusative",
            servo: "servus, -i (m) noun 2 - dative",
            dat: "dare - present 3rd sing"
        }
    },
    {
        id: "ch2_003",
        latin: "pater filio librum ostendit.",
        maxChapter: 2,
        grammar: ["present_active", "dative", "accusative"],
        theme: "daily_life",
        translations: [
            "the father shows a book to his son",
            "the father shows the son a book",
            "father shows a book to the son"
        ],
        keyPhrases: ["father", "show", "book", "son"],
        hints: {
            pater: "pater, patris (m) noun 3",
            filio: "filius, -i (m) noun 2 - dative",
            librum: "liber, libri (m) noun 2 - accusative",
            ostendit: "ostendere - present 3rd sing"
        }
    },
    {
        id: "ch2_004",
        latin: "puella cum matre ad templum ambulat.",
        maxChapter: 2,
        grammar: ["present_active", "prepositions_abl", "prepositions_acc"],
        theme: "daily_life",
        translations: [
            "the girl walks to the temple with her mother",
            "the girl walks with her mother to the temple",
            "a girl walks to the temple with mother"
        ],
        keyPhrases: ["girl", "walk", "temple", "mother"],
        hints: {
            cum: "cum + ablative = with",
            matre: "mater, matris (f) noun 3 - ablative",
            templum: "templum, -i (n) noun 2 - accusative"
        }
    },
    {
        id: "ch2_005",
        latin: "nuntius epistulam domini portat.",
        maxChapter: 2,
        grammar: ["present_active", "genitive"],
        theme: "daily_life",
        translations: [
            "the messenger carries the master's letter",
            "the messenger carries the letter of the master",
            "a messenger carries the master's letter"
        ],
        keyPhrases: ["messenger", "carr", "letter", "master"],
        hints: {
            nuntius: "nuntius, -i (m) noun 2",
            domini: "dominus, -i (m) noun 2 - genitive",
            portat: "portare - present 3rd sing"
        }
    },
    {
        id: "ch2_006",
        latin: "milites multas horas pugnant.",
        maxChapter: 2,
        grammar: ["present_active", "time_how_long"],
        theme: "military",
        translations: [
            "the soldiers fight for many hours",
            "soldiers fight for many hours",
            "the soldiers are fighting for many hours"
        ],
        keyPhrases: ["soldier", "fight", "many", "hour"],
        hints: {
            milites: "miles, militis (m) noun 3 - nom plural",
            multas: "multus, -a, -um - acc plural",
            horas: "hora, -ae (f) noun 1 - acc plural (time how long)"
        }
    },
    {
        id: "ch2_007",
        latin: "nautae e portu navigant.",
        maxChapter: 2,
        grammar: ["present_active", "prepositions_abl"],
        theme: "travel",
        translations: [
            "the sailors sail from the harbour",
            "sailors sail out of the harbour",
            "the sailors are sailing from the port"
        ],
        keyPhrases: ["sailor", "sail", "harbour", "port"],
        hints: {
            nautae: "nauta, -ae (m) noun 1 - nom plural",
            e: "e/ex + ablative = from, out of",
            portu: "portus, -us (m) noun 4 - ablative"
        }
    },

    // ========== CHAPTER 3 (Imperfect tense, adjectives, imperatives) ==========
    {
        id: "ch3_001",
        latin: "servi in agris laborabant.",
        maxChapter: 3,
        grammar: ["imperfect"],
        theme: "daily_life",
        translations: [
            "the slaves were working in the fields",
            "slaves were working in the fields",
            "the slaves used to work in the fields"
        ],
        keyPhrases: ["slave", "work", "field"],
        hints: {
            servi: "servus, -i (m) noun 2 - nom plural",
            agris: "ager, agri (m) noun 2 - ablative plural",
            laborabant: "laborare - imperfect 3rd plural"
        }
    },
    {
        id: "ch3_002",
        latin: "puella laeta in horto ludebat.",
        maxChapter: 3,
        grammar: ["imperfect", "adjectives_212"],
        theme: "daily_life",
        translations: [
            "the happy girl was playing in the garden",
            "a happy girl was playing in the garden",
            "the happy girl used to play in the garden"
        ],
        keyPhrases: ["happy", "girl", "play", "garden"],
        hints: {
            laeta: "laetus, -a, -um - nominative fem sing",
            ludebat: "ludere - imperfect 3rd sing"
        }
    },
    {
        id: "ch3_003",
        latin: "miles fortis contra hostes pugnabat.",
        maxChapter: 3,
        grammar: ["imperfect", "adjectives_212"],
        theme: "military",
        translations: [
            "the brave soldier was fighting against the enemy",
            "a brave soldier was fighting against the enemies",
            "the brave soldier fought against the enemy"
        ],
        keyPhrases: ["brave", "soldier", "fight", "enemy"],
        hints: {
            fortis: "fortis, -e - nominative masc sing",
            hostes: "hostis, -is (m) noun 3 - acc plural",
            pugnabat: "pugnare - imperfect 3rd sing"
        }
    },
    {
        id: "ch3_004",
        latin: "dominus iratus servum vituperabat.",
        maxChapter: 3,
        grammar: ["imperfect", "adjectives_212"],
        theme: "daily_life",
        translations: [
            "the angry master was blaming the slave",
            "the angry master was scolding the slave",
            "an angry master was blaming the slave"
        ],
        keyPhrases: ["angry", "master", "blam", "scold", "slave"],
        hints: {
            iratus: "iratus, -a, -um - nominative masc sing",
            vituperabat: "vituperare - imperfect 3rd sing"
        }
    },
    {
        id: "ch3_005",
        latin: "tace, serve! dominus dormit.",
        maxChapter: 3,
        grammar: ["imperatives", "vocative", "present_active"],
        theme: "daily_life",
        translations: [
            "be quiet, slave! the master is sleeping",
            "be silent, slave! the master sleeps",
            "shut up, slave! the master is sleeping"
        ],
        keyPhrases: ["quiet", "silent", "slave", "master", "sleep"],
        hints: {
            tace: "tacere - imperative singular",
            serve: "servus, -i - vocative singular"
        }
    },
    {
        id: "ch3_006",
        latin: "festinate, milites! hostes appropinquant.",
        maxChapter: 3,
        grammar: ["imperatives", "vocative", "present_active"],
        theme: "military",
        translations: [
            "hurry, soldiers! the enemy is approaching",
            "hurry up, soldiers! enemies are approaching",
            "make haste, soldiers! the enemies approach"
        ],
        keyPhrases: ["hurry", "soldier", "enemy", "approach"],
        hints: {
            festinate: "festinare - imperative plural",
            milites: "miles, militis - vocative plural",
            appropinquant: "appropinquare - present 3rd plural"
        }
    },
    {
        id: "ch3_007",
        latin: "rex magnus multos annos regnabat.",
        maxChapter: 3,
        grammar: ["imperfect", "adjectives_212", "time_how_long"],
        theme: "mythology",
        translations: [
            "the great king ruled for many years",
            "the great king was ruling for many years",
            "a great king ruled for many years"
        ],
        keyPhrases: ["great", "king", "rule", "many", "year"],
        hints: {
            magnus: "magnus, -a, -um - nominative masc sing",
            annos: "annus, -i (m) - acc plural (time how long)",
            regnabat: "regnare - imperfect 3rd sing"
        }
    },
    {
        id: "ch3_008",
        latin: "pueri miseri non poterant ludere.",
        maxChapter: 3,
        grammar: ["imperfect", "adjectives_212", "possum", "infinitive"],
        theme: "daily_life",
        translations: [
            "the unhappy boys were not able to play",
            "the wretched boys could not play",
            "miserable boys were unable to play"
        ],
        keyPhrases: ["unhappy", "wretched", "miserable", "boy", "able", "could", "play"],
        hints: {
            miseri: "miser, misera, miserum - nom masc plural",
            poterant: "posse - imperfect 3rd plural",
            ludere: "ludere - infinitive"
        }
    },

    // ========== CHAPTER 4 (Perfect tense, 3rd declension, questions) ==========
    {
        id: "ch4_001",
        latin: "puella clamorem audivit.",
        maxChapter: 4,
        grammar: ["perfect"],
        theme: "daily_life",
        translations: [
            "the girl heard a shout",
            "the girl heard the shout",
            "a girl heard a shout",
            "the girl has heard a shout"
        ],
        keyPhrases: ["girl", "heard", "shout"],
        hints: {
            clamorem: "clamor, clamoris (m) noun 3 - accusative",
            audivit: "audire - perfect 3rd sing"
        }
    },
    {
        id: "ch4_002",
        latin: "milites urbem ceperunt.",
        maxChapter: 4,
        grammar: ["perfect", "3rd_declension"],
        theme: "military",
        translations: [
            "the soldiers captured the city",
            "soldiers captured the city",
            "the soldiers have captured the city",
            "the soldiers took the city"
        ],
        keyPhrases: ["soldier", "capture", "took", "city"],
        hints: {
            urbem: "urbs, urbis (f) noun 3 - accusative",
            ceperunt: "capere - perfect 3rd plural"
        }
    },
    {
        id: "ch4_003",
        latin: "quis hoc fecit?",
        maxChapter: 4,
        grammar: ["perfect", "direct_questions"],
        theme: "daily_life",
        translations: [
            "who did this?",
            "who has done this?",
            "who made this?"
        ],
        keyPhrases: ["who", "did", "done", "this"],
        hints: {
            quis: "quis? - who? (interrogative pronoun)",
            hoc: "hic, haec, hoc - this (accusative neut)",
            fecit: "facere - perfect 3rd sing"
        }
    },
    {
        id: "ch4_004",
        latin: "cur tu epistulam non misisti?",
        maxChapter: 4,
        grammar: ["perfect", "direct_questions", "ego_tu"],
        theme: "daily_life",
        translations: [
            "why did you not send the letter?",
            "why didn't you send the letter?",
            "why have you not sent the letter?"
        ],
        keyPhrases: ["why", "you", "not", "send", "letter"],
        hints: {
            cur: "cur? - why?",
            tu: "tu - you (nominative)",
            misisti: "mittere - perfect 2nd sing"
        }
    },
    {
        id: "ch4_005",
        latin: "dux milites ad proelium duxit.",
        maxChapter: 4,
        grammar: ["perfect", "3rd_declension"],
        theme: "military",
        translations: [
            "the leader led the soldiers to battle",
            "the general led soldiers to battle",
            "the leader led the soldiers into battle"
        ],
        keyPhrases: ["leader", "general", "led", "soldier", "battle"],
        hints: {
            dux: "dux, ducis (m) noun 3 - nominative",
            proelium: "proelium, -i (n) noun 2 - accusative",
            duxit: "ducere - perfect 3rd sing"
        }
    },
    {
        id: "ch4_006",
        latin: "pater meus heri rediit.",
        maxChapter: 4,
        grammar: ["perfect", "ego_tu"],
        theme: "daily_life",
        translations: [
            "my father returned yesterday",
            "my father came back yesterday",
            "my father has returned yesterday"
        ],
        keyPhrases: ["my", "father", "return", "came back", "yesterday"],
        hints: {
            meus: "meus, mea, meum - my",
            heri: "heri - yesterday (adverb)",
            rediit: "redire - perfect 3rd sing"
        }
    },
    {
        id: "ch4_007",
        latin: "ego te non vidi. ubi fuisti?",
        maxChapter: 4,
        grammar: ["perfect", "direct_questions", "ego_tu"],
        theme: "daily_life",
        translations: [
            "I did not see you. where were you?",
            "I didn't see you. where have you been?",
            "I have not seen you. where were you?"
        ],
        keyPhrases: ["I", "not", "see", "you", "where"],
        hints: {
            ego: "ego - I (nominative)",
            te: "tu - you (accusative)",
            fuisti: "esse - perfect 2nd sing"
        }
    },
    {
        id: "ch4_008",
        latin: "senex multa dixit sed nemo audivit.",
        maxChapter: 4,
        grammar: ["perfect", "3rd_declension"],
        theme: "daily_life",
        translations: [
            "the old man said many things but nobody listened",
            "the old man said much but no one heard",
            "an old man said many things but nobody heard"
        ],
        keyPhrases: ["old man", "said", "many", "nobody", "no one", "heard", "listen"],
        hints: {
            senex: "senex, senis (m) noun 3 - nominative",
            nemo: "nemo - nobody, no one",
            dixit: "dicere - perfect 3rd sing"
        }
    },

    // ========== CHAPTER 5 (Future tense, 3rd decl adjectives, pronouns) ==========
    {
        id: "ch5_001",
        latin: "cras nos Romam iter faciemus.",
        maxChapter: 5,
        grammar: ["future", "nos_vos"],
        theme: "travel",
        translations: [
            "tomorrow we will make a journey to Rome",
            "tomorrow we will travel to Rome",
            "we will make a journey to Rome tomorrow"
        ],
        keyPhrases: ["tomorrow", "we", "journey", "travel", "Rome"],
        hints: {
            cras: "cras - tomorrow (adverb)",
            nos: "nos - we (nominative)",
            faciemus: "facere - future 1st plural"
        }
    },
    {
        id: "ch5_002",
        latin: "rex fortis hostes vincet.",
        maxChapter: 5,
        grammar: ["future", "adjectives_3rd"],
        theme: "military",
        translations: [
            "the brave king will conquer the enemy",
            "the brave king will defeat the enemies",
            "a brave king will conquer the enemy"
        ],
        keyPhrases: ["brave", "king", "conquer", "defeat", "enemy"],
        hints: {
            fortis: "fortis, -e - brave (3rd decl adj)",
            vincet: "vincere - future 3rd sing"
        }
    },
    {
        id: "ch5_003",
        latin: "puella patrem suum amat.",
        maxChapter: 5,
        grammar: ["present_active", "suus"],
        theme: "daily_life",
        translations: [
            "the girl loves her father",
            "the girl loves her own father",
            "a girl loves her father"
        ],
        keyPhrases: ["girl", "love", "her", "father"],
        hints: {
            suum: "suus, sua, suum - his/her/its own (reflexive)",
            amat: "amare - present 3rd sing"
        }
    },
    {
        id: "ch5_004",
        latin: "is librum legit; ea epistulam scribit.",
        maxChapter: 5,
        grammar: ["present_active", "is_ea_id"],
        theme: "daily_life",
        translations: [
            "he reads a book; she writes a letter",
            "he is reading a book; she is writing a letter",
            "he reads the book; she writes a letter"
        ],
        keyPhrases: ["he", "read", "book", "she", "writ", "letter"],
        hints: {
            is: "is, ea, id - he/she/it (pronoun)",
            ea: "is, ea, id - she (feminine nominative)"
        }
    },
    {
        id: "ch5_005",
        latin: "milites se in proelio defendent.",
        maxChapter: 5,
        grammar: ["future", "se_reflexive"],
        theme: "military",
        translations: [
            "the soldiers will defend themselves in battle",
            "soldiers will defend themselves in the battle",
            "the soldiers will protect themselves in battle"
        ],
        keyPhrases: ["soldier", "defend", "protect", "themselves", "battle"],
        hints: {
            se: "se - himself/herself/themselves (reflexive)",
            defendent: "defendere - future 3rd plural"
        }
    },
    {
        id: "ch5_006",
        latin: "omnes cives ingentem clamorem audient.",
        maxChapter: 5,
        grammar: ["future", "adjectives_3rd"],
        theme: "daily_life",
        translations: [
            "all the citizens will hear a huge shout",
            "all citizens will hear a huge shout",
            "all the citizens will hear an enormous shout"
        ],
        keyPhrases: ["all", "citizen", "hear", "huge", "enormous", "shout"],
        hints: {
            omnes: "omnis, -e - all (3rd decl adj)",
            ingentem: "ingens, ingentis - huge (3rd decl adj)",
            audient: "audire - future 3rd plural"
        }
    },

    // ========== CHAPTER 6 (Pluperfect, relative clauses, time clauses) ==========
    {
        id: "ch6_001",
        latin: "ubi milites advenerunt, hostes fugerant.",
        maxChapter: 6,
        grammar: ["pluperfect", "ubi_postquam"],
        theme: "military",
        translations: [
            "when the soldiers arrived, the enemy had fled",
            "when soldiers arrived, the enemies had fled",
            "when the soldiers arrived, the enemy had run away"
        ],
        keyPhrases: ["when", "soldier", "arrived", "enemy", "fled", "run away"],
        hints: {
            ubi: "ubi - when (temporal conjunction)",
            fugerant: "fugere - pluperfect 3rd plural"
        }
    },
    {
        id: "ch6_002",
        latin: "rex qui Romam regebat crudelis erat.",
        maxChapter: 6,
        grammar: ["relative_clauses", "imperfect"],
        theme: "mythology",
        translations: [
            "the king who ruled Rome was cruel",
            "the king who was ruling Rome was cruel",
            "the king who used to rule Rome was cruel"
        ],
        keyPhrases: ["king", "who", "ruled", "Rome", "cruel"],
        hints: {
            qui: "qui, quae, quod - who/which (relative pronoun)",
            regebat: "regere - imperfect 3rd sing"
        }
    },
    {
        id: "ch6_003",
        latin: "postquam cenam consumpsimus, dormivimus.",
        maxChapter: 6,
        grammar: ["ubi_postquam", "perfect"],
        theme: "daily_life",
        translations: [
            "after we had eaten dinner, we slept",
            "after we ate dinner, we slept",
            "after we consumed the meal, we slept"
        ],
        keyPhrases: ["after", "ate", "eaten", "dinner", "meal", "slept"],
        hints: {
            postquam: "postquam - after (temporal conjunction)",
            consumpsimus: "consumere - perfect 1st plural"
        }
    },
    {
        id: "ch6_004",
        latin: "puella quam vidisti soror mea est.",
        maxChapter: 6,
        grammar: ["relative_clauses", "perfect"],
        theme: "daily_life",
        translations: [
            "the girl whom you saw is my sister",
            "the girl who you saw is my sister",
            "the girl that you saw is my sister"
        ],
        keyPhrases: ["girl", "whom", "who", "you", "saw", "sister"],
        hints: {
            quam: "qui, quae, quod - whom (relative pronoun, acc fem)",
            vidisti: "videre - perfect 2nd sing"
        }
    },
    {
        id: "ch6_005",
        latin: "quod servus fugerat, dominus iratus erat.",
        maxChapter: 6,
        grammar: ["quod_quamquam", "pluperfect"],
        theme: "daily_life",
        translations: [
            "because the slave had fled, the master was angry",
            "since the slave had run away, the master was angry",
            "because the slave had escaped, the master was angry"
        ],
        keyPhrases: ["because", "since", "slave", "fled", "run away", "master", "angry"],
        hints: {
            quod: "quod - because (causal conjunction)",
            fugerat: "fugere - pluperfect 3rd sing"
        }
    },
    {
        id: "ch6_006",
        latin: "quinque milites qui fortissime pugnaverant praemia acceperunt.",
        maxChapter: 6,
        grammar: ["relative_clauses", "pluperfect", "numerals"],
        theme: "military",
        translations: [
            "five soldiers who had fought most bravely received rewards",
            "the five soldiers who had fought very bravely received prizes",
            "five soldiers who had fought most bravely received prizes"
        ],
        keyPhrases: ["five", "soldier", "who", "fought", "brave", "receive", "reward", "prize"],
        hints: {
            quinque: "quinque - five (numeral)",
            fortissime: "fortis - superlative adverb (most bravely)",
            pugnaverant: "pugnare - pluperfect 3rd plural"
        }
    },

    // ========== CHAPTER 7 (Passive, participles, comparatives) ==========
    {
        id: "ch7_001",
        latin: "epistula a servo portatur.",
        maxChapter: 7,
        grammar: ["present_passive", "agent_instrument"],
        theme: "daily_life",
        translations: [
            "the letter is being carried by the slave",
            "the letter is carried by a slave",
            "a letter is being carried by the slave"
        ],
        keyPhrases: ["letter", "carried", "by", "slave"],
        hints: {
            portatur: "portare - present passive 3rd sing",
            "a servo": "a/ab + ablative = agent (by whom)"
        }
    },
    {
        id: "ch7_002",
        latin: "urbs ab hostibus oppugnabatur.",
        maxChapter: 7,
        grammar: ["imperfect_passive", "agent_instrument"],
        theme: "military",
        translations: [
            "the city was being attacked by the enemy",
            "the city was being attacked by enemies",
            "the city was being besieged by the enemy"
        ],
        keyPhrases: ["city", "attack", "besieg", "by", "enemy"],
        hints: {
            oppugnabatur: "oppugnare - imperfect passive 3rd sing"
        }
    },
    {
        id: "ch7_003",
        latin: "puer currens in viam cecidit.",
        maxChapter: 7,
        grammar: ["present_participle", "perfect"],
        theme: "daily_life",
        translations: [
            "the boy running fell into the road",
            "the running boy fell into the road",
            "a boy while running fell onto the street"
        ],
        keyPhrases: ["boy", "running", "fell", "road", "street"],
        hints: {
            currens: "currere - present participle (running)",
            cecidit: "cadere - perfect 3rd sing"
        }
    },
    {
        id: "ch7_004",
        latin: "miles vulneratus a comitibus portabatur.",
        maxChapter: 7,
        grammar: ["ppp", "imperfect_passive", "agent_instrument"],
        theme: "military",
        translations: [
            "the wounded soldier was being carried by his companions",
            "the injured soldier was being carried by companions",
            "the wounded soldier was being carried by his comrades"
        ],
        keyPhrases: ["wounded", "injured", "soldier", "carried", "companion", "comrade"],
        hints: {
            vulneratus: "vulnerare - PPP (having been wounded)",
            comitibus: "comes, comitis - ablative plural (agent)"
        }
    },
    {
        id: "ch7_005",
        latin: "hic liber melior est quam ille.",
        maxChapter: 7,
        grammar: ["comparatives", "hic_ille"],
        theme: "daily_life",
        translations: [
            "this book is better than that one",
            "this book is better than that book",
            "this book is better than that"
        ],
        keyPhrases: ["this", "book", "better", "than", "that"],
        hints: {
            hic: "hic, haec, hoc - this",
            melior: "bonus - comparative (better)",
            ille: "ille, illa, illud - that"
        }
    },
    {
        id: "ch7_006",
        latin: "haec puella pulcherrima omnium est.",
        maxChapter: 7,
        grammar: ["superlatives", "hic_ille"],
        theme: "daily_life",
        translations: [
            "this girl is the most beautiful of all",
            "this girl is the prettiest of all",
            "this girl is most beautiful of all"
        ],
        keyPhrases: ["this", "girl", "most beautiful", "prettiest", "all"],
        hints: {
            haec: "hic, haec, hoc - this (feminine)",
            pulcherrima: "pulcher - superlative (most beautiful)"
        }
    },

    // ========== CHAPTER 8 (Perfect passive, ablative absolute, conditionals) ==========
    {
        id: "ch8_001",
        latin: "urbs a militibus capta est.",
        maxChapter: 8,
        grammar: ["perfect_passive"],
        theme: "military",
        translations: [
            "the city was captured by the soldiers",
            "the city has been captured by soldiers",
            "the city was taken by the soldiers"
        ],
        keyPhrases: ["city", "capture", "taken", "by", "soldier"],
        hints: {
            capta: "capere - PPP (feminine)",
            est: "esse - perfect passive = PPP + sum"
        }
    },
    {
        id: "ch8_002",
        latin: "his verbis dictis, rex discessit.",
        maxChapter: 8,
        grammar: ["ablative_absolute", "perfect"],
        theme: "mythology",
        translations: [
            "with these words having been said, the king departed",
            "when these words had been said, the king left",
            "after these words were spoken, the king departed"
        ],
        keyPhrases: ["word", "said", "spoken", "king", "departed", "left"],
        hints: {
            "his verbis dictis": "ablative absolute (noun + PPP in ablative)",
            discessit: "discedere - perfect 3rd sing"
        }
    },
    {
        id: "ch8_003",
        latin: "hostibus victis, milites domum redierunt.",
        maxChapter: 8,
        grammar: ["ablative_absolute", "perfect"],
        theme: "military",
        translations: [
            "with the enemy having been conquered, the soldiers returned home",
            "when the enemy had been defeated, the soldiers went home",
            "after the enemy was conquered, the soldiers returned home"
        ],
        keyPhrases: ["enemy", "conquer", "defeat", "soldier", "return", "home"],
        hints: {
            "hostibus victis": "ablative absolute",
            domum: "domus - accusative (homeward)"
        }
    },
    {
        id: "ch8_004",
        latin: "si hoc facies, pater iratus erit.",
        maxChapter: 8,
        grammar: ["conditionals", "future"],
        theme: "daily_life",
        translations: [
            "if you do this, your father will be angry",
            "if you do this, father will be angry",
            "if you will do this, your father will be angry"
        ],
        keyPhrases: ["if", "you", "do", "this", "father", "angry"],
        hints: {
            si: "si - if (conditional)",
            facies: "facere - future 2nd sing"
        }
    },
    {
        id: "ch8_005",
        latin: "nisi celeriter fugies, ab hostibus capieris.",
        maxChapter: 8,
        grammar: ["conditionals", "future_passive"],
        theme: "military",
        translations: [
            "unless you flee quickly, you will be captured by the enemy",
            "if you don't escape quickly, you will be captured by the enemies",
            "unless you run away quickly, you will be captured by the enemy"
        ],
        keyPhrases: ["unless", "if", "not", "flee", "escape", "quickly", "captured", "enemy"],
        hints: {
            nisi: "nisi - unless, if not",
            capieris: "capere - future passive 2nd sing"
        }
    },

    // ========== CHAPTER 9 (Deponent verbs, indirect statement) ==========
    {
        id: "ch9_001",
        latin: "milites hostes secuti sunt.",
        maxChapter: 9,
        grammar: ["deponent_verbs", "perfect"],
        theme: "military",
        translations: [
            "the soldiers followed the enemy",
            "soldiers followed the enemies",
            "the soldiers have followed the enemy"
        ],
        keyPhrases: ["soldier", "follow", "enemy"],
        hints: {
            secuti sunt: "sequi - deponent verb, perfect (passive form, active meaning)"
        }
    },
    {
        id: "ch9_002",
        latin: "rex putabat hostes fugisse.",
        maxChapter: 9,
        grammar: ["indirect_statement", "perfect_infinitive"],
        theme: "military",
        translations: [
            "the king thought that the enemy had fled",
            "the king believed that the enemies had fled",
            "the king thought the enemy had run away"
        ],
        keyPhrases: ["king", "thought", "believed", "enemy", "fled", "run away"],
        hints: {
            putabat: "putare - imperfect (introduces indirect statement)",
            fugisse: "fugere - perfect active infinitive"
        }
    },
    {
        id: "ch9_003",
        latin: "nuntiavit urbem captam esse.",
        maxChapter: 9,
        grammar: ["indirect_statement", "perfect_passive_infinitive"],
        theme: "military",
        translations: [
            "he announced that the city had been captured",
            "he reported that the city had been taken",
            "he declared that the city was captured"
        ],
        keyPhrases: ["announce", "report", "city", "capture", "taken"],
        hints: {
            nuntiavit: "nuntiare - perfect (introduces indirect statement)",
            "captam esse": "perfect passive infinitive (to have been captured)"
        }
    },
    {
        id: "ch9_004",
        latin: "puella locuta dixit se laetam esse.",
        maxChapter: 9,
        grammar: ["deponent_verbs", "indirect_statement"],
        theme: "daily_life",
        translations: [
            "the girl having spoken said that she was happy",
            "the girl spoke and said she was happy",
            "having spoken, the girl said that she was happy"
        ],
        keyPhrases: ["girl", "spoke", "speaking", "said", "she", "happy"],
        hints: {
            locuta: "loqui - deponent verb, perfect participle",
            "se laetam esse": "indirect statement (herself to be happy)"
        }
    },
    {
        id: "ch9_005",
        latin: "scio te bonum discipulum esse.",
        maxChapter: 9,
        grammar: ["indirect_statement"],
        theme: "daily_life",
        translations: [
            "I know that you are a good student",
            "I know you are a good student",
            "I know that you are a good pupil"
        ],
        keyPhrases: ["I", "know", "you", "good", "student", "pupil"],
        hints: {
            scio: "scire - present (introduces indirect statement)",
            "te ... esse": "accusative + infinitive (indirect statement)"
        }
    },

    // ========== CHAPTER 10 (Purpose, result, indirect commands/questions, cum clauses) ==========
    {
        id: "ch10_001",
        latin: "milites festinaverunt ut urbem caperent.",
        maxChapter: 10,
        grammar: ["purpose_clauses", "imperfect_subjunctive"],
        theme: "military",
        translations: [
            "the soldiers hurried in order to capture the city",
            "the soldiers hurried to capture the city",
            "soldiers hurried so that they might capture the city"
        ],
        keyPhrases: ["soldier", "hurried", "in order to", "capture", "city"],
        hints: {
            ut: "ut + subjunctive = purpose clause",
            caperent: "capere - imperfect subjunctive 3rd plural"
        }
    },
    {
        id: "ch10_002",
        latin: "pater filium misit ut cibum emeret.",
        maxChapter: 10,
        grammar: ["purpose_clauses", "imperfect_subjunctive"],
        theme: "daily_life",
        translations: [
            "the father sent his son to buy food",
            "the father sent the son in order to buy food",
            "father sent his son so that he might buy food"
        ],
        keyPhrases: ["father", "sent", "son", "to buy", "in order to", "food"],
        hints: {
            emeret: "emere - imperfect subjunctive 3rd sing"
        }
    },
    {
        id: "ch10_003",
        latin: "tam fortiter pugnavit ut omnes eum laudarent.",
        maxChapter: 10,
        grammar: ["result_clauses", "imperfect_subjunctive"],
        theme: "military",
        translations: [
            "he fought so bravely that everyone praised him",
            "he fought so bravely that all praised him",
            "he fought so fiercely that everyone praised him"
        ],
        keyPhrases: ["fought", "so", "bravely", "that", "everyone", "all", "praised"],
        hints: {
            "tam ... ut": "result clause (so ... that)",
            laudarent: "laudare - imperfect subjunctive 3rd plural"
        }
    },
    {
        id: "ch10_004",
        latin: "imperator militibus imperavit ut castra ponerent.",
        maxChapter: 10,
        grammar: ["indirect_commands", "imperfect_subjunctive"],
        theme: "military",
        translations: [
            "the general ordered the soldiers to set up camp",
            "the emperor ordered the soldiers to pitch camp",
            "the commander ordered soldiers to make camp"
        ],
        keyPhrases: ["general", "emperor", "commander", "ordered", "soldier", "camp"],
        hints: {
            imperavit: "imperare + dative + ut/ne = indirect command",
            ponerent: "ponere - imperfect subjunctive 3rd plural"
        }
    },
    {
        id: "ch10_005",
        latin: "rogavit cur servi non laborarent.",
        maxChapter: 10,
        grammar: ["indirect_questions", "imperfect_subjunctive"],
        theme: "daily_life",
        translations: [
            "he asked why the slaves were not working",
            "he asked why slaves were not working",
            "she asked why the slaves weren't working"
        ],
        keyPhrases: ["asked", "why", "slave", "not", "working"],
        hints: {
            rogavit: "rogare - perfect (introduces indirect question)",
            cur: "cur - why (introduces indirect question)",
            laborarent: "laborare - imperfect subjunctive 3rd plural"
        }
    },
    {
        id: "ch10_006",
        latin: "cum hostes appropinquarent, cives fugerunt.",
        maxChapter: 10,
        grammar: ["cum_clauses", "imperfect_subjunctive"],
        theme: "military",
        translations: [
            "when the enemy was approaching, the citizens fled",
            "since the enemies were approaching, the citizens fled",
            "as the enemy approached, citizens fled"
        ],
        keyPhrases: ["when", "since", "as", "enemy", "approach", "citizen", "fled"],
        hints: {
            "cum + subjunctive": "cum clause (when/since/although)",
            appropinquarent: "appropinquare - imperfect subjunctive 3rd plural"
        }
    },
    {
        id: "ch10_007",
        latin: "timebat ne hostes urbem caperent.",
        maxChapter: 10,
        grammar: ["verbs_of_fearing", "imperfect_subjunctive"],
        theme: "military",
        translations: [
            "he was afraid that the enemy would capture the city",
            "he feared that the enemies might capture the city",
            "she was afraid that the enemy would take the city"
        ],
        keyPhrases: ["afraid", "feared", "enemy", "capture", "take", "city"],
        hints: {
            timebat: "timere - imperfect (verb of fearing)",
            "ne + subjunctive": "after verbs of fearing = that/lest"
        }
    },
    {
        id: "ch10_008",
        latin: "dux nescivit quid milites facerent.",
        maxChapter: 10,
        grammar: ["indirect_questions", "imperfect_subjunctive"],
        theme: "military",
        translations: [
            "the leader did not know what the soldiers were doing",
            "the general didn't know what soldiers were doing",
            "the commander did not know what the soldiers were doing"
        ],
        keyPhrases: ["leader", "general", "not know", "what", "soldier", "doing"],
        hints: {
            nescivit: "nescire - perfect (introduces indirect question)",
            quid: "quid - what (introduces indirect question)"
        }
    },
    {
        id: "ch10_009",
        latin: "pueri cucurrerunt ne a magistro punirentur.",
        maxChapter: 10,
        grammar: ["purpose_clauses", "imperfect_subjunctive"],
        theme: "daily_life",
        translations: [
            "the boys ran so that they would not be punished by the teacher",
            "the boys ran in order not to be punished by the master",
            "boys ran lest they be punished by the teacher"
        ],
        keyPhrases: ["boy", "ran", "not", "punished", "teacher", "master"],
        hints: {
            ne: "ne + subjunctive = negative purpose (so that not)",
            punirentur: "punire - imperfect subjunctive passive 3rd plural"
        }
    },
    {
        id: "ch10_010",
        latin: "tanta erat tempestas ut nautae navigare non possent.",
        maxChapter: 10,
        grammar: ["result_clauses", "imperfect_subjunctive"],
        theme: "travel",
        translations: [
            "so great was the storm that the sailors could not sail",
            "the storm was so great that sailors could not sail",
            "the storm was so great that the sailors were unable to sail"
        ],
        keyPhrases: ["so great", "storm", "sailor", "could not", "unable", "sail"],
        hints: {
            "tanta ... ut": "result clause (so great ... that)",
            possent: "posse - imperfect subjunctive 3rd plural"
        }
    }
];

// Story templates for combining sentences into coherent passages
const storyTemplates = [
    {
        id: "journey",
        name: "A Journey",
        themes: ["travel", "daily_life"],
        structure: ["setting", "departure", "event", "arrival"]
    },
    {
        id: "battle",
        name: "A Battle",
        themes: ["military"],
        structure: ["preparation", "conflict", "outcome", "aftermath"]
    },
    {
        id: "daily_life",
        name: "Daily Life",
        themes: ["daily_life"],
        structure: ["morning", "activity", "complication", "resolution"]
    },
    {
        id: "myth",
        name: "Myth & Legend",
        themes: ["mythology"],
        structure: ["introduction", "challenge", "action", "consequence"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chapterGrammar, grammarSpotlights, sentenceBank, storyTemplates };
}
