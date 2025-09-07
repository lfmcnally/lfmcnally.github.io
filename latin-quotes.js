// Latin Quote of the Day Database
// Format: "MM-DD": {quote: "Latin text", translation: "English translation", author: "Author", source: "Source work"}
// 365 quotes for each day of the year

const latinQuotes = {
  // JANUARY
  "01-01": {
    quote: "Annus novus felix sit",
    translation: "May the new year be happy",
    author: "Traditional",
    source: "New Year Greeting"
  },
  "01-02": {
    quote: "Alea iacta est",
    translation: "The die is cast",
    author: "Julius Caesar",
    source: "Crossing the Rubicon"
  },
  "01-03": {
    quote: "Veni, vidi, vici",
    translation: "I came, I saw, I conquered",
    author: "Julius Caesar",
    source: "Letter to Senate"
  },
  "01-04": {
    quote: "Carpe diem, quam minimum credula postero",
    translation: "Seize the day, trusting as little as possible in tomorrow",
    author: "Horace",
    source: "Odes I.11"
  },
  "01-05": {
    quote: "Dulce et decorum est pro patria mori",
    translation: "It is sweet and fitting to die for one's country",
    author: "Horace",
    source: "Odes III.2.13"
  },
  "01-06": {
    quote: "Fortuna audaces iuvat",
    translation: "Fortune favours the bold",
    author: "Virgil",
    source: "Aeneid X.284"
  },
  "01-07": {
    quote: "Mens sana in corpore sano",
    translation: "A healthy mind in a healthy body",
    author: "Juvenal",
    source: "Satires X.356"
  },
  "01-08": {
    quote: "Errare humanum est",
    translation: "To err is human",
    author: "Seneca",
    source: "Moral Letters"
  },
  "01-09": {
    quote: "Non scholae sed vitae discimus",
    translation: "We learn not for school but for life",
    author: "Seneca",
    source: "Epistulae 106.12"
  },
  "01-10": {
    quote: "Amor vincit omnia",
    translation: "Love conquers all",
    author: "Virgil",
    source: "Eclogues X.69"
  },
  "01-11": {
    quote: "Ars longa, vita brevis",
    translation: "Art is long, life is short",
    author: "Seneca",
    source: "De Brevitate Vitae"
  },
  "01-12": {
    quote: "Audentes fortuna iuvat",
    translation: "Fortune favours the daring",
    author: "Virgil",
    source: "Aeneid X.284"
  },
  "01-13": {
    quote: "Cogito, ergo sum",
    translation: "I think, therefore I am",
    author: "Descartes",
    source: "Discourse on Method"
  },
  "01-14": {
    quote: "De gustibus non est disputandum",
    translation: "There is no disputing about tastes",
    author: "Medieval Proverb",
    source: "Traditional"
  },
  "01-15": {
    quote: "Dura lex, sed lex",
    translation: "The law is harsh, but it is the law",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "01-16": {
    quote: "Et tu, Brute?",
    translation: "You too, Brutus?",
    author: "Julius Caesar",
    source: "Shakespeare's Julius Caesar"
  },
  "01-17": {
    quote: "Festina lente",
    translation: "Make haste slowly",
    author: "Augustus",
    source: "Suetonius"
  },
  "01-18": {
    quote: "Forsan et haec olim meminisse iuvabit",
    translation: "Perhaps one day even these things will be pleasant to remember",
    author: "Virgil",
    source: "Aeneid I.203"
  },
  "01-19": {
    quote: "Homo sum: humani nihil a me alienum puto",
    translation: "I am human: I consider nothing human alien to me",
    author: "Terence",
    source: "Heauton Timorumenos"
  },
  "01-20": {
    quote: "In vino veritas",
    translation: "In wine there is truth",
    author: "Pliny the Elder",
    source: "Natural History"
  },
  "01-21": {
    quote: "Labor omnia vincit",
    translation: "Work conquers all",
    author: "Virgil",
    source: "Georgics I.145"
  },
  "01-22": {
    quote: "Nemo mortalium omnibus horis sapit",
    translation: "No mortal is wise at all times",
    author: "Pliny the Elder",
    source: "Natural History"
  },
  "01-23": {
    quote: "Nil desperandum",
    translation: "Never despair",
    author: "Horace",
    source: "Odes I.7"
  },
  "01-24": {
    quote: "Nulla dies sine linea",
    translation: "No day without a line",
    author: "Pliny the Elder",
    source: "Natural History"
  },
  "01-25": {
    quote: "O tempora, o mores!",
    translation: "Oh the times! Oh the customs!",
    author: "Cicero",
    source: "First Catiline Oration"
  },
  "01-26": {
    quote: "Panem et circenses",
    translation: "Bread and circuses",
    author: "Juvenal",
    source: "Satires X.81"
  },
  "01-27": {
    quote: "Per aspera ad astra",
    translation: "Through hardships to the stars",
    author: "Seneca",
    source: "Traditional"
  },
  "01-28": {
    quote: "Quod erat demonstrandum",
    translation: "Which was to be demonstrated",
    author: "Euclid",
    source: "Elements"
  },
  "01-29": {
    quote: "Roma aeterna",
    translation: "Eternal Rome",
    author: "Tibullus",
    source: "Elegies"
  },
  "01-30": {
    quote: "Sapere aude",
    translation: "Dare to be wise",
    author: "Horace",
    source: "Epistles I.2"
  },
  "01-31": {
    quote: "Tempus fugit",
    translation: "Time flies",
    author: "Virgil",
    source: "Georgics III.284"
  },

  // FEBRUARY
  "02-01": {
    quote: "Verba volant, scripta manent",
    translation: "Words fly, writings remain",
    author: "Traditional",
    source: "Roman Proverb"
  },
  "02-02": {
    quote: "Vox populi, vox Dei",
    translation: "The voice of the people is the voice of God",
    author: "Alcuin",
    source: "Letter to Charlemagne"
  },
  "02-03": {
    quote: "Ab ovo usque ad mala",
    translation: "From the egg to the apples (from beginning to end)",
    author: "Horace",
    source: "Satires I.3"
  },
  "02-04": {
    quote: "Acta non verba",
    translation: "Deeds, not words",
    author: "Traditional",
    source: "Roman Motto"
  },
  "02-05": {
    quote: "Ad maiorem Dei gloriam",
    translation: "For the greater glory of God",
    author: "Jesuit Motto",
    source: "Traditional"
  },
  "02-06": {
    quote: "Amat victoria curam",
    translation: "Victory loves preparation",
    author: "Traditional",
    source: "Roman Military"
  },
  "02-07": {
    quote: "Amicus certus in re incerta cernitur",
    translation: "A true friend is discerned in an uncertain matter",
    author: "Cicero",
    source: "De Amicitia"
  },
  "02-08": {
    quote: "Aquila non capit muscas",
    translation: "An eagle doesn't catch flies",
    author: "Traditional",
    source: "Roman Proverb"
  },
  "02-09": {
    quote: "Audacia pro muro habetur",
    translation: "Boldness is considered a wall",
    author: "Sallust",
    source: "Bellum Catilinae"
  },
  "02-10": {
    quote: "Bis dat qui cito dat",
    translation: "He gives twice who gives quickly",
    author: "Publilius Syrus",
    source: "Sententiae"
  },
  "02-11": {
    quote: "Cave canem",
    translation: "Beware of the dog",
    author: "Traditional",
    source: "Pompeii Inscription"
  },
  "02-12": {
    quote: "Citius, altius, fortius",
    translation: "Faster, higher, stronger",
    author: "Olympic Motto",
    source: "Pierre de Coubertin"
  },
  "02-13": {
    quote: "Concordia parvae res crescunt",
    translation: "With harmony small things grow",
    author: "Sallust",
    source: "Bellum Iugurthinum"
  },
  "02-14": {
    quote: "Omnia vincit amor",
    translation: "Love conquers all",
    author: "Virgil",
    source: "Eclogues X.69"
  },
  "02-15": {
    quote: "Crescit eundo",
    translation: "It grows as it goes",
    author: "Lucretius",
    source: "De Rerum Natura"
  },
  "02-16": {
    quote: "Dum spiro, spero",
    translation: "While I breathe, I hope",
    author: "Cicero",
    source: "Letters to Atticus"
  },
  "02-17": {
    quote: "Ex nihilo nihil fit",
    translation: "Nothing comes from nothing",
    author: "Lucretius",
    source: "De Rerum Natura"
  },
  "02-18": {
    quote: "Faber est suae quisque fortunae",
    translation: "Every man is the architect of his own fortune",
    author: "Appius Claudius",
    source: "Traditional"
  },
  "02-19": {
    quote: "Facta, non verba",
    translation: "Deeds, not words",
    author: "Traditional",
    source: "Roman Motto"
  },
  "02-20": {
    quote: "Felix qui potuit rerum cognoscere causas",
    translation: "Happy is he who could learn the causes of things",
    author: "Virgil",
    source: "Georgics II.490"
  },
  "02-21": {
    quote: "Fiat lux",
    translation: "Let there be light",
    author: "Vulgate",
    source: "Genesis 1:3"
  },
  "02-22": {
    quote: "Fluctuat nec mergitur",
    translation: "It is tossed but not sunk",
    author: "Paris Motto",
    source: "Traditional"
  },
  "02-23": {
    quote: "Gutta cavat lapidem",
    translation: "A drop hollows out the stone",
    author: "Ovid",
    source: "Epistulae ex Ponto"
  },
  "02-24": {
    quote: "Historia magistra vitae",
    translation: "History is the teacher of life",
    author: "Cicero",
    source: "De Oratore"
  },
  "02-25": {
    quote: "Hoc signo vinces",
    translation: "By this sign you will conquer",
    author: "Constantine",
    source: "Vision before Milvian Bridge"
  },
  "02-26": {
    quote: "Ignorantia legis non excusat",
    translation: "Ignorance of the law is no excuse",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "02-27": {
    quote: "In medio stat virtus",
    translation: "Virtue stands in the middle",
    author: "Aristotle",
    source: "Nicomachean Ethics"
  },
  "02-28": {
    quote: "Inter arma silent leges",
    translation: "Laws are silent among arms",
    author: "Cicero",
    source: "Pro Milone"
  },
  "02-29": {
    quote: "Rara avis",
    translation: "A rare bird",
    author: "Juvenal",
    source: "Satires VI.165"
  },

  // MARCH
  "03-01": {
    quote: "Kalendis Martiis",
    translation: "On the Kalends of March",
    author: "Traditional",
    source: "Roman Calendar"
  },
  "03-02": {
    quote: "Lapsus linguae",
    translation: "A slip of the tongue",
    author: "Traditional",
    source: "Classical Expression"
  },
  "03-03": {
    quote: "Lex parsimoniae",
    translation: "Law of parsimony",
    author: "Ockham",
    source: "Philosophical Principle"
  },
  "03-04": {
    quote: "Magna cum laude",
    translation: "With great praise",
    author: "Academic",
    source: "Traditional"
  },
  "03-05": {
    quote: "Memento mori",
    translation: "Remember you must die",
    author: "Traditional",
    source: "Roman Saying"
  },
  "03-06": {
    quote: "Modus operandi",
    translation: "Method of operating",
    author: "Legal Term",
    source: "Traditional"
  },
  "03-07": {
    quote: "Natura non facit saltus",
    translation: "Nature does not make leaps",
    author: "Linnaeus",
    source: "Philosophia Botanica"
  },
  "03-08": {
    quote: "Nec plus ultra",
    translation: "Nothing more beyond",
    author: "Traditional",
    source: "Pillars of Hercules"
  },
  "03-09": {
    quote: "Nemo me impune lacessit",
    translation: "No one provokes me with impunity",
    author: "Scottish Motto",
    source: "Order of the Thistle"
  },
  "03-10": {
    quote: "Nihil novi sub sole",
    translation: "Nothing new under the sun",
    author: "Vulgate",
    source: "Ecclesiastes 1:9"
  },
  "03-11": {
    quote: "Non omnia possumus omnes",
    translation: "We cannot all do everything",
    author: "Virgil",
    source: "Eclogues VIII.63"
  },
  "03-12": {
    quote: "Non progredi est regredi",
    translation: "Not to advance is to go backward",
    author: "Traditional",
    source: "Latin Motto"
  },
  "03-13": {
    quote: "Nosce te ipsum",
    translation: "Know thyself",
    author: "Delphic Oracle",
    source: "Greek via Latin"
  },
  "03-14": {
    quote: "Numquam retrorsum",
    translation: "Never backward",
    author: "Traditional",
    source: "Military Motto"
  },
  "03-15": {
    quote: "Cave Idus Martias",
    translation: "Beware the Ides of March",
    author: "Soothsayer",
    source: "Shakespeare's Julius Caesar"
  },
  "03-16": {
    quote: "Otium cum dignitate",
    translation: "Leisure with dignity",
    author: "Cicero",
    source: "Pro Sestio"
  },
  "03-17": {
    quote: "Pacta sunt servanda",
    translation: "Agreements must be kept",
    author: "Legal Maxim",
    source: "International Law"
  },
  "03-18": {
    quote: "Par pari refero",
    translation: "I return like for like",
    author: "Traditional",
    source: "Latin Saying"
  },
  "03-19": {
    quote: "Pax Romana",
    translation: "Roman Peace",
    author: "Historical Term",
    source: "Augustus Era"
  },
  "03-20": {
    quote: "Pecunia non olet",
    translation: "Money doesn't smell",
    author: "Vespasian",
    source: "Suetonius"
  },
  "03-21": {
    quote: "Per ardua ad astra",
    translation: "Through adversity to the stars",
    author: "RAF Motto",
    source: "Traditional"
  },
  "03-22": {
    quote: "Perfer et obdura",
    translation: "Be patient and endure",
    author: "Ovid",
    source: "Tristia"
  },
  "03-23": {
    quote: "Post hoc ergo propter hoc",
    translation: "After this, therefore because of this",
    author: "Logical Fallacy",
    source: "Traditional"
  },
  "03-24": {
    quote: "Primus inter pares",
    translation: "First among equals",
    author: "Traditional",
    source: "Political Term"
  },
  "03-25": {
    quote: "Pro bono publico",
    translation: "For the public good",
    author: "Legal Term",
    source: "Traditional"
  },
  "03-26": {
    quote: "Qua patet orbis",
    translation: "As far as the world extends",
    author: "Dutch Marine Corps",
    source: "Motto"
  },
  "03-27": {
    quote: "Quantum sufficit",
    translation: "As much as suffices",
    author: "Medical",
    source: "Prescription Term"
  },
  "03-28": {
    quote: "Qui vivra verra",
    translation: "He who lives shall see",
    author: "Traditional",
    source: "French via Latin"
  },
  "03-29": {
    quote: "Quid pro quo",
    translation: "Something for something",
    author: "Legal Term",
    source: "Traditional"
  },
  "03-30": {
    quote: "Quis custodiet ipsos custodes?",
    translation: "Who will guard the guards themselves?",
    author: "Juvenal",
    source: "Satires VI.347"
  },
  "03-31": {
    quote: "Quo vadis?",
    translation: "Where are you going?",
    author: "Vulgate",
    source: "John 16:5"
  },

  // APRIL
  "04-01": {
    quote: "Risus abundat in ore stultorum",
    translation: "Laughter abounds in the mouth of fools",
    author: "Traditional",
    source: "Medieval Proverb"
  },
  "04-02": {
    quote: "Salus populi suprema lex esto",
    translation: "Let the welfare of the people be the supreme law",
    author: "Cicero",
    source: "De Legibus"
  },
  "04-03": {
    quote: "Scientia potentia est",
    translation: "Knowledge is power",
    author: "Francis Bacon",
    source: "Meditationes Sacrae"
  },
  "04-04": {
    quote: "Semper fidelis",
    translation: "Always faithful",
    author: "USMC Motto",
    source: "Traditional"
  },
  "04-05": {
    quote: "Sic itur ad astra",
    translation: "Thus one goes to the stars",
    author: "Virgil",
    source: "Aeneid IX.641"
  },
  "04-06": {
    quote: "Sic transit gloria mundi",
    translation: "Thus passes the glory of the world",
    author: "Traditional",
    source: "Papal Coronation"
  },
  "04-07": {
    quote: "Silent enim leges inter arma",
    translation: "Laws are silent in times of war",
    author: "Cicero",
    source: "Pro Milone"
  },
  "04-08": {
    quote: "Similia similibus curantur",
    translation: "Like cures like",
    author: "Hahnemann",
    source: "Homeopathy Principle"
  },
  "04-09": {
    quote: "Sine qua non",
    translation: "Without which not",
    author: "Traditional",
    source: "Essential Condition"
  },
  "04-10": {
    quote: "Sol lucet omnibus",
    translation: "The sun shines for everyone",
    author: "Petronius",
    source: "Satyricon"
  },
  "04-11": {
    quote: "Spes ultima dea",
    translation: "Hope is the last goddess",
    author: "Traditional",
    source: "Roman Saying"
  },
  "04-12": {
    quote: "Stat sua cuique dies",
    translation: "To each his day is given",
    author: "Virgil",
    source: "Aeneid X.467"
  },
  "04-13": {
    quote: "Sub rosa",
    translation: "Under the rose (in secret)",
    author: "Traditional",
    source: "Medieval Custom"
  },
  "04-14": {
    quote: "Summum bonum",
    translation: "The highest good",
    author: "Cicero",
    source: "De Finibus"
  },
  "04-15": {
    quote: "Tabula rasa",
    translation: "Blank slate",
    author: "Aristotle",
    source: "De Anima"
  },
  "04-16": {
    quote: "Tempora mutantur, et nos mutamur in illis",
    translation: "Times change, and we change with them",
    author: "Traditional",
    source: "Medieval Saying"
  },
  "04-17": {
    quote: "Terra incognita",
    translation: "Unknown land",
    author: "Cartographic",
    source: "Traditional"
  },
  "04-18": {
    quote: "Timeo Danaos et dona ferentes",
    translation: "I fear the Greeks, even bearing gifts",
    author: "Virgil",
    source: "Aeneid II.49"
  },
  "04-19": {
    quote: "Tu quoque",
    translation: "You also",
    author: "Traditional",
    source: "Logical Fallacy"
  },
  "04-20": {
    quote: "Ubi concordia, ibi victoria",
    translation: "Where there is harmony, there is victory",
    author: "Publilius Syrus",
    source: "Sententiae"
  },
  "04-21": {
    quote: "Natalis Romae",
    translation: "Birthday of Rome",
    author: "Traditional",
    source: "April 21, 753 BCE"
  },
  "04-22": {
    quote: "Urbi et orbi",
    translation: "To the city and the world",
    author: "Papal",
    source: "Traditional"
  },
  "04-23": {
    quote: "Ut sementem feceris, ita metes",
    translation: "As you sow, so shall you reap",
    author: "Cicero",
    source: "De Oratore"
  },
  "04-24": {
    quote: "Vale",
    translation: "Farewell",
    author: "Traditional",
    source: "Roman Greeting"
  },
  "04-25": {
    quote: "Vanitas vanitatum",
    translation: "Vanity of vanities",
    author: "Vulgate",
    source: "Ecclesiastes 1:2"
  },
  "04-26": {
    quote: "Varium et mutabile semper femina",
    translation: "Woman is always fickle and changeable",
    author: "Virgil",
    source: "Aeneid IV.569"
  },
  "04-27": {
    quote: "Velocitas et mora",
    translation: "Speed and delay",
    author: "Military",
    source: "Strategic Principle"
  },
  "04-28": {
    quote: "Veritas lux mea",
    translation: "Truth is my light",
    author: "Traditional",
    source: "University Motto"
  },
  "04-29": {
    quote: "Veritas vos liberabit",
    translation: "The truth will set you free",
    author: "Vulgate",
    source: "John 8:32"
  },
  "04-30": {
    quote: "Vestigia nulla retrorsum",
    translation: "No footsteps backward",
    author: "Horace",
    source: "Epistles I.1.74"
  },

  // MAY
  "05-01": {
    quote: "Kalendae Maiae",
    translation: "The Kalends of May",
    author: "Traditional",
    source: "Roman Calendar"
  },
  "05-02": {
    quote: "Via media",
    translation: "The middle way",
    author: "Traditional",
    source: "Philosophical Term"
  },
  "05-03": {
    quote: "Vice versa",
    translation: "The position being reversed",
    author: "Traditional",
    source: "Common Expression"
  },
  "05-04": {
    quote: "Vincit qui patitur",
    translation: "He conquers who endures",
    author: "Traditional",
    source: "Latin Motto"
  },
  "05-05": {
    quote: "Viribus unitis",
    translation: "With united forces",
    author: "Austrian Empire",
    source: "Imperial Motto"
  },
  "05-06": {
    quote: "Vis maior",
    translation: "Superior force",
    author: "Legal Term",
    source: "Force Majeure"
  },
  "05-07": {
    quote: "Vita brevis, ars longa",
    translation: "Life is short, art is long",
    author: "Hippocrates",
    source: "Via Seneca"
  },
  "05-08": {
    quote: "Vivat, crescat, floreat",
    translation: "May it live, grow, and flourish",
    author: "Academic",
    source: "Traditional Toast"
  },
  "05-09": {
    quote: "Vive ut vivas",
    translation: "Live that you may live",
    author: "Traditional",
    source: "Latin Motto"
  },
  "05-10": {
    quote: "Volenti non fit iniuria",
    translation: "No injury is done to a willing person",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "05-11": {
    quote: "Ab urbe condita",
    translation: "From the founding of the city",
    author: "Livy",
    source: "Historical Dating"
  },
  "05-12": {
    quote: "Acta est fabula",
    translation: "The play is over",
    author: "Augustus",
    source: "Last Words"
  },
  "05-13": {
    quote: "Ad astra per aspera",
    translation: "To the stars through difficulties",
    author: "Kansas Motto",
    source: "Traditional"
  },
  "05-14": {
    quote: "Ad fontes",
    translation: "To the sources",
    author: "Renaissance",
    source: "Humanist Principle"
  },
  "05-15": {
    quote: "Ad infinitum",
    translation: "To infinity",
    author: "Mathematical",
    source: "Traditional"
  },
  "05-16": {
    quote: "Ad nauseam",
    translation: "To the point of nausea",
    author: "Traditional",
    source: "Common Expression"
  },
  "05-17": {
    quote: "Aeternum vale",
    translation: "Farewell forever",
    author: "Ovid",
    source: "Metamorphoses"
  },
  "05-18": {
    quote: "Age quod agis",
    translation: "Do what you are doing",
    author: "Traditional",
    source: "Focus Principle"
  },
  "05-19": {
    quote: "Alma mater",
    translation: "Nourishing mother",
    author: "Academic",
    source: "Traditional"
  },
  "05-20": {
    quote: "Alter ego",
    translation: "Another self",
    author: "Cicero",
    source: "De Amicitia"
  },
  "05-21": {
    quote: "Ante bellum",
    translation: "Before the war",
    author: "Historical",
    source: "Traditional"
  },
  "05-22": {
    quote: "Aqua vitae",
    translation: "Water of life",
    author: "Medieval",
    source: "Alchemical Term"
  },
  "05-23": {
    quote: "Arbiter elegantiarum",
    translation: "Judge of elegance",
    author: "Tacitus",
    source: "About Petronius"
  },
  "05-24": {
    quote: "Arcana imperii",
    translation: "Secrets of power",
    author: "Tacitus",
    source: "Annals"
  },
  "05-25": {
    quote: "Argumentum ad hominem",
    translation: "Argument against the person",
    author: "Logic",
    source: "Traditional"
  },
  "05-26": {
    quote: "Ars gratia artis",
    translation: "Art for art's sake",
    author: "MGM Motto",
    source: "Traditional"
  },
  "05-27": {
    quote: "Audi alteram partem",
    translation: "Hear the other side",
    author: "Legal Principle",
    source: "Roman Law"
  },
  "05-28": {
    quote: "Aurora musis amica",
    translation: "Dawn is a friend to the Muses",
    author: "Traditional",
    source: "Academic Saying"
  },
  "05-29": {
    quote: "Aut Caesar aut nihil",
    translation: "Either Caesar or nothing",
    author: "Cesare Borgia",
    source: "Personal Motto"
  },
  "05-30": {
    quote: "Ave atque vale",
    translation: "Hail and farewell",
    author: "Catullus",
    source: "Carmen 101"
  },
  "05-31": {
    quote: "Beati pauperes spiritu",
    translation: "Blessed are the poor in spirit",
    author: "Vulgate",
    source: "Matthew 5:3"
  },

  // JUNE
  "06-01": {
    quote: "Kalendae Iuniae",
    translation: "The Kalends of June",
    author: "Traditional",
    source: "Roman Calendar"
  },
  "06-02": {
    quote: "Bona fide",
    translation: "In good faith",
    author: "Legal Term",
    source: "Traditional"
  },
  "06-03": {
    quote: "Caritas in veritate",
    translation: "Charity in truth",
    author: "Benedict XVI",
    source: "Encyclical"
  },
  "06-04": {
    quote: "Casus belli",
    translation: "Cause for war",
    author: "International Law",
    source: "Traditional"
  },
  "06-05": {
    quote: "Caveat emptor",
    translation: "Let the buyer beware",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "06-06": {
    quote: "Ceteris paribus",
    translation: "Other things being equal",
    author: "Economic Term",
    source: "Traditional"
  },
  "06-07": {
    quote: "Condicio sine qua non",
    translation: "Condition without which not",
    author: "Legal Term",
    source: "Traditional"
  },
  "06-08": {
    quote: "Consensus omnium",
    translation: "Agreement of all",
    author: "Cicero",
    source: "Tusculan Disputations"
  },
  "06-09": {
    quote: "Consummatum est",
    translation: "It is finished",
    author: "Vulgate",
    source: "John 19:30"
  },
  "06-10": {
    quote: "Corpus delicti",
    translation: "Body of the crime",
    author: "Legal Term",
    source: "Traditional"
  },
  "06-11": {
    quote: "Cui bono?",
    translation: "To whose benefit?",
    author: "Cicero",
    source: "Pro Roscio"
  },
  "06-12": {
    quote: "Cum grano salis",
    translation: "With a grain of salt",
    author: "Pliny the Elder",
    source: "Natural History"
  },
  "06-13": {
    quote: "Curriculum vitae",
    translation: "Course of life",
    author: "Academic",
    source: "Traditional"
  },
  "06-14": {
    quote: "Custos morum",
    translation: "Guardian of morals",
    author: "Traditional",
    source: "Roman Office"
  },
  "06-15": {
    quote: "Da mihi factum, dabo tibi ius",
    translation: "Give me the facts, I will give you the law",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "06-16": {
    quote: "De facto",
    translation: "In fact",
    author: "Legal Term",
    source: "Traditional"
  },
  "06-17": {
    quote: "De iure",
    translation: "By right",
    author: "Legal Term",
    source: "Traditional"
  },
  "06-18": {
    quote: "De minimis non curat lex",
    translation: "The law does not concern itself with trifles",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "06-19": {
    quote: "De mortuis nil nisi bonum",
    translation: "Of the dead, nothing but good",
    author: "Traditional",
    source: "Latin Saying"
  },
  "06-20": {
    quote: "Deo volente",
    translation: "God willing",
    author: "Traditional",
    source: "Religious Expression"
  },
  "06-21": {
    quote: "Dies natalis solis invicti",
    translation: "Birthday of the unconquered sun",
    author: "Roman Festival",
    source: "Summer Solstice"
  },
  "06-22": {
    quote: "Divide et impera",
    translation: "Divide and conquer",
    author: "Philip of Macedon",
    source: "Strategic Principle"
  },
  "06-23": {
    quote: "Docendo discimus",
    translation: "By teaching, we learn",
    author: "Seneca",
    source: "Letters"
  },
  "06-24": {
    quote: "Dominus vobiscum",
    translation: "The Lord be with you",
    author: "Liturgical",
    source: "Traditional"
  },
  "06-25": {
    quote: "Dona nobis pacem",
    translation: "Grant us peace",
    author: "Liturgical",
    source: "Agnus Dei"
  },
  "06-26": {
    quote: "Dramatis personae",
    translation: "Characters of the drama",
    author: "Theatrical",
    source: "Traditional"
  },
  "06-27": {
    quote: "Dum vivimus, vivamus",
    translation: "While we live, let us live",
    author: "Epicurean",
    source: "Traditional"
  },
  "06-28": {
    quote: "Dura lex sed lex",
    translation: "The law is harsh but it is the law",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "06-29": {
    quote: "E pluribus unum",
    translation: "Out of many, one",
    author: "USA Motto",
    source: "Traditional"
  },
  "06-30": {
    quote: "Ecce homo",
    translation: "Behold the man",
    author: "Vulgate",
    source: "John 19:5"
  },

  // JULY
  "07-01": {
    quote: "Kalendae Iuliae",
    translation: "The Kalends of July",
    author: "Traditional",
    source: "Roman Calendar"
  },
  "07-02": {
    quote: "Eheu fugaces labuntur anni",
    translation: "Alas, the fleeting years slip away",
    author: "Horace",
    source: "Odes II.14"
  },
  "07-03": {
    quote: "Emeritus",
    translation: "Having served out one's time",
    author: "Academic",
    source: "Traditional"
  },
  "07-04": {
    quote: "Libertas",
    translation: "Freedom",
    author: "Traditional",
    source: "Independence Day"
  },
  "07-05": {
    quote: "Ergo",
    translation: "Therefore",
    author: "Logic",
    source: "Traditional"
  },
  "07-06": {
    quote: "Esse quam videri",
    translation: "To be rather than to seem",
    author: "Cicero",
    source: "De Amicitia"
  },
  "07-07": {
    quote: "Esto perpetua",
    translation: "May it be perpetual",
    author: "Idaho Motto",
    source: "Traditional"
  },
  "07-08": {
    quote: "Et cetera",
    translation: "And the rest",
    author: "Traditional",
    source: "Common Abbreviation"
  },
  "07-09": {
    quote: "Ex cathedra",
    translation: "From the chair",
    author: "Papal Term",
    source: "Traditional"
  },
  "07-10": {
    quote: "Ex libris",
    translation: "From the books",
    author: "Bookplate",
    source: "Traditional"
  },
  "07-11": {
    quote: "Ex post facto",
    translation: "After the fact",
    author: "Legal Term",
    source: "Traditional"
  },
  "07-12": {
    quote: "Ex tempore",
    translation: "Out of the moment",
    author: "Traditional",
    source: "Impromptu"
  },
  "07-13": {
    quote: "Excelsior",
    translation: "Ever upward",
    author: "New York Motto",
    source: "Traditional"
  },
  "07-14": {
    quote: "Exeunt omnes",
    translation: "All leave",
    author: "Theatrical",
    source: "Stage Direction"
  },
  "07-15": {
    quote: "Experimentum crucis",
    translation: "Crucial experiment",
    author: "Francis Bacon",
    source: "Scientific Method"
  },
  "07-16": {
    quote: "Fac et spera",
    translation: "Do and hope",
    author: "Traditional",
    source: "Latin Motto"
  },
  "07-17": {
    quote: "Fac simile",
    translation: "Make similar",
    author: "Traditional",
    source: "Origin of 'Facsimile'"
  },
  "07-18": {
    quote: "Facilis descensus Averno",
    translation: "The descent to Avernus is easy",
    author: "Virgil",
    source: "Aeneid VI.126"
  },
  "07-19": {
    quote: "Fama volat",
    translation: "Rumor flies",
    author: "Virgil",
    source: "Aeneid III.121"
  },
  "07-20": {
    quote: "Fata viam invenient",
    translation: "The fates will find a way",
    author: "Virgil",
    source: "Aeneid X.113"
  },
  "07-21": {
    quote: "Fiat iustitia ruat caelum",
    translation: "Let justice be done though the heavens fall",
    author: "Legal Maxim",
    source: "Traditional"
  },
  "07-22": {
    quote: "Fide, sed cui vide",
    translation: "Trust, but see whom",
    author: "Traditional",
    source: "Latin Saying"
  },
  "07-23": {
    quote: "Fidei defensor",
    translation: "Defender of the faith",
    author: "British Monarch",
    source: "Royal Title"
  },
  "07-24": {
    quote: "Fides quaerens intellectum",
    translation: "Faith seeking understanding",
    author: "Anselm",
    source: "Theological Principle"
  },
  "07-25": {
    quote: "Floruit",
    translation: "He flourished",
    author: "Historical",
    source: "Traditional"
  },
  "07-26": {
    quote: "Fortis fortuna adiuvat",
    translation: "Fortune favors the brave",
    author: "Terence",
    source: "Phormio"
  },
  "07-27": {
    quote: "Genius loci",
    translation: "Spirit of the place",
    author: "Traditional",
    source: "Roman Religion"
  },
  "07-28": {
    quote: "Gloria in excelsis Deo",
    translation: "Glory to God in the highest",
    author: "Vulgate",
    source: "Luke 2:14"
  },
  "07-29": {
    quote: "Habeas corpus",
    translation: "You may have the body",
    author: "Legal Term",
    source: "English Law"
  },
  "07-30": {
    quote: "Habemus papam",
    translation: "We have a pope",
    author: "Cardinal Protodeacon",
    source: "Papal Election"
  },
  "07-31": {
    quote: "Hic et nunc",
    translation: "Here and now",
    author: "Traditional",
    source: "Philosophical Term"
  },

  // AUGUST
  "08-01": {
    quote: "Kalendae Augustae",
    translation: "The Kalends of August",
    author: "Traditional",
    source: "Roman Calendar"
  },
  "08-02": {
    quote: "Hic sunt dracones",
    translation: "Here be dragons",
    author: "Cartographic",
    source: "Medieval Maps"
  },
  "08-03": {
    quote: "Hodie mihi, cras tibi",
    translation: "Today me, tomorrow you",
    author: "Tombstone",
    source: "Traditional"
  },
  "08-04": {
    quote: "Homo homini lupus",
    translation: "Man is wolf to man",
    author: "Plautus",
    source: "Asinaria"
  },
  "08-05": {
    quote: "Homo sapiens",
    translation: "Wise man",
    author: "Linnaeus",
    source: "Scientific Classification"
  },
  "08-06": {
    quote: "Honores mutant mores",
    translation: "Honors change customs",
    author: "Traditional",
    source: "Latin Saying"
  },
  "08-07": {
    quote: "Hora fugit",
    translation: "The hour flies",
    author: "Traditional",
    source: "Sundial Inscription"
  },
  "08-08": {
    quote: "Horribile dictu",
    translation: "Horrible to say",
    author: "Traditional",
    source: "Latin Expression"
  },
  "08-09": {
    quote: "Humani nihil alienum",
    translation: "Nothing human is alien",
    author: "Terence",
    source: "Heauton Timorumenos"
  },
  "08-10": {
    quote: "Ibidem",
    translation: "In the same place",
    author: "Academic",
    source: "Citation Term"
  },
  "08-11": {
    quote: "Id est",
    translation: "That is",
    author: "Traditional",
    source: "Common Abbreviation"
  },
  "08-12": {
    quote: "Ignis fatuus",
    translation: "Foolish fire",
    author: "Traditional",
    source: "Will-o'-the-wisp"
  },
  "08-13": {
    quote: "In absentia",
    translation: "In absence",
    author: "Legal Term",
    source: "Traditional"
  },
  "08-14": {
    quote: "In dubio pro reo",
    translation: "In doubt, for the accused",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "08-15": {
    quote: "In extremis",
    translation: "At the point of death",
    author: "Traditional",
    source: "Latin Expression"
  },
  "08-16": {
    quote: "In flagrante delicto",
    translation: "In blazing offense",
    author: "Legal Term",
    source: "Traditional"
  },
  "08-17": {
    quote: "In hoc signo vinces",
    translation: "In this sign you will conquer",
    author: "Constantine",
    source: "Vision"
  },
  "08-18": {
    quote: "In loco parentis",
    translation: "In place of a parent",
    author: "Legal Term",
    source: "Traditional"
  },
  "08-19": {
    quote: "In medias res",
    translation: "Into the midst of things",
    author: "Horace",
    source: "Ars Poetica"
  },
  "08-20": {
    quote: "In memoriam",
    translation: "In memory",
    author: "Traditional",
    source: "Memorial Expression"
  },
  "08-21": {
    quote: "In perpetuum",
    translation: "Forever",
    author: "Legal Term",
    source: "Traditional"
  },
  "08-22": {
    quote: "In situ",
    translation: "In position",
    author: "Scientific",
    source: "Traditional"
  },
  "08-23": {
    quote: "In toto",
    translation: "In total",
    author: "Traditional",
    source: "Common Expression"
  },
  "08-24": {
    quote: "In utero",
    translation: "In the womb",
    author: "Medical",
    source: "Traditional"
  },
  "08-25": {
    quote: "In vitro",
    translation: "In glass",
    author: "Scientific",
    source: "Traditional"
  },
  "08-26": {
    quote: "In vivo",
    translation: "In life",
    author: "Scientific",
    source: "Traditional"
  },
  "08-27": {
    quote: "Infinitus est numerus stultorum",
    translation: "Infinite is the number of fools",
    author: "Vulgate",
    source: "Ecclesiastes 1:15"
  },
  "08-28": {
    quote: "Integer vitae",
    translation: "Upright in life",
    author: "Horace",
    source: "Odes I.22"
  },
  "08-29": {
    quote: "Inter alia",
    translation: "Among other things",
    author: "Legal Term",
    source: "Traditional"
  },
  "08-30": {
    quote: "Inter nos",
    translation: "Between us",
    author: "Traditional",
    source: "Common Expression"
  },
  "08-31": {
    quote: "Ipso facto",
    translation: "By the fact itself",
    author: "Traditional",
    source: "Legal Term"
  },

  // SEPTEMBER
  "09-01": {
    quote: "Kalendae Septembres",
    translation: "The Kalends of September",
    author: "Traditional",
    source: "Roman Calendar"
  },
  "09-02": {
    quote: "Labor omnia vincit improbus",
    translation: "Persistent work conquers all",
    author: "Virgil",
    source: "Georgics I.145"
  },
  "09-03": {
    quote: "Lapsus calami",
    translation: "Slip of the pen",
    author: "Traditional",
    source: "Common Expression"
  },
  "09-04": {
    quote: "Laus Deo",
    translation: "Praise be to God",
    author: "Traditional",
    source: "Religious Expression"
  },
  "09-05": {
    quote: "Lex scripta",
    translation: "Written law",
    author: "Legal Term",
    source: "Traditional"
  },
  "09-06": {
    quote: "Liberum arbitrium",
    translation: "Free will",
    author: "Theological",
    source: "Traditional"
  },
  "09-07": {
    quote: "Locus classicus",
    translation: "Classical passage",
    author: "Academic",
    source: "Traditional"
  },
  "09-08": {
    quote: "Lorem ipsum",
    translation: "Pain itself",
    author: "Cicero",
    source: "De Finibus (corrupted)"
  },
  "09-09": {
    quote: "Lux et veritas",
    translation: "Light and truth",
    author: "Yale Motto",
    source: "Traditional"
  },
  "09-10": {
    quote: "Magister dixit",
    translation: "The master has spoken",
    author: "Medieval",
    source: "Scholastic Term"
  },
  "09-11": {
    quote: "Magna est veritas et praevalet",
    translation: "Great is truth and it prevails",
    author: "Vulgate",
    source: "3 Esdras 4:41"
  },
  "09-12": {
    quote: "Magnum opus",
    translation: "Great work",
    author: "Alchemical",
    source: "Traditional"
  },
  "09-13": {
    quote: "Mala fide",
    translation: "In bad faith",
    author: "Legal Term",
    source: "Traditional"
  },
  "09-14": {
    quote: "Manu propria",
    translation: "With one's own hand",
    author: "Traditional",
    source: "Signature Term"
  },
  "09-15": {
    quote: "Mare nostrum",
    translation: "Our sea",
    author: "Roman Empire",
    source: "Mediterranean"
  },
  "09-16": {
    quote: "Mater familias",
    translation: "Mother of the family",
    author: "Roman Law",
    source: "Traditional"
  },
  "09-17": {
    quote: "Materia prima",
    translation: "First matter",
    author: "Alchemical",
    source: "Traditional"
  },
  "09-18": {
    quote: "Mea culpa",
    translation: "My fault",
    author: "Liturgical",
    source: "Confiteor"
  },
  "09-19": {
    quote: "Medio tutissimus ibis",
    translation: "You will go safest in the middle",
    author: "Ovid",
    source: "Metamorphoses"
  },
  "09-20": {
    quote: "Memento vivere",
    translation: "Remember to live",
    author: "Traditional",
    source: "Counter to Memento Mori"
  },
  "09-21": {
    quote: "Mens rea",
    translation: "Guilty mind",
    author: "Legal Term",
    source: "Criminal Law"
  },
  "09-22": {
    quote: "Mirabile dictu",
    translation: "Wonderful to say",
    author: "Virgil",
    source: "Aeneid"
  },
  "09-23": {
    quote: "Modus vivendi",
    translation: "Way of living",
    author: "Traditional",
    source: "Diplomatic Term"
  },
  "09-24": {
    quote: "Mortui vivos docent",
    translation: "The dead teach the living",
    author: "Medical",
    source: "Anatomical Motto"
  },
  "09-25": {
    quote: "Multum in parvo",
    translation: "Much in little",
    author: "Traditional",
    source: "Latin Motto"
  },
  "09-26": {
    quote: "Mutatis mutandis",
    translation: "With necessary changes",
    author: "Legal Term",
    source: "Traditional"
  },
  "09-27": {
    quote: "Nascentes morimur",
    translation: "Being born, we die",
    author: "Manilius",
    source: "Astronomica"
  },
  "09-28": {
    quote: "Natura abhorret vacuum",
    translation: "Nature abhors a vacuum",
    author: "Aristotle",
    source: "Physics"
  },
  "09-29": {
    quote: "Navigare necesse est",
    translation: "To sail is necessary",
    author: "Pompey",
    source: "Plutarch"
  },
  "09-30": {
    quote: "Ne plus ultra",
    translation: "Nothing further beyond",
    author: "Charles V",
    source: "Imperial Motto"
  },

  // OCTOBER
  "10-01": {
    quote: "Kalendae Octobres",
    translation: "The Kalends of October",
    author: "Traditional",
    source: "Roman Calendar"
  },
  "10-02": {
    quote: "Nemo iudex in causa sua",
    translation: "No one is judge in his own case",
    author: "Legal Maxim",
    source: "Roman Law"
  },
  "10-03": {
    quote: "Nemo nisi per amicitiam cognoscitur",
    translation: "No one learns except through friendship",
    author: "Augustine",
    source: "De Diversis"
  },
  "10-04": {
    quote: "Nihil obstat",
    translation: "Nothing stands in the way",
    author: "Church Term",
    source: "Imprimatur Process"
  },
  "10-05": {
    quote: "Nil sine numine",
    translation: "Nothing without divine will",
    author: "Colorado Motto",
    source: "Virgil"
  },
  "10-06": {
    quote: "Noli me tangere",
    translation: "Touch me not",
    author: "Vulgate",
    source: "John 20:17"
  },
  "10-07": {
    quote: "Nomen est omen",
    translation: "The name is a sign",
    author: "Plautus",
    source: "Traditional"
  },
  "10-08": {
    quote: "Non bis in idem",
    translation: "Not twice for the same",
    author: "Legal Maxim",
    source: "Double Jeopardy"
  },
  "10-09": {
    quote: "Non compos mentis",
    translation: "Not of sound mind",
    author: "Legal Term",
    source: "Traditional"
  },
  "10-10": {
    quote: "Non ducor, duco",
    translation: "I am not led, I lead",
    author: "São Paulo Motto",
    source: "Traditional"
  },
  "10-11": {
    quote: "Non licet omnibus adire Corinthum",
    translation: "Not everyone can go to Corinth",
    author: "Horace",
    source: "Epistles"
  },
  "10-12": {
    quote: "Non mihi, non tibi, sed nobis",
    translation: "Not for me, not for you, but for us",
    author: "Traditional",
    source: "Latin Motto"
  },
  "10-13": {
    quote: "Non multa, sed multum",
    translation: "Not many, but much",
    author: "Pliny the Younger",
    source: "Letters"
  },
  "10-14": {
    quote: "Non nobis solum",
    translation: "Not for ourselves alone",
    author: "Cicero",
    source: "De Officiis"
  },
  "10-15": {
    quote: "Non omnis moriar",
    translation: "I shall not wholly die",
    author: "Horace",
    source: "Odes III.30"
  },
  "10-16": {
    quote: "Non sequitur",
    translation: "It does not follow",
    author: "Logic",
    source: "Traditional"
  },
  "10-17": {
    quote: "Non serviam",
    translation: "I will not serve",
    author: "Traditional",
    source: "Lucifer's Rebellion"
  },
  "10-18": {
    quote: "Nota bene",
    translation: "Note well",
    author: "Traditional",
    source: "Common Abbreviation"
  },
  "10-19": {
    quote: "Novus ordo seclorum",
    translation: "New order of the ages",
    author: "US Great Seal",
    source: "Virgil"
  },
  "10-20": {
    quote: "Nulla poena sine lege",
    translation: "No punishment without law",
    author: "Legal Maxim",
    source: "Criminal Law"
  },
  "10-21": {
    quote: "Nullius in verba",
    translation: "On the word of no one",
    author: "Royal Society",
    source: "Motto"
  },
  "10-22": {
    quote: "Nunc aut numquam",
    translation: "Now or never",
    author: "Traditional",
    source: "Latin Motto"
  },
  "10-23": {
    quote: "Nunc dimittis",
    translation: "Now you dismiss",
    author: "Vulgate",
    source: "Luke 2:29"
  },
  "10-24": {
    quote: "Nunc est bibendum",
    translation: "Now is the time to drink",
    author: "Horace",
    source: "Odes I.37"
  },
  "10-25": {
    quote: "O sancta simplicitas",
    translation: "O holy simplicity",
    author: "Jan Hus",
    source: "Last Words"
  },
  "10-26": {
    quote: "Obiter dictum",
    translation: "Said in passing",
    author: "Legal Term",
    source: "Traditional"
  },
  "10-27": {
    quote: "Obscurum per obscurius",
    translation: "The obscure by the more obscure",
    author: "Traditional",
    source: "Logical Fallacy"
  },
  "10-28": {
    quote: "Omne ignotum pro magnifico",
    translation: "Everything unknown is taken as magnificent",
    author: "Tacitus",
    source: "Agricola"
  },
  "10-29": {
    quote: "Omnia mea mecum porto",
    translation: "I carry all my things with me",
    author: "Bias of Priene",
    source: "Via Cicero"
  },
  "10-30": {
    quote: "Onus probandi",
    translation: "Burden of proof",
    author: "Legal Term",
    source: "Traditional"
  },
  "10-31": {
    quote: "Opera omnia",
    translation: "Complete works",
    author: "Academic",
    source: "Traditional"
  },

  // NOVEMBER
  "11-01": {
    quote: "Omnium sanctorum",
    translation: "Of all saints",
    author: "Liturgical",
    source: "All Saints Day"
  },

  "11-02": {
    quote: "Ora et labora",
    translation: "Pray and work",
    author: "St. Benedict",
    source: "Benedictine Motto"
  },
  "11-03": {
    quote: "Ora pro nobis",
    translation: "Pray for us",
    author: "Liturgical",
    source: "Traditional"
  },
  "11-04": {
    quote: "Orbis terrarum",
    translation: "Circle of lands",
    author: "Traditional",
    source: "The World"
  },
  "11-05": {
    quote: "Memento, memento",
    translation: "Remember, remember",
    author: "Traditional",
    source: "Guy Fawkes Day"
  },
  "11-06": {
    quote: "Pace tua",
    translation: "With your peace",
    author: "Traditional",
    source: "Polite Expression"
  },
  "11-07": {
    quote: "Panem nostrum quotidianum",
    translation: "Our daily bread",
    author: "Vulgate",
    source: "Lord's Prayer"
  },
  "11-08": {
    quote: "Pari passu",
    translation: "With equal step",
    author: "Legal Term",
    source: "Traditional"
  },
  "11-09": {
    quote: "Pars pro toto",
    translation: "Part for the whole",
    author: "Rhetorical",
    source: "Traditional"
  },
  "11-10": {
    quote: "Passim",
    translation: "Here and there",
    author: "Academic",
    source: "Citation Term"
  },
  "11-11": {
    quote: "Pater patriae",
    translation: "Father of the fatherland",
    author: "Roman Title",
    source: "Traditional"
  },
  "11-12": {
    quote: "Pax vobiscum",
    translation: "Peace be with you",
    author: "Liturgical",
    source: "Traditional"
  },
  "11-13": {
    quote: "Per angusta ad augusta",
    translation: "Through difficulties to honors",
    author: "Traditional",
    source: "Latin Motto"
  },
  "11-14": {
    quote: "Per capita",
    translation: "By heads",
    author: "Statistical",
    source: "Traditional"
  },
  "11-15": {
    quote: "Per contra",
    translation: "On the contrary",
    author: "Traditional",
    source: "Common Expression"
  },
  "11-16": {
    quote: "Per diem",
    translation: "By the day",
    author: "Business",
    source: "Traditional"
  },
  "11-17": {
    quote: "Per fas et nefas",
    translation: "Through right and wrong",
    author: "Traditional",
    source: "Latin Expression"
  },
  "11-18": {
    quote: "Per se",
    translation: "By itself",
    author: "Traditional",
    source: "Common Expression"
  },
  "11-19": {
    quote: "Persona non grata",
    translation: "Unwelcome person",
    author: "Diplomatic",
    source: "Traditional"
  },
  "11-20": {
    quote: "Petitio principii",
    translation: "Begging the question",
    author: "Logic",
    source: "Traditional"
  },
  "11-21": {
    quote: "Pia desideria",
    translation: "Pious wishes",
    author: "Traditional",
    source: "Latin Expression"
  },
  "11-22": {
    quote: "Pluralitas non est ponenda sine necessitate",
    translation: "Plurality should not be posited without necessity",
    author: "William of Ockham",
    source: "Ockham's Razor"
  },
  "11-23": {
    quote: "Plus ultra",
    translation: "Further beyond",
    author: "Spanish Motto",
    source: "Traditional"
  },
  "11-24": {
    quote: "Post meridiem",
    translation: "After midday",
    author: "Traditional",
    source: "Time Designation"
  },
  "11-25": {
    quote: "Post mortem",
    translation: "After death",
    author: "Medical",
    source: "Traditional"
  },
  "11-26": {
    quote: "Post scriptum",
    translation: "After writing",
    author: "Traditional",
    source: "Letter Writing"
  },
  "11-27": {
    quote: "Prima facie",
    translation: "At first face",
    author: "Legal Term",
    source: "Traditional"
  },
  "11-28": {
    quote: "Primum non nocere",
    translation: "First, do no harm",
    author: "Hippocratic",
    source: "Medical Ethics"
  },
  "11-29": {
    quote: "Principiis obsta",
    translation: "Resist the beginnings",
    author: "Ovid",
    source: "Remedia Amoris"
  },
  "11-30": {
    quote: "Pro forma",
    translation: "For form",
    author: "Business",
    source: "Traditional"
  },

  // DECEMBER
  "12-01": {
    quote: "Kalendae Decembres",
    translation: "The Kalends of December",
    author: "Traditional",
    source: "Roman Calendar"
  },
  "12-02": {
    quote: "Pro patria",
    translation: "For country",
    author: "Traditional",
    source: "Patriotic Motto"
  },
  "12-03": {
    quote: "Pro rata",
    translation: "For the rate",
    author: "Business",
    source: "Traditional"
  },
  "12-04": {
    quote: "Pro tempore",
    translation: "For the time",
    author: "Traditional",
    source: "Temporary Position"
  },
  "12-05": {
    quote: "Propria manu",
    translation: "By one's own hand",
    author: "Traditional",
    source: "Signature Term"
  },
  "12-06": {
    quote: "Proxime accessit",
    translation: "He came next",
    author: "Academic",
    source: "Second Prize"
  },
  "12-07": {
    quote: "Pulvis et umbra sumus",
    translation: "We are dust and shadow",
    author: "Horace",
    source: "Odes IV.7"
  },
  "12-08": {
    quote: "Quaere verum",
    translation: "Seek the truth",
    author: "Traditional",
    source: "Latin Motto"
  },
  "12-09": {
    quote: "Qualis rex, talis grex",
    translation: "As the king, so the flock",
    author: "Traditional",
    source: "Latin Proverb"
  },
  "12-10": {
    quote: "Quando omni flunkus moritati",
    translation: "When all else fails, play dead",
    author: "Red Green Show",
    source: "Modern Latin"
  },
  "12-11": {
    quote: "Quantum satis",
    translation: "As much as enough",
    author: "Medical",
    source: "Prescription Term"
  },
  "12-12": {
    quote: "Quem di diligunt adulescens moritur",
    translation: "Whom the gods love dies young",
    author: "Plautus",
    source: "Bacchides"
  },
  "12-13": {
    quote: "Qui desiderat pacem, praeparet bellum",
    translation: "Who desires peace, let him prepare for war",
    author: "Vegetius",
    source: "De Re Militari"
  },
  "12-14": {
    quote: "Qui dormit non peccat",
    translation: "Who sleeps does not sin",
    author: "Traditional",
    source: "Medieval Proverb"
  },
  "12-15": {
    quote: "Qui tacet consentire videtur",
    translation: "Who is silent seems to consent",
    author: "Legal Maxim",
    source: "Canon Law"
  },
  "12-16": {
    quote: "Quid novi?",
    translation: "What's new?",
    author: "Traditional",
    source: "Common Greeting"
  },
  "12-17": {
    quote: "Quidquid latine dictum sit, altum videtur",
    translation: "Whatever is said in Latin seems profound",
    author: "Modern",
    source: "Humorous Saying"
  },
  "12-18": {
    quote: "Quieta non movere",
    translation: "Not to move quiet things",
    author: "Traditional",
    source: "Conservative Principle"
  },
  "12-19": {
    quote: "Quod demonstrandum",
    translation: "Which is to be demonstrated",
    author: "Mathematical",
    source: "Q.E.D."
  },
  "12-20": {
    quote: "Quod licet Iovi, non licet bovi",
    translation: "What is permitted to Jupiter is not permitted to an ox",
    author: "Traditional",
    source: "Latin Proverb"
  },
  "12-21": {
    quote: "Bruma",
    translation: "Winter solstice",
    author: "Traditional",
    source: "Shortest Day"
  },
  "12-22": {
    quote: "Quorum",
    translation: "Of whom",
    author: "Parliamentary",
    source: "Traditional"
  },
  "12-23": {
    quote: "Quot homines, tot sententiae",
    translation: "As many men, so many opinions",
    author: "Terence",
    source: "Phormio"
  },
  "12-24": {
    quote: "Vigilia Natalis",
    translation: "Christmas Eve",
    author: "Liturgical",
    source: "Traditional"
  },
  "12-25": {
    quote: "Gloria in altissimis Deo",
    translation: "Glory to God in the highest",
    author: "Vulgate",
    source: "Luke 2:14"
  },
  "12-26": {
    quote: "Raptus regaliter",
    translation: "Royally snatched",
    author: "Traditional",
    source: "Boxing Day"
  },
  "12-27": {
    quote: "Ratio decidendi",
    translation: "Reason for deciding",
    author: "Legal Term",
    source: "Traditional"
  },
  "12-28": {
    quote: "Rebus sic stantibus",
    translation: "Things thus standing",
    author: "Legal Term",
    source: "Traditional"
  },
  "12-29": {
    quote: "Requiescat in pace",
    translation: "May he rest in peace",
    author: "Traditional",
    source: "Epitaph"
  },
  "12-30": {
    quote: "Res ipsa loquitur",
    translation: "The thing speaks for itself",
    author: "Legal Maxim",
    source: "Tort Law"
  },
  "12-31": {
    quote: "Anno concludente",
    translation: "With the year ending",
    author: "Traditional",
    source: "New Year's Eve"
  }
};

// Function to get today's quote
function getTodayQuote() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateKey = `${month}-${day}`;
  
  return latinQuotes[dateKey] || {
    quote: "Carpe diem",
    translation: "Seize the day",
    author: "Horace",
    source: "Odes"
  };
}

// Function to get quote for a specific date
function getQuoteForDate(month, day) {
  const dateKey = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return latinQuotes[dateKey] || {
    quote: "Veritas vos liberabit",
    translation: "The truth will set you free",
    author: "Vulgate",
    source: "John 8:32"
  };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { latinQuotes, getTodayQuote, getQuoteForDate };
}

    
