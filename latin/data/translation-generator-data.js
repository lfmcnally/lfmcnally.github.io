// GCSE Latin Translation Generator Data
// Narrative-driven passages based on actual GCSE exam style
// Each passage tells a complete story with connected sentences

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

// Grammar spotlight definitions
const grammarSpotlights = {
    imperfect: { name: "Imperfect tense", minChapter: 3, tags: ["imperfect"] },
    perfect: { name: "Perfect tense", minChapter: 4, tags: ["perfect"] },
    pluperfect: { name: "Pluperfect tense", minChapter: 6, tags: ["pluperfect"] },
    future: { name: "Future tense", minChapter: 5, tags: ["future"] },
    present_passive: { name: "Present passive", minChapter: 7, tags: ["present_passive"] },
    perfect_passive: { name: "Perfect passive", minChapter: 8, tags: ["perfect_passive"] },
    present_participle: { name: "Present participle", minChapter: 7, tags: ["present_participle"] },
    ppp: { name: "Perfect passive participle", minChapter: 7, tags: ["ppp"] },
    ablative_absolute: { name: "Ablative absolute", minChapter: 8, tags: ["ablative_absolute"] },
    purpose_clauses: { name: "Purpose clauses", minChapter: 10, tags: ["purpose_clauses"] },
    result_clauses: { name: "Result clauses", minChapter: 10, tags: ["result_clauses"] },
    indirect_commands: { name: "Indirect commands", minChapter: 10, tags: ["indirect_commands"] },
    cum_clauses: { name: "Cum clauses", minChapter: 10, tags: ["cum_clauses"] },
    indirect_questions: { name: "Indirect questions", minChapter: 10, tags: ["indirect_questions"] },
    relative_clauses: { name: "Relative clauses", minChapter: 6, tags: ["relative_clauses"] },
    indirect_statement: { name: "Indirect statement", minChapter: 9, tags: ["indirect_statement"] },
    deponent_verbs: { name: "Deponent verbs", minChapter: 9, tags: ["deponent_verbs"] },
    comparatives: { name: "Comparatives & Superlatives", minChapter: 7, tags: ["comparatives", "superlatives"] }
};

// ========== NARRATIVE PASSAGES ==========
// Complete stories with connected sentences, GCSE exam style

const narrativePassages = [
    // ========== MYTHOLOGY STORIES ==========
    {
        id: "myth_marsyas",
        title: "Marsyas and Apollo",
        theme: "mythology",
        maxChapter: 9,
        introduction: "The minor god Marsyas pays the price for challenging Apollo to a music contest.",
        sentences: [
            {
                latin: "Marsyas erat satyrus stultus, qui in silvis habitabat.",
                translations: [
                    "Marsyas was a foolish satyr, who lived in the woods.",
                    "Marsyas was a stupid satyr who used to live in the forests.",
                    "Marsyas was a foolish satyr, who was living in the woods."
                ],
                grammar: ["imperfect", "relative_clauses"],
                keyPhrases: ["Marsyas", "foolish", "satyr", "lived", "woods", "forests"],
                hints: { "erat": "sum - imperfect", "qui": "relative pronoun", "habitabat": "habito - imperfect" }
            },
            {
                latin: "olim, dum per montes ambulat, tibiam in terra iacentem conspexit.",
                translations: [
                    "once, while he was walking through the mountains, he caught sight of a pipe lying on the ground.",
                    "one day, while walking through the mountains, he noticed a flute lying on the ground.",
                    "once, as he walked through the mountains, he spotted a pipe lying on the earth."
                ],
                grammar: ["present_active", "perfect", "present_participle"],
                keyPhrases: ["once", "while", "walking", "mountains", "caught sight", "noticed", "pipe", "flute", "lying", "ground"],
                hints: { "dum": "while + present", "iacentem": "iaceo - present participle", "conspexit": "conspicio - perfect" }
            },
            {
                latin: "'quam pulchra est illa tibia!' exclamavit.",
                translations: [
                    "'how beautiful that pipe is!' he exclaimed.",
                    "'how lovely is that flute!' he cried out.",
                    "'how beautiful that flute is!' he shouted."
                ],
                grammar: ["direct_speech", "present_active"],
                keyPhrases: ["how", "beautiful", "lovely", "pipe", "flute", "exclaimed", "cried", "shouted"],
                hints: { "quam": "how (exclamatory)", "illa": "that", "exclamavit": "exclamo - perfect" }
            },
            {
                latin: "deinde, tibia statim rapta, domum rediit.",
                translations: [
                    "then, having immediately seized the pipe, he returned home.",
                    "then, with the pipe immediately snatched up, he went back home.",
                    "next, after quickly grabbing the flute, he returned home."
                ],
                grammar: ["ablative_absolute", "perfect"],
                keyPhrases: ["then", "immediately", "seized", "snatched", "grabbed", "pipe", "flute", "returned", "home"],
                hints: { "tibia rapta": "ablative absolute", "rediit": "redeo - perfect" }
            },
            {
                latin: "mox omnes satyrum mirabantur quod optime canere poterat.",
                translations: [
                    "soon everyone was amazed at the satyr because he could sing very well.",
                    "soon all were marvelling at the satyr because he was able to play excellently.",
                    "soon everyone admired the satyr because he could perform very well."
                ],
                grammar: ["imperfect", "quod_clause", "superlatives"],
                keyPhrases: ["soon", "everyone", "all", "amazed", "marvelling", "admired", "satyr", "because", "sing", "play", "well", "excellently"],
                hints: { "mirabantur": "miror - imperfect deponent", "optime": "superlative adverb", "poterat": "possum - imperfect" }
            },
            {
                latin: "itaque Marsyas constituit Apollinem ad certamen invitare.",
                translations: [
                    "and so Marsyas decided to invite Apollo to a contest.",
                    "therefore Marsyas decided to challenge Apollo to a competition.",
                    "so Marsyas resolved to invite Apollo to a contest."
                ],
                grammar: ["perfect", "infinitive"],
                keyPhrases: ["so", "therefore", "Marsyas", "decided", "resolved", "invite", "challenge", "Apollo", "contest", "competition"],
                hints: { "itaque": "and so/therefore", "constituit": "constituo - perfect", "invitare": "infinitive" }
            },
            {
                latin: "nam omnibus ostendere volebat se meliorem illo deo esse.",
                translations: [
                    "for he wanted to show everyone that he was better than that god.",
                    "for he wished to demonstrate to all that he was superior to that god.",
                    "because he wanted to prove to everyone that he was better than that god."
                ],
                grammar: ["imperfect", "indirect_statement", "comparatives"],
                keyPhrases: ["for", "wanted", "wished", "show", "demonstrate", "prove", "everyone", "better", "superior", "god"],
                hints: { "se...esse": "indirect statement", "meliorem": "comparative of bonus", "illo": "ablative of comparison" }
            },
            {
                latin: "postridie certamen coepit.",
                translations: [
                    "on the next day the contest began.",
                    "the following day the competition started.",
                    "on the next day the contest started."
                ],
                grammar: ["perfect"],
                keyPhrases: ["next day", "following day", "contest", "competition", "began", "started"],
                hints: { "postridie": "on the next day", "coepit": "coepi - perfect" }
            },
            {
                latin: "tandem, satyro victo, Apollo clamavit: 'nunc hunc stultum satyrum puniam!'",
                translations: [
                    "at last, with the satyr defeated, Apollo shouted: 'now I will punish this foolish satyr!'",
                    "finally, after the satyr was beaten, Apollo cried: 'now I shall punish this stupid satyr!'",
                    "at last, when the satyr had been conquered, Apollo shouted: 'now I will punish this foolish satyr!'"
                ],
                grammar: ["ablative_absolute", "perfect", "future", "direct_speech"],
                keyPhrases: ["at last", "finally", "satyr", "defeated", "beaten", "conquered", "Apollo", "shouted", "cried", "punish", "foolish", "stupid"],
                hints: { "satyro victo": "ablative absolute", "puniam": "punio - future" }
            },
            {
                latin: "itaque Marsyas mortem crudelem passus est.",
                translations: [
                    "and so Marsyas suffered a cruel death.",
                    "therefore Marsyas endured a cruel death.",
                    "so Marsyas met a cruel death."
                ],
                grammar: ["deponent_verbs", "perfect"],
                keyPhrases: ["so", "therefore", "Marsyas", "suffered", "endured", "met", "cruel", "death"],
                hints: { "passus est": "patior - perfect deponent" }
            }
        ]
    },

    {
        id: "myth_orpheus",
        title: "Orpheus and Eurydice",
        theme: "mythology",
        maxChapter: 10,
        introduction: "Orpheus attempts to rescue his wife Eurydice from the Underworld.",
        sentences: [
            {
                latin: "Orpheus erat poeta clarus, qui uxorem Eurydicen maxime amabat.",
                translations: [
                    "Orpheus was a famous poet, who loved his wife Eurydice very much.",
                    "Orpheus was a celebrated poet who greatly loved his wife Eurydice.",
                    "Orpheus was a famous poet, who loved his wife Eurydice deeply."
                ],
                grammar: ["imperfect", "relative_clauses", "superlatives"],
                keyPhrases: ["Orpheus", "famous", "celebrated", "poet", "loved", "wife", "Eurydice", "very much", "greatly", "deeply"],
                hints: { "clarus": "famous", "maxime": "very much (superlative)", "amabat": "amo - imperfect" }
            },
            {
                latin: "olim Eurydice, a serpente vulnerata, mortua est.",
                translations: [
                    "one day Eurydice, having been wounded by a snake, died.",
                    "once Eurydice, wounded by a serpent, died.",
                    "one day Eurydice, after being bitten by a snake, died."
                ],
                grammar: ["ppp", "agent_instrument", "perfect"],
                keyPhrases: ["one day", "once", "Eurydice", "wounded", "bitten", "snake", "serpent", "died"],
                hints: { "vulnerata": "PPP of vulnero", "a serpente": "agent", "mortua est": "morior - perfect deponent" }
            },
            {
                latin: "Orpheus tam tristis erat ut ad Inferos descendere constitueret.",
                translations: [
                    "Orpheus was so sad that he decided to descend to the Underworld.",
                    "Orpheus was so miserable that he resolved to go down to the Underworld.",
                    "Orpheus was so grief-stricken that he decided to descend to the realm of the dead."
                ],
                grammar: ["imperfect", "result_clauses", "imperfect_subjunctive"],
                keyPhrases: ["Orpheus", "so", "sad", "miserable", "grief-stricken", "decided", "resolved", "descend", "go down", "Underworld", "realm of the dead"],
                hints: { "tam...ut": "result clause", "constitueret": "imperfect subjunctive", "Inferos": "the Underworld" }
            },
            {
                latin: "ubi ad regiam Plutonis advenit, cecinit ut uxorem reciperet.",
                translations: [
                    "when he arrived at the palace of Pluto, he sang in order to get his wife back.",
                    "when he reached the kingdom of Pluto, he sang so that he might recover his wife.",
                    "when he came to Pluto's palace, he sang to win back his wife."
                ],
                grammar: ["ubi_postquam", "perfect", "purpose_clauses"],
                keyPhrases: ["when", "arrived", "reached", "came", "palace", "kingdom", "Pluto", "sang", "get back", "recover", "win back", "wife"],
                hints: { "ubi": "when", "cecinit": "cano - perfect", "ut reciperet": "purpose clause" }
            },
            {
                latin: "rex Inferorum, carmine commotus, Orpheo dixit: 'licet tibi uxorem abducere.'",
                translations: [
                    "the king of the Underworld, moved by the song, said to Orpheus: 'you are allowed to take your wife away.'",
                    "the king of the dead, having been moved by the music, told Orpheus: 'it is permitted for you to lead your wife away.'",
                    "the ruler of the Underworld, moved by the singing, said to Orpheus: 'you may take your wife away.'"
                ],
                grammar: ["ppp", "perfect", "direct_speech", "dative"],
                keyPhrases: ["king", "ruler", "Underworld", "dead", "moved", "song", "music", "singing", "said", "told", "Orpheus", "allowed", "permitted", "take", "lead", "wife", "away"],
                hints: { "commotus": "PPP of commoveo", "Orpheo": "dative", "licet": "it is allowed + dative" }
            },
            {
                latin: "'sed cave ne eam respicias, antequam ad lucem perveneritis.'",
                translations: [
                    "'but beware lest you look back at her, before you have reached the light.'",
                    "'but take care not to look back at her, before you arrive at the light.'",
                    "'but be careful that you do not look at her, until you have reached the light.'"
                ],
                grammar: ["imperatives", "negative_commands", "purpose_clauses", "perfect_subjunctive"],
                keyPhrases: ["but", "beware", "take care", "be careful", "not", "look back", "look at", "her", "before", "until", "reached", "arrive", "light"],
                hints: { "cave ne": "beware lest + subjunctive", "respicias": "present subjunctive", "perveneritis": "perfect subjunctive" }
            },
            {
                latin: "Orpheus laetus uxorem e tenebris ducebat.",
                translations: [
                    "Orpheus happily was leading his wife out of the darkness.",
                    "Orpheus joyfully led his wife from the shadows.",
                    "A happy Orpheus was leading his wife out of the darkness."
                ],
                grammar: ["imperfect", "adjectives_212"],
                keyPhrases: ["Orpheus", "happy", "happily", "joyfully", "leading", "led", "wife", "out of", "from", "darkness", "shadows"],
                hints: { "laetus": "happy", "ducebat": "duco - imperfect", "tenebris": "ablative" }
            },
            {
                latin: "sed, cum prope lucem essent, Orpheus uxorem respexit.",
                translations: [
                    "but, when they were near the light, Orpheus looked back at his wife.",
                    "but, since they were close to the light, Orpheus glanced back at his wife.",
                    "but, when they were almost at the light, Orpheus looked at his wife."
                ],
                grammar: ["cum_clauses", "imperfect_subjunctive", "perfect"],
                keyPhrases: ["but", "when", "since", "near", "close", "almost", "light", "Orpheus", "looked back", "glanced back", "looked at", "wife"],
                hints: { "cum...essent": "cum clause + subjunctive", "respexit": "respicio - perfect" }
            },
            {
                latin: "statim Eurydice ad Inferos retracta est, neque Orpheus eam iterum vidit.",
                translations: [
                    "immediately Eurydice was dragged back to the Underworld, and Orpheus never saw her again.",
                    "at once Eurydice was pulled back to the realm of the dead, nor did Orpheus see her again.",
                    "immediately Eurydice was taken back to the Underworld, and Orpheus did not see her again."
                ],
                grammar: ["perfect_passive", "perfect"],
                keyPhrases: ["immediately", "at once", "Eurydice", "dragged", "pulled", "taken", "back", "Underworld", "realm of the dead", "Orpheus", "never", "not", "see", "saw", "again"],
                hints: { "retracta est": "retraho - perfect passive", "neque": "and not/nor", "iterum": "again" }
            }
        ]
    },

    {
        id: "myth_daedalus",
        title: "Daedalus and Icarus",
        theme: "mythology",
        maxChapter: 10,
        introduction: "Daedalus and his son Icarus attempt to escape from Crete by flying.",
        sentences: [
            {
                latin: "Daedalus erat artifex peritissimus, qui in insula Creta habitabat.",
                translations: [
                    "Daedalus was a very skilled craftsman, who lived on the island of Crete.",
                    "Daedalus was a most expert craftsman who was living on the island of Crete.",
                    "Daedalus was a highly skilled craftsman, who lived on Crete."
                ],
                grammar: ["imperfect", "superlatives", "relative_clauses"],
                keyPhrases: ["Daedalus", "skilled", "expert", "craftsman", "lived", "living", "island", "Crete"],
                hints: { "peritissimus": "superlative of peritus", "qui": "relative pronoun" }
            },
            {
                latin: "rex Minos eum in insula retinebat, quod effugere nolebat.",
                translations: [
                    "King Minos was keeping him on the island, because he did not want him to escape.",
                    "King Minos held him on the island, because he didn't want him to flee.",
                    "King Minos was detaining him on the island, since he did not want him to escape."
                ],
                grammar: ["imperfect", "quod_quamquam", "infinitive"],
                keyPhrases: ["King Minos", "keeping", "held", "detaining", "island", "because", "since", "did not want", "escape", "flee"],
                hints: { "retinebat": "retineo - imperfect", "quod": "because", "effugere": "infinitive" }
            },
            {
                latin: "tandem Daedalus consilium cepit: alas ex pennis et cera facere constituit.",
                translations: [
                    "at last Daedalus formed a plan: he decided to make wings from feathers and wax.",
                    "finally Daedalus made a plan: he resolved to construct wings out of feathers and wax.",
                    "at last Daedalus conceived a plan: he decided to make wings from feathers and wax."
                ],
                grammar: ["perfect", "infinitive"],
                keyPhrases: ["at last", "finally", "Daedalus", "formed", "made", "conceived", "plan", "decided", "resolved", "make", "construct", "wings", "feathers", "wax"],
                hints: { "consilium cepit": "formed a plan (idiom)", "alas": "wings (acc)", "cera": "wax" }
            },
            {
                latin: "alis perfectis, filium Icarum monuit ne prope solem volaret.",
                translations: [
                    "with the wings completed, he warned his son Icarus not to fly near the sun.",
                    "when the wings were finished, he warned his son Icarus not to fly close to the sun.",
                    "after the wings had been made, he advised his son Icarus not to fly near the sun."
                ],
                grammar: ["ablative_absolute", "perfect", "indirect_commands"],
                keyPhrases: ["wings", "completed", "finished", "made", "warned", "advised", "son", "Icarus", "not", "fly", "near", "close", "sun"],
                hints: { "alis perfectis": "ablative absolute", "monuit ne": "warned not to + subjunctive", "volaret": "imperfect subjunctive" }
            },
            {
                latin: "'si nimis alte volaveris,' inquit, 'sol ceram liquefaciet.'",
                translations: [
                    "'if you fly too high,' he said, 'the sun will melt the wax.'",
                    "'if you should fly too high,' he said, 'the sun will melt the wax.'",
                    "'if you fly too high,' he said, 'the sun will dissolve the wax.'"
                ],
                grammar: ["conditionals", "future", "direct_speech"],
                keyPhrases: ["if", "fly", "too", "high", "said", "sun", "melt", "dissolve", "wax"],
                hints: { "si volaveris": "future perfect in condition", "liquefaciet": "liquefacio - future" }
            },
            {
                latin: "pater et filius e Creta volabant; Icarus tamen, gaudio elatus, ad solem ascendebat.",
                translations: [
                    "the father and son were flying from Crete; however Icarus, carried away by joy, was ascending towards the sun.",
                    "father and son flew from Crete; but Icarus, elated with joy, was rising towards the sun.",
                    "the father and son were flying from Crete; Icarus however, overcome with joy, was going up toward the sun."
                ],
                grammar: ["imperfect", "ppp"],
                keyPhrases: ["father", "son", "flying", "flew", "Crete", "however", "but", "Icarus", "carried away", "elated", "overcome", "joy", "ascending", "rising", "going up", "towards", "sun"],
                hints: { "volabant": "volo - imperfect", "elatus": "PPP of effero", "ascendebat": "ascendo - imperfect" }
            },
            {
                latin: "subito cera liquefacta est et Icarus in mare cecidit.",
                translations: [
                    "suddenly the wax melted and Icarus fell into the sea.",
                    "suddenly the wax was melted and Icarus fell into the sea.",
                    "all at once the wax melted and Icarus dropped into the sea."
                ],
                grammar: ["perfect_passive", "perfect"],
                keyPhrases: ["suddenly", "all at once", "wax", "melted", "Icarus", "fell", "dropped", "into", "sea"],
                hints: { "liquefacta est": "liquefacio - perfect passive", "cecidit": "cado - perfect" }
            },
            {
                latin: "Daedalus, ubi filium in undis mortuum vidit, valde dolebat.",
                translations: [
                    "Daedalus, when he saw his son dead in the waves, grieved greatly.",
                    "when Daedalus saw his son dead in the waves, he was very sad.",
                    "Daedalus, when he saw his dead son in the waves, was greatly grieving."
                ],
                grammar: ["ubi_postquam", "perfect", "imperfect", "ppp"],
                keyPhrases: ["Daedalus", "when", "saw", "son", "dead", "waves", "grieved", "sad", "grieving", "greatly", "very"],
                hints: { "ubi": "when", "mortuum": "PPP of morior", "dolebat": "doleo - imperfect" }
            }
        ]
    },

    // ========== MILITARY STORIES ==========
    {
        id: "military_casilinum",
        title: "The Siege of Casilinum",
        theme: "military",
        maxChapter: 10,
        introduction: "The siege of Casilinum by the Carthaginians results in those inside the city taking desperate action.",
        sentences: [
            {
                latin: "illo tempore Carthaginienses, Hannibale duce, bellum contra Romanos gerebant.",
                translations: [
                    "at that time the Carthaginians, with Hannibal as leader, were waging war against the Romans.",
                    "at that time the Carthaginians, under the leadership of Hannibal, were fighting a war against the Romans.",
                    "at that time the Carthaginians, led by Hannibal, were waging war against the Romans."
                ],
                grammar: ["imperfect", "ablative_absolute"],
                keyPhrases: ["at that time", "Carthaginians", "Hannibal", "leader", "leadership", "led by", "waging", "fighting", "war", "against", "Romans"],
                hints: { "Hannibale duce": "ablative absolute", "gerebant": "gero - imperfect" }
            },
            {
                latin: "postquam ad urbem parvam Casilinum nomine advenerunt, eam obsidere constituerunt.",
                translations: [
                    "after they arrived at a small city called Casilinum, they decided to besiege it.",
                    "when they reached a small town named Casilinum, they decided to besiege it.",
                    "after they came to a small city by the name of Casilinum, they resolved to besiege it."
                ],
                grammar: ["ubi_postquam", "perfect", "infinitive"],
                keyPhrases: ["after", "when", "arrived", "reached", "came", "small", "city", "town", "called", "named", "Casilinum", "decided", "resolved", "besiege"],
                hints: { "postquam": "after", "nomine": "by name/called", "obsidere": "infinitive" }
            },
            {
                latin: "putabant enim milites Romanos sine cibo mox perituros esse.",
                translations: [
                    "for they thought that the Roman soldiers would soon die without food.",
                    "for they believed the Roman soldiers were going to die soon without food.",
                    "they thought, you see, that the Roman soldiers would soon perish without food."
                ],
                grammar: ["indirect_statement", "future_infinitive"],
                keyPhrases: ["for", "thought", "believed", "Roman", "soldiers", "would", "going to", "soon", "die", "perish", "without", "food"],
                hints: { "putabant": "introduces indirect statement", "perituros esse": "future active infinitive" }
            },
            {
                latin: "tandem milites et cives urbis de vita adeo desperabant ut diutius vivere nollent.",
                translations: [
                    "at last the soldiers and citizens of the city were so despairing about their lives that they did not want to live any longer.",
                    "finally the soldiers and citizens despaired of life so much that they didn't want to live any longer.",
                    "at last the soldiers and citizens of the city were despairing so much about life that they refused to live any longer."
                ],
                grammar: ["imperfect", "result_clauses", "imperfect_subjunctive"],
                keyPhrases: ["at last", "finally", "soldiers", "citizens", "city", "despairing", "despaired", "life", "lives", "so", "did not want", "refused", "live", "any longer"],
                hints: { "adeo...ut": "result clause", "nollent": "nolo - imperfect subjunctive" }
            },
            {
                latin: "itaque alii ad summos muros urbis ascenderunt ut ad terram se deicerent.",
                translations: [
                    "and so some climbed to the top of the city walls to throw themselves to the ground.",
                    "therefore some went up to the highest walls of the city in order to throw themselves down to the earth.",
                    "so some climbed to the top of the city walls in order to hurl themselves to the ground."
                ],
                grammar: ["perfect", "purpose_clauses", "se_reflexive"],
                keyPhrases: ["so", "therefore", "some", "climbed", "went up", "top", "highest", "walls", "city", "throw", "hurl", "themselves", "ground", "earth"],
                hints: { "alii": "some", "summos": "highest/top of", "ut deicerent": "purpose clause", "se": "themselves (reflexive)" }
            },
            {
                latin: "alii in muris immoti stabant et corpora sua armis hostium offerebant.",
                translations: [
                    "others stood motionless on the walls and offered their bodies to the weapons of the enemy.",
                    "others were standing still on the walls and offering their bodies to enemy weapons.",
                    "others stood unmoving on the walls and presented their bodies to the enemies' weapons."
                ],
                grammar: ["imperfect", "adjectives_212"],
                keyPhrases: ["others", "stood", "standing", "motionless", "still", "unmoving", "walls", "offered", "offering", "presented", "bodies", "weapons", "enemy", "enemies"],
                hints: { "immoti": "motionless", "offerebant": "offero - imperfect" }
            },
            {
                latin: "Gracchus, ubi cognovit quid accideret, rem diligenter cogitabat.",
                translations: [
                    "Gracchus, when he found out what was happening, was thinking carefully about the matter.",
                    "when Gracchus learned what was happening, he considered the situation carefully.",
                    "Gracchus, when he discovered what was going on, was pondering the matter carefully."
                ],
                grammar: ["ubi_postquam", "indirect_questions", "imperfect_subjunctive", "imperfect"],
                keyPhrases: ["Gracchus", "when", "found out", "learned", "discovered", "what", "happening", "going on", "thinking", "considered", "pondering", "carefully", "matter", "situation"],
                hints: { "quid accideret": "indirect question + subjunctive", "cogitabat": "cogito - imperfect" }
            },
            {
                latin: "nam civibus militibusque auxilium ferre maxime cupiebat, sed imperator Romanus eum iusserat nihil facere.",
                translations: [
                    "for he very much wanted to bring help to the citizens and soldiers, but the Roman general had ordered him to do nothing.",
                    "for he greatly wished to give aid to the citizens and soldiers, but the Roman commander had ordered him not to do anything.",
                    "because he very much wanted to bring assistance to the citizens and soldiers, but the Roman general had commanded him to do nothing."
                ],
                grammar: ["imperfect", "pluperfect", "indirect_commands", "dative"],
                keyPhrases: ["for", "because", "very much", "greatly", "wanted", "wished", "bring", "give", "help", "aid", "assistance", "citizens", "soldiers", "but", "Roman", "general", "commander", "ordered", "commanded", "do nothing", "not do anything"],
                hints: { "civibus militibusque": "dative", "ferre": "infinitive of fero", "iusserat": "iubeo - pluperfect" }
            }
        ]
    },

    {
        id: "military_horatius",
        title: "Horatius at the Bridge",
        theme: "military",
        maxChapter: 8,
        introduction: "Horatius defends Rome against the Etruscan army by holding a bridge alone.",
        sentences: [
            {
                latin: "Etrusci, qui Romam oppugnare volebant, ad pontem magnum advenerunt.",
                translations: [
                    "the Etruscans, who wanted to attack Rome, arrived at a large bridge.",
                    "the Etruscans, who wished to attack Rome, came to a great bridge.",
                    "the Etruscans, who wanted to assault Rome, arrived at a big bridge."
                ],
                grammar: ["relative_clauses", "imperfect", "perfect"],
                keyPhrases: ["Etruscans", "who", "wanted", "wished", "attack", "assault", "Rome", "arrived", "came", "large", "great", "big", "bridge"],
                hints: { "qui": "relative pronoun", "volebant": "volo - imperfect", "advenerunt": "advenio - perfect" }
            },
            {
                latin: "pons flumen Tiberim transibat et viam ad urbem praebebat.",
                translations: [
                    "the bridge crossed the river Tiber and provided a route to the city.",
                    "the bridge went across the Tiber river and gave a way to the city.",
                    "the bridge spanned the river Tiber and offered a path to the city."
                ],
                grammar: ["imperfect"],
                keyPhrases: ["bridge", "crossed", "went across", "spanned", "river", "Tiber", "provided", "gave", "offered", "route", "way", "path", "city"],
                hints: { "transibat": "transeo - imperfect", "praebebat": "praebeo - imperfect" }
            },
            {
                latin: "Romani, hostibus visis, valde timebant.",
                translations: [
                    "the Romans, when the enemy had been seen, were very afraid.",
                    "the Romans, having seen the enemy, were very frightened.",
                    "when the Romans saw the enemy, they were very scared."
                ],
                grammar: ["ablative_absolute", "imperfect"],
                keyPhrases: ["Romans", "enemy", "seen", "saw", "very", "afraid", "frightened", "scared"],
                hints: { "hostibus visis": "ablative absolute", "timebant": "timeo - imperfect" }
            },
            {
                latin: "sed Horatius, vir fortissimus, solus in ponte stabat.",
                translations: [
                    "but Horatius, a very brave man, was standing alone on the bridge.",
                    "but Horatius, a most courageous man, stood alone on the bridge.",
                    "but Horatius, a very brave man, stood by himself on the bridge."
                ],
                grammar: ["imperfect", "superlatives"],
                keyPhrases: ["but", "Horatius", "very brave", "most courageous", "man", "standing", "stood", "alone", "by himself", "bridge"],
                hints: { "fortissimus": "superlative of fortis", "solus": "alone", "stabat": "sto - imperfect" }
            },
            {
                latin: "'festinate!' clamavit, 'pontem post me frangite!'",
                translations: [
                    "'hurry!' he shouted, 'break the bridge behind me!'",
                    "'make haste!' he cried, 'destroy the bridge behind me!'",
                    "'hurry up!' he shouted, 'smash the bridge behind me!'"
                ],
                grammar: ["imperatives", "perfect"],
                keyPhrases: ["hurry", "make haste", "hurry up", "shouted", "cried", "break", "destroy", "smash", "bridge", "behind me"],
                hints: { "festinate": "imperative plural", "frangite": "imperative plural of frango" }
            },
            {
                latin: "diu solus contra omnes hostes pugnabat; interea Romani pontem frangebant.",
                translations: [
                    "for a long time he fought alone against all the enemy; meanwhile the Romans were breaking the bridge.",
                    "he fought alone against all the enemies for a long time; in the meantime the Romans were destroying the bridge.",
                    "for a long time he was fighting alone against all the enemy; meanwhile the Romans were smashing the bridge."
                ],
                grammar: ["imperfect"],
                keyPhrases: ["long time", "fought", "fighting", "alone", "against", "all", "enemy", "enemies", "meanwhile", "in the meantime", "Romans", "breaking", "destroying", "smashing", "bridge"],
                hints: { "diu": "for a long time", "interea": "meanwhile", "frangebant": "frango - imperfect" }
            },
            {
                latin: "tandem, ponte fracto, Horatius in flumen desiluit.",
                translations: [
                    "at last, with the bridge broken, Horatius jumped down into the river.",
                    "finally, when the bridge had been destroyed, Horatius leaped into the river.",
                    "at last, after the bridge was smashed, Horatius jumped into the river."
                ],
                grammar: ["ablative_absolute", "perfect"],
                keyPhrases: ["at last", "finally", "bridge", "broken", "destroyed", "smashed", "Horatius", "jumped", "leaped", "into", "river"],
                hints: { "ponte fracto": "ablative absolute", "desiluit": "desilio - perfect" }
            },
            {
                latin: "quamquam vulneratus erat, trans Tiberim ad salutem natavit.",
                translations: [
                    "although he was wounded, he swam across the Tiber to safety.",
                    "although he had been wounded, he swam across the Tiber to safety.",
                    "even though he was injured, he swam across the Tiber to safety."
                ],
                grammar: ["quod_quamquam", "ppp", "perfect"],
                keyPhrases: ["although", "even though", "wounded", "injured", "swam", "across", "Tiber", "safety"],
                hints: { "quamquam": "although", "vulneratus erat": "pluperfect passive", "natavit": "nato - perfect" }
            }
        ]
    },

    // ========== DAILY LIFE STORIES ==========
    {
        id: "daily_thief",
        title: "The Cunning Thief",
        theme: "daily_life",
        maxChapter: 7,
        introduction: "A clever thief is caught by a merchant in Rome.",
        sentences: [
            {
                latin: "mercator Romanus in taberna sua multas res pretiosas habebat.",
                translations: [
                    "a Roman merchant had many valuable things in his shop.",
                    "the Roman merchant had many precious items in his shop.",
                    "a Roman merchant kept many valuable goods in his shop."
                ],
                grammar: ["imperfect"],
                keyPhrases: ["Roman", "merchant", "had", "kept", "many", "valuable", "precious", "things", "items", "goods", "shop"],
                hints: { "taberna": "shop", "pretiosas": "valuable/precious", "habebat": "habeo - imperfect" }
            },
            {
                latin: "fur callidus has res videre et capere cupiebat.",
                translations: [
                    "a cunning thief wanted to see and take these things.",
                    "a clever thief wished to see and seize these items.",
                    "a cunning thief wanted to see these things and steal them."
                ],
                grammar: ["imperfect", "infinitive"],
                keyPhrases: ["cunning", "clever", "thief", "wanted", "wished", "see", "take", "seize", "steal", "things", "items"],
                hints: { "callidus": "cunning/clever", "cupiebat": "cupio - imperfect" }
            },
            {
                latin: "itaque nocte ad tabernam lente ambulavit.",
                translations: [
                    "and so at night he walked slowly to the shop.",
                    "therefore he walked slowly to the shop at night.",
                    "so he walked slowly to the shop during the night."
                ],
                grammar: ["perfect"],
                keyPhrases: ["so", "therefore", "night", "walked", "slowly", "shop"],
                hints: { "nocte": "at night (ablative of time)", "lente": "slowly" }
            },
            {
                latin: "per fenestram parvam in tabernam intravit.",
                translations: [
                    "he entered the shop through a small window.",
                    "through a small window he went into the shop.",
                    "he got into the shop through a small window."
                ],
                grammar: ["perfect"],
                keyPhrases: ["entered", "went into", "got into", "shop", "through", "small", "window"],
                hints: { "fenestram": "window (accusative)", "intravit": "intro - perfect" }
            },
            {
                latin: "subito mercator, qui in cubiculo dormiebat, clamorem audivit.",
                translations: [
                    "suddenly the merchant, who was sleeping in his bedroom, heard a noise.",
                    "suddenly the merchant, who was asleep in his room, heard a shout.",
                    "all at once the merchant, who was sleeping in the bedroom, heard a sound."
                ],
                grammar: ["relative_clauses", "imperfect", "perfect"],
                keyPhrases: ["suddenly", "all at once", "merchant", "who", "sleeping", "asleep", "bedroom", "room", "heard", "noise", "shout", "sound"],
                hints: { "qui": "relative pronoun", "dormiebat": "dormio - imperfect", "clamorem": "noise/shout" }
            },
            {
                latin: "e lecto surrexit et furem in taberna stantem invenit.",
                translations: [
                    "he got up from bed and found the thief standing in the shop.",
                    "he rose from bed and discovered the thief standing in the shop.",
                    "he got out of bed and found the thief who was standing in the shop."
                ],
                grammar: ["perfect", "present_participle"],
                keyPhrases: ["got up", "rose", "got out", "bed", "found", "discovered", "thief", "standing", "shop"],
                hints: { "surrexit": "surgo - perfect", "stantem": "present participle of sto" }
            },
            {
                latin: "'cur in taberna mea stas?' rogavit mercator iratus.",
                translations: [
                    "'why are you standing in my shop?' asked the angry merchant.",
                    "'why do you stand in my shop?' the angry merchant asked.",
                    "'why are you in my shop?' asked the angry merchant."
                ],
                grammar: ["direct_questions", "present_active", "direct_speech"],
                keyPhrases: ["why", "standing", "stand", "my", "shop", "asked", "angry", "merchant"],
                hints: { "cur": "why", "stas": "sto - present", "rogavit": "rogo - perfect" }
            },
            {
                latin: "fur, territus, pecuniam quam ceperat reddidit et celeriter effugit.",
                translations: [
                    "the thief, terrified, gave back the money which he had taken and quickly escaped.",
                    "the frightened thief returned the money that he had seized and fled quickly.",
                    "the thief, scared, handed back the money he had taken and quickly ran away."
                ],
                grammar: ["ppp", "relative_clauses", "pluperfect", "perfect"],
                keyPhrases: ["thief", "terrified", "frightened", "scared", "gave back", "returned", "handed back", "money", "which", "that", "taken", "seized", "quickly", "escaped", "fled", "ran away"],
                hints: { "territus": "PPP of terreo", "quam": "relative pronoun", "ceperat": "capio - pluperfect" }
            }
        ]
    },

    {
        id: "daily_school",
        title: "A Day at School",
        theme: "daily_life",
        maxChapter: 5,
        introduction: "A young Roman boy has a difficult day at school.",
        sentences: [
            {
                latin: "Marcus, puer Romanus, ad ludum cotidie ambulabat.",
                translations: [
                    "Marcus, a Roman boy, used to walk to school every day.",
                    "Marcus, a Roman boy, walked to school daily.",
                    "Marcus, a Roman boy, would walk to school every day."
                ],
                grammar: ["imperfect"],
                keyPhrases: ["Marcus", "Roman", "boy", "used to walk", "walked", "would walk", "school", "every day", "daily"],
                hints: { "ludum": "school", "cotidie": "daily/every day", "ambulabat": "ambulo - imperfect" }
            },
            {
                latin: "hodie tamen sero advenit, quod diu dormierat.",
                translations: [
                    "today however he arrived late, because he had slept for a long time.",
                    "but today he arrived late, because he had slept too long.",
                    "today however he came late, since he had been sleeping for a long time."
                ],
                grammar: ["perfect", "pluperfect", "quod_quamquam"],
                keyPhrases: ["today", "however", "but", "arrived", "came", "late", "because", "since", "slept", "sleeping", "long time", "too long"],
                hints: { "hodie": "today", "sero": "late", "dormierat": "dormio - pluperfect" }
            },
            {
                latin: "magister iratus eum rogavit: 'cur tam sero advenisti?'",
                translations: [
                    "the angry teacher asked him: 'why have you arrived so late?'",
                    "the angry teacher asked him: 'why did you arrive so late?'",
                    "the angry master asked him: 'why have you come so late?'"
                ],
                grammar: ["perfect", "direct_questions", "direct_speech"],
                keyPhrases: ["angry", "teacher", "master", "asked", "why", "arrived", "come", "so", "late"],
                hints: { "magister": "teacher", "tam": "so", "advenisti": "advenio - perfect 2nd sing" }
            },
            {
                latin: "Marcus timidus respondit: 'in via canem magnum vidi.'",
                translations: [
                    "the timid Marcus replied: 'I saw a large dog in the street.'",
                    "Marcus timidly replied: 'I saw a big dog in the road.'",
                    "the nervous Marcus replied: 'I saw a large dog in the street.'"
                ],
                grammar: ["perfect", "direct_speech"],
                keyPhrases: ["timid", "timidly", "nervous", "Marcus", "replied", "saw", "large", "big", "dog", "street", "road"],
                hints: { "timidus": "timid/nervous", "respondit": "respondeo - perfect" }
            },
            {
                latin: "'mendax es!' clamavit magister. 'nunc labora!'",
                translations: [
                    "'you are a liar!' shouted the teacher. 'now work!'",
                    "'you're lying!' the teacher shouted. 'now get to work!'",
                    "'you are a liar!' cried the teacher. 'work now!'"
                ],
                grammar: ["present_active", "imperatives", "direct_speech"],
                keyPhrases: ["liar", "lying", "shouted", "cried", "teacher", "now", "work", "get to work"],
                hints: { "mendax": "liar", "labora": "imperative of laboro" }
            },
            {
                latin: "Marcus tristis multas horas in ludo laborabat.",
                translations: [
                    "the sad Marcus worked for many hours at school.",
                    "Marcus, sad, was working for many hours at school.",
                    "a sad Marcus worked for many hours in the school."
                ],
                grammar: ["imperfect", "time_how_long"],
                keyPhrases: ["sad", "Marcus", "worked", "working", "many", "hours", "school"],
                hints: { "tristis": "sad", "multas horas": "accusative of duration" }
            },
            {
                latin: "tandem domum rediit; mater eum rogavit: 'quomodo erat dies tuus?'",
                translations: [
                    "at last he returned home; his mother asked him: 'how was your day?'",
                    "finally he went back home; his mother asked him: 'how was your day?'",
                    "at last he came back home; his mother asked: 'how was your day?'"
                ],
                grammar: ["perfect", "direct_questions", "direct_speech"],
                keyPhrases: ["at last", "finally", "returned", "went back", "came back", "home", "mother", "asked", "how", "day"],
                hints: { "domum": "homeward", "rediit": "redeo - perfect", "quomodo": "how" }
            },
            {
                latin: "'pessimus!' respondit Marcus.",
                translations: [
                    "'terrible!' Marcus replied.",
                    "'the worst!' replied Marcus.",
                    "'awful!' Marcus replied."
                ],
                grammar: ["superlatives", "perfect"],
                keyPhrases: ["terrible", "worst", "awful", "replied", "Marcus"],
                hints: { "pessimus": "superlative of malus (worst/terrible)" }
            }
        ]
    },

    {
        id: "daily_dinner",
        title: "The Dinner Party",
        theme: "daily_life",
        maxChapter: 6,
        introduction: "A wealthy Roman hosts a dinner party with unexpected events.",
        sentences: [
            {
                latin: "Lucius, vir dives, amicos ad cenam invitaverat.",
                translations: [
                    "Lucius, a wealthy man, had invited friends to dinner.",
                    "Lucius, a rich man, had invited his friends to a meal.",
                    "Lucius, a wealthy man, had invited friends to a feast."
                ],
                grammar: ["pluperfect"],
                keyPhrases: ["Lucius", "wealthy", "rich", "man", "invited", "friends", "dinner", "meal", "feast"],
                hints: { "dives": "rich/wealthy", "cenam": "dinner", "invitaverat": "invito - pluperfect" }
            },
            {
                latin: "servi cibum optimum parabant et vinum in mensas ponebant.",
                translations: [
                    "the slaves were preparing excellent food and putting wine on the tables.",
                    "slaves were preparing the best food and placing wine on the tables.",
                    "the slaves were getting ready excellent food and placing wine on the tables."
                ],
                grammar: ["imperfect", "superlatives"],
                keyPhrases: ["slaves", "preparing", "getting ready", "excellent", "best", "food", "putting", "placing", "wine", "tables"],
                hints: { "optimum": "best/excellent (superlative)", "parabant": "paro - imperfect" }
            },
            {
                latin: "ubi omnes amici advenerunt, Lucius eos in triclinium duxit.",
                translations: [
                    "when all the friends arrived, Lucius led them into the dining room.",
                    "when all his friends had arrived, Lucius led them into the dining room.",
                    "after all the friends arrived, Lucius led them to the dining room."
                ],
                grammar: ["ubi_postquam", "perfect"],
                keyPhrases: ["when", "after", "all", "friends", "arrived", "Lucius", "led", "dining room"],
                hints: { "ubi": "when", "triclinium": "dining room", "duxit": "duco - perfect" }
            },
            {
                latin: "cenam laeti consumebant et multa de rebus publicis dicebant.",
                translations: [
                    "they happily ate the dinner and said many things about public affairs.",
                    "they were happily eating the meal and talking a lot about politics.",
                    "they ate the dinner happily and were saying many things about public matters."
                ],
                grammar: ["imperfect"],
                keyPhrases: ["happily", "ate", "eating", "dinner", "meal", "said", "talking", "many things", "lot", "public affairs", "politics", "matters"],
                hints: { "laeti": "happy/happily", "rebus publicis": "public affairs/politics" }
            },
            {
                latin: "subito servus in triclinium cucurrit et domino nuntium dedit.",
                translations: [
                    "suddenly a slave ran into the dining room and gave a message to the master.",
                    "all at once a slave ran into the dining room and gave the master a message.",
                    "suddenly a slave ran into the dining room and delivered a message to the master."
                ],
                grammar: ["perfect", "dative"],
                keyPhrases: ["suddenly", "all at once", "slave", "ran", "dining room", "gave", "delivered", "message", "master"],
                hints: { "cucurrit": "curro - perfect", "domino": "dative", "nuntium": "message" }
            },
            {
                latin: "'domine,' inquit, 'fur in horto visus est!'",
                translations: [
                    "'master,' he said, 'a thief has been seen in the garden!'",
                    "'master,' he said, 'a thief was seen in the garden!'",
                    "'sir,' he said, 'a thief has been spotted in the garden!'"
                ],
                grammar: ["perfect_passive", "direct_speech"],
                keyPhrases: ["master", "sir", "said", "thief", "seen", "spotted", "garden"],
                hints: { "domine": "vocative", "visus est": "video - perfect passive" }
            },
            {
                latin: "omnes e triclinio festinaverunt et furem petebant.",
                translations: [
                    "everyone hurried out of the dining room and was looking for the thief.",
                    "all hurried from the dining room and were searching for the thief.",
                    "everyone rushed out of the dining room and looked for the thief."
                ],
                grammar: ["perfect", "imperfect"],
                keyPhrases: ["everyone", "all", "hurried", "rushed", "out of", "from", "dining room", "looking for", "searching for", "thief"],
                hints: { "festinaverunt": "festino - perfect", "petebant": "peto - imperfect" }
            },
            {
                latin: "sed fur iam effugerat; cena tamen optima fuerat!",
                translations: [
                    "but the thief had already escaped; the dinner however had been excellent!",
                    "but the thief had already fled; nevertheless the dinner had been excellent!",
                    "but the thief had already run away; the meal however had been excellent!"
                ],
                grammar: ["pluperfect"],
                keyPhrases: ["but", "thief", "already", "escaped", "fled", "run away", "dinner", "meal", "however", "nevertheless", "excellent"],
                hints: { "iam": "already", "effugerat": "effugio - pluperfect", "fuerat": "sum - pluperfect" }
            }
        ]
    }
];

// Export for browser
if (typeof window !== 'undefined') {
    window.chapterGrammar = chapterGrammar;
    window.grammarSpotlights = grammarSpotlights;
    window.narrativePassages = narrativePassages;
}

// Export for Node.js (testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chapterGrammar, grammarSpotlights, narrativePassages };
}
