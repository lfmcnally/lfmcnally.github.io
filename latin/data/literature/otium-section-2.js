// Otium Section 2: Poem 50, Lines 11-21
// Sleepless Night and Warning

var otiumSection2 = {
    section: 2,
    title: 'Sleepless Night and Warning',
    lines: '50.11-21',
    latinText: 'sed toto indomitus furore lecto versarer, cupiens videre lucem, ut tecum loquerer simulque ut essem. at defessa labore membra postquam semimortua lectulo iacebant, hoc, iucunde, tibi poema feci, ex quo perspiceres meum dolorem. nunc audax cave sis, preces nostras cave despuas, ocelle, ne Nemesis reposcat a te. est vemens dea.',

    questions: [
        {
            type: 'translation',
            latin: 'sed toto indomitus furore lecto versarer',
            question: 'Which translation is correct?',
            options: [
                { text: 'but untamed by frenzy I tossed and turned over the whole bed', correct: true },
                { text: 'but I was untamed on the whole angry bed', correct: false, feedback: '"furore" (ablative of cause) means "by frenzy/passion", not "angry bed". "indomitus" describes Catullus, not the bed.' },
                { text: 'but having tamed my whole bed I turned around', correct: false, feedback: '"indomitus" means "untamed/unconquered", not "having tamed". Catullus is the wild one, not the bed.' },
                { text: 'but I was turning over the whole bed, untamed by fury', correct: false, feedback: 'The word order should give "untamed by frenzy I tossed" — "indomitus furore" go together as cause and state.' }
            ],
            correctFeedback: 'Correct! "indomitus furore" (untamed by passion) shows Catullus couldn\'t control his excited state. "toto lecto versarer" vividly depicts his restless tossing over the entire bed.'
        },
        {
            type: 'translation',
            latin: 'cupiens videre lucem',
            question: 'Which translation is correct?',
            options: [
                { text: 'longing to see the dawn', correct: true },
                { text: 'desiring to see the light', correct: false, feedback: 'While technically correct, "lucem" here specifically means "dawn" — he\'s waiting for daylight so he can see Licinius again.' },
                { text: 'wanting to see clearly', correct: false, feedback: '"videre lucem" doesn\'t mean "see clearly". He\'s longing for dawn to arrive, not for visual clarity.' },
                { text: 'hoping to have been seen in the light', correct: false, feedback: '"cupiens videre" is active ("longing to see"), not passive. He wants to see the dawn come.' }
            ],
            correctFeedback: 'Correct! "cupiens videre lucem" shows he couldn\'t wait for dawn — only daylight would bring the chance to see Licinius again. The night felt endless.'
        },
        {
            type: 'translation',
            latin: 'ut tecum loquerer simulque ut essem',
            question: 'Which translation is correct?',
            options: [
                { text: 'so that I might speak with you and be with you', correct: true },
                { text: 'that I was speaking with you and being with you', correct: false, feedback: '"loquerer" and "essem" are imperfect subjunctive in purpose clauses ("so that I might"), not indicative statements.' },
                { text: 'as I was speaking with you and being with you at the same time', correct: false, feedback: '"ut" here introduces purpose ("so that"), not manner ("as"). These are wishes for the future, not descriptions of past events.' },
                { text: 'so that I might speak and be at the same time with you', correct: false, feedback: '"simulque" means "and at the same time" but modifies "ut essem" — he wants to both speak AND be with Licinius.' }
            ],
            correctFeedback: 'Correct! "ut... loquerer... ut essem" are purpose clauses expressing his desire. "simulque" (and at the same time) emphasises he wants both conversation and presence.'
        },
        {
            type: 'translation',
            latin: 'at defessa labore membra postquam',
            question: 'Which translation is correct?',
            options: [
                { text: 'but after my limbs, exhausted by effort', correct: true },
                { text: 'but after hard work exhausted my limbs', correct: false, feedback: '"defessa" agrees with "membra" (limbs) — the limbs are exhausted, they\'re not doing the exhausting.' },
                { text: 'but when my weary work was after my limbs', correct: false, feedback: '"labore" (ablative of cause) explains WHY the limbs are exhausted — "exhausted BY effort/toil".' },
                { text: 'but afterward my exhausted limbs worked', correct: false, feedback: '"postquam" means "after" as a conjunction introducing a clause, not "afterward" as a separate adverb.' }
            ],
            correctFeedback: 'Correct! "defessa labore membra" — his limbs are worn out from the "labour" of tossing and turning all night. The physical toll of emotional excitement.'
        },
        {
            type: 'translation',
            latin: 'semimortua lectulo iacebant',
            question: 'Which translation is correct?',
            options: [
                { text: 'lay half-dead on my little bed', correct: true },
                { text: 'were lying half-dead in a small reading room', correct: false, feedback: '"lectulo" is a diminutive of "lectus" (bed), not related to "lectio" (reading). It means "little bed".' },
                { text: 'had lain half-dead on the bed', correct: false, feedback: '"iacebant" is imperfect ("were lying/lay"), not pluperfect ("had lain").' },
                { text: 'lay almost dead near the couch', correct: false, feedback: '"semimortua" means "half-dead", not "almost dead". "lectulo" is locative/ablative — "on the bed", not "near".' }
            ],
            correctFeedback: 'Correct! "semimortua" (half-dead) is dramatic hyperbole. "lectulo" is an affectionate diminutive — even the bed gets a tender treatment in Catullus\'s style.'
        },
        {
            type: 'translation',
            latin: 'hoc, iucunde, tibi poema feci',
            question: 'Which translation is correct?',
            options: [
                { text: 'I wrote this poem for you, charming one', correct: true },
                { text: 'I made this pleasant poem for you', correct: false, feedback: '"iucunde" is vocative, addressing Licinius directly as "charming one" or "delightful one" — it\'s not an adjective modifying "poema".' },
                { text: 'this poem, pleasantly, I made for you', correct: false, feedback: '"iucunde" is not an adverb here but a vocative noun/adjective addressing Licinius.' },
                { text: 'joyfully I made this poem for you', correct: false, feedback: '"iucunde" is vocative (a form of address), not an adverb. It\'s like saying "my dear" or "charming one".' }
            ],
            correctFeedback: 'Correct! "iucunde" (charming one, delightful one) is a vocative, addressing Licinius with an affectionate epithet. The poem itself is the product of his sleepless night.'
        },
        {
            type: 'translation',
            latin: 'ex quo perspiceres meum dolorem',
            question: 'Which translation is correct?',
            options: [
                { text: 'from which you might perceive my suffering', correct: true },
                { text: 'from which you perceived my pain', correct: false, feedback: '"perspiceres" is imperfect subjunctive in a purpose clause ("might perceive"), not indicative ("perceived").' },
                { text: 'out of which my pain might be perceived by you', correct: false, feedback: '"perspiceres" is active ("you might perceive"), not passive. Licinius is the one perceiving.' },
                { text: 'from where you could see through my grief', correct: false, feedback: '"perspicere" means "perceive/understand clearly", not literally "see through". "dolor" is better as "suffering" here.' }
            ],
            correctFeedback: 'Correct! The poem is written so Licinius can understand Catullus\'s "dolor" — his lovesick suffering. "ex quo" introduces purpose — this is WHY he wrote the poem.'
        },
        {
            type: 'translation',
            latin: 'nunc audax cave sis',
            question: 'Which translation is correct?',
            options: [
                { text: 'now take care not to be reckless', correct: true },
                { text: 'now boldly take care', correct: false, feedback: '"audax" is not an adverb. "cave sis" with subjunctive means "take care not to be" — Catullus warns Licinius against being reckless.' },
                { text: 'now, bold one, be careful', correct: false, feedback: '"audax" here is predicative with "sis" — "take care not to BE reckless", not addressing Licinius as "bold one".' },
                { text: 'now bravely beware', correct: false, feedback: '"audax" isn\'t an adverb meaning "bravely". The phrase warns against being reckless (audax) in response to Catullus\'s plea.' }
            ],
            correctFeedback: 'Correct! "cave + subjunctive" means "take care not to/beware of being". Catullus warns Licinius not to be reckless — not to dismiss his heartfelt poem.'
        },
        {
            type: 'translation',
            latin: 'preces nostras cave despuas, ocelle',
            question: 'Which translation is correct?',
            options: [
                { text: 'take care not to spit upon our prayers, darling', correct: true },
                { text: 'beware of spitting our prayers, little eye', correct: false, feedback: '"despuas" means "spit upon/reject contemptuously". "ocelle" (little eye) is a term of endearment, better translated as "darling".' },
                { text: 'our prayers take care, do not spit, my eye', correct: false, feedback: 'Word order: "cave despuas preces nostras" — "take care not to spit upon our prayers".' },
                { text: 'watch out for our despised prayers, little one', correct: false, feedback: '"despuas" is subjunctive verb ("spit upon/reject"), not an adjective. He\'s asking Licinius not to reject his prayers.' }
            ],
            correctFeedback: 'Correct! "despuere" (to spit upon) means to reject contemptuously. "ocelle" (darling, literally "little eye") is an affectionate address — Catullus mixes warning with tenderness.'
        },
        {
            type: 'translation',
            latin: 'ne Nemesis reposcat a te',
            question: 'Which translation is correct?',
            options: [
                { text: 'lest Nemesis demand punishment from you', correct: true },
                { text: 'so that Nemesis does not demand from you', correct: false, feedback: 'While "ne" can mean "so that not", here the sense is warning/threat — "lest" captures the ominous tone better.' },
                { text: 'Nemesis will not demand back from you', correct: false, feedback: '"reposcat" is subjunctive in a negative purpose clause, not future indicative. It\'s a warning about potential divine punishment.' },
                { text: 'that Nemesis may not repay you', correct: false, feedback: '"reposcat" (from reposcere) means "demand back/demand punishment", not simply "repay".' }
            ],
            correctFeedback: 'Correct! Nemesis is the goddess of retribution. If Licinius spurns Catullus\'s poem (and affection), divine punishment awaits. A playfully serious warning.'
        },
        {
            type: 'translation',
            latin: 'est vemens dea',
            question: 'Which translation is correct?',
            options: [
                { text: 'she is a fierce goddess', correct: true },
                { text: 'the goddess is coming', correct: false, feedback: '"vemens" (variant of "vehemens") means "fierce/violent", not "coming". This is a warning about Nemesis\'s nature.' },
                { text: 'she is the goddess of revenge', correct: false, feedback: 'While Nemesis IS associated with revenge, "vemens" means "fierce/violent", describing her character, not her domain.' },
                { text: 'there is a powerful goddess', correct: false, feedback: '"est" here has "dea" as subject — "she (Nemesis) is a fierce goddess", not impersonal "there is".' }
            ],
            correctFeedback: 'Correct! This short, punchy sentence lands the warning. Nemesis is "vemens" (fierce, violent) — don\'t mess with her by rejecting Catullus!'
        },
        {
            type: 'style',
            latin: 'indomitus furore',
            question: 'What is the effect of describing Catullus as "indomitus furore" (untamed by passion)?',
            options: [
                { text: 'It presents his emotional state as a wild force he cannot control', correct: true },
                { text: 'It shows he was actually calm and collected', correct: false, feedback: '"indomitus" (untamed) and "furore" (frenzy) are anything but calm. He\'s describing overwhelming, uncontrollable passion.' },
                { text: 'It indicates he was angry at Licinius', correct: false, feedback: '"furor" here is passionate excitement, not anger. The whole poem expresses affection, not hostility.' },
                { text: 'It suggests he was pretending to be wild', correct: false, feedback: 'The vivid physical details (tossing on the bed, can\'t sleep) suggest genuine experience, not pretense.' }
            ],
            correctFeedback: 'Correct! "indomitus" (untamed, like a wild animal) makes passion a force beyond his control. This is the language of erotic furor applied to literary friendship.'
        },
        {
            type: 'style',
            latin: 'toto... lecto',
            question: 'What effect does "toto lecto" (over the whole bed) create?',
            options: [
                { text: 'Hyperbole that humorously emphasises how restlessly he tossed and turned', correct: true },
                { text: 'It indicates he had an unusually large bed', correct: false, feedback: 'The point isn\'t bed size but restlessness — he used every inch of it tossing and turning.' },
                { text: 'It shows the bed was complete and comfortable', correct: false, feedback: '"toto" emphasises extent of his tossing, not the bed\'s completeness or comfort.' },
                { text: 'It\'s a neutral description with no special effect', correct: false, feedback: '"toto" adds comic hyperbole — he didn\'t just turn over, he thrashed across the ENTIRE bed.' }
            ],
            correctFeedback: 'Correct! The hyperbole is gently comic — poor Catullus doesn\'t just turn over, he covers the entire bed in his restless excitement. Self-aware exaggeration.'
        },
        {
            type: 'style',
            latin: 'semimortua',
            question: 'What is the effect of "semimortua" (half-dead)?',
            options: [
                { text: 'Dramatic hyperbole expressing complete exhaustion from emotional turmoil', correct: true },
                { text: 'It indicates he was actually dying', correct: false, feedback: 'This is hyperbole, not literal near-death. He\'s exhausted from a night of excited tossing, not genuinely dying.' },
                { text: 'It suggests he had been in a fight', correct: false, feedback: 'The "labour" exhausting him is emotional tossing and turning, not physical combat.' },
                { text: 'It shows medical symptoms requiring treatment', correct: false, feedback: '"semimortua" is poetic exaggeration of exhaustion from lovesickness, not a medical diagnosis.' }
            ],
            correctFeedback: 'Correct! "semimortua" is gloriously over-the-top. After a night of passion-induced insomnia, his limbs lie "half-dead" — dramatic but self-aware hyperbole.'
        },
        {
            type: 'style',
            latin: 'lectulo',
            question: 'Why does Catullus use the diminutive "lectulo" (little bed)?',
            options: [
                { text: 'The diminutive adds pathos and affection, making even the bed part of his emotional landscape', correct: true },
                { text: 'It indicates he was poor and had a small bed', correct: false, feedback: 'Diminutives in Catullus express emotion, not literal size. The "little bed" is endearing, not a poverty marker.' },
                { text: 'It\'s the normal Latin word for bed', correct: false, feedback: 'The normal word is "lectus". "lectulus" is a diminutive used for emotional colour.' },
                { text: 'It shows the bed was comfortable', correct: false, feedback: 'Diminutives don\'t indicate comfort. "lectulo" adds tenderness to the scene of his exhaustion.' }
            ],
            correctFeedback: 'Correct! Like "ocellos" (dear eyes) earlier, "lectulo" (dear little bed) shows Catullus\'s affectionate style — even furniture gets tender treatment.'
        },
        {
            type: 'style',
            latin: 'iucunde',
            question: 'What is the effect of the vocative "iucunde" (charming one)?',
            options: [
                { text: 'An affectionate epithet that maintains intimacy while delivering a warning', correct: true },
                { text: 'It shows the poem was meant to be pleasant', correct: false, feedback: '"iucunde" is vocative, addressing Licinius directly as "charming one/delightful one" — it\'s not about the poem.' },
                { text: 'It indicates the poem is a joke', correct: false, feedback: 'The vocative expresses genuine affection. The warning that follows is playful but heartfelt.' },
                { text: 'It\'s a sarcastic insult', correct: false, feedback: 'Nothing suggests sarcasm. "iucunde" is a tender address to his dear friend.' }
            ],
            correctFeedback: 'Correct! Addressing Licinius as "iucunde" (charming one) keeps the tone affectionate even as Catullus describes suffering and issues warnings. Intimacy pervades the poem.'
        },
        {
            type: 'style',
            latin: 'ocelle',
            question: 'What is the significance of calling Licinius "ocelle" (little eye/darling)?',
            options: [
                { text: 'It\'s a tender endearment that softens the warning, showing affection despite the threat', correct: true },
                { text: 'It refers to Licinius\'s small eyes', correct: false, feedback: '"ocelle" is a term of endearment (like "darling"), not a literal reference to eye size.' },
                { text: 'It\'s an insult suggesting Licinius is nosy', correct: false, feedback: '"ocellus" (little eye) is affectionate, not insulting. It\'s like calling someone "sweetheart" or "darling".' },
                { text: 'It connects to the "ocellos" unable to sleep earlier', correct: true },
            ],
            correctFeedback: 'Correct! "ocelle" is deeply affectionate — calling someone your "little eye" means they\'re precious to you. It also connects to his sleepless "ocellos" earlier in the poem.'
        },
        {
            type: 'style',
            latin: 'cave... cave',
            question: 'What is the effect of repeating "cave" (beware)?',
            options: [
                { text: 'The anaphora creates urgency and emphasises the seriousness of the warning', correct: true },
                { text: 'It shows Catullus forgot he already said it', correct: false, feedback: 'The repetition is deliberate rhetorical emphasis (anaphora), not forgetfulness.' },
                { text: 'It indicates there are two separate warnings', correct: false, feedback: 'Both "cave" warn against the same thing — rejecting Catullus\'s affection. The repetition intensifies.' },
                { text: 'It\'s a common Latin idiom with no special meaning', correct: false, feedback: 'The repetition is a deliberate stylistic choice creating emphasis and urgency.' }
            ],
            correctFeedback: 'Correct! The repeated "cave... cave" creates insistent urgency. "Beware... beware!" — Catullus wants Licinius to take his warning (and his affection) seriously.'
        },
        {
            type: 'style',
            latin: 'est vemens dea',
            question: 'What is the effect of ending with "est vemens dea" (she is a fierce goddess)?',
            options: [
                { text: 'The short, punchy sentence lands the threat with dramatic finality', correct: true },
                { text: 'It shows Catullus is genuinely afraid of Nemesis', correct: false, feedback: 'The ending is playfully threatening, not genuinely fearful. The brevity creates wit rather than terror.' },
                { text: 'It\'s anticlimactic after the longer sentences before', correct: false, feedback: 'The brevity is the point — after the buildup, this short statement punches hard.' },
                { text: 'It indicates the poem is unfinished', correct: false, feedback: 'The sentence is a deliberate, effective ending — short and emphatic, like a dropped mic.' }
            ],
            correctFeedback: 'Correct! After flowing sentences, this three-word punch is devastatingly effective. The abrupt end mirrors Nemesis\'s swift retribution — brief, powerful, final.'
        },
        {
            type: 'comprehension',
            latin: 'cupiens videre lucem, ut tecum loquerer simulque ut essem',
            question: 'Why does Catullus want dawn to come?',
            options: [
                { text: 'So he can see Licinius again, talk with him, and be in his company', correct: true },
                { text: 'Because he\'s afraid of the dark', correct: false, feedback: 'His desire for dawn is about seeing Licinius, not fear of darkness.' },
                { text: 'Because he needs to go to work', correct: false, feedback: 'The purpose clauses make clear: he wants to speak with and be with Licinius. No work mentioned.' },
                { text: 'So his insomnia will end', correct: false, feedback: 'While dawn will end his sleepless night, the PURPOSE he states is seeing Licinius, not just escaping insomnia.' }
            ],
            correctFeedback: 'Correct! The night feels endless because only daylight brings the possibility of Licinius\'s company. Catullus wants to continue their delightful conversation.'
        },
        {
            type: 'comprehension',
            latin: 'hoc... tibi poema feci, ex quo perspiceres meum dolorem',
            question: 'What is the purpose of the poem according to Catullus?',
            options: [
                { text: 'To show Licinius how much his absence causes Catullus to suffer', correct: true },
                { text: 'To entertain Licinius with clever verses', correct: false, feedback: 'While the poem IS clever, its stated purpose is to reveal his "dolor" (suffering) from missing Licinius.' },
                { text: 'To win a poetry competition', correct: false, feedback: 'No competition is mentioned. The poem is a personal message to communicate emotional pain.' },
                { text: 'To practice his poetic skills', correct: false, feedback: 'The purpose given is communication of feeling, not skill practice.' }
            ],
            correctFeedback: 'Correct! Catullus explains his poem\'s purpose: so Licinius can "perspicere" (perceive/understand) his "dolor" (suffering). The poem is emotional communication.'
        },
        {
            type: 'comprehension',
            latin: 'ne Nemesis reposcat a te',
            question: 'What is Catullus warning Licinius about?',
            options: [
                { text: 'Divine retribution if he spurns Catullus\'s affection and poem', correct: true },
                { text: 'A woman named Nemesis who wants money from Licinius', correct: false, feedback: 'Nemesis is the goddess of divine retribution, not a human creditor.' },
                { text: 'Physical danger from enemies', correct: false, feedback: 'The threat is divine punishment for emotional slight, not physical danger from humans.' },
                { text: 'Bad luck in his poetry writing', correct: false, feedback: 'Nemesis punishes those who reject sincere affection, not those who write bad poetry.' }
            ],
            correctFeedback: 'Correct! Nemesis punishes those who wrong others, especially through hubris or cruelty. If Licinius spurns Catullus\'s heartfelt poem, divine payback awaits.'
        },
        {
            type: 'comprehension',
            latin: 'preces nostras... despuas',
            question: 'What does Catullus call his poem when warning Licinius?',
            options: [
                { text: '"Prayers" — elevating his poetic appeal to religious significance', correct: true },
                { text: '"Requests" — a casual term for what he wants', correct: false, feedback: '"preces" specifically means "prayers", giving religious weight to his appeal. This isn\'t casual.' },
                { text: '"Curses" — threatening Licinius with bad wishes', correct: false, feedback: '"preces" means prayers or entreaties, not curses. Catullus is appealing, not threatening (Nemesis does the threatening).' },
                { text: '"Verses" — a technical term for poetry', correct: false, feedback: 'He calls them "preces" (prayers), not "versus" (verses). The religious language elevates his appeal.' }
            ],
            correctFeedback: 'Correct! Calling his poem "preces" (prayers) gives it religious solemnity. Rejecting prayers is serious — hence the threat of Nemesis.'
        }
    ]
};
