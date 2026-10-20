# Classicalia as a learning platform: the concept

> **Status:** concept. Companion to `SITE_REVIEW.md` (the evidence). The visual version of this document, with styled screens of each product area, is `docs/redesign/concept.html`.

## The idea

Classicalia is a free learning platform for Classics: a library you can read, a practice engine that remembers you, and a classroom that runs on both. One product across Latin, Greek and Classical Civilisation, for students and teachers, from KS3 to A-level.

Today the site is a collection of good things built one at a time: a marketing site, hundreds of revision pages in six templates, two vocab testers, three quiz engines, a dashboard app with its own sidebar, a teacher app, a tools page and an admin area. Each works. Together they read as separate sites, because each has its own navigation, its own layout and its own idea of what "progress" means.

The way out is to stop thinking of the site as pages and start thinking of it as three products that share one account, one content model and one design: **Revise**, **Practise** and **Teach**. Subject and level stop being places you navigate to and become a setting that follows you everywhere. Every piece of content becomes a typed item in one library with one reader. Every practice activity becomes a mode of one engine with one progress model. Every teacher action happens in one workspace that can set any library item or practice scope to any class.

What this is not: a set of course pages. A student taking GCSE Latin and GCSE Classical Civilisation has one library view, one practice page, one progress page and one list of set work. The course is a filter on each of them, never a place with its own layout.

## The three products

**Revise.** One library of everything readable, browsable by subject, level and topic, searchable, every item in the same reader. Item types: notes (the revision pages), set texts with the parallel reader, reading guides and workbooks, videos, exam skills and past-question banks, vocabulary and grammar reference. Every item carries the same metadata (type, subject, level, exam board, topic, length, status) and is shown with the same card everywhere: in the library, in search, on a student's home, in a teacher's set-work picker. An item that is not written is not in the library, so honest coverage is automatic.

**Practise.** One engine, one memory. Modes: vocabulary (any list), grammar and endings, content questions, set-text vocabulary and comprehension, and games as a presentation of the same questions. Every answer goes into one mastery store, so one map describes a student across subjects, and a teacher's homework, a live Do Now and a student's own revision are the same activity with different scopes. The Practise page opens with Smart practice: a session built from the student's weakest and overdue items across every subject they take.

**Teach.** One workspace for a teacher's classes, running on the same library and engine their students use. Classes with join codes. Set work is one action with one picker: anything in the library, any practice scope, or a test written here or taken from the bank, plus a class and a date. Results is one list of everything set. Insights sit on the class overview and every insight ends in a button that sets something. Classroom tools (live Do Now console, visualiser, printables) are a tab in Teach. Teacher resources (mark schemes, schemes of work, slides) are library items visible only to verified teachers.

Underneath sits one account (subjects and levels, progress across all of them, classes, friends) and one home: a front door when signed out, the student's day when signed in.

## The shell

Signed out: a white top bar with Revise, Practise, Teach, search and sign in. Signed in: a navy left rail with Home, Revise, Practise, Progress (and Teach for teachers), with search and account in a top bar. The content area is identical in both. Nothing else on the site has its own navigation; tabs appear only inside a screen (a class page), sidebars only for a document's own contents. On a phone the rail becomes a four-item bottom bar.

The starfield and the drawn wordmark remain the brand, used where brand belongs: the signed-out home, the About page, printed covers. Everywhere else the surfaces are light and quiet.

## Screens

Described in full, with styled mocks, in `docs/redesign/concept.html`:

1. **Home, signed out**: one sentence, a subject and level picker that sets the global context, the three products, a teacher band, one support ask.
2. **Revise**: the context chips (subjects, levels, type), a Continue row, then the library by subject with the universal item card; a side column with "practise what you're reading" and "set by your teacher".
3. **The reader**: contents on the left, body in the middle, "practise this" and "next up" on the right; the body changes by item type, the frame never does.
4. **Practise**: Smart practice across subjects first, then by type and subject, then work set by teachers, including a live Do Now.
5. **Home, signed in**: today across subjects (live, due, continue), a ring per subject with the next step, three numbers.
6. **Teach, a class**: overview with insights that act, open work, and tabs for Students, Set work, Results, Resources.
7. **Phone**: bottom bar; the reader folds its contents into a control above the text.

## The design language

A reading room rather than a night sky.

- **Colour.** Navy for chrome and the one primary action per screen. White panels on a light ground. Three subject colours (Latin, Greek, Classical Civilisation) as the organising device: a stripe on every card, a label on every page, the fill of every progress ring and bar. Progress states (not yet, working on it, secure) are the only other colours.
- **Type.** One reading face for headings, notes and Latin and Greek text; one interface face. Base size 16 to 17px; reading measure about 65 characters. The drawn wordmark is the only lettering outside the two faces.
- **Rules.** One shell. One card. One reader. One primary action per screen. Light surfaces, with the starfield reserved for home, About and print covers. Phone first for students: bottom bar, one column, nothing that only works on hover. Print is a feature.

## What moves where

| Today | Becomes |
|---|---|
| Homepage, About curtain | Home (signed out) with the subject and level picker; About as a page |
| Three subject hubs, eight component hubs, five set-text contents pages | Revise, filtered. Subject and level views are the library with a filter applied |
| 332 revision pages in three templates; 66 set-text pages in three readers; Odyssey guides; booklet PDFs; videos | Library items in one reader. Stubs are not items |
| Two vocab testers, three quiz pages, grammar gym, endings drills, practice test, games | Practise: one engine with modes; games as a presentation of the same questions |
| Student dashboard, to-do, profile's progress cards | Home (today) and Progress (the long view), across subjects |
| Teacher dashboard, Do Now console, weekly tests, bank, quick mark, homework modal | Teach: classes with Overview, Students, Set work, Results, Resources; one picker; one results list |
| Tools page | Classroom tools inside Teach; student tools inside Practise |
| Admin, plans | Unchanged, reached from the account menu |
| Legacy root folders, `/version2/` paths | Redirects to the nearest item; a branded 404 |

## Getting there

1. **The library index.** Describe every real piece of content in one manifest (type, subject, level, topic, URL, written or not). Build Revise and search on top of the existing pages. The subject and level picker arrives here.
2. **The shell.** One header and rail on every page, rendered from one definition; account state visible everywhere; dead links gone.
3. **The reader.** One template for notes, guides, set texts, workbooks and videos; existing pages migrated into it; print built in.
4. **The engine.** One practice engine and mastery store behind every mode; Smart practice and Progress across subjects; games on the same questions.
5. **Teach.** The class workspace, the single set-work picker, the single results list, join codes, teacher verification.
6. **Addresses and hygiene.** Clean URLs at the root, redirects for everything old, a build step that generates the site from the manifest so it stays consistent.

## Decisions this needs

- Three products (Revise, Practise, Teach) with subject and level as a global setting, rather than pages per course.
- A product shell (rail when signed in) instead of the marketing header on every page.
- Subject colours as the site's organising device.
- One reader and one practice engine, which means retiring the existing templates and testers as content migrates.
- Clean URLs at the root with redirects.
- A build step driven by a content manifest.
