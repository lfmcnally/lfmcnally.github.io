// PAVLS Analysis data for A Passage to Africa by George Alagiah
const textData = {
    // Opening - Setting the Scene
    "thousand-faces": {
        title: "a thousand hungry, lean, scared and betrayed faces",
        translation: "Accumulation of suffering",
        device: "Language - Accumulation",
        description: "List of four adjectives builds overwhelming picture of suffering. Each word adds another layer of misery.",
        effect: "Creates sense of scale and variety of suffering. 'Betrayed' suggests political dimension beyond physical suffering."
    },
    
    "but-there-is": {
        title: "but there is one I will never forget",
        translation: "Singular focus",
        device: "Structure - Contrast",
        description: "Shifts from thousand to one. Sets up the central narrative that will follow.",
        effect: "Creates anticipation and shows this one face had more impact than thousands. Frames entire piece."
    },
    
    // Setting the Location
    "back-of-beyond": {
        title: "a village in the back of beyond",
        translation: "Remote location",
        device: "Language - Colloquialism",
        description: "Informal phrase emphasises extreme remoteness and isolation.",
        effect: "Shows how far from help these people are. Colloquial tone makes it relatable to Western readers."
    },
    
    "aid-not-reached": {
        title: "a place the aid agencies had yet to reach",
        translation: "Beyond help",
        device: "Purpose - Context",
        description: "Explains why conditions are so extreme - no external help has arrived.",
        effect: "Emphasises abandonment and shows this is suffering without intervention or witness."
    },
    
    "practical-directions": {
        title: "Take the Badale Road for a few kilometres",
        translation: "Notebook directions",
        device: "Voice - Documentary",
        description: "Direct quotation from notebook shows reporter's practical, methodical approach.",
        effect: "Contrasts mundane directions with horror that awaits. Shows professional distance."
    },
    
    "ghost-village": {
        title: "like a ghost village",
        translation: "Death imagery",
        device: "Language - Simile",
        description: "Comparison to ghost town suggests death and abandonment.",
        effect: "Foreshadows the death and near-death he will encounter. Creates eerie atmosphere."
    },
    
    // The Hut Scene
    "habiba-dying": {
        title: "a woman dying of septicaemia",
        translation: "Medical precision",
        device: "Language - Technical",
        description: "Specific medical term shows clinical observation.",
        effect: "Professional distance through medical terminology, yet horrifying in its matter-of-fact delivery."
    },
    
    "intestines-decorations": {
        title: "her intestines, in the grip of the disease, going through a final, virulent, toxic, slough, decorating the hut",
        translation: "Grotesque imagery",
        device: "Language - Juxtaposition",
        description: "'Decorating' creates shocking contrast with horror described. Medical terms mixed with domestic imagery.",
        effect: "The word 'decorating' is deeply disturbing - makes suffering visible and unavoidable."
    },
    
    "old-woman-standing": {
        title: "standing in the doorway",
        translation: "Silent witness",
        device: "Structure - Positioning",
        description: "Grandmother positioned as threshold guardian, between life and death.",
        effect: "Creates sense of waiting and helplessness. She can only stand and watch."
    },
    
    "hand-touching": {
        title: "touching her shoulder, reaching out",
        translation: "Human connection",
        device: "Voice - Compassionate",
        description: "Physical gesture shows attempt at human connection despite horror.",
        effect: "Reveals reporter's humanity breaking through professional distance."
    },
    
    "smile-moment": {
        title: "And then there was the face I will never forget",
        translation: "The revelation",
        device: "Structure - Climax",
        description: "Returns to opening promise. Builds to key moment.",
        effect: "Everything has led to this moment. Creates dramatic pause before revelation."
    },
    
    // The Smile Analysis
    "smile-description": {
        title: "It was not a smile of greeting...a smile of farewell",
        translation: "Unexpected reaction",
        device: "Language - Negation",
        description: "Lists what the smile is NOT before revealing what it is.",
        effect: "Builds mystery and shows reporter struggling to understand this reaction."
    },
    
    "embarrassed-smile": {
        title: "It was not a smile of greeting, it was not a smile of joy",
        translation: "Process of elimination",
        device: "Structure - Repetition",
        description: "Parallel structure with repeated 'it was not' shows confusion.",
        effect: "Reader experiences the same confusion as reporter. Makes the smile more enigmatic."
    },
    
    "smile-apology": {
        title: "apology and empathy for the state of his home",
        translation: "Human dignity",
        device: "Purpose - Revelation",
        description: "Man maintains social courtesy despite dying. Shows retained humanity.",
        effect: "Heartbreaking preservation of dignity. Shows suffering hasn't destroyed his humanity."
    },
    
    // Professional Reflection
    "journalist-reaction": {
        title: "I had to get on and do my job",
        translation: "Professional duty",
        device: "Voice - Journalistic",
        description: "Returns to professional role but admits being affected.",
        effect: "Shows tension between human response and professional requirements."
    },
    
    "callous-profession": {
        title: "how callous our profession may seem",
        translation: "Self-awareness",
        device: "Audience - Public/Critics",
        description: "Acknowledges how journalism appears to outsiders.",
        effect: "Pre-empts criticism while defending necessity of bearing witness."
    },
    
    "passive-watching": {
        title: "the level of suffering at which even a professional reporter",
        translation: "Breaking point",
        device: "Purpose - Confession",
        description: "Admits there are limits to professional detachment.",
        effect: "Humanises journalists while showing extreme nature of this suffering."
    },
    
    // Historical Context
    "benevolent-mogadishu": {
        title: "the more benevolent of the militias",
        translation: "Relative evil",
        device: "Language - Irony",
        description: "'Benevolent' is ironic when applied to militia causing starvation.",
        effect: "Shows moral complexity - even the 'good' guys are causing suffering."
    },
    
    "battle-ground": {
        title: "a battle-ground of hunger between the different clans",
        translation: "Hunger as weapon",
        device: "Language - Metaphor",
        description: "Hunger becomes the battlefield itself, not just consequence.",
        effect: "Shows starvation is deliberate strategy, not accidental side-effect."
    },
    
    // Technical Aspects
    "panoramic-shots": {
        title: "a few general wide shots",
        translation: "Filming technique",
        device: "Voice - Technical",
        description: "Technical film terminology shows professional approach.",
        effect: "Contrasts clinical technique with human suffering being filmed."
    },
    
    "feeding-centres": {
        title: "Amina Abdirahman's death has been a passage",
        translation: "Death as transition",
        device: "Language - Metaphor",
        description: "Death becomes a journey or transition, linking to title.",
        effect: "Transforms one death into universal statement about witnessing suffering."
    },
    
    // Emotional Impact
    "me-in-the-face": {
        title: "had looked at me",
        translation: "Direct connection",
        device: "Structure - Personal",
        description: "Direct eye contact makes it personal, not abstract.",
        effect: "Cannot hide behind camera or professional distance. Makes reader feel accused too."
    },
    
    "pity-and-revulsion": {
        title: "pity and revulsion",
        translation: "Conflicted response",
        device: "Language - Juxtaposition",
        description: "Opposing emotions show complexity of response to extreme suffering.",
        effect: "Honest about negative feelings. Challenges idea of pure compassion."
    },
    
    "disgusted-reaction": {
        title: "Yes, revulsion",
        translation: "Uncomfortable truth",
        device: "Voice - Confessional",
        description: "Admits to feeling that challenges his self-image as compassionate.",
        effect: "Raw honesty makes piece more powerful. Confronts reader with their own potential reactions."
    },
    
    // Moral Questions
    "those-people": {
        title: "how could it be that these people",
        translation: "Incredulity",
        device: "Purpose - Question",
        description: "Cannot understand how such suffering is allowed to continue.",
        effect: "Voices the question readers are asking. Shows moral outrage."
    },
    
    "normal-response": {
        title: "the normal response to human suffering",
        translation: "Failed humanity",
        device: "Language - Irony",
        description: "What should be 'normal' (helping) has become abnormal.",
        effect: "Indicts wider world for allowing this to happen."
    },
    
    // Resolution
    "seminal-moment": {
        title: "a seminal moment in the gradual collection of experiences we call context",
        translation: "Defining moment",
        device: "Purpose - Reflection",
        description: "'Seminal' means origin/seed. Shows this moment grew into understanding.",
        effect: "One moment can change entire perspective. Journalism is about accumulated understanding."
    },
    
    "facts-figures": {
        title: "Facts and figures are the easy part of journalism",
        translation: "Beyond statistics",
        device: "Audience - Fellow Journalists",
        description: "Distinguishes between data and understanding. Message to other journalists.",
        effect: "Challenges superficial journalism. Context and meaning matter more than statistics."
    },
    
    "nameless-friend": {
        title: "So, my nameless friend, if you are still alive, I owe you one",
        translation: "Direct address",
        device: "Voice - Personal",
        description: "Speaks directly to the man who smiled. Acknowledges debt.",
        effect: "Circular structure returns to individual. Shows lasting impact of encounter."
    }
};

// Vocabulary definitions for complex terms
const vocabData = {
    "septicaemia": {
        word: "septicaemia",
        definition: "Blood poisoning; a life-threatening infection that spreads through the bloodstream",
        context: "Medical term showing clinical observation of suffering"
    },
    
    "virulent": {
        word: "virulent",
        definition: "Extremely severe or harmful in its effects; (of a disease) highly infectious",
        context: "Emphasises the aggressive nature of the disease"
    },
    
    "slough": {
        word: "slough",
        definition: "The shedding of dead tissue from living flesh",
        context: "Medical term for tissue death and separation"
    },
    
    "benevolent": {
        word: "benevolent",
        definition: "Well-meaning and kindly (used ironically here)",
        context: "Ironic when applied to militias causing starvation"
    },
    
    "militias": {
        word: "militias",
        definition: "Armed groups operating outside official military",
        context: "Refers to clan-based armed groups in Somalia"
    },
    
    "panoramic": {
        word: "panoramic",
        definition: "Wide-angle view showing a broad perspective",
        context: "Film terminology for establishing shots"
    },
    
    "seminal": {
        word: "seminal",
        definition: "Strongly influencing later developments; containing seeds of future development",
        context: "Shows this moment was foundational to his understanding"
    },
    
    "revulsion": {
        word: "revulsion",
        definition: "A sense of disgust and loathing",
        context: "Honest admission of negative response to extreme suffering"
    },
    
    "interloper": {
        word: "interloper",
        definition: "A person who becomes involved in a situation where they are not wanted",
        context: "How he sees himself as outsider witnessing private suffering"
    },
    
    "inured": {
        word: "inured",
        definition: "Accustomed to something unpleasant through prolonged exposure",
        context: "Suggests becoming hardened to suffering through repeated exposure"
    }
};

// Export for use in interactive.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textData, vocabData };
}
