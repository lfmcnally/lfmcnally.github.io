// Tacitus Annals 12.68 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "Meanwhile the Senate was being summoned and the consuls and priests were announcing vows for the emperor's safety, when already lifeless he was being covered with blankets and warm compresses, while measures that would be for strengthening Nero's power were being arranged. First of all, Agrippina, as if overcome by grief and seeking comfort, held Britannicus in an embrace, called him the true likeness of his father's face, and by various tricks delayed him so he would not leave the room. She also detained Antonia and Octavia, his sisters, and had closed all entrances with guards, and frequently announced that the emperor's health was improving, so that the soldiers would remain in good hope and the propitious time from the predictions of the astrologers would arrive.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">vocabatur interim senatus</span></span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">votaque pro incolumitate principis consules et sacerdotes nuncupabant</span></span>,
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')"><span class="highlight-style style-2" onclick="showAnalysis('style2')">cum iam exanimis</span> vestibus et fomentis obtegeretur</span>,
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">dum quae res forent <span class="highlight-style style-3" onclick="showAnalysis('style3')">firmando Neronis imperio</span> componuntur</span>.
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">iam primum Agrippina</span>,
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')"><span class="highlight-style style-4" onclick="showAnalysis('style4')">velut dolore victa</span> et solacia conquirens</span>,
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">tenere amplexu Britannicum</span>,
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">veram paterni oris effigiem</span> appellare</span>
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">ac <span class="highlight-style style-6" onclick="showAnalysis('style6')">variis artibus</span> demorari ne cubiculo egrederetur</span>.
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">Antoniam quoque et Octaviam sorores eius attinuit</span>,
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">et cunctos aditus custodiis clauserat</span>,
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')"><span class="highlight-style style-7" onclick="showAnalysis('style7')">crebroque vulgabat</span> ire in melius valetudinem principis</span>,
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">quo miles bona in spe ageret</span>
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">tempusque prosperum <span class="highlight-style style-8" onclick="showAnalysis('style8')">ex monitis Chaldaeorum</span> adventaret</span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "vocabatur interim senatus",
            vocab: [
                "<strong>vocabatur</strong> = was being summoned (imperfect passive indicative)",
                "<strong>interim</strong> = meanwhile (adverb)",
                "<strong>senatus</strong> = the Senate (nominative singular)"
            ],
            grammar: "Imperfect passive indicating continuous action. The Senate is being summoned for what they believe is routine business, unaware the emperor is already dead.",
            translation: "Meanwhile the Senate was being summoned"
        },
        phrase2: {
            title: "votaque pro incolumitate principis consules et sacerdotes nuncupabant",
            vocab: [
                "<strong>vota</strong> = vows (accusative plural)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>pro</strong> = for (+ ablative)",
                "<strong>incolumitate</strong> = safety, well-being (ablative)",
                "<strong>principis</strong> = of the emperor (genitive)",
                "<strong>consules</strong> = the consuls (nominative plural)",
                "<strong>sacerdotes</strong> = priests (nominative plural)",
                "<strong>nuncupabant</strong> = were announcing (imperfect indicative)"
            ],
            grammar: "The imperfect 'nuncupabant' shows ongoing ceremonial activity. The irony is intense - prayers for the safety of a man already dead.",
            translation: "and the consuls and priests were announcing vows for the emperor's safety"
        },
        phrase3: {
            title: "cum iam exanimis vestibus et fomentis obtegeretur",
            vocab: [
                "<strong>cum</strong> = when, although (+ subjunctive)",
                "<strong>iam</strong> = already, now (adverb)",
                "<strong>exanimis</strong> = lifeless, dead (nominative masculine)",
                "<strong>vestibus</strong> = with clothes, blankets (ablative plural)",
                "<strong>fomentis</strong> = with warm compresses, poultices (ablative plural)",
                "<strong>obtegeretur</strong> = was being covered (imperfect subjunctive passive)"
            ],
            grammar: "Cum circumstantial clause with subjunctive. The stark 'iam exanimis' (already lifeless) creates the central irony - public ceremony masks private death.",
            translation: "when already lifeless he was being covered with blankets and warm compresses"
        },
        phrase4: {
            title: "dum quae res forent firmando Neronis imperio componuntur",
            vocab: [
                "<strong>dum</strong> = while (+ indicative for contemporaneous action)",
                "<strong>quae</strong> = which (nominative plural)",
                "<strong>res</strong> = things, measures (nominative plural)",
                "<strong>forent</strong> = would be (imperfect subjunctive of sum)",
                "<strong>firmando</strong> = for strengthening (gerundive, dative)",
                "<strong>Neronis</strong> = of Nero (genitive)",
                "<strong>imperio</strong> = power, rule (dative)",
                "<strong>componuntur</strong> = are being arranged (present passive)"
            ],
            grammar: "Relative clause of characteristic with subjunctive 'forent'. The dative gerundive 'firmando imperio' expresses purpose - everything is being arranged to secure Nero's power.",
            translation: "while measures that would be for strengthening Nero's power were being arranged"
        },
        phrase5: {
            title: "iam primum Agrippina",
            vocab: [
                "<strong>iam primum</strong> = first of all, to begin with",
                "<strong>Agrippina</strong> = Agrippina (nominative)"
            ],
            grammar: "Transitional phrase introducing the main subject. Tacitus now focuses on Agrippina's calculated actions during the crisis.",
            translation: "First of all, Agrippina"
        },
        phrase6: {
            title: "velut dolore victa et solacia conquirens",
            vocab: [
                "<strong>velut</strong> = as if (adverb)",
                "<strong>dolore</strong> = by grief (ablative of means)",
                "<strong>victa</strong> = overcome, conquered (perfect passive participle)",
                "<strong>et</strong> = and",
                "<strong>solacia</strong> = comfort, consolation (accusative plural)",
                "<strong>conquirens</strong> = seeking (present participle)"
            ],
            grammar: "The key word is 'velut' (as if) - Tacitus signals this is performance, not genuine grief. The participles 'victa' and 'conquirens' describe her pretended state.",
            translation: "as if overcome by grief and seeking comfort"
        },
        phrase7: {
            title: "tenere amplexu Britannicum",
            vocab: [
                "<strong>tenere</strong> = to hold (present infinitive, historic)",
                "<strong>amplexu</strong> = in an embrace (ablative)",
                "<strong>Britannicum</strong> = Britannicus (accusative)"
            ],
            grammar: "Historic infinitive, giving vivid immediacy to the narrative. Agrippina physically restrains Britannicus under the pretense of motherly comfort.",
            translation: "held Britannicus in an embrace"
        },
        phrase8: {
            title: "veram paterni oris effigiem appellare",
            vocab: [
                "<strong>veram</strong> = true, genuine (accusative feminine)",
                "<strong>paterni</strong> = of his father, paternal (genitive)",
                "<strong>oris</strong> = of the face (genitive)",
                "<strong>effigiem</strong> = likeness, image (accusative)",
                "<strong>appellare</strong> = to call (historic infinitive)"
            ],
            grammar: "Historic infinitive continuing the series. The phrase drips with irony - she calls Britannicus his father's true image while working to deprive him of his father's throne.",
            translation: "called him the true likeness of his father's face"
        },
        phrase9: {
            title: "ac variis artibus demorari ne cubiculo egrederetur",
            vocab: [
                "<strong>ac</strong> = and",
                "<strong>variis</strong> = various, different (ablative plural)",
                "<strong>artibus</strong> = by tricks, by devices (ablative plural)",
                "<strong>demorari</strong> = to delay (historic infinitive)",
                "<strong>ne</strong> = so that... not, lest",
                "<strong>cubiculo</strong> = from the room (ablative of separation)",
                "<strong>egrederetur</strong> = he might leave (imperfect subjunctive)"
            ],
            grammar: "Purpose clause with 'ne' + subjunctive. 'Variis artibus' (by various tricks) reveals her cunning - she uses multiple stratagems to keep Britannicus confined.",
            translation: "and by various tricks delayed him so he would not leave the room"
        },
        phrase10: {
            title: "Antoniam quoque et Octaviam sorores eius attinuit",
            vocab: [
                "<strong>Antoniam</strong> = Antonia (accusative)",
                "<strong>quoque</strong> = also (adverb)",
                "<strong>et</strong> = and",
                "<strong>Octaviam</strong> = Octavia (accusative)",
                "<strong>sorores</strong> = sisters (accusative plural)",
                "<strong>eius</strong> = his (genitive)",
                "<strong>attinuit</strong> = she detained, she held back (perfect)"
            ],
            grammar: "Perfect tense 'attinuit' indicates completed action. Agrippina systematically isolates all of Claudius' children to prevent them from interfering.",
            translation: "She also detained Antonia and Octavia, his sisters"
        },
        phrase11: {
            title: "et cunctos aditus custodiis clauserat",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>cunctos</strong> = all (accusative plural)",
                "<strong>aditus</strong> = entrances, approaches (accusative plural)",
                "<strong>custodiis</strong> = with guards (ablative plural)",
                "<strong>clauserat</strong> = she had closed (pluperfect)"
            ],
            grammar: "Pluperfect 'clauserat' indicates this was done even before the other actions - Agrippina had already secured all exits, showing premeditation.",
            translation: "and had closed all entrances with guards"
        },
        phrase12: {
            title: "crebroque vulgabat ire in melius valetudinem principis",
            vocab: [
                "<strong>crebro</strong> = frequently (adverb)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>vulgabat</strong> = she was announcing, spreading (imperfect)",
                "<strong>ire</strong> = to go, was going (infinitive)",
                "<strong>in melius</strong> = for the better, improving",
                "<strong>valetudinem</strong> = health (accusative)",
                "<strong>principis</strong> = of the emperor (genitive)"
            ],
            grammar: "Indirect statement with infinitive 'ire'. The imperfect 'vulgabat' with 'crebro' shows repeated false announcements - propaganda to buy time.",
            translation: "and frequently announced that the emperor's health was improving"
        },
        phrase13: {
            title: "quo miles bona in spe ageret",
            vocab: [
                "<strong>quo</strong> = so that (purpose, often with comparative)",
                "<strong>miles</strong> = the soldier/soldiers (nominative)",
                "<strong>bona</strong> = good (ablative)",
                "<strong>in spe</strong> = in hope (ablative)",
                "<strong>ageret</strong> = might remain, might be (imperfect subjunctive)"
            ],
            grammar: "Purpose clause with 'quo' + subjunctive. Keeping the military hopeful was essential - their support would determine who became emperor.",
            translation: "so that the soldiers would remain in good hope"
        },
        phrase14: {
            title: "tempusque prosperum ex monitis Chaldaeorum adventaret",
            vocab: [
                "<strong>tempus</strong> = time (nominative)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>prosperum</strong> = propitious, favourable (nominative)",
                "<strong>ex</strong> = from, according to (+ ablative)",
                "<strong>monitis</strong> = predictions, warnings (ablative plural)",
                "<strong>Chaldaeorum</strong> = of the Chaldaeans/astrologers (genitive plural)",
                "<strong>adventaret</strong> = might arrive (imperfect subjunctive)"
            ],
            grammar: "Continued purpose clause. The Chaldaei were Babylonian astrologers; Agrippina waited for the astrologically auspicious moment to announce Nero's accession.",
            translation: "and the propitious time from the predictions of the astrologers would arrive"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "vocabatur... senatus / votaque... nuncupabant",
            device: "Dramatic Irony",
            effect: "The Senate is summoned and vows are made for the emperor's safety while he lies dead. This creates powerful dramatic irony - the reader knows what the characters do not, exposing the hollowness of state ceremony."
        },
        style2: {
            title: "cum iam exanimis",
            device: "Stark Contrast",
            effect: "The blunt statement 'already lifeless' (iam exanimis) is placed immediately against the public ceremonies. The contrast between official pretense and grim reality is maximised."
        },
        style3: {
            title: "firmando Neronis imperio",
            device: "Revealing Purpose",
            effect: "Tacitus explicitly states that all arrangements are 'for strengthening Nero's power' - stripping away any pretense of mourning or proper succession. Politics, not piety, drives events."
        },
        style4: {
            title: "velut dolore victa",
            device: "Signposted Deception",
            effect: "The word 'velut' (as if) immediately signals that Agrippina's grief is performance. Tacitus ensures readers understand they are watching calculated theatre, not genuine emotion."
        },
        style5: {
            title: "veram paterni oris effigiem",
            device: "Bitter Irony",
            effect: "Agrippina calls Britannicus the 'true likeness of his father's face' while actively destroying his inheritance. The hypocritical flattery underscores her manipulation."
        },
        style6: {
            title: "variis artibus",
            device: "Loaded Vocabulary",
            effect: "The phrase 'various tricks' (variis artibus) reveals Agrippina's cunning. 'Artes' often carries negative connotations of scheming and deceit in Tacitus."
        },
        style7: {
            title: "crebroque vulgabat",
            device: "Emphasis on Propaganda",
            effect: "The combination of 'frequently' (crebro) with 'announced publicly' (vulgabat) shows systematic disinformation. Agrippina controls the narrative through repeated lies."
        },
        style8: {
            title: "ex monitis Chaldaeorum",
            device: "Contemptuous Detail",
            effect: "The reference to astrologers (Chaldaei) adds a note of superstition to Agrippina's scheming. Tacitus subtly criticises reliance on such foreign practices in matters of state."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>This passage describes the immediate aftermath of Claudius' death (probably by poisoning). While the Senate is summoned and officials pray for the emperor's recovery, Claudius already lies dead, covered to conceal his condition.</p>
            <p>Agrippina takes control, pretending grief while physically restraining Britannicus and his sisters. She seals all exits with guards and spreads false reports of improvement, waiting for the astrologers' propitious moment to announce Nero's accession.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>The Death of Claudius:</strong> Claudius died on 13 October 54 CE, almost certainly poisoned. Ancient sources blame Agrippina, who allegedly used the poisoner Locusta. The famous story involves poisoned mushrooms.</p>
            <p><strong>Britannicus:</strong> Claudius' natural son and rightful heir, born in 41 CE. He was about 13 at his father's death. Agrippina needed to keep him isolated until Nero's position was secure. He would be poisoned in 55 CE.</p>
            <p><strong>The Praetorian Guard:</strong> The 'miles' (soldiers) here refers primarily to the Praetorians. Their support was essential for any emperor's accession. Agrippina's false bulletins kept them loyal until the right moment.</p>
            <p><strong>Chaldaean Astrologers:</strong> Babylonian astrologers were influential in Rome despite periodic expulsions. Agrippina used their predictions to choose the most auspicious hour for Nero's proclamation.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>What was the Senate doing while Claudius lay dead?</li>
                <li>How was Claudius' body being concealed?</li>
                <li>What was being arranged 'in the meantime'?</li>
                <li>How did Agrippina pretend to feel?</li>
                <li>What did she call Britannicus?</li>
                <li>Why did she prevent him from leaving the room?</li>
                <li>Who else did she detain?</li>
                <li>What false information did she spread?</li>
                <li>What was she waiting for from the astrologers?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>How does Tacitus create dramatic irony in the opening sentences?</li>
                <li>What is the effect of placing 'iam exanimis' (already lifeless) so prominently?</li>
                <li>Why does Tacitus use 'velut' (as if) to describe Agrippina's grief?</li>
                <li>What is ironic about Agrippina calling Britannicus 'the true likeness of his father's face'?</li>
                <li>How does the phrase 'variis artibus' (by various tricks) characterise Agrippina?</li>
                <li>What does the detail about the astrologers add to our understanding of Agrippina?</li>
                <li>How does this passage demonstrate the gap between public ceremony and private reality in imperial Rome?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Deception and Theatre:</strong> Every action is performance. Agrippina feigns grief, prayers are offered for a dead man, and false bulletins maintain an illusion. Imperial politics is revealed as elaborate theatre.</p>
            <p><strong>The Isolation of Power:</strong> Agrippina systematically isolates all who might interfere - Britannicus, his sisters, even controlling access with guards. Power is maintained through control of information and movement.</p>
            <p><strong>Irony and Hypocrisy:</strong> The gap between words and reality is stark. Vows for the emperor's safety, Agrippina's 'grief', her praise of Britannicus - all are exposed as hollow performance.</p>
            <p><strong>Women and Power:</strong> Agrippina operates behind the scenes but controls everything. She cannot hold power openly, so she manipulates through pretense and physical control.</p>
        `
    }
};
