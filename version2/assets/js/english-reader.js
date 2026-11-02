// Classicalia — the English text reader.
//
// The page carries the text with its highlights (<span class="hl" data-n>),
// harder words (<span class="vw" data-v>) and a JSON blob (#er-data) with the
// notes and vocabulary. Clicking a highlight explains it in the side column;
// the chips show one category at a time; arrow keys step through the notes.
// Built pages: scripts/build-english.py.
(function () {
  'use strict';
  var root = document.getElementById('er');
  var blob = document.getElementById('er-data');
  if (!root || !blob) return;
  var DATA = JSON.parse(blob.textContent);
  var LABEL = {}; DATA.cats.forEach(function (c) { LABEL[c.key] = c.label; });

  var main = root.querySelector('.er-main');
  var side = root.querySelector('.er-side');
  var sideTitle = root.querySelector('[data-side-title]');
  var sideBody = root.querySelector('[data-side-body]');
  var closeBtn = root.querySelector('[data-close]');
  var allChip = root.querySelector('[data-all]');
  var catChips = Array.prototype.slice.call(root.querySelectorAll('.er-bar .chip[data-cat]'));
  var marks = Array.prototype.slice.call(main.querySelectorAll('.hl, .hl-q'));
  var listItems = Array.prototype.slice.call(document.querySelectorAll('.er-li'));
  var shown = null;     // null = every category
  var pinned = null;    // the element currently explained

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (_) { return null; } }

  // ── the side column ──
  function intro() {
    sideTitle.textContent = 'How to use this page';
    closeBtn.hidden = true;
    var rows = DATA.cats.map(function (c) {
      return '<div class="er-pt"><span class="chip c-' + c.key + '">' + esc(c.label) + '</span><span>' + esc(c.hint) + '</span></div>';
    }).join('');
    sideBody.innerHTML = '<div class="intro"><p>Click any <b>highlighted phrase</b> to see what ' + esc(DATA.author.split(' ').pop()) +
      ' is doing and the effect on the reader. Words with a <span class="vw" style="cursor:default">dotted line</span> have their meaning.</p>' +
      rows + '<p class="tip">Use the chips above the text to show one kind of note at a time. <kbd>&larr;</kbd> <kbd>&rarr;</kbd> step through the notes.</p></div>';
  }

  function visibleMarks() { return marks.filter(function (m) { return !m.classList.contains('mute'); }); }

  function showNote(el) {
    var n = DATA.notes[el.getAttribute('data-n')];
    if (!n) return;
    var cat = n.cat, label = LABEL[cat] || cat;
    var list = visibleMarks(), i = list.indexOf(el);
    sideTitle.textContent = label;
    var chip = '<span class="chip c-' + cat + '">' + esc(label) + (n.device ? ' &middot; ' + esc(n.device) : '') + '</span>';
    var html = '<div class="c-' + cat + '">' + chip;
    if (n.gist) html += '<h3>' + esc(n.gist) + '</h3>';
    if (n.quote) html += '<blockquote>&ldquo;' + esc(n.quote) + '&rdquo;</blockquote>';
    if (n.what) html += '<div class="k">' + (cat === 'reader' ? 'Think about' : n.effect ? 'What is happening' : 'Comment') + '</div><p>' + esc(n.what) + '</p>';
    if (n.effect) html += '<div class="k">Effect on the reader</div><p>' + esc(n.effect) + '</p>';
    if (i > -1) {
      html += '<div class="step"><button class="btn" type="button" data-step="-1"' + (i === 0 ? ' disabled' : '') + '>&larr; Previous</button>' +
        '<span class="of">' + (i + 1) + ' of ' + list.length + '</span>' +
        '<button class="btn" type="button" data-step="1"' + (i === list.length - 1 ? ' disabled' : '') + '>Next &rarr;</button></div>';
    }
    sideBody.innerHTML = html + '</div>';
  }

  function showWord(el) {
    var v = DATA.vocab[el.getAttribute('data-v')];
    if (!v) return;
    sideTitle.textContent = 'Vocabulary';
    var html = '<div class="hw">' + esc(v.word) + '</div><div class="mean">' + esc(v.meaning) + '</div>';
    if (v.note) html += '<div class="k">In this text</div><p>' + esc(v.note) + '</p>';
    if (v.effect) html += '<div class="k">Why it matters</div><p>' + esc(v.effect) + '</p>';
    if (v.img) html += '<img src="' + esc(v.img) + '" alt="' + esc(v.word) + '" loading="lazy">';
    sideBody.innerHTML = html;
  }

  function pin(el, scroll) {
    if (pinned) pinned.classList.remove('pin');
    pinned = el;
    el.classList.add('pin');
    closeBtn.hidden = false;
    if (el.classList.contains('vw')) showWord(el); else showNote(el);
    side.classList.add('open');
    if (scroll) {
      var r = el.getBoundingClientRect();
      if (r.top < 80 || r.bottom > window.innerHeight * (window.innerWidth <= 980 ? 0.35 : 0.9)) {
        el.scrollIntoView({ block: window.innerWidth <= 980 ? 'start' : 'center', behavior: 'smooth' });
      }
    }
  }
  function unpin() {
    if (pinned) pinned.classList.remove('pin');
    pinned = null;
    side.classList.remove('open');
    intro();
  }
  function step(d) {
    var list = visibleMarks();
    if (!list.length) return;
    var i = pinned ? list.indexOf(pinned) : -1;
    var j = i === -1 ? (d > 0 ? 0 : list.length - 1) : i + d;
    if (j < 0 || j >= list.length) return;
    pin(list[j], true);
  }

  main.addEventListener('click', function (e) {
    if (root.classList.contains('plain')) return;
    var w = e.target.closest('.vw');
    var h = e.target.closest('.hl, .hl-q');
    var el = w || h;
    if (!el || el.classList.contains('mute') && !w) return;
    e.stopPropagation();
    if (el === pinned) { unpin(); return; }
    pin(el, window.innerWidth <= 980);   // on phones, lift it clear of the sheet
  });
  main.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.hl, .vw')) { e.preventDefault(); e.target.click(); }
  });
  sideBody.addEventListener('click', function (e) {
    var b = e.target.closest('[data-step]');
    if (b) step(+b.getAttribute('data-step'));
  });
  closeBtn.addEventListener('click', unpin);
  document.addEventListener('keydown', function (e) {
    if (e.target.closest('input, textarea, select, [contenteditable]')) return;
    if (e.key === 'Escape' && pinned) { unpin(); return; }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      if (!pinned && !root.contains(document.activeElement) && !root.classList.contains('present') && !document.fullscreenElement) return;
      e.preventDefault(); step(e.key === 'ArrowRight' ? 1 : -1);
    }
  });

  // ── one category at a time ──
  function filter(cat) {
    shown = cat;
    allChip.classList.toggle('on', !cat);
    catChips.forEach(function (c) { c.classList.toggle('off', !!cat && c.getAttribute('data-cat') !== cat); });
    marks.forEach(function (m) { m.classList.toggle('mute', !!cat && m.getAttribute('data-cat') !== cat); });
    listItems.forEach(function (m) { m.classList.toggle('mute', !!cat && m.getAttribute('data-cat') !== cat); });
    if (pinned && pinned.classList.contains('mute')) unpin();
    else if (pinned && !pinned.classList.contains('vw')) showNote(pinned);
  }
  allChip.addEventListener('click', function () { filter(null); });
  catChips.forEach(function (c) {
    c.addEventListener('click', function () { var k = c.getAttribute('data-cat'); filter(shown === k ? null : k); });
  });

  // ── plain text, text size, classroom ──
  var plainBtn = root.querySelector('[data-plain]');
  plainBtn.addEventListener('click', function () {
    var on = !root.classList.contains('plain');
    root.classList.toggle('plain', on);
    plainBtn.setAttribute('aria-pressed', String(on));
    if (on) unpin();
  });
  var SIZES = [15, 16.5, 18, 19.5, 21, 23, 25];
  var size = +(store('classicalia.english.size') || -1);
  function applySize() { if (size >= 0) main.style.setProperty('--fs', SIZES[size] + 'px'); else main.style.removeProperty('--fs'); }
  applySize();
  root.querySelectorAll('[data-size]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (size < 0) size = 2;
      size = Math.max(0, Math.min(SIZES.length - 1, size + +b.getAttribute('data-size')));
      store('classicalia.english.size', String(size));
      applySize();
    });
  });
  var presentBtn = root.querySelector('[data-present]');
  presentBtn.addEventListener('click', function () {
    if (document.fullscreenElement) { document.exitFullscreen(); return; }
    if (root.classList.contains('present')) { root.classList.remove('present'); presentBtn.textContent = 'Classroom'; return; }
    if (root.requestFullscreen) {
      main.style.removeProperty('--fs');
      root.requestFullscreen().catch(function () { root.classList.add('present'); presentBtn.textContent = 'Exit classroom'; });
    } else { root.classList.add('present'); presentBtn.textContent = 'Exit classroom'; }
  });
  document.addEventListener('fullscreenchange', function () {
    var on = document.fullscreenElement === root;
    presentBtn.textContent = on ? 'Exit classroom' : 'Classroom';
    if (!on) applySize();
  });

  // ── the overall analysis tabs ──
  document.querySelectorAll('.er-tabs').forEach(function (bar) {
    var box = bar.parentNode;
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ov]');
      if (!b) return;
      bar.querySelectorAll('[data-ov]').forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', String(x === b)); });
      box.querySelectorAll('[data-pane]').forEach(function (p) { p.hidden = p.getAttribute('data-pane') !== b.getAttribute('data-ov'); });
    });
  });

  // ── the list of every annotation jumps to its phrase ──
  listItems.forEach(function (li) {
    li.addEventListener('click', function () {
      var el = main.querySelector('[data-n="' + li.getAttribute('data-n') + '"]');
      if (!el) return;
      if (root.classList.contains('plain')) plainBtn.click();
      pin(el, false);
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  });

  intro();
})();
