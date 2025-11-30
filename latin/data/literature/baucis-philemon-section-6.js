// Baucis and Philemon Section 6: Lines 64-76
// Philemon asks that he and Baucis may die at the same time

var baucisPhilemonSection6 = {
    section: 6,
    title: 'Philemon asks that he and Baucis may die at the same time',
    lines: '64-76',
    latinText: '"esse sacerdotes delubraque vestra tueri poscimus, et quoniam concordes egimus annos, auferat hora duos eadem, nec coniugis umquam busta meae videam neu sim tumulandus ab illa." vota fides sequitur; templi tutela fuere, donec vita data est. annis aevoque soluti ante gradus sacros cum starent forte locique narrarent casus, frondere Philemona Baucis, Baucida conspexit senior frondere Philemon. iamque super geminos crescente cacumine vultus mutua, dum licuit, reddebant dicta "vale" que "o coniunx" dixere simul, simul abdita texit ora frutex.',

    questions: [
        {
            type: 'translation',
            latin: 'esse sacerdotes delubraque vestra tueri poscimus',
            question: 'Which translation is correct?',
            options: [
                { text: 'We ask to be priests and to guard your shrine', correct: true },
                { text: 'We demand to be your priests and protectors of the shrine', correct: false, feedback: '"poscimus" means ask/request, not demand. The couple is humble, not demanding.' },
                { text: 'We ask that we are priests and that we watch over your temples', correct: false, feedback: '"delubra" is singular in sense (shrine), and "tueri" is active infinitive (to guard), not passive.' },
                { text: 'Being priests and guarding your shrine is what we ask', correct: false, feedback: 'While the meaning is similar, the construction is accusative + infinitive: "we ask [ourselves] to be..."' }
            ],
            correctFeedback: 'Correct! The twin infinitives "esse" and "tueri" create parallel modest requests: to be priests, to guard the shrine. Nothing excessive.'
        },
        {
            type: 'translation',
            latin: 'et quoniam concordes egimus annos',
            question: 'Which translation is correct?',
            options: [
                { text: 'and since we have spent our years in harmony', correct: true },
                { text: 'and because we have lived agreeable years', correct: false, feedback: '"concordes" describes THEM (in harmony), not the years (agreeable). They lived harmoniously.' },
                { text: 'and since we drove harmonious years', correct: false, feedback: '"egimus annos" is an idiom meaning "spent years/lived through years", not literally "drove".' },
                { text: 'and because we spent the years of our agreement', correct: false, feedback: '"concordes" is an adjective describing how they lived, not a noun "agreement".' }
            ],
            correctFeedback: 'Correct! "concordes" (harmonious/in agreement) — they\'ve lived their whole lives in harmony. This justifies their wish to die together.'
        },
        {
            type: 'translation',
            latin: 'auferat hora duos eadem',
            question: 'Which translation is correct?',
            options: [
                { text: 'may the same hour take away the two of us', correct: true },
                { text: 'the same hour carried away both of us', correct: false, feedback: '"auferat" is present subjunctive (may it take away), expressing a wish, not past tense.' },
                { text: 'let the hour take away the two of us equally', correct: false, feedback: '"eadem" means "the same" (same hour), not "equally". The emphasis is on simultaneity.' },
                { text: 'may an hour take away the same two', correct: false, feedback: '"eadem hora" (the same hour) — they want to die at the SAME moment, not just any hour.' }
            ],
            correctFeedback: 'Correct! "eadem hora" (the same hour) is key — they don\'t just want to die, they want to die at exactly the same moment. Perfect unity.'
        },
        {
            type: 'translation',
            latin: 'nec coniugis umquam busta meae videam',
            question: 'Which translation is correct?',
            options: [
                { text: 'and may I never see the tomb of my wife', correct: true },
                { text: 'nor may I ever see my wife\'s funeral pyre', correct: false, feedback: 'While "busta" can mean pyre, "tomb/grave" better captures the ongoing memorial. Also, "nec" = and not.' },
                { text: 'and I never saw the grave of my spouse', correct: false, feedback: '"videam" is present subjunctive (may I see), expressing a wish, not past "saw".' },
                { text: 'may the tomb of my wife never see me', correct: false, feedback: 'The subject is "I" (implicit), not the tomb. "videam" = may I see, not "may it see me".' }
            ],
            correctFeedback: 'Correct! Philemon can\'t bear the thought of outliving Baucis. "busta" (tomb) is a euphemism — he can\'t speak directly of her death.'
        },
        {
            type: 'translation',
            latin: 'neu sim tumulandus ab illa',
            question: 'Which translation is correct?',
            options: [
                { text: 'nor may I have to be buried by her', correct: true },
                { text: 'and may I not be entombed by her', correct: false, feedback: '"neu" = and not/nor (continuing the negative wish). "tumulandus" is gerundive showing obligation.' },
                { text: 'nor should she bury me', correct: false, feedback: 'The focus is on HIM not having to be buried, not on HER not burying. The gerundive emphasizes his obligation.' },
                { text: 'may I not be buried beside her', correct: false, feedback: '"ab illa" means "by her" (agent), not "beside her". He doesn\'t want her to have to perform the burial.' }
            ],
            correctFeedback: 'Correct! The gerundive "tumulandus" (needing to be buried) shows obligation. He wants to spare her the awful duty of burying him.'
        },
        {
            type: 'translation',
            latin: 'vota fides sequitur',
            question: 'Which translation is correct?',
            options: [
                { text: 'Fulfilment follows the prayers', correct: true },
                { text: 'Faith followed the prayers', correct: false, feedback: '"fides" here means fulfilment/realization, not faith. "sequitur" is present (follows), not past.' },
                { text: 'The prayers follow trust', correct: false, feedback: '"vota" (prayers) is the object of "sequitur". Fides follows THE PRAYERS, not vice versa.' },
                { text: 'Their faith follows their vows', correct: false, feedback: '"vota" means prayers/wishes here, and "fides" is the subject meaning fulfilment.' }
            ],
            correctFeedback: 'Correct! Just three words to announce the gods grant everything. "fides" (fulfilment/realization) actively follows their prayers — they get what they asked.'
        },
        {
            type: 'translation',
            latin: 'templi tutela fuere, donec vita data est',
            question: 'Which translation is correct?',
            options: [
                { text: 'They were guardians of the temple, as long as life was granted to them', correct: true },
                { text: 'The temple\'s guardianship was theirs, until life was given', correct: false, feedback: '"tutela" is predicate nominative — THEY were the guardianship/guardians, not "it was theirs".' },
                { text: 'They protected the temple, as long as life was given to them', correct: false, feedback: '"tutela fuere" means "they were guardians", not "they protected".' },
                { text: 'Guardians of the temple they were, until their life was taken', correct: false, feedback: '"vita data est" = life was GIVEN, not taken. They served until their natural end.' }
            ],
            correctFeedback: 'Correct! Their first wish is fulfilled: they serve as temple guardians for the rest of their lives. "donec vita data est" — as long as they lived.'
        },
        {
            type: 'translation',
            latin: 'annis aevoque soluti',
            question: 'Which translation is correct?',
            options: [
                { text: 'weakened by years and age', correct: true },
                { text: 'freed from years and time', correct: false, feedback: '"soluti" here means loosened/weakened BY years, not freed FROM them. It describes old age.' },
                { text: 'having released years and time', correct: false, feedback: '"soluti" is passive (weakened/released), not active (having released).' },
                { text: 'dissolved in years and ages', correct: false, feedback: '"soluti" with ablative means weakened BY, not dissolved IN. They\'re worn down by age.' }
            ],
            correctFeedback: 'Correct! "soluti" (loosened/weakened) with ablative of cause — they\'re worn out by the passage of years. They\'re very old now.'
        },
        {
            type: 'translation',
            latin: 'frondere Philemona Baucis, Baucida conspexit senior frondere Philemon',
            question: 'Which translation is correct?',
            options: [
                { text: 'Baucis noticed Philemon growing leaves, and aged Philemon saw Baucis growing leaves', correct: true },
                { text: 'Baucis and Philemon saw each other growing leaves together', correct: false, feedback: 'The structure emphasizes reciprocity: each watches the OTHER transform. The parallel is deliberate.' },
                { text: 'Philemon\'s leaves were seen by Baucis, and old Philemon saw Baucis\'s leaves', correct: false, feedback: '"frondere" is infinitive (growing leaves), not noun (leaves). They\'re actively transforming.' },
                { text: 'Baucis noticed that Philemon was leafy, and senior Philemon noticed Baucis leafy', correct: false, feedback: '"frondere" is progressive — "growing leaves", showing the transformation in process.' }
            ],
            correctFeedback: 'Correct! The parallel structure (A sees B, B sees A) emphasizes their reciprocal experience. Each watches their beloved transform.'
        },
        {
            type: 'translation',
            latin: 'mutua, dum licuit, reddebant dicta',
            question: 'Which translation is correct?',
            options: [
                { text: 'they exchanged words with each other, while they could', correct: true },
                { text: 'mutual words were returned, as it was allowed', correct: false, feedback: '"reddebant" is active (they returned/exchanged), not passive. They\'re actively speaking.' },
                { text: 'they were returning mutual speech, while permitted', correct: false, feedback: '"dum licuit" means "while it was possible/they could", not just "while permitted".' },
                { text: 'as long as allowed, they were giving back mutual words', correct: false, feedback: '"dum licuit" is parenthetical — "while they could" — emphasizing the fleeting nature of their speech.' }
            ],
            correctFeedback: 'Correct! "dum licuit" (while they could) is heartbreaking — they\'re talking while they still can, because soon they won\'t be able to speak.'
        },
        {
            type: 'translation',
            latin: '"vale" que "o coniunx" dixere simul',
            question: 'Which translation is correct?',
            options: [
                { text: '"Farewell, o spouse" they said at the same time', correct: true },
                { text: '"Goodbye and oh husband" they said together', correct: false, feedback: '"coniunx" means spouse (husband or wife), not specifically husband. Both can say it.' },
                { text: 'They said "farewell" and "o spouse" simultaneously', correct: false, feedback: 'The quote is one unit — "farewell, o spouse" — not two separate utterances.' },
                { text: 'At the same time they said "be well, oh married one"', correct: false, feedback: 'While "vale" means "be well", "farewell" is the proper translation. "coniunx" = spouse.' }
            ],
            correctFeedback: 'Correct! "simul" (at the same time) — their last human words are spoken together, the same words to each other. Perfect unity to the end.'
        },
        {
            type: 'translation',
            latin: 'simul abdita texit ora frutex',
            question: 'Which translation is correct?',
            options: [
                { text: 'at the same time a shrub covered and hid their faces', correct: true },
                { text: 'simultaneously the bush covered their hidden faces', correct: false, feedback: '"abdita" is part of compound verb with "texit" — "hid and covered", not describing faces as already hidden.' },
                { text: 'at once the shrub covered their secret mouths', correct: false, feedback: '"ora" means faces, not mouths. "abdita texit" = hid and covered (compound action).' },
                { text: 'the shrub simultaneously concealed their covered faces', correct: false, feedback: '"texit" and "abdita" work together — the shrub does both hiding and covering at once.' }
            ],
            correctFeedback: 'Correct! "simul" echoes — they speak together, and together their faces are covered. Even their metamorphosis is simultaneous.'
        },
        {
            type: 'style',
            latin: 'esse sacerdotes... tueri',
            question: 'What do the twin infinitives "esse" and "tueri" reveal about the couple\'s wishes?',
            options: [
                { text: 'Their requests are modest and balanced — a role (priests) and a duty (guardians)', correct: true },
                { text: 'They wanted two separate things', correct: false, feedback: 'The parallel infinitives show a unified wish with two aspects, not separate competing wishes.' },
                { text: 'They couldn\'t decide what they wanted', correct: false, feedback: 'The parallel structure shows clarity, not indecision. They know exactly what they want.' },
                { text: 'The structure is accidental', correct: false, feedback: 'Parallel infinitives are a deliberate rhetorical choice creating balance and emphasis.' }
            ],
            correctFeedback: 'Correct! The parallel infinitives show balanced, modest desires: to serve (as priests) and to protect (the shrine). Nothing greedy.'
        },
        {
            type: 'style',
            latin: 'eadem hora',
            question: 'Why is "eadem" (the same) so important in their wish to die together?',
            options: [
                { text: 'It emphasizes exact simultaneity — not just the same day, but the same moment', correct: true },
                { text: 'It shows they wanted the hour named after them', correct: false, feedback: '"eadem" means "the same" — same hour, not a special or named hour.' },
                { text: 'It indicates they were being unreasonable', correct: false, feedback: 'The wish is touching, not unreasonable. They simply can\'t bear to outlive each other.' },
                { text: 'It\'s just a filler word with no special meaning', correct: false, feedback: '"eadem" is emphatic — the SAME hour, emphasizing their desire for perfect unity in death.' }
            ],
            correctFeedback: 'Correct! "eadem hora" — not just the same day, the same HOUR. They want perfect simultaneity. Neither will outlive the other even briefly.'
        },
        {
            type: 'style',
            latin: 'busta',
            question: 'What does the euphemism "busta" (tomb) reveal about Philemon?',
            options: [
                { text: 'He cannot bring himself to speak directly of his wife\'s death — a sign of his deep love', correct: true },
                { text: 'He was interested in architecture', correct: false, feedback: 'The focus is on avoiding direct mention of death, not on the physical structure.' },
                { text: 'Roman tombs were called "busta"', correct: false, feedback: 'While true, the point is that he uses this word instead of speaking directly of her dying.' },
                { text: 'He wanted a fancy funeral', correct: false, feedback: 'He wants NOT to see her tomb at all — he doesn\'t want to outlive her, fancy or not.' }
            ],
            correctFeedback: 'Correct! "busta" is a delicate way to refer to death. Philemon can\'t say "if she dies" — even grammatically, he avoids it.'
        },
        {
            type: 'style',
            latin: 'tumulandus',
            question: 'What does the gerundive "tumulandus" (needing to be buried) emphasize?',
            options: [
                { text: 'The burden of obligation — he wants to spare Baucis from having to bury him', correct: true },
                { text: 'He wanted a specific type of burial', correct: false, feedback: 'The gerundive expresses obligation/necessity, not preference for burial type.' },
                { text: 'Burial was illegal in their area', correct: false, feedback: 'No legal issue is mentioned. The point is emotional — sparing Baucis grief.' },
                { text: 'He was afraid of being buried alive', correct: false, feedback: 'His fear is Baucis having to perform the burial, not his own burial circumstances.' }
            ],
            correctFeedback: 'Correct! The gerundive shows obligation — "having to be buried". He wants to spare Baucis the terrible duty of burying her husband.'
        },
        {
            type: 'style',
            latin: 'vota fides sequitur',
            question: 'What is the effect of the brevity in "vota fides sequitur"?',
            options: [
                { text: 'Just three words after the long prayer — the contrast shows the gods\' response is effortless and certain', correct: true },
                { text: 'Ovid ran out of things to say', correct: false, feedback: 'The brevity is deliberate contrast with the elaborate prayer. Ovid is a master stylist.' },
                { text: 'The gods didn\'t care much about the wish', correct: false, feedback: 'The gods care enough to grant it fully. The brevity shows certainty, not indifference.' },
                { text: 'It creates suspense about what will happen', correct: false, feedback: '"fides sequitur" resolves suspense — the wishes ARE fulfilled. The brevity signals closure.' }
            ],
            correctFeedback: 'Correct! After Philemon\'s emotional 4-line prayer, three words announce fulfilment. The contrast is striking — divine response is simple and sure.'
        },
        {
            type: 'style',
            latin: 'Philemona Baucis / Baucida... Philemon',
            question: 'What is the effect of the parallel structure in the mutual observation of transformation?',
            options: [
                { text: 'The mirrored structure (AB/BA) shows their experience is reciprocal and simultaneous', correct: true },
                { text: 'It shows they were confused about who was transforming', correct: false, feedback: 'The parallel is clear — each sees the OTHER transforming. No confusion.' },
                { text: 'It is repetitive and could have been shortened', correct: false, feedback: 'The repetition is purposeful — emphasizing that BOTH watch BOTH transform.' },
                { text: 'It indicates they transformed at different times', correct: false, feedback: 'The parallel suggests simultaneity — each sees the other at the same time.' }
            ],
            correctFeedback: 'Correct! Baucis sees Philemon, Philemon sees Baucis — the chiastic structure (AB BA) emphasizes perfect reciprocity in their final moments.'
        },
        {
            type: 'style',
            latin: 'frondere',
            question: 'What is the effect of the historic infinitive "frondere" (growing leaves)?',
            options: [
                { text: 'It creates rapid, vivid narration — the transformation is happening too fast for normal verb forms', correct: true },
                { text: 'It is a grammatical error', correct: false, feedback: 'The historic infinitive is a recognized Latin construction for vivid, rapid action.' },
                { text: 'It shows the leaves were already there', correct: false, feedback: '"frondere" is progressive — actively growing leaves, not already leafy.' },
                { text: 'It indicates uncertainty about what happened', correct: false, feedback: 'Historic infinitive creates vividness and certainty, not uncertainty.' }
            ],
            correctFeedback: 'Correct! The historic infinitive "frondere" appears twice — things are happening so fast that normal tense seems inadequate.'
        },
        {
            type: 'style',
            latin: 'dum licuit',
            question: 'Why is "dum licuit" (while they could) so poignant?',
            options: [
                { text: 'It reminds us their ability to speak is about to end forever — final words while they still can', correct: true },
                { text: 'It shows they had permission to speak', correct: false, feedback: '"licuit" here means "it was possible", not "it was permitted". They\'re losing capacity.' },
                { text: 'It indicates they were interrupted', correct: false, feedback: 'No interruption — they speak until transformation makes speech impossible.' },
                { text: 'It is just a temporal marker with no emotional weight', correct: false, feedback: '"dum licuit" is deeply emotional — "while they still could" speak as humans.' }
            ],
            correctFeedback: 'Correct! "dum licuit" — while it was possible, while they could. In moments they won\'t be able to speak. This parenthetical is heartbreaking.'
        },
        {
            type: 'style',
            latin: 'simul... simul',
            question: 'What is the effect of repeating "simul" (at the same time)?',
            options: [
                { text: 'It hammers home their perfect synchronicity — they speak together, transform together', correct: true },
                { text: 'It shows the narrator was confused about timing', correct: false, feedback: 'The repetition is emphatic clarity — things happen at EXACTLY the same time.' },
                { text: 'It is redundant repetition', correct: false, feedback: 'The repetition is purposeful, emphasizing that BOTH "at the same time" clauses are true.' },
                { text: 'It indicates they tried twice', correct: false, feedback: '"simul... simul" emphasizes simultaneity, not repetition of action.' }
            ],
            correctFeedback: 'Correct! "simul... simul" — they say farewell at the same time, AND are covered at the same time. Perfect unity fulfilled.'
        },
        {
            type: 'style',
            latin: 'coniunx',
            question: 'Why is the gender-neutral "coniunx" perfect for their final word?',
            options: [
                { text: 'Both can say exactly the same word to each other — one word captures both farewells', correct: true },
                { text: 'Romans didn\'t have different words for husband and wife', correct: false, feedback: 'Latin has "maritus" (husband) and "uxor" (wife). "coniunx" is deliberately chosen as inclusive.' },
                { text: 'It shows they forgot each other\'s names', correct: false, feedback: 'Using "spouse" is intimate and appropriate — they\'re defining their relationship, not naming.' },
                { text: 'It indicates they were legally married', correct: false, feedback: 'While true, the point is the word works for BOTH of them saying it to each other.' }
            ],
            correctFeedback: 'Correct! "coniunx" (spouse) works for either saying it — Ovid doesn\'t need separate speeches. One word, spoken by both, to both. Perfect.'
        },
        {
            type: 'comprehension',
            latin: 'esse sacerdotes delubraque vestra tueri',
            question: 'What does their first wish reveal about Baucis and Philemon?',
            options: [
                { text: 'They want to serve, not be served — their modesty continues even when offered anything', correct: true },
                { text: 'They wanted power and authority', correct: false, feedback: 'Being temple guardians is humble service, not power. They\'re priests, not rulers.' },
                { text: 'They were afraid of the gods', correct: false, feedback: 'They\'re not afraid — they want to be NEAR the gods, serving their temple.' },
                { text: 'They wanted to live in the temple', correct: false, feedback: 'The wish is about SERVICE (priests/guardians), not accommodation.' }
            ],
            correctFeedback: 'Correct! Given the chance to ask for anything, they ask to serve. Their humility and pietas are unchanged by divine favor.'
        },
        {
            type: 'comprehension',
            latin: 'auferat hora duos eadem',
            question: 'What does their wish to die at the same moment reveal?',
            options: [
                { text: 'Neither can bear the thought of life without the other — their bond is total', correct: true },
                { text: 'They were afraid of death', correct: false, feedback: 'They accept death — they just want it TOGETHER. Fear of death alone, not death itself.' },
                { text: 'They thought dying together would be painless', correct: false, feedback: 'Pain isn\'t mentioned. Their concern is not outliving each other.' },
                { text: 'They wanted to avoid funeral expenses', correct: false, feedback: 'The wish is emotional (not being parted), not practical (saving money).' }
            ],
            correctFeedback: 'Correct! They can\'t imagine existing without each other. Their wish isn\'t about death — it\'s about not being separated even briefly.'
        },
        {
            type: 'comprehension',
            latin: 'vota fides sequitur',
            question: 'What does the immediate granting of their wishes demonstrate?',
            options: [
                { text: 'The gods honor those who honor them — true pietas is always rewarded', correct: true },
                { text: 'The gods were in a good mood that day', correct: false, feedback: 'Divine reward isn\'t arbitrary — it responds to the couple\'s demonstrated virtue.' },
                { text: 'The couple got lucky', correct: false, feedback: 'This is cause and effect: pietas → divine favor. Not luck.' },
                { text: 'The gods wanted to get rid of them quickly', correct: false, feedback: 'The gods honor them generously — making them temple guardians, granting their wishes.' }
            ],
            correctFeedback: 'Correct! The story\'s moral: genuine pietas earns divine favor. The couple showed hospitality without expecting reward, and are rewarded fully.'
        },
        {
            type: 'comprehension',
            latin: '"vale, o coniunx" dixere simul',
            question: 'Why is their final exchange so powerful?',
            options: [
                { text: 'They say the same words at the same time — unity in their last human moment', correct: true },
                { text: 'They were being polite to each other', correct: false, feedback: 'It\'s not politeness — it\'s the profound expression of lifelong partnership at its end.' },
                { text: 'They were following a ritual', correct: false, feedback: 'No ritual is prescribed. These are spontaneous final words of love.' },
                { text: 'They wanted to say goodbye properly', correct: false, feedback: 'The power is in the simultaneity and identity of their words — perfect unity.' }
            ],
            correctFeedback: 'Correct! Same words, same moment — "vale, o coniunx" spoken simultaneously. Their final human act is speaking as one.'
        },
        {
            type: 'comprehension',
            latin: 'simul abdita texit ora frutex',
            question: 'What is significant about the ending image of the shrub covering their faces?',
            options: [
                { text: 'Their transformation into trees is completed together, fulfilling their wish never to be parted', correct: true },
                { text: 'The shrub was trying to hide them', correct: false, feedback: 'The shrub IS them — they\'re becoming trees. It\'s transformation, not concealment by something else.' },
                { text: 'They were embarrassed', correct: false, feedback: 'There\'s no embarrassment — this is metamorphosis, their wish fulfilled.' },
                { text: 'It shows the story is over', correct: false, feedback: 'While it does end the story, the significance is the fulfilled wish — together to the end.' }
            ],
            correctFeedback: 'Correct! Their wish "auferat hora duos eadem" is fulfilled — the same moment covers them both. They\'re never parted, forever intertwined as trees.'
        }
    ]
};
