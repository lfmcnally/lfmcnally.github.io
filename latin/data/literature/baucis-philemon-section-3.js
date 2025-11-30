// Baucis and Philemon Section 3: Lines 26-35
// Arrangements for the Unexpected Guests

var baucisPhilemonSection3 = {
    section: 3,
    title: 'Arrangements for the Unexpected Guests',
    lines: '26-35',
    latinText: 'interea medias fallunt sermonibus horas sentiraque moram prohibent. erat alveus illic fagineus dura clavo suspensus ab ansa; is tepidis impletur aquis artusque fovendos accipit. in medio torus est de mollibus ulvis impositus lecto sponda pedibusque salignis; vestibus hunc velant quas non nisi tempore festo sternere consuerat, sed et haec vilisque vetusque vestis erat, lecto non indignanda saligno. accubuere dei.',

    questions: [
        {
            type: 'translation',
            latin: 'interea medias fallunt sermonibus horas',
            question: 'Which translation is correct?',
            options: [
                { text: 'Meanwhile they while away the intervening hours with conversation', correct: true },
                { text: 'Meanwhile they deceive for half an hour with speeches', correct: false, feedback: '"medias horas" means "the middle/intervening hours", not "half an hour". "fallunt" here means "while away" or "make pass unnoticed".' },
                { text: 'In the meantime they tell lies during the mid-day hours', correct: false, feedback: '"fallunt" with time means "while away/deceive (time)", not "tell lies". They\'re making time pass pleasantly.' },
                { text: 'Meanwhile they deceive their guests with conversation for hours', correct: false, feedback: 'They\'re not deceiving their guests — "fallunt horas" means they\'re deceiving/tricking TIME, making it pass unnoticed.' }
            ],
            correctFeedback: 'Correct! "fallunt horas" personifies time as something that can be "deceived" or tricked — good company makes time fly. The hosts keep guests entertained while food is prepared.'
        },
        {
            type: 'translation',
            latin: 'sentiraque moram prohibent',
            question: 'Which translation is correct?',
            options: [
                { text: 'and they prevent the delay from being felt', correct: true },
                { text: 'and they feel they must prevent delay', correct: false, feedback: '"sentiri" is a passive infinitive (to be felt/perceived), not active. The delay is prevented from BEING FELT by the guests.' },
                { text: 'and they forbid sensing any delay', correct: false, feedback: '"prohibent" with accusative + infinitive means "prevent X from being Y". The construction is "moram sentiri prohibent".' },
                { text: 'and they stop the delay they felt', correct: false, feedback: '"sentiri" is passive infinitive — "to be felt". They prevent the delay from being perceived, not a delay they themselves felt.' }
            ],
            correctFeedback: 'Correct! "moram sentiri prohibent" is an elegant accusative + passive infinitive construction. The hosts ensure their guests don\'t notice the wait while food is prepared — thoughtful hospitality.'
        },
        {
            type: 'translation',
            latin: 'erat alveus illic fagineus dura clavo suspensus ab ansa',
            question: 'Which translation is correct?',
            options: [
                { text: 'there was there a bathtub made of beech, suspended from a nail by a sturdy handle', correct: true },
                { text: 'there was there a beech trough, suspended by a hard nail from a handle', correct: false, feedback: '"dura ansa" (sturdy handle) goes together — the handle is sturdy enough to support the weight. "clavo" is "from a nail".' },
                { text: 'there was a beechwood basin hanging from a hard nail by a handle', correct: false, feedback: '"dura" describes "ansa" (handle), not "clavo" (nail). The handle is sturdy, suspended from a nail.' },
                { text: 'there existed a beech tub, suspended from a nail with a strong grip', correct: false, feedback: '"ansa" is a handle (like on a pot), not a grip. The tub hangs by its handle from a nail on the wall.' }
            ],
            correctFeedback: 'Correct! "fagineus" (made of beech) and "dura ansa" (sturdy handle) emphasize humble but functional materials. The hyperbaton separating "dura" from "ansa" draws attention to the handle\'s quality.'
        },
        {
            type: 'translation',
            latin: 'is tepidis impletur aquis artusque fovendos accipit',
            question: 'Which translation is correct?',
            options: [
                { text: 'this is filled with warm water and receives limbs needing to be warmed', correct: true },
                { text: 'this is filled by warm waters and receives limbs to be cherished', correct: false, feedback: '"tepidis aquis" is ablative of means (with warm water), not agent. "fovendos" means "needing to be warmed/comforted".' },
                { text: 'he is filled with warm water and receives the limbs that must be heated', correct: false, feedback: '"is" refers to the tub (alveus, masculine), not a person. "fovendos" means needing warming/comforting.' },
                { text: 'this was being filled with warm water to receive the fostered limbs', correct: false, feedback: '"impletur" is present tense (is filled), not imperfect (was being filled). "fovendos" is a gerundive of purpose.' }
            ],
            correctFeedback: 'Correct! "artus fovendos" uses the gerundive to express purpose — limbs "needing to be warmed". The tired travellers are offered a warm bath after their journey. Thoughtful hospitality.'
        },
        {
            type: 'translation',
            latin: 'in medio torus est de mollibus ulvis impositus lecto sponda pedibusque salignis',
            question: 'Which translation is correct?',
            options: [
                { text: 'in the middle is a mattress of soft sedge placed on a bed with a frame and feet made of willow', correct: true },
                { text: 'in the middle is a soft sedge mattress placed on a bed with a willow frame and feet', correct: false, feedback: 'Word order matters: "mollibus ulvis" (soft sedge) is the material of the mattress, and "salignis" (willow) goes with both "sponda" and "pedibus".' },
                { text: 'a mattress of soft weeds is placed in the middle of the willow bed with frame and feet', correct: false, feedback: '"ulvis" means sedge (a type of marsh grass), not weeds. Also, "in medio" is the location, not describing the bed.' },
                { text: 'the middle mattress is of soft reeds placed on a bed of willow boards and legs', correct: false, feedback: '"torus" is the mattress, "lectus" is the bed frame. "sponda" is the frame/edge, "pedibus" the feet.' }
            ],
            correctFeedback: 'Correct! The description is detailed: a sedge-stuffed mattress on a willow-framed bed. Humble materials, but "mollibus" (soft) emphasizes the comfort they offer despite their poverty.'
        },
        {
            type: 'translation',
            latin: 'vestibus hunc velant quas non nisi tempore festo sternere consuerat',
            question: 'Which translation is correct?',
            options: [
                { text: 'they cover this with a coverlet which she was not accustomed to spread except at holiday time', correct: true },
                { text: 'they cover this with clothes which she never spread except in festive weather', correct: false, feedback: '"vestibus" here means a coverlet/covering cloth, not ordinary clothes. "tempore festo" means holiday time, not weather.' },
                { text: 'they clothe this with garments she only spread during festival time', correct: false, feedback: '"vestibus velant" means "they cover with a coverlet", not "clothe with garments". "consuerat" = was accustomed to.' },
                { text: 'they hide this with cloths that were spread only at feast time', correct: false, feedback: '"velant" means "cover", not "hide". The coverlet is placed over the bed to make it presentable, not to hide something.' }
            ],
            correctFeedback: 'Correct! "nisi tempore festo" (except at holiday time) reveals this coverlet is normally saved for special occasions. By using it for strangers, they treat this visit like a festival.'
        },
        {
            type: 'translation',
            latin: 'sed et haec vilisque vetusque vestis erat',
            question: 'Which translation is correct?',
            options: [
                { text: 'but even this coverlet was both cheap and old', correct: true },
                { text: 'but also this cheap and old garment was', correct: false, feedback: 'Word order: "et" emphasizes "haec" (even this), and "vilisque vetusque" shows polysyndeton with both adjectives.' },
                { text: 'but this clothing was also worthless and ancient', correct: false, feedback: '"vilis" means cheap/inexpensive, not worthless. "vetus" means old/ancient. The polysyndeton emphasizes both qualities.' },
                { text: 'but even these clothes were cheap and were old', correct: false, feedback: '"vestis" is singular (coverlet/covering), not plural "clothes". The sentence describes their best covering.' }
            ],
            correctFeedback: 'Correct! The polysyndeton "vilisque vetusque" (both cheap AND old) emphasizes both qualities. There\'s no pretense — Ovid honestly describes their poverty while showing their generous hearts.'
        },
        {
            type: 'translation',
            latin: 'lecto non indignanda saligno',
            question: 'Which translation is correct?',
            options: [
                { text: 'not to be deemed unworthy of the willow couch', correct: true },
                { text: 'not worthy of being placed on the willow bed', correct: false, feedback: '"non indignanda" is litotes (understatement through double negative) — NOT to be deemed UNWORTHY = appropriate/worthy. It\'s a gentle way of saying the coverlet suits the bed.' },
                { text: 'not to be scorned on the willow couch', correct: false, feedback: '"indignanda" means "to be deemed unworthy" rather than "scorned". The litotes gently says the coverlet is fitting for the bed.' },
                { text: 'unworthy of the willow bed', correct: false, feedback: '"non indignanda" is litotes — NOT unworthy = worthy/appropriate. The double negative creates understatement, not negation.' }
            ],
            correctFeedback: 'Correct! "non indignanda" is litotes — understatement through double negative. Ovid diplomatically says the coverlet is appropriate for the humble bed — everything matches, everything is fitting.'
        },
        {
            type: 'translation',
            latin: 'accubuere dei',
            question: 'Which translation is correct?',
            options: [
                { text: 'The gods reclined', correct: true },
                { text: 'The gods had reclined', correct: false, feedback: '"accubuere" is syncopated perfect (= accubuerunt), meaning "they reclined", not pluperfect "they had reclined".' },
                { text: 'The gods were reclining', correct: false, feedback: '"accubuere" is perfect tense (they reclined), not imperfect (were reclining).' },
                { text: 'The gods lie down', correct: false, feedback: '"accubuere" is perfect tense (they reclined), not present tense (they lie down).' }
            ],
            correctFeedback: 'Correct! "accubuere" is syncopated perfect. After all the preparation, this brief statement closes the scene decisively. And now, for the first time, Ovid reminds us: these guests are gods.'
        },
        {
            type: 'style',
            latin: 'fallunt... horas',
            question: 'What is the effect of "fallunt horas" (they while away the hours)?',
            options: [
                { text: 'It personifies time as something that can be deceived — good company makes time pass unnoticed', correct: true },
                { text: 'It suggests the hosts were telling lies to their guests', correct: false, feedback: '"fallunt" with time means "while away/make pass unnoticed", not "deceive with lies". The object is "horas", not the guests.' },
                { text: 'It shows they were wasting time', correct: false, feedback: 'The time is passing productively — conversation fills the wait while food is prepared. "fallunt" here is positive.' },
                { text: 'It has no particular stylistic effect', correct: false, feedback: 'Personifying time as something that can be "fooled" is a lovely touch — capturing how good conversation makes waiting feel short.' }
            ],
            correctFeedback: 'Correct! "fallunt horas" personifies time as something that can be tricked or deceived. The hosts\' good conversation makes the waiting time fly by unnoticed — a warm domestic detail.'
        },
        {
            type: 'style',
            latin: 'fagineus',
            question: 'What does the material adjective "fagineus" (made of beech) emphasize?',
            options: [
                { text: 'It adds realistic detail while emphasizing humble, everyday materials — this is not a marble bath', correct: true },
                { text: 'It shows beech was very expensive in ancient times', correct: false, feedback: 'Beech is a common, inexpensive wood. The detail emphasizes humble materials, contrasting with what wealthy hosts might offer.' },
                { text: 'It has no particular significance', correct: false, feedback: 'Material adjectives in Ovid add authentic detail and characterize social status. Beech is humble but functional.' },
                { text: 'It suggests the tub was magical', correct: false, feedback: 'There\'s no magic here. The beechwood tub is ordinary, practical peasant equipment — honest poverty.' }
            ],
            correctFeedback: 'Correct! "fagineus" (beech) is a humble, everyday wood. Every material detail — beech bathtub, sedge mattress, willow bed — reinforces the couple\'s modest means while showing their generous hearts.'
        },
        {
            type: 'style',
            latin: 'mollibus ulvis',
            question: 'What is the effect of the tactile adjective "mollibus" (soft) with "ulvis" (sedge)?',
            options: [
                { text: 'It creates sensory appeal — the humble material sounds comfortable despite being cheap', correct: true },
                { text: 'It contrasts negatively with what wealthy people would have', correct: false, feedback: 'The emphasis is positive — "soft" makes the sedge sound comfortable. Ovid balances poverty with comfort.' },
                { text: 'It suggests the sedge was actually uncomfortable', correct: false, feedback: '"mollibus" means soft — the opposite of uncomfortable. Ovid emphasizes what comfort they CAN offer.' },
                { text: 'It has no particular stylistic effect', correct: false, feedback: 'Tactile language engages the senses. "soft sedge" makes humble bedding sound appealing.' }
            ],
            correctFeedback: 'Correct! "mollibus" (soft) makes the cheap material sound inviting. Ovid balances acknowledgment of poverty with emphasis on comfort — the couple make the best of what they have.'
        },
        {
            type: 'style',
            latin: 'lecto... saligno',
            question: 'What is significant about the repetition of "lecto saligno" (willow couch) in lines 31 and 34?',
            options: [
                { text: 'The repetition frames the description, making the humble willow bed symbolic of their modest hospitality', correct: true },
                { text: 'Ovid accidentally repeated himself', correct: false, feedback: 'This is deliberate framing — the willow bed appears at the start and end of the bedding description, creating structural emphasis.' },
                { text: 'It shows they had two different beds', correct: false, feedback: 'It\'s the same bed mentioned twice — first describing its construction, then saying the coverlet suits it.' },
                { text: 'It has no particular significance', correct: false, feedback: 'Repetition creates emphasis. The willow bed becomes a symbol of humble but genuine hospitality.' }
            ],
            correctFeedback: 'Correct! "lecto saligno" appears twice, framing the description of their bedding. The humble willow bed becomes a symbol of their modest but heartfelt hospitality.'
        },
        {
            type: 'style',
            latin: 'tempore festo',
            question: 'What does "tempore festo" (at holiday time) reveal about the couple\'s actions?',
            options: [
                { text: 'By using their festival coverlet, they treat unknown strangers like honored holiday guests', correct: true },
                { text: 'It shows they only celebrated religious festivals', correct: false, feedback: 'The point is about their ACTIONS now — using special occasion items for strangers shows exceptional generosity.' },
                { text: 'It indicates the story takes place during a festival', correct: false, feedback: 'It\'s not a festival — that\'s the point. They bring out festival-quality hospitality for ordinary strangers.' },
                { text: 'It suggests they were too poor to celebrate holidays properly', correct: false, feedback: 'They DO have a special coverlet for festivals. The remarkable thing is that they use it for unknown travelers.' }
            ],
            correctFeedback: 'Correct! "tempore festo" reveals exceptional generosity. This coverlet is normally saved for special occasions, but they use it for strangers — treating unknown travelers like honored festival guests.'
        },
        {
            type: 'style',
            latin: 'vilisque vetusque',
            question: 'What is the effect of the polysyndeton "vilisque vetusque" (both cheap and old)?',
            options: [
                { text: 'The accumulated conjunctions emphasize both qualities — honest acknowledgment of their poverty without pretense', correct: true },
                { text: 'It shows they were ashamed of their coverlet', correct: false, feedback: 'There\'s no shame — just honest description. The polysyndeton emphasizes reality without apology.' },
                { text: 'It\'s repetitive and clumsy writing', correct: false, feedback: 'Polysyndeton (repeated conjunctions) is a deliberate figure of speech that creates emphasis and rhythm.' },
                { text: 'It suggests the coverlet should be thrown away', correct: false, feedback: 'Despite being cheap and old, the coverlet is "non indignanda" — not unworthy. It\'s appropriate for what they have.' }
            ],
            correctFeedback: 'Correct! Polysyndeton (vilisque vetusque — "both cheap AND old") emphasizes both qualities. The couple have no pretense — they give their best while honestly acknowledging it\'s humble.'
        },
        {
            type: 'style',
            latin: 'non indignanda',
            question: 'What is the effect of the litotes "non indignanda" (not to be deemed unworthy)?',
            options: [
                { text: 'It\'s gentle understatement — rather than claiming the coverlet is fine, Ovid softly says it\'s not inappropriate', correct: true },
                { text: 'It shows the coverlet was actually unworthy', correct: false, feedback: 'Litotes (double negative) creates understatement. "Not unworthy" = worthy/appropriate, just said gently.' },
                { text: 'It\'s a grammatical error that should be corrected', correct: false, feedback: 'Litotes is a deliberate rhetorical figure. "Non indignanda" is perfect Latin expressing subtle meaning.' },
                { text: 'It means exactly the same as "worthy"', correct: false, feedback: 'While the meaning is similar, litotes creates a different tone — more modest, more diplomatic than direct assertion.' }
            ],
            correctFeedback: 'Correct! Litotes (understatement through negation) is diplomatic: "not unworthy" is softer than "worthy". Ovid reflects the couple\'s modest self-assessment while implying the coverlet is indeed fitting.'
        },
        {
            type: 'style',
            latin: 'accubuere dei',
            question: 'What is the effect of ending this passage with "dei" (gods)?',
            options: [
                { text: 'It\'s a narratorial reminder of the guests\' true identity, creating dramatic irony after all the humble preparations', correct: true },
                { text: 'It shows the gods were finally revealed to the hosts', correct: false, feedback: 'Baucis and Philemon don\'t know yet — this is the narrator telling US (the audience). The dramatic irony continues.' },
                { text: 'It suggests the gods were impatient', correct: false, feedback: '"accubuere dei" simply states they reclined. No impatience is implied — just a decisive conclusion to the preparation.' },
                { text: 'It has no particular significance', correct: false, feedback: 'Calling them "dei" after detailed humble preparations creates powerful irony — all this care was unknowingly for gods.' }
            ],
            correctFeedback: 'Correct! After describing humble preparations, "dei" reminds us who these guests really are. The couple unknowingly provide divine hospitality — dramatic irony that makes their pietas even more impressive.'
        },
        {
            type: 'comprehension',
            latin: 'medias fallunt sermonibus horas sentiraque moram prohibent',
            question: 'What does this tell us about the couple\'s hosting skills?',
            options: [
                { text: 'They know how to keep guests entertained so they don\'t notice the wait while food is prepared', correct: true },
                { text: 'They were boring conversationalists who made time drag', correct: false, feedback: 'The opposite — they "fool" time and prevent delay from being felt. They\'re skilled, entertaining hosts.' },
                { text: 'They were trying to hide something from their guests', correct: false, feedback: 'They\'re not hiding anything — they\'re simply keeping guests comfortable during the natural wait for food.' },
                { text: 'They talked too much and annoyed their guests', correct: false, feedback: 'The effect is positive — conversation makes time pass pleasantly. Good hosts keep guests entertained.' }
            ],
            correctFeedback: 'Correct! Thoughtful hosts keep guests entertained. While food is prepared (a process we saw in detail), conversation makes the wait pleasant — another mark of their excellent hospitality.'
        },
        {
            type: 'comprehension',
            latin: 'is tepidis impletur aquis artusque fovendos accipit',
            question: 'Why do the hosts offer their guests a warm bath?',
            options: [
                { text: 'The guests have been traveling and need to warm and refresh their tired limbs', correct: true },
                { text: 'It was required by law to bathe all visitors', correct: false, feedback: 'No law is mentioned. Offering a bath is good hospitality — recognizing guests\' needs after travel.' },
                { text: 'The hosts thought their guests were dirty', correct: false, feedback: 'The focus is on warming tired limbs (artus fovendos), not cleaning. It\'s about comfort after travel.' },
                { text: 'They had excess warm water to dispose of', correct: false, feedback: 'The bath is offered for guests\' comfort. "fovendos" (needing to be warmed) shows care for tired travelers.' }
            ],
            correctFeedback: 'Correct! "artus fovendos" (limbs needing to be warmed) tells us the guests are weary from traveling. A warm bath is practical hospitality — addressing the physical needs of tired travelers.'
        },
        {
            type: 'comprehension',
            latin: 'vestibus hunc velant quas non nisi tempore festo sternere consuerat',
            question: 'What does using their festival coverlet tell us about the couple?',
            options: [
                { text: 'They treat strangers as generously as they would treat festival guests — exceptional hospitality', correct: true },
                { text: 'They didn\'t have any other coverlets', correct: false, feedback: 'The point is they could have used everyday bedding but chose their BEST — festival quality for strangers.' },
                { text: 'They knew the strangers were gods', correct: false, feedback: 'They don\'t know yet. That\'s what makes their generosity so impressive — they give their best to unknown travelers.' },
                { text: 'They were showing off their possessions', correct: false, feedback: 'The coverlet is "vilis vetusque" (cheap and old). They\'re not showing off — just giving their best, however humble.' }
            ],
            correctFeedback: 'Correct! Using special-occasion items for unknown strangers is remarkable generosity. They don\'t know these are gods — they just treat every guest with festival-level honor.'
        },
        {
            type: 'comprehension',
            latin: 'sed et haec vilisque vetusque vestis erat, lecto non indignanda saligno',
            question: 'What attitude toward their poverty does this sentence reflect?',
            options: [
                { text: 'Honest acceptance without shame — they acknowledge their limitations but offer their best anyway', correct: true },
                { text: 'Deep embarrassment about their poverty', correct: false, feedback: 'There\'s no embarrassment — just honest acknowledgment. "non indignanda" shows quiet confidence that what they have is appropriate.' },
                { text: 'Pride in their valuable possessions', correct: false, feedback: 'They\'re not claiming value — "vilis vetusque" openly states it\'s cheap and old. But they give it anyway.' },
                { text: 'Anger at their circumstances', correct: false, feedback: 'There\'s no anger. Earlier we learned they bear poverty "nec iniqua mente" — without resentment. This confirms that attitude.' }
            ],
            correctFeedback: 'Correct! The couple acknowledge their poverty without shame. "vilis vetusque" is honest, and "non indignanda" shows quiet dignity — what they have is appropriate for what they are.'
        },
        {
            type: 'comprehension',
            latin: 'accubuere dei',
            question: 'What is the significance of ending this scene with "the gods reclined"?',
            options: [
                { text: 'After elaborate humble preparations, divine guests accept peasant hospitality — the stage is set for miraculous events', correct: true },
                { text: 'It shows the gods were lazy', correct: false, feedback: 'Reclining to dine was normal Roman custom. The significance is GODS accepting HUMBLE hospitality.' },
                { text: 'It means the preparations were inadequate', correct: false, feedback: 'The gods accepting shows the preparations were perfectly adequate. Divine beings honor this humble setting.' },
                { text: 'It indicates the meal is over', correct: false, feedback: 'Reclining to eat BEGINS the meal, not ends it. The scene is set for what happens next — the miraculous feast.' }
            ],
            correctFeedback: 'Correct! After all the careful, humble preparations, the gods accept. This closes the preparation scene and sets the stage for what follows — the miraculous feast where divine identity is revealed.'
        }
    ]
};
