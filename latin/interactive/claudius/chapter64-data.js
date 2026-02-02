// Tacitus Annals 12.64 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "In the consulship of Marcus Asinius and Manius Acilius, it was recognised by frequent prodigies that a change of affairs for the worse was being portended. Military standards and tents were burned by fire from heaven; a swarm of bees settled on the pediment of the Capitol; it was reported that two-formed human offspring had been born and a pig's litter produced in which there were hawk's talons. Among the omens was counted the diminished number of all the magistrates, since a quaestor, aedile, tribune, praetor, and consul had died within a few months. But Agrippina was in particular dread, fearing an utterance of Claudius, which he had let fall when drunk, that it was his fate to endure the disgraceful conduct of his wives and then to punish them, and she decided to act and to act quickly, having first destroyed Domitia Lepida for womanly reasons, because Lepida, born from the younger Antonia, with Augustus as her great-uncle, a first cousin once removed of Agrippina and sister of her husband Gnaeus, believed herself equal in distinction to Agrippina. Nor were they very different in beauty, age, or wealth; and both shameless, infamous, and violent, they competed no less in their vices than in whatever advantages they had received from fortune. Indeed the fiercest contest was whether aunt or mother should prevail with Nero: for Lepida was binding the young man's mind by flatteries and gifts, while Agrippina on the contrary was harsh and threatening, who could give empire to her son but could not tolerate him as emperor.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')">M. Asinio M'. Acilio consulibus</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">mutationem rerum in deterius portendi</span></span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">cognitum est <span class="highlight-style style-2" onclick="showAnalysis('style2')">crebris prodigiis</span></span>.
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')"><span class="highlight-style style-3" onclick="showAnalysis('style3')">signa ac tentoria militum igne caelesti arsere</span></span>;
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">fastigio Capitolii examen apium insedit</span>;
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">biformis hominum partus</span>
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">et suis fetum editum cui accipitrum ungues inessent</span>.
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')"><span class="highlight-style style-4" onclick="showAnalysis('style4')">numerabatur inter ostenta deminutus omnium magistratuum numerus</span></span>,
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">quaestore, aedili, tribuno ac praetore et consule paucos intra mensis defunctis</span>.
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">sed in praecipuo pavore Agrippina</span>,
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">vocem Claudii, quam temulentus iecerat</span>,
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">fatale sibi ut coniugum flagitia ferret, dein puniret</span></span>,
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">metuens, <span class="highlight-style style-6" onclick="showAnalysis('style6')">agere et celerare</span> statuit</span>,
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">perdita prius Domitia Lepida muliebribus causis</span>,
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')">quia Lepida minore Antonia genita, avunculo Augusto</span>,
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')">Agrippinae sobrina prior ac Gnaei mariti eius soror</span>,
        <span class="phrase phrase-17" onclick="showAnalysis('phrase17')">parem sibi claritudinem credebat</span>.
        <span class="phrase phrase-18" onclick="showAnalysis('phrase18')"><span class="highlight-style style-7" onclick="showAnalysis('style7')">nec forma aetas opes multum distabant</span></span>;
        <span class="phrase phrase-19" onclick="showAnalysis('phrase19')"><span class="highlight-style style-8" onclick="showAnalysis('style8')">et utraque impudica, infamis, violenta</span></span>,
        <span class="phrase phrase-20" onclick="showAnalysis('phrase20')">haud minus vitiis aemulabantur quam si qua ex fortuna prospera acceperant</span>.
        <span class="phrase phrase-21" onclick="showAnalysis('phrase21')"><span class="highlight-style style-9" onclick="showAnalysis('style9')">enimvero certamen acerrimum</span></span>,
        <span class="phrase phrase-22" onclick="showAnalysis('phrase22')">amita potius an mater apud Neronem praevaleret</span>:
        <span class="phrase phrase-23" onclick="showAnalysis('phrase23')">nam Lepida <span class="highlight-style style-10" onclick="showAnalysis('style10')">blandimentis ac largitionibus</span> iuvenilem animum devinciebat</span>,
        <span class="phrase phrase-24" onclick="showAnalysis('phrase24')"><span class="highlight-style style-11" onclick="showAnalysis('style11')">truci contra ac minaci</span> Agrippina</span>,
        <span class="phrase phrase-25" onclick="showAnalysis('phrase25')"><span class="highlight-style style-12" onclick="showAnalysis('style12')">quae filio dare imperium, tolerare imperitantem nequibat</span></span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "M. Asinio M'. Acilio consulibus",
            vocab: [
                "<strong>M.</strong> = Marcus (abbreviated praenomen)",
                "<strong>Asinio</strong> = Asinius (ablative)",
                "<strong>M'.</strong> = Manius (abbreviated praenomen)",
                "<strong>Acilio</strong> = Acilius (ablative)",
                "<strong>consulibus</strong> = consuls (ablative plural)"
            ],
            grammar: "Ablative absolute construction used for dating the year (AD 54). This formal opening establishes the historical context and gives the passage documentary authority.",
            translation: "In the consulship of Marcus Asinius and Manius Acilius"
        },
        phrase2: {
            title: "mutationem rerum in deterius portendi",
            vocab: [
                "<strong>mutationem</strong> = change (accusative singular)",
                "<strong>rerum</strong> = of affairs, of things (genitive plural)",
                "<strong>in</strong> = into, towards (+ accusative)",
                "<strong>deterius</strong> = worse (comparative neuter)",
                "<strong>portendi</strong> = to be portended (present passive infinitive)"
            ],
            grammar: "Accusative and infinitive construction, subject of 'cognitum est'. The phrase 'in deterius' is a common idiom meaning 'for the worse'.",
            translation: "that a change of affairs for the worse was being portended"
        },
        phrase3: {
            title: "cognitum est crebris prodigiis",
            vocab: [
                "<strong>cognitum est</strong> = it was recognised, it became known (perfect passive)",
                "<strong>crebris</strong> = frequent, numerous (ablative plural)",
                "<strong>prodigiis</strong> = by prodigies, omens (ablative plural)"
            ],
            grammar: "Perfect passive with ablative of means. 'Prodigia' were supernatural signs requiring expiation through religious rituals.",
            translation: "it was recognised by frequent prodigies"
        },
        phrase4: {
            title: "signa ac tentoria militum igne caelesti arsere",
            vocab: [
                "<strong>signa</strong> = standards, ensigns (nominative plural)",
                "<strong>ac</strong> = and",
                "<strong>tentoria</strong> = tents (nominative plural)",
                "<strong>militum</strong> = of the soldiers (genitive plural)",
                "<strong>igne</strong> = by fire (ablative)",
                "<strong>caelesti</strong> = heavenly, from the sky (ablative)",
                "<strong>arsere</strong> = burned, were set on fire (perfect, = arserunt)"
            ],
            grammar: "First specific prodigy listed. 'arsere' is a contracted form of 'arserunt'. Lightning striking military equipment was particularly ominous, suggesting divine displeasure with Rome's military power.",
            translation: "military standards and tents were burned by fire from heaven"
        },
        phrase5: {
            title: "fastigio Capitolii examen apium insedit",
            vocab: [
                "<strong>fastigio</strong> = on the pediment, on the gable (dative/ablative)",
                "<strong>Capitolii</strong> = of the Capitol (genitive)",
                "<strong>examen</strong> = swarm (nominative)",
                "<strong>apium</strong> = of bees (genitive plural)",
                "<strong>insedit</strong> = settled upon (perfect)"
            ],
            grammar: "The Capitol was Rome's most sacred religious site. Bees swarming there was interpreted as an omen of political upheaval or change in leadership.",
            translation: "a swarm of bees settled on the pediment of the Capitol"
        },
        phrase6: {
            title: "biformis hominum partus",
            vocab: [
                "<strong>biformis</strong> = two-formed, having two shapes (nominative)",
                "<strong>hominum</strong> = of humans (genitive plural)",
                "<strong>partus</strong> = offspring, birth (nominative singular)"
            ],
            grammar: "Subject of an implied verb (perhaps 'nuntiatus est' - 'was reported'). Monstrous births were standard portents in Roman religious thinking.",
            translation: "two-formed human offspring (were reported)"
        },
        phrase7: {
            title: "et suis fetum editum cui accipitrum ungues inessent",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>suis</strong> = of a pig (genitive)",
                "<strong>fetum</strong> = offspring, litter (nominative/accusative)",
                "<strong>editum</strong> = produced, brought forth (perfect passive participle)",
                "<strong>cui</strong> = in which, to which (dative)",
                "<strong>accipitrum</strong> = of hawks (genitive plural)",
                "<strong>ungues</strong> = talons, claws (nominative plural)",
                "<strong>inessent</strong> = were present (imperfect subjunctive)"
            ],
            grammar: "Relative clause with subjunctive ('inessent') in reported speech. The mixture of pig and hawk features would signify unnatural combination of characteristics.",
            translation: "and a pig's litter was produced in which there were hawk's talons"
        },
        phrase8: {
            title: "numerabatur inter ostenta deminutus omnium magistratuum numerus",
            vocab: [
                "<strong>numerabatur</strong> = was counted (imperfect passive)",
                "<strong>inter</strong> = among (+ accusative)",
                "<strong>ostenta</strong> = omens, portents (accusative plural)",
                "<strong>deminutus</strong> = diminished, reduced (nominative)",
                "<strong>omnium</strong> = of all (genitive plural)",
                "<strong>magistratuum</strong> = of magistrates (genitive plural)",
                "<strong>numerus</strong> = number (nominative)"
            ],
            grammar: "The deaths of multiple magistrates within a short period was seen as a sign that the state itself was failing.",
            translation: "the diminished number of all the magistrates was counted among the omens"
        },
        phrase9: {
            title: "quaestore, aedili, tribuno ac praetore et consule paucos intra mensis defunctis",
            vocab: [
                "<strong>quaestore</strong> = quaestor (ablative)",
                "<strong>aedili</strong> = aedile (ablative)",
                "<strong>tribuno</strong> = tribune (ablative)",
                "<strong>praetore</strong> = praetor (ablative)",
                "<strong>consule</strong> = consul (ablative)",
                "<strong>paucos</strong> = few (accusative plural)",
                "<strong>intra</strong> = within (+ accusative)",
                "<strong>mensis</strong> = months (accusative plural)",
                "<strong>defunctis</strong> = having died (perfect participle, ablative plural)"
            ],
            grammar: "Ablative absolute explaining the previous clause. The list covers the major Roman magistracies, emphasising the completeness of the losses.",
            translation: "since a quaestor, aedile, tribune, praetor, and consul had died within a few months"
        },
        phrase10: {
            title: "sed in praecipuo pavore Agrippina",
            vocab: [
                "<strong>sed</strong> = but",
                "<strong>in</strong> = in (+ ablative)",
                "<strong>praecipuo</strong> = particular, special (ablative)",
                "<strong>pavore</strong> = dread, terror (ablative)",
                "<strong>Agrippina</strong> = Agrippina (nominative)"
            ],
            grammar: "Transition from public omens to Agrippina's private fears. The subject 'Agrippina' is delayed to the end for emphasis.",
            translation: "but Agrippina was in particular dread"
        },
        phrase11: {
            title: "vocem Claudii, quam temulentus iecerat",
            vocab: [
                "<strong>vocem</strong> = utterance, words (accusative)",
                "<strong>Claudii</strong> = of Claudius (genitive)",
                "<strong>quam</strong> = which (accusative feminine)",
                "<strong>temulentus</strong> = drunk, intoxicated (nominative)",
                "<strong>iecerat</strong> = had let fall, had uttered (pluperfect)"
            ],
            grammar: "Object of 'metuens'. 'temulentus' characterises Claudius as having spoken imprudently while drunk, yet also with prophetic truth.",
            translation: "an utterance of Claudius, which he had let fall when drunk"
        },
        phrase12: {
            title: "fatale sibi ut coniugum flagitia ferret, dein puniret",
            vocab: [
                "<strong>fatale</strong> = fated, destined (accusative neuter)",
                "<strong>sibi</strong> = for himself (dative)",
                "<strong>ut</strong> = that (introducing result/noun clause)",
                "<strong>coniugum</strong> = of wives (genitive plural)",
                "<strong>flagitia</strong> = disgraceful acts (accusative plural)",
                "<strong>ferret</strong> = he should endure (imperfect subjunctive)",
                "<strong>dein</strong> = then, afterwards",
                "<strong>puniret</strong> = he should punish (imperfect subjunctive)"
            ],
            grammar: "Indirect statement giving the content of Claudius' prophecy. The 'ut' clause explains what was 'fatale'. This foreshadows both Messalina's execution and Agrippina's eventual fate.",
            translation: "that it was his fate to endure the disgraceful conduct of his wives and then to punish them"
        },
        phrase13: {
            title: "metuens, agere et celerare statuit",
            vocab: [
                "<strong>metuens</strong> = fearing (present participle, nominative)",
                "<strong>agere</strong> = to act (infinitive)",
                "<strong>et</strong> = and",
                "<strong>celerare</strong> = to hasten, to act quickly (infinitive)",
                "<strong>statuit</strong> = she decided (perfect)"
            ],
            grammar: "The complementary infinitives 'agere et celerare' show Agrippina's decisive character. The hendiadys emphasises urgency.",
            translation: "fearing this, she decided to act and to act quickly"
        },
        phrase14: {
            title: "perdita prius Domitia Lepida muliebribus causis",
            vocab: [
                "<strong>perdita</strong> = having destroyed (perfect passive participle, ablative absolute)",
                "<strong>prius</strong> = first, beforehand",
                "<strong>Domitia Lepida</strong> = Domitia Lepida (ablative)",
                "<strong>muliebribus</strong> = womanly, feminine (ablative plural)",
                "<strong>causis</strong> = for reasons (ablative plural)"
            ],
            grammar: "Ablative absolute expressing the first step in Agrippina's plan. 'muliebribus causis' suggests the rivalry was about female concerns like status and influence.",
            translation: "having first destroyed Domitia Lepida for womanly reasons"
        },
        phrase15: {
            title: "quia Lepida minore Antonia genita, avunculo Augusto",
            vocab: [
                "<strong>quia</strong> = because",
                "<strong>Lepida</strong> = Lepida (nominative)",
                "<strong>minore</strong> = younger (ablative)",
                "<strong>Antonia</strong> = Antonia (ablative - ablative of origin)",
                "<strong>genita</strong> = born (perfect passive participle)",
                "<strong>avunculo</strong> = great-uncle (ablative)",
                "<strong>Augusto</strong> = Augustus (ablative)"
            ],
            grammar: "Ablatives of origin. Antonia Minor was the daughter of Mark Antony and Octavia (Augustus' sister), making Augustus Lepida's great-uncle.",
            translation: "because Lepida, born from the younger Antonia, with Augustus as her great-uncle"
        },
        phrase16: {
            title: "Agrippinae sobrina prior ac Gnaei mariti eius soror",
            vocab: [
                "<strong>Agrippinae</strong> = of Agrippina (genitive)",
                "<strong>sobrina prior</strong> = first cousin once removed (nominative)",
                "<strong>ac</strong> = and",
                "<strong>Gnaei</strong> = of Gnaeus (genitive - Cn. Domitius Ahenobarbus)",
                "<strong>mariti</strong> = husband (genitive)",
                "<strong>eius</strong> = her (genitive)",
                "<strong>soror</strong> = sister (nominative)"
            ],
            grammar: "Lepida was both related to Agrippina by blood and was the sister of Agrippina's first husband (Nero's father), creating complex family dynamics.",
            translation: "a first cousin once removed of Agrippina and sister of her husband Gnaeus"
        },
        phrase17: {
            title: "parem sibi claritudinem credebat",
            vocab: [
                "<strong>parem</strong> = equal (accusative)",
                "<strong>sibi</strong> = for herself (dative)",
                "<strong>claritudinem</strong> = distinction, fame (accusative)",
                "<strong>credebat</strong> = she believed (imperfect)"
            ],
            grammar: "The imperfect 'credebat' shows this was Lepida's ongoing attitude, not a one-time thought. Her claim to equal status was the root cause of the rivalry.",
            translation: "believed herself equal in distinction"
        },
        phrase18: {
            title: "nec forma aetas opes multum distabant",
            vocab: [
                "<strong>nec</strong> = nor, and... not",
                "<strong>forma</strong> = beauty (nominative)",
                "<strong>aetas</strong> = age (nominative)",
                "<strong>opes</strong> = wealth, resources (nominative plural)",
                "<strong>multum</strong> = much (adverb)",
                "<strong>distabant</strong> = they differed, were distant (imperfect)"
            ],
            grammar: "Asyndeton (lack of conjunctions between 'forma aetas opes') creates a rapid, punchy list. The women were evenly matched in all the markers of Roman female status.",
            translation: "nor were they very different in beauty, age, or wealth"
        },
        phrase19: {
            title: "et utraque impudica, infamis, violenta",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>utraque</strong> = both (nominative feminine)",
                "<strong>impudica</strong> = shameless, unchaste (nominative)",
                "<strong>infamis</strong> = infamous, disreputable (nominative)",
                "<strong>violenta</strong> = violent (nominative)"
            ],
            grammar: "Tricolon of damning adjectives. Tacitus condemns both women equally, presenting their conflict as a clash of vices.",
            translation: "and both were shameless, infamous, and violent"
        },
        phrase20: {
            title: "haud minus vitiis aemulabantur quam si qua ex fortuna prospera acceperant",
            vocab: [
                "<strong>haud minus</strong> = no less",
                "<strong>vitiis</strong> = in vices (ablative)",
                "<strong>aemulabantur</strong> = they competed, rivalled (imperfect deponent)",
                "<strong>quam</strong> = than",
                "<strong>si qua</strong> = if any, whatever",
                "<strong>ex</strong> = from (+ ablative)",
                "<strong>fortuna</strong> = fortune (ablative)",
                "<strong>prospera</strong> = favourable (ablative)",
                "<strong>acceperant</strong> = they had received (pluperfect)"
            ],
            grammar: "A pointed observation: they competed in their faults as intensely as in their advantages. 'si qua' adds dismissive tone to their good qualities.",
            translation: "they competed no less in their vices than in whatever advantages they had received from fortune"
        },
        phrase21: {
            title: "enimvero certamen acerrimum",
            vocab: [
                "<strong>enimvero</strong> = indeed, in truth",
                "<strong>certamen</strong> = contest, struggle (nominative)",
                "<strong>acerrimum</strong> = fiercest, most bitter (superlative, nominative)"
            ],
            grammar: "Short, emphatic sentence fragment. The superlative 'acerrimum' intensifies the drama of their rivalry.",
            translation: "indeed the fiercest contest was"
        },
        phrase22: {
            title: "amita potius an mater apud Neronem praevaleret",
            vocab: [
                "<strong>amita</strong> = paternal aunt (nominative)",
                "<strong>potius</strong> = rather",
                "<strong>an</strong> = or (in indirect question)",
                "<strong>mater</strong> = mother (nominative)",
                "<strong>apud</strong> = with, in the presence of (+ accusative)",
                "<strong>Neronem</strong> = Nero (accusative)",
                "<strong>praevaleret</strong> = should prevail (imperfect subjunctive)"
            ],
            grammar: "Indirect question with deliberative subjunctive. Lepida was Nero's aunt (his father's sister), while Agrippina was his mother.",
            translation: "whether aunt or mother should prevail with Nero"
        },
        phrase23: {
            title: "nam Lepida blandimentis ac largitionibus iuvenilem animum devinciebat",
            vocab: [
                "<strong>nam</strong> = for",
                "<strong>Lepida</strong> = Lepida (nominative)",
                "<strong>blandimentis</strong> = with flatteries, blandishments (ablative plural)",
                "<strong>ac</strong> = and",
                "<strong>largitionibus</strong> = with gifts, generosity (ablative plural)",
                "<strong>iuvenilem</strong> = youthful (accusative)",
                "<strong>animum</strong> = mind, spirit (accusative)",
                "<strong>devinciebat</strong> = was binding, was winning over (imperfect)"
            ],
            grammar: "Ablatives of means. Lepida's approach was seduction through indulgence - the 'cool aunt' strategy against the strict mother.",
            translation: "for Lepida was binding the young man's mind by flatteries and gifts"
        },
        phrase24: {
            title: "truci contra ac minaci Agrippina",
            vocab: [
                "<strong>truci</strong> = harsh, stern (ablative feminine)",
                "<strong>contra</strong> = on the contrary, in contrast (adverb)",
                "<strong>ac</strong> = and",
                "<strong>minaci</strong> = threatening (ablative feminine)",
                "<strong>Agrippina</strong> = Agrippina (ablative or nominative)"
            ],
            grammar: "Ablative of description or ablative absolute. The adjectives 'truci' and 'minaci' directly contrast with Lepida's 'blandimentis ac largitionibus'.",
            translation: "while Agrippina on the contrary was harsh and threatening"
        },
        phrase25: {
            title: "quae filio dare imperium, tolerare imperitantem nequibat",
            vocab: [
                "<strong>quae</strong> = who (nominative feminine)",
                "<strong>filio</strong> = to her son (dative)",
                "<strong>dare</strong> = to give (infinitive)",
                "<strong>imperium</strong> = power, empire (accusative)",
                "<strong>tolerare</strong> = to tolerate, endure (infinitive)",
                "<strong>imperitantem</strong> = one ruling, him as ruler (present participle, accusative)",
                "<strong>nequibat</strong> = she was unable (imperfect)"
            ],
            grammar: "Paradoxical antithesis: Agrippina could make Nero emperor but could not accept him actually being emperor. This foreshadows their later conflict.",
            translation: "who could give empire to her son but could not tolerate him as emperor"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "mutationem rerum in deterius portendi",
            device: "Foreshadowing",
            effect: "The phrase 'change for the worse' sets an ominous tone for the entire chapter, preparing readers for the death of Claudius and rise of Nero that follows."
        },
        style2: {
            title: "crebris prodigiis",
            device: "Ablative of Means",
            effect: "The frequency of omens ('crebris') emphasises the severity of the coming crisis. Multiple prodigies were more alarming than isolated incidents."
        },
        style3: {
            title: "signa ac tentoria militum igne caelesti arsere",
            device: "Symbolic Imagery",
            effect: "Lightning destroying military equipment suggests divine anger with Rome's military-political establishment, symbolically attacking the pillars of imperial power."
        },
        style4: {
            title: "numerabatur inter ostenta deminutus omnium magistratuum numerus",
            device: "Polyptoton",
            effect: "The repetition of 'numerabatur... numerus' (counted... number) creates verbal emphasis on the counting itself, highlighting the systematic nature of the losses."
        },
        style5: {
            title: "fatale sibi ut coniugum flagitia ferret, dein puniret",
            device: "Dramatic Irony",
            effect: "Claudius' drunken prophecy proves accurate - he had already punished Messalina, and Agrippina would later be killed by Nero. Wine reveals truth (in vino veritas)."
        },
        style6: {
            title: "agere et celerare",
            device: "Hendiadys",
            effect: "Two verbs expressing a single urgent idea: 'to act quickly'. This captures Agrippina's decisive, ruthless character."
        },
        style7: {
            title: "nec forma aetas opes multum distabant",
            device: "Asyndeton",
            effect: "The absence of conjunctions between 'forma aetas opes' creates a rapid, list-like effect, suggesting the women were evenly matched in every metric of female status."
        },
        style8: {
            title: "et utraque impudica, infamis, violenta",
            device: "Tricolon with Asyndeton",
            effect: "Three damning adjectives in ascending order of severity condemn both women equally. Tacitus presents their conflict as a clash of equal vices."
        },
        style9: {
            title: "enimvero certamen acerrimum",
            device: "Emphatic Fragment",
            effect: "This short, punchy sentence creates a dramatic pause before revealing the nature of the contest. The superlative 'acerrimum' heightens the drama."
        },
        style10: {
            title: "blandimentis ac largitionibus",
            device: "Alliteration and Hendiadys",
            effect: "The paired terms with similar endings describe Lepida's seductive approach - indulgence and gifts to win over the teenage Nero."
        },
        style11: {
            title: "truci contra ac minaci",
            device: "Antithesis",
            effect: "These harsh adjectives directly contrast with Lepida's 'blandimentis ac largitionibus', presenting the two women as opposite in method if not in character."
        },
        style12: {
            title: "quae filio dare imperium, tolerare imperitantem nequibat",
            device: "Paradox and Chiasmus",
            effect: "The brilliant paradox - able to give power but unable to accept it being used - encapsulates Agrippina's fatal flaw. The chiastic structure (dare imperium / tolerare imperitantem) emphasises the contradiction."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>The chapter opens with a catalogue of <em>prodigia</em> (omens) indicating that disaster approaches: lightning strikes military equipment, bees swarm on the Capitol, monstrous births are reported, and magistrates die in unusual numbers.</p>
            <p>Agrippina, however, fears something more specific: a drunken remark by Claudius that it was his fate to suffer his wives' misconduct and then punish them. She decides to act quickly, first eliminating her rival Domitia Lepida.</p>
            <p>Tacitus explains the rivalry: Lepida had comparable lineage, beauty, age, and wealth. Both women were equally vicious. The central conflict was whether aunt or mother would have greater influence over the young Nero - Lepida through indulgence, Agrippina through domination.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>Prodigia:</strong> Romans took omens seriously. Unusual events required official interpretation by the <em>pontifices</em> and often demanded religious expiation. Multiple prodigies in a short period signalled severe divine displeasure.</p>
            <p><strong>Domitia Lepida:</strong> She was the daughter of Antonia Minor (daughter of Mark Antony and Octavia), making Augustus her great-uncle. She was also the sister of Gnaeus Domitius Ahenobarbus, Nero's father and Agrippina's first husband.</p>
            <p><strong>Claudius' Wives:</strong> Claudius had been married four times. His third wife Messalina had been executed for bigamy and treason. His fourth wife Agrippina would allegedly poison him and later be killed by their son Nero.</p>
            <p><strong>AD 54:</strong> This was the final year of Claudius' reign. He would die in October, allegedly poisoned by Agrippina using mushrooms.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>What prodigies are listed at the beginning of the chapter?</li>
                <li>Why was the death of magistrates considered an omen?</li>
                <li>What had Claudius said when drunk that frightened Agrippina?</li>
                <li>Who was Domitia Lepida and how was she related to Agrippina?</li>
                <li>What did Lepida believe about her own status?</li>
                <li>In what ways were Agrippina and Lepida similar?</li>
                <li>How did their methods of influencing Nero differ?</li>
                <li>What paradox does Tacitus identify in Agrippina's character?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>Why does Tacitus begin with the catalogue of omens? What effect does this create?</li>
                <li>What is the significance of Claudius speaking the truth while drunk (<em>temulentus</em>)?</li>
                <li>How does the phrase <em>muliebribus causis</em> ('for womanly reasons') characterise the rivalry?</li>
                <li>Why does Tacitus list so many similarities between the two women before their differences?</li>
                <li>What is the effect of the tricolon <em>impudica, infamis, violenta</em>?</li>
                <li>How does the final paradox about Agrippina foreshadow future events?</li>
                <li>What does this passage reveal about Tacitus' attitude towards powerful women?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Omens and Fate:</strong> The prodigies suggest divine foreknowledge of disaster, while Claudius' drunken prophecy proves accurate. The chapter explores whether the future is predetermined.</p>
            <p><strong>Female Rivalry:</strong> The conflict between Agrippina and Lepida is presented as fundamentally about female competition - status, influence over men, and power through relationships.</p>
            <p><strong>Appearance vs Reality:</strong> Both women appear noble and distinguished but are equally vicious. Claudius speaks truth when drunk, not when sober.</p>
            <p><strong>Power and its Limits:</strong> The final paradox encapsulates the tragedy of Agrippina: she can create an emperor but cannot control one. Power given becomes power lost.</p>
            <p><strong>Moral Decline:</strong> The catalogue of omens and the portrait of female corruption suggest Rome is in moral crisis, foreshadowing the disasters of Nero's reign.</p>
        `
    }
};
