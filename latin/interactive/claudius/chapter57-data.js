// Tacitus Annals 12.57 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "But when the spectacle was finished, the water channel was opened. The carelessness of the work became evident, since it had not been dug down sufficiently to the bottom or middle levels of the lake. And so, after an interval of time, the tunnels were dug deeper, and to draw together a crowd again a gladiatorial spectacle was staged, with pontoons installed for infantry combat. Indeed, a banquet arranged near the outflow of the lake affected everyone with great terror, because the force of the waters bursting forth was dragging along whatever was nearby, with those further away either shaken or terrified by the crashing and noise. At the same time, Agrippina, exploiting the emperor's panic, accused Narcissus, the supervisor of the work, of greed and embezzlement. Nor did he hold back, accusing her of womanly lack of self-control and excessive ambitions.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')">sed <span class="highlight-style style-1" onclick="showAnalysis('style1')">perfecto spectaculo</span> apertum aquarum iter</span>.
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')"><span class="highlight-style style-2" onclick="showAnalysis('style2')">incuria operis</span> manifesta fuit</span>,
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">haud satis depressi ad lacus ima vel media</span>.
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">eoque tempore interiecto</span>
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">altius effossi specus</span>,
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">et <span class="highlight-style style-3" onclick="showAnalysis('style3')">contrahendae rursum multitudini</span> gladiatorum spectaculum editur</span>,
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">inditis pontibus pedestrem ad pugnam</span>.
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">quin et convivium <span class="highlight-style style-4" onclick="showAnalysis('style4')">effluvio lacus</span> adpositum</span>
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">magna formidine</span> cunctos adfecit</span>,
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">quia <span class="highlight-style style-6" onclick="showAnalysis('style6')">vis aquarum prorumpens</span> proxima trahebat</span>,
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')"><span class="highlight-style style-7" onclick="showAnalysis('style7')">convulsis ulterioribus</span> aut <span class="highlight-style style-8" onclick="showAnalysis('style8')">fragore et sonitu</span> exterritis</span>.
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">simul Agrippina <span class="highlight-style style-9" onclick="showAnalysis('style9')">trepidatione principis usa</span></span>
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">ministrum operis Narcissum incusat</span>
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')"><span class="highlight-style style-10" onclick="showAnalysis('style10')">cupidinis ac praedarum</span></span>.
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')">nec ille reticet</span>,
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')"><span class="highlight-style style-11" onclick="showAnalysis('style11')">impotentiam muliebrem nimiasque spes</span> eius arguens</span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "sed perfecto spectaculo apertum aquarum iter",
            vocab: [
                "<strong>sed</strong> = but (conjunction)",
                "<strong>perfecto</strong> = finished, completed (perfect passive participle, ablative neuter singular, from <em>perficio</em>)",
                "<strong>spectaculo</strong> = spectacle, show (ablative neuter singular)",
                "<strong>apertum</strong> = was opened (perfect passive participle, nominative neuter singular, from <em>aperio</em>)",
                "<strong>aquarum</strong> = of the waters (genitive plural, from <em>aqua, -ae</em> f.)",
                "<strong>iter</strong> = path, channel, route (nominative neuter singular, 3rd declension, gen. <em>itineris</em>)"
            ],
            grammar: "Ablative absolute 'perfecto spectaculo' (when the spectacle had been finished) sets the temporal context. The main clause uses a perfect passive participle 'apertum' with an implied 'est'. This refers to the opening of the drainage tunnel from the Fucine Lake.",
            translation: "But when the spectacle was finished, the water channel was opened"
        },
        phrase2: {
            title: "incuria operis manifesta fuit",
            vocab: [
                "<strong>incuria</strong> = carelessness, negligence (nominative feminine singular, from <em>incuria, -ae</em> f.)",
                "<strong>operis</strong> = of the work (genitive singular, from <em>opus, operis</em> n.)",
                "<strong>manifesta</strong> = evident, clear, obvious (nominative feminine singular, agreeing with <em>incuria</em>)",
                "<strong>fuit</strong> = was, became (perfect of <em>sum</em>)"
            ],
            grammar: "Simple sentence with predicate adjective. Note that 'incuria' is a compound noun formed from 'in-' (not) + 'cura' (care). Tacitus immediately assigns blame through this damning assessment.",
            translation: "The carelessness of the work became evident"
        },
        phrase3: {
            title: "haud satis depressi ad lacus ima vel media",
            vocab: [
                "<strong>haud</strong> = not (negative adverb, more emphatic than <em>non</em>)",
                "<strong>satis</strong> = sufficiently, enough (adverb)",
                "<strong>depressi</strong> = dug down, lowered (perfect passive participle, genitive masculine singular, from <em>deprimo, deprimere, depressi, depressum</em>)",
                "<strong>ad</strong> = to, towards (preposition + accusative)",
                "<strong>lacus</strong> = of the lake (genitive singular, 4th declension)",
                "<strong>ima</strong> = the lowest parts, the bottom (accusative neuter plural, substantive adjective from <em>imus, -a, -um</em>)",
                "<strong>vel</strong> = or (conjunction)",
                "<strong>media</strong> = the middle parts (accusative neuter plural, substantive adjective from <em>medius, -a, -um</em>)"
            ],
            grammar: "Genitive of description/cause explaining why the carelessness was evident. The genitive 'depressi' agrees with an understood 'specus' (tunnel) or 'operis'. The substantive adjectives 'ima' and 'media' (neuter plural) refer to the depth levels of the lake.",
            translation: "since it had not been dug down sufficiently to the bottom or middle levels of the lake"
        },
        phrase4: {
            title: "eoque tempore interiecto",
            vocab: [
                "<strong>eo</strong> = therefore, for that reason; or 'that' (demonstrative, ablative neuter)",
                "<strong>-que</strong> = and (enclitic conjunction)",
                "<strong>tempore</strong> = with time (ablative singular, from <em>tempus, temporis</em> n.)",
                "<strong>interiecto</strong> = having been interposed, having passed (perfect passive participle, ablative neuter singular, from <em>intericio</em>)"
            ],
            grammar: "Ablative absolute indicating a period of time elapsed. 'Interiecto' is from 'inter' + 'iacio' (to throw between). This construction is very common in Tacitus for temporal transitions.",
            translation: "and so, after an interval of time"
        },
        phrase5: {
            title: "altius effossi specus",
            vocab: [
                "<strong>altius</strong> = more deeply, deeper (comparative adverb from <em>alte</em>)",
                "<strong>effossi</strong> = dug out (perfect passive participle, nominative masculine plural, from <em>effodio, effodere, effodi, effossum</em> - to dig out)",
                "<strong>specus</strong> = tunnels, caves, underground passages (nominative plural, 4th declension, <em>specus, -us</em> m.)"
            ],
            grammar: "The subject 'specus' is 4th declension and here nominative plural. The passive 'effossi (sunt)' with implied 'sunt' indicates the tunnels were dug by workers. The comparative 'altius' emphasises the corrective work required.",
            translation: "the tunnels were dug deeper"
        },
        phrase6: {
            title: "et contrahendae rursum multitudini gladiatorum spectaculum editur",
            vocab: [
                "<strong>et</strong> = and (conjunction)",
                "<strong>contrahendae</strong> = to be gathered, to be assembled (gerundive, dative feminine singular, from <em>contraho</em>)",
                "<strong>rursum</strong> = again (adverb, variant of <em>rursus</em>)",
                "<strong>multitudini</strong> = for the crowd (dative singular, from <em>multitudo, -inis</em> f.)",
                "<strong>gladiatorum</strong> = of gladiators (genitive plural, from <em>gladiator, -oris</em> m.)",
                "<strong>spectaculum</strong> = spectacle, show (nominative neuter singular)",
                "<strong>editur</strong> = is staged, is put on (present passive, from <em>edo, edere, edidi, editum</em> - to put forth, produce)"
            ],
            grammar: "Dative of purpose with gerundive: 'contrahendae multitudini' = 'for the purpose of gathering a crowd again'. This construction expresses the purpose of staging the second show. The historic present 'editur' adds vividness.",
            translation: "and to draw together a crowd again a gladiatorial spectacle was staged"
        },
        phrase7: {
            title: "inditis pontibus pedestrem ad pugnam",
            vocab: [
                "<strong>inditis</strong> = having been installed, placed in position (perfect passive participle, ablative masculine plural, from <em>indo, indere, indidi, inditum</em>)",
                "<strong>pontibus</strong> = with pontoons, bridges (ablative plural, from <em>pons, pontis</em> m.)",
                "<strong>pedestrem</strong> = on foot, infantry (accusative feminine singular, agreeing with <em>pugnam</em>)",
                "<strong>ad</strong> = for (preposition + accusative, expressing purpose)",
                "<strong>pugnam</strong> = combat, fight (accusative singular, from <em>pugna, -ae</em> f.)"
            ],
            grammar: "Ablative absolute 'inditis pontibus' describes the preparation. 'Pedestrem ad pugnam' = 'for infantry combat' shows the pontoons allowed gladiators to fight on foot rather than in naval combat (<em>naumachia</em>).",
            translation: "with pontoons installed for infantry combat"
        },
        phrase8: {
            title: "quin et convivium effluvio lacus adpositum",
            vocab: [
                "<strong>quin et</strong> = indeed even, moreover (emphatic combination)",
                "<strong>convivium</strong> = banquet, feast (nominative neuter singular, from <em>convivium, -ii</em> n.)",
                "<strong>effluvio</strong> = near the outflow (dative of reference or ablative of place, from <em>effluvium, -ii</em> n. - outflow, drainage)",
                "<strong>lacus</strong> = of the lake (genitive singular, 4th declension)",
                "<strong>adpositum</strong> = placed near, set beside (perfect passive participle, nominative neuter singular, from <em>appono</em>)"
            ],
            grammar: "'Quin et' is an emphatic intensifier meaning 'indeed even' or 'what is more'. The placement of the banquet near the drainage outflow shows the reckless confidence (or foolishness) of the organisers.",
            translation: "Indeed, a banquet arranged near the outflow of the lake"
        },
        phrase9: {
            title: "magna formidine cunctos adfecit",
            vocab: [
                "<strong>magna</strong> = great (ablative feminine singular, from <em>magnus, -a, -um</em>)",
                "<strong>formidine</strong> = with terror, with dread (ablative singular, from <em>formido, -inis</em> f.)",
                "<strong>cunctos</strong> = everyone, all (accusative masculine plural, from <em>cunctus, -a, -um</em>)",
                "<strong>adfecit</strong> = affected, struck (perfect active, from <em>adficio, adficere, adfeci, adfectum</em>)"
            ],
            grammar: "Ablative of manner 'magna formidine' (with great terror). 'Adficio' + ablative means 'to affect someone with something'. The perfect tense marks this as the climactic moment of the disaster.",
            translation: "affected everyone with great terror"
        },
        phrase10: {
            title: "quia vis aquarum prorumpens proxima trahebat",
            vocab: [
                "<strong>quia</strong> = because (causal conjunction)",
                "<strong>vis</strong> = force, violence (nominative singular, irregular noun)",
                "<strong>aquarum</strong> = of the waters (genitive plural)",
                "<strong>prorumpens</strong> = bursting forth (present active participle, nominative feminine singular, from <em>prorumpo</em>)",
                "<strong>proxima</strong> = the nearest things, whatever was nearby (accusative neuter plural, substantive)",
                "<strong>trahebat</strong> = was dragging, was pulling (imperfect active, from <em>traho</em>)"
            ],
            grammar: "Causal clause with 'quia' explaining the terror. The present participle 'prorumpens' conveys the ongoing, violent action. 'Proxima' is used as a substantive adjective meaning 'the things nearest'.",
            translation: "because the force of the waters bursting forth was dragging along whatever was nearby"
        },
        phrase11: {
            title: "convulsis ulterioribus aut fragore et sonitu exterritis",
            vocab: [
                "<strong>convulsis</strong> = shaken, torn away (perfect passive participle, ablative masculine/neuter plural, from <em>convello, -ere, -velli, -vulsum</em>)",
                "<strong>ulterioribus</strong> = those further away (ablative plural, substantive comparative adjective)",
                "<strong>aut</strong> = or (conjunction)",
                "<strong>fragore</strong> = by the crash, by the din (ablative singular, from <em>fragor, -oris</em> m.)",
                "<strong>et</strong> = and (conjunction)",
                "<strong>sonitu</strong> = by the noise (ablative singular, 4th declension, from <em>sonitus, -us</em> m.)",
                "<strong>exterritis</strong> = terrified (perfect passive participle, ablative masculine/neuter plural, from <em>exterreo</em>)"
            ],
            grammar: "Ablative absolute construction. 'Ulterioribus' is a substantive adjective meaning 'those further away'. The dual ablatives 'fragore et sonitu' create an onomatopoeic effect emphasising the terrifying sounds.",
            translation: "with those further away either shaken or terrified by the crashing and noise"
        },
        phrase12: {
            title: "simul Agrippina trepidatione principis usa",
            vocab: [
                "<strong>simul</strong> = at the same time (adverb)",
                "<strong>Agrippina</strong> = Agrippina (nominative, Claudius' wife and Nero's mother)",
                "<strong>trepidatione</strong> = the panic, the alarm (ablative singular, from <em>trepidatio, -onis</em> f.)",
                "<strong>principis</strong> = of the emperor (genitive singular, from <em>princeps, -ipis</em> m.)",
                "<strong>usa</strong> = having exploited, having used (perfect participle deponent, nominative feminine singular, from <em>utor, uti, usus sum</em> + ablative)"
            ],
            grammar: "'Utor' is a deponent verb taking the ablative. Agrippina exploits ('usa' = having used) the emperor's panic as a weapon. 'Simul' shows her opportunism - she acts immediately while Claudius is distracted.",
            translation: "At the same time, Agrippina, exploiting the emperor's panic"
        },
        phrase13: {
            title: "ministrum operis Narcissum incusat",
            vocab: [
                "<strong>ministrum</strong> = the supervisor, the administrator (accusative singular, from <em>minister, -tri</em> m.)",
                "<strong>operis</strong> = of the work (genitive singular, from <em>opus, operis</em> n.)",
                "<strong>Narcissum</strong> = Narcissus (accusative, the powerful freedman of Claudius)",
                "<strong>incusat</strong> = accuses, reproaches (present active, from <em>incuso, -are</em>)"
            ],
            grammar: "Double accusative construction: 'Narcissum' is the direct object, 'ministrum operis' is in apposition. Narcissus was one of Claudius' most influential freedmen and supervised this massive engineering project.",
            translation: "accused Narcissus, the supervisor of the work"
        },
        phrase14: {
            title: "cupidinis ac praedarum",
            vocab: [
                "<strong>cupidinis</strong> = of greed (genitive singular, from <em>cupido, -inis</em> f.)",
                "<strong>ac</strong> = and (conjunction)",
                "<strong>praedarum</strong> = of plunder, of embezzlement (genitive plural, from <em>praeda, -ae</em> f.)"
            ],
            grammar: "Genitive of charge or accusation with 'incusat'. These genitives specify what Agrippina accuses Narcissus of. 'Praeda' normally means 'plunder' or 'booty' but here implies financial corruption and embezzlement of project funds.",
            translation: "of greed and embezzlement"
        },
        phrase15: {
            title: "nec ille reticet",
            vocab: [
                "<strong>nec</strong> = and not, nor (conjunction)",
                "<strong>ille</strong> = he, that man (nominative masculine singular, referring to Narcissus)",
                "<strong>reticet</strong> = keeps silent, holds back (present active, from <em>reticeo, -ere</em>)"
            ],
            grammar: "Simple but powerful sentence. 'Nec' introduces Narcissus' counter-attack. The historic present 'reticet' brings the confrontation to life. Narcissus' willingness to fight back shows the high stakes of court politics.",
            translation: "Nor did he hold back"
        },
        phrase16: {
            title: "impotentiam muliebrem nimiasque spes eius arguens",
            vocab: [
                "<strong>impotentiam</strong> = lack of self-control, unbridled passion (accusative singular, from <em>impotentia, -ae</em> f.)",
                "<strong>muliebrem</strong> = womanly, feminine (accusative feminine singular, from <em>muliebris, -e</em>)",
                "<strong>nimias</strong> = excessive (accusative feminine plural, from <em>nimius, -a, -um</em>)",
                "<strong>-que</strong> = and (enclitic conjunction)",
                "<strong>spes</strong> = hopes, ambitions (accusative plural, from <em>spes, spei</em> f., 5th declension)",
                "<strong>eius</strong> = her (genitive singular)",
                "<strong>arguens</strong> = accusing, charging (present active participle, nominative masculine singular, from <em>arguo, arguere</em>)"
            ],
            grammar: "Present participle 'arguens' with accusative of charge. 'Impotentia' literally means 'lack of power (over oneself)' - i.e., inability to control one's passions. The phrase 'nimias spes' hints at Agrippina's ambitions for Nero and herself.",
            translation: "accusing her of womanly lack of self-control and excessive ambitions"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "perfecto spectaculo",
            device: "Ablative Absolute as Scene-Setting",
            effect: "The ablative absolute efficiently transitions from the spectacle (the naumachia described earlier) to its disastrous aftermath. The passive participle suggests events unfolding beyond human control."
        },
        style2: {
            title: "incuria operis",
            device: "Damning Assessment",
            effect: "Tacitus immediately assigns blame with this blunt phrase. 'Incuria' (carelessness) is a loaded term suggesting negligence and incompetence, foreshadowing Agrippina's later accusations against Narcissus."
        },
        style3: {
            title: "contrahendae rursum multitudini",
            device: "Gerundive of Purpose",
            effect: "The gerundive construction emphasises the calculated, cynical nature of staging another spectacle - its purpose is explicitly to gather crowds, using entertainment to distract from engineering failure."
        },
        style4: {
            title: "effluvio lacus",
            device: "Ominous Foreshadowing",
            effect: "Placing the imperial banquet near the drainage outflow creates dramatic irony - the reader senses disaster before it strikes. The casual detail underlines the dangerous overconfidence of the court."
        },
        style5: {
            title: "magna formidine",
            device: "Emphatic Ablative",
            effect: "The ablative of manner with 'magna' emphasises the scale of terror. Tacitus inverts the expected imperial display of power - the emperor's grand project becomes a source of fear rather than awe."
        },
        style6: {
            title: "vis aquarum prorumpens",
            device: "Personification and Vivid Imagery",
            effect: "The waters are given violent agency with 'vis' (force) and 'prorumpens' (bursting forth). Nature becomes a destructive force that exposes human incompetence and hubris."
        },
        style7: {
            title: "convulsis ulterioribus",
            device: "Ablative Absolute for Chaos",
            effect: "The participle 'convulsis' (torn, shaken) conveys physical violence. Those further away are paradoxically not safe - the chaos spreads outward, suggesting total loss of control."
        },
        style8: {
            title: "fragore et sonitu",
            device: "Sound Imagery / Onomatopoeia",
            effect: "The paired ablatives create an almost onomatopoeic effect - 'fragor' suggests crashing and 'sonitus' general noise. The auditory detail makes the scene vivid and terrifying."
        },
        style9: {
            title: "trepidatione principis usa",
            device: "Revelation of Character",
            effect: "Agrippina's opportunism is exposed: 'simul' (at the same time) shows she acts instantly, and 'usa' (having used/exploited) reveals her predatory political instincts. The emperor's panic becomes her weapon."
        },
        style10: {
            title: "cupidinis ac praedarum",
            device: "Loaded Accusations",
            effect: "The genitives are deliberately vague and damning - 'praeda' suggests military plunder applied to peacetime corruption. These are political weapons rather than specific legal charges."
        },
        style11: {
            title: "impotentiam muliebrem nimiasque spes",
            device: "Misogynistic Counter-Attack",
            effect: "Narcissus employs conventional Roman misogyny - 'impotentia muliebris' (womanly lack of self-control) is a standard gendered insult. 'Nimias spes' (excessive ambitions) is more dangerous, hinting at Agrippina's designs on power through Nero."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Following the spectacular <em>naumachia</em> (mock naval battle), the drainage channel from the Fucine Lake was opened, but the engineering work proved inadequate - the tunnel had not been dug deep enough.</p>
            <p>After corrections were made, a second spectacle was staged with gladiatorial combat on pontoons. However, a banquet placed near the lake's outflow ended in disaster when water burst forth, causing widespread panic.</p>
            <p>Agrippina immediately exploited Claudius' fear to attack his freedman Narcissus, accusing him of corruption. Narcissus counter-attacked with accusations of feminine excess and dangerous ambition - a public confrontation revealing the bitter power struggle at the heart of Claudius' court.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>The Fucine Lake Project:</strong> This was one of the largest engineering projects of antiquity. Claudius attempted to drain the Fucine Lake (Lacus Fucinus) in central Italy to create farmland. The project employed 30,000 workers over eleven years and involved a 5.6 km drainage tunnel through a mountain.</p>
            <p><strong>The Naumachia:</strong> Before opening the drainage channel, Claudius staged a spectacular mock naval battle with 19,000 condemned criminals and prisoners of war. This is described in the preceding chapter (12.56).</p>
            <p><strong>Narcissus:</strong> One of Claudius' most powerful freedmen, Narcissus held enormous influence and had been instrumental in the downfall of Claudius' previous wife Messalina. He was a bitter enemy of Agrippina and supported Britannicus as heir.</p>
            <p><strong>Agrippina:</strong> Claudius' fourth wife and Nero's mother. By this point (AD 52), she had secured Nero's adoption and was systematically advancing his position while eliminating rivals. Her conflict with Narcissus was a struggle over the succession.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>What was opened after the spectacle was finished?</li>
                <li>What problem became evident with the engineering work?</li>
                <li>What was done to correct the problem?</li>
                <li>Why was a second spectacle staged?</li>
                <li>What special arrangements were made for the gladiatorial combat?</li>
                <li>Where was the banquet positioned?</li>
                <li>What caused the panic at the banquet?</li>
                <li>How did Agrippina exploit the situation?</li>
                <li>What accusations did she make against Narcissus?</li>
                <li>How did Narcissus respond to Agrippina's attack?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>How does Tacitus use the phrase <em>incuria operis manifesta fuit</em> to assign blame? Who bears responsibility for the failure?</li>
                <li>What does the phrase <em>contrahendae rursum multitudini</em> suggest about the regime's priorities?</li>
                <li>Why does Tacitus include the detail about the banquet being placed near the outflow? What effect does this create?</li>
                <li>How does the description of the flooding (vis aquarum prorumpens, fragore et sonitu) contribute to the dramatic impact?</li>
                <li>What does Agrippina's immediate exploitation of the disaster (<em>simul... usa</em>) reveal about her character?</li>
                <li>Analyse Narcissus' counter-accusations. What is the significance of <em>impotentia muliebris</em> and <em>nimiae spes</em>?</li>
                <li>How does this passage illustrate the nature of political conflict in Claudius' court?</li>
                <li>What does the public confrontation between Agrippina and Narcissus suggest about Claudius' control of his own household?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Imperial Incompetence:</strong> The engineering failure exposes the gap between imperial ambition and practical competence. The massive project becomes an embarrassment, requiring a cover-up spectacle to distract from failure.</p>
            <p><strong>Spectacle and Distraction:</strong> The second show is explicitly staged <em>contrahendae multitudini</em> (to gather a crowd) - entertainment as political tool to manage public perception and distract from problems.</p>
            <p><strong>Nature vs. Imperial Power:</strong> The flooding represents nature's indifference to human pretension. The 'vis aquarum' (force of the waters) overwhelms the emperor's grand project, causing 'formido' (terror) rather than the intended awe.</p>
            <p><strong>Court Politics and the Succession:</strong> The Agrippina-Narcissus confrontation exposes the vicious power struggle over who will succeed Claudius. Agrippina promotes Nero; Narcissus supports Britannicus. This is a fight to the death.</p>
            <p><strong>Gendered Discourse:</strong> Narcissus' accusations employ conventional Roman misogyny - <em>impotentia muliebris</em> (womanly lack of self-control) was a standard way to delegitimise women's political activity. Yet the charge of <em>nimiae spes</em> (excessive ambitions) is more politically dangerous.</p>
            <p><strong>Claudius' Weakness:</strong> The emperor is reduced to 'trepidatio' (panic), and his subordinates fight openly before him. His passivity contrasts with Agrippina's predatory opportunism and Narcissus' defiant resistance.</p>
        `
    }
};
