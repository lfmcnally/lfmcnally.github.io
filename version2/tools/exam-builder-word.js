/* Exam builder: a Word copy of the paper.

   The preview is read page by page and each block on it is written out as
   the nearest thing Word has: a ruled line becomes a table row of the same
   height with a rule along its foot, a boxed source becomes a shaded
   one-cell table, and so on. Sizes are taken from the preview itself, so
   what Word lays out is what the preview showed, and each preview page
   starts a new page in Word.

   Everything is written here, with no library: a .docx is a zip of a few
   XML files, and the zip needs no compression to open. */
(function () {
  'use strict';

  var TW = 15;                 // twips in a CSS pixel (96 to the inch, 1440 twips)
  var EMU = 9525;              // EMUs in a CSS pixel
  var CM = 567;                // twips in a centimetre
  var PAGE_W = 11906, PAGE_H = 16838;
  var MARGIN_TB = Math.round(1.8 * CM), MARGIN_LR = Math.round(1.6 * CM);
  var WIDTH = PAGE_W - 2 * MARGIN_LR;   // the width of the writing on the page
  var LINE = 1.45;                       // the paper's line height
  var SLACK = 0.4 / 2.54 * 96;            // what the preview keeps spare at the foot of a page (px)

  var FONTS = {
    system: 'Arial', arial: 'Arial', verdana: 'Verdana', trebuchet: 'Trebuchet MS',
    times: 'Times New Roman', georgia: 'Georgia', palatino: 'Palatino Linotype',
    courier: 'Courier New', comic: 'Comic Sans MS'
  };

  /* ── XML ── */

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function px(n) { return Math.round(n * TW); }

  // Run properties. f carries size (pt), bold, italic, underline, caps,
  // colour and letter spacing (pt).
  function rPr(f) {
    var x = '';
    if (f.bold) x += '<w:b/><w:bCs/>';
    if (f.italic) x += '<w:i/><w:iCs/>';
    if (f.caps) x += '<w:caps/>';
    if (f.color) x += '<w:color w:val="' + f.color + '"/>';
    if (f.spacing) x += '<w:spacing w:val="' + Math.round(f.spacing * 20) + '"/>';
    if (f.size) x += '<w:sz w:val="' + Math.round(f.size * 2) + '"/><w:szCs w:val="' + Math.round(f.size * 2) + '"/>';
    if (f.underline) x += '<w:u w:val="single"/>';
    return x ? '<w:rPr>' + x + '</w:rPr>' : '';
  }

  function textRun(text, f) {
    return '<w:r>' + rPr(f) + '<w:t xml:space="preserve">' + esc(text) + '</w:t></w:r>';
  }

  function tabRun(f) { return '<w:r>' + rPr(f) + '<w:tab/></w:r>'; }
  function breakRun(f) { return '<w:r>' + rPr(f) + '<w:br/></w:r>'; }

  function extend(a, b) {
    var out = {}, k;
    for (k in a) out[k] = a[k];
    for (k in b) out[k] = b[k];
    return out;
  }

  /* A paragraph. p carries align, before/after (px), line (px, exact) or
     the line height worked out from the text size, indent (twips), tabs,
     borders, keepNext, keepLines, a bullet (numId) and frame. */
  function para(runs, p, f) {
    p = p || {};
    var size = (f && f.size) || p.size || 11.5;
    // The order of these is fixed by Word's schema.
    var x = '';
    if (p.keepNext) x += '<w:keepNext/>';
    if (p.keepLines) x += '<w:keepLines/>';
    if (p.frame) x += p.frame;
    if (p.numId) x += '<w:numPr><w:ilvl w:val="0"/><w:numId w:val="' + p.numId + '"/></w:numPr>';
    if (p.border) x += '<w:pBdr>' + p.border + '</w:pBdr>';
    if (p.tabs && p.tabs.length) {
      x += '<w:tabs>' + p.tabs.map(function (t) {
        return '<w:tab w:val="' + t.val + '" w:pos="' + Math.round(t.pos) + '"/>';
      }).join('') + '</w:tabs>';
    }
    var line = p.line != null
      ? ' w:line="' + Math.max(20, px(p.line)) + '" w:lineRule="exact"'
      : ' w:line="' + Math.round(size * (p.lh || LINE) * 20) + '" w:lineRule="atLeast"';
    x += '<w:spacing w:before="' + px(p.before || 0) + '" w:after="' + px(p.after || 0) + '"' + line + '/>';
    if (p.indent) {
      x += '<w:ind w:left="' + Math.round(p.indent.left || 0) + '" w:right="' + Math.round(p.indent.right || 0) + '"' +
           (p.indent.hanging ? ' w:hanging="' + Math.round(p.indent.hanging) + '"' : '') + '/>';
    }
    if (p.align) x += '<w:jc w:val="' + p.align + '"/>';
    x += rPr(f || { size: size });
    return '<w:p><w:pPr>' + x + '</w:pPr>' + (runs || '') + '</w:p>';
  }

  function border(side, widthPx, color, spacePx) {
    // Border widths are in eighths of a point; a CSS pixel is three quarters of one.
    return '<w:' + side + ' w:val="' + (color === 'dotted' ? 'dotted' : 'single') + '" w:sz="' +
           Math.max(2, Math.round(widthPx * 6)) + '" w:space="' + Math.round((spacePx || 0) * 0.75) +
           '" w:color="' + (color && color !== 'dotted' ? color : '000000') + '"/>';
  }

  /* An empty paragraph of a set height, standing in for a CSS margin. It is
     left as a marker at first: two margins that meet collapse into the
     larger, as they do in the preview, once the whole page is written. */
  function spacer(h, keepNext) {
    if (!h || h < 1) return '';
    return '<!--sp:' + h + ':' + (keepNext ? 1 : 0) + '-->';
  }

  function settleSpacers(xml) {
    return xml.replace(/(?:<!--sp:[\d.]+:[01]-->)+/g, function (run) {
      var h = 0, keep = true;
      run.replace(/<!--sp:([\d.]+):([01])-->/g, function (m, n, k) {
        h = Math.max(h, parseFloat(n));
        keep = keep && k === '1';
      });
      return para('', { line: h, keepNext: keep }, { size: 1 });
    });
  }

  // A rule across the page: a paragraph whose foot carries the border.
  function rule(widthPx, color, before, after, keepNext) {
    return para('', {
      line: 1, before: before, after: after, keepNext: keepNext,
      border: border('bottom', widthPx, color || '000000', 0)
    }, { size: 1 });
  }

  /* A table. rows is a list of { cells: [{ xml, width, borders, fill,
     margins, valign }], height, exact, cantSplit }. */
  function table(rows, o) {
    o = o || {};
    var widths = o.widths;
    var total = widths.reduce(function (a, b) { return a + b; }, 0);
    var x = '<w:tbl><w:tblPr><w:tblW w:w="' + Math.round(total) + '" w:type="dxa"/>' +
            (o.align ? '<w:jc w:val="' + o.align + '"/>' : '') +
            '<w:tblInd w:w="' + Math.round(o.indent || 0) + '" w:type="dxa"/>' +
            '<w:tblBorders>' + (o.borders || '') + '</w:tblBorders>' +
            '<w:tblLayout w:type="fixed"/>' +
            '<w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/>' +
            '<w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar>' +
            '<w:tblLook w:val="0000" w:firstRow="0" w:lastRow="0" w:firstColumn="0" w:lastColumn="0" w:noHBand="1" w:noVBand="1"/>' +
            '</w:tblPr><w:tblGrid>' +
            widths.map(function (w) { return '<w:gridCol w:w="' + Math.round(w) + '"/>'; }).join('') +
            '</w:tblGrid>';
    rows.forEach(function (row) {
      x += '<w:tr><w:trPr>' + (row.cantSplit !== false ? '<w:cantSplit/>' : '') +
           (row.height ? '<w:trHeight w:val="' + Math.max(20, px(row.height)) + '" w:hRule="' + (row.exact ? 'exact' : 'atLeast') + '"/>' : '') +
           '</w:trPr>';
      row.cells.forEach(function (cell, c) {
        var m = cell.margins;
        x += '<w:tc><w:tcPr><w:tcW w:w="' + Math.round(widths[c]) + '" w:type="dxa"/>' +
             (cell.borders ? '<w:tcBorders>' + cell.borders + '</w:tcBorders>' : '') +
             (cell.fill ? '<w:shd w:val="clear" w:color="auto" w:fill="' + cell.fill + '"/>' : '') +
             (m ? '<w:tcMar><w:top w:w="' + px(m[0]) + '" w:type="dxa"/><w:left w:w="' + px(m[3]) + '" w:type="dxa"/>' +
                  '<w:bottom w:w="' + px(m[2]) + '" w:type="dxa"/><w:right w:w="' + px(m[1]) + '" w:type="dxa"/></w:tcMar>' : '') +
             (cell.valign ? '<w:vAlign w:val="' + cell.valign + '"/>' : '') +
             '</w:tcPr>' + (cell.xml || para('', { line: 1 }, { size: 1 })) + '</w:tc>';
      });
      x += '</w:tr>';
    });
    return x + '</w:tbl>';
  }

  function allBorders(widthPx, color) {
    return ['top', 'left', 'bottom', 'right'].map(function (s) { return border(s, widthPx, color); }).join('');
  }

  /* ── reading the preview ── */

  function hasClass(el, name) { return el && el.classList && el.classList.contains(name); }

  // The page is drawn scaled down to fit the column, so positions read off
  // the screen are scaled back up to the page's own size.
  var scale = 1;
  function box(el, from) {
    var a = el.getBoundingClientRect(), b = from.getBoundingClientRect();
    return { x: (a.left - b.left) / scale, y: (a.top - b.top) / scale, w: a.width / scale, h: a.height / scale };
  }

  // The runs inside an element, keeping bold, italics and underlining, and
  // its line breaks. f is the formatting the element starts with.
  function inline(el, f) {
    var out = '';
    [].forEach.call(el.childNodes, function (node) {
      if (node.nodeType === 3) {
        var parts = node.nodeValue.split('\n');
        parts.forEach(function (part, n) {
          if (n) out += breakRun(f);
          if (part) out += textRun(part.replace(/ /g, ' '), f);
        });
        return;
      }
      if (node.nodeType !== 1) return;
      var tag = node.tagName.toLowerCase();
      if (tag === 'br') { out += breakRun(f); return; }
      if (tag === 'img' || hasClass(node, 'p-grip') || hasClass(node, 'rule')) return;
      var g = f;
      if (tag === 'strong' || tag === 'b') g = extend(f, { bold: true });
      if (tag === 'em' || tag === 'i') g = extend(f, { italic: true });
      if (tag === 'u') g = extend(f, { underline: true });
      out += inline(node, g);
    });
    return out;
  }

  /* ── the document ── */

  function Builder(opts) {
    this.font = FONTS[opts.font] || 'Arial';
    this.media = [];
    this.lineStyle = opts.lineStyle;
  }

  // A picture, at the size the preview drew it.
  Builder.prototype.picture = function (img, w, h) {
    var n = this.media.length + 1;
    var id = 'rIdImg' + n;
    this.media.push({ id: id, src: img.getAttribute('src'), n: n });
    var cx = Math.max(1, Math.round(w * EMU)), cy = Math.max(1, Math.round(h * EMU));
    return '<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0">' +
      '<wp:extent cx="' + cx + '" cy="' + cy + '"/><wp:docPr id="' + n + '" name="Picture ' + n + '"/>' +
      '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">' +
      '<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">' +
      '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">' +
      '<pic:nvPicPr><pic:cNvPr id="' + n + '" name="Picture ' + n + '"/><pic:cNvPicPr/></pic:nvPicPr>' +
      '<pic:blipFill><a:blip r:embed="' + id + '"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>' +
      '<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="' + cx + '" cy="' + cy + '"/></a:xfrm>' +
      '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic>' +
      '</wp:inline></w:drawing></w:r>';
  };

  /* Answer space: ruled lines, blank space or squared paper, as rows of a
     table at the preview's heights. prefix is the number beside a numbered
     answer. */
  Builder.prototype.answer = function (block, indent, prefix, keepNext) {
    var width = WIDTH - indent;
    var spans = [].filter.call(block.children, function (s) { return s.tagName.toLowerCase() === 'span'; });
    if (!spans.length) return '';
    var rows = [];
    var numW = prefix != null ? Math.round(0.85 * CM) : 0;
    var lineW = width - numW;
    var first = spans[0];

    if (hasClass(first, 'p-grid')) {
      var height = parseFloat(first.style.height) || first.offsetHeight || 24;
      var sq = 18.9;                                   // five millimetres
      var cols = Math.max(1, Math.floor(lineW / px(sq)));
      var count = Math.max(1, Math.round(height / sq));
      var widths = [];
      for (var c = 0; c < cols; c++) widths.push(px(sq));
      for (var r = 0; r < count; r++) {
        var cells = widths.map(function () {
          return { borders: allBorders(1, 'CCCCCC') };
        });
        rows.push({ cells: cells, height: sq, exact: true });
      }
      var grid = table(rows, { widths: widths, indent: indent + numW, borders: allBorders(1, '000000') });
      if (prefix != null) {
        grid = para(textRun(prefix, { size: 11.5 }), { indent: { left: indent }, keepNext: true }) + grid;
      }
      return grid;
    }

    spans.forEach(function (span, n) {
      var h = parseFloat(span.style.height) || span.offsetHeight || 24;
      var lineBorder = '';
      if (hasClass(span, 'p-line')) {
        lineBorder = hasClass(span, 'dotted') ? border('bottom', 1, 'dotted', 0).replace('w:color="000000"', 'w:color="666666"')
          : border('bottom', 1, hasClass(span, 'faint') ? 'AAAAAA' : '000000', 0);
      }
      var cells = [];
      if (prefix != null) {
        cells.push({ xml: para(n === 0 ? textRun(prefix, { size: 11.5 }) : '', { line: h }), valign: 'bottom' });
      }
      cells.push({ borders: lineBorder });
      rows.push({ cells: cells, height: h, exact: true });
    });
    return table(rows, { widths: prefix != null ? [numW, lineW] : [lineW], indent: indent });
  };

  Builder.prototype.block = function (el, ctx) {
    var self = this;
    ctx = ctx || {};
    var cls = el.classList;
    var tag = el.tagName.toLowerCase();

    if (hasClass(el, 'p-break') || hasClass(el, 'p-page-foot')) return '';

    if (hasClass(el, 'p-crest') || hasClass(el, 'p-foot')) {
      var img = el.querySelector('img');
      if (!img || !img.offsetWidth) return '';
      var pic = this.picture(img, img.offsetWidth, img.offsetHeight);
      if (hasClass(el, 'p-foot')) {
        // The Classicalia footer sits at the foot of the last page.
        return para(pic, {
          align: 'center',
          frame: '<w:framePr w:w="' + WIDTH + '" w:hAnchor="margin" w:vAnchor="margin" w:xAlign="center" w:yAlign="bottom"/>'
        });
      }
      return para(pic, { align: 'center', after: 12 });
    }

    if (hasClass(el, 'p-head') || hasClass(el, 'p-cover-head')) {
      var cover = hasClass(el, 'p-cover-head');
      var inner = [].map.call(el.children, function (child) {
        return self.block(child, { align: cover ? 'center' : null, cover: cover, keepNext: true });
      }).join('');
      return inner + rule(2, '000000', cover ? 16 : 12, 0) + (cover ? '' : spacer(16));
    }

    if (hasClass(el, 'p-cover')) {
      return [].map.call(el.children, function (child) { return self.block(child, { cover: true }); }).join('');
    }

    if (hasClass(el, 'p-school')) {
      return para(inline(el, { size: 10.5, caps: true, spacing: 0.84 }), { align: ctx.align, after: 6, keepNext: true }, { size: 10.5 });
    }
    if (hasClass(el, 'p-title')) {
      var ts = ctx.cover ? 26 : 19;
      return para(inline(el, { size: ts, bold: true }), {
        align: ctx.align, before: ctx.cover ? 6 : 0, after: 4, keepNext: true, lh: 1.2
      }, { size: ts });
    }
    if (hasClass(el, 'p-subtitle')) {
      var ss = parseFloat(el.style.fontSize) || (ctx.cover ? 15 : 12.5);
      return para(inline(el, { size: ss }), { align: ctx.align, after: 10, keepNext: true }, { size: ss });
    }

    // A row of facts or of name lines: each piece starts where the preview
    // put it, and a written-on line runs as far as the preview drew it.
    if (hasClass(el, 'p-facts') || hasClass(el, 'p-fields')) {
      return this.fieldRow(el, 11, 10, 0);
    }
    if (hasClass(el, 'p-cover-facts')) {
      return spacer(26) + [].map.call(el.children, function (d) {
        return self.fieldRow(d, 12, 5, 5, true);
      }).join('');
    }
    if (hasClass(el, 'p-cover-fields')) {
      return spacer(30) + [].map.call(el.children, function (d) {
        return self.fieldRow(d, 12.5, 0, 20, true);
      }).join('');
    }

    if (hasClass(el, 'p-cover-note')) {
      // The preview's cover stops a few millimetres short of the page's foot.
      return para(inline(el, { size: 12, bold: true }), {
        align: 'center', after: SLACK,
        frame: '<w:framePr w:w="' + WIDTH + '" w:hAnchor="margin" w:vAnchor="margin" w:xAlign="center" w:yAlign="bottom"/>'
      }, { size: 12 });
    }

    if (hasClass(el, 'p-instr')) {
      var title = el.querySelector('.p-instr-title');
      var xml = title ? para(inline(title, { size: 10.5, bold: true }), { after: 5 }, { size: 10.5 }) : '';
      [].forEach.call(el.querySelectorAll('li'), function (li) {
        xml += para(inline(li, { size: 10.5 }), { before: 2, after: 2, numId: 1 }, { size: 10.5 });
      });
      var instr = table([{ cells: [{ xml: xml, margins: [10, 12, 10, 12] }] }], {
        widths: [WIDTH], borders: allBorders(1, '000000')
      });
      return (ctx.cover ? spacer(26) : '') + instr + spacer(18);
    }

    if (hasClass(el, 'p-grid-marks')) return this.markGrid(el);

    if (hasClass(el, 'p-runhead')) {
      return para(inline(el, { size: 10, caps: true, spacing: 0.6 }), { keepNext: true }, { size: 10 }) +
             rule(1, '000000', 6, 0) + spacer(18);
    }

    if (hasClass(el, 'p-section')) {
      var h = el.querySelector('.p-section-title');
      var note = el.querySelector('.p-section-note');
      return spacer(22, true) +
        para(inline(h, { size: 13, bold: true, caps: true, spacing: 0.78 }), { keepNext: true }, { size: 13 }) +
        rule(1, '000000', 4, 0, true) +
        (note ? para(inline(note, { size: 10.5, italic: true }), { before: 6, keepNext: true }, { size: 10.5 }) : '') +
        spacer(12, true);
    }

    if (hasClass(el, 'p-section-total')) {
      return spacer(10, true) + rule(1, '000000', 0, 0, true) +
        para(inline(el, { size: 10.5, bold: true }), { align: 'right', before: 5 }, { size: 10.5 });
    }

    if (hasClass(el, 'p-stimulus')) return this.stimulus(el);
    if (hasClass(el, 'p-q')) return this.question(el);

    if (hasClass(el, 'p-extra')) {
      var out = '';
      [].forEach.call(el.children, function (child) {
        if (hasClass(child, 'p-extra-head')) {
          out += para(inline(child, { size: 11.5, bold: true }), { after: 4, keepNext: true });
        } else if (hasClass(child, 'p-extra-note')) {
          out += para(inline(child, { size: 9.5, italic: true }), { after: 12, keepNext: true }, { size: 9.5 });
        } else if (hasClass(child, 'p-answer')) {
          out += self.answer(child, 0);
        }
      });
      return out;
    }

    if (hasClass(el, 'p-end')) {
      return spacer(26, true) + rule(2, '000000', 0, 0, true) +
        para(inline(el, { size: 11, bold: true }), { align: 'center', before: 10 }, { size: 11 });
    }

    if (hasClass(el, 'p-ms-row')) return this.schemeRow(el);

    // Anything else is written as plain text.
    var text = el.textContent.trim();
    return text ? para(inline(el, { size: 11.5 }), { after: 8 }) : '';
  };

  Builder.prototype.fieldRow = function (row, size, before, after, single) {
    var f = { size: size };
    var pieces = single ? [row] : [].slice.call(row.children);
    if (!pieces.length) return '';
    var lines = [];
    pieces.forEach(function (piece) {
      var b = box(piece, row);
      var line = lines.length && Math.abs(lines[lines.length - 1].y - b.y) < 4 ? lines[lines.length - 1] : null;
      if (!line) { line = { y: b.y, pieces: [] }; lines.push(line); }
      line.pieces.push(piece);
    });

    return lines.map(function (line, n) {
      var runs = '', tabs = [];
      line.pieces.forEach(function (piece, i) {
        var b = box(piece, row);
        if (i > 0) { tabs.push({ val: 'left', pos: px(b.x) }); runs += tabRun(f); }
        [].forEach.call(piece.childNodes, function (node) {
          if (node.nodeType === 1 && hasClass(node, 'rule')) {
            var r = box(node, row);
            tabs.push({ val: 'left', pos: px(r.x + r.w) });
            runs += tabRun(extend(f, { underline: true }));
          } else if (node.nodeType === 3) {
            if (node.nodeValue) runs += textRun(node.nodeValue, f);
          } else if (node.nodeType === 1) {
            runs += inline(node, hasClass(node, 'rule') ? f : extend(f, node.tagName.toLowerCase() === 'strong' ? { bold: true } : {}));
          }
        });
      });
      return para(runs, {
        before: n === 0 ? before : 4, after: n === lines.length - 1 ? after : 0, tabs: tabs, keepNext: true
      }, f);
    }).join('');
  };

  Builder.prototype.markGrid = function (el) {
    var self = this;
    var out = spacer(26, true);
    var title = el.querySelector('.p-grid-marks-title');
    if (title) out += para(inline(title, { size: 10.5, bold: true }), { after: 6, keepNext: true }, { size: 10.5 });
    [].forEach.call(el.querySelectorAll('table'), function (tbl) {
      var trs = [].slice.call(tbl.rows);
      if (!trs.length) return;
      var widths = [].map.call(trs[0].cells, function (cell) { return px(cell.offsetWidth || 57); });
      var rows = trs.map(function (tr) {
        return {
          height: tr.offsetHeight || 30,
          cells: [].map.call(tr.cells, function (cell) {
            var head = cell.tagName.toLowerCase() === 'th' && !hasClass(cell, 'p-grid-name') || hasClass(cell.parentNode, 'p-grid-total');
            var left = hasClass(cell, 'p-grid-name') || cell.style.textAlign === 'left';
            var bold = cell.tagName.toLowerCase() === 'th' || hasClass(cell.parentNode, 'p-grid-total');
            return {
              xml: para(inline(cell, { size: 10.5, bold: bold || head }), { align: left ? 'left' : 'center' }, { size: 10.5 }),
              borders: allBorders(1, '000000'), margins: [5, 4, 5, 4], valign: 'center'
            };
          })
        };
      });
      out += table(rows, { widths: widths }) + spacer(6);
    });
    return out;
  };

  Builder.prototype.stimulus = function (el) {
    var self = this;
    var xml = '';
    var size = 10.5;
    [].forEach.call(el.children, function (child) {
      if (hasClass(child, 'p-stim-title')) {
        xml += para(inline(child, { size: size, bold: true }), { after: 8, keepNext: true }, { size: size });
      } else if (hasClass(child, 'p-lead')) {
        if (hasClass(child, 'is-numbered')) {
          var lines = child.querySelectorAll('.p-src-line');
          [].forEach.call(lines, function (line, n) {
            var num = line.querySelector('.p-src-num');
            var runs = tabRun({ size: size }) + (num && num.textContent ? textRun(num.textContent, { size: 8.5, color: '555555' }) : '') +
                       tabRun({ size: size });
            var copy = line.cloneNode(true);
            var stray = copy.querySelector('.p-src-num');
            if (stray) stray.parentNode.removeChild(stray);
            runs += inline(copy, { size: size });
            xml += para(runs, {
              indent: { left: Math.round(1.15 * CM), hanging: Math.round(1.15 * CM) },
              tabs: [{ val: 'right', pos: Math.round(0.85 * CM) }, { val: 'left', pos: Math.round(1.15 * CM) }],
              after: n === lines.length - 1 ? 10 : 0
            }, { size: size });
          });
        } else {
          xml += para(inline(child, { size: size }), { after: 10 }, { size: size });
        }
      } else if (hasClass(child, 'p-figures')) {
        xml += self.figures(child);
      } else if (hasClass(child, 'p-vocab')) {
        xml += self.vocab(child);
      }
    });
    // The box's inner width, less its padding and border.
    var widths = [WIDTH];
    return table([{ cells: [{ xml: xml, fill: 'F7F7F7', margins: [11, 13, 11, 13] }] }], {
      widths: widths, borders: allBorders(1, '000000')
    }) + spacer(14);
  };

  Builder.prototype.figures = function (wrap) {
    var self = this;
    var figs = [].slice.call(wrap.querySelectorAll('.p-figure'));
    var inner = WIDTH - 2 * px(13);
    var cells = figs.map(function (fig) {
      var img = fig.querySelector('img');
      var frame = fig.querySelector('.p-frame');
      var cap = fig.querySelector('.p-caption');
      var colW = fig.offsetWidth || 1;
      var shift = (parseFloat(frame && frame.style.left) || 0) / 100 * colW;   // from the centre, in px
      var indent = shift > 0 ? { left: px(shift * 2) } : shift < 0 ? { right: px(-shift * 2) } : null;
      var x = img && img.offsetWidth ? para(self.picture(img, img.offsetWidth, img.offsetHeight), { align: 'center', indent: indent }) : '';
      if (cap) x += para(inline(cap, { size: 10.5 }), { align: 'center', before: 7, indent: indent }, { size: 10.5 });
      return { xml: x || para(''), valign: 'bottom' };
    });
    if (cells.length === 1) return cells[0].xml;
    var gap = px(14);
    var colW = Math.floor((inner - gap * (cells.length - 1)) / cells.length);
    var widths = [], row = [];
    cells.forEach(function (cell, n) {
      if (n) { widths.push(gap); row.push({}); }
      widths.push(colW); row.push(cell);
    });
    return table([{ cells: row }], { widths: widths }) + para('', { line: 1 }, { size: 1 });
  };

  Builder.prototype.vocab = function (el) {
    var head = el.querySelector('.p-vocab-head');
    var entries = [].slice.call(el.querySelectorAll('li'));
    var out = rule(1, '999999', 10, 7);
    if (head) out += para(inline(head, { size: 9, bold: true, caps: true, spacing: 0.54 }), { after: 4, keepNext: true }, { size: 9 });
    // Two columns, filled down the first before the second, as the preview sets them.
    var half = Math.ceil(entries.length / 2);
    var cols = [entries.slice(0, half), entries.slice(half)];
    var inner = WIDTH - 2 * px(13);
    var gap = px(20);
    var colW = Math.floor((inner - gap) / 2);
    var cell = function (list) {
      return { xml: list.map(function (li) { return para(inline(li, { size: 9.5 }), { after: 2 }, { size: 9.5 }); }).join('') || para('') };
    };
    return out + table([{ cells: [cell(cols[0]), {}, cell(cols[1])], cantSplit: false }], { widths: [colW, gap, colW] }) +
      para('', { line: 1 }, { size: 1 });
  };

  Builder.prototype.question = function (el) {
    var self = this;
    var level = hasClass(el, 'lvl-3') ? 3 : hasClass(el, 'lvl-2') ? 2 : 1;
    var base = level === 3 ? Math.round(2.2 * CM) : level === 2 ? Math.round(1.1 * CM) : 0;
    var numCol = Math.round(1.05 * CM) + px(8);
    var textLeft = base + numCol;
    var num = el.querySelector('.p-q-num');
    var text = el.querySelector('.p-q-text');
    var marks = text && text.querySelector('.p-marks');
    var body = text && text.querySelector('.q-edit');

    var runs = textRun(num ? num.textContent : '', { size: 11.5, bold: level === 1 }) + tabRun({ size: 11.5 }) +
               (body ? inline(body, { size: 11.5 }) : '');
    var tabs = [{ val: 'left', pos: textLeft }];
    if (marks) {
      tabs.push({ val: 'right', pos: WIDTH });
      runs += tabRun({ size: 11.5 }) + textRun(marks.textContent, { size: 11.5, bold: true });
    }
    var main = el.querySelector('.p-q-main');
    var answers = [].filter.call(main ? main.children : [], function (c) {
      return hasClass(c, 'p-answer') || hasClass(c, 'p-answer-slots');
    });
    var out = para(runs, { indent: { left: textLeft, hanging: numCol }, tabs: tabs, keepNext: answers.length > 0, keepLines: true });

    answers.forEach(function (a) {
      out += spacer(8, true);
      if (hasClass(a, 'p-answer')) {
        out += self.answer(a, textLeft);
        return;
      }
      [].forEach.call(a.querySelectorAll('.p-slot'), function (slot, n) {
        if (n) out += spacer(10, true);
        var label = slot.querySelector('.p-slot-num');
        var block = slot.querySelector('.p-answer');
        if (block) {
          out += self.answer(block, textLeft, label ? label.textContent : '');
        } else if (label) {
          out += para(textRun(label.textContent, { size: 11.5 }), { indent: { left: textLeft } });
        }
      });
    });
    return out + spacer(14);
  };

  Builder.prototype.schemeRow = function (el) {
    var num = el.querySelector('.p-ms-num');
    var q = el.querySelector('.p-ms-q');
    var a = el.querySelector('.p-ms-a');
    var marks = el.querySelector('.p-ms-marks');
    var numW = Math.round(1.05 * CM) + px(10);
    var marksW = Math.max(px(40), px((marks && marks.offsetWidth) || 0) + px(10));
    var mainW = WIDTH - numW - marksW;
    var blank = a && hasClass(a, 'is-blank');
    var main = (q ? para(inline(q, { size: 10, color: '444444' }), {}, { size: 10 }) : '') +
               (a ? para(inline(a, { size: 11.5, italic: blank, color: blank ? '999999' : null }), { before: 3 }) : '');
    var bottom = border('bottom', 1, 'DDDDDD', 0);
    return table([{
      cells: [
        { xml: para(textRun(num ? num.textContent : '', { size: 11.5, bold: true })), borders: bottom, margins: [0, 0, 6, 0] },
        { xml: main || para(''), borders: bottom, margins: [0, 10, 6, 0] },
        { xml: para(textRun(marks ? marks.textContent : '', { size: 11.5, bold: true }), { align: 'right' }), borders: bottom, margins: [0, 0, 6, 0] }
      ]
    }], { widths: [numW, mainW, marksW] }) + spacer(6);
  };

  /* ── the footer: page numbers and "Turn over" ── */

  function field(code, shown, f) {
    return '<w:r>' + rPr(f) + '<w:fldChar w:fldCharType="begin"/></w:r>' +
           '<w:r>' + rPr(f) + '<w:instrText xml:space="preserve"> ' + code + ' </w:instrText></w:r>' +
           '<w:r>' + rPr(f) + '<w:fldChar w:fldCharType="separate"/></w:r>' +
           textRun(shown, f) +
           '<w:r>' + rPr(f) + '<w:fldChar w:fldCharType="end"/></w:r>';
  }

  function footerXml(pages, last) {
    var f = { size: 8.5, color: '444444' };
    var b = extend(f, { bold: true });
    // Every page but the last says to turn over; the last has a footer of its own.
    var turn = textRun('Turn over \u25BA', b);
    var p = para(tabRun(f) + textRun('Page ', f) + field('PAGE', '1', f) + textRun(' of ', f) +
                 field('NUMPAGES', String(pages), f) + (last ? '' : tabRun(f) + turn), {
      tabs: [{ val: 'center', pos: WIDTH / 2 }, { val: 'right', pos: WIDTH }]
    }, f);
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:ftr ' + NS + '>' + p + '</w:ftr>';
  }

  var NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ' +
           'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ' +
           'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" ' +
           'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" ' +
           'xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';

  function stylesXml(font) {
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
      '<w:docDefaults><w:rPrDefault><w:rPr>' +
      '<w:rFonts w:ascii="' + esc(font) + '" w:hAnsi="' + esc(font) + '" w:eastAsia="' + esc(font) + '" w:cs="' + esc(font) + '"/>' +
      '<w:sz w:val="23"/><w:szCs w:val="23"/><w:lang w:val="en-GB"/></w:rPr></w:rPrDefault>' +
      '<w:pPrDefault><w:pPr><w:spacing w:before="0" w:after="0"/></w:pPr></w:pPrDefault></w:docDefaults>' +
      '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>' +
      '<w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/>' +
      '<w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/>' +
      '<w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style>' +
      '</w:styles>';
  }

  var NUMBERING = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
    '<w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="singleLevel"/>' +
    '<w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/>' +
    '<w:pPr><w:ind w:left="255" w:hanging="255"/></w:pPr></w:lvl></w:abstractNum>' +
    '<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num></w:numbering>';

  var SETTINGS = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
    '<w:defaultTabStop w:val="720"/><w:compat><w:compatSetting w:name="compatibilityMode" ' +
    'w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>';

  /* ── pictures to bytes ── */

  function dataUrlBytes(url) {
    var comma = url.indexOf(',');
    var bin = atob(url.slice(comma + 1));
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  // Word takes PNG, JPEG and GIF; anything else is redrawn as a PNG.
  function pictureBytes(src) {
    var m = /^data:image\/(png|jpeg|jpg|gif)[;,]/i.exec(src);
    if (m) {
      return Promise.resolve({ bytes: dataUrlBytes(src), ext: m[1].toLowerCase() === 'jpg' ? 'jpeg' : m[1].toLowerCase() });
    }
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        try {
          var canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth || 1;
          canvas.height = img.naturalHeight || 1;
          canvas.getContext('2d').drawImage(img, 0, 0);
          resolve({ bytes: dataUrlBytes(canvas.toDataURL('image/png')), ext: 'png' });
        } catch (e) { reject(e); }
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  /* ── the zip ── */

  var CRC_TABLE = (function () {
    var t = [];
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();

  function crc32(bytes) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  function utf8(s) { return new TextEncoder().encode(s); }

  // A zip with every file stored as it is, which is all a .docx needs.
  function zip(files) {
    var parts = [], central = [], offset = 0;
    files.forEach(function (file) {
      var name = utf8(file.name);
      var data = typeof file.data === 'string' ? utf8(file.data) : file.data;
      var crc = crc32(data);
      var local = new DataView(new ArrayBuffer(30));
      local.setUint32(0, 0x04034b50, true);
      local.setUint16(4, 20, true);
      local.setUint16(6, 0x0800, true);          // names are UTF-8
      local.setUint16(8, 0, true);               // stored
      local.setUint16(10, 0, true);
      local.setUint16(12, 0x21, true);           // 1 January 1980
      local.setUint32(14, crc, true);
      local.setUint32(18, data.length, true);
      local.setUint32(22, data.length, true);
      local.setUint16(26, name.length, true);
      local.setUint16(28, 0, true);
      parts.push(new Uint8Array(local.buffer), name, data);

      var entry = new DataView(new ArrayBuffer(46));
      entry.setUint32(0, 0x02014b50, true);
      entry.setUint16(4, 20, true);
      entry.setUint16(6, 20, true);
      entry.setUint16(8, 0x0800, true);
      entry.setUint16(10, 0, true);
      entry.setUint16(12, 0, true);
      entry.setUint16(14, 0x21, true);
      entry.setUint32(16, crc, true);
      entry.setUint32(20, data.length, true);
      entry.setUint32(24, data.length, true);
      entry.setUint16(28, name.length, true);
      entry.setUint32(42, offset, true);
      central.push(new Uint8Array(entry.buffer), name);
      offset += 30 + name.length + data.length;
    });
    var size = central.reduce(function (n, p) { return n + p.length; }, 0);
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true);
    end.setUint16(8, files.length, true);
    end.setUint16(10, files.length, true);
    end.setUint32(12, size, true);
    end.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [new Uint8Array(end.buffer)]),
      { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  }

  /* ── putting it together ── */

  // pages: the preview's page elements. opts: font, pageFoot (number the
  // pages), pageCount, title.
  function build(pages, opts) {
    var b = new Builder(opts);
    var first = pages[0];
    scale = first && first.offsetWidth ? (first.getBoundingClientRect().width / first.offsetWidth) || 1 : 1;

    var withFoot = opts.pageFoot && opts.pageCount > 1;
    // The foot of the page keeps the same room the preview kept for it.
    var bottom = MARGIN_TB + (withFoot ? px(22) : 0);
    function sectPr(footer) {
      return '<w:sectPr>' + (footer ? '<w:footerReference w:type="default" r:id="' + footer + '"/>' : '') +
        '<w:pgSz w:w="' + PAGE_W + '" w:h="' + PAGE_H + '"/>' +
        '<w:pgMar w:top="' + MARGIN_TB + '" w:right="' + MARGIN_LR + '" w:bottom="' + bottom + '" w:left="' + MARGIN_LR +
        '" w:header="709" w:footer="' + MARGIN_TB + '" w:gutter="0"/></w:sectPr>';
    }
    var tiny = '<w:spacing w:before="0" w:after="0" w:line="20" w:lineRule="exact"/><w:rPr><w:sz w:val="2"/></w:rPr>';

    var body = '';
    [].forEach.call(pages, function (page, n) {
      if (n && withFoot && n === pages.length - 1) {
        // The last page is a section of its own, so its foot can leave out
        // "Turn over".
        body += '<w:p><w:pPr>' + tiny.replace('<w:rPr>', sectPr('rIdFooter') + '<w:rPr>') + '</w:pPr></w:p>';
      } else if (n) {
        // Each preview page starts a new page in Word too.
        body += '<w:p><w:pPr>' + tiny + '</w:pPr><w:r><w:rPr><w:sz w:val="2"/></w:rPr><w:br w:type="page"/></w:r></w:p>';
      }
      [].forEach.call(page.children, function (child) { body += b.block(child); });
    });
    body = settleSpacers(body);

    var lastFooter = withFoot ? (pages.length > 1 ? 'rIdFooterLast' : 'rIdFooter') : null;
    var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ' + NS + '><w:body>' +
              body + sectPr(lastFooter) + '</w:body></w:document>';

    return Promise.all(b.media.map(function (m) {
      return pictureBytes(m.src).then(function (r) { m.bytes = r.bytes; m.ext = r.ext; }, function () { m.bytes = null; });
    })).then(function () {
      var media = b.media.filter(function (m) { return m.bytes; });
      // A picture that could not be read is left out rather than spoiling the file.
      b.media.forEach(function (m) {
        if (!m.bytes) doc = doc.replace(new RegExp('<w:r><w:drawing>(?:(?!</w:drawing>).)*r:embed="' + m.id + '"(?:(?!</w:drawing>).)*</w:drawing></w:r>'), '');
      });
      var rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '<Relationship Id="rIdNumbering" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>' +
        '<Relationship Id="rIdSettings" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>' +
        (withFoot ? '<Relationship Id="rIdFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>' +
                    '<Relationship Id="rIdFooterLast" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer2.xml"/>' : '') +
        media.map(function (m) {
          return '<Relationship Id="' + m.id + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image' + m.n + '.' + m.ext + '"/>';
        }).join('') + '</Relationships>';
      var types = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="xml" ContentType="application/xml"/>' +
        '<Default Extension="png" ContentType="image/png"/><Default Extension="jpeg" ContentType="image/jpeg"/>' +
        '<Default Extension="gif" ContentType="image/gif"/>' +
        '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
        '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>' +
        '<Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>' +
        '<Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>' +
        (withFoot ? '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' +
                    '<Override PartName="/word/footer2.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' : '') +
        '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>' +
        '</Types>';
      var rootRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>' +
        '</Relationships>';
      var core = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" ' +
        'xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" ' +
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
        '<dc:title>' + esc(opts.title || 'Exam paper') + '</dc:title><dc:creator>Classicalia exam builder</dc:creator>' +
        '<dcterms:created xsi:type="dcterms:W3CDTF">' + new Date().toISOString().replace(/\.\d+Z$/, 'Z') + '</dcterms:created>' +
        '</cp:coreProperties>';

      var files = [
        { name: '[Content_Types].xml', data: types },
        { name: '_rels/.rels', data: rootRels },
        { name: 'docProps/core.xml', data: core },
        { name: 'word/document.xml', data: doc },
        { name: 'word/styles.xml', data: stylesXml(b.font) },
        { name: 'word/numbering.xml', data: NUMBERING },
        { name: 'word/settings.xml', data: SETTINGS },
        { name: 'word/_rels/document.xml.rels', data: rels }
      ];
      if (withFoot) {
        files.push({ name: 'word/footer1.xml', data: footerXml(opts.pageCount, false) });
        files.push({ name: 'word/footer2.xml', data: footerXml(opts.pageCount, true) });
      }
      media.forEach(function (m) { files.push({ name: 'word/media/image' + m.n + '.' + m.ext, data: m.bytes }); });
      return zip(files);
    });
  }

  window.ExamBuilderWord = { build: build };
})();
