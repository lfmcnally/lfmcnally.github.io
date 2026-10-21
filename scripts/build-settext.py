#!/usr/bin/env python3
"""Put every set-text reading page into the site's set-text template:
the sections tree on the left, a page head, the reader in a panel with
its toolbar, the section's notes and vocabulary in panels below it, and
previous/next at the foot. The reader markup and scripts inside are the
same as before, so the readers behave as they did.

Reads each page as it was before conversion from git (REV), so it is
safe to re-run. Needs node for the note and vocabulary data.

Usage:  python3 scripts/build-settext.py [--rev <git rev>]
"""
import re, os, sys, json, subprocess, importlib.util, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('bc', os.path.join(ROOT, 'scripts/build-content.py'))
bc = importlib.util.module_from_spec(spec); spec.loader.exec_module(bc)
page, crumbs, chip, plain, text, strip_tags, find_el, balanced, write = bc.page, bc.crumbs, bc.chip, bc.plain, bc.text, bc.strip_tags, bc.find_el, bc.balanced, bc.write
SUBJECTS, LEVEL_ANCHOR, lvl_label = bc.SUBJECTS, bc.LEVEL_ANCHOR, bc.lvl_label

REV = '94df507'
for i, a in enumerate(sys.argv):
    if a == '--rev': REV = sys.argv[i + 1]

def read_src(rel):
    try:
        return subprocess.check_output(['git', 'show', '%s:%s' % (REV, rel)], cwd=ROOT, stderr=subprocess.DEVNULL).decode('utf-8')
    except subprocess.CalledProcessError:
        return open(os.path.join(ROOT, rel), encoding='utf-8').read()

def js_object(src, name):
    """The object literal assigned to `const <name> =` in an inline script, as JSON."""
    m = re.search(r'const %s = (\{.*?\n\});' % name, src, re.S)
    if not m: return None
    out = subprocess.run(['node', '-e', 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.stringify(eval("("+s+")"))))'],
                         input=m.group(1).encode('utf-8'), capture_output=True)
    return json.loads(out.stdout.decode('utf-8')) if out.returncode == 0 else None

def js_window(path, name):
    out = subprocess.run(['node', '-e', 'global.window={};require(process.argv[1]);console.log(JSON.stringify(window[process.argv[2]]))', path, name], capture_output=True)
    return json.loads(out.stdout.decode('utf-8')) if out.returncode == 0 else None

def section_n(href):
    m = re.search(r'section-(\d+)\.html', href)
    return int(m.group(1)) if m else 0

def short_title(title):
    """A compact label for the sections tree: the lines and the gist."""
    parts = [p.strip() for p in re.split(r'\s(?:&mdash;|—|–|-)\s|: ', title) if p.strip()]
    if len(parts) >= 3 and re.match(r'^Section \d+$', parts[0]): parts = parts[1:]
    return ' · '.join(parts)

def head_parts(deck):
    """h1 and sub from the old deck line: 'Section 1 · lines 1–13 — Aeneas begins his story'."""
    for sep in (' &mdash; ', ' — ', ': '):
        if sep in deck:
            a, b = deck.split(sep, 1)
            return text(a), text(b)
    return text(deck), ''

def docnav(t, current):
    sub = SUBJECTS[t['subject']]
    out = ['<nav class="docnav" aria-label="Sections">']
    out.append('<a class="course" href="%s">%s</a>' % (t['href'], t['title']))
    out.append('<div class="lvl">%s Latin · %s</div>' % (lvl_label(t['level']), t['code']))
    out.append('<button class="btn line sm docnav-toggle" type="button" data-docnav-toggle aria-expanded="false">Sections</button>')
    out.append('<div class="tree">')
    for g in t['groups']:
        head = ' · '.join(x for x in (g.get('lines', ''), g.get('label', '')) if x) or 'Sections'
        out.append('<div class="grp"><b>%s</b><span>%d</span></div>' % (head, len(g['sections'])))
        for s in g['sections']:
            on = ' class="on" aria-current="page"' if s['href'] == current else ''
            out.append('<a href="%s"%s><span class="n">%d</span><span style="flex:1">%s</span></a>' % (s['href'], on, section_n(s['href']), short_title(s['title'])))
    out.append('</div>')
    out.append('<div class="foot"><a href="%s">Contents</a><a href="/version2/tools/vocab/latinvocabtester.html">Vocabulary tester</a><a href="%s">%s Latin</a></div>' % (t['href'], sub['href'] + LEVEL_ANCHOR.get(t['level'], ''), lvl_label(t['level'])))
    out.append('</nav>')
    return '\n'.join(out)

def notes_panel(notes, title='Style notes'):
    """notes: list of (line, quote, badge, badge_class, body)."""
    if not notes: return ''
    counts = {}
    for n in notes: counts[(n[2], n[3])] = counts.get((n[2], n[3]), 0) + 1
    chips = ''.join('<span class="chip %s">%s · %d</span>' % (cls, b, c) for (b, cls), c in sorted(counts.items(), key=lambda x: -x[1])[:8])
    rows = ''.join('<div class="note"><em>%s</em><div><b>%s</b><span class="chip %s">%s</span>%s</div></div>' % (
        n[0] or '', n[1], n[3], n[2], ('<div class="x">%s</div>' % n[4]) if n[4] else '') for n in notes)
    return '<div class="panel"><div class="ph"><span class="t">%s <small>this section · %d</small></span><span class="n" style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end">%s</span></div><div class="pb notes-grid">%s</div></div>' % (title, len(notes), chips, rows)

def vocab_panel(items):
    """items: list of (head, pos, gloss)."""
    if not items: return ''
    rows = ''.join('<div><b>%s</b>%s %s</div>' % (h, (' <i>%s</i>' % p) if p else '', g) for h, p, g in items)
    return '<div class="panel"><div class="ph"><span class="t">Vocabulary <small>in this section · %d words</small></span><span class="n"><a href="/version2/tools/vocab/latinvocabtester.html" style="color:var(--brand);font-weight:600">Vocabulary tester</a></span></div><div class="pb vocab-list">%s</div></div>' % (len(items), rows)

def split_vocab(v):
    m = re.match(r'^(.*?\))\s*(.*)$', v)
    return (m.group(1), '', m.group(2)) if m else (v, '', '')

def build_section(t, s, prev, nxt):
    rel = s['href'].lstrip('/')
    src = read_src(rel)
    head = src[src.find('<head'):src.find('</head>')]
    body = src[src.find('<body'):]
    body_attr = re.search(r'<body([^>]*)>', body).group(1)
    body = re.sub(r'<!--.*?-->', '', body, flags=re.S)
    title_tag = text(re.search(r'<title>(.*?)</title>', head, re.S).group(1))
    desc = re.search(r'<meta name="description" content="([^"]*)"', head)
    desc = desc.group(1) if desc else plain(s['title'])
    styles = re.findall(r'<style>.*?</style>', head, re.S)
    links = [l for l in re.findall(r'<link rel="stylesheet" href="([^"]+)">', head) if 'shell.css' not in l and 'reader.css' not in l and 'fonts.googleapis' not in l]
    head_scripts = [sc for sc in re.findall(r'<script src="([^"]+)"[^>]*></script>', head)]

    hdr = find_el(body, r'<div class="passage-header">')[1]
    eyebrow = text(find_el(hdr, r'<div class="passage-eyebrow">')[1])
    eyebrow = re.sub(r'\s*(·|&middot;)\s*Set text$', '', eyebrow)
    deck = text(find_el(hdr, r'<p class="passage-deck">')[1])
    h1, sub = head_parts(deck)
    subline = ' · '.join(x for x in (sub, t['title'], eyebrow) if x)

    controls = find_el(body, r'<div class="controls-bar">')[1]
    inner = find_el(controls, r'<div class="controls-bar-inner">')
    controls_inner = inner[1] if inner else controls
    passage = find_el(body, r'<div class="passage-body">')
    passage_html = '<div class="passage-body">' + passage[1] + '</div>'
    extras = []
    pos = 0
    while True:
        hit = find_el(body[pos:], r'<div class="content-section">')
        if not hit: break
        inner_html = hit[1]
        label = text(find_el(inner_html, r'<div class="section-label">')[1]).replace(' &mdash; ', ' · ').replace(' — ', ' · ')
        box = find_el(inner_html, r'<div class="content-box">')
        extras.append('<div class="panel"><div class="ph"><span class="t">%s</span></div><div class="pb">%s</div></div>' % (label, box[1] if box else inner_html))
        pos += hit[2]
    popover = find_el(body, r'<div class="style-popover"')
    popover_html = body[popover[0]:popover[2]] if popover else ''
    tip = re.search(r'<div class="tip" id="tip"[^>]*></div>', body)
    tip_html = tip.group(0) if tip else ''
    inline_scripts = re.findall(r'<script>.*?</script>', body, re.S)
    tail_scripts = [sc for sc in re.findall(r'<script src="([^"]+)"[^>]*></script>', body) if 'shell.js' not in sc and 'starfield' not in sc]

    # notes and vocabulary for the panels under the text
    notes, vocab = [], []
    if t['reader'] == 'settext':
        nd = js_object(body, 'noteData')
        if nd:
            for k, v in nd.items():
                notes.append((v.get('line', ''), v.get('quote', ''), v.get('badge', ''), 'cat-' + v.get('cat', 'note'), v.get('body', '')))
            notes.sort(key=lambda n: (int(n[0]) if str(n[0]).isdigit() else 0))
        sd = js_object(body, 'styleData')
        if sd:
            for k, v in sd.items():
                notes.append(('', v.get('quote', ''), v.get('badge', ''), v.get('badgeClass', 'badge-structure'), v.get('body', '')))
        vd = js_object(body, 'vocabData')
        if vd:
            seen = set()
            for k in sorted(vd.keys(), key=lambda x: [(0, int(p)) if p.isdigit() else (1, p) for p in re.split(r'[-.]', x)]):
                v = vd[k]
                if v.get('head') in seen: continue
                seen.add(v.get('head'))
                vocab.append((v.get('head', ''), v.get('pos', ''), v.get('gloss', '')))
    else:
        data_file = next((sc for sc in tail_scripts if re.search(r'/data/section\d+\.js$', sc)), None)
        if data_file:
            name = 'AENEID4_SECTION' if 'aeneid-4' in rel else 'PR_SECTION'
            d = js_window(os.path.join(ROOT, os.path.dirname(rel), data_file), name)
            if d:
                seen = set()
                for ch in d.get('chunks', []):
                    for w in ch.get('words', []):
                        v = w.get('vocab', '')
                        if not v or v in seen: continue
                        seen.add(v); vocab.append(split_vocab(v))

    sub_ = SUBJECTS[t['subject']]
    acts = []
    if prev: acts.append('<a class="btn line" href="%s">&larr; Previous</a>' % prev['href'])
    acts.append('<a class="btn line" href="%s">Contents</a>' % t['href'])
    if nxt: acts.append('<a class="btn navy" href="%s">Next section &rarr;</a>' % nxt['href'])
    def card(x, cls, lab):
        if not x: return '<span></span>'
        return '<a class="%s" href="%s"><small>%s</small><b>%s</b></a>' % (cls, x['href'], lab, short_title(x['title']))
    pager = '<div class="pager">%s%s</div>' % (card(prev, 'prev', '&larr; Previous'), card(nxt, 'next', 'Next &rarr;'))

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
      <div class="panel reader-panel">
        <div class="controls-bar"><div class="controls-bar-inner">%s</div></div>
        %s
      </div>
%s
%s
%s
      %s
    </div>
  </div>
</main>
</div>
%s
%s''' % (docnav(t, s['href']), crumbs([(sub_['label'], sub_['href']), (lvl_label(t['level']) + ' Latin', sub_['href'] + LEVEL_ANCHOR.get(t['level'], '')), (t['title'], t['href'])]),
         h1, subline, ''.join(acts), controls_inner, passage_html, notes_panel(notes), '\n'.join(extras), vocab_panel(vocab), pager, popover_html, tip_html)

    head_extra = ''.join('<link rel="stylesheet" href="%s">\n' % l for l in links) + ''.join(styles) + '\n<link rel="stylesheet" href="/version2/assets/css/reader.css">\n' + ''.join('<script src="%s"></script>\n' % sc for sc in head_scripts)
    scripts = '\n'.join(inline_scripts) + '\n' + ''.join('<script src="%s"></script>\n' % sc for sc in tail_scripts) + '<script src="/version2/assets/js/lesson-page.js" defer></script>\n'
    return page(title_tag, plain(desc), s['href'], sub_['active'], main, head_extra, scripts, body_attr + ' data-course="%s"' % t['href'])

def main():
    n = 0
    for t in bc.DATA['settexts']:
        flat = [s for g in t['groups'] for s in g['sections']]
        for i, s in enumerate(flat):
            prev = flat[i - 1] if i > 0 else None
            nxt = flat[i + 1] if i < len(flat) - 1 else None
            write(s['href'].lstrip('/'), build_section(t, s, prev, nxt))
            n += 1
    print('set-text sections: %d pages' % n)

if __name__ == '__main__':
    main()
