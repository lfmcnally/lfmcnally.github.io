// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: The Homeric World, Topic 4 — Tombs, Graves and Burial
// ============================================================
// Built from the Topic 4 revision pages:
//   4.1 Burial Customs and Beliefs · 4.2 Shaft Graves and Cist Graves
//   4.3 Tholos and Chamber Tombs · 4.4 Grave Circles A and B
//   4.5 Funerary Objects
//
// Subtopics:
//   A. Burial customs and beliefs
//   B. Shaft graves and cist graves
//   C. Tholos and chamber tombs
//   D. Grave Circle A and Grave Circle B
//   E. Funerary objects
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

    // ── Burial customs and beliefs ──
    { id: "hw4-01", subtopic: "Burial customs and beliefs", q: "What was the normal Mycenaean way of disposing of the dead?", answers: ["burial in the ground", "cremation on a pyre", "exposure on a hillside", "burial at sea"], accept: ["burial", "inhumation"] },
    { id: "hw4-02", subtopic: "Burial customs and beliefs", q: "Which grave goods were usually buried with men?", answers: ["weapons and fine cups", "jewellery and mirrors", "tools and seed jars", "figurines and lamps"], accept: ["weapons"] },
    { id: "hw4-03", subtopic: "Burial customs and beliefs", q: "When a family tomb was reopened for a new burial, what happened to the earlier bones?", answers: ["they were pushed aside", "they were burned", "they were thrown out", "they were reburied elsewhere"], accept: ["pushed aside", "moved aside"] },
    { id: "hw4-04", subtopic: "Burial customs and beliefs", q: "What does the reuse of tombs over generations suggest?", answers: ["a lasting family link to the tomb", "a shortage of land for new tombs", "a law against building new tombs", "a lack of money for new tombs"], accept: ["family link", "link between family and tomb"] },
    { id: "hw4-05", subtopic: "Burial customs and beliefs", q: "What was smashed in the dromos after a burial, probably as a final toast?", answers: ["cups", "lamps", "swords", "masks"], accept: ["cups", "drinking cups"] },
    { id: "hw4-06", subtopic: "Burial customs and beliefs", q: "What was done to the doorway of a chamber or tholos tomb after a burial?", answers: ["it was walled up", "it was painted", "it was guarded", "it was left open"], accept: ["walled up", "blocked"] },

    // ── Shaft graves and cist graves ──
    { id: "hw4-07", subtopic: "Shaft graves and cist graves", q: "What is a cist grave?", answers: ["a small pit lined with stone slabs", "a deep pit cut into the rock", "a chamber cut into a hillside", "a round chamber with a stone dome"], accept: ["pit lined with stone", "stone-lined pit"] },
    { id: "hw4-08", subtopic: "Shaft graves and cist graves", q: "Which type of grave is by far the most common?", answers: ["the cist grave", "the shaft grave", "the chamber tomb", "the tholos tomb"], accept: ["cist", "cist grave"] },
    { id: "hw4-09", subtopic: "Shaft graves and cist graves", q: "What is a shaft grave?", answers: ["a rectangular pit cut down into the rock", "a small pit lined with stone slabs", "a burial chamber cut into a hillside", "a round chamber with a stone dome"], accept: ["pit cut into the rock", "rectangular pit"] },
    { id: "hw4-10", subtopic: "Shaft graves and cist graves", q: "How was a shaft grave closed after the burial?", answers: ["roofed with timber or slabs", "sealed with a stone door", "covered with a stone dome", "filled with pebbles only"], accept: ["roofed", "timber or slabs"] },
    { id: "hw4-11", subtopic: "Shaft graves and cist graves", q: "About how deep could a shaft grave be?", answers: ["about 4 metres", "about 1 metre", "about 10 metres", "about 20 metres"], accept: ["4", "4 metres", "about 4 metres"] },
    { id: "hw4-12", subtopic: "Shaft graves and cist graves", q: "In which centuries BC were shaft graves mainly used?", answers: ["the 17th and 16th", "the 15th and 14th", "the 13th and 12th", "the 19th and 18th"], accept: ["17th and 16th", "17th and 16th centuries"] },
    { id: "hw4-13", subtopic: "Shaft graves and cist graves", q: "Who were shaft graves used for?", answers: ["the first ruling elite", "ordinary farmers", "wealthy merchants", "priests and priestesses"], accept: ["ruling elite", "the elite", "rulers"] },
    { id: "hw4-14", subtopic: "Shaft graves and cist graves", q: "What is a stele?", answers: ["an upright carved stone slab", "a carved stone doorway", "a stone-lined burial pit", "a gold mask for the dead"], accept: ["upright stone slab", "carved stone slab", "grave marker"] },

    // ── Tholos and chamber tombs ──
    { id: "hw4-15", subtopic: "Tholos and chamber tombs", q: "Where was a chamber tomb made?", answers: ["cut into a hillside", "dug down into flat rock", "built on flat ground", "set inside the citadel"], accept: ["hillside"] },
    { id: "hw4-16", subtopic: "Tholos and chamber tombs", q: "What is the sloping entrance passage to a chamber tomb or tholos called?", answers: ["the dromos", "the stomion", "the megaron", "the stele"], accept: ["dromos"] },
    { id: "hw4-17", subtopic: "Tholos and chamber tombs", q: "What is the doorway of a chamber tomb or tholos called?", answers: ["the stomion", "the dromos", "the propylon", "the stele"], accept: ["stomion"] },
    { id: "hw4-18", subtopic: "Tholos and chamber tombs", q: "Who were chamber tombs mainly used by?", answers: ["wealthy families below the elite", "the highest ruling families", "ordinary farmers and workers", "priests and their families"], accept: ["wealthy families"] },
    { id: "hw4-19", subtopic: "Tholos and chamber tombs", q: "What shape is a tholos tomb?", answers: ["beehive-shaped", "box-shaped", "pyramid-shaped", "cross-shaped"], accept: ["beehive", "beehive-shaped"] },
    { id: "hw4-20", subtopic: "Tholos and chamber tombs", q: "How is the dome of a tholos tomb built?", answers: ["by corbelling", "with a true arch", "by cutting into rock", "with timber beams"], accept: ["corbelling", "corbelled"] },
    { id: "hw4-21", subtopic: "Tholos and chamber tombs", q: "In corbelling, what does each ring of stone blocks do?", answers: ["overhangs the one below", "rests on a wooden frame", "is cut from a single stone", "leans on a central column"], accept: ["overhangs"] },
    { id: "hw4-22", subtopic: "Tholos and chamber tombs", q: "Which is the most famous tholos tomb at Mycenae?", answers: ["the Treasury of Atreus", "the Tomb of Aegisthus", "the House of the Warrior", "Shaft Grave V"], accept: ["treasury of atreus"] },
    { id: "hw4-23", subtopic: "Tholos and chamber tombs", q: "Which of these is a tholos tomb at Mycenae?", answers: ["the Tomb of Clytemnestra", "Grave Circle B", "the Cult Centre", "the House of the Warrior"], accept: ["tomb of clytemnestra", "tomb of aegisthus"] },
    { id: "hw4-24", subtopic: "Tholos and chamber tombs", q: "How can you tell a tholos tomb from a chamber tomb, since both have a dromos?", answers: ["a tholos has a built stone dome", "a tholos has no doorway", "a tholos was used only once", "a tholos was cut into rock"], accept: ["stone dome", "built dome", "dome"] },
    { id: "hw4-25", subtopic: "Tholos and chamber tombs", q: "On the social ladder of graves, which type is at the top?", answers: ["the tholos tomb", "the shaft grave", "the chamber tomb", "the cist grave"], accept: ["tholos", "tholos tomb"] },

    // ── Grave Circle A and Grave Circle B ──
    { id: "hw4-33", subtopic: "Grave Circle A and Grave Circle B", q: "How many gold death masks were found in Grave Circle A?", answers: ["five", "one", "three", "nine"], accept: ["five", "5"] },
    { id: "hw4-34", subtopic: "Grave Circle A and Grave Circle B", q: "In Grave Circle A, who were the gold death masks found on?", answers: ["adult men", "adult women", "children", "the oldest burials only"], accept: ["men", "adult men"] },
    { id: "hw4-35", subtopic: "Grave Circle A and Grave Circle B", q: "In Grave Circle A, what were the two children wrapped in?", answers: ["gold foil", "fine linen", "purple cloth", "bronze sheets"], accept: ["gold foil", "gold"] },
    { id: "hw4-36", subtopic: "Grave Circle A and Grave Circle B", q: "How many shaft graves are in Grave Circle A?", answers: ["six", "four", "nine", "twenty-four"], accept: ["six", "6"] },
    { id: "hw4-37", subtopic: "Grave Circle A and Grave Circle B", q: "How many burials did Grave Circle A contain?", answers: ["nineteen", "six", "twelve", "twenty-four"], accept: ["nineteen", "19"] },
    { id: "hw4-38", subtopic: "Grave Circle A and Grave Circle B", q: "About when was Grave Circle A enclosed inside the citadel walls with a ring of upright slabs?", answers: ["about 1250 BC", "about 1550 BC", "about 1400 BC", "about 1100 BC"], accept: ["1250 bc", "1250"] },
    { id: "hw4-39", subtopic: "Grave Circle A and Grave Circle B", q: "What does the later enclosing of Grave Circle A show?", answers: ["the burials still mattered to later rulers", "the graves had been robbed and resealed", "the walls were built to keep out robbers", "the circle was turned into a temple"], accept: ["still mattered", "important to later rulers"] },
    { id: "hw4-40", subtopic: "Grave Circle A and Grave Circle B", q: "Where does Grave Circle B lie?", answers: ["outside the citadel walls", "inside the citadel walls", "beside the Lion Gate", "under the palace"], accept: ["outside the walls", "outside"] },
    { id: "hw4-41", subtopic: "Grave Circle A and Grave Circle B", q: "When was Grave Circle B excavated?", answers: ["1951–1954", "1876", "1900", "1921–1923"], accept: ["1951-1954", "1950s", "1951-54"] },
    { id: "hw4-42", subtopic: "Grave Circle A and Grave Circle B", q: "How many graves does Grave Circle B hold?", answers: ["twenty-four", "fifteen", "nineteen", "thirty-two"], accept: ["twenty-four", "24"] },
    { id: "hw4-43", subtopic: "Grave Circle A and Grave Circle B", q: "Which remarkable object was found in Grave Circle B?", answers: ["a rock-crystal bowl shaped like a duck", "a gold box with lions chasing deer", "a gold cup with bulls caught in nets", "a bronze dagger inlaid with lions"], accept: ["duck bowl", "rock crystal duck", "rock-crystal bowl"] },
    { id: "hw4-44", subtopic: "Grave Circle A and Grave Circle B", q: "What is the single death mask from Grave Circle B made of?", answers: ["electrum", "gold", "silver", "bronze"], accept: ["electrum"] },
    { id: "hw4-45", subtopic: "Grave Circle A and Grave Circle B", q: "Why should we be cautious about calling the people in the Grave Circles a royal dynasty?", answers: ["we know none of their names", "they were buried outside Mycenae", "they had very few grave goods", "they lived after the palaces fell"], accept: ["no names", "names unknown"] },

    // ── Funerary objects ──
    { id: "hw4-26", subtopic: "Funerary objects", q: "Which grave was the gold death mask found in?", answers: ["Shaft Grave V", "Shaft Grave IV", "Shaft Grave I", "Grave Circle B"], accept: ["shaft grave v", "shaft grave 5", "v", "5"] },
    { id: "hw4-27", subtopic: "Funerary objects", q: "How was the gold death mask made?", answers: ["hammered from a sheet of gold", "cast in a clay mould of a face", "carved from a solid gold block", "painted in gold onto shaped clay"], accept: ["hammered", "sheet of gold"] },
    { id: "hw4-28", subtopic: "Funerary objects", q: "Who discovered the gold death mask in 1876?", answers: ["Heinrich Schliemann", "Sir Arthur Evans", "Carl William Blegen", "Michael Ventris"], accept: ["schliemann", "heinrich schliemann"] },
    { id: "hw4-29", subtopic: "Funerary objects", q: "What did Schliemann call the gold death mask?", answers: ["the Mask of Agamemnon", "the Mask of Menelaus", "the Mask of Atreus", "the Mask of Priam"], accept: ["mask of agamemnon", "agamemnon"] },
    { id: "hw4-30", subtopic: "Funerary objects", q: "To about when does the gold death mask date?", answers: ["1550–1500 BC", "1350–1300 BC", "1250–1200 BC", "1150–1100 BC"], accept: ["1550-1500 bc", "1550-1500", "1550 to 1500 bc"] },
    { id: "hw4-31", subtopic: "Funerary objects", q: "Why can the name Mask of Agamemnon not be right?", answers: ["it is centuries older than any Trojan War", "it was found at Tiryns, not Mycenae", "it shows a woman, not a man", "it was made in Egypt, not Greece"], accept: ["too early", "centuries older"] },
    { id: "hw4-32", subtopic: "Funerary objects", q: "Where is the gold death mask now?", answers: ["the National Archaeological Museum in Athens", "the British Museum in London", "the Louvre Museum in Paris", "the small site museum at Mycenae"], accept: ["athens", "national archaeological museum"] },

  ];

  window.HomericQuiz.topics.push({
    id: "4",
    title: "Tombs, Graves and Burial",
    list: "civ-homeric-world",   // shared BKT vocab_list for the Homeric World
    questions: questions
  });
})();
