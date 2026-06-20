// Shared account menu for Classicalia v2.
//
// Drop a <div data-account-menu></div> into any page's nav slot and call
// AccountMenu.mount(slotEl) — or just include this script and it auto-mounts
// every slot it finds. Anonymous users get a "Sign in" CTA; signed-in users
// get an avatar that opens a dropdown with profile / courses / sign-out.
//
// Requires window.supabase (the instantiated client from supabase-client.js).

(function () {
  const PROFILE_URL = '/version2/profile.html';
  const COURSES_URL = '/version2/profile.html#courses';
  const FRIENDS_URL = '/version2/friends.html';
  const TEACHER_URL = '/version2/tracking/teacher.html';
  const ADMIN_URL   = '/version2/admin/';
  const SIGNIN_URL  = '/auth/login.html';
  const POST_SIGNOUT_URL = '/version2/';

  function initials(name) {
    return String(name || '?')
      .split(/[\s@.]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(s => s[0].toUpperCase())
      .join('') || '?';
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // Legible text colour (white or dark ink) for a hex avatar background, by
  // WCAG contrast. Mirrors the helper in profile.html / friends.html.
  function avatarTextColor(hex) {
    const m = /^#([0-9a-fA-F]{6})$/.exec(hex || '');
    if (!m) return '#ffffff';
    const n = parseInt(m[1], 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    const lin = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    return (1.05 / (L + 0.05)) >= ((L + 0.05) / (0.0195 + 0.05)) ? '#ffffff' : '#1c2540';
  }

  function renderSignedOut(slot) {
    slot.innerHTML = `<a href="${SIGNIN_URL}" class="nav-cta">Sign in</a>`;
  }

  function renderSignedIn(slot, { user, displayName, role, avatarColor, isAdmin }) {
    const name = displayName || user.email || 'Student';
    const email = user.email || '';
    const shortName = String(name).split('@')[0];
    const avatarStyle = (avatarColor && /^#[0-9A-Fa-f]{6}$/.test(avatarColor))
      ? ` style="background:${avatarColor};color:${avatarTextColor(avatarColor)}"` : '';
    const teacherItem = role === 'teacher'
      ? `<a href="${TEACHER_URL}" class="account-menu-item">Teacher dashboard</a>`
      : '';
    // Friends is a student-facing feature (peers comparing scores); teachers
    // get the teacher dashboard instead.
    const friendsItem = role === 'student'
      ? `<a href="${FRIENDS_URL}" class="account-menu-item">Friends</a>`
      : '';
    // Site admins get a link to the admin panel.
    const adminItem = isAdmin
      ? `<a href="${ADMIN_URL}" class="account-menu-item">Admin panel</a>`
      : '';

    slot.innerHTML = `
      <div class="account-menu">
        <button type="button" class="account-menu-trigger" aria-haspopup="menu" aria-expanded="false">
          <span class="nav-avatar" data-account-initials${avatarStyle}>${escapeHtml(initials(name))}</span>
          <span class="nav-username" data-account-name>${escapeHtml(shortName)}</span>
        </button>
        <div class="account-menu-pop" role="menu" hidden>
          <div class="account-menu-head">
            <div class="account-menu-name" data-account-fullname>${escapeHtml(name)}</div>
            <div class="account-menu-email">${escapeHtml(email)}</div>
          </div>
          <div class="account-menu-list">
            <a href="${PROFILE_URL}" class="account-menu-item">My profile</a>
            <a href="${COURSES_URL}" class="account-menu-item">My courses</a>
            ${friendsItem}
            ${teacherItem}
            ${adminItem}
            <button type="button" class="account-menu-item account-menu-signout" data-account-signout>Sign out</button>
          </div>
        </div>
      </div>
    `;

    const trigger = slot.querySelector('.account-menu-trigger');
    const pop = slot.querySelector('.account-menu-pop');
    const signOutBtn = slot.querySelector('[data-account-signout]');

    // Anchor the (position:fixed) dropdown to the trigger. Fixed positioning
    // keeps the panel on top and prevents it being clipped by ancestor
    // headers that use overflow:hidden for their decorative backgrounds.
    function position() {
      const r = trigger.getBoundingClientRect();
      const popH = pop.offsetHeight || 280;
      const below = r.bottom + 8;
      // Flip above the trigger when there isn't room below it — e.g. when the
      // trigger lives in the sidebar footer near the bottom of the viewport.
      if (below + popH > window.innerHeight && (r.top - 8 - popH) > 0) {
        pop.style.top = (r.top - 8 - popH) + 'px';
      } else {
        pop.style.top = below + 'px';
      }
      pop.style.left = 'auto';
      pop.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
    }

    function close() {
      pop.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      window.removeEventListener('scroll', position, true);
      window.removeEventListener('resize', position);
    }
    function open() {
      position();
      pop.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      window.addEventListener('scroll', position, true);
      window.addEventListener('resize', position);
    }
    function toggle(e) {
      e.stopPropagation();
      pop.hidden ? open() : close();
    }

    trigger.addEventListener('click', toggle);
    document.addEventListener('click', (e) => {
      if (!slot.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    signOutBtn.addEventListener('click', async () => {
      signOutBtn.disabled = true;
      signOutBtn.textContent = 'Signing out…';
      try { await window.supabase.auth.signOut(); } catch (_) { /* ignore */ }
      window.location.href = POST_SIGNOUT_URL;
    });
  }

  async function mount(slot) {
    if (!slot || slot.dataset.accountMenuMounted === '1') return;
    slot.dataset.accountMenuMounted = '1';

    if (!window.supabase || !window.supabase.auth) {
      renderSignedOut(slot);
      return;
    }

    let user = null;
    try {
      const { data } = await window.supabase.auth.getUser();
      user = data && data.user ? data.user : null;
    } catch (_) { /* fall through to signed-out */ }

    if (!user) { renderSignedOut(slot); return; }

    let displayName = user.email || 'Student';
    let role = 'student';
    let isAdmin = false;
    try {
      const { data: profile } = await window.supabase
        .from('users')
        .select('full_name, role, is_admin')
        .eq('id', user.id)
        .maybeSingle();
      if (profile && profile.full_name) displayName = profile.full_name;
      if (profile && profile.role)      role = profile.role;
      if (profile && profile.is_admin)  isAdmin = true;
    } catch (_) { /* fall back to email */ }

    // avatar_color is fetched separately and tolerantly: if the column doesn't
    // exist yet (migration 050 unapplied) we just use the default background.
    let avatarColor = null;
    try {
      const { data: c } = await window.supabase
        .from('users').select('avatar_color').eq('id', user.id).maybeSingle();
      if (c && c.avatar_color) avatarColor = c.avatar_color;
    } catch (_) { /* default colour */ }

    renderSignedIn(slot, { user, displayName, role, avatarColor, isAdmin });
  }

  // Live-update the displayed name when the profile page edits it, so the
  // menu doesn't need a full page reload to reflect the change.
  window.addEventListener('classicalia:name-changed', (ev) => {
    const newName = (ev && ev.detail) || '';
    if (!newName) return;
    document.querySelectorAll('[data-account-menu]').forEach(slot => {
      const fullNameEl = slot.querySelector('[data-account-fullname]');
      const shortNameEl = slot.querySelector('[data-account-name]');
      const initialsEl = slot.querySelector('[data-account-initials]');
      if (fullNameEl)  fullNameEl.textContent = newName;
      if (shortNameEl) shortNameEl.textContent = String(newName).split('@')[0];
      if (initialsEl)  initialsEl.textContent = initials(newName);
    });
  });

  // Live-update the avatar colour when the profile page changes it.
  window.addEventListener('classicalia:avatar-changed', (ev) => {
    const colour = (ev && ev.detail) || '';
    if (!/^#[0-9A-Fa-f]{6}$/.test(colour)) return;
    document.querySelectorAll('[data-account-menu] [data-account-initials]').forEach(el => {
      el.style.background = colour;
      el.style.color = avatarTextColor(colour);
    });
  });

  function mountAll() {
    document.querySelectorAll('[data-account-menu]').forEach(mount);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAll);
  } else {
    mountAll();
  }

  window.AccountMenu = { mount, mountAll };
})();
