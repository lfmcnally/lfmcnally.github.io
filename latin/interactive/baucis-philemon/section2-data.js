// Baucis and Philemon Data File
// This must be loaded BEFORE the main HTML script

const lessonData = {
    // Full text with clickable lines for vocab/grammar
    fullText: [
        { 
            number: 12, 
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
            number: 13, 
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
            number: 14, 
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
            number: 15, 
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
            number: 16, 
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
            number: 17, 
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
            number: 18, 
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
            number: 19, 
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
            number: 20, 
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
            number: 21, 
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
            number: 22, 
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
            number: 23, 
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
            number: 24, 
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
            number: 25, 
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
                { number: 12, text: "ergo ubi <span id='s1-caelicolae'>caelicolae</span> <span id='s1-parvos'>parvos</span> tetigere <span id='s1-penates'>penates</span>" },
                { number: 13, text: "<span id='s1-summisso'>summisso</span>que <span id='s1-humiles'>humiles</span> intrarunt <span id='s1-vertice'>vertice</span> postes," },
                { number: 14, text: "membra senex posito iussit <span id='s1-relevare'>relevare</span> sedili," },
                { number: 15, text: "cui superiniecit <span id='s1-textum'>textum rude</span> <span id='s1-sedula'>sedula Baucis</span>." },
                { number: 16, text: "inde foco <span id='s1-tepidum'>tepidum</span> cinerem dimovit et ignes" }
            ],
            features: [
                {
                    id: "elevated-vocab",
                    title: "Elevated Vocabulary: 'caelicolae'",
                    highlights: [
                        { ids: ["s1-caelicolae"], color: "blue" }
                    ],
                    whatIsIt: "Instead of 'dei' (gods), Ovid uses <strong>caelicolae</strong> - literally 'heaven-dwellers' (caeli = heaven, colae = dwellers).",
                    whyMatters: "This elevated, poetic vocabulary reminds us these aren't ordinary guests - they're divine beings in disguise."
                },
                {
                    id: "contrast",
                    title: "Contrasting Adjectives (Juxtaposition)",
                    highlights: [
                        { ids: ["s1-caelicolae"], color: "blue" },
                        { ids: ["s1-parvos", "s1-penates", "s1-humiles"], color: "orange" }
                    ],
                    whatIsIt: "Pairing of opposites: <strong>caelicolae</strong> (heaven-dwellers) contrasted with <strong>parvos penates</strong> (small home) and <strong>humiles postes</strong> (low doorway). This is <strong>juxtaposition</strong>.",
                    whyMatters: "The contrast emphasises their poverty and makes their hospitality impressive. Divine beings are literally stooping to enter this humble dwelling."
                },
                {
                    id: "hyperbaton-parvos",
                    title: "Hyperbaton: 'parvos...penates'",
                    highlights: [
                        { ids: ["s1-parvos"], color: "green" },
                        { ids: ["s1-penates"], color: "green" }
                    ],
                    whatIsIt: "'Parvos...penates' are separated by the verb 'tetigere' (touched). This word order device is <strong>hyperbaton</strong>.",
                    whyMatters: "The separation makes both words more prominent. We notice both 'small' AND 'home' individually, emphasising the poverty."
                },
                {
                    id: "hyperbaton-summisso",
                    title: "Hyperbaton: 'summisso...vertice'",
                    highlights: [
                        { ids: ["s1-summisso"], color: "purple" },
                        { ids: ["s1-vertice"], color: "purple" }
                    ],
                    whatIsIt: "'Summisso...vertice' (with bowed...head) are separated and wrap around 'humiles intrarunt'. This is <strong>hyperbaton</strong>.",
                    whyMatters: "The word order creates a visual 'bowing' in the Latin! The words physically bow around the centre, matching the action described."
                },
                {
                    id: "realistic-detail",
                    title: "Realistic Detail: 'tepidum'",
                    highlights: [
                        { ids: ["s1-tepidum"], color: "red" }
                    ],
                    whatIsIt: "'Tepidum' = 'warm'. A tiny, specific detail about the ash.",
                    whyMatters: "Makes the scene feel real. The ash is still warm from yesterday - we can almost feel it! These aren't generic poor people - they're real individuals with real lives."
                },
                {
                    id: "word-position",
                    title: "Emphatic Word Position: 'sedula Baucis'",
                    highlights: [
                        { ids: ["s1-sedula"], color: "teal" }
                    ],
                    whatIsIt: "'Sedula Baucis' (busy Baucis) comes at the very end of line 15, in the emphatic final position.",
                    whyMatters: "Ending with her name and character trait draws attention to Baucis' industrious nature. She's not just serving - she's actively, busily caring for her guests."
                }
            ]
        },

        section2: {
            lines: [
                { number: 17, text: "<span id='s2-suscitat'>suscitat</span> <span id='s2-hesternos'>hesternos</span> foliisque et cortice sicco" },
                { number: 18, text: "<span id='s2-nutrit'>nutrit</span> et ad flammas <span id='s2-anima'>anima</span> <span id='s2-producit'>producit</span> <span id='s2-anili'>anili</span>," },
                { number: 19, text: "<span id='s2-multifidas'>multifidas</span>que faces <span id='s2-ramalia'>ramalia</span>que arida <span id='s2-tecto'>tecto</span>" },
                { number: 20, text: "<span id='s2-detulit'>detulit</span> et <span id='s2-minuit'>minuit</span> <span id='s2-parvo'>parvo</span>que <span id='s2-admovit'>admovit</span> aeno," },
                { number: 21, text: "quodque suus coniunx <span id='s2-riguo'>riguo</span> collegerat horto" }
            ],
            features: [
                {
                    id: "historic-present",
                    title: "The Historic Present",
                    highlights: [
                        { ids: ["s2-suscitat", "s2-nutrit", "s2-producit"], color: "yellow" }
                    ],
                    whatIsIt: "Switches from perfect to present tense: 'suscitat', 'nutrit', 'producit'. This is the <strong>historic present</strong>.",
                    whyMatters: "Makes it feel like we're watching now. More vivid than past tense. We feel like we're in the cottage with Baucis, watching her work!"
                },
                {
                    id: "personification",
                    title: "Personification of Fire",
                    highlights: [
                        { ids: ["s2-suscitat"], color: "orange" },
                        { ids: ["s2-hesternos"], color: "orange" },
                        { ids: ["s2-nutrit"], color: "orange" }
                    ],
                    whatIsIt: "Fire described with verbs for living things: 'suscitat' (awakens), 'nutrit' (feeds). This is <strong>personification</strong>.",
                    whyMatters: "The fire becomes like a sleeping animal being woken and fed. The hearth fire was sacred to Vesta and central to Roman homes - treating it as alive reflects its importance."
                },
                {
                    id: "alliteration",
                    title: "Alliteration: 'anima...anili'",
                    highlights: [
                        { ids: ["s2-anima"], color: "pink" },
                        { ids: ["s2-anili"], color: "pink" }
                    ],
                    whatIsIt: "Both words start with 'an-' sounds. This repetition of initial sounds is <strong>alliteration</strong>.",
                    whyMatters: "The sound echo links the two words together aurally, emphasising the connection between the breath and the elderly woman. It's musical and memorable."
                },
                {
                    id: "touching-detail",
                    title: "Emotional Detail: 'anima anili'",
                    highlights: [
                        { ids: ["s2-anima", "s2-anili"], color: "blue" }
                    ],
                    whatIsIt: "'Anima anili' = 'with elderly breath'. Ablative of means.",
                    whyMatters: "Incredibly touching. We picture an elderly woman gently blowing on embers. Emphasises her age and the physical effort involved, despite being old."
                },
                {
                    id: "compound-words",
                    title: "Compound Adjectives",
                    highlights: [
                        { ids: ["s2-multifidas"], color: "purple" }
                    ],
                    whatIsIt: "'Multifidas' = 'multi' (many) + 'fidas' (split). Elevated poetic style using compound words.",
                    whyMatters: "Even describing humble kindling, Ovid maintains poetic craft. High art describing low life! Shows his literary sophistication."
                },
                {
                    id: "tricolon",
                    title: "Tricolon: Three Verbs in Sequence",
                    highlights: [
                        { ids: ["s2-detulit"], color: "green" },
                        { ids: ["s2-minuit"], color: "green" },
                        { ids: ["s2-admovit"], color: "green" }
                    ],
                    whatIsIt: "Three actions in rapid sequence: 'detulit' (brought down), 'minuit' (broke up), 'admovit' (pushed under). This is <strong>tricolon</strong> (three-part structure).",
                    whyMatters: "The rapid sequence of verbs shows Baucis working quickly and efficiently. Creates a sense of purposeful activity and busyness."
                }
            ]
        },

        section3: {
            lines: [
                { number: 22, text: "truncat holus foliis; furca levat <span id='s3-ille'>ille</span> <span id='s3-bicorni'>bicorni</span>" },
                { number: 23, text: "<span id='s3-sordida'>sordida</span> terga suis <span id='s3-nigro'>nigro</span> pendentia tigno" },
                { number: 24, text: "<span id='s3-servato'>servato</span>que <span id='s3-diu'>diu</span> resecat de tergore <span id='s3-partem'>partem</span>" },
                { number: 25, text: "<span id='s3-exiguam'>exiguam</span> sectamque <span id='s3-domat'>domat</span> ferventibus undis." }
            ],
            features: [
                {
                    id: "shift-focus",
                    title: "Shift from Baucis to Philemon",
                    highlights: [
                        { ids: ["s3-ille"], color: "blue" }
                    ],
                    whatIsIt: "Semicolon and 'ille' (he) shifts attention from Baucis to Philemon.",
                    whyMatters: "Shows both working together. She prepares vegetables, he deals with meat. Their partnership emphasises shared hospitality - this is a team effort."
                },
                {
                    id: "realistic-poverty",
                    title: "Accumulation of Poverty Details",
                    highlights: [
                        { ids: ["s3-sordida"], color: "brown" },
                        { ids: ["s3-nigro"], color: "brown" },
                        { ids: ["s3-servato", "s3-diu"], color: "brown" }
                    ],
                    whatIsIt: "Accumulation: <strong>sordida</strong> (dirty), <strong>nigro tigno</strong> (black beam), <strong>servato diu</strong> (saved for a long time).",
                    whyMatters: "Meat is smoke-blackened from hanging for ages. This is their only preserved meat - they've been saving it. Giving it to strangers is real sacrifice!"
                },
                {
                    id: "tiny-portion",
                    title: "Emphasis on Smallness: 'exiguam partem'",
                    highlights: [
                        { ids: ["s3-partem"], color: "orange" },
                        { ids: ["s3-exiguam"], color: "orange" }
                    ],
                    whatIsIt: "'Exiguam partem' = 'tiny portion'. The adjective 'exiguam' emphasises how small the piece is.",
                    whyMatters: "They're cutting only a tiny piece because it's all they have. This isn't rich people being generous - it's poor people sharing genuine scarcity!"
                },
                {
                    id: "unusual-verb",
                    title: "Humorous Verb Choice: 'domat'",
                    highlights: [
                        { ids: ["s3-domat"], color: "red" }
                    ],
                    whatIsIt: "'Domat' usually means 'to tame' (used for horses!). Here it means 'to soften' the tough meat.",
                    whyMatters: "Humorous! The meat is so tough it needs to be 'conquered' like a wild animal. Adds gentle comedy whilst reinforcing how humble their meal is."
                },
                {
                    id: "compound-bicorni",
                    title: "Compound Adjective: 'bicorni'",
                    highlights: [
                        { ids: ["s3-bicorni"], color: "purple" }
                    ],
                    whatIsIt: "'Bicorni' = 'bi' (two) + 'corni' (horned/pronged). Another compound word showing elevated style.",
                    whyMatters: "Even describing a simple fork, Ovid uses sophisticated poetic vocabulary. Maintains the literary register throughout."
                },
                {
                    id: "ablative-absolute",
                    title: "Ablative Absolute: 'servato diu'",
                    highlights: [
                        { ids: ["s3-servato", "s3-diu"], color: "green" }
                    ],
                    whatIsIt: "'Servato diu' = 'having been saved for a long time'. This is an <strong>ablative absolute</strong> construction - participle + ablative giving background information.",
                    whyMatters: "Emphasises how precious this meat is. They've been carefully preserving it, probably for months. This grammatical structure adds circumstantial detail elegantly."
                }
            ]
        }
    }
};

// Make it globally available
window.lessonData = lessonData;
