-- ============================================
-- Bayesian Knowledge Tracing (BKT) for vocabulary — version 2
-- ============================================
-- A clean break from the older `word_mastery` table.
--
-- `word_mastery` tracks counted correct/incorrect attempts plus a streak-style
-- "mastered_at" flag, used by the original vocab quizzes and the v1 dashboards.
-- The v2 vocabulary tester runs a different model entirely (BKT — a probabilistic
-- estimate of p(knows the word) updated after each attempt), so it needs its own
-- table. The two systems are independent: v2 reads/writes only `vocab_bkt`.
--
-- Key: (student_id, vocab_list, word_latin) is unique. The same word that
-- appears in two chapters of the same list shares a single BKT score — knowing
-- the word doesn't depend on which chapter you met it in.
--
-- vocab_list values (free-form text; the tester decides what to store):
--   'latin-gcse'      OCR GCSE Latin defined vocabulary (J282)
--   'latin-alevel'    OCR A-Level Latin defined vocabulary (H443)
--   'latin-suburani'  Suburani textbook vocabulary
--   'greek-gcse'      OCR GCSE Greek defined vocabulary
--   'greek-alevel'    OCR A-Level Greek defined vocabulary

CREATE TABLE IF NOT EXISTS vocab_bkt (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vocab_list   TEXT NOT NULL,
    word_latin   TEXT NOT NULL,
    p_know       REAL NOT NULL DEFAULT 0.3 CHECK (p_know >= 0 AND p_know <= 1),
    trials       INTEGER NOT NULL DEFAULT 0 CHECK (trials >= 0),
    correct      INTEGER NOT NULL DEFAULT 0 CHECK (correct >= 0),
    last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (student_id, vocab_list, word_latin)
);

CREATE INDEX IF NOT EXISTS idx_vocab_bkt_student_list
    ON vocab_bkt (student_id, vocab_list);

CREATE INDEX IF NOT EXISTS idx_vocab_bkt_last_seen
    ON vocab_bkt (student_id, last_seen_at DESC);

-- ============================================
-- Row-level security
-- ============================================
ALTER TABLE vocab_bkt ENABLE ROW LEVEL SECURITY;

-- Students: full access to their own rows
CREATE POLICY "Students manage their own BKT rows"
ON vocab_bkt FOR ALL
TO authenticated
USING (student_id = auth.uid())
WITH CHECK (student_id = auth.uid());

-- Teachers: read-only access to rows for students in their classes
CREATE POLICY "Teachers read BKT for their class members"
ON vocab_bkt FOR SELECT
TO authenticated
USING (
    student_id IN (
        SELECT cm.student_id
        FROM classes c
        JOIN class_members cm ON cm.class_id = c.id
        WHERE c.teacher_id = auth.uid()
    )
);

COMMENT ON TABLE vocab_bkt IS
'Bayesian Knowledge Tracing state for the v2 vocabulary tester. Independent of the legacy word_mastery table.';

COMMENT ON COLUMN vocab_bkt.p_know IS
'Posterior P(student knows word) after the most recent attempt, in [0,1]. Initialised at the BKT prior (pL0, typically 0.3).';

COMMENT ON COLUMN vocab_bkt.vocab_list IS
'Identifier for which defined-vocabulary list this row belongs to (e.g. latin-gcse, latin-alevel, latin-suburani, greek-gcse).';
