#!/usr/bin/env python3
"""Write sitemap.xml from the files on disk.

Included: the homepage and every public content page under version2
(subject, course and lesson pages, set texts, tools, about) plus the pages
outside version2 that the older sitemap already listed and that still exist.
Left out: redirect stubs, pages marked noindex, the tracking app, admin,
profile, friends and the sign-in pages.

Usage:  python3 scripts/build-sitemap.py
"""
import os, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://classicalia.co.uk'
EXCLUDE = ('version2/tracking/', 'version2/admin/', 'version2/assets/', 'version2/profile.html', 'version2/friends.html', 'version2/tools/game/')

def public(rel):
    if any(rel.startswith(e) for e in EXCLUDE): return False
    try:
        head = open(os.path.join(ROOT, rel), encoding='utf-8', errors='ignore').read(4000)
    except OSError:
        return False
    if 'http-equiv="refresh"' in head or 'name="robots" content="noindex"' in head: return False
    return True

def url_for(rel):
    if rel.endswith('/index.html'): rel = rel[:-len('index.html')]
    if rel == 'index.html': rel = ''
    return SITE + '/' + rel

def main():
    urls = set()
    urls.add(SITE + '/')
    for f in glob.glob(os.path.join(ROOT, 'version2/**/*.html'), recursive=True):
        rel = f.replace(ROOT + '/', '')
        if public(rel): urls.add(url_for(rel))
    # keep the older site's pages the previous sitemap listed, where they still exist
    old = open(os.path.join(ROOT, 'sitemap.xml'), encoding='utf-8').read() if os.path.exists(os.path.join(ROOT, 'sitemap.xml')) else ''
    for loc in re.findall(r'<loc>([^<]+)</loc>', old):
        rel = loc.replace(SITE + '/', '')
        if rel.startswith('version2') or rel.startswith('auth/') or rel == '': continue
        path = os.path.join(ROOT, rel if rel else 'index.html')
        if os.path.isdir(path): path = os.path.join(path, 'index.html')
        if os.path.exists(path): urls.add(loc)
    out = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    out += ['  <url><loc>%s</loc></url>' % u for u in sorted(urls)]
    out.append('</urlset>\n')
    open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf-8').write('\n'.join(out))
    print('%d urls' % len(urls))

if __name__ == '__main__':
    main()
