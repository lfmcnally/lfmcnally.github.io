#!/usr/bin/env python3
"""Generate the content pages from version2/assets/data/courses.json.

  * subject pages (Latin, Greek, Classical Civilisation) and the Tools page
  * one course page per Classical Civilisation component
  * every written lesson, re-framed into the sidebar document layout
    (the course tree on the left, notes in the middle, key facts and exam
    focus on the right); the lesson content itself is kept
  * a redirect to the course page in place of each unwritten lesson stub
  * the contents page of each Latin set text, and a lighter head on the
    set-text reading pages

Run extract-manifest.py first. Re-running is safe: lesson pages that have
already been converted are read from git at the pre-conversion commit.
To change a lesson's content, edit (or add) its source under
scripts/lesson-src/, at the same path as the page (for example
scripts/lesson-src/version2/subjects/classical-civilisation/the-homeric-world/2-2-hunting-elite/revision.html),
in the old revision-page markup, and rebuild with --only lessons.

Usage:  python3 scripts/build-content.py [--rev <git rev>] [--only lessons|courses|subjects|settexts|stubs|tools]
"""
import re, os, sys, json, subprocess, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://classicalia.co.uk'
REV = 'c1ddcdf'
for i, a in enumerate(sys.argv):
    if a == '--rev': REV = sys.argv[i + 1]
ONLY = sys.argv[sys.argv.index('--only') + 1] if '--only' in sys.argv else None

DATA = json.load(open(os.path.join(ROOT, 'version2/assets/data/courses.json'), encoding='utf-8'))
COURSES = {c['id']: c for c in DATA['courses']}

SUBJECTS = {
    'latin': {'label': 'Latin', 'href': '/version2/subjects/latin/', 'active': 'latin'},
    'greek': {'label': 'Classical Greek', 'href': '/version2/subjects/greek/', 'active': 'greek'},
    'civ':   {'label': 'Classical Civilisation', 'href': '/version2/subjects/classical-civilisation/', 'active': 'civ'},
}
LEVEL_ANCHOR = {'GCSE': '#gcse', 'A-level': '#alevel'}

# ───────────────────────── helpers ─────────────────────────
def read_src(rel):
    """A lesson page as it was before conversion: its source in
    scripts/lesson-src/ if it has one (where lessons are edited now),
    else from git at the pre-conversion commit, else from disk."""
    own = os.path.join(ROOT, 'scripts', 'lesson-src', rel)
    if os.path.exists(own):
        with open(own, encoding='utf-8') as f:
            return f.read()
    try:
        return subprocess.check_output(['git', 'show', '%s:%s' % (REV, rel)], cwd=ROOT, stderr=subprocess.DEVNULL).decode('utf-8')
    except subprocess.CalledProcessError:
        with open(os.path.join(ROOT, rel), encoding='utf-8') as f:
            return f.read()

def write(rel, content):
    path = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def text(s):
    return re.sub(r'\s+', ' ', s or '').strip()

def strip_tags(s):
    return text(re.sub(r'<[^>]+>', '', s or ''))

def plain(s):
    """Entity-decoded plain text, for <title> and meta content."""
    return html.unescape(strip_tags(s)).replace('"', '&quot;')

def esc(s):
    return html.escape(str(s), quote=True)

def balanced(src, start):
    """(inner_html, end_index) of the element whose start tag begins at `start`."""
    m = re.match(r'<(\w+)[^>]*>', src[start:])
    tag = m.group(1)
    i = start + m.end()
    depth = 1
    for t in re.finditer(r'<(/?)%s\b[^>]*>' % tag, src[i:]):
        depth += -1 if t.group(1) else 1
        if depth == 0:
            return src[i:i + t.start()], i + t.end()
    return src[i:], len(src)

def find_el(src, pattern):
    """First element whose start tag matches `pattern`: (start, inner, end)."""
    m = re.search(pattern, src)
    if not m: return None
    inner, end = balanced(src, m.start())
    return m.start(), inner, end

def remove_el(src, pattern):
    hit = find_el(src, pattern)
    if not hit: return src, None
    s, inner, e = hit
    return src[:s] + src[e:], inner

def crumbs(items):
    out = []
    for i, (label, href) in enumerate(items):
        if i: out.append('<span>›</span>')
        out.append('<a href="%s">%s</a>' % (href, label) if href else '<a>%s</a>' % label)
    return '<div class="crumb">' + ''.join(out) + '</div>'

def chip(label, cls=''):
    return '<span class="chip%s">%s</span>' % (' ' + cls if cls else '', label)

def page(title, desc, path, active, body, head_extra='', scripts='', body_attr=''):
    return '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>%s</title>
<meta name="description" content="%s">
<link rel="canonical" href="%s%s">
<link rel="icon" type="image/png" href="/images/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/version2/assets/css/shell.css">
<link rel="stylesheet" href="/version2/assets/css/ui.css">
<script src="/version2/assets/js/shell.js" defer></script>
<script src="/shared/site-pulse.js" defer></script>
%s</head>
<body%s>
<a class="skip" href="#main">Skip to content</a>
<div data-shell="header" data-active="%s"></div>
%s
<div data-shell="footer"></div>
%s</body>
</html>
''' % (title, desc, SITE, path, head_extra, body_attr, active, body, scripts)

SUPPORT = '''<div class="panel"><div class="pb">
  <div class="kv">Free for every student</div>
  <p>No adverts, no paywalls, no subscriptions. Hosting and the time to write new material cost something, so if the site has helped you or your students, a donation keeps it going.</p>
  <a class="btn line sm" href="https://buymeacoffee.com/lfmcnally" target="_blank" rel="noopener">Support Classicalia</a>
</div></div>'''

TRACK = '''<div class="panel navy"><div class="pb">
  <div class="kv" style="color:#8fa3cc">Track your progress</div>
  <h3 style="font-size:19px;margin-bottom:6px">Make it your course</h3>
  <p style="font-size:14px;margin-bottom:14px">Sign in to keep your scores, see your weak spots and pick up work your teacher sets.</p>
  <a class="btn green sm" href="/auth/register.html">Get started</a> <a class="btn line sm" href="/auth/login.html" style="margin-left:6px">Sign in</a>
</div></div>'''

def lvl_label(level):
    return {'GCSE': 'GCSE', 'A-level': 'A-level'}.get(level, level)

# ───────────────────────── lessons ─────────────────────────
def flat_items(course):
    """Every lesson or guide in course order, with its topic."""
    out = []
    for t in course['topics']:
        for r in t['items']:
            if 'label' in r: continue
            if r['kind'] in ('lesson', 'guide'):
                out.append((t, r))
    return out

def course_crumbs(course):
    sub = SUBJECTS[course['subject']]
    return [(sub['label'], sub['href']), (lvl_label(course['level']) + ' ' + sub['label'], sub['href'] + LEVEL_ANCHOR.get(course['level'], ''))]

def docnav(course, current_href=None):
    """The course tree for the sidebar of a lesson page."""
    out = ['<nav class="docnav" aria-label="Course">']
    out.append('<a class="course" href="%s">%s</a>' % (course['href'], course['title']))
    out.append('<div class="lvl">%s %s · %s</div>' % (lvl_label(course['level']), SUBJECTS[course['subject']]['label'], course['code']))
    out.append('<button class="btn line sm docnav-toggle" type="button" data-docnav-toggle aria-expanded="false">Course contents</button>')
    out.append('<div class="tree">')
    section = None
    for t in course['topics']:
        if t['section'] and t['section'] != section:
            section = t['section']
            out.append('<div class="sect">%s</div>' % section)
        lessons = [r for r in t['items'] if 'label' not in r and r['kind'] in ('lesson', 'guide')]
        written = [r for r in lessons if r['written']]
        others = [r for r in t['items'] if 'label' not in r and r['kind'] == 'tester' and r['href']]
        if not lessons and not others and not any('label' not in r and r['kind'] == 'pdf' for r in t['items']):
            continue
        count = ''
        if lessons:
            count = '%d of %d' % (len(written), len(lessons)) if len(written) < len(lessons) else '%d' % len(lessons)
        head = ((t['n'] + ' · ') if t['n'] else '') + t['title']
        out.append('<div class="grp"><b>%s</b><span>%s</span></div>' % (head, count))
        for r in written + others:
            on = ' on' if r['href'] == current_href else ''
            aria = ' aria-current="page"' if on else ''
            n = ('<span class="n">%s</span>' % r['n']) if r['n'] else ''
            out.append('<a href="%s" class="%s"%s>%s<span style="flex:1">%s</span></a>' % (r['href'], on.strip(), aria, n, r['title']))
        soon = len(lessons) - len(written)
        if soon:
            out.append('<div class="soon-row"><span class="n"></span><span>%d %s coming soon</span></div>' % (soon, 'lesson' if soon == 1 else 'lessons'))
    out.append('</div>')
    foot = ['<a href="%s">Course page</a>' % course['href']]
    if course.get('quiz'): foot.append('<a href="%s">Take the quiz</a>' % course['quiz'])
    if course.get('tester'): foot.append('<a href="%s">Topic Tester</a>' % course['tester'])
    out.append('<div class="foot">%s</div>' % ''.join(foot))
    out.append('</nav>')
    return '\n'.join(out)

def parse_lesson(src):
    """Pull the pieces of an old revision page out of its markup."""
    head = src[src.find('<head'):src.find('</head>')]
    body = src[src.find('<body'):]
    body = re.sub(r'<!--.*?-->', '', body, flags=re.S)
    d = {}
    d['styles'] = re.findall(r'<style>.*?</style>', head, re.S)
    d['lesson_css'] = '<link rel="stylesheet" href="./lesson.css">' in head
    d['desc'] = text(re.search(r'<meta name="description" content="([^"]*)"', head).group(1)) if re.search(r'<meta name="description" content="([^"]*)"', head) else ''
    d['title'] = text(find_el(body, r'<h1 class="header-title">')[1])
    hit = find_el(body, r'<p class="header-deck">')
    d['deck'] = text(hit[1]) if hit else ''
    d['eyebrow'] = text(find_el(body, r'<div class="header-eyebrow">')[1])
    d['tags'] = [text(t) for t in re.findall(r'<span class="header-tag[^"]*">(.*?)</span>', body)]
    # sidebar: section titles and their groups
    nav_text, nav_group = {}, {}
    side = find_el(body, r'<aside class="rev-sidebar">')
    if side:
        for gm in re.finditer(r'<div class="rev-nav-group">', side[1]):
            ginner, _ = balanced(side[1], gm.start())
            glabel = text(find_el(ginner, r'<span class="rev-nav-group-label">')[1]) if '<span class="rev-nav-group-label">' in ginner else ''
            for am in re.finditer(r'<a ([^>]*)>(.*?)</a>', ginner, re.S):
                attrs, inner = am.group(1), am.group(2)
                pid = re.search(r"show\('([^']+)'\)", attrs) or re.search(r'data-panel="([^"]+)"', attrs)
                if not pid: continue
                inner = re.sub(r'<span class="n">.*?</span>', '', inner)
                nav_text[pid.group(1)] = text(inner)
                nav_group[pid.group(1)] = glabel
    # panels
    panels = []
    for pm in re.finditer(r'<(div|section) class="rev-panel" id="([^"]+)">', body):
        inner, end = balanced(body, pm.start())
        pid = pm.group(2)
        inner, title = remove_el(inner, r'<div class="rev-title">')
        inner, _ = remove_el(inner, r'<div class="rev-rule">')
        inner, label = remove_el(inner, r'<div class="rev-label">')
        panels.append({'id': pid, 'title': text(title), 'label': text(label), 'body': inner.strip(),
                       'nav': nav_text.get(pid, ''), 'group': nav_group.get(pid, '')})
    d['panels'] = panels
    # inline scripts in the body (flashcards, lesson cards)
    d['scripts'] = [s for s in re.findall(r'<script>.*?</script>', body, re.S)]
    d['ext_scripts'] = re.findall(r'<script src="([^"]+)"[^>]*></script>', body)
    return d

def only_explain(body):
    rest = re.sub(r'<div class="explain-block">', '\x00', body)
    # remove each explain-block element
    out, i = body, 0
    while True:
        hit = find_el(out, r'<div class="explain-block">')
        if not hit: break
        s, inner, e = hit
        out = out[:s] + out[e:]
    return not strip_tags(out) and '<div class="explain-block">' in body

def key_facts(body):
    """If the body opens with a 'Key facts' entry of key: value lines, lift it out."""
    hit = find_el(body, r'<div class="entry[^"]*">')
    if not hit: return body, None
    s, inner, e = hit
    term = find_el(inner, r'<span class="term">')
    if not term or strip_tags(term[1]).lower() != 'key facts': return body, None
    facts = find_el(inner, r'<ul class="facts">')
    if not facts: return body, None
    lis = re.findall(r'<li>(.*?)</li>', facts[1], re.S)
    rows = []
    for li in lis:
        m = re.match(r'\s*<span class="k">(.*?):?</span>\s*(.*)$', li, re.S)
        if not m: return body, None
        rows.append('<li><b>%s</b><span>%s</span></li>' % (text(m.group(1)), text(m.group(2))))
    return (body[:s] + body[e:]).strip(), '<ul class="kvl">' + ''.join(rows) + '</ul>'

def clean_scripts(scripts):
    out = []
    for s in scripts:
        # the old panel switcher
        s = re.sub(r"const panels = document\.querySelectorAll\('\.rev-panel'\);.*?show\('[^']+'\);\n", '', s, flags=re.S)
        if 'const cards' in s or 'LESSON_CARDS' in s or 'function flipCard' in s:
            out.append(s)
    return out

def build_lesson(course, topic, row):
    rel = row['href'].lstrip('/')
    src = read_src(rel)
    d = parse_lesson(src)
    sub = SUBJECTS[course['subject']]
    is_guide = row['kind'] == 'guide'

    # sort the panels into the document, the rail and the flashcards
    doc, rail_exam, fc = [], [], None
    for p in d['panels']:
        if p['id'] in ('flashcards', 'cards') or p['title'].lower() == 'flashcards':
            fc = p; continue
        if only_explain(p['body']):
            rail_exam.append(p); continue
        doc.append(p)
    rail_facts = None
    if doc:
        doc[0]['body'], rail_facts = key_facts(doc[0]['body'])

    # headings: the sidebar's wording names the section; the panel title may
    # name the group it sits in (politics, myth) or repeat the page title
    sections, toc, last_group = [], [], None
    for p in doc:
        h2 = p['nav'] or p['title']
        if strip_tags(h2).lower() == strip_tags(d['title']).lower() and p['label']:
            h2 = p['label']
        subline = p['label']
        if strip_tags(subline).lower() in (strip_tags(h2).lower(), strip_tags(p['group']).lower()) or re.match(r'^(Section|Lesson) \d', strip_tags(subline)):
            subline = ''
        subline = subline.replace('class="badge badge--set"', 'class="chip blue"').replace('class="badge badge--ctx"', 'class="chip"')
        grp = p['group'] if p['group'] and p['group'].lower() not in ('this lesson', 'practice', 'navigate', 'exam', 'interpretation', 'the site') else ''
        part = ''
        if grp and grp != last_group and strip_tags(p['title']).lower() == grp.lower():
            part = '<div class="part">%s</div>' % grp
            toc.append('<li class="toc-part">%s</li>' % grp)
        last_group = grp if grp else last_group
        body = p['body'].replace('class="badge badge--set"', 'class="chip blue"').replace('class="badge badge--ctx"', 'class="chip"')
        sections.append('<section id="%s">%s<h2>%s</h2>%s\n%s\n</section>' % (
            p['id'], part, h2, ('<p class="sect-sub">%s</p>' % subline) if subline else '', body))
        toc.append('<li><a href="#%s">%s</a></li>' % (p['id'], strip_tags(h2)))

    # meta chips
    chips = []
    if topic['n'] or row['n']:
        chips.append(chip(('Lesson ' + row['n']) if row['n'] and not is_guide else (row['n'] or ('Topic ' + topic['n']))))
    elif topic['title']:
        chips.append(chip(strip_tags(topic['title'])))
    for t in d['tags']:
        chips.append(chip(t, 'blue' if 'prescribed' in t.lower() else ''))
    if is_guide: chips.append(chip('Reading guide', 'blue'))

    # actions
    acts = ['<button class="btn line" type="button" data-print onclick="window.print()">Print</button>']
    if course.get('quiz'):
        acts.append('<a class="btn green" href="%s">Practise this &rarr;</a>' % course['quiz'])
    elif course.get('tester'):
        acts.append('<a class="btn green" href="%s">Topic Tester &rarr;</a>' % course['tester'])
    elif fc:
        acts.append('<a class="btn green" href="#flashcards">Flashcards &rarr;</a>')

    # previous / next
    flat = [r for (t, r) in flat_items(course) if r['written']]
    idx = next((i for i, r in enumerate(flat) if r['href'] == row['href']), -1)
    prev = flat[idx - 1] if idx > 0 else None
    nxt = flat[idx + 1] if 0 <= idx < len(flat) - 1 else None
    def card(r, cls, lab):
        if not r: return '<span></span>'
        return '<a class="%s" href="%s"><small>%s</small><b>%s</b></a>' % (cls, r['href'], lab, ((r['n'] + ' ') if r['n'] else '') + r['title'])
    pager = '<div class="pager">%s%s</div>' % (card(prev, 'prev', '&larr; Previous'), card(nxt, 'next', 'Next &rarr;'))

    # rail
    rail = []
    if rail_facts:
        rail.append('<div class="panel"><div class="ph"><span class="t">Key facts</span></div><div class="pb">%s</div></div>' % rail_facts)
    if len(toc) > 1:
        rail.append('<div class="panel toc-panel"><div class="ph"><span class="t">On this page</span></div><div class="pb"><ul class="toc" data-toc>%s</ul></div></div>' % ''.join(toc))
    for p in rail_exam:
        rail.append('<div class="exam" id="%s"><div class="k">%s</div>%s</div>' % (p['id'], p['nav'] or p['title'] or 'Exam focus', p['body']))

    # flashcards panel: keep the widget and its script as they were
    fc_html = ''
    if fc:
        fc_body = fc['body']
        fc_html = '<div class="panel fc-panel active" id="flashcards"><div class="ph"><span class="t">Flashcards</span><span class="n">%s</span></div><div class="pb">%s</div></div>' % (fc['label'] or 'Click a card to turn it over', fc_body)
        if fc['id'] != 'flashcards':
            fc_html = fc_html.replace('id="flashcards"', 'id="flashcards" data-also="%s"' % fc['id'])

    practise = ''
    if course.get('quiz'):
        practise = '''<div class="panel"><div class="ph"><span class="t">Test yourself</span><span class="n">marked as you go</span></div>
  <div class="pb" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
    <span style="color:var(--muted);font-size:14.5px;flex:1;min-width:220px">Questions on %s. Anything you get wrong comes back until it sticks.</span>
    <a class="btn green" href="%s">Take the quiz &rarr;</a><a class="btn line" href="%s?mode=review">Smart review</a>
  </div></div>''' % (course['title'], course['quiz'], course['quiz'])
    elif course.get('tester'):
        practise = '''<div class="panel"><div class="ph"><span class="t">Test yourself</span><span class="n">book by book</span></div>
  <div class="pb" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
    <span style="color:var(--muted);font-size:14.5px;flex:1;min-width:220px">Multiple-choice and explain questions on the books in this topic, with your confidence tracked question by question.</span>
    <a class="btn green" href="%s">Topic Tester &rarr;</a>
  </div></div>''' % course['tester']

    crumb_items = course_crumbs(course) + [(course['title'], course['href'])]
    if topic['title'] and topic['title'] != course['title']:
        crumb_items.append((topic['title'], course['href']))

    body = '''<div class="layout">
%s
<main class="maincol" id="main">
  <div class="inner phead">
    %s
    <div class="ptitle">
      <div><h1>%s</h1>%s</div>
      <div class="acts">%s</div>
    </div>
  </div>
  <div class="inner page">
    <div class="cols-r">
      <div class="stack">
        <article class="panel doc">
          <div class="meta">%s</div>
%s
        </article>
        %s
        %s
        %s
      </div>
      <aside class="rail">
%s
      </aside>
    </div>
  </div>
</main>
</div>''' % (docnav(course, row['href']), crumbs(crumb_items), d['title'],
             ('<div class="sub">%s</div>' % d['deck']) if d['deck'] else '', ''.join(acts),
             ''.join(chips), '\n'.join(sections), fc_html, practise, pager, '\n'.join(rail))

    head_extra = ''.join(d['styles'])
    if d['lesson_css']:
        head_extra = '<link rel="stylesheet" href="./lesson.css">\n' + head_extra
    scripts = '\n'.join(clean_scripts(d['scripts']))
    ext = []
    for s in d['ext_scripts']:
        if 'starfield' in s or 'revision-nav' in s or 'lesson.js' in s or 'site-pulse' in s: continue
        ext.append(s)
    if d['lesson_css']: ext.append('./lesson.js')
    ext.append('/version2/assets/js/lesson-page.js')
    scripts += '\n' + '\n'.join('<script src="%s"%s></script>' % (s, ' defer' if 'page-editor' in s or 'lesson-page' in s else '') for s in ext) + '\n'
    desc = d['desc'] or plain(d['deck']) or plain(row.get('desc', ''))
    title = '%s — %s — Classicalia' % (plain(d['title']), plain(course['title']))
    return page(title, plain(desc), row['href'], sub['active'], body, head_extra, scripts, ' data-course="%s"' % course['href'])

def build_lessons():
    n = 0
    for c in DATA['courses']:
        for t, r in flat_items(c):
            if not r['written']: continue
            write(r['href'].lstrip('/'), build_lesson(c, t, r))
            n += 1
    print('lessons: %d written' % n)

STUB = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>%s — coming soon — Classicalia</title>
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=%s">
<link rel="canonical" href="%s%s">
</head>
<body style="font-family:system-ui,sans-serif;padding:40px;color:#3b4358">
<p>This lesson is not written yet. <a href="%s" style="color:#1a6fff">Back to %s</a>.</p>
</body>
</html>
'''

def build_stubs():
    n = 0
    for c in DATA['courses']:
        for t, r in flat_items(c):
            if r['written'] or not r['href']: continue
            rel = r['href'].lstrip('/')
            if not os.path.exists(os.path.join(ROOT, rel)): continue
            write(rel, STUB % (plain(r['title']), c['href'], SITE, c['href'], c['href'], plain(c['title'])))
            n += 1
    print('stubs: %d redirects' % n)

# ───────────────────────── course pages ─────────────────────────
def kind_chip(r):
    if r['kind'] == 'pdf': return chip('PDF', 'pdf')
    if r['kind'] == 'tester': return chip('Tester', 'on')
    if r['kind'] == 'guide': return chip('Guide', 'blue')
    return chip('Notes', 'blue')

def row_html(r, n_prefix=True):
    n = ('<span class="code">%s</span>' % r['n']) if (r['n'] and n_prefix) else ''
    rm = r.get('desc', '')
    if r.get('books'): rm = ('<em>%s</em> · ' % r['books']) + rm
    if r.get('note'): rm += ' <span style="color:#9aa3b5">%s</span>' % r['note']
    if r.get('written') and r.get('href'):
        ext = ' target="_blank" rel="noopener"' if r['kind'] == 'pdf' else ''
        return '<a class="row" href="%s"%s><span class="rt">%s%s</span><span class="rm">%s</span><span class="right">%s</span></a>' % (r['href'], ext, n, r['title'], rm, kind_chip(r))
    return '<div class="row off"><span class="rt">%s%s</span><span class="rm">%s</span><span class="right">%s</span></div>' % (n, r['title'], rm, chip('Coming soon', 'soon'))

def topic_panel(t):
    items = [r for r in t['items']]
    visible, hidden = [], []
    for r in items:
        if 'label' in r: visible.append(r); continue
        if r['kind'] in ('lesson', 'guide') and not r['written']: hidden.append(r)
        else: visible.append(r)
    # drop a label with nothing visible under it
    out_rows = []
    for i, r in enumerate(visible):
        if 'label' in r:
            nxt = visible[i + 1] if i + 1 < len(visible) else None
            if not nxt or 'label' in nxt: continue
            out_rows.append('<div class="row sep"><span class="rt">%s</span></div>' % r['label'])
        else:
            out_rows.append(row_html(r))
    lessons = [r for r in items if 'label' not in r and r['kind'] in ('lesson', 'guide')]
    written = [r for r in lessons if r['written']]
    count = ''
    if lessons:
        count = ('%d of %d lessons written' % (len(written), len(lessons))) if len(written) < len(lessons) else ('%d lesson%s' % (len(lessons), '' if len(lessons) == 1 else 's'))
    head = ((t['n'] + ' · ') if t['n'] else '') + t['title']
    lead = ('<span class="n">%s</span>' % t['lead']) if t.get('lead') else ('<span class="n">%s</span>' % count if count else '')
    more = ''
    if hidden:
        more = '<details class="more"><summary>%d %s coming soon</summary><div class="rows">%s</div></details>' % (
            len(hidden), 'lesson' if len(hidden) == 1 else 'lessons', ''.join(row_html(r) for r in hidden))
    return '<div class="panel" id="topic-%s"><div class="ph"><span class="t">%s</span>%s</div><div class="pb"><div class="rows">%s</div>%s</div></div>' % (
        re.sub(r'[^a-z0-9]+', '-', strip_tags(t['n'] or t['title']).lower()).strip('-'), head, lead, ''.join(out_rows), more)

def soon_panel(topics):
    rows = []
    for t in topics:
        lessons = [r for r in t['items'] if 'label' not in r and r['kind'] in ('lesson', 'guide')]
        head = ((t['n'] + ' · ') if t['n'] else '') + t['title']
        rows.append('<div class="row off"><span class="rt">%s</span><span class="rm">%d lessons planned</span><span class="right">%s</span></div>' % (head, len(lessons), chip('Coming soon', 'soon')))
    return '<div class="panel"><div class="ph"><span class="t">Coming soon</span><span class="n">%d %s</span></div><div class="pb"><div class="rows">%s</div></div></div>' % (
        len(topics), 'topic' if len(topics) == 1 else 'topics', ''.join(rows))

def build_course(c):
    sub = SUBJECTS[c['subject']]
    simple = all(len([r for r in t['items'] if 'label' not in r and r['kind'] in ('lesson', 'guide')]) == 1 for t in c['topics'])
    left = []
    if simple:
        # one page per topic: a single list, with any downloads beside it
        rows = []
        for t in c['topics']:
            lesson = next(r for r in t['items'] if 'label' not in r and r['kind'] in ('lesson', 'guide'))
            pdfs = [r for r in t['items'] if 'label' not in r and r['kind'] == 'pdf']
            right = ''.join('<a class="chip pdf" href="%s" target="_blank" rel="noopener" title="%s">PDF</a>' % (p['href'], plain(p['title'])) for p in pdfs)
            n = ('<span class="code">%s</span>' % t['n']) if t['n'] else ''
            if lesson['written']:
                rows.append('<div class="row"><span class="rt">%s<a href="%s">%s</a></span><span class="rm">%s</span><span class="right">%s<a class="chip blue" href="%s">Notes</a></span></div>' % (n, lesson['href'], t['title'], lesson.get('desc', ''), right, lesson['href']))
            else:
                rows.append('<div class="row off"><span class="rt">%s%s</span><span class="rm">%s</span><span class="right">%s%s</span></div>' % (n, t['title'], lesson.get('desc', ''), right, chip('Coming soon', 'soon')))
        left.append('<div class="panel"><div class="ph"><span class="t">Topics</span><span class="n">%d topics · notes, sources, exam focus and flashcards for each</span></div><div class="pb"><div class="rows">%s</div></div></div>' % (len(c['topics']), ''.join(rows)))
    else:
        section, pending = None, []
        def flush():
            if pending:
                left.append(soon_panel(list(pending))); pending.clear()
        for t in c['topics']:
            if t['section'] and t['section'] != section:
                flush(); section = t['section']
                left.append('<div class="lvl-head"><h2 style="font-size:20px">%s</h2></div>' % section)
            has_live = any('label' not in r and (r['written'] or r['kind'] in ('pdf', 'tester')) for r in t['items'])
            if has_live:
                flush(); left.append(topic_panel(t))
            else:
                pending.append(t)
        flush()

    # rail
    rail = []
    if c.get('quiz'):
        q = c['quiz']
        rail.append('''<div class="panel"><div class="ph"><span class="t">Practise</span></div><div class="pb"><div class="rows">
<a class="row" href="%s"><span class="rt">Take the quiz</span><span class="rm">pick a topic and the subtopics you want</span><span class="right">%s</span></a>
<a class="row" href="%s?mode=learn"><span class="rt">Work through in order</span><span class="rm">from the start, adding questions as you secure them</span></a>
<a class="row" href="%s?mode=review"><span class="rt">Smart review</span><span class="rm">shore up what you have seen before, then meet new questions</span></a>
<a class="row" href="%s?mode=donow"><span class="rt">Today's Do Now</span><span class="rm">the set your teacher chose for this lesson</span></a>
%s</div></div></div>''' % (q, chip('Start', 'on'), q, q, q,
            ('<a class="row" href="%s"><span class="rt">My progress</span><span class="rm">your confidence on every question, topic by topic</span></a>' % c['track']) if c.get('track') else ''))
    elif c.get('tester'):
        rail.append('''<div class="panel"><div class="ph"><span class="t">Practise</span></div><div class="pb"><div class="rows">
<a class="row" href="%s"><span class="rt">Topic Tester</span><span class="rm">multiple-choice and explain questions, book by book</span><span class="right">%s</span></a>
%s</div></div></div>''' % (c['tester'], chip('Start', 'on'),
            ('<a class="row" href="%s"><span class="rt">My progress</span><span class="rm">your confidence on every question</span></a>' % c['track']) if c.get('track') else ''))
    rail.append('<div class="panel" id="carry-on" hidden><div class="ph"><span class="t">Carry on</span></div><div class="pb"><div style="font-family:var(--serif);font-weight:600;color:var(--ink);font-size:16px" data-carry-title></div><div style="color:var(--muted);font-size:13.5px;margin:2px 0 10px" data-carry-group></div><a class="btn line sm" data-carry-link href="#">Continue reading &rarr;</a></div></div>')
    about = ''.join('<p>%s</p>' % p for p in c['about'])
    counts = c['counts']
    sections = sorted(set(t['section'] for t in c['topics'] if t['section']))
    kvl = ['<li><b>Board</b><span>%s</span></li>' % c['code'], '<li><b>Level</b><span>%s %s</span></li>' % (lvl_label(c['level']), sub['label'])]
    if counts['lessons']:
        kvl.append('<li><b>Lessons</b><span>%s</span></li>' % (('%d written of %d planned' % (counts['written'], counts['lessons'])) if counts['written'] < counts['lessons'] else '%d' % counts['lessons']))
    rail.append('<div class="panel"><div class="ph"><span class="t">About this course</span></div><div class="pb"><ul class="kvl" style="margin-bottom:10px">%s</ul>%s</div></div>' % (''.join(kvl), about))
    rail.append(TRACK)

    acts = []
    if c.get('quiz'):
        acts.append('<a class="btn line" href="%s?mode=donow">Today\'s Do Now</a>' % c['quiz'])
        acts.append('<a class="btn green" href="%s">Take the quiz &rarr;</a>' % c['quiz'])
    elif c.get('tester'):
        acts.append('<a class="btn green" href="%s">Topic Tester &rarr;</a>' % c['tester'])
    first = next((r for (t, r) in flat_items(c) if r['written']), None)
    if first and not acts:
        acts.append('<a class="btn green" href="%s">Start reading &rarr;</a>' % first['href'])

    body = '''<main id="main">
  <div class="inner phead">
    %s
    <div class="ptitle">
      <div><h1>%s</h1><div class="sub">%s</div></div>
      <div class="acts">%s</div>
    </div>
  </div>
  <div class="inner page">
    <div class="cols">
      <div class="stack">
%s
      </div>
      <aside class="rail">
%s
      </aside>
    </div>
  </div>
</main>''' % (crumbs(course_crumbs(c)), c['title'], c['deck'], ''.join(acts), '\n'.join(left), '\n'.join(rail))
    scripts = '<script src="/version2/assets/js/lesson-page.js" defer></script>\n'
    return page('%s — %s %s — Classicalia' % (plain(c['title']), lvl_label(c['level']), plain(sub['label'])), plain(c['deck']), c['href'], sub['active'], body, '', scripts, ' data-course="%s"' % c['href'])

def build_courses():
    for c in DATA['courses']:
        write(c['href'].lstrip('/') + 'index.html', build_course(c))
    print('courses: %d pages' % len(DATA['courses']))

# ───────────────────────── subject pages ─────────────────────────
DECKS = {
    'latin': 'OCR GCSE and A-level Latin: the vocabulary tester with every defined word, grammar practice, and the set texts read line by line with notes.',
    'greek': 'OCR GCSE and A-level Classical Greek: the vocabulary tester, and the GCSE Herodotus set text read line by line with notes. More set texts and language notes are on the way.',
    'civ': 'OCR GCSE and A-level Classical Civilisation: revision notes, sources and flashcards for each component, with quizzes that remember what you find hard.',
}
TOOLS = {
    'latin': [
        ('Vocabulary tester', 'every defined word for GCSE, A-level and KS3, tested until it sticks', '/version2/tools/vocab/latinvocabtester.html', 'Start'),
        ("Today's Do Now", 'the chapter your teacher set for this lesson', '/version2/tools/vocab/latinvocabtester.html?mode=donow', ''),
        ('Noun endings', 'five declensions, all cases', '/version2/tools/grammar/noun-endings.html', ''),
        ('Verb endings', 'every tense, person and voice', '/version2/tools/grammar/verb-endings.html', ''),
        ('Practice test', 'build a test from any list and have it marked', '/version2/tools/practice-test.html', ''),
    ],
    'greek': [
        ('Greek vocabulary tester', 'the GCSE and A-level defined vocabulary, tested until it sticks', '/version2/tools/vocab/greekvocabtester.html', 'Start'),
        ("Today's Do Now", 'the set your teacher chose for this lesson', '/version2/tools/vocab/greekvocabtester.html?mode=donow', ''),
    ],
    'civ': [
        ('Myth and Religion quiz', 'GCSE J199/11, topic by topic', '/version2/tools/quiz/myth-and-religion.html', 'Start'),
        ('The Homeric World quiz', 'GCSE J199/21, topic by topic', '/version2/tools/quiz/the-homeric-world.html', 'Start'),
        ('Odyssey Topic Tester', 'A-level H408/11, book by book', '/version2/subjects/classical-civilisation/the-odyssey/tester.html', 'Start'),
    ],
}

def comp_row(it, sub=None):
    code = it.get('code', '')
    name = it['name']
    detail = it.get('detail', '')
    href = (sub or it).get('href')
    if sub:
        name = '%s <span style="color:var(--muted);font-weight:500">· %s</span>' % (name, sub['label'])
        detail = ' · '.join(x for x in (detail, sub.get('name', '')) if x)
    n = ('<span class="code">%s</span>' % code) if code else ''
    if href:
        course = next((c for c in DATA['courses'] if c['href'] == href), None)
        status = chip('Live', 'on')
        if course:
            w, total = course['counts']['written'], course['counts']['lessons']
            if w == 0: status = chip('In preparation', 'soon')
            elif w < total: status = chip('%d of %d lessons' % (w, total), 'on')
            else: status = chip('%d lessons' % total, 'on')
        return '<a class="row" href="%s"><span class="rt">%s%s</span><span class="rm">%s</span><span class="right">%s</span></a>' % (href, n, name, detail, status)
    return '<div class="row off"><span class="rt">%s%s</span><span class="rm">%s</span><span class="right">%s</span></div>' % (n, name, detail, chip('Coming soon', 'soon'))

def group_panel(g):
    live, soon = [], []
    for it in g['items']:
        if it.get('subs'):
            for s in it['subs']:
                (live if s.get('href') else soon).append(comp_row(it, s))
        else:
            (live if it.get('href') else soon).append(comp_row(it))
    rows = ''.join(live)
    more = ''
    if soon:
        if live:
            more = '<details class="more"><summary>%d more coming soon</summary><div class="rows">%s</div></details>' % (len(soon), ''.join(soon))
        else:
            rows = ''.join(soon)
    note = ('<small>%s</small>' % g['note']) if g.get('note') else ''
    return '<div class="panel"><div class="ph"><span class="t">%s%s</span></div><div class="pb"><div class="rows">%s</div>%s</div></div>' % (g['label'], note, rows, more)

def build_subject(key):
    s = DATA['subjects'][key]
    sub = SUBJECTS[key]
    left = []
    for lvl in s['levels']:
        left.append('<div class="lvl-head" id="%s"><h2>%s</h2><span class="code">%s</span><p>%s</p></div>' % (lvl['id'], lvl['title'], lvl['eyebrow'], lvl['desc']))
        archive = []
        for g in lvl['groups']:
            if g['label'].lower() == 'tools': continue
            if g.get('archive'):
                archive.append(g); continue
            left.append(group_panel(g))
        if archive:
            inner = ''.join(group_panel(g) for g in archive)
            left.append('<details class="more" style="border-top:0"><summary>%s</summary><div class="stack" style="margin-top:10px">%s</div></details>' % (archive[0]['archive'].replace('Previous cycle', 'Previous cycle:'), inner))
    rail = []
    tools = TOOLS.get(key, [])
    if tools:
        rows = ''.join('<a class="row" href="%s"><span class="rt">%s</span><span class="rm">%s</span>%s</a>' % (h, t, d, ('<span class="right">%s</span>' % chip(c, 'on')) if c else '') for t, d, h, c in tools)
        rail.append('<div class="panel"><div class="ph"><span class="t">Practise</span></div><div class="pb"><div class="rows">%s</div></div></div>' % rows)
    rail.append(TRACK)
    rail.append(SUPPORT)
    acts = []
    if tools:
        acts.append('<a class="btn green" href="%s">%s &rarr;</a>' % (tools[0][2], tools[0][0] if key != 'civ' else 'Take a quiz'))
    body = '''<main id="main">
  <div class="inner phead">
    <div class="ptitle">
      <div><h1>%s</h1><div class="sub">%s</div></div>
      <div class="acts">%s</div>
    </div>
    <nav class="tabs" aria-label="Levels">%s</nav>
  </div>
  <div class="inner page">
    <div class="cols">
      <div class="stack">
%s
      </div>
      <aside class="rail">
%s
      </aside>
    </div>
  </div>
</main>''' % (s['title'], DECKS[key], ''.join(acts),
             ''.join('<a href="#%s"%s>%s</a>' % (l['id'], ' class="on"' if i == 0 else '', l['title']) for i, l in enumerate(s['levels'])),
             '\n'.join(left), '\n'.join(rail))
    return page('%s — Classicalia' % plain(s['title']), plain(DECKS[key]), sub['href'], sub['active'], body, '', '<script src="/version2/assets/js/lesson-page.js" defer></script>\n')

def build_subjects():
    for k in ('latin', 'greek', 'civ'):
        write(SUBJECTS[k]['href'].lstrip('/') + 'index.html', build_subject(k))
    print('subjects: 3 pages')

# ───────────────────────── tools page ─────────────────────────
TOOL_GROUPS = [
    ('For the classroom', 'print-ready sheets and a projector view', [
        ('Do Now builder', 'type your questions, choose the layout and print a starter sheet for any subject; save sets to reuse', '/version2/tools/do-now.html'),
        ('Exam paper builder', 'numbered questions, lettered parts and marks in the margin, with a cover page if you want one', '/version2/tools/exam-builder.html'),
        ('Visualiser', 'turn a webcam or document camera into a class visualiser: freeze, zoom, draw and snapshot', '/version2/tools/visualiser.html'),
        ('Look, cover, write, check', 'type a vocabulary list and print a fold-over worksheet', '/version2/tools/cover-write-check.html'),
    ]),
    ('Practise', 'testers that remember what you find hard', [
        ('Latin vocabulary tester', 'every defined word for KS3, GCSE and A-level', '/version2/tools/vocab/latinvocabtester.html'),
        ('Greek vocabulary tester', 'the GCSE and A-level defined vocabulary', '/version2/tools/vocab/greekvocabtester.html'),
        ('Noun endings', 'five declensions, all cases', '/version2/tools/grammar/noun-endings.html'),
        ('Verb endings', 'every tense, person and voice', '/version2/tools/grammar/verb-endings.html'),
        ('Practice test', 'build a test from any list, answer it on screen and have it marked', '/version2/tools/practice-test.html'),
        ('Myth and Religion quiz', 'GCSE Classical Civilisation J199/11', '/version2/tools/quiz/myth-and-religion.html'),
        ('The Homeric World quiz', 'GCSE Classical Civilisation J199/21', '/version2/tools/quiz/the-homeric-world.html'),
    ]),
    ('Games', 'vocabulary and grammar, played', [
        ('Gold Rush', 'a fast vocabulary race for the start of a lesson', '/version2/tools/game/gold-rush.html'),
        ('Latin Quest', 'an adventure through the grammar', '/version2/tools/game/latin-quest/index.html'),
        ('Cursus Honorum', 'climb the Roman career ladder in the Senate House', '/version2/tools/game/cursus-honorum/index.html'),
    ]),
]

def build_tools():
    left = []
    for label, note, items in TOOL_GROUPS:
        rows = ''.join('<a class="row" href="%s"><span class="rt">%s</span><span class="rm">%s</span><span class="right">%s</span></a>' % (h, t, d, chip('Open', 'blue')) for t, d, h in items)
        left.append('<div class="panel"><div class="ph"><span class="t">%s<small>%s</small></span></div><div class="pb"><div class="rows">%s</div></div></div>' % (label, note, rows))
    rail = ['''<div class="panel navy"><div class="pb">
  <div class="kv" style="color:#8fa3cc">For teachers</div>
  <h3 style="font-size:19px;margin-bottom:6px">Run your classes here</h3>
  <p style="font-size:14px;margin-bottom:14px">Set a Do Now, homework or a weekly test on any list, and see who has done it and where the gaps are.</p>
  <a class="btn green sm" href="/version2/#teach">How it works</a> <a class="btn line sm" href="/auth/register.html" style="margin-left:6px">Teacher account</a>
</div></div>''', SUPPORT]
    body = '''<main id="main">
  <div class="inner phead">
    <div class="ptitle">
      <div><h1>Tools</h1><div class="sub">Free classroom and study tools for classical subjects. Everything works without an account; sign in and your practice counts towards your courses.</div></div>
    </div>
  </div>
  <div class="inner page">
    <div class="cols">
      <div class="stack">
%s
      </div>
      <aside class="rail">
%s
      </aside>
    </div>
  </div>
</main>''' % ('\n'.join(left), '\n'.join(rail))
    write('version2/tools/index.html', page('Tools — Classicalia', 'Free classroom and study tools for Latin, Greek and Classical Civilisation.', '/version2/tools/', 'tools', body))
    print('tools: 1 page')

# ───────────────────────── set texts ─────────────────────────
SETTEXT_LANG = {'latin': ('Latin', '/version2/tools/vocab/latinvocabtester.html'), 'greek': ('Greek', '/version2/tools/vocab/greekvocabtester.html')}

def build_settext(t):
    sub = SUBJECTS[t['subject']]
    lang, tester = SETTEXT_LANG[t['subject']]
    left = []
    for g in t['groups']:
        rows = ''.join('<a class="row" href="%s"><span class="rt">%s</span><span class="rm">%s</span><span class="right">%s</span></a>' % (s['href'], s['title'], s['desc'], chip('Read', 'blue')) for s in g['sections'])
        head = ' · '.join(x for x in (g.get('lines', ''), g.get('label', '')) if x) or 'Sections'
        left.append('<div class="panel"><div class="ph"><span class="t">%s</span><span class="n">%d sections</span></div><div class="pb"><div class="rows">%s</div></div></div>' % (head, len(g['sections']), rows))
    # background to the text, below the sections, where there is some
    for c in t.get('intro', []):
        left.append('<div class="panel"><div class="ph"><span class="t">%s</span></div><div class="pb st-context">%s</div></div>' % (c['h'], c['body']))
    kvl = ['<li><b>Board</b><span>%s</span></li>' % t['code'], '<li><b>Level</b><span>%s %s</span></li>' % (lvl_label(t['level']), lang), '<li><b>Sections</b><span>%d</span></li>' % t['counts']['sections']]
    if t.get('archive'): kvl.append('<li><b>Cycle</b><span>%s</span></li>' % t['archive'])
    about = ''.join('<p>%s</p>' % p for p in t['about'])
    rail = ['<div class="panel"><div class="ph"><span class="t">About this text</span></div><div class="pb"><ul class="kvl" style="margin-bottom:10px">%s</ul>%s</div></div>' % (''.join(kvl), about)]
    exam = ('<a class="row" href="%s"><span class="rt">Exam practice</span><span class="rm">practice papers laid out like the exam, with mark schemes</span></a>' % (t['href'] + t['exam'])) if t.get('exam') else ''
    if t.get('eye'): exam += '<a class="row" href="%s"><span class="rt">Examiner’s eye</span><span class="rm">15-mark answers at every level, to mark, X-ray and improve</span></a>' % (t['href'] + t['eye'])
    rail.append('<div class="panel"><div class="ph"><span class="t">Also for this paper</span></div><div class="pb"><div class="rows">%s<a class="row" href="%s"><span class="rt">Vocabulary tester</span><span class="rm">the defined vocabulary for %s %s</span></a><a class="row" href="%s"><span class="rt">Other set texts</span><span class="rm">the rest of the %s %s literature options</span></a></div></div></div>' % (exam, tester, lvl_label(t['level']), lang, sub['href'] + LEVEL_ANCHOR.get(t['level'], ''), lvl_label(t['level']), lang))
    rail.append(TRACK)
    first = t['groups'][0]['sections'][0]['href'] if t['groups'] and t['groups'][0]['sections'] else None
    acts = ('<a class="btn green" href="%s">Start reading &rarr;</a>' % first) if first else ''
    if t.get('exam'): acts = '<a class="btn line" href="%s">Exam practice</a>' % (t['href'] + t['exam']) + acts
    body = '''<main id="main">
  <div class="inner phead">
    %s
    <div class="ptitle">
      <div><h1>%s</h1><div class="sub">%s</div></div>
      <div class="acts">%s</div>
    </div>
  </div>
  <div class="inner page">
    <div class="cols">
      <div class="stack">
%s
      </div>
      <aside class="rail">
%s
      </aside>
    </div>
  </div>
</main>''' % (crumbs([(sub['label'], sub['href']), (lvl_label(t['level']) + ' ' + lang, sub['href'] + LEVEL_ANCHOR.get(t['level'], ''))]), t['title'], t['deck'], acts, '\n'.join(left), '\n'.join(rail))
    head = '<link rel="stylesheet" href="/version2/assets/css/settext-reader.css">\n' if t.get('intro') else ''
    if lang == 'Greek':
        head = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,600;1,400&subset=greek-ext&display=swap">\n' + head
    return page('%s — %s %s — Classicalia' % (plain(t['title']), lvl_label(t['level']), lang), plain(t['deck']), t['href'], sub['active'], body, head, '', ' class="grc"' if lang == 'Greek' else '')

def retouch_reader(rel):
    """Lighter head on a set-text reading page: no starfield. (The pages themselves
    are written by build-settext.py, which links their stylesheet.)"""
    p = os.path.join(ROOT, rel)
    if not os.path.exists(p): return False   # not built yet: build-settext.py writes it
    src = open(p, encoding='utf-8').read()
    out = re.sub(r'\n?[ \t]*<canvas class="header-sky"[^>]*></canvas>', '', src)
    out = re.sub(r'\n?[ \t]*<script src="/version2/assets/js/starfield.js"></script>', '', out)
    if out != src:
        open(p, 'w', encoding='utf-8').write(out)
        return True
    return False

def build_settexts():
    n = 0
    for t in DATA['settexts']:
        write(t['href'].lstrip('/') + 'index.html', build_settext(t))
        for g in t['groups']:
            for s in g['sections']:
                if retouch_reader(s['href'].lstrip('/')): n += 1
    print('set texts: %d contents pages, %d reading pages retouched' % (len(DATA['settexts']), n))

if __name__ == '__main__':
    steps = {'subjects': build_subjects, 'courses': build_courses, 'lessons': build_lessons, 'stubs': build_stubs, 'settexts': build_settexts, 'tools': build_tools}
    for k, fn in steps.items():
        if ONLY and k != ONLY: continue
        fn()
