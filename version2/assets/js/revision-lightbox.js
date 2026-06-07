/* Classicalia — revision image lightbox
   Opt-in: include this script on any revision page and every figure image
   (.rev-fig img, .detail-fig img) becomes click-to-enlarge in a modal.
   No dependencies. Pages that don't include it are unaffected. */
(function () {
  'use strict';

  var imgs = document.querySelectorAll('.rev-fig img, .detail-fig img');
  if (!imgs.length) return;

  // Build the overlay once.
  var overlay = document.createElement('div');
  overlay.className = 'rev-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML =
    '<button type="button" class="rev-lightbox-close" aria-label="Close image">&times;</button>' +
    '<figure class="rev-lightbox-fig">' +
      '<img class="rev-lightbox-img" alt="">' +
      '<figcaption class="rev-lightbox-cap"></figcaption>' +
    '</figure>';
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector('.rev-lightbox-img');
  var lbCap = overlay.querySelector('.rev-lightbox-cap');
  var closeBtn = overlay.querySelector('.rev-lightbox-close');
  var lastFocus = null;

  function open(img) {
    lastFocus = img;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    // Reuse the figure's caption, if it has one.
    var cap = '';
    var fig = img.closest('figure');
    if (fig) {
      var fc = fig.querySelector('figcaption');
      if (fc) cap = fc.textContent.trim();
    }
    lbCap.textContent = cap;
    lbCap.style.display = cap ? '' : 'none';
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.removeAttribute('src');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  Array.prototype.forEach.call(imgs, function (img) {
    img.classList.add('rev-zoomable');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    if (!img.getAttribute('aria-label')) {
      img.setAttribute('aria-label', (img.alt ? img.alt + ' — ' : '') + 'enlarge');
    }
    img.addEventListener('click', function () { open(img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); }
    });
  });

  // A click anywhere except on the enlarged image itself closes the modal.
  overlay.addEventListener('click', function (e) {
    if (e.target !== lbImg) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
})();
