// Tacitus Annals 12.56 Data File
const lessonData = {
    // Full passage translation
    fullTranslation: "Around the same time, with the mountain between Lake Fucinus and the river Liris having been pierced through, so that the magnificence of the work might be viewed by more people, a naval battle was staged on the lake itself, just as Augustus had once produced one on a pool constructed across the Tiber, but with light vessels and a smaller force. Claudius armed triremes and quadriremes and nineteen thousand men, with the perimeter enclosed by rafts, so that there might be no stray escapes, yet having embraced enough space for the force of the rowing, the skills of the helmsmen, the charges of ships, and things customary in battle. On the rafts stood companies and squadrons of the praetorian cohorts, with ramparts placed in front from which catapults and ballistae might be aimed. Marines occupied the rest of the lake with decked ships. The banks and hills and heights of the mountains were filled in the manner of a theatre by an innumerable crowd, from the nearest towns and others from the city itself, from a desire to see or from duty to the emperor. He himself presided in a splendid military cloak, and Agrippina, not far off, in a golden mantle. Although the fight was among criminals, they fought with the spirit of brave men, and after many wounds they were spared from slaughter.",

    // Latin text with markup
    latinText: `
        <span class="phrase phrase-1" onclick="showAnalysis('phrase1')">sub idem tempus</span>
        <span class="phrase phrase-2" onclick="showAnalysis('phrase2')">inter lacum Fucinum amnemque Lirim</span>
        <span class="phrase phrase-3" onclick="showAnalysis('phrase3')">perrupto monte</span>,
        <span class="phrase phrase-4" onclick="showAnalysis('phrase4')">quo <span class="highlight-style style-1" onclick="showAnalysis('style1')">magnificentia operis</span> a pluribus viseretur</span>,
        <span class="phrase phrase-5" onclick="showAnalysis('phrase5')">lacu in ipso <span class="highlight-style style-2" onclick="showAnalysis('style2')">navale proelium</span> adornatur</span>,
        <span class="phrase phrase-6" onclick="showAnalysis('phrase6')"><span class="highlight-style style-3" onclick="showAnalysis('style3')">ut quondam Augustus</span> structo trans Tiberim stagno</span>,
        <span class="phrase phrase-7" onclick="showAnalysis('phrase7')">sed levibus navigiis et minore copia ediderat</span>.
        <span class="phrase phrase-8" onclick="showAnalysis('phrase8')">Claudius <span class="highlight-style style-4" onclick="showAnalysis('style4')">triremes quadriremesque</span> et <span class="highlight-style style-5" onclick="showAnalysis('style5')">undeviginti hominum milia</span> armavit</span>,
        <span class="phrase phrase-9" onclick="showAnalysis('phrase9')">cincto ratibus ambitu</span>,
        <span class="phrase phrase-10" onclick="showAnalysis('phrase10')">ne vaga effugia forent</span>,
        <span class="phrase phrase-11" onclick="showAnalysis('phrase11')">ac tamen spatium amplexus ad vim remigii, gubernantium artes, impetus navium et proelio solita</span>.
        <span class="phrase phrase-12" onclick="showAnalysis('phrase12')">in ratibus praetoriarum cohortium manipuli turmaeque adstiterant</span>,
        <span class="phrase phrase-13" onclick="showAnalysis('phrase13')">antepositis propugnaculis ex quis catapultae ballistaeque tenderentur</span>.
        <span class="phrase phrase-14" onclick="showAnalysis('phrase14')">reliqua lacus classiarii tectis navibus obtinebant</span>.
        <span class="phrase phrase-15" onclick="showAnalysis('phrase15')"><span class="highlight-style style-6" onclick="showAnalysis('style6')">ripas et collis montiumque edita</span> <span class="highlight-style style-7" onclick="showAnalysis('style7')">in modum theatri</span> multitudo innumera complevit</span>,
        <span class="phrase phrase-16" onclick="showAnalysis('phrase16')">proximis e municipiis et alii urbe ex ipsa</span>,
        <span class="phrase phrase-17" onclick="showAnalysis('phrase17')"><span class="highlight-style style-8" onclick="showAnalysis('style8')">visendi cupidine aut officio in principem</span></span>.
        <span class="phrase phrase-18" onclick="showAnalysis('phrase18')">ipse <span class="highlight-style style-9" onclick="showAnalysis('style9')">insigni paludamento</span></span>
        <span class="phrase phrase-19" onclick="showAnalysis('phrase19')">neque procul Agrippina <span class="highlight-style style-9" onclick="showAnalysis('style9')">chlamyde aurata</span> praesedere</span>.
        <span class="phrase phrase-20" onclick="showAnalysis('phrase20')"><span class="highlight-style style-10" onclick="showAnalysis('style10')">pugnatum quamquam inter sontes fortium virorum animo</span></span>,
        <span class="phrase phrase-21" onclick="showAnalysis('phrase21')">ac post multum vulnerum <span class="highlight-style style-11" onclick="showAnalysis('style11')">occidioni exempti sunt</span></span>.
    `,

    // Grammar/vocabulary analysis
    grammar: {
        phrase1: {
            title: "sub idem tempus",
            vocab: [
                "<strong>sub</strong> (+ accusative) = around, about, towards (of time)",
                "<strong>idem, eadem, idem</strong> = the same (demonstrative pronoun/adjective)",
                "<strong>tempus, temporis</strong> (n.) = time"
            ],
            grammar: "Temporal phrase using 'sub' with accusative to indicate approximate time. This connects the chapter to preceding events - the draining of Lake Fucinus was a major engineering project undertaken by Claudius. The phrase establishes temporal continuity in Tacitus' narrative.",
            translation: "around the same time"
        },
        phrase2: {
            title: "inter lacum Fucinum amnemque Lirim",
            vocab: [
                "<strong>inter</strong> (+ accusative) = between",
                "<strong>lacus, -us</strong> (m.) = lake",
                "<strong>Fucinus, -i</strong> (m.) = Fucinus (a lake in central Italy, modern Fucino)",
                "<strong>amnis, amnis</strong> (m.) = river, stream",
                "<strong>-que</strong> = and (enclitic conjunction)",
                "<strong>Liris, Liris</strong> (m.) = the Liris (a river in central Italy, modern Liri/Garigliano)"
            ],
            grammar: "Prepositional phrase with 'inter' + accusative, describing the location of the tunnel. The enclitic '-que' joins 'amnem' to 'lacum'. Lake Fucinus (modern Fucino basin) was the largest lake in central Italy; Claudius' tunnel to drain it into the Liris was one of the greatest engineering feats of antiquity.",
            translation: "between Lake Fucinus and the river Liris"
        },
        phrase3: {
            title: "perrupto monte",
            vocab: [
                "<strong>perrumpo, perrumpere, perrupi, perruptum</strong> = to break through, pierce through",
                "<strong>mons, montis</strong> (m.) = mountain"
            ],
            grammar: "Ablative absolute construction with perfect passive participle. The participle 'perrupto' (from per- + rumpo) emphasises the violent breaking through of solid rock. This tunnel was approximately 5.6 km long and took 11 years to complete using 30,000 workers.",
            translation: "with the mountain having been pierced through"
        },
        phrase4: {
            title: "quo magnificentia operis a pluribus viseretur",
            vocab: [
                "<strong>quo</strong> = so that, in order that (purpose conjunction, often with comparative)",
                "<strong>magnificentia, -ae</strong> (f.) = magnificence, grandeur, splendour",
                "<strong>opus, operis</strong> (n.) = work, construction, engineering project",
                "<strong>a/ab</strong> (+ ablative) = by (agent with passive)",
                "<strong>plures, plura</strong> (comparative) = more people, a greater number",
                "<strong>viso, visere, visi, visum</strong> = to go to see, view, visit (frequentative of video)"
            ],
            grammar: "Purpose clause with 'quo' + imperfect subjunctive ('viseretur'). The conjunction 'quo' (rather than 'ut') is typically used in purpose clauses containing a comparative ('pluribus'). The passive voice with 'a pluribus' emphasises the spectators rather than the viewed object. Note 'viseretur' from 'viso' (frequentative) - 'to go to see repeatedly' - suggesting deliberate tourism.",
            translation: "so that the magnificence of the work might be viewed by more people"
        },
        phrase5: {
            title: "lacu in ipso navale proelium adornatur",
            vocab: [
                "<strong>lacus, -us</strong> (m.) = lake (ablative singular: lacu)",
                "<strong>in</strong> (+ ablative) = on, in",
                "<strong>ipse, ipsa, ipsum</strong> = itself, himself, the very",
                "<strong>navalis, -e</strong> = naval, of ships",
                "<strong>proelium, -i</strong> (n.) = battle, combat",
                "<strong>adorno, adornare</strong> = to prepare, arrange, stage, furnish"
            ],
            grammar: "Historic present ('adornatur') brings the narrative to life. Note the emphatic word order with 'lacu in ipso' - the prepositional phrase is split with the adjective preceding the preposition for emphasis ('on the lake itself'). A 'navale proelium' or 'naumachia' was a staged naval battle, a spectacular form of Roman entertainment.",
            translation: "a naval battle is staged on the lake itself"
        },
        phrase6: {
            title: "ut quondam Augustus structo trans Tiberim stagno",
            vocab: [
                "<strong>ut</strong> = just as, as (comparative)",
                "<strong>quondam</strong> (adverb) = once, formerly, at one time",
                "<strong>Augustus, -i</strong> (m.) = Augustus (the first emperor)",
                "<strong>struo, struere, struxi, structum</strong> = to build, construct",
                "<strong>trans</strong> (+ accusative) = across, beyond",
                "<strong>Tiberis, Tiberis</strong> (m.) = the Tiber (Rome's river)",
                "<strong>stagnum, -i</strong> (n.) = pool, artificial lake, pond"
            ],
            grammar: "Comparative clause with 'ut' meaning 'just as'. The ablative absolute 'structo stagno' ('with a pool having been constructed') describes Augustus' artificial lake. Augustus' naumachia of 2 BC was famous - he built a special basin (1800 x 1200 feet) across the Tiber in the Trastevere region. Tacitus draws an implicit comparison between the two emperors.",
            translation: "just as Augustus once (had staged one) on a pool constructed across the Tiber"
        },
        phrase7: {
            title: "sed levibus navigiis et minore copia ediderat",
            vocab: [
                "<strong>sed</strong> = but",
                "<strong>levis, -e</strong> = light, small (of vessels)",
                "<strong>navigium, -i</strong> (n.) = vessel, boat, ship",
                "<strong>minor, minus</strong> (comparative) = smaller, lesser",
                "<strong>copia, -ae</strong> (f.) = force, supply, abundance (here: number of combatants)",
                "<strong>edo, edere, edidi, editum</strong> = to put forth, produce, stage (a show)"
            ],
            grammar: "Adversative clause with 'sed' contrasting Claudius' spectacle with Augustus'. The ablatives 'levibus navigiis' and 'minore copia' are ablatives of manner/accompaniment. The pluperfect 'ediderat' indicates that Augustus' event preceded Claudius'. Tacitus implies Claudius was trying to outdo his predecessor in scale.",
            translation: "but (Augustus) had staged (his) with light vessels and a smaller force"
        },
        phrase8: {
            title: "Claudius triremes quadriremesque et undeviginti hominum milia armavit",
            vocab: [
                "<strong>Claudius, -i</strong> (m.) = Claudius (the emperor)",
                "<strong>triremis, -is</strong> (f.) = trireme (ship with three banks of oars)",
                "<strong>quadriremis, -is</strong> (f.) = quadrireme (ship with four banks of oars)",
                "<strong>-que</strong> = and (enclitic)",
                "<strong>undeviginti</strong> (indeclinable) = nineteen",
                "<strong>homo, hominis</strong> (m.) = man, person",
                "<strong>milia, milium</strong> (n. pl.) = thousands",
                "<strong>armo, armare</strong> = to arm, equip"
            ],
            grammar: "Main clause with perfect active 'armavit'. The numbers are striking: triremes and quadriremes were full-sized warships, and 19,000 men was an enormous force (roughly equivalent to four legions). 'Milia' takes a genitive ('hominum'). The polysyndeton '-que... et' emphasises the scale of the undertaking.",
            translation: "Claudius armed triremes and quadriremes and nineteen thousand men"
        },
        phrase9: {
            title: "cincto ratibus ambitu",
            vocab: [
                "<strong>cingo, cingere, cinxi, cinctum</strong> = to surround, encircle, enclose",
                "<strong>ratis, ratis</strong> (f.) = raft, float",
                "<strong>ambitus, -us</strong> (m.) = circuit, perimeter, circumference"
            ],
            grammar: "Ablative absolute with perfect passive participle 'cincto' agreeing with 'ambitu'. The rafts formed a barrier around the combat zone to prevent escape. 'Ratibus' is ablative of instrument/means. This detail shows the careful staging of the spectacle - escape was not an option for the combatants.",
            translation: "with the perimeter enclosed by rafts"
        },
        phrase10: {
            title: "ne vaga effugia forent",
            vocab: [
                "<strong>ne</strong> = so that... not, lest (negative purpose)",
                "<strong>vagus, -a, -um</strong> = wandering, stray, random",
                "<strong>effugium, -i</strong> (n.) = escape, flight, means of escape",
                "<strong>forent</strong> = essent (archaic/poetic imperfect subjunctive of sum)"
            ],
            grammar: "Negative purpose clause with 'ne' + imperfect subjunctive. Note 'forent' - this is an archaic form of 'essent' (from the old future of 'sum'), commonly used in poetry and elevated prose like Tacitus. The phrase reveals the grim reality beneath the spectacle: these were condemned men who would be forced to fight to the death.",
            translation: "so that there might be no stray escapes"
        },
        phrase11: {
            title: "ac tamen spatium amplexus ad vim remigii, gubernantium artes, impetus navium et proelio solita",
            vocab: [
                "<strong>ac</strong> = and, and yet",
                "<strong>tamen</strong> = nevertheless, yet, however",
                "<strong>spatium, -i</strong> (n.) = space, room, extent",
                "<strong>amplector, amplecti, amplexus sum</strong> = to embrace, encompass, include (deponent)",
                "<strong>vis, vis</strong> (f.) = force, power, strength",
                "<strong>remigium, -i</strong> (n.) = rowing, the action of oars",
                "<strong>guberno, gubernare</strong> = to steer, pilot",
                "<strong>ars, artis</strong> (f.) = skill, art, technique",
                "<strong>impetus, -us</strong> (m.) = attack, charge, onset",
                "<strong>navis, navis</strong> (f.) = ship",
                "<strong>solitus, -a, -um</strong> = customary, usual (perfect participle of soleo, used as adjective)"
            ],
            grammar: "Concessive clause balancing the previous restriction. 'Amplexus' is a perfect participle from the deponent verb 'amplector' (he having embraced = having included). The accusative objects form an asyndetic list: 'vim remigii, gubernantium artes, impetus navium et proelio solita' - four elements describing what makes naval combat authentic. 'Proelio solita' = 'things customary in battle' (neuter plural accusative).",
            translation: "yet having embraced enough space for the force of rowing, the skills of helmsmen, the charges of ships, and things customary in battle"
        },
        phrase12: {
            title: "in ratibus praetoriarum cohortium manipuli turmaeque adstiterant",
            vocab: [
                "<strong>in</strong> (+ ablative) = on",
                "<strong>ratis, ratis</strong> (f.) = raft",
                "<strong>praetorius, -a, -um</strong> = praetorian, of the Praetorian Guard",
                "<strong>cohors, cohortis</strong> (f.) = cohort (military unit of ~480 men)",
                "<strong>manipulus, -i</strong> (m.) = maniple, company (subdivision of cohort)",
                "<strong>turma, -ae</strong> (f.) = squadron (cavalry unit of ~30 men)",
                "<strong>adsto, adstare, adstiti</strong> = to stand near, stand by, take position"
            ],
            grammar: "Pluperfect 'adstiterant' indicates the troops were already positioned before the action began. 'Praetoriarum cohortium' is a genitive plural - the Praetorian Guard were the emperor's elite personal troops. 'Manipuli turmaeque' combines infantry (manipuli) and cavalry (turmae) terminology, suggesting both types were present. The rafts served both as barriers and as military platforms.",
            translation: "on the rafts stood companies and squadrons of the praetorian cohorts"
        },
        phrase13: {
            title: "antepositis propugnaculis ex quis catapultae ballistaeque tenderentur",
            vocab: [
                "<strong>antepono, anteponere, anteposui, antepositum</strong> = to place before, set in front",
                "<strong>propugnaculum, -i</strong> (n.) = rampart, bulwark, defensive fortification",
                "<strong>ex</strong> (+ ablative) = from, out of",
                "<strong>quis</strong> = quibus (archaic/poetic ablative plural of qui)",
                "<strong>catapulta, -ae</strong> (f.) = catapult (torsion artillery for bolts)",
                "<strong>ballista, -ae</strong> (f.) = ballista (torsion artillery for stones)",
                "<strong>tendo, tendere, tetendi, tentum/tensum</strong> = to stretch, aim, direct"
            ],
            grammar: "Ablative absolute 'antepositis propugnaculis' followed by a relative purpose clause. Note 'quis' for 'quibus' - an archaic form favoured by Tacitus for its elevated tone. 'Tenderentur' is imperfect subjunctive passive in the purpose clause. Catapults fired large arrows/bolts; ballistae fired stones. Their presence shows this was not merely theatrical but genuinely lethal.",
            translation: "with ramparts placed in front from which catapults and ballistae might be aimed"
        },
        phrase14: {
            title: "reliqua lacus classiarii tectis navibus obtinebant",
            vocab: [
                "<strong>reliquus, -a, -um</strong> = remaining, the rest of",
                "<strong>lacus, -us</strong> (m.) = lake",
                "<strong>classiarius, -i</strong> (m.) = marine, sailor, member of the fleet",
                "<strong>tectus, -a, -um</strong> = covered, decked (perfect participle of tego)",
                "<strong>navis, navis</strong> (f.) = ship",
                "<strong>obtineo, obtinere, obtinui, obtentum</strong> = to hold, occupy, possess"
            ],
            grammar: "Imperfect 'obtinebant' describes the ongoing state during the spectacle. 'Reliqua lacus' = 'the remaining parts of the lake' (neuter plural accusative as object). 'Classiarii' were professional navy personnel, distinct from the condemned prisoners who would fight. 'Tectis navibus' is ablative of means - 'decked ships' had covered fighting platforms, as opposed to open vessels.",
            translation: "marines occupied the rest of the lake with decked ships"
        },
        phrase15: {
            title: "ripas et collis montiumque edita in modum theatri multitudo innumera complevit",
            vocab: [
                "<strong>ripa, -ae</strong> (f.) = bank, shore",
                "<strong>collis, collis</strong> (m.) = hill",
                "<strong>mons, montis</strong> (m.) = mountain",
                "<strong>editus, -a, -um</strong> = elevated, high, lofty (perfect participle of edo 'to put forth')",
                "<strong>modus, -i</strong> (m.) = manner, way; in modum (+ genitive) = in the manner of",
                "<strong>theatrum, -i</strong> (n.) = theatre",
                "<strong>multitudo, multitudinis</strong> (f.) = crowd, multitude, great number",
                "<strong>innumerus, -a, -um</strong> = countless, innumerable",
                "<strong>compleo, complere, complevi, completum</strong> = to fill, fill up completely"
            ],
            grammar: "Complex sentence with tricolon 'ripas et collis montiumque edita' - three accusative objects (banks, hills, heights) in ascending scale. 'Edita' is neuter plural substantive ('the elevated places'). The phrase 'in modum theatri' makes the theatrical metaphor explicit - the natural landscape became an amphitheatre. Subject 'multitudo innumera' is emphatic, placed after its verb.",
            translation: "an innumerable crowd filled the banks and hills and heights of the mountains in the manner of a theatre"
        },
        phrase16: {
            title: "proximis e municipiis et alii urbe ex ipsa",
            vocab: [
                "<strong>proximus, -a, -um</strong> = nearest, closest (superlative of prope)",
                "<strong>e/ex</strong> (+ ablative) = from, out of",
                "<strong>municipium, -i</strong> (n.) = municipality, town (with Roman citizenship)",
                "<strong>alius, alia, aliud</strong> = other, another (nominative plural: alii)",
                "<strong>urbs, urbis</strong> (f.) = city (specifically Rome, 'the City')",
                "<strong>ipse, ipsa, ipsum</strong> = itself, the very"
            ],
            grammar: "Elliptical phrase (verb 'venerunt' or similar understood). 'Proximis e municipiis' = 'from the nearest towns'; 'urbe ex ipsa' = 'from the city itself' (i.e., Rome). Note the chiastic word order: preposition-noun / noun-preposition. The phrase shows the spectacle drew crowds from both local towns and Rome itself - a significant journey in antiquity.",
            translation: "from the nearest towns and others from the city itself"
        },
        phrase17: {
            title: "visendi cupidine aut officio in principem",
            vocab: [
                "<strong>viso, visere</strong> = to go to see, view (frequentative of video)",
                "<strong>visendi</strong> = gerund (genitive): of seeing",
                "<strong>cupido, cupidinis</strong> (f.) = desire, longing, eagerness",
                "<strong>aut</strong> = or",
                "<strong>officium, -i</strong> (n.) = duty, service, obligation",
                "<strong>in</strong> (+ accusative) = towards, to (of feeling/duty)",
                "<strong>princeps, principis</strong> (m.) = emperor, first citizen, leader"
            ],
            grammar: "Ablative of cause ('cupidine... officio') explaining why people came. 'Visendi' is a gerund (genitive) dependent on 'cupidine'. The antithesis 'cupidine aut officio' contrasts genuine interest with political obligation - some came to see the spectacle, others to be seen paying respects to Claudius. 'In principem' shows direction of duty.",
            translation: "from a desire to see or from duty to the emperor"
        },
        phrase18: {
            title: "ipse insigni paludamento",
            vocab: [
                "<strong>ipse</strong> = he himself (emphatic pronoun, nominative)",
                "<strong>insignis, -e</strong> = distinguished, splendid, remarkable",
                "<strong>paludamentum, -i</strong> (n.) = military cloak, general's cloak"
            ],
            grammar: "Beginning of a new sentence with emphatic 'ipse' referring to Claudius. 'Insigni paludamento' is ablative of description or manner - 'in a splendid military cloak'. The paludamentum was a scarlet cloak worn by Roman generals and emperors as supreme military commanders. Claudius' choice of military attire emphasises his role as commander-in-chief.",
            translation: "he himself in a splendid military cloak"
        },
        phrase19: {
            title: "neque procul Agrippina chlamyde aurata praesedere",
            vocab: [
                "<strong>neque</strong> = and... not, nor (here: and)",
                "<strong>procul</strong> (adverb) = far off, at a distance; neque procul = not far away",
                "<strong>Agrippina, -ae</strong> (f.) = Agrippina (the Younger, Claudius' wife)",
                "<strong>chlamys, chlamydis</strong> (f.) = chlamys (Greek-style military cloak)",
                "<strong>auratus, -a, -um</strong> = gilded, golden, covered with gold",
                "<strong>praesideo, praesidere, praesedi</strong> = to preside, sit in front, take the chief seat"
            ],
            grammar: "Historic infinitive 'praesedere' (= praesederunt) creates vivid narrative style - Tacitus uses this construction frequently for dramatic effect. 'Neque procul' is litotes ('not far' = 'nearby'). Agrippina's chlamys was Greek-style military dress - unusual for a Roman woman. The golden colour rivals Claudius' imperial purple, showing her power and ambition.",
            translation: "and Agrippina, not far off, in a golden mantle, presided"
        },
        phrase20: {
            title: "pugnatum quamquam inter sontes fortium virorum animo",
            vocab: [
                "<strong>pugno, pugnare</strong> = to fight (pugnatum = impersonal passive: 'there was fighting')",
                "<strong>quamquam</strong> = although, even though (concessive)",
                "<strong>inter</strong> (+ accusative) = among, between",
                "<strong>sons, sontis</strong> = guilty, criminal (substantive: guilty person, criminal)",
                "<strong>fortis, -e</strong> = brave, strong, courageous",
                "<strong>vir, viri</strong> (m.) = man",
                "<strong>animus, -i</strong> (m.) = spirit, mind, courage"
            ],
            grammar: "Impersonal passive 'pugnatum (est)' - literally 'it was fought' = 'they fought'. Concessive clause with 'quamquam' + indicative (implied). 'Inter sontes' = 'among the guilty/criminals'. 'Fortium virorum animo' is ablative of manner - 'with the spirit of brave men'. This is a powerful paradox: condemned criminals fighting with the courage of warriors.",
            translation: "although the fight was among criminals, they fought with the spirit of brave men"
        },
        phrase21: {
            title: "ac post multum vulnerum occidioni exempti sunt",
            vocab: [
                "<strong>ac</strong> = and",
                "<strong>post</strong> (+ accusative) = after",
                "<strong>multum</strong> (+ genitive) = much of, a great deal of",
                "<strong>vulnus, vulneris</strong> (n.) = wound",
                "<strong>occidio, occidionis</strong> (f.) = slaughter, massacre, carnage",
                "<strong>eximo, eximere, exemi, exemptum</strong> = to take out, remove, exempt, spare"
            ],
            grammar: "Perfect passive 'exempti sunt' with ablative of separation 'occidioni' - 'they were spared from slaughter'. 'Multum vulnerum' is an unusual construction (neuter accusative 'multum' with partitive genitive) meaning 'after many wounds'. The ending is notably anticlimactic - after all the elaborate staging and genuine combat, the survivors were spared. This may reflect either mercy or the impracticality of killing 19,000 men.",
            translation: "and after many wounds they were spared from slaughter"
        }
    },

    // Style analysis
    style: {
        style1: {
            title: "magnificentia operis",
            device: "Elevated Diction",
            effect: "The phrase 'magnificentia operis' (magnificence of the work) uses grand vocabulary to describe the engineering project. This elevated language reflects the imperial propaganda surrounding the event while also carrying Tacitean irony - such 'magnificence' was the backdrop for mass entertainment involving condemned prisoners."
        },
        style2: {
            title: "navale proelium",
            device: "Technical Terminology",
            effect: "The technical term 'navale proelium' (naval battle) or 'naumachia' grounds the spectacular entertainment in military language. This blurring of warfare and entertainment is a key theme - the Romans staged genuine combat as spectacle."
        },
        style3: {
            title: "ut quondam Augustus",
            device: "Historical Comparison",
            effect: "The comparison with Augustus ('just as Augustus once...') is loaded with political meaning. Augustus' naumachia of 2 BC was legendary; by surpassing it in scale, Claudius claims a place alongside the founder of the principate. Yet Tacitus' 'sed' (but) implicitly criticises the excess - bigger is not necessarily better."
        },
        style4: {
            title: "triremes quadriremesque",
            device: "Polysyndeton and Technical Detail",
            effect: "The enumeration of ship types with the enclitic '-que' creates a sense of accumulation and excess. Triremes and quadriremes were full-sized warships, not small boats - their use emphasises the unprecedented scale and the resources Claudius devoted to entertainment."
        },
        style5: {
            title: "undeviginti hominum milia",
            device: "Numerical Precision",
            effect: "The specific number '19,000 men' lends an air of documentary accuracy while simultaneously highlighting the enormous human cost. This precision is characteristic of Tacitus' style - he lets the facts speak for themselves while implying moral judgement."
        },
        style6: {
            title: "ripas et collis montiumque edita",
            device: "Tricolon with Ascending Scale",
            effect: "The three-part structure (banks, hills, mountain heights) creates a rising crescendo that mirrors the physical landscape. The progression from low (ripae) through middle (colles) to high (montium edita) paints a vivid picture of spectators filling every available vantage point."
        },
        style7: {
            title: "in modum theatri",
            device: "Theatrical Imagery",
            effect: "The explicit comparison 'in the manner of a theatre' makes the metaphor unmistakable: nature itself becomes a stage for imperial spectacle. This transforms the landscape into a performance space, blurring the line between reality and theatre - a key Tacitean concern."
        },
        style8: {
            title: "visendi cupidine aut officio in principem",
            device: "Antithesis of Motive",
            effect: "The contrast between 'cupidine' (desire/curiosity) and 'officio' (duty/obligation) exposes the mixed motivations of the crowd. Some came for entertainment, others for political necessity. This antithesis suggests the coercive nature of imperial spectacle - attendance could be a political duty, not merely a choice."
        },
        style9: {
            title: "insigni paludamento... chlamyde aurata",
            device: "Contrasting Imperial Dress",
            effect: "The parallel description of Claudius in his military cloak and Agrippina in her golden mantle creates a visual pairing that suggests equality of status. The chlamys was Greek military dress - unusual for a Roman empress. The golden colour rivals imperial purple, foreshadowing Agrippina's ambition and eventual domination of Claudius."
        },
        style10: {
            title: "pugnatum quamquam inter sontes fortium virorum animo",
            device: "Paradox/Oxymoron",
            effect: "The paradox of criminals ('sontes') fighting with the spirit of brave warriors ('fortium virorum animo') creates moral complexity. Tacitus acknowledges their courage while their status as condemned men reminds us this was forced combat. The juxtaposition humanises the participants while condemning the system that used them."
        },
        style11: {
            title: "occidioni exempti sunt",
            device: "Anticlimactic Ending",
            effect: "After the elaborate build-up of scale, spectacle, and genuine combat, the simple statement that survivors were 'spared from slaughter' is deliberately deflating. The passive voice and matter-of-fact tone contrast with the earlier grandeur, leaving readers to question what the spectacle ultimately achieved."
        }
    },

    // Resources for sidebar
    resources: {
        summary: `
            <h4>Summary</h4>
            <p>To celebrate the completion of the tunnel draining Lake Fucinus, Claudius stages a massive naval battle (<em>naumachia</em>) on the lake itself. The spectacle surpasses even Augustus' famous naumachia in scale.</p>
            <p>Claudius arms triremes and quadriremes with 19,000 men. Rafts surround the combat zone to prevent escape, while Praetorian Guards man artillery positions. An enormous crowd fills the natural amphitheatre of the surrounding hills.</p>
            <p>Claudius presides in military dress, with Agrippina nearby in golden robes. Despite being condemned criminals, the combatants fight bravely, and after sustaining many wounds, the survivors are ultimately spared.</p>
        `,
        context: `
            <h4>Historical Context</h4>
            <p><strong>The Lake Fucinus Tunnel:</strong> This was one of the greatest engineering projects of antiquity. Lake Fucinus (modern Fucino basin in the Abruzzo region) was the largest lake in central Italy but had no natural outlet, causing periodic flooding. Claudius employed 30,000 workers for 11 years (41-52 AD) to dig a tunnel 5.6 km through Monte Salviano to drain the lake into the river Liris.</p>
            <p><strong>Naumachiae:</strong> Staged naval battles were among the most spectacular and expensive forms of Roman entertainment. Augustus' naumachia of 2 BC used an artificial basin and was considered the benchmark. Claudius' use of a real lake with full-sized warships represented an unprecedented escalation.</p>
            <p><strong>The Combatants:</strong> Naval battles used condemned criminals (<em>noxii</em> or <em>sontes</em>) who were expected to fight to the death. The famous cry 'Ave Caesar, morituri te salutant' ('Hail Caesar, those about to die salute you') reportedly originated at this very event.</p>
            <p><strong>Agrippina the Younger:</strong> Claudius' fourth wife and mother of the future emperor Nero, Agrippina was one of the most powerful women in Roman history. Her prominent placement and golden dress at this event signals her influence - she would later be suspected of poisoning Claudius in 54 AD.</p>
        `,
        comprehension: `
            <h4>Comprehension Questions</h4>
            <ul>
                <li>What engineering project had just been completed?</li>
                <li>Why was the naval battle staged at this particular location?</li>
                <li>How did Claudius' spectacle compare to Augustus' earlier naumachia?</li>
                <li>What types of ships were used, and how many men participated?</li>
                <li>What was the purpose of the rafts surrounding the combat area?</li>
                <li>Who was positioned on the rafts, and what equipment did they have?</li>
                <li>Where did the spectators come from?</li>
                <li>What were the two motives for attending mentioned by Tacitus?</li>
                <li>How were Claudius and Agrippina dressed?</li>
                <li>What happened to the combatants at the end of the battle?</li>
            </ul>
        `,
        analysis: `
            <h4>Analysis Questions</h4>
            <ul>
                <li>What is the effect of comparing Claudius' naumachia to Augustus' earlier spectacle?</li>
                <li>How does Tacitus use precise numbers (19,000 men, triremes/quadriremes) to shape the reader's impression?</li>
                <li>What is the significance of the phrase <em>in modum theatri</em> (in the manner of a theatre)?</li>
                <li>How does the antithesis between <em>visendi cupidine</em> and <em>officio in principem</em> characterise the spectators?</li>
                <li>What does Agrippina's clothing and positioning suggest about her status?</li>
                <li>What is the effect of the paradox <em>quamquam inter sontes fortium virorum animo</em>?</li>
                <li>Why might Tacitus end the passage with the anticlimactic detail that survivors were spared?</li>
                <li>How does this passage reflect Tacitus' attitude toward imperial spectacle?</li>
            </ul>
        `,
        themes: `
            <h4>Key Themes</h4>
            <p><strong>Imperial Spectacle as Propaganda:</strong> The massive scale of the naumachia was designed to demonstrate Claudius' power and generosity. The completion of the engineering project and the subsequent entertainment were political statements as much as celebrations.</p>
            <p><strong>Competition with Predecessors:</strong> Claudius explicitly surpasses Augustus' famous naumachia. This competitive element reveals how emperors used spectacle to establish their place in the imperial hierarchy and legitimise their rule.</p>
            <p><strong>Entertainment and Death:</strong> The passage exposes the Roman fusion of entertainment and violence. Condemned prisoners became performers in a deadly theatre, watched by enormous crowds who came for 'desire' or 'duty'.</p>
            <p><strong>Nature as Stage:</strong> The natural landscape becomes a theatrical space (<em>in modum theatri</em>). This transformation of nature for imperial purposes reflects broader Roman attitudes toward dominating and reshaping the environment.</p>
            <p><strong>Agrippina's Rising Power:</strong> Her prominent position and luxurious dress foreshadow her increasing dominance over Claudius and her eventual role in securing the succession for her son Nero.</p>
            <p><strong>Human Dignity in Degradation:</strong> Despite their condemned status, the prisoners fought with <em>fortium virorum animo</em> (the spirit of brave men). Tacitus acknowledges their humanity even as he implicitly condemns the system that used them.</p>
        `
    }
};
