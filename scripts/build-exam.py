#!/usr/bin/env python3
"""Build the data behind a set text's exam practice page.

Reads the text's data/section-N.json files (the Latin, the English and the
style notes) and its hand-written data/exam-bank.json (the questions), and
writes data/exam.json for /version2/assets/js/settext-exam.js to assemble
papers from.

Everything is placed by word: the whole text is one run of words, and a
question, a 15-mark passage or a style note is a span of that run. A bank
entry names its Latin the way an exam paper does, by its first and last
words ("si verum … superarit"), and the build finds it, so a question can
start mid-unit or run on into the next section.

The build stops on any entry it cannot place, so a broken bank is never
written out.

It also writes the practice page itself, exam-practice.html, beside the
text's contents page.

Usage:  python3 scripts/build-exam.py [text-dir ...]
        (default: every set text that has a data/exam-bank.json)
"""
import re, os, sys, json, glob, html, importlib.util

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('bc', os.path.join(ROOT, 'scripts/build-content.py'))
bc = importlib.util.module_from_spec(spec); spec.loader.exec_module(bc)

# Lengths in Latin words, for the prose paper; a verse text's paper sets its
# own in "lengths" (OCR's verse translations run to about five lines).
# a 5-mark translation (OCR's prose ones run from 37 to 52)
CHUNK = (32, 52)
# the passage for a 15-mark question
ESSAY = (70, 150)

CLAUSE_END = re.compile(r'[.?!;:][’\')\]]*$')
SENT_END = re.compile(r'[.?!][’\')\]]*$')

def norm(w):
    w = w.lower().replace('æ', 'ae').replace('œ', 'oe')
    w = re.sub(r'[āáà]', 'a', w); w = re.sub(r'[ēéè]', 'e', w); w = re.sub(r'[īíì]', 'i', w)
    w = re.sub(r'[ōóò]', 'o', w); w = re.sub(r'[ūúù]', 'u', w); w = re.sub(r'[ȳ]', 'y', w)
    return re.sub(r'[^a-z0-9]', '', w)

def plain_en(s):
    s = re.sub(r'\[([^|\]]*)\|[^\]]*\]', r'\1', s)
    s = re.sub(r'\{([^|}]*)\|[^}]*\}', r'\1', s)
    return re.sub(r'\s+', ' ', s).strip()

def strip_tags(s):
    return html.unescape(re.sub(r'<[^>]+>', '', s or '')).strip()

def chapter_of(title):
    m = re.match(r'Chapter (\d+)', title)
    return m.group(1) if m else ''

class Fail(Exception): pass

def load_text(d):
    files = sorted(glob.glob(os.path.join(d, 'data/section-*.json')), key=lambda f: int(re.search(r'(\d+)\.json$', f).group(1)))
    words, units, sections, notes, wline, mode = [], [], [], [], [], 'prose'
    for f in files:
        s = json.load(open(f, encoding='utf-8'))
        mode = s.get('mode', mode)
        sec = {'n': s['section'], 'title': s['title'], 'subtitle': s.get('subtitle', ''), 'chapter': chapter_of(s['title']), 'start': len(words)}
        for u in s['units']:
            ui = len(units)
            start = len(words)
            for r in u['rows']:
                for w in r['words']:
                    # a dash written onto the end of a word ("dictu-") is punctuation
                    words.append([re.sub(r'(?<=\w)-$', '', w['w']), ui])
                    # the verse line a word stands in (a line can be split across two sections)
                    wline.append(int(r['n']) if str(r.get('n', '')).isdigit() else 0)
            units.append({'sec': s['section'], 'id': u['id'], 'en': plain_en(u.get('en', '')), 'start': start, 'end': len(words) - 1})
        sec['end'] = len(words) - 1
        for nt in s.get('notes', []):
            notes.append({'sec': s['section'], 'quote': nt.get('quote', ''), 'label': nt.get('label', ''), 'body': strip_tags(nt.get('body', '')), 'trans': nt.get('trans', '')})
        sections.append(sec)
    return words, units, sections, notes, wline, mode

def find_run(normed, frag, lo, hi):
    """First index in [lo, hi] where the words of frag begin, or -1."""
    n = len(frag)
    for i in range(lo, hi - n + 2):
        if normed[i:i + n] == frag: return i
    return -1

def locate(lemma, normed, lo, hi):
    """The span [start, end] of a lemma such as 'si verum … superarit' between word lo and word hi."""
    parts = [p for p in re.split(r'\s*(?:…|\.\.\.)\s*', lemma.strip()) if p.strip()]
    frags = [[norm(w) for w in p.split() if norm(w)] for p in parts]
    if not frags or not all(frags): return None
    a = find_run(normed, frags[0], lo, hi)
    if a < 0: return None
    if len(frags) == 1: return [a, a + len(frags[0]) - 1]
    pos = a + len(frags[0])
    for fr in frags[1:]:
        b = find_run(normed, fr, pos, hi)
        if b < 0: return None
        pos = b + len(fr)
    return [a, pos - 1]

def build(d):
    rel = os.path.relpath(d, ROOT)
    bank = json.load(open(os.path.join(d, 'data/exam-bank.json'), encoding='utf-8'))
    for extra in sorted(glob.glob(os.path.join(d, 'data/exam-bank-*.json'))):   # TEMP: parts being written
        part = json.load(open(extra, encoding='utf-8'))
        bank['questions'] = bank['questions'] + part.get('questions', [])
        bank['essays'] = bank['essays'] + part.get('essays', [])
    words, units, sections, notes, wline, mode = load_text(d)
    normed = [norm(w) for w, _ in words]
    secs = {s['n']: s for s in sections}
    errors = []
    L = bank['paper'].get('lengths', {})
    chunk_min, chunk_max = L.get('chunk', CHUNK)
    essay_min, essay_max = L.get('essay', ESSAY)
    # where the prescribed text jumps (Aeneid 4.128 to 529), no passage may run across
    breaks = [s['start'] for p, s in zip(sections, sections[1:]) if mode == 'verse' and wline[s['start']] > wline[p['end']] + 1]
    def crosses(a, b): return any(a < k <= b for k in breaks)

    def place(item, what):
        sec = secs.get(item.get('sec'))
        if not sec:
            errors.append('%s %s: no section %r' % (what, item.get('id'), item.get('sec'))); return None
        # the lemma starts in the named section and may run on into the next
        nxt = secs.get(item['sec'] + 1)
        hi = nxt['end'] if nxt else sec['end']
        span = locate(item['lemma'], normed, sec['start'], hi)
        if span and span[0] > sec['end']: span = None
        if not span: errors.append('%s %s: cannot find "%s" in section %d' % (what, item.get('id'), item['lemma'], item['sec']))
        return span

    # style notes, placed by their quotation, for the 15-mark mark schemes
    out_notes = []
    for nt in notes:
        sec = secs[nt['sec']]
        span = locate(nt['quote'], normed, sec['start'], sec['end']) if nt['quote'] else None
        # the quotation as it reads in the Latin, without stray speech marks
        quote = re.sub(r'["“”]', '', nt['quote']).strip(" '‘’")
        if span: out_notes.append({'start': span[0], 'end': span[1], 'quote': quote, 'label': nt['label'], 'body': nt['body']})

    ids = set()
    questions = []
    for q in bank.get('questions', []):
        if q['id'] in ids: errors.append('duplicate id %s' % q['id'])
        ids.add(q['id'])
        span = place(q, 'question')
        if not span: continue
        marks, pts = q['marks'], q.get('points', [])
        if not q.get('q'): errors.append('question %s: no question' % q['id'])
        if len(pts) < marks: errors.append('question %s: %d marks but only %d points' % (q['id'], marks, len(pts)))
        if q.get('type') == 'context':
            # as OCR's "(a) fili (line 2): name this person. [1]": a mark or two of knowledge
            if marks > 2: errors.append('question %s: a context question is worth 1 or 2 marks' % q['id'])
        else:
            # everything else is answered from the Latin of its own lines, and each
            # point of the mark scheme quotes the words it comes from
            for pt in pts:
                quotes = re.findall(r'<i>(.*?)</i>', pt)
                if not quotes: errors.append('question %s: point "%s" quotes no Latin' % (q['id'], strip_tags(pt)[:50]))
                for qt in quotes:
                    hit = locate(strip_tags(qt), normed, span[0], span[1])
                    if not hit: errors.append('question %s: "%s" is not in its lines (%s)' % (q['id'], strip_tags(qt), q['lemma']))
        qq = {k: v for k, v in q.items() if k not in ('sec',)}
        qq['start'], qq['end'] = span
        questions.append(qq)

    essays = []
    for e in bank.get('essays', []):
        if e['id'] in ids: errors.append('duplicate id %s' % e['id'])
        ids.add(e['id'])
        span = place(e, 'essay')
        if not span: continue
        n = span[1] - span[0] + 1
        if not essay_min <= n <= essay_max: errors.append('essay %s: %d words (want %d–%d)' % (e['id'], n, essay_min, essay_max))
        if crosses(*span): errors.append('essay %s: runs across a gap in the prescribed text' % e['id'])
        if len(e.get('points', [])) < 4: errors.append('essay %s: needs at least four content points' % e['id'])
        ee = {k: v for k, v in e.items() if k not in ('sec',)}
        ee['start'], ee['end'] = span
        ee['features'] = sum(1 for nt in out_notes if span[0] <= nt['start'] and nt['end'] <= span[1])
        if ee['features'] < 4: errors.append('essay %s: only %d style notes fall inside it' % (e['id'], ee['features']))
        essays.append(ee)

    # 5-mark translations: whole units, starting after the end of a clause and
    # finishing at the end of a sentence (or of a clause, where sentences run long)
    starts = [i for i, u in enumerate(units) if i == 0 or CLAUSE_END.search(words[units[i - 1]['end']][0])]
    chunks = []
    for a in starts:
        for b in range(a, len(units)):
            n = units[b]['end'] - units[a]['start'] + 1
            if n > chunk_max or crosses(units[a]['start'], units[b]['end']): break
            # verse: no more than six lines, as OCR's run to five
            if mode == 'verse' and len(set(wline[units[a]['start']:units[b]['end'] + 1])) > 6: break
            last = words[units[b]['end']][0]
            if n >= chunk_min and CLAUSE_END.search(last):
                chunks.append({'start': units[a]['start'], 'end': units[b]['end'], 'sentence': bool(SENT_END.search(last))})

    if errors:
        raise Fail('%s/data/exam-bank.json:\n  ' % rel + '\n  '.join(errors))

    out = {
        'text': bank['text'], 'paper': bank['paper'], 'mode': mode, 'breaks': breaks,
        'sections': sections,
        'words': [w for w, _ in words],
        'wunit': [u for _, u in words],
        'wline': wline if mode == 'verse' else [],
        'units': units,
        'notes': out_notes,
        'questions': questions,
        'essays': essays,
        'chunks': chunks,
    }
    with open(os.path.join(d, 'data/exam.json'), 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, separators=(',', ':'))
    write_page(bank)
    marks = sum(q['marks'] for q in questions)
    print('%s: %d questions (%d marks), %d 15-mark passages, %d translations, %d of %d style notes placed' % (
        rel, len(questions), marks, len(essays), len(chunks), len(out_notes), len(notes)))

def minutes(marks):   # OCR allows two hours for 75 marks
    return max(10, round(marks * 120 / 75 / 5) * 5)

def write_page(bank):
    P = bank['paper']
    short = P.get('shortMarks', 7) + 5
    KINDS = [('full', 'Full Section A', '%d marks &middot; %d minutes' % (short + 15, minutes(short + 15))),
             ('short', 'Short questions', '%d marks &middot; %d minutes' % (short, minutes(short))),
             ('essay', '15-mark question', '15 marks &middot; 25 minutes'),
             ('trans', 'Translation', '3 &times; 5 marks &middot; 25 minutes')]
    layouts = P.get('layoutLabels', ['Either (mostly two, as OCR sets it)', 'Two passages, as in 2022 and 2024 to 2026', 'One long passage, as in 2023'])
    t = next(x for x in bc.DATA['settexts'] if x['href'] == P['href'])
    sub = bc.SUBJECTS[t['subject']]
    lang = bc.SETTEXT_LANG[t['subject']][0]
    path = P['href'] + 'exam-practice.html'
    kinds = ''.join('<button class="xp-kind" type="button" value="%s" data-exam-kind aria-pressed="false">%s<small>%s</small></button>' % k for k in KINDS)
    body = '''<main id="main" data-exam="%(href)sdata/exam.json">
  <div class="inner phead">
    %(crumbs)s
    <div class="ptitle">
      <div><h1>Exam practice</h1><div class="sub">Practice papers on %(author)s, <em>%(title)s</em>, laid out like %(board)s %(code)s %(name)s, Section A, and modelled on %(basis)s: the same kinds of question, the same marks and the same mark scheme. Every paper is different. Choose the %(parts)s and the length, then print it or answer it on paper and check the mark scheme.</div></div>
      <div class="acts"><a class="btn line" href="%(href)s">Read the text</a></div>
    </div>
  </div>
  <div class="inner page">
    <div class="panel xp-controls"><div class="ph"><span class="t">Make a paper</span></div><div class="pb">
      <div class="xp-row"><div class="xp-range">
        <label class="xp-field"><span>From</span><select data-exam-from></select></label>
        <label class="xp-field"><span>To</span><select data-exam-to></select></label>
      </div></div>
      <div class="xp-field"><span>Paper</span><div class="xp-kinds">%(kinds)s</div></div>
      <div class="xp-row">
        <label class="xp-field" data-exam-layout-wrap><span>Passages</span><select data-exam-layout><option value="any">%(lay0)s</option><option value="two">%(lay1)s</option><option value="one">%(lay2)s</option></select></label>
        <label class="xp-check"><input type="checkbox" data-exam-lines> Answer lines on the paper</label>
      </div>
      <div class="xp-acts">
        <button class="btn green" type="button" data-exam-new>New paper</button>
        <button class="btn line" type="button" data-exam-show-ms>Show mark scheme</button>
        <button class="btn line" type="button" data-exam-print>Print paper</button>
        <button class="btn line" type="button" data-exam-print-ms>Print with mark scheme</button>
        <button class="btn line sm" type="button" data-exam-copy>Copy link</button>
        <span class="xp-code">Paper <b data-exam-code></b></span>
      </div>
    </div></div>
    <div class="xp-stage">
      <div class="xp-out" data-exam-paper></div>
      <div class="xp-out xp-ms-out" data-exam-ms hidden></div>
    </div>
  </div>
</main>''' % dict(href=P['href'], author=P['author'], title=P['title'], board=P['board'], code=P['code'], name=P['name'], kinds=kinds, parts=P.get('parts', 'chapters'),
                    basis=P.get('basis', 'the 2022 to 2026 papers, mark schemes and examiners’ reports'), lay0=layouts[0], lay1=layouts[1], lay2=layouts[2],
                    crumbs=bc.crumbs([(sub['label'], sub['href']), (bc.lvl_label(t['level']) + ' ' + lang, sub['href'] + bc.LEVEL_ANCHOR.get(t['level'], '')), (t['title'], t['href'])]))
    html_ = bc.page('Exam practice: %s — %s %s — Classicalia' % (bc.plain(t['title']), bc.lvl_label(t['level']), lang),
                    'Practice papers on %s, %s, in the layout of %s %s %s: short questions, a 5-mark translation and a 15-mark question, each with a mark scheme.' % (P['author'], bc.plain(P['title']), P['board'], P['code'], P['name']),
                    path, sub['active'], body, '<link rel="stylesheet" href="/version2/assets/css/settext-exam.css">\n',
                    '<script src="/version2/assets/js/settext-exam.js" defer></script>\n')
    bc.write(path.lstrip('/'), html_)

if __name__ == '__main__':
    dirs = [os.path.abspath(a) for a in sys.argv[1:]] or sorted(os.path.dirname(os.path.dirname(p)) for p in glob.glob(os.path.join(ROOT, 'version2/subjects/*/literature/*/*/data/exam-bank.json')))
    bad = False
    for d in dirs:
        try: build(d)
        except Fail as e:
            print(e, file=sys.stderr); bad = True
    sys.exit(1 if bad else 0)
