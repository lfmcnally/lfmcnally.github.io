-- Migration: Enable Realtime Authorization for Broadcast & Presence
-- Fixes CHANNEL_ERROR when connecting to whiteboard realtime channels.
-- Supabase Realtime requires RLS policies on realtime.messages
-- to allow authenticated users to join broadcast/presence channels.

-- Allow authenticated users to receive broadcast/presence messages
CREATE POLICY "authenticated users can receive realtime messages"
  ON "realtime"."messages"
  AS PERMISSIVE FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to send broadcast/presence messages
CREATE POLICY "authenticated users can send realtime messages"
  ON "realtime"."messages"
  AS PERMISSIVE FOR INSERT
  TO authenticated
  WITH CHECK (true);
