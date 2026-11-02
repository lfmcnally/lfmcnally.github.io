-- ============================================
-- Do Now: gap fill format (with optional word bank)
-- ============================================
-- A teacher can now set the class's Do Now as a gap fill instead of the
-- usual multiple-choice quiz. Students get a short worksheet of sentences,
-- each with one word missing, and type the missing words. The teacher can
-- also choose to show a word bank (the missing words, shuffled) above it.
--
--   format     'quiz' (default, the existing behaviour) or 'gapfill'
--   word_bank  show the word bank on a gap fill
--
-- The gap fill page logs to vocab_sessions under the Do Now's vocab_list,
-- exactly as the quiz does, so the live results table and class view on the
-- teacher's Do Now page work unchanged.
--
-- Safe to run more than once.

ALTER TABLE v2_do_now ADD COLUMN IF NOT EXISTS format    TEXT    NOT NULL DEFAULT 'quiz';
ALTER TABLE v2_do_now ADD COLUMN IF NOT EXISTS word_bank BOOLEAN NOT NULL DEFAULT FALSE;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'v2_do_now_format_check') THEN
    ALTER TABLE v2_do_now ADD CONSTRAINT v2_do_now_format_check CHECK (format IN ('quiz', 'gapfill'));
  END IF;
END $$;

-- Return the format with the rest of the student's current Do Now.
CREATE OR REPLACE FUNCTION get_my_do_now(p_vocab_list TEXT)
RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
DECLARE
    v RECORD;
BEGIN
    SELECT dn.class_id, c.name AS class_name, dn.vocab_list,
           dn.topic_id, dn.subtopics, dn.updated_at, dn.format, dn.word_bank
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
        'updated_at', v.updated_at,
        'format',     v.format,
        'word_bank',  v.word_bank
    );
END;
$$;

GRANT EXECUTE ON FUNCTION get_my_do_now(TEXT) TO authenticated;
