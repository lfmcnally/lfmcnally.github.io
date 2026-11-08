// Classicalia: a set-text section as a handout.
//
// The Handout button in the reader opens this. It reads the text and the
// translation from the reader on the page (nothing else: no vocabulary,
// no notes, no colours) and lays them out on A4 with room to annotate:
// wide line spacing, and a ruled column for notes. Printed from the
// browser (which also saves a PDF), or downloaded as a Word file the
// teacher can edit, written by /version2/assets/js/word-docx.js.
(function () {
  'use strict';

  var WORD_JS = '/version2/assets/js/word-docx.js';
  var KEY = 'classicalia.settext.handout';
  var SPACING = { normal: 1.6, wide: 2.3, extra: 3.1 };   // line heights for the text
  var LATIN_PT = 11.5, ENGLISH_PT = 10;
  // the columns' shares of the page: text, English beside it, notes. A hexameter
  // wants a wider column than a line of prose does.
  var SHARES = {
    verse: { 'side-notes': [0.57, 0.27, 0.16], side: [0.62, 0.38], 'alone-notes': [0.72, 0.28], alone: [1] },
    prose: { 'side-notes': [0.42, 0.36, 0.22], side: [0.52, 0.48], 'alone-notes': [0.66, 0.34], alone: [1] }
  };
  function sharesFor(m, side, notes) { return SHARES[m.verse ? 'verse' : 'prose'][(side ? 'side' : 'alone') + (notes ? '-notes' : '')]; }

  var store = {
    get: function () { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } },
    set: function (v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  };
  var DEFAULTS = { layout: 'side', english: true, notes: true, spacing: 'wide', name: true };

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function clean(el) { return el ? (el.textContent || '').replace(/\s+/g, ' ').trim() : ''; }

  // ── the text, read from the reader ──
  function readModel(root) {
    var head = document.querySelector('.phead h1');
    var sub = document.querySelector('.phead .sub');
    var units = Array.prototype.map.call(root.querySelectorAll('.st-units > .st-unit'), function (u) {
      var lat = Array.prototype.map.call(u.querySelectorAll('.st-lat .st-row'), function (r) {
        return { n: clean(r.querySelector('em')), t: clean(r.querySelector('.st-la')) };
      });
      var rows = u.querySelectorAll('.st-eng .st-row');
      var en = rows.length ? Array.prototype.map.call(rows, function (r) { return { n: clean(r.querySelector('em')), t: clean(r.querySelector('.st-en')) }; }) : null;
      return { lat: lat, en: en, block: en ? '' : clean(u.querySelector('.st-eng')) };
    });
    var parts = (root.dataset.title || '').split(' · ');
    return {
      verse: root.dataset.mode === 'verse',
      lang: root.dataset.lang || 'Latin',
      text: parts.length > 1 ? parts[0] : '',
      title: head ? clean(head) : parts[parts.length - 1],
      sub: sub ? clean(sub) : '',
      file: root.dataset.title || document.title,
      units: units
    };
  }

  // a verse line number is printed on the first line and every fifth, as in a printed text
  function showNumber(n, first) { return first || (/^\d+$/.test(n) && +n % 5 === 0); }
  // prose with its translation after it reads as one passage, not in the reader's sentence-sized pieces
  function flowUnits(m, side) {
    if (side || m.verse) return m.units;
    return [{ lat: m.units.reduce(function (a, u) { return a.concat(u.lat); }, []), en: null, block: '' }];
  }
  function allEnglish(m) { return m.units.map(englishOf).join(' ').replace(/\s+/g, ' '); }
  function englishOf(u) { return u.en ? u.en.map(function (r) { return r.t; }).join(' ') : u.block; }

  // ── the handout as HTML, for the preview and the printer ──
  function latinHtml(m, u, firstRef) {
    if (!m.verse) {
      return '<p class="ho-prose">' + u.lat.map(function (r) { return (r.n ? '<b class="ho-pn">' + esc(r.n) + '</b>' : '') + esc(r.t); }).join(' ') + '</p>';
    }
    return u.lat.map(function (r) {
      var first = firstRef.v; firstRef.v = false;
      return '<div class="ho-l"><span class="ho-n">' + (showNumber(r.n, first) ? esc(r.n) : '') + '</span>' + esc(r.t) + '</div>';
    }).join('');
  }
  function englishHtml(m, u) {
    if (u.en && m.verse) return u.en.map(function (r) { return '<div class="ho-el">' + esc(r.t) + '</div>'; }).join('');
    return '<p class="ho-en">' + esc(englishOf(u)) + '</p>';
  }
  function sheetHtml(m, o) {
    var lh = SPACING[o.spacing] || SPACING.wide;
    var english = o.english, side = english && o.layout === 'side';
    var h = '<div class="ho-head"><div><div class="ho-kicker">' + esc([m.text, m.lang].filter(Boolean).join(' · ')) + '</div><h1>' + esc(m.title) + '</h1>' +
      (m.sub ? '<div class="ho-sub">' + esc(m.sub) + '</div>' : '') + '</div>' +
      (o.name ? '<div class="ho-name"><span>Name</span><i></i><span>Date</span><i class="d"></i></div>' : '') + '</div>';
    var cols = [m.lang];
    if (side) cols.push('English');
    if (o.notes) cols.push('Notes');
    var cls = 'ho-t cols-' + cols.length + (side ? ' side' : '') + (o.notes ? ' has-notes' : '');
    var shares = sharesFor(m, side, o.notes);
    var first = { v: true };
    var units = flowUnits(m, side);
    h += '<table class="' + cls + '"><thead><tr>' + cols.map(function (c, i) { return '<th style="width:' + (shares[i] * 100) + '%">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>';
    units.forEach(function (u) {
      // verse translated line by line: one row a line, so each line sits beside its English
      if (side && m.verse && u.en && u.en.length === u.lat.length) {
        u.lat.forEach(function (r, i) {
          var f = first.v; first.v = false;
          h += '<tr class="ln' + (i === 0 ? ' top' : '') + '"><td class="la"><div class="ho-l"><span class="ho-n">' + (showNumber(r.n, f) ? esc(r.n) : '') + '</span>' + esc(r.t) + '</div></td>' +
            '<td class="en"><div class="ho-el">' + esc(u.en[i].t) + '</div></td>' + (o.notes ? '<td class="nt"></td>' : '') + '</tr>';
        });
        return;
      }
      h += '<tr class="top"><td class="la">' + latinHtml(m, u, first) + '</td>' + (side ? '<td class="en">' + englishHtml(m, u) + '</td>' : '') + (o.notes ? '<td class="nt"></td>' : '') + '</tr>';
    });
    h += '</tbody></table>';
    if (english && !side) {
      h += '<div class="ho-after"><h2>Translation</h2>' + (m.verse ? m.units.map(function (u) { return englishHtml(m, u); }).join('') : '<p class="ho-en">' + esc(allEnglish(m)) + '</p>') + '</div>';
    }
    h += '<div class="ho-foot">classicalia.co.uk</div>';
    return '<div class="ho-sheet" style="--ho-lh:' + lh + '">' + h + '</div>';
  }

  // ── the handout as a Word file ──
  function loadWord() {
    if (window.ClassicaliaWord) return Promise.resolve(window.ClassicaliaWord);
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = WORD_JS;
      s.onload = function () { window.ClassicaliaWord ? resolve(window.ClassicaliaWord) : reject(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  function wordBlob(W, m, o) {
    var lh = SPACING[o.spacing] || SPACING.wide;
    var side = o.english && o.layout === 'side';
    // Georgia runs a little wider than Lora, so the text is a half point smaller in Word
    var lf = { size: LATIN_PT - 0.5 }, ef = { size: ENGLISH_PT }, nf = { size: 8, color: '9AA1B2' };
    var lineAt = LATIN_PT * lh, NUM = Math.round(0.8 * W.CM), HANG = Math.round(0.4 * W.CM);
    var greek = m.lang === 'Greek';
    function latinLine(r, first) {
      var runs = m.verse ? W.textRun(showNumber(r.n, first) ? r.n : '', nf) + W.tabRun(nf) : '';
      // a hanging indent: a line too long for the column carries on indented under itself
      return W.para(runs + W.textRun(r.t, lf), { atLeast: lineAt, tabs: [{ val: 'left', pos: NUM }] }, lf)
        .replace(/(<w:spacing [^>]*\/>)/, '$1<w:ind w:left="' + (NUM + HANG) + '" w:hanging="' + (NUM + HANG) + '"/>');
    }
    function latinXml(u, firstRef) {
      if (!m.verse) {
        var runs = u.lat.map(function (r) { return (r.n ? W.textRun(r.n + ' ', { size: 8, bold: true, color: '9AA1B2' }) : '') + W.textRun(r.t + ' ', lf); }).join('');
        return W.para(runs, { atLeast: lineAt }, lf);
      }
      return u.lat.map(function (r) { var f = firstRef.v; firstRef.v = false; return latinLine(r, f); }).join('');
    }
    function englishXml(u) {
      if (u.en && m.verse) return u.en.map(function (r) { return W.para(W.textRun(r.t, ef), { atLeast: ENGLISH_PT * 1.4 }, ef); }).join('');
      return W.para(W.textRun(englishOf(u), ef), { after: side ? 0 : 8, atLeast: ENGLISH_PT * 1.45 }, ef);
    }
    // the notes column: ruled lines, about as many as the row has lines of text
    function ruled(lines) {
      // Word joins neighbouring paragraphs with the same border into one box, so the
      // lines are the box's bottom and the borders between its paragraphs
      var b = W.border('bottom', { color: 'C9CED8', width: 0.75 }) + W.border('between', { color: 'C9CED8', width: 0.75 });
      var out = '';
      for (var i = 0; i < Math.max(1, lines); i++) out += W.para('', { exact: lineAt, border: b }, { size: 6 });
      return out;
    }
    function lineCount(u, colChars) {
      if (m.verse) return u.lat.length;
      var chars = u.lat.reduce(function (n, r) { return n + r.t.length + 1; }, 0);
      return Math.ceil(chars / colChars);
    }
    return W.pack({
      margins: [737, 737, 737, 737],
      font: greek ? 'times' : 'georgia',
      size: ENGLISH_PT,
      title: m.file,
      creator: 'Classicalia',
      foot: function (width) { return W.pageFoot ? W.pageFoot('classicalia.co.uk', width) : ''; },
      body: function (ctx) {
        var x = '';
        var kf = { size: 8.5, caps: true, spacing: 0.6, color: '6B7386' };
        var kicker = [m.text, m.lang].filter(Boolean).join(' · ');
        if (kicker) x += W.para(W.textRun(kicker, kf), { after: 2 }, kf);
        var tf = { size: 17, bold: true };
        x += W.para(W.textRun(m.title, tf), { after: 2 }, tf);
        if (m.sub) x += W.para(W.textRun(m.sub, { size: 9, color: '6B7386' }), { after: 6 }, { size: 9 });
        if (o.name) {
          var f = { size: 10 };
          // two tab stops with an underscore leader: a line to write on after each label
          x += W.para(W.textRun('Name ', f) + W.tabRun(f) + W.textRun('   Date ', f) + W.tabRun(f), {
            before: 4, after: 10, tabs: [{ val: 'left', pos: Math.round(ctx.width * 0.66) }, { val: 'right', pos: ctx.width }]
          }, f).replace(/<w:tab w:val="(left|right)"/g, '<w:tab w:val="$1" w:leader="underscore"');
        }
        // columns: text, English beside it, notes; the widths a share of the page
        var shares = sharesFor(m, side, o.notes);
        var widths = shares.map(function (s) { return Math.floor(ctx.width * s); });
        var heads = [m.lang];
        if (side) heads.push('English');
        if (o.notes) heads.push('Notes');
        var hf = { size: 8.5, bold: true, color: '6B7386' };
        var rows = [{ header: true, cells: heads.map(function (hd) { return { xml: W.para(W.textRun(hd, hf), {}, hf), fill: 'F1F2F6' }; }) }];
        var first = { v: true };
        var colChars = Math.round(widths[0] / 567 * 4.2);     // about four letters a centimetre at this size
        flowUnits(m, side).forEach(function (u) {
          if (side && m.verse && u.en && u.en.length === u.lat.length) {
            u.lat.forEach(function (r, i) {
              var f = first.v; first.v = false;
              var cells = [{ xml: latinLine(r, f) }, { xml: W.para(W.textRun(u.en[i].t, ef), { atLeast: lineAt }, ef) }];
              if (o.notes) cells.push({ xml: ruled(1) });
              rows.push({ cells: cells });
            });
            return;
          }
          var cells = [{ xml: latinXml(u, first) }];
          if (side) cells.push({ xml: englishXml(u) });
          if (o.notes) cells.push({ xml: ruled(lineCount(u, colChars)) });
          rows.push({ cells: cells });
        });
        var grey = W.border('top', { color: 'D5D9E2' }) + W.border('left', { color: 'D5D9E2' }) + W.border('bottom', { color: 'D5D9E2' }) + W.border('right', { color: 'D5D9E2' }) +
          W.border('insideH', { color: 'D5D9E2' }) + W.border('insideV', { color: 'D5D9E2' });
        x += W.table(rows, widths, { borders: grey, margins: [100, 140, 100, 140] });
        if (o.english && !side) {
          x += '<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
          var h2 = { size: 13, bold: true };
          x += W.para(W.textRun('Translation', h2), { after: 6 }, h2);
          if (m.verse) m.units.forEach(function (u) { x += englishXml(u); });
          else x += W.para(W.textRun(allEnglish(m), ef), { atLeast: ENGLISH_PT * 1.5 }, ef);
        }
        return x;
      }
    });
  }

  // ── the window: options, a preview, print and Word ──
  var ov = null, model = null, opts = null;
  function render() {
    ov.querySelector('.ho-stage').innerHTML = sheetHtml(model, opts);
    ov.querySelectorAll('[data-ho]').forEach(function (b) {
      var k = b.dataset.ho, v = b.dataset.v;
      b.classList.toggle('on', v != null ? opts[k] === v : !!opts[k]);
      if (k === 'layout') b.disabled = !opts.english;
    });
  }
  function build() {
    ov = document.createElement('div');
    ov.className = 'ho';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-label', 'Handout');
    ov.innerHTML = '<div class="ho-bar">' +
      '<span class="ho-t1">Handout</span>' +
      '<span class="ho-grp"><span class="ho-lab">Translation</span><span class="seg"><button class="btn" data-ho="layout" data-v="side">Beside the text</button><button class="btn" data-ho="layout" data-v="after">After the text</button></span>' +
      '<button class="btn" data-ho="english">Include</button></span>' +
      '<span class="ho-grp"><span class="ho-lab">Space to annotate</span><span class="seg"><button class="btn" data-ho="spacing" data-v="normal">Normal</button><button class="btn" data-ho="spacing" data-v="wide">Wide</button><button class="btn" data-ho="spacing" data-v="extra">Extra wide</button></span>' +
      '<button class="btn" data-ho="notes">Notes column</button></span>' +
      '<span class="ho-grp"><button class="btn" data-ho="name">Name and date</button></span>' +
      '<span class="ho-acts"><button class="btn navy" data-act="print">Print or save PDF</button><button class="btn line" data-act="word">Word</button><button class="btn line" data-act="close">Close</button></span>' +
      '</div><div class="ho-stage"></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ho]');
      if (b) {
        var k = b.dataset.ho;
        opts[k] = b.dataset.v != null ? b.dataset.v : !opts[k];
        store.set(opts);
        render();
        return;
      }
      var a = e.target.closest('[data-act]');
      if (!a) return;
      if (a.dataset.act === 'close') close();
      if (a.dataset.act === 'print') window.print();
      if (a.dataset.act === 'word') {
        var label = a.textContent;
        a.disabled = true; a.textContent = 'Writing…';
        loadWord().then(function (W) { return wordBlob(W, model, opts).then(function (blob) { W.download(blob, W.fileName(model.file + ' handout')); }); })
          .catch(function () { alert('Sorry, the Word file could not be made. Try Print or save PDF instead.'); })
          .then(function () { a.disabled = false; a.textContent = label; });
      }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ov.classList.contains('on')) close(); });
  }
  function open(root) {
    model = readModel(root);
    var saved = store.get();
    opts = {};
    Object.keys(DEFAULTS).forEach(function (k) { opts[k] = saved[k] != null ? saved[k] : DEFAULTS[k]; });
    if (!ov) build();
    render();
    ov.classList.add('on');
    document.body.classList.add('ho-open');
    var first = ov.querySelector('[data-act="print"]');
    if (first) first.focus();
  }
  function close() {
    if (!ov) return;
    ov.classList.remove('on');
    document.body.classList.remove('ho-open');
  }

  window.ClassicaliaHandout = { open: open, close: close };
})();
