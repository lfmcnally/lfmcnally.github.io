// Analysis data for Virgil Aeneid II.57-76 interactive text
const textData = {
    "ecce-dramatic": {
        title: "ecce",
        translation: "look!",
        device: "Dramatic Interjection",
        description: "Sudden attention-grabber shifting scene - from Laocoon's warning to new drama.",
        effect: "Jerks reader's attention to new threat - danger arrives while truth still echoes."
    },
    
    "manus-revinctum": {
        title: "manus...post terga revinctum",
        translation: "hands bound behind back",
        device: "Physical Helplessness",
        description: "Detailed description of bondage - emphasises apparent vulnerability.",
        effect: "Visual proof of harmlessness - bound hands can't hold weapons (but tongue still free)."
    },
    
    "pastores-shepherds": {
        title: "pastores",
        translation: "shepherds",
        device: "Rustic Captors",
        description: "Simple shepherds, not soldiers, make the capture - suggests ease and accident.",
        effect: "Makes capture seem unplanned, innocent - not military operation but chance encounter."
    },
    
    "magno-clamore": {
        title: "magno...clamore",
        translation: "with great shouting",
        device: "Noise and Commotion",
        description: "Loud announcement of capture - drawing attention and crowds.",
        effect: "Ensures maximum audience for Sinon's performance - publicity essential for deception."
    },
    
    "trahebant-dragging": {
        title: "trahebant",
        translation: "were dragging",
        device: "Forceful Movement",
        description: "Imperfect tense shows ongoing rough treatment - prisoner being manhandled.",
        effect: "Emphasises Sinon's apparent victim status - dragged not walking."
    },
    
    "dardanidae-trojans": {
        title: "Dardanidae",
        translation: "Trojans",
        device: "Epic Name",
        description: "Formal epic patronymic from ancestor Dardanus - elevated register.",
        effect: "Adds epic gravity to scene of deception - noble Trojans about to be fooled."
    },
    
    "qui-se": {
        title: "qui se ignotum...ultro",
        translation: "who himself unknown...willingly",
        device: "Deliberate Surrender",
        description: "'Ultro' (willingly) reveals this was no accident - planned capture.",
        effect: "Dramatic irony - readers know what Trojans don't: he wanted to be caught."
    },
    
    "hoc-ipsum": {
        title: "hoc ipsum ut strueret",
        translation: "for this very purpose to build",
        device: "Purpose Revealed",
        description: "Narrator exposes the plan - 'this very thing' was always the goal.",
        effect: "Removes suspense about intentions - we watch knowing the trap."
    },
    
    "troiam-aperiret": {
        title: "Troiamque aperiret Achivis",
        translation: "open Troy to Greeks",
        device: "Blunt Statement",
        description: "Direct statement of treacherous intent - opening the city to enemies.",
        effect: "Stark clarity of purpose - not just deceive but literally open the gates."
    },
    
    "fidens-animi": {
        title: "fidens animi",
        translation: "confident in spirit",
        device: "Inner Confidence",
        description: "Genitive of respect - confidence despite apparent helplessness.",
        effect: "Contrast between outer weakness and inner strength - actor in control."
    },
    
    "in-utrumque": {
        title: "in utrumque paratus",
        translation: "prepared for either",
        device: "Double Preparedness",
        description: "Ready for both success and death - ultimate commitment.",
        effect: "Makes him seem truthful - liars don't usually accept death as option."
    },
    
    "seu-seu": {
        title: "seu versare dolos seu...morti",
        translation: "either turn tricks or...death",
        device: "Epic Alternative",
        description: "Double 'seu' presents stark alternatives - deceive or die.",
        effect: "Life-or-death stakes make performance convincing - total commitment."
    },
    
    "undique-visendi": {
        title: "undique visendi studio",
        translation: "from all sides with eagerness to see",
        device: "Crowd Curiosity",
        description: "Universal desire to gawk - human fascination with prisoners.",
        effect: "Fatal curiosity draws them in - wanting to see becomes being deceived."
    },
    
    "troiana-iuventus": {
        title: "Troiana iuventus",
        translation: "Trojan youth",
        device: "Collective Character",
        description: "The young men as group - hot-headed and cruel in victory.",
        effect: "Youth's overconfidence becomes vulnerability - mockery blinds them to danger."
    },
    
    "circumfusa-ruit": {
        title: "circumfusa ruit",
        translation: "poured around",
        device: "Liquid Metaphor",
        description: "Crowd flows like liquid around prisoner - surrounding completely.",
        effect: "Sinon becomes centre of attention - exactly where he needs to be."
    },
    
    "certant-inludere": {
        title: "certantque inludere capto",
        translation: "compete to mock the captive",
        device: "Competitive Cruelty",
        description: "Making sport of prisoner - cruelty as entertainment.",
        effect: "Overconfidence through mockery - the mocker cannot suspect the mocked."
    },
    
    "accipe-nunc": {
        title: "accipe nunc",
        translation: "receive now",
        device: "Direct Address",
        description: "Aeneas addresses his audience directly - pay attention to this.",
        effect: "Breaking narrative to editorialise - 'watch this treachery unfold'."
    },
    
    "danaum-insidias": {
        title: "Danaum insidias",
        translation: "Greek treachery",
        device: "Thematic Statement",
        description: "Names the theme explicitly - this is about Greek deception.",
        effect: "No ambiguity - we're watching treachery, not tragedy."
    },
    
    "crimine-uno": {
        title: "crimine ab uno",
        translation: "from one crime",
        device: "Synecdoche",
        description: "One crime represents all - Sinon embodies Greek treachery.",
        effect: "Universal lesson from particular example - one liar reveals all liars."
    },
    
    "disce-omnes": {
        title: "disce omnes",
        translation: "learn all",
        device: "Bitter Lesson",
        description: "Imperative to learn - Aeneas teaching through experience.",
        effect: "Pedagogy of disaster - Troy's fall becomes Rome's education."
    },
    
    "conspectu-medio": {
        title: "conspectu in medio",
        translation: "in middle of sight",
        device: "Centre Stage",
        description: "Placed centrally for maximum visibility - perfect position for performance.",
        effect: "All eyes on him - theatrical positioning for maximum impact."
    },
    
    "turbatus-inermis": {
        title: "turbatus, inermis",
        translation: "confused, unarmed",
        device: "Double Vulnerability",
        description: "Mental and physical helplessness - confused mind, no weapons.",
        effect: "Complete harmlessness performed - how could such weakness threaten?"
    },
    
    "constitit-stood": {
        title: "constitit",
        translation: "stood still",
        device: "Frozen Moment",
        description: "Perfect tense - he stops, creating dramatic pause.",
        effect: "Stillness draws attention - motion stops, performance begins."
    },
    
    "oculis-circumspexit": {
        title: "oculis...circumspexit",
        translation: "looked around with eyes",
        device: "Theatrical Gesture",
        description: "Elaborate looking around - performing confusion and fear.",
        effect: "Silent acting before speech - body language sets up words."
    },
    
    "heu-emotional": {
        title: "heu",
        translation: "alas",
        device: "Emotional Exclamation",
        description: "Traditional cry of lament - performed despair.",
        effect: "Immediate pathos - one syllable triggers sympathy."
    },
    
    "quae-tellus": {
        title: "quae nunc tellus",
        translation: "what land now",
        device: "Cosmic Homelessness",
        description: "No place on earth - universal exile performed.",
        effect: "Expands personal plight to cosmic scale - nowhere in universe to go."
    },
    
    "quae-aequora": {
        title: "quae me aequora",
        translation: "what seas me",
        device: "Parallel Despair",
        description: "Land and sea both reject - complete geographical exile.",
        effect: "No escape by land or sea - total hopelessness performed."
    },
    
    "quid-misero": {
        title: "quid...misero mihi",
        translation: "what for wretched me",
        device: "Self-Pity",
        description: "'Misero mihi' - dative of disadvantage emphasising wretchedness.",
        effect: "Maximum pathos through self-description - naming himself wretched."
    },
    
    "neque-apud": {
        title: "neque apud Danaos",
        translation: "not among Greeks",
        device: "First Rejection",
        description: "Claims rejection by his own people - Greek exile.",
        effect: "Makes him seem Greek traitor - enemy of our enemy seems friend."
    },
    
    "super-ipsi": {
        title: "super ipsi",
        translation: "moreover themselves",
        device: "Emphatic Addition",
        description: "'Super' adds weight, 'ipsi' emphasises Trojans specifically.",
        effect: "Piles on the despair - even you Trojans (who should pity) threaten."
    },
    
    "infensi-hostile": {
        title: "infensi",
        translation: "hostile",
        device: "Active Hostility",
        description: "Not just unwelcoming but actively hostile - aggressive rejection.",
        effect: "Transforms Trojans from mockers to threateners in his narrative."
    },
    
    "poenas-sanguine": {
        title: "poenas cum sanguine",
        translation: "punishment with blood",
        device: "Blood Penalty",
        description: "Death penalty explicitly stated - blood for blood.",
        effect: "Raises stakes to life-and-death - makes pity more urgent."
    },
    
    "quo-gemitu": {
        title: "quo gemitu",
        translation: "by which groan",
        device: "Emotional Turning Point",
        description: "Single groan changes everything - ablative of cause.",
        effect: "One sound reverses crowd psychology - groan as emotional weapon."
    },
    
    "conversi-animi": {
        title: "conversi animi",
        translation: "spirits turned",
        device: "Instant Reversal",
        description: "Perfect participle - complete transformation already achieved.",
        effect: "Immediate effect of performance - mockery becomes sympathy instantly."
    },
    
    "hortamur-fari": {
        title: "hortamur fari",
        translation: "we urge to speak",
        device: "Encouraged Confession",
        description: "From threats to encouragement - Trojans now want him to talk.",
        effect: "Victims encourage their destroyer - asking to hear the lies."
    },
    
    "quo-sanguine": {
        title: "quo sanguine cretus",
        translation: "from what blood born",
        device: "Genealogical Question",
        description: "Asking about lineage - standard ancient identity question.",
        effect: "Seeking to categorise him - ironic since his identity is pure fiction."
    },
    
    "quae-fiducia": {
        title: "quae sit fiducia capto",
        translation: "what confidence for captive",
        device: "Ironic Question",
        description: "What confidence can a prisoner have? - they don't suspect his confidence.",
        effect: "Dramatic irony - he has total confidence in his deception."
    },
    
    "deposita-formidine": {
        title: "deposita tandem formidine",
        translation: "fear finally put aside",
        device: "Performed Courage",
        description: "Ablative absolute - fear supposedly overcome to speak truth.",
        effect: "False reluctance overcome - makes lies seem like difficult truth."
    },
    
    "theatrical-performance": {
        title: "turbatus...circumspexit",
        translation: "confused...looked around",
        device: "Stage Directions",
        description: "Physical performance before verbal - body language sets scene.",
        effect: "Silent acting precedes speech - audience drawn in before words begin."
    },
    
    "calculated-weakness": {
        title: "manus...revinctum...inermis",
        translation: "hands bound...unarmed",
        device: "Weaponised Weakness",
        description: "Every detail of helplessness carefully presented.",
        effect: "Vulnerability as strategy - weakness disarms suspicion."
    },
    
    "crowd-reversal": {
        title: "conversi animi compressus",
        translation: "spirits turned, checked",
        device: "Mass Psychology",
        description: "Entire crowd mood shifts simultaneously - mob emotion.",
        effect: "Shows dangerous volatility of crowds - instant emotional reversal."
    },
    
    "false-exile": {
        title: "neque apud Danaos...Dardanidae",
        translation: "not among Greeks...Trojans",
        device: "Double Rejection",
        description: "Claims both sides reject him - man without country.",
        effect: "Creates sympathy through universal rejection - outcast from all humanity."
    },
    
    "prepared-death": {
        title: "certae occumbere morti",
        translation: "meet certain death",
        device: "Death Acceptance",
        description: "Willing to die for mission - ultimate commitment.",
        effect: "Willingness to die makes lies credible - truth-tellers die, liars flee."
    }
};
