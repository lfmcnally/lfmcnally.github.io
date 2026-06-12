// ============================================================
// LATIN QUEST 3D — Chapter I: Lost in Time
// ============================================================
// You're a modern student flung back in time to a little Roman
// town. A cosy story chapter: no quizzes, no fighting — explore,
// talk, help people, and piece together WHERE and WHEN you are.
// Latin is the texture of the world: things carry their Latin
// names, and your Lexicon collects every word you discover.
//
// Vocabulary: version2/tools/vocab/data/latin-gcse.js
// Tracking:   shared v2 bkt-store (vocab_bkt) + vocab_sessions;
//             recall is recorded on in-story choices (picking the
//             right labelled crate, solving the clue scroll)
// Art:        CC0 (KayKit, Quaternius, ambientCG, Poly Haven) —
//             see assets3d/CREDITS.txt
import * as THREE from 'three';
import { GLTFLoader } from './lib/GLTFLoader.js';
import { RGBELoader } from './lib/RGBELoader.js';
import { MeshoptDecoder } from './lib/meshopt_decoder.module.js';

(function () {
'use strict';
const { buildPools } = window.VocabCore;

// ---------- Save ----------
const SAVE_KEY = 'latinQuestSave';
function loadSave() {
    try {
        const s = JSON.parse(localStorage.getItem(SAVE_KEY));
        if (s && typeof s === 'object') {
            return Object.assign({ xp: 0, muted: false, seenIntro: false, lexicon: [], ch1: { step: 0, sub: {}, done: false } }, s);
        }
    } catch (e) { /* corrupt save: start fresh */ }
    return { xp: 0, muted: false, seenIntro: false, lexicon: [], ch1: { step: 0, sub: {}, done: false } };
}
const save = loadSave();
if (!Array.isArray(save.lexicon)) save.lexicon = [];
if (!save.ch1 || typeof save.ch1 !== 'object') save.ch1 = { step: 0, sub: {}, done: false };
if (!save.ch1.sub) save.ch1.sub = {};
function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* full/blocked */ } }

// ---------- Vocabulary ----------
const vocabOK = typeof VOCAB_LATIN_GCSE !== 'undefined' && Array.isArray(VOCAB_LATIN_GCSE) && VOCAB_LATIN_GCSE.length > 0;
const { all } = vocabOK ? buildPools(VOCAB_LATIN_GCSE) : { all: [] };
const vocabByLatin = new Map(all.map(w => [w.latin, w]));
function gloss(latin, fallback) {
    const w = vocabByLatin.get(latin);
    return w ? w.english : (fallback || '');
}

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

// Recall events from in-story choices use the tester's exact bktUpdate.
function bktAnswer(latin, right) {
    if (!vocabByLatin.has(latin)) return;
    const st = stateFor(latin);
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
    if (store) store.update(latin, {
        p_know: st.pKnow, trials: st.trials, correct: st.correct,
        distinct_correct_days: st.distinctCorrectDays | 0,
        last_correct_date: st.lastCorrectDate || null,
        next_review_at: st.nextReviewAt || null,
        review_interval_days: st.reviewIntervalDays || null,
    });
}

// One vocab_sessions row per chapter playthrough, debounced updates.
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
function sessionStart() { if (!sessionLog) sessionLog = { id: null, answered: 0, correct: 0, busy: false, dirty: false }; }
function sessionRecord(latin, right) {
    bktAnswer(latin, right);
    if (!sessionLog) return;
    sessionLog.answered++;
    if (right) sessionLog.correct++;
    clearTimeout(sessionTimer);
    const log = sessionLog;
    sessionTimer = setTimeout(() => flushLog(log), 1200);
}
function sessionEnd() {
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
    yes: () => { beep(660, 0.12, 'sine'); beep(880, 0.18, 'sine', 0.1); },
    no: () => beep(170, 0.25, 'sawtooth', 0, 0.08),
    victory: () => { [523, 659, 784, 880, 1047, 1319].forEach((f, i) => beep(f, 0.2, 'sine', i * 0.13)); },
    discover: () => { beep(784, 0.1, 'triangle'); beep(1175, 0.22, 'triangle', 0.09); },
    pick: () => beep(990, 0.09, 'triangle', 0, 0.09),
    dig: () => { beep(140, 0.12, 'square', 0, 0.06); beep(120, 0.12, 'square', 0.13, 0.06); },
    whoosh: () => { beep(220, 0.5, 'sine', 0, 0.05); beep(330, 0.5, 'sine', 0.1, 0.05); beep(495, 0.6, 'sine', 0.2, 0.05); },
};

// ---------- The townsfolk ----------
const NPC_DEFS = [
    { id: 'titus', name: 'Titus', title: 'the Senator', x: 5.5, z: 1.5, ry: -2.6,
      tunic: 0xece8df, trim: 0x9c2f2f, hair: 0xb8b2a6, skin: 0xdca87a, acc: 'wreath' },
    { id: 'livia', name: 'Livia', title: 'the Baker', x: -17.5, z: 7.5, ry: 1.2,
      tunic: 0xb8543e, trim: 0x8c3a2c, hair: 0x2e2018, skin: 0xe8b48a, acc: 'long' },
    { id: 'marcus', name: 'Marcus', title: 'the Farmer', x: -19, z: 26, ry: 0.6,
      tunic: 0xa4763d, trim: 0x7c5527, hair: 0x4a3220, skin: 0xd9a06b, acc: 'strawhat' },
    { id: 'gaia', name: 'Magistra Gaia', title: 'the Teacher', x: 18.5, z: 3, ry: -1.0,
      tunic: 0x3e5a8c, trim: 0x2c4066, hair: 0x4a3220, skin: 0xe8b48a, acc: 'long' },
    { id: 'quintus', name: 'Quintus', title: 'the Merchant', x: 32, z: 7, ry: -1.4,
      tunic: 0x3e7d8c, trim: 0x2c5a66, hair: 0x1f1a14, skin: 0xc98e5a, acc: 'none' },
    { id: 'aurelia', name: 'Aurelia', title: 'the Priestess', x: -4, z: -10.5, ry: 2.6,
      tunic: 0xe8e0d0, trim: 0xc9b88a, hair: 0x5a4632, skin: 0xe8b48a, acc: 'veil' },
    { id: 'sibyl', name: 'the Sibyl', title: 'Oracle of Parva Roma', x: 0, z: -19.5, ry: Math.PI,
      tunic: 0x2c3e50, trim: 0xf5c842, hair: 0xe8e0d0, skin: 0xdca87a, acc: 'veil' },
    { id: 'camilla', name: 'Camilla', title: 'the Poet', x: -26.5, z: -18, ry: 0.9,
      tunic: 0x7d5e9c, trim: 0x5a4273, hair: 0x3e2c1c, skin: 0xe8b48a, acc: 'long' },
    { id: 'drusilla', name: 'Drusilla', title: 'the Healer', x: -30, z: -7, ry: 1.8,
      tunic: 0x5e8c52, trim: 0x436339, hair: 0x8c8478, skin: 0xdca87a, acc: 'long' },
    { id: 'felix', name: 'Felix', title: 'the Gladiator', x: 20, z: 26, ry: -0.8,
      tunic: 0x8c4a3e, trim: 0x5e2f27, hair: 0x171310, skin: 0xb87e4e, acc: 'helmet' },
    { id: 'septimus', name: 'Septimus', title: 'the Soldier', x: 38, z: 10, ry: -1.6,
      tunic: 0x9c2f2f, trim: 0x6e1f1f, hair: 0x2e2018, skin: 0xd9a06b, acc: 'helmet' },
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
const hemi = new THREE.HemisphereLight(0xcfe5ff, 0xa3b86e, 0.5);
scene.add(hemi);

// Day -> dusk -> night, driven by the story (phase 0 / 1 / 2)
const SKY = [
    { bg: 0x9ed2f0, fog: 0xbfe0ee, sun: 0xfff2d8, sunI: 2.2, hemiI: 0.5, exp: 1.12, sunPos: [30, 42, 20] },
    { bg: 0xf0b98a, fog: 0xe8c49e, sun: 0xffc27d, sunI: 1.5, hemiI: 0.38, exp: 1.05, sunPos: [38, 14, 26] },
    { bg: 0x141d33, fog: 0x1b2742, sun: 0x9db4e8, sunI: 0.35, hemiI: 0.18, exp: 1.0, sunPos: [-20, 30, -25] },
];
let skyPhase = 0, skyCurrent = 0;
const _c1 = new THREE.Color(), _c2 = new THREE.Color();
function applySky(t) {
    const i = Math.max(0, Math.min(Math.floor(t), SKY.length - 2));
    const f = Math.max(0, Math.min(t - i, 1));
    const a = SKY[i], b = SKY[i + 1];
    scene.background.copy(_c1.setHex(a.bg).lerp(_c2.setHex(b.bg), f));
    scene.fog.color.copy(_c1.setHex(a.fog).lerp(_c2.setHex(b.fog), f));
    sun.color.copy(_c1.setHex(a.sun).lerp(_c2.setHex(b.sun), f));
    sun.intensity = a.sunI + (b.sunI - a.sunI) * f;
    hemi.intensity = a.hemiI + (b.hemiI - a.hemiI) * f;
    renderer.toneMappingExposure = a.exp + (b.exp - a.exp) * f;
    sun.position.set(
        a.sunPos[0] + (b.sunPos[0] - a.sunPos[0]) * f,
        a.sunPos[1] + (b.sunPos[1] - a.sunPos[1]) * f,
        a.sunPos[2] + (b.sunPos[2] - a.sunPos[2]) * f,
    );
}

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

const plaza = new THREE.Mesh(new THREE.CylinderGeometry(19, 19, 0.5, 40), new THREE.MeshStandardMaterial({
    map: tiledTexture('assets3d/PavingStones046_Color.jpg', 9),
    color: 0xe8ddc4,
    roughness: 0.95,
}));
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
}
path(0, -8, 0, -13, 5);
path(-13, 13, -19, 24, 3.4);
path(13, 13, 20, 23, 3.4);
path(17, 6, 31, 5, 3.4);
path(-16, 8, -26, -3, 3.4);

// ---------- Colliders & walkable heights ----------
const circles = [];
const boxes = [];
const addCircle = (x, z, r) => circles.push({ x, z, r });
const addBox = (x1, z1, x2, z2) => boxes.push({ x1: Math.min(x1, x2), z1: Math.min(z1, z2), x2: Math.max(x1, x2), z2: Math.max(z1, z2) });

const POD = { x1: -12, z1: -31, x2: 12, z2: -17, top: 3.0 };
const STEPS = { x1: -4, z1: -17, x2: 4, z2: -12.5 };
function groundHeight(x, z) {
    if (x >= POD.x1 && x <= POD.x2 && z >= POD.z1 && z <= POD.z2) return POD.top;
    if (x >= STEPS.x1 && x <= STEPS.x2 && z >= STEPS.z1 && z <= STEPS.z2) {
        return POD.top * (STEPS.z2 - z) / (STEPS.z2 - STEPS.z1);
    }
    if (x >= 35.4 && x <= 44.6 && z >= 1 && z <= 8) return 0.45;
    return 0;
}
addBox(POD.x1 - 0.8, POD.z1 - 0.8, POD.x1, POD.z2 + 0.4);
addBox(POD.x2, POD.z1 - 0.8, POD.x2 + 0.8, POD.z2 + 0.4);
addBox(POD.x1, POD.z1 - 0.8, POD.x2, POD.z1);
addBox(POD.x1 - 0.8, POD.z2, STEPS.x1, POD.z2 + 0.8);
addBox(STEPS.x2, POD.z2, POD.x2 + 0.8, POD.z2 + 0.8);
addBox(STEPS.x1 - 0.7, STEPS.z1, STEPS.x1, STEPS.z2);
addBox(STEPS.x2, STEPS.z1, STEPS.x2 + 0.7, STEPS.z2);
addBox(36, -70, 44, 1);
addBox(36, 8, 44, 70);
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
    box3(1.5, 2.6, 0.25, flat(0x6e4a26), -w * 0.18, 1.3, d / 2 + 0.1, g);
    box3(1.3, 1.1, 0.2, flat(0x37506e), w * 0.22, h * 0.58, d / 2 + 0.1, g);
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

// ---------- Model loading ----------
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
// Models are wrapped in a container group and re-centred on their own
// bounding box — several source GLBs were exported off-centre, which
// otherwise renders them far from where they are placed.
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
        const c = bb2.getCenter(new THREE.Vector3());
        const wrap = new THREE.Group();
        m.position.set(-c.x, -bb2.min.y, -c.z);
        wrap.add(m);
        wrap.position.set(x, (y == null ? groundHeight(x, z) : y), z);
        wrap.rotation.y = ry;
        scene.add(wrap);
        return wrap;
    }).catch(e => console.warn('model failed:', name, e && e.message));
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
    addBox(-7.6, -29.6, 7.6, -20.4);
    box3(22.6, 1.2, 13.4, flat(0xefe8d4, 0.8), 0, styloY + COLH + 0.6, 0, t);
    const pedi = new THREE.Mesh(prismGeo(14, 2.9, 23.2), flat(0xf2ecda, 0.8));
    pedi.position.set(0, styloY + COLH + 1.2, 0); pedi.rotation.y = Math.PI / 2;
    pedi.castShadow = true; t.add(pedi);
    const roof = new THREE.Mesh(prismGeo(15.2, 3.1, 24.2), flat(0xc06a42, 0.85));
    roof.position.set(0, styloY + COLH + 1.45, 0); roof.rotation.y = Math.PI / 2;
    roof.castShadow = true; t.add(roof);
}

// ---------- Buildings & props ----------
romanBuilding(-23, 5, 0.5, { w: 10, d: 7.5, h: 4.6, awning: 0xc94f3d });
romanBuilding(23.5, 0.5, -0.5, { w: 9.5, d: 7, h: 4.6, wall: 0xddc9a8 });
romanBuilding(-30, -24, 0.8, { w: 12, d: 8.5, h: 5.2 });
romanBuilding(-26, 33, 0.2, { w: 7.5, d: 6, h: 3.8, wall: 0xddc9a8 });

placeModel('well.glb', 0, 7.5, { h: 3.2, ry: 0.3, collide: 1.6 });
placeModel('market_stand_1.glb', -8.5, 13.5, { h: 3.5, ry: 0.55, collide: 2.0 });
placeModel('market_stand_2.glb', 9.5, 12.5, { h: 3.5, ry: -0.5, collide: 2.0 });
placeModel('statue_block.glb', 7, -6.5, { h: 3.0, ry: -0.4, collide: 1.3, marble: true });
placeModel('cart.glb', -13, 9.5, { h: 2.4, ry: 1.3, collide: 1.8 });
placeModel('barrel.glb', -11.4, 7.6, { h: 1.3, collide: 0.8 });
placeModel('barrel.glb', -12.3, 6.7, { h: 1.3, ry: 1, collide: 0.8 });
placeModel('rowboat.glb', 47, 16, { h: 1.6, ry: 0.7, y: 0.05 });
placeModel('crate_wooden.glb', 50.5, 7, { h: 1.3, collide: 0.9 });
placeModel('barrel.glb', 50.8, 10, { h: 1.3, collide: 0.8 });

{
    const sand = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 6.5, 0.4, 26), flat(0xe3cf9c, 1));
    sand.position.set(20, -0.14, 27);
    sand.receiveShadow = true;
    scene.add(sand);
    placeModel('crate_wooden.glb', 14.5, 23.5, { h: 1.3, ry: 0.4, collide: 0.9 });
    placeModel('barrel.glb', 26, 30.5, { h: 1.3, collide: 0.8 });
}
{
    for (let r = 0; r < 4; r++) {
        box3(11, 0.5, 1.5, flat(0xa87c4f, 1), -15, 0.25, 29 + r * 2.6);
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
{
    for (let i = 0; i < 4; i++) placeModel('fence.glb', -30 + i * 2.9, -13.5, { h: 1.5 });
    placeModel('bush_flowers.glb', -29, -17, { h: 1.5, collide: 1.0 });
    placeModel('bush_flowers.glb', -24.5, -15.5, { h: 1.5, ry: 1.2, collide: 1.0 });
    placeModel('bush_flowers.glb', -27, -20.5, { h: 1.4, ry: 2.2, collide: 1.0 });
}

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
    placeModel(['oak_1.glb', 'oak_2.glb', 'pine_1.glb', 'oak_3.glb'][i % 4], Math.cos(a) * r, Math.sin(a) * r + 4, { h: 9 + (i % 4) * 1.5, ry: i });
}
placeModel('bush.glb', -10, -12, { h: 1.7, collide: 1.0 });
placeModel('bush_flowers.glb', 10.5, -11.5, { h: 1.6, collide: 1.0 });
placeModel('bush_flowers.glb', -21, 14, { h: 1.5, ry: 0.8, collide: 1.0 });
placeModel('bush.glb', 24, 8.5, { h: 1.8, collide: 1.0 });
placeModel('rock_2.glb', -41, 9, { h: 1.7, ry: 0.7, collide: 1.4 });
placeModel('rock_2.glb', 33, -16, { h: 1.4, ry: 2.1, collide: 1.2 });

{
    const water = new THREE.Mesh(new THREE.PlaneGeometry(8.6, 130), new THREE.MeshStandardMaterial({
        color: 0x4f9bd8, roughness: 0.25, transparent: true, opacity: 0.88,
    }));
    water.rotation.x = -Math.PI / 2;
    water.position.set(40, 0.06, 4);
    scene.add(water);
    for (const bx of [35.4, 44.6]) {
        const b = box3(1.4, 0.3, 130, flat(0xdcc89a, 1), bx, 0.05, 4);
        b.receiveShadow = true;
    }
    box3(10.6, 0.5, 7, flat(0x9a6b3f, 0.9), 40, 0.45, 4.5).receiveShadow = true;
    for (const rz of [1.2, 7.8]) {
        box3(10.6, 0.9, 0.3, flat(0x7c5430, 0.9), 40, 1.15, rz);
        addBox(34.7, rz - 0.3, 45.3, rz + 0.3);
    }
}

// ---------- The Bay of Naples: Vesuvius and the sea ----------
// The mountain smokes quietly on the horizon (it is AD 78, after all)
const smokePuffs = [];
{
    const mons = new THREE.Mesh(new THREE.ConeGeometry(58, 62, 9), flat(0x6e7488, 1));
    mons.position.set(48, 0, -115);
    scene.add(mons);
    const monsFoot = new THREE.Mesh(new THREE.ConeGeometry(98, 26, 9), flat(0x7c8294, 1));
    monsFoot.position.set(48, 0, -112);
    scene.add(monsFoot);
    for (let i = 0; i < 4; i++) {
        const puff = new THREE.Mesh(new THREE.SphereGeometry(4.5 + i * 2.2, 8, 6),
            new THREE.MeshBasicMaterial({ color: 0xb8bcc8, transparent: true, opacity: 0.5 - i * 0.08, fog: false }));
        puff.position.set(48 + i * 4, 64 + i * 7, -115);
        scene.add(puff);
        smokePuffs.push({ obj: puff, base: 64 + i * 7, ph: i * 1.7 });
    }
    // the sea, far to the east beyond the river
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(420, 480), new THREE.MeshStandardMaterial({
        color: 0x3e7fc4, roughness: 0.3,
    }));
    sea.rotation.x = -Math.PI / 2;
    sea.position.set(300, 0.5, 4);
    scene.add(sea);
}

// ---------- A denser town: more houses, clutter, life ----------
romanBuilding(-36, 12, 1.1, { w: 8, d: 6, h: 4.2, wall: 0xe3d3b4 });
romanBuilding(12, -36, 0.1, { w: 9, d: 6.5, h: 4.4, wall: 0xead9b8 });
romanBuilding(-12, -36, -0.15, { w: 8, d: 6, h: 4.2, wall: 0xddc9a8, awning: 0x3e7d8c });
romanBuilding(33, 20, -0.9, { w: 8.5, d: 6.5, h: 4.3, wall: 0xe8dcc0 });
romanBuilding(8, 34, 0.3, { w: 8, d: 6, h: 4.0, wall: 0xe3d3b4, awning: 0x7a9c4f });

// amphorae (tall two-handled jars), benches, a laundry line
function amphora(x, z, s = 1) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(s);
    scene.add(g);
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 9), flat(0xb5703c, 0.85));
    body.position.y = 0.62; body.scale.y = 1.5; body.castShadow = true;
    g.add(body);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 0.4, 8), flat(0xa3622f, 0.85));
    neck.position.y = 1.35;
    g.add(neck);
    addCircle(x, z, 0.5 * s);
}
amphora(-15.6, 11.2); amphora(-14.8, 12.1, 0.85); amphora(12.2, 11.4); amphora(26.8, 4.2, 0.9);
amphora(-2.2, -12.6, 0.9); amphora(2.2, -12.6, 0.9);
function bench(x, z, ry) {
    const g = new THREE.Group();
    g.position.set(x, 0, z); g.rotation.y = ry;
    scene.add(g);
    box3(2.4, 0.16, 0.8, flat(0xd8d2c4, 0.8), 0, 0.55, 0, g);
    box3(0.5, 0.5, 0.6, flat(0xc9c2b0, 0.8), -0.85, 0.27, 0, g);
    box3(0.5, 0.5, 0.6, flat(0xc9c2b0, 0.8), 0.85, 0.27, 0, g);
    addCircle(x, z, 1.1);
}
bench(-6.5, 0, 0.5); bench(13.2, 0.5, -0.6); bench(2, 12.8, 0);
{   // laundry line behind the bakery
    const p1 = [-27.5, 11.5], p2 = [-20.5, 13.5];
    box3(0.12, 2.6, 0.12, flat(0x7c5430, 0.9), p1[0], 1.3, p1[1]);
    box3(0.12, 2.6, 0.12, flat(0x7c5430, 0.9), p2[0], 1.3, p2[1]);
    const colors = [0xc94f3d, 0xe8e0d0, 0x7a9c4f, 0x5e7ba0];
    for (let i = 0; i < 4; i++) {
        const f = 0.15 + i * 0.23;
        const cloth = box3(1.1, 0.9, 0.04, flat(colors[i], 0.95),
            p1[0] + (p2[0] - p1[0]) * f, 1.9, p1[1] + (p2[1] - p1[1]) * f);
        cloth.rotation.y = Math.atan2(p2[0] - p1[0], p2[1] - p1[1]) + Math.PI / 2;
    }
}

// villagers and children strolling about
const wanderers = [];
function villager(cfg, x, z, r, speed, scale = 1) {
    const obj = makeRoman(cfg);
    obj.scale.setScalar(scale);
    obj.position.set(x, 0, z);
    scene.add(obj);
    wanderers.push({ obj, home: { x, z }, r, speed, tx: x, tz: z, wait: Math.random() * 4, walkT: Math.random() * 7, scale });
}
villager({ tunic: 0x8aa0b8, trim: 0x5e7488, hair: 0x2e2018, skin: 0xd9a06b, acc: 'none' }, -4, 5, 9, 1.6);
villager({ tunic: 0xc9b27a, trim: 0x9c8650, hair: 0x6e5538, skin: 0xe8b48a, acc: 'long' }, 8, 7, 9, 1.4);
villager({ tunic: 0xa0b88a, trim: 0x748858, hair: 0x4a3220, skin: 0xe0a878, acc: 'none' }, -3, 13, 7, 2.6, 0.62);
villager({ tunic: 0xb88aa0, trim: 0x885e74, hair: 0x2e2018, skin: 0xe8b48a, acc: 'long' }, 4, 14, 7, 2.8, 0.58);

// ---------- World labels (ambient Lexicon) ----------
const LABELS = [
    { latin: 'aqua', x: 0, z: 7.5 },
    { latin: 'flumen', x: 40, z: 12 },
    { latin: 'templum', x: 0, z: -14, dy: 4 },
    { latin: 'dea', x: 7, z: -6.5 },
    { latin: 'via', x: 0, z: -9.5 },
    { latin: 'silva', x: -34, z: -8, dy: 4 },
    { latin: 'ager', x: -15, z: 31 },
    { latin: 'hortus', x: -26.5, z: -17 },
    { latin: 'navis', x: 47, z: 16 },
    { latin: 'taberna', x: -8.5, z: 13.5 },
    { latin: 'villa', x: -30, z: -24, dy: 4.5 },
    { latin: 'cibus', x: 9.5, z: 12.5 },
    { latin: 'porta', x: 40, z: 4.5 },
    { latin: 'arbor', x: -16, z: -14, gloss: 'tree (bonus word)', dy: 5 },
    { latin: 'cervus', x: -35, z: -7, gloss: 'deer (bonus word)', follow: 'stag' },
    { latin: 'vulpes', x: 28, z: -8, gloss: 'fox (bonus word)', follow: 'fox' },
    { latin: 'bos', x: -19, z: 35, gloss: 'ox (bonus word)', follow: 'bull' },
];
function textSprite(text, opts = {}) {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 80;
    const ctx = c.getContext('2d');
    ctx.font = 'italic 700 44px Lora, Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const w = Math.min(244, ctx.measureText(text).width + 36);
    ctx.fillStyle = opts.dim ? 'rgba(30,26,16,0.72)' : 'rgba(58,44,10,0.85)';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(128 - w / 2, 8, w, 64, 16);
    else ctx.rect(128 - w / 2, 8, w, 64);
    ctx.fill();
    ctx.strokeStyle = opts.dim ? 'rgba(245,200,66,0.45)' : '#f5c842';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = opts.dim ? '#e8dcb0' : '#ffe9a8';
    ctx.fillText(text, 128, 41);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
    sp.scale.set(opts.s || 4.6, (opts.s || 4.6) * 0.315, 1);
    return sp;
}
for (const L of LABELS) {
    L.sprite = textSprite(L.latin, { dim: save.lexicon.includes(L.latin) });
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
        const foot = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), flat(o.foot || 0x7c5430, 0.9));
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
    if (o.acc === 'cap') {   // a very anachronistic baseball cap
        const dome = new THREE.Mesh(new THREE.SphereGeometry(0.45, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.42), flat(0xc0392b, 0.8));
        dome.position.y = 2.0;
        g.add(dome);
        const brim = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.34), flat(0xa83226, 0.8));
        brim.position.set(0, 2.06, 0.46);
        g.add(brim);
    }
    return g;
}

// You arrive in your modern clothes (hoodie, trainers, baseball cap);
// Livia's quest earns you a proper tunic.
const OUTFITS = {
    modern: { tunic: 0x55606e, trim: 0x3b434e, hair: 0x3e2c1c, skin: 0xe0a878, acc: 'cap', foot: 0xf0f0f0 },
    roman: { tunic: 0xc9a23e, trim: 0x9c7a26, hair: 0x3e2c1c, skin: 0xe0a878, acc: 'none' },
};
const player = {
    obj: null,
    x: -14, z: -10, ry: 2.4, speed: 7.2, moving: false, walkT: 0,
};
function setOutfit(name) {
    const ry = player.obj ? player.obj.rotation.y : player.ry;
    if (player.obj) scene.remove(player.obj);
    player.obj = makeRoman(OUTFITS[name]);
    player.obj.position.set(player.x, groundHeight(player.x, player.z), player.z);
    player.obj.rotation.y = ry;
    scene.add(player.obj);
}
setOutfit(save.ch1.sub.tunic ? 'roman' : 'modern');

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
    if (glyph) {
        ctx.font = '700 46px Inter, sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.lineWidth = 7; ctx.strokeStyle = 'rgba(20,16,8,0.75)';
        ctx.strokeText(glyph, 32, 35);
        ctx.fillStyle = color || '#f5c842';
        ctx.fillText(glyph, 32, 35);
    }
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
const npcById = new Map(npcs.map(n => [n.id, n]));

// ---------- Animals ----------
const HERD_KEYS = ['alpaca', 'bull', 'frog'];
const animals = [];
function placeAnimal(name, x, z, { h = 2, r = 7, speed = 1.1 } = {}) {
    loadModel(name).then(g => {
        const inner = g.scene.clone(true);
        const bb = new THREE.Box3().setFromObject(inner);
        const size = bb.getSize(new THREE.Vector3());
        inner.scale.setScalar(h / size.y);
        const bb2 = new THREE.Box3().setFromObject(inner);
        const c = bb2.getCenter(new THREE.Vector3());
        const m = new THREE.Group();
        inner.position.set(-c.x, -bb2.min.y, -c.z);
        m.add(inner);
        m.position.set(x, 0, z);
        scene.add(m);
        // No AnimationMixer at all: on some hardware the skinned clips'
        // root motion teleported every creature to the world origin.
        // Life comes from procedural bobbing + wandering instead.
        const mixer = null;
        const a = { key: name.replace('.glb', ''), obj: m, mixer, home: { x, z }, r, speed, tx: x, tz: z, wait: Math.random() * 4, herd: false, penned: false, baseY: 0 };
        animals.push(a);
        if (save.ch1.step === 3 && HERD_KEYS.includes(a.key) && !save.ch1.sub.herded) scatterOne(a);
    }).catch(() => {});
}
placeAnimal('stag.glb', -35, -7, { h: 2.6, r: 6, speed: 1.3 });
placeAnimal('fox.glb', 28, -8, { h: 0.95, r: 8, speed: 1.8 });
placeAnimal('alpaca.glb', -21, 35, { h: 2.1, r: 4, speed: 0.9 });
placeAnimal('bull.glb', -19, 35.5, { h: 1.9, r: 4, speed: 0.7 });
placeAnimal('frog.glb', 36, 14, { h: 0.5, r: 3, speed: 1.6 });

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
const hudXp = document.getElementById('hud-xp');
const hudWords = document.getElementById('hud-words');
const hudLex = document.getElementById('hud-lex');
const hudQuest = document.getElementById('hud-quest');
const promptEl = document.getElementById('prompt');
const promptText = document.getElementById('prompt-text');
const dialogEl = document.getElementById('dialog');
const dlgName = document.getElementById('dlg-name');
const dlgSub = document.getElementById('dlg-sub');
const dlgBody = document.getElementById('dlg-body');
const actionBtn = document.getElementById('action-btn');
const toastEl = document.getElementById('toast');
const banner = document.getElementById('quest-banner');
const bannerText = document.getElementById('quest-banner-text');
const bannerScroll = document.getElementById('quest-banner-scroll');

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
    hudXp.textContent = save.xp;
    hudWords.textContent = masteredCount() + '/' + all.length;
    if (hudLex) hudLex.textContent = save.lexicon.length + '/' + LABELS.length;
    if (hudQuest) hudQuest.textContent = save.ch1.done ? 'Cap. I ✓' : 'Cap. I · ' + Math.min(save.ch1.step + 1, 7) + '/7';
    document.getElementById('btn-sound').textContent = save.muted ? '🔇' : '🔊';
}
let toastTimer = null;
function toast(html, ms = 3400) {
    if (!toastEl) return;
    toastEl.innerHTML = html;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms);
}
document.getElementById('btn-sound').addEventListener('click', () => { save.muted = !save.muted; persist(); updateHud(); });
document.getElementById('btn-help').addEventListener('click', () => document.getElementById('help').classList.add('open'));
document.getElementById('btn-help-close').addEventListener('click', () => document.getElementById('help').classList.remove('open'));
document.getElementById('btn-start').addEventListener('click', () => {
    document.getElementById('intro').classList.remove('open');
    save.seenIntro = true; persist();
    sfx.whoosh();
});
document.getElementById('btn-victory-close').addEventListener('click', () => {
    document.getElementById('victory').classList.remove('open');
    skyPhase = 0;   // a new morning in your new old world
});
const btnReplay = document.getElementById('btn-replay');
if (btnReplay) btnReplay.addEventListener('click', () => {
    save.ch1 = { step: 0, sub: {}, done: false };
    persist();
    location.reload();
});
if (save.seenIntro) document.getElementById('intro').classList.remove('open');
initTracking();

function discover(latin, glossText, note) {
    if (save.lexicon.includes(latin)) return;
    save.lexicon.push(latin);
    save.xp += 3;
    persist();
    updateHud();
    sfx.discover();
    toast(`📖 <b>novum verbum!</b> <em>${latin}</em> — ${glossText}${note ? ' · ' + note : ''} <span style="opacity:0.7">(+3 XP)</span>`);
}

// ============================================================
// CHAPTER I — story engine
// ============================================================
const CH1 = save.ch1;
const interactables = [];
function addInteract(id, x, z, prompt, range, available, action) {
    interactables.push({ id, x, z, prompt, range, available, action });
}

// Golden objective beacons
const beaconMat = new THREE.MeshBasicMaterial({ color: 0xf5c842, transparent: true, opacity: 0.28, depthWrite: false, side: THREE.DoubleSide });
const beacons = [];
function setBeacons(points) {
    for (const b of beacons) scene.remove(b);
    beacons.length = 0;
    for (const [x, z] of points) {
        const m = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.85, 8, 10, 1, true), beaconMat);
        m.position.set(x, groundHeight(x, z) + 4, z);
        scene.add(m);
        beacons.push(m);
    }
}

// Sparkles (dig spots)
const sparkleGroups = [];
function makeSparkle(x, z) {
    const g = new THREE.Group();
    g.position.set(x, groundHeight(x, z), z);
    for (let i = 0; i < 5; i++) {
        const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.09), new THREE.MeshBasicMaterial({ color: 0xfff0a8 }));
        s.userData.phase = i * 1.3;
        g.add(s);
    }
    scene.add(g);
    sparkleGroups.push(g);
    return g;
}
function sparkleTick(t) {
    for (const g of sparkleGroups) {
        if (!g.visible) continue;
        g.children.forEach(s => {
            const p = t * 2 + s.userData.phase;
            s.position.set(Math.sin(p) * 0.5, 0.4 + (p % 2) * 0.5, Math.cos(p * 0.8) * 0.5);
            s.rotation.y = p * 3;
        });
    }
}

// ============ Visual-novel scene player ============
// A scene is an array of entries:
//   { t: 'html' }                     — the NPC speaks
//   { me: 'html' }                    — you speak
//   { who: 'Name', t: 'html' }        — someone else / narration
//   { choice: [{ label, say:[...], xp, flag, then }] } — a decision
//   { do: fn }                        — side effect, auto-advances
let vn = null;
let typeTimer = null;
if (!save.flags || typeof save.flags !== 'object') save.flags = {};
if (!save.amicitia || typeof save.amicitia !== 'object') save.amicitia = {};
function heart(id, name) {
    save.amicitia[id] = (save.amicitia[id] || 0) + 1;
    persist();
    toast(`❤ <b>${name}</b> thinks more of you <span style="opacity:0.7">(amicitia +1)</span>`);
}
function clue(flag, html) {
    if (save.flags[flag]) return;
    save.flags[flag] = true;
    persist();
    sfx.discover();
    setTimeout(() => toast(`🔍 <b>Clue found:</b> ${html}`, 5600), 600);
}
function clueCount() {
    return ['clueLetter', 'clueFigure', 'cluePage', 'clueSmith'].filter(f => save.flags[f]).length;
}

function runScene(npc, lines, onDone) {
    dialogOpen = true;
    vn = { npc, lines: lines.slice(), i: -1, onDone, typing: false };
    dialogEl.classList.add('open');
    document.body.classList.add('vn');
    if (npc) {
        // face each other
        player.ry = Math.atan2(npc.x - player.x, npc.z - player.z);
    }
    sfx.talk();
    advanceScene();
}
function advanceScene() {
    const v = vn;
    if (!v) return;
    v.i++;
    if (v.i >= v.lines.length) { const done = v.onDone; closeDialog(); if (done) done(); return; }
    const L = v.lines[v.i];
    if (L.do) { L.do(); return advanceScene(); }
    if (L.choice) { renderChoice(L.choice); return; }
    renderLine(L);
}
function renderLine(L) {
    const v = vn;
    const who = L.who || (L.me != null ? 'You' : (v.npc ? v.npc.name : ''));
    const sub = (L.me != null || L.who) ? '' : (v.npc ? v.npc.title : '');
    dlgName.textContent = who;
    dlgSub.textContent = sub;
    const html = L.me != null ? L.me : L.t;
    dlgBody.innerHTML = `<div class="dlg-text vn-text"></div><div class="vn-next">▸</div>`;
    const target = dlgBody.querySelector('.vn-text');
    const arrow = dlgBody.querySelector('.vn-next');
    arrow.style.visibility = 'hidden';
    // typewriter over HTML: reveal by walking a detached copy
    const full = html;
    const probe = document.createElement('div');
    probe.innerHTML = full;
    const plain = probe.textContent;
    let n = 0;
    v.typing = true;
    clearInterval(typeTimer);
    typeTimer = setInterval(() => {
        n += 2;
        if (n >= plain.length) {
            clearInterval(typeTimer);
            target.innerHTML = full;
            arrow.style.visibility = 'visible';
            v.typing = false;
            return;
        }
        // cheap reveal: show full HTML but clip via text slice fallback
        target.textContent = plain.slice(0, n);
    }, 16);
}
function finishTyping() {
    const v = vn;
    if (!v) return;
    clearInterval(typeTimer);
    const L = v.lines[v.i];
    const html = L.me != null ? L.me : L.t;
    const target = dlgBody.querySelector('.vn-text');
    if (target) target.innerHTML = html;
    const arrow = dlgBody.querySelector('.vn-next');
    if (arrow) arrow.style.visibility = 'visible';
    v.typing = false;
}
function renderChoice(options) {
    const v = vn;
    dlgName.textContent = 'You';
    dlgSub.textContent = '';
    dlgBody.innerHTML = `<div class="vn-choices">` + options.map((o, i) =>
        `<button class="vn-choice" data-i="${i}">${o.label}</button>`).join('') + `</div>`;
    dlgBody.querySelectorAll('.vn-choice').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const o = options[parseInt(btn.dataset.i, 10)];
            if (o.flag) { save.flags[o.flag] = true; persist(); }
            if (o.heart) { heart(o.heart[0], o.heart[1]); }
            if (o.xp) { save.xp += o.xp; persist(); updateHud(); }
            if (o.say && o.say.length) v.lines.splice(v.i + 1, 0, ...o.say);
            if (o.then) v.lines.splice(v.i + 1 + (o.say ? o.say.length : 0), 0, { do: o.then });
            sfx.pick();
            advanceScene();
        });
    });
}
// click / key advances the scene
dialogEl.addEventListener('click', e => {
    if (!vn) return;
    if (e.target.closest('.vn-choice') || e.target.closest('.dlg-close')) return;
    if (vn.typing) finishTyping();
    else if (!dlgBody.querySelector('.vn-choices')) advanceScene();
});
window.addEventListener('keydown', e => {
    if (!vn || !dialogOpen) return;
    if (e.key === ' ' || e.key === 'Enter' || e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        if (vn.typing) finishTyping();
        else if (!dlgBody.querySelector('.vn-choices')) advanceScene();
    }
});
// legacy one-liner helper for ambient chatter
function say(npc, html, buttonText, onNext) {
    runScene(npc, [{ t: html }], onNext);
}
function closeDialog() {
    dialogOpen = false;
    vn = null;
    clearInterval(typeTimer);
    dialogEl.classList.remove('open');
    document.body.classList.remove('vn');
}
document.getElementById('dlg-close').addEventListener('click', closeDialog);

// ---------- The clue scroll (Quintus' lost cargo) ----------
const scrollEl = document.getElementById('scroll-overlay');
const CLUES = [
    { latin: 'sub arbore magna', english: 'under the great tree', key: 'dig_arbor' },
    { latin: 'prope navem parvam', english: 'near the little boat', key: 'dig_navis' },
    { latin: 'in horto pulchro', english: 'in the beautiful garden', key: 'dig_hortus' },
];
function showScroll() {
    if (!scrollEl) return;
    scrollEl.classList.add('open');
    scrollEl.querySelector('.scroll-clues').innerHTML = CLUES.map((c, i) =>
        `<div class="scroll-clue${CH1.sub[c.key] ? ' found' : ''}" data-i="${i}">
            <span class="scroll-latin">${CH1.sub[c.key] ? '✓ ' : (i + 1) + '. '}<em>${c.latin}</em></span>
            <span class="scroll-gloss">${CH1.sub[c.key] ? c.english : 'tap to translate…'}</span>
        </div>`).join('');
    scrollEl.querySelectorAll('.scroll-clue').forEach(el => {
        el.addEventListener('click', () => {
            const c = CLUES[parseInt(el.dataset.i, 10)];
            el.querySelector('.scroll-gloss').textContent = c.english;
        });
    });
}
function hideScroll() { if (scrollEl) scrollEl.classList.remove('open'); }
if (scrollEl) scrollEl.querySelector('.scroll-close').addEventListener('click', hideScroll);
if (bannerScroll) bannerScroll.addEventListener('click', showScroll);

const INTERLUDES = {
    2: '💭 Food first, mystery later. Your stomach agrees loudly.',
    3: '💭 The bread was the best you\'ve ever tasted. You\'re starting to feel less like a ghost here.',
    4: '💭 The whole town seems to know about you already. A boy points at your amulet and whispers.',
    5: '💭 AD 78. The number sits in your stomach like a stone. Why does that mountain look familiar…?',
    6: '💭 The sun is sinking behind Vesuvius. Time to meet someone who "sees through time".',
};
function setStep(n) {
    CH1.step = n;
    persist();
    updateHud();
    applyStep();
    if (INTERLUDES[n]) setTimeout(() => toast(INTERLUDES[n], 5200), 900);
}
function objective(text, showScrollBtn) {
    if (bannerText) bannerText.innerHTML = text;
    if (banner) banner.style.display = 'flex';
    if (bannerScroll) bannerScroll.style.display = showScrollBtn ? 'inline-flex' : 'none';
}
function npcMark(id) {
    for (const n of npcs) setIndicator(n.ind, n.id === id ? '!' : '', '#f5c842');
}

// ---------- Beat 2: Livia's ingredients (labelled-crate choice) ----------
const crateChoices = [];
function setupCrates() {
    if (crateChoices.length) return;
    const opts = [
        { latin: 'cibus', x: -5.5, z: 16.5, right: true },
        { latin: 'arma', x: -3.4, z: 18.2, right: false },
        { latin: 'donum', x: -7.4, z: 18.6, right: false },
    ];
    for (const o of opts) {
        placeModel('crate_wooden.glb', o.x, o.z, { h: 1.2, ry: Math.random() * 2, collide: 0.8 });
        const lab = textSprite(o.latin, { s: 3.2 });
        lab.position.set(o.x, 1.9, o.z);
        scene.add(lab);
        const choice = Object.assign({ label: lab }, o);
        crateChoices.push(choice);
        addInteract('crate_' + o.latin, o.x, o.z, 'Open the “' + o.latin + '” crate', 2.2,
            () => CH1.step === 2 && !CH1.sub.cibus,
            () => {
                if (o.right) {
                    CH1.sub.cibus = true;
                    sessionRecord('cibus', true);
                    sfx.yes();
                    toast(`🍞 <b>cibus</b> — ${gloss('cibus', 'food')} ✓ That's the one!`);
                    crateChoices.forEach(c => { c.label.visible = false; });
                } else {
                    sessionRecord('cibus', false);
                    sfx.no();
                    toast(`❌ non hoc! <em>${o.latin}</em> means <b>${gloss(o.latin, '')}</b> — Livia asked for <em>cibus</em>!`);
                }
                persist(); liviaObjective();
            });
    }
    crateChoices.forEach(c => { c.label.visible = !CH1.sub.cibus; });
}
function liviaNeedsLeft() {
    return ['aqua', 'cibus', 'vinum'].filter(w => !CH1.sub[w]);
}
function liviaObjective() {
    const left = liviaNeedsLeft();
    if (left.length === 0) {
        objective('🍞 Take everything back to <b>Livia</b>!');
        setBeacons([[npcById.get('livia').x, npcById.get('livia').z]]);
    } else {
        objective('🍞 Gather for Livia: ' + ['aqua', 'cibus', 'vinum'].map(w =>
            CH1.sub[w] ? `<s>${w}</s>` : `<em>${w}</em>`).join(' · '));
        const pts = [];
        if (!CH1.sub.aqua) pts.push([0, 7.5]);
        if (!CH1.sub.cibus) pts.push([-5.5, 16.5]);
        if (!CH1.sub.vinum) pts.push([-11.4, 7.6]);
        setBeacons(pts);
    }
    updateHud();
}
addInteract('well_aqua', 0, 7.5, 'Draw water (aqua)', 2.6,
    () => CH1.step === 2 && !CH1.sub.aqua,
    () => {
        CH1.sub.aqua = true;
        sfx.pick();
        toast(`💧 <b>aqua</b> — ${gloss('aqua', 'water')} ✓`);
        persist(); liviaObjective();
    });
addInteract('barrel_vinum', -11.4, 7.6, 'Take the wine (vinum)', 2.4,
    () => CH1.step === 2 && !CH1.sub.vinum,
    () => {
        CH1.sub.vinum = true;
        sfx.pick();
        toast(`🍷 <b>vinum</b> — ${gloss('vinum', 'wine')} ✓`);
        persist(); liviaObjective();
    });

// ---------- Beat 3: Marcus' escaped animals ----------
const PEN = { x1: -21, z1: 30, x2: -9, z2: 38 };
const SCATTER = { alpaca: [4, 10], bull: [26, 12], frog: [-24, -4] };
function scatterOne(a) {
    a.herd = true;
    a.penned = false;
    const s = SCATTER[a.key];
    a.obj.position.set(s[0], a.baseY, s[1]);
    a.tx = s[0]; a.tz = s[1];
}
function scatterAnimals() {
    for (const a of animals) if (HERD_KEYS.includes(a.key)) scatterOne(a);
}
function pennedCount() { return animals.filter(a => a.herd && a.penned).length; }
function followingCount() { return animals.filter(a => a.following).length; }
function herdObjective() {
    if (CH1.sub.herded || pennedCount() >= 3) {
        objective('🐑 All the animals are home — tell <b>Marcus</b>!');
        setBeacons([[npcById.get('marcus').x, npcById.get('marcus').z]]);
    } else if (!CH1.sub.feed) {
        objective('🐑 Talk to <b>Marcus</b> about his runaway animals');
        setBeacons([[npcById.get('marcus').x, npcById.get('marcus').z]]);
    } else if (followingCount() > 0) {
        objective(`🐑 They're following you! Lead them to the farm pen — <b>${pennedCount()}</b>/3 home`);
        setBeacons([[(PEN.x1 + PEN.x2) / 2, (PEN.z1 + PEN.z2) / 2]]);
    } else {
        objective(`🐑 Offer food to the runaways (walk up & press E): <b>${pennedCount()}</b>/3 home`);
        setBeacons(animals.filter(a => a.herd && !a.penned).map(a => [a.obj.position.x, a.obj.position.z]));
    }
}
// feeding interactables: one per runaway animal (positions sync each frame)
for (const key of HERD_KEYS) {
    addInteract('feed_' + key, 0, 0, 'Offer food to the ' + (key === 'bull' ? 'bos' : key === 'frog' ? 'rana' : 'alpaca'), 2.8,
        () => {
            if (CH1.step !== 3 || !CH1.sub.feed) return false;
            const a = animals.find(an => an.key === key);
            return !!a && a.herd && !a.penned && !a.following;
        },
        () => {
            const a = animals.find(an => an.key === key);
            if (!a) return;
            a.following = true;
            sfx.yes();
            const nm = key === 'bull' ? 'bos' : key === 'frog' ? 'rana' : 'alpaca';
            toast(`🥕 The <b>${nm}</b> sniffs the feed… and trots after you! Lead it to the pen.`);
            herdObjective();
        });
}
function syncFeedInteracts() {
    for (const it of interactables) {
        if (!it.id.startsWith('feed_')) continue;
        const a = animals.find(an => 'feed_' + an.key === it.id);
        if (a) { it.x = a.obj.position.x; it.z = a.obj.position.z; }
    }
}

// ---------- Beat 4: Gaia's windblown pages (WHEN am I?) ----------
const pageObjs = [];
for (const [px, pz] of [[3.5, 6.5], [13, 8.5], [21.5, 9]]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.9), new THREE.MeshStandardMaterial({ color: 0xf5efdc, roughness: 0.8, side: THREE.DoubleSide }));
    m.position.set(px, 0.5, pz);
    m.rotation.set(-1.1, 0.4, 0.2);
    m.castShadow = true;
    m.visible = false;
    scene.add(m);
    const p = { x: px, z: pz, obj: m, got: false };
    pageObjs.push(p);
    addInteract('page_' + px, px, pz, 'Pick up the page', 2.0,
        () => CH1.step === 4 && p.obj.visible && !p.got,
        () => {
            p.got = true;
            p.obj.visible = false;
            sfx.pick();
            const n = pageObjs.filter(q => q.got).length;
            toast(`📄 Page recovered: <b>${n}</b>/3` + (n >= 3 ? ' — back to Magistra Gaia!' : ''));
            if (n >= 3) {
                objective('📄 Return the pages to <b>Magistra Gaia</b> at the school');
                setBeacons([[npcById.get('gaia').x, npcById.get('gaia').z]]);
            } else {
                setBeacons(pageObjs.filter(q => !q.got).map(q => [q.x, q.z]));
            }
        });
}
function pagesGot() { return pageObjs.filter(p => p.got).length; }

// ---------- Beat 5: Quintus' clue-scroll digs (WHERE am I?) ----------
const DIGS = [
    { id: 'dig_arbor', x: -16.5, z: -12.3, item: 'donum', clueWord: null,
      note: 'sub arbore magna — under the great tree' },
    { id: 'dig_navis', x: 48.5, z: 14.2, item: 'pecunia', clueWord: 'navis',
      note: 'prope navem parvam — near the little boat' },
    { id: 'dig_hortus', x: -28.5, z: -18.5, item: 'liber', clueWord: 'hortus',
      note: 'in horto pulchro — in the beautiful garden' },
];
function digsLeft() { return DIGS.filter(d => !CH1.sub[d.id]).length; }
for (const d of DIGS) {
    d.sparkle = makeSparkle(d.x, d.z);
    d.sparkle.visible = false;
    addInteract(d.id, d.x, d.z, 'Dig here!', 2.4,
        () => CH1.step === 5 && CH1.sub.scroll && !CH1.sub[d.id],
        () => {
            CH1.sub[d.id] = true;
            d.sparkle.visible = false;
            sfx.dig();
            setTimeout(() => sfx.yes(), 350);
            if (d.clueWord) sessionRecord(d.clueWord, true);
            toast(`⛏️ You found <b>${d.item}</b> — ${gloss(d.item, '')}! <span style="opacity:0.75">(${d.note})</span>`, 4200);
            persist();
            if (digsLeft() === 0) {
                objective('⛏️ All of the cargo found — back to <b>Quintus</b> at the bridge!');
                setBeacons([[npcById.get('quintus').x, npcById.get('quintus').z]]);
            } else {
                objective(`⛏️ Follow the scroll's Latin clues: <b>${3 - digsLeft()}</b>/3 dug up`, true);
            }
        });
}

// ---------- The night scene with the Sibyl ----------
const nightFx = new THREE.Group();
nightFx.visible = false;
scene.add(nightFx);
{
    const lanternSpots = [[-6, -11, 0], [6, -11, 0], [-11, -20, 3], [11, -20, 3], [-4.8, -17.5, 3], [4.8, -17.5, 3]];
    for (const [lx, lz, ly] of lanternSpots) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 2.6, 6), flat(0x6e4a26, 0.9));
        post.position.set(lx, ly + 1.3, lz);
        nightFx.add(post);
        const orb = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffd887 }));
        orb.position.set(lx, ly + 2.75, lz);
        nightFx.add(orb);
    }
    const l1 = new THREE.PointLight(0xffc878, 30, 42, 1.8);
    l1.position.set(0, 6, -19);
    nightFx.add(l1);
    const starGeo = new THREE.BufferGeometry();
    const starPos = [];
    for (let i = 0; i < 320; i++) {
        const a = Math.random() * Math.PI * 2, r = 140 + Math.random() * 120;
        starPos.push(Math.cos(a) * r, 40 + Math.random() * 130, Math.sin(a) * r);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    nightFx.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xfff6d8, size: 1.6, sizeAttenuation: true, fog: false })));
}

function finaleSibyl() {
    save.ch1.done = true;
    CH1.step = 7;
    persist();
    updateHud();
    sessionEnd();
    sfx.victory();
    npcMark(null);
    objective('🌙 <em>finis capituli primi</em> — explore the night, or rest. Chapter II is coming soon.');
    setBeacons([]);
    if (save.flags.markQuest) spawnMarkDig();
    setTimeout(() => {
        const F = save.flags;
        const told = F.truth ? 'told Titus the <b>truth</b>' : F.lied ? 'told Titus you were from <b>Britannia</b> (he believed you)' : 'told Titus <b>nothing</b>, and let the amulet speak';
        const asked = F.sibylWho ? 'asked the Sibyl <b>who brought you here</b> — the hunt for the smith\'s mark begins'
            : F.sibylMsg ? 'spent your one question on <b>a message home</b>'
            : F.sibylFire ? 'asked about the fire — you alone know <b>August, AD 79</b> is coming'
            : 'faced the Sibyl';
        let bestId = null, bestN = 0;
        for (const [id, n] of Object.entries(save.amicitia)) if (n > bestN) { bestN = n; bestId = id; }
        const bestNpc = bestId ? npcById.get(bestId) : null;
        document.getElementById('victory-text').innerHTML =
            `<b>Your</b> first day in Parva Roma: you ${told}, gathered <b>${clueCount()}/4</b> clues about the hooded stranger, and ${asked}.` +
            (bestNpc ? `<br>Your closest friend in town: <b>${bestNpc.name}</b> ${'❤'.repeat(Math.min(bestN, 3))}` : '') +
            `<br><br>📖 Words discovered: <b>${save.lexicon.length}/${LABELS.length}</b> · ⚡ XP: <b>${save.xp}</b>` +
            `<br><br><em>finis capituli primi</em> — your choices are saved, and Chapter II will remember them.`;
        document.getElementById('victory').classList.add('open');
    }, 1800);
}

// The "who" path's reward: a secret dig behind the villa
let markDigSpawned = false;
function spawnMarkDig() {
    if (markDigSpawned || save.flags.markFound) return;
    markDigSpawned = true;
    const mx = -34, mz = -28.5;
    const sp = makeSparkle(mx, mz);
    sp.visible = true;
    addInteract('mark_dig', mx, mz, 'Dig where the Sibyl said!', 2.6,
        () => save.flags.markQuest && !save.flags.markFound,
        () => {
            save.flags.markFound = true;
            save.xp += 15;
            persist();
            updateHud();
            sp.visible = false;
            sfx.dig();
            setTimeout(() => sfx.discover(), 400);
            toast('⚒️ Buried in a cloth: a bronze token stamped with <b>two crossed hammers under a star</b> — the smith\'s mark. Chapter II begins with this. (+15 XP)', 6500);
        });
}

// ---------- NPC story dialogs (visual-novel scenes) ----------
function npcTalk(npc) {
    const s = CH1.step;
    const F = save.flags;
    switch (npc.id) {
        case 'titus':
            if (s <= 1) {
                runScene(npc, [
                    { t: 'By Jupiter and all his relatives — what <em>are</em> you wearing?!' },
                    { me: '(He\'s staring at your hoodie like it personally insulted him.)' },
                    { t: 'Forgive me. salve, stranger. I am <b>Titus</b>, senator of this town. And you are… lost. Profoundly, historically lost, by the look of you.' },
                    { t: 'Strange. Your words are foreign — yet I understand you perfectly, and you me. The gods are meddling today. So tell me honestly: <b>what are you?</b>' },
                    { choice: [
                        { label: '“I\'m from the future. Two thousand years from now.”', flag: 'truth', xp: 2, heart: ['titus', 'Titus'], say: [
                            { t: '…' },
                            { t: 'Most people open with a false name, you know. Not the collapse of the natural order.' },
                            { t: 'And yet — you don\'t look mad. And <em>that</em> doesn\'t look like a toy.' },
                        ]},
                        { label: '“I\'m a traveller! From… Britannia. Very far Britannia.”', flag: 'lied', say: [
                            { t: 'Britannia! That explains the clothes. Nothing civilised has ever come out of Britannia.' },
                            { me: '(Rude. But the lie seems to be working.)' },
                        ]},
                        { label: '(Say nothing. Slowly look down at the amulet in your hand.)', flag: 'silent', say: [
                            { t: '…Not the talkative kind. Fine. But I see what you\'re holding, friend.' },
                        ]},
                    ]},
                    { t: 'That <b>amulet</b>. Bronze, old workmanship — <em>very</em> old, though it shines like it was struck yesterday. Where a thing like that leads, trouble follows. Keep it close, and show it to no fool.' },
                    { t: 'Now. Whatever you are, you need food, proper clothes, and answers — <b>in that order</b>. Livia at the bakery will feed you, if you make yourself useful. Off you go. Follow the golden light.' },
                    { me: '(Food does sound good. The golden light it is.)' },
                ], () => { sessionStart(); setStep(2); });
            } else if (s >= 7) {
                runScene(npc, [
                    { t: F.truth ? 'Our visitor from <em>tomorrow</em>. I\'ve decided to believe you, by the way. It\'s more interesting than the alternative.' : 'Our mysterious visitor! The town has quite taken to you — whoever you really are.' },
                ]);
            } else {
                say(npc, 'Still in one piece? Good. The town is warming to you, stranger.');
            }
            break;
        case 'livia':
            if (s === 2) {
                if (liviaNeedsLeft().length === 0) {
                    runScene(npc, [
                        { t: 'aqua, cibus, vinum — <b>perfectum!</b> You\'re quicker than you look.' },
                        { do: () => sfx.yes() },
                        { t: 'Here — warm bread, fresh from the oven. And take this <b>tunic</b>. You cannot walk around Parva Roma dressed like… whatever <em>that</em> is. People will talk. People are <em>already</em> talking.' },
                        { choice: [
                            { label: 'Put on the tunic. “How do I look?”', say: [
                                { t: 'Like a proper Roman! Well. Like a Roman who got dressed in the dark. It\'ll do.' },
                            ]},
                            { label: 'Put on the tunic, but fold the hoodie carefully.', say: [
                                { t: 'Sentimental about the strange clothes? Keep them safe, then. Something tells me your story isn\'t a short one.' },
                            ]},
                        ]},
                        { do: () => { CH1.sub.tunic = true; persist(); setOutfit('roman'); toast('👕 You look like a proper Roman now!'); } },
                        { t: 'My husband would have liked you. He sails out of <b>Pompeii</b> — the great port south of the mountain. Three weeks gone, this time. The sea keeps its own calendar…' },
                        { me: '(Pompeii. Why does that word make your stomach drop?)' },
                        { t: 'His last letter was strange, actually. He wrote that a <b>bronze-smith</b> down there had taken “a commission too odd to speak of, and paid in silence.” Sailors\' gossip, probably.' },
                        { do: () => clue('clueLetter', 'a Pompeii bronze-smith took a secret commission…') },
                        { t: 'Now — you wanted answers? Help <b>Marcus</b> first. His animals have bolted and he\'s in no state to answer anything.' },
                    ], () => setStep(3));
                } else {
                    runScene(npc, [
                        { t: 'A hungry stranger, in <em>very</em> odd clothes. Lucky for you, I feed first and ask questions later — but in this town, we work for our bread.' },
                        { t: 'Fetch me three things: <em>aqua</em> from the well, the crate of <em>cibus</em> from the market — mind you open the <b>right crate</b>, the labels matter — and <em>vinum</em> from the barrels by the cart.' },
                        { choice: [
                            { label: '“aqua, cibus, vinum. On it!”', xp: 1, say: [{ t: 'Listen to you! Half a morning here and already speaking like a local.' }] },
                            { label: '“Which one\'s aqua again…?”', say: [{ t: '<em>Water</em>, dear. The stuff in the well. You\'ll learn fast or go thirsty.' }] },
                        ]},
                    ]);
                }
            } else {
                say(npc, s < 2 ? 'Fresh bread! Well — it will be, once it\'s baked.' : 'The tunic suits you! gratias for the help.');
            }
            break;
        case 'marcus':
            if (s === 3) {
                if (pennedCount() >= 3 || CH1.sub.herded) {
                    CH1.sub.herded = true;
                    persist();
                    runScene(npc, [
                        { t: 'optime! alpaca, bos, rana — all home, and not a hair harmed. You\'ve a farmer\'s patience, stranger.' },
                        { t: 'Strange thing, though, now I think of it. The night before you turned up, I saw a <b>hooded figure</b> standing under the great oak. Just… standing. Watching the road. Gone by dawn.' },
                        { me: '(The great oak. The exact spot where you woke up.)' },
                        { do: () => clue('clueFigure', 'a hooded figure watched the oak the night before you arrived') },
                        { t: 'You want to know <em>when</em> you are? Pah. Days are days. Ask <b>Magistra Gaia</b> at the school — she reads, she <em>counts</em>. She\'ll know to the very hour.' },
                        { choice: [
                            { label: '“Thanks, Marcus. Your frog is very fast, by the way.”', say: [{ t: 'He gets it from the river. Terrible influence, that river.' }] },
                            { label: '“What do I get for all this animal-wrangling?”', say: [{ t: 'A roof! The barn loft is yours for as long as you need it. Best beds in town, if you don\'t mind the smell of hay.' }] },
                        ]},
                    ], () => setStep(4));
                } else if (!CH1.sub.feed) {
                    runScene(npc, [
                        { t: 'di immortales! The gate blew open and my animals are loose — the alpaca\'s strutting around the forum, the <em>bos</em> wandered toward the bridge, and the <em>rana</em>…' },
                        { me: '“The… rana?”' },
                        { t: 'The frog! Fastest frog in Campania. He\'ll be somewhere damp, plotting something.' },
                        { t: 'Here — take this <b>basket of feed</b>. Offer them a handful and they\'ll follow you anywhere. Lead them home to my pen, would you?' },
                    ], () => {
                        CH1.sub.feed = true;
                        persist();
                        toast('🥕 You\'re carrying Marcus\' feed basket. The animals will follow whoever feeds them!');
                        herdObjective();
                    });
                } else {
                    say(npc, 'A handful of feed and they\'ll trail you like ducklings. The <em>rana</em> too — he\'s greedier than the bos.');
                }
            } else {
                say(npc, s < 3 ? 'These fields won\'t plough themselves…' : 'The animals like you. Animals know.');
            }
            break;
        case 'gaia':
            if (s === 4) {
                if (pagesGot() >= 3) {
                    runScene(npc, [
                        { t: 'My calendar pages! gratias. Now — you genuinely don\'t know the year? Sit. This should be done sitting down, apparently.' },
                        { t: 'By the consuls\' names… this is the <b>ninth year of Emperor Vespasian</b>.' },
                        { choice: [
                            { label: '“Vespasian… so it\'s AD 78. Which makes next year—”', flag: 'knowsVolcano', say: [
                                { t: 'Makes next year <em>what</em>? You\'ve gone grey as ash, child.' },
                                { me: '“…Nothing. History test. I always go grey during history tests.”' },
                            ]},
                            { label: '“Cool, cool, cool. …Who\'s Vespasian?”', say: [
                                { t: '<em>Who is—</em>?! The Emperor of Rome! Builder of the great amphitheatre! Honestly, what do they teach in Britannia.' },
                            ]},
                        ]},
                        { t: 'But here is the odd part. One page of my calendar was <b>already missing</b> — torn out, weeks ago. A traveller came asking about “the ninth year”… hooded, soft-spoken. Paid in old bronze and took the page.' },
                        { do: () => clue('cluePage', 'a hooded traveller paid Gaia in old bronze for the calendar page') },
                        { t: '…Why do you keep staring at the mountain? It\'s only <b>Vesuvius</b>. It\'s always smoked a little. Now — for <em>where</em> you are, talk to <b>Quintus</b> by the bridge. Bring patience; he\'s just lost half his cargo.' },
                    ], () => setStep(5));
                } else if (CH1.sub.pages) {
                    say(npc, 'The wind took them toward the forum — three pages! My calendar is useless without them.');
                } else {
                    runScene(npc, [
                        { t: 'You want to know <em>what year it is</em>? What a question. Wonderful! Most people only ask me how to spell things.' },
                        { t: 'It\'s written on my calendar — but the wind has just taken three pages right off my desk, toward the forum. Fetch them back and I\'ll read you the consuls\' names.' },
                    ], () => {
                        CH1.sub.pages = true;
                        persist();
                        pageObjs.forEach(p => { if (!p.got) p.obj.visible = true; });
                        objective('📄 Catch Gaia\'s windblown calendar pages: ' + pagesGot() + '/3');
                        setBeacons(pageObjs.filter(p => !p.got).map(p => [p.x, p.z]));
                    });
                }
            } else {
                say(npc, s < 4 ? 'discipuli! Eyes on your tablets, not on the stranger.' : 'The year still stands, in case you wondered.');
            }
            break;
        case 'quintus':
            if (s === 5) {
                if (digsLeft() === 0) {
                    runScene(npc, [
                        { t: '<em>donum, pecunia, liber</em> — my whole cargo, found by reading a child\'s scribbles! You learn fast, stranger. Faster than anyone I\'ve met, and I\'ve met everyone twice.' },
                        { t: 'You asked <em>where</em> you are. This is <b>Parva Roma</b> — finest little town between the mountain and the sea. Olives, honest people, one (1) suspicious frog.' },
                        { t: 'And listen—' },
                        { me: '(He leans in, suddenly serious.)' },
                        { t: 'A stranger who falls out of nowhere, carrying bronze that shines wrong, should speak to the <b>Sibyl</b>. She sees through time itself, they say. Find <b>Aurelia</b> at the temple — she\'ll take you up.' },
                        { choice: [
                            { label: '“Through time? You believe in that?”', say: [{ t: 'I\'m a merchant. I believe in everything that might be true and most things that aren\'t. Cheaper that way.' }] },
                            { label: '“Thank you, Quintus.”', xp: 1, heart: ['quintus', 'Quintus'], say: [
                                { t: 'Thank ME? You found my cargo. Half of Parva Roma owes you a favour by sundown — collect wisely.' },
                                { t: '…And since you\'re polite as well as clever, here\'s something I don\'t tell everyone. A month back, I sold a crate of <b>old temple bronze</b> to a smith from Pompeii. Hooded fellow. Paid double. Never haggled.' },
                                { me: '“A smith who doesn\'t haggle?”' },
                                { t: 'Exactly. A man who pays double wants <em>silence</em>, not bronze. Watch yourself, time-walker.' },
                                { do: () => clue('clueSmith', 'Quintus sold old temple bronze to a hooded Pompeii smith') },
                            ] },
                        ]},
                    ], () => setStep(6));
                } else if (CH1.sub.scroll) {
                    say(npc, 'Found anything yet? <em>Read</em> the scroll — tap the words if they swim before your eyes.', null, showScroll);
                } else {
                    runScene(npc, [
                        { t: 'Gah! My cart hit a stone and three crates went flying off into the countryside!' },
                        { t: 'All I have is this <b>soggy scroll</b> — a helpful child wrote down where they landed. In Latin, naturally. My eyes aren\'t what they were… can <em>you</em> read it?' },
                        { choice: [
                            { label: '“Hand it over. I\'ll figure it out.”', xp: 1 },
                            { label: '“My Latin teacher would die of pride right now.”', say: [{ t: 'Your what? Never mind — here.' }] },
                        ]},
                    ], () => {
                        CH1.sub.scroll = true;
                        persist();
                        DIGS.forEach(d => { if (!CH1.sub[d.id]) d.sparkle.visible = true; });
                        showScroll();
                        objective('⛏️ Follow the scroll\'s Latin clues: 0/3 dug up', true);
                        setBeacons([]);
                    });
                }
            } else {
                say(npc, s < 5 ? 'Goods from every shore of mare nostrum!' : 'Safe travels, time-walker. Mind the carts.');
            }
            break;
        case 'aurelia':
            if (s === 6 && !nightFx.visible) {
                runScene(npc, [
                    { t: 'So. You are the one the omens spoke of. The lamps flickered at dawn, and the doves flew east, and now here you stand with half the town\'s errands done in a day.' },
                    { t: 'Yes — I will bring you to her. Night is falling; the Sibyl speaks best beneath the stars.' },
                    { t: 'Go up, child. And <b>do not be afraid</b> — or at least, do not show it. She respects nerve.' },
                ], () => {
                    skyPhase = 2;
                    nightFx.visible = true;
                    npcMark('sibyl');
                    objective('🌙 Climb the temple steps and speak to <b>the Sibyl</b>');
                    setBeacons([[0, -19.5]]);
                });
            } else {
                say(npc, s < 6 ? 'pax tecum, stranger. The goddess watches kindly.' : 'pax tecum. The stars are beautiful tonight.');
            }
            break;
        case 'sibyl':
            if (s === 6 && nightFx.visible) {
                runScene(npc, [
                    { t: 'I have watched you in the smoke, child of a far tomorrow. You fell through time as a leaf falls through branches.' },
                    { t: F.truth ? 'You told the senator the truth. Brave. Truth is a heavy coin — spend it carefully here.' :
                         F.lied ? 'You told the senator you were from <em>Britannia</em>. He believed you. I did not.' :
                         'You said nothing to the senator, and let the amulet speak. Wise. It says more than you know.' },
                    { t: 'Show me your hand.' },
                    { me: '(You open your fingers. The amulet catches the lamplight — and for a heartbeat, it glows on its own.)' },
                    { t: '<em>Yes.</em> This was struck <b>in this very town</b> — in a year that has not yet come. Do you understand, child? You did not fall. You were <b>brought</b>. And whoever reached across the years to fetch you… paid dearly for it.' },
                    { t: 'Hear the prophecy first: <em>the road home is built of words</em>. Learn this world\'s tongue, chapter by chapter, and when the last word is yours, the mists will open.' },
                    { t: 'And now, child — the smoke grants you <b>one question</b> tonight. One. Choose it as carefully as you would choose a last word.' },
                    { choice: [
                        { label: '“WHO brought me here?”', flag: 'sibylWho', say: [
                            { t: 'Brave. The smoke shows me… a hand on a forge-hammer. Old temple bronze, melted by night. A maker\'s mark — <b>two crossed hammers under a star</b>.' },
                            { t: 'The name is hidden from me — but the mark is not hidden from <em>you</em>. The smith left something behind this town\'s villa. Dig, time-walker. Begin your hunt.' },
                            { do: () => { save.flags.markQuest = true; persist(); } },
                        ]},
                        { label: '“Can you send a message… home? To my family?”', flag: 'sibylMsg', xp: 5, say: [
                            { t: '…Of all the questions, child. You could have asked for power.' },
                            { t: 'Give me your words, and I will whisper them into the smoke. Time is a river, but smoke goes where it pleases.' },
                            { me: '(You whisper it. The lamps gutter. Somewhere — somewhen — perhaps a candle flickers on a kitchen table.)' },
                            { t: 'It is sent. Whether it arrives… ask me in another chapter. You have a kind heart, time-walker. Guard it; this century is hard on kind hearts.' },
                        ]},
                        { label: '“The fire on the mountain — WHEN?”', flag: 'sibylFire', say: [
                            { t: '…You already suspect, don\'t you. I see it behind your eyes — a number, sleeping.' },
                            { t: 'Then hear it spoken once, and never by me again: <b>the month of Augustus, in the year to come</b>. The mountain will open, and the sky will fall on the cities of the bay.' },
                            { me: '(August, AD 79. Pompeii. Livia\'s husband sails out of Pompeii. You feel the weight of being the only person alive who believes it.)' },
                            { t: 'Now you carry tomorrow on your back, child. Spend it <em>well</em>.' },
                        ]},
                    ]},
                    { t: 'Tonight — rest. You have made a whole town of friends in a single day.' },
                ], () => finaleSibyl());
            } else if (save.ch1.done) {
                say(npc, 'Rest, time-walker. The second chapter of your road is already being written…');
            } else {
                say(npc, 'The mists are not ready for you, child. Walk the town first.');
            }
            break;
        case 'camilla':
            say(npc, s >= 7 ? 'A traveller through time! You\'ll be a whole epic, not a poem. I\'m thinking hexameter.' : 'A stranger! How marvellous — strangers make the best poems.');
            break;
        case 'drusilla':
            say(npc, s >= 7 ? 'Time-sickness is best treated with sleep and honey. Doctor\'s orders.' : 'You look pale, dear. Lost? The whole town will help — that\'s what towns are for.');
            break;
        case 'felix':
            say(npc, 'Strong arms, stranger! If you ever fancy training — the sand ring is always open.');
            break;
        case 'septimus':
            say(npc, 'The bridge is safe, citizen. Though you\'re the strangest thing to cross it all year.');
            break;
        default:
            say(npc, 'salve!');
    }
}

// ---------- Apply current step (on load/resume too) ----------
function applyStep() {
    const s = CH1.step;
    if (s <= 1) {
        objective('💫 Ow… where <em>am</em> I? Find someone to talk to — try the man in the white toga.');
        setBeacons([[npcById.get('titus').x, npcById.get('titus').z]]);
        npcMark('titus');
        if (s === 0) {
            setTimeout(() => toast('💫 One minute you were reaching toward a bronze amulet in a museum case… a flash of light — and now: birdsong, sandals, and a very large temple. The amulet is still warm in your hand.', 6500), 1200);
            CH1.step = 1;
            persist();
        }
    } else if (s === 2) {
        setupCrates();
        npcMark('livia');
        liviaObjective();
    } else if (s === 3) {
        if (!CH1.sub.herded && pennedCount() < 3) scatterAnimals();
        npcMark('marcus');
        herdObjective();
    } else if (s === 4) {
        npcMark('gaia');
        if (CH1.sub.pages) {
            pageObjs.forEach(p => { if (!p.got) p.obj.visible = true; });
            if (pagesGot() >= 3) {
                objective('📄 Return the pages to <b>Magistra Gaia</b> at the school');
                setBeacons([[npcById.get('gaia').x, npcById.get('gaia').z]]);
            } else {
                objective('📄 Catch Gaia\'s windblown calendar pages: ' + pagesGot() + '/3');
                setBeacons(pageObjs.filter(p => !p.got).map(p => [p.x, p.z]));
            }
        } else {
            objective('🏫 Ask <b>Magistra Gaia</b> at the school what year it is');
            setBeacons([[npcById.get('gaia').x, npcById.get('gaia').z]]);
        }
    } else if (s === 5) {
        npcMark('quintus');
        if (CH1.sub.scroll) {
            DIGS.forEach(d => { if (!CH1.sub[d.id]) d.sparkle.visible = true; });
            if (digsLeft() === 0) {
                objective('⛏️ All of the cargo found — back to <b>Quintus</b>!');
                setBeacons([[npcById.get('quintus').x, npcById.get('quintus').z]]);
            } else {
                objective(`⛏️ Follow the scroll's Latin clues: <b>${3 - digsLeft()}</b>/3 dug up`, true);
                setBeacons([]);
            }
        } else {
            objective('🌉 Ask <b>Quintus</b> by the bridge where in the world you are');
            setBeacons([[npcById.get('quintus').x, npcById.get('quintus').z]]);
        }
    } else if (s === 6) {
        skyPhase = 1;
        npcMark('aurelia');
        objective('🏛️ Evening falls… <b>Aurelia</b> at the temple can take you to the Sibyl');
        setBeacons([[npcById.get('aurelia').x, npcById.get('aurelia').z]]);
    } else {
        skyPhase = save.ch1.done ? 0 : 2;
        npcMark(null);
        objective(save.flags.markQuest && !save.flags.markFound
            ? '⚒️ The Sibyl spoke of something buried <b>behind the villa</b>…'
            : '🌅 <em>finis capituli primi</em> — explore Parva Roma freely. Chapter II is coming soon.');
        setBeacons(save.flags.markQuest && !save.flags.markFound ? [[-34, -28.5]] : []);
        if (save.flags.markQuest && !save.flags.markFound) spawnMarkDig();
    }
}

// ---------- Input ----------
const keys = {};
let dialogOpen = false;
window.addEventListener('keydown', e => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
    keys[e.key.toLowerCase()] = true;
    if (e.key === 'Escape') { closeDialog(); hideScroll(); }
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

// ---------- Interaction resolution ----------
function nearestNpc() {
    let best = null, bestD = 3.4;
    for (const n of npcs) {
        const d = Math.hypot(n.x - player.x, n.z - player.z);
        if (d < bestD) { bestD = d; best = n; }
    }
    return best;
}
function nearestInteract() {
    let best = null, bestD = 1e9;
    for (const it of interactables) {
        if (!it.available()) continue;
        const d = Math.hypot(it.x - player.x, it.z - player.z);
        if (d < it.range && d < bestD) { bestD = d; best = it; }
    }
    return best;
}
function tryInteract() {
    const it = nearestInteract();
    if (it) { it.action(); return; }
    const n = nearestNpc();
    if (n) npcTalk(n);
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

// ---------- Ambient label proximity ----------
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
            discover(L.latin, L.gloss || gloss(L.latin, ''), L.note);
            L.sprite.material.map = textSprite(L.latin, { dim: true }).material.map;
        }
    }
}

// ---------- Game loop ----------
const clock = new THREE.Clock();
let camX = player.x, camZ = player.z + 14;
const camPos = new THREE.Vector3(player.x, 10, player.z + 13);
const camLook = new THREE.Vector3(player.x, 3, player.z);
const camDesire = new THREE.Vector3();
const lookDesire = new THREE.Vector3();

function update(dt, t) {
    skyCurrent += (skyPhase - skyCurrent) * Math.min(1, dt * 0.5);
    applySky(skyCurrent);

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

    camX += (player.x - camX) * Math.min(1, dt * 3);
    camZ += (player.z - camZ) * Math.min(1, dt * 3);
    if (dialogOpen && vn && vn.npc) {
        // cinematic close-up: over the player's shoulder onto the speaker
        const n = vn.npc;
        const ny = groundHeight(n.x, n.z);
        let dx2 = player.x - n.x, dz2 = player.z - n.z;
        const dd = Math.hypot(dx2, dz2) || 1;
        dx2 /= dd; dz2 /= dd;
        // offset to the side so both faces read
        const sideX = -dz2, sideZ = dx2;
        camDesire.set(n.x + dx2 * 3.6 + sideX * 1.6, ny + 2.6, n.z + dz2 * 3.6 + sideZ * 1.6);
        lookDesire.set(n.x, ny + 1.75, n.z);
    } else {
        camDesire.set(camX, py + 9.5, camZ + 12.5);
        lookDesire.set(camX, py + 3.2, camZ - 7);
    }
    camPos.lerp(camDesire, Math.min(1, dt * 4));
    camLook.lerp(lookDesire, Math.min(1, dt * 4));
    camera.position.copy(camPos);
    camera.lookAt(camLook);

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

    const it = nearestInteract();
    const near = it ? null : nearestNpc();
    if ((it || near) && !dialogOpen) {
        promptEl.style.display = 'block';
        promptText.textContent = it ? it.prompt : 'Talk to ' + near.name;
        actionBtn.classList.add('show');
    } else {
        promptEl.style.display = 'none';
        actionBtn.classList.remove('show');
    }

    // animals: wander, or flee from the player while being herded
    for (const a of animals) {
        a.bobT = (a.bobT || Math.random() * 6) + dt;
        a.obj.children[0].position.y = (a.obj.children[0].userData.baseInnerY ??= a.obj.children[0].position.y) + Math.abs(Math.sin(a.bobT * 2.4)) * 0.06;
        const px = a.obj.position.x, pz = a.obj.position.z;
        if (a.following && !a.penned && CH1.step === 3) {
            // trail behind the player in a little parade
            const idx = animals.filter(an => an.following && !an.penned).indexOf(a);
            const trail = 2.2 + idx * 1.6;
            const tx2 = player.x - Math.sin(player.ry) * trail;
            const tz2 = player.z - Math.cos(player.ry) * trail;
            const dxf = tx2 - px, dzf = tz2 - pz;
            const df = Math.hypot(dxf, dzf);
            if (df > 0.4) {
                const sp3 = Math.min(8.5, 2.5 + df * 1.6);
                a.obj.position.x += dxf / df * sp3 * dt;
                a.obj.position.z += dzf / df * sp3 * dt;
                a.obj.rotation.y = Math.atan2(dxf, dzf);
            }
            const ax = a.obj.position.x, az = a.obj.position.z;
            const playerInPen = player.x > PEN.x1 && player.x < PEN.x2 && player.z > PEN.z1 && player.z < PEN.z2;
            const animalInPen = ax > PEN.x1 && ax < PEN.x2 && az > PEN.z1 && az < PEN.z2;
            if (animalInPen || (playerInPen && df < 4.5)) {
                a.penned = true;
                a.following = false;
                a.home = { x: ax, z: az };
                a.r = 2.5;
                sfx.yes();
                toast(`🐾 <b>${a.key === 'bull' ? 'bos' : a.key === 'frog' ? 'rana' : 'alpaca'}</b> is home! ${pennedCount()}/3`);
                herdObjective();
            }
        } else if (!(a.herd && !a.penned && CH1.step === 3)) {
            a.wait -= dt;
            const dxa = a.tx - px, dza = a.tz - pz;
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
    }

    // strolling villagers & children
    for (const wv of wanderers) {
        wv.wait -= dt;
        const dxw = wv.tx - wv.obj.position.x, dzw = wv.tz - wv.obj.position.z;
        const dw = Math.hypot(dxw, dzw);
        if (dw > 0.4) {
            wv.obj.position.x += dxw / dw * wv.speed * dt;
            wv.obj.position.z += dzw / dw * wv.speed * dt;
            wv.obj.rotation.y = Math.atan2(dxw, dzw);
            wv.walkT += dt * 11;
            wv.obj.position.y = Math.abs(Math.sin(wv.walkT)) * 0.1 * wv.scale;
        } else if (wv.wait <= 0) {
            const ang = Math.random() * Math.PI * 2;
            wv.tx = wv.home.x + Math.cos(ang) * Math.random() * wv.r;
            wv.tz = wv.home.z + Math.sin(ang) * Math.random() * wv.r;
            wv.wait = 1.5 + Math.random() * 5;
        }
    }
    // Vesuvius smoke drifts
    for (const sp2 of smokePuffs) {
        sp2.ph += dt * 0.4;
        sp2.obj.position.y = sp2.base + Math.sin(sp2.ph) * 2.5;
        sp2.obj.position.x = 48 + (sp2.base - 64) * 0.6 + Math.sin(sp2.ph * 0.7) * 3;
    }

    const night = skyCurrent > 1.3;
    for (const b of butterflies) {
        b.obj.visible = !night;
        if (night) continue;
        b.t += dt;
        b.obj.position.x = b.hx + Math.sin(b.t * 0.7) * 2.2;
        b.obj.position.z = b.hz + Math.cos(b.t * 0.53) * 2.2;
        b.obj.position.y = 1.5 + Math.sin(b.t * 1.7) * 0.5;
        b.obj.rotation.y = b.t * 0.8;
        b.obj.scale.x = 0.7 + Math.abs(Math.sin(b.t * 14)) * 0.5;
    }

    beaconMat.opacity = 0.2 + Math.sin(t * 3) * 0.1;
    sparkleTick(t);
    syncFeedInteracts();
    checkLabels();
}

let acc = 0;
renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    acc += dt;
    update(dt, acc);
    renderer.render(scene, camera);
    if (!window.__ready) window.__ready = true;
});

applyStep();
updateHud();

// debug hooks for automated testing
window.__game = {
    meshDump(cx, cz, r) {
        const out = [];
        scene.traverse(o => {
            if (!o.isMesh && !o.isSkinnedMesh) return;
            const bb = new THREE.Box3().setFromObject(o);
            if (bb.isEmpty()) return;
            const c = bb.getCenter(new THREE.Vector3());
            if (Math.hypot(c.x - cx, c.z - cz) > r) return;
            let root = o;
            while (root.parent && root.parent !== scene) root = root.parent;
            const sz = bb.getSize(new THREE.Vector3());
            out.push({ mesh: o.name || o.type, root: root.name || root.type, skinned: !!o.isSkinnedMesh,
                       cx: +c.x.toFixed(1), cy: +c.y.toFixed(1), cz: +c.z.toFixed(1), h: +sz.y.toFixed(1),
                       rootPos: [+root.position.x.toFixed(1), +root.position.z.toFixed(1)] });
        });
        return out;
    },
    sceneDump(cx, cz, r) {
        const out = [];
        for (const o of scene.children) {
            const p = o.position;
            if (cx != null && Math.hypot(p.x - cx, p.z - cz) > r) continue;
            const bb = new THREE.Box3().setFromObject(o);
            const sz = bb.getSize(new THREE.Vector3());
            out.push({ type: o.type, x: +p.x.toFixed(1), y: +p.y.toFixed(1), z: +p.z.toFixed(1), w: +sz.x.toFixed(1), h: +sz.y.toFixed(1), d: +sz.z.toFixed(1) });
        }
        return out;
    },
    teleport(x, z) { player.x = x; player.z = z; camX = x; camZ = z; },
    pos: () => [player.x, player.z],
    step: () => CH1.step,
    setStep,
    sub: () => JSON.parse(JSON.stringify(CH1.sub)),
    interact: tryInteract,
    talk(id) { const n = npcById.get(id); if (n) npcTalk(n); },
    closeDialog,
    animals: () => animals.map(a => ({ key: a.key, x: +a.obj.position.x.toFixed(1), z: +a.obj.position.z.toFixed(1), penned: a.penned })),
};
})();
