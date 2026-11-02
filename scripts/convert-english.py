#!/usr/bin/env python3
"""One-off: pull the old English interactive texts (english/interactive/<author>/)
into one JSON file per text under version2/subjects/english/data/.

The JSON is then the source of truth: edit it and run
    python3 scripts/build-english.py
to rebuild the reading pages. This script is kept for reference only; running it
again would overwrite any edits made to the JSON since.

Needs node (to read the old analysis-data.js files) and BeautifulSoup.
"""
import json
import os
import re
import subprocess
import sys

from bs4 import BeautifulSoup, NavigableString, Tag

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OLD = os.path.join(ROOT, 'english', 'interactive')
OUT = os.path.join(ROOT, 'version2', 'subjects', 'english', 'data')

# order, new slug, old folder, and the hub card text
TEXTS = [
    ('the-danger-of-a-single-story', 'adichie', 'The Danger of a Single Story', 'Chimamanda Ngozi Adichie', 'TED talk',
     'A TED talk about how stereotypes are made and kept alive. Adichie uses her own stories to challenge the assumptions we make about other people.'),
    ('a-passage-to-africa', 'alagiah', 'A Passage to Africa', 'George Alagiah', 'Memoir',
     'War reporting from Somalia that questions the ethics of journalism and confronts uncomfortable truths about watching human suffering.'),
    ('the-explorers-daughter', 'herbert', "The Explorer's Daughter", 'Kari Herbert', 'Travel writing',
     'Watching a narwhal hunt in Greenland, Herbert weighs childhood memories against an adult understanding of Arctic survival.'),
    ('explorers-or-boys-messing-about', 'morris', 'Explorers or boys messing about?', 'Steven Morris', 'Newspaper article',
     'A news article about a costly helicopter rescue in Antarctica. Morris uses irony and scepticism to ask whether these men are really explorers.'),
    ('between-a-rock-and-a-hard-place', 'ralston', 'Between a Rock and a Hard Place', 'Aron Ralston', 'Autobiography',
     'The true story of the moment a boulder trapped Ralston’s arm in a remote canyon, told with mounting tension.'),
    ('young-and-dyslexic', 'zephaniah', "Young and dyslexic? You've got it going on", 'Benjamin Zephaniah', 'Newspaper article',
     'An article about overcoming prejudice at school and seeing dyslexia as a creative advantage, built on personal anecdote and humour.'),
    ('a-game-of-polo-with-a-headless-goat', 'levine', 'A Game of Polo with a Headless Goat', 'Emma Levine', 'Travel writing',
     'A chaotic and funny account of a donkey race in Karachi. Vivid description captures the thrilling anarchy of the event.'),
    ('beyond-the-sky-and-the-earth', 'zeppa', 'Beyond the Sky and the Earth', 'Jamie Zeppa', 'Travel writing',
     'A young Canadian teacher’s first impressions of Bhutan’s overwhelming landscape, written with wonder and poetic language.'),
    ('h-is-for-hawk', 'macdonald', 'H is for Hawk', 'Helen Macdonald', 'Memoir',
     'A grieving woman meets her goshawk for the first time. Mythical imagery and physical description capture a life-changing moment.'),
    ('chinese-cinderella', 'mah', 'Chinese Cinderella', 'Adeline Yen Mah', 'Autobiography',
     'A neglected daughter finally wins her father’s approval through success at school in 1950s Hong Kong.'),
]

PAVLS = ['purpose', 'audience', 'voice', 'language', 'structure']
ALAGIAH_CATS = {'s': 'style', 'c': 'context', 'v': 'voice', 'r': 'reader'}

RALSTON_IMAGES = {'chockstone': 'chockstone.jpg', 'stem': 'stemming.jpg', 'chimneying': 'chimneying.jpg'}


def squash(s):
    return re.sub(r'\s+', ' ', s or '').strip()


def unquote(s):
    """Drop quotation marks round a whole quotation; the reader adds its own."""
    s = squash(s)
    if len(s) > 1 and s[0] in '"\'\u201c\u2018' and s[-1] in '"\'\u201d\u2019':
        s = s[1:-1].strip()
    return s


def esc(s):
    return (s or '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def esc_attr(s):
    return esc(s).replace('"', '&quot;')


def load_js_data():
    js = r'''
const fs=require('fs'),vm=require('vm'),out={};
for (const d of process.argv.slice(1)){
  let f=d+'/data/analysis-data.js'; if(!fs.existsSync(f)) f=d+'/data/analysis-data.html';
  const ctx={}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(f,'utf8')+';this.__r={t:typeof textData!=="undefined"?textData:{},v:typeof vocabData!=="undefined"?vocabData:{}};',ctx);
  out[d]=ctx.__r;
}
process.stdout.write(JSON.stringify(out));
'''
    folders = [t[1] for t in TEXTS if t[1] != 'alagiah']
    res = subprocess.run(['node', '-e', js] + folders, cwd=OLD, capture_output=True, text=True, check=True)
    return json.loads(res.stdout)


def split_device(device):
    """'Language - Imagery' -> 'Imagery'; 'Vocabulary' -> ''."""
    parts = re.split(r'\s+[-–—]\s+', device or '', maxsplit=1)
    return squash(parts[1]) if len(parts) == 2 else ''


def inline_html(node, conv):
    """Serialise a paragraph's children into the reader's own markup."""
    out = []
    for ch in node.children:
        if isinstance(ch, NavigableString):
            out.append(esc(str(ch)))
            continue
        if not isinstance(ch, Tag):
            continue
        cls = ch.get('class', [])
        if 'paragraph-number' in cls:
            continue
        if 'word-container' in cls:
            num = ch.select_one('.number')
            vid = num.get('data-vocab') if num else ''
            if num:
                num.extract()
            word = squash(ch.get_text())
            out.append('<span class="vw" data-v="%s">%s</span>' % (esc_attr(vid), esc(word)))
            continue
        if 'highlight' in cls:
            nid = ch.get('data-analysis')
            cat = next((c for c in cls if c in PAVLS), None)
            if cat is None:   # Ralston's "multi-analysis": file it under its first listed element
                cat = 'purpose'
            conv['cats'][nid] = cat
            out.append('<span class="hl" data-n="%s" data-cat="%s">%s</span>' % (esc_attr(nid), cat, inline_html(ch, conv)))
            continue
        if ch.name == 'sup':
            out.append('')   # footnote markers become vocabulary links (handled per text)
            continue
        if ch.name in ('em', 'i', 'strong', 'b'):
            tag = 'em' if ch.name in ('em', 'i') else 'b'
            out.append('<%s>%s</%s>' % (tag, inline_html(ch, conv), tag))
            continue
        out.append(inline_html(ch, conv))
    return ''.join(out)


def tidy(html):
    return re.sub(r'\s+', ' ', html).strip()


def convert_pavls(folder, data):
    soup = BeautifulSoup(open(os.path.join(OLD, folder, 'index.html'), encoding='utf-8').read(), 'lxml')
    conv = {'cats': {}}
    h2 = squash(soup.select_one('.section-title').get_text()) if soup.select_one('.section-title') else ''
    h3 = soup.select_one('.text-panel > h3')
    source = squash(h3.get_text()) if h3 else ''

    context, standfirst, paras = '', '', []
    n = 0
    for p in soup.select('.english-text .paragraph'):
        if not p.select_one('.paragraph-number'):
            style = p.get('style', '')
            if 'background' in style:
                context = squash(p.get_text())
            else:
                standfirst = squash(p.get_text())
            continue
        n += 1
        num = squash(p.select_one('.paragraph-number').get_text()).strip('[]') or str(n)
        paras.append({'n': num, 'html': tidy(inline_html(p, conv))})

    t, v = data['t'], data['v']
    notes = {}
    for nid, cat in conv['cats'].items():
        d = t.get(nid)
        if not d:
            print('  missing note', folder, nid, file=sys.stderr)
            continue
        notes[nid] = {
            'cat': cat,
            'quote': unquote(d.get('title')),
            'gist': squash(d.get('translation')),
            'device': split_device(d.get('device')),
            'what': squash(d.get('description')),
            'effect': squash(d.get('effect')),
        }
    vocab = {}
    for vid, d in v.items():
        if isinstance(d, str):
            vocab[vid] = {'word': vid, 'meaning': squash(d)}
        else:
            e = {'word': squash(d.get('title')) or vid, 'meaning': squash(d.get('translation'))}
            if d.get('description'):
                e['note'] = squash(d.get('description'))
            if d.get('effect'):
                e['effect'] = squash(d.get('effect'))
            vocab[vid] = e
        if folder == 'ralston' and vid in RALSTON_IMAGES:
            vocab[vid]['img'] = '/version2/subjects/english/images/' + RALSTON_IMAGES[vid]

    if folder == 'morris':
        vocab['falmouth'] = {'word': 'Falmouth', 'meaning': 'a coastal town in Cornwall, England'}
        for p in paras:
            p['html'] = p['html'].replace('Falmouth coastguard', '<span class="vw" data-v="falmouth">Falmouth</span> coastguard')

    overview = []
    for cat in PAVLS:
        det = soup.select_one('#%s-detail' % cat)
        if not det:
            continue
        head = squash(det.find('h4').get_text()) if det.find('h4') else cat.title()
        head = re.sub(r'^\w+\s+[-–—]\s+', '', head)
        intro = det.find('p')
        points = []
        for ex in det.select('.pavls-example'):
            lab = ex.find('strong')
            q = ex.select_one('.pavls-quote')
            points.append({'label': squash(lab.get_text()).rstrip(':') if lab else '', 'text': squash(q.get_text()) if q else ''})
        overview.append({'cat': cat, 'heading': head, 'intro': squash(intro.get_text()) if intro else '', 'points': points})

    journey = None
    js = soup.select_one('.journey-section')
    if js:
        stages = []
        for st in js.select('.journey-stage'):
            letters = [i.get_text().strip().lower() for i in st.select('.pavls-indicator')]
            cats = [c for c in PAVLS if c[0] in letters]
            stages.append({'title': squash(st.select_one('.journey-stage-title').get_text()),
                           'desc': squash(st.select_one('.journey-stage-desc').get_text()), 'cats': cats})
        journey = {'title': squash(js.select_one('.journey-title').get_text()), 'stages': stages}

    return {'source': source, 'heading': h2, 'context': context, 'standfirst': standfirst,
            'paragraphs': paras, 'notes': notes, 'vocab': vocab, 'overview': overview, 'journey': journey}


def convert_alagiah():
    soup = BeautifulSoup(open(os.path.join(OLD, 'alagiah', 'index.html'), encoding='utf-8').read(), 'lxml')
    notes, paras, k = {}, [], 0

    def walk(node):
        nonlocal k
        out = []
        for ch in node.children:
            if isinstance(ch, NavigableString):
                out.append(esc(str(ch)))
            elif isinstance(ch, Tag) and ch.name == 'mark':
                k += 1
                nid = 'a%d' % k
                cat = ALAGIAH_CATS.get((ch.get('class') or ['s'])[0], 'style')
                inner = walk(ch)
                notes[nid] = {'cat': cat, 'quote': unquote(ch.get_text()), 'gist': squash(ch.get('data-dev')),
                              'device': '', 'what': squash(ch.get('data-body')), 'effect': ''}
                out.append('<span class="hl" data-n="%s" data-cat="%s">%s</span>' % (nid, cat, inner))
            elif isinstance(ch, Tag):
                out.append(walk(ch))
        return ''.join(out)

    for para in soup.select('.text-card .para'):
        num = squash(para.select_one('.pnum').get_text())
        paras.append({'n': num, 'html': tidy(walk(para.select_one('.ptext')))})
    return {'source': 'Extract from A Passage to Africa (2001)', 'heading': 'A Passage to Africa', 'context': '',
            'standfirst': '', 'paragraphs': paras, 'notes': notes, 'vocab': {}, 'overview': [], 'journey': None}


def main():
    os.makedirs(OUT, exist_ok=True)
    js = load_js_data()
    for i, (slug, folder, title, author, form, blurb) in enumerate(TEXTS):
        body = convert_alagiah() if folder == 'alagiah' else convert_pavls(folder, js[folder])
        doc = {'slug': slug, 'order': i + 1, 'old': folder, 'title': title, 'author': author, 'form': form, 'blurb': blurb,
               'categories': 'alagiah' if folder == 'alagiah' else 'pavls'}
        doc.update(body)
        if folder == 'adichie':
            doc['extras'] = [{'label': 'Lesson 1 slides', 'href': '/english/interactive/adichie/lesson.html'}]
        with open(os.path.join(OUT, slug + '.json'), 'w', encoding='utf-8') as f:
            json.dump(doc, f, ensure_ascii=False, indent=1)
        print('%-40s %2d paragraphs %3d notes %2d words' % (slug, len(doc['paragraphs']), len(doc['notes']), len(doc['vocab'])))


if __name__ == '__main__':
    main()
