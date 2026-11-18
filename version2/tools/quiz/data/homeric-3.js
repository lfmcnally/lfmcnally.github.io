// ============================================================
// CLASSICALIA — GCSE Classical Civilisation
// Question Bank: The Homeric World, Topic 3 — Decorative Arts
// ============================================================
// Built from the Topic 3 revision pages:
//   3.1 Frescoes · 3.2 Jewellery and Metalwork
//   3.3 Decorative Objects · 3.4 Figurines
//
// Subtopics:
//   A. Frescoes
//   B. Jewellery and metalwork
//   C. Decorative objects: pottery and ivory
//   D. Figurines
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

    // ── Frescoes ──
    { id: "hw3-01", subtopic: "Frescoes", q: "On what surface was a Mycenaean fresco painted?", answers: ["wet lime plaster", "dry lime plaster", "wooden panels", "dressed stone"], accept: ["wet plaster", "wet lime plaster"] },
    { id: "hw3-02", subtopic: "Frescoes", q: "Why have the colours of Mycenaean frescoes lasted so well?", answers: ["the pigment soaked into the wet plaster", "the paint was sealed with varnish", "the walls were baked in a fire", "the pigment was mixed with oil"], accept: ["soaked into the plaster", "wet plaster"] },
    { id: "hw3-03", subtopic: "Frescoes", q: "Which earth, rich in iron, gave fresco painters their reds and yellows?", answers: ["ochre", "carbon", "chalk", "malachite"], accept: ["ochre"] },
    { id: "hw3-04", subtopic: "Frescoes", q: "What was the artificial pigment Egyptian blue made from?", answers: ["copper, sand and a flux", "tin, sand and lime", "iron, clay and ash", "copper, chalk and oil"], accept: ["copper sand and a flux", "copper, sand and flux"] },
    { id: "hw3-05", subtopic: "Frescoes", q: "What does the use of Egyptian blue show about the Mycenaeans?", answers: ["they were in contact with Egypt", "they had conquered Egypt", "their painters were Egyptian", "they traded only with Crete"], accept: ["contact with egypt"] },
    { id: "hw3-06", subtopic: "Frescoes", q: "In frescoes, what colour is men's skin usually painted?", answers: ["red-brown", "pale white", "yellow", "blue-grey"], accept: ["red-brown", "red brown", "red"] },
    { id: "hw3-07", subtopic: "Frescoes", q: "What do the flat blue backgrounds of frescoes, such as the Tiryns boar hunt, represent?", answers: ["nothing real", "the sky", "the sea", "a river"], accept: ["convention", "nothing"] },
    { id: "hw3-08", subtopic: "Frescoes", q: "Faces in frescoes are drawn in profile. How is the eye drawn?", answers: ["as if seen from the front", "as if seen from the side", "closed", "left out"], accept: ["from the front", "front"] },
    { id: "hw3-09", subtopic: "Frescoes", q: "From which people did the Mycenaeans borrow much of their fresco style?", answers: ["the Minoans", "the Egyptians", "the Trojans", "the Hittites"], accept: ["minoans", "minoan"] },
    { id: "hw3-10", subtopic: "Frescoes", q: "Where at Mycenae was the fresco of the lady holding a necklace found?", answers: ["the Cult Centre", "the megaron", "Grave Circle A", "the Lion Gate"], accept: ["cult centre", "the cult centre"] },
    { id: "hw3-11", subtopic: "Frescoes", q: "Why must we be careful using frescoes as evidence?", answers: ["many are heavily restored fragments", "they were painted centuries later", "they were painted by Egyptians", "they show only ordinary people"], accept: ["restored"] },

    // ── Jewellery and metalwork ──
    { id: "hw3-12", subtopic: "Jewellery and metalwork", q: "What is a diadem?", answers: ["a gold headband", "a gold necklace", "a gold armband", "a gold earring"], accept: ["headband", "gold headband"] },
    { id: "hw3-13", subtopic: "Jewellery and metalwork", q: "Which technique hammers a design into thin metal from behind, so that it stands out at the front?", answers: ["repoussé", "filigree", "granulation", "cloisonné"], accept: ["repousse", "repoussé"] },
    { id: "hw3-14", subtopic: "Jewellery and metalwork", q: "Which technique solders fine, often twisted, gold wire onto a surface in patterns?", answers: ["filigree", "repoussé", "granulation", "inlay"], accept: ["filigree"] },
    { id: "hw3-15", subtopic: "Jewellery and metalwork", q: "Which technique fuses tiny beads of gold onto a surface to make a design?", answers: ["granulation", "filigree", "inlay", "cloisonné"], accept: ["granulation"] },
    { id: "hw3-16", subtopic: "Jewellery and metalwork", q: "Which technique cuts hollows into a surface and sets other materials into them?", answers: ["inlay", "repoussé", "filigree", "granulation"], accept: ["inlay"] },
    { id: "hw3-17", subtopic: "Jewellery and metalwork", q: "Which technique uses thin strips of wire to form cells, filled with glass, enamel or gemstones?", answers: ["cloisonné", "inlay", "filigree", "repoussé"], accept: ["cloisonne", "cloisonné"] },
    { id: "hw3-18", subtopic: "Jewellery and metalwork", q: "Which materials make up the scene on the Lion Hunt Dagger?", answers: ["gold, silver and niello", "gold, bronze and enamel", "silver, ivory and glass", "gold, amber and enamel"], accept: ["gold silver and niello", "gold, silver and niello"] },
    { id: "hw3-19", subtopic: "Jewellery and metalwork", q: "Which grave was the gold pyxis found in?", answers: ["Shaft Grave V", "Shaft Grave IV", "Shaft Grave I", "Grave Circle B"], accept: ["shaft grave v", "shaft grave 5", "v", "5"] },
    { id: "hw3-20", subtopic: "Jewellery and metalwork", q: "What is a pyxis?", answers: ["a small box with a lid", "a pouring vessel", "a stemmed drinking cup", "a large storage jar"], accept: ["box", "a box with a lid", "small box"] },
    { id: "hw3-21", subtopic: "Jewellery and metalwork", q: "What is the gold pyxis made of?", answers: ["wood covered in gold plates", "solid cast gold", "ivory inlaid with gold", "bronze covered in gold plates"], accept: ["wood", "wood and gold"] },
    { id: "hw3-22", subtopic: "Jewellery and metalwork", q: "Why is the gold pyxis extremely rare?", answers: ["wood almost never survives", "gold was almost never used", "boxes were never buried", "most were melted down"], accept: ["wood rarely survives", "wood"] },
    { id: "hw3-23", subtopic: "Jewellery and metalwork", q: "What scene decorates the gold pyxis?", answers: ["lions chasing deer", "dogs chasing a boar", "bulls caught in nets", "hunters fighting lions"], accept: ["lions chasing deer", "lions and deer"] },
    { id: "hw3-24", subtopic: "Jewellery and metalwork", q: "What carries tall jugs towards the seated figure on the Tiryns ring?", answers: ["four lion-headed spirits", "four bull-headed men", "four winged sphinxes", "four young priestesses"], accept: ["lion-headed spirits", "lion headed spirits", "spirits"] },
    { id: "hw3-25", subtopic: "Jewellery and metalwork", q: "What was a signet ring used for?", answers: ["stamping a seal", "paying for goods", "marking a marriage", "decorating a tomb"], accept: ["seal", "stamping a seal"] },
    { id: "hw3-26", subtopic: "Jewellery and metalwork", q: "Where were the two Vapheio cups found?", answers: ["a tholos tomb near Sparta", "Shaft Grave IV at Mycenae", "the palace at Pylos", "Grave Circle B at Mycenae"], accept: ["sparta", "tholos tomb near sparta"] },
    { id: "hw3-27", subtopic: "Jewellery and metalwork", q: "What animals are being caught on the Vapheio cups?", answers: ["bulls", "lions", "boars", "deer"], accept: ["bulls", "bull"] },
    { id: "hw3-28", subtopic: "Jewellery and metalwork", q: "Which grave was the gold lion's-head rhyton found in?", answers: ["Shaft Grave IV", "Shaft Grave V", "Shaft Grave I", "Grave Circle B"], accept: ["shaft grave iv", "shaft grave 4", "iv", "4"] },
    { id: "hw3-29", subtopic: "Jewellery and metalwork", q: "What was a rhyton most likely used for?", answers: ["pouring libations", "drinking at feasts", "storing perfumed oil", "mixing wine and water"], accept: ["libations", "pouring libations", "pouring"] },
    { id: "hw3-30", subtopic: "Jewellery and metalwork", q: "What is a libation?", answers: ["a drink offering to the gods", "a food offering to the gods", "an animal sacrifice", "a prayer said at a feast"], accept: ["drink offering"] },

    // ── Decorative objects: pottery and ivory ──
    { id: "hw3-31", subtopic: "Decorative objects: pottery and ivory", q: "Why was pottery used by everyone, rich and poor?", answers: ["clay was cheap and found everywhere", "the palaces gave it out free", "gold was banned for the poor", "it was made only by slaves"], accept: ["cheap", "clay was cheap"] },
    { id: "hw3-32", subtopic: "Decorative objects: pottery and ivory", q: "Which vessel was a narrower jar for carrying goods over long distances?", answers: ["the amphora", "the pithos", "the krater", "the kylix"], accept: ["amphora"] },
    { id: "hw3-33", subtopic: "Decorative objects: pottery and ivory", q: "What did a stirrup jar usually hold?", answers: ["olive oil", "wine", "barley", "honey"], accept: ["olive oil", "oil", "perfumed oil"] },
    { id: "hw3-34", subtopic: "Decorative objects: pottery and ivory", q: "What was a krater used for?", answers: ["mixing wine with water", "storing grain", "carrying olive oil", "pouring libations"], accept: ["mixing wine", "mixing wine with water"] },
    { id: "hw3-35", subtopic: "Decorative objects: pottery and ivory", q: "What type of vessel is the Warrior Vase?", answers: ["a krater", "a pithos", "an amphora", "a kylix"], accept: ["krater"] },
    { id: "hw3-36", subtopic: "Decorative objects: pottery and ivory", q: "What was a kylix?", answers: ["a stemmed drinking cup", "a huge storage jar", "a jar for perfumed oil", "a bowl for mixing wine"], accept: ["drinking cup", "stemmed drinking cup", "cup"] },
    { id: "hw3-37", subtopic: "Decorative objects: pottery and ivory", q: "What do the thousands of kylikes in one storeroom at Pylos suggest?", answers: ["feasting on a huge scale", "a busy trade in pottery", "a temple full of offerings", "a pottery workshop"], accept: ["feasting", "feasts"] },
    { id: "hw3-38", subtopic: "Decorative objects: pottery and ivory", q: "After spirals, double axes and leaves, what came next on Mycenaean pottery?", answers: ["sea creatures such as the octopus", "chariots, bulls and soldiers", "flowers, shells and zigzags", "processions of women"], accept: ["sea creatures", "octopus"] },
    { id: "hw3-45", subtopic: "Decorative objects: pottery and ivory", q: "From which two animals did Mycenaean ivory come?", answers: ["elephants and hippopotami", "boars and elephants", "bulls and hippopotami", "walruses and elephants"], accept: ["elephants and hippopotami", "elephants and hippos"] },
    { id: "hw3-46", subtopic: "Decorative objects: pottery and ivory", q: "What does the most famous ivory carving from Mycenae show?", answers: ["two women and a child", "a lion and a hunter", "a goddess and a sphinx", "two warriors and a chariot"], accept: ["two women and a child"] },
    { id: "hw3-47", subtopic: "Decorative objects: pottery and ivory", q: "What does the sphinx on Mycenaean ivories show?", answers: ["ideas travelled with trade", "the Mycenaeans were Egyptian", "sphinxes guarded tombs", "ivory was made in Greece"], accept: ["ideas travelled"] },

    // ── Figurines ──
    { id: "hw3-39", subtopic: "Figurines", q: "Which figurine has a round, disc-shaped body?", answers: ["phi", "psi", "tau", "delta"], accept: ["phi"] },
    { id: "hw3-40", subtopic: "Figurines", q: "Which figurine has its arms raised?", answers: ["psi", "phi", "tau", "delta"], accept: ["psi"] },
    { id: "hw3-41", subtopic: "Figurines", q: "Which figurine has its arms folded across a tall, straight body?", answers: ["tau", "phi", "psi", "delta"], accept: ["tau"] },
    { id: "hw3-42", subtopic: "Figurines", q: "What does the discovery of some figurines in children's tombs suggest?", answers: ["they may have been toys", "they were made by children", "they marked a child's rank", "they were sold at funerals"], accept: ["toys"] },
    { id: "hw3-43", subtopic: "Figurines", q: "What is a votive offering?", answers: ["a gift left for a god", "a gift buried with the dead", "a gift for a visiting guest", "a gift paid to the palace"], accept: ["gift for a god", "gift to a god"] },
    { id: "hw3-44", subtopic: "Figurines", q: "Whose religion do the clay figurines show us?", answers: ["ordinary people", "the royal family", "palace priests", "Minoan visitors"], accept: ["ordinary people"] },

  ];

  window.HomericQuiz.topics.push({
    id: "3",
    title: "Decorative Arts",
    list: "civ-homeric-world",   // shared BKT vocab_list for the Homeric World
    questions: questions
  });
})();
