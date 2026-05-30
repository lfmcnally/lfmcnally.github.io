// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: Topic 1.6 — Myth and Symbols of Power
// ============================================================
// Focused on the core examinable knowledge (based on the
// revision page), but covering it thoroughly:
//   A. The Centauromachy — myth and meaning
//   B. The Centauromachy on the Parthenon
//   C. The Amazonomachy — myth and Bassae
//   D. Augustus and the Prima Porta
//   E. The Ara Pacis
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

    // ── SUBTOPIC A: The Centauromachy — myth and meaning ──
    { id: "1.6-A-01", subtopic: "The Centauromachy: myth and meaning", q: "Where in Greece did the Lapiths live?", answers: ["Thessaly, in the north", "Boeotia, in the centre", "Laconia, in the south", "Attica, around Athens"] },
    { id: "1.6-A-02", subtopic: "The Centauromachy: myth and meaning", q: "Who was king of the Lapiths and father of the Centaurs?", answers: ["Ixion", "Pirithous", "Theseus", "Peleus"] },
    { id: "1.6-A-03", subtopic: "The Centauromachy: myth and meaning", q: "How were the Centaurs born?", answers: ["Ixion coupled with a cloud-image of Hera, made by Zeus", "they sprang up from the blood of a slain Titan", "Demeter made them from the wild horses of Thessaly", "they were the sons of Poseidon and a wild mare"] },
    { id: "1.6-A-04", subtopic: "The Centauromachy: myth and meaning", q: "Why does the kinship of the Lapiths and Centaurs matter symbolically?", answers: ["they share a father — civilised and barbaric peoples from one line", "it shows the gods were always related to mortals", "it explains why Centaurs always sided with the gods", "it proves Thessaly was once a divine kingdom"] },
    { id: "1.6-A-05", subtopic: "The Centauromachy: myth and meaning", q: "Which of these describes the Centaurs in the myth?", answers: ["savage — lived in caves, hunted wild, no crafts or religion", "civilised craftsmen who built fine houses", "wise teachers of music and prophecy", "settled farmers tending the Thessalian plain"] },
    { id: "1.6-A-06", subtopic: "The Centauromachy: myth and meaning", q: "Whose wedding was the setting of the battle?", answers: ["Pirithous, king of the Lapiths", "Theseus, king of Athens", "Ixion, father of the Centaurs", "Peleus, the father of Achilles"] },
    { id: "1.6-A-07", subtopic: "The Centauromachy: myth and meaning", q: "Who was Pirithous marrying?", answers: ["Hippodemia", "Hippolyta", "Andromache", "Atalanta"] },
    { id: "1.6-A-08", subtopic: "The Centauromachy: myth and meaning", q: "What was the Centaurs' first failure of civilised conduct?", answers: ["they drank wine unmixed with water", "they refused the sacrificial meat", "they came armed to the wedding feast", "they refused to honour the gods present"] },
    { id: "1.6-A-09", subtopic: "The Centauromachy: myth and meaning", q: "What was their second, worse failure?", answers: ["they attacked the women", "they insulted the king to his face", "they refused to leave at dawn", "they killed all the sacrificial beasts"] },
    { id: "1.6-A-10", subtopic: "The Centauromachy: myth and meaning", q: "Which Athenian hero fought alongside the Lapiths?", answers: ["Theseus", "Heracles", "Perseus", "Achilles"] },
    { id: "1.6-A-11", subtopic: "The Centauromachy: myth and meaning", q: "What happened to the surviving Centaurs after the battle?", answers: ["they were expelled from the country", "they were enslaved by the Lapiths", "they fled to Mount Olympus", "they were forgiven and stayed"] },
    { id: "1.6-A-12", subtopic: "The Centauromachy: myth and meaning", q: "After which Greek victory did the Persians become the image of barbarism?", answers: ["Plataea, 479 BC", "Marathon, 490 BC", "Salamis, 480 BC", "Thermopylae, 480 BC"] },
    { id: "1.6-A-13", subtopic: "The Centauromachy: myth and meaning", q: "What did the Centauromachy come to symbolise?", answers: ["the victory of civilisation over barbarism", "the wrath of the gods against mortals", "the unity of all the Greek city-states", "the founding of the Greek religion"] },
    { id: "1.6-A-14", subtopic: "The Centauromachy: myth and meaning", q: "Where did Greeks display the Centauromachy as a permanent statement?", answers: ["on their temples", "on their city walls", "in their assembly chambers", "on their warships"] },
    { id: "1.6-A-15", subtopic: "The Centauromachy: myth and meaning", q: "Which three categories of civilised behaviour did the Centaurs fail?", answers: ["wine, women, sacred ritual", "law, religion, family", "war, art, language", "trade, farming, religion"] },

    // ── SUBTOPIC B: The Centauromachy on the Parthenon ──
    { id: "1.6-B-01", subtopic: "The Centauromachy on the Parthenon", q: "How many metopes ran around the Parthenon?", answers: ["92", "60", "120", "150"] },
    { id: "1.6-B-02", subtopic: "The Centauromachy on the Parthenon", q: "How many of the metopes depicted the Centauromachy?", answers: ["34", "12", "60", "92"] },
    { id: "1.6-B-03", subtopic: "The Centauromachy on the Parthenon", q: "When was the Parthenon built?", answers: ["447–432 BC", "490–480 BC", "510–500 BC", "404–400 BC"] },
    { id: "1.6-B-04", subtopic: "The Centauromachy on the Parthenon", q: "Approximately how high above the ground were the metopes positioned?", answers: ["around ten metres", "around three metres", "around twenty metres", "around fifty metres"] },
    { id: "1.6-B-05", subtopic: "The Centauromachy on the Parthenon", q: "When did the Persians sack Athens and destroy the earlier temple on the Acropolis?", answers: ["480 BC", "490 BC", "479 BC", "447 BC"] },
    { id: "1.6-B-06", subtopic: "The Centauromachy on the Parthenon", q: "Why was the Centauromachy especially significant to Athens after the Persian Wars?", answers: ["it let Athens commemorate Persian defeat without showing a Persian", "it was the only myth involving the gods of Athens", "it was the first Greek myth ever written down", "it was the only myth featuring Athena directly"] },
    { id: "1.6-B-07", subtopic: "The Centauromachy on the Parthenon", q: "Why did Theseus's role in the myth make it Athenian?", answers: ["Theseus was Athens's own founding hero", "Theseus founded the temple of Athena", "Theseus was the brother of Pericles", "Theseus was buried beneath the Parthenon"] },
    { id: "1.6-B-08", subtopic: "The Centauromachy on the Parthenon", q: "What were the sculptor's three objectives for a metope?", answers: ["recognisable scene, realism, filling the space", "symmetry, colour, narrative", "religion, war, family", "drama, beauty, simplicity"] },
    { id: "1.6-B-09", subtopic: "The Centauromachy on the Parthenon", q: "How does a typical metope show the centaur?", answers: ["rearing triumphantly over the fallen Lapith", "fleeing in terror from the Lapith", "kneeling in surrender to the Lapith", "drinking wine beside the Lapith"] },
    { id: "1.6-B-10", subtopic: "The Centauromachy on the Parthenon", q: "What is draped over the centaur's arm, and what does it signify?", answers: ["a wild animal skin, reinforcing his beastlike nature", "a soldier's cloak, showing his rank", "a sacred vestment, showing his piety", "a priest's white robe, showing his role"] },
    { id: "1.6-B-11", subtopic: "The Centauromachy on the Parthenon", q: "What composition shape do the centaur and Lapith form together?", answers: ["a 'z' shape", "a perfect circle", "a triangular pyramid", "a square frame"] },
    { id: "1.6-B-12", subtopic: "The Centauromachy on the Parthenon", q: "Why did the sculptor vary the relief depth (low/high)?", answers: ["to keep the figure legible from ten metres below", "to save on expensive marble", "to follow a religious rule on temples", "to hide the original Persian damage"] },
    { id: "1.6-B-13", subtopic: "The Centauromachy on the Parthenon", q: "What does a semi-circular mark above the centaur's right shoulder probably represent?", answers: ["a pot — recalling the unmixed wine", "the moon, sacred to Artemis", "a shield, used as a weapon", "a halo around a divine figure"] },
    { id: "1.6-B-14", subtopic: "The Centauromachy on the Parthenon", q: "Why was the Parthenon's south metope team's work variable in quality?", answers: ["a team of different sculptors worked on it", "it was carved hastily during a war", "the original sculptors went on strike", "the marble was of changing quality"] },
    { id: "1.6-B-15", subtopic: "The Centauromachy on the Parthenon", q: "Why is thirty-four metopes of the same myth significant?", answers: ["it is a sustained, repeated argument, not decoration", "it shows the sculptors ran out of subjects", "it was the standard number for any Greek temple", "it matches the number of Athenian tribes"] },

    // ── SUBTOPIC C: The Amazonomachy — myth and Bassae ──
    { id: "1.6-C-01", subtopic: "The Amazonomachy: myth and Bassae", q: "Where did the Amazons come from?", answers: ["Asia Minor (modern western Turkey)", "Egypt, south of the Nile", "the islands of the Aegean Sea", "Thrace, north of Greece"] },
    { id: "1.6-C-02", subtopic: "The Amazonomachy: myth and Bassae", q: "What was distinctive about Amazon society?", answers: ["women warriors who avoided men except to repopulate", "women who lived as priestesses of Apollo", "men and women who ruled jointly in equal pairs", "a tribe with no warriors of any kind"] },
    { id: "1.6-C-03", subtopic: "The Amazonomachy: myth and Bassae", q: "What happened to Amazon baby boys?", answers: ["they were killed", "they were raised as Amazon warriors", "they were sent to live with their fathers", "they were sold to neighbouring tribes"] },
    { id: "1.6-C-04", subtopic: "The Amazonomachy: myth and Bassae", q: "In myth, the Amazons consistently…", answers: ["sided against the Greeks", "fought beside the Greeks", "stayed neutral in all wars", "served the gods of Olympus"] },
    { id: "1.6-C-05", subtopic: "The Amazonomachy: myth and Bassae", q: "Which labour of Heracles involved the Amazons?", answers: ["his ninth labour — the belt of Hippolyta", "his first labour — the Nemean Lion", "his twelfth labour — the dog Cerberus", "his fifth labour — the Augean Stables"] },
    { id: "1.6-C-06", subtopic: "The Amazonomachy: myth and Bassae", q: "Who was the Amazon queen Heracles fought?", answers: ["Hippolyta", "Penthesilea", "Antiope", "Andromache"] },
    { id: "1.6-C-07", subtopic: "The Amazonomachy: myth and Bassae", q: "What was the Attic War?", answers: ["the Amazons invaded Athens after Heracles gave one to Theseus", "an Athenian invasion of the land of the Amazons", "a great naval war fought near the city of Athens", "a war between Athens and Sparta led by Heracles"] },
    { id: "1.6-C-08", subtopic: "The Amazonomachy: myth and Bassae", q: "Where is Bassae?", answers: ["a small isolated town in the western Peloponnese", "a large city near the Athenian Acropolis", "a port-town on the eastern Aegean coast", "a town on the slopes of Mount Olympus"] },
    { id: "1.6-C-09", subtopic: "The Amazonomachy: myth and Bassae", q: "Who designed the Temple of Apollo at Bassae?", answers: ["Iktinos, also a designer of the Parthenon", "Pheidias, the great Athenian sculptor", "Kallikrates, designer of the Propylaia", "Polykleitos, sculptor of the Doryphoros"] },
    { id: "1.6-C-10", subtopic: "The Amazonomachy: myth and Bassae", q: "Why was the Temple of Apollo at Bassae dedicated to Apollo?", answers: ["for his help during a plague", "for his role in founding the town", "for his victory at the Battle of Plataea", "for his protection in a Persian siege"] },
    { id: "1.6-C-11", subtopic: "The Amazonomachy: myth and Bassae", q: "What was unique about the placement of the Amazonomachy at Bassae?", answers: ["a continuous frieze around the inside of the naos", "carved on the outside roof, facing the sky", "painted onto the wooden ceiling beams", "set in mosaic on the temple floor"] },
    { id: "1.6-C-12", subtopic: "The Amazonomachy: myth and Bassae", q: "On the Bassae frieze, the Amazonomachy is twinned with which other battle?", answers: ["the Centauromachy", "the Trojan War", "the war between Athens and Sparta", "the Gigantomachy"] },
    { id: "1.6-C-13", subtopic: "The Amazonomachy: myth and Bassae", q: "How is Heracles identifiable on the Bassae frieze?", answers: ["by his lion skin cloak", "by his crown of olive leaves", "by his great winged sandals", "by a trident he is carrying"] },
    { id: "1.6-C-14", subtopic: "The Amazonomachy: myth and Bassae", q: "What is the conventional iconographic marker of an Amazon?", answers: ["one bare breast", "a winged helmet on her head", "a long red cloak around her", "a sword strapped to her back"] },
    { id: "1.6-C-15", subtopic: "The Amazonomachy: myth and Bassae", q: "Why might a small town like Bassae have chosen this subject?", answers: ["to claim a place in the Greek civilisation-over-barbarism tradition", "to celebrate a real battle Bassae had fought", "because Apollo demanded it in a dream", "to mock the Athenians' use of the same myth"] },

    // ── SUBTOPIC D: Augustus and the Prima Porta ──
    { id: "1.6-D-01", subtopic: "Augustus and the Prima Porta", q: "When was Augustus born?", answers: ["63 BC", "44 BC", "31 BC", "27 BC"] },
    { id: "1.6-D-02", subtopic: "Augustus and the Prima Porta", q: "What was Augustus's original name?", answers: ["Gaius Octavius", "Marcus Antonius", "Gaius Marius", "Lucius Cornelius"] },
    { id: "1.6-D-03", subtopic: "Augustus and the Prima Porta", q: "At what age was he named as Caesar's heir?", answers: ["19", "16", "21", "33"] },
    { id: "1.6-D-04", subtopic: "Augustus and the Prima Porta", q: "Who were the other members of the Second Triumvirate?", answers: ["Mark Antony and Lepidus", "Pompey and Crassus", "Cicero and Brutus", "Sulla and Marius"] },
    { id: "1.6-D-05", subtopic: "Augustus and the Prima Porta", q: "Where were Caesar's assassins Brutus and Cassius defeated?", answers: ["Philippi, 43 BC", "Actium, 31 BC", "Pharsalus, 48 BC", "Carrhae, 53 BC"] },
    { id: "1.6-D-06", subtopic: "Augustus and the Prima Porta", q: "When was the Battle of Actium?", answers: ["31 BC", "27 BC", "44 BC", "13 BC"] },
    { id: "1.6-D-07", subtopic: "Augustus and the Prima Porta", q: "What was the outcome of Actium?", answers: ["Antony and Cleopatra defeated; both later committed suicide", "Antony killed Octavian and seized Rome", "Antony and Octavian made a lasting peace", "Cleopatra fled to safety and outlived Antony"] },
    { id: "1.6-D-08", subtopic: "Augustus and the Prima Porta", q: "When did Octavian receive the name Augustus?", answers: ["27 BC", "31 BC", "13 BC", "44 BC"] },
    { id: "1.6-D-09", subtopic: "Augustus and the Prima Porta", q: "What does the name 'Augustus' mean?", answers: ["venerable, esteemed, respected", "the saviour of the Republic", "the conqueror of the East", "the son of Julius Caesar"] },
    { id: "1.6-D-10", subtopic: "Augustus and the Prima Porta", q: "Why did Augustus avoid titles like king or dictator?", answers: ["Caesar had been murdered for looking like a king", "the Senate had abolished both titles", "the gods had forbidden such titles", "he preferred his military rank instead"] },
    { id: "1.6-D-11", subtopic: "Augustus and the Prima Porta", q: "What were Augustus's four aims in his art and architecture?", answers: ["Golden Age, Pax Romana, Pax Deorum, family promotion", "Greek style, Roman law, religion, war", "victory, justice, peace, family", "conquest, beauty, religion, trade"] },
    { id: "1.6-D-12", subtopic: "Augustus and the Prima Porta", q: "Who commissioned the Prima Porta statue?", answers: ["Livia, Augustus's wife", "the Senate of Rome", "Tiberius, his stepson", "Agrippa, his general"] },
    { id: "1.6-D-13", subtopic: "Augustus and the Prima Porta", q: "Where was the Prima Porta originally displayed?", answers: ["at Prima Porta, nine miles north of Rome", "in the Roman Forum", "on the Palatine Hill, near the imperial palace", "at Ostia, the port of Rome"] },
    { id: "1.6-D-14", subtopic: "Augustus and the Prima Porta", q: "Which Greek statue was the Prima Porta based on?", answers: ["the Doryphoros by Polykleitos", "the Discobolus by Myron", "the Zeus by Pheidias", "the Aphrodite of Knidos by Praxiteles"] },
    { id: "1.6-D-15", subtopic: "Augustus and the Prima Porta", q: "What does Augustus's raised right arm signify?", answers: ["the pose of a general addressing his army", "a prayer to Apollo for victory", "the gesture of a Roman senator voting", "a sign of peace and reconciliation"] },
    { id: "1.6-D-16", subtopic: "Augustus and the Prima Porta", q: "How is Augustus clothed in the Prima Porta?", answers: ["military breastplate combined with senatorial toga", "the formal toga of a senator alone", "the simple tunic of a Roman citizen", "the purple cloak of a triumphing general"] },
    { id: "1.6-D-17", subtopic: "Augustus and the Prima Porta", q: "Which gods appear on Augustus's breastplate?", answers: ["Apollo, Artemis, and Tellus", "Jupiter, Juno, and Minerva", "Mars, Venus, and Cupid", "Neptune, Vulcan, and Mercury"] },
    { id: "1.6-D-18", subtopic: "Augustus and the Prima Porta", q: "Who first lost a Roman standard, in 53 BC?", answers: ["Crassus, at Carrhae", "Mark Antony, in the East", "Pompey, at Pharsalus", "Caesar, in Gaul"] },
    { id: "1.6-D-19", subtopic: "Augustus and the Prima Porta", q: "Who negotiated the return of the standards in 20 BC?", answers: ["Tiberius", "Agrippa", "Augustus in person", "Mark Antony's son"] },
    { id: "1.6-D-20", subtopic: "Augustus and the Prima Porta", q: "Why is Cupid shown at Augustus's feet?", answers: ["Cupid is Venus's son — claiming Venus as Augustus's ancestor", "Cupid represents the love of the Roman people", "Cupid was Augustus's favourite of all the gods", "Cupid had appeared to Augustus in a dream"] },
    { id: "1.6-D-21", subtopic: "Augustus and the Prima Porta", q: "Why is Augustus depicted barefoot?", answers: ["bare feet were the pose of heroes and gods", "to show humility before the Senate", "because his sandals were a holy relic", "because Romans considered shoes foreign"] },
    { id: "1.6-D-22", subtopic: "Augustus and the Prima Porta", q: "What is the meaning of 'divi filius'?", answers: ["'son of a god' (Julius Caesar, deified in 42 BC)", "'son of the Senate' — Augustus's title", "'son of Rome' — a religious name", "'son of victory' — a military epithet"] },

    // ── SUBTOPIC E: The Ara Pacis ──
    { id: "1.6-E-01", subtopic: "The Ara Pacis", q: "What does Ara Pacis mean?", answers: ["the Altar of Peace", "the Altar of the Gods", "the Altar of Augustus", "the Altar of Rome"] },
    { id: "1.6-E-02", subtopic: "The Ara Pacis", q: "Who commissioned the Ara Pacis?", answers: ["the Senate", "Augustus himself", "Augustus's wife Livia", "the people of Rome"] },
    { id: "1.6-E-03", subtopic: "The Ara Pacis", q: "When was it commissioned?", answers: ["13 BC", "9 BC", "31 BC", "27 BC"] },
    { id: "1.6-E-04", subtopic: "The Ara Pacis", q: "When was it completed?", answers: ["9 BC", "13 BC", "27 BC", "AD 14"] },
    { id: "1.6-E-05", subtopic: "The Ara Pacis", q: "It was built to honour Augustus's return from where?", answers: ["Hispania and Gaul", "Egypt and Greece", "Parthia and Syria", "Britain and Germania"] },
    { id: "1.6-E-06", subtopic: "The Ara Pacis", q: "Where was the Ara Pacis originally located?", answers: ["the north-eastern Campus Martius", "the Roman Forum", "the Capitoline Hill", "outside the city walls"] },
    { id: "1.6-E-07", subtopic: "The Ara Pacis", q: "What did the Senate order to mark the dedication each year?", answers: ["an annual sacrifice by magistrates, priests, and Vestals", "a public banquet for the whole city", "a four-day festival of games and races", "a procession of all the senators on foot"] },
    { id: "1.6-E-08", subtopic: "The Ara Pacis", q: "What stood inside the enclosure wall?", answers: ["the altar itself", "a statue of Augustus", "a sacred grove of olive trees", "a hidden temple to Pax"] },
    { id: "1.6-E-09", subtopic: "The Ara Pacis", q: "What is shown on the altar itself?", answers: ["semi-nude slaves leading sacrificial beasts", "Augustus addressing the Senate", "the gods of Olympus enthroned", "the abduction of Persephone"] },
    { id: "1.6-E-10", subtopic: "The Ara Pacis", q: "What kind of scenes does the west wall carry?", answers: ["Rome's founding myths — Romulus & Remus and Aeneas", "the Augustan family in procession", "a continuous battle frieze", "decorative floral panels alone"] },
    { id: "1.6-E-11", subtopic: "The Ara Pacis", q: "On the west wall, who is the right scene most likely to show (interpretation 1)?", answers: ["Aeneas offering sacrifice with Ascanius and the Penates", "Romulus founding the city of Rome", "Augustus making a personal sacrifice", "Mars preparing to fight the Sabines"] },
    { id: "1.6-E-12", subtopic: "The Ara Pacis", q: "What is the alternative interpretation of the west right scene?", answers: ["Numa Pompilius, second king of Rome", "Tiberius receiving the standards", "Romulus making the first sacrifice", "Jupiter blessing the new city"] },
    { id: "1.6-E-13", subtopic: "The Ara Pacis", q: "What is the left scene of the west wall tenuously linked to?", answers: ["the Lupercalia — Romulus, Remus and the she-wolf", "the Saturnalia — Saturn's golden age", "the Parentalia — honouring the dead", "the Liberalia — Bacchus and his rites"] },
    { id: "1.6-E-14", subtopic: "The Ara Pacis", q: "Who is shown enthroned on weapons on the east wall (right scene)?", answers: ["the goddess Roma", "the goddess Pax", "Mars Ultor, the avenger", "Augustus deified"] },
    { id: "1.6-E-15", subtopic: "The Ara Pacis", q: "How is the well-preserved east wall goddess variously identified?", answers: ["as Tellus, Venus, or Pax", "as Hera, Athena, or Aphrodite", "as Juno, Minerva, or Vesta", "as Demeter, Persephone, or Hestia"] },
    { id: "1.6-E-16", subtopic: "The Ara Pacis", q: "What is shown around the well-preserved east goddess?", answers: ["animals, infants, and two semi-nude females (the auras)", "weapons and shields of Rome's enemies", "the gods of Olympus seated in council", "the twelve months of the Roman year"] },
    { id: "1.6-E-17", subtopic: "The Ara Pacis", q: "What does the north frieze show?", answers: ["a procession of senators and priests", "a great battle scene with cavalry", "Augustus addressing the Senate", "the abduction of the Sabine women"] },
    { id: "1.6-E-18", subtopic: "The Ara Pacis", q: "Which sacred objects are visible on the north frieze?", answers: ["a jug, an incense box, and laurel leaves", "swords, shields, and standards", "a tripod, a wreath, and a lyre", "scrolls, tablets, and a stylus"] },
    { id: "1.6-E-19", subtopic: "The Ara Pacis", q: "Why are several north-frieze figures depicted with veiled heads?", answers: ["this was traditional during Roman sacrifices", "to hide their identities from the gods", "because they were in formal mourning", "because they were captured enemies"] },
    { id: "1.6-E-20", subtopic: "The Ara Pacis", q: "Who is shown leading the procession on the south frieze?", answers: ["the imperial family — Augustus, Livia, and his heirs", "the consuls of the year in office", "the priests of Jupiter Optimus Maximus", "the Vestal Virgins, in their white robes"] },
    { id: "1.6-E-21", subtopic: "The Ara Pacis", q: "Who, besides Augustus and Livia, is shown on the south frieze?", answers: ["Agrippa, Tiberius, Lucius and Gaius Caesar", "Mark Antony and Cleopatra", "Brutus, Cassius, and Cicero", "Romulus, Remus, and Aeneas"] },
    { id: "1.6-E-22", subtopic: "The Ara Pacis", q: "What earlier Greek monument does the procession's style echo?", answers: ["the Panathenaic frieze on the Parthenon", "the Centauromachy on the Parthenon metopes", "the Amazonomachy frieze at Bassae", "the Charioteer of Delphi"] },
    { id: "1.6-E-23", subtopic: "The Ara Pacis", q: "Why might Augustus have echoed the Parthenon style?", answers: ["to claim the cultural authority of the Greek Golden Age", "because Greek sculptors were the cheapest available", "because the Senate of Rome ordered him to", "to mock the Athenian victory over the Persians"] },
    { id: "1.6-E-24", subtopic: "The Ara Pacis", q: "What single political message does the south frieze make?", answers: ["the Augustan family leads Roman religion — a dynastic claim", "the Senate, not Augustus, runs Rome", "Augustus is a humble citizen like any other", "Rome's gods support the Senate over the emperor"] },

  ];

  window.CivQuiz.topics.push({
    id: "1.6",
    title: "Myth and Symbols of Power",
    list: "civ-myth-religion",   // shared BKT vocab_list for Myth & Religion
    questions: questions
  });
})();
