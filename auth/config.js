// ============================================
// CLASSICALIA - SUPABASE CONFIGURATION
// ============================================
const SUPABASE_URL = 'https://kqdnqaqqhpdryzoqvdac.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZG5xYXFxaHBkcnl6b3F2ZGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzYwNjYsImV4cCI6MjA3OTc1MjA2Nn0.TLrLDe8NpzNtyHrBjVKsTPAG4drErUW3dZ9zfrLhOeE';

// Create the Supabase client and make it globally available
// Note: window.supabase is the CDN module, we create the client as window.supabaseClient
const { createClient } = window.supabase;
window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Also expose as 'supabase' for backward compatibility (overwrites the module reference)
var supabase = window.supabaseClient;

// Activity log (migration 086): one ping per page load for signed-in users,
// so the admin panel can show who visits, when and how often. The server
// groups pings into visits and spots fresh sign-ins itself. Fails silently.
(function (client) {
  if (!client || window.__classicaliaActivityPing) return;
  window.__classicaliaActivityPing = true;
  function ping() {
    try {
      client.auth.getSession().then(function (r) {
        if (!r || !r.data || !r.data.session) return;
        client.rpc('track_activity', {
          p_path: location.pathname,
          p_user_agent: navigator.userAgent
        }).then(function () {}, function () {});
      }, function () {});
    } catch (e) { /* never break the page over analytics */ }
  }
  if (document.readyState === 'complete') setTimeout(ping, 0);
  else window.addEventListener('load', function () { setTimeout(ping, 0); });
})(window.supabaseClient);
