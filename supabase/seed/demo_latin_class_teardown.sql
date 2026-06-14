-- ===========================================================================
-- TEARDOWN — remove the demo GCSE Latin class and all its fake students
-- ===========================================================================
-- Deletes everything demo_latin_class.sql created: the fake student accounts
-- (auth.users + public.users), their class membership, vocab confidence and
-- sessions, and the demo class itself. Real students/classes are untouched —
-- this only matches the reserved @demo.classicalia.local domain.
--
-- HOW TO RUN: Supabase → SQL Editor → paste → Run.
-- ===========================================================================

do $$
declare
  v_teacher uuid;
  v_ids     uuid[];
begin
  select id into v_teacher from auth.users
   where lower(email) = lower('lawrencefmcnally@gmail.com') limit 1;

  select array_agg(id) into v_ids
    from auth.users where email like '%@demo.classicalia.local';

  if v_ids is not null then
    delete from vocab_bkt        where student_id = any(v_ids);
    delete from vocab_sessions   where student_id = any(v_ids);
    delete from v2_class_members where student_id = any(v_ids);
    delete from public.users     where id = any(v_ids);
    delete from auth.users       where id = any(v_ids);   -- cascades any leftovers
  end if;

  if v_teacher is not null then
    delete from v2_classes
     where teacher_id = v_teacher and name = 'Demo Latin · Year 10';
  end if;

  raise notice 'Demo class removed (% fake accounts deleted).', coalesce(array_length(v_ids,1),0);
end $$;
