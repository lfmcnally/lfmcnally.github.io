// Messalina Section 6 - Lines 49-59
// Silius hides and Messalina appeals to Claudius

const messalinaSection6 = {
    section: 6,
    lines: '49-59',
    title: 'Silius hides and Messalina appeals to Claudius',
    
    latinText: 'atque interim, tribus omnino comitantibus - tam repens erat solitudo - postquam per urbem pedibus ivit, vehiculo, quo purgamenta hortorum eripiuntur, Ostiensem viam intrat. nullam misericordiam civibus commovit quia flagitiorum deformitas praevalebat. et iam erat in aspectu Claudii clamitabatque ut audiret Octaviae et Britannici matrem. Narcissus tamen obstrepuit, Silium et nuptias referens; simul codicillos libidinum indices tradidit, quibus visus Caesaris averteret. nec multo post urbem ingredienti offerebantur liberi, sed Narcissus amoveri eos iussit.',
    
    questions: [
        // ========== TRANSLATION QUESTIONS ==========
        {
            type: 'translation',
            latin: 'atque interim, tribus omnino comitantibus',
            question: 'Which translation is correct?',
            options: [
                { text: 'and meanwhile, with only three companions accompanying her', correct: true },
                { text: 'and meanwhile, with three companions altogether accompanying her', correct: false, feedback: '"omnino" means "only/merely" here, emphasising how few were with her — not just counting "altogether".' },
                { text: 'and meanwhile, three companions were accompanying her', correct: false, feedback: '"tribus...comitantibus" is ablative absolute — "with three accompanying", not a main clause with "were".' },
                { text: 'but meanwhile, with only three companions accompanying her', correct: false, feedback: '"atque" means "and", not "but". It continues the narrative rather than introducing contrast.' }
            ],
            correctFeedback: 'Correct! "omnino" (only/merely) emphasises the shocking contrast — the empress who once paraded with crowds now has just three companions. The ablative absolute sets the scene of her isolation.'
        },
        {
            type: 'translation',
            latin: 'tam repens erat solitudo',
            question: 'Which translation is correct?',
            options: [
                { text: 'so sudden was her isolation', correct: true },
                { text: 'so sudden was the solitude', correct: false, feedback: '"solitudo" here means her isolation/abandonment specifically, not abstract solitude. Everyone has deserted her.' },
                { text: 'her isolation was so sudden', correct: false, feedback: 'The Latin word order "tam repens erat" with predicate first is emphatic — "so sudden WAS" captures this better.' },
                { text: 'so quickly was she isolated', correct: false, feedback: '"repens" means sudden (adjective), not quickly (adverb). The isolation itself was sudden, not the manner of it.' }
            ],
            correctFeedback: 'Correct! Tacitus\'s parenthetical comment — "tam repens erat solitudo" — marvels at how quickly everyone abandoned her. Yesterday she commanded crowds; now she\'s nearly alone.'
        },
        {
            type: 'translation',
            latin: 'postquam per urbem pedibus ivit, vehiculo, quo purgamenta hortorum eripiuntur, Ostiensem viam intrat',
            question: 'Which translation is correct?',
            options: [
                { text: 'after she went through the city on foot, she enters the Ostian road in a cart used to remove garden refuse', correct: true },
                { text: 'after she went through the city on foot, she entered the Ostian road in a cart used to remove garden refuse', correct: false, feedback: '"intrat" is present tense (historic present) — "she enters", giving vivid immediacy to her humiliating journey.' },
                { text: 'after she went through the city on foot, she enters the Ostian road in a carriage used to remove garden refuse', correct: false, feedback: '"vehiculo" here is specifically a cart or wagon for refuse, not a carriage. The humiliation is in the lowly transport.' },
                { text: 'after she walked through the city, she enters the Ostian road in a cart which removes garden refuse', correct: false, feedback: '"quo purgamenta hortorum eripiuntur" — "IN which refuse IS removed" (habitual passive), not "which removes" (active).' }
            ],
            correctFeedback: 'Correct! The empress travels in a garbage cart — "quo purgamenta hortorum eripiuntur" (in which garden refuse is removed). The historic present "intrat" makes us witness this degrading scene.'
        },
        {
            type: 'translation',
            latin: 'nullam misericordiam civibus commovit quia flagitiorum deformitas praevalebat',
            question: 'Which translation is correct?',
            options: [
                { text: 'she stirred no pity in the citizens because the ugliness of her scandals prevailed', correct: true },
                { text: 'she stirred no pity among the citizens because the ugliness of her scandals prevailed', correct: false, feedback: '"civibus" is dative — "in the citizens" or "for the citizens", showing who felt (or didn\'t feel) pity.' },
                { text: 'she aroused no compassion in the citizens because the shame of her scandals prevailed', correct: false, feedback: '"deformitas" means ugliness/hideousness, not shame. It\'s about how repulsive her crimes were, not her own shame.' },
                { text: 'no pity was stirred in the citizens because the ugliness of her scandal prevailed', correct: false, feedback: '"flagitiorum" is genitive plural — "of her scandals" (multiple), not singular "scandal".' }
            ],
            correctFeedback: 'Correct! Despite her pitiful state, the citizens felt nothing. "deformitas" (ugliness/monstrosity) — her crimes were so hideous that they overwhelmed any natural sympathy. No one pitied her.'
        },
        {
            type: 'translation',
            latin: 'et iam erat in aspectu Claudii clamitabatque ut audiret Octaviae et Britannici matrem',
            question: 'Which translation is correct?',
            options: [
                { text: 'and now she was in Claudius\'s sight and kept crying out that he should hear the mother of Octavia and Britannicus', correct: true },
                { text: 'and now she was in Claudius\'s sight and cried out that he should hear the mother of Octavia and Britannicus', correct: false, feedback: '"clamitabat" is a frequentative verb — "kept crying out" repeatedly, not a single cry.' },
                { text: 'and now she was in the sight of Claudius and kept crying out to hear the mother of Octavia and Britannicus', correct: false, feedback: '"ut audiret" — "that HE should hear", purpose clause with Claudius as subject. She wants HIM to listen.' },
                { text: 'and already she was in Claudius\'s sight and kept crying out that he should hear Octavia and Britannicus\'s mother', correct: false, feedback: '"Octaviae et Britannici matrem" — "the mother OF Octavia and OF Britannicus" (both genitive). Word order places "matrem" emphatically at the end.' }
            ],
            correctFeedback: 'Correct! She reaches Claudius and repeatedly cries out — "clamitabat" (frequentative). She defines herself as "mother of Octavia and Britannicus", trying to invoke the children as her protection.'
        },
        {
            type: 'translation',
            latin: 'Narcissus tamen obstrepuit, Silium et nuptias referens',
            question: 'Which translation is correct?',
            options: [
                { text: 'Narcissus however drowned her out, bringing up Silius and the marriage', correct: true },
                { text: 'Narcissus however shouted, bringing up Silius and the marriage', correct: false, feedback: '"obstrepuit" specifically means to drown out/make noise over someone — he deliberately overwhelmed her voice, not just shouted.' },
                { text: 'Narcissus however drowned her out, referring to Silius and the wedding', correct: false, feedback: '"nuptias" means the marriage (union), not just the wedding ceremony. The ongoing crime, not just the event.' },
                { text: 'Narcissus nevertheless drowned her out, bringing up Silius and the marriage', correct: false, feedback: '"tamen" means "however", showing contrast to her appeal, not "nevertheless" which suggests overcoming obstacles.' }
            ],
            correctFeedback: 'Correct! "obstrepuit" — he made noise over her, drowned out her cries. Every time she appealed as a mother, Narcissus countered with "Silius and the marriage". He refused to let her emotional appeal land.'
        },
        {
            type: 'translation',
            latin: 'simul codicillos libidinum indices tradidit, quibus visus Caesaris averteret',
            question: 'Which translation is correct?',
            options: [
                { text: 'at the same time he handed over notebooks listing her affairs, by which he might divert Caesar\'s gaze', correct: true },
                { text: 'at the same time he handed over notebooks listing her desires, by which he might divert Caesar\'s gaze', correct: false, feedback: '"libidinum" (of lusts) here means her actual affairs/liaisons, not just abstract desires. These were records of her lovers.' },
                { text: 'at the same time he handed over notebooks indicating her affairs, by which he diverted Caesar\'s gaze', correct: false, feedback: '"averteret" is imperfect subjunctive — "might divert" (purpose), not indicative "diverted" (fact).' },
                { text: 'at the same time he handed over documents listing her affairs, to divert Caesar\'s gaze', correct: false, feedback: '"codicillos" specifically means small tablets/notebooks, and "quibus...averteret" is a relative clause of purpose, not a simple infinitive.' }
            ],
            correctFeedback: 'Correct! Narcissus had prepared evidence — "codicillos libidinum indices" (notebooks cataloguing her affairs). Purpose: keep Claudius reading about her crimes so he couldn\'t look at her face and weaken.'
        },
        {
            type: 'translation',
            latin: 'nec multo post urbem ingredienti offerebantur liberi',
            question: 'Which translation is correct?',
            options: [
                { text: 'and not much later, as he was entering the city, the children were presented to him', correct: true },
                { text: 'and not much later, entering the city, the children were presented to him', correct: false, feedback: '"ingredienti" is dative singular — "to him entering", not nominative. The children were offered TO Claudius as he entered.' },
                { text: 'and not long after, as he was entering the city, the children were being presented to him', correct: false, feedback: '"offerebantur" is imperfect passive, best translated as simple "were presented" in narrative, not continuous "were being".' },
                { text: 'and not much later, as he entered the city, the children were presented to him', correct: false, feedback: '"ingredienti" is present participle — "as he WAS entering" (ongoing), not simple past "as he entered".' }
            ],
            correctFeedback: 'Correct! "ingredienti" (dative, to him entering) — the children appear as planned. "liberi" (children) — Britannicus and Octavia, sent by Messalina to soften their father.'
        },
        {
            type: 'translation',
            latin: 'sed Narcissus amoveri eos iussit',
            question: 'Which translation is correct?',
            options: [
                { text: 'but Narcissus ordered them to be removed', correct: true },
                { text: 'but Narcissus ordered them removed', correct: false, feedback: 'While grammatically possible, "to be removed" better captures the formal passive infinitive "amoveri".' },
                { text: 'but Narcissus ordered to remove them', correct: false, feedback: '"amoveri eos" — "them to be removed" (accusative + passive infinitive). Narcissus orders that THEY be removed, not that someone remove them.' },
                { text: 'but Narcissus commanded that they be removed', correct: false, feedback: '"iussit" means "ordered", not the more formal "commanded". It\'s a direct order, quickly executed.' }
            ],
            correctFeedback: 'Correct! Narcissus blocks Messalina\'s gambit. He orders the children removed before they can embrace their father. He\'s controlling everything Claudius sees and hears.'
        },
        
        // ========== STYLE & EFFECT QUESTIONS ==========
        {
            type: 'style',
            latin: 'tribus omnino comitantibus',
            question: 'What is the effect of specifying "only three companions"?',
            options: [
                { text: 'It shows her total abandonment — the empress who commanded crowds is now nearly alone', correct: true },
                { text: 'Three was a sacred number in Roman religion', correct: false, feedback: 'The number isn\'t symbolic — it\'s pathetically small. The point is how few remain with her when she needs help most.' },
                { text: 'It shows she still had loyal supporters', correct: false, feedback: 'Three companions isn\'t loyalty — it\'s abandonment. "omnino" (only) emphasises how shocking this small number is.' },
                { text: 'Tacitus is uncertain how many were actually with her', correct: false, feedback: 'Tacitus states the number definitively. The precision emphasises the dramatic collapse of her entourage.' }
            ],
            correctFeedback: 'Correct! Contrast with Section 2: "multis cum comitibus" (with many companions). Now "tribus omnino" — only three. Her power has evaporated; those who flattered her have fled.'
        },
        {
            type: 'style',
            latin: 'vehiculo, quo purgamenta hortorum eripiuntur',
            question: 'What is the significance of Messalina travelling in a refuse cart?',
            options: [
                { text: 'The ultimate humiliation — the empress reduced to travelling in a garbage wagon', correct: true },
                { text: 'It was the only transport available to her', correct: false, feedback: 'Availability isn\'t the point — Tacitus emphasises what KIND of cart: one for garden refuse. The degradation is deliberate detail.' },
                { text: 'It shows she was trying to travel secretly', correct: false, feedback: 'She\'s not hiding — she\'s desperate. The cart isn\'t for secrecy but because she\'s been abandoned by everyone who would provide proper transport.' },
                { text: 'Roman empresses often travelled in simple vehicles', correct: false, feedback: 'This is anything but normal. A cart for "purgamenta" (refuse/filth) carrying the empress is grotesquely ironic.' }
            ],
            correctFeedback: 'Correct! The detail is savage. "purgamenta hortorum" — garden refuse, rubbish. The woman who celebrated "cuncta nuptiarum sollemnia" now rides with the garbage. Her moral filth matched by her transport.'
        },
        {
            type: 'style',
            latin: 'nullam misericordiam civibus commovit',
            question: 'Why does Tacitus note that she stirred no pity?',
            options: [
                { text: 'To show that even in her pitiful state, her crimes made her impossible to sympathise with', correct: true },
                { text: 'To criticise the citizens for their cruelty', correct: false, feedback: 'Tacitus doesn\'t criticise the citizens — he explains their reaction as natural. "deformitas praevalebat" — her ugliness prevailed.' },
                { text: 'To suggest the citizens didn\'t recognise her', correct: false, feedback: 'Recognition isn\'t the issue — they knew who she was. They simply felt no pity because of her crimes.' },
                { text: 'To praise the citizens for their moral judgement', correct: false, feedback: 'It\'s not praise — it\'s observation. Their lack of pity is a consequence of her crimes, not a virtue being celebrated.' }
            ],
            correctFeedback: 'Correct! Normally, a fallen empress might inspire some pity. But "flagitiorum deformitas praevalebat" — the hideousness of her scandals overwhelmed any sympathy. Her crimes had destroyed even basic human compassion for her.'
        },
        {
            type: 'style',
            latin: 'Octaviae et Britannici matrem',
            question: 'Why does Messalina identify herself as "the mother of Octavia and Britannicus"?',
            options: [
                { text: 'She appeals to her role as mother, hoping maternal identity will protect her from Claudius\'s anger', correct: true },
                { text: 'She had forgotten her own name in her distress', correct: false, feedback: 'This isn\'t confusion — it\'s strategy. Defining herself through the children invokes Claudius\'s paternal feelings.' },
                { text: 'Romans normally identified women through their children', correct: false, feedback: 'While patronymics were common, this specific appeal — "hear the MOTHER" — is a calculated plea for mercy.' },
                { text: 'She wanted to remind Claudius who the children\'s father was', correct: false, feedback: 'Claudius knows he\'s the father. The point is to make him see her as his children\'s mother, not as an adulteress.' }
            ],
            correctFeedback: 'Correct! She doesn\'t say "your wife" — that claim is ruined. Instead: "the mother of your children". She hopes the children\'s connection to Claudius will shield her. Identity as mother, not wife.'
        },
        {
            type: 'style',
            latin: 'obstrepuit',
            question: 'What does "obstrepuit" (drowned out) reveal about Narcissus\'s tactics?',
            options: [
                { text: 'He physically prevented Claudius from hearing Messalina\'s emotional appeals', correct: true },
                { text: 'He politely disagreed with Messalina', correct: false, feedback: '"obstrepuit" is violent — to make noise over, to drown out. There\'s nothing polite about it.' },
                { text: 'He was overwhelmed by emotion himself', correct: false, feedback: 'Narcissus is calculating, not emotional. "obstrepuit" is a deliberate tactic to prevent Messalina\'s words from reaching Claudius.' },
                { text: 'He couldn\'t hear what Messalina was saying', correct: false, feedback: 'He heard her perfectly — that\'s why he drowned her out. He knew her appeals might work on Claudius.' }
            ],
            correctFeedback: 'Correct! "obstrepuit" — he made such noise that Claudius couldn\'t hear her. Narcissus knew Messalina\'s voice, her tears, her appeals might sway the weak emperor. So he simply overwhelmed them with noise.'
        },
        {
            type: 'style',
            latin: 'codicillos libidinum indices',
            question: 'Why did Narcissus give Claudius notebooks detailing Messalina\'s affairs?',
            options: [
                { text: 'To keep Claudius focused on her crimes and prevent him from looking at her face', correct: true },
                { text: 'To provide legal evidence for a trial', correct: false, feedback: 'This wasn\'t about legal procedure — "quibus visus Caesaris averteret" — to divert Caesar\'s GAZE. It\'s about controlling what Claudius sees.' },
                { text: 'To help Claudius understand the full situation', correct: false, feedback: 'Information isn\'t the goal — distraction is. Narcissus wanted Claudius reading, not looking at Messalina.' },
                { text: 'Because Claudius had requested documentation', correct: false, feedback: 'Claudius made no such request. Narcissus prepared this himself as a tactic to prevent Messalina\'s presence from affecting Claudius.' }
            ],
            correctFeedback: 'Correct! "quibus visus Caesaris averteret" — by which he might DIVERT Caesar\'s gaze. Narcissus feared that if Claudius looked at Messalina, he might forgive her. Better to have him reading about her crimes than seeing her tears.'
        },
        {
            type: 'style',
            latin: 'Narcissus amoveri eos iussit',
            question: 'What does Narcissus\'s removal of the children show about his control of the situation?',
            options: [
                { text: 'He anticipated and blocked every emotional appeal Messalina could make', correct: true },
                { text: 'He hated the children personally', correct: false, feedback: 'Personal hatred isn\'t the issue — tactical control is. The children were weapons Messalina was trying to use.' },
                { text: 'He was protecting the children from their mother', correct: false, feedback: 'Protection isn\'t the motive — prevention is. He removed them so they couldn\'t soften Claudius\'s resolve.' },
                { text: 'Roman law required children to be absent during such proceedings', correct: false, feedback: 'This isn\'t about legal procedure — Narcissus simply orders them away. He\'s managing the situation, not following rules.' }
            ],
            correctFeedback: 'Correct! Messalina sent the children; Narcissus removed them. She cried out as their mother; he drowned her out. She tried to be seen; he gave Claudius papers to read. He blocked every move.'
        },
        
        // ========== COMPREHENSION QUESTIONS ==========
        {
            type: 'comprehension',
            latin: 'per urbem pedibus ivit... vehiculo, quo purgamenta hortorum eripiuntur',
            question: 'How did Messalina travel to meet Claudius?',
            options: [
                { text: 'First on foot through the city, then in a cart used for garden refuse', correct: true },
                { text: 'In a luxurious carriage befitting an empress', correct: false, feedback: 'The opposite — she walked, then took a refuse cart. Her degradation is emphasised by the humble transport.' },
                { text: 'Carried by her remaining servants', correct: false, feedback: 'She had only three companions, and she walked. No one carried her — she was abandoned.' },
                { text: 'On horseback along the Ostian road', correct: false, feedback: 'She went "pedibus" (on foot) and by "vehiculo" (cart), not on horseback.' }
            ],
            correctFeedback: 'Correct! The empress walked through Rome, then took a garbage cart. "purgamenta hortorum" — garden refuse. Her transport matches her fallen state.'
        },
        {
            type: 'comprehension',
            latin: 'nullam misericordiam civibus commovit quia flagitiorum deformitas praevalebat',
            question: 'Why did the citizens feel no pity for Messalina?',
            options: [
                { text: 'The hideousness of her crimes outweighed any sympathy for her suffering', correct: true },
                { text: 'They didn\'t know who she was', correct: false, feedback: 'They knew her — that\'s why Tacitus mentions their reaction. They felt no pity BECAUSE they knew her crimes.' },
                { text: 'They were afraid to show any support', correct: false, feedback: 'Fear isn\'t mentioned — moral revulsion is. "deformitas" (ugliness) of her scandals prevented sympathy.' },
                { text: 'Roman citizens never felt pity for fallen aristocrats', correct: false, feedback: 'Romans could feel pity — but not for Messalina. Her specific crimes were too monstrous.' }
            ],
            correctFeedback: 'Correct! "flagitiorum deformitas praevalebat" — the ugliness of her scandals prevailed. Her crimes were so hideous that even seeing her humiliated state stirred no compassion.'
        },
        {
            type: 'comprehension',
            latin: 'quibus visus Caesaris averteret',
            question: 'What was Narcissus\'s purpose in giving Claudius the notebooks?',
            options: [
                { text: 'To prevent Claudius from looking at Messalina, whose presence might weaken his resolve', correct: true },
                { text: 'To provide evidence that could be used in a formal trial', correct: false, feedback: 'Legal evidence wasn\'t the purpose — controlling Claudius\'s attention was. He wanted to divert his GAZE.' },
                { text: 'To remind Claudius of happy memories with Messalina', correct: false, feedback: 'The notebooks contained "libidinum indices" — records of her AFFAIRS. Definitely not happy memories.' },
                { text: 'To keep Claudius busy while Narcissus dealt with Messalina', correct: false, feedback: 'The purpose was specific: "visus Caesaris averteret" — to divert Caesar\'s GAZE from Messalina herself.' }
            ],
            correctFeedback: 'Correct! Narcissus knew Claudius\'s weakness. If the emperor SAW Messalina — her tears, her appeals — he might forgive her. The notebooks kept his eyes down, reading her crimes instead of seeing her face.'
        },
        {
            type: 'comprehension',
            latin: 'offerebantur liberi, sed Narcissus amoveri eos iussit',
            question: 'What happened when the children were presented to Claudius?',
            options: [
                { text: 'Narcissus immediately ordered them removed before they could affect Claudius', correct: true },
                { text: 'Claudius embraced them warmly', correct: false, feedback: 'Narcissus prevented any embrace — "amoveri eos iussit" — he ordered them removed immediately.' },
                { text: 'The children refused to approach their father', correct: false, feedback: 'The children "offerebantur" (were presented) — they were brought forward. Narcissus, not the children, stopped the meeting.' },
                { text: 'Claudius sent them away himself', correct: false, feedback: 'NARCISSUS ordered them removed — "Narcissus amoveri eos iussit". Claudius didn\'t give the order.' }
            ],
            correctFeedback: 'Correct! Messalina\'s final gambit — the children — was immediately blocked. Narcissus had them removed before they could embrace Claudius. He controlled access completely.'
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.messalinaSection6 = messalinaSection6;
}
