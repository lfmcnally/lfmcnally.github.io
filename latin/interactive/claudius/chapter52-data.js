// Tacitus Annals 12.52 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "In the consulship of Faustus Sulla and Salvius Otho, Furius Scribonianus was driven into exile, on the grounds that he was investigating the end of the emperor through Chaldaean astrologers. His mother Vibia was attached to the charge, as being intolerant of her earlier misfortune (for she had been banished). Scribonianus' father Camillus had raised arms throughout Dalmatia; and the emperor interpreted this as an act of clemency, that he was preserving a hostile family line for a second time. Nevertheless, the exile did not have a long life afterwards: whether he was killed by an accidental death or by poison, people reported as each believed. A decree of the Senate was passed concerning the expulsion of astrologers from Italy - harsh and ineffective. Then those senators were praised in a speech by the emperor who voluntarily withdrew from the senatorial order on account of straitened family finances, and those were expelled who by remaining added shamelessness to poverty.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')">Fausto Sulla Salvio Othone consulibus</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">Furius Scribonianus <span class="highlight-style style-1" onclick="showAnalysis('style1')">in exilium agitur</span></span>,
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')"><span class="highlight-style style-2" onclick="showAnalysis('style2')">quasi</span> finem principis per Chaldaeos <span class="highlight-style style-2" onclick="showAnalysis('style2')">scrutaretur</span></span>.
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">adnectebatur crimini Vibia mater eius</span>,
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">ut casus prioris <span class="highlight-style style-3" onclick="showAnalysis('style3')">(nam relegata erat)</span> impatiens</span>.
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')">pater Scriboniani Camillus arma per Dalmatiam moverat</span>;
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">idque <span class="highlight-style style-4" onclick="showAnalysis('style4')">ad clementiam trahebat</span> Caesar</span>,
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">quod <span class="highlight-style style-4" onclick="showAnalysis('style4')">stirpem hostilem iterum</span> conservaret</span>.
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">neque tamen exuli longa posthac vita fuit</span>:
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')"><span class="highlight-style style-5" onclick="showAnalysis('style5')">morte fortuita an per venenum extinctus esset</span></span>,
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')"><span class="highlight-style style-6" onclick="showAnalysis('style6')">ut quisque credidit, vulgavere</span></span>.
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">de mathematicis Italia pellendis factum senatus consultum <span class="highlight-style style-7" onclick="showAnalysis('style7')">atrox et inritum</span></span>.
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">laudati dehinc oratione principis qui ob angustias familiares ordine senatorio sponte cederent</span>,
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">motique qui remanendo <span class="highlight-style style-8" onclick="showAnalysis('style8')">impudentiam paupertati adicerent</span></span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "Fausto Sulla Salvio Othone consulibus",
            vocab: [
                "<strong>Fausto</strong> = Faustus (ablative) - praenomen",
                "<strong>Sulla</strong> = Sulla (ablative) - cognomen, descendant of the dictator",
                "<strong>Salvio</strong> = Salvius (ablative) - praenomen",
                "<strong>Othone</strong> = Otho (ablative) - the future emperor (ruled AD 69)",
                "<strong>consulibus</strong> = consuls (ablative plural)"
            ],
            grammar: "Ablative absolute used for dating. This standard formula places events in AD 52. Note that Salvius Otho would later become emperor briefly in AD 69 during the Year of the Four Emperors.",
            translation: "In the consulship of Faustus Sulla and Salvius Otho"
        },
        phrase2: {
            title: "Furius Scribonianus in exilium agitur",
            vocab: [
                "<strong>Furius</strong> = Furius (nominative) - nomen gentile",
                "<strong>Scribonianus</strong> = Scribonianus (nominative) - cognomen",
                "<strong>in</strong> = into (+ accusative)",
                "<strong>exilium</strong> = exile (accusative)",
                "<strong>agitur</strong> = is driven (present passive indicative)"
            ],
            grammar: "Historic present tense ('agitur' rather than 'actus est') gives immediacy to the narrative. The passive voice emphasises that Scribonianus is acted upon - he has no agency in his fate.",
            translation: "Furius Scribonianus is driven into exile"
        },
        phrase3: {
            title: "quasi finem principis per Chaldaeos scrutaretur",
            vocab: [
                "<strong>quasi</strong> = as if, on the grounds that (+ subjunctive)",
                "<strong>finem</strong> = end, death (accusative)",
                "<strong>principis</strong> = of the emperor (genitive)",
                "<strong>per</strong> = through, by means of (+ accusative)",
                "<strong>Chaldaeos</strong> = Chaldaeans, astrologers (accusative plural)",
                "<strong>scrutaretur</strong> = he was investigating (imperfect subjunctive deponent)"
            ],
            grammar: "'Quasi' + subjunctive indicates an alleged reason - Tacitus distances himself from the charge's validity. 'Chaldaei' was a common term for astrologers, originally referring to Babylonian priests. Consulting astrologers about the emperor's death was considered treason (<em>maiestas</em>).",
            translation: "on the grounds that he was investigating the emperor's death through Chaldaean astrologers"
        },
        phrase4: {
            title: "adnectebatur crimini Vibia mater eius",
            vocab: [
                "<strong>adnectebatur</strong> = was attached, was connected (imperfect passive)",
                "<strong>crimini</strong> = to the charge (dative)",
                "<strong>Vibia</strong> = Vibia (nominative) - her name",
                "<strong>mater</strong> = mother (nominative)",
                "<strong>eius</strong> = his (genitive)"
            ],
            grammar: "Dative of reference with 'adnectebatur'. The passive voice again suggests external accusation rather than proven guilt. Word order places 'adnectebatur crimini' first, emphasising the legal process over the person.",
            translation: "His mother Vibia was attached to the charge"
        },
        phrase5: {
            title: "ut casus prioris (nam relegata erat) impatiens",
            vocab: [
                "<strong>ut</strong> = as being (causal)",
                "<strong>casus</strong> = misfortune, downfall (genitive singular)",
                "<strong>prioris</strong> = earlier, previous (genitive)",
                "<strong>nam</strong> = for (explanatory)",
                "<strong>relegata</strong> = banished (perfect passive participle, nominative feminine)",
                "<strong>erat</strong> = she had been (pluperfect)",
                "<strong>impatiens</strong> = intolerant, unable to endure (nominative, + genitive)"
            ],
            grammar: "'Impatiens' takes a genitive object ('casus prioris'). The parenthetical clause 'nam relegata erat' provides essential background - she had already been punished once. 'Relegatio' was a milder form of exile than 'exilium', allowing retention of property.",
            translation: "as being intolerant of her earlier misfortune (for she had been banished)"
        },
        phrase6: {
            title: "pater Scriboniani Camillus arma per Dalmatiam moverat",
            vocab: [
                "<strong>pater</strong> = father (nominative)",
                "<strong>Scriboniani</strong> = of Scribonianus (genitive)",
                "<strong>Camillus</strong> = Camillus (nominative) - full name: Lucius Arruntius Camillus Scribonianus",
                "<strong>arma</strong> = arms, rebellion (accusative plural)",
                "<strong>per</strong> = throughout (+ accusative)",
                "<strong>Dalmatiam</strong> = Dalmatia (accusative) - province on the Adriatic",
                "<strong>moverat</strong> = had raised, had stirred up (pluperfect)"
            ],
            grammar: "Pluperfect tense places this event (AD 42) before the current narrative. 'Arma movere' is an idiom meaning 'to raise rebellion'. Camillus' revolt against Claudius in AD 42 failed within five days when his soldiers refused to follow him.",
            translation: "Scribonianus' father Camillus had raised arms throughout Dalmatia"
        },
        phrase7: {
            title: "idque ad clementiam trahebat Caesar",
            vocab: [
                "<strong>id</strong> = this (accusative neuter)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>ad</strong> = towards, as (+ accusative)",
                "<strong>clementiam</strong> = clemency, mercy (accusative)",
                "<strong>trahebat</strong> = was interpreting, was construing (imperfect)",
                "<strong>Caesar</strong> = the emperor (nominative) - i.e. Claudius"
            ],
            grammar: "'Trahere ad' with an abstract noun means 'to interpret as' or 'to construe as'. The imperfect suggests Claudius repeatedly made this point. Claudius is positioning the exile (rather than execution) as merciful given the family's treasonous history.",
            translation: "and the emperor interpreted this as an act of clemency"
        },
        phrase8: {
            title: "quod stirpem hostilem iterum conservaret",
            vocab: [
                "<strong>quod</strong> = that, because (+ subjunctive)",
                "<strong>stirpem</strong> = family line, stock (accusative)",
                "<strong>hostilem</strong> = hostile, enemy (accusative feminine)",
                "<strong>iterum</strong> = a second time, again",
                "<strong>conservaret</strong> = he was preserving (imperfect subjunctive)"
            ],
            grammar: "Subjunctive in a causal clause representing Claudius' alleged reasoning ('quod' + subjunctive = 'on the grounds that'). 'Iterum' is key - first Claudius spared the family after the father's revolt; now he spares the son. The phrase 'stirpem hostilem' is strikingly harsh language for Claudius to use about his own clemency.",
            translation: "that he was preserving a hostile family line for a second time"
        },
        phrase9: {
            title: "neque tamen exuli longa posthac vita fuit",
            vocab: [
                "<strong>neque</strong> = and... not, but... not",
                "<strong>tamen</strong> = nevertheless, however",
                "<strong>exuli</strong> = for the exile (dative of possession)",
                "<strong>longa</strong> = long (nominative feminine)",
                "<strong>posthac</strong> = after this, afterwards",
                "<strong>vita</strong> = life (nominative)",
                "<strong>fuit</strong> = was, there was (perfect)"
            ],
            grammar: "Dative of possession construction: 'exuli... vita fuit' = 'the exile had a life' (literally 'there was a life for the exile'). 'Neque tamen' signals an ominous turn - despite the supposed clemency, Scribonianus soon died.",
            translation: "Nevertheless, the exile did not have a long life afterwards"
        },
        phrase10: {
            title: "morte fortuita an per venenum extinctus esset",
            vocab: [
                "<strong>morte</strong> = by death (ablative of means)",
                "<strong>fortuita</strong> = accidental, by chance (ablative feminine)",
                "<strong>an</strong> = or (in indirect question)",
                "<strong>per</strong> = by means of (+ accusative)",
                "<strong>venenum</strong> = poison (accusative)",
                "<strong>extinctus esset</strong> = he had been killed (pluperfect passive subjunctive)"
            ],
            grammar: "Indirect question with alternative ('an'). The subjunctive 'extinctus esset' is required in indirect speech. The juxtaposition of 'morte fortuita' and 'per venenum' presents two very different explanations - accident vs assassination.",
            translation: "whether he had been killed by an accidental death or by poison"
        },
        phrase11: {
            title: "ut quisque credidit, vulgavere",
            vocab: [
                "<strong>ut</strong> = as (comparative)",
                "<strong>quisque</strong> = each person (nominative)",
                "<strong>credidit</strong> = believed (perfect)",
                "<strong>vulgavere</strong> = they reported, they spread abroad (perfect, = vulgaverunt)"
            ],
            grammar: "'Ut quisque' + perfect indicative = 'as each person (believed)'. 'Vulgavere' is the syncopated form of 'vulgaverunt'. This is a characteristic Tacitean formula for indicating uncertainty while hinting at darker possibilities - he refuses to adjudicate between versions.",
            translation: "people reported as each believed"
        },
        phrase12: {
            title: "de mathematicis Italia pellendis factum senatus consultum atrox et inritum",
            vocab: [
                "<strong>de</strong> = concerning (+ ablative)",
                "<strong>mathematicis</strong> = astrologers (ablative plural)",
                "<strong>Italia</strong> = from Italy (ablative of separation)",
                "<strong>pellendis</strong> = to be expelled (gerundive, ablative plural)",
                "<strong>factum</strong> = was made, was passed (perfect passive participle)",
                "<strong>senatus consultum</strong> = decree of the Senate (nominative)",
                "<strong>atrox</strong> = harsh, severe (nominative)",
                "<strong>et</strong> = and, yet",
                "<strong>inritum</strong> = ineffective, void (nominative)"
            ],
            grammar: "Gerundive of purpose with 'de' - 'de mathematicis pellendis' = 'concerning the expulsion of astrologers'. 'Mathematici' literally means 'mathematicians' but in this period referred to astrologers who used mathematical calculations. The asyndeton 'atrox et inritum' is striking - harsh yet pointless.",
            translation: "A decree of the Senate was passed concerning the expulsion of astrologers from Italy - harsh and ineffective"
        },
        phrase13: {
            title: "laudati dehinc oratione principis qui ob angustias familiares ordine senatorio sponte cederent",
            vocab: [
                "<strong>laudati</strong> = were praised (perfect passive participle, nominative plural)",
                "<strong>dehinc</strong> = then, next",
                "<strong>oratione</strong> = in a speech (ablative)",
                "<strong>principis</strong> = of the emperor (genitive)",
                "<strong>qui</strong> = those who (nominative plural)",
                "<strong>ob</strong> = on account of (+ accusative)",
                "<strong>angustias</strong> = straitened circumstances, difficulties (accusative plural)",
                "<strong>familiares</strong> = of the family, domestic (accusative feminine plural)",
                "<strong>ordine senatorio</strong> = from the senatorial order (ablative of separation)",
                "<strong>sponte</strong> = voluntarily, of their own accord (ablative)",
                "<strong>cederent</strong> = would withdraw (imperfect subjunctive)"
            ],
            grammar: "Relative clause of characteristic with subjunctive ('qui... cederent'). Senators needed substantial wealth to maintain their rank. 'Angustiae familiares' is a euphemism for poverty. Those who admitted financial failure honourably were praised; this preserves senatorial dignity.",
            translation: "Then those senators were praised in a speech by the emperor who voluntarily withdrew from the senatorial order on account of straitened family finances"
        },
        phrase14: {
            title: "motique qui remanendo impudentiam paupertati adicerent",
            vocab: [
                "<strong>moti</strong> = were removed, were expelled (perfect passive participle, nominative plural)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>qui</strong> = those who (nominative plural)",
                "<strong>remanendo</strong> = by remaining (gerund, ablative)",
                "<strong>impudentiam</strong> = shamelessness (accusative)",
                "<strong>paupertati</strong> = to poverty (dative)",
                "<strong>adicerent</strong> = would add (imperfect subjunctive)"
            ],
            grammar: "Parallel structure with the previous phrase: 'laudati... qui... cederent' balanced by 'moti... qui... adicerent'. The gerund 'remanendo' expresses means. The phrase 'impudentiam paupertati adicere' suggests that poverty itself was tolerable, but refusing to acknowledge it was disgraceful.",
            translation: "and those were expelled who by remaining added shamelessness to poverty"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "in exilium agitur",
            device: "Historic Present",
            effect: "The present tense 'agitur' rather than perfect 'actus est' creates immediacy and drama. The passive voice emphasises Scribonianus as victim of forces beyond his control, stripped of agency in his own fate."
        },
        style2: {
            title: "quasi... scrutaretur",
            device: "Subjunctive of Alleged Reason",
            effect: "'Quasi' with the subjunctive signals that Tacitus is reporting the official charge without endorsing it. This grammatical distancing allows readers to question whether the accusation was genuine or merely a pretext for persecution."
        },
        style3: {
            title: "(nam relegata erat)",
            device: "Parenthetical Explanation",
            effect: "The parenthesis provides crucial background - Vibia had already suffered punishment. This detail suggests a pattern of persecution against the family and implies the current charge may be politically motivated rather than based on new evidence."
        },
        style4: {
            title: "ad clementiam trahebat... stirpem hostilem iterum",
            device: "Ironic Juxtaposition",
            effect: "Claudius claims 'clemency' while simultaneously describing the family as 'stirps hostilis' (hostile stock). The harsh language undermines the supposed mercy, and 'iterum' (again) suggests Claudius views his repeated tolerance as exceptional generosity - or perhaps foolishness."
        },
        style5: {
            title: "morte fortuita an per venenum extinctus esset",
            device: "Indirect Question with Alternative",
            effect: "By presenting two possibilities - accident or poison - without resolution, Tacitus plants suspicion of foul play. The very mention of 'venenum' (poison) alongside 'morte fortuita' (accidental death) suggests the latter explanation was not universally believed."
        },
        style6: {
            title: "ut quisque credidit, vulgavere",
            device: "Tacitean Distancing Formula",
            effect: "This characteristic phrase allows Tacitus to report conflicting versions without committing to either. By noting that people 'reported as each believed', he implies the truth was unknowable or deliberately obscured - a hallmark of his historiographical method."
        },
        style7: {
            title: "atrox et inritum",
            device: "Pointed Antithesis",
            effect: "The sharp juxtaposition of 'atrox' (harsh) and 'inritum' (ineffective) delivers a damning verdict in just three words. The decree was severe enough to be cruel but achieved nothing - the worst of both worlds, exposing the Senate's impotence."
        },
        style8: {
            title: "impudentiam paupertati adicerent",
            device: "Moralising Vocabulary",
            effect: "The phrase 'adding shamelessness to poverty' reveals Roman aristocratic values: poverty itself was unfortunate but not disgraceful, while refusing to acknowledge it violated social codes. This reflects Tacitus' conservative senatorial perspective on dignitas and proper conduct."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>Furius Scribonianus is exiled, allegedly for consulting astrologers about when the emperor would die. His mother Vibia is also implicated, portrayed as unable to accept her previous punishment.</p>
            <p>Tacitus notes that Scribonianus' father had led a rebellion against Claudius in Dalmatia, and the emperor frames the exile (rather than execution) as an act of clemency toward a hostile family.</p>
            <p>However, Scribonianus soon dies - whether by accident or poison remains unclear. A senatorial decree to expel astrologers from Italy proves ineffective. Finally, impoverished senators who voluntarily resign are praised, while those who cling to their rank are expelled.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>The Scribonianus Family:</strong> Lucius Arruntius Camillus Scribonianus, the father, was governor of Dalmatia who revolted against Claudius in AD 42. The rebellion collapsed within five days when his legions refused to march. The family's continued existence was politically sensitive.</p>
            <p><strong>Chaldaean Astrologers:</strong> 'Chaldaei' or 'mathematici' were astrologers, originally from Babylon. Consulting them about the emperor's death date was treasonous (maiestas) as it implied anticipating or planning succession. Despite repeated expulsions, they remained popular in Rome.</p>
            <p><strong>Vibia's Earlier Punishment:</strong> 'Relegatio' was a milder form of exile than 'exilium' - the relegated person retained property and citizenship but was barred from specific places. Her involvement suggests the regime viewed the whole family as dangerous.</p>
            <p><strong>Senatorial Wealth Requirements:</strong> Senators needed a property qualification of 1 million sesterces. Those who fell below this faced expulsion unless they withdrew voluntarily - the latter preserved dignity.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>Who were the consuls when these events occurred?</li>
                <li>What was the charge against Furius Scribonianus?</li>
                <li>How was his mother Vibia involved in the accusation?</li>
                <li>What had Scribonianus' father done previously?</li>
                <li>How did Claudius interpret his treatment of Scribonianus?</li>
                <li>What happened to Scribonianus after his exile?</li>
                <li>What was decreed about astrologers, and how effective was it?</li>
                <li>What happened to senators with financial difficulties?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>Why does Tacitus use 'quasi' + subjunctive when describing the charge against Scribonianus? What does this suggest about his view of the accusation?</li>
                <li>How does the phrase 'stirpem hostilem iterum' undermine Claudius' claim to clemency?</li>
                <li>What is the effect of presenting both 'morte fortuita' and 'per venenum' as possibilities for Scribonianus' death?</li>
                <li>Why might Tacitus describe the decree against astrologers as 'atrox et inritum'? What does this reveal about imperial governance?</li>
                <li>What do the contrasting treatments of impoverished senators reveal about Roman aristocratic values?</li>
                <li>How does this chapter illustrate Tacitus' characteristic historiographical technique of implying without asserting?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Political Persecution:</strong> The charges against the Scribonianus family appear politically motivated - the father's rebellion made the whole family suspect. Tacitus' use of 'quasi' suggests scepticism about the official accusations.</p>
            <p><strong>Imperial 'Clemency':</strong> Claudius' claim to clemency is undermined by his own harsh language ('stirpem hostilem') and the suspicious circumstances of Scribonianus' death. Tacitean irony exposes the gap between imperial rhetoric and reality.</p>
            <p><strong>Suspicion and Uncertainty:</strong> The unresolved question of whether Scribonianus died naturally or was poisoned reflects a climate where such suspicions were commonplace. Tacitus refuses to resolve the ambiguity, leaving readers to draw their own conclusions.</p>
            <p><strong>Ineffective Governance:</strong> The decree against astrologers - 'atrox et inritum' - exemplifies laws that were severe on paper but unenforceable in practice, a recurring critique in the Annals.</p>
            <p><strong>Senatorial Dignity:</strong> The contrasting treatment of impoverished senators reveals Roman class anxiety: voluntary withdrawal preserved honour, while clinging to status beyond one's means was shameful.</p>
        `
    }
};
