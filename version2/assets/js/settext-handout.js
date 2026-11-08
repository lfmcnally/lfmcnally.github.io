// Classicalia: a set-text section as a handout.
//
// The Handout button in the reader opens this. It reads the text and the
// translation from the reader on the page (nothing else: no vocabulary,
// no notes, no colours) and lays them out on A4 with room to annotate:
// line spacing set on a slider, and a column for notes. Printed from the
// browser (which also saves a PDF), or downloaded as a Word file the
// teacher can edit, written by /version2/assets/js/word-docx.js.
(function () {
  'use strict';

  var WORD_JS = '/version2/assets/js/word-docx.js';
  var KEY = 'classicalia.settext.handout';
  // the text's line height, as a multiple of its size: the slider's range and starting point
  var GAP = { min: 1.4, max: 6, step: 0.1, start: 2.6 };
  function gapOf(o) { var g = +o.gap; return g >= GAP.min && g <= GAP.max ? g : GAP.start; }
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
  var DEFAULTS = { layout: 'side', english: true, notes: true, gap: GAP.start, name: true };

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
    // the title attribute can carry an escaped ampersand ("Cupid &amp; Psyche"): read it as text
    var dec = document.createElement('textarea');
    dec.innerHTML = root.dataset.title || '';
    var parts = dec.value.split(' · ');
    return {
      verse: root.dataset.mode === 'verse',
      lang: root.dataset.lang || 'Latin',
      text: parts.length > 1 ? parts[0] : '',
      title: head ? clean(head) : parts[parts.length - 1],
      sub: sub ? clean(sub) : '',
      file: dec.value || document.title,
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
    var lh = gapOf(o);
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
    return '<div class="ho-sheet' + (m.lang === 'Greek' ? ' grc' : '') + '" style="--ho-lh:' + lh + '">' + h + '</div>';
  }

  // ── the handout as a Word file: the preview, measure for measure ──
  // Every size, colour, rule and gap below is the one the stylesheet gives the
  // sheet (the .ho- rules in settext-reader.css), and the file carries the
  // sheet's own fonts, so Word shows what the preview shows.
  var FONT_DIR = '/version2/assets/fonts/';
  var INK = '141A2B', BODY_INK = '3B4358', MUTED = '6B7386', FAINT = '9AA1B2', RULE = 'E6E8EE', RULE_HEAD = 'D5D9E2';
  var PAGE = { top: 14, right: 14, bottom: 12, left: 14 };      // mm, as the sheet's padding and the printed page's margins
  function loadWord() {
    if (window.ClassicaliaWord) return Promise.resolve(window.ClassicaliaWord);
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = WORD_JS + '?t=' + Date.now();
      s.onload = function () { window.ClassicaliaWord ? resolve(window.ClassicaliaWord) : reject(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  // where the preview breaks the prose and the English into lines: the sheet is laid out off
  // screen at its printed width, and each word's position read off it. For each passage (in the
  // order the sheet has them) a list of lines, each a list of pieces { t, num }.
  function lineBreaks(m, o) {
    var box = document.createElement('div');
    box.className = 'ho-measure';
    box.innerHTML = sheetHtml(m, o);
    document.body.appendChild(box);
    return (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () {
      function linesOf(p) {
        var lines = [], top = null, walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT), node;
        while ((node = walker.nextNode())) {
          var num = !!node.parentNode.closest('.ho-pn'), re = /\S+\s*/g, mt;
          while ((mt = re.exec(node.data))) {
            var r = document.createRange();
            r.setStart(node, mt.index); r.setEnd(node, mt.index + mt[0].replace(/\s+$/, '').length);
            var rect = r.getClientRects()[0];
            if (!rect) continue;
            if (top === null || rect.top > top + 4) { lines.push([]); top = rect.top; }
            var line = lines[lines.length - 1], last = line[line.length - 1];
            if (last && last.num === num) last.t += mt[0]; else line.push({ t: num ? mt[0].trim() : mt[0], num: num });
          }
        }
        lines.forEach(function (l) { var e = l[l.length - 1]; if (e) e.t = e.t.replace(/\s+$/, ''); });
        return lines;
      }
      var out = {
        prose: Array.prototype.map.call(box.querySelectorAll('.ho-prose'), linesOf),
        en: Array.prototype.map.call(box.querySelectorAll('.ho-en, .ho-el'), linesOf),
        sub: Array.prototype.map.call(box.querySelectorAll('.ho-sub'), linesOf)
      };
      box.remove();
      return out;
    }, function (e) { box.remove(); throw e; });
  }
  function wordBlob(W, m, o, breaks) {
    var lh = gapOf(o);
    var side = o.english && o.layout === 'side';
    var greek = m.lang === 'Greek';
    var SERIF = 'Lora', SANS = 'DM Sans', TEXT = greek ? 'Noto Serif' : SERIF;
    var PX = 15, MM = W.CM / 10;                              // twips in a CSS pixel and in a millimetre
    function tw(mm) { return Math.round(mm * MM); }

    // a run in a named font; raise (pt) lifts it off the baseline
    function run(text, font, f, raise) {
      var pr = W.rPr(f) || '<w:rPr></w:rPr>';
      pr = pr.replace('<w:rPr>', '<w:rPr><w:rFonts w:ascii="' + font + '" w:hAnsi="' + font + '" w:cs="' + font + '" w:eastAsia="' + font + '"/>');
      if (raise) pr = pr.replace(/(<w:sz |<\/w:rPr>)/, '<w:position w:val="' + Math.round(raise * 2) + '"/>$1');
      return '<w:r>' + pr + '<w:t xml:space="preserve">' + W.esc(text) + '</w:t></w:r>';
    }
    function tab(f) { return W.tabRun(f); }
    function nil(side) { return '<w:' + side + ' w:val="nil"/>'; }
    function line(side, color, px, space) {
      return W.border(side, { color: color, width: px || 1 }).replace('w:space="0"', 'w:space="' + (space || 0) + '"');
    }
    function borders(top, bottom, left, right) { return (top || nil('top')) + (left || nil('left')) + (bottom || nil('bottom')) + (right || nil('right')); }
    function ind(xml, left, hanging) { return xml.replace(/(<w:spacing [^>]*\/>)/, '$1<w:ind w:left="' + left + '" w:hanging="' + hanging + '"/>'); }
    // a line already broken where the preview breaks it may run a few points past the edge: Word
    // sets type a touch wider than a browser, and a near-full line must not drop its last word
    var SLACK = 8 * 20;
    function slack(xml) { return xml.replace(/(<w:spacing [^>]*\/>)/, '$1<w:ind w:right="-' + SLACK + '"/>'); }

    // the text: 11.5pt, each line a line box lh times that, the words centred in it as a browser sets them
    var TEXT_PT = 11.5, BOX = TEXT_PT * lh, NATURAL = TEXT_PT * 1.28, HALF = (BOX - NATURAL) / 2;
    var tf = { size: TEXT_PT, color: INK };
    var nf = { size: 7.5, color: FAINT };
    var ef = { size: 10, color: BODY_INK };
    // a verse line: the number in a 5mm gutter, the line from 7mm, carrying on at 10mm if it wraps.
    // The gap goes above each line only (apps differ on adding the space below one paragraph to the
    // space above the next): half a gap above the first, a whole gap above the rest, half below the last.
    function verseLine(r, first, pos) {
      var num = showNumber(r.n, first) ? r.n : '';
      var x = W.para(tab(nf) + run(num, SANS, nf) + tab(nf) + run(r.t, TEXT, tf), {
        exact: NATURAL, before: pos === 'only' || pos === 'first' ? HALF : 2 * HALF, after: pos === 'only' || pos === 'last' ? HALF : 0,
        tabs: [{ val: 'right', pos: tw(5) }, { val: 'left', pos: tw(7) }]
      }, tf);
      return ind(x, tw(10), tw(10));
    }
    function place(i, n) { return n === 1 ? 'only' : i === 0 ? 'first' : i === n - 1 ? 'last' : 'mid'; }
    // prose: broken into lines where the preview breaks it, each line a paragraph spaced as a
    // verse line is, so the lines and the gaps between them are the preview's in any app
    var proseAt = 0;
    function proseXml() {
      var lines = (breaks && breaks.prose[proseAt++]) || [];
      return lines.map(function (pieces, i) {
        var runs = pieces.map(function (pc) { return pc.num ? run(pc.t + '\u00a0', SANS, nf, 1.5) : run(pc.t, TEXT, tf); }).join('');
        return slack(W.para(runs, { exact: NATURAL, before: i ? 2 * HALF : HALF, after: i === lines.length - 1 ? HALF : 0 }, tf));
      }).join('') || W.para('');
    }
    function textXml(u, firstRef) {
      if (!m.verse) return proseXml();
      return u.lat.map(function (r, i) { var f = firstRef.v; firstRef.v = false; return verseLine(r, f, place(i, u.lat.length)); }).join('');
    }
    // English: 10pt on 15pt
    // English, line for line as the preview breaks it: before (pt) above the first line, after below the last
    var enAt = 0;
    function enPara(text, p) {
      p = p || {};
      var lines = (breaks && breaks.en[enAt++]) || [[{ t: text }]];
      var h = p.exact || 15;
      return lines.map(function (pieces, i) {
        var t = pieces.map(function (pc) { return pc.t; }).join('');
        return slack(W.para(run(t, SANS, ef), { exact: h, before: i ? 0 : p.before || 0, after: i === lines.length - 1 ? p.after || 0 : 0 }, ef));
      }).join('');
    }
    function englishXml(u, lineHeight) {
      if (u.en && m.verse) return u.en.map(function (r) { return enPara(r.t, { exact: lineHeight || 15 }); }).join('');
      return enPara(englishOf(u));
    }

    var embed = [
      { name: SERIF, family: 'roman', regular: FONT_DIR + 'Lora-Regular.ttf', bold: FONT_DIR + 'Lora-Bold.ttf' },
      { name: SANS, family: 'swiss', regular: FONT_DIR + 'DMSans-Regular.ttf', bold: FONT_DIR + 'DMSans-Bold.ttf' }
    ];
    if (greek) embed.push({ name: 'Noto Serif', family: 'roman', regular: FONT_DIR + 'NotoSerif-Regular.ttf' });

    return W.pack({
      margins: [tw(PAGE.top), tw(PAGE.right), tw(PAGE.bottom), tw(PAGE.left)],
      fontName: SANS,
      fonts: embed,
      size: 10,
      title: m.file,
      creator: 'Classicalia',
      body: function (ctx) {
        var x = '';
        var W_ = ctx.width;

        // the head: kicker, title and subtitle on the left, name and date on the right, a rule under both
        var kf = { size: 8.5, bold: true, caps: true, spacing: 0.51, color: MUTED };
        var hf = { size: 17, bold: true, color: INK };
        var sf = { size: 8.5, color: MUTED };
        var left = '';
        var kicker = [m.text, m.lang].filter(Boolean).join(' · ');
        // the sheet's text is set 1.55 to the line, as the preview's is
        if (kicker) left += W.para(run(kicker, SANS, kf), { exact: 8.5 * 1.55 }, kf);
        left += W.para(run(m.title, SERIF, hf), { before: 1.5, exact: 17 * 1.2 }, hf);
        if (m.sub) {
          var subLines = (breaks && breaks.sub[0]) || [[{ t: m.sub }]];
          left += subLines.map(function (pieces, i) {
            return slack(W.para(run(pieces.map(function (pc) { return pc.t; }).join(''), SANS, sf), { before: i ? 0 : 2.25, exact: 8.5 * 1.55 }, sf));
          }).join('');
        }
        var LABEL = 36 * PX;                                    // 'Name' and 'Date' at 9.5pt (34px on the sheet), and a little to spare
        var nameW = o.name ? LABEL + 6 * PX + tw(44) : 0;
        var cells = [{ xml: left, valign: 'bottom', margins: [0, 0, 8 * PX, 0], borders: borders(nil('top'), line('bottom', INK, 1.5)) }];
        if (o.name) {
          var lf = { size: 9.5, color: INK };
          var label = function (t) { return { xml: W.para(run(t, SANS, lf), { exact: 9.5 * 1.55 }, lf), valign: 'bottom', margins: [0, 6 * PX, 0, 0], borders: borders() }; };
          var blank = { xml: W.para('', { exact: 1 }, { size: 1 }), valign: 'bottom', margins: [0, 0, 0, 0], borders: borders(nil('top'), line('bottom', INK, 1)) };
          var nameTable = W.table([
            { cells: [label('Name'), blank], height: Math.round(9.5 * 1.55 * 20), exact: true },
            { cells: [{ xml: W.para('', { exact: 1 }, { size: 1 }), borders: borders(), margins: [0, 0, 0, 0] }, { xml: W.para('', { exact: 1 }, { size: 1 }), borders: borders(), margins: [0, 0, 0, 0] }], height: 8 * PX, exact: true },
            { cells: [label('Date'), blank], height: Math.round(9.5 * 1.55 * 20), exact: true }
          ], [LABEL + 6 * PX, tw(44)], { borders: borders(), margins: [0, 0, 0, 0] });
          cells.push({ xml: nameTable + W.para('', { exact: 1 }, { size: 1 }), valign: 'bottom', margins: [0, 0, 8 * PX, 18 * PX], borders: borders(nil('top'), line('bottom', INK, 1.5)) });
        }
        x += W.table([{ cells: cells }], o.name ? [W_ - nameW - 18 * PX, nameW + 18 * PX] : [W_], { borders: borders(), margins: [0, 0, 0, 0] });
        x += W.para('', { exact: 7.5 }, { size: 1 });           // 10px under the head

        // the table: a head row, then a row a unit (or a line, where the English goes line by line)
        var shares = sharesFor(m, side, o.notes);
        var widths = shares.map(function (s) { return Math.floor(W_ * s); });
        var heads = [m.lang];
        if (side) heads.push('English');
        if (o.notes) heads.push('Notes');
        var thf = { size: 8, bold: true, caps: true, spacing: 0.32, color: MUTED };
        function sideRule(i) { return i ? line('left', RULE, 1) : nil('left'); }
        var rows = [{ header: true, cells: heads.map(function (hd, i) {
          return { xml: W.para(run(hd, SANS, thf), { exact: 8 * 1.55 }, thf), margins: [4 * PX, 8 * PX, 4 * PX, 8 * PX], borders: borders(nil('top'), line('bottom', RULE_HEAD, 1), sideRule(i)) };
        }) }];
        var first = { v: true }, firstRow = true;
        function cell(xml, i, top, pad) {
          return { xml: xml, margins: pad, borders: borders(top && !firstRow ? line('top', RULE, 1) : nil('top'), nil('bottom'), sideRule(i)) };
        }
        var PAD = [6 * PX, 7 * PX, 6 * PX, 7 * PX];
        flowUnits(m, side).forEach(function (u) {
          if (side && m.verse && u.en && u.en.length === u.lat.length) {
            u.lat.forEach(function (r, i) {
              var f = first.v; first.v = false;
              var pad = [i === 0 ? 6 * PX : 0, 7 * PX, 0, 7 * PX];
              // the English level with its line: centred in the same box
              var enBefore = (BOX - 15) / 2;
              var cs = [cell(verseLine(r, f, 'only'), 0, i === 0, pad), cell(enPara(u.en[i].t, { before: enBefore }), 1, i === 0, pad)];
              if (o.notes) cs.push(cell(W.para(''), 2, i === 0, pad));
              rows.push({ cells: cs });
              firstRow = false;
            });
            return;
          }
          var cs = [cell(textXml(u, first), 0, true, PAD)];
          if (side) cs.push(cell(englishXml(u), 1, true, PAD));
          if (o.notes) cs.push(cell(W.para(''), cs.length, true, PAD));
          rows.push({ cells: cs });
          firstRow = false;
        });
        x += W.table(rows, widths, { borders: borders(), margins: [0, 0, 0, 0] });

        // the translation under the text: 8mm down, a rule, 5mm, the heading
        if (o.english && !side) {
          var h2 = { size: 13, bold: true, color: INK };
          x += W.para(run('Translation', SERIF, h2), { before: 8 / 25.4 * 72, after: 6, keepNext: true, border: line('top', RULE_HEAD, 1, 14) }, h2);
          if (m.verse) m.units.forEach(function (u) { x += englishXml(u, 15.5); });
          else x += enPara(allEnglish(m), { after: 6 });
        }
        var ff = { size: 7.5, color: FAINT };
        x += W.para(run('classicalia.co.uk', SANS, ff), { before: 9, exact: 7.5 * 1.55, align: 'right' }, ff);
        return x;
      }
    });
  }

  // ── the window: options, a preview, print and Word ──
  var ov = null, model = null, opts = null;
  function gapLabel(g) { return g < 1.9 ? 'Tight' : g < 2.9 ? 'Wide' : g < 4.1 ? 'Wider' : 'Widest'; }
  function render() {
    ov.querySelector('.ho-stage').innerHTML = sheetHtml(model, opts);
    var slider = ov.querySelector('[data-gap]');
    slider.value = gapOf(opts);
    ov.querySelector('[data-gap-out]').textContent = gapLabel(gapOf(opts));
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
      '<span class="ho-grp"><span class="ho-lab">Translation</span><span class="seg"><button class="btn" data-ho="layout" data-v="side">Beside the text</button><button class="btn" data-ho="layout" data-v="after">Under the text</button></span>' +
      '<button class="btn" data-ho="english">Include</button></span>' +
      '<label class="ho-grp ho-gap"><span class="ho-lab">Space between lines</span><input type="range" data-gap min="' + GAP.min + '" max="' + GAP.max + '" step="' + GAP.step + '"><output data-gap-out></output></label>' +
      '<button class="btn" data-ho="notes">Notes column</button></span>' +
      '<span class="ho-grp"><button class="btn" data-ho="name">Name and date</button></span>' +
      '<span class="ho-acts"><button class="btn navy" data-act="print">Print or save PDF</button><button class="btn line" data-act="word">Word</button><button class="btn line" data-act="close">Close</button></span>' +
      '</div><div class="ho-stage"></div>';
    document.body.appendChild(ov);
    // dragging the slider only respaces the sheet, so it follows the hand
    ov.querySelector('[data-gap]').addEventListener('input', function () {
      opts.gap = +this.value;
      var sheet = ov.querySelector('.ho-sheet');
      if (sheet) sheet.style.setProperty('--ho-lh', opts.gap);
      ov.querySelector('[data-gap-out]').textContent = gapLabel(opts.gap);
      store.set(opts);
    });
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
        loadWord().then(function (W) { return lineBreaks(model, opts).then(function (breaks) { return wordBlob(W, model, opts, breaks); }).then(function (blob) { W.download(blob, W.fileName(model.file + ' handout')); }); })
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
