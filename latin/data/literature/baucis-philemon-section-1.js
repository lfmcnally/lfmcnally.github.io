// Baucis and Philemon Section 1: Lines 1-11
// Jupiter and Mercury Arrive

const baucisPhilemonSection1 = {
    section: 1,
    title: 'Jupiter and Mercury Arrive',
    lines: '1-11',
    latinText: 'Iuppiter huc specie mortali cumque parente venit Atlantiades positis caducifer alis. mille domos adiere locum requiemque petentes: mille domos clausere serae. tamen una recepit, parva quidem stipulis et canna tecta palustri, sed pia Baucis anus parilique aetate Philemon illa sunt annis iuncti iuvenalibus, illa consenuere casa paupertatemque fatendo effecere levem nec iniqua mente ferendo. nec refert, dominos illic famulosne requiras: tota domus duo sunt, idem parentque iubentque.',

    questions: [
        {
            type: 'translation',
            latin: 'Iuppiter huc specie mortali venit',
            question: 'Which translation is correct?',
            options: [
                { text: 'Jupiter came here in human form', correct: true },
                { text: 'Jupiter came here with a mortal appearance', correct: false, feedback: '"specie mortali" is ablative of manner/description — "in human/mortal form" captures this better than the more literal "with a mortal appearance".' },
                { text: 'Jupiter was coming here in human form', correct: false, feedback: '"venit" is perfect tense ("came"), not imperfect ("was coming").' },
                { text: 'Jupiter had come here in human form', correct: false, feedback: '"venit" is perfect tense ("came"), not pluperfect ("had come").' }
            ],
            correctFeedback: 'Correct! "venit" is perfect tense and "specie mortali" is an ablative describing the manner or form in which Jupiter appeared — disguised as a mortal.'
        },
        {
            type: 'translation',
            latin: 'cumque parente venit Atlantiades positis caducifer alis',
            question: 'Which translation is correct?',
            options: [
                { text: 'and with his father came the wand-bearing descendant of Atlas, having set aside his wings', correct: true },
                { text: 'and with his father came Atlas, the wand-bearing god, with his wings set aside', correct: false, feedback: '"Atlantiades" is a patronymic meaning "descendant of Atlas" (referring to Mercury), not Atlas himself.' },
                { text: 'and with his parent came the wand-bearer of Atlas, his wings having been set aside', correct: false, feedback: '"Atlantiades" means "descendant of Atlas" not "wand-bearer of Atlas". Also, "parente" refers to Jupiter as Mercury\'s father.' },
                { text: 'and with his father the wand-bearing descendant of Atlas came, setting aside his wings', correct: false, feedback: '"positis alis" is an ablative absolute with perfect participle — "having set aside" (completed action), not present "setting aside".' }
            ],
            correctFeedback: 'Correct! "Atlantiades" is a patronymic identifying Mercury as the descendant of Atlas. "caducifer" (wand-bearing) is his epithet, and "positis alis" is an ablative absolute showing he had removed his wings to appear mortal.'
        },
        {
            type: 'translation',
            latin: 'mille domos adiere locum requiemque petentes',
            question: 'Which translation is correct?',
            options: [
                { text: 'They approached a thousand houses, seeking a place and rest', correct: true },
                { text: 'They approached a thousand houses to seek a place of rest', correct: false, feedback: '"locum requiemque" are two separate objects joined by "-que" — "a place AND rest", not "a place of rest".' },
                { text: 'They were approaching a thousand houses, seeking a place and rest', correct: false, feedback: '"adiere" is syncopated perfect (= adiverunt), meaning "they approached", not imperfect "were approaching".' },
                { text: 'A thousand houses they had approached seeking a place and rest', correct: false, feedback: '"adiere" is perfect tense ("they approached"), not pluperfect ("they had approached").' }
            ],
            correctFeedback: 'Correct! "adiere" is a syncopated perfect (poetic form of "adiverunt"). "petentes" is a present participle expressing purpose — "seeking". The gods visited many homes looking for hospitality.'
        },
        {
            type: 'translation',
            latin: 'mille domos clausere serae',
            question: 'Which translation is correct?',
            options: [
                { text: 'Bars shut a thousand houses', correct: true },
                { text: 'A thousand houses shut their bars', correct: false, feedback: 'The subject is "serae" (bars), not "domos" (houses). The bars are personified as the agents doing the shutting.' },
                { text: 'Bars were shutting a thousand houses', correct: false, feedback: '"clausere" is syncopated perfect (= clauserunt), meaning "shut", not imperfect "were shutting".' },
                { text: 'A thousand bars shut the houses', correct: false, feedback: '"mille" goes with "domos" (a thousand houses), not with "serae" (bars). The bars shut the many houses.' }
            ],
            correctFeedback: 'Correct! "serae" (bars) is the grammatical subject, creating a powerful image where the doors themselves become hostile agents. "clausere" is syncopated perfect for "clauserunt".'
        },
        {
            type: 'translation',
            latin: 'tamen una recepit, parva quidem',
            question: 'Which translation is correct?',
            options: [
                { text: 'However, one received them, a small one, it is true', correct: true },
                { text: 'Nevertheless, one small house received them', correct: false, feedback: '"quidem" means "indeed/it is true" and should be translated — it\'s a concessive acknowledging the house\'s smallness.' },
                { text: 'However, one received them, although small', correct: false, feedback: '"parva quidem" is better rendered as "small, it is true" — quidem emphasizes acknowledgment rather than creating a concessive clause.' },
                { text: 'Yet one small one had received them', correct: false, feedback: '"recepit" is perfect tense ("received"), not pluperfect ("had received").' }
            ],
            correctFeedback: 'Correct! "tamen" marks the crucial turning point in the narrative. "quidem" ("it is true/indeed") acknowledges the cottage\'s modest size before emphasizing the hosts\' virtue.'
        },
        {
            type: 'translation',
            latin: 'sed pia Baucis anus parilique aetate Philemon',
            question: 'Which translation is correct?',
            options: [
                { text: 'but the dutiful old woman Baucis, and Philemon, equal in age', correct: true },
                { text: 'but the pious old Baucis and Philemon of the same age', correct: false, feedback: '"anus" is a noun meaning "old woman", not an adjective. Baucis is described as "pia anus" (dutiful old woman).' },
                { text: 'but Baucis, a pious old woman, and Philemon, similar in age', correct: false, feedback: '"parili" means "equal" not just "similar" — they are exactly the same age, emphasizing their perfect match.' },
                { text: 'but the dutiful grandmother Baucis and Philemon of equal age', correct: false, feedback: '"anus" means "old woman", not specifically "grandmother".' }
            ],
            correctFeedback: 'Correct! "pia" is a key word — it means dutiful/pious, encompassing duty to gods, family, and guests. "parili aetate" (equal in age) emphasizes their lifelong partnership as childhood sweethearts.'
        },
        {
            type: 'translation',
            latin: 'illa sunt annis iuncti iuvenalibus, illa consenuere casa',
            question: 'Which translation is correct?',
            options: [
                { text: 'in that cottage they were united in their younger years, in that cottage they grew old together', correct: true },
                { text: 'in those years they were joined in youth, in that cottage they grew old', correct: false, feedback: '"illa" refers to "casa" (cottage) both times, creating anaphora. "iuvenalibus annis" is an ablative of time — "in their younger years".' },
                { text: 'they were united in that cottage during youthful years, and grew old in the same place', correct: false, feedback: 'The anaphora of "illa... illa" (in that cottage... in that cottage) should be preserved — Ovid deliberately repeats it for emphasis.' },
                { text: 'in that place they were joined as youths, in that place they had grown old', correct: false, feedback: '"consenuere" is perfect tense ("they grew old"), not pluperfect ("they had grown old"). Also, "illa" specifically refers to the cottage.' }
            ],
            correctFeedback: 'Correct! The anaphora of "illa... illa" (in that cottage... in that cottage) emphasizes their rootedness. "consenuere" (syncopated perfect) with its "con-" prefix means "they grew old together" — a love story in one word.'
        },
        {
            type: 'translation',
            latin: 'paupertatemque fatendo effecere levem',
            question: 'Which translation is correct?',
            options: [
                { text: 'and by acknowledging their poverty, they made it light', correct: true },
                { text: 'and by confessing their poverty, they made it light', correct: false, feedback: '"fatendo" means "by acknowledging/admitting" rather than "confessing" which implies guilt. Their poverty is not shameful, just accepted.' },
                { text: 'and acknowledging their poverty made them light', correct: false, feedback: '"levem" agrees with "paupertatem" (poverty), not with them. They made their poverty light, not themselves.' },
                { text: 'and by admitting poverty they had made it light', correct: false, feedback: '"effecere" is perfect tense ("they made"), not pluperfect ("they had made").' }
            ],
            correctFeedback: 'Correct! This reflects Stoic philosophy — by accepting their situation without resentment, they lightened its burden. "fatendo" is a gerund (ablative) expressing means: "by acknowledging".'
        },
        {
            type: 'translation',
            latin: 'nec iniqua mente ferendo',
            question: 'Which translation is correct?',
            options: [
                { text: 'and by bearing it not with a resentful mind', correct: true },
                { text: 'nor by bearing it with an unfair mind', correct: false, feedback: '"nec" here goes with "iniqua mente" — "not with an unfair/resentful mind". The phrase modifies how they bore their poverty.' },
                { text: 'and not bearing it with an unjust mind', correct: false, feedback: '"ferendo" is a gerund meaning "by bearing" — they DID bear their poverty, just not with resentment.' },
                { text: 'and by carrying it without an unjust mind', correct: false, feedback: '"iniqua" is better translated as "resentful" or "discontented" here — describing their mental state toward their own poverty.' }
            ],
            correctFeedback: 'Correct! "nec iniqua mente" means "not with a resentful/discontented mind". Combined with "fatendo" above, this shows their Stoic acceptance — hardship only hurts if you fight it.'
        },
        {
            type: 'translation',
            latin: 'nec refert, dominos illic famulosne requiras',
            question: 'Which translation is correct?',
            options: [
                { text: 'and it does not matter whether you look for masters or slaves there', correct: true },
                { text: 'and it does not refer to whether you seek masters or slaves there', correct: false, feedback: '"refert" is an impersonal verb meaning "it matters/it makes a difference", not "it refers to".' },
                { text: 'nor does it matter to seek masters or slaves there', correct: false, feedback: '"dominos... famulosne requiras" is an indirect question — "whether you seek... or...", not an infinitive construction.' },
                { text: 'and it did not matter whether you were looking for masters or slaves there', correct: false, feedback: '"refert" is present tense ("it does not matter"), and "requiras" is subjunctive in an indirect question, not imperfect.' }
            ],
            correctFeedback: 'Correct! "refert" is an impersonal verb (it matters). The indirect question "dominos... famulosne requiras" sets up the paradox that follows — in this house, there\'s no distinction between master and servant.'
        },
        {
            type: 'translation',
            latin: 'tota domus duo sunt, idem parentque iubentque',
            question: 'Which translation is correct?',
            options: [
                { text: 'the whole house consists of two, they both obey and command', correct: true },
                { text: 'two are the whole house, the same people obey and command', correct: false, feedback: 'While grammatically possible, "idem" here emphasizes "the same people" do BOTH actions — "they both obey and command" captures this paradox better.' },
                { text: 'the entire household is two people, who obey and command alike', correct: false, feedback: '"idem" specifically means "the same" — emphasizing that the SAME two people do both obeying and commanding, not that they do it "alike".' },
                { text: 'the whole house they two are, they obey the same and they command the same', correct: false, feedback: '"idem" goes with "they" (the two people), not with what is obeyed/commanded. The point is the same people both obey AND command.' }
            ],
            correctFeedback: 'Correct! "tota domus duo sunt" is gentle hyperbole — the "whole house" is just two people. "idem parentque iubentque" creates paradox: they both obey AND command, dissolving the usual hierarchy into equal partnership.'
        },
        {
            type: 'style',
            latin: 'Iuppiter',
            question: 'What is the effect of placing "Iuppiter" as the first word?',
            options: [
                { text: 'It immediately establishes divine presence and signals the importance of the theoxeny (divine visitation) theme', correct: true },
                { text: 'It shows the story is set on Mount Olympus', correct: false, feedback: 'The story is set in Phrygia on earth, not Olympus. The emphatic placement signals divine presence visiting the mortal world in disguise.' },
                { text: 'It indicates Jupiter is angry at the beginning of the story', correct: false, feedback: 'Jupiter\'s mood isn\'t indicated — the emphatic placement simply announces that the king of the gods is involved, signaling this is no ordinary story.' },
                { text: 'It\'s just the grammatical subject with no special effect', correct: false, feedback: 'Opening with the god\'s name is a deliberate choice. Ovid could have started differently but chose to announce divine presence immediately.' }
            ],
            correctFeedback: 'Correct! Putting Jupiter first is like a fanfare — "Pay attention, the king of the gods is involved!" This signals the theoxeny (divine visitation) motif that structures the narrative.'
        },
        {
            type: 'style',
            latin: 'Atlantiades',
            question: 'What is the effect of calling Mercury "Atlantiades" (descendant of Atlas)?',
            options: [
                { text: 'It employs epic naming conventions, elevating the domestic narrative to Homeric register', correct: true },
                { text: 'It reminds readers that Mercury was once a slave of Atlas', correct: false, feedback: 'Mercury was never a slave of Atlas. Atlas was Mercury\'s grandfather through his mother Maia. The patronymic is dignified, not servile.' },
                { text: 'It shows Mercury is less important than Jupiter', correct: false, feedback: 'The elaborate patronymic actually elevates Mercury — calling someone by their divine lineage is a mark of respect and epic style.' },
                { text: 'It\'s the only name Romans knew for Mercury', correct: false, feedback: 'Romans called him Mercury (Mercurius). "Atlantiades" is a poetic Greek-style patronymic used for elevated effect.' }
            ],
            correctFeedback: 'Correct! Using the patronymic "Atlantiades" instead of simply "Mercury" lends epic dignity to the narrative, as if saying "this is proper Homeric stuff, not just a nice story about old people."'
        },
        {
            type: 'style',
            latin: 'positis alis',
            question: 'What does the ablative absolute "positis alis" (having set aside his wings) suggest?',
            options: [
                { text: 'It shows Mercury deliberately removing divine markers to appear mortal — like Clark Kent removing his cape', correct: true },
                { text: 'It suggests Mercury was tired of flying', correct: false, feedback: 'The detail is about disguise, not fatigue. Mercury removes his wings so he won\'t be recognized as a god — they\'re trying to appear as ordinary travellers.' },
                { text: 'It indicates Mercury had lost his wings in a previous adventure', correct: false, feedback: '"positis" (having set aside) implies voluntary, temporary removal, not loss. He\'s concealing his identity, not lacking his divine equipment.' },
                { text: 'It has no particular significance beyond physical description', correct: false, feedback: 'Every detail in Ovid is deliberate. Removing the wings is part of the gods\' disguise — testing mortal hospitality requires appearing mortal.' }
            ],
            correctFeedback: 'Correct! The ablative absolute economically conveys Mercury\'s transformation. Like "specie mortali" for Jupiter, this shows the gods deliberately going incognito to test human hospitality.'
        },
        {
            type: 'style',
            latin: 'mille domos... mille domos',
            question: 'What is the effect of repeating "mille domos" (a thousand houses)?',
            options: [
                { text: 'The anaphora emphasizes the comprehensive rejection — they approached a thousand houses, and a thousand houses refused them', correct: true },
                { text: 'It shows there were exactly two thousand houses in the area', correct: false, feedback: '"mille" (a thousand) is used twice to refer to the SAME houses, not different ones. First they approached them, then those same houses refused them.' },
                { text: 'It\'s accidental repetition with no literary purpose', correct: false, feedback: 'This is deliberate anaphora. The repetition hammers home the scale of rejection — every single house said no.' },
                { text: 'It creates confusion about how many houses there were', correct: false, feedback: 'The repetition creates emphasis, not confusion. The same thousand houses appear twice: first being approached, then rejecting.' }
            ],
            correctFeedback: 'Correct! The anaphora is powerful: a thousand houses approached, a thousand houses refused. The repetition makes the rejection feel absolute and crushing — making the one house that did welcome them all the more remarkable.'
        },
        {
            type: 'style',
            latin: 'serae',
            question: 'What is notable about making "serae" (bars) the grammatical subject of "clausere"?',
            options: [
                { text: 'It personifies the doors as actively hostile — the bars themselves are the agents of rejection', correct: true },
                { text: 'It\'s just normal Latin word order with no special effect', correct: false, feedback: 'Ovid could have said "people barred the doors" but chose to make the bars themselves the subject. This personification makes rejection feel more absolute.' },
                { text: 'It shows the bars were magical', correct: false, feedback: 'There\'s no magic here — it\'s a figure of speech. Making the bars the grammatical subject emphasizes the totality of the refusal.' },
                { text: 'It indicates the houses had no human inhabitants', correct: false, feedback: 'The houses are inhabited — people are refusing hospitality. The personified bars represent their inhospitable attitude.' }
            ],
            correctFeedback: 'Correct! "serae clausere" (the bars shut) personifies the doors as hostile agents. It\'s not just that people refused — the buildings themselves seem to reject the gods.'
        },
        {
            type: 'style',
            latin: 'tamen',
            question: 'What is the narrative function of "tamen" (however) in line 4?',
            options: [
                { text: 'It marks the crucial pivot from universal rejection to singular welcome, creating suspense', correct: true },
                { text: 'It\'s just a filler word connecting sentences', correct: false, feedback: '"tamen" is a powerful adversative conjunction. After a thousand rejections, this one word signals "but wait!" — something different is coming.' },
                { text: 'It shows uncertainty about whether anyone welcomed them', correct: false, feedback: '"tamen" doesn\'t express uncertainty — it creates contrast. After the negative (rejection), it introduces the positive exception.' },
                { text: 'It introduces a concession that the cottage was poor', correct: false, feedback: 'That concession comes with "parva quidem" (small, it is true). "tamen" first announces that ONE house did receive them — the turning point.' }
            ],
            correctFeedback: 'Correct! "tamen" is the narrative hinge. We\'ve heard about universal rejection, then this single word pivots the story: "however, one..." Our ears perk up — who broke the pattern?'
        },
        {
            type: 'style',
            latin: 'pia',
            question: 'Why is "pia" (dutiful/pious) such an important epithet for Baucis?',
            options: [
                { text: 'It establishes her moral character immediately — pietas (duty to gods, family, and guests) is what will save her', correct: true },
                { text: 'It just means she prays a lot', correct: false, feedback: '"Pietas" is much broader than prayer — it encompasses duty to gods, family, community, and guests. It\'s the highest Roman virtue and explains why she shows hospitality.' },
                { text: 'It\'s a common name meaning nothing special', correct: false, feedback: '"Pia" is an adjective, not a name. It\'s the feminine form of "pius" — the same word that makes Aeneas "pius Aeneas" in the Aeneid.' },
                { text: 'It shows she was a priestess', correct: false, feedback: 'She\'s not a priestess (though she\'ll become one later). "Pia" describes her character — dutiful, pious, respectful of divine and human obligations.' }
            ],
            correctFeedback: 'Correct! "Pia" is the highest compliment a Roman could give. Baucis\'s pietas — her sense of duty to gods and guests — is exactly why she welcomes the strangers when others refuse, and why she\'ll be saved when others are punished.'
        },
        {
            type: 'style',
            latin: 'illa... illa',
            question: 'What is the effect of the anaphora "illa... illa" (in that cottage... in that cottage)?',
            options: [
                { text: 'It emphasizes the cottage as the complete setting for their shared life — rooted, constant, content', correct: true },
                { text: 'It suggests they owned two cottages', correct: false, feedback: '"illa" (that) refers to the same cottage both times. The repetition emphasizes how central this one place is to their entire lives.' },
                { text: 'It shows they were bored with their home', correct: false, feedback: 'The opposite — the repetition conveys contentment. They married there, grew old there, never wanted to be anywhere else.' },
                { text: 'It\'s careless repetition that should have been edited', correct: false, feedback: 'This is deliberate anaphora. Ovid uses the repetition to drum home their rootedness — that cottage is their whole world.' }
            ],
            correctFeedback: 'Correct! "illa... illa" creates a hypnotic rhythm. In THAT cottage they married, in THAT cottage they grew old. The repetition emphasizes their contentment with one unchanging, humble place.'
        },
        {
            type: 'style',
            latin: 'parentque iubentque',
            question: 'What is the effect of the antithesis "parentque iubentque" (they both obey and command)?',
            options: [
                { text: 'It creates a paradox encapsulating their egalitarian partnership — they are equals who both serve and lead', correct: true },
                { text: 'It shows they constantly argued about who was in charge', correct: false, feedback: 'The paradox is harmonious, not contentious. They don\'t fight over roles — they share them, each deferring to the other.' },
                { text: 'It means they had servants who obeyed them', correct: false, feedback: '"idem" (the same people) makes clear that THEY are both the ones obeying AND the ones commanding — there are no servants.' },
                { text: 'It\'s a contradiction that makes no sense', correct: false, feedback: 'It\'s a meaningful paradox. In a normal household, some command and others obey. Here, the same two people do both — a perfect partnership.' }
            ],
            correctFeedback: 'Correct! This antithetical pairing, linked by "-que... -que", is epigrammatic wit. The paradox captures their relationship perfectly: no hierarchy, just mutual respect. It\'s a pretty good summary of a happy marriage.'
        },
        {
            type: 'comprehension',
            latin: 'Iuppiter huc specie mortali... venit Atlantiades positis caducifer alis',
            question: 'Why do Jupiter and Mercury disguise themselves as mortals?',
            options: [
                { text: 'To test human hospitality anonymously — appearing as strangers in need', correct: true },
                { text: 'Because they had been banned from appearing as gods', correct: false, feedback: 'There\'s no ban mentioned. They disguise themselves deliberately to test whether humans will be hospitable to unknown travellers.' },
                { text: 'Because they were ashamed of their divine status', correct: false, feedback: 'Gods aren\'t ashamed of divinity. The disguise is a test — will people treat ordinary strangers well, or only help those who seem important?' },
                { text: 'Because mortals couldn\'t survive seeing their true forms', correct: false, feedback: 'While true in some myths, that\'s not the point here. They disguise themselves specifically to test hospitality — to see who treats strangers well.' }
            ],
            correctFeedback: 'Correct! This is a theoxeny — a divine visitation in disguise. The gods appear as ordinary travellers to test whether people will show hospitality to those who seem to offer nothing in return.'
        },
        {
            type: 'comprehension',
            latin: 'mille domos adiere... mille domos clausere serae',
            question: 'What does the universal rejection tell us about the community?',
            options: [
                { text: 'They have failed in the sacred duty of hospitality — a serious moral failing', correct: true },
                { text: 'They were all too poor to offer hospitality', correct: false, feedback: 'Poverty isn\'t their excuse — the poorest couple in the area (Baucis and Philemon) still welcomes the strangers. The community\'s rejection is moral failure, not material.' },
                { text: 'They could tell the strangers were gods in disguise', correct: false, feedback: 'They didn\'t recognize the gods — that\'s the point of the disguise. They rejected what appeared to be ordinary travellers.' },
                { text: 'It was illegal to host strangers in that region', correct: false, feedback: 'No such law is mentioned. Hospitality to strangers was a sacred duty in the ancient world — their rejection violates divine law.' }
            ],
            correctFeedback: 'Correct! Hospitality (xenia in Greek, hospitium in Latin) was sacred. Rejecting strangers, especially those seeking shelter, violated divine law. The community\'s failure will have consequences.'
        },
        {
            type: 'comprehension',
            latin: 'paupertatemque fatendo effecere levem nec iniqua mente ferendo',
            question: 'What philosophy does this passage reflect about dealing with hardship?',
            options: [
                { text: 'Stoic acceptance — acknowledging and bearing hardship without resentment makes it lighter', correct: true },
                { text: 'Denial — pretending poverty doesn\'t exist makes it go away', correct: false, feedback: '"fatendo" (by acknowledging) is the opposite of denial. They accept their poverty openly, which paradoxically lightens its burden.' },
                { text: 'Complaint — by talking about poverty they get sympathy', correct: false, feedback: 'The passage emphasizes acceptance without complaint. "nec iniqua mente" (not with a resentful mind) shows they don\'t complain.' },
                { text: 'Ambition — they\'re planning to become rich', correct: false, feedback: 'No ambition is mentioned. Their contentment comes from accepting their situation, not from hoping to change it.' }
            ],
            correctFeedback: 'Correct! This reflects Stoic philosophy: hardship only hurts if you fight it. By acknowledging poverty and bearing it without resentment, Baucis and Philemon transform it into something bearable.'
        },
        {
            type: 'comprehension',
            latin: 'tota domus duo sunt, idem parentque iubentque',
            question: 'What does this statement reveal about Baucis and Philemon\'s household?',
            options: [
                { text: 'They are equal partners with no hierarchy — both serving and being served by each other', correct: true },
                { text: 'They have exactly two servants', correct: false, feedback: '"duo" refers to Baucis and Philemon themselves — they ARE the whole household. There are no servants.' },
                { text: 'They are both slaves in someone else\'s house', correct: false, feedback: 'It\'s THEIR house ("domus"). The point is they are the only two people in it, sharing all roles equally.' },
                { text: 'They take turns being in charge on different days', correct: false, feedback: 'The paradox is more profound — they SIMULTANEOUSLY obey and command, not alternately. It\'s constant mutual respect, not turn-taking.' }
            ],
            correctFeedback: 'Correct! In a typical Roman household, there would be masters and slaves, commanders and obeyers. Here, the same two people are everything — the whole "household" (domus) is just them, sharing roles as equals.'
        }
    ]
};
