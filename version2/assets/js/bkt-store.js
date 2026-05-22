// Classicalia v2 — BKT persistence layer
//
// One module to read and write Bayesian Knowledge Tracing state for the
// vocabulary tester. Works in three modes, transparently:
//
//   - Signed-in user (Supabase available, session valid)
//       reads/writes the `vocab_bkt` table; localStorage is kept as a mirror
//       for instant reload before the network responds
//   - Anonymous user (no session)
//       reads/writes only localStorage, keyed per vocab_list
//   - First sync after sign-in
//       localStorage entries with later last_seen_at than the cloud row are
//       pushed up; cloud rows newer than local pull down
//
// Public API:
//   const store = await ClassicaliaBKT.open({ vocabList: 'latin-gcse' });
//   store.mode                       // 'cloud' | 'local'
//   store.userLabel                  // null if anonymous
//   await store.loadAll()            // → Map<word_latin, { p_know, trials, correct }>
//   await store.update(word, { p_know, trials, correct })   // debounced flush

(function (global) {
  const PRIOR_P_KNOW = 0.3;
  const STORAGE_PREFIX = 'classicalia.bkt.';   // + vocabList
  const FLUSH_DELAY_MS = 600;                  // coalesce rapid answers

  function readLocal(vocabList) {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + vocabList);
      if (!raw) return {};
      return JSON.parse(raw) || {};
    } catch (err) {
      console.warn('[bkt-store] failed to read localStorage', err);
      return {};
    }
  }

  function writeLocal(vocabList, table) {
    try {
      localStorage.setItem(STORAGE_PREFIX + vocabList, JSON.stringify(table));
    } catch (err) {
      console.warn('[bkt-store] failed to write localStorage', err);
    }
  }

  async function fetchSession() {
    if (!global.supabase || !global.supabase.auth) return null;
    try {
      const { data } = await global.supabase.auth.getSession();
      return data && data.session ? data.session : null;
    } catch (err) {
      console.warn('[bkt-store] supabase session error', err);
      return null;
    }
  }

  async function fetchCloudRows(userId, vocabList) {
    const { data, error } = await global.supabase
      .from('vocab_bkt')
      .select('word_latin, p_know, trials, correct, last_seen_at, distinct_correct_days, last_correct_date, next_review_at, review_interval_days')
      .eq('student_id', userId)
      .eq('vocab_list', vocabList);

    if (error) {
      console.warn('[bkt-store] cloud fetch failed; falling back to local only', error);
      return null;
    }
    const map = {};
    for (const row of data) {
      map[row.word_latin] = {
        p_know:                row.p_know,
        trials:                row.trials,
        correct:               row.correct,
        last_seen_at:          row.last_seen_at,
        distinct_correct_days: row.distinct_correct_days || 0,
        last_correct_date:     row.last_correct_date || null,
        next_review_at:        row.next_review_at || null,
        review_interval_days:  row.review_interval_days || null
      };
    }
    return map;
  }

  // Push a batch of upserts. We coalesce per-word so the most recent update
  // for each word is sent once.
  async function pushBatch(userId, vocabList, pending) {
    if (!pending.size) return { ok: true };

    const payload = [];
    for (const [word, state] of pending.entries()) {
      payload.push({
        student_id:            userId,
        vocab_list:            vocabList,
        word_latin:            word,
        p_know:                state.p_know,
        trials:                state.trials,
        correct:               state.correct,
        last_seen_at:          state.last_seen_at || new Date().toISOString(),
        distinct_correct_days: state.distinct_correct_days || 0,
        last_correct_date:     state.last_correct_date || null,
        next_review_at:        state.next_review_at || null,
        review_interval_days:  state.review_interval_days || null
      });
    }

    const { error } = await global.supabase
      .from('vocab_bkt')
      .upsert(payload, { onConflict: 'student_id,vocab_list,word_latin' });

    if (error) {
      console.warn('[bkt-store] upsert failed; keeping in queue', error);
      return { ok: false, error };
    }
    return { ok: true };
  }

  async function open(opts) {
    const vocabList = (opts && opts.vocabList) || 'latin-gcse';
    const session = await fetchSession();
    const userId  = session && session.user ? session.user.id : null;
    const userLabel = session && session.user ? (session.user.email || session.user.id) : null;

    let mode = userId ? 'cloud' : 'local';
    let table = readLocal(vocabList);

    if (mode === 'cloud') {
      const cloud = await fetchCloudRows(userId, vocabList);
      if (cloud == null) {
        // Cloud unreachable — degrade gracefully
        mode = 'local';
      } else {
        // Merge: keep whichever side has the later last_seen_at, default to
        // the cloud value if local has no timestamp. Then push any "local
        // wins" rows back up so the cloud catches up.
        const localOnlyToPush = new Map();
        for (const [word, localState] of Object.entries(table)) {
          const cloudState = cloud[word];
          if (!cloudState) {
            // Anonymous-then-signed-in: push local row to cloud
            localOnlyToPush.set(word, localState);
            cloud[word] = localState;
          } else {
            const localTs = Date.parse(localState.last_seen_at || 0) || 0;
            const cloudTs = Date.parse(cloudState.last_seen_at || 0) || 0;
            if (localTs > cloudTs) {
              localOnlyToPush.set(word, localState);
              cloud[word] = localState;
            }
          }
        }
        table = cloud;
        writeLocal(vocabList, table);
        if (localOnlyToPush.size) {
          // Fire-and-forget initial sync
          pushBatch(userId, vocabList, localOnlyToPush).catch(() => {});
        }
      }
    }

    // Pending writes — coalesced and flushed on a timer
    const pending = new Map();
    let flushTimer = null;
    let flushing = false;

    function scheduleFlush() {
      if (mode !== 'cloud') return;
      if (flushTimer) return;
      flushTimer = setTimeout(doFlush, FLUSH_DELAY_MS);
    }

    async function doFlush() {
      flushTimer = null;
      if (flushing || mode !== 'cloud' || !pending.size) return;
      flushing = true;

      // Snapshot what we're sending, then clear; if it fails we re-add.
      const batch = new Map(pending);
      pending.clear();

      const result = await pushBatch(userId, vocabList, batch);
      if (!result.ok) {
        // Restore unsent rows so we try again on the next update
        for (const [word, state] of batch.entries()) {
          if (!pending.has(word)) pending.set(word, state);
        }
        // Try again in a moment
        setTimeout(() => scheduleFlush(), 4000);
      }
      flushing = false;
    }

    function update(word, state) {
      const next = {
        p_know:                Math.max(0, Math.min(1, state.p_know)),
        trials:                state.trials | 0,
        correct:               state.correct | 0,
        last_seen_at:          new Date().toISOString(),
        distinct_correct_days: state.distinct_correct_days | 0,
        last_correct_date:     state.last_correct_date || null,
        next_review_at:        state.next_review_at || null,
        review_interval_days:  state.review_interval_days || null
      };
      table[word] = next;
      writeLocal(vocabList, table);

      if (mode === 'cloud') {
        pending.set(word, next);
        scheduleFlush();
      }
    }

    async function flush() {
      if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
      await doFlush();
    }

    return {
      mode,
      userLabel,
      vocabList,
      prior: PRIOR_P_KNOW,
      loadAll: async () => {
        // Always return a fresh copy keyed by word_latin
        const out = new Map();
        for (const [word, state] of Object.entries(table)) {
          out.set(word, {
            p_know:                state.p_know,
            trials:                state.trials | 0,
            correct:               state.correct | 0,
            last_seen_at:          state.last_seen_at,
            distinct_correct_days: state.distinct_correct_days | 0,
            last_correct_date:     state.last_correct_date || null,
            next_review_at:        state.next_review_at || null,
            review_interval_days:  state.review_interval_days || null
          });
        }
        return out;
      },
      update,
      flush
    };
  }

  global.ClassicaliaBKT = { open, PRIOR_P_KNOW };
})(window);
