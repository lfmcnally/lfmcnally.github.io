/* ============================================================
   Classicalia — Verse literature (line-level) set-text pages
   Pair with /version2/assets/css/verse-lit.css

   Expects, in the page:
     #latinCol   .line-row > .line-num + .words-wrap > .wg > .lat-w
     #englishCol .line-row > .line-num + .words-wrap > .eng-w
     #stylePopover  and  a global `noteData` keyed by feature id
   Reveal is line by line: click a Latin line (or step with the
   arrow keys) to show its translation; every note the teacher
   wrote for that line sits under it, and notes that quote
   particular words underline those words.
   ============================================================ */
(function () {
  function init() {
    const latinCol = document.getElementById('latinCol');
    const engCol   = document.getElementById('englishCol');
    if (!latinCol || !engCol) return;

    const ND = (typeof noteData !== 'undefined' && noteData) ? noteData : {};
    const latRows = Array.from(latinCol.querySelectorAll('.line-row'));
    const engByNum = {};
    engCol.querySelectorAll('.line-row').forEach(r => {
      engByNum[r.dataset.line] = r;
    });

    let cursor = -1;   // index of the last revealed line

    /* ── keep the two columns line-for-line level ──
       Note strips live in the Latin column and push it down, so after any
       change we level each pair of rows to whichever side is taller. */
    function syncHeights() {
      latRows.forEach(row => {
        const eng = engByNum[row.dataset.line];
        if (!eng) return;
        row.style.minHeight = ''; eng.style.minHeight = '';
      });
      requestAnimationFrame(() => {
        latRows.forEach(row => {
          const eng = engByNum[row.dataset.line];
          if (!eng) return;
          const notes = row.nextElementSibling;
          let h = row.offsetHeight;
          if (notes && notes.classList.contains('line-notes') && notes.classList.contains('open')) {
            h += notes.offsetHeight + 10;
          }
          const eh = eng.offsetHeight;
          const target = Math.max(h, eh);
          if (eh < target) eng.style.minHeight = target + 'px';
          if (h < target) row.style.minHeight = (row.offsetHeight + (target - h)) + 'px';
        });
      });
    }
    window.addEventListener('resize', syncHeights);

    /* ── reveal ── */
    function reveal(i, on) {
      const row = latRows[i];
      if (!row) return;
      const eng = engByNum[row.dataset.line];
      if (eng) eng.querySelectorAll('.eng-w').forEach(w => w.classList.toggle('revealed', on));
      row.classList.toggle('revealed', on);
    }
    function setCurrent(i) {
      latRows.forEach(r => r.classList.remove('current'));
      const row = latRows[i];
      if (!row) return;
      row.classList.add('current');
      const eng = engByNum[row.dataset.line];
      if (eng) {
        eng.classList.add('current');
        engCol.querySelectorAll('.line-row').forEach(r => { if (r !== eng) r.classList.remove('current'); });
      }
    }
    function step(dir) {
      if (dir > 0) {
        if (cursor >= latRows.length - 1) return;
        cursor++; reveal(cursor, true); setCurrent(cursor);
      } else {
        if (cursor < 0) return;
        reveal(cursor, false);
        cursor--; setCurrent(cursor);
      }
      const row = latRows[Math.max(cursor, 0)];
      if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    function showAll() {
      latRows.forEach((r, i) => reveal(i, true));
      cursor = latRows.length - 1;
      setCurrent(cursor);
    }
    function hideAll() {
      latRows.forEach((r, i) => reveal(i, false));
      cursor = -1;
      latRows.forEach(r => r.classList.remove('current'));
      engCol.querySelectorAll('.line-row').forEach(r => r.classList.remove('current'));
      hidePopover();
    }

    latRows.forEach((row, i) => {
      row.addEventListener('click', e => {
        if (e.target.closest('.wg[data-sf]')) return;   // word notes handle their own clicks
        const noteBox = row.nextElementSibling;
        if (e.target.closest('.note-dot') && noteBox && noteBox.classList.contains('line-notes')) {
          noteBox.classList.toggle('open');
          syncHeights();
          return;
        }
        const wasOn = row.classList.contains('revealed');
        reveal(i, !wasOn);
        cursor = wasOn ? i - 1 : i;
        setCurrent(i);
      });
    });

    /* ── notes: popover on quoted words ── */
    const pop   = document.getElementById('stylePopover');
    const pQuote = document.getElementById('spQuote');
    const pBadge = document.getElementById('spBadge');
    const pBody  = document.getElementById('spBody');
    const pLine  = document.getElementById('spLine');
    let activeWg = null;

    function hidePopover() {
      if (!pop) return;
      pop.classList.remove('visible');
      document.querySelectorAll('.wg.sf-active').forEach(w => w.classList.remove('sf-active'));
      activeWg = null;
    }
    window.hidePopover = hidePopover;

    function showPopover(wg) {
      const sf = wg.dataset.sf;
      const d = ND[sf];
      if (!pop || !d) return;
      hidePopover();
      document.querySelectorAll('.wg[data-sf="' + sf + '"]').forEach(w => w.classList.add('sf-active'));
      pQuote.textContent = d.quote || '';
      pBadge.textContent = d.badge || 'Note';
      pBadge.className = 'sp-badge cat-' + (d.cat || 'note');
      pBody.innerHTML = d.body || '';
      pBody.style.display = d.body ? '' : 'none';
      const rule = pop.querySelector('.sp-rule');
      if (rule) rule.style.display = d.body ? '' : 'none';
      pLine.textContent = d.line ? 'Line ' + d.line : '';
      pop.classList.add('visible');
      const r = wg.getBoundingClientRect();
      const pw = pop.offsetWidth, ph = pop.offsetHeight;
      let left = r.left + r.width / 2 - pw / 2;
      left = Math.max(12, Math.min(left, window.innerWidth - pw - 12));
      let top = r.bottom + 10;
      if (top + ph > window.innerHeight - 12) top = Math.max(12, r.top - ph - 10);
      pop.style.left = left + 'px';
      pop.style.top = top + 'px';
      activeWg = wg;
    }

    latinCol.querySelectorAll('.wg[data-sf]').forEach(wg => {
      wg.addEventListener('click', e => {
        e.stopPropagation();
        if (activeWg === wg) { hidePopover(); return; }
        showPopover(wg);
      });
    });
    document.addEventListener('click', e => {
      if (pop && !pop.contains(e.target) && !e.target.closest('.wg[data-sf]')) hidePopover();
    });
    window.addEventListener('scroll', hidePopover, true);

    /* ── controls ── */
    const on = (id, fn) => { const b = document.getElementById(id); if (b) b.addEventListener('click', fn); };
    on('showAllBtn', showAll);
    on('hideAllBtn', hideAll);

    const styleBtn = document.getElementById('styleBtn');
    if (styleBtn) {
      styleBtn.addEventListener('click', () => {
        const nowOn = !document.body.classList.contains('style-on');
        document.body.classList.toggle('style-on', nowOn);
        styleBtn.classList.toggle('active', nowOn);
        styleBtn.textContent = nowOn ? 'Style notes on' : 'Style notes off';
        if (!nowOn) hidePopover();
      });
    }
    const notesBtn = document.getElementById('notesBtn');
    if (notesBtn) {
      notesBtn.addEventListener('click', () => {
        const anyClosed = Array.from(document.querySelectorAll('.line-notes')).some(n => !n.classList.contains('open'));
        document.querySelectorAll('.line-notes').forEach(n => n.classList.toggle('open', anyClosed));
        notesBtn.classList.toggle('active', anyClosed);
        notesBtn.textContent = anyClosed ? 'Close all notes' : 'Open all notes';
        syncHeights();
      });
    }

    /* category filter pills */
    document.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        pill.classList.toggle('off');
        const cat = pill.dataset.cat;
        const hide = pill.classList.contains('off');
        document.querySelectorAll('.wg.sf-' + cat).forEach(w => w.classList.toggle('cat-hidden', hide));
        document.querySelectorAll('.note-item[data-cat="' + cat + '"]').forEach(n => {
          n.style.display = hide ? 'none' : '';
        });
        syncHeights();
      });
    });

    /* keyboard */
    document.addEventListener('keydown', e => {
      if (e.target.matches('input, textarea')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      else if (e.key === 'Escape') hidePopover();
    });

    document.body.classList.add('style-on');
    syncHeights();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
