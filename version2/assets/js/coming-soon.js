// Classicalia — tuck "Coming soon" components away on the subject pages.
//
// The subject pages list every component of each specification, most of
// which aren't built yet. Students have to read past all of them to find the
// few that work. This hides the not-yet-live rows and leaves one line per
// group ("3 more coming soon") that shows them again when clicked, so the
// roadmap is still there for anyone who wants it.
(function () {
  'use strict';
  function isSoonLink(a) { return a.getAttribute('href') === '#' && a.querySelector('.badge-soon'); }

  document.querySelectorAll('.group').forEach(function (group) {
    var list = group.querySelector(':scope > .comp-list');
    if (!list) return;
    var items = Array.prototype.filter.call(list.children, function (li) { return li.tagName === 'LI'; });
    var soon = items.filter(function (li) {
      var links = li.querySelectorAll('a');
      return links.length && Array.prototype.every.call(links, isSoonLink);
    });
    // Rows inside a partly live item (e.g. one live group of a set text).
    var partial = [];
    items.forEach(function (li) {
      if (soon.indexOf(li) >= 0) return;
      li.querySelectorAll('.comp-sublist > li').forEach(function (sub) {
        var a = sub.querySelector('a');
        if (a && isSoonLink(a)) partial.push(sub);
      });
    });
    var hide = soon.concat(partial);
    if (!hide.length) return;
    hide.forEach(function (li) { li.classList.add('cs-hidden'); });

    var allSoon = soon.length === items.length;
    var more = document.createElement('li');
    more.className = 'cs-more';
    var n = soon.length || partial.length;
    more.innerHTML = '<button type="button" class="cs-btn" aria-expanded="false">' +
      (allSoon ? 'Coming soon: show what’s planned (' + n + ')' : n + ' more coming soon') + '</button>';
    list.appendChild(more);
    more.querySelector('button').addEventListener('click', function () {
      var open = this.getAttribute('aria-expanded') !== 'true';
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
      hide.forEach(function (li) { li.classList.toggle('cs-hidden', !open); });
      this.textContent = open ? 'Hide what’s coming soon'
        : (allSoon ? 'Coming soon: show what’s planned (' + n + ')' : n + ' more coming soon');
    });
  });

  var style = document.createElement('style');
  style.textContent =
    '.cs-hidden { display:none !important; }' +
    '.cs-more { list-style:none; }' +
    '.cs-btn { background:none; border:none; padding:10px 0 2px; font-family:"DM Sans",sans-serif; font-size:13px; font-weight:600; color:var(--muted); cursor:pointer; }' +
    '.cs-btn:hover { color:var(--brand); text-decoration:underline; }';
  document.head.appendChild(style);
})();
