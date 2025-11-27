// Messalina Section 3 - Lines 17-26
// Eventually, Messalina decides to marry Silius

const messalinaSection3 = {
    section: 3,
    lines: '17-26',
    title: 'Eventually, Messalina decides to marry Silius',
    
    latinText: 'se caelibem, orbum, nuptiis et adoptando Britannico paratum. eandem Messalinae potentiam mansuram esse, addita securitate, si praevenirent Claudium, qui insidiis incautus sed ad iram celer esset. Messalina, non amore in maritum, sed verita ne Silius summa adeptus se sperneret, diu haesitavit; sed tandem persuasum. nomen enim matrimonii concupivit ob magnitudinem infamiae. nec ultra morata quam dum sacrificii gratia Claudius Ostiam proficisceretur, cuncta nuptiarum sollemnia celebrat.',
    
    questions: [
        // ========== TRANSLATION QUESTIONS ==========
        {
            type: 'translation',
            latin: 'se caelibem, orbum, nuptiis et adoptando Britannico paratum',
            question: 'Which translation is correct? (Silius is speaking about himself)',
            options: [
                { text: 'he was unmarried, childless, ready for marriage and for adopting Britannicus', correct: true },
                { text: 'he was unmarried, childless, ready for marriage and had adopted Britannicus', correct: false, feedback: '"adoptando" is a gerundive (for adopting/to adopt), not a perfect participle. He hasn\'t adopted Britannicus yet — he\'s saying he\'s READY to.' },
                { text: 'he was a bachelor, an orphan, ready for marriage and for adopting Britannicus', correct: false, feedback: '"orbum" means childless, not orphan. Silius is emphasising he has no children who would complicate the succession.' },
                { text: 'he was unmarried, childless, prepared by marriage and by adopting Britannicus', correct: false, feedback: '"nuptiis et adoptando" are datives showing purpose/readiness — ready FOR marriage, not prepared BY marriage.' }
            ],
            correctFeedback: 'Correct! Silius presents himself as the perfect replacement: unmarried ("caelibem"), childless ("orbum"), and ready both for marriage and to adopt Claudius\'s son Britannicus — a complete takeover of the imperial family.'
        },
        {
            type: 'translation',
            latin: 'eandem Messalinae potentiam mansuram esse, addita securitate',
            question: 'Which translation is correct?',
            options: [
                { text: 'the same power would remain for Messalina, with added security', correct: true },
                { text: 'the same power would remain for Messalina, having added security', correct: false, feedback: '"addita securitate" is ablative absolute — "with security having been added" or simply "with added security", not "having added" which would make Messalina the subject.' },
                { text: 'Messalina\'s power would remain the same, with added security', correct: false, feedback: 'Word order matters for emphasis: "eandem...potentiam" (the SAME power) — Silius promises she loses nothing and gains safety.' },
                { text: 'the same power would remain for Messalina, to add security', correct: false, feedback: '"addita securitate" is ablative absolute (with security added), not a purpose clause (to add security).' }
            ],
            correctFeedback: 'Correct! Silius\'s pitch: Messalina keeps all her power ("eandem potentiam"), but gains security ("addita securitate"). The future infinitive "mansuram esse" is part of his indirect speech promising this outcome.'
        },
        {
            type: 'translation',
            latin: 'si praevenirent Claudium, qui insidiis incautus sed ad iram celer esset',
            question: 'Which translation is correct?',
            options: [
                { text: 'if they forestalled Claudius, who was unguarded against plots but quick to anger', correct: true },
                { text: 'if they prevented Claudius, who was incautious about plots but quick to anger', correct: false, feedback: '"praevenirent" means to get ahead of, forestall, anticipate — not simply "prevent". They need to ACT FIRST before Claudius discovers them.' },
                { text: 'if they forestalled Claudius, who was unguarded against plots and quick to anger', correct: false, feedback: '"sed" means "but", not "and". There\'s a contrast: he\'s careless about plots BUT quick to anger once he finds out.' },
                { text: 'if they forestalled Claudius, who is unguarded against plots but quick to anger', correct: false, feedback: '"esset" is imperfect subjunctive (was), not present. The subjunctive is used because this is within indirect speech.' }
            ],
            correctFeedback: 'Correct! "praevenirent" — they must get ahead of Claudius, act before he discovers them. The contrast "insidiis incautus sed ad iram celer" is key: he\'s easy to fool BUT dangerous once angered.'
        },
        {
            type: 'translation',
            latin: 'Messalina, non amore in maritum, sed verita ne Silius summa adeptus se sperneret',
            question: 'Which translation is correct?',
            options: [
                { text: 'Messalina, not from love for her husband, but fearing that Silius, having gained supreme power, might spurn her', correct: true },
                { text: 'Messalina, not from love for her husband, but fearing that Silius, having gained supreme power, would spurn her', correct: false, feedback: '"sperneret" is imperfect subjunctive in a fear clause — "might spurn" captures the uncertainty better than the definite "would spurn".' },
                { text: 'Messalina, not loving her husband, but fearing that Silius, having gained supreme power, might spurn her', correct: false, feedback: '"non amore in maritum" means not FROM love FOR her husband (ablative of cause), not "not loving" (present participle).' },
                { text: 'Messalina, not from love for her husband, but fearing that Silius, seeking supreme power, might spurn her', correct: false, feedback: '"adeptus" is a perfect participle — "having gained/obtained", not "seeking". She fears what happens AFTER he has power.' }
            ],
            correctFeedback: 'Correct! The "maritum" here is Silius, her intended new husband. She agrees not from love but from fear — if Silius gains power ("summa adeptus"), he might discard her. Even in conspiracy, she\'s calculating.'
        },
        {
            type: 'translation',
            latin: 'diu haesitavit; sed tandem persuasum',
            question: 'Which translation is correct?',
            options: [
                { text: 'she hesitated for a long time; but finally she was persuaded', correct: true },
                { text: 'she hesitated for a long time; but finally he was persuaded', correct: false, feedback: 'The subject throughout this passage is Messalina. "persuasum (est)" is impersonal passive but refers to her being persuaded.' },
                { text: 'she hesitated for a long time; but at last persuasion came', correct: false, feedback: '"persuasum (est)" is impersonal passive meaning "it was persuaded" = "she was persuaded", not "persuasion came".' },
                { text: 'she delayed for a long time; but finally she was persuaded', correct: false, feedback: '"haesitavit" means hesitated (was uncertain), not simply delayed. She was wavering, not just waiting.' }
            ],
            correctFeedback: 'Correct! "haesitavit" shows genuine uncertainty — Messalina wavered. "persuasum" is impersonal passive (it was persuaded = she was persuaded). The semicolon and "sed tandem" mark her fateful decision.'
        },
        {
            type: 'translation',
            latin: 'nomen enim matrimonii concupivit ob magnitudinem infamiae',
            question: 'Which translation is correct?',
            options: [
                { text: 'for she desired the name of marriage because of the greatness of the scandal', correct: true },
                { text: 'for she desired the name of marriage despite the greatness of the scandal', correct: false, feedback: '"ob" means "because of", not "despite". This is the shocking point — she wanted it BECAUSE of the scandal, not in spite of it.' },
                { text: 'for she desired marriage in name because of the greatness of the scandal', correct: false, feedback: '"nomen matrimonii" is "the name of marriage" — she craved the formal title itself, the official status.' },
                { text: 'for she longed for the reputation of marriage because of the greatness of the scandal', correct: false, feedback: '"nomen" here means "name/title", not reputation. She wanted the formal designation of being married to Silius.' }
            ],
            correctFeedback: 'Correct! This is Tacitus\'s most devastating insight: she desired marriage "ob magnitudinem infamiae" — BECAUSE of how scandalous it was. The greater the outrage, the more she craved it. Vice as its own reward.'
        },
        {
            type: 'translation',
            latin: 'nec ultra morata quam dum sacrificii gratia Claudius Ostiam proficisceretur',
            question: 'Which translation is correct?',
            options: [
                { text: 'and not delaying longer than until Claudius set out for Ostia for the sake of a sacrifice', correct: true },
                { text: 'and not delaying longer than while Claudius set out for Ostia for the sake of a sacrifice', correct: false, feedback: '"dum" with subjunctive here means "until", not "while". She waited only until he left, then acted.' },
                { text: 'and not delaying longer than until Claudius set out from Ostia for the sake of a sacrifice', correct: false, feedback: '"Ostiam" is accusative of motion towards — TO Ostia, not FROM Ostia. Claudius was leaving Rome.' },
                { text: 'and not waiting longer than until Claudius set out for Ostia for a sacrifice', correct: false, feedback: '"sacrificii gratia" means "for the sake of a sacrifice" — the full phrase should be translated. "gratia" + genitive = for the sake of.' }
            ],
            correctFeedback: 'Correct! "nec ultra morata quam dum" — she delayed no longer than until... The moment Claudius left for Ostia on religious business, she struck. His piety became her opportunity.'
        },
        {
            type: 'translation',
            latin: 'cuncta nuptiarum sollemnia celebrat',
            question: 'Which translation is correct?',
            options: [
                { text: 'she celebrates all the rites of marriage', correct: true },
                { text: 'she celebrated all the rites of marriage', correct: false, feedback: '"celebrat" is present tense — the historic present, used for vividness. Tacitus brings us into the moment: she celebrates (now, before our eyes).' },
                { text: 'she celebrates all the solemn marriages', correct: false, feedback: '"nuptiarum sollemnia" means "the rites/ceremonies of marriage", not "solemn marriages". "sollemnia" are the formal rituals.' },
                { text: 'she celebrates every wedding ceremony', correct: false, feedback: '"cuncta...sollemnia" means ALL the rites of ONE marriage, not every wedding. She performs the complete ceremony for her marriage to Silius.' }
            ],
            correctFeedback: 'Correct! The historic present "celebrat" makes the scene vivid and immediate. "cuncta...sollemnia" — she performs ALL the proper wedding rites, making this a formally valid Roman marriage. The audacity is complete.'
        },
        
        // ========== STYLE & EFFECT QUESTIONS ==========
        {
            type: 'style',
            latin: 'caelibem, orbum',
            question: 'What is the effect of the brief adjectives "caelibem, orbum" (unmarried, childless)?',
            options: [
                { text: 'The blunt, clipped style presents Silius as a blank slate — no ties, ready for total replacement of Claudius', correct: true },
                { text: 'It shows Silius was lonely and desperate for a family', correct: false, feedback: 'This isn\'t about loneliness — it\'s a political pitch. Being unmarried and childless makes him the perfect candidate to step into Claudius\'s role completely.' },
                { text: 'It suggests Silius was young and inexperienced', correct: false, feedback: 'The terms describe his marital/family status, not his age or experience. He\'s presenting qualifications, not limitations.' },
                { text: 'Tacitus is criticising Silius for having no family', correct: false, feedback: 'These are Silius\'s own words (indirect speech), presenting his availability as advantages. Having no existing family means no complications.' }
            ],
            correctFeedback: 'Correct! The staccato adjectives — "caelibem, orbum" — present Silius as unencumbered. No wife to divorce, no children to displace Britannicus. He offers himself as a clean replacement for Claudius in every way.'
        },
        {
            type: 'style',
            latin: 'insidiis incautus sed ad iram celer',
            question: 'Why does Tacitus have Silius describe Claudius as "unguarded against plots but quick to anger"?',
            options: [
                { text: 'It justifies their urgency — Claudius is easy to fool now, but deadly if he discovers the truth', correct: true },
                { text: 'It shows Silius respected Claudius as an emperor', correct: false, feedback: 'This is not respect — it\'s cold analysis of Claudius\'s weaknesses and dangers. Silius is calculating how to exploit and avoid them.' },
                { text: 'It suggests Claudius was a good ruler despite his flaws', correct: false, feedback: 'The characterisation is entirely negative: a fool who doesn\'t see plots, but dangerous when angered. This justifies acting before he finds out.' },
                { text: 'Tacitus wants readers to feel sorry for Claudius', correct: false, feedback: 'Tacitus may prompt some sympathy elsewhere, but here he\'s presenting Silius\'s tactical reasoning. The description serves the conspirators\' logic.' }
            ],
            correctFeedback: 'Correct! The antithesis "incautus...sed...celer" captures Claudius perfectly: a fool now, a danger later. This justifies "praevenirent" — they must strike while he\'s oblivious, before his anger can destroy them.'
        },
        {
            type: 'style',
            latin: 'non amore in maritum, sed verita ne... se sperneret',
            question: 'What does Messalina\'s motivation reveal about her character?',
            options: [
                { text: 'Even in agreeing to marriage, she\'s calculating — fear of abandonment, not love, drives her', correct: true },
                { text: 'She truly loved Silius but was afraid to admit it', correct: false, feedback: 'Tacitus explicitly says "non amore" — NOT from love. He\'s clear that love played no part in her decision.' },
                { text: 'She was a victim manipulated by Silius', correct: false, feedback: 'She\'s not a victim — she\'s making a calculated decision based on self-interest. She fears losing power if Silius rises and discards her.' },
                { text: 'She had become tired of the relationship', correct: false, feedback: 'The issue isn\'t tiredness but control. She fears that once Silius has supreme power, he won\'t need her anymore.' }
            ],
            correctFeedback: 'Correct! "non amore...sed verita" strips away any romantic illusion. Messalina agrees not from passion but from fear: if Silius gains power and doesn\'t need her, he might cast her aside. It\'s pure self-interest.'
        },
        {
            type: 'style',
            latin: 'ob magnitudinem infamiae',
            question: 'What is extraordinary about Messalina desiring marriage "because of the greatness of the scandal"?',
            options: [
                { text: 'She craves the scandal itself — the more outrageous the act, the more she desires it', correct: true },
                { text: 'She wanted to become famous through the scandal', correct: false, feedback: 'It\'s not about fame but about the thrill of transgression itself. She desires the act BECAUSE it\'s infamous, not to become famous.' },
                { text: 'She misunderstood how people would react', correct: false, feedback: 'She understood perfectly — that\'s the point. She knew it was scandalous and wanted it precisely for that reason.' },
                { text: 'Tacitus is exaggerating for dramatic effect', correct: false, feedback: 'This is Tacitus\'s genuine psychological insight. He presents her vice as self-perpetuating: scandal itself has become her motivation.' }
            ],
            correctFeedback: 'Correct! This is Tacitus\'s most penetrating insight: "ob magnitudinem infamiae" — she desired it BECAUSE of how scandalous it was. Her vice has evolved beyond normal motives. The infamy itself is the attraction.'
        },
        {
            type: 'style',
            latin: 'sacrificii gratia... cuncta nuptiarum sollemnia',
            question: 'What is ironic about the juxtaposition of Claudius\'s sacrifice and Messalina\'s wedding rites?',
            options: [
                { text: 'Both involve religious rituals — he performs pious duties while she perverts sacred marriage rites', correct: true },
                { text: 'It shows that Romans were very religious people', correct: false, feedback: 'The point isn\'t general Roman piety but the specific irony: Claudius does religious duty while Messalina commits sacrilege through a mock sacred ceremony.' },
                { text: 'It suggests the gods approved of both ceremonies', correct: false, feedback: 'The juxtaposition suggests the opposite — Messalina\'s ceremony is a perversion. Legitimate sacrifice contrasts with illegitimate "marriage".' },
                { text: 'Tacitus is showing that Claudius should have stayed in Rome', correct: false, feedback: 'The irony is deeper than logistics. It\'s about sacred vs. profane: pious emperor, sacrilegious wife, both performing "rituals".' }
            ],
            correctFeedback: 'Correct! The religious framing is devastatingly ironic. Claudius leaves for legitimate sacred rites ("sacrificii gratia"); Messalina performs her own ceremony ("cuncta sollemnia"). His piety enables her sacrilege.'
        },
        {
            type: 'style',
            latin: 'cuncta nuptiarum sollemnia celebrat',
            question: 'Why does Tacitus use the historic present "celebrat" rather than the past tense?',
            options: [
                { text: 'It brings the reader into the moment — we witness the outrageous ceremony as it happens', correct: true },
                { text: 'He made a grammatical error', correct: false, feedback: 'The historic present is a deliberate stylistic choice, very common in Latin narrative, especially for dramatic moments.' },
                { text: 'It shows the marriage is still ongoing', correct: false, feedback: 'The historic present doesn\'t indicate ongoing action — it makes past events vivid and immediate for dramatic effect.' },
                { text: 'Latin always uses present tense for important events', correct: false, feedback: 'Latin freely uses past and present tenses. The historic present is a choice, used to heighten drama at key moments.' }
            ],
            correctFeedback: 'Correct! The historic present "celebrat" makes us witnesses. After the build-up of indirect speech and explanation, suddenly we\'re there: she celebrates — now, before our eyes. The shift is electrifying.'
        },
        {
            type: 'style',
            latin: 'cuncta... sollemnia',
            question: 'Why does Tacitus emphasise that she performed ALL the marriage rites ("cuncta sollemnia")?',
            options: [
                { text: 'It heightens the outrage — this wasn\'t a quick private ceremony but a complete, formal, public wedding', correct: true },
                { text: 'He wants to show she was thorough in her planning', correct: false, feedback: 'It\'s not about her organisational skills but about the scale of the outrage. A full ceremony with all proper rites makes the scandal total.' },
                { text: 'Roman law required all rites for a valid marriage', correct: false, feedback: 'The legal validity is irrelevant — she\'s already married to Claudius. The point is her audacity in performing a complete ceremony anyway.' },
                { text: 'Tacitus admired her attention to detail', correct: false, feedback: 'Tacitus is horrified, not admiring. "cuncta" emphasises that nothing was omitted — the shamelessness was absolute.' }
            ],
            correctFeedback: 'Correct! "cuncta...sollemnia" — ALL the rites. Not a hurried, secret ceremony but a full Roman wedding with every proper ritual. The completeness of the ceremony matches the completeness of the outrage.'
        },
        
        // ========== COMPREHENSION QUESTIONS ==========
        {
            type: 'comprehension',
            latin: 'nuptiis et adoptando Britannico paratum',
            question: 'What was Silius offering regarding Britannicus?',
            options: [
                { text: 'He would adopt Claudius\'s son, making himself Britannicus\'s legal father and securing the succession', correct: true },
                { text: 'He would send Britannicus away from Rome', correct: false, feedback: 'He offers to ADOPT Britannicus, not remove him. This would make Silius the boy\'s father and potential regent.' },
                { text: 'He would make Britannicus his heir', correct: false, feedback: 'Adoption makes Silius the FATHER, not Britannicus the heir. Silius would control Britannicus and through him, the succession.' },
                { text: 'He would educate Britannicus in philosophy', correct: false, feedback: '"adoptando" means adopting in the legal Roman sense — becoming his father. This is about power, not education.' }
            ],
            correctFeedback: 'Correct! Silius offered complete replacement of Claudius: marry the wife, adopt the son. By adopting Britannicus, Silius would control the heir and legitimise his seizure of power.'
        },
        {
            type: 'comprehension',
            latin: 'Messalina, non amore in maritum, sed verita ne Silius summa adeptus se sperneret',
            question: 'Why did Messalina hesitate before agreeing to marry Silius?',
            options: [
                { text: 'She feared that once Silius had supreme power, he might abandon her', correct: true },
                { text: 'She was still in love with Claudius', correct: false, feedback: 'There\'s no suggestion of love for Claudius. Her hesitation was about Silius — would he still need her after gaining power?' },
                { text: 'She thought the plan was too dangerous', correct: false, feedback: 'Her fear wasn\'t about danger but about being discarded. She worried Silius would "sperneret" (spurn) her once powerful.' },
                { text: 'She wanted more time to prepare the wedding', correct: false, feedback: 'The hesitation was about whether to agree at all, not about timing. She feared becoming disposable after Silius\'s rise.' }
            ],
            correctFeedback: 'Correct! Messalina\'s hesitation wasn\'t moral — it was strategic. Once Silius had "summa" (supreme power), would he still need her? She feared being spurned ("sperneret") after serving her purpose.'
        },
        {
            type: 'comprehension',
            latin: 'nomen enim matrimonii concupivit ob magnitudinem infamiae',
            question: 'What finally convinced Messalina to agree to the marriage?',
            options: [
                { text: 'She desired the scandal itself — the enormity of the outrage attracted her', correct: true },
                { text: 'Silius promised her more money and power', correct: false, feedback: 'The text gives a different reason: "ob magnitudinem infamiae" — the greatness of the scandal. She craved the transgression itself.' },
                { text: 'She realised she truly loved Silius', correct: false, feedback: 'Tacitus explicitly says "non amore" — not from love. Her motivation was the thrill of extreme scandal.' },
                { text: 'She had no other choice to survive', correct: false, feedback: 'She wasn\'t acting from necessity but from desire: "concupivit" (she craved). The scandal itself was the attraction.' }
            ],
            correctFeedback: 'Correct! The key word is "concupivit" — she CRAVED it. And why? "ob magnitudinem infamiae" — because of the sheer scale of the scandal. Her vice had become its own motivation.'
        },
        {
            type: 'comprehension',
            latin: 'dum sacrificii gratia Claudius Ostiam proficisceretur, cuncta nuptiarum sollemnia celebrat',
            question: 'When did Messalina perform the wedding ceremony?',
            options: [
                { text: 'The moment Claudius left Rome for a sacrifice at Ostia', correct: true },
                { text: 'While Claudius was watching from the palace', correct: false, feedback: 'Claudius had left Rome — "proficisceretur" (was setting out). He was gone, not watching.' },
                { text: 'Several weeks after Claudius left', correct: false, feedback: '"nec ultra morata" — she didn\'t delay any longer. She acted immediately upon his departure.' },
                { text: 'Before Claudius left for Ostia', correct: false, feedback: 'She waited specifically for him to leave: "dum...proficisceretur" — until he was setting out.' }
            ],
            correctFeedback: 'Correct! Timing was everything. The moment Claudius departed on religious duty, Messalina struck. "nec ultra morata" — she delayed no longer than necessary. His absence was her window.'
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.messalinaSection3 = messalinaSection3;
}
