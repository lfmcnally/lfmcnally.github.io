#!/usr/bin/env python3
"""Build version2/assets/data/courses.json, the one list of what the site
offers: subjects, courses, topics, lessons (and whether each is written), set
texts and their sections.

The first run reads the hand-written hub pages that build-content.py then
replaces, so it reads them from git (the commit before this phase) rather
than the working tree; pass --from-tree to read the files on disk instead.

Usage:  python3 scripts/extract-manifest.py [--from-tree] [--rev <git rev>]
"""
import re, os, sys, json, subprocess, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
V2 = '/version2/'
STUB_MARK = 'being written'

# ── source reading ──
REV = 'c1ddcdf'   # the shell commit: hubs are unchanged there
for i, a in enumerate(sys.argv):
    if a == '--rev': REV = sys.argv[i + 1]
FROM_TREE = '--from-tree' in sys.argv

def read(rel):
    path = os.path.join(ROOT, rel)
    if not FROM_TREE:
        try:
            return subprocess.check_output(['git', 'show', '%s:%s' % (REV, rel)], cwd=ROOT, stderr=subprocess.DEVNULL).decode('utf-8')
        except subprocess.CalledProcessError:
            pass
    with open(path, encoding='utf-8') as f:
        return f.read()

def exists(rel):
    return os.path.exists(os.path.join(ROOT, rel))

def is_written(rel):
    """A lesson page counts as written unless it is a 'being written' stub."""
    p = os.path.join(ROOT, rel)
    if not os.path.exists(p): return False
    with open(p, encoding='utf-8') as f:
        src = f.read()
    if STUB_MARK in src: return False
    if 'http-equiv="refresh"' in src: return False   # already a redirect stub
    return True

def text(s):
    """Collapse whitespace in an HTML fragment (entities are kept)."""
    return re.sub(r'\s+', ' ', s or '').strip()

def strip_tags(s):
    return text(re.sub(r'<[^>]+>', '', s or ''))

def first(pattern, src, flags=re.S, default=''):
    m = re.search(pattern, src, flags)
    return text(m.group(1)) if m else default

def resolve(href, base_dir):
    """Make a hub-relative href site-absolute."""
    if not href or href.startswith('#') or href.startswith('http') or href.startswith('mailto:'):
        return href
    if href.startswith('/'): return href
    parts = (base_dir.rstrip('/') + '/' + href).split('/')
    out = []
    for p in parts:
        if p == '..': out.pop()
        elif p == '.' or p == '': continue
        else: out.append(p)
    return '/' + '/'.join(out)

# ── rows (lessons, workbooks, guides, testers) ──
def parse_row(frag, base_dir):
    href = first(r'href="([^"]*)"', frag)
    badge_cls = first(r'<span class="type-badge ([^"]*)"', frag)
    badge = strip_tags(first(r'<span class="type-badge[^"]*"[^>]*>(.*?)</span>', frag))
    title_html = first(r'<div class="row-title">(.*?)</div>', frag)
    books = strip_tags(first(r'<span class="row-books">(.*?)</span>', title_html))
    title = text(re.sub(r'\s*<span class="row-books">.*?</span>', '', title_html))
    desc = first(r'<div class="row-desc">(.*?)</div>', frag)
    note = first(r'<div class="bridge-note">(.*?)</div>', frag)
    kind = 'lesson'
    if 'type-book' in badge_cls or 'type-bridge' in badge_cls or href.lower().endswith('.pdf'): kind = 'pdf'
    if 'type-tester' in badge_cls: kind = 'tester'
    if 'type-sow' in badge_cls and href.lower().endswith('.pdf'): kind = 'pdf'
    if '/lessons/book-' in href or '/lessons/introduction' in href: kind = 'guide'
    if 'type-tester' in badge_cls and href and 'exam' in href: kind = 'lesson'
    row = {
        'n': badge if re.match(r'^[\d.]+$|^Bk|^B\d', badge) else '',
        'badge': badge, 'kind': kind, 'title': title, 'desc': desc, 'books': books,
        'href': resolve(href, base_dir) if href and href != '#' else None,
        'bridge': 'bridge-row' in frag or bool(note), 'note': note,
    }
    if row['href'] and row['href'].startswith('/') and row['kind'] in ('lesson', 'guide'):
        row['written'] = is_written(row['href'].lstrip('/'))
    else:
        row['written'] = bool(row['href'])
    return row

def parse_panel(panel, base_dir):
    """Rows and group labels in document order."""
    items = []
    for m in re.finditer(r'<div class="group-label">(.*?)</div>|<a [^>]*class="resource-row resource-row--link[^"]*"[^>]*>.*?</a>|<div class="resource-row--placeholder">.*?</div>\s*</div>\s*</div>', panel, re.S):
        frag = m.group(0)
        if frag.startswith('<div class="group-label">'):
            items.append({'label': text(m.group(1))})
        else:
            items.append(parse_row(frag, base_dir))
    return items

def parse_hub(rel, meta):
    src = read(rel)
    base_dir = '/' + os.path.dirname(rel)
    course = dict(meta)
    course['href'] = base_dir + '/'
    course['title'] = first(r'<h1 class="header-title">(.*?)</h1>', src)
    course['eyebrow'] = first(r'<div class="header-eyebrow">(.*?)</div>', src)
    course['deck'] = first(r'<p class="header-deck">(.*?)</p>', src)
    course['about'] = [text(p) for p in re.findall(r'<p class="context-desc"[^>]*>(.*?)</p>', src, re.S)]
    # the keyed lists on the Odyssey hub
    course['key'] = [strip_tags(k) for k in re.findall(r'<div class="key-item">(.*?)</div>', src, re.S)]
    topics = []
    section = ''
    body = src[src.find('<ul class="accordion"'):] if '<ul class="accordion"' in src else src
    for m in re.finditer(r'<li class="acc-group-label">(.*?)</li>|<li class="accordion-item"[^>]*data-title="([^"]*)"[^>]*>(.*?)</li>\s*(?=<li|</ul>|<!--)', body, re.S):
        if m.group(1) is not None:
            section = strip_tags(m.group(1)).replace('Section A Culture', 'Section A · Culture').replace('Section B Literature', 'Section B · Literature')
            section = re.sub(r'^(Section [AB]) ·? ?(Culture|Literature)\s*', r'\1 · \2 · ', section).rstrip(' ·')
            continue
        item = m.group(3)
        n = strip_tags(first(r'<span class="acc-n">(.*?)</span>', item))
        title = first(r'<span class="acc-title">(.*?)</span>', item)
        badge = strip_tags(first(r'<span class="mini-badge[^"]*"[^>]*>(.*?)</span>', item))
        lead_label = first(r'<span class="lt-label">(.*?)</span>', item)
        lead_text = first(r'<span class="lt-text">(.*?)</span>', item)
        threads = [text(t) for t in re.findall(r'<div class="thread">(.*?)</div>', item, re.S)]
        panel = item[item.find('<div class="accordion-panel">'):]
        rows = parse_panel(panel, base_dir)
        lessons = [r for r in rows if 'label' not in r]
        # hubs that call every page "Revision Page" mean the topic's own page
        for r in lessons:
            if re.fullmatch(r'Revision Page', strip_tags(r['title']), re.I):
                r['title'] = title
                if not r['n']: r['n'] = n
        topics.append({
            'n': n if re.match(r'^[\d.]+$', n) else '', 'glyph': '' if re.match(r'^[\d.]+$', n) else n,
            'title': title, 'section': section, 'badge': badge,
            'lead': (lead_label + ' · ' + lead_text) if lead_text else '',
            'threads': threads, 'keywords': m.group(2),
            'items': rows,
        })
    course['topics'] = topics
    course['counts'] = {
        'lessons': sum(1 for t in topics for r in t['items'] if 'label' not in r and r['kind'] in ('lesson', 'guide')),
        'written': sum(1 for t in topics for r in t['items'] if 'label' not in r and r['kind'] in ('lesson', 'guide') and r['written']),
    }
    return course

# ── subject pages ──
def parse_subject(rel, key):
    src = read(rel)
    sub = {'key': key, 'href': '/' + os.path.dirname(rel) + '/'}
    sub['title'] = first(r'<h1 class="header-title">(.*?)</h1>', src)
    sub['deck'] = first(r'<p class="header-deck">(.*?)</p>', src)
    levels = []
    for lm in re.finditer(r'<div class="level" id="([^"]+)">(.*?)(?=<hr class="level-div">|<!-- SUPPORT BAND -->|<div class="support-band">)', src, re.S):
        lid, body = lm.group(1), lm.group(2)
        level = {
            'id': lid,
            'eyebrow': first(r'<div class="level-eyebrow">(.*?)</div>', body),
            'title': first(r'<div class="level-title">(.*?)</div>', body),
            'desc': first(r'<p class="level-desc">(.*?)</p>', body),
            'groups': [],
        }
        archive = ''
        for gm in re.finditer(r'<details class="cycle-archive">\s*<summary>(.*?)</summary>|<div class="group">\s*<div class="group-label">(.*?)</div>\s*<ul class="comp-list">', body, re.S):
            if gm.group(1) is not None:
                archive = strip_tags(gm.group(1)); continue
            label_html, items_html = gm.group(2), balanced_ul(body, gm.end())
            note = first(r'<span class="group-note">(.*?)</span>', label_html)
            label = text(re.sub(r'<span class="group-note">.*?</span>', '', label_html))
            group = {'label': label, 'note': note, 'archive': archive, 'items': []}
            for li in top_level_items(items_html):
                if '<ul class="comp-sublist">' in li:
                    head = li[:li.find('<ul class="comp-sublist">')]
                    item = comp_fields(head)
                    item['subs'] = []
                    for sm in re.finditer(r'<a href="([^"]*)" class="comp-subrow">(.*?)</a>', li, re.S):
                        s = sm.group(2)
                        item['subs'].append({
                            'href': sm.group(1) if sm.group(1) != '#' else None,
                            'label': first(r'<span class="comp-sublabel">(.*?)</span>', s),
                            'name': first(r'<span class="comp-subname">(.*?)</span>', s),
                            'badge': strip_tags(first(r'<span class="comp-badge [^"]*">(.*?)</span>', s)),
                        })
                    group['items'].append(item)
                else:
                    item = comp_fields(li)
                    item['href'] = first(r'<a href="([^"]*)"', li) or None
                    if item['href'] == '#': item['href'] = None
                    group['items'].append(item)
            level['groups'].append(group)
        levels.append(level)
    sub['levels'] = levels
    return sub

def balanced_ul(src, start):
    """Content from `start` (just inside a <ul>) to its matching </ul>."""
    depth = 1
    for m in re.finditer(r'<ul\b[^>]*>|</ul>', src[start:]):
        depth += 1 if m.group(0) != '</ul>' else -1
        if depth == 0:
            return src[start:start + m.start()]
    return src[start:]

def top_level_items(list_html):
    """Inner HTML of each top-level <li> in a list that may nest other lists."""
    items, depth, start = [], 0, None
    for m in re.finditer(r'<li\b[^>]*>|</li>', list_html):
        if m.group(0) == '</li>':
            depth -= 1
            if depth == 0 and start is not None:
                items.append(list_html[start:m.start()]); start = None
        else:
            if depth == 0: start = m.end()
            depth += 1
    return items

def comp_fields(frag):
    name_html = first(r'<span class="comp-name">(.*?)</span>\s*(?:<span class="comp-right">|</div>|$)', frag) or first(r'<span class="comp-name">(.*?)</span>', frag)
    detail = first(r'<span class="comp-detail">(.*?)</span>', frag)
    name = text(re.sub(r'<span class="comp-detail">.*?</span>', '', name_html))
    name = re.sub(r'<span class="group-note">(.*?)</span>', r'\1', name)
    badges = [strip_tags(b) for b in re.findall(r'<span class="comp-badge [^"]*">(.*?)</span>', frag)]
    return {'code': first(r'<span class="comp-code">(.*?)</span>', frag), 'name': name, 'detail': detail, 'badges': badges}

# ── set texts ──
def parse_settext(rel, meta):
    src = read(rel)
    base_dir = '/' + os.path.dirname(rel)
    t = dict(meta)
    t['href'] = base_dir + '/'
    t['title'] = first(r'<h1 class="header-title">(.*?)</h1>', src)
    t['eyebrow'] = first(r'<div class="header-eyebrow">(.*?)</div>', src)
    t['deck'] = first(r'<p class="header-deck">(.*?)</p>', src)
    t['about'] = [text(p) for p in re.findall(r'<p class="context-desc"[^>]*>(.*?)</p>', src, re.S)]
    groups, cur = [], {'label': '', 'lines': '', 'sections': []}
    main = src[src.find('<main'):src.find('</main>')]
    for m in re.finditer(r'<div class="passage-group-head">(.*?)</div>|<div class="part-label">(.*?)</div>|<a href="([^"]*)" class="resource-row--link">(.*?)</a>', main, re.S):
        if m.group(1) is not None or m.group(2) is not None:
            if cur['sections']: groups.append(cur)
            head = m.group(1) or ''
            cur = {
                'lines': first(r'<span class="passage-group-lines">(.*?)</span>', head) or text(m.group(2) or ''),
                'label': first(r'<span class="passage-group-title">(.*?)</span>', head),
                'sections': [],
            }
            continue
        frag = m.group(4)
        cur['sections'].append({
            'href': resolve(m.group(3), base_dir),
            'badge': strip_tags(first(r'<span class="type-badge[^"]*">(.*?)</span>', frag)),
            'title': first(r'<div class="row-title">(.*?)</div>', frag),
            'desc': first(r'<div class="row-desc">(.*?)</div>', frag),
        })
    if cur['sections']: groups.append(cur)
    t['groups'] = groups
    t['counts'] = {'sections': sum(len(g['sections']) for g in groups)}
    return t

CIV = 'version2/subjects/classical-civilisation/'
LIT = 'version2/subjects/latin/literature/'
QUIZ = '/version2/tools/quiz/'
DASH = '/version2/tracking/dashboard.html?course='

COURSES = [
    (CIV + 'myth-and-religion/index.html', {'id': 'civ-myth', 'subject': 'civ', 'level': 'GCSE', 'code': 'OCR J199/11', 'quiz': QUIZ + 'myth-and-religion.html', 'track': DASH + 'civ-gcse'}),
    (CIV + 'the-homeric-world/index.html', {'id': 'civ-homeric', 'subject': 'civ', 'level': 'GCSE', 'code': 'OCR J199/21', 'quiz': QUIZ + 'the-homeric-world.html', 'track': DASH + 'civ-homeric'}),
    (CIV + 'roman-city-life/index.html', {'id': 'civ-rome', 'subject': 'civ', 'level': 'GCSE', 'code': 'OCR J199/22', 'quiz': None, 'track': None}),
    (CIV + 'war-and-warfare/index.html', {'id': 'civ-war', 'subject': 'civ', 'level': 'GCSE', 'code': 'OCR J199/23', 'quiz': None, 'track': None}),
    (CIV + 'the-odyssey/index.html', {'id': 'civ-odyssey', 'subject': 'civ', 'level': 'A-level', 'code': 'OCR H408/11', 'quiz': None, 'tester': '/version2/subjects/classical-civilisation/the-odyssey/tester.html', 'track': DASH + 'civ-alevel'}),
    (CIV + 'greek-art/index.html', {'id': 'civ-art', 'subject': 'civ', 'level': 'A-level', 'code': 'OCR H408/24', 'quiz': None, 'track': None}),
    (CIV + 'greek-religion/index.html', {'id': 'civ-religion', 'subject': 'civ', 'level': 'A-level', 'code': 'OCR H408/31', 'quiz': None, 'track': None}),
    (CIV + 'politics-of-the-late-republic/index.html', {'id': 'civ-politics', 'subject': 'civ', 'level': 'A-level', 'code': 'OCR H408/33', 'quiz': None, 'track': None}),
]
SETTEXTS = [
    (LIT + 'gcse/cupid-and-psyche/index.html', {'id': 'lat-cupid', 'subject': 'latin', 'level': 'GCSE', 'code': 'OCR J282/03', 'reader': 'settext'}),
    (LIT + 'gcse/aeneid-2/index.html', {'id': 'lat-aeneid2', 'subject': 'latin', 'level': 'GCSE', 'code': 'OCR J282/05', 'reader': 'settext'}),
    (LIT + 'gcse/baucis-et-philemon/index.html', {'id': 'lat-baucis', 'subject': 'latin', 'level': 'GCSE', 'code': 'OCR J282/04', 'reader': 'settext', 'archive': 'Cycle 4 · examined 2025 and 2026'}),
    (LIT + 'alevel/nepos-hannibal/index.html', {'id': 'lat-nepos', 'subject': 'latin', 'level': 'A-level', 'code': 'OCR H443/02', 'reader': 'parallel'}),
    (LIT + 'alevel/aeneid-4/index.html', {'id': 'lat-aeneid4', 'subject': 'latin', 'level': 'A-level', 'code': 'OCR H443/03', 'reader': 'parallel'}),
]

def main():
    data = {
        'subjects': {
            'latin': parse_subject('version2/subjects/latin/index.html', 'latin'),
            'greek': parse_subject('version2/subjects/greek/index.html', 'greek'),
            'civ': parse_subject('version2/subjects/classical-civilisation/index.html', 'civ'),
        },
        'courses': [parse_hub(rel, meta) for rel, meta in COURSES],
        'settexts': [parse_settext(rel, meta) for rel, meta in SETTEXTS],
    }
    out = os.path.join(ROOT, 'version2/assets/data/courses.json')
    with open(out, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    for c in data['courses']:
        print('%-14s %-32s topics %2d  lessons %3d  written %3d' % (c['id'], strip_tags(c['title']), len(c['topics']), c['counts']['lessons'], c['counts']['written']))
    for t in data['settexts']:
        print('%-14s %-32s sections %d' % (t['id'], strip_tags(t['title']), t['counts']['sections']))
    for k, s in data['subjects'].items():
        print('%-14s levels %d groups %d' % (k, len(s['levels']), sum(len(l['groups']) for l in s['levels'])))

if __name__ == '__main__':
    main()
