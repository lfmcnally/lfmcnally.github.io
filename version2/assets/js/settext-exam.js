/* Exam practice for a set text.
   Assembles practice papers in the layout of OCR's Prose Literature paper
   (Section A, the Group 1 text) from the text's data/exam.json, written by
   scripts/build-exam.py: the whole text as one run of words, the question
   bank placed on it by word, the 15-mark passages, the 5-mark translations
   and the style notes.

   A paper is fixed by its settings and a seed, both kept in the address,
   so the same link always gives the same paper and its mark scheme.

   Kinds of paper:
     full   Section A: 12 marks of short questions and a 15-mark question
            (27 marks), set either on two passages, the short questions on
            the first and the 15-mark on the second, or on one long passage
     short  the short questions only (12 marks)
     essay  one 15-mark question
     trans  three 5-mark translations                                     */
(function () {
  'use strict';

  var root = document.querySelector('[data-exam]');
  if (!root) return;

  // Section A of each paper: short questions worth shortMarks beside a 5-mark
  // translation, and a 15-mark question. The marks are set from the text's
  // paper once its data has loaded (27 on the prose paper, 28 on the verse).
  var KINDS = {
    full:  { label: 'Full Section A', marks: 27 },
    short: { label: 'Short questions', marks: 12 },
    essay: { label: '15-mark question', marks: 15 },
    trans: { label: 'Translation', marks: 15 }
  };
  // OCR allows two hours for 75 marks
  function minutesFor(marks) { return Math.max(10, Math.round(marks * 120 / 75 / 5) * 5); }

  var LINE_CHARS = 78;          // characters to a printed line of prose, as on OCR's papers
  // The defaults are the prose paper's; a text's paper may set its own.
  var SHORT_MARKS = 7;          // the short questions beside the 5-mark translation
  var PASSAGE_MIN = 95;         // OCR's prose passages run to 11-13 lines
  var PASSAGE_MAX = 140;        // words in a passage that carries short questions only
  var ESSAY_MAX = 150;          // words in a passage for the 15-mark question
  var LONG_MAX = 240;           // words in a single passage that carries everything
  var TWO_SHARE = 0.8;          // how often a full paper is set on two passages
  var VERSE = false;            // verse is printed line by line, as the poet wrote it

  var SENT_END = /[.?!][’'”")\]]*$/;
  var CLAUSE_END = /[.?!;:][’'”")\]]*$/;

  var D, W, els = {}, state = {}, paper = null;

  /* ── seeded randomness ── */
  function rng(seed) {
    var h = 1779033703 ^ seed.length;
    for (var i = 0; i < seed.length; i++) { h = Math.imul(h ^ seed.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; }
    var a = h >>> 0;
    return function () {
      a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, rand) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function newSeed() { return Math.random().toString(36).slice(2, 7).toUpperCase(); }

  /* ── spans of words ── */
  function len(s) { return s.end - s.start + 1; }
  function overlaps(a, b) { return a.start <= b.end && b.start <= a.end; }
  function within(a, b) { return b.start <= a.start && a.end <= b.end; }
  function isShort(q) { return len(q) <= 3; }

  // Widen a span to whole sentences, or to whole clauses where the sentence
  // runs too far, without leaving the chapters chosen.
  // Verse texts are prescribed in stretches (Aeneid 4.1-128 and 529-629); no
  // passage runs from one stretch into the next.
  function stretch(i, lo, hi) {
    (D.breaks || []).forEach(function (b) { if (b <= i) lo = Math.max(lo, b); else hi = Math.min(hi, b - 1); });
    return { lo: lo, hi: hi };
  }
  function crosses(span) { return (D.breaks || []).some(function (b) { return span.start < b && span.end >= b; }); }
  function widen(span, lo, hi) {
    var r = stretch(span.start, lo, hi); lo = r.lo; hi = r.hi;
    var s = span.start, e = span.end, i;
    for (i = s; i > lo && !SENT_END.test(W[i - 1]) && s - i < 30; i--);
    if (i > lo && !SENT_END.test(W[i - 1])) for (i = s; i > lo && !CLAUSE_END.test(W[i - 1]); i--);
    s = i;
    for (i = e; i < hi && !SENT_END.test(W[i]) && i - e < 30; i++);
    if (i < hi && !SENT_END.test(W[i])) for (i = e; i < hi && !CLAUSE_END.test(W[i]); i++);
    e = i;
    return { start: s, end: e };
  }
  // Add whole sentences before or after a passage until it is as long as
  // OCR's (about eleven lines), keeping clear of the other passage.
  function grow(span, lo, hi, min, max, avoid) {
    var r = stretch(span.start, lo, hi); lo = r.lo; hi = r.hi;
    var s = span.start, e = span.end;
    function back(i) {   // the start of the sentence that ends at word i
      var k = i;
      while (k > lo && !SENT_END.test(W[k - 1]) && i - k < 45) k--;
      if (k > lo && !SENT_END.test(W[k - 1])) { k = i; while (k > lo && !CLAUSE_END.test(W[k - 1])) k--; }
      return k;
    }
    function fwd(i) {    // the end of the sentence that starts at word i
      var k = i;
      while (k < hi && !SENT_END.test(W[k]) && k - i < 45) k++;
      if (k < hi && !SENT_END.test(W[k])) { k = i; while (k < hi && !CLAUSE_END.test(W[k])) k++; }
      return k;
    }
    while (e - s + 1 < min) {
      var opts = [];
      if (s > lo) { var b = back(s - 1); opts.push({ start: b, end: e }); }
      if (e < hi) { var f = fwd(e + 1); opts.push({ start: s, end: f }); }
      opts = opts.filter(function (o) { return len(o) <= max && !(avoid && overlaps(o, avoid)); });
      if (!opts.length) break;
      opts.sort(function (x, y) { return len(x) - len(y); });
      s = opts[0].start; e = opts[0].end;
    }
    return { start: s, end: e };
  }
  function hull(items) {
    var s = Infinity, e = -Infinity;
    items.forEach(function (it) { s = Math.min(s, it.start); e = Math.max(e, it.end); });
    return { start: s, end: e };
  }

  /* ── choosing the questions ── */
  // Twelve marks on one stretch of text: a 5-mark translation and short
  // questions worth seven, two to four of them, none overlapping the
  // translation, and none overlapping each other unless one is a single
  // word or phrase inside a longer one (as OCR's "(a) fili (line 2)").
  // The questions themselves must touch the chapters chosen (the core); the
  // translation may come from the text either side when the core is short.
  function shortSet(rand, lo, hi, core, opts) {
    var inRange = function (x) { return x.start >= lo && x.end <= hi && !(opts.avoid && overlaps(x, opts.avoid)) && !(opts.anchor && overlaps(x, opts.anchor)); };
    var chunks = shuffle(D.chunks.filter(inRange), rand);
    chunks.sort(function (a, b) { return (overlaps(b, core) ? 1 : 0) - (overlaps(a, core) ? 1 : 0); });
    var qs = D.questions.filter(function (q) { return inRange(q) && overlaps(q, core); });
    var budget = 4000;
    for (var c = 0; c < chunks.length; c++) {
      var T = chunks[c];
      var centre = opts.anchor || T;
      var pool = shuffle(qs.filter(function (q) {
        return !overlaps(q, T) && Math.abs(q.start - centre.start) < (opts.anchor ? len(opts.anchor) + 150 : 120);
      }), rand);
      var found = null;
      (function dfs(from, chosen, sum) {
        if (found || budget-- < 0) return;
        if (sum === SHORT_MARKS && chosen.length >= 2) {
          if (crosses(hull(chosen.concat([T], opts.anchor ? [opts.anchor] : [])))) return;
          var span = widen(hull(chosen.concat([T], opts.anchor ? [opts.anchor] : [])), lo, hi);
          if (!opts.anchor) span = grow(span, lo, hi, PASSAGE_MIN, PASSAGE_MAX, opts.avoid);
          if (len(span) > (opts.anchor ? LONG_MAX : PASSAGE_MAX)) return;
          if (opts.avoid && overlaps(span, opts.avoid)) return;
          found = { chunk: T, qs: chosen.slice(), span: span };
          return;
        }
        if (sum >= SHORT_MARKS || chosen.length >= 4) return;
        for (var i = from; i < pool.length && !found; i++) {
          var q = pool[i];
          if (sum + q.marks > SHORT_MARKS) continue;
          // at most one question of background knowledge, as on OCR's papers
          if (q.type === 'context' && chosen.some(function (o) { return o.type === 'context'; })) continue;
          var ok = chosen.every(function (o) {
            if (!overlaps(o, q)) return true;
            return (isShort(q) && !isShort(o) && within(q, o)) || (isShort(o) && !isShort(q) && within(o, q));
          });
          if (!ok) continue;
          chosen.push(q); dfs(i + 1, chosen, sum + q.marks); chosen.pop();
        }
      })(0, [], 0);
      if (found) return found;
    }
    return null;
  }

  // A 15-mark passage inside the chapters chosen, or failing that one that runs into them.
  function pickEssay(rand, lo, hi, core) {
    var es = D.essays.filter(function (e) { return e.start >= lo && e.end <= hi; });
    var inside = es.filter(function (e) { return within(e, core); });
    if (!inside.length) inside = es.filter(function (e) { return overlaps(e, core); });
    return inside.length ? inside[Math.floor(rand() * inside.length)] : null;
  }

  // Items in text order; a word or phrase question comes before the longer
  // question it sits inside.
  function byPosition(a, b) { return a.start - b.start || len(b) - len(a) || 0; }
  function ordered(items) {
    return items.slice().sort(function (a, b) {
      if (a.start === b.start) return len(a) - len(b);
      if (isShort(a) && within(a, b)) return -1;
      if (isShort(b) && within(b, a)) return 1;
      return byPosition(a, b);
    });
  }

  // First from the chapters chosen; where they are too short for the paper,
  // from them and the chapter either side, with the questions kept on them.
  function assemble(st) {
    var core = { start: D.sections[st.from - 1].start, end: D.sections[st.to - 1].end };
    // a chapter either side, or two on one side at the start or end of the text
    var n = D.sections.length, a = st.from - 2, b = st.to;
    if (a < 0) { b -= a; a = 0; }
    if (b > n - 1) { a = Math.max(0, a - (b - (n - 1))); b = n - 1; }
    var wide = { start: D.sections[a].start, end: D.sections[b].end };
    var ranges = [core, wide];
    // the layout of a full paper is settled once, from the seed, and the other
    // is used only if no paper can be made in it
    var layouts = st.layout !== 'any' ? [st.layout] : rng(st.seed + ':layout')() < TWO_SHARE ? ['two', 'one'] : ['one', 'two'];
    for (var l = 0; l < layouts.length; l++)
    for (var r = 0; r < ranges.length; r++) {
      for (var attempt = 0; attempt < 40; attempt++) {
        var rand = rng(st.seed + ':' + st.kind + ':' + st.layout + ':' + st.from + '-' + st.to + ':' + r + ':' + attempt);
        var p = tryAssemble(st, rand, ranges[r].start, ranges[r].end, core, layouts[l]);
        if (p) {
          p.widened = p.questions.some(function (Q) { return Q.passages.some(function (P) { return !within(P.span, core); }); });
          return p;
        }
      }
    }
    return null;
  }

  function tryAssemble(st, rand, lo, hi, core, layout) {
    var items, E, S;
    if (st.kind === 'trans') {
      var cs = shuffle(D.chunks.filter(function (c) { return c.start >= lo && c.end <= hi; }), rand), picked = [];
      // translations inside the chapters chosen first, then ones that run into them, then the rest
      var rank = function (c) { return within(c, core) ? 0 : overlaps(c, core) ? 1 : 2; };
      cs.sort(function (a, b) { return rank(a) - rank(b); });
      cs.forEach(function (c) { if (picked.length < 3 && picked.every(function (p) { return !overlaps(p, c); })) picked.push(c); });
      if (picked.length < 3) return null;
      picked.sort(byPosition);
      return { kind: 'trans', questions: picked.map(function (c) {
        return { intro: 'Translate the following passage into English.', marks: 5, passages: [{ span: { start: c.start, end: c.end }, items: [] }], whole: { kind: 'trans', item: c } };
      }) };
    }
    if (st.kind === 'essay') {
      E = pickEssay(rand, lo, hi, core);
      if (!E) return null;
      var EP = grow(E, lo, hi, PASSAGE_MIN, ESSAY_MAX, null);
      return { kind: 'essay', questions: [{ intro: 'Read the following passage and answer the question.', passages: [{ span: EP, items: [{ kind: 'essay', item: E, whole: true, span: EP }] }] }] };
    }
    if (st.kind === 'short') {
      S = shortSet(rand, lo, hi, core, {});
      if (!S) return null;
      return { kind: 'short', questions: [{ intro: 'Read the following passage and answer the questions.', passages: [shortPassage(S)] }] };
    }
    // full: the layout asked for, or either
    var layouts = [layout];
    for (var l = 0; l < layouts.length; l++) {
      E = pickEssay(rand, lo, hi, core);
      if (!E) return null;
      // once the 15-mark question is on the chapters chosen, the short
      // questions may come from the text either side
      var near = { start: lo, end: hi };
      if (layouts[l] === 'two') {
        var EP2 = grow(E, lo, hi, PASSAGE_MIN, ESSAY_MAX, null);
        S = shortSet(rand, lo, hi, near, { avoid: EP2 });
        if (!S) continue;
        var ps = [shortPassage(S), { span: EP2, items: [{ kind: 'essay', item: E, whole: true, span: EP2 }] }];
        ps.sort(function (a, b) { return a.span.start - b.span.start; });
        return { kind: 'full', layout: 'two', questions: [{ intro: 'Read the following passages and answer the questions.', passages: ps }] };
      }
      S = shortSet(rand, lo, hi, near, { anchor: E });
      if (!S) continue;
      items = S.qs.map(function (q) { return { kind: 'q', item: q }; });
      items.push({ kind: 'trans', item: S.chunk }, { kind: 'essay', item: E });
      return { kind: 'full', layout: 'one', questions: [{ intro: 'Read the following passage and answer the questions.', passages: [{ span: S.span, items: orderItems(items) }] }] };
    }
    return null;
  }

  function shortPassage(S) {
    var items = S.qs.map(function (q) { return { kind: 'q', item: q }; });
    items.push({ kind: 'trans', item: S.chunk });
    return { span: S.span, items: orderItems(items) };
  }
  function orderItems(items) {
    var sorted = ordered(items.map(function (it) { return it.item; }));
    return sorted.map(function (x) { return items.filter(function (it) { return it.item === x; })[0]; });
  }

  /* ── laying out the Latin ── */
  // Prose in lines of a fixed length, verse in the poet's own lines, so that
  // a question can point at its line numbers.
  function layout(span) {
    var lines = [], line = [], n = 0, lineOf = {};
    for (var i = span.start; i <= span.end; i++) {
      var w = W[i];
      var full = VERSE ? i > span.start && D.wline[i] !== D.wline[i - 1] : n + 1 + w.length > LINE_CHARS;
      if (line.length && full) { lines.push(line); line = []; n = 0; }
      n += (line.length ? 1 : 0) + w.length;
      line.push(i);
      lineOf[i] = lines.length + 1;
    }
    if (line.length) lines.push(line);
    // a passage that starts part-way through a verse line is set in under the
    // rest of that line, as OCR prints a half-line
    var indent = 0;
    if (VERSE) for (var k = span.start - 1; k >= 0 && D.wline[k] === D.wline[span.start]; k--) indent += W[k].length + 1;
    return { lines: lines, lineOf: lineOf, indent: indent };
  }
  function lineRef(lay, s) {
    var a = lay.lineOf[s.start], b = lay.lineOf[s.end];
    return a === b ? 'line ' + a : 'lines ' + a + '–' + b;
  }
  function bare(w) { return w.replace(/^[‘’“”"'(\[]+/, '').replace(/[‘’“”"',.;:?!)\]]+$/, ''); }
  // "si verum … superarit": the first and last words, two of them where one is very short
  function autoLemma(s) {
    var first = bare(W[s.start]), last = bare(W[s.end]);
    if (first.length <= 3 && s.start + 1 < s.end) first += ' ' + bare(W[s.start + 1]);
    if (last.length <= 3 && s.end - 1 > s.start) last = bare(W[s.end - 1]) + ' ' + last;
    return len(s) <= 3 ? W.slice(s.start, s.end + 1).map(bare).join(' ') : first + ' … ' + last;
  }
  function showLemma(l) {
    return l.split(/\s*(?:…|\.\.\.)\s*/).map(function (part) { return part.split(/\s+/).map(bare).filter(Boolean).join(' '); }).join(' … ');
  }
  function cite(span) {
    if (VERSE) return D.paper.author + ', ' + D.paper.work + '.' + D.wline[span.start] + '\u2013' + D.wline[span.end];
    var a = sectionOf(span.start).chapter, b = sectionOf(span.end).chapter;
    return D.paper.author + ', ' + D.paper.work + ' ' + (a === b ? a : a + '–' + b);
  }
  function sectionOf(i) {
    for (var k = 0; k < D.sections.length; k++) if (i >= D.sections[k].start && i <= D.sections[k].end) return D.sections[k];
    return D.sections[0];
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ── writing the paper ── */
  function render(p, st, rand) {
    var letters = 'abcdefghij', ms = [], body = [];
    p.questions.forEach(function (Q, qi) {
      var num = qi + 1, letter = 0;
      var head = '<div class="xp-qhead"><span class="xp-num">' + num + '</span><p>' + Q.intro + (Q.whole ? marksTag(Q.marks) : '') + '</p></div>';
      body.push('<div class="xp-question">' + head);
      Q.passages.forEach(function (P) {
        var lay = layout(P.span);
        body.push(passageHtml(lay, P.span));
        P.items.forEach(function (it) {
          var lab = letters.charAt(letter++);
          var q = questionHtml(it, lay, P, rand);
          body.push('<div class="xp-q"><span class="xp-letter">(' + lab + ')' + (it.kind === 'essay' ? '*' : '') + '</span><div class="xp-qmain"><p>' + q.html + marksTag(q.marks) + '</p>' + answerSpace(it, st) + '</div></div>');
          ms.push(markRow(num + '(' + lab + ')' + (it.kind === 'essay' ? '*' : ''), it, lay));
        });
      });
      if (Q.whole) {
        body.push(answerSpace(Q.whole, st));
        ms.push(markRow(String(num), Q.whole, null));
      }
      body.push('</div>');
    });
    return { paper: body.join('\n'), ms: ms.join('\n') };
  }

  function marksTag(m) { return ' <span class="xp-marks">[' + m + ']</span>'; }

  function passageHtml(lay, span) {
    var rows = lay.lines.map(function (ln, i) {
      var n = i + 1;
      var pad = i === 0 && lay.indent ? ' style="padding-left:' + lay.indent + 'ch"' : '';
      return '<div class="xp-line"' + pad + '><span class="xp-ln">' + (n % 5 === 0 ? n : '') + '</span>' + ln.map(function (k) { return esc(W[k]); }).join(' ') + '</div>';
    });
    return '<div class="xp-passage" lang="la">' + rows.join('') + '</div><p class="xp-cite">' + esc(cite(span)) + '</p>';
  }

  function questionHtml(it, lay, P, rand) {
    var x = it.item, whole = it.whole || (x.start === P.span.start && x.end === P.span.end);
    if (it.kind === 'trans') {
      return { marks: 5, html: 'Translate <i>' + esc(autoLemma(x)) + '</i> (' + lineRef(lay, x) + ').' };
    }
    if (it.kind === 'essay') {
      var stem = whole ? cap(x.q) : '<i>' + esc(autoLemma(x)) + '</i> (' + lineRef(lay, x) + '): ' + x.q;
      return { marks: 15, html: stem + '<br>You should refer both to the content and to the language of the passage.' };
    }
    var form = x.type === 'context' ? 'lead' : x.form || (rand() < 0.5 ? 'lead' : 'in');
    var lem = '<i>' + esc(showLemma(x.lemma)) + '</i>', ref = lineRef(lay, x);
    return { marks: x.marks, html: form === 'in' ? 'In ' + ref + ' (' + lem + '), ' + x.q : lem + ' (' + ref + '): ' + x.q };
  }

  function answerSpace(it, st) {
    if (!st.lines) return '';
    var n = it.kind === 'essay' ? 24 : it.kind === 'trans' ? 7 : Math.max(2, Math.ceil(it.item.marks * 1.5));
    return '<div class="xp-lines">' + new Array(n + 1).join('<span></span>') + '</div>';
  }

  /* ── the mark scheme ── */
  function markRow(label, it, lay) {
    var x = it.item, ans, marks, guide = '';
    if (it.kind === 'trans') {
      var en = D.units.filter(function (u) { return u.start >= x.start && u.end <= x.end; }).map(function (u) { return u.en; }).join(' ');
      marks = 5;
      ans = '<p class="xp-ms-latin" lang="la"><i>' + esc(W.slice(x.start, x.end + 1).join(' ')) + '</i></p>' +
            '<p class="xp-ms-sub">Specimen translation</p><p>' + esc(en) + '</p>';
      guide = 'Assess against the 5-mark translation grid (below). Repeated or consequential errors should not be penalised.';
    } else if (it.kind === 'essay') {
      marks = 15;
      ans = '<p class="xp-ms-sub">Relevant points from the content of the passage</p><ul>' + x.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
            '<p class="xp-ms-sub">Stylistic features of the language in the passage</p><ul>' + x.features.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>';
      guide = 'Assess against the 15-mark levels (below). Answers must cover both content and language; no set number of points is required, and other valid points are credited.';
    } else {
      marks = x.marks;
      ans = '<ul>' + x.points.map(function (p) { return '<li>' + p + ' (1)</li>'; }).join('') + '</ul>';
      guide = x.guidance || (x.points.length > x.marks ? 'Accept any ' + x.marks + '.' : '');
    }
    return '<tr><td class="xp-ms-num">' + label + '</td><td>' + ans + '</td><td class="xp-ms-marks">' + marks + '</td><td class="xp-ms-guide">' + guide + '</td></tr>';
  }

  var GRID5 = [
    [5, 'Accurate translation with one slight error allowed'],
    [4, 'Mostly correct'],
    [3, 'More than half right'],
    [2, 'Less than half right'],
    [1, 'Little recognisable relation to the meaning of the Latin'],
    [0, 'No response, or no response worthy of credit']
  ];
  // OCR's grid for the 15-mark extended response (H443/03 mark schemes, 2022-2026)
  var LEVELS15 = [
    ['5', '13\u201315', ['very good engagement with the question', 'expresses a range of perceptive points, with very good development, leading to convincing conclusions, based on a range of well selected, accurate and precise examples from the passage.'], 'The response is logically structured, with a well-developed, sustained and coherent line of reasoning.'],
    ['4', '10\u201312', ['good engagement with the question', 'expresses a range of relevant points, with good development, leading to sound conclusions, based on well selected examples from the passage.'], 'The response is logically structured, with a well-developed and clear line of reasoning.'],
    ['3', '7\u20139', ['some engagement with the question', 'expresses reasonable points, with some development, leading to tenable conclusions, based on a selection of some examples from the passage.'], 'The response presents a line of reasoning which is mostly relevant and has some structure.'],
    ['2', '4\u20136', ['limited engagement with the question', 'expresses limited points, with little development, leading to a weak conclusion, which is occasionally supported by examples from the passage'], 'The response presents a line of reasoning but may lack structure.'],
    ['1', '1\u20133', ['very limited engagement with the question', 'expresses points which are of little relevance and supported with little evidence from the passage'], 'The information is communicated in an unstructured way.']
  ];
  // What the examiners' reports (2024-2026) and the exemplar commentaries say, question by question
  var ADVICE = [
    ['Short questions', ['Answer in English. These questions need no Latin quotation and no literary analysis; quoting Latin only costs time.', 'Explain what the Latin means, rather than giving a bare literal translation: examiners look for understanding.', 'Keep separate points separate. Where a question has two parts, make both clear.', 'Watch the small words that change the sense: double negatives, tenses, and words that look like English but mean something else.']],
    ['The 5-mark translation', ['Translate every word. Leaving a word out is generally a major error; only a connective that does not change the sense counts as slight.', 'Keep the tenses right: a wrong past tense is slight, any other wrong tense is major.', 'A natural rendering is fine if it conveys the meaning of every word; an over-literal one that loses the sense is not.']],
    ['The 15-mark question', ['Answer the question set: tie every point to its key word (dramatic, vivid, ridicule, a strong defence and so on).', 'Quote whole Latin phrases and translate them accurately. Isolated single words, or words picked because they look like English, are unlikely to be credited.', 'Name the feature, then develop its effect: say why it makes the passage dramatic or vivid, not just that it is emphatic.', 'Cover the whole passage, with one point per quotation, rather than several points on the same phrase.', 'Use both content and language. Retelling the story is not analysis, and a list of devices without their effect is not either.']]
  ];
  function msAppendix() {
    return '<div class="xp-ms-app"><h3>The 5-mark translation grid</h3><table class="xp-ms-grid"><tr><th>Marks</th><th>Description</th></tr>' +
      GRID5.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>'; }).join('') + '</table>' +
      '<p class="xp-ms-note">The principle is the proportion of sense achieved. Where there is only one error, a slight error (a wrong past tense, a vocabulary near-miss, an unimportant connective left out) still allows 5; a major error (another wrong tense, a wrong construction or case, a word that changes the sense, an omitted word) gives 4.</p>' +
      '<h3>The 15-mark grid for the extended response question</h3>' +
      '<p class="xp-ms-note">This question focuses on candidates\u2019 ability to select relevant examples of content and language from the passage and to structure an answer around these examples to express relevant points. Therefore candidates will be assessed on the quality of the points made and the range and quality of the examples they have selected from the passage. Examiners must use a best fit approach to the marking grid.</p>' +
      '<table class="xp-ms-grid"><tr><th>Level</th><th>Marks</th><th>Characteristics of performance (AO3: critically analyse, evaluate and respond to literature)</th></tr>' +
      LEVELS15.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td><ul>' + r[2].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul><i>' + r[3] + '</i></td></tr>'; }).join('') + '</table>' +
      '<p class="xp-ms-note">0 = no response or no response worthy of credit. Grid from OCR\u2019s A Level Latin literature mark schemes.</p>' +
      '<h3>What the examiners say</h3>' + (D.paper.eyeHref ? '<p class="xp-ms-note xp-print-hide">To see what these levels look like in answers to questions on this text, try <a href="' + D.paper.eyeHref + '">Examiner\u2019s eye</a>.</p>' : '') + ADVICE.map(function (a) { return '<p class="xp-ms-sub">' + a[0] + '</p><ul class="xp-ms-advice">' + a[1].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; }).join('') +
      '<p class="xp-ms-note">' + (D.paper.adviceNote || 'Drawn from OCR\u2019s examiners\u2019 reports on H443/03 (2024\u20132026) and the commentaries on candidate answers.') + '</p></div>';
  }

  /* ── the page ── */
  function sheetHead(p, st) {
    var k = KINDS[st.kind], marks = k.marks, P = D.paper;
    var chs = rangeLabel();
    var what = st.kind === 'full' ? 'Section A' : st.kind === 'trans' ? 'Translation practice' : st.kind === 'essay' ? '15-mark question' : 'Short questions';
    return '<div class="xp-head">' +
      '<p class="xp-kicker">Practice paper in the style of ' + P.board + ' ' + P.level + ' ' + P.code + '</p>' +
      '<h2 class="xp-title">' + P.name + '</h2>' +
      '<p class="xp-sub">' + what + ': ' + P.author + ', <i>' + P.title + '</i> &middot; ' + esc(chs) + '</p>' +
      (p.widened ? '<p class="xp-note">The ' + parts() + ' chosen are short, so some of the Latin comes from the ' + parts() + ' either side.</p>' : '') +
      '<div class="xp-facts"><span><b>Time allowed:</b> ' + minutesFor(marks) + ' minutes</span><span><b>Total marks:</b> ' + marks + '</span><span><b>Paper:</b> ' + code(st) + '</span></div>' +
      '</div>' +
      '<div class="xp-instr"><p class="xp-instr-h">Instructions</p><ul><li>Answer all the questions.</li><li>' + (st.lines ? 'Write your answers in the spaces provided.' : 'Write your answers on lined paper. The question numbers must be clearly shown.') + '</li><li>Do not use a dictionary.</li></ul>' +
      '<p class="xp-instr-h">Information</p><ul><li>The total mark for this paper is ' + marks + '.</li><li>The marks for each question are shown in brackets [ ].</li>' +
      (st.kind === 'full' || st.kind === 'essay' ? '<li>Quality of extended response will be assessed in questions marked with an asterisk (*).</li>' : '') + '</ul></div>';
  }
  function parts() { return D.paper.parts || 'chapters'; }
  function code(st) { return D.paper.work.slice(0, 3).toUpperCase() + '-' + st.seed; }

  function draw() {
    var p = assemble(state);
    if (!p) {
      els.out.innerHTML = '<div class="xp-empty"><p>There is not enough text in ' + rangeLabel() + ' for this kind of paper. Choose more ' + parts() + ', or a shorter paper.</p></div>';
      els.ms.innerHTML = ''; paper = null; return;
    }
    paper = p;
    var r = render(p, state, rng(state.seed + ':forms'));
    var sec = state.kind === 'trans' ? '' : '<div class="xp-section"><h3>Section A</h3><p>Answer all the questions.</p></div>';
    els.out.innerHTML = '<article class="xp-sheet">' + sheetHead(p, state) + sec + r.paper + '<p class="xp-end">END OF QUESTION PAPER</p></article>';
    els.ms.innerHTML = '<article class="xp-sheet xp-ms-sheet"><div class="xp-head"><p class="xp-kicker">Mark scheme &middot; ' + code(state) + '</p><h2 class="xp-title">' + D.paper.name + ': mark scheme</h2><p class="xp-sub">' + D.paper.author + ', <i>' + D.paper.title + '</i> &middot; ' + rangeLabel() + '</p></div>' +
      '<p class="xp-ms-note xp-ms-lead">Short questions are answered in English and need no Latin; the Latin in brackets shows where each point comes from.</p>' +
      '<table class="xp-ms"><thead><tr><th>Question</th><th>Answer</th><th>Marks</th><th>Guidance</th></tr></thead><tbody>' + r.ms + '</tbody></table>' + msAppendix() + '</article>';
    els.code.textContent = code(state);
  }

  function rangeLabel() {
    var a = D.sections[state.from - 1], b = D.sections[state.to - 1];
    if (state.from === state.to) return a.title;
    if (VERSE) {   // "Lines 1–128 and 529–546" where the chosen sections span the gap
      var first = D.wline[a.start], last = D.wline[b.end];
      var gap = (D.breaks || []).filter(function (k) { return k > a.start && k <= b.end; })[0];
      return gap === undefined ? 'Lines ' + first + '\u2013' + last : 'Lines ' + first + '\u2013' + D.wline[gap - 1] + ' and ' + D.wline[gap] + '\u2013' + last;
    }
    return a.title + ' to ' + b.title.replace(/^Chapter\s*/, '');
  }

  /* ── settings, kept in the address ── */
  function readUrl() {
    var q = new URLSearchParams(location.search), n = D.sections.length;
    var from = Math.min(n, Math.max(1, parseInt(q.get('from'), 10) || 1));
    var to = Math.min(n, Math.max(from, parseInt(q.get('to'), 10) || n));
    state = {
      kind: KINDS[q.get('kind')] ? q.get('kind') : 'full',
      layout: /^(one|two)$/.test(q.get('layout')) ? q.get('layout') : 'any',
      from: from, to: to,
      seed: /^[A-Z0-9]{3,12}$/.test(q.get('paper') || '') ? q.get('paper') : newSeed(),
      lines: q.get('lines') === '1'
    };
  }
  function writeUrl() {
    var q = new URLSearchParams({ kind: state.kind, from: state.from, to: state.to, paper: state.seed });
    if (state.kind === 'full' && state.layout !== 'any') q.set('layout', state.layout);
    if (state.lines) q.set('lines', '1');
    history.replaceState(null, '', location.pathname + '?' + q.toString());
  }
  function syncControls() {
    els.from.value = state.from; els.to.value = state.to;
    els.kind.forEach(function (b) { b.setAttribute('aria-pressed', b.value === state.kind ? 'true' : 'false'); });
    els.layout.value = state.layout;
    els.layoutWrap.hidden = state.kind !== 'full';
    els.lines.checked = state.lines;
  }
  function update(fresh) {
    if (fresh) state.seed = newSeed();
    writeUrl(); syncControls(); draw();
  }

  function init(data) {
    D = data; W = D.words;
    var P = D.paper, L = P.lengths || {};
    VERSE = D.mode === 'verse';
    if (P.shortMarks) SHORT_MARKS = P.shortMarks;
    if (L.passage) { PASSAGE_MIN = L.passage[0]; PASSAGE_MAX = L.passage[1]; }
    if (L.essayPassage) ESSAY_MAX = L.essayPassage;
    if (L.long) LONG_MAX = L.long;
    if (P.twoPassageShare != null) TWO_SHARE = P.twoPassageShare;
    KINDS.short.marks = SHORT_MARKS + 5;
    KINDS.full.marks = SHORT_MARKS + 5 + 15;
    els.out = root.querySelector('[data-exam-paper]');
    els.ms = root.querySelector('[data-exam-ms]');
    els.code = root.querySelector('[data-exam-code]');
    els.from = root.querySelector('[data-exam-from]');
    els.to = root.querySelector('[data-exam-to]');
    els.kind = [].slice.call(root.querySelectorAll('[data-exam-kind]'));
    els.layout = root.querySelector('[data-exam-layout]');
    els.layoutWrap = root.querySelector('[data-exam-layout-wrap]');
    els.lines = root.querySelector('[data-exam-lines]');
    var opts = D.sections.map(function (s) { return '<option value="' + s.n + '">' + esc(s.title + ': ' + s.subtitle) + '</option>'; }).join('');
    els.from.innerHTML = opts; els.to.innerHTML = opts;

    readUrl(); update(false);

    els.from.addEventListener('change', function () { state.from = +els.from.value; if (state.to < state.from) state.to = state.from; update(true); });
    els.to.addEventListener('change', function () { state.to = +els.to.value; if (state.from > state.to) state.from = state.to; update(true); });
    els.kind.forEach(function (b) { b.addEventListener('click', function () { state.kind = b.value; update(true); }); });
    els.layout.addEventListener('change', function () { state.layout = els.layout.value; update(true); });
    els.lines.addEventListener('change', function () { state.lines = els.lines.checked; update(false); });
    root.querySelector('[data-exam-new]').addEventListener('click', function () { update(true); });
    var msBtn = root.querySelector('[data-exam-show-ms]');
    msBtn.addEventListener('click', function () {
      var on = els.ms.hidden;
      els.ms.hidden = !on;
      msBtn.textContent = on ? 'Hide mark scheme' : 'Show mark scheme';
      if (on) els.ms.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    root.querySelector('[data-exam-print]').addEventListener('click', function () { printIt(false); });
    root.querySelector('[data-exam-print-ms]').addEventListener('click', function () { printIt(true); });
    root.querySelector('[data-exam-copy]').addEventListener('click', function (e) {
      var btn = e.currentTarget;
      try { navigator.clipboard.writeText(location.href).then(function () { btn.textContent = 'Link copied'; setTimeout(function () { btn.textContent = 'Copy link'; }, 1600); }); } catch (err) { /* no clipboard: the address bar has the link */ }
    });
  }

  function printIt(withMs) {
    document.body.classList.toggle('xp-print-ms', withMs);
    document.body.classList.toggle('xp-print-paper', !withMs);
    window.print();
  }

  fetch(root.getAttribute('data-exam'))
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(init)
    .catch(function () {
      root.querySelector('[data-exam-paper]').innerHTML = '<div class="xp-empty"><p>The questions could not be loaded. Check your connection and reload the page.</p></div>';
    });
})();
