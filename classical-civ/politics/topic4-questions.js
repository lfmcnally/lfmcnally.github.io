// Topic 4 Question Bank - Collapse of Concordia (59-50 BC)
// Politics of the Late Republic

const questionBank = {
    'comprehensive': [
        // Topic 4.1 - The First Triumvirate
        {
            type: 'text-flexible',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'In what year was the First Triumvirate formed?',
            correctAnswers: ['60 bc', '60'],
            acceptableVariations: ['60', '60 bc', '60 bce'],
            explanation: 'The First Triumvirate was formed in 60 BC as a private political alliance between Caesar, Pompey, and Crassus to advance their mutual interests against Senate opposition.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'Which three men formed the First Triumvirate?',
            choices: [
                'Caesar, Pompey, and Crassus',
                'Caesar, Cicero, and Cato',
                'Pompey, Sulla, and Marius',
                'Caesar, Brutus, and Cassius'
            ],
            correct: 0,
            explanation: 'The First Triumvirate was formed by Julius Caesar, Gnaeus Pompey Magnus, and Marcus Licinius Crassus - three of the most powerful men in Rome who combined their resources to dominate Roman politics.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'What did Pompey want from the First Triumvirate?',
            correctAnswers: ['land for veterans', 'eastern settlement ratified'],
            acceptableVariations: ['land for his veterans', 'ratification of eastern settlement', 'land veterans', 'eastern arrangements confirmed', 'settlements ratified'],
            explanation: 'Pompey wanted land grants for his veterans from the eastern campaigns and ratification of his arrangements in the East, both of which the Senate had blocked.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'What did Crassus want from the First Triumvirate?',
            correctAnswers: ['tax contracts', 'publicani contracts'],
            acceptableVariations: ['tax contracts renegotiated', 'relief for publicani', 'tax farming contracts', 'asian tax contracts'],
            explanation: 'Crassus wanted renegotiation of the Asian tax contracts for the publicani (tax collectors), who had overbid and were facing financial losses.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'What did Caesar want from the First Triumvirate?',
            correctAnswers: ['consulship', 'provincial command'],
            acceptableVariations: ['consulship', 'consul', 'provincial command', 'gaul', 'gallic command'],
            explanation: 'Caesar wanted the consulship for 59 BC and subsequently a major provincial command (which became Gaul) to build military glory and wealth.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'Why was the First Triumvirate considered dangerous to the Republic?',
            choices: [
                'It was a private alliance that bypassed constitutional channels',
                'It was formally approved by the Senate',
                'It gave power to the tribunes',
                'It strengthened traditional Republican institutions'
            ],
            correct: 0,
            explanation: 'The First Triumvirate was dangerous because it was a private, secret alliance that used combined wealth and influence to control elections and legislation, bypassing the constitutional system and concentrating power in three men.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'Complete this passage about the First Triumvirate:',
            gapText: 'The alliance was sealed when ___ married Caesar\'s daughter ___. The triumvirs agreed to support each other\'s interests against the ___ opposition. Critics called their arrangement a "___ of three heads".',
            correctGaps: ['Pompey', 'Julia', 'Senate', 'monster'],
            acceptableGaps: [
                ['Pompey', 'pompey'],
                ['Julia', 'julia'],
                ['Senate', 'senatorial', 'optimate'],
                ['monster', 'beast', 'three-headed monster']
            ],
            explanation: 'The marriage of Pompey to Caesar\'s daughter Julia cemented the alliance. The Roman historian Varro called it a "three-headed monster" that threatened the Republic.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'Match each triumvir with their primary source of power:',
            items: ['Military reputation', 'Wealth and business connections', 'Popular support and political skill'],
            categories: {
                'Pompey': ['Military reputation'],
                'Crassus': ['Wealth and business connections'],
                'Caesar': ['Popular support and political skill']
            },
            explanation: 'Each triumvir brought different strengths: Pompey had unmatched military prestige, Crassus had vast wealth, and Caesar had popular appeal and political cunning.'
        },

        // Topic 4.2 - Caesar's Consulship 59 BC
        {
            type: 'text-flexible',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'Who was Caesar\'s consular colleague in 59 BC?',
            correctAnswers: ['bibulus', 'marcus bibulus'],
            acceptableVariations: ['bibulus', 'marcus bibulus', 'marcus calpurnius bibulus'],
            explanation: 'Marcus Calpurnius Bibulus was Caesar\'s consular colleague, an optimate who opposed Caesar\'s legislation but was ultimately unable to prevent it.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'What did Bibulus do when he could not stop Caesar\'s legislation?',
            choices: [
                'He retired to his house and watched the skies for omens',
                'He led an armed revolt against Caesar',
                'He fled to Greece',
                'He allied with Caesar\'s enemies in the provinces'
            ],
            correct: 0,
            explanation: 'Bibulus retired to his house and declared he was "watching the skies" (spectio) - a religious obstruction technique. Romans joked it was "the consulship of Julius and Caesar" since Bibulus was invisible.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'What was the Lex Julia Agraria?',
            correctAnswers: ['land law', 'land distribution'],
            acceptableVariations: ['land law', 'agrarian law', 'land distribution', 'land for veterans', 'campanian land'],
            explanation: 'The Lex Julia Agraria was Caesar\'s land law that distributed public land (including the Campanian land) to Pompey\'s veterans and the urban poor, fulfilling a key promise to his triumviral partners.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'How did Caesar pass his land law despite Senate opposition?',
            choices: [
                'He took it directly to the popular assembly, bypassing the Senate',
                'He bribed the Senate to support it',
                'He waited for the Senate to approve it',
                'He modified it to satisfy the optimates'
            ],
            correct: 0,
            explanation: 'Caesar bypassed the Senate entirely and took his legislation directly to the popular assembly (concilium plebis), using popularis methods and the support of Pompey\'s veterans to secure passage.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'Which province(s) did Caesar receive after his consulship?',
            correctAnswers: ['gaul', 'cisalpine gaul'],
            acceptableVariations: ['gaul', 'cisalpine gaul', 'transalpine gaul', 'gallia', 'cisalpine and transalpine gaul', 'illyricum'],
            explanation: 'Caesar received Cisalpine Gaul, Transalpine Gaul, and Illyricum for five years through the Lex Vatinia, giving him the military command he needed to build his power base.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'Complete this passage about Caesar\'s consulship:',
            gapText: 'Caesar\'s colleague ___ was so powerless that people joked it was the consulship of "___ and Caesar". When Cato tried to obstruct legislation, Caesar had him ___ from the Senate. Caesar\'s legislation was technically illegal because Bibulus had declared ___.',
            correctGaps: ['Bibulus', 'Julius', 'dragged', 'spectio'],
            acceptableGaps: [
                ['Bibulus', 'bibulus'],
                ['Julius', 'julius'],
                ['dragged', 'removed', 'arrested'],
                ['spectio', 'obnuntiatio', 'religious obstruction', 'sky-watching']
            ],
            explanation: 'Caesar\'s dominance was so complete that his colleague was politically invisible, and he was willing to use force and ignore religious obstruction to achieve his goals.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'What was controversial about how Caesar passed his legislation?',
            choices: [
                'He ignored religious obstruction and used violence against opponents',
                'He paid for all legislation from his own funds',
                'He always followed proper constitutional procedures',
                'He never appeared in the Senate during his consulship'
            ],
            correct: 0,
            explanation: 'Caesar ignored Bibulus\'s religious obstruction (spectio), used Pompey\'s veterans to intimidate opponents, and had Cato physically removed from the Senate - all violations of constitutional norms.'
        },
        {
            type: 'scenario',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'A senator opposes Caesar\'s land bill by declaring spectio (watching the skies for omens). Caesar ignores this and holds the vote anyway. What constitutional principle did Caesar violate?',
            choices: [
                'Religious obstruction that should have stopped all public business',
                'The requirement to consult the Senate before voting',
                'The ban on legislation during festivals',
                'The rule against tribunes proposing laws'
            ],
            correct: 0,
            explanation: 'Spectio was a legitimate religious obstruction that should have invalidated any legislation passed while it was in effect. By ignoring it, Caesar showed contempt for traditional checks on power.'
        },

        // Topic 4.3 - Clodius and the Bona Dea Scandal
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What was the Bona Dea scandal?',
            correctAnswers: ['clodius women ceremony', 'clodius dressed woman'],
            acceptableVariations: ['clodius infiltrated', 'clodius dressed as woman', 'clodius bona dea ceremony', 'clodius disguised', 'clodius womens rites'],
            explanation: 'In 62 BC, Publius Clodius Pulcher infiltrated the sacred rites of Bona Dea (a women-only religious ceremony) disguised as a woman, allegedly to seduce Caesar\'s wife Pompeia.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'Whose house was the Bona Dea ceremony held at when Clodius infiltrated it?',
            choices: [
                'Caesar\'s house',
                'Cicero\'s house',
                'Pompey\'s house',
                'Crassus\'s house'
            ],
            correct: 0,
            explanation: 'The ceremony was held at Caesar\'s house as Pontifex Maximus, hosted by his wife Pompeia. This made the scandal personally embarrassing to Caesar.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What did Caesar say when asked about the Bona Dea scandal?',
            correctAnswers: ['caesar wife above suspicion', 'wife must be above suspicion'],
            acceptableVariations: ['wife above suspicion', 'caesar\'s wife must be above suspicion', 'above suspicion'],
            explanation: 'Caesar famously said that "Caesar\'s wife must be above suspicion" - he divorced Pompeia not because he believed she was guilty, but because her reputation had been damaged.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'How was Clodius acquitted at his trial for the Bona Dea scandal?',
            choices: [
                'Through bribery of the jury',
                'Because witnesses refused to testify',
                'Caesar testified in his defence',
                'The charges were technically flawed'
            ],
            correct: 0,
            explanation: 'Clodius was acquitted through massive bribery of the jury, funded largely by Crassus. This scandal exposed the corruption of Roman courts and made Clodius a bitter enemy of Cicero, who had testified against him.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'Why did Cicero and Clodius become enemies?',
            correctAnswers: ['cicero testified', 'cicero broke alibi'],
            acceptableVariations: ['cicero testified against clodius', 'cicero destroyed alibi', 'cicero witness', 'cicero evidence'],
            explanation: 'Cicero testified at Clodius\'s trial that he had seen Clodius in Rome on the day in question, destroying his alibi. This made Clodius Cicero\'s bitter enemy and would have devastating consequences.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'Complete this passage about Clodius:',
            gapText: 'Clodius wanted to become a ___ of the plebs to attack his enemies. To do this, he needed to be adopted into a ___ family. Caesar, as Pontifex Maximus, oversaw this ___. Once tribune, Clodius passed a law exiling anyone who had executed citizens without ___.',
            correctGaps: ['tribune', 'plebeian', 'adoption', 'trial'],
            acceptableGaps: [
                ['tribune', 'tribunate'],
                ['plebeian', 'plebs'],
                ['adoption', 'transitio ad plebem'],
                ['trial', 'proper trial']
            ],
            explanation: 'Clodius\'s transition from patrician to plebeian (transitio ad plebem) was facilitated by Caesar, and his subsequent tribunate was used to attack Cicero for executing the Catilinarian conspirators without trial.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What law did Clodius pass that targeted Cicero?',
            correctAnswers: ['exile law', 'law against executing citizens'],
            acceptableVariations: ['exile law', 'aqua et igni', 'interdiction', 'execution without trial law', 'citizens without trial'],
            explanation: 'Clodius passed a law that anyone who had executed Roman citizens without trial should be exiled. This was aimed directly at Cicero for his execution of the Catilinarian conspirators in 63 BC.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What happened to Cicero as a result of Clodius\'s legislation?',
            choices: [
                'He was forced into exile and his house was destroyed',
                'He was executed for treason',
                'He was appointed governor of a province',
                'He became tribune of the plebs'
            ],
            correct: 0,
            explanation: 'Cicero was forced into exile in 58 BC. Clodius also had his house on the Palatine destroyed and the site consecrated as a shrine to Liberty, adding religious insult to political injury.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'Sort these events into the correct chronological order:',
            items: ['Bona Dea scandal', 'Clodius becomes tribune', 'Cicero exiled', 'Clodius adopted into plebeian family'],
            categories: {
                'First (62 BC)': ['Bona Dea scandal'],
                'Second (59 BC)': ['Clodius adopted into plebeian family'],
                'Third (58 BC - early)': ['Clodius becomes tribune'],
                'Fourth (58 BC - later)': ['Cicero exiled']
            },
            explanation: 'The Bona Dea scandal (62 BC) created the enmity between Cicero and Clodius. Caesar facilitated Clodius\'s adoption (59 BC), then as tribune (58 BC) Clodius exiled Cicero.'
        },

        // Topic 4.4 - The 50s BC Breakdown
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What was the Conference of Luca (56 BC)?',
            correctAnswers: ['triumvirate renewed', 'triumvirs met'],
            acceptableVariations: ['triumvirate meeting', 'triumvirs renewed alliance', 'caesar pompey crassus met', 'renewal of triumvirate'],
            explanation: 'The Conference of Luca in 56 BC was a meeting where the triumvirs renewed their alliance, agreeing that Pompey and Crassus would be consuls in 55 BC and that Caesar\'s command in Gaul would be extended.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What command did Crassus receive after the Conference of Luca?',
            choices: [
                'Command against Parthia (Syria)',
                'Command in Gaul',
                'Command in Spain',
                'Command in Egypt'
            ],
            correct: 0,
            explanation: 'Crassus received command of Syria and the war against Parthia, seeking military glory to match Pompey\'s achievements. This campaign would end in disaster at Carrhae.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'In what year and where did Crassus die?',
            correctAnswers: ['53 bc carrhae', '53 carrhae'],
            acceptableVariations: ['53 bc', 'carrhae', '53 bc at carrhae', 'battle of carrhae'],
            explanation: 'Crassus was killed at the Battle of Carrhae in 53 BC, a catastrophic defeat against the Parthians. His death removed one of the three triumvirs and destabilised the alliance.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What personal tragedy weakened the bond between Caesar and Pompey?',
            correctAnswers: ['julia died', 'death of julia'],
            acceptableVariations: ['julia died', 'death of julia', 'julia\'s death', 'caesar\'s daughter died'],
            explanation: 'Julia, Caesar\'s daughter and Pompey\'s wife, died in childbirth in 54 BC. Her death removed the personal bond that had cemented the alliance between Caesar and Pompey.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What unprecedented position was Pompey given in 52 BC?',
            choices: [
                'Sole consul (consul sine collega)',
                'Dictator for life',
                'Permanent tribune',
                'King of Rome'
            ],
            correct: 0,
            explanation: 'After Clodius was killed and Rome descended into chaos, Pompey was appointed sole consul (consul sine collega) in 52 BC - an unprecedented position that showed his dominance and the Senate\'s desperation.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'Who killed Clodius and in what year?',
            correctAnswers: ['milo 52 bc', 'milo'],
            acceptableVariations: ['milo', 'titus annius milo', '52 bc', 'milo killed clodius'],
            explanation: 'Titus Annius Milo killed Clodius in a street fight on the Via Appia in 52 BC. The resulting riots led to the burning of the Senate house and Pompey\'s appointment as sole consul.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'Complete this passage about the breakdown of the 50s:',
            gapText: 'The triumvirate began to collapse after the death of ___ in 54 BC and ___ at Carrhae in 53 BC. In 52 BC, ___ killed Clodius, causing riots that led to ___ becoming sole consul. By the end of the 50s, Caesar and Pompey were on a collision course.',
            correctGaps: ['Julia', 'Crassus', 'Milo', 'Pompey'],
            acceptableGaps: [
                ['Julia', 'julia'],
                ['Crassus', 'crassus'],
                ['Milo', 'milo'],
                ['Pompey', 'pompey']
            ],
            explanation: 'The deaths of Julia and Crassus removed the bonds holding the triumvirate together, while political violence in Rome pushed Pompey toward the Senate and away from Caesar.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What was the key issue in the dispute between Caesar and the Senate in 50-49 BC?',
            choices: [
                'When Caesar should give up his command and return to Rome',
                'Whether Caesar should be given Egypt',
                'Who should be appointed dictator',
                'Whether Pompey should marry Caesar\'s niece'
            ],
            correct: 0,
            explanation: 'The key dispute was whether Caesar could transition directly from his Gallic command to a second consulship (maintaining immunity from prosecution) or whether he must return as a private citizen and face trial for his illegal acts as consul in 59 BC.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What did the Senate pass on 7 January 49 BC?',
            correctAnswers: ['senatus consultum ultimum', 'scu'],
            acceptableVariations: ['senatus consultum ultimum', 'scu', 'final decree', 'ultimate decree', 'emergency decree'],
            explanation: 'The Senate passed the senatus consultum ultimum (final decree of the Senate), the emergency measure that authorised magistrates to use any means necessary to defend the state - effectively a declaration of war against Caesar.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What river did Caesar cross to start the civil war, and what phrase did he reportedly say?',
            correctAnswers: ['rubicon', 'alea iacta est'],
            acceptableVariations: ['rubicon', 'the rubicon', 'die is cast', 'alea iacta est', 'the die is cast'],
            explanation: 'Caesar crossed the Rubicon River on 10 January 49 BC, reportedly saying "alea iacta est" (the die is cast). Crossing this boundary with his army was treason and started the civil war.'
        },
        {
            type: 'scenario',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'It is 50 BC. Caesar offers to disband his army if Pompey disbands his. The Senate refuses and demands Caesar give up his command immediately. From Caesar\'s perspective, why was this unfair?',
            choices: [
                'It would leave him vulnerable to prosecution while Pompey retained power',
                'He had more legions than Pompey',
                'The Senate had no authority over provincial commands',
                'Pompey\'s army was already disbanded'
            ],
            correct: 0,
            explanation: 'Caesar\'s concern was legitimate: without his command, he would be a private citizen vulnerable to prosecution for his illegal acts in 59 BC, while Pompey (with his command) would dominate Roman politics.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'Sort these events that led to civil war into chronological order:',
            items: ['Death of Julia', 'Death of Crassus at Carrhae', 'Pompey becomes sole consul', 'Caesar crosses the Rubicon'],
            categories: {
                'First (54 BC)': ['Death of Julia'],
                'Second (53 BC)': ['Death of Crassus at Carrhae'],
                'Third (52 BC)': ['Pompey becomes sole consul'],
                'Fourth (49 BC)': ['Caesar crosses the Rubicon']
            },
            explanation: 'The sequence of events shows how the triumvirate collapsed: Julia\'s death (54 BC), Crassus\'s death (53 BC), Pompey\'s rise as sole consul (52 BC), and finally civil war (49 BC).'
        },

        // Additional comprehensive questions
        {
            type: 'multiple-choice',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'What term did the historian Varro use to describe the First Triumvirate?',
            choices: [
                'A three-headed monster',
                'The three kings',
                'The divine trio',
                'The new Senate'
            ],
            correct: 0,
            explanation: 'Varro called the First Triumvirate a "three-headed monster" (tricipitem), emphasising how this private alliance was seen as a threat to the traditional Republic.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'What was Caesar\'s position before becoming consul that he used to help Clodius?',
            correctAnswers: ['pontifex maximus'],
            acceptableVariations: ['pontifex maximus', 'chief priest', 'high priest'],
            explanation: 'As Pontifex Maximus (chief priest), Caesar oversaw religious matters and was able to facilitate Clodius\'s adoption from a patrician to a plebeian family.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What social reform did Clodius pass as tribune that was popular with the urban poor?',
            choices: [
                'Free grain distribution (frumentationes)',
                'Land redistribution to veterans',
                'Cancellation of all debts',
                'Extension of citizenship to all Italians'
            ],
            correct: 0,
            explanation: 'Clodius made the grain dole completely free (previously subsidised but not free), winning massive popular support from the urban poor and creating a loyal following.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'Who led the optimate opposition to Caesar in the Senate during the 50s BC?',
            correctAnswers: ['cato', 'cato the younger'],
            acceptableVariations: ['cato', 'cato the younger', 'marcus cato', 'marcus porcius cato'],
            explanation: 'Cato the Younger was the most determined optimate opponent of Caesar, consistently blocking compromises and pushing for Caesar to be stripped of his command.'
        },
        {
            type: 'scenario',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'A new senator asks why Pompey joined the First Triumvirate when he was already the most powerful man in Rome. What is the best explanation?',
            choices: [
                'The Senate had blocked his veterans\' land grants and his eastern settlements',
                'He wanted to become king',
                'Caesar promised him command of Gaul',
                'Crassus threatened to prosecute him'
            ],
            correct: 0,
            explanation: 'Despite his military prestige, Pompey had been politically frustrated by the Senate, which refused to ratify his eastern arrangements or provide land for his veterans. The triumvirate gave him the political allies he needed.'
        }
    ],

    'quick': [
        // Key concepts only for quick review
        {
            type: 'multiple-choice',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'Which three men formed the First Triumvirate in 60 BC?',
            choices: [
                'Caesar, Pompey, and Crassus',
                'Caesar, Cicero, and Cato',
                'Pompey, Sulla, and Marius',
                'Caesar, Brutus, and Cassius'
            ],
            correct: 0,
            explanation: 'The First Triumvirate was formed by Julius Caesar, Gnaeus Pompey Magnus, and Marcus Licinius Crassus.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'Who was Caesar\'s consular colleague in 59 BC?',
            correctAnswers: ['bibulus'],
            acceptableVariations: ['bibulus', 'marcus bibulus', 'marcus calpurnius bibulus'],
            explanation: 'Marcus Calpurnius Bibulus was Caesar\'s colleague but was so powerless that Romans joked it was "the consulship of Julius and Caesar".'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What scandal involved Clodius infiltrating a women-only religious ceremony?',
            correctAnswers: ['bona dea', 'bona dea scandal'],
            acceptableVariations: ['bona dea', 'bona dea scandal', 'good goddess scandal'],
            explanation: 'The Bona Dea scandal occurred when Clodius infiltrated the sacred women-only rites of the Good Goddess at Caesar\'s house.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'In what year and where did Crassus die?',
            correctAnswers: ['53 bc carrhae', '53 carrhae'],
            acceptableVariations: ['53 bc', 'carrhae', '53 bc at carrhae', 'battle of carrhae'],
            explanation: 'Crassus was killed at the Battle of Carrhae in 53 BC against the Parthians.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What unprecedented position was Pompey given in 52 BC?',
            choices: [
                'Sole consul (consul sine collega)',
                'Dictator for life',
                'Permanent tribune',
                'King of Rome'
            ],
            correct: 0,
            explanation: 'Pompey was appointed sole consul in 52 BC after Clodius\'s death caused chaos in Rome.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What river did Caesar cross to start the civil war?',
            correctAnswers: ['rubicon'],
            acceptableVariations: ['rubicon', 'the rubicon', 'rubicon river'],
            explanation: 'Caesar crossed the Rubicon River on 10 January 49 BC, starting the civil war.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What happened to Cicero as a result of Clodius\'s tribunate?',
            correctAnswers: ['exile', 'exiled'],
            acceptableVariations: ['exile', 'exiled', 'banished', 'forced into exile'],
            explanation: 'Clodius passed a law exiling anyone who had executed citizens without trial, forcing Cicero into exile.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'Whose death in 54 BC weakened the bond between Caesar and Pompey?',
            correctAnswers: ['julia'],
            acceptableVariations: ['julia', 'julia\'s', 'caesar\'s daughter'],
            explanation: 'Julia, Caesar\'s daughter and Pompey\'s wife, died in 54 BC, removing the personal bond between the two men.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'Why was the First Triumvirate dangerous to the Republic?',
            choices: [
                'It was a private alliance that bypassed constitutional channels',
                'It was approved by the Senate',
                'It gave power to the tribunes',
                'It strengthened traditional institutions'
            ],
            correct: 0,
            explanation: 'The First Triumvirate was a private, secret alliance that bypassed constitutional procedures.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'Which province(s) did Caesar receive after his consulship?',
            correctAnswers: ['gaul'],
            acceptableVariations: ['gaul', 'cisalpine gaul', 'transalpine gaul', 'gallia'],
            explanation: 'Caesar received Cisalpine Gaul, Transalpine Gaul, and Illyricum for five years.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'Who killed Clodius in 52 BC?',
            correctAnswers: ['milo'],
            acceptableVariations: ['milo', 'titus annius milo'],
            explanation: 'Titus Annius Milo killed Clodius in a street fight on the Via Appia in 52 BC.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'What was the Conference of Luca (56 BC)?',
            correctAnswers: ['triumvirate renewed', 'triumvirs met'],
            acceptableVariations: ['triumvirate meeting', 'renewal', 'triumvirs renewed alliance'],
            explanation: 'The Conference of Luca renewed the triumvirate\'s alliance and distributed commands among the three men.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'How did Caesar pass his legislation despite Senate opposition?',
            choices: [
                'He took it directly to the popular assembly',
                'He bribed the Senate',
                'He waited for Senate approval',
                'He modified it to satisfy optimates'
            ],
            correct: 0,
            explanation: 'Caesar bypassed the Senate entirely and took legislation directly to the popular assembly.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What decree did the Senate pass on 7 January 49 BC?',
            correctAnswers: ['senatus consultum ultimum', 'scu'],
            acceptableVariations: ['senatus consultum ultimum', 'scu', 'final decree', 'emergency decree'],
            explanation: 'The Senate passed the senatus consultum ultimum, effectively declaring war on Caesar.'
        }
    ],

    'detailed': [
        // More specific lesson content questions
        {
            type: 'text-flexible',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'What did each triumvir want from the alliance? Name one goal for each man.',
            correctAnswers: ['pompey veterans caesar consulship crassus contracts'],
            acceptableVariations: ['pompey land', 'caesar consul', 'crassus publicani', 'veterans consulship contracts'],
            explanation: 'Pompey wanted land for his veterans and ratification of his eastern settlements; Caesar wanted the consulship and a provincial command; Crassus wanted relief for the publicani tax contractors.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'How was the First Triumvirate cemented personally?',
            choices: [
                'Pompey married Caesar\'s daughter Julia',
                'Caesar married Pompey\'s sister',
                'Crassus adopted Caesar',
                'They swore an oath in the Temple of Jupiter'
            ],
            correct: 0,
            explanation: 'The alliance was cemented by the marriage of Pompey to Julia, Caesar\'s daughter, creating a family bond between the two most powerful triumvirs.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'What religious technique did Bibulus use to try to obstruct Caesar\'s legislation?',
            correctAnswers: ['spectio', 'watching skies'],
            acceptableVariations: ['spectio', 'watching the skies', 'obnuntiatio', 'sky watching', 'religious obstruction'],
            explanation: 'Bibulus used spectio (watching the skies for unfavourable omens), which should have invalidated any public business conducted while he was observing.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'What did Caesar do when Cato tried to obstruct his legislation in the Senate?',
            correctAnswers: ['had him dragged out', 'removed cato'],
            acceptableVariations: ['dragged out', 'removed', 'arrested', 'had him removed', 'dragged cato'],
            explanation: 'Caesar had Cato physically dragged from the Senate, showing his willingness to use force against constitutional opposition.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'What law gave Caesar his provincial command?',
            choices: [
                'Lex Vatinia',
                'Lex Julia Agraria',
                'Lex Clodia',
                'Lex Pompeia'
            ],
            correct: 0,
            explanation: 'The Lex Vatinia, passed by the tribune Vatinius, gave Caesar command of Cisalpine Gaul, Transalpine Gaul, and Illyricum for five years.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'Why did Clodius need to be adopted into a plebeian family?',
            correctAnswers: ['become tribune', 'tribune plebs'],
            acceptableVariations: ['to become tribune', 'tribune of the plebs', 'only plebeians tribunes', 'run for tribune'],
            explanation: 'Only plebeians could hold the tribunate. As a patrician, Clodius needed to undergo transitio ad plebem (adoption into a plebeian family) to become eligible for this powerful office.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What happened to Cicero\'s house on the Palatine after his exile?',
            choices: [
                'It was destroyed and the site consecrated as a shrine to Liberty',
                'It was given to Clodius as a reward',
                'It was preserved as a public museum',
                'It was converted into a temple to Jupiter'
            ],
            correct: 0,
            explanation: 'Clodius had Cicero\'s house destroyed and the site consecrated as a shrine to Libertas (Liberty), making it illegal to rebuild - a deliberate religious insult.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'What was Clodius\'s relationship to the Claudii family?',
            correctAnswers: ['patrician claudii', 'claudius pulcher'],
            acceptableVariations: ['patrician', 'claudii family', 'noble family', 'ancient patrician family', 'claudius pulcher'],
            explanation: 'Clodius was born Publius Claudius Pulcher, from one of Rome\'s most ancient patrician families. He deliberately adopted a plebeian spelling of his name (Clodius) to emphasise his popularis politics.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'Complete this passage about the road to civil war:',
            gapText: 'In 52 BC, ___ was killed by Milo on the ___ Appia. The resulting riots led to the ___ house being burned. The Senate appointed ___ as sole consul to restore order.',
            correctGaps: ['Clodius', 'Via', 'Senate', 'Pompey'],
            acceptableGaps: [
                ['Clodius', 'clodius'],
                ['Via', 'via', 'Appian Way'],
                ['Senate', 'senate', 'curia'],
                ['Pompey', 'pompey']
            ],
            explanation: 'The killing of Clodius by Milo sparked riots in which Clodius\'s followers burned the Senate house (Curia Hostilia), leading to Pompey\'s unprecedented appointment.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'Why did Caesar fear returning to Rome as a private citizen?',
            choices: [
                'He could be prosecuted for his illegal acts as consul in 59 BC',
                'He owed money to Roman bankers',
                'Pompey had threatened to kill him',
                'The Senate had confiscated his property'
            ],
            correct: 0,
            explanation: 'Caesar knew that as a private citizen without the protection of office, he would face prosecution for his unconstitutional actions as consul - particularly ignoring religious obstruction and using violence.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What phrase did Caesar reportedly say when crossing the Rubicon?',
            correctAnswers: ['alea iacta est', 'die is cast'],
            acceptableVariations: ['alea iacta est', 'the die is cast', 'die is cast', 'let the die be cast'],
            explanation: 'Caesar reportedly said "alea iacta est" (the die is cast), acknowledging that his decision to cross the Rubicon with his army was irrevocable and would lead to civil war.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What happened at the Battle of Carrhae in 53 BC?',
            choices: [
                'Crassus and most of his army were killed by the Parthians',
                'Caesar defeated the Gauls',
                'Pompey conquered the East',
                'Clodius was killed by Milo'
            ],
            correct: 0,
            explanation: 'Carrhae was a catastrophic defeat in which Crassus and most of his army were killed by Parthian cavalry, including the capture of the Roman eagle standards - a national humiliation.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'How long was Caesar\'s Gallic command extended at the Conference of Luca?',
            correctAnswers: ['five years', '5 years'],
            acceptableVariations: ['five years', '5 years', 'another five years', 'five more years'],
            explanation: 'At Luca, Caesar\'s command was extended for another five years (until 50 BC), giving him time to complete his conquests and maintain his immunity from prosecution.'
        },
        {
            type: 'scenario',
            topic: 'Topic 4.2: Caesar\'s Consulship 59 BC',
            question: 'Bibulus declares spectio and retires to his house. Caesar holds the vote on his land law anyway. A lawyer asks whether the law is valid. What is the best legal argument against its validity?',
            choices: [
                'Religious obstruction should have prevented any public business',
                'The Senate had not approved the law',
                'Tribunes had not been consulted',
                'The voting took place at night'
            ],
            correct: 0,
            explanation: 'The strongest legal argument was that Bibulus\'s religious obstruction (spectio) should have invalidated any legislation passed while it was in effect. This argument would later be used to threaten Caesar with prosecution.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 4.3: Clodius and the Bona Dea Scandal',
            question: 'Who funded the bribery of the jury that acquitted Clodius?',
            choices: [
                'Crassus',
                'Caesar',
                'Pompey',
                'Cicero'
            ],
            correct: 0,
            explanation: 'Crassus largely funded the bribery that secured Clodius\'s acquittal, demonstrating the corruption of Roman courts and creating useful obligations.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'What two tribunes fled to Caesar after the Senate passed the senatus consultum ultimum?',
            correctAnswers: ['mark antony curio', 'antony curio'],
            acceptableVariations: ['antony and curio', 'mark antony', 'marcus antonius', 'curio', 'antony curio'],
            explanation: 'Mark Antony and Curio, tribunes who had supported Caesar, fled to him after the Senate passed the emergency decree, giving Caesar propaganda about the violation of tribunician sacrosanctity.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 4.1: The First Triumvirate',
            question: 'Match each triumvir with what they received from the Conference of Luca (56 BC):',
            items: ['Five-year extension of Gallic command', 'Consulship 55 BC plus Spain', 'Consulship 55 BC plus Syria/Parthia'],
            categories: {
                'Caesar': ['Five-year extension of Gallic command'],
                'Pompey': ['Consulship 55 BC plus Spain'],
                'Crassus': ['Consulship 55 BC plus Syria/Parthia']
            },
            explanation: 'At Luca, the triumvirs divided the Roman world: Caesar got his command extended, while Pompey and Crassus got the consulship of 55 BC and major provincial commands.'
        },
        {
            type: 'scenario',
            topic: 'Topic 4.4: The 50s BC Breakdown',
            question: 'It is 50 BC. A moderate senator proposes that both Caesar and Pompey should disband their armies simultaneously. The Senate votes 370-22 in favour. Why was this proposal never implemented?',
            choices: [
                'Hardliners led by Cato blocked compromise and demanded Caesar disband first',
                'Caesar refused to accept any compromise',
                'Pompey had already disbanded his army',
                'The tribunes vetoed the proposal'
            ],
            correct: 0,
            explanation: 'Despite overwhelming Senate support for mutual disarmament, optimate hardliners led by Cato refused any compromise that did not require Caesar to surrender his command first, pushing the Republic toward civil war.'
        }
    ]
};

// Load the question bank into the global scope
if (typeof window !== 'undefined') {
    window.questionBank = questionBank;
}
