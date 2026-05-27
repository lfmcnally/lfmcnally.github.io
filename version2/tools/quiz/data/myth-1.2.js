// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: Topic 1.2 — Heracles
// ============================================================
// Focused on the core examinable knowledge (based on the
// revision page), but covering it thoroughly:
//   A. Birth & early life
//   B. The twelve labours
//   C. Heracles and Olympia (Temple of Zeus — prescribed source)
//   D. The Roman stories (Virgil's Cacus; Ovid's death of Hercules)
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

    // ── SUBTOPIC A: Birth & early life ──
    { id: "1.2-A-01", subtopic: "Birth & early life", q: "Where was Heracles born?", answers: ["Thebes", "Mycenae", "Tiryns", "Athens"] },
    { id: "1.2-A-02", subtopic: "Birth & early life", q: "Who were the parents of Heracles?", answers: ["Zeus and the mortal Alcmene", "Zeus and the goddess Hera", "Amphitryon and Alcmene", "Zeus and the nymph Maia"] },
    { id: "1.2-A-03", subtopic: "Birth & early life", q: "Why was Heracles a demi-god?", answers: ["his father was a god and his mother a mortal", "both of his parents were immortal gods", "he was made a god at the moment of his birth", "he was raised from birth on Mount Olympus"] },
    { id: "1.2-A-04", subtopic: "Birth & early life", q: "Whose form did Zeus take in order to father Heracles?", answers: ["Amphitryon, Alcmene's husband", "a great white swan", "a bull from the sea", "Alcmene's own father"] },
    { id: "1.2-A-05", subtopic: "Birth & early life", q: "Why did Hera hate Heracles?", answers: ["he was the son of Zeus by another woman", "he had insulted her at a festival", "he was destined to overthrow her", "he had killed her sacred peacock"] },
    { id: "1.2-A-06", subtopic: "Birth & early life", q: "How did Hera stop Heracles from becoming king?", answers: ["she delayed his birth so a rival came first", "she hid him far away as a helpless baby", "she cursed him to be weak all his life", "she turned his own father Zeus against him"] },
    { id: "1.2-A-07", subtopic: "Birth & early life", q: "Who became king of Mycenae in Heracles's place?", answers: ["Eurystheus", "Sthenelus", "Amphitryon", "Iolaus"] },
    { id: "1.2-A-08", subtopic: "Birth & early life", q: "What did Hera send to kill the infant Heracles in his crib?", answers: ["two snakes", "a hungry lion", "a giant eagle", "a swarm of bees"] },
    { id: "1.2-A-09", subtopic: "Birth & early life", q: "What did the infant Heracles do when attacked in his crib?", answers: ["he strangled both snakes", "he was saved by Athena", "he was carried off by Zeus", "he cried until Hera fled"] },
    { id: "1.2-A-10", subtopic: "Birth & early life", q: "Which goddess became Heracles's protector?", answers: ["Athena", "Hera", "Artemis", "Aphrodite"] },
    { id: "1.2-A-11", subtopic: "Birth & early life", q: "Whom did Heracles marry when he came of age?", answers: ["Megara, daughter of the king of Thebes", "Deianira, princess of Aitolia", "Hippolyte, queen of the Amazons", "Alcmene, a descendant of Perseus"] },
    { id: "1.2-A-12", subtopic: "Birth & early life", q: "What did Heracles do while driven mad by Hera?", answers: ["he killed his own wife and children", "he burned down a temple of Hera", "he killed King Eurystheus", "he abandoned the city of Thebes"] },
    { id: "1.2-A-13", subtopic: "Birth & early life", q: "Where did Heracles go to ask how he could atone?", answers: ["the oracle at Delphi", "the oracle at Olympia", "the temple of Zeus at Thebes", "the summit of Mount Olympus"] },
    { id: "1.2-A-14", subtopic: "Birth & early life", q: "What did the oracle tell Heracles to do?", answers: ["serve King Eurystheus", "build a temple to Hera", "travel into the Underworld", "make a great sacrifice to Athena"] },
    { id: "1.2-A-15", subtopic: "Birth & early life", q: "How did the labours come to number twelve?", answers: ["ten were set, but two were disqualified and replaced", "twelve were set from the very start", "Heracles chose to attempt twelve himself", "there was one labour for each Olympian god"] },

    // ── SUBTOPIC B: The twelve labours ──
    { id: "1.2-B-01", subtopic: "The twelve labours", q: "Why did Eurystheus set Heracles these particular labours?", answers: ["he believed they were impossible", "he wanted to make Heracles famous", "Hera had personally chosen each one", "he hoped to train Heracles as a soldier"] },
    { id: "1.2-B-02", subtopic: "The twelve labours", q: "Why were two of the labours disqualified?", answers: ["Heracles received help or payment", "Heracles failed to complete them", "Heracles used forbidden weapons", "Heracles took far too long over them"] },
    { id: "1.2-B-03", subtopic: "The twelve labours", q: "Which two labours did Eurystheus disqualify?", answers: ["the Hydra and the Augean Stables", "the Nemean Lion and Cerberus", "the Cretan Bull and Geryon", "the Golden Hind and the Boar"] },
    { id: "1.2-B-04", subtopic: "The twelve labours", q: "Where are the twelve labours shown as a prescribed visual source?", answers: ["the metopes of the Temple of Zeus at Olympia", "the frieze of the Parthenon in Athens", "a carved sarcophagus from Rome", "the pediment of the temple at Delphi"] },
    { id: "1.2-B-05", subtopic: "The twelve labours", q: "What do the labours show about Heracles, beyond his strength?", answers: ["he used intelligence as well as force", "he relied only on brute force", "he always needed a god to rescue him", "he never completed a labour alone"] },
    { id: "1.2-B-06", subtopic: "The twelve labours", q: "What was special about the Nemean Lion's skin?", answers: ["it was impenetrable to weapons", "it was made of solid gold", "it could not be touched by fire", "it turned attackers to stone"] },
    { id: "1.2-B-07", subtopic: "The twelve labours", q: "How did Heracles kill the Nemean Lion?", answers: ["he strangled it", "he shot it with arrows", "he clubbed it to death", "he drowned it in a river"] },
    { id: "1.2-B-08", subtopic: "The twelve labours", q: "How did Heracles skin the Nemean Lion, on Athena's advice?", answers: ["using the lion's own claws", "with a golden knife", "with the Hydra's venom", "with a blade from Hephaistos"] },
    { id: "1.2-B-09", subtopic: "The twelve labours", q: "What did the Nemean Lion's skin become for Heracles?", answers: ["a cloak, with the head as a helmet", "a shield he carried into battle", "a banner for his army", "a gift for King Eurystheus"] },
    { id: "1.2-B-10", subtopic: "The twelve labours", q: "What happened when one of the Hydra's heads was cut off?", answers: ["two more grew back in its place", "it instantly turned to stone", "it grew back exactly the same", "it released a cloud of poison"] },
    { id: "1.2-B-11", subtopic: "The twelve labours", q: "How did Iolaus help Heracles stop the Hydra's heads regrowing?", answers: ["he sealed each neck with a flaming torch", "he buried each head separately", "he froze the necks with water", "he crushed each head with rocks"] },
    { id: "1.2-B-12", subtopic: "The twelve labours", q: "What did Heracles do with the Hydra's immortal head?", answers: ["buried it under a pile of rocks", "presented it to Eurystheus", "threw it into the deep sea", "burned it on an altar"] },
    { id: "1.2-B-13", subtopic: "The twelve labours", q: "To which goddess was the Golden Hind sacred?", answers: ["Artemis", "Hera", "Athena", "Demeter"] },
    { id: "1.2-B-14", subtopic: "The twelve labours", q: "How long did Heracles pursue the Golden Hind?", answers: ["a whole year", "a single day", "seven years", "one month"] },
    { id: "1.2-B-15", subtopic: "The twelve labours", q: "How did Heracles capture the Erymanthian Boar?", answers: ["he drove it through deep snow until it tired", "he killed it outright with his club", "he trapped it in a hidden pit", "he lured it in with food"] },
    { id: "1.2-B-16", subtopic: "The twelve labours", q: "What did Eurystheus do when Heracles brought back the Erymanthian Boar?", answers: ["he hid in a sunken storage jar", "he ordered it killed at once", "he fled from the city", "he fainted with fear"] },
    { id: "1.2-B-17", subtopic: "The twelve labours", q: "How did Heracles clean the Augean Stables?", answers: ["he diverted two rivers through them", "he shovelled them out in a day", "he burned away all the waste", "he had an army clean them"] },
    { id: "1.2-B-18", subtopic: "The twelve labours", q: "Why was the Augean Stables labour disqualified?", answers: ["Heracles had been offered payment", "Heracles had divine help", "Heracles did not finish it", "Heracles used a god's power"] },
    { id: "1.2-B-19", subtopic: "The twelve labours", q: "How did Heracles deal with the Stymphalian Birds?", answers: ["a rattle from Athena scared them up, then he shot them", "he set the whole marsh on fire to drive them out", "he poisoned the water that the birds drank from", "he trapped them all inside one enormous net"] },
    { id: "1.2-B-20", subtopic: "The twelve labours", q: "How did Heracles subdue the Cretan Bull?", answers: ["he strangled it and rode it back over the sea", "he killed it with a single arrow", "he wrestled it into an iron cage", "he tamed it with offerings of food"] },
    { id: "1.2-B-21", subtopic: "The twelve labours", q: "Where did the Cretan Bull go after Heracles released it?", answers: ["it wandered to Marathon", "it was sacrificed to Zeus", "it swam back to Crete", "it was kept by Eurystheus"] },
    { id: "1.2-B-22", subtopic: "The twelve labours", q: "What did the Mares of Diomedes feed on?", answers: ["human flesh", "golden grain", "open flame", "raw gold"] },
    { id: "1.2-B-23", subtopic: "The twelve labours", q: "How did Heracles calm the man-eating Mares of Diomedes?", answers: ["he fed Diomedes himself to them", "he sang to soothe them", "he starved them into weakness", "he covered their eyes"] },
    { id: "1.2-B-24", subtopic: "The twelve labours", q: "Who was Hippolyte?", answers: ["queen of the Amazons", "a priestess of Hera", "the daughter of Eurystheus", "the queen of Crete"] },
    { id: "1.2-B-25", subtopic: "The twelve labours", q: "Hippolyte was willing to give up her belt — why did the labour end in her death?", answers: ["Hera spread a rumour and the Amazons attacked", "Heracles broke his promise and struck first", "Ares ordered the Amazons to kill him", "Eurystheus demanded that she be killed"] },
    { id: "1.2-B-26", subtopic: "The twelve labours", q: "What kind of creature was Geryon?", answers: ["a monster with three heads and three bodies", "a giant herdsman with a single eye", "a great bull that breathed out fire", "a water serpent with many heads"] },
    { id: "1.2-B-27", subtopic: "The twelve labours", q: "Which later Roman story was set during Heracles's return with Geryon's cattle?", answers: ["Hercules and Cacus", "the death of Hercules", "Hercules and Achelous", "the founding of Thebes"] },
    { id: "1.2-B-28", subtopic: "The twelve labours", q: "How did Heracles obtain the Apples of the Hesperides?", answers: ["he tricked Atlas into taking back the sky", "he killed the guardian serpent himself", "he stole them while the Hesperides slept", "he was simply given them by Hera"] },
    { id: "1.2-B-29", subtopic: "The twelve labours", q: "Whom did Heracles free on the way, gaining advice about the apples?", answers: ["Prometheus", "Atlas", "Iolaus", "Theseus"] },
    { id: "1.2-B-30", subtopic: "The twelve labours", q: "What happened to the Apples of the Hesperides in the end?", answers: ["Athena returned them to the garden", "Eurystheus kept them for himself", "Heracles ate them", "they were offered to Zeus"] },
    { id: "1.2-B-31", subtopic: "The twelve labours", q: "What was Cerberus?", answers: ["the three-headed hound of Hades", "a many-headed water serpent", "the man-eating dog of Diomedes", "a fierce monster of the Amazons"] },
    { id: "1.2-B-32", subtopic: "The twelve labours", q: "What condition did Hades set for Heracles to take Cerberus?", answers: ["that he capture him without weapons", "that he never return to the surface", "that he leave Geryon's cattle behind", "that he set Persephone free"] },
    { id: "1.2-B-33", subtopic: "The twelve labours", q: "What did Heracles do before entering the Underworld for Cerberus?", answers: ["he was initiated into the Eleusinian Mysteries", "he made a great sacrifice to Hera", "he consulted the oracle at Delphi again", "he gave up his lion-skin cloak"] },

    // ── SUBTOPIC C: Heracles and Olympia ──
    { id: "1.2-C-01", subtopic: "Heracles and Olympia", q: "What is the traditional founding date of the Olympic Games?", answers: ["776 BC", "472 BC", "312 BC", "19 BC"] },
    { id: "1.2-C-02", subtopic: "Heracles and Olympia", q: "Where were the Olympic Games held?", answers: ["Olympia, in Elis", "Athens", "Delphi", "Mount Olympus"] },
    { id: "1.2-C-03", subtopic: "Heracles and Olympia", q: "In the Heracles version, why did he found the Olympic Games?", answers: ["to honour Zeus after defeating Augeas", "as funeral games for his children", "to thank Athena for her help", "to mark the end of all his labours"] },
    { id: "1.2-C-04", subtopic: "Heracles and Olympia", q: "In the other founding story, who founded the games and why?", answers: ["Pelops, as funerary games for Oinomaos", "Eurystheus, to honour Heracles", "Zeus, after defeating the Titans", "Theseus, after killing the Cretan Bull"] },
    { id: "1.2-C-05", subtopic: "Heracles and Olympia", q: "How did Pelops win the chariot race against Oinomaos?", answers: ["he had the chariot's linchpins replaced with wax", "he bribed the judges of the race", "he used faster horses given by Zeus", "he drugged Oinomaos before the start"] },
    { id: "1.2-C-06", subtopic: "Heracles and Olympia", q: "Where on the Temple of Zeus was the Pelops story shown?", answers: ["the eastern pediment", "the twelve metopes", "the western pediment", "the inner frieze"] },
    { id: "1.2-C-07", subtopic: "Heracles and Olympia", q: "Where on the Temple of Zeus were the labours of Heracles shown?", answers: ["the twelve metopes", "the eastern pediment", "the western pediment", "the cult statue"] },
    { id: "1.2-C-08", subtopic: "Heracles and Olympia", q: "How were the twelve metopes of the labours arranged?", answers: ["six above the front, six above the back", "all twelve along the front", "six on each long side", "in a band around the whole temple"] },
    { id: "1.2-C-09", subtopic: "Heracles and Olympia", q: "When did building of the Temple of Zeus at Olympia begin?", answers: ["472 BC", "776 BC", "312 BC", "19 BC"] },
    { id: "1.2-C-10", subtopic: "Heracles and Olympia", q: "What were the sculptor's three aims for the metopes?", answers: ["make them recognisable, realistic, and fill the space", "glorify Zeus, frighten enemies, and display wealth", "teach the myths, honour athletes, and show piety", "show movement, bright colour, and strong emotion"] },
    { id: "1.2-C-11", subtopic: "Heracles and Olympia", q: "On the Cretan Bull metope, why does Heracles hold a club when the myth says he strangled the bull?", answers: ["to help make the scene easily recognisable", "because the sculptor did not know the myth", "because the myth was later changed", "to hide a flaw in the marble block"] },

    // ── SUBTOPIC D: The Roman stories ──
    { id: "1.2-D-01", subtopic: "The Roman stories", q: "Who wrote the prescribed account of Hercules and Cacus?", answers: ["Virgil", "Ovid", "Homer", "Livy"] },
    { id: "1.2-D-02", subtopic: "The Roman stories", q: "In which work does the story of Hercules and Cacus appear?", answers: ["the Aeneid", "the Metamorphoses", "the Iliad", "the Odyssey"] },
    { id: "1.2-D-03", subtopic: "The Roman stories", q: "During which labour is the Cacus story set?", answers: ["the tenth — returning the Cattle of Geryon", "the first — the Nemean Lion", "the twelfth — capturing Cerberus", "the fifth — the Augean Stables"] },
    { id: "1.2-D-04", subtopic: "The Roman stories", q: "Who tells Aeneas the story of Hercules and Cacus?", answers: ["Evander", "Hercules himself", "Achelous", "Romulus"] },
    { id: "1.2-D-05", subtopic: "The Roman stories", q: "What was Cacus?", answers: ["a fire-breathing, half-human son of Vulcan", "a centaur of the Italian hills", "a giant with three heads", "a river god of the Tiber"] },
    { id: "1.2-D-06", subtopic: "The Roman stories", q: "Where did Cacus live?", answers: ["in a cave on the Aventine Hill", "in the Forum Boarium", "in a cavern beneath the Tiber", "on the Palatine Hill"] },
    { id: "1.2-D-07", subtopic: "The Roman stories", q: "What gruesome detail decorated Cacus's lair?", answers: ["the heads of men nailed to the doors", "piles of stolen golden treasure", "the bones of his slaughtered cattle", "broken statues of the gods"] },
    { id: "1.2-D-08", subtopic: "The Roman stories", q: "How did Cacus hide the tracks of the stolen cattle?", answers: ["he dragged them into his cave backwards", "he carried them over his shoulders", "he washed the tracks away in the Tiber", "he drove them across bare rock"] },
    { id: "1.2-D-09", subtopic: "The Roman stories", q: "How many of Hercules's cattle did Cacus steal?", answers: ["eight", "three", "twelve", "just one"] },
    { id: "1.2-D-10", subtopic: "The Roman stories", q: "How was Cacus's theft of the cattle discovered?", answers: ["a trapped cow mooed as Hercules was leaving", "Evander spotted the hoof prints", "the cattle broke free of the cave", "Hercules counted his herd and found some gone"] },
    { id: "1.2-D-11", subtopic: "The Roman stories", q: "How did Hercules reach Cacus inside his blocked cave?", answers: ["he tore the top off the mountain", "he smashed the boulder with his club", "he dug a tunnel underneath it", "he set fire to the cave entrance"] },
    { id: "1.2-D-12", subtopic: "The Roman stories", q: "How did Hercules kill Cacus?", answers: ["with a stranglehold, as on the Nemean Lion", "with a blow from his great club", "with an arrow dipped in Hydra venom", "by burning him in his own flames"] },
    { id: "1.2-D-13", subtopic: "The Roman stories", q: "What did Evander establish to honour Hercules?", answers: ["an annual sacrifice at the Great Altar", "a temple on the Aventine Hill", "the founding of the Olympic Games", "a yearly festival of chariot games"] },
    { id: "1.2-D-14", subtopic: "The Roman stories", q: "Who was allowed to take part in the sacrifice at the Great Altar?", answers: ["only men", "only women", "only priests", "only slaves"] },
    { id: "1.2-D-15", subtopic: "The Roman stories", q: "From 312 BC, who ran the cult of Hercules in Rome?", answers: ["a selected group of slaves", "the Roman senate", "two priestly families alone", "the Vestal Virgins"] },
    { id: "1.2-D-16", subtopic: "The Roman stories", q: "Which temple to Hercules, built in the second century BC, still stands in Rome?", answers: ["the Temple of Hercules the Victor", "the Temple of Zeus", "the Great Altar of Jupiter", "the Temple of Vulcan"] },
    { id: "1.2-D-17", subtopic: "The Roman stories", q: "Who wrote the prescribed account of Achelous and the death of Hercules?", answers: ["Ovid", "Virgil", "Homer", "Pausanias"] },
    { id: "1.2-D-18", subtopic: "The Roman stories", q: "In which work does the death of Hercules appear?", answers: ["the Metamorphoses", "the Aeneid", "the Iliad", "the Fasti"] },
    { id: "1.2-D-19", subtopic: "The Roman stories", q: "Who tells the story of his defeat by Hercules?", answers: ["the river god Achelous himself", "Hercules himself", "Evander", "Deianira"] },
    { id: "1.2-D-20", subtopic: "The Roman stories", q: "Why did Hercules and Achelous fight?", answers: ["both wanted to marry Deianira", "Achelous had stolen his cattle", "Achelous had insulted Zeus", "they argued over who was stronger"] },
    { id: "1.2-D-21", subtopic: "The Roman stories", q: "Into what forms did Achelous transform during the fight?", answers: ["first a serpent, then a bull", "first a lion, then an eagle", "first a boar, then a serpent", "first a bull, then a centaur"] },
    { id: "1.2-D-22", subtopic: "The Roman stories", q: "What became of Achelous's broken-off horn?", answers: ["it became the cornucopia, the horn of plenty", "it was hung up as a trophy in a temple", "it was given as a wedding gift to Deianira", "it was turned into a horn of solid gold"] },
    { id: "1.2-D-23", subtopic: "The Roman stories", q: "Who was Nessus?", answers: ["a centaur who carried Deianira across a river", "a river god who fought against Hercules", "the old king of the land of Aitolia", "a fierce warrior among the Amazons"] },
    { id: "1.2-D-24", subtopic: "The Roman stories", q: "How did Hercules kill Nessus?", answers: ["with an arrow tipped in the Hydra's venom", "with his bare hands", "with a blow from his club", "by drowning him in the river"] },
    { id: "1.2-D-25", subtopic: "The Roman stories", q: "What lie did the dying Nessus tell Deianira about his blood-soaked tunic?", answers: ["that it was a love charm to win Hercules back", "that it would make Hercules immortal", "that it would protect Hercules in battle", "that it would reveal any lies he told"] },
    { id: "1.2-D-26", subtopic: "The Roman stories", q: "What led Deianira to give Hercules the tunic of Nessus?", answers: ["a rumour that Hercules loved Iole", "Hercules had abandoned her", "Juno had ordered her to do it", "she meant to poison him"] },
    { id: "1.2-D-27", subtopic: "The Roman stories", q: "How did the tunic of Nessus kill Hercules?", answers: ["heat activated the venom and it stuck to his skin", "it slowly strangled the life out of him", "it turned his whole body to cold stone", "it set the altar and the temple ablaze"] },
    { id: "1.2-D-28", subtopic: "The Roman stories", q: "How did Hercules choose to die?", answers: ["he built his own funeral pyre and lay on it", "he threw himself into the Tiber", "he was struck down by Juno", "he fell upon his own sword"] },
    { id: "1.2-D-29", subtopic: "The Roman stories", q: "According to Jupiter, what happened to Hercules after death?", answers: ["his mortal part burned away; his divine part rose to Olympus", "he was sent down to the Underworld for ever", "he was reborn on earth as an ordinary mortal", "he was placed in the sky as a bright constellation"] },
    { id: "1.2-D-30", subtopic: "The Roman stories", q: "Which goddess finally agreed to Hercules becoming a god?", answers: ["Juno (Hera)", "Venus (Aphrodite)", "Minerva (Athena)", "Diana (Artemis)"] },

  ];

  window.CivQuiz.topics.push({
    id: "1.2",
    title: "Heracles",
    list: "civ-myth-religion",   // shared BKT vocab_list for Myth & Religion
    questions: questions
  });
})();
