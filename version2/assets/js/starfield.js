// Classicalia v2 — canvas constellations (static star chart)
//
// A calm, layered night sky drawn once (and redrawn on resize). Three tiers
// of background stars give depth; a set of nodes across the upper region are
// connected to their 1–2 nearest neighbours, which produces organic
// constellation chains rather than a grid or predefined shapes.
//
// Layout is deterministic (seeded RNG) so resizing doesn't reshuffle it.
//
// Usage:
//   const sky = Starfield.create(canvasEl, { seed: 101, nodeRegion: 0.65 });
//   sky.resize();  sky.destroy();

(function (global) {
  // Seeded LCG — same seed gives the same sequence, so the field is stable.
  function rng(seed) {
    let s = seed >>> 0;
    return () => {
      s = (Math.imul(1664525, s) + 1013904223) >>> 0;
      return s / 0xffffffff;
    };
  }

  const REF_AREA = 1440 * 520;   // counts below are tuned for this, then scaled

  function create(canvas, opts) {
    opts = opts || {};
    const ctx = canvas.getContext('2d');
    const seed = opts.seed || 101;
    const nodeRegion = opts.nodeRegion != null ? opts.nodeRegion : 0.65; // nodes live in the top fraction
    const bg = opts.background || '#0E1E3F';
    const lineAlpha = opts.lineAlpha != null ? opts.lineAlpha : 0.15;
    const lineRgb = opts.lineRgb || '26,111,255';
    const starRgb = opts.starRgb || '255,255,255';

    function draw() {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      if (w === 0 || h === 0) return;
      const dpr = Math.min(global.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const areaScale = (w * h) / REF_AREA;

      // ── background ──
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // ── three tiers of stars (one seed so they're stable) ──
      const rs = rng(seed);
      const dust   = Math.round(420 * areaScale);
      const mid    = Math.round(160 * areaScale);
      const bright = Math.round(32  * areaScale);

      for (let i = 0; i < dust; i++) {
        ctx.beginPath();
        ctx.arc(rs() * w, rs() * h, 0.35 + rs() * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRgb},${0.08 + rs() * 0.13})`;
        ctx.fill();
      }
      for (let i = 0; i < mid; i++) {
        ctx.beginPath();
        ctx.arc(rs() * w, rs() * h, 0.6 + rs() * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRgb},${0.2 + rs() * 0.3})`;
        ctx.fill();
      }
      for (let i = 0; i < bright; i++) {
        ctx.beginPath();
        ctx.arc(rs() * w, rs() * h, 1.2 + rs() * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRgb},${0.5 + rs() * 0.4})`;
        ctx.fill();
      }

      // ── constellation nodes across the upper region, full width ──
      const rn = rng(seed + 99);
      const nodeCount = Math.max(12, Math.min(44, Math.round(22 * (w / 1440) * (nodeRegion / 0.65) * 1.0)));
      const nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({ x: rn() * w, y: rn() * h * nodeRegion });
      }

      // ── connect nodes to nearest neighbours, capped at 2 links each ──
      const edges = [];
      const maxD = w * 0.22;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) edges.push({ i, j, d });
        }
      }
      edges.sort((a, b) => a.d - b.d);

      const linkCount = new Array(nodes.length).fill(0);
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = `rgba(${lineRgb},${lineAlpha})`;
      for (const { i, j } of edges) {
        if (linkCount[i] >= 2 || linkCount[j] >= 2) continue;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
        linkCount[i]++; linkCount[j]++;
      }

      // ── node stars on top of the lines ──
      const rstar = rng(seed + 404);
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.0 + rstar() * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRgb},${0.42 + rstar() * 0.5})`;
        ctx.fill();
      }
    }

    draw();
    return { resize: draw, destroy: function () {} };
  }

  global.Starfield = { create };

  // Auto-initialise any <canvas data-starfield> (header backgrounds on
  // subject/dashboard pages). The homepage inits its hero/curtain manually,
  // so those canvases don't carry the attribute.
  function autoInit() {
    const canvases = document.querySelectorAll('canvas[data-starfield]');
    if (!canvases.length) return;
    const instances = [];
    canvases.forEach(c => {
      instances.push(create(c, {
        seed: parseInt(c.dataset.seed || '101', 10),
        nodeRegion: parseFloat(c.dataset.region || '0.7'),
        background: c.dataset.bg || undefined,
        starRgb: c.dataset.star || undefined,
        lineRgb: c.dataset.line || undefined,
        lineAlpha: c.dataset.lineAlpha != null ? parseFloat(c.dataset.lineAlpha) : undefined
      }));
    });
    let t;
    global.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(() => instances.forEach(i => i.resize()), 150);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoInit);
  else autoInit();
})(window);
