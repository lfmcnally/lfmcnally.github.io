// Tacitus Annals 12.66 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "Amid such a mass of cares he is seized by ill health, and to restore his strength by the mild climate and healthy waters he proceeded to Sinuessa. Then Agrippina, long since determined on the crime and eager for the opportunity now offered, and not lacking agents, deliberated about the type of poison, lest a sudden and rapid one would betray the deed; if she chose a slow and wasting one, lest Claudius, brought near to his end and having understood the treachery, might return to love for his son. Something refined was desirable, which would disturb his mind and delay death. An expert in such matters named Locusta was chosen, recently condemned for poisoning and long kept among the instruments of the reign. By this woman's skill a poison was prepared, whose agent from among the eunuchs was Halotus, accustomed to bring in the dishes and test them by tasting.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">in tanta mole curarum</span> valetudine adversa corripitur</span>,
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">refovendisque viribus mollitia caeli et salubritate aquarum</span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">Sinuessam pergit</span>.
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">tum Agrippina, <span class="highlight-style style-2" onclick="showAnalysis('style2')">sceleris olim certa</span></span>
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')"><span class="highlight-style style-3" onclick="showAnalysis('style3')">et oblatae occasionis propera nec ministrorum egens</span></span>,
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">de genere veneni consultavit</span>,
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">ne <span class="highlight-style style-4" onclick="showAnalysis('style4')">repentino et praecipiti</span> facinus proderetur</span>;
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">si <span class="highlight-style style-4" onclick="showAnalysis('style4')">lentum et tabidum</span> delegisset</span>,
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">ne admotus supremis Claudius et dolo intellecto ad amorem filii rediret</span>.
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">exquisitum aliquid</span> placebat</span>,
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">quod <span class="highlight-style style-6" onclick="showAnalysis('style6')">turbaret mentem et mortem differret</span></span>.
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">deligitur <span class="highlight-style style-7" onclick="showAnalysis('style7')">artifex talium</span> vocabulo Locusta</span>,
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">nuper veneficii damnata et diu <span class="highlight-style style-8" onclick="showAnalysis('style8')">inter instrumenta regni</span> habita</span>.
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">eius mulieris <span class="highlight-style style-9" onclick="showAnalysis('style9')">ingenio</span> paratum virus</span>,
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')">cuius minister e spadonibus fuit Halotus</span>,
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')">inferre epulas et explorare gustu solitus</span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "in tanta mole curarum valetudine adversa corripitur",
            vocab: [
                "<strong>in</strong> = amid, in (+ ablative)",
                "<strong>tanta</strong> = so great (ablative feminine)",
                "<strong>mole</strong> = mass, burden (ablative)",
                "<strong>curarum</strong> = of cares, of worries (genitive plural)",
                "<strong>valetudine</strong> = by ill health (ablative)",
                "<strong>adversa</strong> = adverse, unfavourable (ablative feminine)",
                "<strong>corripitur</strong> = he is seized (present passive)"
            ],
            grammar: "Ablative of manner (in tanta mole) and ablative of cause (valetudine adversa). The passive 'corripitur' portrays Claudius as victim, not agent.",
            translation: "Amid such a great mass of cares he is seized by ill health"
        },
        phrase2: {
            title: "refovendisque viribus mollitia caeli et salubritate aquarum",
            vocab: [
                "<strong>refovendis</strong> = to be restored (gerundive, dative plural)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>viribus</strong> = his strength (dative plural)",
                "<strong>mollitia</strong> = by the mildness (ablative)",
                "<strong>caeli</strong> = of the climate, of the sky (genitive)",
                "<strong>et</strong> = and",
                "<strong>salubritate</strong> = by the healthiness (ablative)",
                "<strong>aquarum</strong> = of the waters (genitive plural)"
            ],
            grammar: "Gerundive of purpose with dative (refovendis viribus). The ablatives mollitia and salubritate express the means by which recovery was sought.",
            translation: "and to restore his strength by the mild climate and healthy waters"
        },
        phrase3: {
            title: "Sinuessam pergit",
            vocab: [
                "<strong>Sinuessam</strong> = to Sinuessa (accusative of place to which)",
                "<strong>pergit</strong> = he proceeds (present indicative)"
            ],
            grammar: "Accusative of place to which without a preposition (as is usual with names of towns). Sinuessa was a coastal town known for its healing waters.",
            translation: "he proceeded to Sinuessa"
        },
        phrase4: {
            title: "tum Agrippina, sceleris olim certa",
            vocab: [
                "<strong>tum</strong> = then, at that time",
                "<strong>Agrippina</strong> = Agrippina (nominative)",
                "<strong>sceleris</strong> = of the crime (genitive)",
                "<strong>olim</strong> = long since, long ago",
                "<strong>certa</strong> = certain, determined (nominative feminine)"
            ],
            grammar: "Genitive with adjective 'certa' (certain of/determined on). 'Olim' emphasises that this was premeditated murder, not an impulsive act.",
            translation: "then Agrippina, long since determined on the crime"
        },
        phrase5: {
            title: "et oblatae occasionis propera nec ministrorum egens",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>oblatae</strong> = offered, presented (genitive feminine perfect passive participle)",
                "<strong>occasionis</strong> = of the opportunity (genitive)",
                "<strong>propera</strong> = eager, hasty (nominative feminine)",
                "<strong>nec</strong> = and not, nor",
                "<strong>ministrorum</strong> = of agents, of servants (genitive plural)",
                "<strong>egens</strong> = lacking (nominative, + genitive)"
            ],
            grammar: "Tricolon of participles/adjectives describing Agrippina: certa, propera, egens. Each takes a genitive object, creating parallel structure.",
            translation: "and eager for the opportunity now offered, and not lacking agents"
        },
        phrase6: {
            title: "de genere veneni consultavit",
            vocab: [
                "<strong>de</strong> = about, concerning (+ ablative)",
                "<strong>genere</strong> = the type, the kind (ablative)",
                "<strong>veneni</strong> = of poison (genitive)",
                "<strong>consultavit</strong> = she deliberated (perfect indicative)"
            ],
            grammar: "Simple main clause. The clinical 'consultavit' suggests careful planning rather than passion, making Agrippina's actions more chilling.",
            translation: "she deliberated about the type of poison"
        },
        phrase7: {
            title: "ne repentino et praecipiti facinus proderetur",
            vocab: [
                "<strong>ne</strong> = lest, so that... not",
                "<strong>repentino</strong> = by a sudden one (ablative neuter, sc. veneno)",
                "<strong>et</strong> = and",
                "<strong>praecipiti</strong> = by a rapid, hasty one (ablative neuter)",
                "<strong>facinus</strong> = the deed, the crime (nominative neuter)",
                "<strong>proderetur</strong> = would be betrayed (imperfect subjunctive passive)"
            ],
            grammar: "Negative purpose clause (ne + subjunctive). The poison is understood (sc. veneno) from the previous clause. Note the euphemism 'facinus' for murder.",
            translation: "lest a sudden and rapid one would betray the deed"
        },
        phrase8: {
            title: "si lentum et tabidum delegisset",
            vocab: [
                "<strong>si</strong> = if",
                "<strong>lentum</strong> = slow (accusative neuter, sc. venenum)",
                "<strong>et</strong> = and",
                "<strong>tabidum</strong> = wasting, consuming (accusative neuter)",
                "<strong>delegisset</strong> = she had chosen (pluperfect subjunctive)"
            ],
            grammar: "Protasis of a conditional sentence with pluperfect subjunctive, expressing a hypothetical past consideration in Agrippina's deliberations.",
            translation: "if she chose a slow and wasting one"
        },
        phrase9: {
            title: "ne admotus supremis Claudius et dolo intellecto ad amorem filii rediret",
            vocab: [
                "<strong>ne</strong> = lest",
                "<strong>admotus</strong> = brought near (perfect passive participle, nominative)",
                "<strong>supremis</strong> = to his end, to death (dative plural neuter)",
                "<strong>Claudius</strong> = Claudius (nominative)",
                "<strong>et</strong> = and",
                "<strong>dolo</strong> = the treachery (ablative)",
                "<strong>intellecto</strong> = having been understood (perfect passive participle, ablative)",
                "<strong>ad</strong> = to (+ accusative)",
                "<strong>amorem</strong> = love (accusative)",
                "<strong>filii</strong> = for his son (genitive)",
                "<strong>rediret</strong> = might return (imperfect subjunctive)"
            ],
            grammar: "Apodosis of the conditional, expressed as a fear clause. 'Filii' refers to Britannicus, the legitimate heir whom Agrippina fears Claudius might favour if he suspects treachery.",
            translation: "lest Claudius, brought near to his end and having understood the treachery, might return to love for his son"
        },
        phrase10: {
            title: "exquisitum aliquid placebat",
            vocab: [
                "<strong>exquisitum</strong> = something refined, something unusual (accusative neuter)",
                "<strong>aliquid</strong> = something (nominative/accusative neuter)",
                "<strong>placebat</strong> = was pleasing, was desirable (imperfect indicative)"
            ],
            grammar: "Impersonal construction with neuter subject. 'Exquisitum' literally means 'sought out' - something special and carefully selected.",
            translation: "something refined was desirable"
        },
        phrase11: {
            title: "quod turbaret mentem et mortem differret",
            vocab: [
                "<strong>quod</strong> = which (nominative neuter relative pronoun)",
                "<strong>turbaret</strong> = would disturb (imperfect subjunctive)",
                "<strong>mentem</strong> = the mind (accusative)",
                "<strong>et</strong> = and",
                "<strong>mortem</strong> = death (accusative)",
                "<strong>differret</strong> = would delay (imperfect subjunctive)"
            ],
            grammar: "Relative clause of characteristic with subjunctive, describing the type of poison desired. The requirements reveal Agrippina's calculated cruelty.",
            translation: "which would disturb his mind and delay death"
        },
        phrase12: {
            title: "deligitur artifex talium vocabulo Locusta",
            vocab: [
                "<strong>deligitur</strong> = is chosen (present passive indicative)",
                "<strong>artifex</strong> = expert, craftsman (nominative)",
                "<strong>talium</strong> = in such matters (genitive plural neuter)",
                "<strong>vocabulo</strong> = by the name of (ablative)",
                "<strong>Locusta</strong> = Locusta (nominative/ablative)"
            ],
            grammar: "Passive construction emphasising the selection process. 'Vocabulo' is ablative of specification. Locusta was a historical poisoner employed by the imperial court.",
            translation: "an expert in such matters named Locusta was chosen"
        },
        phrase13: {
            title: "nuper veneficii damnata et diu inter instrumenta regni habita",
            vocab: [
                "<strong>nuper</strong> = recently",
                "<strong>veneficii</strong> = of poisoning (genitive)",
                "<strong>damnata</strong> = condemned (perfect passive participle, nominative feminine)",
                "<strong>et</strong> = and",
                "<strong>diu</strong> = for a long time",
                "<strong>inter</strong> = among (+ accusative)",
                "<strong>instrumenta</strong> = tools, instruments (accusative plural)",
                "<strong>regni</strong> = of the reign (genitive)",
                "<strong>habita</strong> = kept, held (perfect passive participle, nominative feminine)"
            ],
            grammar: "Two perfect passive participles (damnata, habita) describing Locusta. The juxtaposition of 'condemned' and 'kept as a tool' reveals the corruption of imperial power.",
            translation: "recently condemned for poisoning and long kept among the instruments of the reign"
        },
        phrase14: {
            title: "eius mulieris ingenio paratum virus",
            vocab: [
                "<strong>eius</strong> = of this (genitive feminine)",
                "<strong>mulieris</strong> = woman's (genitive)",
                "<strong>ingenio</strong> = by the skill, by the talent (ablative)",
                "<strong>paratum</strong> = prepared (perfect passive participle, nominative neuter)",
                "<strong>virus</strong> = poison (nominative neuter)"
            ],
            grammar: "Ablative of means (ingenio). The word 'ingenium' normally means natural talent or genius - here applied ironically to skill in murder.",
            translation: "a poison was prepared by this woman's skill"
        },
        phrase15: {
            title: "cuius minister e spadonibus fuit Halotus",
            vocab: [
                "<strong>cuius</strong> = whose, of which (genitive neuter)",
                "<strong>minister</strong> = agent, servant (nominative)",
                "<strong>e</strong> = from among (+ ablative)",
                "<strong>spadonibus</strong> = the eunuchs (ablative plural)",
                "<strong>fuit</strong> = was (perfect indicative)",
                "<strong>Halotus</strong> = Halotus (nominative)"
            ],
            grammar: "Relative clause. Eunuchs held trusted positions in the imperial household as they posed no dynastic threat. Halotus was Claudius' food-taster.",
            translation: "whose agent from among the eunuchs was Halotus"
        },
        phrase16: {
            title: "inferre epulas et explorare gustu solitus",
            vocab: [
                "<strong>inferre</strong> = to bring in (present infinitive)",
                "<strong>epulas</strong> = the dishes, the food (accusative plural)",
                "<strong>et</strong> = and",
                "<strong>explorare</strong> = to test, to examine (present infinitive)",
                "<strong>gustu</strong> = by tasting (ablative)",
                "<strong>solitus</strong> = accustomed (perfect participle, nominative masculine)"
            ],
            grammar: "'Solitus' with complementary infinitives describes Halotus' regular duties. The irony is devastating: the man who tastes for poison will deliver it.",
            translation: "accustomed to bring in the dishes and test them by tasting"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "in tanta mole curarum",
            device: "Metaphor",
            effect: "The metaphor of 'moles' (mass/burden) portrays Claudius' worries as a crushing physical weight, emphasising his vulnerability and creating sympathy for the soon-to-be victim."
        },
        style2: {
            title: "sceleris olim certa",
            device: "Loaded Vocabulary",
            effect: "The word 'scelus' (crime) is morally charged, and 'olim' (long since) reveals premeditation. Tacitus condemns Agrippina from the outset as a cold-blooded plotter."
        },
        style3: {
            title: "oblatae occasionis propera nec ministrorum egens",
            device: "Tricolon with Asyndeton",
            effect: "Three qualities (certa, propera, egens) pile up without conjunctions, creating a relentless portrait of Agrippina's ruthless efficiency and readiness to murder."
        },
        style4: {
            title: "repentino et praecipiti / lentum et tabidum",
            device: "Antithetical Word Pairs",
            effect: "The contrasting pairs (sudden/rapid vs slow/wasting) reveal the clinical, calculating nature of Agrippina's deliberations - she weighs murder methods like business options."
        },
        style5: {
            title: "exquisitum aliquid",
            device: "Euphemism",
            effect: "'Something refined' delicately describes a sophisticated murder weapon. The elegant phrasing contrasts chillingly with the horrific purpose."
        },
        style6: {
            title: "turbaret mentem et mortem differret",
            device: "Assonance and Balance",
            effect: "The repeated 'm' sounds and balanced structure (verb + accusative, verb + accusative) create an almost poetic description of madness and death."
        },
        style7: {
            title: "artifex talium",
            device: "Euphemism",
            effect: "'Expert in such matters' is a darkly ironic understatement for a professional poisoner, treating murder as a craft requiring specialist skills."
        },
        style8: {
            title: "inter instrumenta regni",
            device: "Dehumanising Metaphor",
            effect: "Describing a condemned criminal as a 'tool of the reign' reveals how the imperial system exploits even criminals. It also implicates the regime in murder."
        },
        style9: {
            title: "ingenio",
            device: "Ironic Word Choice",
            effect: "'Ingenium' normally denotes positive natural talent or genius. Applying it to skill in poison-making is bitterly ironic, subverting expectations."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Claudius falls ill amid his many concerns and travels to Sinuessa to recover. Agrippina, who has long planned to murder him, sees her opportunity. She deliberates carefully about what poison to use.</p>
            <p>A sudden poison might expose the crime; a slow one might give Claudius time to realise the treachery and reconcile with his son Britannicus. She needs something that will confuse his mind while delaying death.</p>
            <p>Locusta, a convicted poisoner kept as a state asset, is chosen. She prepares the poison, which will be administered by the eunuch Halotus - ironically, the very man whose job is to taste Claudius' food for poison.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>Sinuessa:</strong> A coastal town in Campania (modern Mondragone) famous for its hot springs and mild climate. Roman aristocrats often sought health cures at such resorts.</p>
            <p><strong>Agrippina the Younger:</strong> Claudius' fourth wife and mother of Nero. A great-granddaughter of Augustus, she was ambitious for her son and ruthless in pursuing power.</p>
            <p><strong>Britannicus:</strong> Claudius' natural son by Messalina, and the legitimate heir. His existence threatened Nero's succession, making him Agrippina's obstacle.</p>
            <p><strong>Locusta:</strong> A historical figure, a professional poisoner from Gaul. She was later used by Nero to murder Britannicus and was eventually executed under Galba.</p>
            <p><strong>Halotus:</strong> A eunuch who served as Claudius' food-taster (<em>praegustator</em>). Eunuchs were trusted in such roles because they could not found rival dynasties.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>Why did Claudius travel to Sinuessa?</li>
                <li>What does 'sceleris olim certa' reveal about Agrippina's intentions?</li>
                <li>Why did Agrippina reject a sudden, rapid poison?</li>
                <li>Why did she also reject a slow, wasting poison?</li>
                <li>What kind of poison did Agrippina want?</li>
                <li>Who was Locusta and why was she chosen?</li>
                <li>What was Halotus' role in Claudius' household?</li>
                <li>What is ironic about Halotus being chosen as the agent?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>How does Tacitus create sympathy for Claudius in the opening sentence?</li>
                <li>What effect does the tricolon 'sceleris olim certa et oblatae occasionis propera nec ministrorum egens' have?</li>
                <li>How does the clinical language of deliberation ('consultavit', 'exquisitum aliquid placebat') characterise Agrippina?</li>
                <li>What is the significance of describing Locusta as being kept 'inter instrumenta regni'?</li>
                <li>How does Tacitus use irony in his description of Halotus?</li>
                <li>What does the word 'ingenio' suggest when applied to Locusta's skill?</li>
                <li>How does this passage reveal the corruption of the imperial system?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Calculated Evil:</strong> Agrippina's deliberations reveal methodical, rational planning rather than passionate impulse. Her consideration of different poisons shows cold intelligence applied to murder.</p>
            <p><strong>Imperial Corruption:</strong> The state keeps a convicted poisoner as a 'tool of the reign' - crime serves power. The system itself is complicit in murder.</p>
            <p><strong>Irony and Betrayal:</strong> The food-taster becomes the poisoner; skill ('ingenium') serves death; recovery from illness leads to murder. Every protective mechanism is subverted.</p>
            <p><strong>Vulnerability of Power:</strong> Despite his position, Claudius is helpless - ill, surrounded by plotters, dependent on those who will betray him.</p>
            <p><strong>Dynastic Politics:</strong> Agrippina's fear that Claudius might 'return to love for his son' reveals succession as the driving motive. Britannicus must not inherit.</p>
        `
    }
};
