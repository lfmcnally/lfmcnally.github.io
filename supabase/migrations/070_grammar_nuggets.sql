-- 070_grammar_nuggets.sql
-- ===========================================================================
-- "Nuggets": a per-subject/level taxonomy of grammar concepts, and per-student
-- events recording which concepts a learner's translation errors relate to.
-- Latin GCSE first; the taxonomy is empty until populated in the admin screen.
--
--   grammar_nuggets        — the concept list (Imperfect tense, Ablative case…)
--   student_nugget_events  — one row per (submission, question, nugget) a
--                            student got wrong; aggregates into "concepts to revise"
--   weekly_test_answers.ai_concepts — concept titles shown in that answer's feedback
--
-- The mark-test function tags translation errors against the list (service role
-- writes events). Concept names aren't sensitive, so anyone may read the
-- taxonomy; events are private to the student (and admins).
-- ===========================================================================

CREATE TABLE IF NOT EXISTS grammar_nuggets (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject      TEXT NOT NULL DEFAULT 'latin',
    level        TEXT NOT NULL DEFAULT 'gcse',
    category     TEXT NOT NULL DEFAULT 'General',   -- e.g. 'Tenses', 'Cases', 'Constructions'
    title        TEXT NOT NULL,                      -- e.g. 'Imperfect tense'
    code         TEXT NOT NULL,                      -- short slug the marker refers to, e.g. 'imperfect'
    revision_url TEXT,                               -- optional link to a revision page/video (later)
    position     INT  NOT NULL DEFAULT 0,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (subject, level, code)
);
CREATE INDEX IF NOT EXISTS idx_grammar_nuggets_subj ON grammar_nuggets (subject, level, position);

CREATE TABLE IF NOT EXISTS student_nugget_events (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    nugget_id     UUID NOT NULL REFERENCES grammar_nuggets(id) ON DELETE CASCADE,
    submission_id UUID REFERENCES weekly_test_submissions(id) ON DELETE CASCADE,
    question_id   UUID,
    severity      TEXT NOT NULL DEFAULT 'minor' CHECK (severity IN ('minor','serious')),
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_nugget_events_student ON student_nugget_events (student_id, nugget_id);
-- one event per (submission, question, nugget) so a re-mark never double-counts
CREATE UNIQUE INDEX IF NOT EXISTS uq_nugget_event
    ON student_nugget_events (submission_id, question_id, nugget_id) WHERE submission_id IS NOT NULL;

ALTER TABLE weekly_test_answers ADD COLUMN IF NOT EXISTS ai_concepts JSONB;

-- ── RLS ────────────────────────────────────────────────────
ALTER TABLE grammar_nuggets       ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_nugget_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone reads nuggets" ON grammar_nuggets;
CREATE POLICY "Anyone reads nuggets" ON grammar_nuggets FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Managers edit nuggets" ON grammar_nuggets;
CREATE POLICY "Managers edit nuggets" ON grammar_nuggets FOR ALL TO authenticated
USING (public.can_manage_bank()) WITH CHECK (public.can_manage_bank());

DROP POLICY IF EXISTS "Students read own nugget events" ON student_nugget_events;
CREATE POLICY "Students read own nugget events" ON student_nugget_events FOR SELECT TO authenticated
USING (student_id = auth.uid() OR public.is_admin());
-- writes are service-role only (mark-test); no client write policy.

COMMENT ON TABLE grammar_nuggets IS 'Grammar concept taxonomy ("nuggets") per subject/level. Managed in admin/nuggets.html.';
COMMENT ON TABLE student_nugget_events IS 'Per-student record of concepts a translation error related to. Aggregates into "concepts to revise".';

-- ── Starter Latin GCSE taxonomy (OCR J282), broken down for error-tagging ──
INSERT INTO grammar_nuggets (subject, level, category, title, code, position) VALUES
  -- Tenses
  ('latin','gcse','Tenses','Present tense','present',10),
  ('latin','gcse','Tenses','Imperfect tense','imperfect',20),
  ('latin','gcse','Tenses','Future tense','future',30),
  ('latin','gcse','Tenses','Perfect tense','perfect',40),
  ('latin','gcse','Tenses','Pluperfect tense','pluperfect',50),
  -- Verb forms, moods & voices
  ('latin','gcse','Verbs','Passive voice','passive',60),
  ('latin','gcse','Verbs','Deponent verbs','deponent',70),
  ('latin','gcse','Verbs','Imperatives','imperative',80),
  ('latin','gcse','Verbs','Infinitives','infinitive',90),
  ('latin','gcse','Verbs','Subjunctive mood','subjunctive',100),
  ('latin','gcse','Verbs','Present participle','participle-present',110),
  ('latin','gcse','Verbs','Perfect (passive) participle','participle-perfect',120),
  ('latin','gcse','Verbs','Future participle','participle-future',130),
  ('latin','gcse','Verbs','Gerundive','gerundive',140),
  ('latin','gcse','Verbs','Irregular verbs (sum, eo, volo, fero…)','irregular-verbs',150),
  -- Cases
  ('latin','gcse','Cases','Nominative (subject)','nominative',160),
  ('latin','gcse','Cases','Vocative','vocative',170),
  ('latin','gcse','Cases','Accusative (object)','accusative',180),
  ('latin','gcse','Cases','Genitive','genitive',190),
  ('latin','gcse','Cases','Dative','dative',200),
  ('latin','gcse','Cases','Ablative','ablative',210),
  ('latin','gcse','Cases','Cases taken by prepositions','prepositions-case',220),
  ('latin','gcse','Cases','Cases taken by verbs/adjectives','special-case',230),
  ('latin','gcse','Cases','Expressions of time','time-expressions',240),
  -- Nouns & adjectives
  ('latin','gcse','Nouns & adjectives','Noun declension recognition','declensions',250),
  ('latin','gcse','Nouns & adjectives','Adjective agreement','adjective-agreement',260),
  ('latin','gcse','Nouns & adjectives','Comparative adjectives/adverbs','comparative',270),
  ('latin','gcse','Nouns & adjectives','Superlative adjectives/adverbs','superlative',280),
  ('latin','gcse','Nouns & adjectives','Ablative of comparison','ablative-comparison',290),
  ('latin','gcse','Nouns & adjectives','Pronouns & pronominal adjectives','pronouns',300),
  ('latin','gcse','Nouns & adjectives','Adverbs','adverbs',310),
  -- Constructions & clauses
  ('latin','gcse','Constructions','Ablative absolute','ablative-absolute',320),
  ('latin','gcse','Constructions','Gerundive of purpose (ad + gerundive)','gerundive-purpose',330),
  ('latin','gcse','Constructions','Purpose clause (ut / ne)','purpose-clause',340),
  ('latin','gcse','Constructions','Result clause','result-clause',350),
  ('latin','gcse','Constructions','Indirect statement (acc. + infinitive)','indirect-statement',360),
  ('latin','gcse','Constructions','Indirect command','indirect-command',370),
  ('latin','gcse','Constructions','Indirect question','indirect-question',380),
  ('latin','gcse','Constructions','Fearing clause (timeo + ne)','fearing-clause',390),
  ('latin','gcse','Constructions','Relative clause','relative-clause',400),
  ('latin','gcse','Constructions','Temporal clause','temporal-clause',410),
  ('latin','gcse','Constructions','Causal clause (quod / cum)','causal-clause',420),
  ('latin','gcse','Constructions','Concessive clause (quamquam)','concessive-clause',430),
  ('latin','gcse','Constructions','Conditional clause','conditional-clause',440),
  ('latin','gcse','Constructions','Direct questions','direct-questions',450),
  ('latin','gcse','Constructions','Direct commands','direct-commands',460),
  ('latin','gcse','Constructions','Prohibitions (noli / nolite)','prohibitions',470),
  -- Common translation slips
  ('latin','gcse','Common slips','Subject / object the wrong way round','subject-object',480),
  ('latin','gcse','Common slips','Singular / plural (number)','number',490),
  ('latin','gcse','Common slips','Person (I / you / he…)','person',500),
  ('latin','gcse','Common slips','Vocabulary (wrong meaning)','vocabulary',510),
  ('latin','gcse','Common slips','Word omitted','omission',520)
ON CONFLICT (subject, level, code) DO NOTHING;
