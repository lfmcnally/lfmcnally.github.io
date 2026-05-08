// Lesson Whiteboard — wraps EmbedPDF with a classroom-style toolbar
// and a "Pages" sidebar.
import EmbedPDF from 'https://cdn.jsdelivr.net/npm/@embedpdf/snippet/dist/embedpdf.js';

// ── DOM ──────────────────────────────────────────────────────────────
const statusEl    = document.getElementById('status');
const pageList    = document.getElementById('page-list');
const emptyState  = document.getElementById('empty-state');
const sizeSlider  = document.getElementById('pen-size');
const sizeVal     = document.getElementById('pen-size-val');
const cpick       = document.getElementById('colour-pick');
const filePdf     = document.getElementById('file-pdf');

const setStatus = msg => { statusEl.textContent = msg; };

// ── Tool state (mirrored to EmbedPDF when ready) ─────────────────────
let currentTool = 'ink';
let currentColor = '#1a1a1a';
let currentSize  = 6;

// EmbedPDF tool IDs we care about
const TOOL_IDS = ['ink', 'inkHighlighter', 'freeText'];

// ── EmbedPDF init ────────────────────────────────────────────────────
setStatus('Initialising viewer…');

const viewer = EmbedPDF.init({
  type: 'container',
  target: document.getElementById('pdf-viewer'),
  theme: { preference: 'system' },
  // We provide our own "Pages" sidebar, so kill EmbedPDF's tab bar.
  tabBar: 'never',
  documentManager: { maxDocuments: 20 },
});

let registry, docManager, annotation, ui;
const pages = new Map(); // documentId → { id, name }

try {
  registry   = await viewer.registry;
  docManager = registry.getPlugin('document-manager')?.provides();
  annotation = registry.getPlugin('annotation')?.provides();
  ui         = registry.getPlugin('ui')?.provides();

  if (!docManager) throw new Error('document-manager plugin missing');
  if (!annotation) console.warn('annotation plugin not found — pen tools will be disabled');

  // Wire up document lifecycle ↔ sidebar
  docManager.onDocumentOpened?.(doc => {
    pages.set(doc.documentId, { id: doc.documentId, name: doc.name || 'Untitled' });
    renderPageList();
    updateEmptyState();
  });
  docManager.onDocumentClosed?.(doc => {
    pages.delete(doc.documentId);
    renderPageList();
    updateEmptyState();
  });
  docManager.onActiveDocumentChanged?.(() => renderPageList());

  // Mirror our default tool/colour/size into EmbedPDF immediately so the
  // first stroke matches what's selected in our toolbar.
  applyToolState();

  setStatus('Ready');
} catch (err) {
  console.error('EmbedPDF failed to initialise:', err);
  setStatus('Failed to load viewer — see console');
}

// ── Sidebar ──────────────────────────────────────────────────────────
function renderPageList() {
  pageList.innerHTML = '';
  const activeId = docManager?.getActiveDocument?.()?.documentId;
  if (pages.size === 0) {
    const hint = document.createElement('div');
    hint.style.cssText = 'font-size:11px;color:var(--txm);padding:6px 4px;';
    hint.textContent = 'No documents open yet.';
    pageList.appendChild(hint);
    return;
  }
  for (const [id, p] of pages) {
    const el = document.createElement('div');
    el.className = 'pg-item' + (id === activeId ? ' active' : '');
    el.innerHTML = `
      <span class="pg-icon">📄</span>
      <span class="pg-name"></span>
      <button class="pg-close" title="Close">×</button>
    `;
    el.querySelector('.pg-name').textContent = p.name;
    el.addEventListener('click', e => {
      if (e.target.closest('.pg-close')) return;
      docManager.setActiveDocument?.(id);
      renderPageList();
    });
    el.querySelector('.pg-close').addEventListener('click', e => {
      e.stopPropagation();
      docManager.closeDocument?.(id);
    });
    pageList.appendChild(el);
  }
}

function updateEmptyState() {
  emptyState.classList.toggle('hidden', pages.size > 0);
}

// ── + PDF button ─────────────────────────────────────────────────────
document.getElementById('btn-add-pdf').addEventListener('click', () => filePdf.click());
filePdf.addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file || !docManager) return;
  setStatus(`Loading ${file.name}…`);
  try {
    const buffer = await file.arrayBuffer();
    await docManager.openDocumentBuffer({
      buffer,
      name: file.name,
      autoActivate: true,
    });
    setStatus(`Loaded: ${file.name}`);
  } catch (err) {
    console.error('Failed to open PDF:', err);
    setStatus('Failed to load PDF — see console');
  }
  e.target.value = '';
});

// ── Toolbar: tool selection ──────────────────────────────────────────
document.querySelectorAll('.tb-btn[data-tool]').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = btn.dataset.tool;
    setTool(t);
  });
});

function setTool(t) {
  currentTool = t;
  document.querySelectorAll('.tb-btn[data-tool]').forEach(b =>
    b.classList.toggle('active', b.dataset.tool === t));
  applyToolState();
}

// ── Toolbar: colour swatches + colour picker ─────────────────────────
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

// ── Toolbar: size slider ─────────────────────────────────────────────
sizeSlider.addEventListener('input', () => {
  currentSize = parseInt(sizeSlider.value, 10);
  sizeVal.textContent = String(currentSize);
  applyToolState();
});

// ── Push our tool state into EmbedPDF's annotation plugin ────────────
function applyToolState() {
  if (!annotation) return;

  // Update defaults for the pen-style tools so colour/size carry across.
  // We deliberately mirror to all stroke-y tools so swapping pen ↔
  // highlighter feels like a single toolbar.
  const inkPatch = { color: currentColor, strokeWidth: currentSize };
  const hlPatch  = { color: currentColor, strokeWidth: Math.max(currentSize * 2, 10) };
  const txtPatch = { fontColor: currentColor };

  try {
    annotation.setToolDefaults?.('ink',           inkPatch);
    annotation.setToolDefaults?.('inkHighlighter', hlPatch);
    annotation.setToolDefaults?.('freeText',      txtPatch);
  } catch (err) {
    console.warn('setToolDefaults failed (may be a property-name mismatch):', err);
  }

  // Activate / deactivate the tool. 'select' deactivates drawing mode.
  try {
    if (currentTool === 'select') {
      annotation.setActiveTool?.(null);
    } else {
      annotation.setActiveTool?.(currentTool);
    }
  } catch (err) {
    console.warn('setActiveTool failed:', err);
  }
}

// ── Undo / Redo ──────────────────────────────────────────────────────
document.getElementById('btn-undo').addEventListener('click', () => {
  const history = registry?.getPlugin?.('history')?.provides?.();
  history?.undo?.() ?? document.execCommand?.('undo');
});
document.getElementById('btn-redo').addEventListener('click', () => {
  const history = registry?.getPlugin?.('history')?.provides?.();
  history?.redo?.() ?? document.execCommand?.('redo');
});

// ── Keyboard shortcuts ───────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
  const k = e.key.toLowerCase();
  if (e.ctrlKey && k === 'z') { document.getElementById('btn-undo').click(); return; }
  if (e.ctrlKey && k === 'y') { document.getElementById('btn-redo').click(); return; }
  const map = { p: 'ink', h: 'inkHighlighter', t: 'freeText', s: 'select' };
  if (map[k]) setTool(map[k]);
});

// ── Initial render ───────────────────────────────────────────────────
renderPageList();
updateEmptyState();
