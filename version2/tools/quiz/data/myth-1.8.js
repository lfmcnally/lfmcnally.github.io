// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: Topic 1.8 — Journeying to the Underworld
// ============================================================
// Focused on the core examinable knowledge (based on the
// revision page), but covering it thoroughly:
//   A. The Hymn to Demeter: the plot (the journey)
//   B. The Hymn to Demeter: characters
//   C. Orpheus & Eurydice: the plot (Ovid, Metamorphoses 10)
//   D. Orpheus & Eurydice: characters
//   E. The underworld & the two cultures
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

    // ── SUBTOPIC A: The Hymn to Demeter — the plot ──
    { id: "1.8-A-01", subtopic: "The Hymn to Demeter: the plot", q: "Where was Persephone when she was abducted?", answers: ["picking flowers in the Plain of Nysa", "bathing in a quiet river", "weaving cloth at home", "walking to a temple"] },
    { id: "1.8-A-02", subtopic: "The Hymn to Demeter: the plot", q: "What flower was used as a snare to lure Persephone?", answers: ["the narcissus", "the lotus", "the violet", "the crocus"] },
    { id: "1.8-A-03", subtopic: "The Hymn to Demeter: the plot", q: "Whose plan was the abduction, according to the Hymn?", answers: ["Zeus's — the snare was made at his will", "Hades's alone, against the gods", "Demeter's, quite by accident", "Aphrodite's secret scheme"] },
    { id: "1.8-A-04", subtopic: "The Hymn to Demeter: the plot", q: "How did Hades seize Persephone?", answers: ["he rose through the earth in a golden chariot", "he disguised himself as a young suitor", "he sent a great serpent to take her", "he carried her off across the sea"] },
    { id: "1.8-A-05", subtopic: "The Hymn to Demeter: the plot", q: "Who heard or saw the abduction?", answers: ["Hecate, who heard, and Helios, who saw", "Zeus and Hera, watching from above", "Hermes and Iris, the messengers", "Demeter alone, from far away"] },
    { id: "1.8-A-06", subtopic: "The Hymn to Demeter: the plot", q: "How did Demeter react when she heard Persephone's cry?", answers: ["she tore off her veil and rushed off like a bird", "she at once begged Zeus for his help", "she fainted away with sudden grief", "she flooded the whole of the earth"] },
    { id: "1.8-A-07", subtopic: "The Hymn to Demeter: the plot", q: "For how long did Demeter wander, refusing food and drink?", answers: ["nine days", "three days", "a whole year", "forty days"] },
    { id: "1.8-A-08", subtopic: "The Hymn to Demeter: the plot", q: "Who finally told Demeter the truth about the abduction?", answers: ["Helios", "Hecate", "Zeus", "Hermes"] },
    { id: "1.8-A-09", subtopic: "The Hymn to Demeter: the plot", q: "Where did the grieving Demeter take refuge, disguised as an old woman?", answers: ["Eleusis", "Athens", "Delphi", "Olympia"] },
    { id: "1.8-A-10", subtopic: "The Hymn to Demeter: the plot", q: "How did Demeter force the gods to act?", answers: ["she withheld the harvest, causing famine", "she flooded the whole earth", "she released a deadly plague", "she hid away the sun"] },
    { id: "1.8-A-11", subtopic: "The Hymn to Demeter: the plot", q: "Why did Zeus have to intervene?", answers: ["without humans, the gods lose their sacrifices", "he simply pitied his grieving sister", "he feared Hades's ever-growing power", "the other gods forced him into it"] },
    { id: "1.8-A-12", subtopic: "The Hymn to Demeter: the plot", q: "Whom did Zeus send first to plead with Demeter?", answers: ["Iris", "Hermes", "Hecate", "Rhea"] },
    { id: "1.8-A-13", subtopic: "The Hymn to Demeter: the plot", q: "Whom did Zeus send down to fetch Persephone?", answers: ["Hermes", "Iris", "Apollo", "Hecate"] },
    { id: "1.8-A-14", subtopic: "The Hymn to Demeter: the plot", q: "What did Hades secretly give Persephone before she left?", answers: ["one pomegranate seed", "a ring of gold", "a cup of nectar", "a sprig of narcissus"] },
    { id: "1.8-A-15", subtopic: "The Hymn to Demeter: the plot", q: "What was the effect of eating the pomegranate seed?", answers: ["she had to return below for a third of the year", "she could never leave the underworld again", "she at once forgot her mother", "she was made fully immortal"] },
    { id: "1.8-A-16", subtopic: "The Hymn to Demeter: the plot", q: "Who delivered Zeus's final bargain?", answers: ["Rhea", "Iris", "Hermes", "Hecate"] },
    { id: "1.8-A-17", subtopic: "The Hymn to Demeter: the plot", q: "What did the myth's ending establish at Eleusis?", answers: ["the Eleusinian Mysteries", "the Olympic Games", "the City Dionysia", "a great temple of Zeus"] },

    // ── SUBTOPIC B: The Hymn to Demeter — characters ──
    { id: "1.8-B-01", subtopic: "The Hymn to Demeter: characters", q: "What does Demeter's grief drive her to do?", answers: ["refuse food and water and wander for nine days", "declare open war on the god Hades", "build herself a great new temple", "drown herself in her deep sorrow"] },
    { id: "1.8-B-02", subtopic: "The Hymn to Demeter: characters", q: "What is Demeter's 'leverage' over Olympus?", answers: ["she can deny the gods their worshippers", "she controls the weather and storms", "she commands a vast army", "she holds Zeus's thunderbolt"] },
    { id: "1.8-B-03", subtopic: "The Hymn to Demeter: characters", q: "How is Persephone portrayed during the abduction?", answers: ["largely passive — taken against her will", "as a willing and eager bride", "as a clever escapee", "as a fierce fighter"] },
    { id: "1.8-B-04", subtopic: "The Hymn to Demeter: characters", q: "What does Persephone become by the end of the Hymn?", answers: ["Queen of the Underworld, with real power", "a mortal woman once more", "a humble priestess of Demeter", "a bright star in the sky"] },
    { id: "1.8-B-05", subtopic: "The Hymn to Demeter: characters", q: "What does the Hymn show about Hades's role in the abduction?", answers: ["he acts with Zeus's consent, not as a rogue", "he openly defies Zeus entirely", "he is tricked into doing it by Hermes", "he acts only on Hera's orders"] },
    { id: "1.8-B-06", subtopic: "The Hymn to Demeter: characters", q: "How does Hades react to the command to release Persephone?", answers: ["he smiles grimly but obeys Zeus", "he refuses the command outright", "he flees from the underworld", "he demands a great ransom"] },
    { id: "1.8-B-07", subtopic: "The Hymn to Demeter: characters", q: "Why is Hades seen as 'not purely villainous'?", answers: ["he promises Persephone real honour as his queen", "he releases her completely freely", "he apologises to Demeter himself", "he gives up the underworld for her"] },
    { id: "1.8-B-08", subtopic: "The Hymn to Demeter: characters", q: "What does the Hymn make clear about Zeus and the crisis?", answers: ["he caused it by arranging the marriage in secret", "he was entirely unaware of any of it", "Hades had deceived him from the start", "Demeter had secretly provoked it"] },
    { id: "1.8-B-09", subtopic: "The Hymn to Demeter: characters", q: "Why does Zeus finally resolve the crisis?", answers: ["so the gods get their worshippers back", "out of pure love for Demeter", "to punish Hades for the abduction", "to please his daughter Persephone"] },
    { id: "1.8-B-10", subtopic: "The Hymn to Demeter: characters", q: "What do Hades's epithets ('Ruler of Many', 'Host of Many') stress?", answers: ["his role as receiver and ruler of the dead", "his great and terrible cruelty", "his vast wealth in gold", "his power over the sea"] },
    { id: "1.8-B-11", subtopic: "The Hymn to Demeter: characters", q: "What does the character study in the Hymn avoid?", answers: ["simple heroes and villains", "any mention of Zeus at all", "describing the underworld", "naming Persephone"] },
    { id: "1.8-B-12", subtopic: "The Hymn to Demeter: characters", q: "Of whom is Persephone the daughter?", answers: ["Demeter and Zeus", "Demeter and Hades", "Hera and Zeus", "Rhea and Cronos"] },

    // ── SUBTOPIC C: Orpheus & Eurydice — the plot ──
    { id: "1.8-C-01", subtopic: "Orpheus & Eurydice: the plot", q: "In which work does this story of Orpheus and Eurydice appear?", answers: ["Ovid's Metamorphoses, Book 10", "the Homeric Hymn to Demeter", "Virgil's Aeneid, Book 6", "Homer's Odyssey, Book 11"] },
    { id: "1.8-C-02", subtopic: "Orpheus & Eurydice: the plot", q: "What bad omen occurred at the wedding?", answers: ["Hymen's torch sputtered and would not light", "a black crow landed on the altar", "the wedding wine turned to blood", "thunder split the clear sky"] },
    { id: "1.8-C-03", subtopic: "Orpheus & Eurydice: the plot", q: "How did Eurydice die?", answers: ["she was bitten by a snake in the grass", "she fell from a high cliff", "she drowned in a deep river", "she was struck by lightning"] },
    { id: "1.8-C-04", subtopic: "Orpheus & Eurydice: the plot", q: "Through which gateway did Orpheus enter the underworld?", answers: ["the gate of Taenarus, down to the Styx", "the dark cave of Avernus", "the ford of the river Acheron", "the sacred gate of Eleusis"] },
    { id: "1.8-C-05", subtopic: "Orpheus & Eurydice: the plot", q: "What did Orpheus use to accompany his appeal?", answers: ["his lyre", "a golden staff", "a sputtering torch", "a written scroll"] },
    { id: "1.8-C-06", subtopic: "Orpheus & Eurydice: the plot", q: "What was Orpheus's first argument to Pluto?", answers: ["that love had compelled him to come", "that he was the son of a god", "that Eurydice was innocent", "that he would never leave"] },
    { id: "1.8-C-07", subtopic: "Orpheus & Eurydice: the plot", q: "How did Orpheus argue Pluto and Proserpina should sympathise?", answers: ["they too had been united by love and abduction", "they owed his father Apollo a favour", "they were afraid of his music", "they should pity his great youth"] },
    { id: "1.8-C-08", subtopic: "Orpheus & Eurydice: the plot", q: "What was Orpheus's third argument?", answers: ["Eurydice would return to the underworld anyway", "he himself would die without her", "he would sing the gods' praises for ever", "he had already paid the ferryman twice"] },
    { id: "1.8-C-09", subtopic: "Orpheus & Eurydice: the plot", q: "What effect did Orpheus's song have on the punished souls?", answers: ["all punishment stopped — even Sisyphus paused", "they all cried out at him in anger", "they were every one set free at once", "they ignored him completely and went on"] },
    { id: "1.8-C-10", subtopic: "Orpheus & Eurydice: the plot", q: "What did the Furies do for the first time?", answers: ["they wept", "they set a soul free", "they refused to listen", "they attacked a god"] },
    { id: "1.8-C-11", subtopic: "Orpheus & Eurydice: the plot", q: "Why did Pluto and Proserpina grant the request?", answers: ["they could not bear to refuse", "they feared Apollo's anger", "Zeus had commanded them", "Orpheus had paid a ransom"] },
    { id: "1.8-C-12", subtopic: "Orpheus & Eurydice: the plot", q: "What condition was set for Eurydice's release?", answers: ["Orpheus must not look back until they left Avernus", "Orpheus must never sing a note again", "Orpheus must leave his lyre down there", "Orpheus must return to her within a year"] },
    { id: "1.8-C-13", subtopic: "Orpheus & Eurydice: the plot", q: "Why did Orpheus turn to look back?", answers: ["he feared she was no longer behind him", "he heard her cry out in pain", "he was warned to by a god", "he simply forgot the rule"] },
    { id: "1.8-C-14", subtopic: "Orpheus & Eurydice: the plot", q: "What happened the instant Orpheus turned?", answers: ["Eurydice slipped back and he clutched only air", "Eurydice was turned to cold stone", "Pluto seized her once again", "she vanished in a burst of flame"] },
    { id: "1.8-C-15", subtopic: "Orpheus & Eurydice: the plot", q: "In Ovid's irony, what was Eurydice's only 'complaint'?", answers: ["that she had been loved", "that Orpheus was careless", "that the gods were cruel", "that she had died too young"] },
    { id: "1.8-C-16", subtopic: "Orpheus & Eurydice: the plot", q: "What were Eurydice's last words to Orpheus?", answers: ["a faint farewell that scarcely reached him", "a bitter curse upon the gods", "a desperate plea to try again", "nothing at all — she was silent"] },

    // ── SUBTOPIC D: Orpheus & Eurydice — characters ──
    { id: "1.8-D-01", subtopic: "Orpheus & Eurydice: characters", q: "Who were Orpheus's parents?", answers: ["Apollo and the Muse Calliope", "Hades and Persephone", "Zeus and a mortal woman", "Hermes and a river naiad"] },
    { id: "1.8-D-02", subtopic: "Orpheus & Eurydice: characters", q: "What power did Orpheus's music have?", answers: ["it could move gods, beasts, stones, and trees", "it could raise the dead to life", "it could heal any wound", "it could foretell the future"] },
    { id: "1.8-D-03", subtopic: "Orpheus & Eurydice: characters", q: "Besides a musician, what is Orpheus shown to be?", answers: ["a skilled rhetorician, building careful arguments", "a fearless and mighty warrior in battle", "a cunning and very daring thief", "a great and immensely powerful king"] },
    { id: "1.8-D-04", subtopic: "Orpheus & Eurydice: characters", q: "What is Orpheus's fatal flaw, in Ovid?", answers: ["the same as his greatest virtue: his love", "his fierce, overwhelming pride", "his deep and endless greed", "his sudden, surprising cowardice"] },
    { id: "1.8-D-05", subtopic: "Orpheus & Eurydice: characters", q: "How is Eurydice characterised throughout?", answers: ["almost entirely silent and passive", "bold and outspoken", "cunning and scheming", "angry and bitter"] },
    { id: "1.8-D-06", subtopic: "Orpheus & Eurydice: characters", q: "What wound does Eurydice still bear in the underworld?", answers: ["the snakebite, making her walk haltingly", "a burn from Hymen's wedding torch", "a deep and bloody spear wound", "no wound at all, in truth"] },
    { id: "1.8-D-07", subtopic: "Orpheus & Eurydice: characters", q: "How is Pluto's kingdom described?", answers: ["as joyless and miserable", "as rich and golden", "as bright and peaceful", "as vast and empty"] },
    { id: "1.8-D-08", subtopic: "Orpheus & Eurydice: characters", q: "Why does Pluto set the single condition?", answers: ["it is the rule the underworld requires, not spite", "to trick Orpheus all along, in fact", "to punish poor Eurydice still further", "simply to please his queen Proserpina"] },
    { id: "1.8-D-09", subtopic: "Orpheus & Eurydice: characters", q: "Why does Orpheus appeal directly to Proserpina?", answers: ["because she too was taken in an unwilling marriage", "because she truly rules over Pluto", "because she is his own close relative", "because she loves all music the most"] },
    { id: "1.8-D-10", subtopic: "Orpheus & Eurydice: characters", q: "Where does the tragedy of Ovid's story lie?", answers: ["in Orpheus himself, not in Pluto", "in Pluto's deep cruelty", "in the anger of Zeus", "in Eurydice's own mistake"] },

    // ── SUBTOPIC E: The underworld & the two cultures ──
    { id: "1.8-E-01", subtopic: "The underworld & the two cultures", q: "What does the Homeric Hymn call the underworld?", answers: ["Erebus, the murky darkness below", "Tartarus, the pit of torment", "Elysium, the blessed fields", "Avernus, the dark vale"] },
    { id: "1.8-E-02", subtopic: "The underworld & the two cultures", q: "What does the Hymn focus on about the underworld?", answers: ["its rules — that eating there binds you", "its many rivers and its grim guardians", "its famous figures of punishment", "its bright and blessed regions of peace"] },
    { id: "1.8-E-03", subtopic: "The underworld & the two cultures", q: "How do Olympian gods enter the underworld in the Hymn?", answers: ["they cannot enter freely; Hermes must be sent", "they come and go as they please", "only Zeus himself may enter", "they are forbidden it entirely"] },
    { id: "1.8-E-04", subtopic: "The underworld & the two cultures", q: "Through what real places does Ovid's underworld connect to the world?", answers: ["Taenarus and the vale of Avernus", "Eleusis and Delphi", "the Styx and the Lethe", "Olympia and Athens"] },
    { id: "1.8-E-05", subtopic: "The underworld & the two cultures", q: "Which river of the dead does Ovid name directly?", answers: ["the Styx", "the Lethe", "the Acheron", "the Cocytus"] },
    { id: "1.8-E-06", subtopic: "The underworld & the two cultures", q: "Which guardian does Ovid name, 'with his three necks and snaky hair'?", answers: ["Cerberus", "the Hydra", "Charon", "the Sphinx"] },
    { id: "1.8-E-07", subtopic: "The underworld & the two cultures", q: "Which region of torment does Ovid name?", answers: ["Tartarus", "Elysium", "Erebus", "the Plain of Nysa"] },
    { id: "1.8-E-08", subtopic: "The underworld & the two cultures", q: "Name one punishment figure whose torment paused for Orpheus's song.", answers: ["Sisyphus", "Heracles", "Theseus", "Achilles"] },
    { id: "1.8-E-09", subtopic: "The underworld & the two cultures", q: "For the fuller Greek picture of the underworld, which text does OCR point to?", answers: ["the Odyssey, Book 11", "the Iliad, Book 6", "the Aeneid, Book 6", "the Metamorphoses, Book 10"] },
    { id: "1.8-E-10", subtopic: "The underworld & the two cultures", q: "In Virgil's Aeneid Book 6, who guides Aeneas into the underworld?", answers: ["the Sibyl of Cumae", "the ghost of Anchises", "the god Hermes", "the ferryman Charon"] },
    { id: "1.8-E-11", subtopic: "The underworld & the two cultures", q: "Whom does Aeneas go to meet in the underworld?", answers: ["his dead father Anchises", "his lost wife Creusa", "the hero Orpheus", "the god Pluto"] },
    { id: "1.8-E-12", subtopic: "The underworld & the two cultures", q: "What does Anchises show Aeneas in Elysium?", answers: ["the future heroes of Rome, awaiting rebirth", "the punishments of the wicked", "the rivers of the dead", "the throne of Pluto"] },
    { id: "1.8-E-13", subtopic: "The underworld & the two cultures", q: "What does the Hymn show about the gods and humans?", answers: ["the gods depend on human worship and sacrifice", "humans depend wholly on the gods", "the gods take no notice of humans", "humans can defeat the gods"] },
    { id: "1.8-E-14", subtopic: "The underworld & the two cultures", q: "What natural cycle does the Persephone myth explain?", answers: ["the seasons — winter when she is below", "the phases of the moon", "the rising of the sun", "the flooding of the rivers"] },
    { id: "1.8-E-15", subtopic: "The underworld & the two cultures", q: "What secret rites was the Hymn closely connected to?", answers: ["the Eleusinian Mysteries", "the Lupercalia", "the City Dionysia", "the Saturnalia"] },
    { id: "1.8-E-16", subtopic: "The underworld & the two cultures", q: "What does Ovid's story suggest love can do?", answers: ["override even death, but also destroy", "conquer the gods for ever", "bring the dead fully back to life", "put an end to all suffering"] },
    { id: "1.8-E-17", subtopic: "The underworld & the two cultures", q: "What does Orpheus's song show about the power of art?", answers: ["it can move even the most resistant forces", "it is useless against the gods", "it always brings good fortune", "it can raise the dead to life"] },
    { id: "1.8-E-18", subtopic: "The underworld & the two cultures", q: "How does Ovid's tone differ from the Hymn's?", answers: ["it is a witty, ironic literary performance", "it is a solemn religious hymn", "it is a dry historical record", "it is a grand battle epic"] },

  ];

  window.CivQuiz.topics.push({
    id: "1.8",
    title: "Journeying to the Underworld",
    list: "civ-myth-religion",   // shared BKT vocab_list for Myth & Religion
    questions: questions
  });
})();
