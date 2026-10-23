// Classicalia — the set-text reader.
//
// The page is rendered by scripts/build-settext.py from data/section-N.json;
// this script adds the behaviour: reveal the English a sentence at a time,
// a side column showing the word under the pointer (its vocabulary and
// parsing, or its style note, by the clicker that is on), style keys as a
// filter, grammar colours, links between the text and the English, and the
// classroom view. Latin and Greek texts alike.
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

  // ── grammar colours ──
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
    });
  }
  toggle('gram', 'gram-on', '.st-gkeys');

  // ── style keys: a filter, one category or all ──
  var keys = root.querySelector('.st-keys');
  var activeCat = null;
  function applyKeys() {
    if (!keys) return;
    keys.querySelectorAll('[data-cat]').forEach(function (k) { k.classList.toggle('off', !!activeCat && k.dataset.cat !== activeCat); });
    var all = keys.querySelector('[data-all]'); if (all) all.classList.toggle('on', !activeCat);
    root.querySelectorAll('.st-la .w[data-note]').forEach(function (w) { w.classList.toggle('dim', !!activeCat && !w.classList.contains('c-' + activeCat)); });
    root.querySelectorAll('.st-u').forEach(function (b) { b.classList.toggle('hid', !!activeCat && !b.classList.contains('c-' + activeCat)); });
    document.querySelectorAll('.st-note[data-cat]').forEach(function (n) { n.classList.toggle('hid', !!activeCat && n.dataset.cat !== activeCat); });
  }
  if (keys) {
    keys.querySelectorAll('[data-cat]').forEach(function (k) { k.addEventListener('click', function () { activeCat = activeCat === k.dataset.cat ? null : k.dataset.cat; applyKeys(); }); });
    var all = keys.querySelector('[data-all]'); if (all) all.addEventListener('click', function () { activeCat = null; applyKeys(); });
    applyKeys();
  }

  // ── the clickers: what a click on a word opens in the side column ──
  var clickers = (root.dataset.clickers || '').split(' ').filter(Boolean);
  var side = root.querySelector('.st-side'), sideTitle = root.querySelector('[data-side-title]'), sideBody = root.querySelector('[data-side-body]'), unpinBtn = root.querySelector('[data-unpin]'), hint = root.querySelector('[data-hint]');
  var clicker = store.get('classicalia.settext.clicker');
  if (clickers.indexOf(clicker) < 0) clicker = clickers[0] || '';
  var pinned = null, shown = null;
  var HINTS = { vocab: 'click a sentence for its English · click a word to keep it in the side column', style: 'click a sentence for its English · click an underlined word for its note', '': 'click a sentence for its English' };
  var EMPTY = { vocab: 'Hover a word in the ' + (root.dataset.lang || 'Latin') + ' to see its vocabulary and parsing. Click a word to keep it here.', style: 'Hover an underlined word for its style note. Click to keep it here. The keys above filter by category.' };
  function selectorFor(mode) { return mode === 'vocab' ? '.st-la .w[data-v]' : mode === 'style' ? '.st-la .w[data-note]' : null; }
  function setClicker(mode) {
    clicker = clickers.indexOf(mode) >= 0 ? mode : '';
    store.set('classicalia.settext.clicker', clicker);
    root.classList.toggle('vocab-on', clicker === 'vocab');
    root.classList.toggle('style-on', clicker === 'style');
    root.classList.toggle('side-on', !!clicker);
    root.querySelectorAll('[data-clicker]').forEach(function (b) { b.classList.toggle('on', b.dataset.clicker === clicker); });
    if (keys) keys.hidden = clicker !== 'style';
    if (side) side.hidden = !clicker;
    if (sideTitle) sideTitle.textContent = clicker === 'style' ? 'Style note' : 'Word';
    if (hint) hint.textContent = HINTS[clicker];
    unpin(); shown = null;
    if (sideBody) sideBody.innerHTML = '<div class="empty">' + esc(EMPTY[clicker] || '') + '</div>';
    layoutBars();
  }
  root.querySelectorAll('[data-clicker]').forEach(function (b) {
    b.addEventListener('click', function () { setClicker(b.dataset.clicker === clicker ? '' : b.dataset.clicker); });
  });
  function unpin() { if (pinned) pinned.classList.remove('pin'); pinned = null; if (unpinBtn) unpinBtn.hidden = true; }
  function pin(w) { unpin(); pinned = w; w.classList.add('pin'); if (unpinBtn) unpinBtn.hidden = false; show(w); }
  if (unpinBtn) unpinBtn.addEventListener('click', unpin);
  function show(w) {
    if (!sideBody || !w) return;
    shown = w;
    sideBody.innerHTML = clicker === 'style' ? styleHtml(w) : vocabHtml(w);
  }
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  root.addEventListener('mouseover', function (e) {
    if (!canHover || pinned || !clicker) return;
    var w = e.target.closest(selectorFor(clicker)) || (clicker === 'style' ? e.target.closest('.st-u') : null);
    if (w && w !== shown) show(w);
  });
  // a bar under a phrase: hover shows its note, click keeps it
  root.addEventListener('click', function (e) {
    var b = e.target.closest('.st-u');
    if (!b) return;
    e.stopPropagation();
    if (pinned === b) unpin(); else pin(b);
  });
  // a click on a word the clicker handles pins it; anywhere else in a unit reveals the English
  root.querySelectorAll('.st-unit').forEach(function (u) {
    u.addEventListener('click', function (e) {
      var linkable = e.target.closest('.e, .w[data-id]') && root.querySelector('.st-en-block .e');
      var w = clicker ? e.target.closest(selectorFor(clicker)) : null;
      if (w) {
        // a second click on the word lets it go, highlight and all
        if (pinned === w) { unpin(); unlink(); }
        else { pin(w); if (linkable) link(e.target); }
        return;
      }
      if (linkable) { if (e.target.closest('[data-id]').classList.contains('lit')) unlink(); else link(e.target); return; }
      root.querySelectorAll('.st-unit.cur').forEach(function (x) { x.classList.remove('cur'); });
      u.classList.add('cur');
      u.classList.toggle('on');
    });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { unpin(); unlink(); closePresent(); } });

  // ── what the side column shows ──
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  // keep italics from the data, drop any other markup
  function rich(s) { return esc(s).replace(/&lt;(\/?)(?:em|i)&gt;/g, '<$1em>'); }
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  var POS = ['noun', 'verb', 'adjective', 'participle', 'conjunction', 'adverb', 'preposition', 'pronoun', 'gerundive', 'gerund', 'interjection', 'numeral', 'infinitive', 'article', 'particle'];
  var GROUPS = [['Case', ['nominative', 'vocative', 'accusative', 'genitive', 'dative', 'ablative', 'locative']], ['Number', ['singular', 'plural']], ['Gender', ['masculine', 'feminine', 'neuter']],
    ['Person', ['1st person', '2nd person', '3rd person']], ['Tense', ['present', 'imperfect', 'future perfect', 'future', 'aorist', 'perfect', 'pluperfect']], ['Voice', ['active', 'middle', 'passive', 'deponent']],
    ['Mood', ['indicative', 'subjunctive', 'optative', 'imperative', 'infinitive']], ['Degree', ['comparative', 'superlative']]];
  // the parsing string → part of speech, one value per grammatical category, and the comment that is left
  function parse(p) {
    p = String(p || '').replace(/<[^>]+>/g, '');
    var pos = null, parts = p.split(' · ');
    if (parts.length > 1 && POS.indexOf(parts[0].trim().toLowerCase()) >= 0) { pos = parts[0].trim().toLowerCase(); p = parts.slice(1).join(' · '); }
    else { for (var i = 0; i < POS.length; i++) { if (new RegExp('\\b' + POS[i] + '\\b', 'i').test(p)) { pos = POS[i]; break; } } }
    var rows = [], rest = p;
    GROUPS.forEach(function (g) { for (var i = 0; i < g[1].length; i++) { var re = new RegExp('\\b' + g[1][i] + '\\b', 'i'); if (re.test(rest)) { rows.push([g[0], g[1][i]]); rest = rest.replace(re, ''); break; } } });
    if (pos) rest = rest.replace(new RegExp('\\b' + pos + '\\b', 'i'), '');
    rest = rest.replace(/\s+/g, ' ').replace(/\(\s*\)/g, '').replace(/^[\s,;:—–-]+|[\s,;:—–-]+$/g, '').replace(/^\((.*)\)$/, '$1').replace(/\s+,/g, ',').replace(/^[\s,;:—–-]+/, '').trim();
    if (!rows.length && !pos) rest = p.trim();
    return { pos: pos, rows: rows, rest: cap(rest) };
  }
  var ARTICLE = { adjective: 'an', adverb: 'an', interjection: 'an', infinitive: 'an', article: 'an' };
  function vocabHtml(w) {
    var d = w.dataset, pr = parse(d.p), form = (w.textContent || '').replace(/^[\s'"‘“(]+|[\s.,;:!?'"’”)\u035c—–-]+$/g, '');
    var has = {}; pr.rows.forEach(function (r) { has[r[0]] = r[1]; });
    if (!pr.pos && (has.Person || has.Tense || has.Mood)) pr.pos = 'verb';
    var h = '<div class="entry"><div class="hw">' + esc(d.v) + '</div>' + (pr.pos ? '<div class="pos">' + esc(pr.pos) + '</div>' : '') + (d.m ? '<div class="mean">' + esc(d.m) + '</div>' : '');
    // one sentence on the form in this line, in the order a parsing is said aloud
    var order = pr.pos === 'verb' ? ['Person', 'Number', 'Tense', 'Voice', 'Mood'] : pr.pos === 'participle' ? ['Tense', 'Voice', 'Case', 'Number', 'Gender'] : ['Case', 'Number', 'Gender', 'Degree'];
    var bits = order.filter(function (k) { return has[k]; }).map(function (k) { return has[k]; });
    pr.rows.forEach(function (r) { if (order.indexOf(r[0]) < 0) bits.push(r[1]); });
    var agree = null, rest = pr.rest;
    if (rest) { var m = rest.match(/agree(?:s|ing) with (.+?)\.?$/i); if (m) { agree = m[1]; if ((agree.match(/\)/g) || []).length > (agree.match(/\(/g) || []).length) agree = agree.replace(/\)$/, ''); rest = rest.replace(m[0], '').replace(/^[\s,;:—–-]+|[\s,;:—–-]+$/g, ''); } }
    var sent = '';
    if (bits.length) sent = '<span class="form">' + esc(form) + '</span> is ' + esc(bits.join(' ')) + (agree ? ', agreeing with <em>' + rich(agree) + '</em>' : '') + '.';
    else if (pr.pos) sent = '<span class="form">' + esc(form) + '</span> is ' + (ARTICLE[pr.pos] || 'a') + ' ' + esc(pr.pos) + (agree ? ', agreeing with <em>' + rich(agree) + '</em>' : '') + '.';
    if (rest) sent += (sent ? ' ' : '') + rich(/[.!?]$/.test(rest) ? rest : rest + '.');
    if (sent) h += '<div class="here"><b>In this line</b>' + sent + '</div>';
    if (d.x) h += '<div class="xtra">' + rich(d.x) + '</div>';
    return h + '</div>';
  }
  function styleHtml(w) {
    var ids = (w.dataset.note || '').split(',').filter(function (id) { return notes[id]; });
    if (w.classList.contains('st-u')) ids = ids.slice(0, 1);
    if (!ids.length) return '<div class="empty">No note on this word.</div>';
    return ids.map(function (id) {
      var n = notes[id];
      return '<div class="note"><span class="q">' + esc(n.quote) + '</span><span class="chip c-' + n.cat + '">' + esc(CATS[n.cat] || n.cat) + '</span>' +
        (n.trans ? '<div class="t">' + esc(n.trans) + '</div>' : '') + (n.label ? '<div class="l">' + esc(n.label) + '</div>' : '') + (n.body ? '<div class="nb">' + n.body + '</div>' : '') +
        (n.exam ? '<div class="exam">' + n.exam + '</div>' : '') + (n.line ? '<small>line ' + esc(n.line) + '</small>' : '') + '</div>';
    }).join('');
  }

  // ── the bars: one continuous underline per note, under the whole phrase ──
  // Laid out from the words' positions, so a phrase of several words gets one bar
  // across the spaces, a phrase that wraps gets a bar on each line, and two notes
  // on the same words stack in lanes.
  function layoutBars() {
    root.querySelectorAll('.st-u').forEach(function (b) { b.remove(); });
    if (clicker !== 'style') return;
    root.querySelectorAll('.st-lat').forEach(function (lat) {
      var latRect = lat.getBoundingClientRect(), segs = [];
      lat.querySelectorAll('.st-row').forEach(function (row) {
        var words = Array.prototype.slice.call(row.querySelectorAll('.w')), runs = {};
        words.forEach(function (w, i) {
          (w.dataset.note || '').split(',').forEach(function (id) {
            if (!notes[id]) return;
            var r = runs[id] = runs[id] || [], last = r[r.length - 1];
            if (last && last.end === i - 1) { last.words.push(w); last.end = i; } else r.push({ words: [w], end: i });
          });
        });
        Object.keys(runs).forEach(function (id) {
          runs[id].forEach(function (run) {
            var cur = null;
            run.words.forEach(function (w) {
              var r = w.getBoundingClientRect();
              if (cur && Math.abs(cur.bottom - r.bottom) < 4) cur.right = Math.max(cur.right, r.right);
              else { cur = { id: id, cat: notes[id].cat, left: r.left, right: r.right, bottom: r.bottom }; segs.push(cur); }
            });
          });
        });
      });
      // lanes: on each line, a bar takes the first lane free at its left edge; the longer of two bars starting together goes lower
      var lines = {};
      segs.forEach(function (sg) { var k = Math.round(sg.bottom / 6); (lines[k] = lines[k] || []).push(sg); });
      Object.keys(lines).forEach(function (k) {
        var list = lines[k].sort(function (a, b) { return a.left - b.left || (b.right - b.left) - (a.right - a.left); }), lanes = [];
        list.forEach(function (sg) { var lv = 0; while (lanes[lv] != null && lanes[lv] > sg.left + 1) lv++; lanes[lv] = sg.right; sg.lane = lv; });
      });
      segs.forEach(function (sg) {
        var b = document.createElement('i'); b.className = 'st-u c-' + sg.cat + (activeCat && sg.cat !== activeCat ? ' hid' : ''); b.dataset.note = sg.id;
        // a hair in from each end, so two bars on neighbouring words read as two
        b.style.left = (sg.left - latRect.left + 1.5) + 'px'; b.style.width = Math.max(6, sg.right - sg.left - 3) + 'px';
        b.style.top = (sg.bottom - latRect.top - 2 + sg.lane * 4) + 'px';
        lat.appendChild(b);
      });
    });
  }
  var barTimer = null;
  window.addEventListener('resize', function () { clearTimeout(barTimer); barTimer = setTimeout(layoutBars, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutBars);

  // ── Latin ↔ English links ──
  function unlink() { root.querySelectorAll('.lit').forEach(function (x) { x.classList.remove('lit'); }); }
  function link(target) {
    // ids are unit.word, so a link can reach into the next or previous unit
    var el = target.closest('[data-id]');
    var scope = target.closest('.st-units, .st-present') || root;
    unlink();
    if (!el) return;
    var ids = el.dataset.id.split(',');
    scope.querySelectorAll('[data-id]').forEach(function (x) {
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
    units.querySelectorAll('.st-u').forEach(function (b) { b.remove(); });
    units.querySelectorAll('.st-unit').forEach(function (u) { u.classList.remove('cur'); u.classList.toggle('on', enMode === 'all'); u.addEventListener('click', function () { u.classList.toggle('on'); }); });
    present.classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function closePresent() { if (present) { present.classList.remove('on'); document.body.style.overflow = ''; } }
  var pb = root.querySelector('[data-present]');
  if (pb) pb.addEventListener('click', openPresent);

  setClicker(clicker);

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
