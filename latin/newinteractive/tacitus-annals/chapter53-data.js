// Tacitus Annals 12.53 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "Amid these events, he referred to the Senate a proposal concerning the punishment of women who formed unions with slaves; and it was decreed that those who had slipped into such relationships without the knowledge of the master should be held in slavery, but if he had consented, they should be regarded as freedwomen. To Pallas, whom the emperor had declared to be the author of this proposal, the consul-designate Barea Soranus proposed praetorian insignia and fifteen million sesterces. Scipio Cornelius added that public thanks should be given to him, because, though descended from the kings of Arcadia, he set aside his most ancient nobility for the public good and allowed himself to be counted among the emperor's servants. Claudius asserted that Pallas was content with the honour alone and would remain within his former poverty. And the Senate's decree, in which a freedman possessing three hundred million sesterces was heaped with praises for his old-fashioned thrift, was fixed up in public bronze.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">inter quae</span> refert <span class="highlight-style style-2" onclick="showAnalysis('style2')">ad patres</span></span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">de poena feminarum quae servis coniungerentur</span>;
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">statuiturque ut <span class="highlight-style style-3" onclick="showAnalysis('style3')">ignaro domino</span> ad id prolapsae in servitute</span>,
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">sin consensisset, pro libertis haberentur</span>.
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">Pallanti, quem <span class="highlight-style style-4" onclick="showAnalysis('style4')">repertorem</span> eius relationis ediderat Caesar</span>,
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">praetoria insignia</span> et <span class="highlight-style style-6" onclick="showAnalysis('style6')">centies quinquagies sestertium</span> censuit consul designatus Barea Soranus</span>.
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">additum a Scipione Cornelio</span>
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')"><span class="highlight-style style-7" onclick="showAnalysis('style7')">grates publice agendas</span></span>,
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">quod <span class="highlight-style style-8" onclick="showAnalysis('style8')">regibus Arcadiae ortus</span></span>
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')"><span class="highlight-style style-9" onclick="showAnalysis('style9')">veterrimam nobilitatem</span> usui publico postponeret</span>
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">seque inter <span class="highlight-style style-10" onclick="showAnalysis('style10')">ministros principis</span> haberi sineret</span>.
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">adseveravit Claudius <span class="highlight-style style-11" onclick="showAnalysis('style11')">contentum honore</span> Pallantem</span>
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">intra <span class="highlight-style style-12" onclick="showAnalysis('style12')">priorem paupertatem</span> subsistere</span>.
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">et fixum est aere publico senatus consultum</span>
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')">quo <span class="highlight-style style-13" onclick="showAnalysis('style13')">libertinus sestertii ter milies possessor</span></span>
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')"><span class="highlight-style style-14" onclick="showAnalysis('style14')">antiquae parsimoniae</span> laudibus cumulabatur</span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "inter quae refert ad patres",
            vocab: [
                "<strong>inter</strong> (prep. + acc.) = amid, among, during",
                "<strong>quae</strong> (rel. pron., neut. acc. pl.) = which things, these events",
                "<strong>refert</strong> (refero, referre, rettuli, relatum) = he refers, he brings back (3rd sing. pres. ind. act.)",
                "<strong>ad</strong> (prep. + acc.) = to",
                "<strong>patres</strong> (pater, patris, m., acc. pl.) = the fathers, i.e. the senators"
            ],
            grammar: "The subject of 'refert' is Claudius, understood from context. 'Patres' is a formal, traditional term for senators (patres conscripti), lending the Senate an air of authority which contrasts ironically with their servile behaviour.",
            translation: "Amid these events, he referred to the Senate"
        },
        phrase2: {
            title: "de poena feminarum quae servis coniungerentur",
            vocab: [
                "<strong>de</strong> (prep. + abl.) = concerning, about",
                "<strong>poena</strong> (poena, -ae, f., abl. sing.) = punishment, penalty",
                "<strong>feminarum</strong> (femina, -ae, f., gen. pl.) = of women",
                "<strong>quae</strong> (rel. pron., fem. nom. pl.) = who",
                "<strong>servis</strong> (servus, -i, m., dat./abl. pl.) = with slaves (dative after coniungerentur)",
                "<strong>coniungerentur</strong> (coniungo, -ere, -iunxi, -iunctum) = would form unions, would be joined (3rd pl. impf. subj. pass.)"
            ],
            grammar: "Relative clause of characteristic with subjunctive ('quae... coniungerentur') - describing a type of woman, not specific individuals. The imperfect subjunctive indicates ongoing or repeated action in secondary sequence.",
            translation: "concerning the punishment of women who formed unions with slaves"
        },
        phrase3: {
            title: "statuiturque ut ignaro domino ad id prolapsae in servitute",
            vocab: [
                "<strong>statuitur</strong> (statuo, -ere, statui, statutum) = it is decreed, it is established (3rd sing. pres. ind. pass.)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>ut</strong> (conj.) = that (introducing noun clause)",
                "<strong>ignaro</strong> (ignarus, -a, -um, abl. masc. sing.) = ignorant, unaware",
                "<strong>domino</strong> (dominus, -i, m., abl. sing.) = master",
                "<strong>ad</strong> (prep. + acc.) = to, into",
                "<strong>id</strong> (is, ea, id, acc. neut. sing.) = this, that (referring to the union)",
                "<strong>prolapsae</strong> (prolabor, prolabi, prolapsus sum) = having slipped, having fallen (perf. part. nom. fem. pl.)",
                "<strong>in</strong> (prep. + abl.) = in, into",
                "<strong>servitute</strong> (servitus, -utis, f., abl. sing.) = slavery, servitude"
            ],
            grammar: "Ablative absolute: 'ignaro domino' (with the master being unaware). 'Prolapsae' is a perfect participle (deponent verb) agreeing with the understood subject (feminae). The main verb of the result clause is understood (e.g., 'essent' or 'haberentur').",
            translation: "and it was decreed that those who had slipped into this without the master's knowledge should be held in slavery"
        },
        phrase4: {
            title: "sin consensisset, pro libertis haberentur",
            vocab: [
                "<strong>sin</strong> (conj.) = but if, if however",
                "<strong>consensisset</strong> (consentio, -ire, -sensi, -sensum) = he had consented (3rd sing. plpf. subj. act.)",
                "<strong>pro</strong> (prep. + abl.) = as, in place of, in return for",
                "<strong>libertis</strong> (libertus, -i, m., abl. pl.) = freedwomen/freedmen",
                "<strong>haberentur</strong> (habeo, habere, habui, habitum) = they should be regarded, they should be held (3rd pl. impf. subj. pass.)"
            ],
            grammar: "Conditional clause in indirect statement: 'sin' introduces the alternative condition. The pluperfect subjunctive 'consensisset' indicates prior action in a conditional clause in secondary sequence. 'Haberentur' continues the indirect command structure.",
            translation: "but if he had consented, they should be regarded as freedwomen"
        },
        phrase5: {
            title: "Pallanti, quem repertorem eius relationis ediderat Caesar",
            vocab: [
                "<strong>Pallanti</strong> (Pallas, Pallantis, m., dat. sing.) = to/for Pallas",
                "<strong>quem</strong> (rel. pron., masc. acc. sing.) = whom",
                "<strong>repertorem</strong> (repertor, -oris, m., acc. sing.) = inventor, discoverer, author",
                "<strong>eius</strong> (is, ea, id, gen. sing.) = of this, of that",
                "<strong>relationis</strong> (relatio, -onis, f., gen. sing.) = proposal, report",
                "<strong>ediderat</strong> (edo, edere, edidi, editum) = had declared, had published (3rd sing. plpf. ind. act.)",
                "<strong>Caesar</strong> (Caesar, -aris, m., nom. sing.) = the emperor (Claudius)"
            ],
            grammar: "Dative of indirect object ('Pallanti') anticipating the main verb 'censuit'. Relative clause: 'quem... ediderat' with double accusative construction (quem... repertorem) - 'whom Caesar had declared to be the author'. The pluperfect emphasises that the declaration preceded the Senate's vote.",
            translation: "To Pallas, whom the emperor had declared to be the author of this proposal"
        },
        phrase6: {
            title: "praetoria insignia et centies quinquagies sestertium censuit consul designatus Barea Soranus",
            vocab: [
                "<strong>praetoria</strong> (praetorius, -a, -um, acc. neut. pl.) = praetorian, of a praetor",
                "<strong>insignia</strong> (insigne, -is, n., acc. pl.) = insignia, decorations, badges of office",
                "<strong>et</strong> (conj.) = and",
                "<strong>centies quinquagies</strong> = 150 times (i.e., 15,000,000 sesterces)",
                "<strong>sestertium</strong> (sestertius, -i, m., gen. pl.) = of sesterces (genitive of value with numerals)",
                "<strong>censuit</strong> (censeo, censere, censui, censum) = proposed, voted (3rd sing. pf. ind. act.)",
                "<strong>consul</strong> (consul, -ulis, m., nom. sing.) = consul",
                "<strong>designatus</strong> (designo, -are, -avi, -atum) = designated, appointed (pf. part. nom. masc. sing.)",
                "<strong>Barea Soranus</strong> = Barea Soranus (proper name, nom.)"
            ],
            grammar: "The subject 'consul designatus Barea Soranus' is placed at the end for emphasis (Tacitean style). 'Centies quinquagies sestertium' = 150 x 100,000 sesterces = 15 million sesterces. 'Praetoria insignia' were honorary decorations normally reserved for men of praetorian rank - scandalous for a freedman.",
            translation: "the consul-designate Barea Soranus proposed praetorian insignia and fifteen million sesterces"
        },
        phrase7: {
            title: "additum a Scipione Cornelio",
            vocab: [
                "<strong>additum</strong> (addo, addere, addidi, additum) = it was added (pf. part. neut. nom. sing., used impersonally)",
                "<strong>a/ab</strong> (prep. + abl.) = by",
                "<strong>Scipione Cornelio</strong> = Scipio Cornelius (proper name, abl. sing.)"
            ],
            grammar: "Impersonal passive construction: 'additum (est)' = 'it was added'. The agent is expressed with 'a + ablative'. This construction allows Tacitus to continue the focus on the outrageous honours rather than the proposer.",
            translation: "It was added by Scipio Cornelius"
        },
        phrase8: {
            title: "grates publice agendas",
            vocab: [
                "<strong>grates</strong> (archaic, acc. pl.) = thanks (poetic/archaic form of 'gratias')",
                "<strong>publice</strong> (adv.) = publicly, in the name of the state",
                "<strong>agendas</strong> (ago, agere, egi, actum) = to be given, to be rendered (gerundive, acc. fem. pl.)"
            ],
            grammar: "Accusative and gerundive construction expressing obligation in indirect statement: '(dixit) grates publice agendas (esse)' - '(he said) that public thanks should be given'. The archaic 'grates' rather than 'gratias' adds mock solemnity.",
            translation: "that public thanks should be given"
        },
        phrase9: {
            title: "quod regibus Arcadiae ortus",
            vocab: [
                "<strong>quod</strong> (conj.) = because, since",
                "<strong>regibus</strong> (rex, regis, m., abl. pl.) = from kings (ablative of origin)",
                "<strong>Arcadiae</strong> (Arcadia, -ae, f., gen. sing.) = of Arcadia (region in Greece)",
                "<strong>ortus</strong> (orior, oriri, ortus sum) = having arisen, descended (pf. part. nom. masc. sing., deponent)"
            ],
            grammar: "Causal clause with 'quod' + indicative (implied from context). 'Regibus Arcadiae ortus' - ablative of origin/source with the deponent participle 'ortus'. The claim of descent from Arcadian kings was part of the flattery - freedmen often fabricated noble origins.",
            translation: "because, though descended from the kings of Arcadia"
        },
        phrase10: {
            title: "veterrimam nobilitatem usui publico postponeret",
            vocab: [
                "<strong>veterrimam</strong> (vetus, veteris, superl. adj., acc. fem. sing.) = most ancient, oldest",
                "<strong>nobilitatem</strong> (nobilitas, -atis, f., acc. sing.) = nobility, noble birth",
                "<strong>usui</strong> (usus, -us, m., dat. sing.) = to use, for the benefit",
                "<strong>publico</strong> (publicus, -a, -um, dat. masc. sing.) = public",
                "<strong>postponeret</strong> (postpono, -ere, -posui, -positum) = he set aside, he put after (3rd sing. impf. subj. act.)"
            ],
            grammar: "Imperfect subjunctive in a causal clause (representing reported reason). 'Usui publico' is dative of purpose - 'for the public benefit'. The superlative 'veterrimam' emphasises the absurdity of the claim.",
            translation: "he set aside his most ancient nobility for the public good"
        },
        phrase11: {
            title: "seque inter ministros principis haberi sineret",
            vocab: [
                "<strong>se</strong> (reflex. pron., acc.) = himself",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>inter</strong> (prep. + acc.) = among",
                "<strong>ministros</strong> (minister, -tri, m., acc. pl.) = servants, attendants, ministers",
                "<strong>principis</strong> (princeps, -ipis, m., gen. sing.) = of the emperor, of the leading man",
                "<strong>haberi</strong> (habeo, habere) = to be held, to be regarded (pres. inf. pass.)",
                "<strong>sineret</strong> (sino, sinere, sivi, situm) = he allowed (3rd sing. impf. subj. act.)"
            ],
            grammar: "Indirect statement with 'sineret': 'se... haberi' (himself to be regarded). 'Ministros' is a loaded term - it could mean 'servants' or 'officials', but here emphasises the servile origin that Pallas supposedly transcended. The imperfect subjunctive continues the reported reason.",
            translation: "and allowed himself to be counted among the emperor's servants"
        },
        phrase12: {
            title: "adseveravit Claudius contentum honore Pallantem",
            vocab: [
                "<strong>adseveravit</strong> (adsevero, -are, -avi, -atum) = he asserted, he declared solemnly (3rd sing. pf. ind. act.)",
                "<strong>Claudius</strong> (Claudius, -i, m., nom. sing.) = Claudius",
                "<strong>contentum</strong> (contentus, -a, -um, acc. masc. sing.) = content, satisfied (+ ablative)",
                "<strong>honore</strong> (honor/honos, -oris, m., abl. sing.) = with the honour",
                "<strong>Pallantem</strong> (Pallas, Pallantis, m., acc. sing.) = Pallas"
            ],
            grammar: "Indirect statement: 'Pallantem (esse) contentum honore' - 'that Pallas was content with the honour'. 'Contentum' agrees with 'Pallantem' as a predicate adjective. 'Honore' is ablative with 'contentus' (content with).",
            translation: "Claudius asserted that Pallas was content with the honour alone"
        },
        phrase13: {
            title: "intra priorem paupertatem subsistere",
            vocab: [
                "<strong>intra</strong> (prep. + acc.) = within, inside",
                "<strong>priorem</strong> (prior, prius, comp. adj., acc. fem. sing.) = former, previous",
                "<strong>paupertatem</strong> (paupertas, -atis, f., acc. sing.) = poverty",
                "<strong>subsistere</strong> (subsisto, -ere, substiti) = to remain, to stay (pres. inf. act.)"
            ],
            grammar: "Continuation of indirect statement after 'adseveravit': '(Pallantem)... subsistere'. The infinitive 'subsistere' is parallel to the implied 'esse' with 'contentum'. 'Intra priorem paupertatem' is bitterly ironic given Pallas' enormous wealth.",
            translation: "and would remain within his former poverty"
        },
        phrase14: {
            title: "et fixum est aere publico senatus consultum",
            vocab: [
                "<strong>et</strong> (conj.) = and",
                "<strong>fixum est</strong> (figo, figere, fixi, fixum) = was fixed, was posted (3rd sing. pf. ind. pass.)",
                "<strong>aere</strong> (aes, aeris, n., abl. sing.) = in bronze (ablative of material/place)",
                "<strong>publico</strong> (publicus, -a, -um, abl. neut. sing.) = public",
                "<strong>senatus consultum</strong> (senatus, -us, m. + consultum, -i, n., nom. sing.) = decree of the Senate"
            ],
            grammar: "Official decrees were inscribed on bronze tablets and displayed publicly. 'Aere publico' may mean 'on public bronze' or 'at public expense'. The phrase emphasises the permanent, official nature of this shameful flattery.",
            translation: "And the Senate's decree was fixed up in public bronze"
        },
        phrase15: {
            title: "quo libertinus sestertii ter milies possessor",
            vocab: [
                "<strong>quo</strong> (rel. pron., abl. neut. sing.) = in which",
                "<strong>libertinus</strong> (libertinus, -i, m., nom. sing.) = a freedman",
                "<strong>sestertii</strong> (sestertius, -i, m., gen. sing.) = of sesterces",
                "<strong>ter milies</strong> = three thousand times (i.e., 300,000,000 sesterces)",
                "<strong>possessor</strong> (possessor, -oris, m., nom. sing.) = possessor, owner"
            ],
            grammar: "'Libertinus sestertii ter milies possessor' - a freedman possessing 300 million sesterces. 'Ter milies' = 3000 x 100,000 = 300,000,000. The genitive of value 'sestertii ter milies' specifies the amount possessed. This devastating revelation exposes the absurdity of praising his 'poverty'.",
            translation: "in which a freedman possessing three hundred million sesterces"
        },
        phrase16: {
            title: "antiquae parsimoniae laudibus cumulabatur",
            vocab: [
                "<strong>antiquae</strong> (antiquus, -a, -um, gen. fem. sing.) = of old-fashioned, of ancient",
                "<strong>parsimoniae</strong> (parsimonia, -ae, f., gen. sing.) = thrift, frugality",
                "<strong>laudibus</strong> (laus, laudis, f., abl. pl.) = with praises",
                "<strong>cumulabatur</strong> (cumulo, -are, -avi, -atum) = was heaped, was piled (3rd sing. impf. ind. pass.)"
            ],
            grammar: "Imperfect passive 'cumulabatur' emphasises the ongoing, repeated nature of the praise. 'Antiquae parsimoniae' is an objective genitive - praises for his thrift. The ironic contrast between 'antiquae parsimoniae' and the 300 million sesterces is the climax of Tacitus' satirical point.",
            translation: "was heaped with praises for his old-fashioned thrift"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "inter quae",
            device: "Casual Transition",
            effect: "The offhand 'amid these events' suggests this shameful episode is merely one of many similar incidents, normalising corruption and implying systemic dysfunction in Claudius' reign."
        },
        style2: {
            title: "ad patres",
            device: "Traditional Terminology",
            effect: "Using the reverential 'patres' (fathers) for the Senate creates bitter irony - these supposed guardians of Roman tradition are about to debase themselves with servile flattery."
        },
        style3: {
            title: "ignaro domino",
            device: "Ablative Absolute",
            effect: "The technical legal phrasing 'with the master being unaware' gives the decree a veneer of legitimacy, while reminding readers that the proposal's author, Pallas, was himself a former slave."
        },
        style4: {
            title: "repertorem",
            device: "Loaded Vocabulary",
            effect: "Calling Pallas the 'inventor' or 'author' of the proposal is bitterly ironic - a freedman is credited with creating legislation that affects the status of slaves, and is rewarded with honours far beyond his station."
        },
        style5: {
            title: "praetoria insignia",
            device: "Status Marker",
            effect: "Praetorian insignia were reserved for men of senatorial rank who had held the praetorship. Granting them to a freedman inverts the entire Roman social order, highlighting the corruption of traditional honours."
        },
        style6: {
            title: "centies quinquagies sestertium",
            device: "Precise Numerical Detail",
            effect: "The specific figure of 15 million sesterces emphasises the obscene scale of the reward. Tacitus lets the numbers speak for themselves, inviting reader outrage without explicit comment."
        },
        style7: {
            title: "grates publice agendas",
            device: "Archaic Language",
            effect: "The use of archaic 'grates' rather than standard 'gratias' adds mock solemnity to the absurd proposal, suggesting senators are dressing up their flattery in the language of ancient Roman virtue."
        },
        style8: {
            title: "regibus Arcadiae ortus",
            device: "Mythical Genealogy",
            effect: "The claim of descent from Arcadian kings is laughably absurd for a freedman. Tacitus reports it without comment, allowing the manifest falsehood to condemn the flatterers more effectively than any editorial would."
        },
        style9: {
            title: "veterrimam nobilitatem",
            device: "Superlative for Irony",
            effect: "The superlative 'most ancient nobility' intensifies the absurdity. The more extravagant the claim, the more obvious the servility - Tacitus shows how flattery becomes self-defeating."
        },
        style10: {
            title: "ministros principis",
            device: "Euphemistic Ambiguity",
            effect: "'Ministers of the emperor' could mean high officials or literally servants/slaves. The deliberate ambiguity underscores how Pallas is both elevated beyond his station and yet fundamentally still a servant."
        },
        style11: {
            title: "contentum honore",
            device: "Ironic Understatement",
            effect: "Claudius' assertion that Pallas is 'content with the honour alone' rings hollow when set against the enormous wealth about to be revealed. The emperor participates in the charade of modesty."
        },
        style12: {
            title: "priorem paupertatem",
            device: "Bitter Irony",
            effect: "The phrase 'former poverty' is devastatingly undercut by the subsequent revelation. Tacitus sets up the irony carefully, allowing the absurdity to emerge through juxtaposition rather than explicit condemnation."
        },
        style13: {
            title: "libertinus sestertii ter milies possessor",
            device: "Climactic Revelation",
            effect: "The bombshell figure of 300 million sesterces exposes the entire preceding passage as farce. A freedman with this colossal wealth being praised for 'poverty' demonstrates the complete divorce of senatorial rhetoric from reality."
        },
        style14: {
            title: "antiquae parsimoniae",
            device: "Satirical Culmination",
            effect: "Praising 'old-fashioned thrift' for Rome's richest freedman is the passage's devastating conclusion. Traditional Roman virtues are invoked to celebrate their opposite, showing how flattery has corrupted moral language itself."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Claudius refers a proposal to the Senate concerning women who form relationships with slaves: if the master was unaware, the women become slaves; if he consented, they become freedwomen.</p>
            <p>The emperor credits his freedman Pallas with devising this law. The consul-designate Barea Soranus proposes awarding Pallas praetorian insignia and 15 million sesterces. Scipio Cornelius adds that public thanks should be given because Pallas, supposedly descended from Arcadian kings, puts aside his noble birth to serve the emperor.</p>
            <p>Claudius declares that Pallas, content with the honour, will remain in his 'former poverty'. The decree praising this freedman's 'old-fashioned thrift' is inscribed on bronze - despite the fact that he possesses 300 million sesterces.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>Pallas:</strong> Marcus Antonius Pallas was one of the most powerful freedmen in Roman history. He served as Claudius' financial secretary (<em>a rationibus</em>) and wielded enormous influence. His wealth of 300 million sesterces made him one of the richest men in Rome.</p>
            <p><strong>The Senatus Consultum Claudianum:</strong> The law mentioned here (AD 52) regulated relationships between free women and slaves. It remained in force for centuries and shows that freedmen like Pallas could shape major legislation.</p>
            <p><strong>Praetorian Insignia:</strong> These honorary decorations were traditionally reserved for senators who had held the praetorship (a senior magistracy). Granting them to a freedman violated fundamental principles of Roman social hierarchy.</p>
            <p><strong>Senate Servility:</strong> Under the emperors, the Senate increasingly competed to offer extravagant honours. This passage exemplifies how traditional institutions debased themselves to curry imperial favour.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>What proposal did Claudius bring to the Senate?</li>
                <li>What happened to women who formed relationships with slaves if the master was unaware?</li>
                <li>What happened if the master had consented?</li>
                <li>Who was credited as the author of this proposal?</li>
                <li>What honours did Barea Soranus propose for Pallas?</li>
                <li>What additional honour did Scipio Cornelius propose?</li>
                <li>What claim was made about Pallas' ancestry?</li>
                <li>What did Claudius say about Pallas' attitude to wealth?</li>
                <li>How much money did Pallas actually possess?</li>
                <li>Where was the Senate's decree displayed?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>Why does Tacitus use the traditional term <em>patres</em> (fathers) for the Senate in this context?</li>
                <li>What is ironic about a freedman being credited with legislation about slave-free relationships?</li>
                <li>How does Tacitus' use of specific numbers (15 million, 300 million sesterces) contribute to his critique?</li>
                <li>What is the effect of claiming Pallas was descended from 'the kings of Arcadia'?</li>
                <li>How does the phrase <em>priorem paupertatem</em> (former poverty) function ironically?</li>
                <li>Why does Tacitus save the revelation of Pallas' true wealth for the end of the passage?</li>
                <li>How does the final phrase <em>antiquae parsimoniae laudibus cumulabatur</em> crystallise Tacitus' satirical purpose?</li>
                <li>What does this passage reveal about the relationship between emperor, Senate, and freedmen?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Senate Servility:</strong> The Senate competes in offering ever more absurd honours, abandoning any pretence of independent judgement. Traditional terminology masks utter sycophancy.</p>
            <p><strong>Inversion of Social Order:</strong> A freedman receives honours reserved for senators, is credited with noble Arcadian ancestry, and is praised for virtues he manifestly lacks. Roman hierarchy is turned upside down.</p>
            <p><strong>Corruption of Language:</strong> Words like 'nobility', 'poverty', and 'thrift' are stripped of meaning when applied to a fabulously wealthy former slave. Moral vocabulary becomes an instrument of flattery.</p>
            <p><strong>Imperial Complicity:</strong> Claudius participates in the charade, lending his authority to the fiction of Pallas' modest contentment. The emperor enables and validates senatorial servility.</p>
            <p><strong>Tacitean Irony:</strong> Rather than explicitly condemning, Tacitus allows the facts to speak for themselves. The juxtaposition of 'former poverty' with '300 million sesterces' achieves devastating satirical effect through understatement.</p>
        `
    }
};
