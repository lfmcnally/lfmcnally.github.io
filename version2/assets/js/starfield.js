// Classicalia v2 — canvas constellations
//
// Draws deliberate constellation shapes (connected line patterns) spread
// across a navy background, with small twinkling vertex stars and thin
// connecting lines that run all the way across — including over text, which
// is the look that gives the page its identity. Gentle floating sway + the
// occasional shooting star keep it alive; no glow, no scatter-field.
//
// Usage:
//   const sky = Starfield.create(canvasEl);
//   sky.resize();  sky.destroy();
//
// Respects prefers-reduced-motion (single static frame).

(function (global) {
  const LINE_RGB = '155,188,255';            // pale blue
  const STAR_COLOURS = ['#ffffff', '#dbe7ff', '#9bbcff'];

  // Constellation shape templates — normalised points in [0,1] + connecting
  // edges. A mix of real-looking patterns; placed at varied sizes, positions
  // and rotations so the sky reads as an organic chart, not a grid.
  const TEMPLATES = [
    { pts: [[0,0.55],[0.22,0.08],[0.46,0.5],[0.72,0.05],[1,0.46]],                       // W
      edges: [[0,1],[1,2],[2,3],[3,4]] },
    { pts: [[0,0.18],[0.24,0.28],[0.48,0.22],[0.7,0.4],[0.72,0.72],[0.46,0.78],[0.44,0.46]], // plough
      edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]] },
    { pts: [[0.12,0.15],[0.62,0.04],[0.4,0.56],[1,0.34]],                                // triangle + tail
      edges: [[0,1],[1,2],[2,0],[1,3]] },
    { pts: [[0,0.5],[0.3,0.4],[0.62,0.52],[0.92,0.34],[0.66,0.92]],                      // line + branch
      edges: [[0,1],[1,2],[2,3],[2,4]] },
    { pts: [[0.5,0],[0.18,0.42],[0.5,1],[0.86,0.46],[0.5,0.5]],                          // kite
      edges: [[0,1],[1,2],[2,3],[3,0],[0,4],[2,4]] },
    { pts: [[0,0.3],[0.28,0.62],[0.5,0.2],[0.78,0.66],[1,0.28],[0.5,0.95]],              // crown + drop
      edges: [[0,1],[1,2],[2,3],[3,4],[1,5],[3,5]] }
  ];

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
  function hexToRgb(hex) { const n = parseInt(hex.slice(1), 16); return [(n>>16)&255,(n>>8)&255,n&255]; }

  function create(canvas, opts) {
    opts = opts || {};
    const ctx = canvas.getContext('2d');
    const lineBase = opts.lineAlpha != null ? opts.lineAlpha : 0.3;
    const reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let dpr = Math.min(global.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    let constellations = [];
    let bgStars = [];
    let rafId = null, lastT = 0;
    let shooting = null, nextShootIn = 4000 + Math.random() * 6000;

    function newVert(bx, by) {
      return {
        bx, by,
        r: 1.3 + Math.random() * 0.9,
        base: 0.6 + Math.random() * 0.35,
        twPhase: Math.random() * Math.PI * 2,
        twSpeed: 0.4 + Math.random() * 1.0
      };
    }
    function withSway(verts, edges) {
      return {
        verts, edges,
        swayAmpX: 5 + Math.random() * 9, swaySpeedX: 0.08 + Math.random() * 0.12, swayPhaseX: Math.random() * 6.28,
        swayAmpY: 4 + Math.random() * 7,  swaySpeedY: 0.07 + Math.random() * 0.11, swayPhaseY: Math.random() * 6.28
      };
    }

    // A compact template shape, scaled/rotated/mirrored and dropped at (cx,cy)
    function buildTemplate(cx, cy, size) {
      const tpl = pick(TEMPLATES);
      const rot = Math.random() * Math.PI * 2;
      const mirror = Math.random() < 0.5 ? -1 : 1;
      const cos = Math.cos(rot), sin = Math.sin(rot);
      const verts = tpl.pts.map(([nx, ny]) => {
        const x = (nx - 0.5) * size * mirror, y = (ny - 0.5) * size;
        return newVert(cx + (x * cos - y * sin), cy + (x * sin + y * cos));
      });
      return withSway(verts, tpl.edges);
    }

    // A long, free-form constellation that sprawls across a wide span with a
    // big zigzag and the odd branch — the "draws across the sky" piece.
    function buildSprawl(cx, cy, span, height) {
      const n = 7 + Math.floor(Math.random() * 5);     // 7–11 points
      const rot = (Math.random() - 0.5) * 0.7;
      const cos = Math.cos(rot), sin = Math.sin(rot);
      const verts = [], edges = [];
      let prevY = (Math.random() - 0.5) * height;
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const lx = (t - 0.5) * span;
        // zigzag: alternate sides of the centre line, with wander
        const dir = (i % 2 === 0) ? 1 : -1;
        let ly = dir * height * (0.3 + Math.random() * 0.7) * 0.5;
        ly = (ly + prevY) * 0.5 + (Math.random() - 0.5) * height * 0.25;
        prevY = ly;
        verts.push(newVert(cx + (lx * cos - ly * sin), cy + (lx * sin + ly * cos)));
        if (i > 0) edges.push([i - 1, i]);
      }
      // occasional branch off a middle vertex
      if (n >= 6 && Math.random() < 0.7) {
        const anchor = 1 + Math.floor(Math.random() * (n - 2));
        const a = verts[anchor];
        verts.push(newVert(a.bx + (Math.random() - 0.5) * span * 0.18,
                            a.by + (Math.random() < 0.5 ? -1 : 1) * height * (0.4 + Math.random() * 0.4)));
        edges.push([anchor, verts.length - 1]);
      }
      return withSway(verts, edges);
    }

    function build() {
      constellations = [];

      // 2–3 big sprawling constellations that span wide bands of the sky
      const bigCount = W < 700 ? 1 : (W < 1100 ? 2 : 3);
      for (let i = 0; i < bigCount; i++) {
        const cx = W * (0.5) + (Math.random() - 0.5) * W * 0.2;
        const cy = H * (0.18 + 0.64 * (i + Math.random() * 0.6) / bigCount);
        const span = W * (0.55 + Math.random() * 0.35);
        const height = H * (0.28 + Math.random() * 0.18);
        constellations.push(buildSprawl(cx, cy, span, height));
      }

      // a handful of smaller accent shapes scattered organically around them
      const smallCount = clamp(Math.round((W * H) / 150000), 3, 7);
      const placed = constellations.map(() => ({ x: W / 2, y: H / 2 }));
      const minDist = Math.min(W, H) * 0.22;
      const pad = 36;
      for (let i = 0; i < smallCount; i++) {
        let best = null, bestD = -1;
        for (let tries = 0; tries < 26; tries++) {
          const cx = pad + Math.random() * (W - 2 * pad);
          const cy = pad + Math.random() * (H - 2 * pad);
          let d = Infinity;
          for (const p of placed) d = Math.min(d, Math.hypot(cx - p.x, cy - p.y));
          if (d > bestD) { bestD = d; best = { x: cx, y: cy }; }
          if (d > minDist) break;
        }
        placed.push(best);
        const size = 90 + Math.random() * 110;
        constellations.push(buildTemplate(best.x, best.y, size));
      }

      // faint background sprinkle for depth (sparse — the lines are the star)
      bgStars = [];
      const n = Math.floor((W * H) / 16000);
      for (let i = 0; i < n; i++) {
        bgStars.push({
          x: Math.random() * W, y: Math.random() * H,
          r: 0.4 + Math.random() * 0.8,
          base: 0.15 + Math.random() * 0.35,
          colour: pick(STAR_COLOURS),
          twPhase: Math.random() * 6.28, twSpeed: 0.3 + Math.random() * 0.9
        });
      }
    }

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      W = w; H = h;
      dpr = Math.min(global.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (reduced) draw(0);
    }

    function twinkleVal(v, tw) {
      return 0.5 + 0.5 * Math.sin(tw * v.twSpeed + v.twPhase);
    }

    function draw(tw) {
      ctx.clearRect(0, 0, W, H);

      // background sprinkle
      for (const s of bgStars) {
        const a = s.base * (0.5 + 0.5 * twinkleVal(s, tw));
        const [r, g, b] = hexToRgb(s.colour);
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // constellations
      for (const con of constellations) {
        const ox = reduced ? 0 : con.swayAmpX * Math.sin(tw * con.swaySpeedX + con.swayPhaseX);
        const oy = reduced ? 0 : con.swayAmpY * Math.sin(tw * con.swaySpeedY + con.swayPhaseY);

        // lines first
        ctx.lineWidth = 0.8;
        for (const [i, j] of con.edges) {
          const a = con.verts[i], b = con.verts[j];
          const tA = 0.55 + 0.45 * twinkleVal(a, tw);
          const tB = 0.55 + 0.45 * twinkleVal(b, tw);
          const alpha = lineBase * (tA + tB) / 2;
          ctx.strokeStyle = `rgba(${LINE_RGB},${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.bx + ox, a.by + oy);
          ctx.lineTo(b.bx + ox, b.by + oy);
          ctx.stroke();
        }
        // vertex stars
        for (const v of con.verts) {
          const a = v.base * (0.55 + 0.45 * twinkleVal(v, tw));
          const [r, g, b] = hexToRgb('#cfe0ff');
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.beginPath();
          ctx.arc(v.bx + ox, v.by + oy, v.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function spawnShooting() {
      const fromLeft = Math.random() < 0.5;
      shooting = {
        x: fromLeft ? Math.random() * W * 0.4 : W * (0.6 + Math.random() * 0.4),
        y: Math.random() * H * 0.4,
        life: 0, max: 0.9 + Math.random() * 0.5, len: 70 + Math.random() * 60,
        vx: 0, vy: 0
      };
      const speed = 480 + Math.random() * 260;
      const angle = (Math.PI / 5) + Math.random() * (Math.PI / 10);
      shooting.vx = Math.cos(angle) * speed * (fromLeft ? 1 : -1);
      shooting.vy = Math.sin(angle) * speed;
    }

    function drawShooting() {
      const s = shooting;
      const h = Math.hypot(s.vx, s.vy);
      const tailX = s.x - (s.vx / h) * s.len, tailY = s.y - (s.vy / h) * s.len;
      const fade = Math.sin(Math.min(s.life / s.max, 1) * Math.PI);
      const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`);
      grad.addColorStop(1, `rgba(${LINE_RGB},0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
    }

    function frame(t) {
      if (!lastT) lastT = t;
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      draw(t / 1000);

      nextShootIn -= dt * 1000;
      if (!shooting && nextShootIn <= 0) { spawnShooting(); nextShootIn = 7000 + Math.random() * 9000; }
      if (shooting) {
        shooting.x += shooting.vx * dt; shooting.y += shooting.vy * dt; shooting.life += dt;
        drawShooting();
        if (shooting.life >= shooting.max) shooting = null;
      }
      rafId = global.requestAnimationFrame(frame);
    }

    function start() {
      if (reduced) { resize(); return; }
      if (rafId == null) { lastT = 0; rafId = global.requestAnimationFrame(frame); }
    }
    function stop() { if (rafId != null) { global.cancelAnimationFrame(rafId); rafId = null; } }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop(); else if (!reduced) start();
    });

    resize();
    start();
    return { resize: () => resize(), destroy: () => stop() };
  }

  global.Starfield = { create };
})(window);
