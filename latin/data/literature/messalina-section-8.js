// Messalina Section 8 - Lines 70-79
// Narcissus orders a tribune to murder Messalina

var messalinaSection8 = {
    section: 8,
    lines: '70-79',
    title: 'Narcissus orders a tribune to murder Messalina',
    
    latinText: 'nam Claudius domum regressus, ubi cena vinoque incaluit, imperavit ut femina misera (hoc enim verbo Claudium usum esse ferunt) ad causam dicendam postridie adesset. quod ubi Narcissus audivit et languescere iram redire amorem vidit, timebat, si moraretur, propinquam noctem et uxorii cubiculi memoriam; igitur prorumpit denuntiatque centurionibus et tribuno, qui aderat, exsequi caedem: ita imperatorem iubere. missus quoque unus e libertis: is raptim in hortos praegressus repperit Messalinam, humi fusam;',
    
    questions: [
        // ========== TRANSLATION QUESTIONS ==========
        {
            type: 'translation',
            latin: 'nam Claudius domum regressus, ubi cena vinoque incaluit',
            question: 'Which translation is correct?',
            options: [
                { text: 'for Claudius, having returned home, when he had grown warm with dinner and wine', correct: true },
                { text: 'for Claudius, returning home, when he grew warm with dinner and wine', correct: false, feedback: '"regressus" is a perfect participle — "having returned", completed action before the main clause.' },
                { text: 'for Claudius, having returned home, where he grew warm with dinner and wine', correct: false, feedback: '"ubi" here is temporal (when), not locative (where). It marks the time, not the place.' },
                { text: 'for when Claudius returned home, he grew warm with dinner and wine', correct: false, feedback: '"regressus" is a participle, not a subordinate clause. "domum regressus" = having returned home.' }
            ],
            correctFeedback: 'Correct! "incaluit" (grew warm/heated up) from food and wine — Claudius was relaxing, his anger cooling. This sets up his dangerous change of heart.'
        },
        {
            type: 'translation',
            latin: 'imperavit ut femina misera ad causam dicendam postridie adesset',
            question: 'Which translation is correct?',
            options: [
                { text: 'he ordered that the wretched woman should be present the next day to plead her case', correct: true },
                { text: 'he ordered the wretched woman to be present the next day to plead her case', correct: false, feedback: '"ut...adesset" is a purpose clause — "that she should be present", not an accusative-infinitive construction.' },
                { text: 'he ordered that the poor woman should be present the next day to plead her case', correct: false, feedback: '"misera" means wretched/pitiable, showing Claudius\'s softening attitude, more than just "poor".' },
                { text: 'he commanded that the wretched woman be present the next day to speak her case', correct: false, feedback: '"ad causam dicendam" — gerundive of purpose, "to plead/defend her case", a legal term for self-defence.' }
            ],
            correctFeedback: 'Correct! Claudius is softening — "femina misera" (wretched woman). He\'s giving her a chance to speak. "ad causam dicendam" — to plead her case. Exactly what Narcissus feared.'
        },
        {
            type: 'translation',
            latin: 'hoc enim verbo Claudium usum esse ferunt',
            question: 'Which translation is correct?',
            options: [
                { text: 'for they say that Claudius used this word', correct: true },
                { text: 'for they report that Claudius had used this word', correct: false, feedback: '"usum esse" is perfect infinitive in indirect statement — "used", not pluperfect "had used". It refers to that moment.' },
                { text: 'for they say that this word was used by Claudius', correct: false, feedback: '"Claudium usum esse" — Claudius (acc.) having used (deponent), active meaning. He used it, not passive.' },
                { text: 'for this word they say Claudius used', correct: false, feedback: 'Word order change obscures "hoc verbo" as ablative — "used THIS word". Tacitus highlights the specific word "misera".' }
            ],
            correctFeedback: 'Correct! Tacitus cites his source — "ferunt" (they say). The specific word "misera" is significant enough to note. Claudius pitied her. That one word told Narcissus everything.'
        },
        {
            type: 'translation',
            latin: 'quod ubi Narcissus audivit et languescere iram redire amorem vidit',
            question: 'Which translation is correct?',
            options: [
                { text: 'when Narcissus heard this and saw that anger was weakening and love returning', correct: true },
                { text: 'when Narcissus heard this and saw that anger was weakening and love was returning', correct: false, feedback: 'Both infinitives should be parallel — "was weakening...returning" or "weakening...returning". The second "was" is unnecessary.' },
                { text: 'which when Narcissus heard and saw anger weakening and love returning', correct: false, feedback: '"quod ubi" — "when this" or "when this happened". And "vidit" takes accusative + infinitive, properly translated.' },
                { text: 'when Narcissus heard and saw this, that anger was weakening and love returning', correct: false, feedback: '"quod" is the object of "audivit" — he heard THIS (the order). Then "vidit" has its own objects (the anger/love).' }
            ],
            correctFeedback: 'Correct! Narcissus reads the situation instantly: "languescere iram" (anger weakening), "redire amorem" (love returning). The accusative + infinitive construction shows what he SAW happening.'
        },
        {
            type: 'translation',
            latin: 'timebat, si moraretur, propinquam noctem et uxorii cubiculi memoriam',
            question: 'Which translation is correct?',
            options: [
                { text: 'he feared, if he delayed, the approaching night and the memory of the marriage bed', correct: true },
                { text: 'he feared, if he was delayed, the approaching night and the memory of the marriage bed', correct: false, feedback: '"moraretur" is active (deponent) — "if HE delayed", not passive "if he was delayed". Narcissus is considering HIS own action.' },
                { text: 'he was afraid that, if he delayed, the approaching night and the memory of the marriage bed', correct: false, feedback: 'The sentence structure has "timebat" governing the accusatives directly — he feared the night and memory, not a subordinate clause.' },
                { text: 'he feared, if he delayed, the coming night and the memory of the wife\'s bedroom', correct: false, feedback: '"uxorii cubiculi" — "of the marriage bed/chamber", the shared marital bedroom, not specifically "wife\'s bedroom".' }
            ],
            correctFeedback: 'Correct! Narcissus feared the night — in darkness, in the marriage bed, Claudius might forgive everything. "uxorii cubiculi memoriam" — the memory of their shared bed. Physical intimacy could undo everything.'
        },
        {
            type: 'translation',
            latin: 'igitur prorumpit denuntiatque centurionibus et tribuno, qui aderat, exsequi caedem',
            question: 'Which translation is correct?',
            options: [
                { text: 'therefore he rushes out and orders the centurions and tribune who was present to carry out the killing', correct: true },
                { text: 'therefore he bursts out and announces to the centurions and tribune who was present to carry out the killing', correct: false, feedback: '"denuntiat + infinitive" here means orders/commands, not just announces. It\'s a command, not an announcement.' },
                { text: 'therefore he rushes out and orders the centurions and tribunes who were present to carry out the killing', correct: false, feedback: '"tribuno" is singular — one tribune. "qui aderat" (who was present) is also singular.' },
                { text: 'therefore he rushes out and orders the centurions and the tribune, who was present, to execute the murder', correct: false, feedback: '"caedem" is killing/slaughter, neutral term; "murder" implies illegality. This is quasi-official execution.' }
            ],
            correctFeedback: 'Correct! "prorumpit" — he rushes out, breaks forth. No more waiting. He orders the officers directly: "exsequi caedem" — carry out the killing. Narcissus takes command.'
        },
        {
            type: 'translation',
            latin: 'ita imperatorem iubere',
            question: 'Which translation is correct?',
            options: [
                { text: 'thus the emperor commanded', correct: true },
                { text: 'so the emperor was commanding', correct: false, feedback: '"iubere" is present infinitive in indirect statement — "commanded" or "orders", representing the supposed command.' },
                { text: 'the emperor thus commanded', correct: false, feedback: 'Word order: "ita" (thus/so) comes first for emphasis — THIS is what the emperor supposedly orders.' },
                { text: 'that the emperor so ordered', correct: false, feedback: 'This is Narcissus\'s claim in indirect statement — "thus the emperor commands". He claims imperial authority.' }
            ],
            correctFeedback: 'Correct! Narcissus claims imperial authority — "ita imperatorem iubere" (thus the emperor commands). But did Claudius actually order this? The brevity is suspicious. Narcissus may be lying.'
        },
        {
            type: 'translation',
            latin: 'missus quoque unus e libertis: is raptim in hortos praegressus repperit Messalinam',
            question: 'Which translation is correct?',
            options: [
                { text: 'one of the freedmen was also sent: he, having gone ahead quickly to the gardens, found Messalina', correct: true },
                { text: 'one of the freedmen was also sent: he quickly went ahead to the gardens and found Messalina', correct: false, feedback: '"praegressus" is a perfect participle — "having gone ahead", not coordinate with "repperit". He arrived first, then found her.' },
                { text: 'also one of the freedmen was sent: he, having rushed ahead to the gardens, found Messalina', correct: false, feedback: '"raptim" (quickly/hurriedly) modifies "praegressus", but "rushed" overstates it. He went quickly, ahead of the soldiers.' },
                { text: 'one of the freedmen was sent too: having gone quickly ahead to the gardens, he found Messalina', correct: false, feedback: '"is" (he) should be translated — it emphasises this specific freedman who went ahead and found her.' }
            ],
            correctFeedback: 'Correct! A freedman went ahead — "praegressus" (having gone before) the soldiers. "raptim" — quickly, urgently. He found Messalina first, giving her a chance (perhaps to kill herself honourably).'
        },
        {
            type: 'translation',
            latin: 'humi fusam',
            question: 'Which translation is correct?',
            options: [
                { text: 'lying on the ground', correct: true },
                { text: 'poured on the ground', correct: false, feedback: '"fusam" from "fundo" can mean poured, but with people it means prostrate/lying — she was sprawled on the ground.' },
                { text: 'fallen to the ground', correct: false, feedback: '"fusam" describes her current state (lying), not the action of falling. She\'s prostrate, not in the act of falling.' },
                { text: 'spread on the ground', correct: false, feedback: 'While "fundo" can mean spread, "lying" is the natural translation for a person "fusam humi".' }
            ],
            correctFeedback: 'Correct! "humi fusam" — lying/prostrate on the ground. The participle shows her state when found: collapsed, defeated, her arrogance finally broken.'
        },
        
        // ========== STYLE & EFFECT QUESTIONS ==========
        {
            type: 'style',
            latin: 'cena vinoque incaluit',
            question: 'Why does Tacitus mention that Claudius "grew warm with dinner and wine"?',
            options: [
                { text: 'Food and wine softened his resolve — physical comfort weakened his anger', correct: true },
                { text: 'It was normal Roman practice to dine after a crisis', correct: false, feedback: 'The detail isn\'t about custom — it explains WHY Claudius softened. Wine made him sentimental.' },
                { text: 'Tacitus is criticising Claudius for gluttony', correct: false, feedback: 'The criticism is about weakness, not gluttony. The wine made him forget his anger and remember his affection.' },
                { text: 'It shows Claudius celebrating his victory over the conspirators', correct: false, feedback: 'He wasn\'t celebrating — he was relaxing, and that relaxation was dangerous. His guard dropped.' }
            ],
            correctFeedback: 'Correct! "incaluit" — he grew warm, mellow. After food and wine, Claudius\'s righteous anger faded. In comfort, he softened toward his "wretched" wife. Narcissus saw the danger immediately.'
        },
        {
            type: 'style',
            latin: 'femina misera',
            question: 'What does Claudius calling Messalina "femina misera" (wretched woman) reveal?',
            options: [
                { text: 'His anger was turning to pity — he was beginning to forgive her', correct: true },
                { text: 'He was condemning her with harsh words', correct: false, feedback: '"misera" (wretched/pitiable) is sympathetic, not condemning. He\'s feeling sorry for her, not cursing her.' },
                { text: 'This was a formal legal term for accused persons', correct: false, feedback: 'It\'s not a legal term — it\'s an emotional term. Tacitus specifically notes that Claudius "used this word".' },
                { text: 'He had never loved her and always pitied her', correct: false, feedback: 'The pity is NEW — it comes after he\'s warmed up with food and wine. His anger is "languescere" (weakening).' }
            ],
            correctFeedback: 'Correct! One word betrayed everything. "misera" — wretched, pitiable. Claudius pitied her. Narcissus heard this and knew: "languescere iram, redire amorem" — anger fading, love returning. Disaster.'
        },
        {
            type: 'style',
            latin: 'propinquam noctem et uxorii cubiculi memoriam',
            question: 'Why did Narcissus fear "the approaching night and the memory of the marriage bed"?',
            options: [
                { text: 'In the intimacy of their bedroom, Claudius might forgive Messalina completely', correct: true },
                { text: 'He was afraid Messalina might escape during the night', correct: false, feedback: 'Escape isn\'t mentioned — the fear is about Claudius\'s emotions, not Messalina\'s movements.' },
                { text: 'Night was considered unlucky for executions', correct: false, feedback: 'Superstition isn\'t the issue — intimacy is. The marriage bed could revive Claudius\'s feelings.' },
                { text: 'Narcissus was tired and wanted to finish before sleeping', correct: false, feedback: 'His concern is political, not personal comfort. The night, the bed, the memories — all could undo his work.' }
            ],
            correctFeedback: 'Correct! Narcissus understood human weakness. In the night, in their shared bed, with memories of intimacy — Claudius might forgive everything. The "uxorii cubiculi memoriam" was the ultimate danger.'
        },
        {
            type: 'style',
            latin: 'prorumpit',
            question: 'What does "prorumpit" (he rushes out) suggest about Narcissus\'s state of mind?',
            options: [
                { text: 'Desperate urgency — he knows every moment of delay is dangerous', correct: true },
                { text: 'Excitement at finally being able to act', correct: false, feedback: 'It\'s not excitement but fear. He\'s racing against Claudius\'s weakening resolve.' },
                { text: 'Anger at Claudius for softening', correct: false, feedback: 'Anger isn\'t the emotion — fear is. "timebat" (he feared) precedes the action.' },
                { text: 'Relief that the crisis was almost over', correct: false, feedback: 'The crisis isn\'t over — it\'s at its most dangerous point. Narcissus rushes because delay means death.' }
            ],
            correctFeedback: 'Correct! "prorumpit" — he bursts forth, breaks out. The verb suggests explosive, urgent action. No more planning, no more waiting. He must act NOW before Claudius changes his mind completely.'
        },
        {
            type: 'style',
            latin: 'ita imperatorem iubere',
            question: 'What is ambiguous about Narcissus claiming "ita imperatorem iubere" (thus the emperor commands)?',
            options: [
                { text: 'It\'s unclear whether Claudius actually gave this order or Narcissus invented it', correct: true },
                { text: 'The Latin grammar is unclear', correct: false, feedback: 'The grammar is clear — it\'s the truthfulness that\'s questionable. Did the emperor really command this?' },
                { text: 'Narcissus was quoting Claudius\'s exact words', correct: false, feedback: 'This is reported speech, not a direct quote. Narcissus CLAIMS this is what the emperor commands.' },
                { text: 'Tacitus is unsure which emperor gave the order', correct: false, feedback: 'There\'s no confusion about which emperor — the question is whether Claudius actually ordered this at all.' }
            ],
            correctFeedback: 'Correct! Narcissus claims imperial authority, but Tacitus never confirms Claudius gave this order. The brief phrase in indirect speech — "ita imperatorem iubere" — may be Narcissus\'s fabrication. He commands, then claims the emperor commanded.'
        },
        {
            type: 'style',
            latin: 'humi fusam',
            question: 'What does finding Messalina "lying on the ground" symbolise?',
            options: [
                { text: 'The complete collapse of her power and pride — she who was so arrogant is now prostrate', correct: true },
                { text: 'She was already dead when they found her', correct: false, feedback: 'She\'s alive — the next section shows her mother with her. "fusam" means lying, not dead.' },
                { text: 'She was praying to the gods', correct: false, feedback: 'No prayer is mentioned — she\'s simply collapsed. Her strength has finally failed.' },
                { text: 'Roman women customarily lay on the ground when in disgrace', correct: false, feedback: 'This isn\'t custom — it\'s defeat. The woman who had "tantam superbiam" (such arrogance) is now on the ground.' }
            ],
            correctFeedback: 'Correct! The visual contrast is devastating. The empress who paraded "multis cum comitibus", who maintained "tantam superbiam etiam tum", is now "humi fusam" — prostrate on the ground. Pride brought low.'
        },
        
        // ========== COMPREHENSION QUESTIONS ==========
        {
            type: 'comprehension',
            latin: 'imperavit ut femina misera... ad causam dicendam postridie adesset',
            question: 'What did Claudius order after dinner?',
            options: [
                { text: 'That Messalina be allowed to defend herself the next day', correct: true },
                { text: 'That Messalina be executed immediately', correct: false, feedback: 'The opposite — he was giving her a chance. "ad causam dicendam" — to plead her case.' },
                { text: 'That Messalina be imprisoned overnight', correct: false, feedback: 'No imprisonment is ordered — just that she appear "postridie" (the next day) to speak.' },
                { text: 'That Narcissus handle the matter', correct: false, feedback: 'Claudius was taking the matter out of Narcissus\'s hands by allowing a defence — exactly what Narcissus feared.' }
            ],
            correctFeedback: 'Correct! Softened by food and wine, Claudius granted Messalina what Narcissus had tried to prevent: a chance to speak, to defend herself, to plead her case. Tomorrow. A fatal delay — if Narcissus allowed it.'
        },
        {
            type: 'comprehension',
            latin: 'quod ubi Narcissus audivit',
            question: 'What alarmed Narcissus when he heard Claudius\'s order?',
            options: [
                { text: 'Claudius\'s anger was fading and his love for Messalina was returning', correct: true },
                { text: 'Claudius had discovered Narcissus\'s role in the plot', correct: false, feedback: 'No discovery is mentioned — Narcissus was alarmed by Claudius\'s SOFTENING, not by any accusation.' },
                { text: 'The soldiers were refusing to carry out orders', correct: false, feedback: 'Soldier disobedience isn\'t mentioned — the danger was Claudius\'s changing emotions.' },
                { text: 'Messalina had already escaped', correct: false, feedback: 'Messalina hadn\'t escaped — the danger was that Claudius might FORGIVE her if she got to speak.' }
            ],
            correctFeedback: 'Correct! The word "misera" and the order for a hearing told Narcissus everything: "languescere iram, redire amorem" — anger weakening, love returning. Claudius was forgiving her.'
        },
        {
            type: 'comprehension',
            latin: 'igitur prorumpit denuntiatque centurionibus et tribuno... exsequi caedem: ita imperatorem iubere',
            question: 'What did Narcissus do to prevent Claudius from forgiving Messalina?',
            options: [
                { text: 'He rushed out and ordered officers to kill her, claiming imperial authority', correct: true },
                { text: 'He persuaded Claudius to change his mind', correct: false, feedback: 'He didn\'t persuade Claudius — he bypassed him. He gave the order himself, claiming the emperor commanded it.' },
                { text: 'He arrested Claudius to prevent interference', correct: false, feedback: 'Arresting the emperor would be impossible. He simply acted before Claudius could countermand.' },
                { text: 'He asked the senate to intervene', correct: false, feedback: 'No senate involvement — Narcissus acted unilaterally, directly ordering the military officers.' }
            ],
            correctFeedback: 'Correct! Narcissus took matters into his own hands. "prorumpit" — he rushed out. He ordered the centurions and tribune to kill her, claiming "ita imperatorem iubere" — thus the emperor commands. A claim that may have been fabricated.'
        },
        {
            type: 'comprehension',
            latin: 'missus quoque unus e libertis: is raptim in hortos praegressus repperit Messalinam, humi fusam',
            question: 'What was the state of Messalina when the freedman found her?',
            options: [
                { text: 'She was lying prostrate on the ground, her resistance finally broken', correct: true },
                { text: 'She was preparing to fight back against her accusers', correct: false, feedback: '"humi fusam" (lying on the ground) suggests collapse, not resistance.' },
                { text: 'She was attempting to escape from the gardens', correct: false, feedback: 'No escape attempt — she was found prostrate, not fleeing.' },
                { text: 'She was entertaining guests as if nothing had happened', correct: false, feedback: 'The opposite — she was "humi fusam", collapsed on the ground. Her world had fallen apart.' }
            ],
            correctFeedback: 'Correct! "humi fusam" — lying on the ground. The empress who maintained "tantam superbiam" (such arrogance) until the end has finally collapsed. Her pride is broken; she awaits her fate.'
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.messalinaSection8 = messalinaSection8;
}
