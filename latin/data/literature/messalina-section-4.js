// Messalina Section 4 - Lines 27-38
// Widespread knowledge of the affair prompts Narcissus to take action

var messalinaSection4 = {
    section: 4,
    lines: '27-38',
    title: 'Widespread knowledge of the affair prompts Narcissus to take action',
    
    latinText: 'igitur domus principis inhorruit, maximeque ei qui potentiam habebant timuerunt ne res verterentur: spem tamen habebant, si Claudio de atrocitate sceleris persuasissent, Messalinam posse opprimi sine quaestione damnatam; sed periculum esse ne ille defensionem audiret, neve clausae aures etiam confitenti non essent. Narcissus, occasiones quaerens, cum Caesar diu apud Ostiam moraretur, duas eius paelices largitione et promissis perpulit delationem subire. exim Calpurnia (id alteri paelici nomen), ubi datum est secretum, ad genua Caesaris provoluta nupsisse Messalinam Silio exclamat; altera paelice haec confirmante, Calpurnia cieri Narcissum postulat.',
    
    questions: [
        // ========== TRANSLATION QUESTIONS ==========
        {
            type: 'translation',
            latin: 'igitur domus principis inhorruit',
            question: 'Which translation is correct?',
            options: [
                { text: 'therefore the household of the emperor shuddered', correct: true },
                { text: 'therefore the house of the emperor shuddered', correct: false, feedback: '"domus" here means household (the people), not the physical building. The court was shaken by the news.' },
                { text: 'therefore the household of the emperor was horrified', correct: false, feedback: '"inhorruit" means shuddered/trembled, not simply horrified. It suggests physical trembling with fear.' },
                { text: 'and so the household of the emperor shuddered', correct: false, feedback: '"igitur" means "therefore/accordingly", showing consequence, not just "and so".' }
            ],
            correctFeedback: 'Correct! "domus principis" refers to the imperial household — the courtiers, freedmen, and officials. "inhorruit" (shuddered) conveys the physical tremor of fear that ran through them at the news.'
        },
        {
            type: 'translation',
            latin: 'maximeque ei qui potentiam habebant timuerunt ne res verterentur',
            question: 'Which translation is correct?',
            options: [
                { text: 'and especially those who had power feared that the situation might be overturned', correct: true },
                { text: 'and especially those who had power feared that things were being overturned', correct: false, feedback: '"verterentur" is imperfect subjunctive in a fear clause — "might be overturned" (future possibility), not "were being overturned" (present action).' },
                { text: 'and most of those who had power feared that the situation might be overturned', correct: false, feedback: '"maxime" means "especially/most of all", not "most of". It emphasises the intensity of fear among the powerful, not the number who feared.' },
                { text: 'and especially those who had power feared that they would be overturned', correct: false, feedback: '"res" means "the situation/state of affairs", not "they". They feared political revolution, not personal overthrow specifically.' }
            ],
            correctFeedback: 'Correct! "ei qui potentiam habebant" — the powerful freedmen and courtiers had most to lose. "ne res verterentur" — they feared revolution, a complete overturning of the current order under Silius.'
        },
        {
            type: 'translation',
            latin: 'si Claudio de atrocitate sceleris persuasissent, Messalinam posse opprimi sine quaestione damnatam',
            question: 'Which translation is correct?',
            options: [
                { text: 'if they had persuaded Claudius about the atrocity of the crime, Messalina could be crushed, condemned without a trial', correct: true },
                { text: 'if they persuaded Claudius about the atrocity of the crime, Messalina could be crushed, condemned without a trial', correct: false, feedback: '"persuasissent" is pluperfect subjunctive — "had persuaded", not simple past. The pluperfect shows this must happen first.' },
                { text: 'if they had persuaded Claudius about the atrocity of the crime, Messalina would be crushed, condemned without a trial', correct: false, feedback: '"posse opprimi" is present infinitive in indirect statement — "could be crushed" (possibility), not "would be" (certainty).' },
                { text: 'if they had persuaded Claudius about the atrocity of the crime, Messalina could be crushed, having been condemned without a trial', correct: false, feedback: '"sine quaestione damnatam" goes together — "condemned without a trial/investigation", not two separate ideas.' }
            ],
            correctFeedback: 'Correct! Their hope: convince Claudius of the crime\'s severity, then destroy Messalina quickly ("sine quaestione" — without formal trial). Speed was essential before Claudius could waver.'
        },
        {
            type: 'translation',
            latin: 'sed periculum esse ne ille defensionem audiret',
            question: 'Which translation is correct?',
            options: [
                { text: 'but there was danger that he might hear a defence', correct: true },
                { text: 'but there was danger that he would hear the defence', correct: false, feedback: '"defensionem" is indefinite here — "a defence", not "the defence". Any defence at all was dangerous.' },
                { text: 'but there was danger unless he heard a defence', correct: false, feedback: '"ne" after "periculum" introduces a fear clause — "that he might", not "unless". They feared he WOULD hear a defence.' },
                { text: 'but it was dangerous that he might hear a defence', correct: false, feedback: '"periculum esse" means "there was danger" (noun + infinitive), not "it was dangerous" (adjective).' }
            ],
            correctFeedback: 'Correct! The fear: if Claudius heard Messalina defend herself, he might be swayed. "periculum...ne" introduces what they feared would happen.'
        },
        {
            type: 'translation',
            latin: 'neve clausae aures etiam confitenti non essent',
            question: 'Which translation is correct?',
            options: [
                { text: 'and that his ears might not be closed even to one confessing', correct: true },
                { text: 'and that his ears would not be closed even when confessing', correct: false, feedback: '"confitenti" is dative (to one confessing), not temporal (when confessing). His ears might be open TO her even as she confessed guilt.' },
                { text: 'nor would his closed ears be open even to one confessing', correct: false, feedback: 'The grammar is "clausae aures non essent" — "ears might not be closed". It\'s about his ears potentially remaining OPEN.' },
                { text: 'and that his ears might be closed even to one confessing', correct: false, feedback: '"non essent" — might NOT be closed. They feared his ears would remain OPEN, even to a confession of guilt.' }
            ],
            correctFeedback: 'Correct! The double negative is tricky: they feared his ears "might not be closed" — i.e., might remain open — even to someone confessing guilt. Claudius might forgive even an admitted crime.'
        },
        {
            type: 'translation',
            latin: 'Narcissus, occasiones quaerens, cum Caesar diu apud Ostiam moraretur',
            question: 'Which translation is correct?',
            options: [
                { text: 'Narcissus, seeking opportunities, since Caesar was staying at Ostia for a long time', correct: true },
                { text: 'Narcissus, seeking an opportunity, when Caesar was staying at Ostia for a long time', correct: false, feedback: '"occasiones" is plural — "opportunities", not singular. Narcissus was watching for any chance.' },
                { text: 'Narcissus, seeking opportunities, while Caesar stayed at Ostia for a long time', correct: false, feedback: '"cum + subjunctive" here is causal (since/because), explaining WHY Narcissus had to act, not just temporal (while).' },
                { text: 'Narcissus, having sought opportunities, since Caesar was staying at Ostia for a long time', correct: false, feedback: '"quaerens" is present participle — "seeking", not perfect "having sought". He was actively looking for chances.' }
            ],
            correctFeedback: 'Correct! "cum + subjunctive" is causal here — Claudius\'s prolonged absence at Ostia was both the problem and the opportunity. Narcissus needed to act while the emperor was away.'
        },
        {
            type: 'translation',
            latin: 'duas eius paelices largitione et promissis perpulit delationem subire',
            question: 'Which translation is correct?',
            options: [
                { text: 'he drove two of his mistresses by bribery and promises to undertake the denunciation', correct: true },
                { text: 'he persuaded two of his mistresses by generosity and promises to undertake the denunciation', correct: false, feedback: '"largitione" means bribery/lavish giving in a political context, not neutral "generosity". And "perpulit" is stronger than "persuaded" — he drove/compelled them.' },
                { text: 'he drove two of her mistresses by bribery and promises to undertake the denunciation', correct: false, feedback: '"eius" refers to Caesar/Claudius — "his mistresses", not Messalina\'s. These were women with access to the emperor.' },
                { text: 'he drove two of his mistresses by bribery and promises to make the denunciation', correct: false, feedback: '"subire" means to undertake/undergo, not simply "make". They were taking on a dangerous task.' }
            ],
            correctFeedback: 'Correct! Narcissus bribed Claudius\'s own mistresses to deliver the news. "perpulit" (drove/compelled) shows he had to push hard — this was dangerous. "delationem subire" — to undertake the denunciation.'
        },
        {
            type: 'translation',
            latin: 'ad genua Caesaris provoluta nupsisse Messalinam Silio exclamat',
            question: 'Which translation is correct?',
            options: [
                { text: 'having thrown herself at Caesar\'s knees, she cries out that Messalina has married Silius', correct: true },
                { text: 'throwing herself at Caesar\'s knees, she cried out that Messalina had married Silius', correct: false, feedback: '"exclamat" is present tense (historic present for vividness) — "cries out". And "provoluta" is perfect participle — "having thrown herself".' },
                { text: 'having thrown herself at Caesar\'s knees, she cries out that Messalina is marrying Silius', correct: false, feedback: '"nupsisse" is perfect infinitive — "has married/married", not present "is marrying". The marriage has happened.' },
                { text: 'having fallen at Caesar\'s knees, she cries out that Messalina has married Silius', correct: false, feedback: '"provoluta" from "provolvo" means actively throwing oneself, not passively falling. It\'s a dramatic, deliberate gesture.' }
            ],
            correctFeedback: 'Correct! The dramatic scene: Calpurnia throws herself at Claudius\'s feet and cries out the devastating news. "nupsisse" (perfect infinitive) — it\'s done, Messalina HAS married Silius.'
        },
        {
            type: 'translation',
            latin: 'altera paelice haec confirmante, Calpurnia cieri Narcissum postulat',
            question: 'Which translation is correct?',
            options: [
                { text: 'with the other mistress confirming these things, Calpurnia demands that Narcissus be summoned', correct: true },
                { text: 'the other mistress confirming these things, Calpurnia demands that Narcissus be summoned', correct: false, feedback: '"altera paelice...confirmante" is ablative absolute — "with the other mistress confirming". The "with" is important for English clarity.' },
                { text: 'with the other mistress confirming these things, Calpurnia demands to summon Narcissus', correct: false, feedback: '"cieri Narcissum" is passive infinitive — "that Narcissus BE summoned", not active "to summon Narcissus".' },
                { text: 'with the other mistress confirming this, Calpurnia demands that Narcissus be called', correct: false, feedback: '"haec" is neuter plural — "these things", not singular "this". Multiple details were being confirmed.' }
            ],
            correctFeedback: 'Correct! The ablative absolute "altera paelice...confirmante" provides corroboration. Then Calpurnia calls for Narcissus — the mastermind enters to take control of the situation he engineered.'
        },
        
        // ========== STYLE & EFFECT QUESTIONS ==========
        {
            type: 'style',
            latin: 'domus principis inhorruit',
            question: 'What is the effect of the verb "inhorruit" (shuddered)?',
            options: [
                { text: 'It personifies the household, suggesting physical trembling with collective fear', correct: true },
                { text: 'It shows the building was physically shaking', correct: false, feedback: '"domus" means the household (people), not the building. The shuddering is metaphorical — the whole court trembled with fear.' },
                { text: 'It suggests the household was excited about the news', correct: false, feedback: '"inhorruit" indicates horror and fear, not excitement. The prefix "in-" intensifies the trembling.' },
                { text: 'It is a neutral description of the household\'s reaction', correct: false, feedback: 'The word is highly expressive, not neutral. "inhorruit" conveys visceral, physical fear running through the court.' }
            ],
            correctFeedback: 'Correct! "inhorruit" (from "inhorresco" — to shudder, bristle with fear) makes the household itself seem to tremble. It\'s vivid and physical — the news sent a shiver through the entire court.'
        },
        {
            type: 'style',
            latin: 'ei qui potentiam habebant',
            question: 'Why does Tacitus specify that "those who had power" were especially afraid?',
            options: [
                { text: 'They had the most to lose — a new regime under Silius would sweep them away', correct: true },
                { text: 'They were the only ones who knew about the affair', correct: false, feedback: 'The affair was public knowledge. The powerful feared most because they had most at stake, not because they had special knowledge.' },
                { text: 'They were responsible for letting the affair happen', correct: false, feedback: 'Their fear isn\'t about guilt but about survival. A revolution ("res verterentur") would replace them with Silius\'s people.' },
                { text: 'Tacitus is criticising them for being cowardly', correct: false, feedback: 'Their fear is rational, not cowardly. They correctly understood that regime change would mean their destruction.' }
            ],
            correctFeedback: 'Correct! The powerful freedmen — Narcissus, Pallas, Callistus — knew that if Silius became emperor, they would be replaced or killed. Their power depended on Claudius; "res verterentur" meant their ruin.'
        },
        {
            type: 'style',
            latin: 'sine quaestione damnatam',
            question: 'What does "sine quaestione" (without a trial) reveal about their strategy?',
            options: [
                { text: 'They wanted to destroy Messalina quickly before Claudius could be swayed by her defence', correct: true },
                { text: 'They believed Roman law did not require a trial for empresses', correct: false, feedback: 'It\'s not about legal requirements but tactical necessity. A trial would give Messalina a chance to influence Claudius.' },
                { text: 'They wanted to be merciful by avoiding a public trial', correct: false, feedback: 'Mercy isn\'t the motive — speed is. They feared any delay that might let Claudius hear her side.' },
                { text: 'Tacitus is criticising them for wanting an unfair process', correct: false, feedback: 'Tacitus presents this as cold calculation, not necessarily criticism. They knew Claudius\'s weakness and planned accordingly.' }
            ],
            correctFeedback: 'Correct! Speed was essential. "sine quaestione" — no formal investigation, no trial, no opportunity for Messalina to speak. They knew Claudius might forgive her if he heard her defence.'
        },
        {
            type: 'style',
            latin: 'neve clausae aures etiam confitenti non essent',
            question: 'What does this double negative construction reveal about Claudius?',
            options: [
                { text: 'He was so susceptible to Messalina that he might forgive her even if she admitted guilt', correct: true },
                { text: 'He was deaf and couldn\'t hear properly', correct: false, feedback: 'The "closed ears" are metaphorical — about willingness to listen, not physical hearing. They feared he would listen too readily.' },
                { text: 'He was a fair judge who always heard both sides', correct: false, feedback: 'It\'s not about fairness but weakness. They feared his emotional attachment would override justice.' },
                { text: 'Tacitus is praising Claudius for being merciful', correct: false, feedback: 'This isn\'t praise — it\'s an indictment of Claudius\'s weakness. A stronger emperor wouldn\'t need such careful handling.' }
            ],
            correctFeedback: 'Correct! The convoluted phrase captures their anxiety: even if Messalina CONFESSED, Claudius might still listen and forgive. His emotional dependence on her was that dangerous.'
        },
        {
            type: 'style',
            latin: 'largitione et promissis',
            question: 'What does Narcissus\'s use of "bribery and promises" reveal about the situation?',
            options: [
                { text: 'Even to save themselves, people had to be compelled — denouncing Messalina was terrifyingly dangerous', correct: true },
                { text: 'Narcissus was a generous and kind person', correct: false, feedback: '"largitio" in political contexts means bribery, not generosity. Narcissus was buying cooperation, not being kind.' },
                { text: 'The mistresses were greedy and wanted money', correct: false, feedback: 'They needed inducement because the task was dangerous, not because they were greedy. Accusing the empress could be fatal.' },
                { text: 'Tacitus disapproves of Narcissus\'s methods', correct: false, feedback: 'Tacitus presents this matter-of-factly. In a crisis, Narcissus used the tools available. The point is the difficulty, not moral judgement.' }
            ],
            correctFeedback: 'Correct! Narcissus had to bribe and promise because denouncing Messalina was extremely dangerous. No one would volunteer. "perpulit" (drove/compelled) shows how hard he had to push.'
        },
        {
            type: 'style',
            latin: 'ad genua Caesaris provoluta... exclamat',
            question: 'What is the effect of Calpurnia\'s dramatic gesture and cry?',
            options: [
                { text: 'The theatrical supplication makes the revelation impossible for Claudius to ignore or dismiss', correct: true },
                { text: 'It shows that Calpurnia was genuinely distressed about Messalina', correct: false, feedback: 'Calpurnia was paid to do this. The theatricality is calculated, not spontaneous emotion.' },
                { text: 'It was the normal way to address the emperor', correct: false, feedback: 'Throwing oneself at the emperor\'s knees was an extreme gesture of supplication, not normal court behaviour.' },
                { text: 'Tacitus is mocking Calpurnia for overacting', correct: false, feedback: 'The drama served its purpose — it forced Claudius to pay attention. Tacitus presents it as effective staging.' }
            ],
            correctFeedback: 'Correct! The prostration and cry are theatrical — and deliberately so. By making the scene so dramatic, Calpurnia ensured Claudius couldn\'t brush it aside. The staging was Narcissus\'s work.'
        },
        {
            type: 'style',
            latin: 'nupsisse Messalinam Silio',
            question: 'Why is the word order "nupsisse Messalinam Silio" effective?',
            options: [
                { text: 'The verb comes first, hitting Claudius immediately with the shocking action before he knows who', correct: true },
                { text: 'It follows normal Latin word order', correct: false, feedback: 'Latin word order is flexible, and this order is chosen for effect. Leading with "nupsisse" (has married) delivers the blow first.' },
                { text: 'Tacitus always puts verbs first', correct: false, feedback: 'Tacitus varies his word order constantly for effect. Here the verb-first order is a deliberate choice for impact.' },
                { text: 'It emphasises Silius as the most important word', correct: false, feedback: 'The emphasis is on "nupsisse" — the marriage itself. Silius\'s name comes last, after the shock has landed.' }
            ],
            correctFeedback: 'Correct! "nupsisse" (has married) hits first — the terrible verb before we even know the subject. Then "Messalinam" — his wife. Then "Silio" — to whom. The word order mirrors the shock of hearing it.'
        },
        
        // ========== COMPREHENSION QUESTIONS ==========
        {
            type: 'comprehension',
            latin: 'maximeque ei qui potentiam habebant timuerunt ne res verterentur',
            question: 'Why were the powerful freedmen especially afraid?',
            options: [
                { text: 'A revolution under Silius would replace them with new favourites', correct: true },
                { text: 'They were personally loyal to Messalina', correct: false, feedback: 'They weren\'t loyal to Messalina — they were protecting themselves. Their power came from Claudius, not her.' },
                { text: 'They feared punishment for not stopping the affair earlier', correct: false, feedback: 'Their fear was forward-looking ("ne res verterentur" — that things might be overturned), not backward about past failures.' },
                { text: 'They wanted Messalina to become more powerful', correct: false, feedback: 'The opposite — they feared Messalina and Silius gaining power. A new regime would sweep them away.' }
            ],
            correctFeedback: 'Correct! Freedmen like Narcissus held power through Claudius. If Silius became emperor ("res verterentur"), he would install his own people. Their survival required Claudius\'s survival.'
        },
        {
            type: 'comprehension',
            latin: 'sed periculum esse ne ille defensionem audiret',
            question: 'What was the main risk in telling Claudius?',
            options: [
                { text: 'Claudius might listen to Messalina\'s defence and forgive her', correct: true },
                { text: 'Claudius might not believe the accusation', correct: false, feedback: 'The fear wasn\'t disbelief but forgiveness. They worried he would believe it but forgive her anyway.' },
                { text: 'Claudius might punish the accusers instead', correct: false, feedback: 'The text focuses on his potential to forgive Messalina, not to punish accusers.' },
                { text: 'Messalina might escape before Claudius heard', correct: false, feedback: 'The danger was Claudius hearing her defence, not her escaping. They feared his weakness for her.' }
            ],
            correctFeedback: 'Correct! The freedmen knew Claudius\'s weakness. Even faced with undeniable proof, if he heard Messalina speak, she might talk her way out. They needed to condemn her before she could defend herself.'
        },
        {
            type: 'comprehension',
            latin: 'duas eius paelices largitione et promissis perpulit delationem subire',
            question: 'Why did Narcissus use Claudius\'s mistresses to deliver the news?',
            options: [
                { text: 'They had private access to the emperor and he would trust them', correct: true },
                { text: 'They were the only ones who knew about the marriage', correct: false, feedback: 'The marriage was public knowledge. Narcissus used the mistresses because of their ACCESS to Claudius, not special knowledge.' },
                { text: 'They wanted revenge on Messalina', correct: false, feedback: 'They had to be bribed and persuaded — they weren\'t eager volunteers seeking revenge.' },
                { text: 'Narcissus was afraid to speak to Claudius himself', correct: false, feedback: 'Narcissus did speak to Claudius — he was summoned after the mistresses broke the news. They were his opening move.' }
            ],
            correctFeedback: 'Correct! The mistresses had intimate access to Claudius and credibility with him. They could get a private audience ("datum est secretum") and deliver news that might not be believed from officials.'
        },
        {
            type: 'comprehension',
            latin: 'Calpurnia cieri Narcissum postulat',
            question: 'Why does Calpurnia immediately demand that Narcissus be summoned?',
            options: [
                { text: 'To bring in the mastermind who can take control and advise Claudius on action', correct: true },
                { text: 'Because she didn\'t know any more details', correct: false, feedback: 'She had been briefed by Narcissus. The summons brings him in to control the situation, not to provide more information.' },
                { text: 'Because Narcissus was the only one who could calm Claudius', correct: false, feedback: 'Narcissus\'s role was to push for action, not to calm Claudius. He needed to maintain momentum toward destroying Messalina.' },
                { text: 'Because Roman law required an official accuser', correct: false, feedback: 'This wasn\'t about legal procedure. Calpurnia handed off to Narcissus because he had planned the whole operation.' }
            ],
            correctFeedback: 'Correct! The mistresses were the opening act; Narcissus was the main player. Once they had Claudius\'s attention, Narcissus entered to press the case and guide the emperor\'s response. It was carefully staged.'
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.messalinaSection4 = messalinaSection4;
}
