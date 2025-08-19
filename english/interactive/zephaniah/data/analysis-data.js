// PAVLS Analysis data for Young and dyslexic? You've got it going on by Benjamin Zephaniah
const textData = {
    // Paragraph 1 - The School System
    "generation-teachers": {
        title: "I'm of the generation where teachers didn't know what dyslexia was",
        translation: "Historical ignorance",
        device: "Purpose - Context setting",
        description: "Establishes historical context - dyslexia wasn't recognised or understood.",
        effect: "Shows this isn't personal failure but systemic ignorance. Sets up critique of education."
    },
    
    "big-problem": {
        title: "The big problem with the education system then was that there was no compassion, no understanding and no humanity",
        translation: "Systemic failure",
        device: "Voice - Critical",
        description: "Triple negative 'no compassion, no understanding, no humanity' emphasises complete failure.",
        effect: "Damning indictment of education system. Shows emotional damage beyond academic struggle."
    },
    
    "dont-look-back": {
        title: "I don't look back and feel angry with the teachers",
        translation: "Forgiveness",
        device: "Voice - Mature",
        description: "Shows emotional maturity and ability to forgive despite suffering.",
        effect: "Unexpected forgiveness disarms readers. Shows he's moved beyond bitterness."
    },
    
    "ones-who-wanted": {
        title: "The ones who wanted to have an individual approach weren't allowed to",
        translation: "System vs individuals",
        device: "Structure - Nuance",
        description: "Distinguishes between individual teachers and oppressive system.",
        effect: "Shows problem was structural not personal - some teachers wanted to help but couldn't."
    },
    
    "past-different": {
        title: "The idea of being kind and thoughtful and listening to problems just wasn't done: the past is a different kind of country",
        translation: "Historical distance",
        device: "Language - Literary allusion",
        description: "References L.P. Hartley's 'The past is a foreign country' - literary sophistication.",
        effect: "Shows his education despite dyslexia. Creates temporal distance from trauma."
    },
    
    // Paragraph 2 - The Sleep Example
    "ideas-contradicted": {
        title: "At school my ideas always contradicted the teachers'",
        translation: "Natural rebel",
        device: "Structure - Pattern established",
        description: "'Always' shows consistent pattern of challenging authority.",
        effect: "Sets up pattern of creative thinking being suppressed. He thought differently from the start."
    },
    
    "remember-teacher": {
        title: "I remember one teacher saying that human beings sleep for one-third of their life and I put my hand up and said, 'If there's a God isn't that a design fault?'",
        translation: "Creative questioning",
        device: "Voice - Young philosopher",
        description: "Shows child Zephaniah asking profound philosophical questions.",
        effect: "Demonstrates intelligence and creativity despite being labelled stupid. Questions everything."
    },
    
    // Paragraph 3 - Teacher's Response
    "shut-up-stupid": {
        title: "The teacher said, 'Shut up, stupid boy. Bad people would do one-third more bad.'",
        translation: "Crushing response",
        device: "Language - Direct quotation",
        description: "Harsh direct quote shows brutal dismissal of creative thinking.",
        effect: "Shocking cruelty of response. Reader feels the child's humiliation."
    },
    
    "thought-good-idea": {
        title: "I thought I'd put in a good idea. I was just being creative. She also had a point, but the thing was, she called me stupid for even thinking about it",
        translation: "Crushed creativity",
        device: "Voice - Reasonable child",
        description: "Shows he could see teacher's point but objects to being called stupid for thinking.",
        effect: "Reasonable tone makes teacher's cruelty worse. Thinking itself was punished."
    },
    
    // Paragraph 4 - Challenging Authority
    "teacher-africa": {
        title: "I remember a teacher talking about Africa and the 'local savages' and I would say, 'Who are you to talk about savages?'",
        translation: "Challenging racism",
        device: "Purpose - Expose prejudice",
        description: "Young Zephaniah challenges racist colonial attitudes directly.",
        effect: "Shows moral intelligence - recognised racism when supposedly educated adults didn't."
    },
    
    "how-dare": {
        title: "She would say, 'How dare you challenge me?'",
        translation: "Authority threatened",
        device: "Language - Power dynamics",
        description: "Teacher's response about authority not accuracy - power threatened.",
        effect: "Shows education was about obedience not truth. Questions weren't welcome."
    },
    
    // Paragraph 5 - Stereotyping
    "difficult-engage": {
        title: "Once, when I was finding it difficult to engage with writing and had asked for some help, a teacher said, 'It's all right. We can't all be intelligent, but you'll end up being a good sportsperson'",
        translation: "Racist stereotyping",
        device: "Audience - Shared experience",
        description: "Teacher's response combines low expectations with racial stereotyping.",
        effect: "Shows intersection of dyslexia and racism. Double discrimination."
    },
    
    "oh-great": {
        title: "I thought, 'Oh great', but now I realise he was stereotyping me",
        translation: "Delayed recognition",
        device: "Voice - Ironic reflection",
        description: "Child's innocent response versus adult understanding of racism.",
        effect: "Shows how children internalise discrimination before understanding it."
    },
    
    // Paragraph 6 - Early Poetry
    "poems-head": {
        title: "I had poems in my head even then, and when I was 10 or 11 my sister wrote some of them down for me",
        translation: "Creative despite barriers",
        device: "Structure - Evidence of talent",
        description: "Proves creative ability existed despite inability to write.",
        effect: "Creativity preceded literacy - natural poet trapped by dyslexia."
    },
    
    "thirteen-read": {
        title: "When I was 13 I could read very basically but it would be such hard work that I would give up",
        translation: "Exhausting struggle",
        device: "Purpose - Show difficulty",
        description: "Reading possible but exhausting - explains why he gave up.",
        effect: "Makes dyslexia concrete - not inability but exhaustion."
    },
    
    "banknote-worth": {
        title: "I thought that so long as you could read how much the banknote was worth, you knew enough or you could ask a mate",
        translation: "Survival literacy",
        device: "Language - Practical philosophy",
        description: "Child's practical approach to literacy - just enough to survive.",
        effect: "Shows resourcefulness and adaptation. Makes do with minimal literacy."
    },
    
    // Paragraph 7 - Getting Expelled
    "thrown-out": {
        title: "I got thrown out of a lot of schools, the last one at 13",
        translation: "Serial expulsion",
        device: "Structure - Escalation",
        description: "Matter-of-fact about multiple expulsions - normalised failure.",
        effect: "Shows system repeatedly failed him. Pattern of rejection."
    },
    
    "expelled-partly": {
        title: "I was expelled partly because of arguing with teachers on an intellectual level and partly for being a rude boy and fighting",
        translation: "Dual rebellion",
        device: "Purpose - Honesty",
        description: "Honest about both intellectual and physical rebellion.",
        effect: "Not romanticising - admits violence alongside intellectual challenge."
    },
    
    "didnt-stab": {
        title: "I didn't stab anybody, but I did take revenge on a teacher once. I stole his car and drove it into his front garden",
        translation: "Extreme retaliation",
        device: "Voice - Dark humour",
        description: "'Didn't stab anybody' as baseline shows how bad things got.",
        effect: "Shocking honesty. Shows depth of anger and alienation."
    },
    
    "nazis-not-bad": {
        title: "I remember him telling us the Nazis weren't that bad",
        translation: "Teacher's extremism",
        device: "Language - Contextualising",
        description: "Explains extreme response - teacher was Nazi sympathiser.",
        effect: "Suddenly car theft seems more justified. Teachers weren't moral authorities."
    },
    
    "borstal-observant": {
        title: "When I was in borstal I used to do this thing of looking at people I didn't want to be like",
        translation: "Learning from negatives",
        device: "Structure - Turning point",
        description: "Even in borstal, actively learning and making choices.",
        effect: "Shows determination to grow even in worst circumstances."
    },
    
    // Paragraph 8 - Statistics
    "high-percentage": {
        title: "A high percentage of the prison population are dyslexic, and a high percentage of the architect population",
        translation: "Two paths",
        device: "Purpose - Reframe dyslexia",
        description: "Juxtaposes prison and architecture - same condition, different outcomes.",
        effect: "Shows dyslexia leads to extremes - creativity or criminalisation."
    },
    
    "look-statistics": {
        title: "If you look at the statistics, I should be in prison: a black man brought up on the wrong side of town whose family fell apart",
        translation: "Defying probability",
        device: "Audience - Recognition",
        description: "Lists every statistical predictor of imprisonment.",
        effect: "Makes his success more remarkable. Should have failed by every measure."
    },
    
    "staying-out": {
        title: "But I think staying out of prison is about conquering your fears and finding your path in life",
        translation: "Personal philosophy",
        device: "Voice - Wisdom",
        description: "Simple philosophy developed through experience.",
        effect: "Offers hope through personal responsibility and self-discovery."
    },
    
    // Paragraph 9 - Prison Visits
    "go-prisons": {
        title: "When I go into prisons to talk to people I see men and women who, in intelligence and other qualities, are the same as me",
        translation: "Recognition of equals",
        device: "Purpose - Solidarity",
        description: "Acknowledges prisoners as equals, not inferiors.",
        effect: "Shows humility and solidarity. Luck not superiority saved him."
    },
    
    "opportunities-opened": {
        title: "But opportunities opened for me and they missed theirs, didn't notice them or didn't take them",
        translation: "Sliding doors",
        device: "Structure - Alternative paths",
        description: "Life paths diverged through opportunities not inherent difference.",
        effect: "Makes success feel precarious - could easily have gone wrong."
    },
    
    // Paragraph 10 - Self-Belief
    "never-thought-stupid": {
        title: "I never thought I was stupid. I didn't have that struggle",
        translation: "Unshaken confidence",
        device: "Voice - Defiant",
        description: "Core self-belief remained despite constant messaging.",
        effect: "Shows remarkable psychological resilience. Internal strength crucial."
    },
    
    "black-savages": {
        title: "If I have someone in front of me who doesn't have a problem reading and writing telling me that black people are savages I just think, 'I'm not stupid – you're the one who's stupid.'",
        translation: "Reversing judgment",
        device: "Language - Logic flip",
        description: "Uses teacher's racism to prove their stupidity not his.",
        effect: "Brilliant reversal - literacy doesn't equal intelligence or morality."
    },
    
    "self-belief": {
        title: "I just had self-belief",
        translation: "Simple truth",
        device: "Voice - Matter-of-fact",
        description: "Understated conclusion to profound point.",
        effect: "Makes self-belief seem achievable - presented simply not dramatically."
    },
    
    // Paragraph 11 - First Book
    "first-book": {
        title: "For my first book I told my poems to my girlfriend, who wrote them down for me",
        translation: "Collaborative creation",
        device: "Structure - Breakthrough method",
        description: "Found workaround for dyslexia through collaboration.",
        effect: "Shows creativity finds a way. Dyslexia didn't stop him publishing."
    },
    
    "took-off": {
        title: "It really took off, especially within the black community",
        translation: "Community embrace",
        device: "Audience - Connection",
        description: "Black community understood and valued his voice.",
        effect: "Found his audience despite educational rejection."
    },
    
    "wid-luv": {
        title: "I wrote 'wid luv' for 'with love'",
        translation: "Phonetic spelling",
        device: "Language - Authentic voice",
        description: "Phonetic spelling became stylistic choice not error.",
        effect: "Turned dyslexic spelling into authentic poetic voice."
    },
    
    "phonetically": {
        title: "People didn't think they were dyslexic poems, they just thought I wrote phonetically",
        translation: "Hidden condition",
        device: "Purpose - Reveal assumption",
        description: "Audience assumed artistic choice not learning difficulty.",
        effect: "Shows how dyslexia can be invisible when reframed as style."
    },
    
    // Paragraph 12 - Adult Education
    "twenty-one": {
        title: "At 21 I went to an adult education class in London to learn to read and write",
        translation: "Never too late",
        device: "Structure - Major turning point",
        description: "Decisive action to address literacy as adult.",
        effect: "Shows it's never too late to learn. Courage to return to education."
    },
    
    "teacher-dyslexic": {
        title: "The teacher told me, 'You are dyslexic,' and I was like, 'Do I need an operation?'",
        translation: "Diagnosis moment",
        device: "Voice - Humorous innocence",
        description: "Humour in ignorance about dyslexia - thought it was medical.",
        effect: "Makes moment of diagnosis relatable and human."
    },
    
    "explained-meant": {
        title: "She explained to me what it meant and I suddenly thought, 'Ah, I get it. I thought I was going crazy.'",
        translation: "Relief in understanding",
        device: "Voice - Revelation",
        description: "Diagnosis brought relief - explanation not madness.",
        effect: "Shows importance of diagnosis. Understanding transforms experience."
    },
    
    // Paragraph 13 - Writing Process
    "wrote-more": {
        title: "I wrote more poetry, novels for teenagers, plays, other books and recorded music",
        translation: "Prolific output",
        device: "Structure - Success list",
        description: "Lists achievements across multiple media.",
        effect: "Proves dyslexia didn't limit creative output. Massive success."
    },
    
    "take-poetry": {
        title: "I take poetry to people who do not read poetry",
        translation: "Accessibility mission",
        device: "Purpose - Democratise",
        description: "Makes poetry accessible to non-traditional audiences.",
        effect: "Uses experience to break down barriers for others."
    },
    
    "writing-knot": {
        title: "Still now, when I'm writing the word 'knot', I have to stop and think, 'How do I write that?' I have to draw something to let me know what the word is",
        translation: "Ongoing struggle",
        device: "Language - Specific example",
        description: "Concrete example of daily dyslexic challenge with homophone.",
        effect: "Shows dyslexia doesn't disappear with success. Daily reality."
    },
    
    "cant-spell": {
        title: "If I can't spell 'question' I just put a question mark and come back to it later",
        translation: "Practical adaptation",
        device: "Voice - Problem-solver",
        description: "Creative workaround using symbol for word.",
        effect: "Shows ongoing adaptations. Pragmatic not defeated."
    },
    
    // Paragraph 14 - University Position
    "look-book": {
        title: "When I look at a book, the first thing I see is the size of it, and I know that's what it's like for a lot of young people who find reading tough",
        translation: "Shared experience",
        device: "Audience - Empathy",
        description: "Still sees books as dyslexic person - remembers the struggle.",
        effect: "Creates connection with struggling readers. Hasn't forgotten."
    },
    
    "brunel-university": {
        title: "When Brunel University offered me the job of professor of poetry and creative writing, I knew my students would be officially more educated than me",
        translation: "Ironic triumph",
        device: "Structure - Peak irony",
        description: "Expelled child becomes professor - ultimate reversal.",
        effect: "Perfect irony. System that rejected him now employs him."
    },
    
    "tell-students": {
        title: "I tell them, 'You can do this course and get the right grade because you have a good memory – but if you don't have passion, creativity, individuality, there's no point.'",
        translation: "Redefining success",
        device: "Voice - Professor's wisdom",
        description: "Values creativity over conventional academic success.",
        effect: "Challenges academic values. Memory less important than creativity."
    },
    
    "people-accommodate": {
        title: "In my life now, I find that people accommodate my dyslexia",
        translation: "Success brings accommodation",
        device: "Purpose - Show change",
        description: "Success means others adapt to him, not vice versa.",
        effect: "Power shift - world adapts to him now he's successful."
    },
    
    "perform-poetry": {
        title: "I can perform my poetry because it doesn't have to be word perfect, but I never read one of my novels in public",
        translation: "Know your strengths",
        device: "Language - Practical limits",
        description: "Honest about limitations - performs poetry, doesn't read prose.",
        effect: "Shows wisdom in working with dyslexia not against it."
    },
    
    // Paragraph 15 - Not My Problem
    "cant-understand": {
        title: "If someone can't understand dyslexia it's their problem",
        translation: "Refusing shame",
        device: "Voice - Defiant confidence",
        description: "Completely reverses usual dynamic - their ignorance, their problem.",
        effect: "Powerful reframing. Refuses to carry shame."
    },
    
    "oppresses-race": {
        title: "In the same way, if someone oppresses me because of my race I don't sit down and think, 'How can I become white?'",
        translation: "Parallel discrimination",
        device: "Language - Powerful analogy",
        description: "Links dyslexia discrimination to racism - both require oppressor to change.",
        effect: "Makes absurdity of expecting dyslexics to be 'normal' clear."
    },
    
    "not-my-problem": {
        title: "It's not my problem, it's theirs and they are the ones who have to come to terms with it",
        translation: "Responsibility shift",
        device: "Purpose - Empowerment",
        description: "Places responsibility on discriminator not victim.",
        effect: "Liberating message - stop trying to fix yourself."
    },
    
    "feel-holding": {
        title: "If you're dyslexic and you feel there's something holding you back, just remember: it's not you",
        translation: "Direct reassurance",
        device: "Audience - Young dyslexics",
        description: "Speaks directly to dyslexic readers feeling limited.",
        effect: "Personal, direct comfort. You're not the problem."
    },
    
    "natural-way": {
        title: "In many ways being dyslexic is a natural way to be",
        translation: "Redefining normal",
        device: "Structure - Philosophical shift",
        description: "Challenges assumption that non-dyslexic is natural.",
        effect: "Profound reframing - maybe dyslexia is natural."
    },
    
    // Paragraph 16 - Language Systems
    "whats-unnatural": {
        title: "What's unnatural is the way we read and write",
        translation: "System critique",
        device: "Purpose - Challenge assumptions",
        description: "Flips script - writing system is unnatural, not dyslexia.",
        effect: "Fundamental challenge to literacy assumptions."
    },
    
    "pictorial-chinese": {
        title: "If you look at a pictorial language like Chinese, you can see the word for a woman because the character looks like a woman",
        translation: "Alternative systems",
        device: "Language - Comparative linguistics",
        description: "Shows other writing systems more intuitive than alphabet.",
        effect: "Proves alphabetic writing isn't only or best system."
    },
    
    "strange-step": {
        title: "It is a strange step to go from that to a squiggle that represents a sound",
        translation: "Arbitrary symbols",
        device: "Voice - Philosophical",
        description: "'Squiggle' diminishes alphabet's assumed superiority.",
        effect: "Makes readers question assumed naturalness of alphabet."
    },
    
    // Paragraph 17 - Advice to Parents
    "dont-heavy": {
        title: "So don't be heavy on yourself",
        translation: "Self-compassion",
        device: "Audience - Direct advice",
        description: "Colloquial 'heavy' makes advice accessible.",
        effect: "Gentle, caring tone. Encourages self-forgiveness."
    },
    
    "parent-dyslexia": {
        title: "And if you are a parent of someone with dyslexia don't think of it as a defect",
        translation: "Parental guidance",
        device: "Audience - Parents",
        description: "Directly addresses anxious parents.",
        effect: "Challenges medical/deficit model parents might adopt."
    },
    
    "not-measure": {
        title: "Dyslexia is not a measure of intelligence: you may have a genius on your hands",
        translation: "Hidden genius",
        device: "Purpose - Inspire hope",
        description: "Separates dyslexia from intelligence - might have genius child.",
        effect: "Transforms parental anxiety into excitement about potential."
    },
    
    "make-creative": {
        title: "Having dyslexia can make you creative. If you want to construct a sentence and can't find the word you are searching for, you have to think of a way to write round it. This requires being creative and so your 'creativity muscle' gets bigger",
        translation: "Building creativity",
        device: "Language - Physical metaphor",
        description: "'Creativity muscle' makes abstract concept physical and trainable.",
        effect: "Shows dyslexia forces creative problem-solving. Strength through struggle."
    },
    
    // Paragraph 18 - Final Message
    "kids-come": {
        title: "Kids come up to me and say, 'I'm dyslexic too,'",
        translation: "Role model moment",
        device: "Audience - Direct connection",
        description: "Shows his impact on young dyslexics who identify with him.",
        effect: "Establishes him as inspiration and role model."
    },
    
    "use-advantage": {
        title: "and I say to them, 'Use it to your advantage, see the world differently. Us dyslexic people, we've got it going on – we are the architects. We are the designers.'",
        translation: "Empowerment message",
        device: "Voice - Celebratory",
        description: "Transforms dyslexia into superpower. 'We've got it going on' - pride and swagger.",
        effect: "Creates positive dyslexic identity. Membership in creative elite."
    },
    
    "kids-proud": {
        title: "It's like these kids are proud to be like me and if that helps them, that is great",
        translation: "Pride in influence",
        device: "Purpose - Inspire",
        description: "Acknowledges his role in transforming shame to pride.",
        effect: "Shows purpose of article - helping kids feel proud not ashamed."
    },
    
    "didnt-have": {
        title: "I didn't have that as a child",
        translation: "Missing role model",
        device: "Structure - Contrast",
        description: "Poignant reminder he lacked what he now provides.",
        effect: "Makes his role more important - filling gap he experienced."
    },
    
    "bloody-non": {
        title: "I say to them, 'Bloody non-dyslexics ... who do they think they are?'",
        translation: "Humorous reversal",
        device: "Language - Comic inversion",
        description: "Flips discrimination with mock outrage at 'normal' people.",
        effect: "Ends with humour and defiance. Makes dyslexics the in-group."
    }
};

// Vocabulary definitions
const vocabData = {
    "borstal": {
        title: "borstal",
        translation: "A type of youth detention centre",
        device: "Vocabulary",
        description: "British institution for young offenders, abolished in 1982. Shows how serious his troubles became.",
        effect: "Historical term showing the severity of his teenage rebellion and the system's punitive response."
    }
};

// Export for use in interactive.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textData, vocabData };
}
