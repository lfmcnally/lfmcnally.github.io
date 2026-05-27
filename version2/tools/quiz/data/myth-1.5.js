// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: Topic 1.5 — Festivals
// ============================================================
// Focused on the core examinable knowledge (based on the
// revision page), but covering it thoroughly:
//   A. The Great Panathenaia (Greece)
//   B. The City Dionysia (Greece)
//   C. The Lupercalia (Rome)
//   D. The Saturnalia (Rome)
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

    // ── SUBTOPIC A: The Great Panathenaia ──
    { id: "1.5-A-01", subtopic: "The Great Panathenaia", q: "In whose honour was the Great Panathenaia held?", answers: ["Athena", "Dionysus", "Zeus", "Poseidon"] },
    { id: "1.5-A-02", subtopic: "The Great Panathenaia", q: "Who was said to have founded the Panathenaia?", answers: ["Theseus", "Pericles", "Solon", "Cecrops"] },
    { id: "1.5-A-03", subtopic: "The Great Panathenaia", q: "How often was the Great Panathenaia held, and for how long?", answers: ["every four years, for eight days", "every single year, for five days", "every two years, for three days", "every four years, for just one day"] },
    { id: "1.5-A-04", subtopic: "The Great Panathenaia", q: "Who could take part in the Great Panathenaia?", answers: ["only Athenians and resident foreigners", "all Greeks from every city", "only Athenian-born noble men", "anyone at all who could pay"] },
    { id: "1.5-A-05", subtopic: "The Great Panathenaia", q: "What occasion did the festival celebrate?", answers: ["Athena's birthday", "the founding of Athens", "the victory over Persia", "the start of the new year"] },
    { id: "1.5-A-06", subtopic: "The Great Panathenaia", q: "What were the prizes at the Panathenaia?", answers: ["amphorae filled with olive oil", "crowns of fresh laurel leaves", "bags of Athenian silver coins", "polished bronze tripods"] },
    { id: "1.5-A-07", subtopic: "The Great Panathenaia", q: "What was shown on a Panathenaic prize amphora?", answers: ["Athena on one side and the event on the other", "the whole row of twelve Olympians", "the twelve labours of Heracles", "a detailed map of the city of Athens"] },
    { id: "1.5-A-08", subtopic: "The Great Panathenaia", q: "What did rhapsodes do on the first day?", answers: ["recited Homer's Iliad and Odyssey from memory", "performed brand-new tragic plays", "sang choral hymns to Dionysus", "debated questions of philosophy"] },
    { id: "1.5-A-09", subtopic: "The Great Panathenaia", q: "Which two instruments featured in the musical contests?", answers: ["the aulos (double flute) and the kithara", "the lyre and the hand drum", "the trumpet and the harp", "the reed pipe and the cymbals"] },
    { id: "1.5-A-10", subtopic: "The Great Panathenaia", q: "Which combat event combined boxing, wrestling, and kicking?", answers: ["the pankration", "the pentathlon", "the stadion", "the apobates"] },
    { id: "1.5-A-11", subtopic: "The Great Panathenaia", q: "What were the only two rules of the pankration?", answers: ["no eye-gouging and no biting", "no kicking and no punching", "three falls needed to win", "no weapons of any kind"] },
    { id: "1.5-A-12", subtopic: "The Great Panathenaia", q: "What was the apobates?", answers: ["charioteers dismounted, ran alongside, then leapt back on", "a two-mile torch race running up to the Acropolis", "a hard-fought rowing boat race held at Piraeus", "a fierce war dance performed by the ten tribes"] },
    { id: "1.5-A-13", subtopic: "The Great Panathenaia", q: "Unusually, who received the prize for the apobates?", answers: ["the owner of the horses, not the rider", "the single fastest runner", "the winning Athenian tribe", "the charioteer himself"] },
    { id: "1.5-A-14", subtopic: "The Great Panathenaia", q: "What did the winner's torch do after the torch race?", answers: ["it lit the next day's sacrificial flame", "it signalled the start of the games", "it was offered whole to Athena", "it guided the night procession"] },
    { id: "1.5-A-15", subtopic: "The Great Panathenaia", q: "What was the peplos?", answers: ["a robe woven for the goddess Athena", "the sacrificial knife of the priestess", "a Panathenaic prize amphora", "a great bronze ceremonial shield"] },
    { id: "1.5-A-16", subtopic: "The Great Panathenaia", q: "What was stitched onto the peplos?", answers: ["scenes of the battle between gods and giants", "the twelve great labours of Heracles", "the birth of the goddess Athena", "the whole Panathenaic procession"] },
    { id: "1.5-A-17", subtopic: "The Great Panathenaia", q: "How was the larger peplos brought to the Acropolis?", answers: ["as a sail on a ceremonial boat", "carried by ten young priestesses", "worn around the eponymous archon", "folded inside a sacred chest"] },
    { id: "1.5-A-18", subtopic: "The Great Panathenaia", q: "Where did the great procession end?", answers: ["at the altar of Athena Polias on the Acropolis", "at the Theatre of Dionysus below the Acropolis", "back at the Dipylon Gate where it began", "at the Temple of Olympian Zeus"] },
    { id: "1.5-A-19", subtopic: "The Great Panathenaia", q: "Where is the Panathenaic procession depicted?", answers: ["on the Ionic frieze of the Parthenon", "on the outer Doric metopes", "on a Panathenaic prize amphora", "on the eastern pediment"] },
    { id: "1.5-A-20", subtopic: "The Great Panathenaia", q: "Who was allowed onto the Acropolis for the sacrifice?", answers: ["only Athenians", "all of the festival's competitors", "only the priests and officials", "anyone who had paid the fee"] },
    { id: "1.5-A-21", subtopic: "The Great Panathenaia", q: "What was the great sacrifice at the Panathenaia?", answers: ["a hecatomb of up to 100 oxen", "a single sacred white bull", "a pig, a sheep, and an ox", "a flock of one hundred goats"] },

    // ── SUBTOPIC B: The City Dionysia ──
    { id: "1.5-B-01", subtopic: "The City Dionysia", q: "In whose honour was the City Dionysia held?", answers: ["Dionysus", "Athena", "Apollo", "Saturn"] },
    { id: "1.5-B-02", subtopic: "The City Dionysia", q: "In what season was the City Dionysia held, and why?", answers: ["spring, as Dionysus was linked to rebirth", "autumn, just after the grain harvest", "winter, around the solstice", "high summer, at the year's peak"] },
    { id: "1.5-B-03", subtopic: "The City Dionysia", q: "Through what art form was Dionysus honoured at the festival?", answers: ["theatre", "athletics", "chariot racing", "choral hymns alone"] },
    { id: "1.5-B-04", subtopic: "The City Dionysia", q: "Why did the Athenians finally accept the statue of Dionysus?", answers: ["a plague struck them after they rejected it", "an oracle at Delphi commanded them to", "they had won a great war in his name", "the statue performed a public miracle"] },
    { id: "1.5-B-05", subtopic: "The City Dionysia", q: "Where was the City Dionysia held?", answers: ["the sanctuary of Dionysus, south of the Acropolis", "on top of the Acropolis itself, by the temple", "in the very heart of the Roman Forum", "at the great sanctuary of Olympia"] },
    { id: "1.5-B-06", subtopic: "The City Dionysia", q: "Who was the chief official of the festival?", answers: ["the eponymous archon", "the priest of Dionysus", "the wealthy choregos", "the Pontifex Maximus"] },
    { id: "1.5-B-07", subtopic: "The City Dionysia", q: "What was a choregos?", answers: ["a wealthy citizen who paid for a production", "a professional leading actor", "an elected judge of the plays", "the chief priest of Dionysus"] },
    { id: "1.5-B-08", subtopic: "The City Dionysia", q: "What was the Theoric Fund for?", answers: ["to help the poor afford to attend the theatre", "to pay the prizes of the playwrights", "to fund the building of the theatre", "to pay for the festival's sacrifices"] },
    { id: "1.5-B-09", subtopic: "The City Dionysia", q: "What was the dithyramb?", answers: ["a choral dance for Dionysus by the ten tribes", "a tragic trilogy by one playwright", "a naked foot race around the city", "a short comic play with satyrs"] },
    { id: "1.5-B-10", subtopic: "The City Dionysia", q: "Roughly how many amateurs took part in the dithyramb each year?", answers: ["about 1,000", "about 100", "about 500", "about 10,000"] },
    { id: "1.5-B-11", subtopic: "The City Dionysia", q: "What happened on Day 1, the pompé?", answers: ["a grand procession carrying the statue of Dionysus", "the staging of all five of the comedies", "the final judging of the tragedies", "the giving out of the winners' prizes"] },
    { id: "1.5-B-12", subtopic: "The City Dionysia", q: "What did people carry in the procession, recognising Dionysus's fertility?", answers: ["model phalluses", "olive branches", "lit torches", "ivy garlands"] },
    { id: "1.5-B-13", subtopic: "The City Dionysia", q: "How many comedies were staged, and on which day?", answers: ["five, on day two", "three, on day one", "ten, across five days", "one on each of the five days"] },
    { id: "1.5-B-14", subtopic: "The City Dionysia", q: "How were the tragedies staged on days 3 to 5?", answers: ["one playwright a day: three tragedies and a satyr", "a single tragedy on each one of the days", "five whole tragedies performed each day", "tragedies and comedies all mixed together"] },
    { id: "1.5-B-15", subtopic: "The City Dionysia", q: "What shows that tragedy was emphasised over comedy?", answers: ["three days were given to tragedy, only one to comedy", "tragedy alone carried a money prize", "only tragedy actually honoured Dionysus", "comedy was always performed last of all"] },
    { id: "1.5-B-16", subtopic: "The City Dionysia", q: "Name the one comic playwright whose plays survive.", answers: ["Aristophanes", "Sophocles", "Aeschylus", "Euripides"] },
    { id: "1.5-B-17", subtopic: "The City Dionysia", q: "Name one of the three great tragic playwrights.", answers: ["Sophocles", "Aristophanes", "Homer", "Pindar"] },
    { id: "1.5-B-18", subtopic: "The City Dionysia", q: "What was a satyr-play?", answers: ["a short comic-relief play with satyrs as the chorus", "a serious tragedy told in three parts", "a long choral hymn sung to Dionysus", "a sharp political comedy of city life"] },
    { id: "1.5-B-19", subtopic: "The City Dionysia", q: "Who or what were satyrs?", answers: ["half-man, half-goat companions of Dionysus", "the chief priests of Dionysus", "the masked actors of tragedy", "the festival's ten chosen judges"] },
    { id: "1.5-B-20", subtopic: "The City Dionysia", q: "How were the winning plays judged?", answers: ["ten judges ranked them; five lists were drawn out", "the whole audience voted with their applause", "the eponymous archon decided it all alone", "the priest of Dionysus made the final choice"] },
    { id: "1.5-B-21", subtopic: "The City Dionysia", q: "What prize did the victorious playwright receive?", answers: ["a garland of ivy", "a prize amphora", "a crown of olive", "a bag of silver"] },

    // ── SUBTOPIC C: The Lupercalia ──
    { id: "1.5-C-01", subtopic: "The Lupercalia", q: "When was the Lupercalia held?", answers: ["on 15th February, every year", "over 17–23 December", "on the 1st of January", "in the middle of March"] },
    { id: "1.5-C-02", subtopic: "The Lupercalia", q: "What kind of festival was the Lupercalia?", answers: ["one of fertility and purification", "one of the dead and mourning", "one of victory in war", "one of the grain harvest"] },
    { id: "1.5-C-03", subtopic: "The Lupercalia", q: "In whose honour was the Lupercalia held?", answers: ["Lupercus, whose name comes from 'wolf'", "Saturn, the god of sowing", "Dionysus, the god of wine", "Mars, the god of war"] },
    { id: "1.5-C-04", subtopic: "The Lupercalia", q: "Which founder of Rome was also honoured at the Lupercalia?", answers: ["Romulus", "Aeneas", "Numa", "Remus"] },
    { id: "1.5-C-05", subtopic: "The Lupercalia", q: "Where did the festival begin?", answers: ["the Lupercal, a cave on the Palatine Hill", "the Temple of Saturn in the Forum", "the centre of the Roman Forum", "the open Campus Martius"] },
    { id: "1.5-C-06", subtopic: "The Lupercalia", q: "Why was the Lupercal cave significant?", answers: ["it was where the she-wolf suckled Romulus and Remus", "it was believed to be the tomb of Romulus", "it was the exact spot where Rome was founded", "it held the eternal flame of the city"] },
    { id: "1.5-C-07", subtopic: "The Lupercalia", q: "What were the priests of the Lupercalia called?", answers: ["the Luperci", "the pontifices", "the augurs", "the Vestals"] },
    { id: "1.5-C-08", subtopic: "The Lupercalia", q: "Who could serve as Luperci?", answers: ["noble men, chosen for the day", "only the Vestal Virgins", "any citizen who applied", "trained lifelong priests"] },
    { id: "1.5-C-09", subtopic: "The Lupercalia", q: "What animals were sacrificed, and why?", answers: ["dogs and goats, chosen for their virility", "a pig, sheep, and ox, for purification", "one hundred oxen, to honour the god", "a white bull, in honour of Jupiter"] },
    { id: "1.5-C-10", subtopic: "The Lupercalia", q: "What was done with the sacrificial blood?", answers: ["a knife dipped in it was wiped on their foreheads", "it was all poured out over the stone altar", "it was drunk straight down by the priests", "it was sprinkled over the watching crowd"] },
    { id: "1.5-C-11", subtopic: "The Lupercalia", q: "After the blood was wiped off with wool, what were the Luperci expected to do?", answers: ["laugh", "weep", "pray aloud", "fall silent"] },
    { id: "1.5-C-12", subtopic: "The Lupercalia", q: "How did the Luperci run the race?", answers: ["naked, around the foot of the Palatine Hill", "in armour, through the Roman Forum", "on horseback, around the whole city", "in masks, up to the Acropolis"] },
    { id: "1.5-C-13", subtopic: "The Lupercalia", q: "What did the Luperci do to spectators during the race?", answers: ["whipped them with strips of goatskin", "threw handfuls of grain over them", "splashed them with poured wine", "handed them small gifts"] },
    { id: "1.5-C-14", subtopic: "The Lupercalia", q: "Why did women of rank place themselves in the runners' way?", answers: ["they believed being struck aided fertility and childbirth", "to receive the god's blessing of great wealth", "to be chosen as the next priestesses", "to win themselves a place at the feast"] },
    { id: "1.5-C-15", subtopic: "The Lupercalia", q: "Who were the active participants, and who simply watched?", answers: ["noble male Luperci took part; the public watched", "women led the rites; the men only watched", "slaves ran the race; their masters watched", "everyone in Rome ran together as one"] },
    { id: "1.5-C-16", subtopic: "The Lupercalia", q: "How did the Romans treat the traditional sacrifice at the Lupercal over time?", answers: ["they continued it without alteration", "they replaced it with a Greek rite", "they moved it into a grand temple", "they abolished the sacrifice entirely"] },

    // ── SUBTOPIC D: The Saturnalia ──
    { id: "1.5-D-01", subtopic: "The Saturnalia", q: "When was the Saturnalia held?", answers: ["over 17–23 December", "on 15th February", "in the middle of March", "on the 1st of May"] },
    { id: "1.5-D-02", subtopic: "The Saturnalia", q: "In whose honour was the Saturnalia held?", answers: ["Saturn, god of sowing and the seed", "Lupercus, a god of the wolf", "Dionysus, the god of wine", "Janus, the god of doorways"] },
    { id: "1.5-D-03", subtopic: "The Saturnalia", q: "What 'age' did the Saturnalia recall?", answers: ["the Golden Age, when gods and men were equals", "the heroic Age of the great heroes", "the founding of the city of Rome", "the early age of the Roman kings"] },
    { id: "1.5-D-04", subtopic: "The Saturnalia", q: "What made the Saturnalia unique among Roman festivals?", answers: ["men, women, children, and slaves all took part", "only the nobles were allowed to attend", "it lasted for a whole month", "only adult men were allowed to attend"] },
    { id: "1.5-D-05", subtopic: "The Saturnalia", q: "What famous social inversion happened at the Saturnalia?", answers: ["masters served their slaves dinner first", "slaves were freed for ever after", "women took over and ruled the city", "children chose the year's consuls"] },
    { id: "1.5-D-06", subtopic: "The Saturnalia", q: "What later Christian festival absorbed the Saturnalia?", answers: ["Christmas", "Easter", "Lent", "Epiphany"] },
    { id: "1.5-D-07", subtopic: "The Saturnalia", q: "Which prescribed source is a key visual record of the Saturnalia?", answers: ["the Calendar of Philocalus", "the Ionic frieze of the Parthenon", "the Liver of Piacenza", "a Panathenaic prize amphora"] },
    { id: "1.5-D-08", subtopic: "The Saturnalia", q: "What does the December page of the Calendar of Philocalus show?", answers: ["dice and a dice tower, a mask, and a torch", "a great sacrifice of one hundred oxen", "the naked Luperci running their race", "a chorus performing a tragic play"] },
    { id: "1.5-D-09", subtopic: "The Saturnalia", q: "What does the calendar line 'Now, slave, you are allowed to play with your master' show?", answers: ["the temporary inversion of the social hierarchy", "that slaves were always free in December", "that all gambling had been banned", "that masters openly mocked their slaves"] },
    { id: "1.5-D-10", subtopic: "The Saturnalia", q: "What activity, normally restricted, was permitted at the Saturnalia?", answers: ["gambling with dice", "chariot racing", "animal sacrifice", "public theatre"] },
    { id: "1.5-D-11", subtopic: "The Saturnalia", q: "Who provided the religious officials for the Saturnalia?", answers: ["the priests of the Temple of Saturn", "the Vestal Virgins of Rome", "the college of augurs", "the noble male Luperci"] },
    { id: "1.5-D-12", subtopic: "The Saturnalia", q: "Who paid for the public feast?", answers: ["the Senate, using state money", "the wealthy choregoi", "the emperor from his own purse", "the priests of Saturn"] },
    { id: "1.5-D-13", subtopic: "The Saturnalia", q: "What was unusual about how the priest performed the sacrifice?", answers: ["he sacrificed bare-headed, in the Greek style", "he sacrificed all alone at midnight", "he offered up no animal at all", "he wore a wolf-skin while he did it"] },
    { id: "1.5-D-14", subtopic: "The Saturnalia", q: "What did the priest's uncovered head allude to?", answers: ["the link between Saturn and the Greek god Cronus", "the founding of the city of Rome by Romulus", "the lost Golden Age of old Athens", "the worship of the wine-god Dionysus"] },
    { id: "1.5-D-15", subtopic: "The Saturnalia", q: "What sat at the banquet table to signify Saturn's presence?", answers: ["a statue of Saturn", "an empty throne", "the sacred flame", "a wolf-skin cloak"] },
    { id: "1.5-D-16", subtopic: "The Saturnalia", q: "What cap did men wear as a symbol of freedom?", answers: ["the pilius, a felt cap", "a crown of laurel", "a wolf-skin hood", "a garland of ivy"] },
    { id: "1.5-D-17", subtopic: "The Saturnalia", q: "What was central to the private celebration of the Saturnalia?", answers: ["gift-giving", "athletic contests", "chariot racing", "staged tragedies"] },
    { id: "1.5-D-18", subtopic: "The Saturnalia", q: "How did the festival's length change over time?", answers: ["cut to three days by Augustus, then five by Claudius", "it was always exactly seven full days long", "it shrank from a whole month down to a week", "it was always fixed at just a single day"] },

  ];

  window.CivQuiz.topics.push({
    id: "1.5",
    title: "Festivals",
    list: "civ-myth-religion",   // shared BKT vocab_list for Myth & Religion
    questions: questions
  });
})();
