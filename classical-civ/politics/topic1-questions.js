// Topic 1 Question Bank - Politics of the Late Republic
// Save this as: topic1-questions.js

const questionBank = {
    'comprehensive': [
        // Topic 1.1 - What was the Roman Republic?
        {
            type: 'text-flexible',
            topic: 'Topic 1.1',
            question: 'The Romans claimed divine ancestry through two legendary figures - Aeneas and Romulus. Name the god who was the parent of Aeneas.',
            correctAnswers: ['venus'],
            acceptableVariations: ['venus', 'aphrodite'],
            explanation: 'Venus (Aphrodite in Greek mythology) was the mother of Aeneas, making the Romans descendants of the goddess of love and establishing their divine legitimacy.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.1',
            question: 'What does SPQR stand for?',
            choices: [
                'Senatus Populusque Romanus (The Senate and the Roman People)',
                'Senatus Popularis Romanus (The Senate Popular Roman)',
                'Spiritus Populus Romanus (Spirit of the Roman People)',
                'Senatus Publicus Romanus (The Public Roman Senate)'
            ],
            correct: 0,
            explanation: 'SPQR stands for "Senatus Populusque Romanus" meaning "The Senate and the Roman People", representing the two key elements of Republican government and appearing on standards, coins, and buildings throughout the Roman world.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.1',
            question: 'What event sparked the revolution that ended the Roman monarchy?',
            correctAnswers: ['rape of lucretia'],
            acceptableVariations: ['rape of lucretia', 'lucretia', 'sextus tarquinius raped lucretia', 'lucretia rape', 'lucretia suicide'],
            explanation: 'The rape of Lucretia by Sextus Tarquinius and her subsequent suicide became the catalyst for revolution. Her story embodied the violation of Roman virtue by tyrannical power and justified the overthrow of the monarchy.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.1',
            question: 'In what year was the Roman Republic established?',
            correctAnswers: ['509 bc', '509'],
            acceptableVariations: ['509', '509 bc', '509 bce'],
            explanation: 'The Roman Republic was established in 509 BC after the expulsion of Tarquin the Proud.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.1',
            question: 'Who was the god parent of Romulus?',
            correctAnswers: ['mars'],
            acceptableVariations: ['mars', 'ares'],
            explanation: 'Mars, the god of war, was considered the father of Romulus, emphasising Roman military prowess.'
        },

        // Topic 1.2 - The Constitution
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2',
            question: 'Which of these was NOT a unique power of the tribune of the plebs?',
            choices: [
                'Intercessio (veto power over magistrates)',
                'Sacrosanctitas (physical inviolability)',
                'Imperium (military command authority)',
                'Auxilium (personal protection for citizens)'
            ],
            correct: 2,
            explanation: 'Tribunes did not have imperium (military command authority). Their power was civil and protective: intercessio (veto), sacrosanctitas (physical protection), and auxilium (assistance to citizens).'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2',
            question: 'How long was a dictator appointed for?',
            correctAnswers: ['six months', '6 months'],
            acceptableVariations: ['six months', '6 months', 'six months maximum', '6 months maximum'],
            explanation: 'Dictators were appointed for a maximum of six months to handle specific crises, preventing permanent autocracy.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2',
            question: 'How many dictators were appointed at once?',
            choices: ['One', 'Two', 'Three', 'It varied depending on the crisis'],
            correct: 0,
            explanation: 'Only one dictator was appointed at a time to ensure unified command during emergencies.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2',
            question: 'What were lictors and what did they carry?',
            correctAnswers: ['attendants fasces', 'officials fasces'],
            acceptableVariations: ['lictors carried fasces', 'attendants carried fasces', 'officials with fasces', 'bodyguards fasces'],
            explanation: 'Lictors were official attendants who accompanied magistrates with imperium, carrying fasces (bundles of rods with axes) as symbols of the magistrate\'s authority to punish and execute.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.2',
            question: 'Why were the axes removed from fasces within the city of Rome?',
            choices: [
                'To prevent accidents in crowded streets',
                'To respect citizens\' right of appeal (provocatio)',
                'To show respect for the gods',
                'To save money on expensive ceremonial axes'
            ],
            correct: 1,
            explanation: 'Within Rome, axes were removed from fasces to respect citizens\' right of appeal (provocatio) - magistrates could not execute citizens without trial. Outside Rome, full fasces with axes showed unlimited power over non-citizens.'
        },

        // Topic 1.3 - Patronage and Amicitia
        {
            type: 'text-flexible',
            topic: 'Topic 1.3',
            question: 'What does "amicitia" mean in Roman political terms?',
            correctAnswers: ['political friendship', 'calculated alliance'],
            acceptableVariations: ['political friendship', 'friendship', 'political alliance', 'calculated alliance', 'mutual advantage', 'political relationship'],
            explanation: 'Amicitia was political "friendship" - calculated alliances between elite Romans based on mutual advantage rather than emotional bonds. These horizontal relationships allowed politicians to pool resources and coordinate policy.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3',
            question: 'What was sportula and how did it reinforce the patron-client relationship?',
            choices: [
                'A daily gift of food/money that created economic dependence',
                'A religious ceremony that blessed political alliances',
                'A voting token that ensured electoral support',
                'A legal contract that formalised business partnerships'
            ],
            correct: 0,
            explanation: 'Sportula was the daily gift of food or money from patron to clients, originally carried in a small basket. It institutionalised economic dependence and ensured daily contact between patron and client.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.3',
            question: 'What was the salutatio and why was it politically important?',
            correctAnswers: ['morning reception', 'morning visit'],
            acceptableVariations: ['morning reception', 'morning visit', 'morning greeting', 'daily reception', 'client visits'],
            explanation: 'The salutatio was the morning reception where clients paid respects to their patron. The size and quality of a politician\'s morning crowd (turba) was a visible measure of his power and influence in Roman society.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3',
            question: 'Which alliance best exemplifies the dangers of amicitia in Roman politics?',
            choices: [
                'The alliance between Cicero and Atticus',
                'The First Triumvirate between Caesar, Pompey, and Crassus',
                'The friendship between Scipio Aemilianus and Laelius',
                'The partnership between Marius and Sulla'
            ],
            correct: 1,
            explanation: 'The First Triumvirate (60 BC) showed how private amicitia could override public institutions. Caesar, Pompey, and Crassus secretly divided the Roman world between them, using their combined influence to control elections and provincial commands.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3',
            question: 'Which two things would a patron typically provide to his clients?',
            choices: [
                'Legal protection and financial assistance',
                'Military training and weapons',
                'Religious instruction and temples',
                'Foreign languages and travel opportunities'
            ],
            correct: 0,
            explanation: 'Patrons provided legal protection, financial assistance, political influence, and social status to their clients.'
        },

        // Topic 1.4 - Political Ideals
        {
            type: 'multiple-choice',
            topic: 'Topic 1.4',
            question: 'Which two principles are central to Stoic philosophy?',
            choices: [
                'Pleasure above all and avoid pain',
                'Duty above personal gain and reason over emotion',
                'Wealth accumulation and social climbing',
                'Military conquest and territorial expansion'
            ],
            correct: 1,
            explanation: 'Stoicism emphasised duty above personal gain, reason over emotion, virtue as the highest good, and resistance to corruption. These principles attracted Roman politicians who wanted to appear incorruptible.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.4',
            question: 'Name one prominent Stoic politician from the Late Republic.',
            correctAnswers: ['cato', 'cato the younger'],
            acceptableVariations: ['cato', 'cato the younger', 'marcus cato', 'marcus porcius cato'],
            explanation: 'Cato the Younger was the most famous Stoic politician, known for his rigid principles and opposition to corruption.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.4',
            question: 'What did Cicero mean by "concordia ordinum"?',
            correctAnswers: ['harmony between orders', 'harmony senators equites'],
            acceptableVariations: ['harmony between orders', 'harmony between classes', 'senators and equites working together', 'harmony senators equites'],
            explanation: 'Concordia ordinum meant harmony between the senatorial and equestrian orders - the two main elite classes working together for the good of the state rather than pursuing conflicting interests.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.4',
            question: 'What did Cicero mean by "otium cum dignitate"?',
            correctAnswers: ['leisure with dignity', 'peaceful dignity'],
            acceptableVariations: ['leisure with dignity', 'dignified leisure', 'peaceful republic with honour', 'peace with dignity'],
            explanation: 'Otium cum dignitate meant a peaceful Republic where the elite could live quietly with their honour and dignity intact.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.4',
            question: 'Define libertas and give one example of what this concept meant to the Romans.',
            correctAnswers: ['political freedom', 'freedom from tyranny'],
            acceptableVariations: ['freedom', 'political freedom', 'freedom from tyranny', 'freedom from kings', 'right to vote', 'protection under law'],
            explanation: 'Libertas meant political freedom from domination by kings or tyrants, including the right to vote, legal protection, and political participation.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.4',
            question: 'Name the three main social classes in Roman society.',
            correctAnswers: ['senators equites plebeians'],
            acceptableVariations: ['senators, equites, plebeians', 'senatorial, equestrian, plebeian', 'patricians, equites, plebs'],
            explanation: 'The three main free social classes were Senators (political elite who had held magistracies), Equites (wealthy business class with property qualification), and Plebeians (ordinary citizens).'
        },

        // Topic 1.5 - Political Factions
        {
            type: 'text-flexible',
            topic: 'Topic 1.5',
            question: 'Explain why Roman political factions were not the same as modern political parties.',
            correctAnswers: ['no formal structure', 'politicians switched'],
            acceptableVariations: ['no formal structure', 'could switch factions', 'personal relationships', 'no party discipline', 'informal groups', 'flexible membership'],
            explanation: 'Roman factions lacked formal party structures, politicians could switch factions when convenient, and they were based more on personal relationships than ideology. Labels were often rhetorical weapons rather than genuine ideological categories.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.5',
            question: 'Which two beliefs or methods were typical of the optimates?',
            choices: [
                'Defend Senate authority and uphold mos maiorum',
                'Use popular assemblies and bypass the Senate',
                'Promote land redistribution and grain distribution',
                'Appeal to tribunes and use populist rhetoric'
            ],
            correct: 0,
            explanation: 'Optimates ("the best men") defended Senate authority, upheld traditional customs (mos maiorum), supported property rights, and used established magistracies rather than appealing directly to the people.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.5',
            question: 'Which two beliefs or methods were typical of the populares?',
            choices: [
                'Defend Senate authority and traditional customs',
                'Use popular assemblies and appeal to tribunes',
                'Promote aristocratic privilege and property rights',
                'Insist on senatorial debate before popular votes'
            ],
            correct: 1,
            explanation: 'Populares used popular assemblies, appealed to tribunes, bypassed the Senate, and employed populist rhetoric.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.5',
            question: 'Define "boni".',
            correctAnswers: ['good men', 'morally upright senators'],
            acceptableVariations: ['good men', 'the good', 'upright men', 'morally reliable', 'virtuous senators'],
            explanation: 'Boni meant "the good men" - senators regarded as morally upright and politically reliable.'
        },
        {
            type: 'scenario',
            topic: 'Topic 1.5',
            question: 'A tribune proposes a law to distribute public land to landless citizens, bypassing the Senate. Is this a popularis or optimate policy?',
            choices: ['Popularis', 'Optimate'],
            correct: 0,
            explanation: 'This is popularis - using a tribune to bypass the Senate and appeal directly to popular assemblies with land redistribution.'
        },
        {
            type: 'scenario',
            topic: 'Topic 1.5',
            question: 'A consul insists that all major decisions must be debated in the Senate before being put to the popular assemblies. Is this a popularis or optimate policy?',
            choices: ['Popularis', 'Optimate'],
            correct: 1,
            explanation: 'This is optimate - defending Senate authority and insisting on traditional procedures before popular votes.'
        }
    ],
    
    'quick': [
        // Key concepts only for quick review
        {
            type: 'multiple-choice',
            topic: 'Topic 1.1',
            question: 'What does SPQR stand for?',
            choices: [
                'Senatus Populusque Romanus',
                'Spiritus Populus Romanus',
                'Senatus Publicus Romanus',
                'Senatus Popularis Romanus'
            ],
            correct: 0,
            explanation: 'SPQR stands for "Senatus Populusque Romanus" - "The Senate and the Roman People", representing the two key elements of Republican government.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2',
            question: 'Name the highest regular magistracy in the Roman Republic.',
            correctAnswers: ['consul'],
            acceptableVariations: ['consul', 'consuls', 'consulship'],
            explanation: 'The consulship was the highest regular magistracy. Two consuls were elected annually to lead the Roman state, embodying the rejection of monarchy through shared leadership.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.3',
            question: 'What was the main purpose of the patron-client relationship?',
            choices: [
                'To provide mutual protection and political support',
                'To organize religious ceremonies',
                'To regulate business transactions',
                'To arrange military service'
            ],
            correct: 0,
            explanation: 'The patron-client relationship provided mutual protection and political support - patrons offered legal protection and resources, while clients provided political backing and demonstrated the patron\'s importance.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.4',
            question: 'What does "dignitas" mean in Roman political terms?',
            correctAnswers: ['personal standing', 'political prestige'],
            acceptableVariations: ['personal standing', 'political dignity', 'status prestige', 'honour reputation', 'personal honour'],
            explanation: 'Dignitas was personal standing and prestige accumulated through achievement, office-holding, and public service.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.5',
            question: 'What was the key difference between optimates and populares?',
            choices: [
                'Optimates defended Senate authority, populares appealed to popular assemblies',
                'Optimates were poor, populares were wealthy',
                'Optimates were military leaders, populares were civilians',
                'Optimates were young, populares were old'
            ],
            correct: 0,
            explanation: 'The key difference was political method: optimates worked through traditional Senate authority, while populares bypassed the Senate to appeal directly to popular assemblies.'
        }
    ],
    
    'detailed': [
        // More specific lesson content questions
        {
            type: 'text-flexible',
            topic: 'Topic 1.1',
            question: 'What was the name of the last king of Rome?',
            correctAnswers: ['tarquinius superbus', 'lucius tarquinius superbus'],
            acceptableVariations: ['tarquin the proud', 'tarquin superbus', 'tarquinius superbus', 'lucius tarquinius superbus'],
            explanation: 'Lucius Tarquinius Superbus (Tarquin the Proud) was the seventh and final king of Rome.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.2',
            question: 'What does "collegiality" mean in the context of Roman magistracies?',
            correctAnswers: ['shared office', 'two magistrates'],
            acceptableVariations: ['shared office', 'two people', 'pair of magistrates', 'two holders', 'dual leadership'],
            explanation: 'Collegiality meant that most magistracies were shared between two people (e.g., two consuls) to prevent any individual from accumulating too much power and to provide checks against abuse of authority.'
        },
        {
            type: 'text-flexible',
            topic: 'Topic 1.3',
            question: 'Name two typical causes of inimicitia (political enmity) between Roman politicians.',
            correctAnswers: ['competition for office', 'personal insults'],
            acceptableVariations: ['electoral competition', 'office competition', 'insults', 'prosecution', 'legal disputes', 'family feuds', 'business disputes'],
            explanation: 'Inimicitia typically arose from electoral competition for the same offices, personal insults or humiliation, legal prosecutions, family feuds, or ideological disagreements. These personal hatreds often drove politics more than policy differences.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.4',
            question: 'According to Roman political ideals, what was the difference between auctoritas and potestas?',
            choices: [
                'Auctoritas was legal power, potestas was moral authority',
                'Auctoritas was moral authority, potestas was legal power',
                'Auctoritas was military command, potestas was civil authority',
                'Auctoritas was temporary, potestas was permanent'
            ],
            correct: 1,
            explanation: 'Auctoritas was moral authority based on personal prestige and past achievement, while potestas was formal legal power granted by office. The ideal Roman leader combined both - legal authority backed by moral credibility.'
        },
        {
            type: 'multiple-choice',
            topic: 'Topic 1.5',
            question: 'How did populares politicians typically gain support?',
            choices: [
                'Through Senate debates and traditional procedures',
                'By appealing to tribunes and popular assemblies',
                'Through religious ceremonies and augury',
                'By building military alliances with foreign kings'
            ],
            correct: 1,
            explanation: 'Populares gained support by appealing to tribunes (who could propose legislation directly), using popular assemblies to bypass the Senate, and employing populist rhetoric about land, grain, and citizenship.'
        }
    ]
};
