// ============================================================
// LATIN QUEST — an explorable Roman town for GCSE vocabulary
// ============================================================
// Walk around Parva Roma, talk to ten townsfolk (one per OCR
// chapter), answer their vocabulary challenges and earn laurels.
// Graphics: vendored CC0 sprites from Kenney.nl (see assets/LICENSE.txt).
//
// The GameCore section below has no DOM dependencies so it can
// be sanity-checked in Node (see scripts/test-latin-quest.js).

const GameCore = (function () {
    'use strict';

    // ---------- Tiles ----------
    const TILE = 32;
    const T = {
        GRASS: 0, ROAD: 1, PATH: 2, WATER: 3, BRIDGE: 4, TREE: 5,
        FLOWER: 6, CROP: 7, WALL: 8, ROOF: 9, DOOR: 10, COLUMN: 11,
        MARBLE: 12, FOUNTAIN: 13, STATUE: 14, HEDGE: 15, SAND: 16, CRATE: 17,
    };
    const SOLID = new Set([
        T.WATER, T.TREE, T.WALL, T.ROOF, T.DOOR, T.COLUMN,
        T.FOUNTAIN, T.STATUE, T.HEDGE, T.CRATE,
    ]);
    const MAP_W = 52, MAP_H = 40;

    // Deterministic pseudo-random for decoration placement / texture
    function hash(x, y, s) {
        let h = (x * 374761393 + y * 668265263 + s * 1274126177) | 0;
        h = Math.imul(h ^ (h >>> 13), 1274126177);
        return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
    }

    // ---------- World map ----------
    function buildMap() {
        const m = [];
        for (let y = 0; y < MAP_H; y++) m.push(new Array(MAP_W).fill(T.GRASS));
        const set = (x, y, t) => { if (x >= 0 && x < MAP_W && y >= 0 && y < MAP_H) m[y][x] = t; };
        const rect = (x0, y0, x1, y1, t) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) set(x, y, t); };

        // Main east–west road and the north–south road through the forum
        rect(1, 19, 50, 20, T.ROAD);
        rect(25, 10, 26, 33, T.ROAD);

        // Forum plaza with fountain and statues
        rect(19, 12, 33, 18, T.ROAD);
        rect(25, 14, 26, 15, T.FOUNTAIN);
        set(20, 13, T.STATUE); set(32, 13, T.STATUE);

        // Temple of Minerva (marble platform, colonnade, cult statue)
        rect(20, 2, 32, 9, T.MARBLE);
        rect(24, 10, 27, 11, T.MARBLE); // steps joining the road
        for (const cx of [20, 22, 24, 28, 30, 32]) { set(cx, 3, T.COLUMN); set(cx, 8, T.COLUMN); }
        set(20, 5, T.COLUMN); set(32, 5, T.COLUMN);
        set(26, 3, T.STATUE);

        // Buildings: roof rows on top, wall row with a door at the bottom
        const building = (x0, y0, x1, y1, doorX) => {
            rect(x0, y0, x1, y1 - 1, T.ROOF);
            rect(x0, y1, x1, y1, T.WALL);
            set(doorX, y1, T.DOOR);
        };
        building(13, 12, 18, 15, 15);  // taberna (bakery), west of the forum
        building(34, 12, 39, 15, 36);  // ludus (school), east of the forum
        building(4, 7, 11, 11, 7);     // villa, north-west
        building(3, 27, 7, 30, 5);     // farmhouse, south-west

        // Villa garden: hedge border with a gap, flowers inside
        for (let x = 3; x <= 12; x++) { set(x, 12, T.HEDGE); set(x, 16, T.HEDGE); }
        for (let y = 13; y <= 15; y++) { set(3, y, T.HEDGE); set(12, y, T.HEDGE); }
        set(7, 16, T.GRASS); // garden gate
        set(7, 12, T.GRASS); // path from the villa door
        for (let y = 13; y <= 15; y++) for (let x = 4; x <= 11; x++) {
            if (hash(x, y, 21) < 0.45) set(x, y, T.FLOWER);
        }
        rect(7, 17, 7, 18, T.PATH); // garden gate down to the road

        // Path from the taberna door to the plaza edge
        rect(15, 16, 15, 18, T.PATH);
        rect(36, 16, 36, 18, T.PATH); // and from the ludus door

        // Farm: rows of crops south of the farmhouse
        for (const cy of [28, 30, 32, 34]) rect(9, cy, 22, cy, T.CROP);
        rect(9, 27, 22, 27, T.PATH);
        rect(23, 27, 24, 27, T.PATH); // joins the north–south road

        // Training ring: a sand circle, south-east
        for (let y = 23; y <= 30; y++) for (let x = 32; x <= 40; x++) {
            const dx = x - 36, dy = (y - 26.5) * 1.15;
            if (dx * dx + dy * dy <= 16) set(x, y, T.SAND);
        }
        set(32, 24, T.CRATE); set(40, 29, T.CRATE);
        rect(31, 21, 31, 23, T.PATH); rect(28, 21, 31, 21, T.PATH);

        // River with sandy banks, crossed by a wooden bridge
        for (let y = 0; y < MAP_H; y++) {
            set(42, y, T.SAND); rect(43, y, 45, y, T.WATER); set(46, y, T.SAND);
        }
        rect(42, 19, 46, 20, T.BRIDGE);
        // Harbour pier and crates on the east bank
        rect(44, 23, 46, 23, T.BRIDGE);
        set(48, 18, T.CRATE); set(49, 19, T.CRATE); set(49, 24, T.CRATE);

        // Western grove: scattered trees and flowers
        for (let y = 22; y <= 27; y++) for (let x = 2; x <= 12; x++) {
            if (m[y][x] !== T.GRASS) continue;
            const r = hash(x, y, 5);
            if (r < 0.3) set(x, y, T.TREE);
            else if (r < 0.45) set(x, y, T.FLOWER);
        }

        // Border of trees around the whole map
        for (let x = 0; x < MAP_W; x++) { set(x, 0, T.TREE); set(x, MAP_H - 1, T.TREE); }
        for (let y = 0; y < MAP_H; y++) { set(0, y, T.TREE); set(MAP_W - 1, y, T.TREE); }
        for (let x = 1; x < MAP_W - 1; x++) {
            if (m[1][x] === T.GRASS && hash(x, 1, 9) < 0.5) set(x, 1, T.TREE);
            if (m[MAP_H - 2][x] === T.GRASS && hash(x, MAP_H - 2, 9) < 0.5) set(x, MAP_H - 2, T.TREE);
        }
        for (let y = 1; y < MAP_H - 1; y++) {
            if (m[y][1] === T.GRASS && hash(1, y, 9) < 0.5) set(1, y, T.TREE);
        }

        // Light scatter of trees and flowers across open grass
        for (let y = 2; y < MAP_H - 2; y++) for (let x = 2; x < MAP_W - 2; x++) {
            if (m[y][x] !== T.GRASS) continue;
            const r = hash(x, y, 13);
            if (r < 0.05) set(x, y, T.TREE);
            else if (r < 0.10) set(x, y, T.FLOWER);
        }

        // Keep NPC spots and the spawn clear of scattered decoration
        const clearSpots = [[26, 22]].concat(NPC_DEFS.map(n => [n.x, n.y]));
        for (const [cx, cy] of clearSpots) {
            for (let y = cy - 1; y <= cy + 1; y++) for (let x = cx - 1; x <= cx + 1; x++) {
                if (m[y] && (m[y][x] === T.TREE)) m[y][x] = T.GRASS;
            }
            if (m[cy][cx] === T.FLOWER) m[cy][cx] = T.GRASS;
            else if (SOLID.has(m[cy][cx])) m[cy][cx] = T.GRASS;
        }
        return m;
    }

    // ---------- The townsfolk ----------
    // Colours: tunic, trim; hair; skin. Accessories give each a silhouette.
    const NPC_DEFS = [
        { id: 'marcus', spr: 3, name: 'Marcus', title: 'the Farmer', chapter: 1, x: 18, y: 27,
          tunic: '#a4763d', trim: '#7c5527', hair: '#4a3220', skin: '#d9a06b', acc: 'strawhat',
          greet: 'salve, viator! These fields don’t plough themselves. Show me you know your <em>Chapter 1</em> words and a laurel is yours.',
          done: 'optime! You work as hard as my oxen. Come back any time to sharpen up.' },
        { id: 'livia', spr: 1, name: 'Livia', title: 'the Baker', chapter: 2, x: 16, y: 17,
          tunic: '#b8543e', trim: '#8c3a2c', hair: '#2e2018', skin: '#e8b48a', acc: 'long',
          greet: 'salve! Fresh bread, fresh words. Get my <em>Chapter 2</em> vocabulary right and I’ll crown you with laurel — not flour.',
          done: 'bene factum! You’ve earned your bread — and your laurel.' },
        { id: 'quintus', spr: 5, name: 'Quintus', title: 'the Merchant', chapter: 3, x: 48, y: 22,
          tunic: '#3e7d8c', trim: '#2c5a66', hair: '#1f1a14', skin: '#c98e5a', acc: 'none',
          greet: 'Goods from every shore of <em>mare nostrum</em>! But words are the true currency. Trade me your <em>Chapter 3</em> vocabulary.',
          done: 'A fine bargain! You’d haggle well in any forum.' },
        { id: 'aurelia', spr: 7, name: 'Aurelia', title: 'the Priestess', chapter: 4, x: 23, y: 10,
          tunic: '#e8e0d0', trim: '#c9b88a', hair: '#5a4632', skin: '#e8b48a', acc: 'veil',
          greet: 'pax tecum. Minerva favours the studious. Recite your <em>Chapter 4</em> words upon her steps.',
          done: 'dis gratias! The goddess of wisdom smiles on you.' },
        { id: 'felix', spr: 11, name: 'Felix', title: 'the Gladiator', chapter: 5, x: 36, y: 27,
          tunic: '#8c4a3e', trim: '#5e2f27', hair: '#171310', skin: '#b87e4e', acc: 'helmet',
          greet: 'Ha! Strong arms, stronger mind. Spar with me — <em>Chapter 5</em> words, eight hits to win.',
          done: 'victor es! You fight with words like a true champion of the arena.' },
        { id: 'drusilla', spr: 4, name: 'Drusilla', title: 'the Healer', chapter: 6, x: 7, y: 24,
          tunic: '#5e8c52', trim: '#436339', hair: '#8c8478', skin: '#dca87a', acc: 'long',
          greet: 'Herbs for the body, words for the mind. My <em>Chapter 6</em> remedy: eight correct answers, taken among the trees.',
          done: 'salva es! A healthy memory is the best medicine of all.' },
        { id: 'septimus', spr: 9, name: 'Septimus', title: 'the Soldier', chapter: 7, x: 40, y: 18,
          tunic: '#9c2f2f', trim: '#6e1f1f', hair: '#2e2018', skin: '#d9a06b', acc: 'helmet',
          greet: 'Halt! None cross my bridge unquestioned. Drill your <em>Chapter 7</em> words, recruit — then pass freely.',
          done: 'At ease, legionary. The bridge — and the laurel — are yours.' },
        { id: 'camilla', spr: 6, name: 'Camilla', title: 'the Poet', chapter: 8, x: 8, y: 14,
          tunic: '#7d5e9c', trim: '#5a4273', hair: '#3e2c1c', skin: '#e8b48a', acc: 'long',
          greet: 'arma virumque cano… but today I sing of vocabulary! Compose with me from <em>Chapter 8</em>, here among the flowers.',
          done: 'carmen perfectum! The Muses themselves applaud you.' },
        { id: 'titus', spr: 2, name: 'Titus', title: 'the Senator', chapter: 9, x: 30, y: 16,
          tunic: '#ece8df', trim: '#9c2f2f', hair: '#b8b2a6', skin: '#dca87a', acc: 'wreath',
          greet: 'civis! The Senate values eloquence above gold. Debate me on the words of <em>Chapter 9</em>.',
          done: 'senatus populusque Romanus salutes you! A born orator.' },
        { id: 'gaia', spr: 10, name: 'Magistra Gaia', title: 'the Teacher', chapter: 10, x: 36, y: 17,
          tunic: '#3e5a8c', trim: '#2c4066', hair: '#4a3220', skin: '#e8b48a', acc: 'long',
          greet: 'discipule, the final chapter awaits. <em>Chapter 10</em> holds the trickiest words — prove you have mastered them.',
          done: 'summa cum laude! There is nothing more I can teach you.' },
        { id: 'sibyl', spr: 8, name: 'the Sibyl', title: 'Oracle of Parva Roma', chapter: 0, x: 26, y: 5, final: true,
          tunic: '#2c3e50', trim: '#f5c842', hair: '#e8e0d0', skin: '#dca87a', acc: 'veil',
          greet: 'So… the bearer of ten laurels stands before me. One trial remains: fifteen questions drawn from the whole book of words. Answer twelve truly, and the <em>corona laurea</em> is yours.',
          locked: 'The mists are thick… return when you carry all <b>ten laurels</b>, and I shall set you the final trial.',
          done: 'It is written: a true Latin scholar walks among us. Wear your crown well.' },
    ];

    const PLAYER_SPAWN = { x: 26, y: 22 };

    // ---------- Vocabulary ----------
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

    function wordKey(w) { return w.latin + '|' + w.english; }

    function posOf(w) {
        const info = (w.info || '').toLowerCase();
        for (const p of ['verb', 'noun', 'adjective', 'adverb', 'preposition', 'conjunction', 'pronoun', 'numeral']) {
            if (info.includes(p)) return p;
        }
        return 'other';
    }

    // Weighted pick: prefer words the player hasn't got right yet
    function pickWords(pool, stats, count) {
        const scored = pool.map(w => {
            const s = stats[wordKey(w)] || { s: 0, c: 0 };
            const weight = (s.s === 0 ? 3 : 1) + 2 / (1 + s.c * 2) + Math.random() * 1.5;
            return { w, weight };
        });
        scored.sort((a, b) => b.weight - a.weight);
        return scored.slice(0, count).map(x => x.w);
    }

    // Build one multiple-choice question for a word
    function makeQuestion(word, pool, all) {
        const toEnglish = Math.random() < 0.5;
        const samePos = posOf(word);
        const usable = c => c !== word && c.english !== word.english && c.latin !== word.latin;
        let cands = pool.filter(c => usable(c) && posOf(c) === samePos);
        if (cands.length < 3) cands = cands.concat(pool.filter(c => usable(c) && posOf(c) !== samePos));
        if (cands.length < 3) cands = cands.concat(all.filter(c => usable(c) && !cands.includes(c)));
        // shuffle candidates, take 3 distinct display texts
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

    return { TILE, T, SOLID, MAP_W, MAP_H, hash, buildMap, NPC_DEFS, PLAYER_SPAWN, buildPools, wordKey, makeQuestion, pickWords };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = GameCore;

// ============================================================
// Everything below needs a browser.
// ============================================================
if (typeof document !== 'undefined') (function () {
    'use strict';
    const { TILE, T, SOLID, MAP_W, MAP_H, hash, buildMap, NPC_DEFS, PLAYER_SPAWN, buildPools, wordKey, makeQuestion, pickWords } = GameCore;

    // ---------- Save data ----------
    const SAVE_KEY = 'latinQuestSave';
    function loadSave() {
        try {
            const s = JSON.parse(localStorage.getItem(SAVE_KEY));
            if (s && typeof s === 'object') return Object.assign({ xp: 0, quests: {}, words: {}, final: false, muted: false, seenIntro: false }, s);
        } catch (e) { /* corrupt save: start fresh */ }
        return { xp: 0, quests: {}, words: {}, final: false, muted: false, seenIntro: false };
    }
    const save = loadSave();
    function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* storage full or blocked */ } }

    // ---------- Vocabulary ----------
    const vocabOK = typeof vocabularyData !== 'undefined' && Array.isArray(vocabularyData) && vocabularyData.length > 0;
    const { pools, all } = vocabOK ? buildPools(vocabularyData) : { pools: {}, all: [] };

    // ---------- Supabase progress tracking ----------
    // Logged-in students record to word_mastery / task_attempts and earn
    // real XP via taskTracker + xpSystem, exactly like the practice pages.
    // Logged-out players still get the full game with localStorage only.
    const tracker = (typeof taskTracker !== 'undefined') ? taskTracker : null;
    let cloudUser = false;
    async function initTracking() {
        const pill = document.getElementById('hud-sync');
        if (!tracker || typeof supabase === 'undefined') return;
        try {
            const { data: { user } } = await supabase.auth.getUser();
            cloudUser = !!user;
        } catch (e) { cloudUser = false; }
        if (cloudUser) {
            tracker.setLanguage('latin');
            try {
                if (typeof xpSystem !== 'undefined' && !xpSystem.userId) await xpSystem.init();
            } catch (e) { /* XP display falls back to local */ }
            pill.textContent = '☁️ progress synced';
            pill.removeAttribute('href');
            pill.style.cursor = 'default';
        } else {
            pill.innerHTML = '☁️ <span class="gold">log in</span> to track';
        }
        pill.style.display = '';
        updateHud();
    }
    function trackQuestStart(npc) {
        if (!cloudUser || !tracker) return;
        tracker.setContentPath('/games/latin-quest/' + (npc.final ? 'final-trial' : 'chapter-' + npc.chapter));
        Promise.resolve(tracker.start()).catch(() => {});
    }
    function trackAnswer(w, right) {
        if (!cloudUser || !tracker) return;
        Promise.resolve(tracker.recordWordAnswer(
            { latin: w.latin, english: w.english, chapter: w.chapter, info: w.info }, right
        )).then(updateHud).catch(() => {});
    }
    function trackQuestEnd(correct, attempts) {
        if (!cloudUser || !tracker || !tracker.isTracking || !attempts) return;
        const score = Math.round((correct / attempts) * 100);
        Promise.resolve(tracker.complete(score, attempts, correct)).then(updateHud).catch(() => {});
    }

    // ---------- DOM ----------
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const hudLaurels = document.getElementById('hud-laurels');
    const hudXp = document.getElementById('hud-xp');
    const hudWords = document.getElementById('hud-words');
    const promptEl = document.getElementById('prompt');
    const promptText = document.getElementById('prompt-text');
    const dialogEl = document.getElementById('dialog');
    const dlgName = document.getElementById('dlg-name');
    const dlgSub = document.getElementById('dlg-sub');
    const dlgBody = document.getElementById('dlg-body');
    const actionBtn = document.getElementById('action-btn');

    if (!vocabOK) {
        const p = document.querySelector('#intro .panel p');
        if (p) p.innerHTML = '<b>Sorry — the vocabulary list failed to load.</b> Please refresh the page and try again.';
    }

    // ---------- World ----------
    const map = buildMap();
    const solidAt = (tx, ty) => tx < 0 || ty < 0 || tx >= MAP_W || ty >= MAP_H || SOLID.has(map[ty][tx]);

    const player = {
        x: (PLAYER_SPAWN.x + 0.5) * TILE,
        y: (PLAYER_SPAWN.y + 0.85) * TILE,
        dir: 'down', moving: false, frame: 0, frameTime: 0,
        speed: 130, spr: 0,
        tunic: '#c9a23e', trim: '#9c7a26', hair: '#3e2c1c', skin: '#e0a878', acc: 'none',
    };

    const npcs = NPC_DEFS.map(d => Object.assign({}, d, {
        px: (d.x + 0.5) * TILE, py: (d.y + 0.85) * TILE,
        dir: 'down', bob: Math.random() * Math.PI * 2,
    }));

    // ---------- Audio ----------
    let audioCtx = null;
    function beep(freq, dur, type, delay, vol) {
        if (save.muted) return;
        try {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const t0 = audioCtx.currentTime + (delay || 0);
            const osc = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            osc.type = type || 'sine';
            osc.frequency.value = freq;
            g.gain.setValueAtTime(vol || 0.12, t0);
            g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
            osc.connect(g); g.connect(audioCtx.destination);
            osc.start(t0); osc.stop(t0 + dur);
        } catch (e) { /* audio unavailable */ }
    }
    const sfx = {
        talk: () => beep(440, 0.08, 'triangle'),
        correct: () => { beep(660, 0.12, 'sine'); beep(880, 0.18, 'sine', 0.1); },
        wrong: () => beep(170, 0.25, 'sawtooth', 0, 0.08),
        quest: () => { [523, 659, 784, 1047].forEach((f, i) => beep(f, 0.16, 'sine', i * 0.11)); },
        victory: () => { [523, 659, 784, 880, 1047, 1319].forEach((f, i) => beep(f, 0.2, 'sine', i * 0.13)); },
    };

    // ---------- Sprite sheets (Kenney CC0, vendored in ./assets) ----------
    // 16px tiles drawn at 2x onto 32px world tiles. Water, bridge,
    // fountain, statue and crate are drawn in code so they animate and
    // fit the classical theme; if the sheets fail to load everything
    // falls back to flat colours / the procedural person.
    const IMG = { town: null, chars: null, ready: false };
    function loadImage(srcPath) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('failed: ' + srcPath));
            img.src = srcPath;
        });
    }
    const bt = (c, sc, sr, dx, dy) => c.drawImage(IMG.town, sc * 16, sr * 16, 16, 16, dx, dy, 32, 32);

    const FLAT = {
        [T.GRASS]: '#74b14d', [T.ROAD]: '#c9a36b', [T.PATH]: '#c9a36b',
        [T.WATER]: '#3f7fd1', [T.BRIDGE]: '#9a6b3f', [T.TREE]: '#3e7d3a',
        [T.FLOWER]: '#74b14d', [T.CROP]: '#a87c4f', [T.WALL]: '#e8dcc0',
        [T.ROOF]: '#c1623c', [T.DOOR]: '#6e4a26', [T.COLUMN]: '#ece8df',
        [T.MARBLE]: '#ece8df', [T.FOUNTAIN]: '#d8d2c4', [T.STATUE]: '#c9c2b0',
        [T.HEDGE]: '#3e6b34', [T.SAND]: '#e0cf9a', [T.CRATE]: '#9a6b3f',
    };

    const tileAt = (x, y) => (x < 0 || y < 0 || x >= MAP_W || y >= MAP_H) ? T.GRASS : map[y][x];
    // Tiles that share a ground material, so no grass lip is drawn between them
    const DIRT_FAM = new Set([T.ROAD, T.PATH, T.CROP, T.SAND, T.BRIDGE, T.WATER, T.FOUNTAIN]);
    const MARBLE_FAM = new Set([T.MARBLE, T.COLUMN, T.STATUE, T.FOUNTAIN]);

    // Pick a tile from a 3x3 terrain patch (cols 0-2 of the town sheet)
    // based on which neighbours are outside the material family.
    function patchTile(x, y, fam, r0) {
        const n = !fam.has(tileAt(x, y - 1)), s = !fam.has(tileAt(x, y + 1));
        const w = !fam.has(tileAt(x - 1, y)), e = !fam.has(tileAt(x + 1, y));
        let col = 1, row = 1;
        if (w && !e) col = 0; else if (e && !w) col = 2;
        if (n && !s) row = 0; else if (s && !n) row = 2;
        return [col, r0 + row];
    }

    function drawWater(c, x, y, px, py, frame) {
        c.fillStyle = '#3f7fd1';
        c.fillRect(px, py, TILE, TILE);
        c.fillStyle = 'rgba(255,255,255,0.22)';
        const ph = ((x + y * 2 + frame) % 4);
        if (ph === 0) { c.fillRect(px + 4, py + 8, 10, 2); c.fillRect(px + 18, py + 22, 9, 2); }
        else if (ph === 1) { c.fillRect(px + 14, py + 5, 10, 2); c.fillRect(px + 3, py + 20, 9, 2); }
        else if (ph === 2) { c.fillRect(px + 8, py + 14, 11, 2); c.fillRect(px + 20, py + 27, 8, 2); }
        // darker lip along the top edge of the channel
        if (tileAt(x, y - 1) !== T.WATER && tileAt(x, y - 1) !== T.BRIDGE) {
            c.fillStyle = 'rgba(20,50,110,0.4)';
            c.fillRect(px, py, TILE, 3);
        }
    }
    function drawBridge(c, px, py) {
        c.fillStyle = '#9a6b3f';
        c.fillRect(px, py, TILE, TILE);
        c.fillStyle = '#7c5430';
        for (let i = 0; i < 4; i++) c.fillRect(px, py + i * 8, TILE, 1);
        c.fillStyle = '#b07f4e';
        c.fillRect(px, py + 3, TILE, 1); c.fillRect(px, py + 19, TILE, 1);
    }
    function drawFountain(c, px, py, x, y, frame) {
        c.fillStyle = '#d8d2c4';
        c.fillRect(px, py, TILE, TILE);
        c.fillStyle = '#b8b2a4';
        c.fillRect(px, py, TILE, 3); c.fillRect(px, py + 29, TILE, 3);
        c.fillRect(px, py, 3, TILE); c.fillRect(px + 29, py, 3, TILE);
        c.fillStyle = '#4f93dd';
        c.fillRect(px + 4, py + 4, 24, 24);
        c.fillStyle = 'rgba(255,255,255,0.35)';
        if ((x + y + frame) % 2 === 0) { c.fillRect(px + 8, py + 9, 8, 2); c.fillRect(px + 18, py + 20, 7, 2); }
        else { c.fillRect(px + 16, py + 7, 8, 2); c.fillRect(px + 6, py + 21, 7, 2); }
    }
    function drawStatue(c, px, py) {
        c.fillStyle = '#c9c2b0';
        c.fillRect(px + 6, py + 22, 20, 8);
        c.fillStyle = '#d8d2c4';
        c.fillRect(px + 8, py + 24, 16, 4);
        c.fillStyle = '#b0a890';
        c.fillRect(px + 12, py + 4, 8, 7);
        c.fillRect(px + 10, py + 11, 12, 12);
        c.fillRect(px + 7, py + 12, 3, 8);
        c.fillRect(px + 22, py + 12, 3, 8);
    }
    function drawColumn(c, px, py) {
        c.fillStyle = '#d8d2c4';
        c.fillRect(px + 6, py + 26, 20, 5);
        c.fillStyle = '#f5f2ea';
        c.fillRect(px + 9, py + 2, 14, 25);
        c.fillStyle = '#c9c2b0';
        c.fillRect(px + 9, py + 2, 3, 25); c.fillRect(px + 20, py + 2, 3, 25);
        c.fillStyle = '#e8e3d6';
        c.fillRect(px + 6, py, 20, 4);
    }
    function drawCrate(c, px, py) {
        c.fillStyle = '#9a6b3f';
        c.fillRect(px + 3, py + 5, 26, 24);
        c.strokeStyle = '#6e4a26'; c.lineWidth = 2;
        c.strokeRect(px + 4, py + 6, 24, 22);
        c.beginPath(); c.moveTo(px + 5, py + 7); c.lineTo(px + 27, py + 27); c.stroke();
    }

    function drawTile(c, t, x, y, frame) {
        const px = x * TILE, py = y * TILE;
        if (!IMG.ready) {
            c.fillStyle = FLAT[t] || '#74b14d';
            c.fillRect(px, py, TILE, TILE);
            if (t === T.WATER) drawWater(c, x, y, px, py, frame);
            return;
        }
        switch (t) {
            case T.GRASS: case T.TREE: case T.CRATE:
                bt(c, 0, 0, px, py); break;
            case T.FLOWER:
                bt(c, hash(x, y, 2) < 0.5 ? 1 : 2, 0, px, py); break;
            case T.HEDGE:
                bt(c, 0, 0, px, py); bt(c, 5, 0, px, py); break;
            case T.ROAD: case T.PATH: case T.SAND: {
                const [sc, sr] = patchTile(x, y, DIRT_FAM, 1);
                bt(c, sc, sr, px, py); break;
            }
            case T.CROP: {
                const [sc, sr] = patchTile(x, y, DIRT_FAM, 1);
                bt(c, sc, sr, px, py); bt(c, 5, 1, px, py); break;
            }
            case T.WALL:
                bt(c, hash(x, y, 3) < 0.4 ? 0 : 1, 6, px, py); break;
            case T.DOOR:
                bt(c, 1, 7, px, py); break;
            case T.ROOF: {
                const top = tileAt(x, y - 1) !== T.ROOF;
                const lf = tileAt(x - 1, y) !== T.ROOF, rt = tileAt(x + 1, y) !== T.ROOF;
                bt(c, lf ? 4 : rt ? 6 : 5, top ? 4 : 5, px, py); break;
            }
            case T.MARBLE: {
                const [sc, sr] = patchTile(x, y, MARBLE_FAM, 8);
                bt(c, sc, sr, px, py); break;
            }
            case T.COLUMN:
                bt(c, 1, 9, px, py); drawColumn(c, px, py); break;
            case T.STATUE:
                bt(c, 1, 9, px, py); drawStatue(c, px, py); break;
            case T.FOUNTAIN:
                drawFountain(c, px, py, x, y, frame); break;
            case T.WATER:
                drawWater(c, x, y, px, py, frame); break;
            case T.BRIDGE:
                drawBridge(c, px, py); break;
        }
        if (t === T.CRATE) drawCrate(c, px, py);
    }

    // Trees are two tiles tall: the trunk tile sits on the map, the top
    // is drawn on the overlay so it occludes anyone walking behind it.
    function treeType(x, y) { return hash(x, y, 170) < 0.8 ? 4 : 3; } // green / autumn poplar

    // Pre-render the whole map twice (two water-animation frames),
    // plus the overlay of tree tops and column capitals.
    let mapFrames = [], overlay = null;
    function buildMapCanvases() {
        mapFrames = [];
        for (let f = 0; f < 2; f++) {
            const cv = document.createElement('canvas');
            cv.width = MAP_W * TILE; cv.height = MAP_H * TILE;
            const cc = cv.getContext('2d');
            cc.imageSmoothingEnabled = false;
            for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) drawTile(cc, map[y][x], x, y, f);
            if (IMG.ready) {
                for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) {
                    if (map[y][x] === T.TREE) bt(cc, treeType(x, y), 1, x * TILE, y * TILE);
                }
            }
            mapFrames.push(cv);
        }
        overlay = document.createElement('canvas');
        overlay.width = MAP_W * TILE; overlay.height = MAP_H * TILE;
        const oc = overlay.getContext('2d');
        oc.imageSmoothingEnabled = false;
        if (IMG.ready) {
            for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) {
                if (map[y][x] === T.TREE) bt(oc, treeType(x, y), 0, x * TILE, (y - 1) * TILE);
            }
        }
    }
    Promise.all([
        loadImage('assets/tiles-town.png'),
        loadImage('assets/characters.png'),
    ]).then(([town, chars]) => {
        IMG.town = town; IMG.chars = chars; IMG.ready = true;
    }).catch(() => { IMG.ready = false; }).then(buildMapCanvases);

    // ---------- People ----------
    // Sprite blocks in assets/characters.png: 4 columns (facing left,
    // down, up, right) x 3 rows (idle, walk A, walk B) of 16px frames.
    const DIR_COL = { left: 0, down: 1, up: 2, right: 3 };
    function drawPerson(c, x, y, dir, row, o) {
        c.fillStyle = 'rgba(0,0,0,0.2)';
        c.beginPath(); c.ellipse(Math.round(x), Math.round(y), 8, 3, 0, 0, Math.PI * 2); c.fill();
        if (IMG.ready) {
            const sx = DIR_COL[dir] * 16, sy = o.spr * 48 + row * 16;
            c.drawImage(IMG.chars, sx, sy, 16, 16, Math.round(x) - 16, Math.round(y) - 30, 32, 32);
        } else {
            drawPersonProc(c, x, y, dir, row === 2, o);
        }
    }

    // Fallback person, used only if the character sheet fails to load.
    // Anchored at bottom-centre (feet), roughly 18px wide, 26px tall.
    function drawPersonProc(c, x, y, dir, step, o) {
        c.save();
        c.translate(Math.round(x), Math.round(y));
        if (dir === 'left') c.scale(-1, 1);
        const side = dir === 'left' || dir === 'right';
        const legA = step ? 2 : 0, legB = step ? 0 : 2;
        // legs
        c.fillStyle = o.skin;
        if (side) { c.fillRect(-3, -6 + legA / 2, 3, 6 - legA / 2); c.fillRect(1, -6 + legB / 2, 3, 6 - legB / 2); }
        else { c.fillRect(-4, -6 + legA / 2, 3, 6 - legA / 2); c.fillRect(1, -6 + legB / 2, 3, 6 - legB / 2); }
        c.fillStyle = '#7c5430'; // sandals
        if (side) { c.fillRect(-3, -1 - legA / 2, 3, 1); c.fillRect(1, -1 - legB / 2, 3, 1); }
        else { c.fillRect(-4, -1, 3, 1); c.fillRect(1, -1, 3, 1); }
        // tunic
        c.fillStyle = o.tunic;
        c.fillRect(-6, -16, 12, 10);
        c.fillStyle = o.trim;
        c.fillRect(-6, -7, 12, 1);
        c.fillRect(-6, -16, 12, 1);
        // arms
        c.fillStyle = o.skin;
        if (side) c.fillRect(-1, -14, 2, 6);
        else { c.fillRect(-8, -14, 2, 6); c.fillRect(6, -14, 2, 6); }
        // head
        c.fillStyle = o.skin;
        c.fillRect(-4, -24, 8, 8);
        // hair / accessories
        c.fillStyle = o.hair;
        if (o.acc === 'long') {
            c.fillRect(-5, -25, 10, 4);
            c.fillRect(-5, -23, 2, 7); c.fillRect(3, -23, 2, 7);
        } else {
            c.fillRect(-4, -25, 8, 3);
        }
        if (o.acc === 'veil') {
            c.fillStyle = 'rgba(240,235,220,0.95)';
            c.fillRect(-5, -26, 10, 4);
            c.fillRect(-5, -24, 2, 9); c.fillRect(3, -24, 2, 9);
        }
        if (o.acc === 'helmet') {
            c.fillStyle = '#8f97a3';
            c.fillRect(-5, -26, 10, 4);
            c.fillStyle = '#c0392b';
            c.fillRect(-1, -29, 2, 4);
        }
        if (o.acc === 'strawhat') {
            c.fillStyle = '#d6b25e';
            c.fillRect(-6, -25, 12, 2);
            c.fillRect(-3, -27, 6, 2);
        }
        if (o.acc === 'wreath') {
            c.fillStyle = '#5e9a4e';
            c.fillRect(-4, -25, 8, 1);
        }
        // face
        if (dir !== 'up') {
            c.fillStyle = '#2c2018';
            if (side) c.fillRect(2, -21, 1, 2);
            else { c.fillRect(-2, -21, 1, 2); c.fillRect(1, -21, 1, 2); }
        }
        c.restore();
    }

    // ---------- Camera / canvas ----------
    let viewW = 0, viewH = 0, dpr = 1, zoom = 2;
    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        viewW = window.innerWidth; viewH = window.innerHeight;
        canvas.width = Math.round(viewW * dpr);
        canvas.height = Math.round(viewH * dpr);
        zoom = (viewW < 600 || viewH < 500) ? 1.7 : 2;
    }
    window.addEventListener('resize', resize);
    resize();

    // ---------- Input ----------
    const keys = {};
    let dialogOpen = false;
    window.addEventListener('keydown', e => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
        keys[e.key.toLowerCase()] = true;
        if (e.key === 'Escape') closeDialog();
        if (!dialogOpen && (e.key === 'e' || e.key === 'E' || e.key === ' ' || e.key === 'Enter')) tryInteract();
    });
    window.addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });

    // touch joystick
    const joyVec = { x: 0, y: 0 };
    if ('ontouchstart' in window) {
        document.body.classList.add('touch');
        const joy = document.getElementById('joystick');
        const knob = document.getElementById('joystick-knob');
        let joyId = null;
        const setKnob = (dx, dy) => { knob.style.transform = `translate(calc(-50% + ${dx * 36}px), calc(-50% + ${dy * 36}px))`; };
        joy.addEventListener('touchstart', e => { joyId = e.changedTouches[0].identifier; e.preventDefault(); }, { passive: false });
        window.addEventListener('touchmove', e => {
            for (const t of e.changedTouches) {
                if (t.identifier !== joyId) continue;
                const r = joy.getBoundingClientRect();
                let dx = (t.clientX - (r.left + r.width / 2)) / (r.width / 2);
                let dy = (t.clientY - (r.top + r.height / 2)) / (r.height / 2);
                const len = Math.hypot(dx, dy);
                if (len > 1) { dx /= len; dy /= len; }
                joyVec.x = Math.abs(dx) > 0.25 ? dx : 0;
                joyVec.y = Math.abs(dy) > 0.25 ? dy : 0;
                setKnob(dx, dy);
            }
        }, { passive: true });
        window.addEventListener('touchend', e => {
            for (const t of e.changedTouches) {
                if (t.identifier === joyId) { joyId = null; joyVec.x = joyVec.y = 0; setKnob(0, 0); }
            }
        });
        actionBtn.addEventListener('touchstart', e => { e.preventDefault(); if (!dialogOpen) tryInteract(); }, { passive: false });
    }

    // ---------- HUD ----------
    function laurelCount() {
        return NPC_DEFS.filter(n => !n.final && save.quests[n.id] && save.quests[n.id].stars > 0).length;
    }
    function masteredCount() {
        let n = 0;
        for (const k in save.words) if (save.words[k].c >= 2) n++;
        return n;
    }
    function updateHud() {
        hudLaurels.textContent = laurelCount();
        const cloudXp = (typeof xpSystem !== 'undefined' && xpSystem.userId) ? xpSystem.userXp : null;
        hudXp.textContent = cloudXp !== null ? cloudXp : save.xp;
        hudWords.textContent = masteredCount() + '/' + all.length;
        document.getElementById('btn-sound').textContent = save.muted ? '🔇' : '🔊';
    }
    document.getElementById('btn-sound').addEventListener('click', () => { save.muted = !save.muted; persist(); updateHud(); });
    document.getElementById('btn-help').addEventListener('click', () => document.getElementById('help').classList.add('open'));
    document.getElementById('btn-help-close').addEventListener('click', () => document.getElementById('help').classList.remove('open'));
    document.getElementById('btn-start').addEventListener('click', () => {
        document.getElementById('intro').classList.remove('open');
        save.seenIntro = true; persist();
        sfx.talk();
    });
    document.getElementById('btn-victory-close').addEventListener('click', () => document.getElementById('victory').classList.remove('open'));
    if (save.seenIntro) document.getElementById('intro').classList.remove('open');
    updateHud();
    initTracking();

    // ---------- Interaction ----------
    function nearestNpc() {
        let best = null, bestD = 52;
        for (const n of npcs) {
            const d = Math.hypot(n.px - player.x, n.py - player.y);
            if (d < bestD) { bestD = d; best = n; }
        }
        return best;
    }
    function tryInteract() {
        const n = nearestNpc();
        if (n && vocabOK) openDialog(n);
    }

    // ---------- Dialog / quiz ----------
    let quiz = null;
    function openDialog(npc) {
        dialogOpen = true;
        quiz = null;
        dialogEl.classList.add('open');
        dlgName.textContent = npc.name;
        dlgSub.textContent = npc.final ? npc.title : npc.title + ' · Chapter ' + npc.chapter;
        sfx.talk();
        const done = save.quests[npc.id];
        if (npc.final && laurelCount() < 10) {
            dlgBody.innerHTML = `<div class="dlg-text">${npc.locked.replace('ten laurels', `ten laurels</b> (you have <b>${laurelCount()}</b>)`)}</div>
                <div class="dlg-actions"><button class="dlg-btn secondary" id="dlg-leave">Leave</button></div>`;
            document.getElementById('dlg-leave').addEventListener('click', closeDialog);
            return;
        }
        if (npc.final && save.final) {
            dlgBody.innerHTML = `<div class="dlg-text">${npc.done}</div>
                <div class="dlg-actions">
                    <button class="dlg-btn" id="dlg-begin">Take the trial again</button>
                    <button class="dlg-btn secondary" id="dlg-leave">Leave</button>
                </div>`;
        } else if (done && done.stars > 0 && !npc.final) {
            dlgBody.innerHTML = `<div class="dlg-text">${npc.done}</div>
                <div class="stars">${'★'.repeat(done.stars)}${'☆'.repeat(3 - done.stars)}</div>
                <div class="dlg-actions">
                    <button class="dlg-btn" id="dlg-begin">Practise again</button>
                    <button class="dlg-btn secondary" id="dlg-leave">Leave</button>
                </div>`;
        } else {
            dlgBody.innerHTML = `<div class="dlg-text">${npc.greet}</div>
                <div class="dlg-actions">
                    <button class="dlg-btn" id="dlg-begin">${npc.final ? 'Begin the final trial' : 'Accept the challenge'}</button>
                    <button class="dlg-btn secondary" id="dlg-leave">Not now</button>
                </div>`;
        }
        document.getElementById('dlg-begin').addEventListener('click', () => startQuiz(npc));
        document.getElementById('dlg-leave').addEventListener('click', closeDialog);
    }
    function closeDialog() {
        if (quiz && quiz.results.length && !quiz.tracked) trackQuestEnd(quiz.correct, quiz.results.length);
        dialogOpen = false;
        quiz = null;
        dialogEl.classList.remove('open');
    }
    document.getElementById('dlg-close').addEventListener('click', closeDialog);

    function startQuiz(npc) {
        const pool = npc.final ? all : pools[npc.chapter] || [];
        if (pool.length < 4) { closeDialog(); return; }
        const target = npc.final ? 12 : 8;
        const words = pickWords(pool, save.words, npc.final ? 15 : 8);
        quiz = {
            npc, pool, target,
            queue: words.slice(),
            results: [],        // true/false per answer given
            correct: 0,
            done: false,
        };
        trackQuestStart(npc);
        nextQuestion();
    }

    function nextQuestion() {
        const q = quiz;
        if (!q) return;
        const failedFinal = q.npc.final && q.results.length - q.correct > 15 - q.target;
        if (q.correct >= q.target || q.queue.length === 0 || failedFinal) { finishQuiz(); return; }
        q.current = makeQuestion(q.queue.shift(), q.pool, all);
        renderQuestion();
    }

    function renderQuestion() {
        const q = quiz, cur = q.current;
        const dots = [];
        for (let i = 0; i < q.target; i++) {
            dots.push(`<div class="qdot${i < q.correct ? ' hit' : ''}"></div>`);
        }
        dlgBody.innerHTML = `
            <div class="quiz-progress">${dots.join('')}</div>
            <div class="quiz-ask">${cur.ask}</div>
            <div class="quiz-word">${cur.prompt}</div>
            <div class="quiz-options">${cur.options.map((o, i) =>
                `<button class="quiz-opt" data-i="${i}">${o}</button>`).join('')}</div>
            <div class="quiz-info" id="quiz-info"></div>`;
        dlgBody.querySelectorAll('.quiz-opt').forEach(btn => {
            btn.addEventListener('click', () => answer(parseInt(btn.dataset.i, 10)));
        });
    }

    function answer(i) {
        const q = quiz; if (!q || q.answered) return;
        q.answered = true;
        const cur = q.current;
        const right = cur.options[i] === cur.answer;
        const w = cur.word;
        const key = wordKey(w);
        const st = save.words[key] || (save.words[key] = { s: 0, c: 0 });
        st.s++;
        q.results.push(right);
        const info = document.getElementById('quiz-info');
        const btns = dlgBody.querySelectorAll('.quiz-opt');
        btns.forEach((b, j) => {
            b.disabled = true;
            if (cur.options[j] === cur.answer) b.classList.add('correct');
            else if (j === i) b.classList.add('wrong');
            else b.classList.add('dim');
        });
        if (right) {
            st.c++;
            q.correct++;
            save.xp += 5;
            sfx.correct();
            info.innerHTML = `<b>${w.latin}</b> — ${w.english}` + (w.info ? `<br>${w.info}` : '');
        } else {
            sfx.wrong();
            info.innerHTML = `<b>${w.latin}</b> means <b>${w.english}</b>.` + (w.info ? `<br>${w.info}` : '');
            if (!q.npc.final) {
                // recycle the missed word a little later in the queue
                q.queue.splice(Math.min(2, q.queue.length), 0, w);
            }
        }
        persist();
        updateHud();
        trackAnswer(w, right);
        setTimeout(() => { if (quiz === q) { q.answered = false; nextQuestion(); } }, right ? 1100 : 2200);
    }

    function finishQuiz() {
        const q = quiz;
        const npc = q.npc;
        const attempts = q.results.length;
        const acc = attempts ? q.correct / attempts : 0;
        q.tracked = true;
        trackQuestEnd(q.correct, attempts);
        if (npc.final) {
            if (q.correct >= q.target) {
                const first = !save.final;
                save.final = true;
                save.xp += first ? 150 : 30;
                persist(); updateHud();
                sfx.victory();
                closeDialog();
                document.getElementById('victory-text').innerHTML =
                    `You answered <b>${q.correct}</b> of <b>${attempts}</b> in the Sibyl's trial and earned the laurel crown of Parva Roma. ` +
                    `Total XP: <b>${save.xp}</b> · Words mastered: <b>${masteredCount()}</b>. ` +
                    `The townsfolk will gladly keep testing you — every chapter awaits revision!`;
                document.getElementById('victory').classList.add('open');
            } else {
                dlgBody.innerHTML = `<div class="dlg-text">The mists close in… you answered <b>${q.correct}</b> of <b>${attempts}</b>, but the crown demands <b>${q.target}</b>. Study with the townsfolk and return!</div>
                    <div class="dlg-actions">
                        <button class="dlg-btn" id="dlg-retry">Try again</button>
                        <button class="dlg-btn secondary" id="dlg-leave">Leave</button>
                    </div>`;
                document.getElementById('dlg-retry').addEventListener('click', () => startQuiz(npc));
                document.getElementById('dlg-leave').addEventListener('click', closeDialog);
            }
            quiz = null;
            return;
        }
        const stars = acc >= 0.95 ? 3 : acc >= 0.8 ? 2 : 1;
        const prev = save.quests[npc.id];
        const firstTime = !prev || !prev.stars;
        save.quests[npc.id] = { stars: Math.max(stars, prev ? prev.stars : 0), plays: (prev ? prev.plays : 0) + 1 };
        save.xp += firstTime ? 25 : 10;
        persist(); updateHud();
        sfx.quest();
        dlgBody.innerHTML = `
            <div class="dlg-text">${firstTime ? `🏆 <b>A laurel is yours!</b> ${npc.done}` : npc.done}</div>
            <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
            <div class="dlg-text" style="font-size:0.8rem;">Accuracy: <b>${Math.round(acc * 100)}%</b> · +${(firstTime ? 25 : 10) + q.correct * 5} XP${laurelCount() >= 10 && !save.final ? '<br><br>🔮 <b>All ten laurels!</b> The Sibyl awaits you in the temple…' : ''}</div>
            <div class="dlg-actions">
                <button class="dlg-btn" id="dlg-again">Practise again</button>
                <button class="dlg-btn secondary" id="dlg-leave">Continue exploring</button>
            </div>`;
        document.getElementById('dlg-again').addEventListener('click', () => startQuiz(npc));
        document.getElementById('dlg-leave').addEventListener('click', closeDialog);
        quiz = null;
    }

    // ---------- Game loop ----------
    let last = performance.now();
    let waterTimer = 0, waterFrame = 0;

    function update(dt) {
        if (dialogOpen) { player.moving = false; return; }
        let dx = 0, dy = 0;
        if (keys['w'] || keys['arrowup']) dy -= 1;
        if (keys['s'] || keys['arrowdown']) dy += 1;
        if (keys['a'] || keys['arrowleft']) dx -= 1;
        if (keys['d'] || keys['arrowright']) dx += 1;
        dx += joyVec.x; dy += joyVec.y;
        const len = Math.hypot(dx, dy);
        player.moving = len > 0.01;
        if (player.moving) {
            dx /= Math.max(len, 1); dy /= Math.max(len, 1);
            if (Math.abs(dx) > Math.abs(dy)) player.dir = dx > 0 ? 'right' : 'left';
            else player.dir = dy > 0 ? 'down' : 'up';
            const step = player.speed * dt;
            // resolve x and y separately so we slide along walls
            moveAxis(dx * step, 0);
            moveAxis(0, dy * step);
            player.frameTime += dt;
            if (player.frameTime > 0.15) { player.frame = 1 - player.frame; player.frameTime = 0; }
        }
        // NPCs face the player when close
        for (const n of npcs) {
            const d = Math.hypot(n.px - player.x, n.py - player.y);
            if (d < 70) {
                const ddx = player.x - n.px, ddy = player.y - n.py;
                n.dir = Math.abs(ddx) > Math.abs(ddy) ? (ddx > 0 ? 'right' : 'left') : (ddy > 0 ? 'down' : 'up');
            }
        }
        // interaction prompt
        const near = nearestNpc();
        if (near && !dialogOpen) {
            promptEl.style.display = 'block';
            promptText.textContent = 'Talk to ' + near.name;
            actionBtn.classList.add('show');
        } else {
            promptEl.style.display = 'none';
            actionBtn.classList.remove('show');
        }
    }

    function moveAxis(dx, dy) {
        const hw = 6, hh = 4; // half-extent of the feet hitbox
        let nx = player.x + dx, ny = player.y + dy;
        const corners = [
            [nx - hw, ny - hh], [nx + hw, ny - hh],
            [nx - hw, ny], [nx + hw, ny],
        ];
        for (const [cx, cy] of corners) {
            if (solidAt(Math.floor(cx / TILE), Math.floor(cy / TILE))) return;
        }
        player.x = nx; player.y = ny;
    }

    function draw(now) {
        if (!mapFrames.length) return;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = false;
        ctx.fillStyle = '#1a2733';
        ctx.fillRect(0, 0, viewW, viewH);

        const worldW = MAP_W * TILE, worldH = MAP_H * TILE;
        const vw = viewW / zoom, vh = viewH / zoom;
        let camX = player.x - vw / 2, camY = player.y - vh / 2;
        camX = Math.max(0, Math.min(camX, worldW - vw));
        camY = Math.max(0, Math.min(camY, worldH - vh));
        if (worldW < vw) camX = (worldW - vw) / 2;
        if (worldH < vh) camY = (worldH - vh) / 2;

        ctx.save();
        ctx.scale(zoom, zoom);
        ctx.translate(-Math.round(camX), -Math.round(camY));

        ctx.drawImage(mapFrames[waterFrame], 0, 0);

        // entities, y-sorted
        const ents = npcs.map(n => ({ y: n.py, fn: () => {
            const bobY = Math.round(Math.sin(now / 600 + n.bob) * 1.2);
            drawPerson(ctx, n.px, n.py, n.dir, 0, n);
            // quest indicator
            const st = save.quests[n.id];
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.textAlign = 'center';
            if (n.final) {
                if (!save.final && laurelCount() < 10) { ctx.font = '10px sans-serif'; ctx.fillText('🔒', n.px, n.py - 30 + bobY); }
                else if (!save.final) { ctx.fillStyle = '#b07ae8'; ctx.fillText('?', n.px, n.py - 30 + bobY); }
                else { ctx.font = '10px sans-serif'; ctx.fillText('👑', n.px, n.py - 30 + bobY); }
            } else if (st && st.stars > 0) {
                ctx.fillStyle = '#f5c842';
                ctx.fillText('★'.repeat(Math.min(st.stars, 3)), n.px, n.py - 30 + bobY);
            } else {
                ctx.fillStyle = '#f5c842';
                ctx.strokeStyle = 'rgba(0,0,0,0.6)'; ctx.lineWidth = 2.5;
                ctx.strokeText('!', n.px, n.py - 30 + bobY);
                ctx.fillText('!', n.px, n.py - 30 + bobY);
            }
        } }));
        ents.push({ y: player.y, fn: () => drawPerson(ctx, player.x, player.y, player.dir, player.moving ? 1 + player.frame : 0, player) });
        ents.sort((a, b) => a.y - b.y);
        for (const e of ents) e.fn();

        ctx.drawImage(overlay, 0, 0);
        ctx.restore();
    }

    function loop(now) {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        waterTimer += dt;
        if (waterTimer > 0.6) { waterFrame = 1 - waterFrame; waterTimer = 0; }
        update(dt);
        draw(now);
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
})();
