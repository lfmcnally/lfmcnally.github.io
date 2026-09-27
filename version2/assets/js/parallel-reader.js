// Parallel-text reader for set texts (Aeneid IV, Nepos' Hannibal): v1 and /version2 pages.
// Hover a Latin word for its dictionary entry and parsing; click a Latin word or an
// English phrase to highlight it together with its partner in the other column.
(function () {
  var sec = window.PR_SECTION || window.AENEID4_SECTION;
  var all = window.PR_SECTIONS || window.AENEID4_SECTIONS;
  // Pages name their siblings differently (section1.html or section-1.html).
  var pagePattern = document.body.dataset.pagePattern || 'section{n}.html';
  function pageHref(n) { return pagePattern.replace('{n}', n); }
  // [english|ids] links English to Latin word ids; {english|note} marks words the
  // translator added, with a note on why.
  // An id is a Latin word in the same chunk (5) or, where the English runs over
  // into a neighbouring row, chunk.word counting chunks from 1 (7.3).
  var MARK = /\[([^\[\]|]+)\|([0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*)\]|\{([^{}|]+)\|([^{}|]+)\}/g;
  function keysFor(ci, ids) {
    return ids.split(',').map(function (x) {
      var p = x.split('.');
      return p.length === 2 ? (p[0] - 1) + ':' + p[1] : ci + ':' + x;
    }).join(',');
  }

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // ── Header, tabs, title (each is optional: pages include the ones they use) ──
  setText('hdr-tag', 'Aeneid IV · ' + sec.title);
  setText('sec-tag', 'Section ' + sec.section + ' · ' + sec.title);
  setText('sec-title', sec.subtitle);

  var tabs = document.getElementById('tabs');
  if (tabs) {
    all.forEach(function (s) {
      var a = document.createElement('a');
      a.href = pageHref(s.n);
      a.className = 'tab' + (s.n === sec.section ? ' active' : '');
      a.textContent = s.lines;
      a.title = s.subtitle;
      tabs.appendChild(a);
    });
    var activeTab = tabs.querySelector('.active');
    if (activeTab) tabs.scrollLeft = activeTab.offsetLeft - tabs.clientWidth / 2 + activeTab.clientWidth / 2;
  }

  // ── Text ──
  var html = '';
  sec.chunks.forEach(function (c, ci) {
    var byId = {};
    c.words.forEach(function (w) { byId[w.id] = w; });
    var lat = c.lines.map(function (l) {
      var t = l.t.map(function (tok) {
        if (typeof tok === 'string') return esc(tok);
        var w = byId[tok];
        return '<span class="w" data-c="' + ci + '" data-id="' + tok + '" data-key="' + ci + ':' + tok + '">' + esc(w.w) + '</span>';
      }).join('');
      // Prose sense units have no line number.
      var num = l.n === '' || l.n == null ? '' : '<span class="lnum">' + l.n + '</span>';
      return '<div class="line">' + num + '<span class="ltext">' + t + '</span></div>';
    }).join('');
    var en = '', last = 0, m;
    MARK.lastIndex = 0;
    while ((m = MARK.exec(c.marked))) {
      en += esc(c.marked.slice(last, m.index));
      if (m[1] !== undefined) {
        en += '<span class="e" data-keys="' + keysFor(ci, m[2]) + '">' + esc(m[1]) + '</span>';
      } else {
        en += '<span class="sup" data-note="' + esc(m[4]) + '">' + esc(m[3]) + '</span>';
      }
      last = MARK.lastIndex;
    }
    en += esc(c.marked.slice(last));
    html += '<div class="chunk"><div class="latin">' + lat + '</div><div class="english">' + en + '</div></div>';
  });
  document.getElementById('text').innerHTML = html;

  // ── Prev / next ──
  var pagerEl = document.getElementById('pager');
  if (pagerEl) {
    var idx = all.findIndex(function (s) { return s.n === sec.section; });
    var pager = '';
    if (idx > 0) {
      var p = all[idx - 1];
      pager += '<a href="' + pageHref(p.n) + '"><div class="dir">&larr; Previous</div><div class="nm">' + p.lines + ': ' + esc(p.subtitle) + '</div></a>';
    }
    if (idx < all.length - 1) {
      var n = all[idx + 1];
      pager += '<a class="next" href="' + pageHref(n.n) + '"><div class="dir">Next &rarr;</div><div class="nm">' + n.lines + ': ' + esc(n.subtitle) + '</div></a>';
    }
    pagerEl.innerHTML = pager;
  }

  // ── Highlighting ──
  var textEl = document.getElementById('text');
  var selKey = null;

  function clearSel() {
    textEl.querySelectorAll('.sel').forEach(function (el) { el.classList.remove('sel'); });
    textEl.querySelectorAll('.sel-sup').forEach(function (el) { el.classList.remove('sel-sup'); });
    selKey = null;
  }

  function select(keys, key) {
    if (selKey === key) { clearSel(); return; }
    clearSel();
    selKey = key;
    keys.forEach(function (k) {
      var w = textEl.querySelector('.w[data-key="' + k + '"]');
      if (w) w.classList.add('sel');
    });
    textEl.querySelectorAll('.e').forEach(function (e) {
      if (e.dataset.keys.split(',').some(function (k) { return keys.indexOf(k) !== -1; })) e.classList.add('sel');
    });
  }

  textEl.addEventListener('click', function (ev) {
    var w = ev.target.closest('.w');
    var e = ev.target.closest('.e');
    var sup = ev.target.closest('.sup');
    if (sup) {
      var wasOn = sup.classList.contains('sel-sup');
      clearSel();
      hideTip();
      if (!wasOn) {
        sup.classList.add('sel-sup');
        showNote(sup);
      }
    } else if (w) {
      select([w.dataset.key], 'w' + w.dataset.key);
      showTip(w);
    } else if (e) {
      select(e.dataset.keys.split(','), 'e' + e.dataset.keys);
    }
  });
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('.w') && !ev.target.closest('.e') && !ev.target.closest('.sup') && !ev.target.closest('button')) {
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
    tip.classList.remove('note');
    placeTip(el, '<div class="tip-form">' + esc(w.w) + '</div>' +
      '<div class="tip-vocab">' + esc(w.vocab) + '</div>' +
      '<div class="tip-parse">' + esc(w.parse) + '</div>');
  }
  function showNote(el) {
    tip.classList.add('note');
    placeTip(el, '<div class="tip-parse">Added in the English</div>' +
      '<div class="tip-note">' + esc(el.dataset.note) + '</div>');
  }
  function placeTip(el, inner) {
    tip.innerHTML = inner;
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
    hideBtn.classList.toggle('active', on);
    hideBtn.textContent = on ? 'Show English' : 'Hide English';
    try { localStorage.setItem('pr-hide-en', on ? '1' : '0'); } catch (e) {}
  }
  hideBtn.addEventListener('click', function () {
    setHidden(!document.body.classList.contains('hide-en'));
  });
  try { if (localStorage.getItem('pr-hide-en') === '1') setHidden(true); } catch (e) {}
})();
