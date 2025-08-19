// PAVLS Analysis data for Explorers or boys messing about? by Steven Morris
const textData = {
    "opening-hook": {
        title: "ended in farce",
        translation: "Opening with failure",
        device: "Structure",
        description: "Starting with 'ended in farce' immediately undermines the explorers' credibility. The word 'farce' sets a mocking tone before we even learn about the current incident.",
        effect: "Sets skeptical tone from the start, priming readers to view the explorers as incompetent."
    },
    
    "dramatic-threat": {
        title: "threatened to send in military planes",
        translation: "Dramatic imagery",
        device: "Language",
        description: "'Threatened to send in military planes' creates an image of international incident and incompetence.",
        effect: "Makes their previous expedition sound like it caused serious diplomatic problems."
    },
    
    "icebound": {
        title: "icebound",
        translation: "Environmental adjective",
        device: "Language",
        description: "'Icebound' emphasises the harsh, frozen conditions they repeatedly choose to enter unprepared.",
        effect: "Highlights the dangerous environment they keep entering recklessly."
    },
    
    "time-marker": {
        title: "Yesterday",
        translation: "Temporal transition",
        device: "Structure",
        description: "'Yesterday' creates immediacy and news urgency, linking this failure to their pattern of mishaps.",
        effect: "Makes the story immediate and newsworthy while connecting to past failures."
    },
    
    "new-adventure": {
        title: "new adventure",
        translation: "Ironic word choice",
        device: "Language",
        description: "Calling it a 'new adventure' when it ends in disaster creates irony - their adventures are disasters.",
        effect: "The word 'adventure' becomes ironic given the outcome."
    },
    
    "almost-tragedy": {
        title: "almost led to tragedy",
        translation: "Near-miss language",
        device: "Language",
        description: "'Almost led to tragedy' emphasises how close to death they came, implying recklessness.",
        effect: "Highlights the life-threatening consequences of their poor judgment."
    },
    
    "dramatic-verb": {
        title: "plunged",
        translation: "Violent verb",
        device: "Language",
        description: "'Plunged' is more dramatic than 'crashed' or 'landed', emphasising violence and lack of control.",
        effect: "Makes the crash sound violent and uncontrolled."
    },
    
    "rescue-verb": {
        title: "plucked",
        translation: "Passive imagery",
        device: "Language",
        description: "'Plucked' makes them seem helpless, like objects being retrieved rather than competent explorers.",
        effect: "Reduces them to passive objects needing rescue."
    },
    
    "icy-water": {
        title: "icy water",
        translation: "Harsh conditions",
        device: "Language",
        description: "'Icy water' emphasises the lethal environment they put themselves in.",
        effect: "Reminds readers of the deadly conditions."
    },
    
    "duration-emphasis": {
        title: "a nine-hour rescue",
        translation: "Time cost emphasis",
        device: "Purpose",
        description: "'Nine-hour' highlights the extensive time required, building the case about waste before mentioning money.",
        effect: "Shows the extensive resources and time needed for their rescue."
    },
    
    "tripling": {
        title: "the Royal Navy, the RAF and British coastguards",
        translation: "Rule of three",
        device: "Purpose",
        description: "Listing three services (Royal Navy, RAF, British coastguards) emphasises the scale of resources needed.",
        effect: "Emphasises how many organisations had to help."
    },
    
    "resentment": {
        title: "resentment",
        translation: "Emotional language",
        device: "Voice",
        description: "'Resentment' is stronger than 'concern' or 'questions' - it shows active anger from the public.",
        effect: "Shows public anger, not just concern."
    },
    
    "cost-emphasis": {
        title: "the taxpayers of Britain and Chile tens of thousands of pounds",
        translation: "Financial impact",
        device: "Purpose",
        description: "'Tens of thousands of pounds' puts a specific price on their adventure for taxpaying readers.",
        effect: "Makes the cost concrete and personal to taxpayers."
    },
    
    "experts": {
        title: "Experts",
        translation: "Authority appeal",
        device: "Audience",
        description: "Starting with 'Experts' brings professional judgment to criticise amateur adventurers.",
        effect: "Uses authority to validate criticism."
    },
    
    "wisdom": {
        title: "wisdom",
        translation: "Judgment word",
        device: "Language",
        description: "Questioning their 'wisdom' directly challenges their intelligence and decision-making.",
        effect: "Questions their basic judgment."
    },
    
    "small-helicopter": {
        title: "small helicopter",
        translation: "Diminutive adjective",
        device: "Language",
        description: "'Small' emphasises the inadequacy of their equipment for such a journey.",
        effect: "Highlights inadequate equipment."
    },
    
    "single-engine": {
        title: "single engine",
        translation: "Technical vulnerability",
        device: "Language",
        description: "'Single engine' highlights the specific danger - no backup if it fails over the ocean.",
        effect: "Shows specific technical risk they ignored."
    },
    
    "hostile": {
        title: "hostile environment",
        translation: "Personification",
        device: "Language",
        description: "'Hostile environment' makes Antarctica seem actively aggressive, emphasising their poor judgment.",
        effect: "Makes Antarctica sound actively dangerous."
    },
    
    "confusion": {
        title: "confusion",
        translation: "Undermining purpose",
        device: "Voice",
        description: "'Confusion' suggests they lack clear goals - they're not serious explorers with a mission.",
        effect: "Questions whether they even had a real plan."
    },
    
    "trusty-irony": {
        title: "\"trusty helicopter\"",
        translation: "Ironic quotation",
        device: "Voice",
        description: "Quotation marks around 'trusty helicopter' signal Morris's skepticism - it just crashed.",
        effect: "Quotation marks signal heavy irony."
    },
    
    "did-not-know": {
        title: "did not know",
        translation: "Domestic ignorance",
        device: "Voice",
        description: "Even his wife 'did not know' their plans, suggesting poor planning and communication.",
        effect: "Shows lack of planning if wife doesn't know."
    },
    
    "boys-messing": {
        title: "boys messing about with a helicopter",
        translation: "Infantilising quote",
        device: "Voice",
        description: "'Boys messing about' reduces them from men and explorers to children playing with toys.",
        effect: "Infantilises grown men into irresponsible boys."
    },
    
    "drama-begins": {
        title: "The drama began",
        translation: "Narrative shift",
        device: "Structure",
        description: "'The drama began' shifts to storytelling mode, making it sound like unnecessary theatre.",
        effect: "Makes it sound like theatrical performance, not serious exploration."
    },
    
    "nickname": {
        title: "also known as Q",
        translation: "Trivialising detail",
        device: "Language",
        description: "'Also known as Q' adds James Bond pretension that seems absurd given their incompetence.",
        effect: "James Bond reference seems pretentious given the failure."
    },
    
    "ditched": {
        title: "ditched",
        translation: "Aviation jargon",
        device: "Language",
        description: "'Ditched' is technical aviation language for emergency water landing, adding authenticity.",
        effect: "Technical term adds factual weight."
    },
    
    "distances": {
        title: "100 miles off Antarctica, about 36 miles north of Smith Island",
        translation: "Precise geography",
        device: "Language",
        description: "Specific distances ('100 miles... 36 miles') emphasise how far from help they were.",
        effect: "Shows how remote and dangerous their location was."
    },
    
    "scrambled": {
        title: "scrambled",
        translation: "Panic verb",
        device: "Language",
        description: "'Scrambled' suggests desperate, undignified panic rather than calm emergency response.",
        effect: "Suggests panic rather than calm professional response."
    },
    
    "direct-quote": {
        title: "He said they were both in the liferaft but were okay and could I call the emergency people?",
        translation: "Domestic normalcy",
        device: "Voice",
        description: "The wife's matter-of-fact quote ('could I call the emergency people?') makes the life-threatening situation sound like calling a plumber.",
        effect: "Makes life-threatening emergency sound mundane."
    },
    
    "luxury-detail": {
        title: "Mr Brooks' Breitling emergency watch, a wedding present",
        translation: "Class marker",
        device: "Language",
        description: "'Breitling emergency watch, a wedding present' subtly highlights their wealth - they have expensive toys for their dangerous games.",
        effect: "Subtly highlights their privilege and wealth."
    },
    
    "nautical-verb": {
        title: "steaming",
        translation: "Naval terminology",
        device: "Language",
        description: "'Steaming' is proper nautical language, contrasting professional Navy response with amateur explorers.",
        effect: "Professional naval term contrasts with amateur explorers."
    },
    
    "miracle-quote": {
        title: "nothing short of a miracle",
        translation: "Contrasting perspective",
        device: "Voice",
        description: "An Antarctic explorer calling survival 'a miracle' emphasises how lucky they were, not how skilled.",
        effect: "Expert opinion emphasises luck over skill."
    },
    
    "credentials": {
        title: "Both men are experienced adventurers",
        translation: "Delayed credentials",
        device: "Structure",
        description: "Morris waits until paragraph 15 to list their experience, after establishing them as incompetent - the structure undermines their achievements.",
        effect: "Credentials come too late to change impression of incompetence."
    },
    
    "class-marker": {
        title: "a property developer from London",
        translation: "Social positioning",
        device: "Audience",
        description: "'Property developer from London' signals wealth and privilege to Guardian readers, suggesting entitled rich men playing with danger.",
        effect: "Class marker suggesting privilege and entitlement."
    },
    
    "impressive-detail": {
        title: "The 16,000-mile trip took three months",
        translation: "Scale emphasis",
        device: "Language",
        description: "'16,000-mile trip took three months' sounds impressive but in context suggests they have too much time and money.",
        effect: "Impressive but suggests too much leisure time."
    },
    
    "undermining-transition": {
        title: "Despite their experience",
        translation: "Contradicting transition",
        device: "Structure",
        description: "'Despite their experience' sets up the contradiction - all their experience doesn't prevent repeated failures.",
        effect: "Transition undermines all the credentials just listed."
    },
    
    "pattern-criticism": {
        title: "it is not the first time they have hit the headlines for the wrong reasons",
        translation: "Pattern establishment",
        device: "Voice",
        description: "'Not the first time they have hit the headlines for the wrong reasons' establishes a pattern of failure and publicity-seeking.",
        effect: "Establishes pattern of failure and attention-seeking."
    },
    
    "failure-pattern": {
        title: "they were forced to call a halt",
        translation: "Repeated failure",
        device: "Structure",
        description: "'Forced to call a halt' shows another abandoned mission, reinforcing the pattern of incompetence.",
        effect: "Another failed mission reinforces incompetence."
    },
    
    "ironically": {
        title: "Ironically",
        translation: "Ironic commentary",
        device: "Voice",
        description: "'Ironically' highlights the gap between their stated aims (showing good relations) and actual results (international incident).",
        effect: "Points out the ironic failure of their mission."
    },
    
    "expert-criticism": {
        title: "The wisdom of the team's latest adventure was questioned by, among others, Günter Endres, editor of Jane's Helicopter Markets and Systems",
        translation: "Professional authority",
        device: "Purpose",
        description: "Citing the editor of Jane's Helicopter Markets adds authoritative weight to criticism of their judgment.",
        effect: "Expert authority validates criticism."
    },
    
    "expert-quote": {
        title: "I wouldn't use a helicopter like that to go so far over the sea. It sounds as if they were pushing it to the maximum",
        translation: "Direct expert criticism",
        device: "Language",
        description: "'I wouldn't use a helicopter like that' is damning professional judgment - they made a basic error that any expert would avoid.",
        effect: "Expert directly criticises their basic judgment."
    },
    
    "excellent-irony": {
        title: "excellent",
        translation: "Ironic juxtaposition",
        device: "Voice",
        description: "Claims of 'excellent' conditions after a crash create irony - either they're lying or can't handle even perfect conditions.",
        effect: "If conditions were excellent, the crash is even more damning."
    },
    
    "taxpayer-bill": {
        title: "The Ministry of Defence said the taxpayer would pick up the bill",
        translation: "Cost confirmation",
        device: "Purpose",
        description: "Official confirmation that 'the taxpayer would pick up the bill' validates the article's main criticism about wasted public money.",
        effect: "Confirms taxpayers will pay for their recklessness."
    },
    
    "highly-unlikely": {
        title: "highly unlikely",
        translation: "Bureaucratic language",
        device: "Language",
        description: "'Highly unlikely' is bureaucratic speak for 'definitely not' - the money is gone forever.",
        effect: "Bureaucratic euphemism meaning 'never'."
    },
    
    "wife-comment": {
        title: "they'll probably have their bottoms kicked and be sent home the long way",
        translation: "Domestic comedy ending",
        device: "Voice",
        description: "The wife's comment about 'bottoms kicked' reduces the explorers to naughty schoolboys, ending on domestic comedy rather than heroic adventure.",
        effect: "Final infantilisation - naughty boys getting punished."
    }
};

// Vocabulary definitions
const vocabData = {
    "farce": {
        title: "farce",
        translation: "A complete failure or ridiculous situation",
        device: "Vocabulary",
        description: "Something absurd or ridiculous; a complete failure",
        effect: "Sets mocking tone from the very beginning."
    },
    
    "intercept": {
        title: "intercept",
        translation: "To stop and catch",
        device: "Vocabulary",
        description: "To stop and catch something or someone before they reach their destination",
        effect: "Suggests they were doing something wrong that needed stopping."
    },
    
    "plunged": {
        title: "plunged",
        translation: "Fell suddenly",
        device: "Vocabulary",
        description: "Fell or dived suddenly and uncontrollably",
        effect: "Emphasises violent, uncontrolled descent."
    },
    
    "hostile": {
        title: "hostile",
        translation: "Unfriendly, harsh",
        device: "Vocabulary",
        description: "Unfriendly, antagonistic; (of environment) harsh and difficult to survive in",
        effect: "Makes environment sound actively dangerous."
    },
    
    "ditched": {
        title: "ditched",
        translation: "Emergency water landing",
        device: "Vocabulary",
        description: "Made an emergency landing on water (aviation term)",
        effect: "Technical term adds authenticity to report."
    },
    
    "scrambled": {
        title: "scrambled",
        translation: "Moved quickly in panic",
        device: "Vocabulary",
        description: "Moved or climbed quickly and with difficulty, often in panic",
        effect: "Suggests undignified panic."
    },
    
    "dispatched": {
        title: "dispatched",
        translation: "Sent urgently",
        device: "Vocabulary",
        description: "Sent off to a destination for a purpose",
        effect: "Shows professional response to emergency."
    },
    
    "amphibious": {
        title: "amphibious",
        translation: "Works on land and water",
        device: "Vocabulary",
        description: "Able to operate both on land and in water",
        effect: "Technical term showing sophisticated equipment they still failed with."
    },
    
    "floes": {
        title: "floes",
        translation: "Floating ice sheets",
        device: "Vocabulary",
        description: "Sheets of floating ice",
        effect: "Specific Arctic terminology."
    }
};

// Export for use in interactive.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textData, vocabData };
}
