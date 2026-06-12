// Latin Quest — shared vocabulary/quiz core (no DOM, Node-testable).
// Loaded as a plain script; the 3D game module reads window.VocabCore.

const VocabCore = (function () {
    'use strict';

    function buildPools(vocabData) {
        const pools = {};
        for (let ch = 1; ch <= 10; ch++) pools[ch] = [];
        const all = [];
        for (const w of vocabData) {
            if (!w.latin || !w.english) continue;
            const ch = Math.min(Math.max(w.chapter || 1, 1), 10);
            pools[ch].push(w);
            all.push(w);
        }
        return { pools, all };
    }

    function posOf(w) {
        const info = (w.info || '').toLowerCase();
        for (const p of ['verb', 'noun', 'adjective', 'adverb', 'preposition', 'conjunction', 'pronoun', 'numeral']) {
            if (info.includes(p)) return p;
        }
        return 'other';
    }

    // Weighted pick: prefer unseen words and words with a low BKT
    // p(know), so the game chases the same mastery as the tester.
    function pickWords(pool, states, count) {
        const scored = pool.map(w => {
            const s = states && states.get ? states.get(w.latin) : null;
            const trials = s ? (s.trials | 0) : 0;
            const pKnow = s ? (s.pKnow != null ? s.pKnow : s.p_know) : 0.3;
            const weight = (trials === 0 ? 2.5 : 0) + (1 - pKnow) * 3 + Math.random() * 1.5;
            return { w, weight };
        });
        scored.sort((a, b) => b.weight - a.weight);
        return scored.slice(0, count).map(x => x.w);
    }

    // One multiple-choice question; distractors share part of speech
    // and chapter where possible, and never share a display string.
    function makeQuestion(word, pool, all) {
        const toEnglish = Math.random() < 0.5;
        const samePos = posOf(word);
        const usable = c => c !== word && c.english !== word.english && c.latin !== word.latin;
        let cands = pool.filter(c => usable(c) && posOf(c) === samePos);
        if (cands.length < 3) cands = cands.concat(pool.filter(c => usable(c) && posOf(c) !== samePos));
        if (cands.length < 3) cands = cands.concat(all.filter(c => usable(c) && !cands.includes(c)));
        for (let i = cands.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cands[i], cands[j]] = [cands[j], cands[i]];
        }
        const field = toEnglish ? 'english' : 'latin';
        const seen = new Set([word[field]]);
        const distractors = [];
        for (const c of cands) {
            if (distractors.length >= 3) break;
            if (seen.has(c[field])) continue;
            seen.add(c[field]);
            distractors.push(c[field]);
        }
        const options = distractors.concat([word[field]]);
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        return {
            word,
            prompt: toEnglish ? word.latin : word.english,
            ask: toEnglish ? 'What does this Latin word mean?' : 'Which Latin word means…',
            options,
            answer: word[field],
            toEnglish,
        };
    }

    return { buildPools, posOf, pickWords, makeQuestion };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = VocabCore;
if (typeof window !== 'undefined') window.VocabCore = VocabCore;
