// Classicalia — "Test my weak spots" card for the vocab testers.
//
// Students reach the vocab tester by lots of routes (bookmarks, subject
// pages, search). Opened plainly, the tester asks them to pick a list and
// chapters, which isn't the session their teacher wants them doing. This
// adds a card at the top of the setup screen for signed-in students that
// starts exactly the session the course hub's "Test my weak spots" starts,
// with the chapters they've chosen. The full setup stays underneath.
// Needs course-map.js and the Supabase client.
(function () {
  'use strict';
  const q = new URLSearchParams(location.search);
  if (['mode', 'hw', 'queue', 'auto'].some(k => q.has(k))) return;
  const greek = /greekvocabtester\.html$/.test(location.pathname);
  const FOR_TESTER = greek ? ['greek-gcse', 'greek-alevel'] : ['latin-gcse', 'latin-prep', 'latin-alevel'];
  const LIST_TO_TYPE = greek ? { gcse: 'greek-gcse', alevel: 'greek-alevel' }
                             : { gcse: 'latin-gcse', suburani: 'latin-prep', alevel: 'latin-alevel' };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  async function run() {
    const map = window.ClassicaliaCourseMap, sb = window.supabase;
    const setup = document.getElementById('setupScreen');
    if (!map || !sb || !sb.auth || !setup) return;
    let userId = null;
    try { const { data } = await sb.auth.getUser(); userId = data && data.user ? data.user.id : null; } catch (_e) { return; }
    if (!userId) return;
    let types = (await map.resolveMyCourses(userId)).filter(t => FOR_TESTER.includes(t));
    if (!types.length) return;
    // A ?list= link names the course; put it first.
    const wanted = LIST_TO_TYPE[(q.get('list') || '').toLowerCase()];
    if (wanted && types.includes(wanted)) types = [wanted].concat(types.filter(t => t !== wanted));
    const ranges = await map.loadRanges(userId, types);
    if (!document.getElementById('setupScreen').offsetParent) return;  // a session already started

    const card = document.createElement('div');
    card.className = 'ws-card';
    card.innerHTML = types.map(t => `
      <div class="ws-row">
        <div class="ws-main">
          <div class="ws-kicker">${esc(map.labelFor(t))}</div>
          <div class="ws-title">Test my weak spots</div>
          <div class="ws-desc">${esc(map.rangeLabel(t, ranges[t]))} · words due for review first, then your weakest.
            <a href="${esc(map.hubUrl(t, 'progress'))}">Change</a></div>
        </div>
        <a class="ws-btn" href="${esc(map.weakSpotsUrlFor(t))}">Start &rarr;</a>
      </div>`).join('') +
      '<div class="ws-or">Or choose your own words below.</div>';
    setup.insertBefore(card, setup.firstChild);
  }

  const style = document.createElement('style');
  style.textContent = `
    .ws-card { background:#eef4ff; border:1px solid #d6e4ff; border-radius:12px; padding:16px 18px 12px; margin:0 0 18px; }
    .ws-row { display:flex; align-items:center; gap:14px; flex-wrap:wrap; padding-bottom:10px; }
    .ws-row + .ws-row { border-top:1px solid #d6e4ff; padding-top:12px; }
    .ws-main { flex:1; min-width:200px; }
    .ws-kicker { font-family:'DM Sans',sans-serif; font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#1a6fff; }
    .ws-title { font-family:'Lora',serif; font-style:italic; font-weight:700; font-size:20px; color:#0e1e3f; line-height:1.25; }
    .ws-desc { font-family:'DM Sans',sans-serif; font-size:13px; color:#5e6a85; margin-top:2px; }
    .ws-desc a { color:#1a6fff; font-weight:600; text-decoration:none; }
    .ws-btn { font-family:'DM Sans',sans-serif; background:#1a6fff; color:#fff; border-radius:8px; padding:10px 18px; font-weight:700; font-size:14px; text-decoration:none; white-space:nowrap; }
    .ws-btn:hover { background:#155fe0; }
    .ws-or { font-family:'DM Sans',sans-serif; font-size:12.5px; color:#5e6a85; }`;
  document.head.appendChild(style);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
