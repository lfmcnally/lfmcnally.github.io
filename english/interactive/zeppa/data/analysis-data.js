// PAVLS Analysis data for Beyond the Sky and the Earth by Jamie Zeppa
const textData = {
    // Paragraph 1 - The mountains
    "bhutan-only": {
        title: "Bhutan is all and only mountains",
        translation: "Absolute statement",
        device: "Structure - Opening declaration",
        description: "Emphatic statement using 'all and only' for absolute effect.",
        effect: "Immediately establishes Bhutan's defining characteristic - overwhelming mountainous terrain."
    },
    
    "cannot-imagine": {
        title: "I cannot imagine it",
        translation: "Admission of limits",
        device: "Voice - Honest",
        description: "Admits geological explanation beyond her comprehension.",
        effect: "Shows humility and human perspective versus scientific facts."
    },
    
    "giant-child": {
        title: "giant child gathering earth in great armfuls, piling up rock, pinching mud into ridges and sharp peaks, knuckling out little valleys and gorges, poking holes for water to fall through",
        translation: "Childlike creation myth",
        device: "Language - Extended metaphor",
        description: "Series of playful verbs - 'pinching', 'knuckling', 'poking' - creates child playing with clay.",
        effect: "Makes incomprehensible geology accessible through imaginative, tactile imagery. Whimsical tone."
    },
    
    // Paragraph 2 - First night
    "five-flights": {
        title: "five different flights over four days",
        translation: "Epic journey",
        device: "Purpose - Show remoteness",
        description: "Specific details emphasise difficulty reaching Bhutan.",
        effect: "Establishes Bhutan's isolation - not easy to reach even by modern transport."
    },
    
    "exhausted-cannot": {
        title: "I am exhausted, but I cannot sleep",
        translation: "Too excited to rest",
        device: "Voice - Overwhelmed",
        description: "Physical exhaustion overcome by mental stimulation.",
        effect: "Shows the overwhelming nature of the experience - too much to process."
    },
    
    // Paragraph 3 - Mountain perspective
    "simple-pine": {
        title: "simple, pine-paneled room",
        translation: "Modest accommodation",
        device: "Language - Sensory detail",
        description: "Alliterative 'pine-paneled' suggests basic but natural materials.",
        effect: "Establishes unpretentious setting - focus on natural not luxurious."
    },
    
    "mountains-moon": {
        title: "mountains rise to meet the moon",
        translation: "Poetic perspective",
        device: "Language - Personification",
        description: "Mountains actively 'rise to meet' - given agency.",
        effect: "Creates romantic, mystical atmosphere. Mountains seem alive."
    },
    
    "baked-brown": {
        title: "baked-brown plains",
        translation: "Contrast with India",
        device: "Language - Compound adjective",
        description: "Alliterative description emphasises heat and dryness of India.",
        effect: "Sharp contrast with cool, mountainous Bhutan."
    },
    
    "mountains-more": {
        title: "on the other side of mountains are mountains, more mountains and mountains again",
        translation: "Endless repetition",
        device: "Structure - Repetition",
        description: "Repetition of 'mountains' creates sense of infinity.",
        effect: "Conveys overwhelming scale - mountains never end."
    },
    
    "convulsion": {
        title: "convulsion of crests and gorges and wind-sharpened pinnacles",
        translation: "Violent geography",
        device: "Language - Metaphor",
        description: "'Convulsion' suggests violent geological upheaval.",
        effect: "Mountains seem actively tormented, not peacefully settled."
    },
    
    "tibetan-plateau": {
        title: "Tibetan plateau, the edge of a frozen desert 4,500 meters above sea level",
        translation: "Geographic context",
        device: "Audience - Western readers",
        description: "Specific altitude gives scale Western readers can grasp.",
        effect: "Provides concrete measurement to understand extreme altitude."
    },
    
    "thin-dry-cold": {
        title: "thin and dry and very cold",
        translation: "Triple discomfort",
        device: "Language - Tricolon",
        description: "Three adjectives build harsh environmental picture.",
        effect: "Emphasises physical challenge of the environment."
    },
    
    // Paragraph 4 - Meeting others
    "instant-coffee": {
        title: "instant coffee, powdered milk, plasticky white bread and flavorless red jam",
        translation: "Disappointing breakfast",
        device: "Language - Listing",
        description: "Adjectives emphasise artificial, processed nature of food.",
        effect: "Shows isolation from fresh ingredients - everything preserved/imported."
    },
    
    "no-nonsense": {
        title: "no-nonsense, home-on-the-farm demeanor",
        translation: "Prairie practicality",
        device: "Voice - Character sketch",
        description: "Compound adjectives capture Canadian prairie personality.",
        effect: "Quick character establishment through cultural stereotypes."
    },
    
    "ringing-laughter": {
        title: "ringing laughter",
        translation: "Infectious joy",
        device: "Language - Auditory imagery",
        description: "'Ringing' suggests clear, bell-like quality.",
        effect: "Makes Lorna seem vibrant and alive despite harsh setting."
    },
    
    "slight-dark": {
        title: "slight and dark, with an impish smile",
        translation: "Contrasting character",
        device: "Language - Character description",
        description: "'Impish' suggests mischievous, fairy-like quality.",
        effect: "Creates contrast with sturdy, practical Lorna."
    },
    
    "ecstatic": {
        title: "ecstatic",
        translation: "Overwhelming joy",
        device: "Voice - Others' enthusiasm",
        description: "Strong emotional word shows their excitement.",
        effect: "Contrasts with narrator's uncertainty."
    },
    
    "stay-close": {
        title: "I stay close to them, hoping to pick up some of their enthusiasm",
        translation: "Seeking confidence",
        device: "Voice - Vulnerable",
        description: "Physical proximity sought for emotional support.",
        effect: "Shows narrator's insecurity and need for reassurance."
    },
    
    // Paragraph 5 - Thimphu description
    "no-traffic": {
        title: "It doesn't even have traffic lights",
        translation: "Pre-modern city",
        device: "Purpose - Show underdevelopment",
        description: "'Even' emphasises this as basic urban infrastructure.",
        effect: "Establishes Thimphu as barely urban by Western standards."
    },
    
    "incomprehensible-graceful": {
        title: "incomprehensible but graceful hand gestures",
        translation: "Beautiful confusion",
        device: "Language - Paradox",
        description: "Juxtaposes confusion with aesthetic appreciation.",
        effect: "Shows cultural gap but with admiration not frustration."
    },
    
    "lotus-jewels": {
        title: "lotus flowers, jewels and clouds",
        translation: "Buddhist symbolism",
        device: "Language - Cultural imagery",
        description: "Traditional Buddhist decorative motifs.",
        effect: "Establishes spiritual/artistic nature of culture."
    },
    
    "stale-soft": {
        title: "stale, soft cookies",
        translation: "Unappetising imports",
        device: "Language - Sensory description",
        description: "Tactile adjectives emphasise poor quality.",
        effect: "Shows disadvantages of isolation - old imported goods."
    },
    
    "hideously-colored": {
        title: "hideously colored Orange Cream Biscuits",
        translation: "Artificial horror",
        device: "Language - Hyperbole",
        description: "'Hideously' exaggerates awfulness of artificial colour.",
        effect: "Humorous disgust at processed food."
    },
    
    "acid-washed": {
        title: "teenagers in acid washed jeans",
        translation: "Western fashion",
        device: "Purpose - Show infiltration",
        description: "Specific 1980s fashion shows Western influence.",
        effect: "Dated Western fashion seems incongruous in Bhutan."
    },
    
    "willie-nelson": {
        title: "Willie Nelson's greatest hits",
        translation: "American country music",
        device: "Language - Cultural clash",
        description: "Specific American artist in Buddhist kingdom.",
        effect: "Absurd juxtaposition of Texas country and Himalayan kingdom."
    },
    
    "rambo-poster": {
        title: "a Rambo poster in a bar",
        translation: "Action hero invasion",
        device: "Language - Pop culture reference",
        description: "American violent action hero in peaceful Buddhist nation.",
        effect: "Ironic contrast with Buddhist non-violence."
    },
    
    "startling": {
        title: "startling",
        translation: "Shocking contrast",
        device: "Voice - Surprised",
        description: "Shows narrator's surprise at Western infiltration.",
        effect: "These elements don't belong - jar against setting."
    },
    
    "bhutanese-ness": {
        title: "Bhutanese-ness",
        translation: "Essential identity",
        device: "Language - Neologism",
        description: "Creates new word to capture unique quality.",
        effect: "Suggests something indefinable but recognisable about Bhutan."
    },
    
    // Paragraph 6 - History of Thimphu
    "cracked-faded": {
        title: "cracked sidewalks and faded paintwork",
        translation: "False antiquity",
        device: "Language - Visual decay",
        description: "Physical deterioration suggests age.",
        effect: "Sets up surprise that it's actually new."
    },
    
    "didnt-exist": {
        title: "it didn't exist thirty-odd years ago",
        translation: "Recent creation",
        device: "Structure - Revelation",
        description: "Contradicts appearance with fact.",
        effect: "Challenges assumptions - ancient-looking is modern."
    },
    
    "nothing-but": {
        title: "nothing but rice paddies, a few farmhouses, and a dzong",
        translation: "Rural past",
        device: "Language - Minimising",
        description: "'Nothing but' emphasises how little was there.",
        effect: "Shows dramatic transformation from rural to urban."
    },
    
    "actually-new": {
        title: "Thimphu is actually new",
        translation: "Paradox",
        device: "Voice - Surprised realisation",
        description: "'Actually' shows narrator processing this contradiction.",
        effect: "Challenges Western assumptions about development."
    },
    
    "look-like-ny": {
        title: "Thimphu will look like New York to you when you come back after a year in the east",
        translation: "Relative modernity",
        device: "Voice - Gordon's warning",
        description: "Hyperbolic comparison to New York.",
        effect: "Warns that Thimphu is modern compared to rural Bhutan."
    },
    
    // Paragraph 7 - The dzong
    "grand-whitewashed": {
        title: "grand, whitewashed, red-roofed, golden-tipped fortress",
        translation: "Magnificent architecture",
        device: "Language - Compound description",
        description: "Multiple adjectives build impressive image.",
        effect: "Creates sense of majesty and traditional beauty."
    },
    
    "without-blueprints": {
        title: "without blueprints or nails",
        translation: "Traditional construction",
        device: "Purpose - Cultural education",
        description: "Emphasises traditional building methods.",
        effect: "Shows sophisticated engineering without modern tools."
    },
    
    "never-look": {
        title: "Thimphu will never look like New York to me, I think",
        translation: "Rejecting comparison",
        device: "Voice - Determined",
        description: "Directly contradicts Gordon's prediction.",
        effect: "Shows narrator's enchantment with Thimphu's uniqueness."
    },
    
    // Paragraph 8 - The people
    "best-built": {
        title: "the best built race of men I ever saw",
        translation: "Historical admiration",
        device: "Audience - Historical quote",
        description: "18th century colonial language about physical appearance.",
        effect: "Shows consistent Western admiration across centuries."
    },
    
    "i-agree": {
        title: "I find I agree",
        translation: "Personal confirmation",
        device: "Voice - Observant",
        description: "Confirms historical observation with personal experience.",
        effect: "Links past and present Western perspectives."
    },
    
    "beautiful-aristocratic": {
        title: "beautiful aristocratic faces with dark, almond-shaped eyes, high cheekbones and gentle smiles",
        translation: "Idealised beauty",
        device: "Language - Romantic description",
        description: "Multiple beauty markers create idealised portrait.",
        effect: "Somewhat exoticising but admiring description."
    },
    
    "kira": {
        title: "kira, a brightly striped, ankle-length dress",
        translation: "Traditional female dress",
        device: "Audience - Cultural explanation",
        description: "Explains foreign garment for Western readers.",
        effect: "Educates while maintaining exotic appeal."
    },
    
    "gho": {
        title: "gho, a knee-length robe that resembles a kimono",
        translation: "Traditional male dress",
        device: "Audience - Cultural comparison",
        description: "Uses familiar Asian garment to explain unfamiliar one.",
        effect: "Makes foreign concept accessible through comparison."
    },
    
    "look-curiously": {
        title: "look at us curiously, but they do not seem surprised",
        translation: "Polite interest",
        device: "Voice - Being observed",
        description: "Notes being object of curiosity without hostility.",
        effect: "Shows Bhutanese politeness and previous exposure to foreigners."
    },
    
    "ex-pat": {
        title: "\"ex-pat\" community",
        translation: "Foreign residents",
        device: "Audience - Western context",
        description: "Quotes marks suggest ambivalence about term.",
        effect: "Shows Western presence already established."
    },
    
    // Paragraph 9 - Hospitality
    "impeccable-english": {
        title: "impeccable English",
        translation: "Perfect language",
        device: "Language - Admiration",
        description: "'Impeccable' suggests flawless, better than expected.",
        effect: "Challenges assumptions about isolated country."
    },
    
    "dignity-grace": {
        title: "dignity, unselfconsciousness, good humor, grace",
        translation: "Multiple qualities",
        device: "Voice - Searching",
        description: "List of qualities shows struggle to capture essence.",
        effect: "Shows complexity of impression beyond simple description."
    },
    
    "no-single-word": {
        title: "no single word to hold all of my impressions",
        translation: "Ineffable quality",
        device: "Voice - Inadequate language",
        description: "Admits language fails to capture experience.",
        effect: "Suggests something transcendent about Bhutanese character."
    },
    
    // Paragraph 10 - History
    "most-interesting": {
        title: "the most interesting",
        translation: "Engaged learner",
        device: "Voice - Enthusiastic",
        description: "Superlative shows genuine engagement with history.",
        effect: "Shows narrator becoming invested in understanding Bhutan."
    },
    
    "druk-yul": {
        title: "Druk Yul, meaning Land of the Thunder Dragon",
        translation: "Mythical name",
        device: "Language - Translation",
        description: "Provides English translation of Dzongkha name.",
        effect: "Makes country seem mythical and powerful."
    },
    
    "just-as-beautiful": {
        title: "just as beautiful",
        translation: "Poetic appreciation",
        device: "Voice - Enchanted",
        description: "Shows aesthetic pleasure in language.",
        effect: "Narrator falling in love with country through its names."
    },
    
    "southern-land": {
        title: "Southern Land of Medicinal Herbs",
        translation: "Practical poetry",
        device: "Language - Historical names",
        description: "Name combines practical (medicinal) with poetic.",
        effect: "Shows Bhutan valued for natural resources and beauty."
    },
    
    "south-sandalwood": {
        title: "South Sandalwood Country",
        translation: "Aromatic identity",
        device: "Language - Sensory name",
        description: "Name evokes scent and luxury.",
        effect: "Makes country seem exotic and valuable."
    },
    
    "rainbow-district": {
        title: "Rainbow District of Desires, Lotus Grove of the Gods, Blooming Valley of Luxuriant Fruits, the Land of Longing and Silver Pines",
        translation: "Paradise names",
        device: "Language - Poetic listing",
        description: "Series of increasingly fantastical place names.",
        effect: "Makes Bhutan seem like earthly paradise or fairy tale."
    },
    
    // Paragraph 11 - Colonial history
    "overrun-europeans": {
        title: "overrun by Europeans of varying hue but similar cry",
        translation: "Colonial critique",
        device: "Language - Metaphor",
        description: "'Varying hue but similar cry' - different nations, same imperialism.",
        effect: "Clever wordplay criticises European colonialism."
    },
    
    "brief-cordial": {
        title: "brief but cordial visits",
        translation: "Diplomatic relations",
        device: "Language - Polite description",
        description: "Emphasises politeness of early encounters.",
        effect: "Shows Bhutan managed relations diplomatically."
    },
    
    "nasty-turn": {
        title: "nasty turn",
        translation: "Relations sour",
        device: "Structure - Transition",
        description: "Colloquial phrase marks shift to conflict.",
        effect: "Signals story becoming more dramatic."
    },
    
    "back-slapped": {
        title: "back slapped, his hair pulled, and his face rubbed with wet dough",
        translation: "Humiliating treatment",
        device: "Language - Physical detail",
        description: "Specific physical humiliations listed.",
        effect: "Makes diplomatic insult visceral and memorable."
    },
    
    "preservation-remarkable": {
        title: "Bhutan's preservation of its independence was remarkable",
        translation: "Against the odds",
        device: "Purpose - Celebrate independence",
        description: "Emphasises achievement against colonial powers.",
        effect: "Shows Bhutan's exceptional status in Asia."
    },
    
    "full-admiration": {
        title: "I am full of admiration for this small country that has managed to look after itself so well",
        translation: "Deep respect",
        device: "Voice - Conclusion",
        description: "Personal emotional response to historical facts.",
        effect: "Ends with genuine respect for Bhutan's achievement."
    }
};

// Vocabulary definitions
const vocabData = {
    "demeanor": {
        title: "demeanor (demeanour)",
        translation: "Outward behaviour or bearing",
        device: "Vocabulary",
        description: "American spelling of demeanour - how someone conducts themselves.",
        effect: "Helps establish Lorna's practical, straightforward character."
    },
    
    "trefoil": {
        title: "trefoil",
        translation: "Three-lobed shape like a clover",
        device: "Vocabulary",
        description: "Architectural term for decorative three-part design common in Buddhist architecture.",
        effect: "Shows traditional Bhutanese architectural style with Buddhist symbolism."
    },
    
    "shamanist": {
        title: "shamanist",
        translation: "Related to shamanism - spirit-based religion",
        device: "Vocabulary",
        description: "Religion based on shamans who communicate with spirit world.",
        effect: "Shows Buddhism merged with existing spiritual practices."
    },
    
    "felicitously": {
        title: "felicitously",
        translation: "In a pleasing or apt manner",
        device: "Vocabulary",
        description: "Perfectly chosen or expressed - particularly appropriate.",
        effect: "Emphasises how beautifully named Bhutanese places are."
    }
};

// Export for use in interactive.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textData, vocabData };
}
