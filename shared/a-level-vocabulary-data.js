// A-Level Latin Vocabulary - Complete list (1126 words)
// Based on the OCR A-Level Latin defined vocabulary list
// With topic categories, sequential sets, hints and derivatives added
const aLevelVocabularyData = [
    {
        latin: "ac/atque",
        english: "and",
        info: "- conjunction",
        letter: "A",
        topic: "Conjunctions",
        set: 1
    },
    {
        latin: "accido",
        english: "happen",
        info: "accidere, accidi - verb",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'accident'",
        derivatives: "accident, accidental, incident"
    },
    {
        latin: "accipio",
        english: "accept, take in, receive, hear",
        info: "accipere, accepi - verb",
        letter: "A",
        topic: "Verbs of Giving/Taking",
        set: 1,
        hint: "Think of 'reception'",
        derivatives: "accept, reception, receptive"
    },
    {
        latin: "accuso",
        english: "accuse",
        info: "accusare - verb",
        letter: "A",
        topic: "Verbs of Speaking",
        set: 1,
        hint: "Think of 'accusation'",
        derivatives: "accuse, accusation, excuse"
    },
    {
        latin: "acer",
        english: "keen, sharp, fierce",
        info: "acris, acre - adjective",
        letter: "A",
        topic: "Quality & Character",
        set: 1,
        hint: "Think of 'acrid'",
        derivatives: "acrid, acerbic, exacerbate"
    },
    {
        latin: "acriter",
        english: "keenly, sharply, fiercely",
        info: "- adverb",
        letter: "A",
        topic: "Adverbs",
        set: 1
    },
    {
        latin: "acies",
        english: "line, battle line, army",
        info: "aciei - noun",
        letter: "A",
        topic: "Military & War",
        set: 1,
        hint: "Think of 'acuity'",
        derivatives: "acuity, acute"
    },
    {
        latin: "ad",
        english: "to, towards, at, about",
        info: "+ acc, or as - preposition",
        letter: "A",
        topic: "Prepositions",
        set: 1,
        hint: "Think of 'addition'",
        derivatives: "addition, address, adjacent"
    },
    {
        latin: "addo",
        english: "add, join",
        info: "addere, addidi - verb",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        derivatives: "add, addition, addendum"
    },
    {
        latin: "adeo (1)",
        english: "go to, approach",
        info: "adire, adii - verb",
        letter: "A",
        topic: "Verbs of Motion",
        set: 1,
        hint: "Think of 'exit'",
        derivatives: "exit, transit (via eo/ire)"
    },
    {
        latin: "adeo (2)",
        english: "so much, so greatly, to such an extent",
        info: "- adverb",
        letter: "A",
        topic: "Adverbs",
        set: 1,
        hint: "Think of 'exit'",
        derivatives: "exit, transit (via eo/ire)"
    },
    {
        latin: "adhuc",
        english: "up till now, still",
        info: "- adverb",
        letter: "A",
        topic: "Adverbs",
        set: 1
    },
    {
        latin: "adimo",
        english: "take away, remove",
        info: "adimere, ademi - verb",
        letter: "A",
        topic: "Verbs of Giving/Taking",
        set: 1
    },
    {
        latin: "adipiscor",
        english: "obtain",
        info: "adipisci, adeptus - verb",
        letter: "A",
        topic: "Verbs of Giving/Taking",
        set: 1,
        hint: "Think of 'adipose'",
        derivatives: "adipose"
    },
    {
        latin: "adiuvo",
        english: "help",
        info: "adiuvare, adiuvi - verb",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'adjutant'",
        derivatives: "adjutant, aid, coadjutor"
    },
    {
        latin: "admitto",
        english: "let in, permit, commit",
        info: "admittere - verb",
        letter: "A",
        topic: "Verbs of Ruling",
        set: 1,
        hint: "Think of 'admit'",
        derivatives: "admit, admission, admissible"
    },
    {
        latin: "adsum",
        english: "be here, be present",
        info: "adesse, adfui - verb",
        letter: "A",
        topic: "Verbs of Being",
        set: 1,
        hint: "Think of 'absent (opposite)'",
        derivatives: "absent (opposite), present"
    },
    {
        latin: "adulescens",
        english: "youth, young man",
        info: "adulescentis - noun",
        letter: "A",
        topic: "Family & People",
        set: 1,
        hint: "Think of 'adolescent'",
        derivatives: "adolescent, adolescence"
    },
    {
        latin: "advenio",
        english: "arrive",
        info: "advenire, adveni - verb",
        letter: "A",
        topic: "Verbs of Motion",
        set: 1,
        hint: "Think of 'advent'",
        derivatives: "advent, adventure, avenue"
    },
    {
        latin: "adventus",
        english: "arrival",
        info: "adventus - noun",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'advent'",
        derivatives: "advent, adventure, adventitious"
    },
    {
        latin: "adversus (1)",
        english: "facing, opposite",
        info: "adversa - adjective",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'adverse'",
        derivatives: "adverse, adversity, adversary"
    },
    {
        latin: "adversus (2)",
        english: "facing, opposite, against, towards",
        info: "+ acc, or as - adverb",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'adverse'",
        derivatives: "adverse, adversity, adversary"
    },
    {
        latin: "aedificium",
        english: "building",
        info: "aedificii - noun",
        letter: "A",
        topic: "Buildings & Places",
        set: 1,
        hint: "Think of 'edifice'",
        derivatives: "edifice, edify"
    },
    {
        latin: "aedifico",
        english: "build",
        info: "aedificare - verb",
        letter: "A",
        topic: "Verbs of Making/Doing",
        set: 1,
        hint: "Think of 'edifice'",
        derivatives: "edifice, edify, edification"
    },
    {
        latin: "aeger",
        english: "sick, ill, weary, love-sick",
        info: "aegra, aegrum - adjective",
        letter: "A",
        topic: "Quality & Character",
        set: 1,
        hint: "Think of 'aegis (protection)'",
        derivatives: "aegis (protection)"
    },
    {
        latin: "aequus",
        english: "equal, fair, favourable, calm",
        info: "aequa, aequum - adjective",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'equity'",
        derivatives: "equal, equity, equate, adequate, equation"
    },
    {
        latin: "aestas",
        english: "summer",
        info: "aestatis - noun",
        letter: "A",
        topic: "Time & Seasons",
        set: 1,
        hint: "Think of 'estival'",
        derivatives: "estival, estivate"
    },
    {
        latin: "aetas",
        english: "age",
        info: "aetatis - noun",
        letter: "A",
        topic: "Time & Seasons",
        set: 1,
        derivatives: "age (via Old French)"
    },
    {
        latin: "ager",
        english: "field; (oft pl) land, territory",
        info: "agri - noun",
        letter: "A",
        topic: "Nature & Landscape",
        set: 1,
        hint: "Think of 'agriculture'",
        derivatives: "agriculture, agrarian, acre"
    },
    {
        latin: "aggredior",
        english: "attack, approach",
        info: "aggredi - verb",
        letter: "A",
        topic: "Verbs of Motion",
        set: 1,
        hint: "Think of 'aggression'",
        derivatives: "aggression, aggressive"
    },
    {
        latin: "agmen",
        english: "column of men, army, procession",
        info: "agminis - noun",
        letter: "A",
        topic: "Military & War",
        set: 1,
        hint: "Think of 'agent (via agere)'",
        derivatives: "agent (via agere)"
    },
    {
        latin: "agnosco",
        english: "recognise",
        info: "agnoscere - verb",
        letter: "A",
        topic: "Verbs of Perception",
        set: 1,
        hint: "Think of 'recognize'",
        derivatives: "recognize, cognition"
    },
    {
        latin: "ago",
        english: "do, act, drive",
        info: "agere, egi, actum - verb",
        letter: "A",
        topic: "Verbs of Making/Doing",
        set: 1,
        hint: "Think of 'agent'",
        derivatives: "agent, agile, agitate, act, active"
    },
    {
        latin: "agricola",
        english: "farmer",
        info: "agricolae - noun",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'agriculture'",
        derivatives: "agriculture, agricultural"
    },
    {
        latin: "ala",
        english: "wing",
        info: "alae - noun",
        letter: "A",
        topic: "Nature & Landscape",
        set: 1,
        hint: "Think of 'aileron'",
        derivatives: "aileron, aisle"
    },
    {
        latin: "alienus",
        english: "someone else’s, strange, foreign",
        info: "aliena, alienum - adjective",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'alien'",
        derivatives: "alien, alienate, inalienable"
    },
    {
        latin: "aliquis",
        english: "someone, something, anyone, anything",
        info: "neuter aliquid - pronoun",
        letter: "A",
        topic: "Pronouns",
        set: 1,
        hint: "Think of 'alias'",
        derivatives: "alias, alibi"
    },
    {
        latin: "aliter",
        english: "otherwise",
        info: "- adverb",
        letter: "A",
        topic: "Miscellaneous",
        set: 1
    },
    {
        latin: "alius",
        english: "other, one, another, else",
        info: "alia, aliud adj/ - pronoun",
        letter: "A",
        topic: "Pronouns",
        set: 1,
        hint: "Think of 'alias'",
        derivatives: "alias, alibi, alien, alter"
    },
    {
        latin: "alter",
        english: "the other, one (of two), another, a second",
        info: "altera, alterum adj/ - pronoun",
        letter: "A",
        topic: "Pronouns",
        set: 1,
        derivatives: "alter, alternate, alternative, alteration"
    },
    {
        latin: "altus",
        english: "high; deep",
        info: "alta, altum - adjective",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'altitude'",
        derivatives: "altitude, alto, exalt, enhance"
    },
    {
        latin: "ambulo",
        english: "walk",
        info: "ambulare - verb",
        letter: "A",
        topic: "Verbs of Motion",
        set: 1,
        hint: "Think of 'amble'",
        derivatives: "amble, ambulance, ambulatory, perambulate"
    },
    {
        latin: "amica",
        english: "(female) friend,girlfriend",
        info: "amicae - noun",
        letter: "A",
        topic: "Family & People",
        set: 1,
        hint: "Think of 'amicable'",
        derivatives: "amicable, amiable"
    },
    {
        latin: "amicitia",
        english: "friendship",
        info: "amicitiae - noun",
        letter: "A",
        topic: "Miscellaneous",
        set: 1,
        hint: "Think of 'amity'",
        derivatives: "amity, amicable"
    },
    {
        latin: "amicus",
        english: "friend",
        info: "amici - noun",
        letter: "A",
        topic: "Family & People",
        set: 1,
        hint: "Think of 'amicable'",
        derivatives: "amicable, amiable, amity, inimical"
    },
    {
        latin: "amitto",
        english: "lose",
        info: "amittere, amisi - verb",
        letter: "A",
        topic: "Verbs of Giving/Taking",
        set: 1,
        hint: "Think of 'emit'",
        derivatives: "emit, omit, mission"
    },
    {
        latin: "amo",
        english: "love, like",
        info: "amare, amavi - verb",
        letter: "A",
        topic: "Verbs of Emotion",
        set: 1,
        hint: "Think of 'amorous'",
        derivatives: "amorous, amateur, amiable, amity"
    },
    {
        latin: "amor",
        english: "love",
        info: "amoris - noun",
        letter: "A",
        topic: "Emotions & Mind",
        set: 1,
        hint: "Think of 'amorous'",
        derivatives: "amorous, amour, enamored, paramour"
    },
    {
        latin: "amphitheatrum",
        english: "amphitheatre",
        info: "amphitheatri - noun",
        letter: "A",
        topic: "Miscellaneous",
        set: 1
    },
    {
        latin: "an",
        english: "or",
        info: "- conjunction",
        letter: "A",
        topic: "Conjunctions",
        set: 1
    },
    {
        latin: "ancilla",
        english: "slave-girl,slave-woman",
        info: "ancillae - noun",
        letter: "A",
        topic: "Family & People",
        set: 2,
        hint: "Think of 'ancillary'",
        derivatives: "ancillary"
    },
    {
        latin: "angustus",
        english: "narrow, confined",
        info: "angusta - adjective",
        letter: "A",
        topic: "Size & Quantity",
        set: 2,
        hint: "Think of 'anguish'",
        derivatives: "anguish, anxiety, angst"
    },
    {
        latin: "animadverto",
        english: "notice, observe",
        info: "animadvertere - verb",
        letter: "A",
        topic: "Verbs of Perception",
        set: 2
    },
    {
        latin: "animal",
        english: "animal, living creature",
        info: "animalis - noun",
        letter: "A",
        topic: "Nature & Landscape",
        set: 2
    },
    {
        latin: "animus",
        english: "mind, spirit, courage, soul",
        info: "animi - noun",
        letter: "A",
        topic: "Emotions & Mind",
        set: 2,
        hint: "Think of 'animate'",
        derivatives: "animate, animal, animosity, unanimous, magnanimous"
    },
    {
        latin: "annus",
        english: "year",
        info: "anni - noun",
        letter: "A",
        topic: "Time & Seasons",
        set: 2,
        hint: "Think of 'annual'",
        derivatives: "annual, anniversary, perennial, annuity, biannual"
    },
    {
        latin: "ante",
        english: "before, in front of",
        info: "+ acc - preposition",
        letter: "A",
        topic: "Prepositions",
        set: 2,
        hint: "Think of 'ante'",
        derivatives: "ante, anterior, antecedent, anticipate"
    },
    {
        latin: "antea",
        english: "before, previously",
        info: "- adverb",
        letter: "A",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "antequam",
        english: "before",
        info: "- conjunction",
        letter: "A",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "aperio",
        english: "open, reveal, disclose",
        info: "aperire, aperui - verb",
        letter: "A",
        topic: "Miscellaneous",
        set: 2,
        hint: "Think of 'aperture'",
        derivatives: "aperture, overt, overture"
    },
    {
        latin: "appareo",
        english: "appear",
        info: "apparere, apparui - verb",
        letter: "A",
        topic: "Verbs of Being",
        set: 2
    },
    {
        latin: "appropinquo",
        english: "approach, come near appropinquavi",
        info: "appropinquare - verb",
        letter: "A",
        topic: "Verbs of Motion",
        set: 2,
        hint: "Think of 'approximate'",
        derivatives: "approximate, proximity"
    },
    {
        latin: "aptus",
        english: "suitable, appropriate",
        info: "apta, aptum - adjective",
        letter: "A",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "apud",
        english: "among, with, at the house of, according to",
        info: "+ acc - preposition",
        letter: "A",
        topic: "Prepositions",
        set: 2,
        derivatives: "proximity (related)"
    },
    {
        latin: "aqua",
        english: "water",
        info: "aquae - noun",
        letter: "A",
        topic: "Nature & Landscape",
        set: 2,
        hint: "Think of 'aquatic'",
        derivatives: "aquatic, aquarium, aqueduct, aqueous"
    },
    {
        latin: "aquila",
        english: "eagle; legionary standard",
        info: "aquilae - noun",
        letter: "A",
        topic: "Military & War",
        set: 2
    },
    {
        latin: "ara",
        english: "altar",
        info: "arae - noun",
        letter: "A",
        topic: "Religion & Ritual",
        set: 2
    },
    {
        latin: "arbor",
        english: "tree",
        info: "arboris - noun",
        letter: "A",
        topic: "Nature & Landscape",
        set: 2,
        hint: "Think of 'arbor'",
        derivatives: "arbor, arboreal, arboretum"
    },
    {
        latin: "arcesso",
        english: "sum mon, send for arcessivi",
        info: "arcessere - verb",
        letter: "A",
        topic: "Verbs of Giving/Taking",
        set: 2,
        hint: "Think of 'access (related)'",
        derivatives: "access (related)"
    },
    {
        latin: "ardeo",
        english: "burn, blaze",
        info: "ardere, arsi - verb",
        letter: "A",
        topic: "Miscellaneous",
        set: 2,
        hint: "Think of 'ardent'",
        derivatives: "ardent, ardor, arson"
    },
    {
        latin: "argentum",
        english: "silver, money",
        info: "argenti - noun",
        letter: "A",
        topic: "Wealth & Trade",
        set: 2,
        hint: "Think of 'argent'",
        derivatives: "argent, Argentina"
    },
    {
        latin: "arma",
        english: "arms, weapons, pl armour",
        info: "armorum - noun",
        letter: "A",
        topic: "Military & War",
        set: 2,
        hint: "Think of 'army'",
        derivatives: "arm, army, armor, armament, disarm"
    },
    {
        latin: "armatus",
        english: "armed man",
        info: "armati - noun",
        letter: "A",
        topic: "Military & War",
        set: 2
    },
    {
        latin: "armo",
        english: "arm, equip with weapons",
        info: "armare, armavi - verb",
        letter: "A",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "ars",
        english: "art, skill",
        info: "artis - noun",
        letter: "A",
        topic: "Miscellaneous",
        set: 2,
        derivatives: "art, artist, artificial, artisan, artifact"
    },
    {
        latin: "arx",
        english: "citadel",
        info: "arcis - noun",
        letter: "A",
        topic: "Buildings & Places",
        set: 2
    },
    {
        latin: "ascendo",
        english: "but",
        info: "ascendere verb 3rd climb, go up ascendi, ascensum *at - conjunction",
        letter: "A",
        topic: "Conjunctions",
        set: 2,
        hint: "Think of 'ascend'",
        derivatives: "ascend, ascent, ascendant"
    },
    {
        latin: "atque",
        english: "and",
        info: "- conjunction",
        letter: "A",
        topic: "Conjunctions",
        set: 2,
        hint: "Think of 'attic (related)'",
        derivatives: "attic (related)"
    },
    {
        latin: "atrium",
        english: "hall",
        info: "atrii - noun",
        letter: "A",
        topic: "Buildings & Places",
        set: 2
    },
    {
        latin: "attonitus",
        english: "astonished, thunderstruck",
        info: "attonita - adjective",
        letter: "A",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "auctoritas",
        english: "authority, power, influence",
        info: "auctoritatis - noun",
        letter: "A",
        topic: "Government & Politics",
        set: 2
    },
    {
        latin: "audax",
        english: "bold, daring",
        info: "gen audacis - adjective",
        letter: "A",
        topic: "Quality & Character",
        set: 2,
        hint: "Think of 'audacious'",
        derivatives: "audacious, audacity"
    },
    {
        latin: "audeo",
        english: "dare",
        info: "audere, ausus - verb",
        letter: "A",
        topic: "Miscellaneous",
        set: 2,
        hint: "Think of 'audacious'",
        derivatives: "audacious, audacity"
    },
    {
        latin: "audio",
        english: "hear, listen to",
        info: "audire, audivi - verb",
        letter: "A",
        topic: "Verbs of Perception",
        set: 2,
        hint: "Think of 'audio'",
        derivatives: "audio, audible, audience, auditorium, audit"
    },
    {
        latin: "aufero",
        english: "take away, carry off, steal",
        info: "auferre, abstuli - verb",
        letter: "A",
        topic: "Verbs of Giving/Taking",
        set: 2,
        hint: "Think of 'ablate'",
        derivatives: "ablate, ablation"
    },
    {
        latin: "augeo",
        english: "increase, exaggerate",
        info: "augere, auxi - verb",
        letter: "A",
        topic: "Miscellaneous",
        set: 2,
        hint: "Think of 'augment'",
        derivatives: "augment, auction, author, authority, august"
    },
    {
        latin: "aurum",
        english: "gold",
        info: "auri - noun",
        letter: "A",
        topic: "Wealth & Trade",
        set: 2,
        hint: "Think of 'aureate'",
        derivatives: "aureate, aurora, auriferous"
    },
    {
        latin: "aut",
        english: "or aut … aut either … or",
        info: "- conjunction",
        letter: "A",
        topic: "Conjunctions",
        set: 2,
        derivatives: "or (conjunction)"
    },
    {
        latin: "autem",
        english: "however, but",
        info: "- conjunction",
        letter: "A",
        topic: "Conjunctions",
        set: 2,
        hint: "Think of 'automatic (unrelated)'",
        derivatives: "automatic (unrelated)"
    },
    {
        latin: "auxilium",
        english: "help; (pl) auxiliary troops",
        info: "auxilii - noun",
        letter: "A",
        topic: "Military & War",
        set: 2,
        hint: "Think of 'auxiliaries'",
        derivatives: "auxiliary, auxiliaries"
    },
    {
        latin: "avidus",
        english: "greedy, eager",
        info: "avida, avidum - adjective",
        letter: "A",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "barbarus",
        english: "foreign, barbarian",
        info: "barbara - adjective",
        letter: "B",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "bellum",
        english: "war",
        info: "belli - noun",
        letter: "B",
        topic: "Military & War",
        set: 2,
        hint: "Think of 'belligerent'",
        derivatives: "belligerent, bellicose, rebel, antebellum"
    },
    {
        latin: "bene",
        english: "well",
        info: "- adverb",
        letter: "B",
        topic: "Adverbs",
        set: 2,
        hint: "Think of 'benefit'",
        derivatives: "benefit, benevolent, benediction, benign, bonus"
    },
    {
        latin: "beneficium",
        english: "kindness, service, favour",
        info: "beneficii - noun",
        letter: "B",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "benignus",
        english: "kind",
        info: "benigna - adjective",
        letter: "B",
        topic: "Quality & Character",
        set: 2,
        hint: "Think of 'benign'",
        derivatives: "benign, benignant"
    },
    {
        latin: "bibo",
        english: "drink",
        info: "bibere, bibi - verb",
        letter: "B",
        topic: "Miscellaneous",
        set: 2,
        hint: "Think of 'imbibe'",
        derivatives: "imbibe, beverage, bibulous"
    },
    {
        latin: "bis",
        english: "twice",
        info: "- adverb",
        letter: "B",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "bona",
        english: "goods, possessions, pl property",
        info: "bonorum - noun",
        letter: "B",
        topic: "Miscellaneous",
        set: 2
    },
    {
        latin: "bonus",
        english: "good",
        info: "bona, bonum - adjective",
        letter: "B",
        topic: "Quality & Character",
        set: 2,
        hint: "Think of 'bonus'",
        derivatives: "bonus, bonanza, bountiful, bounty"
    },
    {
        latin: "brevis",
        english: "short, brief",
        info: "breve - adjective",
        letter: "B",
        topic: "Size & Quantity",
        set: 3,
        hint: "Think of 'brevity'",
        derivatives: "brief, brevity, abbreviate, abridge"
    },
    {
        latin: "cado",
        english: "fall, perish",
        info: "cadere, cecidi - verb",
        letter: "C",
        topic: "Verbs of Motion",
        set: 3,
        hint: "Think of 'cadence'",
        derivatives: "cadence, cascade, accident, occasion, decay, case"
    },
    {
        latin: "caedes",
        english: "slaughter, killing, murder",
        info: "caedis - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'homicide'",
        derivatives: "homicide, suicide, regicide"
    },
    {
        latin: "caedo",
        english: "cut down, beat, kill",
        info: "caedere, cecidi - verb",
        letter: "C",
        topic: "Verbs of Fighting",
        set: 3,
        hint: "Think of 'incision'",
        derivatives: "incision, decide, precise, suicide, homicide, scissors"
    },
    {
        latin: "caelum",
        english: "sky, heaven",
        info: "caeli - noun",
        letter: "C",
        topic: "Religion & Ritual",
        set: 3,
        hint: "Think of 'celestial'",
        derivatives: "celestial, ceiling"
    },
    {
        latin: "campus",
        english: "plain, field, open space",
        info: "campi - noun",
        letter: "C",
        topic: "Nature & Landscape",
        set: 3,
        hint: "Think of 'camp'",
        derivatives: "camp, campus, campaign, champion"
    },
    {
        latin: "canis",
        english: "m/f dog 3",
        info: "canis - noun",
        letter: "C",
        topic: "Nature & Landscape",
        set: 3,
        hint: "Think of 'canine'",
        derivatives: "canine, canary"
    },
    {
        latin: "cano",
        english: "sing, sound, play (e.g.trumpet), sing of, celebrate",
        info: "canere, cecini - verb",
        letter: "C",
        topic: "Verbs of Speaking",
        set: 3,
        hint: "Think of 'chant'",
        derivatives: "chant, canticle, incantation, accent"
    },
    {
        latin: "capio",
        english: "take, catch, capture; captivate",
        info: "capere, cepi - verb",
        letter: "C",
        topic: "Verbs of Giving/Taking",
        set: 3,
        hint: "Think of 'capable'",
        derivatives: "capture, capable, capacity, captive, accept, receipt"
    },
    {
        latin: "captivus",
        english: "captive, prisoner",
        info: "captivi - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 3
    },
    {
        latin: "caput",
        english: "head; person, life; capital",
        info: "capitis - noun",
        letter: "C",
        topic: "The Body",
        set: 3,
        hint: "Think of 'captain'",
        derivatives: "capital, captain, chapter, decapitate, cap"
    },
    {
        latin: "carmen",
        english: "song, poem, spell",
        info: "carminis - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'charm'",
        derivatives: "charm, charming"
    },
    {
        latin: "carus",
        english: "dear, beloved; costly",
        info: "cara, carum - adjective",
        letter: "C",
        topic: "Quality & Character",
        set: 3,
        hint: "Think of 'charity'",
        derivatives: "charity, cherish, caress"
    },
    {
        latin: "castra",
        english: "camp pl",
        info: "castrorum - noun",
        letter: "C",
        topic: "Military & War",
        set: 3,
        hint: "Think of 'castle'",
        derivatives: "castle, castrate, caste"
    },
    {
        latin: "causa",
        english: "1 f cause, reason; case (in court) causam dico plead a case",
        info: "causae - noun",
        letter: "C",
        topic: "Abstract Concepts",
        set: 3,
        derivatives: "cause, because, accuse, excuse, accusation"
    },
    {
        latin: "caveo",
        english: "beware (of), take care",
        info: "cavere, cavi - verb",
        letter: "C",
        topic: "Verbs of Giving/Taking",
        set: 3,
        hint: "Think of 'caution'",
        derivatives: "caution, cautious, precaution"
    },
    {
        latin: "cedo",
        english: "yield, give up, (in compounds) go",
        info: "cedere, cessi - verb",
        letter: "C",
        topic: "Verbs of Giving/Taking",
        set: 3,
        hint: "Think of 'cede'",
        derivatives: "cede, precede, proceed, succeed, recede, access, exceed"
    },
    {
        latin: "celer",
        english: "quick",
        info: "celeris, celere - adjective",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'accelerate'",
        derivatives: "accelerate, celerity"
    },
    {
        latin: "celo",
        english: "hide, conceal",
        info: "celare, celavi - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'ceiling'",
        derivatives: "conceal, ceiling"
    },
    {
        latin: "cena",
        english: "dinner, meal",
        info: "cenae - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'cenacle (dining room)'",
        derivatives: "cenacle (dining room)"
    },
    {
        latin: "ceno",
        english: "dine",
        info: "cenare, cenavi - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 3
    },
    {
        latin: "centum",
        english: "100",
        info: "- numeral",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'century'",
        derivatives: "century, cent, percent, centennial, centipede"
    },
    {
        latin: "centurio",
        english: "centurion",
        info: "centurionis - noun",
        letter: "C",
        topic: "Military & War",
        set: 3
    },
    {
        latin: "cerno",
        english: "see, perceive; decree",
        info: "cernere, crevi - verb",
        letter: "C",
        topic: "Verbs of Perception",
        set: 3,
        hint: "Think of 'discern'",
        derivatives: "discern, concern, certain, decree, secrete"
    },
    {
        latin: "certamen",
        english: "contest, battle, struggle",
        info: "certaminis - noun",
        letter: "C",
        topic: "Military & War",
        set: 3
    },
    {
        latin: "certus",
        english: "certain, sure, fixed",
        info: "certa, certum - adjective",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'certify'",
        derivatives: "certain, certify, certificate, ascertain"
    },
    {
        latin: "ceteri",
        english: "the rest, the other(s) pl",
        info: "ceterae, cetera pron / - adjective",
        letter: "C",
        topic: "Size & Quantity",
        set: 3,
        hint: "Think of 'et cetera'",
        derivatives: "et cetera"
    },
    {
        latin: "cibus",
        english: "food",
        info: "cibi - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        derivatives: "ciborium (food container)"
    },
    {
        latin: "cingo",
        english: "surround, encircle, gird; pass lie round",
        info: "cingere, cinxi - verb",
        letter: "C",
        topic: "Verbs of Motion",
        set: 3
    },
    {
        latin: "circa/circum",
        english: "around, about",
        info: "+ acc - preposition",
        letter: "C",
        topic: "Prepositions",
        set: 3
    },
    {
        latin: "circumdo",
        english: "surround (X acc) dedi, -datum with (Y abl), put (Y acc) round",
        info: "circumdare, - - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 3
    },
    {
        latin: "civis",
        english: "m/f citizen 3",
        info: "civis - noun",
        letter: "C",
        topic: "Government & Politics",
        set: 3,
        hint: "Think of 'civil'",
        derivatives: "civil, citizen, civic, civilize, civilization"
    },
    {
        latin: "civitas",
        english: "citizenship, state, city, tribe",
        info: "civitatis - noun",
        letter: "C",
        topic: "Government & Politics",
        set: 3
    },
    {
        latin: "clades",
        english: "disaster, loss, defeat",
        info: "cladis - noun",
        letter: "C",
        topic: "Military & War",
        set: 3,
        hint: "Think of 'clade (biology)'",
        derivatives: "clade (biology)"
    },
    {
        latin: "clam",
        english: "secretly",
        info: "- adverb",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'clandestine'",
        derivatives: "clandestine"
    },
    {
        latin: "clamo",
        english: "shout, exclaim, clamavi, proclaim",
        info: "clamare - verb",
        letter: "C",
        topic: "Verbs of Speaking",
        set: 3,
        derivatives: "claim, exclaim, proclaim, clamor, acclaim, declaim"
    },
    {
        latin: "clamor",
        english: "shout, shouting, uproar, noise",
        info: "clamoris - noun",
        letter: "C",
        topic: "Abstract Concepts",
        set: 3,
        hint: "Think of 'clandestine'",
        derivatives: "clandestine"
    },
    {
        latin: "clarus",
        english: "clear, famous, distinguished",
        info: "clara, clarum - adjective",
        letter: "C",
        topic: "Quality & Character",
        set: 3
    },
    {
        latin: "classis",
        english: "fleet; class",
        info: "classis - noun",
        letter: "C",
        topic: "Military & War",
        set: 3
    },
    {
        latin: "claudo",
        english: "close, shut (in), confine, blockade",
        info: "claudere, clausi - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'conclude'",
        derivatives: "close, conclude, exclude, include, clause, closet"
    },
    {
        latin: "cogito",
        english: "think, consider",
        info: "cogitare - verb",
        letter: "C",
        topic: "Verbs of Thinking",
        set: 3,
        hint: "Think of 'cogitate'",
        derivatives: "cogitate, cogitation"
    },
    {
        latin: "cognosco",
        english: "get to know, find out, cognovi, learn",
        info: "cognoscere - verb",
        letter: "C",
        topic: "Verbs of Perception",
        set: 3,
        hint: "Think of 'cognition'",
        derivatives: "cognition, recognize, cognizant, incognito"
    },
    {
        latin: "cogo",
        english: "force, compel, drive, assemble",
        info: "cogere, coegi - verb",
        letter: "C",
        topic: "Verbs of Ruling",
        set: 3,
        hint: "Think of 'cogent'",
        derivatives: "cogent, coagulate"
    },
    {
        latin: "cohors",
        english: "cohort, company",
        info: "cohortis - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 3
    },
    {
        latin: "colligo",
        english: "collect, assemble",
        info: "colligere, collegi - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        derivatives: "collect, collection, recollect"
    },
    {
        latin: "collis",
        english: "hill",
        info: "collis - noun",
        letter: "C",
        topic: "Nature & Landscape",
        set: 3
    },
    {
        latin: "colo",
        english: "cultivate, worship, honour",
        info: "colere, colui - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 3,
        hint: "Think of 'colony'",
        derivatives: "colony, cultivate, culture, agriculture"
    },
    {
        latin: "comes",
        english: "m/f companion, comrade 3",
        info: "comitis - noun",
        letter: "C",
        topic: "Family & People",
        set: 3,
        hint: "Think of 'count'",
        derivatives: "count, county, accompany"
    },
    {
        latin: "committo",
        english: "commit, fight, begin commisi",
        info: "committere - verb",
        letter: "C",
        topic: "Verbs of Making/Doing",
        set: 3,
        hint: "Think of 'commission'",
        derivatives: "commit, commission, committee"
    },
    {
        latin: "commodus",
        english: "convenient, suitable commodum",
        info: "commoda - adjective",
        letter: "C",
        topic: "Miscellaneous",
        set: 3
    },
    {
        latin: "comparo",
        english: "prepare, provide, comparavi, obtain; compare",
        info: "comparare - verb",
        letter: "C",
        topic: "Verbs of Making/Doing",
        set: 4,
        hint: "Think of 'comparison'",
        derivatives: "compare, comparison"
    },
    {
        latin: "compleo",
        english: "fill",
        info: "complere - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4,
        hint: "Think of 'complete'",
        derivatives: "complete, complement, comply"
    },
    {
        latin: "condemno",
        english: "convict, condemn avi, -atum",
        info: "condemnare, - - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "condo",
        english: "found, establish, compose; hide",
        info: "condere, condidi - verb",
        letter: "C",
        topic: "Verbs of Making/Doing",
        set: 4,
        hint: "Think of 'condition'",
        derivatives: "condition, abscond, recondite"
    },
    {
        latin: "confero",
        english: "collect, compare; contribute, bestow",
        info: "conferre, contuli - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "conficio",
        english: "finish, complete; confeci, wear out",
        info: "conficere - verb",
        letter: "C",
        topic: "Verbs of Making/Doing",
        set: 4,
        hint: "Think of 'confection'",
        derivatives: "confection, confetti"
    },
    {
        latin: "confido",
        english: "trust, believe, have confidence (in)",
        info: "confidere - verb",
        letter: "C",
        topic: "Verbs of Thinking",
        set: 4
    },
    {
        latin: "coniunx",
        english: "m/f husband, wife, spouse 3",
        info: "coniugis - noun",
        letter: "C",
        topic: "Family & People",
        set: 4,
        hint: "Think of 'conjugal'",
        derivatives: "conjugal, conjunction"
    },
    {
        latin: "coniuratio",
        english: "conspiracy, plot",
        info: "coniurationis - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "conor",
        english: "try",
        info: "conari, conatus - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4,
        hint: "Think of 'conation (psychology)'",
        derivatives: "conation (psychology)"
    },
    {
        latin: "consilium",
        english: "plan, advice, idea; council; prudence consilium capio form a plan, adopt a plan, decide",
        info: "consilii - noun",
        letter: "C",
        topic: "Abstract Concepts",
        set: 4,
        hint: "Think of 'counsel'",
        derivatives: "counsel, council, consultant"
    },
    {
        latin: "consisto",
        english: "halt, stand, stand firm",
        info: "consistere - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "conspicio",
        english: "catch sight of, notice, conspexi, observe, see",
        info: "conspicere - verb",
        letter: "C",
        topic: "Verbs of Perception",
        set: 4,
        hint: "Think of 'conspicuous'",
        derivatives: "conspicuous, perspective"
    },
    {
        latin: "constat",
        english: "it is agreed",
        info: "constare - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "constituo",
        english: "decide, establish constitui",
        info: "constituere - verb",
        letter: "C",
        topic: "Verbs of Thinking",
        set: 4,
        hint: "Think of 'constitute'",
        derivatives: "constitute, constitution, constituent"
    },
    {
        latin: "consul",
        english: "consul",
        info: "consulis - noun",
        letter: "C",
        topic: "Government & Politics",
        set: 4,
        derivatives: "consul, consulate, consult"
    },
    {
        latin: "consulo",
        english: "consult, consider, consului, advise",
        info: "consulere - verb",
        letter: "C",
        topic: "Verbs of Thinking",
        set: 4,
        hint: "Think of 'consulate'",
        derivatives: "consul, consulate, consult"
    },
    {
        latin: "consumo",
        english: "eat, consume; spend consumpsi",
        info: "consumere - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "contendo",
        english: "hurry, march; contendi, contend, fight",
        info: "contendere - verb",
        letter: "C",
        topic: "Verbs of Motion",
        set: 4,
        hint: "Think of 'content'",
        derivatives: "contend, content, contest"
    },
    {
        latin: "contentus",
        english: "contented, satisfied",
        info: "contenta - adjective",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "contra",
        english: "against",
        info: "+ acc - preposition",
        letter: "C",
        topic: "Prepositions",
        set: 4,
        hint: "Think of 'contrary'",
        derivatives: "contrary, contrast, contradict, control"
    },
    {
        latin: "convenio",
        english: "come together, meet; conveni, be settled",
        info: "convenire - verb",
        letter: "C",
        topic: "Verbs of Motion",
        set: 4,
        hint: "Think of 'convene'",
        derivatives: "convene, convention, convenient, convent"
    },
    {
        latin: "convoco",
        english: "call together, convocavi, assemble, summon",
        info: "convocare - verb",
        letter: "C",
        topic: "Verbs of Speaking",
        set: 4
    },
    {
        latin: "copiae",
        english: "forces, troops; pl supplies",
        info: "copiarum - noun",
        letter: "C",
        topic: "Military & War",
        set: 4
    },
    {
        latin: "cornu",
        english: "horn; wing of an army",
        info: "cornus - noun",
        letter: "C",
        topic: "Military & War",
        set: 4
    },
    {
        latin: "corpus",
        english: "body",
        info: "corporis - noun",
        letter: "C",
        topic: "The Body",
        set: 4,
        hint: "Think of 'corpse'",
        derivatives: "corpse, corporation, corporal, incorporate, corps"
    },
    {
        latin: "corripio",
        english: "seize, carry off corripui",
        info: "corripere - verb",
        letter: "C",
        topic: "Verbs of Giving/Taking",
        set: 4,
        hint: "Think of 'corrupt (related)'",
        derivatives: "corrupt (related)"
    },
    {
        latin: "corrumpo",
        english: "spoil, destroy, corrupt",
        info: "corrumpere - verb",
        letter: "C",
        topic: "Verbs of Making/Doing",
        set: 4
    },
    {
        latin: "cotidie",
        english: "every day, daily",
        info: "- adverb",
        letter: "C",
        topic: "Time & Seasons",
        set: 4,
        hint: "Think of 'quotidian'",
        derivatives: "quotidian"
    },
    {
        latin: "cras",
        english: "tomorrow",
        info: "- adverb",
        letter: "C",
        topic: "Time & Seasons",
        set: 4,
        hint: "Think of 'procrastinate'",
        derivatives: "procrastinate"
    },
    {
        latin: "credo",
        english: "believe, trust (+ dat); entrust",
        info: "credere, credidi - verb",
        letter: "C",
        topic: "Verbs of Thinking",
        set: 4,
        hint: "Think of 'credit'",
        derivatives: "credit, credible, creed, incredible, credence"
    },
    {
        latin: "crimen",
        english: "accusation, charge, crime",
        info: "criminis - noun",
        letter: "C",
        topic: "Abstract Concepts",
        set: 4,
        hint: "Think of 'criminal'",
        derivatives: "crime, criminal, incriminate"
    },
    {
        latin: "crudelis",
        english: "cruel",
        info: "crudele - adjective",
        letter: "C",
        topic: "Quality & Character",
        set: 4,
        derivatives: "cruel, cruelty"
    },
    {
        latin: "crudelitas",
        english: "cruelty",
        info: "crudelitatis - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "cubiculum",
        english: "bedroom",
        info: "cubiculi - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "culpa",
        english: "fault, blame",
        info: "culpae - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 4,
        hint: "Think of 'culpable'",
        derivatives: "culpable, culprit, exculpate"
    },
    {
        latin: "culpo",
        english: "blame",
        info: "culpare, culpavi - verb",
        letter: "C",
        topic: "Verbs of Speaking",
        set: 4
    },
    {
        latin: "cum (1)",
        english: "when, since, although",
        info: "- conjunction",
        letter: "C",
        topic: "Conjunctions",
        set: 4,
        hint: "Think of 'combine'",
        derivatives: "combine, companion, company"
    },
    {
        latin: "cum (2)",
        english: "with",
        info: "+ abl - preposition",
        letter: "C",
        topic: "Prepositions",
        set: 4,
        hint: "Think of 'combine'",
        derivatives: "combine, companion, company"
    },
    {
        latin: "cunctus",
        english: "all, whole",
        info: "cuncta, cunctum - adjective",
        letter: "C",
        topic: "Size & Quantity",
        set: 4
    },
    {
        latin: "cupidus",
        english: "eager, greedy",
        info: "cupida, cupidum - adjective",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "cupio",
        english: "want, wish, desire",
        info: "cupere, cupivi - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4,
        hint: "Think of 'cupid'",
        derivatives: "cupid, cupidity, covet, concupiscence"
    },
    {
        latin: "cur",
        english: "why?",
        info: "? - adverb",
        letter: "C",
        topic: "Adverbs",
        set: 4
    },
    {
        latin: "cura",
        english: "1 f care, worry, anxiety; charge",
        info: "curae - noun",
        letter: "C",
        topic: "Emotions & Mind",
        set: 4,
        hint: "Think of 'cure'",
        derivatives: "cure, curator, curious, accurate, secure"
    },
    {
        latin: "curo",
        english: "care for, cure; (+ gerundive) get (something) done, see to",
        info: "curare, curavi - verb",
        letter: "C",
        topic: "Verbs of Perception",
        set: 4
    },
    {
        latin: "curro",
        english: "run",
        info: "currere, cucurri - verb",
        letter: "C",
        topic: "Verbs of Motion",
        set: 4,
        hint: "Think of 'current'",
        derivatives: "current, cursor, occur, recur, excursion"
    },
    {
        latin: "currus",
        english: "chariot",
        info: "currus - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 4
    },
    {
        latin: "cursus",
        english: "running, course, race",
        info: "cursus - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 4,
        hint: "Think of 'cursor'",
        derivatives: "course, cursor, cursory, curriculum"
    },
    {
        latin: "custodio",
        english: "guard",
        info: "custodire - verb",
        letter: "C",
        topic: "Miscellaneous",
        set: 4,
        hint: "Think of 'custody'",
        derivatives: "custody, custodian"
    },
    {
        latin: "custos",
        english: "m/f guard 3",
        info: "custodis - noun",
        letter: "C",
        topic: "Miscellaneous",
        set: 4,
        hint: "Think of 'custody'",
        derivatives: "custody, custodian"
    },
    {
        latin: "de",
        english: "from, down from; prefix about; (in compounds) down",
        info: "+ abl, or as - preposition",
        letter: "D",
        topic: "Prepositions",
        set: 5,
        hint: "Think of 'descend'",
        derivatives: "descend, depart, decline"
    },
    {
        latin: "dea",
        english: "goddess",
        info: "deae - noun",
        letter: "D",
        topic: "Religion & Ritual",
        set: 5
    },
    {
        latin: "debeo",
        english: "owe, ought, should, must",
        info: "debere, debui - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'debit'",
        derivatives: "debit, debt, due, duty"
    },
    {
        latin: "decem",
        english: "ten",
        info: "- numeral",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "decido",
        english: "fall down",
        info: "decidere, decidi - verb",
        letter: "D",
        topic: "Verbs of Motion",
        set: 5
    },
    {
        latin: "decimus",
        english: "tenth decimum",
        info: "decima - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "decipio",
        english: "deceive",
        info: "decipere, decepi - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "decorus",
        english: "fitting, handsome, noble",
        info: "decora, decorum - adjective",
        letter: "D",
        topic: "Quality & Character",
        set: 5
    },
    {
        latin: "dedo",
        english: "give up, surrender",
        info: "dedere, dedidi - verb",
        letter: "D",
        topic: "Verbs of Giving/Taking",
        set: 5
    },
    {
        latin: "defendo",
        english: "defend",
        info: "defendere - verb",
        letter: "D",
        topic: "Verbs of Fighting",
        set: 5,
        hint: "Think of 'defense'",
        derivatives: "defend, defense, defensive, fence"
    },
    {
        latin: "defessus",
        english: "tired",
        info: "defessa - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "deicio",
        english: "throw down",
        info: "deicere, deieci - verb",
        letter: "D",
        topic: "Verbs of Fighting",
        set: 5
    },
    {
        latin: "deinde/dein",
        english: "then, next, afterwards",
        info: "- adverb",
        letter: "D",
        topic: "Adverbs",
        set: 5
    },
    {
        latin: "deleo",
        english: "destroy",
        info: "delere, delevi - verb",
        letter: "D",
        topic: "Verbs of Making/Doing",
        set: 5,
        hint: "Think of 'delete'",
        derivatives: "delete, deletion, indelible"
    },
    {
        latin: "deligo",
        english: "choose, select",
        info: "deligere, delegi - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'delegate'",
        derivatives: "delegate, diligent"
    },
    {
        latin: "denique",
        english: "at last, finally, in short",
        info: "- adverb",
        letter: "D",
        topic: "Adverbs",
        set: 5
    },
    {
        latin: "densus",
        english: "thick, dense, crowded",
        info: "densa, densum - adjective",
        letter: "D",
        topic: "Size & Quantity",
        set: 5
    },
    {
        latin: "depono",
        english: "put down, lay aside",
        info: "deponere - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "descendo",
        english: "descend, go down, descendi, come down",
        info: "descendere - verb",
        letter: "D",
        topic: "Verbs of Motion",
        set: 5,
        hint: "Think of 'descent'",
        derivatives: "descend, descent, descendant"
    },
    {
        latin: "desino",
        english: "cease desi(v)i",
        info: "desinere - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "desisto",
        english: "leave off, cease",
        info: "desistere, destiti - verb",
        letter: "D",
        topic: "Verbs of Motion",
        set: 5
    },
    {
        latin: "despero",
        english: "despair",
        info: "desperare - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'desperate'",
        derivatives: "despair, desperate, desperation"
    },
    {
        latin: "deus",
        english: "god, deity",
        info: "dei - noun",
        letter: "D",
        topic: "Religion & Ritual",
        set: 5,
        hint: "Think of 'divine'",
        derivatives: "deity, divine, deify, deism"
    },
    {
        latin: "dexter",
        english: "right, on the right, right hand",
        info: "dextra, dextrum - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'dexterity'",
        derivatives: "dexterity, dexterous, ambidextrous"
    },
    {
        latin: "dextra",
        english: "1 f right hand, right side",
        info: "dextrae - noun",
        letter: "D",
        topic: "Government & Politics",
        set: 5
    },
    {
        latin: "dico",
        english: "say, speak, tell",
        info: "dicere, dixi - verb",
        letter: "D",
        topic: "Verbs of Speaking",
        set: 5,
        hint: "Think of 'dictate'",
        derivatives: "dictate, predict, contradict, verdict, dictionary, diction"
    },
    {
        latin: "dies",
        english: "m/f day 5",
        info: "diei - noun",
        letter: "D",
        topic: "Time & Seasons",
        set: 5,
        hint: "Think of 'diary'",
        derivatives: "diary, dial, diurnal, quotidian, meridian"
    },
    {
        latin: "difficilis",
        english: "difficult",
        info: "difficile - adjective",
        letter: "D",
        topic: "Quality & Character",
        set: 5,
        derivatives: "difficult, difficulty"
    },
    {
        latin: "dignitas",
        english: "rank, dignity, importance, honour",
        info: "dignitatis - noun",
        letter: "D",
        topic: "Abstract Concepts",
        set: 5
    },
    {
        latin: "dignus",
        english: "worthy, deserving",
        info: "digna, dignum - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'dignity'",
        derivatives: "dignity, dignify, indignant, condign, dignitary"
    },
    {
        latin: "diligens",
        english: "careful, diligent",
        info: "gen diligentis - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "diligenter",
        english: "carefully",
        info: "- adverb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "dimitto",
        english: "dismiss, scatter",
        info: "dimittere, dimisi - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'demit'",
        derivatives: "dismiss, demit"
    },
    {
        latin: "dirus",
        english: "dreadful",
        info: "dira, dirum - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "discedo",
        english: "dep art, leave",
        info: "discedere - verb",
        letter: "D",
        topic: "Verbs of Motion",
        set: 5,
        hint: "Think of 'secede'",
        derivatives: "secede, secession"
    },
    {
        latin: "disco",
        english: "learn",
        info: "discere, didici - verb",
        letter: "D",
        topic: "Verbs of Perception",
        set: 5,
        hint: "Think of 'disciple'",
        derivatives: "disciple, discipline, discotheque"
    },
    {
        latin: "dissimilis",
        english: "different",
        info: "dissimile - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "diu",
        english: "for a long time sup diutissime",
        info: "comp diutius - adverb",
        letter: "D",
        topic: "Time & Seasons",
        set: 5,
        derivatives: "duration (related)"
    },
    {
        latin: "dives",
        english: "rich",
        info: "gen divitis - adjective",
        letter: "D",
        topic: "Quality & Character",
        set: 5
    },
    {
        latin: "divido",
        english: "divide, separate",
        info: "dividere, divisi - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'division'",
        derivatives: "divide, division, dividend"
    },
    {
        latin: "divitiae",
        english: "riches, wealth pl",
        info: "divitiarum - noun",
        letter: "D",
        topic: "Wealth & Trade",
        set: 5
    },
    {
        latin: "divus",
        english: "god, f goddess",
        info: "diva, divum adj 2-1-2 divine; m as - noun",
        letter: "D",
        topic: "Religion & Ritual",
        set: 5
    },
    {
        latin: "do",
        english: "give",
        info: "dare, dedi, datum - verb",
        letter: "D",
        topic: "Verbs of Giving/Taking",
        set: 5,
        hint: "Think of 'data'",
        derivatives: "data, date, donate, edition, add, tradition"
    },
    {
        latin: "doceo",
        english: "teach, inform",
        info: "docere, docui - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'doctor'",
        derivatives: "doctor, doctrine, document, docile, indoctrinate"
    },
    {
        latin: "doctus",
        english: "learned, educated, skilful, clever",
        info: "docta, doctum - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "doleo",
        english: "hurt, be in pain, lament",
        info: "dolere, dolui - verb",
        letter: "D",
        topic: "Verbs of Being",
        set: 5,
        hint: "Think of 'doleful'",
        derivatives: "doleful, condolence, indolent, dolor"
    },
    {
        latin: "dolor",
        english: "pain, grief, sorrow, anger",
        info: "doloris - noun",
        letter: "D",
        topic: "Emotions & Mind",
        set: 5
    },
    {
        latin: "dolus",
        english: "trick, fraud",
        info: "doli - noun",
        letter: "D",
        topic: "Miscellaneous",
        set: 5
    },
    {
        latin: "domina",
        english: "mistress",
        info: "dominae - noun",
        letter: "D",
        topic: "Miscellaneous",
        set: 5,
        hint: "Think of 'dame'",
        derivatives: "dame, madam, dominatrix"
    },
    {
        latin: "dominus",
        english: "master",
        info: "domini - noun",
        letter: "D",
        topic: "Family & People",
        set: 5,
        hint: "Think of 'dominate'",
        derivatives: "dominate, domain, dominant, dominion, lord"
    },
    {
        latin: "domus",
        english: "house, home at home)",
        info: "domus (domi = - noun",
        letter: "D",
        topic: "Buildings & Places",
        set: 6,
        hint: "Think of 'domestic'",
        derivatives: "domestic, domicile, dome, domain"
    },
    {
        latin: "donec",
        english: "until",
        info: "- conjunction",
        letter: "D",
        topic: "Conjunctions",
        set: 6
    },
    {
        latin: "donum",
        english: "gift, present",
        info: "doni - noun",
        letter: "D",
        topic: "Wealth & Trade",
        set: 6,
        hint: "Think of 'donate'",
        derivatives: "donate, donor, pardon, condone, donation"
    },
    {
        latin: "dormio",
        english: "sleep",
        info: "dormire - verb",
        letter: "D",
        topic: "Miscellaneous",
        set: 6,
        hint: "Think of 'dormant'",
        derivatives: "dormant, dormitory"
    },
    {
        latin: "dubito",
        english: "doubt, hesitate",
        info: "dubitare - verb",
        letter: "D",
        topic: "Verbs of Thinking",
        set: 6,
        hint: "Think of 'dubious'",
        derivatives: "doubt, dubious, indubitable"
    },
    {
        latin: "dubius",
        english: "doubtful, wavering, uncertain in dubio in doubt",
        info: "dubia, dubium - adjective",
        letter: "D",
        topic: "Miscellaneous",
        set: 6
    },
    {
        latin: "ducenti",
        english: "200 ducenta",
        info: "ducentae - numeral",
        letter: "D",
        topic: "Miscellaneous",
        set: 6
    },
    {
        latin: "duco",
        english: "lead, take; marry; consider",
        info: "ducere, duxi - verb",
        letter: "D",
        topic: "Verbs of Thinking",
        set: 6,
        hint: "Think of 'conduct'",
        derivatives: "conduct, produce, reduce, educate, duke, duct"
    },
    {
        latin: "dulcis",
        english: "sweet, pleasant",
        info: "dulce - adjective",
        letter: "D",
        topic: "Quality & Character",
        set: 6,
        hint: "Think of 'dulcet'",
        derivatives: "dulcet, dulcify"
    },
    {
        latin: "dum",
        english: "while, until, provided that",
        info: "- conjunction",
        letter: "D",
        topic: "Conjunctions",
        set: 6,
        hint: "Think of 'during (related)'",
        derivatives: "during (related)"
    },
    {
        latin: "dummodo",
        english: "provided that, so long as",
        info: "- conjunction",
        letter: "D",
        topic: "Conjunctions",
        set: 6
    },
    {
        latin: "duo",
        english: "two",
        info: "duae, duo - numeral",
        letter: "D",
        topic: "Miscellaneous",
        set: 6,
        hint: "Think of 'dual'",
        derivatives: "dual, duet, duplicate, duo"
    },
    {
        latin: "duodecim",
        english: "twelve",
        info: "- numeral",
        letter: "D",
        topic: "Miscellaneous",
        set: 6
    },
    {
        latin: "duodeviginti",
        english: "eighteen",
        info: "- numeral",
        letter: "D",
        topic: "Miscellaneous",
        set: 6
    },
    {
        latin: "durus",
        english: "hard, harsh, rough",
        info: "dura, durum - adjective",
        letter: "D",
        topic: "Quality & Character",
        set: 6,
        hint: "Think of 'durable'",
        derivatives: "durable, duration, endure, obdurate, during"
    },
    {
        latin: "dux",
        english: "leader, general, ruler",
        info: "ducis - noun",
        letter: "D",
        topic: "Military & War",
        set: 6,
        hint: "Think of 'duke'",
        derivatives: "duke, duchess, conduct, duct"
    },
    {
        latin: "e/ex",
        english: "from, out of; (in prefix compounds) out",
        info: "+ abl, or as - preposition",
        letter: "E",
        topic: "Prepositions",
        set: 6
    },
    {
        latin: "ecce",
        english: "see! look! behold! here is …!",
        info: "! - interjection",
        letter: "E",
        topic: "Miscellaneous",
        set: 6
    },
    {
        latin: "edo",
        english: "eat",
        info: "(1: short e) esse, edi, esum - verb",
        letter: "E",
        topic: "Miscellaneous",
        set: 6,
        hint: "Think of 'edible'",
        derivatives: "edible, eat"
    },
    {
        latin: "edo",
        english: "give out, bring forth, cause",
        info: "(2: long e) edere, edidi - verb",
        letter: "E",
        topic: "Verbs of Giving/Taking",
        set: 6,
        hint: "Think of 'edible'",
        derivatives: "edible, eat"
    },
    {
        latin: "efficio",
        english: "carry out, accomplish",
        info: "efficere, effeci - verb",
        letter: "E",
        topic: "Verbs of Giving/Taking",
        set: 6,
        hint: "Think of 'effect'",
        derivatives: "effect, efficient, efficacy"
    },
    {
        latin: "effugio",
        english: "escape",
        info: "effugere, effugi - verb",
        letter: "E",
        topic: "Verbs of Motion",
        set: 6
    },
    {
        latin: "egeo",
        english: "need, lack, be in want of (+ gen or abl) egi",
        info: "egere, egui - verb",
        letter: "E",
        topic: "Verbs of Being",
        set: 6
    },
    {
        latin: "ego",
        english: "I, me",
        info: "gen mei - pronoun",
        letter: "E",
        topic: "Pronouns",
        set: 6,
        hint: "Think of 'ego'",
        derivatives: "ego, egotist, egocentric"
    },
    {
        latin: "egredior",
        english: "go out, come out",
        info: "egredi, egressus - verb",
        letter: "E",
        topic: "Verbs of Motion",
        set: 6
    },
    {
        latin: "eicio",
        english: "throw out",
        info: "eicere, eieci - verb",
        letter: "E",
        topic: "Verbs of Fighting",
        set: 6
    },
    {
        latin: "emo",
        english: "buy",
        info: "emere, emi - verb",
        letter: "E",
        topic: "Miscellaneous",
        set: 6,
        hint: "Think of 'exempt'",
        derivatives: "exempt, redeem, premium"
    },
    {
        latin: "enim",
        english: "for",
        info: "- conjunction",
        letter: "E",
        topic: "Conjunctions",
        set: 6
    },
    {
        latin: "eo (1)",
        english: "go obviam eo (go to) meet; oppose, resist",
        info: "ire, i(v)i - verb",
        letter: "E",
        topic: "Verbs of Fighting",
        set: 6,
        hint: "Think of 'exit'",
        derivatives: "exit, transit, initial, ambient, itinerary"
    },
    {
        latin: "eo (2)",
        english: "to there, to that place, thither; so much; for this reason",
        info: "- adverb",
        letter: "E",
        topic: "Adverbs",
        set: 6,
        hint: "Think of 'exit'",
        derivatives: "exit, transit, initial, ambient, itinerary"
    },
    {
        latin: "epistula",
        english: "letter",
        info: "epistulae - noun",
        letter: "E",
        topic: "Abstract Concepts",
        set: 6,
        hint: "Think of 'epistle'",
        derivatives: "epistle, epistolary"
    },
    {
        latin: "eques",
        english: "knight, horseman, man of equestrian rank, pl cavalry",
        info: "equitis - noun",
        letter: "E",
        topic: "Military & War",
        set: 6,
        hint: "Think of 'equine'",
        derivatives: "equestrian, equine"
    },
    {
        latin: "equus",
        english: "horse",
        info: "equi - noun",
        letter: "E",
        topic: "Nature & Landscape",
        set: 6,
        hint: "Think of 'equine'",
        derivatives: "equine, equestrian, equitation"
    },
    {
        latin: "erga",
        english: "towards",
        info: "+ acc - preposition",
        letter: "E",
        topic: "Prepositions",
        set: 6
    },
    {
        latin: "ergo",
        english: "therefore",
        info: "- adverb",
        letter: "E",
        topic: "Adverbs",
        set: 6,
        derivatives: "ergo (therefore)"
    },
    {
        latin: "erro",
        english: "wander, make a mistake",
        info: "errare, erravi - verb",
        letter: "E",
        topic: "Verbs of Making/Doing",
        set: 6,
        hint: "Think of 'error'",
        derivatives: "error, errant, erratic, aberration, err"
    },
    {
        latin: "erumpo",
        english: "burst forth, break out",
        info: "erumpere, erupi - verb",
        letter: "E",
        topic: "Verbs of Making/Doing",
        set: 6
    },
    {
        latin: "et",
        english: "and",
        info: "- conjunction",
        letter: "E",
        topic: "Conjunctions",
        set: 6
    },
    {
        latin: "etiam",
        english: "also, even, still",
        info: "- adverb",
        letter: "E",
        topic: "Adverbs",
        set: 6,
        hint: "Think of 'et cetera'",
        derivatives: "et cetera"
    },
    {
        latin: "etsi",
        english: "although",
        info: "- conjunction",
        letter: "E",
        topic: "Conjunctions",
        set: 6
    },
    {
        latin: "evado",
        english: "go out; escape, avoid",
        info: "evadere, evasi - verb",
        letter: "E",
        topic: "Verbs of Motion",
        set: 6
    },
    {
        latin: "evenio",
        english: "come out; turn out, come about",
        info: "evenire, eveni - verb",
        letter: "E",
        topic: "Verbs of Motion",
        set: 6
    },
    {
        latin: "excipio",
        english: "receive, take, welcome",
        info: "excipere, excepi - verb",
        letter: "E",
        topic: "Verbs of Giving/Taking",
        set: 6,
        hint: "Think of 'except'",
        derivatives: "except, exception"
    },
    {
        latin: "excito",
        english: "wake, rouse, excite excitavi",
        info: "excitare - verb",
        letter: "E",
        topic: "Miscellaneous",
        set: 6
    },
    {
        latin: "exemplum",
        english: "example, precedent, model",
        info: "exempli - noun",
        letter: "E",
        topic: "Abstract Concepts",
        set: 6,
        hint: "Think of 'exemplary'",
        derivatives: "example, exemplary, exemplify"
    },
    {
        latin: "exeo",
        english: "go out, go away",
        info: "exire, exii - verb",
        letter: "E",
        topic: "Verbs of Motion",
        set: 6
    },
    {
        latin: "exercitus",
        english: "army",
        info: "exercitus - noun",
        letter: "E",
        topic: "Military & War",
        set: 6,
        hint: "Think of 'exercise'",
        derivatives: "exercise, army"
    },
    {
        latin: "exilium",
        english: "exile",
        info: "exilii - noun",
        letter: "E",
        topic: "Miscellaneous",
        set: 6
    },
    {
        latin: "exitium",
        english: "ruin, destruction",
        info: "exitii - noun",
        letter: "E",
        topic: "Miscellaneous",
        set: 6
    },
    {
        latin: "expello",
        english: "drive out",
        info: "expellere, expuli - verb",
        letter: "E",
        topic: "Miscellaneous",
        set: 6,
        hint: "Think of 'expel'",
        derivatives: "expel, expulsion"
    },
    {
        latin: "exspecto",
        english: "wait for, expect",
        info: "exspectare - verb",
        letter: "E",
        topic: "Verbs of Thinking",
        set: 7,
        derivatives: "expect, expectation"
    },
    {
        latin: "extra",
        english: "outside, beyond",
        info: "+ acc - preposition",
        letter: "E",
        topic: "Prepositions",
        set: 7
    },
    {
        latin: "fabula",
        english: "story, play",
        info: "fabulae - noun",
        letter: "F",
        topic: "Abstract Concepts",
        set: 7,
        hint: "Think of 'fable'",
        derivatives: "fable, fabulous, confabulate"
    },
    {
        latin: "facilis",
        english: "easy",
        info: "facile - adjective",
        letter: "F",
        topic: "Quality & Character",
        set: 7,
        hint: "Think of 'facile'",
        derivatives: "facile, facility, facilitate, difficult"
    },
    {
        latin: "facinus",
        english: "crime, outrage, deed",
        info: "facinoris - noun",
        letter: "F",
        topic: "Abstract Concepts",
        set: 7
    },
    {
        latin: "facio",
        english: "make, do",
        info: "facere, feci - verb",
        letter: "F",
        topic: "Verbs of Making/Doing",
        set: 7,
        hint: "Think of 'fact'",
        derivatives: "fact, factory, manufacture, affect, effect, perfect"
    },
    {
        latin: "factum",
        english: "deed, action",
        info: "facti - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 7
    },
    {
        latin: "fallo",
        english: "deceive, cheat; escape notice",
        info: "fallere, fefelli - verb",
        letter: "F",
        topic: "Verbs of Motion",
        set: 7,
        hint: "Think of 'false'",
        derivatives: "false, fallacy, fallible, fail, fault"
    },
    {
        latin: "falsus",
        english: "false, mistaken, untrue",
        info: "falsa, falsum - adjective",
        letter: "F",
        topic: "Quality & Character",
        set: 7
    },
    {
        latin: "fama",
        english: "rumour, fame, glory",
        info: "famae - noun",
        letter: "F",
        topic: "Abstract Concepts",
        set: 7,
        hint: "Think of 'famous'",
        derivatives: "fame, famous, infamous, defame, fable"
    },
    {
        latin: "familia",
        english: "family, household",
        info: "familiae - noun",
        letter: "F",
        topic: "Family & People",
        set: 7,
        hint: "Think of 'familiar'",
        derivatives: "family, familiar, familiarize"
    },
    {
        latin: "faveo",
        english: "favour, support",
        info: "favere, favi - verb",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'favor'",
        derivatives: "favor, favorable, favorite"
    },
    {
        latin: "felix",
        english: "fortunate, happy, prosperous",
        info: "gen felicis - adjective",
        letter: "F",
        topic: "Quality & Character",
        set: 7,
        hint: "Think of 'felicity'",
        derivatives: "felicity, felicitous, infelicitous, felicitate"
    },
    {
        latin: "femina",
        english: "woman",
        info: "feminae - noun",
        letter: "F",
        topic: "Family & People",
        set: 7,
        hint: "Think of 'feminine'",
        derivatives: "feminine, female, feminist, effeminate"
    },
    {
        latin: "fere",
        english: "nearly, about",
        info: "- adverb",
        letter: "F",
        topic: "Adverbs",
        set: 7
    },
    {
        latin: "fero",
        english: "carry, bear, bring; say",
        info: "ferre, tuli, latum - verb",
        letter: "F",
        topic: "Verbs of Giving/Taking",
        set: 7,
        hint: "Think of 'transfer'",
        derivatives: "transfer, refer, confer, differ, offer, prefer, fertile"
    },
    {
        latin: "ferox",
        english: "fierce, ferocious, brave, cruel",
        info: "gen ferocis - adjective",
        letter: "F",
        topic: "Quality & Character",
        set: 7
    },
    {
        latin: "ferrum",
        english: "iron, sword",
        info: "ferri - noun",
        letter: "F",
        topic: "Military & War",
        set: 7,
        hint: "Think of 'ferrous'",
        derivatives: "ferrous, iron, ferric"
    },
    {
        latin: "fessus",
        english: "tired",
        info: "fessa, fessum - adjective",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'confess'",
        derivatives: "confess, professor"
    },
    {
        latin: "festino",
        english: "hurry festinavi",
        info: "festinare - verb",
        letter: "F",
        topic: "Verbs of Motion",
        set: 7,
        derivatives: "festinate (archaic for hurry)"
    },
    {
        latin: "fetus",
        english: "fruit, produce; offspring",
        info: "fetus - noun",
        letter: "F",
        topic: "Nature & Landscape",
        set: 7
    },
    {
        latin: "fidelis",
        english: "faithful, loyal, trustworthy",
        info: "fidele - adjective",
        letter: "F",
        topic: "Quality & Character",
        set: 7,
        hint: "Think of 'fidelity'",
        derivatives: "fidelity, fidel, infidel"
    },
    {
        latin: "fides",
        english: "trust, faith, confidence, loyalty",
        info: "fidei - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'fidelity'",
        derivatives: "fidelity, confide, confident, faith, infidel, federal"
    },
    {
        latin: "fido",
        english: "trust, rely on",
        info: "fidere, fisus sum - verb",
        letter: "F",
        topic: "Verbs of Emotion",
        set: 7,
        hint: "Think of 'sum'",
        derivatives: "sum, summation, essence"
    },
    {
        latin: "filia",
        english: "daughter filiabus)",
        info: "filiae (dat/abl pl - noun",
        letter: "F",
        topic: "Family & People",
        set: 7,
        hint: "Think of 'filial'",
        derivatives: "filial, affiliate"
    },
    {
        latin: "filius",
        english: "son",
        info: "filii (voc fili) - noun",
        letter: "F",
        topic: "Family & People",
        set: 7,
        hint: "Think of 'filial'",
        derivatives: "filial, affiliate, filiation"
    },
    {
        latin: "fingo",
        english: "form, mould; imagine, invent",
        info: "fingere, finxi - verb",
        letter: "F",
        topic: "Verbs of Thinking",
        set: 7,
        hint: "Think of 'fiction'",
        derivatives: "fiction, feign, figure, figment"
    },
    {
        latin: "finis",
        english: "end, boundary, pl territory",
        info: "finis - noun",
        letter: "F",
        topic: "Buildings & Places",
        set: 7,
        hint: "Think of 'finish'",
        derivatives: "finish, final, finite, infinite, define, confine"
    },
    {
        latin: "fio",
        english: "become, be made, s- happen",
        info: "fieri, factus sum - verb",
        letter: "F",
        topic: "Verbs of Being",
        set: 7,
        hint: "Think of 'sum'",
        derivatives: "sum, summation, essence"
    },
    {
        latin: "flamma",
        english: "1 f blaze, flame; passion",
        info: "flammae - noun",
        letter: "F",
        topic: "Emotions & Mind",
        set: 7,
        derivatives: "flame, flammable, inflame, inflammatory"
    },
    {
        latin: "flecto",
        english: "bend flexum",
        info: "flectere, flexi - verb",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'flexible'",
        derivatives: "flex, flexible, reflect, deflect"
    },
    {
        latin: "flos",
        english: "flower",
        info: "floris - noun",
        letter: "F",
        topic: "Nature & Landscape",
        set: 7,
        hint: "Think of 'flora'",
        derivatives: "flower, flora, floral, florist"
    },
    {
        latin: "flumen",
        english: "river",
        info: "fluminis - noun",
        letter: "F",
        topic: "Nature & Landscape",
        set: 7,
        hint: "Think of 'flume'",
        derivatives: "flume, fluid"
    },
    {
        latin: "fodio",
        english: "dig",
        info: "fodere, fodi - verb",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'fossil (via fossa)'",
        derivatives: "fossil (via fossa)"
    },
    {
        latin: "foedus",
        english: "treaty, agreement, promise",
        info: "foederis - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'federal'",
        derivatives: "federal, federate, confederate"
    },
    {
        latin: "fons",
        english: "spring, fountain fore",
        info: "fontis - noun",
        letter: "F",
        topic: "Nature & Landscape",
        set: 7,
        hint: "Think of 'font'",
        derivatives: "font, fountain, fount"
    },
    {
        latin: "fortasse",
        english: "perhaps",
        info: "- adverb",
        letter: "F",
        topic: "Miscellaneous",
        set: 7
    },
    {
        latin: "forte",
        english: "by chance",
        info: "- adverb",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'fort'",
        derivatives: "fort, forte"
    },
    {
        latin: "fortis",
        english: "brave, strong, bold",
        info: "forte - adjective",
        letter: "F",
        topic: "Quality & Character",
        set: 7,
        hint: "Think of 'fort'",
        derivatives: "fort, fortress, fortify, comfort, effort, force"
    },
    {
        latin: "fortuna",
        english: "fate, luck, fortune",
        info: "fortunae - noun",
        letter: "F",
        topic: "Religion & Ritual",
        set: 7,
        hint: "Think of 'fortunate'",
        derivatives: "fortune, fortunate, unfortunate, misfortune"
    },
    {
        latin: "forum",
        english: "forum, marketplace",
        info: "fori - noun",
        letter: "F",
        topic: "Buildings & Places",
        set: 7,
        hint: "Think of 'forensic'",
        derivatives: "forum, forensic"
    },
    {
        latin: "fossa",
        english: "ditch, trench",
        info: "fossae - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 7
    },
    {
        latin: "frango",
        english: "break, crush",
        info: "frangere, fregi - verb",
        letter: "F",
        topic: "Verbs of Making/Doing",
        set: 7,
        hint: "Think of 'fragment'",
        derivatives: "fragment, fraction, fracture, fragile, refract, infringe"
    },
    {
        latin: "frater",
        english: "brother",
        info: "fratris - noun",
        letter: "F",
        topic: "Family & People",
        set: 7,
        hint: "Think of 'fraternal'",
        derivatives: "fraternal, fraternity, fraternize, friar"
    },
    {
        latin: "frequens",
        english: "usual, general; crowded; frequent",
        info: "gen frequentis - adjective",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'frequency'",
        derivatives: "frequent, frequency, infrequent"
    },
    {
        latin: "frigus",
        english: "cold",
        info: "frigoris - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'frigid'",
        derivatives: "frigid, refrigerate"
    },
    {
        latin: "frumentum",
        english: "grain, corn",
        info: "frumenti - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 7
    },
    {
        latin: "frustra",
        english: "in vain",
        info: "- adverb",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'frustrate'",
        derivatives: "frustrate, frustration"
    },
    {
        latin: "fuga",
        english: "flight, escape",
        info: "fugae - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 7,
        hint: "Think of 'fugue'",
        derivatives: "fugue, fugitive, refuge"
    },
    {
        latin: "fugio",
        english: "run away (from), flee, avoid",
        info: "fugere, fugi - verb",
        letter: "F",
        topic: "Verbs of Motion",
        set: 7,
        hint: "Think of 'fugitive'",
        derivatives: "fugitive, refuge, fugue, centrifugal, subterfuge"
    },
    {
        latin: "fugo",
        english: "put to flight, rout",
        info: "fugare, fugavi - verb",
        letter: "F",
        topic: "Miscellaneous",
        set: 8
    },
    {
        latin: "fundo",
        english: "pour, shed; rout",
        info: "fundere, fudi - verb",
        letter: "F",
        topic: "Miscellaneous",
        set: 8,
        hint: "Think of 'found'",
        derivatives: "found, foundation, fund, profound, confound, fuse"
    },
    {
        latin: "fundus",
        english: "farm",
        info: "fundi - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 8
    },
    {
        latin: "fur",
        english: "thief",
        info: "furis - noun",
        letter: "F",
        topic: "Miscellaneous",
        set: 8
    },
    {
        latin: "furor",
        english: "rage, fury, madness, passion",
        info: "furoris - noun",
        letter: "F",
        topic: "Emotions & Mind",
        set: 8,
        hint: "Think of 'furious'",
        derivatives: "fury, furious, infuriate"
    },
    {
        latin: "gaudeo",
        english: "rejoice, be pleased",
        info: "gaudere, gavisus - verb",
        letter: "G",
        topic: "Verbs of Emotion",
        set: 8,
        hint: "Think of 'joy (via Old French)'",
        derivatives: "joy (via Old French)"
    },
    {
        latin: "gaudium",
        english: "joy, pleasure, delight",
        info: "gaudii - noun",
        letter: "G",
        topic: "Emotions & Mind",
        set: 8,
        hint: "Think of 'gaudy'",
        derivatives: "joy, gaudy"
    },
    {
        latin: "gemitus",
        english: "groan, sigh",
        info: "gemitus - noun",
        letter: "G",
        topic: "Miscellaneous",
        set: 8
    },
    {
        latin: "gens",
        english: "family, tribe, race, people, nation",
        info: "gentis - noun",
        letter: "G",
        topic: "Government & Politics",
        set: 8,
        hint: "Think of 'gentle'",
        derivatives: "gentle, gentry, gentile, generate, genus"
    },
    {
        latin: "genu",
        english: "knee",
        info: "genus - noun",
        letter: "G",
        topic: "The Body",
        set: 8,
        hint: "Think of 'genuflect'",
        derivatives: "genuflect, knee"
    },
    {
        latin: "genus",
        english: "race, descent, birth, kind",
        info: "generis - noun",
        letter: "G",
        topic: "Abstract Concepts",
        set: 8,
        hint: "Think of 'genus'",
        derivatives: "genus, gender, generate, general, generic, genre"
    },
    {
        latin: "gero",
        english: "wage (war), wear (clothes), bear, manage",
        info: "gerere, gessi - verb",
        letter: "G",
        topic: "Verbs of Ruling",
        set: 8,
        hint: "Think of 'gesture'",
        derivatives: "gesture, digest, suggest, register, gestation"
    },
    {
        latin: "gladius",
        english: "sword",
        info: "gladii - noun",
        letter: "G",
        topic: "Military & War",
        set: 8,
        hint: "Think of 'gladiator'",
        derivatives: "gladiator, gladiolus"
    },
    {
        latin: "Graecia",
        english: "Greece",
        info: "Graeciae - noun",
        letter: "G",
        topic: "Miscellaneous",
        set: 8
    },
    {
        latin: "Graecus",
        english: "Greek",
        info: "Graeca, Graecum - adjective",
        letter: "G",
        topic: "Miscellaneous",
        set: 8
    },
    {
        latin: "Graeci",
        english: "(the) Greeks pl",
        info: "Graecorum - noun",
        letter: "G",
        topic: "Miscellaneous",
        set: 8
    },
    {
        latin: "gratia",
        english: "favour, thanks, esteem",
        info: "gratiae - noun",
        letter: "G",
        topic: "Miscellaneous",
        set: 8,
        hint: "Think of 'grace'",
        derivatives: "grace, grateful, gratitude, gratify, gratis, ingratiate"
    },
    {
        latin: "gravis",
        english: "heavy, serious",
        info: "grave - adjective",
        letter: "G",
        topic: "Size & Quantity",
        set: 8,
        hint: "Think of 'grave'",
        derivatives: "grave, gravity, aggravate, grievous, grief"
    },
    {
        latin: "habeo",
        english: "have, hold; consider",
        info: "habere, habui - verb",
        letter: "H",
        topic: "Verbs of Thinking",
        set: 8,
        hint: "Think of 'habit'",
        derivatives: "habit, habitual, inhabit, exhibit, prohibit, able"
    },
    {
        latin: "habito",
        english: "live (in), dwell, habitavi, inhabit",
        info: "habitare - verb",
        letter: "H",
        topic: "Verbs of Being",
        set: 8,
        hint: "Think of 'habitat'",
        derivatives: "habit, habitat, habitation, inhabit"
    },
    {
        latin: "haereo",
        english: "stick, cling",
        info: "haerere, haesi - verb",
        letter: "H",
        topic: "Miscellaneous",
        set: 8,
        hint: "Think of 'adhere'",
        derivatives: "adhere, cohere, inherent, hesitate"
    },
    {
        latin: "hasta",
        english: "spear",
        info: "hastae - noun",
        letter: "H",
        topic: "Military & War",
        set: 8
    },
    {
        latin: "haud",
        english: "not",
        info: "- adverb",
        letter: "H",
        topic: "Miscellaneous",
        set: 8,
        derivatives: "not (no English derivative)"
    },
    {
        latin: "heri",
        english: "yesterday",
        info: "- adverb",
        letter: "H",
        topic: "Time & Seasons",
        set: 8,
        derivatives: "yesterday (hestern - archaic)"
    },
    {
        latin: "hiberna",
        english: "winter quarters pl",
        info: "hibernorum - noun",
        letter: "H",
        topic: "Time & Seasons",
        set: 8
    },
    {
        latin: "hic",
        english: "this; he, she, it; the latter",
        info: "(1: short i) haec, hoc pron / - adjective",
        letter: "H",
        topic: "Miscellaneous",
        set: 8,
        derivatives: "here (no direct derivative)"
    },
    {
        latin: "hic",
        english: "here",
        info: "(2: long i) - adverb",
        letter: "H",
        topic: "Adverbs",
        set: 8,
        derivatives: "here (no direct derivative)"
    },
    {
        latin: "hiems",
        english: "winter, storm",
        info: "hiemis - noun",
        letter: "H",
        topic: "Time & Seasons",
        set: 8,
        hint: "Think of 'hibernate'",
        derivatives: "hibernate, hibernal"
    },
    {
        latin: "hinc",
        english: "from here, hence, henceforth",
        info: "- adverb",
        letter: "H",
        topic: "Adverbs",
        set: 8,
        derivatives: "hence (related)"
    },
    {
        latin: "hodie",
        english: "today",
        info: "- adverb",
        letter: "H",
        topic: "Time & Seasons",
        set: 8,
        derivatives: "today (no direct derivative)"
    },
    {
        latin: "homo",
        english: "m/f man, person, human 3 being",
        info: "hominis - noun",
        letter: "H",
        topic: "Family & People",
        set: 8,
        derivatives: "human, humane, homicide, homage, hominid"
    },
    {
        latin: "honor",
        english: "honour, esteem, glory",
        info: "honoris - noun",
        letter: "H",
        topic: "Abstract Concepts",
        set: 8,
        hint: "Think of 'honor'",
        derivatives: "honor, honorary, honest, dishonor, honorable"
    },
    {
        latin: "hora",
        english: "hour",
        info: "horae - noun",
        letter: "H",
        topic: "Time & Seasons",
        set: 8,
        hint: "Think of 'horoscope'",
        derivatives: "hour, horoscope, horology, horary"
    },
    {
        latin: "hortor",
        english: "encourage, urge",
        info: "hortari, hortatus - verb",
        letter: "H",
        topic: "Miscellaneous",
        set: 8,
        hint: "Think of 'exhort'",
        derivatives: "exhort, hortatory"
    },
    {
        latin: "hortus",
        english: "garden",
        info: "horti - noun",
        letter: "H",
        topic: "Miscellaneous",
        set: 8,
        hint: "Think of 'horticulture'",
        derivatives: "horticulture, garden"
    },
    {
        latin: "hospes",
        english: "guest, host",
        info: "hospitis - noun",
        letter: "H",
        topic: "Family & People",
        set: 8,
        hint: "Think of 'hospice'",
        derivatives: "host, hospice, hospital, hospitality"
    },
    {
        latin: "hostis",
        english: "enemy",
        info: "hostis - noun",
        letter: "H",
        topic: "Military & War",
        set: 8,
        hint: "Think of 'hostile'",
        derivatives: "hostile, hostility, host, hostage"
    },
    {
        latin: "huc",
        english: "(to) here, to this place",
        info: "- adverb",
        letter: "H",
        topic: "Adverbs",
        set: 8
    },
    {
        latin: "humilis",
        english: "low, humble, lowly",
        info: "humile - adjective",
        letter: "H",
        topic: "Quality & Character",
        set: 8
    },
    {
        latin: "humus",
        english: "ground, earth the ground)",
        info: "humi (humi = on - noun",
        letter: "H",
        topic: "Nature & Landscape",
        set: 8,
        hint: "Think of 'humble'",
        derivatives: "humble, exhume, humus, humility"
    },
    {
        latin: "iaceo",
        english: "lie, be lying down",
        info: "iacere, iacui - verb",
        letter: "I",
        topic: "Verbs of Being",
        set: 8,
        hint: "Think of 'adjacent'",
        derivatives: "adjacent, subjacent"
    },
    {
        latin: "iacio",
        english: "throw",
        info: "iacere, ieci - verb",
        letter: "I",
        topic: "Verbs of Fighting",
        set: 8,
        hint: "Think of 'project'",
        derivatives: "project, reject, inject, subject, object, eject, trajectory"
    },
    {
        latin: "iam",
        english: "now, already",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 8,
        hint: "Think of 'jam (archaic)'",
        derivatives: "already, jam (archaic)"
    },
    {
        latin: "non",
        english: "no longer",
        info: "iam - adverb",
        letter: "N",
        topic: "Miscellaneous",
        set: 8,
        derivatives: "non-, not"
    },
    {
        latin: "ianua",
        english: "door",
        info: "ianuae - noun",
        letter: "I",
        topic: "Buildings & Places",
        set: 8
    },
    {
        latin: "ibi",
        english: "there, then",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 8,
        derivatives: "there (no direct derivative)"
    },
    {
        latin: "idem",
        english: "the same",
        info: "eadem, idem pron / - adjective",
        letter: "I",
        topic: "Size & Quantity",
        set: 8,
        hint: "Think of 'identical'",
        derivatives: "identical, identity, identify"
    },
    {
        latin: "idoneus",
        english: "suitable, convenient",
        info: "idonea, idoneum - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 8,
        derivatives: "idoneous (suitable)"
    },
    {
        latin: "Idus",
        english: "Ides",
        info: "Iduum - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 8
    },
    {
        latin: "igitur",
        english: "therefore, and so",
        info: "- conjunction",
        letter: "I",
        topic: "Conjunctions",
        set: 8
    },
    {
        latin: "ignarus",
        english: "ignorant (of), inexperienced (in)",
        info: "ignara, ignarum - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "ignavus",
        english: "cowardly, lazy",
        info: "ignava, ignavum - adjective",
        letter: "I",
        topic: "Quality & Character",
        set: 9
    },
    {
        latin: "ignis",
        english: "fire",
        info: "ignis - noun",
        letter: "I",
        topic: "Nature & Landscape",
        set: 9,
        hint: "Think of 'ignite'",
        derivatives: "ignite, ignition, igneous"
    },
    {
        latin: "ignoro",
        english: "be ignorant (of), not ignoravi, know, misunderstand",
        info: "ignorare - verb",
        letter: "I",
        topic: "Verbs of Perception",
        set: 9,
        hint: "Think of 'ignore'",
        derivatives: "ignore, ignorant, ignorance"
    },
    {
        latin: "ignotus",
        english: "unknown",
        info: "ignota, ignotum - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "ille",
        english: "that; he, she, it; the former",
        info: "illa, illud pron / - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'illusion (unrelated)'",
        derivatives: "illusion (unrelated)"
    },
    {
        latin: "illic",
        english: "there",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 9
    },
    {
        latin: "illinc",
        english: "from there",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 9
    },
    {
        latin: "illuc",
        english: "(to) there, to that place",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 9
    },
    {
        latin: "immotus",
        english: "unmoved, immovable",
        info: "immota - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "impedio",
        english: "delay, hinder, impedivi, prevent, hamper",
        info: "impedire - verb",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'impede'",
        derivatives: "impede, impediment"
    },
    {
        latin: "imperator",
        english: "general, leader; emperor",
        info: "imperatoris - noun",
        letter: "I",
        topic: "Military & War",
        set: 9,
        hint: "Think of 'imperial'",
        derivatives: "emperor, imperial"
    },
    {
        latin: "imperium",
        english: "power, command; empire",
        info: "imperii - noun",
        letter: "I",
        topic: "Government & Politics",
        set: 9,
        hint: "Think of 'imperial'",
        derivatives: "empire, imperial, imperious"
    },
    {
        latin: "impero",
        english: "order, command (+ imperavi, dat)",
        info: "imperare - verb",
        letter: "I",
        topic: "Verbs of Speaking",
        set: 9,
        hint: "Think of 'imperial'",
        derivatives: "imperial, empire, emperor, imperative, command"
    },
    {
        latin: "impetus",
        english: "attack, impulse",
        info: "impetus - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'impetus'",
        derivatives: "impetus, impetuous"
    },
    {
        latin: "imus",
        english: "lowest, lowest part of",
        info: "ima, imum - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "in- (1)",
        english: "(in some compounds) in, into",
        info: "- prefix",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "in- (2)",
        english: "(in some compounds) not, un-",
        info: "- prefix",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "incendium",
        english: "fire",
        info: "incendii - noun",
        letter: "I",
        topic: "Nature & Landscape",
        set: 9
    },
    {
        latin: "incendo",
        english: "burn, set on fire; incendi, inflame, arouse",
        info: "incendere - verb",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'incense'",
        derivatives: "incense, incendiary"
    },
    {
        latin: "incipio",
        english: "begin",
        info: "incipere, incepi - verb",
        letter: "I",
        topic: "Verbs of Making/Doing",
        set: 9,
        hint: "Think of 'incipient'",
        derivatives: "incipient, inception"
    },
    {
        latin: "inceptum",
        english: "beginning, plan",
        info: "incepti - noun",
        letter: "I",
        topic: "Abstract Concepts",
        set: 9
    },
    {
        latin: "incito",
        english: "urge on, arouse, encourage",
        info: "incitare, incitavi - verb",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'incite'",
        derivatives: "incite, excite"
    },
    {
        latin: "incola",
        english: "m/f inhabitant 1",
        info: "incolae - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "inde",
        english: "from there, thereupon, next",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 9,
        hint: "Think of 'thence'",
        derivatives: "thence, index"
    },
    {
        latin: "ineo",
        english: "go into, enter",
        info: "inire, ini(v)i - verb",
        letter: "I",
        topic: "Verbs of Motion",
        set: 9
    },
    {
        latin: "infelix",
        english: "unlucky, unhappy",
        info: "gen infelicis - adjective",
        letter: "I",
        topic: "Quality & Character",
        set: 9,
        hint: "Think of 'infelicity'",
        derivatives: "infelicity"
    },
    {
        latin: "infero",
        english: "bring to, inflict, inl-/illatum cause, carry against",
        info: "inferre, intuli - verb",
        letter: "I",
        topic: "Verbs of Giving/Taking",
        set: 9
    },
    {
        latin: "infra",
        english: "below, under; (as",
        info: "+ acc - preposition",
        letter: "I",
        topic: "Prepositions",
        set: 9
    },
    {
        latin: "ingenium",
        english: "character, ability",
        info: "ingenii - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'ingenious'",
        derivatives: "ingenious, engine, engineer, ingenuity"
    },
    {
        latin: "ingens",
        english: "huge",
        info: "gen ingentis - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'ingenuous (unrelated)'",
        derivatives: "ingenuous (unrelated)"
    },
    {
        latin: "ingredior",
        english: "enter, undertake",
        info: "ingredi - verb",
        letter: "I",
        topic: "Verbs of Motion",
        set: 9
    },
    {
        latin: "inicio",
        english: "throw in",
        info: "inicere, inieci - verb",
        letter: "I",
        topic: "Verbs of Fighting",
        set: 9,
        hint: "Think of 'ejection'",
        derivatives: "inject, ejection"
    },
    {
        latin: "inimicus",
        english: "(personal) enemy",
        info: "inimici - noun",
        letter: "I",
        topic: "Military & War",
        set: 9,
        hint: "Think of 'inimical'",
        derivatives: "enemy, inimical"
    },
    {
        latin: "iniquus",
        english: "unfair, unjust, unfavourable",
        info: "iniqua, iniquum - adjective",
        letter: "I",
        topic: "Quality & Character",
        set: 9,
        hint: "Think of 'iniquity'",
        derivatives: "iniquity, inequity"
    },
    {
        latin: "initium",
        english: "beginning",
        info: "initii - noun",
        letter: "I",
        topic: "Abstract Concepts",
        set: 9,
        hint: "Think of 'initial'",
        derivatives: "initial, initiate, initiation"
    },
    {
        latin: "iniuria",
        english: "injustice, injury, wrong",
        info: "iniuriae - noun",
        letter: "I",
        topic: "Abstract Concepts",
        set: 9,
        hint: "Think of 'injure'",
        derivatives: "injury, injure, injurious"
    },
    {
        latin: "inopia",
        english: "shortage, lack, poverty",
        info: "inopiae - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'inopportune (related)'",
        derivatives: "inopportune (related)"
    },
    {
        latin: "inquam",
        english: "say, said inquiunt",
        info: "3 sg inquit, pl - verb",
        letter: "I",
        topic: "Verbs of Speaking",
        set: 9,
        hint: "Think of 'inquire (unrelated)'",
        derivatives: "inquire (unrelated)"
    },
    {
        latin: "insidiae",
        english: "ambush, trap, trick pl",
        info: "insidiarum - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 9,
        hint: "Think of 'insidious'",
        derivatives: "insidious"
    },
    {
        latin: "insignis",
        english: "distinguished, glorious",
        info: "insigne - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "inspicio",
        english: "look at, inspect, inspexi, examine",
        info: "inspicere - verb",
        letter: "I",
        topic: "Verbs of Perception",
        set: 9
    },
    {
        latin: "instruo",
        english: "draw up, arrange, instruxi, prepare, equip, supply",
        info: "instruere - verb",
        letter: "I",
        topic: "Verbs of Making/Doing",
        set: 9,
        hint: "Think of 'instruct'",
        derivatives: "instruct, instruction, instrument"
    },
    {
        latin: "insula",
        english: "island; block of flats",
        info: "insulae - noun",
        letter: "I",
        topic: "Nature & Landscape",
        set: 9,
        hint: "Think of 'insular'",
        derivatives: "insular, insulate, island, peninsula, isolate"
    },
    {
        latin: "intellego",
        english: "understand, perceive, intellexi, realise",
        info: "intellegere - verb",
        letter: "I",
        topic: "Verbs of Perception",
        set: 9,
        hint: "Think of 'intelligent'",
        derivatives: "intelligent, intellect, intellectual"
    },
    {
        latin: "intentus",
        english: "attentive, intent, eager",
        info: "intenta, intentum - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 9
    },
    {
        latin: "inter",
        english: "among, between",
        info: "+ acc - preposition",
        letter: "I",
        topic: "Prepositions",
        set: 9,
        hint: "Think of 'inter'",
        derivatives: "inter, internal, international, interim"
    },
    {
        latin: "interea",
        english: "meanwhile, in the meantime",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 9
    },
    {
        latin: "interficio",
        english: "kill interfeci",
        info: "interficere - verb",
        letter: "I",
        topic: "Verbs of Fighting",
        set: 9,
        hint: "Think of 'interfere (unrelated)'",
        derivatives: "interfere (unrelated)"
    },
    {
        latin: "interim",
        english: "meanwhile, in the meantime",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 9,
        derivatives: "interim, intermediate"
    },
    {
        latin: "intra",
        english: "prep/adv within, inside, in the space of",
        info: "+ acc, or as - adverb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "intro",
        english: "enter",
        info: "intrare, intravi - verb",
        letter: "I",
        topic: "Verbs of Motion",
        set: 10,
        hint: "Think of 'intro'",
        derivatives: "enter, intro, introduce, intrude"
    },
    {
        latin: "intus",
        english: "inside, within",
        info: "- adverb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "invado",
        english: "invade (+ in + acc)",
        info: "invadere, invasi - verb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "invenio",
        english: "find, discover",
        info: "invenire, inveni - verb",
        letter: "I",
        topic: "Verbs of Perception",
        set: 10,
        hint: "Think of 'invent'",
        derivatives: "invent, invention, inventory"
    },
    {
        latin: "invidia",
        english: "envy, jealousy",
        info: "invidiae - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "invito",
        english: "invite",
        info: "invitare, invitavi - verb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'invitation'",
        derivatives: "invite, invitation"
    },
    {
        latin: "invitus",
        english: "unwilling, reluctant",
        info: "invita, invitum - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "ipse",
        english: "-self (any person), himself, herself, itself",
        info: "ipsa, ipsum - pronoun",
        letter: "I",
        topic: "Pronouns",
        set: 10,
        hint: "Think of 'self (no direct derivative)'",
        derivatives: "self (no direct derivative)"
    },
    {
        latin: "ira",
        english: "anger",
        info: "irae - noun",
        letter: "I",
        topic: "Emotions & Mind",
        set: 10,
        hint: "Think of 'ire'",
        derivatives: "ire, irate, irascible, irritate"
    },
    {
        latin: "iratus",
        english: "angry",
        info: "irata, iratum - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'irate'",
        derivatives: "irate"
    },
    {
        latin: "irrumpo",
        english: "burst in",
        info: "irrumpere, irrupi - verb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "is",
        english: "he, she, it, pl they; this, that",
        info: "ea, id pron / - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        derivatives: "identity (related)"
    },
    {
        latin: "iste",
        english: "that",
        info: "ista, istud pron / - adjective",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        derivatives: "this/that (no direct derivative)"
    },
    {
        latin: "ita",
        english: "in this way, so, thus, to such an extent",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 10,
        hint: "Think of 'iterate'",
        derivatives: "thus, iterate"
    },
    {
        latin: "ita",
        english: "yes",
        info: "vero - adverb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'thus'",
        derivatives: "thus, iterate"
    },
    {
        latin: "Italia",
        english: "Italy",
        info: "Italiae - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "itaque",
        english: "and so, therefore",
        info: "- adverb",
        letter: "I",
        topic: "Adverbs",
        set: 10,
        hint: "Think of 'itinerant (unrelated)'",
        derivatives: "itinerant (unrelated)"
    },
    {
        latin: "iter",
        english: "journey, march, way",
        info: "itineris - noun",
        letter: "I",
        topic: "Abstract Concepts",
        set: 10,
        hint: "Think of 'itinerary'",
        derivatives: "itinerary, iterate, reiterate, transit"
    },
    {
        latin: "iterum",
        english: "again",
        info: "- adverb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'iterate'",
        derivatives: "iterate, reiterate"
    },
    {
        latin: "iubeo",
        english: "order, command",
        info: "iubere, iussi - verb",
        letter: "I",
        topic: "Verbs of Speaking",
        set: 10,
        hint: "Think of 'jussive (grammar term)'",
        derivatives: "jussive (grammar term)"
    },
    {
        latin: "iudex",
        english: "m/f judge, juror 3",
        info: "iudicis - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'judicial'",
        derivatives: "judge, judicial, judiciary, prejudice, adjudicate"
    },
    {
        latin: "iungo",
        english: "join, unite, fasten",
        info: "iungere, iunxi - verb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'junction'",
        derivatives: "join, junction, conjugal, conjunction, juncture"
    },
    {
        latin: "Iuppiter",
        english: "Jupiter",
        info: "Iovis - noun",
        letter: "I",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "iuro",
        english: "swear",
        info: "iurare, iuravi - verb",
        letter: "I",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'jury'",
        derivatives: "jury, perjury, abjure, conjure"
    },
    {
        latin: "ius",
        english: "law, right, authority iussi",
        info: "iuris - noun",
        letter: "I",
        topic: "Government & Politics",
        set: 10,
        hint: "Think of 'justice'",
        derivatives: "justice, just, justify, jury, injure, jurisdiction"
    },
    {
        latin: "iustus",
        english: "right, just, lawful, complete",
        info: "iusta, iustum - adjective",
        letter: "I",
        topic: "Quality & Character",
        set: 10,
        derivatives: "just, justice, justify, adjust"
    },
    {
        latin: "iuvenis",
        english: "young man; (as adj) young",
        info: "iuvenis - noun",
        letter: "I",
        topic: "Family & People",
        set: 10,
        hint: "Think of 'juvenile'",
        derivatives: "juvenile, rejuvenate, junior, juvenility"
    },
    {
        latin: "iuvo",
        english: "help, please, be pleasing",
        info: "iuvare, iuvi - verb",
        letter: "I",
        topic: "Verbs of Emotion",
        set: 10,
        hint: "Think of 'aid'",
        derivatives: "aid, adjutant, coadjutor"
    },
    {
        latin: "Kalendae",
        english: "Kalends",
        info: "Kalendarum - noun",
        letter: "K",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "labor",
        english: "work, toil, trouble",
        info: "(1: short a) laboris - noun",
        letter: "L",
        topic: "Abstract Concepts",
        set: 10,
        hint: "Think of 'labor'",
        derivatives: "labor, laboratory, elaborate, collaborate, laborious"
    },
    {
        latin: "labor",
        english: "glide, slip, fall",
        info: "(2: long a) labi, lapsus sum - verb",
        letter: "L",
        topic: "Verbs of Motion",
        set: 10,
        hint: "Think of 'labor'",
        derivatives: "labor, laboratory, elaborate, collaborate, laborious"
    },
    {
        latin: "laboro",
        english: "work, toil, be in laboravi, difficulty",
        info: "laborare - verb",
        letter: "L",
        topic: "Verbs of Being",
        set: 10,
        hint: "Think of 'laborious'",
        derivatives: "labor, laborious"
    },
    {
        latin: "lacrima",
        english: "tear",
        info: "lacrimae - noun",
        letter: "L",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'lachrymose'",
        derivatives: "lachrymose, tear"
    },
    {
        latin: "lacrimo",
        english: "cry, weep",
        info: "lacrimare - verb",
        letter: "L",
        topic: "Verbs of Speaking",
        set: 10
    },
    {
        latin: "laedo",
        english: "hurt, injure, harm",
        info: "laedere, laesi - verb",
        letter: "L",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'collide'",
        derivatives: "collide, lesion, elide"
    },
    {
        latin: "laetus",
        english: "happy, glad",
        info: "laeta, laetum - adjective",
        letter: "L",
        topic: "Quality & Character",
        set: 10,
        hint: "Think of 'lethal (unrelated)'",
        derivatives: "lethal (unrelated), glad"
    },
    {
        latin: "lateo",
        english: "lie hidden, escape notice",
        info: "latere, latui - verb",
        letter: "L",
        topic: "Verbs of Motion",
        set: 10,
        hint: "Think of 'latent'",
        derivatives: "latent, latency"
    },
    {
        latin: "latro",
        english: "robber, bandit",
        info: "latronis - noun",
        letter: "L",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "latus",
        english: "side, wing",
        info: "(1: short a) lateris - noun",
        letter: "L",
        topic: "Nature & Landscape",
        set: 10,
        hint: "Think of 'lateral'",
        derivatives: "lateral, collateral, latitude"
    },
    {
        latin: "latus",
        english: "wide, broad latus (3: long a) lata, (from pf pass having been carried fero) pple",
        info: "(2: long a) lata, latum - adjective",
        letter: "L",
        topic: "Size & Quantity",
        set: 10,
        hint: "Think of 'lateral'",
        derivatives: "lateral, collateral, latitude"
    },
    {
        latin: "laudo",
        english: "praise",
        info: "laudare, laudavi - verb",
        letter: "L",
        topic: "Verbs of Speaking",
        set: 10,
        hint: "Think of 'laud'",
        derivatives: "laud, laudable, applaud, laudatory"
    },
    {
        latin: "laus",
        english: "praise, honour, credit",
        info: "laudis - noun",
        letter: "L",
        topic: "Abstract Concepts",
        set: 10,
        hint: "Think of 'laud'",
        derivatives: "laud, laudable, applause"
    },
    {
        latin: "lectus",
        english: "couch, bed",
        info: "lecti - noun",
        letter: "L",
        topic: "Buildings & Places",
        set: 10
    },
    {
        latin: "legatus",
        english: "envoy, ambassador; commander",
        info: "legati - noun",
        letter: "L",
        topic: "Military & War",
        set: 10,
        hint: "Think of 'legate'",
        derivatives: "legate, delegate, legacy"
    },
    {
        latin: "legio",
        english: "legion",
        info: "legionis - noun",
        letter: "L",
        topic: "Military & War",
        set: 10,
        derivatives: "legion, legionary"
    },
    {
        latin: "lego",
        english: "read; choose",
        info: "legere, legi - verb",
        letter: "L",
        topic: "Miscellaneous",
        set: 10,
        hint: "Think of 'lecture'",
        derivatives: "lecture, legend, legible, collect, select, elect, lesson"
    },
    {
        latin: "lentus",
        english: "slow",
        info: "lenta, lentum - adjective",
        letter: "L",
        topic: "Miscellaneous",
        set: 10
    },
    {
        latin: "lente",
        english: "slowly",
        info: "- adverb",
        letter: "L",
        topic: "Adverbs",
        set: 10
    },
    {
        latin: "leo",
        english: "lion",
        info: "leonis - noun",
        letter: "L",
        topic: "Nature & Landscape",
        set: 10
    },
    {
        latin: "levis",
        english: "light, slight, trivial",
        info: "leve - adjective",
        letter: "L",
        topic: "Size & Quantity",
        set: 11,
        hint: "Think of 'levity'",
        derivatives: "levity, alleviate, elevate, lever"
    },
    {
        latin: "lex",
        english: "law, rule",
        info: "legis - noun",
        letter: "L",
        topic: "Government & Politics",
        set: 11,
        hint: "Think of 'legal'",
        derivatives: "legal, legitimate, legislate, loyal, privilege"
    },
    {
        latin: "libens",
        english: "willing, glad",
        info: "gen libentis - adjective",
        letter: "L",
        topic: "Miscellaneous",
        set: 11
    },
    {
        latin: "libenter",
        english: "willingly, gladly",
        info: "- adverb",
        letter: "L",
        topic: "Miscellaneous",
        set: 11
    },
    {
        latin: "liber",
        english: "book",
        info: "(1: short i) libri - noun",
        letter: "L",
        topic: "Abstract Concepts",
        set: 11,
        hint: "Think of 'liberty'",
        derivatives: "liberty, liberal, liberate, library, deliver"
    },
    {
        latin: "liber",
        english: "free",
        info: "(2: long i) libera, liberum - adjective",
        letter: "L",
        topic: "Quality & Character",
        set: 11,
        hint: "Think of 'liberty'",
        derivatives: "liberty, liberal, liberate, library, deliver"
    },
    {
        latin: "liberi",
        english: "children pl",
        info: "liberorum - noun",
        letter: "L",
        topic: "Miscellaneous",
        set: 11,
        derivatives: "liberal (children = free citizens)"
    },
    {
        latin: "libero",
        english: "set free",
        info: "liberare, liberavi - verb",
        letter: "L",
        topic: "Miscellaneous",
        set: 11,
        hint: "Think of 'liberate'",
        derivatives: "liberate, liberty, deliver"
    },
    {
        latin: "libertas",
        english: "freedom",
        info: "libertatis - noun",
        letter: "L",
        topic: "Abstract Concepts",
        set: 11
    },
    {
        latin: "libertus",
        english: "freedman, ex-slave",
        info: "liberti - noun",
        letter: "L",
        topic: "Family & People",
        set: 11
    },
    {
        latin: "licet",
        english: "it is allowed",
        info: "licere, licuit - verb",
        letter: "L",
        topic: "Miscellaneous",
        set: 11,
        hint: "Think of 'license'",
        derivatives: "license, illicit, licit"
    },
    {
        latin: "lingua",
        english: "tongue, speech, language",
        info: "linguae - noun",
        letter: "L",
        topic: "The Body",
        set: 11,
        hint: "Think of 'lingual'",
        derivatives: "language, lingual, linguist, bilingual"
    },
    {
        latin: "littera",
        english: "1 f letter (of the alphabet), usu pl letter (communication), literature",
        info: "litterae - noun",
        letter: "L",
        topic: "Abstract Concepts",
        set: 11,
        hint: "Think of 'literal'",
        derivatives: "letter, literal, literary, literature, literate"
    },
    {
        latin: "litus",
        english: "sea-shore, beach",
        info: "litoris - noun",
        letter: "L",
        topic: "Nature & Landscape",
        set: 11,
        hint: "Think of 'littoral'",
        derivatives: "littoral, coast"
    },
    {
        latin: "locus",
        english: "m/n place, position, loca) 2 situation, opportunity",
        info: "loci (pl usu n - noun",
        letter: "L",
        topic: "Buildings & Places",
        set: 11,
        hint: "Think of 'local'",
        derivatives: "local, locate, locomotive, allocate, dislocate, lieu"
    },
    {
        latin: "longus",
        english: "long",
        info: "longa, longum - adjective",
        letter: "L",
        topic: "Size & Quantity",
        set: 11,
        derivatives: "long, longitude, elongate, prolong"
    },
    {
        latin: "loquor",
        english: "speak, talk",
        info: "loqui, locutus - verb",
        letter: "L",
        topic: "Verbs of Speaking",
        set: 11,
        hint: "Think of 'eloquent'",
        derivatives: "eloquent, loquacious, colloquial, soliloquy, elocution"
    },
    {
        latin: "ludo",
        english: "play",
        info: "ludere, lusi - verb",
        letter: "L",
        topic: "Miscellaneous",
        set: 11,
        hint: "Think of 'ludicrous'",
        derivatives: "ludicrous, elude, illusion, prelude, interlude, allude"
    },
    {
        latin: "ludus",
        english: "game; school",
        info: "ludi - noun",
        letter: "L",
        topic: "Miscellaneous",
        set: 11,
        hint: "Think of 'ludicrous'",
        derivatives: "ludicrous, elude, collusion"
    },
    {
        latin: "luna",
        english: "moon",
        info: "lunae - noun",
        letter: "L",
        topic: "Nature & Landscape",
        set: 11,
        hint: "Think of 'lunar'",
        derivatives: "lunar, lunatic, lunacy"
    },
    {
        latin: "lux",
        english: "light, daylight",
        info: "lucis - noun",
        letter: "L",
        topic: "Miscellaneous",
        set: 11,
        hint: "Think of 'lucid'",
        derivatives: "lucid, elucidate, translucent, luxury"
    },
    {
        latin: "magis",
        english: "more, rather",
        info: "- adverb",
        letter: "M",
        topic: "Adverbs",
        set: 11
    },
    {
        latin: "magister",
        english: "master, teacher, foreman",
        info: "magistri - noun",
        letter: "M",
        topic: "Family & People",
        set: 11,
        hint: "Think of 'magistrate'",
        derivatives: "master, magistrate, magistracy"
    },
    {
        latin: "magistratus",
        english: "magistrate",
        info: "magistratus - noun",
        letter: "M",
        topic: "Government & Politics",
        set: 11
    },
    {
        latin: "magnopere",
        english: "greatly, very much",
        info: "- adverb",
        letter: "M",
        topic: "Adverbs",
        set: 11
    },
    {
        latin: "magnus",
        english: "big, large, great",
        info: "magna, magnum - adjective",
        letter: "M",
        topic: "Size & Quantity",
        set: 11,
        hint: "Think of 'magnitude'",
        derivatives: "magnitude, magnify, magnificent, magnate, major, maximum"
    },
    {
        latin: "maior",
        english: "bigger",
        info: "maius comp - adjective",
        letter: "M",
        topic: "Miscellaneous",
        set: 11,
        hint: "Think of 'major'",
        derivatives: "major, majority, mayor"
    },
    {
        latin: "malo",
        english: "prefer",
        info: "malle, malui - verb",
        letter: "M",
        topic: "Miscellaneous",
        set: 11,
        hint: "Think of 'malice'",
        derivatives: "malice, malevolent"
    },
    {
        latin: "malus",
        english: "bad, evil",
        info: "mala, malum - adjective",
        letter: "M",
        topic: "Quality & Character",
        set: 11,
        hint: "Think of 'malice'",
        derivatives: "malice, malevolent, malignant, malady, malicious"
    },
    {
        latin: "mando",
        english: "commit, entrust; mandavi, command",
        info: "mandare - verb",
        letter: "M",
        topic: "Verbs of Speaking",
        set: 11,
        hint: "Think of 'mandate'",
        derivatives: "mandate, command, demand, recommend"
    },
    {
        latin: "mane",
        english: "in the morning, early",
        info: "- adverb",
        letter: "M",
        topic: "Time & Seasons",
        set: 11
    },
    {
        latin: "maneo",
        english: "remain, stay",
        info: "manere, mansi - verb",
        letter: "M",
        topic: "Verbs of Being",
        set: 11,
        hint: "Think of 'permanent'",
        derivatives: "remain, permanent, mansion, manor"
    },
    {
        latin: "manus",
        english: "hand; band, group of people",
        info: "manus - noun",
        letter: "M",
        topic: "Government & Politics",
        set: 11,
        hint: "Think of 'manual'",
        derivatives: "manual, manufacture, manuscript, manage, manipulate, manner"
    },
    {
        latin: "mare",
        english: "sea",
        info: "maris - noun",
        letter: "M",
        topic: "Nature & Landscape",
        set: 11,
        hint: "Think of 'marine'",
        derivatives: "marine, maritime, submarine, mariner, mermaid"
    },
    {
        latin: "maritus",
        english: "husband; as 2-1-2 adj married",
        info: "mariti - noun",
        letter: "M",
        topic: "Family & People",
        set: 11,
        hint: "Think of 'marry'",
        derivatives: "marry, marriage, marital"
    },
    {
        latin: "mater",
        english: "mother",
        info: "matris - noun",
        letter: "M",
        topic: "Family & People",
        set: 11,
        hint: "Think of 'maternal'",
        derivatives: "maternal, maternity, matrix, matriculate, matter"
    },
    {
        latin: "matrimonium",
        english: "marriage",
        info: "matrimonii - noun",
        letter: "M",
        topic: "Miscellaneous",
        set: 11
    },
    {
        latin: "maxime",
        english: "very greatly",
        info: "- adverb",
        letter: "M",
        topic: "Adverbs",
        set: 11
    },
    {
        latin: "maximus",
        english: "greatest, very big maximum",
        info: "maxima, sup - adjective",
        letter: "M",
        topic: "Size & Quantity",
        set: 11,
        hint: "Think of 'maximal'",
        derivatives: "maximum, maximal, maximize"
    },
    {
        latin: "medius",
        english: "middle",
        info: "media, medium - adjective",
        letter: "M",
        topic: "Size & Quantity",
        set: 11,
        hint: "Think of 'medium'",
        derivatives: "medium, median, mediate, medieval, immediate, mean"
    },
    {
        latin: "melior",
        english: "better",
        info: "melius comp - adjective",
        letter: "M",
        topic: "Miscellaneous",
        set: 11,
        hint: "Think of 'ameliorate'",
        derivatives: "ameliorate, meliorate"
    },
    {
        latin: "memini",
        english: "(pf remember (+ gen) form)",
        info: "meminisse - verb",
        letter: "M",
        topic: "Verbs of Thinking",
        set: 11,
        hint: "Think of 'memory'",
        derivatives: "memory, reminisce"
    },
    {
        latin: "mens",
        english: "mind",
        info: "mentis - noun",
        letter: "M",
        topic: "Emotions & Mind",
        set: 11,
        hint: "Think of 'mental'",
        derivatives: "mental, mentality, mention, demented, dementia"
    },
    {
        latin: "mensa",
        english: "table",
        info: "mensae - noun",
        letter: "M",
        topic: "Buildings & Places",
        set: 11,
        derivatives: "mensal (relating to tables)"
    },
    {
        latin: "mensis",
        english: "month",
        info: "mensis - noun",
        letter: "M",
        topic: "Time & Seasons",
        set: 11,
        hint: "Think of 'menstrual'",
        derivatives: "menstrual, semester"
    },
    {
        latin: "mercator",
        english: "merchant",
        info: "mercatoris - noun",
        letter: "M",
        topic: "Wealth & Trade",
        set: 11
    },
    {
        latin: "metuo",
        english: "fear, be afraid",
        info: "metuere, metui - verb",
        letter: "M",
        topic: "Verbs of Thinking",
        set: 11,
        hint: "Think of 'meticulous (unrelated)'",
        derivatives: "meticulous (unrelated)"
    },
    {
        latin: "metus",
        english: "fear",
        info: "metus - noun",
        letter: "M",
        topic: "Emotions & Mind",
        set: 11,
        hint: "Think of 'meticulous (unrelated)'",
        derivatives: "meticulous (unrelated)"
    },
    {
        latin: "meus",
        english: "my",
        info: "mea, meum - adjective",
        letter: "M",
        topic: "Miscellaneous",
        set: 11,
        derivatives: "my (no direct derivative)"
    },
    {
        latin: "miles",
        english: "soldier",
        info: "militis - noun",
        letter: "M",
        topic: "Military & War",
        set: 11,
        hint: "Think of 'military'",
        derivatives: "military, militia, militant, mile, militate"
    },
    {
        latin: "militia",
        english: "military service",
        info: "militiae - noun",
        letter: "M",
        topic: "Military & War",
        set: 12
    },
    {
        latin: "mille",
        english: "thousand",
        info: "pl milia - numeral",
        letter: "M",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'mile'",
        derivatives: "mile, millennium, million, millimeter"
    },
    {
        latin: "minimus",
        english: "smallest, very small minimum",
        info: "minima, sup - adjective",
        letter: "M",
        topic: "Size & Quantity",
        set: 12,
        hint: "Think of 'minimize'",
        derivatives: "minimum, minimize, minimal"
    },
    {
        latin: "minime",
        english: "no; least, very little",
        info: "indecl sup - adverb",
        letter: "M",
        topic: "Adverbs",
        set: 12
    },
    {
        latin: "minor (1)",
        english: "threaten (+ dat)",
        info: "minari, minatus - verb",
        letter: "M",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'minor'",
        derivatives: "minor, minority, minus, diminish"
    },
    {
        latin: "minor (2)",
        english: "smaller",
        info: "minus comp - adjective",
        letter: "M",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'minor'",
        derivatives: "minor, minority, minus, diminish"
    },
    {
        latin: "mirabilis",
        english: "strange, wonderful",
        info: "mirabile - adjective",
        letter: "M",
        topic: "Miscellaneous",
        set: 12
    },
    {
        latin: "miror",
        english: "be amazed, wonder sum at, admire",
        info: "mirari, miratus - verb",
        letter: "M",
        topic: "Verbs of Thinking",
        set: 12,
        hint: "Think of 'miracle'",
        derivatives: "miracle, mirror, admire, marvel"
    },
    {
        latin: "misceo",
        english: "mix, blend, confuse",
        info: "miscere, miscui - verb",
        letter: "M",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'miscellaneous'",
        derivatives: "mix, miscellaneous, miscible"
    },
    {
        latin: "miser",
        english: "miserable, wretched, sad",
        info: "misera, miserum - adjective",
        letter: "M",
        topic: "Quality & Character",
        set: 12,
        hint: "Think of 'misery'",
        derivatives: "miser, misery, miserable, commiserate"
    },
    {
        latin: "mitto",
        english: "send, throw, let go",
        info: "mittere, misi - verb",
        letter: "M",
        topic: "Verbs of Fighting",
        set: 12,
        hint: "Think of 'mission'",
        derivatives: "mission, transmit, permit, commit, omit, emit, submit, remit"
    },
    {
        latin: "modo",
        english: "just, now, only modo … modo at one time … at another time",
        info: "- adverb",
        letter: "M",
        topic: "Adverbs",
        set: 12,
        hint: "Think of 'mode'",
        derivatives: "mode, modern, moderate"
    },
    {
        latin: "modus",
        english: "manner, way, kind",
        info: "modi - noun",
        letter: "M",
        topic: "Abstract Concepts",
        set: 12,
        hint: "Think of 'mode'",
        derivatives: "mode, model, moderate, modify, modern, modest"
    },
    {
        latin: "moenia",
        english: "city walls, (fortified) pl city",
        info: "moenium - noun",
        letter: "M",
        topic: "Buildings & Places",
        set: 12,
        hint: "Think of 'munition'",
        derivatives: "munition, ammunition"
    },
    {
        latin: "mollis",
        english: "soft, tender, gentle",
        info: "molle - adjective",
        letter: "M",
        topic: "Quality & Character",
        set: 12
    },
    {
        latin: "momentum",
        english: "moment, short time; importance",
        info: "momenti - noun",
        letter: "M",
        topic: "Time & Seasons",
        set: 12
    },
    {
        latin: "moneo",
        english: "warn, advise, teach",
        info: "monere, monui - verb",
        letter: "M",
        topic: "Verbs of Speaking",
        set: 12,
        hint: "Think of 'monitor'",
        derivatives: "monitor, admonish, monument, premonition, monition"
    },
    {
        latin: "mons",
        english: "mountain",
        info: "montis - noun",
        letter: "M",
        topic: "Nature & Landscape",
        set: 12,
        derivatives: "mount, mountain, amount, surmount, paramount, promontory"
    },
    {
        latin: "monstro",
        english: "show, point out, atum indicate, instruct",
        info: "monstrare, -avi, - - verb",
        letter: "M",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'demonstrate'",
        derivatives: "demonstrate, monster, monstrous"
    },
    {
        latin: "mora",
        english: "delay",
        info: "morae - noun",
        letter: "M",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'moratorium'",
        derivatives: "moratorium, demur"
    },
    {
        latin: "morbus",
        english: "illness, sickness, disease",
        info: "morbi - noun",
        letter: "M",
        topic: "The Body",
        set: 12,
        hint: "Think of 'morbid'",
        derivatives: "morbid, morbidity"
    },
    {
        latin: "morior",
        english: "die",
        info: "mori, mortuus - verb",
        letter: "M",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'moribund'",
        derivatives: "moribund, mortal"
    },
    {
        latin: "moror",
        english: "delay, linger",
        info: "morari, moratus - verb",
        letter: "M",
        topic: "Miscellaneous",
        set: 12
    },
    {
        latin: "mors",
        english: "death",
        info: "mortis - noun",
        letter: "M",
        topic: "The Body",
        set: 12,
        hint: "Think of 'mortal'",
        derivatives: "mortal, mortify, mortgage, immortal, mortality, mortuary"
    },
    {
        latin: "mortuus",
        english: "dead",
        info: "mortua, mortuum - adjective",
        letter: "M",
        topic: "Quality & Character",
        set: 12
    },
    {
        latin: "mos",
        english: "custom, habit, pl character, morals",
        info: "moris - noun",
        letter: "M",
        topic: "Abstract Concepts",
        set: 12,
        hint: "Think of 'morality'",
        derivatives: "moral, morality, mores, morose"
    },
    {
        latin: "moveo",
        english: "move",
        info: "movere, movi - verb",
        letter: "M",
        topic: "Verbs of Motion",
        set: 12,
        hint: "Think of 'motion'",
        derivatives: "move, motion, motor, motive, emotion, promote, remote"
    },
    {
        latin: "mox",
        english: "soon",
        info: "- adverb",
        letter: "M",
        topic: "Time & Seasons",
        set: 12,
        derivatives: "soon (no direct derivative)"
    },
    {
        latin: "mulier",
        english: "woman",
        info: "mulieris - noun",
        letter: "M",
        topic: "Family & People",
        set: 12,
        derivatives: "muliebrity (womanliness)"
    },
    {
        latin: "multitudo",
        english: "crowd, multitude",
        info: "multitudinis - noun",
        letter: "M",
        topic: "Miscellaneous",
        set: 12
    },
    {
        latin: "multus",
        english: "much, pl many",
        info: "multa, multum - adjective",
        letter: "M",
        topic: "Size & Quantity",
        set: 12,
        derivatives: "multiple, multiply, multitude, much"
    },
    {
        latin: "multo",
        english: "(by) much",
        info: "- adverb",
        letter: "M",
        topic: "Miscellaneous",
        set: 12
    },
    {
        latin: "munio",
        english: "fortify, defend, guard",
        info: "munire, munivi - verb",
        letter: "M",
        topic: "Verbs of Fighting",
        set: 12,
        hint: "Think of 'munition'",
        derivatives: "munition, ammunition, immune"
    },
    {
        latin: "munus",
        english: "service, duty; present",
        info: "muneris - noun",
        letter: "M",
        topic: "Abstract Concepts",
        set: 12,
        hint: "Think of 'municipal'",
        derivatives: "municipal, remunerate, immune"
    },
    {
        latin: "murus",
        english: "wall, rampart",
        info: "muri - noun",
        letter: "M",
        topic: "Buildings & Places",
        set: 12,
        hint: "Think of 'mural'",
        derivatives: "mural, immure, intramural"
    },
    {
        latin: "muto",
        english: "change, alter",
        info: "mutare, mutavi - verb",
        letter: "M",
        topic: "Verbs of Making/Doing",
        set: 12,
        hint: "Think of 'mutate'",
        derivatives: "mutate, mutation, mutual, commute, permute, mutable"
    },
    {
        latin: "nam",
        english: "for",
        info: "- conjunction",
        letter: "N",
        topic: "Conjunctions",
        set: 12,
        hint: "Think of 'namely (unrelated)'",
        derivatives: "namely (unrelated)"
    },
    {
        latin: "narro",
        english: "tell, relate",
        info: "narrare, narravi - verb",
        letter: "N",
        topic: "Verbs of Speaking",
        set: 12,
        hint: "Think of 'narrate'",
        derivatives: "narrate, narrative, narrator"
    },
    {
        latin: "nascor",
        english: "be born",
        info: "nasci, natus sum - verb",
        letter: "N",
        topic: "Verbs of Being",
        set: 12,
        hint: "Think of 'nascent'",
        derivatives: "nascent, native, nation, nature, natal, innate"
    },
    {
        latin: "natura",
        english: "nature",
        info: "naturae - noun",
        letter: "N",
        topic: "Abstract Concepts",
        set: 12,
        hint: "Think of 'natural'",
        derivatives: "nature, natural, supernatural, preternatural"
    },
    {
        latin: "natus",
        english: "(X years acc) old",
        info: "nata, natum - adjective",
        letter: "N",
        topic: "Quality & Character",
        set: 12,
        hint: "Think of 'natal'",
        derivatives: "natal, native, prenatal, innate"
    },
    {
        latin: "nata",
        english: "daughter",
        info: "natae - noun",
        letter: "N",
        topic: "Family & People",
        set: 12,
        hint: "Think of 'natal'",
        derivatives: "natal, native"
    },
    {
        latin: "natus",
        english: "son",
        info: "nati - noun",
        letter: "N",
        topic: "Family & People",
        set: 12,
        hint: "Think of 'natal'",
        derivatives: "natal, native, prenatal, innate"
    },
    {
        latin: "nauta",
        english: "sailor",
        info: "nautae - noun",
        letter: "N",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'nautical'",
        derivatives: "nautical, nautilus, astronaut"
    },
    {
        latin: "navigo",
        english: "sail navigavi",
        info: "navigare - verb",
        letter: "N",
        topic: "Miscellaneous",
        set: 12,
        hint: "Think of 'navigate'",
        derivatives: "navigate, navigation"
    },
    {
        latin: "navis",
        english: "ship",
        info: "navis - noun",
        letter: "N",
        topic: "Military & War",
        set: 12,
        hint: "Think of 'navy'",
        derivatives: "navy, naval, navigate, nave, nausea"
    },
    {
        latin: "-ne",
        english: "(makes open question, e.g.) is it (the case that)?",
        info: "… ? - particle",
        letter: "A",
        topic: "Miscellaneous",
        set: 12
    },
    {
        latin: "ne",
        english: "(that/so that) not, (after verb of fearing) that, lest",
        info: "- conjunction",
        letter: "N",
        topic: "Conjunctions",
        set: 12,
        hint: "Think of 'neither'",
        derivatives: "neither, nor (particles)"
    },
    {
        latin: "ne",
        english: "not even",
        info: "quidem - adverb",
        letter: "N",
        topic: "Adverbs",
        set: 12,
        hint: "Think of 'neither'",
        derivatives: "neither, nor (particles)"
    },
    {
        latin: "nec",
        english: "and not, nor, neither",
        info: "- conjunction",
        letter: "N",
        topic: "Conjunctions",
        set: 12,
        derivatives: "neither, nor"
    },
    {
        latin: "necesse",
        english: "necessary",
        info: "indecl - adjective",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        hint: "Think of 'necessity'",
        derivatives: "necessary, necessity"
    },
    {
        latin: "neco",
        english: "kill",
        info: "necare, necavi - verb",
        letter: "N",
        topic: "Verbs of Fighting",
        set: 13,
        hint: "Think of 'internecine'",
        derivatives: "internecine, pernicious, necropolis"
    },
    {
        latin: "neglego",
        english: "neglect, disregard neglexi",
        info: "neglegere - verb",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        hint: "Think of 'negligent'",
        derivatives: "neglect, negligent, negligence"
    },
    {
        latin: "nego",
        english: "say no, deny, refuse, say that … not",
        info: "negare, negavi - verb",
        letter: "N",
        topic: "Verbs of Speaking",
        set: 13,
        hint: "Think of 'negate'",
        derivatives: "negate, negative, deny, renegade, abnegate"
    },
    {
        latin: "negotium",
        english: "business",
        info: "negotii - noun",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        hint: "Think of 'negotiate'",
        derivatives: "negotiate, negotiation, business"
    },
    {
        latin: "nemo",
        english: "m/f no-one, nobody",
        info: "nullius - pronoun",
        letter: "N",
        topic: "Pronouns",
        set: 13,
        hint: "Think of 'none (no direct derivative)'",
        derivatives: "none (no direct derivative)"
    },
    {
        latin: "nepos",
        english: "grandson, descendant",
        info: "nepotis - noun",
        letter: "N",
        topic: "Family & People",
        set: 13
    },
    {
        latin: "neque",
        english: "and not, nor, neither",
        info: "- conjunction",
        letter: "N",
        topic: "Conjunctions",
        set: 13,
        derivatives: "neither, nor"
    },
    {
        latin: "nescio",
        english: "not know",
        info: "nescire, nescivi - verb",
        letter: "N",
        topic: "Verbs of Perception",
        set: 13,
        hint: "Think of 'nescient (unaware)'",
        derivatives: "nescient (unaware)"
    },
    {
        latin: "nescius",
        english: "ignorant, unaware",
        info: "nescia, nescium - adjective",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "niger",
        english: "black",
        info: "nigra, nigrum - adjective",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "nihil",
        english: "n nothing",
        info: "indecl - pronoun",
        letter: "N",
        topic: "Pronouns",
        set: 13,
        derivatives: "nihilism, annihilate, nil"
    },
    {
        latin: "nimis/nimium",
        english: "too, too much",
        info: "- adverb",
        letter: "N",
        topic: "Adverbs",
        set: 13,
        hint: "Think of 'nimiety (excess)'",
        derivatives: "nimiety (excess)"
    },
    {
        latin: "nisi",
        english: "unless, if not, except",
        info: "- conjunction",
        letter: "N",
        topic: "Conjunctions",
        set: 13,
        derivatives: "unless (no direct derivative)"
    },
    {
        latin: "nobilis",
        english: "noble, of noble birth, famous",
        info: "nobile - adjective",
        letter: "N",
        topic: "Quality & Character",
        set: 13,
        hint: "Think of 'nobility'",
        derivatives: "noble, nobility, ennoble"
    },
    {
        latin: "noceo",
        english: "harm, hurt",
        info: "nocere, nocui - verb",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        hint: "Think of 'noxious'",
        derivatives: "noxious, innocent, nocuous, innocuous"
    },
    {
        latin: "noctu",
        english: "by night",
        info: "- adverb",
        letter: "N",
        topic: "Time & Seasons",
        set: 13
    },
    {
        latin: "nolo",
        english: "not want, be unwilling, refuse",
        info: "nolle, nolui - verb",
        letter: "N",
        topic: "Verbs of Being",
        set: 13,
        hint: "Think of 'nolens volens (willy-nilly)'",
        derivatives: "nolens volens (willy-nilly)"
    },
    {
        latin: "nomen",
        english: "name",
        info: "nominis - noun",
        letter: "N",
        topic: "Abstract Concepts",
        set: 13,
        hint: "Think of 'nominal'",
        derivatives: "name, nominal, nominate, noun, pronoun, renown, nomenclature"
    },
    {
        latin: "non",
        english: "not non iam no longer",
        info: "- adverb",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        derivatives: "non-, not"
    },
    {
        latin: "Nonae",
        english: "Nones",
        info: "Nonarum - noun",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "nonaginta",
        english: "ninety",
        info: "- numeral",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "nondum",
        english: "not yet",
        info: "- adverb",
        letter: "N",
        topic: "Adverbs",
        set: 13,
        derivatives: "not yet (no direct derivative)"
    },
    {
        latin: "nongenti",
        english: "900 nongenta",
        info: "nongentae - numeral",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "nonne",
        english: "surely?",
        info: "… ? - particle",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "nonnulli",
        english: "some, several nonnulla pl",
        info: "nonnullae - adjective",
        letter: "N",
        topic: "Size & Quantity",
        set: 13
    },
    {
        latin: "nonus",
        english: "ninth",
        info: "nona, nonum - adjective",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "nos",
        english: "we, us",
        info: "nostrum or nostri - pronoun",
        letter: "N",
        topic: "Pronouns",
        set: 13,
        hint: "Think of 'our (no direct derivative)'",
        derivatives: "us, our (no direct derivative)"
    },
    {
        latin: "nosco",
        english: "come to know, get knowledge of",
        info: "noscere, novi - verb",
        letter: "N",
        topic: "Verbs of Motion",
        set: 13,
        hint: "Think of 'notice'",
        derivatives: "know, notice, cognition"
    },
    {
        latin: "noster",
        english: "our",
        info: "nostra, nostrum - adjective",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        hint: "Think of 'nostrum'",
        derivatives: "nostrum, our"
    },
    {
        latin: "notus",
        english: "known, well-known, famous",
        info: "nota, notum - adjective",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        hint: "Think of 'note'",
        derivatives: "note, notice, notorious"
    },
    {
        latin: "novem",
        english: "nine",
        info: "- numeral",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "novi",
        english: "(pf know (pf of nosco form) with pres sense)",
        info: "novisse, notum - verb",
        letter: "N",
        topic: "Verbs of Perception",
        set: 13
    },
    {
        latin: "novus",
        english: "new, fresh, recent",
        info: "nova, novum - adjective",
        letter: "N",
        topic: "Quality & Character",
        set: 13,
        hint: "Think of 'novel'",
        derivatives: "novel, novelty, innovate, novice, renovate, nova"
    },
    {
        latin: "nox",
        english: "night",
        info: "noctis - noun",
        letter: "N",
        topic: "Time & Seasons",
        set: 13,
        hint: "Think of 'nocturnal'",
        derivatives: "nocturnal, equinox, nocturn"
    },
    {
        latin: "nudo",
        english: "strip, lay bare, leave exposed",
        info: "nudare, nudavi - verb",
        letter: "N",
        topic: "Verbs of Motion",
        set: 13
    },
    {
        latin: "nullus",
        english: "no …, none, not any",
        info: "nulla, nullum - adjective",
        letter: "N",
        topic: "Size & Quantity",
        set: 13,
        hint: "Think of 'null'",
        derivatives: "null, nullify, annul"
    },
    {
        latin: "num",
        english: "surely … not? (expects answer no); (in indirect question) whether",
        info: "… (?) - particle",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        derivatives: "whether (no direct derivative)"
    },
    {
        latin: "numerus",
        english: "number",
        info: "numeri - noun",
        letter: "N",
        topic: "Abstract Concepts",
        set: 13,
        hint: "Think of 'numeral'",
        derivatives: "number, numeral, enumerate, numerous, innumerable"
    },
    {
        latin: "numquam",
        english: "never",
        info: "- adverb",
        letter: "N",
        topic: "Time & Seasons",
        set: 13,
        derivatives: "never (no direct derivative)"
    },
    {
        latin: "nunc",
        english: "now",
        info: "- adverb",
        letter: "N",
        topic: "Time & Seasons",
        set: 13,
        derivatives: "now (no direct derivative)"
    },
    {
        latin: "nuntio",
        english: "announce, report nuntiavi",
        info: "nuntiare - verb",
        letter: "N",
        topic: "Verbs of Speaking",
        set: 13,
        hint: "Think of 'denounce'",
        derivatives: "announce, denounce, pronounce, renounce"
    },
    {
        latin: "nuntius",
        english: "messenger, message, news",
        info: "nuntii - noun",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        hint: "Think of 'announce'",
        derivatives: "announce, nuncio"
    },
    {
        latin: "nuper",
        english: "recently",
        info: "- adverb",
        letter: "N",
        topic: "Miscellaneous",
        set: 13,
        derivatives: "recently (no direct derivative)"
    },
    {
        latin: "nusquam",
        english: "nowhere",
        info: "- adverb",
        letter: "N",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "ob",
        english: "because of, on account of",
        info: "+ acc - preposition",
        letter: "O",
        topic: "Prepositions",
        set: 13,
        hint: "Think of 'obvious'",
        derivatives: "obvious, object, obstacle"
    },
    {
        latin: "obliviscor",
        english: "forget (+ gen)",
        info: "oblivisci, oblitus - verb",
        letter: "O",
        topic: "Verbs of Thinking",
        set: 13,
        hint: "Think of 'oblivion'",
        derivatives: "oblivion, oblivious"
    },
    {
        latin: "obses",
        english: "m/f hostage 3",
        info: "obsidis - noun",
        letter: "O",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "obsideo",
        english: "besiege, blockade",
        info: "obsidere, obsedi - verb",
        letter: "O",
        topic: "Miscellaneous",
        set: 13,
        hint: "Think of 'obsess'",
        derivatives: "obsess, obsession, besiege"
    },
    {
        latin: "occasio",
        english: "opportunity, occasion",
        info: "occasionis - noun",
        letter: "O",
        topic: "Miscellaneous",
        set: 13
    },
    {
        latin: "occido",
        english: "kill",
        info: "occidere, occidi - verb",
        letter: "O",
        topic: "Verbs of Fighting",
        set: 14,
        hint: "Think of 'occident (where sun falls)'",
        derivatives: "occident (where sun falls), occidental"
    },
    {
        latin: "occupo",
        english: "seize, take possession occupavi, of, occupy",
        info: "occupare - verb",
        letter: "O",
        topic: "Verbs of Giving/Taking",
        set: 14,
        hint: "Think of 'occupation'",
        derivatives: "occupy, occupation, preoccupy"
    },
    {
        latin: "octavus",
        english: "eighth",
        info: "octava, octavum - adjective",
        letter: "O",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "octingenti",
        english: "800 octingenta",
        info: "octingentae - numeral",
        letter: "O",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "octo",
        english: "eight",
        info: "- numeral",
        letter: "O",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "octoginta",
        english: "eighty",
        info: "- numeral",
        letter: "O",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "oculus",
        english: "eye",
        info: "oculi - noun",
        letter: "O",
        topic: "The Body",
        set: 14,
        hint: "Think of 'ocular'",
        derivatives: "ocular, oculist, binoculars, inoculate"
    },
    {
        latin: "odium",
        english: "hatred odio sum be hated by",
        info: "odii - noun",
        letter: "O",
        topic: "Miscellaneous",
        set: 14,
        hint: "Think of 'odium'",
        derivatives: "odious, odium"
    },
    {
        latin: "offero",
        english: "offer, present",
        info: "offere, obtuli - verb",
        letter: "O",
        topic: "Verbs of Giving/Taking",
        set: 14
    },
    {
        latin: "officium",
        english: "duty, task, function",
        info: "officii - noun",
        letter: "O",
        topic: "Abstract Concepts",
        set: 14,
        hint: "Think of 'office'",
        derivatives: "office, official, officer, officious"
    },
    {
        latin: "olim",
        english: "once, formerly, one day",
        info: "- adverb",
        letter: "O",
        topic: "Time & Seasons",
        set: 14,
        derivatives: "once (no direct derivative)"
    },
    {
        latin: "omitto",
        english: "neglect, disregard, make no mention of",
        info: "omittere, omisi - verb",
        letter: "O",
        topic: "Verbs of Making/Doing",
        set: 14,
        hint: "Think of 'omit'",
        derivatives: "omit, omission"
    },
    {
        latin: "omnino",
        english: "altogether, entirely, at all",
        info: "- adverb",
        letter: "O",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "omnis",
        english: "all, every",
        info: "omne - adjective",
        letter: "O",
        topic: "Size & Quantity",
        set: 14,
        hint: "Think of 'omnibus'",
        derivatives: "omnibus, omnipotent, omniscient, omnivore, omnipresent"
    },
    {
        latin: "onus",
        english: "burden, load",
        info: "oneris - noun",
        letter: "O",
        topic: "Miscellaneous",
        set: 14,
        hint: "Think of 'onerous'",
        derivatives: "onerous, onus, exonerate"
    },
    {
        latin: "opera",
        english: "work, effort, attention, trouble operam do take pains, give attention to",
        info: "operae - noun",
        letter: "O",
        topic: "Abstract Concepts",
        set: 14
    },
    {
        latin: "oportet",
        english: "it is necessary, ought, impsnl must",
        info: "oportere, oportuit - verb",
        letter: "O",
        topic: "Miscellaneous",
        set: 14,
        hint: "Think of 'opportune'",
        derivatives: "opportune, opportunity"
    },
    {
        latin: "oppidum",
        english: "town",
        info: "oppidi - noun",
        letter: "O",
        topic: "Buildings & Places",
        set: 14
    },
    {
        latin: "opportunus",
        english: "suitable, opportune opportunum",
        info: "opportuna - adjective",
        letter: "O",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "opprimo",
        english: "crush, weigh down, oppressi, overwhelm",
        info: "opprimere - verb",
        letter: "O",
        topic: "Miscellaneous",
        set: 14,
        derivatives: "oppress, oppression"
    },
    {
        latin: "oppugno",
        english: "attack oppugnavi",
        info: "oppugnare - verb",
        letter: "O",
        topic: "Verbs of Fighting",
        set: 14
    },
    {
        latin: "optimus",
        english: "best, excellent, very good",
        info: "optima, optimum sup - adjective",
        letter: "O",
        topic: "Quality & Character",
        set: 14
    },
    {
        latin: "opus",
        english: "work, task, toil; construction opus est there is need of",
        info: "operis - noun",
        letter: "O",
        topic: "Abstract Concepts",
        set: 14,
        hint: "Think of 'opera'",
        derivatives: "opera, operate, opus, cooperation, magnum opus"
    },
    {
        latin: "ora",
        english: "coast",
        info: "orae - noun",
        letter: "O",
        topic: "Nature & Landscape",
        set: 14
    },
    {
        latin: "oratio",
        english: "speech",
        info: "orationis - noun",
        letter: "O",
        topic: "Abstract Concepts",
        set: 14,
        hint: "Think of 'oration'",
        derivatives: "oration, oratory"
    },
    {
        latin: "ordo",
        english: "rank, order, line",
        info: "ordinis - noun",
        letter: "O",
        topic: "Abstract Concepts",
        set: 14,
        hint: "Think of 'ordinary'",
        derivatives: "order, ordinary, ordinal, coordinate, subordinate, ordain"
    },
    {
        latin: "orior",
        english: "rise, arise, start, originate",
        info: "oriri, ortus sum - verb",
        letter: "O",
        topic: "Verbs of Making/Doing",
        set: 14,
        hint: "Think of 'orient'",
        derivatives: "orient, origin, rise"
    },
    {
        latin: "orno",
        english: "adorn, decorate, provide, equip",
        info: "ornare, ornavi - verb",
        letter: "O",
        topic: "Miscellaneous",
        set: 14,
        hint: "Think of 'ornament'",
        derivatives: "ornament, adorn, ornate"
    },
    {
        latin: "oro",
        english: "beg",
        info: "orare, oravi - verb",
        letter: "O",
        topic: "Verbs of Speaking",
        set: 14,
        hint: "Think of 'oral'",
        derivatives: "oral, oration, orator, oracle, adore"
    },
    {
        latin: "os",
        english: "mouth, face",
        info: "oris - noun",
        letter: "O",
        topic: "The Body",
        set: 14,
        hint: "Think of 'oral'",
        derivatives: "oral, orifice, oscillate"
    },
    {
        latin: "ostendo",
        english: "show, point out, ostendi, indicate",
        info: "ostendere - verb",
        letter: "O",
        topic: "Miscellaneous",
        set: 14,
        hint: "Think of 'ostensible'",
        derivatives: "ostensible, ostentatious"
    },
    {
        latin: "otium",
        english: "leisure, idleness, peace",
        info: "otii - noun",
        letter: "O",
        topic: "Emotions & Mind",
        set: 14,
        hint: "Think of 'otiose'",
        derivatives: "otiose, negotiate"
    },
    {
        latin: "paene",
        english: "almost, nearly",
        info: "- adverb",
        letter: "P",
        topic: "Adverbs",
        set: 14,
        hint: "Think of 'peninsula'",
        derivatives: "peninsula, penultimate"
    },
    {
        latin: "palam",
        english: "openly",
        info: "- adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "panis",
        english: "bread",
        info: "panis - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "par",
        english: "equal",
        info: "gen paris - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 14,
        hint: "Think of 'pair'",
        derivatives: "pair, peer, compare, parity, disparate"
    },
    {
        latin: "parco",
        english: "spare",
        info: "parcere, peperci - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 14,
        hint: "Think of 'parsimonious'",
        derivatives: "parsimonious, spare"
    },
    {
        latin: "parens",
        english: "m/f parent; pl oft relations 3",
        info: "parentis - noun",
        letter: "P",
        topic: "Family & People",
        set: 14
    },
    {
        latin: "pareo",
        english: "obey",
        info: "parere, parui - verb",
        letter: "P",
        topic: "Verbs of Ruling",
        set: 14,
        hint: "Think of 'apparent'",
        derivatives: "apparent, appear, apparition"
    },
    {
        latin: "pario",
        english: "win, acquire, gain, secure; bring forth, bear (a child), produce",
        info: "parere, peperi - verb",
        letter: "P",
        topic: "Verbs of Giving/Taking",
        set: 14,
        hint: "Think of 'parent'",
        derivatives: "parent, parturition, viviparous"
    },
    {
        latin: "paro",
        english: "prepare, provide",
        info: "parare, paravi - verb",
        letter: "P",
        topic: "Verbs of Making/Doing",
        set: 14,
        hint: "Think of 'repair'",
        derivatives: "prepare, repair, separate, apparatus, compare"
    },
    {
        latin: "pars",
        english: "part, some; direction",
        info: "partis - noun",
        letter: "P",
        topic: "Abstract Concepts",
        set: 14,
        derivatives: "part, partial, participate, particle, partition, party"
    },
    {
        latin: "parvus",
        english: "small",
        info: "parva, parvum - adjective",
        letter: "P",
        topic: "Size & Quantity",
        set: 14,
        derivatives: "parvo (small)"
    },
    {
        latin: "passim",
        english: "in all directions, far and wide, everywhere",
        info: "- adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "passus",
        english: "pace, (double) step",
        info: "passus - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 14,
        hint: "Think of 'pass'",
        derivatives: "pace, pass, passage, compass"
    },
    {
        latin: "pastor",
        english: "shepherd",
        info: "pastoris - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 14
    },
    {
        latin: "pateo",
        english: "lie open, be clear",
        info: "patere, patui - verb",
        letter: "P",
        topic: "Verbs of Being",
        set: 14
    },
    {
        latin: "pater",
        english: "father",
        info: "patris - noun",
        letter: "P",
        topic: "Family & People",
        set: 14,
        hint: "Think of 'paternal'",
        derivatives: "paternal, paternity, patriarch, patron, pattern, patriate"
    },
    {
        latin: "patior",
        english: "suffer, endure, allow",
        info: "pati, passus sum - verb",
        letter: "P",
        topic: "Verbs of Ruling",
        set: 14,
        hint: "Think of 'patient'",
        derivatives: "patient, passion, passive, compassion, compatible"
    },
    {
        latin: "patria",
        english: "homeland, native land, country",
        info: "patriae - noun",
        letter: "P",
        topic: "Government & Politics",
        set: 14,
        hint: "Think of 'patriot'",
        derivatives: "patriot, expatriate, repatriate"
    },
    {
        latin: "patrius",
        english: "of a father, hereditary, ancestral",
        info: "patria, patrium - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 15,
        derivatives: "patriot, expatriate, repatriate"
    },
    {
        latin: "patronus",
        english: "patron, protector",
        info: "patroni - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "pauci",
        english: "few, a few pl",
        info: "paucae, pauca - adjective",
        letter: "P",
        topic: "Size & Quantity",
        set: 15,
        derivatives: "paucity, few"
    },
    {
        latin: "paulatim",
        english: "gradually, little by little",
        info: "- adverb",
        letter: "P",
        topic: "Adverbs",
        set: 15
    },
    {
        latin: "paulisper",
        english: "for a short time",
        info: "- adverb",
        letter: "P",
        topic: "Time & Seasons",
        set: 15
    },
    {
        latin: "paulo/paulum",
        english: "a little, somewhat",
        info: "- adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "pauper",
        english: "poor man, pauper",
        info: "gen pauperis adj 3 poor, as - noun",
        letter: "P",
        topic: "Family & People",
        set: 15,
        derivatives: "pauper, poor, poverty, impoverish"
    },
    {
        latin: "pavor",
        english: "panic, alarm, dread",
        info: "pavoris - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "pax",
        english: "peace",
        info: "pacis - noun",
        letter: "P",
        topic: "Emotions & Mind",
        set: 15,
        hint: "Think of 'pacific'",
        derivatives: "peace, pacific, pacify, appease, pact"
    },
    {
        latin: "pectus",
        english: "chest, breast, heart, spirit",
        info: "pectoris - noun",
        letter: "P",
        topic: "The Body",
        set: 15,
        hint: "Think of 'pectoral'",
        derivatives: "pectoral, expect"
    },
    {
        latin: "pecunia",
        english: "money",
        info: "pecuniae - noun",
        letter: "P",
        topic: "Wealth & Trade",
        set: 15,
        hint: "Think of 'pecuniary'",
        derivatives: "pecuniary, impecunious"
    },
    {
        latin: "pedes",
        english: "foot-soldier, pl infantry",
        info: "peditis - noun",
        letter: "P",
        topic: "Military & War",
        set: 15
    },
    {
        latin: "peior",
        english: "worse",
        info: "peius comp - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "pello",
        english: "drive, push, rout",
        info: "pellere, pepuli - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 15,
        hint: "Think of 'compel'",
        derivatives: "compel, expel, impel, propel, repel, pulse, appeal"
    },
    {
        latin: "per",
        english: "through, throughout, prefix along; (in compounds) through, thoroughly, very",
        info: "+ acc, or as - preposition",
        letter: "P",
        topic: "Prepositions",
        set: 15,
        hint: "Think of 'per'",
        derivatives: "per, perfect, perform, permit, persist"
    },
    {
        latin: "perdo",
        english: "destroy, ruin, lose, waste",
        info: "perdere, perdidi - verb",
        letter: "P",
        topic: "Verbs of Making/Doing",
        set: 15
    },
    {
        latin: "pereo",
        english: "die, perish, be ruined",
        info: "perire, perii - verb",
        letter: "P",
        topic: "Verbs of Being",
        set: 15,
        derivatives: "perish (related)"
    },
    {
        latin: "perficio",
        english: "bring about, perfeci, complete, perfect",
        info: "perficere - verb",
        letter: "P",
        topic: "Verbs of Making/Doing",
        set: 15,
        derivatives: "perfect, perfection"
    },
    {
        latin: "perfidia",
        english: "treachery, faithlessness",
        info: "perfidiae - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "perfidus",
        english: "treacherous, faithless, deceitful",
        info: "perfida, perfidum - adjective",
        letter: "P",
        topic: "Quality & Character",
        set: 15
    },
    {
        latin: "periculum",
        english: "danger",
        info: "periculi - noun",
        letter: "P",
        topic: "Abstract Concepts",
        set: 15,
        hint: "Think of 'peril'",
        derivatives: "peril, perilous, imperil"
    },
    {
        latin: "peritus",
        english: "skilled in",
        info: "perita, peritum - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "permitto",
        english: "hand over, entrust, permisi, permit, allow",
        info: "permittere - verb",
        letter: "P",
        topic: "Verbs of Ruling",
        set: 15,
        hint: "Think of 'permission'",
        derivatives: "permit, permission"
    },
    {
        latin: "persuadeo",
        english: "persuade, convince (+ persuasi, dat)",
        info: "persuadere - verb",
        letter: "P",
        topic: "Verbs of Speaking",
        set: 15,
        derivatives: "persuade, persuasion, persuasive"
    },
    {
        latin: "perterritus",
        english: "terrified, very frightened",
        info: "perterrita - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "pervenio",
        english: "reach, arrive",
        info: "pervenire - verb",
        letter: "P",
        topic: "Verbs of Motion",
        set: 15,
        hint: "Think of 'pervade (unrelated)'",
        derivatives: "pervade (unrelated)"
    },
    {
        latin: "pes",
        english: "foot, paw",
        info: "pedis - noun",
        letter: "P",
        topic: "The Body",
        set: 15,
        hint: "Think of 'pedal'",
        derivatives: "pedal, pedestrian, pedestal, impede, expedite, biped"
    },
    {
        latin: "pessimus",
        english: "worst, very bad",
        info: "pessima, sup - adjective",
        letter: "P",
        topic: "Quality & Character",
        set: 15,
        hint: "Think of 'pessimist'",
        derivatives: "pessimist, pessimism"
    },
    {
        latin: "peto",
        english: "seek, ask for, make petitum for, attack",
        info: "petere, petivi - verb",
        letter: "P",
        topic: "Verbs of Fighting",
        set: 15,
        hint: "Think of 'petition'",
        derivatives: "petition, compete, repeat, appetite, impetus, perpetuate"
    },
    {
        latin: "pietas",
        english: "piety, dutifulness",
        info: "pietatis - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15,
        hint: "Think of 'pious'",
        derivatives: "piety, pious"
    },
    {
        latin: "pilum",
        english: "javelin",
        info: "pili - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "pius",
        english: "pious, devout, dutiful",
        info: "pia, pium - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 15,
        hint: "Think of 'piety'",
        derivatives: "pious, piety, impious"
    },
    {
        latin: "placet",
        english: "it pleases, it suits, it is impsnl resolved by",
        info: "placere, placuit - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "plebs",
        english: "3 f the people, common people",
        info: "plebis - noun",
        letter: "P",
        topic: "Government & Politics",
        set: 15,
        hint: "Think of 'plebeian'",
        derivatives: "plebeian, plebe"
    },
    {
        latin: "plenus",
        english: "full, filled",
        info: "plena, plenum - adjective",
        letter: "P",
        topic: "Size & Quantity",
        set: 15,
        hint: "Think of 'plenty'",
        derivatives: "plenty, plenary, replenish, complete, plethora"
    },
    {
        latin: "plerique",
        english: "pl most, the majority pleraque",
        info: "pleraeque, - adjective",
        letter: "P",
        topic: "Size & Quantity",
        set: 15
    },
    {
        latin: "plurimus",
        english: "most, very much, pl plurimum very many",
        info: "plurima, sup - adjective",
        letter: "P",
        topic: "Size & Quantity",
        set: 15,
        derivatives: "plural, plurality"
    },
    {
        latin: "plus",
        english: "+ gen; pl, comp more (comp of",
        info: "(sg, n - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15,
        derivatives: "plus, plural, surplus"
    },
    {
        latin: "poculum",
        english: "wine cup, drinking vessel",
        info: "poculi - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "poena",
        english: "punishment, penalty",
        info: "poenae - noun",
        letter: "P",
        topic: "Abstract Concepts",
        set: 15,
        hint: "Think of 'pain'",
        derivatives: "pain, penal, penalty, punish, impunity"
    },
    {
        latin: "poeta",
        english: "poet",
        info: "poetae - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "polliceor",
        english: "promise",
        info: "polliceri - verb",
        letter: "P",
        topic: "Verbs of Speaking",
        set: 15
    },
    {
        latin: "pondus",
        english: "weight, burden",
        info: "ponderis - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "pono",
        english: "place, put, set up (camp), put aside",
        info: "ponere, posui - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 15,
        hint: "Think of 'position'",
        derivatives: "position, deposit, compose, expose, propose, oppose, post"
    },
    {
        latin: "pons",
        english: "bridge",
        info: "pontis - noun",
        letter: "P",
        topic: "Buildings & Places",
        set: 15,
        hint: "Think of 'pont'",
        derivatives: "pont, pontiff, pontificate"
    },
    {
        latin: "populus",
        english: "people, nation",
        info: "populi - noun",
        letter: "P",
        topic: "Government & Politics",
        set: 15,
        hint: "Think of 'popular'",
        derivatives: "popular, population, public, publish, people"
    },
    {
        latin: "porro",
        english: "further, forwards, moreover",
        info: "- adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 15
    },
    {
        latin: "porta",
        english: "gate",
        info: "portae - noun",
        letter: "P",
        topic: "Buildings & Places",
        set: 15,
        hint: "Think of 'port'",
        derivatives: "port, portal, porthole"
    },
    {
        latin: "porto",
        english: "carry, bear, take",
        info: "portare, portavi - verb",
        letter: "P",
        topic: "Verbs of Giving/Taking",
        set: 15,
        hint: "Think of 'port'",
        derivatives: "port, portal, transport, export, import, report, portable"
    },
    {
        latin: "portus",
        english: "harbour, port",
        info: "portus - noun",
        letter: "P",
        topic: "Buildings & Places",
        set: 15
    },
    {
        latin: "posco",
        english: "demand, ask for",
        info: "poscere, poposci - verb",
        letter: "P",
        topic: "Verbs of Speaking",
        set: 16,
        hint: "Think of 'postulate'",
        derivatives: "postulate, expostulate"
    },
    {
        latin: "possideo",
        english: "possess, occupy, possedi, control",
        info: "possidere - verb",
        letter: "P",
        topic: "Verbs of Ruling",
        set: 16,
        derivatives: "possess, possession"
    },
    {
        latin: "possum",
        english: "can, be able",
        info: "posse, potui - verb",
        letter: "P",
        topic: "Verbs of Being",
        set: 16,
        hint: "Think of 'possible'",
        derivatives: "possible, potent, power, posse, potency"
    },
    {
        latin: "post",
        english: "after, behind; (as adv) afterwards, next",
        info: "+ acc - preposition",
        letter: "P",
        topic: "Prepositions",
        set: 16,
        hint: "Think of 'post'",
        derivatives: "post, posterior, posthumous, postpone"
    },
    {
        latin: "postea",
        english: "afterwards, then",
        info: "- adverb",
        letter: "P",
        topic: "Adverbs",
        set: 16
    },
    {
        latin: "postquam",
        english: "after (X happened, …), when",
        info: "- conjunction",
        letter: "P",
        topic: "Conjunctions",
        set: 16,
        derivatives: "after (no direct derivative)"
    },
    {
        latin: "postremus",
        english: "last postremum",
        info: "postrema - adjective",
        letter: "P",
        topic: "Size & Quantity",
        set: 16
    },
    {
        latin: "postridie",
        english: "on the next day",
        info: "- adverb",
        letter: "P",
        topic: "Time & Seasons",
        set: 16
    },
    {
        latin: "postulo",
        english: "demand, ask",
        info: "postulare - verb",
        letter: "P",
        topic: "Verbs of Speaking",
        set: 16,
        hint: "Think of 'postulate'",
        derivatives: "postulate, expostulate"
    },
    {
        latin: "potens",
        english: "powerful",
        info: "gen potentis - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'potent'",
        derivatives: "potent, potential, omnipotent, impotent, potency"
    },
    {
        latin: "potestas",
        english: "power, authority; opportunity",
        info: "potestatis - noun",
        letter: "P",
        topic: "Government & Politics",
        set: 16,
        hint: "Think of 'potent'",
        derivatives: "power, potent"
    },
    {
        latin: "potior",
        english: "seize, get possession sum of",
        info: "potiri, potitus - verb",
        letter: "P",
        topic: "Verbs of Giving/Taking",
        set: 16,
        hint: "Think of 'possess (related)'",
        derivatives: "possess (related)"
    },
    {
        latin: "potius",
        english: "rather, more",
        info: "- adverb",
        letter: "P",
        topic: "Adverbs",
        set: 16
    },
    {
        latin: "prae",
        english: "in front of, before",
        info: "+ abl - preposition",
        letter: "P",
        topic: "Prepositions",
        set: 16,
        hint: "Think of 'pre-'",
        derivatives: "pre-, precede, prefer, prescribe"
    },
    {
        latin: "praebeo",
        english: "provide, give, show, praebui, offer",
        info: "praebere - verb",
        letter: "P",
        topic: "Verbs of Giving/Taking",
        set: 16,
        derivatives: "provide (related)"
    },
    {
        latin: "praeceps",
        english: "headlong, sheer",
        info: "gen praecipitis - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'precipice'",
        derivatives: "precipice, precipitate"
    },
    {
        latin: "praeda",
        english: "booty, plunder",
        info: "praedae - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'predator'",
        derivatives: "predator, prey, depredation"
    },
    {
        latin: "praeficio",
        english: "put (X acc) in charge praefeci, of",
        info: "praeficere - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16
    },
    {
        latin: "praemium",
        english: "prize, reward",
        info: "praemii - noun",
        letter: "P",
        topic: "Wealth & Trade",
        set: 16,
        hint: "Think of 'premium'",
        derivatives: "premium, prize"
    },
    {
        latin: "praesidium",
        english: "protection, garrison, fortification",
        info: "praesidii - noun",
        letter: "P",
        topic: "Miscellaneous",
        set: 16
    },
    {
        latin: "praesum",
        english: "be in charge of",
        info: "praeesse, praefui - verb",
        letter: "P",
        topic: "Verbs of Being",
        set: 16
    },
    {
        latin: "praeter",
        english: "except, beyond, besides",
        info: "+ acc - preposition",
        letter: "P",
        topic: "Prepositions",
        set: 16,
        hint: "Think of 'preterite'",
        derivatives: "preterite, preternatural"
    },
    {
        latin: "praeterea",
        english: "besides, moreover, in addition",
        info: "- adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16
    },
    {
        latin: "praetor",
        english: "praetor (magistrate concerned with administration of justice etc.), governor",
        info: "praetoris - noun",
        letter: "P",
        topic: "Government & Politics",
        set: 16
    },
    {
        latin: "precor",
        english: "pray (to), beg",
        info: "precari, precatus - verb",
        letter: "P",
        topic: "Verbs of Speaking",
        set: 16,
        derivatives: "pray, prayer, deprecate, imprecation"
    },
    {
        latin: "pretium",
        english: "price, value",
        info: "pretii - noun",
        letter: "P",
        topic: "Wealth & Trade",
        set: 16,
        hint: "Think of 'precious'",
        derivatives: "price, precious, appreciate, depreciate, appraise"
    },
    {
        latin: "primo/primum",
        english: "at first",
        info: "- adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16
    },
    {
        latin: "primus",
        english: "first; chief",
        info: "prima, primum - adjective",
        letter: "P",
        topic: "Size & Quantity",
        set: 16,
        hint: "Think of 'prime'",
        derivatives: "prime, primary, primitive, premier, prince, primate"
    },
    {
        latin: "princeps",
        english: "chief, chieftain; emperor",
        info: "principis - noun",
        letter: "P",
        topic: "Government & Politics",
        set: 16,
        hint: "Think of 'prince'",
        derivatives: "prince, principal, principle"
    },
    {
        latin: "prior",
        english: "previous, former; superior",
        info: "gen prioris - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'prior'",
        derivatives: "prior, priority, priory"
    },
    {
        latin: "prius",
        english: "before, formerly, previously",
        info: "- adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'prior'",
        derivatives: "prior, priority"
    },
    {
        latin: "priusquam",
        english: "before (X happened, …), until",
        info: "- conjunction",
        letter: "P",
        topic: "Conjunctions",
        set: 16
    },
    {
        latin: "privatus",
        english: "private, personal, individual",
        info: "privata, privatum - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'privacy'",
        derivatives: "private, privacy, deprive"
    },
    {
        latin: "pro",
        english: "in front of, for, on prefix behalf of, in return for; (in compounds) forward",
        info: "+ abl, or as - preposition",
        letter: "P",
        topic: "Prepositions",
        set: 16,
        hint: "Think of 'pro-'",
        derivatives: "pro-, proceed, produce, promote, propel"
    },
    {
        latin: "probo",
        english: "approve (of); prove, demonstrate",
        info: "probare, probavi - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'probable'",
        derivatives: "prove, probable, probe, approve, probation, proof"
    },
    {
        latin: "procedo",
        english: "advance, proceed",
        info: "procedere - verb",
        letter: "P",
        topic: "Verbs of Motion",
        set: 16,
        hint: "Think of 'process'",
        derivatives: "proceed, process, procedure"
    },
    {
        latin: "procido",
        english: "fall, fall forwards, fall procidi down",
        info: "procidere - verb",
        letter: "P",
        topic: "Verbs of Motion",
        set: 16
    },
    {
        latin: "procul",
        english: "far away, distant",
        info: "- adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'proclaim (unrelated)'",
        derivatives: "proclaim (unrelated)"
    },
    {
        latin: "prodo",
        english: "betray, surrender",
        info: "prodere, prodidi - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16
    },
    {
        latin: "proelium",
        english: "battle",
        info: "proelii - noun",
        letter: "P",
        topic: "Military & War",
        set: 16
    },
    {
        latin: "proficiscor",
        english: "set out, depart",
        info: "proficisci - verb",
        letter: "P",
        topic: "Verbs of Motion",
        set: 16,
        hint: "Think of 'proficient (unrelated)'",
        derivatives: "proficient (unrelated)"
    },
    {
        latin: "progredior",
        english: "advance, proceed",
        info: "progredi - verb",
        letter: "P",
        topic: "Verbs of Motion",
        set: 16
    },
    {
        latin: "prohibeo",
        english: "prevent, restrain, prohibui, keep off",
        info: "prohibere - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'prohibit'",
        derivatives: "prohibit, prohibition"
    },
    {
        latin: "promitto",
        english: "promise promisi",
        info: "promittere - verb",
        letter: "P",
        topic: "Verbs of Speaking",
        set: 16,
        hint: "Think of 'promissory'",
        derivatives: "promise, promissory"
    },
    {
        latin: "prope",
        english: "prep/adv near comp propius, sup proxime)",
        info: "+ acc (or as - adverb",
        letter: "P",
        topic: "Miscellaneous",
        set: 16
    },
    {
        latin: "propter",
        english: "on account of, because of",
        info: "+ acc - preposition",
        letter: "P",
        topic: "Prepositions",
        set: 16,
        hint: "Think of 'proper (unrelated)'",
        derivatives: "proper (unrelated)"
    },
    {
        latin: "provincia",
        english: "province",
        info: "provinciae - noun",
        letter: "P",
        topic: "Buildings & Places",
        set: 16
    },
    {
        latin: "proximus",
        english: "nearest, next, last proximum",
        info: "proxima - adjective",
        letter: "P",
        topic: "Size & Quantity",
        set: 16,
        hint: "Think of 'proximate'",
        derivatives: "proximate, proximity, approximate"
    },
    {
        latin: "prudens",
        english: "intelligent, prudent, foreseeing",
        info: "gen prudentis - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 16
    },
    {
        latin: "publicus",
        english: "public, common publicum",
        info: "publica - adjective",
        letter: "P",
        topic: "Miscellaneous",
        set: 16,
        hint: "Think of 'publish'",
        derivatives: "public, publish, publication"
    },
    {
        latin: "pudor",
        english: "shame, modesty, honour; disgrace",
        info: "pudoris - noun",
        letter: "P",
        topic: "Abstract Concepts",
        set: 17,
        hint: "Think of 'impudent'",
        derivatives: "impudent, pudency"
    },
    {
        latin: "puella",
        english: "girl",
        info: "puellae - noun",
        letter: "P",
        topic: "Family & People",
        set: 17,
        hint: "Think of 'puerile (via puer)'",
        derivatives: "puerile (via puer)"
    },
    {
        latin: "puer",
        english: "boy",
        info: "pueri - noun",
        letter: "P",
        topic: "Family & People",
        set: 17,
        hint: "Think of 'puerile'",
        derivatives: "puerile, puerilty"
    },
    {
        latin: "pugna",
        english: "fight, battle",
        info: "pugnae - noun",
        letter: "P",
        topic: "Military & War",
        set: 17,
        hint: "Think of 'pugnacious'",
        derivatives: "pugnacious, repugnant, impugn"
    },
    {
        latin: "pugno",
        english: "fight",
        info: "pugnare - verb",
        letter: "P",
        topic: "Verbs of Fighting",
        set: 17,
        hint: "Think of 'pugnacious'",
        derivatives: "pugnacious, repugnant, impugn, pugilist"
    },
    {
        latin: "pulcher",
        english: "beautiful, handsome, pulchrum fine",
        info: "pulchra - adjective",
        letter: "P",
        topic: "Quality & Character",
        set: 17,
        hint: "Think of 'pulchritude'",
        derivatives: "pulchritude"
    },
    {
        latin: "punio",
        english: "punish",
        info: "punire, punivi - verb",
        letter: "P",
        topic: "Miscellaneous",
        set: 17,
        derivatives: "punish, punishment, punitive"
    },
    {
        latin: "puto",
        english: "think, consider, reckon",
        info: "putare, putavi - verb",
        letter: "P",
        topic: "Verbs of Thinking",
        set: 17,
        hint: "Think of 'compute'",
        derivatives: "compute, dispute, reputation, impute, deputy, putative"
    },
    {
        latin: "quadraginta",
        english: "forty",
        info: "- numeral",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "quadringenti",
        english: "400 quadringenta",
        info: "quadringentae - numeral",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "quaero",
        english: "search for, look for, quaesivi, ask, enquire",
        info: "quaerere - verb",
        letter: "Q",
        topic: "Verbs of Perception",
        set: 17,
        hint: "Think of 'query'",
        derivatives: "query, quest, question, require, acquire, inquire, inquest"
    },
    {
        latin: "qualis",
        english: "what sort of?",
        info: "? quale? - adjective",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17,
        hint: "Think of 'quality'",
        derivatives: "quality, qualify, qualification"
    },
    {
        latin: "quam",
        english: "how …! how … ?, than, as",
        info: "- adverb",
        letter: "Q",
        topic: "Adverbs",
        set: 17,
        hint: "Think of 'quantity (unrelated)'",
        derivatives: "quantity (unrelated)"
    },
    {
        latin: "quamquam",
        english: "although",
        info: "- conjunction",
        letter: "Q",
        topic: "Conjunctions",
        set: 17,
        derivatives: "although (no direct derivative)"
    },
    {
        latin: "quamvis",
        english: "although",
        info: "- conjunction",
        letter: "Q",
        topic: "Conjunctions",
        set: 17
    },
    {
        latin: "quando",
        english: "when?",
        info: "? - adverb",
        letter: "Q",
        topic: "Adverbs",
        set: 17,
        hint: "Think of 'when (no direct derivative)'",
        derivatives: "when (no direct derivative)"
    },
    {
        latin: "quantus",
        english: "how big? how much??",
        info: "? quanta? - adjective",
        letter: "Q",
        topic: "Size & Quantity",
        set: 17,
        hint: "Think of 'quantity'",
        derivatives: "quantity, quantum"
    },
    {
        latin: "quare",
        english: "how? why?",
        info: "? - adverb",
        letter: "Q",
        topic: "Adverbs",
        set: 17
    },
    {
        latin: "quartus",
        english: "fourth",
        info: "quarta, quartum - adjective",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "quasi",
        english: "as if, just as, nearly",
        info: "- adverb",
        letter: "Q",
        topic: "Adverbs",
        set: 17,
        derivatives: "quasi, quash"
    },
    {
        latin: "quattuor",
        english: "four",
        info: "- numeral",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17,
        hint: "Think of 'quarter'",
        derivatives: "quarter, quartet, quadrant"
    },
    {
        latin: "quattuordecim",
        english: "fourteen",
        info: "- numeral",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "-que",
        english: "and",
        info: "- conjunction",
        letter: "A",
        topic: "Conjunctions",
        set: 17
    },
    {
        latin: "queror",
        english: "complain",
        info: "queri, questus - verb",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17,
        hint: "Think of 'quarrel'",
        derivatives: "quarrel, querulous"
    },
    {
        latin: "qui",
        english: "who, which; which?",
        info: "quae, quod - pronoun",
        letter: "Q",
        topic: "Pronouns",
        set: 17,
        derivatives: "who, which (no direct derivative)"
    },
    {
        latin: "quia",
        english: "because",
        info: "- conjunction",
        letter: "Q",
        topic: "Conjunctions",
        set: 17,
        derivatives: "because (no direct derivative)"
    },
    {
        latin: "quicumque",
        english: "whoever, whatever quodcumque",
        info: "quaecumque - pronoun",
        letter: "Q",
        topic: "Pronouns",
        set: 17
    },
    {
        latin: "quidam",
        english: "a certain, one, some quoddam",
        info: "quaedam pron / - adjective",
        letter: "Q",
        topic: "Size & Quantity",
        set: 17,
        hint: "Think of 'quiddity (essence)'",
        derivatives: "quiddity (essence)"
    },
    {
        latin: "quidem",
        english: "indeed, in fact, however",
        info: "- adverb",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17,
        derivatives: "indeed (no direct derivative)"
    },
    {
        latin: "quies",
        english: "rest, peace, quiet",
        info: "quietis - noun",
        letter: "Q",
        topic: "Abstract Concepts",
        set: 17,
        hint: "Think of 'quiescent'",
        derivatives: "quiet, quiescent, acquiesce, requiem"
    },
    {
        latin: "quin",
        english: "but that, that … not, without",
        info: "- conjunction",
        letter: "Q",
        topic: "Conjunctions",
        set: 17,
        hint: "Think of 'indeed (no direct derivative)'",
        derivatives: "indeed (no direct derivative)"
    },
    {
        latin: "quindecim",
        english: "fifteen",
        info: "- numeral",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "quingenti",
        english: "500 quingenta",
        info: "quingentae - numeral",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "quinquaginta",
        english: "fifty",
        info: "- numeral",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "quinque",
        english: "five",
        info: "- numeral",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17,
        hint: "Think of 'quintet'",
        derivatives: "quintet, quintuplet"
    },
    {
        latin: "quintus",
        english: "fifth",
        info: "quinta, quintum - adjective",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "quis",
        english: "who? what?; anyone, anything, any quid? why?",
        info: "(?) quid? - pronoun",
        letter: "Q",
        topic: "Pronouns",
        set: 17,
        hint: "Think of 'who (no direct derivative)'",
        derivatives: "who (no direct derivative)"
    },
    {
        latin: "quisquam",
        english: "anyone, anything",
        info: "quicquam - pronoun",
        letter: "Q",
        topic: "Pronouns",
        set: 17,
        derivatives: "anyone (no direct derivative)"
    },
    {
        latin: "quisque",
        english: "each, each one, every quidque",
        info: "quaeque - pronoun",
        letter: "Q",
        topic: "Pronouns",
        set: 17,
        derivatives: "each (no direct derivative)"
    },
    {
        latin: "quisquis",
        english: "whoever, whatever",
        info: "quicquid - pronoun",
        letter: "Q",
        topic: "Pronouns",
        set: 17
    },
    {
        latin: "quo",
        english: "where to? to where",
        info: "(?) - adverb",
        letter: "Q",
        topic: "Adverbs",
        set: 17,
        hint: "Think of 'whither (no direct derivative)'",
        derivatives: "where, whither (no direct derivative)"
    },
    {
        latin: "quoad",
        english: "as far as, as long as, until",
        info: "- adverb",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17
    },
    {
        latin: "quod",
        english: "because, (as to) the fact that",
        info: "- conjunction",
        letter: "Q",
        topic: "Conjunctions",
        set: 17,
        derivatives: "that, because (no direct derivative)"
    },
    {
        latin: "quominus",
        english: "so that … not, so as to prevent",
        info: "- conjunction",
        letter: "Q",
        topic: "Conjunctions",
        set: 17
    },
    {
        latin: "quomodo",
        english: "how? in what way?",
        info: "? - adverb",
        letter: "Q",
        topic: "Adverbs",
        set: 17,
        hint: "Think of 'how (no direct derivative)'",
        derivatives: "how (no direct derivative)"
    },
    {
        latin: "quondam",
        english: "one day, once",
        info: "- adverb",
        letter: "Q",
        topic: "Time & Seasons",
        set: 17,
        hint: "Think of 'quondam (former)'",
        derivatives: "quondam (former)"
    },
    {
        latin: "quoniam",
        english: "since",
        info: "- conjunction",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17,
        derivatives: "since (no direct derivative)"
    },
    {
        latin: "quoque",
        english: "also, too",
        info: "- conjunction",
        letter: "Q",
        topic: "Miscellaneous",
        set: 17,
        derivatives: "also (no direct derivative)"
    },
    {
        latin: "quot",
        english: "how many?",
        info: "? indecl - adjective",
        letter: "Q",
        topic: "Size & Quantity",
        set: 17,
        hint: "Think of 'quota'",
        derivatives: "quota, quotient"
    },
    {
        latin: "quotiens",
        english: "how often?; as often as, whenever",
        info: "- adverb",
        letter: "Q",
        topic: "Time & Seasons",
        set: 17
    },
    {
        latin: "rapio",
        english: "seize, grab, carry off, plunder",
        info: "rapere, rapui - verb",
        letter: "R",
        topic: "Verbs of Giving/Taking",
        set: 18,
        hint: "Think of 'rapid'",
        derivatives: "rapid, rapture, rapt, rape, ravish, rapacious"
    },
    {
        latin: "rarus",
        english: "thin, rare, scattered",
        info: "rara, rarum - adjective",
        letter: "R",
        topic: "Size & Quantity",
        set: 18
    },
    {
        latin: "ratio",
        english: "reason, account, reckoning, manner",
        info: "rationis - noun",
        letter: "R",
        topic: "Abstract Concepts",
        set: 18,
        hint: "Think of 'ratio'",
        derivatives: "ratio, rational, reason, ration"
    },
    {
        latin: "re-",
        english: "back, again",
        info: "- prefix",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "recens",
        english: "recent, fresh, new",
        info: "gen recentis - adjective",
        letter: "R",
        topic: "Quality & Character",
        set: 18
    },
    {
        latin: "recipio",
        english: "regain, receive, welcome",
        info: "recipere, recepi - verb",
        letter: "R",
        topic: "Verbs of Giving/Taking",
        set: 18,
        hint: "Think of 'reception'",
        derivatives: "receive, reception, recipe, recipient"
    },
    {
        latin: "recito",
        english: "recite, read aloud",
        info: "recitare, recitavi - verb",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "rectus",
        english: "straight, direct; right, proper",
        info: "recta, rectum - adjective",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "recuso",
        english: "refuse, reject",
        info: "recusare - verb",
        letter: "R",
        topic: "Miscellaneous",
        set: 18,
        hint: "Think of 'recuse'",
        derivatives: "recuse, refuse"
    },
    {
        latin: "reddo",
        english: "give back, restore, hand over, make, render",
        info: "reddere, reddidi - verb",
        letter: "R",
        topic: "Verbs of Giving/Taking",
        set: 18,
        hint: "Think of 'rendition'",
        derivatives: "render, rendition"
    },
    {
        latin: "redeo",
        english: "go back, come back, return",
        info: "redire, redii - verb",
        letter: "R",
        topic: "Verbs of Motion",
        set: 18,
        derivatives: "return (via Old French)"
    },
    {
        latin: "reduco",
        english: "lead back",
        info: "reducere, reduxi - verb",
        letter: "R",
        topic: "Verbs of Ruling",
        set: 18
    },
    {
        latin: "refero",
        english: "bring/carry back; report, tell, refer",
        info: "referre, rettuli - verb",
        letter: "R",
        topic: "Verbs of Speaking",
        set: 18,
        derivatives: "refer, reference, referee"
    },
    {
        latin: "reficio",
        english: "repair, restore, refresh",
        info: "reficere, refeci - verb",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "regina",
        english: "queen",
        info: "reginae - noun",
        letter: "R",
        topic: "Government & Politics",
        set: 18,
        hint: "Think of 'regal'",
        derivatives: "queen, regal, regicide"
    },
    {
        latin: "regio",
        english: "region, district",
        info: "regionis - noun",
        letter: "R",
        topic: "Buildings & Places",
        set: 18,
        derivatives: "region, regional"
    },
    {
        latin: "regius",
        english: "royal, kingly, regal",
        info: "regia, regium - adjective",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "regnum",
        english: "kingdom, reign, rule",
        info: "regni - noun",
        letter: "R",
        topic: "Government & Politics",
        set: 18,
        hint: "Think of 'regal'",
        derivatives: "reign, regal, regicide, interregnum"
    },
    {
        latin: "rego",
        english: "rule, reign, direct",
        info: "regere, rexi - verb",
        letter: "R",
        topic: "Verbs of Ruling",
        set: 18,
        hint: "Think of 'regal'",
        derivatives: "regal, regent, regulate, reign, region, correct, direct, rule"
    },
    {
        latin: "regredior",
        english: "go back, return",
        info: "regredi - verb",
        letter: "R",
        topic: "Verbs of Motion",
        set: 18
    },
    {
        latin: "relinquo",
        english: "leave, leave behind, reliqui, abandon",
        info: "relinquere - verb",
        letter: "R",
        topic: "Verbs of Motion",
        set: 18,
        hint: "Think of 'relinquish'",
        derivatives: "relinquish, relic, delinquent, relict"
    },
    {
        latin: "reliquus",
        english: "the rest of, the remaining, the other",
        info: "reliqua, reliquum - adjective",
        letter: "R",
        topic: "Size & Quantity",
        set: 18,
        hint: "Think of 'relic'",
        derivatives: "relic, relict"
    },
    {
        latin: "reor",
        english: "think",
        info: "reri, ratus sum - verb",
        letter: "R",
        topic: "Verbs of Thinking",
        set: 18,
        hint: "Think of 'sum'",
        derivatives: "sum, summation, essence"
    },
    {
        latin: "repello",
        english: "drive back",
        info: "repellere - verb",
        letter: "R",
        topic: "Miscellaneous",
        set: 18,
        hint: "Think of 'repel'",
        derivatives: "repel, repellent, repulse"
    },
    {
        latin: "repente",
        english: "suddenly",
        info: "- adverb",
        letter: "R",
        topic: "Adverbs",
        set: 18
    },
    {
        latin: "repeto",
        english: "go back to, recall, repetivi, attack again",
        info: "repetere - verb",
        letter: "R",
        topic: "Verbs of Fighting",
        set: 18,
        hint: "Think of 'repeat'",
        derivatives: "repeat, repetition"
    },
    {
        latin: "res",
        english: "thing, affair, matter, business",
        info: "rei - noun",
        letter: "R",
        topic: "Abstract Concepts",
        set: 18,
        hint: "Think of 'real'",
        derivatives: "real, reality, republic, rebus, reify"
    },
    {
        latin: "resisto",
        english: "resist, oppose",
        info: "resistere, restiti - verb",
        letter: "R",
        topic: "Verbs of Fighting",
        set: 18,
        derivatives: "resist, resistance, resistor"
    },
    {
        latin: "respicio",
        english: "look back; consider respexi",
        info: "respicere - verb",
        letter: "R",
        topic: "Verbs of Thinking",
        set: 18
    },
    {
        latin: "respondeo",
        english: "answer, reply respondi",
        info: "respondere - verb",
        letter: "R",
        topic: "Verbs of Speaking",
        set: 18,
        hint: "Think of 'response'",
        derivatives: "respond, response, responsible"
    },
    {
        latin: "responsum",
        english: "answer, reply",
        info: "responsi - noun",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "restituo",
        english: "restore, give back restitui",
        info: "restituere - verb",
        letter: "R",
        topic: "Verbs of Giving/Taking",
        set: 18
    },
    {
        latin: "retineo",
        english: "hold back, restrain, keep",
        info: "retinere, retinui - verb",
        letter: "R",
        topic: "Miscellaneous",
        set: 18,
        hint: "Think of 'retain'",
        derivatives: "retain, retention, retentive"
    },
    {
        latin: "rex",
        english: "king",
        info: "regis - noun",
        letter: "R",
        topic: "Government & Politics",
        set: 18,
        hint: "Think of 'regal'",
        derivatives: "regal, regent, regicide, royal, reign, realm"
    },
    {
        latin: "rideo",
        english: "laugh, smile",
        info: "ridere, risi, risum - verb",
        letter: "R",
        topic: "Miscellaneous",
        set: 18,
        hint: "Think of 'ridicule'",
        derivatives: "ridicule, ridiculous, deride, risible"
    },
    {
        latin: "ripa",
        english: "1 f bank, riverbank",
        info: "ripae - noun",
        letter: "R",
        topic: "Miscellaneous",
        set: 18,
        hint: "Think of 'riparian'",
        derivatives: "river (via Old French), riparian"
    },
    {
        latin: "rogo",
        english: "ask, ask for",
        info: "rogare, rogavi - verb",
        letter: "R",
        topic: "Verbs of Speaking",
        set: 18,
        hint: "Think of 'interrogate'",
        derivatives: "interrogate, arrogant, derogate, prerogative, abrogate"
    },
    {
        latin: "Roma",
        english: "Rome = at/in Rome)",
        info: "Romae (Romae - noun",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "Romanus",
        english: "Roman Romanum",
        info: "Romana - adjective",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "Romani",
        english: "(the) Romans pl",
        info: "Romanorum - noun",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "rota",
        english: "wheel",
        info: "rotae - noun",
        letter: "R",
        topic: "Miscellaneous",
        set: 18,
        hint: "Think of 'rotate'",
        derivatives: "rotate, rotation, rotary"
    },
    {
        latin: "ruina",
        english: "falling down, ruin, disaster",
        info: "ruinae - noun",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "rumpo",
        english: "break, burst, break through",
        info: "rumpere, rupi - verb",
        letter: "R",
        topic: "Verbs of Making/Doing",
        set: 18,
        hint: "Think of 'rupt'",
        derivatives: "rupt, rupture, corrupt, disrupt, erupt, interrupt, rout"
    },
    {
        latin: "ruo",
        english: "rush, sweep headlong, collapse",
        info: "ruere, rui - verb",
        letter: "R",
        topic: "Verbs of Motion",
        set: 18
    },
    {
        latin: "rursus/rursum",
        english: "again, back",
        info: "- adverb",
        letter: "R",
        topic: "Miscellaneous",
        set: 18
    },
    {
        latin: "rus",
        english: "country, countryside the country)",
        info: "ruris (ruri = in - noun",
        letter: "R",
        topic: "Government & Politics",
        set: 18,
        hint: "Think of 'in'",
        derivatives: "in, into, internal, intrinsic"
    },
    {
        latin: "sacer",
        english: "sacred, holy",
        info: "sacra, sacrum - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 18,
        hint: "Think of 'sacrifice'",
        derivatives: "sacred, sacrifice, sacrilege, consecrate, sacrament"
    },
    {
        latin: "sacerdos",
        english: "m/f priest, priestess 3",
        info: "sacerdotis - noun",
        letter: "S",
        topic: "Religion & Ritual",
        set: 18,
        derivatives: "sacerdotal (priestly)"
    },
    {
        latin: "sacrificium",
        english: "sacrifice",
        info: "sacrificii - noun",
        letter: "S",
        topic: "Religion & Ritual",
        set: 18
    },
    {
        latin: "saepe",
        english: "often sup saepissime",
        info: "comp saepius - adverb",
        letter: "S",
        topic: "Time & Seasons",
        set: 18,
        derivatives: "often (no direct derivative)"
    },
    {
        latin: "saevus",
        english: "savage, cruel",
        info: "saeva, saevum - adjective",
        letter: "S",
        topic: "Quality & Character",
        set: 19,
        hint: "Think of 'severe (related)'",
        derivatives: "savage, severe (related)"
    },
    {
        latin: "sagitta",
        english: "arrow",
        info: "sagittae - noun",
        letter: "S",
        topic: "Military & War",
        set: 19
    },
    {
        latin: "salus",
        english: "safety, health, greeting",
        info: "salutis - noun",
        letter: "S",
        topic: "The Body",
        set: 19,
        hint: "Think of 'save'",
        derivatives: "safe, save, salvation, salute, salubrious, salvage"
    },
    {
        latin: "saluto",
        english: "greet, salute salve! pl salvete! impv hello!",
        info: "salutare, salutavi - verb",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "sanguis",
        english: "blood",
        info: "sanguinis - noun",
        letter: "S",
        topic: "The Body",
        set: 19,
        hint: "Think of 'sanguine'",
        derivatives: "sanguine, sanguinary, consanguinity, sangria"
    },
    {
        latin: "sanus",
        english: "healthy, sane",
        info: "sana, sanum - adjective",
        letter: "S",
        topic: "Quality & Character",
        set: 19,
        hint: "Think of 'sanity'",
        derivatives: "sane, sanity, insane, sanitary"
    },
    {
        latin: "sapiens",
        english: "wise, sensible",
        info: "gen sapientis - adjective",
        letter: "S",
        topic: "Quality & Character",
        set: 19
    },
    {
        latin: "sapientia",
        english: "wisdom, good sense",
        info: "sapientiae - noun",
        letter: "S",
        topic: "Emotions & Mind",
        set: 19,
        hint: "Think of 'sapient'",
        derivatives: "sapient, Homo sapiens"
    },
    {
        latin: "satis",
        english: "enough",
        info: "- adverb",
        letter: "S",
        topic: "Miscellaneous",
        set: 19,
        hint: "Think of 'satisfy'",
        derivatives: "satisfy, satiate, saturate, asset"
    },
    {
        latin: "saxum",
        english: "rock",
        info: "saxi - noun",
        letter: "S",
        topic: "Nature & Landscape",
        set: 19
    },
    {
        latin: "scelestus",
        english: "wicked",
        info: "scelesta - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "scelus",
        english: "crime, wickedness",
        info: "sceleris - noun",
        letter: "S",
        topic: "Abstract Concepts",
        set: 19,
        hint: "Think of 'scelerate (wicked)'",
        derivatives: "scelerate (wicked)"
    },
    {
        latin: "scio",
        english: "know",
        info: "scire, scivi - verb",
        letter: "S",
        topic: "Verbs of Perception",
        set: 19,
        hint: "Think of 'science'",
        derivatives: "science, scientific, conscience, conscious, omniscient, prescient"
    },
    {
        latin: "scribo",
        english: "write",
        info: "scribere, scripsi - verb",
        letter: "S",
        topic: "Verbs of Making/Doing",
        set: 19,
        hint: "Think of 'scribe'",
        derivatives: "scribe, script, scripture, describe, inscribe, prescribe, scribble"
    },
    {
        latin: "scutum",
        english: "shield",
        info: "scuti - noun",
        letter: "S",
        topic: "Military & War",
        set: 19
    },
    {
        latin: "se",
        english: "himself, herself, itself, themselves",
        info: "sui refl - pronoun",
        letter: "S",
        topic: "Miscellaneous",
        set: 19,
        hint: "Think of 'secede'",
        derivatives: "self, secede, seduce, separate"
    },
    {
        latin: "secundus",
        english: "second; next, secundum following, favourable",
        info: "secunda - adjective",
        letter: "S",
        topic: "Size & Quantity",
        set: 19,
        derivatives: "second, secondary"
    },
    {
        latin: "sed",
        english: "but",
        info: "- conjunction",
        letter: "S",
        topic: "Conjunctions",
        set: 19,
        derivatives: "but (no direct derivative)"
    },
    {
        latin: "sedecim",
        english: "sixteen",
        info: "- numeral",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "sedeo",
        english: "sit",
        info: "sedere, sedi - verb",
        letter: "S",
        topic: "Miscellaneous",
        set: 19,
        hint: "Think of 'sedentary'",
        derivatives: "sedentary, session, sedan, sedate, reside, preside, siege"
    },
    {
        latin: "sedes",
        english: "seat, temple, home",
        info: "sedis - noun",
        letter: "S",
        topic: "Buildings & Places",
        set: 19,
        hint: "Think of 'sedentary'",
        derivatives: "sedentary, see (religious), supersede"
    },
    {
        latin: "semel",
        english: "once",
        info: "- adverb",
        letter: "S",
        topic: "Miscellaneous",
        set: 19,
        hint: "Think of 'simultaneous (related)'",
        derivatives: "simultaneous (related)"
    },
    {
        latin: "semper",
        english: "always",
        info: "- adverb",
        letter: "S",
        topic: "Time & Seasons",
        set: 19,
        hint: "Think of 'sempiternal'",
        derivatives: "always, sempiternal"
    },
    {
        latin: "senator",
        english: "senator",
        info: "senatoris - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "senatus",
        english: "(the) senate",
        info: "senatus - noun",
        letter: "S",
        topic: "Government & Politics",
        set: 19,
        hint: "Think of 'senator'",
        derivatives: "senate, senator"
    },
    {
        latin: "senex",
        english: "old man",
        info: "senis - noun",
        letter: "S",
        topic: "Family & People",
        set: 19,
        hint: "Think of 'senile'",
        derivatives: "senile, senior, senate, sire"
    },
    {
        latin: "sententia",
        english: "opinion, judgement, sentence",
        info: "sententiae - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 19,
        hint: "Think of 'sentiment'",
        derivatives: "sentence, sentiment, sententious"
    },
    {
        latin: "sentio",
        english: "feel, notice, hear, judge",
        info: "sentire, sensi - verb",
        letter: "S",
        topic: "Verbs of Perception",
        set: 19,
        hint: "Think of 'sense'",
        derivatives: "sense, sensible, sentiment, consent, resent, sentient"
    },
    {
        latin: "sepelio",
        english: "bury",
        info: "sepelire, sepelivi - verb",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "septem",
        english: "seven",
        info: "- numeral",
        letter: "S",
        topic: "Miscellaneous",
        set: 19,
        hint: "Think of 'September'",
        derivatives: "September, septet, septuple"
    },
    {
        latin: "septendecim",
        english: "seventeen",
        info: "- numeral",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "septimus",
        english: "seventh septimum",
        info: "septima - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "septingenti",
        english: "700 septingenta",
        info: "septingentae - numeral",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "septuaginta",
        english: "seventy",
        info: "- numeral",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "sequor",
        english: "follow, pursue, attend",
        info: "sequi, secutus - verb",
        letter: "S",
        topic: "Verbs of Motion",
        set: 19,
        hint: "Think of 'sequence'",
        derivatives: "sequence, sequel, consequence, subsequent, pursue, execute"
    },
    {
        latin: "servio",
        english: "be a slave, be subject",
        info: "servire, servi(v)i - verb",
        letter: "S",
        topic: "Verbs of Being",
        set: 19,
        hint: "Think of 'serve'",
        derivatives: "serve, service, servant"
    },
    {
        latin: "servo",
        english: "save, look after, protect, keep",
        info: "servare, servavi - verb",
        letter: "S",
        topic: "Verbs of Perception",
        set: 19,
        hint: "Think of 'serve'",
        derivatives: "serve, servant, service, conserve, preserve, reserve, observe"
    },
    {
        latin: "servus",
        english: "slave",
        info: "servi - noun",
        letter: "S",
        topic: "Family & People",
        set: 19,
        hint: "Think of 'serve'",
        derivatives: "serve, servant, serf, servile"
    },
    {
        latin: "sescenti",
        english: "600 sescenta",
        info: "sescentae - numeral",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "seu",
        english: "or if, whether",
        info: "- conjunction",
        letter: "S",
        topic: "Conjunctions",
        set: 19
    },
    {
        latin: "severus",
        english: "strict, severe, forbidding",
        info: "severa, severum - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 19,
        hint: "Think of 'severity'",
        derivatives: "severe, severity, persevere"
    },
    {
        latin: "sex",
        english: "six",
        info: "- numeral",
        letter: "S",
        topic: "Miscellaneous",
        set: 19,
        hint: "Think of 'sextuple'",
        derivatives: "six, sextuple, sextet"
    },
    {
        latin: "sexaginta",
        english: "sixty",
        info: "- numeral",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "sextus",
        english: "sixth",
        info: "sexta, sextum - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 19
    },
    {
        latin: "si",
        english: "if",
        info: "- conjunction",
        letter: "S",
        topic: "Conjunctions",
        set: 19,
        derivatives: "if (no direct derivative)"
    },
    {
        latin: "sic",
        english: "thus, in this way",
        info: "- adverb",
        letter: "S",
        topic: "Adverbs",
        set: 19,
        hint: "Think of 'so'",
        derivatives: "so, thus, sic (Latin abbreviation)"
    },
    {
        latin: "sicut",
        english: "like, just as, as, as if",
        info: "- adverb",
        letter: "S",
        topic: "Verbs of Emotion",
        set: 19,
        derivatives: "just as (no direct derivative)"
    },
    {
        latin: "signum",
        english: "sign, signal, military standard",
        info: "signi - noun",
        letter: "S",
        topic: "Military & War",
        set: 19,
        derivatives: "sign, signal, signature, significant, design, resign, insignia"
    },
    {
        latin: "silentium",
        english: "silence",
        info: "silentii - noun",
        letter: "S",
        topic: "Abstract Concepts",
        set: 19
    },
    {
        latin: "silva",
        english: "wood, forest",
        info: "silvae - noun",
        letter: "S",
        topic: "Nature & Landscape",
        set: 19,
        hint: "Think of 'sylvan'",
        derivatives: "sylvan, Transylvania, silviculture"
    },
    {
        latin: "similis",
        english: "similar (to), like",
        info: "simile - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'simile'",
        derivatives: "similar, simile, simulate, assimilate, resemble, facsimile"
    },
    {
        latin: "simul",
        english: "at the same time, together",
        info: "- adverb",
        letter: "S",
        topic: "Time & Seasons",
        set: 20,
        hint: "Think of 'simultaneous'",
        derivatives: "simultaneous, simulate, assemble"
    },
    {
        latin: "simulac/simulatque",
        english: "as soon as",
        info: "- conjunction",
        letter: "S",
        topic: "Conjunctions",
        set: 20
    },
    {
        latin: "sine",
        english: "without",
        info: "+ abl - preposition",
        letter: "S",
        topic: "Prepositions",
        set: 20,
        hint: "Think of 'sinecure'",
        derivatives: "without (no direct derivative), sinecure"
    },
    {
        latin: "sinister",
        english: "left, on the left, sinistrum unfavourable",
        info: "sinistra - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'sinister'",
        derivatives: "sinister, sinistral"
    },
    {
        latin: "sinistra",
        english: "left hand, left side",
        info: "sinistrae - noun",
        letter: "S",
        topic: "The Body",
        set: 20
    },
    {
        latin: "sino",
        english: "allow, permit",
        info: "sinere, sivi - verb",
        letter: "S",
        topic: "Verbs of Ruling",
        set: 20,
        hint: "Think of 'position (via ponere)'",
        derivatives: "position (via ponere)"
    },
    {
        latin: "sitis",
        english: "thirst",
        info: "sitis (acc sitim) - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 20
    },
    {
        latin: "sive",
        english: "or if, whether",
        info: "- conjunction",
        letter: "S",
        topic: "Conjunctions",
        set: 20
    },
    {
        latin: "socius",
        english: "ally, comrade, companion",
        info: "socii - noun",
        letter: "S",
        topic: "Family & People",
        set: 20,
        hint: "Think of 'social'",
        derivatives: "social, society, associate, sociable, sociology"
    },
    {
        latin: "sol",
        english: "sun, sunlight",
        info: "solis - noun",
        letter: "S",
        topic: "Nature & Landscape",
        set: 20,
        hint: "Think of 'solar'",
        derivatives: "solar, solstice, parasol, solarium, insolation"
    },
    {
        latin: "soleo",
        english: "be accustomed",
        info: "solere, solitus - verb",
        letter: "S",
        topic: "Verbs of Being",
        set: 20,
        hint: "Think of 'insolent (originally unusual)'",
        derivatives: "insolent (originally unusual)"
    },
    {
        latin: "solum",
        english: "only",
        info: "- adverb",
        letter: "S",
        topic: "Adverbs",
        set: 20,
        hint: "Think of 'soil'",
        derivatives: "soil, sole (only)"
    },
    {
        latin: "solus",
        english: "alone, only, solitary, lonely, single, deserted",
        info: "sola, solum - adjective",
        letter: "S",
        topic: "Size & Quantity",
        set: 20,
        hint: "Think of 'sole'",
        derivatives: "sole, solitary, solo, solitude, desolate, isolate"
    },
    {
        latin: "solvo",
        english: "loose, unfasten; pay",
        info: "solvere, solvi - verb",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'solve'",
        derivatives: "solve, solution, dissolve, resolve, absolve, solvent"
    },
    {
        latin: "somnium",
        english: "dream",
        info: "somnii - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 20
    },
    {
        latin: "somnus",
        english: "sleep",
        info: "somni - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'somnolent'",
        derivatives: "somnolent, insomnia, somnambulism, somnambulist"
    },
    {
        latin: "sonitus",
        english: "sound",
        info: "sonitus - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 20
    },
    {
        latin: "sono",
        english: "sound, make a noise, utter, cry out",
        info: "sonare, sonui - verb",
        letter: "S",
        topic: "Verbs of Making/Doing",
        set: 20,
        hint: "Think of 'sonic'",
        derivatives: "sound, sonic, sonorous, consonant, dissonant, resonate"
    },
    {
        latin: "sonus",
        english: "noise, sound",
        info: "soni - noun",
        letter: "S",
        topic: "Abstract Concepts",
        set: 20,
        hint: "Think of 'sonic'",
        derivatives: "sound, sonic, sonata, unison"
    },
    {
        latin: "soror",
        english: "sister",
        info: "sororis - noun",
        letter: "S",
        topic: "Family & People",
        set: 20,
        hint: "Think of 'sorority'",
        derivatives: "sorority, sororal"
    },
    {
        latin: "spatium",
        english: "space, interval, distance",
        info: "spatii - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'spatial'",
        derivatives: "space, spatial, spacious"
    },
    {
        latin: "specto",
        english: "look at, watch spectavi",
        info: "spectare - verb",
        letter: "S",
        topic: "Verbs of Perception",
        set: 20,
        hint: "Think of 'spectacle'",
        derivatives: "spectacle, spectator, inspect, respect, suspect, aspect, spectrum"
    },
    {
        latin: "sperno",
        english: "despise, reject, scorn",
        info: "spernere, sprevi - verb",
        letter: "S",
        topic: "Verbs of Emotion",
        set: 20
    },
    {
        latin: "spero",
        english: "hope, expect",
        info: "sperare, speravi - verb",
        letter: "S",
        topic: "Verbs of Thinking",
        set: 20,
        hint: "Think of 'despair'",
        derivatives: "despair, desperate, prosper, esperance, hope"
    },
    {
        latin: "spes",
        english: "hope",
        info: "spei - noun",
        letter: "S",
        topic: "Emotions & Mind",
        set: 20,
        hint: "Think of 'despair'",
        derivatives: "despair, esperance"
    },
    {
        latin: "spolium",
        english: "booty, spoil",
        info: "spolii - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 20
    },
    {
        latin: "statim",
        english: "at once, immediately",
        info: "- adverb",
        letter: "S",
        topic: "Adverbs",
        set: 20,
        derivatives: "immediately (no direct derivative)"
    },
    {
        latin: "statio",
        english: "guard, guard-post, station",
        info: "stationis - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 20
    },
    {
        latin: "statuo",
        english: "fix, determine, decide, arrange",
        info: "statuere, statui - verb",
        letter: "S",
        topic: "Verbs of Thinking",
        set: 20,
        hint: "Think of 'statue'",
        derivatives: "statue, statute, statute, institute, constitute, prostitute"
    },
    {
        latin: "sto",
        english: "stand, stand firm",
        info: "stare, steti - verb",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'state'",
        derivatives: "stand, state, station, statue, stable, constant, instant, static"
    },
    {
        latin: "strepitus",
        english: "noise, uproar, commotion",
        info: "strepitus - noun",
        letter: "S",
        topic: "Abstract Concepts",
        set: 20
    },
    {
        latin: "studium",
        english: "eagerness, study, devotion",
        info: "studii - noun",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'studio'",
        derivatives: "study, studio"
    },
    {
        latin: "stultus",
        english: "stupid, foolish",
        info: "stulta, stultum - adjective",
        letter: "S",
        topic: "Quality & Character",
        set: 20,
        hint: "Think of 'stultify'",
        derivatives: "stultify"
    },
    {
        latin: "suavis",
        english: "sweet, pleasant",
        info: "suave - adjective",
        letter: "S",
        topic: "Quality & Character",
        set: 20
    },
    {
        latin: "sub",
        english: "(to) beneath, up to + abl under, beneath",
        info: "+ acc - preposition",
        letter: "S",
        topic: "Prepositions",
        set: 20,
        hint: "Think of 'sub-'",
        derivatives: "sub-, submarine, submit, subsequent"
    },
    {
        latin: "subito",
        english: "suddenly",
        info: "- adverb",
        letter: "S",
        topic: "Adverbs",
        set: 20,
        derivatives: "sudden, suddenly"
    },
    {
        latin: "sum",
        english: "be",
        info: "esse, fui - verb",
        letter: "S",
        topic: "Verbs of Being",
        set: 20,
        hint: "Think of 'sum'",
        derivatives: "sum, summation, essence"
    },
    {
        latin: "summus",
        english: "highest, greatest, top summum",
        info: "summa - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'summit'",
        derivatives: "sum, summit, summation, consummate"
    },
    {
        latin: "sumo",
        english: "take, take up",
        info: "sumere, sumpsi - verb",
        letter: "S",
        topic: "Verbs of Giving/Taking",
        set: 20,
        hint: "Think of 'assume'",
        derivatives: "assume, consume, presume, resume, summon, sumptuous"
    },
    {
        latin: "super",
        english: "above, on top of, besides + abl over, concerning, in addition to",
        info: "+ acc - preposition",
        letter: "S",
        topic: "Prepositions",
        set: 20,
        hint: "Think of 'super'",
        derivatives: "super, superior, supreme, superb"
    },
    {
        latin: "superbus",
        english: "proud, arrogant superbum",
        info: "superba - adjective",
        letter: "S",
        topic: "Quality & Character",
        set: 20
    },
    {
        latin: "superior",
        english: "higher, upper; earlier, previous",
        info: "superius comp - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 20
    },
    {
        latin: "supero",
        english: "overcome, overpower",
        info: "superare - verb",
        letter: "S",
        topic: "Verbs of Fighting",
        set: 20,
        hint: "Think of 'superior'",
        derivatives: "superior, insuperable"
    },
    {
        latin: "supersum",
        english: "be left, remain, superfui survive",
        info: "superesse - verb",
        letter: "S",
        topic: "Verbs of Being",
        set: 20
    },
    {
        latin: "superus",
        english: "upper, higher",
        info: "supera, superum - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 20,
        hint: "Think of 'superior'",
        derivatives: "superior, supremacy"
    },
    {
        latin: "supremus",
        english: "highest, last, final, supremum supreme",
        info: "suprema - adjective",
        letter: "S",
        topic: "Size & Quantity",
        set: 20
    },
    {
        latin: "surgo",
        english: "get up, stand up, rise",
        info: "surgere, surrexi - verb",
        letter: "S",
        topic: "Verbs of Giving/Taking",
        set: 20,
        hint: "Think of 'surge'",
        derivatives: "surge, resurgent, insurgent, resurrection"
    },
    {
        latin: "suscipio",
        english: "undertake, take suscepi, on/up, begin, bear",
        info: "suscipere - verb",
        letter: "S",
        topic: "Verbs of Making/Doing",
        set: 20,
        hint: "Think of 'susceptible'",
        derivatives: "susceptible, suspect"
    },
    {
        latin: "suspicor",
        english: "mistrust, suspect sustuli",
        info: "suspicari - verb",
        letter: "S",
        topic: "Miscellaneous",
        set: 20
    },
    {
        latin: "suus",
        english: "his/her/its/their (own) refl",
        info: "sua, suum - adjective",
        letter: "S",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'suicide'",
        derivatives: "suicide, sui generis"
    },
    {
        latin: "taberna",
        english: "shop, inn",
        info: "tabernae - noun",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "taceo",
        english: "be silent, keep quiet",
        info: "tacere, tacui - verb",
        letter: "T",
        topic: "Verbs of Being",
        set: 21,
        hint: "Think of 'tacit'",
        derivatives: "tacit, taciturn, reticent"
    },
    {
        latin: "tacitus",
        english: "quiet, silent, in silence",
        info: "tacita, tacitum - adjective",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "talis",
        english: "such, of such a sort",
        info: "tale - adjective",
        letter: "T",
        topic: "Size & Quantity",
        set: 21,
        derivatives: "such, tale, tally"
    },
    {
        latin: "tam",
        english: "so",
        info: "- adverb",
        letter: "T",
        topic: "Adverbs",
        set: 21,
        derivatives: "so (no direct derivative)"
    },
    {
        latin: "tamen",
        english: "however, nevertheless, yet",
        info: "- adverb",
        letter: "T",
        topic: "Adverbs",
        set: 21,
        derivatives: "however (no direct derivative)"
    },
    {
        latin: "tamquam",
        english: "just as, like, as, as if",
        info: "- adverb",
        letter: "T",
        topic: "Verbs of Emotion",
        set: 21,
        derivatives: "as if (no direct derivative)"
    },
    {
        latin: "tandem",
        english: "at last, finally",
        info: "- adverb",
        letter: "T",
        topic: "Adverbs",
        set: 21,
        hint: "Think of 'tandem'",
        derivatives: "tandem, finally"
    },
    {
        latin: "tango",
        english: "touch",
        info: "tangere, tetigi - verb",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'tangent'",
        derivatives: "tangent, tangible, contact, contagious, intact, contingent"
    },
    {
        latin: "tantum",
        english: "only",
        info: "- adverb",
        letter: "T",
        topic: "Adverbs",
        set: 21,
        hint: "Think of 'tantamount'",
        derivatives: "tantamount"
    },
    {
        latin: "tantus",
        english: "so great, such a great, so much",
        info: "tanta, tantum - adjective",
        letter: "T",
        topic: "Size & Quantity",
        set: 21,
        derivatives: "tantamount"
    },
    {
        latin: "tectum",
        english: "roof, house",
        info: "tecti - noun",
        letter: "T",
        topic: "Buildings & Places",
        set: 21
    },
    {
        latin: "tego",
        english: "cover, protect, hide",
        info: "tegere, texi - verb",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'detect'",
        derivatives: "protect, detect, tegument, integument"
    },
    {
        latin: "telum",
        english: "weapon, javelin, missile",
        info: "teli - noun",
        letter: "T",
        topic: "Military & War",
        set: 21,
        hint: "Think of 'tele- (far'",
        derivatives: "tele- (far, related to throwing)"
    },
    {
        latin: "tempestas",
        english: "storm, weather; time",
        info: "tempestatis - noun",
        letter: "T",
        topic: "Nature & Landscape",
        set: 21,
        hint: "Think of 'tempest'",
        derivatives: "tempest, tempestuous"
    },
    {
        latin: "templum",
        english: "temple",
        info: "templi - noun",
        letter: "T",
        topic: "Religion & Ritual",
        set: 21,
        hint: "Think of 'contemplate'",
        derivatives: "temple, contemplate"
    },
    {
        latin: "tempto",
        english: "try, attempt, try out",
        info: "temptare - verb",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        derivatives: "tempt, attempt, tentative, temptation"
    },
    {
        latin: "tempus",
        english: "time",
        info: "temporis - noun",
        letter: "T",
        topic: "Time & Seasons",
        set: 21,
        hint: "Think of 'temporal'",
        derivatives: "temporal, temporary, contemporary, tempo, tense, tempest"
    },
    {
        latin: "teneo",
        english: "hold, keep, maintain",
        info: "tenere, tenui - verb",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'tenant'",
        derivatives: "tenant, tenure, tenacious, contain, obtain, retain, maintain"
    },
    {
        latin: "tergum",
        english: "back, rear",
        info: "tergi - noun",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "terra",
        english: "earth, land, ground, country",
        info: "terrae - noun",
        letter: "T",
        topic: "Nature & Landscape",
        set: 21,
        hint: "Think of 'terrain'",
        derivatives: "terrain, territory, terrestrial, terrace, inter, Mediterranean"
    },
    {
        latin: "terreo",
        english: "frighten",
        info: "terrere, terrui - verb",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'terror'",
        derivatives: "terror, terrible, terrify, deter, deterrent"
    },
    {
        latin: "terror",
        english: "terror, panic",
        info: "terroris - noun",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "tertius",
        english: "third",
        info: "tertia, tertium - adjective",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "testis",
        english: "witness",
        info: "testis - noun",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'testify'",
        derivatives: "testify, testimony, test, attest, contest, protest"
    },
    {
        latin: "theatrum",
        english: "theatre",
        info: "theatri - noun",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "timeo",
        english: "fear, be afraid",
        info: "timere, timui - verb",
        letter: "T",
        topic: "Verbs of Thinking",
        set: 21,
        hint: "Think of 'timid'",
        derivatives: "timid, timorous, intimidate"
    },
    {
        latin: "timidus",
        english: "fearful, afraid",
        info: "timida, timidum - adjective",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "timor",
        english: "fear, anxiety",
        info: "timoris - noun",
        letter: "T",
        topic: "Emotions & Mind",
        set: 21,
        hint: "Think of 'timid'",
        derivatives: "timid, timorous"
    },
    {
        latin: "tollo",
        english: "raise, lift up, hold up; remove, destroy",
        info: "tollere, sustuli - verb",
        letter: "T",
        topic: "Verbs of Making/Doing",
        set: 21,
        hint: "Think of 'extol'",
        derivatives: "extol, tolerate, toll (levy)"
    },
    {
        latin: "toga",
        english: "toga",
        info: "togae - noun",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "tot",
        english: "so many",
        info: "indecl - adjective",
        letter: "T",
        topic: "Size & Quantity",
        set: 21,
        hint: "Think of 'total'",
        derivatives: "total, toto"
    },
    {
        latin: "totiens",
        english: "so often, so many times",
        info: "- adverb",
        letter: "T",
        topic: "Time & Seasons",
        set: 21
    },
    {
        latin: "totus",
        english: "whole, the whole, entire, all",
        info: "tota, totum - adjective",
        letter: "T",
        topic: "Size & Quantity",
        set: 21,
        hint: "Think of 'total'",
        derivatives: "total, toto, totality"
    },
    {
        latin: "trado",
        english: "hand over, entrust, hand down, surrender",
        info: "tradere, tradidi - verb",
        letter: "T",
        topic: "Verbs of Giving/Taking",
        set: 21,
        hint: "Think of 'tradition'",
        derivatives: "tradition, traduce, traitor"
    },
    {
        latin: "traho",
        english: "drag, draw, pull",
        info: "trahere, traxi - verb",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'tract'",
        derivatives: "tract, tractor, attract, contract, extract, subtract, trait"
    },
    {
        latin: "trans",
        english: "across, over prefix",
        info: "+ acc, or as - preposition",
        letter: "T",
        topic: "Prepositions",
        set: 21,
        hint: "Think of 'trans-'",
        derivatives: "trans-, transfer, transport, translate, transcend"
    },
    {
        latin: "trecenti",
        english: "300 trecenta",
        info: "trecentae - numeral",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "tredecim",
        english: "thirteen",
        info: "- numeral",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "tres",
        english: "three",
        info: "tria - numeral",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'trio'",
        derivatives: "three, trio, triple, triad"
    },
    {
        latin: "triginta",
        english: "thirty",
        info: "- numeral",
        letter: "T",
        topic: "Miscellaneous",
        set: 21
    },
    {
        latin: "tristis",
        english: "sad, gloomy, grim",
        info: "triste - adjective",
        letter: "T",
        topic: "Quality & Character",
        set: 21,
        derivatives: "triste (sad)"
    },
    {
        latin: "tu",
        english: "you sg tuli",
        info: "tui - pronoun",
        letter: "T",
        topic: "Pronouns",
        set: 21,
        derivatives: "thou (archaic you)"
    },
    {
        latin: "tum",
        english: "then, at that time, next",
        info: "- adverb",
        letter: "T",
        topic: "Time & Seasons",
        set: 21,
        derivatives: "then (no direct derivative)"
    },
    {
        latin: "tumultus",
        english: "uproar, disturbance, civil war",
        info: "tumultus - noun",
        letter: "T",
        topic: "Military & War",
        set: 21,
        hint: "Think of 'tumult'",
        derivatives: "tumult, tumultuous"
    },
    {
        latin: "tunc",
        english: "then, at that time, next",
        info: "- adverb",
        letter: "T",
        topic: "Time & Seasons",
        set: 21
    },
    {
        latin: "turba",
        english: "crowd, mob, disturbance, multitude",
        info: "turbae - noun",
        letter: "T",
        topic: "Miscellaneous",
        set: 21,
        hint: "Think of 'turmoil'",
        derivatives: "turmoil, disturb, perturb, turbulent"
    },
    {
        latin: "turris",
        english: "tower",
        info: "turris - noun",
        letter: "T",
        topic: "Buildings & Places",
        set: 21
    },
    {
        latin: "tutus",
        english: "safe",
        info: "tuta, tutum - adjective",
        letter: "T",
        topic: "Quality & Character",
        set: 21,
        hint: "Think of 'tutor'",
        derivatives: "tutor, tuition, tutelage"
    },
    {
        latin: "tuus",
        english: "your (of you sg), yours",
        info: "tua, tuum - adjective",
        letter: "T",
        topic: "Miscellaneous",
        set: 22,
        derivatives: "your (no direct derivative)"
    },
    {
        latin: "ubi",
        english: "where, when; where?",
        info: "- adverb",
        letter: "U",
        topic: "Adverbs",
        set: 22,
        hint: "Think of 'ubiquitous'",
        derivatives: "where, ubiquitous"
    },
    {
        latin: "ubique",
        english: "everywhere",
        info: "- adverb",
        letter: "U",
        topic: "Miscellaneous",
        set: 22
    },
    {
        latin: "ullus",
        english: "any",
        info: "ulla, ullum - adjective",
        letter: "U",
        topic: "Size & Quantity",
        set: 22,
        hint: "Think of 'null'",
        derivatives: "any (no direct derivative), null"
    },
    {
        latin: "ultimus",
        english: "furthest, last, utmost",
        info: "ultima, ultimum - adjective",
        letter: "U",
        topic: "Size & Quantity",
        set: 22,
        hint: "Think of 'ultimate'",
        derivatives: "ultimate, ultimatum, penultimate"
    },
    {
        latin: "umbra",
        english: "shade, shadow, ghost",
        info: "umbrae - noun",
        letter: "U",
        topic: "Miscellaneous",
        set: 22,
        hint: "Think of 'umbrella'",
        derivatives: "umbrella, umbrage, penumbra"
    },
    {
        latin: "umquam",
        english: "ever",
        info: "- adverb",
        letter: "U",
        topic: "Miscellaneous",
        set: 22,
        derivatives: "ever (no direct derivative)"
    },
    {
        latin: "una",
        english: "together",
        info: "- adverb",
        letter: "U",
        topic: "Miscellaneous",
        set: 22
    },
    {
        latin: "unda",
        english: "wave",
        info: "undae - noun",
        letter: "U",
        topic: "Nature & Landscape",
        set: 22,
        hint: "Think of 'undulate'",
        derivatives: "undulate, inundate, abundant, redundant"
    },
    {
        latin: "unde",
        english: "where from? from where, whence",
        info: "(?) - adverb",
        letter: "U",
        topic: "Adverbs",
        set: 22,
        derivatives: "whence (no direct derivative)"
    },
    {
        latin: "undecim",
        english: "eleven",
        info: "- numeral",
        letter: "U",
        topic: "Miscellaneous",
        set: 22
    },
    {
        latin: "undeviginti",
        english: "nineteen",
        info: "- numeral",
        letter: "U",
        topic: "Miscellaneous",
        set: 22
    },
    {
        latin: "undique",
        english: "from all sides, on all sides",
        info: "- adverb",
        letter: "U",
        topic: "Miscellaneous",
        set: 22,
        hint: "Think of 'everywhere (no direct derivative)'",
        derivatives: "everywhere (no direct derivative)"
    },
    {
        latin: "unus",
        english: "one",
        info: "una, unum - numeral",
        letter: "U",
        topic: "Miscellaneous",
        set: 22,
        hint: "Think of 'unit'",
        derivatives: "unit, unite, union, uniform, unique, universal, unanimous"
    },
    {
        latin: "urbs",
        english: "city, town; Rome",
        info: "urbis - noun",
        letter: "U",
        topic: "Buildings & Places",
        set: 22,
        hint: "Think of 'urban'",
        derivatives: "urban, urbane, suburb, suburban, urbanity"
    },
    {
        latin: "usquam",
        english: "anywhere",
        info: "- adverb",
        letter: "U",
        topic: "Miscellaneous",
        set: 22
    },
    {
        latin: "usque",
        english: "all the way, right up to, continuously",
        info: "- adverb",
        letter: "U",
        topic: "Miscellaneous",
        set: 22,
        derivatives: "always (no direct derivative)"
    },
    {
        latin: "usus",
        english: "use, experience, practice",
        info: "usus - noun",
        letter: "U",
        topic: "Abstract Concepts",
        set: 22,
        hint: "Think of 'usual'",
        derivatives: "use, usual, usage, abuse, usury"
    },
    {
        latin: "ut",
        english: "+ subj that, so that, to, in order to; + indic as, when, where, how",
        info: "- conjunction",
        letter: "U",
        topic: "Conjunctions",
        set: 22,
        derivatives: "as, so that (no direct derivative)"
    },
    {
        latin: "uter",
        english: "which (of two)?",
        info: "? utra? utrum? pron / - adjective",
        letter: "U",
        topic: "Miscellaneous",
        set: 22,
        hint: "Think of 'uterus (unrelated)'",
        derivatives: "uterus (unrelated)"
    },
    {
        latin: "uterque",
        english: "each (of two), both utrumque",
        info: "utraque pron / - adjective",
        letter: "U",
        topic: "Size & Quantity",
        set: 22,
        derivatives: "both (no direct derivative)"
    },
    {
        latin: "utilis",
        english: "useful",
        info: "utile - adjective",
        letter: "U",
        topic: "Quality & Character",
        set: 22,
        hint: "Think of 'utility'",
        derivatives: "utility, utile, utilize"
    },
    {
        latin: "utinam",
        english: "if only! I wish that!",
        info: "- adverb",
        letter: "U",
        topic: "Adverbs",
        set: 22,
        derivatives: "if only (no direct derivative)"
    },
    {
        latin: "utor",
        english: "use, enjoy",
        info: "uti, usus sum - verb",
        letter: "U",
        topic: "Miscellaneous",
        set: 22,
        derivatives: "use, useful, utility, utensil, abuse, usury"
    },
    {
        latin: "utrum",
        english: "whether utrum … an whether … or",
        info: "- adverb",
        letter: "U",
        topic: "Miscellaneous",
        set: 22,
        derivatives: "whether (no direct derivative)"
    },
    {
        latin: "uxor",
        english: "wife",
        info: "uxoris - noun",
        letter: "U",
        topic: "Family & People",
        set: 22,
        derivatives: "uxorious (excessively devoted to wife)"
    },
    {
        latin: "valeo",
        english: "be strong, have influence vale! pl valete impv goodbye, farewell",
        info: "valere, valui - verb",
        letter: "V",
        topic: "Verbs of Being",
        set: 22,
        hint: "Think of 'valid'",
        derivatives: "valid, value, valiant, prevail, equivalent, valediction"
    },
    {
        latin: "validus",
        english: "strong, powerful",
        info: "valida, validum - adjective",
        letter: "V",
        topic: "Quality & Character",
        set: 22,
        hint: "Think of 'valid'",
        derivatives: "valid, invalid, validate"
    },
    {
        latin: "vallum",
        english: "rampart, wall, fortification",
        info: "valli - noun",
        letter: "V",
        topic: "Buildings & Places",
        set: 22,
        hint: "Think of 'interval'",
        derivatives: "wall, interval"
    },
    {
        latin: "-ve",
        english: "or",
        info: "- conjunction",
        letter: "A",
        topic: "Conjunctions",
        set: 22
    },
    {
        latin: "vehementer",
        english: "violently, loudly, strongly",
        info: "- adverb",
        letter: "V",
        topic: "Adverbs",
        set: 22
    },
    {
        latin: "veho",
        english: "carry, bear, convey",
        info: "vehere, vexi - verb",
        letter: "V",
        topic: "Verbs of Giving/Taking",
        set: 22,
        hint: "Think of 'vehicle'",
        derivatives: "vehicle, convey, invective"
    },
    {
        latin: "vel",
        english: "or vel … vel either … or",
        info: "- conjunction",
        letter: "V",
        topic: "Conjunctions",
        set: 22,
        derivatives: "or (no direct derivative)"
    },
    {
        latin: "velut",
        english: "just as, like, as, as if",
        info: "- adverb",
        letter: "V",
        topic: "Verbs of Emotion",
        set: 22,
        derivatives: "as if (no direct derivative)"
    },
    {
        latin: "vendo",
        english: "sell",
        info: "vendere, vendidi - verb",
        letter: "V",
        topic: "Miscellaneous",
        set: 22,
        hint: "Think of 'vend'",
        derivatives: "vend, vendor, vendetta"
    },
    {
        latin: "venio",
        english: "come",
        info: "venire, veni - verb",
        letter: "V",
        topic: "Verbs of Motion",
        set: 22,
        hint: "Think of 'venue'",
        derivatives: "venue, advent, adventure, event, prevent, convention, intervene"
    },
    {
        latin: "ventus",
        english: "wind",
        info: "venti - noun",
        letter: "V",
        topic: "Nature & Landscape",
        set: 22,
        hint: "Think of 'vent'",
        derivatives: "vent, ventilate, ventilation"
    },
    {
        latin: "verbum",
        english: "word",
        info: "verbi - noun",
        letter: "V",
        topic: "Abstract Concepts",
        set: 22,
        hint: "Think of 'verb'",
        derivatives: "verb, verbal, verbose, proverb, adverb, verbatim"
    },
    {
        latin: "vereor",
        english: "fear, be afraid",
        info: "vereri, veritus - verb",
        letter: "V",
        topic: "Verbs of Thinking",
        set: 22,
        hint: "Think of 'revere'",
        derivatives: "revere, reverence, reverend"
    },
    {
        latin: "vero",
        english: "indeed, in fact; however",
        info: "- adverb",
        letter: "V",
        topic: "Miscellaneous",
        set: 22,
        hint: "Think of 'verify (truly)'",
        derivatives: "verify (truly)"
    },
    {
        latin: "verto",
        english: "turn",
        info: "vertere, verti - verb",
        letter: "V",
        topic: "Miscellaneous",
        set: 22,
        hint: "Think of 'convert'",
        derivatives: "convert, revert, invert, divert, adverse, verse, versatile"
    },
    {
        latin: "verus",
        english: "true, real",
        info: "vera, verum - adjective",
        letter: "V",
        topic: "Quality & Character",
        set: 22,
        hint: "Think of 'very'",
        derivatives: "very, verify, verdict, verity, veracity, verisimilitude"
    },
    {
        latin: "vesper",
        english: "m evening vesperis 2/3",
        info: "vesperi or - noun",
        letter: "V",
        topic: "Time & Seasons",
        set: 22,
        hint: "Think of 'vespers'",
        derivatives: "vespers, evening"
    },
    {
        latin: "vester",
        english: "your",
        info: "vestra, vestrum - adjective",
        letter: "V",
        topic: "Miscellaneous",
        set: 22,
        derivatives: "your (no direct derivative)"
    },
    {
        latin: "vestigium",
        english: "footprint, track, trace",
        info: "vestigii - noun",
        letter: "V",
        topic: "Miscellaneous",
        set: 22
    },
    {
        latin: "vestis",
        english: "clothing, pl clothes",
        info: "vestis - noun",
        letter: "V",
        topic: "Miscellaneous",
        set: 22,
        hint: "Think of 'vest'",
        derivatives: "vest, vestment, invest, divest"
    },
    {
        latin: "veto",
        english: "forbid, order not to",
        info: "vetare, vetui - verb",
        letter: "V",
        topic: "Verbs of Ruling",
        set: 22
    },
    {
        latin: "vetus",
        english: "old",
        info: "gen veteris - adjective",
        letter: "V",
        topic: "Quality & Character",
        set: 22,
        hint: "Think of 'veteran'",
        derivatives: "veteran, inveterate"
    },
    {
        latin: "via",
        english: "road, street, way, path vici",
        info: "viae - noun",
        letter: "V",
        topic: "Buildings & Places",
        set: 22,
        hint: "Think of 'via'",
        derivatives: "via, viaduct, deviate, obvious, previous, trivial, voyage"
    },
    {
        latin: "victor",
        english: "victor, winner, conqueror",
        info: "victoris - noun",
        letter: "V",
        topic: "Miscellaneous",
        set: 22,
        derivatives: "victor, victory, victorious"
    },
    {
        latin: "victoria",
        english: "victory",
        info: "victoriae - noun",
        letter: "V",
        topic: "Military & War",
        set: 23
    },
    {
        latin: "video",
        english: "see",
        info: "videre, vidi - verb",
        letter: "V",
        topic: "Verbs of Perception",
        set: 23,
        hint: "Think of 'video'",
        derivatives: "video, vision, visible, visit, evident, provide, survey"
    },
    {
        latin: "videor",
        english: "seem, appear, be seen",
        info: "videri, visus sum - verb",
        letter: "V",
        topic: "Verbs of Being",
        set: 23,
        hint: "Think of 'sum'",
        derivatives: "sum, summation, essence"
    },
    {
        latin: "viginti",
        english: "twenty",
        info: "- numeral",
        letter: "V",
        topic: "Miscellaneous",
        set: 23
    },
    {
        latin: "villa",
        english: "house, country villa, estate, farm",
        info: "villae - noun",
        letter: "V",
        topic: "Government & Politics",
        set: 23,
        derivatives: "villa, village, villain"
    },
    {
        latin: "vincio",
        english: "bind, fasten",
        info: "vincire, vinxi - verb",
        letter: "V",
        topic: "Miscellaneous",
        set: 23,
        hint: "Think of 'vincible (conquerable)'",
        derivatives: "vincible (conquerable)"
    },
    {
        latin: "vinco",
        english: "conquer, defeat, win, be victorious",
        info: "vincere, vici - verb",
        letter: "V",
        topic: "Verbs of Fighting",
        set: 23,
        hint: "Think of 'victory'",
        derivatives: "victory, victor, convince, evict, invincible, vanquish"
    },
    {
        latin: "vinc",
        english: "chain, fastening, rope",
        info: "(u)lum vinc(u)li - noun",
        letter: "V",
        topic: "Miscellaneous",
        set: 23
    },
    {
        latin: "vinum",
        english: "wine",
        info: "vini - noun",
        letter: "V",
        topic: "Miscellaneous",
        set: 23,
        hint: "Think of 'vine'",
        derivatives: "wine, vine, vineyard, vintage, vinegar"
    },
    {
        latin: "vir",
        english: "man, male, husband",
        info: "viri - noun",
        letter: "V",
        topic: "Family & People",
        set: 23,
        hint: "Think of 'virile'",
        derivatives: "virile, virtue, virtuoso, virago"
    },
    {
        latin: "virtus",
        english: "courage, virtue",
        info: "virtutis - noun",
        letter: "V",
        topic: "Emotions & Mind",
        set: 23,
        hint: "Think of 'virtuous'",
        derivatives: "virtue, virtuous, virtual"
    },
    {
        latin: "vis",
        english: "f force, violence; pl pl vires strength, forces",
        info: "acc vim, abl vi, - noun",
        letter: "V",
        topic: "Military & War",
        set: 23,
        hint: "Think of 'violent'",
        derivatives: "violent, violate"
    },
    {
        latin: "vita",
        english: "life",
        info: "vitae - noun",
        letter: "V",
        topic: "The Body",
        set: 23,
        hint: "Think of 'vital'",
        derivatives: "vital, vitamin, vitality, revive, survive, vivid"
    },
    {
        latin: "vitium",
        english: "fault, failing, vice",
        info: "vitii - noun",
        letter: "V",
        topic: "Abstract Concepts",
        set: 23,
        hint: "Think of 'vicious'",
        derivatives: "vice, vicious, vitiate"
    },
    {
        latin: "vito",
        english: "avoid",
        info: "vitare, vitavi - verb",
        letter: "V",
        topic: "Miscellaneous",
        set: 23,
        hint: "Think of 'inevitable'",
        derivatives: "avoid, inevitable"
    },
    {
        latin: "vivo",
        english: "live, be alive; live on",
        info: "vivere, vixi - verb",
        letter: "V",
        topic: "Verbs of Being",
        set: 23,
        hint: "Think of 'vivid'",
        derivatives: "vivid, vivacious, revive, survive, convivial, vivify"
    },
    {
        latin: "vivus",
        english: "alive, living",
        info: "viva, vivum - adjective",
        letter: "V",
        topic: "Quality & Character",
        set: 23,
        hint: "Think of 'vivid'",
        derivatives: "vivid, vivisection"
    },
    {
        latin: "vix",
        english: "hardly, scarcely, with difficulty vixi",
        info: "- adverb",
        letter: "V",
        topic: "Adverbs",
        set: 23,
        derivatives: "scarcely (no direct derivative)"
    },
    {
        latin: "voco",
        english: "call, summon, invite, name",
        info: "vocare, vocavi - verb",
        letter: "V",
        topic: "Verbs of Speaking",
        set: 23,
        hint: "Think of 'vocal'",
        derivatives: "vocal, voice, vocation, advocate, invoke, provoke, evoke"
    },
    {
        latin: "volo",
        english: "want, wish, be willing, intend",
        info: "velle, volui - verb",
        letter: "V",
        topic: "Verbs of Thinking",
        set: 23,
        hint: "Think of 'volition'",
        derivatives: "volition, voluntary, volunteer, benevolent, malevolent"
    },
    {
        latin: "volvo",
        english: "turn, roll; consider",
        info: "volvere, volvi - verb",
        letter: "V",
        topic: "Verbs of Thinking",
        set: 23
    },
    {
        latin: "vos",
        english: "you pl",
        info: "vestrum or vestri - pronoun",
        letter: "V",
        topic: "Pronouns",
        set: 23,
        derivatives: "you (no direct derivative)"
    },
    {
        latin: "vox",
        english: "voice, shout, word",
        info: "vocis - noun",
        letter: "V",
        topic: "The Body",
        set: 23,
        hint: "Think of 'vocal'",
        derivatives: "voice, vocal, vowel, vociferous, invoke"
    },
    {
        latin: "vulnero",
        english: "wound, injure vulneravi",
        info: "vulnerare - verb",
        letter: "V",
        topic: "Verbs of Fighting",
        set: 23
    },
    {
        latin: "vulnus",
        english: "wound, injury",
        info: "vulneris - noun",
        letter: "V",
        topic: "The Body",
        set: 23,
        hint: "Think of 'vulnerable'",
        derivatives: "vulnerable, invulnerable, wound"
    },
    {
        latin: "vultus",
        english: "face, expression",
        info: "vultus - noun",
        letter: "V",
        topic: "The Body",
        set: 23,
        hint: "Think of 'visage (related)'",
        derivatives: "visage (related)"
    }
];
