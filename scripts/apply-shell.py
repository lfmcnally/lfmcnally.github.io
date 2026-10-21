#!/usr/bin/env python3
"""Apply the shared shell (header + footer) to every page that carries its own
hand-copied <nav class="nav"> / <footer class="footer">.

For each page:
  * the <nav class="nav">…</nav> block is removed and
    <div data-shell="header" data-active="…"></div> is inserted as the first
    thing inside <body>;
  * <footer class="footer">…</footer> becomes <div data-shell="footer"></div>;
  * shell.css and shell.js are added to <head> once.

Skips the tracking app (sidebar shell), admin, the saved skin copy and the
homepage (replaced separately). Safe to re-run.

Usage:  python3 scripts/apply-shell.py [--dry-run] [paths…]
"""
import re, sys, os, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP = ('version2/tracking/', 'version2/admin/', 'version2/assets/', 'version2/index.html')
CSS = '<link rel="stylesheet" href="/version2/assets/css/shell.css">'
JS = '<script src="/version2/assets/js/shell.js" defer></script>'

ACTIVE_BY_TEXT = {'latin': 'latin', 'greek': 'greek', 'class. civ.': 'civ', 'classical civilisation': 'civ', 'tools': 'tools'}

def active_for(nav_html, path):
    m = re.search(r'<a[^>]*class="nav-link active"[^>]*>([^<]*)</a>', nav_html)
    if m:
        return ACTIVE_BY_TEXT.get(m.group(1).strip().lower(), '')
    rel = path.replace(ROOT + '/', '')
    if '/subjects/latin/' in rel: return 'latin'
    if '/subjects/greek/' in rel: return 'greek'
    if '/subjects/classical-civilisation/' in rel: return 'civ'
    if '/tools/' in rel: return 'tools'
    return ''

def transform(src, path):
    if 'data-shell="header"' in src:
        return src, False
    nav = re.search(r'\n?[ \t]*<nav class="nav">.*?</nav>[ \t]*\n?', src, re.S)
    if not nav:
        return src, False
    active = active_for(nav.group(0), path)
    out = src[:nav.start()] + '\n' + src[nav.end():]
    # header placeholder right after <body …>
    body = re.search(r'<body[^>]*>', out)
    if not body:
        return src, False
    placeholder = '\n<div data-shell="header" data-active="%s"></div>' % active
    out = out[:body.end()] + placeholder + out[body.end():]
    # footer: replace the hand-copied one, or add one before </body> if the page had none
    out, n = re.subn(r'<footer class="footer">.*?</footer>', '<div data-shell="footer"></div>', out, flags=re.S)
    if n == 0 and 'data-shell="footer"' not in out and '</body>' in out:
        out = out.replace('</body>', '<div data-shell="footer"></div>\n</body>', 1)
    # head includes
    if CSS not in out:
        if '</head>' in out:
            out = out.replace('</head>', CSS + '\n' + JS + '\n</head>', 1)
    return out, True

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    dry = '--dry-run' in sys.argv
    if args:
        files = []
        for a in args:
            files += glob.glob(os.path.join(ROOT, a), recursive=True) if '*' in a else [os.path.join(ROOT, a)]
    else:
        files = glob.glob(os.path.join(ROOT, 'version2/**/*.html'), recursive=True) + glob.glob(os.path.join(ROOT, 'auth/*.html'))
    changed = 0
    for f in sorted(set(files)):
        rel = f.replace(ROOT + '/', '')
        if any(rel.startswith(s) for s in SKIP):
            continue
        src = open(f, encoding='utf-8').read()
        out, did = transform(src, f)
        if did:
            changed += 1
            if not dry:
                open(f, 'w', encoding='utf-8').write(out)
            print(('would change ' if dry else 'changed ') + rel)
    print('%d file(s) %s' % (changed, 'would change' if dry else 'changed'))

if __name__ == '__main__':
    main()
