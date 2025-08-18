// PAVLS Analysis data for Between a Rock and a Hard Place
const textData = {
    // Paragraph 1 - Setting the Scene
    "opening-technical": {
        title: "I come to another drop-off",
        translation: "Opening in medias res",
        device: "Structure - Opening Technique",
        description: "Opens in medias res - we're dropped directly into the action with no preamble. The casual 'another' suggests this is routine.",
        effect: "Creates immediate immersion and establishes documentary style. Makes the coming disaster more shocking - routine becomes catastrophe."
    },
    
    "precise-measurement": {
        title: "maybe eleven or twelve feet high, a foot higher and of a different geometry",
        translation: "Technical precision",
        device: "Language - Technical Description",
        description: "Specific measurements and technical terminology ('geometry') establish credibility and expertise.",
        effect: "Shows an expert eye - someone who habitually calculates risk. This expertise makes his later entrapment more ironic and frightening."
    },
    
    "chockstone-vocab": {
        title: "refrigerator chockstone",
        translation: "Specialist vocabulary",
        device: "Language - Technical Terms",
        description: "Specialist climbing term with everyday comparison (refrigerator) for size. Balances expertise with accessibility.",
        effect: "The domestic comparison helps non-climbers visualise while maintaining authentic climbing vocabulary. Shows dual audience awareness."
    },
    
    "claustrophobic": {
        title: "claustrophobic feel",
        translation: "Emotional atmosphere",
        device: "Voice - Subjective Response",
        description: "Subjective emotional response interrupts technical description. First hint of vulnerability beneath expertise.",
        effect: "Even an experienced climber feels the oppressive atmosphere, foreshadowing the trap to come. Humanises the technical narrator."
    },
    
    "precise-space": {
        title: "narrows to a consistent three feet across",
        translation: "Spatial precision",
        device: "Language - Exact Measurement",
        description: "Exact spatial measurements continue the technical documentation. Three feet is barely wider than shoulder width.",
        effect: "Emphasises confinement and the calculated nature of canyoneering. Helps readers visualise the trapped space that will become his prison."
    },
    
    // Paragraph 2 - Technical Expertise
    "technical-audience": {
        title: "stem my body across the slot",
        translation: "Technical instruction",
        device: "Audience - Expert Knowledge",
        description: "Shifts to instructional tone, assuming reader interest in technique. Positions reader as potential climber.",
        effect: "Creates investment in understanding the techniques. This technical competence makes the accident more shocking."
    },
    
    "educate-technique": {
        title: "Controlling this counterpressure by switching my hands and feet on the opposing walls",
        translation: "Detailed instruction",
        device: "Purpose - Education",
        description: "Detailed explanation of climbing technique serves educational purpose while building narrator credibility.",
        effect: "Builds trust in narrator's expertise. If an expert can be trapped, anyone could be - increases tension."
    },
    
    "alliteration-friction": {
        title: "the friction contact stays solid between the walls and my hands, feet, and back",
        translation: "Alliteration",
        device: "Language - Sound Pattern",
        description: "Alliteration with 'f' sounds (friction, feet) creates a sense of physical contact and pressure.",
        effect: "The repeated 'f' sounds mimic the huffing breath of exertion and the scraping friction described."
    },
    
    "expert-explanation": {
        title: "stemming or chimneying",
        translation: "Technical terminology",
        device: "Voice - Instructor Tone",
        description: "Teacher-like voice explaining technical terms. Patient, professional tone that will contrast with panic.",
        effect: "The chimney comparison makes technique accessible. Establishes authority before that authority is violently challenged."
    },
    
    // Paragraph 3 - Assessment
    "decision-point": {
        title: "a chockstone the size of a large bus tyre",
        translation: "Specific obstacle",
        device: "Structure - Focus Point",
        description: "Transition from general technique to specific situation. Introduces the fatal object with precise description.",
        effect: "Narrative focuses from wide to narrow. Reader understands we're approaching the critical decision."
    },
    
    "calculated-planning": {
        title: "If I can step onto it, then I'll have a nine-foot height to descend",
        translation: "Risk calculation",
        device: "Voice - Methodical Planning",
        description: "Methodical risk assessment and planning. The conditional 'if' shows he's weighing options carefully.",
        effect: "Shows climber's mindset - always calculating. Makes the accident feel more tragic - he was being careful."
    },
    
    // Paragraph 4 - The Attempt
    "technical-movement": {
        title: "Stemming across the canyon at the lip of the drop-off",
        translation: "Physical positioning",
        device: "Language - Kinesthetic Description",
        description: "Precise physical description of body positioning. Readers can visualise exact movements.",
        effect: "Creates physical empathy - we understand the complexity and skill required. Makes us invested in his actions."
    },
    
    "parallel-structure": {
        title: "I press my back against the south wall and lock my left knee",
        translation: "Parallel construction",
        device: "Language - Repetition",
        description: "Series of 'I + verb' constructions showing methodical, sequential actions.",
        effect: "Creates rhythm of deliberate movement. Each action carefully considered and executed in order."
    },
    
    "methodical": {
        title: "I kick at the boulder to test how stuck it is",
        translation: "Safety check",
        device: "Voice - Cautious Expert",
        description: "Careful, methodical testing before committing weight. Shows proper safety protocol.",
        effect: "He's not reckless - does everything right. This caution makes the accident more devastating."
    },
    
    "warning-sign": {
        title: "It supports me but teeters slightly",
        translation: "First warning",
        device: "Structure - Foreshadowing",
        description: "First warning sign - subtle foreshadowing of disaster. The word 'but' signals danger.",
        effect: "Creates dread in reader who recognises this as ominous while narrator remains unaware of full threat."
    },
    
    "simile-house": {
        title: "akin to climbing down from the roof of a house",
        translation: "Domestic simile",
        device: "Language - Simile",
        description: "Compares technical climbing manoeuvre to everyday domestic activity.",
        effect: "Makes extreme sport relatable through familiar comparison. Last touch of normalcy before disaster."
    },
    
    // Paragraph 5 - The Turning Point
    "personification-stone": {
        title: "the stone respond",
        translation: "Stone personified",
        device: "Language - Personification",
        description: "The boulder 'responds' as if it has agency and awareness.",
        effect: "Makes the rock seem alive and malevolent, actively participating in his entrapment."
    },
    
    "onomatopoeia": {
        title: "scraping quake",
        translation: "Sound effect",
        device: "Language - Onomatopoeia",
        description: "'Scraping' mimics the grinding sound of stone on stone. 'Quake' suggests vibration.",
        effect: "Reader hears and feels the ominous movement. Sound signals imminent danger."
    },
    
    "instant-recognition": {
        title: "Instantly, I know this is trouble",
        translation: "Immediate understanding",
        device: "Voice - Expert Intuition",
        description: "Immediate recognition of danger - expert intuition kicks in. No denial or confusion.",
        effect: "Short, stark sentence conveys sudden realisation. Experience means he understands immediately."
    },
    
    "instinctive": {
        title: "instinctively",
        translation: "Automatic response",
        device: "Language - Adverb Choice",
        description: "Body reacts before conscious thought. Training becomes instinct in crisis.",
        effect: "Shows speed of events - no time for conscious decision. Emphasises how quickly disaster strikes."
    },
    
    "dramatic-imagery": {
        title: "the backlit chockstone falling toward my head consumes the sky",
        translation: "Cinematic description",
        device: "Language - Visual Imagery",
        description: "Shifts from technical to poetic language. 'Consumes' personifies the rock as predator.",
        effect: "Backlit creates ominous silhouette - death approaching. Makes scene visual and dramatic."
    },
    
    "metaphor-shoots": {
        title: "Fear shoots",
        translation: "Fear as projectile",
        device: "Language - Metaphor",
        description: "Fear becomes an active force that 'shoots' his hands upward like a bullet.",
        effect: "Shows involuntary speed of reaction. Fear takes control of his body."
    },
    
    "hopeless": {
        title: "My only hope is to push off the falling rock and get my head out of its way",
        translation: "Desperate option",
        device: "Purpose - Convey Desperation",
        description: "The word 'only' emphasises how trapped he is even before the rock falls.",
        effect: "Shows minimal chance of escape. Purpose shifts from education to immediate survival."
    },
    
    // Paragraph 6 - Time Dilation
    "time-shift": {
        title: "The next three seconds play out at a tenth of their normal speed",
        translation: "Temporal shift",
        device: "Structure - Time Manipulation",
        description: "Announces temporal shift - three seconds will take a full paragraph to describe.",
        effect: "Prepares reader for slow-motion description. Mimics how crisis distorts time perception."
    },
    
    "time-metaphor": {
        title: "Time dilates, as if I'm dreaming",
        translation: "Altered perception",
        device: "Language - Scientific/Metaphorical",
        description: "Scientific term ('dilates') combined with dream simile. Captures surreal quality of trauma.",
        effect: "'Dilates' is precisely accurate - time perception does change in crisis. Dream comparison makes it relatable."
    },
    
    "simile-dreaming": {
        title: "as if I'm dreaming",
        translation: "Dream simile",
        device: "Language - Simile",
        description: "Compares time dilation to dream state where time moves differently.",
        effect: "Captures surreal quality of trauma. Makes altered perception relatable."
    },
    
    "slow-motion": {
        title: "In slow motion: the rock smashes my left hand against the south wall; my eyes register the collision, and I yank my left arm back as the rock ricochets; the boulder then crushes my right hand and ensnares my right arm at the wrist, palm in, thumb up, fingers extended; the rock slides another foot down the wall with my arm in tow, tearing the skin off the lateral side of my forearm",
        translation: "Blow-by-blow account",
        device: "Multiple - Purpose/Language/Structure",
        description: "Detailed sequential description of impact. Clinical detail maintains documentary tone while describing personal catastrophe.",
        effect: "Colon introduces litany of horror. Reader experiences each impact. Medical precision maintains objectivity."
    },
    
    "repetition-yank": {
        title: "I yank",
        translation: "Repeated verb",
        device: "Language - Repetition",
        description: "Repeats 'yank' from earlier desperate attempt, showing futile repetition.",
        effect: "Emphasises desperate, instinctive pulling motion. Same action, no result."
    },
    
    "tripling": {
        title: "palm in, thumb up, fingers extended",
        translation: "Rule of three",
        device: "Language - Tripling",
        description: "Three precise details about hand position, building complete picture.",
        effect: "Forensic detail shows how clearly this moment is burned into memory. Clinical precision amid chaos."
    },
    
    "silence": {
        title: "Then silence",
        translation: "Abrupt stop",
        device: "Structure - Fragment",
        description: "Two-word sentence creates full stop after frantic action.",
        effect: "Mirrors the shock - from chaos to stillness. Emphasises the finality of entrapment."
    },
    
    // Paragraph 7 - Realisation
    "disbelief": {
        title: "My disbelief paralyses me temporarily",
        translation: "Psychological shock",
        device: "Voice - Vulnerable",
        description: "Psychological shock before physical pain registers. 'Paralyses' ironically describes mental state when physically trapped.",
        effect: "Shows stages of trauma response - disbelief before pain. Voice shifts from professional to victim."
    },
    
    "medical-precision": {
        title: "my nervous system's pain response overcomes the initial shock",
        translation: "Clinical description",
        device: "Language - Medical Terms",
        description: "Clinical, medical language for describing pain. Maintains observational distance.",
        effect: "Shows analytical mind still functioning despite trauma. Creates distance from overwhelming pain."
    },
    
    "raw-emotion": {
        title: "Good God, my hand",
        translation: "Emotional outburst",
        device: "Voice - Raw Emotion",
        description: "First purely emotional outburst. Invocation of God shows desperation.",
        effect: "Breaks from controlled narration into raw emotion. Fragment emphasises shock."
    },
    
    "pain-description": {
        title: "The flaring agony throws me into a panic",
        translation: "Vivid pain",
        device: "Language - Sensory Description",
        description: "'Flaring' suggests fire, spreading pain. 'Agony' stronger than 'pain'.",
        effect: "Vivid verb makes pain visual and dynamic. Shows extremity of situation."
    },
    
    "sensory-imagery": {
        title: "The flaring agony",
        translation: "Sensory description",
        device: "Language - Imagery",
        description: "'Flaring' suggests fire, heat, and spreading pain - visual and tactile.",
        effect: "Makes pain visceral and visual. Reader can almost feel the burning sensation."
    },
    
    "onomatopoeia-growl": {
        title: "I grimace and growl",
        translation: "Animal sounds",
        device: "Language - Onomatopoeia",
        description: "'Growl' is primal, animalistic sound of pain and frustration.",
        effect: "Shows regression from articulate expert to wordless animal in pain."
    },
    
    "internal-dialogue": {
        title: 'My mind commands my body, "Get your hand out of there!"',
        translation: "Mind-body split",
        device: "Voice - Internal Dialogue",
        description: "Mind speaking to body as separate entity. Shows dissociation beginning.",
        effect: "Fragmentation of self under extreme stress. Exclamation mark conveys panic."
    },
    
    "repetition-three": {
        title: "I yank my arm three times",
        translation: "Repeated action",
        device: "Language - Repetition",
        description: "Repetition of yanking action shows desperate, futile attempt.",
        effect: "Reader feels the rhythm of pull, pull, pull - then nothing. Emphasises futility."
    },
    
    "rule-of-three": {
        title: "three times",
        translation: "Specific number",
        device: "Language - Rule of Three",
        description: "Specific number three - the classic number of attempts in stories.",
        effect: "Three attempts before accepting failure is archetypal. Shows he tried but not endlessly."
    },
    
    "futile-action": {
        title: "naive attempt",
        translation: "Futile effort",
        device: "Language - Self-Aware",
        description: "'Naive' shows he knows it's hopeless even as he tries. Self-aware even in panic.",
        effect: "Maintains analytical voice even in panic. Shows dual perspective - actor and observer."
    },
    
    "stark-reality": {
        title: "But I'm stuck",
        translation: "Core reality",
        device: "Structure - Short Sentence",
        description: "Three-word sentence states the core reality. 'But' negates all attempts.",
        effect: "Shortest sentence carries most weight. Present tense makes it immediate and ongoing."
    },
    
    // Paragraph 8 - Desperation
    "panic": {
        title: "Anxiety has my brain tweaking; searing-hot pain shoots from my wrist up my arm",
        translation: "Mental breakdown",
        device: "Voice - Colloquial Panic",
        description: "'Tweaking' is colloquial, showing loss of professional voice. Anxiety becomes active agent.",
        effect: "Informal language shows psychological breakdown. Voice becoming less controlled."
    },
    
    "personification-anxiety": {
        title: "Anxiety has my brain",
        translation: "Anxiety personified",
        device: "Language - Personification",
        description: "Anxiety becomes an entity that possesses and controls his brain.",
        effect: "Shows loss of control. Mental state becomes external force acting upon him."
    },
    
    "sensory-heat": {
        title: "searing-hot pain",
        translation: "Temperature imagery",
        device: "Language - Sensory Imagery",
        description: "Pain described through temperature - 'searing-hot' like being burned.",
        effect: "Makes abstract pain concrete through familiar sensation of burning."
    },
    
    "shared-reference": {
        title: "probably apocryphal story in which an adrenaline-stoked mom lifts an overturned car to free her baby",
        translation: "Cultural myth",
        device: "Audience - Shared Knowledge",
        description: "References shared cultural myth about superhuman strength in crisis.",
        effect: "Connects to common story everyone's heard. Shows desperate hope while acknowledging it's probably false."
    },
    
    "parenthetical": {
        title: "story in which an adrenaline-stoked mom lifts an overturned car to free her baby",
        translation: "Aside/anecdote",
        device: "Language - Parenthetical",
        description: "Parenthetical anecdote about superhuman strength interrupts action.",
        effect: "Shows his mind grasping at any hope, even myths. Analytical mind still working despite panic."
    },
    
    "analytical-desperation": {
        title: "I'd give it even odds that it's made up",
        translation: "Calculating odds",
        device: "Voice - Analytical Even in Crisis",
        description: "Maintains analytical voice even while desperate. Still calculating probabilities.",
        effect: "Rational assessment of irrational hope is deeply human. Can't stop analysing even when panicking."
    },
    
    "physical-struggle": {
        title: "I shove against the large boulder, heaving against it, pushing with my left hand, lifting with my knees pressed under the rock",
        translation: "Frantic effort",
        device: "Language - Action Accumulation",
        description: "Series of physical verbs showing escalating effort. Repetition creates sense of frantic activity.",
        effect: "Reader feels physical strain through accumulated verbs. Conveys desperate physical effort and building exhaustion."
    },
    
    "tripling-verbs": {
        title: "I shove against the large boulder, heaving against it, pushing with my left hand, lifting with my knees",
        translation: "Verb accumulation",
        device: "Language - Tripling/Crescendo",
        description: "Series of increasingly desperate action verbs: shove, heave, push, lift.",
        effect: "Creates sense of frantic, escalating effort. Reader feels exhaustion building."
    },
    
    "desperate-dialogue": {
        title: 'grunting, "Come on... move!"',
        translation: "Pleading with rock",
        device: "Voice - Desperate",
        description: "Speaking to boulder as if it could respond. Shows psychological state.",
        effect: "Treating inanimate object as negotiable. Reveals depth of desperation."
    },
    
    "ellipsis-effort": {
        title: '"Come on... move!"',
        translation: "Ellipsis for strain",
        device: "Language - Punctuation",
        description: "Ellipsis shows pause for breath/effort between desperate words.",
        effect: "Reader hears the strain and effort. Gaps show physical exertion interrupting speech."
    },
    
    "final-defeat": {
        title: "Nothing",
        translation: "Complete failure",
        device: "Structure - Single Word",
        description: "Single word paragraph ends the extract with absolute finality.",
        effect: "One word carries weight of complete failure. Stops all momentum of previous frantic activity."
    }
};

// Vocabulary data
const vocabData = {
    "chockstone": "A rock or boulder wedged in a crack or canyon. In canyoneering, these can be used as anchors or obstacles to navigate around.",
    
    "stem": "Climbing technique where you push outward with hands and feet against opposing walls to maintain position or move up/down.",
    
    "chimneying": "Climbing technique using opposing pressure between back and feet (or hands and feet) to ascend or descend a narrow vertical space.",
    
    "torque": "Rotational force. Here, his body weight creates a twisting force that dislodges the boulder from its wedged position.",
    
    "dilates": "Expands or stretches out. Time dilation is the perception that time is moving more slowly during intense or traumatic moments.",
    
    "apocryphal": "Of doubtful authenticity; probably untrue but widely circulated as fact. Often applied to stories that are too good to be true."
};
