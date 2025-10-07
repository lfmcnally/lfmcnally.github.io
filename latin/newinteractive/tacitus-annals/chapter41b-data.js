// Tacitus Annals 12.41b Data File
const lessonData = {
    fullTranslation: "At the same time, those of the centurions and tribunes who were pitying the fate of Britannicus were removed on false pretexts, and others under the pretence of some distinction or other; also, if anyone of the freedmen had incorruptible loyalty, he was driven out on a similar pretext. When they met each other, Nero greeted Britannicus by name, Britannicus greeted the other as Domitius. Agrippina reported this to her husband with much complaining as the beginning of disharmony: (she said that) of course, the adoption was being disregarded, and what the senators had resolved and the people ordered was being annulled within their own home; and unless the wickedness of those who were teaching such hostility was prevented, it would break out to the ruination of the state. Disturbed by these (remarks) as if they were accusations, (Claudius) exiled or killed all the best teachers and put men who had been assigned by his stepmother in charge of him.",

    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">simul</span> qui centurionum tribunorumque sortem Britannici miserabantur</span>,
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">remoti <span class="highlight-style style-2" onclick="showAnalysis('style2')">fictis causis</span></span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">et alii <span class="highlight-style style-3" onclick="showAnalysis('style3')">per speciem honoris</span></span>;
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">etiam libertorum si quis <span class="highlight-style style-4" onclick="showAnalysis('style4')">incorrupta fide</span>, depellitur <span class="highlight-style style-5" onclick="showAnalysis('style5')">tali occasione</span></span>.
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">obvii inter se Nero Britannicum <span class="highlight-style style-6" onclick="showAnalysis('style6')">nomine</span>, ille Domitium <span class="highlight-style style-7" onclick="showAnalysis('style7')">salutavere</span></span>.
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">quod ut <span class="highlight-style style-8" onclick="showAnalysis('style8')">discordiae initium</span> Agrippina <span class="highlight-style style-9" onclick="showAnalysis('style9')">multo questu</span> ad maritum defert</span>:
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')"><span class="highlight-style style-10" onclick="showAnalysis('style10')">sperni quippe</span> adoptionem</span>,
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')"><span class="highlight-style style-11" onclick="showAnalysis('style11')">quaeque</span> censuerint patres, <span class="highlight-style style-11" onclick="showAnalysis('style11')">iusserit</span> populus</span>,
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">intra penates abrogari</span>;
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">ac nisi <span class="highlight-style style-12" onclick="showAnalysis('style12')">pravitas</span> tam infesta docentium arceatur</span>,
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">eruptura in publicam perniciem</span>.
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">commotus his <span class="highlight-style style-13" onclick="showAnalysis('style13')">quasi criminibus</span> <span class="highlight-style style-14" onclick="showAnalysis('style14')">optimum quemque</span> educatorem filii exilio aut morte adficit datosque a noverca custodiae eius imponit</span>.
    `,

    grammar: {
        phrase1: {
            title: "simul qui centurionum tribunorumque sortem Britannici miserabantur",
            vocab: [
                "<strong>simul</strong> = at the same time (adverb)",
                "<strong>qui</strong> = who, those who (nominative plural)",
                "<strong>centurionum</strong> = of the centurions (genitive plural)",
                "<strong>tribunorumque</strong> = and of the tribunes (genitive plural, -que = and)",
                "<strong>sortem</strong> = fate, lot (accusative)",
                "<strong>Britannici</strong> = of Britannicus (genitive)",
                "<strong>miserabantur</strong> = were pitying (imperfect deponent)"
            ],
            grammar: "Relative clause with 'qui' referring to military officers. The imperfect 'miserabantur' (were pitying) suggests ongoing sympathy, which makes their removal more sinister.",
            translation: "were removed on false pretexts"
        },
        phrase3: {
            title: "et alii per speciem honoris",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>alii</strong> = others (nominative plural)",
                "<strong>per</strong> = through, under (+ accusative)",
                "<strong>speciem</strong> = appearance, pretence (accusative)",
                "<strong>honoris</strong> = of honour, of distinction (genitive)"
            ],
            grammar: "'Per speciem' expresses the false appearance - they're given 'honours' that are actually disguised punishments or removals from influence.",
            translation: "and others under the pretence of some distinction"
        },
        phrase4: {
            title: "etiam libertorum si quis incorrupta fide, depellitur tali occasione",
            vocab: [
                "<strong>etiam</strong> = also, even",
                "<strong>libertorum</strong> = of the freedmen (genitive plural)",
                "<strong>si quis</strong> = if anyone (nominative)",
                "<strong>incorrupta</strong> = incorruptible, unbought (ablative feminine)",
                "<strong>fide</strong> = with loyalty (ablative)",
                "<strong>depellitur</strong> = is driven out (present passive)",
                "<strong>tali</strong> = similar, such (ablative)",
                "<strong>occasione</strong> = on a pretext (ablative)"
            ],
            grammar: "Conditional with 'si quis' + present tense. The present 'depellitur' makes it feel immediate and ongoing. 'Incorrupta fide' emphasises that loyalty itself is now dangerous.",
            translation: "also, if anyone of the freedmen had incorruptible loyalty, he is driven out on a similar pretext"
        },
        phrase5: {
            title: "obvii inter se Nero Britannicum nomine, ille Domitium salutavere",
            vocab: [
                "<strong>obvii</strong> = meeting, encountering (nominative plural)",
                "<strong>inter se</strong> = among themselves, each other",
                "<strong>Nero</strong> = Nero (nominative)",
                "<strong>Britannicum</strong> = Britannicus (accusative)",
                "<strong>nomine</strong> = by name (ablative)",
                "<strong>ille</strong> = that one, he (nominative)",
                "<strong>Domitium</strong> = Domitius (accusative - Nero's birth name)",
                "<strong>salutavere</strong> = greeted (perfect active, = salutaverunt)"
            ],
            grammar: "The exchange of names is loaded with political meaning. Nero uses Britannicus' name (accepting his identity), but Britannicus refuses to use 'Nero', instead calling him by his pre-adoption name 'Domitius' - rejecting the adoption's legitimacy.",
            translation: "when they met each other, Nero greeted Britannicus by name, but he greeted the other as Domitius"
        },
        phrase6: {
            title: "quod ut discordiae initium Agrippina multo questu ad maritum defert",
            vocab: [
                "<strong>quod</strong> = which (accusative neuter)",
                "<strong>ut</strong> = as (+ accusative)",
                "<strong>discordiae</strong> = of discord, of disharmony (genitive)",
                "<strong>initium</strong> = beginning (accusative)",
                "<strong>Agrippina</strong> = Agrippina (nominative)",
                "<strong>multo</strong> = with much (ablative)",
                "<strong>questu</strong> = complaining (ablative)",
                "<strong>ad</strong> = to (+ accusative)",
                "<strong>maritum</strong> = husband (accusative)",
                "<strong>defert</strong> = reports, carries (present)"
            ],
            grammar: "'Multo questu' (with much complaining) characterises Agrippina's manipulative approach. The present tense 'defert' makes it vivid and immediate.",
            translation: "which Agrippina reported to her husband with much complaining as the beginning of disharmony"
        },
        phrase7: {
            title: "sperni quippe adoptionem",
            vocab: [
                "<strong>sperni</strong> = to be disregarded, to be spurned (present passive infinitive)",
                "<strong>quippe</strong> = of course, indeed (emphasising particle)",
                "<strong>adoptionem</strong> = adoption (accusative)"
            ],
            grammar: "Indirect speech begins here (after 'defert'). 'Quippe' adds indignant emphasis - 'of course the adoption is being disregarded!' The passive infinitive suggests victimhood.",
            translation: "of course, the adoption was being disregarded"
        },
        phrase8: {
            title: "quaeque censuerint patres, iusserit populus",
            vocab: [
                "<strong>quaeque</strong> = and what (accusative neuter plural, -que = and)",
                "<strong>censuerint</strong> = had resolved (perfect subjunctive)",
                "<strong>patres</strong> = the senators (nominative)",
                "<strong>iusserit</strong> = had ordered (perfect subjunctive)",
                "<strong>populus</strong> = the people (nominative)"
            ],
            grammar: "Perfect subjunctives in indirect statement. Agrippina invokes both Senate and people - the highest constitutional authorities - to make the snub seem like treason.",
            translation: "and what the senators had resolved and the people had ordered"
        },
        phrase9: {
            title: "intra penates abrogari",
            vocab: [
                "<strong>intra</strong> = within, inside (+ accusative)",
                "<strong>penates</strong> = household gods, home (accusative plural)",
                "<strong>abrogari</strong> = to be annulled, to be repealed (present passive infinitive)"
            ],
            grammar: "Continuing indirect speech. 'Intra penates' emphasises the domestic location - even at home, the adoption should be respected. The passive infinitive continues the theme of victimisation.",
            translation: "was being annulled within their own home"
        },
        phrase10: {
            title: "ac nisi pravitas tam infesta docentium arceatur",
            vocab: [
                "<strong>ac</strong> = and",
                "<strong>nisi</strong> = unless, if not",
                "<strong>pravitas</strong> = wickedness, depravity (nominative)",
                "<strong>tam</strong> = so, such",
                "<strong>infesta</strong> = hostile (nominative feminine)",
                "<strong>docentium</strong> = of those teaching (present participle genitive plural)",
                "<strong>arceatur</strong> = is prevented, is checked (present subjunctive passive)"
            ],
            grammar: "Conditional threat with 'nisi' + subjunctive. Agrippina blames Britannicus' 'teachers' for his behaviour, deflecting from Britannicus himself whilst demanding their removal.",
            translation: "and unless the wickedness of those teaching such hostility was prevented"
        },
        phrase11: {
            title: "eruptura in publicam perniciem",
            vocab: [
                "<strong>eruptura</strong> = about to break out (future active participle, nominative feminine)",
                "<strong>in</strong> = into (+ accusative)",
                "<strong>publicam</strong> = public (accusative feminine)",
                "<strong>perniciem</strong> = ruin, destruction (accusative)"
            ],
            grammar: "Future participle expressing imminent threat. Agrippina escalates from domestic insult to existential state crisis - classic manipulation through fear.",
            translation: "it would break out into the ruin of the state"
        },
        phrase12: {
            title: "commotus his quasi criminibus optimum quemque educatorem filii exilio aut morte adficit datosque a noverca custodiae eius imponit",
            vocab: [
                "<strong>commotus</strong> = disturbed, moved (perfect passive participle)",
                "<strong>his</strong> = by these (ablative neuter plural)",
                "<strong>quasi</strong> = as if (+ ablative)",
                "<strong>criminibus</strong> = accusations, charges (ablative plural)",
                "<strong>optimum quemque</strong> = each/every best man (accusative - distributive)",
                "<strong>educatorem</strong> = teacher, tutor (accusative)",
                "<strong>filii</strong> = of his son (genitive)",
                "<strong>exilio</strong> = with exile (ablative)",
                "<strong>aut</strong> = or",
                "<strong>morte</strong> = with death (ablative)",
                "<strong>adficit</strong> = punishes, affects (present)",
                "<strong>datosque</strong> = and those assigned (perfect passive participle accusative plural, -que = and)",
                "<strong>a</strong> = by (+ ablative)",
                "<strong>noverca</strong> = stepmother (ablative)",
                "<strong>custodiae</strong> = to the guardianship (dative)",
                "<strong>eius</strong> = of him, his (genitive)",
                "<strong>imponit</strong> = places, puts (present)"
            ],
            grammar: "'Quasi criminibus' (as if they were accusations) shows Tacitus' scepticism - these weren't real crimes. 'Optimum quemque' (every best man) emphasises the tragedy - the finest teachers destroyed. The ablatives 'exilio aut morte' are stark and brutal.",
            translation: "disturbed by these remarks as if they were accusations, he punished every one of the best teachers of his son with exile or death, and placed men assigned by his stepmother in charge of him"
        }
    },

    style: {
        style1: {
            title: "simul",
            device: "Temporal Connection",
            effect: "Links this purge to the previous events (Nero's elevation), showing they're part of a coordinated campaign to isolate Britannicus, not random occurrences."
        },
        style2: {
            title: "fictis causis",
            device: "Loaded Vocabulary",
            effect: "The word 'fictis' (fabricated/false) immediately exposes the dishonesty - Tacitus doesn't pretend these were legitimate removals."
        },
        style3: {
            title: "per speciem honoris",
            device: "Irony",
            effect: "The pretence of 'honour' masks punishment - a classic Tacitean technique showing how tyranny operates through false appearances."
        },
        style4: {
            title: "incorrupta fide",
            device: "Loaded Vocabulary",
            effect: "In a corrupt regime, incorruptible loyalty becomes dangerous - the phrase highlights the moral inversion where virtue is punished."
        },
        style5: {
            title: "tali occasione",
            device: "Repetition",
            effect: "Echoing the earlier pretexts reinforces the systematic nature of the purge - everyone loyal to Britannicus is being eliminated on fabricated grounds."
        },
        style6: {
            title: "nomine",
            device: "Brevity",
            effect: "The single word 'nomine' (by name) carries huge weight - it means Nero accepts Britannicus' identity and right to his name."
        },
        style7: {
            title: "salutavere",
            device: "Historic Present Effect",
            effect: "Though technically perfect tense, the archaic form 'salutavere' (= salutaverunt) adds vividness to this crucial moment of public insult."
        },
        style8: {
            title: "discordiae initium",
            device: "Dramatic Irony",
            effect: "Calling it the 'beginning of discord' is manipulative - the discord was created by Agrippina's own schemes, not Britannicus' refusal to accept them."
        },
        style9: {
            title: "multo questu",
            device: "Characterisation",
            effect: "'Much complaining' characterises Agrippina's manipulative style - she uses emotional appeals and victimhood to control Claudius."
        },
        style10: {
            title: "sperni quippe",
            device: "Indirect Speech Rhetoric",
            effect: "'Quippe' (of course/indeed) in indirect speech captures Agrippina's indignant, self-righteous tone - she presents herself as defending constitutional order."
        },
        style11: {
            title: "quaeque... iusserit",
            device: "Polysyndeton / Parallelism",
            effect: "The repeated 'que' and parallel structure (Senate resolved... people ordered) piles up constitutional authorities to make the insult seem like treason."
        },
        style12: {
            title: "pravitas",
            device: "Loaded Vocabulary",
            effect: "'Pravitas' (wickedness/depravity) is deliberately extreme - Agrippina isn't just blaming poor teaching but moral corruption, justifying extreme measures."
        },
        style13: {
            title: "quasi criminibus",
            device: "Authorial Commentary",
            effect: "'Quasi' (as if) reveals Tacitus' judgement - these weren't real accusations, and Claudius is being manipulated by treating them as such."
        },
        style14: {
            title: "optimum quemque",
            device: "Emphatic Phrasing",
            effect: "'Every single best man' emphasises both the quality of those destroyed and the thoroughness of the purge - no excellence was spared if it threatened Agrippina's plans."
        }
    },

    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Military officers sympathetic to Britannicus are removed on false charges or given fake honours to neutralise them. Freedmen with genuine loyalty to Britannicus are also expelled.</p>
            <p>When Nero and Britannicus meet, Nero addresses him by name, but Britannicus refuses to call Nero by his adopted name, instead using 'Domitius' (his birth name) - publicly rejecting the adoption's legitimacy.</p>
            <p>Agrippina reports this to Claudius as dangerous discord, claiming the adoption is being undermined and constitutional authority flouted. She blames Britannicus' teachers and warns this will lead to state ruin unless stopped.</p>
            <p>Claudius, manipulated by her rhetoric, exiles or executes Britannicus' best teachers and replaces them with Agrippina's appointees - completing Britannicus' isolation.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>Names and Identity:</strong> Nero was born Lucius Domitius Ahenobarbus and only became 'Nero Claudius Caesar' through adoption. By calling him 'Domitius', Britannicus rejects the adoption's validity and Nero's claim to succession.</p>
            <p><strong>Freedmen:</strong> Former slaves often held significant informal power in imperial households, acting as advisors, administrators, and personal attendants. Their loyalty mattered greatly in palace politics.</p>
            <p><strong>Military Loyalty:</strong> Centurions and tribunes were mid-ranking military officers whose support could be crucial in any succession dispute. Removing those sympathetic to Britannicus was strategic.</p>
            <p><strong>Education and Control:</strong> Roman elite children were educated by carefully chosen tutors who shaped not just their learning but their values and political outlook. Controlling Britannicus' teachers meant controlling his development.</p>
            <p><strong>Agrippina's Power:</strong> As both Claudius' wife and Nero's mother, Agrippina wielded enormous influence. This passage shows her manipulating Claudius through emotional appeals whilst systematically destroying any support base for Britannicus.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>Who was being removed from positions of influence?</li>
                <li>What pretexts were used for these removals?</li>
                <li>How did Nero greet Britannicus?</li>
                <li>How did Britannicus greet Nero?</li>
                <li>What was significant about Britannicus calling Nero 'Domitius'?</li>
                <li>How did Agrippina characterise this exchange?</li>
                <li>What authorities did Agrippina invoke in her complaint?</li>
                <li>Who did Agrippina blame for Britannicus' behaviour?</li>
                <li>What did she claim would happen if nothing was done?</li>
                <li>How did Claudius respond?</li>
                <li>Who replaced Britannicus' original teachers?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>How does Tacitus use words like <em>fictis</em> (false), <em>per speciem</em> (under pretence) to expose the dishonesty of these removals?</li>
                <li>What is the significance of <em>incorrupta fide</em> (incorruptible loyalty) being dangerous in this regime?</li>
                <li>Why is the name exchange so politically loaded? What does it reveal about Britannicus' position?</li>
                <li>How does Agrippina's rhetoric escalate from domestic insult to constitutional crisis to existential state threat?</li>
                <li>What is the effect of Tacitus using <em>quasi criminibus</em> (as if they were accusations)?</li>
                <li>Why does Tacitus emphasise that Claudius punished <em>optimum quemque</em> (every best man)?</li>
                <li>How does this passage show the difference between appearance and reality in Nero's regime?</li>
                <li>What does this episode reveal about Claudius' character and his relationship with Agrippina?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Systematic Isolation:</strong> Every person loyal to Britannicus is methodically removed - military officers, freedmen, teachers. This isn't random but a coordinated campaign to leave him completely powerless.</p>
            <p><strong>Appearance vs Reality:</strong> Removals are disguised as 'honours' (<em>per speciem honoris</em>), and manipulative complaints are treated as legitimate accusations (<em>quasi criminibus</em>). Truth is systematically obscured.</p>
            <p><strong>Names and Identity:</strong> The refusal to use adopted names becomes political resistance. Britannicus' use of 'Domitius' is his only remaining weapon - verbal rejection of legitimacy.</p>
            <p><strong>Manipulation Through Fear:</strong> Agrippina escalates from personal insult to state crisis, using apocalyptic rhetoric (<em>eruptura in publicam perniciem</em>) to frighten Claudius into extreme action.</p>
            <p><strong>The Innocent Suffer:</strong> The 'best teachers' (<em>optimum quemque educatorem</em>) are killed or exiled not for any crime but because they might preserve Britannicus' independence. Excellence itself becomes dangerous.</p>
            <p><strong>Weak Authority:</strong> Claudius is easily manipulated, treating his wife's emotional complaints as serious accusations and destroying loyal servants on her word alone.</p>
        `
    }
}; "at the same time, those who were pitying the fate of Britannicus"
        },
        phrase2: {
            title: "remoti fictis causis",
            vocab: [
                "<strong>remoti</strong> = removed (perfect passive participle, nominative plural)",
                "<strong>fictis</strong> = false, fabricated (ablative plural)",
                "<strong>causis</strong> = on pretexts, for reasons (ablative plural)"
            ],
            grammar: "Perfect passive participle with ablative of means. 'Fictis' (fabricated) exposes the dishonesty - these aren't real offences.",
            translation:
