// PAVLS Analysis data for The Danger of a Single Story
const textData = {
    // Paragraph 1 - Opening
    "storyteller-identity": {
        title: "I'm a storyteller",
        translation: "Identity statement",
        device: "Voice - Personal Introduction",
        description: "Opens with simple, direct identity claim. Establishes authority and intimacy.",
        effect: "Creates immediate connection - we're about to hear stories from someone who knows how to tell them."
    },
    
    "direct-address": {
        title: "And I would like to tell you",
        translation: "Direct address",
        device: "Audience - Personal Connection",
        description: "Directly addresses audience with polite intention. Creates conversational tone.",
        effect: "Makes speech feel intimate despite large audience. We're being personally invited into her experience."
    },
    
    "single-story-metaphor": {
        title: '"the danger of the single story"',
        translation: "Central metaphor",
        device: "Language - Key Concept",
        description: "Introduces the controlling metaphor that will frame entire speech. Quotation marks show it's her coined phrase.",
        effect: "Creates memorable concept that audience will carry beyond the speech. 'Danger' immediately signals importance."
    },
    
    "childhood-opening": {
        title: "I grew up on a university campus in eastern Nigeria",
        translation: "Setting scene",
        device: "Structure - Chronological Beginning",
        description: "Starts story at childhood, establishing setting and context.",
        effect: "Grounds us in specific place and privilege - university campus suggests educated background."
    },
    
    "self-deprecating": {
        title: "although I think four is probably close to the truth",
        translation: "Humorous correction",
        device: "Voice - Self-Deprecating Humour",
        description: "Immediately undercuts mother's claim with gentle humour.",
        effect: "Makes her relatable and trustworthy - she won't exaggerate for effect."
    },
    
    "specific-origins": {
        title: "what I read were British and American children's books",
        translation: "Colonial influence",
        device: "Language - Specific Detail",
        description: "Specifies exact origin of books - not just 'foreign' but specifically colonial powers.",
        effect: "Sets up the power dynamic that will be explored - whose stories get exported and consumed."
    },
    
    // Paragraph 2 - Writing white characters
    "vivid-detail": {
        title: "stories in pencil with crayon illustrations that my poor mother was obligated to read",
        translation: "Childhood memory",
        device: "Language - Vivid Imagery",
        description: "Specific sensory details (pencil, crayon) with humorous aside about mother.",
        effect: "Makes childhood real and relatable. 'Poor mother' adds warmth and humour."
    },
    
    "ironic-revelation": {
        title: "I wrote exactly the kinds of stories I was reading",
        translation: "Key revelation",
        device: "Purpose - Illustrate Influence",
        description: "States the problem directly - she replicated what she read without question.",
        effect: "Shows how unconsciously we absorb and reproduce narratives."
    },
    
    "foreign-characters": {
        title: "all my characters were white and blue-eyed, they played in the snow, they ate apples",
        translation: "Incongruous details",
        device: "Language - Specific Examples",
        description: "Lists specific foreign elements that don't match Nigerian reality.",
        effect: "The absurdity becomes clear through accumulation of impossible details."
    },
    
    "humorous-detail": {
        title: "they talked a lot about the weather, how lovely it was that the sun had come out",
        translation: "British cliché",
        device: "Voice - Gentle Mockery",
        description: "References stereotypical British obsession with weather.",
        effect: "Humour makes the point without preaching - we see the ridiculousness."
    },
    
    // Paragraph 3 - The contrast
    "contrast-transition": {
        title: "Now, this despite the fact that",
        translation: "Contrasting reality",
        device: "Structure - Transition",
        description: "Signals shift to show the disconnect between stories and reality.",
        effect: "Builds tension - we're about to see how wrong this was."
    },
    
    "parallel-negatives": {
        title: "I had never been outside Nigeria. We didn't have snow, we ate mangoes",
        translation: "Reality check",
        device: "Language - Parallel Structure",
        description: "Parallel negatives emphasise the gap between fiction and reality. Mangoes vs apples.",
        effect: "Simple substitutions (mangoes for apples) show how easy authentic stories could have been."
    },
    
    "matter-of-fact": {
        title: "we never talked about the weather, because there was no need to",
        translation: "Practical reality",
        device: "Voice - Matter-of-Fact",
        description: "Practical explanation - weather is consistent in Nigeria.",
        effect: "Dry humour in the practical explanation highlights cultural differences."
    },
    
    // Paragraph 4 - The lesson
    "lesson-statement": {
        title: "What this demonstrates, I think, is how impressionable and vulnerable we are in the face of a story",
        translation: "Thesis point",
        device: "Purpose - Key Argument",
        description: "Explicitly states the lesson. 'I think' softens the didactic tone.",
        effect: "Moves from anecdote to universal truth. Makes us examine our own vulnerability to stories."
    },
    
    "universal-truth": {
        title: "particularly as children",
        translation: "Vulnerable group",
        device: "Audience - Universal Experience",
        description: "Extends point to all children, making it universal rather than personal.",
        effect: "Every audience member was once a child - creates shared understanding."
    },
    
    "cause-effect": {
        title: "Because all I had read were books in which characters were foreign, I had become convinced that books by their very nature had to have foreigners in them",
        translation: "Logical chain",
        device: "Language - Cause and Effect",
        description: "Clear causal relationship showing how single stories create false assumptions.",
        effect: "Shows the logical but wrong conclusion a child draws from limited exposure."
    },
    
    // Paragraph 5 - Discovery of African books
    "turning-point": {
        title: "Now, things changed when I discovered African books",
        translation: "Pivotal moment",
        device: "Structure - Turning Point",
        description: "Clear transition marking the shift in understanding.",
        effect: "Signals hope - change is possible when we find different stories."
    },
    
    "cultural-references": {
        title: "Chinua Achebe and Camara Laye",
        translation: "African writers",
        device: "Audience - Literary Knowledge",
        description: "Names specific African writers, assuming some audience knowledge.",
        effect: "Establishes literary credibility and gives audience authors to explore."
    },
    
    "mental-shift": {
        title: "I went through a mental shift in my perception of literature",
        translation: "Transformation",
        device: "Voice - Intellectual Growth",
        description: "Describes change as mental/perceptual rather than emotional.",
        effect: "Shows this is about changing worldview, not just feeling different."
    },
    
    "identity-imagery": {
        title: "girls with skin the colour of chocolate, whose kinky hair could not form ponytails",
        translation: "Self-recognition",
        device: "Language - Sensory Description",
        description: "Specific physical descriptions of African features with sensory language.",
        effect: "Makes representation tangible and physical. Chocolate is positive, warm imagery."
    },
    
    "transformation": {
        title: "I started to write about things I recognized",
        translation: "New direction",
        device: "Purpose - Personal Change",
        description: "Simple statement of change - from foreign to familiar.",
        effect: "Shows the immediate practical impact of seeing yourself in stories."
    },
    
    // Paragraph 6 - Balanced view
    "balanced-view": {
        title: "Now, I loved those American and British books I read. They stirred my imagination. They opened up new worlds for me",
        translation: "Nuanced position",
        device: "Voice - Balanced Perspective",
        description: "Acknowledges value of foreign books - not dismissing them entirely.",
        effect: "Prevents speech from being anti-Western literature. Shows complexity."
    },
    
    "but-pivot": {
        title: "But the unintended consequence was that",
        translation: "Problem identified",
        device: "Structure - Pivot",
        description: "'But' signals the problem. 'Unintended' shows it's not malicious.",
        effect: "Maintains balance - the books aren't evil, but incomplete alone."
    },
    
    "thesis-statement": {
        title: "it saved me from having a single story of what books are",
        translation: "Core message",
        device: "Purpose - Central Thesis",
        description: "First full articulation of 'single story' concept applied to literature.",
        effect: "'Saved' shows how serious the danger was - single stories are threats to understanding."
    },
    
    // Paragraph 7 - Fide's introduction
    "contextual-norm": {
        title: "And so we had, as was the norm, live-in domestic help",
        translation: "Social context",
        device: "Audience - Cultural Context",
        description: "'As was the norm' acknowledges class dynamics without apology.",
        effect: "Provides context for international audience who might not understand Nigerian domestic arrangements."
    },
    
    "single-detail": {
        title: "The only thing my mother told us about him was that his family was very poor",
        translation: "Limited information",
        device: "Language - Restrictive Detail",
        description: "'Only thing' emphasises the poverty of information about Fide.",
        effect: "Shows how single detail becomes entire identity."
    },
    
    "mother-voice": {
        title: '"Finish your food! Don\'t you know? People like Fide\'s family have nothing"',
        translation: "Mother's words",
        device: "Voice - Reported Speech",
        description: "Direct quotation of mother's guilt-inducing statement.",
        effect: "Universal parental tactic becomes vehicle for single story creation."
    },
    
    "emotional-response": {
        title: "I felt enormous pity for Fide's family",
        translation: "Child's reaction",
        device: "Language - Emotional",
        description: "'Enormous' shows the overwhelming nature of child's pity.",
        effect: "Shows how single story creates single emotion - only pity possible."
    },
    
    // Paragraph 8 - The basket revelation
    "beautiful-basket": {
        title: "a beautifully patterned basket made of dyed raffia that his brother had made",
        translation: "Artistic creation",
        device: "Language - Detailed Description",
        description: "Specific details emphasise beauty and craftsmanship.",
        effect: "Contrast between 'poor' and 'beautifully patterned' challenges assumptions."
    },
    
    "startled": {
        title: "I was startled",
        translation: "Genuine surprise",
        device: "Voice - Shocked Recognition",
        description: "Simple, honest admission of surprise.",
        effect: "Shows how deeply the single story was embedded - creativity was literally unthinkable."
    },
    
    "realisation": {
        title: "It had not occurred to me that anybody in his family could actually make something",
        translation: "Admission",
        device: "Purpose - Self-Revelation",
        description: "Honest admission of limited thinking. 'Actually' shows disbelief.",
        effect: "Reveals how poverty narrative erased all other possibilities."
    },
    
    "single-story-poverty": {
        title: "so that it had become impossible for me to see them as anything else but poor",
        translation: "Total definition",
        device: "Language - Absolute Terms",
        description: "'Impossible' shows complete mental block created by single story.",
        effect: "Poverty became total identity, erasing all other human qualities."
    },
    
    "conclusion-fide": {
        title: "Their poverty was my single story of them",
        translation: "First conclusion",
        device: "Structure - Section Conclusion",
        description: "Explicitly names the problem using her central metaphor.",
        effect: "First complete example of single story concept, preparing for larger application."
    },
    
    // Paragraph 9 - America and roommate
    "time-transition": {
        title: "Years later, I thought about this when",
        translation: "Time shift",
        device: "Structure - Temporal Transition",
        description: "Links childhood experience to adult experience in America.",
        effect: "Shows pattern repeating across time and geography."
    },
    
    "roommate-shocked": {
        title: "My American roommate was shocked by me",
        translation: "Role reversal",
        device: "Voice - Ironic Position",
        description: "Now she's the one causing shock by not fitting expectations.",
        effect: "Tables turned - she's now the subject of someone else's single story."
    },
    
    "ironic-fact": {
        title: "Nigeria happened to have English as its official language",
        translation: "Colonial irony",
        device: "Language - Ironic Understatement",
        description: "'Happened to have' is deliberately casual about colonial legacy.",
        effect: "Subtle critique of American ignorance about colonial history."
    },
    
    "tribal-music": {
        title: '"tribal music"',
        translation: "Stereotypical term",
        device: "Language - Loaded Term",
        description: "Quotation marks show this is roommate's problematic term.",
        effect: "'Tribal' reveals roommate's primitive assumptions about Africa."
    },
    
    "mariah-carey": {
        title: "I produced my tape of Mariah Carey",
        translation: "Unexpected reality",
        device: "Voice - Humorous Revelation",
        description: "Specific pop culture reference that destroys expectations.",
        effect: "Comedy in the gap between 'tribal music' and Mariah Carey highlights absurdity."
    },
    
    // Paragraph 10 - The stove
    "stove-assumption": {
        title: "She assumed that I did not know how to use a stove",
        translation: "Basic assumption",
        device: "Language - Simple Statement",
        description: "Matter-of-fact statement of absurd assumption. Short paragraph for emphasis.",
        effect: "The brevity emphasises the ridiculousness - no elaboration needed."
    },
    
    // Paragraph 11 - Analysis of roommate
    "struck-me": {
        title: "What struck me was this",
        translation: "Key insight",
        device: "Purpose - Analysis Introduction",
        description: "Signals important observation about to be shared.",
        effect: "Prepares audience for deeper analysis of the encounter."
    },
    
    "default-position": {
        title: "she had felt sorry for me even before she saw me. Her default position toward me, as an African, was a kind of patronizing, well-meaning pity",
        translation: "Pre-judgment",
        device: "Language - Technical Analysis",
        description: "'Default position' is computer terminology applied to human prejudice. 'Well-meaning' softens critique.",
        effect: "Shows how single stories create automatic responses before actual encounter."
    },
    
    "roommate-conclusion": {
        title: "My roommate had a single story of Africa: a single story of catastrophe",
        translation: "Diagnosis",
        device: "Structure - Parallel to Fide",
        description: "Explicitly names roommate's single story, paralleling Fide example.",
        effect: "'Catastrophe' summarises Western media narrative of Africa."
    },
    
    "no-possibility": {
        title: "no possibility of Africans being similar to her in any way, no possibility of feelings more complex than pity, no possibility of a connection as human equals",
        translation: "Triple negation",
        device: "Language - Repetition/Parallel",
        description: "Triple 'no possibility' hammers home the limitations.",
        effect: "Repetition shows how single story closes off all human connection."
    },
    
    // Paragraph 12 - Understanding the roommate
    "understanding": {
        title: "I began to understand my roommate's response to me",
        translation: "Empathy development",
        device: "Voice - Mature Reflection",
        description: "Shows growth from anger to understanding.",
        effect: "Models the empathy she wants audience to develop."
    },
    
    "hypothetical": {
        title: "If I had not grown up in Nigeria, and if all I knew about Africa were from popular images",
        translation: "Conditional empathy",
        device: "Language - Hypothetical",
        description: "Uses conditional to imagine herself in roommate's position.",
        effect: "Prevents audience from feeling superior - we could all be the roommate."
    },
    
    "stereotypes-list": {
        title: "beautiful landscapes, beautiful animals, and incomprehensible people, fighting senseless wars, dying of poverty and AIDS, unable to speak for themselves and waiting to be saved by a kind, white foreigner",
        translation: "Media stereotypes",
        device: "Purpose - Expose Stereotypes",
        description: "Comprehensive list of African stereotypes from Western media.",
        effect: "Exhaustive list shows how pervasive and specific the single story is."
    },
    
    "parallel-fide": {
        title: "I would see Africans in the same way that I, as a child, had seen Fide's family",
        translation: "Full circle",
        device: "Structure - Parallel Example",
        description: "Connects roommate's view of Africa to her own view of Fide.",
        effect: "Shows single stories are universal human tendency, not uniquely Western."
    },
    
    // Paragraph 13 - Mexico confession
    "admission": {
        title: "But I must quickly add that I too am just as guilty in the question of the single story",
        translation: "Personal confession",
        device: "Structure - Confession Moment",
        description: "'Must quickly add' shows urgency to admit own fault.",
        effect: "Pivotal moment - prevents speech from being accusatory by including herself."
    },
    
    "synonymous": {
        title: "immigration became synonymous with Mexicans",
        translation: "Reductive equation",
        device: "Language - Analysis",
        description: "Shows how complex issue gets reduced to single group.",
        effect: "Explains how media creates single stories through repetition."
    },
    
    "endless-stories": {
        title: "endless stories of Mexicans as people who were fleecing the healthcare system, sneaking across the border, being arrested at the border",
        translation: "Media narrative",
        device: "Language - Accumulation",
        description: "'Endless' shows relentless repetition. List of negative actions.",
        effect: "Shows how repetition of negative stories creates single narrative."
    },
    
    // Paragraph 14 - Guadalajara
    "guadalajara": {
        title: "watching the people going to work, rolling up tortillas in the marketplace, smoking, laughing",
        translation: "Normal life",
        device: "Language - Ordinary Details",
        description: "List of mundane, human activities that contradict single story.",
        effect: "Humanity revealed through ordinary actions - work, food, laughter."
    },
    
    "surprise-shame": {
        title: "I remember first feeling slight surprise. And then, I was overwhelmed with shame",
        translation: "Emotional journey",
        device: "Voice - Emotional Progression",
        description: "Two-stage emotional response - surprise then shame.",
        effect: "Shows the journey from recognition to moral reckoning."
    },
    
    "media-immersion": {
        title: "I had been so immersed in the media coverage of Mexicans that they had become one thing in my mind, the abject immigrant",
        translation: "Media influence",
        device: "Purpose - Show Media Power",
        description: "'Immersed' suggests drowning in single narrative. 'Abject' shows dehumanisation.",
        effect: "Admits how unconsciously she absorbed media narrative despite knowing better."
    },
    
    "ashamed": {
        title: "I could not have been more ashamed of myself",
        translation: "Complete shame",
        device: "Voice - Maximum Shame",
        description: "Absolute statement of shame - cannot be exceeded.",
        effect: "Shows the depth of her recognition and remorse."
    },
    
    // Paragraph 15 - How to create
    "how-to-create": {
        title: "So that is how to create a single story",
        translation: "Recipe revealed",
        device: "Purpose - Explain Mechanism",
        description: "Transitions to explaining the mechanism. 'So' signals conclusion from examples.",
        effect: "Shifts from examples to analysis - now we understand the process."
    },
    
    "repetition-show": {
        title: "show a people as one thing, as only one thing, over and over again",
        translation: "The formula",
        device: "Language - Repetition",
        description: "Repetition in the description mimics the repetition that creates single stories.",
        effect: "The repeated 'one thing' and 'over and over' performs what it describes."
    },
    
    "become": {
        title: "and that is what they become",
        translation: "Final result",
        device: "Structure - Conclusion",
        description: "Short, stark conclusion to the formula.",
        effect: "Chilling finality - people are reduced to the single story told about them."
    },
    
    // Paragraph 16 - Stories matter
    "stories-matter": {
        title: "Stories matter. Many stories matter",
        translation: "Core truth",
        device: "Language - Repetition/Emphasis",
        description: "Short sentences. Repetition of 'stories matter' with expansion to 'many'.",
        effect: "Drumbeat rhythm emphasises importance. Moves from singular to plural."
    },
    
    "dispossess-malign": {
        title: "Stories have been used to dispossess and to malign",
        translation: "Negative power",
        device: "Language - Formal Vocabulary",
        description: "'Dispossess' and 'malign' are formal, weighty words showing serious harm.",
        effect: "Shows stories as weapons of oppression - not innocent entertainment."
    },
    
    "but-stories": {
        title: "but stories can also be used to empower and to humanize",
        translation: "Positive potential",
        device: "Structure - Contrast",
        description: "'But' pivots to positive. Parallel structure to previous sentence.",
        effect: "Offers hope - stories can heal as well as harm."
    },
    
    "dignity": {
        title: "Stories can break the dignity of a people, but stories can also repair that broken dignity",
        translation: "Breaking and healing",
        device: "Language - Parallel/Contrast",
        description: "Perfect parallel structure with 'break' and 'repair'. 'Dignity' repeated.",
        effect: "Shows stories as both destroyer and restorer of human dignity."
    },
    
    // Paragraph 17 - Alice Walker
    "walker-quote": {
        title: '"They sat around, reading the book themselves, listening to me read the book, and a kind of paradise was regained"',
        translation: "Paradise found",
        device: "Audience - Literary Reference",
        description: "Quotes respected American writer. 'Paradise regained' echoes Milton.",
        effect: "Uses Western literary authority to support point. 'Paradise' introduces hopeful ending."
    },
    
    // Paragraph 18 - Conclusion
    "ending-thought": {
        title: "I would like to end with this thought",
        translation: "Final message",
        device: "Voice - Direct Address",
        description: "Returns to direct address from opening, signalling conclusion.",
        effect: "Circular structure - returns to intimate, direct tone from beginning."
    },
    
    "reject-single": {
        title: "when we reject the single story, when we realize that there is never a single story about any place",
        translation: "The solution",
        device: "Purpose - Call to Action",
        description: "Double 'when' creates conditional hope. 'Never' is absolute.",
        effect: "Gives audience clear action - reject single stories, seek multiple narratives."
    },
    
    "paradise-regained": {
        title: "we regain a kind of paradise",
        translation: "Hope restored",
        device: "Structure - Circular Ending",
        description: "Echoes Alice Walker quote. Ends on 'paradise' - hopeful note.",
        effect: "Suggests returning to innocence before single stories corrupted understanding. Redemption possible."
    }
};

// Vocabulary data
const vocabData = {
    "impressionable": "Easily influenced or affected by others; susceptible to having one's mind shaped by external forces.",
    
    "raffia": "Palm tree fibres used for weaving baskets, hats, and other crafts. Common material in African traditional crafts.",
    
    "patronizing": "Treating someone in a condescending way, as if they are inferior or childlike. Appearing kind but actually showing superiority."
};
