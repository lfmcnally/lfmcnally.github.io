// ============================================
// CLASSICALIA - SUPABASE CONFIGURATION
// ============================================
// This file contains the credentials to connect to your Supabase database.
// These are safe to be public - the "anon" key only allows limited access
// that's controlled by the security policies we set up.

const SUPABASE_URL = 'https://kqdnqaqqhpdryzoqvdac.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZG5xYXFxaHBkcnl6b3F2ZGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzYwNjYsImV4cCI6MjA3OTc1MjA2Nn0.TLrLDe8NpzNtyHrBjVKsTPAG4drErUW3dZ9zfrLhOeE';

// Create the Supabase client
// This is what we use to talk to the database
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
