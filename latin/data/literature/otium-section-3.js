// Otium Section 3: Poem 13, Lines 1-14
// Dinner Invitation to Fabullus

var otiumSection3 = {
    section: 3,
    title: 'Dinner Invitation to Fabullus',
    lines: '13.1-14',
    latinText: 'cenabis bene, mi Fabulle, apud me paucis, si tibi di favent, diebus, si tecum attuleris bonam atque magnam cenam, non sine candida puella et vino et sale et omnibus cachinnis. haec si, inquam, attuleris, venuste noster, cenabis bene; nam tui Catulli plenus sacculus est aranearum. sed contra accipies meros amores, seu quid suavius elegantiusve est: nam unguentum dabo, quod meae puellae donarunt Veneres Cupidinesque, quod tu cum olfacies, deos rogabis, totum ut te faciant, Fabulle, nasum.',

    questions: [
        {
            type: 'translation',
            latin: 'cenabis bene, mi Fabulle, apud me',
            question: 'Which translation is correct?',
            options: [
                { text: 'You will dine well, my dear Fabullus, at my house', correct: true },
                { text: 'Dine well, my Fabullus, with me', correct: false, feedback: '"cenabis" is future indicative ("you will dine"), not imperative ("dine"). The promise frames the whole poem.' },
                { text: 'You were dining well, my Fabullus, at my place', correct: false, feedback: '"cenabis" is future tense ("you will dine"), not imperfect ("you were dining").' },
                { text: 'You will eat well, dear Fabullus, before me', correct: false, feedback: '"apud me" means "at my house/with me", not "before me". Location, not sequence.' }
            ],
            correctFeedback: 'Correct! The poem opens with a generous-sounding promise. "mi Fabulle" (my dear Fabullus) is warmly affectionate. The joke will unfold as we learn the conditions.'
        },
        {
            type: 'translation',
            latin: 'paucis, si tibi di favent, diebus',
            question: 'Which translation is correct?',
            options: [
                { text: 'in a few days, if the gods are favourable to you', correct: true },
                { text: 'in few days, if the gods love you', correct: false, feedback: '"favent" (from faveo) means "are favourable/favour", not "love". Close but slightly different in tone.' },
                { text: 'for a few days, if you favour the gods', correct: false, feedback: '"tibi" is dative — the gods favour YOU, not you favouring them. "paucis diebus" is time when, not duration.' },
                { text: 'with few days, if the gods are being favoured', correct: false, feedback: '"favent" is active ("favour"), not passive ("are favoured"). The gods do the favouring.' }
            ],
            correctFeedback: 'Correct! "si tibi di favent" adds a pious touch — "god willing". "paucis diebus" is ablative of time within which — "in a few days".'
        },
        {
            type: 'translation',
            latin: 'si tecum attuleris bonam atque magnam cenam',
            question: 'Which translation is correct?',
            options: [
                { text: 'if you bring with you a good and substantial dinner', correct: true },
                { text: 'if you carry a good and large dinner to yourself', correct: false, feedback: '"tecum" means "with you" (you bring it along), not "to yourself". "attuleris" means "bring" to the host\'s location.' },
                { text: 'if you will bring a good and great dinner with you', correct: false, feedback: '"attuleris" is future perfect, better translated as simple "bring" in English conditions, not "will bring".' },
                { text: 'if you had brought with you a fine and big meal', correct: false, feedback: '"attuleris" is future perfect (referring to future action), not pluperfect (past action).' }
            ],
            correctFeedback: 'Correct! Here\'s the twist — Fabullus must bring the dinner! "bonam atque magnam" (good AND substantial) emphasises quality and quantity. The host provides nothing.'
        },
        {
            type: 'translation',
            latin: 'non sine candida puella',
            question: 'Which translation is correct?',
            options: [
                { text: 'not without a beautiful girl', correct: true },
                { text: 'without a white girl', correct: false, feedback: '"candida" here means "beautiful/fair/radiant", not literally "white". It\'s a poetic term for beauty.' },
                { text: 'not without an innocent girl', correct: false, feedback: '"candidus" can mean "pure" metaphorically, but here it refers to physical beauty/radiance.' },
                { text: 'and without a shining girl', correct: false, feedback: '"non sine" is litotes meaning "with" (not without = with). Don\'t translate "non" as "and".' }
            ],
            correctFeedback: 'Correct! "non sine" is litotes (understatement) — "not without" means "definitely with". "candida" suggests beauty, radiance, fairness. Fabullus must bring a pretty companion.'
        },
        {
            type: 'translation',
            latin: 'et vino et sale et omnibus cachinnis',
            question: 'Which translation is correct?',
            options: [
                { text: 'and wine and wit and all kinds of laughter', correct: true },
                { text: 'and wine and salt and all laughters', correct: false, feedback: '"sale" here means "wit" (metaphorical salt), not literal salt. "cachinnis" is loud, hearty laughter.' },
                { text: 'both wine and seasoning and every laugh', correct: false, feedback: 'The multiple "et"s (polysyndeton) should be translated as "and... and... and..." to capture the effect.' },
                { text: 'and with wine and with salt and with all laughter', correct: false, feedback: 'While ablative, these continue the list of what Fabullus must bring. "sale" means wit.' }
            ],
            correctFeedback: 'Correct! "sal" (salt) metaphorically means "wit" in Latin — like our "salty" meaning sharp or clever. The list piles up everything needed for a good party.'
        },
        {
            type: 'translation',
            latin: 'haec si, inquam, attuleris, venuste noster',
            question: 'Which translation is correct?',
            options: [
                { text: 'if, I say, you bring these things, my charming friend', correct: true },
                { text: 'if I say you brought these things, our attractive one', correct: false, feedback: '"inquam" is parenthetical "I say" — it doesn\'t introduce indirect speech. "attuleris" is future perfect, not past.' },
                { text: 'these things if, as I say, you will bring, charming ours', correct: false, feedback: '"venuste noster" is vocative — addressing Fabullus as "my charming friend", not "charming ours".' },
                { text: 'if thus you bring these, I say, beautifully our own', correct: false, feedback: '"venuste" is vocative (a form of address), not an adverb "beautifully". It addresses Fabullus.' }
            ],
            correctFeedback: 'Correct! "inquam" (I say) adds conversational emphasis. "venuste noster" (my charming one) is an affectionate vocative — Catullus\'s warmth softens the outrageous demands.'
        },
        {
            type: 'translation',
            latin: 'nam tui Catulli plenus sacculus est aranearum',
            question: 'Which translation is correct?',
            options: [
                { text: 'for your Catullus\'s money-bag is full of cobwebs', correct: true },
                { text: 'for your Catullus\'s little bag is full of spiders', correct: false, feedback: '"aranearum" is genitive of "araneae" (cobwebs/spider webs), not spiders themselves. The image is of unused, empty bags.' },
                { text: 'because Catullus of yours has a bag full of webs', correct: false, feedback: '"sacculus" (diminutive of saccus) specifically means "money-bag", emphasising his poverty more pointedly.' },
                { text: 'for the bag of your Catullus is full of spider things', correct: false, feedback: '"aranearum" (cobwebs) is a standard image for emptiness/disuse, not vague "spider things".' }
            ],
            correctFeedback: 'Correct! The diminutive "sacculus" (little money-bag) adds pathos. Cobwebs fill empty, unused spaces — Catullus\'s purse is so empty that spiders have moved in!'
        },
        {
            type: 'translation',
            latin: 'sed contra accipies meros amores',
            question: 'Which translation is correct?',
            options: [
                { text: 'but in return you will receive pure affection', correct: true },
                { text: 'but against you will accept mere loves', correct: false, feedback: '"contra" means "in return/in exchange", not "against". "meros" means "pure/unmixed", not "mere".' },
                { text: 'but on the contrary you will take only loves', correct: false, feedback: '"contra" here is "in return" (exchange), not "on the contrary" (contradiction). "meros" is "pure", not "only".' },
                { text: 'but facing you will receive mixed affections', correct: false, feedback: '"meros" means "pure/unmixed" — the opposite of "mixed". The love is genuine and undiluted.' }
            ],
            correctFeedback: 'Correct! "contra" (in exchange) pivots from Fabullus\'s contributions to Catullus\'s. "meros amores" (pure affection) is genuine, unmixed — worth more than food.'
        },
        {
            type: 'translation',
            latin: 'seu quid suavius elegantiusve est',
            question: 'Which translation is correct?',
            options: [
                { text: 'or whatever is sweeter or more elegant', correct: true },
                { text: 'or something more sweet and more elegant is', correct: false, feedback: '"seu quid" means "or whatever", not "or something". The "-ve" adds "or more elegant" as alternative.' },
                { text: 'if something sweeter or more elegantly exists', correct: false, feedback: '"seu" means "or if/or whatever", and "elegantiusve" is comparative adjective, not adverb.' },
                { text: 'or what is more pleasant than elegant', correct: false, feedback: '"suavius... elegantiusve" are alternatives (sweeter OR more elegant), not a comparison between them.' }
            ],
            correctFeedback: 'Correct! Catullus offers "whatever is sweeter or more elegant" than mere food — his affection, wit, and the perfume he\'ll describe next.'
        },
        {
            type: 'translation',
            latin: 'nam unguentum dabo, quod meae puellae donarunt Veneres Cupidinesque',
            question: 'Which translation is correct?',
            options: [
                { text: 'for I will give you a perfume, which the Venuses and Cupids gave to my girlfriend', correct: true },
                { text: 'for I will give perfume, which the Venus and Cupid donated to my girl', correct: false, feedback: '"Veneres Cupidinesque" are plurals — "the Venuses and Cupids" (multiple love deities), not singular.' },
                { text: 'for I shall give an ointment, which was given by Venus and Cupid to my girl', correct: false, feedback: '"donarunt" is active — the deities gave (active), not "was given" (passive). Also plurals.' },
                { text: 'for I will offer the perfume, that my girlfriend\'s Venuses and Cupids gave', correct: false, feedback: '"meae puellae" (dative) means "TO my girlfriend", not "my girlfriend\'s" (genitive).' }
            ],
            correctFeedback: 'Correct! The plurals "Veneres Cupidinesque" (Venuses and Cupids) suggest abundant divine love. This perfume has supernatural origin — a gift from the gods of love themselves.'
        },
        {
            type: 'translation',
            latin: 'quod tu cum olfacies, deos rogabis',
            question: 'Which translation is correct?',
            options: [
                { text: 'when you smell this, you will ask the gods', correct: true },
                { text: 'which you, when you smell it, will ask the gods', correct: false, feedback: 'The first "quod" is the connecting relative ("this/which"), but the sentence flows better as "when you smell THIS".' },
                { text: 'that when you are smelling, you will pray to gods', correct: false, feedback: '"olfacies" is future ("will smell"), not present progressive. "rogabis" is "ask", more specific than "pray".' },
                { text: 'which, when sniffed by you, you will request from gods', correct: false, feedback: '"olfacies" is active — "you will smell", not passive "sniffed by you".' }
            ],
            correctFeedback: 'Correct! The build-up creates anticipation. When Fabullus smells this divine perfume, he\'ll be so overwhelmed he\'ll petition the gods for something extraordinary.'
        },
        {
            type: 'translation',
            latin: 'totum ut te faciant, Fabulle, nasum',
            question: 'Which translation is correct?',
            options: [
                { text: 'to make you, Fabullus, all nose', correct: true },
                { text: 'so that they make you, Fabullus, a whole nose', correct: false, feedback: '"totum... nasum" (all nose) means he wants to BECOME entirely nose, not receive "a whole nose".' },
                { text: 'that Fabullus might make you entirely nosy', correct: false, feedback: '"faciant" (they make) has "gods" as subject. Fabullus is the vocative address, not the subject.' },
                { text: 'to make your total nose, Fabullus', correct: false, feedback: '"totum te nasum" means "you (to be) all nose" — Fabullus would transform into pure nose.' }
            ],
            correctFeedback: 'Correct! The punchline: the perfume is so amazing that Fabullus will want to become ENTIRELY nose to smell it better. A brilliantly absurd conclusion.'
        },
        {
            type: 'style',
            latin: 'cenabis bene',
            question: 'What is the effect of opening with "cenabis bene" (you will dine well)?',
            options: [
                { text: 'It creates a generous-sounding promise that the poem will humorously undercut', correct: true },
                { text: 'It shows Catullus is a wealthy host', correct: false, feedback: 'The opposite — the poem reveals Catullus has nothing. The opening promise sets up the comic reversal.' },
                { text: 'It\'s a standard Roman greeting', correct: false, feedback: 'It\'s not a greeting but a promise/invitation that frames the poem\'s joke.' },
                { text: 'It indicates Fabullus is a poor cook', correct: false, feedback: 'The promise is about dining AT Catullus\'s house, not Fabullus\'s cooking ability.' }
            ],
            correctFeedback: 'Correct! The confident opening ("you WILL dine well") sounds like a generous invitation. The humour builds as we learn the absurd conditions attached.'
        },
        {
            type: 'style',
            latin: 'non sine',
            question: 'What rhetorical device is "non sine" (not without)?',
            options: [
                { text: 'Litotes — understatement that actually emphasises: "not without" means "definitely with"', correct: true },
                { text: 'Hyperbole — exaggerating the importance of the girl', correct: false, feedback: 'Litotes is understatement, the opposite of hyperbole. "Not without" understates "definitely must bring".' },
                { text: 'Metaphor — comparing the girl to something', correct: false, feedback: '"non sine" isn\'t metaphor. It\'s litotes — saying "not without" when meaning "with".' },
                { text: 'Asyndeton — omitting conjunctions', correct: false, feedback: 'Asyndeton is missing conjunctions. "non sine" is litotes — understatement through double negative.' }
            ],
            correctFeedback: 'Correct! Litotes (understatement via negation) is a favourite Roman device. "Not without a beautiful girl" elegantly means "definitely bring a beautiful girl".'
        },
        {
            type: 'style',
            latin: 'et vino et sale et omnibus cachinnis',
            question: 'What is the effect of the repeated "et... et... et" (and... and... and)?',
            options: [
                { text: 'Polysyndeton — the piling up of "ands" creates a sense of abundance and accumulation', correct: true },
                { text: 'Asyndeton — leaving out conjunctions for speed', correct: false, feedback: 'This is the opposite — POLYsyndeton (many conjunctions), not Asyndeton (no conjunctions).' },
                { text: 'Anaphora — repetition for emphasis on the first word', correct: false, feedback: 'While there IS repetition, polysyndeton specifically describes repeated conjunctions linking list items.' },
                { text: 'Tricolon — three parallel phrases', correct: false, feedback: 'There are four items (wine, wit, laughter, plus the girl). The device is polysyndeton (repeated "and").' }
            ],
            correctFeedback: 'Correct! Polysyndeton (repeated conjunctions) makes the list feel endless — Fabullus must bring wine AND wit AND ALL kinds of laughter. The demands pile up comically.'
        },
        {
            type: 'style',
            latin: 'sacculus',
            question: 'What is the effect of the diminutive "sacculus" (little money-bag)?',
            options: [
                { text: 'It adds pathos and humour — even his money-bag is small and pathetic', correct: true },
                { text: 'It indicates he has multiple small bags', correct: false, feedback: 'Diminutives express emotion, not literal plurality. One sad little purse is the image.' },
                { text: 'It shows he keeps only small coins', correct: false, feedback: 'The bag is full of cobwebs (empty), not small coins. The diminutive adds emotional colour.' },
                { text: 'It\'s the technical banking term', correct: false, feedback: '"sacculus" is a poetic diminutive for emotional effect, not banking terminology.' }
            ],
            correctFeedback: 'Correct! The diminutive "sacculus" (poor little money-bag) makes his poverty endearing. It\'s too sad even for spiders to care about — they just use it for webs.'
        },
        {
            type: 'style',
            latin: 'aranearum',
            question: 'What image does "plenus aranearum" (full of cobwebs) create?',
            options: [
                { text: 'Emptiness and neglect — cobwebs fill abandoned, unused spaces', correct: true },
                { text: 'Wealth from silk production', correct: false, feedback: 'Cobwebs signify emptiness, not wealth. Roman silk came from imports, not spider webs.' },
                { text: 'Fear and horror', correct: false, feedback: 'The tone is comic self-deprecation, not horror. Cobwebs = empty, not scary.' },
                { text: 'A busy household', correct: false, feedback: 'The opposite — cobwebs suggest neglect and disuse. Nothing has been in that purse for ages.' }
            ],
            correctFeedback: 'Correct! Cobwebs are the ultimate symbol of emptiness and disuse. His purse is so chronically empty that spiders have set up permanent residence.'
        },
        {
            type: 'style',
            latin: 'Veneres Cupidinesque',
            question: 'What is the effect of pluralising "Venus" and "Cupid"?',
            options: [
                { text: 'It suggests abundance of love and beauty — multiple goddesses and gods contributed to this perfume', correct: true },
                { text: 'It shows Catullus didn\'t know mythology well', correct: false, feedback: 'Educated Romans used plurals of Venus/Cupid for poetic effect, suggesting abundance of love qualities.' },
                { text: 'It indicates there were multiple perfumes', correct: false, feedback: 'One perfume ("unguentum" singular), but multiple love deities blessed it — emphasis on its divine nature.' },
                { text: 'It\'s a grammatical error', correct: false, feedback: 'Deliberate poetic choice. Pluralising love deities suggests overwhelming divine beauty and love.' }
            ],
            correctFeedback: 'Correct! "Veneres Cupidinesque" (Venuses and Cupids plural) suggests abundance — not just one goddess but ALL the forces of love contributed to this miraculous perfume.'
        },
        {
            type: 'style',
            latin: 'totum... nasum',
            question: 'What makes "totum ut te faciant nasum" such an effective punchline?',
            options: [
                { text: 'The absurd image of becoming entirely nose creates a memorably comic climax', correct: true },
                { text: 'It shows Roman interest in plastic surgery', correct: false, feedback: 'This is fantasy/hyperbole, not literal body modification. The humour is in the absurdity.' },
                { text: 'It insults Fabullus\'s large nose', correct: false, feedback: 'It\'s not an insult — wanting to be ALL nose is a compliment to the perfume\'s excellence.' },
                { text: 'It\'s a standard Roman blessing', correct: false, feedback: 'This is uniquely Catullan wit — an unexpected, absurd image that perfectly caps the poem.' }
            ],
            correctFeedback: 'Correct! The poem builds to this gloriously absurd climax. The perfume is SO good you\'d want to become pure nose. It\'s unexpected, memorable, and perfectly Catullan.'
        },
        {
            type: 'comprehension',
            latin: 'si tecum attuleris bonam atque magnam cenam',
            question: 'What is unusual about Catullus\'s dinner invitation?',
            options: [
                { text: 'The guest must bring the entire meal — reversing normal hospitality', correct: true },
                { text: 'He\'s inviting multiple people at once', correct: false, feedback: 'He addresses only Fabullus. The twist is that the guest provides the food, not the host.' },
                { text: 'The dinner will be vegetarian', correct: false, feedback: 'No dietary restrictions mentioned. The joke is the guest brings everything.' },
                { text: 'The dinner will be very late at night', correct: false, feedback: 'No timing issue. The comic reversal is that Fabullus brings the meal to Catullus\'s house.' }
            ],
            correctFeedback: 'Correct! Catullus inverts Roman hospitality — instead of providing for his guest, he demands the guest bring dinner, a girl, wine, wit, and laughter. Outrageous but charming.'
        },
        {
            type: 'comprehension',
            latin: 'nam tui Catulli plenus sacculus est aranearum',
            question: 'Why does Catullus explain that his purse is full of cobwebs?',
            options: [
                { text: 'To justify his outrageous demands — he\'s too poor to provide anything himself', correct: true },
                { text: 'To show he\'s been robbed recently', correct: false, feedback: 'Cobwebs suggest long-term emptiness, not recent robbery. His poverty is chronic, not sudden.' },
                { text: 'To warn Fabullus about spiders', correct: false, feedback: 'The cobwebs are in his PURSE, not his house. It\'s a metaphor for poverty, not pest warning.' },
                { text: 'To brag about his minimalist lifestyle', correct: false, feedback: 'It\'s self-deprecating humour about poverty, not a lifestyle boast.' }
            ],
            correctFeedback: 'Correct! The cobweb explanation is comic justification. "Sorry I can\'t provide dinner — I\'m broke!" said with such charm that we can\'t be angry.'
        },
        {
            type: 'comprehension',
            latin: 'sed contra accipies meros amores',
            question: 'What does Catullus offer in exchange for the dinner Fabullus brings?',
            options: [
                { text: 'Genuine affection and a miraculous perfume', correct: true },
                { text: 'Money to reimburse the cost', correct: false, feedback: 'His purse is empty of money (full of cobwebs). He offers love and perfume, not cash.' },
                { text: 'A return dinner invitation', correct: false, feedback: 'No future invitation mentioned. He offers intangible things — love and an amazing scent.' },
                { text: 'Political favours', correct: false, feedback: 'No politics here. The exchange is material goods for emotional/sensory pleasures.' }
            ],
            correctFeedback: 'Correct! Catullus\'s "payment" is affection ("meros amores") and the divine perfume. Material poverty is offset by emotional and aesthetic richness.'
        },
        {
            type: 'comprehension',
            latin: 'totum ut te faciant, Fabulle, nasum',
            question: 'What is the climactic joke of the poem?',
            options: [
                { text: 'The perfume is so good that Fabullus will want to become entirely nose to fully enjoy it', correct: true },
                { text: 'Fabullus has an unusually large nose', correct: false, feedback: 'The "all nose" is a wish, not a description. Fabullus WOULD WANT to be all nose, not already have one.' },
                { text: 'The gods will punish Fabullus by turning him into a nose', correct: false, feedback: 'It\'s a desire, not punishment. Fabullus will ASK to become nose because the perfume is so divine.' },
                { text: 'Roman noses were considered ugly', correct: false, feedback: 'The joke isn\'t about appearance but about wanting maximum ability to smell something wonderful.' }
            ],
            correctFeedback: 'Correct! The perfume is so phenomenal that Fabullus will want to transform into pure smelling apparatus. It\'s the ultimate compliment expressed as delightful absurdity.'
        }
    ]
};
