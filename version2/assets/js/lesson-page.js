// Classicalia — small behaviours shared by the course and lesson pages.
//
//  * the course-tree sidebar folds behind a button on narrow screens
//  * "On this page" follows the section you are reading
//  * a lesson page notes itself as the last one opened for its course, and
//    the course page offers it back under "Carry on"
// No dependencies; everything degrades to plain links.
(function () {
  'use strict';
  var KEY = 'classicalia.lastLesson';
  var course = document.body.getAttribute('data-course');

  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (_) { return {}; } }
  function save(all) { try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (_) {} }
  function text(el) { return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; }

  // sidebar on phones
  var toggle = document.querySelector('[data-docnav-toggle]');
  if (toggle) {
    var nav = toggle.closest('.docnav');
    toggle.addEventListener('click', function () {
      var open = nav.hasAttribute('data-open');
      if (open) nav.removeAttribute('data-open'); else nav.setAttribute('data-open', '');
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // the course tree scrolls to the current lesson
  var here = document.querySelector('.docnav a.on');
  if (here && here.scrollIntoView && window.matchMedia('(min-width: 981px)').matches) {
    var box = here.closest('.docnav');
    if (box && here.offsetTop > box.clientHeight - 80) box.scrollTop = here.offsetTop - box.clientHeight / 2;
  }

  // on this page
  var toc = document.querySelector('[data-toc]');
  if (toc && 'IntersectionObserver' in window) {
    var links = {};
    toc.querySelectorAll('a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        if (current) current.classList.remove('on');
        current = links[e.target.id];
        if (current) current.classList.add('on');
      });
    }, { rootMargin: '-10% 0px -70% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  // a figure whose image is missing is better not shown at all
  function dropBroken(img) {
    var fig = img.closest('figure') || img;
    fig.style.display = 'none';
  }
  document.querySelectorAll('.doc img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) dropBroken(img);
    else img.addEventListener('error', function () { dropBroken(img); });
  });

  // remember this lesson
  var doc = document.querySelector('.doc');
  if (course && doc) {
    var all = load();
    var h1 = text(document.querySelector('.ptitle h1'));
    var crumb = document.querySelectorAll('.crumb a');
    all[course] = { href: location.pathname, title: h1, group: text(crumb[crumb.length - 1]), at: Date.now() };
    save(all);
  }

  // offer it back on the course page
  var carry = document.getElementById('carry-on');
  if (course && carry) {
    var last = load()[course];
    if (last && last.href && last.title) {
      carry.querySelector('[data-carry-title]').textContent = last.title;
      carry.querySelector('[data-carry-group]').textContent = last.group && last.group !== last.title ? last.group : 'where you left off';
      carry.querySelector('[data-carry-link]').href = last.href;
      carry.hidden = false;
    }
  }
})();
