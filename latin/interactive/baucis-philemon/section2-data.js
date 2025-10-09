// Baucis and Philemon Data File

const lessonData = {
    fullTranslation: "Therefore when the heaven-dwellers touched the humble dwelling and entered the low doorway with bowed heads, the old man ordered them to rest their limbs on a seat which had been placed there, over which busy Baucis threw a rough woven cloth. Then she moved aside the warm ash from the hearth and revived yesterday's fires and nourished them with leaves and dry bark, and brought them to flame with her elderly breath, and brought down from the roof split kindling and dry twigs and broke them up and pushed them under the small bronze pot, and she strips the leaves from the vegetables which her husband had gathered from the well-watered garden; he lifts with a two-pronged fork the dirty back of a pig hanging from the black beam and cuts off a small part from the long-saved back and softens the cut piece in boiling water.",

    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">ergo ubi caelicolae</span> parvos tetigere penates</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')"><span class="highlight-style style-2" onclick="showAnalysis('style2')">summissoque humiles intrarunt vertice</span> postes</span>,
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">membra senex <span class="highlight-style style-3" onclick="showAnalysis('style3')">posito</span> iussit <span class="highlight-style style-4" onclick="showAnalysis('style4')">relevare</span> sedili</span>,
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">cui <span class="highlight-style style-5" onclick="showAnalysis('style5')">superiniecit textum rude sedula Baucis</span></span>.
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">inde foco <span class="highlight-style style-6" onclick="showAnalysis('style6')">tepidum cinerem dimovit</span> et ignes</span>
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')"><span class="highlight-style style-7" onclick="showAnalysis('style7')">suscitat hesternos</span> foliisque et cortice sicco</span>
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')"><span class="highlight-style style-8" onclick="showAnalysis('style8')">nutrit</span> et ad flammas <span class="highlight-style style-8" onclick="showAnalysis('style8')">anima producit</span> anili</span>,
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">multifidasque faces ramaliaque arida tecto</span>
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">detulit et minuit parvoque admovit aeno</span>,
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">quodque suus coniunx riguo collegerat horto</span>
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">truncat holus foliis; furca levat ille bicorni</span>
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">sordida terga suis nigro pendentia tigno</span>
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">servatoque diu resecat de tergore partem</span>
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">exiguam sectamque domat ferventibus undis</span>.
    `,

    grammar: {
        phrase1: {
            title: "ergo ubi caelicolae parvos tetigere penates",
            vocab: [
                "<strong>ergo</strong> = therefore (linking word)",
                "<strong>ubi</strong> = when (conjunction introducing a time clause)",
                "<strong>caelicolae</strong> = heaven-dwellers, gods (nominative plural - subject)",
                "<strong>parvos</strong> = small, humble (accusative plural - describing penates)",
                "<strong>tetigere</strong> = touched, reached (perfect tense = tetiger<u>unt</u>)",
                "<strong>penates</strong> = household gods, home (accusative plural - object)"
            ],
            grammar: "This is a 'ubi' time clause meaning 'when'. The subject is 'caelicolae' (the gods). The verb 'tetigere' is perfect tense (alternative form of 'tetigerunt'). The object is 'parvos penates' (the humble home).",
            translation: "therefore when the heaven-dwellers touched the humble dwelling"
        },
        phrase2: {
            title: "summissoque humiles intrarunt vertice postes",
            vocab: [
                "<strong>summisso</strong> = with bowed, lowered (ablative singular)",
                "<strong>-que</strong> = and (attached to 'summisso')",
                "<strong>humiles</strong> = low, humble (accusative plural - describing postes)",
                "<strong>intrarunt</strong> = they entered (perfect tense)",
                "<strong>vertice</strong> = with head (ablative singular - 'ablative of accompaniment')",
                "<strong>postes</strong> = doorposts, doorway (accusative plural - object)"
            ],
            grammar: "'Summisso vertice' is an ablative of manner/accompaniment meaning 'with bowed head'. The verb 'intrarunt' (they entered) has the object 'humiles postes' (the low doorway). The word order emphasises the gods' humility.",
            translation: "and entered the low doorway with bowed heads"
        },
        phrase3: {
            title: "membra senex posito iussit relevare sedili",
            vocab: [
                "<strong>membra</strong> = limbs, body (accusative plural - object of 'relevare')",
                "<strong>senex</strong> = old man (nominative - subject = Philemon)",
                "<strong>posito</strong> = placed, set down (perfect passive participle)",
                "<strong>iussit</strong> = ordered, told (perfect tense)",
                "<strong>relevare</strong> = to rest, to relieve (infinitive)",
                "<strong>sedili</strong> = on a seat, chair (ablative singular)"
            ],
            grammar: "'Iussit' + infinitive is a common construction meaning 'ordered/told (them) to rest'. 'Posito sedili' is an ablative absolute meaning 'with a seat having been placed' = 'on a seat which had been placed'.",
            translation: "the old man ordered them to rest their limbs on a seat which had been placed there"
        },
        phrase4: {
            title: "cui superiniecit textum rude sedula Baucis",
            vocab: [
                "<strong>cui</strong> = over which, onto which (dative referring back to 'sedili')",
                "<strong>superiniecit</strong> = threw over, placed on top (perfect tense)",
                "<strong>textum</strong> = cloth, woven fabric (accusative - object)",
                "<strong>rude</strong> = rough, coarse (accusative - describing textum)",
                "<strong>sedula</strong> = busy, diligent (nominative - describing Baucis)",
                "<strong>Baucis</strong> = Baucis (nominative - subject)"
            ],
            grammar: "'Cui' is a relative pronoun referring back to the seat. Word order: 'sedula Baucis' is placed at the end for emphasis - Ovid highlights Baucis' industrious character. 'Textum rude' shows their poverty (rough cloth, not fine fabric).",
            translation: "over which busy Baucis threw a rough woven cloth"
        },
        phrase5: {
            title: "inde foco tepidum cinerem dimovit et ignes",
            vocab: [
                "<strong>inde</strong> = then, from there (adverb)",
                "<strong>foco</strong> = from the hearth (ablative)",
                "<strong>tepidum</strong> = warm, lukewarm (accusative - describing cinerem)",
                "<strong>cinerem</strong> = ash (accusative - object)",
                "<strong>dimovit</strong> = moved aside, pushed away (perfect tense)",
                "<strong>et</strong> = and",
                "<strong>ignes</strong> = fires (accusative - object)"
            ],
            grammar: "'Inde' marks a transition to Baucis' next action. The verb 'dimovit' has two objects: 'tepidum cinerem' (warm ash) and 'ignes' (fires). She's clearing yesterday's ash to revive the fire.",
            translation: "then she moved aside the warm ash from the hearth and the fires"
        },
        phrase6: {
            title: "suscitat hesternos foliisque et cortice sicco",
            vocab: [
                "<strong>suscitat</strong> = revives, stirs up (present tense)",
                "<strong>hesternos</strong> = yesterday's, from yesterday (accusative plural)",
                "<strong>foliis</strong> = with leaves (ablative plural)",
                "<strong>-que</strong> = and",
                "<strong>et</strong> = and",
                "<strong>cortice</strong> = with bark (ablative singular)",
                "<strong>sicco</strong> = dry (ablative - describing cortice)"
            ],
            grammar: "Ovid switches to present tense ('historic present') to make the action more vivid. 'Foliis et cortice sicco' are ablatives of means/instrument - she uses leaves and bark to feed the fire. Note 'hesternos' (yesterday's fires) - they keep the fire burning overnight.",
            translation: "revives yesterday's fires with leaves and dry bark"
        },
        phrase7: {
            title: "nutrit et ad flammas anima producit anili",
            vocab: [
                "<strong>nutrit</strong> = nourishes, feeds (present tense)",
                "<strong>et</strong> = and",
                "<strong>ad</strong> = to, towards (+ accusative)",
                "<strong>flammas</strong> = flames (accusative)",
                "<strong>anima</strong> = with breath (ablative)",
                "<strong>producit</strong> = brings forth, leads out (present tense)",
                "<strong>anili</strong> = elderly, old (ablative - describing anima)"
            ],
            grammar: "Two present tense verbs ('nutrit' and 'producit') continue the vivid description. 'Anima anili' is ablative of means - she blows on the fire with her old breath. This touching detail emphasises her age and effort.",
            translation: "and nourishes them and brings them to flame with her elderly breath"
        },
        phrase8: {
            title: "multifidasque faces ramaliaque arida tecto",
            vocab: [
                "<strong>multifidas</strong> = split, divided into many pieces (accusative plural)",
                "<strong>-que</strong> = and",
                "<strong>faces</strong> = kindling, torches (accusative plural - object)",
                "<strong>ramalia</strong> = twigs, small branches (accusative plural - object)",
                "<strong>-que</strong> = and",
                "<strong>arida</strong> = dry (accusative plural - describing ramalia)",
                "<strong>tecto</strong> = from the roof (ablative)"
            ],
            grammar: "List of objects (faces and ramalia) connected with '-que' (and). 'Tecto' is ablative of separation/place from where - she takes them down from the roof where they've been stored. The compound adjective 'multifidas' shows Ovid's poetic style.",
            translation: "and split kindling and dry twigs from the roof"
        },
        phrase9: {
            title: "detulit et minuit parvoque admovit aeno",
            vocab: [
                "<strong>detulit</strong> = brought down, carried down (perfect tense)",
                "<strong>et</strong> = and",
                "<strong>minuit</strong> = broke up, made smaller (perfect tense)",
                "<strong>parvo</strong> = small (ablative - describing aeno)",
                "<strong>-que</strong> = and",
                "<strong>admovit</strong> = moved towards, pushed under (perfect tense)",
                "<strong>aeno</strong> = bronze pot, cauldron (ablative)"
            ],
            grammar: "Three perfect tense verbs show a sequence of actions: she brought down (detulit), broke up (minuit), and pushed under (admovit). 'Parvo aeno' (dative or ablative) emphasises their poverty - even the pot is small.",
            translation: "brought down and broke up and pushed under the small bronze pot"
        },
        phrase10: {
            title: "quodque suus coniunx riguo collegerat horto",
            vocab: [
                "<strong>quod</strong> = which (accusative neuter - object)",
                "<strong>-que</strong> = and",
                "<strong>suus</strong> = her (nominative masculine - describing coniunx)",
                "<strong>coniunx</strong> = husband (nominative - subject)",
                "<strong>riguo</strong> = well-watered (ablative - describing horto)",
                "<strong>collegerat</strong> = had gathered (pluperfect tense)",
                "<strong>horto</strong> = from the garden (ablative)"
            ],
            grammar: "Relative clause with 'quod' referring forward to 'holus' (vegetables). 'Collegerat' is pluperfect (had gathered) - he gathered them before she started preparing. 'Riguo horto' (ablative of place from where) shows they have a productive garden.",
            translation: "and which her husband had gathered from the well-watered garden"
        },
        phrase11: {
            title: "truncat holus foliis; furca levat ille bicorni",
            vocab: [
                "<strong>truncat</strong> = cuts off, strips (present tense)",
                "<strong>holus</strong> = vegetables, greens (accusative - object)",
                "<strong>foliis</strong> = from leaves, of leaves (ablative)",
                "<strong>furca</strong> = with a fork (ablative)",
                "<strong>levat</strong> = lifts, raises (present tense)",
                "<strong>ille</strong> = he, that one (nominative = Philemon)",
                "<strong>bicorni</strong> = two-pronged (ablative - describing furca)"
            ],
            grammar: "Semicolon marks a shift from Baucis to Philemon. 'Truncat' (she strips) and 'levat' (he lifts) are both present tense. 'Ille' (he) contrasts with the implied 'she' of the previous verbs. 'Furca bicorni' is ablative of instrument.",
            translation: "she strips the vegetables from their leaves; he lifts with a two-pronged fork"
        },
        phrase12: {
            title: "sordida terga suis nigro pendentia tigno",
            vocab: [
                "<strong>sordida</strong> = dirty, grimy (accusative plural - describing terga)",
                "<strong>terga</strong> = back, back meat (accusative plural - object)",
                "<strong>suis</strong> = of a pig (genitive - describing terga)",
                "<strong>nigro</strong> = black, dark (ablative - describing tigno)",
                "<strong>pendentia</strong> = hanging (present participle - describing terga)",
                "<strong>tigno</strong> = from a beam, rafter (ablative)"
            ],
            grammar: "'Pendentia' is a present participle agreeing with 'terga'. Word order: 'sordida terga suis' (dirty pig's back) is the object that's 'pendentia nigro tigno' (hanging from the black beam). The smoke-blackened beam shows this is their only preserved meat.",
            translation: "the dirty back of a pig hanging from the black beam"
        },
        phrase13: {
            title: "servatoque diu resecat de tergore partem",
            vocab: [
                "<strong>servato</strong> = saved, preserved (perfect passive participle)",
                "<strong>-que</strong> = and",
                "<strong>diu</strong> = for a long time (adverb)",
                "<strong>resecat</strong> = cuts off (present tense)",
                "<strong>de</strong> = from (+ ablative)",
                "<strong>tergore</strong> = from the back (ablative)",
                "<strong>partem</strong> = part, portion (accusative - object)"
            ],
            grammar: "'Servato diu' is an ablative absolute meaning 'having been saved for a long time'. This emphasises how precious this meat is - it's been saved for a special occasion. 'Resecat' (present tense) continues the vivid description.",
            translation: "and cuts off a part from the long-saved back"
        },
        phrase14: {
            title: "exiguam sectamque domat ferventibus undis",
            vocab: [
                "<strong>exiguam</strong> = small, tiny (accusative - describing partem)",
                "<strong>sectam</strong> = cut, sliced (perfect passive participle - describing partem)",
                "<strong>-que</strong> = and",
                "<strong>domat</strong> = tames, softens (present tense)",
                "<strong>ferventibus</strong> = boiling (ablative plural - describing undis)",
                "<strong>undis</strong> = in waters, waves (ablative)"
            ],
            grammar: "'Exiguam' emphasises the tiny portion - they're sharing what little they have. 'Sectam' (perfect participle) describes the meat as 'having been cut'. 'Ferventibus undis' is ablative of means - he softens it in boiling water. The verb 'domat' (tames/softens) is usually used for animals!",
            translation: "small and cut, and softens it in boiling water"
        }
    },

    style: {
        style1: {
            title: "caelicolae",
            device: "Elevated Vocabulary (Compound Word)",
            effect: "Instead of just saying 'dei' (gods), Ovid uses the poetic compound 'caelicolae' (heaven-dwellers). This elevates the tone and reminds us these aren't ordinary guests - they're divine beings in disguise. The contrast between 'caelicolae' (heaven-dwellers) and 'parvos penates' (humble home) is striking."
        },
        style2: {
            title: "summissoque humiles intrarunt vertice postes",
            device: "Word Order (Interlaced/Hyperbaton)",
            effect: "Look at the word order: 'summisso...vertice' (with bowed...head) wraps around the middle of the line, creating a visual 'bowing' in the Latin itself. The adjective 'humiles' (low) is placed next to 'intrarunt' (entered), emphasising the action of stooping to enter."
        },
        style3: {
            title: "posito... sedili",
            device: "Separation (Hyperbaton)",
            effect: "The participle 'posito' (placed) is separated from 'sedili' (seat) by several words. This creates suspense and mirrors the action - the seat is being described before we know what was done with it."
        },
        style4: {
            title: "relevare",
            device: "Verb Choice",
            effect: "'Relevare' literally means 'to lift up' or 'lighten', but here means 'to rest'. This suggests relief from their journey's burden - very appropriate for tired travellers."
        },
        style5: {
            title: "superiniecit textum rude sedula Baucis",
            device: "Word Order (Framing)",
            effect: "The verb 'superiniecit' (threw over) comes first, then the object 'textum rude' (rough cloth), and finally the subject 'sedula Baucis' (busy Baucis) at the very end. This puts emphasis on Baucis and her character trait 'sedula' (busy/diligent). Ovid is characterising her through word placement."
        },
        style6: {
            title: "tepidum cinerem dimovit",
            device: "Vivid Description",
            effect: "The adjective 'tepidum' (warm) is a small but precise detail - the ash is still warm from yesterday's fire. This realism makes the scene feel authentic and domestic."
        },
        style7: {
            title: "suscitat hesternos",
            device: "Historic Present Tense",
            effect: "Ovid switches from perfect tense ('dimovit') to present tense ('suscitat'). This 'historic present' makes the action feel immediate and happening now, drawing us into the scene."
        },
        style8: {
            title: "nutrit... producit",
            device: "Personification / Metaphor",
            effect: "The fire is treated like a living thing that needs to be 'nourished' (nutrit). The verb 'producit' (brings forth/leads out) suggests she's coaxing the flames out, almost like leading a child. The addition of 'anima anili' (with elderly breath) is touching - we picture this old woman blowing gently on the embers."
        }
    },

    vocabulary: [
        { latin: "caelicolae", english: "heaven-dwellers, gods" },
        { latin: "penates", english: "household gods, home" },
        { latin: "humiles", english: "low, humble" },
        { latin: "postes", english: "doorposts, doorway" },
        { latin: "membra", english: "limbs, body" },
        { latin: "sedile", english: "seat, chair" },
        { latin: "textum", english: "cloth, woven fabric" },
        { latin: "rude", english: "rough, coarse" },
        { latin: "sedulus", english: "busy, diligent" },
        { latin: "focus", english: "hearth, fireplace" },
        { latin: "cinis", english: "ash, ashes" },
        { latin: "ignis", english: "fire" },
        { latin: "hesternus", english: "yesterday's, from yesterday" },
        { latin: "folium", english: "leaf, leaves" },
        { latin: "cortex", english: "bark, rind" },
        { latin: "nutrio", english: "to nourish, feed" },
        { latin: "flamma", english: "flame" },
        { latin: "anima", english: "breath, soul" },
        { latin: "anilis", english: "elderly, of an old woman" },
        { latin: "fax", english: "torch, kindling" },
        { latin: "ramale", english: "twig, small branch" },
        { latin: "aridus", english: "dry, parched" },
        { latin: "tectum", english: "roof, ceiling" },
        { latin: "minuo", english: "to break up, make smaller" },
        { latin: "aēnum", english: "bronze pot, cauldron" },
        { latin: "coniunx", english: "spouse, husband/wife" },
        { latin: "riguus", english: "well-watered, irrigated" },
        { latin: "hortus", english: "garden" },
        { latin: "holus", english: "vegetables, greens" },
        { latin: "furca", english: "fork, pitchfork" },
        { latin: "bicornis", english: "two-pronged, two-horned" },
        { latin: "sordidus", english: "dirty, grimy" },
        { latin: "tergum", english: "back, hide" },
        { latin: "sus", english: "pig, swine" },
        { latin: "tignum", english: "beam, rafter" },
        { latin: "reseco", english: "to cut off" },
        { latin: "exiguus", english: "small, tiny, scanty" },
        { latin: "domo", english: "to tame, soften" },
        { latin: "fervens", english: "boiling, seething" },
        { latin: "unda", english: "wave, water" }
    ],

    grammarPoints: [
        {
            title: "Perfect Tense with Alternative Endings",
            explanation: "Ovid uses 'tetigere' instead of the regular 'tetigerunt' (they touched). This shortened form is common in poetry. Other examples: 'intrarunt' = 'intraverunt' (they entered).",
            examples: [
                "tetigere = tetigerunt (they touched)",
                "intrarunt = intraverunt (they entered)",
                "collegerat = collegaverat (he had gathered)"
            ]
        },
        {
            title: "Ablative Absolute",
            explanation: "An ablative absolute is a phrase using the ablative case that stands apart from the rest of the sentence. It often describes circumstances. Look for: <strong>noun/pronoun + participle</strong> both in ablative case.",
            examples: [
                "<strong>posito sedili</strong> = 'with a seat having been placed' → 'on a seat which had been placed'",
                "<strong>summisso vertice</strong> = 'with bowed head'",
                "<strong>servato diu</strong> = 'having been saved for a long time'"
            ]
        },
        {
            title: "Historic Present Tense",
            explanation: "Ovid switches from past tense (perfect) to present tense to make the action feel more immediate and vivid. This is called the 'historic present' because it describes past events as if they're happening now.",
            examples: [
                "<strong>dimovit</strong> (perfect) → <strong>suscitat, nutrit, producit</strong> (present)",
                "This creates a cinematic effect, like watching the scene unfold in real time"
            ]
        },
        {
            title: "Accusative + Infinitive (Indirect Command)",
            explanation: "After verbs of commanding or ordering, Latin uses <strong>accusative + infinitive</strong>. The person commanded is in the accusative case, and what they're told to do is an infinitive.",
            examples: [
                "<strong>iussit (eos) relevare membra</strong>",
                "= 'ordered (them) to rest their limbs'",
                "The accusative '(eos)' is understood from context"
            ]
        },
        {
            title: "Compound Verbs with Prefixes",
            explanation: "Latin often adds prefixes to simple verbs to create more specific meanings. Understanding the prefix helps you translate accurately.",
            examples: [
                "<strong>super-iniecit</strong> = threw OVER (super = over, above)",
                "<strong>di-movit</strong> = moved APART/ASIDE (dis = apart)",
                "<strong>ad-movit</strong> = moved TOWARDS (ad = to, towards)",
                "<strong>de-tulit</strong> = brought DOWN (de = down from)",
                "<strong>re-secat</strong> = cut BACK/OFF (re = back)"
            ]
        }
    ],

    styleExamples: [
        {
            title: "Word Order Creates Meaning",
            latin: "summissoque humiles intrarunt vertice postes",
            explanation: "<strong>What it does:</strong> The words 'summisso...vertice' (with bowed...head) are separated, wrapping around the line.",
            effect: "<strong>Why it matters:</strong> This creates a visual representation of bowing in the word order itself! The words physically 'bow' around the centre of the line. This is called <strong>hyperbaton</strong> - deliberate separation of words that belong together.",
            highlight: "<strong>summisso</strong>que humiles intrarunt <strong>vertice</strong> postes"
        },
        {
            title: "Interlocking Word Order (ABAB pattern)",
            latin: "cui superiniecit textum rude sedula Baucis",
            explanation: "<strong>What it does:</strong> Look at the pattern: VERB - OBJECT - ADJECTIVE - SUBJECT<br>superiniecit (verb) - textum (object) - rude (adjective describing object) - sedula (adjective) - Baucis (subject)",
            effect: "<strong>Why it matters:</strong> Placing 'sedula Baucis' at the very end gives emphasis to Baucis' character. We're meant to notice her busy, diligent nature. This interlocking pattern is typical of Latin poetry and creates a pleasing rhythm.",
            highlight: "<strong>superiniecit</strong> (V) <strong>textum</strong> (O) <strong>rude</strong> (adj) <strong>sedula Baucis</strong> (S)"
        },
        {
            title: "Realistic, Specific Details",
            latin: "tepidum cinerem... anima anili... nigro tigno",
            explanation: "<strong>What it does:</strong> Ovid includes tiny, precise details: 'tepidum' (warm) ash, 'anima anili' (elderly breath), 'nigro tigno' (black beam).",
            effect: "<strong>Why it matters:</strong> These details make the scene feel real and authentic. We can picture the scene: the ash still warm from yesterday, the old woman blowing gently, the smoke-blackened rafters. This is called <strong>realism</strong> or <strong>vivid description</strong> - Ovid wants us to see, hear, and feel this humble cottage.",
            highlight: "<strong>tepidum</strong> cinerem / <strong>anima anili</strong> / <strong>nigro</strong> tigno"
        },
        {
            title: "Lists and Accumulation (-que ... -que ... et)",
            latin: "foliisque et cortice sicco... multifidasque faces ramaliaque arida",
            explanation: "<strong>What it does:</strong> Ovid piles up items connected with '-que' (and) and 'et' (and): leaves AND bark, kindling AND twigs.",
            effect: "<strong>Why it matters:</strong> This creates a sense of abundance and busy activity. Baucis is gathering lots of different materials to feed the fire. The technique is called <strong>polysyndeton</strong> - using multiple 'ands'. It makes the actions feel breathless and energetic.",
            highlight: "foliis<strong>que</strong> <strong>et</strong> cortice / multifidas<strong>que</strong> faces ramalia<strong>que</strong>"
        },
        {
            title: "Personification of Fire",
            latin: "suscitat hesternos... nutrit... producit ad flammas",
            explanation: "<strong>What it does:</strong> The fire is described with verbs usually used for living things: 'suscitat' (revives), 'nutrit' (nourishes), 'producit' (brings forth).",
            effect: "<strong>Why it matters:</strong> The fire becomes almost like a sleeping animal that Baucis is waking up and feeding. This is <strong>personification</strong> - giving human/living qualities to non-living things. It makes the hearth feel alive and central to the home, which it was in Roman culture.",
            highlight: "<strong>suscitat</strong> (revives) <strong>nutrit</strong> (nourishes) <strong>producit</strong> (brings forth)"
        },
        {
            title: "Contrast Through Juxtaposition",
            latin: "caelicolae parvos... penates / exiguam... parvo aeno",
            explanation: "<strong>What it does:</strong> Ovid places words side by side that contrast: 'caelicolae' (heaven-dwellers) next to 'parvos penates' (tiny home), 'exiguam partem' (tiny portion) with 'parvo aeno' (small pot).",
            effect: "<strong>Why it matters:</strong> The contrast between the divine guests and the humble home emphasises the couple's poverty - but also their generosity. They're giving everything they have. The repeated 'small' words (parvos, exiguam, parvo) stress how little they own, making their hospitality even more impressive.",
            highlight: "<strong>caelicolae</strong> (gods) vs <strong>parvos</strong> (small) / <strong>exiguam</strong> (tiny) <strong>parvo</strong> (small)"
        },
        {
            title: "Compound Adjectives",
            latin: "multifidas... bicorni",
            explanation: "<strong>What it does:</strong> Ovid creates compound adjectives by joining two words: 'multi-fidas' (much-split) and 'bi-corni' (two-horned/pronged).",
            effect: "<strong>Why it matters:</strong> Compound adjectives are a feature of elevated poetic style. They're more elegant than saying 'split into many pieces' or 'with two prongs'. This is common in epic poetry and shows Ovid's poetic craft even when describing humble objects.",
            highlight: "<strong>multi-fidas</strong> (many-split) / <strong>bi-corni</strong> (two-pronged)"
        },
        {
            title: "Enjambment (Running Over Lines)",
            latin: "multifidasque faces ramaliaque arida tecto / detulit",
            explanation: "<strong>What it does:</strong> The sense runs over from one line to the next without a pause. The object 'faces ramaliaque' is in one line, but the verb 'detulit' (brought down) is in the next.",
            effect: "<strong>Why it matters:</strong> This creates a sense of continuous motion and energy. Baucis' actions flow from one to another without stopping. <strong>Enjambment</strong> keeps the momentum going and mirrors her busy activity.",
            highlight: "faces ramaliaque arida tecto <strong>↓</strong><br><strong>detulit</strong> et minuit"
        }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadTextSection();
    loadVocabularySection();
    loadGrammarSection();
    loadStyleSection();
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

// Text Section
function loadTextSection() {
    const latinTextEl = document.getElementById('latinText');
    if (latinTextEl) {
        latinTextEl.innerHTML = lessonData.latinText;
    }
    
    const fullTranslationTextEl = document.getElementById('fullTranslationText');
    if (fullTranslationTextEl) {
        fullTranslationTextEl.textContent = lessonData.fullTranslation;
    }

    const analysisPanel = document.getElementById('analysisPanel');
    if (analysisPanel) {
        analysisPanel.innerHTML = '<div class="default-message" id="defaultMessage">Click any coloured phrase to see vocabulary and grammar</div>';
        
        for (const [id, data] of Object.entries(lessonData.grammar)) {
            const card = createGrammarCard(id, data);
            analysisPanel.appendChild(card);
        }
        for (const [id, data] of Object.entries(lessonData.style)) {
            const card = createStyleCard(id, data);
            analysisPanel.appendChild(card);
        }
    }
}

let currentAnalysis = null;
let currentMode = 'grammar';

function setMode(mode) {
    currentMode = mode;
    
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    const latinText = document.getElementById('latinText');
    if (mode === 'style') {
        latinText.classList.add('mode-style');
    } else {
        latinText.classList.remove('mode-style');
    }
    
    if (currentAnalysis) {
        currentAnalysis.classList.remove('active');
        currentAnalysis = null;
    }
    const defaultMsg = document.getElementById('defaultMessage');
    if (defaultMsg) defaultMsg.style.display = 'block';
}

function showAnalysis(phraseId) {
    if (phraseId.startsWith('style') && currentMode !== 'style') {
        return;
    }
    if (phraseId.startsWith('phrase') && currentMode === 'style') {
        return;
    }
    
    const defaultMsg = document.getElementById('defaultMessage');
    if (defaultMsg) defaultMsg.style.display = 'none';
    
    if (currentAnalysis) {
        currentAnalysis.classList.remove('active');
    }
    
    const card = document.getElementById(phraseId);
    if (card) {
        card.classList.add('active');
        currentAnalysis = card;
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function createGrammarCard(id, data) {
    const card = document.createElement('div');
    card.className = 'analysis-card';
    card.id = id;
    
    let vocabHTML = data.vocab.map(v => `<p>• ${v}</p>`).join('');
    
    card.innerHTML = `
        <div class="analysis-badge">Grammar & Vocabulary</div>
        <h4>${data.title}</h4>
        <div class="vocab-list">${vocabHTML}</div>
        <p><strong>Grammar:</strong> ${data.grammar}</p>
        <div class="translation-section">
            <button class="reveal-translation-btn" onclick="revealTranslation('${id}')">Reveal Translation</button>
            <div class="translation-text" id="${id}-translation">
                <strong>Translation:</strong> "${data.translation}"
            </div>
        </div>
    `;
    
    return card;
}

function createStyleCard(id, data) {
    const card = document.createElement('div');
    card.className = 'analysis-card';
    card.id = id;
    
    card.innerHTML = `
        <div class="analysis-badge">Literary Device</div>
        <h4>${data.title}</h4>
        <p><strong>Device:</strong> ${data.device}</p>
        <p><strong>Effect:</strong> ${data.effect}</p>
    `;
    
    return card;
}

function revealTranslation(cardId) {
    const translationEl = document.getElementById(cardId + '-translation');
    const button = event.currentTarget;
    
    if (translationEl && !translationEl.classList.contains('visible')) {
        translationEl.classList.add('visible');
        button.textContent = '✓ Translation Revealed';
        button.classList.add('revealed');
    }
}

function toggleFullTranslation() {
    const fullTranslation = document.getElementById('fullTranslation');
    const button = event.currentTarget;
    
    if (fullTranslation.classList.contains('visible')) {
        fullTranslation.classList.remove('visible');
        button.textContent = 'Show Translation';
    } else {
        fullTranslation.classList.add('visible');
        button.textContent = 'Hide Translation';
    }
}

function resetView() {
    if (currentAnalysis) {
        currentAnalysis.classList.remove('active');
        currentAnalysis = null;
    }
    
    const defaultMsg = document.getElementById('defaultMessage');
    if (defaultMsg) defaultMsg.style.display = 'block';
    
    const fullTranslation = document.getElementById('fullTranslation');
    if (fullTranslation) fullTranslation.classList.remove('visible');
    
    const buttons = document.querySelectorAll('.btn-group .btn');
    if (buttons[0]) buttons[0].textContent = 'Show Translation';
}

// Vocabulary Section
function loadVocabularySection() {
    const vocabGrid = document.getElementById('vocabGrid');
    if (!vocabGrid) return;
    
    lessonData.vocabulary.forEach(item => {
        const vocabItem = document.createElement('div');
        vocabItem.className = 'vocab-item';
        vocabItem.innerHTML = `
            <div class="vocab-latin">${item.latin}</div>
            <div class="vocab-english">${item.english}</div>
        `;
        vocabGrid.appendChild(vocabItem);
    });
}

// Grammar Section
function loadGrammarSection() {
    const grammarPoints = document.getElementById('grammarPoints');
    if (!grammarPoints) return;
    
    lessonData.grammarPoints.forEach(point => {
        const pointDiv = document.createElement('div');
        pointDiv.className = 'style-example';
        pointDiv.innerHTML = `
            <h4>${point.title}</h4>
            <p>${point.explanation}</p>
            ${point.examples.map(ex => `<p class="latin">• ${ex}</p>`).join('')}
        `;
        grammarPoints.appendChild(pointDiv);
    });
}

// Style Section
function loadStyleSection() {
    const styleExamples = document.getElementById('styleExamples');
    if (!styleExamples) return;
    
    lessonData.styleExamples.forEach(example => {
        const exampleDiv = document.createElement('div');
        exampleDiv.className = 'style-example';
        exampleDiv.innerHTML = `
            <h4>${example.title}</h4>
            <p class="latin">${example.latin}</p>
            <p>${example.explanation}</p>
            <p><strong>${example.effect}</strong></p>
            ${example.highlight ? `<p class="latin" style="margin-top: 0.75rem; padding: 0.5rem; background: #fff; border-radius: 4px;">${example.highlight}</p>` : ''}
        `;
        styleExamples.appendChild(exampleDiv);
    });
}
