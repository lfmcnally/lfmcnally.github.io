// Baucis and Philemon Section 5: Lines 50-63
// The house is turned into a temple

const baucisPhilemonSection5 = {
    section: 5,
    title: 'The house is turned into a temple',
    lines: '50-63',
    latinText: 'parent ambo baculisque levati nituntur longo vestigia ponere clivo. tantum aberant summo, quantum semel ire sagitta missa potest; flexere oculos et mersa palude cetera prospiciunt, tantum sua tecta manere. dumque ea mirantur, dum deflent fata suorum, illa vetus dominis etiam casa parva duobus vertitur in templum; furcas subiere columnae, stramina flavescunt aurataque tecta videntur caelataeque fores adopertaque marmore tellus. talia tum placido Saturnius edidit ore: "dicite, iuste senex et femina coniuge iusto digna, quid optetis." cum Baucide pauca locutus iudicium superis aperit commune Philemon:',

    questions: [
        {
            type: 'translation',
            latin: 'parent ambo baculisque levati nituntur longo vestigia ponere clivo',
            question: 'Which translation is correct?',
            options: [
                { text: 'Both obey, and supported by their staffs they strive to place their footsteps on the long slope', correct: true },
                { text: 'Both parents, lifted by walking sticks, struggle to step on the long slope', correct: false, feedback: '"parent" is from "pareo" (obey), not "parentes" (parents). "ambo" is the subject meaning "both".' },
                { text: 'They both obey and, raised by their staffs, try to plant steps on the tall cliff', correct: false, feedback: '"clivo" means slope/hill, not cliff. "longo" describes the slope as long/extended.' },
                { text: 'Both follow and, helped by their staves, strive to walk on the long hillside', correct: false, feedback: '"ponere vestigia" specifically means "to place footsteps" — emphasizing the effort of each step.' }
            ],
            correctFeedback: 'Correct! "ambo" (both) emphasizes their unity. "levati baculis" shows they need support — they\'re elderly and the climb is difficult.'
        },
        {
            type: 'translation',
            latin: 'tantum aberant summo, quantum semel ire sagitta missa potest',
            question: 'Which translation is correct?',
            options: [
                { text: 'They were as far from the top as an arrow, once discharged, can travel', correct: true },
                { text: 'They were so far from the summit that a single arrow shot could reach it', correct: false, feedback: '"tantum... quantum" is a correlative — "as far... as". "semel missa" = once discharged, a single shot.' },
                { text: 'They were far from the top, as much as an arrow can be shot once', correct: false, feedback: 'The comparison is about distance: they were as far from the top as an arrow can fly when shot once.' },
                { text: 'They were only as far away as a once-fired arrow can go', correct: false, feedback: '"summo" (from the top) is important — the distance is to the summit, not just any distance.' }
            ],
            correctFeedback: 'Correct! This epic simile — measuring distance by arrow flight — elevates humble elderly peasants to heroic status. They\'re almost at the top.'
        },
        {
            type: 'translation',
            latin: 'flexere oculos et mersa palude cetera prospiciunt',
            question: 'Which translation is correct?',
            options: [
                { text: 'They turned their eyes and see the rest submerged by a marsh', correct: true },
                { text: 'They bent their eyes and look ahead at the marsh-sunk remains', correct: false, feedback: '"flexere" means turned (their gaze), not literally bent their eyes.' },
                { text: 'They averted their eyes and saw everything else sinking in a swamp', correct: false, feedback: '"prospiciunt" is present tense (they see), not past "saw". "mersa" is perfect passive — already submerged.' },
                { text: 'Having turned their eyes, they see ahead that a marsh submerged everything', correct: false, feedback: '"mersa palude" is ablative absolute — "with the rest submerged by a marsh", not "a marsh submerged everything".' }
            ],
            correctFeedback: 'Correct! "flexere" (syncopated perfect) with "prospiciunt" (historic present) — they look back and see their neighbourhood destroyed.'
        },
        {
            type: 'translation',
            latin: 'tantum sua tecta manere',
            question: 'Which translation is correct?',
            options: [
                { text: 'only their own house remains', correct: true },
                { text: 'so much their roof remained', correct: false, feedback: '"tantum" here means "only", not "so much". "sua tecta" = their own house.' },
                { text: 'only their roofs were remaining', correct: false, feedback: '"tecta" is singular in meaning here (house), not plural "roofs". "manere" is infinitive in indirect statement.' },
                { text: 'their house alone remained so', correct: false, feedback: '"tantum" modifies the verb — "only remains", not "remained so".' }
            ],
            correctFeedback: 'Correct! The contrast is stark: everything else is flooded, but "tantum sua tecta" — ONLY their house survives. Divine favor is clear.'
        },
        {
            type: 'translation',
            latin: 'dumque ea mirantur, dum deflent fata suorum',
            question: 'Which translation is correct?',
            options: [
                { text: 'And while they marvel at these things, while they weep for the fates of their friends', correct: true },
                { text: 'And while they wondered at them, while they mourned their own fates', correct: false, feedback: '"fata suorum" means fates of their own (people/friends), not "their own fates". The couple survives.' },
                { text: 'And when they admired these things, when they lamented the fates of their family', correct: false, feedback: '"dum" means "while" (ongoing), not "when" (completed). The simultaneous action is key.' },
                { text: 'While they were marvelling at it, and while weeping about the fate of theirs', correct: false, feedback: '"mirantur" and "deflent" are present tense for immediacy. The translation should reflect present action.' }
            ],
            correctFeedback: 'Correct! The anaphora "dum... dum" shows simultaneous emotions: they marvel at their salvation AND weep for their neighbours. Complex feelings.'
        },
        {
            type: 'translation',
            latin: 'illa vetus dominis etiam casa parva duobus vertitur in templum',
            question: 'Which translation is correct?',
            options: [
                { text: 'That old cottage, small even for its two owners, is turned into a temple', correct: true },
                { text: 'That old house, too small for its two masters, turned into a temple', correct: false, feedback: '"vertitur" is present passive (is turned), not past. The transformation happens now.' },
                { text: 'The old cottage, small even for two masters, becomes a temple', correct: false, feedback: '"illa... casa" (that cottage) — the demonstrative emphasizes THIS specific cottage, their home.' },
                { text: 'Their ancient, small cottage for both owners was converted into a temple', correct: false, feedback: '"vertitur" is present tense for dramatic effect. Also, "dominis duobus" is dative — "for two owners".' }
            ],
            correctFeedback: 'Correct! The hyperbaton delays "vertitur" (is turned) — we hear all about the humble cottage before the miraculous transformation.'
        },
        {
            type: 'translation',
            latin: 'furcas subiere columnae, stramina flavescunt',
            question: 'Which translation is correct?',
            options: [
                { text: 'Columns replaced the forked props, the thatch turns golden', correct: true },
                { text: 'Forks went under columns, the straw becomes yellow', correct: false, feedback: '"subiere" means "went under" in sense of "replaced" — columns took the place of the crude supports.' },
                { text: 'Columns came up under the forks, and straw turned yellow', correct: false, feedback: '"furcas subiere" means columns replaced the forked poles, not went underneath them.' },
                { text: 'The forked poles were replaced by columns, the thatch was turning gold', correct: false, feedback: '"flavescunt" is present (turns golden), maintaining the immediacy of the transformation.' }
            ],
            correctFeedback: 'Correct! The historic present "subiere" and "flavescunt" make us watch the transformation happen: crude poles become columns, thatch becomes gold.'
        },
        {
            type: 'translation',
            latin: 'talia tum placido Saturnius edidit ore',
            question: 'Which translation is correct?',
            options: [
                { text: 'Then the son of Saturn spoke the following words with a calm expression', correct: true },
                { text: 'Then Saturn spoke such things with a peaceful mouth', correct: false, feedback: '"Saturnius" is a patronymic meaning "son of Saturn" = Jupiter, not Saturn himself.' },
                { text: 'Then the Saturnian uttered such things from his peaceful face', correct: false, feedback: '"placido ore" is ablative of manner — "with a calm expression", describing how he spoke.' },
                { text: 'Such words then Jupiter calmly uttered from his mouth', correct: false, feedback: '"talia... edidit" = "spoke the following" — "talia" points forward to what comes next.' }
            ],
            correctFeedback: 'Correct! "Saturnius" (son of Saturn = Jupiter) speaks "placido ore" — with calm expression. Having just destroyed a village, he\'s utterly composed.'
        },
        {
            type: 'translation',
            latin: 'dicite, iuste senex et femina coniuge iusto digna, quid optetis',
            question: 'Which translation is correct?',
            options: [
                { text: 'Tell me, just old man and woman worthy of a just husband, what you desire', correct: true },
                { text: 'Speak, righteous elder and wife worthy of a righteous spouse, what you wish for', correct: false, feedback: '"femina" is woman (not specifically wife), and "coniuge" can mean husband (male spouse).' },
                { text: 'Say, honest old man and woman deserving of an honest marriage, what you pray for', correct: false, feedback: '"coniuge iusto" is "a just spouse/husband", not "an honest marriage".' },
                { text: 'Tell, fair old man and woman worthy of her fair husband, what you might wish', correct: false, feedback: '"optetis" is subjunctive in indirect question — "what you desire", not "what you might wish".' }
            ],
            correctFeedback: 'Correct! The polyptoton "iuste... iusto" (just... just) emphasizes that justice is their defining quality. They deserve each other.'
        },
        {
            type: 'translation',
            latin: 'cum Baucide pauca locutus iudicium superis aperit commune Philemon',
            question: 'Which translation is correct?',
            options: [
                { text: 'Having spoken a few words with Baucis, Philemon reveals their shared decision to the gods', correct: true },
                { text: 'When speaking little with Baucis, Philemon opens their common judgment to those above', correct: false, feedback: '"pauca locutus" is perfect participle — "having spoken a few words" (completed action before main verb).' },
                { text: 'Philemon, having discussed briefly with Baucis, disclosed their joint verdict to the gods', correct: false, feedback: '"iudicium" here means decision/judgment, not verdict in a legal sense.' },
                { text: 'Speaking a few words with Baucis, Philemon reveals to the gods their joint decision', correct: false, feedback: '"locutus" is perfect participle (having spoken), not present (speaking). The discussion is complete.' }
            ],
            correctFeedback: 'Correct! "commune" (shared/joint) emphasizes their unity — they decide TOGETHER what to ask for, consulting before responding.'
        },
        {
            type: 'style',
            latin: 'ambo',
            question: 'What does "ambo" (both) at the start of this passage emphasize?',
            options: [
                { text: 'Their unity as a couple — they act together, inseparable', correct: true },
                { text: 'That there were exactly two people present', correct: false, feedback: '"ambo" isn\'t just counting — it emphasizes togetherness, unity, acting as one.' },
                { text: 'That they were twins', correct: false, feedback: '"ambo" means "both" but doesn\'t imply they\'re twins — just that they act together.' },
                { text: 'It\'s just a normal word with no special emphasis', correct: false, feedback: 'Placing "ambo" prominently establishes the unity theme that runs through the passage.' }
            ],
            correctFeedback: 'Correct! "ambo" sets the tone for the whole passage — Baucis and Philemon are a unit. They obey together, climb together, make decisions together.'
        },
        {
            type: 'style',
            latin: 'tantum... quantum... sagitta',
            question: 'What is the effect of the arrow simile?',
            options: [
                { text: 'It elevates the narrative by using epic/heroic imagery for humble peasants', correct: true },
                { text: 'It shows they were being shot at by arrows', correct: false, feedback: 'The arrow is a comparison for distance, not a literal threat. It\'s a simile measuring how far they\'ve climbed.' },
                { text: 'It indicates they were moving as fast as an arrow', correct: false, feedback: 'The simile is about DISTANCE remaining, not their speed. They\'re elderly and slow.' },
                { text: 'It creates confusion about the setting', correct: false, feedback: 'The simile precisely indicates distance — they were as far from the top as one arrow shot.' }
            ],
            correctFeedback: 'Correct! Measuring distance by arrow flight is Homeric/Virgilian epic style. Ovid gives his elderly peasants the heroic treatment.'
        },
        {
            type: 'style',
            latin: 'sagitta / missa',
            question: 'What is the effect of the enjambment between "sagitta" and "missa"?',
            options: [
                { text: 'The sentence flows across the line break like the arrow flying through space', correct: true },
                { text: 'It is accidental and has no significance', correct: false, feedback: 'Enjambment in Latin poetry is typically deliberate — meaning carries across the break like the arrow travels.' },
                { text: 'It shows the arrow was broken', correct: false, feedback: 'The enjambment is formal/structural, not narrative. The arrow isn\'t broken in the story.' },
                { text: 'It creates a pause for dramatic effect', correct: false, feedback: 'Enjambment creates flow, not pause. The meaning runs on from one line to the next.' }
            ],
            correctFeedback: 'Correct! The enjambment enacts what it describes — meaning travels across the line break just as the arrow travels through space.'
        },
        {
            type: 'style',
            latin: 'dum... dum',
            question: 'What is the effect of the anaphora "dum... dum" (while... while)?',
            options: [
                { text: 'It shows two emotions happening simultaneously — wonder and grief together', correct: true },
                { text: 'It indicates the actions happened one after the other', correct: false, feedback: 'Anaphora with "dum" emphasizes simultaneity — both happen at the same time, not sequentially.' },
                { text: 'It is repetitive and should have been edited out', correct: false, feedback: 'Anaphora is a deliberate rhetorical device creating parallel structure and emphasis.' },
                { text: 'It shows they were distracted and unfocused', correct: false, feedback: 'They\'re fully engaged with complex emotions — marvel at miracle, grief for neighbours.' }
            ],
            correctFeedback: 'Correct! The anaphora "dum mirantur... dum deflent" creates parallelism showing complex simultaneous emotions: wonder at salvation, grief for others.'
        },
        {
            type: 'style',
            latin: 'illa vetus... casa parva... vertitur',
            question: 'What is the effect of delaying the verb "vertitur" (is turned)?',
            options: [
                { text: 'Hyperbaton creates suspense — we hear about the humble cottage before learning of its miraculous transformation', correct: true },
                { text: 'It makes the sentence grammatically incorrect', correct: false, feedback: 'This is standard Latin hyperbaton — separating elements for emphasis. It\'s grammatically fine.' },
                { text: 'It shows the transformation was slow', correct: false, feedback: 'The delay is rhetorical (building suspense), not mimetic (imitating slow transformation).' },
                { text: 'It was done to fit the meter', correct: false, feedback: 'While meter matters, hyperbaton also has rhetorical effect — emphasizing the humble origins.' }
            ],
            correctFeedback: 'Correct! We hear "that old, small cottage for two owners" — building up the humble reality — then BAM: "is turned into a temple." Maximum contrast.'
        },
        {
            type: 'style',
            latin: 'vertitur... subiere... flavescunt... videntur',
            question: 'What is the effect of the historic present verbs during the transformation?',
            options: [
                { text: 'They make us witness the metamorphosis in real time — each change happens before our eyes', correct: true },
                { text: 'They show the transformation is still happening today', correct: false, feedback: 'Historic present makes PAST events feel present for narrative effect, not because they continue now.' },
                { text: 'They indicate uncertainty about what happened', correct: false, feedback: 'The present tense creates vividness and certainty, not uncertainty.' },
                { text: 'They are grammatical errors that should be past tense', correct: false, feedback: 'Historic present is a deliberate, common Latin technique for vivid narration.' }
            ],
            correctFeedback: 'Correct! The cluster of present tenses — is turned, replace, turn golden, are seen — makes us watch the miracle unfold in real time.'
        },
        {
            type: 'style',
            latin: '-que... -que... -que',
            question: 'What is the effect of the polysyndeton (repeated -que) during the transformation description?',
            options: [
                { text: 'It creates a sense of overwhelming abundance — too many wonders to process', correct: true },
                { text: 'It shows the couple was counting the changes', correct: false, feedback: 'Polysyndeton is about rhetorical effect (abundance), not literal counting.' },
                { text: 'It is repetitive and clumsy writing', correct: false, feedback: 'Polysyndeton is a deliberate rhetorical device used by skilled writers for specific effects.' },
                { text: 'It indicates the changes happened slowly', correct: false, feedback: 'The piling up of "and... and... and" suggests rapid accumulation, not slowness.' }
            ],
            correctFeedback: 'Correct! Golden roof AND engraved doors AND marble floor — the repeated "and" makes the miracles feel overwhelming and breathless.'
        },
        {
            type: 'style',
            latin: 'placido ore',
            question: 'What does "placido ore" (with calm expression) reveal about Jupiter?',
            options: [
                { text: 'His divine composure — having just destroyed a village, he\'s utterly untroubled', correct: true },
                { text: 'He was happy about what happened', correct: false, feedback: '"placido" means calm/serene, not happy. It emphasizes composure, not emotion.' },
                { text: 'He was tired from the transformation', correct: false, feedback: 'Gods don\'t get tired. The calm expression shows divine equanimity, not fatigue.' },
                { text: 'He was pretending to be calm', correct: false, feedback: 'There\'s no pretense — Jupiter IS calm. What\'s devastating for mortals is nothing to a god.' }
            ],
            correctFeedback: 'Correct! Jupiter has just wiped out a community. His "calm expression" shows the vast gulf between divine and mortal perspective — effortless for him.'
        },
        {
            type: 'style',
            latin: 'iuste... iusto',
            question: 'What is the effect of the polyptoton "iuste senex... coniuge iusto"?',
            options: [
                { text: 'Repeating "just" in different forms emphasizes that justice is their defining quality', correct: true },
                { text: 'It shows Jupiter was stuttering', correct: false, feedback: 'Polyptoton is deliberate repetition for emphasis, not accidental repetition like stuttering.' },
                { text: 'It creates confusion about who is just', correct: false, feedback: 'Both are just — he\'s a just old man, she deserves a just husband. The repetition links them.' },
                { text: 'It is redundant and unnecessary', correct: false, feedback: 'The repetition is purposeful — hammering home that justice/righteousness defines this couple.' }
            ],
            correctFeedback: 'Correct! "iuste... iusto" — just old man, just husband — justice echoes through the description. This is WHY they were saved.'
        },
        {
            type: 'style',
            latin: 'commune',
            question: 'What does "iudicium commune" (shared decision) emphasize about the couple?',
            options: [
                { text: 'Even facing gods, they make decisions together — their unity extends to their deepest wishes', correct: true },
                { text: 'They couldn\'t agree and compromised', correct: false, feedback: '"commune" suggests harmony, not compromise. They share ONE decision, made together.' },
                { text: 'They voted on what to ask for', correct: false, feedback: 'There\'s no voting — they consult ("pauca locutus cum Baucide") and agree on a shared wish.' },
                { text: 'They wanted the same thing by coincidence', correct: false, feedback: 'It\'s not coincidence — they deliberately discuss and reach a joint decision.' }
            ],
            correctFeedback: 'Correct! "commune" bookends with "ambo" — the passage opens with "both" acting together and closes with their "joint" decision. Unity throughout.'
        },
        {
            type: 'comprehension',
            latin: 'tantum sua tecta manere',
            question: 'What does the survival of only their house demonstrate?',
            options: [
                { text: 'Divine reward for their pietas — they alone showed proper hospitality', correct: true },
                { text: 'Their house was on higher ground', correct: false, feedback: 'The survival is miraculous, not geographical. The marsh/flood is divine punishment.' },
                { text: 'The gods forgot to destroy it', correct: false, feedback: 'The gods deliberately spare it — "vobis immunibus huius esse mali dabitur" (you will be exempt).' },
                { text: 'The transformation into a temple protected it', correct: false, feedback: 'The house survives BEFORE the transformation. The transformation comes after they reach the mountain.' }
            ],
            correctFeedback: 'Correct! Amidst total destruction, only their house stands — visual proof that pietas (proper religious duty) earns divine favor.'
        },
        {
            type: 'comprehension',
            latin: 'deflent fata suorum',
            question: 'Why does Ovid emphasize that they "weep for the fates of their friends"?',
            options: [
                { text: 'It shows their compassion extends even to neighbours who rejected the gods', correct: true },
                { text: 'They were crying for themselves', correct: false, feedback: '"suorum" (their own people/friends) — they weep for OTHERS, not themselves. They\'re saved.' },
                { text: 'They were angry at the destruction', correct: false, feedback: '"deflent" means weep/mourn, not express anger. They grieve for their community.' },
                { text: 'They wanted the neighbours punished more', correct: false, feedback: 'They MOURN (deflent) — they\'re sad about the destruction, not vengeful.' }
            ],
            correctFeedback: 'Correct! Even knowing their neighbours were impious (rejected gods), Baucis and Philemon weep for them. Their compassion is remarkable.'
        },
        {
            type: 'comprehension',
            latin: 'cum Baucide pauca locutus',
            question: 'What does Philemon\'s consultation with Baucis reveal?',
            options: [
                { text: 'They make decisions together — their partnership extends even to their greatest wish', correct: true },
                { text: 'Philemon couldn\'t decide without help', correct: false, feedback: 'It\'s not about inability — it\'s about partnership. They CHOOSE to decide together.' },
                { text: 'Baucis was the real decision-maker', correct: false, feedback: 'Both contribute — "pauca locutus" shows brief consultation, then Philemon speaks for both.' },
                { text: 'They disagreed about what to ask', correct: false, feedback: '"iudicium commune" (joint decision) shows they agreed. The consultation produced unity.' }
            ],
            correctFeedback: 'Correct! Given the chance to ask for anything, they consult. Their wish will be joint because their life is joint — they can\'t imagine acting alone.'
        },
        {
            type: 'comprehension',
            latin: 'vertitur in templum',
            question: 'Why is the cottage transformed into a temple?',
            options: [
                { text: 'It honors the place where gods were properly received — hospitality made it sacred', correct: true },
                { text: 'The gods needed a place to live', correct: false, feedback: 'Gods live on Olympus, not in temples. The temple honors the sacred hospitality shown there.' },
                { text: 'It was payment for the couple\'s services', correct: false, feedback: 'It\'s not payment — it\'s transformation of a place made sacred by pietas.' },
                { text: 'The gods wanted to show off their power', correct: false, feedback: 'The transformation rewards the couple\'s virtue, not display divine power for its own sake.' }
            ],
            correctFeedback: 'Correct! This humble cottage becomes sacred because of what happened there — true hospitality. The transformation honors their pietas.'
        }
    ]
};
