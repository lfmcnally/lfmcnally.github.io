/* Lesson plan builder: a Word copy of the plan.

   Written from the same model the preview draws, so the two always agree.
   A lesson plan is mostly boxes, which Word does natively as tables: each
   section is a table with a shaded heading row, and the lesson sequence is
   a table whose heading rows repeat on every page it runs across.

   Everything is written here, with no library: a .docx is a zip of a few
   XML files, and the zip needs no compression to open. */
(function () {
  'use strict';

  var CM = 567;                           // twips in a centimetre
  var EMU_CM = 360000;                    // EMUs in a centimetre
  var MARGIN = Math.round(1.5 * CM);
  var BODY = 10.5;                        // the plan's text size, in points

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

  /* A paragraph. p carries align, before/after (pt), keepNext, a bullet,
     tabs and an exact height (pt) for a spacer. */
  function para(runs, p, f) {
    p = p || {};
    f = f || { size: BODY };
    var x = '';
    if (p.keepNext) x += '<w:keepNext/>';
    if (p.bullet) x += '<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>';
    if (p.tabs) {
      x += '<w:tabs>' + p.tabs.map(function (t) {
        return '<w:tab w:val="' + t.val + '" w:pos="' + Math.round(t.pos) + '"/>';
      }).join('') + '</w:tabs>';
    }
    var line = p.exact != null
      ? ' w:line="' + Math.max(20, Math.round(p.exact * 20)) + '" w:lineRule="exact"'
      : ' w:line="' + Math.round((f.size || BODY) * 1.3 * 20) + '" w:lineRule="atLeast"';
    x += '<w:spacing w:before="' + Math.round((p.before || 0) * 20) + '" w:after="' + Math.round((p.after || 0) * 20) + '"' + line + '/>';
    if (p.align) x += '<w:jc w:val="' + p.align + '"/>';
    x += rPr(f);
    return '<w:p><w:pPr>' + x + '</w:pPr>' + (runs || '') + '</w:p>';
  }

  // A gap between two boxes, so two tables never merge into one.
  function gap(pt) {
    return para('', { exact: pt }, { size: 1 });
  }

  function border(side) {
    return '<w:' + side + ' w:val="single" w:sz="6" w:space="0" w:color="000000"/>';
  }

  var ALL_BORDERS = ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(border).join('');

  /* A table. rows is a list of { cells: [{ xml, fill, span }], height (cm),
     header }; widths are in twips. */
  function table(rows, widths) {
    var total = widths.reduce(function (a, b) { return a + b; }, 0);
    var x = '<w:tbl><w:tblPr><w:tblW w:w="' + total + '" w:type="dxa"/>' +
            '<w:tblBorders>' + ALL_BORDERS + '</w:tblBorders><w:tblLayout w:type="fixed"/>' +
            '<w:tblCellMar><w:top w:w="85" w:type="dxa"/><w:left w:w="113" w:type="dxa"/>' +
            '<w:bottom w:w="85" w:type="dxa"/><w:right w:w="113" w:type="dxa"/></w:tblCellMar>' +
            '<w:tblLook w:val="0000" w:firstRow="0" w:lastRow="0" w:firstColumn="0" w:lastColumn="0" w:noHBand="1" w:noVBand="1"/>' +
            '</w:tblPr><w:tblGrid>' +
            widths.map(function (w) { return '<w:gridCol w:w="' + w + '"/>'; }).join('') + '</w:tblGrid>';
    rows.forEach(function (row) {
      x += '<w:tr><w:trPr><w:cantSplit/>' +
           (row.height ? '<w:trHeight w:val="' + Math.round(row.height * CM) + '" w:hRule="atLeast"/>' : '') +
           (row.header ? '<w:tblHeader/>' : '') + '</w:trPr>';
      var col = 0;
      row.cells.forEach(function (cell) {
        var span = cell.span || 1;
        var w = 0;
        for (var i = 0; i < span; i++) w += widths[col + i];
        col += span;
        x += '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/>' +
             (span > 1 ? '<w:gridSpan w:val="' + span + '"/>' : '') +
             (cell.fill ? '<w:shd w:val="clear" w:color="auto" w:fill="' + cell.fill + '"/>' : '') +
             '</w:tcPr>' + (cell.xml || para('')) + '</w:tc>';
      });
      x += '</w:tr>';
    });
    return x + '</w:tbl>';
  }

  /* ── text ── */

  // The runs in a line of the preview's HTML, keeping bold, italics and underlining.
  function runs(html, f) {
    var holder = document.createElement('div');
    holder.innerHTML = html;
    return walk(holder, f);
  }

  function walk(el, f) {
    var out = '';
    [].forEach.call(el.childNodes, function (node) {
      if (node.nodeType === 3) {
        if (node.nodeValue) out += textRun(node.nodeValue, f);
        return;
      }
      if (node.nodeType !== 1) return;
      var tag = node.tagName.toLowerCase();
      var g = f;
      if (tag === 'strong' || tag === 'b') g = extend(f, { bold: true });
      if (tag === 'em' || tag === 'i') g = extend(f, { italic: true });
      if (tag === 'u') g = extend(f, { underline: true });
      out += walk(node, g);
    });
    return out;
  }

  // A box's lines as paragraphs. A cell must hold at least one.
  function linesXml(lines, size) {
    var f = { size: size || BODY };
    var xml = lines.map(function (line, n) {
      if (line.gap) return para('', { exact: 6 }, { size: 1 });
      return para(runs(line.html, f), { bullet: line.bullet, after: n === lines.length - 1 ? 0 : 2 }, f);
    }).join('');
    return xml || para('', {}, f);
  }

  function heading(label, size) {
    var f = { size: size || 10, bold: true };
    return para(textRun(label, f), { keepNext: true }, f);
  }

  /* ── the blocks of the plan ── */

  function detailsXml(details, landscape, width, shade) {
    if (!details.length) return '';
    var per = landscape ? 3 : 2;
    var labelW = Math.round(width * (landscape ? 0.10 : 0.15));
    var valueW = Math.floor((width - labelW * per) / per);
    var widths = [];
    for (var i = 0; i < per; i++) widths.push(labelW, valueW);
    var rows = [];
    for (var r = 0; r < details.length; r += per) {
      var cells = [];
      for (var c = 0; c < per; c++) {
        var d = details[r + c];
        var lf = { size: 9.5, bold: true };
        cells.push({ xml: para(d ? textRun(d.label, lf) : '', {}, lf), fill: shade });
        cells.push({ xml: para(d ? runs(d.html, { size: BODY }) : '') });
      }
      rows.push({ cells: cells });
    }
    return table(rows, widths) + gap(8);
  }

  function boxXml(block, width, shade) {
    var n = block.columns.length;
    var colW = Math.floor(width / n);
    var widths = block.columns.map(function () { return colW; });
    var rows = [];
    if (block.title) {
      rows.push({ cells: [{ xml: heading(block.title.label), fill: shade, span: n }] });
    }
    rows.push({ cells: block.columns.map(function (c) { return { xml: heading(c.label), fill: shade }; }) });
    var height = 0;
    block.columns.forEach(function (c) { if (c.height) height = Math.max(height, c.height); });
    rows.push({
      height: height || null,
      cells: block.columns.map(function (c) { return { xml: linesXml(c.lines) }; })
    });
    return table(rows, widths) + gap(8);
  }

  function sequenceXml(block, width, shade) {
    var total = block.columns.reduce(function (s, c) { return s + c.weight; }, 0);
    var widths = block.columns.map(function (c) { return Math.floor(width * c.weight / total); });
    var n = block.columns.length;
    var rows = [
      { header: true, cells: [{ xml: heading(block.label), fill: shade, span: n }] },
      { header: true, cells: block.columns.map(function (c) { return { xml: heading(c.label, 9.5), fill: shade }; }) }
    ];
    block.rows.forEach(function (cells) {
      rows.push({
        cells: cells.map(function (lines, i) {
          var small = block.columns[i].key === 'time';
          return { xml: linesXml(lines, small ? 9.5 : 10) };
        })
      });
    });
    for (var b = 0; b < block.blankRows; b++) {
      rows.push({ height: 1.6, cells: block.columns.map(function () { return {}; }) });
    }
    return table(rows, widths) + gap(8);
  }

  /* ── pictures ── */

  function dataUrlBytes(url) {
    var comma = url.indexOf(',');
    var bin = atob(url.slice(comma + 1));
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  // The picture's bytes and its shape. Word takes PNG, JPEG and GIF;
  // anything else is redrawn as a PNG.
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

  function pictureXml(id, n, widthCm, heightCm) {
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

  // The foot of every page: what the plan is, and the page number.
  function footerXml(line, width) {
    var f = { size: 8, color: '555555' };
    var p = para(textRun(line || '', f) + tabRun(f) + textRun('Page ', f) + field('PAGE', '1', f) +
                 textRun(' of ', f) + field('NUMPAGES', '1', f), {
      tabs: [{ val: 'right', pos: width }]
    }, f);
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr ' + NS + '>' + p + '</w:ftr>';
  }

  function stylesXml(font) {
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
      '<w:docDefaults><w:rPrDefault><w:rPr>' +
      '<w:rFonts w:ascii="' + esc(font) + '" w:hAnsi="' + esc(font) + '" w:eastAsia="' + esc(font) + '" w:cs="' + esc(font) + '"/>' +
      '<w:sz w:val="21"/><w:szCs w:val="21"/><w:lang w:val="en-GB"/></w:rPr></w:rPrDefault>' +
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

  /* ── putting it together ── */

  var WORDMARK = '/version2/assets/images/classicalia-wordmark-navy.png';

  function build(model) {
    var pageW = model.landscape ? 16838 : 11906;
    var pageH = model.landscape ? 11906 : 16838;
    var width = pageW - 2 * MARGIN;
    var shade = model.shade;

    var pictures = [];
    if (model.crest) pictures.push({ key: 'crest', src: model.crest.src, height: model.crest.height });
    if (model.footer) pictures.push({ key: 'foot', src: WORDMARK, height: 0.53 });

    return Promise.all(pictures.map(function (p) {
      return loadPicture(p.src).then(function (r) { p.bytes = r.bytes; p.ext = r.ext; p.ratio = r.ratio; }, function () { p.bytes = null; });
    })).then(function () {
      var media = pictures.filter(function (p) { return p.bytes; });
      media.forEach(function (p, i) { p.n = i + 1; p.id = 'rIdImg' + p.n; });
      function picture(key) {
        var p = media.filter(function (m) { return m.key === key; })[0];
        if (!p) return '';
        var w = Math.min(p.height * p.ratio, width / CM * 0.7);
        return para(pictureXml(p.id, p.n, w, w / p.ratio), { align: 'center', after: key === 'crest' ? 6 : 0, before: key === 'foot' ? 8 : 0 });
      }

      var body = picture('crest');
      if (model.school) {
        var sf = { size: 9.5, caps: true, spacing: 0.76 };
        body += para(textRun(model.school, sf), { after: 3, keepNext: true }, sf);
      }
      if (model.title) {
        var tf = { size: 18, bold: true };
        body += para(textRun(model.title, tf), { after: 9, keepNext: true }, tf);
      }
      body += detailsXml(model.details, model.landscape, width, shade);
      model.blocks.forEach(function (block) {
        body += block.type === 'sequence' ? sequenceXml(block, width, shade) : boxXml(block, width, shade);
      });
      if (model.footer) body += picture('foot');

      var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ' + NS + '><w:body>' + body +
        '<w:sectPr><w:footerReference w:type="default" r:id="rIdFooter"/>' +
        '<w:pgSz w:w="' + pageW + '" w:h="' + pageH + '"' + (model.landscape ? ' w:orient="landscape"' : '') + '/>' +
        '<w:pgMar w:top="' + MARGIN + '" w:right="' + MARGIN + '" w:bottom="' + MARGIN + '" w:left="' + MARGIN +
        '" w:header="425" w:footer="425" w:gutter="0"/></w:sectPr></w:body></w:document>';

      var rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '<Relationship Id="rIdNumbering" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>' +
        '<Relationship Id="rIdSettings" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>' +
        '<Relationship Id="rIdFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>' +
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
        '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' +
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
        '<dc:title>' + esc(model.title || 'Lesson plan') + '</dc:title><dc:creator>Classicalia lesson plan builder</dc:creator>' +
        '<dcterms:created xsi:type="dcterms:W3CDTF">' + new Date().toISOString().replace(/\.\d+Z$/, 'Z') + '</dcterms:created>' +
        '</cp:coreProperties>';

      var files = [
        { name: '[Content_Types].xml', data: types },
        { name: '_rels/.rels', data: rootRels },
        { name: 'docProps/core.xml', data: core },
        { name: 'word/document.xml', data: doc },
        { name: 'word/styles.xml', data: stylesXml(FONTS[model.font] || 'Arial') },
        { name: 'word/numbering.xml', data: NUMBERING },
        { name: 'word/settings.xml', data: SETTINGS },
        { name: 'word/footer1.xml', data: footerXml(model.footLine, width) },
        { name: 'word/_rels/document.xml.rels', data: rels }
      ];
      media.forEach(function (m) { files.push({ name: 'word/media/image' + m.n + '.' + m.ext, data: m.bytes }); });
      return zip(files);
    });
  }

  window.LessonPlanWord = { build: build };
})();
