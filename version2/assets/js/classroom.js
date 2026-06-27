/* ============================================================
   Classicalia — Classroom (presentation) mode
   Shared across the GCSE set-text section pages.

   Pair with classroom.css. Include on any page that has the
   #latinCol / #englishCol parallel columns and a `vocabData` map:
     <link rel="stylesheet" href="/version2/assets/css/classroom.css">
     <script src="/version2/assets/js/classroom.js"></script>

   This script injects its own Classroom button (into .controls-left)
   and the full-screen overlay, then builds a clean parallel text from
   the page's existing Latin/English columns. No other markup needed.
   ============================================================ */
(function () {
  function init() {
    const latinCol   = document.getElementById('latinCol');
    const englishCol = document.getElementById('englishCol');
    const left       = document.querySelector('.controls-left');
    if (!latinCol || !englishCol || !left) return;      // not a set-text page
    if (document.getElementById('presentBtn')) return;  // already initialised

    // Vocab data lives in the page's inline script (shared global lexical scope).
    let VD = {};
    try { if (typeof vocabData !== 'undefined' && vocabData) VD = vocabData; } catch (e) {}

    // ── Inject the entry button into the controls bar ──
    const mkDiv = () => { const d = document.createElement('div'); d.className = 'ctrl-div'; return d; };
    const btn = document.createElement('button');
    btn.className = 'ctrl-btn ctrl-present';
    btn.id = 'presentBtn';
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"></rect><path d="M12 16v4M8 20h8"></path></svg>Classroom';
    const hint = left.querySelector('.key-hint');
    left.insertBefore(mkDiv(), hint);   // insertBefore(node, null) appends
    left.insertBefore(btn, hint);
    if (hint) {
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
          '<button class="present-ctrl" id="presentEngBtn">Hide English</button>' +
          '<div class="present-adjust"><span class="present-adjust-label">Size</span>' +
            '<div class="present-fontsize">' +
              '<button class="present-ctrl" id="presentDecBtn" aria-label="Smaller text">A&minus;</button>' +
              '<button class="present-ctrl" id="presentIncBtn" aria-label="Larger text">A+</button>' +
            '</div></div>' +
          '<div class="present-adjust"><span class="present-adjust-label">Spacing</span>' +
            '<div class="present-fontsize">' +
              '<button class="present-ctrl" id="presentLhDecBtn" aria-label="Less line spacing">&minus;</button>' +
              '<button class="present-ctrl" id="presentLhIncBtn" aria-label="More line spacing">+</button>' +
            '</div></div>' +
          '<button class="present-ctrl present-ctrl-exit" id="presentExitBtn">Exit &times;</button>' +
        '</div>' +
      '</div>' +
      '<div class="present-scroll"><div class="present-grid" id="presentGrid"></div></div>' +
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

    // Build the clean parallel text from the existing Latin / English columns.
    // Verse (e.g. Ovid's Baucis) keeps its line-by-line rows; prose (marked with
    // data-flow="prose" on #latinCol) flows as continuous parallel paragraphs.
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
      if (latinCol.dataset.flow === 'prose') buildFlow(); else buildRows();
      built = true;
    }

    // ── Verse: aligned line-by-line rows ──
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
        pw.addEventListener('mouseenter', () => showTip(pw));
        pw.addEventListener('mouseleave', hideTip);
      });
    }

    // ── Prose: continuous parallel paragraphs (Latin left, English right) ──
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
        pw.addEventListener('mouseenter', () => { showTip(pw); mark('.ew', pw.dataset.order, true); });
        pw.addEventListener('mouseleave', () => { hideTip(); mark('.ew', pw.dataset.order, false); });
      });
      grid.querySelectorAll('.ew').forEach(ew => {
        ew.addEventListener('mouseenter', () => mark('.pw', ew.dataset.order, true));
        ew.addEventListener('mouseleave', () => mark('.pw', ew.dataset.order, false));
      });
    }

    // Cross-highlight the paired word(s) in the other column.
    function mark(sel, order, on) {
      if (!order) return;
      grid.querySelectorAll(sel).forEach(el => {
        const o = el.dataset.order || '';
        if (o === order || o.split(',').indexOf(order) !== -1) el.classList.toggle('xref', on);
      });
    }

    function showTip(pw) {
      const data = VD[pw.dataset.order];
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

    function openPresent() {
      if (!built) build();
      if (typeof window.hidePopover === 'function') window.hidePopover();
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closePresent() {
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

    // Escape exits presentation (capture phase so it pre-empts the page's Esc = hide-all).
    document.addEventListener('keydown', e => {
      if (overlay.classList.contains('open') && (e.key === 'Escape' || e.code === 'Escape')) {
        e.stopPropagation();
        closePresent();
      }
    }, true);

    applyBase();
    applyLh();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
