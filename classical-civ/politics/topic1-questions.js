<script>
        // Include the complete question bank directly in the HTML file
        const questionBank = {
            'comprehensive': [
                // Topic 1.1 - What was the Roman Republic?
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'The Romans claimed divine ancestry through two legendary figures - Aeneas and Romulus. Name the god who was the parent of Aeneas.',
                    correctAnswers: ['venus'],
                    acceptableVariations: ['venus', 'aphrodite'],
                    explanation: 'Venus (Aphrodite in Greek mythology) was the mother of Aeneas, making the Romans descendants of the goddess of love and establishing their divine legitimacy.'
                },
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.1: What was the Roman Republic?',
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
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'What event sparked the revolution that ended the Roman monarchy?',
                    correctAnswers: ['rape of lucretia'],
                    acceptableVariations: ['rape of lucretia', 'lucretia', 'sextus tarquinius raped lucretia', 'lucretia rape', 'lucretia suicide'],
                    explanation: 'The rape of Lucretia by Sextus Tarquinius and her subsequent suicide became the catalyst for revolution. Her story embodied the violation of Roman virtue by tyrannical power and justified the overthrow of the monarchy.'
                },
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'In what year was the Roman Republic established?',
                    correctAnswers: ['509 bc', '509'],
                    acceptableVariations: ['509', '509 bc', '509 bce'],
                    explanation: 'The Roman Republic was established in 509 BC after the expulsion of Tarquin the Proud.'
                },
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'Who was the god parent of Romulus?',
                    correctAnswers: ['mars'],
                    acceptableVariations: ['mars', 'ares'],
                    explanation: 'Mars, the god of war, was considered the father of Romulus, emphasising Roman military prowess.'
                },

                // Topic 1.2 - The Constitution
                {
                    type: 'drag-drop',
                    topic: 'Topic 1.2: The Constitution',
                    question: 'Match each office in the cursus honorum with its main duties:',
                    items: ['Censor', 'Consul', 'Praetor', 'Aedile', 'Quaestor'],
                    categories: {
                        'Census and moral oversight': ['Censor'],
                        'Chief executive and military command': ['Consul'],
                        'Legal administration and courts': ['Praetor'],
                        'Public works and games': ['Aedile'],
                        'Financial administration': ['Quaestor']
                    },
                    explanation: 'Each office in the cursus honorum had specific responsibilities that built experience for higher positions, creating a systematic career progression for the Roman elite.'
                },
                {
                    type: 'gap-fill',
                    topic: 'Topic 1.2: The Constitution',
                    question: 'Complete this passage about Roman magistracies:',
                    gapText: 'The ___ was the highest regular magistracy, held by two men who shared power through ___. Tribunes had the power of ___ which allowed them to block any magistrate\'s action. The ___ was appointed for a maximum of six months during extreme emergencies.',
                    correctGaps: ['consulship', 'collegiality', 'intercessio', 'dictator'],
                    acceptableGaps: [
                        ['consulship', 'consul'],
                        ['collegiality', 'shared power'],
                        ['intercessio', 'veto', 'veto power'],
                        ['dictator', 'dictatorship']
                    ],
                    explanation: 'This passage covers key principles of Republican government: shared leadership, checks and balances, and emergency procedures.'
                },
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.2: The Constitution',
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
                    topic: 'Topic 1.2: The Constitution',
                    question: 'How long was a dictator appointed for?',
                    correctAnswers: ['six months', '6 months'],
                    acceptableVariations: ['six months', '6 months', 'six months maximum', '6 months maximum'],
                    explanation: 'Dictators were appointed for a maximum of six months to handle specific crises, preventing permanent autocracy.'
                },
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.2: The Constitution',
                    question: 'How many dictators were appointed at once?',
                    choices: ['One', 'Two', 'Three', 'It varied depending on the crisis'],
                    correct: 0,
                    explanation: 'Only one dictator was appointed at a time to ensure unified command during emergencies.'
                }
            ],
            
            'quick': [
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.1: What was the Roman Republic?',
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
                    topic: 'Topic 1.2: The Constitution',
                    question: 'Name the highest regular magistracy in the Roman Republic.',
                    correctAnswers: ['consul'],
                    acceptableVariations: ['consul', 'consuls', 'consulship'],
                    explanation: 'The consulship was the highest regular magistracy. Two consuls were elected annually to lead the Roman state, embodying the rejection of monarchy through shared leadership.'
                },
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.3: Patronage and Amicitia',
                    question: 'What was the main purpose of the patron-client relationship?',
                    choices: [
                        'To provide mutual protection and political support',
                        'To organise religious ceremonies',
                        'To regulate business transactions',
                        'To arrange military service'
                    ],
                    correct: 0,
                    explanation: 'The patron-client relationship provided mutual protection and political support - patrons offered legal protection and resources, while clients provided political backing and demonstrated the patron\'s importance.'
                },
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.4: Political Ideals',
                    question: 'What does "dignitas" mean in Roman political terms?',
                    correctAnswers: ['personal standing', 'political prestige'],
                    acceptableVariations: ['personal standing', 'political dignity', 'status prestige', 'honour reputation', 'personal honour'],
                    explanation: 'Dignitas was personal standing and prestige accumulated through achievement, office-holding, and public service.'
                },
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.5: Political Factions',
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
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'What was the name of the last king of Rome?',
                    correctAnswers: ['tarquinius superbus', 'lucius tarquinius superbus'],
                    acceptableVariations: ['tarquin the proud', 'tarquin superbus', 'tarquinius superbus', 'lucius tarquinius superbus'],
                    explanation: 'Lucius Tarquinius Superbus (Tarquin the Proud) was the seventh and final king of Rome.'
                },
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.2: The Constitution',
                    question: 'What does "collegiality" mean in the context of Roman magistracies?',
                    correctAnswers: ['shared office', 'two magistrates'],
                    acceptableVariations: ['shared office', 'two people', 'pair of magistrates', 'two holders', 'dual leadership'],
                    explanation: 'Collegiality meant that most magistracies were shared between two people (e.g., two consuls) to prevent any individual from accumulating too much power and to provide checks against abuse of authority.'
                },
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.3: Patronage and Amicitia',
                    question: 'Name two typical causes of inimicitia (political enmity) between Roman politicians.',
                    correctAnswers: ['competition for office', 'personal insults'],
                    acceptableVariations: ['electoral competition', 'office competition', 'insults', 'prosecution', 'legal disputes', 'family feuds', 'business disputes'],
                    explanation: 'Inimicitia typically arose from electoral competition for the same offices, personal insults or humiliation, legal prosecutions, family feuds, or ideological disagreements. These personal hatreds often drove politics more than policy differences.'
                },
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.4: Political Ideals',
                    question: 'According to Roman political ideals, what was the difference between auctoritas and potestas?',
                    choices: [
                        'Auctoritas was legal power, potestas was moral authority',
                        'Auctoritas was moral authority, potestas was legal power',
                        'Auctoritas was military command, potestas was civil authority',
                        'Auctoritas was temporary, potestas was permanent'
                    ],
                    correct: 1<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Topic 1 Retrieval Practice - Politics of the Late Republic</title>
    <link rel="icon" type="image/png" href="/images/favicon.png">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #0066ff 0%, #4d94ff 25%, #e6f0ff 60%, #ffffff 100%);
            background-attachment: fixed;
            min-height: 100vh;
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Background Shapes */
        .bg-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
        }

        .shape {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(100px);
        }

        .shape1 {
            width: 400px;
            height: 400px;
            top: -200px;
            right: -100px;
        }

        .shape2 {
            width: 300px;
            height: 300px;
            bottom: -150px;
            left: -100px;
        }

        .shape3 {
            width: 200px;
            height: 200px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        /* Info Button */
        .info-btn {
            position: fixed;
            top: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.95);
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 100;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .info-btn:hover {
            transform: scale(1.1);
            background: white;
            box-shadow: 0 6px 20px rgba(0, 102, 255, 0.2);
        }

        /* Header */
        header {
            position: relative;
            z-index: 10;
            padding: 3rem 2rem 2rem;
            text-align: center;
        }

        .logo {
            font-size: 4rem;
            font-weight: 700;
            background: linear-gradient(135deg, #ffffff 0%, #e6f0ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -3px;
            margin-bottom: 0.5rem;
            text-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .logo a {
            text-decoration: none;
            background: linear-gradient(135deg, #ffffff 0%, #e6f0ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.95);
            font-weight: 300;
            letter-spacing: 0.5px;
            margin-bottom: 0.25rem;
        }

        .author {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 300;
        }

        /* Dashboard Container */
        .dashboard-container {
            max-width: 1500px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 5;
        }

        .dashboard-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: start;
        }

        /* Main Content Area */
        .main-content {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.6);
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .content-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .topic-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 1rem;
        }

        .section-intro {
            background: rgba(0, 102, 255, 0.05);
            border: 1px solid rgba(0, 102, 255, 0.1);
            border-radius: 16px;
            padding: 1.5rem;
            text-align: left;
        }

        .section-intro h3 {
            color: #0066ff;
            margin-bottom: 1rem;
            font-weight: 600;
            font-size: 1.2rem;
        }

        .section-intro p {
            color: #666;
            line-height: 1.6;
        }

        /* Quiz Mode Selection */
        .quiz-mode-selector {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .mode-option {
            background: white;
            border: 2px solid rgba(0, 0, 0, 0.06);
            border-radius: 16px;
            padding: 1.75rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .mode-option:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 30px rgba(0, 102, 255, 0.15);
            border-color: #0066ff;
        }

        .mode-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 0.5rem;
        }

        .mode-description {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 1.25rem;
        }

        .mode-stats {
            display: flex;
            justify-content: center;
            gap: 1rem;
            font-size: 0.8rem;
            color: #0066ff;
            font-weight: 600;
        }

        /* Subtopic Selection */
        .subtopic-selector {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .subtopic-option {
            background: white;
            border: 2px solid rgba(0, 0, 0, 0.06);
            border-radius: 12px;
            padding: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }

        .subtopic-option:hover {
            border-color: #0066ff;
            background: rgba(0, 102, 255, 0.05);
        }

        .subtopic-option.selected {
            border-color: #0066ff;
            background: rgba(0, 102, 255, 0.1);
        }

        .subtopic-title {
            font-size: 1rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 0.5rem;
        }

        .subtopic-description {
            color: #666;
            font-size: 0.8rem;
        }

        /* Question Screen */
        .question-screen {
            display: none;
        }

        .question-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid rgba(0, 102, 255, 0.1);
        }

        .question-number {
            background: #0066ff;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 1.2rem;
        }

        .question-info {
            flex: 1;
            margin-left: 1.5rem;
        }

        .question-type {
            font-size: 0.9rem;
            color: #0066ff;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .question-topic {
            font-size: 1rem;
            color: #666;
            margin-bottom: 0.25rem;
        }

        .progress-info {
            text-align: right;
            color: #666;
            font-size: 0.9rem;
        }

        .question-text {
            font-size: 1.2rem;
            color: #333;
            margin-bottom: 1.5rem;
            font-weight: 500;
            line-height: 1.5;
        }

        /* Answer Input Styles */
        .answer-input {
            width: 100%;
            padding: 1rem;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .answer-input:focus {
            outline: none;
            border-color: #0066ff;
        }

        .multiple-choice {
            display: grid;
            gap: 0.75rem;
        }

        .choice-option {
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            padding: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
        }

        .choice-option:hover {
            border-color: #0066ff;
            background: rgba(0, 102, 255, 0.05);
        }

        .choice-option.selected {
            border-color: #0066ff;
            background: rgba(0, 102, 255, 0.05);
        }

        .choice-letter {
            background: #0066ff;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin-right: 1rem;
            flex-shrink: 0;
        }

        /* Drag and Drop Styles */
        .drag-drop-container {
            min-height: 300px;
        }

        .drag-instruction {
            text-align: center;
            color: #666;
            font-style: italic;
            margin-bottom: 1rem;
        }

        .drag-items {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 2rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 8px;
            border: 2px dashed #dee2e6;
        }

        .drag-item {
            background: #0066ff;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            cursor: grab;
            user-select: none;
            transition: all 0.2s ease;
            font-size: 0.9rem;
        }

        .drag-item:hover {
            background: #0052cc;
            transform: scale(1.05);
        }

        .drag-item.dragging {
            opacity: 0.5;
            cursor: grabbing;
        }

        .drop-zones {
            display: grid;
            gap: 1rem;
        }

        .drop-zone {
            border: 2px dashed #dee2e6;
            border-radius: 8px;
            padding: 1rem;
            min-height: 80px;
            background: #f8f9fa;
            transition: all 0.3s ease;
        }

        .drop-zone.drag-over {
            border-color: #0066ff;
            background: rgba(0, 102, 255, 0.05);
        }

        .drop-zone-title {
            font-weight: 600;
            color: #333;
            margin-bottom: 0.5rem;
        }

        .dropped-items {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .dropped-item {
            background: #28a745;
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.8rem;
        }

        /* Gap Fill Styles */
        .gap-fill-container {
            line-height: 2;
            font-size: 1.1rem;
        }

        .gap-input {
            display: inline-block;
            border: none;
            border-bottom: 2px solid #0066ff;
            background: transparent;
            padding: 0.2rem 0.5rem;
            font-size: 1rem;
            margin: 0 0.2rem;
            min-width: 100px;
            text-align: center;
        }

        .gap-input:focus {
            outline: none;
            background: rgba(0, 102, 255, 0.05);
        }

        /* Feedback */
        .feedback {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: 8px;
            display: none;
            border-left: 4px solid;
        }

        .feedback.correct {
            background: #d4edda;
            border-left-color: #28a745;
            color: #155724;
        }

        .feedback.incorrect {
            background: #f8d7da;
            border-left-color: #dc3545;
            color: #721c24;
        }

        .feedback.partial {
            background: #fff3cd;
            border-left-color: #ffc107;
            color: #856404;
        }

        .feedback-header {
            font-weight: 600;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .feedback-explanation {
            font-size: 0.95rem;
            line-height: 1.5;
        }

        /* Question Controls */
        .question-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #e9ecef;
        }

        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
            font-weight: 500;
        }

        .btn-primary {
            background: #0066ff;
            color: white;
        }

        .btn-primary:hover {
            background: #0052cc;
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
        }

        .btn-secondary:hover {
            background: #545b62;
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .progress-text {
            color: #666;
            font-size: 0.9rem;
        }

        /* Results Screen */
        .results-screen {
            display: none;
            text-align: center;
        }

        .results-score {
            font-size: 4rem;
            font-weight: 700;
            color: #0066ff;
            margin-bottom: 1rem;
        }

        .results-message {
            font-size: 1.2rem;
            color: #333;
            margin-bottom: 2rem;
        }

        .results-breakdown {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }

        .breakdown-item {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid #e9ecef;
        }

        .breakdown-number {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .breakdown-label {
            color: #666;
            font-size: 0.9rem;
        }

        .restart-btn {
            display: block;
            width: 200px;
            margin: 2rem auto 0;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(135deg, #0066ff, #4d94ff);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            text-align: center;
        }

        .restart-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
        }

        /* Mobile responsiveness */
        @media (max-width: 1024px) {
            .quiz-mode-selector {
                grid-template-columns: 1fr;
            }
            
            .subtopic-selector {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .dashboard-container {
                padding: 1rem;
            }
            
            .main-content {
                padding: 1.5rem;
            }
            
            .logo {
                font-size: 3rem;
            }

            .topic-title {
                font-size: 2rem;
            }
            
            .subtopic-selector {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Background Shapes -->
    <div class="bg-shapes">
        <div class="shape shape1"></div>
        <div class="shape shape2"></div>
        <div class="shape shape3"></div>
    </div>

    <!-- Info Button -->
    <button class="info-btn" onclick="showInfoModal()">ℹ️</button>

    <!-- Header -->
    <header>
        <h1 class="logo">
            <a href="../index.html">Classicalia</a>
        </h1>
        <div class="subtitle">Politics of the Late Republic - Topic 1 Practice</div>
        <div class="author">by Lawrence McNally</div>
    </header>

    <!-- Dashboard -->
    <div class="dashboard-container">
        <div class="dashboard-grid">
            <!-- Main Content -->
            <main class="main-content">
                <div class="content-header">
                    <h1 class="topic-title">Topic 1 Retrieval Practice</h1>
                    <div class="section-intro">
                        <h3>Test Your Knowledge</h3>
                        <p>Comprehensive practice covering all five sections of Topic 1. Questions are drawn from your lesson content and designed to prepare you for assessments. Each session randomises questions for repeated practice.</p>
                    </div>
                </div>

                <div class="content-body">
                    <!-- Mode Selection Screen -->
                    <div id="mode-selection-screen">
                        <!-- Subtopic Selection -->
                        <div class="subtopic-selector" id="subtopic-selector">
                            <div class="subtopic-option" onclick="selectSubtopic('1.1')" data-subtopic="1.1">
                                <div class="subtopic-title">Topic 1.1</div>
                                <div class="subtopic-description">What was the Roman Republic?</div>
                            </div>
                            <div class="subtopic-option" onclick="selectSubtopic('1.2')" data-subtopic="1.2">
                                <div class="subtopic-title">Topic 1.2</div>
                                <div class="subtopic-description">The Constitution</div>
                            </div>
                            <div class="subtopic-option" onclick="selectSubtopic('1.3')" data-subtopic="1.3">
                                <div class="subtopic-title">Topic 1.3</div>
                                <div class="subtopic-description">Patronage and Amicitia</div>
                            </div>
                            <div class="subtopic-option" onclick="selectSubtopic('1.4')" data-subtopic="1.4">
                                <div class="subtopic-title">Topic 1.4</div>
                                <div class="subtopic-description">Political Ideals</div>
                            </div>
                            <div class="subtopic-option" onclick="selectSubtopic('1.5')" data-subtopic="1.5">
                                <div class="subtopic-title">Topic 1.5</div>
                                <div class="subtopic-description">Political Factions</div>
                            </div>
                        </div>

                        <div class="quiz-mode-selector">
                            <div class="mode-option" onclick="startQuiz('comprehensive')">
                                <div class="mode-title">Comprehensive Review</div>
                                <div class="mode-description">30 questions covering all lesson content from Topics 1.1-1.5. Includes complex scenarios and detailed knowledge checks.</div>
                                <div class="mode-stats">
                                    <span>📚 All 5 Topics</span>
                                    <span>⏱️ 20-25 mins</span>
                                    <span>🎯 Assessment Prep</span>
                                </div>
                            </div>
                            
                            <div class="mode-option" onclick="startQuiz('quick')">
                                <div class="mode-title">Quick Check</div>
                                <div class="mode-description">15 key questions for rapid review. Perfect for consolidating main concepts before lessons or exams.</div>
                                <div class="mode-stats">
                                    <span>⚡ Key Concepts</span>
                                    <span>⏱️ 10-12 mins</span>
                                    <span>🔄 Quick Review</span>
                                </div>
                            </div>
                            
                            <div class="mode-option" onclick="startQuiz('detailed')">
                                <div class="mode-title">Detailed Knowledge</div>
                                <div class="mode-description">20 questions focusing on specific details from lesson content - perfect for thorough understanding.</div>
                                <div class="mode-stats">
                                    <span>🔍 Deep Dive</span>
                                    <span>⏱️ 15-18 mins</span>
                                    <span>📖 Lesson Content</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Question Screen -->
                    <div class="question-screen" id="question-screen">
                        <div class="question-header">
                            <div class="question-number" id="question-number">1</div>
                            <div class="question-info">
                                <div class="question-type" id="question-type">Multiple Choice</div>
                                <div class="question-topic" id="question-topic">Topic 1.1: What was the Roman Republic?</div>
                            </div>
                            <div class="progress-info">
                                <div class="progress-text" id="progress-text">Question 1 of 30</div>
                            </div>
                        </div>

                        <div class="question-content">
                            <div class="question-text" id="question-text">
                                Loading question...
                            </div>
                            
                            <div id="answer-area">
                                <!-- Dynamic content based on question type -->
                            </div>
                            
                            <div class="feedback" id="feedback">
                                <div class="feedback-header">
                                    <span id="feedback-icon">✓</span>
                                    <span id="feedback-title">Correct!</span>
                                </div>
                                <div class="feedback-explanation" id="feedback-explanation"></div>
                            </div>
                        </div>

                        <div class="question-controls">
                            <button class="btn btn-secondary" id="prev-btn" onclick="previousQuestion()">Previous</button>
                            <div class="progress-text" id="progress-indicator">Question 1 of 30</div>
                            <button class="btn btn-primary" id="check-btn" onclick="checkAnswer()">Check Answer</button>
                            <button class="btn btn-primary" id="next-btn" onclick="nextQuestion()" style="display: none;">Next Question</button>
                        </div>
                    </div>

                    <!-- Results Screen -->
                    <div class="results-screen" id="results-screen">
                        <div class="results-score" id="final-score">85%</div>
                        <div class="results-message" id="results-message">Excellent work! You're well-prepared for assessments.</div>
                        
                        <div class="results-breakdown">
                            <div class="breakdown-item">
                                <div class="breakdown-number" id="correct-count">26</div>
                                <div class="breakdown-label">Correct</div>
                            </div>
                            <div class="breakdown-item">
                                <div class="breakdown-number" id="partial-count">2</div>
                                <div class="breakdown-label">Partially Correct</div>
                            </div>
                            <div class="breakdown-item">
                                <div class="breakdown-number" id="incorrect-count">2</div>
                                <div class="breakdown-label">Incorrect</div>
                            </div>
                            <div class="breakdown-item">
                                <div class="breakdown-number" id="completion-time">18</div>
                                <div class="breakdown-label">Minutes</div>
                            </div>
                        </div>
                        
                        <button class="restart-btn" onclick="restartQuiz()">Practice Again</button>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <!-- Load Question Bank -->
    <script>
        // Include the question bank directly in the HTML file
        const questionBank = {
            'comprehensive': [
                // Topic 1.1 - What was the Roman Republic?
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'The Romans claimed divine ancestry through two legendary figures - Aeneas and Romulus. Name the god who was the parent of Aeneas.',
                    correctAnswers: ['venus'],
                    acceptableVariations: ['venus', 'aphrodite'],
                    explanation: 'Venus (Aphrodite in Greek mythology) was the mother of Aeneas, making the Romans descendants of the goddess of love and establishing their divine legitimacy.'
                },
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'What does SPQR stand for?',
                    choices: [
                        'Senatus Populusque Romanus (The Senate and the Roman People)',
                        'Senatus Popularis Romanus (The Senate Popular Roman)',
                        'Spiritus Populus Romanus (Spirit of the Roman People)',
                        'Senatus Publicus Romanus (The Public Roman Senate)'
                    ],
                    correct: 0,
                    explanation: 'SPQR stands for "Senatus Populusque Romanus" meaning "The Senate and the Roman People", representing the two key elements of Republican government and appearing on standards, coins, and buildings throughout the Roman world.'
                }
            ],
            'quick': [
                {
                    type: 'multiple-choice',
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'What does SPQR stand for?',
                    choices: [
                        'Senatus Populusque Romanus',
                        'Spiritus Populus Romanus',
                        'Senatus Publicus Romanus',
                        'Senatus Popularis Romanus'
                    ],
                    correct: 0,
                    explanation: 'SPQR stands for "Senatus Populusque Romanus" - "The Senate and the Roman People", representing the two key elements of Republican government.'
                }
            ],
            'detailed': [
                {
                    type: 'text-flexible',
                    topic: 'Topic 1.1: What was the Roman Republic?',
                    question: 'What was the name of the last king of Rome?',
                    correctAnswers: ['tarquinius superbus', 'lucius tarquinius superbus'],
                    acceptableVariations: ['tarquin the proud', 'tarquin superbus', 'tarquinius superbus', 'lucius tarquinius superbus'],
                    explanation: 'Lucius Tarquinius Superbus (Tarquin the Proud) was the seventh and final king of Rome.'
                }
            ]
        };
        
        // Global variables
        let currentMode = '';
        let selectedSubtopics = [];
        let currentQuestions = [];
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let quizStartTime = null;
        let draggedItem = null;

        // Info modal function
        function showInfoModal() {
            alert('Welcome to Topic 1 Retrieval Practice!\n\nThis quiz covers all the content from your Politics lessons (Topics 1.1-1.5). Questions are designed to match your assessment style with flexible marking for spelling variations.\n\nCreated by Lawrence McNally - Teacher of Latin and Classics in Bristol');
        }

        // Subtopic selection
        function selectSubtopic(subtopic) {
            const option = document.querySelector(`[data-subtopic="${subtopic}"]`);
            
            if (option.classList.contains('selected')) {
                option.classList.remove('selected');
                selectedSubtopics = selectedSubtopics.filter(s => s !== subtopic);
            } else {
                option.classList.add('selected');
                selectedSubtopics.push(subtopic);
            }
        }

        // Start quiz function
        function startQuiz(mode) {
            currentMode = mode;
            
            // Filter questions by selected subtopics if any are selected
            let questionsToUse = [...questionBank[currentMode]];
            if (selectedSubtopics.length > 0) {
                questionsToUse = questionsToUse.filter(q => {
                    return selectedSubtopics.some(st => q.topic.includes(st));
                });
            }
            
            if (questionsToUse.length === 0) {
                alert('No questions found for selected subtopics. Please select at least one subtopic or choose "All Topics".');
                return;
            }
            
            currentQuestions = questionsToUse.sort(() => Math.random() - 0.5);
            currentQuestionIndex = 0;
            userAnswers = [];
            quizStartTime = Date.now();
            
            document.getElementById('mode-selection-screen').style.display = 'none';
            document.getElementById('question-screen').style.display = 'block';
            
            loadQuestion();
        }

        // Utility functions
        function normaliseText(text) {
            return text.toLowerCase()
                .trim()
                .replace(/[^\w\s]/g, '')
                .replace(/\s+/g, ' ');
        }

        function checkFlexibleAnswer(userInput, correctAnswers, acceptableVariations) {
            const normalised = normaliseText(userInput);
            
            // Check exact matches first
            for (let answer of correctAnswers) {
                if (normalised.includes(normaliseText(answer)) || normaliseText(answer).includes(normalised)) {
                    return 'correct';
                }
            }
            
            // Check acceptable variations
            for (let variation of acceptableVariations) {
                if (normalised.includes(normaliseText(variation)) || normaliseText(variation).includes(normalised)) {
                    return 'correct';
                }
            }
            
            // Partial credit for close matches
            for (let answer of [...correctAnswers, ...acceptableVariations]) {
                const words = normaliseText(answer).split(' ');
                const userWords = normalised.split(' ');
                const matchingWords = words.filter(word => userWords.some(userWord => 
                    userWord.includes(word) || word.includes(userWord)
                ));
                
                if (matchingWords.length >= Math.ceil(words.length * 0.6)) {
                    return 'partial';
                }
            }
            
            return 'incorrect';
        }

        // Load current question
        function loadQuestion() {
            const question = currentQuestions[currentQuestionIndex];
            
            document.getElementById('question-number').textContent = currentQuestionIndex + 1;
            document.getElementById('question-type').textContent = formatQuestionType(question.type);
            document.getElementById('question-topic').textContent = question.topic;
            document.getElementById('question-text').textContent = question.question;
            document.getElementById('progress-text').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
            document.getElementById('progress-indicator').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
            
            // Clear previous feedback
            document.getElementById('feedback').style.display = 'none';
            document.getElementById('check-btn').style.display = 'inline-block';
            document.getElementById('next-btn').style.display = 'none';
            
            // Load answer area
            loadAnswerArea(question);
            
            // Update navigation buttons
            document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
        }

        function formatQuestionType(type) {
            const types = {
                'multiple-choice': 'Multiple Choice',
                'text-flexible': 'Short Answer',
                'scenario': 'Scenario Analysis',
                'drag-drop': 'Drag and Drop',
                'gap-fill': 'Fill in the Gaps'
            };
            return types[type] || type;
        }

        // Load answer area based on question type
        function loadAnswerArea(question) {
            const answerArea = document.getElementById('answer-area');
            
            switch(question.type) {
                case 'text-flexible':
                    answerArea.innerHTML = `
                        <input type="text" class="answer-input" id="text-answer" 
                               placeholder="Type your answer here..." autocomplete="off">
                    `;
                    setTimeout(() => document.getElementById('text-answer').focus(), 100);
                    break;
                    
                case 'multiple-choice':
                case 'scenario':
                    answerArea.innerHTML = `
                        <div class="multiple-choice" id="multiple-choice">
                            ${question.choices.map((choice, index) => `
                                <div class="choice-option" onclick="selectChoice(${index})" data-choice="${index}">
                                    <div class="choice-letter">${String.fromCharCode(65 + index)}</div>
                                    <div>${choice}</div>
                                </div>
                            `).join('')}
                        </div>
                    `;
                    break;
                    
                case 'drag-drop':
                    const categories = Object.keys(question.categories);
                    answerArea.innerHTML = `
                        <div class="drag-drop-container">
                            <div class="drag-instruction">Drag the items to the correct categories</div>
                            <div class="drag-items" id="drag-items">
                                ${question.items.map(item => `
                                    <div class="drag-item" draggable="true" data-item="${item}">${item}</div>
                                `).join('')}
                            </div>
                            <div class="drop-zones" id="drop-zones">
                                ${categories.map(category => `
                                    <div class="drop-zone" data-category="${category}">
                                        <div class="drop-zone-title">${category}</div>
                                        <div class="dropped-items" id="dropped-${category.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}"></div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    setupDragAndDrop();
                    break;
                    
                case 'gap-fill':
                    let gapIndex = 0;
                    const gapText = question.gapText.replace(/_+/g, () => {
                        return `<input type="text" class="gap-input" data-gap="${gapIndex++}" autocomplete="off">`;
                    });
                    
                    answerArea.innerHTML = `
                        <div class="gap-fill-container">
                            ${gapText}
                        </div>
                    `;
                    break;
            }
        }

        // Multiple choice selection
        function selectChoice(index) {
            document.querySelectorAll('.choice-option').forEach(option => {
                option.classList.remove('selected');
            });
            document.querySelector(`[data-choice="${index}"]`).classList.add('selected');
        }

        // Drag and drop setup
        function setupDragAndDrop() {
            const dragItems = document.querySelectorAll('.drag-item');
            const dropZones = document.querySelectorAll('.drop-zone');
            
            dragItems.forEach(item => {
                item.addEventListener('dragstart', handleDragStart);
                item.addEventListener('dragend', handleDragEnd);
            });
            
            dropZones.forEach(zone => {
                zone.addEventListener('dragover', handleDragOver);
                zone.addEventListener('dragenter', handleDragEnter);
                zone.addEventListener('dragleave', handleDragLeave);
                zone.addEventListener('drop', handleDrop);
            });
        }

        function handleDragStart(e) {
            draggedItem = e.target;
            e.target.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', e.target.outerHTML);
        }

        function handleDragEnd(e) {
            e.target.classList.remove('dragging');
        }

        function handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }

        function handleDragEnter(e) {
            e.target.closest('.drop-zone').classList.add('drag-over');
        }

        function handleDragLeave(e) {
            if (!e.target.closest('.drop-zone').contains(e.relatedTarget)) {
                e.target.closest('.drop-zone').classList.remove('drag-over');
            }
        }

        function handleDrop(e) {
            e.preventDefault();
            const dropZone = e.target.closest('.drop-zone');
            dropZone.classList.remove('drag-over');
            
            if (draggedItem) {
                const category = dropZone.dataset.category;
                const droppedItems = dropZone.querySelector('.dropped-items');
                
                // Create dropped item
                const droppedItem = document.createElement('div');
                droppedItem.className = 'dropped-item';
                droppedItem.textContent = draggedItem.dataset.item;
                droppedItem.dataset.item = draggedItem.dataset.item;
                droppedItem.dataset.category = category;
                
                droppedItems.appendChild(droppedItem);
                draggedItem.remove();
                draggedItem = null;
            }
        }

        // Check answer functionality
        function checkAnswer() {
            const question = currentQuestions[currentQuestionIndex];
            let userAnswer = null;
            let result = 'incorrect';
            
            switch(question.type) {
                case 'text-flexible':
                    userAnswer = document.getElementById('text-answer').value;
                    result = checkFlexibleAnswer(userAnswer, question.correctAnswers, question.acceptableVariations);
                    break;
                    
                case 'multiple-choice':
                case 'scenario':
                    const selected = document.querySelector('.choice-option.selected');
                    if (selected) {
                        userAnswer = parseInt(selected.dataset.choice);
                        result = userAnswer === question.correct ? 'correct' : 'incorrect';
                    }
                    break;
                    
                case 'drag-drop':
                    userAnswer = {};
                    document.querySelectorAll('.dropped-item').forEach(item => {
                        const category = item.dataset.category;
                        const itemText = item.dataset.item;
                        if (!userAnswer[category]) userAnswer[category] = [];
                        userAnswer[category].push(itemText);
                    });
                    
                    result = checkDragDropAnswer(userAnswer, question.categories);
                    break;
                    
                case 'gap-fill':
                    userAnswer = [];
                    document.querySelectorAll('.gap-input').forEach(input => {
                        userAnswer.push(input.value);
                    });
                    
                    result = checkGapFillAnswer(userAnswer, question.correctGaps, question.acceptableGaps);
                    break;
            }
            
            // Store answer
            userAnswers[currentQuestionIndex] = {
                question: question,
                userAnswer: userAnswer,
                result: result
            };
            
            // Show feedback
            showFeedback(result, question.explanation);
            
            // Update UI
            document.getElementById('check-btn').style.display = 'none';
            document.getElementById('next-btn').style.display = 'inline-block';
        }

        function checkDragDropAnswer(userAnswer, correctCategories) {
            let correct = 0;
            let total = 0;
            
            for (const [category, correctItems] of Object.entries(correctCategories)) {
                const userItems = userAnswer[category] || [];
                for (const item of correctItems) {
                    total++;
                    if (userItems.includes(item)) {
                        correct++;
                    }
                }
            }
            
            const percentage = correct / total;
            if (percentage >= 0.8) return 'correct';
            if (percentage >= 0.5) return 'partial';
            return 'incorrect';
        }

        function checkGapFillAnswer(userAnswers, correctGaps, acceptableGaps) {
            let correct = 0;
            
            for (let i = 0; i < userAnswers.length; i++) {
                const userAnswer = normaliseText(userAnswers[i]);
                const correctAnswer = normaliseText(correctGaps[i]);
                const acceptableAnswers = acceptableGaps[i].map(a => normaliseText(a));
                
                if (userAnswer === correctAnswer || acceptableAnswers.includes(userAnswer)) {
                    correct++;
                }
            }
            
            const percentage = correct / userAnswers.length;
            if (percentage >= 0.8) return 'correct';
            if (percentage >= 0.5) return 'partial';
            return 'incorrect';
        }

        function showFeedback(result, explanation) {
            const feedback = document.getElementById('feedback');
            const feedbackIcon = document.getElementById('feedback-icon');
            const feedbackTitle = document.getElementById('feedback-title');
            const feedbackExplanation = document.getElementById('feedback-explanation');
            
            feedback.className = `feedback ${result}`;
            
            switch(result) {
                case 'correct':
                    feedbackIcon.textContent = '✓';
                    feedbackTitle.textContent = 'Correct!';
                    break;
                case 'partial':
                    feedbackIcon.textContent = '◐';
                    feedbackTitle.textContent = 'Partially Correct';
                    break;
                case 'incorrect':
                    feedbackIcon.textContent = '✗';
                    feedbackTitle.textContent = 'Incorrect';
                    break;
            }
            
            feedbackExplanation.textContent = explanation;
            feedback.style.display = 'block';
        }

        // Navigation functions
        function nextQuestion() {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                showResults();
            }
        }

        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion();
                
                // If we've already answered this question, show the feedback
                if (userAnswers[currentQuestionIndex]) {
                    const answer = userAnswers[currentQuestionIndex];
                    showFeedback(answer.result, answer.question.explanation);
                    document.getElementById('check-btn').style.display = 'none';
                    document.getElementById('next-btn').style.display = 'inline-block';
                }
            }
        }

        // Results functionality
        function showResults() {
            const quizEndTime = Date.now();
            const completionTime = Math.round((quizEndTime - quizStartTime) / (1000 * 60));
            
            document.getElementById('question-screen').style.display = 'none';
            document.getElementById('results-screen').style.display = 'block';
            
            // Calculate scores
            let correct = 0;
            let incorrect = 0;
            let partial = 0;
            
            userAnswers.forEach(answer => {
                if (answer.result === 'correct') correct++;
                else if (answer.result === 'partial') partial++;
                else incorrect++;
            });
            
            const totalScore = Math.round((correct + partial * 0.5) / userAnswers.length * 100);
            
            // Update display
            document.getElementById('final-score').textContent = `${totalScore}%`;
            document.getElementById('correct-count').textContent = correct;
            document.getElementById('incorrect-count').textContent = incorrect;
            document.getElementById('partial-count').textContent = partial;
            document.getElementById('completion-time').textContent = completionTime;
            
            // Results message based on performance
            const resultsMessage = document.getElementById('results-message');
            if (totalScore >= 85) {
                resultsMessage.textContent = 'Excellent work! You\'re well-prepared for assessments.';
            } else if (totalScore >= 70) {
                resultsMessage.textContent = 'Good progress! Review the areas where you lost marks.';
            } else if (totalScore >= 60) {
                resultsMessage.textContent = 'Getting there! Focus on reviewing the lesson content.';
            } else {
                resultsMessage.textContent = 'Keep practising! Revisit the lesson materials before your next attempt.';
            }
        }

        function restartQuiz() {
            currentMode = '';
            selectedSubtopics = [];
            currentQuestions = [];
            currentQuestionIndex = 0;
            userAnswers = [];
            quizStartTime = null;
            
            // Clear subtopic selections
            document.querySelectorAll('.subtopic-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            document.getElementById('results-screen').style.display = 'none';
            document.getElementById('mode-selection-screen').style.display = 'block';
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(event) {
            if (document.getElementById('question-screen').style.display === 'block') {
                if (event.key === 'Enter') {
                    const checkBtn = document.getElementById('check-btn');
                    const nextBtn = document.getElementById('next-btn');
                    
                    if (checkBtn.style.display !== 'none') {
                        checkAnswer();
                    } else if (nextBtn.style.display !== 'none') {
                        nextQuestion();
                    }
                    event.preventDefault();
                }
                
                // Number keys for multiple choice
                if (event.key >= '1' && event.key <= '4') {
                    const choiceIndex = parseInt(event.key) - 1;
                    const choice = document.querySelector(`[data-choice="${choiceIndex}"]`);
                    if (choice) {
                        selectChoice(choiceIndex);
                    }
                }
            }
        });
    </script>
</body>
</html>
