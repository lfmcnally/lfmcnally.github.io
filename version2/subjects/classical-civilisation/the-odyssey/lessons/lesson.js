/* Odyssey lesson pages: "Can you…?" ticks, scholar scales, passage marks and the flashcards.
   The sections are all on the page now, so there is no panel switching here. */
(function () {
  var key = 'odyssey-lesson:' + location.pathname;
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var state = store.get(key) || { seen: {}, ticks: {}, scales: {} };
  state.ticks = state.ticks || {}; state.scales = state.scales || {};

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
})();
