// Chapter 41a Data File
const lessonData = {
    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')">Ti. Claudio quintum Servio Cornelio Orfito consulibus</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">virilis toga Neroni</span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">maturata</span></span>
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">quo capessendae rei publicae habilis videretur</span>.
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">et Caesar <span class="highlight-style style-2" onclick="showAnalysis('style2')">adulationibus senatus</span> <span class="highlight-style style-3" onclick="showAnalysis('style3')">libens cessit</span></span>
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">ut vicesimo aetatis anno consulatum Nero iniret</span>
        <span class="phrase phrase-1" onclick="showAnalysis('phrase7')">atque interim designatus</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase8')">proconsulare imperium extra urbem haberet</span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase9')">ac princeps iuventutis appellaretur</span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "Ti. Claudio quintum Servio Cornelio Orfito consulibus",
            vocab: [
                "<strong>Ti.</strong> = Tiberius (abbreviated)",
                "<strong>Claudio</strong> = Claudius (ablative)",
                "<strong>quintum</strong> = for the fifth time",
                "<strong>consulibus</strong> = consuls (ablative plural)"
            ],
            grammar: "Ablative absolute construction used for dating.",
            translation: "In the consulships of Tiberius Claudius for the fifth time and Servius Cornelius Orfitus"
        },
        phrase2: {
            title: "virilis toga Neroni",
            vocab: [
                "<strong>virilis</strong> = manly, of manhood",
                "<strong>toga</strong> = toga (nominative)",
                "<strong>Neroni</strong> = to/for Nero (dative)"
            ],
            grammar: "The toga virilis was the coming-of-age toga worn by adult Roman men.",
            translation: "the manly toga for Nero"
        },
        phrase3: {
            title: "maturata",
            vocab: [
                "<strong>maturata</strong> = was accelerated, was hastened (perfect passive participle)"
            ],
            grammar: "Perfect passive participle agreeing with 'toga'. The passive emphasises artificial acceleration.",
            translation: "was accelerated"
        },
        phrase4: {
            title: "quo capessendae rei publicae habilis videretur",
            vocab: [
                "<strong>quo</strong> = so that (purpose conjunction)",
                "<strong>capessendae</strong> = to be undertaken (gerundive)",
                "<strong>habilis</strong> = suitable, fit",
                "<strong>videretur</strong> = he might seem (imperfect subjunctive)"
            ],
            grammar: "Purpose clause with quo + subjunctive. Note 'videretur' (might seem) not 'esset' (might be).",
            translation: "so that he might seem suitable to undertake a public role"
        },
        phrase5: {
            title: "et Caesar adulationibus senatus libens cessit",
            vocab: [
                "<strong>adulationibus</strong> = to the flatteries (dative plural)",
                "<strong>libens</strong> = willingly",
                "<strong>cessit</strong> = yielded, gave way (perfect)"
            ],
            grammar: "Tacitus uses 'adulationibus' (flatteries) rather than neutral terms, revealing contempt.",
            translation: "and the emperor willingly yielded to the flattering suggestions of the Senate"
        },
        phrase6: {
            title: "ut vicesimo aetatis anno consulatum Nero iniret",
            vocab: [
                "<strong>vicesimo</strong> = twentieth",
                "<strong>aetatis anno</strong> = in the year of age",
                "<strong>consulatum</strong> = consulship (accusative)",
                "<strong>iniret</strong> = should enter upon (imperfect subjunctive)"
            ],
            grammar: "Result clause. At age 20, this is extraordinarily irregular.",
            translation: "that Nero should enter upon the consulship in the 20th year of his life"
        },
        phrase7: {
            title: "atque interim designatus",
            vocab: [
                "<strong>interim</strong> = in the meantime",
                "<strong>designatus</strong> = designated, appointed"
            ],
            grammar: "Being 'consul designatus' gave Nero official status immediately.",
            translation: "and in the meantime, as consul designate"
        },
        phrase8: {
            title: "proconsulare imperium extra urbem haberet",
            vocab: [
                "<strong>proconsulare imperium</strong> = proconsular power",
                "<strong>extra urbem</strong> = outside the city",
                "<strong>haberet</strong> = he should hold (imperfect subjunctive)"
            ],
            grammar: "Proconsular imperium granted military authority, typically held by former consuls.",
            translation: "he should hold proconsular power outside the city"
        },
        phrase9: {
            title: "ac princeps iuventutis appellaretur",
            vocab: [
                "<strong>princeps iuventutis</strong> = leader of the youth",
                "<strong>appellaretur</strong> = should be called (imperfect subjunctive passive)"
            ],
            grammar: "This title marked Augustus' grandsons as heirs. By giving it to Nero, succession is established.",
            translation: "and be called leader of the youth"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "maturata",
            device: "Loaded Vocabulary",
            effect: "The word suggests artificial acceleration and premature advancement, immediately signalling that natural order is being violated for political expediency."
        },
        style2: {
            title: "adulationibus senatus",
            device: "Pejorative Diction",
            effect: "Calling Senate proposals 'flatteries' rather than neutral terms exposes Tacitus' contempt for their servility and the corrupt emperor-Senate relationship."
        },
        style3: {
            title: "libens cessit",
            device: "Ironic Emphasis",
            effect: "Highlighting that Claudius yielded 'willingly' suggests he was easily manipulated or complicit in undermining his own son's succession."
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
