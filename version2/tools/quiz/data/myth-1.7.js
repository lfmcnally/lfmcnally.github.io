// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: Topic 1.7 — Death and Burial
// ============================================================
// Focused on the core examinable knowledge (based on the
// revision page), but covering it thoroughly:
//   A. The Greek funerary process
//   B. The Roman funerary process
//   C. Festivals of the dead (Greek & Roman)
//   D. Remembering the dead — the sources (stelai, tombs,
//      sarcophagi, Pliny)
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

    // ── SUBTOPIC A: The Greek funerary process ──
    { id: "1.7-A-01", subtopic: "The Greek funerary process", q: "What was placed on the mouth of the Greek dead, and why?", answers: ["a coin, to pay Charon the ferryman", "a sprig of laurel, to honour Apollo", "a gold leaf, to show their status", "a piece of bread, to feed the soul"] },
    { id: "1.7-A-02", subtopic: "The Greek funerary process", q: "Who closed the eyes and mouth of the deceased?", answers: ["a family member", "a priest of Hades", "a hired undertaker", "the eldest son alone"] },
    { id: "1.7-A-03", subtopic: "The Greek funerary process", q: "What did a death cause, requiring purification?", answers: ["ritual pollution (miasma)", "bad luck for a whole year", "a debt owed to the gods", "the anger of Charon"] },
    { id: "1.7-A-04", subtopic: "The Greek funerary process", q: "How did visitors purify themselves after a death?", answers: ["with a bowl of water outside the house", "by sacrificing a goat at the door", "by a payment made to the priest", "by burning sweet incense"] },
    { id: "1.7-A-05", subtopic: "The Greek funerary process", q: "What was the prothesis?", answers: ["the laying out of the body at home for two days", "the funeral procession held before dawn", "the blood sacrifice at the graveside", "the thirty-day period of mourning"] },
    { id: "1.7-A-06", subtopic: "The Greek funerary process", q: "Who led the mourning at the prothesis?", answers: ["women, who performed the lament", "men, who gave formal speeches", "priests, who chanted holy hymns", "hired actors, who mimed the dead"] },
    { id: "1.7-A-07", subtopic: "The Greek funerary process", q: "Why was leading the mourning significant for Athenian women?", answers: ["it was one of the few public roles open to them", "it was strictly forbidden to all women", "it earned them a seat in the assembly", "it was well-paid professional work"] },
    { id: "1.7-A-08", subtopic: "The Greek funerary process", q: "What was the ekphora?", answers: ["the funeral procession to the burial ground", "the laying out of the body at home", "the blood sacrifice at the graveside", "the yearly festival of the dead"] },
    { id: "1.7-A-09", subtopic: "The Greek funerary process", q: "When was the ekphora held, and why?", answers: ["before dawn on day three, to limit miasma", "at noon on day one, to honour the sun", "at dusk on day seven, to please Hades", "at midnight, to avoid evil spirits"] },
    { id: "1.7-A-10", subtopic: "The Greek funerary process", q: "Where were Greek burials held, and why?", answers: ["outside the city walls, to keep pollution out", "in the city square, to honour the dead", "inside the temple, close to the gods", "on the Acropolis, where it was safe"] },
    { id: "1.7-A-11", subtopic: "The Greek funerary process", q: "What was Athens's main burial ground?", answers: ["the Kerameikos", "the Altis", "the Campus Martius", "the Forum Boarium"] },
    { id: "1.7-A-12", subtopic: "The Greek funerary process", q: "To whom was blood offered at the graveside sacrifice?", answers: ["Hades and Persephone", "Zeus and Hera", "Hermes and Dionysus", "Charon and the Furies"] },
    { id: "1.7-A-13", subtopic: "The Greek funerary process", q: "What were lekythoi?", answers: ["oil flasks painted for funerary use", "coins paid to the ferryman Charon", "carved stone grave markers", "wax masks of the ancestors"] },
    { id: "1.7-A-14", subtopic: "The Greek funerary process", q: "How long was the Greek period of mourning?", answers: ["thirty days", "eight days", "nine days", "a whole year"] },
    { id: "1.7-A-15", subtopic: "The Greek funerary process", q: "Which were acceptable in Greece — burial or cremation?", answers: ["both were acceptable", "only burial was allowed", "only cremation was allowed", "neither — the body was exposed"] },

    // ── SUBTOPIC B: The Roman funerary process ──
    { id: "1.7-B-01", subtopic: "The Roman funerary process", q: "What unique Roman act happened at the moment of death?", answers: ["a relative captured the last breath with a kiss", "a coin was burned on the family hearth", "the body was crowned with fresh laurel", "a priest sealed the eyes with wax"] },
    { id: "1.7-B-02", subtopic: "The Roman funerary process", q: "What did those present do right after a Roman death?", answers: ["called out the deceased's name", "poured wine onto the floor", "closed all the doors of the house", "lit a great funeral torch"] },
    { id: "1.7-B-03", subtopic: "The Roman funerary process", q: "How was the Roman body dressed for laying out?", answers: ["in the deceased's finest clothes, to show status", "in a plain white linen burial shroud", "in a long black robe of mourning", "in the very clothes they had died in"] },
    { id: "1.7-B-04", subtopic: "The Roman funerary process", q: "Where and for how long did wealthy Romans lay out the body?", answers: ["in the atrium, for eight days", "in the home, for two days", "at the temple, for three days", "in the forum, for one day"] },
    { id: "1.7-B-05", subtopic: "The Roman funerary process", q: "What were funeral clubs?", answers: ["subscription clubs that paid for members' funerals", "bands of professional hired mourners", "guilds that only built family tombs", "priests who carried out cremations"] },
    { id: "1.7-B-06", subtopic: "The Roman funerary process", q: "What did family members wear in the Roman procession?", answers: ["wax funerary masks of their ancestors", "black veils of mourning", "crowns of fresh laurel", "the deceased's own clothes"] },
    { id: "1.7-B-07", subtopic: "The Roman funerary process", q: "What was the purpose of the ancestor masks?", answers: ["to show the dead being welcomed by their family line", "to frighten away any lingering evil spirits", "to hide the deep grief of the mourners", "to disguise the faces of the hired actors"] },
    { id: "1.7-B-08", subtopic: "The Roman funerary process", q: "What did wealthy families hire for the procession?", answers: ["mourners and actors to mimic the deceased", "a chorus to perform a tragedy", "an augur to read the omens", "soldiers to guard the body"] },
    { id: "1.7-B-09", subtopic: "The Roman funerary process", q: "What Roman law required burial outside the city walls?", answers: ["the Twelve Tables", "the law of the Vestals", "the Pontifical code", "the edict of Augustus"] },
    { id: "1.7-B-10", subtopic: "The Roman funerary process", q: "Where did wealthy Romans build their tombs, and why?", answers: ["along the roads, so passers-by would see them", "inside the family home, for protection", "on the Capitoline Hill, near the gods", "in a hidden cemetery, for privacy"] },
    { id: "1.7-B-11", subtopic: "The Roman funerary process", q: "What did the super-rich use instead of a simple grave?", answers: ["sarcophagi — carved stone coffins", "tall marble grave stelai", "altars built of sacrificial ash", "great open funeral pyres"] },
    { id: "1.7-B-12", subtopic: "The Roman funerary process", q: "What was placed in the home after the burial?", answers: ["a marble bust of the deceased", "a wax mask of an ancestor", "a coin for the ferryman", "an ever-burning oil lamp"] },
    { id: "1.7-B-13", subtopic: "The Roman funerary process", q: "What did the Roman dead become?", answers: ["Manes — deified ancestor spirits", "Lemures — evil restless ghosts", "Lares — gods of the household", "shades bound to the river Styx"] },
    { id: "1.7-B-14", subtopic: "The Roman funerary process", q: "How did families keep the Manes appeased?", answers: ["by leaving food and wine at the tomb", "by a yearly sacrifice of an ox", "by lighting an eternal flame", "by reciting their names each day"] },

    // ── SUBTOPIC C: Festivals of the dead ──
    { id: "1.7-C-01", subtopic: "Festivals of the dead", q: "What was the Genesia?", answers: ["an Athenian festival for all the ancestors", "a festival for only the recently dead", "a festival of the autumn wine harvest", "a festival held to ward off evil spirits"] },
    { id: "1.7-C-02", subtopic: "Festivals of the dead", q: "What did Athenian families do at the Genesia?", answers: ["visited the graves with offerings and a sacrifice", "held private drinking contests at home", "threw black beans to banish the ghosts", "closed up all of the city's temples"] },
    { id: "1.7-C-03", subtopic: "Festivals of the dead", q: "How were graves decorated at the Genesia?", answers: ["with woollen ribbons tied around the stele", "with garlands of fresh green ivy", "with brightly painted ancestor masks", "with rows of burning lit torches"] },
    { id: "1.7-C-04", subtopic: "Festivals of the dead", q: "To which god was the Anthesteria linked?", answers: ["Dionysus", "Hades", "Hermes", "Demeter"] },
    { id: "1.7-C-05", subtopic: "Festivals of the dead", q: "What were the dead believed to do on day one of the Anthesteria?", answers: ["rise from the underworld and roam the earth", "sit in judgement over the living", "bless the new season's wine", "return quietly to their family homes"] },
    { id: "1.7-C-06", subtopic: "Festivals of the dead", q: "On day three of the Anthesteria, to which god were offerings made?", answers: ["Hermes, the guide of souls", "Dionysus, the god of wine", "Hades, the lord of the dead", "Charon, the ferryman of souls"] },
    { id: "1.7-C-07", subtopic: "Festivals of the dead", q: "What were the living forbidden to do with the day-three offerings?", answers: ["eat any of the food offered", "touch them with bare hands", "look at them directly", "leave them out overnight"] },
    { id: "1.7-C-08", subtopic: "Festivals of the dead", q: "When was the Roman Parentalia held, and for how long?", answers: ["13–21 February, for nine days", "9–13 May, for three days", "in late September, for one day", "17–23 December, for seven days"] },
    { id: "1.7-C-09", subtopic: "Festivals of the dead", q: "What was forbidden during the Parentalia?", answers: ["marriages and official business; temples closed", "the eating of any kind of meat", "leaving the city of Rome at all", "the lighting of any household fires"] },
    { id: "1.7-C-10", subtopic: "Festivals of the dead", q: "What was the only public element of the Parentalia?", answers: ["a blood sacrifice by a Vestal Virgin on day one", "a grand procession led by the consul", "a public feast paid for by the Senate", "a day of games held in the arena"] },
    { id: "1.7-C-11", subtopic: "Festivals of the dead", q: "According to Ovid, what did the dead want at the Parentalia?", answers: ["simple offerings (pietas) over costly gifts", "a hecatomb of one hundred oxen", "gifts of gold and silver", "a great public monument"] },
    { id: "1.7-C-12", subtopic: "Festivals of the dead", q: "How did the Parentalia end?", answers: ["with a shared family meal to settle quarrels", "with a night-time ritual of beans", "with a public feast in the streets", "with a sacrifice at the temple"] },
    { id: "1.7-C-13", subtopic: "Festivals of the dead", q: "What was the purpose of the Lemuria?", answers: ["to ward off evil, restless spirits", "to honour beloved ancestors", "to celebrate the wine harvest", "to mark the lost Golden Age"] },
    { id: "1.7-C-14", subtopic: "Festivals of the dead", q: "What did the head of the household do at the Lemuria?", answers: ["threw black beans behind him nine times at night", "poured wine over the family graves", "wore the masks of the ancestors", "led a procession to the tombs"] },
    { id: "1.7-C-15", subtopic: "Festivals of the dead", q: "What did the householder say as he threw the beans?", answers: ["'with these beans I redeem myself and my family'", "'let the dead return to the underworld'", "'I give so that you give in return'", "'depart, ancestral spirits, in peace'"] },
    { id: "1.7-C-16", subtopic: "Festivals of the dead", q: "What kind of dead did the Lemuria deal with?", answers: ["the restless dead — unburied or dead too young", "the family's own honoured ancestors", "soldiers who were killed in battle", "those who died peacefully of old age"] },

    // ── SUBTOPIC D: Remembering the dead — the sources ──
    { id: "1.7-D-01", subtopic: "Remembering the dead (the sources)", q: "What is a stele?", answers: ["a carved stone slab set over a grave", "a stone coffin carved with myths", "a wax mask of an ancestor", "a painted funerary oil flask"] },
    { id: "1.7-D-02", subtopic: "Remembering the dead (the sources)", q: "How did Greek stelai show the deceased?", answers: ["as they were in life, not in death", "lying dead upon a bier", "as a god in the afterlife", "as a skeleton or a ghost"] },
    { id: "1.7-D-03", subtopic: "Remembering the dead (the sources)", q: "Who used stelai?", answers: ["wealthier families, reflecting their status", "only soldiers killed in war", "every Athenian citizen alike", "only the priests and officials"] },
    { id: "1.7-D-04", subtopic: "Remembering the dead (the sources)", q: "What does the Stele of Hegeso show?", answers: ["Hegeso seated, examining jewellery from a slave girl", "Hegeso mourning beside an open graveside", "Hegeso on horseback in the heat of battle", "Hegeso making a solemn blood sacrifice"] },
    { id: "1.7-D-05", subtopic: "Remembering the dead (the sources)", q: "What does the slave girl on the Hegeso stele indicate?", answers: ["Hegeso's wealth and status", "her role as a priestess", "her death in childbirth", "her husband's long career"] },
    { id: "1.7-D-06", subtopic: "Remembering the dead (the sources)", q: "Whose daughter is Hegeso named as in the inscription?", answers: ["Proxenos, her father", "her unnamed husband", "her eldest living son", "the sculptor of the stele"] },
    { id: "1.7-D-07", subtopic: "Remembering the dead (the sources)", q: "What does the Stele of Dexileos show?", answers: ["Dexileos on horseback, spearing a fallen enemy", "Dexileos seated quietly at home", "Dexileos at a quiet graveside sacrifice", "Dexileos being mourned by his family"] },
    { id: "1.7-D-08", subtopic: "Remembering the dead (the sources)", q: "Who was Dexileos?", answers: ["a young Athenian cavalryman killed fighting Sparta", "a famous writer of great tragic plays", "a very wealthy Athenian merchant", "a high priest of the god Dionysus"] },
    { id: "1.7-D-09", subtopic: "Remembering the dead (the sources)", q: "Why is the Dexileos stele unusual for its period?", answers: ["it shows a combat scene, not a domestic one", "it shows a woman rather than a man", "it names the sculptor who made it", "it is cast in bronze, not marble"] },
    { id: "1.7-D-10", subtopic: "Remembering the dead (the sources)", q: "Why did the Dexileos inscription give exact dates of birth and death?", answers: ["to show he died before the Thirty Tyrants ruled", "to record his exact age for the gods below", "because the law of Athens strictly required it", "to list out all of his military honours"] },
    { id: "1.7-D-11", subtopic: "Remembering the dead (the sources)", q: "Where were both the Hegeso and Dexileos stelai found?", answers: ["the Kerameikos, in Athens", "the heart of the Roman Forum", "the Street of the Tombs at Pompeii", "the slopes of the Acropolis"] },
    { id: "1.7-D-12", subtopic: "Remembering the dead (the sources)", q: "Why did wealthy Romans build tombs along the roads?", answers: ["so passers-by would see and read them", "to keep them safe from grave robbers", "because the law forbade all other sites", "to keep them close to the temples"] },
    { id: "1.7-D-13", subtopic: "Remembering the dead (the sources)", q: "What does the Street of the Tombs at Pompeii show about Roman burial?", answers: ["it was publicly visible, facing the road", "it was hidden in a walled cemetery", "it was reserved only for soldiers", "it took place inside the town walls"] },
    { id: "1.7-D-14", subtopic: "Remembering the dead (the sources)", q: "What were sarcophagi decorated with?", answers: ["carved reliefs of mythological scenes", "the names of all the ancestors", "scenes of the person's death", "painted portraits of the gods"] },
    { id: "1.7-D-15", subtopic: "Remembering the dead (the sources)", q: "Why did Romans choose particular myths for sarcophagi?", answers: ["to give meaning and dignity to the death", "because they were the cheapest to carve", "to frighten away the grave robbers", "because the law of Rome required it"] },
    { id: "1.7-D-16", subtopic: "Remembering the dead (the sources)", q: "What myth is shown on the Persephone Sarcophagus?", answers: ["the abduction of Persephone by Hades", "the twelve labours of Heracles", "the cycle of the four seasons", "the fall of the city of Troy"] },
    { id: "1.7-D-17", subtopic: "Remembering the dead (the sources)", q: "Why might a family choose the Persephone myth for a coffin?", answers: ["Persephone returned, implying hope of an afterlife", "Persephone defeated death once and for all", "it warned the living against angering Hades", "it honoured the goddess Demeter alone"] },
    { id: "1.7-D-18", subtopic: "Remembering the dead (the sources)", q: "What does Pliny the Younger's letter describe?", answers: ["a house haunted by a ghost in chains", "a great funeral procession at Rome", "a sarcophagus carved with myths", "a yearly festival of the dead"] },
    { id: "1.7-D-19", subtopic: "Remembering the dead (the sources)", q: "In Pliny's story, what was found when the haunted spot was dug up?", answers: ["bones tangled in chains — an unburied body", "a hoard of buried treasure", "the sarcophagus of a noble", "the bones of a sacrificed ox"] },
    { id: "1.7-D-20", subtopic: "Remembering the dead (the sources)", q: "What does Pliny's letter show about the unburied dead?", answers: ["an unburied body left a dangerous, restless spirit", "an unburied body could not haunt the living", "that all such ghosts were mere superstition", "that only close family could bury the dead"] },

  ];

  window.CivQuiz.topics.push({
    id: "1.7",
    title: "Death and Burial",
    list: "civ-myth-religion",   // shared BKT vocab_list for Myth & Religion
    questions: questions
  });
})();
