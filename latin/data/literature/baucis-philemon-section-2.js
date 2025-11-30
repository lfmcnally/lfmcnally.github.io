// Baucis and Philemon Section 2: Lines 12-25
// The Gods are Welcomed

const baucisPhilemonSection2 = {
    section: 2,
    title: 'The Gods are Welcomed',
    lines: '12-25',
    latinText: 'ergo ubi caelicolae parvos tetigere penates summissoque humiles intrarunt vertice postes, membra senex posito iussit relevare sedili, cui superiniecit textum rude sedula Baucis. inde foco tepidum cinerem dimovit et ignes suscitat hesternos foliisque et cortice sicco nutrit et ad flammas anima producit anili, multifidasque faces ramaliaque arida tecto detulit et minuit parvoque admovit aeno, quodque suus coniunx riguo collegerat horto truncat holus foliis; furca levat ille bicorni sordida terga suis nigro pendentia tigno servatoque diu resecat de tergore partem exiguam sectamque domat ferventibus undis.',

    questions: [
        {
            type: 'translation',
            latin: 'ergo ubi caelicolae parvos tetigere penates',
            question: 'Which translation is correct?',
            options: [
                { text: 'Therefore, when the heaven-dwellers arrived at the small household', correct: true },
                { text: 'Therefore, when the sky-worshippers reached the small gods', correct: false, feedback: '"caelicolae" means "heaven-dwellers" (those who dwell in the sky), referring to the gods themselves, not worshippers. "penates" here means household/home, not just the household gods.' },
                { text: 'Therefore, when the heaven-dwellers had arrived at the small household', correct: false, feedback: '"tetigere" is syncopated perfect (= tetigerunt), meaning "they arrived/touched", not pluperfect "they had arrived".' },
                { text: 'Therefore, when those from heaven were reaching the small gods', correct: false, feedback: '"tetigere" is perfect tense ("arrived"), not imperfect ("were reaching"). Also, "penates" here refers to the household, not just the gods.' }
            ],
            correctFeedback: 'Correct! "caelicolae" (heaven-dwellers) is elevated poetic diction for gods. "tetigere" is a syncopated perfect. "penates" can mean household gods or, by extension, the household itself.'
        },
        {
            type: 'translation',
            latin: 'summissoque humiles intrarunt vertice postes',
            question: 'Which translation is correct?',
            options: [
                { text: 'and entered the low doorposts with bowed heads', correct: true },
                { text: 'and they entered humbly through the low doorposts', correct: false, feedback: '"humiles" describes the doorposts, not how they entered. "summisso vertice" (with bowed head) describes the gods stooping.' },
                { text: 'and they submitted to enter through the low doorposts', correct: false, feedback: '"summisso vertice" is an ablative absolute meaning "with head bowed/lowered", describing physical stooping, not submission.' },
                { text: 'and entered the humble doorposts, bowing their heads', correct: false, feedback: '"summisso vertice" (with bowed head) is an ablative absolute showing simultaneous action — they entered WITH heads bowed, not as a separate action.' }
            ],
            correctFeedback: 'Correct! "summisso vertice" (with bowed head) is an ablative absolute showing the gods had to stoop to enter — a vivid physical detail showing divine beings literally lowering themselves to enter the humble cottage.'
        },
        {
            type: 'translation',
            latin: 'membra senex posito iussit relevare sedili',
            question: 'Which translation is correct?',
            options: [
                { text: 'the old man ordered them to rest their limbs on a couch set out for them', correct: true },
                { text: 'the old man ordered them to lift their limbs onto the couch', correct: false, feedback: '"relevare" means "to relieve/rest/relax", not just "to lift". The idea is that they should relax their tired limbs.' },
                { text: 'the old man, having placed the couch, ordered them to rest', correct: false, feedback: '"posito sedili" (with the couch having been placed) is an ablative absolute describing the couch, not the old man\'s action.' },
                { text: 'the old man ordered the limbs to rest on the placed seat', correct: false, feedback: 'The implied object of "iussit" is the guests (them), not "membra". He ordered THEM to rest their limbs.' }
            ],
            correctFeedback: 'Correct! "senex" (the old man) is Philemon. "posito sedili" is an ablative absolute — "with the couch set out". He immediately attends to their comfort after their journey.'
        },
        {
            type: 'translation',
            latin: 'cui superiniecit textum rude sedula Baucis',
            question: 'Which translation is correct?',
            options: [
                { text: 'over which the busy Baucis placed a rough woven cloth', correct: true },
                { text: 'which the attentive Baucis threw rudely over', correct: false, feedback: '"rude" is an adjective meaning "rough/coarse", describing the textile, not an adverb modifying "threw". "textum rude" = a rough/coarse woven cloth.' },
                { text: 'to which the busy Baucis added a rough textile', correct: false, feedback: '"cui" with "superiniecit" means "over which she placed" (super = over), not "to which she added".' },
                { text: 'over which Baucis, sitting, placed a rough textile', correct: false, feedback: '"sedula" means "busy/attentive/diligent", not "sitting" (that would be "sedens"). It describes Baucis\'s industrious character.' }
            ],
            correctFeedback: 'Correct! "sedula" (busy/diligent) captures Baucis\'s character — she IS busy, that\'s her nature as a hostess. "textum rude" is their humble cloth covering for the couch.'
        },
        {
            type: 'translation',
            latin: 'inde foco tepidum cinerem dimovit',
            question: 'Which translation is correct?',
            options: [
                { text: 'then she separated the warm ash in the hearth', correct: true },
                { text: 'then from the hearth she moved the warm ashes', correct: false, feedback: '"dimovit" means "separated/pushed apart" rather than just "moved". She\'s separating the ash to find the embers beneath.' },
                { text: 'then in the hearth she removed the warm cinders', correct: false, feedback: '"dimovit" doesn\'t mean "removed" — she\'s parting/separating the ash to expose the live coals, not taking ash away.' },
                { text: 'from there she moved the warm ash to the hearth', correct: false, feedback: '"foco" is locative/ablative — "in the hearth", where the ash already is. She\'s working within the hearth, not moving ash to it.' }
            ],
            correctFeedback: 'Correct! "inde" (then/next) propels the narrative. "dimovit" means she parted/separated the warm ash to find the live embers beneath — the first step in building up the cooking fire.'
        },
        {
            type: 'translation',
            latin: 'ignes suscitat hesternos foliisque et cortice sicco nutrit',
            question: 'Which translation is correct?',
            options: [
                { text: 'she rouses yesterday\'s fires and feeds them with leaves and dry bark', correct: true },
                { text: 'she rouses the old fires and feeds them leaves and dry bark', correct: false, feedback: '"hesternos" specifically means "yesterday\'s", not just "old". This detail shows the fire was carefully banked overnight.' },
                { text: 'she awakens yesterday\'s flames and nourishes them with leaves and with dry bark', correct: false, feedback: 'While "suscitat" can mean awaken and "nutrit" nourish, "rouses" and "feeds" better capture the practical fire-tending context.' },
                { text: 'she raises up fires from yesterday and feeds them with leaves and dry bark', correct: false, feedback: '"suscitat" means "rouses/stirs up", not "raises up from". The fires have been sleeping in the embers overnight.' }
            ],
            correctFeedback: 'Correct! "hesternos" (yesterday\'s) is a lovely domestic detail — in a world without matches, you don\'t let your fire die completely. The embers have been kept alive overnight.'
        },
        {
            type: 'translation',
            latin: 'ad flammas anima producit anili',
            question: 'Which translation is correct?',
            options: [
                { text: 'she brings forth flames with an old woman\'s breath', correct: true },
                { text: 'she brings forth flames with her elderly soul', correct: false, feedback: '"anima" here means "breath", not "soul" (though it can mean both). She\'s literally blowing on the fire to make it burn.' },
                { text: 'to flames she brings forth the old woman\'s spirit', correct: false, feedback: '"ad flammas" goes with "producit" — "brings forth to flames" = makes the fire flame up. "anima anili" is ablative of means.' },
                { text: 'she produces flames like an old woman', correct: false, feedback: '"anima anili" is "with an old woman\'s breath" (ablative of means), not a comparison "like an old woman".' }
            ],
            correctFeedback: 'Correct! "anima anili" (with an old woman\'s breath) shows the paronomasia (sound-play) between "anima" and "anili". There\'s something tender about this image of patient, gentle breath coaxing flames.'
        },
        {
            type: 'translation',
            latin: 'multifidasque faces ramaliaque arida tecto detulit',
            question: 'Which translation is correct?',
            options: [
                { text: 'and she brought down split torches and dry sticks from the roof', correct: true },
                { text: 'and she carried many divided torches and dry branches from the house', correct: false, feedback: '"multifidas" is a compound adjective meaning "split into many pieces", not "many divided". "tecto" means "from the roof", not "from the house".' },
                { text: 'and she took down the split torches and dry branches from the covering', correct: false, feedback: '"tecto" means "from the roof" — kindling was often stored in the rafters. "faces" are torches/kindling sticks.' },
                { text: 'and she brought down much-split firewood and dry twigs to the roof', correct: false, feedback: '"tecto" with "detulit" means "FROM the roof" (ablative of separation), not "to the roof".' }
            ],
            correctFeedback: 'Correct! "multifidas" (split into many pieces) describes carefully prepared kindling — split wood catches fire more easily. Kindling stored in the roof rafters would be dry and ready.'
        },
        {
            type: 'translation',
            latin: 'quodque suus coniunx riguo collegerat horto truncat holus foliis',
            question: 'Which translation is correct?',
            options: [
                { text: 'and she strips of its leaves the cabbage which her husband had gathered from the well-watered garden', correct: true },
                { text: 'and which her husband had collected from the wet garden, she strips the cabbage of leaves', correct: false, feedback: 'Word order: "quodque" introduces the relative clause, and "truncat holus foliis" is the main clause. The translation should flow naturally.' },
                { text: 'and she cuts the cabbage which her husband gathered in the irrigated garden with leaves', correct: false, feedback: '"truncat... foliis" means "strips of leaves" (ablative of separation), not "cuts with leaves". "riguo" means well-watered/irrigated.' },
                { text: 'and she trims from the cabbage which her husband collected from the wet garden its leaves', correct: false, feedback: '"truncat... foliis" means "strips OF its leaves" — she removes the outer leaves to prepare the vegetable.' }
            ],
            correctFeedback: 'Correct! "coniunx" (spouse/husband) emphasizes their partnership. "riguo horto" (well-watered garden) shows they maintain a productive plot. Philemon gathered it, Baucis prepares it — teamwork.'
        },
        {
            type: 'translation',
            latin: 'furca levat ille bicorni sordida terga suis',
            question: 'Which translation is correct?',
            options: [
                { text: 'he lifts with a two-pronged fork the sooty back of a pig', correct: true },
                { text: 'he lifts with a two-horned fork the dirty back of a pig', correct: false, feedback: '"bicorni" means "two-pronged" (bi + cornu), which is more idiomatic for a fork than "two-horned". "sordida" means sooty/grimy from smoke.' },
                { text: 'with a forked stick he lifts the filthy pig\'s back', correct: false, feedback: '"furca bicorni" is "a two-pronged fork" — a specific implement. "sordida" here means smoke-blackened from hanging over the fire.' },
                { text: 'he raises with two-pronged fork the dirty backs of pigs', correct: false, feedback: '"terga" is plural (backs) but refers to one cut of bacon/pork. "suis" (of a pig) is singular genitive.' }
            ],
            correctFeedback: 'Correct! "ille" (he = Philemon) now takes over the action. "sordida terga" — the bacon has been hanging in the smoke, getting blackened. It\'s real, smoke-cured peasant food.'
        },
        {
            type: 'translation',
            latin: 'servatoque diu resecat de tergore partem exiguam',
            question: 'Which translation is correct?',
            options: [
                { text: 'and he cuts off a small portion from the long-preserved back', correct: true },
                { text: 'and having preserved it for a long time, he cuts off a small part from the back', correct: false, feedback: '"servato diu" (long-preserved) describes the meat, not Philemon\'s action. It\'s an ablative absolute modifying "tergore".' },
                { text: 'and he cuts a small portion for a long time from the preserved back', correct: false, feedback: '"diu" (for a long time) goes with "servato" (preserved), not with "resecat" (cuts). The meat has been preserved long, not cut long.' },
                { text: 'and he preserved and cuts a small part from the back for a long time', correct: false, feedback: '"servato" is a perfect participle (already preserved), and "diu" describes how long it was preserved, not how long he cuts.' }
            ],
            correctFeedback: 'Correct! "servato diu" (long-preserved) emphasizes how precious this bacon is — carefully saved, probably for a special occasion. Now they\'re using it for strangers, showing genuine generosity.'
        },
        {
            type: 'translation',
            latin: 'sectamque domat ferventibus undis',
            question: 'Which translation is correct?',
            options: [
                { text: 'and softens the cut piece in boiling waters', correct: true },
                { text: 'and he tames the cut piece with boiling waves', correct: false, feedback: '"domat" here means "softens/tenderizes" (cooking context), not literally "tames". "undis" is poetic for water, not literal waves.' },
                { text: 'and she subdues the cut piece in the boiling water', correct: false, feedback: 'The subject is still Philemon (ille from earlier). Also, "domat" in cooking means "softens", not "subdues".' },
                { text: 'and the cut piece is softened by the boiling waters', correct: false, feedback: '"domat" is active voice — "he softens", not passive "is softened". Philemon is still the active agent.' }
            ],
            correctFeedback: 'Correct! "domat" (literally "tames") here means "softens" in cooking. "ferventibus undis" uses "undis" (usually "waves") poetically for water — elevating humble cooking with dignified language.'
        },
        {
            type: 'style',
            latin: 'caelicolae',
            question: 'What is the effect of using "caelicolae" (heaven-dwellers) for the gods?',
            options: [
                { text: 'It\'s elevated, epic diction that creates ironic contrast with the humble setting they enter', correct: true },
                { text: 'It\'s a common, everyday word for gods with no special effect', correct: false, feedback: '"caelicolae" is a poetic compound word (caelum + colere = heaven + dwell), elevated diction typically found in epic poetry.' },
                { text: 'It emphasizes that the gods prefer living in the sky to earth', correct: false, feedback: 'The word identifies them as divine beings (heaven-dwellers), but the story shows them visiting earth. The irony is their elevated status entering a humble cottage.' },
                { text: 'It shows the gods were unwelcome on earth', correct: false, feedback: 'The word identifies their divine nature, creating irony when these lofty beings enter a peasant\'s cottage — grandeur meeting humility.' }
            ],
            correctFeedback: 'Correct! "caelicolae" is grand, epic vocabulary. Using such elevated diction for gods who are stooping to enter a tiny cottage creates effective ironic contrast.'
        },
        {
            type: 'style',
            latin: 'summisso vertice',
            question: 'What does the ablative absolute "summisso vertice" (with bowed head) suggest about the gods\' visit?',
            options: [
                { text: 'The image of gods stooping symbolizes their willingness to meet mortals on their level', correct: true },
                { text: 'The gods were injured and couldn\'t hold their heads up', correct: false, feedback: 'The stooping is because the doorway is low ("humiles postes"), not injury. It\'s a physical necessity that carries symbolic meaning.' },
                { text: 'The gods were showing shame at being rejected elsewhere', correct: false, feedback: 'The stooping is practical (the door is low) but also symbolic of divine condescension — gods literally lowering themselves.' },
                { text: 'It\'s just physical description with no deeper meaning', correct: false, feedback: 'Every detail in Ovid carries weight. Gods bowing to enter a cottage powerfully symbolizes divine humility and their willingness to test mortals fairly.' }
            ],
            correctFeedback: 'Correct! Gods bowing to enter a peasant\'s cottage is a vivid physical detail with symbolic resonance — divine beings literally lowering themselves to meet mortals where they are.'
        },
        {
            type: 'style',
            latin: 'sedula Baucis',
            question: 'What does the epithet "sedula" (busy/diligent) tell us about Baucis?',
            options: [
                { text: 'It characterizes her as inherently industrious — being busy is her fundamental nature, not just her action', correct: true },
                { text: 'It shows she was exhausted from too much work', correct: false, feedback: '"sedula" is positive — diligent, attentive, industrious. It\'s a compliment to her character, not a complaint about overwork.' },
                { text: 'It\'s just a filler word to complete the line', correct: false, feedback: 'Epithets in Ovid are never random. "sedula" captures Baucis\'s essence — her diligent hospitality defines who she is.' },
                { text: 'It indicates she was worried about the strangers', correct: false, feedback: '"sedula" means busy/attentive, not anxious. She\'s actively caring for her guests, not worrying about them.' }
            ],
            correctFeedback: 'Correct! "sedula" is a transferred epithet — really her actions are busy, but by applying it to her, Ovid suggests busyness IS her character. She is a hospitable, industrious person.'
        },
        {
            type: 'style',
            latin: 'hesternos',
            question: 'What does "hesternos" (yesterday\'s) add to the description of the fire?',
            options: [
                { text: 'It provides realistic domestic detail showing careful household management and daily routine', correct: true },
                { text: 'It suggests the couple was too lazy to make a new fire', correct: false, feedback: 'Banking a fire overnight shows skill, not laziness. In a world without matches, you keep embers alive — it\'s practical wisdom.' },
                { text: 'It indicates the fire had completely gone out', correct: false, feedback: 'She "rouses" (suscitat) yesterday\'s fires — they\'re not dead, just banked. The embers have been kept alive overnight.' },
                { text: 'It has no particular significance', correct: false, feedback: 'This detail establishes authenticity and routine. Every day begins with coaxing yesterday\'s embers back to life — a touching domestic rhythm.' }
            ],
            correctFeedback: 'Correct! "hesternos ignes" (yesterday\'s fires) shows practical, careful household management. The fire is banked overnight and rekindled each morning — a vivid detail of rural life.'
        },
        {
            type: 'style',
            latin: 'anima anili',
            question: 'What is the effect of "anima anili" (with an old woman\'s breath)?',
            options: [
                { text: 'The similar sounds (paronomasia) create phonetic harmony while the image tenderly depicts her patient effort', correct: true },
                { text: 'It shows Baucis was out of breath from working too hard', correct: false, feedback: 'She\'s blowing on the fire to make it flame — a gentle, patient action. The phrase emphasizes tenderness, not exhaustion.' },
                { text: 'It emphasizes that she was nearly dying', correct: false, feedback: '"anima" here means "breath", not "life/soul". She\'s breathing on the embers to fan them — a peaceful domestic action.' },
                { text: 'The repetition is accidental and clumsy', correct: false, feedback: 'The sound-play between "anima" and "anili" is deliberate paronomasia — Ovid loved such effects. It creates pleasing phonetic harmony.' }
            ],
            correctFeedback: 'Correct! "anima anili" shows paronomasia — words with similar sounds placed together. The effect is both musical and touching: an old woman\'s gentle breath nurturing flames to life.'
        },
        {
            type: 'style',
            latin: 'coniunx',
            question: 'What is significant about calling Philemon "suus coniunx" (her husband)?',
            options: [
                { text: 'It emphasizes their marital partnership — literally "yoked together" — showing them working as a team', correct: true },
                { text: 'It\'s just a normal way to refer to a spouse with no special meaning', correct: false, feedback: '"coniunx" literally means "yoked together" (con + iugum). The word emphasizes partnership, like oxen working in harness.' },
                { text: 'It shows Baucis owned Philemon', correct: false, feedback: '"suus" (her) shows relationship, not ownership. "coniunx" emphasizes their bond as partners.' },
                { text: 'It indicates they had an arranged marriage', correct: false, feedback: 'The word emphasizes their current partnership, not how their marriage began. They work together perfectly.' }
            ],
            correctFeedback: 'Correct! "coniunx" (from con + iugum = yoked together) emphasizes partnership. After a lifetime together, they work in perfect coordination — she prepares vegetables, he fetches meat.'
        },
        {
            type: 'style',
            latin: 'servato diu',
            question: 'What does "servato diu" (long-preserved) reveal about the bacon?',
            options: [
                { text: 'It emphasizes the value of this carefully saved food — using it for strangers shows exceptional generosity', correct: true },
                { text: 'It suggests the bacon was rotten from being kept too long', correct: false, feedback: 'The bacon was properly preserved (smoked), not rotten. "servato" shows careful preservation, a positive detail.' },
                { text: 'It indicates they had forgotten about it', correct: false, feedback: 'They haven\'t forgotten it — they\'re deliberately using their stored provisions to honor their guests.' },
                { text: 'It has no particular significance', correct: false, feedback: 'This detail highlights their generosity — they\'re using precious, carefully saved food for unknown strangers.' }
            ],
            correctFeedback: 'Correct! "servato diu" shows this bacon was precious — saved for a special occasion. By using it for strangers, Baucis and Philemon demonstrate their exceptional pietas and generosity.'
        },
        {
            type: 'style',
            latin: 'ferventibus undis',
            question: 'What is notable about using "undis" (waves) for boiling water?',
            options: [
                { text: 'It\'s metonymy — using poetic language for water elevates humble cooking to dignified description', correct: true },
                { text: 'It shows the water was literally making waves in the pot', correct: false, feedback: '"undis" (usually = waves/sea) is used poetically for water in general. It elevates the language without changing the meaning.' },
                { text: 'It indicates they were cooking near the sea', correct: false, feedback: 'They\'re not near the sea — "undis" is a poetic word for water, giving dignity to simple domestic activity.' },
                { text: 'It\'s a translation error for "aquis"', correct: false, feedback: 'It\'s deliberate poetic diction. Ovid uses elevated vocabulary to give dignity to peasant cooking.' }
            ],
            correctFeedback: 'Correct! "undis" (usually = waves/sea) used for cooking water is metonymy — poetic substitution. It elevates the humble domestic scene, lending dignity to peasant food preparation.'
        },
        {
            type: 'comprehension',
            latin: 'membra senex posito iussit relevare sedili',
            question: 'What does Philemon\'s first action tell us about his priorities?',
            options: [
                { text: 'He immediately attends to his guests\' comfort, offering them a place to rest after their journey', correct: true },
                { text: 'He ordered the guests to help move furniture', correct: false, feedback: 'He\'s offering them rest, not asking them to work. "iussit relevare membra" = he told them to rest their limbs.' },
                { text: 'He sat down himself before dealing with guests', correct: false, feedback: '"senex iussit" = the old man ordered (them). He\'s serving his guests, not attending to himself.' },
                { text: 'He was checking whether they had weapons', correct: false, feedback: 'There\'s no suspicion here. He immediately offers hospitality — a place to rest their weary limbs.' }
            ],
            correctFeedback: 'Correct! Philemon\'s first thought is his guests\' comfort. Before thinking about food or anything else, he offers them a seat to rest after their travels. This is excellent hospitality.'
        },
        {
            type: 'comprehension',
            latin: 'inde foco tepidum cinerem dimovit et ignes suscitat hesternos',
            question: 'What does this passage tell us about fire management in ancient households?',
            options: [
                { text: 'Fires were carefully banked overnight and rekindled each morning — an essential daily routine', correct: true },
                { text: 'People let their fires go completely out every night', correct: false, feedback: 'The fire has "warm ash" (tepidum cinerem) and "yesterday\'s fires" (ignes hesternos) — the embers were kept alive overnight.' },
                { text: 'Making fire was easy and quick in the ancient world', correct: false, feedback: 'The detailed description of rekindling shows it required effort. Without matches, you kept embers alive rather than starting fresh.' },
                { text: 'Only wealthy households had hearths', correct: false, feedback: 'Even this humble cottage has a hearth (focus). Fire was essential for cooking and warmth in all households.' }
            ],
            correctFeedback: 'Correct! In a world without matches, keeping embers alive overnight was essential. Baucis\'s morning routine of parting the ash and feeding the embers was how every day began.'
        },
        {
            type: 'comprehension',
            latin: 'quodque suus coniunx riguo collegerat horto truncat holus foliis',
            question: 'What does this detail show about the couple\'s self-sufficiency?',
            options: [
                { text: 'They grow their own vegetables in a well-maintained garden — they don\'t need to buy food', correct: true },
                { text: 'They stole vegetables from a neighbor\'s garden', correct: false, feedback: '"suus coniunx" (her husband) collected them from "riguo horto" — their own well-watered garden. It\'s theirs.' },
                { text: 'They only ate vegetables and no meat', correct: false, feedback: 'They also have preserved bacon (the "sordida terga suis"). They have both vegetables and meat, though limited.' },
                { text: 'Philemon was a professional gardener', correct: false, feedback: 'The garden is their own small plot for household use. There\'s no mention of professional gardening.' }
            ],
            correctFeedback: 'Correct! "riguo horto" (well-watered garden) shows they maintain a productive vegetable patch. Combined with their preserved bacon, they have modest but genuine provisions to share.'
        },
        {
            type: 'comprehension',
            latin: 'sordida terga suis nigro pendentia tigno servatoque diu',
            question: 'What picture emerges of the couple\'s food storage?',
            options: [
                { text: 'They have smoke-cured bacon hanging from the rafters — peasant food preserved by traditional methods', correct: true },
                { text: 'Their meat was rotten and inedible', correct: false, feedback: '"sordida" means sooty/smoke-blackened from proper curing, not rotten. This is how bacon was preserved.' },
                { text: 'They had a modern refrigerator', correct: false, feedback: 'Food was preserved by smoking and hanging in ancient times. The "nigro tigno" (black beam) is darkened from smoke.' },
                { text: 'They kept live pigs in their cottage', correct: false, feedback: '"terga suis" is already butchered and preserved bacon, not a live pig. It\'s been hanging and smoking.' }
            ],
            correctFeedback: 'Correct! The smoke-blackened bacon hanging from the rafters is authentic peasant food preservation. "servato diu" shows it\'s been carefully kept — precious provisions now shared with strangers.'
        },
        {
            type: 'comprehension',
            latin: 'The whole passage (lines 12-25)',
            question: 'What overall impression does this passage create of Baucis and Philemon\'s hospitality?',
            options: [
                { text: 'They are generous, efficient, and work together as a team despite their poverty', correct: true },
                { text: 'They are reluctant hosts who resent the intrusion', correct: false, feedback: 'There\'s no resentment — they spring into action immediately, working efficiently to provide for their guests.' },
                { text: 'They are wealthy hosts with abundant provisions', correct: false, feedback: 'The details emphasize poverty: rough cloth, preserved bacon, home-grown vegetables. But their generosity is abundant.' },
                { text: 'They are confused about how to treat guests', correct: false, feedback: 'They\'re remarkably efficient — Philemon offers rest while Baucis prepares food. They know exactly what they\'re doing.' }
            ],
            correctFeedback: 'Correct! Every detail shows them working as a coordinated team, giving their best despite limited means. Philemon offers rest, Baucis works the fire, then they prepare food together.'
        }
    ]
};
