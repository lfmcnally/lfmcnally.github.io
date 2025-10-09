// Baucis and Philemon Data File

const lessonData = {
    // Full text with clickable lines for vocab/grammar
    fullText: [
        { 
            number: 637, 
            text: '<span class="phrase phrase-1" onclick="showLineAnalysis(\'line1\')">ergo ubi caelicolae parvos tetigere penates</span>',
            vocab: [
                "<strong>ergo</strong> = therefore",
                "<strong>ubi</strong> = when",
                "<strong>caelicolae</strong> = heaven-dwellers, gods",
                "<strong>parvos</strong> = small, humble",
                "<strong>tetigere</strong> = touched (perfect = tetigerunt)",
                "<strong>penates</strong> = household gods, home"
            ],
            grammar: "'Ubi' introduces a time clause. 'Tetigere' is perfect tense.",
            translation: "therefore when the heaven-dwellers touched the humble dwelling"
        },
        { 
            number: 638, 
            text: '<span class="phrase phrase-2" onclick="showLineAnalysis(\'line2\')">summissoque humiles intrarunt vertice postes,</span>',
            vocab: [
                "<strong>summisso</strong> = with bowed (ablative)",
                "<strong>-que</strong> = and",
                "<strong>humiles</strong> = low (accusative plural)",
                "<strong>intrarunt</strong> = they entered",
                "<strong>vertice</strong> = with head (ablative)",
                "<strong>postes</strong> = doorposts (accusative)"
            ],
            grammar: "'Summisso vertice' = ablative of manner. Word order: 'summisso...vertice' wraps around.",
            translation: "and entered the low doorway with bowed heads"
        },
        { 
            number: 639, 
            text: '<span class="phrase phrase-3" onclick="showLineAnalysis(\'line3\')">membra senex posito iussit relevare sedili,</span>',
            vocab: [
                "<strong>membra</strong> = limbs (accusative)",
                "<strong>senex</strong> = old man (nominative)",
                "<strong>posito</strong> = placed (perfect passive participle)",
                "<strong>iussit</strong> = ordered (perfect)",
                "<strong>relevare</strong> = to rest (infinitive)",
                "<strong>sedili</strong> = on a seat (ablative)"
            ],
            grammar: "'Iussit' + infinitive = ordered to rest. 'Posito sedili' = ablative absolute.",
            translation: "the old man ordered them to rest their limbs on a seat which had been placed"
        },
        { 
            number: 640, 
            text: '<span class="phrase phrase-4" onclick="showLineAnalysis(\'line4\')">cui superiniecit textum rude sedula Baucis.</span>',
            vocab: [
                "<strong>cui</strong> = over which (dative)",
                "<strong>superiniecit</strong> = threw over (perfect)",
                "<strong>textum</strong> = cloth (accusative)",
                "<strong>rude</strong> = rough (accusative)",
                "<strong>sedula</strong> = busy (nominative)",
                "<strong>Baucis</strong> = Baucis"
            ],
            grammar: "'Sedula Baucis' at end for emphasis - highlighting her character.",
            translation: "over which busy Baucis threw a rough cloth"
        },
        { 
            number: 641, 
            text: '<span class="phrase phrase-5" onclick="showLineAnalysis(\'line5\')">inde foco tepidum cinerem dimovit et ignes</span>',
            vocab: [
                "<strong>inde</strong> = then",
                "<strong>foco</strong> = from the hearth (ablative)",
                "<strong>tepidum</strong> = warm (accusative)",
                "<strong>cinerem</strong> = ash (accusative)",
                "<strong>dimovit</strong> = moved aside (perfect)",
                "<strong>ignes</strong> = fires (accusative)"
            ],
            grammar: "'Tepidum' = realistic detail. Ash still warm from yesterday.",
            translation: "then she moved aside the warm ash from the hearth and the fires"
        },
        { 
            number: 642, 
            text: '<span class="phrase phrase-6" onclick="showLineAnalysis(\'line6\')">suscitat hesternos foliisque et cortice sicco</span>',
            vocab: [
                "<strong>suscitat</strong> = revives (PRESENT tense - historic present)",
                "<strong>hesternos</strong> = yesterday's (accusative)",
                "<strong>foliis</strong> = with leaves (ablative)",
                "<strong>-que et</strong> = and...and",
                "<strong>cortice sicco</strong> = with dry bark (ablative)"
            ],
            grammar: "Switches to present tense = 'historic present'. Makes action vivid.",
            translation: "revives yesterday's fires with leaves and dry bark"
        },
        { 
            number: 643, 
            text: '<span class="phrase phrase-7" onclick="showLineAnalysis(\'line7\')">nutrit et ad flammas anima producit anili,</span>',
            vocab: [
                "<strong>nutrit</strong> = nourishes (present)",
                "<strong>et</strong> = and",
                "<strong>ad flammas</strong> = to flames",
                "<strong>anima</strong> = with breath (ablative)",
                "<strong>producit</strong> = brings forth (present)",
                "<strong>anili</strong> = elderly (ablative)"
            ],
            grammar: "Fire personified - 'nourished' like living thing. 'Anima anili' = touching detail.",
            translation: "and nourishes them and brings them to flame with her elderly breath"
        },
        { 
            number: 644, 
            text: '<span class="phrase phrase-8" onclick="showLineAnalysis(\'line8\')">multifidasque faces ramaliaque arida tecto</span>',
            vocab: [
                "<strong>multifidas</strong> = split into many (accusative - compound word)",
                "<strong>-que</strong> = and",
                "<strong>faces</strong> = kindling (accusative)",
                "<strong>ramalia</strong> = twigs (accusative)",
                "<strong>-que</strong> = and",
                "<strong>arida</strong> = dry (accusative)",
                "<strong>tecto</strong> = from roof (ablative)"
            ],
            grammar: "Polysyndeton (-que...que). Compound word 'multifidas' = elevated style.",
            translation: "and split kindling and dry twigs from the roof"
        },
        { 
            number: 645, 
            text: '<span class="phrase phrase-9" onclick="showLineAnalysis(\'line9\')">detulit et minuit parvoque admovit aeno,</span>',
            vocab: [
                "<strong>detulit</strong> = brought down (perfect)",
                "<strong>et</strong> = and",
                "<strong>minuit</strong> = broke up (perfect)",
                "<strong>parvo</strong> = small (ablative)",
                "<strong>-que</strong> = and",
                "<strong>admovit</strong> = pushed under (perfect)",
                "<strong>aeno</strong> = bronze pot (ablative)"
            ],
            grammar: "Three verbs in sequence. 'Parvo aeno' = poverty marker.",
            translation: "brought down and broke up and pushed under the small bronze pot"
        },
        { 
            number: 646, 
            text: '<span class="phrase phrase-10" onclick="showLineAnalysis(\'line10\')">quodque suus coniunx riguo collegerat horto</span>',
            vocab: [
                "<strong>quod</strong> = which (accusative)",
                "<strong>-que</strong> = and",
                "<strong>suus coniunx</strong> = her husband",
                "<strong>riguo</strong> = well-watered (ablative)",
                "<strong>collegerat</strong> = had gathered (pluperfect)",
                "<strong>horto</strong> = from garden (ablative)"
            ],
            grammar: "Relative clause. Pluperfect = he had gathered earlier. 'Riguo' = positive detail.",
            translation: "and which her husband had gathered from the well-watered garden"
        },
        { 
            number: 647, 
            text: '<span class="phrase phrase-11" onclick="showLineAnalysis(\'line11\')">truncat holus foliis; furca levat ille bicorni</span>',
            vocab: [
                "<strong>truncat</strong> = strips (present)",
                "<strong>holus</strong> = vegetables (accusative)",
                "<strong>foliis</strong> = from leaves (ablative)",
                "<strong>furca</strong> = with fork (ablative)",
                "<strong>levat</strong> = lifts (present)",
                "<strong>ille</strong> = he (= Philemon)",
                "<strong>bicorni</strong> = two-pronged (compound word)"
            ],
            grammar: "Semicolon = shift to Philemon. 'Bicorni' = compound adjective.",
            translation: "she strips the vegetables; he lifts with a two-pronged fork"
        },
        { 
            number: 648, 
            text: '<span class="phrase phrase-12" onclick="showLineAnalysis(\'line12\')">sordida terga suis nigro pendentia tigno</span>',
            vocab: [
                "<strong>sordida</strong> = dirty (accusative)",
                "<strong>terga</strong> = back (accusative)",
                "<strong>suis</strong> = of a pig (genitive)",
                "<strong>nigro</strong> = black (ablative)",
                "<strong>pendentia</strong> = hanging (present participle)",
                "<strong>tigno</strong> = from beam (ablative)"
            ],
            grammar: "'Sordida' and 'nigro' = poverty details. Smoke-blackened meat and beam.",
            translation: "the dirty back of a pig hanging from the black beam"
        },
        { 
            number: 649, 
            text: '<span class="phrase phrase-13" onclick="showLineAnalysis(\'line13\')">servatoque diu resecat de tergore partem</span>',
            vocab: [
                "<strong>servato</strong> = saved (perfect passive participle)",
                "<strong>-que</strong> = and",
                "<strong>diu</strong> = for a long time",
                "<strong>resecat</strong> = cuts off (present)",
                "<strong>de tergore</strong> = from the back",
                "<strong>partem</strong> = part (accusative)"
            ],
            grammar: "'Servato diu' = ablative absolute. Emphasises how precious this meat is.",
            translation: "and cuts off a part from the long-saved back"
        },
        { 
            number: 650, 
            text: '<span class="phrase phrase-14" onclick="showLineAnalysis(\'line14\')">exiguam sectamque domat ferventibus undis.</span>',
            vocab: [
                "<strong>exiguam</strong> = tiny (accusative)",
                "<strong>sectam</strong> = cut (perfect participle)",
                "<strong>-que</strong> = and",
                "<strong>domat</strong> = tames/softens (present)",
                "<strong>ferventibus</strong> = boiling (ablative)",
                "<strong>undis</strong> = in waters (ablative)"
            ],
            grammar: "'Exiguam' = emphasis on tiny size. 'Domat' = humorous (usually 'tame a horse').",
            translation: "small and cut, and softens it in boiling water"
        }
    ],

    // Teaching sections with style features
    sections: {
        section1: {
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
                    whatIsIt: "Instead of 'dei' (gods), Ovid uses <strong>caelicolae</strong> - literally 'heaven-dwellers' (caeli = heaven, colae = dwellers).",
                    whyMatters: "This elevated, poetic vocabulary reminds us these aren't ordinary guests - they're divine beings in disguise. The contrast with 'parvos penates' (humble home) is striking."
                },
                {
                    id: "contrast",
                    title: "Contrasting Adjectives",
                    highlight: ["s1-caelicolae", "s1-parvos", "s1-penates", "s1-humiles"],
                    whatIsIt: "Pairing of opposites: <strong>caelicolae</strong> (heaven-dwellers) with <strong>parvos penates</strong> (small home), and <strong>humiles postes</strong> (low doorway). This is <strong>juxtaposition</strong>.",
                    whyMatters: "The contrast emphasises their poverty and makes their hospitality impressive. Divine beings are literally stooping to enter this humble dwelling."
                },
                {
                    id: "hyperbaton",
                    title: "Word Order: Wrapping Around",
                    highlight: ["s1-summisso", "s1-vertice"],
                    whatIsIt: "'Summisso...vertice' (with bowed...head) are separated and wrap around the line. This is <strong>hyperbaton</strong>.",
                    whyMatters: "The word order creates a visual 'bowing' in the Latin! The words physically bow around the centre, matching the action."
                },
                {
                    id: "realistic-detail",
                    title: "Realistic Detail: 'tepidum'",
                    highlight: ["s1-tepidum"],
                    whatIsIt: "'Tepidum' = 'warm'. A tiny, specific detail about the ash.",
                    whyMatters: "Makes the scene feel real. The ash is still warm from yesterday - we can almost feel it! These aren't generic poor people - they're real individuals."
                }
            ]
        },

        section2: {
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
                    whatIsIt: "Switches from perfect to present tense: 'suscitat', 'nutrit', 'producit'. This is the <strong>historic present</strong>.",
                    whyMatters: "Makes it feel like we're watching now. More vivid than past tense. We feel like we're in the cottage with Baucis!"
                },
                {
                    id: "personification",
                    title: "Fire as a Living Thing",
                    highlight: ["s2-suscitat", "s2-hesternos", "s2-nutrit"],
                    whatIsIt: "Fire described with verbs for living things: 'suscitat' (awakens), 'nutrit' (feeds). This is <strong>personification</strong>.",
                    whyMatters: "The fire becomes like a sleeping animal being woken and fed. The hearth fire was sacred to Vesta and central to Roman homes."
                },
                {
                    id: "touching-detail",
                    title: "Emotional Detail: 'anima anili'",
                    highlight: ["s2-anili"],
                    whatIsIt: "'Anima anili' = 'with elderly breath'. Ablative of means.",
                    whyMatters: "Incredibly touching. We picture an elderly woman gently blowing on embers. Emphasises her age and effort despite being old."
                },
                {
                    id: "compound-words",
                    title: "Compound Adjectives",
                    highlight: ["s2-multifidas"],
                    whatIsIt: "'Multifidas' = 'multi' (many) + 'fidas' (split). Elevated poetic style.",
                    whyMatters: "Even describing humble kindling, Ovid maintains poetic craft. High art describing low life!"
                }
            ]
        },

        section3: {
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
                    whatIsIt: "Semicolon and 'ille' (he) shifts attention from Baucis to Philemon.",
                    whyMatters: "Shows both working together. She prepares vegetables, he deals with meat. Partnership emphasises shared hospitality."
                },
                {
                    id: "realistic-poverty",
                    title: "Vivid Poverty Details",
                    highlight: ["s3-sordida", "s3-nigro", "s3-servato", "s3-diu"],
                    whatIsIt: "Accumulation: <strong>sordida</strong> (dirty), <strong>nigro tigno</strong> (black beam), <strong>servato diu</strong> (saved long).",
                    whyMatters: "Meat is smoke-blackened from hanging for ages. This is their only preserved meat. Giving it to strangers is real sacrifice!"
                },
                {
                    id: "tiny-portion",
                    title: "Emphasis on Size: 'exiguam'",
                    highlight: ["s3-partem", "s3-exiguam"],
                    whatIsIt: "'Exiguam partem' = 'tiny portion'. Emphasises smallness.",
                    whyMatters: "They're cutting only a tiny piece because it's all they have. This isn't rich people being generous - it's poor people sharing genuine scarcity!"
                },
                {
                    id: "unusual-verb",
                    title: "Unusual Verb: 'domat'",
                    highlight: ["s3-domat"],
                    whatIsIt: "'Domat' usually = 'to tame' (for horses!). Here = 'to soften' meat.",
                    whyMatters: "Humorous! The meat is so tough it needs to be 'conquered'. Adds comedy whilst reinforcing how humble their meal is."
                }
            ]
        }
    }
};
