/* Examiner's eye: practice answers to OCR's 15-mark literature question on
   one set text. Built from <text>/data/eye.json (scripts/build-eye.py): the
   questions and passages, the answers at every level tagged with the moves
   examiners reward and the problems they mark down, their marks and
   commentaries, "level up" drills and OCR's examiners' comments.

   Four views share those tags:
     answers     mark an answer yourself, X-ray it, read the verdict
     problems    what loses marks: the examiners' words, where it happens
                 in the answers, and drills to fix it
     benchmarks  what the answers at each level actually contain
     print       answers without marks for a class, with a separate key  */
(function () {
  'use strict';

  var root = document.querySelector('[data-eye]');
  if (!root) return;

  var MOVES = [
    { id: 'quote', label: 'Quotes the Latin', hint: 'a whole Latin phrase from the passage' },
    { id: 'translate', label: 'Translates it', hint: 'an accurate translation of the quotation' },
    { id: 'device', label: 'Names the feature', hint: 'the device or choice of language' },
    { id: 'effect', label: 'Explains the effect', hint: 'what the feature does, developed' },
    { id: 'link', label: 'Links to the question', hint: 'back to the question’s key word' }
  ];
  var PROBLEMS = [
    { id: 'isolated', label: 'Isolated words', hint: 'a single word or fragment without its context' },
    { id: 'narrative', label: 'Retelling the story', hint: 'paraphrase in place of analysis' },
    { id: 'undeveloped', label: 'Feature named, effect not explained', hint: 'a device spotted and left there' },
    { id: 'offquestion', label: 'Drifting from the question', hint: 'points that do not answer what was asked' },
    { id: 'mistranslation', label: 'Mistranslated Latin', hint: 'a quotation misunderstood' }
  ];
  var HABITS = [
    { id: 'quotation', label: 'Quote and translate whole phrases' },
    { id: 'focus', label: 'Answer the question’s key word' },
    { id: 'coverage', label: 'Range across the whole passage' },
    { id: 'range', label: 'Make enough points' },
    { id: 'timing', label: 'Use the time well' }
  ];
  // OCR's 15-mark grid
  var LEVELS = [
    { n: 5, lo: 13, hi: 15, text: 'very good engagement with the question; a range of perceptive points, with very good development, leading to convincing conclusions, based on a range of well selected, accurate and precise examples from the passage' },
    { n: 4, lo: 10, hi: 12, text: 'good engagement with the question; a range of relevant points, with good development, leading to sound conclusions, based on well selected examples from the passage' },
    { n: 3, lo: 7, hi: 9, text: 'some engagement with the question; reasonable points, with some development, leading to tenable conclusions, based on a selection of some examples from the passage' },
    { n: 2, lo: 4, hi: 6, text: 'limited engagement with the question; limited points, with little development, leading to a weak conclusion, occasionally supported by examples from the passage' },
    { n: 1, lo: 1, hi: 3, text: 'very limited engagement with the question; points of little relevance, supported with little evidence from the passage' }
  ];
  function levelOf(mark) { for (var i = 0; i < LEVELS.length; i++) if (mark >= LEVELS[i].lo) return LEVELS[i]; return null; }

  var D, Q = {}, views = {}, state = { tab: 'answers', ex: null, mode: 'mark', layers: {}, filter: 'all' };

  /* ── small helpers ── */
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }
  function store(key, val) {
    try { if (val === undefined) return JSON.parse(localStorage.getItem('eye:' + key)); localStorage.setItem('eye:' + key, JSON.stringify(val)); } catch (e) { return null; }
  }
  function words(s) { return (s.match(/[A-Za-zÀ-ɏ’'-]+/g) || []).length; }
  function tagCount(e, tag) { return e.segments.filter(function (s) { return !s.br && (s.tags || []).indexOf(tag) >= 0; }).length; }
  function answerWords(e) { return e.segments.reduce(function (n, s) { return n + (s.br ? 0 : words(s.t)); }, 0); }
  function kindLabel(e) { return { script: 'Exam script', typed: 'Model answer', extract: 'Extract' }[e.kind] || 'Practice answer'; }
  function title(e) { var q = Q[e.question]; return (q.where || q.author + ', ' + q.work) + (e.label ? ' \u00b7 ' + e.label : ''); }
  function scanned(e) { return !!(e.images && e.images.length); }
  function ask(q) { var s = q.question.replace(/^In this passage, /, ''); return s.charAt(0).toUpperCase() + s.slice(1); }
  function revealed(e) { return !!store('seen:' + e.id); }

  /* ── the passage and the answer ── */
  function passageHtml(q) {
    var start = q.lineStart || 1;
    return '<div class="ee-passage" lang="la">' + q.passage.map(function (l, i) {
      var n = start + i;
      return '<div class="ee-pl"><span>' + esc(l) + '</span><b>' + (n % 5 === 0 ? n : '') + '</b></div>';
    }).join('') + '</div><p class="ee-cite">' + esc(q.author + ', ' + q.work) + '</p>';
  }
  function questionHtml(q, open) {
    return '<div class="ee-q"><p class="ee-q-meta">' + esc(q.paper) + (q.number ? ' &middot; Question ' + esc(q.number) : '') + '</p>' +
      '<p class="ee-q-text">' + esc(q.question) + (q.instruction ? ' <span>' + esc(q.instruction) + '</span>' : '') + ' <b>[15]</b></p>' +
      '<details class="ee-pass"' + (open ? ' open' : '') + '><summary>The passage</summary>' + passageHtml(q) + '</details></div>';
  }
  function transcriptHtml(e) {
    var out = '<p>';
    e.segments.forEach(function (s) {
      if (s.br) { out += '</p><p>'; return; }
      var tags = s.tags || [];
      out += tags.length ? '<span class="ee-s ' + tags.map(function (t) { return 't-' + t; }).join(' ') + '">' + esc(s.t) + '</span>' : esc(s.t);
    });
    return '<div class="ee-typed">' + out + '</p></div>';
  }
  function scansHtml(e) {
    return '<div class="ee-scans">' + e.images.map(function (src, i) {
      return '<img src="' + esc(src) + '" alt="Page ' + (i + 1) + ' of the handwritten answer" loading="lazy">';
    }).join('') + '</div>';
  }

  /* ── answers ── */
  function renderAnswers() {
    var list = D.exemplars.filter(function (e) {
      return state.filter === 'all' || (state.filter === 'full' ? e.kind !== 'extract' : e.kind === 'extract');
    });
    var kinds = D.exemplars.some(function (e) { return e.kind === 'extract'; }) && D.exemplars.some(function (e) { return e.kind !== 'extract'; });
    var items = list.map(function (e) {
      var mark = e.mark == null ? '' : revealed(e) ? '<span class="ee-mk">' + e.mark + '/15</span>' : '<span class="ee-mk ee-mk-hid">?/15</span>';
      return '<button type="button" class="ee-item' + (state.ex === e.id ? ' on' : '') + '" data-ex="' + esc(e.id) + '">' +
        '<span class="ee-it-t">' + esc(title(e)) + '</span>' +
        '<span class="ee-it-m">' + esc(ask(Q[e.question])) + '</span>' + mark + '</button>';
    }).join('');
    views.answers.innerHTML = '<div class="ee-cols"><aside class="ee-list">' +
      (kinds ? '<div class="ee-filter" role="group" aria-label="Show">' + [['all', 'All'], ['full', 'Full answers'], ['extract', 'Extracts']].map(function (f) {
        return '<button type="button" data-filter="' + f[0] + '" aria-pressed="' + (state.filter === f[0]) + '">' + f[1] + '</button>';
      }).join('') + '</div>' : '') + items + '</aside><section class="ee-main" data-ex-main></section></div>';
    views.answers.querySelectorAll('[data-ex]').forEach(function (b) { b.addEventListener('click', function () { openExemplar(b.getAttribute('data-ex')); }); });
    views.answers.querySelectorAll('[data-filter]').forEach(function (b) { b.addEventListener('click', function () { state.filter = b.getAttribute('data-filter'); renderAnswers(); }); });
    renderExemplar();
  }

  function openExemplar(id, mode) {
    state.ex = id;
    var e = D.exemplars.filter(function (x) { return x.id === id; })[0];
    state.mode = mode || (e.mark == null || revealed(e) ? 'xray' : 'mark');
    location.hash = 'answers/' + id;
    renderAnswers();
    var main = views.answers.querySelector('[data-ex-main]');
    if (main && window.innerWidth < 900) main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderExemplar() {
    var main = views.answers.querySelector('[data-ex-main]');
    var e = D.exemplars.filter(function (x) { return x.id === state.ex; })[0];
    if (!e) {
      main.innerHTML = '<div class="ee-intro"><h2>How to use this</h2><p>Choose an answer on the left. Read the question and the passage, then the answer, and decide which level of OCR’s grid it reaches before you see its mark. Then X-ray it to see what earned the marks: switch on each move the examiners reward, and each problem they mark down.</p>' +
        '<p>Each question has answers at different levels, so compare them: the same passage, and what separates a Level 5 answer from a Level 2 one.</p>' + legendHtml() + '</div>';
      return;
    }
    var q = Q[e.question], hasMark = e.mark != null;
    var modes = (hasMark ? [['mark', 'Mark it']] : []).concat([['xray', 'X-ray'], ['verdict', 'The verdict']]);
    var head = '<div class="ee-head"><p class="ee-kicker">' + esc(kindLabel(e)) + '</p><h2>' + esc(title(e)) + '</h2></div>' + questionHtml(q, false) +
      '<div class="ee-modes" role="tablist">' + modes.map(function (m) {
        return '<button type="button" role="tab" data-mode="' + m[0] + '" aria-selected="' + (state.mode === m[0]) + '">' + m[1] + '</button>';
      }).join('') + '</div>';
    var body = state.mode === 'mark' ? markHtml(e) : state.mode === 'xray' ? xrayHtml(e) : verdictHtml(e);
    main.innerHTML = head + '<div class="ee-body">' + body + '</div><p class="ee-src">' + esc(e.source) + '</p>';
    main.querySelectorAll('[data-mode]').forEach(function (b) { b.addEventListener('click', function () { state.mode = b.getAttribute('data-mode'); renderExemplar(); }); });
    if (state.mode === 'mark') wireMark(main, e);
    if (state.mode === 'xray') wireXray(main, e);
  }

  function answerHtml(e, typedFirst) {
    if (!scanned(e)) return transcriptHtml(e);
    return '<div class="ee-ans' + (typedFirst ? ' show-typed' : '') + '"><div class="ee-ans-sw" role="group" aria-label="Show the answer as">' +
      '<button type="button" data-show="scan" aria-pressed="' + !typedFirst + '">Handwritten</button><button type="button" data-show="typed" aria-pressed="' + !!typedFirst + '">Typed out</button></div>' +
      '<div class="ee-ans-scan">' + scansHtml(e) + '</div><div class="ee-ans-typed">' + transcriptHtml(e) + '</div></div>';
  }
  function wireAnswer(box) {
    var ans = box.querySelector('.ee-ans');
    if (!ans) return;
    ans.querySelectorAll('[data-show]').forEach(function (b) {
      b.addEventListener('click', function () {
        var typed = b.getAttribute('data-show') === 'typed';
        ans.classList.toggle('show-typed', typed);
        ans.querySelectorAll('[data-show]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      });
    });
  }

  /* Mark it: place the answer on OCR's grid, then see its mark. */
  function markHtml(e) {
    var mine = store('mark:' + e.id) || {};
    return answerHtml(e, false) +
      '<div class="ee-markbox"><h3>Your mark</h3><p class="ee-note">Start at the top level and work down until the description fits, then choose a mark within the level.</p>' +
      '<div class="ee-grid">' + LEVELS.map(function (L) {
        return '<button type="button" class="ee-lv" data-lv="' + L.n + '" aria-pressed="' + (mine.level === L.n) + '"><b>Level ' + L.n + '</b><span>' + L.lo + '–' + L.hi + '</span><em>' + L.text + '</em></button>';
      }).join('') + '</div><div class="ee-marks" data-marks></div>' +
      '<button type="button" class="btn green" data-reveal' + (mine.mark ? '' : ' disabled') + '>See the mark</button></div>';
  }
  function wireMark(main, e) {
    wireAnswer(main);
    var mine = store('mark:' + e.id) || {};
    var marksBox = main.querySelector('[data-marks]'), reveal = main.querySelector('[data-reveal]');
    function drawMarks() {
      var L = LEVELS.filter(function (x) { return x.n === mine.level; })[0];
      if (!L) { marksBox.innerHTML = ''; return; }
      var html = '';
      for (var m = L.lo; m <= L.hi; m++) html += '<button type="button" data-m="' + m + '" aria-pressed="' + (mine.mark === m) + '">' + m + '</button>';
      marksBox.innerHTML = '<span>Mark within Level ' + L.n + ':</span> ' + html;
      marksBox.querySelectorAll('[data-m]').forEach(function (b) {
        b.addEventListener('click', function () { mine.mark = +b.getAttribute('data-m'); store('mark:' + e.id, mine); drawMarks(); reveal.disabled = false; });
      });
    }
    main.querySelectorAll('[data-lv]').forEach(function (b) {
      b.addEventListener('click', function () {
        mine = { level: +b.getAttribute('data-lv') }; store('mark:' + e.id, mine);
        main.querySelectorAll('[data-lv]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        reveal.disabled = true; drawMarks();
      });
    });
    drawMarks();
    reveal.addEventListener('click', function () { store('seen:' + e.id, true); state.mode = 'verdict'; renderAnswers(); });
  }

  /* X-ray: switch the moves and problems on and off over the typed answer. */
  function legendHtml(e) {
    function chip(t, kind) {
      var n = e ? tagCount(e, t.id) : null;
      var on = state.layers[t.id] !== false;
      return '<button type="button" class="ee-chip c-' + t.id + '" data-layer="' + t.id + '" aria-pressed="' + on + '" title="' + esc(t.hint) + '"><i></i>' + esc(t.label) + (n != null ? ' <b>' + n + '</b>' : '') + '</button>';
    }
    return '<div class="ee-legend"><div><span class="ee-lg-h">What earns marks</span>' + MOVES.map(function (t) { return chip(t); }).join('') + '</div>' +
      '<div><span class="ee-lg-h">What loses marks</span>' + PROBLEMS.map(function (t) { return chip(t); }).join('') + '</div></div>';
  }
  function xrayHtml(e) {
    return legendHtml(e) + '<div class="ee-xray">' + (!scanned(e) ? transcriptHtml(e) : '<div class="ee-xray-cols"><div class="ee-xray-typed">' + transcriptHtml(e) + '</div><div class="ee-xray-scan">' + scansHtml(e) + '</div></div>') + '</div>' +
      '<p class="ee-note">Hover over or tap a button to see what it means. Switch a layer off to see the answer without it.</p>';
  }
  function applyLayers(box) {
    var x = box.querySelector('.ee-xray');
    if (!x) return;
    MOVES.concat(PROBLEMS).forEach(function (t) { x.classList.toggle('show-' + t.id, state.layers[t.id] !== false); });
  }
  function wireXray(main) {
    main.querySelectorAll('[data-layer]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-layer');
        state.layers[id] = state.layers[id] === false;
        b.setAttribute('aria-pressed', String(state.layers[id] !== false));
        applyLayers(main);
      });
    });
    applyLayers(main);
  }

  /* The verdict: the mark and commentary, with what the X-ray counted. */
  function verdictHtml(e) {
    var mine = store('mark:' + e.id), L = e.mark != null ? levelOf(e.mark) : null, out = '';
    if (e.mark != null) {
      store('seen:' + e.id, true);
      out += '<div class="ee-verdict"><div class="ee-vmark"><b>' + e.mark + '<small>/15</small></b><span>Level ' + L.n + '</span></div>';
      if (mine && mine.mark) {
        var diff = mine.mark - e.mark;
        out += '<div class="ee-vmine">You gave it <b>' + mine.mark + '</b> (Level ' + mine.level + '). ' +
          (diff === 0 ? 'Exactly the mark it was given.' : Math.abs(diff) <= 1 ? 'Within a mark.' : 'It was given ' + Math.abs(diff) + ' marks ' + (diff > 0 ? 'fewer' : 'more') + '. Read the commentary to see why.') + '</div>';
      }
      out += '<p class="ee-vlevel"><b>Level ' + L.n + ' (' + L.lo + '–' + L.hi + '):</b> ' + L.text + '.</p></div>';
    } else if (e.level) {
      out += '<div class="ee-verdict"><div class="ee-vmark"><b>L' + e.level + '</b><span>as the examiners describe it</span></div></div>';
    }
    out += '<h3>' + (e.kind === 'practice' ? 'Why it gets this mark' : 'What the examiner said') + '</h3><blockquote class="ee-comm">' + esc(e.commentary) + '</blockquote>';
    var counts = MOVES.map(function (t) { return '<li><b>' + tagCount(e, t.id) + '</b> ' + esc(t.label.toLowerCase()) + '</li>'; }).join('') +
      PROBLEMS.filter(function (t) { return tagCount(e, t.id); }).map(function (t) { return '<li class="bad"><b>' + tagCount(e, t.id) + '</b> ' + esc(t.label.toLowerCase()) + '</li>'; }).join('');
    out += '<h3>In this answer</h3><ul class="ee-counts">' + counts + (e.kind !== 'extract' ? '<li><b>' + answerWords(e) + '</b> words</li>' : '') + '</ul>' +
      '<p><button type="button" class="btn line sm" data-mode="xray">X-ray the answer</button></p>';
    return out;
  }

  /* ── what loses marks ── */
  function snippets(tag) {
    var out = [];
    D.exemplars.forEach(function (e) {
      e.segments.forEach(function (s, i) {
        if (s.br || (s.tags || []).indexOf(tag) < 0) return;
        // a little of the answer either side, for context
        var before = '', after = '';
        for (var k = i - 1; k >= 0 && before.length < 90; k--) { if (e.segments[k].br) break; before = e.segments[k].t + before; }
        for (k = i + 1; k < e.segments.length && after.length < 90; k++) { if (e.segments[k].br) break; after += e.segments[k].t; }
        out.push({ e: e, html: (before.length > 90 ? '…' : '') + esc(before.slice(-90)) + '<mark>' + esc(s.t) + '</mark>' + esc(after.slice(0, 90)) + (after.length > 90 ? '…' : '') });
      });
    });
    return out;
  }
  function renderProblems() {
    var pick = state.problem || 'isolated';
    var all = PROBLEMS.concat(HABITS);
    var nav = '<div class="ee-pnav"><p class="ee-lg-h">What loses marks</p>' + PROBLEMS.map(btn).join('') + '<p class="ee-lg-h">What the examiners want</p>' + HABITS.map(btn).join('') + '</div>';
    function btn(p) {
      var n = D.comments.filter(function (c) { return c.problem === p.id; }).length;
      return '<button type="button" data-prob="' + p.id + '" aria-pressed="' + (pick === p.id) + '">' + esc(p.label) + (n ? ' <b>' + n + '</b>' : '') + '</button>';
    }
    var P = all.filter(function (p) { return p.id === pick; })[0];
    var comms = D.comments.filter(function (c) { return c.problem === pick; });
    var html = '<h2>' + esc(P.label) + '</h2>';
    html += comms.length ? '<h3>What OCR’s examiners say</h3>' + comms.map(function (c) { return '<blockquote class="ee-comm">' + esc(c.text) + '<cite>' + esc(c.source) + '</cite></blockquote>'; }).join('') : '';
    var sn = PROBLEMS.some(function (p) { return p.id === pick; }) ? snippets(pick) : [];
    if (sn.length) html += '<h3>Where it happens in the answers</h3><ul class="ee-snips">' + sn.map(function (s) {
      return '<li><p>' + s.html + '</p><button type="button" class="ee-link" data-goto="' + esc(s.e.id) + '">' + esc(title(s.e)) + ' &middot; ' + esc(kindLabel(s.e)) + (s.e.mark != null && revealed(s.e) ? ' &middot; ' + s.e.mark + '/15' : '') + '</button></li>';
    }).join('') + '</ul>';
    var drills = D.drills.filter(function (r) { return r.problem === pick; });
    if (drills.length) html += '<h3>Level it up</h3><p class="ee-note">Read the weak point, write a stronger one yourself, then compare it with the stronger version.</p>' + drills.map(drillHtml).join('');
    views.problems.innerHTML = '<div class="ee-cols">' + nav + '<section class="ee-main">' + html + '</section></div>';
    views.problems.querySelectorAll('[data-prob]').forEach(function (b) { b.addEventListener('click', function () { state.problem = b.getAttribute('data-prob'); renderProblems(); }); });
    views.problems.querySelectorAll('[data-goto]').forEach(function (b) { b.addEventListener('click', function () { setTab('answers'); openExemplar(b.getAttribute('data-goto'), 'xray'); }); });
    views.problems.querySelectorAll('[data-drill]').forEach(function (box) {
      var id = box.getAttribute('data-drill'), ta = box.querySelector('textarea');
      ta.value = store('drill:' + id) || '';
      ta.addEventListener('input', function () { store('drill:' + id, ta.value); });
      box.querySelector('[data-strong]').addEventListener('click', function (ev) { box.classList.add('open'); ev.currentTarget.remove(); });
    });
  }
  function drillHtml(r) {
    return '<div class="ee-drill" data-drill="' + esc(r.id) + '"><p class="ee-dctx">' + esc(r.context) + '</p>' +
      (r.latin ? '<p class="ee-dlat" lang="la">' + esc(r.latin) + '</p>' : '') +
      '<p class="ee-dweak"><span>Weak point</span>' + esc(r.weak) + '</p>' +
      '<label class="ee-dyou"><span>Your stronger point</span><textarea rows="3" placeholder="Quote, translate, name the feature, explain its effect, link to the question"></textarea></label>' +
      '<button type="button" class="btn line sm" data-strong>Show the stronger version</button>' +
      '<div class="ee-dstrong"><p><span>Stronger point</span>' + esc(r.strong) + '</p><p class="ee-dwhy">' + esc(r.why) + '</p><p class="ee-src">' + esc(r.source) + '</p></div></div>';
  }

  /* ── benchmarks ── */
  function renderBenchmarks() {
    var full = D.exemplars.filter(function (e) { return e.kind !== 'extract'; }).sort(function (a, b) { return b.mark - a.mark; });
    var cols = [['words', 'Words'], ['quote', 'Latin quoted'], ['translate', 'Translations'], ['device', 'Features named'], ['effect', 'Effects explained'], ['link', 'Links to the question']];
    function val(e, c) { return c === 'words' ? answerWords(e) : tagCount(e, c); }
    var max = {}; cols.forEach(function (c) { max[c[0]] = Math.max.apply(null, full.map(function (e) { return val(e, c[0]); })) || 1; });
    var rows = full.map(function (e) {
      var shown = true;
      return '<tr><th><button type="button" class="ee-link" data-goto="' + esc(e.id) + '">' + esc(title(e)) + '</button><small>' + esc(kindLabel(e)) + '</small></th>' +
        '<td class="ee-bm">' + (shown ? e.mark + '/15 <small>L' + levelOf(e.mark).n + '</small>' : '<span class="ee-mk-hid">?</span>') + '</td>' +
        cols.map(function (c) { var v = val(e, c[0]); return '<td><span class="ee-bar" style="--w:' + Math.round(100 * v / max[c[0]]) + '%"></span><b>' + v + '</b></td>'; }).join('') + '</tr>';
    }).join('');
    // averages by level band
    var bands = [[5, 'Level 5'], [4, 'Level 4'], [3, 'Level 3']].map(function (b) {
      var es = full.filter(function (e) { return levelOf(e.mark).n === b[0]; });
      if (!es.length) return '';
      return '<tr class="ee-avg"><th>' + b[1] + ' average <small>' + es.length + ' answer' + (es.length > 1 ? 's' : '') + '</small></th><td></td>' + cols.map(function (c) {
        var a = es.reduce(function (n, e) { return n + val(e, c[0]); }, 0) / es.length;
        return '<td><b>' + (c[0] === 'words' ? Math.round(a / 10) * 10 : a.toFixed(1)) + '</b></td>';
      }).join('') + '</tr>';
    }).join('');
    views.benchmarks.innerHTML = '<div class="panel"><div class="pb"><h2>What the answers at each level contain</h2>' +
      '<p class="ee-note">Counted from the full answers. This table shows every mark, so mark the answers first if you want to try them blind.</p>' +
      '<div class="ee-tablewrap"><table class="ee-bench"><thead><tr><th>Answer</th><th>Mark</th>' + cols.map(function (c) { return '<th>' + c[1] + '</th>'; }).join('') + '</tr></thead><tbody>' + rows + bands + '</tbody></table></div>' +
      '<h3>Time</h3><p>The paper allows two hours for 75 marks, which leaves about 25 minutes for a 15-mark answer once the passage is read. The top answers here run to about ' + topWords(full) + ' words: plan for six to eight developed points across the whole passage, each with its Latin, a translation, the feature and its effect.</p></div></div>';
    views.benchmarks.querySelectorAll('[data-goto]').forEach(function (b) { b.addEventListener('click', function () { setTab('answers'); openExemplar(b.getAttribute('data-goto')); }); });
  }
  function topWords(full) {
    var top = full.filter(function (e) { return e.mark >= 13; });
    if (!top.length) return '400';
    return Math.round(top.reduce(function (n, e) { return n + answerWords(e); }, 0) / top.length / 50) * 50;
  }

  /* ── print for a class ── */
  function renderPrint() {
    var full = D.exemplars.filter(function (e) { return e.kind !== 'extract'; });
    views.print.innerHTML = '<div class="panel ee-printctl"><div class="pb"><h2>Marking practice for a class</h2>' +
      '<p class="ee-note">Choose the answers. Each prints with its question and passage and no mark; the marks and the examiners’ commentaries follow on a separate page for the teacher.</p>' +
      '<div class="ee-pick">' + full.map(function (e, i) {
        return '<label><input type="checkbox" value="' + esc(e.id) + '"' + (i < 3 ? ' checked' : '') + '> ' + esc(title(e)) + ' <small>' + esc(kindLabel(e)) + '</small></label>';
      }).join('') + '</div>' +
      (full.some(scanned) ? '<label class="ee-opt"><input type="checkbox" data-typed> Print the handwritten scripts typed out</label>' : '') +
      '<p><button type="button" class="btn green" data-print>Print</button></p></div></div><div class="ee-printout" data-printout></div>';
    views.print.querySelector('[data-print]').addEventListener('click', function () {
      var ids = [].slice.call(views.print.querySelectorAll('.ee-pick input:checked')).map(function (x) { return x.value; });
      var typed = !!(views.print.querySelector('[data-typed]') || {}).checked;
      var chosen = full.filter(function (e) { return ids.indexOf(e.id) >= 0; });
      if (!chosen.length) return;
      var sheets = chosen.map(function (e, i) {
        var q = Q[e.question];
        return '<article class="ee-sheet"><p class="ee-sh-k">Answer ' + String.fromCharCode(65 + i) + '</p>' +
          '<p class="ee-q-meta">' + esc(q.paper) + (q.number ? ' &middot; Question ' + esc(q.number) : '') + '</p><p class="ee-q-text">' + esc(q.question) + ' <span>' + esc(q.instruction || '') + '</span> <b>[15]</b></p>' +
          passageHtml(q) + '<div class="ee-sh-ans">' + (!scanned(e) || typed ? transcriptHtml(e) : scansHtml(e)) + '</div>' +
          '<p class="ee-sh-mark">Level ______ &nbsp;&nbsp; Mark ______ / 15</p></article>';
      }).join('');
      var key = '<article class="ee-sheet ee-key"><h2>Teacher’s key</h2>' + chosen.map(function (e, i) {
        return '<div class="ee-key-row"><h3>Answer ' + String.fromCharCode(65 + i) + ': ' + esc(title(e)) + ' &middot; ' + e.mark + '/15 (Level ' + levelOf(e.mark).n + ')</h3><p>' + esc(e.commentary) + '</p><p class="ee-src">' + esc(e.source) + '</p></div>';
      }).join('') + '</article>';
      views.print.querySelector('[data-printout]').innerHTML = sheets + key;
      document.body.classList.add('ee-printing');
      window.print();
      setTimeout(function () { document.body.classList.remove('ee-printing'); }, 500);
    });
  }

  /* ── tabs ── */
  function setTab(tab) {
    state.tab = tab;
    root.querySelectorAll('[data-eye-tab]').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-eye-tab') === tab); });
    Object.keys(views).forEach(function (k) { views[k].hidden = k !== tab; });
    if (tab === 'answers') renderAnswers();
    if (tab === 'problems') renderProblems();
    if (tab === 'benchmarks') renderBenchmarks();
    if (tab === 'print') renderPrint();
  }
  function fromHash() {
    var h = location.hash.replace(/^#/, '').split('/');
    if (h[0] === 'answers' && h[1]) state.ex = h[1];
    setTab(views[h[0]] ? h[0] : 'answers');
  }

  // Answers to the same question are lettered A, B, C in a fixed order that
  // has nothing to do with their marks, so the list gives nothing away.
  function hash(s) { var h = 7; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 1000003; return h; }
  function letter(data) {
    var groups = {};
    data.exemplars.forEach(function (e) { if (e.kind !== 'extract') (groups[e.question] = groups[e.question] || []).push(e); });
    Object.keys(groups).forEach(function (k) {
      var g = groups[k].sort(function (a, b) { return hash(a.id + 'eye') - hash(b.id + 'eye'); });
      if (g.length > 1) g.forEach(function (e, i) { e.label = 'Answer ' + String.fromCharCode(65 + i); e.order = i; });
    });
    var kinds = { script: 0, practice: 0, typed: 1, extract: 2 }, qn = {};
    data.questions.forEach(function (q, i) { qn[q.id] = i; });
    data.exemplars.sort(function (a, b) {
      return kinds[a.kind] - kinds[b.kind] || qn[a.question] - qn[b.question] || (a.order || 0) - (b.order || 0);
    });
  }

  function init(data) {
    D = data;
    letter(D);
    D.questions.forEach(function (q) { Q[q.id] = q; });
    root.querySelectorAll('[data-eye-view]').forEach(function (v) { views[v.getAttribute('data-eye-view')] = v; });
    root.querySelectorAll('[data-eye-tab]').forEach(function (a) {
      a.addEventListener('click', function (ev) { ev.preventDefault(); history.replaceState(null, '', '#' + a.getAttribute('data-eye-tab')); setTab(a.getAttribute('data-eye-tab')); });
    });
    fromHash();
  }

  fetch(root.getAttribute('data-eye'))
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(init)
    .catch(function () { root.querySelector('[data-eye-view="answers"]').innerHTML = '<p class="ee-note">The answers could not be loaded. Check your connection and reload the page.</p>'; });
})();
