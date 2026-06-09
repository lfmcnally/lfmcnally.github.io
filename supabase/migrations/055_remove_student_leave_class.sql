-- ============================================
-- Remove students' ability to leave their own classes
-- ============================================
-- Migration 040 gave students a DELETE policy on v2_class_members
-- ("Students leave their own v2 memberships") so the profile page could offer
-- a "Remove access" button. In practice, students removing themselves from a
-- class is a footgun: it silently drops them from the teacher's tracking,
-- leaderboards and homework with no warning to the teacher, and is easy to do
-- by accident. Class membership should be managed by teachers only.
--
-- This drops the student-side DELETE policy so a crafted client can't delete
-- membership rows either. Students keep their SELECT policy, so the profile
-- page can still show which teachers/classes can see their progress — they
-- just can't revoke it themselves. Teachers' add/remove policies are
-- unchanged; teachers remove students from the teacher dashboard as before.
--
-- (The equivalent v1 policy, "Students can leave their own classes" on
-- class_members, was already dropped in migration 040.)

DROP POLICY IF EXISTS "Students leave their own v2 memberships" ON v2_class_members;
