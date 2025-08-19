// PAVLS Analysis data for Chinese Cinderella by Adeline Yen Mah
const textData = {
    // Paragraph 1 - Setting the scene
    "relentlessly": {
        title: "relentlessly",
        translation: "Without pause or pity",
        device: "Language - Adverb",
        description: "Time as merciless force that won't stop.",
        effect: "Creates sense of inevitability and doom approaching."
    },
    
    "perhaps-forever": {
        title: "perhaps the end of school forever",
        translation: "Educational death",
        device: "Voice - Despair",
        description: "Fears permanent end to education.",
        effect: "Shows how precarious her position is - education could be snatched away."
    },
    
    // Paragraph 2 - Playing Monopoly
    "heart-not": {
        title: "My heart was not in it",
        translation: "Emotional absence",
        device: "Voice - Detached",
        description: "Physically present but emotionally elsewhere.",
        effect: "Shows preoccupation with deeper worries."
    },
    
    "throbbed-toothache": {
        title: "throbbed at the back of my mind like a persistent toothache",
        translation: "Nagging pain",
        device: "Language - Simile",
        description: "Mental worry becomes physical pain.",
        effect: "Makes abstract anxiety tangible and inescapable."
    },
    
    // Paragraph 6 - The summons
    "chauffeur-waiting": {
        title: "Your chauffeur is waiting to take you home!",
        translation: "Ominous summons",
        device: "Structure - Turning point",
        description: "Unexpected call home signals trouble.",
        effect: "Creates immediate tension - being called home is never good."
    },
    
    // Paragraph 7 - Fear
    "full-foreboding": {
        title: "Full of foreboding",
        translation: "Dread-filled",
        device: "Voice - Anxious",
        description: "Expecting the worst before knowing anything.",
        effect: "Shows learned response - home means danger."
    },
    
    "as-nightmare": {
        title: "as in a nightmare",
        translation: "Dreamlike horror",
        device: "Language - Simile",
        description: "Reality feels unreal in its horror.",
        effect: "Dissociation from trauma - too terrible to be real."
    },
    
    "who-died": {
        title: "who had died this time",
        translation: "Death expectation",
        device: "Voice - Traumatised",
        description: "'This time' suggests previous deaths.",
        effect: "Reveals pattern of tragedy in her life."
    },
    
    // Paragraph 9 - The journey
    "your-guess": {
        title: "Your guess is as good as mine. They give the orders and I carry them out",
        translation: "Hierarchy revealed",
        device: "Audience - Class structure",
        description: "Chauffeur shows family power structure.",
        effect: "Even servants don't know - shows her isolation."
    },
    
    // Paragraph 10 - Dread
    "heart-dread": {
        title: "my heart was full of dread",
        translation: "Physical fear",
        device: "Voice - Embodied emotion",
        description: "Heart as container filled with fear.",
        effect: "Makes emotional state physical and overwhelming."
    },
    
    // Paragraph 11-13 - New home
    "foolishly": {
        title: "foolishly",
        translation: "Self-criticism",
        device: "Voice - Self-deprecating",
        description: "Judges herself for not knowing.",
        effect: "Internalised criticism - blames herself."
    },
    
    "dont-know-anything": {
        title: "Don't you know anything?",
        translation: "Contempt",
        device: "Voice - Others' disdain",
        description: "Even chauffeur shows no respect.",
        effect: "Shows her low status - servants can insult her."
    },
    
    "i-forgotten": {
        title: "I had forgotten",
        translation: "Excluded child",
        device: "Voice - Apologetic",
        description: "Forgotten because never told about move.",
        effect: "Shows how excluded from family information she is."
    },
    
    // Paragraph 16 - Father's summons
    "father-room": {
        title: "Your father is in his room and wants to see you as soon as you get home",
        translation: "Command performance",
        device: "Structure - Building tension",
        description: "Immediate summons to father's private space.",
        effect: "Unprecedented event - something significant coming."
    },
    
    // Paragraph 17 - Holy of Holies
    "holy-holies": {
        title: "Holy of Holies",
        translation: "Sacred space",
        device: "Language - Biblical allusion",
        description: "References Jewish temple's most sacred room.",
        effect: "Father's room as forbidden sacred space - he is god-like."
    },
    
    // Paragraph 18 - Meeting father
    "happy-mood": {
        title: "happy mood",
        translation: "Unusual state",
        device: "Structure - Surprise",
        description: "Father's happiness is noteworthy and suspicious.",
        effect: "So rare it's frightening - what does it mean?"
    },
    
    "small-sigh": {
        title: "small sigh of relief",
        translation: "Tentative relief",
        device: "Voice - Cautious",
        description: "'Small' shows she doesn't trust the relief.",
        effect: "Years of abuse make her suspicious of kindness."
    },
    
    "giant-ruse": {
        title: "Is this a giant ruse on his part to trick me? Dare I let my guard down?",
        translation: "Survival paranoia",
        device: "Voice - Hypervigilant",
        description: "Questions show learned distrust.",
        effect: "Abuse victim's mindset - kindness might be trap."
    },
    
    // Paragraph 19-20 - The newspaper
    "dont-scared": {
        title: "Don't look so scared",
        translation: "Father notices fear",
        device: "Voice - Father's awareness",
        description: "Acknowledges her visible terror.",
        effect: "She can't hide her fear even when he's kind."
    },
    
    "adeline-capitals": {
        title: "ADELINE YEN in capital letters prominently displayed",
        translation: "Public recognition",
        device: "Structure - Visual emphasis",
        description: "Capitals make her name jump out.",
        effect: "First time her name has importance."
    },
    
    // Paragraph 21 - The announcement
    "prestigious-event": {
        title: "prestigious event",
        translation: "High status",
        device: "Audience - Public achievement",
        description: "Competition has social value.",
        effect: "Achievement that matters to father's circle."
    },
    
    "fifty-pounds": {
        title: "FIFTY ENGLISH POUNDS",
        translation: "Significant money",
        device: "Language - Capitals for emphasis",
        description: "Large sum in 1950s Hong Kong.",
        effect: "Tangible value beyond just honour."
    },
    
    "bringing-honour": {
        title: "bringing honour to Hong Kong",
        translation: "Public glory",
        device: "Purpose - Cultural values",
        description: "Individual achievement brings collective honour.",
        effect: "Shows Chinese concept of reflected glory."
    },
    
    // Paragraph 22 - Disbelief
    "is-possible": {
        title: "Is it possible? Am I dreaming? Me, the winner?",
        translation: "Stunned disbelief",
        device: "Voice - Fragmenting",
        description: "Three questions show mental fragmentation.",
        effect: "Cannot process good fortune - too unexpected."
    },
    
    // Paragraph 23-24 - Father's pride
    "well-done": {
        title: "Well done!",
        translation: "Rare praise",
        device: "Voice - Father's approval",
        description: "Simple praise carries enormous weight.",
        effect: "Two words she's waited lifetime to hear."
    },
    
    "radiant": {
        title: "radiant",
        translation: "Glowing with pride",
        device: "Language - Light imagery",
        description: "Father literally glowing with satisfaction.",
        effect: "Transformation - she's made him shine."
    },
    
    "for-once": {
        title: "For once, he was proud of me",
        translation: "Exceptional moment",
        device: "Structure - Pivotal moment",
        description: "'For once' emphasises rarity.",
        effect: "Lifetime of rejection makes this moment precious."
    },
    
    "given-face": {
        title: "I had given him face",
        translation: "Social status enhanced",
        device: "Purpose - Cultural concept",
        description: "Chinese concept of social reputation/honour.",
        effect: "Her achievement raises his status - finally useful."
    },
    
    "whole-being": {
        title: "My whole being vibrated with all the joy in the world",
        translation: "Total ecstasy",
        device: "Language - Physical metaphor",
        description: "Joy as vibration through entire body.",
        effect: "Overwhelming physical response to emotional moment."
    },
    
    "stretch-stars": {
        title: "I only had to stretch out my hand to reach the stars",
        translation: "Dreams accessible",
        device: "Language - Celestial metaphor",
        description: "Stars (dreams) suddenly within reach.",
        effect: "Impossible becomes possible in this moment."
    },
    
    // Paragraph 26-27 - The conversation
    "only-one": {
        title: "Perhaps I was the only one determined enough to enter and there were no other competitors!",
        translation: "Self-deprecation",
        device: "Voice - Modest",
        description: "Minimises achievement to avoid seeming proud.",
        effect: "Learned behaviour - don't claim credit."
    },
    
    "doubt-it": {
        title: "I doubt it very much but that's a good answer",
        translation: "Appreciating modesty",
        device: "Voice - Father's approval",
        description: "Father likes her humility.",
        effect: "Modesty is proper behaviour for Chinese daughter."
    },
    
    // Paragraph 28-30 - The request
    "now-never": {
        title: "it was now or never",
        translation: "Crucial moment",
        device: "Structure - Climax",
        description: "Recognises this unique opportunity.",
        effect: "Must seize moment while father is pleased."
    },
    
    "may-i-go": {
        title: "May I go to university in England too, just like my brothers?",
        translation: "Equal treatment plea",
        device: "Purpose - Gender equality",
        description: "Asks for same opportunity as male siblings.",
        effect: "Reveals gender discrimination - brothers automatically go."
    },
    
    "have-potential": {
        title: "I do believe you have potential",
        translation: "Grudging recognition",
        device: "Voice - Conditional approval",
        description: "Finally acknowledges her ability.",
        effect: "Potential not achievement - still qualified praise."
    },
    
    "heart-lurch": {
        title: "My heart gave a giant lurch",
        translation: "Physical shock",
        device: "Voice - Visceral response",
        description: "Heart physically moves from emotion.",
        effect: "Joy so intense it's physically felt."
    },
    
    "how-marvellous": {
        title: "How marvellous it was simply to be alive!",
        translation: "Existential joy",
        device: "Language - Exclamation",
        description: "Life itself becomes wonderful.",
        effect: "Shows depth of previous despair."
    },
    
    "entering-heaven": {
        title: "Going to England is like entering heaven. Does it matter what you do after you get to heaven?",
        translation: "Paradise achieved",
        device: "Voice - Religious ecstasy",
        description: "England as promised land/afterlife.",
        effect: "Escape from Hong Kong hell is everything."
    },
    
    // Paragraph 33 - Father's response
    "writer-scoffed": {
        title: "Writer!' he scoffed. 'You are going to starve!",
        translation: "Dreams dismissed",
        device: "Language - Contemptuous",
        description: "Scorn for creative ambition.",
        effect: "Crushes artistic dreams as impractical."
    },
    
    "rather-elementary": {
        title: "your Chinese is actually rather elementary",
        translation: "Linguistic inadequacy",
        device: "Purpose - Limitation",
        description: "Denies her competence in own language.",
        effect: "Trapped between languages - belonging nowhere."
    },
    
    // Paragraph 34 - Silence
    "waited-silence": {
        title: "I waited in silence. I did not wish to contradict him",
        translation: "Learned submission",
        device: "Voice - Obedient",
        description: "Knows not to argue when dreams crushed.",
        effect: "Years of training - accept father's decisions."
    },
    
    // Paragraph 35 - Father's plan
    "medical-school": {
        title: "you will go to medical school",
        translation: "Fate decided",
        device: "Structure - Command",
        description: "No discussion - father decides career.",
        effect: "Her achievement gives her education but not choice."
    },
    
    "foolproof-profession": {
        title: "That's a foolproof profession for you. Don't you agree?",
        translation: "Rhetorical question",
        device: "Purpose - False choice",
        description: "Agreement expected, not genuine question.",
        effect: "Illusion of consultation but decision made."
    },
    
    // Paragraph 36 - Acceptance
    "agree-course": {
        title: "Agree? Of course I agreed",
        translation: "No real choice",
        device: "Voice - Pragmatic",
        description: "Rhetorical question becomes bitter statement.",
        effect: "Shows she understands the game - agree or lose everything."
    },
    
    "apparently-planned": {
        title: "Apparently, he had it all planned out",
        translation: "Predetermined fate",
        device: "Voice - Resigned",
        description: "Realises father always had plan.",
        effect: "Her achievement just triggered existing plan."
    },
    
    "bliss-dawn": {
        title: "Bliss was it in that dawn to be alive",
        translation: "Literary joy",
        device: "Language - Wordsworth quote",
        description: "References Romantic poem about French Revolution.",
        effect: "Shows education despite father's dismissal - proves she's literary."
    },
    
    // Paragraph 37 - Final acceptance
    "father-shall": {
        title: "Father, I shall go to medical school in England and become a doctor. Thank you very, very much",
        translation: "Grateful submission",
        device: "Structure - Resolution",
        description: "Formal acceptance with excessive gratitude.",
        effect: "Takes what she can get - half a dream better than none."
    }
};

// Vocabulary definitions
const vocabData = {
    "obstetrics": {
        title: "obstetrics",
        translation: "Medical field dealing with pregnancy and childbirth",
        device: "Vocabulary",
        description: "Branch of medicine concerned with childbirth and care of women giving birth.",
        effect: "Father chooses 'female-appropriate' medical field - even in medicine, gender limits her."
    }
};

// Export for use in interactive.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textData, vocabData };
}
