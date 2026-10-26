/* Classicalia: writing a Word (.docx) file in the browser.

   Shared by the classroom tools that offer a Word download. A .docx is a
   zip of a few XML files, and the zip needs no compression to open, so it
   is all written here with no library.

   ClassicaliaWord.pack() puts a document together from its body XML.
   ClassicaliaWord.fromSheet() reads a simple printed sheet (a boxed title,
   a line of instructions, a table, a score box) straight from the preview,
   for the Do Now and Look, cover, write, check builders. */
(function () {
  'use strict';

  var CM = 567;                 // twips in a centimetre
  var TW = 15;                  // twips in a CSS pixel (96 to the inch)
  var EMU_CM = 360000;          // EMUs in a centimetre

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

  function extend(a, b) {
    var out = {}, k;
    for (k in a) out[k] = a[k];
    for (k in b) out[k] = b[k];
    return out;
  }

  // Run properties: size (pt), bold, italic, underline, caps, colour, spacing (pt).
  function rPr(f) {
    f = f || {};
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

  /* A paragraph. p carries align, before/after (pt), exact (a fixed line
     height in pt), keepNext, keepLines, bullet, tabs [{val, pos}] and
     border (the inside of a w:pBdr). f is the text's formatting. */
  function para(runs, p, f) {
    p = p || {};
    f = f || {};
    var size = f.size || 11;
    var x = '';
    if (p.keepNext) x += '<w:keepNext/>';
    if (p.keepLines) x += '<w:keepLines/>';
    if (p.bullet) x += '<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>';
    if (p.border) x += '<w:pBdr>' + p.border + '</w:pBdr>';
    if (p.tabs) {
      x += '<w:tabs>' + p.tabs.map(function (t) {
        return '<w:tab w:val="' + t.val + '" w:pos="' + Math.round(t.pos) + '"/>';
      }).join('') + '</w:tabs>';
    }
    var line = p.exact != null
      ? ' w:line="' + Math.max(20, Math.round(p.exact * 20)) + '" w:lineRule="exact"'
      : ' w:line="' + Math.round(size * 1.3 * 20) + '" w:lineRule="atLeast"';
    x += '<w:spacing w:before="' + Math.round((p.before || 0) * 20) + '" w:after="' + Math.round((p.after || 0) * 20) + '"' + line + '/>';
    if (p.align) x += '<w:jc w:val="' + p.align + '"/>';
    x += rPr(f);
    return '<w:p><w:pPr>' + x + '</w:pPr>' + (runs || '') + '</w:p>';
  }

  // An empty paragraph of a set height (pt): space between blocks, and the
  // thing that keeps two tables from running together into one.
  function gap(pt) {
    return para('', { exact: pt || 1 }, { size: 1 });
  }

  // One side of a border. o: { width (px), style, color }.
  function border(side, o) {
    o = o || {};
    // Border widths are in eighths of a point; a CSS pixel is three quarters of one.
    return '<w:' + side + ' w:val="' + (o.style || 'single') + '" w:sz="' + Math.max(2, Math.round((o.width || 1) * 6)) +
           '" w:space="0" w:color="' + (o.color || '000000') + '"/>';
  }

  function boxBorders(o, inside) {
    var sides = ['top', 'left', 'bottom', 'right'];
    if (inside) sides.push('insideH', 'insideV');
    return sides.map(function (s) { return border(s, o); }).join('');
  }

  /* A table. rows: [{ cells: [{ xml, fill, span, borders, valign, margins }],
     height (twips), exact, header, cantSplit }]. widths in twips.
     o: { borders (inside of w:tblBorders), margins [t, r, b, l] in twips, align }. */
  function table(rows, widths, o) {
    o = o || {};
    var m = o.margins || [85, 113, 85, 113];
    var total = widths.reduce(function (a, b) { return a + b; }, 0);
    var x = '<w:tbl><w:tblPr><w:tblW w:w="' + Math.round(total) + '" w:type="dxa"/>' +
            (o.align ? '<w:jc w:val="' + o.align + '"/>' : '') +
            '<w:tblBorders>' + (o.borders != null ? o.borders : boxBorders({}, true)) + '</w:tblBorders>' +
            '<w:tblLayout w:type="fixed"/>' +
            '<w:tblCellMar><w:top w:w="' + m[0] + '" w:type="dxa"/><w:left w:w="' + m[3] + '" w:type="dxa"/>' +
            '<w:bottom w:w="' + m[2] + '" w:type="dxa"/><w:right w:w="' + m[1] + '" w:type="dxa"/></w:tblCellMar>' +
            '<w:tblLook w:val="0000" w:firstRow="0" w:lastRow="0" w:firstColumn="0" w:lastColumn="0" w:noHBand="1" w:noVBand="1"/>' +
            '</w:tblPr><w:tblGrid>' +
            widths.map(function (w) { return '<w:gridCol w:w="' + Math.round(w) + '"/>'; }).join('') + '</w:tblGrid>';
    rows.forEach(function (row) {
      x += '<w:tr><w:trPr>' + (row.cantSplit !== false ? '<w:cantSplit/>' : '') +
           (row.height ? '<w:trHeight w:val="' + Math.max(20, Math.round(row.height)) + '" w:hRule="' + (row.exact ? 'exact' : 'atLeast') + '"/>' : '') +
           (row.header ? '<w:tblHeader/>' : '') + '</w:trPr>';
      var col = 0;
      row.cells.forEach(function (cell) {
        var span = cell.span || 1;
        var w = 0;
        for (var i = 0; i < span; i++) w += widths[col + i] || 0;
        col += span;
        var cm = cell.margins;
        x += '<w:tc><w:tcPr><w:tcW w:w="' + Math.round(w) + '" w:type="dxa"/>' +
             (span > 1 ? '<w:gridSpan w:val="' + span + '"/>' : '') +
             (cell.borders ? '<w:tcBorders>' + cell.borders + '</w:tcBorders>' : '') +
             (cell.fill ? '<w:shd w:val="clear" w:color="auto" w:fill="' + cell.fill + '"/>' : '') +
             (cm ? '<w:tcMar><w:top w:w="' + Math.round(cm[0]) + '" w:type="dxa"/><w:left w:w="' + Math.round(cm[3]) + '" w:type="dxa"/>' +
                   '<w:bottom w:w="' + Math.round(cm[2]) + '" w:type="dxa"/><w:right w:w="' + Math.round(cm[1]) + '" w:type="dxa"/></w:tcMar>' : '') +
             (cell.valign ? '<w:vAlign w:val="' + cell.valign + '"/>' : '') +
             '</w:tcPr>' + (cell.xml || para('')) + '</w:tc>';
      });
      x += '</w:tr>';
    });
    return x + '</w:tbl>';
  }

  /* ── text from HTML ── */

  // The runs in a piece of HTML, keeping bold, italics and underlining.
  function runsFromHtml(html, f) {
    var holder = document.createElement('div');
    holder.innerHTML = html;
    return walkTags(holder, f || {});
  }

  function walkTags(el, f) {
    var out = '';
    [].forEach.call(el.childNodes, function (node) {
      if (node.nodeType === 3) {
        if (node.nodeValue) out += textRun(node.nodeValue, f);
        return;
      }
      if (node.nodeType !== 1) return;
      var tag = node.tagName.toLowerCase();
      if (tag === 'br') { out += breakRun(f); return; }
      var g = f;
      if (tag === 'strong' || tag === 'b') g = extend(f, { bold: true });
      if (tag === 'em' || tag === 'i') g = extend(f, { italic: true });
      if (tag === 'u') g = extend(f, { underline: true });
      out += walkTags(node, g);
    });
    return out;
  }

  function hex(rgb) {
    var m = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(rgb || '');
    if (!m || (m[4] !== undefined && parseFloat(m[4]) === 0)) return null;
    return [m[1], m[2], m[3]].map(function (n) {
      var h = parseInt(n, 10).toString(16);
      return h.length < 2 ? '0' + h : h;
    }).join('').toUpperCase();
  }

  // The look of the text in an element, read from the page itself.
  function styleOf(el) {
    var cs = window.getComputedStyle(el);
    var color = hex(cs.color);
    var deco = cs.textDecorationLine || cs.textDecoration || '';
    return {
      size: Math.round(parseFloat(cs.fontSize) * 0.75 * 2) / 2,
      bold: parseInt(cs.fontWeight, 10) >= 600,
      italic: cs.fontStyle === 'italic',
      underline: deco.indexOf('underline') > -1,
      color: color && color !== '000000' ? color : null
    };
  }

  /* The runs in an element of the preview, each piece of text taking the
     look the page gives it. A block inside starts a new line; a ruled
     blank to write on becomes a stretch of underlined spaces. */
  function runsFromElement(el) {
    var out = '';
    var started = false;
    (function walk(node) {
      [].forEach.call(node.childNodes, function (child) {
        if (child.nodeType === 3) {
          var text = child.nodeValue.replace(/\s+/g, ' ');
          if (!started) text = text.replace(/^ /, '');
          if (text) { out += textRun(text, styleOf(child.parentNode)); started = true; }
          return;
        }
        if (child.nodeType !== 1) return;
        var cs = window.getComputedStyle(child);
        if (cs.display === 'none') return;
        if (child.tagName.toLowerCase() === 'br') { out += breakRun(); return; }
        if (child.classList.contains('rule')) {
          // Filled in, it is the text underlined; empty, a line of underscores
          // as long as the one on screen.
          var f = styleOf(child);
          var text = (child.textContent || '').replace(/\s+/g, ' ').trim();
          out += text
            ? textRun('\u00a0' + text + '\u00a0\u00a0', extend(f, { underline: true }))
            : textRun(new Array(Math.max(6, Math.round(child.offsetWidth / (parseFloat(cs.fontSize) * 0.55))) + 1).join('_'), f);
          started = true;
          return;
        }
        if (/^(block|flex|list-item)$/.test(cs.display) && started) out += breakRun();
        walk(child);
      });
    })(el);
    return out;
  }

  /* ── pictures ── */

  function dataUrlBytes(url) {
    var comma = url.indexOf(',');
    var bin = atob(url.slice(comma + 1));
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  // A picture's bytes and shape. Word takes PNG, JPEG and GIF; anything
  // else is redrawn as a PNG.
  function loadPicture(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        var w = img.naturalWidth || 1, h = img.naturalHeight || 1;
        var m = /^data:image\/(png|jpeg|jpg|gif)[;,]/i.exec(src);
        if (m) {
          resolve({ bytes: dataUrlBytes(src), ext: m[1].toLowerCase() === 'jpg' ? 'jpeg' : m[1].toLowerCase(), ratio: w / h });
          return;
        }
        try {
          var canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0);
          resolve({ bytes: dataUrlBytes(canvas.toDataURL('image/png')), ext: 'png', ratio: w / h });
        } catch (e) { reject(e); }
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  function pictureRun(id, n, widthCm, heightCm) {
    var cx = Math.max(1, Math.round(widthCm * EMU_CM)), cy = Math.max(1, Math.round(heightCm * EMU_CM));
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
  }

  /* ── the parts of the file ── */

  var NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ' +
           'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ' +
           'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" ' +
           'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" ' +
           'xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';

  function field(code, shown, f) {
    return '<w:r>' + rPr(f) + '<w:fldChar w:fldCharType="begin"/></w:r>' +
           '<w:r>' + rPr(f) + '<w:instrText xml:space="preserve"> ' + code + ' </w:instrText></w:r>' +
           '<w:r>' + rPr(f) + '<w:fldChar w:fldCharType="separate"/></w:r>' +
           textRun(shown, f) +
           '<w:r>' + rPr(f) + '<w:fldChar w:fldCharType="end"/></w:r>';
  }

  // A foot for every page: a line of text on the left, the page number on the right.
  function pageFoot(line, width) {
    var f = { size: 8, color: '555555' };
    return para(textRun(line || '', f) + tabRun(f) + textRun('Page ', f) + field('PAGE', '1', f) +
                textRun(' of ', f) + field('NUMPAGES', '1', f), {
      tabs: [{ val: 'right', pos: width }]
    }, f);
  }

  function stylesXml(font, size) {
    var sz = Math.round((size || 11) * 2);
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
      '<w:docDefaults><w:rPrDefault><w:rPr>' +
      '<w:rFonts w:ascii="' + esc(font) + '" w:hAnsi="' + esc(font) + '" w:eastAsia="' + esc(font) + '" w:cs="' + esc(font) + '"/>' +
      '<w:sz w:val="' + sz + '"/><w:szCs w:val="' + sz + '"/><w:lang w:val="en-GB"/></w:rPr></w:rPrDefault>' +
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
    '<w:pPr><w:ind w:left="284" w:hanging="227"/></w:pPr></w:lvl></w:abstractNum>' +
    '<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num></w:numbering>';

  var SETTINGS = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
    '<w:defaultTabStop w:val="720"/><w:compat><w:compatSetting w:name="compatibilityMode" ' +
    'w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>';

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

  /* ── putting a document together ──

     o: {
       landscape, margins: [top, right, bottom, left] in twips, font (a
       FONTS key), size (default text size, pt), title, creator,
       pictures: [{ key, src }],
       body: function (ctx) → the body XML, where ctx.width is the width of
         the writing on the page in twips and ctx.picture(key, heightCm,
         paraOptions) is a paragraph holding that picture ('' if it failed),
       foot: function (width) → a paragraph for the foot of every page
     } */
  function pack(o) {
    var pageW = o.landscape ? 16838 : 11906;
    var pageH = o.landscape ? 11906 : 16838;
    var m = o.margins || [850, 850, 850, 850];
    var width = pageW - m[1] - m[3];

    var pictures = (o.pictures || []).map(function (p) { return { key: p.key, src: p.src }; });
    return Promise.all(pictures.map(function (p) {
      return loadPicture(p.src).then(function (r) { p.bytes = r.bytes; p.ext = r.ext; p.ratio = r.ratio; }, function () { p.bytes = null; });
    })).then(function () {
      var media = pictures.filter(function (p) { return p.bytes; });
      media.forEach(function (p, i) { p.n = i + 1; p.id = 'rIdImg' + p.n; });

      var ctx = {
        width: width,
        picture: function (key, heightCm, p) {
          var pic = media.filter(function (x) { return x.key === key; })[0];
          if (!pic) return '';
          var w = Math.min(heightCm * pic.ratio, width / CM * 0.8);
          return para(pictureRun(pic.id, pic.n, w, w / pic.ratio), extend({ align: 'center' }, p || {}));
        }
      };
      var body = o.body(ctx);
      var foot = o.foot ? o.foot(width) : '';

      var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ' + NS + '><w:body>' + body +
        '<w:sectPr>' + (foot ? '<w:footerReference w:type="default" r:id="rIdFooter"/>' : '') +
        '<w:pgSz w:w="' + pageW + '" w:h="' + pageH + '"' + (o.landscape ? ' w:orient="landscape"' : '') + '/>' +
        '<w:pgMar w:top="' + m[0] + '" w:right="' + m[1] + '" w:bottom="' + m[2] + '" w:left="' + m[3] +
        '" w:header="425" w:footer="425" w:gutter="0"/></w:sectPr></w:body></w:document>';

      var rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '<Relationship Id="rIdNumbering" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>' +
        '<Relationship Id="rIdSettings" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>' +
        (foot ? '<Relationship Id="rIdFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>' : '') +
        media.map(function (p) {
          return '<Relationship Id="' + p.id + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image' + p.n + '.' + p.ext + '"/>';
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
        (foot ? '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' : '') +
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
        '<dc:title>' + esc(o.title || '') + '</dc:title><dc:creator>' + esc(o.creator || 'Classicalia') + '</dc:creator>' +
        '<dcterms:created xsi:type="dcterms:W3CDTF">' + new Date().toISOString().replace(/\.\d+Z$/, 'Z') + '</dcterms:created>' +
        '</cp:coreProperties>';

      var files = [
        { name: '[Content_Types].xml', data: types },
        { name: '_rels/.rels', data: rootRels },
        { name: 'docProps/core.xml', data: core },
        { name: 'word/document.xml', data: doc },
        { name: 'word/styles.xml', data: stylesXml(FONTS[o.font] || 'Arial', o.size) },
        { name: 'word/numbering.xml', data: NUMBERING },
        { name: 'word/settings.xml', data: SETTINGS },
        { name: 'word/_rels/document.xml.rels', data: rels }
      ];
      if (foot) {
        files.push({ name: 'word/footer1.xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr ' + NS + '>' + foot + '</w:ftr>' });
      }
      media.forEach(function (p) { files.push({ name: 'word/media/image' + p.n + '.' + p.ext, data: p.bytes }); });
      return zip(files);
    });
  }

  /* ── a simple sheet, read from its preview ──

     The sheet is laid out at its real size (21cm across for portrait A4),
     so a CSS pixel on it is a CSS pixel on paper, and the preview's own
     sizes are carried across. */

  function px2tw(n) { return Math.round(n * TW); }
  function px2pt(n) { return n * 0.75; }

  function cssBorder(cs, side) {
    var style = cs['border' + side + 'Style'];
    var width = parseFloat(cs['border' + side + 'Width']) || 0;
    if (style === 'none' || !width) return border(side.toLowerCase(), { style: 'nil', width: 0 }).replace(' w:sz="2" w:space="0" w:color="000000"', '');
    return border(side.toLowerCase(), {
      width: width,
      style: style === 'dashed' ? 'dashed' : style === 'dotted' ? 'dotted' : 'single',
      color: hex(cs['border' + side + 'Color']) || '000000'
    });
  }

  function cellBorders(cs) {
    return ['Top', 'Left', 'Bottom', 'Right'].map(function (s) { return cssBorder(cs, s); }).join('');
  }

  function align(cs) {
    return cs.textAlign === 'center' ? 'center' : cs.textAlign === 'right' || cs.textAlign === 'end' ? 'right' : null;
  }

  // A boxed block (the sheet's head or its score line): a one-cell table.
  function boxed(el, width) {
    var cs = window.getComputedStyle(el);
    var xml = '';
    [].forEach.call(el.children, function (child) {
      xml += blockXml(child, width - px2tw(parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight)), true);
    });
    if (!el.children.length) xml = para(runsFromElement(el), { align: align(cs) }, styleOf(el));
    return table([{ cells: [{ xml: xml, borders: cellBorders(cs) }] }], [width], {
      borders: '',
      margins: [px2tw(parseFloat(cs.paddingTop)), px2tw(parseFloat(cs.paddingRight)),
                px2tw(parseFloat(cs.paddingBottom)), px2tw(parseFloat(cs.paddingLeft))]
    }) + gap(px2pt(parseFloat(cs.marginBottom) || 0) || 1);
  }

  // A row of pieces spread across the line: name on the left, date on the right.
  function spreadRow(el, width) {
    var pieces = [].slice.call(el.children);
    var cs = window.getComputedStyle(el);
    var tabs = [];
    if (pieces.length === 2) tabs = [{ val: 'right', pos: width }];
    if (pieces.length >= 3) tabs = [{ val: 'center', pos: width / 2 }, { val: 'right', pos: width }];
    var runs = pieces.map(function (p) { return runsFromElement(p); }).join(tabRun());
    return para(runs, { tabs: tabs }, styleOf(el)) + (parseFloat(cs.marginBottom) ? gap(px2pt(parseFloat(cs.marginBottom))) : '');
  }

  // Lines to write on inside a cell: paragraphs ruled along their foot.
  function answerLines(ans) {
    var lines = [].slice.call(ans.children).filter(function (c) { return c.classList.contains('ans-line'); });
    if (!lines.length) return '';
    return lines.map(function (line) {
      var cs = window.getComputedStyle(line);
      var rule = {
        width: parseFloat(cs.borderBottomWidth) || 1,
        style: cs.borderBottomStyle === 'dotted' ? 'dotted' : 'single',
        color: hex(cs.borderBottomColor) || '000000'
      };
      // Word draws a run of paragraphs with the same border as one box, so
      // the lines between them need a border of their own.
      return para('', { exact: px2pt(line.offsetHeight || 22), border: border('bottom', rule) + border('between', rule) }, { size: 1 });
    }).join('');
  }

  function tableXml(tbl, width) {
    var trs = [].slice.call(tbl.rows);
    if (!trs.length) return '';
    // The column widths come from the row with the most cells.
    var widest = trs.reduce(function (best, tr) { return tr.cells.length > best.cells.length ? tr : best; }, trs[0]);
    var natural = [].map.call(widest.cells, function (c) { return c.offsetWidth || 1; });
    var sum = natural.reduce(function (a, b) { return a + b; }, 0);
    var widths = natural.map(function (w) { return Math.floor(width * w / sum); });

    var rows = trs.map(function (tr) {
      var inHead = tr.parentNode && tr.parentNode.tagName.toLowerCase() === 'thead';
      var cells = [].map.call(tr.cells, function (cell) {
        var cs = window.getComputedStyle(cell);
        var lines = cell.querySelector('.ans') && answerLines(cell.querySelector('.ans'));
        var xml = lines || para(runsFromElement(cell), { align: align(cs) }, styleOf(cell));
        return {
          xml: xml,
          span: cell.colSpan > 1 ? cell.colSpan : 1,
          fill: hex(cs.backgroundColor),
          borders: cellBorders(cs),
          valign: cs.verticalAlign === 'middle' ? 'center' : cs.verticalAlign === 'bottom' ? 'bottom' : null,
          margins: [px2tw(parseFloat(cs.paddingTop)), px2tw(parseFloat(cs.paddingRight)),
                    px2tw(parseFloat(cs.paddingBottom)), px2tw(parseFloat(cs.paddingLeft))]
        };
      });
      // Two cells share an edge; as in the browser, the heavier border wins
      // (the dashed fold line, say), and both cells are told so.
      for (var c = 1; c < cells.length; c++) {
        var left = window.getComputedStyle(tr.cells[c - 1]), right = window.getComputedStyle(tr.cells[c]);
        var heavier = (parseFloat(right.borderLeftWidth) || 0) >= (parseFloat(left.borderRightWidth) || 0)
          ? cssBorder(right, 'Left') : cssBorder(left, 'Right');
        cells[c - 1].borders = cells[c - 1].borders.replace(/<w:right [^>]*\/>/, heavier.replace('<w:left ', '<w:right '));
        cells[c].borders = cells[c].borders.replace(/<w:left [^>]*\/>/, heavier.replace('<w:right ', '<w:left '));
      }
      return { cells: cells, header: inHead, height: px2tw(tr.offsetHeight) };
    });
    return table(rows, widths, { borders: '', margins: [0, 0, 0, 0] });
  }

  function blockXml(el, width, inBox) {
    var cs = window.getComputedStyle(el);
    if (cs.display === 'none') return '';
    var tag = el.tagName.toLowerCase();
    var after = px2pt(parseFloat(cs.marginBottom) || 0);
    var hasBorder = (parseFloat(cs.borderTopWidth) || 0) > 0 && cs.borderTopStyle !== 'none';

    var before = px2pt(parseFloat(cs.marginTop) || 0);
    if (tag === 'table') return (before ? gap(before) : '') + tableXml(el, width) + gap(after || 1);
    if (!inBox && hasBorder) return (before ? gap(before) : '') + boxed(el, width);
    if (el.classList.contains('sheet-foot') || (el.children.length === 1 && el.children[0].tagName.toLowerCase() === 'img')) {
      return '<!--img:' + (el.querySelector('img') ? el.querySelector('img').getAttribute('src') : '') + '-->';
    }
    if (cs.display === 'flex' && el.children.length > 1) return spreadRow(el, width);
    var text = runsFromElement(el);
    if (!text) return '';
    return para(text, {
      align: align(cs),
      before: px2pt(parseFloat(cs.marginTop) || 0),
      after: after,
      keepNext: /^h\d$/.test(tag)
    }, styleOf(el));
  }

  /* o: { landscape, margins (twips), font, title, creator, foot (a line for
     the page foot, or nothing) }. */
  function fromSheet(sheet, o) {
    var pictures = [];
    var srcs = [];
    [].forEach.call(sheet.querySelectorAll('img'), function (img) {
      var src = img.getAttribute('src');
      if (src && srcs.indexOf(src) < 0) {
        srcs.push(src);
        pictures.push({ key: src, src: img.src, height: (img.offsetHeight || 20) / 96 * 2.54 });
      }
    });
    return pack({
      landscape: o.landscape,
      margins: o.margins,
      font: o.font,
      size: 11,
      title: o.title,
      creator: o.creator,
      pictures: pictures,
      foot: o.foot ? function (w) { return pageFoot(o.foot, w); } : null,
      body: function (ctx) {
        var xml = [].map.call(sheet.children, function (child) { return blockXml(child, ctx.width, false); }).join('');
        return xml.replace(/<!--img:([^>]*?)-->/g, function (m, src) {
          var pic = pictures.filter(function (p) { return p.key === src; })[0];
          return pic ? ctx.picture(src, pic.height, { before: 8 }) : '';
        });
      }
    });
  }

  function download(blob, name) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function fileName(name) {
    return (name || 'Classicalia').replace(/[\\/:*?"<>|]+/g, ' ').trim() + '.docx';
  }

  window.ClassicaliaWord = {
    CM: CM, FONTS: FONTS,
    esc: esc, extend: extend, rPr: rPr, textRun: textRun, tabRun: tabRun, breakRun: breakRun,
    para: para, gap: gap, border: border, boxBorders: boxBorders, table: table,
    runsFromHtml: runsFromHtml, runsFromElement: runsFromElement,
    pageFoot: pageFoot, pack: pack, fromSheet: fromSheet,
    download: download, fileName: fileName
  };
})();
