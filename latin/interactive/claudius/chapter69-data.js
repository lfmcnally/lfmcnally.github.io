// Tacitus Annals 12.69 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "Then at midday on October 13th, with the palace doors suddenly thrown open, Nero goes out to the cohort with Burrus accompanying him, which according to military custom is present for guard duty. There, with the prefect directing, he was received with auspicious shouts and placed in a litter. They say that some hesitated, looking back and repeatedly asking where Britannicus was: soon, with no one urging differently, they followed what was offered to them. And Nero, carried into the camp and having delivered a speech fitting to the occasion, with a donative promised after the example of his father's generosity, is hailed as emperor. The decrees of the senators followed the decision of the soldiers, nor was there any doubt in the provinces. Divine honours are decreed for Claudius and the funeral ceremony was celebrated just as for the deified Augustus, with Agrippina emulating the magnificence of her great-grandmother Livia. Yet the will was not read, lest the stepson having been placed before the son should disturb the minds of the common people with its injustice and resentment.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">tunc</span> medio diei <span class="highlight-style style-2" onclick="showAnalysis('style2')">tertium ante Idus Octobris</span></span>,
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">foribus palatii <span class="highlight-style style-3" onclick="showAnalysis('style3')">repente</span> diductis</span>,
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">comitante Burro Nero egreditur ad cohortem</span>,
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">quae more militiae excubiis adest</span>.
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">ibi monente praefecto <span class="highlight-style style-4" onclick="showAnalysis('style4')">faustis vocibus</span> exceptus</span>
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">inditur lecticae</span>.
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">dubitavisse quosdam ferunt</span></span>,
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')"><span class="highlight-style style-6" onclick="showAnalysis('style6')">respectantes rogitantesque</span> ubi Britannicus esset</span>:
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">mox <span class="highlight-style style-7" onclick="showAnalysis('style7')">nullo in diversum auctore</span></span>
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">quae offerebantur secuti sunt</span>.
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">inlatusque castris Nero</span>
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">et congruentia tempori praefatus</span>,
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">promisso donativo <span class="highlight-style style-8" onclick="showAnalysis('style8')">ad exemplum paternae largitionis</span></span>,
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')"><span class="highlight-style style-9" onclick="showAnalysis('style9')">imperator consalutatur</span></span>.
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')"><span class="highlight-style style-10" onclick="showAnalysis('style10')">sententiam militum secuta patrum consulta</span></span>,
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')">nec dubitatum est apud provincias</span>.
        <span class="phrase phrase-17" onclick="showAnalysis('phrase17')">caelestesque honores Claudio decernuntur</span>
        <span class="phrase phrase-18" onclick="showAnalysis('phrase18')">et funeris sollemne <span class="highlight-style style-11" onclick="showAnalysis('style11')">perinde ac divo Augusto</span> celebratur</span>,
        <span class="phrase phrase-19" onclick="showAnalysis('phrase19')">aemulante Agrippina <span class="highlight-style style-12" onclick="showAnalysis('style12')">proaviae Liviae magnificentiam</span></span>.
        <span class="phrase phrase-20" onclick="showAnalysis('phrase20')">testamentum tamen haud recitatum</span>,
        <span class="phrase phrase-21" onclick="showAnalysis('phrase21')">ne antepositus filio <span class="highlight-style style-13" onclick="showAnalysis('style13')">privignus</span> <span class="highlight-style style-14" onclick="showAnalysis('style14')">iniuria et invidia</span> animos vulgi turbaret</span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "tunc medio diei tertium ante Idus Octobris",
            vocab: [
                "<strong>tunc</strong> = then, at that time (adverb)",
                "<strong>medio</strong> = middle (ablative neuter)",
                "<strong>diei</strong> = of the day (genitive)",
                "<strong>tertium</strong> = third (accusative neuter)",
                "<strong>ante</strong> = before (+ accusative)",
                "<strong>Idus</strong> = Ides (accusative plural)",
                "<strong>Octobris</strong> = of October (genitive)"
            ],
            grammar: "Roman date formula: 'tertium ante Idus Octobris' = October 13th. The Ides of October fell on the 15th, so the third day before is the 13th (counting inclusively). 'Medio diei' is ablative of time.",
            translation: "Then at midday on October 13th"
        },
        phrase2: {
            title: "foribus palatii repente diductis",
            vocab: [
                "<strong>foribus</strong> = doors (ablative plural)",
                "<strong>palatii</strong> = of the palace (genitive)",
                "<strong>repente</strong> = suddenly (adverb)",
                "<strong>diductis</strong> = having been thrown open (perfect passive participle, ablative plural)"
            ],
            grammar: "Ablative absolute construction. The dramatic opening of the palace doors signals a carefully staged political moment - Nero's first public appearance as ruler.",
            translation: "with the palace doors suddenly thrown open"
        },
        phrase3: {
            title: "comitante Burro Nero egreditur ad cohortem",
            vocab: [
                "<strong>comitante</strong> = accompanying (present participle, ablative)",
                "<strong>Burro</strong> = Burrus (ablative)",
                "<strong>Nero</strong> = Nero (nominative)",
                "<strong>egreditur</strong> = goes out (present deponent)",
                "<strong>ad</strong> = to (+ accusative)",
                "<strong>cohortem</strong> = cohort (accusative)"
            ],
            grammar: "Ablative absolute with 'comitante Burro'. Sextus Afranius Burrus was Praetorian Prefect, appointed by Agrippina. His presence legitimises Nero's claim to the military.",
            translation: "with Burrus accompanying, Nero goes out to the cohort"
        },
        phrase4: {
            title: "quae more militiae excubiis adest",
            vocab: [
                "<strong>quae</strong> = which (nominative feminine singular)",
                "<strong>more</strong> = according to the custom (ablative)",
                "<strong>militiae</strong> = of military service (genitive)",
                "<strong>excubiis</strong> = for guard duty (dative of purpose)",
                "<strong>adest</strong> = is present (present)"
            ],
            grammar: "Relative clause describing the cohort. The Praetorian Guard routinely stood guard at the palace. This explains why soldiers were conveniently available to acclaim Nero.",
            translation: "which, according to military custom, is present for guard duty"
        },
        phrase5: {
            title: "ibi monente praefecto faustis vocibus exceptus",
            vocab: [
                "<strong>ibi</strong> = there (adverb)",
                "<strong>monente</strong> = directing, prompting (present participle, ablative)",
                "<strong>praefecto</strong> = the prefect (ablative)",
                "<strong>faustis</strong> = auspicious, favourable (ablative plural)",
                "<strong>vocibus</strong> = with shouts, voices (ablative plural)",
                "<strong>exceptus</strong> = received (perfect passive participle)"
            ],
            grammar: "Another ablative absolute with 'monente praefecto' - Burrus is orchestrating the soldiers' response. 'Faustis vocibus' is ablative of manner.",
            translation: "there, with the prefect directing, he was received with auspicious shouts"
        },
        phrase6: {
            title: "inditur lecticae",
            vocab: [
                "<strong>inditur</strong> = he is placed (present passive)",
                "<strong>lecticae</strong> = into a litter (dative)"
            ],
            grammar: "Historic present tense for vividness. The litter was a traditional mode of transport for important figures. Nero is being physically elevated before the troops.",
            translation: "he is placed in a litter"
        },
        phrase7: {
            title: "dubitavisse quosdam ferunt",
            vocab: [
                "<strong>dubitavisse</strong> = to have hesitated (perfect infinitive)",
                "<strong>quosdam</strong> = some (accusative plural)",
                "<strong>ferunt</strong> = they say, it is reported (present)"
            ],
            grammar: "Indirect statement with 'ferunt' + accusative (quosdam) + infinitive (dubitavisse). Tacitus uses 'ferunt' to distance himself from the claim while recording dissent.",
            translation: "they say that some hesitated"
        },
        phrase8: {
            title: "respectantes rogitantesque ubi Britannicus esset",
            vocab: [
                "<strong>respectantes</strong> = looking back (present participle, nominative plural)",
                "<strong>rogitantesque</strong> = and repeatedly asking (present participle, nominative plural)",
                "<strong>ubi</strong> = where",
                "<strong>Britannicus</strong> = Britannicus (nominative)",
                "<strong>esset</strong> = was, might be (imperfect subjunctive)"
            ],
            grammar: "Two present participles describe the hesitant soldiers. The frequentative 'rogitantes' (from rogito) implies repeated asking. Indirect question with subjunctive 'esset'.",
            translation: "looking back and repeatedly asking where Britannicus was"
        },
        phrase9: {
            title: "mox nullo in diversum auctore",
            vocab: [
                "<strong>mox</strong> = soon (adverb)",
                "<strong>nullo</strong> = no one, with no one (ablative)",
                "<strong>in diversum</strong> = in a different direction, differently",
                "<strong>auctore</strong> = urging, advocating (ablative)"
            ],
            grammar: "Ablative absolute. The lack of any alternative leader ('nullo auctore') means resistance quickly collapses. No one offers Britannicus as an alternative.",
            translation: "soon, with no one urging differently"
        },
        phrase10: {
            title: "quae offerebantur secuti sunt",
            vocab: [
                "<strong>quae</strong> = what, the things which (accusative plural)",
                "<strong>offerebantur</strong> = were being offered (imperfect passive)",
                "<strong>secuti sunt</strong> = they followed (perfect deponent)"
            ],
            grammar: "Relative clause as object of 'secuti sunt'. The passive 'offerebantur' emphasises that the soldiers were passive recipients, simply accepting what was presented to them.",
            translation: "they followed what was offered to them"
        },
        phrase11: {
            title: "inlatusque castris Nero",
            vocab: [
                "<strong>inlatusque</strong> = and having been carried in (perfect passive participle + -que)",
                "<strong>castris</strong> = into the camp (dative/ablative)",
                "<strong>Nero</strong> = Nero (nominative)"
            ],
            grammar: "The 'castra praetoria' was the Praetorian camp in Rome. Being carried there (passive 'inlatus') shows Nero as the object of others' actions, not an active agent.",
            translation: "and Nero, carried into the camp"
        },
        phrase12: {
            title: "et congruentia tempori praefatus",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>congruentia</strong> = fitting things (accusative plural)",
                "<strong>tempori</strong> = to the occasion (dative)",
                "<strong>praefatus</strong> = having spoken beforehand (perfect deponent participle)"
            ],
            grammar: "Perfect participle from deponent 'praefor'. Nero delivers a speech appropriate to the moment - likely written by his advisors Seneca and Burrus.",
            translation: "and having delivered a speech fitting to the occasion"
        },
        phrase13: {
            title: "promisso donativo ad exemplum paternae largitionis",
            vocab: [
                "<strong>promisso</strong> = having been promised (perfect passive participle, ablative)",
                "<strong>donativo</strong> = donative, cash gift (ablative)",
                "<strong>ad exemplum</strong> = after the example of",
                "<strong>paternae</strong> = of his father (genitive feminine)",
                "<strong>largitionis</strong> = generosity, largesse (genitive)"
            ],
            grammar: "Ablative absolute. Claudius had given a donative upon his accession in AD 41. Nero promises the same, buying military loyalty.",
            translation: "with a donative promised after the example of his father's generosity"
        },
        phrase14: {
            title: "imperator consalutatur",
            vocab: [
                "<strong>imperator</strong> = emperor, commander (nominative)",
                "<strong>consalutatur</strong> = he is hailed, acclaimed (present passive)"
            ],
            grammar: "Historic present passive. 'Imperator' originally meant military commander; acclamation by troops was the traditional source of this title. The passive shows Nero receiving, not earning, the title.",
            translation: "he is hailed as emperor"
        },
        phrase15: {
            title: "sententiam militum secuta patrum consulta",
            vocab: [
                "<strong>sententiam</strong> = decision, judgement (accusative)",
                "<strong>militum</strong> = of the soldiers (genitive plural)",
                "<strong>secuta</strong> = having followed (perfect participle, nominative plural)",
                "<strong>patrum</strong> = of the senators (genitive plural)",
                "<strong>consulta</strong> = decrees, resolutions (nominative plural)"
            ],
            grammar: "The Senate's decrees ('patrum consulta') follow the soldiers' decision - a pointed reversal of constitutional order. The military decides; the Senate merely ratifies.",
            translation: "the decrees of the senators followed the decision of the soldiers"
        },
        phrase16: {
            title: "nec dubitatum est apud provincias",
            vocab: [
                "<strong>nec</strong> = nor, and not",
                "<strong>dubitatum est</strong> = was there doubt (perfect passive impersonal)",
                "<strong>apud</strong> = among, in (+ accusative)",
                "<strong>provincias</strong> = the provinces (accusative plural)"
            ],
            grammar: "Impersonal passive construction. The provinces accept Nero without question - the succession has been managed so smoothly that resistance never materialises.",
            translation: "nor was there any doubt in the provinces"
        },
        phrase17: {
            title: "caelestesque honores Claudio decernuntur",
            vocab: [
                "<strong>caelestesque</strong> = and divine, heavenly (nominative plural + -que)",
                "<strong>honores</strong> = honours (nominative plural)",
                "<strong>Claudio</strong> = for Claudius (dative)",
                "<strong>decernuntur</strong> = are decreed (present passive)"
            ],
            grammar: "Deification (consecratio) was granted to deceased emperors by senatorial decree. Claudius becomes 'divus Claudius', supposedly joining the gods.",
            translation: "and divine honours are decreed for Claudius"
        },
        phrase18: {
            title: "et funeris sollemne perinde ac divo Augusto celebratur",
            vocab: [
                "<strong>et</strong> = and",
                "<strong>funeris</strong> = of the funeral (genitive)",
                "<strong>sollemne</strong> = ceremony, rite (nominative)",
                "<strong>perinde ac</strong> = just as, in the same way as",
                "<strong>divo</strong> = the deified (dative)",
                "<strong>Augusto</strong> = Augustus (dative)",
                "<strong>celebratur</strong> = is celebrated (present passive)"
            ],
            grammar: "Comparison with Augustus' funeral in AD 14 sets the standard for imperial obsequies. 'Divo Augusto' uses the title granted after Augustus' deification.",
            translation: "and the funeral ceremony was celebrated just as for the deified Augustus"
        },
        phrase19: {
            title: "aemulante Agrippina proaviae Liviae magnificentiam",
            vocab: [
                "<strong>aemulante</strong> = emulating (present participle, ablative)",
                "<strong>Agrippina</strong> = Agrippina (ablative)",
                "<strong>proaviae</strong> = of her great-grandmother (genitive)",
                "<strong>Liviae</strong> = Livia (genitive)",
                "<strong>magnificentiam</strong> = magnificence, splendour (accusative)"
            ],
            grammar: "Ablative absolute. Livia, Augustus' wife, had stage-managed his funeral and deification. Agrippina models herself on this powerful imperial woman.",
            translation: "with Agrippina emulating the magnificence of her great-grandmother Livia"
        },
        phrase20: {
            title: "testamentum tamen haud recitatum",
            vocab: [
                "<strong>testamentum</strong> = will, testament (nominative)",
                "<strong>tamen</strong> = however, yet",
                "<strong>haud</strong> = not",
                "<strong>recitatum</strong> = was read out (perfect passive participle)"
            ],
            grammar: "Elliptical construction (verb 'est' understood). The suppression of Claudius' will is highly irregular - Roman wills were normally read publicly.",
            translation: "yet the will was not read"
        },
        phrase21: {
            title: "ne antepositus filio privignus iniuria et invidia animos vulgi turbaret",
            vocab: [
                "<strong>ne</strong> = lest, so that not",
                "<strong>antepositus</strong> = having been placed before (perfect passive participle)",
                "<strong>filio</strong> = the son (dative)",
                "<strong>privignus</strong> = stepson (nominative)",
                "<strong>iniuria</strong> = injustice, wrong (ablative)",
                "<strong>et</strong> = and",
                "<strong>invidia</strong> = resentment, envy (ablative)",
                "<strong>animos</strong> = minds, spirits (accusative plural)",
                "<strong>vulgi</strong> = of the common people (genitive)",
                "<strong>turbaret</strong> = should disturb (imperfect subjunctive)"
            ],
            grammar: "Negative purpose clause with 'ne' + subjunctive. 'Antepositus filio' reveals Claudius' will disinherited Britannicus in favour of Nero - hence its suppression.",
            translation: "lest the stepson, having been placed before the son, should disturb the minds of the common people with its injustice and resentment"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "tunc",
            device: "Dramatic Timing",
            effect: "The opening 'tunc' (then) creates immediate dramatic momentum, picking up from Claudius' death and plunging readers into the succession crisis."
        },
        style2: {
            title: "tertium ante Idus Octobris",
            device: "Precise Dating",
            effect: "The exact date (October 13th, AD 54) gives the narrative historical weight and emphasises how carefully the coup was orchestrated - they knew exactly when to act."
        },
        style3: {
            title: "repente",
            device: "Dramatic Adverb",
            effect: "The word 'suddenly' emphasises the theatrical nature of Nero's appearance - this is a staged spectacle, with the palace doors thrown open like a theatrical reveal."
        },
        style4: {
            title: "faustis vocibus",
            device: "Loaded Vocabulary",
            effect: "The 'auspicious shouts' were clearly pre-arranged by Burrus. The religious overtone of 'faustis' (favourable omens) lends false legitimacy to a manufactured acclamation."
        },
        style5: {
            title: "dubitavisse quosdam ferunt",
            device: "Distancing Formula",
            effect: "Tacitus uses 'ferunt' (they say) to report dissent without vouching for it personally. This records opposition while maintaining historical caution."
        },
        style6: {
            title: "respectantes rogitantesque",
            device: "Paired Participles",
            effect: "The two participles create a vivid image of soldiers looking back and asking questions. The frequentative 'rogitantes' (repeatedly asking) emphasises their persistent concern about Britannicus."
        },
        style7: {
            title: "nullo in diversum auctore",
            device: "Litotes",
            effect: "The understatement 'with no one urging differently' implies that if anyone had championed Britannicus, the outcome might have been different. Silence enabled the coup."
        },
        style8: {
            title: "ad exemplum paternae largitionis",
            device: "Ironic Reference",
            effect: "Calling Claudius' generosity 'paternal' is laden with irony - Claudius was Nero's adoptive father, not his biological one, and Nero's succession disinherited Claudius' actual son."
        },
        style9: {
            title: "imperator consalutatur",
            device: "Passive Voice",
            effect: "The passive construction emphasises that Nero receives rather than earns the title. He is the object of others' actions, not an active agent in his own accession."
        },
        style10: {
            title: "sententiam militum secuta patrum consulta",
            device: "Pointed Word Order",
            effect: "By placing 'militum' (soldiers) before 'patrum' (senators), Tacitus emphasises the constitutional inversion: the army decides, the Senate merely follows."
        },
        style11: {
            title: "perinde ac divo Augusto",
            device: "Imperial Comparison",
            effect: "Comparing Claudius' funeral to Augustus' both legitimises Nero's succession and invites readers to consider whether Claudius deserves such honours."
        },
        style12: {
            title: "proaviae Liviae magnificentiam",
            device: "Dynastic Echo",
            effect: "Linking Agrippina to Livia highlights the continuity of powerful imperial women. Both orchestrated successions; both promoted their sons at others' expense."
        },
        style13: {
            title: "privignus",
            device: "Loaded Term",
            effect: "Calling Nero 'stepson' rather than using his name emphasises the unnaturalness of his succession over Claudius' biological son Britannicus."
        },
        style14: {
            title: "iniuria et invidia",
            device: "Hendiadys",
            effect: "The paired abstracts 'injustice and resentment' capture both the moral wrong of disinheriting Britannicus and the public reaction it would provoke."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>On October 13th AD 54, Nero emerges from the palace with Praetorian Prefect Burrus and is presented to the guard cohort on duty. With Burrus directing proceedings, the soldiers acclaim Nero and place him in a litter.</p>
            <p>Some soldiers hesitate, asking about Britannicus, but with no one offering an alternative, they follow along. Nero is carried to the Praetorian camp, delivers a speech, and promises a donative. He is hailed as emperor.</p>
            <p>The Senate ratifies the soldiers' decision, and the provinces accept Nero without question. Claudius receives divine honours and a grand funeral, with Agrippina emulating her great-grandmother Livia. However, Claudius' will is suppressed to hide that it disinherited Britannicus in favour of Nero.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>The Date:</strong> October 13th, AD 54. Claudius had died the previous day, reportedly poisoned by Agrippina using mushrooms. The timing of Nero's emergence was carefully chosen - midday, when the guard was assembled.</p>
            <p><strong>Burrus:</strong> Sextus Afranius Burrus had been appointed Praetorian Prefect by Agrippina in AD 51. His support was essential for controlling the military during the succession.</p>
            <p><strong>Britannicus:</strong> Claudius' biological son, about 13 years old. He was the legitimate heir but had been marginalised by Nero's adoption in AD 50. He would be poisoned in AD 55.</p>
            <p><strong>The Praetorian Guard:</strong> The emperor's bodyguard had become kingmakers since their acclamation of Claudius in AD 41. Their acceptance was essential for any succession.</p>
            <p><strong>The Donative:</strong> Cash payments to soldiers upon accession became expected. Claudius had paid 15,000-20,000 sesterces per man in AD 41.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>On what date did these events take place?</li>
                <li>Who accompanied Nero when he emerged from the palace?</li>
                <li>Why was a cohort present at the palace?</li>
                <li>What did some soldiers ask about?</li>
                <li>What did Nero promise the soldiers?</li>
                <li>What was the relationship between the soldiers' decision and the Senate's decrees?</li>
                <li>What honours were given to Claudius?</li>
                <li>Who did Agrippina emulate at the funeral?</li>
                <li>Why was Claudius' will not read publicly?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>How does Tacitus use passive verbs to characterise Nero's role in his own accession?</li>
                <li>What is the significance of the soldiers asking about Britannicus? Why does this detail matter?</li>
                <li>What does the phrase <em>nullo in diversum auctore</em> suggest about why the succession succeeded?</li>
                <li>How does Tacitus characterise the relationship between military and Senate power?</li>
                <li>What is ironic about calling Claudius' generosity 'paternae largitionis'?</li>
                <li>Why does Tacitus mention Agrippina's emulation of Livia? What parallel is being drawn?</li>
                <li>What does the suppression of the will reveal about the legitimacy of Nero's succession?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Staged Spectacle:</strong> Every detail is choreographed - the timing, the palace doors, Burrus' presence, the acclamation. This is political theatre, not spontaneous acceptance.</p>
            <p><strong>Military Power:</strong> The soldiers decide; the Senate follows. The constitutional order is inverted, with armed force determining imperial succession.</p>
            <p><strong>Suppression of Opposition:</strong> The brief mention of soldiers asking about Britannicus shows that alternative outcomes were possible. Silence and passivity ('nullo auctore') enabled the coup.</p>
            <p><strong>Dynastic Women:</strong> Agrippina's role echoes Livia's, showing how imperial women wielded power through managing successions and funerals.</p>
            <p><strong>Legitimacy and Concealment:</strong> The suppression of Claudius' will reveals the fragility of Nero's claim. What cannot withstand public scrutiny must be hidden.</p>
        `
    }
};
