// Classicalia v2 — weak-spots priority
//
// "Test my weak spots" should drill two kinds of item: the ones the student
// isn't confident on, and the ones they haven't looked at in a while. Each
// item gets a weight from both, and the next item is drawn in proportion to
// its weight (so the top of the ranking comes up most, without the same two
// items alternating forever).
//
//   weakness  = 1 - confidence                         (0 … 1)
//   staleness = days unseen / (days unseen + 7)        (0 now, 0.5 at a week,
//                                                       0.8 at four weeks)
//   weight    = weakness + 0.8 × staleness
//
// Answering an item resets its staleness to 0, so within a session the
// long-unseen items get one visit each and then confidence takes over.
//
// Public API:
//   ClassicaliaReview.weight(pKnow, lastSeenIso)
//   ClassicaliaReview.pick(list, w => w.pKnow, w => w.lastSeenAt)
//   ClassicaliaReview.daysSince(lastSeenIso)
//   ClassicaliaReview.REVISIT_DAYS   // a secure item unseen this long is due a check

(function (global) {
  const STALE_HALF_DAYS = 7;
  const STALE_WEIGHT = 0.8;
  const WEAK_FLOOR = 0.03;
  const REVISIT_DAYS = 14;

  function daysSince(iso, now) {
    const t = iso ? Date.parse(iso) : NaN;
    if (!Number.isFinite(t)) return 0;   // never seen: no staleness to add
    return Math.max(0, ((now || Date.now()) - t) / 86400000);
  }

  function staleness(iso, now) {
    const d = daysSince(iso, now);
    return d / (d + STALE_HALF_DAYS);
  }

  function weight(pKnow, iso, now) {
    return Math.max(WEAK_FLOOR, 1 - (pKnow || 0)) + STALE_WEIGHT * staleness(iso, now);
  }

  function pick(list, getP, getLastSeen) {
    if (!list || !list.length) return null;
    const now = Date.now();
    const weights = list.map(x => weight(getP(x), getLastSeen(x), now));
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < list.length; i++) {
      r -= weights[i];
      if (r <= 0) return list[i];
    }
    return list[list.length - 1];
  }

  global.ClassicaliaReview = { weight, staleness, daysSince, pick, REVISIT_DAYS };
})(window);
