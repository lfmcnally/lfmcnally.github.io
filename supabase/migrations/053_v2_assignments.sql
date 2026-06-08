-- ============================================
-- Homework / assignments
-- ============================================
-- A teacher sets a class an assignment: practise a scope of the course to a
-- target by a due date. Completion is read live from each student's vocab_bkt
-- state (no separate completions table) — so "done" reflects real progress and
-- updates as they practise.
--
-- Scope is either:
--   • a chapter/set range of the class's vocab list  (scope_kind = 'range')
--   • a Classical Civ topic                          (scope_kind = 'topic')
--
-- Target is either:
--   • 'secure'    — % of the scope's items that are Secure
--   • 'attempted' — % of the scope's items attempted at least once
-- ...measured against target_pct.

CREATE TABLE IF NOT EXISTS v2_assignments (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id     UUID NOT NULL REFERENCES v2_classes(id) ON DELETE CASCADE,
    vocab_list   TEXT NOT NULL,                 -- which dataset the scope refers to
    scope_kind   TEXT NOT NULL CHECK (scope_kind IN ('range', 'topic')),
    chapter_from INTEGER,                        -- range scope (inclusive)
    chapter_to   INTEGER,
    topic_id     TEXT,                           -- topic scope (e.g. '1.1')
    target_kind  TEXT NOT NULL CHECK (target_kind IN ('secure', 'attempted')),
    target_pct   INTEGER NOT NULL CHECK (target_pct BETWEEN 1 AND 100),
    due_date     DATE,
    note         TEXT,
    created_by   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_v2_assignments_class ON v2_assignments (class_id, created_at DESC);

ALTER TABLE v2_assignments ENABLE ROW LEVEL SECURITY;

-- Teachers: full control over assignments for classes they own.
DROP POLICY IF EXISTS "Teachers manage their class assignments" ON v2_assignments;
CREATE POLICY "Teachers manage their class assignments"
ON v2_assignments FOR ALL
TO authenticated
USING      (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()))
WITH CHECK (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()));

-- Students: read assignments for classes they belong to. my_v2_class_ids() is
-- the SECURITY DEFINER helper from migration 040 (avoids RLS recursion).
DROP POLICY IF EXISTS "Students read their class assignments" ON v2_assignments;
CREATE POLICY "Students read their class assignments"
ON v2_assignments FOR SELECT
TO authenticated
USING (class_id IN (SELECT my_v2_class_ids()));

COMMENT ON TABLE v2_assignments IS
'Teacher-set homework for a class. Completion is computed live from vocab_bkt — no completions table. Scope = chapter range or a Civ topic; target = % secure or % attempted.';
