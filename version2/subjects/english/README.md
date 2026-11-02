# English: the non-fiction anthology

Ten GCSE English Language texts, each on one reading page with every
highlighted phrase explained. The contents page is `index.html`; each text
lives at `<slug>/index.html`.

**Edit the JSON in `data/`, not the HTML**, then run

    python3 scripts/build-english.py

to rebuild the contents page and every reading page. Run
`python3 scripts/build-sitemap.py` if you add a text.

The old pages under `/english/interactive/` now forward here (look for the
`classicalia-retired` block at the top of each). `scripts/convert-english.py`
is the one-off script that pulled them into the JSON; running it again would
overwrite any edits made to the JSON since.

## A text file

```json
{
  "slug": "the-explorers-daughter", "order": 3, "old": "herbert",
  "title": "The Explorer's Daughter", "author": "Kari Herbert", "form": "Travel writing",
  "blurb": "One or two sentences for the card on the contents page.",
  "categories": "pavls",                 // or "alagiah" for A Passage to Africa's own four lenses
  "source": "the line under the title",
  "context": "the 'Before you read' panel, optional",
  "standfirst": "a newspaper sub-headline shown in italics above the text, optional",
  "paragraphs": [
    { "n": "1", "html": "Two hours after … <span class=\"hl\" data-n=\"spectral-play\" data-cat=\"language\">the plumes of spray …</span> … <span class=\"vw\" data-v=\"mattak\">mattak</span> …" }
  ],
  "notes": {
    "spectral-play": { "cat": "language", "device": "Imagery", "gist": "Magical imagery",
                       "quote": "the plumes of spray …", "what": "What the writer is doing.", "effect": "The effect on the reader." }
  },
  "vocab": { "mattak": { "word": "mattak", "meaning": "…", "note": "optional", "effect": "optional", "img": "optional URL" } },
  "overview": [ { "cat": "purpose", "heading": "Why Herbert Wrote This", "intro": "…", "points": [ { "label": "…", "text": "…" } ] } ],
  "journey": { "title": "…", "stages": [ { "title": "…", "desc": "…", "cats": ["voice", "language"] } ] },
  "extras": [ { "label": "Lesson 1 slides", "href": "…" } ]
}
```

- A highlight is `<span class="hl" data-n="NOTE-ID" data-cat="CATEGORY">words</span>`.
  Highlights can sit inside one another. An empty one (no words) shows as a
  small **?** button, which A Passage to Africa uses for its reader-response
  questions.
- A word with a meaning is `<span class="vw" data-v="VOCAB-ID">word</span>`.
- `overview`, `journey`, `vocab`, `context` and `extras` are all optional.

**Categories** (`cat`), one colour each:

| set | keys |
|---|---|
| `pavls` | `purpose`, `audience`, `voice`, `language`, `structure` |
| `alagiah` | `style`, `context`, `narrative`, `reader` |

Labels and the one-line hints shown in the side column live in `CATS` at
the top of `scripts/build-english.py`; colours are in
`/version2/assets/css/english-reader.css`.
