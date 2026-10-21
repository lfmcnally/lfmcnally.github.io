#!/usr/bin/env python3
"""Convert the five set texts' existing pages and data files into one
JSON file per section, data/section-N.json beside each text's contents
page. These files are the source the reading pages are built from (see
build-settext.py) and the place to edit notes and vocabulary by hand.

Shape of a section file:
  {
    "text": "aeneid-2", "section": 1, "mode": "verse" | "prose",
    "title": "Section 1 · lines 1–13", "subtitle": "Aeneas begins his story",
    "units": [            # a sentence or sense unit: what one click reveals
      { "id": 1,
        "en": "…",        # the unit's English, when it is given as one block
        "rows": [         # a verse line, or one row of prose
          { "n": "1",     # line number, "" for prose
            "en": "…",    # the row's English, when English is line by line
            "words": [ { "w": "cōnticuere͜",   # as printed
                         "v": "conticesco, -ere, -ticui",  # dictionary form
                         "m": "fall silent",   # meaning
                         "p": "3rd person plural, perfect",  # parsing
                         "g": "verb",          # job in the sentence (grammar colours)
                         "o": 3,               # reading order, where given
                         "notes": ["n1-0"] } ] } ] } ],
    "notes": [ { "id": "n1-0", "cat": "order", "label": "Hyperbaton",
                 "quote": "toro alto", "trans": "", "body": "…", "exam": "" } ]
  }
Categories: order, structure, sound, diction, imagery, grammar, note.

Usage:  python3 scripts/convert-settext.py [--rev <git rev>]
"""
import re, os, sys, json, subprocess, html, importlib.util

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('bc', os.path.join(ROOT, 'scripts/build-content.py'))
bc = importlib.util.module_from_spec(spec); spec.loader.exec_module(bc)
find_el, balanced, text, strip_tags = bc.find_el, bc.balanced, bc.text, bc.strip_tags

REV = '94df507'   # the pages as they were before the reader template
for i, a in enumerate(sys.argv):
    if a == '--rev': REV = sys.argv[i + 1]

def read_src(rel):
    try:
        return subprocess.check_output(['git', 'show', '%s:%s' % (REV, rel)], cwd=ROOT, stderr=subprocess.DEVNULL).decode('utf-8')
    except subprocess.CalledProcessError:
        return open(os.path.join(ROOT, rel), encoding='utf-8').read()

def js_object(src, name):
    m = re.search(r'const %s = (\{.*?\n\});' % name, src, re.S)
    if not m: return {}
    out = subprocess.run(['node', '-e', 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.stringify(eval("("+s+")"))))'], input=m.group(1).encode('utf-8'), capture_output=True)
    return json.loads(out.stdout.decode('utf-8')) if out.returncode == 0 else {}

def js_window(path, name):
    out = subprocess.run(['node', '-e', 'global.window={};require(process.argv[1]);console.log(JSON.stringify(window[process.argv[2]]))', path, name], capture_output=True)
    return json.loads(out.stdout.decode('utf-8')) if out.returncode == 0 else None

def un(s):
    return html.unescape(text(s))

# ── style-note categories ──
RULES = [
  ('order', r'hyperbaton|enjamb|word order|position|delayed|framing|parallel|juxtapos|chiasm|encapsulation|insertion|advancement|displacement|interwoven|^ep$|^rb$|emphatic$|emphasis'),
  ('structure', r'anaphora|tricolon|tetracolon|polysyndeton|asyndeton|variatio|polyptoton|antithesis|climax|ring composition|repetition|tautology|pleonasm|paradox|transition|brevity|named subjects|pivotal|adversative|direct speech|narrative pace|coinage'),
  ('sound', r'alliteration|assonance|sibilance|consonance|elision|rhythm|couplet|onomatopoeia|wordplay|paronomasia'),
  ('grammar', r'present|tense|perfect|imperfect|indicative|subjunctive|imperative|infinitive|gerundive|ablative|participial|participle|clause|superlative|comparative|concessive|passive|pronoun|phrase'),
  ('diction', r'epithet|diction|diminutive|euphemism|periphrasis|poetic plural|graecism|vocab|toponym|patronymic|adjective|term|compound|material|characterising|elevated|poetic construction'),
  ('imagery', r'simile|metaphor|personification|pathos|irony|apostrophe|hyperbole|litotes|atmosphere|imagery|image|sensory|sensuous|ominous|gory|vivid action|closure|metonymy|synecdoche|figurative|furor|hubris|despair|wit|sarcasm|poetic justice|retribution|revelation|favour|dramatic|detail'),
]
BY_CLASS = {'order': 'order', 'repeat': 'structure', 'sound': 'sound', 'diction': 'diction', 'grammar': 'grammar', 'imagery': 'imagery', 'tone': 'imagery', 'note': 'note',
            'badge-structure': 'structure', 'badge-word-choice': 'diction', 'badge-imagery': 'imagery', 'badge-sound': 'sound', 'badge-grammar': 'grammar', 'badge-irony': 'imagery'}
def category(label, cls):
    l = strip_tags(label or '').lower().strip()
    if l == 'note': return 'note'
    for cat, pat in RULES:
        if re.search(pat, l): return cat
    return BY_CLASS.get(cls or '', 'note')

G_FROM_CLASS = {'subject': 'subj', 'object': 'obj', 'verb': 'verb', 'ablative': 'abl', 'genitive': 'gen', 'dative': 'dat', 'adverb': 'adv', 'conjunction': 'conj', 'preposition': 'prep', 'gerundive': 'gdv'}
def g_from_parse(parse):
    p = (parse or '').lower()
    if 'vocative' in p: return 'voc'
    if 'nominative' in p: return 'subj'
    if 'accusative' in p: return 'obj'
    if 'ablative' in p: return 'abl'
    if 'genitive' in p: return 'gen'
    if 'dative' in p: return 'dat'
    if 'gerundive' in p: return 'gdv'
    if re.search(r'indicative|subjunctive|infinitive|participle|imperative|person', p): return 'verb'
    if 'adverb' in p: return 'adv'
    if 'conjunction' in p: return 'conj'
    if 'preposition' in p: return 'prep'
    return ''

import importlib.util as _ilu
_sh = _ilu.spec_from_file_location('split_headwords', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'split-headwords.py'))
split_headwords = _ilu.module_from_spec(_sh); _sh.loader.exec_module(split_headwords)

def split_vocab(v):
    """'regina, -ae (f.) queen' → ('regina, -ae (f.)', 'queen'); see scripts/split-headwords.py"""
    return split_headwords.split_head(v or '')

def head_parts(deck):
    for sep in (' &mdash; ', ' — ', ': '):
        if sep in deck:
            a, b = deck.split(sep, 1)
            return un(a), un(b)
    return un(deck), ''

def ends_sentence(words):
    last = ''.join(w['w'] for w in words[-1:]) if words else ''
    return bool(re.search(r'[.?!;]["\'’”)]*$', last))

# ── the GCSE pages (Aeneid II, Cupid, Baucis): markup plus inline data ──
def convert_gcse(rel, text_id):
    src = read_src(rel)
    body = src[src.find('<body'):]
    hdr = find_el(body, r'<div class="passage-header">')[1]
    deck = find_el(hdr, r'<p class="passage-deck">')[1]
    title, subtitle = head_parts(deck)
    lat_el = find_el(body, r'<div class="latin-col"')
    lat = lat_el[1]
    prose = 'data-flow="prose"' in body[lat_el[0]:lat_el[0] + 200]
    eng_el = find_el(body, r'<div class="english-col"')
    eng = eng_el[1]
    note_data = js_object(body, 'noteData') or js_object(body, 'styleData')
    vocab = js_object(body, 'vocabData')
    # English rows
    eng_rows = []
    for m in re.finditer(r'<div class="line-row"[^>]*>', eng):
        inner, _ = balanced(eng, m.start())
        tiles = re.findall(r'<span class="eng-w[^"]*"(?: data-order="([^"]*)")?>(.*?)</span>', inner, re.S)
        eng_rows.append([(k, un(t)) for k, t in tiles])
    rows = []
    for m in re.finditer(r'<div class="line-row"[^>]*>', lat):
        inner, _ = balanced(lat, m.start())
        n = un(find_el(inner, r'<span class="line-num">')[1]) if '<span class="line-num">' in inner else ''
        words = []
        for wm in re.finditer(r'<span class="wg((?: [^"]*)?)"([^>]*)>', inner):
            winner, _ = balanced(inner, wm.start())
            cls = wm.group(1).split(); attrs = wm.group(2)
            lw = find_el(winner, r'<span class="lat-w[^"]*"')
            w = un(lw[1]) if lw else un(re.sub(r'<span class="wg-num">\d+</span>', '', winner))
            sf = re.search(r'data-sf="([^"]+)"', attrs)
            order = re.search(r'data-order="([^"]+)"', attrs)
            num = re.search(r'<span class="wg-num">(\d+)</span>', winner)
            word = {'w': w}
            g = next((G_FROM_CLASS[c] for c in cls if c in G_FROM_CLASS), '')
            if g: word['g'] = g
            if num: word['o'] = int(num.group(1))
            key = order.group(1) if order else None
            if key and vocab and key in vocab:
                v = vocab[key]
                word['v'] = un(v.get('head', '')); word['m'] = un(v.get('gloss', ''))
                word['p'] = un(' · '.join(x for x in (v.get('pos', ''), v.get('parse', '')) if x))
                if v.get('note'): word['x'] = un(v['note'])
            if sf: word['notes'] = [sf.group(1)]
            if key: word['k'] = key
            words.append(word)
        rows.append({'n': n, 'words': words})
    # English per row: Aeneid II has one tile per row; Cupid and Baucis one per word
    for i, r in enumerate(rows):
        tiles = eng_rows[i] if i < len(eng_rows) else []
        if len(tiles) == 1 and not tiles[0][0]:
            r['en'] = tiles[0][1]
        else:
            by_key = {k: t for k, t in tiles}
            for w in r['words']:
                if w.get('k') in by_key: w['en'] = by_key[w['k']]
            r['en'] = ' '.join(t for k, t in tiles)
        for w in r['words']: w.pop('k', None)
    # units: a row each where the English is given word by word (Cupid, Baucis), sentences for Aeneid II
    units = []
    tiled = any('en' in w for r in rows for w in r['words'])
    if prose or tiled:
        for i, r in enumerate(rows): units.append({'id': i + 1, 'rows': [r]})
    else:
        cur = []
        for r in rows:
            cur.append(r)
            if ends_sentence(r['words']):
                units.append({'id': len(units) + 1, 'rows': cur}); cur = []
        if cur: units.append({'id': len(units) + 1, 'rows': cur})
    notes = []
    for k, v in note_data.items():
        notes.append({'id': k, 'cat': category(v.get('badge', ''), v.get('cat') or v.get('badgeClass')), 'label': un(v.get('badge', '')),
                      'quote': un(v.get('quote', '')), 'trans': un(v.get('trans', '')), 'body': v.get('body', '').strip(), 'exam': v.get('exam', '').strip(),
                      'line': v.get('line', '')})
    return {'text': text_id, 'mode': 'prose' if prose else 'verse', 'title': title, 'subtitle': subtitle, 'units': units, 'notes': notes}

# ── the A-level readers: data files ──
def convert_parallel(rel, text_id, data_name):
    src = read_src(rel)
    body = src[src.find('<body'):]
    hdr = find_el(body, r'<div class="passage-header">')[1]
    deck = find_el(hdr, r'<p class="passage-deck">')[1]
    title, subtitle = head_parts(deck)
    data_file = re.search(r'<script src="(\./data/section\d+\.js)"', body).group(1)
    d = js_window(os.path.join(ROOT, os.path.dirname(rel), data_file), data_name)
    prose = text_id == 'nepos-hannibal'
    units = []
    for ci, ch in enumerate(d['chunks']):
        words = {w['id']: w for w in ch.get('words', [])}
        rows = []
        for line in ch['lines']:
            ws = []
            toks = line['t']
            i = 0
            while i < len(toks):
                t = toks[i]
                if isinstance(t, int):
                    w = words.get(t, {'w': str(t)})
                    v, m = split_vocab(w.get('vocab', ''))
                    trail = ''
                    if i + 1 < len(toks) and isinstance(toks[i + 1], str) and not toks[i + 1].strip() == '':
                        trail = toks[i + 1].strip() if toks[i + 1].strip() != '' and not toks[i + 1].startswith(' ') else ''
                    word = {'w': w['w'] + (trail if trail and not trail.startswith(' ') else ''), 'v': v, 'm': m, 'p': w.get('parse', ''), 'id': t}
                    g = g_from_parse(w.get('parse', ''))
                    if g: word['g'] = g
                    ws.append(word)
                    if trail: i += 1
                i += 1
            rows.append({'n': str(line.get('n', '') or ''), 'words': ws})
        en_marked = ch.get('marked', '')
        en = re.sub(r'\{([^|}]*)\|[^}]*\}', r'\1', re.sub(r'\[([^|\]]*)\|\d+\]', r'\1', en_marked))
        units.append({'id': ci + 1, 'ref': ch.get('ref', ''), 'en': en, 'en_marked': en_marked, 'rows': rows})
    return {'text': text_id, 'mode': 'prose' if prose else 'verse', 'title': title, 'subtitle': subtitle, 'units': units, 'notes': []}

TEXTS = [
    ('gcse/aeneid-2', 'aeneid-2', 'gcse'), ('gcse/cupid-and-psyche', 'cupid-and-psyche', 'gcse'), ('gcse/baucis-et-philemon', 'baucis-et-philemon', 'gcse'),
    ('alevel/aeneid-4', 'aeneid-4', 'AENEID4_SECTION'), ('alevel/nepos-hannibal', 'nepos-hannibal', 'PR_SECTION'),
]

def main():
    total = 0
    for folder, text_id, kind in TEXTS:
        base = 'version2/subjects/latin/literature/' + folder
        outdir = os.path.join(ROOT, base, 'data')
        os.makedirs(outdir, exist_ok=True)
        n = 1
        while os.path.exists(os.path.join(ROOT, base, 'section-%d.html' % n)) or subprocess.run(['git', 'cat-file', '-e', '%s:%s/section-%d.html' % (REV, base, n)], cwd=ROOT, capture_output=True).returncode == 0:
            rel = '%s/section-%d.html' % (base, n)
            d = convert_gcse(rel, text_id) if kind == 'gcse' else convert_parallel(rel, text_id, kind)
            d['section'] = n
            with open(os.path.join(outdir, 'section-%d.json' % n), 'w', encoding='utf-8') as f:
                json.dump(d, f, ensure_ascii=False, indent=1)
            total += 1; n += 1
        print('%-20s %2d sections' % (text_id, n - 1))
    print('%d section files' % total)

if __name__ == '__main__':
    main()
