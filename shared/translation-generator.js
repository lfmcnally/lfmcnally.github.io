// GCSE Latin Translation Generator
// Template-based passage generation with vocabulary substitution

// ========== PASSAGE GENERATION ==========

/**
 * Generate a passage from a template, filling vocabulary slots
 */
function generatePassage(maxChapter, spotlight = null, intensity = 'heavy', length = 6) {
    // Filter templates by chapter
    let availableTemplates = storyTemplates.filter(t => t.maxChapter <= maxChapter);

    if (availableTemplates.length === 0) {
        console.error('No templates available for chapter', maxChapter);
        return null;
    }

    // If spotlight specified, prefer templates with matching grammar
    if (spotlight && grammarSpotlights[spotlight]) {
        const spotlightTags = grammarSpotlights[spotlight].tags;
        const matchingTemplates = availableTemplates.filter(t =>
            t.sentences.some(s => s.grammar.some(g => spotlightTags.includes(g)))
        );
        if (matchingTemplates.length > 0) {
            availableTemplates = matchingTemplates;
        }
    }

    // Select random template
    const template = availableTemplates[Math.floor(Math.random() * availableTemplates.length)];

    // Generate slot values for the whole passage
    const slotValues = generateSlotValues(template, maxChapter);

    // Build sentences
    const sentences = template.sentences.map((sentenceTemplate, idx) => {
        const { latin, english } = fillTemplate(sentenceTemplate, slotValues);
        return {
            latin: latin,
            translations: [english],
            grammar: sentenceTemplate.grammar,
            keyPhrases: extractKeyPhrases(english),
            hints: generateHints(latin, sentenceTemplate),
            index: idx,
            totalSentences: template.sentences.length
        };
    });

    // Trim to requested length if needed
    const finalSentences = sentences.slice(0, Math.min(length, sentences.length));

    // Build title with slot values
    const title = fillTitleSlots(template.title, slotValues);
    const intro = fillTitleSlots(template.introduction, slotValues);

    return {
        title: title,
        maxChapter: template.maxChapter,
        spotlight: spotlight,
        intensity: intensity,
        introduction: intro,
        theme: template.theme,
        sentences: finalSentences.map((s, i) => ({ ...s, index: i, totalSentences: finalSentences.length })),
        fullText: finalSentences.map(s => s.latin).join(' ')
    };
}

/**
 * Generate random values for all slots in a template
 */
function generateSlotValues(template, maxChapter) {
    const values = {};

    // Collect all unique slots from all sentences
    const allSlots = {};
    template.sentences.forEach(s => {
        Object.entries(s.slots || {}).forEach(([key, config]) => {
            if (!allSlots[key]) allSlots[key] = config;
        });
    });

    // Generate value for each slot
    Object.entries(allSlots).forEach(([slotName, config]) => {
        values[slotName] = generateSlotValue(slotName, config, maxChapter);
    });

    return values;
}

/**
 * Generate a single slot value
 */
function generateSlotValue(slotName, config, maxChapter) {
    const type = config.type;
    const filter = config.filter || {};

    if (type === 'name') {
        if (filter.heroic) {
            return { latin: randomChoice(romanNames.heroic), english: randomChoice(romanNames.heroic) };
        }
        if (filter.male) {
            return { latin: randomChoice(romanNames.male), english: randomChoice(romanNames.male) };
        }
        if (filter.female) {
            return { latin: randomChoice(romanNames.female), english: randomChoice(romanNames.female) };
        }
        return { latin: randomChoice(romanNames.male), english: randomChoice(romanNames.male) };
    }

    if (type === 'noun') {
        const nouns = Object.entries(vocabulary.nouns)
            .filter(([_, n]) => n.chapter <= maxChapter)
            .filter(([_, n]) => !filter.gender || n.gender === filter.gender)
            .filter(([_, n]) => !filter.meaning || (Array.isArray(filter.meaning) ? filter.meaning.includes(n.meaning) : n.meaning === filter.meaning));

        if (nouns.length === 0) return { latin: 'servus', english: 'slave', data: vocabulary.nouns.servus };
        const [word, data] = randomChoice(nouns);
        return { latin: word, english: data.meaning, data: data };
    }

    if (type === 'adjective') {
        const adjs = Object.entries(vocabulary.adjectives)
            .filter(([_, a]) => a.chapter <= maxChapter)
            .filter(([_, a]) => !filter.meaning || a.meaning === filter.meaning)
            .filter(([_, a]) => !filter.positive || ['good', 'happy', 'beautiful'].includes(a.meaning));

        if (adjs.length === 0) return { latin: 'bonus', english: 'good', data: vocabulary.adjectives.bonus };
        const [word, data] = randomChoice(adjs);
        return { latin: word, english: data.meaning, data: data };
    }

    if (type === 'place') {
        const places = Object.entries(vocabulary.places)
            .filter(([_, p]) => p.chapter <= maxChapter);

        if (places.length === 0) return { latin: 'forum', english: 'forum' };
        const [word, data] = randomChoice(places);
        return { latin: word, english: data.meanings ? randomChoice(data.meanings) : data.meaning };
    }

    if (type === 'creature') {
        const creature = randomChoice(creatures.monsters);
        return {
            latin: creature.latin,
            english: creature.english,
            data: creature
        };
    }

    return { latin: 'res', english: 'thing' };
}

/**
 * Fill a sentence template with slot values
 */
function fillTemplate(sentenceTemplate, slotValues) {
    let latin = sentenceTemplate.template;
    let english = sentenceTemplate.translation;

    // Replace all slot references
    Object.entries(slotValues).forEach(([slotName, value]) => {
        // Basic replacements
        latin = latin.replace(new RegExp(`\\{${slotName}\\}`, 'g'), value.latin);
        english = english.replace(new RegExp(`\\{${slotName}_ENG\\}`, 'g'), value.english);

        // Handle case variations for Latin
        if (value.data) {
            const forms = getLatinForms(value.latin, value.data);
            latin = latin.replace(new RegExp(`\\{${slotName}_ACC\\}`, 'g'), forms.acc);
            latin = latin.replace(new RegExp(`\\{${slotName}_GEN\\}`, 'g'), forms.gen);
            latin = latin.replace(new RegExp(`\\{${slotName}_DAT\\}`, 'g'), forms.dat);
            latin = latin.replace(new RegExp(`\\{${slotName}_ABL\\}`, 'g'), forms.abl);
        } else {
            // For names/simple words, use basic patterns
            latin = latin.replace(new RegExp(`\\{${slotName}_ACC\\}`, 'g'), value.latin);
            latin = latin.replace(new RegExp(`\\{${slotName}_GEN\\}`, 'g'), value.latin);
            latin = latin.replace(new RegExp(`\\{${slotName}_DAT\\}`, 'g'), value.latin);
            latin = latin.replace(new RegExp(`\\{${slotName}_ABL\\}`, 'g'), value.latin);
        }
    });

    // Handle PLACE special cases
    if (slotValues.PLACE) {
        const placeData = vocabulary.places[slotValues.PLACE.latin] || vocabulary.nouns[slotValues.PLACE.latin];
        if (placeData) {
            const forms = getPlaceForms(slotValues.PLACE.latin);
            latin = latin.replace(/\{PLACE_ACC\}/g, forms.acc);
            latin = latin.replace(/\{PLACE_ABL\}/g, forms.abl);
        }
        english = english.replace(/\{PLACE_ENG\}/g, slotValues.PLACE.english);
    }

    // Handle OBJECT
    if (slotValues.OBJECT) {
        const forms = getLatinForms(slotValues.OBJECT.latin, slotValues.OBJECT.data);
        latin = latin.replace(/\{OBJECT_ACC\}/g, forms.acc);
        english = english.replace(/\{OBJECT_ENG\}/g, slotValues.OBJECT.english);
    }

    // Handle ANIMAL
    if (slotValues.ANIMAL) {
        const forms = getLatinForms(slotValues.ANIMAL.latin, slotValues.ANIMAL.data);
        latin = latin.replace(/\{ANIMAL\}/g, slotValues.ANIMAL.latin);
        latin = latin.replace(/\{ANIMAL_ACC\}/g, forms.acc);
        english = english.replace(/\{ANIMAL_ENG\}/g, slotValues.ANIMAL.english);
    }

    // Handle PERSON
    if (slotValues.PERSON) {
        latin = latin.replace(/\{PERSON\}/g, slotValues.PERSON.latin);
        english = english.replace(/\{PERSON_ENG\}/g, slotValues.PERSON.english);
        english = english.replace(/\{PERSON_DESC\}/g, slotValues.PERSON.english);
        if (slotValues.PERSON.data) {
            const forms = getLatinForms(slotValues.PERSON.latin, slotValues.PERSON.data);
            latin = latin.replace(/\{PERSON_DAT\}/g, forms.dat);
        }
    }

    // Handle HERO and MONSTER
    if (slotValues.HERO) {
        latin = latin.replace(/\{HERO\}/g, slotValues.HERO.latin);
        english = english.replace(/\{HERO_ENG\}/g, slotValues.HERO.english);
    }
    if (slotValues.MONSTER) {
        latin = latin.replace(/\{MONSTER\}/g, slotValues.MONSTER.latin);
        english = english.replace(/\{MONSTER_ENG\}/g, slotValues.MONSTER.english);
        if (slotValues.MONSTER.data) {
            const forms = getCreatureForms(slotValues.MONSTER.data);
            latin = latin.replace(/\{MONSTER_ACC\}/g, forms.acc);
            latin = latin.replace(/\{MONSTER_ABL\}/g, forms.abl);
        }
    }

    // Handle ADJ
    if (slotValues.ADJ) {
        latin = latin.replace(/\{ADJ\}/g, slotValues.ADJ.latin);
        latin = latin.replace(/\{ADJ_ACC\}/g, getAdjForm(slotValues.ADJ, 'acc'));
        english = english.replace(/\{ADJ_ENG\}/g, slotValues.ADJ.english);
    }

    return { latin, english };
}

/**
 * Get Latin case forms for a noun
 */
function getLatinForms(word, data) {
    if (!data) return { nom: word, acc: word, gen: word, dat: word, abl: word };

    const stem = data.stem;
    const decl = data.decl;
    const gender = data.gender;

    // First declension
    if (decl === 1) {
        return {
            nom: stem + 'a',
            acc: stem + 'am',
            gen: stem + 'ae',
            dat: stem + 'ae',
            abl: stem + 'a'
        };
    }

    // Second declension masculine
    if (decl === 2 && gender === 'm') {
        // Handle -er nouns like puer
        if (word.endsWith('er')) {
            return {
                nom: word,
                acc: stem + 'um',
                gen: stem + 'i',
                dat: stem + 'o',
                abl: stem + 'o'
            };
        }
        return {
            nom: stem + 'us',
            acc: stem + 'um',
            gen: stem + 'i',
            dat: stem + 'o',
            abl: stem + 'o'
        };
    }

    // Second declension neuter
    if (decl === 2 && gender === 'n') {
        return {
            nom: stem + 'um',
            acc: stem + 'um',
            gen: stem + 'i',
            dat: stem + 'o',
            abl: stem + 'o'
        };
    }

    // Third declension (simplified)
    if (decl === 3) {
        // Get genitive stem from gen field
        const genStem = data.gen ? data.gen.replace(/is$/, '') : stem;
        return {
            nom: word,
            acc: genStem + 'em',
            gen: genStem + 'is',
            dat: genStem + 'i',
            abl: genStem + 'e'
        };
    }

    return { nom: word, acc: word, gen: word, dat: word, abl: word };
}

/**
 * Get place forms (simplified)
 */
function getPlaceForms(place) {
    const placeFormsMap = {
        forum: { acc: 'forum', abl: 'foro' },
        hortus: { acc: 'hortum', abl: 'horto' },
        villa: { acc: 'villam', abl: 'villa' },
        taberna: { acc: 'tabernam', abl: 'taberna' },
        templum: { acc: 'templum', abl: 'templo' },
        via: { acc: 'viam', abl: 'via' },
        silva: { acc: 'silvam', abl: 'silva' },
        urbs: { acc: 'urbem', abl: 'urbe' },
        castra: { acc: 'castra', abl: 'castris' },
        Roma: { acc: 'Romam', abl: 'Roma' },
        mons: { acc: 'montem', abl: 'monte' },
        flumen: { acc: 'flumen', abl: 'flumine' },
        mare: { acc: 'mare', abl: 'mari' }
    };
    return placeFormsMap[place] || { acc: place, abl: place };
}

/**
 * Get creature forms
 */
function getCreatureForms(creature) {
    if (creature.decl === 2 && creature.gender === 'n') {
        const stem = creature.latin.replace(/um$/, '');
        return { acc: stem + 'um', abl: stem + 'o' };
    }
    if (creature.decl === 3) {
        const stem = creature.latin.replace(/s$/, '').replace(/o$/, 'on');
        return { acc: stem + 'em', abl: stem + 'e' };
    }
    return { acc: creature.latin, abl: creature.latin };
}

/**
 * Get adjective form for a case
 */
function getAdjForm(adj, caseForm) {
    if (!adj.data) return adj.latin;
    const stem = adj.data.stem;
    const type = adj.data.type;

    if (type === '212') {
        if (caseForm === 'acc') return stem + 'um'; // masculine accusative
        return stem + 'us';
    }
    if (type === '3') {
        if (caseForm === 'acc') return stem + 'em';
        return stem + 'is';
    }
    return adj.latin;
}

/**
 * Fill title slots
 */
function fillTitleSlots(text, slotValues) {
    let result = text;
    Object.entries(slotValues).forEach(([slot, value]) => {
        result = result.replace(new RegExp(`\\{${slot}\\}`, 'g'), value.latin);
        result = result.replace(new RegExp(`\\{${slot}_ENG\\}`, 'g'), value.english);
    });
    // Clean up any remaining slots
    result = result.replace(/\{[A-Z_]+\}/g, '');
    return result;
}

/**
 * Extract key phrases from English translation
 */
function extractKeyPhrases(english) {
    // Remove common words and return key words
    const stopWords = ['the', 'a', 'an', 'to', 'in', 'on', 'at', 'for', 'is', 'was', 'were', 'are', 'his', 'her', 'its'];
    const words = english.toLowerCase().replace(/[.,!?'"]/g, '').split(' ');
    return words.filter(w => w.length > 2 && !stopWords.includes(w));
}

/**
 * Generate hints for a sentence
 */
function generateHints(latin, sentenceTemplate) {
    const hints = {};
    const words = latin.split(' ');

    // Add grammar-based hints
    if (sentenceTemplate.grammar.includes('imperfect')) {
        const imperfectWords = words.filter(w => w.match(/(bat|bant|bebat|bebant)$/));
        imperfectWords.forEach(w => hints[w] = 'imperfect tense');
    }
    if (sentenceTemplate.grammar.includes('perfect')) {
        const perfectWords = words.filter(w => w.match(/(vit|vit|verunt|xit|xerunt)$/));
        perfectWords.forEach(w => hints[w] = 'perfect tense');
    }

    return hints;
}

/**
 * Helper: random choice from array
 */
function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Shuffle array (Fisher-Yates)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Get available grammar spotlights for chapter
 */
function getAvailableSpotlights(maxChapter) {
    const available = [];
    for (const [key, data] of Object.entries(grammarSpotlights)) {
        if (data.minChapter <= maxChapter) {
            available.push({ key, name: data.name, minChapter: data.minChapter });
        }
    }
    return available.sort((a, b) => a.minChapter - b.minChapter);
}

// ========== ANSWER CHECKING ==========

function levenshteinDistance(str1, str2) {
    const m = str1.length, n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = str1[i-1] === str2[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
        }
    }
    return dp[m][n];
}

function normalizeText(text) {
    return text.toLowerCase().replace(/[.,!?;:'"]/g, '').replace(/[-–—]/g, ' ').replace(/\s+/g, ' ').trim();
}

function checkTranslation(userAnswer, sentence) {
    const userNorm = normalizeText(userAnswer);
    const translations = sentence.translations || [];
    const keyPhrases = sentence.keyPhrases || [];

    if (!userNorm) {
        return { correct: false, partial: false, matchType: 'empty', feedback: 'Please enter a translation.' };
    }

    for (const translation of translations) {
        const transNorm = normalizeText(translation);
        if (userNorm === transNorm) {
            return { correct: true, partial: false, matchType: 'exact', feedback: 'Perfect translation!' };
        }
        if (levenshteinDistance(userNorm, transNorm) <= 3) {
            return { correct: true, partial: false, matchType: 'close', feedback: 'Correct! (minor differences accepted)' };
        }
    }

    // Check key phrases
    if (keyPhrases.length > 0) {
        let matched = keyPhrases.filter(p => userNorm.includes(p.toLowerCase())).length;
        let ratio = matched / keyPhrases.length;
        if (ratio >= 0.7) {
            return { correct: true, partial: false, matchType: 'phrases', feedback: 'Correct! Your translation captures the meaning.' };
        }
        if (ratio >= 0.4) {
            return { correct: false, partial: true, matchType: 'partial', feedback: `Partially correct - ${matched}/${keyPhrases.length} key elements.` };
        }
    }

    return { correct: false, partial: false, matchType: 'incorrect', feedback: 'Not quite right. Check your translation against the model answer.' };
}

function getWordHint(sentence, word) {
    const hints = sentence.hints || {};
    const wordLower = word.toLowerCase().replace(/[.,!?;:]/g, '');
    for (const [key, hint] of Object.entries(hints)) {
        if (key.toLowerCase() === wordLower) return hint;
    }
    return null;
}

function getGrammarHint(sentence) {
    const grammar = sentence.grammar || [];
    const descriptions = {
        'present_active': 'Present tense',
        'imperfect': 'Imperfect tense (was doing / used to)',
        'perfect': 'Perfect tense (did / has done)',
        'pluperfect': 'Pluperfect tense (had done)',
        'perfect_passive': 'Perfect passive (was done)',
        'ablative_absolute': 'Ablative absolute',
        'direct_speech': 'Direct speech',
        'direct_questions': 'Direct question',
        'infinitive': 'Infinitive (to do)',
        'vocative': 'Vocative case (addressing someone)',
        'superlatives': 'Superlative (very/most)',
        'ubi_postquam': 'Time clause (when/after)'
    };
    const relevant = grammar.filter(g => descriptions[g]).map(g => descriptions[g]);
    return relevant.length > 0 ? `This sentence contains: ${relevant.join(', ')}` : 'Check verb tenses and noun cases.';
}

function calculateStats(results) {
    const total = results.length;
    const correct = results.filter(r => r.correct).length;
    const partial = results.filter(r => r.partial).length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const grades = [
        { min: 90, grade: 'A*', message: 'Outstanding!' },
        { min: 80, grade: 'A', message: 'Great job!' },
        { min: 70, grade: 'B', message: 'Good effort!' },
        { min: 60, grade: 'C', message: 'Satisfactory.' },
        { min: 50, grade: 'D', message: 'Keep working!' },
        { min: 0, grade: 'U', message: 'Practice more!' }
    ];
    const gradeInfo = grades.find(g => percentage >= g.min);
    return { total, correct, partial, incorrect: total - correct - partial, percentage, grade: gradeInfo };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.TranslationGenerator = {
        generatePassage,
        getAvailableSpotlights,
        checkTranslation,
        getWordHint,
        getGrammarHint,
        calculateStats,
        shuffleArray
    };
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generatePassage, getAvailableSpotlights, checkTranslation, getWordHint, getGrammarHint, calculateStats };
}
