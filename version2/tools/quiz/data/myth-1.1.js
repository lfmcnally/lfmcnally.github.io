// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: Topic 1.1 — The Gods
// ============================================================
// Focused on the core examinable knowledge (based on the
// revision page), but covering it thoroughly:
//   A. Key ideas
//   B. Identifying the gods (Greek and Roman together — domain
//      + iconography for every Olympian and Hades)
//   C. The Homeric Hymn to Demeter (the prescribed source)
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

    // ── SUBTOPIC A: Key ideas ──
    { id: "1.1-A-01", subtopic: "Key ideas", q: "What is polytheism?", answers: ["the belief in many gods", "the belief in one all-powerful god", "giving the gods human form and feelings", "the worship of dead ancestors"] },
    { id: "1.1-A-02", subtopic: "Key ideas", q: "What is anthropomorphism?", answers: ["giving the gods human form and human emotions", "the belief in many different gods", "worshipping the gods through animal sacrifice", "naming the gods after natural forces"] },
    { id: "1.1-A-03", subtopic: "Key ideas", q: "Why were anthropomorphic gods useful to worshippers?", answers: ["gods with human feelings could be appeased and won over", "they were much easier to carve into statues", "they did not need temples or altars built for them", "they could be worshipped without any priests"] },
    { id: "1.1-A-04", subtopic: "Key ideas", q: "Which statement best shows that the Greeks saw their gods as anthropomorphic?", answers: ["the gods felt jealousy, love, and anger just as humans did", "the gods never interfered in the lives of mortals", "the gods had no fixed shape or appearance", "the gods could not be shown in art at all"] },
    { id: "1.1-A-05", subtopic: "Key ideas", q: "Who were the Olympians?", answers: ["the twelve chief gods, believed to live on Mount Olympus", "the gods who ruled the Underworld and the dead", "the spirits of dead Greek heroes and kings", "the gods worshipped only at the site of Olympia"] },
    { id: "1.1-A-06", subtopic: "Key ideas", q: "Which of the chief gods lived in the Underworld rather than on Mount Olympus?", answers: ["Hades (Pluto)", "Hermes (Mercury)", "Ares (Mars)", "Hephaistos (Vulcan)"] },
    { id: "1.1-A-07", subtopic: "Key ideas", q: "How do we usually work out which god is shown in a source?", answers: ["by the iconography shown with them", "by how large the statue or image is", "by the inscription naming the artist", "by the kind of temple it was found in"] },
    { id: "1.1-A-08", subtopic: "Key ideas", q: "Greek religion was based mainly on which of these?", answers: ["performing the correct rituals and offerings", "holding the correct private beliefs", "studying the holy scripture of each god", "obeying a strict moral code set by priests"] },
    { id: "1.1-A-09", subtopic: "Key ideas", q: "How did a worshipper hope to win a god's favour?", answers: ["by offering sacrifices and performing the correct rituals", "by living a morally pure private life", "by reading aloud the holy texts of the god", "by avoiding all contact with the other gods"] },
    { id: "1.1-A-10", subtopic: "Key ideas", q: "What is the relationship between the Greek and Roman gods?", answers: ["they were largely the same gods, worshipped under different names", "they were completely different gods with nothing in common", "the Romans worshipped far fewer gods than the Greeks", "the Greeks copied their gods directly from the Romans"] },

    // ── SUBTOPIC B: Identifying the gods ──
    { id: "1.1-B-01", subtopic: "Identifying the gods", q: "What was Zeus (Jupiter) the god of?", answers: ["king of the gods; god of the sky and justice", "god of the sea, earthquakes, and horses", "god of the Underworld and the dead", "god of travel, trade, and messages"] },
    { id: "1.1-B-02", subtopic: "Identifying the gods", q: "A source shows a bearded god on a throne holding a thunderbolt, with an eagle nearby. Which god is this?", answers: ["Zeus (Jupiter)", "Poseidon (Neptune)", "Hades (Pluto)", "Ares (Mars)"] },
    { id: "1.1-B-03", subtopic: "Identifying the gods", q: "What was Hera (Juno) the goddess of?", answers: ["queen of the gods; goddess of marriage and childbirth", "goddess of wisdom and of tactical warfare", "goddess of the hunt, wildlife, and the moon", "goddess of the harvest and the earth's grain"] },
    { id: "1.1-B-04", subtopic: "Identifying the gods", q: "A source shows a regal goddess with a diadem and sceptre, often beside a peacock. Which goddess is this?", answers: ["Hera (Juno)", "Athena (Minerva)", "Aphrodite (Venus)", "Demeter (Ceres)"] },
    { id: "1.1-B-05", subtopic: "Identifying the gods", q: "What was Poseidon (Neptune) the god of?", answers: ["the sea, earthquakes, and horses", "the sky, justice, and fate", "the Underworld and the dead", "metalworking and fire"] },
    { id: "1.1-B-06", subtopic: "Identifying the gods", q: "A source shows a bearded god holding a trident and linked with horses. Which god is this?", answers: ["Poseidon (Neptune)", "Zeus (Jupiter)", "Hades (Pluto)", "Hermes (Mercury)"] },
    { id: "1.1-B-07", subtopic: "Identifying the gods", q: "What was Demeter (Ceres) the goddess of?", answers: ["agriculture and the harvest", "love and beauty", "wisdom and tactical warfare", "the hunt and the moon"] },
    { id: "1.1-B-08", subtopic: "Identifying the gods", q: "A source shows a goddess holding a sheaf of wheat, wearing a diadem. Which goddess is this?", answers: ["Demeter (Ceres)", "Hera (Juno)", "Artemis (Diana)", "Aphrodite (Venus)"] },
    { id: "1.1-B-09", subtopic: "Identifying the gods", q: "What was Athena (Minerva) the goddess of?", answers: ["wisdom and warfare (tactics and strategy)", "love, beauty, and desire", "the hearth and the family home", "the hunt, wildlife, and the moon"] },
    { id: "1.1-B-10", subtopic: "Identifying the gods", q: "A source shows a goddess in a helmet carrying a spear, with an owl beside her. Which goddess is this?", answers: ["Athena (Minerva)", "Artemis (Diana)", "Hera (Juno)", "Aphrodite (Venus)"] },
    { id: "1.1-B-11", subtopic: "Identifying the gods", q: "What was Apollo the god of?", answers: ["music, prophecy, and archery", "the sea and storms", "war and its violence", "the hearth and the home"] },
    { id: "1.1-B-12", subtopic: "Identifying the gods", q: "A source shows a youthful god holding a bow and a lyre. Which god is this?", answers: ["Apollo", "Ares (Mars)", "Hermes (Mercury)", "Hephaistos (Vulcan)"] },
    { id: "1.1-B-13", subtopic: "Identifying the gods", q: "What was Artemis (Diana) the goddess of?", answers: ["hunting and wildlife; linked to the moon", "love, beauty, and desire", "marriage, women, and childbirth", "wisdom and tactical warfare"] },
    { id: "1.1-B-14", subtopic: "Identifying the gods", q: "A source shows a goddess with a bow and arrow, linked to the moon. Which goddess is this?", answers: ["Artemis (Diana)", "Athena (Minerva)", "Hera (Juno)", "Demeter (Ceres)"] },
    { id: "1.1-B-15", subtopic: "Identifying the gods", q: "What was Aphrodite (Venus) the goddess of?", answers: ["love and beauty", "wisdom and warfare", "the hunt and the moon", "the harvest and grain"] },
    { id: "1.1-B-16", subtopic: "Identifying the gods", q: "A source shows a goddess rising from a sea shell, accompanied by Eros (Cupid). Which goddess is this?", answers: ["Aphrodite (Venus)", "Hera (Juno)", "Artemis (Diana)", "Athena (Minerva)"] },
    { id: "1.1-B-17", subtopic: "Identifying the gods", q: "What was Ares (Mars) the god of?", answers: ["war — its violence and aggression", "the sea and earthquakes", "music and prophecy", "travel and trade"] },
    { id: "1.1-B-18", subtopic: "Identifying the gods", q: "A source shows a god in full armour depicted as a brutal warrior in battle. Which god is this?", answers: ["Ares (Mars)", "Athena (Minerva)", "Zeus (Jupiter)", "Hephaistos (Vulcan)"] },
    { id: "1.1-B-19", subtopic: "Identifying the gods", q: "What was Hephaistos (Vulcan) the god of?", answers: ["metalworking, fire, and craftsmen", "the sky, justice, and fate", "the hunt and the moon", "love and beauty"] },
    { id: "1.1-B-20", subtopic: "Identifying the gods", q: "A source shows a god holding a blacksmith's hammer who walks with a limp. Which god is this?", answers: ["Hephaistos (Vulcan)", "Ares (Mars)", "Zeus (Jupiter)", "Hermes (Mercury)"] },
    { id: "1.1-B-21", subtopic: "Identifying the gods", q: "What was Hermes (Mercury) the god of?", answers: ["travel and trade; messenger of the gods", "war, battle, and its violence", "the sea, storms, and earthquakes", "metalworking, fire, and craft"] },
    { id: "1.1-B-22", subtopic: "Identifying the gods", q: "A source shows a god with winged sandals and a traveller's cap, carrying a caduceus (staff). Which god is this?", answers: ["Hermes (Mercury)", "Apollo", "Ares (Mars)", "Poseidon (Neptune)"] },
    { id: "1.1-B-23", subtopic: "Identifying the gods", q: "Which god acted as the psychopomp — the guide of souls down to the Underworld?", answers: ["Hermes (Mercury)", "Apollo", "Ares (Mars)", "Hephaistos (Vulcan)"] },
    { id: "1.1-B-24", subtopic: "Identifying the gods", q: "What was Hestia (Vesta) the goddess of?", answers: ["the hearth and the home", "the hunt and the moon", "love and beauty", "agriculture and the harvest"] },
    { id: "1.1-B-25", subtopic: "Identifying the gods", q: "A source shows a modestly veiled goddess and is rare, as she was seldom depicted. Which goddess is this?", answers: ["Hestia (Vesta)", "Demeter (Ceres)", "Hera (Juno)", "Artemis (Diana)"] },
    { id: "1.1-B-26", subtopic: "Identifying the gods", q: "What was Dionysus (Bacchus) the god of?", answers: ["wine and theatre", "the sea and storms", "the hearth and the home", "wisdom and warfare"] },
    { id: "1.1-B-27", subtopic: "Identifying the gods", q: "A source shows a god with a thyrsus and vines, surrounded by satyrs and maenads. Which god is this?", answers: ["Dionysus (Bacchus)", "Apollo", "Hermes (Mercury)", "Ares (Mars)"] },
    { id: "1.1-B-28", subtopic: "Identifying the gods", q: "What was Hades (Pluto) the god of?", answers: ["the Underworld; ruler of the dead", "the sea, earthquakes, and horses", "the sky, justice, and fate", "travel, trade, and messages"] },
    { id: "1.1-B-29", subtopic: "Identifying the gods", q: "A source shows a god holding a cornucopia, depicted alongside Persephone. Which god is this?", answers: ["Hades (Pluto)", "Zeus (Jupiter)", "Poseidon (Neptune)", "Dionysus (Bacchus)"] },
    { id: "1.1-B-30", subtopic: "Identifying the gods", q: "Which animal is most associated with Zeus (Jupiter)?", answers: ["the eagle", "the owl", "the peacock", "the deer"] },
    { id: "1.1-B-31", subtopic: "Identifying the gods", q: "Which animal is most associated with Athena (Minerva)?", answers: ["the owl", "the eagle", "the peacock", "the horse"] },
    { id: "1.1-B-32", subtopic: "Identifying the gods", q: "Which animal is most associated with Hera (Juno)?", answers: ["the peacock", "the owl", "the eagle", "the deer"] },
    { id: "1.1-B-33", subtopic: "Identifying the gods", q: "Which goddess was the patron of Athens, honoured by the Parthenon?", answers: ["Athena (Minerva)", "Hera (Juno)", "Aphrodite (Venus)", "Artemis (Diana)"] },

    // ── SUBTOPIC C: The Homeric Hymn to Demeter ──
    { id: "1.1-C-01", subtopic: "The Homeric Hymn to Demeter", q: "Who is the Homeric Hymn to Demeter attributed to?", answers: ["Homer", "Ovid", "Virgil", "Pausanias"] },
    { id: "1.1-C-02", subtopic: "The Homeric Hymn to Demeter", q: "Who abducts Persephone at the start of the Hymn, and where is she taken?", answers: ["Hades, who takes her to the Underworld", "Hermes, who takes her to Mount Olympus", "Zeus, who takes her up to the sky", "Apollo, who takes her to Delphi"] },
    { id: "1.1-C-03", subtopic: "The Homeric Hymn to Demeter", q: "How does Demeter react to the loss of Persephone?", answers: ["she grieves, refuses to eat or wash, and wanders the earth", "she begs Zeus to punish Hades for the abduction", "she floods the whole earth in her terrible anger", "she sends a deadly plague upon all of humanity"] },
    { id: "1.1-C-04", subtopic: "The Homeric Hymn to Demeter", q: "Where does Demeter go, disguised as an old woman, during her search?", answers: ["Eleusis, where the family of King Keleos takes her in", "Athens, where she demands a great temple", "Olympia, where she confronts Zeus directly", "Delphi, where she consults Apollo's oracle"] },
    { id: "1.1-C-05", subtopic: "The Homeric Hymn to Demeter", q: "What does Demeter demand be built for her at Eleusis?", answers: ["a temple and an altar", "a palace and gardens", "a stadium for games", "a sacred grove of trees"] },
    { id: "1.1-C-06", subtopic: "The Homeric Hymn to Demeter", q: "What does Demeter do to the earth in her grief?", answers: ["she causes a famine, so that no crops will grow", "she covers the earth in permanent winter snow", "she destroys the entrance to the Underworld", "she withers the sacred groves of the gods"] },
    { id: "1.1-C-07", subtopic: "The Homeric Hymn to Demeter", q: "Why does Zeus finally intervene to help Demeter?", answers: ["if humans die out, the gods will lose their sacrifices", "he feels sorry for his grieving sister Demeter", "he fears Hades is becoming too powerful below", "the other Olympians order him to take action"] },
    { id: "1.1-C-08", subtopic: "The Homeric Hymn to Demeter", q: "Which god does Zeus send to fetch Persephone from the Underworld?", answers: ["Hermes", "Apollo", "Ares", "Hephaistos"] },
    { id: "1.1-C-09", subtopic: "The Homeric Hymn to Demeter", q: "What trick does Hades use to make sure Persephone must return to him?", answers: ["he gives her a pomegranate seed to eat", "he makes her swear an oath by the Styx", "he gives her a ring that binds her to him", "he hides her name in the book of fate"] },
    { id: "1.1-C-10", subtopic: "The Homeric Hymn to Demeter", q: "What is the arrangement for Persephone once the trick is discovered?", answers: ["one third of the year below ground, two thirds above", "half the year below ground and half above", "she must stay in the Underworld for ever", "she returns to the surface only once in ten years"] },
    { id: "1.1-C-11", subtopic: "The Homeric Hymn to Demeter", q: "What feature of the natural world does the myth explain?", answers: ["the cycle of the seasons", "the movement of the sun across the sky", "the changing phases of the moon", "the flooding of the rivers each year"] },
    { id: "1.1-C-12", subtopic: "The Homeric Hymn to Demeter", q: "What were the Eleusinian Mysteries, founded by Demeter at Eleusis?", answers: ["secret rites that promised initiates a blessed afterlife", "yearly games held in honour of the goddess", "a festival of the dead held every autumn", "a public sacrifice of one hundred oxen"] },
    { id: "1.1-C-13", subtopic: "The Homeric Hymn to Demeter", q: "Why does Demeter establish the Mysteries at Eleusis?", answers: ["as a gift to those who sheltered her in her grief", "as a punishment for those who refused to help her", "as a way of thanking Zeus for Persephone's return", "as a replacement for the sacrifices she no longer wanted"] },
    { id: "1.1-C-14", subtopic: "The Homeric Hymn to Demeter", q: "How does the Hymn show the gods to be anthropomorphic?", answers: ["Demeter feels human grief — she stops eating and washing", "Demeter uses her divine power to cause a great famine", "Hades rules the Underworld as its all-powerful king", "Zeus sends down Hermes to act as his messenger"] },
    { id: "1.1-C-15", subtopic: "The Homeric Hymn to Demeter", q: "What does the Hymn show about the relationship between gods and humans?", answers: ["the gods and humans depend on each other", "the gods are indifferent to human suffering", "humans cannot influence the gods at all", "the gods always act in humanity's interest"] },
    { id: "1.1-C-16", subtopic: "The Homeric Hymn to Demeter", q: "Why is the Homeric Hymn to Demeter an important source?", answers: ["it shows Greek beliefs about the gods and explains the seasons", "it is the only source for the founding of Athens", "it records the rules of the Olympic Games", "it lists the names of all twelve Olympians"] },
    { id: "1.1-C-17", subtopic: "The Homeric Hymn to Demeter", q: "Whose daughter is Persephone?", answers: ["Demeter's — her father is Zeus", "Hera's — her father is Zeus", "Hestia's — her father is Poseidon", "Hecate's — her father is Hades"] },
    { id: "1.1-C-18", subtopic: "The Homeric Hymn to Demeter", q: "What is Persephone doing when Hades seizes her?", answers: ["picking flowers in a meadow", "fetching water from a spring", "weaving cloth with her mother", "dancing at a festival"] },
    { id: "1.1-C-19", subtopic: "The Homeric Hymn to Demeter", q: "For how long does Demeter wander the earth in grief, refusing to eat or wash?", answers: ["nine days", "three days", "a whole year", "forty days"] },
    { id: "1.1-C-20", subtopic: "The Homeric Hymn to Demeter", q: "What disguise does Demeter take on when she reaches Eleusis?", answers: ["an old woman", "a young serving-girl", "a wandering beggar-man", "a temple priestess"] },
    { id: "1.1-C-21", subtopic: "The Homeric Hymn to Demeter", q: "Which royal household takes Demeter in at Eleusis?", answers: ["the family of King Keleos", "the family of King Minos", "the family of King Priam", "the family of King Pelias"] },
    { id: "1.1-C-22", subtopic: "The Homeric Hymn to Demeter", q: "What kind of text is the Homeric Hymn to Demeter?", answers: ["poetry", "history", "tragedy", "philosophy"] },
    { id: "1.1-C-23", subtopic: "The Homeric Hymn to Demeter", q: "Which lines of the Hymn are the prescribed source?", answers: ["lines 1-104 and 301-474", "lines 1-200 and 250-474", "lines 50-150 and 400-500", "lines 1-104 and 200-474"] },
    { id: "1.1-C-24", subtopic: "The Homeric Hymn to Demeter", q: "When was the Homeric Hymn to Demeter probably composed?", answers: ["the 7th-6th century BC", "the 5th century AD", "the 1st century BC", "the 12th century BC"] },
    { id: "1.1-C-25", subtopic: "The Homeric Hymn to Demeter", q: "What threatens the human race while Demeter withholds the harvest?", answers: ["starvation and destruction", "a great flood from Zeus", "a plague sent by Apollo", "endless war among themselves"] },
    { id: "1.1-C-26", subtopic: "The Homeric Hymn to Demeter", q: "What rule means Persephone must return to the Underworld?", answers: ["anyone who eats there must come back to it", "anyone who eats there forgets their past", "anyone who eats there can never speak again", "anyone who eats there becomes a god"] },
    { id: "1.1-C-27", subtopic: "The Homeric Hymn to Demeter", q: "With whom does Persephone spend two thirds of the year?", answers: ["Demeter and the other gods above", "Hades in the Underworld below", "Hermes out on his travels", "Zeus on Mount Olympus"] },
    { id: "1.1-C-28", subtopic: "The Homeric Hymn to Demeter", q: "When Persephone is below with Hades, what happens to the earth?", answers: ["it becomes barren and cold", "it blooms with new crops", "it is swallowed by the sea", "it stays exactly the same"] },
    { id: "1.1-C-29", subtopic: "The Homeric Hymn to Demeter", q: "What does Demeter do to the earth once Persephone returns to her?", answers: ["she lets the crops grow again", "she keeps it barren out of spite", "she abandons it for Olympus", "she floods the fertile plains"] },
    { id: "1.1-C-30", subtopic: "The Homeric Hymn to Demeter", q: "What did initiation into the Eleusinian Mysteries promise?", answers: ["a blessed afterlife", "victory in war", "wealth and long life", "a good harvest each year"] },
    { id: "1.1-C-31", subtopic: "The Homeric Hymn to Demeter", q: "Why do we know so little about what happened in the Eleusinian Mysteries?", answers: ["initiates were sworn to keep them secret", "they were never written down at all", "the Romans later destroyed them", "only Demeter herself knew them"] },
    { id: "1.1-C-32", subtopic: "The Homeric Hymn to Demeter", q: "Which detail best shows the gods are not fully in control?", answers: ["Hades acts on his own and Zeus must negotiate", "Zeus commands the famine to end at once", "Demeter instantly obeys Zeus's orders", "the gods agree on everything from the start"] },
    { id: "1.1-C-33", subtopic: "The Homeric Hymn to Demeter", q: "Besides a temple and altar, what does Demeter establish at Eleusis?", answers: ["the Eleusinian Mysteries", "the Olympic Games", "an oracle of Apollo", "a festival of Dionysus"] },

  ];

  window.CivQuiz.topics.push({
    id: "1.1",
    title: "The Gods",
    list: "civ-myth-religion",   // shared BKT vocab_list for Myth & Religion
    questions: questions
  });
})();
