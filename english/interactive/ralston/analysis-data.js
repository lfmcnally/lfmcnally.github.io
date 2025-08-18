// PAVLS Analysis data for Between a Rock and a Hard Place
const textData = {
    // Paragraph 1 - Setting the Scene
    "opening-technical": {
        title: "I come to another drop-off",
        category: "Structure",
        description: "Opens in medias res - we're dropped directly into the action with no preamble.",
        effect: "Creates immediate immersion. The casual 'another' suggests this is routine, establishing the narrator as experienced. This makes the coming disaster more shocking.",
        pavls: "Structure: Beginning with action rather than context forces readers to engage immediately and establishes the documentary style."
    },
    
    "precise-measurement": {
        title: "eleven or twelve feet high...different geometry",
        category: "Language",
        description: "Specific measurements and technical terminology ('geometry') establish credibility.",
        effect: "The precision shows an expert eye - someone who habitually calculates risk. This expertise makes his later entrapment more ironic and frightening.",
        pavls: "Language: Technical precision creates authenticity and shows the methodical mindset needed for safe canyoneering."
    },
    
    "chockstone-vocab": {
        title: "refrigerator chockstone",
        category: "Language",
        description: "Specialist climbing term with everyday comparison (refrigerator) for size.",
        effect: "Balances technical expertise with accessibility. The domestic comparison helps non-climbers visualize while maintaining authentic climbing vocabulary.",
        pavls: "Language/Audience: Technical term explained through comparison serves dual audience - climbers and general readers."
    },
    
    "claustrophobic": {
        title: "claustrophobic feel of a short tunnel",
        category: "Voice",
        description: "Subjective emotional response interrupts technical description.",
        effect: "First hint of vulnerability. Even an experienced climber feels the oppressive atmosphere, foreshadowing the trap to come.",
        pavls: "Voice: Shifts from objective observer to someone affected by the environment, showing human vulnerability beneath expertise."
    },
    
    "precise-space": {
        title: "narrows to a consistent three feet",
        category: "Language",
        description: "Exact spatial measurements continue the technical documentation.",
        effect: "The precision emphasizes how calculated and careful canyoneering must be. Three feet is barely wider than shoulder width - emphasizing confinement.",
        pavls: "Language: Specific measurements help readers visualize the confined space and understand the technical challenges."
    },
    
    // Paragraph 2 - Technical Expertise
    "technical-audience": {
        title: "it's possible for me to stem",
        category: "Audience",
        description: "Shifts to instructional tone, assuming reader interest in technique.",
        effect: "Positions reader as potential climber or at least someone interested in understanding the technical process. Creates dramatic irony - we're learning techniques just before they fail catastrophically.",
        pavls: "Audience: Addresses readers as if they might attempt similar climbs, creating investment in understanding the techniques."
    },
    
    "educate-technique": {
        title: "Controlling this counterpressure",
        category: "Purpose",
        description: "Detailed explanation of climbing technique serves educational purpose.",
        effect: "Builds trust in narrator's expertise while educating reader. This technical competence makes the accident more shocking - if an expert can be trapped, anyone could be.",
        pavls: "Purpose: Educates readers about climbing techniques, establishing the narrator's credentials before the crisis."
    },
    
    "expert-explanation": {
        title: "This technique is known as stemming",
        category: "Voice",
        description: "Teacher-like voice explaining technical terms with helpful analogy.",
        effect: "The chimney comparison makes the technique accessible. Voice is patient, professional - contrasts sharply with the panic to come.",
        pavls: "Voice: Adopts instructor tone, confident and clear, establishing authority before that authority is violently challenged."
    },
    
    // Paragraph 3 - Assessment
    "decision-point": {
        title: "Just below the ledge",
        category: "Structure",
        description: "Transition from general technique to specific situation.",
        effect: "Narrative focuses from wide to narrow - from general climbing to this specific moment. Reader understands we're approaching the critical decision.",
        pavls: "Structure: Narrows focus from general to specific, building toward the crucial moment of decision."
    },
    
    "calculated-planning": {
        title: "If I can step onto it",
        category: "Voice",
        description: "Methodical risk assessment and planning.",
        effect: "Shows climber's mindset - always calculating, planning routes. The conditional 'if' shows he's weighing options, not rushing. Makes the accident feel more tragic.",
        pavls: "Voice: Rational, calculating voice shows professional approach to risk, ironically just before everything goes wrong."
    },
    
    // Paragraph 4 - The Attempt
    "technical-movement": {
        title: "Stemming across the canyon",
        category: "Language",
        description: "Precise physical description of body positioning.",
        effect: "Readers can visualize exact body position - creates physical empathy. We understand the complexity and skill required.",
        pavls: "Language: Kinesthetic language helps readers feel the physical demands and positioning required."
    },
    
    "methodical": {
        title: "I kick at the boulder to test",
        category: "Voice",
        description: "Careful, methodical testing before committing weight.",
        effect: "Shows proper safety protocol - he's not reckless. This caution makes the accident more devastating - he did everything right.",
        pavls: "Voice: Methodical, safety-conscious voice emphasizes that the accident wasn't due to carelessness."
    },
    
    "warning-sign": {
        title: "It supports me but teeters slightly",
        category: "Structure",
        description: "First warning sign - subtle foreshadowing of disaster.",
        effect: "Creates dread in reader who recognizes this as ominous. The word 'but' signals danger while narrator remains unaware of the full threat.",
        pavls: "Structure: Plants seeds of unease without revealing the catastrophe, building tension through subtle warning."
    },
    
    "climbing-simile": {
        title: "akin to climbing down from the roof",
        category: "Language",
        description: "Domestic simile makes technical movement relatable.",
        effect: "Helps non-climbers understand the physical position. The everyday comparison contrasts with the extreme situation about to unfold.",
        pavls: "Language: Simile bridges expert and general audiences, making specialized movement understandable."
    },
    
    // Paragraph 5 - The Turning Point
    "turning-point": {
        title: "I feel the stone respond",
        category: "Multiple",
        description: "The moment everything changes - combines Purpose, Language, and Structure.",
        effect: "Sentence structure mimics the physics - cause and effect in real time. Technical language ('torque') maintains documentary feel even as disaster strikes.",
        pavls: "Purpose/Language/Structure: Pivotal moment uses technical language to maintain objectivity while structure shows cause-effect relationship."
    },
    
    "instant-recognition": {
        title: "Instantly, I know this is trouble",
        category: "Voice",
        description: "Immediate recognition of danger - expert intuition.",
        effect: "No denial or confusion - his experience means he immediately understands the danger. Short, stark sentence conveys sudden realization.",
        pavls: "Voice: Experienced climber's instant recognition of danger shows expertise even in crisis."
    },
    
    "instinctive": {
        title: "instinctively, I let go",
        category: "Language",
        description: "Body reacts before conscious thought.",
        effect: "Shows how training becomes instinct. The adverb 'instinctively' emphasizes the speed of events - no time for conscious decision.",
        pavls: "Language: Adverbs show actions happening below conscious thought, emphasizing speed of disaster."
    },
    
    "dramatic-imagery": {
        title: "the backlit chockstone...consumes the sky",
        category: "Language",
        description: "Cinematic imagery - visual and dramatic.",
        effect: "Shifts from technical to poetic language. 'Consumes' personifies the rock as predator. Backlit creates ominous silhouette - death approaching.",
        pavls: "Language: Shifts to cinematic/poetic language at moment of crisis, making scene visual and dramatic."
    },
    
    "primal-fear": {
        title: "Fear shoots my hands over my head",
        category: "Voice",
        description: "Raw, involuntary physical response to danger.",
        effect: "Fear becomes active agent - it 'shoots' his hands up. Shows loss of conscious control, body taking over in survival mode.",
        pavls: "Voice: Shifts from controlled expert to primal fear response, showing human vulnerability."
    },
    
    "hopeless": {
        title: "My only hope",
        category: "Purpose",
        description: "Emphasizes the limited options and desperation.",
        effect: "The word 'only' emphasizes how trapped he is even before the rock falls. Purpose shifts to immediate survival.",
        pavls: "Purpose: Conveys the desperateness of the situation and the minimal chance of escape."
    },
    
    // Paragraph 6 - Time Dilation
    "time-shift": {
        title: "The next three seconds",
        category: "Structure",
        description: "Structural shift - narrative time slows dramatically.",
        effect: "Prepares reader for slow-motion description. Three seconds will take a full paragraph - mimics how crisis distorts time perception.",
        pavls: "Structure: Announces temporal shift, preparing reader for expanded description of brief moment."
    },
    
    "time-metaphor": {
        title: "Time dilates, as if I'm dreaming",
        category: "Language",
        description: "Scientific term ('dilates') combined with dream simile.",
        effect: "Captures the surreal quality of trauma. 'Dilates' is precisely accurate - time perception does change in crisis. Dream comparison makes it relatable.",
        pavls: "Language: Combines scientific and metaphorical language to convey altered perception during trauma."
    },
    
    "slow-motion": {
        title: "In slow motion: the rock smashes",
        category: "Multiple",
        description: "Detailed sequential description of impact - clinical yet horrific.",
        effect: "Colon introduces a list of horror. Clinical detail ('lateral side of my forearm') maintains documentary tone while describing personal catastrophe. Reader experiences each impact.",
        pavls: "Purpose/Language/Structure: Blow-by-blow account serves to make reader experience the trauma. Medical precision maintains objectivity."
    },
    
    "silence": {
        title: "Then silence",
        category: "Structure",
        description: "Abrupt stop after frantic action.",
        effect: "Two-word sentence creates full stop. Mirrors the shock - from chaos to stillness. Emphasizes the finality of entrapment.",
        pavls: "Structure: Fragment sentence creates dramatic pause, emphasizing the sudden transition from action to stillness."
    },
    
    // Paragraph 7 - Realization
    "disbelief": {
        title: "My disbelief paralyzes me",
        category: "Voice",
        description: "Psychological shock before physical pain registers.",
        effect: "Shows stages of trauma response - disbelief before pain. 'Paralyzes' ironically describes mental state when physically trapped.",
        pavls: "Voice: Vulnerable, shocked voice shows human response to trauma, moving from professional to victim."
    },
    
    "medical-precision": {
        title: "my nervous system's pain response",
        category: "Language",
        description: "Clinical, medical language for describing pain.",
        effect: "Maintains observational distance even while describing agony. Shows his analytical mind still functioning despite trauma.",
        pavls: "Language: Medical terminology creates distance from pain while maintaining scientific accuracy."
    },
    
    "raw-emotion": {
        title: "Good God, my hand",
        category: "Voice",
        description: "First purely emotional outburst.",
        effect: "Breaks from controlled narration into raw emotion. The invocation of God shows desperation. Fragment emphasizes shock.",
        pavls: "Voice: Breaks into emotional exclamation, showing the human beneath the professional exterior."
    },
    
    "pain-description": {
        title: "The flaring agony",
        category: "Language",
        description: "'Flaring' suggests fire, spreading pain.",
        effect: "Vivid verb makes pain visual and dynamic. 'Agony' is stronger than 'pain' - shows extremity of situation.",
        pavls: "Language: Vivid verbs and strong nouns convey intensity of physical suffering."
    },
    
    "internal-dialogue": {
        title: "Get your hand out of there!",
        category: "Voice",
        description: "Mind speaking to body as separate entity.",
        effect: "Shows dissociation beginning - mind and body separating under trauma. Exclamation mark conveys panic.",
        pavls: "Voice: Internal dialogue shows fragmentation of self under extreme stress."
    },
    
    "futile-action": {
        title: "naive attempt to pull it out",
        category: "Language",
        description: "Self-aware description of futile effort.",
        effect: "'Naive' shows he knows it's hopeless even as he tries. Maintains analytical voice even in panic.",
        pavls: "Language: Word choice ('naive') shows self-awareness even in crisis, maintaining dual perspective."
    },
    
    "stark-reality": {
        title: "But I'm stuck",
        category: "Structure",
        description: "Three-word sentence states the core reality.",
        effect: "Shortest sentence in passage carries most weight. 'But' negates all attempts. Present tense makes it immediate and ongoing.",
        pavls: "Structure: Brief sentence emphasizes finality and hopelessness of situation."
    },
    
    // Paragraph 8 - Desperation
    "panic": {
        title: "Anxiety has my brain tweaking",
        category: "Voice",
        description: "Informal language shows mental deterioration.",
        effect: "'Tweaking' is colloquial, showing loss of professional voice. Anxiety becomes active agent controlling him.",
        pavls: "Voice: Informal language shows psychological breakdown, voice becoming less controlled."
    },
    
    "shared-reference": {
        title: "adrenaline-stoked mom lifts car",
        category: "Audience",
        description: "References shared cultural myth about superhuman strength.",
        effect: "Connects to common story everyone's heard. Shows desperate hope while acknowledging it's probably false. Creates relatability.",
        pavls: "Audience: References shared cultural knowledge, making extreme situation relatable to general readers."
    },
    
    "analytical-desperation": {
        title: "I'd give it even odds",
        category: "Voice",
        description: "Maintains analytical voice even while desperate.",
        effect: "Shows his mind still calculating probabilities even in crisis. The rational assessment of an irrational hope is deeply human.",
        pavls: "Voice: Analytical mind persists even in desperation, showing characteristic inability to stop assessing."
    },
    
    "physical-struggle": {
        title: "heaving...pushing...lifting",
        category: "Language",
        description: "Series of physical verbs showing escalating effort.",
        effect: "Repetition of action verbs creates sense of frantic effort. Reader feels the physical strain through accumulated verbs.",
        pavls: "Language: Accumulation of action verbs conveys desperate physical effort and building exhaustion."
    },
    
    "desperate-dialogue": {
        title: "Come on... move!",
        category: "Voice",
        description: "Speaking to the boulder as if it could respond.",
        effect: "Shows psychological state - treating inanimate object as negotiable. Ellipsis shows effort between words.",
        pavls: "Voice: Desperate plea to inanimate object shows psychological impact of entrapment."
    },
    
    "final-defeat": {
        title: "Nothing.",
        category: "Structure",
        description: "Single word paragraph ends the extract.",
        effect: "Absolute finality. One word carries the weight of complete failure. Stops all momentum of previous frantic activity.",
        pavls: "Structure: Single-word conclusion emphasizes complete failure and hopelessness."
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
