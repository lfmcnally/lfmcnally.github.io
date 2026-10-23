// Classicalia — the Latin Language grammar lessons.
//
// The page is rendered by scripts/build-grammar.py from data/<slug>.json;
// this adds the behaviour: worked examples reveal their English, and the
// exercises at the foot mark a typed answer against the sentence's mark
// scheme, phrase by phrase, with a verdict and a comment on each part.
// Nothing is saved: the grammar gym is where progress is tracked.
(function () {
  'use strict';
  var doc = document.querySelector('.doc.gram');
  if (!doc) return;

  // ── worked examples ──
  doc.addEventListener('click', function (e) {
    var b = e.target.closest('[data-reveal]');
    if (!b) return;
    var en = b.parentNode.querySelector('.gx-en');
    en.hidden = !en.hidden;
    b.textContent = en.hidden ? 'Show the English' : 'Hide the English';
  });
  var first = doc.querySelector('.gx');
  if (first) {
    var key = document.createElement('div'); key.className = 'gx-key';
    key.innerHTML = '<span><i style="background:#34d399"></i>opens the clause</span><span><i style="background:#60a5fa"></i>the subjunctive that closes it</span>';
    first.parentNode.insertBefore(key, first.nextSibling);
  }

  // ── marking ──
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/[āăá]/g, 'a').replace(/[ēĕé]/g, 'e').replace(/[īĭí]/g, 'i').replace(/[ōŏó]/g, 'o').replace(/[ūŭú]/g, 'u')
      .replace(/[’‘]/g, "'").replace(/[^a-z' ]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function test(re, s) { return new RegExp('\\b(?:' + re + ')', 'i').test(s); }   // a pattern may end mid-word, so 'stay' also takes 'staying'
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // a translation: every phrase of the scheme is full, half or missing
  function markTranslation(it, answer) {
    var a = norm(answer), got = 0, total = 0, rows = [];
    it.scheme.forEach(function (c) {
      total += c.marks;
      var r = { what: c.what, say: c.say, marks: c.marks, got: 0, note: '' };
      if ((c.need || []).some(function (re) { return test(re, a); })) { r.got = c.marks; }
      else {
        var t = (c.trap || []).filter(function (x) { return test(x.re, a); })[0];
        var p = !t && (c.part || []).filter(function (x) { return test(x.re, a); })[0];
        if (t) { r.note = t.say; }
        else if (p) { r.got = c.marks > 1 ? Math.ceil(c.marks / 2) : 0.5; r.note = p.say; }   // half marks for the sense without the grammar
      }
      got += r.got; rows.push(r);
    });
    return { got: got, total: total, rows: rows, model: it.model };
  }
  // a verb form: right, a known near miss with its reason, or wrong
  function markForm(it, answer) {
    var a = norm(answer).replace(/ /g, '');
    if (a === norm(it.answer)) return { got: 1, total: 1, right: true, note: it.why };
    var alt = Object.keys(it.alts || {}).filter(function (k) { return norm(k) === a; })[0];
    return { got: 0, total: 1, right: false, note: alt ? it.alts[alt] : 'Not quite: the form wanted is <em>' + esc(it.answer) + '</em>. ' + it.why, answer: it.answer };
  }
  function verdict(frac) {
    return frac >= 1 ? ['full', 'Fully accurate'] : frac >= 0.75 ? ['near', 'Nearly there'] : frac >= 0.4 ? ['part', 'Partly right'] : ['again', 'Have another go'];
  }
  function fmt(n) { return (Math.round(n * 2) / 2).toString(); }

  doc.querySelectorAll('.gq').forEach(function (q) {
    var task = q.dataset.task, total = +q.dataset.total;
    var score = q.querySelector('[data-score]'), foot = q.querySelector('.gq-foot'), summary = q.querySelector('[data-summary]');
    var items = Array.prototype.slice.call(q.querySelectorAll('.gq-item'));
    function state() {
      var done = 0, got = 0;
      items.forEach(function (it) { if (it.dataset.got != null) { done++; got += +it.dataset.got; } });
      score.textContent = fmt(got) + ' of ' + total + ' marks';
      if (done === items.length) {
        foot.hidden = false;
        var v = verdict(got / total);
        summary.innerHTML = '<b>' + v[1] + '</b> overall: ' + fmt(got) + ' of ' + total + '. ' + (v[0] === 'full' ? 'You have this one.' : v[0] === 'near' ? 'Read the comments on the parts you missed and it is yours.' : 'Read the comments, then clear and try again.');
      }
    }
    items.forEach(function (it) {
      var data = JSON.parse(it.querySelector('.gq-data').textContent), form = it.querySelector('.gq-form'), input = it.querySelector('.gq-in'), res = it.querySelector('.gq-res');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var answer = input.value.trim(); if (!answer) { input.focus(); return; }
        var h = '';
        if (task === 'translate') {
          var m = markTranslation(data, answer), v = verdict(m.got / m.total);
          h += '<div class="gq-verdict v-' + v[0] + '"><b>' + v[1] + '</b><span>' + fmt(m.got) + ' of ' + m.total + ' marks</span></div>';
          h += '<ul class="gq-scheme">' + m.rows.map(function (r) {
            var cls = r.got >= r.marks ? 'ok' : r.got > 0 ? 'half' : 'no';
            return '<li class="' + cls + '"><i>' + (cls === 'ok' ? '✓' : cls === 'half' ? '½' : '✗') + '</i><span class="la">' + esc(r.what) + '</span><span class="en">' + esc(r.say) + '</span><span class="m">' + fmt(r.got) + '/' + r.marks + '</span>' + (r.note ? '<div class="why">' + r.note + '</div>' : '') + '</li>';
          }).join('') + '</ul>';
          h += '<div class="gq-model"><b>A model answer:</b> ' + esc(m.model) + '</div>';
          it.dataset.got = m.got;
        } else {
          var f = markForm(data, answer), fv = f.right ? ['full', 'Right'] : ['again', 'Not yet'];
          h += '<div class="gq-verdict v-' + fv[0] + '"><b>' + fv[1] + '</b><span>' + f.got + ' of 1</span></div><div class="why">' + f.note + '</div>';
          it.dataset.got = f.got;
        }
        res.innerHTML = h; res.hidden = false; it.classList.add('done');
        state();
      });
    });
    q.querySelector('[data-again]').addEventListener('click', function () {
      items.forEach(function (it) { delete it.dataset.got; it.classList.remove('done'); it.querySelector('.gq-in').value = ''; var r = it.querySelector('.gq-res'); r.hidden = true; r.innerHTML = ''; });
      foot.hidden = true; state();
      q.scrollIntoView({ block: 'start', behavior: 'smooth' });
      var inp = q.querySelector('.gq-in'); if (inp) inp.focus();
    });
  });
})();
