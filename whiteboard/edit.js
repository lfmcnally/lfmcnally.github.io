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
const blankSizer    = document.getElementById('blank-sizer');
const drawCanvas    = document.getElementById('draw-canvas');
const imgLayer      = document.getElementById('img-layer');
const dctx          = drawCanvas.getContext('2d');
const zoomIndicator = document.getElementById('zoom-indicator');

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

// We drive everything from our own toolbar — disable as much of EmbedPDF's
// default UI as it'll let us. Categories from EmbedPDF's
// disable-categories.html example.
const HIDDEN_CATEGORIES = [
  'annotation', 'panel', 'zoom',
  'form', 'redaction', 'document-print', 'document-export',
];

const viewer = EmbedPDF.init({
  type: 'container',
  target: pdfViewerEl,
  theme: { preference: 'system' },
  tabBar: 'never',
  documentManager: { maxDocuments: 20 },
  disabledCategories: HIDDEN_CATEGORIES,
});

let registry, docManager, annotation, ui, scrollPlugin, printPlugin, exportPlugin, zoomPlugin, thumbnailPlugin, renderPlugin;
try {
  registry        = await viewer.registry;
  docManager      = registry.getPlugin('document-manager')?.provides();
  annotation      = registry.getPlugin('annotation')?.provides();
  ui              = registry.getPlugin('ui')?.provides();
  scrollPlugin    = registry.getPlugin('scroll')?.provides();
  printPlugin     = registry.getPlugin('print')?.provides();
  exportPlugin    = registry.getPlugin('export')?.provides();
  zoomPlugin      = registry.getPlugin('zoom')?.provides();
  thumbnailPlugin = registry.getPlugin('thumbnail')?.provides();
  renderPlugin    = registry.getPlugin('render')?.provides();

  if (!docManager) throw new Error('document-manager plugin missing');

  // Subscribe to page changes so our indicator stays in sync.
  try {
    scrollPlugin?.onPageChange?.(refreshPageIndicator);
    scrollPlugin?.onLayoutReady?.(refreshPageIndicator);
  } catch (e) { console.warn('onPageChange subscribe failed:', e); }

  // Backfill the real documentId onto the most recent PDF page entry whose
  // id we couldn't determine from openDocumentBuffer's return shape.
  try {
    docManager?.onDocumentOpened?.(doc => {
      const realId = doc?.documentId || doc?.id;
      if (!realId) return;
      // Find the most recent PDF page that doesn't yet have a confirmed id.
      for (let i = pages.length - 1; i >= 0; i--) {
        if (pages[i].type === 'pdf' && (pages[i].embedDocId == null || pages[i]._idGuessed)) {
          pages[i].embedDocId = realId;
          pages[i]._idGuessed = false;
          // Re-render the thumbnail now that we have the right id.
          schedThumb(i);
          break;
        }
      }
    });
  } catch (e) { console.warn('onDocumentOpened subscribe failed:', e); }

  // Subscribe to zoom changes so the zoom indicator updates while EmbedPDF
  // changes zoom internally (e.g., user pinches).
  try { zoomPlugin?.onStateChange?.(refreshZoomIndicator); }
  catch (e) { /* not all builds expose this */ }

  // Belt-and-braces: also call setDisabledCategories at runtime in case
  // the init-level option got ignored by this build of EmbedPDF.
  try { ui?.setDisabledCategories?.(HIDDEN_CATEGORIES); }
  catch (e) { console.warn('setDisabledCategories failed:', e); }

  // Clear EmbedPDF's main top toolbar entirely — we have our own at the
  // top of the page. Disabling categories blanks each item but leaves
  // the toolbar bar visible; this empties it so it collapses, and CSS
  // hides the host wrapper as a final backstop.
  try {
    ui?.mergeSchema?.({
      toolbars: {
        'main-toolbar':       { items: [], permanent: false },
        'annotation-toolbar': { items: [], permanent: false },
        'shapes-toolbar':     { items: [], permanent: false },
        'form-toolbar':       { items: [], permanent: false },
        'insert-toolbar':     { items: [], permanent: false },
        'redaction-toolbar':  { items: [], permanent: false },
      },
    });
  } catch (e) { console.warn('mergeSchema failed:', e); }

  // Also try deactivating the top-main slot toolbar at runtime.
  try { ui?.setActiveToolbar?.('top', 'main', null); }
  catch (e) { /* not all builds expose this */ }

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
      <canvas class="pg-thumb"></canvas>
      <div class="pg-meta">
        <span class="pg-icon"></span>
        <span class="pg-name"></span>
        <button class="pg-close" title="Close">×</button>
      </div>
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

    // Render the thumbnail asynchronously
    const thumbCanvas = el.querySelector('.pg-thumb');
    renderPageThumb(p, thumbCanvas).catch(err => {
      console.warn('thumb render failed:', err);
      thumbCanvas.classList.add('pg-thumb-fallback');
      thumbCanvas.replaceWith(Object.assign(document.createElement('div'), {
        className: 'pg-thumb pg-thumb-fallback',
        textContent: p.type === 'pdf' ? '📄' : '🎨',
      }));
    });
  });
}

async function renderPageThumb(p, canvas) {
  // Size the thumbnail canvas to its layout box
  const rect = canvas.getBoundingClientRect();
  const W = Math.max(120, Math.round(rect.width  || 160));
  const H = Math.max(80,  Math.round(rect.height || 120));
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W, H);

  if (p.type === 'blank') {
    const sx = W / p.baseW;
    const sy = H / p.baseH;
    const s = Math.min(sx, sy);
    ctx.save();
    ctx.scale(s, s);
    // Images
    for (const img of p.images) {
      try {
        const im = await loadImage(img.src);
        ctx.drawImage(im, img.x, img.y, img.w, img.h);
      } catch {}
    }
    // Strokes (re-uses the main drawStroke())
    p.strokes.forEach(st => drawStroke(ctx, st));
    ctx.restore();
    return;
  }

  // PDF page → try thumbnail plugin first, then render plugin, else icon.
  if (p.type === 'pdf' && p.embedDocId && !p._idGuessed) {
    const blob = await getPdfFirstPageBlob(p.embedDocId).catch(err => {
      console.warn(`PDF thumb failed for "${p.name}":`, err);
      return null;
    });
    if (blob) {
      const url = URL.createObjectURL(blob);
      try {
        const im = await loadImage(url);
        const sx = W / im.naturalWidth;
        const sy = H / im.naturalHeight;
        const s = Math.min(sx, sy);
        const dw = im.naturalWidth  * s;
        const dh = im.naturalHeight * s;
        ctx.drawImage(im, (W - dw) / 2, (H - dh) / 2, dw, dh);
      } finally { URL.revokeObjectURL(url); }
      return;
    }
  }

  // Fallback: just an icon
  ctx.fillStyle = '#bbb';
  ctx.font = '32px system-ui';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(p.type === 'pdf' ? '📄' : '🎨', W / 2, H / 2);
}

// Render the first page of a PDF as a Blob, trying thumbnail plugin then
// render plugin. Returns a Blob or throws.
async function getPdfFirstPageBlob(docId) {
  // 1) thumbnail plugin (preferred — caches results internally)
  if (thumbnailPlugin?.renderThumb) {
    const scope = thumbnailPlugin.forDocument?.(docId);
    const task  = scope?.renderThumb
      ? scope.renderThumb(0, 1)
      : thumbnailPlugin.renderThumb(0, 1);
    try { return await taskToPromise(task); }
    catch (e) { console.warn('thumbnailPlugin.renderThumb failed:', e); }
  }
  // 2) render plugin fallback
  if (renderPlugin?.renderPage) {
    const scope = renderPlugin.forDocument?.(docId);
    const opts  = { pageIndex: 0, options: { scaleFactor: 0.25, dpr: 1 } };
    const task  = scope?.renderPage ? scope.renderPage(opts) : renderPlugin.renderPage(opts);
    return await taskToPromise(task);
  }
  throw new Error('no thumbnail or render plugin available');
}

// EmbedPDF Tasks aren't standard Promises. Source confirms .toPromise() is
// the canonical adapter; .wait(onResolve, onReject) is the lower-level
// callback form. Cover both, plus thenable.
function taskToPromise(task) {
  if (!task) return Promise.reject(new Error('no task'));
  if (typeof task.toPromise === 'function') return task.toPromise();
  if (typeof task.then === 'function')      return Promise.resolve(task);
  if (typeof task.wait === 'function') {
    return new Promise((res, rej) => {
      try { task.wait(res, rej); }
      catch (e) { rej(e); }
    });
  }
  return Promise.reject(new Error('unknown Task shape: ' + Object.keys(task || {}).join(',')));
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
  console.log(`[switchPage] idx=${idx}, type=${p.type}, embedDocId=${p.embedDocId}`);

  if (p.type === 'pdf') {
    pdfViewerEl.classList.remove('hidden');
    blankHostEl.classList.add('hidden');
    if (p.embedDocId && docManager?.setActiveDocument) {
      try { docManager.setActiveDocument(p.embedDocId); console.log('[switchPage] setActiveDocument →', p.embedDocId); }
      catch (e) { console.warn('[switchPage] setActiveDocument failed:', e); }
    } else {
      console.warn('[switchPage] no embedDocId — cannot setActiveDocument');
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
  refreshPageIndicator();
  refreshZoomIndicator();
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
  // Lock the blank canvas size to the viewport at creation time so strokes
  // stay anchored regardless of later resizes. Measure #canvas-area
  // (always visible) — measuring #blank-scroller here would return 0
  // because the blank-host is still display:none until switchPage shows it.
  const ca = document.getElementById('canvas-area');
  const baseW = Math.max(ca.clientWidth  || 1200, 800);
  const baseH = Math.max(ca.clientHeight || 900,  600);
  pages.push({
    id: newId(),
    type: 'blank',
    name: `Blank ${pages.filter(x => x.type === 'blank').length + 1}`,
    baseW,
    baseH,
    zoom: 1.0,
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
    // Keep a copy of the original bytes so we can save the lesson even if
    // EmbedPDF's exportPlugin isn't available / fails. openDocumentBuffer
    // typically transfers/neuters the ArrayBuffer it's handed, so we slice
    // here BEFORE passing it on.
    const originalBytes = new Uint8Array(buffer.slice(0));
    const result = await docManager.openDocumentBuffer({
      buffer,
      name: file.name,
      autoActivate: true,
    });
    // openDocumentBuffer's return shape is build-dependent; we may need to
    // backfill the real documentId via onDocumentOpened (see init code).
    const embedDocId = result?.documentId || result?.id || result?.doc?.id || null;
    pages.push({
      id: newId(),
      type: 'pdf',
      name: file.name.replace(/\.pdf$/i, ''),
      embedDocId,
      _idGuessed: !embedDocId,
      originalBytes,
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
    // Only try setActiveTool when there's actually an active document —
    // otherwise EmbedPDF throws "No active document", which is just noise
    // before the first PDF is loaded.
    if (docManager?.getActiveDocument?.()) {
      try { annotation.setActiveTool?.(EPDF_TOOL[currentTool]); }
      catch (err) { console.warn('setActiveTool failed:', err); }
    }
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

// ── Zoom (works on both PDF and blank pages) ─────────────────────────
document.getElementById('btn-zoom-in').addEventListener('click', () => zoomBy(+0.2));
document.getElementById('btn-zoom-out').addEventListener('click', () => zoomBy(-0.2));
document.getElementById('btn-zoom-fit').addEventListener('click', () => zoomFit());

function zoomBy(delta) {
  const p = pages[activeIdx];
  if (p?.type === 'pdf') {
    try { zoomPlugin?.requestZoomBy?.(delta); }
    catch (e) { console.warn('PDF zoom failed:', e); }
  } else if (p?.type === 'blank') {
    p.zoom = Math.max(0.25, Math.min(5, (p.zoom || 1) + delta));
    setupBlankCanvas();
    replayStrokes(p);
  }
  refreshZoomIndicator();
}

function zoomFit() {
  const p = pages[activeIdx];
  if (p?.type === 'pdf') {
    // EmbedPDF accepts string presets like 'FitWidth' (the source uses
    // ZoomMode.FitWidth from a const, but the string also works).
    try { zoomPlugin?.requestZoom?.('FitWidth'); }
    catch (e) { console.warn('PDF fit-width failed:', e); }
  } else if (p?.type === 'blank') {
    p.zoom = 1.0;
    setupBlankCanvas();
    replayStrokes(p);
  }
  refreshZoomIndicator();
}

function refreshZoomIndicator() {
  const p = pages[activeIdx];
  let pct = 100;
  if (p?.type === 'pdf') {
    try {
      const state = zoomPlugin?.getState?.();
      const z = state?.currentZoomLevel ?? state?.zoom ?? state?.level;
      if (typeof z === 'number') pct = Math.round(z * 100);
    } catch {}
  } else if (p?.type === 'blank') {
    pct = Math.round((p.zoom || 1) * 100);
  }
  zoomIndicator.textContent = pct + '%';
}

// ── PDF page nav / download / print (only active for PDF pages) ──────
const btnPrev      = document.getElementById('btn-prev-page');
const btnNext      = document.getElementById('btn-next-page');
const btnDownload  = document.getElementById('btn-download');
const btnPrint     = document.getElementById('btn-print');
const pageIndEl    = document.getElementById('page-indicator');

btnPrev.addEventListener('click', () => {
  try { scrollPlugin?.scrollToPreviousPage?.(); }
  catch (e) { console.warn('prev page failed:', e); }
});
btnNext.addEventListener('click', () => {
  try { scrollPlugin?.scrollToNextPage?.(); }
  catch (e) { console.warn('next page failed:', e); }
});
btnDownload.addEventListener('click', () => {
  try { exportPlugin?.download?.(); }
  catch (e) { console.warn('download failed:', e); }
});
btnPrint.addEventListener('click', () => {
  try { printPlugin?.print?.(); }
  catch (e) { console.warn('print failed:', e); }
});

function refreshPageIndicator() {
  const isPdf = pages[activeIdx]?.type === 'pdf';
  btnPrev.disabled     = !isPdf;
  btnNext.disabled     = !isPdf;
  btnDownload.disabled = !isPdf;
  btnPrint.disabled    = !isPdf;
  if (!isPdf || !scrollPlugin) {
    pageIndEl.textContent = '—';
    return;
  }
  try {
    const cur   = scrollPlugin.getCurrentPage?.() ?? '?';
    const total = scrollPlugin.getTotalPages?.()  ?? '?';
    pageIndEl.textContent = `${cur} / ${total}`;
  } catch (e) {
    pageIndEl.textContent = '—';
  }
}

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

// ── Clipboard paste (image → blank page) ─────────────────────────────
document.addEventListener('paste', async e => {
  // Skip if the user is typing in a normal input
  if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;
  const p = pages[activeIdx];
  if (!p || p.type !== 'blank') return;
  const items = e.clipboardData?.items || [];
  for (const it of items) {
    if (it.kind === 'file' && it.type.startsWith('image/')) {
      e.preventDefault();
      const file = it.getAsFile();
      if (!file) continue;
      try {
        const src = await readDataURL(file);
        const im  = await loadImage(src);
        const mw = p.baseW * 0.45;
        const mh = p.baseH * 0.45;
        const s  = Math.min(mw / im.naturalWidth, mh / im.naturalHeight, 1);
        p.images.push({
          id: newId(),
          src,
          x: 60 + (blankScroller.scrollLeft || 0) / (p.zoom || 1),
          y: 60 + (blankScroller.scrollTop  || 0) / (p.zoom || 1),
          w: Math.round(im.naturalWidth * s),
          h: Math.round(im.naturalHeight * s),
        });
        rebuildImgLayer(p);
        selImg = p.images[p.images.length - 1].id;
        setTool('select');
        setStatus('Image pasted from clipboard');
        renderPageList();
      } catch (err) {
        console.error('Clipboard paste failed:', err);
      }
      return;
    }
  }
});

// ── Clear-current-page (toolbar button) ──────────────────────────────
document.getElementById('btn-clear').addEventListener('click', clearCurrentPage);

async function clearCurrentPage() {
  const p = pages[activeIdx];
  if (!p) return;

  if (p.type === 'blank') {
    if (!p.strokes.length) {
      setStatus('Nothing to clear');
      return;
    }
    if (!confirm('Remove all strokes on this canvas? (Images stay.)')) return;
    p.redo = [...p.strokes];
    p.strokes = [];
    replayStrokes(p);
    schedThumb(activeIdx);
    return;
  }

  if (p.type === 'pdf') {
    if (!annotation || !p.embedDocId) return;
    const pageIdx = Math.max(0, ((scrollPlugin?.getCurrentPage?.() ?? 1) - 1));
    const human = pageIdx + 1;
    if (!confirm(`Remove all annotations on page ${human}?`)) return;
    try {
      const got = annotation.getPageAnnotations?.({ pageIndex: pageIdx, documentId: p.embedDocId });
      // Some EmbedPDF builds return a Task here, others a plain array.
      const annos = Array.isArray(got) ? got : await taskToPromise(got).catch(() => []);
      let n = 0;
      for (const a of annos) {
        try { annotation.deleteAnnotation(pageIdx, a.id); n++; }
        catch (e) { console.warn('deleteAnnotation failed:', e); }
      }
      setStatus(`Removed ${n} annotation${n === 1 ? '' : 's'} on page ${human}`);
    } catch (e) {
      console.warn('clear page annotations failed:', e);
      setStatus('Clear failed — see console');
    }
  }
}

// ── Delete selected (Delete / Backspace) ─────────────────────────────
async function deleteSelected() {
  const p = pages[activeIdx];
  if (!p) return;
  if (p.type === 'blank') {
    if (selImg) {
      deleteImage(selImg, p);
      schedThumb(activeIdx);
    }
    return;
  }
  if (p.type === 'pdf' && annotation) {
    let selected = [];
    try { selected = annotation.getSelectedAnnotations?.() || []; }
    catch (e) { console.warn('getSelectedAnnotations failed:', e); }
    if (!selected.length) return;
    for (const a of selected) {
      try { annotation.deleteAnnotation(a.pageIndex, a.id); }
      catch (e) { console.warn('deleteAnnotation failed:', e); }
    }
  }
}

// ── Keyboard shortcuts ───────────────────────────────────────────────
// Capture phase + meta-key support so EmbedPDF doesn't swallow our
// Ctrl/Cmd-Z and so Mac users get the same behaviour.
window.addEventListener('keydown', e => {
  if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;
  const k = e.key.toLowerCase();
  const meta = e.ctrlKey || e.metaKey;

  if (meta && k === 'z') {
    e.preventDefault();
    document.getElementById('btn-undo').click();
    return;
  }
  if ((meta && k === 'y') || (meta && e.shiftKey && k === 'z')) {
    e.preventDefault();
    document.getElementById('btn-redo').click();
    return;
  }
  if (k === 'delete' || k === 'backspace') {
    e.preventDefault();
    deleteSelected();
    return;
  }
  const map = { p: 'pen', h: 'hl', e: 'er', t: 'text', s: 'select' };
  if (map[k]) setTool(map[k]);
}, true);

// ── Blank-canvas: drawing engine ─────────────────────────────────────
// The blank "page" has an intrinsic logical size (baseW × baseH) and a
// CSS scale applied for zoom. The sizer drives the scrollbar so when
// zoomed in you can scroll to see the whole content.
function setupBlankCanvas() {
  const p = pages[activeIdx];
  if (!p || p.type !== 'blank') return;
  const w = p.baseW;
  const h = p.baseH;
  const z = p.zoom || 1.0;

  blankContent.style.width  = w + 'px';
  blankContent.style.height = h + 'px';
  blankContent.style.transform = `scale(${z})`;
  blankSizer.style.width  = (w * z) + 'px';
  blankSizer.style.height = (h * z) + 'px';

  // Draw canvas internal pixel buffer matches the unscaled logical size
  // (×DPR for crispness). CSS transform scales it visually.
  drawCanvas.style.width  = w + 'px';
  drawCanvas.style.height = h + 'px';
  drawCanvas.width  = Math.round(w * DPR);
  drawCanvas.height = Math.round(h * DPR);
  dctx.setTransform(DPR, 0, 0, DPR, 0, 0);

  imgLayer.style.width  = w + 'px';
  imgLayer.style.height = h + 'px';
}

function ptToBlankContent(e) {
  // drawCanvas is css-scaled by the parent transform, so we must divide
  // by zoom to get unscaled (logical) coordinates.
  const r = drawCanvas.getBoundingClientRect();
  const src = e.touches ? e.touches[0] : e;
  const z = pages[activeIdx]?.zoom || 1.0;
  return { x: (src.clientX - r.left) / z, y: (src.clientY - r.top) / z };
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
      schedThumb(activeIdx);
    }
  }
  currentStroke = null;
}

// Throttled per-page thumbnail refresh after edits.
const thumbTimers = new Map();
function schedThumb(idx) {
  clearTimeout(thumbTimers.get(idx));
  thumbTimers.set(idx, setTimeout(() => {
    const items = pageListEl.querySelectorAll('.pg-item');
    const item = items[idx];
    if (!item) return;
    const canvas = item.querySelector('.pg-thumb');
    if (canvas && canvas.tagName === 'CANVAS') {
      renderPageThumb(pages[idx], canvas).catch(() => {});
    }
  }, 600));
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
document.addEventListener('pointerup', () => {
  if (dragSt || resizeSt) schedThumb(activeIdx);
  dragSt = null;
  resizeSt = null;
});

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
refreshPageIndicator();

// ── Lesson save / load (Supabase) ────────────────────────────────────
const sb = window.supabaseClient;
const lessonNameEl = document.getElementById('lesson-name');
let currentLessonId = null;
let currentLessonName = 'Untitled';
let currentLessonFolder = null;

function setLessonHeader(name) {
  currentLessonName = name || 'Untitled';
  lessonNameEl.textContent = currentLessonName;
}

function ab2b64(buf) {
  const u = new Uint8Array(buf);
  let s = '';
  const CHUNK = 0x8000;
  for (let i = 0; i < u.length; i += CHUNK) {
    s += String.fromCharCode.apply(null, u.subarray(i, i + CHUNK));
  }
  return btoa(s);
}
function b642ab(s) {
  const b = atob(s);
  const u = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
  return u.buffer;
}

// Serialise current state. PDFs go through exportPlugin so annotations
// are baked in as native PDF annotations and survive a reopen cycle.
async function serialiseLesson() {
  const out = { pages: [] };
  for (const p of pages) {
    if (p.type === 'blank') {
      out.pages.push({
        type: 'blank',
        name: p.name,
        baseW: p.baseW, baseH: p.baseH,
        zoom: p.zoom || 1,
        strokes: p.strokes || [],
        images: p.images || [],
      });
    } else if (p.type === 'pdf') {
      // First try EmbedPDF's exportPlugin so any annotations are baked in.
      let buffer = null;
      let source = 'export';
      try {
        if (p.embedDocId && docManager?.setActiveDocument) {
          try { docManager.setActiveDocument(p.embedDocId); } catch {}
        }
        // Annotations live in EmbedPDF's in-memory state until they're
        // committed to the underlying PDF document. Without this step,
        // saveAsCopyAndGetBufferAndName exports the unmodified original.
        try {
          const cTask = annotation?.commit?.(p.embedDocId);
          if (cTask) await taskToPromise(cTask).catch(() => {});
          console.log('[save] annotation.commit done for', p.name);
        } catch (e) { console.warn('[save] annotation.commit failed:', e); }

        const scope = exportPlugin?.forDocument?.(p.embedDocId);
        const task = scope?.saveAsCopyAndGetBufferAndName?.()
                  ?? exportPlugin?.saveAsCopyAndGetBufferAndName?.();
        if (task) {
          const result = await taskToPromise(task);
          buffer = result?.buffer || result;
          if (buffer && !(buffer instanceof ArrayBuffer) && buffer.buffer) {
            buffer = buffer.buffer;
          }
        }
      } catch (e) { console.warn('[save] PDF export failed for', p.name, e); }

      // Fallback: the original PDF bytes captured at upload (unannotated).
      // Better than dropping the page entirely.
      if (!buffer || !buffer.byteLength) {
        if (p.originalBytes?.byteLength) {
          buffer = p.originalBytes.buffer.slice(
            p.originalBytes.byteOffset,
            p.originalBytes.byteOffset + p.originalBytes.byteLength,
          );
          source = 'original';
        }
      }

      const len = buffer?.byteLength ?? 0;
      console.log(`[save] "${p.name}" PDF buffer (${source}):`, len, 'bytes');
      if (!buffer || !len) {
        console.warn(`[save] skipping "${p.name}" — no buffer available`);
        continue;
      }
      out.pages.push({
        type: 'pdf',
        name: p.name,
        pdfBase64: ab2b64(buffer),
      });
    }
  }
  return out;
}

async function buildLessonThumbnail() {
  const first = pages[0];
  if (!first) return null;
  const c = document.createElement('canvas');
  c.width = 240; c.height = 180;
  await renderPageThumb(first, c).catch(() => {});
  try { return c.toDataURL('image/jpeg', 0.7); } catch { return null; }
}

async function saveLesson({ asNew = false } = {}) {
  const usr = await getCurrentUser?.();
  if (!usr) {
    if (confirm('Sign in to save this lesson?')) {
      window.location.href = '../auth/login.html';
    }
    return;
  }
  if (!pages.length) { setStatus('Nothing to save'); return; }

  let name = currentLessonName;
  if (asNew || !currentLessonId) {
    name = prompt('Save lesson as:', currentLessonName === 'Untitled' ? '' : currentLessonName);
    if (!name) return;
  }

  setStatus('Saving…');
  const data = await serialiseLesson();
  const thumbnail = await buildLessonThumbnail();

  // Diagnostic: show what we're about to send
  const dataJson = JSON.stringify(data);
  const thumbBytes = thumbnail ? thumbnail.length : 0;
  console.log('[save] payload sizes — data JSON:', dataJson.length, 'bytes, thumbnail:', thumbBytes, 'bytes, page types:',
    data.pages.map(p => `${p.type}${p.type === 'pdf' ? `(${p.pdfBase64?.length || 0}b64)` : ''}`).join(','));

  if (currentLessonId && !asNew) {
    const { error, data: rows, status, statusText } = await sb.from('whiteboard_lessons').update({
      name, data, thumbnail, updated_at: new Date().toISOString(),
    }).eq('id', currentLessonId).select();
    console.log('[save] update result — status:', status, statusText, 'rows:', rows?.length);
    if (error) {
      setStatus('Save failed: ' + error.message);
      console.error('[save] supabase update error:', error);
      console.error('[save] error details:', JSON.stringify(error, null, 2));
      return;
    }
    if (!rows || rows.length === 0) {
      setStatus('Save failed: no row updated (RLS? wrong id?)');
      console.error('[save] update returned 0 rows — possibly RLS denial');
      return;
    }
    setStatus(`Saved "${name}"`);
    setLessonHeader(name);
  } else {
    const { data: row, error, status, statusText } = await sb.from('whiteboard_lessons').insert({
      user_id: usr.id,
      folder_id: currentLessonFolder,
      name, data, thumbnail,
    }).select().single();
    console.log('[save] insert result — status:', status, statusText);
    if (error) {
      setStatus('Save failed: ' + error.message);
      console.error('[save] supabase insert error:', error);
      console.error('[save] error details:', JSON.stringify(error, null, 2));
      return;
    }
    currentLessonId = row.id;
    setLessonHeader(name);
    setStatus(`Saved "${name}"`);
    history.replaceState(null, '', `edit.html?lesson=${encodeURIComponent(row.id)}`);
  }
}

async function loadLesson(id) {
  console.log('[load] fetching lesson', id);
  const { data, error } = await sb.from('whiteboard_lessons')
    .select('id,name,folder_id,data').eq('id', id).single();
  if (error) { setStatus('Load failed: ' + error.message); console.error('[load] fetch failed', error); return; }
  console.log('[load] lesson:', data.name, 'pages:', data.data?.pages?.length);

  currentLessonId = data.id;
  currentLessonFolder = data.folder_id;
  setLessonHeader(data.name);

  pages.length = 0;
  activeIdx = -1;

  for (const sp of (data.data?.pages || [])) {
    if (sp.type === 'blank') {
      pages.push({
        id: newId(),
        type: 'blank',
        name: sp.name,
        baseW: sp.baseW, baseH: sp.baseH,
        zoom: sp.zoom || 1,
        strokes: sp.strokes || [],
        images: sp.images || [],
        redo: [],
      });
    } else if (sp.type === 'pdf' && sp.pdfBase64 && docManager) {
      const decoded = b642ab(sp.pdfBase64);
      const placeholder = {
        id: newId(),
        type: 'pdf',
        name: sp.name,
        embedDocId: null,
        _idGuessed: true,
        // Keep a copy of the bytes so subsequent saves can fall back to
        // them if exportPlugin is broken on this build of EmbedPDF.
        originalBytes: new Uint8Array(decoded.slice(0)),
      };
      pages.push(placeholder);
      try {
        const buffer = decoded;
        console.log(`[load] opening "${sp.name}" (${buffer.byteLength} bytes)`);
        const result = await docManager.openDocumentBuffer({
          buffer, name: sp.name + '.pdf', autoActivate: true,
        });
        console.log('[load] openDocumentBuffer returned:', result);
        const active = docManager.getActiveDocument?.();
        console.log('[load] active doc after open:', active);
        const realId =
          result?.documentId || result?.id || result?.doc?.id ||
          active?.documentId || active?.id || null;
        if (realId) {
          placeholder.embedDocId = realId;
          placeholder._idGuessed = false;
          console.log(`[load] captured embedDocId for "${sp.name}":`, realId);
        } else {
          console.warn(`[load] no embedDocId for "${sp.name}" — PDF may not display`);
        }
      } catch (e) { console.warn('[load] PDF reopen failed:', e); }
    }
  }

  if (pages.length > 0) switchPage(0);
  else { renderPageList(); updateEmptyState(); }
  setStatus(`Loaded "${data.name}"`);
}

document.getElementById('btn-save').addEventListener('click', () => saveLesson());
document.getElementById('btn-save-as').addEventListener('click', () => saveLesson({ asNew: true }));
window.addEventListener('keydown', e => {
  const meta = e.ctrlKey || e.metaKey;
  if (meta && e.key.toLowerCase() === 's') {
    e.preventDefault();
    saveLesson();
  }
}, true);

(async function loadFromUrl() {
  const params = new URLSearchParams(location.search);
  console.log('[boot] URL params:', Object.fromEntries(params));
  if (params.get('lesson')) {
    let waited = 0;
    while (!docManager && waited < 5000) { await new Promise(r => setTimeout(r, 50)); waited += 50; }
    if (!docManager) { console.error('[boot] docManager never became ready'); return; }
    await loadLesson(params.get('lesson'));
  } else if (params.get('folder')) {
    currentLessonFolder = params.get('folder');
  }
})();
