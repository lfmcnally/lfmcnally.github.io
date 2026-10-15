// Classicalia v2 — Halloween homepage skin
//
// Loaded in the <head> of version2/index.html alongside halloween.css. It:
//   1. tags <html> with .skin-halloween so the skin's CSS applies;
//   2. hands the homepage starfields Halloween colours (window.CLASSICALIA_SKIN,
//      read by initSkies in index.html; the support band's data-* attributes
//      are swapped before starfield.js auto-initialises it);
//   3. adds the moon, bats, graveyard and tagline to the hero.
//
// Preview the standard homepage at any time with ?skin=classic.

(function () {
  if (/[?&]skin=classic\b/.test(location.search)) return;

  document.documentElement.classList.add('skin-halloween');

  window.CLASSICALIA_SKIN = {
    heroSky:    { background: '#150b22', starRgb: '255,236,214', lineRgb: '255,138,31', lineAlpha: 0.2 },
    curtainSky: { background: '#150b22', starRgb: '255,236,214', lineRgb: '196,168,232', lineAlpha: 0.16 }
  };

  const BAT = '<svg viewBox="0 0 64 30" fill="currentColor"><path d="M32 9c-2 0-3 2-3.4 4-1.8-2.8-6-5.6-11.6-5.6 2 2.2 2.4 4.6 1.6 6.6-3-2.2-8-2.6-12.6-1.2 3.6 2 5.6 5 6 8.4 3.6-1.6 8.2-1.2 11 1.4.6-2.4 3-4 5.4-4.2l1.6 3.2 1.6-3.2c2.4.2 4.8 1.8 5.4 4.2 2.8-2.6 7.4-3 11-1.4.4-3.4 2.4-6.4 6-8.4-4.6-1.4-9.6-1-12.6 1.2-.8-2-.4-4.4 1.6-6.6-5.6 0-9.8 2.8-11.6 5.6C35 11 34 9 32 9zm-1.8-1.6.8-2.6 1 2.2 1-2.2.8 2.6z"/></svg>';

  // Tombstones carry real Roman epitaph formulae: H.S.E. (hic situs est,
  // "here lies") and S.T.T.L. (sit tibi terra levis, "may the earth lie
  // light on you").
  const GROUND = `
<svg viewBox="0 0 1100 150" preserveAspectRatio="xMidYMax slice" fill="#07030c">
  <defs>
    <radialGradient id="hwPumpkinGlow"><stop offset="0" stop-color="#ffb347" stop-opacity=".55"/><stop offset="1" stop-color="#ff8a1f" stop-opacity="0"/></radialGradient>
  </defs>
  <path d="M0 150V108c90-26 180-30 270-18s170 10 250-8 190-24 290-6 200 22 290 4V150z"/>
  <!-- cypresses -->
  <path d="M86 104c-10-30-8-62 6-92 14 30 16 62 6 92z"/>
  <path d="M110 100c-7-22-6-46 4-68 10 22 11 46 4 68z"/>
  <path d="M968 100c-9-28-7-58 6-86 13 28 15 58 6 86z"/>
  <!-- broken column -->
  <g transform="translate(196 54)">
    <rect x="-4" y="44" width="44" height="8"/><rect x="0" y="40" width="36" height="6"/>
    <path d="M4 40V8l6-6 6 5 6-7 6 6 4-2v36z"/>
  </g>
  <!-- tombstones -->
  <g transform="translate(372 70)">
    <path d="M0 40V14C0 4 9-2 20-2s20 6 20 16v26z"/>
    <text x="20" y="22" text-anchor="middle" font-family="Lora, serif" font-size="8" font-weight="700" fill="#3a2a4f">H·S·E</text>
  </g>
  <g transform="translate(430 80)"><path d="M0 30V10C0 3 7-2 15-2s15 5 15 12v20z" transform="rotate(-8 15 30)"/></g>
  <g transform="translate(700 62)">
    <path d="M0 46V16C0 5 11-2 24-2s24 7 24 18v30z"/>
    <text x="24" y="24" text-anchor="middle" font-family="Lora, serif" font-size="8" font-weight="700" fill="#3a2a4f">S·T·T·L</text>
  </g>
  <g transform="translate(818 76)"><rect x="9" y="0" width="6" height="34"/><rect x="0" y="8" width="24" height="6"/></g>
  <!-- jack-o'-lantern -->
  <g transform="translate(560 96)">
    <circle class="hw-glow" cx="22" cy="12" r="46" fill="url(#hwPumpkinGlow)"/>
    <path d="M20-6c0-5 3-8 7-9l1 3c-3 1-4 3-4 6z" fill="#2c5a1e"/>
    <ellipse cx="22" cy="12" rx="24" ry="18" fill="#e8650a"/>
    <path d="M12-4c-6 6-6 26 0 32M32-4c6 6 6 26 0 32M22-6v36" stroke="#b84c06" stroke-width="2" fill="none"/>
    <g class="hw-glow" fill="#ffd36b">
      <path d="M8 6l6-6 4 7zM36 6l-6-6-4 7z"/>
      <path d="M6 16c6 8 26 8 32 0l-4 2-3-3-3 4-4-3-4 3-3-4-3 3z"/>
    </g>
  </g>
</svg>`;

  function decorate() {
    const hero = document.querySelector('.hero');
    if (!hero || hero.querySelector('.hw-moon')) return;

    const moon = document.createElement('div');
    moon.className = 'hw-moon';
    moon.setAttribute('aria-hidden', 'true');

    const bats = document.createElement('div');
    bats.className = 'hw-bats';
    bats.setAttribute('aria-hidden', 'true');
    // [top %, seconds per crossing, delay, scale]
    [[12, 24, -4, 1], [20, 31, -17, .7], [9, 27, -12, .55], [30, 36, -26, .85], [16, 40, -33, .45], [26, 29, -9, .6]]
      .forEach(([top, dur, delay, s], i) => {
        const b = document.createElement('div');
        b.className = 'hw-bat';
        b.style.cssText = `top:${top}%;--dur:${dur}s;--delay:${delay}s;--s:${s};--x:${12 + i * 14}vw`;
        b.innerHTML = BAT;
        bats.appendChild(b);
      });

    const fog = document.createElement('div');
    fog.className = 'hw-fog';
    fog.setAttribute('aria-hidden', 'true');

    const ground = document.createElement('div');
    ground.className = 'hw-ground';
    ground.setAttribute('aria-hidden', 'true');
    ground.innerHTML = GROUND;

    const sky = hero.querySelector('.hero-sky');
    (sky ? sky.nextSibling : hero.firstChild).before(moon, bats, fog, ground);

    const subtitle = hero.querySelector('.hero-subtitle');
    if (subtitle) {
      const tag = document.createElement('div');
      tag.className = 'hw-tagline';
      tag.innerHTML = 'Nox est perpetua una dormienda<small>Catullus 5 &middot; happy Halloween!</small>';
      subtitle.after(tag);
    }

    // The support band's starfield is auto-initialised from data-* attributes
    // by starfield.js, which runs after this (it is loaded at the end of body).
    const supportSky = document.querySelector('.support-sky');
    if (supportSky) {
      supportSky.dataset.bg = '#fff1e4';
      supportSky.dataset.star = '194,65,12';
      supportSky.dataset.line = '194,65,12';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorate);
  else decorate();
})();
