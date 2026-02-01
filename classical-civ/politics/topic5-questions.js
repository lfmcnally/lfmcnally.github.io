// Topic 5 Question Bank - Politics of the Late Republic
// Civil War and the Death of the Republic (49-44 BC)

const questionBank = {
    'comprehensive': [
        // Topic 5.1 - The Outbreak of Civil War
        {
            type: 'text-flexible',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'What river did Caesar cross in January 49 BC to begin the civil war?',
            correctAnswers: ['rubicon', 'the rubicon'],
            acceptableVariations: ['rubicon river', 'the rubicon river'],
            explanation: 'Caesar crossed the Rubicon River on 10 January 49 BC. This small river marked the boundary between Cisalpine Gaul and Italy proper, and crossing it with an army was an act of war against the Roman state.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'What famous phrase did Caesar reportedly say when crossing the Rubicon?',
            correctAnswers: ['alea iacta est', 'the die is cast'],
            acceptableVariations: ['alea iacta est', 'the die is cast', 'let the die be cast', 'iacta alea est'],
            explanation: 'Caesar reportedly declared "alea iacta est" (the die is cast), indicating there was no turning back. This phrase has become proverbial for an irreversible decision.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'What was the main constitutional issue that led to the outbreak of civil war?',
            choices: [
                'The Senate demanded Caesar disband his army before returning to Rome',
                'Caesar wanted to abolish the consulship',
                'Pompey refused to share power with Caesar',
                'The tribunes blocked all legislation in Rome'
            ],
            correct: 0,
            explanation: 'The Senate, led by hardliners like Cato, demanded that Caesar disband his legions before returning to Rome. This would leave Caesar vulnerable to prosecution and political destruction.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'Which two tribunes fled to Caesar after being expelled from Rome?',
            correctAnswers: ['mark antony', 'curio'],
            acceptableVariations: ['antony and curio', 'mark antony and curio', 'marcus antonius', 'gaius scribonius curio', 'antony curio'],
            explanation: 'Mark Antony and Gaius Scribonius Curio were tribunes who supported Caesar. When the Senate passed the Senatus Consultum Ultimum, they fled to Caesar, giving him a propaganda victory.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'Why did Caesar claim he was starting the civil war?',
            choices: [
                'To defend the rights of tribunes and his own dignitas',
                'To become king of Rome',
                'To punish Pompey for betraying him',
                'To avenge the death of his daughter Julia'
            ],
            correct: 0,
            explanation: 'Caesar claimed he was fighting to defend the sacred rights of tribunes (who had been expelled) and to protect his own dignitas (honour/reputation) from enemies who would destroy him if he returned without his army.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'What emergency decree did the Senate pass that triggered the tribunes to flee?',
            correctAnswers: ['senatus consultum ultimum', 'scu'],
            acceptableVariations: ['senatus consultum ultimum', 'scu', 'ultimate decree', 'final decree', 'emergency decree'],
            explanation: 'The Senate passed the Senatus Consultum Ultimum (Final Decree of the Senate) on 7 January 49 BC, effectively declaring martial law and authorising force against Caesar.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'Why did Pompey initially underestimate the threat from Caesar?',
            choices: [
                'He believed his veterans would rally to him and that he could raise new legions easily',
                'He thought Caesar would negotiate for peace',
                'He had more legions stationed in Italy',
                'He expected the gods to intervene on his behalf'
            ],
            correct: 0,
            explanation: 'Pompey famously boasted he had only to stamp his foot to summon legions. He underestimated Caesar\'s speed and the loyalty of his veteran troops compared to hastily raised levies.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'Complete this passage about the outbreak of civil war:',
            gapText: 'Caesar crossed the ___ River on 10 January ___ BC. The Senate had passed the ___ authorising force against him. Caesar claimed he was defending the rights of the ___ who had been expelled from Rome.',
            correctGaps: ['Rubicon', '49', 'Senatus Consultum Ultimum', 'tribunes'],
            acceptableGaps: [
                ['Rubicon'],
                ['49'],
                ['Senatus Consultum Ultimum', 'SCU', 'emergency decree'],
                ['tribunes', 'tribune']
            ],
            explanation: 'These events marked the formal beginning of the civil war between Caesar and the Senatorial forces led by Pompey.'
        },

        // Topic 5.2 - The War Itself
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'To which region did Pompey and the Senate evacuate when Caesar rapidly advanced on Rome?',
            correctAnswers: ['greece', 'macedonia'],
            acceptableVariations: ['greece', 'macedonia', 'the east', 'eastern provinces', 'balkans'],
            explanation: 'Pompey decided not to defend Rome but to withdraw to Greece, where he could gather his eastern forces and veterans. He controlled the sea and had vast resources in the eastern provinces.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.2: The War Itself',
            question: 'Which Spanish campaign did Caesar conduct before pursuing Pompey to Greece?',
            choices: [
                'The campaign against Pompey\'s legates Afranius and Petreius',
                'The siege of Numantia',
                'The conquest of Lusitania',
                'The war against Sertorius'
            ],
            correct: 0,
            explanation: 'Caesar first secured Spain by defeating Pompey\'s legates Afranius and Petreius at Ilerda. He famously said he would first defeat an army without a general, then a general without an army.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'Name the decisive battle fought in Greece in 48 BC where Caesar defeated Pompey.',
            correctAnswers: ['pharsalus', 'battle of pharsalus'],
            acceptableVariations: ['pharsalus', 'battle of pharsalus', 'pharsalia'],
            explanation: 'The Battle of Pharsalus (9 August 48 BC) was the decisive engagement of the civil war. Despite being outnumbered, Caesar\'s veterans defeated Pompey\'s larger but less experienced army.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.2: The War Itself',
            question: 'What happened to Pompey after his defeat at Pharsalus?',
            choices: [
                'He fled to Egypt where he was murdered by advisors to Ptolemy XIII',
                'He was captured and pardoned by Caesar',
                'He escaped to Spain and raised a new army',
                'He committed suicide on the battlefield'
            ],
            correct: 0,
            explanation: 'Pompey fled to Egypt seeking refuge with Ptolemy XIII. Instead, Ptolemy\'s advisors murdered him, hoping to gain Caesar\'s favour. Caesar reportedly wept when shown Pompey\'s head.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'What was Caesar\'s famous policy toward defeated enemies?',
            correctAnswers: ['clementia', 'clemency'],
            acceptableVariations: ['clementia', 'clemency', 'mercy', 'pardon'],
            explanation: 'Caesar practised clementia (clemency), pardoning defeated enemies rather than executing them. This was politically astute but created resentment among those who felt obligated to a tyrant.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 5.2: The War Itself',
            question: 'Match each campaign with its location:',
            items: ['Defeat of Afranius and Petreius', 'Battle of Pharsalus', 'Siege of Alexandria', 'Battle of Thapsus'],
            categories: {
                'Spain': ['Defeat of Afranius and Petreius'],
                'Greece': ['Battle of Pharsalus'],
                'Egypt': ['Siege of Alexandria'],
                'Africa': ['Battle of Thapsus']
            },
            explanation: 'Caesar fought across the Mediterranean world: Spain (49 BC), Greece (48 BC), Egypt (48-47 BC), and Africa (46 BC) before his final Spanish campaign in 45 BC.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'Which Egyptian queen did Caesar become involved with during his time in Alexandria?',
            correctAnswers: ['cleopatra', 'cleopatra vii'],
            acceptableVariations: ['cleopatra', 'cleopatra vii', 'cleopatra of egypt'],
            explanation: 'Caesar became romantically involved with Cleopatra VII and supported her claim to the Egyptian throne against her brother Ptolemy XIII. She later bore him a son, Caesarion.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.2: The War Itself',
            question: 'What phrase did Caesar use to describe his quick victory in Pontus?',
            choices: [
                'Veni, vidi, vici (I came, I saw, I conquered)',
                'Alea iacta est (The die is cast)',
                'Tu quoque, Brute (You too, Brutus)',
                'Gallia est omnis divisa (All Gaul is divided)'
            ],
            correct: 0,
            explanation: 'After defeating Pharnaces II of Pontus at the Battle of Zela in 47 BC, Caesar sent the famous three-word message to Rome: "Veni, vidi, vici" (I came, I saw, I conquered).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'Name the battle in Africa (46 BC) where Caesar defeated the remaining Pompeian forces.',
            correctAnswers: ['thapsus', 'battle of thapsus'],
            acceptableVariations: ['thapsus', 'battle of thapsus'],
            explanation: 'The Battle of Thapsus (46 BC) in North Africa saw Caesar decisively defeat the Pompeian forces led by Metellus Scipio. This campaign led to Cato\'s famous suicide at Utica.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'What was the final major battle of the civil war, fought in Spain in 45 BC?',
            correctAnswers: ['munda', 'battle of munda'],
            acceptableVariations: ['munda', 'battle of munda'],
            explanation: 'The Battle of Munda (45 BC) was the bloodiest battle of the civil war and the final defeat of the Pompeian cause. Caesar reportedly said it was the first time he had fought for his life.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.2: The War Itself',
            question: 'Who were Pompey\'s sons that continued resistance after their father\'s death?',
            choices: [
                'Gnaeus and Sextus Pompey',
                'Marcus and Quintus Pompey',
                'Lucius and Gaius Pompey',
                'Titus and Publius Pompey'
            ],
            correct: 0,
            explanation: 'Gnaeus and Sextus Pompey continued fighting after their father\'s death. Gnaeus died after Munda, but Sextus survived and later became a major threat to the Second Triumvirate.'
        },

        // Topic 5.3 - Cato's Suicide
        {
            type: 'text-flexible',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'In which African city did Cato commit suicide?',
            correctAnswers: ['utica'],
            acceptableVariations: ['utica', 'city of utica'],
            explanation: 'Cato committed suicide at Utica in April 46 BC rather than accept Caesar\'s pardon. He became known afterwards as "Cato Uticensis" (Cato of Utica).'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'Why did Cato refuse to accept Caesar\'s offer of clemency?',
            choices: [
                'He believed accepting pardon from a tyrant would validate tyranny',
                'He feared Caesar would execute him anyway',
                'He wanted to become a martyr for the Republic',
                'Caesar had killed his family members'
            ],
            correct: 0,
            explanation: 'Cato refused clemency on principle. He argued that Caesar had no right to pardon him since Caesar was the criminal who had attacked the Republic. Accepting pardon would legitimise tyranny.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'What philosophical school did Cato follow, which influenced his decision to commit suicide?',
            correctAnswers: ['stoicism', 'stoic'],
            acceptableVariations: ['stoicism', 'stoic', 'stoic philosophy', 'the stoics'],
            explanation: 'Cato was a devoted Stoic. Stoicism taught that death was preferable to a dishonourable life and that suicide was acceptable when one could no longer live virtuously.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'What did Cato reportedly read on his final night before his suicide?',
            choices: [
                'Plato\'s Phaedo (on the immortality of the soul)',
                'Homer\'s Iliad',
                'Cicero\'s speeches against Catiline',
                'Caesar\'s Gallic War commentaries'
            ],
            correct: 0,
            explanation: 'Cato spent his final night reading Plato\'s Phaedo, a dialogue about the immortality of the soul and Socrates\' death. This reinforced his philosophical preparation for death.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'How did Cato die?',
            correctAnswers: ['stabbed himself', 'fell on his sword'],
            acceptableVariations: ['stabbed himself', 'fell on his sword', 'sword', 'disemboweled himself', 'stabbed his stomach'],
            explanation: 'Cato stabbed himself with his sword. When physicians tried to save him by stitching his wound, he tore it open again with his bare hands, determined to die rather than live under Caesar.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'How did Caesar respond to Cato\'s death?',
            choices: [
                'He reportedly said he envied Cato his death since Cato had denied him the chance to pardon him',
                'He ordered a public funeral in Rome',
                'He praised Cato as a true Roman hero',
                'He ignored it and continued his campaign'
            ],
            correct: 0,
            explanation: 'Caesar reportedly said he grudged Cato his death, since Cato had denied Caesar the glory of showing clemency. Caesar later wrote a work attacking Cato\'s character (the "Anti-Cato").'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'Who wrote a eulogy praising Cato that circulated widely after his death?',
            correctAnswers: ['cicero'],
            acceptableVariations: ['cicero', 'marcus tullius cicero', 'm cicero'],
            explanation: 'Cicero wrote a work praising Cato that made him a martyr for the Republic. This prompted Caesar to write his "Anti-Cato" in response, defending his own actions.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'Complete this passage about Cato\'s death:',
            gapText: 'Cato committed suicide at ___ in 46 BC. As a ___, he believed death was preferable to living under tyranny. He spent his final night reading Plato\'s ___. Caesar said he ___ Cato his death.',
            correctGaps: ['Utica', 'Stoic', 'Phaedo', 'envied'],
            acceptableGaps: [
                ['Utica'],
                ['Stoic', 'Stoic philosopher'],
                ['Phaedo'],
                ['envied', 'grudged']
            ],
            explanation: 'Cato\'s suicide became legendary, representing principled resistance to tyranny and making him a symbol for Republicans.'
        },
        {
            type: 'scenario',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'A defeated general is offered clemency by a victorious enemy who he considers an unconstitutional tyrant. Following Cato\'s example, what would be the principled Stoic response?',
            choices: [
                'Refuse the pardon and choose death rather than validate tyranny',
                'Accept pardon and work to restore the Republic from within',
                'Accept pardon and retire from politics',
                'Escape to a foreign kingdom and raise a new army'
            ],
            correct: 0,
            explanation: 'Cato\'s position was that accepting pardon from a tyrant legitimised tyranny. The virtuous choice was death, which allowed him to die free rather than live as a subject.'
        },

        // Topic 5.4 - Caesar's Dictatorship and Assassination
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What title did Caesar hold that gave him unprecedented power?',
            correctAnswers: ['dictator perpetuo', 'dictator for life'],
            acceptableVariations: ['dictator perpetuo', 'dictator for life', 'perpetual dictator', 'dictator in perpetuity'],
            explanation: 'In February 44 BC, Caesar was named "dictator perpetuo" (dictator for life), abandoning even the pretence of temporary emergency powers and making his rule permanent.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Which of these was NOT one of Caesar\'s reforms as dictator?',
            choices: [
                'Abolishing the Senate and ruling alone',
                'Reforming the calendar to 365 days with a leap year',
                'Granting citizenship to Cisalpine Gaul',
                'Establishing veteran colonies throughout the empire'
            ],
            correct: 0,
            explanation: 'Caesar did not abolish the Senate; he enlarged it to 900 members and packed it with his supporters. His genuine reforms included the calendar, citizenship extensions, and veteran settlements.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What calendar reform did Caesar implement that remains the basis of our calendar today?',
            correctAnswers: ['julian calendar'],
            acceptableVariations: ['julian calendar', 'the julian calendar', '365 day calendar', 'solar calendar'],
            explanation: 'Caesar reformed the Roman calendar from a lunar to a solar calendar of 365 days with a leap year every four years. The Julian calendar remained in use until the Gregorian reform of 1582.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What did many senators fear Caesar intended to become?',
            choices: [
                'King (rex)',
                'Emperor',
                'Consul for life',
                'High Priest for life'
            ],
            correct: 0,
            explanation: 'Romans had an ancient hatred of kingship (rex) dating back to the expulsion of the Tarquins in 509 BC. Caesar\'s accumulation of honours and permanent dictatorship fuelled fears he would become king.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'On what date was Caesar assassinated?',
            correctAnswers: ['ides of march', '15 march', 'march 15'],
            acceptableVariations: ['ides of march', '15 march', 'march 15', '15th march', '15 march 44 bc', 'ides of march 44 bc'],
            explanation: 'Caesar was assassinated on the Ides of March (15 March) 44 BC at a meeting of the Senate in the Theatre of Pompey.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Who were the two leading conspirators who organised Caesar\'s assassination?',
            correctAnswers: ['brutus cassius'],
            acceptableVariations: ['brutus and cassius', 'marcus brutus and gaius cassius', 'brutus cassius', 'm brutus', 'cassius longinus'],
            explanation: 'Marcus Junius Brutus and Gaius Cassius Longinus led the conspiracy. Brutus was particularly significant as Caesar had pardoned him and treated him almost as a son.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Why was Brutus\'s participation in the assassination particularly significant?',
            choices: [
                'Caesar had shown him great favour and some believed Brutus was his illegitimate son',
                'Brutus was the Pontifex Maximus',
                'Brutus commanded the largest army',
                'Brutus was next in line for the dictatorship'
            ],
            correct: 0,
            explanation: 'Caesar had pardoned Brutus after Pharsalus and made him praetor. Rumours suggested Brutus might be Caesar\'s son from an affair with his mother Servilia. His betrayal shocked Rome.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Where was Caesar assassinated?',
            correctAnswers: ['theatre of pompey', 'pompeys theatre'],
            acceptableVariations: ['theatre of pompey', 'pompeys theatre', 'pompeian theatre', 'curia of pompey', 'portico of pompey'],
            explanation: 'Caesar was killed in the Theatre of Pompey, specifically in a meeting hall attached to it. Ironically, he died at the foot of a statue of his former ally and enemy Pompey.'
        },
        {
            type: 'drag-drop',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Match Caesar\'s reforms with their descriptions:',
            items: ['Julian Calendar', 'Senate Expansion', 'Veteran Colonies', 'Public Works'],
            categories: {
                '365-day solar year with leap years': ['Julian Calendar'],
                'Increased membership to 900': ['Senate Expansion'],
                'Settlements for discharged soldiers': ['Veteran Colonies'],
                'Forum and basilica construction': ['Public Works']
            },
            explanation: 'Caesar implemented wide-ranging reforms during his dictatorship, from the calendar to infrastructure, settlement of veterans, and reorganisation of the Senate.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'How many senators participated in stabbing Caesar?',
            correctAnswers: ['23', 'twenty-three'],
            acceptableVariations: ['23', 'twenty-three', 'about 23', 'approximately 23', '60'],
            explanation: 'Ancient sources vary, but approximately 23 senators actively stabbed Caesar, while about 60 were part of the conspiracy. Caesar received 23 stab wounds.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What phrase did Caesar allegedly say when he saw Brutus among his assassins?',
            choices: [
                'Et tu, Brute? (You too, Brutus?) or Kai su, teknon? (You too, my child?)',
                'Alea iacta est (The die is cast)',
                'Veni, vidi, vici (I came, I saw, I conquered)',
                'Morituri te salutant (Those about to die salute you)'
            ],
            correct: 0,
            explanation: 'Ancient sources record Caesar saying either "Et tu, Brute?" or "Kai su, teknon?" (Greek for "You too, child?"). The Greek version suggests the rumours about Brutus being his son.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What name did the conspirators give themselves?',
            correctAnswers: ['liberators', 'liberatores'],
            acceptableVariations: ['liberators', 'liberatores', 'the liberators'],
            explanation: 'The conspirators called themselves "Liberatores" (Liberators), claiming they had freed Rome from tyranny and restored the Republic.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What major miscalculation did the conspirators make after killing Caesar?',
            choices: [
                'They had no plan for what to do next and failed to seize power',
                'They underestimated the number of guards around Caesar',
                'They trusted Mark Antony too much',
                'They failed to kill Caesar\'s adopted son'
            ],
            correct: 0,
            explanation: 'The conspirators had planned the assassination in detail but had no plan for afterwards. They naively believed the Republic would simply restore itself with Caesar gone.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Complete this passage about Caesar\'s assassination:',
            gapText: 'Caesar was killed on the ___ of March, 44 BC. The conspiracy was led by ___ and Cassius. Caesar was stabbed ___ times. The conspirators called themselves the ___.',
            correctGaps: ['Ides', 'Brutus', '23', 'Liberators'],
            acceptableGaps: [
                ['Ides', '15th'],
                ['Brutus', 'Marcus Brutus'],
                ['23', 'twenty-three'],
                ['Liberators', 'Liberatores']
            ],
            explanation: 'The assassination of Caesar on the Ides of March is one of the most famous events in Roman history, but it failed to restore the Republic.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Who delivered a famous funeral oration for Caesar that turned public opinion against the conspirators?',
            correctAnswers: ['mark antony', 'antony'],
            acceptableVariations: ['mark antony', 'antony', 'marcus antonius', 'm antony'],
            explanation: 'Mark Antony\'s funeral speech for Caesar inflamed the Roman mob against the conspirators. Shakespeare\'s "Friends, Romans, countrymen" is a famous literary interpretation of this speech.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What was the immediate result of Caesar\'s assassination for the conspirators?',
            choices: [
                'They had to flee Rome when the mob turned against them',
                'They were immediately arrested and executed',
                'They were declared heroes and given honours',
                'They successfully took control of the government'
            ],
            correct: 0,
            explanation: 'After Antony\'s funeral oration, the Roman mob turned against the "Liberators," forcing them to flee Rome. Far from restoring the Republic, the assassination led to more civil wars.'
        },
        {
            type: 'scenario',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'A leader accumulates permanent powers, reforms the government, pardons enemies, and is suspected of wanting to be king. His former friends assassinate him, claiming to restore liberty. Based on the pattern of Caesar\'s death, what is the likely outcome?',
            choices: [
                'More civil war as various factions compete for power',
                'Peaceful restoration of the previous government',
                'The assassins establish a new stable government',
                'Foreign powers invade to restore order'
            ],
            correct: 0,
            explanation: 'Caesar\'s assassination did not restore the Republic but triggered another round of civil wars. The lesson: removing a strongman without a viable alternative often leads to chaos.'
        }
    ],

    'quick': [
        // Key concepts for quick review - 15 questions
        {
            type: 'text-flexible',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'What river did Caesar cross to start the civil war?',
            correctAnswers: ['rubicon'],
            acceptableVariations: ['rubicon', 'the rubicon', 'rubicon river'],
            explanation: 'Caesar crossed the Rubicon River on 10 January 49 BC, beginning the civil war.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'What phrase means "the die is cast"?',
            correctAnswers: ['alea iacta est'],
            acceptableVariations: ['alea iacta est', 'iacta alea est'],
            explanation: 'Caesar reportedly said "alea iacta est" when crossing the Rubicon, indicating there was no turning back.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'Why did the Senate demand Caesar disband his army?',
            choices: [
                'To leave him vulnerable to prosecution when he returned to Rome',
                'To strengthen the eastern frontier',
                'To punish him for his failure in Gaul',
                'To honour traditional religious customs'
            ],
            correct: 0,
            explanation: 'Caesar\'s enemies wanted him to return without military protection so they could prosecute him for alleged crimes during his consulship.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'Name the decisive battle in Greece where Caesar defeated Pompey.',
            correctAnswers: ['pharsalus'],
            acceptableVariations: ['pharsalus', 'battle of pharsalus', 'pharsalia'],
            explanation: 'The Battle of Pharsalus (48 BC) was Caesar\'s decisive victory over Pompey.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.2: The War Itself',
            question: 'What happened to Pompey after Pharsalus?',
            choices: [
                'He was murdered in Egypt',
                'He escaped to Spain',
                'He was captured and executed by Caesar',
                'He committed suicide'
            ],
            correct: 0,
            explanation: 'Pompey fled to Egypt where he was murdered by advisors to Ptolemy XIII.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'What policy did Caesar follow toward defeated enemies?',
            correctAnswers: ['clementia', 'clemency'],
            acceptableVariations: ['clementia', 'clemency', 'mercy'],
            explanation: 'Caesar practised clementia (clemency), pardoning enemies rather than killing them.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'In which city did Cato commit suicide?',
            correctAnswers: ['utica'],
            acceptableVariations: ['utica'],
            explanation: 'Cato committed suicide at Utica in 46 BC rather than accept Caesar\'s pardon.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'What philosophy influenced Cato\'s decision to die rather than accept pardon?',
            choices: [
                'Stoicism',
                'Epicureanism',
                'Platonism',
                'Cynicism'
            ],
            correct: 0,
            explanation: 'Cato was a Stoic who believed death was preferable to living dishonourably under tyranny.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'What work by Plato did Cato read on his final night?',
            correctAnswers: ['phaedo'],
            acceptableVariations: ['phaedo', 'the phaedo'],
            explanation: 'Cato read Plato\'s Phaedo, about Socrates\' death and the immortality of the soul.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What title meant "dictator for life"?',
            correctAnswers: ['dictator perpetuo'],
            acceptableVariations: ['dictator perpetuo', 'dictator in perpetuity', 'perpetual dictator'],
            explanation: 'Caesar was named "dictator perpetuo" in February 44 BC, making his power permanent.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'On what date was Caesar assassinated?',
            correctAnswers: ['ides of march'],
            acceptableVariations: ['ides of march', '15 march', 'march 15', '15th march'],
            explanation: 'Caesar was killed on the Ides of March (15 March) 44 BC.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Name the two leading conspirators who killed Caesar.',
            correctAnswers: ['brutus cassius'],
            acceptableVariations: ['brutus and cassius', 'brutus cassius', 'marcus brutus cassius'],
            explanation: 'Brutus and Cassius led the conspiracy to assassinate Caesar.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Where was Caesar killed?',
            choices: [
                'Theatre of Pompey',
                'Roman Forum',
                'Senate House (Curia)',
                'Temple of Jupiter'
            ],
            correct: 0,
            explanation: 'Caesar was killed in the Theatre of Pompey, ironically at the foot of Pompey\'s statue.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What did the conspirators call themselves?',
            correctAnswers: ['liberators', 'liberatores'],
            acceptableVariations: ['liberators', 'liberatores', 'the liberators'],
            explanation: 'The conspirators called themselves "Liberatores" (Liberators).'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What was the result of Caesar\'s assassination?',
            choices: [
                'More civil wars rather than restoration of the Republic',
                'Immediate restoration of the Republic',
                'The conspirators took power peacefully',
                'Rome was invaded by foreign enemies'
            ],
            correct: 0,
            explanation: 'Far from restoring the Republic, Caesar\'s death led to more civil wars and eventually the rule of Augustus.'
        }
    ],

    'detailed': [
        // More specific lesson content questions - 20 questions
        {
            type: 'text-flexible',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'What was the exact date Caesar crossed the Rubicon?',
            correctAnswers: ['10 january 49 bc'],
            acceptableVariations: ['10 january 49 bc', 'january 10 49 bc', '10 january', 'january 49 bc'],
            explanation: 'Caesar crossed the Rubicon on 10 January 49 BC, just days after the Senate passed the emergency decree.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'What did the Rubicon River represent as a boundary?',
            choices: [
                'The border between Cisalpine Gaul (Caesar\'s province) and Italy proper',
                'The border between Rome and enemy territory',
                'The sacred boundary of Rome (pomerium)',
                'The limit of senatorial authority'
            ],
            correct: 0,
            explanation: 'The Rubicon marked the boundary between Cisalpine Gaul and Italy. A general bringing troops across it into Italy was technically invading the Roman homeland.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'Name the conservative senator who led opposition to any compromise with Caesar.',
            correctAnswers: ['cato'],
            acceptableVariations: ['cato', 'marcus porcius cato', 'cato the younger', 'm cato'],
            explanation: 'Cato the Younger led the hardline faction that refused any compromise with Caesar, pushing for him to disband his army or be declared a public enemy.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 5.1: The Outbreak of Civil War',
            question: 'Complete this passage about negotiations before the war:',
            gapText: 'Caesar offered various compromises, including keeping only ___ legions and two provinces. The Senate\'s hardliners, led by ___, rejected all offers. On 7 January, the Senate passed the ___, and the tribunes ___ and Curio fled to Caesar.',
            correctGaps: ['two', 'Cato', 'Senatus Consultum Ultimum', 'Antony'],
            acceptableGaps: [
                ['two', '2'],
                ['Cato', 'Marcus Cato'],
                ['Senatus Consultum Ultimum', 'SCU', 'emergency decree'],
                ['Antony', 'Mark Antony', 'Marcus Antonius']
            ],
            explanation: 'These events show how both sides contributed to the breakdown of negotiations, though the hardliners\' refusal to compromise was particularly significant.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'Caesar said he would first defeat "an army without a general." Who commanded this army?',
            correctAnswers: ['afranius petreius'],
            acceptableVariations: ['afranius and petreius', 'afranius petreius', 'lucius afranius', 'marcus petreius'],
            explanation: 'Afranius and Petreius commanded Pompey\'s legions in Spain. Caesar defeated them at Ilerda before turning to face Pompey himself.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.2: The War Itself',
            question: 'How did Caesar\'s army reach Greece to fight Pompey?',
            choices: [
                'They crossed the Adriatic Sea despite Pompey\'s naval superiority',
                'They marched overland through Illyricum',
                'They waited for Pompey to return to Italy',
                'They used Egyptian ships provided by Cleopatra'
            ],
            correct: 0,
            explanation: 'Despite Pompey controlling the seas, Caesar boldly transported his army across the Adriatic in winter, taking a significant risk that paid off.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'Name the siege where Caesar was nearly defeated before Pharsalus.',
            correctAnswers: ['dyrrachium'],
            acceptableVariations: ['dyrrachium', 'siege of dyrrachium', 'dyrrhachium'],
            explanation: 'At Dyrrachium, Pompey\'s forces broke through Caesar\'s siege lines, nearly destroying his army. Caesar withdrew and Pompey pursued, leading to Pharsalus.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'Who was the Egyptian boy-king during Caesar\'s time in Alexandria?',
            correctAnswers: ['ptolemy xiii'],
            acceptableVariations: ['ptolemy xiii', 'ptolemy 13', 'ptolemy the thirteenth'],
            explanation: 'Ptolemy XIII was Cleopatra\'s brother and rival for the Egyptian throne. His advisors murdered Pompey, and he later drowned during the Alexandrian War.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.2: The War Itself',
            question: 'Who commanded the Pompeian forces at Thapsus after Pompey\'s death?',
            choices: [
                'Metellus Scipio and Cato',
                'Brutus and Cassius',
                'Gnaeus and Sextus Pompey',
                'Cicero and Cato'
            ],
            correct: 0,
            explanation: 'Metellus Scipio commanded the Pompeian army at Thapsus while Cato held Utica. After the defeat, Scipio was killed and Cato committed suicide.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.2: The War Itself',
            question: 'What king did Caesar defeat at the Battle of Zela, prompting "Veni, vidi, vici"?',
            correctAnswers: ['pharnaces ii'],
            acceptableVariations: ['pharnaces', 'pharnaces ii', 'pharnaces of pontus', 'pharnaces ii of pontus'],
            explanation: 'Pharnaces II of Pontus had invaded Roman territory. Caesar defeated him so quickly that he sent the famous three-word message to Rome.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'Complete this passage about Cato\'s final hours:',
            gapText: 'Cato dined with friends, discussing ___. He then retired to read ___\'s Phaedo. When he stabbed himself, ___ tried to save him, but he tore open his wounds with his bare hands.',
            correctGaps: ['philosophy', 'Plato', 'physicians'],
            acceptableGaps: [
                ['philosophy', 'Stoic philosophy', 'Stoicism'],
                ['Plato', 'Platos'],
                ['physicians', 'doctors', 'his doctor']
            ],
            explanation: 'Cato\'s death was carefully staged as a philosophical act, demonstrating Stoic principles about choosing death over dishonour.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'What did Cato ensure his companions did before his suicide?',
            choices: [
                'He arranged for their safe evacuation by sea',
                'He ordered them to continue fighting',
                'He made them swear to avenge him',
                'He divided his property among them'
            ],
            correct: 0,
            explanation: 'Cato selflessly arranged for his friends and soldiers to escape by sea before his suicide, showing concern for others even at the end.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.3: Cato\'s Suicide',
            question: 'What work did Caesar write attacking Cato after his death?',
            correctAnswers: ['anti-cato'],
            acceptableVariations: ['anti-cato', 'the anti-cato', 'anticato'],
            explanation: 'Caesar wrote the "Anti-Cato" in response to Cicero\'s eulogy praising Cato. Caesar tried to portray Cato negatively, but this only enhanced Cato\'s legend.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'How large did Caesar expand the Senate?',
            choices: [
                'To 900 members',
                'To 600 members',
                'To 1200 members',
                'To 300 members'
            ],
            correct: 0,
            explanation: 'Caesar expanded the Senate to 900 members, filling it with his supporters including men from the provinces. This diluted traditional senatorial influence.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What incident at the Lupercalia festival alarmed Republicans about Caesar\'s ambitions?',
            correctAnswers: ['crown', 'diadem'],
            acceptableVariations: ['crown', 'diadem', 'offered crown', 'mark antony offered crown', 'rejected crown'],
            explanation: 'At the Lupercalia in February 44 BC, Mark Antony offered Caesar a crown (diadem), which Caesar publicly refused. Many suspected this was a staged test of public opinion.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Who was Caesar\'s adopted heir named in his will?',
            correctAnswers: ['octavian', 'gaius octavius'],
            acceptableVariations: ['octavian', 'octavius', 'gaius octavius', 'augustus', 'gaius julius caesar octavianus'],
            explanation: 'Caesar\'s will adopted his great-nephew Gaius Octavius (later Augustus). Octavian would eventually defeat all rivals and become Rome\'s first emperor.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'What warning did a soothsayer give Caesar about the Ides of March?',
            choices: [
                'That he should beware that day',
                'That he would die in the Senate',
                'That Brutus would betray him',
                'That he should leave Rome'
            ],
            correct: 0,
            explanation: 'The soothsayer Spurinna warned Caesar to beware the Ides of March. According to tradition, Caesar dismissed the warning, saying the day had come without harm.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Which conspirator struck the first blow against Caesar?',
            correctAnswers: ['casca', 'servilius casca'],
            acceptableVariations: ['casca', 'servilius casca', 'publius servilius casca'],
            explanation: 'Servilius Casca struck the first blow, though he only wounded Caesar in the shoulder. Caesar initially resisted before being overwhelmed.'
        },
        {
            type: 'gap-fill',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'Complete this passage about the aftermath of the assassination:',
            gapText: 'The conspirators believed the ___ would simply restore itself. Instead, ___ turned the mob against them with his funeral speech. Caesar\'s will named ___ as his heir, who would eventually become Rome\'s first emperor.',
            correctGaps: ['Republic', 'Antony', 'Octavian'],
            acceptableGaps: [
                ['Republic', 'Roman Republic'],
                ['Antony', 'Mark Antony', 'Marcus Antonius'],
                ['Octavian', 'Octavius', 'Augustus']
            ],
            explanation: 'The conspirators\' naive belief that killing Caesar would restore the Republic was their greatest miscalculation.'
        },
        {
            type: 'scenario',
            topic: 'Topic 5.4: Caesar\'s Dictatorship and Assassination',
            question: 'A Roman citizen in 44 BC has been pardoned by Caesar and now holds office thanks to his patronage. He is approached by conspirators planning to kill Caesar. What would be the honourable Roman response according to traditional values?',
            choices: [
                'Warn Caesar, as gratitude (gratia) demanded loyalty to one\'s benefactor',
                'Join the conspiracy to restore the Republic',
                'Remain neutral and let events unfold',
                'Flee Rome to avoid involvement'
            ],
            correct: 0,
            explanation: 'Traditional Roman values emphasised gratia (gratitude) as a binding obligation. This is why Brutus\'s participation was so shocking - he had received great benefits from Caesar.'
        }
    ]
};

// Load the question bank into the global scope
if (typeof window !== 'undefined') {
    window.questionBank = questionBank;
}
