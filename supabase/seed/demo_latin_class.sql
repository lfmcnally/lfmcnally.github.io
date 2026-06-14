-- ===========================================================================
-- DEMO SEED — a fully-populated GCSE Latin class for screenshots / live demos
-- ===========================================================================
-- Creates ONE class on the owner account (lawrencefmcnally@gmail.com) with a
-- roster of fake "students" and realistic vocabulary-confidence data, so the
-- teacher dashboard (/version2/tracking/teacher.html) looks alive for a demo.
--
-- • The students are demo-only accounts on a reserved @demo.classicalia.local
--   domain. They cannot be logged into and are easy to find + delete later.
-- • Re-running is safe: identities are deterministic and inserts are guarded.
-- • To REMOVE everything afterwards, run demo_latin_class_teardown.sql.
--
-- HOW TO RUN: Supabase -> SQL Editor -> paste this whole file -> Run.
-- ===========================================================================

create extension if not exists pgcrypto;   -- for crypt()/gen_salt()

do $$
declare
  v_teacher  uuid;
  v_class    uuid;
  s          record;
  v_email    text;
  v_uid      uuid;
begin
  -- 1. Find the teacher (owner) account.
  select id into v_teacher from auth.users
   where lower(email) = lower('lawrencefmcnally@gmail.com') limit 1;
  if v_teacher is null then
    raise exception 'Owner account lawrencefmcnally@gmail.com not found in auth.users';
  end if;

  -- 2. One demo class (idempotent on teacher + name).
  select id into v_class from v2_classes
   where teacher_id = v_teacher and name = 'Demo Latin · Year 10' limit 1;
  if v_class is null then
    insert into v2_classes (teacher_id, name, type, weekly_goal)
    values (v_teacher, 'Demo Latin · Year 10', 'latin-gcse', 50)
    returning id into v_class;
  end if;

  -- 3. Each demo student.
  for s in
    select * from (values
      ('Amelia Whitfield', 0.97, 'active'),
      ('Priya Nair', 0.93, 'active'),
      ('James Okonkwo', 0.9, 'active'),
      ('Charlotte Mills', 0.86, 'active'),
      ('Oliver Bennett', 0.8, 'active'),
      ('Sofia Russo', 0.74, 'active'),
      ('Daniel Levy', 0.68, 'active'),
      ('Grace Thornton', 0.62, 'active'),
      ('Eleanor Fox', 0.55, 'active'),
      ('Hassan Iqbal', 0.5, 'idle'),
      ('Tom Hargreaves', 0.43, 'idle'),
      ('Freddie Clarke', 0.34, 'inactive')
    ) as t(full_name, ability, activity)
  loop
    v_email := lower(replace(s.full_name, ' ', '.')) || '@demo.classicalia.local';
    v_uid   := md5('classicalia-demo:' || v_email)::uuid;   -- stable per student

    -- 3a. auth.users row (no usable password; demo only).
    insert into auth.users (
      instance_id, id, aud, role, email, encrypted_password,
      email_confirmed_at, created_at, updated_at,
      raw_app_meta_data, raw_user_meta_data,
      confirmation_token, recovery_token, email_change_token_new, email_change
    ) values (
      '00000000-0000-0000-0000-000000000000', v_uid, 'authenticated', 'authenticated',
      v_email, crypt('demo-only-no-login-' || v_uid::text, gen_salt('bf')),
      now(), now(), now(),
      '{"provider":"email","providers":["email"]}'::jsonb,
      jsonb_build_object('full_name', s.full_name, 'role', 'student'),
      '', '', '', ''
    ) on conflict (id) do nothing;

    -- 3b. public.users profile (normalise role/name even if a trigger made it).
    insert into public.users (id, role, full_name, email)
    values (v_uid, 'student', s.full_name, v_email)
    on conflict (id) do update
      set role = 'student', full_name = excluded.full_name, email = excluded.email;

    -- 3c. Class membership.
    insert into v2_class_members (class_id, student_id)
    values (v_class, v_uid) on conflict do nothing;

    -- 3d. Vocabulary confidence across 200 real OCR J282 words. Confidence is
    --     correlated to the student's ability, with deterministic per-word
    --     variation, so every student looks individual and believable.
    insert into vocab_bkt (
      student_id, vocab_list, word_latin,
      p_know, trials, correct, distinct_correct_days,
      last_correct_date, next_review_at, last_seen_at
    )
    select
      v_uid, 'latin-gcse', w.word,
      d.p_know, d.trials,
      least(d.trials, greatest(0, round(d.p_know * d.trials)::int)),
      d.ddays, d.lcd, d.nra, d.lsa
    from (values
      ('a, ab'),
      ('ac, atque'),
      ('accipio'),
      ('adeo'),
      ('advenio'),
      ('ager'),
      ('alius'),
      ('altus'),
      ('amicus'),
      ('amor'),
      ('animus'),
      ('antea'),
      ('aqua'),
      ('ars'),
      ('audax'),
      ('audio'),
      ('auxilium'),
      ('bene'),
      ('bonus'),
      ('cado'),
      ('capio'),
      ('caput'),
      ('celer'),
      ('cena'),
      ('cibus'),
      ('civis'),
      ('clamor'),
      ('coepi'),
      ('cognosco'),
      ('comes'),
      ('conor'),
      ('conspicio'),
      ('consul'),
      ('contra'),
      ('copiae'),
      ('cras'),
      ('crudelis'),
      ('cupio'),
      ('cura'),
      ('custodio'),
      ('de'),
      ('debeo'),
      ('defendo'),
      ('deleo'),
      ('deus'),
      ('dies'),
      ('diligens'),
      ('discedo'),
      ('do'),
      ('domina'),
      ('domus'),
      ('dormio'),
      ('dum'),
      ('e, ex'),
      ('effugio'),
      ('egredior'),
      ('enim'),
      ('epistula'),
      ('et'),
      ('exercitus'),
      ('facilis'),
      ('faveo'),
      ('femina'),
      ('ferox'),
      ('fidelis'),
      ('filius'),
      ('forte'),
      ('forum'),
      ('frustra'),
      ('gaudeo'),
      ('gens'),
      ('gladius'),
      ('habeo'),
      ('heri'),
      ('hodie'),
      ('hora'),
      ('hortus'),
      ('iaceo'),
      ('iam'),
      ('ibi'),
      ('igitur'),
      ('imperator'),
      ('impero'),
      ('incendo'),
      ('ingens'),
      ('inimicus'),
      ('insula'),
      ('inter'),
      ('interficio'),
      ('invenio'),
      ('ipse'),
      ('iratus'),
      ('ita'),
      ('iter'),
      ('iubeo'),
      ('labor'),
      ('lacrimo'),
      ('laudo'),
      ('lego'),
      ('libenter'),
      ('liberi'),
      ('libertus'),
      ('longus'),
      ('lux'),
      ('magnus'),
      ('malus'),
      ('manus'),
      ('maritus'),
      ('maxime'),
      ('medius'),
      ('meus'),
      ('minime'),
      ('minor'),
      ('miser'),
      ('modus'),
      ('mons'),
      ('mors'),
      ('mox'),
      ('multus'),
      ('nam'),
      ('nauta'),
      ('navis'),
      ('ne'),
      ('neco'),
      ('nescio'),
      ('nisi'),
      ('nomen'),
      ('nonnulli'),
      ('noster'),
      ('nox'),
      ('num'),
      ('nunc'),
      ('nuntius'),
      ('offero'),
      ('omnis'),
      ('oppugno'),
      ('oro'),
      ('paene'),
      ('pars'),
      ('pater'),
      ('patria'),
      ('pax'),
      ('peior'),
      ('per'),
      ('periculum'),
      ('perterritus'),
      ('pessimus'),
      ('plurimus'),
      ('poena'),
      ('pono'),
      ('porto'),
      ('post'),
      ('postquam'),
      ('praemium'),
      ('primus'),
      ('pro'),
      ('proelium'),
      ('progredior'),
      ('prope'),
      ('proximus'),
      ('puer'),
      ('pulcher'),
      ('puto'),
      ('qualis?'),
      ('quamquam'),
      ('quantus?'),
      ('qui'),
      ('quinque'),
      ('quo?'),
      ('quomodo?'),
      ('quot?'),
      ('re-'),
      ('redeo'),
      ('regina'),
      ('rego'),
      ('relinquo'),
      ('resisto'),
      ('rex'),
      ('rogo'),
      ('Romanus'),
      ('saepe'),
      ('saluto'),
      ('scelestus'),
      ('scio'),
      ('se'),
      ('sedeo'),
      ('senator'),
      ('sentio'),
      ('servo'),
      ('si'),
      ('silva'),
      ('simulac, simulatque'),
      ('soleo'),
      ('specto'),
      ('spes'),
      ('sto'),
      ('sub'),
      ('sum'),
      ('supero'),
      ('suus')
    ) as w(word)
    cross join lateral (
      select
        (abs(mod(('x'||substr(md5(v_email||':'||w.word), 1,8))::bit(32)::int,1000)))/1000.0 as n,
        (abs(mod(('x'||substr(md5(v_email||':'||w.word), 9,8))::bit(32)::int,1000)))/1000.0 as n2,
        (abs(mod(('x'||substr(md5(v_email||':'||w.word),17,8))::bit(32)::int,1000)))/1000.0 as n3,
        (abs(mod(('x'||substr(md5(v_email||':'||w.word),25,8))::bit(32)::int,1000)))/1000.0 as n4
    ) h
    cross join lateral (
      select
        least(0.99, greatest(0.05, s.ability - 0.24 + 0.66*h.n))::real          as p_know,
        (4 + floor(h.n2*9))::int                                                as trials
    ) p1
    cross join lateral (
      select
        p1.p_know, p1.trials,
        case when p1.p_know >= 0.95 then 3 + floor(h.n3*4)::int
             else floor(h.n3*2)::int end                                        as ddays,
        case when p1.p_know >= 0.95 then current_date - floor(h.n3*5)::int
             else null end                                                      as lcd,
        case when p1.p_know >= 0.95 and h.n3 < 0.15 then now() - interval '1 day'
             when p1.p_know >= 0.95 then now() + (5 + floor(h.n3*20))*interval '1 day'
             else null end                                                      as nra,
        case s.activity
          when 'active'   then now() - floor(h.n4*3)*interval '1 day' - floor(h.n2*24)*interval '1 hour'
          when 'idle'     then now() - (4 + floor(h.n4*3))*interval '1 day'
          else                 now() - (12 + floor(h.n4*15))*interval '1 day'
        end                                                                     as lsa
    ) d
    -- Coverage scales with engagement: keen students have tried more of the
    -- list; disengaged ones have only attempted a fraction (rest stay "not seen").
    where (abs(mod(('x'||substr(md5(v_email||'cov:'||w.word),1,8))::bit(32)::int,1000)))/1000.0
          < case s.activity when 'active' then 1.0 when 'idle' then 0.6 else 0.4 end
    on conflict (student_id, vocab_list, word_latin) do nothing;

    -- 3e. This-week practice sessions (drives the "This week" column).
    delete from vocab_sessions where student_id = v_uid and vocab_list = 'latin-gcse';
    if s.activity = 'active' then
      insert into vocab_sessions (student_id, vocab_list, started_at, last_answer_at, answered, correct)
      select v_uid, 'latin-gcse',
        now() - g.k*interval '1 day' - floor(random()*6)*interval '1 hour',
        now() - g.k*interval '1 day',
        (14 + abs(mod(('x'||substr(md5(v_email||g.k::text),1,8))::bit(32)::int,12)))::int,
        0
      from generate_series(0,2) as g(k);
      update vocab_sessions set correct = round(answered * s.ability)::int
        where student_id = v_uid and vocab_list = 'latin-gcse';
    elsif s.activity = 'idle' then
      insert into vocab_sessions (student_id, vocab_list, started_at, last_answer_at, answered, correct)
      values (v_uid, 'latin-gcse', now() - interval '5 days', now() - interval '5 days', 12, round(12*s.ability)::int);
    end if;
  end loop;

  raise notice 'Demo class ready: % students seeded.', (select count(*) from v2_class_members where class_id = v_class);
end $$;
