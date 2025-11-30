// Baucis and Philemon Section 4: Lines 36-50
// The Miracle & The Command

const baucisPhilemonSection4 = {
    section: 4,
    title: 'The Miracle & The Command',
    lines: '36-50',
    latinText: 'interea totiens haustum cratera repleri sponte sua perseque vident succrescere vina; attoniti novitate pavent manibusque supinis concipiunt Baucisque preces timidusque Philemon et veniam dapibus nullisque paratibus orant. unicus anser erat, minimae custodia villae, quem dis hospitibus domini mactare parabant; ille celer penna tardos aetate fatigat eluditque diu tandemque est visus ad ipsos confugisse deos. superi vetuere necari. "di" que "sumus, meritasque luet vicinia poenas impia" dixerunt; "vobis immunibus huius esse mali dabitur. modo vestra relinquite tecta ac nostros comitate gradus et in ardua montis ite simul."',

    questions: [
        {
            type: 'translation',
            latin: 'interea totiens haustum cratera repleri sponte sua vident',
            question: 'Which translation is correct?',
            options: [
                { text: 'Meanwhile they see the mixing bowl, drained so many times, refilled of its own accord', correct: true },
                { text: 'Meanwhile they see the crater drained so many times and refilled spontaneously', correct: false, feedback: '"cratera" is the Greek word for mixing bowl, not "crater". Also, the word order should emphasize the miraculous "sponte sua".' },
                { text: 'In the meantime they had seen the wine bowl emptied many times and refilled by itself', correct: false, feedback: '"vident" is present tense (historic present), not pluperfect. The present creates immediacy.' },
                { text: 'Meanwhile they see the mixing bowl being drained and refilled many times by itself', correct: false, feedback: '"haustum" is perfect passive participle — "having been drained", not "being drained". The draining happened, THEN refilling.' }
            ],
            correctFeedback: 'Correct! The historic present "vident" makes us experience the miracle in real time. "sponte sua" (of its own accord) emphasizes the supernatural nature of the refilling wine.'
        },
        {
            type: 'translation',
            latin: 'attoniti novitate pavent manibusque supinis concipiunt preces',
            question: 'Which translation is correct?',
            options: [
                { text: 'Astonished by the strangeness, they tremble and with upturned hands they form prayers', correct: true },
                { text: 'Thunderstruck by the novelty, they are afraid and with raised hands they conceive prayers', correct: false, feedback: '"manibus supinis" specifically means palms facing upward (the prayer posture), not just "raised hands".' },
                { text: 'Amazed by the newness, they fear and receive prayers with their hands turned up', correct: false, feedback: '"concipiunt preces" means they form/compose prayers, not receive them. They are praying, not being prayed to.' },
                { text: 'Astonished at the strangeness, they feared and with upturned hands they formed prayers', correct: false, feedback: '"pavent" is present tense (they tremble/are afraid), not past "feared". The historic present creates immediacy.' }
            ],
            correctFeedback: 'Correct! "attoniti" (thunderstruck) is appropriate — they\'re in Jupiter\'s presence! "manibus supinis" describes the traditional Roman prayer gesture, palms facing heaven.'
        },
        {
            type: 'translation',
            latin: 'et veniam dapibus nullisque paratibus orant',
            question: 'Which translation is correct?',
            options: [
                { text: 'and they beg pardon for the feast and the lack of preparations', correct: true },
                { text: 'and they pray for forgiveness of their feast and unprepared foods', correct: false, feedback: '"nullis paratibus" means lack of preparations/no preparations, not "unprepared foods".' },
                { text: 'and they beg pardon from the feast and from the preparations', correct: false, feedback: '"dapibus" and "paratibus" are datives (for the feast, for the preparations), not ablatives (from).' },
                { text: 'and they pray forgiveness for feasts and preparations they don\'t have', correct: false, feedback: 'They did have a feast (however humble). "nullis paratibus" refers to inadequate preparations, not absence of food.' }
            ],
            correctFeedback: 'Correct! Even as they witness a miracle, the couple apologize for their humble hospitality. "nullis paratibus" shows their modesty — they feel their preparations are inadequate.'
        },
        {
            type: 'translation',
            latin: 'unicus anser erat, minimae custodia villae',
            question: 'Which translation is correct?',
            options: [
                { text: 'There was one goose, the guardian of the very small house', correct: true },
                { text: 'There was a unique goose, guarding the smallest farm', correct: false, feedback: '"unicus" means "only one", emphasizing scarcity, not "unique" as in special. "minimae villae" is genitive.' },
                { text: 'A single goose was there, protection for the tiny villa', correct: false, feedback: '"custodia" means guardian/watchdog, not just protection. The goose is personified as a guard.' },
                { text: 'There was just one goose, guardian of the very small farmhouse', correct: false, feedback: 'Very close, but "villa" in this context means house/cottage, not specifically "farmhouse".' }
            ],
            correctFeedback: 'Correct! "unicus" emphasizes how precious this goose is — their only one. "custodia" gives the goose dignity as a guardian, despite their poverty.'
        },
        {
            type: 'translation',
            latin: 'quem dis hospitibus domini mactare parabant',
            question: 'Which translation is correct?',
            options: [
                { text: 'which the owners were preparing to sacrifice for their guests, the gods', correct: true },
                { text: 'whom the masters prepared to kill for the divine guests', correct: false, feedback: '"parabant" is imperfect (were preparing), showing the ongoing attempt, not simple past "prepared".' },
                { text: 'which the lords of the house were preparing to slaughter to the gods as guests', correct: false, feedback: '"dis hospitibus" means "for the gods, (who are) their guests", not "to the gods as guests". The gods are the guests.' },
                { text: 'which its masters were preparing to kill for the hospitable gods', correct: false, feedback: '"hospitibus" means "guests", not "hospitable". The gods are their guests; the word describes their role, not quality.' }
            ],
            correctFeedback: 'Correct! "dis hospitibus" creates dramatic irony — the couple wants to honor "the gods" by sacrificing for their guests, not knowing their guests ARE gods.'
        },
        {
            type: 'translation',
            latin: 'ille celer penna tardos aetate fatigat',
            question: 'Which translation is correct?',
            options: [
                { text: 'The goose, swift with its wings, tires out those slow with age', correct: true },
                { text: 'He quickly tires out the slow elderly with feathers', correct: false, feedback: '"celer penna" means swift with wings, describing the goose\'s speed using its wings, not just "quickly".' },
                { text: 'That swift one with feathers wears out those made slow by age', correct: false, feedback: '"ille" refers specifically to the goose mentioned, and "penna" is ablative of means (with its wings).' },
                { text: 'He, swift by wing, exhausted them, slow because of age', correct: false, feedback: '"fatigat" is present tense (tires/wears out), not past "exhausted". The chase is ongoing.' }
            ],
            correctFeedback: 'Correct! The contrast between "celer" (swift) and "tardos" (slow) creates both humor and pathos. The elderly couple exhausts themselves chasing their one precious goose.'
        },
        {
            type: 'translation',
            latin: 'tandemque est visus ad ipsos confugisse deos',
            question: 'Which translation is correct?',
            options: [
                { text: 'and finally it seemed to have fled for refuge to the gods themselves', correct: true },
                { text: 'and at last it was seen to have fled to the very gods', correct: false, feedback: '"visus est" with infinitive means "seemed to", not literally "was seen to". It\'s about appearance, not observation.' },
                { text: 'and finally it appeared to flee to the gods themselves', correct: false, feedback: '"confugisse" is perfect infinitive (to have fled), indicating completed action, not "to flee" (ongoing).' },
                { text: 'and at last they saw it flee to the gods themselves', correct: false, feedback: '"est visus" is passive (it seemed), not active (they saw it). The goose seemed to flee.' }
            ],
            correctFeedback: 'Correct! "tandem" (finally) marks the climax of the chase. The goose fleeing "ad ipsos deos" (to the gods themselves) triggers the divine revelation.'
        },
        {
            type: 'translation',
            latin: 'superi vetuere necari',
            question: 'Which translation is correct?',
            options: [
                { text: 'The gods forbade it to be killed', correct: true },
                { text: 'The superiors forbade the killing', correct: false, feedback: '"superi" means "the gods above" or "the heavenly ones", not "superiors" in a hierarchy.' },
                { text: 'Those above had forbidden it to be killed', correct: false, feedback: '"vetuere" is syncopated perfect (= vetuerunt), meaning "forbade", not pluperfect "had forbidden".' },
                { text: 'The gods forbade them to kill', correct: false, feedback: '"necari" is passive infinitive (to be killed), not active (to kill). The focus is on the goose being spared.' }
            ],
            correctFeedback: 'Correct! "superi" (the gods above) reveals their divine identity. "vetuere" is a syncopated perfect. The gods save the goose from sacrifice.'
        },
        {
            type: 'translation',
            latin: '"di" que "sumus, meritasque luet vicinia poenas impia"',
            question: 'Which translation is correct?',
            options: [
                { text: '"We are gods," they said, "and the impious neighbourhood will pay the penalty it deserves"', correct: true },
                { text: '"We are the gods and the wicked neighbours will pay their deserved punishments"', correct: false, feedback: '"vicinia" is singular collective noun (neighbourhood), not plural "neighbours". "meritas poenas" is accusative object.' },
                { text: '"Gods we are," they said, "and the irreligious neighbourhood pays deserved penalties"', correct: false, feedback: '"luet" is future tense (will pay), not present (pays). The punishment is coming.' },
                { text: '"We are divine and the impious community deserves to pay the penalty"', correct: false, feedback: '"luet" means "will pay", not "deserves to pay". The neighbourhood WILL pay, it\'s not just deserved.' }
            ],
            correctFeedback: 'Correct! "di sumus" — just two words for the momentous revelation. "impia" is key — their "impiety" (lack of proper respect for gods/hospitality) is why they will be punished.'
        },
        {
            type: 'translation',
            latin: 'vobis immunibus huius esse mali dabitur',
            question: 'Which translation is correct?',
            options: [
                { text: 'It will be granted to you to be free from this evil', correct: true },
                { text: 'You will be given immunity from this bad thing', correct: false, feedback: '"immunibus" is dative agreeing with "vobis", meaning "to you, who are exempt". "esse" is the infinitive subject of "dabitur".' },
                { text: 'Freedom from this evil will be given to you', correct: false, feedback: 'The construction is "dabitur vobis esse immunibus" — it will be granted TO you TO BE exempt. The infinitive matters.' },
                { text: 'Being immune from this disaster is given to you', correct: false, feedback: '"dabitur" is future passive (will be granted), not present (is given).' }
            ],
            correctFeedback: 'Correct! "dabitur + infinitive" construction: "it will be granted to be". The couple, unlike their impious neighbours, will be spared from destruction.'
        },
        {
            type: 'translation',
            latin: 'modo vestra relinquite tecta ac nostros comitate gradus',
            question: 'Which translation is correct?',
            options: [
                { text: 'Just leave your home and accompany our steps', correct: true },
                { text: 'Only abandon your houses and follow our footsteps', correct: false, feedback: '"tecta" is singular (home/house), not plural. "comitate" means accompany, not follow.' },
                { text: 'Now leave your roof and accompany our journey', correct: false, feedback: '"modo" means "just/only", not "now". "gradus" means steps/footsteps, not journey.' },
                { text: 'Just leave your home and walk with us', correct: false, feedback: '"comitate nostros gradus" is more literally "accompany our steps" — emphasizing walking alongside the gods.' }
            ],
            correctFeedback: 'Correct! "modo" (just/only) shows how simple the command is. "relinquite" and "comitate" are imperatives — clear, divine commands.'
        },
        {
            type: 'translation',
            latin: 'et in ardua montis ite simul',
            question: 'Which translation is correct?',
            options: [
                { text: 'and go together to the steep heights of the mountain', correct: true },
                { text: 'and go simultaneously to the difficult mountain', correct: false, feedback: '"ardua montis" is "the steep parts/heights of the mountain", not "difficult mountain".' },
                { text: 'and climb together into the high mountain', correct: false, feedback: '"ite" means go, not climb. "ardua" means steep heights, describing part of the mountain.' },
                { text: 'and go at once to the steep mountain', correct: false, feedback: '"simul" means together, not "at once". They should go WITH the gods, together.' }
            ],
            correctFeedback: 'Correct! The tricolon of imperatives (relinquite... comitate... ite) gives divine authority. "simul" (together) echoes their unity as a couple.'
        },
        {
            type: 'style',
            latin: 'vident',
            question: 'What is the effect of the historic present "vident" (they see)?',
            options: [
                { text: 'It makes the miracle immediate and vivid — we experience it in real time alongside the couple', correct: true },
                { text: 'It shows the couple had good eyesight', correct: false, feedback: 'The historic present is about narrative technique, not literal sight. It creates immediacy for readers.' },
                { text: 'It indicates the action is still ongoing today', correct: false, feedback: 'The historic present makes PAST events feel present for narrative effect, not because they\'re still happening.' },
                { text: 'It is grammatically incorrect and should be past tense', correct: false, feedback: 'The historic present is a common and deliberate Latin technique for vivid narration.' }
            ],
            correctFeedback: 'Correct! The historic present "vident" draws us into the moment of discovery. One moment the bowl is empty, next it\'s full — we experience the "wait, what?!" moment with them.'
        },
        {
            type: 'style',
            latin: 'sponte sua... per se',
            question: 'What is the effect of repeating "of its own accord... by itself"?',
            options: [
                { text: 'This pleonasm (redundancy) emphasizes the supernatural nature — the wine truly refills itself without any help', correct: true },
                { text: 'It shows Ovid made a mistake by repeating himself', correct: false, feedback: 'This is deliberate pleonasm — repetition for emphasis. Ovid is a master stylist who repeats intentionally.' },
                { text: 'It indicates there were two different miracles happening', correct: false, feedback: 'Both phrases describe the same phenomenon — the wine refilling. The repetition emphasizes, not multiplies.' },
                { text: 'It creates confusion about what is happening', correct: false, feedback: 'The repetition clarifies and emphasizes: this is definitely, absolutely happening on its own.' }
            ],
            correctFeedback: 'Correct! Ovid says the same thing twice to hammer home the point: nobody is topping up this wine. It\'s refilling itself. Magic.'
        },
        {
            type: 'style',
            latin: 'attoniti',
            question: 'What is particularly appropriate about using "attoniti" (thunderstruck) here?',
            options: [
                { text: 'It literally means "struck by thunder" — and they\'re in the presence of Jupiter, the thunder god', correct: true },
                { text: 'It shows they were physically struck by lightning', correct: false, feedback: '"attoniti" is metaphorical here — they\'re shocked/astonished, not literally hit by lightning.' },
                { text: 'It indicates they were deaf from a loud noise', correct: false, feedback: '"attoniti" means shocked/stunned, not deaf. The etymology (thunder) adds ironic appropriateness.' },
                { text: 'It\'s just a common word for surprise with no special significance', correct: false, feedback: 'The etymological connection to thunder creates dramatic irony when Jupiter is present.' }
            ],
            correctFeedback: 'Correct! "attoniti" (from tonitrus, thunder) is perfect dramatic irony. They\'re thunderstruck in the presence of the thunder god himself!'
        },
        {
            type: 'style',
            latin: 'dis hospitibus',
            question: 'What literary device does "dis hospitibus" (for the gods, their guests) create?',
            options: [
                { text: 'Dramatic irony — they want to honor "the gods" by feeding their guests, not knowing their guests ARE gods', correct: true },
                { text: 'Hyperbole — exaggerating the importance of their guests', correct: false, feedback: 'It\'s not exaggeration — their guests literally are gods. The irony is the couple doesn\'t know this.' },
                { text: 'Metaphor — comparing their guests to gods', correct: false, feedback: 'It\'s not a comparison — the guests ARE gods. The irony is in the couple\'s ignorance.' },
                { text: 'Personification — making the gods seem human', correct: false, feedback: 'The gods are already appearing in human form. The device here is irony about the hosts\' knowledge.' }
            ],
            correctFeedback: 'Correct! The couple intends to honor the gods by sacrificing for their guests — unaware that their guests literally are the gods. Beautiful dramatic irony.'
        },
        {
            type: 'style',
            latin: 'celer / tardos',
            question: 'What is the effect of the contrast between "celer" (swift) and "tardos" (slow)?',
            options: [
                { text: 'Antithesis creates both humor and pathos — the swift goose versus the elderly couple is both comic and touching', correct: true },
                { text: 'It shows the goose was unusually fast', correct: false, feedback: 'The contrast is relational — fast relative to the slow couple. The antithesis highlights their difference.' },
                { text: 'It indicates time is passing quickly', correct: false, feedback: 'The contrast is about speed of movement, not time passing. It\'s spatial, not temporal.' },
                { text: 'It creates confusion about who is chasing whom', correct: false, feedback: 'The contrast is clear — swift goose evades slow couple. The antithesis emphasizes their physical mismatch.' }
            ],
            correctFeedback: 'Correct! Picture it: an agile goose zooming around while two elderly people huff and puff trying to catch it. It\'s slapstick comedy with pathos underneath.'
        },
        {
            type: 'style',
            latin: 'tandem',
            question: 'What is the narrative function of "tandem" (finally)?',
            options: [
                { text: 'It marks the climax of the goose chase and triggers the divine revelation', correct: true },
                { text: 'It shows the chase lasted exactly one day', correct: false, feedback: '"tandem" means "at last/finally" — it indicates culmination, not specific duration.' },
                { text: 'It introduces a new scene', correct: false, feedback: '"tandem" marks the resolution of the current scene (the chase), not a new one.' },
                { text: 'It is just a filler word with no importance', correct: false, feedback: '"tandem" is strategically placed to build and release tension — the long chase finally ends.' }
            ],
            correctFeedback: 'Correct! After the extended chase, "tandem" signals the climax. The goose fleeing to the gods triggers the revelation "di sumus" — everything changes.'
        },
        {
            type: 'style',
            latin: 'di sumus',
            question: 'What is notable about the divine revelation "di sumus" (we are gods)?',
            options: [
                { text: 'Its brevity is striking — just two words for a momentous revelation, showing divine authority needs no elaboration', correct: true },
                { text: 'It is grammatically unusual and hard to understand', correct: false, feedback: '"di sumus" is simple, clear Latin — subject + verb. Its simplicity is the point.' },
                { text: 'It shows the gods were being modest', correct: false, feedback: 'The brevity shows authority, not modesty. Gods state facts; they don\'t explain themselves.' },
                { text: 'It indicates the gods were angry', correct: false, feedback: 'The brief statement shows authority, not anger. Jupiter\'s manner is later described as "placido ore" (with calm expression).' }
            ],
            correctFeedback: 'Correct! After lines of buildup — miracle, shock, goose chase — Jupiter reveals himself in just two words. Gods don\'t need flowery speeches; they state facts.'
        },
        {
            type: 'style',
            latin: 'relinquite... comitate... ite',
            question: 'What is the effect of the tricolon of imperatives (leave... accompany... go)?',
            options: [
                { text: 'The three commands create an authoritative, rhythmic structure appropriate to divine speech', correct: true },
                { text: 'It shows the gods were confused about what they wanted', correct: false, feedback: 'The three commands are clear and progressive: leave, follow, arrive. It\'s organized, not confused.' },
                { text: 'It creates unnecessary repetition', correct: false, feedback: 'Tricolon is a deliberate rhetorical device creating rhythm and emphasis. It\'s purposeful.' },
                { text: 'It indicates the couple needed repeated instructions', correct: false, feedback: 'The tricolon is about divine speech patterns, not about the couple\'s comprehension.' }
            ],
            correctFeedback: 'Correct! The tricolon gives divine speech its proper authority and rhythm. Leave your home. Follow our steps. Go together. Clear, clipped, commanding.'
        },
        {
            type: 'comprehension',
            latin: 'totiens haustum cratera repleri sponte sua',
            question: 'What is the significance of the wine miracle?',
            options: [
                { text: 'It reveals the guests\' divine nature — only gods could make wine refill itself', correct: true },
                { text: 'It shows the couple had a magical wine bowl', correct: false, feedback: 'The miracle comes from the GUESTS (gods), not from the couple\'s property.' },
                { text: 'It indicates the couple was drunk and imagining things', correct: false, feedback: 'The miracle is real within the story — it triggers genuine religious response (prayers, fear).' },
                { text: 'It was just a natural phenomenon they misunderstood', correct: false, feedback: 'This is a genuine theophany (divine manifestation). The miracle is supernatural.' }
            ],
            correctFeedback: 'Correct! The self-refilling wine is the first sign that something divine is happening. Baucis and Philemon recognize the supernatural and respond with prayers.'
        },
        {
            type: 'comprehension',
            latin: 'unicus anser erat, minimae custodia villae',
            question: 'What does the goose episode reveal about Baucis and Philemon?',
            options: [
                { text: 'They are willing to sacrifice their only valuable possession to honor their guests', correct: true },
                { text: 'They were poor farmers who raised geese', correct: false, feedback: 'Having ONE goose shows poverty, not that they raised geese. The point is their sacrifice, not their occupation.' },
                { text: 'They disliked their goose and wanted to get rid of it', correct: false, feedback: 'The goose was precious — their "guardian". They sacrifice it to honor guests, not to dispose of it.' },
                { text: 'They were confused about what food to serve', correct: false, feedback: 'They know exactly what they\'re doing — sacrificing their best (only) animal for their guests.' }
            ],
            correctFeedback: 'Correct! The goose is all they have — their only livestock, their "guardian". Offering to sacrifice it shows the depth of their hospitality and pietas.'
        },
        {
            type: 'comprehension',
            latin: 'impia vicinia',
            question: 'Why is the neighbourhood called "impia" (impious)?',
            options: [
                { text: 'They rejected hospitality to strangers — a sacred duty that violates divine law', correct: true },
                { text: 'They didn\'t attend temple services', correct: false, feedback: 'Their impiety is specifically about rejecting hospitality, not about temple attendance.' },
                { text: 'They worshipped other gods', correct: false, feedback: 'The issue isn\'t which gods they worship but how they treat strangers — hospitality was sacred.' },
                { text: 'They were criminals', correct: false, feedback: 'Their crime is violating hospitality — refusing shelter to travelers. That\'s what makes them "impious".' }
            ],
            correctFeedback: 'Correct! Hospitality (xenia/hospitium) was a sacred obligation. The thousand houses that rejected the disguised gods violated divine law and will be punished.'
        },
        {
            type: 'comprehension',
            latin: 'vobis immunibus huius esse mali dabitur',
            question: 'Why are Baucis and Philemon being saved from the coming destruction?',
            options: [
                { text: 'Their pietas — their dutiful hospitality to strangers — distinguishes them from their neighbours', correct: true },
                { text: 'They were rich enough to afford proper hospitality', correct: false, feedback: 'They\'re explicitly poor (humble cottage, one goose). Their pietas, not wealth, saves them.' },
                { text: 'They recognized the gods\' true identity', correct: false, feedback: 'They didn\'t recognize the gods until the revelation. They were hospitable to apparent strangers.' },
                { text: 'They had made sacrifices at the temple', correct: false, feedback: 'Their reward is for hospitality to these specific strangers, not for prior religious activities.' }
            ],
            correctFeedback: 'Correct! The story\'s moral: Baucis and Philemon showed hospitality without knowing they were hosting gods. Their genuine pietas earns divine favor.'
        }
    ]
};
