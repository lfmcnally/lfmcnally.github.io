// Messalina Section 2 - Lines 8-17
// Messalina's visits to Silius become increasingly more frequent

var messalinaSection2 = {
    section: 2,
    lines: '8-17',
    title: "Messalina's visits to Silius become increasingly more frequent",
    
    latinText: 'illa non furtim sed multis cum comitibus ventitat domum, egredienti adhaeret, dat opes honoresque: postremo servi, liberti, paratus principis apud adulterum saepe videbantur. at Claudius matrimonii sui ignarus. iam Messalina propter facilitatem adulteriorum ad novas libidines versa est. Silius, sive fatali insania an ipsa pericula remedium imminentium periculorum ratus, abrumpi dissimulationem urgebat: quippe non exspectandum, dum princeps senesceret.',
    
    questions: [
        // ========== TRANSLATION QUESTIONS ==========
        {
            type: 'translation',
            latin: 'illa non furtim sed multis cum comitibus ventitat domum',
            question: 'Which translation is correct?',
            options: [
                { text: 'she keeps visiting his house not secretly but with many companions', correct: true },
                { text: 'she visited his house not secretly but with many companions', correct: false, feedback: '"ventitat" is a frequentative verb — it emphasises repeated action ("keeps visiting"), not a single visit.' },
                { text: 'she keeps visiting his house secretly with many companions', correct: false, feedback: '"non furtim sed" means "NOT secretly BUT" — she is being brazenly open, not secretive.' },
                { text: 'she keeps visiting his house not secretly but with a few companions', correct: false, feedback: '"multis" means MANY, not few. Tacitus emphasises she makes no attempt to be discreet.' }
            ],
            correctFeedback: 'Correct! "ventitat" is a frequentative verb showing repeated action. The contrast "non furtim sed multis cum comitibus" emphasises her shameless openness.'
        },
        {
            type: 'translation',
            latin: 'egredienti adhaeret, dat opes honoresque',
            question: 'Which translation is correct?',
            options: [
                { text: 'she clings to him as he leaves, she gives him wealth and honours', correct: true },
                { text: 'she clings to him as she leaves, she gives him wealth and honours', correct: false, feedback: '"egredienti" is dative masculine — it refers to HIM leaving, not her. She clings to Silius as he departs.' },
                { text: 'she clings to him as he leaves, she gives him wealth and honour', correct: false, feedback: '"honoresque" is plural (honours), not singular. She showers him with multiple distinctions.' },
                { text: 'leaving, she clings to him and gives him wealth and honours', correct: false, feedback: '"egredienti" is dative (to him leaving), not ablative/nominative. She clings to HIM as HE leaves.' }
            ],
            correctFeedback: 'Correct! "egredienti" is dative with "adhaeret" — she clings to him as he leaves. The tricolon (clings, gives wealth, gives honours) shows her lavish attention.'
        },
        {
            type: 'translation',
            latin: 'postremo servi, liberti, paratus principis apud adulterum saepe videbantur',
            question: 'Which translation is correct?',
            options: [
                { text: 'finally the slaves, freedmen, and equipment of the emperor were often seen at the adulterer\'s house', correct: true },
                { text: 'finally the slaves, freedmen, and equipment of the emperor were seen at the adulterer\'s house', correct: false, feedback: 'Missing "saepe" (often) — this word is important as it shows this was a regular occurrence, not a one-off.' },
                { text: 'finally the slaves, freedmen, and equipment of the adulterer were often seen at the emperor\'s house', correct: false, feedback: 'You\'ve got it backwards! "paratus principis" (the emperor\'s equipment) was at "apud adulterum" (the adulterer\'s house).' },
                { text: 'at last the servants, freedmen, and preparations of the emperor were often seen at the adulterer\'s house', correct: false, feedback: '"paratus" here means equipment/trappings (the imperial household items), not "preparations".' }
            ],
            correctFeedback: 'Correct! The emperor\'s own household — slaves, freedmen, even his possessions — were brazenly displayed at Silius\'s house. The juxtaposition of "principis" and "adulterum" is devastating.'
        },
        {
            type: 'translation',
            latin: 'at Claudius matrimonii sui ignarus',
            question: 'Which translation is correct?',
            options: [
                { text: 'but Claudius was unaware of his own marriage situation', correct: true },
                { text: 'but Claudius was ignorant of marriage', correct: false, feedback: '"matrimonii sui" — "of HIS OWN marriage" — the possessive "sui" is crucial. It\'s specifically his marriage being violated.' },
                { text: 'and Claudius was unaware of his own marriage situation', correct: false, feedback: '"at" means "but/however", not "and". It introduces a sharp contrast — all this happening while Claudius knew nothing.' },
                { text: 'but Claudius was unaware of her marriage', correct: false, feedback: '"sui" means "his own", not "her". The irony is that Claudius doesn\'t know what\'s happening to HIS OWN marriage.' }
            ],
            correctFeedback: 'Correct! This brief sentence is devastating in its simplicity. "ignarus" takes the genitive — he was unaware OF his own marriage. The brevity emphasises Claudius\'s obliviousness amid such open scandal.'
        },
        {
            type: 'translation',
            latin: 'iam Messalina propter facilitatem adulteriorum ad novas libidines versa est',
            question: 'Which translation is correct?',
            options: [
                { text: 'now Messalina, because of the ease of her adulteries, turned to new lusts', correct: true },
                { text: 'now Messalina, because of the ease of her adultery, turned to new lusts', correct: false, feedback: '"adulteriorum" is genitive PLURAL — "of her adulteries". Multiple affairs, not just one.' },
                { text: 'now Messalina, because of the ease of her adulteries, was turned to new lusts', correct: false, feedback: '"versa est" is best translated as active "turned" here — she actively chose this path, wasn\'t passively turned.' },
                { text: 'already Messalina, because of the ease of her adulteries, turned to new lusts', correct: false, feedback: '"iam" here means "now/by this point", marking a new stage in her descent, rather than "already".' }
            ],
            correctFeedback: 'Correct! "iam" marks a turning point — bored with easy conquests, she seeks new thrills. The plural "adulteriorum" shows her affairs were numerous. Her vice escalates.'
        },
        {
            type: 'translation',
            latin: 'Silius, sive fatali insania an ipsa pericula remedium imminentium periculorum ratus',
            question: 'Which translation is correct?',
            options: [
                { text: 'Silius, whether through fatal madness or thinking the dangers themselves a remedy for impending dangers', correct: true },
                { text: 'Silius, whether through fatal insanity and thinking the dangers themselves a remedy for impending dangers', correct: false, feedback: '"sive...an" means "whether...or" presenting alternatives, not "and" joining two things together.' },
                { text: 'Silius, either through fatal madness or thinking the danger itself a remedy for impending dangers', correct: false, feedback: '"ipsa pericula" is plural — "the dangers THEMSELVES", not singular "danger itself".' },
                { text: 'Silius, whether through fatal madness or thinking the dangers themselves a cure for threatening dangers', correct: false, feedback: '"imminentium" means "impending/looming", not "threatening". The dangers are approaching, not actively threatening.' }
            ],
            correctFeedback: 'Correct! Tacitus leaves Silius\'s motivation ambiguous with "sive...an" — was it madness or calculation? The paradox "pericula remedium periculorum" (dangers as remedy for dangers) captures his desperate logic.'
        },
        {
            type: 'translation',
            latin: 'abrumpi dissimulationem urgebat',
            question: 'Which translation is correct?',
            options: [
                { text: 'he urged that the pretence be broken off', correct: true },
                { text: 'he urged to break off the pretence', correct: false, feedback: '"abrumpi" is passive infinitive in indirect statement — "that the pretence BE broken off", not active "to break".' },
                { text: 'he urged that the dissimulation be broken off', correct: false, feedback: 'While "dissimulationem" literally means dissimulation, "pretence" or "deception" is better English here.' },
                { text: 'he was urging that the pretence be broken off', correct: false, feedback: '"urgebat" is imperfect but best translated as simple "urged" here, showing his persistent pressure.' }
            ],
            correctFeedback: 'Correct! "abrumpi dissimulationem" — the passive infinitive in indirect statement. Silius wants to end the secret charade and bring things into the open. A fateful decision.'
        },
        {
            type: 'translation',
            latin: 'quippe non exspectandum, dum princeps senesceret',
            question: 'Which translation is correct?',
            options: [
                { text: 'for indeed they should not wait until the emperor grew old', correct: true },
                { text: 'for indeed he should not wait until the emperor grew old', correct: false, feedback: '"exspectandum" is impersonal gerundive — "it was not to be waited" / "one should not wait" / "they should not wait", not specifically "he".' },
                { text: 'for indeed they should not wait until the emperor grows old', correct: false, feedback: '"senesceret" is imperfect subjunctive — "grew old", not present "grows old". The subjunctive is required in the temporal clause.' },
                { text: 'for they certainly should not wait until the emperor grew old', correct: false, feedback: '"quippe" means "for indeed/of course" — it introduces Silius\'s reasoning, not just emphasis with "certainly".' }
            ],
            correctFeedback: 'Correct! The gerundive "exspectandum" expresses obligation impersonally. "dum + subjunctive" gives the temporal clause. Silius argues they must act now, not wait for Claudius to die naturally.'
        },
        
        // ========== STYLE & EFFECT QUESTIONS ==========
        {
            type: 'style',
            latin: 'non furtim sed multis cum comitibus',
            question: 'What effect does the contrast "non furtim sed..." (not secretly but...) create?',
            options: [
                { text: 'It emphasises Messalina\'s brazen shamelessness — she makes no attempt at discretion', correct: true },
                { text: 'It shows that Messalina wanted to be caught', correct: false, feedback: 'There\'s no suggestion she wanted to be caught — rather, she simply didn\'t care about being seen. Her arrogance made her feel untouchable.' },
                { text: 'It suggests she was proud of her relationship with Silius', correct: false, feedback: 'It\'s not about pride in the relationship — it\'s about her complete disregard for propriety and public opinion. She acts as if normal rules don\'t apply to her.' },
                { text: 'It implies her companions forced her to be open', correct: false, feedback: 'The companions don\'t force anything — SHE chooses to parade openly with an entourage. The "multis cum comitibus" shows she actively flaunts the affair.' }
            ],
            correctFeedback: 'Correct! The stark contrast "non...sed" (not...but) emphasises her utter shamelessness. A normal adulterer would hide; Messalina parades openly with an entourage. This brazenness shocks even Tacitus\'s Roman readers.'
        },
        {
            type: 'style',
            latin: 'ventitat',
            question: 'Why does Tacitus use the frequentative verb "ventitat" rather than simple "venit"?',
            options: [
                { text: 'To emphasise the repeated, habitual nature of her visits — this was routine behaviour', correct: true },
                { text: 'To show she was visiting quickly', correct: false, feedback: 'Frequentative verbs indicate repeated action, not speed. "ventitat" means she visits again and again, habitually.' },
                { text: 'To make the sentence sound more elegant', correct: false, feedback: 'Tacitus doesn\'t choose words for elegance — every word carries meaning. The frequentative specifically emphasises ongoing, repeated action.' },
                { text: 'To show uncertainty about whether she actually visited', correct: false, feedback: 'There\'s no uncertainty — the frequentative indicates she definitely visited, and did so repeatedly. It\'s a statement of habitual fact.' }
            ],
            correctFeedback: 'Correct! The frequentative "ventitat" (keeps visiting, visits repeatedly) shows this wasn\'t a single indiscretion but a habitual pattern. Her visits to Silius were routine, brazen, and ongoing.'
        },
        {
            type: 'style',
            latin: 'paratus principis apud adulterum',
            question: 'What is the effect of placing "principis" (of the emperor) next to "adulterum" (the adulterer)?',
            options: [
                { text: 'The jarring juxtaposition emphasises the scandal — the emperor\'s own property at his rival\'s house', correct: true },
                { text: 'It shows that Claudius and Silius were friends', correct: false, feedback: 'They were not friends — Claudius didn\'t even know about the affair. The juxtaposition highlights the outrage of imperial property being at the adulterer\'s house.' },
                { text: 'It suggests the emperor had given gifts to Silius', correct: false, feedback: 'Claudius gave nothing — Messalina was taking the emperor\'s household goods to her lover. That\'s what makes it so scandalous.' },
                { text: 'It\'s just the natural word order in Latin', correct: false, feedback: 'Word order in Latin is flexible and meaningful. Tacitus deliberately places these contrasting words together for maximum impact.' }
            ],
            correctFeedback: 'Correct! The juxtaposition is deliberate and devastating: "principis...adulterum" — the emperor\'s possessions at the adulterer\'s house. Imperial dignity was being openly mocked. Tacitus lets the words speak for themselves.'
        },
        {
            type: 'style',
            latin: 'at Claudius matrimonii sui ignarus',
            question: 'Why is this sentence so short compared to the surrounding text?',
            options: [
                { text: 'Tacitean brevity — the blunt simplicity makes Claudius\'s obliviousness more devastating', correct: true },
                { text: 'Tacitus ran out of information about Claudius', correct: false, feedback: 'Tacitus had plenty to say about Claudius. The brevity is a deliberate stylistic choice, not a lack of material.' },
                { text: 'Short sentences were fashionable in Roman writing', correct: false, feedback: 'Tacitus varies his sentence length deliberately for effect. This sentence is short because brevity here is more powerful than elaboration.' },
                { text: 'The manuscript is damaged and text is missing', correct: false, feedback: 'The sentence is complete as intended. Its brevity is the point — amid all this scandal, Claudius simply "was unaware". Nothing more needs to be said.' }
            ],
            correctFeedback: 'Correct! After the elaborate description of Messalina\'s brazen behaviour, this terse sentence hits like a hammer blow. "at Claudius matrimonii sui ignarus" — but Claudius was unaware. The brevity speaks volumes about his foolishness.'
        },
        {
            type: 'style',
            latin: 'propter facilitatem adulteriorum ad novas libidines',
            question: 'What does "ad novas libidines" (to new lusts) suggest about Messalina\'s character?',
            options: [
                { text: 'Her vice escalates — easy conquests bore her, so she seeks ever more extreme thrills', correct: true },
                { text: 'She has fallen in love with someone new', correct: false, feedback: '"libidines" (lusts) is not about love — it\'s about uncontrolled desire. She\'s not seeking love but new forms of transgression.' },
                { text: 'She has become more moderate in her behaviour', correct: false, feedback: 'The opposite — "novas libidines" shows escalation, not moderation. Bored with ordinary adultery, she seeks new extremes.' },
                { text: 'She is trying to make Silius jealous', correct: false, feedback: 'The text doesn\'t suggest jealousy games. Her "new lusts" refer to the upcoming mock marriage — a new level of transgression beyond simple adultery.' }
            ],
            correctFeedback: 'Correct! The phrase shows moral escalation. Adultery has become too easy ("facilitatem"), so she needs "new lusts" — greater transgressions. This prepares us for the shocking mock marriage to come. Her vice knows no limit.'
        },
        {
            type: 'style',
            latin: 'sive fatali insania an ipsa pericula remedium imminentium periculorum ratus',
            question: 'Why does Tacitus present two possible explanations for Silius\'s behaviour with "sive...an" (whether...or)?',
            options: [
                { text: 'He leaves Silius\'s true motivation ambiguous — was it madness or desperate calculation?', correct: true },
                { text: 'He wants readers to choose which explanation they prefer', correct: false, feedback: 'It\'s not about reader preference — Tacitus is showing that even he cannot determine Silius\'s true state of mind. The ambiguity is the point.' },
                { text: 'He is quoting two different historical sources', correct: false, feedback: 'This isn\'t source citation — it\'s Tacitus\'s own analysis. He genuinely finds Silius\'s motivation unclear: madness or calculation?' },
                { text: 'He thinks both explanations are equally wrong', correct: false, feedback: 'Tacitus presents both as plausible, not wrong. Either Silius was mad, or he made a desperate gamble. Both could explain his fatal choice.' }
            ],
            correctFeedback: 'Correct! The "sive...an" construction shows Tacitean ambiguity. Was Silius driven by "fatal madness" or by cold calculation (danger as remedy for danger)? Tacitus refuses to simplify human motivation. Perhaps even Silius didn\'t know.'
        },
        {
            type: 'style',
            latin: 'ipsa pericula remedium imminentium periculorum',
            question: 'What is the effect of the paradox "pericula remedium periculorum" (dangers as remedy for dangers)?',
            options: [
                { text: 'It captures Silius\'s desperate, twisted logic — only a bold stroke can save him now', correct: true },
                { text: 'It shows Silius is confused and doesn\'t know what he wants', correct: false, feedback: 'He\'s not confused — his logic is clear, if desperate. He believes that taking a dangerous action (open marriage) might actually save him from the danger of discovery.' },
                { text: 'It\'s a common Roman proverb that Tacitus is quoting', correct: false, feedback: 'This is Tacitus\'s own formulation, not a proverb. He crafts the paradox to capture Silius\'s particular situation.' },
                { text: 'It suggests Silius enjoyed taking risks', correct: false, feedback: 'This isn\'t about thrill-seeking — it\'s about survival. Silius calculates that bold action might be safer than continuing to hide.' }
            ],
            correctFeedback: 'Correct! The paradox perfectly captures desperate reasoning: when you\'re already in mortal danger, perhaps the only escape is through greater danger. Silius gambles that marrying Messalina openly might somehow protect them. It won\'t.'
        },
        
        // ========== COMPREHENSION QUESTIONS ==========
        {
            type: 'comprehension',
            latin: 'servi, liberti, paratus principis apud adulterum saepe videbantur',
            question: 'What evidence shows that Messalina\'s affair had become completely open?',
            options: [
                { text: 'The emperor\'s own slaves, freedmen, and household equipment were regularly seen at Silius\'s house', correct: true },
                { text: 'Claudius had given official approval for the visits', correct: false, feedback: 'Claudius knew nothing — "Claudius matrimonii sui ignarus". The openness existed despite his ignorance, not because of approval.' },
                { text: 'Messalina had announced the affair publicly', correct: false, feedback: 'She made no announcement — she simply behaved as if the affair were normal, bringing the imperial household to her lover\'s home.' },
                { text: 'Silius had moved into the palace', correct: false, feedback: 'It\'s the opposite — imperial property moved to SILIUS\'s house, not Silius to the palace. Messalina brought her husband\'s possessions to her lover.' }
            ],
            correctFeedback: 'Correct! The emperor\'s own household — slaves, freedmen, his very equipment — was regularly visible at Silius\'s house. This wasn\'t a secret affair; it was practically a second imperial household.'
        },
        {
            type: 'comprehension',
            latin: 'at Claudius matrimonii sui ignarus',
            question: 'What does Claudius\'s ignorance reveal about the situation at court?',
            options: [
                { text: 'Despite the affair being completely open, no one dared tell the emperor', correct: true },
                { text: 'The affair was actually well-hidden from everyone', correct: false, feedback: 'It wasn\'t hidden at all — "saepe videbantur" (were often seen). Everyone knew except Claudius. That\'s the scandal.' },
                { text: 'Claudius chose to ignore what was happening', correct: false, feedback: '"ignarus" means genuinely unaware, not wilfully blind. He truly did not know, despite the affair being public knowledge.' },
                { text: 'Messalina had successfully deceived everyone', correct: false, feedback: 'She deceived only Claudius. The whole court could see what was happening — they just didn\'t inform the emperor.' }
            ],
            correctFeedback: 'Correct! The affair was public knowledge — yet Claudius remained "ignarus". This reveals the dangerous dynamics at court: everyone saw, but no one dared speak. Fear of Messalina kept them silent.'
        },
        {
            type: 'comprehension',
            latin: 'Silius... abrumpi dissimulationem urgebat',
            question: 'What did Silius want to do, and why?',
            options: [
                { text: 'End the pretence and marry Messalina openly — he calculated this was safer than waiting', correct: true },
                { text: 'End the affair and return to his normal life', correct: false, feedback: 'He didn\'t want to end the affair — he wanted to make it official through marriage. He was deepening the commitment, not escaping it.' },
                { text: 'Confess everything to Claudius and beg forgiveness', correct: false, feedback: 'There\'s no suggestion of confession or seeking forgiveness. He wanted to break off the pretence by MARRYING Messalina, not by confessing.' },
                { text: 'Kill Claudius immediately', correct: false, feedback: 'While removing Claudius might have been implied in their plans, this passage focuses on ending the "dissimulatio" — the pretence of secrecy — through open marriage.' }
            ],
            correctFeedback: 'Correct! Silius urged ending the charade — "abrumpi dissimulationem". His reasoning: danger as remedy for danger. Rather than wait for discovery, he wanted to seize the initiative through marriage.'
        },
        {
            type: 'comprehension',
            latin: 'quippe non exspectandum, dum princeps senesceret',
            question: 'What was Silius\'s argument against waiting?',
            options: [
                { text: 'They shouldn\'t wait for Claudius to grow old and die — they needed to act now', correct: true },
                { text: 'Claudius was already very old and might die soon anyway', correct: false, feedback: 'The argument is that they SHOULDN\'T wait for natural death. Silius wants immediate action rather than a long, dangerous wait.' },
                { text: 'The emperor was growing suspicious and might discover them', correct: false, feedback: 'The text doesn\'t mention Claudius growing suspicious. The argument is about not waiting for him to age, not about avoiding detection.' },
                { text: 'Messalina was growing impatient with the relationship', correct: false, feedback: 'This is Silius\'s reasoning, not about Messalina\'s patience. He argues for bold action rather than waiting out Claudius\'s natural lifespan.' }
            ],
            correctFeedback: 'Correct! Silius argued against a waiting game. Rather than hope Claudius would die naturally, he pushed for immediate action. His desperate logic: boldness might save them where patience would fail.'
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.messalinaSection2 = messalinaSection2;
}
