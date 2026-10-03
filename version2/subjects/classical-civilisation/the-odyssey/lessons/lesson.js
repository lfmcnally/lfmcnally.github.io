/* Odyssey lesson pages: section panels, prev/next, progress, ticks, scholar scales, flashcards. */
(function () {
  var panels = Array.prototype.slice.call(document.querySelectorAll('.rev-panel'));
  var key = 'odyssey-lesson:' + location.pathname;
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var state = store.get(key) || { seen: {}, ticks: {}, scales: {} };

  function titleOf(p) { var t = p.querySelector('.rev-title'); return t ? t.textContent : ''; }

  function show(id, noScroll) {
    var idx = 0;
    panels.forEach(function (p, i) {
      var on = p.id === id;
      p.classList.toggle('active', on);
      if (on) idx = i;
    });
    document.querySelectorAll('.rev-nav a[data-panel]').forEach(function (a) {
      a.classList.toggle('active', a.dataset.panel === id);
    });
    state.seen[id] = true;
    store.set(key, state);
    progress();
    if (!noScroll) {
      var main = document.querySelector('.rev-body');
      window.scrollTo({ top: main ? main.offsetTop - 50 : 0, behavior: 'smooth' });
    }
    if (history.replaceState) history.replaceState(null, '', '#' + id);
    return idx;
  }

  function progress() {
    var n = panels.filter(function (p) { return state.seen[p.id]; }).length;
    var bar = document.querySelector('.ls-progress-bar');
    var label = document.querySelector('.ls-progress-label');
    if (bar) bar.style.width = (100 * n / panels.length) + '%';
    if (label) label.textContent = n + ' of ' + panels.length + ' sections read';
  }

  // Pager at the foot of every panel
  panels.forEach(function (p, i) {
    var pager = document.createElement('div');
    pager.className = 'pager';
    if (i > 0) {
      var prev = document.createElement('button');
      prev.innerHTML = '<span>&larr; Previous</span><strong></strong>';
      prev.querySelector('strong').textContent = titleOf(panels[i - 1]);
      prev.onclick = function () { show(panels[i - 1].id); };
      pager.appendChild(prev);
    }
    if (i < panels.length - 1) {
      var next = document.createElement('button');
      next.className = 'next';
      next.innerHTML = '<span>Next &rarr;</span><strong></strong>';
      next.querySelector('strong').textContent = titleOf(panels[i + 1]);
      next.onclick = function () { show(panels[i + 1].id); };
      pager.appendChild(next);
    }
    p.appendChild(pager);
  });

  document.querySelectorAll('.rev-nav a[data-panel]').forEach(function (a) {
    a.addEventListener('click', function () { show(a.dataset.panel); });
  });

  // "Can you…?" ticks, remembered per page
  document.querySelectorAll('.canyou input[type=checkbox]').forEach(function (cb, i) {
    var id = cb.id || ('tick-' + i);
    cb.checked = !!state.ticks[id];
    cb.addEventListener('change', function () { state.ticks[id] = cb.checked; store.set(key, state); });
  });

  // Scholar "how far does the text support this?" scales
  document.querySelectorAll('.scale').forEach(function (scale, i) {
    var id = scale.dataset.id || ('scale-' + i);
    var buttons = scale.querySelectorAll('button');
    function paint(v) { buttons.forEach(function (b) { b.classList.toggle('on', b.dataset.v === v); }); }
    paint(state.scales[id]);
    buttons.forEach(function (b) {
      b.addEventListener('click', function () { state.scales[id] = b.dataset.v; store.set(key, state); paint(b.dataset.v); });
    });
  });

  // Highlightable passage marks (exam page)
  document.querySelectorAll('.passage mark').forEach(function (m) {
    m.addEventListener('click', function () {
      var target = document.getElementById(m.dataset.point);
      document.querySelectorAll('.passage mark').forEach(function (x) { x.classList.toggle('on', x === m); });
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  // Flashcards
  var deck = window.LESSON_CARDS || [];
  var fc = document.getElementById('fc');
  if (fc && deck.length) {
    var i = 0;
    var inner = fc.querySelector('.fc-inner');
    function render() {
      inner.classList.remove('flipped');
      fc.querySelector('.fc-q').innerHTML = deck[i].q;
      fc.querySelector('.fc-back').innerHTML = deck[i].a;
      document.getElementById('fc-count').textContent = (i + 1) + ' / ' + deck.length;
      document.getElementById('fc-bar').style.width = (100 * (i + 1) / deck.length) + '%';
      document.getElementById('fc-prev').disabled = i === 0;
      document.getElementById('fc-next').disabled = i === deck.length - 1;
    }
    fc.addEventListener('click', function () { inner.classList.toggle('flipped'); });
    document.getElementById('fc-prev').onclick = function () { if (i > 0) { i--; render(); } };
    document.getElementById('fc-next').onclick = function () { if (i < deck.length - 1) { i++; render(); } };
    render();
  }

  var start = location.hash.slice(1);
  show(panels.some(function (p) { return p.id === start; }) ? start : panels[0].id, true);
})();
