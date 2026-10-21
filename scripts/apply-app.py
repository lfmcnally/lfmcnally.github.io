#!/usr/bin/env python3
"""Put the app pages (testers, quizzes, builders, tracking dashboards, profile,
sign-in, admin) on the shared shell and the app stylesheet.

  * pages that still carry their own header/footer get the shell placeholders
    (the tracking app keeps its sidebar; the site header sits above it)
  * every page gets app.css after its other stylesheets
  * the starfield canvases in the navy page heads go, and starfield.js with
    them when nothing else on the page uses it

Full-screen pages (the games, the visualiser) are left alone. Safe to re-run.

Usage:  python3 scripts/apply-app.py [--dry-run]
"""
import re, os, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHELL_CSS = '<link rel="stylesheet" href="/version2/assets/css/shell.css">'
APP_CSS = '<link rel="stylesheet" href="/version2/assets/css/app.css">'
SHELL_JS = '<script src="/version2/assets/js/shell.js" defer></script>'
TEACH = ('tracking/teacher.html', 'tracking/do-now.html', 'tracking/bank.html', 'tracking/weekly-test.html', 'tracking/quick-mark.html')
SKIP = ('tools/game/', 'tools/visualiser.html', 'tools/index.html', 'tracking/course.html')

def strip_block(src, start_tag):
    """Remove the element that starts with `start_tag` (balanced on div tags)."""
    i = src.find(start_tag)
    if i < 0: return src
    depth, j = 0, i
    for m in re.finditer(r'<(/?)(?:div|section)\b[^>]*>', src[i:]):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            j = i + m.end(); break
    return src[:i].rstrip(' \t') + src[j:]

def active_for(rel):
    if any(rel.endswith(t) for t in TEACH): return 'teach'
    if '/tools/' in rel: return 'tools'
    return ''

def transform(src, rel):
    out = src
    # shell placeholders on pages that still have their own frame
    if 'data-shell="header"' not in out:
        body = re.search(r'<body[^>]*>', out)
        if not body: return src
        out = out[:body.end()] + '\n<div data-shell="header" data-active="%s"></div>' % active_for(rel) + out[body.end():]
        out, n = re.subn(r'<footer class="footer">.*?</footer>', '<div data-shell="footer"></div>', out, flags=re.S)
        if n == 0 and '</body>' in out:
            i = out.rfind('</body>')   # the last one: a script may hold the text of another page
            out = out[:i] + '<div data-shell="footer"></div>\n' + out[i:]
        if SHELL_CSS not in out:
            out = out.replace('</head>', SHELL_CSS + '\n' + SHELL_JS + '\n</head>', 1)
    # the app stylesheet, after the shell's
    if APP_CSS not in out:
        out = out.replace(SHELL_CSS, SHELL_CSS + '\n' + APP_CSS, 1)
    # no starfield in the page head, and no support band with one at the foot
    out = re.sub(r'\n?[ \t]*<canvas class="header-sky"[^>]*></canvas>', '', out)
    m = re.search(r'<(?:div|section) class="support-band[^"]*"', out)
    if m: out = strip_block(out, m.group(0))
    out = out.replace('<!-- SUPPORT BAND -->\n', '')
    if 'data-starfield' not in out and 'Starfield' not in re.sub(r'<script src="[^"]*starfield\.js"></script>', '', out):
        out = re.sub(r'\n?[ \t]*<script src="/version2/assets/js/starfield\.js"></script>', '', out)
    return out

def main():
    dry = '--dry-run' in sys.argv
    files = glob.glob(os.path.join(ROOT, 'version2/tools/**/*.html'), recursive=True) + \
            glob.glob(os.path.join(ROOT, 'version2/tracking/*.html')) + glob.glob(os.path.join(ROOT, 'version2/admin/*.html')) + \
            glob.glob(os.path.join(ROOT, 'auth/*.html')) + [os.path.join(ROOT, p) for p in ('version2/profile.html', 'version2/friends.html')]
    changed = 0
    for f in sorted(set(files)):
        rel = f.replace(ROOT + '/', '')
        if any(s in rel for s in SKIP): continue
        src = open(f, encoding='utf-8').read()
        out = transform(src, rel)
        if out != src:
            changed += 1
            if not dry: open(f, 'w', encoding='utf-8').write(out)
            print(('would change ' if dry else 'changed ') + rel)
    print('%d file(s) %s' % (changed, 'would change' if dry else 'changed'))

if __name__ == '__main__':
    main()
