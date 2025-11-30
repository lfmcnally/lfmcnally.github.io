// Messalina Section 9 - Lines 79-89
// Messalina is killed by the tribune

var messalinaSection9 = {
    section: 9,
    lines: '79-89',
    title: 'Messalina is killed by the tribune',
    
    latinText: 'adsidebat mater Lepida, quae florenti filiae haud concors fuerat; sed supremis eius necessitatibus ad miserationem versa suadebat ne percussorem opperiretur: transiisse vitam neque aliud quam mortem decoram quaerendum. sed nihil honestum inerat Messalinae animo per libidines corrupto; lacrimae et questus inriti effundebantur, cum impetu venientium pulsae sunt fores adstititque tribunus. tunc primum Messalina fortunam suam intellexit ferrumque accepit; quod frustra iugulo aut pectori per trepidationem admovens, ictu tribuni transigitur. corpus matri concessum.',
    
    questions: [
        // ========== TRANSLATION QUESTIONS ==========
        {
            type: 'translation',
            latin: 'adsidebat mater Lepida, quae florenti filiae haud concors fuerat',
            question: 'Which translation is correct?',
            options: [
                { text: 'her mother Lepida was sitting beside her, who had not been on good terms with her daughter when she was flourishing', correct: true },
                { text: 'her mother Lepida was sitting beside her, who had not agreed with her flourishing daughter', correct: false, feedback: '"concors" means harmonious/on good terms WITH, not "agreed with". It describes their relationship, not opinions.' },
                { text: 'her mother Lepida sat beside her, who had been discordant with her flourishing daughter', correct: false, feedback: '"adsidebat" is imperfect — "was sitting", ongoing action. And "discordant" is awkward; "not on good terms" is clearer.' },
                { text: 'her mother Lepida was sitting beside her, who had not been harmonious with her daughter while flourishing', correct: false, feedback: '"florenti filiae" — "with her daughter WHEN flourishing" (dative). The daughter was flourishing, not the mother.' }
            ],
            correctFeedback: 'Correct! The estranged mother returns at the end. "haud concors" — not harmonious/on good terms. When Messalina was powerful ("florenti"), they were estranged. Now, at the end, Lepida comes.'
        },
        {
            type: 'translation',
            latin: 'sed supremis eius necessitatibus ad miserationem versa',
            question: 'Which translation is correct?',
            options: [
                { text: 'but turned to pity by her final crisis', correct: true },
                { text: 'but turned to compassion in her final necessities', correct: false, feedback: '"supremis necessitatibus" is better as "final crisis/extremity" — her last desperate situation, not just "necessities".' },
                { text: 'but having turned to pity at her final crisis', correct: false, feedback: '"versa" as predicate adjective with "sed" works better as "turned to", describing her changed state.' },
                { text: 'but moved to pity by her last needs', correct: false, feedback: '"versa ad miserationem" — "turned TO pity", not just "moved to pity". The "ad" indicates direction of change.' }
            ],
            correctFeedback: 'Correct! Lepida\'s change of heart: "ad miserationem versa" — turned to pity. The mother who was distant now feels compassion as her daughter faces death. "supremis necessitatibus" — the final crisis.'
        },
        {
            type: 'translation',
            latin: 'suadebat ne percussorem opperiretur: transiisse vitam neque aliud quam mortem decoram quaerendum',
            question: 'Which translation is correct?',
            options: [
                { text: 'she urged her not to wait for the executioner: her life had passed and nothing else should be sought than an honourable death', correct: true },
                { text: 'she advised her not to await the killer: life had passed and nothing other than a noble death should be sought', correct: false, feedback: '"suadebat ne" is stronger than just "advised" — she was urging/persuading. And "percussorem" is executioner/assassin, not just "killer".' },
                { text: 'she urged her not to wait for the executioner: her life was passing and nothing else than an honourable death should be sought', correct: false, feedback: '"transiisse" is perfect infinitive — "had passed", completed. Her life was OVER, not still passing.' },
                { text: 'she was urging her not to await the executioner: that life had passed and nothing other than an honourable death was to be sought', correct: false, feedback: '"quaerendum (esse)" is gerundive — "should be sought" (obligation), clearer than "was to be sought".' }
            ],
            correctFeedback: 'Correct! Lepida urges suicide before the executioner arrives. "transiisse vitam" — life has passed (it\'s over). "mortem decoram" — an honourable death. The only choice left: die well.'
        },
        {
            type: 'translation',
            latin: 'sed nihil honestum inerat Messalinae animo per libidines corrupto',
            question: 'Which translation is correct?',
            options: [
                { text: 'but nothing honourable was present in Messalina\'s mind, corrupted by her lusts', correct: true },
                { text: 'but nothing honest was in Messalina\'s corrupted mind through lusts', correct: false, feedback: '"honestum" means honourable/noble (moral quality), not just honest. And "per libidines corrupto" modifies "animo" — mind corrupted BY lusts.' },
                { text: 'but nothing honourable was in Messalina\'s mind corrupted through desires', correct: false, feedback: '"libidines" specifically means lusts (sexual/sensual), stronger than just "desires".' },
                { text: 'but Messalina\'s mind, corrupted by lusts, contained nothing honourable', correct: false, feedback: 'While accurate in meaning, "inerat" (was present in) + dative is the structure — "was present in her mind", not "her mind contained".' }
            ],
            correctFeedback: 'Correct! Tacitus\'s harsh judgement: "nihil honestum inerat" — nothing honourable remained in her. Her mind ("animo") was corrupted ("corrupto") by lusts ("per libidines"). She couldn\'t die nobly because she\'d never lived nobly.'
        },
        {
            type: 'translation',
            latin: 'lacrimae et questus inriti effundebantur',
            question: 'Which translation is correct?',
            options: [
                { text: 'tears and useless laments were being poured forth', correct: true },
                { text: 'tears and pointless complaints were poured forth', correct: false, feedback: '"questus" means laments/cries of grief, not just complaints. And "effundebantur" imperfect — "were being poured", ongoing.' },
                { text: 'useless tears and laments were being poured forth', correct: false, feedback: 'Word order: "inriti" (useless) follows both nouns — "tears and laments, useless" / "useless tears and laments". Both readings possible, but Latin has "inriti" after.' },
                { text: 'tears and futile laments poured forth', correct: false, feedback: '"effundebantur" is imperfect passive — "were being poured forth", continuous action, not simple "poured forth".' }
            ],
            correctFeedback: 'Correct! Instead of honourable suicide, she weeps. "lacrimae et questus" — tears and laments. "inriti" — useless, to no effect. "effundebantur" — were being poured out, continuously and pointlessly.'
        },
        {
            type: 'translation',
            latin: 'cum impetu venientium pulsae sunt fores adstititque tribunus',
            question: 'Which translation is correct?',
            options: [
                { text: 'when the doors were struck by the rush of those coming, and the tribune stood there', correct: true },
                { text: 'when the doors were beaten down by the rush of those coming, and the tribune stood by', correct: false, feedback: '"pulsae sunt" means struck/beaten, not necessarily "beaten down". And "adstitit" — stood there/took his stand, not just "stood by" passively.' },
                { text: 'when the doors were struck by the attack of those arriving, and the tribune was standing there', correct: false, feedback: '"adstitit" is perfect — "stood (there)", taking position, not imperfect "was standing".' },
                { text: 'as the doors were struck by the force of those coming, the tribune stood there', correct: false, feedback: '"cum + indicative" here is temporal — "when", not "as". And "impetu" is rush/charge, not just "force".' }
            ],
            correctFeedback: 'Correct! The doors burst open — "impetu venientium pulsae" (struck by the rush of those coming). The tribune appears: "adstitit" — he took his stand. The executioner has arrived.'
        },
        {
            type: 'translation',
            latin: 'tunc primum Messalina fortunam suam intellexit ferrumque accepit',
            question: 'Which translation is correct?',
            options: [
                { text: 'then for the first time Messalina understood her fate and took up the sword', correct: true },
                { text: 'then first Messalina understood her fortune and received the sword', correct: false, feedback: '"fortunam" here means fate/destiny (her situation), not fortune. And "accepit" with "ferrum" is "took up", not passively "received".' },
                { text: 'then at first Messalina understood her fate and took the sword', correct: false, feedback: '"primum" means "for the first time" — this was the FIRST moment she truly understood. Not "at first" (initially).' },
                { text: 'only then did Messalina understand her fate and take up the iron', correct: false, feedback: '"ferrum" as "sword" is standard in Latin — iron/steel meaning sword. "only then" captures the emphasis but "then for the first time" is closer.' }
            ],
            correctFeedback: 'Correct! "tunc primum" — only NOW, for the first time, does reality hit her. All her arrogance, her scheming — now she finally understands. "ferrumque accepit" — she takes the sword. But too late.'
        },
        {
            type: 'translation',
            latin: 'quod frustra iugulo aut pectori per trepidationem admovens',
            question: 'Which translation is correct?',
            options: [
                { text: 'moving it in vain towards her throat or breast in her panic', correct: true },
                { text: 'which she was moving uselessly to her throat or chest through fear', correct: false, feedback: '"per trepidationem" is better as "in her panic/agitation" — the fear caused the fumbling. "pectori" is breast, the target area.' },
                { text: 'putting it vainly to her throat or breast in her trembling', correct: false, feedback: '"admovens" means moving towards, not putting to. And "trepidationem" is panic/agitation, not just trembling.' },
                { text: 'moving it fruitlessly towards her neck or breast through panic', correct: false, feedback: '"iugulo" is throat specifically, not neck. She\'s trying to cut her throat or stab her chest.' }
            ],
            correctFeedback: 'Correct! She can\'t do it. "frustra" — in vain. "per trepidationem" — through panic, she fumbles. "iugulo aut pectori" — throat or breast, the proper spots for honourable suicide. But her hands shake.'
        },
        {
            type: 'translation',
            latin: 'ictu tribuni transigitur',
            question: 'Which translation is correct?',
            options: [
                { text: 'she was run through by a blow from the tribune', correct: true },
                { text: 'she was killed by a strike of the tribune', correct: false, feedback: '"transigitur" specifically means run through/pierced, not just killed. The sword went through her.' },
                { text: 'she was dispatched by the tribune\'s blow', correct: false, feedback: '"transigitur" is more specific than "dispatched" — she was pierced/run through.' },
                { text: 'the tribune\'s blow finished her', correct: false, feedback: 'The passive "transigitur" keeps Messalina as subject — "she was run through", not active "the blow finished her".' }
            ],
            correctFeedback: 'Correct! "ictu tribuni" — by a blow from the tribune. "transigitur" — she is run through, pierced. The tribune finishes what she couldn\'t do herself. A death without honour.'
        },
        {
            type: 'translation',
            latin: 'corpus matri concessum',
            question: 'Which translation is correct?',
            options: [
                { text: 'the body was granted to her mother', correct: true },
                { text: 'the body was given to the mother', correct: false, feedback: '"matri" with "concessum" — granted TO HER mother specifically. The possessive matters.' },
                { text: 'her body was yielded to the mother', correct: false, feedback: '"concessum" means granted/allowed — a formal permission. "yielded" is too passive.' },
                { text: 'the corpse was conceded to her mother', correct: false, feedback: '"corpus" is simply body (can mean corpse, but body is sufficient). "conceded" is unnecessarily formal.' }
            ],
            correctFeedback: 'Correct! A brief, final note: "corpus matri concessum" — the body granted to her mother. Lepida, who was estranged, who urged honourable death, receives the body. A mother\'s final duty.'
        },
        
        // ========== STYLE & EFFECT QUESTIONS ==========
        {
            type: 'style',
            latin: 'quae florenti filiae haud concors fuerat',
            question: 'Why does Tacitus mention that Lepida "had not been on good terms" with Messalina when she was flourishing?',
            options: [
                { text: 'It emphasises that only in death does Messalina receive family compassion she didn\'t have in life', correct: true },
                { text: 'To explain why Lepida was present at this moment', correct: false, feedback: 'The detail does more than explain presence — it creates poignant irony. The estranged mother returns only at the end.' },
                { text: 'To criticise Lepida for abandoning her daughter', correct: false, feedback: 'Tacitus doesn\'t criticise Lepida — he notes her change: "ad miserationem versa" (turned to pity). She comes when it matters.' },
                { text: 'To suggest Lepida was jealous of Messalina\'s power', correct: false, feedback: '"haud concors" (not harmonious) doesn\'t specify the reason for estrangement, only that it existed.' }
            ],
            correctFeedback: 'Correct! The irony is profound. When Messalina was powerful ("florenti"), her mother stayed away. Now, at her daughter\'s death, Lepida comes with compassion. The powerful had no true family; the dying does.'
        },
        {
            type: 'style',
            latin: 'transiisse vitam neque aliud quam mortem decoram quaerendum',
            question: 'What does Lepida\'s advice represent in Roman values?',
            options: [
                { text: 'The traditional Roman belief that an honourable death could redeem a dishonourable life', correct: true },
                { text: 'A mother\'s hatred for her daughter', correct: false, feedback: 'It\'s not hatred — it\'s the opposite. "ad miserationem versa" — Lepida acts from pity, urging the best remaining option.' },
                { text: 'Legal advice about avoiding execution', correct: false, feedback: 'This isn\'t legal strategy — it\'s moral counsel. Suicide before execution was considered honourable.' },
                { text: 'Religious instruction about the afterlife', correct: false, feedback: 'Roman concern here is reputation and honour in death, not afterlife. "mortem decoram" — a seemly death.' }
            ],
            correctFeedback: 'Correct! "mortem decoram" — an honourable/seemly death. In Roman thinking, dying well could partially redeem living badly. Lepida offers Messalina this last chance at dignity.'
        },
        {
            type: 'style',
            latin: 'sed nihil honestum inerat Messalinae animo per libidines corrupto',
            question: 'What is Tacitus\'s final judgement on Messalina\'s character?',
            options: [
                { text: 'Her lusts had so corrupted her that she was incapable of any honourable act, even in death', correct: true },
                { text: 'She was simply unlucky in her circumstances', correct: false, feedback: 'Tacitus assigns moral responsibility — "per libidines corrupto". Her lusts corrupted her; it wasn\'t bad luck.' },
                { text: 'She was a victim of her passions', correct: false, feedback: 'While passions corrupted her, "victim" suggests pity. Tacitus\'s tone is condemnatory — she has NO honour left.' },
                { text: 'She might have been honourable in different circumstances', correct: false, feedback: '"nihil honestum inerat" — nothing honourable was IN her. Her corruption was complete, not circumstantial.' }
            ],
            correctFeedback: 'Correct! Tacitus\'s verdict is absolute: "nihil honestum inerat" — nothing honourable remained. Her "animo" (mind/soul) was "per libidines corrupto" — corrupted through lusts. She couldn\'t die well because she never was good.'
        },
        {
            type: 'style',
            latin: 'lacrimae et questus inriti effundebantur',
            question: 'What do Messalina\'s "useless tears and laments" represent?',
            options: [
                { text: 'Her inability to face death with dignity — she weeps instead of acting', correct: true },
                { text: 'Genuine remorse for her actions', correct: false, feedback: 'Tacitus doesn\'t suggest remorse — these are tears of self-pity and fear, not penitence.' },
                { text: 'A final appeal for mercy', correct: false, feedback: 'Appeals would go to someone — these tears are just "effundebantur" (poured forth), undirected and useless.' },
                { text: 'The natural human response to facing death', correct: false, feedback: 'Tacitus contrasts her with the Roman ideal of dying well. "inriti" (useless) is a judgement, not understanding.' }
            ],
            correctFeedback: 'Correct! Instead of the "mors decora" (honourable death) her mother urged, Messalina produces only "lacrimae et questus inriti" — useless tears and laments. She cannot rise to the occasion, even at the end.'
        },
        {
            type: 'style',
            latin: 'tunc primum Messalina fortunam suam intellexit',
            question: 'What is significant about Messalina understanding her fate "then for the first time"?',
            options: [
                { text: 'Despite all the warnings, she lived in denial until the very end — only the executioner\'s presence made it real', correct: true },
                { text: 'The situation had changed suddenly', correct: false, feedback: 'The situation hadn\'t changed — she had received warnings, messengers, time. She simply refused to accept reality.' },
                { text: 'Tacitus is sympathising with her shock', correct: false, feedback: 'It\'s not sympathy — it\'s another indictment. Her arrogance ("tantam superbiam") blinded her until it was too late.' },
                { text: 'Roman women were typically sheltered from harsh realities', correct: false, feedback: 'Messalina was not sheltered — she was in denial. She had chosen not to understand.' }
            ],
            correctFeedback: 'Correct! "tunc primum" — only NOW does she understand. Through all the warnings, the messengers, her mother\'s urging — she maintained her denial. Reality breaks through only when the tribune stands before her.'
        },
        {
            type: 'style',
            latin: 'quod frustra iugulo aut pectori per trepidationem admovens',
            question: 'What does Messalina\'s failure to kill herself reveal?',
            options: [
                { text: 'She lacked the moral courage that Roman honour demanded — even with a sword, she couldn\'t act', correct: true },
                { text: 'The sword was defective', correct: false, feedback: 'The problem isn\'t the sword — it\'s "per trepidationem" (through panic). Her hands shake; her nerve fails.' },
                { text: 'She was physically too weak', correct: false, feedback: 'Physical weakness isn\'t the issue — moral weakness is. She fumbles "frustra" (in vain) because she lacks resolve.' },
                { text: 'She was hoping for a last-minute rescue', correct: false, feedback: 'By now she "intellexit" (understood) her fate. The failure is internal — she simply cannot do it.' }
            ],
            correctFeedback: 'Correct! "frustra...per trepidationem" — in vain, through panic. Given the chance for honourable self-death, she fumbles. The woman who boldly committed outrageous crimes cannot perform this one act of courage.'
        },
        {
            type: 'style',
            latin: 'ictu tribuni transigitur. corpus matri concessum.',
            question: 'What is the effect of these two brief final sentences?',
            options: [
                { text: 'Brutal brevity — her death and disposal are dismissed in just a few words, denying her any final dignity', correct: true },
                { text: 'Tacitus ran out of information about her death', correct: false, feedback: 'The brevity is deliberate style, not lack of information. Tacitus chooses minimal words for maximum effect.' },
                { text: 'Her death was not important to Roman history', correct: false, feedback: 'It was enormously important — but Tacitus chooses to end not with grand description but with curt dismissal.' },
                { text: 'These are later additions by editors', correct: false, feedback: 'This is authentic Tacitean style — terse, devastating conclusions that refuse to dignify with elaboration.' }
            ],
            correctFeedback: 'Correct! After all her drama, her tears, her fumbling — Tacitus dispatches her in six words: "ictu tribuni transigitur. corpus matri concessum." Run through. Body to mother. Done. No grand death scene for one who deserved none.'
        },
        
        // ========== COMPREHENSION QUESTIONS ==========
        {
            type: 'comprehension',
            latin: 'adsidebat mater Lepida... sed supremis eius necessitatibus ad miserationem versa',
            question: 'Why was Lepida with Messalina at the end?',
            options: [
                { text: 'Though estranged during Messalina\'s success, she was moved to pity by her daughter\'s final crisis', correct: true },
                { text: 'She had always been close to her daughter', correct: false, feedback: '"haud concors fuerat" — she had NOT been on good terms with her flourishing daughter. Estrangement, not closeness.' },
                { text: 'She was sent by Claudius to witness the execution', correct: false, feedback: 'No sending is mentioned — she came of her own accord, "ad miserationem versa" (turned to pity).' },
                { text: 'She wanted to inherit Messalina\'s wealth', correct: false, feedback: 'Her motivation is clearly stated: "miserationem" (pity). She came to comfort, not to profit.' }
            ],
            correctFeedback: 'Correct! Lepida was estranged when Messalina was powerful. But "supremis necessitatibus" (in the final crisis), she was "ad miserationem versa" — turned to pity. Mother\'s love emerged at the end.'
        },
        {
            type: 'comprehension',
            latin: 'suadebat ne percussorem opperiretur',
            question: 'What did Lepida urge Messalina to do?',
            options: [
                { text: 'Kill herself before the executioner arrived, dying with honour', correct: true },
                { text: 'Escape from the gardens before it was too late', correct: false, feedback: 'Escape isn\'t suggested — Lepida knew it was impossible. She urged honourable death, not flight.' },
                { text: 'Beg Claudius for forgiveness one more time', correct: false, feedback: 'No more appeals — "transiisse vitam" (life has passed). The only choice is how to die.' },
                { text: 'Confess her crimes and accept punishment', correct: false, feedback: 'Confession isn\'t the counsel — self-death before execution is. "mortem decoram" — an honourable death.' }
            ],
            correctFeedback: 'Correct! "ne percussorem opperiretur" — don\'t wait for the executioner. Take your own life. "mortem decoram" — an honourable death. This was the Roman way to preserve some dignity.'
        },
        {
            type: 'comprehension',
            latin: 'quod frustra iugulo aut pectori per trepidationem admovens, ictu tribuni transigitur',
            question: 'How did Messalina die?',
            options: [
                { text: 'She tried to kill herself but failed from panic; the tribune then ran her through', correct: true },
                { text: 'She successfully killed herself before the tribune arrived', correct: false, feedback: '"frustra" — in vain. She failed. The tribune had to finish it: "ictu tribuni transigitur".' },
                { text: 'She surrendered peacefully to the tribune', correct: false, feedback: 'She did try to kill herself — "iugulo aut pectori...admovens". She simply failed from trembling.' },
                { text: 'She was poisoned before the tribune could reach her', correct: false, feedback: '"ferrum" (sword) was the method. "ictu tribuni transigitur" — run through by the tribune\'s blow.' }
            ],
            correctFeedback: 'Correct! She took the sword, tried to strike herself — throat or breast — but her hands shook with panic ("per trepidationem"). She failed. The tribune stepped forward and ran her through. No honourable death for Messalina.'
        },
        {
            type: 'comprehension',
            latin: 'corpus matri concessum',
            question: 'What happened to Messalina\'s body?',
            options: [
                { text: 'It was given to her mother Lepida', correct: true },
                { text: 'It was displayed publicly as a warning', correct: false, feedback: 'No public display — the body was given ("concessum") to her mother for burial.' },
                { text: 'It was buried with full imperial honours', correct: false, feedback: 'No honours are mentioned — just the bare fact that the body went to her mother.' },
                { text: 'It was thrown into the Tiber', correct: false, feedback: 'The body was treated respectfully enough to be "concessum" (granted) to Lepida.' }
            ],
            correctFeedback: 'Correct! "corpus matri concessum" — the body granted to her mother. The final note. Lepida, who came with pity and urged honourable death, received the body. A mother\'s last service.'
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.messalinaSection9 = messalinaSection9;
}
