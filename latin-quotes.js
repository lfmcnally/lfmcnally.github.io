// Latin Quote of the Day Database
// Format: "MM-DD": {quote: "Latin text", translation: "English translation", author: "Author", source: "Source work"}
// 365 quotes for each day of the year - memorable quotes from literature, history, and philosophy

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
    source: "Crossing the Rubicon, 49 BCE"
  },
  "01-03": {
    quote: "Veni, vidi, vici",
    translation: "I came, I saw, I conquered",
    author: "Julius Caesar",
    source: "Letter to the Senate, 47 BCE"
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
    quote: "Arma virumque cano",
    translation: "I sing of arms and the man",
    author: "Virgil",
    source: "Aeneid I.1"
  },
  "01-07": {
    quote: "Mens sana in corpore sano",
    translation: "A healthy mind in a healthy body",
    author: "Juvenal",
    source: "Satires X.356"
  },
  "01-08": {
    quote: "Errare humanum est, perseverare autem diabolicum",
    translation: "To err is human, but to persist in error is diabolical",
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
    quote: "Amor vincit omnia, et nos cedamus amori",
    translation: "Love conquers all things, so let us too yield to love",
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
    quote: "Sunt lacrimae rerum et mentem mortalia tangunt",
    translation: "These are the tears of things, and mortal matters touch the mind",
    author: "Virgil",
    source: "Aeneid I.462"
  },
  "01-14": {
    quote: "Odi et amo. Quare id faciam fortasse requiris. Nescio, sed fieri sentio et excrucior",
    translation: "I hate and I love. Why I do this, perhaps you ask. I know not, but I feel it and am tormented",
    author: "Catullus",
    source: "Carmen 85"
  },
  "01-15": {
    quote: "Quidquid id est, timeo Danaos et dona ferentes",
    translation: "Whatever it is, I fear the Greeks even bearing gifts",
    author: "Virgil",
    source: "Aeneid II.49"
  },
  "01-16": {
    quote: "Et tu, Brute?",
    translation: "You too, Brutus?",
    author: "Julius Caesar",
    source: "Last words, 44 BCE"
  },
  "01-17": {
    quote: "Festina lente",
    translation: "Make haste slowly",
    author: "Augustus",
    source: "Suetonius, Life of Augustus"
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
    quote: "In vino veritas, in aqua sanitas",
    translation: "In wine there is truth, in water there is health",
    author: "Pliny the Elder",
    source: "Natural History"
  },
  "01-21": {
    quote: "Labor omnia vincit improbus",
    translation: "Persistent work conquers all things",
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
    translation: "No day without a line drawn",
    author: "Pliny the Elder",
    source: "Natural History, on Apelles"
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
    source: "Hercules Furens"
  },
  "01-28": {
    quote: "Facilis descensus Averno; noctes atque dies patet atri ianua Ditis",
    translation: "Easy is the descent to Avernus; night and day the door of dark Dis stands open",
    author: "Virgil",
    source: "Aeneid VI.126-127"
  },
  "01-29": {
    quote: "Exegi monumentum aere perennius",
    translation: "I have raised a monument more lasting than bronze",
    author: "Horace",
    source: "Odes III.30"
  },
  "01-30": {
    quote: "Sapere aude",
    translation: "Dare to be wise",
    author: "Horace",
    source: "Epistles I.2"
  },
  "01-31": {
    quote: "Fugit irreparabile tempus",
    translation: "Irretrievable time flies",
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
    quote: "Quis custodiet ipsos custodes?",
    translation: "Who will guard the guards themselves?",
    author: "Juvenal",
    source: "Satires VI.347"
  },
  "02-03": {
    quote: "Ab ovo usque ad mala",
    translation: "From the egg to the apples — from beginning to end",
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
    quote: "Vitae summa brevis spem nos vetat incohare longam",
    translation: "The brief sum of life forbids us from entertaining long hope",
    author: "Horace",
    source: "Odes I.4"
  },
  "02-06": {
    quote: "Amat victoria curam",
    translation: "Victory loves preparation",
    author: "Traditional",
    source: "Roman Military"
  },
  "02-07": {
    quote: "Amicus certus in re incerta cernitur",
    translation: "A true friend is discerned in uncertain times",
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
    translation: "Boldness serves as a wall",
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
    source: "Pompeii Mosaic"
  },
  "02-12": {
    quote: "Crescit amor nummi quantum ipsa pecunia crescit",
    translation: "Love of money grows as fast as the money itself grows",
    author: "Juvenal",
    source: "Satires XIV.139"
  },
  "02-13": {
    quote: "Concordia parvae res crescunt, discordia maximae dilabuntur",
    translation: "With harmony small things grow; with discord the greatest fall apart",
    author: "Sallust",
    source: "Bellum Iugurthinum"
  },
  "02-14": {
    quote: "Da mi basia mille, deinde centum",
    translation: "Give me a thousand kisses, then a hundred",
    author: "Catullus",
    source: "Carmen 5"
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
    source: "Sallust's letter to Caesar"
  },
  "02-19": {
    quote: "Medio tutissimus ibis",
    translation: "You will go safest in the middle",
    author: "Ovid",
    source: "Metamorphoses II.137"
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
    translation: "It is tossed by the waves but does not sink",
    author: "Traditional",
    source: "Motto of Paris"
  },
  "02-23": {
    quote: "Gutta cavat lapidem non vi sed saepe cadendo",
    translation: "A drop hollows out the stone not by force but by falling often",
    author: "Ovid",
    source: "Epistulae ex Ponto IV.10.5"
  },
  "02-24": {
    quote: "Historia magistra vitae",
    translation: "History is the teacher of life",
    author: "Cicero",
    source: "De Oratore II.9.36"
  },
  "02-25": {
    quote: "In hoc signo vinces",
    translation: "By this sign you will conquer",
    author: "Constantine",
    source: "Vision at the Milvian Bridge, 312 CE"
  },
  "02-26": {
    quote: "Nulla salus bello; pacem te poscimus omnes",
    translation: "There is no safety in war; we all ask you for peace",
    author: "Virgil",
    source: "Aeneid XI.362"
  },
  "02-27": {
    quote: "In medio stat virtus",
    translation: "Virtue stands in the middle",
    author: "Aristotle via Latin",
    source: "Nicomachean Ethics"
  },
  "02-28": {
    quote: "Inter arma enim silent leges",
    translation: "For among weapons, laws are silent",
    author: "Cicero",
    source: "Pro Milone"
  },
  "02-29": {
    quote: "Rara avis in terris nigroque simillima cygno",
    translation: "A rare bird on earth, like a black swan",
    author: "Juvenal",
    source: "Satires VI.165"
  },

  // MARCH
  "03-01": {
    quote: "Fama volat",
    translation: "Rumor flies",
    author: "Virgil",
    source: "Aeneid III.121"
  },
  "03-02": {
    quote: "Nec possum tecum vivere, nec sine te",
    translation: "I can live neither with you, nor without you",
    author: "Martial",
    source: "Epigrams XII.46"
  },
  "03-03": {
    quote: "Mea mihi conscientia pluris est quam omnium sermo",
    translation: "My conscience matters more to me than what the world says",
    author: "Cicero",
    source: "Letters to Atticus XII.28"
  },
  "03-04": {
    quote: "Cras amet qui numquam amavit quique amavit cras amet",
    translation: "May he love tomorrow who has never loved before; and may he who has loved, love tomorrow as well",
    author: "Anonymous",
    source: "Pervigilium Veneris"
  },
  "03-05": {
    quote: "Memento mori",
    translation: "Remember that you must die",
    author: "Traditional",
    source: "Roman Triumphal Saying"
  },
  "03-06": {
    quote: "Fama nihil est celerius",
    translation: "Nothing is swifter than rumor",
    author: "Livy",
    source: "Ab Urbe Condita XXIV.21"
  },
  "03-07": {
    quote: "Natura non facit saltum",
    translation: "Nature does not make leaps",
    author: "Linnaeus",
    source: "Philosophia Botanica"
  },
  "03-08": {
    quote: "Nec spe nec metu",
    translation: "Without hope, without fear",
    author: "Isabella d'Este",
    source: "Personal Motto"
  },
  "03-09": {
    quote: "Nemo me impune lacessit",
    translation: "No one provokes me with impunity",
    author: "Traditional",
    source: "Motto of Scotland"
  },
  "03-10": {
    quote: "Nihil sub sole novum",
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
    quote: "Difficile est saturam non scribere",
    translation: "It is difficult not to write satire",
    author: "Juvenal",
    source: "Satires I.30"
  },
  "03-13": {
    quote: "Nosce te ipsum",
    translation: "Know thyself",
    author: "Delphic Oracle",
    source: "Temple of Apollo at Delphi"
  },
  "03-14": {
    quote: "Monstrum horrendum, informe, ingens, cui lumen ademptum",
    translation: "A monster horrible, misshapen, vast, whose light has been taken away",
    author: "Virgil",
    source: "Aeneid III.658 (on Polyphemus)"
  },
  "03-15": {
    quote: "Cave Idus Martias",
    translation: "Beware the Ides of March",
    author: "Spurinna the Soothsayer",
    source: "Warning to Caesar"
  },
  "03-16": {
    quote: "Otium cum dignitate",
    translation: "Leisure with dignity",
    author: "Cicero",
    source: "Pro Sestio"
  },
  "03-17": {
    quote: "Parturient montes, nascetur ridiculus mus",
    translation: "Mountains will labor, and a ridiculous mouse will be born",
    author: "Horace",
    source: "Ars Poetica 139"
  },
  "03-18": {
    quote: "Omnia mutantur, nihil interit",
    translation: "All things change, nothing perishes",
    author: "Ovid",
    source: "Metamorphoses XV.165"
  },
  "03-19": {
    quote: "Solitudinem faciunt, pacem appellant",
    translation: "They make a desert and call it peace",
    author: "Tacitus",
    source: "Agricola 30"
  },
  "03-20": {
    quote: "Pecunia non olet",
    translation: "Money doesn't smell",
    author: "Vespasian",
    source: "Suetonius, Life of Vespasian"
  },
  "03-21": {
    quote: "Pallida mors aequo pulsat pede pauperum tabernas regumque turres",
    translation: "Pale death kicks equally at the doors of the poor and the towers of kings",
    author: "Horace",
    source: "Odes I.4.13-14"
  },
  "03-22": {
    quote: "Perfer et obdura; dolor hic tibi proderit olim",
    translation: "Be patient and endure; this pain will serve you one day",
    author: "Ovid",
    source: "Amores III.11.7"
  },
  "03-23": {
    quote: "Tempus edax rerum",
    translation: "Time, devourer of all things",
    author: "Ovid",
    source: "Metamorphoses XV.234"
  },
  "03-24": {
    quote: "Primus inter pares",
    translation: "First among equals",
    author: "Augustus",
    source: "Political Term"
  },
  "03-25": {
    quote: "Si vis pacem, para bellum",
    translation: "If you want peace, prepare for war",
    author: "Vegetius",
    source: "De Re Militari III"
  },
  "03-26": {
    quote: "Quidquid agis, prudenter agas, et respice finem",
    translation: "Whatever you do, do it wisely, and consider the end",
    author: "Gesta Romanorum",
    source: "Medieval Collection"
  },
  "03-27": {
    quote: "Vivamus, mea Lesbia, atque amemus",
    translation: "Let us live, my Lesbia, and let us love",
    author: "Catullus",
    source: "Carmen 5"
  },
  "03-28": {
    quote: "Qui vivra verra",
    translation: "He who lives shall see",
    author: "Traditional",
    source: "French via Latin"
  },
  "03-29": {
    quote: "Navigare necesse est, vivere non est necesse",
    translation: "To sail is necessary, to live is not necessary",
    author: "Pompey",
    source: "Plutarch, Life of Pompey"
  },
  "03-30": {
    quote: "Quot homines, tot sententiae",
    translation: "As many men, so many opinions",
    author: "Terence",
    source: "Phormio II.4"
  },
  "03-31": {
    quote: "Quo vadis?",
    translation: "Where are you going?",
    author: "Traditional",
    source: "Acts of Peter"
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
    source: "De Legibus III.3.8"
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
    author: "Traditional",
    source: "Ancient Motto"
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
    author: "Thomas à Kempis",
    source: "Imitation of Christ"
  },
  "04-07": {
    quote: "Flectere si nequeo superos, Acheronta movebo",
    translation: "If I cannot move the gods above, I shall stir up the underworld",
    author: "Virgil",
    source: "Aeneid VII.312"
  },
  "04-08": {
    quote: "Homo homini lupus",
    translation: "Man is wolf to man",
    author: "Plautus",
    source: "Asinaria"
  },
  "04-09": {
    quote: "Una salus victis nullam sperare salutem",
    translation: "The only safety for the conquered is to expect no safety",
    author: "Virgil",
    source: "Aeneid II.354"
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
    quote: "Stat sua cuique dies; breve et irreparabile tempus omnibus est vitae",
    translation: "To each his day is given; brief and irretrievable is the time of life for all",
    author: "Virgil",
    source: "Aeneid X.467-468"
  },
  "04-13": {
    quote: "Qui bene amat, bene castigat",
    translation: "He who loves well, punishes well",
    author: "Traditional",
    source: "Medieval Proverb"
  },
  "04-14": {
    quote: "Summum ius, summa iniuria",
    translation: "The highest law is the greatest injustice",
    author: "Cicero",
    source: "De Officiis I.33"
  },
  "04-15": {
    quote: "Brevis ipsa vita est sed malis fit longior",
    translation: "Life itself is short but misfortune makes it longer",
    author: "Publilius Syrus",
    source: "Sententiae"
  },
  "04-16": {
    quote: "Tempora mutantur, nos et mutamur in illis",
    translation: "Times change, and we change with them",
    author: "John Owen",
    source: "Epigrammata"
  },
  "04-17": {
    quote: "Nescis quid serus vesper vehat",
    translation: "You know not what the late evening may bring",
    author: "Varro",
    source: "Quoted by Macrobius"
  },
  "04-18": {
    quote: "Fortes fortuna adiuvat",
    translation: "Fortune favors the brave",
    author: "Terence",
    source: "Phormio I.4"
  },
  "04-19": {
    quote: "Quos deus vult perdere, prius dementat",
    translation: "Whom the gods wish to destroy, they first make mad",
    author: "Traditional",
    source: "Latin rendering of Greek"
  },
  "04-20": {
    quote: "Ubi concordia, ibi victoria",
    translation: "Where there is harmony, there is victory",
    author: "Publilius Syrus",
    source: "Sententiae"
  },
  "04-21": {
    quote: "Natalis Romae — Roma aeterna",
    translation: "Birthday of Rome — Eternal Rome",
    author: "Traditional",
    source: "April 21, 753 BCE"
  },
  "04-22": {
    quote: "Omnis ars imitatio est naturae",
    translation: "All art is an imitation of nature",
    author: "Seneca",
    source: "Epistulae Morales 65.3"
  },
  "04-23": {
    quote: "Ut sementem feceris, ita metes",
    translation: "As you sow, so shall you reap",
    author: "Cicero",
    source: "De Oratore II.65"
  },
  "04-24": {
    quote: "Ave atque vale",
    translation: "Hail and farewell",
    author: "Catullus",
    source: "Carmen 101"
  },
  "04-25": {
    quote: "Vanitas vanitatum et omnia vanitas",
    translation: "Vanity of vanities, and all is vanity",
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
    quote: "Nihil est ab omni parte beatum",
    translation: "Nothing is blessed in every respect",
    author: "Horace",
    source: "Odes II.16.27-28"
  },
  "04-28": {
    quote: "Veritas numquam perit",
    translation: "Truth never perishes",
    author: "Seneca",
    source: "Troades 614"
  },
  "04-29": {
    quote: "Veritas vos liberabit",
    translation: "The truth will set you free",
    author: "Vulgate",
    source: "John 8:32"
  },
  "04-30": {
    quote: "Vestigia nulla retrorsum",
    translation: "No footsteps backward — always forward",
    author: "Horace",
    source: "Epistles I.1.74"
  },

  // MAY
  "05-01": {
    quote: "Ver redit, et virgo",
    translation: "Spring returns, and the maiden",
    author: "Virgil",
    source: "Georgics I.340"
  },
  "05-02": {
    quote: "Via media",
    translation: "The middle way",
    author: "Traditional",
    source: "Philosophical Term"
  },
  "05-03": {
    quote: "Igne natura renovatur integra",
    translation: "Through fire nature is reborn whole",
    author: "Alchemical",
    source: "Traditional"
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
    author: "Franz Joseph I",
    source: "Austrian Imperial Motto"
  },
  "05-06": {
    quote: "Fortis cadere, cedere non potest",
    translation: "The brave may fall, but cannot yield",
    author: "Traditional",
    source: "Latin Motto"
  },
  "05-07": {
    quote: "Vita brevis, ars longa, occasio praeceps, experimentum periculosum, iudicium difficile",
    translation: "Life is short, art is long, opportunity fleeting, experiment perilous, judgment difficult",
    author: "Hippocrates",
    source: "Aphorisms"
  },
  "05-08": {
    quote: "Vivat, crescat, floreat",
    translation: "May it live, grow, and flourish",
    author: "Traditional",
    source: "Academic Toast"
  },
  "05-09": {
    quote: "Vive ut vivas",
    translation: "Live that you may truly live",
    author: "Traditional",
    source: "Latin Motto"
  },
  "05-10": {
    quote: "Experto crede",
    translation: "Trust one who has experience",
    author: "Virgil",
    source: "Aeneid XI.283"
  },
  "05-11": {
    quote: "Ab urbe condita",
    translation: "From the founding of the city",
    author: "Livy",
    source: "Ab Urbe Condita"
  },
  "05-12": {
    quote: "Acta est fabula, plaudite!",
    translation: "The play is over, applaud!",
    author: "Augustus",
    source: "Suetonius, Last Words"
  },
  "05-13": {
    quote: "Ad astra per aspera",
    translation: "To the stars through difficulties",
    author: "Traditional",
    source: "Kansas State Motto"
  },
  "05-14": {
    quote: "Ad fontes",
    translation: "To the sources",
    author: "Renaissance Humanists",
    source: "Scholarly Principle"
  },
  "05-15": {
    quote: "Omnia vincit labor",
    translation: "Work conquers all",
    author: "Virgil",
    source: "Georgics I.145"
  },
  "05-16": {
    quote: "Quidquid discis, tibi discis",
    translation: "Whatever you learn, you learn for yourself",
    author: "Petronius",
    source: "Satyricon"
  },
  "05-17": {
    quote: "Aeternum vale",
    translation: "Farewell forever",
    author: "Ovid",
    source: "Metamorphoses X.62"
  },
  "05-18": {
    quote: "Age quod agis",
    translation: "Do what you are doing — with full attention",
    author: "Ignatius of Loyola",
    source: "Spiritual Maxim"
  },
  "05-19": {
    quote: "Dulce et utile",
    translation: "The sweet and the useful",
    author: "Horace",
    source: "Ars Poetica 343"
  },
  "05-20": {
    quote: "Alter ipse amicus",
    translation: "A friend is another self",
    author: "Cicero",
    source: "De Amicitia"
  },
  "05-21": {
    quote: "Olim meminisse iuvabit",
    translation: "One day it will be pleasing to remember",
    author: "Virgil",
    source: "Aeneid I.203"
  },
  "05-22": {
    quote: "Aquae subeunt et montibus aurum",
    translation: "They dive for water and gold in mountains",
    author: "Seneca",
    source: "De Ira III.35"
  },
  "05-23": {
    quote: "Hic habitat felicitas",
    translation: "Here dwells happiness",
    author: "Traditional",
    source: "Pompeii Inscription"
  },
  "05-24": {
    quote: "Arcana imperii",
    translation: "Secrets of power",
    author: "Tacitus",
    source: "Annals II.36"
  },
  "05-25": {
    quote: "Cedant arma togae",
    translation: "Let arms yield to the toga",
    author: "Cicero",
    source: "De Officiis I.77"
  },
  "05-26": {
    quote: "Ars gratia artis",
    translation: "Art for art's sake",
    author: "Traditional",
    source: "Aesthetic Principle"
  },
  "05-27": {
    quote: "Audi alteram partem",
    translation: "Hear the other side",
    author: "Seneca",
    source: "Medea 199"
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
    quote: "Dulces moriens reminiscitur Argos",
    translation: "Dying, he remembers sweet Argos",
    author: "Virgil",
    source: "Aeneid X.782"
  },
  "05-31": {
    quote: "Beati pacifici",
    translation: "Blessed are the peacemakers",
    author: "Vulgate",
    source: "Matthew 5:9"
  },

  // JUNE
  "06-01": {
    quote: "Aestus erat, mediamque dies exegerat horam",
    translation: "It was summer, and the day had passed its midpoint",
    author: "Ovid",
    source: "Metamorphoses III.143"
  },
  "06-02": {
    quote: "Fides facit fidem",
    translation: "Faith creates faith",
    author: "Traditional",
    source: "Legal Maxim"
  },
  "06-03": {
    quote: "O passi graviora, dabit deus his quoque finem",
    translation: "O you who have endured worse, God will grant an end to these too",
    author: "Virgil",
    source: "Aeneid I.199"
  },
  "06-04": {
    quote: "Casus belli",
    translation: "Cause for war",
    author: "Traditional",
    source: "Diplomatic Term"
  },
  "06-05": {
    quote: "Caveat emptor",
    translation: "Let the buyer beware",
    author: "Traditional",
    source: "Roman Legal Maxim"
  },
  "06-06": {
    quote: "Multos, iniquissime, iaces",
    translation: "Most unjustly, you lay low many",
    author: "Livy",
    source: "Ab Urbe Condita, on Fortune"
  },
  "06-07": {
    quote: "Aequam memento rebus in arduis servare mentem",
    translation: "Remember to keep an even mind in difficult times",
    author: "Horace",
    source: "Odes II.3.1-2"
  },
  "06-08": {
    quote: "Nulla fere causa est in qua non femina litem moverit",
    translation: "There is scarcely a case in which a woman has not stirred up the strife",
    author: "Juvenal",
    source: "Satires VI.242-243"
  },
  "06-09": {
    quote: "Consummatum est",
    translation: "It is finished",
    author: "Vulgate",
    source: "John 19:30"
  },
  "06-10": {
    quote: "Timendi causa est nescire",
    translation: "Ignorance is the cause of fear",
    author: "Seneca",
    source: "Epistulae Morales"
  },
  "06-11": {
    quote: "Cui bono?",
    translation: "To whose benefit?",
    author: "Cicero",
    source: "Pro Roscio Amerino"
  },
  "06-12": {
    quote: "Cum grano salis",
    translation: "With a grain of salt",
    author: "Pliny the Elder",
    source: "Natural History XXIII"
  },
  "06-13": {
    quote: "Donec eris felix, multos numerabis amicos; tempora si fuerint nubila, solus eris",
    translation: "As long as you are fortunate, you will have many friends; if clouds appear, you will be alone",
    author: "Ovid",
    source: "Tristia I.9.5-6"
  },
  "06-14": {
    quote: "Aut viam inveniam aut faciam",
    translation: "I shall either find a way or make one",
    author: "Hannibal",
    source: "Crossing the Alps"
  },
  "06-15": {
    quote: "Da mihi ubi consistam, et terram movebo",
    translation: "Give me a place to stand, and I will move the earth",
    author: "Archimedes",
    source: "Via Pappus"
  },
  "06-16": {
    quote: "Finis coronat opus",
    translation: "The end crowns the work",
    author: "Ovid",
    source: "Heroides II.85"
  },
  "06-17": {
    quote: "Disce quasi semper victurus, vive quasi cras moriturus",
    translation: "Learn as if you will live forever, live as if you will die tomorrow",
    author: "Attributed to Seneca",
    source: "Traditional"
  },
  "06-18": {
    quote: "Magna di curant, parva neglegunt",
    translation: "The gods care for great matters, neglect small ones",
    author: "Cicero",
    source: "De Natura Deorum II.167"
  },
  "06-19": {
    quote: "De mortuis nil nisi bonum",
    translation: "Of the dead, speak nothing but good",
    author: "Chilon of Sparta",
    source: "Via Diogenes Laertius"
  },
  "06-20": {
    quote: "Deo volente",
    translation: "God willing",
    author: "Vulgate",
    source: "James 4:15"
  },
  "06-21": {
    quote: "Lux aeterna",
    translation: "Eternal light",
    author: "Liturgical",
    source: "Summer Solstice"
  },
  "06-22": {
    quote: "Divide et impera",
    translation: "Divide and conquer",
    author: "Philip II of Macedon",
    source: "Strategic Principle"
  },
  "06-23": {
    quote: "Docendo discimus",
    translation: "By teaching, we learn",
    author: "Seneca",
    source: "Epistulae Morales 7.8"
  },
  "06-24": {
    quote: "Ignis aurum probat, miseria fortes viros",
    translation: "Fire tests gold, adversity tests strong men",
    author: "Seneca",
    source: "De Providentia 5.9"
  },
  "06-25": {
    quote: "Dona nobis pacem",
    translation: "Grant us peace",
    author: "Liturgical",
    source: "Agnus Dei"
  },
  "06-26": {
    quote: "Leges sine moribus vanae",
    translation: "Laws without morals are useless",
    author: "Horace",
    source: "Odes III.24.35-36"
  },
  "06-27": {
    quote: "Dum vivimus, vivamus",
    translation: "While we live, let us live",
    author: "Epicurean",
    source: "Traditional"
  },
  "06-28": {
    quote: "Quid est veritas? Est vir qui adest",
    translation: "What is truth? It is the man before you",
    author: "Medieval Anagram",
    source: "On Pilate's question (John 18:38)"
  },
  "06-29": {
    quote: "E pluribus unum",
    translation: "Out of many, one",
    author: "Virgil",
    source: "Moretum — USA Motto"
  },
  "06-30": {
    quote: "Ecce homo",
    translation: "Behold the man",
    author: "Vulgate",
    source: "John 19:5"
  },

  // JULY
  "07-01": {
    quote: "Tantae molis erat Romanam condere gentem",
    translation: "So great was the effort to found the Roman race",
    author: "Virgil",
    source: "Aeneid I.33"
  },
  "07-02": {
    quote: "Eheu fugaces, Postume, Postume, labuntur anni",
    translation: "Alas, Postumus, Postumus, the fleeting years slip away",
    author: "Horace",
    source: "Odes II.14.1-2"
  },
  "07-03": {
    quote: "Post tenebras lux",
    translation: "After darkness, light",
    author: "Vulgate",
    source: "Job 17:12"
  },
  "07-04": {
    quote: "Libertas quae sera tamen",
    translation: "Freedom, which though late",
    author: "Virgil",
    source: "Eclogues I.27"
  },
  "07-05": {
    quote: "Laudator temporis acti",
    translation: "A praiser of times past",
    author: "Horace",
    source: "Ars Poetica 173"
  },
  "07-06": {
    quote: "Esse quam videri",
    translation: "To be rather than to seem",
    author: "Cicero",
    source: "De Amicitia 98"
  },
  "07-07": {
    quote: "Esto perpetua",
    translation: "May it be perpetual",
    author: "Paolo Sarpi",
    source: "Last Words, on Venice"
  },
  "07-08": {
    quote: "Fortunae filius",
    translation: "Son of Fortune — a lucky person",
    author: "Horace",
    source: "Satires II.6.49"
  },
  "07-09": {
    quote: "Iam proximus ardet Ucalegon",
    translation: "Already Ucalegon's house next door is burning",
    author: "Virgil",
    source: "Aeneid II.311"
  },
  "07-10": {
    quote: "Hinc illae lacrimae",
    translation: "Hence those tears",
    author: "Terence",
    source: "Andria I.1.99"
  },
  "07-11": {
    quote: "Si monumentum requiris, circumspice",
    translation: "If you seek his monument, look around",
    author: "Christopher Wren Jr.",
    source: "St. Paul's Cathedral, on his father"
  },
  "07-12": {
    quote: "O fortunatos nimium, sua si bona norint, agricolas",
    translation: "O too fortunate farmers, if they knew their blessings",
    author: "Virgil",
    source: "Georgics II.458-459"
  },
  "07-13": {
    quote: "Excelsior",
    translation: "Ever upward",
    author: "Traditional",
    source: "New York State Motto"
  },
  "07-14": {
    quote: "Liberté, Égalité, Fraternité",
    translation: "Liberty, Equality, Fraternity",
    author: "French Revolution",
    source: "Via Latin roots"
  },
  "07-15": {
    quote: "Fata volentem ducunt, nolentem trahunt",
    translation: "The Fates lead the willing and drag the unwilling",
    author: "Seneca",
    source: "Epistulae Morales 107.11"
  },
  "07-16": {
    quote: "Fac et spera",
    translation: "Do and hope",
    author: "Traditional",
    source: "Latin Motto"
  },
  "07-17": {
    quote: "Incredibile dictu",
    translation: "Incredible to say",
    author: "Traditional",
    source: "Classical Expression"
  },
  "07-18": {
    quote: "Descensus Averno facilis est",
    translation: "The descent to Avernus is easy",
    author: "Virgil",
    source: "Aeneid VI.126"
  },
  "07-19": {
    quote: "Mater artium necessitas",
    translation: "Necessity is the mother of invention",
    author: "Traditional",
    source: "Latin Proverb"
  },
  "07-20": {
    quote: "Fata viam invenient",
    translation: "The fates will find a way",
    author: "Virgil",
    source: "Aeneid X.113"
  },
  "07-21": {
    quote: "Fiat iustitia, ruat caelum",
    translation: "Let justice be done, though the heavens fall",
    author: "Lucius Calpurnius Piso",
    source: "Via Seneca"
  },
  "07-22": {
    quote: "Nullum magnum ingenium sine mixtura dementiae fuit",
    translation: "There has been no great talent without some touch of madness",
    author: "Seneca",
    source: "De Tranquillitate Animi 17.10"
  },
  "07-23": {
    quote: "Non ignara mali miseris succurrere disco",
    translation: "Not ignorant of misfortune, I learn to help the wretched",
    author: "Virgil",
    source: "Aeneid I.630"
  },
  "07-24": {
    quote: "Fides quaerens intellectum",
    translation: "Faith seeking understanding",
    author: "Anselm",
    source: "Proslogion"
  },
  "07-25": {
    quote: "Floruit",
    translation: "He flourished",
    author: "Traditional",
    source: "Historical Dating"
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
    quote: "Habent sua fata libelli",
    translation: "Books have their own destinies",
    author: "Terentianus Maurus",
    source: "De Litteris, Syllabis, Pedibus"
  },
  "07-30": {
    quote: "Hic manebimus optime",
    translation: "Here we shall remain, most excellently",
    author: "Livy",
    source: "Ab Urbe Condita V.55"
  },
  "07-31": {
    quote: "Hic et nunc",
    translation: "Here and now",
    author: "Traditional",
    source: "Philosophical Term"
  },

  // AUGUST
  "08-01": {
    quote: "Sol invictus",
    translation: "The unconquered sun",
    author: "Roman Religion",
    source: "Imperial Cult"
  },
  "08-02": {
    quote: "Hic sunt dracones",
    translation: "Here be dragons",
    author: "Traditional",
    source: "Hunt-Lenox Globe, c. 1510"
  },
  "08-03": {
    quote: "Hodie mihi, cras tibi",
    translation: "Today for me, tomorrow for you",
    author: "Traditional",
    source: "Tombstone Inscription"
  },
  "08-04": {
    quote: "Lupus est homo homini",
    translation: "Man is a wolf to man",
    author: "Plautus",
    source: "Asinaria II.4.88"
  },
  "08-05": {
    quote: "Homo doctus in se semper divitias habet",
    translation: "A learned man always has riches within himself",
    author: "Phaedrus",
    source: "Fables IV.21"
  },
  "08-06": {
    quote: "Honores mutant mores, sed raro in meliores",
    translation: "Honors change customs, but rarely for the better",
    author: "Traditional",
    source: "Medieval Proverb"
  },
  "08-07": {
    quote: "Hora fugit, ne tardes",
    translation: "The hour flies, don't delay",
    author: "Traditional",
    source: "Sundial Inscription"
  },
  "08-08": {
    quote: "Mirabile dictu",
    translation: "Wonderful to say",
    author: "Virgil",
    source: "Georgics II.30"
  },
  "08-09": {
    quote: "Humani nil a me alienum puto",
    translation: "Nothing human is alien to me",
    author: "Terence",
    source: "Heauton Timorumenos"
  },
  "08-10": {
    quote: "Dulce bellum inexpertis",
    translation: "War is sweet to those who have not experienced it",
    author: "Erasmus",
    source: "Adagia"
  },
  "08-11": {
    quote: "Ars est celare artem",
    translation: "True art is to conceal art",
    author: "Ovid",
    source: "Ars Amatoria II.313"
  },
  "08-12": {
    quote: "Ignis fatuus",
    translation: "Foolish fire — will-o'-the-wisp",
    author: "Medieval",
    source: "Traditional"
  },
  "08-13": {
    quote: "Felix culpa",
    translation: "Happy fault — blessed fall",
    author: "Augustine",
    source: "Exsultet"
  },
  "08-14": {
    quote: "In dubio pro reo",
    translation: "In doubt, for the accused",
    author: "Traditional",
    source: "Legal Principle"
  },
  "08-15": {
    quote: "Magnificat anima mea Dominum",
    translation: "My soul magnifies the Lord",
    author: "Vulgate",
    source: "Luke 1:46 — Assumption"
  },
  "08-16": {
    quote: "Occasio aegre offertur, facile amittitur",
    translation: "Opportunity is offered with difficulty, lost with ease",
    author: "Publilius Syrus",
    source: "Sententiae"
  },
  "08-17": {
    quote: "Exitus acta probat",
    translation: "The outcome justifies the deeds",
    author: "Ovid",
    source: "Heroides II.85"
  },
  "08-18": {
    quote: "Mens agitat molem",
    translation: "Mind moves matter",
    author: "Virgil",
    source: "Aeneid VI.727"
  },
  "08-19": {
    quote: "In medias res",
    translation: "Into the midst of things",
    author: "Horace",
    source: "Ars Poetica 148"
  },
  "08-20": {
    quote: "Requiem aeternam dona eis, Domine",
    translation: "Grant them eternal rest, O Lord",
    author: "Liturgical",
    source: "Mass for the Dead"
  },
  "08-21": {
    quote: "Sic parvis magna",
    translation: "Greatness from small beginnings",
    author: "Sir Francis Drake",
    source: "Personal Motto"
  },
  "08-22": {
    quote: "Ubi bene, ibi patria",
    translation: "Where it is well, there is my country",
    author: "Cicero",
    source: "Tusculan Disputations V.108"
  },
  "08-23": {
    quote: "Magni nominis umbra",
    translation: "Shadow of a great name",
    author: "Lucan",
    source: "Pharsalia I.135"
  },
  "08-24": {
    quote: "Vesuvius ardet",
    translation: "Vesuvius is burning",
    author: "Pliny the Younger",
    source: "Eruption of 79 CE"
  },
  "08-25": {
    quote: "Nitimur in vetitum semper cupimusque negata",
    translation: "We always strive for what is forbidden and desire what is denied",
    author: "Ovid",
    source: "Amores III.4.17"
  },
  "08-26": {
    quote: "Lex malla, lex nulla",
    translation: "A bad law is no law",
    author: "Thomas Aquinas",
    source: "Summa Theologica"
  },
  "08-27": {
    quote: "Infinitus est numerus stultorum",
    translation: "Infinite is the number of fools",
    author: "Vulgate",
    source: "Ecclesiastes 1:15"
  },
  "08-28": {
    quote: "Integer vitae scelerisque purus",
    translation: "He who is upright in life and free from crime",
    author: "Horace",
    source: "Odes I.22.1"
  },
  "08-29": {
    quote: "Finis vitae sed non amoris",
    translation: "The end of life but not of love",
    author: "Traditional",
    source: "Epitaph"
  },
  "08-30": {
    quote: "Vixi et quem dederat cursum fortuna peregi",
    translation: "I have lived and finished the course that fortune gave me",
    author: "Virgil",
    source: "Aeneid IV.653"
  },
  "08-31": {
    quote: "Ipso facto",
    translation: "By the fact itself",
    author: "Traditional",
    source: "Scholastic Philosophy"
  },

  // SEPTEMBER
  "09-01": {
    quote: "Autumnus advenit",
    translation: "Autumn arrives",
    author: "Traditional",
    source: "Seasonal"
  },
  "09-02": {
    quote: "Labor omnia vincit improbus",
    translation: "Relentless work conquers all",
    author: "Virgil",
    source: "Georgics I.145-146"
  },
  "09-03": {
    quote: "Lapsus memoriae",
    translation: "A slip of memory",
    author: "Traditional",
    source: "Classical Expression"
  },
  "09-04": {
    quote: "Laus Deo",
    translation: "Praise be to God",
    author: "Traditional",
    source: "Washington Monument Capstone"
  },
  "09-05": {
    quote: "Non sum qualis eram",
    translation: "I am not what I once was",
    author: "Horace",
    source: "Odes IV.1.3"
  },
  "09-06": {
    quote: "Liberum arbitrium",
    translation: "Free will",
    author: "Augustine",
    source: "De Libero Arbitrio"
  },
  "09-07": {
    quote: "Locus classicus",
    translation: "The classic passage — the authoritative source",
    author: "Academic",
    source: "Traditional"
  },
  "09-08": {
    quote: "Neque semper arcum tendit Apollo",
    translation: "Apollo does not always keep his bow strung",
    author: "Horace",
    source: "Odes II.10.19-20"
  },
  "09-09": {
    quote: "Lux et veritas",
    translation: "Light and truth",
    author: "Traditional",
    source: "Yale University Motto"
  },
  "09-10": {
    quote: "Magistra vitae",
    translation: "Teacher of life",
    author: "Cicero",
    source: "De Oratore II.9.36, on History"
  },
  "09-11": {
    quote: "Magna est veritas et praevalebit",
    translation: "Great is truth and it will prevail",
    author: "Vulgate",
    source: "3 Esdras 4:41"
  },
  "09-12": {
    quote: "Magnum opus",
    translation: "Great work — masterpiece",
    author: "Alchemical",
    source: "Traditional"
  },
  "09-13": {
    quote: "Mali principii malus finis",
    translation: "A bad beginning makes a bad ending",
    author: "Traditional",
    source: "Latin Proverb"
  },
  "09-14": {
    quote: "Manus manum lavat",
    translation: "One hand washes the other",
    author: "Seneca",
    source: "Apocolocyntosis 9"
  },
  "09-15": {
    quote: "Mare nostrum",
    translation: "Our sea — the Mediterranean",
    author: "Roman Empire",
    source: "Traditional"
  },
  "09-16": {
    quote: "Materiam superabat opus",
    translation: "The workmanship surpassed the material",
    author: "Ovid",
    source: "Metamorphoses II.5"
  },
  "09-17": {
    quote: "Maxima debetur puero reverentia",
    translation: "The greatest reverence is owed to a child",
    author: "Juvenal",
    source: "Satires XIV.47"
  },
  "09-18": {
    quote: "Mea culpa, mea maxima culpa",
    translation: "My fault, my most grievous fault",
    author: "Liturgical",
    source: "Confiteor"
  },
  "09-19": {
    quote: "Medice, cura te ipsum",
    translation: "Physician, heal thyself",
    author: "Vulgate",
    source: "Luke 4:23"
  },
  "09-20": {
    quote: "Memento vivere",
    translation: "Remember to live",
    author: "Traditional",
    source: "Counter to Memento Mori"
  },
  "09-21": {
    quote: "Melior est canis vivus leone mortuo",
    translation: "A living dog is better than a dead lion",
    author: "Vulgate",
    source: "Ecclesiastes 9:4"
  },
  "09-22": {
    quote: "Aequinoctium",
    translation: "Equal night — the equinox",
    author: "Traditional",
    source: "Autumn Equinox"
  },
  "09-23": {
    quote: "Modus vivendi",
    translation: "Way of living — practical compromise",
    author: "Traditional",
    source: "Diplomatic Term"
  },
  "09-24": {
    quote: "Mortui vivos docent",
    translation: "The dead teach the living",
    author: "Traditional",
    source: "Anatomical Motto"
  },
  "09-25": {
    quote: "Multum in parvo",
    translation: "Much in little",
    author: "Traditional",
    source: "Latin Motto"
  },
  "09-26": {
    quote: "Mundus vult decipi, ergo decipiatur",
    translation: "The world wants to be deceived, so let it be deceived",
    author: "Traditional",
    source: "Medieval Proverb"
  },
  "09-27": {
    quote: "Nascentes morimur, finisque ab origine pendet",
    translation: "Being born we die, and the end hangs from the beginning",
    author: "Manilius",
    source: "Astronomica IV.16"
  },
  "09-28": {
    quote: "Natura abhorret vacuum",
    translation: "Nature abhors a vacuum",
    author: "Aristotle",
    source: "Physics IV.8"
  },
  "09-29": {
    quote: "Navigare necesse est",
    translation: "To sail is necessary",
    author: "Pompey",
    source: "Plutarch, Life of Pompey"
  },
  "09-30": {
    quote: "Ne plus ultra",
    translation: "Nothing further beyond — the ultimate",
    author: "Traditional",
    source: "Pillars of Hercules"
  },

  // OCTOBER
  "10-01": {
    quote: "October venit, folia cadunt",
    translation: "October comes, the leaves fall",
    author: "Traditional",
    source: "Seasonal"
  },
  "10-02": {
    quote: "Nemo iudex in causa sua",
    translation: "No one should be judge in their own case",
    author: "Traditional",
    source: "Legal Maxim"
  },
  "10-03": {
    quote: "Nemo sine vitio est",
    translation: "No one is without fault",
    author: "Seneca",
    source: "De Ira I.14.2"
  },
  "10-04": {
    quote: "Pax intrantibus, salus exeuntibus",
    translation: "Peace to those who enter, health to those who depart",
    author: "Traditional",
    source: "Monastery Inscription"
  },
  "10-05": {
    quote: "Nil sine numine",
    translation: "Nothing without the divine will",
    author: "Virgil",
    source: "Aeneid II.777 — Colorado Motto"
  },
  "10-06": {
    quote: "Noli me tangere",
    translation: "Touch me not",
    author: "Vulgate",
    source: "John 20:17"
  },
  "10-07": {
    quote: "Nomen est omen",
    translation: "The name is a sign — a prophetic name",
    author: "Plautus",
    source: "Persa IV.4.73"
  },
  "10-08": {
    quote: "Non amo te, Sabidi, nec possum dicere quare",
    translation: "I do not love you, Sabidius, nor can I say why",
    author: "Martial",
    source: "Epigrams I.32"
  },
  "10-09": {
    quote: "Caelum non animum mutant qui trans mare currunt",
    translation: "Those who run across the sea change the sky, not their soul",
    author: "Horace",
    source: "Epistles I.11.27"
  },
  "10-10": {
    quote: "Non ducor, duco",
    translation: "I am not led, I lead",
    author: "Traditional",
    source: "São Paulo Motto"
  },
  "10-11": {
    quote: "Non licet omnibus adire Corinthum",
    translation: "Not everyone can go to Corinth",
    author: "Horace",
    source: "Epistles I.17.36"
  },
  "10-12": {
    quote: "Non mihi, non tibi, sed nobis",
    translation: "Not for me, not for you, but for us",
    author: "Traditional",
    source: "Latin Motto"
  },
  "10-13": {
    quote: "Non multa, sed multum",
    translation: "Not many things, but much — quality over quantity",
    author: "Pliny the Younger",
    source: "Letters VII.9.15"
  },
  "10-14": {
    quote: "Non nobis solum nati sumus",
    translation: "We are not born for ourselves alone",
    author: "Cicero",
    source: "De Officiis I.22"
  },
  "10-15": {
    quote: "Non omnis moriar",
    translation: "I shall not wholly die",
    author: "Horace",
    source: "Odes III.30.6"
  },
  "10-16": {
    quote: "Non progredi est regredi",
    translation: "Not to advance is to go backward",
    author: "Traditional",
    source: "Latin Motto"
  },
  "10-17": {
    quote: "Non serviam",
    translation: "I will not serve",
    author: "Vulgate",
    source: "Jeremiah 2:20"
  },
  "10-18": {
    quote: "Nunc scio quid sit amor",
    translation: "Now I know what love is",
    author: "Virgil",
    source: "Eclogues VIII.43"
  },
  "10-19": {
    quote: "Novus ordo seclorum",
    translation: "A new order of the ages",
    author: "Virgil",
    source: "Eclogues IV — US Great Seal"
  },
  "10-20": {
    quote: "Nulla poena sine lege",
    translation: "No punishment without law",
    author: "Traditional",
    source: "Legal Principle"
  },
  "10-21": {
    quote: "Nullius in verba",
    translation: "On the word of no one — take nobody's word for it",
    author: "Horace",
    source: "Epistles I.1.14 — Royal Society Motto"
  },
  "10-22": {
    quote: "Nunc aut numquam",
    translation: "Now or never",
    author: "Traditional",
    source: "Latin Motto"
  },
  "10-23": {
    quote: "Nunc dimittis servum tuum, Domine",
    translation: "Now you dismiss your servant, Lord",
    author: "Vulgate",
    source: "Luke 2:29"
  },
  "10-24": {
    quote: "Nunc est bibendum, nunc pede libero pulsanda tellus",
    translation: "Now is the time to drink, now to beat the earth with free foot",
    author: "Horace",
    source: "Odes I.37.1-2"
  },
  "10-25": {
    quote: "O sancta simplicitas!",
    translation: "O holy simplicity!",
    author: "Jan Hus",
    source: "Last Words, 1415"
  },
  "10-26": {
    quote: "Oderint dum metuant",
    translation: "Let them hate, so long as they fear",
    author: "Accius",
    source: "Atreus (Caligula's favorite)"
  },
  "10-27": {
    quote: "Omne ignotum pro magnifico",
    translation: "Everything unknown is taken as magnificent",
    author: "Tacitus",
    source: "Agricola 30"
  },
  "10-28": {
    quote: "Omne vivum ex vivo",
    translation: "All life is from life",
    author: "Traditional",
    source: "Biological Principle"
  },
  "10-29": {
    quote: "Omnia mea mecum porto",
    translation: "I carry all my things with me",
    author: "Bias of Priene",
    source: "Via Cicero, Paradoxa I.1.8"
  },
  "10-30": {
    quote: "Quidquid luce fuit, tenebris agit",
    translation: "Whatever was done in the light, is acted out in darkness",
    author: "Seneca",
    source: "Epistulae Morales"
  },
  "10-31": {
    quote: "Omnia mors aequat",
    translation: "Death makes all things equal",
    author: "Claudian",
    source: "De Raptu Proserpinae II.302"
  },

  // NOVEMBER
  "11-01": {
    quote: "Omnium sanctorum — requiescant in pace",
    translation: "Of all saints — may they rest in peace",
    author: "Liturgical",
    source: "All Saints Day"
  },
  "11-02": {
    quote: "Dies irae, dies illa",
    translation: "That day, the day of wrath",
    author: "Thomas of Celano",
    source: "Requiem Mass — All Souls Day"
  },
  "11-03": {
    quote: "Ora et labora",
    translation: "Pray and work",
    author: "St. Benedict",
    source: "Benedictine Rule"
  },
  "11-04": {
    quote: "Orbis non sufficit",
    translation: "The world is not enough",
    author: "Traditional",
    source: "Bond Family Motto"
  },
  "11-05": {
    quote: "Memento, memento — pulvis et umbra sumus",
    translation: "Remember, remember — we are dust and shadow",
    author: "Horace",
    source: "Odes IV.7.16"
  },
  "11-06": {
    quote: "Pace tua",
    translation: "With your peace — by your leave",
    author: "Traditional",
    source: "Polite Expression"
  },
  "11-07": {
    quote: "Panem nostrum quotidianum da nobis hodie",
    translation: "Give us this day our daily bread",
    author: "Vulgate",
    source: "Matthew 6:11"
  },
  "11-08": {
    quote: "Panta rhei",
    translation: "Everything flows",
    author: "Heraclitus",
    source: "Via Latin"
  },
  "11-09": {
    quote: "Murus aheneus esto",
    translation: "Be a wall of bronze",
    author: "Horace",
    source: "Epistles I.1.60"
  },
  "11-10": {
    quote: "Passim",
    translation: "Here and there — scattered throughout",
    author: "Academic",
    source: "Citation Term"
  },
  "11-11": {
    quote: "Dulce et decorum est",
    translation: "It is sweet and fitting — for Remembrance",
    author: "Horace",
    source: "Odes III.2.13"
  },
  "11-12": {
    quote: "Pax vobiscum",
    translation: "Peace be with you",
    author: "Vulgate",
    source: "Luke 24:36"
  },
  "11-13": {
    quote: "Per angusta ad augusta",
    translation: "Through difficulties to honors",
    author: "Traditional",
    source: "Latin Motto"
  },
  "11-14": {
    quote: "Peccare licet nemini",
    translation: "No one is permitted to sin",
    author: "Cicero",
    source: "Tusculan Disputations"
  },
  "11-15": {
    quote: "Piscem natare doces",
    translation: "You are teaching a fish to swim",
    author: "Traditional",
    source: "Roman Proverb"
  },
  "11-16": {
    quote: "Plaudite, cives",
    translation: "Applaud, citizens",
    author: "Traditional",
    source: "Roman Comedy"
  },
  "11-17": {
    quote: "Per fas et nefas",
    translation: "Through right and wrong — by any means",
    author: "Livy",
    source: "Ab Urbe Condita"
  },
  "11-18": {
    quote: "Poeta nascitur, non fit",
    translation: "A poet is born, not made",
    author: "Traditional",
    source: "Ancient Saying"
  },
  "11-19": {
    quote: "Persona non grata",
    translation: "An unwelcome person",
    author: "Diplomatic",
    source: "Traditional"
  },
  "11-20": {
    quote: "Pollice verso",
    translation: "With turned thumb — thumbs down",
    author: "Juvenal",
    source: "Satires III.36"
  },
  "11-21": {
    quote: "Praemonitus, praemunitus",
    translation: "Forewarned is forearmed",
    author: "Traditional",
    source: "Latin Proverb"
  },
  "11-22": {
    quote: "Pluralitas non est ponenda sine necessitate",
    translation: "Plurality should not be posited without necessity",
    author: "William of Ockham",
    source: "Ockham's Razor"
  },
  "11-23": {
    quote: "Plus ultra",
    translation: "Further beyond — more beyond",
    author: "Charles V",
    source: "Spanish Imperial Motto"
  },
  "11-24": {
    quote: "Dum loquor, hora fugit",
    translation: "While I speak, the hour flies",
    author: "Ovid",
    source: "Amores I.11.15"
  },
  "11-25": {
    quote: "Gratias agimus tibi",
    translation: "We give thanks to you",
    author: "Liturgical",
    source: "Mass"
  },
  "11-26": {
    quote: "Post hoc, ergo propter hoc",
    translation: "After this, therefore because of this",
    author: "Traditional",
    source: "Logical Fallacy"
  },
  "11-27": {
    quote: "Prudens quaestio dimidium scientiae",
    translation: "A prudent question is half of knowledge",
    author: "Francis Bacon",
    source: "De Augmentis Scientiarum"
  },
  "11-28": {
    quote: "Primum non nocere",
    translation: "First, do no harm",
    author: "Hippocratic",
    source: "Medical Ethics"
  },
  "11-29": {
    quote: "Principiis obsta; sero medicina paratur",
    translation: "Resist the beginnings; too late is the remedy prepared",
    author: "Ovid",
    source: "Remedia Amoris 91"
  },
  "11-30": {
    quote: "Finis Novembris — hiems venit",
    translation: "End of November — winter comes",
    author: "Traditional",
    source: "Seasonal"
  },

  // DECEMBER
  "12-01": {
    quote: "Adventus Domini",
    translation: "The coming of the Lord",
    author: "Liturgical",
    source: "Advent Season"
  },
  "12-02": {
    quote: "Pro patria mori",
    translation: "To die for one's country",
    author: "Horace",
    source: "Odes III.2.13"
  },
  "12-03": {
    quote: "Proximus sum egomet mihi",
    translation: "I am closest to myself",
    author: "Terence",
    source: "Andria IV.1.12"
  },
  "12-04": {
    quote: "Pro tempore",
    translation: "For the time being",
    author: "Traditional",
    source: "Temporary"
  },
  "12-05": {
    quote: "Puer natus est nobis",
    translation: "A child is born to us",
    author: "Vulgate",
    source: "Isaiah 9:6"
  },
  "12-06": {
    quote: "Qui rogat, non errat",
    translation: "He who asks does not err",
    author: "Traditional",
    source: "Latin Proverb"
  },
  "12-07": {
    quote: "Pulvis et umbra sumus",
    translation: "We are dust and shadow",
    author: "Horace",
    source: "Odes IV.7.16"
  },
  "12-08": {
    quote: "Quaere verum",
    translation: "Seek the truth",
    author: "Traditional",
    source: "Latin Motto"
  },
  "12-09": {
    quote: "Qualis artifex pereo",
    translation: "What an artist dies in me!",
    author: "Nero",
    source: "Suetonius, Last Words"
  },
  "12-10": {
    quote: "Quid leges sine moribus vanae proficiunt?",
    translation: "What do vain laws accomplish without morals?",
    author: "Horace",
    source: "Odes III.24.35-36"
  },
  "12-11": {
    quote: "Quantum satis",
    translation: "As much as is sufficient",
    author: "Medical",
    source: "Prescription Term"
  },
  "12-12": {
    quote: "Quem di diligunt adulescens moritur",
    translation: "Whom the gods love dies young",
    author: "Plautus",
    source: "Bacchides IV.7"
  },
  "12-13": {
    quote: "Qui desiderat pacem, praeparet bellum",
    translation: "Who desires peace, let him prepare for war",
    author: "Vegetius",
    source: "De Re Militari III"
  },
  "12-14": {
    quote: "Qui tacet consentire videtur",
    translation: "Who is silent seems to consent",
    author: "Boniface VIII",
    source: "Liber Sextus V.12"
  },
  "12-15": {
    quote: "Quid non mortalia pectora cogis, auri sacra fames?",
    translation: "To what do you not drive mortal hearts, accursed hunger for gold?",
    author: "Virgil",
    source: "Aeneid III.56-57"
  },
  "12-16": {
    quote: "Quid novi ex Africa?",
    translation: "What's new from Africa?",
    author: "Pliny the Elder",
    source: "Natural History VIII.42"
  },
  "12-17": {
    quote: "Io Saturnalia!",
    translation: "Hail to the Saturnalia!",
    author: "Traditional",
    source: "Roman Festival (Dec 17-23)"
  },
  "12-18": {
    quote: "Quieta non movere",
    translation: "Not to disturb what is at rest — let sleeping dogs lie",
    author: "Traditional",
    source: "Conservative Principle"
  },
  "12-19": {
    quote: "Vox clamantis in deserto",
    translation: "A voice crying in the wilderness",
    author: "Vulgate",
    source: "Isaiah 40:3"
  },
  "12-20": {
    quote: "Quod licet Iovi, non licet bovi",
    translation: "What is permitted to Jupiter is not permitted to an ox",
    author: "Traditional",
    source: "Latin Proverb"
  },
  "12-21": {
    quote: "Bruma — sol stat",
    translation: "Winter solstice — the sun stands still",
    author: "Traditional",
    source: "Shortest Day"
  },
  "12-22": {
    quote: "Redde Caesari quae sunt Caesaris",
    translation: "Render unto Caesar what is Caesar's",
    author: "Vulgate",
    source: "Matthew 22:21"
  },
  "12-23": {
    quote: "Gaudete in Domino semper",
    translation: "Rejoice in the Lord always",
    author: "Vulgate",
    source: "Philippians 4:4"
  },
  "12-24": {
    quote: "O magnum mysterium et admirabile sacramentum",
    translation: "O great mystery and wondrous sacrament",
    author: "Liturgical",
    source: "Christmas Matins"
  },
  "12-25": {
    quote: "Gloria in altissimis Deo, et in terra pax hominibus bonae voluntatis",
    translation: "Glory to God in the highest, and on earth peace to men of good will",
    author: "Vulgate",
    source: "Luke 2:14"
  },
  "12-26": {
    quote: "Stephanus plenus gratia et fortitudine",
    translation: "Stephen, full of grace and power",
    author: "Vulgate",
    source: "Acts 6:8 — St. Stephen's Day"
  },
  "12-27": {
    quote: "In principio erat Verbum",
    translation: "In the beginning was the Word",
    author: "Vulgate",
    source: "John 1:1"
  },
  "12-28": {
    quote: "Vox infantium — Rachel plorans",
    translation: "The voice of children — Rachel weeping",
    author: "Vulgate",
    source: "Matthew 2:18 — Holy Innocents"
  },
  "12-29": {
    quote: "Requiescat in pace",
    translation: "May he/she rest in peace",
    author: "Traditional",
    source: "Epitaph"
  },
  "12-30": {
    quote: "Res ipsa loquitur",
    translation: "The thing speaks for itself",
    author: "Cicero",
    source: "Pro Milone"
  },
  "12-31": {
    quote: "Finem respice — annus exit, annus intrat",
    translation: "Consider the end — the year departs, a year enters",
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
