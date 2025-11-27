// Messalina Section 7 - Lines 60-69
// Narcissus arranges the assassination of Messalina

const messalinaSection7 = {
    section: 7,
    lines: '60-69',
    title: 'Narcissus arranges the assassination of Messalina',
    
    latinText: 'mirum inter haec silentium Claudii: omnia liberto oboediebat; qui contionem militum in castris paravit. apud eos praemonente Narcisso princeps pauca verba fecit: continuus dehinc clamor militum nomina reorum et poenas flagitantium. ductus Silius ad tribunal non defensionem, non moras temptavit, sed precatus est ut mors acceleraretur. interim Messalina Lucullianis in hortis prolatare vitam, componere preces, nonnulla spe et ira: tantam superbiam etiam tum gerebat. ac nisi caedem eius Narcissus properavisset, vertisset pernicies in accusatorem.',
    
    questions: [
        // ========== TRANSLATION QUESTIONS ==========
        {
            type: 'translation',
            latin: 'mirum inter haec silentium Claudii',
            question: 'Which translation is correct?',
            options: [
                { text: 'remarkable amid these events was the silence of Claudius', correct: true },
                { text: 'among these things the silence of Claudius was strange', correct: false, feedback: '"mirum" means remarkable/astonishing, stronger than just "strange". Tacitus emphasises how extraordinary it was.' },
                { text: 'remarkable among these was Claudius\'s silence', correct: false, feedback: '"inter haec" means "amid these events/circumstances", not "among these (things)" as if listing items.' },
                { text: 'the remarkable silence of Claudius was between these events', correct: false, feedback: '"inter haec" is idiomatic — "amid/during these events", not literally "between".' }
            ],
            correctFeedback: 'Correct! Tacitus marvels at Claudius\'s passivity — "mirum...silentium". The emperor says nothing while his freedman takes control. The word order emphasises "mirum" (remarkable) at the start.'
        },
        {
            type: 'translation',
            latin: 'omnia liberto oboediebat',
            question: 'Which translation is correct?',
            options: [
                { text: 'he obeyed the freedman in everything', correct: true },
                { text: 'everything obeyed the freedman', correct: false, feedback: '"omnia" is accusative of respect — "in all things/everything", not the subject. Claudius obeyed in everything.' },
                { text: 'he obeyed all the freedmen', correct: false, feedback: '"liberto" is dative singular — "the freedman" (Narcissus), not plural "freedmen".' },
                { text: 'he was obedient to the freedman in everything', correct: false, feedback: '"oboediebat" is active imperfect — "he obeyed/was obeying", better as active verb than passive "was obedient".' }
            ],
            correctFeedback: 'Correct! The emperor obeyed his freedman "in everything" — a stunning reversal of the proper hierarchy. Narcissus commands; Claudius obeys. "omnia" as accusative of respect emphasises the totality.'
        },
        {
            type: 'translation',
            latin: 'qui contionem militum in castris paravit',
            question: 'Which translation is correct?',
            options: [
                { text: 'who prepared an assembly of soldiers in the camp', correct: true },
                { text: 'who prepared the assembly of soldiers in the camps', correct: false, feedback: '"castris" could be singular or plural in form, but "the camp" (Praetorian) is meant. And "contionem" is indefinite — "an assembly".' },
                { text: 'who had prepared an assembly of soldiers in the camp', correct: false, feedback: '"paravit" is perfect — "prepared", not pluperfect "had prepared". It\'s part of the main narrative sequence.' },
                { text: 'which prepared an assembly of soldiers in the camp', correct: false, feedback: '"qui" refers to Narcissus (masculine), not to a neuter antecedent. He, not something, prepared the assembly.' }
            ],
            correctFeedback: 'Correct! Narcissus staged a military assembly — "contionem militum". He brought the soldiers together to witness and demand punishment, creating momentum that Claudius couldn\'t resist.'
        },
        {
            type: 'translation',
            latin: 'apud eos praemonente Narcisso princeps pauca verba fecit',
            question: 'Which translation is correct?',
            options: [
                { text: 'before them, with Narcissus prompting, the emperor spoke few words', correct: true },
                { text: 'before them, with Narcissus warning, the emperor spoke a few words', correct: false, feedback: '"praemonente" from "praemoneo" means prompting/coaching beforehand, not warning. Narcissus was telling Claudius what to say.' },
                { text: 'among them, with Narcissus prompting, the emperor made a short speech', correct: false, feedback: '"pauca verba" means "few words" literally — emphasising how little Claudius actually said, not just that the speech was short.' },
                { text: 'before them, Narcissus prompting, the emperor spoke few words', correct: false, feedback: '"praemonente Narcisso" is ablative absolute — "with Narcissus prompting" needs the "with" for clarity in English.' }
            ],
            correctFeedback: 'Correct! "praemonente Narcisso" — with Narcissus coaching him. The emperor could barely speak; his freedman had to prompt him. "pauca verba" — just a few words. Claudius is a puppet.'
        },
        {
            type: 'translation',
            latin: 'continuus dehinc clamor militum nomina reorum et poenas flagitantium',
            question: 'Which translation is correct?',
            options: [
                { text: 'then continuous shouting from the soldiers demanding the names of the guilty and their punishment', correct: true },
                { text: 'then continuous shouting of the soldiers demanding the names of the guilty and punishment', correct: false, feedback: '"militum...flagitantium" — soldiers WHO WERE demanding. The genitive participle describes the soldiers, making them the demanders.' },
                { text: 'then the soldiers continuously shouted, demanding the names of the guilty and their punishment', correct: false, feedback: 'The Latin is nominal — "clamor" (shouting) is the subject, not "soldiers shouted" as a verb phrase.' },
                { text: 'then continuous shouting from the soldiers demanding the names of the defendants and their punishments', correct: false, feedback: '"reorum" means "the guilty/accused", and "poenas" is best as singular concept "punishment" even though plural in form.' }
            ],
            correctFeedback: 'Correct! The soldiers erupted on cue — "continuus clamor" (continuous shouting). "flagitantium" (demanding) shows their aggressive insistence. The crowd pressure makes Claudius\'s decision appear inevitable.'
        },
        {
            type: 'translation',
            latin: 'ductus Silius ad tribunal non defensionem, non moras temptavit',
            question: 'Which translation is correct?',
            options: [
                { text: 'Silius, led to the tribunal, attempted neither a defence nor delays', correct: true },
                { text: 'Silius was led to the tribunal and attempted neither defence nor delays', correct: false, feedback: '"ductus" is a participle — "having been led/led" — not a main verb. The main verb is "temptavit".' },
                { text: 'led to the tribunal, Silius did not attempt defence or delay', correct: false, feedback: '"non...non" is emphatic paired negation — "neither...nor" captures the deliberate repetition better.' },
                { text: 'Silius, having been led to the tribunal, attempted no defence and no delays', correct: false, feedback: '"non defensionem, non moras" — the parallel "non...non" structure is "neither...nor", more elegant than repeated "no".' }
            ],
            correctFeedback: 'Correct! Silius didn\'t even try — "non defensionem, non moras". The paired negatives emphasise his complete surrender. He knew it was hopeless.'
        },
        {
            type: 'translation',
            latin: 'sed precatus est ut mors acceleraretur',
            question: 'Which translation is correct?',
            options: [
                { text: 'but he begged that his death be hastened', correct: true },
                { text: 'but he prayed that death would be hastened', correct: false, feedback: '"mors" is specifically HIS death, and "acceleraretur" is subjunctive in a purpose/request clause — "be hastened", not future "would be".' },
                { text: 'but he begged that his death should be hastened', correct: false, feedback: '"be hastened" is more natural English for Latin subjunctive in indirect command than "should be hastened".' },
                { text: 'but he asked that his death be speeded up', correct: false, feedback: '"precatus est" means begged/prayed — stronger than just "asked". Silius is desperate for it to end.' }
            ],
            correctFeedback: 'Correct! Silius\'s only request: make it quick. "precatus est" (he begged) — the deponent verb shows his desperation. No defence, no delay, just a plea for swift death.'
        },
        {
            type: 'translation',
            latin: 'interim Messalina Lucullianis in hortis prolatare vitam, componere preces',
            question: 'Which translation is correct?',
            options: [
                { text: 'meanwhile Messalina in the Gardens of Lucullus was prolonging her life, composing appeals', correct: true },
                { text: 'meanwhile Messalina in Lucullus\'s gardens prolonged her life, composed appeals', correct: false, feedback: '"prolatare" and "componere" are historic infinitives — vivid present-tense narration, best as "was prolonging, was composing".' },
                { text: 'meanwhile Messalina in the Gardens of Lucullus to prolong her life, to compose appeals', correct: false, feedback: 'Historic infinitives function as main verbs in vivid narrative — they need translation as finite verbs, not just infinitives.' },
                { text: 'meanwhile Messalina was prolonging her life in the Gardens of Lucullus, preparing prayers', correct: false, feedback: '"preces" means appeals/entreaties (to Claudius), not religious prayers. She\'s drafting pleas for mercy.' }
            ],
            correctFeedback: 'Correct! Historic infinitives "prolatare...componere" give vivid, ongoing action. Messalina clings to life, desperately drafting appeals. The contrast with Silius\'s surrender is stark.'
        },
        {
            type: 'translation',
            latin: 'ac nisi caedem eius Narcissus properavisset, vertisset pernicies in accusatorem',
            question: 'Which translation is correct?',
            options: [
                { text: 'and if Narcissus had not hastened her death, destruction would have turned upon the accuser', correct: true },
                { text: 'and unless Narcissus hastened her death, destruction would turn upon the accuser', correct: false, feedback: '"properavisset" and "vertisset" are pluperfect subjunctives — past contrary-to-fact condition. "had not hastened...would have turned".' },
                { text: 'and if Narcissus had not hurried her murder, destruction would have turned on the accuser', correct: false, feedback: '"caedem" is better as "death/killing" here; "murder" implies illegality, but this was quasi-official execution.' },
                { text: 'and if Narcissus had not hastened her death, ruin would have fallen upon the accuser', correct: false, feedback: '"vertisset...in" means "would have turned UPON" — the destruction reversing direction onto Narcissus himself.' }
            ],
            correctFeedback: 'Correct! A past contrary-to-fact condition: if Narcissus hadn\'t acted fast, HE would have been destroyed. Messalina was regaining influence. "pernicies in accusatorem" — destruction turning on the accuser.'
        },
        
        // ========== STYLE & EFFECT QUESTIONS ==========
        {
            type: 'style',
            latin: 'mirum inter haec silentium Claudii',
            question: 'What does Claudius\'s silence reveal about the power dynamics?',
            options: [
                { text: 'The emperor has become a passive figurehead while his freedman controls events', correct: true },
                { text: 'Claudius was wisely letting others handle the situation', correct: false, feedback: 'Tacitus presents this as "mirum" (remarkable/astonishing) — not wisdom but shocking passivity. An emperor should command, not be silent.' },
                { text: 'Claudius was too emotional to speak', correct: false, feedback: 'The text doesn\'t suggest emotion — it suggests abdication of power. He "obeyed" his freedman in everything.' },
                { text: 'Silence was the proper imperial response to such scandals', correct: false, feedback: '"mirum" indicates this was extraordinary, not proper. Tacitus is emphasising how bizarre Claudius\'s passivity was.' }
            ],
            correctFeedback: 'Correct! The power inversion is complete: "omnia liberto oboediebat" — he obeyed the freedman in everything. The emperor is silent; the ex-slave commands. Tacitus finds this "mirum" — astonishing.'
        },
        {
            type: 'style',
            latin: 'praemonente Narcisso... pauca verba',
            question: 'What is significant about Narcissus prompting Claudius to speak "few words"?',
            options: [
                { text: 'The emperor cannot even address his own troops without his freedman\'s coaching', correct: true },
                { text: 'Claudius was an excellent public speaker who kept it brief', correct: false, feedback: 'The opposite — he needed prompting ("praemonente") to say even a few words. This is incompetence, not skill.' },
                { text: 'Brevity was valued in Roman military addresses', correct: false, feedback: 'The point isn\'t rhetorical style but Claudius\'s dependency. He needs Narcissus to tell him what to say.' },
                { text: 'Narcissus was being respectful by limiting the emperor\'s exposure', correct: false, feedback: 'Narcissus was CONTROLLING the emperor, not protecting him. "pauca verba" shows how little Claudius contributed.' }
            ],
            correctFeedback: 'Correct! "praemonente Narcisso" — with Narcissus coaching him. The emperor of Rome needs his freedman to tell him what to say to his own soldiers. And even then, only "pauca verba" — a few words.'
        },
        {
            type: 'style',
            latin: 'non defensionem, non moras temptavit',
            question: 'What does the repetition of "non...non" emphasise about Silius?',
            options: [
                { text: 'His complete surrender — he abandoned any hope of survival', correct: true },
                { text: 'His bravery in facing death without complaint', correct: false, feedback: 'It\'s not bravery — it\'s despair. He begs for quick death, not courageous acceptance.' },
                { text: 'His guilt was so obvious he couldn\'t defend himself', correct: false, feedback: 'The emphasis is on his psychological state, not the strength of evidence. He simply gave up entirely.' },
                { text: 'Roman law prevented him from defending himself', correct: false, feedback: 'Nothing prevented a defence — he chose not to attempt one. "temptavit" implies he could have tried.' }
            ],
            correctFeedback: 'Correct! "non...non" — the emphatic paired negatives hammer home his total capitulation. No defence, no delay. His bold philosophy from Section 2 ("dangers as remedy for dangers") has collapsed into despair.'
        },
        {
            type: 'style',
            latin: 'prolatare vitam, componere preces',
            question: 'What is the effect of the historic infinitives "prolatare...componere"?',
            options: [
                { text: 'They create vivid, immediate action — we see Messalina desperately clinging to life', correct: true },
                { text: 'They show uncertainty about what Messalina was doing', correct: false, feedback: 'Historic infinitives don\'t indicate uncertainty — they\'re a stylistic choice for vivid, present-tense narration.' },
                { text: 'They indicate that these were her intentions, not her actual actions', correct: false, feedback: 'Historic infinitives describe actual actions vividly, not just intentions. She WAS prolonging life and composing appeals.' },
                { text: 'Tacitus is quoting from another source', correct: false, feedback: 'Historic infinitives are Tacitus\'s own stylistic choice for vivid narrative, not quotation markers.' }
            ],
            correctFeedback: 'Correct! Historic infinitives bring us into the scene: Messalina prolonging, composing, hoping. The rapid, staccato infinitives convey her frantic activity as death approaches.'
        },
        {
            type: 'style',
            latin: 'nonnulla spe et ira: tantam superbiam etiam tum gerebat',
            question: 'What does "tantam superbiam etiam tum gerebat" (she still maintained such arrogance) reveal?',
            options: [
                { text: 'Even facing death, Messalina\'s pride remained — she couldn\'t accept her downfall', correct: true },
                { text: 'She was confident she would be saved', correct: false, feedback: '"spe et ira" (hope AND anger) shows mixed emotions, not confidence. And "superbia" is arrogance, a character flaw.' },
                { text: 'Tacitus admired her courage under pressure', correct: false, feedback: '"superbia" is negative — arrogance/pride. Tacitus is criticising her inability to accept reality, not praising courage.' },
                { text: 'Her behaviour was normal for a Roman aristocrat', correct: false, feedback: '"tantam...etiam tum" — SUCH arrogance, EVEN THEN. Tacitus emphasises how extraordinary and inappropriate it was.' }
            ],
            correctFeedback: 'Correct! "etiam tum" — even now, even at this point. Facing execution, she still has "superbia" (arrogance). Her pride is so ingrained she cannot humble herself even to save her life.'
        },
        {
            type: 'style',
            latin: 'vertisset pernicies in accusatorem',
            question: 'What does the conditional "vertisset pernicies in accusatorem" reveal about the precariousness of the situation?',
            options: [
                { text: 'Narcissus himself was in mortal danger — if Messalina survived, he would be destroyed', correct: true },
                { text: 'The accusers were always punished in Roman law', correct: false, feedback: 'This isn\'t about legal procedure — it\'s about political survival. If Claudius forgave Messalina, Narcissus would be her first victim.' },
                { text: 'Tacitus is criticising Narcissus for acting too hastily', correct: false, feedback: 'Tacitus presents it as necessary — delay would have been fatal for Narcissus. The conditional shows he HAD to act fast.' },
                { text: 'Messalina was planning to accuse Narcissus of crimes', correct: false, feedback: 'The danger was her regaining influence over Claudius, not formal accusation. She\'d destroy Narcissus if she survived.' }
            ],
            correctFeedback: 'Correct! The past contrary-to-fact shows how close Narcissus came to ruin. "pernicies in accusatorem" — destruction upon the accuser. This wasn\'t just about justice; it was survival. Kill or be killed.'
        },
        
        // ========== COMPREHENSION QUESTIONS ==========
        {
            type: 'comprehension',
            latin: 'omnia liberto oboediebat',
            question: 'What was unusual about Claudius\'s behaviour during this crisis?',
            options: [
                { text: 'The emperor obeyed his freedman in everything, reversing the natural hierarchy', correct: true },
                { text: 'He took decisive action to punish the guilty', correct: false, feedback: 'The opposite — he was passive and silent. Narcissus took all the action; Claudius just obeyed.' },
                { text: 'He showed appropriate grief for his wife\'s betrayal', correct: false, feedback: 'The text emphasises his silence and obedience, not grief. He seems more confused than grieving.' },
                { text: 'He consulted the senate before acting', correct: false, feedback: 'He didn\'t consult anyone — he simply obeyed Narcissus. No senatorial involvement is mentioned.' }
            ],
            correctFeedback: 'Correct! An emperor obeying a freedman "in everything" is a complete inversion of Roman social order. Freedmen were former slaves; they should obey, not command. Claudius\'s passivity shocked Tacitus.'
        },
        {
            type: 'comprehension',
            latin: 'ductus Silius ad tribunal non defensionem, non moras temptavit, sed precatus est ut mors acceleraretur',
            question: 'How did Silius behave at his trial?',
            options: [
                { text: 'He offered no defence and only begged for a quick death', correct: true },
                { text: 'He defended himself eloquently but was condemned anyway', correct: false, feedback: '"non defensionem...temptavit" — he didn\'t even TRY a defence. His only words were a plea for quick death.' },
                { text: 'He tried to blame everything on Messalina', correct: false, feedback: 'He blamed no one — he simply surrendered. "non defensionem, non moras" — neither defence nor delays.' },
                { text: 'He demanded a fair trial before the senate', correct: false, feedback: 'He demanded nothing except speed — "ut mors acceleraretur". He wanted it over as fast as possible.' }
            ],
            correctFeedback: 'Correct! Silius completely surrendered. No defence, no delays — just "precatus est ut mors acceleraretur" (he begged that death be hastened). His bold plans had collapsed into despair.'
        },
        {
            type: 'comprehension',
            latin: 'interim Messalina... prolatare vitam, componere preces, nonnulla spe et ira',
            question: 'What was Messalina doing while Silius faced trial?',
            options: [
                { text: 'Prolonging her life and composing appeals, with some hope and anger', correct: true },
                { text: 'Accepting her fate with dignity', correct: false, feedback: 'The opposite — she was desperately fighting. "prolatare vitam" (prolonging life), "componere preces" (composing appeals).' },
                { text: 'Trying to escape from Rome', correct: false, feedback: 'She stayed in the Gardens of Lucullus, composing appeals. She was fighting through persuasion, not flight.' },
                { text: 'Mourning for Silius', correct: false, feedback: 'No mourning is mentioned — she was focused on saving herself, with "spe et ira" (hope and anger).' }
            ],
            correctFeedback: 'Correct! While Silius surrendered, Messalina fought on. "prolatare vitam" — prolonging life, buying time. "componere preces" — drafting appeals to Claudius. Still hoping, still angry, still proud.'
        },
        {
            type: 'comprehension',
            latin: 'ac nisi caedem eius Narcissus properavisset, vertisset pernicies in accusatorem',
            question: 'Why did Narcissus need to act quickly?',
            options: [
                { text: 'If Messalina had survived, she would have destroyed him — the accuser would become the victim', correct: true },
                { text: 'He wanted to impress Claudius with his efficiency', correct: false, feedback: 'This was about survival, not impressing Claudius. If Messalina regained influence, Narcissus would be killed.' },
                { text: 'Roman law required swift execution', correct: false, feedback: 'Legal requirements aren\'t the issue — political survival is. Narcissus knew delay was dangerous for himself.' },
                { text: 'The soldiers were growing impatient', correct: false, feedback: 'The danger was Claudius softening toward Messalina, not soldier impatience.' }
            ],
            correctFeedback: 'Correct! "pernicies in accusatorem" — destruction upon the accuser. Narcissus knew that if Claudius forgave Messalina, she would have Narcissus killed. He had to finish her before she finished him.'
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.messalinaSection7 = messalinaSection7;
}
