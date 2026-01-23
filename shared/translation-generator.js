// GCSE Latin Translation Generator
// Core logic for generating passages and auto-marking translations

// ========== PASSAGE GENERATION ==========

/**
 * Generate a passage based on chapter level and optional grammar spotlight
 * @param {number} maxChapter - Maximum chapter for vocab/grammar (1-10)
 * @param {string|null} spotlight - Grammar spotlight key (e.g., 'purpose_clauses') or null
 * @param {string} intensity - 'light', 'heavy', or 'intensive'
 * @param {number} length - Number of sentences (4-12)
 * @returns {object} Generated passage with sentences and metadata
 */
function generatePassage(maxChapter, spotlight = null, intensity = 'heavy', length = 6) {
    // Filter sentences by chapter
    let availableSentences = sentenceBank.filter(s => s.maxChapter <= maxChapter);

    if (availableSentences.length === 0) {
        console.error('No sentences available for chapter', maxChapter);
        return null;
    }

    let selectedSentences = [];

    if (spotlight && grammarSpotlights[spotlight]) {
        const spotlightData = grammarSpotlights[spotlight];

        // Check if spotlight is available at this chapter level
        if (spotlightData.minChapter > maxChapter) {
            console.warn(`Spotlight ${spotlight} requires chapter ${spotlightData.minChapter}, but max is ${maxChapter}`);
            spotlight = null;
        } else {
            // Get sentences that match the spotlight
            const spotlightTags = spotlightData.tags;
            const spotlightSentences = availableSentences.filter(s =>
                s.grammar.some(g => spotlightTags.includes(g))
            );

            // Calculate how many spotlight sentences based on intensity
            let spotlightCount;
            switch (intensity) {
                case 'light':
                    spotlightCount = Math.min(2, Math.floor(length * 0.25));
                    break;
                case 'intensive':
                    spotlightCount = length;
                    break;
                case 'heavy':
                default:
                    spotlightCount = Math.min(spotlightSentences.length, Math.floor(length * 0.6));
            }

            // Shuffle and select spotlight sentences
            const shuffledSpotlight = shuffleArray([...spotlightSentences]);
            selectedSentences = shuffledSpotlight.slice(0, spotlightCount);

            // Fill remaining with non-spotlight sentences
            const remainingCount = length - selectedSentences.length;
            if (remainingCount > 0) {
                const nonSpotlight = availableSentences.filter(s =>
                    !spotlightTags.some(t => s.grammar.includes(t))
                );
                const shuffledNon = shuffleArray([...nonSpotlight]);
                selectedSentences = [...selectedSentences, ...shuffledNon.slice(0, remainingCount)];
            }
        }
    }

    // If no spotlight or not enough sentences, fill with random sentences
    if (selectedSentences.length < length) {
        const remaining = length - selectedSentences.length;
        const usedIds = new Set(selectedSentences.map(s => s.id));
        const unused = availableSentences.filter(s => !usedIds.has(s.id));
        const shuffled = shuffleArray([...unused]);
        selectedSentences = [...selectedSentences, ...shuffled.slice(0, remaining)];
    }

    // Shuffle final selection for variety
    selectedSentences = shuffleArray(selectedSentences);

    // Limit to requested length
    selectedSentences = selectedSentences.slice(0, length);

    // Generate passage title
    const title = generatePassageTitle(selectedSentences);

    return {
        title: title,
        maxChapter: maxChapter,
        spotlight: spotlight,
        intensity: intensity,
        sentences: selectedSentences.map((s, idx) => ({
            ...s,
            index: idx,
            totalSentences: selectedSentences.length
        })),
        fullText: selectedSentences.map(s => s.latin).join(' ')
    };
}

/**
 * Generate a title based on passage content
 */
function generatePassageTitle(sentences) {
    const themes = sentences.map(s => s.theme);
    const themeCounts = {};
    themes.forEach(t => themeCounts[t] = (themeCounts[t] || 0) + 1);

    const mainTheme = Object.keys(themeCounts).reduce((a, b) =>
        themeCounts[a] > themeCounts[b] ? a : b
    );

    const titles = {
        daily_life: ['A Day in Rome', 'Roman Life', 'The Roman Household', 'At Home', 'In the City'],
        military: ['The Battle', 'Roman Soldiers', 'War and Peace', 'The Campaign', 'Victory and Defeat'],
        mythology: ['Tales of the Gods', 'Ancient Legends', 'Heroes and Monsters', 'The King\'s Tale'],
        travel: ['The Journey', 'A Voyage', 'On the Road', 'Travellers\' Tales']
    };

    const options = titles[mainTheme] || titles.daily_life;
    return options[Math.floor(Math.random() * options.length)];
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
 * Get available grammar spotlights for a given chapter level
 */
function getAvailableSpotlights(maxChapter) {
    const available = [];
    for (const [key, data] of Object.entries(grammarSpotlights)) {
        if (data.minChapter <= maxChapter) {
            available.push({
                key: key,
                name: data.name,
                description: data.description,
                minChapter: data.minChapter
            });
        }
    }
    return available.sort((a, b) => a.minChapter - b.minChapter);
}

// ========== ANSWER CHECKING (Lenient Matching) ==========

/**
 * Calculate Levenshtein distance between two strings
 */
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }
    return dp[m][n];
}

/**
 * Normalize text for comparison
 */
function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:'"]/g, '')      // Remove punctuation
        .replace(/[-–—]/g, ' ')           // Replace dashes with spaces
        .replace(/\s+/g, ' ')             // Collapse multiple spaces
        .replace(/['']/g, "'")            // Normalize apostrophes
        .trim();
}

/**
 * Remove common prefixes/articles
 */
function removeCommonPrefixes(text) {
    return text
        .replace(/^(the |a |an )/, '')
        .replace(/\b(he\/she\/it|he\/she|he |she |it )/g, '')
        .trim();
}

/**
 * Check if two strings are close enough (allowing for typos)
 */
function isCloseMatch(userAnswer, correctAnswer, maxDistance = 2) {
    if (userAnswer === correctAnswer) return true;

    // Allow more typos for longer answers
    const allowedDistance = correctAnswer.length >= 20 ? 3 :
                           correctAnswer.length >= 10 ? 2 : 1;
    const distance = levenshteinDistance(userAnswer, correctAnswer);

    return distance <= Math.min(maxDistance, allowedDistance);
}

/**
 * Check if user answer contains a key phrase
 */
function containsKeyPhrase(userAnswer, phrase) {
    // Handle regex patterns
    if (phrase.includes('|')) {
        const pattern = new RegExp(phrase, 'i');
        return pattern.test(userAnswer);
    }

    // Simple substring match (case-insensitive)
    return userAnswer.toLowerCase().includes(phrase.toLowerCase());
}

/**
 * Main translation checking function
 * @param {string} userAnswer - User's translation attempt
 * @param {object} sentence - Sentence object with translations and keyPhrases
 * @returns {object} { correct: boolean, partial: boolean, matchType: string, feedback: string }
 */
function checkTranslation(userAnswer, sentence) {
    const userNorm = normalizeText(userAnswer);
    const translations = sentence.translations || [];
    const keyPhrases = sentence.keyPhrases || [];

    // Empty answer check
    if (!userNorm) {
        return {
            correct: false,
            partial: false,
            matchType: 'empty',
            feedback: 'Please enter a translation.'
        };
    }

    // Check against acceptable translations
    for (const translation of translations) {
        const translationNorm = normalizeText(translation);

        // Exact match
        if (userNorm === translationNorm) {
            return {
                correct: true,
                partial: false,
                matchType: 'exact',
                feedback: 'Perfect translation!'
            };
        }

        // Close match (allowing typos)
        if (isCloseMatch(userNorm, translationNorm)) {
            return {
                correct: true,
                partial: false,
                matchType: 'close',
                feedback: 'Correct! (minor spelling differences accepted)'
            };
        }

        // Match without articles/prefixes
        const userSimple = removeCommonPrefixes(userNorm);
        const transSimple = removeCommonPrefixes(translationNorm);
        if (userSimple === transSimple || isCloseMatch(userSimple, transSimple)) {
            return {
                correct: true,
                partial: false,
                matchType: 'simplified',
                feedback: 'Correct!'
            };
        }
    }

    // Key phrase matching for partial credit
    if (keyPhrases.length > 0) {
        let matchedCount = 0;
        for (const phrase of keyPhrases) {
            if (containsKeyPhrase(userNorm, phrase)) {
                matchedCount++;
            }
        }

        const matchRatio = matchedCount / keyPhrases.length;

        if (matchRatio >= 0.8) {
            return {
                correct: true,
                partial: false,
                matchType: 'phrases',
                feedback: 'Correct! Your translation captures the meaning.'
            };
        } else if (matchRatio >= 0.5) {
            return {
                correct: false,
                partial: true,
                matchType: 'partial',
                matchedPhrases: matchedCount,
                totalPhrases: keyPhrases.length,
                feedback: `Partially correct - you got ${matchedCount}/${keyPhrases.length} key elements.`
            };
        }
    }

    // No match
    return {
        correct: false,
        partial: false,
        matchType: 'incorrect',
        feedback: 'Not quite right. Check your translation against the model answer.'
    };
}

// ========== HINT SYSTEM ==========

/**
 * Get a hint for a Latin word (dictionary form only, not meaning)
 */
function getWordHint(sentence, word) {
    const wordLower = word.toLowerCase().replace(/[.,!?;:]/g, '');
    const hints = sentence.hints || {};

    // Check if we have a specific hint for this word
    for (const [key, hint] of Object.entries(hints)) {
        if (key.toLowerCase() === wordLower || key.toLowerCase().includes(wordLower)) {
            return hint;
        }
    }

    return null;
}

/**
 * Get grammar hint for the sentence
 */
function getGrammarHint(sentence) {
    const grammar = sentence.grammar || [];

    const grammarDescriptions = {
        'present_active': 'Present tense (active voice)',
        'imperfect': 'Imperfect tense (was doing / used to do)',
        'perfect': 'Perfect tense (did / has done)',
        'pluperfect': 'Pluperfect tense (had done)',
        'future': 'Future tense (will do)',
        'present_passive': 'Present passive (is being done)',
        'imperfect_passive': 'Imperfect passive (was being done)',
        'perfect_passive': 'Perfect passive (was done / has been done)',
        'present_participle': 'Present participle (-ing form)',
        'ppp': 'Perfect passive participle (having been done)',
        'ablative_absolute': 'Ablative absolute construction',
        'purpose_clauses': 'Purpose clause (ut + subjunctive)',
        'result_clauses': 'Result clause (so...that)',
        'indirect_commands': 'Indirect command',
        'indirect_questions': 'Indirect question',
        'indirect_statement': 'Indirect statement (acc + infinitive)',
        'cum_clauses': 'Cum clause (when/since/although + subjunctive)',
        'relative_clauses': 'Relative clause (who/which/that)',
        'deponent_verbs': 'Deponent verb (passive form, active meaning)',
        'comparatives': 'Comparative adjective/adverb',
        'superlatives': 'Superlative adjective/adverb'
    };

    const relevantGrammar = grammar
        .filter(g => grammarDescriptions[g])
        .map(g => grammarDescriptions[g]);

    if (relevantGrammar.length > 0) {
        return `This sentence contains: ${relevantGrammar.join(', ')}`;
    }

    return 'Check the verb tense and noun cases carefully.';
}

// ========== STATISTICS ==========

/**
 * Calculate session statistics
 */
function calculateStats(results) {
    const total = results.length;
    const correct = results.filter(r => r.correct).length;
    const partial = results.filter(r => r.partial).length;
    const incorrect = total - correct - partial;

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return {
        total,
        correct,
        partial,
        incorrect,
        percentage,
        grade: getGrade(percentage)
    };
}

/**
 * Get grade based on percentage
 */
function getGrade(percentage) {
    if (percentage >= 90) return { grade: 'A*', message: 'Outstanding! Excellent work!' };
    if (percentage >= 80) return { grade: 'A', message: 'Great job! Well done!' };
    if (percentage >= 70) return { grade: 'B', message: 'Good effort! Keep practising!' };
    if (percentage >= 60) return { grade: 'C', message: 'Satisfactory. More practice needed.' };
    if (percentage >= 50) return { grade: 'D', message: 'Keep working at it!' };
    return { grade: 'U', message: 'Don\'t give up! Practice makes perfect.' };
}

// Export for use in browser
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

// Export for Node.js (testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generatePassage,
        getAvailableSpotlights,
        checkTranslation,
        getWordHint,
        getGrammarHint,
        calculateStats,
        levenshteinDistance,
        normalizeText,
        isCloseMatch
    };
}
