#!/usr/bin/env python3
"""Build the English non-fiction anthology pages from their JSON.

    python3 scripts/build-english.py

Reads   version2/subjects/english/data/<slug>.json   (one per text)
Writes  version2/subjects/english/index.html          (the contents page)
        version2/subjects/english/<slug>/index.html    (one reading page per text)

Edit the JSON, not the HTML. See version2/subjects/english/README.md.
"""
import glob
import html
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = '/version2/subjects/english/'
DIR = os.path.join(ROOT, 'version2', 'subjects', 'english')
SITE = 'https://classicalia.co.uk'

COURSE = 'English Language'
LEVEL = 'GCSE · Non-fiction anthology'

CATS = {
    'pavls': [
        ('purpose', 'Purpose', 'why the writer wrote it'),
        ('audience', 'Audience', 'who it is written for'),
        ('voice', 'Voice', 'the writer’s tone and attitude'),
        ('language', 'Language', 'word choice, imagery and devices'),
        ('structure', 'Structure', 'how the text is ordered and paced'),
    ],
    'alagiah': [
        ('style', 'Language and style', 'techniques and their effects'),
        ('context', 'Context', 'background you need to know'),
        ('voice', 'Narrative voice', 'how Alagiah presents himself'),
        ('reader', 'Reader response', 'questions to think about'),
    ],
}


def e(s):
    return html.escape(s or '', quote=True)


def head(title, desc, canonical, extra_css=''):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{SITE}{canonical}">
<link rel="icon" type="image/png" href="/images/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/version2/assets/css/shell.css">
<link rel="stylesheet" href="/version2/assets/css/ui.css">
<script src="/version2/assets/js/shell.js" defer></script>
{extra_css}<script src="/shared/site-pulse.js" defer></script>
</head>
'''


def load():
    texts = []
    for f in glob.glob(os.path.join(DIR, 'data', '*.json')):
        with open(f, encoding='utf-8') as fh:
            texts.append(json.load(fh))
    texts.sort(key=lambda t: t['order'])
    return texts


def url(t):
    return BASE + t['slug'] + '/'


def cats_for(t):
    return CATS[t.get('categories', 'pavls')]


def counts(t):
    c = {}
    for n in t['notes'].values():
        c[n['cat']] = c.get(n['cat'], 0) + 1
    return c


def prepare_html(t, para_html):
    """Turn the stored markup into the live reader markup: highlights become focusable,
    empty highlights (questions with no words attached) become a small button."""
    out = re.sub(r'<span class="hl" data-n="([^"]+)" data-cat="([a-z]+)"></span>',
                 r'<button class="hl-q c-\2" type="button" data-n="\1" data-cat="\2" aria-label="Question to think about">?</button>', para_html)
    out = re.sub(r'<span class="hl" data-n="([^"]+)" data-cat="([a-z]+)">',
                 r'<span class="hl c-\2" data-n="\1" data-cat="\2" tabindex="0" role="button">', out)
    out = re.sub(r'<span class="vw" data-v="([^"]+)">', r'<span class="vw" data-v="\1" tabindex="0" role="button">', out)
    return out


def docnav(texts, here=None):
    rows = []
    for t in texts:
        on = ' class="on" aria-current="page"' if here is t else ''
        rows.append(f'<a href="{url(t)}"{on}><span class="n">{t["order"]}</span><span style="flex:1">{e(t["title"])}'
                    f'<small style="display:block;color:var(--muted);font-weight:500">{e(t["author"])}</small></span></a>')
    return (f'<nav class="docnav" aria-label="Texts">\n<a class="course" href="{BASE}">{COURSE}</a>\n'
            f'<div class="lvl">{LEVEL}</div>\n'
            '<button class="btn line sm docnav-toggle" type="button" data-docnav-toggle aria-expanded="false">Texts</button>\n'
            f'<div class="tree">\n<div class="grp"><b>Non-fiction texts</b><span>{len(texts)}</span></div>\n' + '\n'.join(rows) +
            f'\n</div>\n<div class="foot"><a href="{BASE}">All texts</a><a href="{BASE}#pavls">How PAVLS works</a></div></nav>')


def chip(cat, label, extra=''):
    return f'<span class="chip c-{cat}">{e(label)}{extra}</span>'


def text_page(t, texts):
    i = texts.index(t)
    prev_t = texts[i - 1] if i > 0 else None
    next_t = texts[i + 1] if i + 1 < len(texts) else None
    cats = cats_for(t)
    labels = {k: l for k, l, _ in cats}
    cnt = counts(t)
    total = len(t['notes'])
    sub = ' · '.join(x for x in [t['author'], t.get('form'), t.get('source')] if x)
    desc = f'{t["title"]} by {t["author"]}: the full text annotated for GCSE English Language, with notes on ' + \
           ', '.join(l.lower() for _, l, _ in cats) + '.'

    out = [head(f'{t["title"]} · {t["author"]} — GCSE English — Classicalia', desc, url(t),
                '<link rel="stylesheet" href="/version2/assets/css/english-reader.css">\n')]
    out.append(f'<body data-course="{BASE}">\n<a class="skip" href="#main">Skip to content</a>\n'
               '<div data-shell="header" data-active="english"></div>\n<div class="layout">\n')
    out.append(docnav(texts, t))
    acts = f'<a class="btn line" href="{BASE}">All texts</a>'
    if next_t:
        acts += f'<a class="btn navy" href="{url(next_t)}">Next text &rarr;</a>'
    out.append(f'''
<main class="maincol" id="main">
  <div class="inner phead">
    <div class="crumb"><a href="{BASE}">English</a><span>›</span><a href="{BASE}">Non-fiction anthology</a></div>
    <div class="ptitle">
      <div><h1>{e(t["title"])}</h1><div class="sub">{e(sub)}</div></div>
      <div class="acts">{acts}</div>
    </div>
  </div>
  <div class="inner page">
    <div class="stack">
''')
    if t.get('context') or t.get('extras'):
        body = f'<p>{e(t["context"])}</p>' if t.get('context') else ''
        if t.get('extras'):
            body += '<p>' + ' '.join(f'<a class="btn line sm" href="{e(x["href"])}">{e(x["label"])}</a>' for x in t['extras']) + '</p>'
        out.append(f'<div class="panel er-context"><div class="ph"><span class="t">Before you read</span></div><div class="pb">{body}</div></div>\n')

    keys = ''.join(f'<button class="chip c-{k}" type="button" data-cat="{k}" title="{e(h)}">{e(l)} <small>{cnt.get(k, 0)}</small></button>'
                   for k, l, h in cats if cnt.get(k))
    paras = []
    if t.get('standfirst'):
        paras.append(f'<p class="er-stand">{e(t["standfirst"])}</p>')
    for p in t['paragraphs']:
        paras.append(f'<div class="er-p"><em>{e(p["n"])}</em><p>{prepare_html(t, p["html"])}</p></div>')
    out.append(f'''<div class="panel er" id="er">
  <div class="er-bar">
    <span class="k">Show</span><button class="chip on" type="button" data-all>All <small>{total}</small></button>{keys}
    <span class="sp"></span>
    <button class="btn" type="button" data-plain aria-pressed="false">Plain text</button>
    <span class="seg" role="group" aria-label="Text size"><button class="btn" type="button" data-size="-1" aria-label="Smaller text">A&minus;</button><button class="btn" type="button" data-size="1" aria-label="Larger text">A+</button></span>
    <button class="btn" type="button" data-present>Classroom</button>
  </div>
  <div class="er-body">
    <div class="er-main"><h2 class="vh">The text</h2>{''.join(paras)}</div>
    <aside class="er-side" aria-live="polite"><div class="er-sidein">
      <div class="er-sideh"><span data-side-title>How to use this page</span><button class="btn" type="button" data-close hidden aria-label="Close">&times;</button></div>
      <div class="er-sidebody" data-side-body></div>
    </div></aside>
  </div>
</div>
''')

    if t.get('overview'):
        tabs = ''.join(f'<button class="chip c-{o["cat"]}{" on" if j == 0 else ""}" type="button" data-ov="{o["cat"]}" role="tab" aria-selected="{"true" if j == 0 else "false"}">{e(labels.get(o["cat"], o["cat"]))}</button>'
                       for j, o in enumerate(t['overview']))
        panes = []
        for j, o in enumerate(t['overview']):
            pts = ''.join(f'<div class="er-pt"><b>{e(p["label"])}</b><span>{e(p["text"])}</span></div>' for p in o['points'])
            hid = '' if j == 0 else ' hidden'
            panes.append(f'<div class="er-ov c-{o["cat"]}" data-pane="{o["cat"]}" role="tabpanel"{hid}><h3>{e(labels.get(o["cat"], o["cat"]))}: {e(o["heading"])}</h3>'
                         f'{"<p>" + e(o["intro"]) + "</p>" if o.get("intro") else ""}{pts}</div>')
        out.append(f'<div class="panel"><div class="ph"><span class="t">The whole text <small>overall analysis</small></span></div>'
                   f'<div class="pb"><div class="er-tabs" role="tablist">{tabs}</div>{"".join(panes)}</div></div>\n')

    if t.get('journey'):
        j = t['journey']
        stages = ''.join(
            f'<li><span class="dot"></span><b>{e(s["title"])}</b><span>{e(s["desc"])}</span>'
            f'<span class="cs">{"".join(chip(c, labels.get(c, c)[0]) for c in s["cats"])}</span></li>' for s in j['stages'])
        out.append(f'<div class="panel"><div class="ph"><span class="t">{e(j["title"])}</span></div><div class="pb"><ol class="er-journey">{stages}</ol></div></div>\n')

    # every annotation, in the order it comes in the text
    order = re.findall(r'data-n="([^"]+)"', ''.join(p['html'] for p in t['paragraphs']))
    seen, rows = set(), []
    for nid in order:
        if nid in seen or nid not in t['notes']:
            continue
        seen.add(nid)
        n = t['notes'][nid]
        lab = labels.get(n['cat'], n['cat']) + (f' · {n["device"]}' if n.get('device') else '')
        quote = f'<q>{e(n["quote"])}</q>' if n.get('quote') else ''
        rows.append(f'<button class="er-li" type="button" data-n="{e(nid)}" data-cat="{n["cat"]}">{chip(n["cat"], lab)}'
                    f'<b>{e(n["gist"])}</b>{quote}</button>')
    out.append(f'<details class="panel er-all"><summary class="ph"><span class="t">Every annotation <small>in order · {len(rows)}</small></span>'
               f'<span class="n">Show</span></summary><div class="pb">{"".join(rows)}</div></details>\n')

    if t.get('vocab'):
        vs = ''.join(f'<div><b>{e(v["word"])}</b> {e(v["meaning"])}</div>' for v in t['vocab'].values())
        out.append(f'<div class="panel"><div class="ph"><span class="t">Vocabulary <small>{len(t["vocab"])} words</small></span></div><div class="pb er-vocab">{vs}</div></div>\n')

    pager = f'<a class="prev" href="{url(prev_t)}"><small>&larr; Previous</small><b>{e(prev_t["title"])}</b></a>' if prev_t else '<span></span>'
    pager += f'<a class="next" href="{url(next_t)}"><small>Next &rarr;</small><b>{e(next_t["title"])}</b></a>' if next_t else '<span></span>'
    out.append(f'      <div class="pager">{pager}</div>\n    </div>\n  </div>\n</main>\n</div>\n<div data-shell="footer"></div>\n')

    data = {'cats': [{'key': k, 'label': l, 'hint': h} for k, l, h in cats], 'notes': t['notes'], 'vocab': t.get('vocab', {}),
            'title': t['title'], 'author': t['author']}
    blob = json.dumps(data, ensure_ascii=False).replace('</', '<\\/')
    out.append(f'<script type="application/json" id="er-data">{blob}</script>\n'
               '<script src="/version2/assets/js/english-reader.js" defer></script>\n'
               '<script src="/version2/assets/js/lesson-page.js" defer></script>\n</body>\n</html>\n')
    return ''.join(out)


def index_page(texts):
    rows = ''.join(
        f'<a class="row" href="{url(t)}"><span class="rt"><span class="code">{t["order"]}</span>{e(t["title"])}</span>'
        f'<span class="rm">{e(t["author"])} &middot; {e(t.get("form", ""))} &middot; {len(t["notes"])} annotations</span>'
        f'<span class="right"><span class="chip on">Live</span></span></a>' for t in texts)
    cards = ''.join(
        f'<a class="er-card" href="{url(t)}"><span class="f">{e(t.get("form", ""))}</span><b>{e(t["title"])}</b>'
        f'<span class="a">{e(t["author"])}</span><span class="d">{e(t["blurb"])}</span></a>' for t in texts)
    pv = ''.join(f'<div class="er-pt">{chip(k, l)}<span>{e(h[0].upper() + h[1:])}.</span></div>' for k, l, h in CATS['pavls'])
    desc = 'The GCSE English Language non-fiction anthology texts, each annotated in full for purpose, audience, voice, language and structure (PAVLS).'
    lesson = next((x for t in texts for x in t.get('extras', [])), None)
    return head('English — Non-fiction anthology — Classicalia', desc, BASE,
                '<link rel="stylesheet" href="/version2/assets/css/english-reader.css">\n') + f'''<body>
<a class="skip" href="#main">Skip to content</a>
<div data-shell="header" data-active="english"></div>
<main id="main">
  <div class="inner phead">
    <div class="ptitle">
      <div><h1>English</h1><div class="sub">The non-fiction anthology texts for GCSE English Language, each one annotated in full. Click any highlighted phrase to see what the writer is doing and why it matters.</div></div>
      <div class="acts"><a class="btn green" href="{url(texts[0])}">Start reading &rarr;</a></div>
    </div>
  </div>
  <div class="inner page">
    <div class="cols">
      <div class="stack">
<div class="lvl-head"><h2>Non-fiction anthology</h2><span class="code">{len(texts)} texts</span><p>Speeches, memoir, travel writing, autobiography and journalism. Every text has the full extract with highlighted phrases, an overall analysis and the harder vocabulary explained.</p></div>
<div class="er-cards">{cards}</div>
<div class="panel"><div class="ph"><span class="t">All texts<small>in anthology order</small></span></div><div class="pb"><div class="rows">{rows}</div></div></div>
      </div>
      <aside class="rail">
<div class="panel" id="pavls"><div class="ph"><span class="t">PAVLS</span><span class="n">how the notes are sorted</span></div><div class="pb er-key">{pv}<p style="margin-top:10px;font-size:13.5px;color:var(--muted)">A Passage to Africa uses its own four lenses: language and style, context, narrative voice and reader response.</p></div></div>
{f'<div class="panel"><div class="ph"><span class="t">For teachers</span></div><div class="pb"><div class="rows"><a class="row" href="{e(lesson["href"])}"><span class="rt">The Danger of a Single Story</span><span class="rm">{e(lesson["label"])}</span></a></div></div></div>' if lesson else ''}
<div class="panel"><div class="pb">
  <div class="kv">Free for every student</div>
  <p>No adverts, no paywalls, no subscriptions. If the site has helped you or your students, a donation keeps it going.</p>
  <a class="btn line sm" href="https://buymeacoffee.com/lfmcnally" target="_blank" rel="noopener">Support Classicalia</a>
</div></div>
      </aside>
    </div>
  </div>
</main>
<div data-shell="footer"></div>
<script src="/version2/assets/js/lesson-page.js" defer></script>
</body>
</html>
'''


def main():
    texts = load()
    with open(os.path.join(DIR, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_page(texts))
    for t in texts:
        d = os.path.join(DIR, t['slug'])
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(text_page(t, texts))
    print('built %d English texts and the contents page' % len(texts))


if __name__ == '__main__':
    main()
