// A-Level Greek Verse Vocabulary - 300 words for verse texts
// Based on the OCR A-Level Greek verse vocabulary list
const greekVerseVocabularyData = [
    {
        greek: "αγιος",
        english: "holy",
        info: "adjective",
        letter: "Α",
        set: 1
    },
    {
        greek: "αγκαλαι",
        english: "arms, embrace",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "αγνος",
        english: "pure, holy",
        info: "adjective",
        letter: "Α",
        set: 1
    },
    {
        greek: "αγχι",
        english: "near",
        info: "adverb",
        letter: "Α",
        set: 1
    },
    {
        greek: "αειδω",
        english: "I sing",
        info: "verb",
        letter: "Α",
        set: 1
    },
    {
        greek: "αθλιος",
        english: "wretched",
        info: "adjective",
        letter: "Α",
        set: 1
    },
    {
        greek: "αθρεω, ηθρησα",
        english: "I examine",
        info: "verb",
        letter: "Α",
        set: 1
    },
    {
        greek: "αιαι",
        english: "alas",
        info: "exclamation",
        letter: "Α",
        set: 1
    },
    {
        greek: "αιθηρ, αιθερος",
        english: "air",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "αισσω, ηξα",
        english: "I rush",
        info: "verb",
        letter: "Α",
        set: 1
    },
    {
        greek: "αιων",
        english: "period, age",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "ακεομαι, ηκεσαμην",
        english: "I heal",
        info: "verb",
        letter: "Α",
        set: 1
    },
    {
        greek: "αλαομαι",
        english: "I wander",
        info: "verb",
        letter: "Α",
        set: 1
    },
    {
        greek: "αλγυνω, ηλγυνα",
        english: "I cause grief to",
        info: "verb",
        letter: "Α",
        set: 1
    },
    {
        greek: "αλκη",
        english: "force, strength",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "αλοχος",
        english: "wife",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "αμηχανος",
        english: "difficult",
        info: "adjective",
        letter: "Α",
        set: 1
    },
    {
        greek: "αμπελος",
        english: "vine",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "αναιδης",
        english: "shameless",
        info: "adjective",
        letter: "Α",
        set: 1
    },
    {
        greek: "ανωγα",
        english: "I order",
        info: "verb",
        letter: "Α",
        set: 1
    },
    {
        greek: "απαλλαγη",
        english: "deliverance",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "αραομαι, ηρασαμην",
        english: "I pray, curse",
        info: "verb",
        letter: "Α",
        set: 1
    },
    {
        greek: "αρσην",
        english: "male",
        info: "adjective",
        letter: "Α",
        set: 1
    },
    {
        greek: "αστος",
        english: "citizen",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "ατη",
        english: "ruin",
        info: "noun",
        letter: "Α",
        set: 1
    },
    {
        greek: "αυγη",
        english: "beam",
        info: "noun",
        letter: "Α",
        set: 2
    },
    {
        greek: "αυδαω, ηυδησα",
        english: "I speak",
        info: "verb",
        letter: "Α",
        set: 2
    },
    {
        greek: "αυλη",
        english: "courtyard, palace",
        info: "noun",
        letter: "Α",
        set: 2
    },
    {
        greek: "αφυκτος",
        english: "inevitable",
        info: "adjective",
        letter: "Α",
        set: 2
    },
    {
        greek: "αχθος",
        english: "weight, burden",
        info: "noun",
        letter: "Α",
        set: 2
    },
    {
        greek: "αχος",
        english: "pain",
        info: "noun",
        letter: "Α",
        set: 2
    },
    {
        greek: "αψυκος",
        english: "lifeless",
        info: "adjective",
        letter: "Α",
        set: 2
    },
    {
        greek: "βαιος",
        english: "little",
        info: "adjective",
        letter: "Β",
        set: 2
    },
    {
        greek: "βλεφαρον",
        english: "eye",
        info: "noun",
        letter: "Β",
        set: 2
    },
    {
        greek: "βλωσκω, εμολον",
        english: "I come, go",
        info: "verb",
        letter: "Β",
        set: 2
    },
    {
        greek: "βρεφος",
        english: "baby",
        info: "noun",
        letter: "Β",
        set: 2
    },
    {
        greek: "γεγηθα",
        english: "I rejoice",
        info: "verb",
        letter: "Γ",
        set: 2
    },
    {
        greek: "γενειον",
        english: "chin",
        info: "noun",
        letter: "Γ",
        set: 2
    },
    {
        greek: "γοαω, εγοησα",
        english: "I wail, lament",
        info: "verb",
        letter: "Γ",
        set: 2
    },
    {
        greek: "γοος",
        english: "wailing",
        info: "noun",
        letter: "Γ",
        set: 2
    },
    {
        greek: "δαις, δαιτος",
        english: "feast",
        info: "noun",
        letter: "Δ",
        set: 2
    },
    {
        greek: "δακνω",
        english: "bite, sting",
        info: "verb",
        letter: "Δ",
        set: 2
    },
    {
        greek: "δαμαζω, εδαμασα",
        english: "I tame",
        info: "verb",
        letter: "Δ",
        set: 2
    },
    {
        greek: "δαμαρ",
        english: "wife",
        info: "noun",
        letter: "Δ",
        set: 2
    },
    {
        greek: "δεμας",
        english: "body",
        info: "noun",
        letter: "Δ",
        set: 2
    },
    {
        greek: "δερκομαι, εδρακομην",
        english: "I look",
        info: "verb",
        letter: "Δ",
        set: 2
    },
    {
        greek: "διπλους",
        english: "double",
        info: "adjective",
        letter: "Δ",
        set: 2
    },
    {
        greek: "δισσος",
        english: "double",
        info: "adjective",
        letter: "Δ",
        set: 2
    },
    {
        greek: "διχα",
        english: "apart (from)",
        info: "adverb",
        letter: "Δ",
        set: 2
    },
    {
        greek: "δρακων",
        english: "snake",
        info: "noun",
        letter: "Δ",
        set: 2
    },
    {
        greek: "δυσδαιμων",
        english: "unfortunate",
        info: "adjective",
        letter: "Δ",
        set: 3
    },
    {
        greek: "δυσσεβης",
        english: "impious",
        info: "adjective",
        letter: "Δ",
        set: 3
    },
    {
        greek: "δυστηνος",
        english: "wretched",
        info: "adjective",
        letter: "Δ",
        set: 3
    },
    {
        greek: "δυσχερης",
        english: "difficult",
        info: "adjective",
        letter: "Δ",
        set: 3
    },
    {
        greek: "δωμα",
        english: "house",
        info: "noun",
        letter: "Δ",
        set: 3
    },
    {
        greek: "εγχος",
        english: "sword",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εδρα",
        english: "seat",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εικων",
        english: "image",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ειματα",
        english: "clothes",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εισω",
        english: "inside",
        info: "adverb",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εκπλησσω, εξεπληξα",
        english: "I shock",
        info: "verb",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ελεος",
        english: "pity",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εμφανης",
        english: "clear",
        info: "adjective",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εναργης",
        english: "clear",
        info: "adjective",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ενδικος",
        english: "just, lawful",
        info: "adjective",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εννεπω",
        english: "I speak, relate",
        info: "verb",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ερις",
        english: "strife",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ερπω, ειρπυσα",
        english: "I creep, go",
        info: "verb",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ερως",
        english: "love",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εσθλος",
        english: "good",
        info: "adjective",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εστια",
        english: "hearth",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ευδαιμονεω",
        english: "I prosper",
        info: "verb",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ευκλεης",
        english: "famous",
        info: "adjective",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ευνη",
        english: "bed",
        info: "noun",
        letter: "Ε",
        set: 3
    },
    {
        greek: "εχθαιρω",
        english: "I hate",
        info: "verb",
        letter: "Ε",
        set: 3
    },
    {
        greek: "ζωη",
        english: "life",
        info: "noun",
        letter: "Ζ",
        set: 4
    },
    {
        greek: "ζωνη",
        english: "girdle, belt",
        info: "noun",
        letter: "Ζ",
        set: 4
    },
    {
        greek: "ηβη",
        english: "youth",
        info: "noun",
        letter: "Η",
        set: 4
    },
    {
        greek: "ημαρ",
        english: "day",
        info: "noun",
        letter: "Η",
        set: 4
    },
    {
        greek: "θαλαμος",
        english: "bedroom",
        info: "noun",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θαλλω, εθαλον",
        english: "I bloom",
        info: "verb",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θασσω",
        english: "I sit",
        info: "verb",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θεμις",
        english: "divine law",
        info: "noun",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θηλυς",
        english: "female",
        info: "adjective",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θιγγανω, εθιγον",
        english: "I touch",
        info: "verb",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θρηνεω, εθρηνησα",
        english: "I lament",
        info: "verb",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θροεω, εθροησα",
        english: "I cry out, proclaim",
        info: "verb",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θρονος",
        english: "seat",
        info: "noun",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θυμοομαι",
        english: "I am angry",
        info: "verb",
        letter: "Θ",
        set: 4
    },
    {
        greek: "θυραιος",
        english: "out of doors; external",
        info: "adjective",
        letter: "Θ",
        set: 4
    },
    {
        greek: "ισχυς",
        english: "strength",
        info: "noun",
        letter: "Ι",
        set: 4
    },
    {
        greek: "ιχνος",
        english: "footstep",
        info: "noun",
        letter: "Ι",
        set: 4
    },
    {
        greek: "ιω",
        english: "alas",
        info: "exclamation",
        letter: "Ι",
        set: 4
    },
    {
        greek: "καθαιρω",
        english: "I cleanse",
        info: "verb",
        letter: "Κ",
        set: 4
    },
    {
        greek: "καινω",
        english: "I kill",
        info: "verb",
        letter: "Κ",
        set: 4
    },
    {
        greek: "καρδια",
        english: "heart",
        info: "noun",
        letter: "Κ",
        set: 4
    },
    {
        greek: "καρτα",
        english: "very much; strongly",
        info: "adverb",
        letter: "Κ",
        set: 4
    },
    {
        greek: "κασιγνητη",
        english: "sister",
        info: "noun",
        letter: "Κ",
        set: 4
    },
    {
        greek: "καταρτος",
        english: "cursed",
        info: "adjective",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κερδος",
        english: "profit",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κηδος",
        english: "relative",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κλαιω, εκλαυσα",
        english: "I weep, lament",
        info: "verb",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κλεος",
        english: "glory",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κλυδων",
        english: "wave, surge",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κλυω",
        english: "I hear",
        info: "verb",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κοιρανος",
        english: "master, lord, king",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κοιτη",
        english: "bed",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κολπος",
        english: "bay",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κονις",
        english: "dust",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κοσμεω, εκοσμησα",
        english: "I adorn",
        info: "verb",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κυμα",
        english: "wave",
        info: "noun",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κυρεω, εκυρησα",
        english: "I happen (upon)",
        info: "verb",
        letter: "Κ",
        set: 5
    },
    {
        greek: "κυριος",
        english: "powerful, lord",
        info: "adjective",
        letter: "Κ",
        set: 5
    },
    {
        greek: "λαμπρος",
        english: "bright",
        info: "adjective",
        letter: "Λ",
        set: 5
    },
    {
        greek: "λειμων",
        english: "meadow",
        info: "noun",
        letter: "Λ",
        set: 5
    },
    {
        greek: "λευσσω",
        english: "I look, gaze",
        info: "verb",
        letter: "Λ",
        set: 5
    },
    {
        greek: "λεχος",
        english: "bed",
        info: "noun",
        letter: "Λ",
        set: 5
    },
    {
        greek: "λισσομαι",
        english: "I beseech",
        info: "verb",
        letter: "Λ",
        set: 5
    },
    {
        greek: "λυπηρος",
        english: "painful",
        info: "adjective",
        letter: "Λ",
        set: 5
    },
    {
        greek: "μα",
        english: "by, in the name of",
        info: "preposition",
        letter: "Μ",
        set: 5
    },
    {
        greek: "μαινομαι, εμανην",
        english: "I am mad",
        info: "verb",
        letter: "Μ",
        set: 5
    },
    {
        greek: "μακαριος",
        english: "blessed",
        info: "adjective",
        letter: "Μ",
        set: 5
    },
    {
        greek: "μαντευμα",
        english: "oracle",
        info: "noun",
        letter: "Μ",
        set: 6
    },
    {
        greek: "μενος",
        english: "might",
        info: "noun",
        letter: "Μ",
        set: 6
    },
    {
        greek: "μεστος",
        english: "full",
        info: "adjective",
        letter: "Μ",
        set: 6
    },
    {
        greek: "μιασμα",
        english: "pollution",
        info: "noun",
        letter: "Μ",
        set: 6
    },
    {
        greek: "μιμνω",
        english: "I remain, stay",
        info: "verb",
        letter: "Μ",
        set: 6
    },
    {
        greek: "μηνις",
        english: "wrath",
        info: "noun",
        letter: "Μ",
        set: 6
    },
    {
        greek: "μορφη",
        english: "form",
        info: "noun",
        letter: "Μ",
        set: 6
    },
    {
        greek: "μοχθεω",
        english: "I toil, suffer",
        info: "verb",
        letter: "Μ",
        set: 6
    },
    {
        greek: "ναιω",
        english: "I dwell",
        info: "verb",
        letter: "Ν",
        set: 6
    },
    {
        greek: "ναυβατης",
        english: "sailor",
        info: "noun",
        letter: "Ν",
        set: 6
    },
    {
        greek: "ναυστολεω",
        english: "I sail",
        info: "verb",
        letter: "Ν",
        set: 6
    },
    {
        greek: "νεμεσις",
        english: "retribution",
        info: "noun",
        letter: "Ν",
        set: 6
    },
    {
        greek: "νερτερος",
        english: "down below",
        info: "adjective",
        letter: "Ν",
        set: 6
    },
    {
        greek: "νοστος",
        english: "return, journey homewards",
        info: "noun",
        letter: "Ν",
        set: 6
    },
    {
        greek: "νυμφη",
        english: "bride, nymph",
        info: "noun",
        letter: "Ν",
        set: 6
    },
    {
        greek: "νω",
        english: "we two",
        info: "pronoun",
        letter: "Ν",
        set: 6
    },
    {
        greek: "ξανθος",
        english: "yellow",
        info: "adjective",
        letter: "Ξ",
        set: 6
    },
    {
        greek: "οδοιπορος",
        english: "traveller",
        info: "noun",
        letter: "Ο",
        set: 6
    },
    {
        greek: "οδυνη",
        english: "pain, grief",
        info: "noun",
        letter: "Ο",
        set: 6
    },
    {
        greek: "οδυρομαι, ωδυραμην",
        english: "I lament, mourn",
        info: "verb",
        letter: "Ο",
        set: 6
    },
    {
        greek: "οικτρος",
        english: "pitiable",
        info: "adjective",
        letter: "Ο",
        set: 6
    },
    {
        greek: "οιμωζω, ωμωξα",
        english: "I lament",
        info: "verb",
        letter: "Ο",
        set: 6
    },
    {
        greek: "οιος",
        english: "alone, only",
        info: "adjective",
        letter: "Ο",
        set: 7
    },
    {
        greek: "οιχομαι",
        english: "I have gone",
        info: "verb",
        letter: "Ο",
        set: 7
    },
    {
        greek: "οκνεω, ωκνησα",
        english: "I hesitate, delay",
        info: "verb",
        letter: "Ο",
        set: 7
    },
    {
        greek: "ολβιος",
        english: "fortunate",
        info: "adjective",
        letter: "Ο",
        set: 7
    },
    {
        greek: "ολβος",
        english: "happiness",
        info: "noun",
        letter: "Ο",
        set: 7
    },
    {
        greek: "ομμα",
        english: "eye",
        info: "noun",
        letter: "Ο",
        set: 7
    },
    {
        greek: "ονινημι",
        english: "I benefit",
        info: "verb",
        letter: "Ο",
        set: 7
    },
    {
        greek: "οτρυνω, ωτρυνα",
        english: "I hasten",
        info: "verb",
        letter: "Ο",
        set: 7
    },
    {
        greek: "οχος",
        english: "chariot",
        info: "noun",
        letter: "Ο",
        set: 7
    },
    {
        greek: "πελας",
        english: "nearby",
        info: "adverb",
        letter: "Π",
        set: 7
    },
    {
        greek: "πενθος",
        english: "grief",
        info: "noun",
        letter: "Π",
        set: 7
    },
    {
        greek: "πεπλος",
        english: "robe",
        info: "noun",
        letter: "Π",
        set: 7
    },
    {
        greek: "περισσος",
        english: "excessive",
        info: "adjective",
        letter: "Π",
        set: 7
    },
    {
        greek: "πετρος",
        english: "rock, stone",
        info: "noun",
        letter: "Π",
        set: 7
    },
    {
        greek: "πηγη",
        english: "spring",
        info: "noun",
        letter: "Π",
        set: 7
    },
    {
        greek: "πημα",
        english: "suffering",
        info: "noun",
        letter: "Π",
        set: 7
    },
    {
        greek: "πικρος",
        english: "bitter",
        info: "adjective",
        letter: "Π",
        set: 7
    },
    {
        greek: "πιτνω",
        english: "I fall",
        info: "verb",
        letter: "Π",
        set: 7
    },
    {
        greek: "πλαναω, επλανησαμην",
        english: "I wander",
        info: "verb",
        letter: "Π",
        set: 7
    },
    {
        greek: "πληγη",
        english: "blow, stroke",
        info: "noun",
        letter: "Π",
        set: 7
    },
    {
        greek: "πλησσω, επληξα",
        english: "I strike",
        info: "verb",
        letter: "Π",
        set: 7
    },
    {
        greek: "πνοη",
        english: "breath, wind",
        info: "noun",
        letter: "Π",
        set: 7
    },
    {
        greek: "ποθος",
        english: "desire",
        info: "noun",
        letter: "Π",
        set: 7
    },
    {
        greek: "ποικιλος",
        english: "intricate",
        info: "adjective",
        letter: "Π",
        set: 7
    },
    {
        greek: "πολιος",
        english: "grey-haired",
        info: "adjective",
        letter: "Π",
        set: 8
    },
    {
        greek: "ποσις",
        english: "husband",
        info: "noun",
        letter: "Π",
        set: 8
    },
    {
        greek: "ποτμος",
        english: "fate",
        info: "noun",
        letter: "Π",
        set: 8
    },
    {
        greek: "πραος",
        english: "gentle",
        info: "adjective",
        letter: "Π",
        set: 8
    },
    {
        greek: "προσπολος",
        english: "servant",
        info: "noun",
        letter: "Π",
        set: 8
    },
    {
        greek: "προσφιλης",
        english: "friendly",
        info: "adjective",
        letter: "Π",
        set: 8
    },
    {
        greek: "πρυμνα",
        english: "stern",
        info: "noun",
        letter: "Π",
        set: 8
    },
    {
        greek: "πρωρα",
        english: "prow",
        info: "noun",
        letter: "Π",
        set: 8
    },
    {
        greek: "πτερον",
        english: "wing",
        info: "noun",
        letter: "Π",
        set: 8
    },
    {
        greek: "πτωχος",
        english: "beggar",
        info: "noun",
        letter: "Π",
        set: 8
    },
    {
        greek: "πυρα",
        english: "funeral pyre",
        info: "noun",
        letter: "Π",
        set: 8
    },
    {
        greek: "ρημα",
        english: "word, saying",
        info: "noun",
        letter: "Ρ",
        set: 8
    },
    {
        greek: "ροη",
        english: "stream, flow",
        info: "noun",
        letter: "Ρ",
        set: 8
    },
    {
        greek: "ρωνη",
        english: "strength",
        info: "noun",
        letter: "Ρ",
        set: 8
    },
    {
        greek: "σεβω",
        english: "I revere",
        info: "verb",
        letter: "Σ",
        set: 8
    },
    {
        greek: "σεθεν",
        english: "of you",
        info: "pronoun",
        letter: "Σ",
        set: 8
    },
    {
        greek: "σεμνος",
        english: "holy, noble",
        info: "adjective",
        letter: "Σ",
        set: 8
    },
    {
        greek: "σθενος",
        english: "strength",
        info: "noun",
        letter: "Σ",
        set: 8
    },
    {
        greek: "σθενω",
        english: "I am strong",
        info: "verb",
        letter: "Σ",
        set: 8
    },
    {
        greek: "σκαφος",
        english: "boat",
        info: "noun",
        letter: "Σ",
        set: 8
    },
    {
        greek: "σκηπτρον",
        english: "stick, sceptre",
        info: "noun",
        letter: "Σ",
        set: 8
    },
    {
        greek: "στεγη",
        english: "roof, house",
        info: "noun",
        letter: "Σ",
        set: 8
    },
    {
        greek: "σπειρω",
        english: "I sow a seed",
        info: "verb",
        letter: "Σ",
        set: 8
    },
    {
        greek: "σπερμα",
        english: "seed",
        info: "noun",
        letter: "Σ",
        set: 9
    },
    {
        greek: "στειχω",
        english: "I step, march",
        info: "verb",
        letter: "Σ",
        set: 9
    },
    {
        greek: "στεναζω",
        english: "I sigh, groan",
        info: "verb",
        letter: "Σ",
        set: 9
    },
    {
        greek: "στεργω, εστερξα",
        english: "I love",
        info: "verb",
        letter: "Σ",
        set: 9
    },
    {
        greek: "στεφανος",
        english: "crown, wreathe",
        info: "noun",
        letter: "Σ",
        set: 9
    },
    {
        greek: "στολη",
        english: "garment",
        info: "noun",
        letter: "Σ",
        set: 9
    },
    {
        greek: "στυγεω",
        english: "I hate",
        info: "verb",
        letter: "Σ",
        set: 9
    },
    {
        greek: "συζυγος",
        english: "yoked together",
        info: "adjective",
        letter: "Σ",
        set: 9
    },
    {
        greek: "συναπτω",
        english: "I join together",
        info: "verb",
        letter: "Σ",
        set: 9
    },
    {
        greek: "σφαγη",
        english: "slaughter, sacrifice",
        info: "noun",
        letter: "Σ",
        set: 9
    },
    {
        greek: "σφαζω",
        english: "I slay, sacrifice",
        info: "verb",
        letter: "Σ",
        set: 9
    },
    {
        greek: "σφαλλω",
        english: "I trip up, fail",
        info: "verb",
        letter: "Σ",
        set: 9
    },
    {
        greek: "ταλαιπωρος",
        english: "wretched",
        info: "adjective",
        letter: "Τ",
        set: 9
    },
    {
        greek: "ταλας",
        english: "wretched",
        info: "adjective",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τανυν",
        english: "now",
        info: "adverb",
        letter: "Τ",
        set: 9
    },
    {
        greek: "ταρβεω",
        english: "I fear",
        info: "verb",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τερας",
        english: "sign",
        info: "noun",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τερπω",
        english: "I delight in, enjoy",
        info: "verb",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τερψις",
        english: "delight",
        info: "noun",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τευχος",
        english: "vessel, armour",
        info: "noun",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τικτω, ετεκον",
        english: "I bear a child",
        info: "verb",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τεκων",
        english: "father",
        info: "noun",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τεκουσα",
        english: "mother",
        info: "noun",
        letter: "Τ",
        set: 9
    },
    {
        greek: "τινω, ετεισα",
        english: "I repay, avenge",
        info: "verb",
        letter: "Τ",
        set: 10
    },
    {
        greek: "τισις",
        english: "revenge",
        info: "noun",
        letter: "Τ",
        set: 10
    },
    {
        greek: "τλαω, ετλην",
        english: "I bear, tolerate",
        info: "verb",
        letter: "Τ",
        set: 10
    },
    {
        greek: "τλημων",
        english: "enduring, wretched",
        info: "adjective",
        letter: "Τ",
        set: 10
    },
    {
        greek: "τοκος",
        english: "childbirth, offspring",
        info: "noun",
        letter: "Τ",
        set: 10
    },
    {
        greek: "τρεμω",
        english: "I tremble",
        info: "verb",
        letter: "Τ",
        set: 10
    },
    {
        greek: "τροφος",
        english: "nurse",
        info: "noun",
        letter: "Τ",
        set: 10
    },
    {
        greek: "τυμβος",
        english: "tomb",
        info: "noun",
        letter: "Τ",
        set: 10
    },
    {
        greek: "τυφλος",
        english: "blind",
        info: "adjective",
        letter: "Τ",
        set: 10
    },
    {
        greek: "υμνεω",
        english: "I praise",
        info: "verb",
        letter: "Υ",
        set: 10
    },
    {
        greek: "υφαινω",
        english: "I weave",
        info: "verb",
        letter: "Υ",
        set: 10
    },
    {
        greek: "φασγανον",
        english: "sword",
        info: "noun",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φατις",
        english: "voice, rumour",
        info: "noun",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φαυλος",
        english: "bad, worthless",
        info: "adjective",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φημη",
        english: "speech, rumour",
        info: "noun",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φθινω",
        english: "I decay, perish",
        info: "verb",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φονιος",
        english: "bloodstained, murderous",
        info: "adjective",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φρην",
        english: "heart, mind",
        info: "noun",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φροντις",
        english: "thought, care, concern",
        info: "noun",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φρουδος",
        english: "gone, departed",
        info: "adjective",
        letter: "Φ",
        set: 10
    },
    {
        greek: "φωνεω",
        english: "I speak, call",
        info: "verb",
        letter: "Φ",
        set: 10
    },
    {
        greek: "χθων, χθονος",
        english: "earth, ground",
        info: "noun",
        letter: "Χ",
        set: 10
    },
    {
        greek: "χολη",
        english: "anger",
        info: "noun",
        letter: "Χ",
        set: 10
    },
    {
        greek: "χολοομαι",
        english: "I get angry",
        info: "verb",
        letter: "Χ",
        set: 11
    },
    {
        greek: "χρηζω",
        english: "I need, desire",
        info: "verb",
        letter: "Χ",
        set: 11
    },
    {
        greek: "χρησμος",
        english: "oracular response",
        info: "noun",
        letter: "Χ",
        set: 11
    },
    {
        greek: "χρηστος",
        english: "good, worthy, useful",
        info: "adjective",
        letter: "Χ",
        set: 11
    },
    {
        greek: "χρονιος",
        english: "late, slow, lasting",
        info: "adjective",
        letter: "Χ",
        set: 11
    },
    {
        greek: "χρως, χρωτος",
        english: "skin, flesh, body",
        info: "noun",
        letter: "Χ",
        set: 11
    },
    {
        greek: "χωρις",
        english: "apart (from)",
        info: "adverb",
        letter: "Χ",
        set: 11
    },
    {
        greek: "χωρος",
        english: "place",
        info: "noun",
        letter: "Χ",
        set: 11
    },
    {
        greek: "ψαυω",
        english: "I touch",
        info: "verb",
        letter: "Ψ",
        set: 11
    },
    {
        greek: "ψοφος",
        english: "noise",
        info: "noun",
        letter: "Ψ",
        set: 11
    },
    {
        greek: "ωδη",
        english: "song, poem",
        info: "noun",
        letter: "Ω",
        set: 11
    },
    {
        greek: "ωκυς",
        english: "swift",
        info: "adjective",
        letter: "Ω",
        set: 11
    },
    {
        greek: "ωμος, ου",
        english: "shoulder",
        info: "noun",
        letter: "Ω",
        set: 11
    },
    {
        greek: "ωμος, η, ον",
        english: "cruel, savage",
        info: "adjective",
        letter: "Ω",
        set: 11
    }
];
