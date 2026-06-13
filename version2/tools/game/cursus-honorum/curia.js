// ============================================================
// THE SENATE HOUSE — a 3D explorable cursus honorum lesson
// ============================================================
// Walk the Curia, meet each magistrate, and learn the ladder of
// Roman office. A visual-novel walkaround: no objectives, no fail.
//
// Content: cursus-data.js (window.CursusData)
// Art:     CC0 (KayKit columns/statue, ambientCG floor, Poly Haven
//          lighting) + procedural marble interior & toga figures.
import * as THREE from 'three';
import { GLTFLoader } from './lib/GLTFLoader.js';
import { RGBELoader } from './lib/RGBELoader.js';
import { MeshoptDecoder } from './lib/meshopt_decoder.module.js';

(function () {
'use strict';
const DATA = window.CursusData;

// ---------- Save ----------
const SAVE_KEY = 'cursusHonorumSave';
function loadSave() {
    try {
        const s = JSON.parse(localStorage.getItem(SAVE_KEY));
        if (s && typeof s === 'object') return Object.assign({ studied: [], muted: false, seenIntro: false }, s);
    } catch (e) { /* fresh */ }
    return { studied: [], muted: false, seenIntro: false };
}
const save = loadSave();
if (!Array.isArray(save.studied)) save.studied = [];
function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {} }
const STUDY_IDS = DATA.OFFICES.filter(o => o.rung !== 0).map(o => o.id);

// ---------- Audio ----------
let audioCtx = null;
function beep(freq, dur, type, delay, vol) {
    if (save.muted) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const t0 = audioCtx.currentTime + (delay || 0);
        const osc = audioCtx.createOscillator(), g = audioCtx.createGain();
        osc.type = type || 'sine'; osc.frequency.value = freq;
        g.gain.setValueAtTime(vol || 0.1, t0);
        g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
        osc.connect(g); g.connect(audioCtx.destination); osc.start(t0); osc.stop(t0 + dur);
    } catch (e) {}
}
const sfx = {
    talk: () => beep(392, 0.08, 'triangle'),
    page: () => beep(523, 0.05, 'sine', 0, 0.05),
    learn: () => { beep(523, 0.12, 'sine'); beep(784, 0.18, 'sine', 0.1); },
    done: () => { [523, 659, 784, 1047].forEach((f, i) => beep(f, 0.18, 'sine', i * 0.12)); },
};

// ---------- Three.js ----------
const canvas = document.getElementById('game-canvas');
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); }
catch (e) {
    const p = document.querySelector('#intro .panel p');
    if (p) p.innerHTML = '<b>Sorry — your browser could not start 3D graphics.</b> Try a newer browser or device.';
    document.getElementById('loading').style.display = 'none';
    return;
}
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.18;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a140d);
scene.fog = new THREE.Fog(0x1a140d, 44, 88);

const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.1, 300);
function resize() { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
window.addEventListener('resize', resize); resize();

// shaft of daylight from the clerestory
const sun = new THREE.DirectionalLight(0xffe9c4, 1.9);
sun.position.set(10, 34, 16);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -28; sun.shadow.camera.right = 28;
sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30;
sun.shadow.camera.far = 90; sun.shadow.bias = -0.0004;
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xdac7a0, 0x2a2018, 0.55));
new RGBELoader().load('assets3d/vale_day_1k.hdr', hdr => { hdr.mapping = THREE.EquirectangularReflectionMapping; scene.environment = hdr; });

const texLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();
gltfLoader.setMeshoptDecoder(MeshoptDecoder);

// ---------- materials ----------
const matCache = new Map();
const flat = (color, rough = 0.85, metal = 0) => {
    const k = color + ':' + rough + ':' + metal;
    if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal }));
    return matCache.get(k);
};
const MARBLE = 0xeae3d2, MARBLE_D = 0xd8cdb4, MARBLE_DK = 0xbfb393;
const PORPHYRY = 0x7a2f3a, GOLD = 0xd6b25e;

function box(w, h, d, mat, x, y, z, parent = scene) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
}

// ---------- interior dimensions ----------
const HALL = { x0: -20, x1: 20, z0: -22, z1: 15, wallH: 18 };
const DAIS = { x0: -13, x1: 13, z0: -22, z1: -16.5, top: 0.7 };
const STEP = { x0: -5, x1: 5, z0: -16.5, z1: -15.2 };
function groundHeight(x, z) {
    if (x >= DAIS.x0 && x <= DAIS.x1 && z >= DAIS.z0 && z <= DAIS.z1) return DAIS.top;
    if (x >= STEP.x0 && x <= STEP.x1 && z >= STEP.z0 && z <= STEP.z1)
        return DAIS.top * (STEP.z1 - z) / (STEP.z1 - STEP.z0);
    return 0;
}

// ---------- floor (opus sectile marble) ----------
{
    const ftex = texLoader.load('assets3d/floor.jpg');
    ftex.wrapS = ftex.wrapT = THREE.RepeatWrapping; ftex.repeat.set(10, 10); ftex.colorSpace = THREE.SRGBColorSpace; ftex.anisotropy = 8;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(HALL.x1 - HALL.x0, HALL.z1 - HALL.z0),
        new THREE.MeshStandardMaterial({ map: ftex, color: 0xe4dcc6, roughness: 0.5 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set((HALL.x0 + HALL.x1) / 2, 0, (HALL.z0 + HALL.z1) / 2);
    floor.receiveShadow = true; scene.add(floor);
    // a central porphyry runner with a gold border
    const runner = new THREE.Mesh(new THREE.PlaneGeometry(5, HALL.z1 - HALL.z0 - 2), flat(PORPHYRY, 0.45));
    runner.rotation.x = -Math.PI / 2; runner.position.set(0, 0.02, (HALL.z0 + HALL.z1) / 2 + 0.5); runner.receiveShadow = true; scene.add(runner);
    for (const ex of [-2.7, 2.7]) {
        const edge = new THREE.Mesh(new THREE.PlaneGeometry(0.25, HALL.z1 - HALL.z0 - 2), flat(GOLD, 0.4, 0.3));
        edge.rotation.x = -Math.PI / 2; edge.position.set(ex, 0.025, (HALL.z0 + HALL.z1) / 2 + 0.5); scene.add(edge);
    }
}

// ---------- walls + colliders ----------
const colliders = []; // {x0,z0,x1,z1}
const addWall = (x0, z0, x1, z1) => colliders.push({ x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1) });
function wallPanel(cx, cz, w, d) {
    box(w, HALL.wallH, d, flat(MARBLE, 0.9), cx, HALL.wallH / 2, cz);
    // a darker dado band + cornice
    box(w + 0.1, 1.4, d + 0.1, flat(MARBLE_DK, 0.9), cx, 0.7, cz);
    box(w + 0.3, 0.6, d + 0.3, flat(MARBLE_D, 0.85), cx, HALL.wallH - 1.6, cz);
}
wallPanel(0, HALL.z0 - 0.5, HALL.x1 - HALL.x0 + 2, 1);             // north (behind dais)
wallPanel(HALL.x0 - 0.5, (HALL.z0 + HALL.z1) / 2, 1, HALL.z1 - HALL.z0 + 2); // west
wallPanel(HALL.x1 + 0.5, (HALL.z0 + HALL.z1) / 2, 1, HALL.z1 - HALL.z0 + 2); // east
// south wall with a great doorway gap in the middle
wallPanel(-12.5, HALL.z1 + 0.5, 16, 1);
wallPanel(12.5, HALL.z1 + 0.5, 16, 1);
addWall(HALL.x0 - 1, HALL.z0 - 1.2, HALL.x1 + 1, HALL.z0);
addWall(HALL.x0 - 1.2, HALL.z0, HALL.x0, HALL.z1 + 1);
addWall(HALL.x1, HALL.z0, HALL.x1 + 1.2, HALL.z1 + 1);
addWall(HALL.x0 - 1, HALL.z1, -4.5, HALL.z1 + 1.2);
addWall(4.5, HALL.z1, HALL.x1 + 1, HALL.z1 + 1.2);
// ceiling (coffered look) — dark, lets the shaft read
box(HALL.x1 - HALL.x0 + 2, 0.6, HALL.z1 - HALL.z0 + 2, flat(0x4a3c28, 0.95), 0, HALL.wallH, (HALL.z0 + HALL.z1) / 2);
for (let cx = -16; cx <= 16; cx += 4) for (let cz = -20; cz <= 12; cz += 4) {
    box(3.2, 0.3, 3.2, flat(0x3a2f1f, 0.95), cx, HALL.wallH - 0.5, cz);
}
// clerestory glow strip (where the shaft enters)
const glow = box(10, 0.3, 8, new THREE.MeshBasicMaterial({ color: 0xfff0cf }), 6, HALL.wallH - 0.4, 6);
glow.castShadow = false;

// ---------- the dais & curule seat ----------
box(DAIS.x1 - DAIS.x0, DAIS.top, DAIS.z1 - DAIS.z0, flat(MARBLE_D, 0.7), 0, DAIS.top / 2, (DAIS.z0 + DAIS.z1) / 2);
box(10, 0.25, 1.0, flat(GOLD, 0.4, 0.3), 0, DAIS.top + 0.12, DAIS.z1 - 0.4); // gold edge
// front step
box(STEP.x1 - STEP.x0, DAIS.top, STEP.z1 - STEP.z0 + 0.3, flat(MARBLE_DK, 0.8), 0, DAIS.top / 2, (STEP.z0 + STEP.z1) / 2);
addWall(DAIS.x0, DAIS.z0, STEP.x0, DAIS.z1);   // dais sides block (gap = the step)
addWall(STEP.x1, DAIS.z0, DAIS.x1, DAIS.z1);
// curule chair (sella curulis) on the dais
{
    const chair = new THREE.Group(); chair.position.set(0, DAIS.top, -19.6); scene.add(chair);
    box(1.4, 0.2, 1.2, flat(0xe8dcbf, 0.6), 0, 0.9, 0, chair);
    box(0.18, 0.9, 0.18, flat(GOLD, 0.5, 0.4), -0.55, 0.45, 0.45, chair);
    box(0.18, 0.9, 0.18, flat(GOLD, 0.5, 0.4), 0.55, 0.45, 0.45, chair);
    box(0.18, 0.9, 0.18, flat(GOLD, 0.5, 0.4), -0.55, 0.45, -0.45, chair);
    box(0.18, 0.9, 0.18, flat(GOLD, 0.5, 0.4), 0.55, 0.45, -0.45, chair);
}

// ---------- senators' tiered benches along the long sides ----------
function benches(sideX) {
    const dir = Math.sign(sideX);
    for (let tier = 0; tier < 3; tier++) {
        const bx = sideX - dir * tier * 1.8;
        box(1.6, 0.55 + tier * 0.55, 26, flat(tier % 2 ? MARBLE_D : MARBLE, 0.85), bx, (0.55 + tier * 0.55) / 2, -4);
    }
    addWall(sideX - dir * 5.2, -17, sideX + dir * 0.4, 9);
    // seated senators (simple togate silhouettes) on the top tier
    for (let i = 0; i < 7; i++) {
        const s = new THREE.Group();
        s.position.set(sideX - dir * 3.6, 1.65, -15 + i * 3.4);
        const body = box(0.9, 1.1, 0.9, flat(0xeee7d6, 0.9), 0, 0.55, 0, s);
        box(0.5, 0.5, 0.5, flat(0xdca87a, 0.8), 0, 1.35, 0, s); // head
        // toga stripe
        box(0.12, 1.1, 0.92, flat(0x8a2f3a, 0.85), -0.2, 0.55, 0, s);
        s.rotation.y = dir > 0 ? -Math.PI / 2 : Math.PI / 2;
        scene.add(s);
    }
}
benches(-9); benches(9);

// ---------- model loading (columns, statue, arch) ----------
const modelCache = new Map();
function loadModel(name) {
    if (!modelCache.has(name)) modelCache.set(name, new Promise((res, rej) => gltfLoader.load('assets3d/' + name, g => {
        g.scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); res(g);
    }, undefined, rej)));
    return modelCache.get(name);
}
const pending = [];
function placeModel(name, x, z, { h = 2, ry = 0, y = 0, marble = false, collide = 0 } = {}) {
    pending.push(loadModel(name).then(g => {
        const inner = g.scene.clone(true);
        if (marble) { const m = flat(MARBLE, 0.6); inner.traverse(o => { if (o.isMesh) o.material = m; }); }
        const bb = new THREE.Box3().setFromObject(inner); const sz = bb.getSize(new THREE.Vector3());
        inner.scale.setScalar(h / sz.y);
        const bb2 = new THREE.Box3().setFromObject(inner); const c = bb2.getCenter(new THREE.Vector3());
        const wrap = new THREE.Group();
        inner.position.set(-c.x, -bb2.min.y, -c.z); wrap.add(inner);
        wrap.position.set(x, y, z); wrap.rotation.y = ry; scene.add(wrap); return wrap;
    }).catch(e => console.warn('model failed', name, e && e.message)));
    if (collide) addWall(x - collide, z - collide, x + collide, z + collide);
}
// colonnade down both sides
for (let i = 0; i < 6; i++) {
    const z = -18 + i * 6.2;
    placeModel('column.glb', -18.5, z, { h: 14, collide: 0.9 });
    placeModel('column.glb', 18.5, z, { h: 14, collide: 0.9 });
}
// flanking statues on the dais
placeModel('statue_block.glb', -10.5, -20.4, { h: 4.2, ry: 0.4, y: DAIS.top, marble: true, collide: 1.2 });
placeModel('statue_block.glb', 10.5, -20.4, { h: 4.2, ry: -0.4, y: DAIS.top, marble: true, collide: 1.2 });
// the great doorway arch at the entrance
placeModel('arch.glb', 0, 15.2, { h: 7, collide: 0 });

// ---------- warm braziers (point lights + flame) ----------
const flames = [];
function brazier(x, z) {
    const g = new THREE.Group(); g.position.set(x, 0, z); scene.add(g);
    box(0.5, 1.6, 0.5, flat(0x4a3c28, 0.6, 0.3), 0, 0.8, 0, g);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.3, 0.4, 10), flat(0x6e5a36, 0.5, 0.4));
    bowl.position.y = 1.7; g.add(bowl);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.9, 8), new THREE.MeshBasicMaterial({ color: 0xffb24a }));
    flame.position.y = 2.2; g.add(flame);
    const light = new THREE.PointLight(0xffb968, 14, 16, 2); light.position.set(0, 2.4, 0); g.add(light);
    flames.push({ flame, light, base: 2.2, ph: Math.random() * 6 });
    addWall(x - 0.5, z - 0.5, x + 0.5, z + 0.5);
}
brazier(-15, -14); brazier(15, -14); brazier(-15, 8); brazier(15, 8);

// ============================================================
// Toga figures (statuesque) + lictors
// ============================================================
function makeToga(look) {
    const P = DATA.T[look] || DATA.T.pura;
    const g = new THREE.Group();
    const skin = flat(P.skin, 0.7), toga = flat(P.toga, 0.85), hair = flat(P.hair, 0.9), stripe = flat(P.stripe, 0.8);
    // robed lower body (draped skirt)
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.72, 1.5, 14), toga);
    skirt.position.y = 0.75; skirt.castShadow = true; g.add(skirt);
    // torso
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 1.0, 14), toga);
    torso.position.y = 1.78; torso.castShadow = true; g.add(torso);
    // the toga drape — a diagonal band across the chest
    const drape = box(0.95, 1.5, 0.2, toga, 0, 1.5, 0.34, g);
    drape.rotation.z = 0.5; drape.castShadow = true;
    // shoulder fold over the left
    const fold = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.13, 6, 14, Math.PI), toga);
    fold.position.set(-0.18, 2.05, 0.1); fold.rotation.set(Math.PI / 2, 0, 0.4); g.add(fold);
    // purple stripe / praetexta border along the drape
    const clavus = box(0.12, 1.5, 0.22, stripe, 0.28, 1.5, 0.36, g);
    clavus.rotation.z = 0.5;
    if (P.border) { // praetexta hem along the bottom of the skirt
        const hem = new THREE.Mesh(new THREE.CylinderGeometry(0.73, 0.74, 0.16, 14, 1, true), stripe);
        hem.position.y = 0.16; g.add(hem);
    }
    // head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 14), skin);
    head.position.y = 2.62; head.scale.set(0.92, 1.05, 0.95); head.castShadow = true; g.add(head);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.36, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
    cap.position.y = 2.68; g.add(cap);
    for (const sx of [-0.12, 0.12]) {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), flat(0x2a201a, 0.4));
        eye.position.set(sx, 2.62, 0.31); g.add(eye);
    }
    // right arm folded across (orator); left arm at side under the toga
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.55, 4, 8), skin);
    arm.position.set(0.16, 1.7, 0.34); arm.rotation.set(-1.3, 0, -0.3); arm.castShadow = true; g.add(arm);
    g.userData.armR = arm;
    // laurel for consul; staff for elder
    if (look === 'consul') {
        const w = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.05, 6, 16), flat(0x5e9a4e, 0.8));
        w.position.y = 2.84; w.rotation.x = Math.PI / 2.2; g.add(w);
    }
    if (look === 'elder') {
        const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 6), flat(0x6e4a26, 0.9));
        staff.position.set(-0.6, 1.3, 0.2); staff.rotation.z = 0.08; g.add(staff);
    }
    return g;
}

// a lictor: shorter, plain tunic, fasces on the shoulder
function makeLictor() {
    const g = new THREE.Group();
    const tunic = flat(0xd9cdb0, 0.9), skin = flat(0xceA070 & 0xffffff, 0.7);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 1.5, 10), tunic);
    body.position.y = 0.85; body.castShadow = true; g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), flat(0xd9a06b, 0.7));
    head.position.y = 1.78; head.castShadow = true; g.add(head);
    // fasces: a bundle of rods + an axe, held upright on the shoulder
    const bundle = new THREE.Group(); bundle.position.set(0.34, 1.5, 0.1); bundle.rotation.z = -0.18;
    const rods = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.5, 8), flat(0xb8895a, 0.9));
    bundle.add(rods);
    for (let i = 0; i < 3; i++) { const tie = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.022, 5, 10), flat(0x5a3a1a, 0.9)); tie.position.y = -0.4 + i * 0.4; tie.rotation.x = Math.PI / 2; bundle.add(tie); }
    const axe = box(0.06, 0.26, 0.34, flat(0x9aa0a8, 0.4, 0.6), 0, 0.85, 0.12, bundle);
    g.add(bundle);
    return g;
}

// ---------- name / status sprites ----------
function makeLabel(title, sub) {
    const c = document.createElement('canvas'); c.width = 320; c.height = 96;
    const ctx = c.getContext('2d');
    ctx.textAlign = 'center';
    ctx.font = 'italic 700 40px Lora, Georgia, serif';
    const w = Math.max(ctx.measureText(title).width, ctx.measureText(sub || '').width) + 44;
    ctx.fillStyle = 'rgba(20,16,9,0.82)';
    if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(160 - w / 2, 6, w, 84, 16); ctx.fill(); } else ctx.fillRect(160 - w / 2, 6, w, 84);
    ctx.strokeStyle = '#e6b855'; ctx.lineWidth = 3; ctx.stroke();
    ctx.fillStyle = '#ffe9a8'; ctx.fillText(title, 160, 40);
    if (sub) { ctx.font = '600 22px Inter, sans-serif'; ctx.fillStyle = '#d8c79a'; ctx.fillText(sub, 160, 72); }
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
    sp.scale.set(5.0, 1.5, 1); return sp;
}
function markSprite() {
    const c = document.createElement('canvas'); c.width = 64; c.height = 64;
    return new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false }));
}
function setMark(sp, glyph, color) {
    const ctx = sp.material.map.image.getContext('2d'); ctx.clearRect(0, 0, 64, 64);
    if (glyph) {
        ctx.font = '700 44px Inter, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.lineWidth = 7; ctx.strokeStyle = 'rgba(10,8,5,0.8)'; ctx.strokeText(glyph, 32, 34);
        ctx.fillStyle = color || '#e6b855'; ctx.fillText(glyph, 32, 34);
    }
    sp.material.map.needsUpdate = true;
    sp.scale.set(1.0, 1.0, 1);
}

// ---------- place the magistrates ----------
const npcs = [];
for (const off of DATA.OFFICES) {
    const obj = makeToga(off.look);
    const y = groundHeight(off.x, off.z);
    obj.position.set(off.x, y, off.z); obj.rotation.y = off.ry || 0; scene.add(obj);
    if (off.shadow) obj.traverse(o => { if (o.isMesh && o.material) { o.material = o.material.clone(); o.material.color.multiplyScalar(0.5); } });
    const label = makeLabel(off.office, off.officeEn);
    label.position.set(off.x, y + 3.5, off.z); scene.add(label);
    const mark = markSprite(); mark.position.set(off.x, y + 4.3, off.z); scene.add(mark);
    // lictors form an honour guard leading from the magistrate toward the
    // open hall (toward the centre). We render up to 6; the dialogue states
    // the true number (a consul really has 12).
    if (off.lictors) {
        const shown = Math.min(off.lictors, 6);
        let tcx = 0 - off.x, tcz = -6 - off.z;           // vector toward hall centre
        const tl = Math.hypot(tcx, tcz) || 1; tcx /= tl; tcz /= tl;
        const px = -tcz, pz = tcx;                       // perpendicular (for left/right offset)
        for (let i = 0; i < shown; i++) {
            const lic = makeLictor();
            const rank = Math.floor(i / 2), sideo = (i % 2) ? 0.8 : -0.8;
            const lx = off.x + tcx * (1.8 + rank * 1.5) + px * sideo;
            const lz = off.z + tcz * (1.8 + rank * 1.5) + pz * sideo;
            lic.position.set(lx, groundHeight(lx, lz), lz);
            lic.rotation.y = Math.atan2(-tcx, -tcz);     // face back toward the magistrate
            scene.add(lic);
        }
    }
    addWall(off.x - 0.6, off.z - 0.6, off.x + 0.6, off.z + 0.6);
    npcs.push(Object.assign({}, off, { obj, label, mark, baseY: y, bob: Math.random() * 6 }));
}
const npcById = new Map(npcs.map(n => [n.id, n]));

// ---------- exhibits ----------
const exhibits = [];
function glowPillar(x, z, label) {
    const g = new THREE.Group(); g.position.set(x, 0, z); scene.add(g);
    box(0.9, 1.2, 0.9, flat(MARBLE_D, 0.7), 0, 0.6, 0, g);
    return g;
}
// fasces exhibit — a standing fasces on a plinth
{
    const ex = DATA.EXHIBITS.find(e => e.id === 'fasces');
    const g = glowPillar(ex.x, ex.z);
    const bundle = new THREE.Group(); bundle.position.set(ex.x, 1.2, ex.z); scene.add(bundle);
    const rods = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.7, 10), flat(0xb8895a, 0.9)); rods.position.y = 0.85; rods.castShadow = true; bundle.add(rods);
    for (let i = 0; i < 4; i++) { const tie = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.035, 6, 12), flat(0x5a3a1a, 0.9)); tie.position.y = 0.25 + i * 0.42; tie.rotation.x = Math.PI / 2; bundle.add(tie); }
    box(0.1, 0.5, 0.6, flat(0x9aa0a8, 0.35, 0.7), 0.05, 1.55, 0.2, bundle);
    const mk = markSprite(); mk.position.set(ex.x, 2.6, ex.z); scene.add(mk);
    exhibits.push(Object.assign({}, ex, { mark: mk }));
    addWall(ex.x - 0.6, ex.z - 0.6, ex.x + 0.6, ex.z + 0.6);
}
// ladder tablet — a marble stele
{
    const ex = DATA.EXHIBITS.find(e => e.id === 'ladder');
    const g = new THREE.Group(); g.position.set(ex.x, 0, ex.z); scene.add(g);
    box(0.9, 1.0, 0.9, flat(MARBLE_D, 0.7), 0, 0.5, 0, g);
    const stele = box(2.0, 2.6, 0.3, flat(MARBLE, 0.6), 0, 2.3, 0, g);
    // faint carved lines
    for (let i = 0; i < 5; i++) box(1.5, 0.08, 0.02, flat(MARBLE_DK, 0.8), 0, 3.1 - i * 0.45, 0.16, g);
    const mk = markSprite(); mk.position.set(ex.x, 4.0, ex.z); scene.add(mk);
    exhibits.push(Object.assign({}, ex, { mark: mk }));
    addWall(ex.x - 0.7, ex.z - 0.4, ex.x + 0.7, ex.z + 0.4);
}

// ---------- player ----------
function makePlayer() {
    // a young Roman in a plain toga (the visitor)
    const g = makeToga('pura');
    return g;
}
const player = { obj: makePlayer(), x: 0, z: 9, ry: Math.PI, speed: 6.6, moving: false, walkT: 0 };
player.obj.position.set(player.x, 0, player.z); scene.add(player.obj);

// ---------- DOM ----------
const hudStudied = document.getElementById('hud-studied');
const promptEl = document.getElementById('prompt');
const promptText = document.getElementById('prompt-text');
const dialogEl = document.getElementById('dialog');
const dlgName = document.getElementById('dlg-name');
const dlgSub = document.getElementById('dlg-sub');
const dlgBody = document.getElementById('dlg-body');
const actionBtn = document.getElementById('action-btn');
const ladderRows = document.getElementById('ladder-rows');

function isStudied(id) { return save.studied.includes(id); }
function studiedCount() { return STUDY_IDS.filter(isStudied).length; }
function updateHud() { hudStudied.textContent = studiedCount(); buildLadder(); document.getElementById('btn-sound').textContent = save.muted ? '🔇' : '🔊'; }

function buildLadder() {
    const rows = [];
    const cursus = DATA.OFFICES.filter(o => o.rung >= 1 && o.rung <= 5 && !o.side);
    cursus.forEach((o, i) => {
        const done = isStudied(o.id);
        rows.push(`<div class="ladder-row ${done ? 'done' : ''}"><span class="tick">${done ? '✓' : (i + 1)}</span> ${o.office}<span class="age">${typeof o.age === 'number' ? o.age : (o.id === 'censor' ? '★' : '')}</span></div>`);
    });
    rows.push('<div class="ladder-sep"></div>');
    DATA.OFFICES.filter(o => o.side).forEach(o => {
        const done = isStudied(o.id);
        rows.push(`<div class="ladder-row ${done ? 'done' : ''}"><span class="tick">${done ? '✓' : '·'}</span> ${o.office}</div>`);
    });
    ladderRows.innerHTML = rows.join('');
}

document.getElementById('btn-sound').addEventListener('click', () => { save.muted = !save.muted; persist(); updateHud(); });
document.getElementById('btn-help').addEventListener('click', () => document.getElementById('help').classList.add('open'));
document.getElementById('btn-help-close').addEventListener('click', () => document.getElementById('help').classList.remove('open'));
document.getElementById('btn-start').addEventListener('click', () => { document.getElementById('intro').classList.remove('open'); save.seenIntro = true; persist(); sfx.talk(); });
document.getElementById('btn-victory-close').addEventListener('click', () => document.getElementById('victory').classList.remove('open'));
if (save.seenIntro) document.getElementById('intro').classList.remove('open');
updateHud();

function markStudied(id) {
    if (!STUDY_IDS.includes(id) || isStudied(id)) return;
    save.studied.push(id); persist(); sfx.learn(); updateHud(); refreshMarks();
    if (studiedCount() >= STUDY_IDS.length) {
        setTimeout(() => {
            sfx.done();
            document.getElementById('victory-text').innerHTML =
                'You have met every magistrate of the Republic and learned the whole <b>cursus honorum</b> — from the quaestor counting coins to the censor guarding Rome\'s very soul. <br><br>Return to <b>Appius the Elder</b> by the door for his farewell, or wander the Curia as long as you like.';
            document.getElementById('victory').classList.add('open');
        }, 700);
    }
}
function refreshMarks() {
    for (const n of npcs) {
        if (n.rung === 0) setMark(n.mark, '★', '#e6b855');
        else setMark(n.mark, isStudied(n.id) ? '✓' : '!', isStudied(n.id) ? '#5ecb8a' : '#e6b855');
    }
    for (const ex of exhibits) setMark(ex.mark, '🔍', '#e6b855');
}
refreshMarks();

// ============================================================
// Visual-novel engine
// ============================================================
let vn = null, typeTimer = null, dialogOpen = false;
function runScene(npc, lines, onDone) {
    dialogOpen = true;
    vn = { npc, lines: lines.slice(), i: -1, onDone, typing: false };
    dialogEl.classList.add('open'); document.body.classList.add('vn');
    if (npc && npc.x != null) player.ry = Math.atan2(npc.x - player.x, npc.z - player.z);
    sfx.talk(); advance();
}
function advance() {
    const v = vn; if (!v) return;
    v.i++;
    if (v.i >= v.lines.length) { const d = v.onDone; closeDialog(); if (d) d(); return; }
    const L = v.lines[v.i];
    if (L.do) { L.do(); return advance(); }
    if (L.choice) return renderChoice(L);
    renderLine(L);
}
function renderLine(L) {
    const v = vn;
    const who = L.who || (L.me != null ? 'You' : (v.npc ? v.npc.name : ''));
    const sub = (L.me != null || L.who) ? '' : (v.npc ? (v.npc.office + (v.npc.officeEn ? ' · ' + v.npc.officeEn : '')) : '');
    dlgName.textContent = who; dlgSub.textContent = sub;
    const full = L.me != null ? L.me : L.t;
    dlgBody.innerHTML = `<div class="dlg-text vn-text"></div><div class="vn-next">▸</div>`;
    const target = dlgBody.querySelector('.vn-text'), arrow = dlgBody.querySelector('.vn-next');
    arrow.style.visibility = 'hidden';
    const probe = document.createElement('div'); probe.innerHTML = full; const plain = probe.textContent;
    let n = 0; v.typing = true; clearInterval(typeTimer);
    typeTimer = setInterval(() => {
        n += 2;
        if (n >= plain.length) { clearInterval(typeTimer); target.innerHTML = full; arrow.style.visibility = 'visible'; v.typing = false; return; }
        target.textContent = plain.slice(0, n);
        if (n % 6 === 0) sfx.page();
    }, 16);
}
function finishTyping() {
    const v = vn; if (!v) return; clearInterval(typeTimer);
    const L = v.lines[v.i]; const full = L.me != null ? L.me : L.t;
    const target = dlgBody.querySelector('.vn-text'); if (target) target.innerHTML = full;
    const arrow = dlgBody.querySelector('.vn-next'); if (arrow) arrow.style.visibility = 'visible';
    v.typing = false;
}
function renderChoice(L) {
    const v = vn; const options = L.choice;
    dlgName.textContent = 'You'; dlgSub.textContent = '';
    dlgBody.innerHTML = `<div class="vn-choices">` + options.map((o, i) =>
        `<button class="vn-choice ${o.asked ? 'asked' : ''} ${o.leave ? 'leave' : ''}" data-i="${i}">${o.label}</button>`).join('') + `</div>`;
    dlgBody.querySelectorAll('.vn-choice').forEach(btn => btn.addEventListener('click', e => {
        e.stopPropagation();
        const o = options[parseInt(btn.dataset.i, 10)];
        if (o.leave) { advance(); return; }   // continue to whatever follows the menu (usually scene end)
        o.asked = true;
        sfx.page();
        const ans = (o.say || []).slice();
        if (L.loop) ans.push(Object.assign({}, L));   // re-show this menu after the answer
        v.lines.splice(v.i + 1, 0, ...ans);
        advance();
    }));
}
dialogEl.addEventListener('click', e => {
    if (!vn) return;
    if (e.target.closest('.vn-choice') || e.target.closest('.dlg-close')) return;
    if (vn.typing) finishTyping();
    else if (!dlgBody.querySelector('.vn-choices')) advance();
});
function closeDialog() { dialogOpen = false; vn = null; clearInterval(typeTimer); dialogEl.classList.remove('open'); document.body.classList.remove('vn'); }
document.getElementById('dlg-close').addEventListener('click', closeDialog);

// ---------- build a magistrate conversation ----------
function talkNpc(npc) {
    if (npc.rung === 0) { // the elder guide
        const done = studiedCount() >= STUDY_IDS.length;
        runScene(npc, done ? [{ t: npc.done }] : npc.intro.slice());
        return;
    }
    const lines = npc.intro.slice();
    // the persistent question menu, built from facts
    const f = npc.facts || {};
    const labels = {
        age: 'How old must you be?',
        duties: 'What do you do?',
        number: 'How many of you are there?',
        power: 'What powers do you hold?',
        next: 'What comes next?',
    };
    const opts = [];
    for (const key of ['age', 'duties', 'number', 'power', 'next']) {
        if (f[key]) opts.push({ label: labels[key], say: [{ t: f[key] }] });
    }
    opts.push({ label: '(Step away)', leave: true });
    lines.push({ do: () => markStudied(npc.id) });
    lines.push({ choice: opts, loop: true });
    runScene(npc, lines);
}
function examineExhibit(ex) { runScene({ name: ex.name }, ex.lines.slice()); }

// ---------- input ----------
const keys = {};
window.addEventListener('keydown', e => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
    keys[e.key.toLowerCase()] = true;
    if (e.key === 'Escape') closeDialog();
    if (dialogOpen && (e.key === ' ' || e.key === 'Enter' || e.key === 'e')) {
        if (vn && vn.typing) finishTyping();
        else if (vn && !dlgBody.querySelector('.vn-choices')) advance();
        return;
    }
    if (!dialogOpen && (e.key === 'e' || e.key === 'E' || e.key === ' ' || e.key === 'Enter')) tryInteract();
});
window.addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });

const joyVec = { x: 0, y: 0 };
if ('ontouchstart' in window) {
    document.body.classList.add('touch');
    const joy = document.getElementById('joystick'), knob = document.getElementById('joystick-knob');
    let joyId = null;
    const setKnob = (dx, dy) => { knob.style.transform = `translate(calc(-50% + ${dx * 36}px), calc(-50% + ${dy * 36}px))`; };
    joy.addEventListener('touchstart', e => { joyId = e.changedTouches[0].identifier; e.preventDefault(); }, { passive: false });
    window.addEventListener('touchmove', e => {
        for (const t of e.changedTouches) {
            if (t.identifier !== joyId) continue;
            const r = joy.getBoundingClientRect();
            let dx = (t.clientX - (r.left + r.width / 2)) / (r.width / 2), dy = (t.clientY - (r.top + r.height / 2)) / (r.height / 2);
            const len = Math.hypot(dx, dy); if (len > 1) { dx /= len; dy /= len; }
            joyVec.x = Math.abs(dx) > 0.25 ? dx : 0; joyVec.y = Math.abs(dy) > 0.25 ? dy : 0; setKnob(dx, dy);
        }
    }, { passive: true });
    window.addEventListener('touchend', e => { for (const t of e.changedTouches) if (t.identifier === joyId) { joyId = null; joyVec.x = joyVec.y = 0; setKnob(0, 0); } });
    actionBtn.addEventListener('touchstart', e => { e.preventDefault(); if (!dialogOpen) tryInteract(); }, { passive: false });
}

function nearestTarget() {
    let best = null, bestD = 3.6, kind = null;
    for (const n of npcs) { const d = Math.hypot(n.x - player.x, n.z - player.z); if (d < bestD) { bestD = d; best = n; kind = 'npc'; } }
    for (const ex of exhibits) { const d = Math.hypot(ex.x - player.x, ex.z - player.z); if (d < bestD) { bestD = d; best = ex; kind = 'ex'; } }
    return best ? { t: best, kind } : null;
}
function tryInteract() { const n = nearestTarget(); if (!n) return; if (n.kind === 'npc') talkNpc(n.t); else examineExhibit(n.t); }

// ---------- movement ----------
function collide(x, z) {
    for (const c of colliders) {
        if (x > c.x0 - 0.4 && x < c.x1 + 0.4 && z > c.z0 - 0.4 && z < c.z1 + 0.4) {
            const pen = [
                { v: x - (c.x0 - 0.4), s: () => x = c.x0 - 0.4 },
                { v: (c.x1 + 0.4) - x, s: () => x = c.x1 + 0.4 },
                { v: z - (c.z0 - 0.4), s: () => z = c.z0 - 0.4 },
                { v: (c.z1 + 0.4) - z, s: () => z = c.z1 + 0.4 },
            ];
            pen.sort((a, b) => a.v - b.v)[0].s();
        }
    }
    x = Math.max(HALL.x0 + 0.5, Math.min(HALL.x1 - 0.5, x));
    z = Math.max(HALL.z0 + 0.5, Math.min(HALL.z1 + 5, z));
    return [x, z];
}

// ---------- camera ----------
const clock = new THREE.Clock();
let camX = player.x, camZ = player.z + 12;
const camPos = new THREE.Vector3(player.x, 8, player.z + 11);
const camLook = new THREE.Vector3(player.x, 2, player.z);
const camDesire = new THREE.Vector3(), lookDesire = new THREE.Vector3();

function update(dt, t) {
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
        let nx = player.x + dx * player.speed * dt, nz = player.z + dz * player.speed * dt;
        [nx, nz] = collide(nx, nz); player.x = nx; player.z = nz;
        const targetRy = Math.atan2(dx, dz);
        let dr = targetRy - player.ry; while (dr > Math.PI) dr -= Math.PI * 2; while (dr < -Math.PI) dr += Math.PI * 2;
        player.ry += dr * Math.min(1, dt * 14); player.walkT += dt * 9;
    }
    const py = groundHeight(player.x, player.z);
    player.obj.position.set(player.x, py + (player.moving ? Math.abs(Math.sin(player.walkT)) * 0.08 : 0), player.z);
    player.obj.rotation.y = player.ry;

    if (dialogOpen && vn && vn.npc && vn.npc.x != null) {
        const n = vn.npc; const ny = groundHeight(n.x, n.z);
        let ddx = player.x - n.x, ddz = player.z - n.z; const dd = Math.hypot(ddx, ddz) || 1; ddx /= dd; ddz /= dd;
        camDesire.set(n.x + ddx * 3.4 - ddz * 1.5, ny + 2.8, n.z + ddz * 3.4 + ddx * 1.5);
        lookDesire.set(n.x, ny + 2.0, n.z);
    } else {
        camX += (player.x - camX) * Math.min(1, dt * 3); camZ += (player.z - camZ) * Math.min(1, dt * 3);
        camDesire.set(camX, py + 8.5, camZ + 11); lookDesire.set(camX, py + 2.2, camZ - 5);
    }
    camPos.lerp(camDesire, Math.min(1, dt * 4)); camLook.lerp(lookDesire, Math.min(1, dt * 4));
    camera.position.copy(camPos); camera.lookAt(camLook);

    for (const n of npcs) {
        const d = Math.hypot(n.x - player.x, n.z - player.z);
        if (d < 6 && !n.onDais) {
            const tr = Math.atan2(player.x - n.x, player.z - n.z);
            let dr = tr - n.obj.rotation.y; while (dr > Math.PI) dr -= Math.PI * 2; while (dr < -Math.PI) dr += Math.PI * 2;
            n.obj.rotation.y += dr * Math.min(1, dt * 5);
        }
        n.obj.position.y = n.baseY + Math.sin(t * 1.4 + n.bob) * 0.025;
        n.mark.position.y = n.baseY + 4.3 + Math.sin(t * 2 + n.bob) * 0.1;
    }
    for (const f of flames) { f.ph += dt * 8; const s = 0.85 + Math.sin(f.ph) * 0.15; f.flame.scale.set(s, 0.9 + Math.cos(f.ph * 1.3) * 0.2, s); f.light.intensity = 12 + Math.sin(f.ph) * 3; }

    const tgt = nearestTarget();
    if (tgt && !dialogOpen) {
        promptEl.style.display = 'block';
        promptText.textContent = tgt.kind === 'npc' ? (isStudied(tgt.t.id) ? 'Speak again with ' + tgt.t.name : 'Speak with ' + tgt.t.name) : 'Examine ' + tgt.t.name;
        actionBtn.classList.add('show');
    } else { promptEl.style.display = 'none'; actionBtn.classList.remove('show'); }
}

let acc = 0;
let started = false;
Promise.allSettled(pending).then(() => {
    document.getElementById('loading').style.display = 'none';
    refreshMarks();
});
renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05); acc += dt;
    update(dt, acc); renderer.render(scene, camera);
    if (!window.__ready) { window.__ready = true; document.getElementById('loading').style.display = 'none'; }
});

// debug hooks
window.__game = {
    teleport(x, z) { player.x = x; player.z = z; camX = x; camZ = z; },
    pos: () => [player.x, player.z],
    studied: () => save.studied.slice(),
    talk(id) { const n = npcById.get(id); if (n) talkNpc(n); },
    examine(id) { const e = exhibits.find(x => x.id === id); if (e) examineExhibit(e); },
    advance, choose(i) { const b = dlgBody.querySelectorAll('.vn-choice')[i]; if (b) b.click(); },
    npcs: () => npcs.map(n => ({ id: n.id, x: n.x, z: n.z })),
};
})();
