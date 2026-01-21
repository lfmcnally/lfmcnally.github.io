// A-Level Latin Verse Vocabulary - 300 words for verse texts
// Based on the OCR A-Level Latin verse vocabulary list
const verseVocabularyData = [
    {
        latin: "acerbus, acerba, acerbum",
        english: "bitter",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "aedes, aedis",
        english: "temple; house",
        info: "f - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "aeneus, aenea, aeneum",
        english: "made of bronze",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "aequor, aequoris",
        english: "level surface, plain; sea",
        info: "n - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "aer, aeris",
        english: "air",
        info: "m - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "aes, aeris",
        english: "bronze; money",
        info: "n - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "aestus, aestus",
        english: "boiling, heat; surging sea; passion",
        info: "m - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "aether, aetheris",
        english: "air, sky",
        info: "m - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "aevum, aevi",
        english: "age, period of time; life",
        info: "n - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "agnus, agni",
        english: "lamb",
        info: "m - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "agrestis, agreste",
        english: "rustic, of the countryside",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "ait, pl-aiunt",
        english: "he/she says",
        info: "- verb (defective)",
        letter: "A",
        set: 1
    },
    {
        latin: "albus, alba, album",
        english: "white",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "ales, alitis",
        english: "bird",
        info: "m/f - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "ambo, ambae, ambo",
        english: "both",
        info: "- adjective/pronoun",
        letter: "A",
        set: 1
    },
    {
        latin: "amens, amentis",
        english: "out of one's mind, mad, frantic",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "amnis, amnis",
        english: "stream, river",
        info: "m - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "amoenus, amoena, amoeunum",
        english: "pleasant, charming",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "amplexus, amplexus",
        english: "embrace",
        info: "m - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "anguis, anguis",
        english: "snake",
        info: "m/f - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "anima, anima",
        english: "soul, spirit, breath, life",
        info: "f - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "antiquus, antiqua, antiqum",
        english: "ancient, previous",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "antrum, antri",
        english: "cave",
        info: "n - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "apricus, aprica, apricum",
        english: "sunny, warm",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "apto, aptare, aptavi, aptatum",
        english: "fit, adjust",
        info: "- verb",
        letter: "A",
        set: 1
    },
    {
        latin: "aquilo, aquilonis",
        english: "the north wind",
        info: "m - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "arduus, ardua, arduum",
        english: "high, steep; difficult",
        info: "- adjective",
        letter: "A",
        set: 1
    },
    {
        latin: "armentum, armenti",
        english: "herd of cattle",
        info: "n - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "artus, artus",
        english: "limb",
        info: "m - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "arvum, arvi",
        english: "field, land",
        info: "n - noun",
        letter: "A",
        set: 1
    },
    {
        latin: "astrum, astri",
        english: "star, constellation",
        info: "n - noun",
        letter: "A",
        set: 2
    },
    {
        latin: "alter, altra, altrum",
        english: "black, dark",
        info: "- adjective",
        letter: "A",
        set: 2
    },
    {
        latin: "auctor, auctoris",
        english: "originator, giver; author",
        info: "m - noun",
        letter: "A",
        set: 2
    },
    {
        latin: "aura, aurae",
        english: "breeze, air",
        info: "f - noun",
        letter: "A",
        set: 2
    },
    {
        latin: "aureus, aurea, aureum",
        english: "golden, of gold",
        info: "- adjective",
        letter: "A",
        set: 2
    },
    {
        latin: "auris, auris",
        english: "ear",
        info: "f - noun",
        letter: "A",
        set: 2
    },
    {
        latin: "aurora, aurorae",
        english: "dawn",
        info: "f - noun",
        letter: "A",
        set: 2
    },
    {
        latin: "auster, austri",
        english: "the south wind",
        info: "m - noun",
        letter: "A",
        set: 2
    },
    {
        latin: "axis, axis",
        english: "axis, axle, chariot; sky, heaven",
        info: "m - noun",
        letter: "A",
        set: 2
    },
    {
        latin: "bellus, bella, bellum",
        english: "beautiful, handsome, pretty",
        info: "- adjective",
        letter: "B",
        set: 2
    },
    {
        latin: "blandus, blanda, blandum",
        english: "coaxing, flattering, charming",
        info: "- adjective",
        letter: "B",
        set: 2
    },
    {
        latin: "boreas, boreae",
        english: "the north wind (B...=god of)",
        info: "m - noun",
        letter: "B",
        set: 2
    },
    {
        latin: "bos, bovis",
        english: "ox, bull; cow; pl cattle arm",
        info: "m/f - noun",
        letter: "B",
        set: 2
    },
    {
        latin: "bracchium, braccchii",
        english: "arm",
        info: "n - noun",
        letter: "B",
        set: 2
    },
    {
        latin: "caelestis, caeleste",
        english: "heavenly, divine",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "caeruleus, caerulea, caeruleum",
        english: "dark blue, dark coloured",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "calidus, calida, calidum",
        english: "hot; eager, fierce",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "callidus, callida, callidum",
        english: "skilful, crafty, careful",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "candens gen candentis",
        english: "white, shinning",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "candidus, candida, candidum",
        english: "white",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "canus, cana, canum",
        english: "grey haired; white",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "capillus, capilli",
        english: "hair (usu pl)",
        info: "m - noun",
        letter: "C",
        set: 2
    },
    {
        latin: "careo, carere, carui, caritum",
        english: "lack (+abl)",
        info: "- verb",
        letter: "C",
        set: 2
    },
    {
        latin: "carina, carinae",
        english: "keel; boat, ship",
        info: "f - noun",
        letter: "C",
        set: 2
    },
    {
        latin: "carpo, carpere, carpsi, carptum",
        english: "pluck, seize",
        info: "- verb",
        letter: "C",
        set: 2
    },
    {
        latin: "casa, casae",
        english: "cottage, hut",
        info: "f - noun",
        letter: "C",
        set: 2
    },
    {
        latin: "castus, casta, castum",
        english: "pure, chaste, virtuous",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "celsus, celsa, celsum",
        english: "high, lofty",
        info: "- adjective",
        letter: "C",
        set: 2
    },
    {
        latin: "cervix, cervicis",
        english: "neck",
        info: "f - noun",
        letter: "C",
        set: 2
    },
    {
        latin: "cervus, cervi",
        english: "stag, deer",
        info: "m - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "cesso, cessare, cessavi, cessatum",
        english: "delay, waste (time); cease",
        info: "- verb",
        letter: "C",
        set: 3
    },
    {
        latin: "cieo, ciere, civi, citum",
        english: "stir up, excite",
        info: "- verb",
        letter: "C",
        set: 3
    },
    {
        latin: "cithara, citharae",
        english: "lyre",
        info: "f - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "cito",
        english: "quickly",
        info: "- adverb",
        letter: "C",
        set: 3
    },
    {
        latin: "citus, cita, citum",
        english: "quick, swift, rapid",
        info: "- adjective",
        letter: "C",
        set: 3
    },
    {
        latin: "clivus, clivi",
        english: "slope, hill",
        info: "m - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "color, coloris",
        english: "colour, complexion",
        info: "m - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "coma, comae",
        english: "hair",
        info: "f - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "complector, complecti, complexus sum",
        english: "embrace",
        info: "- verb (deponent)",
        letter: "C",
        set: 3
    },
    {
        latin: "consuetus, consueta, consuetum",
        english: "usual, accustomed",
        info: "- adjective",
        letter: "C",
        set: 3
    },
    {
        latin: "cor, cordis",
        english: "heart",
        info: "n - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "corona, coronae",
        english: "wreath, garland, crown",
        info: "f - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "creo, creare, creavi, creatum",
        english: "create, make, give birth to",
        info: "- verb",
        letter: "C",
        set: 3
    },
    {
        latin: "cresco, crescere, crevi, cretum",
        english: "increase, grow, arise",
        info: "- verb",
        letter: "C",
        set: 3
    },
    {
        latin: "crinis, crinis",
        english: "hair",
        info: "m - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "cruentus, cruenta, cruentum",
        english: "bloody, blood-stained; cruel",
        info: "- adjective",
        letter: "C",
        set: 3
    },
    {
        latin: "cruor, cruoris",
        english: "blood, gore",
        info: "m - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "cubile, cubilis",
        english: "bed",
        info: "n - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "Cupido, Cupidinis",
        english: "Cupid; desire, passion",
        info: "m - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "cuspis, cuspidis",
        english: "spear, javelin",
        info: "f - noun",
        letter: "C",
        set: 3
    },
    {
        latin: "decerpo, decerpere, decerpsi, decerpsum",
        english: "pluck",
        info: "- verb",
        letter: "D",
        set: 3
    },
    {
        latin: "decus, decoris",
        english: "honour, glory; beauty",
        info: "n - noun",
        letter: "D",
        set: 3
    },
    {
        latin: "desilio, desilire, desilui, desultum",
        english: "leap down",
        info: "- verb",
        letter: "D",
        set: 3
    },
    {
        latin: "dictum, dicti",
        english: "saying, speech; pl words",
        info: "n - noun",
        letter: "D",
        set: 3
    },
    {
        latin: "diligo, diligere, dilexi, dilectum",
        english: "love",
        info: "- verb",
        letter: "D",
        set: 3
    },
    {
        latin: "dono, donare, donavi, donatum",
        english: "present, give",
        info: "- verb",
        letter: "D",
        set: 3
    },
    {
        latin: "ensis, ensis",
        english: "sword",
        info: "m - noun",
        letter: "E",
        set: 3
    },
    {
        latin: "erus, eri",
        english: "master, lord",
        info: "m - noun",
        letter: "E",
        set: 3
    },
    {
        latin: "eurus, euri",
        english: "the east (or south east) wind",
        info: "m - noun",
        letter: "E",
        set: 4
    },
    {
        latin: "exanimis, exanime",
        english: "lifeless, dead",
        info: "- adjective",
        letter: "E",
        set: 4
    },
    {
        latin: "exiguus, exigua, exiguum",
        english: "small",
        info: "- adjective",
        letter: "E",
        set: 4
    },
    {
        latin: "expallesco, expallescere, expallui",
        english: "turn very pale",
        info: "- verb",
        letter: "E",
        set: 4
    },
    {
        latin: "exsanguis, exsangue",
        english: "bloodless, pale, faint",
        info: "- adjective",
        letter: "E",
        set: 4
    },
    {
        latin: "exsilio, exsilire, exsilui",
        english: "spring out, leap out",
        info: "- verb",
        letter: "E",
        set: 4
    },
    {
        latin: "extremus, extrema, extremum",
        english: "last, farthest, extreme",
        info: "- adjective",
        letter: "E",
        set: 4
    },
    {
        latin: "facies, faciei",
        english: "shape appearance; face",
        info: "f - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "fas",
        english: "divine law, right, obligation",
        info: "n - noun (indeclinable)",
        letter: "F",
        set: 4
    },
    {
        latin: "fateor, fateri, fassus sum",
        english: "confess, acknowledge",
        info: "- verb (deponent)",
        letter: "F",
        set: 4
    },
    {
        latin: "fatum, fati",
        english: "fate, destiny; death",
        info: "n - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "fax, facis",
        english: "torch, flame; fire of love",
        info: "f - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "ferio, ferire",
        english: "strike, hit",
        info: "- verb",
        letter: "F",
        set: 4
    },
    {
        latin: "ferus, fera, ferum",
        english: "wild, savage, cruel; beast",
        info: "- adjective",
        letter: "F",
        set: 4
    },
    {
        latin: "figura, figurae",
        english: "shape, figure, form, image",
        info: "f - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "flavus, flava, flavum",
        english: "yellow, golden",
        info: "- adjective",
        letter: "F",
        set: 4
    },
    {
        latin: "fleo, flere, flevi, fletum",
        english: "weep, cry, mourn",
        info: "- verb",
        letter: "F",
        set: 4
    },
    {
        latin: "fletus, fletus",
        english: "weeping, tears",
        info: "m - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "fluctus, fluctus",
        english: "wave, flood",
        info: "m - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "fluo, fluere, fluxi, fluxum",
        english: "flow",
        info: "- verb",
        letter: "F",
        set: 4
    },
    {
        latin: "focus, foci",
        english: "hearth, home, family",
        info: "m - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "for, fari, fatus sum",
        english: "say, speak",
        info: "- verb (deponent)",
        letter: "F",
        set: 4
    },
    {
        latin: "fores, forum",
        english: "door (of house)",
        info: "f pl - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "forma, formae",
        english: "form, shape; beauty",
        info: "f - noun",
        letter: "F",
        set: 4
    },
    {
        latin: "formosus, formosa, formosum",
        english: "beautiful, handsome, good-looking",
        info: "- adjective",
        letter: "F",
        set: 4
    },
    {
        latin: "fors, fortis",
        english: "chance, luck, fortune",
        info: "f - noun",
        letter: "F",
        set: 5
    },
    {
        latin: "forsitan",
        english: "perhaps",
        info: "- adverb",
        letter: "F",
        set: 5
    },
    {
        latin: "fremo, fremere, fremui",
        english: "roar, murmur, growl",
        info: "- verb",
        letter: "F",
        set: 5
    },
    {
        latin: "fretum, freti",
        english: "strait, channel; sea",
        info: "n - noun",
        letter: "F",
        set: 5
    },
    {
        latin: "frons, frondis",
        english: "folliage, leaves, leafy, branch",
        info: "f - noun",
        letter: "F",
        set: 5
    },
    {
        latin: "frons, frontis",
        english: "forehead, brow; front",
        info: "f - noun",
        letter: "F",
        set: 5
    },
    {
        latin: "fruor, frui, fructus sum",
        english: "enjoy (+abl)",
        info: "- verb (deponent)",
        letter: "F",
        set: 5
    },
    {
        latin: "fulgeo, fulgere, fulsi",
        english: "flash, gleam, shine",
        info: "- verb",
        letter: "F",
        set: 5
    },
    {
        latin: "fulmen, fulminis",
        english: "lightning, thunderbolt",
        info: "n - noun",
        letter: "F",
        set: 5
    },
    {
        latin: "funus, funeris",
        english: "funeral, death",
        info: "n - noun",
        letter: "F",
        set: 5
    },
    {
        latin: "furo, furere",
        english: "rage, be mad; rush",
        info: "- verb",
        letter: "F",
        set: 5
    },
    {
        latin: "furtim",
        english: "secretly, stealthily",
        info: "- adverb",
        letter: "F",
        set: 5
    },
    {
        latin: "gelidus, gelida, gelidum",
        english: "icy, cold, frozen",
        info: "- adjective",
        letter: "G",
        set: 5
    },
    {
        latin: "geminus, gemiina, geminum",
        english: "twin, double; both",
        info: "- adjective",
        letter: "G",
        set: 5
    },
    {
        latin: "gemo, gemere, gemui",
        english: "groan, lament",
        info: "- verb",
        letter: "G",
        set: 5
    },
    {
        latin: "gena, genae",
        english: "cheek",
        info: "f - noun",
        letter: "G",
        set: 5
    },
    {
        latin: "genetrix, genitoris",
        english: "mother",
        info: "f - noun",
        letter: "G",
        set: 5
    },
    {
        latin: "genitor, genitoris",
        english: "father",
        info: "m - noun",
        letter: "G",
        set: 5
    },
    {
        latin: "gracilis, gracile",
        english: "thin, slender; poor, meagre",
        info: "- adjective",
        letter: "G",
        set: 5
    },
    {
        latin: "gramen, graminis",
        english: "grass",
        info: "n - noun",
        letter: "G",
        set: 5
    },
    {
        latin: "grandis, grande",
        english: "large, great, powerful",
        info: "- adjective",
        letter: "G",
        set: 5
    },
    {
        latin: "grex, gregis",
        english: "flock, herd",
        info: "m - noun",
        letter: "G",
        set: 5
    },
    {
        latin: "gutter, gutteris",
        english: "throat",
        info: "n - noun",
        letter: "G",
        set: 5
    },
    {
        latin: "harena, harenae",
        english: "sand; arena, ampitheatre",
        info: "f - noun",
        letter: "H",
        set: 5
    },
    {
        latin: "herba, herbae",
        english: "grass; herb",
        info: "f - noun",
        letter: "H",
        set: 6
    },
    {
        latin: "hesternus, hesterna, hesternum",
        english: "of yesterday",
        info: "- adjective",
        letter: "H",
        set: 6
    },
    {
        latin: "heu",
        english: "alas!",
        info: "- interjection",
        letter: "H",
        set: 6
    },
    {
        latin: "iacto, iactare, iactavi, iactatum",
        english: "throw, hurl, cast",
        info: "- verb",
        letter: "I",
        set: 6
    },
    {
        latin: "imago, imaginis",
        english: "image, likeness; echo; ghost",
        info: "f - noun",
        letter: "I",
        set: 6
    },
    {
        latin: "imber, imbris",
        english: "rain, shower",
        info: "m - noun",
        letter: "I",
        set: 6
    },
    {
        latin: "immitis, immite",
        english: "rough, harsh, fierce",
        info: "- adjective",
        letter: "I",
        set: 6
    },
    {
        latin: "impius, impia, impium",
        english: "impious, irreligious, undutiful",
        info: "- adjective",
        letter: "I",
        set: 6
    },
    {
        latin: "inanis, inane",
        english: "empty; vain, foolish",
        info: "- adjective",
        letter: "I",
        set: 6
    },
    {
        latin: "inermis, inerme",
        english: "unarmed",
        info: "- adjective",
        letter: "I",
        set: 6
    },
    {
        latin: "infestus, infesta, infestum",
        english: "troublesome, hostile, dangerous",
        info: "- adjective",
        letter: "I",
        set: 6
    },
    {
        latin: "invius, invia, invium",
        english: "trackless, impassable",
        info: "- adjective",
        letter: "I",
        set: 6
    },
    {
        latin: "iugum, iugi",
        english: "yoke; mountain ridge",
        info: "n - noun",
        letter: "I",
        set: 6
    },
    {
        latin: "Iuno, Iunonis",
        english: "Juno",
        info: "f - noun (proper)",
        letter: "I",
        set: 6
    },
    {
        latin: "lacero, lacerare, laceravi, laceratum",
        english: "tear, mangle",
        info: "- verb",
        letter: "L",
        set: 6
    },
    {
        latin: "lacertus, lacerti",
        english: "arm, upper arm; embrace",
        info: "m - noun",
        letter: "L",
        set: 6
    },
    {
        latin: "lanio, laniare, laniavi, laniatum",
        english: "tear (at)",
        info: "- verb",
        letter: "L",
        set: 6
    },
    {
        latin: "Lar, Laris",
        english: "household god, home",
        info: "m - noun",
        letter: "L",
        set: 6
    },
    {
        latin: "lassus, lassa, lassum",
        english: "tired, weary",
        info: "- adjective",
        letter: "L",
        set: 6
    },
    {
        latin: "leniter",
        english: "gently, softly",
        info: "- adverb",
        letter: "L",
        set: 6
    },
    {
        latin: "ledpidus, lepida, lepidum",
        english: "charming, elegant",
        info: "- adjective",
        letter: "L",
        set: 6
    },
    {
        latin: "letum, leti",
        english: "death",
        info: "n - noun",
        letter: "L",
        set: 6
    },
    {
        latin: "lignum, ligni",
        english: "wood, wooden object, firewood",
        info: "n - noun",
        letter: "L",
        set: 6
    },
    {
        latin: "limen, liminis",
        english: "threshold, entrance; house",
        info: "n - noun",
        letter: "L",
        set: 6
    },
    {
        latin: "limes, limitis",
        english: "boundary, track",
        info: "m - noun",
        letter: "L",
        set: 7
    },
    {
        latin: "liquidus, liquida, liquidum",
        english: "clear, transparent, pure; fluid",
        info: "- adjective",
        letter: "L",
        set: 7
    },
    {
        latin: "luctus, luctus",
        english: "grief, sorrow, mourning",
        info: "m - noun",
        letter: "L",
        set: 7
    },
    {
        latin: "lucus, luci",
        english: "grove, wood",
        info: "m - noun",
        letter: "L",
        set: 7
    },
    {
        latin: "lumen, luminis",
        english: "light, lamp; eye",
        info: "n - noun",
        letter: "L",
        set: 7
    },
    {
        latin: "lupus, lupi",
        english: "wolf",
        info: "m - noun",
        letter: "L",
        set: 7
    },
    {
        latin: "maestus, maesta, maestum",
        english: "sad, gloomy",
        info: "- adjective",
        letter: "M",
        set: 7
    },
    {
        latin: "manes, manium",
        english: "spirits of the dead; the Underworld",
        info: "m pl - noun",
        letter: "M",
        set: 7
    },
    {
        latin: "marmor, marmoris",
        english: "marble, statue; sea",
        info: "n - noun",
        letter: "M",
        set: 7
    },
    {
        latin: "Mars, Martis",
        english: "Mars; war",
        info: "m - noun (proper)",
        letter: "M",
        set: 7
    },
    {
        latin: "membrum, membri",
        english: "limb",
        info: "n - noun",
        letter: "M",
        set: 7
    },
    {
        latin: "merus, mera, merum",
        english: "undiluted, pure; wine",
        info: "- adjective",
        letter: "M",
        set: 7
    },
    {
        latin: "mirus, mira, mirum",
        english: "wonderful, marvellous, amazing",
        info: "- adjective",
        letter: "M",
        set: 7
    },
    {
        latin: "mitis, mitis",
        english: "soft, gentle",
        info: "- adjective",
        letter: "M",
        set: 7
    },
    {
        latin: "moles, molis",
        english: "mass, massive structure; effort",
        info: "f - noun",
        letter: "M",
        set: 7
    },
    {
        latin: "monstrum, monstri",
        english: "portent; monster",
        info: "n - noun",
        letter: "M",
        set: 7
    },
    {
        latin: "mortalis, mortale",
        english: "moral, human, transient",
        info: "- adjective",
        letter: "M",
        set: 7
    },
    {
        latin: "mundus, mundi",
        english: "the world, earth; mankind",
        info: "m - noun",
        letter: "M",
        set: 7
    },
    {
        latin: "Musa, Musae",
        english: "Muse",
        info: "f - noun (proper)",
        letter: "M",
        set: 7
    },
    {
        latin: "navita, navitae",
        english: "sailor",
        info: "m - noun",
        letter: "N",
        set: 7
    },
    {
        latin: "nefas",
        english: "wickedness, crime, wrong",
        info: "n - noun (indeclinable)",
        letter: "N",
        set: 7
    },
    {
        latin: "nemus, nemoris",
        english: "grove, wood",
        info: "n - noun",
        letter: "N",
        set: 8
    },
    {
        latin: "niteo, nitere, nitui",
        english: "shine",
        info: "- verb",
        letter: "N",
        set: 8
    },
    {
        latin: "nitidus, nitida, nitidum",
        english: "shining",
        info: "- adjective",
        letter: "N",
        set: 8
    },
    {
        latin: "nitor, niti, nisus/nixus sum",
        english: "rest on; climb, strive, exert oneself",
        info: "- verb (deponent)",
        letter: "N",
        set: 8
    },
    {
        latin: "niveus, nivea, niveum",
        english: "snowy, white",
        info: "- adjective",
        letter: "N",
        set: 8
    },
    {
        latin: "nix, nivis",
        english: "snow",
        info: "f - noun",
        letter: "N",
        set: 8
    },
    {
        latin: "nocturnus, nocturna, nocturnum",
        english: "nocturnal, of the night",
        info: "- adjective",
        letter: "N",
        set: 8
    },
    {
        latin: "Notus, Noti",
        english: "the south wind; wind",
        info: "m - noun",
        letter: "N",
        set: 8
    },
    {
        latin: "nubes, nubis",
        english: "cloud",
        info: "f - noun",
        letter: "N",
        set: 8
    },
    {
        latin: "nubilus, nubila, nubilum",
        english: "cloudy",
        info: "- adjective",
        letter: "N",
        set: 8
    },
    {
        latin: "numen, numinis",
        english: "divine power, divinity, god",
        info: "n - noun",
        letter: "N",
        set: 8
    },
    {
        latin: "nympha, nymphae",
        english: "nymph; young woman, bride",
        info: "f - noun",
        letter: "N",
        set: 8
    },
    {
        latin: "obscurus, obscura, obscuraum",
        english: "dark",
        info: "- adjective",
        letter: "O",
        set: 8
    },
    {
        latin: "obstupesco, obstupescere, obstipui",
        english: "be amazed, be dumbstruck",
        info: "- verb",
        letter: "O",
        set: 8
    },
    {
        latin: "opto, optare, optavi, optatum",
        english: "choose; wish, desire",
        info: "- verb",
        letter: "O",
        set: 8
    },
    {
        latin: "orbis, orbis",
        english: "circle, sphere; country, world; eye",
        info: "m - noun",
        letter: "O",
        set: 8
    },
    {
        latin: "orbus, orba, orbum",
        english: "deprived, bereft (of, +abl)",
        info: "- adjective",
        letter: "O",
        set: 8
    },
    {
        latin: "Orcus, Orci",
        english: "the (god of the) Underworld",
        info: "m - noun (proper)",
        letter: "O",
        set: 8
    },
    {
        latin: "os, ossis",
        english: "bone",
        info: "n - noun",
        letter: "O",
        set: 8
    },
    {
        latin: "osculum, osculi",
        english: "kiss",
        info: "n - noun",
        letter: "O",
        set: 9
    },
    {
        latin: "ovis, ovis",
        english: "sheep",
        info: "f - noun",
        letter: "O",
        set: 9
    },
    {
        latin: "Pallas, Palladis",
        english: "Pallas Athene",
        info: "f - noun (proper)",
        letter: "P",
        set: 9
    },
    {
        latin: "pariter",
        english: "together, at the same time",
        info: "- adverb",
        letter: "P",
        set: 9
    },
    {
        latin: "paternus, paterna, paternum",
        english: "of a father, ancestral",
        info: "- adjective",
        letter: "P",
        set: 9
    },
    {
        latin: "pavidus, pavida, pavidum",
        english: "trembling, terrified, alarmed",
        info: "- adjective",
        letter: "P",
        set: 9
    },
    {
        latin: "pecus, pecoris",
        english: "cattle, herd",
        info: "n - noun",
        letter: "P",
        set: 9
    },
    {
        latin: "pelagus, pelagi",
        english: "sea",
        info: "n - noun",
        letter: "P",
        set: 9
    },
    {
        latin: "Penates, Penatium",
        english: "household gods, home",
        info: "m pl - noun",
        letter: "P",
        set: 9
    },
    {
        latin: "penitus",
        english: "deep within; completely",
        info: "- adverb",
        letter: "P",
        set: 9
    },
    {
        latin: "penna, pennae",
        english: "feather, wing",
        info: "f - noun",
        letter: "P",
        set: 9
    },
    {
        latin: "perennis, perenne",
        english: "through the year(s), enduring",
        info: "- adjective",
        letter: "P",
        set: 9
    },
    {
        latin: "perfundo, perfundere, perfusi, perfusum",
        english: "pour over, (make) wet; spread",
        info: "- verb",
        letter: "P",
        set: 9
    },
    {
        latin: "Phoebus, Phoebi",
        english: "Phoebus",
        info: "m - noun (proper)",
        letter: "P",
        set: 9
    },
    {
        latin: "pingo, pingere, pinxi, pictum",
        english: "paint, colour; embroider",
        info: "- verb",
        letter: "P",
        set: 9
    },
    {
        latin: "pinus, pinus",
        english: "pine-tree; ship",
        info: "f - noun",
        letter: "P",
        set: 9
    },
    {
        latin: "piscis, piscis",
        english: "fish",
        info: "m - noun",
        letter: "P",
        set: 9
    },
    {
        latin: "plango, plangere, planxi, planctum",
        english: "strike, beat the breast, mourn",
        info: "- verb",
        letter: "P",
        set: 9
    },
    {
        latin: "pluma, plumae",
        english: "feather",
        info: "f - noun",
        letter: "P",
        set: 9
    },
    {
        latin: "polus, poli",
        english: "pole; sky, heaven",
        info: "m - noun",
        letter: "P",
        set: 9
    },
    {
        latin: "pontus, ponti",
        english: "sea",
        info: "m - noun",
        letter: "P",
        set: 10
    },
    {
        latin: "pratum, prati",
        english: "meadow",
        info: "n - noun",
        letter: "P",
        set: 10
    },
    {
        latin: "preces, precum",
        english: "prayers",
        info: "f pl - noun",
        letter: "P",
        set: 10
    },
    {
        latin: "premo, permere, pressi, pressum",
        english: "press, crush",
        info: "- verb",
        letter: "P",
        set: 10
    },
    {
        latin: "priscus, prisca, priscum",
        english: "old, former, ancient",
        info: "- adjective",
        letter: "P",
        set: 10
    },
    {
        latin: "proles, prolis",
        english: "offspring, child, descendant",
        info: "f - noun",
        letter: "P",
        set: 10
    },
    {
        latin: "propero, properare, properavi, properatum",
        english: "hurry, hasten, be quick",
        info: "- verb",
        letter: "P",
        set: 10
    },
    {
        latin: "prora, prorae",
        english: "prow, ship",
        info: "f - noun",
        letter: "P",
        set: 10
    },
    {
        latin: "protinus",
        english: "on/from the spot, immediately",
        info: "- adverb",
        letter: "P",
        set: 10
    },
    {
        latin: "puppis, puppis",
        english: "stern, ship",
        info: "f - noun",
        letter: "P",
        set: 10
    },
    {
        latin: "purpureus, purpurea, purpureum",
        english: "purple, radient, glowing",
        info: "- adjective",
        letter: "P",
        set: 10
    },
    {
        latin: "querella, querellae",
        english: "complaint, lamentation",
        info: "f - noun",
        letter: "Q",
        set: 10
    },
    {
        latin: "questus, questus",
        english: "complaint, lamentation",
        info: "m - noun",
        letter: "Q",
        set: 10
    },
    {
        latin: "ramus, rami",
        english: "branch",
        info: "m - noun",
        letter: "R",
        set: 10
    },
    {
        latin: "ratis, ratis",
        english: "raft, boat",
        info: "f - noun",
        letter: "R",
        set: 10
    },
    {
        latin: "remigium, remigii",
        english: "rowing, oarage, crew",
        info: "n - noun",
        letter: "R",
        set: 10
    },
    {
        latin: "resto, restare, restiti",
        english: "stand firm; remain, be left",
        info: "- verb",
        letter: "R",
        set: 10
    },
    {
        latin: "rivus, rivi",
        english: "stream",
        info: "m - noun",
        letter: "R",
        set: 10
    },
    {
        latin: "robur, roboris",
        english: "oak; strength, man-power",
        info: "n - noun",
        letter: "R",
        set: 10
    },
    {
        latin: "ros, roris",
        english: "dew, moisture",
        info: "m - noun",
        letter: "R",
        set: 10
    },
    {
        latin: "rosa, rosae",
        english: "rose",
        info: "f - noun",
        letter: "R",
        set: 11
    },
    {
        latin: "rubeo, rubere",
        english: "be red",
        info: "- verb",
        letter: "R",
        set: 11
    },
    {
        latin: "rupes, rupis",
        english: "rock",
        info: "f - noun",
        letter: "R",
        set: 11
    },
    {
        latin: "sacrum, sacri",
        english: "religious rite, ceremony",
        info: "n - noun",
        letter: "S",
        set: 11
    },
    {
        latin: "sanguineus, sanguinea, sanguieum",
        english: "bloody, of blood, blood-red",
        info: "- adjective",
        letter: "S",
        set: 11
    },
    {
        latin: "saucius, saucia, saucium",
        english: "wounded",
        info: "- adjective",
        letter: "S",
        set: 11
    },
    {
        latin: "sedulus, sedula, sedulum",
        english: "busy, attentive",
        info: "- adjective",
        letter: "S",
        set: 11
    },
    {
        latin: "seges, segetis",
        english: "corn, crop",
        info: "f - noun",
        letter: "S",
        set: 11
    },
    {
        latin: "senilis, senilis",
        english: "aged, of old age, of an old man",
        info: "- adjective",
        letter: "S",
        set: 11
    },
    {
        latin: "serenus, serena, serenum",
        english: "clear, bright; calm",
        info: "- adjective",
        letter: "S",
        set: 11
    },
    {
        latin: "sermo, sermonis",
        english: "conservation; story, narrative",
        info: "m - noun",
        letter: "S",
        set: 11
    },
    {
        latin: "sidus, sideris",
        english: "star, constellation",
        info: "n - noun",
        letter: "S",
        set: 11
    },
    {
        latin: "sileo, silere, silui",
        english: "be silent, be still",
        info: "- verb",
        letter: "S",
        set: 11
    },
    {
        latin: "simulacrum, simulacri",
        english: "image, shade, ghost",
        info: "n - noun",
        letter: "S",
        set: 11
    },
    {
        latin: "singuli, singulae, singula",
        english: "one, each, individual",
        info: "- adjective",
        letter: "S",
        set: 11
    },
    {
        latin: "sinus, sinus",
        english: "fold; bosom; gulf, bay",
        info: "m - noun",
        letter: "S",
        set: 11
    },
    {
        latin: "sors, sortis",
        english: "lot, share, fortune",
        info: "f - noun",
        letter: "S",
        set: 11
    },
    {
        latin: "spargo, spargere, sparsi, sparsum",
        english: "scatter, sprinkle",
        info: "- verb",
        letter: "S",
        set: 11
    },
    {
        latin: "spiro, spirare, spiravi, spiratum",
        english: "breathe, blow, be alive",
        info: "- verb",
        letter: "S",
        set: 12
    },
    {
        latin: "stella, stellae",
        english: "star",
        info: "f - noun",
        letter: "S",
        set: 12
    },
    {
        latin: "sterno, sternere, stravi, stratum",
        english: "spread, scatter",
        info: "- verb",
        letter: "S",
        set: 12
    },
    {
        latin: "stupeo, stupere, stupui",
        english: "be amazed, be dumbstruck",
        info: "- verb",
        letter: "S",
        set: 12
    },
    {
        latin: "subeo, subire, subii",
        english: "go under, approach; come to mind",
        info: "- verb",
        letter: "S",
        set: 12
    },
    {
        latin: "superi, superorum",
        english: "the gods, the heavenly ones",
        info: "m pl - noun",
        letter: "S",
        set: 12
    },
    {
        latin: "tardus, tarda, tardum",
        english: "slow",
        info: "- adjective",
        letter: "T",
        set: 12
    },
    {
        latin: "taurus, tauri",
        english: "bull",
        info: "m - noun",
        letter: "T",
        set: 12
    },
    {
        latin: "tellus, telluris",
        english: "earth, land",
        info: "f - noun",
        letter: "T",
        set: 12
    },
    {
        latin: "tenebrae, tenebrarum",
        english: "darkness, night",
        info: "f pl - noun",
        letter: "T",
        set: 12
    },
    {
        latin: "tener, tenera, tenerum",
        english: "soft, delicate, tender",
        info: "- adjective",
        letter: "T",
        set: 12
    },
    {
        latin: "tenuis, tenue",
        english: "thin, fine, slight",
        info: "- adjective",
        letter: "T",
        set: 12
    },
    {
        latin: "tepeo, tepere, tepui",
        english: "be warm; feel love",
        info: "- verb",
        letter: "T",
        set: 12
    },
    {
        latin: "tepidus, tepida, tepidum",
        english: "warm",
        info: "- adjective",
        letter: "T",
        set: 12
    },
    {
        latin: "ter",
        english: "three times",
        info: "- adverb",
        letter: "T",
        set: 12
    },
    {
        latin: "torus, tori",
        english: "couch, bed, marriage-bed",
        info: "m - noun",
        letter: "T",
        set: 12
    },
    {
        latin: "tremo, tremere, tremui",
        english: "shake, tremble (at)",
        info: "- verb",
        letter: "T",
        set: 12
    },
    {
        latin: "trepido, trepidare, trepidavi, trepidatum",
        english: "tremble",
        info: "- verb",
        letter: "T",
        set: 12
    },
    {
        latin: "Troia, Troiae",
        english: "Troy",
        info: "f - noun (proper)",
        letter: "T",
        set: 12
    },
    {
        latin: "Troianus, Troiana, Troianum",
        english: "Trojan",
        info: "- adjective",
        letter: "T",
        set: 12
    },
    {
        latin: "turpis, turpe",
        english: "ugly, shameful, disgraceful",
        info: "- adjective",
        letter: "T",
        set: 12
    },
    {
        latin: "umidus, umida, umidum",
        english: "damp, moist, wet",
        info: "- adjective",
        letter: "U",
        set: 12
    },
    {
        latin: "uvidus, uvida, uvidum",
        english: "damp, moist, wet",
        info: "- adjective",
        letter: "U",
        set: 12
    },
    {
        latin: "vacca, vaccae",
        english: "cow",
        info: "f - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "vado, vadere",
        english: "go, rush",
        info: "- verb",
        letter: "V",
        set: 12
    },
    {
        latin: "vadum, vadi",
        english: "shallow water, ford; stream, sea",
        info: "n - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "vallis, vallis",
        english: "valley",
        info: "f - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "varius, varia, varium",
        english: "various, changing, multicoloured",
        info: "- adjective",
        letter: "V",
        set: 12
    },
    {
        latin: "vates, vatis",
        english: "prophet; poet, bard",
        info: "m/f - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "vela, velorum",
        english: "sails",
        info: "n pl - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "velo, velare, velavi, velatum",
        english: "cover, clothe, conceal",
        info: "- verb",
        letter: "V",
        set: 12
    },
    {
        latin: "velox, gen velocis",
        english: "swift, quick",
        info: "- adjective",
        letter: "V",
        set: 12
    },
    {
        latin: "Venus, Veneris",
        english: "Venus; love",
        info: "f - noun (proper)",
        letter: "V",
        set: 12
    },
    {
        latin: "ver, veris",
        english: "spring (season)",
        info: "n - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "vicinus, vicina, vicinum",
        english: "nearby, neighbouring",
        info: "- adjective",
        letter: "V",
        set: 12
    },
    {
        latin: "virgo, virginis",
        english: "girl, maiden",
        info: "f - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "viso, visere, visi, visum",
        english: "view, look at, go to see, visit",
        info: "- verb",
        letter: "V",
        set: 12
    },
    {
        latin: "volucris, volucris",
        english: "bird",
        info: "f - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "votum, voti",
        english: "vow, promise, wish, prayer",
        info: "n - noun",
        letter: "V",
        set: 12
    },
    {
        latin: "Zephyrus, Zephyri",
        english: "the west wind",
        info: "m - noun (proper)",
        letter: "Z",
        set: 12
    }
];
