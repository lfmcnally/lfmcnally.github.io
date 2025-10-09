// Lesson data for Tacitus Annals 14.2 - section2-data.js
const lessonData = {
    fullTranslation: "Cluvius records that in her eagerness to retain power, Agrippina went so far as to offer herself quite often, adorned and ready for incest, to the drunken Nero in the middle of the day, at that time when Nero was becoming heated through wine and feasting; and already, as those closest were noticing the wanton kisses and caresses that announce scandal, Seneca sought help from a woman against the feminine enticements and Acte, a freedwoman, was sent in, who, anxious both for her own danger and Nero's disgrace, reported that their incest was widely known because the mother was boasting about it, and that the soldiers would not tolerate the rule of an unholy emperor. Fabius Rusticus records that this was desired not by Agrippina but by Nero, and was scattered by the cleverness of this same freedwoman. But what Cluvius (relates), the rest of the authors too have handed down, and rumour inclines this way, whether Agrippina conceived such great monstrosity in her mind, or the contemplation of a new lust seemed more believable in her who in her girlhood years had admitted adultery with Lepidus in hope of domination, with equal desire had prostrated herself even to the whims of Pallas and was practised in every disgrace through marriage to her uncle.",

    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')">
            <span class="highlight-style style-1" onclick="showAnalysis('style1'); event.stopPropagation()">tradit Cluvius</span>
        </span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">ardore retinendae Agrippinam 
            <span class="highlight-style style-2" onclick="showAnalysis('style2'); event.stopPropagation()">potentiae</span>
        </span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">
            <span class="highlight-style style-3" onclick="showAnalysis('style3'); event.stopPropagation()">eo usque provectam</span>
        </span>
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">ut 
            <span class="highlight-style style-4" onclick="showAnalysis('style4'); event.stopPropagation()">medio diei</span>
        </span>,
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">cum id temporis Nero 
            <span class="highlight-style style-5" onclick="showAnalysis('style5'); event.stopPropagation()">per vinum et epulas</span>
            <span class="highlight-style style-6" onclick="showAnalysis('style6'); event.stopPropagation()">incalesceret</span>
        </span>,
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">offerret se <span class="highlight-style style-21" onclick="showAnalysis('style21'); event.stopPropagation()">saepius</span> temulento</span>
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">
            <span class="highlight-style style-7" onclick="showAnalysis('style7'); event.stopPropagation()">comptam et incesto paratam</span>
        </span>;
        
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')"><span class="highlight-style style-22" onclick="showAnalysis('style22'); event.stopPropagation()">iamque</span> 
            <span class="highlight-style style-8" onclick="showAnalysis('style8'); event.stopPropagation()">lasciva oscula</span>
            et <span class="highlight-style style-23" onclick="showAnalysis('style23'); event.stopPropagation()">praenuntias flagitii</span> blanditias
        </span>
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">adnotantibus proximis</span>,
        
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">
            <span class="highlight-style style-9" onclick="showAnalysis('style9'); event.stopPropagation()">Senecam</span>
            <span class="highlight-style style-10" onclick="showAnalysis('style10'); event.stopPropagation()">contra muliebres inlecebras</span>
        </span>
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">
            <span class="highlight-style style-11" onclick="showAnalysis('style11'); event.stopPropagation()">subsidium a femina</span>
            petivisse
        </span>,
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">
            <span class="highlight-style style-12" onclick="showAnalysis('style12'); event.stopPropagation()">immissamque</span>
            <span class="highlight-style style-13" onclick="showAnalysis('style13'); event.stopPropagation()">Acten libertam</span>
        </span>
        
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">quae <span class="highlight-style style-24" onclick="showAnalysis('style24'); event.stopPropagation()">simul suo periculo et infamia Neronis</span> anxia</span>
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">deferret <span class="highlight-style style-25" onclick="showAnalysis('style25'); event.stopPropagation()">pervulgatum esse</span> incestum</span>
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')"><span class="highlight-style style-26" onclick="showAnalysis('style26'); event.stopPropagation()">gloriante matre</span></span>,
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')"><span class="highlight-style style-27" onclick="showAnalysis('style27'); event.stopPropagation()">nec toleraturos milites</span> <span class="highlight-style style-28" onclick="showAnalysis('style28'); event.stopPropagation()">profani principis</span> imperium</span>.
        
        <span class="phrase phrase-17" onclick="showAnalysis('phrase17')">
            <span class="highlight-style style-14" onclick="showAnalysis('style14'); event.stopPropagation()">Fabius Rusticus</span>
            <span class="highlight-style style-15" onclick="showAnalysis('style15'); event.stopPropagation()">non Agrippinae sed Neroni</span>
            cupitum id memorat
        </span>
        <span class="phrase phrase-18" onclick="showAnalysis('phrase18')">eiusdemque libertae <span class="highlight-style style-29" onclick="showAnalysis('style29'); event.stopPropagation()">astu</span> <span class="highlight-style style-30" onclick="showAnalysis('style30'); event.stopPropagation()">disiectum</span></span>.
        
        <span class="phrase phrase-19" onclick="showAnalysis('phrase19')">sed <span class="highlight-style style-31" onclick="showAnalysis('style31'); event.stopPropagation()">quae Cluvius eadem ceteri quoque auctores</span> prodidere</span>,
        <span class="phrase phrase-20" onclick="showAnalysis('phrase20')">
            <span class="highlight-style style-16" onclick="showAnalysis('style16'); event.stopPropagation()">et fama huc inclinat</span>
        </span>,
        
        <span class="phrase phrase-21" onclick="showAnalysis('phrase21')"><span class="highlight-style style-32" onclick="showAnalysis('style32'); event.stopPropagation()">seu</span> concepit animo <span class="highlight-style style-33" onclick="showAnalysis('style33'); event.stopPropagation()">tantum immanitatis</span> Agrippina</span>,
        <span class="phrase phrase-22" onclick="showAnalysis('phrase22')">
            <span class="highlight-style style-17" onclick="showAnalysis('style17'); event.stopPropagation()">seu credibilior novae libidinis meditatio</span>
            in ea visa est
        </span>
        
        <span class="phrase phrase-23" onclick="showAnalysis('phrase23')">quae <span class="highlight-style style-34" onclick="showAnalysis('style34'); event.stopPropagation()">puellaribus annis</span> stuprum cum Lepido</span>
        <span class="phrase phrase-24" onclick="showAnalysis('phrase24')"><span class="highlight-style style-35" onclick="showAnalysis('style35'); event.stopPropagation()">spe dominationis</span> admiserat</span>,
        <span class="phrase phrase-25" onclick="showAnalysis('phrase25')">
            <span class="highlight-style style-18" onclick="showAnalysis('style18'); event.stopPropagation()">pari cupidine</span>
            usque ad <span class="highlight-style style-36" onclick="showAnalysis('style36'); event.stopPropagation()">libita Pallantis</span> <span class="highlight-style style-37" onclick="showAnalysis('style37'); event.stopPropagation()">provoluta</span>
        </span>
        <span class="phrase phrase-26" onclick="showAnalysis('phrase26')">
            <span class="highlight-style style-19" onclick="showAnalysis('style19'); event.stopPropagation()">et exercita ad omne flagitium</span>
            <span class="highlight-style style-20" onclick="showAnalysis('style20'); event.stopPropagation()">patrui nuptiis</span>
        </span>.
    `,

    grammar: {
        phrase1: {
            title: "tradit Cluvius",
            vocab: [
                "<strong>tradit</strong> = records, hands down (present)",
                "<strong>Cluvius</strong> = Cluvius Rufus (nominative)"
            ],
            grammar: "Historical present for vividness. Cluvius Rufus was a contemporary historian. Explicit source citation creates scholarly distance whilst introducing scandalous content.",
            translation: "Cluvius records"
        },
        phrase2: {
            title: "ardore retinendae Agrippinam potentiae",
            vocab: [
                "<strong>ardore</strong> = with burning desire (ablative)",
                "<strong>retinendae</strong> = of retaining (gerundive, genitive)",
                "<strong>Agrippinam</strong> = Agrippina (accusative)",
                "<strong>potentiae</strong> = of power (genitive)"
            ],
            grammar: "Accusative subject of indirect statement. Ablative of cause with gerundive construction. The 'burning desire to retain power' drives everything that follows.",
            translation: "that Agrippina, in her eagerness to retain power"
        },
        phrase3: {
            title: "eo usque provectam",
            vocab: [
                "<strong>eo</strong> = to such a point (adverb)",
                "<strong>usque</strong> = all the way (adverb)",
                "<strong>provectam</strong> = carried forward, advanced (perfect passive participle, accusative)"
            ],
            grammar: "Continues indirect statement. Emphatic degree phrase suggesting she's been swept along by her own desires to an extreme point.",
            translation: "had been carried so far"
        },
        phrase4: {
            title: "ut medio diei",
            vocab: [
                "<strong>ut</strong> = that (result conjunction)",
                "<strong>medio</strong> = middle (ablative)",
                "<strong>diei</strong> = of day (genitive)"
            ],
            grammar: "Result clause after 'eo usque'. Ablative of time when with partitive genitive. Midday timing violates all Roman sexual decorum.",
            translation: "that in the middle of the day"
        },
        phrase5: {
            title: "cum id temporis Nero per vinum et epulas incalesceret",
            vocab: [
                "<strong>cum</strong> = when (temporal conjunction)",
                "<strong>id</strong> = that (accusative)",
                "<strong>temporis</strong> = of time (partitive genitive)",
                "<strong>Nero</strong> = Nero (nominative)",
                "<strong>per</strong> = through (+ accusative)",
                "<strong>vinum</strong> = wine (accusative)",
                "<strong>et</strong> = and",
                "<strong>epulas</strong> = feast (accusative plural)",
                "<strong>incalesceret</strong> = was becoming heated (imperfect subjunctive)"
            ],
            grammar: "Temporal cum clause with subjunctive. 'Id temporis' is partitive genitive idiom. Heat metaphor links alcohol and arousal.",
            translation: "when at that time Nero was becoming heated through wine and feasting"
        },
        phrase6: {
            title: "offerret se saepius temulento",
            vocab: [
                "<strong>offerret</strong> = she offered (imperfect subjunctive)",
                "<strong>se</strong> = herself (reflexive accusative)",
                "<strong>saepius</strong> = quite often (comparative adverb)",
                "<strong>temulento</strong> = to the drunken one (dative)"
            ],
            grammar: "Main verb of result clause. Reflexive shows she makes herself the offering. Dative shows Nero as vulnerable target.",
            translation: "she would offer herself quite often to the drunken (Nero)"
        },
        phrase7: {
            title: "comptam et incesto paratam",
            vocab: [
                "<strong>comptam</strong> = adorned, arranged (perfect passive participle, accusative)",
                "<strong>et</strong> = and",
                "<strong>incesto</strong> = for incest (dative)",
                "<strong>paratam</strong> = prepared, ready (perfect passive participle, accusative)"
            ],
            grammar: "Paired participles describing Agrippina (agreeing with 'se'). Shows deliberate preparation for the ultimate taboo - she dresses for incest.",
            translation: "adorned and ready for incest"
        },
        phrase8: {
            title: "iamque lasciva oscula et praenuntias flagitii blanditias",
            vocab: [
                "<strong>iam</strong> = already",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>lasciva</strong> = wanton, lustful (accusative neuter plural)",
                "<strong>oscula</strong> = kisses (accusative neuter plural)",
                "<strong>et</strong> = and",
                "<strong>praenuntias</strong> = announcing beforehand (accusative feminine plural)",
                "<strong>flagitii</strong> = of scandal (genitive)",
                "<strong>blanditias</strong> = caresses (accusative feminine plural)"
            ],
            grammar: "Direct objects of implied 'being noticed'. The caresses are prophetic - physical signs of coming moral catastrophe.",
            translation: "and already wanton kisses and caresses foretelling scandal"
        },
        phrase9: {
            title: "adnotantibus proximis",
            vocab: [
                "<strong>adnotantibus</strong> = noticing (present participle, ablative plural)",
                "<strong>proximis</strong> = those closest (ablative plural)"
            ],
            grammar: "Ablative absolute showing concurrent action. The courtiers are witnesses to unfolding corruption.",
            translation: "with those closest noticing"
        },
        phrase10: {
            title: "Senecam contra muliebres inlecebras",
            vocab: [
                "<strong>Senecam</strong> = Seneca (accusative)",
                "<strong>contra</strong> = against (+ accusative)",
                "<strong>muliebres</strong> = womanly, feminine (accusative feminine plural)",
                "<strong>inlecebras</strong> = enticements, allurements (accusative plural)"
            ],
            grammar: "Accusative subject of indirect statement. The threat is gendered as specifically feminine, requiring gendered response.",
            translation: "Seneca against the feminine enticements"
        },
        phrase11: {
            title: "subsidium a femina petivisse",
            vocab: [
                "<strong>subsidium</strong> = help, reinforcement (accusative)",
                "<strong>a</strong> = from (+ ablative)",
                "<strong>femina</strong> = woman (ablative)",
                "<strong>petivisse</strong> = to have sought (perfect infinitive)"
            ],
            grammar: "Military metaphor - 'subsidium' is military reinforcement. Ironic that help against woman comes from woman.",
            translation: "sought help from a woman"
        },
        phrase12: {
            title: "immissamque Acten libertam",
            vocab: [
                "<strong>immissam</strong> = sent in (perfect passive participle, accusative)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>Acten</strong> = Acte (Greek accusative)",
                "<strong>libertam</strong> = freedwoman (accusative in apposition)"
            ],
            grammar: "Military vocabulary continues. Acte's status as freedwoman emphasised - former slave has more moral authority than patrician mother.",
            translation: "and Acte the freedwoman was sent in"
        },
        phrase13: {
            title: "quae simul suo periculo et infamia Neronis anxia",
            vocab: [
                "<strong>quae</strong> = who (nominative feminine)",
                "<strong>simul</strong> = at the same time, both",
                "<strong>suo</strong> = her own (ablative)",
                "<strong>periculo</strong> = danger (ablative)",
                "<strong>et</strong> = and",
                "<strong>infamia</strong> = disgrace (ablative)",
                "<strong>Neronis</strong> = of Nero (genitive)",
                "<strong>anxia</strong> = anxious (nominative feminine)"
            ],
            grammar: "Relative clause. Double motivation shown by 'simul' - self-preservation and protecting Nero's reputation.",
            translation: "who, anxious both for her own danger and Nero's disgrace"
        },
        phrase14: {
            title: "deferret pervulgatum esse incestum",
            vocab: [
                "<strong>deferret</strong> = reported (imperfect subjunctive)",
                "<strong>pervulgatum</strong> = widely spread (perfect passive participle, accusative)",
                "<strong>esse</strong> = to be (infinitive)",
                "<strong>incestum</strong> = incest (accusative)"
            ],
            grammar: "Subjunctive in relative clause. Accusative-infinitive for indirect statement. Private shame has become public knowledge.",
            translation: "reported that incest was widely known"
        },
        phrase15: {
            title: "gloriante matre",
            vocab: [
                "<strong>gloriante</strong> = boasting (present participle, ablative)",
                "<strong>matre</strong> = mother (ablative)"
            ],
            grammar: "Ablative absolute explaining cause. Agrippina's pride in her corruption leads to exposure.",
            translation: "with the mother boasting"
        },
        phrase16: {
            title: "nec toleraturos milites profani principis imperium",
            vocab: [
                "<strong>nec</strong> = and not",
                "<strong>toleraturos</strong> = would tolerate (future participle, accusative masculine plural)",
                "<strong>milites</strong> = soldiers (accusative)",
                "<strong>profani</strong> = unholy, polluted (genitive)",
                "<strong>principis</strong> = emperor (genitive)",
                "<strong>imperium</strong> = rule, command (accusative)"
            ],
            grammar: "Continuation of indirect statement. Future participle with esse understood. Military support determines legitimacy - the ultimate threat.",
            translation: "and that soldiers would not tolerate the rule of an unholy emperor"
        },
        phrase17: {
            title: "Fabius Rusticus non Agrippinae sed Neroni cupitum id memorat",
            vocab: [
                "<strong>Fabius Rusticus</strong> = Fabius Rusticus (nominative)",
                "<strong>non</strong> = not",
                "<strong>Agrippinae</strong> = by Agrippina (dative of agent)",
                "<strong>sed</strong> = but",
                "<strong>Neroni</strong> = by Nero (dative of agent)",
                "<strong>cupitum</strong> = desired (perfect passive participle, accusative)",
                "<strong>id</strong> = it (accusative)",
                "<strong>memorat</strong> = records (present)"
            ],
            grammar: "Alternative source with sharp antithesis reversing agency. Datives of agent with passive. Historical present.",
            translation: "Fabius Rusticus records that it was desired not by Agrippina but by Nero"
        },
        phrase18: {
            title: "eiusdemque libertae astu disiectum",
            vocab: [
                "<strong>eiusdem</strong> = of the same (genitive)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>libertae</strong> = freedwoman (genitive)",
                "<strong>astu</strong> = by cleverness (ablative)",
                "<strong>disiectum</strong> = scattered, ruined (perfect passive participle, accusative)"
            ],
            grammar: "Elliptical with esse understood. Violent metaphor - plot 'shattered' by intelligence not force.",
            translation: "and was ruined by the same freedwoman's cleverness"
        },
        phrase19: {
            title: "sed quae Cluvius eadem ceteri quoque auctores prodidere",
            vocab: [
                "<strong>sed</strong> = but",
                "<strong>quae</strong> = what things (accusative neuter plural)",
                "<strong>Cluvius</strong> = Cluvius (nominative)",
                "<strong>eadem</strong> = the same things (accusative neuter plural)",
                "<strong>ceteri</strong> = the rest (nominative plural)",
                "<strong>quoque</strong> = also",
                "<strong>auctores</strong> = authors (nominative plural)",
                "<strong>prodidere</strong> = have handed down (perfect)"
            ],
            grammar: "Relative clause with elliptical verb. Perfect tense shows established tradition. Creates illusion of consensus.",
            translation: "but what Cluvius (relates), the same things other authors too have handed down"
        },
        phrase20: {
            title: "et fama huc inclinat",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>fama</strong> = rumour, report (nominative)",
                "<strong>huc</strong> = this way, toward this (adverb)",
                "<strong>inclinat</strong> = inclines, leans (present)"
            ],
            grammar: "Personification of rumour as judge. Though rumour typically favours the most scandalous version.",
            translation: "and rumour inclines this way"
        },
        phrase21: {
            title: "seu concepit animo tantum immanitatis Agrippina",
            vocab: [
                "<strong>seu</strong> = whether (conjunction)",
                "<strong>concepit</strong> = conceived (perfect)",
                "<strong>animo</strong> = in mind (ablative)",
                "<strong>tantum</strong> = so much (accusative)",
                "<strong>immanitatis</strong> = of monstrosity (genitive of quantity)",
                "<strong>Agrippina</strong> = Agrippina (nominative)"
            ],
            grammar: "First alternative with 'seu'. Genitive of quantity. Makes incest seem inhuman in scope - monstrous.",
            translation: "whether Agrippina conceived such great monstrosity in her mind"
        },
        phrase22: {
            title: "seu credibilior novae libidinis meditatio in ea visa est",
            vocab: [
                "<strong>seu</strong> = or whether",
                "<strong>credibilior</strong> = more believable (comparative nominative)",
                "<strong>novae</strong> = new (genitive)",
                "<strong>libidinis</strong> = of lust (genitive)",
                "<strong>meditatio</strong> = contemplation (nominative)",
                "<strong>in</strong> = in (+ ablative)",
                "<strong>ea</strong> = her (ablative)",
                "<strong>visa</strong> = seemed (perfect passive participle, nominative)",
                "<strong>est</strong> = is (present)"
            ],
            grammar: "Second alternative. Comparative suggests character makes any depravity believable.",
            translation: "or the contemplation of a new lust seemed more believable in her"
        },
        phrase23: {
            title: "quae puellaribus annis stuprum cum Lepido",
            vocab: [
                "<strong>quae</strong> = who (nominative)",
                "<strong>puellaribus</strong> = girlhood (ablative plural)",
                "<strong>annis</strong> = in years (ablative of time)",
                "<strong>stuprum</strong> = adultery, debauchery (accusative)",
                "<strong>cum</strong> = with (+ ablative)",
                "<strong>Lepido</strong> = Lepidus (ablative)"
            ],
            grammar: "Relative clause explaining her character. Shows early corruption - sexual scheming from youth.",
            translation: "who in girlhood years (committed) adultery with Lepidus"
        },
        phrase24: {
            title: "spe dominationis admiserat",
            vocab: [
                "<strong>spe</strong> = in hope (ablative)",
                "<strong>dominationis</strong> = of domination (genitive)",
                "<strong>admiserat</strong> = had admitted/allowed (pluperfect)"
            ],
            grammar: "Ablative of cause reveals motivation. Sex was always about power, never passion.",
            translation: "had admitted in hope of domination"
        },
        phrase25: {
            title: "pari cupidine usque ad libita Pallantis provoluta",
            vocab: [
                "<strong>pari</strong> = equal (ablative)",
                "<strong>cupidine</strong> = with desire (ablative of manner)",
                "<strong>usque</strong> = all the way",
                "<strong>ad</strong> = to (+ accusative)",
                "<strong>libita</strong> = whims, pleasures (accusative neuter plural)",
                "<strong>Pallantis</strong> = of Pallas (genitive)",
                "<strong>provoluta</strong> = prostrated (perfect passive participle, nominative)"
            ],
            grammar: "Shows progression of degradation. Pallas was a freedman - complete social inversion. 'Provoluta' suggests physical abasement.",
            translation: "with equal desire had prostrated herself even to the whims of Pallas"
        },
        phrase26: {
            title: "et exercita ad omne flagitium patrui nuptiis",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>exercita</strong> = practised, trained (perfect passive participle, nominative)",
                "<strong>ad</strong> = for (+ accusative)",
                "<strong>omne</strong> = every (accusative)",
                "<strong>flagitium</strong> = disgrace (accusative)",
                "<strong>patrui</strong> = uncle (genitive)",
                "<strong>nuptiis</strong> = by marriage (ablative plural)"
            ],
            grammar: "Training metaphor - expert through practice. Marriage to Claudius was already incestuous, preparing for worse.",
            translation: "and practised in every disgrace through marriage to her uncle"
        }
    },

    style: {
        style1: {
            title: "tradit Cluvius",
            device: "Historic Present",
            effect: "Opens with present tense 'tradit' (records) for vividness and immediacy. Creates scholarly distance whilst lending authority - Tacitus reports scandal without personally vouching for it, allowing him to present lurid material whilst maintaining historian's objectivity."
        },
        style2: {
            title: "potentiae",
            device: "Emphatic Positioning",
            effect: "The genitive 'potentiae' (of power) is the key word positioned prominently - this entire scandal is political, not sexual. By placing power as the motivation, Tacitus frames even incest as calculated ambition rather than passion or madness."
        },
        style3: {
            title: "eo usque provectam",
            device: "Metaphor",
            effect: "The perfect passive participle 'provectam' (carried forward) creates a journey metaphor - Agrippina is swept along by forces beyond control. The passive voice implies desire has its own momentum, creating tragic inevitability."
        },
        style4: {
            title: "medio diei",
            device: "Loaded Vocabulary",
            effect: "Midday ('medio diei') seduction violates all Roman sexual propriety. Romans associated daylight with virtue, darkness with vice. The brazen timing shows complete abandonment of shame - not even darkness conceals this depravity."
        },
        style5: {
            title: "per vinum et epulas",
            device: "Polysyndeton",
            effect: "Wine and feasting linked by 'et' (and) as dual agents of corruption. Creates atmosphere of dissolute luxury where normal moral boundaries dissolve. The pair work together to lower Nero's defences through accumulated indulgence."
        },
        style6: {
            title: "incalesceret",
            device: "Metaphor",
            effect: "The verb 'incalesceret' (was becoming heated) creates heat metaphor linking alcohol, temperature, and sexual arousal in crescendo of lost control. The imperfect tense shows gradual heating toward dangerous levels."
        },
        style7: {
            title: "comptam et incesto paratam",
            device: "Juxtaposition",
            effect: "Pairs careful grooming ('comptam' - adorned) with unspeakable purpose ('incesto paratam' - ready for incest). The shocking juxtaposition of beauty preparation and moral horror creates visceral disgust - she dresses specifically for the ultimate taboo."
        },
        style8: {
            title: "lasciva oscula",
            device: "Alliteration",
            effect: "The 'l' sounds in 'lasciva' (wanton) create linguistic sensuality. The loaded adjective transforms maternal kisses into sexual advances - maternal affection becomes predatory seduction through single word choice."
        },
        style9: {
            title: "Senecam",
            device: "Characterisation",
            effect: "Introduces the Stoic philosopher as voice of reason against base passion. Seneca represents philosophical wisdom confronting moral chaos - his intervention gives the scandal intellectual and ethical weight beyond mere gossip."
        },
        style10: {
            title: "contra muliebres inlecebras",
            device: "Metaphor (Military)",
            effect: "'Contra' (against) is military language, whilst 'muliebres inlecebras' (feminine enticements) genders the threat. This frames the situation as gender warfare requiring tactical response - woman as weapon requiring counter-strategy."
        },
        style11: {
            title: "subsidium a femina",
            device: "Irony",
            effect: "'Subsidium' (military reinforcement) from 'a femina' (from a woman) creates irony - seeking female help against female enticements. Fighting fire with fire in gendered battle for Nero's soul, using woman to combat woman."
        },
        style12: {
            title: "immissam",
            device: "Metaphor (Military)",
            effect: "'Immissam' (sent in) continues military metaphor - Acte deployed like troops into battle. The domestic drama becomes strategic military campaign, elevating a freedwoman's intervention to tactical operation against corruption."
        },
        style13: {
            title: "Acten libertam",
            device: "Apposition",
            effect: "The apposition 'libertam' (freedwoman) emphasises Acte's low status - former slave has more moral authority than patrician emperor's mother. Palace corruption has completely inverted normal Roman social hierarchies based on birth."
        },
        style14: {
            title: "Fabius Rusticus",
            device: "Source Citation",
            effect: "Names second historian to create historiographical complexity. Shows Tacitus weighing conflicting evidence, maintaining scholarly method. However, placement after Cluvius suggests secondary status - the alternative version is noted but not preferred."
        },
        style15: {
            title: "non Agrippinae sed Neroni",
            device: "Antithesis",
            effect: "The 'non... sed...' (not... but...) construction creates sharp antithesis, completely reversing moral dynamics. Nero becomes predator instead of victim, Agrippina target instead of aggressor - shows how sources reshape entire moral frameworks."
        },
        style16: {
            title: "et fama huc inclinat",
            device: "Personification",
            effect: "Rumour personified as rational judge 'leaning' toward truth. Yet Tacitus knows rumour typically favours the most scandalous version. By appealing to popular opinion as evidence, he appears balanced whilst supporting the damning interpretation."
        },
        style17: {
            title: "seu credibilior novae libidinis meditatio",
            device: "Rhetorical Balance (False)",
            effect: "The comparative 'credibilior' (more believable) appears balanced with 'seu... seu...' (whether... or...) whilst damning either way - guilty in fact or in character. Past sexual behaviour becomes proof of present depravity."
        },
        style18: {
            title: "pari cupidine",
            device: "Parallelism",
            effect: "'Pari' (equal) creates parallel structure suggesting each affair is equally degrading - no hierarchy exists in corruption. This implies insatiable, undiscriminating appetite that never diminishes, treating emperor and freedman with equal willingness."
        },
        style19: {
            title: "et exercita ad omne flagitium",
            device: "Metaphor",
            effect: "'Exercita' (practised, trained) creates athletic/military training metaphor - corruption as skill developed through repetition. She's not accidentally depraved but professionally trained in vice, expert through systematic practice in 'every disgrace'."
        },
        style20: {
            title: "patrui nuptiis",
            device: "Climax",
            effect: "Uncle-marriage ('patrui nuptiis') was already incestuous under Roman law. Tacitus ends with this as training for mother-son incest - showing climactic progression in taboo-breaking. Each violation prepares for the next, worse one."
        },
        style21: {
            title: "saepius",
            device: "Repetition (Implied)",
            effect: "The comparative adverb 'saepius' (quite often, rather frequently) emphasises habitual behaviour - this wasn't a single moment of weakness but repeated, deliberate attempts. The frequency suggests systematic campaign rather than impulse."
        },
        style22: {
            title: "iamque",
            device: "Temporal Transition",
            effect: "'Iamque' (and already) marks escalation from intent to action - the seduction has progressed from plan to physical reality. The temporal marker creates narrative momentum, showing corruption unfolding in real time."
        },
        style23: {
            title: "praenuntias flagitii",
            device: "Personification",
            effect: "The caresses are personified as 'praenuntias' (announcing beforehand) - they become prophets foretelling coming scandal. Physical signs transformed into omens of moral catastrophe, making the body itself bear witness."
        },
        style24: {
            title: "simul suo periculo et infamia Neronis",
            device: "Hendiadys",
            effect: "'Simul' (both/at the same time) links two motivations as equally weighted - Acte's self-preservation and concern for Nero's reputation. The pairing shows moral complexity - she acts from mixed but understandable motives."
        },
        style25: {
            title: "pervulgatum esse",
            device: "Passive Construction",
            effect: "The perfect passive 'pervulgatum esse' (to have been spread widely) emphasises the scandal's public nature without naming spreaders. The passive voice suggests rumour moves by itself - once released, it cannot be controlled."
        },
        style26: {
            title: "gloriante matre",
            device: "Ablative Absolute",
            effect: "The ablative absolute 'gloriante matre' (with the mother boasting) is positioned for maximum horror - Agrippina's pride in her corruption leads to exposure. Her boasting transforms private vice into public crisis."
        },
        style27: {
            title: "nec toleraturos milites",
            device: "Future Participle (Threat)",
            effect: "Future participle 'toleraturos' (will/would tolerate) makes military intolerance imminent and certain. Not a possibility but a coming reality - the threat is already in motion, waiting only for confirmation."
        },
        style28: {
            title: "profani principis",
            device: "Loaded Vocabulary",
            effect: "'Profani' (unholy, polluted) is religious language applied to political authority - incest makes Nero ritually impure, unfit for sacred imperial duties. Moral corruption becomes religious pollution requiring purification."
        },
        style29: {
            title: "astu",
            device: "Chiasmus (Implied)",
            effect: "'Astu' (by cleverness/cunning) contrasts with physical seduction - intelligence defeats physicality. Whilst Agrippina uses body, Acte uses mind. The contrast elevates Acte morally through superior weapons."
        },
        style30: {
            title: "disiectum",
            device: "Violent Metaphor",
            effect: "'Disiectum' (scattered, shattered) is violent military language - the plot is destroyed explosively. The metaphor suggests Acte doesn't merely prevent but demolishes the scheme with force."
        },
        style31: {
            title: "quae Cluvius eadem ceteri quoque auctores",
            device: "Polysyndeton",
            effect: "The accumulation 'Cluvius... eadem... ceteri quoque auctores' (Cluvius... the same... other authors also) creates impression of consensus through repeated elements. Multiple witnesses appear to confirm through linguistic piling."
        },
        style32: {
            title: "seu",
            device: "Disjunction",
            effect: "'Seu' (whether) introduces alternatives that appear balanced but both condemn - guilty in action or guilty in character. The construction creates false objectivity whilst ensuring condemnation either way."
        },
        style33: {
            title: "tantum immanitatis",
            device: "Hyperbole",
            effect: "'Tantum immanitatis' (so much monstrosity) uses extreme language - the genitive of quantity makes monstrosity measurable and excessive. Incest becomes inhuman in scope, beyond normal human depravity."
        },
        style34: {
            title: "puellaribus annis",
            device: "Temporal Marker",
            effect: "'Puellaribus annis' (in girlhood years) emphasises early corruption - sexual scheming from youth suggests innate rather than acquired vice. The temporal phrase makes depravity developmental, not circumstantial."
        },
        style35: {
            title: "spe dominationis",
            device: "Ablative of Cause",
            effect: "'Spe dominationis' (in hope of domination) reveals motive as purely political - sex was always transactional, never passionate. The ablative makes power the cause of every sexual relationship, reducing intimacy to calculation."
        },
        style36: {
            title: "libita Pallantis",
            device: "Loaded Vocabulary",
            effect: "'Libita' (whims, pleasures) suggests capricious sexual demands she satisfied without resistance. Combined with freedman Pallas's name, it shows complete social and moral inversion - patrician serving slave's desires."
        },
        style37: {
            title: "provoluta",
            device: "Metaphor (Physical)",
            effect: "'Provoluta' (prostrated, rolled forward) suggests physical abasement - literally throwing herself down. The metaphor makes sexual degradation visible, bodily - she doesn't just submit but prostrates herself."
        }
    },

    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Tacitus presents conflicting historical accounts of alleged incest between Agrippina and Nero. According to Cluvius, Agrippina initiated the seduction when Nero was drunk at midday banquets. Seneca intervened by sending Acte to warn Nero about spreading rumours and potential military revolt.</p>
            <p>Fabius Rusticus offers an alternative version where Nero initiated the incest, though Acte still prevented it. Tacitus notes most sources agree with Cluvius and adds Agrippina's sexual history as evidence: affairs with Lepidus and Pallas for power, and incestuous marriage to uncle Claudius.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>The Sources:</strong> Cluvius Rufus was a contemporary historian who likely knew the imperial family personally. Fabius Rusticus was Seneca's friend, explaining his version that exonerates Seneca's intervention.</p>
            <p><strong>The Characters:</strong> Acte was a real freedwoman who had been Nero's mistress before Poppaea. Her low status makes her moral superiority over Agrippina particularly striking.</p>
            <p><strong>Agrippina's Past:</strong> The references are historically attested: Marcus Lepidus was her brother-in-law with whom she allegedly conspired; Pallas was Claudius's powerful freedman secretary; her marriage to uncle Claudius required special senatorial dispensation as it violated Roman incest laws.</p>
            <p><strong>Military Concern:</strong> The emphasis on soldiers' reaction shows where real power lay - moral authority ultimately depended on military support.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>According to Cluvius, who initiated the alleged incest?</li>
                <li>When did Agrippina make her advances?</li>
                <li>What physical signs did courtiers notice?</li>
                <li>How did Seneca respond to the situation?</li>
                <li>What was Acte's role and status?</li>
                <li>What two dangers concerned Acte?</li>
                <li>How does Fabius Rusticus's version differ?</li>
                <li>Which version does Tacitus seem to favour? Why?</li>
                <li>What three past relationships does Tacitus mention?</li>
                <li>What was the motive behind each relationship?</li>
            </ul>
        `,
        sources: `
            <h4>Source Analysis</h4>
            <p><strong>Historiographical Method:</strong> Tacitus explicitly names his sources, creating apparent objectivity whilst clearly favouring one version. This technique allows him to present scandal whilst maintaining scholarly distance.</p>
            <p><strong>Source Bias:</strong> Cluvius Rufus was writing under the Flavians when vilifying Nero was safe. Fabius Rusticus's friendship with Seneca explains his version protecting Seneca's reputation.</p>
            <p><strong>The Role of Rumour:</strong> Tacitus notes "fama huc inclinat" (rumour inclines this way) - popular opinion becomes evidence, though rumour typically favours the most scandalous version.</p>
            <p><strong>Character Evidence:</strong> Tacitus uses Agrippina's sexual history as "proof" - past behaviour determines present credibility. This is character assassination disguised as logical deduction.</p>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Power Through Sex:</strong> Every sexual relationship Agrippina has is transactional - body as political currency. From Lepidus to Pallas to Claudius to (allegedly) Nero, sex serves power.</p>
            <p><strong>Gender Warfare:</strong> "Contra muliebres inlecebras subsidium a femina" - woman fights woman. The battle is gendered, with feminine corruption requiring feminine intervention.</p>
            <p><strong>Social Inversion:</strong> A freedwoman (Acte) has more moral authority than a patrician mother. The palace has inverted normal social hierarchies through corruption.</p>
            <p><strong>Public vs Private:</strong> "Pervulgatum esse incestum" - private shame becomes public knowledge. The scandal's exposure matters more than its truth.</p>
            <p><strong>Military Legitimacy:</strong> Ultimately, soldiers' tolerance determines imperial legitimacy. Moral authority rests on military support, not senatorial approval.</p>
        `,
        extension: `
            <h4>Extension Activities</h4>
            <p><strong>Comparison:</strong> Compare this passage with Suetonius's account of the same allegations (Nero 28). How do the versions differ? What does this reveal about ancient historiography?</p>
            <p><strong>Source Criticism:</strong> Research Cluvius Rufus and Fabius Rusticus. What other events do they describe differently? How does knowing their backgrounds affect our reading?</p>
            <p><strong>Gender Analysis:</strong> Track how Tacitus describes female sexuality throughout the Annals. Is Agrippina unique, or part of a pattern?</p>
            <p><strong>Literary Analysis:</strong> Examine Tacitus's use of indirect statement throughout this passage. How does grammatical distance affect our perception of the events?</p>
            <p><strong>Creative Task:</strong> Write Acte's speech to Nero warning him about the rumours. What arguments would be most effective?</p>
        `
    }
};
