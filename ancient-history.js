// Today in Ancient History Database - Classical Greece and Rome
// Format: "MM-DD": [{year: "XXX BCE/CE", event: "Description", category: "type"}]
// British spellings used throughout

const ancientHistoryEvents = {
  // JANUARY
  "01-01": [
    {year: "45 BCE", event: "The Julian Calendar, created by Julius Caesar, officially takes effect", category: "political"},
    {year: "193 CE", event: "Pertinax becomes Roman Emperor after the assassination of Commodus", category: "imperial"},
    {year: "42 BCE", event: "The Roman Senate posthumously deifies Julius Caesar", category: "religious"}
  ],
  "01-02": [
    {year: "69 CE", event: "Vitellius proclaimed Emperor by the German legions", category: "imperial"},
    {year: "366 CE", event: "The Alemanni cross the frozen Rhine, invading the Roman Empire", category: "military"}
  ],
  "01-03": [
    {year: "106 BCE", event: "Birth of Marcus Tullius Cicero, Roman orator and philosopher, in Arpinum", category: "birth"}
  ],
  "01-04": [
    {year: "46 BCE", event: "Battle of Ruspina: Julius Caesar defeats Pompeian forces in Africa", category: "military"}
  ],
  "01-05": [
    {year: "62 CE", event: "Earthquake strikes Pompeii, causing significant damage", category: "disaster"}
  ],
  "01-06": [
    {year: "179 BCE", event: "Death of Perseus, last king of Macedon", category: "death"}
  ],
  "01-07": [
    {year: "49 BCE", event: "The Roman Senate passes the senatus consultum ultimum against Caesar", category: "political"}
  ],
  "01-08": [
    {year: "387 CE", event: "Augustine of Hippo baptised in Milan", category: "religious"}
  ],
  "01-09": [
    {year: "9 CE", event: "Traditional date for the end of Varus's campaigns in Germania", category: "military"}
  ],
  "01-10": [
    {year: "49 BCE", event: "Julius Caesar crosses the Rubicon with his legion, declaring 'Alea iacta est'", category: "military"}
  ],
  "01-11": [
    {year: "29 BCE", event: "Octavian closes the doors of the Temple of Janus, signifying peace", category: "political"}
  ],
  "01-12": [
    {year: "475 CE", event: "Basiliscus usurps the Eastern throne from Zeno", category: "imperial"}
  ],
  "01-13": [
    {year: "86 BCE", event: "Death of Gaius Marius, seven-time consul of Rome", category: "death"}
  ],
  "01-14": [
    {year: "83 CE", event: "Traditional birth date of Emperor Hadrian", category: "birth"}
  ],
  "01-15": [
    {year: "69 CE", event: "Emperor Galba murdered in the Forum; Otho proclaimed Emperor", category: "imperial"}
  ],
  "01-16": [
    {year: "27 BCE", event: "Senate grants Octavian the title 'Augustus', marking the beginning of the Roman Empire", category: "political"}
  ],
  "01-17": [
    {year: "38 BCE", event: "Octavian marries Livia Drusilla", category: "personal"},
    {year: "395 CE", event: "Final division of the Roman Empire into Eastern and Western halves", category: "political"}
  ],
  "01-18": [
    {year: "52 BCE", event: "Clodius killed by Milo's gang on the Appian Way", category: "death"}
  ],
  "01-19": [
    {year: "379 CE", event: "Theodosius becomes co-emperor in the East", category: "imperial"}
  ],
  "01-20": [
    {year: "250 CE", event: "Emperor Decius orders empire-wide sacrifice to Roman gods", category: "religious"}
  ],
  "01-21": [
    {year: "304 CE", event: "Saint Agnes martyred in Rome during Diocletian's persecution", category: "religious"}
  ],
  "01-22": [
    {year: "330 BCE", event: "Alexander begins siege of Persepolis", category: "military"}
  ],
  "01-23": [
    {year: "393 CE", event: "Emperor Theodosius declares Eugenius a usurper", category: "political"}
  ],
  "01-24": [
    {year: "41 CE", event: "Claudius becomes Emperor after the assassination of Caligula by the Praetorian Guard", category: "imperial"},
    {year: "76 CE", event: "Birth of Emperor Hadrian (alternative date)", category: "birth"}
  ],
  "01-25": [
    {year: "750 BCE", event: "Traditional date for the founding of Greek colonies in Sicily", category: "foundation"}
  ],
  "01-26": [
    {year: "447 CE", event: "Earthquake destroys large parts of Constantinople's walls", category: "disaster"}
  ],
  "01-27": [
    {year: "98 CE", event: "Nerva dies; Trajan becomes Roman Emperor, beginning the Antonine dynasty", category: "imperial"}
  ],
  "01-28": [
    {year: "207 BCE", event: "Traditional date of Scipio Africanus's first consulship", category: "political"}
  ],
  "01-29": [
    {year: "456 BCE", event: "Death of Aeschylus, Greek tragedian", category: "death"}
  ],
  "01-30": [
    {year: "58 BCE", event: "Beginning of Caesar's Gallic Wars", category: "military"}
  ],
  "01-31": [
    {year: "314 CE", event: "Pope Silvester I begins papacy under Constantine", category: "religious"}
  ],

  // FEBRUARY
  "02-01": [
    {year: "481 BCE", event: "Traditional date for the establishment of the Delian League", category: "political"}
  ],
  "02-02": [
    {year: "506 BCE", event: "Traditional date of the Battle of Aricia, Rome defeats Lars Porsena", category: "military"}
  ],
  "02-03": [
    {year: "313 CE", event: "Constantine and Licinius meet in Milan, discussing Christian tolerance", category: "religious"}
  ],
  "02-04": [
    {year: "211 CE", event: "Death of Emperor Septimius Severus at York (Eboracum) in Britain", category: "death"}
  ],
  "02-05": [
    {year: "2 BCE", event: "Augustus awarded title 'Pater Patriae' (Father of the Country)", category: "political"}
  ],
  "02-06": [
    {year: "46 BCE", event: "Battle of Thapsus: Caesar defeats Pompeian forces in North Africa", category: "military"}
  ],
  "02-07": [
    {year: "199 BCE", event: "Traditional date for first Roman contact with the Seleucid Empire", category: "political"}
  ],
  "02-08": [
    {year: "421 CE", event: "Death of Constantius III, briefly Western Roman Emperor", category: "death"}
  ],
  "02-09": [
    {year: "474 CE", event: "Zeno becomes sole Eastern Emperor", category: "imperial"}
  ],
  "02-10": [
    {year: "60 BCE", event: "Traditional date for formation of First Triumvirate", category: "political"}
  ],
  "02-11": [
    {year: "55 CE", event: "Death of Britannicus, son of Claudius, possibly poisoned by Nero", category: "death"}
  ],
  "02-12": [
    {year: "41 BCE", event: "The Perusine War ends with Octavian's victory", category: "military"}
  ],
  "02-13": [
    {year: "399 BCE", event: "Traditional date for the trial of Socrates beginning", category: "political"}
  ],
  "02-14": [
    {year: "269 CE", event: "Saint Valentine executed in Rome", category: "religious"},
    {year: "278 BCE", event: "Traditional date for Pyrrhus arriving in Sicily", category: "military"}
  ],
  "02-15": [
    {year: "44 BCE", event: "Festival of Lupercalia where Caesar refused the crown from Antony", category: "political"},
    {year: "399 BCE", event: "Death of Socrates (alternative date)", category: "death"}
  ],
  "02-16": [
    {year: "116 CE", event: "Trajan begins final campaign against Parthia", category: "military"}
  ],
  "02-17": [
    {year: "364 CE", event: "Jovian found dead, Valentinian becomes Emperor", category: "imperial"}
  ],
  "02-18": [
    {year: "218 CE", event: "Caracalla visits Alexandria", category: "political"}
  ],
  "02-19": [
    {year: "197 CE", event: "Battle of Lugdunum: Septimius Severus defeats Clodius Albinus", category: "military"}
  ],
  "02-20": [
    {year: "156 CE", event: "Birth of future Emperor Commodus", category: "birth"}
  ],
  "02-21": [
    {year: "1 BCE", event: "Traditional date for completion of the Ara Pacis", category: "culture"}
  ],
  "02-22": [
    {year: "280 CE", event: "Birthday of Constantine the Great", category: "birth"}
  ],
  "02-23": [
    {year: "303 CE", event: "Diocletian orders destruction of the church at Nicomedia, beginning the Great Persecution", category: "religious"}
  ],
  "02-24": [
    {year: "1 CE", event: "Traditional date for Augustus adopting Tiberius", category: "political"}
  ],
  "02-25": [
    {year: "50 CE", event: "Claudius adopts Nero as his heir", category: "political"}
  ],
  "02-26": [
    {year: "212 CE", event: "Emperor Caracalla murders his brother Geta", category: "imperial"}
  ],
  "02-27": [
    {year: "380 CE", event: "Edict of Thessalonica makes Christianity the state religion of Rome", category: "religious"},
    {year: "272 CE", event: "Birth of Constantine I (alternative date)", category: "birth"}
  ],
  "02-28": [
    {year: "228 BCE", event: "Traditional date for first gladiatorial games in Rome", category: "culture"}
  ],
  "02-29": [
    {year: "45 BCE", event: "First leap day in the Julian Calendar", category: "culture"}
  ],

  // MARCH
  "03-01": [
    {year: "509 BCE", event: "Traditional date for the expulsion of Tarquin and beginning of Roman Republic", category: "political"},
    {year: "293 CE", event: "Diocletian establishes the Tetrarchy", category: "political"}
  ],
  "03-02": [
    {year: "480 BCE", event: "Start of Battle of Artemisium (naval battle alongside Thermopylae)", category: "military"}
  ],
  "03-03": [
    {year: "473 CE", event: "Gundobad becomes patrician and power behind the throne", category: "political"}
  ],
  "03-04": [
    {year: "51 CE", event: "Nero proclaimed princeps iuventutis (prince of youth)", category: "political"}
  ],
  "03-05": [
    {year: "363 CE", event: "Emperor Julian departs Antioch for his Persian campaign", category: "military"}
  ],
  "03-06": [
    {year: "12 BCE", event: "Augustus becomes Pontifex Maximus after death of Lepidus", category: "religious"}
  ],
  "03-07": [
    {year: "161 CE", event: "Death of Antoninus Pius; Marcus Aurelius becomes Emperor", category: "imperial"},
    {year: "322 BCE", event: "Death of Aristotle in Chalcis", category: "death"}
  ],
  "03-08": [
    {year: "702 BCE", event: "Traditional date for start of first Messenian War", category: "military"}
  ],
  "03-09": [
    {year: "141 BCE", event: "Traditional date for first stone theatre attempted in Rome", category: "culture"}
  ],
  "03-10": [
    {year: "241 BCE", event: "Battle of the Aegates: Rome defeats Carthage, ending First Punic War", category: "military"}
  ],
  "03-11": [
    {year: "222 CE", event: "Emperor Elagabalus assassinated by Praetorian Guard", category: "imperial"}
  ],
  "03-12": [
    {year: "515 BCE", event: "Completion of Second Temple in Jerusalem", category: "religious"}
  ],
  "03-13": [
    {year: "483 BCE", event: "Traditional date for death of Gautama Buddha", category: "world"}
  ],
  "03-14": [
    {year: "44 BCE", event: "Caesar attends his last Senate meeting", category: "political"}
  ],
  "03-15": [
    {year: "44 BCE", event: "Assassination of Julius Caesar on the Ides of March", category: "death"},
    {year: "493 BCE", event: "Traditional first celebration of feast of Anna Perenna", category: "religious"}
  ],
  "03-16": [
    {year: "37 CE", event: "Death of Emperor Tiberius at Misenum", category: "death"},
    {year: "455 CE", event: "Petronius Maximus becomes Western Emperor", category: "imperial"}
  ],
  "03-17": [
    {year: "45 BCE", event: "Battle of Munda: Caesar's last victory in the civil war", category: "military"},
    {year: "180 CE", event: "Death of Marcus Aurelius; Commodus becomes Emperor", category: "imperial"}
  ],
  "03-18": [
    {year: "37 CE", event: "Caligula receives imperial powers from the Senate", category: "imperial"},
    {year: "235 CE", event: "Emperor Alexander Severus murdered by troops", category: "death"}
  ],
  "03-19": [
    {year: "8 CE", event: "Traditional date for Ovid's exile to Tomis", category: "culture"}
  ],
  "03-20": [
    {year: "43 BCE", event: "Battle of Forum Gallorum in the War of Mutina", category: "military"}
  ],
  "03-21": [
    {year: "753 BCE", event: "Traditional founding date of Rome (alternative to April 21)", category: "foundation"}
  ],
  "03-22": [
    {year: "238 CE", event: "Gordian I and II proclaimed Emperors in Africa", category: "imperial"}
  ],
  "03-23": [
    {year: "59 BCE", event: "Caesar's consulship: land bill for Pompey's veterans", category: "political"}
  ],
  "03-24": [
    {year: "809 BCE", event: "Traditional date for lunar eclipse recorded in China", category: "world"}
  ],
  "03-25": [
    {year: "31 CE", event: "Traditional date for Sejanus becoming co-consul with Tiberius", category: "political"}
  ],
  "03-26": [
    {year: "4 BCE", event: "Traditional date for solar eclipse before Herod's death", category: "natural"}
  ],
  "03-27": [
    {year: "47 BCE", event: "Caesar departs Alexandria after installing Cleopatra", category: "political"}
  ],
  "03-28": [
    {year: "193 CE", event: "Didius Julianus buys the Roman Empire at auction from Praetorian Guard", category: "imperial"},
    {year: "37 CE", event: "Caligula enters Rome as Emperor", category: "imperial"}
  ],
  "03-29": [
    {year: "87 BCE", event: "Beginning of siege of Athens by Sulla", category: "military"}
  ],
  "03-30": [
    {year: "12 CE", event: "Birth of Emperor Caligula", category: "birth"}
  ],
  "03-31": [
    {year: "192 CE", event: "Murder of Emperor Commodus (alternative date)", category: "imperial"}
  ],

  // APRIL
  "04-01": [
    {year: "286 CE", event: "Diocletian makes Maximian co-emperor", category: "imperial"}
  ],
  "04-02": [
    {year: "186 BCE", event: "Traditional date for suppression of Bacchanalia in Rome", category: "religious"}
  ],
  "04-03": [
    {year: "33 CE", event: "Traditional date for the Crucifixion", category: "religious"}
  ],
  "04-04": [
    {year: "397 CE", event: "Death of Saint Ambrose in Milan", category: "religious"}
  ],
  "04-05": [
    {year: "456 BCE", event: "Traditional date for completion of Temple of Zeus at Olympia", category: "culture"}
  ],
  "04-06": [
    {year: "46 BCE", event: "Caesar defeats Pompeian forces at Battle of Thapsus", category: "military"},
    {year: "402 CE", event: "Battle of Pollentia: Stilicho defeats Alaric", category: "military"}
  ],
  "04-07": [
    {year: "30 CE", event: "Traditional date for Christ's resurrection", category: "religious"},
    {year: "451 CE", event: "Attila invades Gaul", category: "military"}
  ],
  "04-08": [
    {year: "217 CE", event: "Caracalla assassinated; Macrinus becomes Emperor", category: "imperial"}
  ],
  "04-09": [
    {year: "193 CE", event: "Septimius Severus defeats Pescennius Niger near Cyzicus", category: "military"}
  ],
  "04-10": [
    {year: "428 BCE", event: "Birth of Plato (traditional date)", category: "birth"}
  ],
  "04-11": [
    {year: "146 BCE", event: "Traditional date for Mummius entering Corinth", category: "military"}
  ],
  "04-12": [
    {year: "204 BCE", event: "Magna Mater (Cybele) arrives in Rome from Asia Minor", category: "religious"},
    {year: "65 CE", event: "Death of Seneca the Younger, forced to commit suicide by Nero", category: "death"}
  ],
  "04-13": [
    {year: "30 BCE", event: "Traditional date for Cleopatra's arrival in Rome", category: "political"}
  ],
  "04-14": [
    {year: "69 CE", event: "First Battle of Bedriacum: Otho defeated by Vitellius", category: "military"},
    {year: "216 BCE", event: "Traditional date for Hannibal receiving reinforcements", category: "military"}
  ],
  "04-15": [
    {year: "73 BCE", event: "Beginning of Third Servile War under Spartacus", category: "military"}
  ],
  "04-16": [
    {year: "69 CE", event: "Otho commits suicide; Vitellius becomes Emperor", category: "imperial"}
  ],
  "04-17": [
    {year: "485 BCE", event: "Birth of Protagoras, Greek philosopher", category: "birth"}
  ],
  "04-18": [
    {year: "359 CE", event: "Death of Emperor Constantius II's wife Eusebia", category: "death"}
  ],
  "04-19": [
    {year: "244 CE", event: "Philip the Arab becomes Emperor", category: "imperial"}
  ],
  "04-20": [
    {year: "121 CE", event: "Birth of Marcus Aurelius", category: "birth"}
  ],
  "04-21": [
    {year: "753 BCE", event: "Traditional founding of Rome by Romulus", category: "foundation"},
    {year: "248 CE", event: "Rome celebrates its 1,000th anniversary with grand games", category: "culture"}
  ],
  "04-22": [
    {year: "404 BCE", event: "Fall of Athens to Sparta, ending Peloponnesian War", category: "military"}
  ],
  "04-23": [
    {year: "215 BCE", event: "Temple of Venus Erycina dedicated on the Capitoline", category: "religious"}
  ],
  "04-24": [
    {year: "858 BCE", event: "Traditional date for founding of Carthage", category: "foundation"}
  ],
  "04-25": [
    {year: "32 BCE", event: "Mark Antony celebrates (illegal) triumph in Alexandria", category: "political"}
  ],
  "04-26": [
    {year: "121 CE", event: "Birthday of Emperor Marcus Aurelius (alternative date)", category: "birth"}
  ],
  "04-27": [
    {year: "395 CE", event: "Death of Emperor Theodosius III in Milan", category: "death"}
  ],
  "04-28": [
    {year: "32 CE", event: "Birth of Emperor Otho", category: "birth"}
  ],
  "04-29": [
    {year: "375 CE", event: "Emperor Valentinian I suffers stroke while shouting at German envoys", category: "death"}
  ],
  "04-30": [
    {year: "313 CE", event: "Battle of Tzirallum: Licinius defeats Maximinus Daia", category: "military"},
    {year: "65 CE", event: "Piso's conspiracy against Nero discovered", category: "political"}
  ],

  // MAY
  "05-01": [
    {year: "305 CE", event: "Diocletian and Maximian abdicate; beginning of Tetrarchy crisis", category: "imperial"}
  ],
  "05-02": [
    {year: "373 BCE", event: "Traditional date for Third Sacred War beginning", category: "military"}
  ],
  "05-03": [
    {year: "113 CE", event: "Trajan sets out from Rome for Parthian campaign", category: "military"}
  ],
  "05-04": [
    {year: "254 CE", event: "Traditional date for Saint Florian's martyrdom", category: "religious"}
  ],
  "05-05": [
    {year: "553 BCE", event: "Cyrus the Great enters Ecbatana", category: "world"}
  ],
  "05-06": [
    {year: "589 BCE", event: "Traditional date for fall of Jerusalem to Nebuchadnezzar", category: "world"}
  ],
  "05-07": [
    {year: "351 CE", event: "Jewish revolt against Gallus Caesar begins", category: "military"}
  ],
  "05-08": [
    {year: "413 CE", event: "Emperor Honorius signs edict against Donatists", category: "religious"}
  ],
  "05-09": [
    {year: "328 BCE", event: "Traditional date for Alexander crossing into Asia", category: "military"}
  ],
  "05-10": [
    {year: "70 CE", event: "Beginning of siege of Jerusalem by Titus", category: "military"}
  ],
  "05-11": [
    {year: "330 CE", event: "Constantinople officially founded as 'New Rome'", category: "foundation"},
    {year: "48 BCE", event: "Caesar lands in Thessaly before Dyrrhachium", category: "military"}
  ],
  "05-12": [
    {year: "304 BCE", event: "Traditional date for Epicurus founding his school", category: "culture"}
  ],
  "05-13": [
    {year: "221 BCE", event: "Hannibal becomes commander of Carthaginian forces in Iberia", category: "military"}
  ],
  "05-14": [
    {year: "421 BCE", event: "Peace of Nicias signed between Athens and Sparta", category: "political"}
  ],
  "05-15": [
    {year: "392 CE", event: "Death of Valentinian II (murder or suicide)", category: "death"},
    {year: "221 BCE", event: "Traditional date for Cleomenes III becoming King of Sparta", category: "political"}
  ],
  "05-16": [
    {year: "218 CE", event: "Julia Maesa has Elagabalus proclaimed Emperor", category: "imperial"}
  ],
  "05-17": [
    {year: "352 BCE", event: "Traditional date for siege of Methone beginning", category: "military"}
  ],
  "05-18": [
    {year: "332 CE", event: "Constantine announces free distributions of food in Constantinople", category: "political"}
  ],
  "05-19": [
    {year: "715 BCE", event: "Traditional date for first recorded eclipse in Mesopotamia", category: "world"}
  ],
  "05-20": [
    {year: "325 CE", event: "First Council of Nicaea convenes", category: "religious"},
    {year: "526 BCE", event: "Traditional date for death of Pisistratus of Athens", category: "death"}
  ],
  "05-21": [
    {year: "427 BCE", event: "Birth of Plato (alternative date)", category: "birth"}
  ],
  "05-22": [
    {year: "337 CE", event: "Death of Constantine the Great near Nicomedia", category: "death"}
  ],
  "05-23": [
    {year: "498 BCE", event: "Traditional date for Battle of Lake Regillus", category: "military"}
  ],
  "05-24": [
    {year: "15 BCE", event: "Birth of Germanicus", category: "birth"}
  ],
  "05-25": [
    {year: "735 BCE", event: "Traditional date for first eclipse recorded by Babylonians", category: "world"}
  ],
  "05-26": [
    {year: "17 CE", event: "Germanicus celebrates triumph over Germans and Cherusci", category: "military"},
    {year: "451 CE", event: "Traditional date for start of Attila's invasion of Gaul", category: "military"}
  ],
  "05-27": [
    {year: "366 CE", event: "Procopius revolts against Valens", category: "political"}
  ],
  "05-28": [
    {year: "585 BCE", event: "Traditional date for solar eclipse predicted by Thales", category: "natural"}
  ],
  "05-29": [
    {year: "363 CE", event: "Julian defeats Persians at Battle of Ctesiphon", category: "military"}
  ],
  "05-30": [
    {year: "1431 CE", event: "Traditional date for first celebration of Lemuria", category: "religious"}
  ],
  "05-31": [
    {year: "455 CE", event: "Petronius Maximus killed; Vandals begin sacking Rome", category: "disaster"}
  ],

  // JUNE
  "06-01": [
    {year: "193 CE", event: "Didius Julianus murdered; Septimius Severus recognised as Emperor", category: "imperial"},
    {year: "218 BCE", event: "Traditional start of Second Punic War", category: "military"}
  ],
  "06-02": [
    {year: "455 CE", event: "Vandals begin 14-day sack of Rome", category: "disaster"}
  ],
  "06-03": [
    {year: "350 CE", event: "Nepotianus proclaims himself Emperor in Rome", category: "imperial"}
  ],
  "06-04": [
    {year: "470 BCE", event: "Birth of Socrates in Athens", category: "birth"}
  ],
  "06-05": [
    {year: "70 CE", event: "Titus breaks through second wall of Jerusalem", category: "military"}
  ],
  "06-06": [
    {year: "218 BCE", event: "Traditional date for Hannibal leaving New Carthage", category: "military"}
  ],
  "06-07": [
    {year: "421 BCE", event: "Traditional date for Battle of Amphipolis", category: "military"}
  ],
  "06-08": [
    {year: "68 CE", event: "Senate recognises Galba as Emperor while Nero still lives", category: "political"},
    {year: "218 CE", event: "Battle of Antioch: Elagabalus defeats Macrinus", category: "military"}
  ],
  "06-09": [
    {year: "68 CE", event: "Nero commits suicide, ending Julio-Claudian dynasty", category: "imperial"},
    {year: "373 BCE", event: "Battle of Leuctra preparations begin", category: "military"}
  ],
  "06-10": [
    {year: "323 BCE", event: "Death of Alexander the Great in Babylon (aged 32)", category: "death"}
  ],
  "06-11": [
    {year: "1184 BCE", event: "Traditional date for fall of Troy (calculated by Eratosthenes)", category: "mythology"}
  ],
  "06-12": [
    {year: "816 BCE", event: "Traditional date for first Olympic games (alternative)", category: "culture"}
  ],
  "06-13": [
    {year: "323 BCE", event: "Death of Alexander (alternative date)", category: "death"},
    {year: "40 CE", event: "Birth of Gnaeus Julius Agricola", category: "birth"}
  ],
  "06-14": [
    {year: "48 BCE", event: "Caesar crosses to Epirus, beginning Dyrrhachium campaign", category: "military"}
  ],
  "06-15": [
    {year: "763 BCE", event: "Assyrians record solar eclipse", category: "world"}
  ],
  "06-16": [
    {year: "455 CE", event: "End of Vandal sack of Rome", category: "disaster"},
    {year: "363 CE", event: "Julian mortally wounded in battle against Persians", category: "military"}
  ],
  "06-17": [
    {year: "362 CE", event: "Julian orders pagan temples reopened", category: "religious"}
  ],
  "06-18": [
    {year: "323 CE", event: "Constantine defeats Licinius at Battle of Adrianople", category: "military"}
  ],
  "06-19": [
    {year: "325 CE", event: "Nicene Creed formally adopted", category: "religious"}
  ],
  "06-20": [
    {year: "451 CE", event: "Battle of Chalons: Aetius defeats Attila the Hun", category: "military"}
  ],
  "06-21": [
    {year: "217 BCE", event: "Battle of Lake Trasimene: Hannibal destroys Roman army", category: "military"}
  ],
  "06-22": [
    {year: "168 BCE", event: "Battle of Pydna: Rome defeats Perseus of Macedon", category: "military"}
  ],
  "06-23": [
    {year: "47 BCE", event: "Birth of Caesarion (alleged son of Caesar and Cleopatra)", category: "birth"},
    {year: "79 CE", event: "Death of Emperor Vespasian", category: "death"}
  ],
  "06-24": [
    {year: "109 CE", event: "Traditional date for opening of Aqua Traiana aqueduct", category: "culture"}
  ],
  "06-25": [
    {year: "524 BCE", event: "Battle of Cumae: Greeks defeat Etruscans", category: "military"}
  ],
  "06-26": [
    {year: "363 CE", event: "Death of Emperor Julian ('the Apostate') from battle wounds", category: "death"},
    {year: "4 CE", event: "Augustus adopts Tiberius", category: "political"}
  ],
  "06-27": [
    {year: "363 CE", event: "Jovian proclaimed Emperor by Roman army in Persia", category: "imperial"}
  ],
  "06-28": [
    {year: "346 BCE", event: "Philip II of Macedon reorganises the Amphictyonic Council", category: "political"}
  ],
  "06-29": [
    {year: "65 CE", event: "Feast of Saints Peter and Paul (traditional martyrdom date)", category: "religious"}
  ],
  "06-30": [
    {year: "350 CE", event: "Nepotianus killed after 28-day reign", category: "imperial"}
  ],

  // JULY
  "07-01": [
    {year: "69 CE", event: "Tiberius Julius Alexander orders legions to swear allegiance to Vespasian", category: "political"},
    {year: "23 BCE", event: "Augustus receives tribunicia potestas for life", category: "political"}
  ],
  "07-02": [
    {year: "419 BCE", event: "Traditional date for Battle of Veii beginning", category: "military"}
  ],
  "07-03": [
    {year: "324 CE", event: "Battle of Adrianople: Constantine defeats Licinius", category: "military"}
  ],
  "07-04": [
    {year: "362 CE", event: "Emperor Julian enters Antioch", category: "political"}
  ],
  "07-05": [
    {year: "328 CE", event: "Traditional date for foundation of Circus Maximus renovation", category: "culture"}
  ],
  "07-06": [
    {year: "371 BCE", event: "Battle of Leuctra: Thebes defeats Sparta", category: "military"}
  ],
  "07-07": [
    {year: "455 BCE", event: "Traditional date for completion of Long Walls of Athens", category: "culture"}
  ],
  "07-08": [
    {year: "117 CE", event: "Death of Emperor Trajan in Selinus", category: "death"}
  ],
  "07-09": [
    {year: "455 CE", event: "Avitus proclaimed Western Roman Emperor", category: "imperial"}
  ],
  "07-10": [
    {year: "48 BCE", event: "Battle of Dyrrhachium: Pompey defeats Caesar", category: "military"},
    {year: "138 CE", event: "Death of Emperor Hadrian at Baiae", category: "death"}
  ],
  "07-11": [
    {year: "472 CE", event: "Anthemius killed; Olybrius becomes Western Emperor", category: "imperial"}
  ],
  "07-12": [
    {year: "100 BCE", event: "Birth of Julius Caesar", category: "birth"}
  ],
  "07-13": [
    {year: "586 BCE", event: "Traditional date for siege of Jerusalem by Nebuchadnezzar", category: "world"}
  ],
  "07-14": [
    {year: "362 BCE", event: "Battle of Mantinea: death of Epaminondas", category: "military"}
  ],
  "07-15": [
    {year: "435 BCE", event: "Traditional date for Pericles becoming strategos", category: "political"}
  ],
  "07-16": [
    {year: "390 BCE", event: "Battle of the Allia: Gauls defeat Romans", category: "military"}
  ],
  "07-17": [
    {year: "431 BCE", event: "Traditional date for first year of Peloponnesian War", category: "military"}
  ],
  "07-18": [
    {year: "390 BCE", event: "Brennus and the Gauls sack Rome ('Vae victis')", category: "disaster"},
    {year: "64 CE", event: "Great Fire of Rome begins", category: "disaster"}
  ],
  "07-19": [
    {year: "64 CE", event: "Great Fire of Rome continues to rage", category: "disaster"}
  ],
  "07-20": [
    {year: "356 BCE", event: "Birth of Alexander the Great in Pella", category: "birth"}
  ],
  "07-21": [
    {year: "365 CE", event: "Massive earthquake and tsunami devastate Alexandria", category: "disaster"}
  ],
  "07-22": [
    {year: "209 BCE", event: "Traditional date for Scipio capturing New Carthage", category: "military"}
  ],
  "07-23": [
    {year: "450 BCE", event: "Traditional date for Laws of Twelve Tables displayed", category: "political"}
  ],
  "07-24": [
    {year: "216 CE", event: "Traditional date for Caracalla visiting Germania", category: "political"}
  ],
  "07-25": [
    {year: "306 CE", event: "Constantine proclaimed Emperor by troops at York", category: "imperial"},
    {year: "315 CE", event: "Arch of Constantine dedicated in Rome", category: "culture"}
  ],
  "07-26": [
    {year: "776 BCE", event: "Traditional date for first Olympic Games at Olympia", category: "culture"}
  ],
  "07-27": [
    {year: "54 BCE", event: "Caesar's second invasion of Britain", category: "military"}
  ],
  "07-28": [
    {year: "450 CE", event: "Death of Emperor Theodosius II in riding accident", category: "death"}
  ],
  "07-29": [
    {year: "238 CE", event: "Praetorian Guard storm palace and kill Balbinus and Pupienus", category: "imperial"}
  ],
  "07-30": [
    {year: "101 BCE", event: "Battle of Vercellae: Marius defeats Cimbri", category: "military"}
  ],
  "07-31": [
    {year: "432 CE", event: "Traditional date for St Patrick arriving in Ireland", category: "religious"}
  ],

  // AUGUST
  "08-01": [
    {year: "30 BCE", event: "Octavian enters Alexandria; Mark Antony commits suicide", category: "death"},
    {year: "10 CE", event: "Birth of Emperor Claudius", category: "birth"}
  ],
  "08-02": [
    {year: "216 BCE", event: "Battle of Cannae: Hannibal's greatest victory over Rome", category: "military"},
    {year: "338 BCE", event: "Battle of Chaeronea: Philip II defeats Athens and Thebes", category: "military"}
  ],
  "08-03": [
    {year: "435 BCE", event: "Traditional date for completion of statue of Zeus at Olympia", category: "culture"}
  ],
  "08-04": [
    {year: "70 CE", event: "Destruction of Second Temple in Jerusalem", category: "disaster"}
  ],
  "08-05": [
    {year: "25 CE", event: "Marriage of Agrippina the Elder to Germanicus", category: "personal"}
  ],
  "08-06": [
    {year: "258 CE", event: "Pope Sixtus II martyred under Valerian's persecution", category: "religious"}
  ],
  "08-07": [
    {year: "317 CE", event: "Traditional date for Constantine's first victory over Licinius", category: "military"}
  ],
  "08-08": [
    {year: "117 CE", event: "Hadrian becomes Roman Emperor after Trajan's death", category: "imperial"}
  ],
  "08-09": [
    {year: "48 BCE", event: "Battle of Pharsalus: Caesar decisively defeats Pompey", category: "military"},
    {year: "378 CE", event: "Battle of Adrianople: Goths destroy Roman army, Emperor Valens killed", category: "military"}
  ],
  "08-10": [
    {year: "30 BCE", event: "Death of Cleopatra VII, last pharaoh of Egypt", category: "death"}
  ],
  "08-11": [
    {year: "480 BCE", event: "Battle of Thermopylae ends with death of Leonidas and 300 Spartans", category: "military"}
  ],
  "08-12": [
    {year: "30 BCE", event: "Death of Cleopatra (alternative date)", category: "death"}
  ],
  "08-13": [
    {year: "29 BCE", event: "Octavian celebrates triple triumph in Rome", category: "political"}
  ],
  "08-14": [
    {year: "352 BCE", event: "Philip II of Macedon captures Methone", category: "military"}
  ],
  "08-15": [
    {year: "423 CE", event: "Death of Emperor Honorius", category: "death"}
  ],
  "08-16": [
    {year: "189 BCE", event: "Traditional date for triumph of Scipio Asiaticus", category: "political"}
  ],
  "08-17": [
    {year: "477 BCE", event: "Traditional date for Battle of the Cremera", category: "military"}
  ],
  "08-18": [
    {year: "31 BCE", event: "Octavian elected consul for second time", category: "political"}
  ],
  "08-19": [
    {year: "14 CE", event: "Death of Augustus, first Roman Emperor", category: "death"},
    {year: "43 BCE", event: "Octavian becomes consul for first time", category: "political"}
  ],
  "08-20": [
    {year: "636 CE", event: "Battle of Yarmouk (Eastern Roman defeat)", category: "military"}
  ],
  "08-21": [
    {year: "146 BCE", event: "Scipio Aemilianus begins final siege of Carthage", category: "military"}
  ],
  "08-22": [
    {year: "408 CE", event: "Stilicho executed on Honorius's orders", category: "death"}
  ],
  "08-23": [
    {year: "476 CE", event: "Odoacer becomes King of Italy, traditional end of Western Roman Empire", category: "political"},
    {year: "79 CE", event: "Mount Vesuvius begins erupting", category: "disaster"}
  ],
  "08-24": [
    {year: "79 CE", event: "Mount Vesuvius destroys Pompeii and Herculaneum", category: "disaster"},
    {year: "410 CE", event: "Visigoths under Alaric begin sack of Rome", category: "disaster"}
  ],
  "08-25": [
    {year: "383 CE", event: "Gratian killed by Andragathius", category: "death"}
  ],
  "08-26": [
    {year: "55 BCE", event: "Julius Caesar's first invasion of Britain", category: "military"}
  ],
  "08-27": [
    {year: "410 CE", event: "End of Visigothic sack of Rome", category: "disaster"}
  ],
  "08-28": [
    {year: "388 CE", event: "Magnus Maximus executed by Theodosius", category: "death"},
    {year: "430 CE", event: "Death of Saint Augustine of Hippo", category: "death"}
  ],
  "08-29": [
    {year: "284 CE", event: "Diocletian proclaimed Emperor, ending Crisis of Third Century", category: "imperial"}
  ],
  "08-30": [
    {year: "12 BCE", event: "Death of Marcus Agrippa", category: "death"}
  ],
  "08-31": [
    {year: "12 CE", event: "Birth of Emperor Caligula (alternative date)", category: "birth"},
    {year: "161 CE", event: "Death of Antoninus Pius (alternative date)", category: "death"}
  ],

  // SEPTEMBER
  "09-01": [
    {year: "5509 BCE", event: "Traditional Byzantine date for creation of the world", category: "mythology"}
  ],
  "09-02": [
    {year: "31 BCE", event: "Battle of Actium: Octavian defeats Antony and Cleopatra", category: "military"},
    {year: "44 BCE", event: "Cicero delivers First Philippic against Mark Antony", category: "political"}
  ],
  "09-03": [
    {year: "36 BCE", event: "Battle of Naulochus: Agrippa defeats Sextus Pompey", category: "military"}
  ],
  "09-04": [
    {year: "476 CE", event: "Romulus Augustulus deposed as Western Emperor", category: "imperial"}
  ],
  "09-05": [
    {year: "394 CE", event: "Battle of the Frigidus: Theodosius defeats Eugenius", category: "military"}
  ],
  "09-06": [
    {year: "394 CE", event: "Death of Arbogast and end of pagan resistance", category: "death"}
  ],
  "09-07": [
    {year: "70 CE", event: "Roman legions burn the Second Temple (alternative date)", category: "disaster"}
  ],
  "09-08": [
    {year: "475 CE", event: "Julius Nepos flees to Dalmatia", category: "imperial"}
  ],
  "09-09": [
    {year: "9 CE", event: "Battle of the Teutoburg Forest: Varus loses three legions to Arminius", category: "military"},
    {year: "337 CE", event: "Constantine II, Constantius II, and Constans become co-emperors", category: "imperial"}
  ],
  "09-10": [
    {year: "422 BCE", event: "Traditional date for start of siege of Plataea", category: "military"}
  ],
  "09-11": [
    {year: "9 CE", event: "Battle of Teutoburg Forest continues", category: "military"}
  ],
  "09-12": [
    {year: "490 BCE", event: "Battle of Marathon: Athens defeats Persian invasion", category: "military"}
  ],
  "09-13": [
    {year: "122 CE", event: "Construction of Hadrian's Wall begins", category: "culture"},
    {year: "81 CE", event: "Death of Emperor Titus", category: "death"}
  ],
  "09-14": [
    {year: "258 CE", event: "Emperor Valerian captured by Persians at Edessa", category: "military"}
  ],
  "09-15": [
    {year: "668 BCE", event: "Traditional date for Byzantium founded", category: "foundation"}
  ],
  "09-16": [
    {year: "307 CE", event: "Constantine marries Fausta, Maximian's daughter", category: "personal"}
  ],
  "09-17": [
    {year: "14 CE", event: "Tiberius becomes Emperor after Augustus's death", category: "imperial"}
  ],
  "09-18": [
    {year: "96 CE", event: "Emperor Domitian assassinated; Nerva becomes Emperor", category: "imperial"},
    {year: "53 CE", event: "Birth of Emperor Trajan", category: "birth"}
  ],
  "09-19": [
    {year: "86 CE", event: "Birth of Antoninus Pius", category: "birth"}
  ],
  "09-20": [
    {year: "356 BCE", event: "Temple of Artemis at Ephesus burned by Herostratus", category: "disaster"}
  ],
  "09-21": [
    {year: "454 CE", event: "Emperor Valentinian III murders Aetius", category: "death"}
  ],
  "09-22": [
    {year: "480 BCE", event: "Battle of Salamis: Greek fleet defeats Persian navy", category: "military"}
  ],
  "09-23": [
    {year: "63 BCE", event: "Birth of Augustus (Gaius Octavius)", category: "birth"}
  ],
  "09-24": [
    {year: "15 CE", event: "Birth of Emperor Vitellius", category: "birth"}
  ],
  "09-25": [
    {year: "275 CE", event: "Emperor Aurelian assassinated", category: "death"}
  ],
  "09-26": [
    {year: "46 BCE", event: "Julius Caesar dedicates temple to Venus Genetrix", category: "religious"}
  ],
  "09-27": [
    {year: "489 BCE", event: "Traditional date for first secession of the plebs", category: "political"}
  ],
  "09-28": [
    {year: "351 CE", event: "Battle of Mursa Major: Constantius II defeats Magnentius", category: "military"},
    {year: "48 BCE", event: "Pompey murdered in Egypt on his birthday", category: "death"}
  ],
  "09-29": [
    {year: "106 BCE", event: "Birth of Pompey the Great", category: "birth"}
  ],
  "09-30": [
    {year: "420 CE", event: "Death of Saint Jerome in Bethlehem", category: "death"}
  ],

  // OCTOBER
  "10-01": [
    {year: "331 BCE", event: "Battle of Gaugamela: Alexander defeats Darius III", category: "military"}
  ],
  "10-02": [
    {year: "322 BCE", event: "Death of Aristotle (alternative date)", category: "death"}
  ],
  "10-03": [
    {year: "52 BCE", event: "Vercingetorix surrenders at Alesia to Caesar", category: "military"},
    {year: "382 CE", event: "Treaty between Rome and Visigoths", category: "political"}
  ],
  "10-04": [
    {year: "1582 CE", event: "Julian calendar ends (in Catholic countries)", category: "culture"}
  ],
  "10-05": [
    {year: "456 BCE", event: "Traditional date for Temple of Apollo dedicated at Delphi", category: "religious"}
  ],
  "10-06": [
    {year: "105 BCE", event: "Battle of Arausio: Cimbri and Teutones destroy Roman armies", category: "military"},
    {year: "69 BCE", event: "Battle of Tigranocerta: Lucullus defeats Tigranes", category: "military"}
  ],
  "10-07": [
    {year: "3761 BCE", event: "Traditional Jewish date for creation of world", category: "mythology"}
  ],
  "10-08": [
    {year: "314 CE", event: "Battle of Cibalae: Constantine defeats Licinius", category: "military"}
  ],
  "10-09": [
    {year: "768 CE", event: "Charlemagne crowned (later Holy Roman tradition)", category: "world"}
  ],
  "10-10": [
    {year: "19 CE", event: "Death of Germanicus in Antioch (possibly poisoned)", category: "death"}
  ],
  "10-11": [
    {year: "303 BCE", event: "Traditional date for Battle of Ipsus", category: "military"}
  ],
  "10-12": [
    {year: "537 BCE", event: "Traditional date for Jews returning from Babylonian captivity", category: "world"}
  ],
  "10-13": [
    {year: "54 CE", event: "Death of Emperor Claudius (poisoned mushrooms)", category: "death"},
    {year: "409 CE", event: "Vandals and Alans cross the Pyrenees into Spain", category: "military"}
  ],
  "10-14": [
    {year: "456 CE", event: "Battle of Campus Paramus: Ricimer defeats Avitus", category: "military"}
  ],
  "10-15": [
    {year: "70 BCE", event: "Birth of Virgil (Publius Vergilius Maro)", category: "birth"}
  ],
  "10-16": [
    {year: "456 CE", event: "Avitus deposed as Western Emperor", category: "imperial"}
  ],
  "10-17": [
    {year: "456 CE", event: "Avitus killed (alternative date)", category: "death"}
  ],
  "10-18": [
    {year: "31 CE", event: "Death of Sejanus, Tiberius's praetorian prefect", category: "death"}
  ],
  "10-19": [
    {year: "202 BCE", event: "Battle of Zama: Scipio defeats Hannibal, ending Second Punic War", category: "military"}
  ],
  "10-20": [
    {year: "460 CE", event: "Death of Aelia Pulcheria, Eastern Empress", category: "death"}
  ],
  "10-21": [
    {year: "451 CE", event: "Council of Chalcedon opens", category: "religious"}
  ],
  "10-22": [
    {year: "362 CE", event: "Mysterious fire destroys Temple of Apollo at Daphne", category: "disaster"}
  ],
  "10-23": [
    {year: "42 BCE", event: "Battle of Philippi (first engagement): Brutus defeats Octavian", category: "military"}
  ],
  "10-24": [
    {year: "51 CE", event: "Birth of Emperor Domitian", category: "birth"}
  ],
  "10-25": [
    {year: "473 CE", event: "Emperor Leo II becomes sole Eastern Emperor", category: "imperial"}
  ],
  "10-26": [
    {year: "740 BCE", event: "Traditional date for first recorded solar eclipse in China", category: "world"}
  ],
  "10-27": [
    {year: "312 CE", event: "Constantine sees vision before Battle of Milvian Bridge", category: "religious"}
  ],
  "10-28": [
    {year: "312 CE", event: "Battle of Milvian Bridge: Constantine defeats Maxentius", category: "military"},
    {year: "306 CE", event: "Maxentius proclaimed Emperor in Rome", category: "imperial"}
  ],
  "10-29": [
    {year: "437 CE", event: "Valentinian III marries Licinia Eudoxia", category: "personal"}
  ],
  "10-30": [
    {year: "758 BCE", event: "Traditional date for first Messenian War ending", category: "military"}
  ],
  "10-31": [
    {year: "475 CE", event: "Romulus Augustulus proclaimed Western Emperor", category: "imperial"}
  ],

  // NOVEMBER
  "11-01": [
    {year: "82 BCE", event: "Sulla proclaimed dictator of Rome", category: "political"}
  ],
  "11-02": [
    {year: "472 CE", event: "Death of Olybrius, Western Emperor", category: "death"}
  ],
  "11-03": [
    {year: "361 CE", event: "Death of Constantius II", category: "death"}
  ],
  "11-04": [
    {year: "333 BCE", event: "Battle of Issus: Alexander defeats Darius III", category: "military"}
  ],
  "11-05": [
     {year: "63 BCE", event: "Cicero exposes Catiline conspiracy in the Senate", category: "political"}
  ],
  "11-06": [
    {year: "355 CE", event: "Julian proclaimed Caesar by Constantius II", category: "imperial"}
  ],
  "11-07": [
    {year: "335 BCE", event: "Alexander razes Thebes", category: "military"}
  ],
  "11-08": [
    {year: "324 CE", event: "Constantine founds Constantinople (ceremonial beginning)", category: "foundation"},
    {year: "30 CE", event: "Birth of Emperor Nerva", category: "birth"}
  ],
  "11-09": [
    {year: "694 BCE", event: "Traditional date for eclipse mentioned by Archilochus", category: "natural"}
  ],
  "11-10": [
    {year: "474 CE", event: "Death of Emperor Leo II", category: "death"}
  ],
  "11-11": [
    {year: "308 CE", event: "Conference at Carnuntum attempts to restore Tetrarchy", category: "political"}
  ],
  "11-12": [
    {year: "764 BCE", event: "Traditional date for end of First Messenian War", category: "military"}
  ],
  "11-13": [
    {year: "354 CE", event: "Birth of Saint Augustine of Hippo", category: "birth"}
  ],
  "11-14": [
    {year: "565 CE", event: "Death of Justinian I (edge of Classical period)", category: "death"}
  ],
  "11-15": [
    {year: "655 BCE", event: "Traditional date for Cypselus becoming tyrant of Corinth", category: "political"}
  ],
  "11-16": [
    {year: "42 CE", event: "Birth of Emperor Titus", category: "birth"}
  ],
  "11-17": [
    {year: "9 CE", event: "Birth of Emperor Vespasian", category: "birth"},
    {year: "284 CE", event: "Death of Emperor Numerian", category: "death"}
  ],
  "11-18": [
    {year: "326 CE", event: "Constantine orders death of his son Crispus", category: "death"}
  ],
  "11-19": [
    {year: "461 CE", event: "Death of Pope Leo I", category: "death"}
  ],
  "11-20": [
    {year: "270 CE", event: "Birth of Emperor Maximinus II Daia", category: "birth"}
  ],
  "11-21": [
    {year: "164 BCE", event: "Judas Maccabeus rededicates the Temple", category: "religious"}
  ],
  "11-22": [
    {year: "365 CE", event: "Alamanni cross frozen Rhine again", category: "military"}
  ],
  "11-23": [
    {year: "176 CE", event: "Marcus Aurelius and Commodus enter Rome in triumph", category: "political"}
  ],
  "11-24": [
    {year: "380 CE", event: "Theodosius enters Constantinople", category: "political"}
  ],
  "11-25": [
    {year: "2348 BCE", event: "Traditional date for Biblical flood", category: "mythology"}
  ],
  "11-26": [
    {year: "43 BCE", event: "Formation of Second Triumvirate", category: "political"}
  ],
  "11-27": [
    {year: "8 BCE", event: "Death of Horace (Quintus Horatius Flaccus)", category: "death"}
  ],
  "11-28": [
    {year: "375 CE", event: "Valentinian II proclaimed Emperor aged 4", category: "imperial"}
  ],
  "11-29": [
    {year: "62 BCE", event: "Cicero delivers his fourth Catiline oration", category: "political"}
  ],
  "11-30": [
    {year: "147 BCE", event: "Viriathus becomes leader of Lusitanian resistance", category: "military"}
  ],

  // DECEMBER
  "12-01": [
    {year: "406 CE", event: "Vandals, Alans, and Suebi begin crossing frozen Rhine", category: "military"}
  ],
  "12-02": [
   {year: "293 CE", event: "Narses becomes sacred bedchamber official", category: "political"}
  ],
  "12-03": [
    {year: "311 CE", event: "Diocletian meets Galerius at Carnuntum", category: "political"}
  ],
  "12-04": [
    {year: "771 BCE", event: "Traditional date for Romulus's death or disappearance", category: "death"}
  ],
  "12-05": [
    {year: "63 BCE", event: "Cicero delivers last Catiline Oration; conspirators executed", category: "political"}
  ],
  "12-06": [
    {year: "343 CE", event: "Saint Nicholas dies in Myra", category: "death"}
  ],
  "12-07": [
    {year: "43 BCE", event: "Death of Cicero, murdered by Mark Antony's soldiers", category: "death"}
  ],
  "12-08": [
    {year: "65 BCE", event: "Birth of Horace (Quintus Horatius Flaccus)", category: "birth"}
  ],
  "12-09": [
    {year: "480 CE", event: "Death of Julius Nepos, last legitimate Western Emperor", category: "death"}
  ],
  "12-10": [
     {year: "508 BCE", event: "Traditional date for dedication of Temple of Jupiter Optimus Maximus", category: "religious"}
  ],
  "12-11": [
    {year: "361 CE", event: "Julian enters Constantinople as sole emperor", category: "imperial"}
  ],
  "12-12": [
    {year: "627 CE", event: "Battle of Nineveh (late period)", category: "military"}
  ],
  "12-13": [
    {year: "115 CE", event: "Earthquake strikes Antioch during Trajan's stay", category: "disaster"}
  ],
  "12-14": [
    {year: "557 CE", event: "Constantinople earthquake", category: "disaster"}
  ],
  "12-15": [
    {year: "37 CE", event: "Birth of Emperor Nero", category: "birth"}
  ],
  "12-16": [
    {year: "714 BCE", event: "Traditional date for Numa Pompilius becoming king", category: "political"}
  ],
  "12-17": [
    {year: "546 CE", event: "Totila and Goths enter Rome", category: "military"}
  ],
  "12-18": [
    {year: "218 BCE", event: "Battle of the Trebia: Hannibal defeats Romans", category: "military"}
  ],
  "12-19": [
    {year: "324 CE", event: "Licinius abdicates, Constantine becomes sole emperor", category: "imperial"}
  ],
  "12-20": [
    {year: "69 CE", event: "Vespasian enters Rome as Emperor", category: "imperial"}
  ],
  "12-21": [
    {year: "69 CE", event: "Vespasian formally recognised by Senate", category: "political"}
  ],
  "12-22": [
    {year: "244 CE", event: "Diocletian born (traditional date)", category: "birth"}
  ],
  "12-23": [
    {year: "217 BCE", event: "Traditional date for Hannibal entering winter quarters", category: "military"}
  ],
  "12-24": [
    {year: "3 BCE", event: "Traditional date associated with census of Augustus", category: "political"}
  ],
  "12-25": [
    {year: "274 CE", event: "Aurelian dedicates temple to Sol Invictus", category: "religious"},
    {year: "336 CE", event: "First recorded celebration of Christmas in Rome", category: "religious"}
  ],
  "12-26": [
    {year: "795 BCE", event: "Traditional date for first archon of Athens", category: "political"}
  ],
  "12-27": [
    {year: "537 CE", event: "Completion of Hagia Sophia", category: "culture"}
  ],
  "12-28": [
    {year: "457 CE", event: "Majorian becomes Western Emperor", category: "imperial"}
  ],
  "12-29": [
    {year: "418 CE", event: "Boniface becomes comes of Africa", category: "political"}
  ],
  "12-30": [
    {year: "39 CE", event: "Birth of Emperor Titus (alternative date)", category: "birth"}
  ],
  "12-31": [
    {year: "192 CE", event: "Assassination of Emperor Commodus", category: "imperial"},
    {year: "406 CE", event: "Vandals complete crossing of frozen Rhine into Gaul", category: "military"}
  ]
};

// Function to get today's events
function getTodayInHistory() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateKey = `${month}-${day}`;
  
  return ancientHistoryEvents[dateKey] || [{year: "N/A", event: "No recorded events for this date", category: "none"}];
}

// Function to get events for a specific date
function getEventsForDate(month, day) {
  const dateKey = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return ancientHistoryEvents[dateKey] || [{year: "N/A", event: "No recorded events for this date", category: "none"}];
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ancientHistoryEvents, getTodayInHistory, getEventsForDate };
} 
