// ============================================================
// Procedural classical materials — veined marble, opus sectile
// floors, marble wall revetment, porphyry & giallo antico.
// Canvas-generated so nothing extra needs shipping, and it looks
// far richer than flat colour fills.
// ============================================================
import * as THREE from 'three';

function rnd(seed) { // tiny deterministic PRNG so a material looks the same each load
    let s = seed >>> 0;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
function hex(c) { return '#' + c.toString(16).padStart(6, '0'); }
function lerpHex(a, b, t) {
    const ar = (a >> 16) & 255, ag = (a >> 8) & 255, ab = a & 255;
    const br = (b >> 16) & 255, bg = (b >> 8) & 255, bb = b & 255;
    return ((ar + (br - ar) * t) | 0) << 16 | ((ag + (bg - ag) * t) | 0) << 8 | ((ab + (bb - ab) * t) | 0);
}

// ---- a slab of veined marble on an existing 2D context ----
function paintMarble(ctx, x, y, w, h, base, vein, light, seed) {
    const r = rnd(seed);
    ctx.save();
    ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    ctx.fillStyle = hex(base); ctx.fillRect(x, y, w, h);
    // soft cloudy value variation
    for (let i = 0; i < 22; i++) {
        const cx = x + r() * w, cy = y + r() * h, rad = (0.18 + r() * 0.5) * Math.max(w, h);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        const tint = r() < 0.5 ? light : lerpHex(base, vein, 0.25);
        g.addColorStop(0, hex(tint)); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.globalAlpha = 0.10 + r() * 0.12; ctx.fillStyle = g;
        ctx.fillRect(x, y, w, h);
    }
    // veins — branching random walks
    ctx.globalAlpha = 1; ctx.lineCap = 'round';
    const systems = 5 + (r() * 5 | 0);
    for (let s = 0; s < systems; s++) {
        let px = x + r() * w, py = y + r() * h;
        let ang = r() * Math.PI * 2;
        const steps = 40 + (r() * 60 | 0);
        const passes = [[3.2, 0.05], [1.6, 0.10], [0.7, 0.16]];
        for (const [lw, al] of passes) {
            ctx.beginPath(); ctx.moveTo(px, py);
            let ax = px, ay = py, a = ang;
            for (let i = 0; i < steps; i++) {
                a += (r() - 0.5) * 0.6;
                ax += Math.cos(a) * (w / steps) * (0.8 + r() * 0.6);
                ay += Math.sin(a) * (h / steps) * (0.8 + r() * 0.6);
                ctx.lineTo(ax, ay);
            }
            ctx.strokeStyle = `rgba(${(vein >> 16) & 255},${(vein >> 8) & 255},${vein & 255},${al})`;
            ctx.lineWidth = lw; ctx.stroke();
        }
        // a faint light vein alongside
        if (r() < 0.6) {
            ctx.beginPath(); ctx.moveTo(px + 2, py + 2);
            let ax = px + 2, ay = py + 2, a = ang;
            for (let i = 0; i < steps; i++) { a += (r() - 0.5) * 0.6; ax += Math.cos(a) * (w / steps); ay += Math.sin(a) * (h / steps); ctx.lineTo(ax, ay); }
            ctx.strokeStyle = `rgba(${(light >> 16) & 255},${(light >> 8) & 255},${light & 255},0.10)`;
            ctx.lineWidth = 1.2; ctx.stroke();
        }
    }
    ctx.restore();
}

// derive a subtle normal map from a greyscale height canvas
function normalFromCanvas(src, strength) {
    const w = src.width, h = src.height;
    const sctx = src.getContext('2d');
    const sd = sctx.getImageData(0, 0, w, h).data;
    const out = document.createElement('canvas'); out.width = w; out.height = h;
    const octx = out.getContext('2d');
    const od = octx.createImageData(w, h);
    const at = (x, y) => sd[((((y + h) % h) * w) + ((x + w) % w)) * 4];
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const dx = (at(x - 1, y) - at(x + 1, y)) / 255 * strength;
        const dy = (at(x, y - 1) - at(x, y + 1)) / 255 * strength;
        let nx = dx, ny = dy, nz = 1;
        const len = Math.hypot(nx, ny, nz);
        const i = (y * w + x) * 4;
        od.data[i] = (nx / len * 0.5 + 0.5) * 255;
        od.data[i + 1] = (ny / len * 0.5 + 0.5) * 255;
        od.data[i + 2] = (nz / len * 0.5 + 0.5) * 255;
        od.data[i + 3] = 255;
    }
    octx.putImageData(od, 0, 0);
    return out;
}

function tex(canvas, repeat, srgb) {
    const t = new THREE.CanvasTexture(canvas);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    if (repeat) t.repeat.set(repeat, repeat);
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.anisotropy = 8;
    return t;
}

// ---- public builders ----
// White marble (Carrara/Luna) with subtle grey veins
export function marbleMaterial({ base = 0xeae3d2, vein = 0x9b9484, light = 0xfbf7ee, seed = 7, size = 1024, repeat = 1, rough = 0.28, normalStrength = 1.4, env = 1.0 } = {}) {
    const c = document.createElement('canvas'); c.width = c.height = size;
    const ctx = c.getContext('2d');
    paintMarble(ctx, 0, 0, size, size, base, vein, light, seed);
    // height canvas (greyscale clone via vein darkness)
    const hc = document.createElement('canvas'); hc.width = hc.height = size;
    const hctx = hc.getContext('2d'); hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, size, size);
    paintMarble(hctx, 0, 0, size, size, 0x808080, 0x303030, 0xc0c0c0, seed);
    const mat = new THREE.MeshStandardMaterial({
        map: tex(c, repeat, true),
        normalMap: tex(normalFromCanvas(hc, normalStrength), repeat, false),
        roughness: rough, metalness: 0.0, envMapIntensity: env,
    });
    mat.normalScale.set(0.45, 0.45);
    return mat;
}

// Opus sectile floor — a geometric inlay of coloured marbles
export function opusSectileMaterial({ size = 1024, repeat = 1 } = {}) {
    const c = document.createElement('canvas'); c.width = c.height = size;
    const ctx = c.getContext('2d');
    const r = rnd(99);
    // a field of large squares, each a rotated inset diamond — classic Roman
    const N = 4, cell = size / N;
    for (let gy = 0; gy < N; gy++) for (let gx = 0; gx < N; gx++) {
        const x = gx * cell, y = gy * cell;
        paintMarble(ctx, x, y, cell, cell, 0xe7dfcc, 0x9b9484, 0xfbf7ee, 100 + gx * 7 + gy * 13);
        // inset diamond of porphyry or giallo
        ctx.save();
        ctx.translate(x + cell / 2, y + cell / 2); ctx.rotate(Math.PI / 4);
        const d = cell * 0.42;
        const useGold = (gx + gy) % 2 === 0;
        paintMarble(ctx, -d, -d, d * 2, d * 2, useGold ? 0xb98a36 : 0x6e2630, useGold ? 0x7c5a1e : 0x441018, useGold ? 0xdcae5e : 0x9c4450, 200 + gx + gy * 5);
        ctx.restore();
    }
    // dark joint grid
    ctx.strokeStyle = 'rgba(40,30,22,0.55)'; ctx.lineWidth = size / 360;
    for (let i = 0; i <= N; i++) { ctx.beginPath(); ctx.moveTo(i * cell, 0); ctx.lineTo(i * cell, size); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * cell); ctx.lineTo(size, i * cell); ctx.stroke(); }
    const mat = new THREE.MeshStandardMaterial({ map: tex(c, repeat, true), roughness: 0.22, metalness: 0, envMapIntensity: 1.1 });
    return mat;
}

// Marble wall revetment — big book-matched panels with thin joints,
// a porphyry dado below and a giallo cornice band above.
export function revetmentMaterial({ size = 1024, repeat = 1, env = 0.7 } = {}) {
    const c = document.createElement('canvas'); c.width = c.height = size;
    const ctx = c.getContext('2d');
    const dado = size * 0.22, cornice = size * 0.08;
    // main marble field split into 4 vertical panels
    const cols = 4, pw = size / cols;
    for (let i = 0; i < cols; i++) paintMarble(ctx, i * pw, 0, pw, size - dado, 0xe9e2d0, 0x8f897a, 0xfaf6ec, 11 + i * 17);
    // panel joints
    ctx.strokeStyle = 'rgba(50,40,30,0.5)'; ctx.lineWidth = size / 300;
    for (let i = 0; i <= cols; i++) { ctx.beginPath(); ctx.moveTo(i * pw, 0); ctx.lineTo(i * pw, size - dado); ctx.stroke(); }
    // dado (porphyry)
    paintMarble(ctx, 0, size - dado, size, dado, 0x6e2630, 0x441018, 0x9c4450, 55);
    ctx.fillStyle = 'rgba(30,20,15,0.6)'; ctx.fillRect(0, size - dado - size / 220, size, size / 220);
    // cornice (giallo + gilt line)
    paintMarble(ctx, 0, 0, size, cornice, 0xb98a36, 0x7c5a1e, 0xdcae5e, 77);
    ctx.fillStyle = 'rgba(214,178,94,0.9)'; ctx.fillRect(0, cornice, size, size / 260);
    const mat = new THREE.MeshStandardMaterial({ map: tex(c, repeat, true), roughness: 0.45, metalness: 0, envMapIntensity: env });
    return mat;
}

// Solid coloured marble materials (for accents / tinting models)
export function porphyryMaterial(opts = {}) { return marbleMaterial(Object.assign({ base: 0x6e2630, vein: 0x3a0e14, light: 0x9c4450, seed: 31, rough: 0.22, env: 1.1 }, opts)); }
export function gialloMaterial(opts = {}) { return marbleMaterial(Object.assign({ base: 0xb98a36, vein: 0x6e4e16, light: 0xe0b25e, seed: 41, rough: 0.3, env: 1.0 }, opts)); }
