// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: Topic 1.4 — Foundation Stories
// ============================================================
// Focused on the core examinable knowledge (based on the
// revision page), but covering it thoroughly:
//   A. The naming of Athens (Athena and Poseidon)
//   B. Theseus: birth & reign
//   C. Theseus: the labours (the Kylix — prescribed source)
//   D. Aeneas (Troy, the wanderings, importance to Rome)
//   E. Romulus & Remus (the founding of Rome)
//   F. The sources: Livy & Plutarch (prescribed sources)
//
//   id:       topic-subtopic-number
//   subtopic: BKT tracking group label (questions group by this)
//   q:        question text
//   answers:  4 options — answers[0] is ALWAYS correct; the
//             tester shuffles before display.
// BKT is tracked per question, keyed by `id`, in the shared
// vocab_bkt list named below ("list").
// ============================================================

(function () {
  window.CivQuiz = window.CivQuiz || { topics: [] };

  const questions = [

    // ── SUBTOPIC A: The naming of Athens ──
    { id: "1.4-A-01", subtopic: "The naming of Athens", q: "Which two gods competed to be the patron of Athens?", answers: ["Athena and Poseidon", "Zeus and Hera", "Athena and Ares", "Apollo and Poseidon"] },
    { id: "1.4-A-02", subtopic: "The naming of Athens", q: "Which legendary king needed a name for his new city?", answers: ["Cecrops", "Erechtheus", "Aegeus", "Theseus"] },
    { id: "1.4-A-03", subtopic: "The naming of Athens", q: "What did Poseidon produce by striking the Acropolis with his trident?", answers: ["a spring of salt sea water", "a flowing river of fresh water", "a leaping war horse", "a fountain of red wine"] },
    { id: "1.4-A-04", subtopic: "The naming of Athens", q: "What gift did Athena offer the city?", answers: ["an olive tree", "a spring of fresh water", "a golden shield", "a sacred owl"] },
    { id: "1.4-A-05", subtopic: "The naming of Athens", q: "Who judged the contest?", answers: ["Zeus and Cecrops", "the twelve Olympians", "the people of Athens", "Poseidon himself"] },
    { id: "1.4-A-06", subtopic: "The naming of Athens", q: "Why did Athena's gift win the contest?", answers: ["the olive was vital as food, oil, and trade", "it was far more beautiful to look at", "it could never be destroyed", "she had offered it first"] },
    { id: "1.4-A-07", subtopic: "The naming of Athens", q: "What did winning the contest let Athena do?", answers: ["name the city after herself", "banish Poseidon from Greece", "build the Parthenon herself", "rule Athens as its queen"] },
    { id: "1.4-A-08", subtopic: "The naming of Athens", q: "Where in Athens was the contest depicted?", answers: ["the western pediment of the Parthenon", "the eastern pediment of the Parthenon", "the outer Doric metopes", "the cult statue's shield"] },
    { id: "1.4-A-09", subtopic: "The naming of Athens", q: "Which building preserved physical 'evidence' of the contest?", answers: ["the Erechtheion", "the Parthenon", "the Temple of Zeus", "the Theatre of Dionysus"] },
    { id: "1.4-A-10", subtopic: "The naming of Athens", q: "Why did the naming myth matter to the Athenians?", answers: ["it showed the city was chosen by a god", "it proved Athens was the oldest city", "it explained the Olympic Games", "it justified their war with Sparta"] },

    // ── SUBTOPIC B: Theseus — birth & reign ──
    { id: "1.4-B-01", subtopic: "Theseus: birth & reign", q: "Who were the two fathers of Theseus?", answers: ["the mortal Aegeus and the god Poseidon", "the mortal Pittheus and the god Zeus", "the mortal Aegeus and the god Zeus", "the god Poseidon and the god Ares"] },
    { id: "1.4-B-02", subtopic: "Theseus: birth & reign", q: "Who was the mortal father of Theseus?", answers: ["Aegeus, king of Athens", "Pittheus, king of Troezen", "Cecrops, king of Attica", "Minos, king of Crete"] },
    { id: "1.4-B-03", subtopic: "Theseus: birth & reign", q: "Who was Theseus's mother?", answers: ["Aethra", "Ariadne", "Medea", "Rhea Silvia"] },
    { id: "1.4-B-04", subtopic: "Theseus: birth & reign", q: "What did Aegeus hide under a rock for his son?", answers: ["his sandals and sword", "a golden crown and ring", "a shield and spear", "a ball of wool"] },
    { id: "1.4-B-05", subtopic: "Theseus: birth & reign", q: "What was the test of the rock?", answers: ["if worthy, the boy would lift it and bring the tokens", "the boy had to break the rock with a hammer", "the boy had to draw a sword from the stone", "the boy had to guard the rock for a year"] },
    { id: "1.4-B-06", subtopic: "Theseus: birth & reign", q: "Why did Theseus take the dangerous land route to Athens?", answers: ["to equal the heroic deeds of Heracles", "the sea route was blocked by pirates", "an oracle had ordered him to", "it was the only road to Athens"] },
    { id: "1.4-B-07", subtopic: "Theseus: birth & reign", q: "How did Theseus's labours differ from those of Heracles?", answers: ["Theseus chose his; Heracles's were a punishment", "Theseus had divine help; Heracles had none", "Theseus worked alone; Heracles had a cousin", "Theseus failed several; Heracles failed none"] },
    { id: "1.4-B-08", subtopic: "Theseus: birth & reign", q: "What was Theseus's greatest achievement as king?", answers: ["uniting Attica under Athens", "founding the city of Athens", "defeating the Persian invasion", "building the great Parthenon"] },
    { id: "1.4-B-09", subtopic: "Theseus: birth & reign", q: "What did Theseus promise the towns of Attica to win them over?", answers: ["democracy — they would vote, not be ruled by a king", "lower taxes and the gift of free farming land", "the protection of his powerful standing army", "a generous share of the gold of Athens"] },
    { id: "1.4-B-10", subtopic: "Theseus: birth & reign", q: "Which games did Theseus found to unite the region?", answers: ["the Panathenaic Games", "the Olympic Games", "the Isthmian Games", "the Pythian Games"] },
    { id: "1.4-B-11", subtopic: "Theseus: birth & reign", q: "How was Theseus honoured after his death, according to Plutarch?", answers: ["as a demi-god", "as a full Olympian god", "with a yearly festival only", "as the first king of all Greece"] },
    { id: "1.4-B-12", subtopic: "Theseus: birth & reign", q: "What did soldiers believe they saw at the Battle of Marathon?", answers: ["an apparition of Theseus charging the Persians", "the goddess Athena in full armour", "the ghost of the hero Heracles", "a flight of twelve sacred vultures"] },

    // ── SUBTOPIC C: Theseus — the labours (the Kylix) ──
    { id: "1.4-C-01", subtopic: "Theseus: the labours (the Kylix)", q: "What kind of object is the Theseus kylix?", answers: ["a drinking cup", "a temple frieze", "a burial urn", "a wine jug"] },
    { id: "1.4-C-02", subtopic: "Theseus: the labours (the Kylix)", q: "When was the Theseus kylix made?", answers: ["440–430 BC", "472–456 BC", "120–80 BC", "AD 118–125"] },
    { id: "1.4-C-03", subtopic: "Theseus: the labours (the Kylix)", q: "In what style is the Theseus kylix painted?", answers: ["red-figure", "black-figure", "white-ground", "relief carving"] },
    { id: "1.4-C-04", subtopic: "Theseus: the labours (the Kylix)", q: "Who painted the Theseus kylix?", answers: ["the Codrus Painter", "the Berlin Painter", "Phidias", "Pausanias"] },
    { id: "1.4-C-05", subtopic: "Theseus: the labours (the Kylix)", q: "Where is the Theseus kylix kept today?", answers: ["the British Museum", "the Olympia Museum", "the Acropolis Museum", "the Louvre"] },
    { id: "1.4-C-06", subtopic: "Theseus: the labours (the Kylix)", q: "How many of Theseus's labours are shown on the kylix?", answers: ["seven", "twelve", "five", "ten"] },
    { id: "1.4-C-07", subtopic: "Theseus: the labours (the Kylix)", q: "Which labour is shown at the centre of the kylix?", answers: ["Theseus and the Minotaur", "Sinis the Pine Bender", "the Bull of Marathon", "Procrustes"] },
    { id: "1.4-C-08", subtopic: "Theseus: the labours (the Kylix)", q: "How did Sinis the Pine Bender kill his victims?", answers: ["he tied them to bent pines that tore them apart", "he pushed them off a high sea cliff edge", "he stretched them out on an iron bed", "he drowned them far out in the deep sea"] },
    { id: "1.4-C-09", subtopic: "Theseus: the labours (the Kylix)", q: "What was unusual about Theseus tackling the Crommyonian Sow?", answers: ["he sought it out, not just in self-defence", "he refused to fight it at all", "he was forced into it by Medea", "he killed it purely by accident"] },
    { id: "1.4-C-10", subtopic: "Theseus: the labours (the Kylix)", q: "How did Sciron kill travellers?", answers: ["he had them wash his feet, then kicked them off", "he challenged each of them to a wrestling match", "he tied them to two great bent pine trees", "he fed them to his savage man-eating horses"] },
    { id: "1.4-C-11", subtopic: "Theseus: the labours (the Kylix)", q: "How did Cercyon kill the passers-by he met?", answers: ["he forced them into a wrestling match", "he stretched them on his iron bed", "he kicked them off a steep cliff", "he set his wild sow upon them"] },
    { id: "1.4-C-12", subtopic: "Theseus: the labours (the Kylix)", q: "What did Theseus discover, allowing him to beat Cercyon?", answers: ["the art of wrestling — skill, not just strength", "a magical, unbreakable sword", "the secret weakness of all beasts", "how to read the will of the gods"] },
    { id: "1.4-C-13", subtopic: "Theseus: the labours (the Kylix)", q: "How did Procrustes torture his guests?", answers: ["he made them fit a bed by stretching or cutting them", "he made them stop and wash his dirty feet", "he set each of them an impossible riddle", "he forced them to wrestle him to the death"] },
    { id: "1.4-C-14", subtopic: "Theseus: the labours (the Kylix)", q: "Which earlier labour of Heracles did the Bull of Marathon connect to?", answers: ["it was the same bull Heracles had caught on Crete", "the capture of the Nemean Lion", "the taming of the Mares of Diomedes", "the hunt for the Erymanthian Boar"] },
    { id: "1.4-C-15", subtopic: "Theseus: the labours (the Kylix)", q: "Who tricked Aegeus into trying to poison Theseus?", answers: ["the witch Medea", "Princess Ariadne", "King Minos", "King Pittheus"] },
    { id: "1.4-C-16", subtopic: "Theseus: the labours (the Kylix)", q: "How did Aegeus finally recognise Theseus as his son?", answers: ["he recognised the sword Theseus carried", "by a birthmark on his shoulder", "by the lion skin he was wearing", "by a message from the oracle"] },
    { id: "1.4-C-17", subtopic: "Theseus: the labours (the Kylix)", q: "Why did Athens have to send youths to the Minotaur?", answers: ["as tribute to Crete after the death of Minos's son", "to repay a great debt of stolen gold", "as prisoners taken in a recent war", "to serve as slaves in King Minos's army"] },
    { id: "1.4-C-18", subtopic: "Theseus: the labours (the Kylix)", q: "How did Ariadne help Theseus survive the Labyrinth?", answers: ["she gave him a ball of wool and a sword", "she gave him a magic sleeping potion", "she drew him a map of the maze", "she fought the Minotaur beside him"] },
    { id: "1.4-C-19", subtopic: "Theseus: the labours (the Kylix)", q: "What caused the death of Aegeus on Theseus's return?", answers: ["Theseus forgot to change the black sail to white", "the witch Medea had poisoned him", "the Minotaur had cursed his house", "he was thrown overboard in a storm"] },

    // ── SUBTOPIC D: Aeneas ──
    { id: "1.4-D-01", subtopic: "Aeneas", q: "Who was the mother of Aeneas?", answers: ["Venus (Aphrodite)", "Juno (Hera)", "Lavinia", "Creusa"] },
    { id: "1.4-D-02", subtopic: "Aeneas", q: "Who was the mortal father of Aeneas?", answers: ["Anchises", "Latinus", "Priam", "Ascanius"] },
    { id: "1.4-D-03", subtopic: "Aeneas", q: "How was Aeneas's birth like that of Theseus and Heracles?", answers: ["he had one mortal and one divine parent", "he was raised by a wild animal", "he was hidden as a baby under a rock", "he was born far away in exile"] },
    { id: "1.4-D-04", subtopic: "Aeneas", q: "In which Greek epic does Aeneas appear as a Trojan warrior?", answers: ["Homer's Iliad", "Homer's Odyssey", "Virgil's Aeneid", "Livy's history"] },
    { id: "1.4-D-05", subtopic: "Aeneas", q: "How did the Greeks finally take Troy?", answers: ["with the wooden horse", "by burning the Trojan fleet", "by a long siege of starvation", "by bribing the gatekeepers"] },
    { id: "1.4-D-06", subtopic: "Aeneas", q: "Who devised the trick of the wooden horse?", answers: ["Odysseus", "Aeneas", "Achilles", "Agamemnon"] },
    { id: "1.4-D-07", subtopic: "Aeneas", q: "Whom did Aeneas carry on his back as he fled Troy?", answers: ["his elderly father Anchises", "his young son Ascanius", "his wife Creusa", "the dead king Priam"] },
    { id: "1.4-D-08", subtopic: "Aeneas", q: "What sacred objects did Aeneas carry out of Troy?", answers: ["the public Penates", "the Palladium of Athena", "the golden fleece", "the bones of Priam"] },
    { id: "1.4-D-09", subtopic: "Aeneas", q: "Whom did Aeneas lose during the escape from Troy?", answers: ["his wife Creusa", "his father Anchises", "his son Ascanius", "his mother Venus"] },
    { id: "1.4-D-10", subtopic: "Aeneas", q: "What Roman virtue did Aeneas embody above all?", answers: ["pietas — duty to family, gods, and city", "virtus — raw courage in battle", "gravitas — a serious, weighty manner", "clementia — mercy towards enemies"] },
    { id: "1.4-D-11", subtopic: "Aeneas", q: "Where did the wanderings of Aeneas finally bring him?", answers: ["the west coast of Italy", "the island of Crete", "the city of Carthage", "the coast of Greece"] },
    { id: "1.4-D-12", subtopic: "Aeneas", q: "Whose daughter did Aeneas marry in Italy?", answers: ["King Latinus's daughter Lavinia", "King Minos's daughter Ariadne", "King Priam's daughter Creusa", "King Numitor's daughter Rhea Silvia"] },
    { id: "1.4-D-13", subtopic: "Aeneas", q: "Which city did Aeneas found, named after his wife?", answers: ["Lavinium", "Alba Longa", "Rome", "Troy"] },
    { id: "1.4-D-14", subtopic: "Aeneas", q: "Did Aeneas himself found Rome?", answers: ["no — Romulus founded it generations later", "yes, and named it after himself", "yes, together with his son Ascanius", "yes, just after the Trojan War"] },
    { id: "1.4-D-15", subtopic: "Aeneas", q: "Which city did Aeneas's son Ascanius found?", answers: ["Alba Longa", "the city of Rome", "Lavinium", "Carthage"] },
    { id: "1.4-D-16", subtopic: "Aeneas", q: "Why was Aeneas politically useful to Augustus?", answers: ["Augustus claimed descent from Aeneas, and so from Venus", "Aeneas had founded the home town of Augustus", "Aeneas had once defeated the invading Gauls", "Aeneas had written down Rome's very first laws"] },
    { id: "1.4-D-17", subtopic: "Aeneas", q: "Who looked after the Penates that Aeneas brought to Italy?", answers: ["the Vestal Virgins", "the pontifices", "the augurs", "the Caesars themselves"] },
    { id: "1.4-D-18", subtopic: "Aeneas", q: "Why was Aeneas a less awkward founder-figure than Romulus for Augustus?", answers: ["Aeneas was not tainted by killing a brother", "Aeneas had actually built the city of Rome", "Aeneas was a full and proper god", "Aeneas had been born a Roman citizen"] },

    // ── SUBTOPIC E: Romulus & Remus ──
    { id: "1.4-E-01", subtopic: "Romulus & Remus", q: "Who was the mother of Romulus and Remus?", answers: ["Rhea Silvia", "Aethra", "Lavinia", "Venus"] },
    { id: "1.4-E-02", subtopic: "Romulus & Remus", q: "Which god fathered Romulus and Remus?", answers: ["Mars", "Jupiter", "Poseidon", "Quirinus"] },
    { id: "1.4-E-03", subtopic: "Romulus & Remus", q: "Why had Rhea Silvia been made a Vestal Virgin?", answers: ["so she could have no heirs to threaten Amulius", "as a punishment for a great crime", "to guard the sacred flame brought from Troy", "because she was the eldest royal daughter"] },
    { id: "1.4-E-04", subtopic: "Romulus & Remus", q: "Who had seized the throne from the twins' grandfather Numitor?", answers: ["his brother Amulius", "King Latinus", "the twins themselves", "King Aegeus"] },
    { id: "1.4-E-05", subtopic: "Romulus & Remus", q: "What happened to the twins as babies?", answers: ["they were set in a basket and thrown into the Tiber", "they were left out on a hillside to die", "they were sold far away into slavery", "they were hidden away inside a temple"] },
    { id: "1.4-E-06", subtopic: "Romulus & Remus", q: "What animal famously suckled Romulus and Remus?", answers: ["a she-wolf", "a wild boar", "a gentle deer", "a great eagle"] },
    { id: "1.4-E-07", subtopic: "Romulus & Remus", q: "Who found and raised the twins?", answers: ["a shepherd named Faustulus", "their grandfather Numitor", "the witch Medea", "a priest of the god Mars"] },
    { id: "1.4-E-08", subtopic: "Romulus & Remus", q: "What did the twins do once they were grown?", answers: ["they killed Amulius and restored Numitor", "they founded Rome straight away", "they fled together into exile", "they divided Alba Longa between them"] },
    { id: "1.4-E-09", subtopic: "Romulus & Remus", q: "Why did the twins leave Alba Longa to found a new city?", answers: ["it had become overcrowded", "they were banished by Numitor", "the gods had commanded them to", "it had been destroyed by fire"] },
    { id: "1.4-E-10", subtopic: "Romulus & Remus", q: "How did the twins try to settle who should found the city?", answers: ["by augury — reading the flight of birds", "by a hard-fought wrestling match", "by a great chariot race", "by drawing lots between them"] },
    { id: "1.4-E-11", subtopic: "Romulus & Remus", q: "On which hill did Romulus take his omens?", answers: ["the Palatine Hill", "the Aventine Hill", "the Capitoline Hill", "the Campus Martius"] },
    { id: "1.4-E-12", subtopic: "Romulus & Remus", q: "What did each brother see in the augury?", answers: ["Remus saw six vultures, then Romulus saw twelve", "Romulus saw six, then Remus saw twelve", "both of them saw twelve eagles", "Remus saw an eagle, Romulus a wolf"] },
    { id: "1.4-E-13", subtopic: "Romulus & Remus", q: "Why did the augury lead to a dispute?", answers: ["Remus saw the birds first, but Romulus saw more", "both brothers saw the same number", "neither of them saw any birds", "the birds flew in the wrong direction"] },
    { id: "1.4-E-14", subtopic: "Romulus & Remus", q: "What was the outcome of the dispute?", answers: ["Remus was killed and Romulus took sole power", "the twins agreed to rule jointly", "Romulus was driven into exile", "Numitor settled it peacefully"] },
    { id: "1.4-E-15", subtopic: "Romulus & Remus", q: "As what god was Romulus worshipped after his death?", answers: ["Quirinus", "Mars", "Faunus", "Jupiter"] },

    // ── SUBTOPIC F: The sources — Livy & Plutarch ──
    { id: "1.4-F-01", subtopic: "The sources: Livy & Plutarch", q: "What did Livy write?", answers: ["a history of Rome from its foundation", "a biography of the emperor Augustus", "an epic poem about Aeneas", "a comparison of Greek and Roman heroes"] },
    { id: "1.4-F-02", subtopic: "The sources: Livy & Plutarch", q: "During whose reign did Livy write?", answers: ["Augustus", "Julius Caesar", "Hadrian", "Nero"] },
    { id: "1.4-F-03", subtopic: "The sources: Livy & Plutarch", q: "What was unusual about Livy compared with most men of his status?", answers: ["he did not pursue a political career", "he had been born a slave", "he never once left the city of Rome", "he wrote only in the Greek language"] },
    { id: "1.4-F-04", subtopic: "The sources: Livy & Plutarch", q: "What event had destroyed many of Rome's early records?", answers: ["the sack of Rome by the Gauls in 386 BC", "the burning of the city of Troy", "the Persian sack of Athens", "a great fire under the emperor Nero"] },
    { id: "1.4-F-05", subtopic: "The sources: Livy & Plutarch", q: "How had many of Rome's founding legends been passed down?", answers: ["as oral traditions, by word of mouth", "in the official state archives", "carved on the walls of temples", "in earlier Greek histories"] },
    { id: "1.4-F-06", subtopic: "The sources: Livy & Plutarch", q: "What did Livy openly admit about his own account?", answers: ["he could not always separate fact from fiction", "he had invented much of it himself", "he distrusted all of the gods", "he had simply copied it from Plutarch"] },
    { id: "1.4-F-07", subtopic: "The sources: Livy & Plutarch", q: "How might Augustus have influenced Livy's account?", answers: ["Augustus's family claimed descent from Aeneas", "Augustus paid Livy a salary directly", "Augustus had banned all other histories", "Augustus dictated the text to Livy"] },
    { id: "1.4-F-08", subtopic: "The sources: Livy & Plutarch", q: "Why is Livy still valuable despite his weaknesses?", answers: ["he is our most detailed source and was honest about doubt", "he had witnessed the founding of Rome himself", "he carefully cited every source that he used", "he never once mixed myth with real history"] },
    { id: "1.4-F-09", subtopic: "The sources: Livy & Plutarch", q: "What did Plutarch write?", answers: ["Parallel Lives, comparing great Greeks and Romans", "a full history of the city of Rome", "an epic poem about the hero Aeneas", "a treatise on the nature of the gods"] },
    { id: "1.4-F-10", subtopic: "The sources: Livy & Plutarch", q: "What was Plutarch's genre?", answers: ["biography", "history", "epic poetry", "drama"] },
    { id: "1.4-F-11", subtopic: "The sources: Livy & Plutarch", q: "Which two founders does Plutarch compare?", answers: ["Theseus and Romulus", "Aeneas and Romulus", "Theseus and Heracles", "Aeneas and Theseus"] },
    { id: "1.4-F-12", subtopic: "The sources: Livy & Plutarch", q: "Across how many sections does Plutarch compare the two men?", answers: ["six", "three", "ten", "twelve"] },
    { id: "1.4-F-13", subtopic: "The sources: Livy & Plutarch", q: "What is notable about Plutarch's conclusion?", answers: ["he reaches none, leaving the reader to decide", "he clearly declares Theseus the winner", "he clearly declares Romulus the winner", "he refuses to compare them at all"] },
    { id: "1.4-F-14", subtopic: "The sources: Livy & Plutarch", q: "Which religious post did Plutarch hold?", answers: ["priest of Apollo at Delphi", "Pontifex Maximus at Rome", "augur of the city of Athens", "priest of Zeus at Olympia"] },
    { id: "1.4-F-15", subtopic: "The sources: Livy & Plutarch", q: "Which earlier source did Plutarch use for Romulus?", answers: ["Livy", "Virgil", "Homer", "Pausanias"] },
    { id: "1.4-F-16", subtopic: "The sources: Livy & Plutarch", q: "What weakness does Plutarch inherit from his main source for Romulus?", answers: ["he takes on Livy's weaknesses as well", "he wrote in the wrong language", "he had never read any sources", "he lived long before Romulus"] },

  ];

  window.CivQuiz.topics.push({
    id: "1.4",
    title: "Foundation Stories",
    list: "civ-myth-religion",   // shared BKT vocab_list for Myth & Religion
    questions: questions
  });
})();
