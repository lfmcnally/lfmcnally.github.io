#!/usr/bin/env python3
"""Build every set-text reading page from its data/section-N.json file
(see convert-settext.py for the shape) on the site's set-text template:
the sections tree on the left, the page head, the reader panel, the
style notes and vocabulary below it, and previous/next at the foot.
The behaviour comes from /version2/assets/js/settext-reader.js.

Usage:  python3 scripts/build-settext.py
"""
import re, os, sys, json, html, importlib.util

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('bc', os.path.join(ROOT, 'scripts/build-content.py'))
bc = importlib.util.module_from_spec(spec); spec.loader.exec_module(bc)
page, crumbs, chip, plain, text, strip_tags, write = bc.page, bc.crumbs, bc.chip, bc.plain, bc.text, bc.strip_tags, bc.write
SUBJECTS, LEVEL_ANCHOR, lvl_label = bc.SUBJECTS, bc.LEVEL_ANCHOR, bc.lvl_label
# the language of each subject's texts, and its vocabulary tester
LANG = {'latin': ('Latin', '/version2/tools/vocab/latinvocabtester.html'), 'greek': ('Greek', '/version2/tools/vocab/greekvocabtester.html')}
# Lora has no Greek letters: Greek falls through to Noto Serif
GREEK_FONT = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,600;1,400&subset=greek-ext&display=swap">\n'

CATS = [('order', 'Word order'), ('structure', 'Repetition and structure'), ('sound', 'Sound and metre'), ('diction', 'Word choice'), ('imagery', 'Imagery and tone'), ('grammar', 'Grammar')]
GRAM = [('subj', 'Subject'), ('obj', 'Object'), ('verb', 'Verb'), ('gen', 'Genitive'), ('dat', 'Dative'), ('abl', 'Ablative'), ('prep', 'Preposition'), ('conj', 'Conjunction'), ('adv', 'Adverb'), ('voc', 'Vocative'), ('gdv', 'Gerundive')]

def esc(s): return html.escape(str(s if s is not None else ''), quote=True)

def section_n(href):
    m = re.search(r'section-(\d+)\.html', href); return int(m.group(1)) if m else 0

def short_title(title):
    parts = [p.strip() for p in re.split(r'\s(?:&mdash;|—|–|-)\s|: ', title) if p.strip()]
    if len(parts) >= 3 and re.match(r'^Section \d+$', parts[0]): parts = parts[1:]
    return ' · '.join(parts)

def docnav(t, current):
    sub = SUBJECTS[t['subject']]
    lang, tester = LANG[t['subject']]
    out = ['<nav class="docnav" aria-label="Sections">',
           '<a class="course" href="%s">%s</a>' % (t['href'], t['title']),
           '<div class="lvl">%s %s · %s</div>' % (lvl_label(t['level']), lang, t['code']),
           '<button class="btn line sm docnav-toggle" type="button" data-docnav-toggle aria-expanded="false">Sections</button>', '<div class="tree">']
    for g in t['groups']:
        head = ' · '.join(x for x in (g.get('lines', ''), g.get('label', '')) if x) or 'Sections'
        out.append('<div class="grp"><b>%s</b><span>%d</span></div>' % (head, len(g['sections'])))
        for s in g['sections']:
            on = ' class="on" aria-current="page"' if s['href'] == current else ''
            out.append('<a href="%s"%s><span class="n">%d</span><span style="flex:1">%s</span></a>' % (s['href'], on, section_n(s['href']), short_title(s['title'])))
    out.append('</div>')
    out.append('<div class="foot"><a href="%s">Contents</a><a href="%s">Vocabulary tester</a><a href="%s">%s %s</a></div></nav>' % (t['href'], tester, sub['href'] + LEVEL_ANCHOR.get(t['level'], ''), lvl_label(t['level']), lang))
    return '\n'.join(out)

def word_html(w, note_cat, uid):
    cls = ['w']
    attrs = []
    if w.get('notes'):
        cats = [note_cat.get(n) for n in w['notes'] if note_cat.get(n)]
        real = [c for c in cats if c != 'note']
        cls.append('c-' + (real[0] if real else (cats[0] if cats else 'note')))
        attrs.append('data-note="%s"' % esc(','.join(w['notes'])))
    if w.get('g'): cls.append('g-' + w['g'])
    if w.get('v'):
        attrs.append('data-v="%s"' % esc(w['v']))
        if w.get('m'): attrs.append('data-m="%s"' % esc(w['m']))
        if w.get('p'): attrs.append('data-p="%s"' % esc(w['p']))
        if w.get('x'): attrs.append('data-x="%s"' % esc(w['x']))
    # the word's address is unit.word, so that the English of a neighbouring unit can link to it
    if w.get('id') is not None: attrs.append('data-id="%s.%s"' % (esc(uid), esc(w['id'])))
    return '<span class="%s" %s>%s</span>' % (' '.join(cls), ' '.join(attrs), esc(w['w']))

def marked_html(s, uid):
    # [text|5] links to word 5 of this unit, [text|3.2] to word 2 of unit 3
    s = esc(s)
    s = re.sub(r'\[([^|\]]*)\|([\d.,]+)\]', lambda m: '<span class="e" data-id="%s">%s</span>' % (','.join(i if '.' in i else '%s.%s' % (uid, i) for i in m.group(2).split(',')), m.group(1)), s)
    s = re.sub(r'\{([^|}]*)\|([^}]*)\}', r'<span class="sup" title="\2">\1</span>', s)
    return s

def unit_html(u, note_cat):
    lat = ''.join('<div class="st-row"><em>%s</em><span class="st-la">%s</span></div>' % (esc(r.get('n', '')), ' '.join(word_html(w, note_cat, u['id']) for w in r['words'])) for r in u['rows'])
    if u.get('en_marked'):
        eng = '<div class="st-en-block">%s</div>' % marked_html(u['en_marked'], u['id'])
    elif any(r.get('en') for r in u['rows']):
        eng = ''.join('<div class="st-row"><em>%s</em><span class="st-en">%s</span></div>' % (esc(r.get('n', '')), esc(r.get('en', ''))) for r in u['rows'])
    else:
        eng = '<div class="st-en-block">%s</div>' % esc(u.get('en', ''))
    return '<div class="st-unit" data-unit="%s"><div class="st-lat">%s</div><div class="st-eng">%s</div></div>' % (u['id'], lat, eng)

def build_section(t, d, s, prev, nxt):
    sub = SUBJECTS[t['subject']]
    lang, tester = LANG[t['subject']]
    note_cat = {n['id']: n['cat'] for n in d.get('notes', [])}
    words = [w for u in d['units'] for r in u['rows'] for w in r['words']]
    has_vocab = any(w.get('v') for w in words)
    has_gram = any(w.get('g') for w in words)
    style_notes = [n for n in d.get('notes', []) if n['cat'] != 'note']
    plain_notes = [n for n in d.get('notes', []) if n['cat'] == 'note']
    cats_present = [c for c in CATS if any(n['cat'] == c[0] for n in style_notes)]
    grams_present = [g for g in GRAM if any(w.get('g') == g[0] for w in words)]
    default_en = 'all' if t['level'] == 'A-level' else 'reveal'

    bar = ['<span class="seg"><button class="btn" data-en="reveal">Click to reveal</button><button class="btn" data-en="all">All English</button><button class="btn" data-en="none">No English</button></span>']
    # the clickers: what a click on a word opens in the side column
    clickers = []
    if has_vocab: clickers.append('<button class="btn" data-clicker="vocab">Vocabulary</button>')
    if style_notes: clickers.append('<button class="btn" data-clicker="style">Style notes</button>')
    if clickers: bar.append('<span class="sep"></span><span class="seg">%s</span>' % ''.join(clickers))
    if has_gram: bar.append('<button class="btn" data-gram>Grammar colours</button>')
    bar.append('<span class="sep"></span><button class="btn" data-present>Classroom</button>')
    bar.append('<span class="hint" data-hint>click a sentence for its English</span>')
    keys = ''
    if style_notes:
        keys = '<div class="st-keys"><span class="k">Show</span><button class="chip on" data-all>All</button>%s</div>' % ''.join('<button class="chip c-%s" data-cat="%s">%s</button>' % (c, c, label) for c, label in cats_present)
    gkeys = ''
    if has_gram:
        gkeys = '<div class="st-gkeys" hidden>%s</div>' % ''.join('<span class="chip g-%s">%s</span>' % (g, label) for g, label in grams_present)
    units = ''.join(unit_html(u, note_cat) for u in d['units'])
    reader = '''<div class="panel st" id="st" data-mode="%s" data-lang="%s" data-default-en="%s" data-title="%s" data-clickers="%s">
  <div class="st-bar">%s</div>
  %s%s
  <div class="st-body">
    <div class="st-main">
      <div class="st-cols"><div class="st-colh">%s</div><div class="st-colh">English</div></div>
      <div class="st-units">%s</div>
    </div>
    <aside class="st-side" hidden><div class="st-sidein"><div class="st-sideh"><span data-side-title>Word</span><button class="btn" data-unpin hidden>Unpin</button></div><div class="st-sidebody" data-side-body></div></div></aside>
  </div>
</div>''' % (d['mode'], lang, default_en, esc(t['title'] + ' · ' + d['title']), ' '.join(c for c, ok in (('vocab', has_vocab), ('style', bool(style_notes))) if ok), ''.join(bar), keys, gkeys, lang, units)

    # notes below the text, in the order they appear
    order = {}
    for i, w in enumerate(words):
        for n in w.get('notes', []): order.setdefault(n, i)
    def note_row(n):
        return '<div class="st-note" data-cat="%s"><em>%s</em><div><b>%s</b><span class="chip c-%s">%s</span>%s%s</div></div>' % (
            n['cat'], esc(n.get('line') or ''), esc(n['quote']), n['cat'], esc(n['label']),
            ('<div class="t">%s</div>' % esc(n['trans'])) if n.get('trans') else '', ('<div class="x">%s</div>' % n['body']) if n.get('body') else '')
    panels = []
    if style_notes:
        sn = sorted(style_notes, key=lambda n: order.get(n['id'], 10 ** 6))
        counts = ''.join('<span class="chip c-%s">%s · %d</span>' % (c, label, sum(1 for n in sn if n['cat'] == c)) for c, label in cats_present)
        panels.append('<div class="panel"><div class="ph"><span class="t">Style notes <small>this section · %d</small></span><span class="n" style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end">%s</span></div><div class="pb st-notes">%s</div></div>' % (len(sn), counts, ''.join(note_row(n) for n in sn)))
    if plain_notes:
        pn = sorted(plain_notes, key=lambda n: order.get(n['id'], 10 ** 6))
        panels.append('<div class="panel"><div class="ph"><span class="t">Notes on the text <small>%d</small></span></div><div class="pb st-notes">%s</div></div>' % (len(pn), ''.join(note_row(n) for n in pn)))
    if d.get('questions'):
        panels.append('<div class="panel"><div class="ph"><span class="t">Questions <small>to think about · %d</small></span></div><div class="pb st-qs"><ol>%s</ol></div></div>' % (len(d['questions']), ''.join('<li>%s</li>' % q for q in d['questions'])))
    for c in d.get('context', []):
        panels.append('<div class="panel"><div class="ph"><span class="t">%s <small>background</small></span></div><div class="pb st-context">%s</div></div>' % (c['h'], c['body']))
    if has_vocab:
        seen, items = set(), []
        for w in words:
            if not w.get('v') or w['v'] in seen: continue
            seen.add(w['v']); items.append('<div><b>%s</b> %s</div>' % (esc(w['v']), esc(w.get('m', ''))))
        panels.append('<div class="panel"><div class="ph"><span class="t">Vocabulary <small>in this section · %d words</small></span><span class="n"><a href="%s" style="color:var(--brand);font-weight:600">Vocabulary tester</a></span></div><div class="pb st-vocab">%s</div></div>' % (len(items), tester, ''.join(items)))

    acts = []
    if prev: acts.append('<a class="btn line" href="%s">&larr; Previous</a>' % prev['href'])
    acts.append('<a class="btn line" href="%s">Contents</a>' % t['href'])
    if nxt: acts.append('<a class="btn navy" href="%s">Next section &rarr;</a>' % nxt['href'])
    def card(x, cls, lab):
        if not x: return '<span></span>'
        return '<a class="%s" href="%s"><small>%s</small><b>%s</b></a>' % (cls, x['href'], lab, short_title(x['title']))
    pager = '<div class="pager">%s%s</div>' % (card(prev, 'prev', '&larr; Previous'), card(nxt, 'next', 'Next &rarr;'))
    subline = ' · '.join(x for x in (esc(d.get('subtitle', '')), t['title'], '%s %s' % (lvl_label(t['level']), lang), t['code']) if x)

    main = '''<div class="layout">
%s
<main class="maincol" id="main">
  <div class="inner phead">
    %s
    <div class="ptitle">
      <div><h1>%s</h1><div class="sub">%s</div></div>
      <div class="acts">%s</div>
    </div>
  </div>
  <div class="inner page">
    <div class="stack">
%s
%s
      %s
    </div>
  </div>
</main>
</div>''' % (docnav(t, s['href']), crumbs([(sub['label'], sub['href']), (lvl_label(t['level']) + ' ' + lang, sub['href'] + LEVEL_ANCHOR.get(t['level'], '')), (t['title'], t['href'])]),
             esc(d['title']), subline, ''.join(acts), reader, '\n'.join(panels), pager)
    data_json = json.dumps({'notes': d.get('notes', []), 'mode': d['mode']}, ensure_ascii=False).replace('</', '<\\/')
    scripts = '<script type="application/json" id="st-data">%s</script>\n<script src="/version2/assets/js/settext-reader.js" defer></script>\n<script src="/version2/assets/js/lesson-page.js" defer></script>\n' % data_json
    title = '%s · %s — %s %s — Classicalia' % (plain(d['title']), plain(t['title']), lvl_label(t['level']), lang)
    desc = '%s. %s, %s %s set text, read line by line with the translation, vocabulary and style notes.' % (plain(d.get('subtitle') or d['title']), plain(t['title']), lvl_label(t['level']), lang)
    head = (GREEK_FONT if lang == 'Greek' else '') + '<link rel="stylesheet" href="/version2/assets/css/settext-reader.css">\n'
    return page(title, desc, s['href'], sub['active'], main, head, scripts, ' data-course="%s"%s' % (t['href'], ' class="grc"' if lang == 'Greek' else ''))

def main():
    n = 0
    for t in bc.DATA['settexts']:
        flat = [s for g in t['groups'] for s in g['sections']]
        for i, s in enumerate(flat):
            jpath = os.path.join(ROOT, os.path.dirname(s['href'].lstrip('/')), 'data', 'section-%d.json' % section_n(s['href']))
            if not os.path.exists(jpath):
                print('no data for', s['href']); continue
            d = json.load(open(jpath, encoding='utf-8'))
            write(s['href'].lstrip('/'), build_section(t, d, s, flat[i - 1] if i > 0 else None, flat[i + 1] if i < len(flat) - 1 else None))
            n += 1
    print('set-text sections: %d pages' % n)

if __name__ == '__main__':
    main()
