// OCR GCSE Latin - Irregular Perfect Tense Forms
// Verbs where the perfect tense is not easily predictable from the present
const irregularPerfectData = [
    // === VERY IRREGULAR (suppletive / highly unpredictable) ===
    { present: "sum", perfect: "fui", english: "be", info: "verb irregular", chapter: 1 },
    { present: "possum", perfect: "potui", english: "can, be able", info: "verb irregular", chapter: 3 },
    { present: "fero", perfect: "tuli", english: "bring, carry, bear", info: "verb irregular", chapter: 8 },
    { present: "aufero", perfect: "abstuli", english: "take away, carry off, steal", info: "verb irregular", chapter: 8 },
    { present: "offero", perfect: "obtuli", english: "offer", info: "verb irregular", chapter: 8 },
    { present: "refero", perfect: "rettuli", english: "bring/carry back, report, tell", info: "verb irregular", chapter: 8 },
    { present: "tollo", perfect: "sustuli", english: "raise, lift up, hold up", info: "verb 3", chapter: 8 },
    { present: "eo", perfect: "ii", english: "go", info: "verb irregular", chapter: 6 },
    { present: "pereo", perfect: "perii", english: "die, perish", info: "verb irregular", chapter: 6 },
    { present: "redeo", perfect: "redii", english: "go back, come back, return", info: "verb irregular", chapter: 6 },
    { present: "absum", perfect: "afui", english: "be absent, be away, be distant from", info: "verb irregular", chapter: 6 },
    { present: "adsum", perfect: "adfui", english: "be here, be present", info: "verb irregular", chapter: 6 },
    { present: "malo", perfect: "malui", english: "prefer", info: "verb irregular", chapter: 8 },
    { present: "nolo", perfect: "nolui", english: "not want, refuse", info: "verb irregular", chapter: 8 },
    { present: "volo", perfect: "volui", english: "want, wish, be willing", info: "verb irregular", chapter: 8 },
    { present: "do", perfect: "dedi", english: "give", info: "verb 1", chapter: 2 },

    // === 3rd CONJUGATION - stem changes ===
    { present: "ago", perfect: "egi", english: "do, act, drive", info: "verb 3", chapter: 9 },
    { present: "cogo", perfect: "coegi", english: "force, compel", info: "verb 3", chapter: 8 },
    { present: "capio", perfect: "cepi", english: "take, catch, capture", info: "verb 3", chapter: 4 },
    { present: "accipio", perfect: "accepi", english: "accept, take in, receive", info: "verb 3", chapter: 6 },
    { present: "facio", perfect: "feci", english: "make, do", info: "verb 3", chapter: 4 },
    { present: "conficio", perfect: "confeci", english: "finish, wear out", info: "verb 3", chapter: 8 },
    { present: "interficio", perfect: "interfeci", english: "kill", info: "verb 3", chapter: 6 },
    { present: "emo", perfect: "emi", english: "buy", info: "verb 3", chapter: 6 },
    { present: "lego", perfect: "legi", english: "read, choose", info: "verb 3", chapter: 2 },
    { present: "vinco", perfect: "vici", english: "conquer, win, be victorious", info: "verb 3", chapter: 5 },
    { present: "relinquo", perfect: "reliqui", english: "leave, leave behind", info: "verb 3", chapter: 4 },
    { present: "fugio", perfect: "fugi", english: "run away, flee", info: "verb 3", chapter: 4 },
    { present: "effugio", perfect: "effugi", english: "escape", info: "verb 3", chapter: 6 },
    { present: "iacio", perfect: "ieci", english: "throw", info: "verb 3", chapter: 6 },

    // === 3rd CONJUGATION - -xi perfects ===
    { present: "dico", perfect: "dixi", english: "say, speak, tell", info: "verb 3", chapter: 6 },
    { present: "duco", perfect: "duxi", english: "lead, take", info: "verb 3", chapter: 2 },
    { present: "rego", perfect: "rexi", english: "rule", info: "verb 3", chapter: 5 },
    { present: "surgo", perfect: "surrexi", english: "get up, stand up, rise", info: "verb 3", chapter: 8 },
    { present: "traho", perfect: "traxi", english: "drag", info: "verb 3", chapter: 2 },
    { present: "scribo", perfect: "scripsi", english: "write", info: "verb 3", chapter: 2 },
    { present: "intellego", perfect: "intellexi", english: "understand, realise", info: "verb 3", chapter: 6 },
    { present: "conspicio", perfect: "conspexi", english: "catch sight of, notice", info: "verb 3", chapter: 6 },
    { present: "vivo", perfect: "vixi", english: "live, be alive", info: "verb 3", chapter: 9 },

    // === 3rd CONJUGATION - -si perfects ===
    { present: "mitto", perfect: "misi", english: "send", info: "verb 3", chapter: 2 },
    { present: "promitto", perfect: "promisi", english: "promise", info: "verb 3", chapter: 8 },
    { present: "gero", perfect: "gessi", english: "wear (clothes), wage (war)", info: "verb 3", chapter: 7 },
    { present: "consumo", perfect: "consumpsi", english: "eat", info: "verb 3", chapter: 3 },
    { present: "discedo", perfect: "discessi", english: "depart, leave", info: "verb 3", chapter: 3 },
    { present: "opprimo", perfect: "oppressi", english: "crush, overwhelm", info: "verb 3", chapter: 9 },
    { present: "procedo", perfect: "processi", english: "advance, proceed", info: "verb 3", chapter: 10 },

    // === 3rd CONJUGATION - reduplication perfects ===
    { present: "cado", perfect: "cecidi", english: "fall", info: "verb 3", chapter: 3 },
    { present: "curro", perfect: "cucurri", english: "run", info: "verb 3", chapter: 3 },
    { present: "pello", perfect: "pepuli", english: "drive", info: "verb 3", chapter: 10 },
    { present: "trado", perfect: "tradidi", english: "hand over, hand down", info: "verb 3", chapter: 5 },
    { present: "reddo", perfect: "reddidi", english: "give back, restore", info: "verb 3", chapter: 9 },
    { present: "credo", perfect: "credidi", english: "believe, trust", info: "verb 3", chapter: 5 },
    { present: "vendo", perfect: "vendidi", english: "sell", info: "verb 3", chapter: 6 },

    // === 3rd CONJUGATION - other patterns ===
    { present: "pono", perfect: "posui", english: "put, place, set up", info: "verb 3", chapter: 5 },
    { present: "rapio", perfect: "rapui", english: "seize, grab", info: "verb 3", chapter: 8 },
    { present: "cognosco", perfect: "cognovi", english: "get to know, find out", info: "verb 3", chapter: 9 },
    { present: "constituo", perfect: "constitui", english: "decide", info: "verb 3", chapter: 6 },
    { present: "resisto", perfect: "restiti", english: "resist", info: "verb 3", chapter: 7 },
    { present: "accido", perfect: "accidi", english: "happen", info: "verb 3", chapter: 9 },
    { present: "occido", perfect: "occidi", english: "kill", info: "verb 3", chapter: 10 },
    { present: "ascendo", perfect: "ascendi", english: "climb", info: "verb 3", chapter: 5 },
    { present: "defendo", perfect: "defendi", english: "defend", info: "verb 3", chapter: 5 },
    { present: "descendo", perfect: "descendi", english: "go down, come down", info: "verb 3", chapter: 6 },
    { present: "incendo", perfect: "incendi", english: "burn, set on fire", info: "verb 3", chapter: 7 },
    { present: "ostendo", perfect: "ostendi", english: "show", info: "verb 3", chapter: 8 },
    { present: "bibo", perfect: "bibi", english: "drink", info: "verb 3", chapter: 2 },

    // === 2nd CONJUGATION - irregular perfects ===
    { present: "iubeo", perfect: "iussi", english: "order", info: "verb 2", chapter: 2 },
    { present: "maneo", perfect: "mansi", english: "remain, stay", info: "verb 2", chapter: 3 },
    { present: "moveo", perfect: "movi", english: "move", info: "verb 2", chapter: 7 },
    { present: "respondeo", perfect: "respondi", english: "reply", info: "verb 2", chapter: 6 },
    { present: "rideo", perfect: "risi", english: "laugh, smile", info: "verb 2", chapter: 4 },
    { present: "sedeo", perfect: "sedi", english: "sit", info: "verb 2", chapter: 2 },
    { present: "video", perfect: "vidi", english: "see", info: "verb 2", chapter: 2 },
    { present: "persuadeo", perfect: "persuasi", english: "persuade", info: "verb 2", chapter: 6 },
    { present: "deleo", perfect: "delevi", english: "destroy", info: "verb 2", chapter: 3 },

    // === 4th CONJUGATION - irregular perfects ===
    { present: "venio", perfect: "veni", english: "come", info: "verb 4", chapter: 2 },
    { present: "advenio", perfect: "adveni", english: "arrive", info: "verb 4", chapter: 3 },
    { present: "invenio", perfect: "inveni", english: "find", info: "verb 4", chapter: 2 },
    { present: "convenio", perfect: "conveni", english: "come together, gather, meet", info: "verb 4", chapter: 6 },
    { present: "sentio", perfect: "sensi", english: "feel, notice", info: "verb 4", chapter: 9 },

    // === DEPONENT VERBS ===
    { present: "conor", perfect: "conatus sum", english: "try", info: "verb 1 deponent", chapter: 9 },
    { present: "hortor", perfect: "hortatus sum", english: "encourage, urge", info: "verb 1 deponent", chapter: 9 },
    { present: "miror", perfect: "miratus sum", english: "wonder at, admire", info: "verb 1 deponent", chapter: 9 },
    { present: "egredior", perfect: "egressus sum", english: "go out", info: "verb 3 deponent", chapter: 9 },
    { present: "ingredior", perfect: "ingressus sum", english: "enter", info: "verb 3 deponent", chapter: 9 },
    { present: "loquor", perfect: "locutus sum", english: "speak, talk", info: "verb 3 deponent", chapter: 9 },
    { present: "morior", perfect: "mortuus sum", english: "die", info: "verb 3 deponent", chapter: 9 },
    { present: "patior", perfect: "passus sum", english: "suffer, endure", info: "verb 3 deponent", chapter: 9 },
    { present: "proficiscor", perfect: "profectus sum", english: "set out", info: "verb 3 deponent", chapter: 9 },
    { present: "progredior", perfect: "progressus sum", english: "advance", info: "verb 3 deponent", chapter: 9 },
    { present: "regredior", perfect: "regressus sum", english: "go back, return", info: "verb 3 deponent", chapter: 9 },
    { present: "sequor", perfect: "secutus sum", english: "follow", info: "verb 3 deponent", chapter: 9 },

    // === SEMI-DEPONENT VERBS ===
    { present: "audeo", perfect: "ausus sum", english: "dare", info: "verb 2 semi-deponent", chapter: 9 },
    { present: "gaudeo", perfect: "gavisus sum", english: "be pleased, rejoice", info: "verb 2 semi-deponent", chapter: 9 },
    { present: "soleo", perfect: "solitus sum", english: "be accustomed", info: "verb 2 semi-deponent", chapter: 9 }
];
