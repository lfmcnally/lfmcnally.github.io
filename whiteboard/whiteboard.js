// Lesson Whiteboard — wraps EmbedPDF with a classroom toolbar, a "Pages"
// sidebar that mixes PDFs and blank canvases, and image insertion on
// blank pages.
import EmbedPDF from 'https://cdn.jsdelivr.net/npm/@embedpdf/snippet/dist/embedpdf.js';

// ── DOM ──────────────────────────────────────────────────────────────
const statusEl   = document.getElementById('status');
const pageListEl = document.getElementById('page-list');
const emptyState = document.getElementById('empty-state');
const sizeSlider = document.getElementById('pen-size');
const sizeVal    = document.getElementById('pen-size-val');
const cpick      = document.getElementById('colour-pick');
const filePdf    = document.getElementById('file-pdf');
const fileImg    = document.getElementById('file-img');

const pdfViewerEl   = document.getElementById('pdf-viewer');
const blankHostEl   = document.getElementById('blank-host');
const blankContent  = document.getElementById('blank-content');
const blankScroller = document.getElementById('blank-scroller');
const drawCanvas    = document.getElementById('draw-canvas');
const imgLayer      = document.getElementById('img-layer');
const dctx          = drawCanvas.getContext('2d');

const setStatus = msg => { statusEl.textContent = msg; };

const DPR = window.devicePixelRatio || 1;
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// ── State (declared up-front to avoid TDZ surprises) ─────────────────
let currentTool  = 'pen';
let currentColor = '#1a1a1a';
let currentSize  = 6;

const pages   = [];
let activeIdx = -1;

let drawing = false;
let currentStroke = null;
let selImg = null;
let dragSt = null;
let resizeSt = null;

// EmbedPDF tool ID for each of our logical tools
const EPDF_TOOL = {
  pen:    'ink',
  hl:     'inkHighlighter',
  text:   'freeText',
  select: null,
  er:     null, // EmbedPDF doesn't have a stroke eraser; falls back to undo
};

// ── EmbedPDF init ────────────────────────────────────────────────────
setStatus('Initialising viewer…');

const viewer = EmbedPDF.init({
  type: 'container',
  target: pdfViewerEl,
  theme: { preference: 'system' },
  tabBar: 'never',
  documentManager: { maxDocuments: 20 },
  // Suppress EmbedPDF's redundant UI: we drive annotation tools from our
  // own toolbar, and we don't want its right-side annotation panel.
  disabledCategories: ['annotation', 'panel'],
});

let registry, docManager, annotation, ui;
try {
  registry   = await viewer.registry;
  docManager = registry.getPlugin('document-manager')?.provides();
  annotation = registry.getPlugin('annotation')?.provides();
  ui         = registry.getPlugin('ui')?.provides();

  if (!docManager) throw new Error('document-manager plugin missing');

  // Belt-and-braces: also call setDisabledCategories at runtime in case
  // the init-level option got ignored by this build of EmbedPDF.
  try { ui?.setDisabledCategories?.(['annotation', 'panel']); }
  catch (e) { console.warn('setDisabledCategories failed:', e); }

  applyToolState();
  setStatus('Ready');
} catch (err) {
  console.error('EmbedPDF failed to initialise:', err);
  setStatus('Failed to load viewer — see console');
}

// ── Sidebar ──────────────────────────────────────────────────────────
function renderPageList() {
  pageListEl.innerHTML = '';
  if (pages.length === 0) {
    const hint = document.createElement('div');
    hint.style.cssText = 'font-size:11px;color:var(--txm);padding:6px 4px;';
    hint.textContent = 'No pages yet.';
    pageListEl.appendChild(hint);
    return;
  }
  pages.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'pg-item' + (i === activeIdx ? ' active' : '');
    el.innerHTML = `
      <span class="pg-icon"></span>
      <span class="pg-name"></span>
      <button class="pg-close" title="Close">×</button>
    `;
    el.querySelector('.pg-icon').textContent = p.type === 'pdf' ? '📄' : '🎨';
    el.querySelector('.pg-name').textContent = p.name;
    el.addEventListener('click', e => {
      if (e.target.closest('.pg-close')) return;
      switchPage(i);
    });
    el.querySelector('.pg-close').addEventListener('click', e => {
      e.stopPropagation();
      closePage(i);
    });
    pageListEl.appendChild(el);
  });
}

function updateEmptyState() {
  const hasPages = pages.length > 0;
  const active = pages[activeIdx];
  emptyState.classList.toggle('hidden', hasPages);
  pdfViewerEl.classList.toggle('hidden', !hasPages || active?.type !== 'pdf');
  blankHostEl.classList.toggle('hidden', !hasPages || active?.type !== 'blank');
}

function switchPage(idx) {
  if (idx < 0 || idx >= pages.length) return;
  activeIdx = idx;
  const p = pages[idx];
  selImg = null;

  if (p.type === 'pdf') {
    pdfViewerEl.classList.remove('hidden');
    blankHostEl.classList.add('hidden');
    if (p.embedDocId && docManager?.setActiveDocument) {
      try { docManager.setActiveDocument(p.embedDocId); } catch (e) { console.warn(e); }
    }
  } else {
    pdfViewerEl.classList.add('hidden');
    blankHostEl.classList.remove('hidden');
    setupBlankCanvas();
    rebuildImgLayer(p);
    replayStrokes(p);
  }

  applyToolState();
  renderPageList();
  updateEmptyState();
}

function closePage(idx) {
  const p = pages[idx];
  if (p.type === 'pdf' && p.embedDocId && docManager?.closeDocument) {
    try { docManager.closeDocument(p.embedDocId); } catch (e) { console.warn(e); }
  }
  pages.splice(idx, 1);
  if (activeIdx >= pages.length) activeIdx = pages.length - 1;
  if (activeIdx < 0) {
    renderPageList();
    updateEmptyState();
  } else {
    switchPage(activeIdx);
  }
}

// ── Add page buttons ─────────────────────────────────────────────────
document.getElementById('btn-add-pdf').addEventListener('click', () => filePdf.click());
document.getElementById('btn-add-blank').addEventListener('click', () => {
  pages.push({
    id: newId(),
    type: 'blank',
    name: `Blank ${pages.filter(x => x.type === 'blank').length + 1}`,
    strokes: [],
    images: [],
    redo: [],
  });
  switchPage(pages.length - 1);
});

filePdf.addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file || !docManager) return;
  setStatus(`Loading ${file.name}…`);
  try {
    const buffer = await file.arrayBuffer();
    const result = await docManager.openDocumentBuffer({
      buffer,
      name: file.name,
      autoActivate: true,
    });
    const embedDocId = result?.documentId || result?.id || file.name;
    pages.push({
      id: newId(),
      type: 'pdf',
      name: file.name.replace(/\.pdf$/i, ''),
      embedDocId,
    });
    setStatus(`Loaded: ${file.name}`);
    switchPage(pages.length - 1);
  } catch (err) {
    console.error('Failed to open PDF:', err);
    setStatus('Failed to load PDF — see console');
  }
  e.target.value = '';
});

// ── Toolbar: tools / colours / size ──────────────────────────────────
document.querySelectorAll('.tb-btn[data-tool]').forEach(btn => {
  btn.addEventListener('click', () => setTool(btn.dataset.tool));
});
function setTool(t) {
  currentTool = t;
  document.querySelectorAll('.tb-btn[data-tool]').forEach(b =>
    b.classList.toggle('active', b.dataset.tool === t));
  applyToolState();
}

document.querySelectorAll('.swatch').forEach(sw => {
  sw.addEventListener('click', () => {
    currentColor = sw.dataset.c;
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    sw.classList.add('active');
    cpick.value = currentColor;
    applyToolState();
  });
});
cpick.addEventListener('input', () => {
  currentColor = cpick.value;
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
  applyToolState();
});

sizeSlider.addEventListener('input', () => {
  currentSize = parseInt(sizeSlider.value, 10);
  sizeVal.textContent = String(currentSize);
  applyToolState();
});

// Push our tool state into EmbedPDF's annotation plugin (for PDF mode)
// AND keep blank-canvas pointer-events in sync.
function applyToolState() {
  if (annotation) {
    const inkPatch = { color: currentColor, strokeWidth: currentSize };
    const hlPatch  = { color: currentColor, strokeWidth: Math.max(currentSize * 2, 10) };
    const txtPatch = { fontColor: currentColor };
    try {
      annotation.setToolDefaults?.('ink',            inkPatch);
      annotation.setToolDefaults?.('inkHighlighter', hlPatch);
      annotation.setToolDefaults?.('freeText',       txtPatch);
    } catch (err) { console.warn('setToolDefaults failed:', err); }
    try { annotation.setActiveTool?.(EPDF_TOOL[currentTool]); }
    catch (err) { console.warn('setActiveTool failed:', err); }
  }

  // Blank-canvas input routing
  if (currentTool === 'select') {
    drawCanvas.style.pointerEvents = 'none';
    imgLayer.style.pointerEvents   = 'auto';
  } else {
    drawCanvas.style.pointerEvents = 'auto';
    imgLayer.style.pointerEvents   = 'none';
  }
}

// ── Undo / Redo ──────────────────────────────────────────────────────
document.getElementById('btn-undo').addEventListener('click', () => {
  const p = pages[activeIdx];
  if (p?.type === 'blank') {
    if (!p.strokes.length) return;
    p.redo.push(p.strokes.pop());
    replayStrokes(p);
  } else {
    registry?.getPlugin?.('history')?.provides?.()?.undo?.();
  }
});
document.getElementById('btn-redo').addEventListener('click', () => {
  const p = pages[activeIdx];
  if (p?.type === 'blank') {
    if (!p.redo.length) return;
    p.strokes.push(p.redo.pop());
    replayStrokes(p);
  } else {
    registry?.getPlugin?.('history')?.provides?.()?.redo?.();
  }
});

// ── Image insertion (blank pages only) ───────────────────────────────
document.getElementById('btn-add-image').addEventListener('click', () => {
  const p = pages[activeIdx];
  if (!p || p.type !== 'blank') {
    setStatus('Switch to a blank page to add images');
    return;
  }
  fileImg.click();
});
fileImg.addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  const p = pages[activeIdx];
  if (!p || p.type !== 'blank') return;
  const src = await readDataURL(file);
  const im  = await loadImage(src);
  const mw = blankContent.clientWidth  * 0.45;
  const mh = blankContent.clientHeight * 0.45;
  const s  = Math.min(mw / im.naturalWidth, mh / im.naturalHeight, 1);
  p.images.push({
    id: newId(),
    src,
    x: 60,
    y: 60 + (blankScroller.scrollTop || 0),
    w: Math.round(im.naturalWidth * s),
    h: Math.round(im.naturalHeight * s),
  });
  rebuildImgLayer(p);
  selImg = p.images[p.images.length - 1].id;
  setTool('select');
  setStatus('Image added — drag to move, corner to resize');
  e.target.value = '';
});

// ── Keyboard shortcuts ───────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
  const k = e.key.toLowerCase();
  if (e.ctrlKey && k === 'z') { document.getElementById('btn-undo').click(); return; }
  if (e.ctrlKey && k === 'y') { document.getElementById('btn-redo').click(); return; }
  const map = { p: 'pen', h: 'hl', e: 'er', t: 'text', s: 'select' };
  if (map[k]) setTool(map[k]);
  if (e.key === 'Delete' && selImg) {
    const p = pages[activeIdx];
    if (p?.type === 'blank') deleteImage(selImg, p);
  }
});

// ── Blank-canvas: drawing engine ─────────────────────────────────────
function setupBlankCanvas() {
  const w = blankContent.clientWidth;
  const h = blankContent.clientHeight;
  drawCanvas.style.width  = w + 'px';
  drawCanvas.style.height = h + 'px';
  drawCanvas.width  = Math.round(w * DPR);
  drawCanvas.height = Math.round(h * DPR);
  dctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
window.addEventListener('resize', () => {
  setupBlankCanvas();
  const p = pages[activeIdx];
  if (p?.type === 'blank') replayStrokes(p);
});

function ptToBlankContent(e) {
  const r = drawCanvas.getBoundingClientRect();
  const src = e.touches ? e.touches[0] : e;
  return { x: src.clientX - r.left, y: src.clientY - r.top };
}

drawCanvas.addEventListener('pointerdown', e => {
  const p = pages[activeIdx];
  if (!p || p.type !== 'blank') return;
  if (currentTool === 'select') return;
  selImg = null;
  rebuildImgLayer(p);

  if (currentTool === 'text') {
    const txt = window.prompt('Text:');
    if (txt) {
      const pt = ptToBlankContent(e);
      p.strokes.push({
        type: 'text',
        x: pt.x,
        y: pt.y,
        text: txt,
        colour: currentColor,
        size: currentSize,
      });
      p.redo = [];
      replayStrokes(p);
    }
    return;
  }

  drawing = true;
  const pt = ptToBlankContent(e);
  currentStroke = {
    type: 'stroke',
    tool: currentTool,
    colour: currentTool === 'er' ? '#000' : currentColor,
    size: currentTool === 'hl' ? currentSize * 3 : currentTool === 'er' ? currentSize * 2 : currentSize,
    pts: [pt],
  };
  e.preventDefault();
});
drawCanvas.addEventListener('pointermove', e => {
  if (!drawing || !currentStroke) return;
  currentStroke.pts.push(ptToBlankContent(e));
  const p = pages[activeIdx];
  if (p) {
    replayStrokes(p);
    drawStroke(dctx, currentStroke);
  }
  e.preventDefault();
});
function endDraw() {
  if (!drawing || !currentStroke) return;
  drawing = false;
  if (currentStroke.pts.length > 1) {
    const p = pages[activeIdx];
    if (p?.type === 'blank') {
      p.strokes.push(currentStroke);
      p.redo = [];
    }
  }
  currentStroke = null;
}
drawCanvas.addEventListener('pointerup',    endDraw);
drawCanvas.addEventListener('pointerleave', endDraw);

function replayStrokes(p) {
  if (!p || p.type !== 'blank') return;
  dctx.clearRect(0, 0, drawCanvas.width / DPR, drawCanvas.height / DPR);
  p.strokes.forEach(s => drawStroke(dctx, s));
}
function drawStroke(c, s) {
  if (s.type === 'text') {
    c.save();
    c.fillStyle = s.colour;
    c.font = `${Math.max(14, s.size * 5)}px Segoe UI, sans-serif`;
    c.fillText(s.text, s.x, s.y);
    c.restore();
    return;
  }
  if (!s.pts || s.pts.length < 2) return;
  c.save();
  c.lineCap = c.lineJoin = 'round';
  c.lineWidth   = s.size;
  c.strokeStyle = s.colour;
  if (s.tool === 'hl') {
    c.globalAlpha = 0.38;
    c.globalCompositeOperation = 'multiply';
  } else if (s.tool === 'er') {
    c.globalCompositeOperation = 'destination-out';
    c.globalAlpha = 1;
  }
  c.beginPath();
  c.moveTo(s.pts[0].x, s.pts[0].y);
  for (let i = 1; i < s.pts.length; i++) {
    const mx = (s.pts[i-1].x + s.pts[i].x) / 2;
    const my = (s.pts[i-1].y + s.pts[i].y) / 2;
    c.quadraticCurveTo(s.pts[i-1].x, s.pts[i-1].y, mx, my);
  }
  c.stroke();
  c.restore();
}

// ── Image objects on blank pages ─────────────────────────────────────
function rebuildImgLayer(p) {
  imgLayer.innerHTML = '';
  if (p?.type !== 'blank') return;
  p.images.forEach(d => mkImgEl(d, p));
}
function mkImgEl(d, p) {
  const el = document.createElement('div');
  el.className = 'img-obj' + (d.id === selImg ? ' selected' : '');
  el.dataset.id = String(d.id);
  el.style.cssText = `left:${d.x}px;top:${d.y}px;width:${d.w}px;height:${d.h}px;`;
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
  db.addEventListener('pointerdown', e => { e.stopPropagation(); deleteImage(d.id, p); });
  el.appendChild(db);
  el.addEventListener('pointerdown', e => {
    if (currentTool !== 'select') return;
    e.stopPropagation();
    selImg = d.id;
    rebuildImgLayer(p);
    if (e.target === rh) startResize(e, d);
    else if (e.target !== db) startDrag(e, d);
  });
  imgLayer.appendChild(el);
}
function deleteImage(id, p) {
  p.images = p.images.filter(i => i.id !== id);
  if (selImg === id) selImg = null;
  rebuildImgLayer(p);
}
function startDrag(e, d) {
  const pt = ptToBlankContent(e);
  dragSt = { d, ox: pt.x - d.x, oy: pt.y - d.y };
}
function startResize(e, d) {
  const pt = ptToBlankContent(e);
  resizeSt = { d, sx: pt.x, sy: pt.y, sw: d.w, sh: d.h };
}
document.addEventListener('pointermove', e => {
  if (dragSt) {
    const pt = ptToBlankContent(e);
    dragSt.d.x = Math.max(0, pt.x - dragSt.ox);
    dragSt.d.y = Math.max(0, pt.y - dragSt.oy);
    const el = imgLayer.querySelector(`[data-id="${dragSt.d.id}"]`);
    if (el) { el.style.left = dragSt.d.x + 'px'; el.style.top = dragSt.d.y + 'px'; }
  }
  if (resizeSt) {
    const pt = ptToBlankContent(e);
    resizeSt.d.w = Math.max(60, resizeSt.sw + pt.x - resizeSt.sx);
    resizeSt.d.h = Math.max(40, resizeSt.sh + pt.y - resizeSt.sy);
    const el = imgLayer.querySelector(`[data-id="${resizeSt.d.id}"]`);
    if (el) { el.style.width = resizeSt.d.w + 'px'; el.style.height = resizeSt.d.h + 'px'; }
  }
});
document.addEventListener('pointerup', () => { dragSt = null; resizeSt = null; });

// ── Utilities ────────────────────────────────────────────────────────
function readDataURL(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}
function loadImage(src) {
  return new Promise((res, rej) => {
    const im = new Image();
    im.onload = () => res(im);
    im.onerror = rej;
    im.src = src;
  });
}

// ── Initial render ───────────────────────────────────────────────────
renderPageList();
updateEmptyState();
