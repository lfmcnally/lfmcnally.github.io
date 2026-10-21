// Classicalia — the set-text reader.
//
// The page is rendered by scripts/build-settext.py from data/section-N.json;
// this script adds the behaviour: reveal the English a sentence at a time,
// vocabulary and parsing on hover, style notes with their keys and popovers,
// grammar colours, Latin–English links, and the classroom view.
(function () {
  'use strict';
  var root = document.getElementById('st');
  if (!root) return;
  var data = {};
  try { data = JSON.parse(document.getElementById('st-data').textContent); } catch (e) {}
  var notes = {};
  (data.notes || []).forEach(function (n) { notes[n.id] = n; });
  var CATS = { order: 'Word order', structure: 'Repetition and structure', sound: 'Sound and metre', diction: 'Word choice', imagery: 'Imagery and tone', grammar: 'Grammar', note: 'Note' };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // ── English: reveal by sentence, all, or none ──
  var enMode = store.get('classicalia.settext.en') || root.dataset.defaultEn || 'reveal';
  function applyEn() {
    root.querySelectorAll('[data-en]').forEach(function (b) { b.classList.toggle('on', b.dataset.en === enMode); });
    root.querySelectorAll('.st-unit').forEach(function (u) { u.classList.toggle('on', enMode === 'all'); });
  }
  root.querySelectorAll('[data-en]').forEach(function (b) {
    b.addEventListener('click', function () { enMode = b.dataset.en; store.set('classicalia.settext.en', enMode); applyEn(); });
  });
  applyEn();
  root.querySelectorAll('.st-unit').forEach(function (u) {
    u.addEventListener('click', function (e) {
      if (e.target.closest('.w[data-note]') && root.classList.contains('style-on')) return;
      if (e.target.closest('.e, .w[data-id]') && root.querySelector('.st-en-block .e')) { link(e.target); return; }
      root.querySelectorAll('.st-unit.cur').forEach(function (x) { x.classList.remove('cur'); });
      u.classList.add('cur');
      u.classList.toggle('on');
    });
  });

  // ── toggles ──
  function toggle(name, cls, key) {
    var b = root.querySelector('[data-' + name + ']');
    if (!b) return;
    var saved = store.get('classicalia.settext.' + name);
    if (saved === '1') root.classList.add(cls); else if (saved === '0') root.classList.remove(cls);
    b.classList.toggle('on', root.classList.contains(cls));
    var keys = key ? root.querySelector(key) : null;
    if (keys) keys.hidden = !root.classList.contains(cls);
    b.addEventListener('click', function () {
      root.classList.toggle(cls);
      var on = root.classList.contains(cls);
      b.classList.toggle('on', on);
      store.set('classicalia.settext.' + name, on ? '1' : '0');
      if (keys) keys.hidden = !on;
      if (!on) hidePop();
    });
  }
  toggle('vocab', 'vocab-on');
  toggle('style', 'style-on', '.st-keys');
  toggle('gram', 'gram-on', '.st-gkeys');

  // ── style keys: a filter, one category or all ──
  var keys = root.querySelector('.st-keys');
  var activeCat = null;
  function applyKeys() {
    if (!keys) return;
    keys.querySelectorAll('[data-cat]').forEach(function (k) { k.classList.toggle('off', !!activeCat && k.dataset.cat !== activeCat); });
    var all = keys.querySelector('[data-all]'); if (all) all.classList.toggle('on', !activeCat);
    root.querySelectorAll('.st-la .w[data-note]').forEach(function (w) { w.classList.toggle('dim', !!activeCat && !w.classList.contains('c-' + activeCat)); });
    document.querySelectorAll('.st-note[data-cat]').forEach(function (n) { n.classList.toggle('hid', !!activeCat && n.dataset.cat !== activeCat); });
  }
  if (keys) {
    keys.querySelectorAll('[data-cat]').forEach(function (k) { k.addEventListener('click', function () { activeCat = activeCat === k.dataset.cat ? null : k.dataset.cat; applyKeys(); }); });
    var all = keys.querySelector('[data-all]'); if (all) all.addEventListener('click', function () { activeCat = null; applyKeys(); });
    applyKeys();
  }

  // ── vocabulary tooltip ──
  var tip = document.createElement('div'); tip.className = 'st-tip'; document.body.appendChild(tip);
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function showTip(e, w) {
    tip.innerHTML = '<b>' + esc(w.dataset.v) + '</b>' + esc(w.dataset.m || '') + (w.dataset.p ? '<i>' + esc(w.dataset.p) + '</i>' : '') + (w.dataset.x ? '<span class="x">' + esc(w.dataset.x) + '</span>' : '');
    tip.classList.add('on'); moveTip(e);
  }
  function moveTip(e) {
    var x = Math.min(e.clientX + 14, window.innerWidth - 356), y = e.clientY + 18;
    if (y + tip.offsetHeight > window.innerHeight - 10) y = e.clientY - tip.offsetHeight - 12;
    tip.style.left = Math.max(8, x) + 'px'; tip.style.top = y + 'px';
  }
  function hideTip() { tip.classList.remove('on'); }
  root.addEventListener('mousemove', function (e) {
    var w = e.target.closest('.st-la .w[data-v]');
    if (!w || !root.classList.contains('vocab-on')) { hideTip(); return; }
    showTip(e, w);
  });
  root.addEventListener('mouseleave', hideTip);
  // tap on a phone: a tap on a word shows its card, a second tap reveals the line
  var lastTap = null;
  root.addEventListener('touchstart', function (e) {
    var w = e.target.closest('.st-la .w[data-v]');
    if (!w || !root.classList.contains('vocab-on')) { hideTip(); lastTap = null; return; }
    if (lastTap === w) { hideTip(); lastTap = null; return; }
    lastTap = w; e.preventDefault(); e.stopPropagation();
    var t = e.touches[0]; showTip({ clientX: t.clientX, clientY: t.clientY }, w);
  }, { passive: false });

  // ── style note popover ──
  var pop = document.createElement('div'); pop.className = 'st-pop'; document.body.appendChild(pop);
  function hidePop() { pop.classList.remove('on'); }
  function noteHtml(n, first) {
    return '<div' + (first ? '' : ' class="more"') + '><span class="q">' + esc(n.quote) + '</span><span class="chip c-' + n.cat + '">' + esc(n.label) + '</span>' +
      (n.trans ? '<div class="t">' + esc(n.trans) + '</div>' : '') + (n.body ? '<p>' + n.body + '</p>' : '') + (n.exam ? '<div class="exam">' + n.exam + '</div>' : '') +
      '<small>' + (n.line ? 'line ' + esc(n.line) + ' · ' : '') + esc(CATS[n.cat] || n.cat) + '</small></div>';
  }
  root.addEventListener('click', function (e) {
    var w = e.target.closest('.st-la .w[data-note]');
    if (!w || !root.classList.contains('style-on')) return;
    e.stopPropagation();
    var ids = w.dataset.note.split(',').filter(function (id) { return notes[id]; });
    if (!ids.length) return;
    pop.innerHTML = ids.map(function (id, i) { return noteHtml(notes[id], i === 0); }).join('');
    var r = w.getBoundingClientRect();
    pop.style.left = Math.max(8, Math.min(r.left + window.scrollX, window.scrollX + window.innerWidth - 356)) + 'px';
    pop.style.top = (r.bottom + window.scrollY + 8) + 'px';
    pop.classList.add('on');
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.st-pop')) hidePop(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { hidePop(); hideTip(); closePresent(); } });

  // ── Latin ↔ English links ──
  function link(target) {
    var el = target.closest('[data-id]');
    var unit = target.closest('.st-unit');
    root.querySelectorAll('.lit').forEach(function (x) { x.classList.remove('lit'); });
    if (!el || !unit) return;
    var ids = el.dataset.id.split(',');
    unit.querySelectorAll('[data-id]').forEach(function (x) {
      var mine = x.dataset.id.split(',');
      if (mine.some(function (i) { return ids.indexOf(i) >= 0; })) x.classList.add('lit');
    });
  }

  // ── classroom view ──
  var present = null;
  function openPresent() {
    if (!present) {
      present = document.createElement('div'); present.className = 'st-present';
      present.innerHTML = '<div class="pbar"><span class="t">' + esc(root.dataset.title || '') + '</span>' +
        '<button class="btn" data-p="en">Hide English</button><button class="btn" data-p="dec">A−</button><button class="btn" data-p="inc">A+</button><button class="btn navy" data-p="exit">Exit</button></div>' +
        '<div class="pbody"><div class="st-units"></div></div>';
      document.body.appendChild(present);
      var size = 28;
      present.querySelector('[data-p="exit"]').onclick = closePresent;
      present.querySelector('[data-p="inc"]').onclick = function () { size += 3; present.style.setProperty('--p-size', size + 'px'); };
      present.querySelector('[data-p="dec"]').onclick = function () { size = Math.max(16, size - 3); present.style.setProperty('--p-size', size + 'px'); };
      present.querySelector('[data-p="en"]').onclick = function () { present.classList.toggle('hide-en'); this.textContent = present.classList.contains('hide-en') ? 'Show English' : 'Hide English'; };
    }
    var units = present.querySelector('.st-units');
    units.innerHTML = root.querySelector('.st-units').innerHTML;
    units.querySelectorAll('.st-unit').forEach(function (u) { u.classList.remove('cur'); u.classList.toggle('on', enMode === 'all'); u.addEventListener('click', function () { u.classList.toggle('on'); }); });
    present.classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function closePresent() { if (present) { present.classList.remove('on'); document.body.style.overflow = ''; } }
  var pb = root.querySelector('[data-present]');
  if (pb) pb.addEventListener('click', openPresent);

  // keyboard: arrows step through the units
  document.addEventListener('keydown', function (e) {
    if (e.target.matches('input, textarea')) return;
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var scope = present && present.classList.contains('on') ? present : root;
    var units = Array.prototype.slice.call(scope.querySelectorAll('.st-unit'));
    var cur = units.findIndex(function (u) { return u.classList.contains('cur'); });
    var next = e.key === 'ArrowRight' ? Math.min(units.length - 1, cur + 1) : Math.max(0, cur - 1);
    if (cur < 0) next = 0;
    units.forEach(function (u, i) { u.classList.toggle('cur', i === next); if (i === next) u.classList.add('on'); });
    units[next].scrollIntoView({ block: 'center', behavior: 'smooth' });
    e.preventDefault();
  });
})();
