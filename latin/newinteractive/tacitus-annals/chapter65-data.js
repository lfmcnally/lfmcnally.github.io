// Tacitus Annals 12.65 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "However, the charges were that she had attacked the emperor's wife with curses and that, with her bands of slaves insufficiently restrained throughout Calabria, she was disturbing the peace of Italy. On account of these charges death was decreed, with Narcissus strongly opposing. He, suspecting Agrippina more and more, was reported to have declared among his close associates that his own destruction was certain, whether Britannicus or Nero gained power; but Caesar had deserved so well of him that he would sacrifice his life for his service. Messalina and Silius had been convicted; equal grounds for accusation existed again if Nero should rule; if Britannicus succeeded, the emperor had nothing to fear: but the whole household was being shaken by the stepmother's plots, a greater disgrace than if he had kept silent about the shamelessness of his former wife. And indeed shamelessness was not absent even now with Pallas as her adulterer, so that no one might doubt that she held honour, modesty, her body - everything - cheaper than power. Saying these things and more, he would embrace Britannicus, praying that he reach the strength of manhood as quickly as possible, now stretching out his hands to the gods, now to Britannicus himself: let him grow up, drive out his father's enemies, and even avenge the killers of his mother.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">ceterum</span> obiecta sunt</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">quod coniugem principis <span class="highlight-style style-2" onclick="showAnalysis('style2')">devotionibus</span> petivisset</span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">quodque parum coercitis per Calabriam servorum agminibus</span>
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">pacem Italiae turbaret</span>.
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">ob haec mors indicta</span>,
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')"><span class="highlight-style style-3" onclick="showAnalysis('style3')">multum adversante Narcisso</span></span>,
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">qui Agrippinam <span class="highlight-style style-4" onclick="showAnalysis('style4')">magis magisque</span> suspectans</span>
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">prompsisse inter proximos ferebatur</span>
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">certam sibi perniciem</span>, seu Britannicus rerum seu Nero poteretur</span>;
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">verum ita de se meritum Caesarem, ut vitam usui eius impenderet</span>.
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')"><span class="highlight-style style-6" onclick="showAnalysis('style6')">convictam Messalinam et Silium</span></span>;
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">pares iterum accusandi causas esse, si Nero imperitaret</span>;
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">Britannico successore nullum principi metum</span>:
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">at <span class="highlight-style style-7" onclick="showAnalysis('style7')">novercae insidiis</span> domum omnem convelli</span>,
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')">maiore flagitio quam si impudicitiam prioris coniugis reticuisset</span>.
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')">quamquam ne impudicitiam quidem nunc abesse <span class="highlight-style style-8" onclick="showAnalysis('style8')">Pallante adultero</span></span>,
        <span class="phrase phrase-17" onclick="showAnalysis('phrase17')">ne quis ambigat <span class="highlight-style style-9" onclick="showAnalysis('style9')">decus pudorem corpus, cuncta</span> regno viliora habere</span>.
        <span class="phrase phrase-18" onclick="showAnalysis('phrase18')">haec atque talia dictitans amplecti Britannicum</span>,
        <span class="phrase phrase-19" onclick="showAnalysis('phrase19')">robur aetatis quam maturrimum precari</span>,
        <span class="phrase phrase-20" onclick="showAnalysis('phrase20')"><span class="highlight-style style-10" onclick="showAnalysis('style10')">modo ad deos, modo ad ipsum</span> tendere manus</span>,
        <span class="phrase phrase-21" onclick="showAnalysis('phrase21')"><span class="highlight-style style-11" onclick="showAnalysis('style11')">adolesceret, patris inimicos depelleret, matris etiam interfectores ulcisceretur</span></span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "ceterum obiecta sunt",
            vocab: [
                "<strong>ceterum</strong> = however, but, moreover (adverb)",
                "<strong>obiecta</strong> = charges, accusations (neuter plural, from obicio)",
                "<strong>sunt</strong> = were (perfect passive)"
            ],
            grammar: "Perfect passive of 'obicio' (to throw against, to charge). The neuter plural 'obiecta' functions as a substantive noun meaning 'the things charged' or 'the accusations'.",
            translation: "However, the charges were"
        },
        phrase2: {
            title: "quod coniugem principis devotionibus petivisset",
            vocab: [
                "<strong>quod</strong> = that, because (conjunction introducing indirect statement)",
                "<strong>coniugem</strong> = wife (accusative)",
                "<strong>principis</strong> = of the emperor (genitive)",
                "<strong>devotionibus</strong> = with curses, with spells (ablative plural)",
                "<strong>petivisset</strong> = she had attacked (pluperfect subjunctive from peto)"
            ],
            grammar: "Indirect statement with subjunctive in secondary sequence. 'Devotiones' refers to ritual curses or magical spells - a serious accusation implying maleficium (harmful magic).",
            translation: "that she had attacked the emperor's wife with curses"
        },
        phrase3: {
            title: "quodque parum coercitis per Calabriam servorum agminibus",
            vocab: [
                "<strong>quodque</strong> = and that (quod + -que)",
                "<strong>parum</strong> = insufficiently, too little (adverb)",
                "<strong>coercitis</strong> = restrained, controlled (perfect passive participle, ablative plural)",
                "<strong>per</strong> = throughout (+ accusative)",
                "<strong>Calabriam</strong> = Calabria (accusative, region in southern Italy)",
                "<strong>servorum</strong> = of slaves (genitive plural)",
                "<strong>agminibus</strong> = bands, columns (ablative plural)"
            ],
            grammar: "Ablative absolute: 'servorum agminibus parum coercitis' - with the bands of slaves insufficiently restrained. This suggests negligent or deliberate failure to control a potential slave uprising.",
            translation: "and that, with her bands of slaves insufficiently restrained throughout Calabria"
        },
        phrase4: {
            title: "pacem Italiae turbaret",
            vocab: [
                "<strong>pacem</strong> = peace (accusative)",
                "<strong>Italiae</strong> = of Italy (genitive)",
                "<strong>turbaret</strong> = she was disturbing (imperfect subjunctive)"
            ],
            grammar: "Imperfect subjunctive continuing the indirect accusation. The charge implies she was threatening the stability of Italy itself - a grave political accusation.",
            translation: "she was disturbing the peace of Italy"
        },
        phrase5: {
            title: "ob haec mors indicta",
            vocab: [
                "<strong>ob</strong> = on account of (+ accusative)",
                "<strong>haec</strong> = these things (accusative neuter plural)",
                "<strong>mors</strong> = death (nominative)",
                "<strong>indicta</strong> = was decreed, was declared (perfect passive participle)"
            ],
            grammar: "Brief, stark sentence emphasising the finality of the verdict. 'Mors indicta' (death was decreed) is chillingly matter-of-fact.",
            translation: "On account of these charges death was decreed"
        },
        phrase6: {
            title: "multum adversante Narcisso",
            vocab: [
                "<strong>multum</strong> = greatly, much (adverb)",
                "<strong>adversante</strong> = opposing, resisting (present participle, ablative)",
                "<strong>Narcisso</strong> = Narcissus (ablative)"
            ],
            grammar: "Ablative absolute expressing concurrent circumstance. Narcissus, Claudius' powerful freedman secretary, opposed the execution - but his opposition failed.",
            translation: "with Narcissus strongly opposing"
        },
        phrase7: {
            title: "qui Agrippinam magis magisque suspectans",
            vocab: [
                "<strong>qui</strong> = who (relative pronoun)",
                "<strong>Agrippinam</strong> = Agrippina (accusative)",
                "<strong>magis magisque</strong> = more and more (adverbs)",
                "<strong>suspectans</strong> = suspecting (present participle)"
            ],
            grammar: "Present participle 'suspectans' shows ongoing, increasing suspicion. The repetition 'magis magisque' emphasises the growing intensity of his distrust.",
            translation: "who, suspecting Agrippina more and more"
        },
        phrase8: {
            title: "prompsisse inter proximos ferebatur",
            vocab: [
                "<strong>prompsisse</strong> = to have declared (perfect infinitive from promo)",
                "<strong>inter</strong> = among (+ accusative)",
                "<strong>proximos</strong> = his closest associates (accusative plural)",
                "<strong>ferebatur</strong> = was reported (imperfect passive)"
            ],
            grammar: "Indirect statement with 'ferebatur' (it was reported). The perfect infinitive 'prompsisse' indicates the declaration preceded the report. Note the distancing effect - Tacitus reports rumour, not fact.",
            translation: "was reported to have declared among his close associates"
        },
        phrase9: {
            title: "certam sibi perniciem, seu Britannicus rerum seu Nero poteretur",
            vocab: [
                "<strong>certam</strong> = certain (accusative feminine)",
                "<strong>sibi</strong> = for himself (dative reflexive)",
                "<strong>perniciem</strong> = destruction, ruin (accusative)",
                "<strong>seu... seu</strong> = whether... or",
                "<strong>Britannicus</strong> = Britannicus (nominative)",
                "<strong>rerum</strong> = of power, of affairs (genitive plural)",
                "<strong>Nero</strong> = Nero (nominative)",
                "<strong>poteretur</strong> = should gain control (imperfect subjunctive passive from potior)"
            ],
            grammar: "The 'seu... seu' construction presents alternative conditions, both leading to the same conclusion - Narcissus' doom. 'Potior' takes genitive ('rerum').",
            translation: "that his own destruction was certain, whether Britannicus or Nero gained power"
        },
        phrase10: {
            title: "verum ita de se meritum Caesarem, ut vitam usui eius impenderet",
            vocab: [
                "<strong>verum</strong> = but, however (conjunction)",
                "<strong>ita</strong> = so, to such a degree",
                "<strong>de</strong> = concerning (+ ablative)",
                "<strong>se</strong> = himself (ablative reflexive)",
                "<strong>meritum</strong> = deserved, earned (perfect participle from mereor)",
                "<strong>Caesarem</strong> = the emperor (accusative)",
                "<strong>ut</strong> = that (result clause)",
                "<strong>vitam</strong> = life (accusative)",
                "<strong>usui</strong> = for the service/use (dative)",
                "<strong>eius</strong> = his (genitive)",
                "<strong>impenderet</strong> = he would sacrifice (imperfect subjunctive)"
            ],
            grammar: "Result clause with 'ita... ut'. Narcissus claims loyalty despite knowing his fate - a touching but politically naive stance that Tacitus presents without comment.",
            translation: "but Caesar had deserved so well of him that he would sacrifice his life for his service"
        },
        phrase11: {
            title: "convictam Messalinam et Silium",
            vocab: [
                "<strong>convictam</strong> = convicted, found guilty (perfect passive participle, accusative feminine)",
                "<strong>Messalinam</strong> = Messalina (accusative)",
                "<strong>et</strong> = and",
                "<strong>Silium</strong> = Silius (accusative)"
            ],
            grammar: "Accusative in indirect statement (understood 'esse'). Narcissus reminds Claudius of his past service in exposing Messalina's adultery with Silius.",
            translation: "Messalina and Silius had been convicted"
        },
        phrase12: {
            title: "pares iterum accusandi causas esse, si Nero imperitaret",
            vocab: [
                "<strong>pares</strong> = equal (accusative plural)",
                "<strong>iterum</strong> = again (adverb)",
                "<strong>accusandi</strong> = of accusing (gerund, genitive)",
                "<strong>causas</strong> = grounds, reasons (accusative plural)",
                "<strong>esse</strong> = to be (infinitive)",
                "<strong>si</strong> = if (conditional)",
                "<strong>Nero</strong> = Nero (nominative)",
                "<strong>imperitaret</strong> = should rule (imperfect subjunctive from impero)"
            ],
            grammar: "Indirect statement with future-less-vivid condition ('si... imperitaret'). Narcissus warns that Agrippina, like Messalina, would give equal grounds for accusation.",
            translation: "equal grounds for accusation existed again if Nero should rule"
        },
        phrase13: {
            title: "Britannico successore nullum principi metum",
            vocab: [
                "<strong>Britannico</strong> = Britannicus (ablative)",
                "<strong>successore</strong> = as successor (ablative)",
                "<strong>nullum</strong> = no, none (accusative)",
                "<strong>principi</strong> = for the emperor (dative)",
                "<strong>metum</strong> = fear (accusative)"
            ],
            grammar: "Ablative absolute ('Britannico successore') with ellipsis of 'esse'. The construction is compact and emphatic: with Britannicus as successor, no fear for the emperor.",
            translation: "if Britannicus succeeded, the emperor had nothing to fear"
        },
        phrase14: {
            title: "at novercae insidiis domum omnem convelli",
            vocab: [
                "<strong>at</strong> = but (strong adversative)",
                "<strong>novercae</strong> = of the stepmother (genitive)",
                "<strong>insidiis</strong> = by plots, by treachery (ablative plural)",
                "<strong>domum</strong> = household (accusative)",
                "<strong>omnem</strong> = entire, whole (accusative)",
                "<strong>convelli</strong> = was being shaken (present passive infinitive)"
            ],
            grammar: "Indirect statement continuing Narcissus' speech. 'Noverca' (stepmother) is loaded - stepmothers in Roman culture were stereotypically wicked and dangerous.",
            translation: "but the whole household was being shaken by the stepmother's plots"
        },
        phrase15: {
            title: "maiore flagitio quam si impudicitiam prioris coniugis reticuisset",
            vocab: [
                "<strong>maiore</strong> = greater (ablative of comparison)",
                "<strong>flagitio</strong> = disgrace, scandal (ablative)",
                "<strong>quam</strong> = than (comparative)",
                "<strong>si</strong> = if",
                "<strong>impudicitiam</strong> = shamelessness, unchastity (accusative)",
                "<strong>prioris</strong> = former (genitive)",
                "<strong>coniugis</strong> = wife (genitive)",
                "<strong>reticuisset</strong> = he had kept silent about (pluperfect subjunctive)"
            ],
            grammar: "Comparative construction with ablative. Narcissus argues that tolerating Agrippina is worse than if he had concealed Messalina's adultery.",
            translation: "a greater disgrace than if he had kept silent about the shamelessness of his former wife"
        },
        phrase16: {
            title: "quamquam ne impudicitiam quidem nunc abesse Pallante adultero",
            vocab: [
                "<strong>quamquam</strong> = although, and yet (conjunction)",
                "<strong>ne... quidem</strong> = not even",
                "<strong>impudicitiam</strong> = shamelessness (accusative)",
                "<strong>nunc</strong> = now (adverb)",
                "<strong>abesse</strong> = to be absent (infinitive)",
                "<strong>Pallante</strong> = Pallas (ablative)",
                "<strong>adultero</strong> = as adulterer (ablative)"
            ],
            grammar: "Indirect statement with ablative absolute ('Pallante adultero'). Narcissus accuses Agrippina of adultery with Pallas, another powerful freedman - a direct attack on her morality.",
            translation: "and indeed shamelessness was not absent even now with Pallas as her adulterer"
        },
        phrase17: {
            title: "ne quis ambigat decus pudorem corpus, cuncta regno viliora habere",
            vocab: [
                "<strong>ne quis</strong> = so that no one (negative purpose)",
                "<strong>ambigat</strong> = might doubt (present subjunctive)",
                "<strong>decus</strong> = honour, dignity (accusative)",
                "<strong>pudorem</strong> = modesty, shame (accusative)",
                "<strong>corpus</strong> = body (accusative)",
                "<strong>cuncta</strong> = all things (accusative neuter plural)",
                "<strong>regno</strong> = than power (ablative of comparison)",
                "<strong>viliora</strong> = cheaper, of less value (accusative neuter plural comparative)",
                "<strong>habere</strong> = to hold, consider (infinitive)"
            ],
            grammar: "Purpose clause with 'ne quis' + subjunctive. The asyndeton (decus pudorem corpus) creates a powerful rhetorical list of what Agrippina sacrifices for power.",
            translation: "so that no one might doubt that she held honour, modesty, her body - everything - cheaper than power"
        },
        phrase18: {
            title: "haec atque talia dictitans amplecti Britannicum",
            vocab: [
                "<strong>haec</strong> = these things (accusative neuter plural)",
                "<strong>atque</strong> = and",
                "<strong>talia</strong> = such things (accusative neuter plural)",
                "<strong>dictitans</strong> = saying repeatedly (present participle from dictito, frequentative)",
                "<strong>amplecti</strong> = to embrace (present infinitive deponent)",
                "<strong>Britannicum</strong> = Britannicus (accusative)"
            ],
            grammar: "Historic infinitive ('amplecti') used for vivid narrative effect. The frequentative 'dictitans' shows Narcissus repeatedly made these arguments.",
            translation: "Saying these things and more, he would embrace Britannicus"
        },
        phrase19: {
            title: "robur aetatis quam maturrimum precari",
            vocab: [
                "<strong>robur</strong> = strength, maturity (accusative)",
                "<strong>aetatis</strong> = of age (genitive)",
                "<strong>quam maturrimum</strong> = as quickly as possible (superlative with quam)",
                "<strong>precari</strong> = to pray for (present infinitive deponent)"
            ],
            grammar: "Another historic infinitive. 'Quam' + superlative creates 'as X as possible'. Narcissus prays for Britannicus to reach adulthood quickly - a poignant wish given the boy's later fate.",
            translation: "praying that he reach the strength of manhood as quickly as possible"
        },
        phrase20: {
            title: "modo ad deos, modo ad ipsum tendere manus",
            vocab: [
                "<strong>modo... modo</strong> = now... now, sometimes... sometimes",
                "<strong>ad</strong> = to, towards (+ accusative)",
                "<strong>deos</strong> = the gods (accusative plural)",
                "<strong>ipsum</strong> = himself (accusative, referring to Britannicus)",
                "<strong>tendere</strong> = to stretch out (present infinitive)",
                "<strong>manus</strong> = hands (accusative plural)"
            ],
            grammar: "Historic infinitive with 'modo... modo' creating alternating rhythm. The gesture of stretching out hands is one of supplication and blessing.",
            translation: "now stretching out his hands to the gods, now to Britannicus himself"
        },
        phrase21: {
            title: "adolesceret, patris inimicos depelleret, matris etiam interfectores ulcisceretur",
            vocab: [
                "<strong>adolesceret</strong> = let him grow up (imperfect subjunctive)",
                "<strong>patris</strong> = of his father (genitive)",
                "<strong>inimicos</strong> = enemies (accusative plural)",
                "<strong>depelleret</strong> = let him drive out (imperfect subjunctive)",
                "<strong>matris</strong> = of his mother (genitive)",
                "<strong>etiam</strong> = even, also",
                "<strong>interfectores</strong> = killers, murderers (accusative plural)",
                "<strong>ulcisceretur</strong> = let him avenge (imperfect subjunctive deponent)"
            ],
            grammar: "Jussive subjunctives expressing Narcissus' prayers for Britannicus. The climactic reference to 'matris interfectores' (his mother's killers) refers to Agrippina's role in Messalina's death.",
            translation: "let him grow up, drive out his father's enemies, and even avenge the killers of his mother"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "ceterum",
            device: "Transitional Adversative",
            effect: "The word 'ceterum' (however/but) signals a shift from narrative to the specific charges, creating a sense of legal documentation and adding weight to what follows."
        },
        style2: {
            title: "devotionibus",
            device: "Loaded Vocabulary",
            effect: "The term 'devotiones' (curses/spells) evokes the world of maleficium - harmful magic. This charge would have been particularly damaging, associating Lepida with sinister, un-Roman practices."
        },
        style3: {
            title: "multum adversante Narcisso",
            device: "Ablative Absolute as Commentary",
            effect: "The ablative absolute functions almost parenthetically, highlighting Narcissus' futile opposition. The adverb 'multum' (greatly) emphasises his strong but ineffective resistance."
        },
        style4: {
            title: "magis magisque",
            device: "Repetition for Intensification",
            effect: "The doubled comparative 'more and more' conveys mounting paranoia. Tacitus shows Narcissus' suspicion as a growing obsession, lending psychological depth to his character."
        },
        style5: {
            title: "certam sibi perniciem",
            device: "Emphatic Word Order",
            effect: "Placing 'certam' (certain) first emphasises the inevitability of Narcissus' doom. The reflexive 'sibi' personalises the abstract threat, making his fear palpable."
        },
        style6: {
            title: "convictam Messalinam et Silium",
            device: "Historical Reference",
            effect: "The terse reference to Messalina's downfall reminds readers of Narcissus' past service while implicitly comparing Agrippina to the notorious empress - a damning parallel."
        },
        style7: {
            title: "novercae insidiis",
            device: "Cultural Stereotype",
            effect: "The word 'noverca' (stepmother) carries powerful negative connotations in Roman culture. Stepmothers were stereotypically portrayed as treacherous plotters against stepchildren."
        },
        style8: {
            title: "Pallante adultero",
            device: "Accusatory Ablative Absolute",
            effect: "The compact ablative absolute delivers a devastating accusation of adultery. Pallas, like Narcissus, was a powerful imperial freedman - the charge implies corruption at the heart of power."
        },
        style9: {
            title: "decus pudorem corpus, cuncta",
            device: "Asyndeton and Climax",
            effect: "The rapid listing without conjunctions (asyndeton) creates breathless intensity. The progression from abstract (honour, modesty) to physical (body) to universal (everything) builds to a devastating climax."
        },
        style10: {
            title: "modo ad deos, modo ad ipsum",
            device: "Anaphora with Variation",
            effect: "The repetition of 'modo... modo' creates a pathetic image of Narcissus turning desperately between divine and human hope, highlighting his vulnerability and emotional state."
        },
        style11: {
            title: "adolesceret, patris inimicos depelleret, matris etiam interfectores ulcisceretur",
            device: "Tricolon with Climax",
            effect: "Three jussive subjunctives build in intensity: growing up, driving out enemies, avenging murder. The final reference to Messalina's 'killers' points accusingly at Agrippina, creating dramatic irony."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Domitia Lepida is charged with using curses against the empress (Agrippina) and with disturbing Italy's peace by failing to control her slave gangs in Calabria. Death is decreed for her.</p>
            <p>Narcissus, the powerful freedman, opposes her execution but fails. Increasingly suspicious of Agrippina, he reportedly tells close associates that his destruction is certain whoever gains power - Britannicus or Nero - but he owes Claudius his loyalty.</p>
            <p>He reminds Claudius of exposing Messalina and warns that Agrippina poses equal danger. With Britannicus as heir, Claudius would be safe; with Agrippina in control, the household is being destroyed. He even accuses Agrippina of adultery with Pallas. Embracing Britannicus, Narcissus prays for the boy to grow up and avenge both his father's enemies and his mother's killers.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>Domitia Lepida:</strong> Nero's aunt (his father's sister) and former guardian, Lepida was a rival to Agrippina for influence over the young Nero. Her execution removed a powerful threat to Agrippina's dominance.</p>
            <p><strong>Narcissus:</strong> One of Claudius' most powerful freedmen, he had orchestrated the downfall of Messalina. He opposed Claudius' marriage to Agrippina and championed Britannicus as heir, making him Agrippina's natural enemy.</p>
            <p><strong>Pallas:</strong> Another powerful freedman who supported Agrippina. The accusation of adultery between them may or may not have been true, but it reflects the intense factional rivalry at court.</p>
            <p><strong>Messalina's Death:</strong> Narcissus' reference to 'matris interfectores' (killers of his mother) points to Agrippina's role in ensuring Messalina's execution in AD 48, which cleared the way for her own marriage to Claudius.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>What two charges were brought against Lepida?</li>
                <li>What was the outcome of the trial?</li>
                <li>Who opposed the verdict and why did his opposition fail?</li>
                <li>Why did Narcissus believe his destruction was certain?</li>
                <li>What past service did Narcissus remind Claudius of?</li>
                <li>According to Narcissus, what would happen under each potential successor?</li>
                <li>What accusation did Narcissus make about Agrippina and Pallas?</li>
                <li>What did Narcissus pray for Britannicus to do?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>How does Tacitus use the word 'devotionibus' to characterise the charges against Lepida?</li>
                <li>What is the effect of describing Narcissus as 'magis magisque suspectans'?</li>
                <li>Why does Narcissus compare Agrippina to Messalina? What is the rhetorical effect?</li>
                <li>How does the term 'noverca' (stepmother) carry cultural weight in this passage?</li>
                <li>Analyse the asyndeton in 'decus pudorem corpus, cuncta' - what effect does this create?</li>
                <li>What is the dramatic irony in Narcissus' prayers for Britannicus?</li>
                <li>How does Tacitus present Narcissus' character - sympathetically or critically?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Court Faction and Conspiracy:</strong> The passage reveals the deadly competition between imperial freedmen and their allies. Narcissus and Pallas represent opposing factions, with Britannicus and Nero as their respective candidates.</p>
            <p><strong>The Wicked Stepmother:</strong> Agrippina is cast in the Roman stereotype of the 'noverca' - the scheming stepmother who threatens legitimate heirs. This cultural trope adds moral weight to Narcissus' accusations.</p>
            <p><strong>Prophetic Futility:</strong> Narcissus correctly predicts his own doom and the dangers Agrippina poses, yet his warnings go unheeded. This creates tragic irony - he sees the future but cannot prevent it.</p>
            <p><strong>Female Power and Morality:</strong> Agrippina's alleged adultery with Pallas and her placement of 'regnum' (power) above 'decus, pudorem, corpus' reflects Roman anxieties about women wielding political influence.</p>
            <p><strong>Loyalty and Self-Sacrifice:</strong> Narcissus' declaration that he would sacrifice his life for Claudius presents a complex portrait - genuine loyalty or political calculation? Tacitus leaves this ambiguous.</p>
        `
    }
};
