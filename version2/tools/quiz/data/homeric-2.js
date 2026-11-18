// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: The Homeric World, Topic 2 — Life in the Mycenaean Age
// ============================================================
// Built from the Topic 2 revision pages:
//   2.1 The Palace and the Megaron · 2.2 Hunting and the Elite
//   2.3 Armour, Weapons and Warfare · 2.4 Chariots, Clothing and Trade
//   2.5 Linear B
//
// Subtopics:
//   A. The palace and the megaron
//   B. Hunting and the elite
//   C. Armour, weapons and warfare
//   D. Chariots, clothing and trade
//   E. Linear B
//
//   id:       question id (BKT key)
//   subtopic: BKT tracking group label (questions group by this)
//   q:        question text
//   answers:  4 options — answers[0] is ALWAYS correct; the
//             tester shuffles before display.
//   accept:   short typed answers that should count as right
//             (lower case; for typed-answer marking).
//
// BKT is tracked per question, keyed by `id`, in the shared
// vocab_bkt list named below ("list").
// ============================================================

(function () {
  window.HomericQuiz = window.HomericQuiz || { topics: [] };

  const questions = [

    // ── The palace and the megaron ──
    { id: "hw2-01", subtopic: "The palace and the megaron", q: "What was the Greek custom of guest-friendship under which visiting nobles were entertained at the palace?", answers: ["xenia", "kleos", "timē", "nostos"], accept: ["xenia"] },
    { id: "hw2-02", subtopic: "The palace and the megaron", q: "What were the huge storage jars that held oil, wine and grain in palace storerooms called?", answers: ["pithoi", "kraters", "amphorae", "kylikes"], accept: ["pithoi", "pithos"] },
    { id: "hw2-03", subtopic: "The palace and the megaron", q: "Which palace was famous for producing perfumed oil?", answers: ["Pylos", "Mycenae", "Tiryns", "Knossos"], accept: ["pylos"] },
    { id: "hw2-04", subtopic: "The palace and the megaron", q: "What is the name for the system in which goods flowed into the palace and back out as rations, gifts and raw materials?", answers: ["a redistributive economy", "a market economy", "a tribute economy", "a coin-based economy"], accept: ["redistributive economy", "redistributive"] },
    { id: "hw2-05", subtopic: "The palace and the megaron", q: "What was the throne room and great hall at the heart of a Mycenaean palace called?", answers: ["the megaron", "the propylon", "the tholos", "the dromos"], accept: ["megaron"] },
    { id: "hw2-06", subtopic: "The palace and the megaron", q: "What stood at the centre of the main hall of the megaron?", answers: ["a large circular hearth", "a raised stone altar", "a carved stone throne", "a square water basin"], accept: ["hearth", "circular hearth"] },
    { id: "hw2-07", subtopic: "The palace and the megaron", q: "Against which wall of the megaron did the throne stand?", answers: ["the right-hand wall", "the left-hand wall", "the back wall", "the entrance wall"], accept: ["right", "right-hand wall", "the right"] },
    { id: "hw2-08", subtopic: "The palace and the megaron", q: "Which palace has the best-preserved plan, because it burned and was never rebuilt?", answers: ["Pylos", "Mycenae", "Tiryns", "Knossos"], accept: ["pylos"] },
    { id: "hw2-09", subtopic: "The palace and the megaron", q: "What does the near-identical megaron plan at Mycenae, Tiryns and Pylos suggest?", answers: ["a shared culture of kingship", "a single king ruling all three", "one architect building all three", "all three being built in one year"], accept: ["shared culture of kingship"] },

    // ── Hunting and the elite ──
    { id: "hw2-40", subtopic: "Hunting and the elite", q: "Which grave was the Lion Hunt Dagger found in?", answers: ["Shaft Grave IV", "Shaft Grave V", "Shaft Grave I", "Grave Circle B"], accept: ["shaft grave iv", "shaft grave 4", "iv", "4"] },
    { id: "hw2-41", subtopic: "Hunting and the elite", q: "Why is the lion hunt on the Lion Hunt Dagger probably symbolic?", answers: ["lions were rare or extinct on the mainland", "the dagger was made in Egypt", "lions were sacred and never hunted", "the scene shows a myth about Heracles"], accept: ["lions were rare", "no lions"] },
    { id: "hw2-42", subtopic: "Hunting and the elite", q: "In the Tiryns hunting fresco, what animal are the dogs bringing down?", answers: ["a boar", "a deer", "a lion", "a bull"], accept: ["boar", "a boar"] },

    // ── Armour, weapons and warfare ──
    { id: "hw2-33", subtopic: "Armour, weapons and warfare", q: "Why did long rapier swords give way to shorter, sturdier swords?", answers: ["rapiers tended to snap at the hilt", "rapiers were too costly to make", "rapiers were too heavy to lift", "rapiers rusted too quickly"], accept: ["snapped", "snap at the hilt"] },
    { id: "hw2-34", subtopic: "Armour, weapons and warfare", q: "What was the shoulder strap that held up a large tower or figure-of-eight shield called?", answers: ["a telamon", "a greave", "a cuirass", "a baldric"], accept: ["telamon"] },
    { id: "hw2-35", subtopic: "Armour, weapons and warfare", q: "What kind of shields do the soldiers carry on the Warrior Vase?", answers: ["small round shields", "tower shields", "figure-of-eight shields", "oblong wicker shields"], accept: ["round", "small round shields"] },
    { id: "hw2-36", subtopic: "Armour, weapons and warfare", q: "What does the Warrior Vase suggest about warfare by about 1200 BC?", answers: ["groups of soldiers fought together", "chariots had replaced infantry", "heroes fought in single combat", "archers were the main force"], accept: ["organised groups", "groups fought together"] },
    { id: "hw2-37", subtopic: "Armour, weapons and warfare", q: "About how much does the Dendra Armour weigh?", answers: ["about 18 kg", "about 8 kg", "about 30 kg", "about 45 kg"], accept: ["18", "18 kg", "18kg"] },
    { id: "hw2-38", subtopic: "Armour, weapons and warfare", q: "Early Mycenaean helmets were leather caps covered in rows of what?", answers: ["boar's tusks", "bronze scales", "bone plates", "horn strips"], accept: ["boars tusks", "boar's tusks", "boar tusks", "tusks"] },
    { id: "hw2-39", subtopic: "Armour, weapons and warfare", q: "In Iliad 10, which hero wears a boar's tusk helmet?", answers: ["Odysseus", "Achilles", "Hector", "Paris"], accept: ["odysseus"] },

    // ── Chariots, clothing and trade ──
    { id: "hw2-24", subtopic: "Chariots, clothing and trade", q: "Why did long-distance Mycenaean trade go by sea?", answers: ["Greece is mountainous, with few roads", "ships were cheaper than horses", "the roads were full of bandits", "the palaces taxed the roads"], accept: ["mountains", "mountainous", "few roads"] },
    { id: "hw2-25", subtopic: "Chariots, clothing and trade", q: "Coins only reached Greece in the 7th century BC. How did Mycenaean trade work?", answers: ["by barter", "by credit", "by tribute", "by auction"], accept: ["barter"] },
    { id: "hw2-26", subtopic: "Chariots, clothing and trade", q: "Off the coast of which modern country was the Uluburun shipwreck found?", answers: ["Turkey", "Egypt", "Cyprus", "Crete"], accept: ["turkey"] },
    { id: "hw2-27", subtopic: "Chariots, clothing and trade", q: "Which two metals did the Uluburun ship carry, for making bronze?", answers: ["copper and tin", "copper and iron", "tin and lead", "gold and silver"], accept: ["copper and tin", "tin and copper"] },
    { id: "hw2-28", subtopic: "Chariots, clothing and trade", q: "Why did every Mycenaean bronze weapon depend on trade?", answers: ["Greece has very little tin", "Greece has very little copper", "Greece had no skilled smiths", "Greece had no fuel for furnaces"], accept: ["little tin", "no tin", "tin"] },
    { id: "hw2-29", subtopic: "Chariots, clothing and trade", q: "Where did the amber found at Mycenaean sites come from?", answers: ["northern Europe", "North Africa", "the Near East", "southern Italy"], accept: ["northern europe", "the baltic", "baltic"] },
    { id: "hw2-30", subtopic: "Chariots, clothing and trade", q: "How many spokes did the wheels of Mycenaean chariots have?", answers: ["four", "six", "eight", "twelve"], accept: ["four", "4"] },
    { id: "hw2-31", subtopic: "Chariots, clothing and trade", q: "On what is the earliest known picture of a Mycenaean chariot carved?", answers: ["a grave stele", "a gold ring", "a palace wall", "a Linear B tablet"], accept: ["stele", "grave stele"] },
    { id: "hw2-32", subtopic: "Chariots, clothing and trade", q: "What is the 'battle taxi' idea about chariots?", answers: ["they carried warriors to the fight, to fight on foot", "they charged in lines to break the enemy", "they carried the wounded away from the fight", "they carried archers who shot on the move"], accept: ["carried warriors to the fight"] },
    { id: "hw2-43", subtopic: "Chariots, clothing and trade", q: "Why do almost no Mycenaean garments survive?", answers: ["cloth rots away", "cloth was burned", "cloth was reused", "cloth was never buried"], accept: ["rots", "cloth rots"] },
    { id: "hw2-44", subtopic: "Chariots, clothing and trade", q: "From which culture did Mycenaean women's tiered, flounced skirts come?", answers: ["Minoan Crete", "Egypt and Nubia", "the Hittites", "the Trojans"], accept: ["minoan", "crete", "minoan crete"] },
    { id: "hw2-45", subtopic: "Chariots, clothing and trade", q: "Which dye came from the murex shellfish?", answers: ["purple", "yellow", "red", "blue"], accept: ["purple"] },
    { id: "hw2-46", subtopic: "Chariots, clothing and trade", q: "Where does the fresco known as La Parisienne come from?", answers: ["the palace at Knossos", "the palace at Mycenae", "the palace at Tiryns", "the palace at Pylos"], accept: ["knossos", "crete"] },

    // ── Linear B ──
    { id: "hw2-10", subtopic: "Linear B", q: "What did Linear B scribes write on?", answers: ["clay tablets", "papyrus rolls", "wax tablets", "bronze sheets"], accept: ["clay", "clay tablets"] },
    { id: "hw2-11", subtopic: "Linear B", q: "About how many syllable signs does Linear B use?", answers: ["about ninety", "about thirty", "about two hundred", "about six hundred"], accept: ["90", "ninety", "about 90"] },
    { id: "hw2-12", subtopic: "Linear B", q: "What are the small pictures of the thing being counted on a Linear B tablet called?", answers: ["ideograms", "syllabograms", "hieroglyphs", "cuneiform signs"], accept: ["ideograms", "ideogram"] },
    { id: "hw2-13", subtopic: "Linear B", q: "What object does the prescribed Linear B tablet from Pylos record?", answers: ["tripods", "swords", "chariot wheels", "storage jars"], accept: ["tripods", "tripod"] },
    { id: "hw2-14", subtopic: "Linear B", q: "How is the word for tripod written in Linear B syllables?", answers: ["ti-ri-po", "to-sa", "ku-ru-so", "pa-ka-na"], accept: ["ti-ri-po", "tiripo"] },
    { id: "hw2-15", subtopic: "Linear B", q: "What does the Linear B word ku-ru-so mean?", answers: ["gold", "father", "sword", "wine"], accept: ["gold"] },
    { id: "hw2-16", subtopic: "Linear B", q: "Why have the Linear B tablets survived?", answers: ["fires baked the clay hard", "they were sealed in tombs", "they were stored in jars", "scribes fired them in kilns"], accept: ["fire", "fires baked the clay"] },
    { id: "hw2-17", subtopic: "Linear B", q: "Between about which dates were the Mycenaean palaces destroyed?", answers: ["1200–1100 BC", "1600–1500 BC", "1400–1300 BC", "1000–900 BC"], accept: ["1200-1100 bc", "1200 to 1100 bc", "1200-1100"] },
    { id: "hw2-18", subtopic: "Linear B", q: "Which of these do the Linear B tablets never contain?", answers: ["stories and myths", "lists of stock", "ration lists", "offerings to gods"], accept: ["stories", "myths", "stories and myths"] },
    { id: "hw2-19", subtopic: "Linear B", q: "What was the Mycenaean king called in Linear B?", answers: ["wanax", "lawagetas", "hequetai", "basileus"], accept: ["wanax"] },
    { id: "hw2-20", subtopic: "Linear B", q: "Which high official had an estate about a third the size of the king's, and may have led the army?", answers: ["the lawagetas", "the wanax", "the hequetai", "the basileus"], accept: ["lawagetas"] },
    { id: "hw2-21", subtopic: "Linear B", q: "Which noble class in the Linear B tablets may have been the warrior elite?", answers: ["the hequetai", "the wanax", "the lawagetas", "the basileus"], accept: ["hequetai", "heketai"] },
    { id: "hw2-22", subtopic: "Linear B", q: "Who found the first Linear B tablets, at Knossos in 1900?", answers: ["Arthur Evans", "Heinrich Schliemann", "Carl Blegen", "Michael Ventris"], accept: ["evans", "arthur evans"] },
    { id: "hw2-23", subtopic: "Linear B", q: "Who showed in 1952 that Linear B was an early form of Greek?", answers: ["Michael Ventris", "Arthur Evans", "Alice Kober", "Heinrich Schliemann"], accept: ["ventris", "michael ventris"] },

  ];

  window.HomericQuiz.topics.push({
    id: "2",
    title: "Life in the Mycenaean Age",
    list: "civ-homeric-world",   // shared BKT vocab_list for the Homeric World
    questions: questions
  });
})();
