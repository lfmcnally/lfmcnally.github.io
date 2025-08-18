// PAVLS Analysis data for The Explorer's Daughter by Kari Herbert
const textData = {
    // Paragraph 1 - The Hunt Scene
    "spectral-play": {
        title: "the plumes of spray from the narwhal catching the light in a spectral play of colour",
        translation: "Magical imagery",
        device: "Language - Imagery",
        description: "'Spectral' suggests ghostly, otherworldly beauty. Creates ethereal atmosphere.",
        effect: "Transforms hunting scene into something magical, not brutal. Sets tone of wonder."
    },
    
    "two-pods": {
        title: "Two large pods of narwhal circled in the fjord, often looking as if they were going to merge, but always slowly, methodically passing each other by",
        translation: "Choreographed movement",
        device: "Structure - Scene setting",
        description: "Describes whale movement like a dance - 'methodically' suggests deliberate pattern.",
        effect: "Creates sense of natural rhythm and order, almost ceremonial quality to the scene."
    },
    
    "glittering-kingdom": {
        title: "the glittering kingdom",
        translation: "Fairytale landscape",
        device: "Language - Metaphor",
        description: "Arctic becomes a magical kingdom, suggesting royalty and treasure.",
        effect: "Elevates the Arctic from harsh wasteland to magnificent realm worth protecting."
    },
    
    "sharp-intake": {
        title: "took a sharp intake of breath",
        translation: "Physical reaction",
        device: "Voice - Personal response",
        description: "Shows involuntary physical response to beauty of scene.",
        effect: "Makes reader feel her awe. Shows she's still capable of being moved despite familiarity."
    },
    
    "butter-gold": {
        title: "The evening light was turning butter-gold, glinting off man and whale and catching the soft billows of smoke from a lone hunter's pipe",
        translation: "Golden hour beauty",
        device: "Language - Sensory imagery",
        description: "Rich visual imagery with 'butter-gold' suggesting warmth and richness.",
        effect: "Creates painterly scene. Links hunter and whale in same golden light - both part of nature."
    },
    
    "close-enough": {
        title: "From where we sat at the lookout it looked as though the hunters were close enough to touch the narwhal with their bare hands and yet they never moved",
        translation: "Deceptive proximity",
        device: "Voice - Observer's perspective",
        description: "Emphasises stillness and patience of hunters. Distance deceives the eye.",
        effect: "Shows discipline of hunters. Creates tension - so close yet requiring perfect stillness."
    },
    
    "distances-deceptive": {
        title: "Distances are always deceptive in the Arctic",
        translation: "Arctic reality",
        device: "Purpose - Education",
        description: "Direct statement educating readers about Arctic conditions.",
        effect: "Reminds readers this is alien environment with different rules. Nothing is as it seems."
    },
    
    "fell-wondering": {
        title: "I fell to wondering if the narwhal existed at all or were instead mischievous tricks of the shifting light",
        translation: "Dreamlike uncertainty",
        device: "Voice - Contemplative",
        description: "'Mischievous tricks' personifies light. Questions reality itself.",
        effect: "Creates dreamlike quality. Shows how Arctic can make you question your senses."
    },
    
    // Paragraph 2 - Narwhal habits
    "rarely-stray": {
        title: "The narwhal rarely stray from High Arctic waters",
        translation: "Natural boundaries",
        device: "Structure - Factual interlude",
        description: "Shifts to informative mode, explaining narwhal behaviour.",
        effect: "Establishes narwhal as truly Arctic creatures - they belong here, nowhere else."
    },
    
    "hunters-fortunate": {
        title: "the hunters of Thule are fortunate to witness the annual return of the narwhal to the Inglefield Fjord",
        translation: "Seasonal blessing",
        device: "Audience - Western readers",
        description: "'Fortunate' frames hunting positively - as privilege not exploitation.",
        effect: "Reframes hunting as respectful observation of natural cycles, not domination."
    },
    
    // Paragraph 3 - Cultural importance
    "essential-contributor": {
        title: "The narwhal ... is an essential contributor to the survival of the hunters in the High Arctic",
        translation: "Life and death necessity",
        device: "Purpose - Justify hunting",
        description: "'Essential contributor' makes narwhal active participant in Arctic life.",
        effect: "Not just food but 'contributor' - suggests reciprocal relationship, not exploitation."
    },
    
    "rich-minerals": {
        title: "rich in necessary minerals and vitamins",
        translation: "Nutritional necessity",
        device: "Language - Scientific",
        description: "Scientific language validates importance with facts.",
        effect: "Appeals to logic - this isn't preference but biological necessity."
    },
    
    "climate-prohibits": {
        title: "in a place where the climate prohibits the growth of vegetables or fruit, this rich source of vitamin C was the one reason that the Eskimos have never suffered from scurvy",
        translation: "Medical necessity",
        device: "Purpose - Historical context",
        description: "Explains that narwhal literally prevented disease and death.",
        effect: "Shows hunting as medical necessity - without it, people would have died of scurvy."
    },
    
    "for-centuries": {
        title: "For centuries the blubber of the whales was also the only source of light and heat",
        translation: "Historical dependence",
        device: "Structure - Historical perspective",
        description: "Time marker 'for centuries' shows long tradition.",
        effect: "This isn't new exploitation but ancient sustainable practice."
    },
    
    "valuable-diet": {
        title: "the dark rich meat is still a valuable part of the diet for both man and dogs (a single narwhal can feed a team of dogs for an entire month)",
        translation: "Practical sustenance",
        device: "Purpose - Current necessity",
        description: "Specific detail about feeding dogs for a month shows practical value.",
        effect: "Concrete example makes abstract necessity real and measurable."
    },
    
    "ivory-tusk": {
        title: "Its single ivory tusk, which can grow up to six feet in length",
        translation: "Magnificent feature",
        device: "Language - Descriptive detail",
        description: "Specific measurement emphasises impressive size.",
        effect: "Shows magnificence of creature while explaining practical uses."
    },
    
    "strangely-tusk": {
        title: "Strangely, the tusk seems to have little use for the narwhal itself",
        translation: "Natural mystery",
        device: "Voice - Puzzled observer",
        description: "'Strangely' shows her curiosity about nature's design.",
        effect: "Adds element of mystery - even the narwhal's defining feature puzzles us."
    },
    
    "worn-broken": {
        title: "Often the ends of their tusks are worn down or even broken from such usage",
        translation: "Evidence of use",
        device: "Language - Observational detail",
        description: "Physical evidence supports theory about tusk use.",
        effect: "Shows narwhals as active creatures using their tusks, not just display."
    },
    
    // Paragraph 4 - The women watching
    "women-clustered": {
        title: "The women clustered on the knoll of the lookout, binoculars pointing in every direction",
        translation: "Anxious watchers",
        device: "Structure - Perspective shift",
        description: "Shifts focus to women's experience of the hunt.",
        effect: "Shows hunt affects whole community, not just hunters. Women's anxiety palpable."
    },
    
    "each-woman": {
        title: "each woman focusing on her husband or family member, occasionally spinning round at a small gasp or jump as one of the women saw a hunter near a narwhal",
        translation: "Individual tension",
        device: "Voice - Empathetic observer",
        description: "Details of gasps and jumps show nervous energy.",
        effect: "Creates tension through women's reactions. Humanises the watching and waiting."
    },
    
    "knew-instinctively": {
        title: "Each wife knew her husband instinctively and watched their progress intently",
        translation: "Intimate knowledge",
        device: "Purpose - Show relationships",
        description: "'Instinctively' shows deep connection between couples.",
        effect: "Emphasises human relationships at stake - not just abstract hunting but families."
    },
    
    "crucial-catch": {
        title: "it was crucial to her that her husband catch a narwhal — it was part of their staple diet, and some of the mattak and meat could be sold to other hunters who hadn't been so lucky, bringing in some much-needed extra income",
        translation: "Economic necessity",
        device: "Purpose - Economic context",
        description: "Explains financial as well as nutritional importance.",
        effect: "Shows modern economic pressures alongside traditional needs."
    },
    
    "waterborne-game": {
        title: "It was like watching a vast, waterborne game with the hunters spread like a net around the sound",
        translation: "Strategic choreography",
        device: "Language - Simile",
        description: "Hunt compared to strategic game with hunters as net.",
        effect: "Shows organisation and strategy, not random violence. 'Game' suggests rules and skill."
    },
    
    // Paragraph 5 - Narwhal intelligence
    "intelligent-creatures": {
        title: "The narwhal ... are intelligent creatures, their senses are keen and they talk to one another under the water",
        translation: "Sentient beings",
        device: "Voice - Respectful",
        description: "Emphasises narwhal intelligence and communication.",
        effect: "Makes killing them more morally complex - these aren't dumb animals but thinking beings."
    },
    
    "hearing-developed": {
        title: "Their hearing is particularly developed and they can hear the sound of a paddling kayak from a great distance",
        translation: "Superior senses",
        device: "Purpose - Show difficulty",
        description: "Scientific detail about narwhal abilities.",
        effect: "Shows hunt isn't easy - narwhals have advantages, making it more fair contest."
    },
    
    "why-still": {
        title: "That ... was why the hunters had to sit so very still in the water",
        translation: "Necessary stillness",
        device: "Structure - Explanation",
        description: "Links back to earlier observation about stillness.",
        effect: "Everything connects - the stillness now makes sense given narwhal hearing."
    },
    
    // Paragraph 6 - The moment of conflict
    "split-second": {
        title: "in that split second my heart leapt for both hunter and narwhal",
        translation: "Divided loyalty",
        device: "Voice - Conflicted",
        description: "Heart 'leaping' for both shows emotional division.",
        effect: "Central moment of moral conflict - can't choose sides."
    },
    
    "urged-on": {
        title: "I urged the man on in my head",
        translation: "Supporting hunter",
        device: "Voice - Partisan",
        description: "Internal cheering for hunter shows cultural allegiance.",
        effect: "Despite conflict, her first instinct supports the hunter."
    },
    
    "brave-attempt": {
        title: "he was so close, and so brave to attempt what he was about to do — he was miles from land in a flimsy kayak, and could easily be capsized and drowned",
        translation: "Recognising danger",
        device: "Purpose - Show risk",
        description: "Details the real danger to hunter - this isn't safe or easy.",
        effect: "Hunter risks his life - not casual killing but dangerous necessity."
    },
    
    "no-rifle": {
        title: "The hunter had no rifle, only one harpoon with two heads and one bladder",
        translation: "Traditional weapons",
        device: "Language - Specific detail",
        description: "Emphasises traditional, not modern hunting methods.",
        effect: "More equal contest - no modern advantages, just skill and courage."
    },
    
    "foolhardy-respect": {
        title: "It was a foolhardy exercise and one that could only inspire respect",
        translation: "Dangerous courage",
        device: "Voice - Admiring",
        description: "'Foolhardy' acknowledges danger while 'respect' shows admiration.",
        effect: "Complex response - thinks it's crazy but respects the courage required."
    },
    
    "yet-same-time": {
        title: "And yet at the same time my heart also urged the narwhal to dive, to leave, to survive",
        translation: "Wanting escape",
        device: "Structure - Pivot",
        description: "Major turning point with 'And yet' showing other side of feeling.",
        effect: "Perfect balance - equal sympathy for hunter and hunted."
    },
    
    // Paragraph 7 - The broader dilemma
    "dilemma-stayed": {
        title: "This dilemma stayed with me the whole time that I was in Greenland",
        translation: "Lasting conflict",
        device: "Structure - Reflection",
        description: "Shows this isn't momentary but ongoing moral struggle.",
        effect: "Not easily resolved - the conflict persists and troubles her."
    },
    
    "understand-harshness": {
        title: "I understand the harshness of life in the Arctic and the needs of the hunters and their families to hunt and live on animals and sea mammals that we demand to be protected because of their beauty",
        translation: "Cultural clash",
        device: "Purpose - Bridge cultures",
        description: "Directly addresses Western protectionist attitudes versus Arctic reality.",
        effect: "Shows Western hypocrisy - we protect for beauty while they need for survival."
    },
    
    "cannot-sentimental": {
        title: "And I know that one cannot afford to be sentimental in the Arctic",
        translation: "Harsh reality",
        device: "Voice - Pragmatic",
        description: "Firm statement about emotional luxury versus survival.",
        effect: "Sentimentality is privilege of the comfortable - Arctic doesn't allow it."
    },
    
    "how-eat-seal": {
        title: "'How can you possibly eat seal?' I have been asked over and over again",
        translation: "Western judgment",
        device: "Audience - Critics",
        description: "Direct quote of repeated criticism she faces.",
        effect: "Shows she's caught between worlds - defending one to the other."
    },
    
    "true-images": {
        title: "True, the images that bombarded us several years ago of men battering seals for their fur hasn't helped the issue of polar hunting",
        translation: "Media damage",
        device: "Purpose - Acknowledge problem",
        description: "Admits negative media has damaged perception.",
        effect: "Shows awareness of why people object while preparing counter-argument."
    },
    
    "not-kill-method": {
        title: "but the Inughuit do not kill seals using this method, nor do they kill for sport",
        translation: "Different practice",
        device: "Purpose - Differentiate",
        description: "Clearly distinguishes Inughuit from commercial hunters.",
        effect: "Not all hunting is the same - this is subsistence not commercial exploitation."
    },
    
    "use-every-part": {
        title: "They use every part of the animals they kill",
        translation: "No waste",
        device: "Purpose - Show respect",
        description: "Emphasises complete use, nothing wasted.",
        effect: "Shows respect for life taken - opposite of wasteful Western consumption."
    },
    
    "food-brought": {
        title: "most of the food in Thule is still brought in by the hunter-gatherers and fishermen",
        translation: "Traditional economy",
        device: "Purpose - Current reality",
        description: "'Still' emphasises this continues today, not just history.",
        effect: "This isn't museum culture but living necessity."
    },
    
    "imported-goods": {
        title: "Imported goods can only ever account for part of the food supply; there is still only one annual supply ship that makes it through the ice to Qaanaaq, and the small twice-weekly plane from West Greenland can only carry a certain amount of goods",
        translation: "Logistical impossibility",
        device: "Purpose - Practical facts",
        description: "Specific details about supply limitations.",
        effect: "Shows it's literally impossible to live on imported food - geography prevents it."
    },
    
    "absolute-necessity": {
        title: "Hunting is still an absolute necessity in Thule",
        translation: "Final verdict",
        device: "Structure - Conclusion",
        description: "Definitive final statement using 'absolute' for emphasis.",
        effect: "No ambiguity - after showing both sides, concludes hunting must continue."
    }
};

// Vocabulary definitions
const vocabData = {
    "mattak": {
        title: "mattak",
        translation: "The fatty skin/blubber of the whale",
        device: "Vocabulary",
        description: "Inughuit word for whale blubber, rich in vitamins and minerals essential for Arctic survival.",
        effect: "Using indigenous term shows respect for culture and emphasises this is traditional practice."
    },
    
    "tupilaks": {
        title: "tupilaks",
        translation: "Magical figures or charms with protective powers",
        device: "Vocabulary",
        description: "Traditional Inuit carved figures believed to have spiritual/magical properties.",
        effect: "Shows spiritual dimension of narwhal use - not just physical but cultural/religious importance."
    },
    
    "predilection": {
        title: "predilection",
        translation: "A preference or special liking for something",
        device: "Vocabulary",
        description: "From Latin meaning 'to choose beforehand' - indicates the narwhal's particular fondness for halibut.",
        effect: "Scientific vocabulary adds authority to observations about narwhal behavior."
    }
};

// Export for use in interactive.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textData, vocabData };
}
