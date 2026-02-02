// Tacitus Annals 12.67 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "And so everything soon became well known, to such an extent that the writers of those times recorded that poison was poured into a delicious mushroom, nor was the effect of the drug immediately understood, whether through carelessness or Claudius's drunkenness; at the same time a loosening of the bowels seemed to have come to his aid. Therefore Agrippina, terrified and, since the worst was feared, disregarding the resentment of those present, calls upon the complicity of the doctor Xenophon, already secured for herself. He, as if helping the efforts of one vomiting, is believed to have pushed a feather smeared with swift poison down his throat, well aware that the greatest crimes are begun with danger but completed with reward.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">adeoque cuncta mox pernotuere</span></span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">ut temporum illorum scriptores prodiderint</span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')"><span class="highlight-style style-2" onclick="showAnalysis('style2')">infusum delectabili boleto venenum</span></span>,
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">nec vim medicaminis statim intellectam</span>,
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')"><span class="highlight-style style-3" onclick="showAnalysis('style3')">socordiane an Claudii vinolentia</span></span>;
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">simul soluta alvus subvenisse videbatur</span>.
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')"><span class="highlight-style style-4" onclick="showAnalysis('style4')">igitur exterrita Agrippina</span></span>
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">et, quando ultima timebantur</span>,
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">spreta praesentium invidia</span></span>
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">provisam iam sibi Xenophontis medici conscientiam adhibet</span>.
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')"><span class="highlight-style style-6" onclick="showAnalysis('style6')">ille tamquam nisus evomentis adiuvaret</span></span>,
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')"><span class="highlight-style style-7" onclick="showAnalysis('style7')">pinnam rapido veneno inlitam faucibus eius demisisse creditur</span></span>,
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')"><span class="highlight-style style-8" onclick="showAnalysis('style8')">haud ignarus summa scelera incipi cum periculo, peragi cum praemio</span></span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "adeoque cuncta mox pernotuere",
            vocab: [
                "<strong>adeo</strong> = to such an extent, so much",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>cuncta</strong> = all things, everything (nominative neuter plural)",
                "<strong>mox</strong> = soon",
                "<strong>pernotuere</strong> = became well known (perfect, = pernoverunt)"
            ],
            grammar: "The archaic perfect ending -ere (= -erunt) gives the narrative a grave, historical tone. 'Adeo' anticipates the result clause that follows.",
            translation: "And so everything soon became well known"
        },
        phrase2: {
            title: "ut temporum illorum scriptores prodiderint",
            vocab: [
                "<strong>ut</strong> = that, so that (result)",
                "<strong>temporum</strong> = of those times (genitive plural)",
                "<strong>illorum</strong> = those (genitive plural)",
                "<strong>scriptores</strong> = writers (nominative plural)",
                "<strong>prodiderint</strong> = recorded, handed down (perfect subjunctive)"
            ],
            grammar: "Result clause with perfect subjunctive. Tacitus appeals to earlier sources to authenticate his account of the poisoning.",
            translation: "that the writers of those times recorded"
        },
        phrase3: {
            title: "infusum delectabili boleto venenum",
            vocab: [
                "<strong>infusum</strong> = poured in (perfect passive participle)",
                "<strong>delectabili</strong> = delicious, delightful (dative/ablative)",
                "<strong>boleto</strong> = mushroom (dative - into which)",
                "<strong>venenum</strong> = poison (nominative/accusative)"
            ],
            grammar: "Accusative + infinitive (implied 'esse') in indirect statement. The word 'delectabili' adds grim irony - the deadly poison hidden in something delicious.",
            translation: "poison was poured into a delicious mushroom"
        },
        phrase4: {
            title: "nec vim medicaminis statim intellectam",
            vocab: [
                "<strong>nec</strong> = and not, nor",
                "<strong>vim</strong> = force, effect (accusative)",
                "<strong>medicaminis</strong> = of the drug/poison (genitive)",
                "<strong>statim</strong> = immediately",
                "<strong>intellectam</strong> = understood (perfect passive participle, accusative feminine)"
            ],
            grammar: "Continued indirect statement with 'esse' understood. 'Medicamen' is a neutral word that can mean medicine or poison - here clearly the latter.",
            translation: "nor was the effect of the drug immediately understood"
        },
        phrase5: {
            title: "socordiane an Claudii vinolentia",
            vocab: [
                "<strong>socordia</strong> = carelessness, stupidity (ablative)",
                "<strong>-ne</strong> = whether (interrogative enclitic)",
                "<strong>an</strong> = or",
                "<strong>Claudii</strong> = of Claudius (genitive)",
                "<strong>vinolentia</strong> = drunkenness, fondness for wine (ablative)"
            ],
            grammar: "Indirect question with alternative possibilities (-ne...an). Both options are unflattering - either carelessness or Claudius's notorious drinking.",
            translation: "whether through carelessness or Claudius's drunkenness"
        },
        phrase6: {
            title: "simul soluta alvus subvenisse videbatur",
            vocab: [
                "<strong>simul</strong> = at the same time",
                "<strong>soluta</strong> = loosened (perfect passive participle)",
                "<strong>alvus</strong> = bowels, stomach (nominative)",
                "<strong>subvenisse</strong> = to have come to aid (perfect infinitive)",
                "<strong>videbatur</strong> = seemed (imperfect passive)"
            ],
            grammar: "Personal construction with 'videor' - the loosened bowels 'seemed to have helped'. This may have expelled some poison, temporarily saving Claudius.",
            translation: "at the same time a loosening of the bowels seemed to have come to his aid"
        },
        phrase7: {
            title: "igitur exterrita Agrippina",
            vocab: [
                "<strong>igitur</strong> = therefore",
                "<strong>exterrita</strong> = terrified (perfect passive participle)",
                "<strong>Agrippina</strong> = Agrippina (nominative)"
            ],
            grammar: "The participle 'exterrita' is emphatic - Agrippina's terror drives the next sequence of events. Her plot appears to be failing.",
            translation: "therefore Agrippina, terrified"
        },
        phrase8: {
            title: "et, quando ultima timebantur",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>quando</strong> = since, because",
                "<strong>ultima</strong> = the worst things, extremities (nominative neuter plural)",
                "<strong>timebantur</strong> = were being feared (imperfect passive)"
            ],
            grammar: "Causal clause with 'quando'. 'Ultima' euphemistically refers to death or discovery - Agrippina fears exposure.",
            translation: "and, since the worst was feared"
        },
        phrase9: {
            title: "spreta praesentium invidia",
            vocab: [
                "<strong>spreta</strong> = having been disregarded (perfect passive participle, ablative)",
                "<strong>praesentium</strong> = of those present (genitive plural)",
                "<strong>invidia</strong> = resentment, ill-will (ablative)"
            ],
            grammar: "Ablative absolute showing Agrippina's ruthless determination - she ignores what witnesses might think or suspect.",
            translation: "disregarding the resentment of those present"
        },
        phrase10: {
            title: "provisam iam sibi Xenophontis medici conscientiam adhibet",
            vocab: [
                "<strong>provisam</strong> = prepared, secured beforehand (perfect passive participle)",
                "<strong>iam</strong> = already",
                "<strong>sibi</strong> = for herself (dative)",
                "<strong>Xenophontis</strong> = of Xenophon (genitive)",
                "<strong>medici</strong> = of the doctor (genitive)",
                "<strong>conscientiam</strong> = complicity, shared knowledge (accusative)",
                "<strong>adhibet</strong> = she calls upon, employs (present)"
            ],
            grammar: "The key word is 'provisam' - Agrippina had already secured Xenophon's complicity, showing premeditation. Historic present 'adhibet' adds vividness.",
            translation: "she calls upon the complicity of the doctor Xenophon, already secured for herself"
        },
        phrase11: {
            title: "ille tamquam nisus evomentis adiuvaret",
            vocab: [
                "<strong>ille</strong> = he, that man",
                "<strong>tamquam</strong> = as if",
                "<strong>nisus</strong> = efforts, straining (accusative plural)",
                "<strong>evomentis</strong> = of one vomiting (present participle, genitive)",
                "<strong>adiuvaret</strong> = he was helping (imperfect subjunctive)"
            ],
            grammar: "Comparative clause with 'tamquam' + subjunctive expressing pretense. The doctor pretends to help Claudius vomit up the poison.",
            translation: "he, as if helping the efforts of one vomiting"
        },
        phrase12: {
            title: "pinnam rapido veneno inlitam faucibus eius demisisse creditur",
            vocab: [
                "<strong>pinnam</strong> = feather (accusative)",
                "<strong>rapido</strong> = swift, quick-acting (ablative)",
                "<strong>veneno</strong> = with poison (ablative)",
                "<strong>inlitam</strong> = smeared (perfect passive participle)",
                "<strong>faucibus</strong> = into the throat (dative)",
                "<strong>eius</strong> = his (genitive)",
                "<strong>demisisse</strong> = to have pushed down (perfect infinitive)",
                "<strong>creditur</strong> = he is believed (present passive)"
            ],
            grammar: "'Creditur' with accusative + infinitive - Tacitus distances himself slightly with 'is believed'. The feather was a common tool for inducing vomiting, here weaponised.",
            translation: "is believed to have pushed a feather smeared with swift poison down his throat"
        },
        phrase13: {
            title: "haud ignarus summa scelera incipi cum periculo, peragi cum praemio",
            vocab: [
                "<strong>haud</strong> = not at all",
                "<strong>ignarus</strong> = ignorant, unaware (nominative)",
                "<strong>summa</strong> = the greatest (accusative neuter plural)",
                "<strong>scelera</strong> = crimes (accusative plural)",
                "<strong>incipi</strong> = are begun (present passive infinitive)",
                "<strong>cum</strong> = with (+ ablative)",
                "<strong>periculo</strong> = danger (ablative)",
                "<strong>peragi</strong> = are completed (present passive infinitive)",
                "<strong>praemio</strong> = reward (ablative)"
            ],
            grammar: "Indirect statement after 'haud ignarus'. The sententious maxim about crime and reward reflects cynical political wisdom - Xenophon knows he will be rewarded for his complicity.",
            translation: "well aware that the greatest crimes are begun with danger but completed with reward"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "adeoque cuncta mox pernotuere",
            device: "Archaic Verb Form",
            effect: "The use of 'pernotuere' (= pernoverunt) gives a solemn, historical weight to the narrative, suggesting these events have passed into the permanent record of history."
        },
        style2: {
            title: "infusum delectabili boleto venenum",
            device: "Grim Irony",
            effect: "The juxtaposition of 'delectabili' (delicious) with 'venenum' (poison) creates a chilling contrast - death hidden within pleasure, innocence masking murder."
        },
        style3: {
            title: "socordiane an Claudii vinolentia",
            device: "Alternative Question",
            effect: "Both alternatives are unflattering to Claudius - either stupidity or drunkenness explains his failure to notice. Tacitus damns him either way."
        },
        style4: {
            title: "igitur exterrita Agrippina",
            device: "Emphatic Word Order",
            effect: "Placing 'exterrita' before 'Agrippina' emphasises her terror. The mastermind of the plot is now panicking as her scheme appears to fail."
        },
        style5: {
            title: "spreta praesentium invidia",
            device: "Ablative Absolute",
            effect: "This compact phrase reveals Agrippina's ruthless determination - she acts openly despite witnesses, showing her confidence in her power and the complicity of others."
        },
        style6: {
            title: "ille tamquam nisus evomentis adiuvaret",
            device: "Pretense and Deception",
            effect: "'Tamquam' (as if) signals the pretense - the doctor who should heal instead murders, perverting his profession under the guise of treatment."
        },
        style7: {
            title: "pinnam rapido veneno inlitam faucibus eius demisisse creditur",
            device: "Authorial Distance",
            effect: "'Creditur' (is believed) allows Tacitus to report the tradition while maintaining slight distance, adding to the sinister uncertainty surrounding Claudius's death."
        },
        style8: {
            title: "haud ignarus summa scelera incipi cum periculo, peragi cum praemio",
            device: "Sententious Epigram",
            effect: "This cynical maxim about crime and reward encapsulates the moral corruption of the age - Xenophon calculates that murder will bring advancement, and he is right."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Tacitus reports that everything about Claudius's death soon became known. Contemporary writers recorded that poison was poured into a delicious mushroom, though the effect was not immediately apparent - either through carelessness or Claudius's drunkenness.</p>
            <p>When a loosening of the bowels seemed to help Claudius, the terrified Agrippina called upon the doctor Xenophon, whose complicity she had already secured. Pretending to help Claudius vomit, Xenophon pushed a poison-smeared feather down his throat, knowing that great crimes begin with danger but end with reward.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>The Poisoned Mushroom:</strong> Claudius was reportedly fond of mushrooms (boleti). The poisoning allegedly occurred at a banquet in October 54 CE. The mushroom became infamous - Nero later joked that mushrooms were 'the food of the gods' since Claudius had been deified.</p>
            <p><strong>Xenophon:</strong> Claudius's personal physician, Gaius Stertinius Xenophon, was from Cos. He was richly rewarded after Claudius's death, suggesting his complicity. Medical professionals held positions of dangerous trust in the imperial court.</p>
            <p><strong>The Feather:</strong> Romans commonly used feathers to induce vomiting during banquets. This made Xenophon's action appear innocent while being deadly.</p>
            <p><strong>Contemporary Sources:</strong> Tacitus appeals to 'writers of those times' - possibly including Pliny the Elder or Cluvius Rufus, whose works are now lost.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>How did the poison enter Claudius's body?</li>
                <li>Why was the effect of the poison not immediately noticed?</li>
                <li>What temporarily seemed to help Claudius?</li>
                <li>Why was Agrippina terrified?</li>
                <li>What had Agrippina already arranged with Xenophon?</li>
                <li>How did Xenophon pretend to help Claudius?</li>
                <li>What did Xenophon actually do with the feather?</li>
                <li>What did Xenophon understand about great crimes?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>Why does Tacitus use 'creditur' (is believed) rather than stating Xenophon's action as fact?</li>
                <li>What is the effect of the contrast between 'delectabili' and 'venenum'?</li>
                <li>How does 'socordiane an Claudii vinolentia' characterise Claudius?</li>
                <li>What does 'spreta praesentium invidia' reveal about Agrippina's character?</li>
                <li>How does the phrase 'provisam iam sibi' emphasise premeditation?</li>
                <li>What is the significance of the final maxim about crimes, danger, and reward?</li>
                <li>How does Tacitus create a sense of the court as a place of deception and danger?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Poison and Deception:</strong> The poisoned mushroom symbolises the corruption at the heart of the imperial court - deadly plots hidden behind hospitality and apparent pleasure.</p>
            <p><strong>Corruption of Professions:</strong> Xenophon perverts his role as healer. The doctor becomes murderer, the feather for vomiting becomes a weapon. Trust is weaponised.</p>
            <p><strong>Premeditation:</strong> Agrippina had 'already secured' Xenophon's complicity. This was no impulsive act but careful planning, making it more sinister.</p>
            <p><strong>Amoral Calculation:</strong> The final maxim encapsulates the cynical wisdom of the age - crime pays, provided you complete it. Moral considerations are absent; only risk and reward matter.</p>
            <p><strong>Open Secrets:</strong> Despite the elaborate deception, 'everything soon became known'. The truth circulates even when it cannot be spoken openly.</p>
        `
    }
};
