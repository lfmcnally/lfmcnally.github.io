#!/usr/bin/env python3
"""Separate a vocabulary headword from a meaning that was stored on the end
of it ("gravis, -e heavy, serious, deep" -> "gravis, -e" + "heavy, serious,
deep") in every set-text section file. Where the word already had a meaning,
the text taken off the headword goes in front of it. Safe to run again."""
import json, glob, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LABEL = re.compile(r'\b(?:m|f|n|c|adj|adv|conj|prep|pron|interj|indecl|pl|sg|dep|impers|intr|tr|defect|num|rel|interrog|refl|dem|poss)\.|\b(?:defective|verb|noun|pronoun|adjective|adverb|conjunction|preposition|interjection|indeclinable|reflexive|interrogative|relative|demonstrative|possessive|impersonal|deponent|enclitic|particle)\b')
ENCLITIC = re.compile(r'\+ -(?:que|ne|ve)(?: \([^)]*\))?')

def split_head(v):
    """Headword tokens end with a comma until the last one; what follows is the meaning.
    A parenthesised group right after a headword token stays with the headword when it
    is a label like (f.) or (prep. + abl.), an alternative form like (honor) or
    (sui, sibi, se), or ends with a comma so the headword carries on. An enclitic
    written '+ -que (conj.)' joins the headword wherever it appears."""
    toks = (v or '').split()
    if not toks: return v or '', ''
    i = 0
    while True:
        while i < len(toks) and toks[i].endswith(','): i += 1
        if i >= len(toks): return v, ''
        i += 1                  # the last headword token
        carry_on = False
        while i < len(toks) and toks[i].startswith('('):
            j = i
            while j < len(toks) and not re.search(r'\),?$', toks[j]): j += 1
            group = ' '.join(toks[i:j + 1])
            inner = group.rstrip(',')[1:-1]
            if group.endswith(',') or LABEL.search(group) or '+' in group or ',' in inner or re.fullmatch(r'[A-Za-z\-]+', inner):
                i = j + 1
                if group.endswith(','): carry_on = True; break
            else: break
        if not carry_on: break
    head, rest = ' '.join(toks[:i]), ' '.join(toks[i:])
    m = ENCLITIC.search(rest)
    if m:
        head += ' ' + m.group(0)
        rest = rest.replace(m.group(0), '').strip(' ,;')
    return head, rest

def join_meaning(extra, m):
    if not m: return extra
    if not extra or extra in m: return m
    return extra + (' ' if extra.endswith((')', ';', ':')) else '; ') + m

def main():
    changed = 0
    for f in sorted(glob.glob(os.path.join(ROOT, 'version2/subjects/latin/literature/*/*/data/section-*.json'))):
        d = json.load(open(f, encoding='utf-8'))
        n = 0
        for u in d['units']:
            for r in u['rows']:
                for w in r['words']:
                    if w.get('v'):
                        head, extra = split_head(w['v'])
                        if extra:
                            w['v'], w['m'] = head, join_meaning(extra, w.get('m', '')); n += 1
        if n:
            json.dump(d, open(f, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
            changed += n
    print('%d headword(s) split' % changed)

if __name__ == '__main__':
    main()
