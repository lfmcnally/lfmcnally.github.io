// Classicalia v2 — Supabase client
// Mirrors /auth/config.js so v2 can share the same project & auth session.
// Requires the supabase-js CDN script to be loaded *before* this file.

(function () {
  const SUPABASE_URL = 'https://kqdnqaqqhpdryzoqvdac.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZG5xYXFxaHBkcnl6b3F2ZGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzYwNjYsImV4cCI6MjA3OTc1MjA2Nn0.TLrLDe8NpzNtyHrBjVKsTPAG4drErUW3dZ9zfrLhOeE';

  if (!window.supabase || !window.supabase.createClient) {
    console.error('[classicalia] supabase-js not loaded — include the CDN script before supabase-client.js');
    return;
  }

  // The CDN exposes the library as window.supabase. We replace it with the
  // instantiated client so callers can just do `supabase.from(...)`.
  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.supabaseClient = client;
  window.supabase = client;
})();
