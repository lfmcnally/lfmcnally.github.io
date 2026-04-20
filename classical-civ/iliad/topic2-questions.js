// Topic 2 — Books 1 & 3
// Keys are book numbers as strings. Book 1 questions are factual checks on
// the plot of the book; Book 3 will follow once populated.
window.quizData = {
    '1': {
        title: "Book 1",
        questions: [
            {
                question: "How does the Iliad begin? What is its first word and what does it signal?",
                modelAnswer: "The poem opens with an invocation to the Muse: \"Sing, goddess, the wrath of Peleus' son Achilles...\". The first word in Greek is menis, meaning rage or wrath — specifically the destructive anger of Achilles. This establishes the central theme of the whole poem and announces that Book 1 will set up that wrath and its disastrous cost to the Greeks.",
                keyPoints: [
                    "Invocation of the Muse (\"Sing, goddess\")",
                    "First word is menis (wrath/rage)",
                    "The wrath of Peleus' son Achilles",
                    "Theme of the whole poem, not just the book"
                ]
            },
            {
                question: "Who is Chryses and what does he do at the start of Book 1?",
                modelAnswer: "Chryses is a priest of Apollo whose daughter Chryseis has been captured by the Greeks and given to Agamemnon as a war prize. He comes to the Greek camp bringing a rich ransom and the sacred staff and wreath of Apollo, and begs the army to return his daughter. The Greek soldiers are willing, but Agamemnon alone refuses.",
                keyPoints: [
                    "Priest of Apollo",
                    "Father of Chryseis, Agamemnon's war prize",
                    "Brings a ransom and Apollo's staff/wreath",
                    "The Greek army supports him; Agamemnon refuses"
                ]
            },
            {
                question: "How does Agamemnon respond to Chryses, and what are the immediate consequences?",
                modelAnswer: "Agamemnon rejects the ransom harshly, insults the priest, and threatens him not to return, saying he will keep Chryseis in his bed until she grows old. Chryses leaves in silence, walks along the shore, and prays to Apollo for vengeance. Apollo answers by sending a devastating plague on the Greek camp.",
                keyPoints: [
                    "Agamemnon refuses ransom and insults Chryses",
                    "Threatens violence if Chryses returns",
                    "Chryses walks the shore and prays to Apollo",
                    "Apollo answers by sending a plague"
                ]
            },
            {
                question: "Describe Apollo's plague on the Greek camp.",
                modelAnswer: "Apollo descends from Olympus \"like night\" with his silver bow and quiver clanging on his back. He shoots first at the mules and dogs of the army, then at the men. Pyres burn constantly for nine days as the dead pile up. On the tenth day Achilles calls an assembly to deal with the crisis.",
                keyPoints: [
                    "Apollo descends \"like night\" with his silver bow",
                    "Arrows kill mules and dogs first, then men",
                    "Constant burning of funeral pyres",
                    "Plague lasts nine days",
                    "Assembly called on the tenth day"
                ]
            },
            {
                question: "Who calls the assembly on the tenth day, and why is that detail important?",
                modelAnswer: "Achilles calls the assembly, not Agamemnon. He is prompted by the goddess Hera, who cares for the Greeks and puts the idea into his mind. This is important because it is the commander-in-chief's job to call assemblies — Achilles acting first shows both his concern for the army and the first hint of friction with Agamemnon's authority.",
                keyPoints: [
                    "Achilles calls the assembly, not Agamemnon",
                    "Prompted by Hera, who favours the Greeks",
                    "Convention would expect the king to call it",
                    "Early sign of tension between the two men"
                ]
            },
            {
                question: "What does Calchas demand before he will speak, and why?",
                modelAnswer: "Calchas, the Greek seer, refuses to explain the plague until Achilles swears to protect him. He knows that his answer will anger \"a powerful man who rules over the Argives\" — clearly Agamemnon — and fears his wrath. Achilles solemnly swears that no Greek will lay hands on Calchas while he is alive, and only then does the prophet speak.",
                keyPoints: [
                    "Calchas is the army's seer / prophet",
                    "Fears the wrath of a powerful man (Agamemnon)",
                    "Asks Achilles to swear protection",
                    "Achilles swears no Greek will harm him"
                ]
            },
            {
                question: "What does Calchas reveal about the cause of the plague, and how can it be ended?",
                modelAnswer: "Calchas reveals that Apollo is angry because Agamemnon dishonoured his priest Chryses. To appease the god the Greeks must return Chryseis to her father without ransom and offer a sacred hecatomb (a hundred oxen) to Apollo. Only then will the plague be lifted.",
                keyPoints: [
                    "Apollo angered by the dishonouring of Chryses",
                    "Chryseis must be returned without ransom",
                    "A hecatomb (100 oxen) must be sacrificed",
                    "These conditions alone will lift the plague"
                ]
            },
            {
                question: "How does Agamemnon react to Calchas, and what does he demand from the army?",
                modelAnswer: "Agamemnon rages at Calchas, calling him a prophet of evil who only ever tells him bad news. He grudgingly agrees to give Chryseis back for the army's sake, but insists that another prize be found for him at once — he refuses to be the only Greek without a prize of honour, and threatens that if one is not given he will take one from Achilles, Ajax or Odysseus.",
                keyPoints: [
                    "Rages at Calchas, \"prophet of evil\"",
                    "Agrees to return Chryseis for the army's sake",
                    "Demands another prize to replace her",
                    "Threatens to take one from Achilles, Ajax or Odysseus"
                ]
            },
            {
                question: "How does Achilles respond to Agamemnon's demand for a replacement prize?",
                modelAnswer: "Achilles accuses Agamemnon of being greedy and shameless, calling him \"dog-faced\" and saying the army will never follow him again if he strips men of their prizes. He points out that he personally has no quarrel with the Trojans — they never harmed him — and that he fights only to win honour for Agamemnon and Menelaus. If Agamemnon takes his prize, he threatens to sail home to Phthia.",
                keyPoints: [
                    "Calls Agamemnon greedy and \"dog-faced\"",
                    "Says he has no personal quarrel with the Trojans",
                    "Fights for Agamemnon's and Menelaus' honour",
                    "Threatens to sail home to Phthia"
                ]
            },
            {
                question: "What does Agamemnon then threaten to do, and how does Achilles react?",
                modelAnswer: "Agamemnon threatens that since Chryseis is being taken from him, he will personally come to Achilles' hut and take Briseis, Achilles' own war prize, to show who is the greater man. Achilles is so enraged that he starts to draw his great sword to kill Agamemnon there and then — but is stopped by the goddess Athena.",
                keyPoints: [
                    "Agamemnon threatens to take Briseis from Achilles' hut",
                    "Means to show he is the greater king",
                    "Achilles begins to draw his sword",
                    "Athena intervenes before he can strike"
                ]
            },
            {
                question: "How does Athena stop Achilles, and what does she promise him?",
                modelAnswer: "Athena appears behind Achilles, visible only to him, and seizes him by his golden hair. Sent by Hera, who cares for both men, she tells him to hold back his sword and wound Agamemnon with words instead. She promises that in time he will receive three times as many splendid gifts as compensation for this insult. Achilles obeys, thrusts the sword back in its scabbard, but goes on to abuse Agamemnon verbally.",
                keyPoints: [
                    "Athena appears, visible only to Achilles",
                    "Seizes him by his golden hair",
                    "Sent by Hera, who loves both men",
                    "Promises three times as many gifts in compensation",
                    "Achilles sheathes his sword but continues insulting Agamemnon"
                ]
            },
            {
                question: "What oath does Achilles swear over the sceptre, and what does it mean?",
                modelAnswer: "Achilles swears by the sceptre — a piece of wood that, once cut, will never again grow leaves or roots — that there will come a day when the Greeks will long for him as they are slaughtered by Hector, and Agamemnon will be powerless to help, tearing at himself with grief for having dishonoured the best of the Achaeans. He then hurls the golden-studded sceptre to the ground.",
                keyPoints: [
                    "Sworn by the sceptre, which can never grow again",
                    "The Greeks will long for Achilles when many die",
                    "Many will fall at Hector's hands",
                    "Agamemnon will grieve but be unable to help",
                    "Hurls the sceptre to the ground"
                ]
            },
            {
                question: "Who is Nestor and how does he try to mediate the quarrel?",
                modelAnswer: "Nestor is the old king of Pylos, famous for his wisdom and long experience. He reminds both men that he once fought alongside far greater heroes — Pirithous, Theseus and others — who always listened to his counsel. He urges Agamemnon not to take Briseis, because she was awarded to Achilles by the army, and urges Achilles not to set himself against the king whom Zeus has honoured. Neither man fully takes his advice.",
                keyPoints: [
                    "Old king of Pylos, famed for wisdom",
                    "Cites past heroes (Pirithous, Theseus) as authority",
                    "Tells Agamemnon not to take Briseis",
                    "Tells Achilles not to quarrel with a Zeus-honoured king",
                    "Neither fully listens"
                ]
            },
            {
                question: "How is Briseis taken, and how does Achilles react?",
                modelAnswer: "Agamemnon sends his heralds Talthybius and Eurybates to fetch Briseis. Achilles does not resist: he tells Patroclus to bring her out, hands her over, and makes the heralds witnesses of Agamemnon's wrong. Briseis goes unwillingly. Achilles then walks alone to the beach in tears, stretches out his hands to the sea and calls for his divine mother Thetis.",
                keyPoints: [
                    "Heralds Talthybius and Eurybates come for Briseis",
                    "Achilles does not resist; Patroclus hands her over",
                    "Briseis goes \"against her will\"",
                    "Achilles weeps on the shore",
                    "Calls his mother Thetis"
                ]
            },
            {
                question: "What does Achilles ask Thetis to do, and why must she wait?",
                modelAnswer: "Thetis rises from the sea and sits beside him. Achilles asks her to go to Zeus and beg him to turn the tide of the war against the Greeks, so that Agamemnon will realise he dishonoured the best of the Achaeans. Thetis agrees, but says Zeus has gone with the other gods to feast with the blameless Aethiopians and will not return for twelve days; she will supplicate him then.",
                keyPoints: [
                    "Achilles asks her to go to Zeus",
                    "Wants Zeus to favour the Trojans",
                    "So Agamemnon learns his mistake",
                    "Zeus is away twelve days with the Aethiopians",
                    "Thetis agrees but must wait"
                ]
            },
            {
                question: "How does Zeus respond to Thetis's supplication, and what is the significance of his nod?",
                modelAnswer: "Twelve days later Thetis kneels before Zeus, clasping his knees with one hand and his chin with the other in the formal posture of supplication. Zeus hesitates, knowing Hera will be furious, but finally agrees and nods his head. His dark brows bow and the ambrosial locks swing down, making great Olympus tremble. This nod is the most binding pledge Zeus can give — once he nods, the outcome is certain.",
                keyPoints: [
                    "Thetis clasps his knees and chin (formal supplication)",
                    "Zeus hesitates, fearing Hera",
                    "Finally nods his head in agreement",
                    "The nod makes Olympus tremble",
                    "An unbreakable divine promise"
                ]
            },
            {
                question: "How is the quarrel on Olympus resolved at the end of Book 1?",
                modelAnswer: "Hera has noticed Thetis's visit and confronts Zeus with suspicion; he rebukes her sharply and threatens to lay his unbeatable hands on her if she does not obey. The mood is saved by Hephaestus, the lame smith god, who urges his mother to give way and then pours wine for the gods. The Olympians burst into \"unquenchable laughter\" at the sight of him limping round the hall, and the day ends with the gods feasting and going to sleep — a comic contrast to the bitter quarrel among men.",
                keyPoints: [
                    "Hera confronts Zeus, suspicious of Thetis's visit",
                    "Zeus rebukes and threatens her",
                    "Hephaestus (the lame god) intervenes",
                    "Pours wine and makes the gods laugh",
                    "Divine scene contrasts with the human quarrel"
                ]
            }
        ]
    },
    '3': {
        title: "Book 3",
        questions: [
            {
                question: "How are the two armies contrasted as they advance on each other at the start of Book 3?",
                modelAnswer: "The Trojans advance with a great clamour and din, \"like cranes\" whose cries fill the sky as they fly towards the streams of Ocean. The Greeks, by contrast, come on in complete silence, breathing fury, each man determined to stand by his comrade. The effect is to make the Greeks look disciplined and formidable beside the noisy Trojans.",
                keyPoints: [
                    "Trojans compared to clamouring cranes",
                    "Cranes fly towards the streams of Ocean",
                    "Greeks advance in complete silence",
                    "Greeks breathe fury and stand by one another",
                    "Simile contrasts noise with discipline"
                ]
            },
            {
                question: "How is Paris introduced, and what challenge does he issue?",
                modelAnswer: "Paris (also called Alexander) steps out in front of the Trojan lines wearing a panther skin, with a bow, sword and two spears, and calls on the best of the Greeks to fight him in single combat. He is described as \"godlike\" in looks, a glamorous figure designed to impress. His challenge is meant to be a grand heroic gesture.",
                keyPoints: [
                    "Paris / Alexander steps out as the Trojan champion",
                    "Wears a panther skin",
                    "Carries a bow, sword and two spears",
                    "Challenges the best of the Greeks to single combat",
                    "Described as godlike in appearance"
                ]
            },
            {
                question: "How does Paris react when Menelaus accepts his challenge, and what does Hector say to him?",
                modelAnswer: "When Menelaus leaps down from his chariot, delighted at the chance to punish the man who stole his wife, Paris's heart fails him and he shrinks back into the Trojan ranks \"like a man who has seen a snake\". Hector rebukes him furiously, calling him \"Paris, evil Paris, handsome, woman-mad, seducer\" and says he is a disgrace who is only good-looking and no fighter — the Trojans would have stoned him long ago if they had any courage.",
                keyPoints: [
                    "Menelaus leaps from his chariot, eager to fight",
                    "Paris shrinks back in fear, like a man seeing a snake",
                    "Hector rebukes him harshly",
                    "Calls him handsome but cowardly, a seducer",
                    "Says the Trojans should have stoned him"
                ]
            },
            {
                question: "How does Paris answer Hector's rebuke, and what does he propose?",
                modelAnswer: "Paris accepts the rebuke as justified and admits his brother's heart is like an unwearying axe. He defends his looks as gifts from Aphrodite that should not be despised, but then offers to fight Menelaus in single combat for Helen and all her possessions. Whoever wins takes Helen and her treasure, and both sides will swear oaths of friendship so the war can end.",
                keyPoints: [
                    "Accepts Hector's rebuke as fair",
                    "Defends Aphrodite's gifts of beauty",
                    "Proposes single combat with Menelaus",
                    "The winner takes Helen and her possessions",
                    "Both sides to swear oaths and end the war"
                ]
            },
            {
                question: "Who is Iris sent to, and what is Helen doing when she arrives?",
                modelAnswer: "Iris, disguised as Helen's sister-in-law Laodice, is sent by the gods to fetch Helen to the walls. She finds Helen in her chamber weaving a great purple robe, into which she is working scenes of the battles the Trojans and Greeks are fighting over her. Iris tells her of the proposed duel between Paris and Menelaus, and fills her with a sweet longing for her former husband, her parents and her city.",
                keyPoints: [
                    "Iris disguised as Laodice, Helen's sister-in-law",
                    "Helen is weaving in her chamber",
                    "The robe shows scenes of the battles fought over her",
                    "Iris announces the duel between Paris and Menelaus",
                    "Iris stirs longing for her first husband and home"
                ]
            },
            {
                question: "Who are the Trojan elders on the walls, and how do they react to Helen?",
                modelAnswer: "Priam is seated at the Scaean Gate with a group of old Trojan counsellors — men like Panthoos, Thymoetes, Lampos and Antenor — who are too old to fight but fine speakers, compared to cicadas chirping in a tree. When they see Helen coming, they quietly agree that it is no wonder Greeks and Trojans have suffered so long for such a woman, who looks terrifyingly like an immortal goddess — but they still say she should be sent home before she destroys them.",
                keyPoints: [
                    "Priam and the elders sit by the Scaean Gate",
                    "Named elders include Panthoos, Thymoetes, Lampos, Antenor",
                    "Compared to cicadas chirping on a tree",
                    "Say Helen is terribly like an immortal goddess",
                    "Still conclude she should be sent back to Greece"
                ]
            },
            {
                question: "What is the \"teichoskopia\", and which Greek leader does Priam ask Helen to identify first?",
                modelAnswer: "The teichoskopia is the \"view from the walls\" — the scene in which Priam sits with Helen on the tower above the Scaean Gate and asks her to point out the leading Greek warriors in the plain below. He asks first about a tall, noble-looking man who stands out like a king — Helen identifies him as Agamemnon, son of Atreus, the great king of Mycenae, and calls him her brother-in-law, shaming herself for having left him.",
                keyPoints: [
                    "Teichoskopia = viewing from the walls",
                    "Priam sits with Helen above the Scaean Gate",
                    "First figure pointed out is Agamemnon",
                    "Described as a kingly, broad-shouldered man",
                    "Helen calls him her brother-in-law and blames herself"
                ]
            },
            {
                question: "How does Helen describe Odysseus to Priam, and what does Antenor add?",
                modelAnswer: "Helen points out Odysseus as a man shorter than Agamemnon but broader in the chest, who strides up and down the ranks like a ram among sheep. She says he is the clever son of Laertes from rocky Ithaca, a man of many stratagems. Antenor confirms this, remembering how Odysseus once came to Troy as an ambassador with Menelaus: standing he looked unimpressive, but when he spoke his words fell like winter snowflakes and no man could match him.",
                keyPoints: [
                    "Odysseus is shorter but broader than Agamemnon",
                    "Paces the ranks like a ram among sheep",
                    "Son of Laertes, from rocky Ithaca, known for cunning",
                    "Antenor recalls him as an ambassador to Troy",
                    "His words fell \"like winter snowflakes\""
                ]
            },
            {
                question: "Which other Greek leaders does Helen name from the walls?",
                modelAnswer: "Helen also picks out \"huge Ajax\", the bulwark of the Achaeans, who stands head and shoulders above the rest, and Idomeneus, the Cretan leader, whom she says often stayed in their house in Sparta and was entertained by Menelaus. She then looks for her own two brothers, Castor and Polydeuces, but cannot see them and assumes they chose to stay away out of shame — unaware that they are already dead and buried in Lacedaemon.",
                keyPoints: [
                    "Ajax, huge and a bulwark of the Greeks",
                    "Idomeneus, the Cretan, often a guest in Sparta",
                    "Looks for her brothers Castor and Polydeuces",
                    "Cannot see them, assumes shame kept them away",
                    "Narrator reveals they are already dead in Lacedaemon"
                ]
            },
            {
                question: "How are the oaths for the duel sworn, and by whom?",
                modelAnswer: "Heralds bring two lambs and wine, and Priam is fetched down from Troy in a chariot with Antenor because the Trojans will not trust their younger men to swear. On the battlefield Agamemnon cuts hairs from the lambs' heads, prays to Zeus, Helios, the rivers and the underworld powers, and cuts the lambs' throats. Both sides pour wine and pray that whoever breaks the oaths will have their brains poured out like the wine. Priam, unable to bear watching his son fight, then rides back to Troy.",
                keyPoints: [
                    "Two lambs and wine are brought for the oath",
                    "Priam summoned down from Troy with Antenor",
                    "Agamemnon cuts hairs from the lambs and prays to Zeus and other gods",
                    "Lambs' throats cut; wine poured as a curse on oath-breakers",
                    "Priam cannot bear to watch and returns to Troy"
                ]
            },
            {
                question: "How is the duel between Paris and Menelaus arranged and fought?",
                modelAnswer: "Hector and Odysseus measure out the ground and shake lots in a helmet to decide who throws first; Paris's lot leaps out. Paris throws his spear first but it is blunted on Menelaus's shield. Menelaus's spear pierces Paris's shield, corselet and tunic but only grazes his side. Menelaus then draws his sword and strikes Paris's helmet, but the sword shatters in his hand; he finally seizes Paris by the horsehair crest of his helmet and drags him towards the Greek lines, choking him with the chinstrap.",
                keyPoints: [
                    "Hector and Odysseus measure the ground and draw lots",
                    "Paris's lot leaps out; he throws first",
                    "Paris's spear is blunted on Menelaus's shield",
                    "Menelaus's spear grazes Paris's side",
                    "Menelaus's sword shatters on Paris's helmet",
                    "Drags Paris by the helmet strap towards the Greeks"
                ]
            },
            {
                question: "How is Paris rescued from Menelaus, and where does he end up?",
                modelAnswer: "Just as Menelaus is about to drag Paris to his death, Aphrodite breaks the chinstrap of his helmet — so that Menelaus is left clutching an empty helmet — and whisks Paris away wrapped in a thick mist. She sets him down safely in his own fragrant, perfumed bedroom in Troy, leaving Menelaus raging up and down the battlefield looking for him in vain.",
                keyPoints: [
                    "Aphrodite intervenes to save Paris",
                    "Breaks the oxhide chinstrap of his helmet",
                    "Menelaus is left holding an empty helmet",
                    "Aphrodite hides Paris in a thick mist",
                    "Sets him down in his own scented bedroom in Troy"
                ]
            },
            {
                question: "How does Aphrodite fetch Helen, and how does Helen first respond?",
                modelAnswer: "Aphrodite, disguised as an old wool-working woman from Sparta, goes to Helen on the walls and tells her Paris is waiting for her in the bedroom, looking as beautiful as if he had been at a dance. Helen sees through the disguise — recognising the goddess's lovely throat, breasts and shining eyes — and answers angrily, telling Aphrodite to go and be Paris's wife herself, or his slave, but to stop dragging her around. Aphrodite furiously threatens to abandon her and make both Greeks and Trojans hate her, and Helen, terrified, obeys.",
                keyPoints: [
                    "Aphrodite disguises herself as an old wool-worker",
                    "Tells Helen that Paris is waiting in the bedroom",
                    "Helen recognises the goddess by her throat, breasts and eyes",
                    "Helen refuses and tells Aphrodite to go to Paris herself",
                    "Aphrodite threatens to hate her; Helen gives in in fear"
                ]
            },
            {
                question: "What passes between Helen and Paris in the bedroom scene?",
                modelAnswer: "Veiled and led by Aphrodite, Helen goes to Paris and taunts him bitterly, saying he has come back from battle and she wishes he had been killed by the better man who was once her husband. Paris answers mildly, admitting Menelaus won this time with Athena's help, but saying he will beat him next time — and that right now he is overcome with desire for her, more even than on the day he first carried her off from Lacedaemon. He leads her to the bed and she follows, and they lie down together.",
                keyPoints: [
                    "Helen taunts Paris, wishing he had been killed",
                    "Says Menelaus was the better man, her former husband",
                    "Paris blames Athena's help, not his own weakness",
                    "Claims he desires her more than when he first took her",
                    "They go to bed together while the battle rages"
                ]
            },
            {
                question: "How does Book 3 end, and what does Agamemnon declare?",
                modelAnswer: "While Paris and Helen are in bed, Menelaus is still prowling the battlefield looking for his rival, but no Trojan will point him out because they all hate Paris. Agamemnon then speaks out to both armies and formally declares victory for Menelaus, demanding that the Trojans now hand over Helen and her possessions and pay a fitting recompense, as the oaths require. The Greeks shout in agreement, and the book ends with the duel's outcome apparently settled — though the war is in fact about to restart.",
                keyPoints: [
                    "Menelaus hunts for Paris on the battlefield",
                    "No Trojan will reveal Paris because they hate him",
                    "Agamemnon speaks formally to both armies",
                    "Declares Menelaus the winner of the duel",
                    "Demands Helen, her possessions and recompense",
                    "Greeks shout approval"
                ]
            }
        ]
    }
};
