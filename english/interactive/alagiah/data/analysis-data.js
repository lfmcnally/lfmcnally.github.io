// PAVLS Analysis data for A Passage to Africa by George Alagiah
const textData = {
    // Paragraph 1 - Opening
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
    
    // Paragraph 2 - Setting
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
    
    // Paragraph 3 - Journalists' hunt
    "ghoulish-manner": {
        title: "In the ghoulish manner of journalists on the hunt for the most striking pictures",
        translation: "Self-criticism",
        device: "Voice - Self-aware",
        description: "'Ghoulish' shows awareness of how morbid journalism can appear.",
        effect: "Acknowledges the uncomfortable truth about disaster journalism - feeding on others' misery."
    },
    
    "no-longer-impressed": {
        title: "What might have appalled us when we'd started our trip just a few days before no longer impressed us much",
        translation: "Desensitisation",
        device: "Purpose - Confession",
        description: "Admits to becoming numb to suffering through overexposure.",
        effect: "Shows how quickly humans adapt to horror. Raises questions about compassion fatigue."
    },
    
    "drug-metaphor": {
        title: "The search for the shocking is like the craving for a drug: you require heavier and more frequent doses the longer you're at it",
        translation: "Addiction comparison",
        device: "Language - Metaphor",
        description: "Compares need for increasingly shocking images to drug addiction.",
        effect: "Reveals dark psychology of news media - always needing more extreme content."
    },
    
    "callous-but-fact": {
        title: "This sounds callous, but it is just a fact of life",
        translation: "Brutal honesty",
        device: "Voice - Matter-of-fact",
        description: "Acknowledges how cold this sounds while defending it as reality.",
        effect: "Refuses to sugar-coat the reality of news gathering. Challenges reader's comfort."
    },
    
    "comfort-sitting-rooms": {
        title: "It's how we collect and compile the images that so move people in the comfort of their sitting rooms back home",
        translation: "Distance and privilege",
        device: "Audience - Western viewers",
        description: "Contrasts comfortable viewers with suffering subjects.",
        effect: "Highlights inequality between those who watch and those who suffer."
    },
    
    // Paragraph 4 - Amina's story
    "terminal-hunger": {
        title: "the final, enervating stages of terminal hunger",
        translation: "Medical precision",
        device: "Language - Technical",
        description: "'Terminal' and 'enervating' give clinical description of death by starvation.",
        effect: "Medical language creates distance but also emphasises inevitability of death."
    },
    
    "one-daughter": {
        title: "By the time Amina returned, she had only one daughter",
        translation: "Understated tragedy",
        device: "Structure - Anticlimax",
        description: "Matter-of-fact delivery of child's death.",
        effect: "The simplicity makes it more devastating - death has become ordinary."
    },
    
    "no-rage-whimpering": {
        title: "No rage, no whimpering, just a passing away",
        translation: "Quiet death",
        device: "Language - Negation",
        description: "Lists what didn't happen to emphasise the silence.",
        effect: "Death without drama is somehow more disturbing - too weak even to protest."
    },
    
    "frictionless-deliverance": {
        title: "that simple, frictionless, motionless deliverance from a state of half-life to death itself",
        translation: "Gentle horror",
        device: "Language - Oxymoron",
        description: "Soft words ('deliverance') for harsh reality (death).",
        effect: "The gentleness of the language makes the death more haunting."
    },
    
    "quiet-suffering": {
        title: "a vision of 'famine away from the headlines, a famine of quiet suffering and lonely death'",
        translation: "Hidden tragedy",
        device: "Purpose - Witness",
        description: "Quotes his own dispatch to show suffering beyond media attention.",
        effect: "Reveals purpose: to show unseen suffering, the famine that doesn't make news."
    },
    
    // Paragraph 5 - Old woman
    "smell-drew-me": {
        title: "It was the smell that drew me to her doorway: the smell of decaying flesh",
        translation: "Sensory horror",
        device: "Voice - Reporter's eye",
        description: "Follows his senses like a detective, matter-of-fact about decay.",
        effect: "Shows how journalists must confront the physical reality of death."
    },
    
    "festering-wound": {
        title: "Where her shinbone should have been there was a festering wound the size of my hand",
        translation: "Visceral description",
        device: "Language - Graphic imagery",
        description: "Specific, measurable detail ('size of my hand') makes it real.",
        effect: "Personal measurement makes reader visualise the wound clearly."
    },
    
    "boomerang-shape": {
        title: "The shattered leg had fused into the gentle V-shape of a boomerang",
        translation: "Incongruous comparison",
        device: "Language - Simile",
        description: "Everyday object (boomerang) describes horrific injury.",
        effect: "The familiar comparison makes the deformity more disturbing."
    },
    
    "rotting-repetition": {
        title: "It was rotting; she was rotting",
        translation: "Parallel decay",
        device: "Language - Repetition",
        description: "Repetition links wound to whole person - all decaying.",
        effect: "Shows how injury has consumed her entire being."
    },
    
    "sick-yellow-eyes": {
        title: "You could see it in her sick, yellow eyes and smell it in the putrid air she recycled with every struggling breath she took",
        translation: "Multi-sensory decay",
        device: "Language - Sensory imagery",
        description: "Sight and smell combine to create overwhelming sense of decay.",
        effect: "Makes reader almost experience the scene physically."
    },
    
    // Paragraph 6 - Transition
    "and-then": {
        title: "And then there was the face I will never forget",
        translation: "Pivotal moment",
        device: "Structure - Short paragraph",
        description: "Single sentence paragraph for maximum emphasis.",
        effect: "Creates dramatic pause before the central encounter."
    },
    
    // Paragraph 7 - Revulsion
    "pity-revulsion": {
        title: "My reaction to everyone else I met that day was a mixture of pity and revulsion",
        translation: "Conflicted response",
        device: "Voice - Honest",
        description: "Admits to negative feelings alongside compassion.",
        effect: "Challenges idea that witnesses only feel sympathy - more complex."
    },
    
    "yes-revulsion": {
        title: "Yes, revulsion",
        translation: "Uncomfortable truth",
        device: "Voice - Emphatic",
        description: "Repetition and emphasis force reader to confront this.",
        effect: "Won't let reader or himself avoid the difficult truth."
    },
    
    "degeneration": {
        title: "The degeneration of the human body, sucked of its natural vitality by the twin evils of hunger and disease, is a disgusting thing",
        translation: "Frank assessment",
        device: "Language - Personification",
        description: "'Twin evils' personifies hunger and disease as active agents.",
        effect: "Makes suffering seem like deliberate attack on human dignity."
    },
    
    "never-say-tv": {
        title: "We never say so in our TV reports. It's a taboo that has yet to be breached",
        translation: "Media censorship",
        device: "Audience - TV viewers",
        description: "Reveals what journalism usually hides from public.",
        effect: "Shows gap between reality and what public is shown."
    },
    
    "feeding-centre": {
        title: "To be in a feeding centre is to hear and smell the excretion of fluids by people who are beyond controlling their bodily functions",
        translation: "Loss of dignity",
        device: "Language - Parallel structure",
        description: "Repeated 'To be...' structure emphasises sensory assault.",
        effect: "Forces reader to imagine being there, experiencing the reality."
    },
    
    "surreptitiously": {
        title: "surreptitiously",
        translation: "Secret action",
        device: "Language - Adverb",
        description: "Shows shame in natural human reaction to disease.",
        effect: "Reveals the guilt of feeling disgusted by suffering."
    },
    
    // Paragraph 8 - Dignity
    "pity-too": {
        title: "There's pity, too",
        translation: "Return to compassion",
        device: "Structure - Balance",
        description: "Balances previous focus on revulsion with pity.",
        effect: "Shows complex emotional response - not just one feeling."
    },
    
    "aspire-dignity": {
        title: "because even in this state of utter despair they aspire to a dignity that is almost impossible to achieve",
        translation: "Human resilience",
        device: "Purpose - Humanise",
        description: "Shows victims maintaining humanity despite conditions.",
        effect: "Most heartbreaking observation - they still try to maintain dignity."
    },
    
    "shrivelled-body": {
        title: "An old woman will cover her shrivelled body with a soiled cloth as your gaze turns towards her",
        translation: "Modesty preserved",
        device: "Language - Specific example",
        description: "Concrete image of attempting dignity in degradation.",
        effect: "Shows human instinct for privacy remains even in extremity."
    },
    
    "keeps-hoe": {
        title: "keeps his hoe next to the mat with which, one day soon, they will shroud his corpse",
        translation: "Preparing for death",
        device: "Language - Juxtaposition",
        description: "Tool of life (hoe) next to death shroud.",
        effect: "Shows acceptance of death while clinging to symbols of life."
    },
    
    "till-soil": {
        title: "as if he means to go out and till the soil once all this is over",
        translation: "Hope against hope",
        device: "Voice - Sympathetic",
        description: "Narrator interprets gesture as maintaining hope.",
        effect: "Desperately sad - the futility of hope in hopeless situation."
    },
    
    // Paragraph 9 - The smile
    "few-seconds": {
        title: "I saw that face for only a few seconds",
        translation: "Brief encounter",
        device: "Structure - Time marker",
        description: "Emphasises how brief yet impactful the moment was.",
        effect: "Shows how quickly profound experiences can occur."
    },
    
    "fleeting-meeting": {
        title: "a fleeting meeting of eyes",
        translation: "Human connection",
        device: "Language - Alliteration",
        description: "Alliteration emphasises the momentary connection.",
        effect: "Eye contact creates intimacy between journalist and subject."
    },
    
    "not-from-me": {
        title: "not from me, but from the face",
        translation: "Unexpected response",
        device: "Voice - Surprised",
        description: "Emphasises that the smile came from the suffering man.",
        effect: "Reverses expected dynamic - the victim initiates connection."
    },
    
    "not-greeting-joy": {
        title: "It was not a smile of greeting, it was not a smile of joy — how could it be? — but it was a smile nonetheless",
        translation: "Mysterious smile",
        device: "Language - Repetition/Negation",
        description: "Process of elimination to understand the smile.",
        effect: "Makes smile more enigmatic - what could it mean?"
    },
    
    "touched-me": {
        title: "It touched me in a way I could not explain. It moved me in a way that went beyond pity or revulsion",
        translation: "Profound impact",
        device: "Purpose - Transform",
        description: "Shows this encounter transcended his usual responses.",
        effect: "Signals this is the transformative moment of the piece."
    },
    
    // Paragraph 10 - Finding out
    "what-was-it": {
        title: "What was it about that smile? I had to find out",
        translation: "Compelled to understand",
        device: "Voice - Determined",
        description: "Short sentences show urgency to understand.",
        effect: "Reader shares the need to understand this mystery."
    },
    
    "embarrassed": {
        title: "It's just that he was embarrassed to be found in this condition",
        translation: "The revelation",
        device: "Language - Understatement",
        description: "'Just' minimises while revealing profound truth.",
        effect: "Simple explanation carries enormous weight."
    },
    
    "then-clicked": {
        title: "And then it clicked",
        translation: "Moment of understanding",
        device: "Voice - Colloquial",
        description: "Informal phrase for moment of realisation.",
        effect: "Makes revelation feel immediate and personal."
    },
    
    "feeble-smile": {
        title: "It was the feeble smile that goes with apology, the kind of smile you might give if you felt you had done something wrong",
        translation: "Universal gesture",
        device: "Language - Comparison",
        description: "Relates to common experience everyone knows.",
        effect: "Makes extreme situation relatable through familiar gesture."
    },
    
    // Paragraph 11 - Unsettled
    "normally-inured": {
        title: "Normally inured to stories of suffering, accustomed to the evidence of deprivation",
        translation: "Professional armour",
        device: "Voice - Professional",
        description: "Shows his usual emotional defences as journalist.",
        effect: "Sets up contrast with how this encounter broke through."
    },
    
    "unsettled": {
        title: "I was unsettled by this one smile in a way I had never been before",
        translation: "Breakthrough moment",
        device: "Purpose - Personal impact",
        description: "This smile penetrated professional distance.",
        effect: "Shows this was uniquely powerful encounter."
    },
    
    "unwritten-code": {
        title: "There is an unwritten code between the journalist and his subjects in these situations. The journalist observes, the subject is observed. The journalist is active, the subject is passive",
        translation: "Power dynamics",
        device: "Audience - Media critique",
        description: "Explains normal relationship between journalist and subject.",
        effect: "Makes reader aware of power imbalance in journalism."
    },
    
    "turned-tables": {
        title: "But this smile had turned the tables on that tacit agreement",
        translation: "Power reversal",
        device: "Structure - Turning point",
        description: "The smile reversed the normal power dynamic.",
        effect: "Subject became active, journalist became questioned."
    },
    
    "posed-question": {
        title: "Without uttering a single word, the man had posed a question that cut to the heart of the relationship between me and him, between us and them, between the rich world and the poor world",
        translation: "Silent challenge",
        device: "Purpose - Universal question",
        description: "Expands from personal to global implications.",
        effect: "One smile questions entire global inequality."
    },
    
    "how-should-i": {
        title: "If he was embarrassed to be found weakened by hunger and ground down by conflict, how should I feel to be standing there so strong and confident?",
        translation: "Moral question",
        device: "Voice - Self-questioning",
        description: "Rhetorical question challenges his own position.",
        effect: "Forces reader to question their own privilege too."
    },
    
    // Paragraph 12 - Resolution
    "resolved": {
        title: "I resolved there and then",
        translation: "Immediate decision",
        device: "Voice - Determined",
        description: "Shows instant commitment to action.",
        effect: "Smile created immediate sense of obligation."
    },
    
    "write-power": {
        title: "I would write the story of Gufgaduud with all the power and purpose I could muster",
        translation: "Journalistic mission",
        device: "Purpose - Commitment",
        description: "Pledges to use his skills to honor the encounter.",
        effect: "Writing becomes act of respect and obligation."
    },
    
    "adequate-answer": {
        title: "It seemed at the time, and still does, the only adequate answer a reporter can give to the man's question",
        translation: "Limited response",
        device: "Voice - Humble",
        description: "Acknowledges limitations of what he can do.",
        effect: "Writing is insufficient but only tool he has."
    },
    
    // Paragraph 13 - Regret
    "one-regret": {
        title: "I have one regret about that brief encounter in Gufgaduud",
        translation: "Lasting regret",
        device: "Voice - Reflective",
        description: "Shows encounter still troubles him.",
        effect: "Demonstrates lasting impact of meeting."
    },
    
    "never-found-name": {
        title: "I see that I never found out what the man's name was",
        translation: "Anonymous subject",
        device: "Structure - Irony",
        description: "Most important person remains nameless.",
        effect: "Shows failure to fully humanise despite learning from him."
    },
    
    "seminal-moment": {
        title: "Yet meeting him was a seminal moment in the gradual collection of experiences we call context",
        translation: "Defining encounter",
        device: "Purpose - Education",
        description: "'Seminal' shows this planted seeds of understanding.",
        effect: "One moment changed his entire perspective on journalism."
    },
    
    "facts-figures": {
        title: "Facts and figures are the easy part of journalism. Knowing where they sit in the great scheme of things is much harder",
        translation: "Beyond statistics",
        device: "Audience - Fellow journalists",
        description: "Message to other journalists about true understanding.",
        effect: "Challenges superficial reporting that focuses on data."
    },
    
    "nameless-friend": {
        title: "So, my nameless friend, if you are still alive, I owe you one",
        translation: "Direct address",
        device: "Voice - Grateful",
        description: "Speaks directly to the man, acknowledging debt.",
        effect: "Circular ending - returns to individual who changed him."
    }
};

// Vocabulary definitions for complex terms
const vocabData = {
    "enervating": {
        title: "enervating",
        translation: "Causing one to feel drained of energy or vitality; weakening",
        device: "Vocabulary",
        description: "From Latin 'enervare' meaning to weaken or destroy the strength of.",
        effect: "Describes the exhausting final stages of starvation - the body literally losing all energy."
    },
    
    "surreptitiously": {
        title: "surreptitiously",
        translation: "In a way that attempts to avoid notice or attention; secretively",
        device: "Vocabulary",
        description: "From Latin 'surrepticius' meaning stolen, furtive, or clandestine.",
        effect: "Shows the shameful secrecy of wiping hands after touching the sick - the guilt in natural revulsion."
    },
    
    "inured": {
        title: "inured",
        translation: "Accustomed to something unpleasant through prolonged exposure",
        device: "Vocabulary",
        description: "From Latin 'in + ure' meaning to harden or habituate through use or practice.",
        effect: "Describes how journalists become hardened to suffering - professional detachment as defense mechanism."
    }
};

// Export for use in interactive.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textData, vocabData };
}
