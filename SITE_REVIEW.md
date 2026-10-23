# Classicalia: whole-site review (October 2026)

> **Status:** review and recommendations. No application code was changed by this document.
> **Scope:** the live product in `version2/` (443 pages), `auth/`, the Supabase-backed tracking and admin pages, the tools, and the legacy root folders as far as they affect visitors.
> **Method:** every page in the live set was parsed by script (10,305 links and asset references checked against disk), the core pages were read in full, thirty key pages were rendered in headless Chromium at desktop (1366px) and phone (390px) widths, and five parallel deep-dive reviews (student journey, teacher journey, content pages, tools, site integrity) were reconciled into this document. Every concrete finding cites `file:line` as the repository stands at commit `940c66f`.
> **Relationship to `PRODUCT_OVERHAUL_PLAN.md`:** that plan's diagnosis ("two products wearing one logo", five overlapping assessment surfaces) is confirmed here. This review goes further in three ways: it measures how far the problems extend, it adds a third product the plan does not name (the content catalogue itself, most of which is empty), and it lists the functional defects that any redesign has to carry as well.

---

## 1. Executive summary

Classicalia today is three products sharing a logo, a colour scheme and a starfield.

1. **A marketing site and content catalogue** (homepage, three subject hubs, eight component hubs, 332 revision pages, 66 set-text pages). Polished shell, strong where content exists, but **284 of the 332 Classical Civilisation lesson pages are placeholder stubs** that the catalogue advertises as "Available". The Greek hub has one working link.
2. **A learning app** (dashboard, testers, quizzes, homework, friends, profile). The student dashboard is the best page on the site. Yet from any content page a signed-in student has no route back to it, and on hubs, set texts, testers and quizzes they still see a "Sign in" button that goes nowhere.
3. **A teaching app** (class dashboard, Do Now, weekly tests, assessment bank, quick mark, admin). One strong page (the class dashboard) surrounded by four assessment tools that **no menu or page links to**. A teacher who does not know the URL cannot set a test, assign a bank assessment or mark an answer.

The five changes that matter most, in order:

| # | Change | Why it comes first |
|---|---|---|
| 1 | **One navigation shell on every page**, rendered from one script, aware of who is signed in. | Removes the wall between learning and tracking. Fixes 1,099 dead `href="#"` links in one edit. Every other change is easier once the shell is shared. |
| 2 | **Honest coverage.** Badge stub lessons "Coming soon", show real counts on hubs, fix the Greek hub, link or retire the legacy Iliad, Aeneid and Greek material. | A student who clicks through five "Available" courses and finds 229 empty pages does not come back. This is the biggest trust problem on the site. |
| 3 | **Make the teacher tools reachable and coherent**: one "Set work" action (Homework, Do Now, Test, Reading), one Results view that includes bank submissions, rename the printable "Do Now builder". | Four of five assessment tools are unreachable today; one of them has no results view at all. |
| 4 | **Fix the functional defect register** (section 8): wrong login path, dead buttons, broken images, legend mismatches, mobile breakages, Gold Rush failing for Homeric classes, Grammar Gym writing to a list nothing reads. | Most are one-line fixes. Together they are what makes the site feel unfinished. |
| 5 | **Collapse the duplicated engines and inline styles** into shared modules (one vocab tester, one quiz page, one bank loader, one footer, one set-text stylesheet). | 570 KB of inline CSS and 1.9 MB of inline JS across pages is how the "Sign in" regression happened: a 433-file nav edit was never completed. |

What should be kept, untouched: the homepage design and its About curtain, the student dashboard's "Your next step" card, `course-map.js` as the single registry of courses, `bkt-store.js`, the Latin vocab tester's learning design, the A-level parallel reader, the Odyssey lesson template, the teacher class dashboard's data layer and homework breakdown, `classroom.js` presentation mode, the printable tools' print CSS, and the Halloween skin's additive implementation.

---

## 2. The site as three personas experience it

### 2.1 A one-time visitor (parent, student from another school, teacher browsing)

**What works.** The homepage is handsome and clear. The three subject cards are the right front door. The subject hubs are organised by exam board and component, which a teacher will recognise instantly. Where a revision page exists (Gracchi, The Gods, New York Kouros, the Odyssey reading guides) it is excellent: scannable facts, an italic "why it matters" analysis, exam-focus questions, flashcards.

**What goes wrong, in the order they meet it.**

- The hero copy sells two different things. The cards say "Browse resources"; the paragraph beneath them describes "testers that remember every answer". A visitor cannot tell whether this is a resource library or an app (`version2/index.html:174-196`).
- Four donation asks on one page: nav "Support us", the About curtain, the support band, the footer. One is enough; two at most.
- "About" is a working curtain on the homepage only. On every other page the link is `href="#"` (418 nav instances, 77 footer instances).
- The Classical Civilisation hub badges eight components "Available". Five of them lead to hubs whose lesson rows look identical whether the page is real or a stub, and 284 of 332 lesson pages are stubs (`classical-civilisation/index.html:72-74,117,123`; stub example `greek-art/3-6-parthenon-frieze/revision.html:63-69`). The "6 lessons" count badge even uses the grey "soon" class, so the one visual cue is inverted (`greek-art/index.html:101,137`).
- The Greek hub has one live link (the vocab tester, `greek/index.html:61`) and 38 rows pointing at `#`. The coming-soon script collapses them into five "show what's planned" buttons, so the page is essentially empty.
- "The Iliad" and "Virgil's Aeneid" on the A-level list are `href="#"` with a "Compulsory" badge and no "Coming soon" badge, so they look live and go nowhere (`classical-civilisation/index.html:94-108`). Legacy content for both exists at `classical-civ/iliad/` and `classical-civ/aeneid/` and is unreachable.
- Exam codes lead every row and eyebrow. Useful for teachers, noise for students, and inconsistent: the Latin hub puts A-level prose at H443/02 and verse at H443/03 (`latin/index.html:182,254`) while every set-text page says 03 and 04 (`alevel/nepos-hannibal/section-1.html:34`).
- There is no site search. The per-hub search finds lessons in one component only and cannot say that 60 of 61 results are empty.
- Mobile: the Cupid & Psyche and Baucis set-text pages (18 pages) carry 500 lines of inline CSS with no media queries; the two-column passage grid stays two columns on a phone (`cupid-and-psyche/section-1.html:162`). On the Aeneid II pages the columns do stack, but a phone visitor sees the Latin followed by thirteen empty numbered lines, because the English is hidden until tapped and the only hint is the tiny grey "step · click to reveal" (`aeneid-2/section-1.html`, rendered at 390px).
- A bookmark or Google result for `/latin/` or `/greek/` gets GitHub's generic 404. There is no `404.html` and no index in those folders. The sitemap still advertises 274 legacy URLs beside 425 current ones.

### 2.2 A student with an account

**What works.** Registration is clean. The dashboard's order is right: what is due, what to do next, the confidence map, then Revise and Practise. The "Your next step" card with a remembered chapter range is the single best piece of learning design on the site (`tracking/dashboard.html:960-1088`). The Revise section reads lesson lists live from the hub pages and remembers where you left off. The testers' typing gate, three-distinct-days mastery rule and session summary are sound.

**What goes wrong.**

- **After confirming their email the student lands on the marketing homepage**, with no "you're in, pick your courses" step (`auth/recovery-guard.js:33-39` forwards recovery tokens only). Seven clicks plus an email round-trip to the first question.
- **The wall.** Of 409 pages under `subjects/`, three link to the dashboard. Revision pages add prev/next and an in-topic sidebar, but no "back to my course". `revision-nav.js` already knows the course index URL, so this is cheap to add.
- **"Sign in" on content pages.** 410 pages ship a hard-coded `<a href="#" class="nav-cta">Sign in</a>` and never load the account system. For a signed-out visitor this link does nothing on any of them. For a signed-in student, `page-editor.js` patches the real account menu in on the 318 revision pages that load it (`page-editor.js:147-163`), a workaround that lazily loads Supabase from the side. It is absent from the 66 set-text pages, the 14 Odyssey lessons, all 11 subject and component hubs, both vocab testers, both quizzes and the Odyssey tester. So a signed-in student doing their Latin set text, or taking the quiz that saves their progress, still sees "Sign in" (`latinvocabtester.html:773`, `greekvocabtester.html:525`, `quiz/myth-and-religion.html:192`, `quiz/the-homeric-world.html:185`, `the-odyssey/tester.html:212`).
- **Wrong sign-in links in the testers.** The quizzes' "sign in to sync" goes to a subject page, not the login page (`myth-and-religion.html:406-407`, `tester.html:477-478`). `auth.js` supports `?next=` returns (`auth/auth.js:116-120`) and nothing uses it, so every sign-in from a tester loses the student's place.
- **Course switching silently lies.** `dashboard.html?course=X` is replaced by the student's first course when X is not ticked (`dashboard.html:1240-1241`). The Myth & Religion hub's "Track my progress" and the quizzes' "See my progress" can land a Latin-only student on their Latin dashboard with no explanation.
- **Seven names for set work** (Set work, To-do, To complete, Homework, weekly test, assigned assessment, "+ New assignment") and **five for the dashboard** (My Progress, Your progress, My courses, Progress, Open course). Five places to choose courses. "Building" means two different states in the same page (`dashboard.html:784` vs `:542,776`).
- **Help modal describes removed UI** ("The five queues, the boxes at the top", `dashboard.html:352-360`) and says "hover any square"; tooltips are mouse-only, so the confidence map is unreadable on a phone (`:808-833`).
- **The weekly-test cards on To-do all link to the list page**, not the test (`todo.html:152`; `weekly-test-take.html` has no `?test=` handling).
- **Practice page sends signed-out students to a URL that does not exist** (`/version2/auth/login.html`, `tracking/practice.html:77`). The page is also linked from nowhere a student can reach.
- Friends and Profile use the marketing top nav; the dashboard uses the sidebar. Clicking Friends in the sidebar makes the sidebar vanish. Profile duplicates the dashboard's homework and course launcher before the student reaches the password field.
- Copy leaks: "check that database migration 037 has been applied" (`dashboard.html:1331`), "Ask Lawrence" (`profile.html:434`), raw Supabase error strings on register and login.
- The set-work card says "All done" for a student with no class and no teacher (`course-dashboard.js:137`). The weekly-goal card nags every student and counts only vocab sessions, so a student who did their weekly test sees "0 questions answered" (`dashboard.html:1481-1529`).
- The dashboard loads every course's data (796 KB, 22 blocking head scripts) for every student (`dashboard.html:12-27`); `homework.js` already has a lazy loader it could use.
- Grammar Gym progress is written to a list (`latin-gcse-grammar`) that no dashboard, teacher page or course map reads (`latin-grammar-gym.html:172`). The student sees "Synced" and nothing appears anywhere. The gym itself has one chapter, one grammar point and 19 questions.

### 2.3 A teacher

**What works.** The class dashboard (`tracking/teacher.html`) answers "how is this student doing?" well: Needs attention, the per-student panel, the homework breakdown down to each typed answer, the parent-ready PDF. Manage classes with co-teachers is thorough. The live Do Now with its leaderboard and Gold Rush is a genuinely good classroom loop. The printable tools (Do Now builder, Exam paper builder, Look Cover Write Check) have excellent print CSS.

**What goes wrong.**

- **Anyone can register as a teacher.** The role is a radio card with no verification of any kind (`auth/register.html:66-78`, `auth/auth.js:41-49`). The mark-scheme band on the Myth hub says "Teacher accounts are verified manually", which is not what the code does (`myth-and-religion/index.html:392`). This is a safeguarding gap, and its two dead links ("Sign in", "Request access" both `#`) compound it (`:372`).
- **Four of five assessment tools are unreachable.** The sidebar offers Classes, Do Now, Tools (`tracking-nav.js:49-56`); the comment says the bank, weekly tests and quick mark "still work by URL but are kept out of the menu". A repository-wide search finds zero inbound links to `weekly-test.html`, `tracking/bank.html` or `quick-mark.html`. Two are then gated again by admin-only flags (`weekly-test.html:125-127`, `bank.html:225-226`).
- **"Do Now" is two unrelated products.** The sidebar item is a live, tracked class drill (`tracking/do-now.html`). The Tools hub item is a printable starter-sheet builder that needs no account (`tools/do-now.html:8,207`). Both are one click from the teacher sidebar.
- **Assigned bank tests have no results view.** `bank.html` only assigns (`:394-413`) and confirms with an `alert()`. Submissions land in `weekly_test_submissions` with `test_id` null; the weekly-test Results tab filters on `test_id` (`weekly-test.html:368`). A teacher can never see who took a bank test or what they scored.
- **Getting 30 students into a class** means each student finding their sharing code on their profile and sending it to the teacher out of band, then the teacher pasting 30 codes (`teacher.html:366-386`). There is no class join code, invite link or CSV import.
- Dead and misleading controls on the class page: "View student dashboard" opens the teacher's own empty dashboard (`teacher.html:449`; `dashboard.html` reads only `?course=`); the Do Now deep link targets an element that no longer exists although `do-now.html` accepts `?class=` (`:2382-2383`, `do-now.html:238-241`); the empty state says "Click + Create class" and the control is a bare "+" beside the Classes label (`:1200`, `tracking-nav.js:127`).
- `civ-alevel` classes are offered in the create modal (`:336`) and fall through to the GCSE Latin model (`:946-952`), so an A-level Civ class shows a Latin word map and an empty homework topic picker.
- Co-teachers cannot run a Do Now or assign bank tests in the UI (`do-now.html:229`, `bank.html:189`) although the database policy allows it (`081_v2_co_teachers.sql:192-240`) and the class page promises it (`teacher.html:3230`).
- Legend mismatch on the class confidence map: the legend labels grey "Low" while the renderer uses grey for untried words, and two legend entries share one colour (`teacher.html:661-667` vs `:992-999`, `:197-199`). The student table hard-codes "words" for Civ classes (`:2469-2470`).
- No route from a class to its course's content, and no way to set a page as homework: `v2_assignments` has no page or reading kind (`teacher.html:1670-1705`). `course-map.js` already holds the per-course revision links (`:100-176`) and never surfaces them to teachers.
- Weekly tests cannot be deleted and "+ New test" inserts a row immediately (`weekly-test.html:159-178`); Do Now "Clear" deletes with no confirmation (`do-now.html:717-722`); the weekly-test Results tab has no print or CSV, the one thing a teacher wants for a mark book.
- Admin is a third shell with three different nav bars (`admin/bank.html:151-169`, `nuggets.html:41-58`, `plans.html:58-75`). "Nuggets", "concepts" and "Grammar" are three names for one idea. `admin/bank.html` is gated by a teacher permission yet nothing links a permitted teacher there, and its refusal points to a page only admins can open (`admin/bank.html:239-240`).
- On a phone the eight-column student table has no scroll wrapper inside a card with `overflow:hidden` (`teacher.html:148,636`); the page scrolls horizontally. Both word maps are hover-only, so nothing happens on an iPad.

---

## 3. Big picture: why it feels like separate pages

The owner's plan names two worlds. The data shows three shells and a fourth half-built one:

| Shell | Pages | Nav | Account aware? |
|---|---|---|---|
| Marketing top nav, current template | 8 (homepage, 3 subject hubs, tools hub, 4 printable tools) | Latin · Greek · Class. Civ. · Tools · About · Support · account menu | Yes |
| Marketing top nav, stale template | 410 (hubs, revision, set texts, testers, quizzes) | same links, About `#`, Sign in `#` | Only where `page-editor.js` patches it (318 pages) |
| App sidebar | 10 tracking pages | Students: My courses · Set work · Friends. Teachers: Classes · Do Now · Tools | Yes |
| Admin / auth variants | 4 admin + 4 auth + 2 account pages | three different admin navs; auth has 3 links; profile and friends add "My courses" to the marketing nav | Yes |

The count that explains everything else: **433 pages carry their own hand-copied copy of the nav, in 18 markup variants, and 424 carry a footer in 11 variants.** When the account menu was built, the template edit reached 25 pages and stopped. The same mechanism explains why the footers on the subject hubs link their own subject to `#`, why 14 Politics revision pages have no favicon, why 12 Cupid & Psyche pages share a byte-identical 12.5 KB style block, and why the Myth hub's module tabs to its sibling hubs are `#`.

Three further structural facts shape the recommendations:

- **The course registry already exists.** `course-map.js` knows every course, its label, its vocab list, its hub URL, its revision indexes and its practise tools. It drives the student sidebar and dashboard and nothing else. The Tools hub, the subject hubs and the teacher page each maintain their own hand-written lists that disagree with it.
- **The content is three engines and six templates.** Hubs come in five patterns (subject, numbered-lesson component, named-topic component, course with reading guides, set-text contents). Lesson pages come in three (stub, tabbed revision page with no URL state, Odyssey lesson with hash routing and progress). Set texts come in three reading engines (word-reveal with inline CSS, line-reveal on `settext.js`, data-driven parallel reader). The Odyssey lesson template and the parallel reader are the good ones.
- **Assessment is seven things with four authoring flows**: homework, live Do Now, printable Do Now, weekly test, bank assessment, quick mark, AI practice. Weekly test and bank test share an engine, a schema and a student experience and differ only in authorship. Homework and Do Now drill the same ranges through the same tester and differ only in being asynchronous or live.

---

## 4. Target shape: one educational product

This section is the design the recommendations below serve. It adopts the owner's "course, four verbs" model and adds what the review found missing.

### 4.1 One shell, three states

One `app-shell.js` renders the header and footer on every page from one definition, with three states:

- **Signed out:** Latin · Greek · Class. Civ. · Tools · About · Sign in. About goes to a real page at `/version2/about/` (the curtain content, which is good) rather than `#`.
- **Student:** the same top bar plus a persistent "My courses" rail (or a course switcher in the bar) so Progress, Set work and Practise are one click from any revision or set-text page. The current sidebar becomes this rail.
- **Teacher:** Classes · Set work · Results · Mark · Tools, plus Admin for admins.

Ship criterion: from any set-text page a signed-in student reaches their course dashboard in one click; a teacher presenting a set text in classroom mode reaches their class in one click.

### 4.2 Course as the unit; four verbs

Every course exposes Learn, Practise, Assess, Progress. The student dashboard already has this shape (Today, Progress, Revise, Practise). Extend it rather than replace it:

- **Learn** is the hub content, filtered to what is real.
- **Practise** is the per-course tool list from `course-map.js`, which already exists.
- **Assess** unifies homework, Do Now, tests and bank assignments into one "set work" list with a due date and a type label.
- **Progress** is the current map and side column, with a tappable (not hover-only) map and a three-state legend (not yet · working on it · secure) in student-facing copy, keeping the finer states for the teacher view.

### 4.3 Honest content

Coverage is driven by one flag. The `shipped` idea in `course-map.js` becomes the single source of truth for "is this real", read by the subject hubs, the component hubs, the Tools hub and the dashboard. Stub rows are badged "Coming soon" and collapsed by the same script that already does this on subject hubs. Hub counts say "11 of 66 lessons written". The Class Civ index badges show real coverage. The Greek hub shows what exists and one collapsed "planned" section.

### 4.4 One assessment vocabulary

Student-facing: **Homework** (asynchronous drill with a target), **Do Now** (the live version of the same), **Test** (anything marked against a mark scheme, whether teacher-authored or from the bank). Teacher-facing: one **Set work** button with four kinds (Homework, Do Now, Test: write or pick from bank, Reading: a page plus a due date), one **Results** view that unions homework attempts, Do Now archive, weekly-test and bank submissions, and **Mark** for quick mark. The printable starter-sheet builder is renamed and stays under Tools.

### 4.5 One tools catalogue

The Tools hub is generated from `course-map.js` with two shelves: "For the classroom" (printables, visualiser, live Do Now console) and "Practise" (one card per course: tester, grammar, quiz, game). Nothing on disk is unreachable; today 11 of 16 interactive tools are absent from the page called Tools, and Cursus Honorum is linked from nowhere.

### 4.6 One content template per kind

- Lesson pages adopt the Odyssey lesson model (`lesson.js`): hash-routed panels, section progress, self-check ticks, a "test yourself on this" link into the course's quiz, and progress persisted to Supabase for signed-in users so the dashboard and teacher can see reading.
- Set texts adopt the parallel reader's data-driven shell for all six texts, keeping `classroom.js` presentation mode, and gain practice questions (comprehension, 8 and 10 mark style questions, a set-text vocabulary test), which no Latin literature page has today.

---

## 5. Section-by-section findings

Each subsection lists what is good, functional defects (broken, wired wrong, misleading) and structural or stylistic issues. Items already covered in section 2 are referenced briefly.

### 5.1 Homepage (`version2/index.html`)

Good: the design, the About curtain, the "How it works" band with its interactive sample map, the honest "try the tester without signing in" line, the Halloween skin's additive implementation and `?skin=classic` escape hatch.

Functional:
- `heroStats` (visits, users) is permanently `display:none` (`:200`).
- `<meta charset>` is the tenth element in `<head>`, after two stylesheets and five scripts (`:4-14`). The spec wants it first.
- `halloween.js` is a synchronous head script; it only needs `DOMContentLoaded`.
- The saved copy at `assets/skins/classic/index.html` is public, orphaned, has every relative link and its stylesheet broken, and duplicates what git already holds (`93d9cab`).

Structural and stylistic:
- Two value propositions in the hero (resources vs tracking app); the tester paragraph sits between the subject cards and the account button, where it reads as a caption for the cards.
- Four donation asks on one page.
- Seasonal theme jump: the homepage is purple and orange, every other page is navy. The first click is a visible theme change. Either scope the skin to the whole site via `classicalia.css` or accept it as a homepage-only flourish.
- The "Tracked courses" chips name eight courses; the Class Civ hub advertises eight components as available. The two lists do not match, which is right (only three Civ courses are tracked) and is the first hint that "Available" means different things on different pages.

### 5.2 Subject hubs (`subjects/latin/`, `greek/`, `classical-civilisation/`)

Good: the GCSE / A-level tab structure, exam-cycle handling on the Latin hub (current cycle up front, previous cycle in a collapsed details element, years stated), `coming-soon.js`.

Functional:
- Footers link the page's own subject and the others to `#` (`latin/index.html:476-480`, `greek/index.html:350-353`, `classical-civilisation/index.html:154-156`).
- "Agrippina and the Rise of Nero, Group 1" is badged Available with `href="#"`, so it survives the coming-soon collapse as a visible dead row (`latin/index.html:355-359`).
- Iliad and Aeneid rows are dead but unbadged (section 2.1).
- H443 component codes disagree between the Latin hub and the set-text pages (section 2.1).
- The Greek hub links one thing.

Structural and stylistic:
- The Latin hub injects a "Tools" group (Today's Do Now, Vocabulary tester) at the top of the exam catalogue (`latin/index.html:57-71`). Tools belong under a Practise heading per course, not as a pseudo-component.
- Exam codes as the leading column on every row; move them to a secondary position or show them for teachers only.
- The GCSE Latin Language component shows only "Coming soon: show what's planned (1)" while the vocab tester, grammar gym, noun and verb endings and Latin Quest all exist for that course and are listed nowhere on this page.
- The 2026 exam year is not visible in student language; "sitting in 2027? use these" would help.

### 5.3 Component hubs (eight under `classical-civilisation/`, five under `latin/literature/`)

Good: the accordion plus search pattern on the numbered-lesson hubs is the right one; the Odyssey hub's course plan, workbooks, topic tester and essay checkpoints are a model course page; the Myth hub's teacher resources band is a good idea.

Functional:
- Stub rows look identical to real ones; lesson-count badges use the grey "soon" class (section 2.1).
- Myth hub module tabs to the three sibling hubs are `#` (`myth-and-religion/index.html:77-79`); Baucis "otium" tab is `#` (`baucis-et-philemon/index.html:13`).
- Myth hub teacher band "Sign in" and "request access" are `#` (`:372`); "verified manually" is not implemented.
- Six PDF links open in a new tab without `rel="noopener"` (`myth-and-religion/index.html:269-341`).
- Every component hub places its `<style>` after `</head>` and before `<body>` (`greek-art/index.html:9-10` and others), which browsers tolerate and validators reject.

Structural and stylistic:
- Four hub templates for one job. The Myth and Homeric hubs add a four-card CTA grid (quiz, work in order, smart review, my progress) in a three-column layout, so "My progress" sits alone on a second row.
- "Revision Page" as the row title on every Politics and Myth topic; `revision-nav.js:50-61` has special code to rename these, which is the sign the titles should be the topic names.
- The Odyssey lesson sidebar lists the Telemachy books twice under different names and the Topic 1 lessons twice, because `revision-nav.js` injects an "In this topic" group next to the page's own groups, and both scripts add a pager (two Previous/Next controls per page).
- The Homeric World sections 6 to 11 (GCSE Odyssey books) and the A-level Odyssey course are separate silos with different templates and no cross-reference.

### 5.4 Revision pages (332 under `classical-civilisation/`)

Good: the structure where real (facts, analysis, exam focus, flashcards), the accessible lightbox, prev/next derived from the hub markup.

Functional:
- 284 stubs advertised as available.
- Nine broken images in the Homeric World pages, pointing at per-lesson image folders that hold only a README manifest (`1-4-troy-and-homer/revision.html:142,146,213,230`; `2-1-palace-megaron:129,133`; `2-2-hunting-elite:137`; `2-3-armour-weapons-warfare:140`; `2-5-linear-b:155`).
- Tabbed pages keep no URL state: refresh, back and sharing lose the panel; a teacher cannot link to "the Exam focus tab" (`greek-art/2-1-new-york-kouros/revision.html:522-539`).
- Myth & Religion "view image" popups are hover-only on a non-focusable span, so they do nothing on a phone (`the-gods/revision.html:53-54`).
- The Odyssey "Resources" sidebar group (the Topic Tester link) is hidden on phones because the injected group pushes it to fifth position and `lesson.css:275` hides groups from the fourth (`revision-nav.js:102-105`).
- 14 Politics pages have no favicon link.

Structural and stylistic:
- No "test yourself on this topic" link from any revision page except the Odyssey lessons, although quizzes exist for Myth, Homeric World and the Odyssey.
- Reading progress is localStorage only; nothing reaches Supabase, so the dashboard's "Carry on" is per device and teachers cannot see reading.
- Each real page carries 100 to 500 lines of inline CSS redefining figure, table and quote components that belong in `revision.css`.
- No print stylesheet on any of the 332 pages. Students print revision notes.
- Nine images over 1 MB on phone-read pages (largest 5.8 MB; one page weighs 12 MB). None lazy-loaded, none with width and height.

### 5.5 Latin literature (66 pages)

Good: the A-level parallel reader (data-driven, touch-aware, persisted "hide English"); the Aeneid II style-note categories; `classroom.js` presentation mode with pen, highlighter and undo.

Functional:
- Cupid & Psyche and Baucis pages break on phones (no media queries).
- Aeneid II on a phone shows thirteen empty numbered English rows with no visible hint that tapping reveals them.
- No account menu on any of the 66 pages; `page-editor.js` is not loaded here, so the signed-in patch does not apply.
- Stale comments in the shared shell: `settext.js:3` and `settext.css:10` each name a partner file that does not exist.

Structural and stylistic:
- Three reading engines for six texts. A GCSE student doing Prose B and Verse B meets two unrelated interfaces with different control bars.
- No practice questions anywhere in `subjects/latin` (grep for "practice" returns none of 66 files). No scansion exercise; Aeneid II marks vowel quantities only.
- Contents pages do not show which sections a student has opened.
- 12 Cupid pages share a byte-identical 12.5 KB style block; the Baucis pages carry a near-identical copy. Roughly 300 KB of duplicated CSS that belongs in `settext.css`.

### 5.6 Tools, testers, quizzes and games

Good: `bkt-store.js`; the Latin tester's learning design and deep-link modes; the quizzes' partial-credit scoring and the Odyssey explain gauge; the Do Now live loop; the printables' print CSS; keyboard support throughout; the visualiser; proper CC0 credits in the games.

Functional:
- Dead "Sign in" on five tracking testers (section 2.2); wrong "sign in to sync" target on three quizzes.
- **Gold Rush cannot run a Homeric World or Greek Do Now.** Only the Myth list builds Civ questions; every other list goes to the vocab builder, which requires a `latin` field (`gold-rush.html:238,243`). The teacher page lets a Homeric class launch it (`tracking/do-now.html:191-194,490-499`) and students get "no questions could be loaded".
- Look Cover Write Check hides the answer input at phone widths (`cover-write-check.html:113,380`).
- Grammar Gym writes to a list nothing reads; its data is one chapter and 19 questions (`tools/grammar/data/latin-gcse-grammar.js:556-563`).
- The Greek tester is a stale fork of the Latin one: it ignores the `accept` field (`greekvocabtester.html:1518`) and keeps the stale word-range bug the Latin tester fixed (`:916-918` vs `latinvocabtester.html:1298-1300`).
- The vocab tester's fixed sync pill sits under the nav's Sign in button on desktop (`latinvocabtester.html:41-57`).
- Six GCSE headwords appear in two chapters and share one mastery key (`latin-gcse.js`, e.g. lines 5-6); two words sit at `chapter: 0` and are never tested (`ne`, `verto`).
- Session summary tells anonymous users "Every answer has been saved to your progress" and offers "See my progress" (`latinvocabtester.html:2419,2429`; same in Greek, Myth, Odyssey).
- Cursus Honorum (4.8 MB of assets) is linked from nothing in `version2/`. Latin Quest is linked only from the signed-in dashboard. Both carry "Back to Classicalia Tools" to a page that does not list them.
- `tracking/practice.html` (AI grammar practice) has no inbound link from any student page.
- Practice test is the one practice page that never records to the mastery store.

Structural and stylistic:
- Tools hub lists 5 of 16 tools; four of the five are teacher printables, so "Tools" is a teacher page in disguise.
- Per-subject parity is uneven: Latin has tester, grammar, two games and live Do Now; Greek has a tester; Class Civ has quizzes for three of eight components.
- Three near-identical engines: Latin and Greek testers (about 1,700 shared lines), Myth and Homeric quizzes (7 lines differ), the Odyssey tester (a third copy). Three hand-rolled bank loaders (`do-now.html`, `practice-test.html`, `homework.js`).
- Shell chaos across tools: grammar pages have three nav links and no Sign in; the gym has no footer; quizzes and grammar pages load no fonts link; games are fully standalone with `user-scalable=no`.
- The vocab tester's setup has no phone breakpoint: three selects at 140px minimum in a 280px column, 42px headwords that overflow the card, a two-column MC grid with no single-column fallback.
- `latin-quest/game.js` (1,190 lines) is dead code.

### 5.7 Student app (dashboard, to-do, friends, profile, auth)

Covered in section 2.2. Additional items:

Functional:
- `profile.html`'s `escapeHtml` is `String(s)`, so a class with no type renders the word "null" (`:536-538`).
- `todo.html`, `weekly-test-take.html`, `bank.html` and `practice.html` await `getUser()` with no try/catch, so a network failure leaves "Loading…" forever.
- `weekly-test-take.html:97` uses the insert result without checking for an error.
- `homework.js` has no `civ-odyssey` entry, so any future Odyssey homework deep-links to `#` (`:25-33,41-43`).
- Friends knows totals for five lists only (`friends.html:345-351`), so A-level and Odyssey leaderboards lose their "out of N".
- The school autocomplete on register selects every user's school anonymously (`auth/register.html:106-110`); either it leaks school names or RLS silently blocks it.
- The sharing code is the same code for teachers and friends; the friends page tells students a friend "only" sees scores, which a teenager will reasonably doubt (`friends.html:150`).

Structural and stylistic:
- About 150 lines of dead CSS in the dashboard's inline style (queues, dash-grid, word-row, smart-btn, action-strip: `dashboard.html:38-46,144-222,264-266,280-295`), and two conflicting `body { background }` rules (`:37`, `:298`).
- Six progress-bar classes across four student pages.
- The dashboard's eight-state legend uses four actual colours, so the legend promises distinctions the squares cannot show (`dashboard.html:130-137,531-547`).
- The Civ quiz view re-implements the vocab view as a second renderer with different thresholds (`:1587-1873` vs `:745-787`).
- No cross-course "today": a student with Latin homework and a Myth Do Now sees one at a time.
- Register's teacher description says "see their vocabulary progress", which undersells the product.

### 5.8 Teacher app and admin

Covered in section 2.3. Additional items:

Functional:
- Do Now empty state tells Greek and A-level teachers to "Create a GCSE Latin or Myth & Religion class" (`do-now.html:230`); only three class types can run one (`:220`).
- "Topic Chapters 1–3" label bug (`do-now.html:690`).
- "Class has reached" for Civ only recognises Myth topics (`teacher.html:2121-2127`), stored in a column called `grammar_chapter`.
- Stale copy: "Settings tab" (`weekly-test.html:295`), "your Anthropic Console workspace" (`:435`).
- Question edits have no dirty tracking; "← All tests" discards silently (`weekly-test.html:329-346`); the bank editor does this properly (`admin/bank.html:248`).
- Teachers and admins both upsert the same budget row with different meanings ("Monthly cap" vs "safety cap"), so a teacher can raise the admin's backstop (`weekly-test.html:433-441`, `plans.html:191-202`).
- Weekly goal is edited with `window.prompt()` while every other edit uses a modal (`teacher.html:1341-1364`).
- Hidden pages set `data-active` values that match no sidebar item, so nothing highlights (`weekly-test.html:61`, `quick-mark.html:80`, `bank.html:111`).
- Dead quick-create wiring in the shared nav (`tracking-nav.js:136-137,148-154`).

Structural and stylistic:
- Nine inline style blocks each redefining `.btn`, `.card`, `.gate`, `.lbl`, `.toast` with slightly different values; no shared forms layer in `classicalia.css`.
- Three print systems (class report, student PDF, bank PDF) with nothing shared; the student PDF sets `@page { margin: 0 }` which most printers clip and loads `starfield.js` into the print window.
- The class page loads every vocab list and quiz bank synchronously (18 head scripts, about 720 KB) regardless of the teacher's classes.
- Emoji icons on some pages, stroke SVGs on others.
- "pupils" and "students" used interchangeably.
- The teacher sidebar's "Tools" leads to the marketing Tools hub, a different shell.

### 5.9 Legacy folders, SEO and technical hygiene

Functional:
- No `404.html`. `/latin/`, `/greek/`, `/english/`, `/dashboard/`, `/tools/` have no index and 404 to GitHub's page.
- Sitemap: 704 URLs, 274 legacy, no `lastmod` on any, auth pages included. Only 23 legacy pages carry a canonical to a v2 replacement.
- 22 of 24 app and account pages are indexable (`auth/*`, `admin/*`, `tracking/*`, profile, friends, teacher tools).
- Canonical on 3 of 448 pages; meta description on 54; Open Graph tags on 2. A revision page shared in a class group chat gets no preview.
- `supabase-js@2` is unpinned on 38 pages; a breaking minor would hit auth and tracking everywhere at once.
- Fonts are declared twice (CSS `@import` on 444 pages plus a `<link>` on 26); only 23 pages preconnect.
- 121 KB favicon.
- Brand blue `#1A6FFF` on white is 4.41:1, just under AA for normal text and for white-on-brand buttons; the green "mastered" stat is 3.30:1. Muted, ink and navy tokens pass.
- 66 form controls on 25 pages have no label (worst: `teacher.html` 15, `quick-mark.html` 12; a password field on profile).
- No skip link on any page; no authored `:focus-visible` style on links, buttons or cards.
- Halloween animations have no reduced-motion guard.

Structural:
- Roughly 25 root folders (about 700 legacy pages) are unreachable from the live product and sit beside it in the sitemap. Legacy Greek, Iliad, Aeneid, Politics and Myth content exists and is the only material for some rows the new hubs show as `#`.
- Eight overlapping planning documents at the root; `WEEKLY_TEST_PLAN.md` still says "nothing here is built yet"; three tracking plans are superseded but unmarked; `README.md` is 13 bytes.
- `version2/tracking/course.html` is now a redirect stub to the dashboard (correct); the integrity scan flags it as orphaned, which is expected for a redirect.

Good: zero broken internal links in the live set apart from the nine awaited images and the orphaned classic copy, out of 9,012 references. Every image has alt text; every button has a label; `lang` and viewport on every page; nav active state correct everywhere; one external script origin, no analytics or ad third parties; `starfield.js` draws once and costs nothing at runtime.

---

## 6. Stylistic and design-system changes (consolidated)

1. **One shell definition.** Header, footer and support band rendered by one script (or one build step) with root-absolute paths. Delete the 433 hand-copied navs and 424 footers.
2. **One form and button layer in `classicalia.css`**: `.btn`, `.card`, `.field`, `.label`, `.toast`, `.modal`, `.gate`, `.empty-state`, one progress-bar component. Remove the nine app-page copies and the six bar classes.
3. **One revision stylesheet and one set-text stylesheet.** Move the per-page figure, table, quote, popup and passage styles into `revision.css` and `settext.css`; delete the 300 KB of duplicated inline CSS.
4. **One confidence vocabulary.** Student-facing three states; teacher-facing the finer scale; one legend component used by the dashboard, the class map and the tester tooltip, with colours that match the renderer.
5. **One icon system** (the existing stroke SVGs); retire the emoji glyphs on the Tools hub, Do Now and admin pages.
6. **Type and spacing scale.** Three slightly different kicker and card scales exist across dashboard, profile and to-do; pick the dashboard's.
7. **Colour contrast.** Darken the brand blue for text and buttons (the Halloween skin's darker orange incidentally passes), and the mastered green.
8. **Mobile rules in the shared sheets**: sidebar collapses to a bar with the course switcher, tables get scroll wrappers, map squares respond to tap, testers get a single-column breakpoint, the set-text reader stacks with a visible "tap to reveal" affordance.
9. **Print rules in the shared sheets** for revision pages and the weekly-test Results tab; one print system for the three teacher reports.
10. **Head hygiene template**: charset first, canonical, description, Open Graph derived from the h1 and first paragraph, `noindex` on app pages, pinned Supabase version, fonts declared once with preconnect, `defer` on everything that can wait.
11. **Copy standards**: British spelling throughout (already mostly so), one name per thing (Set work, My courses, Test, Do Now), no developer text in the UI, errors in plain English with a retry.

---

## 7. Functional defect register (prioritised)

Severity: **H** blocks or misleads a real task; **M** degrades a task; **L** cosmetic or latent.

| # | Sev | Defect | Where |
|---|---|---|---|
| 1 | H | 284 stub lessons advertised as Available; stub rows indistinguishable on hubs | `classical-civilisation/index.html:72-123`; component hubs |
| 2 | H | Dead `href="#"` Sign in on 410 pages (anonymous) and on ~90 pages for signed-in users; About `#` on 418 pages; footer Tools/About/subject `#` | stale nav template, e.g. `greek-art/1-1-chronology/revision.html:24-25` |
| 3 | H | Weekly tests, bank and quick mark unreachable from any menu or page | `tracking-nav.js:49-56` |
| 4 | H | Assigned bank tests have no teacher results view | `bank.html:394-431`, `weekly-test.html:368` |
| 5 | H | Teacher role self-assigned with no verification; Myth hub claims manual verification | `auth/register.html:66-78`, `auth.js:41-49`, `myth-and-religion/index.html:392` |
| 6 | H | Gold Rush fails for Homeric World and Greek Do Nows | `gold-rush.html:238,243`; `tracking/do-now.html:191-194,490-499` |
| 7 | H | Cupid & Psyche and Baucis pages break on phones; Cover Write Check answer input hidden on phones | `cupid-and-psyche/section-*.html` (no media queries); `cover-write-check.html:113,380` |
| 8 | H | Practice page login link to a non-existent URL; page orphaned | `tracking/practice.html:77` |
| 9 | M | Nine broken images on Homeric World pages | section 5.4 |
| 10 | M | Greek hub has one live link; Iliad and Aeneid rows dead but unbadged; Agrippina row badged live but dead | `greek/index.html`; `classical-civilisation/index.html:94-108`; `latin/index.html:355-359` |
| 11 | M | "View student dashboard" opens the teacher's own dashboard | `teacher.html:449` |
| 12 | M | `civ-alevel` class renders as GCSE Latin, empty homework topics | `teacher.html:336,946-952,1620-1629` |
| 13 | M | Class to Do Now deep link targets a missing element | `teacher.html:2382-2383` |
| 14 | M | Co-teachers blocked from Do Now and bank assign in the UI | `do-now.html:229`, `bank.html:189` |
| 15 | M | `?course=` silently replaced when the course is not ticked | `dashboard.html:1240-1241` |
| 16 | M | To-do weekly-test cards link to the list, not the test | `todo.html:152` |
| 17 | M | Quiz "sign in to sync" links go to subject pages | `myth-and-religion.html:406`, `tester.html:477` |
| 18 | M | Grammar Gym mastery written to a list nothing reads | `latin-grammar-gym.html:172` |
| 19 | M | Help modal describes removed queues; map tooltips hover-only (student and teacher) | `dashboard.html:352-369,808-833`; `teacher.html:2496-2510` |
| 20 | M | Class map legend wrong and duplicate swatches; "words" hard-coded for Civ | `teacher.html:661-667,992-999,197-199,2469-2470` |
| 21 | M | Myth tabs to sibling hubs `#`; Baucis "otium" tab `#`; teacher band Sign in / request access `#` | `myth-and-religion/index.html:77-79,372`; `baucis-et-philemon/index.html:13` |
| 22 | M | H443 component codes disagree between hub and pages | `latin/index.html:182,254` vs set-text pages `:34` |
| 23 | M | Greek tester ignores `accept`; stale word-range bug | `greekvocabtester.html:1518,916-918` |
| 24 | M | Myth image popups do nothing on touch; Odyssey Resources group hidden on phones | `the-gods/revision.html:53-54`; `lesson.css:275` |
| 25 | M | Teacher student table clips and scrolls horizontally on phones | `teacher.html:148,636` |
| 26 | M | Post-confirmation landing is the homepage; raw Supabase errors on register and login; no resend-confirmation | `recovery-guard.js:33-39`; `register.html:146`; `login.html:81` |
| 27 | M | No `404.html`; legacy folder roots 404; 274 legacy sitemap URLs; 22 app pages indexable | root; `sitemap.xml`; `robots.txt` |
| 28 | M | Developer copy shown to students ("migration 037", "Ask Lawrence"); "All done" with no class | `dashboard.html:1331`; `profile.html:434`; `course-dashboard.js:137` |
| 29 | M | Weekly tests cannot be deleted; "+ New test" inserts immediately; Do Now "Clear" has no confirm; edits discarded silently | `weekly-test.html:159-178,329-346`; `do-now.html:717-722` |
| 30 | M | Duplicate GCSE headwords share one mastery key; two words at chapter 0 never tested | `latin-gcse.js` |
| 31 | L | Cursus Honorum and Latin Quest unreachable for anonymous visitors; 11 of 16 tools missing from the Tools hub | `tools/index.html` |
| 32 | L | Sync pill collides with nav on desktop | `latinvocabtester.html:41-57` |
| 33 | L | Anonymous session summary says answers were "saved to your progress" | `latinvocabtester.html:2419,2429` and copies |
| 34 | L | `escapeHtml(null)` renders "null" on profile | `profile.html:536-538` |
| 35 | L | No try/catch around auth calls on four pages; insert result unchecked | `todo.html:110`; `weekly-test-take.html:78,97`; `bank.html:179`; `practice.html:76` |
| 36 | L | `homework.js` lacks `civ-odyssey` (latent `#` link) | `homework.js:25-43` |
| 37 | L | Stale copy: "Settings tab", "Anthropic Console", "+ Create class", "Topic Chapters 1–3" | `weekly-test.html:295,435`; `teacher.html:1200`; `do-now.html:690` |
| 38 | L | Unpinned `supabase-js@2`; six PDF links without `noopener`; 121 KB favicon; 14 pages without favicon | 38 pages; `myth-and-religion/index.html:269-341`; Politics revision pages |
| 39 | L | Orphaned, broken classic homepage copy | `assets/skins/classic/index.html` |
| 40 | L | Dead code: `latin-quest/game.js`, quick-create wiring, 150 lines of dashboard CSS | `tracking-nav.js:136-154`; `dashboard.html:38-295` |

---

## 8. Recommended sequence

Each phase is independently shippable. Phases 1 to 3 remove the "separate pages" feeling; 4 to 6 finish the product. The order amends the owner's plan in one respect: honest coverage (phase 2) moves ahead of the assessment taxonomy, because it is cheaper and the trust cost of the current state is higher.

**Phase 1: one shell (the load-bearing change).**
Build `app-shell.js` from `tracking-nav.js` and `account-menu.js`; render header, footer and support band on every page in three states; a real About page; root-absolute paths; retire `page-editor.js`'s nav patch. Fix defects 2, 8, 17, 21 as a by-product. Ship criterion: from any set-text or revision page a signed-in student reaches their course in one click, and no page has an `href="#"` in its chrome.

**Phase 2: honest coverage.**
One `shipped` flag in `course-map.js` read by every hub; stub rows badged and collapsed; real counts on hubs; Class Civ index badges reflect coverage; Greek hub shows what exists; decide link, migrate or retire for the legacy Iliad, Aeneid, Politics, Myth and Greek material; add the nine Homeric images or remove the figures; fix the H443 codes and the Agrippina row. Add `404.html`, folder index redirects, canonicals from legacy pages, prune the sitemap, `noindex` the app pages. Fixes defects 1, 9, 10, 22, 27.

**Phase 3: teacher coherence.**
"Set work" button with Homework, Do Now, Test (write or from bank), Reading; one Results view including bank submissions; Mark in the topbar; rename the printable Do Now; restore the class to Do Now link; co-teacher parity; remove `civ-alevel` from the create list until modelled; a class join code or invite link; teacher verification (school email domain or admin approval) and matching copy on the Myth hub. Fixes defects 3, 4, 5, 11, 12, 13, 14, 20, 29.

**Phase 4: student coherence.**
Post-confirmation landing on "choose your courses"; `?next=` on every sign-in; honour `?course=` with an "add this course?" prompt; one vocabulary for set work and the dashboard; refresh the help modal; tappable map with a three-state student legend; Friends and Profile inside the app shell with the duplicated cards removed; plain-English errors and empty states; per-course lazy data loading. Fixes defects 15, 16, 19, 26, 28, 33, 34, 35.

**Phase 5: content templates and practice.**
Adopt the Odyssey lesson model for all revision pages (hash routing, progress to Supabase, "test yourself" link); one set-text reader for all six texts with practice questions; responsive and print rules in the shared sheets; image re-encoding and lazy loading; the Tools hub generated from `course-map.js` with two shelves; Gold Rush routed by list; Grammar Gym either wired into the dashboard or hidden until it has content; one vocab tester, one quiz page, one bank loader. Fixes defects 6, 7, 18, 23, 24, 25, 30, 31, 32.

**Phase 6: repository hygiene.**
Shared forms layer in `classicalia.css`; delete the inline duplicates; pin Supabase; fonts declared once; archive the superseded plans under `docs/plans/archive/` with status headers; a real README; delete the classic homepage copy and the dead game engine; park the legacy folders behind redirects. Fixes defects 36 to 40.

---

## 9. What is genuinely good (preserve through any redesign)

- Homepage design, About curtain, "How it works" band, and the additive Halloween skin.
- `course-map.js` as the single course registry; `bkt-store.js` with owner-tagged local cache and anonymous-to-signed-in merge.
- The student dashboard's order and its "Your next step" card; first-run inline course picker; Revise section reading live from hubs with "Carry on"; in-place course switching with `pushState`.
- The Latin vocab tester's learning design: typing gate, three-distinct-days mastery, spaced review, homework coverage passes, honest session summary, deep-link modes.
- Quiz partial-credit scoring and the Odyssey explain gauge that suggests a mark and leaves the decision to the student.
- The Do Now live loop end to end, with Gold Rush as its game mode.
- The teacher class dashboard's data layer (paged fetch, batched queries, migration-tolerant errors), Needs attention, the homework breakdown, the student PDF, Manage classes with co-teachers.
- Weekly test marking with per-answer override and an honest cost estimate; the bank authoring editor with dirty tracking and AI helpers.
- `classroom.js` presentation mode; the A-level parallel reader; the Odyssey lesson template; the Gracchi, Gods and Kouros pages as content models.
- The printable tools' print CSS and A4 preview; the visualiser; the noun-endings generator that refuses forms it cannot be sure of.
- Security posture: SECURITY DEFINER RPCs that re-check admin, server-side role checks in edge functions, repeatedly tightened RLS.
- Technical cleanliness where it exists: zero broken internal links, universal alt text and button labels, correct script order, one external origin, no trackers.

---

## Appendix: how to reproduce the numbers

The scripts used for the integrity figures (`integrity-linkcheck.py`, `integrity-pages.py`, `integrity-sitemap.py`, `integrity-contrast.py`) and the Playwright render script were run from a scratch directory outside the repository and are not committed. The stub count is a one-liner:

```
cd version2/subjects/classical-civilisation
for d in */; do printf "%s " "$d"; grep -l -i 'being written' $(find "$d" -name '*.html' ! -name index.html) | wc -l; done
```

Pages lacking the account menu:

```
grep -L 'data-account-menu' $(find version2 -name '*.html') | wc -l
```
