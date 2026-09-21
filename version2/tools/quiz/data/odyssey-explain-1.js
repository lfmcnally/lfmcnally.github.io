// ============================================================
// CLASSICALIA — A-Level Classical Civilisation
// Explain Bank: The Odyssey, Topic 1 — The Telemachy (Books 1–4)
// ============================================================
// A-Level explain questions: there is no multiple choice here.
// The student writes two or three sentences, then the tester
// gauges the answer against the model one and the student
// confirms the mark.
//
// Each question carries:
//   id:       "1E-book-number" — distinct from the multiple-choice
//             ids in odyssey-1.js, so the two banks share one
//             BKT list without colliding
//   subtopic: the book, matching the multiple-choice subtopics
//   q:        the question
//   model:    the model answer, shown once the student has written
//   points:   the marking points the model answer is made of.
//             `any` holds the wordings that count as having made
//             that point. Matching is deliberately generous — it
//             lowercases, drops apostrophes and punctuation, and
//             looks for the fragment anywhere in the answer — so
//             the gauge is a prompt for the student's own marking,
//             never the mark itself. The student always has the
//             final say on Full / Nearly / Incorrect.
// ============================================================

(function () {
  window.OdysseyExplain = window.OdysseyExplain || {};

  window.OdysseyExplain["1"] = [

    // ── BOOK 1: Athene visits Telemachus ──
    {
      id: "1E-A-01", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Odysseus is trapped on Calypso's island.",
      model: "Calypso, a nymph, loves him and wants to marry him, and keeps him captive in her cave. Because he has no ship or crew of his own, he cannot leave, even though the gods have now decided it is time for him to go home.",
      points: [
        { label: "Calypso is holding him", any: ["calypso", "nymph"] },
        { label: "She loves him and wants him as her husband", any: ["love", "marry", "marri", "husband", "wife", "keep him"] },
        { label: "He has no ship or crew, so cannot leave", any: ["no ship", "without a ship", "no crew", "without a crew", "no boat", "no way to leave", "cannot sail", "cannot leave", "no means"] },
      ]
    },
    {
      id: "1E-A-02", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Poseidon holds a grudge against Odysseus.",
      model: "Odysseus blinded Poseidon's son, the Cyclops Polyphemus, so Poseidon has been punishing him with a difficult and delayed journey home ever since, though he stops short of actually killing him.",
      points: [
        { label: "Odysseus blinded his son", any: ["blind", "put out", "eye"] },
        { label: "The son is the Cyclops Polyphemus", any: ["polyphemus", "cyclops"] },
        { label: "Poseidon punishes him with a hard, delayed journey", any: ["punish", "delay", "obstruct", "storm", "hard journey", "difficult journey", "prevent", "grudge", "revenge", "keeps him from"] },
      ]
    },
    {
      id: "1E-A-03", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why the poem begins ten years after the fall of Troy, rather than at the start of the war.",
      model: "Homer starts \"in medias res\" — into the middle of the action — with Odysseus already stranded on Calypso's island. This is a standard epic technique rather than telling events strictly in order.",
      points: [
        { label: "It begins in medias res", any: ["medias res", "middle of the action", "middle of the story", "middle of things", "middle of events"] },
        { label: "Odysseus is already stranded with Calypso", any: ["calypso", "already", "strand", "trapped", "seven years", "ten years", "held"] },
        { label: "This is a standard epic technique", any: ["epic", "convention", "technique", "tradition", "not in order", "out of order", "flashback", "narrat"] },
      ]
    },
    {
      id: "1E-A-04", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Zeus uses the example of Aegisthus at the start of the gods' council.",
      model: "Zeus argues that mortals wrongly blame the gods for their troubles when it is really their own wrongdoing that causes suffering. Aegisthus was warned by Hermes not to kill Agamemnon or marry his wife, but ignored the warning and brought about his own downfall.",
      points: [
        { label: "Mortals wrongly blame the gods for their own folly", any: ["blame the gods", "blame gods", "their own fault", "own wrongdoing", "own folly", "own recklessness", "own doing", "themselves"] },
        { label: "Aegisthus was warned by Hermes", any: ["hermes", "warn"] },
        { label: "He ignored the warning and destroyed himself", any: ["ignor", "disobey", "took no notice", "own downfall", "own destruction", "brought it on himself", "killed agamemnon", "deserved"] },
      ]
    },
    {
      id: "1E-A-05", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Athene disguises herself before visiting Telemachus.",
      model: "Gods often appear to mortals in disguise, partly to test how strangers are treated (the custom of xenia), and partly so she can speak to and encourage Telemachus in person without revealing her divine involvement straight away.",
      points: [
        { label: "Gods commonly visit mortals in disguise", any: ["disguis", "mortal form", "human form", "in the shape", "as mentes", "appear as"] },
        { label: "Disguise tests how a stranger is received (xenia)", any: ["xenia", "hospitality", "test", "guest", "stranger", "welcome"] },
        { label: "She can advise Telemachus without revealing her divinity", any: ["without reveal", "not reveal", "conceal", "hide", "divine identity", "encourage", "advise", "speak to him", "freely", "secretly"] },
      ]
    },
    {
      id: "1E-A-06", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why the Suitors' behaviour is considered a serious abuse of hospitality (xenia).",
      model: "Instead of behaving as respectful guests, they have moved into Odysseus' house uninvited, are eating through his wealth every day by slaughtering his livestock, and refuse to leave — the exact reverse of how a guest should behave.",
      points: [
        { label: "They occupy his house uninvited", any: ["uninvited", "not invited", "without invit", "moved in", "occupy", "take over", "force"] },
        { label: "They eat through his wealth and livestock", any: ["eat", "devour", "consume", "feast", "wealth", "livestock", "sheep", "oxen", "estate", "food", "waste"] },
        { label: "They refuse to leave, reversing a guest's duty", any: ["refuse to leave", "will not leave", "wont leave", "never leave", "stay", "opposite", "reverse", "abuse"] },
      ]
    },
    {
      id: "1E-A-07", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Telemachus is ashamed when he first sees the stranger (Athene as Mentes) at the gate.",
      model: "He is ashamed that a guest has been left standing at the gates instead of being welcomed straight away, since proper hospitality required strangers to be greeted and looked after at once.",
      points: [
        { label: "A guest has been left standing at the gate", any: ["gate", "door", "waiting", "standing", "left", "not greeted", "ignored", "unwelcomed"] },
        { label: "Xenia demanded an immediate welcome", any: ["xenia", "hospitality", "at once", "straight away", "immediat", "proper", "host", "custom", "duty"] },
      ]
    },
    {
      id: "1E-A-08", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Telemachus tells his mother to go back upstairs during Phemius' song.",
      model: "Encouraged by Athene's visit, he is asserting his new authority as head of the household, telling Penelope that public speech and decisions are men's business and hers is the weaving upstairs.",
      points: [
        { label: "Athene's visit has emboldened him", any: ["athene", "athena", "mentes", "visit", "embolden", "encourag", "confiden", "new"] },
        { label: "He asserts authority as head of the household", any: ["authority", "head of the house", "master of the house", "man of the house", "in charge", "power", "control"] },
        { label: "Speech is men's business, the loom is hers", any: ["men", "weaving", "loom", "upstairs", "women", "her own work", "maids"] },
      ]
    },
    {
      id: "1E-A-09", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Penelope is upset by Phemius' song.",
      model: "The song describes the Achaeans' disastrous homecomings from Troy, which reminds her painfully of her own husband's failure to return and deepens her grief and uncertainty about his fate.",
      points: [
        { label: "The song tells of the Achaeans' homecomings from Troy", any: ["homecoming", "return", "nostos", "achaean", "greeks", "troy", "coming home"] },
        { label: "It reminds her that Odysseus has not come back", any: ["odysseus", "husband", "remind", "not returned", "never came", "missing", "fate"] },
        { label: "It deepens her grief and uncertainty", any: ["grief", "griev", "sorrow", "upset", "pain", "weep", "cry", "tears", "uncertain"] },
      ]
    },
    {
      id: "1E-A-10", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Telemachus does not attack the Suitors himself at this point in the story.",
      model: "He admits that he and his household do not have the strength or training to fight off such a large group of men, so open confrontation is not yet a realistic option.",
      points: [
        { label: "He and his household lack the strength to fight", any: ["too weak", "not strong", "the strength", "no strength", "weak", "train", "cannot fight", "outnumbered", "too many", "large group"] },
        { label: "Open confrontation would not yet work", any: ["not yet", "would lose", "would be killed", "no chance", "hopeless", "realistic", "suicid", "fail"] },
      ]
    },
    {
      id: "1E-A-11", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Athene tells Telemachus to visit Nestor and Menelaus.",
      model: "Both men fought at Troy and eventually returned home, so they may have heard news or rumours of Odysseus on his journey back, giving Telemachus a real chance of learning something.",
      points: [
        { label: "Both fought at Troy and reached home", any: ["troy", "fought", "returned", "came home", "survived", "war"] },
        { label: "They may have news or rumours of Odysseus", any: ["news", "information", "rumour", "rumor", "heard", "learn", "find out", "tell him"] },
      ]
    },
    {
      id: "1E-A-12", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Athene advises Telemachus to build a funeral mound for his father if he learns Odysseus is dead.",
      model: "A proper burial with the correct rites was essential to honour the dead; it would let Telemachus formally accept his father's death, complete his mourning, and allow Penelope to remarry.",
      points: [
        { label: "Proper burial rites honour the dead", any: ["burial", "funeral", "rites", "honour", "honor", "tomb", "mound", "respect"] },
        { label: "It lets Telemachus accept the death and mourn", any: ["mourn", "grief", "accept", "closure", "finish", "formally"] },
        { label: "It frees Penelope to remarry", any: ["remarry", "marry again", "penelope", "mother", "new husband"] },
      ]
    },
    {
      id: "1E-A-13", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Telemachus' resemblance to Odysseus is significant when Mentes points it out.",
      model: "It suggests he has real ties to his heroic father and hints that he might grow to be capable and resourceful like him, foreshadowing his development across the Telemachy.",
      points: [
        { label: "He is visibly Odysseus' son", any: ["son", "resembl", "looks like", "likeness", "image", "features", "inherit", "ties", "his father", "heroic"] },
        { label: "It hints he may grow capable like his father", any: ["capable", "resourceful", "like his father", "grow", "mature", "develop", "foreshadow", "promise", "potential"] },
      ]
    },
    {
      id: "1E-A-14", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Antinous reacts angrily to Telemachus' bold speech to the Suitors.",
      model: "He is startled and offended that a young man he considered easy to dominate has suddenly spoken with such confidence, and mockingly hopes Telemachus never actually becomes king.",
      points: [
        { label: "Telemachus has spoken with unexpected confidence", any: ["confiden", "bold", "never spoken", "surpris", "startl", "assertive", "stood up", "strong"] },
        { label: "Antinous had thought him easy to dominate", any: ["easy", "boy", "child", "dominate", "push", "control", "no threat", "young"] },
        { label: "He mockingly hopes he never becomes king", any: ["king", "kingship", "mock", "sneer", "jibe"] },
      ]
    },
    {
      id: "1E-A-15", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why the story of Orestes avenging Agamemnon is introduced in Book One.",
      model: "It sets up a parallel running through the poem: like Agamemnon, Odysseus is a returning hero whose household is under threat, and Telemachus, like Orestes, is being encouraged to grow up and act to protect his family's honour.",
      points: [
        { label: "Agamemnon parallels Odysseus: a returning hero, a threatened house", any: ["parallel", "like odysseus", "comparison", "mirror", "agamemnon", "returning", "household", "echo"] },
        { label: "Telemachus is urged to act as Orestes did", any: ["orestes", "revenge", "avenge", "act", "grow up", "model", "example", "honour", "honor"] },
      ]
    },
    {
      id: "1E-A-16", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Telemachus decides to keep his journey secret from the Suitors.",
      model: "If the Suitors knew of his plan in advance, they might stop him leaving or plot against him immediately, so secrecy gives him the best chance of actually completing the journey.",
      points: [
        { label: "The Suitors would stop him or plot against him", any: ["stop him", "prevent", "block", "plot", "ambush", "kill", "harm", "danger"] },
        { label: "Secrecy gives the voyage a chance of success", any: ["secre", "safely", "succeed", "get away", "slip away", "chance", "unnoticed"] },
      ]
    },
    {
      id: "1E-A-17", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Eurycleia is trusted with running Odysseus' household.",
      model: "She was bought by Laertes long ago, treated with great respect, and has served the family loyally for years, nursing both Odysseus and then Telemachus, so this long service has earned complete trust.",
      points: [
        { label: "Long and loyal service to the family", any: ["loyal", "years", "long service", "served", "faithful", "devoted"] },
        { label: "She nursed Odysseus and then Telemachus", any: ["nurs", "raised", "brought up", "cared for", "looked after"] },
        { label: "Bought by Laertes and treated with respect", any: ["laertes", "bought", "respect", "twenty oxen", "honoured", "honored", "price"] },
      ]
    },
    {
      id: "1E-A-18", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Telemachus feels awe mixed with unease after Athene's departure.",
      model: "Her sudden vanishing, like a bird disappearing through the roof, makes him realise for certain that his visitor was a god, filling him with wonder but also a sense of the weight of what he has been asked to do.",
      points: [
        { label: "She vanishes like a bird through the roof", any: ["bird", "vanish", "disappear", "roof", "flew", "flight", "suddenly"] },
        { label: "He knows for certain his visitor was a god", any: ["god", "goddess", "divine", "immortal", "realise", "realize", "certain"] },
        { label: "Wonder mixed with the weight of what is asked of him", any: ["awe", "wonder", "weight", "responsib", "daunt", "task", "uneas", "burden", "expect"] },
      ]
    },
    {
      id: "1E-A-19", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why Homer includes so much detail about hospitality customs (washing, food, seating) in Book One.",
      model: "These repeated \"type-scenes\" show the proper way to treat guests (xenia), one of the poem's central moral concerns; showing it done correctly here highlights, by contrast, how badly the Suitors behave.",
      points: [
        { label: "These type-scenes model xenia done properly", any: ["xenia", "hospitality", "type scene", "typescene", "proper", "ritual", "custom", "correct"] },
        { label: "Xenia is a central moral concern of the poem", any: ["moral", "central", "theme", "important", "value", "code"] },
        { label: "It contrasts sharply with the Suitors", any: ["contrast", "suitors", "compar", "unlike", "highlight", "against"] },
      ]
    },
    {
      id: "1E-A-20", subtopic: "Book 1: Athene visits Telemachus",
      q: "Explain why most of the gods, apart from Poseidon, pity Odysseus.",
      model: "They recognise that his long suffering and delayed homecoming are unjust and disproportionate, especially given his piety and cleverness, so they feel he deserves to finally be allowed home.",
      points: [
        { label: "His suffering is out of all proportion", any: ["suffer", "unjust", "undeserv", "disproportion", "too long", "unfair", "harsh", "hardship"] },
        { label: "His piety and cleverness earn their goodwill", any: ["piety", "pious", "sacrific", "clever", "cunning", "wise", "resourceful", "good man"] },
        { label: "They feel he deserves to reach home", any: ["deserve", "should go home", "allowed home", "return home", "nostos", "let him"] },
      ]
    },

    // ── BOOK 2: The debate in Ithaca ──
    {
      id: "1E-B-01", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Telemachus calls an assembly at the start of Book Two.",
      model: "Emboldened by Athene's visit, he wants to publicly confront the Suitors about their behaviour and formally put his complaint before the community and the gods, since no assembly had been called since Odysseus left.",
      points: [
        { label: "Athene's visit has emboldened him", any: ["athene", "athena", "mentes", "embolden", "encourag", "advice", "told him", "visit"] },
        { label: "He wants to confront the Suitors publicly", any: ["public", "confront", "challenge", "denounce", "accuse", "complain", "community", "people"] },
        { label: "No assembly has met since Odysseus left", any: ["no assembly", "first", "since odysseus", "twenty years", "not been called", "never"] },
      ]
    },
    {
      id: "1E-B-02", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Aegyptius' opening speech encourages Telemachus.",
      model: "Aegyptius praises and blesses whoever called the assembly before knowing who it is, giving Telemachus a warm, supportive opening rather than a hostile one.",
      points: [
        { label: "He blesses whoever called the assembly", any: ["bless", "praise", "approv", "good", "honour", "honor"] },
        { label: "He does so before knowing it was Telemachus", any: ["before", "without knowing", "did not know", "didnt know", "unaware", "not know"] },
        { label: "It gives him a supportive rather than hostile opening", any: ["support", "warm", "encourag", "favourable", "favorable", "positive", "not hostile", "confiden"] },
      ]
    },
    {
      id: "1E-B-03", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Antinous blames Penelope rather than the Suitors for the situation.",
      model: "He argues that Penelope has strung the Suitors along for years with false promises and delaying tactics, such as the shroud trick, so in his view she — not the Suitors — is responsible for how long things have dragged on.",
      points: [
        { label: "He says she has strung the Suitors along", any: ["string", "strung", "led them on", "false hope", "false promis", "delay", "put off", "teas", "encourag"] },
        { label: "The shroud trick is his evidence", any: ["shroud", "weav", "unpick", "unravel", "loom", "trick", "laertes"] },
        { label: "So in his view the fault is hers, not theirs", any: ["her fault", "she is to blame", "blame her", "not the suitors", "hers", "responsib"] },
      ]
    },
    {
      id: "1E-B-04", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Penelope's shroud trick worked for so long.",
      model: "She wove by day and secretly unpicked her work at night, so the shroud never neared completion; the Suitors had agreed not to press her to remarry until it was finished, believing she was working towards a real end.",
      points: [
        { label: "She wove by day and unpicked it by night", any: ["by day", "at night", "unpick", "unravel", "undo", "secretly", "never finish"] },
        { label: "The Suitors had agreed to wait until it was done", any: ["agreed", "wait", "until", "finish", "complet", "promis", "held off"] },
        { label: "The shroud was for Laertes", any: ["laertes", "shroud", "burial", "father in law"] },
      ]
    },
    {
      id: "1E-B-05", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why the shroud trick eventually failed.",
      model: "One of Penelope's own maids betrayed the secret to the Suitors, who caught her unravelling the cloth and forced her to finish it.",
      points: [
        { label: "One of her own maids betrayed the secret", any: ["maid", "servant", "woman", "betray", "told", "gave away", "reveal"] },
        { label: "She was caught and made to finish it", any: ["caught", "forced", "made her", "finish", "complet"] },
      ]
    },
    {
      id: "1E-B-06", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Zeus sends the omen of the two eagles.",
      model: "It confirms that Telemachus' prayer and complaint have been heard; Halitherses interprets it as a sign that Odysseus is near and that doom is coming for the Suitors.",
      points: [
        { label: "It answers Telemachus' prayer and complaint", any: ["prayer", "pray", "complaint", "heard", "answer", "response", "sign", "support"] },
        { label: "Halitherses reads it as Odysseus' return and the Suitors' doom", any: ["halitherses", "odysseus", "near", "return", "doom", "destruction", "death", "suitors", "warn"] },
      ]
    },
    {
      id: "1E-B-07", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Eurymachus mocks Halitherses' interpretation of the omen.",
      model: "He refuses to believe Odysseus is coming back and dismisses prophecy in general, partly to protect the Suitors' position and partly to intimidate Halitherses into silence with the threat of a fine.",
      points: [
        { label: "He refuses to believe Odysseus will return", any: ["refus", "does not believe", "doesnt believe", "disbeliev", "never return", "dead", "not coming"] },
        { label: "He dismisses prophecy and threatens a fine", any: ["prophe", "omen", "bird", "fine", "threat", "silence", "mock", "scorn"] },
        { label: "He is protecting the Suitors' position", any: ["protect", "position", "interest", "keep", "self interest", "feast", "advantage"] },
      ]
    },
    {
      id: "1E-B-08", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Telemachus asks for a ship and crew rather than confronting the Suitors directly.",
      model: "He knows he cannot defeat the Suitors by force, so instead he wants to gather concrete news of his father, which might change the situation or give him a stronger position for future action.",
      points: [
        { label: "He cannot beat the Suitors by force", any: ["cannot", "too weak", "force", "outnumbered", "not strong", "no chance", "fight"] },
        { label: "He wants firm news of his father", any: ["news", "information", "find out", "learn", "whether", "alive", "dead", "fate"] },
        { label: "News would strengthen his position", any: ["stronger", "position", "change", "help him", "act", "decide", "then"] },
      ]
    },
    {
      id: "1E-B-09", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Leocritus dismisses Mentor's warning to the Suitors.",
      model: "He argues it is unrealistic to expect the people of Ithaca to take up arms over a shared meal, even outnumbered, and confidently predicts that Telemachus' journey will fail anyway.",
      points: [
        { label: "He thinks Ithacans will not fight over a meal", any: ["fight", "arms", "meal", "feast", "dinner", "not worth", "people", "unrealistic", "take up"] },
        { label: "He is confident even if outnumbered", any: ["outnumber", "numbers", "more of them", "even if", "many", "confiden"] },
        { label: "He predicts the journey will fail anyway", any: ["journey", "never", "fail", "not go", "voyage", "sail"] },
      ]
    },
    {
      id: "1E-B-10", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Telemachus prays alone on the seashore.",
      model: "He feels his countrymen and the Suitors are thwarting his plans, so he turns directly to Athene, the goddess who commanded him to make the journey, for reassurance and help.",
      points: [
        { label: "The assembly and the Suitors have blocked him", any: ["thwart", "block", "refus", "no help", "nothing", "countrymen", "suitors", "frustrat"] },
        { label: "He turns to Athene, who sent him on the journey", any: ["athene", "athena", "goddess", "pray", "help", "command", "told him", "sent him", "reassur"] },
      ]
    },
    {
      id: "1E-B-11", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Athene disguises herself as Mentor rather than appearing in her own form.",
      model: "In disguise she can act and speak among mortals more freely and practically, using Mentor's trusted position as an old friend of Odysseus to gather a crew and prepare the ship without revealing her divine identity.",
      points: [
        { label: "Mentor is a trusted old friend of Odysseus", any: ["mentor", "friend", "trusted", "old friend", "respected"] },
        { label: "Disguise lets her act among mortals freely", any: ["disguis", "mortal", "freely", "practical", "without reveal", "conceal", "identity", "unnoticed"] },
        { label: "She gathers a crew and prepares the ship", any: ["crew", "ship", "prepare", "gather", "arrange", "borrow", "organise", "organize"] },
      ]
    },
    {
      id: "1E-B-12", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Telemachus makes Eurycleia swear an oath of secrecy.",
      model: "He does not want his mother to find out and try to stop him, or grieve unnecessarily, before he has even left, so he asks Eurycleia to keep his plan hidden from Penelope for about twelve days.",
      points: [
        { label: "He does not want Penelope to find out", any: ["mother", "penelope", "know", "find out", "tell", "hear"] },
        { label: "She would grieve or try to stop him", any: ["griev", "upset", "worry", "stop him", "prevent", "cry", "weep", "forbid"] },
        { label: "Secrecy for about twelve days", any: ["twelve", "12", "days", "until she asks"] },
      ]
    },
    {
      id: "1E-B-13", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Eurycleia is initially reluctant to help Telemachus.",
      model: "She is afraid for his safety, since he is Penelope's only son and the Suitors might harm him, and worries about how the household would survive if something went wrong.",
      points: [
        { label: "She fears for his safety at sea", any: ["fear", "afraid", "safety", "danger", "sea", "die", "harm", "killed", "risk"] },
        { label: "He is Penelope's only son", any: ["only son", "only child", "sole", "one son"] },
        { label: "She worries what becomes of the household", any: ["household", "estate", "home", "suitors", "seize", "take", "left"] },
      ]
    },
    {
      id: "1E-B-14", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Athene lulls the Suitors into drowsiness before Telemachus departs.",
      model: "This ensures the Suitors do not notice or interfere with the ship's departure, letting Telemachus slip away from Ithaca safely and secretly at night.",
      points: [
        { label: "The Suitors must not notice or interfere", any: ["notice", "see", "realise", "realize", "find out", "interfere", "stop", "prevent", "suspect"] },
        { label: "He can slip away safely, by night", any: ["slip", "secre", "safely", "night", "unseen", "get away", "escape", "quietly"] },
      ]
    },
    {
      id: "1E-B-15", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why libations are poured before the ship sets sail.",
      model: "Pouring wine as an offering to the gods, especially Athene, was a way of asking for divine favour and protection on the voyage, showing how important religious ritual was before any risky undertaking.",
      points: [
        { label: "Wine is poured as an offering to the gods", any: ["wine", "libation", "pour", "offering", "gods"] },
        { label: "It asks for favour and protection on the voyage", any: ["favour", "favor", "protect", "safe", "help", "bless", "athene", "athena", "voyage"] },
        { label: "Ritual mattered before any risky undertaking", any: ["ritual", "religio", "custom", "before", "undertaking", "journey", "importan", "piety"] },
      ]
    },
    {
      id: "1E-B-16", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Telemachus' first public speech is described as passionate and ends in tears.",
      model: "His genuine distress at his family's situation and his inexperience in public speaking both show through; his emotion nonetheless earns him sympathy from the assembly and shows his sincerity.",
      points: [
        { label: "Genuine distress at his family's plight", any: ["distress", "emotion", "upset", "anger", "grief", "genuine", "sincer", "family", "frustrat"] },
        { label: "Inexperience in public speaking", any: ["inexperience", "never spoken", "young", "first speech", "practice", "unused", "not used"] },
        { label: "His emotion wins the assembly's sympathy", any: ["sympath", "pity", "move", "effect", "won", "sincer"] },
      ]
    },
    {
      id: "1E-B-17", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why no one immediately answers Telemachus after his speech.",
      model: "The Suitors feel a wave of pity and are momentarily silenced by the strength of his complaint, showing his words have had a genuine effect, even though this sympathy leads to no real action.",
      points: [
        { label: "They are struck with pity", any: ["pity", "sympath", "moved", "silence", "shame", "touched"] },
        { label: "His words had genuine force", any: ["force", "effect", "power", "struck", "genuine", "strength", "impact"] },
        { label: "Yet the sympathy produces no action", any: ["no action", "no real action", "nothing", "does not help", "doesnt help", "achiev", "still", "useless"] },
      ]
    },
    {
      id: "1E-B-18", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why the assembly ultimately achieves nothing for Telemachus.",
      model: "Although he speaks boldly and an ill omen is sent, the Suitors refuse to leave and the wider community, though sympathetic, takes no action to force them out, showing how weak Ithaca's institutions have become without a strong ruler.",
      points: [
        { label: "The Suitors simply refuse to leave", any: ["refus", "will not leave", "wont leave", "stay", "ignore", "defy"] },
        { label: "The wider community takes no action", any: ["community", "people", "ithaca", "no action", "nothing", "afraid", "will not act", "assembly"] },
        { label: "Ithaca is weak with no ruler in place", any: ["weak", "no king", "no ruler", "without odysseus", "institution", "authority", "breakdown", "powerless"] },
      ]
    },
    {
      id: "1E-B-19", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why Telemachus keeps his mother uninformed rather than asking for her blessing.",
      model: "He fears she would be overwhelmed with worry or try to stop him going, and wants to act independently as a way of proving his new maturity, guided directly by Athene rather than needing his mother's permission.",
      points: [
        { label: "She would worry or try to stop him", any: ["worry", "griev", "upset", "stop him", "prevent", "forbid", "overwhelm"] },
        { label: "He wants to act independently and prove his maturity", any: ["independ", "maturity", "grown", "man", "himself", "prove", "own decision", "adult"] },
        { label: "He is acting on Athene's guidance instead", any: ["athene", "athena", "goddess", "divine", "guidance", "instruction"] },
      ]
    },
    {
      id: "1E-B-20", subtopic: "Book 2: The debate in Ithaca",
      q: "Explain why the ship's departure at night is a significant moment in the story.",
      model: "Sailing secretly under cover of darkness reflects the danger he is in from the Suitors and marks a turning point where Telemachus moves from a passive, grieving boy into someone taking active, independent steps to help his family.",
      points: [
        { label: "Leaving secretly by night shows the danger he is in", any: ["secre", "night", "dark", "danger", "suitors", "hidden", "unseen", "risk"] },
        { label: "It marks his turn from passive boy to active man", any: ["turning point", "passive", "active", "boy", "man", "grow", "maturity", "first step", "initiative", "develop"] },
      ]
    },

    // ── BOOK 3: Telemachus with Nestor ──
    {
      id: "1E-C-01", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Telemachus initially feels nervous about approaching Nestor.",
      model: "He has never had to make a formal speech before and finds it embarrassing, as a young man, to question someone so much older and more experienced than himself.",
      points: [
        { label: "He has never made a formal speech", any: ["never", "first", "no experience", "inexperience", "formal", "public speaking", "practice"] },
        { label: "It is awkward for a young man to question an elder", any: ["older", "elder", "age", "embarrass", "shy", "modest", "respect", "young", "awkward"] },
      ]
    },
    {
      id: "1E-C-02", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Athene reassures Telemachus that \"a god will inspire him\" when his own intelligence fails.",
      model: "She is encouraging him to trust that, because he is blessed by the gods and growing into manhood, he will find the right words when he needs them, even without prior experience.",
      points: [
        { label: "The gods favour and will guide him", any: ["god", "divine", "blessed", "favour", "favor", "athene", "athena", "inspire", "help", "guid"] },
        { label: "He is growing into manhood and will find the words", any: ["words", "find", "manhood", "grow", "maturity", "confidence", "trust", "come to him"] },
      ]
    },
    {
      id: "1E-C-03", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Pylos is presented as a model, well-ordered household compared with Ithaca.",
      model: "Nestor's household performs hospitality properly — welcoming strangers immediately and feeding them before questioning them — and shows harmony between father and sons, in clear contrast to the chaos caused by the Suitors back in Ithaca.",
      points: [
        { label: "Pylos performs xenia properly", any: ["xenia", "hospitality", "welcome", "feed", "before questioning", "proper", "guest", "host", "sacrific"] },
        { label: "Father and sons live in harmony", any: ["father", "sons", "harmon", "order", "family", "peisistratus", "nestor", "respect", "well run"] },
        { label: "It contrasts with the chaos in Ithaca", any: ["contrast", "ithaca", "chaos", "suitors", "disorder", "compar", "unlike"] },
      ]
    },
    {
      id: "1E-C-04", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Peisistratus gives the golden cup to Athene before Telemachus.",
      model: "Because Athene appears to be the elder of the two guests, proper etiquette required the more senior person to be served first, showing Peisistratus's good manners.",
      points: [
        { label: "Athene appears to be the elder guest", any: ["elder", "older", "senior", "age", "athene", "athena", "mentor", "appears"] },
        { label: "Etiquette served the senior guest first", any: ["etiquette", "custom", "manners", "first", "proper", "respect", "polite", "correct"] },
      ]
    },
    {
      id: "1E-C-05", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor asks whether his guests are traders or pirates.",
      model: "This was a normal, expected question to ask strangers arriving by ship at the time, since piracy was a genuine danger and hosts needed to know who they were dealing with, even though it can sound rude to a modern reader.",
      points: [
        { label: "It was a normal question to strangers arriving by ship", any: ["normal", "usual", "standard", "custom", "expect", "not rude", "stranger", "ship", "routine"] },
        { label: "Piracy was a real danger", any: ["pira", "danger", "raid", "threat", "risk", "common"] },
      ]
    },
    {
      id: "1E-C-06", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor cannot give Telemachus definite news of his father.",
      model: "Nestor's own fleet became separated from Odysseus' as they sailed home from Troy, so he genuinely has had no contact with or information about him since then.",
      points: [
        { label: "His fleet separated from Odysseus' on the way home", any: ["separat", "split", "parted", "divided", "lost", "left", "different route"] },
        { label: "He has had no contact or news since", any: ["no news", "no contact", "nothing", "never heard", "since then", "no information"] },
      ]
    },
    {
      id: "1E-C-07", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why the story of the quarrel between Agamemnon and Menelaus is included in Nestor's account.",
      model: "It explains why the Greek fleet split up on the way home, which is part of why so many heroes, including Odysseus, had disastrous or delayed homecomings, linking to the wider theme of the gods punishing wrongdoing at Troy.",
      points: [
        { label: "The quarrel split the Greek fleet", any: ["quarrel", "split", "divid", "separat", "fleet", "argu", "disagree"] },
        { label: "That explains the delayed and disastrous homecomings", any: ["homecoming", "nostos", "delay", "disast", "return", "scattered", "lost", "journey"] },
        { label: "It links to the gods punishing crimes at Troy", any: ["god", "athene", "athena", "anger", "punish", "crime", "sacrilege", "wrongdoing", "impiety"] },
      ]
    },
    {
      id: "1E-C-08", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor tells the story of Agamemnon's murder and Orestes' revenge in such detail.",
      model: "It offers Telemachus a model to imitate — a son avenging wrongs against his father's household — and encourages him to be equally decisive in eventually dealing with the Suitors.",
      points: [
        { label: "Orestes is a model of a son avenging his house", any: ["orestes", "model", "example", "parallel", "son", "avenge", "revenge", "imitate"] },
        { label: "It urges Telemachus to be decisive about the Suitors", any: ["telemachus", "decisive", "act", "suitors", "encourage", "inspire", "brave", "deal with"] },
      ]
    },
    {
      id: "1E-C-09", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor urges Telemachus to be \"as brave as Orestes.\"",
      model: "Orestes won lasting fame by avenging his father's murder, and Nestor wants Telemachus to take similarly decisive action against the men wronging his own family and household.",
      points: [
        { label: "Orestes won lasting fame by avenging his father", any: ["fame", "kleos", "glory", "renown", "avenge", "revenge", "father", "remembered"] },
        { label: "Telemachus should act as decisively against the Suitors", any: ["suitors", "act", "decisive", "revenge", "defend", "household", "same", "brave"] },
      ]
    },
    {
      id: "1E-C-10", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor advises Telemachus not to stay away from Ithaca too long.",
      model: "With the Suitors free to plunder his estate and pressure his mother while he is away, staying away too long risks losing everything he is trying to protect.",
      points: [
        { label: "The Suitors plunder his estate while he is away", any: ["plunder", "waste", "eat", "estate", "wealth", "property", "devour", "consume"] },
        { label: "Penelope is under pressure to remarry", any: ["penelope", "mother", "pressure", "remarry", "marry", "force", "choose"] },
        { label: "He risks losing exactly what he is trying to save", any: ["lose", "risk", "protect", "everything", "home", "inherit", "nothing left"] },
      ]
    },
    {
      id: "1E-C-11", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Menelaus was delayed on his journey home, according to Nestor's account.",
      model: "His helmsman was killed by Apollo's arrow near Sunium, forcing him to stop for proper funeral rites, and a storm later split his fleet, driving part of it to Egypt.",
      points: [
        { label: "His helmsman was killed by Apollo near Sunium", any: ["helmsman", "phrontis", "apollo", "arrow", "sunium", "steersman"] },
        { label: "He stopped to perform the funeral rites", any: ["funeral", "burial", "rites", "bury", "delay", "stop", "honour", "honor"] },
        { label: "A storm then drove part of his fleet to Egypt", any: ["storm", "scatter", "split", "egypt", "blown", "driven", "wind"] },
      ]
    },
    {
      id: "1E-C-12", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Athene's sudden departure, transformed into a vulture, is significant.",
      model: "It is a divine epiphany revealing her true nature to Nestor and the others, confirming that a god has genuinely been guiding Telemachus and underlining the seriousness of his mission.",
      points: [
        { label: "A divine epiphany revealing her true nature", any: ["epiphany", "reveal", "true", "divine", "goddess", "god", "vulture", "bird", "transform", "manifest"] },
        { label: "It confirms a god is guiding Telemachus", any: ["guid", "help", "support", "with him", "favour", "favor", "confirm", "proof", "backing"] },
        { label: "It underlines how serious his mission is", any: ["serious", "importan", "mission", "weight", "significan", "matters"] },
      ]
    },
    {
      id: "1E-C-13", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor immediately promises a sacrifice once he realises his guest was Athene.",
      model: "Recognising that a god had been present and had shown favour to his household, Nestor wants to properly honour her to secure continued divine goodwill for himself and his family.",
      points: [
        { label: "He realises a god had been a guest in his house", any: ["god", "goddess", "athene", "athena", "present", "guest", "realise", "realize", "house"] },
        { label: "He honours her to keep divine goodwill", any: ["honour", "honor", "sacrific", "heifer", "thank", "goodwill", "favour", "favor", "piety", "pious", "protect"] },
      ]
    },
    {
      id: "1E-C-14", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Telemachus is bathed and dressed by Polycaste before dining.",
      model: "This is part of the proper hospitality ritual for an honoured guest, and it also marks a small rite of passage, presenting Telemachus in a way that makes him look like \"an immortal god,\" emphasising his growing maturity.",
      points: [
        { label: "Part of the proper hospitality shown an honoured guest", any: ["hospitality", "xenia", "ritual", "custom", "guest", "honour", "honor", "proper", "bath"] },
        { label: "A small rite of passage marking his growing maturity", any: ["rite of passage", "maturity", "grow", "manhood", "develop", "immortal", "like a god", "transform", "adult"] },
      ]
    },
    {
      id: "1E-C-15", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor offers Telemachus the choice of travelling by ship or by chariot.",
      model: "Nestor wants to give Telemachus every practical means of reaching Sparta safely and comfortably, showing the depth of hospitality and support he offers.",
      points: [
        { label: "He offers every practical means of reaching Sparta", any: ["practical", "means", "safe", "comfort", "either", "choice", "both", "sparta", "reach", "chariot"] },
        { label: "It shows the depth of his hospitality", any: ["hospitality", "xenia", "generous", "host", "support", "kindness", "care"] },
      ]
    },
    {
      id: "1E-C-16", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor sends his son Peisistratus with Telemachus to Sparta.",
      model: "Peisistratus can act as a companion and guide for the journey, and his presence also strengthens the bond between the two households, echoing the theme of guest-friendship passed down between families.",
      points: [
        { label: "Peisistratus acts as companion and guide", any: ["companion", "guide", "escort", "help", "journey", "with him", "travel", "look after"] },
        { label: "It strengthens the tie between the two households", any: ["bond", "tie", "friendship", "xenia", "guest friend", "household", "famil", "link", "relationship"] },
      ]
    },
    {
      id: "1E-C-17", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why the poem takes time to describe the ritual sacrifice of the heifer in detail.",
      model: "The elaborate ritual — gilding the horns, the correct prayers, the women's ritual cry — shows how central proper religious observance was to Greek life, and Nestor's care in performing it reflects his piety and status as a model host and king.",
      points: [
        { label: "The detail shows how central religion was to Greek life", any: ["religio", "ritual", "piety", "central", "importan", "greek life", "worship", "custom"] },
        { label: "Nestor's care reflects his piety and standing", any: ["nestor", "piety", "pious", "care", "model", "host", "king", "status", "respect", "proper"] },
        { label: "The stages: gilded horns, prayers, the women's cry", any: ["gild", "horns", "prayer", "cry", "women", "heifer", "gold"] },
      ]
    },
    {
      id: "1E-C-18", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Nestor says there is \"no man on earth\" who could tell the whole story of what happened at Troy.",
      model: "The war caused so much suffering and so many individual stories that even a lifetime of telling would not cover it all, which also explains why Nestor can only offer Telemachus a partial account.",
      points: [
        { label: "The war caused too much suffering to recount in full", any: ["suffering", "too much", "so many", "whole story", "cannot", "years", "never finish", "long", "endless"] },
        { label: "So Nestor can give only a partial account", any: ["partial", "only part", "some", "limited", "not everything", "fraction", "what he knows"] },
      ]
    },
    {
      id: "1E-C-19", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why the Telemachy visits Pylos before Sparta, rather than the other way around.",
      model: "Nestor was the first Greek leader to return safely home after Troy, so he is a natural first stop for information, and he also directs Telemachus onward to Menelaus, who returned even later and might know more.",
      points: [
        { label: "Nestor came home first, so is the natural first stop", any: ["first", "nestor", "earliest", "returned", "safely", "natural", "nearest", "closer", "before"] },
        { label: "He sends Telemachus on to Menelaus, who returned later", any: ["menelaus", "sparta", "later", "last", "more news", "onward", "sends", "next"] },
      ]
    },
    {
      id: "1E-C-20", subtopic: "Book 3: Telemachus with Nestor",
      q: "Explain why Book Three is described as important background but \"unprescribed\" for close textual analysis.",
      model: "While the book gives valuable context — a model household, the Orestes parallel, character development — it is not one of the specific books set for detailed line-by-line study, so students need the story and its significance but won't be examined on its precise wording.",
      points: [
        { label: "It supplies context: a model household, the Orestes parallel, his development", any: ["context", "background", "model", "household", "orestes", "parallel", "character", "development", "useful"] },
        { label: "It is not set for line-by-line study", any: ["not set", "unprescribed", "not prescribed", "line by line", "close analysis", "detail", "wording", "exam", "quot"] },
      ]
    },

    // ── BOOK 4: Menelaus and Helen ──
    {
      id: "1E-D-01", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Menelaus is celebrating two weddings when Telemachus arrives.",
      model: "His daughter Hermione is being sent to marry Achilles' son as previously promised, and his son Megapenthes, born to a slave woman since Helen bore no more children after Hermione, is also marrying, so both events fall together.",
      points: [
        { label: "Hermione is being sent to marry Achilles' son", any: ["hermione", "daughter", "achilles", "neoptolemus", "promised", "son of achilles"] },
        { label: "Megapenthes, his son by a slave woman, marries too", any: ["megapenthes", "son", "slave", "also", "both", "second"] },
        { label: "Helen bore no more children after Hermione", any: ["helen", "no more", "only child", "childless", "no other", "one child"] },
      ]
    },
    {
      id: "1E-D-02", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Menelaus is angry with Eteoneus at first.",
      model: "Eteoneus considers turning the strangers away or sending them elsewhere instead of welcoming them immediately, which goes against the strict code of hospitality Menelaus expects his household to follow.",
      points: [
        { label: "Eteoneus suggests turning the strangers away", any: ["turn", "away", "send", "elsewhere", "refuse", "not welcome", "another"] },
        { label: "That breaks the code of hospitality he keeps", any: ["xenia", "hospitality", "code", "custom", "guest", "duty", "proper", "welcome"] },
      ]
    },
    {
      id: "1E-D-03", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Helen recognises Telemachus before Menelaus does.",
      model: "She notices his striking physical resemblance to Odysseus, whom she remembers clearly from his visit to Troy, before either man has actually said who he is.",
      points: [
        { label: "She notices his resemblance to Odysseus", any: ["resembl", "looks like", "likeness", "image", "similar", "features", "like his father"] },
        { label: "She remembers Odysseus clearly from Troy", any: ["troy", "remember", "knew him", "saw him", "beggar", "met"] },
        { label: "Nobody has yet said who he is", any: ["before", "no one", "not said", "unnamed", "without being told", "yet"] },
      ]
    },
    {
      id: "1E-D-04", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Peisistratus speaks up on Telemachus' behalf when he stays silent.",
      model: "He explains that Telemachus is naturally modest and too shy to speak uninvited in front of someone as impressive as Menelaus, smoothing over the awkward silence.",
      points: [
        { label: "Telemachus is too modest and shy to speak unasked", any: ["modest", "shy", "timid", "silence", "silent", "unsure", "reluctant", "uninvited"] },
        { label: "Peisistratus smooths over the awkward silence", any: ["smooth", "awkward", "explain", "speaks for", "on his behalf", "polite", "excuse"] },
      ]
    },
    {
      id: "1E-D-05", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Helen puts a drug into the wine.",
      model: "She wants to help everyone talk about painful memories of Troy and Odysseus without breaking down in grief, since the drug numbs sorrow and lets the group share stories comfortably.",
      points: [
        { label: "The drug numbs grief and pain", any: ["drug", "numb", "grief", "sorrow", "pain", "banish", "forget", "tears", "nepenthe"] },
        { label: "It lets them speak of Troy and Odysseus without breaking down", any: ["talk", "speak", "stories", "troy", "odysseus", "without", "weep", "cry", "share", "memories"] },
      ]
    },
    {
      id: "1E-D-06", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Helen and Menelaus tell two different stories about Odysseus at Troy.",
      model: "Helen's story shows his skill at disguise and deception, sneaking into Troy as a beggar, while Menelaus's story shows his self-control inside the Wooden Horse — together the two eyewitness accounts build a fuller picture of Odysseus's cunning.",
      points: [
        { label: "Helen's story shows his disguise and deception", any: ["helen", "disguis", "beggar", "decep", "trick", "sneak", "enter troy", "spy"] },
        { label: "Menelaus' shows his self-control in the Horse", any: ["menelaus", "self control", "restrain", "horse", "silence", "discipline", "anticlus", "nerve"] },
        { label: "Together they build a fuller picture of his cunning", any: ["cunning", "metis", "both", "fuller", "picture", "two sides", "eyewitness", "complete", "rounded"] },
      ]
    },
    {
      id: "1E-D-07", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Odysseus stops the other Greeks answering Helen when she mimics their wives' voices at the Wooden Horse.",
      model: "He suspects it might be a trick to expose them, so he silences Anticlus by force to prevent the whole plan, and the men hidden inside, from being discovered and destroyed.",
      points: [
        { label: "He suspects a trick meant to expose them", any: ["trick", "trap", "test", "expose", "suspect", "discover", "reveal", "catch"] },
        { label: "He silences Anticlus by force", any: ["anticlus", "hand", "mouth", "silence", "force", "held", "clap", "stops"] },
        { label: "Discovery would destroy the whole plan and the men", any: ["destroy", "plan", "all of them", "killed", "doom", "whole", "ruin", "death"] },
      ]
    },
    {
      id: "1E-D-08", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Menelaus was delayed in Egypt on his way home.",
      model: "He had failed to make the proper sacrifices to the gods before setting out, so he was becalmed on the island of Pharos, unable to sail, until he found a way to learn what he needed to do.",
      points: [
        { label: "He had failed to make the proper sacrifices", any: ["sacrific", "offering", "hecatomb", "gods", "fail", "neglect", "forgot", "did not"] },
        { label: "He was becalmed at Pharos and could not sail", any: ["becalm", "no wind", "stuck", "stranded", "pharos", "cannot sail", "trapped", "held"] },
      ]
    },
    {
      id: "1E-D-09", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Eidothee decides to help Menelaus.",
      model: "She takes pity on him, seeing him wandering alone and increasingly desperate as his men grow weaker from hunger, so she offers to help him trap her father, Proteus, to learn how to get home.",
      points: [
        { label: "She takes pity on him", any: ["pity", "sorry", "sympath", "feels for"] },
        { label: "He is desperate and his men are starving", any: ["desperat", "wander", "alone", "hunger", "starv", "weak", "food", "suffering"] },
        { label: "She tells him how to trap her father Proteus", any: ["proteus", "father", "trap", "catch", "advice", "how to", "tell", "instruct"] },
      ]
    },
    {
      id: "1E-D-10", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Menelaus and his men disguise themselves in sealskins.",
      model: "This disguise lets them blend in among the real seals gathering around Proteus, so they can lie in wait undetected until the moment he settles down to sleep and can be seized.",
      points: [
        { label: "The skins let them blend in among the real seals", any: ["blend", "seal", "among", "look like", "disguis", "hide", "pass", "herd"] },
        { label: "They can lie in wait and seize Proteus as he sleeps", any: ["undetect", "unseen", "wait", "ambush", "seize", "grab", "asleep", "sleep", "count", "surprise"] },
      ]
    },
    {
      id: "1E-D-11", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Proteus keeps changing shape when Menelaus grabs him.",
      model: "As a shape-shifting sea-god, he tries every transformation he can, a lion, a snake, fire, water, and more, to frighten or slip out of Menelaus's grip and avoid answering his questions.",
      points: [
        { label: "He is a shape-shifting sea-god", any: ["shape", "transform", "change", "sea god", "god", "lion", "snake", "water", "fire", "tree"] },
        { label: "He tries to frighten Menelaus or slip free", any: ["frighten", "scare", "escape", "slip", "break free", "let go", "avoid", "answer", "question", "force him"] },
      ]
    },
    {
      id: "1E-D-12", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Menelaus is able to successfully hold on to Proteus despite his transformations.",
      model: "Following Eidothee's advice, he and his men grip Proteus firmly no matter what he turns into, refusing to let go until the god eventually tires and gives up trying to escape.",
      points: [
        { label: "He follows Eidothee's advice", any: ["eidothee", "advice", "told", "instruct", "warned", "daughter"] },
        { label: "They hold on through every transformation", any: ["hold", "grip", "not let go", "never let go", "refuse", "tight", "whatever", "no matter"] },
        { label: "Proteus tires and gives up", any: ["tire", "gives up", "exhaust", "surrender", "gave up", "stop", "worn"] },
      ]
    },
    {
      id: "1E-D-13", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Proteus tells Menelaus he must return to Egypt before sailing home.",
      model: "Menelaus had failed to make the proper sacrifices to the gods before his original departure, so Proteus explains he must go back and perform them before the gods will allow him a safe journey home.",
      points: [
        { label: "He never made the proper sacrifices before leaving", any: ["sacrific", "offering", "hecatomb", "fail", "neglect", "proper", "gods", "before", "forgot"] },
        { label: "He must go back and perform them for a safe voyage", any: ["return", "go back", "egypt", "perform", "then", "safe", "allow", "home", "appease"] },
      ]
    },
    {
      id: "1E-D-14", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Ajax, son of Oileus, was drowned by Poseidon.",
      model: "After escaping a shipwreck with the gods' help, he arrogantly boasted that he had survived the sea despite the gods, and this arrogance angered Poseidon, who split the rock he was resting on and drowned him.",
      points: [
        { label: "He boasted of escaping the sea in spite of the gods", any: ["boast", "arrogan", "hubris", "despite", "escaped", "survived", "claim", "pride"] },
        { label: "Poseidon split the rock and drowned him", any: ["poseidon", "rock", "split", "drown", "struck", "trident", "sea"] },
      ]
    },
    {
      id: "1E-D-15", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Agamemnon was murdered so soon after returning home.",
      model: "Aegisthus, who had been having an affair with Agamemnon's wife Clytaemnestra while he was at Troy, set a spy to watch for his return and then ambushed and killed him at a welcome-home banquet before he could act.",
      points: [
        { label: "Aegisthus had seduced Clytaemnestra during the war", any: ["aegisthus", "clytaem", "affair", "seduc", "wife", "lover", "adulter"] },
        { label: "A watchman was set to spot his return", any: ["spy", "watch", "lookout", "warn", "waiting", "posted"] },
        { label: "He was ambushed at a welcome-home feast", any: ["feast", "banquet", "ambush", "trap", "dinner", "killed", "murder", "no chance", "unarmed"] },
      ]
    },
    {
      id: "1E-D-16", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Proteus tells Menelaus he will not die a normal death.",
      model: "Because Menelaus is married to Helen, a daughter of Zeus, he is considered Zeus's son-in-law, and Proteus says the gods will instead send him to the paradise of the Elysian Fields.",
      points: [
        { label: "He is Zeus's son-in-law through his marriage to Helen", any: ["zeus", "son in law", "helen", "marri", "daughter of zeus"] },
        { label: "He will be sent to the Elysian Fields", any: ["elysi", "paradise", "fields", "blessed", "afterlife", "not die", "immortal"] },
      ]
    },
    {
      id: "1E-D-17", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Telemachus refuses Menelaus's offer of horses as a parting gift.",
      model: "Ithaca is rocky and has no good pasture-land suitable for horses, so he asks for something more useful and appropriate to take home instead, and Menelaus gives him a fine silver mixing-bowl.",
      points: [
        { label: "Ithaca is rocky, with no pasture for horses", any: ["rock", "pasture", "graz", "plain", "land", "not suitable", "unsuitable", "goat", "narrow", "small"] },
        { label: "He asks for something more useful instead", any: ["useful", "instead", "other", "suitable", "something else", "mixing bowl", "silver", "gift"] },
      ]
    },
    {
      id: "1E-D-18", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why the Suitors decide to ambush Telemachus rather than simply wait for him to return.",
      model: "They are alarmed and furious to learn he has secretly slipped away to seek help and news of his father, so they plan to kill him at sea before he can return and potentially strengthen his position against them.",
      points: [
        { label: "They are alarmed that he slipped away for news and help", any: ["alarm", "angry", "furious", "shock", "secre", "slip", "away", "news", "help", "dared"] },
        { label: "Killing him at sea stops him coming back stronger", any: ["sea", "kill", "before", "return", "stronger", "position", "threat", "grown", "avenge", "danger"] },
      ]
    },
    {
      id: "1E-D-19", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Penelope is so distressed when she learns of the ambush plot.",
      model: "She fears losing both her husband and now her only son, and feels powerless, caught between grieving Suitors, a household she cannot control, and no way to warn or protect Telemachus herself.",
      points: [
        { label: "She fears losing her only son as well as her husband", any: ["only son", "son", "husband", "both", "lose", "fear", "death", "kill", "again"] },
        { label: "She is powerless to warn or protect him", any: ["powerless", "helpless", "cannot", "no way", "warn", "protect", "alone", "nothing", "control"] },
      ]
    },
    {
      id: "1E-D-20", subtopic: "Book 4: Menelaus and Helen",
      q: "Explain why Athene sends a phantom to Penelope rather than appearing to her directly.",
      model: "The phantom, in the shape of Penelope's sister Iphthime, offers comfort and reassurance about Telemachus' safety through a dream — a gentler way for a god to look after a mortal without a full divine appearance.",
      points: [
        { label: "A dream phantom in her sister Iphthime's shape", any: ["phantom", "dream", "iphthime", "sister", "shape", "image", "vision", "likeness"] },
        { label: "It comforts and reassures her about Telemachus", any: ["comfort", "reassur", "safe", "telemachus", "calm", "tell her", "sooth"] },
        { label: "A gentler way than a full divine appearance", any: ["gentl", "without", "full", "divine", "appearance", "frighten", "overwhelm", "directly", "reveal", "awe"] },
      ]
    },
  ];
})();
