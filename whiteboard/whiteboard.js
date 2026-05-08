// Lesson Canvas — whiteboard with PDF support, drawing, multi-page lessons.
// Depends on pdfjsLib (loaded via CDN script tag in whiteboard.html).

// pdf.js needs an explicit worker URL. Use the matching version from cdnjs.
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const STORAGE_KEY = 'lc_v8';
const DPR = window.devicePixelRatio || 1;

// ── State ──────────────────────────────────────────────────────────────
let pages = [], cur = 0;
let tool = 'pen', colour = '#1a1a1a', penSize = 3, opacity = 1.0;
let drawing = false, stroke = null;
let zoom = 1.0;
let selImg = null, dragSt = null, resizeSt = null;

// ── DOM ────────────────────────────────────────────────────────────────
const canvasArea = document.getElementById('canvas-area');
const scroller   = document.getElementById('scroller');
const sizer      = document.getElementById('sizer');
const wrap       = document.getElementById('content-wrap');
const pdfPages   = document.getElementById('pdf-pages');
const imgLayer   = document.getElementById('img-layer');
const drawCanvas = document.getElementById('draw-canvas');
const dctx       = drawCanvas.getContext('2d');
const pageList   = document.getElementById('page-list');
const titleInput = document.getElementById('page-title');
const lessonName = document.getElementById('lesson-name');
const lessonSel  = document.getElementById('lesson-sel');
const toastEl    = document.getElementById('toast');
const modalEl    = document.getElementById('modal-overlay');
const modalInp   = document.getElementById('modal-input');
const zoomValEl  = document.getElementById('zoom-val');
const loadingEl  = document.getElementById('loading');
const bgDiv      = document.getElementById('bg-div');

// ── Utilities ──────────────────────────────────────────────────────────
let toastTimer;
function toast(msg, ms = 1800) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms);
}
function showLoad(m = 'Loading…') {
  loadingEl.querySelector('span').textContent = m;
  loadingEl.style.display = 'flex';
}
function hideLoad() { loadingEl.style.display = 'none'; }

let mRes;
function modal(title, ph = '') {
  document.getElementById('modal-title').textContent = title;
  modalInp.placeholder = ph;
  modalInp.value = '';
  modalEl.style.display = 'flex';
  setTimeout(() => modalInp.focus(), 40);
  return new Promise(r => { mRes = r; });
}
document.getElementById('modal-ok').onclick = () => {
  modalEl.style.display = 'none';
  if (mRes) mRes(modalInp.value.trim());
};
document.getElementById('modal-cancel').onclick = () => {
  modalEl.style.display = 'none';
  if (mRes) mRes(null);
};
modalInp.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('modal-ok').click();
  if (e.key === 'Escape') document.getElementById('modal-cancel').click();
});

function readDataURL(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}
function loadImg(src) {
  return new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => res(i);
    i.onerror = rej;
    i.src = src;
  });
}
function ab2b64(b) {
  const u = new Uint8Array(b);
  let s = '';
  for (let i = 0; i < u.byteLength; i++) s += String.fromCharCode(u[i]);
  return btoa(s);
}
function b642ab(s) {
  const b = atob(s);
  const u = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
  return u.buffer;
}

// ── Content sizing ─────────────────────────────────────────────────────
// contentW/H = logical (unscaled) CSS size of the scrollable content.
// The visual size on screen is contentW*zoom × contentH*zoom — we drive that
// through the #sizer element so scrollbars reflect the zoomed area.
let contentW = 800, contentH = 600;

function setContentSize(w, h) {
  contentW = w;
  contentH = h;
  wrap.style.width  = w + 'px';
  wrap.style.height = h + 'px';
  drawCanvas.style.width  = w + 'px';
  drawCanvas.style.height = h + 'px';
  drawCanvas.width  = Math.round(w * DPR);
  drawCanvas.height = Math.round(h * DPR);
  dctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  imgLayer.style.width  = w + 'px';
  imgLayer.style.height = h + 'px';
  applyZoom();
}

function applyZoom() {
  wrap.style.transform = `scale(${zoom})`;
  // The sizer takes up the *visual* size so the scroll area is correct.
  sizer.style.width  = (contentW * zoom) + 'px';
  sizer.style.height = (contentH * zoom) + 'px';
  zoomValEl.textContent = Math.round(zoom * 100) + '%';
}

// pointer event → unscaled content coordinates (accounts for zoom + scroll)
function ptToContent(e) {
  const r = wrap.getBoundingClientRect();
  const src = e.touches ? e.touches[0] : e;
  return { x: (src.clientX - r.left) / zoom, y: (src.clientY - r.top) / zoom };
}

// ── Page data ──────────────────────────────────────────────────────────
function mkPage(title = 'Page') {
  return {
    id: Date.now() + Math.random(),
    title,
    bgType: 'blank',
    pdfDoc: null,
    pdfB64: null,
    pdfRenderedAtWidth: null, // CSS px width PDF was rasterised at
    images: [],
    strokes: [],
    redo: []
  };
}
function addPage(title) {
  const p = mkPage(title || `Page ${pages.length + 1}`);
  pages.push(p);
  cur = pages.length - 1;
  renderSidebar();
  switchPage(cur);
}
async function switchPage(idx) {
  if (idx < 0 || idx >= pages.length) return;
  cur = idx;
  titleInput.value = pages[idx].title;
  selImg = null;
  scroller.scrollTop = 0;
  zoom = 1.0;
  renderSidebar();
  await renderPage();
}

// ── Render ─────────────────────────────────────────────────────────────
async function renderPage() {
  const p = pages[cur];
  if (!p) return;
  pdfPages.innerHTML = '';
  pdfPages.style.display = 'none';

  if (p.bgType === 'pdf' && p.pdfDoc) {
    bgDiv.style.display = 'none';
    await renderPDF(p);
  } else {
    const w = scroller.clientWidth  || 800;
    const h = scroller.clientHeight || 600;
    bgDiv.style.display = 'block';
    bgDiv.style.width   = w + 'px';
    bgDiv.style.height  = h + 'px';
    setContentSize(w, h);
  }

  rebuildImgLayer(p);
  replayStrokes(p);
  schedThumb(cur);
}

async function renderPDF(p) {
  const doc = p.pdfDoc;
  // Use the width the PDF was first rendered at, so strokes stay anchored
  // even after window resizes. Fall back to current viewport on first render.
  const vpW = p.pdfRenderedAtWidth || (scroller.clientWidth || 800);
  p.pdfRenderedAtWidth = vpW;

  pdfPages.style.display = 'block';

  let totalH = 0;
  const GAP = 8;

  for (let pn = 1; pn <= doc.numPages; pn++) {
    const page  = await doc.getPage(pn);
    const vp0   = page.getViewport({ scale: 1 });
    const scale = vpW / vp0.width;
    const vp    = page.getViewport({ scale });

    const pc   = document.createElement('canvas');
    const cssW = Math.round(vp.width);
    const cssH = Math.round(vp.height);
    pc.style.display = 'block';
    pc.style.position = 'absolute';
    pc.style.top  = totalH + 'px';
    pc.style.left = '0';
    pc.style.width  = cssW + 'px';
    pc.style.height = cssH + 'px';
    pc.width  = Math.round(cssW * DPR);
    pc.height = Math.round(cssH * DPR);
    const pctx = pc.getContext('2d');
    const hiVp = page.getViewport({ scale: scale * DPR });
    await page.render({ canvasContext: pctx, viewport: hiVp }).promise;
    pdfPages.appendChild(pc);

    if (pn < doc.numPages) {
      const gap = document.createElement('div');
      gap.style.cssText =
        `position:absolute;top:${totalH + cssH}px;left:0;width:${vpW}px;height:${GAP}px;background:#ccc;`;
      pdfPages.appendChild(gap);
    }

    totalH += cssH + (pn < doc.numPages ? GAP : 0);
  }

  pdfPages.style.width  = vpW + 'px';
  pdfPages.style.height = totalH + 'px';
  setContentSize(vpW, totalH);
}

// ── Strokes ────────────────────────────────────────────────────────────
function replayStrokes(p) {
  dctx.clearRect(0, 0, contentW, contentH);
  p.strokes.forEach(s => drawStroke(dctx, s));
}
function drawStroke(c, s) {
  if (s.type === 'text') {
    c.save();
    c.globalAlpha = s.opacity || 1;
    c.fillStyle = s.colour;
    c.font = `${Math.max(14, s.size * 5)}px Segoe UI,sans-serif`;
    c.fillText(s.text, s.x, s.y);
    c.restore();
    return;
  }
  if (!s.pts || s.pts.length < 2) return;
  c.save();
  c.globalAlpha = s.tool === 'hl' ? 0.38 : s.opacity;
  c.strokeStyle = s.colour;
  c.lineWidth = s.size;
  c.lineCap = c.lineJoin = 'round';
  if (s.tool === 'hl') c.globalCompositeOperation = 'multiply';
  if (s.tool === 'er') {
    c.globalCompositeOperation = 'destination-out';
    c.globalAlpha = 1;
  }
  c.beginPath();
  c.moveTo(s.pts[0].x, s.pts[0].y);
  for (let i = 1; i < s.pts.length; i++) {
    const mx = (s.pts[i - 1].x + s.pts[i].x) / 2;
    const my = (s.pts[i - 1].y + s.pts[i].y) / 2;
    c.quadraticCurveTo(s.pts[i - 1].x, s.pts[i - 1].y, mx, my);
  }
  c.stroke();
  c.restore();
}

// ── Draw events ────────────────────────────────────────────────────────
drawCanvas.addEventListener('pointerdown', e => {
  if (tool === 'move') return;
  selImg = null;
  rebuildImgLayer(pages[cur]);
  if (tool === 'text') { doText(e); return; }
  drawing = true;
  const pt = ptToContent(e);
  stroke = {
    tool: tool === 'pen' ? 'pen' : tool === 'hl' ? 'hl' : 'er',
    colour: tool === 'er' ? '#000' : colour,
    size: tool === 'hl' ? penSize * 3 : tool === 'er' ? penSize * 2 : penSize,
    opacity,
    pts: [pt]
  };
  e.preventDefault();
});
drawCanvas.addEventListener('pointermove', e => {
  if (!drawing || !stroke) return;
  stroke.pts.push(ptToContent(e));
  replayStrokes(pages[cur]);
  drawStroke(dctx, stroke);
  e.preventDefault();
});
function endDraw() {
  if (!drawing || !stroke) return;
  drawing = false;
  if (stroke.pts.length > 1) {
    pages[cur].strokes.push(stroke);
    pages[cur].redo = [];
    schedThumb(cur);
  }
  stroke = null;
}
drawCanvas.addEventListener('pointerup', endDraw);
drawCanvas.addEventListener('pointerleave', endDraw);

async function doText(e) {
  const pt = ptToContent(e);
  const txt = await modal('Add text', 'Type your text…');
  if (!txt) return;
  const p = pages[cur];
  p.strokes.push({ type: 'text', x: pt.x, y: pt.y, text: txt, colour, size: penSize, opacity });
  p.redo = [];
  replayStrokes(p);
  schedThumb(cur);
}

// ── Undo/Redo/Clear ────────────────────────────────────────────────────
document.getElementById('btn-undo').onclick = () => {
  const p = pages[cur];
  if (!p?.strokes.length) return;
  p.redo.push(p.strokes.pop());
  replayStrokes(p);
  schedThumb(cur);
};
document.getElementById('btn-redo').onclick = () => {
  const p = pages[cur];
  if (!p?.redo.length) return;
  p.strokes.push(p.redo.pop());
  replayStrokes(p);
  schedThumb(cur);
};
document.getElementById('btn-clear').onclick = () => {
  const p = pages[cur];
  if (!p) return;
  p.redo = [...p.strokes];
  p.strokes = [];
  replayStrokes(p);
  schedThumb(cur);
  toast('Annotations cleared');
};

// ── Tool ───────────────────────────────────────────────────────────────
const cursors = { pen: 'crosshair', hl: 'crosshair', er: 'cell', text: 'text', move: 'default' };
function setTool(t) {
  tool = t;
  document.querySelectorAll('.tb-btn[data-tool]').forEach(b =>
    b.classList.toggle('active', b.dataset.tool === t));
  drawCanvas.style.cursor = cursors[t] || 'crosshair';
  drawCanvas.style.pointerEvents = t === 'move' ? 'none' : 'all';
  imgLayer.style.pointerEvents   = t === 'move' ? 'all'  : 'none';
  document.getElementById('move-badge').style.opacity = t === 'move' ? '1' : '0';
}
document.querySelectorAll('.tb-btn[data-tool]').forEach(b =>
  b.onclick = () => setTool(b.dataset.tool));
document.getElementById('pen-size').addEventListener('input', function () {
  penSize = parseInt(this.value);
  document.getElementById('pen-size-val').textContent = penSize;
});
document.getElementById('opacity-sl').addEventListener('input', function () {
  opacity = parseInt(this.value) / 100;
  document.getElementById('opacity-val').textContent = this.value + '%';
});
document.querySelectorAll('.swatch').forEach(sw => {
  sw.onclick = () => {
    colour = sw.dataset.c;
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    sw.classList.add('active');
  };
});
document.getElementById('colour-pick').addEventListener('input', function () {
  colour = this.value;
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
});

// ── Zoom ───────────────────────────────────────────────────────────────
// Anchor zoom around the current viewport centre so the user keeps their place.
function setZoom(z, anchorX, anchorY) {
  const newZoom = Math.max(0.25, Math.min(5, z));
  if (newZoom === zoom) return;

  // viewport-centre defaults
  const vRect = scroller.getBoundingClientRect();
  if (anchorX === undefined) anchorX = vRect.width  / 2;
  if (anchorY === undefined) anchorY = vRect.height / 2;

  // unscaled coord under anchor before zoom
  const ux = (scroller.scrollLeft + anchorX) / zoom;
  const uy = (scroller.scrollTop  + anchorY) / zoom;

  zoom = newZoom;
  applyZoom();

  // keep the same unscaled point under the anchor after zoom
  scroller.scrollLeft = ux * zoom - anchorX;
  scroller.scrollTop  = uy * zoom - anchorY;
}
document.getElementById('btn-zi').onclick = () => setZoom(zoom + 0.25);
document.getElementById('btn-zo').onclick = () => setZoom(zoom - 0.25);
document.getElementById('btn-zf').onclick = () => {
  // Fit to width: scale so contentW maps to scroller width.
  const vw = scroller.clientWidth || contentW;
  setZoom(vw / contentW);
  scroller.scrollLeft = 0;
};
scroller.addEventListener('wheel', e => {
  if (!e.ctrlKey) return;
  e.preventDefault();
  const r = scroller.getBoundingClientRect();
  setZoom(zoom + (e.deltaY < 0 ? 0.1 : -0.1), e.clientX - r.left, e.clientY - r.top);
}, { passive: false });

// ── Keyboard ───────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
  if (e.ctrlKey && e.key === 'z') { document.getElementById('btn-undo').click(); return; }
  if (e.ctrlKey && e.key === 'y') { document.getElementById('btn-redo').click(); return; }
  if (e.key === '+' || e.key === '=') setZoom(zoom + 0.25);
  if (e.key === '-') setZoom(zoom - 0.25);
  const map = { p: 'pen', h: 'hl', e: 'er', t: 'text', m: 'move' };
  if (map[e.key.toLowerCase()]) setTool(map[e.key.toLowerCase()]);
  if (e.key === 'Delete' && selImg) delImg(selImg, pages[cur]);
});

// ── Images ─────────────────────────────────────────────────────────────
function rebuildImgLayer(p) {
  imgLayer.innerHTML = '';
  p.images.forEach(d => mkImgEl(d, p));
}
function mkImgEl(d, p) {
  const el = document.createElement('div');
  el.className = 'img-obj' + (d.id === selImg ? ' selected' : '');
  el.dataset.id = String(d.id);
  el.style.cssText = `left:${d.x}px;top:${d.y}px;width:${d.w}px;height:${d.h}px`;
  const im = document.createElement('img');
  im.src = d.src;
  im.draggable = false;
  el.appendChild(im);
  const rh = document.createElement('div');
  rh.className = 'rh';
  el.appendChild(rh);
  const db = document.createElement('button');
  db.className = 'delbtn';
  db.textContent = '×';
  db.addEventListener('pointerdown', e => { e.stopPropagation(); delImg(d.id, p); });
  el.appendChild(db);
  el.addEventListener('pointerdown', e => {
    if (tool !== 'move') return;
    e.stopPropagation();
    selImg = d.id;
    rebuildImgLayer(p);
    if (e.target === rh) startResize(e, d);
    else if (e.target !== db) startDrag(e, d);
  });
  imgLayer.appendChild(el);
}
function delImg(id, p) {
  p.images = p.images.filter(i => i.id !== id);
  if (selImg === id) selImg = null;
  rebuildImgLayer(p);
  schedThumb(cur);
}
function startDrag(e, d) {
  const pt = ptToContent(e);
  dragSt = { d, ox: pt.x - d.x, oy: pt.y - d.y };
}
function startResize(e, d) {
  const pt = ptToContent(e);
  resizeSt = { d, sx: pt.x, sy: pt.y, sw: d.w, sh: d.h };
}
document.addEventListener('pointermove', e => {
  if (dragSt) {
    const pt = ptToContent(e);
    dragSt.d.x = Math.max(0, pt.x - dragSt.ox);
    dragSt.d.y = Math.max(0, pt.y - dragSt.oy);
    const el = imgLayer.querySelector(`[data-id="${dragSt.d.id}"]`);
    if (el) { el.style.left = dragSt.d.x + 'px'; el.style.top = dragSt.d.y + 'px'; }
  }
  if (resizeSt) {
    const pt = ptToContent(e);
    resizeSt.d.w = Math.max(60, resizeSt.sw + pt.x - resizeSt.sx);
    resizeSt.d.h = Math.max(40, resizeSt.sh + pt.y - resizeSt.sy);
    const el = imgLayer.querySelector(`[data-id="${resizeSt.d.id}"]`);
    if (el) { el.style.width = resizeSt.d.w + 'px'; el.style.height = resizeSt.d.h + 'px'; }
  }
});
document.addEventListener('pointerup', () => {
  if (dragSt || resizeSt) schedThumb(cur);
  dragSt = null;
  resizeSt = null;
});

// ── File uploads ───────────────────────────────────────────────────────
document.getElementById('btn-blank').onclick = () => addPage();
document.getElementById('btn-add-page').onclick = () => addPage();
document.getElementById('btn-img').onclick = () => document.getElementById('file-img').click();
document.getElementById('btn-pdf').onclick = () => document.getElementById('file-pdf').click();

document.getElementById('file-img').addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  const src = await readDataURL(file);
  const im = await loadImg(src);
  const p = pages[cur];
  const mw = contentW * 0.42, mh = contentH * 0.42;
  const s = Math.min(mw / im.naturalWidth, mh / im.naturalHeight, 1);
  const sy = scroller.scrollTop / zoom;
  p.images.push({
    id: Date.now() + Math.random(),
    src,
    x: 40,
    y: sy + 40,
    w: Math.round(im.naturalWidth * s),
    h: Math.round(im.naturalHeight * s)
  });
  rebuildImgLayer(p);
  selImg = p.images[p.images.length - 1].id;
  setTool('move');
  schedThumb(cur);
  toast('Image added — drag to move, corner to resize');
  e.target.value = '';
});

document.getElementById('file-pdf').addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  showLoad('Rendering PDF…');
  try {
    const ab = await file.arrayBuffer();
    const saved = ab.slice(0); // pdf.js consumes the buffer; keep a copy for save/load
    const doc = await pdfjsLib.getDocument({ data: ab }).promise;
    const p = pages[cur];
    p.bgType = 'pdf';
    p.pdfDoc = doc;
    p.pdfB64 = ab2b64(saved);
    p.pdfRenderedAtWidth = null;
    if (p.title.startsWith('Page ')) {
      p.title = file.name.replace(/\.pdf$/i, '');
      titleInput.value = p.title;
    }
    zoom = 1.0;
    await renderPage();
    renderSidebar();
    toast(`PDF loaded — ${doc.numPages} page${doc.numPages > 1 ? 's' : ''}`);
  } catch (err) {
    toast('PDF error: ' + err.message);
    console.error(err);
  } finally {
    hideLoad();
  }
  e.target.value = '';
});

// ── Page title ─────────────────────────────────────────────────────────
titleInput.addEventListener('input', () => {
  if (pages[cur]) {
    pages[cur].title = titleInput.value;
    renderSidebar();
  }
});

// ── Sidebar ────────────────────────────────────────────────────────────
function renderSidebar() {
  pageList.innerHTML = '';
  pages.forEach((p, i) => {
    const w = document.createElement('div');
    w.className = 'pt' + (i === cur ? ' active' : '');
    const tc = document.createElement('canvas');
    tc.width = 176;
    tc.height = 99;
    w.appendChild(tc);
    const lb = document.createElement('div');
    lb.className = 'ptl';
    lb.textContent = p.title || `Page ${i + 1}`;
    w.appendChild(lb);
    const d = document.createElement('button');
    d.className = 'ptd';
    d.textContent = '×';
    d.onclick = ev => { ev.stopPropagation(); delPage(i); };
    w.appendChild(d);
    w.onclick = () => switchPage(i);
    pageList.appendChild(w);
    drawThumb(tc, p);
  });
}
async function drawThumb(canvas, p) {
  const c = canvas.getContext('2d');
  const tw = canvas.width, th = canvas.height;
  c.fillStyle = '#fff';
  c.fillRect(0, 0, tw, th);
  if (p.bgType === 'pdf' && p.pdfDoc) {
    try {
      const page = await p.pdfDoc.getPage(1);
      const vp0 = page.getViewport({ scale: 1 });
      const s = tw / vp0.width;
      const vp = page.getViewport({ scale: s });
      const off = document.createElement('canvas');
      off.width  = Math.ceil(vp.width);
      off.height = Math.ceil(vp.height);
      await page.render({ canvasContext: off.getContext('2d'), viewport: vp }).promise;
      c.drawImage(off, 0, 0, tw, Math.min(off.height, th));
    } catch {}
  }
  const sc = tw / (contentW || 800);
  for (const img of p.images) {
    await loadImg(img.src)
      .then(im => c.drawImage(im, img.x * sc, img.y * sc, img.w * sc, img.h * sc))
      .catch(() => {});
  }
  c.save();
  c.scale(sc, sc);
  p.strokes.forEach(s => drawStroke(c, s));
  c.restore();
}
let thumbT = {};
function schedThumb(idx) {
  clearTimeout(thumbT[idx]);
  thumbT[idx] = setTimeout(() => {
    const els = pageList.querySelectorAll('canvas');
    if (els[idx]) drawThumb(els[idx], pages[idx]);
  }, 600);
}
function delPage(idx) {
  if (pages.length === 1) { toast('Need at least one page'); return; }
  pages.splice(idx, 1);
  if (cur >= pages.length) cur = pages.length - 1;
  renderSidebar();
  switchPage(cur);
}

// ── Save/Load ──────────────────────────────────────────────────────────
function getL() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } }
function setL(o) { localStorage.setItem(STORAGE_KEY, JSON.stringify(o)); }
function refreshSel() {
  const names = Object.keys(getL()).sort();
  lessonSel.innerHTML = '<option value="">— load a lesson —</option>';
  names.forEach(n => {
    const o = document.createElement('option');
    o.value = n;
    o.textContent = n;
    lessonSel.appendChild(o);
  });
}
function serialise() {
  return pages.map(p => ({
    id: p.id,
    title: p.title,
    bgType: p.bgType,
    pdfB64: p.pdfB64 || null,
    images: p.images,
    strokes: p.strokes
  }));
}
async function deserialise(raw) {
  const res = [];
  for (const r of raw) {
    const p = mkPage(r.title);
    p.id = r.id;
    p.bgType = r.bgType;
    p.images = r.images || [];
    p.strokes = r.strokes || [];
    if (r.bgType === 'pdf' && r.pdfB64) {
      p.pdfB64 = r.pdfB64;
      p.pdfDoc = await pdfjsLib.getDocument({ data: b642ab(r.pdfB64) }).promise;
    }
    res.push(p);
  }
  return res;
}
document.getElementById('btn-save').onclick = () => {
  const name = lessonName.value.trim() || `Lesson ${new Date().toLocaleDateString()}`;
  const l = getL();
  l[name] = { pages: serialise(), savedAt: Date.now() };
  setL(l);
  lessonName.value = name;
  refreshSel();
  toast(`Saved: "${name}"`);
};
document.getElementById('btn-load').onclick = async () => {
  const name = lessonSel.value;
  if (!name) { toast('Select a lesson'); return; }
  const data = getL()[name];
  if (!data) { toast('Not found'); return; }
  showLoad('Loading…');
  try {
    pages = await deserialise(data.pages);
    cur = 0;
    lessonName.value = name;
    zoom = 1.0;
    renderSidebar();
    await switchPage(0);
    toast(`Loaded: "${name}"`);
  } finally {
    hideLoad();
  }
};
document.getElementById('btn-del-lesson').onclick = () => {
  const name = lessonSel.value;
  if (!name) { toast('Select a lesson'); return; }
  const l = getL();
  delete l[name];
  setL(l);
  refreshSel();
  toast(`Deleted: "${name}"`);
};

// ── Init ───────────────────────────────────────────────────────────────
addPage('Page 1');
setTool('pen');
refreshSel();
