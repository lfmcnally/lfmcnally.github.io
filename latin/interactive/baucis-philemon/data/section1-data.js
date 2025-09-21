// Analysis data for Baucis and Philemon Section 1 interactive text
const textData = {
    "iuppiter-opening": {
        title: "Iuppiter",
        translation: '"Jupiter"',
        device: "Dramatic Opening",
        description: "Ovid opens by naming the king of the gods himself at the very start of the line, immediately showing this is an important story about divine testing.",
        effect: "Creates dramatic irony (when readers know something characters don't) - we know who the visitors really are, but the humans don't. This makes us watch carefully to see how people treat strangers."
    },
    
    "specie-mortali": {
        title: "specie mortali",
        translation: '"in mortal form"',
        device: "Divine Disguise",
        description: "The gods have taken human appearance to test mortals without revealing their true identity. Notice how this phrase comes right after Jupiter's name.",
        effect: "Shows the gods are being fair in their test - they appear as ordinary people seeking help, not as powerful beings demanding respect."
    },
    
    "atlantiades-periphrasis": {
        title: "Atlantiades",
        translation: '"descendant of Atlas"',
        device: "Periphrasis (Poetic Description)",
        description: "Instead of simply saying 'Mercury', Ovid uses a poetic description referring to his grandfather Atlas. This is called periphrasis (saying something in a roundabout way).",
        effect: "Adds poetic elegance and reminds us of Mercury's divine family connections, making the story feel more epic and grand in verse."
    },
    
    "caducifer-compound": {
        title: "caducifer",
        translation: '"wand-bearing"',
        device: "Compound Word",
        description: "A poetic word made from two parts: 'caduceus' (Mercury's staff) + 'fero' (to carry). Poets often create elegant compound words like this.",
        effect: "Identifies Mercury through his famous symbol while showing Ovid's skill at creating elegant compound words that fit the verse metre."
    },
    
    "alis-ablative-absolute": {
        title: "postis...alis",
        translation: '"having set aside his wings"',
        device: "Important Detail (Ablative Absolute)",
        description: "Mercury has hidden his most recognisable feature - his wings. This phrase comes at the end of the line for emphasis. The grammar structure is called an ablative absolute.",
        effect: "Shows how thoroughly the gods are disguising themselves. Even Mercury's famous wings are hidden to make the test completely fair. The line ending emphasises this important detail."
    },
    
    "mille-anaphora": {
        title: "mille...mille",
        translation: '"a thousand...a thousand"',
        device: "Anaphora (Repetition)",
        description: "The same word 'mille' starts two consecutive lines. This is called anaphora (deliberate repetition at the start of lines or phrases).",
        effect: "The repetition hammers home how widespread the inhospitality is, making Baucis and Philemon's welcome even more special. In verse, this creates a rhythmic, emphatic effect."
    },
    
    "serae-metonymy": {
        title: "serae",
        translation: '"bars/bolts"',
        device: "Metonymy (Part for Whole)",
        description: "The door-bolts represent the closed doors themselves - this is called metonymy (using a part to represent the whole thing).",
        effect: "Creates a harsh, metallic sound that matches the hard rejection. The short, sharp word emphasises the physical barrier people put up against the strangers."
    },
    
    "tamen-contrast": {
        title: "tamen",
        translation: '"however"',
        device: "Strong Contrast",
        description: "This powerful contrast word signals the crucial turning point from rejection to acceptance. Notice how it gets its own emphasis in the verse line.",
        effect: "Creates dramatic emphasis on the one house that's different - the exception that will drive the whole story. The verse structure makes this word stand out."
    },
    
    "parva-quidem": {
        title: "parva quidem",
        translation: '"small indeed"',
        device: "Honest Admission",
        description: "'Quidem' means the poet honestly admits the cottage is tiny, but doesn't see this as shameful. This creates a gentle, understanding tone.",
        effect: "Shows that physical poverty doesn't matter - what counts is the generous heart inside the humble home. The admission makes the description feel fair and realistic."
    },
    
    "sed-pia-contrast": {
        title: "sed pia",
        translation: '"but dutiful"',
        device: "Strong Contrast",
        description: "'Sed' contrasts the cottage's small size with the huge moral worth of its owner. 'Pia' means religiously dutiful - a very important word in Roman culture.",
        effect: "Establishes the key theme: true value comes from character and devotion to the gods, not from wealth or status. The contrast is emphasised by the verse structure."
    },
    
    "baucis-introduction": {
        title: "Baucis",
        translation: '"Baucis"',
        device: "Character Introduction",
        description: "Our heroine is introduced with the key word 'pia' (dutiful) right before her name. This tells us her most important quality immediately.",
        effect: "Shows that her defining characteristic is her religious devotion and moral goodness. We know what kind of person she is before we even meet her properly."
    },
    
    "philemon-introduction": {
        title: "Philemon",
        translation: '"Philemon"',
        device: "Character Introduction", 
        description: "The male lead is described as 'equal in age' to Baucis, showing their partnership. This equality is unusual in Roman literature where men usually dominate.",
        effect: "Emphasises that this is a marriage of equals who have grown old together in harmony. This sets up their special relationship."
    },
    
    "illa-anaphora": {
        title: "illa...illa",
        translation: '"in that (cottage)...in that (cottage)"',
        device: "Anaphora (Repetition for Emphasis)",
        description: "The repeated 'illa' referring to their cottage shows their whole life story happened in this one place. The repetition spans across the line break in the verse.",
        effect: "Makes the cottage feel like a character in their love story - it has witnessed their entire journey from youth to old age. The verse structure emphasises this repetition."
    },
    
    "paupertatemque-gerund": {
        title: "paupertatemque fatendo",
        translation: '"and by acknowledging their poverty"',
        device: "Life Philosophy (Gerund Construction)",
        description: "The gerund (verbal noun) 'fatendo' explains how they cope with being poor - by accepting it honestly rather than being bitter. This shows their wisdom.",
        effect: "Shows their practical wisdom: they make poverty easier to bear by not pretending to be rich or complaining about their situation. Acceptance brings peace."
    },
    
    "iniqua-mente": {
        title: "iniqua mente",
        translation: '"with unfair mind"',
        device: "Character Psychology",
        description: "Shows how they choose not to bear hardship - without bitterness or feeling the gods have treated them unfairly. 'Mente' refers to their mental attitude.",
        effect: "Reveals their strength of character: they refuse to let poverty make them angry or resentful towards the gods. Their positive mindset is their strength."
    },
    
    "nec-refert-apostrophe": {
        title: "nec refert...requiras",
        translation: '"nor does it matter...whether you ask"',
        device: "Apostrophe (Direct Address)",
        description: "Ovid speaks directly to the reader with 'requiras' (you might ask), asking them to consider the unusual household arrangement. This is called apostrophe (addressing the audience directly).",
        effect: "Draws us into the story and makes us think about what makes this couple so special and different. It feels like the poet is having a conversation with us."
    },
    
    "tota-domus-paradox": {
        title: "tota domus duo sunt",
        translation: '"the whole house is two people"',
        device: "Paradox (Apparent Contradiction)",
        description: "Seems contradictory - how can 'the whole house' equal just 'two people'? This is a paradox (statement that seems impossible but contains truth). The line is perfectly balanced in the verse.",
        effect: "Emphasises how perfectly self-sufficient they are together, and how they don't need servants or wealth to be happy. The verse structure makes this line feel complete and balanced."
    },
    
    "idem-chiasmus": {
        title: "idem parentque iubentque",
        translation: '"they both obey and command"',
        device: "Chiasmus (Balanced Structure)",
        description: "The balanced phrase shows perfect equality - sometimes one leads, sometimes the other. This creates chiasmus (a balanced, crossing structure). Notice how the verse line ends with this perfect balance.",
        effect: "Presents an ideal marriage where no one dominates - they share decisions and take turns leading, showing true partnership. The verse ending emphasises this harmony."
    }
};
