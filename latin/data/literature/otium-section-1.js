// Otium Section 1: Poem 50, Lines 1-10
// Writing Poems with Licinius

var otiumSection1 = {
    section: 1,
    title: 'Writing Poems with Licinius',
    lines: '50.1-10',
    latinText: 'hesterno, Licini, die multum lusimus in meis tabellis, ut convenerat esse delicatos: scribens versiculos uterque nostrum ludebat numero modo hoc modo illoc, reddens mutua per iocum atque vinum. atque illinc abii tuo lepore incensus, Licini, facetiis ut nec me miserum cibus iuvaret nec somnus tegeret quiete ocellos.',

    questions: [
        {
            type: 'translation',
            latin: 'hesterno, Licini, die',
            question: 'Which translation is correct?',
            options: [
                { text: 'Yesterday, Licinius', correct: true },
                { text: 'On that day, Licinius', correct: false, feedback: '"hesterno die" specifically means "yesterday" (literally "on yesterday\'s day"), not just any past day.' },
                { text: 'The day before, Licinius', correct: false, feedback: '"hesterno die" means "yesterday", not "the day before" which would imply two days ago.' },
                { text: 'In the old days, Licinius', correct: false, feedback: '"hesternus" means "of yesterday", not "old" or "former" in a general sense.' }
            ],
            correctFeedback: 'Correct! "hesterno die" is an ablative of time meaning "yesterday" (literally "on yesterday\'s day"). Licinius Calvus was a famous orator and poet, and Catullus\'s close friend.'
        },
        {
            type: 'translation',
            latin: 'multum lusimus in meis tabellis',
            question: 'Which translation is correct?',
            options: [
                { text: 'we played much on my writing tablets', correct: true },
                { text: 'we played a lot in my house', correct: false, feedback: '"tabellis" means "writing tablets" (wax tablets for writing), not "house". The tablets were used for composing poetry.' },
                { text: 'we were playing much on my tablets', correct: false, feedback: '"lusimus" is perfect tense ("we played"), not imperfect ("we were playing").' },
                { text: 'we played many games on my tablets', correct: false, feedback: '"multum" is an adverb meaning "much" or "a lot", not an adjective modifying games.' }
            ],
            correctFeedback: 'Correct! "lusimus" (perfect of "ludo") can mean "play" but here refers to the playful composition of poetry. "tabellis" are wax writing tablets used for drafting verses.'
        },
        {
            type: 'translation',
            latin: 'ut convenerat esse delicatos',
            question: 'Which translation is correct?',
            options: [
                { text: 'as we had agreed to be playful', correct: true },
                { text: 'so that we might be delicate', correct: false, feedback: '"ut convenerat" means "as had been agreed" (indicative), not "so that" (which would require subjunctive). "delicatos" here means "playful/refined" in a poetic sense.' },
                { text: 'until it was agreed to be delightful', correct: false, feedback: '"ut" here means "as", not "until". "convenerat" is pluperfect indicative meaning "it had been agreed".' },
                { text: 'as we had come to be refined', correct: false, feedback: '"convenerat" here is impersonal "it had been agreed", not "we had come" (which would be "conveneramus").' }
            ],
            correctFeedback: 'Correct! "delicatos" here means "playful" or "refined" in a literary sense — they had agreed beforehand to engage in witty, lighthearted verse composition.'
        },
        {
            type: 'translation',
            latin: 'scribens versiculos uterque nostrum',
            question: 'Which translation is correct?',
            options: [
                { text: 'each of us writing little verses', correct: true },
                { text: 'both of us were writing verses', correct: false, feedback: '"scribens" is a present participle ("writing"), not an imperfect verb. "versiculos" is a diminutive meaning "little verses".' },
                { text: 'writing verses, one of us', correct: false, feedback: '"uterque nostrum" means "each of us" (both), not "one of us" (which would be "alter nostrum").' },
                { text: 'each of us had written small verses', correct: false, feedback: '"scribens" is present participle ("writing"), not perfect ("having written"). The action is ongoing.' }
            ],
            correctFeedback: 'Correct! "versiculos" is a charming diminutive of "versus" — "little verses" or "versicles". "uterque nostrum" means "each of us two", emphasising their partnership in composition.'
        },
        {
            type: 'translation',
            latin: 'ludebat numero modo hoc modo illoc',
            question: 'Which translation is correct?',
            options: [
                { text: 'was playing with metre now in this one, now in that', correct: true },
                { text: 'was playing with numbers in this way and that', correct: false, feedback: '"numero" here means poetic "metre" not "numbers". "modo... modo" is an idiom meaning "now... now" or "at one time... at another".' },
                { text: 'played with rhythm this way and that way', correct: false, feedback: '"ludebat" is imperfect ("was playing"), not perfect ("played"). The imperfect captures the ongoing, playful nature of composition.' },
                { text: 'was counting now here, now there', correct: false, feedback: '"ludebat" means "was playing", not "counting". "numero" refers to poetic metre.' }
            ],
            correctFeedback: 'Correct! "numero" refers to poetic metre. "modo hoc modo illoc" (now this, now that) suggests they experimented with different metres — a playful game of poetic composition.'
        },
        {
            type: 'translation',
            latin: 'reddens mutua per iocum atque vinum',
            question: 'Which translation is correct?',
            options: [
                { text: 'returning verses in turn amid jest and wine', correct: true },
                { text: 'giving back mutual things through jokes and wine', correct: false, feedback: '"mutua" here means "in turn" or "reciprocally" — they exchanged verses back and forth. "per" with "iocum atque vinum" means "amid" these pleasures.' },
                { text: 'rendering mutual aid with jokes and wine', correct: false, feedback: '"reddens mutua" means "returning things in turn" — they exchanged verses reciprocally, not giving "mutual aid".' },
                { text: 'returning mutual favours through humour and wine', correct: false, feedback: 'While close, "mutua" specifically refers to the verses being exchanged — they took turns composing.' }
            ],
            correctFeedback: 'Correct! They engaged in a poetic "call and response" — taking turns composing verses while enjoying wine and witty conversation. A perfect scene of Roman literary friendship.'
        },
        {
            type: 'translation',
            latin: 'atque illinc abii tuo lepore incensus',
            question: 'Which translation is correct?',
            options: [
                { text: 'and I left there inflamed by your charm', correct: true },
                { text: 'and from there I went away, burning your charm', correct: false, feedback: '"incensus" is passive ("inflamed/set on fire BY"), not active ("burning"). "tuo lepore" is ablative of cause.' },
                { text: 'and I had left there, set on fire by your wit', correct: false, feedback: '"abii" is perfect ("I left"), not pluperfect ("I had left").' },
                { text: 'and I departed from there toward your charm', correct: false, feedback: '"tuo lepore" is ablative of cause ("by your charm"), not motion toward. "incensus" shows he was inflamed BY the charm.' }
            ],
            correctFeedback: 'Correct! "lepore" (charm, wit, grace) is ablative of cause with "incensus" (set on fire, inflamed). Catullus left the evening burning with excitement from Licinius\'s company.'
        },
        {
            type: 'translation',
            latin: 'Licini, facetiis',
            question: 'Which translation is correct?',
            options: [
                { text: 'Licinius, by your wit', correct: true },
                { text: 'Licinius, with jokes', correct: false, feedback: 'While "facetiae" can mean "jokes", here it\'s better translated as "wit" or "cleverness" — it refers to Licinius\'s sophisticated humour and charm.' },
                { text: 'Licinius, for your pleasantries', correct: false, feedback: '"facetiis" is ablative of cause ("by"), not purpose ("for"). The wit caused Catullus\'s inflamed state.' },
                { text: 'to Licinius, with elegance', correct: false, feedback: '"Licini" is vocative (addressing Licinius directly), not dative ("to Licinius").' }
            ],
            correctFeedback: 'Correct! The vocative "Licini" addresses his friend directly. "facetiis" (ablative) continues the explanation of what inflamed Catullus — Licinius\'s sophisticated wit and charm.'
        },
        {
            type: 'translation',
            latin: 'ut nec me miserum cibus iuvaret',
            question: 'Which translation is correct?',
            options: [
                { text: 'so that food did not help wretched me', correct: true },
                { text: 'so that food might not help me, miserable', correct: false, feedback: 'While subjunctive can express "might", here "iuvaret" is better as a result — the excitement was SO great THAT food didn\'t help.' },
                { text: 'that neither food nor I, wretched, was helped', correct: false, feedback: '"me miserum" is accusative object of "iuvaret" — food didn\'t help ME. "nec" negates the verb, not a list.' },
                { text: 'so that no food would help the wretched me', correct: false, feedback: '"nec" means "not" here, modifying the whole clause. "cibus" is the subject — food (not "no food") didn\'t help.' }
            ],
            correctFeedback: 'Correct! "ut" with subjunctive here expresses result — he was SO excited that food couldn\'t satisfy him. "me miserum" is accusative of exclamation — "wretched me!"'
        },
        {
            type: 'translation',
            latin: 'nec somnus tegeret quiete ocellos',
            question: 'Which translation is correct?',
            options: [
                { text: 'nor did sleep cover my eyes with rest', correct: true },
                { text: 'neither sleep nor rest covered my eyes', correct: false, feedback: '"quiete" is ablative of manner ("with rest"), not a second subject. Sleep didn\'t cover his eyes "with rest".' },
                { text: 'nor was sleep covering my quiet eyes', correct: false, feedback: '"quiete" modifies HOW sleep would cover (with rest), not the eyes. Also "tegeret" is imperfect subjunctive continuing the result clause.' },
                { text: 'and sleep did not peacefully cover my eyes', correct: false, feedback: '"ocellos" is a diminutive of "oculi" (eyes) — "little eyes" or affectionately "dear eyes".' }
            ],
            correctFeedback: 'Correct! "ocellos" is an affectionate diminutive — "dear little eyes". The parallel "nec... nec" (neither food... nor sleep) shows how completely Licinius\'s charm affected him.'
        },
        {
            type: 'style',
            latin: 'lusimus... ludebat',
            question: 'What is the effect of the wordplay between "lusimus" and "ludebat"?',
            options: [
                { text: 'It reinforces the theme of playfulness — the repeated "lud-" root makes the verse itself playful', correct: true },
                { text: 'It shows they were gambling, not writing poetry', correct: false, feedback: '"ludo" can mean "play games" but here clearly refers to poetic composition. The repetition emphasises the lighthearted nature of their work.' },
                { text: 'It\'s accidental repetition with no special meaning', correct: false, feedback: 'Latin poets, especially Catullus, chose words carefully. The repeated root "lud-" (play) enacts the playfulness they\'re describing.' },
                { text: 'It indicates they were children at the time', correct: false, feedback: '"ludere" doesn\'t imply childishness. Sophisticated adults "played" with poetry — it was a refined intellectual pursuit.' }
            ],
            correctFeedback: 'Correct! The polyptoton (repetition of "lud-" root) makes the poem itself playful. Catullus doesn\'t just describe playfulness — he demonstrates it through his word choices.'
        },
        {
            type: 'style',
            latin: 'versiculos',
            question: 'What is the effect of the diminutive "versiculos" (little verses)?',
            options: [
                { text: 'It conveys affection and modest self-deprecation about their compositions', correct: true },
                { text: 'It shows the verses were very short', correct: false, feedback: 'While diminutives can indicate small size, here the effect is primarily emotional — it\'s affectionate and self-deprecating.' },
                { text: 'It indicates the verses were of poor quality', correct: false, feedback: 'The diminutive isn\'t negative — it\'s endearing. Catullus often uses diminutives to express affection, not criticism.' },
                { text: 'It means they were writing for children', correct: false, feedback: 'Nothing suggests a child audience. The diminutive expresses the poets\' playful, affectionate attitude toward their own work.' }
            ],
            correctFeedback: 'Correct! Diminutives in Catullus often express affection or charming self-deprecation. "versiculos" suggests these verses are dear to him, even as he playfully downplays their importance.'
        },
        {
            type: 'style',
            latin: 'modo hoc modo illoc',
            question: 'What does the phrase "modo hoc modo illoc" (now this, now that) suggest about their composition?',
            options: [
                { text: 'It captures the spontaneous, experimental nature of their poetic game', correct: true },
                { text: 'It shows they couldn\'t decide which metre to use', correct: false, feedback: 'The phrase suggests variety and playfulness, not indecision. They enjoyed experimenting with different metres.' },
                { text: 'It indicates confusion about what they were doing', correct: false, feedback: 'There\'s no confusion — the phrase captures the joyful spontaneity of switching between different metres.' },
                { text: 'It shows they were running back and forth', correct: false, feedback: '"hoc" and "illoc" refer to metres ("numero"), not physical movement. They shifted between poetic metres, not locations.' }
            ],
            correctFeedback: 'Correct! The bouncy rhythm of "modo hoc modo illoc" mimics the back-and-forth of their composition — trying one metre, then another, in a spirit of creative play.'
        },
        {
            type: 'style',
            latin: 'per iocum atque vinum',
            question: 'What does "per iocum atque vinum" (amid jest and wine) suggest about the setting?',
            options: [
                { text: 'It evokes the convivial atmosphere of a Roman dinner party (convivium)', correct: true },
                { text: 'It shows they were drunk and not serious poets', correct: false, feedback: 'Wine at Roman gatherings was normal and refined. The wine enhances the conviviality, not undermining their poetic skill.' },
                { text: 'It indicates the poetry was crude because of alcohol', correct: false, feedback: 'Wine and wit went together at Roman literary gatherings. This is sophisticated otium (leisure), not crude drunkenness.' },
                { text: 'It means they were joking about wine', correct: false, feedback: '"per" means "amid" or "through" — the jest and wine are the atmosphere surrounding their composition, not the subject.' }
            ],
            correctFeedback: 'Correct! This evokes the Roman convivium — a dinner party where poetry, wine, and witty conversation flowed together. This is civilised otium (leisure) at its finest.'
        },
        {
            type: 'style',
            latin: 'incensus',
            question: 'What is the effect of using "incensus" (inflamed/set on fire)?',
            options: [
                { text: 'It uses the language of erotic passion to describe intellectual and poetic excitement', correct: true },
                { text: 'It suggests Catullus literally caught fire', correct: false, feedback: '"incensus" is metaphorical. The fire imagery expresses the intensity of his emotional response to Licinius\'s charm.' },
                { text: 'It shows he was angry at Licinius', correct: false, feedback: '"incensus" here means "inflamed with passion/excitement", not anger. The context is clearly positive.' },
                { text: 'It indicates he had a fever', correct: false, feedback: 'The "fire" is metaphorical passion, not literal illness. He burns with excitement from intellectual and personal chemistry.' }
            ],
            correctFeedback: 'Correct! "incensus" uses the vocabulary of erotic passion for intellectual excitement. This blurring of friendship, poetry, and romantic language is characteristically Catullan.'
        },
        {
            type: 'style',
            latin: 'nec... nec',
            question: 'What is the effect of the parallel "nec cibus iuvaret... nec somnus tegeret"?',
            options: [
                { text: 'The anaphora emphasises total physical disruption — both basic needs are affected', correct: true },
                { text: 'It shows he was fasting for religious reasons', correct: false, feedback: 'His inability to eat and sleep is caused by excitement, not religious practice. The parallel shows comprehensive physical effect.' },
                { text: 'It indicates he was ill', correct: false, feedback: 'The context is lovesick-style excitement, not illness. He\'s too stirred up to eat or sleep — a common symptom of passion.' },
                { text: 'It\'s just a coincidence that both clauses start with "nec"', correct: false, feedback: 'The parallel structure is deliberate. Anaphora (repetition of "nec") creates rhetorical emphasis on his disturbed state.' }
            ],
            correctFeedback: 'Correct! The "nec... nec" anaphora creates parallel structure, showing how completely his encounter with Licinius has affected him — neither food nor sleep can soothe him.'
        },
        {
            type: 'style',
            latin: 'ocellos',
            question: 'Why does Catullus use the diminutive "ocellos" (little eyes/dear eyes)?',
            options: [
                { text: 'The affectionate diminutive adds pathos to his sleepless suffering', correct: true },
                { text: 'It indicates he had small eyes', correct: false, feedback: 'Diminutives in Catullus express emotion, not literal size. "ocellos" adds tenderness and pathos.' },
                { text: 'It was the normal Latin word for eyes', correct: false, feedback: 'The normal word is "oculi". "ocelli" is a diminutive used for emotional effect — affection, pity, or endearment.' },
                { text: 'It shows he was writing about someone else\'s eyes', correct: false, feedback: 'These are his own eyes. The diminutive expresses self-pity and adds pathos to his sleepless state.' }
            ],
            correctFeedback: 'Correct! The diminutive "ocellos" adds pathos and self-pity to the image. Poor Catullus — even his dear little eyes can\'t find rest!'
        },
        {
            type: 'comprehension',
            latin: 'lusimus in meis tabellis',
            question: 'What activity does "lusimus in meis tabellis" refer to?',
            options: [
                { text: 'Composing poetry together on wax writing tablets', correct: true },
                { text: 'Playing board games on the table', correct: false, feedback: '"tabellis" refers to wax writing tablets used for drafting compositions, not game boards. "lusimus" here means "playing" with poetry.' },
                { text: 'Painting pictures on tablets', correct: false, feedback: '"tabellis" are writing tablets. Combined with "scribens versiculos", this clearly refers to poetic composition.' },
                { text: 'Writing business letters', correct: false, feedback: 'The context (delicatos, versiculos, iocum) makes clear this is playful poetry, not business correspondence.' }
            ],
            correctFeedback: 'Correct! Roman poets drafted verses on wax tablets (tabellae), which could be easily corrected by smoothing the wax. This was their creative "play".'
        },
        {
            type: 'comprehension',
            latin: 'ut convenerat esse delicatos',
            question: 'What does "delicatos" imply about their agreement?',
            options: [
                { text: 'They agreed to write light, playful verse rather than serious poetry', correct: true },
                { text: 'They agreed to be physically delicate', correct: false, feedback: '"delicatus" here refers to literary style — refined, playful, elegant verse — not physical delicacy.' },
                { text: 'They agreed to eat delicacies', correct: false, feedback: 'The context is poetry composition ("lusimus", "versiculos"). "delicatos" describes their poetic mode, not their diet.' },
                { text: 'They agreed to be difficult with each other', correct: false, feedback: '"delicatus" means refined, elegant, playful — not difficult or demanding.' }
            ],
            correctFeedback: 'Correct! "delicatus" in a literary context means refined, elegant, witty. They agreed to engage in sophisticated, playful verse — not heavy, serious epic.'
        },
        {
            type: 'comprehension',
            latin: 'reddens mutua per iocum atque vinum',
            question: 'How did Catullus and Licinius compose their verses?',
            options: [
                { text: 'They took turns, exchanging verses back and forth while drinking and joking', correct: true },
                { text: 'They wrote identical verses at the same time', correct: false, feedback: '"mutua" means "in turn" or "reciprocally" — they exchanged different verses, not identical ones.' },
                { text: 'They competed to write the most verses', correct: false, feedback: 'The emphasis is on exchange and reciprocity ("mutua"), not competition. It was collaborative play.' },
                { text: 'Catullus wrote while Licinius drank', correct: false, feedback: '"uterque nostrum" (each of us) and "mutua" (in turn) show both participated equally in both writing and drinking.' }
            ],
            correctFeedback: 'Correct! This was a collaborative game — each would compose a verse, then pass it to the other, back and forth, all while enjoying wine and witty conversation.'
        },
        {
            type: 'comprehension',
            latin: 'ut nec me miserum cibus iuvaret nec somnus tegeret quiete ocellos',
            question: 'What is Catullus describing in these lines?',
            options: [
                { text: 'The symptoms of intense excitement — inability to eat or sleep after the evening', correct: true },
                { text: 'An illness he caught from Licinius', correct: false, feedback: 'This isn\'t illness — it\'s the language of lovesickness applied to intellectual excitement. He\'s too stirred up to eat or sleep.' },
                { text: 'Poverty preventing him from having food and comfortable sleep', correct: false, feedback: 'The cause is emotional excitement ("incensus tuo lepore"), not material poverty.' },
                { text: 'A punishment from the gods for enjoying himself', correct: false, feedback: 'There\'s no divine punishment. These are the happy symptoms of being intellectually and emotionally "on fire".' }
            ],
            correctFeedback: 'Correct! These are classic symptoms of passionate excitement — the same imagery used for lovesickness. Catullus applies erotic vocabulary to intellectual and friendly passion.'
        },
        {
            type: 'comprehension',
            latin: 'tuo lepore... facetiis',
            question: 'What qualities of Licinius does Catullus praise?',
            options: [
                { text: 'His charm, wit, and sophisticated humour', correct: true },
                { text: 'His physical beauty', correct: false, feedback: '"lepor" and "facetiae" refer to wit and charm, not physical appearance. Catullus admires Licinius\'s intellect and conversation.' },
                { text: 'His wealth and generosity', correct: false, feedback: 'No mention of wealth. The qualities praised are intellectual — charm, wit, elegance of mind.' },
                { text: 'His political influence', correct: false, feedback: 'While Licinius Calvus was indeed politically active, the poem focuses on his literary and personal charm, not politics.' }
            ],
            correctFeedback: 'Correct! "lepor" (charm, grace, wit) and "facetiae" (witticisms, sophistication) praise Licinius\'s intellectual and social qualities — exactly what makes a great literary companion.'
        }
    ]
};
