-- ============================================
-- "Do Now" assignments for v2 classes
-- ============================================
-- A teacher sets one current "Do Now" per class — a topic (and optional
-- subset of subtopics) for students to drill at the start of the lesson.
-- Students don't choose anything: their Do Now button reads whatever their
-- teacher has set for a class they belong to.
--
-- One row per class (UNIQUE class_id) = the class's current Do Now.
-- Replacing it is an upsert; turning it off is a DELETE (or active=false).
--
-- This rides entirely on the v2_classes / v2_class_members model from
-- migration 040 and the vocab_sessions log from 041 — no new student
-- linkage is introduced. The end-of-lesson summary is built by the teacher
-- dashboard from vocab_sessions (already readable by the teacher via the
-- my_v2_students() helper), so this migration only stores the assignment.

-- ──────────────────────────────────────────────────────────
-- 1. Table
-- ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS v2_do_now (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id    UUID NOT NULL UNIQUE REFERENCES v2_classes(id) ON DELETE CASCADE,
    vocab_list  TEXT NOT NULL,            -- e.g. 'civ-myth-religion'
    topic_id    TEXT NOT NULL,            -- e.g. '1.3'
    subtopics   JSONB,                    -- array of subtopic labels; NULL = all
    active      BOOLEAN NOT NULL DEFAULT TRUE,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_v2_do_now_class ON v2_do_now (class_id);

-- ──────────────────────────────────────────────────────────
-- 2. RLS
-- ──────────────────────────────────────────────────────────
ALTER TABLE v2_do_now ENABLE ROW LEVEL SECURITY;

-- Teacher: full control over the Do Now for classes they own
DROP POLICY IF EXISTS "Teachers manage do now for their classes" ON v2_do_now;
CREATE POLICY "Teachers manage do now for their classes"
ON v2_do_now FOR ALL
TO authenticated
USING      (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()))
WITH CHECK (class_id IN (SELECT id FROM v2_classes WHERE teacher_id = auth.uid()));

-- Student: read the Do Now for any class they belong to
-- (my_v2_class_ids() is the SECURITY DEFINER helper from migration 040)
DROP POLICY IF EXISTS "Students read do now for their classes" ON v2_do_now;
CREATE POLICY "Students read do now for their classes"
ON v2_do_now FOR SELECT
TO authenticated
USING (class_id IN (SELECT my_v2_class_ids()));

-- ──────────────────────────────────────────────────────────
-- 3. Student-side RPC — "what is my current Do Now?"
-- ──────────────────────────────────────────────────────────
-- Returns the most recently updated active Do Now among the calling
-- student's classes, narrowed to a single vocab_list (so the Civ tester
-- only ever picks up a Civ Do Now). NULL fields when there is none.
CREATE OR REPLACE FUNCTION get_my_do_now(p_vocab_list TEXT)
RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
DECLARE
    v RECORD;
BEGIN
    SELECT dn.class_id, c.name AS class_name, dn.vocab_list,
           dn.topic_id, dn.subtopics, dn.updated_at
      INTO v
      FROM v2_do_now dn
      JOIN v2_classes c ON c.id = dn.class_id
     WHERE dn.active = TRUE
       AND dn.vocab_list = p_vocab_list
       AND dn.class_id IN (
           SELECT class_id FROM v2_class_members WHERE student_id = auth.uid()
       )
     ORDER BY dn.updated_at DESC
     LIMIT 1;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('ok', false);
    END IF;

    RETURN jsonb_build_object(
        'ok',         true,
        'class_id',   v.class_id,
        'class_name', v.class_name,
        'vocab_list', v.vocab_list,
        'topic_id',   v.topic_id,
        'subtopics',  v.subtopics,
        'updated_at', v.updated_at
    );
END;
$$;

GRANT EXECUTE ON FUNCTION get_my_do_now(TEXT) TO authenticated;

-- ──────────────────────────────────────────────────────────
-- 4. Comments
-- ──────────────────────────────────────────────────────────
COMMENT ON TABLE v2_do_now IS
'One current "Do Now" assignment per v2 class (topic + optional subtopics). Read by students via get_my_do_now(); set by teachers via upsert on class_id.';
