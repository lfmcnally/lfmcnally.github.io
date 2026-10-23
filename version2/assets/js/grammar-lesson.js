// Classicalia — the Latin Language grammar lessons.
//
// The page is rendered by scripts/build-grammar.py from data/<slug>.json;
// this adds the behaviour: worked examples reveal their English, and the
// exercises at the foot mark each answer, explain it, and keep a score.
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
  // the key under the first example, once
  var first = doc.querySelector('.gx');
  if (first) {
    var key = document.createElement('div'); key.className = 'gx-key';
    key.innerHTML = '<span><i style="background:#34d399"></i>opens the clause</span><span><i style="background:#60a5fa"></i>the subjunctive that closes it</span>';
    first.parentNode.insertBefore(key, first.nextSibling);
  }

  // ── exercises ──
  doc.querySelectorAll('.gq').forEach(function (q) {
    var total = +q.dataset.total, score = q.querySelector('[data-score]'), foot = q.querySelector('.gq-foot'), summary = q.querySelector('[data-summary]');
    function state() {
      var items = q.querySelectorAll('.gq-item'), done = 0, right = 0;
      items.forEach(function (it) { if (it.classList.contains('done')) { done++; if (it.classList.contains('ok')) right++; } });
      score.textContent = right + ' of ' + total;
      if (done === total) {
        foot.hidden = false;
        summary.textContent = right === total ? 'All ' + total + ' right. You have this one.' : right >= total - 1 ? right + ' of ' + total + '. One more look at the one you missed and you have it.' : right + ' of ' + total + '. Read the reasons, then try again.';
      }
    }
    q.addEventListener('click', function (e) {
      var opt = e.target.closest('.gq-opt');
      if (opt) {
        var it = opt.closest('.gq-item');
        if (it.classList.contains('done')) return;
        var k = +opt.dataset.k, a = +it.dataset.a;
        it.classList.add('done');
        if (k === a) { opt.classList.add('right'); it.classList.add('ok'); }
        else { opt.classList.add('wrong'); it.querySelector('.gq-opt[data-k="' + a + '"]').classList.add('right'); }
        it.querySelector('.gq-why').hidden = false;
        state();
        return;
      }
      if (e.target.closest('[data-again]')) {
        q.querySelectorAll('.gq-item').forEach(function (it) { it.classList.remove('done', 'ok'); it.querySelectorAll('.gq-opt').forEach(function (o) { o.classList.remove('right', 'wrong'); }); it.querySelector('.gq-why').hidden = true; });
        foot.hidden = true; state();
        q.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    });
    // keys a, b, c answer the first unanswered item while the exercise has focus
    q.tabIndex = 0;
    q.addEventListener('keydown', function (e) {
      var k = 'abc'.indexOf(e.key.toLowerCase());
      if (k < 0) return;
      var it = q.querySelector('.gq-item:not(.done)'); if (!it) return;
      var opt = it.querySelector('.gq-opt[data-k="' + k + '"]'); if (opt) { opt.click(); e.preventDefault(); }
    });
  });
})();
