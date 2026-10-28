#!/usr/bin/env python3
"""Check each set text's Examiner's eye answers and write its page.

Examiner's eye is a set of practice answers to OCR's 15-mark literature
question on one set text, written for Classicalia at every level of OCR's
grid and marked against it. Each answer is tagged with the moves examiners
reward and the problems they mark down, and the page
(/version2/assets/js/examiners-eye.js) is built from those tags: marking
practice, an X-ray of each answer, what loses marks (with OCR's examiners'
comments on the question type and "level up" drills), benchmarks and a print
pack.

Reads  <text>/data/eye-bank.json      the answers and drills
       <text>/data/exam.json          the Latin and the 15-mark questions (scripts/build-exam.py)
       version2/assets/data/eye-comments.json   OCR's examiners' comments
Writes <text>/data/eye.json and <text>/examiners-eye.html

An answer is a list of paragraphs, marked up with {tags|text}:
  {quote|si verum est, quod nemo dubitat} {translate|‘if it is true, as no one doubts’}
Tags: quote translate device effect link (what earns marks) and
isolated narrative undeveloped offquestion mistranslation (what loses them).
Every quotation must be in the passage, so no answer quotes Latin the
student was not given. The build stops on anything it cannot check.

Usage:  python3 scripts/build-eye.py
"""
import os, re, sys, json, importlib.util

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('bc', os.path.join(ROOT, 'scripts/build-content.py'))
bc = importlib.util.module_from_spec(spec); spec.loader.exec_module(bc)

TEXTS = [('lat-nepos', 'version2/subjects/latin/literature/alevel/nepos-hannibal/'),
         ('lat-aeneid4', 'version2/subjects/latin/literature/alevel/aeneid-4/')]
MOVES = ['quote', 'translate', 'device', 'effect', 'link']
PROBLEMS = ['isolated', 'narrative', 'undeveloped', 'offquestion', 'mistranslation']
COMMENT_KINDS = PROBLEMS + ['range', 'timing', 'quotation', 'focus', 'coverage']
WIDTH = 78   # characters in a printed line of prose
SOURCE = 'Practice answer written for Classicalia and marked against OCR’s level descriptors'

def norm(s):
    s = s.lower().replace('j', 'i').replace('v', 'u')
    return ' '.join(re.findall(r'[a-z]+', s))

def segments(paras):
    """'{quote device|…} plain …' paragraphs -> [{'t', 'tags'}, {'br': True}, …]"""
    out = []
    for n, p in enumerate(paras):
        if n: out.append({'br': True})
        pos = 0
        for m in re.finditer(r'\{([a-z ]+)\|([^{}]*)\}', p):
            if m.start() > pos: out.append({'t': p[pos:m.start()], 'tags': []})
            out.append({'t': m.group(2), 'tags': m.group(1).split()})
            pos = m.end()
        if pos < len(p): out.append({'t': p[pos:], 'tags': []})
    return out

def passage(ex, e):
    """The Latin of a 15-mark question, as the lines of the printed passage."""
    ws = ex['words'][e['start']:e['end'] + 1]
    if ex['mode'] == 'verse':
        lines, cur, last = [], [], None
        for i, w in zip(range(e['start'], e['end'] + 1), ws):
            if last is not None and ex['wline'][i] != last: lines.append(' '.join(cur)); cur = []
            cur.append(w); last = ex['wline'][i]
        lines.append(' '.join(cur))
        p = ex['paper']
        a, b = ex['wline'][e['start']], ex['wline'][e['end']]
        return lines, '%s, %s.%d–%d' % (p['author'], p['work'], a, b), 'Lines %d–%d' % (a, b)
    lines, cur = [], ''
    for w in ws:
        if cur and len(cur) + 1 + len(w) > WIDTH: lines.append(cur); cur = w
        else: cur = (cur + ' ' + w).strip()
    lines.append(cur)
    def chap(i): return next(s['chapter'] for s in ex['sections'] if s['start'] <= i <= s['end'])
    a, b = chap(e['start']), chap(e['end'])
    p = ex['paper']
    return lines, '%s, %s %s' % (p['author'], p['work'], a if a == b else a + '–' + b), ('Chapter ' + a if a == b else 'Chapters %s–%s' % (a, b))

def build(tid, href):
    base = os.path.join(ROOT, href)
    ex = json.load(open(os.path.join(base, 'data/exam.json'), encoding='utf-8'))
    bank = json.load(open(os.path.join(base, 'data/eye-bank.json'), encoding='utf-8'))
    comments = json.load(open(os.path.join(ROOT, 'version2/assets/data/eye-comments.json'), encoding='utf-8'))
    essays = {e['id']: e for e in ex['essays']}
    p = ex['paper']
    errors, questions, normed = [], {}, {}

    def question(qid, who):
        if qid in questions: return True
        e = essays.get(qid)
        if not e: errors.append('%s: no 15-mark question %r in exam.json' % (who, qid)); return False
        lines, cite, where = passage(ex, e)
        questions[qid] = {'id': qid, 'paper': 'In the style of OCR %s %s, %s' % (p['level'], p['code'], p['name']),
                          'author': p['author'], 'work': cite.split(', ', 1)[1], 'where': where, 'question': 'In this passage, ' + e['q'],
                          'instruction': 'You should refer both to the content and to the language of the passage.',
                          'passage': lines, 'lineStart': 1, 'cite': cite}
        normed[qid] = ' ' + norm(' '.join(lines)) + ' '
        return True

    def in_passage(qid, latin):
        parts = [norm(x) for x in re.split(r'…|\.\.\.', latin)]
        return all(x and (' ' + x + ' ') in normed[qid] for x in parts if x) and any(parts)

    answers, seen = [], set()
    for a in bank['answers']:
        i = a.get('id')
        if i in seen: errors.append('duplicate answer %s' % i)
        seen.add(i)
        if not question(a.get('question'), 'answer %s' % i): continue
        if not isinstance(a.get('mark'), int) or not 0 <= a['mark'] <= 15: errors.append('answer %s: mark %r' % (i, a.get('mark')))
        if not a.get('commentary'): errors.append('answer %s: no commentary' % i)
        segs = segments(a.get('text', []))
        if not segs: errors.append('answer %s: no text' % i)
        for s in segs:
            if s.get('br'): continue
            if '{' in s['t'] or '}' in s['t']: errors.append('answer %s: stray brace in %r' % (i, s['t'][:50]))
            for t in s['tags']:
                if t not in MOVES + PROBLEMS: errors.append('answer %s: unknown tag %r' % (i, t))
            if 'quote' in s['tags'] and not in_passage(a['question'], s['t']):
                errors.append('answer %s: quotation not in the passage: %r' % (i, s['t']))
        answers.append({'id': i, 'question': a['question'], 'kind': 'practice', 'source': SOURCE,
                        'mark': a.get('mark'), 'segments': segs, 'commentary': a.get('commentary')})

    drills = []
    for r in bank['drills']:
        for k in ('id', 'problem', 'question', 'weak', 'strong', 'why'):
            if not r.get(k): errors.append('drill %s: no %s' % (r.get('id'), k))
        if r.get('problem') not in PROBLEMS: errors.append('drill %s: problem %r' % (r.get('id'), r.get('problem')))
        if not question(r.get('question'), 'drill %s' % r.get('id')): continue
        if r.get('latin') and not in_passage(r['question'], r['latin']): errors.append('drill %s: Latin not in the passage: %r' % (r['id'], r['latin']))
        q = questions[r['question']]
        drills.append(dict(r, context='%s: %s' % (q['cite'], q['question']), source=r.get('source', 'Written for Classicalia')))

    for c in comments:
        if c.get('problem') not in COMMENT_KINDS: errors.append('comment: problem %r' % c.get('problem'))
        if not c.get('text') or not c.get('source'): errors.append('comment: no text or source')
    for q in questions.values():
        n = sum(1 for a in answers if a['question'] == q['id'])
        if n and n < 2: errors.append('question %s: only one answer' % q['id'])
    if errors:
        print('%sdata/eye-bank.json:\n  %s' % (href, '\n  '.join(errors)), file=sys.stderr)
        sys.exit(1)
    data = {'text': p['title'], 'questions': list(questions.values()), 'exemplars': answers, 'drills': drills, 'comments': comments}
    with open(os.path.join(base, 'data/eye.json'), 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    write_page(tid, href, p)
    print('%s: %d questions, %d answers, %d drills, %d comments' % (href.rstrip('/').split('/')[-1], len(questions), len(answers), len(drills), len(comments)))

def write_page(tid, href, p):
    t = next(x for x in bc.DATA['settexts'] if x['id'] == tid)
    sub = bc.SUBJECTS['latin']
    url = '/' + href + 'examiners-eye.html'
    body = '''<main id="main" data-eye="/%(href)sdata/eye.json">
  <div class="inner phead">
    %(crumbs)s
    <div class="ptitle">
      <div><h1>Examiner’s eye</h1><div class="sub">Answers to the 15-mark question on %(title)s at every level of OCR’s grid, each with its mark and why it earned it. Mark them yourself, X-ray them to see exactly what earns the marks, and practise turning a weak point into a strong one.</div></div>
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
    <div class="ee-credit">
      <p><b>Sources.</b> The answers, marks, commentaries and drills were written for Classicalia and marked against OCR’s level descriptors for the 15-mark question; they are practice answers, not real candidates’ scripts. The examiners’ comments under “What loses marks” are quoted from OCR’s examiners’ reports on H443/03 for the Summer 2024, 2025 and 2026 series.</p>
      <p>OCR’s small print: “You can copy and distribute this resource freely if you keep the OCR logo and this small print intact and you acknowledge OCR as the originator of the resource.” OCR is part of Cambridge University Press &amp; Assessment. Visit <a href="https://www.ocr.org.uk/">ocr.org.uk</a> for the original documents.</p>
    </div>
  </div>
</main>''' % dict(href=href, title=t['title'], crumbs=bc.crumbs([(sub['label'], sub['href']), ('A-level Latin', sub['href'] + bc.LEVEL_ANCHOR['A-level']), (t['title'], t['href'])]))
    html_ = bc.page('Examiner’s eye: the 15-mark question — %s — Classicalia' % t['title'],
                    'Practice answers to OCR’s A Level Latin 15-mark question on %s at every level, with marks and comments: marking practice, an X-ray of what earns the marks, the commonest weaknesses and how to fix them.' % t['title'],
                    url, sub['active'], body, '<link rel="stylesheet" href="/version2/assets/css/examiners-eye.css">\n',
                    '<script src="/version2/assets/js/examiners-eye.js" defer></script>\n')
    bc.write(href + 'examiners-eye.html', html_)

if __name__ == '__main__':
    only = sys.argv[1:]
    for tid, href in TEXTS:
        if os.path.exists(os.path.join(ROOT, href, 'data/eye-bank.json')) and (not only or any(o in href for o in only)):
            build(tid, href)
