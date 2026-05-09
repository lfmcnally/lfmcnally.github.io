// Lessons landing — folder tree + lesson grid backed by Supabase.
// auth.js + config.js are loaded via <script> tags in whiteboard.html, so
// `window.supabaseClient` is already available before this module runs.

const sb = window.supabaseClient;

// ── DOM ──────────────────────────────────────────────────────────────
const treeEl     = document.getElementById('tree');
const gridEl     = document.getElementById('files-grid');
const emptyEl    = document.getElementById('empty');
const pathEl     = document.getElementById('path');
const userInfo   = document.getElementById('user-info');
const authOv     = document.getElementById('auth-overlay');
const modalOv    = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalInput = document.getElementById('modal-input');
const ctxMenu    = document.getElementById('ctx-menu');
const toastEl    = document.getElementById('toast');

// ── State ────────────────────────────────────────────────────────────
let user = null;
let folders = []; // [{id, parent_id, name}]
let lessons = []; // [{id, folder_id, name, thumbnail, updated_at}]
let currentFolder = null; // id or null = "All lessons" (top-level shown)

// ── Utilities ────────────────────────────────────────────────────────
function toast(msg, ms = 1800) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toastEl.classList.remove('show'), ms);
}
function modal(title, defaultValue = '') {
  modalTitle.textContent = title;
  modalInput.value = defaultValue;
  modalOv.classList.remove('hidden');
  setTimeout(() => modalInput.focus(), 30);
  return new Promise(res => { modal._res = res; });
}
document.getElementById('modal-ok').onclick = () => {
  modalOv.classList.add('hidden');
  modal._res?.(modalInput.value.trim());
};
document.getElementById('modal-cancel').onclick = () => {
  modalOv.classList.add('hidden');
  modal._res?.(null);
};
modalInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('modal-ok').click();
  if (e.key === 'Escape') document.getElementById('modal-cancel').click();
});

// ── Auth gate ────────────────────────────────────────────────────────
(async function init() {
  user = await getCurrentUser();
  if (!user) {
    authOv.classList.remove('hidden');
    return;
  }
  const profile = await getUserProfile();
  userInfo.textContent = profile?.full_name ? `${profile.full_name}` : user.email;
  await loadAll();
  renderTree();
  selectFolder(null);
})();

// ── Data loading ─────────────────────────────────────────────────────
async function loadAll() {
  const [{ data: f }, { data: l }] = await Promise.all([
    sb.from('whiteboard_folders').select('id,parent_id,name').order('name'),
    sb.from('whiteboard_lessons')
      .select('id,folder_id,name,thumbnail,updated_at')
      .order('updated_at', { ascending: false }),
  ]);
  folders = f || [];
  lessons = l || [];
}

// ── Folder tree ──────────────────────────────────────────────────────
function renderTree() {
  treeEl.innerHTML = '';
  const byParent = new Map();
  for (const f of folders) {
    const k = f.parent_id || 'root';
    if (!byParent.has(k)) byParent.set(k, []);
    byParent.get(k).push(f);
  }
  function build(parentId, container) {
    const kids = byParent.get(parentId || 'root') || [];
    for (const f of kids) {
      const row = document.createElement('button');
      row.className = 'tree-row' + (currentFolder === f.id ? ' active' : '');
      row.dataset.folder = f.id;
      row.innerHTML = `<span class="tree-icon">📁</span><span></span>`;
      row.querySelector('span:last-child').textContent = f.name;
      row.addEventListener('click', () => selectFolder(f.id));
      row.addEventListener('contextmenu', e => showCtx(e, 'folder', f));
      container.appendChild(row);
      const sub = document.createElement('div');
      sub.className = 'tree-children';
      container.appendChild(sub);
      build(f.id, sub);
    }
  }
  build(null, treeEl);

  // Root row click handler
  document.querySelector('.tree-row.root').addEventListener('click', () => selectFolder(null));
  document.querySelectorAll('.tree-row.root').forEach(r =>
    r.classList.toggle('active', currentFolder === null));
}

function selectFolder(id) {
  currentFolder = id;
  pathEl.textContent = id ? folderPath(id) : '';
  document.querySelectorAll('.tree-row').forEach(r => {
    const fid = r.dataset.folder || null;
    r.classList.toggle('active', (fid || null) === (id || null));
  });
  renderFiles();
}
function folderPath(id) {
  const out = [];
  let f = folders.find(x => x.id === id);
  while (f) {
    out.unshift(f.name);
    f = folders.find(x => x.id === f.parent_id);
  }
  return '/ ' + out.join(' / ');
}

// ── Files grid ───────────────────────────────────────────────────────
function renderFiles() {
  gridEl.innerHTML = '';
  // Sub-folders inside the current folder appear as "folder tiles" first
  const subFolders = folders.filter(f => (f.parent_id || null) === (currentFolder || null));
  for (const f of subFolders) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerHTML = `
      <div class="tile-thumb">📁</div>
      <div class="tile-meta">
        <span class="tile-icon">📁</span>
        <span class="tile-name"></span>
      </div>
    `;
    tile.querySelector('.tile-name').textContent = f.name;
    tile.addEventListener('click', () => selectFolder(f.id));
    tile.addEventListener('contextmenu', e => showCtx(e, 'folder', f));
    gridEl.appendChild(tile);
  }
  const myLessons = lessons.filter(l => (l.folder_id || null) === (currentFolder || null));
  for (const l of myLessons) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    const thumb = l.thumbnail
      ? `<img src="${l.thumbnail}" alt="">`
      : '📄';
    tile.innerHTML = `
      <div class="tile-thumb">${thumb}</div>
      <div class="tile-meta">
        <span class="tile-icon">🎨</span>
        <span class="tile-name"></span>
      </div>
    `;
    tile.querySelector('.tile-name').textContent = l.name;
    tile.addEventListener('click', () => openLesson(l.id));
    tile.addEventListener('contextmenu', e => showCtx(e, 'lesson', l));
    gridEl.appendChild(tile);
  }
  emptyEl.classList.toggle('hidden', subFolders.length + myLessons.length > 0);
}

function openLesson(id) {
  window.location.href = `edit.html?lesson=${encodeURIComponent(id)}`;
}

// ── Toolbar buttons ──────────────────────────────────────────────────
document.getElementById('btn-new-lesson').addEventListener('click', () => {
  const params = new URLSearchParams({ new: '1' });
  if (currentFolder) params.set('folder', currentFolder);
  window.location.href = `edit.html?${params.toString()}`;
});

document.getElementById('btn-new-folder').addEventListener('click', async () => {
  const name = await modal('New folder name', '');
  if (!name) return;
  const { data, error } = await sb.from('whiteboard_folders').insert({
    user_id: user.id,
    parent_id: currentFolder,
    name,
  }).select().single();
  if (error) { toast('Failed: ' + error.message); return; }
  folders.push(data);
  renderTree();
  renderFiles();
  toast(`Folder "${name}" created`);
});

// ── Context menu (rename / delete) ───────────────────────────────────
let ctxTarget = null;
function showCtx(e, kind, item) {
  e.preventDefault();
  ctxTarget = { kind, item };
  ctxMenu.style.left = e.clientX + 'px';
  ctxMenu.style.top  = e.clientY + 'px';
  ctxMenu.classList.remove('hidden');
}
document.addEventListener('click', () => ctxMenu.classList.add('hidden'));

ctxMenu.addEventListener('click', async e => {
  const action = e.target.closest('button')?.dataset.action;
  if (!action || !ctxTarget) return;
  const { kind, item } = ctxTarget;
  ctxMenu.classList.add('hidden');

  if (action === 'rename') {
    const name = await modal(`Rename ${kind}`, item.name);
    if (!name || name === item.name) return;
    const table = kind === 'folder' ? 'whiteboard_folders' : 'whiteboard_lessons';
    const { error } = await sb.from(table).update({ name }).eq('id', item.id);
    if (error) { toast('Failed: ' + error.message); return; }
    item.name = name;
    renderTree();
    renderFiles();
    toast('Renamed');
  } else if (action === 'delete') {
    if (!confirm(`Delete ${kind} "${item.name}"?` +
                 (kind === 'folder' ? ' All contents will be removed.' : ''))) return;
    const table = kind === 'folder' ? 'whiteboard_folders' : 'whiteboard_lessons';
    const { error } = await sb.from(table).delete().eq('id', item.id);
    if (error) { toast('Failed: ' + error.message); return; }
    if (kind === 'folder') {
      folders = folders.filter(f => f.id !== item.id);
      // Cascade applies in DB; reload lessons to reflect
      await loadAll();
      if (currentFolder === item.id) currentFolder = null;
    } else {
      lessons = lessons.filter(l => l.id !== item.id);
    }
    renderTree();
    renderFiles();
    toast('Deleted');
  }
});
