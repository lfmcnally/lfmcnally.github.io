// Tacitus Annals 12.59 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "But Claudius was driven to bring forth all the most cruel measures by the wiles of the same Agrippina, who, coveting his gardens, ruined Statilius Taurus, distinguished for his wealth, with Tarquitius Priscus as accuser. He had been Taurus' legate when he governed Africa with proconsular power; after they had returned, he charged him with a few instances of extortion, but more particularly with magical superstitions. Nor did Taurus any longer endure the false accuser and the unworthy degradation, but brought violence upon his own life before the sentence of the Senate. Nevertheless, Tarquitius was expelled from the Senate; which the senators achieved through hatred of the informer, against the scheming of Agrippina.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')"><span class="highlight-style style-1" onclick="showAnalysis('style1')">at</span> Claudius <span class="highlight-style style-2" onclick="showAnalysis('style2')">saevissima quaeque</span> promere adigebatur</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">eiusdem Agrippinae <span class="highlight-style style-3" onclick="showAnalysis('style3')">artibus</span></span>,
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">quae Statilium Taurum opibus inlustrem</span>
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')"><span class="highlight-style style-4" onclick="showAnalysis('style4')">hortis eius inhians</span> pervertit</span>
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">accusante Tarquitio Prisco</span>.
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">legatus is Tauri Africam imperio proconsulari regentis</span>,
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">postquam revenerant</span>,
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">pauca <span class="highlight-style style-5" onclick="showAnalysis('style5')">repetundarum crimina</span>, ceterum <span class="highlight-style style-6" onclick="showAnalysis('style6')">magicas superstitiones</span> obiectabat</span>.
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">nec ille diutius <span class="highlight-style style-7" onclick="showAnalysis('style7')">falsum accusatorem, indignas sordes</span> perpessus</span>
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')"><span class="highlight-style style-8" onclick="showAnalysis('style8')">vim vitae suae attulit</span></span>
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">ante sententiam senatus</span>.
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">Tarquitius tamen curia exactus est</span>;
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">quod patres <span class="highlight-style style-9" onclick="showAnalysis('style9')">odio delatoris contra ambitum Agrippinae</span> pervicere</span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "at Claudius saevissima quaeque promere adigebatur",
            vocab: [
                "<strong>at</strong> = but (adversative conjunction, stronger than 'sed')",
                "<strong>Claudius</strong> = Claudius (nominative, the emperor)",
                "<strong>saevissima</strong> = most cruel (superlative of saevus, accusative neuter plural)",
                "<strong>quaeque</strong> = each, all (distributive pronoun, nominative/accusative neuter plural)",
                "<strong>promere</strong> = to bring forth, to reveal (present active infinitive from promo, promere, prompsi, promptum)",
                "<strong>adigebatur</strong> = was driven, was compelled (imperfect passive indicative from adigo, adigere, adegi, adactum)"
            ],
            grammar: "Historic present passive with complementary infinitive. The subject Claudius is being acted upon - he is 'driven' rather than acting of his own will, establishing him as a puppet. 'saevissima quaeque' is an idiomatic phrase meaning 'all the most cruel things' - the superlative combined with the distributive creates emphasis.",
            translation: "But Claudius was driven to bring forth all the most cruel measures"
        },
        phrase2: {
            title: "eiusdem Agrippinae artibus",
            vocab: [
                "<strong>eiusdem</strong> = of the same (genitive singular of idem, agreeing with Agrippinae)",
                "<strong>Agrippinae</strong> = Agrippina (genitive singular)",
                "<strong>artibus</strong> = by the wiles, by the tricks (ablative plural of ars, artis - here meaning 'cunning devices')"
            ],
            grammar: "Ablative of means/instrument. 'eiusdem' refers back to previous chapters where Agrippina has been mentioned - Tacitus implies she is consistently behind such intrigues. 'artes' in this context has negative connotations of cunning and deception rather than skill.",
            translation: "by the wiles of the same Agrippina"
        },
        phrase3: {
            title: "quae Statilium Taurum opibus inlustrem",
            vocab: [
                "<strong>quae</strong> = who (relative pronoun, nominative feminine singular, referring to Agrippina)",
                "<strong>Statilium Taurum</strong> = Statilius Taurus (accusative, object of pervertit)",
                "<strong>opibus</strong> = by/with wealth, resources (ablative plural of opes, opum)",
                "<strong>inlustrem</strong> = distinguished, famous (accusative masculine singular, agreeing with Taurum)"
            ],
            grammar: "Relative clause with the main verb 'pervertit' in the next phrase. 'opibus' is ablative of respect/specification - he was distinguished 'in respect of' his wealth. Statilius Taurus was a noble of great wealth, making him a target for confiscation.",
            translation: "who [ruined] Statilius Taurus, distinguished for his wealth"
        },
        phrase4: {
            title: "hortis eius inhians pervertit",
            vocab: [
                "<strong>hortis</strong> = gardens (dative/ablative plural of hortus, -i)",
                "<strong>eius</strong> = his (genitive singular, referring to Taurus)",
                "<strong>inhians</strong> = coveting, gaping at (present active participle of inhio, inhiare + dative)",
                "<strong>pervertit</strong> = she ruined, she overturned (perfect active indicative from perverto, pervertere)"
            ],
            grammar: "'inhians' takes the dative 'hortis' - literally 'gaping at his gardens'. The participle vividly depicts greedy desire. 'pervertit' is the main verb of the relative clause begun in phrase 3. Roman gardens (horti) were often magnificent estates, not just gardens in the modern sense.",
            translation: "coveting his gardens, ruined [him]"
        },
        phrase5: {
            title: "accusante Tarquitio Prisco",
            vocab: [
                "<strong>accusante</strong> = accusing, with... as accuser (present active participle, ablative masculine singular)",
                "<strong>Tarquitio Prisco</strong> = Tarquitius Priscus (ablative, proper name)"
            ],
            grammar: "Ablative absolute expressing attendant circumstance - literally 'with Tarquitius Priscus accusing'. This construction names the agent who formally brought the charges, even though Agrippina was the true instigator.",
            translation: "with Tarquitius Priscus as accuser"
        },
        phrase6: {
            title: "legatus is Tauri Africam imperio proconsulari regentis",
            vocab: [
                "<strong>legatus</strong> = legate, deputy (nominative masculine singular)",
                "<strong>is</strong> = he (nominative, referring to Tarquitius)",
                "<strong>Tauri</strong> = of Taurus (genitive, possessive)",
                "<strong>Africam</strong> = Africa (accusative, object of regentis)",
                "<strong>imperio</strong> = with power, command (ablative)",
                "<strong>proconsulari</strong> = proconsular (ablative, agreeing with imperio)",
                "<strong>regentis</strong> = governing, ruling (present active participle, genitive masculine singular, agreeing with Tauri)"
            ],
            grammar: "Complex genitive construction. 'Tauri... regentis' is a genitive absolute (rare) - 'of Taurus governing'. Tarquitius had served under Taurus when he was proconsul of Africa, making the accusation a betrayal of his former superior.",
            translation: "He had been Taurus' legate when he governed Africa with proconsular power"
        },
        phrase7: {
            title: "postquam revenerant",
            vocab: [
                "<strong>postquam</strong> = after (temporal conjunction)",
                "<strong>revenerant</strong> = they had returned (pluperfect active indicative from revenio, revenire)"
            ],
            grammar: "Temporal clause with pluperfect indicative, indicating action completed before the main action. The plural 'revenerant' includes both Taurus and Tarquitius returning to Rome from Africa.",
            translation: "after they had returned"
        },
        phrase8: {
            title: "pauca repetundarum crimina, ceterum magicas superstitiones obiectabat",
            vocab: [
                "<strong>pauca</strong> = few (accusative neuter plural)",
                "<strong>repetundarum</strong> = of extortion, of recovery (genitive plural from res repetundae - a technical legal term)",
                "<strong>crimina</strong> = charges, accusations (accusative neuter plural)",
                "<strong>ceterum</strong> = but, however, moreover (adversative adverb)",
                "<strong>magicas</strong> = magical (accusative feminine plural)",
                "<strong>superstitiones</strong> = superstitions, magical practices (accusative feminine plural)",
                "<strong>obiectabat</strong> = he was throwing up against, he was charging with (imperfect active indicative from obiecto, obiectare + accusative)"
            ],
            grammar: "'res repetundae' was the technical term for extortion charges against provincial governors - literally 'things to be recovered'. The imperfect 'obiectabat' suggests repeated or ongoing accusations. The structure contrasts 'pauca' (few) extortion charges with the more serious magical accusations.",
            translation: "he charged him with a few instances of extortion, but more particularly with magical superstitions"
        },
        phrase9: {
            title: "nec ille diutius falsum accusatorem, indignas sordes perpessus",
            vocab: [
                "<strong>nec</strong> = nor, and not (negative conjunction)",
                "<strong>ille</strong> = that man, he (nominative, referring to Taurus)",
                "<strong>diutius</strong> = any longer (comparative adverb from diu)",
                "<strong>falsum</strong> = false (accusative masculine singular)",
                "<strong>accusatorem</strong> = accuser (accusative masculine singular)",
                "<strong>indignas</strong> = unworthy, degrading (accusative feminine plural)",
                "<strong>sordes</strong> = filth, degradation, squalor (accusative feminine plural)",
                "<strong>perpessus</strong> = having endured (perfect passive participle from perpetior, perpeti)"
            ],
            grammar: "Perfect participle 'perpessus' with deponent verb (passive form, active meaning). 'sordes' literally means 'filth' but was used for the degradation of a trial, including wearing mourning clothes. The double accusative objects emphasise the indignities Taurus faced.",
            translation: "Nor did that man, having endured the false accuser and unworthy degradation any longer"
        },
        phrase10: {
            title: "vim vitae suae attulit",
            vocab: [
                "<strong>vim</strong> = violence, force (accusative singular of vis)",
                "<strong>vitae</strong> = to/against life (dative singular)",
                "<strong>suae</strong> = his own (dative feminine singular, agreeing with vitae)",
                "<strong>attulit</strong> = brought (perfect active indicative from affero, afferre, attuli, allatum)"
            ],
            grammar: "Idiomatic expression for suicide - 'to bring violence to one's own life'. The dative 'vitae suae' indicates the target of the violence. This euphemistic phrasing was standard Roman historiographical language for suicide.",
            translation: "brought violence upon his own life"
        },
        phrase11: {
            title: "ante sententiam senatus",
            vocab: [
                "<strong>ante</strong> = before (preposition + accusative)",
                "<strong>sententiam</strong> = sentence, judgement (accusative singular)",
                "<strong>senatus</strong> = of the Senate (genitive singular)"
            ],
            grammar: "Prepositional phrase indicating time. By dying before the Senate's verdict, Taurus preserved his estate for his heirs - conviction would have meant confiscation. This was a calculated act of defiance.",
            translation: "before the sentence of the Senate"
        },
        phrase12: {
            title: "Tarquitius tamen curia exactus est",
            vocab: [
                "<strong>Tarquitius</strong> = Tarquitius (nominative)",
                "<strong>tamen</strong> = nevertheless, however (adversative adverb)",
                "<strong>curia</strong> = from the Senate (ablative of separation)",
                "<strong>exactus est</strong> = was expelled (perfect passive indicative from exigo, exigere)"
            ],
            grammar: "Passive voice emphasises that Tarquitius was the recipient of the action. 'curia' here means the Senate house/the Senate body. Expulsion from the Senate (nota censoria) was a severe disgrace.",
            translation: "Nevertheless, Tarquitius was expelled from the Senate"
        },
        phrase13: {
            title: "quod patres odio delatoris contra ambitum Agrippinae pervicere",
            vocab: [
                "<strong>quod</strong> = which (relative pronoun, accusative neuter singular, referring to the expulsion)",
                "<strong>patres</strong> = the senators, the fathers (nominative plural)",
                "<strong>odio</strong> = through hatred (ablative of cause)",
                "<strong>delatoris</strong> = of the informer (genitive singular)",
                "<strong>contra</strong> = against (preposition + accusative)",
                "<strong>ambitum</strong> = scheming, canvassing, ambition (accusative singular)",
                "<strong>Agrippinae</strong> = of Agrippina (genitive)",
                "<strong>pervicere</strong> = they achieved, they prevailed (perfect active indicative from pervinco, pervincere)"
            ],
            grammar: "'quod' is a connecting relative (= et hoc). 'odio delatoris' is ablative of cause. 'contra ambitum' suggests Agrippina actively worked to protect her instrument. 'pervicere' is a contracted form of 'pervicerunt' - the senators' rare victory against Agrippina's influence.",
            translation: "which the senators achieved through hatred of the informer, against the scheming of Agrippina"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "at",
            device: "Adversative Transition",
            effect: "The strong adversative 'at' (rather than weaker 'sed') marks a sharp contrast with previous material, signalling a new episode of imperial cruelty. It emphasises that despite any positive developments, Claudius' reign continued to produce atrocities."
        },
        style2: {
            title: "saevissima quaeque",
            device: "Superlative Emphasis",
            effect: "The superlative 'saevissima' (most cruel) combined with distributive 'quaeque' (each and every) creates emphatic hyperbole. Claudius is not merely cruel but systematically producing 'all the most cruel' measures - the phrasing indicts the entire reign."
        },
        style3: {
            title: "artibus",
            device: "Pejorative Diction",
            effect: "'Artes' here means cunning tricks rather than skills or arts. This word choice immediately characterises Agrippina's methods as deceitful manipulation rather than legitimate influence, establishing her as the passage's villain."
        },
        style4: {
            title: "hortis eius inhians",
            device: "Vivid Imagery",
            effect: "'Inhians' literally means 'gaping at' with open mouth - a visceral image of greed like an animal eyeing prey. Tacitus reduces Agrippina's motive to crude material avarice, making her ruination of Taurus seem all the more sordid."
        },
        style5: {
            title: "repetundarum crimina",
            device: "Technical Legal Language",
            effect: "The formal legal term 'res repetundae' (extortion) gives the accusations an official veneer, but 'pauca' (few) undermines their significance. Tacitus shows the legal process being misused - the real charges are trumped up."
        },
        style6: {
            title: "magicas superstitiones",
            device: "Loaded Accusation",
            effect: "Charges of magic were notoriously difficult to disprove and could carry the death penalty. By specifying this as the main charge ('ceterum'), Tacitus exposes the prosecution's cynical strategy - using unprovable accusations to guarantee conviction."
        },
        style7: {
            title: "falsum accusatorem, indignas sordes",
            device: "Judgmental Vocabulary",
            effect: "Tacitus directly calls the accuser 'false' and the proceedings 'unworthy degradation'. These are not neutral descriptions but authorial verdicts on the injustice. The paired phrases with asyndeton create rhetorical force."
        },
        style8: {
            title: "vim vitae suae attulit",
            device: "Euphemism for Suicide",
            effect: "This dignified circumlocution for suicide ('brought violence upon his own life') elevates Taurus' death as a noble Roman act of self-determination. The phrasing suggests deliberate choice rather than desperate escape."
        },
        style9: {
            title: "odio delatoris contra ambitum Agrippinae",
            device: "Antithesis",
            effect: "The senators' 'hatred of the informer' is explicitly set 'against' (contra) Agrippina's 'scheming'. This antithesis shows a rare moment of senatorial independence triumphing over imperial manipulation - a small moral victory in a dark narrative."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Claudius continues to be manipulated by Agrippina into committing cruelties. In this episode, Agrippina covets the magnificent gardens of Statilius Taurus, a wealthy nobleman.</p>
            <p>She arranges for Tarquitius Priscus - who had served as Taurus' deputy in Africa - to accuse him. The charges include minor extortion claims but focus mainly on the unprovable accusation of magical practices.</p>
            <p>Unable to endure the false accusations and public humiliation, Taurus commits suicide before the Senate can deliver its verdict. However, in a rare act of defiance against Agrippina, the Senate expels Tarquitius from their body out of hatred for the informer.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>Statilius Taurus:</strong> The family had been prominent since the late Republic. This Taurus was consul in AD 44 and proconsul of Africa. His famous gardens (horti Tauriani) on the Esquiline were among Rome's most magnificent estates.</p>
            <p><strong>Delatores (Informers):</strong> The delator system allowed private citizens to prosecute crimes and receive a portion of confiscated property. This created a class of professional accusers who could be hired to bring down political enemies.</p>
            <p><strong>Magic Accusations:</strong> The <em>Lex Cornelia de sicariis et veneficis</em> criminalised harmful magic. Such charges were favoured by prosecutors because they were nearly impossible to disprove and carried severe penalties.</p>
            <p><strong>Suicide in Roman Culture:</strong> For Roman aristocrats, suicide before conviction was an honourable escape that preserved family property from confiscation and maintained personal dignity.</p>
            <p><strong>The Date:</strong> These events occurred in AD 53, the year before Claudius' death (and probable murder by Agrippina).</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>Who was driving Claudius to commit cruel acts?</li>
                <li>What was Agrippina's motivation for ruining Statilius Taurus?</li>
                <li>Who brought the formal accusation against Taurus?</li>
                <li>What had been Tarquitius Priscus' relationship with Taurus?</li>
                <li>What were the two types of charges brought against Taurus?</li>
                <li>How did Taurus respond to the accusation?</li>
                <li>What happened to Tarquitius after Taurus' death?</li>
                <li>Why did the Senate expel Tarquitius?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>How does Tacitus present Claudius in this passage? What does the passive voice suggest about the emperor?</li>
                <li>What is the effect of the word <em>inhians</em> in characterising Agrippina's motivation?</li>
                <li>Why might Tacitus specify that the extortion charges were <em>pauca</em> (few)?</li>
                <li>What does the choice of magic accusations reveal about the prosecution's strategy?</li>
                <li>How does Tacitus present Taurus' suicide? Is it portrayed positively or negatively?</li>
                <li>What is significant about the Senate's expulsion of Tarquitius 'against the scheming of Agrippina'?</li>
                <li>How does this passage illustrate the corruption of Roman justice under the principate?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Imperial Manipulation:</strong> Claudius appears as a puppet 'driven' (adigebatur) by Agrippina. The passive construction removes his agency, suggesting the emperor is controlled by his wife rather than ruling independently.</p>
            <p><strong>Greed and Corruption:</strong> The vivid image of Agrippina 'gaping at' Taurus' gardens reduces imperial politics to crude avarice. Property confiscation through trumped-up charges reveals systematic corruption.</p>
            <p><strong>Abuse of the Legal System:</strong> The delator system, designed to prosecute genuine crimes, has become a weapon for the powerful. Former subordinates betray their patrons; unprovable charges ensure conviction.</p>
            <p><strong>Noble Suicide:</strong> Taurus' death before the verdict represents Roman aristocratic resistance to injustice. By refusing to submit to the degradation of trial and conviction, he maintains his dignitas.</p>
            <p><strong>Senatorial Independence:</strong> The expulsion of Tarquitius 'against Agrippina's scheming' shows the Senate could occasionally assert itself, though only after the victim was already dead.</p>
        `
    }
};
