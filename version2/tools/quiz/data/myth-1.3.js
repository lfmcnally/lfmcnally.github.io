// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: Topic 1.3 — Temples
// ============================================================
// Focused on the core examinable knowledge (based on the
// revision page), but covering it thoroughly:
//   A. Sanctuaries & temple design (Greek and Roman; the orders)
//   B. The Parthenon (prescribed source)
//   C. The Temple of Zeus at Olympia (prescribed source)
//   D. Roman temples: Portunus & the Pantheon (prescribed sources)
//   E. Priests & religious officials (Greek and Roman)
//   F. Blood sacrifice (Greek and Roman)
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

    // ── SUBTOPIC A: Sanctuaries & temple design ──
    { id: "1.3-A-01", subtopic: "Sanctuaries & temple design", q: "What was a Greek sanctuary?", answers: ["a holy area with a temple and altar, walled off from the city", "a single room inside the temple kept for the priests", "the open public square at the centre of the city", "the tomb of a hero or king"] },
    { id: "1.3-A-02", subtopic: "Sanctuaries & temple design", q: "What was the primary purpose of a Greek temple?", answers: ["to house the cult statue of the god", "to hold the sacrifices indoors", "to seat worshippers during prayer", "to store the city's supply of grain"] },
    { id: "1.3-A-03", subtopic: "Sanctuaries & temple design", q: "Who was allowed inside a Greek temple?", answers: ["only the priests", "only adult male citizens", "any worshipper who wished", "only the city's officials"] },
    { id: "1.3-A-04", subtopic: "Sanctuaries & temple design", q: "Where did sacrifice take place at a sanctuary?", answers: ["at the altar, outside the temple", "inside the temple, before the statue", "in the priest's private house", "at the gates of the city"] },
    { id: "1.3-A-05", subtopic: "Sanctuaries & temple design", q: "What caused 'pollution' that could lose the gods' favour?", answers: ["contact with the dead, a newborn, or homicide", "eating meat on the day before a festival", "entering a sanctuary without an offering", "speaking aloud during a sacrifice"] },
    { id: "1.3-A-06", subtopic: "Sanctuaries & temple design", q: "How was religious pollution removed?", answers: ["by washing with water", "by paying a fine to the priest", "by a second blood sacrifice", "by a long period of fasting"] },
    { id: "1.3-A-07", subtopic: "Sanctuaries & temple design", q: "What was the cella (naos) of a Greek temple?", answers: ["the main room housing the cult statue", "the rear room storing the treasures", "the colonnade around the outside", "the triangular space at each end"] },
    { id: "1.3-A-08", subtopic: "Sanctuaries & temple design", q: "What was the opisthodomos?", answers: ["a rear room storing treasures and offerings", "the main room with the cult statue", "the porch at the front entrance", "the raised platform of the altar"] },
    { id: "1.3-A-09", subtopic: "Sanctuaries & temple design", q: "How was a Greek temple typically orientated?", answers: ["east to west", "north to south", "facing the city centre", "facing the rising moon"] },
    { id: "1.3-A-10", subtopic: "Sanctuaries & temple design", q: "What is a pediment?", answers: ["the triangular space at each end of a temple", "the continuous strip running around it", "the rear room storing the treasures", "the stepped base under the columns"] },
    { id: "1.3-A-11", subtopic: "Sanctuaries & temple design", q: "What challenge did the pediment's shape create for sculptors?", answers: ["figures had to shrink towards the narrow corners", "the surface was too smooth to carve at all", "it could never be seen clearly from below", "it left no room for any figures at all"] },
    { id: "1.3-A-12", subtopic: "Sanctuaries & temple design", q: "What is an Ionic frieze?", answers: ["a continuous strip running around the temple", "a strip divided into square metopes", "the triangular space at each end", "the stepped base of the building"] },
    { id: "1.3-A-13", subtopic: "Sanctuaries & temple design", q: "What is a Doric frieze?", answers: ["a strip divided into squares called metopes", "a single continuous strip of carving", "the triangular space at the ends", "a row of free-standing columns"] },
    { id: "1.3-A-14", subtopic: "Sanctuaries & temple design", q: "Why might an architect choose a Doric frieze over an Ionic one?", answers: ["to show several separate scenes or episodes", "to tell one single continuous story", "because it was far cheaper to carve", "because it needed no sculptor at all"] },
    { id: "1.3-A-15", subtopic: "Sanctuaries & temple design", q: "How was a Roman temple raised and entered?", answers: ["on a podium, with steps only at the front", "on steps running around all four sides", "on a flat foundation at ground level", "on a low circular platform"] },
    { id: "1.3-A-16", subtopic: "Sanctuaries & temple design", q: "What is a semi-engaged column?", answers: ["a column half-embedded in the wall", "a column built from two stones", "a column with no base or capital", "a free-standing column at the front"] },
    { id: "1.3-A-17", subtopic: "Sanctuaries & temple design", q: "Roman temple design combined which two styles?", answers: ["Etruscan and Greek", "Greek and Egyptian", "Etruscan and Persian", "Greek and Carthaginian"] },
    { id: "1.3-A-18", subtopic: "Sanctuaries & temple design", q: "Which architectural order has the plainest capital?", answers: ["Doric", "Ionic", "Corinthian", "Tuscan"] },
    { id: "1.3-A-19", subtopic: "Sanctuaries & temple design", q: "Which order is identified by its scrolled volutes?", answers: ["Ionic", "Doric", "Corinthian", "Etruscan"] },
    { id: "1.3-A-20", subtopic: "Sanctuaries & temple design", q: "Which order is the most ornate, decorated with acanthus leaves?", answers: ["Corinthian", "Doric", "Ionic", "Tuscan"] },

    // ── SUBTOPIC B: The Parthenon ──
    { id: "1.3-B-01", subtopic: "The Parthenon", q: "Where, and to which goddess, was the Parthenon dedicated?", answers: ["Athens, to Athena", "Olympia, to Zeus", "Delphi, to Apollo", "Athens, to Poseidon"] },
    { id: "1.3-B-02", subtopic: "The Parthenon", q: "Who commissioned the Parthenon?", answers: ["Pericles", "Phidias", "Hadrian", "Iktinos"] },
    { id: "1.3-B-03", subtopic: "The Parthenon", q: "What material was the Parthenon built from?", answers: ["Pentelic marble", "local limestone", "tufa and plaster", "brick and concrete"] },
    { id: "1.3-B-04", subtopic: "The Parthenon", q: "When was the Parthenon built?", answers: ["447–432 BC", "472–456 BC", "120–80 BC", "AD 118–125"] },
    { id: "1.3-B-05", subtopic: "The Parthenon", q: "What was unusual about how the Parthenon combined the orders?", answers: ["a Doric exterior with an inner Ionic frieze", "an Ionic exterior with a Doric frieze", "a fully Corinthian design throughout", "no sculptural decoration at all"] },
    { id: "1.3-B-06", subtopic: "The Parthenon", q: "Besides a temple, what else did the Parthenon function as?", answers: ["a treasury", "a law court", "an assembly hall", "a grain store"] },
    { id: "1.3-B-07", subtopic: "The Parthenon", q: "What had left the Acropolis in ruins before the Parthenon was built?", answers: ["the Persians sacked Athens in 480 BC", "a great earthquake had toppled it", "a fire broke out during a festival", "the Spartans had burned it down"] },
    { id: "1.3-B-08", subtopic: "The Parthenon", q: "Whose money largely funded the Parthenon?", answers: ["the Delian League treasury, moved to Athens", "Pericles's own private fortune", "yearly tribute paid by Persia", "the temple's own stored offerings"] },
    { id: "1.3-B-09", subtopic: "The Parthenon", q: "What was shown on the eastern pediment?", answers: ["the birth of Athena from Zeus's head", "the contest of Athena and Poseidon", "the Panathenaic procession", "the twelve labours of Heracles"] },
    { id: "1.3-B-10", subtopic: "The Parthenon", q: "What was shown on the western pediment?", answers: ["the contest of Athena and Poseidon for Athens", "the birth of Athena from Zeus", "the battle of Lapiths and Centaurs", "the Panathenaic procession"] },
    { id: "1.3-B-11", subtopic: "The Parthenon", q: "Whom do we rely on for the subjects of the fragmented pediments?", answers: ["Pausanias", "Cassius Dio", "Homer", "Pericles"] },
    { id: "1.3-B-12", subtopic: "The Parthenon", q: "What did the ninety-two outer Doric metopes show?", answers: ["four mythological battles", "the twelve labours of Heracles", "the Panathenaic procession", "the birth of the goddess Athena"] },
    { id: "1.3-B-13", subtopic: "The Parthenon", q: "What common theme did the metope battles represent?", answers: ["the victory of civilisation over barbarism", "the founding of the Olympic Games", "the power of the god of the sea", "the punishment of proud mortals"] },
    { id: "1.3-B-14", subtopic: "The Parthenon", q: "What did the inner Ionic frieze depict?", answers: ["the Panathenaic procession", "the four mythological battles", "the birth of the goddess Athena", "the contest with Poseidon"] },
    { id: "1.3-B-15", subtopic: "The Parthenon", q: "Who designed the cult statue of Athena?", answers: ["Phidias", "Iktinos", "Libon", "Kallikrates"] },
    { id: "1.3-B-16", subtopic: "The Parthenon", q: "What does 'chryselephantine' mean?", answers: ["made of gold and ivory on a wooden frame", "carved from a single block of marble", "cast from bronze and coated in gold", "made of painted and gilded timber"] },
    { id: "1.3-B-17", subtopic: "The Parthenon", q: "On the Athena statue, what did the gold and ivory represent?", answers: ["ivory her skin, gold her clothing", "gold her skin, ivory her armour", "ivory her eyes, gold her hair", "gold her shield, ivory her spear"] },
    { id: "1.3-B-18", subtopic: "The Parthenon", q: "Why could parts of the Athena cult statue be removed?", answers: ["the gold could be melted down when money was needed", "the ivory had to be cleaned every year", "the statue was carried in a procession", "the parts were shared between temples"] },
    { id: "1.3-B-19", subtopic: "The Parthenon", q: "Roughly how tall was the cult statue of Athena?", answers: ["about 13 metres", "about 3 metres", "about 7 metres", "about 30 metres"] },
    { id: "1.3-B-20", subtopic: "The Parthenon", q: "What did Athena hold in her hand on the cult statue?", answers: ["a statue of Victory", "a thunderbolt", "an olive branch", "a model of the temple"] },

    // ── SUBTOPIC C: The Temple of Zeus at Olympia ──
    { id: "1.3-C-01", subtopic: "The Temple of Zeus at Olympia", q: "To which god was the Temple of Zeus at Olympia dedicated?", answers: ["Zeus", "Hera", "Apollo", "Heracles"] },
    { id: "1.3-C-02", subtopic: "The Temple of Zeus at Olympia", q: "What material was the Temple of Zeus built from?", answers: ["local limestone", "Pentelic marble", "brick and concrete", "solid bronze"] },
    { id: "1.3-C-03", subtopic: "The Temple of Zeus at Olympia", q: "Who was the architect of the Temple of Zeus?", answers: ["Libon", "Iktinos", "Phidias", "Hadrian"] },
    { id: "1.3-C-04", subtopic: "The Temple of Zeus at Olympia", q: "In which sacred area did the Temple of Zeus stand?", answers: ["the Altis", "the Campus Martius", "the Forum Boarium", "the Acropolis"] },
    { id: "1.3-C-05", subtopic: "The Temple of Zeus at Olympia", q: "What is notable about the Altar of Zeus compared with the temple?", answers: ["it was about 200 years older than the temple", "it stood inside the temple cella", "it was carved from white marble", "it was smaller than a house"] },
    { id: "1.3-C-06", subtopic: "The Temple of Zeus at Olympia", q: "What was the Altar of Zeus made from, according to Pausanias?", answers: ["the ash of sacrificed thigh bones", "great blocks of white marble", "bronze melted from old weapons", "clay dug from the river bank"] },
    { id: "1.3-C-07", subtopic: "The Temple of Zeus at Olympia", q: "What does the altar predating the temple tell us about Greek worship?", answers: ["the altar, not the temple, was the essential element", "temples were always built before altars", "sacrifice mattered little to the Greeks", "the gods preferred grand buildings"] },
    { id: "1.3-C-08", subtopic: "The Temple of Zeus at Olympia", q: "What was the main sacrifice at the Olympic Games?", answers: ["a hecatomb of 100 oxen", "a single prize white bull", "a pig, a sheep, and an ox", "a hundred wild goats"] },
    { id: "1.3-C-09", subtopic: "The Temple of Zeus at Olympia", q: "What was shown on the eastern pediment of the Temple of Zeus?", answers: ["the chariot race of Oenomaus and Pelops", "the battle of Lapiths and Centaurs", "the birth of the goddess Athena", "the twelve labours of Heracles"] },
    { id: "1.3-C-10", subtopic: "The Temple of Zeus at Olympia", q: "Who stood at the centre of the eastern pediment, as judge?", answers: ["Zeus", "Apollo", "Pelops", "Heracles"] },
    { id: "1.3-C-11", subtopic: "The Temple of Zeus at Olympia", q: "What was shown on the western pediment?", answers: ["the battle of Lapiths and Centaurs", "the chariot race of Pelops", "the birth of the goddess Athena", "the Panathenaic procession"] },
    { id: "1.3-C-12", subtopic: "The Temple of Zeus at Olympia", q: "Who stood at the centre of the western pediment?", answers: ["Apollo", "Zeus", "Heracles", "Poseidon"] },
    { id: "1.3-C-13", subtopic: "The Temple of Zeus at Olympia", q: "What was sculpted on the twelve metopes?", answers: ["the twelve labours of Heracles", "the four mythological battles", "the Panathenaic procession", "the chariot race of Pelops"] },
    { id: "1.3-C-14", subtopic: "The Temple of Zeus at Olympia", q: "Who designed the cult statue of Zeus?", answers: ["Phidias", "Libon", "Iktinos", "Pausanias"] },
    { id: "1.3-C-15", subtopic: "The Temple of Zeus at Olympia", q: "How was the cult statue of Zeus shown?", answers: ["seated on a throne", "standing fully armed", "riding in a chariot", "reclining on a couch"] },
    { id: "1.3-C-16", subtopic: "The Temple of Zeus at Olympia", q: "What stood in front of the statue of Zeus, to maintain the ivory?", answers: ["a pool of olive oil", "a basin of fresh water", "a brazier of hot coals", "a heap of barley grain"] },

    // ── SUBTOPIC D: Roman temples — Portunus & the Pantheon ──
    { id: "1.3-D-01", subtopic: "Roman temples: Portunus & Pantheon", q: "To which god is the Temple of Portunus dedicated?", answers: ["Portunus, god of harbours", "Fortuna, goddess of luck", "Hercules, the hero-god", "Mars, god of war"] },
    { id: "1.3-D-02", subtopic: "Roman temples: Portunus & Pantheon", q: "Why is the Temple of Portunus a useful source?", answers: ["it is one of the best-preserved typical Roman temples", "it is the largest temple in all of Rome", "it is the oldest building in Italy", "it was designed by a famous Greek"] },
    { id: "1.3-D-03", subtopic: "Roman temples: Portunus & Pantheon", q: "What architectural order is the Temple of Portunus?", answers: ["Ionic", "Doric", "Corinthian", "Tuscan"] },
    { id: "1.3-D-04", subtopic: "Roman temples: Portunus & Pantheon", q: "How does the Temple of Portunus show Etruscan influence?", answers: ["it stands on a podium with steps only at the front", "it has a great circular domed roof over it", "it is built entirely of solid white marble", "it carries sculpted friezes on all four sides"] },
    { id: "1.3-D-05", subtopic: "Roman temples: Portunus & Pantheon", q: "How does the Temple of Portunus show Greek influence?", answers: ["it has a porch with free-standing columns", "it has a tall front-stepped podium", "it has semi-engaged side columns", "it has an oculus in the roof"] },
    { id: "1.3-D-06", subtopic: "Roman temples: Portunus & Pantheon", q: "Where does the Temple of Portunus stand?", answers: ["the Forum Boarium, by the Tiber", "the Campus Martius", "the centre of the Roman Forum", "on top of the Aventine Hill"] },
    { id: "1.3-D-07", subtopic: "Roman temples: Portunus & Pantheon", q: "Who commissioned the Pantheon as it now stands?", answers: ["Hadrian", "Augustus", "Agrippa", "Trajan"] },
    { id: "1.3-D-08", subtopic: "Roman temples: Portunus & Pantheon", q: "Who built the original Pantheon, later destroyed by fire?", answers: ["Marcus Agrippa", "the emperor Hadrian", "the historian Cassius Dio", "the general Pompey"] },
    { id: "1.3-D-09", subtopic: "Roman temples: Portunus & Pantheon", q: "What does the name 'Pantheon' mean?", answers: ["'all gods'", "'house of Zeus'", "'temple of victory'", "'field of Mars'"] },
    { id: "1.3-D-10", subtopic: "Roman temples: Portunus & Pantheon", q: "What material made the Pantheon's huge interior possible?", answers: ["concrete, with brick and marble", "limestone and plaster", "tufa and timber beams", "great blocks of solid marble"] },
    { id: "1.3-D-11", subtopic: "Roman temples: Portunus & Pantheon", q: "What architectural order is the Pantheon?", answers: ["Corinthian", "Doric", "Ionic", "Tuscan"] },
    { id: "1.3-D-12", subtopic: "Roman temples: Portunus & Pantheon", q: "What is the Pantheon's most famous feature?", answers: ["a rotunda capped by a dome", "a podium with front steps", "a continuous Ionic frieze", "an altar built of ash"] },
    { id: "1.3-D-13", subtopic: "Roman temples: Portunus & Pantheon", q: "What is the oculus, and what was it for?", answers: ["an opening at the top of the dome, the only light source", "the porch of columns at the front entrance", "the circular outer wall of the building", "the platform on which the statues stood"] },
    { id: "1.3-D-14", subtopic: "Roman temples: Portunus & Pantheon", q: "Why is the Pantheon's dedication debated?", answers: ["even ancient writers like Cassius Dio were unsure", "its founding inscription was destroyed", "no ancient records of it survive at all", "the building was never actually finished"] },
    { id: "1.3-D-15", subtopic: "Roman temples: Portunus & Pantheon", q: "Why did Hadrian restore Agrippa's original inscription?", answers: ["it linked him to Augustus and showed his piety", "he disliked taking any credit at all", "Roman law required keeping the old name", "Agrippa's family had paid for the rebuild"] },
    { id: "1.3-D-16", subtopic: "Roman temples: Portunus & Pantheon", q: "Where does the Pantheon stand?", answers: ["the Campus Martius", "the Forum Boarium", "the Roman Forum", "the Aventine Hill"] },
    { id: "1.3-D-17", subtopic: "Roman temples: Portunus & Pantheon", q: "How does the Pantheon differ from a typical Roman temple?", answers: ["it has a domed circular rotunda, not a rectangular cella", "it has no podium or any front steps at all", "it carries sculpted friezes around every side", "it has no columns standing anywhere on it"] },

    // ── SUBTOPIC E: Priests & religious officials ──
    { id: "1.3-E-01", subtopic: "Priests & religious officials", q: "What was a Greek priest (hiereus) mainly responsible for?", answers: ["performing the correct ritual and maintaining the temple", "preaching a strict moral code to the people", "caring for the city's poor and sick", "teaching the holy scripture of the god"] },
    { id: "1.3-E-02", subtopic: "Priests & religious officials", q: "What kind of role was the Greek priesthood?", answers: ["a temporary civic role needing no training", "a lifelong, highly trained profession", "a hereditary noble title", "a paid, full-time occupation"] },
    { id: "1.3-E-03", subtopic: "Priests & religious officials", q: "What was a mantis?", answers: ["a soothsayer who read omens", "a priest dedicated to Zeus", "a temple treasurer", "an assistant at sacrifices"] },
    { id: "1.3-E-04", subtopic: "Priests & religious officials", q: "How did a mantis predict the future?", answers: ["by reading entrails or the flight of birds", "by interpreting people's dreams", "by casting lots with marked stones", "by studying the night-time stars"] },
    { id: "1.3-E-05", subtopic: "Priests & religious officials", q: "Why would a mantis accompany an army?", answers: ["to read the omens before battle", "to lead the soldiers in prayer", "to bury the war dead", "to carry the god's statue"] },
    { id: "1.3-E-06", subtopic: "Priests & religious officials", q: "What was the pax deorum?", answers: ["the 'peace of the gods' — Rome's bond with the gods", "a great yearly Roman festival of peace", "a sworn treaty agreed between the priests", "the truce held during the Olympic Games"] },
    { id: "1.3-E-07", subtopic: "Priests & religious officials", q: "What does 'do ut des' mean?", answers: ["'I give so that you give'", "'the peace of the gods'", "'the greatest bridge builder'", "'for the good of Rome'"] },
    { id: "1.3-E-08", subtopic: "Priests & religious officials", q: "How did Roman priests differ from Greek priests?", answers: ["they were not tied to one temple or god", "they had to train for many years", "they were forbidden to marry", "they preached a moral code"] },
    { id: "1.3-E-09", subtopic: "Priests & religious officials", q: "What did a Roman priest do with his head during rituals?", answers: ["veiled it with his toga", "crowned it with laurel", "shaved it completely bald", "covered it with a lion skin"] },
    { id: "1.3-E-10", subtopic: "Priests & religious officials", q: "Who led the pontifices, the most important college of priests?", answers: ["the Pontifex Maximus", "the chief augur", "an elected consul", "the eldest Vestal Virgin"] },
    { id: "1.3-E-11", subtopic: "Priests & religious officials", q: "From 13 BC, who always held the post of Pontifex Maximus?", answers: ["the emperor", "the senior consul", "the chief Vestal", "an elected senator"] },
    { id: "1.3-E-12", subtopic: "Priests & religious officials", q: "What did the pontifices supervise that gave them great power?", answers: ["the religious calendar", "the army's pay", "the grain supply", "the law courts"] },
    { id: "1.3-E-13", subtopic: "Priests & religious officials", q: "What was an augur's main job?", answers: ["'taking the auspices' by reading signs from the gods", "reading the entrails of sacrificed animals", "guarding the sacred flame of Vesta", "leading the state blood sacrifices"] },
    { id: "1.3-E-14", subtopic: "Priests & religious officials", q: "What signs did augurs read?", answers: ["the flight of birds, animal behaviour, or thunder", "the entrails of sacrificed animals", "the patterns of the night-time stars", "the casting of marked dice"] },
    { id: "1.3-E-15", subtopic: "Priests & religious officials", q: "What curved staff did an augur carry?", answers: ["a lituus", "a thyrsus", "a caduceus", "a sceptre"] },
    { id: "1.3-E-16", subtopic: "Priests & religious officials", q: "How did augury feature in the founding of Rome?", answers: ["Romulus saw twelve vultures, Remus only six", "Romulus saw an eagle, Remus saw a wolf", "Remus saw twelve eagles, Romulus six", "both brothers saw the same six vultures"] },
    { id: "1.3-E-17", subtopic: "Priests & religious officials", q: "Whom did the Vestal Virgins serve?", answers: ["Vesta, goddess of the hearth", "Juno, goddess of marriage", "Minerva, goddess of wisdom", "Diana, goddess of the hunt"] },
    { id: "1.3-E-18", subtopic: "Priests & religious officials", q: "How many Vestal Virgins were there?", answers: ["six", "twelve", "three", "fifteen"] },
    { id: "1.3-E-19", subtopic: "Priests & religious officials", q: "What was the Vestals' key duty?", answers: ["keeping the sacred flame of Vesta burning", "reading the entrails of animals", "baking all the city's bread", "guarding the gates of Rome"] },
    { id: "1.3-E-20", subtopic: "Priests & religious officials", q: "For how long did a Vestal serve, and under what vow?", answers: ["at least thirty years, under a vow of chastity", "for one year, under a vow of silence", "for life, under a vow of poverty", "for ten years, under a vow of obedience"] },
    { id: "1.3-E-21", subtopic: "Priests & religious officials", q: "What was the punishment for a Vestal who broke her vow of chastity?", answers: ["she was buried alive", "she was whipped and dismissed", "she was exiled from Rome", "she was made to pay a fine"] },
    { id: "1.3-E-22", subtopic: "Priests & religious officials", q: "What rare privileges did the Vestals enjoy?", answers: ["they could own property, make wills, and vote", "they could hold seats in the senate", "they could serve as judges in court", "they could command soldiers in war"] },
    { id: "1.3-E-23", subtopic: "Priests & religious officials", q: "What was a haruspex, and where did the role come from?", answers: ["an Etruscan diviner who read entrails", "a Greek priest who read the birds", "a Roman augur of noble birth", "an Egyptian reader of the stars"] },
    { id: "1.3-E-24", subtopic: "Priests & religious officials", q: "Which organ mattered most to a haruspex?", answers: ["the liver", "the heart", "the lungs", "the brain"] },

    // ── SUBTOPIC F: Blood sacrifice ──
    { id: "1.3-F-01", subtopic: "Blood sacrifice", q: "What was the main offering to the gods in Greece and Rome?", answers: ["a blood sacrifice — ritually killing an animal", "a gift of money left upon the altar", "a burnt offering of grain by itself", "a poured libation of wine and nothing else"] },
    { id: "1.3-F-02", subtopic: "Blood sacrifice", q: "Why did it matter that the animal 'appeared to consent'?", answers: ["a frightened animal was a bad omen", "an unwilling animal could not be caught", "the gods preferred truly wild animals", "it made the meat taste better"] },
    { id: "1.3-F-03", subtopic: "Blood sacrifice", q: "In a Greek sacrifice, how was the animal made to 'nod' its consent?", answers: ["water was poured on its head", "it was offered grain to eat", "its front legs were bound", "it was struck on the head"] },
    { id: "1.3-F-04", subtopic: "Blood sacrifice", q: "What happened if anything went wrong during a sacrifice?", answers: ["the whole process had to restart", "the priest was at once replaced", "a fine was paid to the god", "the animal was simply freed"] },
    { id: "1.3-F-05", subtopic: "Blood sacrifice", q: "What was a hecatomb?", answers: ["a sacrifice of at least 100 oxen", "a sacrifice of a pig, sheep, and ox", "the offering of a single prize bull", "an offering of one hundred birds"] },
    { id: "1.3-F-06", subtopic: "Blood sacrifice", q: "Why did musicians play during the sacrifice?", answers: ["to stop the animal taking fright", "to summon the god to attend", "to drown out the spoken prayers", "to entertain the watching crowd"] },
    { id: "1.3-F-07", subtopic: "Blood sacrifice", q: "In a Greek sacrifice, what did the maiden's basket conceal?", answers: ["the sacrificial knife, hidden under the grain", "the god's own portion of the meat", "a small libation of poured red wine", "a small carved wooden model of the god"] },
    { id: "1.3-F-08", subtopic: "Blood sacrifice", q: "What did women do at the moment of the kill in Greece?", answers: ["performed a ritual scream", "scattered fresh flowers", "left the sanctuary at once", "covered their own faces"] },
    { id: "1.3-F-09", subtopic: "Blood sacrifice", q: "Which part of the animal was burned as the god's portion?", answers: ["the thigh bones wrapped in fat", "the very best cuts of meat", "the entire animal whole", "the hide and the horns"] },
    { id: "1.3-F-10", subtopic: "Blood sacrifice", q: "Which myth explained why the gods received bones and fat, not meat?", answers: ["the myth of Prometheus tricking Zeus", "the myth of Demeter and Persephone", "the myth of Pandora's jar", "the twelve labours of Heracles"] },
    { id: "1.3-F-11", subtopic: "Blood sacrifice", q: "Who read the entrails for omens at a Greek sacrifice?", answers: ["the mantis", "the priestess", "the haruspex", "the city archon"] },
    { id: "1.3-F-12", subtopic: "Blood sacrifice", q: "After the god's portion, who shared the remaining meat in Greece?", answers: ["the participants, then the wider community", "only the temple's own priests", "only the city's chief officials", "no one — it was completely burned"] },
    { id: "1.3-F-13", subtopic: "Blood sacrifice", q: "Why was a sacrifice one of the few times most people ate meat?", answers: ["meat was rarely eaten in ordinary life", "meat was forbidden except at temples", "only sacrificed meat was thought clean", "the gods had banned all hunting"] },
    { id: "1.3-F-14", subtopic: "Blood sacrifice", q: "What was the suovetaurilia?", answers: ["a pig, a sheep, and an ox sacrificed together", "a hecatomb of one hundred oxen", "three white bulls sacrificed at dawn", "a pig and two goats offered to Vesta"] },
    { id: "1.3-F-15", subtopic: "Blood sacrifice", q: "What was the mola salsa, and who made it?", answers: ["salted flour, made by the Vestal Virgins", "spiced wine, made by the pontifices", "barley cakes, made by the augurs", "burning incense, made by the haruspex"] },
    { id: "1.3-F-16", subtopic: "Blood sacrifice", q: "In a Roman sacrifice, who stunned the animal and who cut its throat?", answers: ["the popa stunned it; the cultrarius cut its throat", "the pontifex stunned it; the augur cut its throat", "the haruspex did both tasks himself", "the emperor stunned it; a priest cut its throat"] },
    { id: "1.3-F-17", subtopic: "Blood sacrifice", q: "How was the meat shared after a Roman state sacrifice?", answers: ["in a strict social hierarchy, priests first", "equally among everyone present", "only among the temple priests", "sold off in the public market"] },

  ];

  window.CivQuiz.topics.push({
    id: "1.3",
    title: "Temples",
    list: "civ-myth-religion",   // shared BKT vocab_list for Myth & Religion
    questions: questions
  });
})();
