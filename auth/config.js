// ============================================
// CLASSICALIA - SUPABASE CONFIGURATION
// ============================================
const SUPABASE_URL = 'https://kqdnqaqqhpdryzoqvdac.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZG5xYXFxaHBkcnl6b3F2ZGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzYwNjYsImV4cCI6MjA3OTc1MjA2Nn0.TLrLDe8NpzNtyHrBjVKsTPAG4drErUW3dZ9zfrLhOeE';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
