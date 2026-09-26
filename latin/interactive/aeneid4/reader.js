// Aeneid IV parallel-text reader.
// Hover a Latin word for its dictionary entry and parsing; click a Latin word or an
// English phrase to highlight it together with its partner in the other column.
(function () {
  var sec = window.AENEID4_SECTION;
  var all = window.AENEID4_SECTIONS;
  var MARK = /\[([^\[\]|]+)\|([0-9]+(?:,[0-9]+)*)\]/g;

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ── Header, tabs, title ──
  document.title = 'Aeneid IV · ' + sec.title + ' · Classicalia';
  document.getElementById('hdr-tag').textContent = 'Aeneid IV · ' + sec.title;
  document.getElementById('sec-tag').textContent = 'Section ' + sec.section + ' · ' + sec.title;
  document.getElementById('sec-title').textContent = sec.subtitle;

  var tabs = document.getElementById('tabs');
  all.forEach(function (s) {
    var a = document.createElement('a');
    a.href = 'section' + s.n + '.html';
    a.className = 'tab' + (s.n === sec.section ? ' active' : '');
    a.textContent = s.lines;
    a.title = s.subtitle;
    tabs.appendChild(a);
  });
  var activeTab = tabs.querySelector('.active');
  if (activeTab) tabs.scrollLeft = activeTab.offsetLeft - tabs.clientWidth / 2 + activeTab.clientWidth / 2;

  // ── Text ──
  var html = '';
  sec.chunks.forEach(function (c, ci) {
    var byId = {};
    c.words.forEach(function (w) { byId[w.id] = w; });
    var lat = c.lines.map(function (l) {
      var t = l.t.map(function (tok) {
        if (typeof tok === 'string') return esc(tok);
        var w = byId[tok];
        return '<span class="w" data-c="' + ci + '" data-id="' + tok + '">' + esc(w.w) + '</span>';
      }).join('');
      return '<div class="line"><span class="lnum">' + l.n + '</span><span class="ltext">' + t + '</span></div>';
    }).join('');
    var en = '', last = 0, m;
    MARK.lastIndex = 0;
    while ((m = MARK.exec(c.marked))) {
      en += esc(c.marked.slice(last, m.index));
      en += '<span class="e" data-c="' + ci + '" data-ids="' + m[2] + '">' + esc(m[1]) + '</span>';
      last = MARK.lastIndex;
    }
    en += esc(c.marked.slice(last));
    html += '<div class="chunk"><div class="latin">' + lat + '</div><div class="english">' + en + '</div></div>';
  });
  document.getElementById('text').innerHTML = html;

  // ── Prev / next ──
  var idx = all.findIndex(function (s) { return s.n === sec.section; });
  var pager = '';
  if (idx > 0) {
    var p = all[idx - 1];
    pager += '<a href="section' + p.n + '.html"><div class="dir">&larr; Previous</div><div class="nm">' + p.lines + ': ' + esc(p.subtitle) + '</div></a>';
  }
  if (idx < all.length - 1) {
    var n = all[idx + 1];
    pager += '<a class="next" href="section' + n.n + '.html"><div class="dir">Next &rarr;</div><div class="nm">' + n.lines + ': ' + esc(n.subtitle) + '</div></a>';
  }
  document.getElementById('pager').innerHTML = pager;

  // ── Highlighting ──
  var textEl = document.getElementById('text');
  var selKey = null;

  function clearSel() {
    textEl.querySelectorAll('.sel').forEach(function (el) { el.classList.remove('sel'); });
    selKey = null;
  }

  function select(ci, ids, key) {
    if (selKey === key) { clearSel(); return; }
    clearSel();
    selKey = key;
    ids.forEach(function (id) {
      var w = textEl.querySelector('.w[data-c="' + ci + '"][data-id="' + id + '"]');
      if (w) w.classList.add('sel');
    });
    textEl.querySelectorAll('.e[data-c="' + ci + '"]').forEach(function (e) {
      var eIds = e.dataset.ids.split(',');
      if (eIds.some(function (x) { return ids.indexOf(x) !== -1; })) e.classList.add('sel');
    });
  }

  textEl.addEventListener('click', function (ev) {
    var w = ev.target.closest('.w');
    var e = ev.target.closest('.e');
    if (w) {
      select(w.dataset.c, [w.dataset.id], 'w' + w.dataset.c + ':' + w.dataset.id);
      showTip(w);
    } else if (e) {
      select(e.dataset.c, e.dataset.ids.split(','), 'e' + e.dataset.c + ':' + e.dataset.ids);
    }
  });
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('.w') && !ev.target.closest('.e') && !ev.target.closest('.btn')) {
      clearSel();
      hideTip();
    }
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { clearSel(); hideTip(); }
  });

  // ── Tooltip ──
  var tip = document.getElementById('tip');
  var tipFor = null;

  function showTip(el) {
    var w = sec.chunks[el.dataset.c].words[el.dataset.id - 1];
    tip.innerHTML = '<div class="tip-form">' + esc(w.w) + '</div>' +
      '<div class="tip-vocab">' + esc(w.vocab) + '</div>' +
      '<div class="tip-parse">' + esc(w.parse) + '</div>';
    tip.style.left = '0px';
    tip.style.top = '0px';
    tip.classList.add('on');
    var r = el.getBoundingClientRect();
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var left = Math.max(8, Math.min(window.innerWidth - tw - 8, r.left + r.width / 2 - tw / 2));
    var top = r.top - th - 10;
    if (top < 60) top = r.bottom + 10;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
    tipFor = el;
  }
  function hideTip() {
    tip.classList.remove('on');
    tipFor = null;
  }

  var canHover = window.matchMedia('(hover: hover)').matches;
  if (canHover) {
    textEl.addEventListener('mouseover', function (ev) {
      var w = ev.target.closest('.w');
      if (w && w !== tipFor) showTip(w);
    });
    textEl.addEventListener('mouseout', function (ev) {
      var w = ev.target.closest('.w');
      if (w && !w.contains(ev.relatedTarget)) hideTip();
    });
  }
  window.addEventListener('scroll', hideTip, { passive: true });

  // ── Hide English toggle ──
  var hideBtn = document.getElementById('hide-en');
  function setHidden(on) {
    document.body.classList.toggle('hide-en', on);
    hideBtn.classList.toggle('on', on);
    hideBtn.textContent = on ? 'Show English' : 'Hide English';
    try { localStorage.setItem('aeneid4-hide-en', on ? '1' : '0'); } catch (e) {}
  }
  hideBtn.addEventListener('click', function () {
    setHidden(!document.body.classList.contains('hide-en'));
  });
  try { if (localStorage.getItem('aeneid4-hide-en') === '1') setHidden(true); } catch (e) {}
})();
