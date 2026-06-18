-- 074_grammar_chapters.sql
-- ===========================================================================
-- Phase 1 of the grammar-chapters plan (see GRAMMAR_CHAPTERS_PLAN.md):
-- re-shape the Latin GCSE nugget taxonomy so it is CHAPTER-ORDERED and pruned,
-- and add a `chapter` column so assessments can later be gated by what's been
-- taught ("Latin to GCSE", Taylor — Book 1 = ch.1-6, Book 2 = ch.7-10).
--
-- This is an idempotent UPSERT by (subject, level, code): rows whose code is
-- unchanged keep their id, so existing student_nugget_events stay attached.
-- Codes no longer in the list are deleted (their events cascade — only the few
-- pruned/split-away concepts lose history).
-- ===========================================================================

ALTER TABLE grammar_nuggets ADD COLUMN IF NOT EXISTS chapter INT NOT NULL DEFAULT 0;
COMMENT ON COLUMN grammar_nuggets.chapter IS
  'Scheme chapter where the concept is first introduced (Latin to GCSE 1-10). 0 = un-gated / always-available (common slips).';

-- Final chapter-ordered taxonomy. position = chapter*100 + order-within-chapter
-- (common slips parked at 9000+ so they sort last). Upsert keeps ids stable.
INSERT INTO grammar_nuggets (subject, level, category, title, code, chapter, position) VALUES
  -- Chapter 1
  ('latin','gcse','Tenses','Present tense','present',1,101),
  ('latin','gcse','Cases','Nominative (subject)','nominative',1,102),
  ('latin','gcse','Cases','Accusative (object)','accusative',1,103),
  ('latin','gcse','Cases','Prepositions + their case','prepositions-case',1,104),
  ('latin','gcse','Nouns & adjectives','Noun declension recognition','declensions',1,105),
  ('latin','gcse','Verbs','sum & its compounds','sum',1,106),
  -- Chapter 2
  ('latin','gcse','Cases','Genitive','genitive',2,201),
  ('latin','gcse','Cases','Dative','dative',2,202),
  ('latin','gcse','Cases','Ablative','ablative',2,203),
  ('latin','gcse','Verbs','Infinitives','infinitive',2,204),
  ('latin','gcse','Cases',E'Time ‘how long’ (+ accusative)','time-howlong',2,205),
  -- Chapter 3
  ('latin','gcse','Tenses','Imperfect tense','imperfect',3,301),
  ('latin','gcse','Verbs','possum','possum',3,302),
  ('latin','gcse','Nouns & adjectives','Adjective agreement','adjective-agreement',3,303),
  ('latin','gcse','Verbs','Imperatives (direct commands)','imperative',3,304),
  ('latin','gcse','Cases','Vocative','vocative',3,305),
  -- Chapter 4
  ('latin','gcse','Tenses','Perfect tense','perfect',4,401),
  ('latin','gcse','Constructions','Direct questions','direct-questions',4,402),
  ('latin','gcse','Nouns & adjectives','Personal & reflexive pronouns','pronouns',4,403),
  ('latin','gcse','Cases',E'Time ‘when’ (+ ablative)','time-when',4,404),
  -- Chapter 5
  ('latin','gcse','Tenses','Future tense','future',5,501),
  ('latin','gcse','Nouns & adjectives','Adverbs (formation)','adverbs',5,502),
  ('latin','gcse','Nouns & adjectives','Demonstratives (is, hic, ille, ipse, idem)','demonstratives',5,503),
  -- Chapter 6
  ('latin','gcse','Tenses','Pluperfect tense','pluperfect',6,601),
  ('latin','gcse','Constructions','Relative clause','relative-clause',6,602),
  ('latin','gcse','Constructions','Causal clause (quod)','causal-clause',6,603),
  ('latin','gcse','Constructions','Concessive clause (quamquam)','concessive-clause',6,604),
  ('latin','gcse','Nouns & adjectives','Numerals','numerals',6,605),
  ('latin','gcse','Verbs','eo (to go)','eo',6,606),
  ('latin','gcse','Constructions','Temporal clause (ubi, postquam)','temporal-clause',6,607),
  ('latin','gcse','Cases',E'Time ‘within which’','time-within',6,608),
  -- Chapter 7  (Book 2)
  ('latin','gcse','Nouns & adjectives','Comparative adjectives & adverbs','comparative',7,701),
  ('latin','gcse','Nouns & adjectives','Superlative adjectives & adverbs','superlative',7,702),
  ('latin','gcse','Nouns & adjectives','Ablative of comparison','ablative-comparison',7,703),
  ('latin','gcse','Verbs','Passive voice','passive',7,704),
  ('latin','gcse','Verbs','Present active participle','participle-present',7,705),
  ('latin','gcse','Verbs','Perfect passive participle','participle-perfect',7,706),
  -- Chapter 8
  ('latin','gcse','Constructions','Conditional clauses','conditional-clause',8,801),
  ('latin','gcse','Verbs','Future active participle','participle-future',8,802),
  ('latin','gcse','Constructions','Ablative absolute','ablative-absolute',8,803),
  ('latin','gcse','Verbs','volo, nolo, malo & fero','volo-fero',8,804),
  ('latin','gcse','Constructions','Prohibitions & negative commands','prohibitions',8,805),
  -- Chapter 9
  ('latin','gcse','Verbs','Deponent verbs','deponent',9,901),
  ('latin','gcse','Constructions','Indirect statement (acc. + infinitive)','indirect-statement',9,902),
  -- Chapter 10
  ('latin','gcse','Verbs','Subjunctive (form recognition)','subjunctive',10,1001),
  ('latin','gcse','Constructions','Purpose clause (ut / ne)','purpose-clause',10,1002),
  ('latin','gcse','Constructions','Result clause','result-clause',10,1003),
  ('latin','gcse','Constructions','Indirect command','indirect-command',10,1004),
  ('latin','gcse','Constructions','Indirect question','indirect-question',10,1005),
  ('latin','gcse','Constructions','Fearing clause (timeo + ne)','fearing-clause',10,1006),
  ('latin','gcse','Constructions','Cum + subjunctive clause','cum-clause',10,1007),
  ('latin','gcse','Verbs','Gerundive','gerundive',10,1008),
  ('latin','gcse','Constructions','Gerundive of purpose (ad + gerundive)','gerundive-purpose',10,1009),
  -- Common slips — un-gated, apply at every chapter
  ('latin','gcse','Common slips','Subject / object the wrong way round','subject-object',0,9001),
  ('latin','gcse','Common slips','Singular / plural (number)','number',0,9002),
  ('latin','gcse','Common slips','Person (I / you / he…)','person',0,9003),
  ('latin','gcse','Common slips','Vocabulary (wrong meaning)','vocabulary',0,9004),
  ('latin','gcse','Common slips','Word omitted','omission',0,9005)
ON CONFLICT (subject, level, code) DO UPDATE
  SET category = EXCLUDED.category,
      title    = EXCLUDED.title,
      chapter  = EXCLUDED.chapter,
      position = EXCLUDED.position;

-- Retire concepts that were split up or pruned (events cascade away).
--   irregular-verbs -> sum / possum / eo / volo-fero
--   time-expressions -> time-howlong / time-when / time-within
--   direct-commands  -> imperative
--   special-case     -> dropped (folded into the case nuggets / vocabulary)
DELETE FROM grammar_nuggets
 WHERE subject = 'latin' AND level = 'gcse'
   AND code IN ('irregular-verbs','time-expressions','direct-commands','special-case');
