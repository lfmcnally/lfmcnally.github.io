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
        questions: []
    }
};
