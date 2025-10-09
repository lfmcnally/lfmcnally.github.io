// Baucis and Philemon Data File

const lessonData = {
    fullTranslation: "Therefore when the heaven-dwellers touched the humble dwelling and entered the low doorway with bowed heads, the old man ordered them to rest their limbs on a seat which had been placed there, over which busy Baucis threw a rough woven cloth. Then she moved aside the warm ash from the hearth and revived yesterday's fires and nourished them with leaves and dry bark, and brought them to flame with her elderly breath, and brought down from the roof split kindling and dry twigs and broke them up and pushed them under the small bronze pot, and she strips the leaves from the vegetables which her husband had gathered from the well-watered garden; he lifts with a two-pronged fork the dirty back of a pig hanging from the black beam and cuts off a small part from the long-saved back and softens the cut piece in boiling water.",

    fullText: [
        { number: 637, text: '<span class="phrase phrase-1" onclick="showAnalysis(\'phrase1\')">ergo ubi caelicolae parvos tetigere penates</span>' },
        { number: 638, text: '<span class="phrase phrase-2" onclick="showAnalysis(\'phrase2\')">summissoque humiles intrarunt vertice postes,</span>' },
        { number: 639, text: '<span class="phrase phrase-3" onclick="showAnalysis(\'phrase3\')">membra senex posito iussit relevare sedili,</span>' },
        { number: 640, text: '<span class="phrase phrase-4" onclick="showAnalysis(\'phrase4\')">cui superiniecit textum rude sedula Baucis.</span>' },
        { number: 641, text: '<span class="phrase phrase-5" onclick="showAnalysis(\'phrase5\')">inde foco tepidum cinerem dimovit et ignes</span>' },
        { number: 642, text: '<span class="phrase phrase-6" onclick="showAnalysis(\'phrase6\')">suscitat hesternos foliisque et cortice sicco</span>' },
        { number: 643, text: '<span class="phrase phrase-7" onclick="showAnalysis(\'phrase7\')">nutrit et ad flammas anima producit anili,</span>' },
        { number: 644, text: '<span class="phrase phrase-8" onclick="showAnalysis(\'phrase8\')">multifidasque faces ramaliaque arida tecto</span>' },
        { number: 645, text: '<span class="phrase phrase-9" onclick="showAnalysis(\'phrase9\')">detulit et minuit parvoque admovit aeno,</span>' },
        { number: 646, text: '<span class="phrase phrase-10" onclick="showAnalysis(\'phrase10\')">quodque suus coniunx riguo collegerat horto</span>' },
        { number: 647, text: '<span class="phrase phrase-11" onclick="showAnalysis(\'phrase11\')">truncat holus foliis; furca levat ille bicorni</span>' },
        { number: 648, text: '<span class="phrase phrase-12" onclick="showAnalysis(\'phrase12\')">sordida terga suis nigro pendentia tigno</span>' },
        { number: 649, text: '<span class="phrase phrase-13" onclick="showAnalysis(\'phrase13\')">servatoque diu resecat de tergore partem</span>' },
        { number: 650, text: '<span class="phrase phrase-14" onclick="showAnalysis(\'phrase14\')">exiguam sectamque domat ferventibus undis.</span>' }
    ],

    grammar: {
        phrase1: {
            title: "ergo ubi caelicolae parvos tetigere penates",
            vocab: [
                "<strong>ergo</strong> = therefore (linking word)",
                "<strong>ubi</strong> = when (conjunction introducing a time clause)",
                "<strong>caelicolae</strong> = heaven-dwellers, gods (nominative plural)",
                "<strong>parvos</strong> = small, humble (accusative plural)",
                "<strong>tetigere</strong> = touched, reached (perfect tense = tetiger<u>unt</u>)",
                "<strong>penates</strong> = household gods, home (accusative plural)"
            ],
            grammar: "'Ubi' introduces a time clause meaning 'when'. The subject is 'caelicolae' (the gods). The verb 'tetigere' is perfect tense (poetic alternative to 'tetigerunt'). The object is 'parvos penates' (the humble home).",
            translation: "therefore when the heaven-dwellers touched the humble dwelling"
        },
        phrase2: {
            title: "summissoque humiles intrarunt vertice postes",
            vocab: [
                "<strong>summisso</strong> = with bowed, lowered (ablative singular)",
                "<strong>-que</strong> = and",
                "<strong>humiles</strong> = low, humble (accusative plural)",
                "<strong>intrarunt</strong> = they entered (perfect tense)",
                "<strong>vertice</strong> = with head (ablative singular)",
                "<strong>postes</strong> = doorposts, doorway (accusative plural)"
            ],
            grammar: "'Summisso vertice' is ablative of manner meaning 'with bowed head'. The verb 'intrarunt' has the object 'humiles postes' (the low doorway). Notice the word order - 'summisso...vertice' wraps around the line.",
            translation: "and entered the low doorway with bowed heads"
        },
        phrase3: {
            title: "membra senex posito iussit relevare sedili",
            vocab: [
                "<strong>membra</strong> = limbs, body (accusative plural)",
                "<strong>senex</strong> = old man (nominative = Philemon)",
                "<strong>posito</strong> = placed (perfect passive participle)",
                "<strong>iussit</strong> = ordered, told (perfect tense)",
                "<strong>relevare</strong> = to rest, to relieve (infinitive)",
                "<strong>sedili</strong> = on a seat (ablative singular)"
            ],
            grammar: "'Iussit' + infinitive = 'ordered them to rest'. 'Posito sedili' is an ablative absolute: 'with a seat having been placed' = 'on a seat which had been placed'.",
            translation: "the old man ordered them to rest their limbs on a seat which had been placed there"
        },
        phrase4: {
            title: "cui superiniecit textum rude sedula Baucis",
            vocab: [
                "<strong>cui</strong> = over which (dative, referring to 'sedili')",
                "<strong>superiniecit</strong> = threw over (perfect tense)",
                "<strong>textum</strong> = cloth (accusative)",
                "<strong>rude</strong> = rough, coarse (accusative)",
                "<strong>sedula</strong> = busy, diligent (nominative)",
                "<strong>Baucis</strong> = Baucis (nominative)"
            ],
            grammar: "'Cui' refers back to the seat. Notice 'sedula Baucis' comes at the end for emphasis - highlighting her busy, diligent character. 'Textum rude' shows their poverty (rough cloth).",
            translation: "over which busy Baucis threw a rough woven cloth"
        },
        phrase5: {
            title: "inde foco tepidum cinerem dimovit et ignes",
            vocab: [
                "<strong>inde</strong> = then, from there",
                "<strong>foco</strong> = from the hearth (ablative)",
                "<strong>tepidum</strong> = warm (accusative)",
                "<strong>cinerem</strong> = ash (accusative)",
                "<strong>dimovit</strong> = moved aside (perfect tense)",
                "<strong>ignes</strong> = fires (accusative)"
            ],
            grammar: "'Inde' marks transition to next action. 'Dimovit' has two objects: 'tepidum cinerem' (warm ash) and 'ignes' (fires). 'Tepidum' is a realistic detail - the ash is still warm from yesterday.",
            translation: "then she moved aside the warm ash from the hearth and the fires"
        },
        phrase6: {
            title: "suscitat hesternos foliisque et cortice sicco",
            vocab: [
                "<strong>suscitat</strong> = revives (present tense - historic present)",
                "<strong>hesternos</strong> = yesterday's (accusative plural)",
                "<strong>foliis</strong> = with leaves (ablative plural)",
                "<strong>-que</strong> = and",
                "<strong>et</strong> = and",
                "<strong>cortice</strong> = with bark (ablative)",
                "<strong>sicco</strong> = dry (ablative)"
            ],
            grammar: "Switch to present tense ('suscitat') makes it vivid - the 'historic present'. 'Foliis et cortice sicco' are ablatives of means - she uses leaves and bark to feed the fire.",
            translation: "revives yesterday's fires with leaves and dry bark"
        },
        phrase7: {
            title: "nutrit et ad flammas anima producit anili",
            vocab: [
                "<strong>nutrit</strong> = nourishes, feeds (present tense)",
                "<strong>et</strong> = and",
                "<strong>ad</strong> = to, towards",
                "<strong>flammas</strong> = flames (accusative)",
                "<strong>anima</strong> = with breath (ablative)",
                "<strong>producit</strong> = brings forth (present tense)",
                "<strong>anili</strong> = elderly, old (ablative)"
            ],
            grammar: "Present tense continues ('nutrit', 'producit'). 'Anima anili' is ablative of means - she blows with her old breath. This touching detail emphasises her age and effort. The fire is personified - 'nourished' like a living thing.",
            translation: "and nourishes them and brings them to flame with her elderly breath"
        },
        phrase8: {
            title: "multifidasque faces ramaliaque arida tecto",
            vocab: [
                "<strong>multifidas</strong> = split into many pieces (accusative plural)",
                "<strong>-que</strong> = and",
                "<strong>faces</strong> = kindling, torches (accusative plural)",
                "<strong>ramalia</strong> = twigs (accusative plural)",
                "<strong>-que</strong> = and",
                "<strong>arida</strong> = dry (accusative plural)",
                "<strong>tecto</strong> = from the roof (ablative)"
            ],
            grammar: "List of objects (faces, ramalia) connected with '-que'. 'Tecto' is ablative - from the roof where they've been stored. 'Multifidas' is a compound adjective (multi + fidas = many-split).",
            translation: "and split kindling and dry twigs from the roof"
        },
        phrase9: {
            title: "detulit et minuit parvoque admovit aeno",
            vocab: [
                "<strong>detulit</strong> = brought down (perfect tense)",
                "<strong>et</strong> = and",
                "<strong>minuit</strong> = broke up (perfect tense)",
                "<strong>parvo</strong> = small (ablative)",
                "<strong>-que</strong> = and",
                "<strong>admovit</strong> = moved towards, pushed under (perfect tense)",
                "<strong>aeno</strong> = bronze pot (ablative)"
            ],
            grammar: "Three perfect tense verbs in sequence: brought down, broke up, pushed under. 'Parvo aeno' (small pot) emphasises their poverty.",
            translation: "brought down and broke up and pushed under the small bronze pot"
        },
        phrase10: {
            title: "quodque suus coniunx riguo collegerat horto",
            vocab: [
                "<strong>quod</strong> = which (accusative neuter)",
                "<strong>-que</strong> = and",
                "<strong>suus</strong> = her (nominative masculine)",
                "<strong>coniunx</strong> = husband (nominative)",
                "<strong>riguo</strong> = well-watered (ablative)",
                "<strong>collegerat</strong> = had gathered (pluperfect)",
                "<strong>horto</strong> = from the garden (ablative)"
            ],
            grammar: "Relative clause with 'quod' referring forward to 'holus' (vegetables). 'Collegerat' is pluperfect - he had gathered them before. 'Riguo horto' shows they have a productive garden.",
            translation: "and which her husband had gathered from the well-watered garden"
        },
        phrase11: {
            title: "truncat holus foliis; furca levat ille bicorni",
            vocab: [
                "<strong>truncat</strong> = cuts off, strips (present tense)",
                "<strong>holus</strong> = vegetables (accusative)",
                "<strong>foliis</strong> = from leaves (ablative)",
                "<strong>furca</strong> = with a fork (ablative)",
                "<strong>levat</strong> = lifts (present tense)",
                "<strong>ille</strong> = he (nominative = Philemon)",
                "<strong>bicorni</strong> = two-pronged (ablative)"
            ],
            grammar: "Semicolon marks shift from Baucis to Philemon. 'Ille' (he) contrasts with implied 'she'. 'Furca bicorni' is ablative of instrument. 'Bicorni' is a compound word (bi + corni = two-pronged).",
            translation: "she strips the vegetables from their leaves; he lifts with a two-pronged fork"
        },
        phrase12: {
            title: "sordida terga suis nigro pendentia tigno",
            vocab: [
                "<strong>sordida</strong> = dirty, grimy (accusative plural)",
                "<strong>terga</strong> = back, back meat (accusative plural)",
                "<strong>suis</strong> = of a pig (genitive)",
                "<strong>nigro</strong> = black, dark (ablative)",
                "<strong>pendentia</strong> = hanging (present participle)",
                "<strong>tigno</strong> = from a beam (ablative)"
            ],
            grammar: "'Pendentia' is present participle agreeing with 'terga'. 'Sordida terga suis' (dirty pig's back) is 'pendentia nigro tigno' (hanging from black beam). The smoke-blackened beam shows this is their only preserved meat.",
            translation: "the dirty back of a pig hanging from the black beam"
        },
        phrase13: {
            title: "servatoque diu resecat de tergore partem",
            vocab: [
                "<strong>servato</strong> = saved (perfect passive participle)",
                "<strong>-que</strong> = and",
                "<strong>diu</strong> = for a long time",
                "<strong>resecat</strong> = cuts off (present tense)",
                "<strong>de</strong> = from",
                "<strong>tergore</strong> = from the back (ablative)",
                "<strong>partem</strong> = part, portion (accusative)"
            ],
            grammar: "'Servato diu' is ablative absolute: 'having been saved for a long time'. This emphasises how precious this meat is. 'Resecat' returns to present tense.",
            translation: "and cuts off a part from the long-saved back"
        },
        phrase14: {
            title: "exiguam sectamque domat ferventibus undis",
            vocab: [
                "<strong>exiguam</strong> = small, tiny (accusative)",
                "<strong>sectam</strong> = cut (perfect passive participle)",
                "<strong>-que</strong> = and",
                "<strong>domat</strong> = tames, softens (present tense)",
                "<strong>ferventibus</strong> = boiling (ablative plural)",
                "<strong>undis</strong> = in waters (ablative)"
            ],
            grammar: "'Exiguam' emphasises the tiny portion. 'Sectam' (perfect participle) describes meat as 'having been cut'. 'Ferventibus undis' is ablative of means. 'Domat' (tames) is usually used for animals - humorous for tough meat!",
            translation: "small and cut, and softens it in boiling water"
        }
    },

    sections: {
        section1: {
            title: "Lines 637-641: The Gods Enter",
            lines: [
                { number: 637, text: "ergo ubi <span id='s1-caelicolae'>caelicolae</span> <span id='s1-parvos'>parvos</span> tetigere <span id='s1-penates'>penates</span>" },
                { number: 638, text: "<span id='s1-summisso'>summisso</span>que <span id='s1-humiles'>humiles</span> intrarunt <span id='s1-vertice'>vertice</span> postes," },
                { number: 639, text: "membra senex posito iussit <span id='s1-relevare'>relevare</span> sedili," },
                { number: 640, text: "cui superiniecit <span id='s1-textum'>textum rude</span> <span id='s1-sedula'>sedula Baucis</span>." },
                { number: 641, text: "inde foco <span id='s1-tepidum'>tepidum</span> cinerem dimovit et ignes" }
            ],
            features: [
                {
                    id: "elevated-vocab",
                    title: "Elevated Vocabulary: 'caelicolae'",
                    highlight: ["s1-caelicolae"],
                    whatIsIt: "Instead of using the simple word 'dei' (gods), Ovid uses the compound word <strong>caelicolae</strong> - literally 'heaven-dwellers' (caeli = of heaven, colae = dwellers).",
                    whyMatters: "This elevated, poetic vocabulary reminds us these aren't ordinary guests - they're divine beings in disguise. The contrast between 'caelicolae' (heaven-dwellers) and 'parvos penates' (humble home) is striking. Gods are entering a tiny cottage!"
                },
                {
                    id: "contrast",
                    title: "Contrasting Adjectives",
                    highlight: ["s1-caelicolae", "s1-parvos", "s1-penates", "s1-humiles"],
                    whatIsIt: "Notice the deliberate pairing of opposites: <strong>caelicolae</strong> (heaven-dwellers) with <strong>parvos penates</strong> (small home), and <strong>humiles postes</strong> (low doorway). This is called <strong>juxtaposition</strong> - placing contrasting ideas side by side.",
                    whyMatters: "The contrast emphasises the couple's poverty and makes their hospitality even more impressive. Divine beings are stooping to enter this humble dwelling - literally and figuratively bowing down to the level of poor mortals."
                },
                {
                    id: "hyperbaton",
                    title: "Word Order: Wrapping Around",
                    highlight: ["s1-summisso", "s1-vertice"],
                    whatIsIt: "The words 'summisso...vertice' (with bowed...head) are separated and wrap around the middle of the line. This is called <strong>hyperbaton</strong> - deliberately separating words that belong together.",
                    whyMatters: "The word order itself creates a visual 'bowing' in the Latin! The words physically bow around the centre of the line, matching the action they describe. It's a clever poetic trick - the form mirrors the content."
                },
                {
                    id: "framing",
                    title: "Emphasis Through Position",
                    highlight: ["s1-sedula"],
                    whatIsIt: "The phrase 'sedula Baucis' (busy Baucis) is placed at the very end of line 640. In Latin poetry, the last position in a line gets special emphasis.",
                    whyMatters: "Ovid wants us to notice Baucis' character. By putting 'sedula' (busy, diligent) at the end, he emphasises her industrious nature. She's not grudgingly helping - she's eagerly, busily preparing for her guests."
                },
                {
                    id: "poverty-markers",
                    title: "Markers of Poverty",
                    highlight: ["s1-parvos", "s1-humiles", "s1-textum"],
                    whatIsIt: "Ovid uses specific adjectives to emphasise their poverty: <strong>parvos</strong> (small home), <strong>humiles</strong> (low doorway), <strong>textum rude</strong> (rough cloth).",
                    whyMatters: "These aren't just descriptive details - they build our understanding of how poor this couple is. They don't have fine cloth or a grand house, but they share everything they have. The poverty makes their generosity heroic."
                },
                {
                    id: "realistic-detail",
                    title: "Realistic Detail: 'tepidum'",
                    highlight: ["s1-tepidum"],
                    whatIsIt: "The adjective 'tepidum' means 'warm' or 'lukewarm'. It's a tiny, specific detail about the ash.",
                    whyMatters: "This makes the scene feel real and immediate. The ash is still warm from yesterday's fire - we can almost feel it! Ovid's attention to small domestic details brings the cottage to life. These aren't generic 'poor people' - they're real individuals we can picture."
                },
                {
                    id: "verb-choice",
                    title: "Verb Choice: 'relevare'",
                    highlight: ["s1-relevare"],
                    whatIsIt: "'Relevare' literally means 'to lift up' or 'to lighten', but here means 'to rest'. It comes from 're-' (again) + 'levare' (to lift).",
                    whyMatters: "The verb suggests relief from burden - lifting the weight off their tired limbs. It's a more evocative choice than a simple 'sit down' - Philemon is offering comfort and relief to weary travellers."
                }
            ]
        },

        section2: {
            title: "Lines 642-646: Baucis Revives the Fire",
            lines: [
                { number: 642, text: "<span id='s2-suscitat'>suscitat</span> <span id='s2-hesternos'>hesternos</span> foliisque et cortice sicco" },
                { number: 643, text: "<span id='s2-nutrit'>nutrit</span> et ad flammas anima <span id='s2-producit'>producit</span> <span id='s2-anili'>anili</span>," },
                { number: 644, text: "<span id='s2-multifidas'>multifidas</span>que faces <span id='s2-ramalia'>ramalia</span>que arida <span id='s2-tecto'>tecto</span>" },
                { number: 645, text: "<span id='s2-detulit'>detulit</span> et <span id='s2-minuit'>minuit</span> <span id='s2-parvo'>parvo</span>que <span id='s2-admovit'>admovit</span> aeno," },
                { number: 646, text: "quodque suus coniunx <span id='s2-riguo'>riguo</span> collegerat horto" }
            ],
            features: [
                {
                    id: "historic-present",
                    title: "The Historic Present",
                    highlight: ["s2-suscitat", "s2-nutrit", "s2-producit"],
                    whatIsIt: "Ovid switches from perfect tense (like 'dimovit' = moved) to present tense: 'suscitat' (revives), 'nutrit' (nourishes), 'producit' (brings forth). This is called the <strong>historic present</strong> - using present tense to describe past events.",
                    whyMatters: "Present tense makes it feel like we're watching the action unfold right now. It's more vivid and cinematic than past tense. We feel like we're in the cottage with Baucis, watching her work. It's a film technique in Latin poetry!"
                },
                {
                    id: "personification",
                    title: "Fire as a Living Thing",
                    highlight: ["s2-suscitat", "s2-hesternos", "s2-nutrit"],
                    whatIsIt: "The fire is described with verbs for living things: 'suscitat' (revives/awakens), 'nutrit' (nourishes/feeds). Also notice 'hesternos' (yesterday's) - the fires are treated as if they're sleeping overnight. This is <strong>personification</strong>.",
                    whyMatters: "The fire becomes almost like a sleeping animal that Baucis is waking up and feeding. This fits Roman culture - the hearth fire was sacred to Vesta and was the heart of the home. By personifying it, Ovid makes it feel alive and central to domestic life."
                },
                {
                    id: "touching-detail",
                    title: "Emotional Detail: 'anima anili'",
                    highlight: ["s2-anili"],
                    whatIsIt: "'Anima anili' means 'with elderly breath' or 'with an old woman's breath'. It's ablative of means - describing how she brings the fire to life.",
                    whyMatters: "This is incredibly touching. We picture an elderly woman gently blowing on embers, coaxing them back to life. The adjective 'anili' (elderly) reminds us of her age and emphasises her effort. Despite being old, she's working hard for her guests."
                },
                {
                    id: "compound-words",
                    title: "Compound Adjectives",
                    highlight: ["s2-multifidas"],
                    whatIsIt: "'Multifidas' = 'multi' (many) + 'fidas' (split) = 'split into many pieces'. Creating compound words by joining parts together is a feature of elevated poetic style.",
                    whyMatters: "It's more elegant than saying 'split into many pieces' with separate words. Even when describing humble kindling, Ovid maintains his poetic craft and literary elevation. This is high art describing low life!"
                },
                {
                    id: "polysyndeton",
                    title: "Lists with Multiple 'ands'",
                    highlight: ["s2-multifidas", "s2-ramalia"],
                    whatIsIt: "Items are connected with '-que' (and) multiple times: 'multifidasque faces ramaliaque' (kindling AND twigs AND...). Using multiple 'ands' is called <strong>polysyndeton</strong>.",
                    whyMatters: "Piling up items with 'and...and...and' creates breathless energy and busy activity. Baucis is gathering lots of materials - the technique mirrors her frantic preparation. She's working fast to welcome her guests!"
                },
                {
                    id: "stored-materials",
                    title: "Detail: Storage in the Roof",
                    highlight: ["s2-tecto"],
                    whatIsIt: "'Tecto' (from the roof) is ablative showing where the kindling was stored. Poor Roman houses stored dry materials in the thatch to keep them ready for the fire.",
                    whyMatters: "This realistic detail shows Ovid knew how poor people lived. Kindling stored in the roof was normal for cottages like this. These authentic details make the story feel true to life, not idealised or fantasy."
                },
                {
                    id: "verb-sequence",
                    title: "Sequence of Actions",
                    highlight: ["s2-detulit", "s2-minuit", "s2-admovit"],
                    whatIsIt: "Three verbs in quick succession: 'detulit' (brought down), 'minuit' (broke up), 'admovit' (pushed under). This creates rapid movement.",
                    whyMatters: "The rapid sequence of verbs creates a sense of efficient, practised movement. Baucis has done this thousands of times - she's expert at fire-building. The quick verbs show her competence and speed."
                },
                {
                    id: "poverty-marker2",
                    title: "Poverty: 'parvo aeno'",
                    highlight: ["s2-parvo"],
                    whatIsIt: "'Parvo aeno' means 'small bronze pot'. Even their cooking pot is described as small.",
                    whyMatters: "Another reminder of poverty - they don't have a large pot for big meals. Everything about their lives is small-scale. Yet they're still preparing a meal for strangers. The size emphasis makes their generosity more impressive."
                },
                {
                    id: "garden-detail",
                    title: "Positive Detail: The Garden",
                    highlight: ["s2-riguo"],
                    whatIsIt: "'Riguo horto' means 'well-watered garden'. This suggests they have a productive garden that's properly irrigated or naturally moist.",
                    whyMatters: "Not everything about their life is poverty! They have a good garden that provides vegetables. This shows they're hardworking and self-sufficient. Though poor, they're not desperate - they grow their own food and manage their small resources well."
                }
            ]
        },

        section3: {
            title: "Lines 647-650: Preparing the Meal",
            lines: [
                { number: 647, text: "truncat holus foliis; furca levat <span id='s3-ille'>ille</span> <span id='s3-bicorni'>bicorni</span>" },
                { number: 648, text: "<span id='s3-sordida'>sordida</span> terga suis <span id='s3-nigro'>nigro</span> pendentia tigno" },
                { number: 649, text: "<span id='s3-servato'>servato</span>que <span id='s3-diu'>diu</span> resecat de tergore <span id='s3-partem'>partem</span>" },
                { number: 650, text: "<span id='s3-exiguam'>exiguam</span> sectamque <span id='s3-domat'>domat</span> ferventibus undis." }
            ],
            features: [
                {
                    id: "shift-focus",
                    title: "Shift from Baucis to Philemon",
                    highlight: ["s3-ille"],
                    whatIsIt: "The semicolon marks a pause, and 'ille' (he/that one) shifts our attention from Baucis to Philemon. After focusing on Baucis for many lines, we now see what he's doing.",
                    whyMatters: "This shows both members of the couple working together as a team. She prepares vegetables, he deals with meat. Their partnership emphasises shared values and mutual hospitality. This isn't just Baucis being generous - it's both of them together."
                },
                {
                    id: "realistic-poverty",
                    title: "Vivid Poverty Details",
                    highlight: ["s3-sordida", "s3-nigro", "s3-servato", "s3-diu"],
                    whatIsIt: "Look at the accumulation of details: <strong>sordida</strong> (dirty/grimy), <strong>nigro tigno</strong> (black beam), <strong>servato diu</strong> (saved for a long time). Each word adds to the picture of poverty.",
                    whyMatters: "These details paint a vivid picture. The meat is smoke-blackened from hanging in the rafters for ages. The beam is black from years of smoke. This is their only preserved meat, saved for a special occasion. Giving it to strangers is a real sacrifice!"
                },
                {
                    id: "tiny-portion",
                    title: "Emphasis on Size: 'exiguam'",
                    highlight: ["s3-partem", "s3-exiguam"],
                    whatIsIt: "'Exiguam partem' means 'tiny portion' or 'small part'. 'Exiguus' emphasises how small and meagre something is.",
                    whyMatters: "They're cutting off only a tiny piece because it's all they have. Yet they're sharing it! This isn't wealthy people being generous with abundance - it's poor people sharing genuine scarcity. That's true hospitality."
                },
                {
                    id: "unusual-verb",
                    title: "Unusual Verb: 'domat'",
                    highlight: ["s3-domat"],
                    whatIsIt: "The verb 'domat' usually means 'to tame' or 'to conquer' - you'd use it for taming a wild horse or defeating an enemy! Here it means 'to soften' the meat.",
                    whyMatters: "This is humorous! The meat is so tough and old it needs to be 'conquered' by boiling water. Ovid adds a touch of comedy whilst reinforcing how humble their meal is. Even their food is a challenge to prepare!"
                },
                {
                    id: "compound-bicorni",
                    title: "Poetic Compound: 'bicorni'",
                    highlight: ["s3-bicorni"],
                    whatIsIt: "'Bicorni' = 'bi' (two) + 'corni' (horned/pronged) = 'two-pronged'. It's a compound adjective for a simple farm tool.",
                    whyMatters: "Even describing a rustic pitchfork, Ovid uses elegant compound words instead of simple description. This maintains his poetic elevation. He never 'writes down' to his subject - poor people and farm tools still get literary treatment."
                },
                {
                    id: "ablative-absolute",
                    title: "Grammar: Ablative Absolute",
                    highlight: ["s3-servato", "s3-diu"],
                    whatIsIt: "'Servato diu' is an <strong>ablative absolute</strong>: 'with (it) having been saved for a long time'. This construction uses ablative case to add background information.",
                    whyMatters: "The ablative absolute emphasises the time aspect - this meat has been preserved for ages, waiting for a special occasion. Now these strangers are being treated as that special occasion. It shows how seriously they take hospitality."
                },
                {
                    id: "smoke-detail",
                    title: "Realistic Detail: Smoke-Blackening",
                    highlight: ["s3-sordida", "s3-nigro"],
                    whatIsIt: "'Sordida' (dirty/grimy) and 'nigro tigno' (black beam) describe how smoke has blackened everything in the cottage over years of fires.",
                    whyMatters: "In poor cottages without chimneys, smoke would blacken everything - meat, beams, walls. This authentic detail shows Ovid understands real poverty. He's not romanticising rural life - he shows it honestly, which makes their generosity even more meaningful."
                }
            ]
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadFullText();
    loadTeachingSections();
});

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            showSection(this.getAttribute('data-section'));
        });
    });

    const navButtons = document.querySelectorAll('.nav-btn[data-goto]');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection(this.getAttribute('data-goto'));
        });
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load Full Text with interactive phrases
function loadFullText() {
    const latinTextEl = document.getElementById('latinText');
    if (latinTextEl) {
        let html = '';
        lessonData.fullText.forEach(line => {
            html += `<div class="latin-line"><span class="line-number">${line.number}</span>${line.text}</div>`;
        });
        latinTextEl.innerHTML = html;
    }
    
    const fullTranslationTextEl = document.getElementById('fullTranslationText');
    if (fullTranslationTextEl) {
        fullTranslationTextEl.textContent = lessonData.fullTranslation;
    }
}

function showAnalysis(phraseId) {
    let modal = document.getElementById('analysisModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'analysisModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 2rem;
        `;
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
        document.body.appendChild(modal);
    }
    
    const data = lessonData.grammar[phraseId];
    if (data) {
        let vocabHTML = data.vocab.map(v => `<p style="margin: 0.5rem 0;">• ${v}</p>`).join('');
        
        modal.innerHTML = `
            <div style="background: white; border-radius: 12px; padding: 2rem; max-width: 600px; max-height: 80vh; overflow-y: auto; position: relative;">
                <button onclick="document.getElementById('analysisModal').style.display='none'" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #9ca3af;">×</button>
                <div style="display: inline-block; padding: 0.25rem 0.625rem; background: rgba(0, 102, 255, 0.1); color: #0066ff; border-radius: 4px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; margin-bottom: 1rem;">Grammar & Vocabulary</div>
                <h4 style="color: #1f2937; margin-bottom: 1rem; font-size: 1.1rem;">${data.title}</h4>
                <div style="margin: 1rem 0;">${vocabHTML}</div>
                <p style="margin: 1rem 0;"><strong style="color: #0066ff;">Grammar:</strong> ${data.grammar}</p>
                <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb;">
                    <button onclick="this.nextElementSibling.style.display='block'; this.style.display='none';" style="background: #0066ff; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">Reveal Translation</button>
                    <div style="display: none; margin-top: 1rem; padding: 0.75rem; background: rgba(5, 150, 105, 0.05); border-radius: 6px; border-left: 3px solid #059669; color: #047857;">
                        <strong>Translation:</strong> "${data.translation}"
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    }
}

// Load Teaching Sections
function loadTeachingSections() {
    ['section1', 'section2', 'section3'].forEach(sectionKey => {
        const sectionData = lessonData.sections[sectionKey];
        
        // Load Latin text
        const latinEl = document.getElementById(`${sectionKey}Latin`);
        if (latinEl) {
            let html = '';
            sectionData.lines.forEach(line => {
                html += `<div class="latin-line"><span class="line-number">${line.number}</span>${line.text}</div>`;
            });
            latinEl.innerHTML = html;
        }
        
        // Load style buttons
        const buttonsEl = document.getElementById(`${sectionKey}Buttons`);
        if (buttonsEl) {
            let html = '';
            sectionData.features.forEach(feature => {
                html += `<button class="style-btn" onclick="showStyleAnalysis('${sectionKey}', '${feature.id}')">${feature.title}</button>`;
            });
            buttonsEl.innerHTML = html;
        }
        
        // Create analysis panels (hidden initially)
        const panelEl = document.getElementById(`${sectionKey}Panel`);
        if (panelEl) {
            sectionData.features.forEach(feature => {
                const analysisDiv = document.createElement('div');
                analysisDiv.className = 'analysis-content';
                analysisDiv.id = `${sectionKey}-${feature.id}`;
                analysisDiv.innerHTML = `
                    <h3 class="analysis-title">${feature.title}</h3>
                    
                    <div class="reveal-section">
                        <button class="reveal-btn" onclick="revealSection('${sectionKey}-${feature.id}-what')">
                            What is it? <span>▼</span>
                        </button>
                        <div class="reveal-content" id="${sectionKey}-${feature.id}-what">
                            <p>${feature.whatIsIt}</p>
                        </div>
                    </div>
                    
                    <div class="reveal-section">
                        <button class="reveal-btn" onclick="revealSection('${sectionKey}-${feature.id}-why')">
                            Why does it matter? <span>▼</span>
                        </button>
                        <div class="reveal-content" id="${sectionKey}-${feature.id}-why">
                            <p>${feature.whyMatters}</p>
                        </div>
                    </div>
                `;
                panelEl.appendChild(analysisDiv);
            });
        }
    });
}

let currentStyleAnalysis = null;
let currentHighlights = [];

function showStyleAnalysis(sectionKey, featureId) {
    // Remove previous highlights
    currentHighlights.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('highlight-active');
    });
    currentHighlights = [];
    
    // Remove active from all buttons in this section
    document.querySelectorAll(`#${sectionKey}Buttons .style-btn`).forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active to clicked button
    event.currentTarget.classList.add('active');
    
    // Hide placeholder and all analysis panels
    const panelEl = document.getElementById(`${sectionKey}Panel`);
    const placeholder = panelEl.querySelector('.panel-placeholder');
    if (placeholder) placeholder.style.display = 'none';
    
    panelEl.querySelectorAll('.analysis-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected analysis
    const analysisEl = document.getElementById(`${sectionKey}-${featureId}`);
    if (analysisEl) {
        analysisEl.classList.add('active');
        currentStyleAnalysis = analysisEl;
    }
    
    // Highlight relevant words
    const sectionData = lessonData.sections[sectionKey];
    const feature = sectionData.features.find(f => f.id === featureId);
    if (feature && feature.highlight) {
        feature.highlight.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('highlight-active');
                currentHighlights.push(id);
            }
        });
    }
}

function revealSection(sectionId) {
    const contentEl = document.getElementById(sectionId);
    const button = event.currentTarget;
    
    if (contentEl.classList.contains('visible')) {
        contentEl.classList.remove('visible');
        button.classList.remove('revealed');
    } else {
        contentEl.classList.add('visible');
        button.classList.add('revealed');
        button.textContent = button.textContent.includes('What') ? 'What is it? ✓' : 'Why does it matter? ✓';
    }
}
