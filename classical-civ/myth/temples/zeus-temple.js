// Temple of Zeus at Olympia Data
const zeusTempleData = {
    name: "Temple of Zeus at Olympia",
    location: "Olympia, Elis, Greece",
    date: "470-456 BCE",
    architect: "Libon of Elis",
    style: "Doric",
    dedication: "Zeus Olympios",
    
    overview: {
        description: "The Temple of Zeus at Olympia was one of the most important temples in ancient Greece, housing the colossal chryselephantine statue of Zeus by Phidias - one of the Seven Wonders of the Ancient World. Built to commemorate Elis' victory over Pisa, it became the religious heart of the Olympic Games.",
        
        dimensions: {
            length: "64.12 meters",
            width: "27.68 meters",
            height: "20 meters (to pediment peak)",
            columns: "6 x 13 columns",
            columnHeight: "10.43 meters",
            columnDiameter: "2.25 meters (base)"
        },
        
        materials: "Local shell limestone (covered with white stucco), Parian marble (sculptures), Pentelic marble (roof tiles)",
        
        significance: [
            "Housed Phidias' 13-meter tall gold and ivory statue of Zeus",
            "Perfect example of mature Doric style",
            "Religious center of the Olympic Games",
            "Displayed Heracles' twelve labours in its metopes"
        ]
    },
    
    decorations: {
        "east-pediment": {
            title: "East Pediment - The Chariot Race",
            date: "470-456 BCE",
            dimensions: "26m wide x 3.3m high (center)",
            
            description: "The east pediment, facing the altar and rising sun, depicts the tense moment before the fateful chariot race between Pelops and King Oinomaos for the hand of Hippodameia.",
            
            composition: {
                center: "Zeus stands as divine arbiter between the two competitors",
                left: "Pelops with Hippodameia",
                right: "Oinomaos with his wife Sterope",
                corners: "Chariots, servants, and reclining river gods (Alpheios and Kladeos)"
            },
            
            narrative: "This scene captures the moment of divine intervention in human affairs. Pelops would win through trickery (bribing Oinomaos' charioteer to replace the lynch pins with wax), founding the dynasty that would rule the Peloponnese. The static composition creates psychological tension.",
            
            style: "Severe Style (Early Classical) - rigid, formal poses with psychological intensity rather than physical action",
            
            significance: [
                "Legitimized Elis' control over Olympia through mythological precedent",
                "Emphasized Zeus's role as overseer of oaths and justice",
                "Connected the Olympic Games to heroic mythology",
                "Showed consequences of hubris (Oinomaos had killed 13 previous suitors)"
            ]
        },
        
        "west-pediment": {
            title: "West Pediment - Centauromachy",
            date: "470-456 BCE",
            dimensions: "26m wide x 3.3m high (center)",
            
            description: "The west pediment shows the battle between the Lapiths and Centaurs at the wedding of Peirithoos, with Apollo as the central figure bringing divine order to chaos.",
            
            composition: {
                center: "Apollo stands with outstretched arm, commanding peace",
                sides: "Violent struggle between civilized Lapiths and wild Centaurs",
                action: "Centaurs attempting to abduct Lapith women",
                arrangement: "Symmetrical groups of intertwined figures"
            },
            
            narrative: "At the wedding feast of Peirithoos, the centaurs became drunk and attempted to carry off the Lapith women, including the bride. This violation of xenia (guest-friendship) prompted immediate retaliation. Apollo's presence ensures civilization's victory.",
            
            style: "More dynamic than east pediment - twisted poses, emotional expressions, and violent movement within the triangular frame",
            
            significance: [
                "Civilization (Lapiths/Greeks) versus Barbarism (Centaurs)",
                "Divine support for Greek values",
                "Consequence of violating sacred hospitality",
                "Apollo as bringer of order and justice"
            ]
        },
        
        "metopes": {
            title: "The Twelve Metopes - Labours of Heracles",
            date: "470-456 BCE",
            dimensions: "1.60m high x 1.50m wide each",
            totalNumber: 12,
            
            description: "The twelve metopes over the front and rear porches depicted all twelve labours of Heracles, the mythical founder of the Olympic Games. This was the only sculptural decoration on the exterior of the cella building.",
            
            arrangement: {
                eastPorch: [
                    "Nemean Lion",
                    "Lernaean Hydra", 
                    "Ceryneian Hind",
                    "Erymanthian Boar",
                    "Augean Stables",
                    "Stymphalian Birds"
                ],
                westPorch: [
                    "Cretan Bull",
                    "Mares of Diomedes",
                    "Belt of Hippolyta",
                    "Cattle of Geryon",
                    "Apples of the Hesperides",
                    "Cerberus"
                ]
            },
            
            artisticProgram: "The metopes showed Heracles' progression from local Peloponnesian labours to the edges of the world, matching the athlete's journey from local to panhellenic glory.",
            
            survivalStatus: "Most metopes are now in the Olympia Archaeological Museum, though many are fragmentary. The Augean Stables and Apples of the Hesperides are best preserved.",
            
            iconography: {
                heracles: "Shown beardless in early labours, bearded in later ones - showing maturation",
                athena: "Appears in several metopes as divine helper",
                composition: "Each metope is self-contained but part of larger narrative sequence"
            },
            
            significance: [
                "Heracles as founder of Olympic Games made him perfect for this temple",
                "Twelve labours = purification through effort (relevant to athletes)",
                "Geographic scope matches panhellenic nature of Olympics",
                "Shows that excellence requires divine support and human effort"
            ]
        },
        
        "cult-statue": {
            title: "Chryselephantine Statue of Zeus",
            artist: "Phidias",
            date: "435 BCE",
            height: "13 meters (43 feet)",
            materials: "Gold, ivory, ebony, precious stones",
            
            description: "The colossal seated figure of Zeus was one of the Seven Wonders of the Ancient World. Phidias created it in his workshop at Olympia using the chryselephantine technique - gold drapery over a wooden core with ivory for flesh parts.",
            
            appearance: {
                pose: "Seated on elaborate throne",
                rightHand: "Held Nike (Victory) figure",
                leftHand: "Held scepter topped with eagle",
                head: "Olive wreath crown",
                throne: "Decorated with mythological scenes, ebony, gold, and precious stones"
            },
            
            construction: "Built in sections in Phidias' workshop (archaeologically confirmed), then assembled inside temple",
            
            impact: "Pausanias wrote that the statue added something to traditional religion - those who saw it could no longer imagine Zeus in any other way",
            
            fate: "Removed to Constantinople in 394 CE, destroyed by fire in 462 CE",
            
            significance: [
                "Defined the visual conception of Zeus for centuries",
                "Demonstrated Greek ability to create the divine in material form",
                "Made Olympia a major pilgrimage destination",
                "Showed Zeus as both powerful ruler and benevolent father"
            ]
        }
    },
    
    architecture: {
        order: "Doric",
        plan: "Peripteral (surrounded by columns)",
        
        layout: {
            pronaos: "Front porch (east)",
            naos: "Main chamber housing cult statue",
            opisthodomos: "Rear porch (west)",
            peristyle: "6 x 13 columns surrounding cella"
        },
        
        innovations: [
            "Use of ramps instead of steps for accessibility",
            "Interior two-story colonnade to support roof and frame statue",
            "Combination of limestone structure with marble sculpture"
        ],
        
        opticalRefinements: [
            "Slight curvature of stylobate",
            "Entasis (swelling) of columns",
            "Inward lean of columns",
            "Corner columns slightly thicker"
        ]
    },
    
    religiousFunction: {
        festivals: [
            "Olympic Games (every 4 years)",
            "Monthly sacrifices",
            "Victory dedications"
        ],
        
        rituals: [
            "Olympic victor sacrifices",
            "Oath-taking by athletes before games",
            "Consultation of Olympic oracle"
        ],
        
        offerings: "Winners dedicated statues, crowns, and armor. The temple treasury held countless dedications from across the Greek world."
    },
    
    historicalContext: {
        construction: "Built from spoils of Elis' victory over Pisa, asserting control over Olympic sanctuary",
        
        politicalMessage: "Demonstrated Elis' wealth and piety, legitimizing their administration of Olympics",
        
        destruction: "Damaged by earthquakes in 522 and 551 CE, stones later quarried for other buildings",
        
        rediscovery: "German excavations from 1875 revealed foundation and fallen sculptures"
    }
};
