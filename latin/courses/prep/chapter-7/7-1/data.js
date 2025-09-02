// Lesson 7.1 amici - Vocabulary and Data

const vocabularyData = {
    "Faustus": {
        latin: "Faustus",
        english: "Faustus (Roman name)",
        grammar: "masculine proper noun, 2nd declension"
    },
    "Gisco": {
        latin: "Giscō", 
        english: "Gisco (Roman name)",
        grammar: "masculine proper noun, 3rd declension"
    },
    "Celer": {
        latin: "Celer",
        english: "Swift/Fast (name of a dog)",
        grammar: "masculine proper noun/adjective"
    },
    "sunt": {
        latin: "sunt",
        english: "they are",
        grammar: "3rd person plural present of 'sum' (to be)"
    },
    "Foro": {
        latin: "Forō",
        english: "forum, market-place", 
        grammar: "neuter noun, 2nd declension, ablative singular"
    },
    "Boario": {
        latin: "Boāriō",
        english: "cattle (market)",
        grammar: "adjective agreeing with 'Forō', ablative singular"
    },
    "subito": {
        latin: "subitō",
        english: "suddenly",
        grammar: "adverb"
    },
    "latrat": {
        latin: "lātrat",
        english: "he/it barks",
        grammar: "3rd person singular present of 'latrō'"
    },
    "circumspectat": {
        latin: "circumspectat",
        english: "he looks around",
        grammar: "3rd person singular present of 'circumspectō'"
    },
    "amicum": {
        latin: "amīcum",
        english: "friend",
        grammar: "masculine noun, 2nd declension, accusative singular"
    },
    "conspicit": {
        latin: "cōnspicit",
        english: "he catches sight of, spots",
        grammar: "3rd person singular present of 'cōnspiciō'"
    },
    "di": {
        latin: "dī",
        english: "gods",
        grammar: "masculine noun, 2nd declension, nominative plural"
    },
    "immortales": {
        latin: "immortālēs",
        english: "immortal",
        grammar: "adjective, 3rd declension, nominative plural"
    },
    "est": {
        latin: "est",
        english: "he/she/it is",
        grammar: "3rd person singular present of 'sum' (to be)"
    },
    "Indus": {
        latin: "Indus",
        english: "Indus (Roman name)",
        grammar: "masculine proper noun, 2nd declension"
    },
    "clamat": {
        latin: "clāmat",
        english: "he shouts, exclaims",
        grammar: "3rd person singular present of 'clāmō'"
    },
    "olim": {
        latin: "ōlim",
        english: "once, formerly, in the past",
        grammar: "adverb"
    },
    "Britannia": {
        latin: "Britanniā",
        english: "Britain",
        grammar: "feminine proper noun, 1st declension, ablative singular"
    },
    "nos": {
        latin: "nōs",
        english: "we, us",
        grammar: "1st person plural pronoun"
    },
    "eramus": {
        latin: "erāmus",
        english: "we were",
        grammar: "1st person plural imperfect of 'sum' (to be)"
    },
    "milites": {
        latin: "mīlitēs",
        english: "soldiers",
        grammar: "masculine noun, 3rd declension, nominative plural"
    },
    "salve": {
        latin: "salvē",
        english: "hello, greetings",
        grammar: "imperative of 'salveō' - greeting"
    },
    "quid": {
        latin: "quid",
        english: "what",
        grammar: "interrogative pronoun, neuter"
    },
    "tu": {
        latin: "tū",
        english: "you (singular)",
        grammar: "2nd person singular pronoun, nominative"
    },
    "urbe": {
        latin: "urbe",
        english: "city",
        grammar: "feminine noun, 3rd declension, ablative singular"
    },
    "agis": {
        latin: "agis",
        english: "you do, you are doing",
        grammar: "2nd person singular present of 'agō'"
    },
    "cum": {
        latin: "cum",
        english: "with",
        grammar: "preposition + ablative"
    },
    "Catia": {
        latin: "Catiā",
        english: "Catia (Roman name)",
        grammar: "feminine proper noun, 1st declension, ablative"
    },
    "Celere": {
        latin: "Celere",
        english: "Celer (the dog)",
        grammar: "masculine proper noun, ablative"
    },
    "Subura": {
        latin: "Subūrā",
        english: "Subura (district of Rome)",
        grammar: "feminine proper noun, 1st declension, ablative"
    },
    "habito": {
        latin: "habitō",
        english: "I live, I dwell",
        grammar: "1st person singular present of 'habitō'"
    },
    "hic": {
        latin: "hic",
        english: "this (person), this man",
        grammar: "demonstrative pronoun, masculine nominative singular"
    },
    "insulam": {
        latin: "īnsulam",
        english: "apartment building, island",
        grammar: "feminine noun, 1st declension, accusative singular"
    },
    "curat": {
        latin: "cūrat",
        english: "he manages, he takes care of",
        grammar: "3rd person singular present of 'cūrō'"
    },
    "agebas": {
        latin: "agēbās",
        english: "you were doing",
        grammar: "2nd person singular imperfect of 'agō'"
    },
    "saepe": {
        latin: "saepe",
        english: "often",
        grammar: "adverb"
    },
    "contra": {
        latin: "contrā",
        english: "against",
        grammar: "preposition + accusative"
    },
    "Britannos": {
        latin: "Britannōs",
        english: "Britons, British people",
        grammar: "masculine noun, 2nd declension, accusative plural"
    },
    "pugnabas": {
        latin: "pugnābās",
        english: "you were fighting",
        grammar: "2nd person singular imperfect of 'pugnō'"
    },
    "ego": {
        latin: "ego",
        english: "I",
        grammar: "1st person singular pronoun, nominative"
    },
    "non": {
        latin: "nōn",
        english: "not, no",
        grammar: "negative adverb"
    },
    "pugnabam": {
        latin: "pugnābam",
        english: "I was fighting",
        grammar: "1st person singular imperfect of 'pugnō'"
    },
    "sed": {
        latin: "sed",
        english: "but",
        grammar: "conjunction"
    },
    "adiuvabam": {
        latin: "adiuvābam",
        english: "I was helping",
        grammar: "1st person singular imperfect of 'adiuvō'"
    },
    "vias": {
        latin: "viās",
        english: "roads",
        grammar: "feminine noun, 1st declension, accusative plural"
    },
    "pontes": {
        latin: "pontēs",
        english: "bridges",
        grammar: "masculine noun, 3rd declension, accusative plural"
    },
    "thermas": {
        latin: "thermās",
        english: "baths",
        grammar: "feminine noun, 1st declension, accusative plural"
    },
    "aedificabamus": {
        latin: "aedificābāmus",
        english: "we were building",
        grammar: "1st person plural imperfect of 'aedificō'"
    },
    "animalia": {
        latin: "animalia",
        english: "animals",
        grammar: "neuter noun, 3rd declension, accusative plural"
    },
    "agitabamus": {
        latin: "agitābāmus",
        english: "we were driving, herding",
        grammar: "1st person plural imperfect of 'agitō'"
    },
    "insula": {
        latin: "insula",
        english: "island",
        grammar: "feminine noun, 1st declension, nominative singular"
    },
    "fluitans": {
        latin: "fluitans",
        english: "floating",
        grammar: "present participle of 'fluitō'"
    },
    "minime": {
        latin: "minimē",
        english: "no, not at all",
        grammar: "negative adverb (emphatic)"
    },
    "multa": {
        latin: "multa",
        english: "many",
        grammar: "adjective, neuter nominative plural"
    },
    "monstra": {
        latin: "monstra",
        english: "monsters",
        grammar: "neuter noun, 2nd declension, nominative plural"
    },
    "mari": {
        latin: "marī",
        english: "sea",
        grammar: "neuter noun, 3rd declension, ablative singular"
    },
    "videbamus": {
        latin: "vidēbāmus",
        english: "we were seeing, we used to see",
        grammar: "1st person plural imperfect of 'videō'"
    },
    "silvis": {
        latin: "silvīs",
        english: "woods, forests",
        grammar: "feminine noun, 1st declension, ablative plural"
    },
    "habitabant": {
        latin: "habitābant",
        english: "they were living, they dwelt",
        grammar: "3rd person plural imperfect of 'habitō'"
    },
    "formae": {
        latin: "formae",
        english: "shapes, forms",
        grammar: "feminine noun, 1st declension, nominative plural"
    },
    "partes": {
        latin: "partēs",
        english: "parts",
        grammar: "feminine noun, 3rd declension, nominative plural"
    },
    "homines": {
        latin: "hominēs",
        english: "men, people, humans",
        grammar: "masculine noun, 3rd declension, nominative plural"
    },
    "aves": {
        latin: "avēs",
        english: "birds",
        grammar: "feminine noun, 3rd declension, nominative plural"
    },
    "mirabiles": {
        latin: "mīrābilēs",
        english: "wonderful, amazing",
        grammar: "adjective, 3rd declension, nominative plural"
    },
    "cantabant": {
        latin: "cantābant",
        english: "they were singing",
        grammar: "3rd person plural imperfect of 'cantō'"
    },
    "fabulae": {
        latin: "fābulae",
        english: "stories, tales (often implying 'tall tales')",
        grammar: "feminine noun, 1st declension, nominative plural"
    },
    "bibere": {
        latin: "bibere",
        english: "to drink",
        grammar: "infinitive of 'bibō'"
    },
    "volo": {
        latin: "volō",
        english: "I want, I wish",
        grammar: "1st person singular present of 'volō' (irregular)"
    },
    "ad": {
        latin: "ad",
        english: "to, towards",
        grammar: "preposition + accusative"
    },
    "popinam": {
        latin: "popīnam",
        english: "tavern, inn",
        grammar: "feminine noun, 1st declension, accusative singular"
    }
};

// Grammar patterns for highlighting
const grammarPatterns = {
    imperfect: [
        "erāmus", "agēbās", "pugnābās", "pugnābam", "adiuvābam", 
        "aedificābāmus", "agitābāmus", "vidēbāmus", "habitābant", "cantābant"
    ],
    present: [
        "sunt", "lātrat", "circumspectat", "cōnspicit", "est", "clāmat", 
        "agis", "habitō", "cūrat", "volō"
    ]
};

// Comprehension quiz answers
const quizAnswers = {
    q1: "b", // Faustus, Gisco, and Celer
    q2: "b", // Britain  
    q3: "a"  // Roads, bridges, and baths
};

// Fill-in-the-blank answers for Box 7
const fillAnswers = {
    "blank-1": "vias",
    "blank-2": "pontes", 
    "blank-3": "thermas"
};

// Cultural notes
const culturalNotes = {
    "Forum Boarium": "The Forum Boarium was Rome's cattle market, one of the oldest commercial areas of the city.",
    "Roman Engineering": "Roman soldiers often worked as engineers, building infrastructure throughout the empire including roads, bridges, and public baths.",
    "Subura": "The Subura was a crowded, lower-class district of ancient Rome where many apartment buildings (insulae) were located.",
    "Roman Britain": "Romans occupied Britain from 43-410 CE, building extensive infrastructure and establishing towns like Londinium (London)."
};
