#!/usr/bin/env node
// Script to add topic and set fields to A-Level vocabulary data

const fs = require('fs');
const path = require('path');

// Read the original file
const filePath = path.join(__dirname, '../shared/a-level-vocabulary-data.js');
const content = fs.readFileSync(filePath, 'utf8');

// Extract the array from the file
const match = content.match(/const aLevelVocabularyData = (\[[\s\S]*\]);/);
if (!match) {
    console.error('Could not find vocabulary data');
    process.exit(1);
}

let data;
try {
    data = eval(match[1]);
} catch (e) {
    console.error('Could not parse vocabulary data:', e);
    process.exit(1);
}

console.log(`Found ${data.length} words`);

// Topic classification rules based on meaning keywords
const topicRules = {
    // Verbs
    'Verbs of Motion': {
        keywords: ['go', 'come', 'walk', 'run', 'flee', 'approach', 'arrive', 'depart', 'leave', 'return', 'enter', 'climb', 'fall', 'fly', 'hasten', 'hurry', 'rush', 'follow', 'pursue', 'pass', 'cross', 'advance', 'retreat', 'escape', 'travel', 'journey', 'move', 'proceed', 'ascend', 'descend'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Speaking': {
        keywords: ['say', 'speak', 'tell', 'ask', 'answer', 'reply', 'call', 'shout', 'cry', 'announce', 'declare', 'report', 'narrate', 'promise', 'persuade', 'order', 'command', 'warn', 'advise', 'beg', 'pray', 'praise', 'blame', 'accuse', 'deny', 'confess', 'sing', 'name'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Perception': {
        keywords: ['see', 'hear', 'feel', 'perceive', 'notice', 'observe', 'watch', 'look', 'listen', 'smell', 'taste', 'sense', 'recognise', 'recognize', 'understand', 'know', 'learn', 'discover', 'find out', 'realize'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Thinking': {
        keywords: ['think', 'believe', 'consider', 'suppose', 'judge', 'decide', 'plan', 'intend', 'remember', 'forget', 'doubt', 'wonder', 'hope', 'fear', 'expect', 'imagine', 'reckon', 'deem'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Emotion': {
        keywords: ['love', 'hate', 'like', 'fear', 'anger', 'grieve', 'rejoice', 'delight', 'please', 'displease', 'envy', 'pity', 'admire', 'despise', 'trust', 'distrust'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Giving/Taking': {
        keywords: ['give', 'take', 'receive', 'accept', 'send', 'bring', 'carry', 'offer', 'grant', 'lend', 'borrow', 'steal', 'seize', 'snatch', 'capture', 'obtain', 'acquire', 'get', 'lose', 'hand over', 'deliver'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Making/Doing': {
        keywords: ['make', 'do', 'create', 'build', 'destroy', 'break', 'prepare', 'complete', 'finish', 'begin', 'start', 'produce', 'form', 'shape', 'change', 'transform', 'write', 'compose'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Fighting': {
        keywords: ['fight', 'conquer', 'defeat', 'kill', 'wound', 'attack', 'defend', 'resist', 'overcome', 'strike', 'hit', 'throw', 'shoot', 'battle', 'war', 'slay', 'murder', 'destroy'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Ruling': {
        keywords: ['rule', 'reign', 'govern', 'lead', 'command', 'order', 'forbid', 'allow', 'permit', 'force', 'compel', 'obey', 'serve', 'manage', 'control'],
        infoMatch: /verb/i,
        priority: 1
    },
    'Verbs of Being': {
        keywords: ['be', 'exist', 'become', 'seem', 'appear', 'remain', 'stay', 'live', 'dwell', 'inhabit'],
        infoMatch: /verb/i,
        priority: 2
    },
    // Nouns
    'Military & War': {
        keywords: ['war', 'battle', 'army', 'soldier', 'weapon', 'sword', 'shield', 'spear', 'arrow', 'camp', 'enemy', 'ally', 'victory', 'defeat', 'siege', 'legion', 'centurion', 'standard', 'cavalry', 'infantry', 'troops', 'forces', 'military', 'armour', 'armed', 'fight', 'general', 'commander', 'fleet', 'ship', 'navy'],
        infoMatch: /noun/i,
        priority: 1
    },
    'Government & Politics': {
        keywords: ['king', 'queen', 'emperor', 'consul', 'senate', 'citizen', 'state', 'republic', 'empire', 'power', 'authority', 'law', 'right', 'rule', 'reign', 'throne', 'crown', 'people', 'tribe', 'nation', 'country', 'public', 'vote', 'elect', 'office', 'magistrate', 'dictator', 'tyrant'],
        infoMatch: /noun/i,
        priority: 1
    },
    'Religion & Ritual': {
        keywords: ['god', 'goddess', 'temple', 'altar', 'priest', 'prayer', 'sacrifice', 'sacred', 'holy', 'divine', 'omen', 'oracle', 'fate', 'fortune', 'heaven', 'worship', 'ritual', 'ceremony', 'offering', 'vow'],
        infoMatch: /noun/i,
        priority: 1
    },
    'Family & People': {
        keywords: ['father', 'mother', 'son', 'daughter', 'brother', 'sister', 'husband', 'wife', 'child', 'parent', 'ancestor', 'descendant', 'family', 'household', 'slave', 'master', 'servant', 'freedman', 'man', 'woman', 'boy', 'girl', 'youth', 'old', 'friend', 'companion', 'guest', 'host', 'stranger', 'foreigner'],
        infoMatch: /noun/i,
        priority: 1
    },
    'The Body': {
        keywords: ['body', 'head', 'face', 'eye', 'ear', 'mouth', 'hand', 'foot', 'arm', 'leg', 'heart', 'blood', 'bone', 'skin', 'hair', 'voice', 'breath', 'life', 'death', 'wound', 'disease', 'sick', 'health', 'tears', 'breast', 'neck', 'shoulder', 'finger', 'knee', 'lip', 'tongue', 'tooth'],
        infoMatch: /noun/i,
        priority: 1
    },
    'Emotions & Mind': {
        keywords: ['love', 'hate', 'fear', 'anger', 'joy', 'sorrow', 'grief', 'hope', 'despair', 'courage', 'cowardice', 'pride', 'shame', 'mind', 'soul', 'spirit', 'heart', 'thought', 'reason', 'wisdom', 'folly', 'madness', 'desire', 'passion', 'care', 'worry', 'anxiety', 'peace', 'calm'],
        infoMatch: /noun/i,
        priority: 1
    },
    'Nature & Landscape': {
        keywords: ['land', 'earth', 'sea', 'ocean', 'river', 'stream', 'lake', 'mountain', 'hill', 'valley', 'forest', 'wood', 'tree', 'field', 'plain', 'shore', 'coast', 'island', 'sky', 'sun', 'moon', 'star', 'cloud', 'rain', 'wind', 'storm', 'snow', 'fire', 'water', 'air', 'stone', 'rock', 'sand', 'wave', 'spring', 'fountain', 'flower', 'grass', 'leaf', 'fruit', 'seed', 'animal', 'bird', 'horse', 'dog', 'lion', 'snake', 'fish', 'eagle', 'wing'],
        infoMatch: /noun/i,
        priority: 1
    },
    'Buildings & Places': {
        keywords: ['house', 'home', 'building', 'temple', 'city', 'town', 'village', 'wall', 'gate', 'door', 'roof', 'room', 'hall', 'forum', 'market', 'road', 'path', 'street', 'bridge', 'harbor', 'port', 'tower', 'citadel', 'palace', 'camp', 'place', 'region', 'province', 'border', 'boundary', 'threshold', 'bed', 'table', 'seat', 'chair'],
        infoMatch: /noun/i,
        priority: 1
    },
    'Time & Seasons': {
        keywords: ['time', 'day', 'night', 'year', 'month', 'hour', 'moment', 'age', 'period', 'spring', 'summer', 'autumn', 'winter', 'dawn', 'morning', 'evening', 'noon', 'midnight', 'today', 'tomorrow', 'yesterday', 'now', 'then', 'always', 'never', 'often', 'sometimes', 'soon', 'late', 'early'],
        infoMatch: /noun|adverb/i,
        priority: 1
    },
    'Wealth & Trade': {
        keywords: ['money', 'gold', 'silver', 'wealth', 'riches', 'treasure', 'price', 'value', 'pay', 'reward', 'gift', 'trade', 'merchant', 'buy', 'sell', 'cost', 'profit', 'loss', 'debt', 'tax', 'tribute'],
        infoMatch: /noun/i,
        priority: 1
    },
    'Abstract Concepts': {
        keywords: ['thing', 'matter', 'cause', 'reason', 'way', 'manner', 'kind', 'sort', 'nature', 'form', 'shape', 'end', 'beginning', 'part', 'whole', 'number', 'order', 'custom', 'habit', 'duty', 'honour', 'glory', 'fame', 'virtue', 'vice', 'truth', 'lie', 'justice', 'wrong', 'good', 'evil', 'help', 'harm', 'use', 'need', 'work', 'labor', 'rest', 'peace', 'freedom', 'slavery', 'safety', 'danger', 'crime', 'punishment', 'memory', 'silence', 'noise', 'word', 'speech', 'name', 'letter', 'book', 'story', 'sign', 'example'],
        infoMatch: /noun/i,
        priority: 2
    },
    // Adjectives
    'Size & Quantity': {
        keywords: ['big', 'great', 'large', 'small', 'little', 'tall', 'short', 'long', 'wide', 'narrow', 'thick', 'thin', 'heavy', 'light', 'much', 'many', 'few', 'all', 'whole', 'every', 'each', 'some', 'any', 'no', 'none', 'other', 'same', 'such', 'enough', 'more', 'most', 'less', 'least', 'only', 'alone', 'single', 'double', 'first', 'last', 'next', 'middle', 'half', 'full', 'empty'],
        infoMatch: /adjective/i,
        priority: 1
    },
    'Quality & Character': {
        keywords: ['good', 'bad', 'evil', 'kind', 'cruel', 'brave', 'bold', 'cowardly', 'strong', 'weak', 'wise', 'foolish', 'rich', 'poor', 'noble', 'base', 'free', 'gentle', 'fierce', 'proud', 'humble', 'true', 'false', 'just', 'unjust', 'faithful', 'treacherous', 'honest', 'deceitful', 'happy', 'sad', 'fortunate', 'unfortunate', 'lucky', 'unlucky', 'safe', 'dangerous', 'dear', 'hateful', 'beautiful', 'ugly', 'pleasant', 'unpleasant', 'useful', 'useless', 'easy', 'difficult', 'hard', 'soft', 'rough', 'smooth', 'sharp', 'blunt', 'hot', 'cold', 'wet', 'dry', 'clean', 'dirty', 'bright', 'dark', 'clear', 'obscure', 'new', 'old', 'young', 'ancient', 'modern', 'fresh', 'stale', 'alive', 'dead', 'sick', 'healthy', 'whole', 'broken'],
        infoMatch: /adjective/i,
        priority: 2
    },
    // Function words
    'Conjunctions': {
        keywords: ['and', 'or', 'but', 'for', 'if', 'because', 'although', 'when', 'while', 'until', 'unless', 'that', 'so that', 'in order', 'whether', 'than', 'as', 'like', 'both', 'either', 'neither', 'not only', 'however', 'therefore', 'nevertheless', 'moreover', 'indeed', 'certainly'],
        infoMatch: /conjunction/i,
        priority: 1
    },
    'Prepositions': {
        keywords: ['in', 'on', 'at', 'to', 'from', 'by', 'with', 'without', 'for', 'against', 'through', 'across', 'over', 'under', 'above', 'below', 'before', 'after', 'between', 'among', 'around', 'near', 'far', 'beyond', 'within', 'outside', 'along', 'towards', 'away', 'up', 'down', 'into', 'out of', 'upon', 'beside', 'behind', 'opposite', 'except', 'during', 'about', 'concerning', 'according to'],
        infoMatch: /preposition/i,
        priority: 1
    },
    'Pronouns': {
        keywords: ['I', 'you', 'he', 'she', 'it', 'we', 'they', 'this', 'that', 'these', 'those', 'who', 'what', 'which', 'whom', 'whose', 'whoever', 'whatever', 'whichever', 'self', 'same', 'such', 'one', 'another', 'other', 'each', 'every', 'all', 'some', 'any', 'none', 'no one', 'someone', 'anyone', 'everyone', 'something', 'anything', 'everything', 'nothing'],
        infoMatch: /pronoun/i,
        priority: 1
    },
    'Adverbs': {
        keywords: ['very', 'too', 'so', 'quite', 'rather', 'almost', 'nearly', 'hardly', 'scarcely', 'just', 'only', 'even', 'still', 'already', 'yet', 'now', 'then', 'here', 'there', 'where', 'when', 'how', 'why', 'thus', 'therefore', 'hence', 'accordingly', 'especially', 'particularly', 'generally', 'usually', 'finally', 'firstly', 'secondly', 'lastly', 'meanwhile', 'afterwards', 'immediately', 'suddenly', 'gradually', 'slowly', 'quickly', 'fast', 'well', 'badly', 'greatly', 'deeply', 'highly', 'strongly', 'fiercely', 'keenly', 'sharply'],
        infoMatch: /adverb/i,
        priority: 2
    }
};

// Function to determine topic for a word
function getTopic(word) {
    const english = word.english.toLowerCase();
    const info = word.info.toLowerCase();

    let bestTopic = 'Miscellaneous';
    let bestPriority = 999;
    let bestScore = 0;

    for (const [topic, rules] of Object.entries(topicRules)) {
        // Check if info matches the required pattern
        if (rules.infoMatch && !rules.infoMatch.test(info)) {
            continue;
        }

        // Count keyword matches
        let score = 0;
        for (const keyword of rules.keywords) {
            // Check for word boundary matches
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            if (regex.test(english)) {
                score += keyword.length; // Longer matches score higher
            }
        }

        // Select if better score or same score with higher priority
        if (score > 0 && (score > bestScore || (score === bestScore && rules.priority < bestPriority))) {
            bestTopic = topic;
            bestPriority = rules.priority;
            bestScore = score;
        }
    }

    return bestTopic;
}

// Process all words
const processedData = data.map((word, index) => {
    const topic = getTopic(word);
    const set = Math.floor(index / 50) + 1; // Sets of 50, numbered 1-23

    return {
        ...word,
        topic: topic,
        set: set
    };
});

// Count topics
const topicCounts = {};
processedData.forEach(word => {
    topicCounts[word.topic] = (topicCounts[word.topic] || 0) + 1;
});

console.log('\nTopic distribution:');
Object.entries(topicCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([topic, count]) => {
        console.log(`  ${topic}: ${count}`);
    });

// Generate output
const output = `// A-Level Latin Vocabulary - Complete list (1126 words)
// Based on the OCR A-Level Latin defined vocabulary list
// With topic categories and sequential sets added
const aLevelVocabularyData = ${JSON.stringify(processedData, null, 4)
    .replace(/"latin":/g, 'latin:')
    .replace(/"english":/g, 'english:')
    .replace(/"info":/g, 'info:')
    .replace(/"letter":/g, 'letter:')
    .replace(/"topic":/g, 'topic:')
    .replace(/"set":/g, 'set:')
};
`;

// Write output
fs.writeFileSync(filePath, output, 'utf8');
console.log(`\nWritten ${processedData.length} words to ${filePath}`);
