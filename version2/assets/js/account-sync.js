// Classicalia v2: keeps a tool's saved work in the teacher's account.
//
// The builders (Do Now, exam paper, lesson plan, mini whiteboard quiz,
// cover write check) keep their saved sets and the sheet in progress in
// localStorage. This file copies those same keys to the signed-in user's row
// in `question_banks` (bank_type 'tool:<name>'), so the work opens on any
// computer they sign in on. Signed out, nothing changes: the tool works from
// this browser as before.
//
// Usage, from a tool's own script:
//
//   ClassicaliaSync.connect('doNow', {
//     keys: [STORE_KEY, DRAFT_KEY],
//     lists: [STORE_KEY],            // arrays of { name, ... } merged by name
//     onChange: function (keys) { ... redraw from localStorage ... }
//   });
//
// and in the tool's writeStore(): ClassicaliaSync.changed(key).
//
// Each key carries the time it was last changed. When a key has changed on
// one side only since the last sync, that side wins. When it has changed on
// both (the usual case the first time a browser that already holds work
// signs in), a saved-sets list is merged by name and anything else goes to
// whichever change is newer.
//
// Notes marked with data-sync-status are filled in to say where the work is
// kept. data-sync-noun names what is saved ("sets", "papers") and
// data-sync-draft the thing being worked on ("sheet", "paper").
//
// Requires window.supabase (the instantiated client from supabase-client.js).

(function () {
  var TABLE = 'question_banks';
  var SIGNIN_URL = '/auth/login.html';
  var DEBOUNCE_MS = 1500;
  var REFRESH_MS = 15000;

  var groups = [];
  var keyToGroup = {};
  var user = null;
  var authKnown = false;
  var problem = false;
  var applying = false;
  var lastRefresh = 0;

  function client() {
    var sb = window.supabase;
    return sb && sb.auth && typeof sb.from === 'function' ? sb : null;
  }

  function readRaw(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw == null ? undefined : JSON.parse(raw);
    } catch (e) { return undefined; }
  }

  function writeRaw(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { return false; }
  }

  function metaKey(group) { return 'classicalia.sync.' + group.name; }

  function readMeta(group) {
    var meta = readRaw(metaKey(group));
    if (!meta || typeof meta !== 'object') meta = {};
    if (!meta.at || typeof meta.at !== 'object') meta.at = {};
    if (!meta.base || typeof meta.base !== 'object') meta.base = {};
    return meta;
  }

  function same(a, b) {
    try { return JSON.stringify(a) === JSON.stringify(b); } catch (e) { return false; }
  }

  // A saved-sets list from each side, joined by name. Where both hold a set
  // of the same name, the copy from the newer side is kept.
  function mergeByName(remote, local, localNewer) {
    if (!Array.isArray(remote)) return local;
    if (!Array.isArray(local)) return remote;
    var first = localNewer ? local : remote;
    var second = localNewer ? remote : local;
    var seen = {};
    var out = [];
    first.concat(second).forEach(function (entry) {
      var name = entry && entry.name != null ? String(entry.name) : null;
      if (name !== null) {
        if (seen[name]) return;
        seen[name] = true;
      }
      out.push(entry);
    });
    return out;
  }

  /* ── one tool's sync with the account ── */

  function sync(group) {
    var sb = client();
    if (!sb || !user) return Promise.resolve();
    if (group.running) { group.again = true; return group.running; }

    var uid = user.id;
    var bankType = 'tool:' + group.name;

    group.running = sb.from(TABLE).select('data')
      .eq('user_id', uid).eq('bank_type', bankType).maybeSingle()
      .then(function (res) {
        if (res.error) throw res.error;
        if (!user || user.id !== uid) return;

        var remote = (res.data && res.data.data && res.data.data.keys) || {};
        var meta = readMeta(group);

        // A different account was last signed in here: its work is in its
        // own account, so this one starts from what it has saved.
        if (meta.user && meta.user !== uid) {
          group.keys.forEach(function (key) {
            try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
          });
          meta = { at: {}, base: {} };
        }
        meta.user = uid;

        var now = Date.now();
        var upload = {};
        var needsUpload = false;
        var changed = [];

        group.keys.forEach(function (key) {
          var local = readRaw(key);
          var r = remote[key];
          var lat = meta.at[key] || 0;
          var base = meta.base[key] || 0;
          var rat = r ? (r.at || 0) : 0;
          // Work saved here before syncing existed counts as changed, and as
          // older than anything in the account.
          if (local !== undefined && !lat) lat = 1;

          var localChanged = local !== undefined && lat > base;
          var remoteChanged = !!r && rat > base;

          function takeRemote() {
            if (!same(local, r.value)) {
              writeRaw(key, r.value);
              changed.push(key);
            }
            meta.at[key] = rat;
            meta.base[key] = rat;
            upload[key] = r;
          }

          function takeLocal() {
            if (lat === 1) lat = now;
            meta.at[key] = lat;
            meta.base[key] = lat;
            upload[key] = { at: lat, value: local };
            needsUpload = true;
          }

          if (remoteChanged && localChanged) {
            if (group.lists.indexOf(key) > -1) {
              var merged = mergeByName(r.value, local, lat > rat);
              if (!same(merged, local)) { writeRaw(key, merged); changed.push(key); }
              meta.at[key] = now;
              meta.base[key] = now;
              upload[key] = { at: now, value: merged };
              if (!same(merged, r.value)) needsUpload = true;
            } else if (rat >= lat) {
              takeRemote();
            } else {
              takeLocal();
            }
          } else if (remoteChanged) {
            takeRemote();
          } else if (localChanged) {
            takeLocal();
          } else if (r) {
            upload[key] = r;
          }
        });

        // Anything the account holds for keys this page does not know about
        // is kept as it is.
        Object.keys(remote).forEach(function (key) {
          if (!(key in upload) && group.keys.indexOf(key) === -1) upload[key] = remote[key];
        });

        writeRaw(metaKey(group), meta);

        if (changed.length && group.onChange) {
          applying = true;
          try { group.onChange(changed); }
          catch (e) { console.error('[classicalia] redraw after sync failed', e); }
          applying = false;
        }

        if (!needsUpload) return;
        return sb.from(TABLE).upsert({
          user_id: uid,
          bank_type: bankType,
          data: { v: 1, keys: upload }
        }, { onConflict: 'user_id,bank_type' }).then(function (put) {
          if (put.error) throw put.error;
        });
      })
      .then(function () {
        problem = false;
      }, function (err) {
        console.warn('[classicalia] could not save to the account', err);
        problem = true;
      })
      .then(function () {
        group.running = null;
        renderNotes();
        if (group.again) {
          group.again = false;
          return sync(group);
        }
      });

    return group.running;
  }

  function schedule(group, delay) {
    clearTimeout(group.timer);
    group.timer = setTimeout(function () {
      group.timer = null;
      sync(group);
    }, delay);
  }

  function syncAll() {
    lastRefresh = Date.now();
    groups.forEach(function (group) { clearTimeout(group.timer); group.timer = null; sync(group); });
  }

  /* ── the notes that say where work is kept ── */

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderNotes() {
    if (!client() || !authKnown) return;
    var notes = document.querySelectorAll('[data-sync-status]');
    Array.prototype.forEach.call(notes, function (el) {
      var noun = escapeHtml(el.getAttribute('data-sync-noun') || 'sets');
      var draft = escapeHtml(el.getAttribute('data-sync-draft') || 'sheet');
      var html;
      if (!user) {
        html = 'Saved ' + noun + ' are kept in this browser only. <a href="' + SIGNIN_URL +
          '">Sign in</a> to save them to your account, so you can open them on any computer.';
      } else if (problem) {
        html = 'Your account could not be reached just now, so your latest changes are kept in this ' +
          'browser for the moment. They will be saved to your account once the connection is back.';
      } else {
        html = 'Saved to your account. Your ' + noun + ', and the ' + draft +
          ' you are working on, open on any computer when you sign in.';
      }
      el.innerHTML = html;
      el.classList.toggle('is-synced', !!user && !problem);
    });
  }

  /* ── public ── */

  function connect(name, options) {
    options = options || {};
    var group = {
      name: name,
      keys: (options.keys || []).slice(),
      lists: (options.lists || []).slice(),
      onChange: options.onChange || null,
      timer: null,
      running: null,
      again: false
    };
    groups.push(group);
    group.keys.forEach(function (key) {
      keyToGroup[key] = keyToGroup[key] || [];
      keyToGroup[key].push(group);
    });
    if (user) sync(group);
    renderNotes();
    return group;
  }

  function changed(key) {
    if (applying) return;
    var list = keyToGroup[key];
    if (!list) return;
    var now = Date.now();
    list.forEach(function (group) {
      var meta = readMeta(group);
      meta.at[key] = Math.max(now, (meta.at[key] || 0) + 1);
      writeRaw(metaKey(group), meta);
      if (user) schedule(group, DEBOUNCE_MS);
    });
  }

  function flush() {
    groups.forEach(function (group) {
      if (group.timer) { clearTimeout(group.timer); group.timer = null; sync(group); }
    });
  }

  window.ClassicaliaSync = { connect: connect, changed: changed, flush: flush };

  var sb = client();
  if (!sb) return;

  sb.auth.onAuthStateChange(function (event, session) {
    var next = session && session.user ? session.user : null;
    var wasId = user ? user.id : null;
    user = next;
    authKnown = true;
    // Calling back into supabase from inside this callback can stall it.
    setTimeout(function () {
      if (user && user.id !== wasId) syncAll();
      renderNotes();
    }, 0);
  });

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') { flush(); return; }
    // Back on this tab: pick up anything saved on another computer meanwhile.
    if (user && Date.now() - lastRefresh > REFRESH_MS) syncAll();
  });
  window.addEventListener('pagehide', flush);
  window.addEventListener('online', function () { if (user) syncAll(); });
})();
