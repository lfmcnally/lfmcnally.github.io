// Messalina Section 5 - Lines 39-49
// The marriage becomes known to Claudius

const messalinaSection5 = {
    section: 5,
    lines: '39-49',
    title: 'The marriage becomes known to Claudius',
    
    latinText: "qui 'discidiumne tuum' inquit 'novisti? Nam matrimonium Silii vidit populus et senatus et milites; ac nisi celeriter agis, tenet urbem maritus.' non solum rumor interea, sed undique nuntii ad Messalinam contendunt, qui Claudium omnia cognovisse et venire promptum ultioni adferrent. igitur Messalina Lucullianos in hortos, Silius dissimulando metui ad forum digrediuntur. illa tamen, quamquam res adversae consilium eximerent, ire obviam et aspici a marito statim constituit, quod saepe ei fuerat subsidium. misitque ut Britannicus et Octavia in complexum patris irent.",
    
    questions: [
        // ========== TRANSLATION QUESTIONS ==========
        {
            type: 'translation',
            latin: "discidiumne tuum novisti?",
            question: 'Which translation is correct? (Narcissus speaking to Claudius)',
            options: [
                { text: 'Do you know of your divorce?', correct: true },
                { text: 'Did you know of your divorce?', correct: false, feedback: '"novisti" is perfect tense but functions as present in meaning — "do you know" (have you come to know). The question is about his current awareness.' },
                { text: 'Do you know about your separation?', correct: false, feedback: '"discidium" specifically means divorce, not just separation. Narcissus uses the most shocking legal term.' },
                { text: 'Have you known of your divorce?', correct: false, feedback: 'The question asks about present knowledge, not past duration. "Do you know" captures the immediate challenge better.' }
            ],
            correctFeedback: 'Correct! Narcissus\'s opening is brutally direct: "discidiumne" — the -ne marks a yes/no question. He forces Claudius to confront the reality: his marriage is over, legally dissolved by Messalina\'s new marriage.'
        },
        {
            type: 'translation',
            latin: 'Nam matrimonium Silii vidit populus et senatus et milites',
            question: 'Which translation is correct?',
            options: [
                { text: 'For the people and the senate and the soldiers saw the marriage of Silius', correct: true },
                { text: 'For the people and the senate and the soldiers saw the wedding of Silius', correct: false, feedback: '"matrimonium" means marriage (the union), not just the wedding ceremony. The whole marriage is public knowledge.' },
                { text: 'For the people and the senate and the soldiers have seen the marriage of Silius', correct: false, feedback: '"vidit" is perfect tense, best translated as simple past "saw" in this narrative context.' },
                { text: 'For the people and the senate and the soldiers saw Silius\'s wedding', correct: false, feedback: '"matrimonium Silii" — "the marriage OF Silius" with genitive. The word order matters for emphasis.' }
            ],
            correctFeedback: 'Correct! The tricolon "populus et senatus et milites" is devastating — every sector of Roman society witnessed it. Note the singular verb "vidit" with multiple subjects, common in Latin.'
        },
        {
            type: 'translation',
            latin: 'ac nisi celeriter agis, tenet urbem maritus',
            question: 'Which translation is correct?',
            options: [
                { text: 'and unless you act quickly, the husband holds the city', correct: true },
                { text: 'and if you do not act quickly, the husband will hold the city', correct: false, feedback: '"tenet" is present tense — "holds", not future "will hold". Narcissus implies Silius already has control.' },
                { text: 'and unless you act quickly, her husband holds the city', correct: false, feedback: '"maritus" without "eius" is more pointed — just "the husband", emphasising that someone else now has that title.' },
                { text: 'and unless you acted quickly, the husband holds the city', correct: false, feedback: '"agis" is present tense — "you act", not past "you acted". This is urgent present advice.' }
            ],
            correctFeedback: 'Correct! "tenet urbem maritus" — the word "maritus" (husband) is a weapon. Silius is now THE husband. And he holds the city. The present tense suggests it\'s already happening.'
        },
        {
            type: 'translation',
            latin: 'non solum rumor interea, sed undique nuntii ad Messalinam contendunt',
            question: 'Which translation is correct?',
            options: [
                { text: 'meanwhile not only rumour, but messengers from all sides rush to Messalina', correct: true },
                { text: 'meanwhile not only rumour, but messengers from everywhere rush to Messalina', correct: false, feedback: '"undique" means "from all sides/directions", emphasising messengers coming from multiple sources, not just "everywhere".' },
                { text: 'meanwhile not only rumour, but messengers from all sides rushed to Messalina', correct: false, feedback: '"contendunt" is present tense (historic present) — "rush", giving vivid immediacy to the scene.' },
                { text: 'not only rumour meanwhile, but messengers from all sides rush to Messalina', correct: false, feedback: '"interea" (meanwhile) goes with the whole clause, placed after "rumor" for rhythm, but should come first in English.' }
            ],
            correctFeedback: 'Correct! The historic present "contendunt" makes the scene vivid — messengers are rushing NOW. "non solum...sed" builds from rumour to confirmed reports from all directions.'
        },
        {
            type: 'translation',
            latin: 'qui Claudium omnia cognovisse et venire promptum ultioni adferrent',
            question: 'Which translation is correct?',
            options: [
                { text: 'who reported that Claudius had learned everything and was coming ready for vengeance', correct: true },
                { text: 'who reported that Claudius knew everything and was coming ready for vengeance', correct: false, feedback: '"cognovisse" is perfect infinitive — "had learned", showing completed action. He has now found out.' },
                { text: 'who reported that Claudius had learned everything and came ready for vengeance', correct: false, feedback: '"venire" is present infinitive — "was coming", ongoing action. He is on his way, not already arrived.' },
                { text: 'who were reporting that Claudius had learned everything and was coming ready for vengeance', correct: false, feedback: '"adferrent" is imperfect subjunctive in a relative clause of purpose — "who reported/were to report", not continuous "were reporting".' }
            ],
            correctFeedback: 'Correct! "adferrent" is subjunctive in a relative clause of purpose (or characteristic). "promptum ultioni" — ready FOR vengeance (dative of purpose). The news: Claudius knows and is coming for revenge.'
        },
        {
            type: 'translation',
            latin: 'igitur Messalina Lucullianos in hortos, Silius dissimulando metui ad forum digrediuntur',
            question: 'Which translation is correct?',
            options: [
                { text: 'therefore Messalina departs to the gardens of Lucullus, Silius to the forum to conceal his fear', correct: true },
                { text: 'therefore Messalina and Silius depart to the gardens of Lucullus to conceal their fear at the forum', correct: false, feedback: 'They go to DIFFERENT places — Messalina to the gardens, Silius to the forum. "dissimulando metui" applies only to Silius.' },
                { text: 'therefore Messalina departs to the gardens of Lucullus, Silius to the forum concealing his fear', correct: false, feedback: '"dissimulando metui" is gerund + dative — "for concealing/to conceal his fear", purpose rather than manner.' },
                { text: 'therefore Messalina departs to Lucullus\'s gardens, Silius departs to the forum to hide his fear', correct: false, feedback: '"digrediuntur" is singular verb serving both subjects — we don\'t need to repeat "departs". The construction is elegant zeugma.' }
            ],
            correctFeedback: 'Correct! They split up: Messalina to the luxurious Gardens of Lucullus, Silius to the forum pretending normality. "dissimulando metui" — the gerund with dative expresses purpose: to conceal his fear.'
        },
        {
            type: 'translation',
            latin: 'quamquam res adversae consilium eximerent',
            question: 'Which translation is correct?',
            options: [
                { text: 'although adverse circumstances were removing her judgement', correct: true },
                { text: 'although adverse circumstances removed her judgement', correct: false, feedback: '"eximerent" is imperfect subjunctive — "were removing", ongoing action. Her judgement was slipping away as events unfolded.' },
                { text: 'although adverse things were removing her plan', correct: false, feedback: '"consilium" here means judgement/good sense, not a specific plan. And "res adversae" is the standard phrase for "adverse circumstances".' },
                { text: 'even though adverse circumstances were removing her judgement', correct: false, feedback: '"quamquam" specifically means "although" — it\'s a factual concession, not hypothetical "even though".' }
            ],
            correctFeedback: 'Correct! "quamquam" with subjunctive (unusual) adds uncertainty. Her "consilium" (judgement/good sense) was failing under pressure — yet she still managed to form a plan.'
        },
        {
            type: 'translation',
            latin: 'ire obviam et aspici a marito statim constituit',
            question: 'Which translation is correct?',
            options: [
                { text: 'she immediately decided to go to meet him and be seen by her husband', correct: true },
                { text: 'she immediately decided to go towards and be seen by her husband', correct: false, feedback: '"ire obviam" is an idiom meaning "to go to meet (someone)" — it\'s not just directional.' },
                { text: 'she immediately decided to go to meet him and to see her husband', correct: false, feedback: '"aspici" is PASSIVE infinitive — "to BE seen", not active "to see". She wants HIM to see HER.' },
                { text: 'she decided to go immediately to meet and be seen by her husband', correct: false, feedback: '"statim" modifies "constituit" — she decided IMMEDIATELY, not that she would go immediately.' }
            ],
            correctFeedback: 'Correct! Her strategy: be SEEN by Claudius. "aspici" is passive — she counted on her physical presence to sway him. The two infinitives "ire" and "aspici" show her plan: meet him, let him see her.'
        },
        {
            type: 'translation',
            latin: 'misitque ut Britannicus et Octavia in complexum patris irent',
            question: 'Which translation is correct?',
            options: [
                { text: 'and she sent orders that Britannicus and Octavia should go into their father\'s embrace', correct: true },
                { text: 'and she sent Britannicus and Octavia to go into their father\'s embrace', correct: false, feedback: '"misit ut...irent" — she sent ORDERS/word (implied), not the children directly. The ut-clause shows purpose.' },
                { text: 'and she sent orders that Britannicus and Octavia go into their father\'s arms', correct: false, feedback: '"complexum" specifically means embrace (the act of embracing), not just arms. It\'s more emotionally charged.' },
                { text: 'and she sent orders that Britannicus and Octavia would go into their father\'s embrace', correct: false, feedback: '"irent" is subjunctive — "should go", expressing purpose/command, not future "would go".' }
            ],
            correctFeedback: 'Correct! She deploys the children as emotional weapons. "in complexum patris" — into their father\'s embrace. She hoped their presence would soften Claudius\'s heart. A mother using her children to save herself.'
        },
        
        // ========== STYLE & EFFECT QUESTIONS ==========
        {
            type: 'style',
            latin: 'discidiumne tuum novisti?',
            question: 'What is the effect of Narcissus\'s blunt opening question?',
            options: [
                { text: 'The brutal directness forces Claudius to confront reality — he cannot evade or deny', correct: true },
                { text: 'It shows Narcissus was nervous and couldn\'t think of a better way to say it', correct: false, feedback: 'The directness is calculated, not nervous. Narcissus chose shock tactics to prevent Claudius from retreating into denial.' },
                { text: 'It was the polite Roman way to deliver bad news', correct: false, feedback: 'This is anything but polite — it\'s deliberately brutal. Narcissus hits Claudius with the worst word first: "divorce".' },
                { text: 'It suggests Narcissus enjoyed hurting Claudius', correct: false, feedback: 'Narcissus\'s motive is political survival, not cruelty. The bluntness serves a purpose: to galvanise Claudius into action.' }
            ],
            correctFeedback: 'Correct! "discidiumne" — the legal term for divorce hits first. No softening, no preparation. Narcissus knows that if Claudius has time to think, he might waver. Shock is the strategy.'
        },
        {
            type: 'style',
            latin: 'populus et senatus et milites',
            question: 'What is the effect of the tricolon "populus et senatus et milites"?',
            options: [
                { text: 'It shows the humiliation is total — every sector of Roman society witnessed the marriage', correct: true },
                { text: 'Tacitus is listing everyone who attended the wedding', correct: false, feedback: 'It\'s not a guest list — it\'s emphasising that ALL of Rome knows. The three groups represent the whole state.' },
                { text: 'It shows that the marriage had official approval', correct: false, feedback: 'Witnessing doesn\'t mean approving. The point is that Claudius\'s humiliation is universally known.' },
                { text: 'It suggests the wedding was a public holiday', correct: false, feedback: 'The emphasis is on universal knowledge of the scandal, not on the wedding being a celebration.' }
            ],
            correctFeedback: 'Correct! The tricolon covers all of Rome: the common people, the senate, the army. Claudius\'s disgrace is complete and public. There\'s nowhere to hide from the shame.'
        },
        {
            type: 'style',
            latin: 'tenet urbem maritus',
            question: 'Why is the word "maritus" (husband) so devastating here?',
            options: [
                { text: 'It declares that Silius — not Claudius — now holds the title of husband', correct: true },
                { text: 'It is simply the normal word for a married man', correct: false, feedback: 'The word is loaded with meaning here. By calling Silius "maritus", Narcissus implies Claudius is no longer Messalina\'s husband.' },
                { text: 'It shows that Narcissus respected Silius', correct: false, feedback: 'There\'s no respect — it\'s a verbal weapon. The title "husband" has been transferred from emperor to adulterer.' },
                { text: 'It refers to Claudius himself', correct: false, feedback: '"maritus" here refers to Silius — the new husband. That\'s what makes it so painful for Claudius to hear.' }
            ],
            correctFeedback: 'Correct! "maritus" — THE husband. Not "Silius" but "the husband", as if the title has legally transferred. Claudius is being told he\'s been replaced, not just cuckolded. The word cuts deep.'
        },
        {
            type: 'style',
            latin: 'Messalina Lucullianos in hortos, Silius... ad forum digrediuntur',
            question: 'What does the separation of Messalina and Silius suggest?',
            options: [
                { text: 'Their partnership fractures under pressure — they flee to face their fates separately', correct: true },
                { text: 'They had a coordinated escape plan', correct: false, feedback: 'Going to different places isn\'t coordination — it\'s fragmentation. The conspiracy dissolves as they scatter.' },
                { text: 'Messalina was abandoning Silius to save herself', correct: false, feedback: 'Both are trying to save themselves. The separation shows the partnership breaking apart, not one abandoning the other.' },
                { text: 'The gardens and forum were equally safe hiding places', correct: false, feedback: 'Neither place is truly safe. Silius goes to the forum to pretend normalcy; Messalina retreats. Both are desperate moves.' }
            ],
            correctFeedback: 'Correct! In crisis, they split up. The conspirators who were going to rule together now run in different directions. "digrediuntur" — they go apart. The unity of their ambition dissolves into individual survival.'
        },
        {
            type: 'style',
            latin: 'dissimulando metui',
            question: 'What does "dissimulando metui" (to conceal his fear) reveal about Silius?',
            options: [
                { text: 'Despite his bold rhetoric about "dangers as remedy for dangers", he is now terrified', correct: true },
                { text: 'He was genuinely confident and unafraid', correct: false, feedback: 'The opposite — he had to CONCEAL his fear. He goes to the forum pretending everything is normal, hiding his terror.' },
                { text: 'He was a skilled actor who enjoyed deception', correct: false, feedback: 'This isn\'t about enjoying deception — it\'s desperate survival. He pretends normality because revealing fear would doom him.' },
                { text: 'Tacitus admired his composure', correct: false, feedback: 'Tacitus is noting the gap between Silius\'s earlier bravado and his current terror. It\'s ironic, not admiring.' }
            ],
            correctFeedback: 'Correct! Remember Section 2: Silius urged action, calling danger a "remedy for dangers". Now danger has arrived, and he\'s terrified. His bold philosophy crumbles into fearful dissimulation.'
        },
        {
            type: 'style',
            latin: 'aspici a marito',
            question: 'Why did Messalina believe that being SEEN by Claudius would help her?',
            options: [
                { text: 'Her physical presence had swayed him before — she trusted in her personal power over him', correct: true },
                { text: 'She wanted to explain what had happened face to face', correct: false, feedback: 'It\'s not about explanation but about physical/emotional manipulation. She counted on her presence, not her arguments.' },
                { text: 'Roman law required her to be present at her trial', correct: false, feedback: 'This isn\'t about legal procedure — it\'s about personal influence. "quod saepe ei fuerat subsidium" — it had often been her resource.' },
                { text: 'She wanted to see Claudius\'s reaction', correct: false, feedback: '"aspici" is passive — to BE seen, not to see. She wanted HIM to see HER, hoping it would melt his anger.' }
            ],
            correctFeedback: 'Correct! "quod saepe ei fuerat subsidium" — this had OFTEN been her resource. Messalina had manipulated Claudius through personal presence before. She gambles that her face, her tears, will work again.'
        },
        {
            type: 'style',
            latin: 'misitque ut Britannicus et Octavia in complexum patris irent',
            question: 'What does sending the children reveal about Messalina\'s character?',
            options: [
                { text: 'She uses her own children as emotional weapons to manipulate their father', correct: true },
                { text: 'She wanted to protect the children from the chaos', correct: false, feedback: 'She\'s not protecting them — she\'s USING them. Sending them "into their father\'s embrace" is calculated manipulation.' },
                { text: 'She genuinely wanted Claudius to see his children one last time', correct: false, feedback: 'The purpose is tactical, not sentimental. The children are meant to soften Claudius\'s heart toward her.' },
                { text: 'It was normal for children to greet their father', correct: false, feedback: 'This isn\'t routine — it\'s a desperate gambit. In her hour of crisis, she deploys Britannicus and Octavia as emotional shields.' }
            ],
            correctFeedback: 'Correct! Even facing death, Messalina calculates. The children — Claudius\'s son and daughter — are sent to embrace their father, hoping paternal love will translate into mercy for their mother. Ruthless to the end.'
        },
        
        // ========== COMPREHENSION QUESTIONS ==========
        {
            type: 'comprehension',
            latin: 'ac nisi celeriter agis, tenet urbem maritus',
            question: 'What is Narcissus warning Claudius about?',
            options: [
                { text: 'Silius may already control Rome — Claudius must act immediately or lose everything', correct: true },
                { text: 'Silius is planning to attack the city', correct: false, feedback: 'It\'s not about military attack — Silius is trying to take control through his marriage to the empress. Political, not military, seizure.' },
                { text: 'Messalina has already divorced Claudius legally', correct: false, feedback: 'The warning is about Silius\'s power ("tenet urbem"), not just the divorce. Silius threatens to become emperor.' },
                { text: 'The people of Rome support Silius', correct: false, feedback: 'Narcissus doesn\'t claim popular support for Silius — he warns that Silius may seize control before Claudius can react.' }
            ],
            correctFeedback: 'Correct! "tenet urbem" — he holds the city. Present tense. Narcissus presents this as imminent or already happening. Unless Claudius acts "celeriter" (quickly), the throne itself is at stake.'
        },
        {
            type: 'comprehension',
            latin: 'qui Claudium omnia cognovisse et venire promptum ultioni adferrent',
            question: 'What news did the messengers bring to Messalina?',
            options: [
                { text: 'Claudius had learned everything and was coming, ready for vengeance', correct: true },
                { text: 'Claudius was unaware but soldiers were coming', correct: false, feedback: 'The key news was that Claudius KNEW — "omnia cognovisse". His ignorance, which had protected her, was over.' },
                { text: 'Claudius wanted to hear her explanation', correct: false, feedback: 'He was coming "promptum ultioni" — ready for vengeance, not ready to listen. This wasn\'t a negotiation.' },
                { text: 'Claudius had forgiven her and was coming to reconcile', correct: false, feedback: '"ultioni" means vengeance. There\'s no hint of forgiveness — he\'s coming to punish, not reconcile.' }
            ],
            correctFeedback: 'Correct! The worst possible news: Claudius knows ("omnia cognovisse") and is coming for revenge ("promptum ultioni"). Her window of immunity has closed. The emperor is aware and angry.'
        },
        {
            type: 'comprehension',
            latin: 'quod saepe ei fuerat subsidium',
            question: 'What does "quod saepe ei fuerat subsidium" tell us about Messalina\'s past?',
            options: [
                { text: 'She had often used her physical presence to manipulate Claudius successfully', correct: true },
                { text: 'She had often escaped from the gardens of Lucullus', correct: false, feedback: 'The "subsidium" (resource/help) refers to being seen by Claudius, not to any location.' },
                { text: 'She had often sent the children to their father', correct: false, feedback: 'The children are mentioned separately. This refers to her personal strategy of confronting Claudius directly.' },
                { text: 'She had often received military support', correct: false, feedback: '"subsidium" here is metaphorical — a resource for influencing Claudius, not literal military support.' }
            ],
            correctFeedback: 'Correct! This wasn\'t her first crisis — and meeting Claudius face-to-face had saved her before. "saepe" (often) reveals a pattern: when in trouble, use personal presence to manipulate. She\'s relying on an old trick.'
        },
        {
            type: 'comprehension',
            latin: 'misitque ut Britannicus et Octavia in complexum patris irent',
            question: 'Why did Messalina send her children to Claudius?',
            options: [
                { text: 'To use their emotional appeal to soften Claudius\'s anger toward her', correct: true },
                { text: 'To get them to safety away from the gardens', correct: false, feedback: 'She\'s sending them TO Claudius, not away from danger. They\'re being used as instruments of persuasion.' },
                { text: 'To say goodbye to their father before she fled', correct: false, feedback: 'She\'s not planning to flee — she\'s planning to meet Claudius herself. The children go first to prepare the ground.' },
                { text: 'Because Claudius had demanded to see them', correct: false, feedback: 'Claudius made no such demand. This is Messalina\'s initiative — using the children to manipulate their father.' }
            ],
            correctFeedback: 'Correct! Britannicus and Octavia were sent as advance emotional weapons. If Claudius embraced his children, perhaps he would feel merciful toward their mother. Messalina calculated to the end.'
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.messalinaSection5 = messalinaSection5;
}
