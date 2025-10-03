// Tacitus Annals 12.41a Data File
const lessonData = {
    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')">Ti. Claudio quintum Servio Cornelio Orfito consulibus</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">virilis toga Neroni</span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')"><span class="highlight-style style-2" onclick="showAnalysis('style2')">maturata</span></span>
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">quo capessendae rei publicae habilis <span class="highlight-style style-3" onclick="showAnalysis('style3')">videretur</span></span>.
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">et Caesar <span class="highlight-style style-4" onclick="showAnalysis('style4')">adulationibus senatus</span> <span class="highlight-style style-5" onclick="showAnalysis('style5')">libens cessit</span></span>
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">ut <span class="highlight-style style-6" onclick="showAnalysis('style6')">vicesimo aetatis anno</span> consulatum Nero iniret</span>
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">atque interim designatus</span>
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">proconsulare imperium extra urbem haberet</span>
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">ac princeps iuventutis appellaretur</span>.
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">additum nomine eius <span class="highlight-style style-7" onclick="showAnalysis('style7')">donativum militi, congiarium plebei</span></span>.
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">et ludicro circensium, quod <span class="highlight-style style-8" onclick="showAnalysis('style8')">adquirendis vulgi studiis</span> edebatur</span>,
        <span class="highlight-style style-1" onclick="showAnalysis('style1')"><span class="phrase phrase-12" onclick="showAnalysis('phrase12')">Britannicus in praetexta</span>, <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">Nero triumphali veste</span></span>
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">travecti sunt</span>:
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')"><span class="highlight-style style-9" onclick="showAnalysis('style9')">spectaret</span> populus <span class="highlight-style style-10" onclick="showAnalysis('style10')">hunc</span> <span class="highlight-style style-11" onclick="showAnalysis('style11')">decore imperatorio</span>, <span class="highlight-style style-10" onclick="showAnalysis('style10')">illum</span> <span class="highlight-style style-11" onclick="showAnalysis('style11')">puerili habitu</span></span>,
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')">ac perinde <span class="highlight-style style-12" onclick="showAnalysis('style12')">fortunam utriusque</span> <span class="highlight-style style-9" onclick="showAnalysis('style9')">praesumeret</span></span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "Ti. Claudio quintum Servio Cornelio Orfito consulibus",
            vocab: [
                "<strong>Ti.</strong> = Tiberius (abbreviated)",
                "<strong>Claudio</strong> = Claudius (ablative)",
                "<strong>quintum</strong> = for the fifth time (adverb)",
                "<strong>Servio</strong> = Servius (ablative)",
                "<strong>Cornelio</strong> = Cornelius (ablative)",
                "<strong>Orfito</strong> = Orfitus (ablative)",
                "<strong>consulibus</strong> = consuls (ablative plural)"
            ],
            grammar: "Ablative absolute construction used for dating. This formal opening gives the passage historical weight and emphasises Claudius' fifth consulship.",
            translation: "In the consulships of Tiberius Claudius for the fifth time and Servius Cornelius Orfitus"
        },
        phrase2: {
            title: "virilis toga Neroni",
            vocab: [
                "<strong>virilis</strong> = manly, of manhood (nominative feminine)",
                "<strong>toga</strong> = toga (nominative)",
                "<strong>Neroni</strong> = to/for Nero (dative)"
            ],
            grammar: "The toga virilis was the coming-of-age toga worn by adult Roman men, normally received around age 16-17. This marked transition to full citizenship.",
            translation: "the manly toga for Nero"
        },
        phrase3: {
            title: "maturata",
            vocab: [
                "<strong>maturata</strong> = was accelerated, was hastened (perfect passive participle, nominative feminine singular)"
            ],
            grammar: "Perfect passive participle agreeing with 'toga'. The passive form emphasises that the timing was artificially accelerated by others, not a natural development.",
            translation: "was accelerated"
        },
        phrase4: {
            title: "quo capessendae rei publicae habilis videretur",
            vocab: [
                "<strong>quo</strong> = so that (purpose conjunction with comparative)",
                "<strong>capessendae</strong> = to be undertaken (gerundive, genitive feminine singular)",
                "<strong>rei</strong> = role, business (genitive)",
                "<strong>publicae</strong> = public (genitive feminine)",
                "<strong>habilis</strong> = suitable, fit (nominative)",
                "<strong>videretur</strong> = he might seem (imperfect subjunctive)"
            ],
            grammar: "Purpose clause with 'quo' + subjunctive (used instead of 'ut' when there's a comparative). Note 'videretur' (might seem) rather than 'esset' (might be) - appearance matters more than reality.",
            translation: "so that he might seem suitable to undertake a public role"
        },
        phrase5: {
            title: "et Caesar adulationibus senatus libens cessit",
            vocab: [
                "<strong>et</strong> = and, also",
                "<strong>Caesar</strong> = the emperor (nominative)",
                "<strong>adulationibus</strong> = to the flatteries (dative plural)",
                "<strong>senatus</strong> = of the Senate (genitive)",
                "<strong>libens</strong> = willingly (nominative present participle)",
                "<strong>cessit</strong> = yielded, gave way (perfect)"
            ],
            grammar: "Tacitus uses 'adulationibus' (flatteries) rather than neutral terms like 'rogationes' (proposals), revealing his contempt for Senate servility.",
            translation: "and the emperor willingly yielded to the flattering suggestions of the Senate"
        },
        phrase6: {
            title: "ut vicesimo aetatis anno consulatum Nero iniret",
            vocab: [
                "<strong>ut</strong> = that (result/indirect command)",
                "<strong>vicesimo</strong> = twentieth (ablative)",
                "<strong>aetatis</strong> = of age (genitive)",
                "<strong>anno</strong> = in the year (ablative)",
                "<strong>consulatum</strong> = consulship (accusative)",
                "<strong>Nero</strong> = Nero (nominative)",
                "<strong>iniret</strong> = should enter upon (imperfect subjunctive)"
            ],
            grammar: "Result clause or indirect command. The minimum age for consul was traditionally 42 under the Republic, later reduced to around 30. At 20, this is extraordinarily irregular.",
            translation: "that Nero should enter upon the consulship in the 20th year of his life"
        },
        phrase7: {
            title: "atque interim designatus",
            vocab: [
                "<strong>atque</strong> = and",
                "<strong>interim</strong> = in the meantime",
                "<strong>designatus</strong> = designated, appointed (nominative)"
            ],
            grammar: "Being 'consul designatus' meant being officially designated for the consulship before actually holding office. This gave Nero official status immediately.",
            translation: "and in the meantime, as consul designate"
        },
        phrase8: {
            title: "proconsulare imperium extra urbem haberet",
            vocab: [
                "<strong>proconsulare</strong> = proconsular (accusative neuter)",
                "<strong>imperium</strong> = power, command (accusative)",
                "<strong>extra</strong> = outside (+ accusative)",
                "<strong>urbem</strong> = the city (accusative)",
                "<strong>haberet</strong> = he should hold (imperfect subjunctive)"
            ],
            grammar: "Proconsular imperium granted military and administrative authority over provinces, typically held by former consuls. Giving this to a teenager is unprecedented.",
            translation: "he should hold proconsular power outside the city"
        },
        phrase9: {
            title: "ac princeps iuventutis appellaretur",
            vocab: [
                "<strong>ac</strong> = and",
                "<strong>princeps</strong> = leader, first man (nominative)",
                "<strong>iuventutis</strong> = of the youth (genitive)",
                "<strong>appellaretur</strong> = should be called (imperfect subjunctive passive)"
            ],
            grammar: "This title had been given to Augustus' grandsons Gaius and Lucius Caesar, marking them as heirs. By giving it to Nero, succession is publicly established.",
            translation: "and be called leader of the youth"
        },
        phrase10: {
            title: "additum nomine eius donativum militi, congiarium plebei",
            vocab: [
                "<strong>additum</strong> = was added (perfect passive participle)",
                "<strong>nomine</strong> = in the name (ablative)",
                "<strong>eius</strong> = his (genitive)",
                "<strong>donativum</strong> = donative, gift (nominative)",
                "<strong>militi</strong> = to/for the soldier (dative)",
                "<strong>congiarium</strong> = handout, distribution (nominative)",
                "<strong>plebei</strong> = to/for the plebs (dative)"
            ],
            grammar: "A donativum was cash payment to soldiers (buying military loyalty), whilst a congiarium was for ordinary citizens (buying popularity). Both are transactional.",
            translation: "a donative was added for the soldiers in his name, a handout for the plebs"
        },
        phrase11: {
            title: "et ludicro circensium, quod adquirendis vulgi studiis edebatur",
            vocab: [
                "<strong>et</strong> = and, also",
                "<strong>ludicro</strong> = at/in the performance (ablative)",
                "<strong>circensium</strong> = of the circus games (genitive plural)",
                "<strong>quod</strong> = which (nominative neuter)",
                "<strong>adquirendis</strong> = to be obtained (gerundive, dative neuter plural)",
                "<strong>vulgi</strong> = of the mob, of the crowd (genitive)",
                "<strong>studiis</strong> = goodwill, enthusiasm (dative/ablative plural)",
                "<strong>edebatur</strong> = was provided, was staged (imperfect passive)"
            ],
            grammar: "Relative clause of purpose with gerundive. Tacitus explicitly states the manipulative purpose - 'vulgi studiis' (mob's goodwill) shows slight contempt.",
            translation: "and at a performance of the circus games, which was provided in order to get the goodwill of the mob"
        },
        phrase12: {
            title: "Britannicus in praetexta",
            vocab: [
                "<strong>Britannicus</strong> = Britannicus (nominative)",
                "<strong>in</strong> = in (+ ablative)",
                "<strong>praetexta</strong> = toga praetexta (ablative - bordered toga worn by boys)"
            ],
            grammar: "The toga praetexta was worn by boys before coming of age, marking Britannicus as still a child, not yet an adult citizen.",
            translation: "Britannicus in the toga praetexta"
        },
        phrase13: {
            title: "Nero triumphali veste",
            vocab: [
                "<strong>Nero</strong> = Nero (nominative)",
                "<strong>triumphali</strong> = triumphal (ablative feminine)",
                "<strong>veste</strong> = clothing, dress (ablative)"
            ],
            grammar: "Triumphal dress was reserved for victorious generals celebrating a triumph. Nero wears it despite having won no battles - pure theatre.",
            translation: "Nero in triumphal clothing"
        },
        phrase14: {
            title: "travecti sunt",
            vocab: [
                "<strong>travecti</strong> = rode past, were carried across (perfect passive participle, nominative plural)",
                "<strong>sunt</strong> = are, were (perfect)"
            ],
            grammar: "Perfect passive with 'sunt' describing the ceremonial procession through Rome.",
            translation: "rode past"
        },
        phrase15: {
            title: "spectaret populus hunc decore imperatorio, illum puerili habitu",
            vocab: [
                "<strong>spectaret</strong> = should watch (imperfect subjunctive)",
                "<strong>populus</strong> = the people (nominative)",
                "<strong>hunc</strong> = this one, the latter (accusative)",
                "<strong>decore</strong> = in glory, with splendour (ablative)",
                "<strong>imperatorio</strong> = imperial (ablative neuter)",
                "<strong>illum</strong> = that one, the former (accusative)",
                "<strong>puerili</strong> = boyish, childish (ablative neuter)",
                "<strong>habitu</strong> = in appearance, in dress (ablative)"
            ],
            grammar: "Purpose/jussive subjunctive expressing the organisers' intention. 'hunc... illum' creates stark binary opposition - this one vs that one.",
            translation: "let the people watch the latter in imperial glory, the former in boyish dress"
        },
        phrase16: {
            title: "ac perinde fortunam utriusque praesumeret",
            vocab: [
                "<strong>ac</strong> = and",
                "<strong>perinde</strong> = accordingly, in consequence",
                "<strong>fortunam</strong> = fortune, fate (accusative)",
                "<strong>utriusque</strong> = of both (genitive)",
                "<strong>praesumeret</strong> = might anticipate, might assume (imperfect subjunctive)"
            ],
            grammar: "Purpose clause continuing from 'spectaret'. The word 'fortuna' carries implications of both fate and luck - the spectacle is designed to predetermine how people view each boy's future.",
            translation: "and would therefore anticipate the fortune of both"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "Britannicus in praetexta, Nero triumphali veste",
            device: "Visual Contrast",
            effect: "The juxtaposition of boyish dress versus imperial clothing creates an unmistakable binary in the public mind, publicly humiliating the legitimate heir whilst elevating the adopted son."
        },
        style2: {
            title: "maturata",
            device: "Loaded Vocabulary",
            effect: "The word suggests artificial acceleration and premature advancement, immediately signalling that natural order is being violated for political expediency."
        },
        style3: {
            title: "videretur",
            device: "Subjunctive of Appearance",
            effect: "Using 'might seem' rather than 'might be' reveals that this is about optics and manipulation - Nero needs to appear ready, not actually be ready."
        },
        style4: {
            title: "adulationibus senatus",
            device: "Pejorative Diction",
            effect: "Calling Senate proposals 'flatteries' rather than neutral terms exposes Tacitus' contempt for their servility and the corrupt emperor-Senate relationship."
        },
        style5: {
            title: "libens cessit",
            device: "Ironic Emphasis",
            effect: "Highlighting that Claudius yielded 'willingly' suggests he was easily manipulated or complicit in undermining his own son's succession."
        },
        style6: {
            title: "vicesimo aetatis anno",
            device: "Age Emphasis",
            effect: "Explicitly stating Nero's age of 20 underscores how radically irregular this is - the traditional minimum was 42, later reduced to 30."
        },
        style7: {
            title: "donativum militi, congiarium plebei",
            device: "Parallel Structure",
            effect: "The balanced phrasing emphasises the calculated, transactional nature of buying loyalty from both military and civilians."
        },
        style8: {
            title: "adquirendis vulgi studiis",
            device: "Contemptuous Language",
            effect: "Describing the purpose as getting the 'mob's goodwill' reveals disdain for both the masses and those who pander to them through staged spectacles."
        },
        style9: {
            title: "spectaret... praesumeret",
            device: "Imperfect Subjunctives",
            effect: "The repeated subjunctives emphasise intention and planning - every detail was choreographed to manipulate public perception."
        },
        style10: {
            title: "hunc... illum",
            device: "Demonstrative Opposition",
            effect: "The binary 'this one... that one' forces viewers into a simple choice, eliminating any middle ground between imperial glory and childish irrelevance."
        },
        style11: {
            title: "decore imperatorio... puerili habitu",
            device: "Antithesis",
            effect: "The stark contrast between 'imperial splendour' and 'boyish dress' creates maximum visual and emotional impact."
        },
        style12: {
            title: "fortunam utriusque",
            device: "Dramatic Irony",
            effect: "The word 'fortuna' carries implications of fate - readers who know the outcome recognise the tragic irony of this manipulated spectacle."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Nero receives the <em>toga virilis</em> earlier than usual to make him appear ready for public life. The Senate proposes he becomes consul at age 20, with proconsular power in the meantime. He receives the title <em>Princeps Iuventutis</em>.</p>
            <p>Money is distributed to soldiers and citizens in his name. At the circus games, Nero wears triumphal dress whilst Britannicus wears the <em>toga praetexta</em> of a boy - a staged spectacle designed to show the public who Rome's future lies with.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>The Toga Virilis:</strong> Roman boys normally received this 'toga of manhood' around age 16-17, marking their transition to adulthood. Nero's early ceremony (he was probably around 13-14) shows political manipulation.</p>
            <p><strong>Age and Office:</strong> The traditional minimum age for consul was 42 under the Republic, later reduced to around 30 under Augustus. At 20, Nero would be extraordinarily young.</p>
            <p><strong>Proconsular Imperium:</strong> This gave military command over provinces, normally held only by former consuls. Granting this to a teenager shows how traditional norms were being abandoned.</p>
            <p><strong>Princeps Iuventutis:</strong> Augustus had given this title to his grandsons Gaius and Lucius Caesar, marking them as heirs. By giving it to Nero, Claudius publicly designates him as successor.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>When did these events take place? (Who were the consuls?)</li>
                <li>What ceremony was accelerated for Nero?</li>
                <li>At what age will Nero become consul?</li>
                <li>What titles and powers did Nero receive?</li>
                <li>What was given to the soldiers and plebs?</li>
                <li>How were Nero and Britannicus dressed at the circus?</li>
                <li>What was the purpose of this visual display?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>How does Tacitus' word choice (e.g. <em>maturata</em>, <em>adulationibus</em>) reveal his attitude?</li>
                <li>What is the significance of the contrast between <em>videretur</em> ("might seem") and <em>esset</em> ("might be")?</li>
                <li>Why does Tacitus emphasise that Claudius yielded <em>libens</em> (willingly)?</li>
                <li>What is the effect of describing the games as being staged <em>adquirendis vulgi studiis</em> (to get the mob's goodwill)?</li>
                <li>How does the visual contrast between the two boys function as political theatre?</li>
                <li>What does this passage reveal about how imperial succession worked in practise?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Political Theatre:</strong> Every detail is staged for public consumption - the contrasting costumes, the public venue, the calculated timing. This is propaganda, not genuine ceremony.</p>
            <p><strong>Appearance vs Reality:</strong> Nero needs to "seem" ready (<em>videretur</em>), not actually be ready. The Senate's proposals are <em>adulationes</em> (flatteries), not genuine counsel.</p>
            <p><strong>Manipulation of Tradition:</strong> Traditional Roman customs (toga ceremony, age requirements, constitutional offices) are being twisted to serve dynastic ambition.</p>
            <p><strong>Britannicus' Tragedy:</strong> The legitimate heir is publicly humiliated, reduced to a prop in Nero's elevation.</p>
        `
    }
};
