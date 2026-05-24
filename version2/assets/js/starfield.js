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

  // Constellation templates — normalised points in [0,1] and the edges that
  // connect them. Chosen to look like real star patterns (zigzags, a plough,
  // a kite, a branch) rather than random scribbles.
  const TEMPLATES = [
    { // Cassiopeia-style W
      pts: [[0,0.55],[0.22,0.08],[0.46,0.5],[0.72,0.05],[1,0.46]],
      edges: [[0,1],[1,2],[2,3],[3,4]]
    },
    { // the Plough — handle + bowl
      pts: [[0,0.18],[0.24,0.28],[0.48,0.22],[0.7,0.4],[0.72,0.72],[0.46,0.78],[0.44,0.46]],
      edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]]
    },
    { // triangle with a tail
      pts: [[0.12,0.15],[0.62,0.04],[0.4,0.56],[1,0.34]],
      edges: [[0,1],[1,2],[2,0],[1,3]]
    },
    { // line with a branch
      pts: [[0,0.5],[0.3,0.4],[0.62,0.52],[0.92,0.34],[0.66,0.92]],
      edges: [[0,1],[1,2],[2,3],[2,4]]
    },
    { // kite
      pts: [[0.5,0],[0.18,0.42],[0.5,1],[0.86,0.46],[0.5,0.5]],
      edges: [[0,1],[1,2],[2,3],[3,0],[0,4],[2,4]]
    }
  ];

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function hexToRgb(hex) { const n = parseInt(hex.slice(1), 16); return [(n>>16)&255,(n>>8)&255,n&255]; }

  function create(canvas, opts) {
    opts = opts || {};
    const ctx = canvas.getContext('2d');
    const lineBase = opts.lineAlpha != null ? opts.lineAlpha : 0.3;
    const cellSize = opts.cellSize || 360;       // ~one constellation per cell
    const reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let dpr = Math.min(global.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    let constellations = [];
    let bgStars = [];
    let rafId = null, lastT = 0;
    let shooting = null, nextShootIn = 4000 + Math.random() * 6000;

    function buildConstellation(cx, cy, size) {
      const tpl = pick(TEMPLATES);
      const rot = (Math.random() - 0.5) * 0.5;            // ±0.25 rad
      const mirror = Math.random() < 0.5 ? -1 : 1;
      const cos = Math.cos(rot), sin = Math.sin(rot);
      const verts = tpl.pts.map(([nx, ny]) => {
        // centre the template on its own midpoint, scale, rotate, place
        let x = (nx - 0.5) * size * mirror;
        let y = (ny - 0.5) * size;
        const rx = x * cos - y * sin;
        const ry = x * sin + y * cos;
        return {
          bx: cx + rx, by: cy + ry,
          r: 1.3 + Math.random() * 0.9,
          base: 0.6 + Math.random() * 0.35,
          twPhase: Math.random() * Math.PI * 2,
          twSpeed: 0.4 + Math.random() * 1.0
        };
      });
      return {
        verts, edges: tpl.edges,
        swayAmpX: 5 + Math.random() * 9, swaySpeedX: 0.08 + Math.random() * 0.12, swayPhaseX: Math.random() * 6.28,
        swayAmpY: 4 + Math.random() * 7,  swaySpeedY: 0.07 + Math.random() * 0.11, swayPhaseY: Math.random() * 6.28
      };
    }

    function build() {
      constellations = [];
      const cols = Math.max(2, Math.round(W / cellSize));
      const rows = Math.max(1, Math.round(H / (cellSize * 0.82)));
      const cw = W / cols, ch = H / rows;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // jittered centre within the cell
          const cx = (c + 0.5) * cw + (Math.random() - 0.5) * cw * 0.35;
          const cy = (r + 0.5) * ch + (Math.random() - 0.5) * ch * 0.35;
          const size = Math.min(cw, ch) * (0.62 + Math.random() * 0.3);
          constellations.push(buildConstellation(cx, cy, size));
        }
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
