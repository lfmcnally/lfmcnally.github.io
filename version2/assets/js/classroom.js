/* ============================================================
   Classicalia — Classroom (presentation) mode
   Shared across the set-text section pages.

   Pair with classroom.css:
     <link rel="stylesheet" href="/version2/assets/css/classroom.css">
     <script src="/version2/assets/js/classroom.js"></script>

   Works with two kinds of page:
   • GCSE revision pages: #latinCol / #englishCol parallel columns
     and a `vocabData` map.
   • A Level parallel-reader pages (Aeneid IV, Nepos' Hannibal):
     window.PR_SECTION / window.AENEID4_SECTION data and a #text grid.

   This script injects its own Classroom button (into .controls-left)
   and the full-screen overlay, then builds a clean parallel text from
   the page's text. The overlay has a pen layer so the teacher can
   annotate the text on the board. No other markup needed.
   ============================================================ */
(function () {
  // [english|ids] / {english|note} markup used by the parallel-reader data.
  var MARK = /\[([^\[\]|]+)\|([0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*)\]|\{([^{}|]+)\|([^{}|]+)\}/g;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function init() {
    const latinCol   = document.getElementById('latinCol');
    const englishCol = document.getElementById('englishCol');
    const prSec      = window.PR_SECTION || window.AENEID4_SECTION || null;
    const left       = document.querySelector('.controls-left');
    const mode = (latinCol && englishCol) ? 'gcse'
               : (prSec && document.getElementById('text')) ? 'reader'
               : null;
    if (!mode || !left) return;                          // not a set-text page
    if (document.getElementById('presentBtn')) return;  // already initialised

    // Vocab data lives in the page's inline script (shared global lexical scope).
    let VD = {};
    try { if (typeof vocabData !== 'undefined' && vocabData) VD = vocabData; } catch (e) {}

    // ── Inject the entry button into the controls bar ──
    const mkDiv = () => { const d = document.createElement('div'); d.className = 'ctrl-div'; return d; };
    const btn = document.createElement('button');
    btn.className = 'ctrl-btn ctrl-present';
    btn.id = 'presentBtn';
    btn.type = 'button';
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"></rect><path d="M12 16v4M8 20h8"></path></svg>Classroom';
    const hint = left.querySelector('.key-hint');
    left.insertBefore(mkDiv(), hint);   // insertBefore(node, null) appends
    left.insertBefore(btn, hint);
    if (hint && mode === 'gcse') {
      left.insertBefore(mkDiv(), hint);
      hint.innerHTML = '<kbd>&larr;</kbd> <kbd>&rarr;</kbd> step &nbsp;&middot;&nbsp; click to reveal';
    }

    // ── Inject the overlay ──
    const overlay = document.createElement('div');
    overlay.className = 'present-overlay';
    overlay.id = 'presentOverlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
      '<div class="present-bar">' +
        '<div class="present-bar-left">' +
          '<span class="present-eyebrow" id="presentTitle"></span>' +
          '<span class="present-lines" id="presentSub"></span>' +
        '</div>' +
        '<div class="present-bar-right">' +
          '<button class="present-ctrl" id="presentEngBtn" type="button">Hide English</button>' +
          '<div class="present-adjust"><span class="present-adjust-label">Size</span>' +
            '<div class="present-fontsize">' +
              '<button class="present-ctrl" id="presentDecBtn" type="button" aria-label="Smaller text">A&minus;</button>' +
              '<button class="present-ctrl" id="presentIncBtn" type="button" aria-label="Larger text">A+</button>' +
            '</div></div>' +
          '<div class="present-adjust"><span class="present-adjust-label">Spacing</span>' +
            '<div class="present-fontsize">' +
              '<button class="present-ctrl" id="presentLhDecBtn" type="button" aria-label="Less line spacing">&minus;</button>' +
              '<button class="present-ctrl" id="presentLhIncBtn" type="button" aria-label="More line spacing">+</button>' +
            '</div></div>' +
          '<button class="present-ctrl present-ctrl-exit" id="presentExitBtn" type="button">Exit &times;</button>' +
        '</div>' +
      '</div>' +
      '<div class="present-scroll"><div class="present-stage">' +
        '<canvas class="present-ink present-ink-under" aria-hidden="true"></canvas>' +
        '<div class="present-grid" id="presentGrid"></div>' +
        '<canvas class="present-ink present-ink-over" aria-hidden="true"></canvas>' +
      '</div></div>' +
      '<div class="present-tip" id="presentTip"></div>';
    document.body.appendChild(overlay);

    const grid     = overlay.querySelector('#presentGrid');
    const tip      = overlay.querySelector('#presentTip');
    const exitBtn  = overlay.querySelector('#presentExitBtn');
    const engBtn   = overlay.querySelector('#presentEngBtn');
    const incBtn   = overlay.querySelector('#presentIncBtn');
    const decBtn   = overlay.querySelector('#presentDecBtn');
    const lhIncBtn = overlay.querySelector('#presentLhIncBtn');
    const lhDecBtn = overlay.querySelector('#presentLhDecBtn');

    let built = false, base = 20, lh = 1.6, engHidden = false;

    // Build the clean parallel text from the page.
    // GCSE verse (e.g. Ovid's Baucis) keeps its line-by-line rows; GCSE prose
    // (data-flow="prose" on #latinCol) flows as continuous parallel paragraphs;
    // A Level reader pages keep their sense units (chunks) side by side.
    function build() {
      const titleEl = document.querySelector('.passage-title');
      const deckEl  = document.querySelector('.passage-deck');
      const tEl = overlay.querySelector('#presentTitle');
      const sEl = overlay.querySelector('#presentSub');
      if (tEl) tEl.textContent = titleEl ? titleEl.textContent.trim() : 'Classroom view';
      if (sEl) {
        const sub = deckEl ? deckEl.textContent.split('—')[0].trim() : '';
        sEl.textContent = (sub ? sub + ' · ' : '') + 'Classroom view';
      }
      if (mode === 'reader') buildChunks();
      else if (latinCol.dataset.flow === 'prose') buildFlow();
      else buildRows();
      built = true;
    }

    // ── GCSE verse: aligned line-by-line rows ──
    function buildRows() {
      grid.classList.remove('present-grid-flow');
      // English text keyed by line number.
      const engByNum = {};
      englishCol.querySelectorAll('.line-row').forEach(r => {
        const numEl = r.querySelector('.line-num');
        const num = (numEl ? numEl.textContent : '').trim();
        const wrap = r.querySelector('.words-wrap');
        let txt = wrap ? wrap.textContent.replace(/\s+/g, ' ').trim() : '';
        txt = txt.replace(/\s+([,.;:!?])/g, '$1');
        engByNum[num] = txt;
      });

      let html = '<div class="present-colhead"><span class="ch-latin">Latin</span><span class="ch-eng">English</span></div>';
      html += '<div class="present-rows">';
      latinCol.querySelectorAll('.line-row').forEach(r => {
        const numEl = r.querySelector('.line-num');
        const num = (numEl ? numEl.textContent : '').trim();
        let lat = '';
        r.querySelectorAll('.wg').forEach((wg, i) => {
          const order = wg.dataset.order || '';
          const lw = wg.querySelector('.lat-w');
          let w = (lw ? lw.textContent : '').trim();
          // Enclitics (-que / -ne) are written joined in the verse: drop the
          // teaching hyphen but keep them as separate, individually hoverable spans.
          const enclitic = w.charAt(0) === '-';
          if (enclitic) w = w.slice(1);
          if (i > 0 && !enclitic) lat += ' ';
          lat += '<span class="pw" data-order="' + order + '">' + w + '</span>';
        });
        html += '<div class="present-row">'
              +   '<div class="present-num">' + num + '</div>'
              +   '<div class="present-latin">' + lat + '</div>'
              +   '<div class="present-english">' + (engByNum[num] || '') + '</div>'
              + '</div>';
      });
      html += '</div>';   // close .present-rows
      html += '<div class="present-hint">Hover any Latin word for its dictionary form and meaning.</div>';
      grid.innerHTML = html;

      grid.querySelectorAll('.pw').forEach(pw => {
        pw.addEventListener('mouseenter', hoverIn(() => showTip(pw)));
        pw.addEventListener('mouseleave', hoverOut(hideTip));
        pw.addEventListener('click', () => showTip(pw));
      });
    }

    // ── GCSE prose: continuous parallel paragraphs (Latin left, English right) ──
    function buildFlow() {
      grid.classList.add('present-grid-flow');
      let lat = '';
      latinCol.querySelectorAll('.wg').forEach(wg => {
        const order = wg.dataset.order || '';
        const lw = wg.querySelector('.lat-w');
        let w = (lw ? lw.textContent : '').trim();
        if (!w) return;
        const enclitic = w.charAt(0) === '-';   // -que / -ne join to the previous word
        if (enclitic) w = w.slice(1);
        if (lat && !enclitic) lat += ' ';
        lat += '<span class="pw" data-order="' + order + '">' + w + '</span>';
      });
      let eng = '';
      englishCol.querySelectorAll('.eng-w').forEach(ew => {
        const order = ew.dataset.order || '';
        const t = (ew.textContent || '').trim();
        if (!t) return;
        const startsPunct = /^[,.;:!?’”")\]]/.test(t);
        if (eng && !startsPunct) eng += ' ';
        eng += '<span class="ew" data-order="' + order + '">' + t + '</span>';
      });
      grid.innerHTML =
        '<div class="present-colhead present-colhead-flow"><span class="ch-latin">Latin</span><span class="ch-eng">English</span></div>' +
        '<div class="present-flow">' +
          '<div class="present-latin-col">' + lat + '</div>' +
          '<div class="present-english-col">' + eng + '</div>' +
        '</div>' +
        '<div class="present-hint">Hover any Latin word for its dictionary form and meaning — its English lights up too.</div>';

      grid.querySelectorAll('.pw').forEach(pw => {
        pw.addEventListener('mouseenter', hoverIn(() => { showTip(pw); mark('.ew', pw.dataset.order, true); }));
        pw.addEventListener('click', () => showTip(pw));
        pw.addEventListener('mouseleave', hoverOut(() => { hideTip(); mark('.ew', pw.dataset.order, false); }));
      });
      grid.querySelectorAll('.ew').forEach(ew => {
        ew.addEventListener('mouseenter', hoverIn(() => mark('.pw', ew.dataset.order, true)));
        ew.addEventListener('mouseleave', hoverOut(() => mark('.pw', ew.dataset.order, false)));
      });
    }

    // ── A Level reader: sense units side by side (Latin lines left, English right) ──
    function buildChunks() {
      grid.classList.add('present-grid-chunks');
      let html = '<div class="present-colhead present-colhead-flow"><span class="ch-latin">Latin</span><span class="ch-eng">English</span></div>';
      html += '<div class="present-chunks">';
      prSec.chunks.forEach((c, ci) => {
        const byId = {};
        c.words.forEach(w => { byId[w.id] = w; });
        const lat = c.lines.map(l => {
          const t = l.t.map(tok => {
            if (typeof tok === 'string') return esc(tok);
            const w = byId[tok];
            return '<span class="pw" data-key="' + ci + ':' + tok + '">' + esc(w ? w.w : '') + '</span>';
          }).join('');
          const num = (l.n === '' || l.n == null) ? '' : '<span class="present-cnum">' + l.n + '</span>';
          return '<div class="present-cline">' + num + '<span class="present-ctext">' + t + '</span></div>';
        }).join('');
        let en = '', last = 0, m;
        MARK.lastIndex = 0;
        while ((m = MARK.exec(c.marked))) {
          en += esc(c.marked.slice(last, m.index));
          if (m[1] !== undefined) en += '<span class="ew" data-keys="' + keysFor(ci, m[2]) + '">' + esc(m[1]) + '</span>';
          else en += '<span class="present-sup">' + esc(m[3]) + '</span>';
          last = MARK.lastIndex;
        }
        en += esc(c.marked.slice(last));
        html += '<div class="present-chunk"><div class="present-chunk-latin">' + lat + '</div>' +
                '<div class="present-chunk-english">' + en + '</div></div>';
      });
      html += '</div>';
      html += '<div class="present-hint">Hover any Latin word for its dictionary form and meaning — its English lights up too.</div>';
      grid.innerHTML = html;

      const ews = grid.querySelectorAll('.ew');
      const markKeys = (keys, on) => {
        grid.querySelectorAll('.pw').forEach(pw => { if (keys.indexOf(pw.dataset.key) !== -1) pw.classList.toggle('xref', on); });
        ews.forEach(ew => {
          if (ew.dataset.keys.split(',').some(k => keys.indexOf(k) !== -1)) ew.classList.toggle('xref', on);
        });
      };
      grid.querySelectorAll('.pw').forEach(pw => {
        pw.addEventListener('mouseenter', hoverIn(() => { showTip(pw); markKeys([pw.dataset.key], true); }));
        pw.addEventListener('click', () => showTip(pw));
        pw.addEventListener('mouseleave', hoverOut(() => { hideTip(); markKeys([pw.dataset.key], false); }));
      });
      ews.forEach(ew => {
        ew.addEventListener('mouseenter', hoverIn(() => markKeys(ew.dataset.keys.split(','), true)));
        ew.addEventListener('mouseleave', hoverOut(() => markKeys(ew.dataset.keys.split(','), false)));
      });
    }
    // An id is a Latin word in the same chunk (5) or, where the English runs
    // over into a neighbouring chunk, chunk.word counting chunks from 1 (7.3).
    function keysFor(ci, ids) {
      return ids.split(',').map(x => {
        const p = x.split('.');
        return p.length === 2 ? (p[0] - 1) + ':' + p[1] : ci + ':' + x;
      }).join(',');
    }

    // Cross-highlight the paired word(s) in the other column (GCSE prose).
    function mark(sel, order, on) {
      if (!order) return;
      grid.querySelectorAll(sel).forEach(el => {
        const o = el.dataset.order || '';
        if (o === order || o.split(',').indexOf(order) !== -1) el.classList.toggle('xref', on);
      });
    }

    // Vocabulary for a Latin word, whichever kind of page it came from.
    function lookup(pw) {
      if (mode === 'reader') {
        const p = (pw.dataset.key || '').split(':');
        const c = prSec.chunks[p[0]];
        const w = c && c.words.filter(x => String(x.id) === p[1])[0];
        return w ? { head: esc(w.w), gloss: esc(w.vocab), parse: esc(w.parse || '') } : null;
      }
      return VD[pw.dataset.order] || null;
    }

    function showTip(pw) {
      if (ink.active) return;
      const data = lookup(pw);
      if (!data) { hideTip(); return; }
      tip.innerHTML =
        '<div class="present-tip-head">' + data.head + '</div>' +
        '<div class="present-tip-gloss">' + data.gloss + '</div>' +
        (data.parse ? '<div class="present-tip-parse">' + data.parse + '</div>' : '');
      tip.classList.add('visible');
      positionTip(pw);
    }
    function positionTip(pw) {
      const r = pw.getBoundingClientRect();
      const tw = tip.offsetWidth, th = tip.offsetHeight;
      let leftPos = r.left + r.width / 2 - tw / 2;
      leftPos = Math.max(12, Math.min(leftPos, window.innerWidth - tw - 12));
      let top = r.bottom + 10;
      if (top + th > window.innerHeight - 12) top = r.top - th - 10;
      tip.style.left = leftPos + 'px';
      tip.style.top  = top + 'px';
    }
    function hideTip() { tip.classList.remove('visible'); }

    // Touch screens and whiteboards: a tap fires mouseenter then mouseleave
    // straight away, so on touch the vocab stays up until the next tap.
    let touchMode = false;
    function clearMarks() { hideTip(); grid.querySelectorAll('.xref').forEach(el => el.classList.remove('xref')); }
    function hoverIn(fn) { return () => { if (touchMode) clearMarks(); fn(); }; }
    function hoverOut(fn) { return () => { if (!touchMode) fn(); }; }
    overlay.addEventListener('pointerdown', e => {
      touchMode = e.pointerType !== 'mouse';
      if (touchMode && !e.target.closest('.pw, .ew')) clearMarks();
    }, true);

    const ink = setupInk(overlay, hideTip);

    function openPresent() {
      if (!built) build();
      if (typeof window.hidePopover === 'function') window.hidePopover();
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      ink.resize();
    }
    function closePresent() {
      ink.stopDrawing();
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      hideTip();
    }
    function applyBase() { overlay.style.fontSize = base + 'px'; }
    function applyLh() { overlay.style.setProperty('--present-lh', String(lh)); }

    btn.addEventListener('click', openPresent);
    exitBtn.addEventListener('click', closePresent);
    engBtn.addEventListener('click', () => {
      engHidden = !engHidden;
      grid.classList.toggle('no-english', engHidden);
      engBtn.textContent = engHidden ? 'Show English' : 'Hide English';
      engBtn.classList.toggle('active', engHidden);
    });
    // Text size — no upper limit, just keep going; small floor so it can't vanish.
    incBtn.addEventListener('click', () => { base += 2; applyBase(); });
    decBtn.addEventListener('click', () => { base = Math.max(10, base - 2); applyBase(); });
    // Line spacing — same idea: keep increasing, floor at single spacing.
    lhIncBtn.addEventListener('click', () => { lh = Math.round((lh + 0.15) * 100) / 100; applyLh(); });
    lhDecBtn.addEventListener('click', () => { lh = Math.max(1, Math.round((lh - 0.15) * 100) / 100); applyLh(); });

    // Keys while presenting (capture phase so they pre-empt the page's own
    // shortcuts, e.g. Esc = hide-all and the arrow-key stepping).
    // Esc goes back to the vocab tool first, then exits presentation.
    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape' || e.code === 'Escape') {
        e.stopPropagation();
        if (ink.active) ink.stopDrawing(); else closePresent();
        return;
      }
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (ink.handleKey(e)) { e.preventDefault(); e.stopPropagation(); }
    }, true);

    applyBase();
    applyLh();
  }

  // ── Icons for the pen toolbar ──
  const ICON = {
    vocab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3l7 17 2.5-7.5L21 10z"></path></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>',
    hl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>',
    eraser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21-4.3-4.3a1 1 0 0 1 0-1.4l10-10a1 1 0 0 1 1.4 0l5.6 5.6a1 1 0 0 1 0 1.4L11 21"></path><path d="M22 21H7"></path><path d="m5 11 9 9"></path></svg>',
    undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"></path></svg>',
    redo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 14 5-5-5-5"></path><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"></path></svg>',
    clear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path></svg>'
  };

  const COLOURS = [
    { c: '#1c2540', n: 'Black' },
    { c: '#e0352b', n: 'Red' },
    { c: '#1A6FFF', n: 'Blue' },
    { c: '#1f9d55', n: 'Green' },
    { c: '#f28c28', n: 'Orange' },
    { c: '#8e44ad', n: 'Purple' },
    { c: '#ffd400', n: 'Yellow' }
  ];
  // Stroke widths (CSS px) for small / medium / large, per tool.
  const SIZES = { pen: [2.5, 5, 9], hl: [14, 24, 38], eraser: [10, 22, 40] };

  /* ============================================================
     Pen layer: draw over the classroom text.
     Two canvases share the scrolling stage: highlighter strokes go
     under the text (so it stays readable), pen strokes go over it.
     Strokes are kept as points, so they survive resizing and
     leaving / re-entering the classroom view.
     ============================================================ */
  function setupInk(overlay, onStart) {
    const stage = overlay.querySelector('.present-stage');
    const under = overlay.querySelector('.present-ink-under');
    const over  = overlay.querySelector('.present-ink-over');
    const uctx = under.getContext('2d');
    const octx = over.getContext('2d');

    const bar = document.createElement('div');
    bar.className = 'ink-bar';
    bar.setAttribute('role', 'toolbar');
    bar.setAttribute('aria-label', 'Annotation tools');
    bar.innerHTML =
      '<div class="ink-group">' +
        '<button class="ink-btn ink-vocab" type="button" data-tool="vocab" title="Vocab: tap a word for its meaning (V)" aria-label="Vocab">' + ICON.vocab + '<span>Vocab</span></button>' +
      '</div>' +
      '<div class="ink-sep"></div>' +
      '<div class="ink-group">' +
        '<button class="ink-btn" type="button" data-tool="pen" title="Pen (P)" aria-label="Pen">' + ICON.pen + '</button>' +
        '<button class="ink-btn" type="button" data-tool="hl" title="Highlighter (H)" aria-label="Highlighter">' + ICON.hl + '</button>' +
        '<button class="ink-btn" type="button" data-tool="eraser" title="Eraser (E)" aria-label="Eraser">' + ICON.eraser + '</button>' +
      '</div>' +
      '<div class="ink-sep"></div>' +
      '<div class="ink-group ink-swatches">' +
        COLOURS.map((o, i) =>
          '<button class="ink-swatch" type="button" data-colour="' + o.c + '" style="--sw:' + o.c + '" title="' + o.n + ' (' + (i + 1) + ')" aria-label="' + o.n + '"></button>'
        ).join('') +
        '<label class="ink-swatch ink-custom" title="Choose any colour"><input type="color" aria-label="Custom colour" value="#e0352b"></label>' +
      '</div>' +
      '<div class="ink-sep"></div>' +
      '<div class="ink-group">' +
        [0, 1, 2].map(i =>
          '<button class="ink-btn ink-size" type="button" data-size="' + i + '" title="' + ['Thin', 'Medium', 'Thick'][i] + '" aria-label="' + ['Thin', 'Medium', 'Thick'][i] + '"><span style="--d:' + (5 + i * 5) + 'px"></span></button>'
        ).join('') +
      '</div>' +
      '<div class="ink-sep"></div>' +
      '<div class="ink-group">' +
        '<button class="ink-btn" type="button" data-act="undo" title="Undo (Ctrl+Z)" aria-label="Undo">' + ICON.undo + '</button>' +
        '<button class="ink-btn" type="button" data-act="redo" title="Redo (Ctrl+Y)" aria-label="Redo">' + ICON.redo + '</button>' +
        '<button class="ink-btn" type="button" data-act="clear" title="Clear all annotations" aria-label="Clear all">' + ICON.clear + '</button>' +
      '</div>' +
      '<div class="ink-sep"></div>' +
      '<button class="ink-done" type="button" data-act="done" title="Hide the pen tools">Hide</button>';
    overlay.appendChild(bar);

    // Launcher: sits at the bottom of the screen, within reach on a whiteboard.
    const launcher = document.createElement('button');
    launcher.className = 'ink-launch';
    launcher.type = 'button';
    launcher.title = 'Annotate (P)';
    launcher.innerHTML = ICON.pen + '<span>Pen</span>';
    overlay.appendChild(launcher);

    const cursor = document.createElement('div');
    cursor.className = 'ink-cursor';
    overlay.appendChild(cursor);

    const customInput = bar.querySelector('.ink-custom input');

    // Settings: remembered per browser for convenience.
    const state = { tool: 'pen', colour: { pen: '#e0352b', hl: '#ffd400' }, size: { pen: 1, hl: 1, eraser: 1 } };
    try {
      const saved = JSON.parse(localStorage.getItem('classroom-ink') || 'null');
      if (saved && saved.colour && saved.size) {
        state.tool = SIZES[saved.tool] || saved.tool === 'vocab' ? saved.tool : 'pen';
        Object.assign(state.colour, saved.colour);
        Object.assign(state.size, saved.size);
      }
    } catch (e) {}
    function save() { try { localStorage.setItem('classroom-ink', JSON.stringify(state)); } catch (e) {} }

    let strokes = [];          // finished strokes: { tool, colour, size, pts: [[x,y],...] }
    let undoStack = [], redoStack = [];
    let current = null;        // stroke being drawn
    let erasing = null;        // strokes before this erase gesture (for undo)
    let open = false;          // toolbar showing
    let active = false;        // open with a drawing tool: the canvas takes input
    let lastDraw = SIZES[state.tool] ? state.tool : 'pen';
    let dpr = 1, frame = 0;

    function snapshot() { undoStack.push(strokes.slice()); if (undoStack.length > 200) undoStack.shift(); redoStack = []; }
    function undo() { if (!undoStack.length) return; redoStack.push(strokes); strokes = undoStack.pop(); render(); syncBar(); }
    function redo() { if (!redoStack.length) return; undoStack.push(strokes); strokes = redoStack.pop(); render(); syncBar(); }
    function clearAll() { if (!strokes.length) return; snapshot(); strokes = []; render(); syncBar(); }

    // ── Canvas sizing ──
    function resize() {
      if (!overlay.classList.contains('open')) return;
      dpr = window.devicePixelRatio || 1;
      const w = stage.offsetWidth, h = stage.offsetHeight;
      [under, over].forEach(cv => {
        cv.width = Math.max(1, Math.round(w * dpr));
        cv.height = Math.max(1, Math.round(h * dpr));
        cv.style.width = w + 'px';
        cv.style.height = h + 'px';
      });
      render();
    }
    if (window.ResizeObserver) new ResizeObserver(resize).observe(stage);
    window.addEventListener('resize', resize);

    // ── Drawing ──
    function drawStroke(s) {
      const ctx = s.tool === 'hl' ? uctx : octx;
      const p = s.pts;
      ctx.save();
      ctx.globalAlpha = s.tool === 'hl' ? 0.45 : 1;
      ctx.strokeStyle = ctx.fillStyle = s.colour;
      ctx.lineWidth = s.size;
      ctx.lineCap = s.tool === 'hl' ? 'butt' : 'round';
      ctx.lineJoin = 'round';
      if (p.length === 1) {
        ctx.beginPath();
        ctx.arc(p[0][0], p[0][1], s.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Smooth the line through the midpoints of the sampled points.
        ctx.beginPath();
        ctx.moveTo(p[0][0], p[0][1]);
        for (let i = 1; i < p.length - 1; i++) {
          ctx.quadraticCurveTo(p[i][0], p[i][1], (p[i][0] + p[i + 1][0]) / 2, (p[i][1] + p[i + 1][1]) / 2);
        }
        ctx.lineTo(p[p.length - 1][0], p[p.length - 1][1]);
        ctx.stroke();
      }
      ctx.restore();
    }
    function render() {
      frame = 0;
      [uctx, octx].forEach(ctx => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      });
      strokes.forEach(drawStroke);
      if (current) drawStroke(current);
    }
    function queueRender() { if (!frame) frame = requestAnimationFrame(render); }

    function point(e) {
      const r = over.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    }

    // Distance from point p to segment ab.
    function segDist(p, a, b) {
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const len = dx * dx + dy * dy;
      let t = len ? ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / len : 0;
      t = Math.max(0, Math.min(1, t));
      const x = a[0] + t * dx - p[0], y = a[1] + t * dy - p[1];
      return Math.sqrt(x * x + y * y);
    }
    function eraseAt(p) {
      const r = SIZES.eraser[state.size.eraser] / 2;
      const keep = strokes.filter(s => {
        const reach = r + s.size / 2;
        if (s.pts.length === 1) return segDist(p, s.pts[0], s.pts[0]) > reach;
        for (let i = 1; i < s.pts.length; i++) if (segDist(p, s.pts[i - 1], s.pts[i]) <= reach) return false;
        return true;
      });
      if (keep.length !== strokes.length) { strokes = keep; queueRender(); }
    }

    function moveCursor(e) {
      if (state.tool !== 'eraser') return;
      const d = SIZES.eraser[state.size.eraser];
      cursor.style.width = cursor.style.height = d + 'px';
      cursor.style.transform = 'translate(' + (e.clientX - d / 2) + 'px,' + (e.clientY - d / 2) + 'px)';
    }

    over.addEventListener('pointerdown', e => {
      if (!active || (e.pointerType === 'mouse' && e.button !== 0)) return;
      e.preventDefault();
      onStart();
      try { over.setPointerCapture(e.pointerId); } catch (err) {}
      const p = point(e);
      if (state.tool === 'eraser') {
        erasing = strokes.slice();
        eraseAt(p);
      } else {
        current = { tool: state.tool, colour: state.colour[state.tool], size: SIZES[state.tool][state.size[state.tool]], pts: [p] };
        queueRender();
      }
    });
    over.addEventListener('pointermove', e => {
      if (!active) return;
      moveCursor(e);
      if (!current && !erasing) return;
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      (evs.length ? evs : [e]).forEach(ev => {
        const p = point(ev);
        if (erasing) { eraseAt(p); return; }
        const last = current.pts[current.pts.length - 1];
        if (Math.abs(p[0] - last[0]) + Math.abs(p[1] - last[1]) >= 1.5) current.pts.push(p);
      });
      if (current) queueRender();
    });
    function finish() {
      if (current) {
        undoStack.push(strokes.slice()); redoStack = [];
        strokes = strokes.concat([current]);
        current = null;
        render(); syncBar();
      } else if (erasing) {
        if (erasing.length !== strokes.length) { undoStack.push(erasing); redoStack = []; }
        erasing = null;
        syncBar();
      }
    }
    over.addEventListener('pointerup', finish);
    over.addEventListener('pointercancel', finish);
    over.addEventListener('pointerleave', () => { cursor.classList.remove('on'); });
    over.addEventListener('pointerenter', () => { if (active && state.tool === 'eraser') cursor.classList.add('on'); });

    // ── Toolbar ──
    function syncBar() {
      active = open && state.tool !== 'vocab';
      if (SIZES[state.tool]) lastDraw = state.tool;
      overlay.classList.toggle('ink-open', open);
      overlay.classList.toggle('inking', active);
      overlay.dataset.inkTool = state.tool;
      bar.querySelectorAll('[data-tool]').forEach(b => b.classList.toggle('active', b.dataset.tool === state.tool));
      const colour = SIZES[state.tool] && state.tool !== 'eraser' ? state.colour[state.tool] : null;
      let matched = false;
      bar.querySelectorAll('.ink-swatch[data-colour]').forEach(b => {
        const on = !!colour && b.dataset.colour.toLowerCase() === colour.toLowerCase();
        b.classList.toggle('active', on);
        if (on) matched = true;
      });
      const custom = bar.querySelector('.ink-custom');
      custom.classList.toggle('active', !!colour && !matched);
      if (colour) { custom.style.setProperty('--sw', colour); customInput.value = colour; }
      bar.querySelector('.ink-swatches').classList.toggle('disabled', !colour);
      bar.querySelectorAll('.ink-size').forEach(b => {
        b.disabled = state.tool === 'vocab';
        b.classList.toggle('active', +b.dataset.size === state.size[state.tool]);
        b.style.setProperty('--c', colour || '#5e6a85');
      });
      bar.querySelector('[data-act="undo"]').disabled = !undoStack.length;
      bar.querySelector('[data-act="redo"]').disabled = !redoStack.length;
      bar.querySelector('[data-act="clear"]').disabled = !strokes.length;
      if (state.tool !== 'eraser' || !active) cursor.classList.remove('on');
    }
    function setTool(t) {
      if (t === 'vocab') { finish(); cursor.classList.remove('on'); }
      else onStart();
      state.tool = t; open = true; save(); syncBar();
    }
    function setColour(c) {
      // Picking a colour with the eraser or vocab tool out goes back to the pen.
      if (state.tool === 'eraser' || state.tool === 'vocab') state.tool = 'pen';
      state.colour[state.tool] = c; save(); syncBar();
    }
    // Put the pen down but keep the toolbar up (vocab tool).
    function stopDrawing() { if (active) setTool('vocab'); }
    function setOpen(on) {
      if (on) { open = true; setTool(SIZES[state.tool] ? state.tool : lastDraw); return; }
      finish(); cursor.classList.remove('on');
      open = false; syncBar();
    }

    bar.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.tool) setTool(b.dataset.tool);
      else if (b.dataset.colour) setColour(b.dataset.colour);
      else if (b.dataset.size) { state.size[state.tool] = +b.dataset.size; save(); syncBar(); }
      else if (b.dataset.act === 'undo') undo();
      else if (b.dataset.act === 'redo') redo();
      else if (b.dataset.act === 'clear') clearAll();
      else if (b.dataset.act === 'done') setOpen(false);
    });
    customInput.addEventListener('input', () => setColour(customInput.value));
    launcher.addEventListener('click', () => setOpen(true));

    // Keyboard shortcuts while the classroom view is open. Returns true if handled.
    function handleKey(e) {
      const mod = e.ctrlKey || e.metaKey;
      const k = e.key.toLowerCase();
      if (mod && k === 'z') { if (e.shiftKey) redo(); else undo(); return true; }
      if (mod && k === 'y') { redo(); return true; }
      if (mod || e.altKey) return false;
      if (k === 'p') { setTool(active && state.tool === 'pen' ? 'vocab' : 'pen'); return true; }
      if (k === 'h') { setTool('hl'); return true; }
      if (k === 'e') { setTool('eraser'); return true; }
      if (k === 'v' && open) { setTool('vocab'); return true; }
      if (active && /^[1-7]$/.test(k)) { setColour(COLOURS[+k - 1].c); return true; }
      return false;
    }

    syncBar();
    return {
      get active() { return active; },
      stopDrawing: stopDrawing,
      resize: resize,
      handleKey: handleKey
    };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
