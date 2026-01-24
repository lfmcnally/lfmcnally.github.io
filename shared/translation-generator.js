// GCSE Latin Translation Generator
// Core logic for generating narrative passages and auto-marking translations

// ========== PASSAGE GENERATION ==========

/**
 * Generate a passage based on chapter level and optional grammar spotlight
 * Now uses complete narrative passages instead of random sentences
 * @param {number} maxChapter - Maximum chapter for vocab/grammar (1-10)
 * @param {string|null} spotlight - Grammar spotlight key (e.g., 'purpose_clauses') or null
 * @param {string} intensity - 'light', 'heavy', or 'intensive' (affects sentence selection within passage)
 * @param {number} length - Target number of sentences (4-12)
 * @returns {object} Generated passage with sentences and metadata
 */
function generatePassage(maxChapter, spotlight = null, intensity = 'heavy', length = 6) {
    // Filter passages by chapter level
    let availablePassages = narrativePassages.filter(p => p.maxChapter <= maxChapter);

    if (availablePassages.length === 0) {
        console.error('No passages available for chapter', maxChapter);
        return null;
    }

    // If spotlight specified, prefer passages with sentences matching that grammar
    if (spotlight && grammarSpotlights[spotlight]) {
        const spotlightData = grammarSpotlights[spotlight];

        // Check if spotlight is available at this chapter level
        if (spotlightData.minChapter <= maxChapter) {
            const spotlightTags = spotlightData.tags;

            // Score passages by how many sentences contain the spotlight grammar
            const scoredPassages = availablePassages.map(passage => {
                const matchingCount = passage.sentences.filter(s =>
                    s.grammar.some(g => spotlightTags.includes(g))
                ).length;
                return { passage, score: matchingCount };
            });

            // Sort by score (highest first) and filter to those with at least one match
            scoredPassages.sort((a, b) => b.score - a.score);
            const matchingPassages = scoredPassages.filter(sp => sp.score > 0);

            if (matchingPassages.length > 0) {
                // Randomly select from top-scoring passages
                const topScore = matchingPassages[0].score;
                const topPassages = matchingPassages.filter(sp => sp.score >= topScore - 1);
                availablePassages = topPassages.map(sp => sp.passage);
            }
        }
    }

    // Randomly select a passage
    const selectedPassage = availablePassages[Math.floor(Math.random() * availablePassages.length)];

    // Determine which sentences to include based on length
    let sentences = [...selectedPassage.sentences];

    // If passage is longer than requested length, trim from the end (keeping narrative flow)
    // But always keep at least the first and last sentences for story coherence
    if (sentences.length > length && length >= 4) {
        const toRemove = sentences.length - length;
        // Remove sentences from the middle, preserving beginning and end
        const middleStart = Math.floor(sentences.length / 3);
        const middleEnd = Math.floor(2 * sentences.length / 3);

        // Create array of removable indices (middle section)
        const removableIndices = [];
        for (let i = middleStart; i < middleEnd && removableIndices.length < toRemove; i++) {
            removableIndices.push(i);
        }

        // Remove sentences (from end of removable range to preserve indices)
        removableIndices.reverse().forEach(idx => {
            if (sentences.length > length) {
                sentences.splice(idx, 1);
            }
        });
    }

    // If passage is shorter than requested, that's fine - use all sentences

    return {
        title: selectedPassage.title,
        maxChapter: selectedPassage.maxChapter,
        spotlight: spotlight,
        intensity: intensity,
        introduction: selectedPassage.introduction,
        theme: selectedPassage.theme,
        sentences: sentences.map((s, idx) => ({
            ...s,
            index: idx,
            totalSentences: sentences.length
        })),
        fullText: sentences.map(s => s.latin).join(' ')
    };
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
                minChapter: data.minChapter
            });
        }
    }
    return available.sort((a, b) => a.minChapter - b.minChapter);
}

/**
 * Get available passages for a given chapter level (for UI display)
 */
function getAvailablePassages(maxChapter) {
    return narrativePassages
        .filter(p => p.maxChapter <= maxChapter)
        .map(p => ({
            id: p.id,
            title: p.title,
            theme: p.theme,
            maxChapter: p.maxChapter,
            sentenceCount: p.sentences.length,
            introduction: p.introduction
        }));
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
        'purpose_clauses': 'Purpose clause (ut + subjunctive = in order to)',
        'result_clauses': 'Result clause (so...that)',
        'indirect_commands': 'Indirect command',
        'indirect_questions': 'Indirect question (question word + subjunctive)',
        'indirect_statement': 'Indirect statement (acc + infinitive)',
        'cum_clauses': 'Cum clause (when/since/although + subjunctive)',
        'relative_clauses': 'Relative clause (who/which/that)',
        'deponent_verbs': 'Deponent verb (passive form, active meaning)',
        'comparatives': 'Comparative adjective/adverb',
        'superlatives': 'Superlative adjective/adverb',
        'conditionals': 'Conditional sentence (if...then)',
        'direct_speech': 'Direct speech',
        'direct_questions': 'Direct question',
        'ubi_postquam': 'Time clause (when/after)',
        'quod_quamquam': 'Causal/concessive clause (because/although)'
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
        getAvailablePassages,
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
        getAvailablePassages,
        checkTranslation,
        getWordHint,
        getGrammarHint,
        calculateStats,
        levenshteinDistance,
        normalizeText,
        isCloseMatch
    };
}
