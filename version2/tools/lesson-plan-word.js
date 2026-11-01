/* Lesson plan builder: a Word copy of the plan.

   Written from the same model the preview draws, so the two always agree.
   A lesson plan is mostly boxes, which Word does natively as tables: each
   section is a table with a shaded heading row, and the lesson sequence is
   a table whose heading rows repeat on every page it runs across.

   The file itself is put together by /version2/assets/js/word-docx.js. */
(function () {
  'use strict';

  var W = window.ClassicaliaWord;
  var CM = W.CM;
  var MARGIN = Math.round(1.5 * CM);
  var BODY = 10.5;                        // the plan's text size, in points
  var WORDMARK = '/version2/assets/images/classicalia-wordmark-navy.png';

  // A box's lines as paragraphs. A cell must hold at least one.
  function linesXml(lines, size) {
    var f = { size: size || BODY };
    var xml = lines.map(function (line, n) {
      if (line.gap) return W.gap(6);
      return W.para(W.runsFromHtml(line.html, f), { bullet: line.bullet, after: n === lines.length - 1 ? 0 : 2 }, f);
    }).join('');
    return xml || W.para('', {}, f);
  }

  function heading(label, size) {
    var f = { size: size || 10, bold: true };
    return W.para(W.textRun(label, f), { keepNext: true }, f);
  }


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
        cells.push({ xml: W.para(d ? W.textRun(d.label, lf) : '', {}, lf), fill: shade });
        cells.push({ xml: W.para(d ? W.runsFromHtml(d.html, { size: BODY }) : '', {}, { size: BODY }) });
      }
      rows.push({ cells: cells });
    }
    return W.table(rows, widths) + W.gap(8);
  }

  function boxXml(block, width, shade) {
    var n = block.columns.length;
    var colW = Math.floor(width / n);
    var widths = block.columns.map(function () { return colW; });
    var rows = [];
    if (block.title) {
      rows.push({ cells: [{ xml: heading(block.title.label), fill: shade, span: n }] });
    }
    // A box that is all one section (as for content notes) has no column heading.
    if (block.columns.some(function (c) { return c.label; })) {
      rows.push({ cells: block.columns.map(function (c) { return { xml: c.label ? heading(c.label) : '', fill: shade }; }) });
    }
    var height = 0;
    block.columns.forEach(function (c) { if (c.height) height = Math.max(height, c.height); });
    rows.push({
      height: height ? height * CM : null,
      cells: block.columns.map(function (c) { return { xml: linesXml(c.lines) }; })
    });
    return W.table(rows, widths) + W.gap(8);
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
          return { xml: linesXml(lines, block.columns[i].key === 'time' ? 9.5 : 10) };
        })
      });
    });
    for (var b = 0; b < block.blankRows; b++) {
      rows.push({ height: 1.6 * CM, cells: block.columns.map(function () { return {}; }) });
    }
    return W.table(rows, widths) + W.gap(8);
  }

  function build(model) {
    var pictures = [];
    if (model.crest) pictures.push({ key: 'crest', src: model.crest.src });
    if (model.footer) pictures.push({ key: 'foot', src: WORDMARK });

    return W.pack({
      landscape: model.landscape,
      margins: [MARGIN, MARGIN, MARGIN, MARGIN],
      font: model.font,
      size: BODY,
      title: model.title || 'Lesson plan',
      creator: 'Classicalia lesson plan builder',
      pictures: pictures,
      foot: function (width) { return W.pageFoot(model.footLine, width); },
      body: function (ctx) {
        var shade = model.shade;
        var body = model.crest ? ctx.picture('crest', model.crest.height, { after: 6 }) : '';
        if (model.school) {
          var sf = { size: 9.5, caps: true, spacing: 0.76 };
          body += W.para(W.textRun(model.school, sf), { after: 3, keepNext: true }, sf);
        }
        if (model.title) {
          var tf = { size: 18, bold: true };
          body += W.para(W.textRun(model.title, tf), { after: 9, keepNext: true }, tf);
        }
        body += detailsXml(model.details, model.landscape, ctx.width, shade);
        model.blocks.forEach(function (block) {
          body += block.type === 'sequence' ? sequenceXml(block, ctx.width, shade) : boxXml(block, ctx.width, shade);
        });
        if (model.footer) body += ctx.picture('foot', 0.53, { before: 8 });
        return body;
      }
    });
  }

  window.LessonPlanWord = { build: build };
})();
