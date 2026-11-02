// PAVLS Analysis data for H is for Hawk by Helen Macdonald
const textData = {
    // Paragraph 1 - Documentation
    "wrong-bird": {
        title: "Don't want you going home with the wrong bird",
        translation: "Casual warning",
        device: "Voice - Ironic foreshadowing",
        description: "Handler's casual comment that becomes prophetic.",
        effect: "Sets up the central conflict - which is the 'right' bird?"
    },
    
    // Paragraph 2 - The boxes
    "parcel-tape": {
        title: "parcel-tape handles",
        translation: "Makeshift containers",
        device: "Language - Mundane detail",
        description: "Ordinary packaging for extraordinary creature.",
        effect: "Contrasts everyday materials with mythical bird inside."
    },
    
    "thin-plywood": {
        title: "thin plywood and hinges of carefully tied string",
        translation: "Fragile construction",
        device: "Language - Material description",
        description: "Emphasises flimsy, handmade nature of containers.",
        effect: "Creates tension - weak barrier holding powerful creature."
    },
    
    "thump-feathered": {
        title: "thump of feathered shoulders",
        translation: "Physical impact",
        device: "Language - Sound and texture",
        description: "Combines sound with tactile 'feathered' description.",
        effect: "Makes the unseen hawk physically present through sound."
    },
    
    "punched-it": {
        title: "punched it, hard, from within",
        translation: "Violent force",
        device: "Language - Simile",
        description: "Human violence metaphor for bird's power.",
        effect: "Shows hawk's strength and desperation to escape."
    },
    
    "keep-hawk": {
        title: "keep the hawk from fearful sights. Like us",
        translation: "We are the threat",
        device: "Purpose - Irony",
        description: "Fragment 'Like us' reveals humans as source of fear.",
        effect: "Shifts perspective - we're terrifying to the hawk."
    },
    
    // Paragraph 3 - Opening the box
    "concentration-caution": {
        title: "Concentration. Infinite caution",
        translation: "Tension building",
        device: "Structure - Fragments",
        description: "Short sentences slow time, build suspense.",
        effect: "Creates slow-motion effect before chaos erupts."
    },
    
    "daylight-irrigating": {
        title: "Daylight irrigating the box",
        translation: "Light as liquid",
        device: "Language - Metaphor",
        description: "'Irrigating' makes light flow like water.",
        effect: "Light floods darkness like life-giving water."
    },
    
    "thump-repetition": {
        title: "Thump",
        translation: "Isolated impact",
        device: "Structure - One-word sentence",
        description: "Single word paragraph creates pause.",
        effect: "Heartbeat rhythm, building to explosion."
    },
    
    "syrupy-slow": {
        title: "syrupy, slow, flecked with dust",
        translation: "Thick atmosphere",
        device: "Language - Synaesthesia",
        description: "Air becomes viscous, visible, tangible.",
        effect: "Time slows, atmosphere becomes oppressive."
    },
    
    "last-seconds": {
        title: "The last few seconds before a battle",
        translation: "War metaphor",
        device: "Language - Military comparison",
        description: "Elevates moment to epic confrontation.",
        effect: "Prepares reader for violence and chaos."
    },
    
    "whirring-chaotic": {
        title: "whirring, chaotic clatter of wings and feet and talons and a high-pitched twittering",
        translation: "Sensory overload",
        device: "Language - Listing",
        description: "Accumulation of sounds creates chaos.",
        effect: "Overwhelming auditory assault mirrors visual chaos."
    },
    
    "all-happening": {
        title: "it's all happening at once",
        translation: "Present tense shift",
        device: "Voice - Immediacy",
        description: "Switches to present tense for immediacy.",
        effect: "Reader experiences chaos in real-time."
    },
    
    "enormous-enormous": {
        title: "enormous, enormous",
        translation: "Overwhelming size",
        device: "Voice - Repetition",
        description: "Repetition shows inability to process scale.",
        effect: "Childlike amazement at hawk's unexpected size."
    },
    
    "flood-sunlight": {
        title: "a great flood of sunlight drenches us and everything is brilliance and fury",
        translation: "Divine revelation",
        device: "Language - Biblical imagery",
        description: "Light imagery suggests religious epiphany.",
        effect: "Hawk's emergence feels miraculous, supernatural."
    },
    
    "barred-beating": {
        title: "barred and beating",
        translation: "Pattern and motion",
        device: "Language - Alliteration",
        description: "Alliterative 'b' mimics wing beats.",
        effect: "Sound echoes physical movement of wings."
    },
    
    "sharp-fingers": {
        title: "sharp fingers of her dark-tipped primaries cutting the air",
        translation: "Wings as weapons",
        device: "Language - Personification",
        description: "Wing feathers become 'fingers' that 'cut'.",
        effect: "Makes hawk seem dexterous and dangerous."
    },
    
    "heart-jumps": {
        title: "My heart jumps sideways",
        translation: "Physical shock",
        device: "Voice - Visceral response",
        description: "Heart doesn't just jump but 'sideways' - wrong direction.",
        effect: "Physical disorientation mirrors emotional impact."
    },
    
    "conjuring-trick": {
        title: "a conjuring trick. A reptile. A fallen angel. A griffon from the pages of an illuminated bestiary",
        translation: "Mythical transformations",
        device: "Language - Metaphorical list",
        description: "Rapid succession of impossible comparisons.",
        effect: "Hawk transcends natural world, becomes mythical."
    },
    
    "gold-falling": {
        title: "Something bright and distant, like gold falling through water",
        translation: "Unreachable beauty",
        device: "Language - Simile",
        description: "Precious but sinking, beautiful but drowning.",
        effect: "Captures beauty and tragedy simultaneously."
    },
    
    "hanging-turkey": {
        title: "hanging head-downward, wings open, like a turkey in a butcher's shop",
        translation: "Death imagery",
        device: "Language - Grotesque comparison",
        description: "Shifts from mythical to mundane meat.",
        effect: "Shocking juxtaposition - majesty to mortality."
    },
    
    "seeing-more": {
        title: "she is seeing more than she has ever seen before in her whole short life",
        translation: "Overwhelming perspective",
        device: "Voice - Empathy",
        description: "Shifts to hawk's perspective and experience.",
        effect: "Creates sympathy for hawk's sensory overload."
    },
    
    "but-now": {
        title: "But now it is this",
        translation: "Pivotal moment",
        device: "Structure - Turning point",
        description: "Short sentence marks life transformation.",
        effect: "Everything changes in this instant."
    },
    
    "point-source": {
        title: "point-source glitter on the waves",
        translation: "Precise light",
        device: "Language - Technical precision",
        description: "Scientific term for specific light phenomenon.",
        effect: "Shows hawk's superior vision - sees what humans miss."
    },
    
    "pigment-flakes": {
        title: "pigment flakes under wax",
        translation: "Microscopic detail",
        device: "Language - Precise observation",
        description: "Hawk sees paint structure on cars.",
        effect: "Supernatural visual acuity - sees molecular level."
    },
    
    "miles-sky": {
        title: "miles and miles of sky",
        translation: "Infinite space",
        device: "Language - Repetition",
        description: "Repetition emphasises endless expanse.",
        effect: "Overwhelming freedom after confinement."
    },
    
    "illegible-things": {
        title: "illegible things moving in it that are white scraps of gulls",
        translation: "Unreadable world",
        device: "Language - Perspective shift",
        description: "World is text hawk cannot read yet.",
        effect: "Shows hawk's confusion - cannot interpret what it sees."
    },
    
    "everything-startling": {
        title: "Everything startling and new-stamped on her entirely astonished brain",
        translation: "Mental overload",
        device: "Voice - Neurological imagery",
        description: "'New-stamped' suggests permanent imprinting.",
        effect: "Traumatic intensity of first impressions."
    },
    
    // Paragraph 4 - The handler's care
    "perfectly-calm": {
        title: "perfectly calm",
        translation: "Professional control",
        device: "Structure - Contrast",
        description: "Handler's calm contrasts with chaos.",
        effect: "Shows experience versus amateur panic."
    },
    
    "one-practised": {
        title: "one practised movement",
        translation: "Expert handling",
        device: "Language - Efficiency",
        description: "Single fluid motion shows expertise.",
        effect: "Contrasts with Macdonald's emotional chaos."
    },
    
    "scaled-yellow": {
        title: "scaled yellow legs",
        translation: "Reptilian feature",
        device: "Language - Dinosaur echo",
        description: "Emphasises hawk's prehistoric nature.",
        effect: "Links to earlier 'reptile' comparison."
    },
    
    "tautly": {
        title: "tautly",
        translation: "Tension in voice",
        device: "Language - Adverb choice",
        description: "Voice stretched tight with concern.",
        effect: "Reveals handler's hidden anxiety."
    },
    
    "concern-care": {
        title: "concern in his face. It was born of care",
        translation: "Deep affection",
        device: "Voice - Recognition",
        description: "Distinguishes worry from love.",
        effect: "Shows handler's emotional investment."
    },
    
    "frail-bluish": {
        title: "frail bluish eggshell",
        translation: "Vulnerable beginning",
        device: "Language - Fragility",
        description: "Emphasises original helplessness.",
        effect: "Contrasts with current power."
    },
    
    "lumpen-fluffy": {
        title: "lumpen, fluffy chick",
        translation: "Awkward baby",
        device: "Language - Contrasting adjectives",
        description: "Heavy yet soft, clumsy yet cute.",
        effect: "Makes fearsome hawk seem vulnerable."
    },
    
    "wobbling-effort": {
        title: "wobbling with the effort",
        translation: "Struggle to survive",
        device: "Language - Physical difficulty",
        description: "Shows how hard basic survival was.",
        effect: "Increases sympathy for creature."
    },
    
    "all-once-loved": {
        title: "All at once I loved this man, and fiercely",
        translation: "Sudden intensity",
        device: "Voice - Emotional explosion",
        description: "Instant, violent affection for stranger.",
        effect: "Shows emotional volatility from grief."
    },
    
    "hackles-raised": {
        title: "hackles raised",
        translation: "Threat display",
        device: "Language - Technical term",
        description: "Raised neck feathers show aggression/fear.",
        effect: "Hawk ready to fight or flee."
    },
    
    "colour-sun": {
        title: "colour of sun on white paper",
        translation: "Burning brightness",
        device: "Language - Precise comparison",
        description: "Specific quality of reflected light.",
        effect: "Eyes seem to burn with intensity."
    },
    
    "world-fallen": {
        title: "the whole world had fallen into them at once",
        translation: "Overwhelming input",
        device: "Language - Metaphor",
        description: "World collapses into hawk's eyes.",
        effect: "Reverses normal perception - world enters eyes."
    },
    
    "thin-angular": {
        title: "thin, angular skull",
        translation: "Fragile structure",
        device: "Language - Tactile description",
        description: "Feels bone structure through feathers.",
        effect: "Intimate physical contact reveals vulnerability."
    },
    
    "alien-brain": {
        title: "alien brain fizzing and fusing with terror",
        translation: "Electrical overload",
        device: "Language - Scientific metaphor",
        description: "Brain as electrical system short-circuiting.",
        effect: "Makes terror physical, electrical, dangerous."
    },
    
    // Paragraph 5 - Wrong bird
    "wrong-bird-reveal": {
        title: "It was the wrong bird",
        translation: "Mistake revealed",
        device: "Structure - Short revelation",
        description: "Blunt statement after intense description.",
        effect: "Anticlimax - all that intensity for wrong bird."
    },
    
    "not-my-hawk": {
        title: "This was not my hawk",
        translation: "Rejection",
        device: "Voice - Certainty",
        description: "Definitive statement of non-recognition.",
        effect: "Despite never meeting, she knows this isn't right."
    },
    
    // Paragraph 6 - Oh
    "oh": {
        title: "Oh",
        translation: "Devastation",
        device: "Structure - Single word paragraph",
        description: "Entire paragraph is one word.",
        effect: "Minimal expression of maximum disappointment."
    },
    
    // Paragraph 7 - The second hawk
    "dear-god": {
        title: "dear God, it did",
        translation: "Religious exclamation",
        device: "Voice - Shocked prayer",
        description: "Invokes deity at hawk's appearance.",
        effect: "Shows overwhelming impact of second bird."
    },
    
    "victorian-melodrama": {
        title: "Victorian melodrama: a sort of madwoman in the attack",
        translation: "Theatrical madness",
        device: "Language - Literary allusion",
        description: "References Gothic female madness trope.",
        effect: "Hawk as tragic, dangerous feminine force."
    },
    
    "smokier-darker": {
        title: "smokier and darker and much, much bigger",
        translation: "Ominous presence",
        device: "Language - Building description",
        description: "Accumulating darkness and size.",
        effect: "More threatening than first hawk."
    },
    
    "wailed": {
        title: "wailed",
        translation: "Anguished sound",
        device: "Language - Human verb",
        description: "Gives hawk human grief expression.",
        effect: "Sound of pain not aggression."
    },
    
    "great-awful": {
        title: "great, awful gouts of sound like a thing in pain",
        translation: "Overwhelming suffering",
        device: "Language - Visceral description",
        description: "'Gouts' suggests blood, violence, excess.",
        effect: "Sound becomes physical, liquid, horrible."
    },
    
    "unbearable": {
        title: "unbearable",
        translation: "Cannot endure",
        device: "Voice - Breaking point",
        description: "Single word shows limit reached.",
        effect: "Macdonald at emotional capacity."
    },
    
    "this-my-hawk": {
        title: "This is my hawk",
        translation: "Forced acceptance",
        device: "Voice - Self-convincing",
        description: "Tells herself what should be true.",
        effect: "Trying to override instinct with logic."
    },
    
    "all-could-breathe": {
        title: "it was all I could do to breathe",
        translation: "Physical panic",
        device: "Voice - Bodily response",
        description: "Emotional stress becomes physical.",
        effect: "Grief makes basic functions difficult."
    },
    
    "blank-crazy": {
        title: "blank and crazy in her stare",
        translation: "Absent madness",
        device: "Language - Paradox",
        description: "Empty yet insane - contradictory states.",
        effect: "Nothing familiar or comforting in this hawk."
    },
    
    "some-madness": {
        title: "Some madness from a distant country",
        translation: "Foreign insanity",
        device: "Language - Metaphor",
        description: "Madness as exotic import.",
        effect: "Completely alien consciousness."
    },
    
    "didnt-recognise": {
        title: "I didn't recognise her",
        translation: "No connection",
        device: "Voice - Loss",
        description: "Expected recognition doesn't come.",
        effect: "Searching for dead father, finds stranger."
    },
    
    "isnt-my-hawk": {
        title: "This isn't my hawk",
        translation: "Refusal",
        device: "Structure - Repetition",
        description: "Keeps repeating denial.",
        effect: "Cannot accept this wrong choice."
    },
    
    "but-isnt": {
        title: "But this isn't my hawk",
        translation: "Internal protest",
        device: "Voice - Desperate denial",
        description: "Mind stuck on single thought.",
        effect: "Grief-brain fixation on wrong bird."
    },
    
    "slow-panic": {
        title: "Slow panic",
        translation: "Creeping dread",
        device: "Voice - Oxymoron",
        description: "Panic usually fast, this builds slowly.",
        effect: "Inexorable rise of anxiety."
    },
    
    "monstrous-breach": {
        title: "monstrous breach of etiquette",
        translation: "Social transgression",
        device: "Purpose - Rule-breaking",
        description: "Knows she's violating falconry code.",
        effect: "Grief overrides social norms."
    },
    
    "desperate-barrage": {
        title: "desperate, crazy barrage of incoherent appeals",
        translation: "Verbal chaos",
        device: "Voice - Self-aware",
        description: "Knows she sounds insane but can't stop.",
        effect: "Words pour out beyond control."
    },
    
    // Paragraph 8 - Final plea
    "tall-white": {
        title: "tall, white-faced woman with wind-wrecked hair and exhausted eyes",
        translation: "Dishevelled appearance",
        device: "Language - Self-portrait",
        description: "Sees herself from outside - wreckage.",
        effect: "Grief made visible in physical appearance."
    },
    
    "seaside-medea": {
        title: "seaside production of Medea",
        translation: "Tragic performance",
        device: "Language - Classical allusion",
        description: "References woman who killed children in grief/rage.",
        effect: "Suggests dangerous emotional state."
    },
    
    "something-behind": {
        title: "something behind it that was very important",
        translation: "Hidden significance",
        device: "Purpose - Subtext",
        description: "Request carries weight beyond hawks.",
        effect: "Handler senses this is about more than birds."
    },
    
    "moment-silence": {
        title: "There was a moment of total silence",
        translation: "Suspended decision",
        device: "Structure - Cliffhanger",
        description: "Ends on pause before resolution.",
        effect: "Reader held in suspense with Macdonald."
    }
};

// Vocabulary definitions
const vocabData = {
    "porpentine": {
        title: "porpentine",
        translation: "An archaic word for porcupine",
        device: "Vocabulary",
        description: "Old-fashioned term for porcupine, adds medieval/bestiary atmosphere.",
        effect: "Links hawk to ancient, mythical creatures rather than modern animals."
    },
    
    "bestiary": {
        title: "bestiary",
        translation: "Medieval illustrated book of animals",
        device: "Vocabulary",
        description: "Medieval manuscripts that described real and mythical creatures with moral lessons.",
        effect: "Places hawk in tradition of mythical and symbolic creatures."
    },
    
    "marionette": {
        title: "marionette",
        translation: "Puppet controlled by strings",
        device: "Vocabulary",
        description: "Puppet worked from above by strings or wires.",
        effect: "Suggests hawk's movements are jerky, uncontrolled, not her own."
    },
    
    "jesses": {
        title: "jesses",
        translation: "Leather straps on hawk's legs",
        device: "Vocabulary",
        description: "Short leather straps permanently attached to a hawk's legs for control.",
        effect: "Technical falconry term showing professional handling."
    }
};

// Export for use in interactive.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textData, vocabData };
}
