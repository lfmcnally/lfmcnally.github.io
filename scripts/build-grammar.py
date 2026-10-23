#!/usr/bin/env python3
"""Build the Latin Language grammar lessons from their data files.

  version2/subjects/latin/language/gcse/grammar.json       the course: topics and lessons
  version2/subjects/latin/language/gcse/data/<slug>.json   one lesson's content
  -> version2/subjects/latin/language/gcse/index.html      the course page
  -> version2/subjects/latin/language/gcse/<slug>/index.html  each written lesson

A lesson is a list of sections, each a list of blocks: lead, p, facts, table,
example, note, compare, exercise (typed answers marked against a scheme). The page frame (shell, docnav, rail, pager)
is the same as the Classical Civilisation revision pages'. Behaviour comes from
/version2/assets/js/grammar-lesson.js, styles from /version2/assets/css/grammar.css.
"""
import os, re, sys, json, html, importlib.util

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VT = '/version2/tools/vocab/latinvocabtester.html'   # the practice link on every page
spec = importlib.util.spec_from_file_location('bc', os.path.join(ROOT, 'scripts/build-content.py'))
bc = importlib.util.module_from_spec(spec); spec.loader.exec_module(bc)

COURSE_DIR = 'version2/subjects/latin/language/gcse'

def esc(s): return html.escape(str(s if s is not None else ''), quote=True)

def load_course():
    c = json.load(open(os.path.join(ROOT, COURSE_DIR, 'grammar.json'), encoding='utf-8'))
    data_dir = os.path.join(ROOT, COURSE_DIR, 'data')
    for t in c['topics']:
        for r in t['items']:
            r.setdefault('kind', 'lesson')
            r['href'] = c['href'] + r['slug'] + '/'
            r['has_data'] = os.path.exists(os.path.join(data_dir, r['slug'] + '.json'))
            r['written'] = True                     # every lesson has a page; the unwritten ones are placeholders
            r.setdefault('desc', ''); r.setdefault('note', ''); r.setdefault('books', '')
        t.setdefault('lead', ''); t.setdefault('section', '')
    return c

# ── blocks ──
def facts(items):
    return '<ul class="facts">%s</ul>' % ''.join('<li>%s</li>' % x for x in items)

def table(t):
    head = '<tr>%s</tr>' % ''.join('<th>%s</th>' % h for h in t['head'])
    rows = ''.join('<tr>%s</tr>' % ''.join('<td>%s</td>' % c for c in r) for r in t['rows'])
    return '<div class="tbl-wrap"><table><thead>%s</thead><tbody>%s</tbody></table></div>' % (head, rows)

def example(e):
    return ('<div class="gx"><div class="gx-la">%s</div>'
            '<button class="btn line sm" type="button" data-reveal>Show the English</button>'
            '<div class="gx-en" hidden>%s</div>%s</div>') % (
        e['la'], e['en'], ('<div class="gx-note">%s</div>' % e['note']) if e.get('note') else '')

def compare(c):
    out = ['<div class="cmp"><div class="cmp-header">%s</div>' % ''.join('<div class="cmp-col-head">%s</div>' % h for h in c['head'])]
    for r in c['rows']:
        out.append('<div class="cmp-row">%s</div>' % ''.join('<div class="cmp-cell">%s</div>' % x for x in r))
    return ''.join(out) + '</div>'

def exercise(x):
    """A typed exercise: each item carries its mark scheme as data for grammar-lesson.js."""
    items = []
    for i, it in enumerate(x['items']):
        data = json.dumps({k: it[k] for k in it if k != 'la'}, ensure_ascii=False)
        items.append('<div class="gq-item"><div class="gq-la"><em>%d</em>%s</div>'
                     '<form class="gq-form" autocomplete="off"><input class="gq-in" type="text" name="a%d" placeholder="%s" aria-label="Your answer" spellcheck="false">'
                     '<button class="btn navy sm" type="submit">Mark it</button></form>'
                     '<div class="gq-res" hidden></div><script type="application/json" class="gq-data">%s</script></div>' % (
                         i + 1, it['la'], i + 1, 'Type your translation' if x['task'] == 'translate' else 'Type the form', data.replace('</', '<\\/')))
    total = sum(sum(c['marks'] for c in it['scheme']) for it in x['items']) if x['task'] == 'translate' else len(x['items'])
    return ('<div class="gq" id="gq-%s" data-task="%s" data-total="%d"><div class="gq-head"><h3>%s</h3><span class="gq-score" data-score>0 of %d marks</span></div>'
            '<p class="gq-intro">%s</p>%s<div class="gq-foot" hidden><span data-summary></span><button class="btn line sm" type="button" data-again>Clear and try again</button></div></div>') % (
        x['id'], x['task'], total, x['title'], total, x['intro'], ''.join(items))

def block(b):
    if 'lead' in b: return '<p class="lead">%s</p>' % b['lead']
    if 'p' in b: return '<p>%s</p>' % b['p']
    if 'facts' in b: return facts(b['facts'])
    if 'table' in b: return table(b['table'])
    if 'example' in b: return example(b['example'])
    if 'note' in b: return '<div class="note">%s</div>' % b['note']
    if 'compare' in b: return compare(b['compare'])
    if 'exercise' in b: return exercise(b['exercise'])
    raise ValueError('unknown block %r' % list(b))

# ── pages ──
def build_lesson(course, topic, row, d):
    sections, toc = [], []
    for s in d['sections']:
        body = '\n'.join(block(b) for b in s['blocks'])
        if s.get('exam'):
            body = '<div class="explain-block"><div class="explain-label">Exam focus</div>%s</div>' % body
        sections.append('<section id="%s"><h2>%s</h2>\n%s\n</section>' % (s['id'], s['h2'], body))
        toc.append('<li><a href="#%s">%s</a></li>' % (s['id'], bc.strip_tags(s['h2'])))

    chips = [bc.chip('Lesson ' + row['n']), bc.chip(topic['title'])]
    acts = ['<button class="btn line" type="button" data-print onclick="window.print()">Print</button>',
            '<a class="btn green" href="#try">Try it &rarr;</a>']

    flat = [r for (t, r) in bc.flat_items(course)]
    idx = next((i for i, r in enumerate(flat) if r['href'] == row['href']), -1)
    prev = flat[idx - 1] if idx > 0 else None
    nxt = flat[idx + 1] if 0 <= idx < len(flat) - 1 else None
    def card(r, cls, lab):
        if not r: return '<span></span>'
        return '<a class="%s" href="%s"><small>%s</small><b>%s %s</b></a>' % (cls, r['href'], lab, r['n'], r['title'])
    pager = '<div class="pager">%s%s</div>' % (card(prev, 'prev', '&larr; Previous'), card(nxt, 'next', 'Next &rarr;'))

    rail = []
    if d.get('key'):
        rail.append('<div class="panel"><div class="ph"><span class="t">At a glance</span></div><div class="pb"><ul class="kvl">%s</ul></div></div>' % ''.join('<li><b>%s</b><span>%s</span></li>' % (k, v) for k, v in d['key']))
    rail.append('<div class="panel toc-panel"><div class="ph"><span class="t">On this page</span></div><div class="pb"><ul class="toc" data-toc>%s</ul></div></div>' % ''.join(toc))
    rail.append('<div class="exam"><div class="k">Vocabulary</div><p style="font-size:14.5px;color:var(--ink);margin:0 0 10px">The words of every chapter are in the vocabulary tester, tested until they stick.</p><a class="btn green sm" href="%s">Vocabulary tester &rarr;</a></div>' % VT)

    crumb_items = bc.course_crumbs(course) + [(course['title'], course['href'])]
    body = '''<div class="layout">
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
    <div class="cols-r">
      <div class="stack">
        <article class="panel doc gram">
          <div class="meta">%s</div>
%s
        </article>
        %s
      </div>
      <aside class="rail">
%s
      </aside>
    </div>
  </div>
</main>
</div>''' % (bc.docnav(course, row['href']), bc.crumbs(crumb_items), d['title'], d['deck'], ''.join(acts), ''.join(chips), '\n'.join(sections), pager, '\n'.join(rail))
    head_extra = '<link rel="stylesheet" href="/version2/assets/css/grammar.css">'
    scripts = '<script src="/version2/assets/js/grammar-lesson.js" defer></script>\n<script src="/version2/assets/js/lesson-page.js" defer></script>\n'
    title = '%s — %s — Classicalia' % (bc.plain(d['title']), course['title'])
    return bc.page(title, d['desc'], row['href'], 'latin', body, head_extra, scripts, ' data-course="%s"' % course['href'])

def build_placeholder(course, topic, row):
    chapter = topic['n'] if topic['n'].isdigit() and int(topic['n']) <= 10 else None
    flat = [r for (t, r) in bc.flat_items(course)]
    idx = next((i for i, r in enumerate(flat) if r['href'] == row['href']), -1)
    prev = flat[idx - 1] if idx > 0 else None
    nxt = flat[idx + 1] if 0 <= idx < len(flat) - 1 else None
    def card(r, cls, lab):
        if not r: return '<span></span>'
        return '<a class="%s" href="%s"><small>%s</small><b>%s %s</b></a>' % (cls, r['href'], lab, r['n'], r['title'])
    pager = '<div class="pager">%s%s</div>' % (card(prev, 'prev', '&larr; Previous'), card(nxt, 'next', 'Next &rarr;'))
    meanwhile = ['<a class="btn green sm" href="%s">%s &rarr;</a>' % (VT, ('Chapter %s vocabulary' % chapter) if chapter else 'Vocabulary tester')]
    crumb_items = bc.course_crumbs(course) + [(course['title'], course['href'])]
    body = '''<div class="layout">
%s
<main class="maincol" id="main">
  <div class="inner phead">
    %s
    <div class="ptitle">
      <div><h1>%s</h1><div class="sub">%s</div></div>
      <div class="acts"></div>
    </div>
  </div>
  <div class="inner page">
    <div class="cols-r">
      <div class="stack">
        <article class="panel doc gram">
          <div class="meta">%s</div>
<section id="soon"><h2>This lesson is on its way</h2>
<p class="lead">%s</p>
<p>It will follow the same shape as the lessons already written: what the point is, how to spot it, how to translate it, what not to confuse it with, and sentences to try that are marked as you type.</p>
<div class="note">Meanwhile, the vocabulary tester has %s.</div>
<p style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">%s</p>
</section>
        </article>
        %s
      </div>
      <aside class="rail">
<div class="exam"><div class="k">Vocabulary</div><p style="font-size:14.5px;color:var(--ink);margin:0 0 10px">The words of every chapter are in the vocabulary tester, tested until they stick.</p><a class="btn green sm" href="%s">Vocabulary tester &rarr;</a></div>
      </aside>
    </div>
  </div>
</main>
</div>''' % (bc.docnav(course, row['href']), bc.crumbs(crumb_items), row['title'], row['desc'],
             bc.chip('Lesson ' + row['n']) + bc.chip(topic['title']) + bc.chip('Coming soon', 'soon'), row['desc'],
             ('the words of chapter %s' % chapter) if chapter else 'every chapter\'s words', ''.join(meanwhile), pager, VT)
    head_extra = '<link rel="stylesheet" href="/version2/assets/css/grammar.css">\n<meta name="robots" content="noindex">'
    scripts = '<script src="/version2/assets/js/lesson-page.js" defer></script>\n'
    title = '%s — %s — Classicalia' % (bc.plain(row['title']), course['title'])
    return bc.page(title, bc.plain(row['desc']), row['href'], 'latin', body, head_extra, scripts, ' data-course="%s"' % course['href'])

def build_course_page(course):
    written = [r for (t, r) in bc.flat_items(course) if r['has_data']]
    def row(r):
        n = '<span class="code">%s</span>' % r['n']
        c = bc.kind_chip(r) if r['has_data'] else bc.chip('Coming soon', 'soon')
        return '<a class="row%s" href="%s"><span class="rt">%s%s</span><span class="rm">%s</span><span class="right">%s</span></a>' % ('' if r['has_data'] else ' off', r['href'], n, r['title'], r['desc'], c)
    panels, section = [], None
    for t in course['topics']:
        if t['section'] != section:
            section = t['section']; panels.append('<div class="lvl-head" style="margin-top:8px"><h2 style="font-size:20px;margin:0">%s</h2></div>' % section)
        done = sum(1 for r in t['items'] if r['has_data'])
        count = '%d of %d written' % (done, len(t['items'])) if done < len(t['items']) else '%d lessons' % len(t['items'])
        panels.append('<div class="panel" id="topic-%s"><div class="ph"><span class="t">%s · %s</span><span class="n">%s</span></div><div class="pb"><div class="rows">%s</div></div></div>' % (t['n'], t['n'], t['title'], count, ''.join(row(r) for r in t['items'])))
    start = ('<a class="btn green" href="%s">Start with %s &rarr;</a>' % (written[0]['href'], written[0]['title'])) if written else ''
    about = '<div class="panel"><div class="ph"><span class="t">About this course</span></div><div class="pb"><ul class="kvl"><li><b>Board</b><span>%s</span></li><li><b>Level</b><span>GCSE Latin</span></li><li><b>Lessons</b><span>%d written of %d planned</span></li><li><b>Vocabulary</b><span><a href="%s">Vocabulary tester</a>, chapter by chapter</span></li></ul></div></div>' % (
        course['code'], len(written), sum(len(t['items']) for t in course['topics']), VT)
    crumb_items = bc.course_crumbs(course)
    body = '''<div class="inner phead">
  %s
  <div class="ptitle">
    <div><h1>%s</h1><div class="sub">%s</div></div>
    <div class="acts">%s</div>
  </div>
</div>
<div class="inner page">
  <div class="cols">
    <div class="stack">%s</div>
    <aside class="stack">%s</aside>
  </div>
</div>''' % (bc.crumbs(crumb_items), course['title'], course['deck'], start, '\n'.join(panels), about)
    return bc.page('%s — GCSE Latin — Classicalia' % course['title'], bc.plain(course['deck']), course['href'], 'latin', body)

def main():
    course = load_course()
    n = 0
    ph = 0
    for t in course['topics']:
        for r in t['items']:
            if r['has_data']:
                d = json.load(open(os.path.join(ROOT, COURSE_DIR, 'data', r['slug'] + '.json'), encoding='utf-8'))
                bc.write(r['href'].lstrip('/') + 'index.html', build_lesson(course, t, r, d)); n += 1
            else:
                bc.write(r['href'].lstrip('/') + 'index.html', build_placeholder(course, t, r)); ph += 1
    bc.write(course['href'].lstrip('/') + 'index.html', build_course_page(course))
    print('grammar lessons: %d written, %d placeholder(s), plus the course page' % (n, ph))

if __name__ == '__main__':
    main()
