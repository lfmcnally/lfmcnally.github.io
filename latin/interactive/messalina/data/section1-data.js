// Vocabulary data for translation numbers
const vocabData = {
    "messalina": "Messalina (name)",
    "incensa-est": "was inflamed",
    "novo": "new",
    "et": "and",
    "quasi": "almost",
    "insano": "insane",
    "amore": "love",
    "c-silium": "Gaius Silius (name)",
    "iuventutis": "of youth",
    "romanae": "Roman",
    "pulcherrimum": "most handsome",
    "exarserat": "had burned with love",
    "iuniam": "Junia (name)",
    "silanam": "Silana (name)",
    "nobilem": "noble",
    "feminam": "woman",
    "matrimonio": "from marriage",
    "eius": "his",
    "exturbaret": "drove out",
    "liberoque": "and free",
    "adultero": "adulterer",
    "potiretur": "take possession of"
};

// Literary analysis data for style highlighting
const section1Data = {
    "messalina-intro": {
        title: "Messalina",
        translation: "The empress Messalina",
        device: "Character Introduction",
        description: "Opening with her name immediately establishes her as the focus and sets up her agency in the narrative.",
        effect: "Tacitus places Messalina at the center of the action from the very first word, emphasising her role as the driving force behind the scandal."
    },
    
    "novo-insano": {
        title: "novo et quasi insano amore",
        translation: '"with a new and almost insane love"',
        device: "Alliteration + Hyperbole",
        description: "The repetition of 'n' sounds (novo...insano) creates alliteration, while 'quasi insano' uses hyperbole to emphasise the extremity of her passion.",
        effect: "The alliteration makes the phrase memorable and rhythmic, while the hyperbole immediately signals that this is not ordinary love but dangerous obsession that will lead to disaster."
    },
    
    "incensa": {
        title: "incensa est",
        translation: '"was inflamed/set on fire"',
        device: "Metaphor",
        description: "Fire imagery suggests passion that burns out of control and destroys everything in its path.",
        effect: "The fire metaphor foreshadows destruction and suggests Messalina's passion is dangerous and consuming, setting the tone for the tragic events to follow."
    },
    
    "silius": {
        title: "C. Silium",
        translation: '"Gaius Silius"',
        device: "Historical Figure",
        description: "Gaius Silius was a real Roman politician and the object of Messalina's obsession. He was the consul-elect for the next year.",
        effect: "Using his full formal name (praenomen + nomen) gives gravity and historical authenticity to the account."
    },
    
    "superlative": {
        title: "iuventutis Romanae pulcherrimum", 
        translation: '"the most handsome of Roman youth"',
        device: "Superlative",
        description: "'pulcherrimum' is the superlative form of 'pulcher' (beautiful/handsome).",
        effect: "The superlative emphasises Silius's exceptional attractiveness (a real hottie!), explaining why Messalina became so obsessed and making her actions seem more understandable (though not excusable)."
    },
    
    "exarserat": {
        title: "exarserat",
        translation: '"she had burned with love"',
        device: "Pluperfect + Fire Imagery", 
        description: "Continues the fire metaphor from 'incensa' - this burning had already occurred and intensified.",
        effect: "The pluperfect tense shows this passion had been building over time, while the fire imagery reinforces the dangerous, consuming nature of her obsession."
    },
    
    "result-clause": {
        title: "ut...exturbaret",
        translation: '"so that she drove out..."',
        device: "Result Clause",
        description: "'ut' + imperfect subjunctive shows the consequence of her burning passion.",
        effect: "The result clause emphasises how her obsession led directly to destructive actions - she destroyed another woman's marriage to get what she wanted."
    },
    
    "alliteration": {
        title: "liberoque adultero potiretur",  
        translation: '"and take possession of an unrestricted adulterer"',
        device: "Alliteration",
        description: "The 'p' sounds in 'potiretur' connect with 'pulcherrimum' earlier, creating sonic links.",
        effect: "'libero adultero' is almost oxymoronic - a 'free adulterer' suggests someone available for her exclusive use, showing her desire to possess him completely."
    }
};
