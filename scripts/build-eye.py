#!/usr/bin/env python3
"""Check the Examiner's eye data and write its page.

Examiner's eye is a library of real answers to OCR's A Level Latin 15-mark
literature question: the handwritten scripts OCR published as exemplars, its
typed candidate-style answers and the extracts quoted in its examiners'
reports, each with the examiner's mark and commentary. Every answer is typed
out and tagged with the moves examiners reward and the problems they mark
down, and the page (/version2/assets/js/examiners-eye.js) is built from those
tags: marking practice, an X-ray of each answer, the problems with the
examiners' own words and "level up" drills, benchmarks and a print pack.

Reads  version2/subjects/latin/literature/alevel/examiners-eye/data/exemplars.json
Writes version2/subjects/latin/literature/alevel/examiners-eye/index.html

The build stops on anything it cannot check, so broken data is never published.

Usage:  python3 scripts/build-eye.py
"""
import os, sys, json, importlib.util

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('bc', os.path.join(ROOT, 'scripts/build-content.py'))
bc = importlib.util.module_from_spec(spec); spec.loader.exec_module(bc)

HREF = '/version2/subjects/latin/literature/alevel/examiners-eye/'
DIR = os.path.join(ROOT, HREF.strip('/'))

MOVES = ['quote', 'translate', 'device', 'effect', 'link']
PROBLEMS = ['isolated', 'narrative', 'undeveloped', 'offquestion', 'mistranslation']
COMMENT_KINDS = PROBLEMS + ['range', 'timing', 'quotation', 'focus', 'coverage']
KINDS = ['script', 'typed', 'extract']

def check(d):
    errors = []
    qids = {q['id'] for q in d['questions']}
    for q in d['questions']:
        for k in ('paper', 'number', 'author', 'work', 'question', 'passage'):
            if not q.get(k): errors.append('question %s: no %s' % (q.get('id'), k))
    seen = set()
    for e in d['exemplars']:
        i = e.get('id')
        if i in seen: errors.append('duplicate exemplar %s' % i)
        seen.add(i)
        if e.get('question') not in qids: errors.append('exemplar %s: unknown question %r' % (i, e.get('question')))
        if e.get('kind') not in KINDS: errors.append('exemplar %s: kind %r' % (i, e.get('kind')))
        if e.get('kind') != 'extract' and not isinstance(e.get('mark'), int): errors.append('exemplar %s: no mark' % i)
        if e.get('mark') is not None and not 0 <= e['mark'] <= 15: errors.append('exemplar %s: mark %r' % (i, e['mark']))
        if e.get('kind') != 'typed' and not e.get('images'): errors.append('exemplar %s: no images' % i)
        for im in e.get('images', []):
            if not os.path.exists(os.path.join(DIR, im)): errors.append('exemplar %s: missing image %s' % (i, im))
        if not e.get('commentary'): errors.append('exemplar %s: no commentary' % i)
        segs = e.get('segments', [])
        if not segs: errors.append('exemplar %s: no transcript' % i)
        for s in segs:
            if s.get('br'): continue
            if not s.get('t'): errors.append('exemplar %s: empty segment' % i)
            for t in s.get('tags', []):
                if t not in MOVES + PROBLEMS: errors.append('exemplar %s: unknown tag %r' % (i, t))
    for r in d['drills']:
        for k in ('id', 'problem', 'context', 'weak', 'strong', 'source', 'why'):
            if not r.get(k): errors.append('drill %s: no %s' % (r.get('id'), k))
        if r.get('problem') not in PROBLEMS: errors.append('drill %s: problem %r' % (r.get('id'), r.get('problem')))
    for c in d['comments']:
        if c.get('problem') not in COMMENT_KINDS: errors.append('comment: problem %r (%s)' % (c.get('problem'), c.get('text', '')[:40]))
        if not c.get('text') or not c.get('source'): errors.append('comment: no text or source')
    return errors

def write_page():
    t = next(x for x in bc.DATA['settexts'] if x['id'] == 'lat-nepos')
    sub = bc.SUBJECTS['latin']
    body = '''<main id="main" data-eye="%(href)sdata/exemplars.json">
  <div class="inner phead">
    %(crumbs)s
    <div class="ptitle">
      <div><h1>Examiner’s eye</h1><div class="sub">Real answers to OCR’s 15-mark literature question, with the marks and comments the examiners gave them: handwritten scripts from the exam, OCR’s typed model answers and the extracts quoted in its reports. Mark them yourself, see exactly what earns the marks, and practise turning a weak point into a strong one.</div></div>
    </div>
    <nav class="tabs ee-tabs" aria-label="Examiner’s eye">
      <a href="#answers" data-eye-tab="answers">Answers</a>
      <a href="#problems" data-eye-tab="problems">What loses marks</a>
      <a href="#benchmarks" data-eye-tab="benchmarks">Benchmarks</a>
      <a href="#print" data-eye-tab="print">Print for a class</a>
    </nav>
  </div>
  <div class="inner page">
    <div data-eye-view="answers"></div>
    <div data-eye-view="problems" hidden></div>
    <div data-eye-view="benchmarks" hidden></div>
    <div data-eye-view="print" hidden></div>
    <p class="ee-credit">The scripts, answers, marks and commentaries are OCR’s, from its exemplar candidate work, candidate style answers and examiners’ reports for A Level Latin H443/03 and H443/04, reproduced for teaching with acknowledgement to OCR. The typed versions of the handwritten scripts and the tags are Classicalia’s.</p>
  </div>
</main>''' % dict(href=HREF, crumbs=bc.crumbs([(sub['label'], sub['href']), ('A-level Latin', sub['href'] + bc.LEVEL_ANCHOR['A-level'])]))
    html_ = bc.page('Examiner’s eye: the 15-mark question — A-level Latin — Classicalia',
                    'Real answers to OCR’s A Level Latin 15-mark literature question with the examiners’ marks and comments: marking practice, an X-ray of what earns the marks, the commonest weaknesses and how to fix them.',
                    HREF, sub['active'], body, '<link rel="stylesheet" href="/version2/assets/css/examiners-eye.css">\n',
                    '<script src="/version2/assets/js/examiners-eye.js" defer></script>\n')
    bc.write(HREF.lstrip('/') + 'index.html', html_)

if __name__ == '__main__':
    d = json.load(open(os.path.join(DIR, 'data/exemplars.json'), encoding='utf-8'))
    errors = check(d)
    if errors:
        print('examiners-eye/data/exemplars.json:\n  ' + '\n  '.join(errors), file=sys.stderr)
        sys.exit(1)
    write_page()
    full = [e for e in d['exemplars'] if e['kind'] != 'extract']
    print('examiners-eye: %d questions, %d answers (%d full, %d extracts), %d drills, %d comments' % (
        len(d['questions']), len(d['exemplars']), len(full), len(d['exemplars']) - len(full), len(d['drills']), len(d['comments'])))
