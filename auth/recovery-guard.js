// ============================================
// CLASSICALIA - PASSWORD RECOVERY GUARD
// ============================================
// Supabase sends password-reset links back to whichever URL it is allowed to
// use. If the "Redirect URLs" allow-list does not match, or an email client
// rewrites the link, the user lands on the site root (or /version2/) instead
// of /auth/reset-password.html, with the recovery token still attached but
// nothing on the page to handle it, so they just see the homepage, logged out.
//
// This guard runs early on those landing pages. If it spots recovery tokens
// (or a Supabase auth error) in the URL it forwards the whole lot to the reset
// page, which knows what to do with them.
//
// Load it *before* the Supabase client so the tokens are still in the URL.

(function () {
  var RESET_PAGE = '/auth/reset-password.html';

  // Already on the reset page, nothing to forward.
  if (window.location.pathname.indexOf('/auth/reset-password') === 0) return;

  var hash = window.location.hash.replace(/^#/, '');
  var search = window.location.search.replace(/^\?/, '');

  var hashParams = new URLSearchParams(hash);
  var queryParams = new URLSearchParams(search);

  function get(name) {
    return hashParams.get(name) || queryParams.get(name);
  }

  var type = get('type');
  var isRecovery =
    type === 'recovery' ||
    (!!get('token_hash') && (!type || type === 'recovery')) ||
    (!!get('access_token') && type === 'recovery') ||
    // PKCE-style links arrive as ?code=... with nothing else to go on.
    (!!queryParams.get('code') && !type) ||
    // Expired or already-used links come back as an error instead of a token.
    (!!get('error') && (type === 'recovery' || !!get('error_code')));

  if (!isRecovery) return;

  var target = RESET_PAGE;
  if (search) target += '?' + search;
  if (hash) target += '#' + hash;

  // Flag it so other redirects on the landing page stand down.
  window.__classicaliaRecoveryRedirect = true;
  window.location.replace(target);
})();
