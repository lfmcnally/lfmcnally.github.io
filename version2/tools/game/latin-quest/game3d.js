// ============================================================
// LATIN QUEST 3D — a cosy Roman town for GCSE vocabulary
// ============================================================
// Walk around Parva Roma, meet the townsfolk (one per OCR chapter),
// win laurels in their vocabulary challenges, discover the Latin
// names of things in the world, and face the Sibyl's final trial.
//
// Vocabulary: version2/tools/vocab/data/latin-gcse.js
// Tracking:   shared v2 bkt-store (vocab_bkt) + vocab_sessions
// Art:        CC0 models/textures (KayKit, Quaternius, ambientCG,
//             Poly Haven) — see assets3d/CREDITS.txt
import * as THREE from 'three';
import { GLTFLoader } from './lib/GLTFLoader.js';
import { RGBELoader } from './lib/RGBELoader.js';
import { MeshoptDecoder } from './lib/meshopt_decoder.module.js';

(function () {
'use strict';
const { buildPools, pickWords, makeQuestion } = window.VocabCore;

// ---------- Save ----------
const SAVE_KEY = 'latinQuestSave';
function loadSave() {
    try {
        const s = JSON.parse(localStorage.getItem(SAVE_KEY));
        if (s && typeof s === 'object') {
            return Object.assign({ xp: 0, quests: {}, final: false, muted: false, seenIntro: false, lexicon: [] }, s);
        }
    } catch (e) { /* corrupt save: start fresh */ }
    return { xp: 0, quests: {}, final: false, muted: false, seenIntro: false, lexicon: [] };
}
const save = loadSave();
if (!Array.isArray(save.lexicon)) save.lexicon = [];
function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* full/blocked */ } }

// ---------- Vocabulary ----------
const vocabOK = typeof VOCAB_LATIN_GCSE !== 'undefined' && Array.isArray(VOCAB_LATIN_GCSE) && VOCAB_LATIN_GCSE.length > 0;
const { pools, all } = vocabOK ? buildPools(VOCAB_LATIN_GCSE) : { pools: {}, all: [] };
const vocabByLatin = new Map(all.map(w => [w.latin, w]));

// ---------- Progress tracking (Classicalia v2 BKT + sessions) ----------
const BKT = { pL0: 0.30, pT: 0.12, pG: 0.32, pS: 0.15, mastery: 0.95 };
const MASTERY = { daysRequired: 3, firstReviewDays: 7, reviewIntervalCapDays: 180, resetIntervalDays: 7, resetReviewInDays: 1 };
let store = null;
const wordState = new Map();

function todayLocalISO() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
const addDaysIso = days => new Date(Date.now() + days * 86400000).toISOString();
function stateFor(latin) {
    let st = wordState.get(latin);
    if (!st) {
        st = { pKnow: BKT.pL0, trials: 0, correct: 0, distinctCorrectDays: 0, lastCorrectDate: null, nextReviewAt: null, reviewIntervalDays: null };
        wordState.set(latin, st);
    }
    return st;
}
const isSecure = st => st.pKnow >= BKT.mastery && (st.distinctCorrectDays | 0) >= MASTERY.daysRequired;

async function initTracking() {
    const pill = document.getElementById('hud-sync');
    if (typeof ClassicaliaBKT !== 'undefined') {
        try {
            store = await ClassicaliaBKT.open({ vocabList: 'latin-gcse' });
            const stored = await store.loadAll();
            for (const [latin, st] of stored) {
                wordState.set(latin, {
                    pKnow: st.p_know, trials: st.trials | 0, correct: st.correct | 0,
                    distinctCorrectDays: st.distinct_correct_days | 0,
                    lastCorrectDate: st.last_correct_date || null,
                    nextReviewAt: st.next_review_at || null,
                    reviewIntervalDays: st.review_interval_days || null,
                });
            }
        } catch (e) { store = null; }
    }
    if (store && store.mode === 'cloud') {
        pill.textContent = '☁️ progress synced';
        pill.removeAttribute('href');
        pill.style.cursor = 'default';
    } else {
        pill.innerHTML = '☁️ <span class="gold">sign in</span> to track';
    }
    pill.style.display = '';
    updateHud();
    window.addEventListener('pagehide', () => { if (store) store.flush(); });
}

// Mirrors the v2 tester's bktUpdate (posterior + learn step, distinct-day
// mastery gate, spaced-repetition scheduling).
function bktAnswer(word, right) {
    const st = stateFor(word.latin);
    const wasSecure = isSecure(st);
    const p = st.pKnow;
    const posterior = right
        ? (p * (1 - BKT.pS)) / (p * (1 - BKT.pS) + (1 - p) * BKT.pG)
        : (p * BKT.pS) / (p * BKT.pS + (1 - p) * (1 - BKT.pG));
    st.pKnow = posterior + (1 - posterior) * BKT.pT;
    st.trials++;
    if (right) st.correct++;
    const today = todayLocalISO();
    if (right && st.lastCorrectDate !== today) {
        st.distinctCorrectDays = (st.distinctCorrectDays | 0) + 1;
        st.lastCorrectDate = today;
    }
    if (right && isSecure(st)) {
        if (!wasSecure) {
            st.reviewIntervalDays = MASTERY.firstReviewDays;
            st.nextReviewAt = addDaysIso(MASTERY.firstReviewDays);
        } else if (st.nextReviewAt && Date.parse(st.nextReviewAt) <= Date.now()) {
            const next = Math.min((st.reviewIntervalDays || MASTERY.firstReviewDays) * 2, MASTERY.reviewIntervalCapDays);
            st.reviewIntervalDays = next;
            st.nextReviewAt = addDaysIso(next);
        }
    }
    if (!right && wasSecure) {
        st.distinctCorrectDays = 0;
        st.reviewIntervalDays = MASTERY.resetIntervalDays;
        st.nextReviewAt = addDaysIso(MASTERY.resetReviewInDays);
    }
    if (store) store.update(word.latin, {
        p_know: st.pKnow, trials: st.trials, correct: st.correct,
        distinct_correct_days: st.distinctCorrectDays | 0,
        last_correct_date: st.lastCorrectDate || null,
        next_review_at: st.nextReviewAt || null,
        review_interval_days: st.reviewIntervalDays || null,
    });
}

// One vocab_sessions row per quest (signed-in only), debounced.
let sessionLog = null, sessionTimer = null;
async function flushLog(log) {
    if (!log || !store || store.mode !== 'cloud' || !window.supabase || !window.supabase.from) return;
    if (log.busy) { log.dirty = true; return; }
    log.busy = true;
    do {
        log.dirty = false;
        const payload = { answered: log.answered, correct: log.correct, last_answer_at: new Date().toISOString() };
        try {
            if (!log.id) {
                const { data: { user } } = await window.supabase.auth.getUser();
                if (!user) break;
                const { data, error } = await window.supabase
                    .from('vocab_sessions')
                    .insert(Object.assign({ student_id: user.id, vocab_list: 'latin-gcse' }, payload))
                    .select('id')
                    .single();
                if (error || !data) break;
                log.id = data.id;
            } else {
                await window.supabase.from('vocab_sessions').update(payload).eq('id', log.id);
            }
        } catch (e) { break; }
    } while (log.dirty);
    log.busy = false;
}
function trackQuestStart() { sessionLog = { id: null, answered: 0, correct: 0, busy: false, dirty: false }; }
function trackAnswer(w, right) {
    bktAnswer(w, right);
    if (!sessionLog) return;
    sessionLog.answered++;
    if (right) sessionLog.correct++;
    clearTimeout(sessionTimer);
    const log = sessionLog;
    sessionTimer = setTimeout(() => flushLog(log), 1200);
}
function trackQuestEnd() {
    clearTimeout(sessionTimer);
    const log = sessionLog;
    sessionLog = null;
    if (log && log.answered) flushLog(log);
}

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
    discover: () => { beep(784, 0.1, 'triangle'); beep(1175, 0.22, 'triangle', 0.09); },
};

// ---------- The townsfolk ----------
const NPC_DEFS = [
    { id: 'marcus', name: 'Marcus', title: 'the Farmer', chapter: 1, x: -19, z: 26, ry: 0.6,
      tunic: 0xa4763d, trim: 0x7c5527, hair: 0x4a3220, skin: 0xd9a06b, acc: 'strawhat',
      greet: 'salve, viator! These fields don’t plough themselves. Show me you know your <em>Chapter 1</em> words and a laurel is yours.',
      done: 'optime! You work as hard as my oxen. Come back any time to sharpen up.' },
    { id: 'livia', name: 'Livia', title: 'the Baker', chapter: 2, x: -17.5, z: 7.5, ry: 1.2,
      tunic: 0xb8543e, trim: 0x8c3a2c, hair: 0x2e2018, skin: 0xe8b48a, acc: 'long',
      greet: 'salve! Fresh bread, fresh words. Get my <em>Chapter 2</em> vocabulary right and I’ll crown you with laurel — not flour.',
      done: 'bene factum! You’ve earned your bread — and your laurel.' },
    { id: 'quintus', name: 'Quintus', title: 'the Merchant', chapter: 3, x: 49, z: 9, ry: -1.4,
      tunic: 0x3e7d8c, trim: 0x2c5a66, hair: 0x1f1a14, skin: 0xc98e5a, acc: 'none',
      greet: 'Goods from every shore of <em>mare nostrum</em>! But words are the true currency. Trade me your <em>Chapter 3</em> vocabulary.',
      done: 'A fine bargain! You’d haggle well in any forum.' },
    { id: 'aurelia', name: 'Aurelia', title: 'the Priestess', chapter: 4, x: -4, z: -10.5, ry: 2.6,
      tunic: 0xe8e0d0, trim: 0xc9b88a, hair: 0x5a4632, skin: 0xe8b48a, acc: 'veil',
      greet: 'pax tecum. Minerva favours the studious. Recite your <em>Chapter 4</em> words upon her steps.',
      done: 'dis gratias! The goddess of wisdom smiles on you.' },
    { id: 'felix', name: 'Felix', title: 'the Gladiator', chapter: 5, x: 20, z: 26, ry: -0.8,
      tunic: 0x8c4a3e, trim: 0x5e2f27, hair: 0x171310, skin: 0xb87e4e, acc: 'helmet',
      greet: 'Ha! Strong arms, stronger mind. Spar with me — <em>Chapter 5</em> words, eight hits to win.',
      done: 'victor es! You fight with words like a true champion of the arena.' },
    { id: 'drusilla', name: 'Drusilla', title: 'the Healer', chapter: 6, x: -30, z: -7, ry: 1.8,
      tunic: 0x5e8c52, trim: 0x436339, hair: 0x8c8478, skin: 0xdca87a, acc: 'long',
      greet: 'Herbs for the body, words for the mind. My <em>Chapter 6</em> remedy: eight correct answers, taken among the trees.',
      done: 'salva es! A healthy memory is the best medicine of all.' },
    { id: 'septimus', name: 'Septimus', title: 'the Soldier', chapter: 7, x: 32, z: 7, ry: -1.6,
      tunic: 0x9c2f2f, trim: 0x6e1f1f, hair: 0x2e2018, skin: 0xd9a06b, acc: 'helmet',
      greet: 'Halt! None cross my bridge unquestioned. Drill your <em>Chapter 7</em> words, recruit — then pass freely.',
      done: 'At ease, legionary. The bridge — and the laurel — are yours.' },
    { id: 'camilla', name: 'Camilla', title: 'the Poet', chapter: 8, x: -26.5, z: -18, ry: 0.9,
      tunic: 0x7d5e9c, trim: 0x5a4273, hair: 0x3e2c1c, skin: 0xe8b48a, acc: 'long',
      greet: 'arma virumque cano… but today I sing of vocabulary! Compose with me from <em>Chapter 8</em>, here among the flowers.',
      done: 'carmen perfectum! The Muses themselves applaud you.' },
    { id: 'titus', name: 'Titus', title: 'the Senator', chapter: 9, x: 5.5, z: 1.5, ry: -2.6,
      tunic: 0xece8df, trim: 0x9c2f2f, hair: 0xb8b2a6, skin: 0xdca87a, acc: 'wreath',
      greet: 'civis! The Senate values eloquence above gold. Debate me on the words of <em>Chapter 9</em>.',
      done: 'senatus populusque Romanus salutes you! A born orator.' },
    { id: 'gaia', name: 'Magistra Gaia', title: 'the Teacher', chapter: 10, x: 18.5, z: 3, ry: -1.0,
      tunic: 0x3e5a8c, trim: 0x2c4066, hair: 0x4a3220, skin: 0xe8b48a, acc: 'long',
      greet: 'discipule, the final chapter awaits. <em>Chapter 10</em> holds the trickiest words — prove you have mastered them.',
      done: 'summa cum laude! There is nothing more I can teach you.' },
    { id: 'sibyl', name: 'the Sibyl', title: 'Oracle of Parva Roma', chapter: 0, x: 0, z: -19.5, ry: Math.PI, final: true,
      tunic: 0x2c3e50, trim: 0xf5c842, hair: 0xe8e0d0, skin: 0xdca87a, acc: 'veil',
      greet: 'So… the bearer of ten laurels stands before me. One trial remains: fifteen questions drawn from the whole book of words. Answer twelve truly, and the <em>corona laurea</em> is yours.',
      locked: 'The mists are thick… return when you carry all <b>ten laurels</b>, and I shall set you the final trial.',
      done: 'It is written: a true Latin scholar walks among us. Wear your crown well.' },
];

// ---------- Three.js setup ----------
const canvas = document.getElementById('game-canvas');
let renderer;
try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
} catch (e) {
    const p = document.querySelector('#intro .panel p');
    if (p) p.innerHTML = '<b>Sorry — your browser could not start 3D graphics.</b> Try updating your browser or device.';
    return;
}
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9ed2f0);
scene.fog = new THREE.Fog(0xbfe0ee, 75, 240);

const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.1, 600);
function resize() {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

const sun = new THREE.DirectionalLight(0xfff2d8, 2.2);
sun.position.set(30, 42, 20);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -45; sun.shadow.camera.right = 45;
sun.shadow.camera.top = 45; sun.shadow.camera.bottom = -45;
sun.shadow.bias = -0.0004;
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xcfe5ff, 0xa3b86e, 0.5));

const texLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();
gltfLoader.setMeshoptDecoder(MeshoptDecoder);
new RGBELoader().load('assets3d/vale_day_1k.hdr', hdr => {
    hdr.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = hdr;
});

// ---------- Terrain ----------
function tiledTexture(file, repeat) {
    const t = texLoader.load(file);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat, repeat);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
}
const groundGeo = new THREE.PlaneGeometry(420, 420, 100, 100);
groundGeo.rotateX(-Math.PI / 2);
{
    const pos = groundGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        const d = Math.hypot(x, z - 4);
        let y = (Math.sin(x * 0.10) + Math.cos(z * 0.12)) * 0.6 + Math.sin(x * 0.028 + z * 0.041) * 1.9;
        y *= Math.min(1, Math.max(0, (d - 62) / 36));
        pos.setY(i, y);
    }
    groundGeo.computeVertexNormals();
}
const ground = new THREE.Mesh(groundGeo, new THREE.MeshStandardMaterial({
    map: tiledTexture('assets3d/Grass001_Color.jpg', 56),
    color: 0x95d460,
    roughness: 1,
}));
ground.receiveShadow = true;
scene.add(ground);

const pavingMat = new THREE.MeshStandardMaterial({
    map: tiledTexture('assets3d/PavingStones046_Color.jpg', 9),
    color: 0xe8ddc4,
    roughness: 0.95,
});
const plaza = new THREE.Mesh(new THREE.CylinderGeometry(19, 19, 0.5, 40), pavingMat);
plaza.position.set(0, -0.2, 4);
plaza.receiveShadow = true;
scene.add(plaza);

function path(x1, z1, x2, z2, w) {
    const dx = x2 - x1, dz = z2 - z1;
    const len = Math.hypot(dx, dz);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, len), new THREE.MeshStandardMaterial({
        map: tiledTexture('assets3d/PavingStones046_Color.jpg', Math.max(1, Math.round(len / 6))),
        color: 0xd9c9a4, roughness: 1,
    }));
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = -Math.atan2(dx, dz);
    m.position.set((x1 + x2) / 2, 0.03, (z1 + z2) / 2);
    m.receiveShadow = true;
    scene.add(m);
    return m;
}
path(0, -8, 0, -13, 5);          // plaza -> temple steps
path(-13, 13, -19, 24, 3.4);     // -> farm
path(13, 13, 20, 23, 3.4);       // -> training ring
path(17, 6, 31, 5, 3.4);         // -> bridge
path(-16, 8, -26, -3, 3.4);      // -> grove / villa

// ---------- Colliders & walkable heights ----------
const circles = [];   // {x, z, r}
const boxes = [];     // {x1, z1, x2, z2}
const addCircle = (x, z, r) => circles.push({ x, z, r });
const addBox = (x1, z1, x2, z2) => boxes.push({ x1: Math.min(x1, x2), z1: Math.min(z1, z2), x2: Math.max(x1, x2), z2: Math.max(z1, z2) });

// Temple podium: walkable on top, entered by the front steps.
const POD = { x1: -12, z1: -31, x2: 12, z2: -17, top: 3.0 };
const STEPS = { x1: -4, z1: -17, x2: 4, z2: -12.5 };
function groundHeight(x, z) {
    if (x >= POD.x1 && x <= POD.x2 && z >= POD.z1 && z <= POD.z2) return POD.top;
    if (x >= STEPS.x1 && x <= STEPS.x2 && z >= STEPS.z1 && z <= STEPS.z2) {
        return POD.top * (STEPS.z2 - z) / (STEPS.z2 - STEPS.z1);
    }
    if (x >= 35.4 && x <= 44.6 && z >= 1 && z <= 8) return 0.45;   // bridge deck
    return 0;
}
// podium side walls (gap at the steps)
addBox(POD.x1 - 0.8, POD.z1 - 0.8, POD.x1, POD.z2 + 0.4);
addBox(POD.x2, POD.z1 - 0.8, POD.x2 + 0.8, POD.z2 + 0.4);
addBox(POD.x1, POD.z1 - 0.8, POD.x2, POD.z1);
addBox(POD.x1 - 0.8, POD.z2, STEPS.x1, POD.z2 + 0.8);
addBox(STEPS.x2, POD.z2, POD.x2 + 0.8, POD.z2 + 0.8);
// steps side rails
addBox(STEPS.x1 - 0.7, STEPS.z1, STEPS.x1, STEPS.z2);
addBox(STEPS.x2, STEPS.z1, STEPS.x2 + 0.7, STEPS.z2);

// river is solid except the bridge
addBox(36, -70, 44, 1);
addBox(36, 8, 44, 70);
// world edge
const BOUNDS = { x1: -48, z1: -40, x2: 56, z2: 42 };

// ---------- Procedural Roman architecture ----------
const matCache = new Map();
const flat = (color, rough = 0.9) => {
    const k = color + ':' + rough;
    if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough }));
    return matCache.get(k);
};
function box3(w, h, d, mat, x, y, z, parent = scene) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = m.receiveShadow = true;
    parent.add(m);
    return m;
}
function prismGeo(w, h, d) {
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2, 0); shape.lineTo(w / 2, 0); shape.lineTo(0, h);
    shape.closePath();
    const g = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false });
    g.translate(0, 0, -d / 2);
    return g;
}
// A cosy Roman building: cream walls, terracotta roof, shutters, awning.
function romanBuilding(x, z, ry, { w = 9, d = 7, h = 4.4, wall = 0xead9b8, awning = null } = {}) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = ry;
    scene.add(g);
    box3(w, h, d, flat(wall), 0, h / 2, 0, g);
    const roof = new THREE.Mesh(prismGeo(d + 1.6, 2.0 + d * 0.14, w + 1.8), flat(0xc06a42, 0.85));
    roof.position.set(0, h, 0);
    roof.rotation.y = Math.PI / 2;
    roof.castShadow = roof.receiveShadow = true;
    g.add(roof);
    box3(1.5, 2.6, 0.25, flat(0x6e4a26), -w * 0.18, 1.3, d / 2 + 0.1, g);                 // door
    box3(1.3, 1.1, 0.2, flat(0x37506e), w * 0.22, h * 0.58, d / 2 + 0.1, g);              // shutter
    box3(1.3, 1.1, 0.2, flat(0x37506e), -w * 0.22, h * 0.58, -d / 2 - 0.1, g);
    if (awning) {
        const a = box3(w * 0.55, 0.12, 2.4, flat(awning, 0.8), w * 0.18, 2.6, d / 2 + 1.2, g);
        a.rotation.x = 0.22;
        for (const sx of [w * 0.18 - w * 0.24, w * 0.18 + w * 0.24]) {
            box3(0.14, 2.4, 0.14, flat(0x8a6a3b), sx, 1.2, d / 2 + 2.1, g);
        }
    }
    addCircle(x, z, Math.max(w, d) * 0.62);
    return g;
}

// ---------- Model placement ----------
const modelCache = new Map();
function loadModel(name) {
    if (!modelCache.has(name)) {
        modelCache.set(name, new Promise((res, rej) => gltfLoader.load('assets3d/' + name, g => {
            g.scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
            res(g);
        }, undefined, rej)));
    }
    return modelCache.get(name);
}
const pendingModels = [];
function placeModel(name, x, z, { h = 2, ry = 0, y = null, collide = 0, marble = false } = {}) {
    const p = loadModel(name).then(g => {
        const m = g.scene.clone(true);
        if (marble) {
            const stone = new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.7 });
            m.traverse(o => { if (o.isMesh) o.material = stone; });
        }
        const bb = new THREE.Box3().setFromObject(m);
        const size = bb.getSize(new THREE.Vector3());
        m.scale.setScalar(h / size.y);
        const bb2 = new THREE.Box3().setFromObject(m);
        m.position.set(x, (y == null ? groundHeight(x, z) : y) - bb2.min.y, z);
        m.rotation.y = ry;
        scene.add(m);
        return m;
    }).catch(e => console.warn('model failed:', name, e && e.message));
    pendingModels.push(p);
    if (collide) addCircle(x, z, collide);
    return p;
}

// ---------- The temple ----------
{
    const t = new THREE.Group();
    t.position.set(0, 0, -24);
    scene.add(t);
    const marble = flat(0xe9e2cf, 0.75);
    box3(26, 1.0, 16, marble, 0, 0.5, 0, t);
    box3(25, 1.0, 15, marble, 0, 1.5, 0, t);
    box3(24, 1.0, 14, marble, 0, 2.5, 0, t);
    // front steps
    for (let i = 0; i < 4; i++) box3(8, 0.75, 1.3, marble, 0, 0.38 + i * 0.75, 7.6 + (3 - i) * 1.15, t);
    const COLH = 6.6, styloY = 3.0;
    const colPos = [];
    for (let i = 0; i < 6; i++) { colPos.push([-10 + i * 4, 5.3]); colPos.push([-10 + i * 4, -5.3]); }
    colPos.push([-10, 1.8], [-10, -1.8], [10, 1.8], [10, -1.8]);
    for (const [cx, cz] of colPos) {
        placeModel('column.glb', cx, -24 + cz, { h: COLH, y: styloY });
        addCircle(cx, -24 + cz, 0.85);
    }
    box3(14, COLH, 8, flat(0xe2d8bf, 0.85), 0, styloY + COLH / 2, -1, t);
    addBox(-7.6, -29.6, 7.6, -20.4);   // cella is solid
    box3(22.6, 1.2, 13.4, flat(0xefe8d4, 0.8), 0, styloY + COLH + 0.6, 0, t);
    const pedi = new THREE.Mesh(prismGeo(14, 2.9, 23.2), flat(0xf2ecda, 0.8));
    pedi.position.set(0, styloY + COLH + 1.2, 0); pedi.rotation.y = Math.PI / 2;
    pedi.castShadow = true; t.add(pedi);
    const roof = new THREE.Mesh(prismGeo(15.2, 3.1, 24.2), flat(0xc06a42, 0.85));
    roof.position.set(0, styloY + COLH + 1.45, 0); roof.rotation.y = Math.PI / 2;
    roof.castShadow = true; t.add(roof);
}

// ---------- Buildings ----------
romanBuilding(-23, 5, 0.5, { w: 10, d: 7.5, h: 4.6, awning: 0xc94f3d });   // Livia's bakery
romanBuilding(23.5, 0.5, -0.5, { w: 9.5, d: 7, h: 4.6, wall: 0xddc9a8 }); // the ludus
romanBuilding(-30, -24, 0.8, { w: 12, d: 8.5, h: 5.2 });                   // the villa
romanBuilding(-26, 33, 0.2, { w: 7.5, d: 6, h: 3.8, wall: 0xddc9a8 });     // farmhouse

// forum furniture
placeModel('well.glb', 0, 7.5, { h: 3.2, ry: 0.3, collide: 1.6 });
placeModel('market_stand_1.glb', -8.5, 13.5, { h: 3.5, ry: 0.55, collide: 2.0 });
placeModel('market_stand_2.glb', 9.5, 12.5, { h: 3.5, ry: -0.5, collide: 2.0 });
placeModel('statue_block.glb', 7, -6.5, { h: 3.0, ry: -0.4, collide: 1.3, marble: true });
placeModel('cart.glb', -13, 9.5, { h: 2.4, ry: 1.3, collide: 1.8 });
placeModel('barrel.glb', -11.4, 7.6, { h: 1.3, collide: 0.8 });
placeModel('barrel.glb', -12.3, 6.7, { h: 1.3, ry: 1, collide: 0.8 });

// harbour
placeModel('rowboat.glb', 47, 16, { h: 1.6, ry: 0.7, y: 0.05 });
placeModel('crate_wooden.glb', 50.5, 7, { h: 1.3, collide: 0.9 });
placeModel('crate_wooden.glb', 51.6, 8.2, { h: 1.3, ry: 0.6, collide: 0.9 });
placeModel('barrel.glb', 50.8, 10, { h: 1.3, collide: 0.8 });

// training ring (palaestra)
{
    const sand = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 6.5, 0.4, 26), flat(0xe3cf9c, 1));
    sand.position.set(20, -0.14, 27);
    sand.receiveShadow = true;
    scene.add(sand);
    placeModel('crate_wooden.glb', 14.5, 23.5, { h: 1.3, ry: 0.4, collide: 0.9 });
    placeModel('barrel.glb', 26, 30.5, { h: 1.3, collide: 0.8 });
}

// farm: crop rows + fences
{
    for (let r = 0; r < 4; r++) {
        const row = box3(11, 0.5, 1.5, flat(0xa87c4f, 1), -15, 0.25, 29 + r * 2.6);
        for (let i = 0; i < 7; i++) {
            const c = new THREE.Mesh(new THREE.SphereGeometry(0.45, 7, 5), flat(0x5e9a3e, 0.9));
            c.position.set(-15 - 4.8 + i * 1.6, 0.7, 29 + r * 2.6);
            c.castShadow = true;
            scene.add(c);
        }
    }
    for (let i = 0; i < 6; i++) placeModel('fence.glb', -22 + i * 2.9, 39.5, { h: 1.5 });
    for (let i = 0; i < 4; i++) placeModel('fence.glb', -7.2, 29.5 + i * 2.9, { h: 1.5, ry: Math.PI / 2 });
}

// villa garden (hortus)
{
    for (let i = 0; i < 4; i++) placeModel('fence.glb', -30 + i * 2.9, -13.5, { h: 1.5 });
    placeModel('bush_flowers.glb', -29, -17, { h: 1.5, collide: 1.0 });
    placeModel('bush_flowers.glb', -24.5, -15.5, { h: 1.5, ry: 1.2, collide: 1.0 });
    placeModel('bush_flowers.glb', -27, -20.5, { h: 1.4, ry: 2.2, collide: 1.0 });
}

// grove (silva) + scattered nature
const treeSpots = [
    ['oak_1.glb', -34, -10, 9], ['oak_2.glb', -37, -4, 8.5], ['pine_1.glb', -33, -1, 10],
    ['oak_3.glb', -38, -14, 9.5], ['pine_1.glb', -29, -12.5, 9], ['oak_1.glb', -36, 4, 8],
    ['oak_2.glb', -16, -14, 9], ['oak_1.glb', 15, -14, 9.5], ['pine_1.glb', 13, -18, 11],
    ['pine_1.glb', -13, -18, 10.5], ['oak_3.glb', 28, -10, 9], ['oak_2.glb', 30, 16, 9],
    ['oak_1.glb', -14, 18, 8], ['oak_3.glb', 12, 19, 8], ['oak_2.glb', 27, 35, 9],
    ['oak_1.glb', -34, 18, 9], ['pine_1.glb', -38, 26, 11], ['oak_3.glb', 50, 22, 9],
    ['oak_1.glb', 52, -2, 9.5], ['pine_1.glb', 54, 14, 10],
];
for (const [m, x, z, h] of treeSpots) placeModel(m, x, z, { h, ry: Math.random() * 6, collide: 1.0 });
for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    const r = 68 + (i % 5) * 7;
    const x = Math.cos(a) * r, z = Math.sin(a) * r + 4;
    placeModel(['oak_1.glb', 'oak_2.glb', 'pine_1.glb', 'oak_3.glb'][i % 4], x, z, { h: 9 + (i % 4) * 1.5, ry: i });
}
placeModel('bush.glb', -10, -12, { h: 1.7, collide: 1.0 });
placeModel('bush_flowers.glb', 10.5, -11.5, { h: 1.6, collide: 1.0 });
placeModel('bush_flowers.glb', -21, 14, { h: 1.5, ry: 0.8, collide: 1.0 });
placeModel('bush.glb', 24, 8.5, { h: 1.8, collide: 1.0 });
placeModel('rock_2.glb', -41, 9, { h: 1.7, ry: 0.7, collide: 1.4 });
placeModel('rock_2.glb', 33, -16, { h: 1.4, ry: 2.1, collide: 1.2 });

// ---------- River & bridge ----------
{
    const water = new THREE.Mesh(new THREE.PlaneGeometry(8.6, 130), new THREE.MeshStandardMaterial({
        color: 0x4f9bd8, roughness: 0.25, transparent: true, opacity: 0.88,
    }));
    water.rotation.x = -Math.PI / 2;
    water.position.set(40, 0.06, 4);
    scene.add(water);
    const bank = flat(0xdcc89a, 1);
    for (const bx of [35.4, 44.6]) {
        const b = box3(1.4, 0.3, 130, bank, bx, 0.05, 4);
        b.receiveShadow = true;
    }
    // bridge deck + rails
    const deck = box3(10.6, 0.5, 7, flat(0x9a6b3f, 0.9), 40, 0.45, 4.5);
    deck.receiveShadow = true;
    for (const rz of [1.2, 7.8]) {
        box3(10.6, 0.9, 0.3, flat(0x7c5430, 0.9), 40, 1.15, rz);
        addBox(34.7, rz - 0.3, 45.3, rz + 0.3);
    }
}

// ---------- World labels (the Lexicon) ----------
// Walk close to a thing and its Latin name appears; first finds are
// recorded. GCSE-list words pull their gloss from the list itself.
function gloss(latin, fallback) {
    const w = vocabByLatin.get(latin);
    return w ? w.english : fallback;
}
const LABELS = [
    { latin: 'aqua', x: 0, z: 7.5, gcse: true },
    { latin: 'flumen', x: 40, z: 12, gcse: true },
    { latin: 'templum', x: 0, z: -14, gcse: true, dy: 4 },
    { latin: 'dea', x: 7, z: -6.5, gcse: true, note: 'a statue of the goddess' },
    { latin: 'via', x: 0, z: -9.5, gcse: true },
    { latin: 'silva', x: -34, z: -8, gcse: true, dy: 4 },
    { latin: 'ager', x: -15, z: 31, gcse: true },
    { latin: 'hortus', x: -26.5, z: -17, gcse: true },
    { latin: 'navis', x: 47, z: 16, gcse: true },
    { latin: 'taberna', x: -8.5, z: 13.5, gcse: true },
    { latin: 'villa', x: -30, z: -24, gcse: true, dy: 4.5 },
    { latin: 'cibus', x: 9.5, z: 12.5, gcse: true },
    { latin: 'porta', x: 40, z: 4.5, gcse: true, note: 'the bridge gate' },
    { latin: 'arbor', x: -16, z: -14, gloss: 'tree (bonus word)', dy: 5 },
    { latin: 'cervus', x: -35, z: -7, gloss: 'deer (bonus word)', follow: 'stag' },
    { latin: 'vulpes', x: 28, z: -8, gloss: 'fox (bonus word)', follow: 'fox' },
    { latin: 'bos', x: -19, z: 35, gloss: 'ox (bonus word)', follow: 'bull' },
];
function labelSprite(text, found) {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 80;
    const ctx = c.getContext('2d');
    ctx.font = 'italic 700 44px Lora, Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const w = Math.min(244, ctx.measureText(text).width + 36);
    ctx.fillStyle = found ? 'rgba(30,26,16,0.72)' : 'rgba(58,44,10,0.85)';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(128 - w / 2, 8, w, 64, 16);
    else ctx.rect(128 - w / 2, 8, w, 64);
    ctx.fill();
    ctx.strokeStyle = found ? 'rgba(245,200,66,0.45)' : '#f5c842';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = found ? '#e8dcb0' : '#ffe9a8';
    ctx.fillText(text, 128, 41);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
    sp.scale.set(4.6, 1.45, 1);
    return sp;
}
for (const L of LABELS) {
    L.sprite = labelSprite(L.latin, save.lexicon.includes(L.latin));
    L.sprite.position.set(L.x, groundHeight(L.x, L.z) + (L.dy || 2.6), L.z);
    L.sprite.material.opacity = 0;
    scene.add(L.sprite);
}

// ---------- People ----------
function makeRoman(o) {
    const g = new THREE.Group();
    const tunic = flat(o.tunic, 0.85), skin = flat(o.skin, 0.8), hair = flat(o.hair, 0.9);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.5, 1.05, 12), tunic);
    body.position.y = 0.85; body.castShadow = true;
    g.add(body);
    const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.41, 0.44, 0.14, 12), flat(o.trim, 0.85));
    belt.position.y = 0.95;
    g.add(belt);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 14, 12), skin);
    head.position.y = 1.85; head.castShadow = true;
    g.add(head);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.45, 14, 10, 0, Math.PI * 2, 0, Math.PI * (o.acc === 'long' || o.acc === 'veil' ? 0.62 : 0.5)), o.acc === 'veil' ? flat(0xf0ebdc, 0.85) : hair);
    cap.position.y = 1.93;
    g.add(cap);
    for (const sx of [-0.15, 0.15]) {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.052, 8, 6), flat(0x26201a, 0.4));
        eye.position.set(sx, 1.88, 0.37);
        g.add(eye);
        const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.5, 4, 8), skin);
        arm.position.set(sx > 0 ? 0.46 : -0.46, 1.05, 0);
        arm.rotation.z = sx > 0 ? -0.25 : 0.25;
        arm.castShadow = true;
        g.add(arm);
        g.userData['arm' + (sx > 0 ? 'R' : 'L')] = arm;
        const foot = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), flat(0x7c5430, 0.9));
        foot.position.set(sx * 1.2, 0.12, 0.05);
        g.add(foot);
        g.userData['foot' + (sx > 0 ? 'R' : 'L')] = foot;
    }
    if (o.acc === 'wreath') {
        const w = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.06, 8, 18), flat(0x5e9a4e, 0.8));
        w.position.y = 2.08; w.rotation.x = Math.PI / 2.25;
        g.add(w);
    }
    if (o.acc === 'helmet') {
        const h = new THREE.Mesh(new THREE.SphereGeometry(0.47, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), flat(0x8f97a3, 0.5));
        h.position.y = 1.95;
        g.add(h);
        const crest = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.3, 0.62), flat(0xc0392b, 0.8));
        crest.position.y = 2.38;
        g.add(crest);
    }
    if (o.acc === 'strawhat') {
        const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.07, 14), flat(0xd6b25e, 0.9));
        brim.position.y = 2.16;
        g.add(brim);
        const top = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.24, 12), flat(0xd6b25e, 0.9));
        top.position.y = 2.3;
        g.add(top);
    }
    return g;
}

const player = {
    obj: makeRoman({ tunic: 0xc9a23e, trim: 0x9c7a26, hair: 0x3e2c1c, skin: 0xe0a878, acc: 'none' }),
    x: 0, z: 16, ry: Math.PI, speed: 7.2, moving: false, walkT: 0,
};
player.obj.position.set(player.x, 0, player.z);
scene.add(player.obj);

function indicatorSprite() {
    const c = document.createElement('canvas');
    c.width = 64; c.height = 64;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false }));
    sp.scale.set(1.1, 1.1, 1);
    return sp;
}
function setIndicator(sp, glyph, color) {
    const c = sp.material.map.image;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 64, 64);
    ctx.font = '700 46px Inter, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineWidth = 7; ctx.strokeStyle = 'rgba(20,16,8,0.75)';
    ctx.strokeText(glyph, 32, 35);
    ctx.fillStyle = color;
    ctx.fillText(glyph, 32, 35);
    sp.material.map.needsUpdate = true;
}
const npcs = NPC_DEFS.map(d => {
    const obj = makeRoman(d);
    const y = groundHeight(d.x, d.z);
    obj.position.set(d.x, y, d.z);
    obj.rotation.y = d.ry || 0;
    scene.add(obj);
    const ind = indicatorSprite();
    ind.position.set(d.x, y + 3.0, d.z);
    scene.add(ind);
    addCircle(d.x, d.z, 0.75);
    return Object.assign({}, d, { obj, ind, baseY: y, bob: Math.random() * 6 });
});
function laurelCount() {
    return NPC_DEFS.filter(n => !n.final && save.quests[n.id] && save.quests[n.id].stars > 0).length;
}
function refreshIndicators() {
    for (const n of npcs) {
        const st = save.quests[n.id];
        if (n.final) {
            if (save.final) setIndicator(n.ind, '👑', '#f5c842');
            else if (laurelCount() >= 10) setIndicator(n.ind, '?', '#c9a2f0');
            else setIndicator(n.ind, '🔒', '#cfd4dc');
        } else if (st && st.stars > 0) {
            setIndicator(n.ind, '★', '#f5c842');
        } else {
            setIndicator(n.ind, '!', '#f5c842');
        }
    }
}
refreshIndicators();

// ---------- Animals ----------
const animals = [];
function placeAnimal(name, x, z, { h = 2, r = 7, speed = 1.1 } = {}) {
    loadModel(name).then(g => {
        const m = g.scene.clone(true);
        const bb = new THREE.Box3().setFromObject(m);
        const size = bb.getSize(new THREE.Vector3());
        m.scale.setScalar(h / size.y);
        const bb2 = new THREE.Box3().setFromObject(m);
        m.position.set(x, -bb2.min.y, z);
        scene.add(m);
        let mixer = null;
        if (g.animations && g.animations.length) {
            mixer = new THREE.AnimationMixer(m);
            const idle = g.animations.find(c => /idle|walk/i.test(c.name)) || g.animations[0];
            mixer.clipAction(idle).play();
        }
        animals.push({ key: name.replace('.glb', ''), obj: m, mixer, home: { x, z }, r, speed, tx: x, tz: z, wait: Math.random() * 4 });
    }).catch(() => {});
}
placeAnimal('stag.glb', -35, -7, { h: 2.6, r: 6, speed: 1.3 });
placeAnimal('fox.glb', 28, -8, { h: 0.95, r: 8, speed: 1.8 });
placeAnimal('alpaca.glb', -21, 35, { h: 2.1, r: 4, speed: 0.9 });
placeAnimal('bull.glb', -19, 35.5, { h: 1.9, r: 4, speed: 0.7 });
placeAnimal('frog.glb', 36, 14, { h: 0.5, r: 3, speed: 1.6 });

// butterflies over the flower bushes
const butterflies = [];
{
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, -0.22, 0.16, 0, -0.22, -0.12, 0, 0, 0, 0, 0.22, 0.16, 0, 0.22, -0.12, 0], 3));
    geo.computeVertexNormals();
    const colors = [0xf5c842, 0xe87ad1, 0x7ab8e8, 0xf0f0f0];
    const homes = [[-26.5, -17.5], [10.5, -11.5], [-21, 14], [-28, -18]];
    for (let i = 0; i < 7; i++) {
        const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: colors[i % 4], side: THREE.DoubleSide }));
        const h = homes[i % homes.length];
        m.position.set(h[0], 1.6, h[1]);
        scene.add(m);
        butterflies.push({ obj: m, hx: h[0], hz: h[1], t: Math.random() * 20 });
    }
}

// ---------- DOM / HUD ----------
const hudLaurels = document.getElementById('hud-laurels');
const hudXp = document.getElementById('hud-xp');
const hudWords = document.getElementById('hud-words');
const hudLex = document.getElementById('hud-lex');
const promptEl = document.getElementById('prompt');
const promptText = document.getElementById('prompt-text');
const dialogEl = document.getElementById('dialog');
const dlgName = document.getElementById('dlg-name');
const dlgSub = document.getElementById('dlg-sub');
const dlgBody = document.getElementById('dlg-body');
const actionBtn = document.getElementById('action-btn');
const toastEl = document.getElementById('toast');

if (!vocabOK) {
    const p = document.querySelector('#intro .panel p');
    if (p) p.innerHTML = '<b>Sorry — the vocabulary list failed to load.</b> Please refresh the page and try again.';
}
function masteredCount() {
    let n = 0;
    for (const st of wordState.values()) if (isSecure(st)) n++;
    return n;
}
function updateHud() {
    hudLaurels.textContent = laurelCount();
    hudXp.textContent = save.xp;
    hudWords.textContent = masteredCount() + '/' + all.length;
    if (hudLex) hudLex.textContent = save.lexicon.length + '/' + LABELS.length;
    document.getElementById('btn-sound').textContent = save.muted ? '🔇' : '🔊';
}
let toastTimer = null;
function toast(html) {
    if (!toastEl) return;
    toastEl.innerHTML = html;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3400);
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

// ---------- Interaction ----------
function nearestNpc() {
    let best = null, bestD = 3.4;
    for (const n of npcs) {
        const d = Math.hypot(n.x - player.x, n.z - player.z);
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
    if (quiz && quiz.results.length && !quiz.tracked) trackQuestEnd();
    dialogOpen = false;
    quiz = null;
    dialogEl.classList.remove('open');
}
document.getElementById('dlg-close').addEventListener('click', closeDialog);

function startQuiz(npc) {
    const pool = npc.final ? all : pools[npc.chapter] || [];
    if (pool.length < 4) { closeDialog(); return; }
    const target = npc.final ? 12 : 8;
    const words = pickWords(pool, wordState, npc.final ? 15 : 8);
    quiz = { npc, pool, target, queue: words.slice(), results: [], correct: 0 };
    trackQuestStart();
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
    for (let i = 0; i < q.target; i++) dots.push(`<div class="qdot${i < q.correct ? ' hit' : ''}"></div>`);
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
        q.correct++;
        save.xp += 5;
        sfx.correct();
        info.innerHTML = `<b>${w.latin}</b> — ${w.english}` + (w.info ? `<br>${w.info}` : '');
    } else {
        sfx.wrong();
        info.innerHTML = `<b>${w.latin}</b> means <b>${w.english}</b>.` + (w.info ? `<br>${w.info}` : '');
        if (!q.npc.final) q.queue.splice(Math.min(2, q.queue.length), 0, w);
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
    trackQuestEnd();
    if (npc.final) {
        if (q.correct >= q.target) {
            const first = !save.final;
            save.final = true;
            save.xp += first ? 150 : 30;
            persist(); updateHud(); refreshIndicators();
            sfx.victory();
            closeDialog();
            document.getElementById('victory-text').innerHTML =
                `You answered <b>${q.correct}</b> of <b>${attempts}</b> in the Sibyl's trial and earned the laurel crown of Parva Roma. ` +
                `Total XP: <b>${save.xp}</b> · Words secure: <b>${masteredCount()}</b>. ` +
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
    persist(); updateHud(); refreshIndicators();
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

// ---------- Movement & collisions ----------
function collide(x, z) {
    for (const c of circles) {
        const dx = x - c.x, dz = z - c.z;
        const d2 = dx * dx + dz * dz;
        const min = c.r + 0.45;
        if (d2 < min * min && d2 > 0.0001) {
            const d = Math.sqrt(d2);
            x = c.x + dx / d * min;
            z = c.z + dz / d * min;
        }
    }
    for (const b of boxes) {
        if (x > b.x1 - 0.45 && x < b.x2 + 0.45 && z > b.z1 - 0.45 && z < b.z2 + 0.45) {
            const pen = [
                { v: x - (b.x1 - 0.45), set: () => { x = b.x1 - 0.45; } },
                { v: (b.x2 + 0.45) - x, set: () => { x = b.x2 + 0.45; } },
                { v: z - (b.z1 - 0.45), set: () => { z = b.z1 - 0.45; } },
                { v: (b.z2 + 0.45) - z, set: () => { z = b.z2 + 0.45; } },
            ];
            pen.sort((a, c2) => a.v - c2.v)[0].set();
        }
    }
    x = Math.max(BOUNDS.x1, Math.min(BOUNDS.x2, x));
    z = Math.max(BOUNDS.z1, Math.min(BOUNDS.z2, z));
    return [x, z];
}

// ---------- Lexicon discovery ----------
function checkLabels() {
    for (const L of LABELS) {
        if (L.follow) {
            const a = animals.find(an => an.key === L.follow);
            if (a) {
                L.x = a.obj.position.x; L.z = a.obj.position.z;
                L.sprite.position.x = L.x;
                L.sprite.position.z = L.z;
                L.sprite.position.y = a.obj.position.y + 1.6;
            }
        }
        const d = Math.hypot(L.x - player.x, L.z - player.z);
        const target = d < (L.dy ? 7 : 4.5) ? 1 : 0;
        const m = L.sprite.material;
        m.opacity += (target - m.opacity) * 0.12;
        if (target === 1 && !save.lexicon.includes(L.latin)) {
            save.lexicon.push(L.latin);
            save.xp += 3;
            persist();
            updateHud();
            sfx.discover();
            const g = L.gcse ? gloss(L.latin, '') : (L.gloss || '');
            toast(`📖 <b>novum verbum!</b> <em>${L.latin}</em> — ${g}${L.note ? ' · ' + L.note : ''} <span style="opacity:0.7">(+3 XP)</span>`);
            L.sprite.material.map = labelSprite(L.latin, true).material.map;
        }
    }
}

// ---------- Game loop ----------
const clock = new THREE.Clock();
const camTarget = new THREE.Vector3();
let camX = player.x, camZ = player.z + 14;

function update(dt, t) {
    // player
    let dx = 0, dz = 0;
    if (!dialogOpen) {
        if (keys['w'] || keys['arrowup']) dz -= 1;
        if (keys['s'] || keys['arrowdown']) dz += 1;
        if (keys['a'] || keys['arrowleft']) dx -= 1;
        if (keys['d'] || keys['arrowright']) dx += 1;
        dx += joyVec.x; dz += joyVec.y;
    }
    const len = Math.hypot(dx, dz);
    player.moving = len > 0.01;
    if (player.moving) {
        dx /= Math.max(len, 1); dz /= Math.max(len, 1);
        let nx = player.x + dx * player.speed * dt;
        let nz = player.z + dz * player.speed * dt;
        [nx, nz] = collide(nx, nz);
        player.x = nx; player.z = nz;
        const targetRy = Math.atan2(dx, dz);
        let dr = targetRy - player.ry;
        while (dr > Math.PI) dr -= Math.PI * 2;
        while (dr < -Math.PI) dr += Math.PI * 2;
        player.ry += dr * Math.min(1, dt * 14);
        player.walkT += dt * 10;
    }
    const py = groundHeight(player.x, player.z);
    player.obj.position.set(player.x, py + (player.moving ? Math.abs(Math.sin(player.walkT)) * 0.14 : 0), player.z);
    player.obj.rotation.y = player.ry;
    player.obj.rotation.z = player.moving ? Math.sin(player.walkT) * 0.05 : 0;
    const fl = player.obj.userData.footL, fr = player.obj.userData.footR;
    if (fl && fr) {
        const sw = player.moving ? Math.sin(player.walkT) * 0.28 : 0;
        fl.position.z = 0.05 + sw;
        fr.position.z = 0.05 - sw;
        const aL = player.obj.userData.armL, aR = player.obj.userData.armR;
        if (aL && aR) { aL.rotation.x = -sw * 1.4; aR.rotation.x = sw * 1.4; }
    }

    // camera: cosy follow from the south
    camX += (player.x - camX) * Math.min(1, dt * 3);
    camZ += (player.z - camZ) * Math.min(1, dt * 3);
    camera.position.set(camX, py + 11.5, camZ + 13.5);
    camTarget.set(camX, py + 1.6, camZ - 2.5);
    camera.lookAt(camTarget);

    // NPCs: idle bob, face the player when close
    for (const n of npcs) {
        const d = Math.hypot(n.x - player.x, n.z - player.z);
        if (d < 6) {
            const target = Math.atan2(player.x - n.x, player.z - n.z);
            let dr = target - n.obj.rotation.y;
            while (dr > Math.PI) dr -= Math.PI * 2;
            while (dr < -Math.PI) dr += Math.PI * 2;
            n.obj.rotation.y += dr * Math.min(1, dt * 6);
        }
        n.ind.position.y = n.baseY + 3.0 + Math.sin(t * 2 + n.bob) * 0.12;
        n.obj.position.y = n.baseY + Math.sin(t * 1.6 + n.bob) * 0.03;
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

    // animals wander
    for (const a of animals) {
        if (a.mixer) a.mixer.update(dt);
        a.wait -= dt;
        const dxa = a.tx - a.obj.position.x, dza = a.tz - a.obj.position.z;
        const da = Math.hypot(dxa, dza);
        if (da > 0.3) {
            a.obj.position.x += dxa / da * a.speed * dt;
            a.obj.position.z += dza / da * a.speed * dt;
            a.obj.rotation.y = Math.atan2(dxa, dza);
        } else if (a.wait <= 0) {
            const ang = Math.random() * Math.PI * 2;
            a.tx = a.home.x + Math.cos(ang) * Math.random() * a.r;
            a.tz = a.home.z + Math.sin(ang) * Math.random() * a.r;
            a.wait = 2 + Math.random() * 5;
        }
    }

    // butterflies
    for (const b of butterflies) {
        b.t += dt;
        b.obj.position.x = b.hx + Math.sin(b.t * 0.7) * 2.2;
        b.obj.position.z = b.hz + Math.cos(b.t * 0.53) * 2.2;
        b.obj.position.y = 1.5 + Math.sin(b.t * 1.7) * 0.5;
        b.obj.rotation.y = b.t * 0.8;
        b.obj.scale.x = 0.7 + Math.abs(Math.sin(b.t * 14)) * 0.5;
    }

    checkLabels();
}

let acc = 0;
renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    acc += dt;
    update(dt, acc);
    renderer.render(scene, camera);
    if (!window.__ready) {
        window.__ready = true;
    }
});

// debug hooks for automated testing
window.__game = {
    sceneDump(cx, cz, r) {
        const out = [];
        for (const o of scene.children) {
            const p = o.position;
            if (cx != null && Math.hypot(p.x - cx, p.z - cz) > r) continue;
            const bb = new THREE.Box3().setFromObject(o);
            const sz = bb.getSize(new THREE.Vector3());
            out.push({ type: o.type, x: +p.x.toFixed(1), y: +p.y.toFixed(1), z: +p.z.toFixed(1),
                       w: +sz.x.toFixed(1), h: +sz.y.toFixed(1), d: +sz.z.toFixed(1) });
        }
        return out;
    },
    teleport(x, z) { player.x = x; player.z = z; camX = x; camZ = z; },
    pos: () => [player.x, player.z],
    laurels: laurelCount,
    npcs: NPC_DEFS.map(n => ({ id: n.id, x: n.x, z: n.z })),
};
})();
