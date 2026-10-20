# Classicalia: redesign and restructuring proposal

> **Status:** design proposal. Companion to `SITE_REVIEW.md` (the evidence) and successor to the navigation part of `PRODUCT_OVERHAUL_PLAN.md`.
> **What this is:** the shape of Classicalia as one educational website: its site map, navigation, URL structure, the layout of every major page type, the visual direction, and the content model that makes the layouts maintainable.
> **Wireframes:** `docs/redesign/wireframes.html` draws each layout below at desktop and phone width.

---

## 1. The idea in one page

Today the site is organised around **features**: a catalogue of exam components, a dashboard, a tools page, a tracking app with its own sidebar. Each grew its own front door. A student doing GCSE Latin meets the same course in four places with four looks: the Latin hub, the set-text pages, the vocab tester and the dashboard.

The proposal organises everything around the **course**: the thing a student is actually sitting and a teacher is actually teaching. There are about a dozen of them (GCSE Latin, A-level Latin, KS3 Latin, GCSE Greek, A-level Greek, and the Classical Civilisation components). Every course gets **one page** that is the hub for everything about it, with five tabs:

```
  COURSE PAGE  ·  e.g. GCSE Latin
  ┌──────────┬──────────┬──────────┬──────────┬──────────┐
  │ Overview │  Learn   │ Practise │  Tests   │ Progress │
  └──────────┴──────────┴──────────┴──────────┴──────────┘
   start here   lessons    testers    homework   your map
   what's due   set texts  grammar    Do Now     weak spots
   next step    topics     quizzes    marked     by topic
                           games      work
```

The same page serves all three audiences:

- **A visitor** sees Overview, Learn and Practise. Everything is browsable and indexable. The Tests and Progress tabs invite them to sign in.
- **A student** signed in sees all five, plus a "today" strip at the top of Overview: what is due, what to do next. The current dashboard becomes the Progress tab. Nothing is lost; it moves inside the course.
- **A teacher** sees the same page their students see (so they can find anything a student can) and, from their class page, can set any lesson, set text or tester from it as work.

Around the course page sit four thin layers: a **home** that is a front door when signed out and "My courses" when signed in; three **subject pages** that are course choosers; a **teach** area for classes; and a **tools** catalogue for classroom utilities. One header on every page. No sidebar app.

That is the whole restructuring. Everything else in this document is the consequence of it.

---

## 2. Site map

### 2.1 Proposed

```
/                         Home: front door (signed out) · My courses (student) · My classes (teacher)
/about/                   About (the curtain content, as a page)
/latin/                   Subject page: choose a course
/greek/
/classical-civilisation/
/latin/gcse/              COURSE PAGE  (Overview · Learn · Practise · Tests · Progress)
/latin/gcse/learn/        the Learn tab, addressable
/latin/gcse/practise/
/latin/gcse/tests/
/latin/gcse/progress/
/latin/gcse/texts/aeneid-2/            set text contents
/latin/gcse/texts/aeneid-2/1/          set text section
/latin/gcse/vocab/                     the vocab tester, framed by the course
/latin/alevel/ … /latin/ks3/ … /greek/gcse/ … /greek/alevel/
/classical-civilisation/gcse/myth-and-religion/        course page
/classical-civilisation/gcse/myth-and-religion/lessons/the-gods/
/classical-civilisation/gcse/myth-and-religion/quiz/
/classical-civilisation/gcse/homeric-world/ … /roman-city-life/ … /war-and-warfare/
/classical-civilisation/alevel/odyssey/ … /greek-art/ … /greek-religion/ … /politics/
/tools/                   Classroom tools (teacher) and a "Practise" shelf that points into courses
/tools/exam-builder/ … /tools/starter-sheet/ … /tools/visualiser/ … /tools/look-cover-write-check/
/teach/                   Teacher: class list
/teach/classes/{id}/      Class page (Overview · Students · Set work · Results · Resources)
/teach/do-now/            Live Do Now console (also reachable from a class)
/teach/mark/              Quick mark
/account/                 Profile, courses, sharing code, password
/friends/
/admin/
/sign-in/ · /sign-up/ · /reset-password/
```

### 2.2 How today's pages map onto it

| Today | Becomes |
|---|---|
| `version2/index.html` | `/` (role-aware) |
| About curtain | `/about/` (keep the curtain on home as a shortcut if wanted) |
| `subjects/latin/index.html` (exam catalogue) | `/latin/` course chooser; the catalogue detail moves into each course's Overview |
| `subjects/classical-civilisation/greek-art/index.html` (component hub) | `/classical-civilisation/alevel/greek-art/` Learn tab |
| `tracking/dashboard.html?course=X` | that course's Progress tab, plus the "today" strip on Overview |
| `tracking/todo.html` | Tests tab (per course) and the set-work list on home |
| `tools/vocab/latinvocabtester.html` | `/latin/gcse/vocab/`, `/latin/alevel/vocab/` etc. (one tester, framed by the course) |
| `tools/quiz/*.html`, `the-odyssey/tester.html` | `/classical-civilisation/…/{course}/quiz/` (one quiz page) |
| `tools/grammar/*`, games | the course's Practise tab, and the Tools "Practise" shelf |
| `tracking/teacher.html` | `/teach/` and `/teach/classes/{id}/` |
| `tracking/do-now.html` | `/teach/do-now/`, launched from a class |
| `tools/do-now.html` | `/tools/starter-sheet/` (renamed) |
| `tracking/weekly-test.html`, `bank.html` (assign) | Class page → Set work → Test |
| `tracking/quick-mark.html` | `/teach/mark/` |
| `tracking/bank.html` (take), `weekly-test-take.html` | Tests tab of the course |
| `profile.html` | `/account/` |
| `admin/*` | `/admin/` unchanged, reached from the account menu |
| legacy root folders | redirected to the nearest course page; `404.html` for the rest |

---

## 3. Navigation model

### 3.1 One header, three states

```
 ┌──────────────────────────────────────────────────────────────────────────────┐
 │ CLASSICALIA     Latin   Greek   Class. Civ.   Tools   About        [Sign in] │  signed out
 ├──────────────────────────────────────────────────────────────────────────────┤
 │ CLASSICALIA   [My courses ▾]  Latin  Greek  Class. Civ.  Tools      (LM) ▾   │  student
 ├──────────────────────────────────────────────────────────────────────────────┤
 │ CLASSICALIA   [My classes ▾]  Latin  Greek  Class. Civ.  Tools      (LM) ▾   │  teacher
 └──────────────────────────────────────────────────────────────────────────────┘
```

- The header is the same component everywhere, rendered from one definition. No page carries its own copy.
- Signed in, the first item becomes a **switcher**: My courses (student) or My classes (teacher). It is a dropdown listing the student's courses with a small progress mark against each, and "Add a course". This replaces the sidebar: the student's courses are one click away on every page, including deep inside a set text.
- The avatar menu holds Account, Friends, Teacher area or Admin, Sign out.
- "Support us" leaves the header. It lives in the About page, the support band on home and subject pages, and the footer. One ask per page.

### 3.2 Secondary navigation is always a tab bar

Three places need a second level, and all three use the same sticky tab bar under the page header:

- **Course page:** Overview · Learn · Practise · Tests · Progress
- **Class page (teacher):** Overview · Students · Set work · Results · Resources
- **Subject page:** GCSE · A-level · KS3 (anchors, as now)

The tab bar is the only secondary navigation pattern on the site. Sidebars are used for in-page contents only (a lesson's sections, a set text's sections), never for site navigation.

### 3.3 Breadcrumb

Every page below a subject shows a breadcrumb in the page header: `Classical Civilisation › GCSE › The Homeric World › Key Sites › Mycenae`. Each crumb is a link. This replaces the eyebrow text that currently carries exam codes.

### 3.4 Phone

- Header collapses to logo, switcher and a menu button. The menu lists subjects, Tools, About and the account items.
- Course and class tab bars become a horizontally scrolling strip under the header, sticky.
- In-page sidebars become a collapsible "On this page" panel above the content.

---

## 4. URL structure and leaving `/version2/`

The live site is served from `classicalia.co.uk/version2/` with a JavaScript redirect from the root. Every shared link, canonical and search result carries "version2". It reads as a beta and it is a permanent tax on every URL.

Proposal: move the site to the root with the clean paths in section 2, and leave `/version2/*` and the legacy folders as redirect stubs for a year. GitHub Pages cannot do server redirects, so each old path keeps a tiny HTML file with a meta refresh and a canonical to the new URL, generated by the build (section 8). The sitemap lists new URLs only.

URL rules:

- Lowercase, hyphenated, no `.html`, trailing slash (directory index). Course paths are `/{subject}/{level}/` for languages and `/{subject}/{level}/{component}/` for Classical Civilisation.
- Lessons: `/{course}/lessons/{slug}/`. Set texts: `/{course}/texts/{slug}/{n}/`.
- Tabs are addressable: `/{course}/learn/` etc., so a teacher can link a class straight to Practise.
- Lesson panels are addressable by hash: `/{course}/lessons/the-gods/#exam-focus`.

---

## 5. Page layouts

Each layout lists its purpose, its sections in order, how it changes by state, and what it replaces. ASCII wireframes are desktop; the HTML wireframes show phone as well.

### 5.1 Home, signed out

Purpose: say what Classicalia is in one sentence, get a visitor to their course in one click, and make the case for an account without shouting.

```
 ┌───────────────────────────────────────────────────────────────┐
 │ header                                                        │
 ├───────────────────────────────────────────────────────────────┤
 │  (navy, starfield)                                            │
 │        Free revision, practice and tracking for               │
 │        Latin, Greek and Classical Civilisation                │
 │        Written by a Classics teacher. No paywalls.            │
 │                                                               │
 │   WHAT ARE YOU STUDYING?                                      │
 │   ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐  │
 │   │ GCSE Latin   │ │ A-level Latin│ │ GCSE Greek           │  │
 │   │ 460 words ·  │ │ 1,127 words ·│ │ 383 words · tester   │  │
 │   │ 3 set texts  │ │ 2 set texts  │ │                      │  │
 │   └──────────────┘ └──────────────┘ └──────────────────────┘  │
 │   ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐  │
 │   │ Myth and     │ │ The Homeric  │ │ The Odyssey (A-level)│  │
 │   │ Religion     │ │ World        │ │ 14 lessons · tester  │  │
 │   └──────────────┘ └──────────────┘ └──────────────────────┘  │
 │   All courses: Latin · Greek · Classical Civilisation →       │
 ├───────────────────────────────────────────────────────────────┤
 │  HOW IT WORKS (cream)                                         │
 │  ┌─────────────────────────┐  ┌─────────────────────────┐     │
 │  │ For students            │  │ For teachers            │     │
 │  │ 1 Pick your course      │  │ 1 Make a class          │     │
 │  │ 2 Practise a little,    │  │ 2 Students join with a  │     │
 │  │   often                 │  │   code                  │     │
 │  │ 3 Your weak spots come  │  │ 3 Set work, see who is  │     │
 │  │   back until they stick │  │   stuck                 │     │
 │  │ [Create a free account] │  │ [Teacher accounts →]    │     │
 │  └─────────────────────────┘  └─────────────────────────┘     │
 │  (the interactive sample map sits here, as now)               │
 ├───────────────────────────────────────────────────────────────┤
 │  CLASSROOM TOOLS  (white)                                     │
 │  Exam paper builder · Starter sheets · Visualiser · Look      │
 │  Cover Write Check                                 Tools →   │
 ├───────────────────────────────────────────────────────────────┤
 │  SUPPORT BAND (as now, the one donation ask on the page)      │
 ├───────────────────────────────────────────────────────────────┤
 │  footer                                                       │
 └───────────────────────────────────────────────────────────────┘
```

What changes from today: one proposition instead of two; the course cards are the real courses with real counts rather than three subject doors; "How it works" has a teacher column; the About curtain is kept but the "400+ users" stats and credentials move to `/about/`; three of the four donation asks go.

### 5.2 Home, signed in (student): My courses

Purpose: the student's daily landing. Answer "what should I do now?" in the first screen.

```
 ┌───────────────────────────────────────────────────────────────┐
 │ header (My courses ▾)                                         │
 ├───────────────────────────────────────────────────────────────┤
 │  Good afternoon, Lara.                        [Add a course]  │
 │                                                               │
 │  TODAY                                                        │
 │  ┌─────────────────────────────┐ ┌───────────────────────────┐│
 │  │ ● Do Now is live · GCSE     │ │ Homework due Fri          ││
 │  │   Latin, ch. 4–6   [Join →] │ │ Myth: Festivals 12/20 ✔  ││
 │  └─────────────────────────────┘ └───────────────────────────┘│
 │                                                               │
 │  MY COURSES                                                   │
 │  ┌─────────────────────────────┐ ┌───────────────────────────┐│
 │  │ GCSE Latin                  │ │ Myth and Religion         ││
 │  │ ▇▇▇▇▇▇▇▇▇▇░░░░ 212/460 secure│ │ ▇▇▇▇▇░░░░░░░░ 3/8 topics ││
 │  │ Next: test my weak spots    │ │ Next: carry on The Gods   ││
 │  │ [Practise]  [Learn] [Progress]│ │ [Practise] [Learn] [...] ││
 │  └─────────────────────────────┘ └───────────────────────────┘│
 │                                                               │
 │  SET WORK (all courses)                      Friends · Account│
 │  ─ Weekly test 3 · GCSE Latin · due Mon · not started         │
 │  ─ Homework · Myth: Festivals · due Fri · 12/20               │
 └───────────────────────────────────────────────────────────────┘
```

What changes: this absorbs the dashboard's "Today" row and To-do into one cross-course view (today the Today row is per course and To-do does not show Do Nows). Profile's duplicated "To complete" and "Jump back in" cards go.

A teacher's home is the same frame with "My classes" cards (students, activity this week, needs attention count) and the set-work list across classes.

### 5.3 Subject page (Latin, Greek, Classical Civilisation)

Purpose: choose a course. Secondary: SEO landing for "GCSE Latin revision".

```
 ┌───────────────────────────────────────────────────────────────┐
 │ header                                                        │
 │ (navy, short) Latin                                           │
 │   Courses for KS3, GCSE and A-level, following OCR.           │
 ├───────────────────────────────────────────────────────────────┤
 │  GCSE · A-level · KS3   (tab anchors)                         │
 ├───────────────────────────────────────────────────────────────┤
 │  GCSE                                                         │
 │  ┌───────────────────────────────────────────────────────────┐│
 │  │ GCSE Latin                     OCR J282 · exams 2027–28   ││
 │  │ Language: 460-word vocab tester, grammar gym, endings     ││
 │  │ Literature: Cupid & Psyche · Aeneid II · (2 more planned) ││
 │  │ [Open course →]                                           ││
 │  └───────────────────────────────────────────────────────────┘│
 │  A-LEVEL                                                      │
 │  ┌───────────────────────────────────────────────────────────┐│
 │  │ A-level Latin                  OCR H443 · exams 2027–28   ││
 │  │ …                                                         ││
 │  └───────────────────────────────────────────────────────────┘│
 │  KS3                                                          │
 │  ┌───────────────────────────────────────────────────────────┐│
 │  │ KS3 Latin (Suburani)           321 words · chapters 1–16  ││
 │  └───────────────────────────────────────────────────────────┘│
 │  ▸ Planned (3)                                                │
 ├───────────────────────────────────────────────────────────────┤
 │  support band · footer                                        │
 └───────────────────────────────────────────────────────────────┘
```

What changes: one card per course instead of a row per exam component code; real counts; exam code and years as a small right-aligned note; set-text cycle shown as "exams 2027–28" with a link to the previous cycle inside the course, not here; the "Tools" pseudo-group goes (tools live in the course). For Classical Civilisation the cards are the components, grouped GCSE and A-level, each with its lesson count and "11 of 66 lessons written" where that is the truth.

### 5.4 Course page: the centre of the site

Purpose: everything about one course, for everyone. This is the page that most needs to be right, so each tab is specified.

**Page header** (navy, shorter than today's 230px: about 150px): breadcrumb, course title, one-line description, exam and year as a small note, and on the right a single action that depends on state: "Start practising" (visitor), "Test my weak spots" (student), "Set work for a class" (teacher).

**Tab bar** (sticky): Overview · Learn · Practise · Tests · Progress. Tests and Progress show a small lock glyph when signed out.

**Overview tab**

```
 ┌───────────────────────────────────────────────────────────────┐
 │ TODAY (signed in only)                                        │
 │ ┌───────────────┐ ┌───────────────┐ ┌───────────────────────┐ │
 │ │ Do Now        │ │ Set work      │ │ Your next step        │ │
 │ │ nothing live  │ │ 1 due Friday  │ │ Test weak spots ch1–6 │ │
 │ └───────────────┘ └───────────────┘ └───────────────────────┘ │
 │                                                               │
 │ START HERE (visitor and new student)                          │
 │ Three things to do first: 1 try the tester · 2 read the       │
 │ course map · 3 create an account to keep your progress        │
 │                                                               │
 │ COURSE MAP                                    ┌─────────────┐ │
 │ Language ─ 10 chapters · 460 words            │ THIS COURSE │ │
 │   ▇▇▇▇▇▇▇░░░ (progress when signed in)         │ 3 set texts │ │
 │ Literature ─ Cupid & Psyche · 12 sections     │ 460 words   │ │
 │              Aeneid II · 10 sections          │ 2 tools     │ │
 │              Baucis et Philemon · 6 sections  │ 1 game      │ │
 │ Exam ─ paper structure, timings, what counts  │ Exams 2027  │ │
 │                                               └─────────────┘ │
 │ CARRY ON (signed in): Aeneid II, section 4  →                 │
 └───────────────────────────────────────────────────────────────┘
```

**Learn tab**: the component hub as it is on the best current hubs (search box, accordion of topics, lesson rows), with three changes: rows show a state (written · coming soon · read ✔), the set texts appear as a second group with the exam cycle selector ("Exams 2027–28 ▾"), and each topic row ends with "Test yourself on this topic" when a quiz exists.

**Practise tab**: the course's tools as cards, generated from the course manifest: Vocab tester (with the weak-spots shortcut), Grammar gym, Noun and verb endings, Quiz (with "work through in order" and "pick a topic"), Game, Practice test. Each card says whether it saves progress to the account.

**Tests tab** (signed in): everything set by a teacher for this course, in one list with a type label: Homework, Do Now (live now), Test (weekly or from the bank; the student never sees the difference), with due dates and status. Empty state for a student with no class: "You're not in a class. Give your teacher your code, or ask them for the class code." with the code shown.

**Progress tab** (signed in): today's dashboard body: the confidence map, progress by chapter or topic, focus list, "Your next step" with the remembered range, activity. The legend is three states for students (not yet · working on it · secure, with "due for review" as a marker). The map is tappable.

**Visitor behaviour**: Tests and Progress render a short explanation and a sign-in button, with the tab still visible so the visitor learns the site has these.

### 5.5 Lesson page

Purpose: one topic, read in ten minutes, checked at the end. One template for every lesson on the site, taken from the Odyssey reading guides, which already do most of this.

```
 ┌───────────────────────────────────────────────────────────────┐
 │ header                                                        │
 │ (navy, compact ~120px)                                        │
 │  Class. Civ. › GCSE › The Homeric World › Key Sites           │
 │  Mycenae                                       1.2 · 8 min    │
 ├──────────────┬────────────────────────────────────────────────┤
 │ ON THIS PAGE │  At a glance                                   │
 │ ● At a glance│  [figure] [figure]                             │
 │   The site   │  Key facts                                     │
 │   Around the │  → Type … → Built … → Location …               │
 │   citadel    │  Why it matters                                │
 │   Interpret. │  …                                             │
 │   Exam focus │                                                │
 │   Flashcards │  (panels are hash-addressed; the sidebar       │
 │   Check ✔    │   highlights the current one)                  │
 │ ──────────── │                                                │
 │ IN THIS TOPIC│  ┌──────────────────────────────────────────┐  │
 │   1.0 Over.. │  │ TEST YOURSELF ON THIS LESSON             │  │
 │ ● 1.2 Mycenae│  │ 17 questions · [Start →]                 │  │
 │   1.3 Tiryns │  └──────────────────────────────────────────┘  │
 │   1.4 Troy   │  ┌───────────────┐          ┌───────────────┐  │
 │ ──────────── │  │ ← 1.1 Dating  │          │ 1.3 Tiryns →  │  │
 │ ← The course │  └───────────────┘          └───────────────┘  │
 ├──────────────┴────────────────────────────────────────────────┤
 │ footer                                                        │
 └───────────────────────────────────────────────────────────────┘
```

Rules for the template:

- Fixed section order: At a glance · the content panels · Interpretation · Exam focus · Flashcards · Check your reading. Every lesson has the same spine, so a student knows where the exam questions are on any page.
- Header is compact. Today's 230px navy header plus starfield on every lesson pushes the first fact to 290px on desktop and further on a phone. The full hero belongs on home and subject pages only.
- Reading time and lesson number in the header; "read ✔" recorded for signed-in students and shown on the Learn tab.
- "Test yourself" at the end, filtered to the lesson's subtopic, on every lesson that has quiz questions; otherwise the flashcards are the check.
- Images: one figure component with caption and lightbox, lazy-loaded, sized. No per-page CSS.
- Print stylesheet: sidebar hidden, panels expanded, one lesson per printout.
- Stub lessons do not get a page. The Learn tab shows them as "coming soon" rows that do not link.

### 5.6 Set text page

Purpose: read a prescribed text with support, then check understanding. One reader for all six texts, based on the A-level parallel reader, with the classroom presentation mode kept.

```
 ┌───────────────────────────────────────────────────────────────┐
 │ header                                                        │
 │ (navy, compact)  Latin › GCSE › Aeneid II                     │
 │  Section 1 · lines 1–13 · Aeneas begins his story             │
 │  [Contents] [← 0] [2 →]                 [Classroom mode]      │
 ├───────────────────────────────────────────────────────────────┤
 │  Text · Vocabulary · Notes · Questions      (tabs, sticky)    │
 ├───────────────────────────────────────────────────────────────┤
 │  TEXT                                                         │
 │  [Show English] [Style notes: on] [Step through]              │
 │  ┌──────────────────────────┬────────────────────────────┐    │
 │  │ 1 conticuere omnes…      │ All fell silent…           │    │
 │  │ 2 inde toro pater…       │ then father Aeneas…        │    │
 │  │   (hover/tap a word for  │ (hidden by default on      │    │
 │  │    vocab and parsing)    │  phone; tap a line to show)│    │
 │  └──────────────────────────┴────────────────────────────┘    │
 │  NOTES tab: the style notes by category, one list             │
 │  VOCABULARY tab: the section's words, with "test me on these" │
 │  QUESTIONS tab: comprehension, 8- and 10-mark style questions,│
 │                 translation check, scansion where verse        │
 │  ┌───────────────┐                          ┌───────────────┐ │
 │  │ ← Contents    │                          │ Section 2 →   │ │
 │  └───────────────┘                          └───────────────┘ │
 └───────────────────────────────────────────────────────────────┘
```

Rules: on a phone the English column collapses under each Latin line and is shown per line on tap, with a visible "tap a line to see the English" hint; section progress ("4 of 10 sections read") on the contents page for signed-in students; the vocabulary tab feeds the same mastery store as the tester, so set-text words count as progress.

### 5.7 Practise pages (tester, quiz, grammar, games)

Purpose: the tools keep their own interiors (they are good); they gain a common frame.

- Same header, with the course switcher; breadcrumb `Latin › GCSE › Vocab tester`.
- A **one-line status bar** under the header replaces the floating sync pill: "Saving to your account" or "Saved on this device · Sign in to keep it".
- Setup is one card with sensible defaults and a single "Start" button; the three numbered cards become collapsed "Change list · Change range · Change mode" controls after first use. Signed-in students land straight on "Your next step" (the weak-spots card), which exists today.
- End-of-session summary ends with two buttons: "Again" and "Back to GCSE Latin".
- One tester page serves Latin and Greek; one quiz page serves every Classical Civilisation course; the course is in the URL.
- Games keep their own full-screen world but open from the Practise tab and return to it.

### 5.8 Teacher: Classes and the class page

Purpose: give a teacher one place per class that answers "how are they doing?" and "what shall I set?" and lets them act without leaving.

**/teach/**: a card per class (name, course, students, active this week, needs attention count, next due item), "+ New class", and a "Join requests" strip if the join-code model is adopted. Same frame as the student home.

**/teach/classes/{id}/**

```
 ┌───────────────────────────────────────────────────────────────┐
 │ header (My classes ▾)                                         │
 │ (navy, compact) Teach › 11B Latin                             │
 │  11B Latin · GCSE Latin · 24 students · code LAT-4K7Q         │
 │                                              [Set work ▾]     │
 ├───────────────────────────────────────────────────────────────┤
 │  Overview · Students · Set work · Results · Resources         │
 ├───────────────────────────────────────────────────────────────┤
 │ OVERVIEW                                                      │
 │ ┌──────────┐┌──────────┐┌──────────┐┌──────────┐              │
 │ │ 24       ││ 61%      ││ 18       ││ ch. 6    │  stat tiles  │
 │ │ students ││ secure   ││ active   ││ reached  │              │
 │ └──────────┘└──────────┘└──────────┘└──────────┘              │
 │ ┌────────────────────────────┐ ┌────────────────────────────┐ │
 │ │ NEEDS ATTENTION            │ │ CLASS PROGRESS BY CHAPTER  │ │
 │ │ Sam · idle 9 days          │ │ 1 ▇▇▇▇▇▇▇▇▇ 2 ▇▇▇▇▇▇▇ …     │ │
 │ │ Priya · behind on ch. 5    │ │                            │ │
 │ │ [Set a Do Now on ch. 5]    │ │ [Set homework on ch. 6]    │ │
 │ └────────────────────────────┘ └────────────────────────────┘ │
 │ WORDS THE CLASS IS STRUGGLING WITH   [Set these 8 as homework]│
 │ STUDENTS: table (name · confidence · secure · struggling ·    │
 │   this week · last active) → student panel (as now)           │
 └───────────────────────────────────────────────────────────────┘
```

- **Set work** is one button with four kinds: Homework (a range or topic with a target), Do Now (the same, live now), Test (write questions, or pick from the bank; one editor), Reading (a lesson or set-text section with a due date). The current four authoring pages collapse into one flow.
- **Results** is one list that unions homework, Do Nows, weekly tests and bank tests, each row opening the existing breakdown. Export and print live here.
- **Resources** is the course's Learn and Practise content, each row with "Set as work". This is the missing bridge between teaching and content.
- Shortcuts from insight to action: every "needs attention" or "struggling words" card ends in a "Set …" button pre-filled with that scope.
- Quick mark sits at `/teach/mark/` and in the header's Tools; the printable starter-sheet builder is renamed and lives in Tools.
- The class word map and the student panel's map respond to tap. The student table scrolls inside its card on phones.

### 5.9 Tools catalogue

Two shelves, generated from the manifest so nothing is missing:

- **For the classroom** (teachers): Exam paper builder, Starter sheet builder, Look Cover Write Check, Visualiser, Live Do Now (opens Teach), Quick mark (opens Teach).
- **Practise** (students): one card per subject listing its testers, grammar tools, quizzes and games, each linking into the course's Practise tab.

### 5.10 About, account, auth, 404

- `/about/`: the curtain content as a page: the story, the credentials, the numbers, contact, support. The homepage keeps a short "About the project" link to it.
- `/account/`: profile, avatar, courses (the single place to choose them), sharing code, password. No homework or progress cards.
- Sign in and sign up keep the current design, with "continue where you were" (`?next=`) and a post-confirmation landing on "Choose your courses".
- `404.html`: branded, with the three subject links and a search box.

---

## 6. Visual design direction

The identity is good and should stay: navy and cream, Lora italic headings with DM Sans body, the constellation starfield, the restrained blue. The changes are about hierarchy and consistency, not a new look.

**Surface hierarchy.** Three surfaces, used the same way everywhere: navy for chrome and page headers; cream for the page; white for cards. Today the dashboard is on a grey app background, profile on cream, testers on white. One rule: body is cream, cards are white, the sidebar app background goes.

**Header weight.** Two header sizes. Full (hero with starfield, about 230px) on home and subject pages. Compact (about 120 to 150px, flat navy, starfield optional) on course pages, lessons, set texts, tools and teaching pages. The compact header carries breadcrumb, title, one line, one action. This single change makes every inner page feel lighter and puts content on the first screen on phones.

**Type scale.** One scale: display 46 (hero), title 32 (page), section 21, card title 16, body 14.5, small 12.5, kicker 10.5 uppercase tracked. Lora italic for display, title and section; DM Sans for everything else. The three slightly different kicker and card scales on dashboard, profile and to-do become one.

**Colour.** Keep navy, brand blue, ink, muted, rule, cream, paper. Darken the brand blue for text and solid buttons to pass contrast (today 4.41:1; something near `#1559d6` passes at 5.5:1). Progress states are the only other colours and mean one thing each: grey not yet, amber working on it, green secure, blue due for review. Red is for errors only, never a learning state.

**Components.** One of each, in `classicalia.css`: button (primary, secondary, quiet), card, tab bar, breadcrumb, stat tile, progress bar, confidence map cell, status pill, table, form field with label, modal, toast, empty state, pager, figure with caption. Every page composes these. No page defines its own.

**Icons.** The existing stroke SVG set from the sidebar, used everywhere. Emoji glyphs go.

**Motion and decoration.** The starfield stays static and decorative. Seasonal skins stay additive, scoped to the whole site rather than the homepage so there is no theme jump on the first click, with a reduced-motion guard.

**Density.** Teaching pages can be denser than learning pages. Student-facing pages hold to one idea per card and one action per card. Teacher pages may use tables and tiles, but still inside the same components.

**Phone.** Everything in sections 3.4 and 5 applies. Beyond that: minimum 44px tap targets, single-column grids under 700px, no fixed-position overlays except the status bar, tables scroll inside cards.

---

## 7. Content model and naming

One vocabulary, used in the interface, the URLs, the code and the database:

| Term | Meaning |
|---|---|
| Subject | Latin, Greek, Classical Civilisation |
| Course | the thing a student sits: GCSE Latin, The Homeric World |
| Topic | a group of lessons inside a course (Key Sites) |
| Lesson | one revision page |
| Set text | a prescribed text; has Sections |
| Practise | self-serve tools: tester, grammar, quiz, game |
| Homework | work set by a teacher with a target and a due date |
| Do Now | the live version of a homework drill |
| Test | anything marked against a mark scheme (teacher-written or from the bank) |
| Progress | mastery, activity and what is due |
| Class | a teacher's group; has a join code |

Retired words: component (except in exam notes), hub, dashboard, assignment, assessment bank (students never see "bank"), nugget (becomes "grammar point"), To-do, set work (becomes "Tests" as the tab and "work" in prose).

---

## 8. How to build it so it stays built

The review found 433 hand-copied navigation blocks. Any redesign applied page by page will drift the same way within a year. The restructuring needs a **build step**.

Proposal: a static site generator (Eleventy is the natural fit for a GitHub Pages site: Node, no framework, Markdown and JSON in, HTML out) with:

- **One course manifest** (`courses.json`, grown from `course-map.js`): for each course its subject, level, exam, years, topics and lessons (with a `written` flag), set texts and sections, practise tools, vocab list, quiz bank. Every hub, card, tab, breadcrumb, sitemap entry and redirect is generated from it. "Is this real?" is answered in one place.
- **Templates** for the ten page types in section 5. Lesson content is authored in Markdown with a small set of shortcodes (figure, key facts, exam focus, flashcards); set texts stay as the data files the parallel reader already uses.
- **The shared CSS** as one file plus the component layer; no inline styles in templates.
- **Redirect stubs** generated for every old URL.
- GitHub Actions builds and deploys on push, so authoring stays "edit a file, push".

The on-page admin editor can keep working: it would commit to the Markdown source instead of the HTML.

If a build step is unwanted, the fallback is a client-side `app-shell.js` that injects header, footer and tab bars from the manifest at load time. It fixes the navigation drift but not the page-template drift, and it costs a flash of unstyled chrome on every page. The build step is the better investment.

---

## 9. Migration order

Each step leaves the site working.

1. **Manifest and shell.** Write `courses.json`; build the shared header, footer, tab bar and breadcrumb; apply to every page (by build or by injection). Visible result: one navigation everywhere, signed-in state everywhere, no dead chrome links.
2. **Course pages.** Create the course page for each shipped course with Overview, Learn, Practise tabs from the manifest; move the dashboard into Progress and To-do into Tests. Subject pages become course choosers. Visible result: the student has one place per course; the sidebar app is gone.
3. **Lesson and set-text templates.** Port the real lessons into the one lesson template; port the six texts onto the one reader; add questions to set texts. Stubs stop being pages.
4. **Teach.** Class page with the five tabs; one Set work flow; unified Results; Resources tab; join codes; teacher verification.
5. **URLs.** Move out of `/version2/`, generate redirects, new sitemap, `404.html`, legacy folders parked.
6. **Polish.** Component audit against section 6, contrast, phone pass, print, performance (images, lazy loading, per-course data).

---

## 10. Decisions this proposal needs from you

1. **Course as the unit, with one page and five tabs** (section 1). This is the structural decision; everything else follows from it.
2. **No sidebar app.** The course switcher in the header replaces it for students; teachers get the Teach area with tab bars. If you want to keep a sidebar for teachers, the class page still works inside it.
3. **Move out of `/version2/`** with generated redirects (section 4).
4. **Build step** (Eleventy or similar) versus client-side injection (section 8).
5. **Join codes for classes** in addition to student sharing codes, and **teacher verification** (school email domain or admin approval).
6. **Content triage**: which of the five stub-heavy Classical Civilisation components stay listed as courses with honest counts, and whether the legacy Iliad, Aeneid and Greek material is migrated or retired.
7. **Compact headers on inner pages** (section 6): a visible change to every lesson and set-text page.
