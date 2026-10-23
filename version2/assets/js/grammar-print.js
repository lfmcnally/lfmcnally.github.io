// Classicalia — printed worksheets for the Latin Language grammar lessons.
//
// The Print menu offers two worksheets, built from the lesson's own data
// (embedded by scripts/build-grammar.py as #ws-data):
//   A  Revision sheet: the notes in full, then the exercises with writing lines.
//   B  Exercise sheet: a short "Remember" box, then the exercises with marks.
// Each ends with an answers page for the teacher. The blocks are laid into
// A4 pages one by one, starting a new page when one fills, and only the
// worksheet reaches the printer. Printing with Ctrl+P gives the revision sheet.
(function () {
  'use strict';
  var src = document.getElementById('ws-data');
  if (!src) return;
  var L = JSON.parse(src.textContent);
  var KICK = L.kicker;

  // ── the lesson, sorted into notes, mistakes and exercises ──
  var notes = [], warn = [], ex = [];
  L.sections.forEach(function (s) {
    var exs = s.blocks.filter(function (b) { return b.exercise; });
    if (exs.length) { exs.forEach(function (b) { ex.push(b.exercise); }); return; }   // the web intro to the exercises is left out
    if (s.exam) warn.push(s); else notes.push(s);
  });
  function marksOf(it) { return it.scheme.reduce(function (a, r) { return a + r.marks; }, 0); }
  function total(x) { return x.task === 'translate' ? x.items.reduce(function (a, it) { return a + marksOf(it); }, 0) : x.items.length; }
  function firstTable() {
    for (var i = 0; i < notes.length; i++) for (var j = 0; j < notes[i].blocks.length; j++) if (notes[i].blocks[j].table) return notes[i].blocks[j].table;
  }

  // ── pieces ──
  function who() { return '<div class="who"><span>Name</span><span>Class</span><span>Date</span></div>'; }
  function lines(n) { return '<div class="lines" style="--n:' + n + '"></div>'; }
  function table(t) {
    return '<table><thead><tr>' + t.head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      t.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }
  function list(items) { return '<ul>' + items.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>'; }
  function glance(cls) { return '<dl class="' + cls + '">' + (L.key || []).map(function (k) { return '<dt>' + k[0] + '</dt><dd>' + k[1] + '</dd>'; }).join('') + '</dl>'; }
  function keyStrip() { return L.marks ? '<div class="mk"><span class="c"><i></i>' + L.marks.c + '</span><span class="v"><i></i>' + L.marks.v + '</span></div>' : ''; }
  function block(b) {
    if (b.lead || b.p) return '<p>' + (b.lead || b.p) + '</p>';
    if (b.facts) return list(b.facts);
    if (b.table) return table(b.table);
    if (b.note) return '<p class="nb">' + b.note + '</p>';
    if (b.compare) return table(b.compare);
    if (b.example) {
      var e = b.example;
      return '<div class="ex"><div class="la">' + e.la + '</div><div class="en">' + e.en + '</div>' + (e.note ? '<div class="nt">' + e.note + '</div>' : '') + '</div>';
    }
    return '';
  }
  function intro(x) { return x.intro.replace(/\bType\b/g, 'Write').replace(/\btype\b/g, 'write'); }   // the web wording, for paper
  function room(la) { var n = la.replace(/<[^>]+>/g, '').length; return n > 55 ? 3 : n > 26 ? 2 : 1; }   // writing lines for a translation, by the length of the Latin
  function questions(x, withMarks) {
    if (x.task === 'translate') return x.items.map(function (it, i) {
      return '<div class="q"><span class="n">' + (i + 1) + '</span><div><div class="la">' + it.la + '</div>' + lines(room(it.la)) + '</div>' +
        (withMarks ? '<span class="m">[' + marksOf(it) + ']</span>' : '') + '</div>';
    });
    var long = x.items.some(function (it) { return it.la.replace(/<[^>]+>/g, '').length > 34; });
    return ['<div class="forms' + (long ? ' wide' : '') + '">' + x.items.map(function (it, i) {
      return '<div><span class="n">' + (i + 1) + '</span><span class="la">' + it.la + '</span><span class="box"></span></div>';
    }).join('') + '</div>'];
  }

  // ── the two sheets ──
  function revision() {
    var b = ['<div class="hd"><div class="kick">' + KICK + '</div><h2>' + L.title + '</h2><div class="deck">' + L.deck + '</div></div>' + who()];
    if (L.key) b.push(glance('glance'));
    var keyed = false;
    notes.forEach(function (s) {
      s.blocks.forEach(function (bl, i) {
        b.push((i ? '' : '<h3>' + s.h2 + '</h3>') + block(bl));
        if (bl.example && !keyed) { keyed = true; if (L.marks) b.push(keyStrip()); }
      });
    });
    warn.forEach(function (s) {
      b.push('<div class="warn"><b class="k">' + (s.label || s.h2) + '</b>' + s.blocks.map(block).join('') + '</div>');
    });
    ex.forEach(function (x) {
      var qs = questions(x, false);
      b.push('<h3>' + x.title + '</h3><p class="nb">' + intro(x) + '</p>' + qs.shift());   // the heading never sits alone at the foot of a page
      qs.forEach(function (q) { b.push(q); });
    });
    return b;
  }
  function exercises() {
    var b = ['<div class="hd"><div><h2>' + L.title + '</h2><div class="sub">' + KICK + '</div></div>' + who() + '</div>'];
    var t = firstTable();
    b.push('<div class="remember' + (t ? '' : ' one') + '"><div><h4>Remember</h4>' + glance('') + '</div>' + (t ? '<div><h4>' + (t.label || 'For reference') + '</h4>' + table(t) + '</div>' : '') + '</div>');
    ex.forEach(function (x, i) {
      var n = total(x);
      var qs = questions(x, true);
      b.push('<div class="task"><h3>' + (i + 1) + ' · ' + x.title + '</h3><span>' + n + (n === 1 ? ' mark' : ' marks') + '</span></div><p class="nb">' + intro(x) + '</p>' + qs.shift());
      qs.forEach(function (q) { b.push(q); });
    });
    return b;
  }
  function answers() {
    var b = ['<div class="hd ans"><span class="tag2">' + KICK + ' · for the teacher</span><h2>Answers: ' + L.title + '</h2></div>'];
    ex.forEach(function (x) {
      b.push('<h3>' + x.title + '</h3>');
      if (x.task === 'translate') x.items.forEach(function (it, i) {
        b.push('<div class="ans item"><span class="n">' + (i + 1) + '</span><div><div class="model">' + it.model + '</div><div class="scheme">' +
          it.scheme.map(function (r) { return '<span><em>' + r.what + '</em>: ' + r.say + ' (' + r.marks + ')</span>'; }).join(' ') + '</div></div></div>');
      });
      else b.push('<ol class="ans">' + x.items.map(function (it) { return '<li><em>' + [].concat(it.answer).join('</em> or <em>') + '</em></li>'; }).join('') + '</ol>');
    });
    return b;
  }

  // ── lay the blocks into A4 pages ──
  var host;
  function build(style) {
    if (host) host.remove();
    host = document.createElement('div');
    host.id = 'ws';
    host.setAttribute('aria-hidden', 'true');
    document.body.appendChild(host);
    var pages = [];
    function newPage() {
      var s = document.createElement('div');
      s.className = 'sheet ' + style;
      s.innerHTML = '<div class="content"></div><div class="foot"><span>Classicalia · ' + L.title + '</span><span class="pn"></span></div>';
      host.appendChild(s); pages.push(s);
      return s.firstChild;
    }
    function lay(blocks) {
      var c = newPage();
      function over() { return c.scrollHeight > c.clientHeight + 1; }
      blocks.forEach(function (html) {
        var el = document.createElement('div');
        el.innerHTML = html; c.appendChild(el);
        while (over() && c.children.length > 1) {
          // a long table that ends the block splits between pages, its header repeated; anything else moves over whole
          var t = el.lastElementChild, rows = t && t.tagName === 'TABLE' ? t.tBodies[0].rows : [], rest = null;
          if (rows.length > 5) {
            rest = t.cloneNode(true); var rb = rest.tBodies[0]; rb.innerHTML = '';
            while (over() && rows.length > 3) rb.insertBefore(rows[rows.length - 1], rb.firstChild);
            if (over()) { while (rb.rows.length) t.tBodies[0].appendChild(rb.rows[0]); rest = null; }
          }
          if (!rest) { c.removeChild(el); c = newPage(); c.appendChild(el); break; }
          el = document.createElement('div'); el.appendChild(rest);
          c = newPage(); c.appendChild(el);
        }
      });
    }
    lay(style === 'A' ? revision() : exercises());
    var n = pages.length;
    lay(answers());
    pages.forEach(function (p, i) { p.querySelector('.pn').textContent = i < n ? 'Page ' + (i + 1) + ' of ' + n : 'Answers'; });
    document.documentElement.classList.add('ws-on');
  }
  function clear() {
    if (host) { host.remove(); host = null; }
    document.documentElement.classList.remove('ws-on');
  }

  // ── the menu ──
  var wrap = document.querySelector('[data-ws-menu]');
  if (wrap) {
    var btn = wrap.querySelector('[data-print]'), menu = wrap.querySelector('.pmenu-list');
    function open(on) { menu.hidden = !on; btn.setAttribute('aria-expanded', on); }
    btn.addEventListener('click', function () { open(menu.hidden); });
    menu.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ws]');
      if (!b) return;
      open(false);
      var go = function () { build(b.dataset.ws); window.print(); };
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(go); else go();
    });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) open(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { open(false); btn.focus(); } });
  }
  window.addEventListener('beforeprint', function () { if (!host) build('A'); });
  window.addEventListener('afterprint', clear);
})();
