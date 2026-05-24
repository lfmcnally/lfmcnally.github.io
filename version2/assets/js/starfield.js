// Classicalia v2 — canvas starfield
//
// A gentle night-sky effect for navy hero/panel backgrounds. Fills the whole
// area with stars, fades itself out behind any elements you mark as "exclude"
// (so overlapping text stays readable), draws faint constellation links
// between nearby stars, twinkles by brightness only (no jarring scale-pop),
// drifts slowly, and sends the occasional shooting star.
//
// Usage:
//   const sky = Starfield.create(canvasEl, { excludeEls: [titleEl, deckEl] });
//   sky.resize();      // call after the canvas becomes visible / on layout change
//   sky.destroy();     // stop + clean up
//
// Respects prefers-reduced-motion (renders a single static frame).

(function (global) {
  const PALETTE = ['#ffffff', '#dbe7ff', '#9bbcff', '#6ba0ff'];
  const PALETTE_WEIGHTS = [0.18, 0.32, 0.35, 0.15];

  function weightedColour() {
    let r = Math.random(), acc = 0;
    for (let i = 0; i < PALETTE.length; i++) {
      acc += PALETTE_WEIGHTS[i];
      if (r <= acc) return PALETTE[i];
    }
    return PALETTE[PALETTE.length - 1];
  }

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  // Distance from a point to the nearest edge of a rect; 0 if inside.
  function distOutsideRect(px, py, r) {
    const dx = Math.max(r.x0 - px, 0, px - r.x1);
    const dy = Math.max(r.y0 - py, 0, py - r.y1);
    return Math.hypot(dx, dy);
  }

  function create(canvas, opts) {
    opts = opts || {};
    const ctx = canvas.getContext('2d');
    const excludeEls = opts.excludeEls || [];
    const density = opts.density || 6200;           // one star per N css px²
    const maxStars = opts.maxStars || 340;
    const maxLink = opts.maxLink || 92;             // px distance to link stars
    const exclusionPad = opts.exclusionPad || 12;   // px padding around excluded boxes
    const exclusionFade = opts.exclusionFade || 64; // px falloff band
    const textFloor = opts.textFloor != null ? opts.textFloor : 0.22; // faint stars still show behind text
    const reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let dpr = Math.min(global.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    let stars = [];
    let exRects = [];
    let rafId = null;
    let lastT = 0;
    let shooting = null;
    let nextShootIn = 4000 + Math.random() * 6000;

    function computeExclusion() {
      exRects = [];
      const cr = canvas.getBoundingClientRect();
      for (const el of excludeEls) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        exRects.push({
          x0: r.left - cr.left - exclusionPad,
          y0: r.top  - cr.top  - exclusionPad,
          x1: r.right - cr.left + exclusionPad,
          y1: r.bottom - cr.top + exclusionPad
        });
      }
    }

    // 0 = fully hidden (inside text box), 1 = full brightness (clear of it)
    function exclusionFactor(px, py) {
      if (exRects.length === 0) return 1;
      let f = 1;
      for (const r of exRects) {
        const d = distOutsideRect(px, py, r);
        const local = Math.min(d / exclusionFade, 1);
        if (local < f) f = local;
      }
      return f;
    }

    function buildStars() {
      const count = Math.min(maxStars, Math.floor((W * H) / density));
      stars = [];
      for (let i = 0; i < count; i++) {
        const bright = Math.random() < 0.12;
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: bright ? 1.6 + Math.random() * 1.1 : 0.5 + Math.random() * 1.0,
          base: bright ? 0.75 + Math.random() * 0.25 : 0.3 + Math.random() * 0.45,
          colour: weightedColour(),
          glow: bright,
          twPhase: Math.random() * Math.PI * 2,
          twSpeed: 0.4 + Math.random() * 1.1,         // radians / sec
          vx: (Math.random() - 0.5) * 6,              // px / sec
          vy: (Math.random() - 0.5) * 3
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
      buildStars();
      computeExclusion();
      if (reduced) drawStatic();
    }

    function drawStatic() {
      ctx.clearRect(0, 0, W, H);
      drawLinks(1);
      for (const s of stars) {
        const ex = exclusionFactor(s.x, s.y);
        drawStar(s, s.base * (textFloor + (1 - textFloor) * ex), ex);
      }
    }

    // alpha = final dot brightness; ex = raw exclusion factor (0 = behind text),
    // used to fade the glow halo fully so bright stars don't bloom over text.
    function drawStar(s, alpha, ex) {
      if (alpha <= 0.01) return;
      if (ex == null) ex = 1;
      const [r, g, b] = hexToRgb(s.colour);
      if (s.glow && ex > 0.15) {
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.5 * ex})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      // Shrink the dot slightly behind text so the faint fill stays unobtrusive
      const radius = s.r * (0.6 + 0.4 * ex);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawLinks(globalAlpha) {
      ctx.lineWidth = 0.6;
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        const af = exclusionFactor(a.x, a.y);
        if (af <= 0.05) continue;
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxLink * maxLink) continue;
          const bf = exclusionFactor(b.x, b.y);
          if (bf <= 0.05) continue;
          const d = Math.sqrt(d2);
          const fade = (1 - d / maxLink) * Math.min(af, bf) * 0.16 * globalAlpha;
          if (fade <= 0.01) continue;
          ctx.strokeStyle = `rgba(155,188,255,${fade})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    function spawnShooting() {
      // Start near the top, head down and across
      const fromLeft = Math.random() < 0.5;
      const startX = fromLeft ? Math.random() * W * 0.4 : W * (0.6 + Math.random() * 0.4);
      const startY = Math.random() * H * 0.4;
      const dir = fromLeft ? 1 : -1;
      const speed = 480 + Math.random() * 260;       // px / sec
      const angle = (Math.PI / 5) + Math.random() * (Math.PI / 10);
      shooting = {
        x: startX, y: startY,
        vx: Math.cos(angle) * speed * dir,
        vy: Math.sin(angle) * speed,
        life: 0, max: 0.9 + Math.random() * 0.5,
        len: 70 + Math.random() * 60
      };
    }

    function drawShooting() {
      const s = shooting;
      const tailX = s.x - (s.vx / Math.hypot(s.vx, s.vy)) * s.len;
      const tailY = s.y - (s.vy / Math.hypot(s.vx, s.vy)) * s.len;
      const fade = Math.sin(Math.min(s.life / s.max, 1) * Math.PI); // ease in/out
      const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`);
      grad.addColorStop(1, 'rgba(155,188,255,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
    }

    function frame(t) {
      if (!lastT) lastT = t;
      const dt = Math.min((t - lastT) / 1000, 0.05);   // seconds, clamped
      lastT = t;

      ctx.clearRect(0, 0, W, H);

      // update + draw links first (under stars)
      drawLinks(1);

      const tw = t / 1000;
      for (const s of stars) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.x < -5) s.x = W + 5; else if (s.x > W + 5) s.x = -5;
        if (s.y < -5) s.y = H + 5; else if (s.y > H + 5) s.y = -5;
        const twinkle = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(tw * s.twSpeed + s.twPhase));
        const ex = exclusionFactor(s.x, s.y);
        drawStar(s, s.base * twinkle * (textFloor + (1 - textFloor) * ex), ex);
      }

      // shooting star
      nextShootIn -= dt * 1000;
      if (!shooting && nextShootIn <= 0) {
        spawnShooting();
        nextShootIn = 7000 + Math.random() * 9000;
      }
      if (shooting) {
        shooting.x += shooting.vx * dt;
        shooting.y += shooting.vy * dt;
        shooting.life += dt;
        drawShooting();
        if (shooting.life >= shooting.max) shooting = null;
      }

      rafId = global.requestAnimationFrame(frame);
    }

    function start() {
      if (reduced) { resize(); return; }
      if (rafId == null) { lastT = 0; rafId = global.requestAnimationFrame(frame); }
    }
    function stop() {
      if (rafId != null) { global.cancelAnimationFrame(rafId); rafId = null; }
    }

    // Pause when the tab/section isn't visible (saves battery)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else if (!reduced) start();
    });

    resize();
    start();

    return {
      resize: () => { resize(); },
      destroy: () => { stop(); }
    };
  }

  global.Starfield = { create };
})(window);
