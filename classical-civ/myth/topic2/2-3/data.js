// Lesson 2-3: The Twelve Labours - Data File

const lessonData = {
    // Learning Objectives
    learningObjectives: {
        intro: "By the end of this section, you will understand:",
        objectives: [
            "The twelve labours and their significance in establishing Heracles as the greatest hero",
            "How Heracles overcame each challenge through strength, cleverness, and divine aid",
            "The representation of the labours on the Temple of Zeus at Olympia",
            "Heracles' role as founder of the Olympic Games",
            "The progression from local to cosmic challenges",
            "How the labours transformed personal tragedy into universal benefit"
        ]
    },

    // Labour Categories
    categories: [
        {
            id: 'monster',
            icon: '🦁',
            title: 'Monster Slaying',
            count: 'Labours 1, 2, 4, 6, 9, 11, 12'
        },
        {
            id: 'capture',
            icon: '🎯',
            title: 'Capture Missions',
            count: 'Labours 3, 7, 12'
        },
        {
            id: 'fetch',
            icon: '🏺',
            title: 'Fetch Quests',
            count: 'Labours 8, 9, 10, 11'
        }
    ],

    // Twelve Labours Data
    labours: [
        {
            number: 1,
            name: 'Nemean Lion',
            icon: '🦁',
            location: 'Nemea, Peloponnese',
            narrative: 'The first labour took Heracles to Nemea, where a monstrous lion terrorised the region. This was no ordinary beast - it was the offspring of the monsters Typhon and Echidna, with a golden hide that no weapon could pierce. The lion had made its lair in a cave with two entrances, from which it would emerge to devastate the surrounding area, killing both livestock and humans.',
            narrative2: 'Heracles first attempted to shoot the lion with his arrows, but they simply bounced off its impenetrable hide. Realising conventional weapons were useless, he blocked one entrance of the cave and entered through the other, cornering the beast. In the darkness of the cave, man and monster engaged in hand-to-hand combat. Using his incredible strength, Heracles wrapped his mighty arms around the lion\'s throat and strangled it.',
            narrative3: 'After killing the lion, Heracles faced a new problem - how to skin it when no blade could cut its hide. Athena appeared to him and suggested using the lion\'s own claws. This worked perfectly, and Heracles fashioned the pelt into an invulnerable cloak and the head into a helmet. This lion skin would become his most iconic attribute, making him instantly recognisable in art and protecting him in future labours.',
            challenge: 'A lion with impenetrable skin that terrorised Nemea. No weapon could pierce its golden hide - arrows bounced off, swords bent, and spears shattered.',
            solution: 'Heracles strangled it with his bare hands after trapping it in its cave. He used the lion\'s own claws to skin it and wore the pelt as armour.',
            significance: 'Established Heracles\' superhuman strength and gained his iconic lion-skin cloak. This first labour proved Heracles was no ordinary hero.',
            metope: 'west'
        },
        {
            number: 2,
            name: 'Lernaean Hydra',
            icon: '🐍',
            location: 'Lake Lerna, near Argos',
            narrative: 'The Hydra was a serpentine water monster with numerous heads - sources vary from five to one hundred, though nine is most common. The creature lived in the swamps of Lerna, which was also an entrance to the Underworld. Its breath and blood were deadly poison, and it terrorised the countryside, destroying crops and killing anyone who came near.',
            narrative2: 'The central head was immortal, and for each head that was cut off, two would grow back in its place. Heracles discovered this horrifying fact when he began attacking with his sword. As he fought, Hera sent a giant crab to distract him by pinching his feet. Heracles crushed the crab (which Hera then placed in the sky as the constellation Cancer) and called for help from his nephew Iolaus.',
            narrative3: 'Together, they developed a strategy: Heracles would cut off each head, and Iolaus would immediately cauterise the neck stump with a burning torch, preventing regeneration. After removing all the mortal heads, Heracles cut off the immortal head with a golden sword given to him by Athena and buried it under a huge rock. He then dipped his arrows in the Hydra\'s poisonous blood, creating weapons that would prove both useful and ultimately fatal to himself.',
            challenge: 'A many-headed serpent that grew two heads for each one cut off. Its breath and blood were deadly poison, and one head was immortal.',
            solution: 'With help from his nephew Iolaus, who cauterised each neck stump, Heracles defeated it. He buried the immortal head under a rock and dipped his arrows in its poisonous blood.',
            significance: 'Discounted by Eurystheus for receiving help. The poisoned arrows would later cause his own death. Showed that even heroes sometimes need assistance.',
            metope: 'west'
        },
        {
            number: 3,
            name: 'Ceryneian Hind',
            icon: '🦌',
            location: 'Ceryneia, Achaea',
            narrative: 'The Ceryneian Hind was a magnificent creature sacred to Artemis, goddess of the hunt. It had golden antlers like a stag and hooves of bronze, and could outrun an arrow in flight. Eurystheus chose this labour knowing that killing or harming the hind would incur Artemis\'s wrath, while failing to capture it would mean Heracles had failed.',
            narrative2: 'This labour required patience rather than strength. Heracles pursued the hind for a full year across Greece, through Arcadia, past the Danube, and even to the land of the Hyperboreans. The hind never seemed to tire, leading Heracles on an endless chase through forests and over mountains. Finally, as it crossed the river Ladon, Heracles saw his chance.',
            narrative3: 'Different versions tell different endings: in some, he shot it with a special arrow that pinned its legs together without drawing blood; in others, he caught it while it slept. When Artemis and Apollo confronted him for capturing their sacred animal, Heracles explained his servitude and promised to release the hind after showing it to Eurystheus. The gods, understanding his obligation, allowed him to complete the labour.',
            challenge: 'A sacred deer with golden antlers and bronze hooves, sacred to Artemis. It could outrun an arrow and had to be captured alive without harm.',
            solution: 'Heracles pursued it for a full year, finally capturing it while it slept or with a careful arrow shot. He apologised to Artemis and was allowed to borrow it.',
            significance: 'Showed patience and respect for the divine, not just brute strength. Proved Heracles could accomplish tasks requiring endurance and restraint.',
            metope: 'west'
        },
        {
            number: 4,
            name: 'Erymanthian Boar',
            icon: '🐗',
            location: 'Mount Erymanthus, Arcadia',
            narrative: 'The fourth labour seemed straightforward: capture a giant boar that was ravaging the countryside around Mount Erymanthus. However, the journey to find the boar would prove as significant as the capture itself. On his way, Heracles stopped to visit his friend Pholus, a civilised centaur who lived in a cave on Mount Pelion.',
            narrative2: 'Pholus offered Heracles cooked meat, but when Heracles asked for wine, Pholus hesitated - the wine jar belonged to all the centaurs collectively. Heracles insisted, and when the jar was opened, its scent attracted the other centaurs, who attacked in fury. Heracles defended himself with his poisoned arrows, killing many. Tragically, Pholus died when he accidentally dropped one of the poisoned arrows on his foot, and the immortal centaur Chiron was accidentally shot and suffered incurable agony.',
            narrative3: 'After this tragic interlude, Heracles tracked the boar to its lair. Using the advice of Chiron, he drove it into deep snow where its short legs couldn\'t manage. Exhausted and immobilised, the boar was easy to bind. Heracles carried it on his shoulders back to Eurystheus, who was so terrified he hid in a large bronze jar he had commissioned for protection. From then on, Eurystheus would only communicate with Heracles through a herald.',
            challenge: 'A gigantic boar that ravaged the countryside around Mount Erymanthus. Had to be captured alive in harsh winter conditions.',
            solution: 'Heracles chased it into deep snow where it couldn\'t move quickly, then bound it and carried it back on his shoulders.',
            significance: 'Eurystheus was so frightened he hid in a bronze jar, showing the cowardice of Heracles\' taskmaster. The journey involved the tragic death of centaur friends.',
            metope: 'east'
        },
        {
            number: 5,
            name: 'Augean Stables',
            icon: '🐄',
            location: 'Elis, western Peloponnese',
            narrative: 'King Augeas of Elis owned more cattle than any man in Greece - three thousand immortal cattle, including twelve pure white bulls sacred to Helios. These divine herds had been a gift from his father, the sun god. The stables had not been cleaned for thirty years, and the accumulation of dung was so great that the valley had become uninhabitable and the land could not be cultivated.',
            narrative2: 'Eurystheus set this labour believing it to be both impossible and humiliating - a hero reduced to shovelling dung. Before revealing his servitude, Heracles made a bargain with Augeas: if he could clean the stables in a single day, Augeas would give him one-tenth of his cattle. Augeas agreed, thinking it impossible. Heracles then made openings in the walls of the stable yard and diverted the rivers Alpheus and Peneus to flow through, washing away decades of filth in hours.',
            narrative3: 'When Augeas learned that Heracles had been ordered to perform this task by Eurystheus, he refused to honour the agreement, claiming the rivers had done the work, not Heracles. Augeas even denied making the bargain, but his own son Phyleus testified against him. Both Heracles and Phyleus were banished. Later, Heracles would return with an army to claim his payment. Eurystheus also refused to count this labour, saying Heracles had attempted to profit from it.',
            challenge: '3000 immortal cattle had filled the stables with 30 years of dung. The task had to be completed in a single day - an impossible amount to shovel.',
            solution: 'Heracles diverted two rivers (Alpheus and Peneus) through the stables, washing them clean with the torrent. Intelligence triumphed over strength.',
            significance: 'Discounted by Eurystheus because Augeas offered payment. Showed that cleverness could achieve what seemed impossible. Located at Olympia\'s region.',
            metope: 'east'
        },
        {
            number: 6,
            name: 'Stymphalian Birds',
            icon: '🦅',
            location: 'Lake Stymphalia, Arcadia',
            narrative: 'The Stymphalian Birds were man-eating creatures with beaks of bronze, metallic feathers they could launch like arrows, and toxic dung that poisoned the land. They had migrated to Lake Stymphalia after being driven from their previous home by wolves. The dense marsh around the lake made it impossible to approach them on foot or by boat.',
            narrative2: 'Heracles was stumped by this challenge until Athena provided him with a pair of bronze krotala (noise-makers) forged by Hephaestus. Standing on a mountain overlooking the lake, Heracles clashed the krotala together, creating such a cacophony that the birds took flight in panic. As they flew up, Heracles shot them down with his arrows.',
            narrative3: 'Some versions say he killed them all; others that he simply drove them away to the island of Aretias in the Black Sea, where they would later be encountered by Jason and the Argonauts. This labour marked the first time Heracles received direct divine assistance with a tool specifically created for the task, showing that even the greatest hero needed help from the gods.',
            challenge: 'Man-eating birds with bronze beaks, metallic feathers they could shoot like arrows, and toxic dung. The marsh made them inaccessible.',
            solution: 'Using bronze castanets from Athena, Heracles frightened them into flight, then shot them with his arrows as they fled.',
            significance: 'First labour requiring divine assistance (Athena\'s help), showing even heroes need the gods. Marked the completion of the Peloponnesian labours.',
            metope: 'west'
        },
        {
            number: 7,
            name: 'Cretan Bull',
            icon: '🐂',
            location: 'Crete',
            narrative: 'The seventh labour took Heracles overseas for the first time, to the island of Crete. The bull in question had been sent by Poseidon to King Minos as a sign of divine favour - a magnificent white bull that emerged from the sea. Minos was supposed to sacrifice it to Poseidon, but its beauty was such that he kept it and sacrificed another. In punishment, Poseidon made the bull savage and caused Minos\' wife Pasiphae to fall in love with it, resulting in the birth of the Minotaur.',
            narrative2: 'By the time Heracles arrived, the bull was rampaging across Crete, destroying orchards, levelling walls, and breathing fire. Minos was happy for Heracles to remove this problem. Heracles tracked the bull and wrestled it into submission with his bare hands, demonstrating his superiority over the savage beast.',
            narrative3: 'Most remarkably, Heracles then rode the bull across the Mediterranean Sea back to Greece, presenting it alive to Eurystheus. The king, as usual, wanted nothing to do with the dangerous creature and released it. The bull then wandered to Marathon, where it would later be captured by Theseus. This labour showed Heracles\' power extending beyond Greece\'s borders.',
            challenge: 'The bull that fathered the Minotaur, now running wild and breathing fire, destroying Cretan crops and terrorising the island.',
            solution: 'Heracles wrestled it into submission with his bare hands and rode it across the sea back to Greece like a horse.',
            significance: 'First labour outside the Peloponnese, expanding the geographic scope of his heroism. The bull would later be captured again by Theseus.',
            metope: 'west'
        },
        {
            number: 8,
            name: 'Mares of Diomedes',
            icon: '🐴',
            location: 'Thrace',
            narrative: 'King Diomedes of Thrace, son of Ares and Cyrene, owned four mares named Podargos (swift), Lampon (shining), Xanthos (yellow), and Deinos (terrible). He fed them human flesh, usually from unwitting guests, which had made them uncontrollably savage. They were kept tethered with iron chains to bronze mangers, as their madness made them impossible to handle.',
            narrative2: 'Heracles travelled to Thrace with a band of volunteers, including his young lover Abderus. They overpowered the grooms and drove the mares to the sea. When Diomedes and his men pursued them, Heracles left Abderus to guard the horses while he fought. He defeated the Thracians and fed Diomedes to his own mares. The horses, satisfied by eating their master, became calm enough to handle.',
            narrative3: 'Tragically, while Heracles was fighting, the mares had also killed and eaten Abderus. Heracles founded the city of Abdera in his honour. He then harnessed the now-calm mares to Diomedes\' chariot and drove them back to Eurystheus. The king dedicated them to Hera and set them free. They were eventually killed by wild beasts on Mount Olympus, or in some versions, their descendants survived to the time of Alexander the Great.',
            challenge: 'Four horses fed human flesh by King Diomedes, making them savage and uncontrollable. They were tethered with iron chains to bronze mangers.',
            solution: 'Heracles fed Diomedes to his own horses, calming them with their master\'s flesh, then drove them back to Eurystheus.',
            significance: 'Justice through poetic retribution. The death of his companion Abderus added tragic cost, showing heroism demands sacrifice.',
            metope: 'east'
        },
        {
            number: 9,
            name: 'Belt of Hippolyta',
            icon: '⚔️',
            location: 'Themiscyra, land of Amazons',
            narrative: 'Eurystheus\' daughter Admete desired the belt of Hippolyta, Queen of the Amazons. This was no ordinary belt but a golden war-girdle given to Hippolyta by her father Ares, god of war. It symbolised her authority over the fierce warrior women who lived by the Black Sea, who had created a society entirely without men.',
            narrative2: 'Heracles sailed with a crew of heroes, including Theseus. When they arrived at Themiscyra, Queen Hippolyta came to meet them. Impressed by Heracles\' fame and attracted to him, she agreed to give him the belt peacefully. However, Hera, disguised as an Amazon, spread a rumour that Heracles intended to kidnap their queen. The Amazons attacked in force.',
            narrative3: 'In the ensuing battle, Heracles was forced to kill Hippolyta to get the belt, though some versions say she survived and it was her sister Antiope who died. The Greeks fought their way back to their ship with heavy losses. Theseus abducted an Amazon (Antiope or Hippolyta, depending on the version), which would later lead to an Amazon invasion of Athens. The belt was duly delivered to Admete, but the labour showed how divine interference could turn diplomacy into tragedy.',
            challenge: 'Retrieve the war belt of Hippolyta, Queen of the Amazons, a gift from Ares. Required traveling to the edge of the known world.',
            solution: 'Initially diplomatic success, but Hera disguised herself and turned the Amazons against him. Heracles had to fight and kill Hippolyta for the belt.',
            significance: 'Showed that even peaceful solutions could be sabotaged by divine interference. Led to future conflict between Athens and Amazons.',
            metope: 'west'
        },
        {
            number: 10,
            name: 'Cattle of Geryon',
            icon: '🐄',
            location: 'Erytheia, far western edge',
            narrative: 'This labour required Heracles to travel to the very edge of the world, to the island of Erytheia in the far western ocean. There lived Geryon, a giant with three bodies joined at the waist, making him the strongest mortal alive. He owned a herd of magnificent red cattle, guarded by the herdsman Eurytion and the two-headed dog Orthrus, brother to Cerberus.',
            narrative2: 'The journey itself was epic. When Heracles reached the straits between Europe and Africa, he set up the Pillars of Heracles (Rock of Gibraltar and Jebel Musa) to mark the edge of the civilised world. The heat of the African sun angered him so much that he shot an arrow at Helios. The sun god, impressed by his audacity, lent him the golden cup he used to sail across the ocean each night. Heracles used this cup to reach Erytheia.',
            narrative3: 'On the island, Heracles first killed Orthrus with his club, then Eurytion. When Geryon heard of this and came to fight, Heracles shot him through all three bodies with a single arrow. The return journey with the cattle was fraught with adventures across Europe - thieves, monsters, and gods all tried to steal the magnificent herd. When he finally delivered them to Eurystheus, they were sacrificed to Hera.',
            challenge: 'Steal the red cattle of Geryon, a three-bodied giant, from the edge of the world. Guarded by a two-headed dog and giant herdsman.',
            solution: 'Heracles travelled to the edge of the world in Helios\' golden cup, killed Geryon with an arrow through all three bodies, and drove the cattle back through Europe.',
            significance: 'Set up the Pillars of Heracles (Gibraltar) marking the edge of the world. Showed heroism expanding the boundaries of the known world.',
            metope: 'east'
        },
        {
            number: 11,
            name: 'Apples of Hesperides',
            icon: '🍎',
            location: 'Garden of Hesperides, far west',
            narrative: 'The golden apples grew in a garden at the edge of the world, a wedding gift from Gaia to Hera. They were tended by the Hesperides, daughters of the evening, and guarded by Ladon, an immortal dragon with a hundred heads that never slept. No mortal knew where this garden was located, adding another layer of difficulty to an already impossible task.',
            narrative2: 'Heracles first had to find the garden. He captured the sea-god Nereus, the Old Man of the Sea, and held him despite his shape-shifting until he revealed the location. On his journey, Heracles freed Prometheus from his eternal torment, killing the eagle that daily ate his liver. In gratitude, Prometheus advised him not to pick the apples himself but to get Atlas to do it.',
            narrative3: 'Atlas, who held up the sky, was the father of the Hesperides. Heracles offered to hold the sky while Atlas fetched the apples. Atlas agreed, relieved to be free of his burden. When Atlas returned with the apples, he suggested that he could deliver them himself while Heracles continued to hold the sky. Heracles pretended to agree but asked Atlas to hold the sky for just a moment while he adjusted his cloak as padding. When Atlas took back the sky, Heracles picked up the apples and left. The apples were later returned to the garden by Athena, as they were too sacred to remain in mortal hands.',
            challenge: 'Fetch golden apples from a garden at the edge of the world, guarded by the dragon Ladon and the Hesperides nymphs. Location unknown.',
            solution: 'Heracles held up the sky while Atlas fetched the apples, then tricked Atlas into taking the sky back by asking for help adjusting his cloak.',
            significance: 'Literally supported the heavens, proving divine-level strength. Showed that cleverness was as important as strength against titans.',
            metope: 'east'
        },
        {
            number: 12,
            name: 'Cerberus',
            icon: '🐺',
            location: 'The Underworld',
            narrative: 'The final labour was the most impossible of all: descend to the Underworld and bring back Cerberus, the three-headed hound that guarded the gates of the dead. This monstrous dog had a serpent for a tail and snakes growing from his back. His job was to prevent the living from entering and the dead from leaving. To attempt this labour was to challenge death itself.',
            narrative2: 'Heracles first underwent initiation into the Eleusinian Mysteries to learn how to enter and exit the Underworld safely. Guided by Hermes and Athena, he descended through the cave at Taenarum. The shades of the dead fled from him in fear, except for Meleager and Medusa. He even wrestled Menoetes, herdsman of Hades, breaking his ribs before Persephone intervened.',
            narrative3: 'When Heracles reached the throne of Hades and asked to borrow Cerberus, the god of the dead agreed on one condition: Heracles must subdue the beast using no weapons, only his bare hands. Heracles found Cerberus at the gates of Acheron, wrapped his arms around all three heads at once, and squeezed until the beast submitted, despite being bitten by the serpent tail. He carried Cerberus to the surface, where the hell-hound\'s drool created the poisonous plant aconite. After showing the beast to the terrified Eurystheus (who hid in his jar as usual), Heracles returned Cerberus to the Underworld, having conquered death itself.',
            challenge: 'Bring back Cerberus, the three-headed guardian of the underworld, alive and without using weapons. To challenge death itself.',
            solution: 'With divine guidance from Hermes and Athena, Heracles wrestled Cerberus into submission with his bare hands and brought him to Eurystheus.',
            significance: 'Conquered death itself - the ultimate heroic achievement. Proved Heracles worthy of immortality. Even Hades respected his strength.',
            metope: 'east'
        }
    ],

    // Metope Details for Modal
    metopeDetails: {
        1: {
            title: "The Nemean Lion",
            location: "Nemea, northeast Peloponnese",
            description: "This metope shows the climactic moment when Heracles strangles the invulnerable lion with his bare hands. The sculpture captures the intense physical struggle, with Heracles' muscles straining as he applies the fatal chokehold.",
            analysis: "The artist emphasized Heracles' divine strength through exaggerated musculature and the lion's massive size. This was placed prominently as it represented the beginning of Heracles' heroic transformation."
        },
        2: {
            title: "The Lernaean Hydra",
            location: "Lake Lerna, near Argos",
            description: "The metope depicts Heracles wielding his club while Iolaus tends the fire used to cauterize the Hydra's necks. Multiple serpentine heads writhe around the hero, showing the creature's regenerative horror.",
            analysis: "This sculpture teaches that even heroes need help - a humble lesson for competitive athletes. The collaborative nature of this labour made it controversial when Eurystheus discounted it."
        },
        3: {
            title: "Ceryneian Hind",
            location: "Ceryneia, Achaea",
            description: "Unlike the violent monster-slaying scenes, this metope shows Heracles gently carrying the sacred deer. The hind's golden antlers are carefully rendered, emphasizing its divine nature and beauty.",
            analysis: "This labour required patience and restraint rather than violence - important virtues for athletes who needed self-control. The peaceful resolution shows wisdom triumphing over brute force."
        },
        4: {
            title: "Erymanthian Boar",
            location: "Mount Erymanthus, Arcadia",
            description: "Heracles is shown wrestling the massive boar in deep snow, his powerful frame contrasted against the beast's tusked fury. The sculpture captures the moment of the hero's victory through superior technique.",
            analysis: "The snowy mountain setting adds environmental challenge to physical contest - like athletes competing in harsh conditions. The boar's capture alive showed mastery over nature."
        },
        5: {
            title: "Augean Stables",
            location: "Elis, western Peloponnese",
            description: "This unique metope shows Heracles redirecting river water through the stables. Rather than depicting muscle, it celebrates intelligence and engineering - the mind conquering what strength alone could not.",
            analysis: "Placed at Olympia (in Elis), this labour had special local significance. It demonstrated that cleverness could achieve what seemed impossible - inspiring athletes to use strategy as well as strength."
        },
        6: {
            title: "Stymphalian Birds",
            location: "Lake Stymphalia, Arcadia",
            description: "Heracles is shown with the bronze castanets given by Athena, driving the man-eating birds from their marsh. The sculptor depicted the birds in mid-flight, creating dynamic movement across the stone.",
            analysis: "Divine assistance through Athena's gift taught that the gods favor those who earn their help through previous deeds. Athletes understood they needed divine blessing alongside training."
        },
        7: {
            title: "Cretan Bull",
            location: "Crete",
            description: "The metope captures Heracles wrestling the fire-breathing bull, his lion-skin cloak flowing behind him. The bull's divine power is shown through its imposing size and fierce expression.",
            analysis: "This labour marked Heracles' expansion beyond the Peloponnese. For Olympic visitors from across Greece, it showed heroism had no geographic limits - the games truly were Panhellenic."
        },
        8: {
            title: "Mares of Diomedes",
            location: "Thrace",
            description: "A tragic scene showing the aftermath of the horses' rampage, with Heracles mourning his friend Abderus. The man-eating mares are depicted with wild eyes and bared teeth, emphasizing their unnatural savagery.",
            analysis: "This metope introduced the theme of heroic loss - even success can carry tragic cost. Athletes learned that victory sometimes requires painful sacrifice."
        },
        9: {
            title: "Belt of Hippolyta",
            location: "Themiscyra, land of the Amazons",
            description: "The sculpture shows the climactic battle with the Amazons, Heracles fighting the warrior queen while her army charges. The dynamic composition emphasizes the chaos of battle and Hera's cruel interference.",
            analysis: "This labour warned against trusting appearances - what seemed like diplomacy became warfare through divine manipulation. Athletes learned to expect unexpected challenges."
        },
        10: {
            title: "Cattle of Geryon",
            location: "Erytheia, far western edge of the world",
            description: "Heracles faces the three-bodied monster Geryon while driving the red cattle. The sculptor showed all three of Geryon's bodies to emphasize the creature's supernatural nature and the labour's difficulty.",
            analysis: "Reaching the edge of the world, Heracles established the Pillars of Heracles (Gibraltar). This labour showed heroism expanding the boundaries of the known world - like Olympic competition spreading Greek culture."
        },
        11: {
            title: "Apples of the Hesperides",
            location: "Garden of the Hesperides, far west",
            description: "The famous scene of Atlas returning with the golden apples while Heracles holds up the sky. The sculptor captured the moment of Atlas's attempted deception and Heracles' patient endurance.",
            analysis: "Literally supporting the heavens proved Heracles had divine-level strength. The clever trick with Atlas showed that even heroes must use wit against superior opponents - brain over brawn."
        },
        12: {
            title: "Cerberus",
            location: "The Underworld",
            description: "The final metope shows Heracles emerging from the Underworld with the three-headed Cerberus. The hellhound is subdued but still fearsome, while Heracles appears calm and victorious.",
            analysis: "Conquering death itself was the ultimate heroic achievement. For athletes at Olympia, this represented the pinnacle of human achievement - victory over the impossible through divine favor and personal excellence."
        }
    },

    // Temple Metopes
    westMetopes: [1, 2, 6, 7, 3, 9],
    eastMetopes: [4, 8, 10, 11, 12, 5],

    // Olympic Facts
    olympicFacts: [
        {
            icon: '🏃',
            title: 'The Sacred Grove',
            description: 'After completing his labours, Heracles established the Olympic Games at Olympia to honour his father Zeus. He marked out the sacred Altis grove and established the stadium.'
        },
        {
            icon: '📏',
            title: 'The Stadium',
            description: 'Heracles measured out the original stadium length - 600 feet - by placing one foot in front of the other. This is why a stadium (stadion) became a standard Greek measurement.'
        },
        {
            icon: '🌿',
            title: 'The Sacred Olive',
            description: 'Heracles brought the wild olive from the land of the Hyperboreans to Olympia. Winners received crowns made from its branches - the most prestigious prize in the Greek world.'
        },
        {
            icon: '🏆',
            title: 'The First Competition',
            description: 'Heracles challenged his four brothers to a race and crowned the winner with an olive wreath, establishing the tradition of athletic competition in honour of the gods.'
        }
    ],

    // Significance Themes
    significanceThemes: [
        {
            title: 'Personal Redemption',
            text: 'The labours transformed Heracles from a man guilty of killing his family into a purified hero. Each labour represented a step from guilt to redemption.'
        },
        {
            title: 'Civilising Force',
            text: 'By defeating monsters and clearing dangerous beasts, Heracles made the world safer for humanity. He represents civilisation triumphing over chaos.'
        },
        {
            title: 'Geographic Scope',
            text: 'The labours expanded from local Peloponnesian challenges to the edges of the earth and even the Underworld, showing universal heroism.'
        },
        {
            title: 'Divine Testing',
            text: 'Though initiated by Hera\'s hatred, the labours ultimately proved Heracles worthy of divinity. He earned his place among the gods.'
        }
    ],

    // Key Figures
    figures: {
        'hera': {
            name: 'Hera',
            role: 'Queen of the gods, persecutor of Heracles',
            significance: 'Her jealousy drove the entire narrative. The labours were both her punishment and ultimately the path to Heracles\' glory.'
        },
        'eurystheus': {
            name: 'King Eurystheus',
            role: 'Heracles\' cowardly taskmaster',
            significance: 'Heracles\' cousin who inherited the kingship meant for Heracles. His cowardice (hiding in a bronze jar) provided comic relief.'
        },
        'iolaus': {
            name: 'Iolaus',
            role: 'Heracles\' nephew and companion',
            significance: 'Helped with the Hydra by cauterising the necks. His assistance caused Eurystheus to discount this labour.'
        },
        'atlas': {
            name: 'Atlas',
            role: 'Titan who holds up the sky',
            significance: 'Heracles temporarily took his burden during the eleventh labour, literally supporting the heavens.'
        }
    },

    // Places
    places: {
        'delphi': {
            name: 'Oracle at Delphi',
            description: 'The most important oracle in ancient Greece.',
            significance: 'Where Heracles received the command to serve Eurystheus and perform the labours as penance.'
        },
        'nemea': {
            name: 'Nemea',
            description: 'Valley in the northeastern Peloponnese.',
            significance: 'Site of the first labour. Later hosted the Nemean Games, one of the four Panhellenic festivals.'
        },
        'olympia': {
            name: 'Olympia',
            description: 'Sanctuary of Zeus in the western Peloponnese.',
            significance: 'Where Heracles founded the Olympic Games. The Temple of Zeus displayed his labours in its metopes.'
        },
        'underworld': {
            name: 'The Underworld',
            description: 'Realm of the dead ruled by Hades.',
            significance: 'The ultimate destination - capturing Cerberus proved Heracles could conquer even death itself.'
        }
    }
};

// Load functions
function loadLessonData() {
    loadLearningObjectives();
    loadLabourCategories();
    loadLaboursTimeline();
    loadTempleMetopes();
    loadOlympicFacts();
    loadSignificanceThemes();
}

function loadLearningObjectives() {
    const container = document.getElementById('learning-objectives');
    if (container) {
        let html = `<p>${lessonData.learningObjectives.intro}</p><ul>`;
        lessonData.learningObjectives.objectives.forEach(obj => {
            html += `<li>${obj}</li>`;
        });
        html += '</ul>';
        container.innerHTML = html;
    }
}

function loadLabourCategories() {
    const container = document.getElementById('labour-categories');
    if (container) {
        container.innerHTML = lessonData.categories.map(cat => `
            <div class="category-card">
                <div class="category-icon">${cat.icon}</div>
                <div class="category-title">${cat.title}</div>
                <div class="category-count">${cat.count}</div>
            </div>
        `).join('');
    }
}

function loadLaboursTimeline() {
    const container1to6 = document.getElementById('labours-1-6');
    const container7to12 = document.getElementById('labours-7-12');
    
    if (container1to6) {
        container1to6.innerHTML = lessonData.labours.slice(0, 6).map(labour => `
            <div class="timeline-labour" onclick="showLabourDetail(${labour.number})">
                <div class="timeline-labour-number">${labour.number}</div>
                <div class="timeline-labour-icon">${labour.icon}</div>
                <div class="timeline-labour-name">${labour.name}</div>
            </div>
        `).join('');
    }
    
    if (container7to12) {
        container7to12.innerHTML = lessonData.labours.slice(6, 12).map(labour => `
            <div class="timeline-labour" onclick="showLabourDetail(${labour.number})">
                <div class="timeline-labour-number">${labour.number}</div>
                <div class="timeline-labour-icon">${labour.icon}</div>
                <div class="timeline-labour-name">${labour.name}</div>
            </div>
        `).join('');
    }
}

function loadTempleMetopes() {
    const westContainer = document.getElementById('west-metopes');
    const eastContainer = document.getElementById('east-metopes');
    
    if (westContainer) {
        westContainer.innerHTML = lessonData.westMetopes.map(num => {
            const labour = lessonData.labours.find(l => l.number === num);
            return `
                <div class="metope" onclick="showMetopeModal(${num})" title="${labour.name}">
                    <img src="../../images/labour${num}.jpg" alt="${labour.name} metope" class="metope-image">
                    <div class="metope-tooltip">${labour.name}</div>
                </div>
            `;
        }).join('');
    }
    
    if (eastContainer) {
        eastContainer.innerHTML = lessonData.eastMetopes.map(num => {
            const labour = lessonData.labours.find(l => l.number === num);
            return `
                <div class="metope" onclick="showMetopeModal(${num})" title="${labour.name}">
                    <img src="../../images/labour${num}.jpg" alt="${labour.name} metope" class="metope-image">
                    <div class="metope-tooltip">${labour.name}</div>
                </div>
            `;
        }).join('');
    }
}

function loadOlympicFacts() {
    const container = document.getElementById('olympic-facts');
    if (container) {
        container.innerHTML = lessonData.olympicFacts.map(fact => `
            <div class="olympic-fact">
                <div class="olympic-icon">${fact.icon}</div>
                <div class="olympic-title">${fact.title}</div>
                <div class="olympic-description">${fact.description}</div>
            </div>
        `).join('');
    }
}

function loadSignificanceThemes() {
    const container = document.getElementById('significance-grid');
    if (container) {
        container.innerHTML = lessonData.significanceThemes.map(theme => `
            <div class="significance-card">
                <div class="significance-title">${theme.title}</div>
                <div class="significance-text">${theme.text}</div>
            </div>
        `).join('');
    }
}

// Interactive Functions
let exploredLabours = new Set();

function showLabourDetail(labourNum) {
    const labour = lessonData.labours.find(l => l.number === labourNum);
    const detailBox = document.getElementById('labour-detail-box');
    
    if (labour && detailBox) {
        // Mark as explored
        exploredLabours.add(labourNum);
        updateProgress();
        
        // Update active states
        document.querySelectorAll('.timeline-labour').forEach(el => {
            el.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        
        // Show detail with full narrative and reveal buttons
        detailBox.innerHTML = `
            <div class="labour-detail-header">
                <div class="labour-detail-number">${labour.number}</div>
                <div class="labour-detail-info">
                    <h4>${labour.name}</h4>
                    <div class="labour-detail-location">📍 ${labour.location}</div>
                </div>
            </div>
            
            <div class="labour-detail-narrative">
                <p>${labour.narrative}</p>
                ${labour.narrative2 ? `<p>${labour.narrative2}</p>` : ''}
                ${labour.narrative3 ? `<p>${labour.narrative3}</p>` : ''}
            </div>
            
            <button class="reveal-button" onclick="revealDifficulty(this)">
                Reveal Chief Difficulty ⬇
            </button>
            <div class="reveal-content difficulty">
                <div class="reveal-label">Chief Difficulty</div>
                <div>${labour.challenge}</div>
            </div>
            
            <button class="reveal-button" onclick="revealSolution(this)">
                Reveal How Heracles Succeeded ⬇
            </button>
            <div class="reveal-content solution">
                <div class="reveal-label">How Heracles Succeeded</div>
                <div>${labour.solution}</div>
            </div>
            
            <button class="reveal-button" onclick="revealSignificance(this)">
                Reveal Significance ⬇
            </button>
            <div class="reveal-content significance">
                <div class="reveal-label">Significance</div>
                <div>${labour.significance}</div>
            </div>
        `;
        detailBox.classList.add('active');
    }
}

function revealDifficulty(button) {
    button.classList.add('revealed');
    button.nextElementSibling.classList.add('revealed');
}

function revealSolution(button) {
    button.classList.add('revealed');
    button.nextElementSibling.classList.add('revealed');
}

function revealSignificance(button) {
    button.classList.add('revealed');
    button.nextElementSibling.classList.add('revealed');
}

function showMetopeModal(labourNum) {
    const metope = lessonData.metopeDetails[labourNum];
    const modal = document.getElementById('metopeModal');
    const modalContent = document.getElementById('metopeModalContent');
    
    if (metope && modal && modalContent) {
        modalContent.innerHTML = `
            <div class="metope-detail-header">
                <div class="metope-detail-number">${labourNum}</div>
                <div class="metope-detail-title">
                    <h3>${metope.title}</h3>
                    <div class="metope-detail-location">📍 ${metope.location}</div>
                </div>
            </div>
            
            <img src="../../images/labour${labourNum}.jpg" alt="${metope.title} metope detail" class="metope-image-large">
            
            <div class="metope-description">
                <h4>The Sculpture</h4>
                <p>${metope.description}</p>
            </div>
            
            <div class="metope-analysis">
                <h4>Why This Labour at Olympia?</h4>
                <p>${metope.analysis}</p>
            </div>
        `;
        modal.style.display = 'block';
    }
}

function closeMetopeModal() {
    document.getElementById('metopeModal').style.display = 'none';
}

function updateProgress() {
    const total = lessonData.labours.length;
    const explored = exploredLabours.size;
    const percentage = (explored / total) * 100;
    
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    if (progressText) {
        if (explored === 0) {
            progressText.textContent = 'Click on labours to explore';
        } else if (explored === total) {
            progressText.textContent = 'All labours explored! 🏆';
        } else {
            progressText.textContent = `${explored} of ${total} labours explored`;
        }
    }
}

// Figure and Place Functions
function showFigureInfo(figureId) {
    const figure = lessonData.figures[figureId];
    if (figure) {
        showInfoPanel('Key Figure', `
            <h4>${figure.name}</h4>
            <p><strong>Role:</strong> ${figure.role}</p>
            <p><strong>Significance:</strong> ${figure.significance}</p>
        `);
    }
}

function showPlaceInfo(placeId) {
    const place = lessonData.places[placeId];
    if (place) {
        showInfoPanel('Key Place', `
            <h4>${place.name}</h4>
            <p><strong>Description:</strong> ${place.description}</p>
            <p><strong>Significance:</strong> ${place.significance}</p>
        `);
    }
}

function showInfoPanel(title, content) {
    const infoContent = document.getElementById('info-content');
    if (infoContent) {
        infoContent.innerHTML = `
            <h4 style="color: #dc3545; margin-bottom: 0.5rem;">${title}</h4>
            ${content}
        `;
    }
}

// Navigation
function navigateToLesson(path) {
    window.location.href = path + '.html';
}

// Modal functions
function showInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Window click handler for modals
window.onclick = function(event) {
    const infoModal = document.getElementById('infoModal');
    const metopeModal = document.getElementById('metopeModal');
    
    if (event.target === infoModal) {
        closeInfoModal();
    }
    if (event.target === metopeModal) {
        closeMetopeModal();
    }
}
