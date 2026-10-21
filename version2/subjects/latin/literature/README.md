# Set texts

Each text has a contents page (`index.html`), one reading page per section
(`section-N.html`) and, in `data/`, one JSON file per section that the
reading page is built from. **Edit the JSON, not the HTML**, then run

    python3 scripts/build-settext.py

to rebuild every reading page (and `python3 scripts/build-sitemap.py` if a
section was added).

## A section file

```json
{
  "text": "aeneid-2", "section": 1, "mode": "verse",
  "title": "Section 1 · lines 1–13", "subtitle": "Aeneas begins his story",
  "units": [
    { "id": 1,
      "en": "…",                       // the unit's English, when it is one block (A-level texts)
      "en_marked": "[But|1] the [queen|2] …",   // the same with [word|latin id] links, optional
      "rows": [
        { "n": "1",                    // line number; "" for prose
          "en": "They all fell silent…",        // the row's English, when English is line by line
          "words": [
            { "w": "cōnticuere͜",                 // the word as printed
              "v": "conticesco, -ere, -ticui",   // dictionary form   (side column)
              "m": "fall silent",                // meaning           (side column)
              "p": "3rd person plural, perfect", // parsing           (side column)
              "g": "verb",                       // job in the sentence, for the grammar colours
              "o": 3,                            // reading order, optional
              "id": 5,                           // links this word to [text|5] in en_marked, optional
              "notes": ["n1-0"] } ] } ] } ],
  "notes": [
    { "id": "n1-0", "cat": "order", "label": "Advancement",
      "quote": "conticuere", "trans": "", "line": 1,
      "body": "The verb comes first: the silence falls before we know who is silent.",
      "exam": "" } ]
}
```

A **unit** is what one click reveals: a sentence (or a sense unit of a long
sentence) in verse, a row in prose.

**Style-note categories** (`cat`), one colour each:

| cat | shown as | covers |
|---|---|---|
| `order` | Word order | hyperbaton, chiasmus, parallelism, enjambement, juxtaposition, promotion and delay, framing |
| `structure` | Repetition and structure | anaphora, tricolon, polysyndeton and asyndeton, variatio, polyptoton, antithesis, climax, ring composition |
| `sound` | Sound and metre | alliteration, assonance, sibilance, elision, rhythm, onomatopoeia, wordplay |
| `diction` | Word choice | epithet, loaded or elevated diction, diminutive, euphemism, periphrasis, poetic plural, Graecism |
| `imagery` | Imagery and tone | simile, metaphor, personification, pathos, irony, apostrophe, hyperbole, litotes, atmosphere |
| `grammar` | Grammar | vivid present, tense choice, ablative absolute, gerundive, superlative, subjunctive |
| `note` | Note | a plain gloss on the text; shown under "Notes on the text", not among the style keys |

`label` is the specific device ("Hyperbaton"); it is shown on the note.
To attach a note to words, put its `id` in each word's `notes` list.

**Grammar colours** (`g`): `subj`, `obj`, `verb`, `gen`, `dat`, `abl`,
`prep`, `conj`, `adv`, `voc`, `gdv`. Leave it out where it does not apply.

`scripts/convert-settext.py` produced these files from the previous pages
and data; it is kept for reference and need not be run again.
