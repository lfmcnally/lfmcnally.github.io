// Classicalia — revision page navigation.
//
// Revision pages live one folder below their course index
// (<course>/<lesson>/revision.html, or <course>/lessons/<name>.html). This script reads the lesson list from
// that index page, the same list students see there, and adds:
//   • "In this topic": the other lessons in the current topic, in the sidebar
//   • Previous / Next lesson buttons at the foot of the page
// It also remembers the page as the student's last-opened lesson for this
// course, which the course hub shows as "Carry on revising".
// No dependencies; if the index can't be read the page is left as it was.
(function () {
  'use strict';
  var sidebar = document.querySelector('.rev-sidebar-inner');
  var main = document.querySelector('.rev-main');
  if (!main || !document.querySelector('.rev-body')) return;

  var indexUrl = new URL('../', location.href);
  var here = location.pathname;

  function text(el) { return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function lessonFrom(a) {
    var href = a.getAttribute('href') || '';
    if (!href || href.charAt(0) === '#') return null;
    var url = new URL(href, indexUrl);
    if (url.origin !== location.origin || url.pathname.indexOf(indexUrl.pathname) !== 0 || /tester\.html$/.test(url.pathname)) return null;
    var badge = text(a.querySelector('.type-badge'));
    var titleEl = (a.querySelector('.row-title') || a).cloneNode(true);
    Array.prototype.forEach.call(titleEl.querySelectorAll('.row-books, .mini-badge'), function (x) { x.parentNode.removeChild(x); });
    return { href: url.pathname, n: /^\d/.test(badge) ? badge : '', title: text(titleEl) };
  }

  function parse(doc) {
    var groups = [];
    var items = doc.querySelectorAll('.accordion-item');
    var collect = function (root) {
      return Array.prototype.map.call(root.querySelectorAll('a.resource-row--link'), lessonFrom).filter(Boolean);
    };
    if (items.length) {
      Array.prototype.forEach.call(items, function (item) {
        var lessons = collect(item);
        if (!lessons.length) return;
        groups.push({ num: text(item.querySelector('.acc-n')), title: text(item.querySelector('.acc-title')), lessons: lessons });
      });
    } else {
      var lessons = collect(doc);
      if (lessons.length) groups.push({ num: '', title: '', lessons: lessons });
    }
    // Pages that call every topic's page the same thing ("Revision Page")
    // are named after their topic instead.
    var count = {};
    groups.forEach(function (g) { g.lessons.forEach(function (l) { count[l.title] = (count[l.title] || 0) + 1; }); });
    groups.forEach(function (g) {
      g.lessons.forEach(function (l) {
        if (count[l.title] > 1 && !l.n && g.title && g.title !== l.title) {
          l.title = /revision/i.test(l.title) ? g.title : g.title + ' · ' + l.title;
          if (!l.n) l.n = g.num;
        }
      });
    });
    return groups;
  }

  function remember(courseTitle, lesson, group) {
    try {
      var all = JSON.parse(localStorage.getItem('classicalia.lastLesson') || '{}') || {};
      all[indexUrl.pathname] = {
        href: lesson.href, n: lesson.n, title: lesson.title,
        group: [courseTitle, group.title].filter(Boolean).join(' · '), at: Date.now()
      };
      localStorage.setItem('classicalia.lastLesson', JSON.stringify(all));
    } catch (_e) { /* storage unavailable */ }
  }

  function label(l) { return (l.n ? l.n + ' ' : '') + l.title; }

  fetch(indexUrl.href, { credentials: 'same-origin' })
    .then(function (res) { return res.ok ? res.text() : Promise.reject(); })
    .then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var courseTitle = text(doc.querySelector('.header-title')) || text(doc.querySelector('h1'));
      var groups = parse(doc);
      var flat = [];
      groups.forEach(function (g) { g.lessons.forEach(function (l) { flat.push({ l: l, g: g }); }); });
      var i = -1;
      for (var k = 0; k < flat.length; k++) { if (flat[k].l.href === here) { i = k; break; } }
      if (i < 0) return;
      var cur = flat[i], prev = flat[i - 1], next = flat[i + 1];
      remember(courseTitle, cur.l, cur.g);

      // Sidebar: the rest of this topic.
      if (sidebar && cur.g.lessons.length > 1) {
        var box = document.createElement('div');
        box.className = 'rev-nav-group rev-topic-nav';
        box.innerHTML = '<span class="rev-nav-group-label">' + esc(cur.g.title ? (cur.g.num ? cur.g.num + '. ' : '') + cur.g.title : 'In this course') + '</span>' +
          '<ul class="rev-nav">' + cur.g.lessons.map(function (l) {
            return l.href === here
              ? '<li><a class="active" aria-current="page">' + esc(label(l)) + '</a></li>'
              : '<li><a href="' + esc(l.href) + '">' + esc(label(l)) + '</a></li>';
          }).join('') + '</ul>';
        var groupsEls = sidebar.querySelectorAll('.rev-nav-group');
        var after = groupsEls[0] || null;
        if (after && after.nextSibling) sidebar.insertBefore(box, after.nextSibling);
        else sidebar.appendChild(box);
      }

      // Foot of the page: previous and next lesson.
      if (prev || next) {
        var pager = document.createElement('nav');
        pager.className = 'rev-pager';
        pager.setAttribute('aria-label', 'Lessons');
        var card = function (item, dir) {
          if (!item) return '<span></span>';
          return '<a class="rev-pager-link rev-pager-' + dir + '" href="' + esc(item.l.href) + '">' +
            '<span class="rev-pager-dir">' + (dir === 'prev' ? '&larr; Previous' : 'Next &rarr;') + '</span>' +
            '<span class="rev-pager-title">' + esc(label(item.l)) + '</span></a>';
        };
        pager.innerHTML = card(prev, 'prev') + card(next, 'next');
        main.appendChild(pager);
      }
    })
    .catch(function () { /* leave the page as it is */ });
})();
