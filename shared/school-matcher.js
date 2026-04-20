// ============================================
// SCHOOL NAME MATCHER
// ============================================
// Shared helpers for normalising school names entered at sign-up / in
// onboarding prompts, and for detecting close matches against the list
// of schools already in the database. This prevents the same school
// appearing multiple times with slightly different spellings.

(function (global) {
    'use strict';

    // Words that shouldn't influence a match between two school names
    const NOISE_WORDS = new Set([
        'the', 'school', 'schools', 'college', 'academy', 'grammar',
        'high', 'primary', 'secondary', 'comprehensive', 'of', 'and', '&',
        'saint', 'st', 'sts'
    ]);

    function normalizeSchool(str) {
        if (!str) return '';
        return String(str)
            .toLowerCase()
            .replace(/&/g, ' and ')
            .replace(/[^a-z0-9\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function coreTokens(str) {
        const norm = normalizeSchool(str);
        if (!norm) return '';
        const tokens = norm.split(' ').filter(t => t && !NOISE_WORDS.has(t));
        if (tokens.length === 0) return norm;
        return tokens.sort().join(' ');
    }

    function levenshtein(a, b) {
        if (a === b) return 0;
        if (!a.length) return b.length;
        if (!b.length) return a.length;
        const prev = new Array(b.length + 1);
        const curr = new Array(b.length + 1);
        for (let j = 0; j <= b.length; j++) prev[j] = j;
        for (let i = 1; i <= a.length; i++) {
            curr[0] = i;
            for (let j = 1; j <= b.length; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                curr[j] = Math.min(
                    curr[j - 1] + 1,
                    prev[j] + 1,
                    prev[j - 1] + cost
                );
            }
            for (let j = 0; j <= b.length; j++) prev[j] = curr[j];
        }
        return prev[b.length];
    }

    // Returns the closest existing school name for a typed value, or null
    // if no existing school is similar enough. "Similar" means either:
    //   - identical after normalisation/ignoring noise words, or
    //   - small Levenshtein distance on the core tokens.
    function findSimilarSchool(typed, existingList) {
        if (!typed || !Array.isArray(existingList) || existingList.length === 0) return null;
        const typedNorm = normalizeSchool(typed);
        const typedCore = coreTokens(typed);
        if (!typedNorm) return null;

        let best = null;
        let bestScore = Infinity;

        for (const name of existingList) {
            if (!name) continue;
            const nameNorm = normalizeSchool(name);
            const nameCore = coreTokens(name);
            if (!nameNorm) continue;

            // Exact normalised match — treat as identical even if capitalisation/punctuation differs
            if (nameNorm === typedNorm || nameCore === typedCore) {
                return name;
            }

            // Distance on core tokens, with a threshold that scales with length
            const dist = levenshtein(typedCore || typedNorm, nameCore || nameNorm);
            const longer = Math.max((typedCore || typedNorm).length, (nameCore || nameNorm).length);
            const threshold = longer <= 8 ? 1 : longer <= 15 ? 2 : 3;

            if (dist <= threshold && dist < bestScore) {
                best = name;
                bestScore = dist;
            }
        }

        return best;
    }

    // Prompt-driven helper: given a typed school and the existing list,
    // returns the name that should be saved. If a close match exists and
    // differs from the typed value, asks the user to confirm using the
    // existing spelling.
    function resolveSchoolChoice(typed, existingList) {
        const trimmed = (typed || '').trim();
        if (!trimmed) return trimmed;
        const match = findSimilarSchool(trimmed, existingList);
        if (!match || match === trimmed) return trimmed;
        const useExisting = window.confirm(
            'Did you mean "' + match + '"?\n\n' +
            'Click OK to use the existing spelling (recommended — this keeps all users from the same school grouped together).\n\n' +
            'Click Cancel to keep your spelling: "' + trimmed + '".'
        );
        return useExisting ? match : trimmed;
    }

    global.SchoolMatcher = {
        normalizeSchool: normalizeSchool,
        coreTokens: coreTokens,
        findSimilarSchool: findSimilarSchool,
        resolveSchoolChoice: resolveSchoolChoice
    };
})(window);
